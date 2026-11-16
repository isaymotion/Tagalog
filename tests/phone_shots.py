# Phone screenshots (390px, 125% text, light + dark) of any routes, for a visual check or to send her.
# Usage: python3 tests/phone_shots.py <base url> <out dir> '#/route' ['#/route' ...]
import asyncio, sys
from playwright.async_api import async_playwright
async def main():
    base, out, routes = sys.argv[1], sys.argv[2], sys.argv[3:]
    async with async_playwright() as p:
        b = await p.chromium.launch()
        for theme in ['light', 'dark']:
            ctx = await b.new_context(viewport={'width': 390, 'height': 844}, color_scheme=theme)
            pg = await ctx.new_page()
            await pg.goto(base)
            await pg.evaluate("(t)=>{const s=JSON.parse(localStorage.getItem('usaptayo.v1')||'{}');s.settings=Object.assign(s.settings||{},{theme:t,textSize:125});localStorage.setItem('usaptayo.v1',JSON.stringify(s));}", theme)
            await pg.reload(); await pg.wait_for_timeout(300)
            for i, r in enumerate(routes):
                await pg.evaluate(f"location.hash={r!r}"); await pg.wait_for_timeout(300)
                await pg.screenshot(path=f'{out}/{i:02d}_{theme}.png', full_page=True)
                if await pg.evaluate("document.documentElement.scrollWidth > window.innerWidth"): print('OVERFLOW', theme, r)
        await b.close()
asyncio.run(main())
