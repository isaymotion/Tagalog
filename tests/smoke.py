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

ROUTES = ['#/', '#/drills', '#/drills/markers', '#/drills/build', '#/drills/switch', '#/lessons/demonstratives', '#/lessons/connectors', '#/lessons/ability', '#/lessons/causative', '#/lessons/requests', '#/lessons/hedging', '#/lessons/handout?id=hedging', '#/dict?cat=routine', '#/dict?cat=civic', '#/practice', '#/search?q=bumubulong', '#/dict', '#/dict?q=kinakain', '#/dict/d10', '#/flash', '#/flash/psych', '#/verbs', '#/verbs/kain',
  '#/lessons', '#/lessons/markers', '#/reading', '#/reading/sulat-nanay', '#/speak', '#/speak/meet', '#/speak/case-jomar', '#/psych',
  '#/psych/s/hallucinations', '#/psych/point', '#/psych/point?s=suicide', '#/psych/listen', '#/psych/listen?s=depression', '#/lessons/interpreting', '#/psych/cases', '#/psych/case/jomar', '#/psych/interp', '#/placement', '#/progress', '#/settings', '#/new',
  '#/about', '#/more', '#/psych/handout', '#/psych/handout?s=suicide', '#/psych/deesc', '#/psych/handout?deesc=1', '#/psych/s/deescalation',
  '#/psych/deesc?tab=drill', '#/psych/deesc?tab=after', '#/psych/deesc?tab=practice', '#/psych/case/agitated', '#/speak/case-agitated',
  '#/psych/handout?deesccard=1', '#/psych/discharge', '#/psych/handout?discharge=1', '#/psych/s/discharge', '#/psych/dcases', '#/psych/dcase/ramon', '#/psych/dcase/liza', '#/psych/dcase/carlo', '#/psych/dcase/arnel', '#/psych/dcase/mika', '#/psych/mcases', '#/psych/mcase/ramon', '#/psych/mcase/carlo', '#/psych/mcase/arnel', '#/psych/mcase/mika', '#/affixes', '#/affixes?t=gitlapi', '#/lessons/panlapi', '#/practice', '#/psych?tab=cases', '#/psych?tab=tools', '#/psych?tab=print', '#/affixes/handout', '#/affixes/handout?t=hulapi&set=clinical',
  '#/verbs/handout', '#/verbs/handout?v=inom&set=clinical', '#/lessons/handout?id=markers',
  '#/reading/handout?id=sulat-nanay', '#/listen', '#/listen/voicemail-klinika', '#/listen/endorsement', '#/listen/radyo-panayam', '#/listen/triage-opd', '#/listen/handout', '#/listen/handout?id=tawag-pamilya', '#/reading/opinyon-hiya', '#/reading/huling-biyahe', '#/speak/handout?id=meet', '#/speak/handout?id=case-jomar']

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
