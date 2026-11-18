"""3.14.0: lesson extras (Common mistakes, More examples, More practice), units in LESSON_UNITS order, unit reviews,
prev / next in the new order, the lesson handout with the extras. Ids come from the data at run time, so the checks
pass with any subset of js/data/lesson-extra-*.js and lessons-review.js (a check whose data is absent is skipped)."""
import json, os, urllib.request, re

# ROUTES: the lessons list, a lesson with extras, a review lesson and the handout of the lesson with extras. Which ids
# exist depends on the data files present, so they are read from the served index.html and data files (no file = no route).
def _routes():
    import sys
    out = ['#/lessons', '#/progress']
    try:
        base = sys.argv[sys.argv.index('--base') + 1].rsplit('/', 1)[0] + '/'
        op = urllib.request.build_opener(urllib.request.ProxyHandler({}))
        get = lambda f: op.open(base + f, timeout=5).read().decode('utf8')
        html = get('index.html')
        for f in re.findall(r'src="(js/data/lesson-extra-\d+\.js)"', html):
            m = re.search(r"\n  '([\w-]+)': \{", get(f))
            if m: out += ['#/lessons/' + m.group(1), '#/lessons/handout?id=' + m.group(1)]; break
        if 'js/data/lessons-review.js' in html:
            m = re.search(r"id: '(review-[\w-]+)'", get('js/data/lessons-review.js'))
            if m: out.append('#/lessons/' + m.group(1))
    except Exception as e:
        print('  smoke_ext_extras: could not read the data files for ROUTES:', e)
    return out
ROUTES = _routes()

FIND = """(() => { const X = window.LESSON_EXTRA || {}; const ok = (id) => { const x = App.lessonExtra(id); return x && x.mistakes.length && x.more.length && x.quiz.length; };
  const withX = LESSONS.filter((l) => !l.review && ok(l.id)).map((l) => l.id); const rev = LESSONS.filter((l) => l.review).map((l) => l.id);
  const without = LESSONS.filter((l) => !l.review && !Object.prototype.hasOwnProperty.call(X, l.id)).map((l) => l.id);
  return { withX, rev, without }; })()"""

async def checks(pg, name, fails):
    async def go(h, ms=200):
        await pg.evaluate(f"location.hash={h!r}"); await pg.wait_for_timeout(ms)
    async def overflow(where):
        if await pg.evaluate("document.documentElement.scrollWidth > window.innerWidth"): fails.append(f'{name}: horizontal overflow on {where}')
    errs0 = await pg.evaluate("(window._xerr = window._xerr || [], window.addEventListener('error', (e) => window._xerr.push(String(e.message))), 0)")
    ids = await pg.evaluate(FIND)
    # ---- Lessons list: units in LESSON_UNITS order, each review last in its unit with a Review pill ----
    await go('#/lessons')
    r = await pg.evaluate("""(() => { const v = document.querySelector('#view'); const hs = [...v.querySelectorAll('h2')].map((h) => h.textContent);
      const want = LESSON_UNITS.map((u) => u[0]).filter((u) => LESSONS.some((l) => l.unit === u));
      const out = []; if (hs.slice(0, want.length).join('|') !== want.join('|')) out.push('units ' + hs.join('|'));
      [...v.querySelectorAll('h2')].forEach((h) => { const g = h.nextElementSibling; if (!g) return; const tiles = [...g.querySelectorAll('a.tile')];
        tiles.forEach((t, i) => { const id = t.getAttribute('href').split('/').pop(), l = LESSONS.find((x) => x.id === id), pill = !!t.querySelector('.pill.rv');
          if (!l) out.push('tile for missing ' + id); else { if (l.review !== true && pill) out.push('Review pill on ' + id); if (l.review && !pill) out.push('no Review pill on ' + id); if (l.review && i !== tiles.length - 1) out.push(id + ' not last in ' + h.textContent); } }); });
      const done = v.querySelector('.lx-done'); if (!done || !new RegExp(' of ' + LESSONS.length + ' lessons done').test(done.textContent)) out.push('done line ' + (done && done.textContent));
      if (v.querySelectorAll('h1').length !== 1) out.push('h1 count'); return out; })()""")
    if r: fails.append(f'{name}: lessons list: {r[:4]}')
    # ---- A review lesson: pill, stacked rows with links, speaker buttons, quiz of 10+, no overflow at 125% ----
    for rid in ids['rev'][:2]:
        await go('#/lessons/' + rid)
        r = await pg.evaluate("""(id) => { const l = LESSONS.find((x) => x.id === id), v = document.querySelector('#view'), out = [];
          if (!v.querySelector('.row .pill.rv')) out.push('no Review pill');
          const rows = v.querySelectorAll('.lesson-body .rv-row'); if (!rows.length) out.push('no rows');
          rows.forEach((rw) => { if (!rw.querySelector('a[href^="#/lessons/"]')) out.push('row without link'); if (rw.querySelectorAll('.ex .say').length !== 1) out.push('row speaker count'); });
          if (l.quiz.length < 10) out.push('quiz ' + l.quiz.length); if (!v.querySelector('#lq .opt')) out.push('quiz not drawn');
          if (v.querySelector('table')) out.push('review uses a table'); return out; }""", rid)
        if r: fails.append(f'{name}: review {rid}: {r[:4]}')
        await overflow('review ' + rid)
    # ---- A lesson with extras ----
    if ids['withX']:
        lid = ids['withX'][0]
        await go('#/lessons/' + lid)
        r = await pg.evaluate("""(id) => { const x = App.lessonExtra(id), v = document.querySelector('#view'), out = [];
          const hs = [...v.querySelectorAll('h2')].map((h) => h.textContent);
          ['Common mistakes', 'More examples', 'Check yourself', 'More practice'].forEach((t) => { if (!hs.includes(t)) out.push('no ' + t); });
          if (hs.indexOf('More examples') > hs.indexOf('Check yourself') || hs.indexOf('Common mistakes') > hs.indexOf('More examples')) out.push('heading order ' + hs.join('|'));
          const lx = v.querySelector('.lesson-body.lx'); if (!lx) return ['no .lesson-body.lx'];
          const bads = lx.querySelectorAll('.lx-bad'); if (bads.length !== x.mistakes.length) out.push('wrong lines ' + bads.length);
          bads.forEach((b) => { if (b.querySelector('.say, button')) out.push('speaker on a wrong line'); if (!b.querySelector('s')) out.push('wrong line not in <s>'); if (b.closest('.ex')) out.push('wrong line inside .ex');
            if (!/^Wrong: /.test(b.querySelector('.sr-only') ? b.querySelector('.sr-only').textContent : '')) out.push('no Wrong: prefix'); });
          const ok = lx.querySelectorAll('.ex.lx-ok'); if (ok.length !== x.mistakes.length) out.push('right lines ' + ok.length);
          const more = [...lx.querySelectorAll('.ex:not(.lx-ok)')]; if (more.length !== x.more.length) out.push('more ' + more.length);
          [...ok].concat(more).forEach((e) => { if (e.querySelectorAll('.say').length !== 1) out.push('speaker count ' + e.textContent.slice(0, 30)); });
          return out; }""", lid)
        if r: fails.append(f'{name}: lesson {lid} extras: {r[:5]}')
        # the wrong line is never spoken; the voice text is used when a row has one
        r = await pg.evaluate("""(id) => { const x = App.lessonExtra(id), said = [], old = App.speak; App.speak = (t) => { said.push(t); };
          document.querySelectorAll('.lesson-body.lx .ex .say').forEach((b) => b.click()); App.speak = old;
          const bad = x.mistakes.map((m) => m[0]); const want = x.mistakes.map((m) => m[3] || m[1]).concat(x.more.map((m) => m[2] || m[0]));
          return [said.filter((t) => bad.includes(t)), want.filter((t) => !said.includes(t))]; }""", lid)
        if r[0] or r[1]: fails.append(f'{name}: lesson {lid} spoken lines: wrong spoken {r[0][:2]}, missing {r[1][:2]}')
        # a lesson whose extras carry a voice text (spoken-short-forms): the speaker says the voice text, not the printed line
        vid = await pg.evaluate("(() => { const l = LESSONS.find((l) => { const x = App.lessonExtra(l.id); return x && (x.more.some((m) => m[2]) || x.mistakes.some((m) => m[3])); }); return l ? l.id : null; })()")
        if vid:
            await go('#/lessons/' + vid)
            r = await pg.evaluate("""(id) => { const x = App.lessonExtra(id), said = [], old = App.speak; App.speak = (t) => { said.push(t); };
              const boxes = [...document.querySelectorAll('.lesson-body.lx .ex')]; boxes.forEach((e) => { const b = e.querySelector('.say'); if (b) b.click(); }); App.speak = old;
              const want = x.mistakes.map((m) => m[3] || m[1]).concat(x.more.map((m) => m[2] || m[0])), voiced = boxes.filter((e) => e.dataset.voice).length;
              const nv = x.mistakes.filter((m) => m[3]).length + x.more.filter((m) => m[2]).length;
              return [want.filter((t) => !said.includes(t)), voiced === nv ? '' : 'data-voice ' + voiced + '/' + nv]; }""", vid)
            if r[0] or r[1]: fails.append(f'{name}: lesson {vid} voice text: missing {r[0][:2]} {r[1]}')
            await go('#/lessons/' + lid)
        await overflow('lesson ' + lid)
        # More practice to its score: saved in lessonsMore, lesson completion untouched
        before = await pg.evaluate("(id) => [App.state.done.lessons[id], (App.state.done.lessonsMore || {})[id]]", lid)
        n = await pg.evaluate("(id) => App.lessonExtra(id).quiz.length", lid)
        for _ in range(n):
            await pg.click('#lq2 .opt >> nth=0'); await pg.wait_for_timeout(30); await pg.click('#lq2 [data-act=next]'); await pg.wait_for_timeout(30)
        if 'Try again' not in await pg.inner_text('#lq2'): fails.append(f'{name}: More practice did not finish')
        after = await pg.evaluate("(id) => [App.state.done.lessons[id], (App.state.done.lessonsMore || {})[id], JSON.parse(localStorage.getItem('usaptayo.v1') || '{}')]", lid)
        if not isinstance(after[1], int): fails.append(f'{name}: lessonsMore[{lid}] not saved: {after[1]}')
        if after[0] != before[0]: fails.append(f'{name}: More practice changed done.lessons[{lid}]')
        await go('#/progress')
        if 'More practice done' not in await pg.inner_text('#view'): fails.append(f'{name}: progress lacks the More practice row')
        # Without extras: no empty headings. Malformed: page still works. Both restored afterwards.
        r = await pg.evaluate("""async (id) => { const X = window.LESSON_EXTRA, keep = X[id], out = [], wait = () => new Promise((r) => setTimeout(r, 160));
          const heads = () => [...document.querySelectorAll('#view h2')].map((h) => h.textContent);
          try {
            delete X[id]; location.hash = '#/lessons/x'; await wait(); location.hash = '#/lessons/' + id; await wait();
            const h = heads(); if (h.includes('Common mistakes') || h.includes('More examples') || h.includes('More practice') || document.querySelector('.lesson-body.lx, #lq2')) out.push('without extras: ' + h.join('|'));
            if (!h.includes('Check yourself')) out.push('without extras: no Check yourself');
            for (const v of [5, 'x', null, [], { mistakes: 5, more: [[1, 2], 'a', null], quiz: [['q', 'ab', 9], ['q', ['a', 'b'], 7]] }, { mistakes: [['', '', '']], more: [[]] }]) {
              X[id] = v; location.hash = '#/lessons/x'; await wait(); location.hash = '#/lessons/' + id; await wait();
              const t = document.querySelector('#view').innerText; if (/went wrong|not found/i.test(t) || !document.querySelector('#lq .opt')) out.push('malformed ' + JSON.stringify(v).slice(0, 40));
              if (document.querySelector('#lq2') || heads().some((x) => /Common mistakes|More examples/.test(x))) out.push('malformed shows extras ' + JSON.stringify(v).slice(0, 40));
            }
          } catch (e) { out.push('error ' + e.message); }
          X[id] = keep; return out; }""", lid)
        if r: fails.append(f'{name}: lesson {lid} without / malformed extras: {r[:4]}')
    else:
        print(f'  [{name}] SKIP extras checks: no lesson has extras yet')
    # ---- prev / next follow LESSONS order across a unit boundary ----
    r = await pg.evaluate("""(() => { const i = LESSONS.findIndex((l, k) => k > 0 && LESSONS[k - 1].unit !== l.unit); return i > 0 ? [LESSONS[i - 1].id, LESSONS[i].id, LESSONS[i].title, LESSONS[i - 1].title] : null; })()""")
    if r:
        await go('#/lessons/' + r[0])
        nxt = await pg.evaluate("[...document.querySelectorAll('#view .spread a.btn')].map((a) => a.getAttribute('href'))")
        if '#/lessons/' + r[1] not in nxt: fails.append(f'{name}: next of {r[0]} is not {r[1]}: {nxt}')
        await go('#/lessons/' + r[1])
        prv = await pg.evaluate("[...document.querySelectorAll('#view .spread a.btn')].map((a) => a.getAttribute('href'))")
        if '#/lessons/' + r[0] not in prv: fails.append(f'{name}: previous of {r[1]} is not {r[0]}: {prv}')
    # the lesson order file is idempotent in the page too
    r = await pg.evaluate("""(async () => { const before = LESSONS.map((l) => l.id).join(); const s = document.createElement('script'); s.src = 'js/data/lessons-zz-order.js?again';
      await new Promise((ok) => { s.onload = ok; s.onerror = ok; document.head.appendChild(s); }); return before === LESSONS.map((l) => l.id).join(); })()""")
    if not r: fails.append(f'{name}: lessons-zz-order.js run twice changes LESSONS')
    # search: reviews are found as lessons, extras sentences are not indexed
    if ids['rev']:
        r = await pg.evaluate("(id) => { const l = LESSONS.find((x) => x.id === id); return App.searchAll(l.title).some((x) => x.route === '#/lessons/' + id); }", ids['rev'][0])
        if not r: fails.append(f'{name}: search does not find review {ids["rev"][0]}')
    # ---- Handout model and PDF (desktop only for the PDF) ----
    if ids['withX']:
        lid = ids['withX'][0]
        r = await pg.evaluate("""(id) => { const x = App.lessonExtra(id), out = [];
          const on = App.grammarHandoutBuild({ topic: 'lesson', lesson: id }), off = App.grammarHandoutBuild({ topic: 'lesson', lesson: id, mistakes: false, more: false, quiz2: false });
          if (!on.mistakes || on.mistakes.length !== x.mistakes.length || !on.more || on.more.length !== x.more.length || !on.quiz2 || !on.key2) out.push('model on');
          if (off.mistakes || off.more || off.quiz2 || off.key2) out.push('model off');
          if (App.grammarHandoutBuild({ topic: 'lesson', lesson: id, key: false }).key2) out.push('key2 without key');
          const flat = (n) => n == null ? '' : typeof n === 'string' ? n : Array.isArray(n) ? n.map(flat).join(' ') : (flat(n.text) + ' ' + flat(n.stack) + ' ' + flat(n.columns) + ' ' + flat(n.ul) + ' ' + flat(n.ol) + ' ' + (n.table ? n.table.body.map(flat).join(' ') : ''));
          const dOn = flat(App.grammarHandoutDoc({ topic: 'lesson', lesson: id }).content), dOff = flat(App.grammarHandoutDoc({ topic: 'lesson', lesson: id, mistakes: false, more: false, quiz2: false }).content);
          const has = (d, s) => d.replace(/\\s+/g, ' ').includes(s.replace(/\\s+/g, ' '));
          x.mistakes.forEach((m) => { if (!has(dOn, m[0]) || !has(dOn, m[1])) out.push('pdf lacks mistake ' + m[1]); if (has(dOff, m[0])) out.push('pdf off has mistake'); });
          x.more.forEach((m) => { if (!has(dOn, m[0])) out.push('pdf lacks more ' + m[0]); if (has(dOff, m[0])) out.push('pdf off has more'); });
          x.quiz.forEach((q) => { if (!has(dOn, q[0])) out.push('pdf lacks quiz2'); });
          const doc = JSON.stringify(App.grammarHandoutDoc({ topic: 'lesson', lesson: id }).content); if (!doc.includes('lineThrough')) out.push('no lineThrough'); if (doc.includes('\\u2717') || doc.includes('✗')) out.push('pdf uses the ✗ glyph');
          const html = document.createElement('div'); location.hash; return out; }""", lid)
        if r: fails.append(f'{name}: lesson handout extras: {r[:4]}')
        await go('#/lessons/handout?id=' + lid, 300)
        r = await pg.evaluate("""(id) => { const p = document.querySelector('#ghPaper'), x = App.lessonExtra(id), out = [];
          if (!p) return ['no preview']; const h = [...p.querySelectorAll('h2')].map((e) => e.textContent);
          ['Common mistakes', 'More examples', 'More practice'].forEach((t) => { if (!h.includes(t)) out.push('preview lacks ' + t); });
          if (p.querySelectorAll('.lx-bad s').length !== x.mistakes.length) out.push('preview struck lines');
          ['mistakes', 'more', 'quiz2'].forEach((k) => { if (!document.querySelector('[data-o="' + k + '"]')) out.push('no checkbox ' + k); });
          const sel = document.querySelector('#ghLesson'); const groups = sel ? [...sel.querySelectorAll('optgroup')].map((g) => g.label) : [];
          const want = LESSON_UNITS.map((u) => u[0]).filter((u) => LESSONS.some((l) => l.unit === u)); if (groups.join('|') !== want.join('|')) out.push('select groups ' + groups.join('|'));
          return out; }""", lid)
        if r: fails.append(f'{name}: lesson handout page: {r[:4]}')
        await overflow('lesson handout ' + lid)
        if name == 'desk':
            await pg.evaluate("""async () => { if (!window.pdfMake) await new Promise((r) => { const s = document.createElement('script'); s.src = 'js/vendor/pdfmake.min.js';
              s.onload = () => { const t = document.createElement('script'); t.src = 'js/vendor/vfs_fonts.js'; t.onload = r; document.head.appendChild(t); }; document.head.appendChild(s); }); }""")
            for o in [{'topic': 'lesson', 'lesson': lid}, {'topic': 'lesson', 'lesson': lid, 'paper': 'A5', 'size': 'small', 'english': 'hide'}] + ([{'topic': 'lesson', 'lesson': ids['rev'][0]}] if ids['rev'] else []):
                n = await pg.evaluate("async (o) => await new Promise((r) => pdfMake.createPdf(App.grammarHandoutDoc(o)).getBase64((b) => r(b.length)))", o)
                if n < 4000: fails.append(f'{name}: lesson handout PDF too small for {o}')
    # ---- Phone at 125% text: lesson with extras and a review do not overflow ----
    if name == 'phone':
        await pg.evaluate("App.state.settings.textSize = 125; App.applyTextSize(); 0")
        for rt in ([('#/lessons/' + ids['withX'][0])] if ids['withX'] else []) + ([('#/lessons/' + ids['rev'][0])] if ids['rev'] else []) + ['#/lessons']:
            await go(rt); await overflow(rt + ' at 125%')
        await pg.evaluate("App.state.settings.textSize = 100; App.applyTextSize(); 0")
    xerr = await pg.evaluate("window._xerr || []")
    if xerr: fails.append(f'{name}: page errors during extras checks: {xerr[:3]}')
