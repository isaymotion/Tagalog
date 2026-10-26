/* Guided discharge assessment: one discharge summary field at a time, with Tagalog questions,
   tap-to-document wording, and a compiled summary in the form's layout.
   Nothing is saved, and no patient details are asked for. */
(function () {
  const { esc, icons } = App;
  const V = App.views;
  const S = () => App.state;
  const ref = (r) => { const [sid, i] = r.split(':'); const s = PSYCH_SECTIONS.find((x) => x.id === sid); return s && s.phrases[+i]; };
  const main = (p) => (S().settings.register === 'c' ? p.c || p.f : p.f);
  const alt = (p) => (S().settings.register === 'c' ? p.f : p.c);
  const KIND = { observe: 'Mostly observe', ask: 'Ask and observe', explain: 'Explain and confirm', sign: 'Sign' };

  V.discharge = (el) => {
    const D = PSYCH_DISCHARGE, inst = APP_META.institution || {};
    const F = D.fields;
    const rec = {}; // field id → { picks: Set, text, quote }
    F.forEach((f) => (rec[f.id] = { picks: new Set(), text: '', quote: '' }));
    let cur = 0; // F.length = summary step
    const value = (f) => {
      const r = rec[f.id];
      const parts = [...r.picks].map((p, k) => (k > 0 && f.group !== 'Plan' && /^[A-Z][a-z]/.test(p) ? p[0].toLowerCase() + p.slice(1) : p));
      if (f.id === 'mood' && r.quote.trim()) parts.unshift('"' + r.quote.trim() + '"');
      let v = parts.join(', ');
      if (r.text.trim()) v += (v ? '; ' : '') + r.text.trim();
      return v;
    };
    const summaryText = () => {
      const line = (id, indent) => { const f = F.find((x) => x.id === id); return (indent || '') + f.label + ': ' + (value(f) || '') ; };
      return [
        (inst.name ? inst.name.toUpperCase() + '\n' : '') + 'DISCHARGE SUMMARY' + (D.form ? ' (' + D.form + ')' : ''),
        'Date: ' + new Date().toLocaleDateString('en-PH', { year: 'numeric', month: 'short', day: 'numeric' }),
        '', 'Discharge MSE:', line('behavior', '  '), line('mood', '  '), line('process', '  '), '  Thought Content:',
        line('positive', '    '), line('negative', '    '), line('suicide', '    '), line('homicide', '    '),
        line('orientation', '  '), line('memory', '  '), line('insight', '  '), line('judgment', '  '), '',
        line('sleep'), line('adverse'), '', line('diagnosis'), line('medications'), '', line('aftercare'), '', 'By: ______________________ (attending psychiatrist, license no.)'
      ].join('\n');
    };
    const flags = () => {
      const out = [];
      const has = (id, re) => [...rec[id].picks].some((p) => re.test(p)) || re.test(rec[id].text);
      if (has('suicide', /\bactive\b|reassess/i)) out.push(['bad', 'Active suicidal ideation documented. Reassess discharge readiness and safety planning before the patient leaves.']);
      else if (has('suicide', /passive/i)) out.push(['warn', 'Passive death wish documented. Make a safety plan with the patient and family, and limit access to means at home.']);
      if (has('homicide', /present|reassess/i)) out.push(['bad', 'Homicidal ideation documented. Reassess discharge readiness and consider duty to protect.']);
      if (has('positive', /persist/i)) out.push(['warn', 'Delusions persist. Document the risk assessment and the family\'s plan for supervision.']);
      if (has('insight', /poor|grade 1|grade 2/i)) out.push(['warn', 'Poor insight. Plan for supervised medication and consider a depot.']);
      if (has('medications', /teach-back/i) === false && rec.medications.picks.size + rec.medications.text.length > 0) out.push(['info', 'Teach-back not marked for medications.']);
      const empty = F.filter((f) => f.kind !== 'sign' && !value(f)).map((f) => f.label);
      if (empty.length) out.push(['info', 'Not yet filled: ' + empty.join(', ') + '.']);
      return out;
    };

    const nav = () => {
      const groups = [];
      F.forEach((f, i) => { let g = groups.find((x) => x.name === f.group); if (!g) groups.push((g = { name: f.group, items: [] })); g.items.push([f, i]); });
      return '<div class="ds-nav" role="tablist" aria-label="Form fields">' + groups.map((g) => '<div class="ds-grp"><span class="eyebrow">' + esc(g.name) + '</span><div class="ds-chips">' +
        g.items.map(([f, i]) => '<button role="tab" data-go="' + i + '" class="ds-chip' + (i === cur ? ' on' : '') + (value(f) ? ' done' : '') + (f.risk ? ' risk' : '') + '" aria-selected="' + (i === cur) + '">' + (value(f) ? icons.check : '') + esc(f.label) + '</button>').join('') + '</div></div>').join('') +
        '<div class="ds-grp"><span class="eyebrow">Finish</span><div class="ds-chips"><button data-go="' + F.length + '" class="ds-chip sum' + (cur === F.length ? ' on' : '') + '">Summary</button></div></div></div>';
    };
    const fieldView = (f, i) => {
      const r = rec[f.id];
      return '<div class="card stack ds-field"><div class="spread"><div><span class="eyebrow">' + esc(f.group) + ' · ' + (i + 1) + ' of ' + F.length + '</span><h2 style="margin:2px 0 0">' + esc(f.label) + '</h2></div><span class="pill' + (f.risk ? ' bad' : '') + '">' + esc(KIND[f.kind] || '') + '</span></div>' +
        '<div class="ds-assess"><b>What to assess.</b> ' + esc(f.assess) + '</div>' +
        (f.refs.length ? '<div><div class="eyebrow" style="margin-bottom:6px">Say</div><div class="stack" style="gap:6px">' + f.refs.map(ref).filter(Boolean).map((p) =>
          '<div class="dz-line"><div><div class="tl dz-tl">' + esc(main(p)) + '</div>' + (alt(p) && alt(p) !== main(p) ? '<div class="tl small muted">' + esc(alt(p)) + '</div>' : '') + '<div class="small muted">' + esc(p.en) + '</div>' +
          (p.n ? '<div class="small" style="margin-top:3px">' + esc(p.n) + '</div>' : '') +
          (p.answers ? '<div class="small" style="margin-top:4px"><span class="eyebrow">Patient may say</span> ' + p.answers.map((a) => '<span class="tl">' + esc(a[0]) + '</span> <span class="muted">(' + esc(a[1]) + ')</span>').join(' · ') + '</div>' : '') +
          '</div>' + App.sayBtn(main(p)) + '</div>').join('') + '</div></div>' : '') +
        (f.kind === 'sign' ? '<div class="notice info">Sign the paper form. The summary leaves a line for the name and license number.</div>' :
          '<div><div class="eyebrow" style="margin-bottom:6px">Document</div>' +
          (f.id === 'mood' ? '<label class="small" for="dsQuote">Patient\'s own words (Tagalog, with translation)</label><input class="input" id="dsQuote" placeholder="e.g., Okay na po ako (I\'m okay now)" value="' + esc(r.quote) + '" style="margin-bottom:8px">' : '') +
          '<div class="ds-picks">' + f.picks.map((p, k) => '<button class="ds-pick' + (r.picks.has(p) ? ' on' : '') + (/reassess/i.test(p) ? ' risk' : '') + '" data-pick="' + k + '" aria-pressed="' + r.picks.has(p) + '">' + esc(p) + '</button>').join('') + '</div>' +
          '<label class="small" for="dsText" style="display:block;margin-top:8px">Details (optional)</label><textarea class="input" id="dsText" rows="2" placeholder="Add details, e.g., dose or specifics">' + esc(r.text) + '</textarea>' +
          '<div class="ds-preview small"><b>' + esc(f.label) + ':</b> <span id="dsVal">' + esc(value(f) || '—') + '</span></div></div>') +
        '<div class="spread"><button class="btn" data-go="' + (i - 1) + '"' + (i === 0 ? ' disabled' : '') + '>← Back</button><button class="btn primary" data-go="' + (i + 1) + '">' + (i + 1 < F.length ? 'Next: ' + esc(F[i + 1].label) + ' →' : 'Summary →') + '</button></div></div>';
    };
    const summaryView = () => '<div class="card stack"><h2 style="margin:0">Summary</h2>' +
      flags().map(([k, t]) => '<div class="feedback ' + (k === 'bad' ? 'no' : k === 'warn' ? 'mid' : '') + '" style="' + (k === 'info' ? 'background:var(--surface-2)' : '') + '">' + esc(t) + '</div>').join('') +
      '<label class="small" for="dsSum">Copy into the chart or transcribe onto the form</label><textarea class="input" id="dsSum" rows="24" style="font-family:ui-monospace,Menlo,monospace;font-size:.82rem">' + esc(summaryText()) + '</textarea>' +
      '<div class="row"><button class="btn primary" id="dsCopy">Copy summary</button><button class="btn" id="dsReset">Start a new one</button><a class="btn" href="#/psych/handout?discharge=1">Print question guide</a></div></div>';

    const draw = () => {
      el.innerHTML = '<div class="breadcrumb"><a href="#/psych">Psychiatry</a> / Discharge assessment</div><h1>Discharge assessment</h1>' +
        (inst.name ? '<p class="dz-inst"><b>' + esc(inst.name) + '</b><br><span class="muted small">Discharge Summary · Form ' + esc(D.form) + '</span></p>' : '') +
        '<p class="muted">Go through the discharge summary one field at a time: what to assess, what to ask in Tagalog, and how to document it. Nothing here is saved, and no patient details are needed.</p>' +
        '<p><a class="btn sm" href="#/psych/dcases">Practice first with a simulated patient →</a></p>' +
        nav() + '<div style="margin-top:12px">' + (cur < F.length ? fieldView(F[cur], cur) : summaryView()) + '</div>';
      bind();
    };
    const bind = () => {
      el.querySelectorAll('[data-go]').forEach((b) => (b.onclick = () => { const n = +b.dataset.go; if (n < 0 || n > F.length) return; cur = n; App.stopSpeech(); draw(); const top = el.querySelector('.ds-field, #dsSum').getBoundingClientRect().top + window.scrollY - 80; if (window.scrollY > top) window.scrollTo(0, top); }));
      const f = F[cur];
      if (cur < F.length && f.kind !== 'sign') {
        const r = rec[f.id];
        const refresh = () => { el.querySelector('#dsVal').textContent = value(f) || '—'; const chip = el.querySelector('[data-go="' + cur + '"].ds-chip'); if (chip) chip.classList.toggle('done', !!value(f)); };
        el.querySelectorAll('[data-pick]').forEach((b) => (b.onclick = () => { const p = f.picks[+b.dataset.pick]; r.picks.has(p) ? r.picks.delete(p) : r.picks.add(p); b.classList.toggle('on'); b.setAttribute('aria-pressed', r.picks.has(p)); refresh(); }));
        el.querySelector('#dsText').oninput = (e) => { r.text = e.target.value; refresh(); };
        const qt = el.querySelector('#dsQuote'); if (qt) qt.oninput = (e) => { r.quote = e.target.value; refresh(); };
      }
      if (cur === F.length) {
        el.querySelector('#dsCopy').onclick = () => { const t = el.querySelector('#dsSum'); (navigator.clipboard ? navigator.clipboard.writeText(t.value) : Promise.reject()).then(() => App.toast('Summary copied.'), () => { t.select(); App.toast('Text selected. Copy it with your device\'s copy command.'); }); App.activity(10); };
        el.querySelector('#dsReset').onclick = () => { F.forEach((x) => (rec[x.id] = { picks: new Set(), text: '', quote: '' })); cur = 0; draw(); window.scrollTo(0, 0); };
      }
    };
    App.onLeave = () => App.stopSpeech();
    draw();
  };
})();
