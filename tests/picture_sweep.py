import json
from playwright.sync_api import sync_playwright
B='http://localhost:8766/index.html'
errs=[]; ov=[]; n=0
with sync_playwright() as p:
    b=p.chromium.launch()
    for name,vp in (('phone',{'width':390,'height':844}),('desk',{'width':1280,'height':900})):
        pg=b.new_page(viewport=vp)
        pg.on('pageerror', lambda e: errs.append(('pageerror',pg.url,str(e)[:200])))
        pg.on('console', lambda m: errs.append(('console',pg.url,m.text[:200])) if m.type=='error' and '403' not in m.text and 'fonts' not in m.text else None)
        pg.goto(B+'#/'); pg.wait_for_timeout(800)
        d=pg.evaluate("({sets: PICTURE_SETS.map(s=>s.id), groups: SIGNS.groups.map(g=>g.id), panels: SIGN_PANELS.map(p=>p.id), lessons: LESSONS.filter(l=>l.unit==='Picture lessons').map(l=>l.id)})")
        routes=['#/pictures','#/pictures/bodymap','#/signs','#/signs?tab=quiz','#/signs?tab=panels','#/practice','#/lessons','#/progress']
        for s in d['sets']:
            for t in ('learn','identify','label','listen','print'): routes.append('#/pictures/%s?tab=%s'%(s,t))
        routes+=['#/signs?tab=learn&g=%s'%g for g in d['groups']]+['#/signs?tab=panels&p=%s'%x for x in d['panels']]+['#/lessons/%s'%l for l in d['lessons']]+['#/lessons/handout?id=%s'%l for l in d['lessons'][:2]]
        for r in routes:
            pg.goto(B+r); pg.wait_for_timeout(260); n+=1
            o=pg.evaluate("document.documentElement.scrollWidth > window.innerWidth + 1")
            if o: ov.append((name,r))
            h=pg.evaluate("(document.querySelector('#view h1')||{}).textContent||''")
            if not h or 'not found' in h.lower(): errs.append(('noh1',r,h))
        if name=='phone':
            for r,f in (('#/pictures','list'),('#/pictures/living-room','living'),('#/pictures/hospital-floor','floor'),('#/pictures/vehicles','vehicles'),('#/pictures/body-front?tab=label','label'),('#/pictures/bodymap','bodymap'),('#/signs?tab=learn&g=hospital','signs-hosp'),('#/signs?tab=learn&g=medicine','signs-med'),('#/signs?tab=panels&p=aircon-remote','panel-aircon'),('#/signs?tab=panels&p=bed-call','panel-bed'),('#/lessons/pic-masakit','lesson-masakit'),('#/pictures/family-tree','family')):
                pg.goto(B+r); pg.wait_for_timeout(500); pg.screenshot(path='/tmp/tl-out/sweep/%s.png'%f, full_page=True)
        pg.close()
    b.close()
print('routes',n,'overflow',ov[:10],len(ov)); print('errors',errs[:10],len(errs))
