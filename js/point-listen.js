/* Point board (#/psych/point) and Listening drill (#/psych/listen).
   Both draw on PSYCH_ANSWERS (js/data/psych-answers.js): likely patient replies per interview section, plus
   general replies (yes/no, how often, since when, how much, how I feel, I need…).
   Point board: the patient taps the reply that fits; the phone speaks it and the interviewer reads the English.
   Nothing the patient taps is saved: the log lives on the page and is gone when you leave.
   Listening drill: hear a patient reply at natural speed, choose its meaning; the text appears only after you answer. */
(function () {
  const { esc, shuffle, pick, icons } = App;
  const V = App.views;
  const S = () => App.state;
  const L = window.LANG;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';
  const A = () => window.PSYCH_ANSWERS || { common: [], sections: {} };
  const sections = () => (window.PSYCH_SECTIONS || []).filter((s) => (A().sections[s.id] || []).length || s.phrases.some((p) => p.answers));

  /* Replies for one section: the data file's list, then any answers written on the phrases themselves. */
  const repliesFor = (sec) => {
    const seen = new Set(), out = [];
    const add = (it) => { if (it && it[0] && !seen.has(it[0])) { seen.add(it[0]); out.push(it); } };
    (A().sections[sec.id] || []).forEach(add);
    sec.phrases.forEach((p) => (p.answers || []).forEach(add));
    return out;
  };
  const NUM = ['sero', 'isa', 'dalawa', 'tatlo', 'apat', 'lima', 'anim', 'pito', 'walo', 'siyam', 'sampu'];
  // 4th element = what to speak when the tile text itself is not Tagalog (digits).
  const SCALE = { id: 'scale', title: '0 to 10 (wala → pinakamatindi)', items: NUM.map((w, n) => [String(n), String(n) + ' of 10', '', w]) };

  /* ---------- Point board ---------- */
  V.psychPoint = (el, p, q) => {
    const secs = sections();
    let secId = (q && q.s) || '', patient = false, showEn = false;
    const log = [];
    const sec = () => secs.find((s) => s.id === secId);
    const draw = () => {
      const s = sec();
      const groups = (s ? [{ id: 's-' + s.id, title: s.title, items: repliesFor(s) }] : []).concat(A().common, [SCALE]);
      el.classList.toggle('pointboard-patient', patient);
      const tiles = groups.map((g) => '<section class="pgroup"><h2>' + esc(g.title) + '</h2><div class="ptiles' + (g.id === 'scale' ? ' scale' : '') + '">' +
        g.items.map((it, i) => '<button type="button" class="ptile tl" data-g="' + esc(g.id) + '" data-i="' + i + '"><span class="ptile__tl">' + esc(it[0]) + '</span>' + (showEn && it[1] !== it[0] ? '<span class="ptile__en">' + esc(it[1]) + '</span>' : '') + '</button>').join('') + '</div></section>').join('');
      const last = log[0];
      const strip = '<div class="pstrip card" id="pstrip" aria-live="polite">' + (last
        ? '<div class="eyebrow">The patient pointed to</div><div class="tl pstrip__tl">' + esc(last[0]) + '</div><div class="pstrip__en">' + esc(last[1]) + '</div>' + (last[2] ? '<div class="small muted">' + esc(last[2]) + '</div>' : '')
        : '<div class="eyebrow">Interviewer</div><div class="muted">Ask your question aloud or show it on the section page, then hand over the phone. Each tap is spoken and translated here. Nothing is saved.</div>') +
        (log.length > 1 ? '<details class="small" style="margin-top:6px"><summary>Earlier taps (' + (log.length - 1) + ')</summary><ol style="margin:4px 0 0;padding-left:20px">' + log.slice(1).map((l) => '<li><span class="tl">' + esc(l[0]) + '</span> — ' + esc(l[1]) + '</li>').join('') + '</ol></details>' : '') + '</div>';
      el.innerHTML = (patient ? '' : crumb([['Psychiatry', '#/psych'], [L.point.title + ' · point board']]) +
        '<h1>' + esc(L.point.title) + ' <span class="muted" style="font-weight:500">· ' + esc(L.point.subtitle) + '</span></h1>' +
        '<p class="muted">When the patient’s answer is too fast or you cannot follow, turn the phone around: they point, the phone speaks the line, and you read the English. Replies are practice wording (draft for review), not an interpreter.</p>' +
        '<div class="row" style="flex-wrap:wrap;gap:8px;margin-bottom:10px"><label class="small">Section <select class="input" id="psec" style="max-width:260px"><option value="">General replies only</option>' + secs.map((x) => '<option value="' + x.id + '"' + (x.id === secId ? ' selected' : '') + '>' + esc(x.title) + '</option>').join('') + '</select></label>' +
        '<button class="btn sm" id="pen" aria-pressed="' + showEn + '">' + (showEn ? 'Hide English on tiles' : 'Show English on tiles') + '</button>' +
        (s ? '<a class="btn sm" href="#/psych/s/' + s.id + '">Questions for this section</a>' : '') +
        '<button class="btn sm primary" id="ppatient">' + icons.eye + ' Patient view</button></div>') +
        (patient ? '<div class="pbar"><span class="tl">' + esc(L.point.pass) + '</span><button class="btn sm" id="pexit">Interviewer view</button></div>' : '') +
        strip + tiles +
        (log.length ? '<div class="row" style="margin-top:12px"><button class="btn sm ghost" id="pclear">Clear taps</button></div>' : '');
      const bySel = (e) => { secId = e.target.value; draw(); };
      const on = (id, fn) => { const b = el.querySelector(id); if (b) b.onclick = fn; };
      const sel = el.querySelector('#psec'); if (sel) sel.onchange = bySel;
      on('#pen', () => { showEn = !showEn; draw(); });
      on('#ppatient', () => { patient = true; draw(); window.scrollTo(0, 0); });
      on('#pexit', () => { patient = false; draw(); });
      on('#pclear', () => { log.length = 0; draw(); });
      el.querySelectorAll('.ptile').forEach((b) => (b.onclick = () => {
        const g = groups.find((x) => x.id === b.dataset.g), it = g.items[+b.dataset.i];
        el.querySelectorAll('.ptile.on').forEach((x) => x.classList.remove('on')); b.classList.add('on');
        log.unshift(it); if (log.length > 30) log.pop();
        App.speak(it[3] || it[0]);
        const strip = el.querySelector('#pstrip');
        strip.outerHTML = '<div class="pstrip card" id="pstrip" aria-live="polite"><div class="eyebrow">The patient pointed to</div><div class="tl pstrip__tl">' + esc(it[0]) + '</div><div class="pstrip__en">' + esc(it[1]) + '</div>' + (it[2] ? '<div class="small muted">' + esc(it[2]) + '</div>' : '') +
          (log.length > 1 ? '<details class="small" style="margin-top:6px"><summary>Earlier taps (' + (log.length - 1) + ')</summary><ol style="margin:4px 0 0;padding-left:20px">' + log.slice(1).map((l) => '<li><span class="tl">' + esc(l[0]) + '</span> — ' + esc(l[1]) + '</li>').join('') + '</ol></details>' : '') + '</div>';
        if (!el.querySelector('#pclear')) { const d = document.createElement('div'); d.className = 'row'; d.style.marginTop = '12px'; d.innerHTML = '<button class="btn sm ghost" id="pclear">Clear taps</button>'; el.appendChild(d); on('#pclear', () => { log.length = 0; draw(); }); }
      }));
    };
    draw();
  };

  /* ---------- Listening drill ---------- */
  /* Pool: [tagalog, english, note, sourceLabel]. */
  const pool = (secId) => {
    const out = [], seen = new Set();
    const add = (tl, en, note, src) => { if (tl && en && !seen.has(tl) && tl !== en) { seen.add(tl); out.push([tl, en, note || '', src || '']); } };
    const secs = (window.PSYCH_SECTIONS || []).filter((s) => !secId || s.id === secId);
    secs.forEach((s) => repliesFor(s).forEach((it) => add(it[0], it[1], it[2], s.title)));
    if (!secId) {
      A().common.forEach((g) => g.items.forEach((it) => add(it[0], it[1], it[2], g.title)));
      (window.PSYCH_INTERP || []).forEach((it) => add(it[0], it[1], it[2], 'Interpretation drill'));
      (window.PSYCH_CASES || []).forEach((c) => c.steps.forEach((st) => { if (st.line && st.who !== 'You') add(st.line[0], st.line[1], '', c.title + ' (' + st.who + ')'); }));
    }
    return out;
  };

  V.psychListen = (el, p, q) => {
    const st = { sec: (q && q.s) || '', speed: 'natural', n: 10 };
    const secs = sections();
    const draw = () => {
      const items = pool(st.sec);
      const rate = st.speed === 'slow' ? 0.7 : st.speed === 'fast' ? 1.05 : 0.9;
      const box = el.querySelector('#lbody');
      if (items.length < 4) { box.innerHTML = '<div class="notice">Not enough replies in this section yet. Choose "Everything".</div>'; return; }
      const qs = pick(items, Math.min(st.n, items.length)).map((it) => {
        // Distractors from the same section first, so the choice is about meaning, not topic.
        const same = items.filter((x) => x !== it && x[3] === it[3]), rest = items.filter((x) => x !== it && x[3] !== it[3]);
        const d = pick(same, 3); if (d.length < 3) d.push(...pick(rest.filter((x) => !d.includes(x)), 3 - d.length));
        return { q: it[0], say: it[0], hideQ: true, rate, opts: [it[1]].concat(d.map((x) => x[1])), a: 0, exp: (it[2] ? it[2] + ' ' : '') + (it[3] ? '(' + it[3] + ')' : '') };
      });
      box.innerHTML = '<div id="lq"></div>';
      App.runQuiz(box.querySelector('#lq'), qs, { onDone: (r, n) => { App.activity(10); S().done.listen = Math.max(S().done.listen || 0, Math.round((100 * r) / n)); App.save(); }, after: '<a class="btn" href="#/psych/point' + (st.sec ? '?s=' + st.sec : '') + '">Open the point board</a>' });
    };
    el.innerHTML = crumb([['Psychiatry', '#/psych'], ['Listening drill']]) + '<h1>Listening drill</h1>' +
      '<p class="muted">The hard half of the interview is understanding the answer. Hear a patient or family reply at natural speed, choose what it means, then see the ' + esc(L.name) + '. The lines are the likely replies from the point board, the interpretation drill and the case simulations.</p>' +
      '<div class="row" style="flex-wrap:wrap;gap:8px;margin-bottom:12px"><label class="small">Section <select class="input" id="lsec" style="max-width:260px"><option value="">Everything</option>' + secs.map((x) => '<option value="' + x.id + '"' + (x.id === st.sec ? ' selected' : '') + '>' + esc(x.title) + '</option>').join('') + '</select></label>' +
      '<div class="seg" role="group" aria-label="Speed">' + [['slow', 'Slower'], ['natural', 'Natural'], ['fast', 'Fast']].map(([k, t]) => '<button data-sp="' + k + '" class="' + (st.speed === k ? 'on' : '') + '">' + t + '</button>').join('') + '</div>' +
      '<button class="btn sm" id="lnew">New set</button></div>' +
      '<p class="muted small">Tip: answer before reading. If you miss one, play it again after the text appears and listen for the word that carried the meaning.</p><div id="lbody"></div>';
    el.querySelector('#lsec').onchange = (e) => { st.sec = e.target.value; draw(); };
    el.querySelector('#lnew').onclick = draw;
    el.querySelectorAll('[data-sp]').forEach((b) => (b.onclick = () => { st.speed = b.dataset.sp; el.querySelectorAll('[data-sp]').forEach((x) => x.classList.toggle('on', x === b)); draw(); }));
    draw();
  };
})();
