"""3.11.0: the ten lessons of js/data/lessons-2.js open, play their quiz to the score, and spoken-short-forms gives the voice the line without apostrophes."""
IDS = ['conditionals', 'reported-speech', 'social-verbs', 'accidental', 'plurals', 'location', 'relative-clauses', 'spoken-short-forms', 'spanish-numbers', 'exclamations']
ROUTES = ['#/lessons/' + i for i in IDS] + ['#/lessons/handout?id=relative-clauses']

async def checks(pg, name, fails):
    await pg.evaluate("location.hash='#/lessons'"); await pg.wait_for_timeout(150)
    txt = await pg.inner_text('#view')
    if 'It just happened' not in txt: fails.append(f'{name}: new lessons not on the Lessons page')
    await pg.evaluate("location.hash='#/lessons/spoken-short-forms'"); await pg.wait_for_timeout(200)
    r = await pg.evaluate("""(() => { const said = []; const old = App.speak; App.speak = (t) => { said.push(t); };
      const ex = [...document.querySelectorAll('.lesson-body .ex')].find((e) => e.dataset.voice); const b = ex && ex.querySelector('button'); if (b) b.click();
      App.speak = old; return [ex ? ex.dataset.voice : null, said[0] || null, document.querySelectorAll('.lesson-body .ex.has-say').length]; })()""")
    if not r[0] or r[1] != r[0] or "'" in (r[1] or "'"): fails.append(f'{name}: spoken-short-forms example not spoken from data-voice: {r}')
    if r[2] < 12: fails.append(f'{name}: spoken-short-forms has {r[2]} speaker buttons')
    n = await pg.evaluate("LESSONS.find((l) => l.id === 'spoken-short-forms').quiz.length")
    for _ in range(n):
        await pg.click('#view .opt >> nth=0'); await pg.wait_for_timeout(40); await pg.click('#view [data-act=next]'); await pg.wait_for_timeout(40)
    if await pg.evaluate("App.state.done.lessons['spoken-short-forms']") is None: fails.append(f'{name}: lesson quiz score not saved')
    cov = await pg.evaluate("""(() => { const out = []; if (!App.htmlToPdf) return out; """ + str(IDS) + """.forEach((id) => { const l = LESSONS.find((x) => x.id === id);
      const d = document.createElement('div'); d.innerHTML = l.body; const want = d.textContent.replace(/\\s+/g, '').length;
      const flat = (n) => n == null ? '' : typeof n === 'string' ? n : Array.isArray(n) ? n.map(flat).join('') : (flat(n.text) + flat(n.stack) + flat(n.columns) + flat(n.ul) + flat(n.ol) + (n.table ? n.table.body.map(flat).join('') : ''));
      const got = flat(App.htmlToPdf(l.body)).replace(/\\s+/g, '').length; if (got < want * 0.97) out.push(id + ' ' + got + '/' + want); }); return out; })()""")
    if cov: fails.append(f'{name}: lesson handout loses text: {cov}')
