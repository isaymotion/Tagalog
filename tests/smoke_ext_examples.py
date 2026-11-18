# 3.15.0 Example sentences for dictionary words (js/data/examples-*.js, App.exampleOf in js/core.js):
# word page block, flashcard back, the In context game on #/vocab (js/vocab.js), the daily mix part.
import re

# d1122 = oo|yes (examples-1.js). The checks below pick their words from the loaded data.
ROUTES = ['#/dict/d1122', '#/vocab', '#/vocab/context']

GEN = r"""(() => {
  const out = [], n = (s) => App.norm(s), head = (e) => e.tl.split(' / ')[0].trim(), rk = (e) => App.flat(e.root || head(e));
  const one = (q, tag) => {
    const e = App.dictById[q.cardId], ex = e && App.exampleOf(e);
    if (!e || !ex) { out.push(tag + ' no word or example ' + q.cardId); return; }
    if (!Array.isArray(q.opts) || q.opts.length !== 4 || new Set(q.opts.map(App.flat)).size !== 4 || !(q.a >= 0 && q.a < 4)) out.push(tag + ' options ' + JSON.stringify(q.opts));
    if (q.opts[q.a] !== head(e)) out.push(tag + ' answer not at its index ' + q.q);
    const parts = String(q.q).split('____');
    if (parts.length !== 2) out.push(tag + ' blanks: ' + q.q);
    else if (!q.sayAfter || q.sayAfter !== ex.tl || !ex.tl.startsWith(parts[0]) || !ex.tl.endsWith(parts[1])) out.push(tag + ' blank is not the sentence: ' + q.q);
    if (q.say) out.push(tag + ' says the sentence before answering');
    if (q.sub !== ex.en || !q.tlq || !q.tlo || q.exp !== head(e) + ' = ' + e.en + '.') out.push(tag + ' fields ' + q.q);
    (q.ids || []).forEach((id, k) => { const x = App.dictById[id]; if (!x || head(x) !== q.opts[k]) { out.push(tag + ' option id ' + id); return; }
      if (k === q.a) return;
      if (n(x.en) === n(e.en)) out.push(tag + ' option with the answer\'s English: ' + x.tl);
      if (x.pos !== e.pos) out.push(tag + ' option of another part of speech: ' + x.tl);
      if (rk(x) === rk(e)) out.push(tag + ' option from the same root: ' + x.tl);
      if (x.cat === 'stigma') out.push(tag + ' stigmatizing option ' + x.tl); });
    if (!Array.isArray(q.ids) || q.ids.length !== 4) out.push(tag + ' ids');
  };
  for (let r = 0; r < 5; r++) {
    const qs = App.vocabQs.context(10);
    if (qs.length !== 10) out.push('context(10) gave ' + qs.length);
    if (new Set(qs.map((q) => q.cardId)).size !== qs.length) out.push('context repeats a word');
    qs.forEach((q) => one(q, 'all'));
    ['health', 'food', 'emotions', 'mine', 'stigma'].forEach((c) => App.vocabQs.context(10, c).forEach((q) => { one(q, c); if (App.dictById[q.cardId].cat === 'stigma') out.push('stigma word asked'); }));
  }
  // The highlight: whole-word, case-insensitive, first match; none when the form is missing; the linker may follow.
  const F = App.exampleFind;
  if (JSON.stringify(F('Pagod na pagod ako.', 'pagod')) !== '[0,5,5]' || F('Mag-ingat ka.', 'ingat') !== null || F('Wala rito.', 'wa') !== null || JSON.stringify(F('May tatlumpung araw.', 'tatlumpu')) !== '[4,12,14]') out.push('exampleFind rules');
  if (App.exampleMarked({ tl: 'Ang <b> aso.', form: 'aso' }) !== 'Ang &lt;b&gt; <mark class="exw">aso</mark>.' || App.exampleMarked({ tl: 'Wala.', form: 'aso' }) !== 'Wala.') out.push('exampleMarked');
  // Daily mix: 20 builds of exactly 10 well-formed questions, with the In context part available.
  const de = App.dailyExtra || [];
  if (!['Opposites', 'What goes with it', 'Odd one out', 'Word parts', 'In context'].every((t) => de.some((x) => x[0] === t))) out.push('dailyExtra parts ' + de.map((x) => x[0]).join(','));
  const ic = de.find((x) => x[0] === 'In context'); if (ic) { const qs = ic[1](); if (qs.length !== 1) out.push('In context daily part'); else one(qs[0], 'daily'); }
  for (let k = 0; k < 20; k++) { const qs = App.drillQs.daily(); if (qs.length !== 10) out.push('daily length ' + qs.length);
    qs.forEach((q) => { if (!q.q || !Array.isArray(q.opts) || q.opts.length < 2 || new Set(q.opts).size !== q.opts.length || !(q.a >= 0 && q.a < q.opts.length) || !q.sub) out.push('daily q ' + q.q); }); }
  return out;
})()"""


async def go(pg, h, wait=150):
    await pg.evaluate(f"location.hash={h!r}"); await pg.wait_for_timeout(wait)


async def overflow(pg):
    return await pg.evaluate("document.documentElement.scrollWidth > window.innerWidth")


async def checks(pg, name, fails):
    await go(pg, '#/vocab')
    bad = await pg.evaluate(GEN)
    if bad: fails.append(f'{name}: examples generators: {bad[:6]}')
    # Word page: the example under the meaning, one speaker, the form marked; a word without one shows no block.
    wid = await pg.evaluate("(App.DICT.find((e) => { const x = App.exampleOf(e); return x && App.exampleFind(x.tl, x.form); }) || {}).id")
    if not wid: fails.append(f'{name}: no word with a usable example'); return
    ex = await pg.evaluate(f"App.exampleOf(App.dictById[{wid!r}])")
    await go(pg, '#/dict/' + wid)
    blk = pg.locator('#view .wex')
    if await blk.count() != 1: fails.append(f'{name}: word page example block missing ({wid})')
    else:
        t = await blk.inner_text()
        if ex['tl'] not in t or ex['en'] not in t or 'example' not in t.lower(): fails.append(f'{name}: word page example text: {t!r}')
        if await blk.locator('.say').count() != 1 or await blk.locator('.say').get_attribute('data-say') != ex['tl']: fails.append(f'{name}: word page example speaker')
        if await blk.locator('mark.exw').count() != 1 or not await blk.locator('.tl mark.exw').count(): fails.append(f'{name}: word page example highlight')
        if await pg.evaluate("document.querySelector('#view .wex').previousElementSibling.textContent") != await pg.evaluate(f"App.dictById[{wid!r}].en"): fails.append(f'{name}: example is not under the meaning')
    nid = await pg.evaluate("App.DICT.find((e) => e.cat === 'stigma').id")
    await go(pg, '#/dict/' + nid)
    if await pg.locator('#view .wex').count(): fails.append(f'{name}: stigma word page shows an example block')
    # A word whose example is removed from the index shows no empty block (the index is rebuilt from DICT_EX on first use).
    hidden = await pg.evaluate(f"(() => {{ const e = App.dictById[{wid!r}], k = e.tl + '|' + e.en; window.__exKeep = App.exampleOf; App.exampleOf = (x) => (x && x.tl + '|' + x.en === k ? null : window.__exKeep(x)); return 0; }})()")
    await go(pg, '#/dict/' + wid)
    if await pg.locator('#view .wex').count() or await pg.locator('#view mark.exw').count(): fails.append(f'{name}: word without an example shows a block')
    await pg.evaluate("App.exampleOf = window.__exKeep; 0")
    # Flashcards: the example only on the back of a dictionary card, both directions; a phrase card is unchanged.
    keep = await pg.evaluate("JSON.stringify({ srs: App.state.srs, dir: App.state.settings.cardDir })")
    for d in ['tl-en', 'en-tl']:
        await pg.evaluate(f"App.state.srs = {{ {wid!r}: {{ e: 2.5, i: 1, r: 1, due: 0 }} }}; App.state.settings.cardDir = {d!r}; App.save(); 0")
        await go(pg, '#/flash'); await go(pg, '#/flash/due', 200)
        fc = pg.locator('#fc')
        if not await fc.count(): fails.append(f'{name}: flashcard {d} did not start'); continue
        if await pg.locator('#fc .fcex').count() or ex['tl'] in await fc.inner_text() or ex['en'] in await fc.inner_text(): fails.append(f'{name}: flashcard {d} front shows the example')
        await fc.click(); await pg.wait_for_timeout(80)
        b = pg.locator('#fc .fcex')
        if await b.count() != 1: fails.append(f'{name}: flashcard {d} back has no example')
        else:
            t = await b.inner_text()
            if ex['tl'] not in t or ex['en'] not in t or await b.locator('.say').count() != 1 or not await b.locator('.tl').count(): fails.append(f'{name}: flashcard {d} back example: {t!r}')
        # The speaker on the back does not grade or flip; the rating buttons are on screen and reachable.
        await b.locator('.say').click(); await pg.wait_for_timeout(40)
        if await pg.locator('[data-g]').count() != 4: fails.append(f'{name}: flashcard {d} rating buttons missing')
        if name == 'phone':
            for size in ['100', '125']:
                await pg.evaluate(f"App.state.settings.textSize = '{size}'; App.applyTextSize(); 0"); await pg.wait_for_timeout(60)
                if await overflow(pg): fails.append(f'{name}: flashcard back overflows at {size}%')
                await pg.locator('[data-g="2"]').scroll_into_view_if_needed()
                if not await pg.locator('[data-g="2"]').is_visible(): fails.append(f'{name}: rating buttons not reachable at {size}%')
            await pg.evaluate("App.state.settings.textSize = '100'; App.applyTextSize(); 0")
        await pg.locator('[data-g="2"]').click(); await pg.wait_for_timeout(60)
    await pg.evaluate("App.state.srs = { 'p:depression:0': { e: 2.5, i: 1, r: 1, due: 0 } }; App.state.settings.cardDir = 'tl-en'; App.save(); 0")
    await go(pg, '#/flash'); await go(pg, '#/flash/due', 200)
    if await pg.locator('#fc').count():
        await pg.locator('#fc').click(); await pg.wait_for_timeout(60)
        if await pg.locator('#fc .fcex').count(): fails.append(f'{name}: phrase card shows an example')
    await pg.evaluate(f"(() => {{ const k = JSON.parse({keep!r}); App.state.srs = k.srs; App.state.settings.cardDir = k.dir; App.save(); return 0; }})()")
    # Hub, Practice, search, Home rotation.
    await go(pg, '#/vocab')
    tile = pg.locator('#view .tile[data-mode=context]')
    if not await tile.count() or 'vocabulary · 10 sentences' not in (await tile.inner_text()).lower(): fails.append(f'{name}: In context tile')
    await go(pg, '#/practice')
    if not await pg.locator('#view a.tile[href="#/vocab/context"]').count(): fails.append(f'{name}: In context tile on Practice')
    if not await pg.evaluate("App.searchAll('in context').some((r) => r.route === '#/vocab/context')"): fails.append(f'{name}: search does not find In context')
    if await pg.evaluate(f"App.searchAll({ex['tl']!r}).some((r) => r.type !== 'Dictionary' && /example/i.test(r.type))"): fails.append(f'{name}: search indexes example sentences')
    if not await pg.evaluate("App.views.home.toString().includes('#/vocab/context')"): fails.append(f'{name}: home rotation lacks In context')
    # The game: the word source selector, no audio before answering, a miss goes to My mistakes, the best score is saved.
    await go(pg, '#/vocab/context')
    if not await pg.locator('#vsrc').count() or await pg.locator('#vsrc option[value=stigma]').count(): fails.append(f'{name}: In context word source')
    await pg.select_option('#vsrc', 'all'); await pg.click('#vgo'); await pg.wait_for_timeout(120)
    if not await pg.locator('#vbox .opt').count(): fails.append(f'{name}: In context did not start'); return
    if await pg.locator('#vbox .opt.tl').count() != 4: fails.append(f'{name}: In context options are not Tagalog')
    if '____' not in await pg.inner_text('#vbox') or await pg.locator('#vbox .spread .say').count(): fails.append(f'{name}: In context question (blank, no speaker before answering)')
    if name == 'phone':
        for size in ['100', '125']:
            await pg.evaluate(f"App.state.settings.textSize = '{size}'; App.applyTextSize(); 0"); await pg.wait_for_timeout(60)
            if await overflow(pg): fails.append(f'{name}: In context overflows at {size}%')
        await pg.evaluate("App.state.settings.textSize = '100'; App.applyTextSize(); 0")
    n = int(re.search(r'of (\d+)', await pg.inner_text('#vbox .eyebrow'), re.I).group(1))
    if n != 10: fails.append(f'{name}: In context has {n} questions')
    wrong = await pg.evaluate("[...document.querySelectorAll('#vbox .opt')].findIndex((b) => +b.dataset.k !== 0)")
    blank = await pg.inner_text('#vbox .card > div:nth-child(2)')
    await pg.click(f'#vbox .opt >> nth={wrong}'); await pg.wait_for_timeout(30)
    if not await pg.locator('#vbox [data-fb] .say').count(): fails.append(f'{name}: In context feedback has no sentence speaker')
    miss = await pg.evaluate(f"(() => {{ const s = {blank!r}; const e = App.DICT.find((x) => {{ const c = App.exampleOf(x); return c && c.tl.startsWith(s.split('____')[0]) && c.tl.endsWith(s.split('____')[1] || ''); }}); return !!e && App.state.mistakes.includes(e.id); }})()")
    if not miss: fails.append(f'{name}: In context miss not in mistakes')
    await pg.click('#vbox [data-act=next]'); await pg.wait_for_timeout(25)
    for _ in range(n - 1):
        await pg.click('#vbox .opt >> nth=0'); await pg.wait_for_timeout(25); await pg.click('#vbox [data-act=next]'); await pg.wait_for_timeout(25)
    if 'Try again' not in await pg.inner_text('#vbox') or not isinstance(await pg.evaluate("(App.state.done.vocab || {})['context:all']"), int): fails.append(f'{name}: In context score not saved')
    # A small topic falls back to all words with a note (only when it has fewer than 8 sentences).
    small = await pg.evaluate("(() => { const ok = (e) => { const x = App.exampleOf(e); return x && App.exampleFind(x.tl, x.form); }; return Object.keys(App.CATS).find((c) => c !== 'stigma' && App.vocabPool(c).filter(ok).length < 8) || ''; })()")
    if small:
        await go(pg, '#/vocab/context?cat=' + small); await pg.click('#vgo'); await pg.wait_for_timeout(120)
        if 'uses all words' not in await pg.inner_text('#vbox'): fails.append(f'{name}: In context small topic {small} has no fallback note')
    # Word page at 125% on the phone.
    if name == 'phone':
        await pg.evaluate("App.state.settings.textSize = '125'; App.applyTextSize(); 0")
        await go(pg, '#/dict/' + wid)
        if await overflow(pg): fails.append(f'{name}: word page overflows at 125%')
        await pg.evaluate("App.state.settings.textSize = '100'; App.applyTextSize(); 0")
