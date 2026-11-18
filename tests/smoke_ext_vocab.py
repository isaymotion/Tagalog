# 3.13.0 Vocabulary practice (js/vocab.js): #/vocab and its seven games.
import re

MODES = ['match', 'opp', 'col', 'odd', 'type', 'hear', 'affix']
ROUTES = ['#/vocab'] + ['#/vocab/' + m for m in MODES] + ['#/vocab/match?cat=food', '#/vocab/type?cat=body', '#/vocab/hear?cat=mine', '#/vocab/opp?cat=food', '#/vocab/nope']

# In-page generator checks: 4 distinct options, the answer present, wrong answers never the right gloss,
# and each answer checked against the data it came from.
GEN = r"""(() => {
  const out = [], n = (s) => App.norm(s), P = WORD_PAIRS, O = WORD_ODD;
  const four = (tag, q) => { if (!q || !Array.isArray(q.opts) || q.opts.length !== 4 || new Set(q.opts.map(n)).size !== 4 || !(q.a >= 0 && q.a < 4)) out.push(tag + ' options: ' + JSON.stringify(q && q.opts)); };
  for (let r = 0; r < 6; r++) {
    App.vocabQs.opp(10).forEach((q) => { four('opp', q); const it = P.find((x) => x.id === q.vid); const ans = q.opts[q.a];
      if (!it || !((it.a === q.q && it.b === ans) || (it.b === q.q && it.a === ans))) out.push('opp answer ' + q.q + ' ' + ans);
      const side = it && it.a === q.q ? 'b' : 'a'; q.opts.forEach((o, k) => { if (k === q.a) return; const w = P.find((x) => x.type === 'opp' && x[side] === o); if (!w || w === it) out.push('opp wrong option ' + o + ' for ' + q.q); else if (n(w['e' + side]) === n(it['e' + side])) out.push('opp wrong option has the same English ' + o); }); });
    App.vocabQs.col(10).forEach((q) => { four('col', q); const it = P.find((x) => x.id === q.vid); if (!it || q.opts[q.a] !== it.b || q.q !== it.a + ' ____' || q.sayAfter !== it.a + ' ' + it.b || !q.sub) out.push('col answer ' + q.q);
      q.opts.forEach((o, k) => { if (k !== q.a && P.some((x) => x.type === 'col' && x.b === o && x.a === it.a)) out.push('col wrong option from the same verb ' + o); }); });
    App.vocabQs.odd(10).forEach((q) => { four('odd', q); const it = O.find((x) => x.id === q.vid); if (!it || q.opts[q.a] !== it.w[it.odd] || [...q.opts].sort().join() !== [...it.w].sort().join() || q.exp !== it.why) out.push('odd answer ' + (it && it.id)); if (q.say) out.push('odd says a word before answering'); });
    App.vocabQs.affix(10).forEach((q) => { four('affix', q); const it = AFFIX_ITEMS.find((x) => x.w === q.q); if (!it || q.opts[q.a] !== it.en || !q.sub.startsWith('Root: ' + it.r + ' · ') || q.cardId !== 'af:' + it.w) out.push('affix answer ' + q.q);
      q.opts.forEach((o, k) => { if (k !== q.a && n(o) === n(it.en)) out.push('affix wrong option equals the answer ' + q.q); }); });
    ['all', 'food', 'body', 'emotions', 'mine', 'modals'].forEach((c) => App.vocabQs.hear(10, c).forEach((q) => { four('hear ' + c, q); const e = App.dictById[q.cardId];
      if (!e || q.opts[q.a] !== e.en || q.say !== e.tl || !q.hideQ || e.cat === 'stigma' || e.en.length > 40 || e.tl.trim().split(/\s+/).length > 3) out.push('hear answer ' + q.q);
      q.opts.forEach((o, k) => { if (k !== q.a && n(o) === n(e.en)) out.push('hear wrong option equals the answer ' + q.q); }); }));
  }
  // Match rounds: five pairs, no shared English within a round; Opposites rounds come from WORD_PAIRS.
  ['all', 'food', 'opp', 'colors'].forEach((c) => { const g = App.vocabMatchGame(c); if (!g.rounds.length) out.push('match no rounds ' + c);
    g.rounds.forEach((R) => { if (R.length !== 5) out.push('match round size ' + c); const en = R.map((x) => n(x.le || x.r)).concat(c === 'opp' ? R.map((x) => n(x.re)) : []); if (new Set(en).size !== en.length) out.push('match shared English ' + c);
      if (c === 'opp') R.forEach((x) => { if (!P.some((p) => p.type === 'opp' && p.a === x.l && p.b === x.r)) out.push('match opp pair ' + x.l); }); }); });
  // Typed answers: the word, any headword with the same gloss, accents and hyphens ignored, a 1-letter slip on a long word.
  const long = App.DICT.find((e) => e.cat !== 'stigma' && /^[a-z]{9,}$/.test(e.tl) && e.en.length <= 40);
  const slip = long.tl.slice(0, 4) + (long.tl[4] === 'a' ? 'o' : 'a') + long.tl.slice(5);
  const short = App.DICT.find((e) => /^[a-z]{4}$/.test(e.tl));
  const syn = App.DICT.find((e) => App.DICT.some((x) => x !== e && x.nen === e.nen && App.flat(x.tl) !== App.flat(e.tl)));
  const synW = App.DICT.find((x) => x !== syn && x.nen === syn.nen && App.flat(x.tl) !== App.flat(syn.tl));
  const T = App.vocabTypeCheck;
  if (T(long, long.tl) !== 2 || T(long, long.tl.toUpperCase()) !== 2 || T(long, slip) !== 1 || T(short, short.tl.slice(0, 3) + 'x') !== 0 || T(long, '') !== 0 || T(long, 'zzzzzzzzz') !== 0 || T(syn, synW.tl) !== 2) out.push('typed answer rules');
  const ti = App.vocabTypeItems('food'); if (ti.items.length !== 10 || ti.items.some((e) => /\s/.test(e.tl.trim()) || e.cat !== 'food') || new Set(ti.items.map((e) => e.nen)).size !== 10) out.push('type items');
  // Daily mix parts: four, each one well-formed question.
  const de = App.dailyExtra || []; if (de.length < 4 || !['Opposites', 'What goes with it', 'Odd one out', 'Word parts'].every((t) => de.some((x) => x[0] === t))) out.push('dailyExtra parts');
  de.forEach(([t, f]) => { const qs = f(); if (!Array.isArray(qs) || qs.length !== 1 || !qs[0].q || !(qs[0].a >= 0 && qs[0].a < qs[0].opts.length)) out.push('dailyExtra ' + t); });
  return out;
})()"""


async def go(pg, h, wait=150):
    await pg.evaluate(f"location.hash={h!r}"); await pg.wait_for_timeout(wait)


async def start(pg, src=None):
    if src is not None: await pg.select_option('#vsrc', src)
    await pg.click('#vgo'); await pg.wait_for_timeout(120)


async def play_quiz(pg, n=10):
    for _ in range(n):
        await pg.click('#vbox .opt >> nth=0'); await pg.wait_for_timeout(25); await pg.click('#vbox [data-act=next]'); await pg.wait_for_timeout(25)


async def play_match(pg, miss=False):
    rounds = int(re.search(r'of (\d+)', await pg.inner_text('#vbox .eyebrow'), re.I).group(1))
    for r in range(rounds):
        words = await pg.locator('#vbox .vtile[data-side=r]').all_inner_texts()
        if len(words) != 5 or len(set(words)) != 5: return f'match round {r + 1} meanings {words}'
        if await pg.evaluate("[...document.querySelectorAll('#vbox .vtile')].some((b) => b.tagName !== 'BUTTON')"): return 'match tiles are not buttons'
        if miss and r == 0:
            await pg.click('#vbox .vtile[data-side=l][data-pair="0"]'); await pg.click('#vbox .vtile[data-side=r][data-pair="1"]'); await pg.wait_for_timeout(30)
            if await pg.locator('#vbox .vtile.miss').count() != 2 or 'Misses: 1' not in await pg.inner_text('#vbox'): return 'match mismatch not shown'
        for k in range(5):
            await pg.click(f'#vbox .vtile[data-side=l][data-pair="{k}"]'); await pg.click(f'#vbox .vtile[data-side=r][data-pair="{k}"]'); await pg.wait_for_timeout(15)
            if await pg.locator(f'#vbox .vtile.right[data-pair="{k}"]').count() != 2 and k < 4: return f'match pair {k} not locked'
        await pg.wait_for_timeout(700)
    return None


async def checks(pg, name, fails):
    await go(pg, '#/vocab')
    bad = await pg.evaluate(GEN)
    if bad: fails.append(f'{name}: vocab generators: {bad[:6]}')
    # Hub: seven tiles, topic list (one row per dictionary category), links.
    if await pg.locator('#view .tile[data-mode]').count() != 9: fails.append(f'{name}: vocab hub tiles')  # 3.15.0: eight with In context; 3.19.0: nine with Picture
    rows, cats = await pg.evaluate("[document.querySelectorAll('.vcat').length, Object.keys(App.CATS).filter((c) => App.DICT.some((e) => e.cat === c)).length]")
    if rows != cats or rows < 20: fails.append(f'{name}: vocab topic rows {rows} of {cats}')
    if not await pg.locator('.vcat[data-cat=food] a[href="#/flash/c-food"]').count() or not await pg.locator('.vcat[data-cat=food] a[href="#/vocab/match?cat=food"]').count(): fails.append(f'{name}: vocab topic links')
    # ?cat= preselects the word source; a missing game is handled.
    for h, want in [('#/vocab/match?cat=food', 'food'), ('#/vocab/type?cat=body', 'body'), ('#/vocab/hear?cat=nature', 'nature')]:
        await go(pg, h)
        if await pg.input_value('#vsrc') != want: fails.append(f'{name}: {h} did not preselect')
    if 'Vocabulary practice' not in await pg.inner_text('.breadcrumb'): fails.append(f'{name}: vocab breadcrumb')
    if await pg.locator('#vsrc option[value=stigma]').count() or await pg.locator('#vsrc option[value=opp]').count(): fails.append(f'{name}: hear offers stigma or Opposites')
    if await pg.evaluate("App.state.settings.vocabCat") == 'nature': fails.append(f'{name}: ?cat= saved before Start')
    # The four data quizzes and the affix quiz, played to the score and saved.
    for m in ['opp', 'col', 'odd', 'affix']:
        await go(pg, '#/vocab/' + m); await start(pg)
        if not await pg.locator('#vbox .opt').count(): fails.append(f'{name}: vocab {m} did not start'); continue
        n = int(re.search(r'of (\d+)', await pg.inner_text('#vbox .eyebrow'), re.I).group(1))
        if m == 'odd' and await pg.locator('#vbox .opt.tl').count() != 4: fails.append(f'{name}: odd options are not Tagalog')
        await play_quiz(pg, n)
        if 'Try again' not in await pg.inner_text('#vbox') or 'All vocabulary practice' not in await pg.inner_text('#vbox') or not isinstance(await pg.evaluate(f"(App.state.done.vocab || {{}})['{m}:all']"), int): fails.append(f'{name}: vocab {m} did not finish or save')
    # Hear: the word is hidden until answered; a miss goes to the mistakes deck.
    await go(pg, '#/vocab/hear'); await start(pg, 'food')
    if await pg.locator('#vbox [data-qtext]').is_visible() or not await pg.locator('#vbox [data-act=play]').count(): fails.append(f'{name}: hear shows the word before answering')
    qt = (await pg.locator('#vbox [data-qtext]').inner_text()).strip()
    wrong = await pg.evaluate("[...document.querySelectorAll('#vbox .opt')].findIndex((b) => +b.dataset.k !== 0)")
    await pg.click(f'#vbox .opt >> nth={wrong}'); await pg.wait_for_timeout(30)
    if not await pg.locator('#vbox [data-qtext]').is_visible(): fails.append(f'{name}: hear does not show the word after answering')
    if not await pg.evaluate(f"App.state.mistakes.some((id) => App.dictById[id] && App.dictById[id].tl === {qt!r})"): fails.append(f'{name}: hear miss not in mistakes')
    await pg.click('#vbox [data-act=next]'); await pg.wait_for_timeout(25)
    await play_quiz(pg, 9)
    if not isinstance(await pg.evaluate("(App.state.done.vocab || {})['hear:food']"), int): fails.append(f'{name}: hear score not saved')
    if await pg.evaluate("App.state.settings.vocabCat") != 'food': fails.append(f'{name}: word source not remembered')
    # Match: a perfect game is 100%; one deliberate mismatch lowers the score (15 / 16 = 94%).
    await go(pg, '#/vocab/match'); await start(pg, 'all')
    err = await play_match(pg)
    if err: fails.append(f'{name}: {err}')
    elif '100%' not in await pg.inner_text('#vbox') or await pg.evaluate("App.state.done.vocab['match:all']") != 100: fails.append(f'{name}: perfect match game not 100%')
    await pg.click('#vbox [data-act=retry]'); await pg.wait_for_timeout(60)
    err = await play_match(pg, miss=True)
    if err: fails.append(f'{name}: {err}')
    elif '94%' not in await pg.inner_text('#vbox') or '1 miss' not in await pg.inner_text('#vbox'): fails.append(f'{name}: match miss did not lower the score: {await pg.inner_text("#vbox")}')
    await go(pg, '#/vocab/match'); await start(pg, 'opp')
    if await pg.locator('#vbox .vtile[data-side=r] .tl').count() != 5 or await pg.locator('#vbox .vtile small').count() != 10: fails.append(f'{name}: opposites match shows no Tagalog with English')
    err = await play_match(pg)
    if err or await pg.evaluate("App.state.done.vocab['match:opp']") != 100: fails.append(f'{name}: opposites match game {err}')
    # Type: right words = 100%, a wrong word is marked wrong (and goes to the mistakes), a slip on a long word is "Almost".
    ANSWER = "(() => { const en = document.querySelector('#vbox [data-prompt]').textContent; const e = App.DICT.find((x) => x.en === en && !/\\s/.test(x.tl.trim())) || App.DICT.find((x) => x.en === en); return e.tl; })()"
    await go(pg, '#/vocab/type'); await start(pg, 'food')
    await pg.press('#vbox [data-in]', 'Enter'); await pg.wait_for_timeout(20)
    if await pg.locator('#vbox [data-fb] .feedback').count(): fails.append(f'{name}: type accepted an empty answer')
    for k in range(10):
        ans = await pg.evaluate(ANSWER)
        await pg.fill('#vbox [data-in]', ans.upper() if k == 3 else ans); await pg.press('#vbox [data-in]', 'Enter'); await pg.wait_for_timeout(25)
        if 'Tama' not in await pg.inner_text('#vbox [data-fb]') or not await pg.locator('#vbox [data-fb] .say').count(): fails.append(f'{name}: type right word marked wrong: {ans}'); break
        await pg.click('#vbox [data-act=next]'); await pg.wait_for_timeout(25)
    if '10 / 10' not in await pg.inner_text('#vbox') or await pg.evaluate("App.state.done.vocab['type:food']") != 100: fails.append(f'{name}: type perfect game not 100%')
    await pg.click('#vbox [data-act=retry]'); await pg.wait_for_timeout(60)
    slipped = False
    for k in range(10):
        ans = await pg.evaluate(ANSWER)
        if k == 0: typed = 'zzzq'
        elif not slipped and len(re.sub('[^a-z]', '', ans.lower())) >= 8 and re.fullmatch('[a-z]+', ans): typed = ans[:4] + ('o' if ans[4] == 'a' else 'a') + ans[5:]
        else: typed = ans
        await pg.fill('#vbox [data-in]', typed); await pg.click('#vbox [data-act=check]'); await pg.wait_for_timeout(25)
        fb = await pg.inner_text('#vbox [data-fb]')
        if k == 0:
            if 'Mali' not in fb: fails.append(f'{name}: type wrong word not marked wrong')
            en = await pg.inner_text('#vbox [data-prompt]')
            if not await pg.evaluate(f"App.state.mistakes.some((id) => App.dictById[id] && App.dictById[id].en === {en!r})"): fails.append(f'{name}: type miss not in mistakes')
        elif typed != ans:
            slipped = True
            if 'Almost: check the spelling' not in fb: fails.append(f'{name}: type slip {typed} for {ans} not "Almost": {fb}')
        await pg.click('#vbox [data-act=next]'); await pg.wait_for_timeout(25)
    if '9 / 10' not in await pg.inner_text('#vbox'): fails.append(f'{name}: type score with one wrong word')
    # Progress keeps the picture rows and adds ours; Practice and search; Home rotation.
    await go(pg, '#/progress')
    t = await pg.inner_text('#view')
    if 'Vocabulary games tried' not in t or 'Picture sets tried' not in t: fails.append(f'{name}: progress rows')
    await go(pg, '#/practice')
    if await pg.locator('#view a.tile[href^="#/vocab/"]').count() != 9: fails.append(f'{name}: practice vocab tiles')  # 3.19.0: nine with Picture
    await go(pg, '#/search?q=opposites', 250)
    if 'Opposites (vocabulary)' not in await pg.inner_text('#view'): fails.append(f'{name}: search does not find opposites')
    if not await pg.evaluate("App.views.home.toString().includes('#/vocab/match') && App.views.home.toString().includes('#/vocab/hear')"): fails.append(f'{name}: home rotation lacks vocab')
    if not await pg.locator('#railBody a[href="#/vocab"]').count(): fails.append(f'{name}: nav item')
    # Phone at 125% text: a match round and a typed word fit without sideways scrolling.
    if name == 'phone':
        await pg.evaluate("App.state.settings.textSize = '125'; App.applyTextSize(); 0")
        for m, src in [('match', 'health'), ('match', 'opp'), ('type', 'clinical'), ('affix', None)]:
            await go(pg, '#/vocab/' + m); await start(pg, src)
            if await pg.evaluate("document.documentElement.scrollWidth > window.innerWidth"): fails.append(f'{name}: {m} overflows at 125%')
        await pg.evaluate("App.state.settings.textSize = '100'; App.applyTextSize(); 0")
