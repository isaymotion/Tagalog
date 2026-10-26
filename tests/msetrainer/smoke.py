import asyncio, sys, json, os
from playwright.async_api import async_playwright
BASE=sys.argv[1]; OUT=sys.argv[2]; os.makedirs(OUT,exist_ok=True)
async def main():
    fails, errs = [], []
    async with async_playwright() as p:
        b = await p.chromium.launch()
        for name, vp, scheme in [('desk',{'width':1280,'height':860},'light'),('phone',{'width':390,'height':844},'dark')]:
            ctx = await b.new_context(viewport=vp, color_scheme=scheme, accept_downloads=True)
            pg = await ctx.new_page()
            pg.on('pageerror', lambda e: errs.append(f'{name}: {e}'))
            pg.on('console', lambda m: errs.append(f'{name} console: {m.text}') if m.type=='error' and 'Failed to load resource' not in m.text and 'fonts.g' not in m.text and 'ERR_' not in m.text else None)
            await pg.goto(BASE); await pg.wait_for_timeout(400)
            ov = lambda: pg.evaluate("document.documentElement.scrollWidth > window.innerWidth")
            if 'Made by Isabella Navarro, MD. Latest version October 2026.' not in await pg.inner_text('footer'): fails.append(f'{name}: attribution')
            # Tagalog only, culture domain via deep link
            await pg.evaluate("location.hash='#/practice?lang=tl&dom=fc'"); await pg.wait_for_timeout(300)
            if not await pg.query_selector('.case .langtag'): fails.append(f'{name}: deep link tagalog')
            if await pg.evaluate("[...document.querySelectorAll('.case .en')].some(e=>!e.hidden)"): fails.append(f'{name}: english visible before answer')
            await pg.click('#showEn')
            if await pg.evaluate("[...document.querySelectorAll('.case .en')].some(e=>e.hidden)"): fails.append(f'{name}: show english')
            await pg.click('.opt >> nth=0'); await pg.wait_for_timeout(150)
            t = await pg.inner_text('#fb')
            if 'Ask it in Tagalog' not in t or 'Culture or pathology?' not in t or 'Sa Tagalog' not in t: fails.append(f'{name}: feedback ask/domain')
            if await ov(): fails.append(f'{name}: overflow practice')
            await pg.screenshot(path=f'{OUT}/{name}_tl_case.png', full_page=True)
            # walk the whole Tagalog session
            for _ in range(30):
                n = await pg.query_selector('#next')
                if not n: break
                await n.click(); await pg.wait_for_timeout(60)
                o = await pg.query_selector('.opt:not([disabled])')
                if not o: break
                await o.click(); await pg.wait_for_timeout(60)
            # language filter: English only has no Tagalog tags
            await pg.select_option('#lang', 'en'); await pg.click('[data-all]'); await pg.wait_for_timeout(150)
            if await pg.query_selector('.case .langtag'): fails.append(f'{name}: english filter')
            # views, back/forward
            for v in ['glossary','progress','new','about']:
                await pg.evaluate(f"location.hash='#/{v}'"); await pg.wait_for_timeout(150)
                if await pg.evaluate(f"document.querySelector('#v-{v}').hidden"): fails.append(f'{name}: view {v}')
                if await ov(): fails.append(f'{name}: overflow {v}')
            if 'Tagalog cases' not in await pg.inner_text('#news'): fails.append(f'{name}: whats new')
            await pg.click('#navBack'); await pg.wait_for_timeout(200)
            if await pg.evaluate("location.hash") != '#/new': fails.append(f'{name}: back button')
            await pg.click('#navFwd'); await pg.wait_for_timeout(200)
            if await pg.evaluate("location.hash") != '#/about': fails.append(f'{name}: forward button')
            # tab clicks
            await pg.click('.tabs [data-view="glossary"]'); await pg.wait_for_timeout(150)
            await pg.fill('#q','hiya'); await pg.wait_for_timeout(100)
            if 'Hiya' not in await pg.inner_text('#gloss'): fails.append(f'{name}: glossary search')
            # theme cycle
            th=[]
            for _ in range(3):
                await pg.click('#themeBtn'); th.append(await pg.evaluate("document.documentElement.getAttribute('data-theme')"))
            if th != ['light','dark',None]: fails.append(f'{name}: theme cycle {th}')
            # menu open/close + export/import round trip
            await pg.click('#menuBtn')
            if await pg.evaluate("document.querySelector('#menu').hidden"): fails.append(f'{name}: menu open')
            async with pg.expect_download() as dl: await pg.click('#exportBtn')
            d = await dl.value; fn = f'{OUT}/{name}_backup.json'; await d.save_as(fn)
            data = json.load(open(fn)); seen = len(data['stats']['items'])
            if seen < 5: fails.append(f'{name}: backup has {seen} items')
            if not await pg.evaluate("document.querySelector('#menu').hidden"): fails.append(f'{name}: menu close after export')
            await pg.evaluate("localStorage.clear()"); await pg.reload(); await pg.wait_for_timeout(300)
            pg.once('dialog', lambda dlg: asyncio.ensure_future(dlg.accept()))
            await pg.set_input_files('#importFile', fn); await pg.wait_for_timeout(300)
            restored = await pg.evaluate("Object.keys(JSON.parse(localStorage.getItem('mse-trainer-v1')).items).length")
            if restored != seen: fails.append(f'{name}: import restored {restored} of {seen}')
            await pg.wait_for_timeout(200)
            await ctx.close()
        await b.close()
    fails += errs
    for f in fails: print('FAIL', f)
    print('SMOKE OK' if not fails else f'{len(fails)} FAILURES')
asyncio.run(main())
