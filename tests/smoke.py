#!/usr/bin/env python3
"""Browser smoke test for Usap Tayo (Playwright + Chromium).

  python3 -m http.server 8765 --directory /path/to/tagalog   # in another shell / background
  python3 tests/smoke.py --base http://localhost:8765/index.html --out /tmp/usap-test

Checks every route on desktop and phone (no JS errors, no horizontal overflow), exercises
case simulation, flashcards, back/forward, search, theme toggle, de-escalation checklist,
discharge assessment, and builds a PDF for every handout preset. Prints PASS/FAIL.
Google Fonts load errors are expected in sandboxes without internet and are ignored.
"""
import argparse, asyncio, base64, os, shutil, subprocess
from playwright.async_api import async_playwright

ROUTES = ['#/', '#/search?q=bumubulong', '#/dict', '#/dict?q=kinakain', '#/dict/d10', '#/flash', '#/flash/psych', '#/verbs', '#/verbs/kain',
  '#/lessons', '#/lessons/markers', '#/reading', '#/reading/sulat-nanay', '#/speak', '#/speak/meet', '#/speak/case-jomar', '#/psych',
  '#/psych/s/hallucinations', '#/psych/cases', '#/psych/case/jomar', '#/psych/interp', '#/placement', '#/progress', '#/settings', '#/new',
  '#/about', '#/more', '#/psych/handout', '#/psych/handout?s=suicide', '#/psych/deesc', '#/psych/handout?deesc=1', '#/psych/s/deescalation',
  '#/psych/deesc?tab=drill', '#/psych/deesc?tab=after', '#/psych/deesc?tab=practice', '#/psych/case/agitated', '#/speak/case-agitated',
  '#/psych/handout?deesccard=1', '#/psych/discharge', '#/psych/handout?discharge=1', '#/psych/s/discharge']

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
            # case simulation to the end
            await pg.evaluate("location.hash='#/psych/case/jomar'"); await pg.wait_for_timeout(150)
            for _ in range(6): await pg.click('.opt >> nth=0'); await pg.wait_for_timeout(60)
            if 'Case complete' not in await pg.inner_text('#view'): fails.append(f'{name}: case did not complete')
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
