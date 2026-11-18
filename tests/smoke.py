#!/usr/bin/env python3
"""Browser smoke test for Usap Tayo (Playwright + Chromium).

  python3 -m http.server 8765 --directory /path/to/tagalog   # in another shell / background
  python3 tests/smoke.py --base http://localhost:8765/index.html --out /tmp/usap-test

Checks every route on desktop and phone (no JS errors, no horizontal overflow), exercises
case simulation, flashcards, back/forward, search, theme toggle, de-escalation checklist,
discharge assessment, discharge practice cases, admission MSE practice, and builds a PDF for every handout preset. Prints PASS/FAIL.
Google Fonts load errors are expected in sandboxes without internet and are ignored.
"""
import re
import argparse, asyncio, base64, os, shutil, subprocess
from playwright.async_api import async_playwright

ROUTES = ['#/', '#/pictures', '#/pictures/bodymap', '#/signs', '#/signs?tab=quiz', '#/signs?tab=panels', '#/daily', '#/drills/focus', '#/drills/errors', '#/drills/stress', '#/words?tab=str', '#/words?tab=look', '#/words', '#/words?tab=lad', '#/words?tab=syn', '#/words?r=tulog', '#/drills/roots', '#/drills/families', '#/drills/dictation', '#/drills/translate', '#/lessons/enclitics', '#/lessons/time-words', '#/lessons/intensifiers', '#/lessons/focus-an-i', '#/lessons/nominalising', '#/lessons/recent-past', '#/lessons/handout?id=focus-an-i', '#/drills', '#/drills/markers', '#/drills/build', '#/drills/switch', '#/lessons/demonstratives', '#/lessons/connectors', '#/lessons/ability', '#/lessons/causative', '#/lessons/requests', '#/lessons/hedging', '#/lessons/handout?id=hedging', '#/dict?cat=routine', '#/dict?cat=civic', '#/practice', '#/search?q=bumubulong', '#/dict', '#/dict?q=kinakain', '#/dict/d10', '#/flash', '#/flash/psych', '#/verbs', '#/verbs/kain',
  '#/lessons', '#/lessons/markers', '#/reading', '#/reading/sulat-nanay', '#/speak', '#/speak/meet', '#/speak/case-jomar', '#/psych',
  '#/psych/s/hallucinations', '#/psych/point', '#/psych/point?s=suicide', '#/psych/listen', '#/psych/listen?s=depression', '#/lessons/interpreting', '#/psych/cases', '#/psych/case/jomar', '#/psych/interp', '#/placement', '#/progress', '#/settings', '#/new',
  '#/about', '#/more', '#/psych/handout', '#/psych/handout?s=suicide', '#/psych/deesc', '#/psych/handout?deesc=1', '#/psych/s/deescalation',
  '#/psych/deesc?tab=drill', '#/psych/deesc?tab=after', '#/psych/deesc?tab=practice', '#/psych/case/agitated', '#/speak/case-agitated',
  '#/psych/handout?deesccard=1', '#/psych/discharge', '#/psych/handout?discharge=1', '#/psych/s/discharge', '#/psych/dcases', '#/psych/dcase/ramon', '#/psych/dcase/liza', '#/psych/dcase/carlo', '#/psych/dcase/arnel', '#/psych/dcase/mika', '#/psych/mcases', '#/psych/mcase/ramon', '#/psych/mcase/carlo', '#/psych/mcase/arnel', '#/psych/mcase/mika', '#/affixes', '#/affixes?t=gitlapi', '#/lessons/panlapi', '#/practice', '#/psych?tab=cases', '#/psych?tab=tools', '#/psych?tab=print', '#/affixes/handout', '#/affixes/handout?t=hulapi&set=clinical',
  '#/verbs/handout', '#/verbs/handout?v=inom&set=clinical', '#/lessons/handout?id=markers',
  '#/reading/handout?id=sulat-nanay', '#/listen', '#/listen/voicemail-klinika', '#/listen/endorsement', '#/listen/radyo-panayam', '#/listen/triage-opd', '#/listen/handout', '#/listen/handout?id=tawag-pamilya', '#/reading/opinyon-hiya', '#/reading/huling-biyahe', '#/speak/handout?id=meet', '#/speak/handout?id=case-jomar']

# Extension modules: tests/smoke_ext_*.py, each with ROUTES (list of hashes, checked on both viewports) and
# `async def checks(pg, name, fails)` run once per viewport after the main checks (name = 'desk' or 'phone').
import glob, importlib.util
EXT = []
for _f in sorted(glob.glob(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'smoke_ext_*.py'))):
    _spec = importlib.util.spec_from_file_location(os.path.basename(_f)[:-3], _f); _m = importlib.util.module_from_spec(_spec); _spec.loader.exec_module(_m)
    EXT.append(_m); ROUTES += [r for r in getattr(_m, 'ROUTES', []) if r not in ROUTES]

LOAD_PDFMAKE = """async () => { if (!window.pdfMake) await new Promise((r) => { const s = document.createElement('script'); s.src = 'js/vendor/pdfmake.min.js';
  s.onload = () => { const t = document.createElement('script'); t.src = 'js/vendor/vfs_fonts.js'; t.onload = r; document.head.appendChild(t); }; document.head.appendChild(s); }); }"""

async def main(base, out):
    os.makedirs(out, exist_ok=True)
    fails, errs = [], []
    async with async_playwright() as p:
        b = await p.chromium.launch()
        for name, vp, scheme in [('desk', {'width': 1280, 'height': 860}, 'light'), ('phone', {'width': 390, 'height': 844}, 'dark')]:
            ctx = await b.new_context(viewport=vp, color_scheme=scheme, accept_downloads=True)
            pg = await ctx.new_page()
            pg.on('pageerror', lambda e: errs.append(f'{name}: {e}'))
            pg.on('console', lambda m: errs.append(f'{name} console: {m.text}') if m.type == 'error' and 'Failed to load resource' not in m.text else None)
            await pg.goto(base)
            for r in ROUTES:
                await pg.evaluate(f"location.hash={r!r}"); await pg.wait_for_timeout(150)
                text = await pg.evaluate("document.querySelector('#view').innerText.slice(0,80)")
                if 'went wrong' in text or 'not found' in text.lower(): fails.append(f'{name} {r}: {text}')
                if await pg.evaluate("document.documentElement.scrollWidth > window.innerWidth"): fails.append(f'{name} {r}: horizontal overflow')
            await pg.screenshot(path=f'{out}/{name}_last.png')
            # listening exercise (3.5.0): quiz to the score, transcript, dictation, line chips, Listen first
            await pg.evaluate("location.hash='#/listen/usapan-pamilya'"); await pg.wait_for_timeout(200)
            nq = await pg.evaluate("LISTENING.find(x => x.id === 'usapan-pamilya').q.length")
            if await pg.locator('.lchip').count() != await pg.evaluate("LISTENING.find(x => x.id === 'usapan-pamilya').lines.length"): fails.append(f'{name}: listening line chips')
            if await pg.locator('#ltx').is_visible(): fails.append(f'{name}: listening transcript visible before asked')
            for _ in range(nq):
                await pg.click('#lq .opt >> nth=0'); await pg.wait_for_timeout(40); await pg.click('#lq [data-act=next]'); await pg.wait_for_timeout(40)
            if 'Try again' not in await pg.inner_text('#lq'): fails.append(f'{name}: listening quiz did not finish')
            if await pg.evaluate("App.state.done.listening['usapan-pamilya']") is None: fails.append(f'{name}: listening score not saved')
            await pg.click('#txbtn'); await pg.click('#enbtn'); await pg.wait_for_timeout(60)
            if await pg.locator('#ltx .line').count() != 10 or await pg.locator('#ltx .e').count() != 10: fails.append(f'{name}: listening transcript')
            d0 = await pg.evaluate("(() => { const x = LISTENING.find(x => x.id === 'usapan-pamilya'); return x.lines[x.dictation[0]][1]; })()")
            await pg.fill('.ldict >> nth=0 >> textarea', d0.lower().replace(',', '')); await pg.click('[data-dcheck] >> nth=0'); await pg.wait_for_timeout(60)
            if '100% of words match' not in await pg.inner_text('.ldict >> nth=0'): fails.append(f'{name}: dictation scoring')
            # 3.6.0: the player speaks the respelled 4th item (PRN -> pi-ar-en), the screen keeps PRN
            await pg.evaluate("location.hash='#/listen/endorsement'"); await pg.wait_for_timeout(200)
            await pg.evaluate("window._said = []; App._sa = App._sa || App.speakAsync; App.speakAsync = (t, o) => { window._said.push(t); return Promise.resolve(); }; 0")
            await pg.click('.lchip >> nth=2'); await pg.wait_for_timeout(80)
            said = await pg.evaluate("(() => { const r = window._said.slice(); App.speakAsync = App._sa; return r; })()")
            if not said or 'pi-ar-en' not in said[0] or 'PRN' in said[0]: fails.append(f'{name}: listening spoken version not used: {said}')
            await pg.evaluate("location.hash='#/reading/opinyon-hiya'"); await pg.wait_for_timeout(150)
            await pg.click('#earbtn'); await pg.wait_for_timeout(60)
            if 'hiya' in (await pg.inner_text('#pbody')).lower() or await pg.locator('#trbtn').is_visible(): fails.append(f'{name}: listen first did not hide text')
            await pg.click('#earbtn'); await pg.wait_for_timeout(60)
            if 'Sikolohiyang Pilipino' not in await pg.inner_text('#pbody'): fails.append(f'{name}: listen first did not restore text')
            # language drills (3.7.0): markers and register drills to the score; word-order drill with the model order (100%) and an accepted alternative
            for did, sel in [('markers', 'all'), ('switch', 'c-f')]:
                await pg.evaluate(f"location.hash='#/drills/{did}'"); await pg.wait_for_timeout(150)
                await pg.select_option('#dset', sel); await pg.click('#dgo'); await pg.wait_for_timeout(60)
                for _ in range(10):
                    await pg.click('#dbox .opt >> nth=0'); await pg.wait_for_timeout(30); await pg.click('#dbox [data-act=next]'); await pg.wait_for_timeout(30)
                if 'Try again' not in await pg.inner_text('#dbox'): fails.append(f'{name}: drill {did} did not finish')
                if await pg.evaluate(f"(App.state.done.drills || {{}})['{did}:{sel}']") is None: fails.append(f'{name}: drill {did} score not saved')
            bad = await pg.evaluate("(() => { const out = []; ['f-c','c-f'].forEach((d) => App.drillQs.switch(d, 40).forEach((q) => { if (q.opts.length !== 4 || new Set(q.opts).size !== 4 || q.opts[0] === q.q) out.push(q.q); })); App.drillQs.markers('d', 20).forEach((q) => { if (q.a < 0 || q.opts.length !== 3) out.push(q.q); }); DRILL_BUILD.forEach((it) => { if (!App.drillBuildOk(it, it.t) || (it.alt || []).some((a) => !App.drillBuildOk(it, a)) || App.drillBuildOk(it, it.t.slice().reverse())) out.push(it.en); }); return out; })()")
            if bad: fails.append(f'{name}: drill generators: {bad[:3]}')
            await pg.evaluate("location.hash='#/drills/build'"); await pg.wait_for_timeout(150)
            await pg.click('#dgo'); await pg.wait_for_timeout(60)
            for _ in range(10):
                en = await pg.inner_text('#dbox .card > div >> nth=1')
                order = await pg.evaluate("(en) => DRILL_BUILD.find((x) => x.en === en).t", en)
                if await pg.locator('#dbox [data-act=check]').is_enabled(): fails.append(f'{name}: build check enabled before all tiles placed')
                for w in order:
                    await pg.locator('#dbox [data-bank] .wtile', has_text=re.compile('^' + re.escape(w) + '$', re.I)).first.click(); await pg.wait_for_timeout(15)
                await pg.click('#dbox [data-act=check]'); await pg.wait_for_timeout(30)
                if await pg.locator('#dbox .feedback.ok').count() != 1: fails.append(f'{name}: build model order marked wrong: {en}')
                await pg.click('#dbox [data-act=next]'); await pg.wait_for_timeout(30)
            if await pg.evaluate("(App.state.done.drills || {})['build:all']") != 100: fails.append(f'{name}: build drill score not 100')
            if await pg.evaluate("document.documentElement.scrollWidth > window.innerWidth"): fails.append(f'{name}: drills overflow')
            # 3.8.0 drills: roots and the three word-family sets to the score; generators well formed
            for did, sel in [('roots', 'all'), ('roots', 'clin'), ('families', 'fam'), ('families', 'syn'), ('families', 'lad')]:
                await pg.evaluate(f"location.hash='#/drills/{did}'"); await pg.wait_for_timeout(150)
                await pg.select_option('#dset', sel); await pg.click('#dgo'); await pg.wait_for_timeout(60)
                for _ in range(10):
                    await pg.click('#dbox .opt >> nth=0'); await pg.wait_for_timeout(30); await pg.click('#dbox [data-act=next]'); await pg.wait_for_timeout(30)
                if 'Try again' not in await pg.inner_text('#dbox'): fails.append(f'{name}: drill {did}:{sel} did not finish')
                if await pg.evaluate(f"(App.state.done.drills || {{}})['{did}:{sel}']") is None: fails.append(f'{name}: drill {did}:{sel} score not saved')
            bad = await pg.evaluate("""(() => { const out = [];
              ['all','v','clin'].forEach((s) => { const qs = App.drillQs.roots(s, 60); if (qs.length < 10) out.push('roots pool ' + s + ' ' + qs.length); qs.forEach((q) => { if (q.opts.length !== 4 || new Set(q.opts.map(App.flat)).size !== 4 || App.flat(q.opts[0]) !== App.flat(App.dictById[q.cardId].root)) out.push('root ' + q.q); }); });
              App.drillQs.families('fam', 200).forEach((q) => { if (q.opts.length !== 4 || new Set(q.opts).size !== 4) out.push('fam ' + q.q); });
              App.drillQs.families('syn', 99).forEach((q) => { if (q.opts.length !== 4 || new Set(q.opts).size !== 4) out.push('syn ' + q.q); });
              App.drillQs.families('lad', 60).forEach((q) => { if (q.opts.length !== 2 || q.opts[0] === q.opts[1]) out.push('lad ' + q.sub); });
              DRILL_TRANSLATE.forEach((it) => it.tl.forEach((a) => { if (App.drillTypedScore(it.tl, a.toLowerCase().replace(/[?.,]/g, '')) !== 100) out.push('tr ' + a); }));
              DRILL_TRANSLATE.forEach((it) => { if (App.drillTypedScore(it.tl, 'hindi ko alam kung ano ito') >= 80) out.push('tr loose ' + it.en); });
              DRILL_DICTATION.forEach((it) => { if (App.drillTypedScore([it.tl], it.tl.toLowerCase().replace(/[.,]/g, '')) !== 100) out.push('di ' + it.tl); });
              return out; })()""")
            if bad: fails.append(f'{name}: 3.8.0 drill generators: {bad[:4]}')
            # typed drills: type the model answer for every item (100%), then one wrong answer is marked wrong and a figure is accepted
            for did, sel, src in [('dictation', 'time', "DRILL_DICTATION.filter((x) => x.set === 'time').map((x) => x.tl)"), ('translate', 'w', "DRILL_TRANSLATE.filter((x) => x.set === 'w').map((x) => x.tl[0])")]:
                await pg.evaluate("window.__said = []; App.speak = (t) => { window.__said.push(t); }; 0")
                await pg.evaluate(f"location.hash='#/drills/{did}'"); await pg.wait_for_timeout(150)
                await pg.select_option('#dset', sel); await pg.click('#dgo'); await pg.wait_for_timeout(260)
                models = await pg.evaluate(src)
                for k in range(10):
                    if did == 'dictation':
                        said = await pg.evaluate("window.__said[window.__said.length - 1]")
                        if said not in models: fails.append(f'{name}: dictation did not play a line: {said}'); break
                        ans = said
                    else:
                        en = await pg.inner_text('#dbox .card > div >> nth=1')
                        ans = await pg.evaluate("(en) => DRILL_TRANSLATE.find((x) => x.en === en).tl[0]", en)
                    if await pg.locator('#dbox [data-fb] .feedback').count(): fails.append(f'{name}: {did} feedback before answer')
                    await pg.fill('#dbox [data-in]', ans.lower().replace('?', '').replace('.', '').replace(',', '')); await pg.press('#dbox [data-in]', 'Enter'); await pg.wait_for_timeout(40)
                    if await pg.locator('#dbox .feedback.ok').count() != 1: fails.append(f'{name}: {did} model answer marked wrong: {ans}')
                    await pg.click('#dbox [data-act=next]'); await pg.wait_for_timeout(240 if did == 'dictation' else 40)
                if 'Try again' not in await pg.inner_text('#dbox'): fails.append(f'{name}: drill {did} did not finish')
                if await pg.evaluate(f"(App.state.done.drills || {{}})['{did}:{sel}']") != 100: fails.append(f'{name}: drill {did} score not 100')
                await pg.click('#dbox [data-act=retry]'); await pg.wait_for_timeout(260)
                await pg.fill('#dbox [data-in]', 'hindi ko alam'); await pg.click('#dbox [data-act=check]'); await pg.wait_for_timeout(40)
                if await pg.locator('#dbox .feedback.no').count() != 1: fails.append(f'{name}: {did} wrong answer not marked wrong')
                if await pg.evaluate("document.documentElement.scrollWidth > window.innerWidth"): fails.append(f'{name}: {did} overflow')
            await pg.evaluate("location.hash='#/drills/dictation'"); await pg.wait_for_timeout(150)
            await pg.select_option('#dset', 'num'); await pg.click('#dgo'); await pg.wait_for_timeout(260)
            fig = await pg.evaluate("DRILL_DICTATION.find((x) => x.tl === window.__said[window.__said.length - 1]).n")
            await pg.fill('#dbox [data-in]', fig); await pg.click('#dbox [data-act=check]'); await pg.wait_for_timeout(40)
            if await pg.locator('#dbox .feedback.ok').count() != 1: fails.append(f'{name}: dictation figure {fig} not accepted')
            # word families page: tabs, deep link to one family, dictionary entry links to its family, search finds a family
            await pg.evaluate("location.hash='#/words?r=takot'"); await pg.wait_for_timeout(200)
            wf = await pg.evaluate("[document.querySelectorAll('.wfam').length, !!document.querySelector('#wf-takot'), document.querySelector('.ptabs a.on').textContent]")
            if wf[0] != await pg.evaluate("WORD_FAMILIES.length") or not wf[1] or wf[2] != 'Families': fails.append(f'{name}: word families page {wf}')
            await pg.evaluate("location.hash='#/words?tab=syn'"); await pg.wait_for_timeout(150)
            if await pg.locator('.wsyn').count() != await pg.evaluate("WORD_SYNONYMS.length") or await pg.evaluate("document.documentElement.scrollWidth > window.innerWidth"): fails.append(f'{name}: synonyms tab')
            await pg.evaluate("location.hash='#/words?tab=lad'"); await pg.wait_for_timeout(150)
            if await pg.locator('.wlad').count() != await pg.evaluate("WORD_LADDERS.reduce((a, l) => a + l.steps.length, 0)"): fails.append(f'{name}: ladders tab')
            await pg.evaluate("location.hash='#/dict/' + App.DICT.find((e) => e.tl === 'matulog').id"); await pg.wait_for_timeout(150)
            if 'Word family: tulog' not in await pg.inner_text('#view'): fails.append(f'{name}: dictionary entry has no family link')
            if not await pg.evaluate("App.searchAll('patulugin').some((r) => r.route === '#/words?r=tulog')"): fails.append(f'{name}: search does not find a word family')
            # 3.9.0: focus, stress and the new family sets to the score; generators well formed
            await pg.evaluate("window.__said = []; App.speak = (t) => { window.__said.push(t); }; 0")
            for did, sel in [('focus', 'ao'), ('focus', 'oa'), ('stress', 'ctx'), ('stress', 'ear'), ('stress', 'mean'), ('families', 'ff'), ('families', 'cog')]:
                await pg.evaluate(f"location.hash='#/drills/{did}'"); await pg.wait_for_timeout(150)
                await pg.select_option('#dset', sel); await pg.click('#dgo'); await pg.wait_for_timeout(60)
                if sel == 'ear' and (await pg.locator('#dbox [data-qtext]').is_visible() or not await pg.locator('#dbox [data-act=play]').count()): fails.append(f'{name}: stress by ear shows the sentence')
                for _ in range(10):
                    await pg.click('#dbox .opt >> nth=0'); await pg.wait_for_timeout(30); await pg.click('#dbox [data-act=next]'); await pg.wait_for_timeout(30)
                if 'Try again' not in await pg.inner_text('#dbox'): fails.append(f'{name}: drill {did}:{sel} did not finish')
                if await pg.evaluate(f"(App.state.done.drills || {{}})['{did}:{sel}']") is None: fails.append(f'{name}: drill {did}:{sel} score not saved')
                if await pg.evaluate("document.documentElement.scrollWidth > window.innerWidth"): fails.append(f'{name}: {did}:{sel} overflow')
            bad = await pg.evaluate("""(() => { const out = [];
              ['ao','oa'].forEach((s) => App.drillQs.focus(s, 99).forEach((q) => { if (q.opts.length !== 4 || new Set(q.opts).size !== 4 || q.opts.includes(q.q)) out.push('focus ' + s + ' ' + q.q); }));
              DRILL_FOCUS.forEach((it) => { const ans = App.drillFocusAnswers(it), e = it.end || '.';
                ans.forEach((a) => { if (App.drillTypedScore(ans, a.toLowerCase().replace(/[?.]/g, '')) !== 100) out.push('focus typed ' + a); });
                [it.o + ' ' + it.ar + e, it.a + ' ' + it.or + e, it.ox + ' ' + it.or + e, it.a + ' ' + it.ar + e].forEach((w) => { if (App.drillTypedScore(ans, w) === 100) out.push('focus typed accepts ' + w); }); });
              ['ctx','ear','mean'].forEach((s) => App.drillQs.stress(s, 99).forEach((q) => { if (q.opts.length !== 2 || q.opts[0] === q.opts[1] || !/[A-Z]/.test(q.opts[q.a])) out.push('stress ' + s + ' ' + q.q); }));
              if (App.drillQs.stress('ctx', 99).length !== 2 * WORD_STRESS.length) out.push('stress pool');
              App.drillQs.stress('ctx', 99).concat(App.drillQs.stress('mean', 99), App.drillQs.stress('ear', 99)).forEach((q) => { const sp = q.say || q.sayAfter; if (!sp) out.push('stress: no audio ' + q.q); else if (/[áéíóúàèìòùâêîôû]/i.test(sp)) out.push('stress: accent sent to the voice ' + sp); else if (q.a === 1 ? WORD_STRESS.some((x) => x.b.ex[0] === sp) : !WORD_STRESS.some((x) => x.a.ex[0] === sp)) out.push('stress: respelling on the wrong side ' + sp); });
              if (WORD_STRESS.some((x) => x.w === 'suka') || WORD_STRESS_SAY(WORD_STRESS.find((x) => x.w === 'basa'), true) !== "Ba-sa' ng pawis ang damit niya." || WORD_STRESS_SAY(WORD_STRESS.find((x) => x.w === 'tulog'), true) !== 'Tu-log pa ang pasyente.') out.push('stress respelling rule');
              if (App.stressLabel(WORD_STRESS[0], false) !== 'BU-kas' || App.stressLabel(WORD_STRESS[0], true) !== 'bu-KAS') out.push('stress label');
              App.drillQs.families('ff', 99).forEach((q) => { if (q.opts.length !== 4 || new Set(q.opts).size !== 4) out.push('ff ' + q.q); });
              App.drillQs.families('cog', 200).forEach((q) => { if (q.opts.length !== 4 || new Set(q.opts).size !== 4) out.push('cog ' + q.q); });
              App.drillQs.errors(99).forEach((q) => { if (q.opts.length !== 2 || q.opts[0] === q.opts[1]) out.push('err ' + q.opts[0]); });
              for (let k = 0; k < 20; k++) { const qs = App.drillQs.daily(); if (qs.length !== 10) out.push('daily length ' + qs.length); qs.forEach((q) => { if (q.opts.length < 2 || new Set(q.opts).size !== q.opts.length || !q.sub || q.a >= q.opts.length) out.push('daily q ' + q.q); }); }
              return out; })()""")
            if bad: fails.append(f'{name}: 3.9.0 drill generators: {bad[:4]}')
            # typed focus set: the object-focus sentence scores, the unchanged actor-focus sentence does not
            await pg.evaluate("location.hash='#/drills/focus'"); await pg.wait_for_timeout(150)
            await pg.select_option('#dset', 'type'); await pg.click('#dgo'); await pg.wait_for_timeout(60)
            for k in range(10):
                src = await pg.inner_text('#dbox .card > div >> nth=1')
                ans = await pg.evaluate("(src) => { const it = DRILL_FOCUS.find((x) => x.a + ' ' + x.ar + (x.end || '.') === src); return it && App.drillFocusAnswers(it)[0]; }", src)
                if not ans: fails.append(f'{name}: focus typed prompt not found: {src}'); break
                await pg.fill('#dbox [data-in]', (src if k == 9 else ans).lower().replace('?', '').replace('.', '')); await pg.press('#dbox [data-in]', 'Enter'); await pg.wait_for_timeout(40)
                if await pg.locator('#dbox .feedback.' + ('no' if k == 9 else 'ok')).count() != 1: fails.append(f'{name}: focus typed item {k} graded wrongly: {ans}')
                await pg.click('#dbox [data-act=next]'); await pg.wait_for_timeout(40)
            if await pg.evaluate("(App.state.done.drills || {})['focus:type']") != 90: fails.append(f'{name}: focus typed score not 90')
            # find the mistake: tap the wrong word in nine sentences and a right word in the tenth
            await pg.evaluate("location.hash='#/drills/errors'"); await pg.wait_for_timeout(150)
            await pg.select_option('#dset', 'all'); await pg.click('#dgo'); await pg.wait_for_timeout(60)
            for k in range(10):
                bad_s = ' '.join(await pg.locator('#dbox .wtile').all_inner_texts())
                it = await pg.evaluate("(b) => { const it = DRILL_ERRORS.find((x) => x.bad === b); return it && { i: it.i, n: it.bad.split(' ').length, fix: it.fix }; }", bad_s)
                if not it: fails.append(f'{name}: errors item not found: {bad_s}'); break
                tap = it['i'][-1] if k < 9 else next(j for j in range(it['n']) if j not in it['i'])
                await pg.click(f'#dbox .wtile >> nth={tap}'); await pg.wait_for_timeout(40)
                fb = pg.locator('#dbox .feedback.' + ('ok' if k < 9 else 'no'))
                if await fb.count() != 1 or it['fix'] not in await pg.inner_text('#dbox [data-fb]'): fails.append(f'{name}: errors item {k} graded wrongly: {bad_s}')
                if await pg.locator('#dbox .wtile.bad').count() != len(it['i']): fails.append(f'{name}: errors item does not mark the wrong word: {bad_s}')
                await pg.click('#dbox [data-act=next]'); await pg.wait_for_timeout(40)
            if await pg.evaluate("(App.state.done.drills || {})['errors:all']") != 90: fails.append(f'{name}: errors score not 90')
            if await pg.evaluate("document.documentElement.scrollWidth > window.innerWidth"): fails.append(f'{name}: errors overflow')
            # daily mix: Home tile, ten questions, saved under today's date, Home then says done
            await pg.evaluate("location.hash='#/'"); await pg.wait_for_timeout(150)
            if 'Ten mixed questions' not in await pg.inner_text('#view'): fails.append(f'{name}: Home has no daily mix tile')
            await pg.evaluate("location.hash='#/daily'"); await pg.wait_for_timeout(150)
            await pg.click('#dgo'); await pg.wait_for_timeout(60)
            for _ in range(10):
                if 'of 10' not in (await pg.inner_text('#dbox .eyebrow >> nth=0')).lower(): fails.append(f'{name}: daily mix is not 10 questions'); break
                await pg.click('#dbox .opt >> nth=0'); await pg.wait_for_timeout(30); await pg.click('#dbox [data-act=next]'); await pg.wait_for_timeout(30)
            if 'Try again' not in await pg.inner_text('#dbox') or await pg.evaluate("App.dailyToday()") is None: fails.append(f'{name}: daily mix not saved')
            await pg.evaluate("location.hash='#/'"); await pg.wait_for_timeout(150)
            if 'Done today' not in await pg.inner_text('#view'): fails.append(f'{name}: Home does not show the daily mix as done')
            # new Word families tabs and search
            await pg.evaluate("location.hash='#/words?tab=str'"); await pg.wait_for_timeout(150)
            if await pg.locator('.wfam').count() != await pg.evaluate("WORD_STRESS.length") or await pg.locator('.wfam .say').count() != 2 * await pg.evaluate("WORD_STRESS.length") or await pg.evaluate("WORD_STRESS.filter((x) => /[áéíóúàèìòùâêîôû]/i.test(WORD_STRESS_SAY(x, true) + WORD_STRESS_SAY(x, false))).length") or 'bu-KAS' not in await pg.inner_text('#view') or await pg.evaluate("document.documentElement.scrollWidth > window.innerWidth"): fails.append(f'{name}: stress pairs tab')
            await pg.evaluate("location.hash='#/words?tab=look'"); await pg.wait_for_timeout(150)
            if await pg.locator('.wsyn').count() != await pg.evaluate("WORD_FALSE_FRIENDS.length") or await pg.locator('.wcog > div').count() != await pg.evaluate("WORD_COGNATES.length") or await pg.evaluate("document.documentElement.scrollWidth > window.innerWidth"): fails.append(f'{name}: Spanish and English tab')
            if not await pg.evaluate("App.searchAll('delikado').some((r) => r.route === '#/words?tab=look') && App.searchAll('daily mix').some((r) => r.route === '#/daily')"): fails.append(f'{name}: search does not find a false friend or the daily mix')
            # placement: 25 questions; all right gives C1; C1 needs B2
            pl = await pg.evaluate("[PLACEMENT.length, PLACEMENT.filter((q) => q[0] === 'C1').length]")
            if pl != [25, 5]: fails.append(f'{name}: placement bands {pl}')
            await pg.evaluate("location.hash='#/placement'"); await pg.wait_for_timeout(150)
            for k in range(25):
                await pg.click(f"#pq .opt >> nth={await pg.evaluate(f'PLACEMENT[{k}][3]')}"); await pg.wait_for_timeout(15)
            if await pg.evaluate("App.state.level") != 'C1' or 'C1' not in await pg.inner_text('#pq h2'): fails.append(f'{name}: placement does not reach C1')
            await pg.evaluate("location.hash='#/'"); await pg.wait_for_timeout(80); await pg.evaluate("location.hash='#/placement'"); await pg.wait_for_timeout(150)
            for k in range(25):
                lv, a = await pg.evaluate(f'[PLACEMENT[{k}][0], PLACEMENT[{k}][3]]')
                await pg.click(f"#pq .opt >> nth={3 if lv == 'B2' else a}"); await pg.wait_for_timeout(15)
            if await pg.evaluate("App.state.level") != 'B1': fails.append(f'{name}: placement gives C1 without B2')
            if await pg.evaluate("(App.DICT.find((e) => e.tl === 'pamasahe') || {}).id") != 'd1849': fails.append(f'{name}: first 3.8.0 word is not d1849')
            # dictionary ids: an old word keeps its id, new words are numbered after the legacy set
            ids = await pg.evaluate("[App.DICT_LEGACY, App.DICT.filter((e) => +e.id.slice(1) >= App.DICT_LEGACY).length, (App.DICT.find((e) => e.tl === 'magsipilyo') || {}).id]")
            if ids[0] != 1658 or ids[1] < 190 or ids[2] != 'd1658': fails.append(f'{name}: dictionary ids {ids}')
            # case simulation to the end
            await pg.evaluate("location.hash='#/psych/case/jomar'"); await pg.wait_for_timeout(150)
            for _ in range(6): await pg.click('.opt >> nth=0'); await pg.wait_for_timeout(60)
            if 'Case complete' not in await pg.inner_text('#view'): fails.append(f'{name}: case did not complete')
            # panlapi drills: each mode runs 10 questions to the score screen
            for mode in ['type', 'root', 'build', 'focus']:
                await pg.evaluate("location.hash='#/affixes'"); await pg.wait_for_timeout(150)
                await pg.select_option('#amode', mode); await pg.click('#ago'); await pg.wait_for_timeout(100)
                for _ in range(10):
                    await pg.click('#adrill .opt >> nth=0'); await pg.wait_for_timeout(40); await pg.click('#adrill [data-act=next]'); await pg.wait_for_timeout(40)
                if '/ 10' not in await pg.inner_text('#adrill'): fails.append(f'{name}: affix drill {mode} did not finish')
            # psychiatry hub tabs and the Practice tab
            await pg.evaluate("location.hash='#/psych?tab=tools'"); await pg.wait_for_timeout(200)
            if 'Withdrawal and agitation' not in await pg.inner_text('#view') or 'Opening and rapport' in await pg.inner_text('#view'): fails.append(f'{name}: hub tabs')
            await pg.evaluate("location.hash='#/more'"); await pg.wait_for_timeout(200)
            if 'Dictionary' not in await pg.inner_text('#view'): fails.append(f'{name}: dictionary under More')
            # pin a page, see it on Home and More, unpin
            await pg.evaluate("location.hash='#/psych/dcase/ramon'"); await pg.wait_for_timeout(200)
            if 'Discharge practice' not in await pg.inner_text('.breadcrumb'): fails.append(f'{name}: central breadcrumb')
            await pg.click('h1 .pin'); await pg.wait_for_timeout(100)
            await pg.evaluate("location.hash='#/'"); await pg.wait_for_timeout(200)
            if 'Pinned' not in await pg.inner_text('#view'): fails.append(f'{name}: pinned on home')
            await pg.evaluate("location.hash='#/more'"); await pg.wait_for_timeout(200)
            if 'ready to go home' not in await pg.inner_text('#view'): fails.append(f'{name}: pinned on more')
            await pg.evaluate("location.hash='#/psych/dcase/ramon'"); await pg.wait_for_timeout(200); await pg.click('h1 .pin'); await pg.wait_for_timeout(100)
            if await pg.evaluate("(App.state.pins||[]).length"): fails.append(f'{name}: unpin')
            # flashcard grade
            await pg.evaluate("location.hash='#/flash/psych'"); await pg.wait_for_timeout(150)
            await pg.click('#fc'); await pg.wait_for_timeout(80); await pg.click('[data-g="2"]')
            # back / forward
            await pg.evaluate("location.hash='#/'"); await pg.wait_for_timeout(100); await pg.click('#navBack'); await pg.wait_for_timeout(200)
            if await pg.evaluate('location.hash') != '#/flash/psych': fails.append(f'{name}: back button')
            # search
            await pg.fill('#gsearch', 'nalulungkot'); await pg.wait_for_timeout(300)
            if 'lungkot' not in await pg.inner_text('#gsuggest'): fails.append(f'{name}: search suggestions')
            # theme toggle
            before = await pg.evaluate("document.documentElement.getAttribute('data-theme')")
            await pg.click('#themeBtn'); await pg.wait_for_timeout(100)
            if before == await pg.evaluate("document.documentElement.getAttribute('data-theme')"): fails.append(f'{name}: theme toggle')
            # de-escalation note
            await pg.evaluate("location.hash='#/psych/deesc'"); await pg.wait_for_timeout(200)
            await pg.click('[data-b="4"]'); await pg.click('[data-s="0"]'); await pg.click('[data-out="successful"]')
            if 'Agitation' not in await pg.input_value('#dzNote'): fails.append(f'{name}: deesc note')
            # discharge summary flags
            await pg.evaluate("location.hash='#/psych/discharge'"); await pg.wait_for_timeout(200)
            await pg.click('[data-go="5"].ds-chip'); await pg.click('[data-pick="2"]'); await pg.click('.ds-chip.sum'); await pg.wait_for_timeout(100)
            summ = await pg.inner_text('#view')
            if 'Passive death wish documented' not in summ or 'Active suicidal' in summ: fails.append(f'{name}: discharge flags')
            # discharge practice: model picks match; a missed passive death wish is caught
            await pg.evaluate("location.hash='#/psych/dcase/ramon'"); await pg.wait_for_timeout(200)
            await pg.click('[data-ask="0"]')
            for k in [0, 1, 2, 4]: await pg.click(f'[data-pick="{k}"]')
            await pg.click('#dcCheck'); await pg.wait_for_timeout(100)
            if 'Matches the model' not in await pg.inner_text('#view'): fails.append(f'{name}: dcase model match')
            await pg.evaluate("location.hash='#/psych/dcase/liza'"); await pg.wait_for_timeout(200)
            await pg.click('[data-go="5"].ds-chip'); await pg.click('[data-ask="0"]'); await pg.click('[data-pick="1"]'); await pg.click('#dcCheck'); await pg.wait_for_timeout(100)
            t = (await pg.inner_text('#view')).lower()
            if 'passive death wish' not in t or "you didn't ask" not in t: fails.append(f'{name}: dcase suicide feedback')
            await pg.click('.ds-chip.sum'); await pg.wait_for_timeout(100)
            if 'Safety: Suicidal ideas' not in await pg.inner_text('#view'): fails.append(f'{name}: dcase safety flag')
            if await pg.evaluate("document.documentElement.scrollWidth > window.innerWidth"): fails.append(f'{name}: dcase compare overflow')
            await pg.screenshot(path=f'{out}/{name}_dcase_compare.png', full_page=True)
            # not-ready case: missed command hallucinations are explained; deferring matches the model
            await pg.evaluate("location.hash='#/psych/dcase/mika'"); await pg.wait_for_timeout(200)
            await pg.click('[data-go="3"].ds-chip'); await pg.click('[data-ask="0"]'); await pg.click('[data-pick="0"]'); await pg.click('#dcCheck'); await pg.wait_for_timeout(100)
            t = (await pg.inner_text('#view')).lower()
            if 'jump' not in t or "you didn't ask" not in t: fails.append(f'{name}: dcase command feedback')
            await pg.click('.ds-chip.sum'); await pg.wait_for_timeout(100); await pg.click('[data-dec="0"]'); await pg.wait_for_timeout(100)
            if 'Same call as the model' not in await pg.inner_text('#view'): fails.append(f'{name}: dcase decision')
            # admission MSE: chief complaint, model match + evidence, missed homicidal threat, admission vs discharge
            await pg.evaluate("location.hash='#/psych/mcase/ramon'"); await pg.wait_for_timeout(200)
            await pg.click('[data-ccask]'); await pg.click('[data-cc="0"]'); await pg.wait_for_timeout(80)
            if 'own words' not in await pg.inner_text('#view'): fails.append(f'{name}: mcase chief complaint')
            await pg.click('[data-go="3"].ds-chip'); await pg.click('[data-ask="0"]')
            for k in [2, 4]: await pg.click(f'[data-pick="{k}"]')
            await pg.click('#dcCheck'); await pg.wait_for_timeout(80); await pg.click('[data-ev="0"]'); await pg.wait_for_timeout(80)
            t = await pg.inner_text('#view')
            if 'Matches the model' not in t or 'drops' not in t: fails.append(f'{name}: mcase model match/evidence')
            await pg.click('[data-go="9"].ds-chip'); await pg.click('[data-ask="0"]'); await pg.click('[data-pick="0"]'); await pg.click('[data-pick="4"]'); await pg.click('#dcCheck'); await pg.wait_for_timeout(80)
            if "you didn't ask" not in (await pg.inner_text('#view')).lower(): fails.append(f'{name}: mcase safety not-asked')
            await pg.click('.ds-chip.sum'); await pg.wait_for_timeout(100)
            t = await pg.inner_text('#view')
            if 'Safety: Suicidal and homicidal ideation' not in t or 'Admission vs discharge' not in t: fails.append(f'{name}: mcase compare')
            if await pg.evaluate("document.documentElement.scrollWidth > window.innerWidth"): fails.append(f'{name}: mcase compare overflow')
            await pg.screenshot(path=f'{out}/{name}_mcase_compare.png', full_page=True)
            # new admission cases: ask everything, pick the model answers, right evidence -> 100%
            for cid in ['carlo', 'arnel', 'mika']:
                await pg.evaluate(f"location.hash='#/psych/mcase/{cid}'"); await pg.wait_for_timeout(200)
                plan = await pg.evaluate("""(id) => { const C = PSYCH_MSE_CASES.find((x) => x.id === id);
                  const F = PSYCH_ADMIT_MSE.domains.filter((d) => C.domains[d.id]);
                  return { cc: C.cc.opts.findIndex((o) => o[1]), doms: F.map((d) => { const cd = C.domains[d.id];
                    return { asks: d.ask.map((_, i) => i), picks: cd.need.map((n) => d.picks.indexOf(Array.isArray(n) ? n[0] : n)),
                      ev: cd.ev ? cd.ev.opts.findIndex((o) => o[1]) : -1 }; }) }; }""", cid)
                await pg.click('[data-ccask]'); await pg.click(f'[data-cc="{plan["cc"]}"]'); await pg.wait_for_timeout(60)
                for i, d in enumerate(plan['doms']):
                    await pg.click(f'[data-go="{i + 1}"].ds-chip'); await pg.wait_for_timeout(40)
                    for q in d['asks']: await pg.click(f'[data-ask="{q}"]')
                    for k in d['picks']: await pg.click(f'[data-pick="{k}"]')
                    await pg.click('#dcCheck'); await pg.wait_for_timeout(40)
                    if d['ev'] >= 0: await pg.click(f'[data-ev="{d["ev"]}"]'); await pg.wait_for_timeout(40)
                await pg.click('.ds-chip.sum'); await pg.wait_for_timeout(100)
                t = await pg.inner_text('#view')
                if '100%' not in t or 'Admission vs discharge' not in t: fails.append(f'{name}: mcase {cid} model run')
                if await pg.evaluate("document.documentElement.scrollWidth > window.innerWidth"): fails.append(f'{name}: mcase {cid} overflow')
            # stage directions are not spoken; brackets inside a sentence stay
            sp = await pg.evaluate("[App.spoken('(tumango) ...Hindi po.'), App.spoken('Ako po... (tumigil) ...Ano po?'), App.spoken('nganga (bunga, mama), alak'), App.spoken('(tumango lang)')]")
            if sp != ['...Hindi po.', 'Ako po... ...Ano po?', 'nganga (bunga, mama), alak', '']: fails.append(f'{name}: App.spoken {sp}')
            # 3.6.2: app-wide respelling for the voice (js/pronounce.js)
            pr = await pg.evaluate("[App.spoken('Salamat po, Doc.'), App.spoken('Ako po si Dr. Navarro.'), App.spoken('Ah, kaya pala. I-inform ko si Doc.'), App.spoken('Tumawag sa NCMH sa 1553.'), App.spoken('PARA SA: Lahat'), App.spoken('alas-dos y medya'), App.spoken('Ayon sa DSM, ADHD ito.'), App.spoken('Ward 3. PAKSA: Bago'), App.spoken('ng DT: matindi')]")
            if pr != ['Salamat po, Dok.', 'Ako po si Doktor Navarro.', 'Ah, kaya pala, i-inform ko si Dok.', 'Tumawag sa en-si-em-eyts sa wan, payb, payb, tri.', 'para sa: Lahat', 'alas-dos i medya', 'Ayon sa di-es-em, ey-di-eyts-di ito.', 'Ward 3. paksa: Bago', 'ng di-ti: matindi']: fails.append(f'{name}: pronounce {pr}')
            # real assessment flags persisting command hallucinations
            await pg.evaluate("location.hash='#/psych/discharge'"); await pg.wait_for_timeout(200)
            await pg.click('[data-go="3"].ds-chip'); await pg.click('[data-pick="8"]'); await pg.click('.ds-chip.sum'); await pg.wait_for_timeout(100)
            if 'Command hallucinations persist' not in await pg.inner_text('#view'): fails.append(f'{name}: discharge command flag')
            # 3.10.0: picture words, body map, signs and buttons, picture lessons. Ids come from the data, not from the seed.
            await pg.evaluate("window._ps = []; App.speak = (t) => { window._ps.push(t); }; 0")
            async def go(h):
                await pg.evaluate(f"location.hash={h!r}"); await pg.wait_for_timeout(180)
                if await pg.evaluate("document.documentElement.scrollWidth > window.innerWidth"): fails.append(f'{name} {h}: horizontal overflow')
            async def tap(sel):
                await pg.locator(sel).first.dispatch_event('click'); await pg.wait_for_timeout(50)
            sid = await pg.evaluate("(App.pictures.sets().find((s) => s.kind === 'diagram' && App.pictures.svg(s) && (s.say || []).length) || {}).id")
            if not sid: fails.append(f'{name}: no diagram picture set with art and sentences')
            else:
                await go(f'#/pictures/{sid}')
                pid = await pg.evaluate("document.querySelector('#picTab .pic-pin').dataset.p")
                await tap(f'#picTab .pic-pin[data-p="{pid}"]')
                w = await pg.evaluate(f"App.pictures.get({sid!r}).parts.find((p) => p.id === {pid!r}).w")
                if w not in await pg.inner_text('#picTab .pic-panel'): fails.append(f'{name}: picture learn tap did not show the word {w}')
                if not await pg.evaluate("window._ps.length") or (await pg.evaluate("window._ps[window._ps.length - 1]")) != w: fails.append(f'{name}: picture learn tap did not speak the word')
                async def play(mode, answer):
                    for _ in range(20):
                        if not await pg.locator('.pic-round').count(): break
                        pid = await answer()
                        if not pid: fails.append(f'{name}: picture {mode}: could not find the answer'); return
                        if await pg.locator('.pic-in').count():
                            await pg.fill('.pic-in', pid); await pg.press('.pic-in', 'Enter')
                        elif await pg.locator('.pic-q .opt').count(): await tap(f'.pic-q .opt[data-p="{pid}"]')
                        else: await tap(f'.pic-q .pic-pin[data-p="{pid}"], .pic-q .pic-card[data-p="{pid}"]')
                        await pg.wait_for_timeout(40)
                        if not await pg.locator('.pic-q .feedback.ok').count(): fails.append(f'{name}: picture {mode}: right answer marked wrong'); return
                        await tap('.pic-q [data-act=next]')
                    sc = await pg.evaluate(f"App.state.done.pictures[{(mode.split('-')[0] + ':' + sid)!r}]")
                    if sc != 100: fails.append(f'{name}: picture {mode} score not saved as 100: {sc}')
                said_part = "((s) => { const t = window._ps[window._ps.length - 1]; const p = App.pictures.get(s).parts.find((x) => x.w === t); return p ? p.id : null; })"
                await go(f'#/pictures/{sid}?tab=identify'); await play('identify', lambda: pg.evaluate(said_part + f"({sid!r})"))
                hl = "(() => { const e = document.querySelector('.pic-q .pic-pin.hl, .pic-q .pic-card.hl'); return e ? e.dataset.p : null; })()"
                await pg.evaluate("App.state.settings.picLabel = 'choose'; 0")
                await go(f'#/pictures/{sid}?tab=label'); await play('label-choose', lambda: pg.evaluate(hl))
                await tap('[data-plab="type"]'); await pg.wait_for_timeout(100)
                async def typed():
                    p = await pg.evaluate(hl)
                    return p and await pg.evaluate(f"(() => {{ const w = App.pictures.get({sid!r}).parts.find((x) => x.id === {p!r}).w; return ' ' + w.toUpperCase() + '!'; }})()")
                await play('label-type', typed)
                bad = await pg.evaluate("""(() => { const out = []; App.pictures.sets().forEach((s) => s.parts.forEach((p) => {
                  if (!App.pictures.typedOk(p.w, p)) out.push('w ' + p.w); (p.alt || []).forEach((a) => { if (!App.pictures.typedOk(a, p)) out.push('alt ' + a); });
                  const f = App.flat(p.w); if (f.length >= 7 && !App.pictures.typedOk(f.slice(0, -1) + (f.slice(-1) === 'a' ? 'o' : 'a'), p)) out.push('near ' + p.w);
                  if (App.pictures.typedOk('zzzzqq', p)) out.push('loose ' + p.w); })); return out; })()""")
                if bad: fails.append(f'{name}: picture typed answers: {bad[:4]}')
                said_say = "((s) => { const t = window._ps[window._ps.length - 1]; const x = App.pictures.get(s).say.find((y) => y.tl === t); return x ? x.p : null; })"
                await go(f'#/pictures/{sid}?tab=listen')
                if await pg.locator('.pic-q .feedback').count(): fails.append(f'{name}: listen shows feedback before answering')
                await play('listen', lambda: pg.evaluate(said_say + f"({sid!r})"))
                await go(f'#/pictures/{sid}?tab=print')
                if not await pg.locator('#ppPaper .pp-page .pp-svg').count() or not await pg.locator('#ppPaper .pp-lines li').count(): fails.append(f'{name}: picture print sheet not rendered')
                await tap('[data-pp-set="fill"][data-v="filled"]')
                if w not in await pg.evaluate("(document.querySelector('#ppPaper') || {}).innerText || ''"): fails.append(f'{name}: filled print sheet lacks the words')
            # every set and tab: no overflow, no error
            for s2 in await pg.evaluate("App.pictures.sets().map((s) => s.id)"):
                for t in ['learn', 'identify', 'label', 'listen', 'print']: await go(f'#/pictures/{s2}?tab={t}')
            await go('#/pictures/bodymap')
            bm = await pg.evaluate("(() => { const g = document.querySelector('[data-pp-part]'); const f = g.closest('[data-pp-set-id]').dataset.ppSetId; return App.pictures.get(f).parts.find((p) => p.id === g.dataset.ppPart).w; })()")
            await tap('[data-pp-part]')
            if bm not in await pg.inner_text('#ppBmShow'): fails.append(f'{name}: body map tap did not show {bm}')
            # signs: Learn tap, Quiz to a score, a panel to a score
            await go('#/signs?tab=learn&g=all')
            await tap('.sg-tap')
            en = await pg.evaluate("SIGNS.signs.find((x) => x.id === document.querySelector('.sg-tap').dataset.sid).en")
            if await pg.locator('.sg-detail >> nth=0').is_hidden() or en not in await pg.inner_text('.sg-tile >> nth=0'): fails.append(f'{name}: sign tap did not show the meaning')
            await go('#/signs?tab=quiz')
            await pg.evaluate("App.state.settings.signsG = 'all'; App.state.settings.signsM = 'tl-en'; App.state.settings.signsLv = 'All'; 0"); await go('#/signs?tab=learn'); await go('#/signs?tab=quiz')
            await tap('#sggo')
            for _ in range(25):
                if not await pg.locator('#sgq .opt').count(): break
                await tap('#sgq .opt'); await tap('#sgq [data-act=next]')
            if not isinstance(await pg.evaluate("App.state.done.signs['quiz:all:tl-en']"), (int, float)): fails.append(f'{name}: sign quiz score not saved')
            pnl = await pg.evaluate("SIGN_PANELS[0] && SIGN_PANELS[0].id")
            if pnl:
                await go(f'#/signs?tab=panels&p={pnl}')
                await tap('[data-pm="tasks"]')
                for _ in range(10):
                    if not await pg.locator('.sg-task').count(): break
                    q = await pg.inner_text('.sg-task .sg-q')
                    a = await pg.evaluate("(q) => SIGN_PANELS[0].tasks.find((t) => t.q === q).a", q)
                    await tap(f'.sg-ctl[data-cid="{a}"]')
                    if not await pg.locator('[data-fb] .feedback.ok').count(): fails.append(f'{name}: panel right control marked wrong'); break
                    await tap('[data-act=next]')
                if await pg.evaluate(f"App.state.done.signs['panel:{pnl}']") != 100: fails.append(f'{name}: panel score not saved as 100')
            # a lesson with a picture shows it; search finds the page; Progress lists the new rows
            lid = await pg.evaluate("(LESSONS.find((l) => /pic-embed/.test(l.body)) || {}).id")
            if lid:
                await go(f'#/lessons/{lid}')
                if not await pg.locator('.lesson-body .pic-embed .pic-svg, .lesson-body .pic-embed .pic-card').count(): fails.append(f'{name}: lesson {lid} picture not mounted')
                if not await pg.evaluate(f"JSON.stringify(App.htmlToPdf(LESSONS.find((l) => l.id === {lid!r}).body)).includes('Picture: ')"): fails.append(f'{name}: lesson handout lacks the picture line')
            if not await pg.evaluate("App.searchAll('picture words').some((r) => r.route === '#/pictures')"): fails.append(f'{name}: search does not find Picture words')
            await go('#/progress')
            if 'Picture sets tried' not in await pg.inner_text('#view'): fails.append(f'{name}: progress lacks picture row')
            await go('#/practice')
            if await pg.locator('#view a[href="#/pictures"], #view a[href="#/pictures/bodymap"], #view a[href="#/signs"]').count() < 3: fails.append(f'{name}: practice lacks the Pictures tiles')
            if name == 'desk':
                await pg.evaluate("location.hash='#/psych/handout'"); await pg.wait_for_timeout(200)
                await pg.evaluate(LOAD_PDFMAKE)
                presets = await pg.evaluate("Object.keys(App.handoutPresets)")
                for k in presets:
                    for eng in ['show', 'hide', 'key']:
                        b64 = await pg.evaluate("""async ([k, eng]) => { const o = Object.assign({}, App.handoutPresets[k].o, { english: eng, preparedFor: 'Test' });
                          return await new Promise((r) => pdfMake.createPdf(App.handoutDoc(o)).getBase64(r)); }""", [k, eng])
                        fn = f'{out}/{k}_{eng}.pdf'; open(fn, 'wb').write(base64.b64decode(b64))
                        if os.path.getsize(fn) < 3000: fails.append(f'pdf {k}/{eng} too small')
                # Grammar handout: A4 with English, A5 Tagalog-only clinical hulapi; worksheet pairs must be spread apart.
                for name, o in [('grammar_a4', {}), ('grammar_a5', {'paper': 'A5', 'size': 'small', 'english': 'hide', 'type': 'hulapi', 'set': 'clinical'}), ('verbs_a4', {'topic': 'verbs'}), ('lesson_a4', {'topic': 'lesson', 'lesson': 'focus'}), ('reading_a4', {'topic': 'reading', 'reading': 'sulat-nanay', 'english': 'end'}), ('reading_a5', {'topic': 'reading', 'reading': 'palengke', 'paper': 'A5', 'english': 'hide'}), ('dialogue_a4', {'topic': 'dialogue', 'dialogue': 'case-jomar'}), ('dialogue_a5', {'topic': 'dialogue', 'dialogue': 'meet', 'paper': 'A5', 'register': 'c', 'english': 'end'}), ('listening_a4', {'topic': 'listening', 'listening': 'endorsement'}), ('listening_a5', {'topic': 'listening', 'listening': 'pulong-barangay', 'paper': 'A5', 'english': 'hide'})]:
                    b64 = await pg.evaluate("async (o) => await new Promise((r) => pdfMake.createPdf(App.grammarHandoutDoc(o)).getBase64(r))", o)
                    fn = f'{out}/{name}_show.pdf'; open(fn, 'wb').write(base64.b64decode(b64))
                    if os.path.getsize(fn) < 3000: fails.append(f'pdf {name} too small')
                ws = await pg.evaluate("App.grammarHandoutBuild(Object.assign({}, {topic:'panlapi',type:'all',set:'all',cheat:true,rules:true,words:true,worksheet:true,key:true,english:'show',paper:'A4',size:'normal'})).worksheet.focus.map((f) => f.a.map((x) => x.toLowerCase()).sort().join('|'))")
                if any(ws[i] == ws[i + 1] for i in range(len(ws) - 1)): fails.append('grammar worksheet: paired focus items are adjacent')
                if any(len(set(a.split('|'))) < 3 for a in ws): fails.append('grammar worksheet: an item has fewer than 3 options')
                vb = await pg.evaluate("App.grammarHandoutBuild({topic:'verbs'}).worksheet.B.map((i) => i.a)")
                if len(vb) < 8 or any(len(a) != 3 or len(set(x.lower() for x in a)) < 3 for a in vb): fails.append('verbs worksheet B: an item lacks 3 distinct options')
                # Reading and dialogue handouts (3.4.0): translation page, role-play blanks = learner lines, Taglish wording.
                rd = await pg.evaluate("(() => { const m = App.grammarHandoutBuild({topic:'reading', reading:'sulat-nanay', english:'end'}); return [m.passage.length, (m.translation || []).length, m.key.length, m.gloss.length]; })()")
                if rd[0] < 1 or rd[1] != rd[0] or rd[2] < 1 or rd[3] < 1: fails.append(f'reading handout model wrong: {rd}')
                dl = await pg.evaluate("(() => { const f = App.grammarHandoutBuild({topic:'dialogue', dialogue:'meet'}), c = App.grammarHandoutBuild({topic:'dialogue', dialogue:'meet', register:'c'}), d = DIALOGUES.find((x) => x.id === 'meet'); return [f.key.length, d.lines.filter((l) => l[0] === d.you).length, f.script[4].tl === d.lines[4][1], c.script[4].tl === d.lines[4][3], App.grammarHandoutBuild({topic:'dialogue', dialogue:'case-jomar'}).script.length]; })()")
                if dl[0] != dl[1] or not dl[2] or not dl[3] or dl[4] < 4: fails.append(f'dialogue handout model wrong: {dl}')
                ls = await pg.evaluate("(() => { const m = App.grammarHandoutBuild({topic:'listening', listening:'triage-opd'}), x = LISTENING.find((i) => i.id === 'triage-opd'); return [m.transcript.length === x.lines.length, m.dictation.length === x.dictation.length, m.key.length === x.q.length, m.dkey.length, /Usap Tayo: Listening/.test(m.play), App.grammarHandoutBuild({topic:'listening', listening:'triage-opd', key:false}).dkey === null]; })()")
                if not all(ls): fails.append(f'listening handout model wrong: {ls}')
                mx = await pg.evaluate("(() => { const out = []; LISTENING.concat(READING).forEach((x) => { const t = x.lines ? 'listening' : 'reading'; const m = App.grammarHandoutBuild({topic: t, [t]: x.id}); m.key.forEach((q, i) => out.push([q[1][q[2]] === x.q[i][1][x.q[i][2]], q[2]])); }); return [out.every((r) => r[0]), new Set(out.map((r) => r[1])).size]; })()")
                if not mx[0] or mx[1] < 3: fails.append(f'printed option shuffle wrong: {mx}')
                presets = presets + ['grammar_a4', 'grammar_a5', 'verbs_a4', 'lesson_a4', 'reading_a4', 'reading_a5', 'dialogue_a4', 'dialogue_a5', 'listening_a4', 'listening_a5']
                if shutil.which('pdfinfo'):
                    for k in presets:
                        pages = subprocess.run(['pdfinfo', f'{out}/{k}_show.pdf'], capture_output=True, text=True).stdout.split('Pages:')[1].split()[0]
                        print(f'  pdf {k}: {pages} pages')
            # Extension checks (3.11.0 on): every tests/smoke_ext_*.py has `async def checks(pg, name, fails)`; its ROUTES were added above.
            for mod in EXT:
                await mod.checks(pg, name, fails)
            await ctx.close()
        await b.close()
    fails += errs
    for f in fails: print('FAIL', f)
    print('SMOKE OK' if not fails else f'{len(fails)} FAILURES', '·', len(ROUTES), 'routes × 2 viewports')
    return 0 if not fails else 1

if __name__ == '__main__':
    ap = argparse.ArgumentParser()
    ap.add_argument('--base', default='http://localhost:8765/index.html')
    ap.add_argument('--out', default='/tmp/usap-test')
    a = ap.parse_args()
    raise SystemExit(asyncio.run(main(a.base, a.out)))
