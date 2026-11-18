# 3.19.0 Picture mode on Vocabulary practice (js/vocab.js, mode `picture`): see a picture-set part, choose its word.
# Generator checks (pool, sources, levels, four distinct options, no shared word / alt / English, audio clips), the tile,
# a diagram round (Body: one pin shown, the highlighted one) and a cards round (Food, round limited to cards parts),
# some answers right and some wrong, keys 1-4 and Enter, best score stored and shown on #/vocab, #/practice and
# #/progress, no sideways scroll at 360 px, two choices visible at 360 x 640, both themes.
# Phone screenshots (360 x 740) go to /tmp/tl-out/shots/vocab-picture-*.png.
import os, re

ROUTES = ['#/vocab/picture', '#/vocab/picture?cat=body', '#/vocab/picture?cat=food']
SHOTS = '/tmp/tl-out/shots'

GEN = r"""(() => {
  const out = [], P = App.pictures, n = (s) => App.norm(s || '');
  const keys = (p) => [p.w].concat(Array.isArray(p.alt) ? p.alt : []).map((x) => App.flat(x)).filter(Boolean);
  let total = 0, missingArt = 0;
  P.sets().forEach((s) => { const ok = s.kind === 'cards' || !!P.svg(s, { pins: 'none' }); if (ok) total += P.parts(s).length; else missingArt++; });
  if (App.vocabPictureCount('all', 'All') !== total || total < 100) out.push('pool ' + App.vocabPictureCount('all', 'All') + ' of ' + total);
  const groups = P.GROUPS.map((g) => g[0]);
  const sum = groups.reduce((a, g) => a + App.vocabPictureCount(g, 'All'), 0);
  if (sum > total) out.push('group pools add up to more than all');
  if (App.vocabPictureCount('all', 'A1') + App.vocabPictureCount('all', 'A2') !== total) out.push('levels do not add up');
  for (let r = 0; r < 12; r++) ['all'].concat(groups).forEach((src) => {
    const qs = App.vocabQs.picture(10, src);
    if (qs.length !== Math.min(10, App.vocabPictureCount(src, 'All'))) out.push('round size ' + src + ' ' + qs.length);
    if (new Set(qs.map((q) => App.flat(q.p.w))).size !== qs.length) out.push('word asked twice ' + src);
    qs.forEach((q) => {
      if (src !== 'all' && q.s.group !== src) out.push('outside source ' + src + ' ' + q.s.id);
      if (q.opts.length !== 4 || q.opts[q.a] !== q.p) out.push('answer ' + q.p.w);
      const f = q.opts.map((x) => App.flat(x.w)); if (new Set(f).size !== 4) out.push('same word twice ' + f.join(','));
      const en = q.opts.map((x) => n(x.en)).filter(Boolean); if (new Set(en).size !== en.length) out.push('same English twice ' + q.p.w);
      q.opts.forEach((x, k) => { if (k === q.a) return; if (keys(x).some((y) => keys(q.p).includes(y))) out.push('wrong option shares a word with ' + q.p.w + ': ' + x.w); });
      const same = q.opts.filter((x) => P.parts(q.s).includes(x)).length; if (same < Math.min(4, P.parts(q.s).length) - 1) out.push('wrong options not from the set first ' + q.s.id);
    });
  });
  // The level filter (state.settings.picLv) narrows the pool by set level; sources without four pictures are hidden.
  const st = App.state.settings, lv0 = st.picLv;
  st.picLv = 'A2'; const a2 = App.vocabQs.picture(10, 'body'); if (a2.some((q) => q.s.lv !== 'A2')) out.push('level A2 ignored');
  st.picLv = lv0;
  // Every word has its recorded clip (the Listen button speaks the part's word, as Picture words does).
  const ks = App.pack && App.pack.keys;
  if (ks && ks.size) { const miss = []; P.sets().forEach((s) => P.parts(s).forEach((p) => { if (!ks.has(AudioKey(App.spoken(p.w)))) miss.push(p.w); })); if (miss.length) out.push('no clip: ' + miss.slice(0, 5).join(', ') + ' (' + miss.length + ')'); }
  if (!(App.VOCAB_MODES || []).some((m) => m.id === 'picture')) out.push('mode missing');
  return { out, total, missingArt };
})()"""

STATE = "JSON.stringify({ picLv: App.state.settings.picLv, src: App.state.settings.vocabPicSrc, theme: App.state.settings.theme })"
CARDS_ONLY = """(() => { if (!App._vpGen) App._vpGen = App.vocabQs.picture;
  App.vocabQs.picture = (n, src) => { const seen = new Set(), out = []; for (let k = 0; k < 40 && out.length < n; k++) App._vpGen(n, src).forEach((q) => { if (q.s.kind === 'cards' && !seen.has(q.p.id) && out.length < n) { seen.add(q.p.id); out.push(q); } }); return out; }; return 0; })()"""
RESTORE_GEN = "(() => { if (App._vpGen) { App.vocabQs.picture = App._vpGen; delete App._vpGen; } return 0; })()"
# The asked part, from the data attributes on the question picture.
ASKED = """(() => { const w = document.querySelector('#vbox [data-vpp]'); const s = App.pictures.get(w.dataset.vps); const p = App.pictures.parts(s).find((x) => x.id === w.dataset.vpp); return { w: p.w, en: p.en || '', kind: s.kind, id: p.id }; })()"""
OVER = "document.documentElement.scrollWidth > window.innerWidth"


async def go(pg, h, wait=150):
    await pg.evaluate(f"location.hash={h!r}"); await pg.wait_for_timeout(wait)


async def play(pg, name, fails, plan, kind, shots=None):
    """plan: list of True (answer right) / False (wrong). Returns the number right."""
    right = 0
    for k, ok in enumerate(plan):
        a = await pg.evaluate(ASKED)
        if a['kind'] != kind and kind: fails.append(f'{name}: picture {kind} round asked a {a["kind"]} part'); return -1
        txt = await pg.inner_text('#vbox .vp-round')
        if a['en'] and re.search(r'\b' + re.escape(a['en']) + r'\b', txt, re.I) and a['en'].lower() != a['w'].lower(): fails.append(f'{name}: picture shows the English before answering: {a["en"]}')
        if await pg.locator('#vbox [data-fb] *').count(): fails.append(f'{name}: picture feedback before answering')
        opts = await pg.locator('#vbox .opt .tl').all_inner_texts()
        if len(opts) != 4 or len(set(o.strip().lower() for o in opts)) != 4 or a['w'] not in opts: fails.append(f'{name}: picture options {opts} for {a["w"]}')
        if kind == 'diagram':
            vis = await pg.evaluate("[...document.querySelectorAll('#vbox .pic-pin')].filter((g) => getComputedStyle(g).display !== 'none').map((g) => g.dataset.p + (g.classList.contains('hl') ? '*' : ''))")
            if vis != [a['id'] + '*']: fails.append(f'{name}: picture pins shown {vis} for {a["id"]}')
        else:
            if await pg.locator('#vbox .vp-pcard .pic-card').count() != 1 or await pg.locator('#vbox .pic-svg').count(): fails.append(f'{name}: picture card question')
        if shots and k == 0: await pg.screenshot(path=shots[0])
        idx = opts.index(a['w']) if a['w'] in opts else 0
        pick = idx if ok else (idx + 1) % 4
        if k == 1: await pg.keyboard.press(str(pick + 1))           # keys 1-4
        else: await pg.click(f'#vbox .opt[data-k="{pick}"]')
        await pg.wait_for_timeout(30)
        fb = await pg.inner_text('#vbox [data-fb]')
        good = ('Tama' in fb) if ok else ('Mali' in fb)
        if not good: fails.append(f'{name}: picture feedback {fb[:60]!r} (meant {"right" if ok else "wrong"})');
        if a['w'] not in fb or (a['en'] and a['en'] not in fb): fails.append(f'{name}: picture feedback lacks the word or English')
        say = await pg.evaluate("[...document.querySelectorAll('#vbox [data-fb] .say')].map((b) => b.dataset.say)")
        if say != [a['w']]: fails.append(f'{name}: picture Listen button {say}')
        if not ok and 'You chose' not in fb: fails.append(f'{name}: picture wrong answer not explained')
        if await pg.locator('#vbox .opt.right').count() != 1 or await pg.locator('#vbox .opt.wrong').count() != (0 if ok else 1): fails.append(f'{name}: picture option marks')
        if await pg.evaluate(OVER): fails.append(f'{name}: picture overflow after answering')
        if shots and k == 0 and not ok: await pg.screenshot(path=shots[1])
        right += ok
        if k == 2: await pg.keyboard.press('Enter')                 # Enter goes on (focus is on Next; both work)
        else: await pg.click('#vbox [data-act=next]')
        await pg.wait_for_timeout(40)
    return right


async def checks(pg, name, fails):
    phone = await pg.evaluate("window.innerWidth < 700")
    saved = await pg.evaluate(STATE)
    await go(pg, '#/vocab')
    g = await pg.evaluate(GEN)
    if g['out']: fails.append(f'{name}: picture generators: {g["out"][:6]}')
    if phone: print(f'  picture pool: {g["total"]} parts, {g["missingArt"]} diagram sets without art')
    # The tile on #/vocab and #/practice.
    tile = pg.locator('#view a.tile[data-mode=picture]')
    if not await tile.count() or 'Picture' not in await tile.inner_text(): fails.append(f'{name}: Picture tile')
    await tile.click(); await pg.wait_for_timeout(150)
    if not (await pg.evaluate("location.hash")).startswith('#/vocab/picture'): fails.append(f'{name}: Picture tile link')
    # Sources: All pictures plus picture groups, never dictionary topics; ?cat= preselects; the level seg.
    vals = await pg.evaluate("[...document.querySelectorAll('#vsrc option')].map((o) => o.value)")
    want = await pg.evaluate("['all'].concat(App.pictures.GROUPS.map((x) => x[0]).filter((x) => App.vocabPictureCount(x, ['A1','A2'].includes(App.state.settings.picLv) ? App.state.settings.picLv : 'All') >= 4))")
    if vals != want: fails.append(f'{name}: picture sources {vals}')
    await go(pg, '#/vocab/picture?cat=food')
    if await pg.input_value('#vsrc') != 'food': fails.append(f'{name}: picture ?cat= not preselected')
    await pg.click('[data-vplv=A2]'); await pg.wait_for_timeout(80)
    if await pg.evaluate("App.state.settings.picLv") != 'A2' or await pg.locator('#vsrc option[value=clothes]').count(): fails.append(f'{name}: picture level A2 (clothes has no A2 set)')
    if await pg.input_value('#vsrc') != 'food': fails.append(f'{name}: picture level change lost the source')
    await pg.click('[data-vplv=All]'); await pg.wait_for_timeout(80)
    if phone: await pg.set_viewport_size({'width': 360, 'height': 740})
    os.makedirs(SHOTS, exist_ok=True)
    # Diagram round on Body: 6 right, 4 wrong = 60%.
    prev = await pg.evaluate("(App.state.done.vocab || {})['picture:body'] || 0")
    await go(pg, '#/vocab/picture'); await pg.select_option('#vsrc', 'body'); await pg.click('#vgo'); await pg.wait_for_timeout(150)
    if await pg.evaluate(OVER): fails.append(f'{name}: picture diagram question overflows')
    plan = [False, True, True, False, True, True, False, True, True, False]
    r = await play(pg, name, fails, plan, 'diagram', [f'{SHOTS}/vocab-picture-diagram.png', f'{SHOTS}/vocab-picture-feedback.png'] if phone else None)
    t = await pg.inner_text('#vbox')
    if r == 6 and ('6 / 10' not in t or 'Try again' not in t or 'All vocabulary practice' not in t): fails.append(f'{name}: picture end screen {t[:80]!r}')
    if await pg.evaluate("App.state.done.vocab['picture:body']") != max(prev, 60): fails.append(f'{name}: picture best score not stored')
    if await pg.evaluate("App.state.settings.vocabPicSrc") != 'body': fails.append(f'{name}: picture source not remembered')
    if await pg.evaluate(OVER): fails.append(f'{name}: picture end screen overflows')
    if phone: await pg.screenshot(path=f'{SHOTS}/vocab-picture-end.png')
    # Cards round on Food (limited to cards parts): all right = 100%.
    await pg.evaluate(CARDS_ONLY)
    try:
        await go(pg, '#/vocab/picture'); await pg.select_option('#vsrc', 'food'); await pg.click('#vgo'); await pg.wait_for_timeout(150)
        n = int(re.search(r'of (\d+)', await pg.inner_text('#vbox .eyebrow'), re.I).group(1))
        r = await play(pg, name, fails, [True] * n, 'cards', [f'{SHOTS}/vocab-picture-cards.png', None] if phone else None)
        if r == n and await pg.evaluate("App.state.done.vocab['picture:food']") != 100: fails.append(f'{name}: picture cards round not 100%')
    finally:
        await pg.evaluate(RESTORE_GEN)
    # Phone 360 x 640: with the question brought up under the top bar, two choices are above the tab bar.
    if phone:
        await pg.set_viewport_size({'width': 360, 'height': 640})
        await go(pg, '#/vocab/picture'); await pg.select_option('#vsrc', 'body'); await pg.click('#vgo'); await pg.wait_for_timeout(200)
        for k in range(3):
            fit = await pg.evaluate("(() => { const tb = document.querySelector('.tabbar'), lim = tb && getComputedStyle(tb).display !== 'none' ? tb.getBoundingClientRect().top : innerHeight; const o = document.querySelectorAll('#vbox .opt'); return o.length === 4 && o[1].getBoundingClientRect().bottom <= lim + 1 && document.querySelector('#vbox .vp-pwrap, #vbox .vp-pcard').getBoundingClientRect().top >= document.querySelector('.topbar').getBoundingClientRect().bottom - 1; })()")
            if not fit: fails.append(f'{name}: picture question {k + 1}: two choices not visible at 360 x 640'); break
            await pg.click('#vbox .opt >> nth=0'); await pg.wait_for_timeout(30); await pg.click('#vbox [data-act=next]'); await pg.wait_for_timeout(60)
        await pg.set_viewport_size({'width': 360, 'height': 740})
    # Both themes: the drawing and the card read against their background.
    await go(pg, '#/vocab/picture'); await pg.select_option('#vsrc', 'body'); await pg.click('#vgo'); await pg.wait_for_timeout(150)
    for th in ['light', 'dark']:
        await pg.evaluate(f"App.state.settings.theme = {th!r}; App.applyTheme(); 0"); await pg.wait_for_timeout(60)
        c = await pg.evaluate("(() => { const s = getComputedStyle(document.querySelector('#vbox .vp-psvg')); return [s.color, s.backgroundColor]; })()")
        if c[0] == c[1]: fails.append(f'{name}: picture drawing invisible in {th} theme')
        if await pg.evaluate(OVER): fails.append(f'{name}: picture overflow in {th} theme')
        if phone and th == 'light': await pg.screenshot(path=f'{SHOTS}/vocab-picture-diagram-light.png')
    # Scores shown: #/vocab tile, #/practice tile, #/progress row out of all the games.
    await go(pg, '#/vocab')
    if 'Best ' not in await pg.inner_text('#view a.tile[data-mode=picture]'): fails.append(f'{name}: picture best not on the Vocabulary tile')
    await go(pg, '#/practice')
    if 'Best ' not in await pg.inner_text('#view a.tile[href="#/vocab/picture"]'): fails.append(f'{name}: picture best not on the Practice tile')
    await go(pg, '#/progress')
    n = await pg.evaluate("App.VOCAB_MODES.length")
    if not re.search(r'Vocabulary games tried\s*\d+ / ' + str(n), await pg.inner_text('#view')) or n != 9: fails.append(f'{name}: progress row not out of {n}')
    # Search finds it.
    if not await pg.evaluate("App.searchAll('picture').some((r) => r.route === '#/vocab/picture')"): fails.append(f'{name}: search does not find Picture')
    # Put back what we changed.
    if phone: await pg.set_viewport_size({'width': 390, 'height': 844})
    await pg.evaluate(f"(() => {{ const o = JSON.parse({saved!r}), st = App.state.settings; ['picLv', 'theme'].forEach((k) => {{ if (o[k] === undefined) delete st[k]; else st[k] = o[k]; }}); if (o.src === undefined) delete st.vocabPicSrc; else st.vocabPicSrc = o.src; App.applyTheme(); App.save(); return 0; }})()")
