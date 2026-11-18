# 3.17.0: Practise a lesson (#/drills/lessongaps, lesson page buttons, unit practice) and Listen and reply (#/reply).
ROUTES = ['#/drills/lessongaps', '#/drills/lessongaps?l=markers', '#/drills/lessongaps?l=no-such-lesson', '#/reply', '#/lessons/markers']

STUB = """(() => { window._said = []; if (!App._p10s) { App._p10s = App.speak; App._p10a = App.speakAsync; }
  App.speak = (t) => { window._said.push(String(t)); }; App.speakAsync = (t) => { window._said.push(String(t)); return Promise.resolve(); }; return 0; })()"""
UNSTUB = "(() => { if (App._p10s) { App.speak = App._p10s; App.speakAsync = App._p10a; } return 0; })()"

async def go(pg, h, wait=150):
    # App.go renders again when the hash is already h (a plain hash assignment would not).
    await pg.evaluate(f"App.go({h!r})"); await pg.wait_for_timeout(wait)

async def overflow(pg, fails, name, where):
    if await pg.evaluate("document.documentElement.scrollWidth > window.innerWidth"): fails.append(f'{name}: horizontal overflow on {where}')

async def play_lesson(pg, fails, name, lid, big=False):
    """Start a lesson practice and answer every question right, finding the answer from LESSON_GAPS. Checks no audio before answering."""
    await pg.evaluate(STUB)
    await pg.click('#lggo'); await pg.wait_for_timeout(80)
    n = 0
    for _ in range(12):
        if 'Try again' in await pg.inner_text('#dbox'): break
        q = await pg.inner_text('#dbox .card > div.tl')
        it = await pg.evaluate("([lid, q]) => (LESSON_GAPS[lid] || []).find((x) => x.q === q) || null", [lid, q])
        if not it: fails.append(f'{name}: lesson practice {lid} shows a sentence not in its data: {q}'); break
        full = it.get('voice') or it['q'].replace('____', it['a'])
        said = await pg.evaluate("window._said.slice()")
        if any(full in s or it['a'] in s.split() for s in said): fails.append(f'{name}: lesson practice spoke the answer before it was chosen: {said}')
        if await pg.evaluate("[...document.querySelectorAll('#dbox [data-say]')].length"): fails.append(f'{name}: lesson practice has a speaker before answering')
        if await pg.locator('#dbox .opt:not(.tl)').count(): fails.append(f'{name}: lesson practice options lack class tl')
        if big and n == 0: await overflow(pg, fails, name, 'lesson practice question at 125%')
        await pg.evaluate("(a) => [...document.querySelectorAll('#dbox .opt')].find((b) => b.textContent === a).click()", it['a']); await pg.wait_for_timeout(30)
        if big and n == 0: await overflow(pg, fails, name, 'lesson practice answer at 125%')
        if n == 0:
            await pg.click('#dbox .feedback .say'); await pg.wait_for_timeout(20)
            if full not in await pg.evaluate("window._said.slice()"): fails.append(f'{name}: lesson practice does not speak the filled sentence after answering')
        await pg.evaluate("window._said = []; 0")
        await pg.click('#dbox [data-act=next]'); await pg.wait_for_timeout(30); n += 1
    await pg.evaluate(UNSTUB)
    return n

async def reply_round(pg, fails, name, want_kind=None, want_lv=None, big=False):
    """Play a Listen and reply round answering right. Returns the item ids seen."""
    await pg.evaluate(STUB)
    await pg.click('#rpgo'); await pg.wait_for_timeout(260)
    seen = []
    for k in range(12):
        if await pg.locator('#rpround [data-act=retry]').count(): break
        tls = await pg.evaluate("[...document.querySelectorAll('#rpround .opt .tl')].map((e) => e.textContent)")
        x = await pg.evaluate("(tls) => LISTEN_REPLY.find((x) => x.opts.map((o) => o.tl).sort().join('|') === tls.slice().sort().join('|')) || null", tls)
        if not x: fails.append(f'{name}: reply options not from one item: {tls}'); break
        seen.append(x['id'])
        if want_kind and (x['clin'] != (want_kind == 'clinical')): fails.append(f'{name}: reply kind filter let in {x["id"]}')
        if want_lv and x['lv'] != want_lv: fails.append(f'{name}: reply level filter let in {x["id"]}')
        page = await pg.inner_text('#view')
        if x['say'] in page or await pg.evaluate("(s) => document.querySelector('#view').innerHTML.includes(s)", x['say']): fails.append(f'{name}: reply line {x["id"]} is in the page before answering')
        said = await pg.evaluate("window._said.slice()")
        if x['say'] not in said: fails.append(f'{name}: reply line {x["id"]} not played on open: {said}')
        if await pg.locator('#rpround .rp-opt .say').count() != 4: fails.append(f'{name}: reply options lack their own speakers')
        if x['who'] not in page: fails.append(f'{name}: reply does not show who is speaking')
        await pg.evaluate("window._said = []; 0"); await pg.click('#rpround [data-act=play]'); await pg.wait_for_timeout(20)
        if await pg.evaluate("window._said.slice()") != [x['say']]: fails.append(f'{name}: Play again does not play the line')
        if big and k == 0: await overflow(pg, fails, name, 'reply question at 125%')
        right = x['opts'][x['a']]['tl']
        await pg.evaluate("(t) => [...document.querySelectorAll('#rpround .opt')].find((b) => b.querySelector('.tl').textContent === t).click()", right); await pg.wait_for_timeout(30)
        page = await pg.inner_text('#view')
        if x['say'] not in page or x['en'] not in page: fails.append(f'{name}: reply line or its English not shown after answering')
        if not all(o['en'] in page for o in x['opts']): fails.append(f'{name}: reply options English not shown after answering')
        if await pg.locator('#rpround .opt.right').count() != 1 or right not in await pg.inner_text('#rpround .opt.right'): fails.append(f'{name}: right reply not marked')
        if x['why'] not in page: fails.append(f'{name}: reply why not shown')
        if big and k == 0: await overflow(pg, fails, name, 'reply answer at 125%')
        await pg.evaluate("window._said = []; 0")
        await pg.click('#rpround [data-act=next]'); await pg.wait_for_timeout(200)
    await pg.evaluate(UNSTUB)
    return seen

async def checks(pg, name, fails):
    name = 'desk' if (pg.viewport_size or {}).get('width', 0) > 600 else 'phone'
    keep = await pg.evaluate("JSON.stringify({ k: App.state.settings.replyKind, l: App.state.settings.replyLv })")
    # ---- Lesson page buttons ----
    await go(pg, '#/lessons/markers')
    if 'Practise this lesson' not in await pg.inner_text('#view .lx-links'): fails.append(f'{name}: markers lesson has no Practise this lesson button')
    if await pg.locator('#view .lx-links a[href="#/drills/lessongaps?l=markers"]').count() != 1: fails.append(f'{name}: markers lesson button link')
    rid = await pg.evaluate("LESSONS.find((l) => l.review && l.unit === 'Foundations').id")
    await go(pg, '#/lessons/' + rid)
    if await pg.locator(f'#view .lx-links a[href="#/drills/lessongaps?u={rid}"]').count() != 1 or 'Practise this unit' not in await pg.inner_text('#view .lx-links'): fails.append(f'{name}: review {rid} has no Practise this unit button')
    nogap = await pg.evaluate("(LESSONS.find((l) => !l.review && !LESSON_GAPS[l.id]) || {}).id || null")
    if nogap:
        await go(pg, '#/lessons/' + nogap)
        if 'Practise this lesson' in await pg.inner_text('#view'): fails.append(f'{name}: lesson {nogap} without gaps shows the button')
    # ---- Picker: units in order, only lessons with gaps, unknown id falls back to it ----
    await go(pg, '#/drills/lessongaps')
    r = await pg.evaluate("""(() => { const out = [], groups = [...document.querySelectorAll('#lgsel optgroup')];
      const want = LESSON_UNITS.map((u) => u[0]).filter((u) => LESSONS.some((l) => l.unit === u && !l.review && LESSON_GAPS[l.id]));
      if (groups.map((g) => g.label).join('|') !== want.join('|')) out.push('units ' + groups.map((g) => g.label).join('|'));
      const ids = [...document.querySelectorAll('#lgsel option')].map((o) => o.value);
      if (ids.some((id) => !LESSON_GAPS[id])) out.push('lesson without gaps listed');
      if (ids.length !== Object.keys(LESSON_GAPS).length) out.push('options ' + ids.length);
      const order = LESSONS.filter((l) => LESSON_GAPS[l.id] && !l.review).map((l) => l.id); if (ids.join('|') !== order.join('|')) out.push('lesson order');
      if (document.querySelectorAll('#view h1').length !== 1) out.push('h1 count'); return out; })()""")
    if r: fails.append(f'{name}: lesson practice picker: {r}')
    await go(pg, '#/drills/lessongaps?l=no-such-lesson')
    if not await pg.locator('#lgsel').count() or 'no practice sentences' not in await pg.inner_text('#view'): fails.append(f'{name}: unknown lesson id does not show the picker')
    # Picker Start opens the chosen lesson and starts at once.
    await go(pg, '#/drills/lessongaps')
    await pg.select_option('#lgsel', 'pronouns'); await pg.click('#lggo'); await pg.wait_for_timeout(250)
    if 'lessongaps?l=pronouns' not in await pg.evaluate("location.hash") or not await pg.locator('#dbox .opt').count(): fails.append(f'{name}: picker Start does not open and start the lesson')
    # ---- One lesson to the score: 100% saved, no audio before answering, score links ----
    await go(pg, '#/drills/lessongaps?l=markers')
    h = await pg.inner_text('#view h1')
    title = await pg.evaluate("LESSONS.find((l) => l.id === 'markers').title")
    if title not in h: fails.append(f'{name}: lesson practice heading {h!r}')
    if not await pg.locator('#view a[href="#/lessons/markers"]').count(): fails.append(f'{name}: lesson practice has no link back to the lesson')
    n = await play_lesson(pg, fails, name, 'markers')
    if n != 10: fails.append(f'{name}: lesson practice ran {n} questions')
    t = await pg.inner_text('#dbox')
    if 'Try again' not in t or 'Back to the lesson' not in t or 'Next lesson' not in t: fails.append(f'{name}: lesson practice score links: {t[:120]}')
    if await pg.evaluate("(App.state.done.lessonGaps || {}).markers") != 100: fails.append(f'{name}: lesson practice 100% not saved')
    nxt = await pg.evaluate("(() => { const ls = LESSONS.filter((l) => !l.review && LESSON_GAPS[l.id]); return ls[ls.findIndex((l) => l.id === 'markers') + 1].id; })()")
    if await pg.locator(f'#dbox a[href="#/drills/lessongaps?l={nxt}"]').count() != 1: fails.append(f'{name}: next lesson practice link should go to {nxt}')
    await go(pg, '#/lessons/markers')
    if '100%' not in await pg.inner_text('#view .lx-links'): fails.append(f'{name}: lesson button lacks the best score')
    # ---- Unit practice: 10 items from that unit only, saved under unit:<id> ----
    bad = await pg.evaluate("""(rid) => { const out = [], ids = App.drillLessonGaps.unitLessons(rid), unit = LESSONS.find((l) => l.id === rid).unit;
      if (!ids.length || ids.some((id) => LESSONS.find((l) => l.id === id).unit !== unit)) out.push('unit lessons ' + ids.join(','));
      for (let k = 0; k < 10; k++) { const qs = App.drillLessonGaps.unitQs(rid, 10); if (qs.length !== 10) out.push('length ' + qs.length);
        qs.forEach((q) => { if (!ids.includes(q.lesson)) out.push('item from ' + q.lesson); if (!(LESSON_GAPS[q.lesson] || []).some((x) => x.q === q.q && x.a === q.opts[q.a])) out.push('answer index ' + q.q); if (q.say) out.push('say before answering'); }); }
      return out.slice(0, 5); }""", rid)
    if bad: fails.append(f'{name}: unit practice: {bad}')
    await go(pg, '#/drills/lessongaps?u=' + rid)
    await pg.click('#lggo'); await pg.wait_for_timeout(60)
    if 'of 10' not in (await pg.inner_text('#dbox')).lower(): fails.append(f'{name}: unit practice does not run 10 questions')
    for _ in range(10):
        await pg.click('#dbox .opt >> nth=0'); await pg.wait_for_timeout(20); await pg.click('#dbox [data-act=next]'); await pg.wait_for_timeout(20)
    if not isinstance(await pg.evaluate(f"(App.state.done.lessonGaps || {{}})['unit:{rid}']"), int): fails.append(f'{name}: unit practice score not saved')
    # ---- Listen and reply API ----
    bad = await pg.evaluate("""(() => { const out = [], qs = App.replyQs('clinical', 'all', 10); if (qs.length !== 10) out.push('length ' + qs.length);
      qs.forEach((q) => { const x = LISTEN_REPLY.find((i) => i.id === q.id); if (!x) return out.push('no item ' + q.id); if (!x.clin) out.push('everyday item ' + x.id);
        if (q.opts.length !== 4 || new Set(q.opts).size !== 4) out.push('options ' + x.id); if (q.opts[q.a] !== x.opts[x.a].tl) out.push('answer index ' + x.id); if (!q.hideQ || q.say !== x.say) out.push('not a listening question ' + x.id); });
      if (App.replyItems().length !== LISTEN_REPLY.length) out.push('items ' + App.replyItems().length);
      if (App.replyQs('everyday', 'B2', 50).some((q) => { const x = LISTEN_REPLY.find((i) => i.id === q.id); return x.clin || x.lv !== 'B2'; })) out.push('everyday B2 filter');
      return out; })()""")
    if bad: fails.append(f'{name}: replyQs: {bad[:4]}')
    # ---- A round to the score ----
    await pg.evaluate("App.state.settings.replyKind = 'all'; App.state.settings.replyLv = 'all'; App.state.done.reply = {}; App.save(); 0")
    await go(pg, '#/reply')
    if await pg.locator('#view h1').count() != 1: fails.append(f'{name}: reply h1 count')
    if 'Drafted for study' not in await pg.inner_text('#view'): fails.append(f'{name}: reply page has no draft notice')
    seen = await reply_round(pg, fails, name)
    if len(seen) != 10: fails.append(f'{name}: reply round ran {len(seen)} questions')
    if 'New round' not in await pg.inner_text('#rpround'): fails.append(f'{name}: reply round did not reach the score')
    if await pg.evaluate("(App.state.done.reply || {})['all:all']") != 100: fails.append(f'{name}: reply best 100% not saved under all:all')
    # ---- Mistakes: a wrong answer adds the id, a right one removes it; the button shows at 3 ----
    await go(pg, '#/reply')
    await pg.evaluate(STUB)
    await pg.click('#rpgo'); await pg.wait_for_timeout(200)
    tls = await pg.evaluate("[...document.querySelectorAll('#rpround .opt .tl')].map((e) => e.textContent)")
    x = await pg.evaluate("(tls) => LISTEN_REPLY.find((x) => x.opts.map((o) => o.tl).sort().join('|') === tls.slice().sort().join('|'))", tls)
    wrong = [o['tl'] for k, o in enumerate(x['opts']) if k != x['a']][0]
    await pg.evaluate("(t) => [...document.querySelectorAll('#rpround .opt')].find((b) => b.querySelector('.tl').textContent === t).click()", wrong); await pg.wait_for_timeout(30)
    if x['id'] not in await pg.evaluate("App.state.done.reply.miss || []"): fails.append(f'{name}: wrong reply not added to miss')
    if await pg.locator('#rpround .opt.wrong').count() != 1: fails.append(f'{name}: wrong reply not marked')
    others = await pg.evaluate("(id) => LISTEN_REPLY.filter((i) => i.id !== id).slice(0, 2).map((i) => i.id)", x['id'])
    await pg.evaluate("(ids) => { App.state.done.reply.miss = ids; App.save(); return 0; }", others + [x['id']])
    await go(pg, '#/reply')
    if not await pg.locator('#rpmiss').count(): fails.append(f'{name}: no Practise my mistakes button with 3 misses')
    else:
        await pg.click('#rpmiss'); await pg.wait_for_timeout(200)
        tls = await pg.evaluate("[...document.querySelectorAll('#rpround .opt .tl')].map((e) => e.textContent)")
        y = await pg.evaluate("(tls) => LISTEN_REPLY.find((x) => x.opts.map((o) => o.tl).sort().join('|') === tls.slice().sort().join('|'))", tls)
        if y['id'] not in others + [x['id']]: fails.append(f'{name}: mistakes round shows an item not in miss')
        await pg.evaluate("(t) => [...document.querySelectorAll('#rpround .opt')].find((b) => b.querySelector('.tl').textContent === t).click()", y['opts'][y['a']]['tl']); await pg.wait_for_timeout(30)
        if y['id'] in await pg.evaluate("App.state.done.reply.miss"): fails.append(f'{name}: right reply did not remove the id from miss')
    await pg.evaluate(UNSTUB)
    await pg.evaluate("App.state.done.reply.miss = []; App.save(); 0")
    await go(pg, '#/reply')
    if await pg.locator('#rpmiss').count(): fails.append(f'{name}: mistakes button shown with no misses')
    # ---- Kind and level segs filter and are remembered ----
    await pg.click('#rpset [data-rk=clinical]'); await pg.wait_for_timeout(60)
    lv_list = await pg.evaluate("[...document.querySelectorAll('#rpset [data-rl]')].map((b) => b.dataset.rl)")
    want = await pg.evaluate("['all'].concat(['A1','A2','B1','B2'].filter((v) => LISTEN_REPLY.some((x) => x.clin && x.lv === v)))")
    if lv_list != want: fails.append(f'{name}: level seg for clinical {lv_list}')
    await pg.click('#rpset [data-rl=B1]'); await pg.wait_for_timeout(60)
    if await pg.evaluate("[App.state.settings.replyKind, App.state.settings.replyLv]") != ['clinical', 'B1']: fails.append(f'{name}: reply segs not saved')
    cnt = await pg.evaluate("LISTEN_REPLY.filter((x) => x.clin && x.lv === 'B1').length")
    if f'{cnt} line' not in await pg.inner_text('#rpset'): fails.append(f'{name}: reply count line for clinical B1')
    await go(pg, '#/practice'); await go(pg, '#/reply')
    if await pg.evaluate("[document.querySelector('#rpset [data-rk].on').dataset.rk, document.querySelector('#rpset [data-rl].on').dataset.rl]") != ['clinical', 'B1']: fails.append(f'{name}: reply segs not remembered')
    seen = await reply_round(pg, fails, name, 'clinical', 'B1')
    if not seen: fails.append(f'{name}: clinical B1 round empty')
    if await pg.evaluate("(App.state.done.reply || {})['clinical:B1']") != 100: fails.append(f'{name}: clinical:B1 best not saved')
    # ---- Daily mix: still 10 well-formed questions; the new parts can appear ----
    bad = await pg.evaluate("""(() => { const out = [], tags = new Set();
      for (let k = 0; k < 20; k++) { const qs = App.drillQs.daily(); if (qs.length !== 10) out.push('length ' + qs.length);
        qs.forEach((q) => { tags.add(q.sub.split(' · ')[0]); if (q.opts.length < 2 || new Set(q.opts).size !== q.opts.length || !q.sub || !(q.a >= 0 && q.a < q.opts.length)) out.push('bad q ' + q.q); }); }
      const parts = (App.dailyExtra || []).map((p) => p[0]); ['Lesson practice', 'Listen and reply'].forEach((t) => { if (!parts.includes(t)) out.push('no daily part ' + t); });
      const lp = App.dailyExtra.find((p) => p[0] === 'Lesson practice')[1](), rp = App.dailyExtra.find((p) => p[0] === 'Listen and reply')[1]();
      if (lp.length !== 1 || lp[0].say || !lp[0].sayAfter) out.push('lesson practice part'); if (rp.length !== 1 || !rp[0].hideQ) out.push('listen and reply part');
      return out.slice(0, 5); })()""")
    if bad: fails.append(f'{name}: daily mix: {bad}')
    # ---- Search, Practice tiles, Home rotation, Progress rows, nav ----
    if not await pg.evaluate("App.searchAll('practise a lesson').some((r) => r.route === '#/drills/lessongaps') && App.searchAll('listen and reply').some((r) => r.route === '#/reply')"): fails.append(f'{name}: search misses a new page')
    if await pg.evaluate("App.searchAll(LISTEN_REPLY[0].say).some((r) => r.route === '#/reply')") and await pg.evaluate("App.searchAll(LISTEN_REPLY[0].say).some((r) => /reply/i.test(r.type))"): fails.append(f'{name}: search indexes reply item texts')
    await go(pg, '#/practice')
    for hh in ['#/drills/lessongaps', '#/reply']:
        if await pg.locator(f'#view a.tile[href="{hh}"]').count() != 1: fails.append(f'{name}: practice tile for {hh}')
    if not await pg.evaluate("App.views.home.toString().includes('#/reply')"): fails.append(f'{name}: home rotation lacks Listen and reply')
    await go(pg, '#/progress')
    pt = await pg.inner_text('#view')
    if 'Lesson practice' not in pt or 'Listen and reply' not in pt: fails.append(f'{name}: progress rows missing')
    if await pg.locator('#railBody a[href="#/reply"]').count() != 1: fails.append(f'{name}: nav has no Listen and reply')
    await go(pg, '#/reply')
    if await pg.evaluate("document.title") != 'Listen and reply · Usap Tayo': fails.append(f'{name}: reply title')
    if name == 'phone':
        if not await pg.evaluate("document.querySelector('#tabbar [data-nav=more]').classList.contains('on')"): fails.append(f'{name}: More tab not lit on #/reply')
        # ---- 125% text on the phone: both pages before and after answering ----
        await pg.evaluate("App.state.settings.textSize = '125'; App.applyTextSize(); 0")
        await go(pg, '#/drills/lessongaps'); await overflow(pg, fails, name, 'lesson practice picker at 125%')
        await go(pg, '#/drills/lessongaps?l=focus-an-i'); await overflow(pg, fails, name, 'lesson practice page at 125%')
        await play_lesson(pg, fails, name, 'focus-an-i', big=True)
        await go(pg, '#/lessons/' + rid); await overflow(pg, fails, name, 'review lesson buttons at 125%')
        await pg.evaluate("App.state.settings.replyKind = 'clinical'; App.state.settings.replyLv = 'all'; 0")
        await go(pg, '#/reply'); await overflow(pg, fails, name, 'reply page at 125%')
        await reply_round(pg, fails, name, big=True)
        await overflow(pg, fails, name, 'reply score at 125%')
        await pg.evaluate("App.state.settings.textSize = '100'; App.applyTextSize(); 0")
    await pg.evaluate("(k) => { const o = JSON.parse(k); App.state.settings.replyKind = o.k; App.state.settings.replyLv = o.l; App.save(); return 0; }", keep)
