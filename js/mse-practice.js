/* Admission MSE practice: interview a simulated patient on admission, domain by domain in the order of the
   hospital's Readmission Form MSE section; document with standard wording; check against a model answer;
   name the line that supports a key finding; then compare the full MSE, and the admission MSE with the
   same patient's discharge MSE when a discharge case exists.
   Data: PSYCH_ADMIT_MSE (domains) + PSYCH_MSE_CASES. Grader shared with discharge practice (App.dischargeGrade). */
(function () {
  const { esc, icons } = App;
  const V = (App.views = App.views || {});
  const S = () => App.state;
  const ref = (r) => { const [sid, i] = r.split(':'); const s = PSYCH_SECTIONS.find((x) => x.id === sid); return s && s.phrases[+i]; };
  const main = (p) => (S().settings.register === 'c' ? p.c || p.f : p.f);
  const alt = (p) => (S().settings.register === 'c' ? p.f : p.c);
  const DEFAULT_ANS = ['(walang sagot)', '(no answer)'];
  const store = () => (S().done.mcases = S().done.mcases || {});
  const pillCls = (p) => (p >= 80 ? 'good' : p >= 50 ? 'warn' : 'bad');
  const speak = (t) => { try { Promise.resolve(App.speakAsync(t)).catch(() => {}); } catch (e) { /* no voice */ } };

  V.mseCases = (el) => {
    const done = store();
    el.innerHTML = '<div class="breadcrumb"><a href="#/psych">Psychiatry</a> / MSE practice</div>' +
      '<h1>Admission MSE practice</h1><p class="muted">Interview a simulated patient on admission, in the order of the MSE section of the hospital\'s Readmission Form (' + esc(PSYCH_ADMIT_MSE.form) + '). Ask in Tagalog, document each domain, name the line that supports a key finding, then compare your MSE with a model. Each patient also has a discharge case, so you can see what changed.</p>' +
      '<div class="grid">' + PSYCH_MSE_CASES.map((c) => '<a class="tile" href="#/psych/mcase/' + c.id + '"><span class="eyebrow">' + esc(c.dx || '') + ' · ' + esc(c.level) + '</span><h3>' + esc(c.title) + '</h3><p>' + esc(c.setting) + '</p>' +
        (done[c.id] != null ? '<div class="meta"><span class="pill ' + pillCls(done[c.id]) + '">Best ' + done[c.id] + '%</span></div>' : '') + '</a>').join('') + '</div>' +
      '<p class="small muted" style="margin-top:14px">Patients are fictional. More admission cases will follow the hospital\'s initial admission form.</p>';
  };

  V.mseCase = (el, params) => {
    const C = PSYCH_MSE_CASES.find((x) => x.id === params.id);
    if (!C) { el.innerHTML = '<p>Case not found.</p>'; return; }
    const F = PSYCH_ADMIT_MSE.domains.filter((d) => C.domains[d.id]);
    const N = F.length; // steps: 0 = chief complaint, 1..N = domains, N+1 = compare
    let rec, cur, cc, written;
    const reset = () => { rec = {}; F.forEach((d) => (rec[d.id] = { asked: new Set(), picks: new Set(), text: '', quote: '', res: null, ev: null, showEn: false })); cur = 0; cc = { asked: false, pick: null }; written = ''; };
    reset();
    const dis = (window.PSYCH_DISCHARGE_CASES || []).find((x) => x.id === C.id);

    const yourValue = (d) => {
      const r = rec[d.id];
      let v = [...r.picks].join(', ');
      if (d.id === 'mood' && r.quote.trim()) v = '"' + r.quote.trim() + '"' + (v ? ' ' + v : '');
      if (r.text.trim()) v += (v ? '; ' : '') + r.text.trim();
      return v;
    };
    const maxPts = () => 1 + F.reduce((a, d) => a + 2 + (C.domains[d.id].ev ? 1 : 0), 0);
    const pts = () => (cc.pick !== null && C.cc.opts[cc.pick][1] ? 1 : 0) + F.reduce((a, d) => { const r = rec[d.id]; return a + (r.res ? r.res.score : 0) + (r.ev !== null && C.domains[d.id].ev.opts[r.ev][1] ? 1 : 0); }, 0);
    const allDone = () => cc.pick !== null && F.every((d) => rec[d.id].res && (!C.domains[d.id].ev || rec[d.id].ev !== null));

    const nav = () => {
      const groups = [{ name: 'History', items: [['cc', 0]] }];
      F.forEach((d, i) => { let g = groups.find((x) => x.name === d.group); if (!g) groups.push((g = { name: d.group, items: [] })); g.items.push([d, i + 1]); });
      const chip = (d, i) => {
        if (d === 'cc') { const ok = cc.pick !== null && C.cc.opts[cc.pick][1]; return '<button role="tab" data-go="0" class="ds-chip' + (cur === 0 ? ' on' : '') + (cc.pick === null ? '' : ok ? ' done' : ' miss') + '">' + (ok ? icons.check : '') + 'Chief complaint</button>'; }
        const r = rec[d.id].res, m = r ? (r.score === 2 ? ' done' : r.score === 1 ? ' part' : ' miss') : '';
        return '<button role="tab" data-go="' + i + '" class="ds-chip' + (i === cur ? ' on' : '') + m + (d.risk ? ' risk' : '') + '" aria-selected="' + (i === cur) + '">' + (r && r.score === 2 ? icons.check : '') + esc(d.label) + '</button>';
      };
      return '<div class="ds-nav" role="tablist" aria-label="MSE domains">' + groups.map((g) => '<div class="ds-grp"><span class="eyebrow">' + esc(g.name) + '</span><div class="ds-chips">' + g.items.map(([d, i]) => chip(d, i)).join('') + '</div></div>').join('') +
        '<div class="ds-grp"><span class="eyebrow">Finish</span><div class="ds-chips"><button data-go="' + (N + 1) + '" class="ds-chip sum' + (cur === N + 1 ? ' on' : '') + '">Compare</button></div></div></div>';
    };
    const chartCard = () => '<details class="card dc-chart"' + (cur === 0 ? ' open' : '') + '><summary><b>Referral notes</b> <span class="muted small">what you know before the interview</span></summary><ul>' + C.chart.map((l) => '<li>' + esc(l) + '</li>').join('') + '</ul></details>';
    const qLine = (p, a, asked, attr, showEn) => '<div class="dz-line dc-q' + (asked ? ' asked' : '') + '"><div><div class="tl dz-tl">' + esc(main(p)) + '</div>' + (alt(p) && alt(p) !== main(p) ? '<div class="tl small muted">' + esc(alt(p)) + '</div>' : '') + '<div class="small muted">' + esc(p.en) + '</div>' +
      (asked ? '<div class="dc-ans"><span class="eyebrow">' + esc(a[2] || 'Patient') + '</span><div class="tl">' + esc(a[0]) + '</div><div class="small muted dc-en"' + (showEn ? '' : ' hidden') + '>' + esc(a[1]) + '</div></div>' : '') +
      '</div><div class="dc-acts">' + App.sayBtn(main(p)) + (asked ? App.sayBtn(a[0]) : '<button class="btn sm" ' + attr + '>Ask</button>') + '</div></div>';

    const ccView = () => {
      const p = ref(C.cc.ask), a = C.cc.ans, done = cc.pick !== null;
      return '<div class="card stack ds-field"><div><span class="eyebrow">History · before the MSE</span><h2 style="margin:2px 0 0">Chief complaint</h2></div>' +
        '<div class="ds-assess"><b>What to document.</b> The reason for consultation in the informant\'s own words. Ask the family member who brought the patient.</div>' +
        '<div><div class="eyebrow" style="margin-bottom:6px">Ask</div>' + (p ? qLine(p, a, cc.asked, 'data-ccask="1"', true) : '') + '</div>' +
        (cc.asked ? '<div><div class="eyebrow" style="margin-bottom:6px">Which entry belongs in the Chief Complaints field?</div><div class="opts">' +
          C.cc.opts.map((o, k) => '<button class="opt' + (done ? (o[1] ? ' right' : k === cc.pick ? ' wrong' : '') : '') + '" data-cc="' + k + '"' + (done ? ' disabled' : '') + '>' + esc(o[0]) + '</button>').join('') + '</div>' +
          (done ? '<div class="feedback ' + (C.cc.opts[cc.pick][1] ? 'ok' : 'no') + '" style="margin-top:8px">' + esc(C.cc.opts[cc.pick][2]) + (C.cc.opts[cc.pick][1] ? '' : ' <b>Better:</b> ' + esc(C.cc.opts.find((o) => o[1])[2])) + '</div>' : '') + '</div>' : '') +
        '<div class="spread"><span></span><button class="btn' + (done ? ' primary' : '') + '" data-go="1">Next: ' + esc(F[0].label) + ' →</button></div></div>';
    };

    const result = (d) => {
      const cd = C.domains[d.id], r = rec[d.id], g = r.res;
      const notAsked = (cd.key || []).filter((qi) => !r.asked.has(qi));
      return '<div class="feedback ' + (g.score === 2 ? 'ok' : g.score === 1 ? 'mid' : 'no') + ' stack" style="gap:6px"><div><b>' + (g.score === 2 ? 'Matches the model.' : g.score === 1 ? 'Partly matches.' : 'Doesn\'t match the model.') + '</b></div>' +
        (g.miss.length ? '<div><span class="eyebrow">Missed</span> ' + g.miss.map(esc).join(' · ') + '</div>' : '') +
        g.wrong.map((w) => '<div><span class="eyebrow">Not supported</span> ' + esc(w) + (cd.wrong && cd.wrong[w] ? ': ' + esc(cd.wrong[w]) : '') + '</div>').join('') +
        (g.extra.length ? '<div class="small"><span class="eyebrow">Also fine</span> ' + g.extra.map(esc).join(' · ') + '</div>' : '') +
        notAsked.map((qi) => { const p = ref(d.ask[qi]); const a = (cd.ans && cd.ans[qi]) || DEFAULT_ANS; return p ? '<div class="small"><span class="eyebrow">You didn\'t ask</span> <span class="tl">' + esc(main(p)) + '</span> The answer would have been: <span class="tl">' + esc(a[0]) + '</span> <span class="muted">(' + esc(a[1]) + ')</span></div>' : ''; }).join('') +
        '</div><div class="ds-preview small"><b>Model:</b> ' + esc(cd.doc) + '</div>' +
        (d.id === 'mood' && cd.quote ? '<div class="small"><span class="eyebrow">Model quote</span> <span class="tl">' + esc(cd.quote) + '</span></div>' : '') +
        '<div class="ds-assess small"><b>Teaching point.</b> ' + esc(cd.why) + '</div>' +
        (cd.ev ? '<div class="card stack mse-ev" style="gap:8px"><div class="eyebrow">Evidence</div><div><b>Which line best supports "' + esc(cd.ev.find) + '"?</b></div><div class="opts">' +
          cd.ev.opts.map((o, k) => '<button class="opt' + (r.ev !== null ? (o[1] ? ' right' : k === r.ev ? ' wrong' : '') : '') + '" data-ev="' + k + '"' + (r.ev !== null ? ' disabled' : '') + '><span class="tl">' + esc(o[0]) + '</span></button>').join('') + '</div>' +
          (r.ev !== null ? '<div class="feedback ' + (cd.ev.opts[r.ev][1] ? 'ok' : 'no') + '">' + esc(cd.ev.why) + '</div>' : '') + '</div>' : '');
    };

    const domainView = (d, i) => {
      const cd = C.domains[d.id], r = rec[d.id], locked = !!r.res, step = i + 1;
      return '<div class="card stack ds-field"><div class="spread"><div><span class="eyebrow">' + esc(d.group) + ' · ' + step + ' of ' + N + '</span><h2 style="margin:2px 0 0">' + esc(d.label) + '</h2></div>' + (d.risk ? '<span class="pill bad">Safety</span>' : '') + '</div>' +
        '<div class="ds-assess"><b>What to assess.</b> ' + esc(d.assess) + '</div>' +
        (cd.obs ? '<div class="notice info dc-obs"><span class="eyebrow">You observe</span><div>' + esc(cd.obs) + '</div></div>' : '') +
        '<div><div class="eyebrow" style="margin-bottom:6px">Ask</div><div class="stack" style="gap:6px">' + d.ask.map((rf, qi) => { const p = ref(rf); return p ? qLine(p, (cd.ans && cd.ans[qi]) || DEFAULT_ANS, r.asked.has(qi), 'data-ask="' + qi + '"', r.showEn) : ''; }).join('') + '</div>' +
        (r.asked.size ? '<button class="btn sm ghost" id="dcEn" style="margin-top:6px">' + (r.showEn ? 'Hide' : 'Show') + ' English for answers</button>' : '') + '</div>' +
        '<div><div class="eyebrow" style="margin-bottom:6px">Document</div>' +
        (d.id === 'mood' ? '<label class="small" for="dcQuote">Patient\'s own words (Tagalog, with translation)</label><input class="input" id="dcQuote" placeholder="Quote what the patient said" value="' + esc(r.quote) + '" style="margin-bottom:8px"' + (locked ? ' disabled' : '') + '>' : '') +
        '<div class="ds-picks">' + d.picks.map((p, k) => {
          let st = '';
          if (locked) st = r.res.hit.includes(p) || r.res.extra.includes(p) ? ' hit' : r.res.wrong.includes(p) ? ' bad' : r.res.miss.includes(p) ? ' missed' : '';
          return '<button class="ds-pick' + (r.picks.has(p) ? ' on' : '') + st + '" data-pick="' + k + '" aria-pressed="' + r.picks.has(p) + '"' + (locked ? ' disabled' : '') + '>' + esc(p) + '</button>';
        }).join('') + '</div>' +
        '<label class="small" for="dcText" style="display:block;margin-top:8px">Details (optional)</label><textarea class="input" id="dcText" rows="2" placeholder="Add details, e.g., what the voices say"' + (locked ? ' disabled' : '') + '>' + esc(r.text) + '</textarea></div>' +
        (locked ? result(d) : '<div><button class="btn primary" id="dcCheck"' + (r.picks.size ? '' : ' disabled') + '>Check against the model</button>' + (r.asked.size || d.kind === 'observe' ? '' : '<div class="small muted" style="margin-top:6px">Ask first, then document.</div>') + '</div>') +
        '<div class="spread"><button class="btn" data-go="' + (step - 1) + '">← Back</button><button class="btn' + (locked ? ' primary' : '') + '" data-go="' + (step + 1) + '">' + (step < N ? 'Next: ' + esc(F[step].label) + ' →' : 'Compare →') + '</button></div></div>';
    };

    const modelMSE = () => F.map((d) => C.domains[d.id].doc + '.').join('\n');
    const disRows = () => {
      if (!dis) return '';
      const a = (ids) => ids.map((id) => C.domains[id] && C.domains[id].doc).filter(Boolean).join('; ');
      const b = (ids) => ids.map((id) => dis.fields[id] && dis.fields[id].doc).filter(Boolean).join('; ');
      const rows = [['Appearance and behavior', ['appearance', 'psychomotor', 'attitude'], ['behavior']], ['Mood and affect', ['mood'], ['mood']], ['Thought process', ['process'], ['process']],
        ['Perception and thought content', ['perception', 'content'], ['positive']], ['Suicidal and homicidal ideation', ['safety'], ['suicide', 'homicide']], ['Orientation', ['orientation'], ['orientation']],
        ['Insight', ['insight'], ['insight']], ['Judgment and impulse control', ['judgment', 'impulse'], ['judgment']]];
      return '<div class="card stack"><h3 style="margin:0">Admission vs discharge</h3><p class="small muted" style="margin:0">Model MSE on the day of admission and on the day of discharge (' + esc(dis.title) + ').</p>' +
        '<div class="stack" style="gap:8px">' + rows.map(([t, x, y]) => '<div class="dc-row"><b>' + esc(t) + '</b><div class="small"><span class="eyebrow">Admission</span> ' + esc(a(x)) + '</div><div class="small"><span class="eyebrow">Discharge</span> ' + esc(b(y)) + '</div></div>').join('') + '</div>' +
        '<a class="btn" href="#/psych/dcase/' + dis.id + '">Practice his or her discharge</a></div>';
    };
    const compareView = () => {
      const pct = Math.round((100 * pts()) / maxPts());
      if (allDone()) { const best = store(); best[C.id] = Math.max(pct, best[C.id] || 0); App.save(); }
      const pending = F.filter((d) => !rec[d.id].res);
      const risky = F.filter((d) => d.risk && (!rec[d.id].res || rec[d.id].res.score < 2));
      return '<div class="card stack"><div class="spread"><h2 style="margin:0">Your MSE vs the model</h2><span class="pill ' + pillCls(pct) + '">' + pct + '%</span></div>' +
        (pending.length ? '<div class="feedback" style="background:var(--surface-2)">Not yet checked: ' + pending.map((d) => esc(d.label)).join(', ') + '. Unchecked domains score 0.</div>' : '') +
        risky.map((d) => '<div class="feedback no"><b>Safety: ' + esc(d.label) + '.</b> The model documents: ' + esc(C.domains[d.id].doc) + '</div>').join('') +
        '<div class="stack dc-cmp" style="gap:8px">' + F.map((d) => {
          const r = rec[d.id], s = r.res ? r.res.score : -1;
          return '<div class="dc-row ' + (s === 2 ? 'ok' : s === 1 ? 'mid' : s === 0 ? 'no' : '') + '"><div class="spread"><b>' + esc(d.label) + '</b><span class="pill ' + (s === 2 ? 'good' : s === 1 ? 'warn' : s === 0 ? 'bad' : '') + '">' + (s === 2 ? 'Match' : s === 1 ? 'Partial' : s === 0 ? 'Missed' : 'Not checked') + '</span></div>' +
            '<div class="small"><span class="eyebrow">You</span> ' + esc(yourValue(d) || '—') + '</div><div class="small"><span class="eyebrow">Model</span> ' + esc(C.domains[d.id].doc) + '</div></div>';
        }).join('') + '</div>' +
        '<details class="card"><summary><b>Write it as on the form</b> <span class="muted small">optional, for self-check</span></summary><div class="stack" style="gap:8px;margin-top:8px">' +
          '<label class="small" for="mseWritten">Your MSE, one line per domain, as you would write it on the Readmission Form</label><textarea class="input" id="mseWritten" rows="10">' + esc(written) + '</textarea>' +
          '<label class="small" for="mseModel">Model MSE</label><textarea class="input" id="mseModel" rows="10" readonly style="font-family:ui-monospace,Menlo,monospace;font-size:.82rem">' + esc(modelMSE()) + '</textarea></div></details>' +
        '<div class="row"><button class="btn primary" id="dcAgain">Run the case again</button><a class="btn" href="#/psych/mcases">Other cases</a></div></div>' + disRows();
    };

    const draw = () => {
      el.innerHTML = '<div class="breadcrumb"><a href="#/psych">Psychiatry</a> / <a href="#/psych/mcases">MSE practice</a> / ' + esc(C.title) + '</div><h1>' + esc(C.title) + '</h1>' +
        '<div class="notice info">' + esc(C.setting) + '</div>' + chartCard() + nav() +
        '<div style="margin-top:12px">' + (cur === 0 ? ccView() : cur <= N ? domainView(F[cur - 1], cur - 1) : compareView()) + '</div>';
      bind();
    };
    const keep = () => { const y = window.scrollY; draw(); window.scrollTo(0, y); };
    const bind = () => {
      el.querySelectorAll('[data-go]').forEach((b) => (b.onclick = () => { const n = +b.dataset.go; if (n < 0 || n > N + 1) return; cur = n; App.stopSpeech(); draw(); const t = el.querySelector('.ds-field, .dc-cmp'); if (t) { const top = t.getBoundingClientRect().top + window.scrollY - 80; if (window.scrollY > top) window.scrollTo(0, top); } }));
      if (cur === 0) {
        const q = el.querySelector('[data-ccask]'); if (q) q.onclick = () => { cc.asked = true; keep(); speak(C.cc.ans[0]); };
        el.querySelectorAll('[data-cc]').forEach((b) => (b.onclick = () => { cc.pick = +b.dataset.cc; App.recordAnswer(!!C.cc.opts[cc.pick][1]); keep(); }));
        return;
      }
      if (cur === N + 1) {
        el.querySelector('#dcAgain').onclick = () => { reset(); draw(); window.scrollTo(0, 0); };
        const w = el.querySelector('#mseWritten'); if (w) w.oninput = (e) => { written = e.target.value; };
        return;
      }
      const d = F[cur - 1], r = rec[d.id], cd = C.domains[d.id];
      el.querySelectorAll('[data-ask]').forEach((b) => (b.onclick = () => { const qi = +b.dataset.ask; r.asked.add(qi); keep(); speak(((cd.ans && cd.ans[qi]) || DEFAULT_ANS)[0]); }));
      const en = el.querySelector('#dcEn'); if (en) en.onclick = () => { r.showEn = !r.showEn; keep(); };
      el.querySelectorAll('[data-ev]').forEach((b) => (b.onclick = () => { r.ev = +b.dataset.ev; App.recordAnswer(!!cd.ev.opts[r.ev][1]); keep(); }));
      if (r.res) return;
      const chk = el.querySelector('#dcCheck');
      el.querySelectorAll('[data-pick]').forEach((b) => (b.onclick = () => { const p = d.picks[+b.dataset.pick]; r.picks.has(p) ? r.picks.delete(p) : r.picks.add(p); b.classList.toggle('on'); b.setAttribute('aria-pressed', r.picks.has(p)); chk.disabled = !r.picks.size; }));
      el.querySelector('#dcText').oninput = (e) => { r.text = e.target.value; };
      const qt = el.querySelector('#dcQuote'); if (qt) qt.oninput = (e) => { r.quote = e.target.value; };
      chk.onclick = () => { r.res = App.dischargeGrade(cd, r.picks); App.recordAnswer(r.res.score === 2); if (cur === N) App.activity(20); keep(); const fb = el.querySelector('.ds-field .feedback'); if (fb) fb.scrollIntoView({ block: 'center' }); };
    };
    App.onLeave = () => App.stopSpeech();
    draw();
  };
})();
