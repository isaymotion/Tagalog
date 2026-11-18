# 3.12.0 grammar drills: aspect, linker, particle, pronoun, qword, negation, change; grouped Drills page; daily mix of 8 parts;
# Drills handout (#/drills/handout): model, seed stability, PDF for A4 and A5.
import base64, os, shutil, subprocess

ROUTES = ['#/drills', '#/drills/aspect', '#/drills/linker', '#/drills/particle', '#/drills/pronoun', '#/drills/qword', '#/drills/negation', '#/drills/change',
          '#/drills/handout', '#/search?q=linker']

OUT = os.environ.get('P5_OUT', '/home/claude/work/p5/out')
LOAD_PDFMAKE = """async () => { if (!window.pdfMake) await new Promise((r) => { const s = document.createElement('script'); s.src = 'js/vendor/pdfmake.min.js';
  s.onload = () => { const t = document.createElement('script'); t.src = 'js/vendor/vfs_fonts.js'; t.onload = r; document.head.appendChild(t); }; document.head.appendChild(s); }); }"""

async def go(pg, h, wait=150):
    await pg.evaluate(f"location.hash={h!r}"); await pg.wait_for_timeout(wait)

async def run_choice(pg, fails, name, did, sel, wrongs=None):
    """Start a choice drill and click the first option until the score screen. Returns the number of questions."""
    await go(pg, f'#/drills/{did}')
    if sel and await pg.locator('#dset').count(): await pg.select_option('#dset', sel)
    await pg.click('#dgo'); await pg.wait_for_timeout(60)
    n = 0
    for _ in range(12):
        if 'Try again' in await pg.inner_text('#dbox'): break
        if wrongs is not None:
            said = await pg.evaluate("[...document.querySelectorAll('#dbox [data-say]')].map((b) => b.dataset.say)")
            if any(s in wrongs for s in said): fails.append(f'{name}: {did}:{sel} offers a wrong sentence for playback before answering')
        await pg.click('#dbox .opt >> nth=0'); await pg.wait_for_timeout(30)
        if wrongs is not None:
            said = await pg.evaluate("[...document.querySelectorAll('#dbox [data-say]')].map((b) => b.dataset.say)")
            if any(s in wrongs for s in said): fails.append(f'{name}: {did}:{sel} offers a wrong sentence for playback')
        await pg.click('#dbox [data-act=next]'); await pg.wait_for_timeout(30); n += 1
    if 'Try again' not in await pg.inner_text('#dbox'): fails.append(f'{name}: drill {did}:{sel} did not finish')
    if await pg.evaluate(f"(App.state.done.drills || {{}})['{did}:{sel or 'all'}']") is None: fails.append(f'{name}: drill {did}:{sel} score not saved')
    return n

async def checks(pg, name, fails):
    # smoke.py reuses `name` in its handout loop, so tell the viewports apart by width.
    name = 'desk' if (pg.viewport_size or {}).get('width', 0) > 600 else 'phone'
    # Drills page: three group headings, every drill a tile, the handout button
    await go(pg, '#/drills')
    h2 = await pg.evaluate("[...document.querySelectorAll('#view h2')].map((h) => h.textContent.trim())")
    if h2 != ['Grammar', 'Vocabulary', 'Listening and writing']: fails.append(f'{name}: drills page headings {h2}')
    if await pg.locator('#view a.tile[href^="#/drills/"]').count() != await pg.evaluate("App.DRILLS.length"): fails.append(f'{name}: drills page tile count')
    if not await pg.locator('#view a[href="#/drills/handout"]').count(): fails.append(f'{name}: drills page has no handout button')
    for did, want in [('linker', True), ('markers', True), ('change', True), ('aspect', False), ('stress', False)]:
        await go(pg, f'#/drills/{did}')
        if bool(await pg.locator('#view a[href="#/drills/handout"]').count()) != want: fails.append(f'{name}: drill {did} handout button should be {"there" if want else "absent"}')
    # Generators
    bad = await pg.evaluate("""(() => { const out = [], tls = new Set([].concat(...Object.values(VERB_SENTENCES).map((l) => l.map((s) => s[0]))));
      const pool = App.drillQs.aspectPool(); if (pool.length < 300) out.push('aspect pool ' + pool.length);
      ['all', 'c'].forEach((st) => App.drillQs.aspect(st, 600).forEach((q) => {
        if (!(q.opts.length === 3 || q.opts.length === 4) || new Set(q.opts).size !== q.opts.length) out.push('aspect opts ' + q.q);
        if (!(q.a >= 0 && q.a < q.opts.length)) out.push('aspect answer ' + q.q);
        if (q.q.split('____').length !== 2 || q.q.replace('____', q.opts[q.a]) !== q.sayAfter || !tls.has(q.sayAfter)) out.push('aspect fill ' + q.q);
        if (q.say) out.push('aspect speaks before answering ' + q.q); }));
      ['lk', 'pt', 'pn', 'qw', 'neg'].forEach((st) => { const qs = App.drillQs.gaps(st, 200); if (!qs.length) out.push('gaps empty ' + st);
        qs.forEach((q) => { if (!(q.a >= 0 && q.a < q.opts.length) || new Set(q.opts).size !== q.opts.length || q.say || !q.sayAfter || q.sayAfter.includes('____')) out.push('gap ' + st + ' ' + q.q); }); });
      if (App.drillQs.gaps('lk', 200).some((q) => q.opts.join('|') !== 'na|-ng|-g|no linker')) out.push('lk labels');
      const good = new Set([].concat(...DRILL_CHANGE.map((it) => [it.from, it.to].concat(it.alt || [])))), wrong = new Set([].concat(...DRILL_CHANGE.map((it) => it.wrong)).filter((w) => !good.has(w)));
      ['all', 'q', 'neg', 'po', 'asp'].forEach((st) => { const qs = App.drillQs.change(st, 200); if (!qs.length) out.push('change empty ' + st);
        qs.forEach((q) => { if (q.opts.length !== 4 || new Set(q.opts).size !== 4 || q.a !== 0 || wrong.has(q.say) || wrong.has(q.sayAfter) || !q.sub) out.push('change ' + q.q); }); });
      if (App.drillQs.change('all', 200).some((q) => DRILL_CHANGE.some((it) => q.sub.includes(it.to)))) out.push('change instruction reveals the answer');
      App.drillQs.changeTyped().forEach((it) => { it.answers.forEach((a) => { if (App.drillTypedScore(it.answers, a) !== 100) out.push('typed model ' + a); }); });
      DRILL_CHANGE.forEach((it) => it.wrong.forEach((w) => { if (App.drillTypedScore([it.to].concat(it.alt || []), w) === 100) out.push('typed accepts wrong ' + w); }));
      return out; })()""")
    if bad: fails.append(f'{name}: 3.12.0 generators: {bad[:5]}')
    # Each new drill to its score screen, score saved
    # A wrong option that is also some item's starting sentence or answer is a correct sentence and may be spoken.
    wrongs = await pg.evaluate("(() => { const good = new Set([].concat(...DRILL_CHANGE.map((it) => [it.from, it.to].concat(it.alt || [])))); return [].concat(...DRILL_CHANGE.map((it) => it.wrong)).filter((w) => !good.has(w)); })()")
    for did, sel in [('aspect', 'all'), ('aspect', 'c'), ('linker', None), ('particle', None), ('pronoun', None), ('qword', None), ('negation', None), ('change', 'all'), ('change', 'po'), ('change', 'asp')]:
        n = await run_choice(pg, fails, name, did, sel, wrongs if did == 'change' else None)
        if n < 3: fails.append(f'{name}: drill {did}:{sel} had only {n} questions')
    # Typed change set: the model answer for every item scores 100%; a wrong sentence is rejected; wrong sentences never spoken
    await pg.evaluate("window.__said = []; window.__speak0 = window.__speak0 || App.speak; App.speak = (t) => { window.__said.push(t); }; 0")
    await go(pg, '#/drills/change'); await pg.select_option('#dset', 'type'); await pg.click('#dgo'); await pg.wait_for_timeout(80)
    for _ in range(12):
        if 'Try again' in await pg.inner_text('#dbox'): break
        src = await pg.inner_text('#dbox .card > div >> nth=1')
        ans = await pg.evaluate("(f) => (DRILL_CHANGE.find((x) => x.from === f) || {}).to", src.strip())
        if not ans: fails.append(f'{name}: typed change prompt not found: {src}'); break
        await pg.fill('#dbox [data-in]', ans); await pg.press('#dbox [data-in]', 'Enter'); await pg.wait_for_timeout(40)
        if await pg.locator('#dbox .feedback.ok').count() != 1: fails.append(f'{name}: typed change model answer marked wrong: {ans}')
        await pg.click('#dbox [data-say] >> nth=0'); await pg.wait_for_timeout(20)
        await pg.click('#dbox [data-act=next]'); await pg.wait_for_timeout(40)
    if await pg.evaluate("(App.state.done.drills || {})['change:type']") != 100: fails.append(f'{name}: typed change score not 100')
    await pg.click('#dbox [data-act=retry]'); await pg.wait_for_timeout(80)
    src = await pg.inner_text('#dbox .card > div >> nth=1')
    w = await pg.evaluate("(f) => (DRILL_CHANGE.find((x) => x.from === f) || { wrong: [''] }).wrong[0]", src.strip())
    await pg.fill('#dbox [data-in]', w); await pg.click('#dbox [data-act=check]'); await pg.wait_for_timeout(40)
    if await pg.locator('#dbox .feedback.no').count() != 1: fails.append(f'{name}: typed change accepted a wrong sentence: {w}')
    said = await pg.evaluate("window.__said")
    if any(s in wrongs for s in said): fails.append(f'{name}: a wrong change sentence was spoken')
    await pg.evaluate("App.speak = window.__speak0; 0")
    if await pg.evaluate("document.documentElement.scrollWidth > window.innerWidth"): fails.append(f'{name}: change drill overflow')
    # Daily mix: 20 mixes of exactly 10, 2 vocabulary + 8 different other parts; App.dailyExtra parts join the draw
    bad = await pg.evaluate("""(() => { const out = [], seen = new Set();
      for (let k = 0; k < 20; k++) { const qs = App.drillQs.daily(), tags = qs.map((q) => q.sub.split(' · ')[0]), other = tags.filter((t) => t !== 'Vocabulary');
        if (qs.length !== 10) out.push('length ' + qs.length);
        if (tags.length - other.length !== 2 || other.length !== 8 || new Set(other).size !== 8) out.push('tags ' + tags.join(','));
        other.forEach((t) => seen.add(t));
        qs.forEach((q) => { if (!q.q || q.opts.length < 2 || new Set(q.opts).size !== q.opts.length || !(q.a >= 0 && q.a < q.opts.length) || !q.sub) out.push('q ' + q.q); }); }
      if (seen.size < 12) out.push('only ' + seen.size + ' parts seen in 20 mixes');
      const keepExtra = App.dailyExtra; App.dailyExtra = [['Extra test part', () => [{ q: 'x', opts: ['a', 'b'], a: 0 }]]]; let hit = 0;
      for (let k = 0; k < 60; k++) { const qs = App.drillQs.daily(); if (qs.length !== 10) out.push('extra length'); if (qs.some((q) => q.sub.startsWith('Extra test part'))) hit++; }
      App.dailyExtra = keepExtra; if (!hit) out.push('dailyExtra never drawn');
      return out; })()""")
    if bad: fails.append(f'{name}: daily mix: {bad[:4]}')
    await go(pg, '#/daily')
    if 'eight drills' not in await pg.inner_text('#view'): fails.append(f'{name}: daily mix text not updated')
    # Search, Practice tiles
    ok = await pg.evaluate("['Choose the aspect', 'Na, -ng or nothing', 'Choose the small word', 'Ako, ko or akin', 'Choose the question word', 'Hindi, wala or huwag', 'Change the sentence', 'Drills handout'].every((t) => App.searchAll(t).length) && App.searchAll('drills handout').some((r) => r.route === '#/drills/handout') && App.searchAll('aspect drill').some((r) => r.route === '#/drills/aspect')")
    if not ok: fails.append(f'{name}: search misses a new drill or the handout')
    await go(pg, '#/practice')
    for h in ['aspect', 'linker', 'particle', 'pronoun', 'qword', 'negation', 'change', 'handout']:
        if not await pg.locator(f'#view a.tile[href="#/drills/{h}"]').count(): fails.append(f'{name}: practice has no tile for {h}')
    # Handout page: preview, New set changes the sentences, settings saved under ghandout.drills
    await go(pg, '#/drills/handout', 250)
    t1 = await pg.inner_text('#ghPaper')
    if 'Answer key' not in t1 or 'A. Fill the gap' not in t1 or 'F. Dictation' in t1: fails.append(f'{name}: drills handout preview parts')
    await pg.click('#ghNew'); await pg.wait_for_timeout(150)
    if await pg.inner_text('#ghPaper') == t1: fails.append(f'{name}: New set did not change the sentences')
    if not await pg.evaluate("((App.state.settings.ghandout || {}).drills || {}).seed === 2"): fails.append(f'{name}: drills handout seed not saved')
    await pg.click('[data-seg=n][data-v="12"]'); await pg.wait_for_timeout(120)
    if await pg.locator('#ghPaper .gh-ws >> nth=0 >> li').count() != 12: fails.append(f'{name}: items per part did not change the preview')
    if await pg.evaluate("document.documentElement.scrollWidth > window.innerWidth"): fails.append(f'{name}: drills handout overflow')
    await pg.evaluate("App.state.settings.ghandout.drills = undefined; delete App.state.settings.ghandout.drills; App.save(); 0")
    # Handout model: N items per part, a key answer for each, same seed = same items
    m = await pg.evaluate("""(() => { const out = [], src = { gap: DRILL_CLOZE.length + DRILL_GAPS.length, errors: DRILL_ERRORS.length, focus: DRILL_FOCUS.length, change: DRILL_CHANGE.length, translate: DRILL_TRANSLATE.length, dictation: DRILL_DICTATION.length };
      const def = App.grammarHandoutBuild({ topic: 'drills' });
      if (def.parts.map((p) => p.k).join(',') !== 'gap,errors,focus,change,translate') out.push('default parts ' + def.parts.map((p) => p.k));
      [8, 12, 16].forEach((n) => { const o = { topic: 'drills', n: String(n), seed: 7, dictation: true }, m = App.grammarHandoutBuild(o), m2 = App.grammarHandoutBuild(o);
        if (m.parts.length !== 6 || m.key.length !== 6) out.push('parts ' + n);
        m.parts.forEach((p, i) => { const want = Math.min(n, src[p.k]);
          if (p.items.length !== want) out.push(p.k + ' has ' + p.items.length + ' of ' + want);
          if (m.key[i].answers.length !== p.items.length || m.key[i].answers.some((a) => !a.tl)) out.push(p.k + ' key');
          if (p.k === 'gap' && p.items.some((it, j) => !it.opts || !it.opts.includes(m.key[i].answers[j].a) || it.tl.split('____').length !== 2)) out.push('gap options');
          if (p.k !== 'gap' && p.k !== 'dictation' && p.items.some((it) => !it.line)) out.push(p.k + ' lacks ruled lines');
          if (new Set(p.items.map((it) => JSON.stringify(it))).size !== p.items.length && p.k !== 'dictation') out.push(p.k + ' repeats an item'); });
        if (JSON.stringify(m.parts) !== JSON.stringify(m2.parts)) out.push('same seed, different items ' + n);
        if (JSON.stringify(m.parts) === JSON.stringify(App.grammarHandoutBuild(Object.assign({}, o, { seed: 8 })).parts)) out.push('new seed, same items ' + n);
        const only = App.grammarHandoutBuild({ topic: 'drills', n: String(n), seed: 7, gap: false, errors: false, focus: false, change: true, translate: false });
        if (JSON.stringify(only.parts[0].items) !== JSON.stringify(m.parts.find((p) => p.k === 'change').items)) out.push('switching parts off changes the other parts'); });
      if (App.grammarHandoutBuild({ topic: 'drills', key: false }).key !== null) out.push('key off');
      return out; })()""")
    if m: fails.append(f'{name}: drills handout model: {m[:5]}')
    if name == 'desk':
        os.makedirs(OUT, exist_ok=True)
        await pg.evaluate(LOAD_PDFMAKE)
        for fn, o in [('drills_a4', {'topic': 'drills', 'dictation': True, 'preparedFor': 'Test'}), ('drills_a5', {'topic': 'drills', 'paper': 'A5', 'size': 'small', 'english': 'hide', 'n': '16', 'seed': 3})]:
            b64 = await pg.evaluate("async (o) => await new Promise((r) => pdfMake.createPdf(App.grammarHandoutDoc(o)).getBase64(r))", o)
            path = f'{OUT}/{fn}_show.pdf'; open(path, 'wb').write(base64.b64decode(b64))
            if os.path.getsize(path) < 3000: fails.append(f'pdf {fn} too small')
            if shutil.which('pdfinfo'):
                pages = subprocess.run(['pdfinfo', path], capture_output=True, text=True).stdout.split('Pages:')[1].split()[0]
                print(f'  pdf {fn}: {pages} pages')
