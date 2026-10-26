/* Discharge practice cases: interview a simulated patient field by field, document with the
   discharge form's picks, check each field against a model answer, and compare MSEs at the end.
   Data: PSYCH_DISCHARGE (fields, questions, picks) + PSYCH_DISCHARGE_CASES (answers, models). */
(function () {
  const { esc, icons } = App;
  const V = (App.views = App.views || {});
  const S = () => App.state;
  const ref = (r) => { const [sid, i] = r.split(':'); const s = PSYCH_SECTIONS.find((x) => x.id === sid); return s && s.phrases[+i]; };
  const main = (p) => (S().settings.register === 'c' ? p.c || p.f : p.f);
  const alt = (p) => (S().settings.register === 'c' ? p.f : p.c);
  const DEFAULT_ANS = ['Opo, Dok.', 'Yes, Doc.'];
  const store = () => (S().done.dcases = S().done.dcases || {});

  // Grade a set of picks against a case field. need: strings or arrays ("any one of").
  const grade = (cf, picks) => {
    const need = cf.need || [], ok = cf.ok || [];
    const hit = [], miss = [], wrong = [];
    const covered = new Set();
    need.forEach((n) => {
      const alts = Array.isArray(n) ? n : [n];
      const found = alts.filter((a) => picks.has(a));
      found.forEach((a) => covered.add(a));
      if (found.length) hit.push(found[0]); else miss.push(alts[0]);
    });
    picks.forEach((p) => { if (!covered.has(p) && !ok.includes(p)) wrong.push(p); });
    const extra = [...picks].filter((p) => ok.includes(p) && !covered.has(p));
    const score = !miss.length && !wrong.length ? 2 : hit.length ? 1 : 0;
    return { hit, miss, wrong, extra, score };
  };
  App.dischargeGrade = grade;

  V.dischargeCases = (el) => {
    const done = store();
    el.innerHTML = '<div class="breadcrumb"><a href="#/psych">Psychiatry</a> / <a href="#/psych/discharge">Discharge assessment</a> / Practice cases</div>' +
      '<h1>Discharge practice</h1><p class="muted">Interview a simulated patient on the day of discharge. Ask the questions in Tagalog, document each field with the form\'s wording, then compare your discharge MSE with a model answer.</p>' +
      '<div class="grid">' + PSYCH_DISCHARGE_CASES.map((c) => '<a class="tile" href="#/psych/dcase/' + c.id + '"><span class="eyebrow">' + esc(c.level) + '</span><h3>' + esc(c.title) + '</h3><p>' + esc(c.setting) + '</p>' +
        (done[c.id] != null ? '<div class="meta"><span class="pill ' + (done[c.id] >= 80 ? 'good' : done[c.id] >= 50 ? 'warn' : 'bad') + '">Best ' + done[c.id] + '%</span></div>' : '') + '</a>').join('') + '</div>' +
      '<p class="small muted" style="margin-top:14px">Patients are fictional. Doses are teaching examples, not prescribing advice.</p>';
  };

  V.dischargeCase = (el, params) => {
    const C = PSYCH_DISCHARGE_CASES.find((x) => x.id === params.id);
    if (!C) { el.innerHTML = '<p>Case not found.</p>'; return; }
    const D = PSYCH_DISCHARGE;
    const F = D.fields.filter((f) => f.kind !== 'sign' && C.fields[f.id]);
    let rec, cur;
    const reset = () => { rec = {}; F.forEach((f) => (rec[f.id] = { asked: new Set(), picks: new Set(), text: '', quote: '', res: null })); cur = 0; };
    reset();

    const yourValue = (f) => {
      const r = rec[f.id];
      let v = [...r.picks].join(', ');
      if (f.id === 'mood' && r.quote.trim()) v = '"' + r.quote.trim() + '"' + (v ? ' ' + v : '');
      if (r.text.trim()) v += (v ? '; ' : '') + r.text.trim();
      return v;
    };
    const total = () => { const n = F.filter((f) => rec[f.id].res).length; const pts = F.reduce((a, f) => a + (rec[f.id].res ? rec[f.id].res.score : 0), 0); return { n, pts, pct: Math.round((100 * pts) / (2 * F.length)) }; };

    const nav = () => {
      const groups = [];
      F.forEach((f, i) => { let g = groups.find((x) => x.name === f.group); if (!g) groups.push((g = { name: f.group, items: [] })); g.items.push([f, i]); });
      const mark = (f) => { const r = rec[f.id].res; return r ? (r.score === 2 ? ' done' : r.score === 1 ? ' part' : ' miss') : ''; };
      return '<div class="ds-nav" role="tablist" aria-label="Form fields">' + groups.map((g) => '<div class="ds-grp"><span class="eyebrow">' + esc(g.name) + '</span><div class="ds-chips">' +
        g.items.map(([f, i]) => '<button role="tab" data-go="' + i + '" class="ds-chip' + (i === cur ? ' on' : '') + mark(f) + (f.risk ? ' risk' : '') + '" aria-selected="' + (i === cur) + '">' + (rec[f.id].res && rec[f.id].res.score === 2 ? icons.check : '') + esc(f.label) + '</button>').join('') + '</div></div>').join('') +
        '<div class="ds-grp"><span class="eyebrow">Finish</span><div class="ds-chips"><button data-go="' + F.length + '" class="ds-chip sum' + (cur === F.length ? ' on' : '') + '">Compare</button></div></div></div>';
    };

    const chartCard = () => '<details class="card dc-chart"' + (cur === 0 ? ' open' : '') + '><summary><b>Chart</b> <span class="muted small">admission and hospital course</span></summary><ul>' + C.chart.map((l) => '<li>' + esc(l) + '</li>').join('') + '</ul></details>';

    const questions = (f) => {
      const cf = C.fields[f.id], r = rec[f.id];
      return '<div><div class="eyebrow" style="margin-bottom:6px">Ask</div><div class="stack" style="gap:6px">' + f.refs.map((rf, qi) => {
        const p = ref(rf); if (!p) return '';
        const a = (cf.ans && cf.ans[qi]) || DEFAULT_ANS, asked = r.asked.has(qi);
        return '<div class="dz-line dc-q' + (asked ? ' asked' : '') + '"><div><div class="tl dz-tl">' + esc(main(p)) + '</div>' + (alt(p) && alt(p) !== main(p) ? '<div class="tl small muted">' + esc(alt(p)) + '</div>' : '') + '<div class="small muted">' + esc(p.en) + '</div>' +
          (asked ? '<div class="dc-ans"><span class="eyebrow">Patient</span><div class="tl">' + esc(a[0]) + '</div><div class="small muted dc-en"' + (r.showEn ? '' : ' hidden') + '>' + esc(a[1]) + '</div></div>' : '') +
          '</div><div class="dc-acts">' + App.sayBtn(main(p)) + (asked ? App.sayBtn(a[0]) : '<button class="btn sm" data-ask="' + qi + '">Ask</button>') + '</div></div>';
      }).join('') + '</div>' +
      (r.asked.size ? '<button class="btn sm ghost" id="dcEn" style="margin-top:6px">' + (r.showEn ? 'Hide' : 'Show') + ' English for answers</button>' : '') + '</div>';
    };

    const result = (f) => {
      const cf = C.fields[f.id], r = rec[f.id], g = r.res;
      const notAsked = (cf.key || []).filter((qi) => !r.asked.has(qi));
      const cls = g.score === 2 ? 'ok' : g.score === 1 ? 'mid' : 'no';
      return '<div class="feedback ' + cls + ' stack" style="gap:6px"><div><b>' + (g.score === 2 ? 'Matches the model.' : g.score === 1 ? 'Partly matches.' : 'Doesn\'t match the model.') + '</b></div>' +
        (g.miss.length ? '<div><span class="eyebrow">Missed</span> ' + g.miss.map(esc).join(' · ') + '</div>' : '') +
        g.wrong.map((w) => '<div><span class="eyebrow">Not supported</span> ' + esc(w) + (cf.wrong && cf.wrong[w] ? ': ' + esc(cf.wrong[w]) : '') + '</div>').join('') +
        (g.extra.length ? '<div class="small"><span class="eyebrow">Also fine</span> ' + g.extra.map(esc).join(' · ') + '</div>' : '') +
        notAsked.map((qi) => { const p = ref(f.refs[qi]); const a = (cf.ans && cf.ans[qi]) || DEFAULT_ANS; return p ? '<div class="small"><span class="eyebrow">You didn\'t ask</span> <span class="tl">' + esc(main(p)) + '</span> The patient would have said: <span class="tl">' + esc(a[0]) + '</span> <span class="muted">(' + esc(a[1]) + ')</span></div>' : ''; }).join('') +
        '</div>' +
        '<div class="ds-preview small"><b>Model:</b> ' + esc(cf.doc) + '</div>' +
        (f.id === 'mood' && cf.quote ? '<div class="small"><span class="eyebrow">Model quote</span> <span class="tl">' + esc(cf.quote) + '</span></div>' : '') +
        '<div class="ds-assess small"><b>Teaching point.</b> ' + esc(cf.why) + '</div>';
    };

    const fieldView = (f, i) => {
      const cf = C.fields[f.id], r = rec[f.id], locked = !!r.res;
      return '<div class="card stack ds-field"><div class="spread"><div><span class="eyebrow">' + esc(f.group) + ' · ' + (i + 1) + ' of ' + F.length + '</span><h2 style="margin:2px 0 0">' + esc(f.label) + '</h2></div>' + (f.risk ? '<span class="pill bad">Safety</span>' : '') + '</div>' +
        '<div class="ds-assess"><b>What to assess.</b> ' + esc(f.assess) + '</div>' +
        (cf.obs ? '<div class="notice info dc-obs"><span class="eyebrow">You observe / chart</span><div>' + esc(cf.obs) + '</div></div>' : '') +
        questions(f) +
        '<div><div class="eyebrow" style="margin-bottom:6px">Document</div>' +
        (f.id === 'mood' ? '<label class="small" for="dcQuote">Patient\'s own words (Tagalog, with translation)</label><input class="input" id="dcQuote" placeholder="Quote what the patient said" value="' + esc(r.quote) + '" style="margin-bottom:8px"' + (locked ? ' disabled' : '') + '>' : '') +
        '<div class="ds-picks">' + f.picks.map((p, k) => {
          let st = '';
          if (locked) st = r.res.hit.includes(p) || r.res.extra.includes(p) ? ' hit' : r.res.wrong.includes(p) ? ' bad' : r.res.miss.includes(p) ? ' missed' : '';
          return '<button class="ds-pick' + (r.picks.has(p) ? ' on' : '') + st + '" data-pick="' + k + '" aria-pressed="' + r.picks.has(p) + '"' + (locked ? ' disabled' : '') + '>' + esc(p) + '</button>';
        }).join('') + '</div>' +
        '<label class="small" for="dcText" style="display:block;margin-top:8px">Details (optional)</label><textarea class="input" id="dcText" rows="2" placeholder="Add details, e.g., dose or what the patient said"' + (locked ? ' disabled' : '') + '>' + esc(r.text) + '</textarea></div>' +
        (locked ? result(f) : '<div><button class="btn primary" id="dcCheck"' + (r.picks.size ? '' : ' disabled') + '>Check against the model</button>' + (r.asked.size ? '' : '<div class="small muted" style="margin-top:6px">Ask the patient first, then document.</div>') + '</div>') +
        '<div class="spread"><button class="btn" data-go="' + (i - 1) + '"' + (i === 0 ? ' disabled' : '') + '>← Back</button><button class="btn' + (locked ? ' primary' : '') + '" data-go="' + (i + 1) + '">' + (i + 1 < F.length ? 'Next: ' + esc(F[i + 1].label) + ' →' : 'Compare →') + '</button></div></div>';
    };

    const compareView = () => {
      const t = total();
      if (t.n === F.length) { const best = store(); best[C.id] = Math.max(t.pct, best[C.id] || 0); App.save(); }
      const risky = F.filter((f) => f.risk && (!rec[f.id].res || rec[f.id].res.score < 2));
      const pending = F.filter((f) => !rec[f.id].res);
      return '<div class="card stack"><div class="spread"><h2 style="margin:0">Your discharge vs the model</h2>' + (t.n ? '<span class="pill ' + (t.pct >= 80 ? 'good' : t.pct >= 50 ? 'warn' : 'bad') + '">' + t.pct + '%</span>' : '') + '</div>' +
        (pending.length ? '<div class="feedback" style="background:var(--surface-2)">Not yet checked: ' + pending.map((f) => esc(f.label)).join(', ') + '. Unchecked fields score 0.</div>' : '') +
        risky.map((f) => '<div class="feedback no"><b>Safety: ' + esc(f.label) + '.</b> The model documents: ' + esc(C.fields[f.id].doc) + '</div>').join('') +
        '<div class="stack dc-cmp" style="gap:8px">' + F.map((f) => {
          const r = rec[f.id], s = r.res ? r.res.score : -1;
          return '<div class="dc-row ' + (s === 2 ? 'ok' : s === 1 ? 'mid' : s === 0 ? 'no' : '') + '"><div class="spread"><b>' + esc(f.label) + '</b><span class="pill ' + (s === 2 ? 'good' : s === 1 ? 'warn' : s === 0 ? 'bad' : '') + '">' + (s === 2 ? 'Match' : s === 1 ? 'Partial' : s === 0 ? 'Missed' : 'Not checked') + '</span></div>' +
            '<div class="small"><span class="eyebrow">You</span> ' + esc(yourValue(f) || '—') + '</div><div class="small"><span class="eyebrow">Model</span> ' + esc(C.fields[f.id].doc) + '</div></div>';
        }).join('') + '</div>' +
        '<div class="row"><button class="btn primary" id="dcAgain">Run the case again</button><a class="btn" href="#/psych/dcases">Other cases</a><a class="btn" href="#/psych/discharge">Real discharge assessment</a></div></div>';
    };

    const draw = () => {
      el.innerHTML = '<div class="breadcrumb"><a href="#/psych">Psychiatry</a> / <a href="#/psych/dcases">Discharge practice</a> / ' + esc(C.title) + '</div><h1>' + esc(C.title) + '</h1>' +
        '<div class="notice info">' + esc(C.setting) + '</div>' + chartCard() + nav() +
        '<div style="margin-top:12px">' + (cur < F.length ? fieldView(F[cur], cur) : compareView()) + '</div>';
      bind();
    };
    const scrollField = () => { const t = el.querySelector('.ds-field, .dc-cmp'); if (!t) return; const top = t.getBoundingClientRect().top + window.scrollY - 80; if (window.scrollY > top) window.scrollTo(0, top); };
    const bind = () => {
      el.querySelectorAll('[data-go]').forEach((b) => (b.onclick = () => { const n = +b.dataset.go; if (n < 0 || n > F.length) return; cur = n; App.stopSpeech(); draw(); scrollField(); }));
      if (cur === F.length) { el.querySelector('#dcAgain').onclick = () => { reset(); draw(); window.scrollTo(0, 0); }; return; }
      const f = F[cur], r = rec[f.id];
      el.querySelectorAll('[data-ask]').forEach((b) => (b.onclick = () => {
        const qi = +b.dataset.ask; r.asked.add(qi); const y = window.scrollY; draw(); window.scrollTo(0, y);
        const a = (C.fields[f.id].ans && C.fields[f.id].ans[qi]) || DEFAULT_ANS; try { Promise.resolve(App.speakAsync(a[0])).catch(() => {}); } catch (e) { /* no voice available */ }
      }));
      const en = el.querySelector('#dcEn'); if (en) en.onclick = () => { r.showEn = !r.showEn; const y = window.scrollY; draw(); window.scrollTo(0, y); };
      if (r.res) return;
      const chk = el.querySelector('#dcCheck');
      el.querySelectorAll('[data-pick]').forEach((b) => (b.onclick = () => { const p = f.picks[+b.dataset.pick]; r.picks.has(p) ? r.picks.delete(p) : r.picks.add(p); b.classList.toggle('on'); b.setAttribute('aria-pressed', r.picks.has(p)); chk.disabled = !r.picks.size; }));
      el.querySelector('#dcText').oninput = (e) => { r.text = e.target.value; };
      const qt = el.querySelector('#dcQuote'); if (qt) qt.oninput = (e) => { r.quote = e.target.value; };
      chk.onclick = () => { r.res = grade(C.fields[f.id], r.picks); App.recordAnswer(r.res.score === 2); if (cur === F.length - 1 || F.every((x) => rec[x.id].res)) App.activity(20); const y = window.scrollY; draw(); window.scrollTo(0, y); const fb = el.querySelector('.ds-field .feedback'); if (fb) fb.scrollIntoView({ block: 'center' }); };
    };
    App.onLeave = () => App.stopSpeech();
    draw();
  };
})();
