#!/usr/bin/env python3
"""Builds the Tagalog audio pack: one MP3 per phrase in audio/, plus audio/manifest.json.

Usage (needs internet):
  node tools/collect-texts.js
  pip install edge-tts            # engine "edge" (default): Microsoft neural Filipino voices
  python tools/make_audio_pack.py --voice fil-PH-BlessicaNeural

Optional engine "mms": Meta's open MMS Tagalog model (facebook/mms-tts-tgl, CC BY-NC 4.0).
  pip install transformers torch scipy && python tools/make_audio_pack.py --engine mms

Only missing clips are generated; clips for text that no longer exists are deleted.
"""
import argparse, asyncio, json, os, re, subprocess, sys, time, unicodedata
from datetime import datetime, timezone

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
AUDIO = os.path.join(ROOT, 'audio')

def audio_key(text):  # must match js/audio-key.js
    n = re.sub(r'\s+', ' ', unicodedata.normalize('NFC', text).strip()).lower().encode('utf-8')
    def fnv(seed):
        h = seed
        for b in n:
            h ^= b
            h = (h * 16777619) & 0xFFFFFFFF
        return '%08x' % h
    return fnv(2166136261) + fnv(0x9747b28c)

def speakable(text):
    """Small cleanups so the voice reads placeholders and abbreviations naturally."""
    t = text.replace('___', '…').replace('Nurse/Dok', 'Nurse, o Dok').replace('/', ' o ')
    t = re.sub(r'\bDr\.', 'Doktor', t)
    t = re.sub(r'-$', '', t.strip())  # prefixes like "alas-", "paki-"
    t = t.replace('(', ', ').replace(')', ', ')
    return t

ERRORS = []

async def gen_edge(items, voice, rate, workers, deadline):
    import edge_tts
    sem = asyncio.Semaphore(workers)
    done = 0
    ok = 0
    async def one(key, text):
        nonlocal done
        out = os.path.join(AUDIO, key + '.mp3')
        nonlocal ok
        async with sem:
            if time.time() > deadline:
                return
            # Stop early if the voice service is clearly not working, instead of burning the whole job.
            if done >= 40 and ok == 0:
                return
            # A few sentences come back empty from the service every time; the same sentence with the
            # question marks softened to periods, or with a trailing pause, usually goes through.
            base = speakable(text)
            variants = [base, base, base.replace('?', '.'), base.replace('?', '.').rstrip('.') + '. ', base.rstrip('?.!') + ' .', base.replace(',', '').replace('?', '.')]
            for attempt, spoken in enumerate(variants):
                try:
                    await asyncio.wait_for(edge_tts.Communicate(spoken, voice, rate=rate).save(out + '.part'), timeout=45)
                    if os.path.getsize(out + '.part') < 500:
                        raise RuntimeError('empty audio')
                    os.replace(out + '.part', out)
                    ok += 1
                    break
                except Exception as e:  # network hiccups: back off and retry
                    if attempt == len(variants) - 1:
                        print('FAILED', key, text, repr(e), file=sys.stderr, flush=True)
                        if len(ERRORS) < 20:
                            ERRORS.append({'text': text, 'error': repr(e)[:300]})
                    await asyncio.sleep(2 + attempt * 3)
            done += 1
            if done % 100 == 0:
                print(f'  {done}/{len(items)}', flush=True)
    await asyncio.gather(*(one(k, t) for k, t in items))

def gen_mms(items):
    import torch, scipy.io.wavfile
    from transformers import VitsModel, AutoTokenizer
    model = VitsModel.from_pretrained('facebook/mms-tts-tgl')
    tok = AutoTokenizer.from_pretrained('facebook/mms-tts-tgl')
    for i, (key, text) in enumerate(items):
        inputs = tok(speakable(text).lower(), return_tensors='pt')
        with torch.no_grad():
            wav = model(**inputs).waveform[0].numpy()
        tmp = os.path.join(AUDIO, key + '.wav')
        scipy.io.wavfile.write(tmp, model.config.sampling_rate, wav)
        subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-i', tmp, '-ac', '1', '-b:a', '40k', os.path.join(AUDIO, key + '.mp3')], check=True)
        os.remove(tmp)
        if (i + 1) % 100 == 0:
            print(f'  {i + 1}/{len(items)}', flush=True)

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--engine', default='edge', choices=['edge', 'mms'])
    ap.add_argument('--voice', default='fil-PH-BlessicaNeural', help='edge voices: fil-PH-BlessicaNeural (female), fil-PH-AngeloNeural (male)')
    ap.add_argument('--rate', default='-5%', help='edge speaking rate, e.g. -10%%')
    ap.add_argument('--workers', type=int, default=6)
    ap.add_argument('--rebuild', action='store_true', help='regenerate every clip (e.g. after changing voice)')
    ap.add_argument('--limit', type=int, default=0, help='only generate this many (testing)')
    ap.add_argument('--max-minutes', type=float, default=50, help='stop recording after this long; run again to continue')
    a = ap.parse_args()

    texts = json.load(open(os.path.join(ROOT, 'tools', 'texts.json'), encoding='utf-8'))
    for t in texts:
        assert audio_key(t['text']) == t['key'], ('key mismatch', t)
    os.makedirs(AUDIO, exist_ok=True)
    manifest_path = os.path.join(AUDIO, 'manifest.json')
    old = json.load(open(manifest_path)) if os.path.exists(manifest_path) else {}
    voice_changed = old and (old.get('engine') != a.engine or old.get('voice') != (a.voice if a.engine == 'edge' else 'mms-tts-tgl'))
    wanted = {t['key']: t['text'] for t in texts}
    todo = [(k, v) for k, v in wanted.items() if a.rebuild or voice_changed or not os.path.exists(os.path.join(AUDIO, k + '.mp3'))]
    if a.limit:
        todo = todo[:a.limit]
    print(f'{len(wanted)} texts, {len(todo)} to generate with {a.engine}' + (f' ({a.voice})' if a.engine == 'edge' else ''))
    t0 = time.time()
    if todo:
        if a.engine == 'edge':
            asyncio.run(gen_edge(todo, a.voice, a.rate, a.workers, t0 + a.max_minutes * 60))
        else:
            gen_mms(todo)
    removed = 0
    for f in os.listdir(AUDIO):
        if f.endswith('.mp3') and f[:-4] not in wanted:
            os.remove(os.path.join(AUDIO, f)); removed += 1
    have = sorted(k for k in wanted if os.path.exists(os.path.join(AUDIO, k + '.mp3')))
    size = sum(os.path.getsize(os.path.join(AUDIO, k + '.mp3')) for k in have)
    json.dump({
        'engine': a.engine, 'voice': a.voice if a.engine == 'edge' else 'mms-tts-tgl',
        'generated': datetime.now(timezone.utc).strftime('%Y-%m-%d'), 'count': len(have), 'bytes': size, 'keys': have
    }, open(manifest_path, 'w'), separators=(',', ':'))
    for f in os.listdir(AUDIO):
        if f.endswith('.part'):
            os.remove(os.path.join(AUDIO, f))
    json.dump({'finished': datetime.now(timezone.utc).isoformat(timespec='seconds'), 'attempted': len(todo), 'have': len(have), 'wanted': len(wanted),
               'seconds': round(time.time() - t0), 'sample_errors': ERRORS}, open(os.path.join(AUDIO, 'last-run.json'), 'w'), indent=1)
    print(f'Done in {time.time() - t0:.0f}s: {len(have)}/{len(wanted)} clips, {size / 1e6:.1f} MB, removed {removed} old clips')
    if len(have) < len(wanted):
        print('Some clips failed; run again to fill the gaps.', file=sys.stderr)

if __name__ == '__main__':
    main()
