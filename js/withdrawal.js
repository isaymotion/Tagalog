/* Withdrawal and agitation: alcohol withdrawal (PAWSS, CIWA-Ar, treatment reference), cannabis withdrawal
   (DSM-5-TR counter, CHS, management), the agitated patient (Project BETA → medication → restraint),
   special populations, practice cases and a nurse monitoring script, with Tagalog patient-facing lines.
   Scores live only in memory for this page; nothing about a patient is saved. */
(function () {
  const { esc, icons } = App;
  const V = App.views;
  const S = () => App.state;
  const D = () => window.PSYCH_WD;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';

  let st = null;
  const fresh = () => ({ tab: 'alcohol', sub: { alcohol: 'assess', cannabis: 'assess', agitation: 'steps', special: 'liver', cases: 'postop' }, pawssT: null, pawss: {}, ciwa: {}, can: {}, hours: '' });

  /* ---- renderers ---- */
  const line = (p, showEn) => '<div class="sd-line"><div class="sd-tl">' + esc(p.tl) + (p.n ? '<div class="sd-n">' + esc(p.n) + '</div>' : '') + (showEn ? '<div class="sd-en">' + esc(p.en) + '</div>' : '') + '</div>' + (p.tl.startsWith('(') ? '' : App.sayBtn(p.tl)) + '</div>';
  const lines = (arr, showEn) => arr.map((p) => line(p, showEn)).join('');
  const tbl = (t) => '<div class="tablewrap wd-tbl"><table><thead><tr>' + t.head.map((h) => '<th>' + h + '</th>').join('') + '</tr></thead><tbody>' + t.rows.map((r) => '<tr>' + r.map((c) => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';
  const ref = (c) => '<div class="card wd-ref"><h3>' + c.h + '</h3>' + (c.p || []).map((x) => '<p>' + x + '</p>').join('') + (c.t ? tbl(c.t) : '') + (c.l ? '<ul class="wd-ul">' + c.l.map((x) => '<li>' + x + '</li>').join('') + '</ul>' : '') + (c.pearl ? '<div class="notice info wd-pearl"><b>Teaching pearl.</b> ' + c.pearl + '</div>' : '') + '</div>';
  const pills = (items, cur, attr) => '<div class="sd-steps">' + items.map(([id, t]) => '<button class="pill' + (id === cur ? ' lv' : '') + '" data-' + attr + '="' + id + '">' + esc(t) + '</button>').join('') + '</div>';

  function ciwaScore() {
    const d = D();
    const answered = d.CIWA.items.filter((it) => st.ciwa[it.k] != null).length;
    const score = d.CIWA.items.reduce((t, it) => t + (st.ciwa[it.k] || 0), 0);
    return { answered, score, total: d.CIWA.items.length, band: d.CIWA.band(score) };
  }
  function pawssScore() {
    const d = D();
    const n = d.PAWSS.items.filter((_, i) => st.pawss[i]).length;
    return { n, band: d.PAWSS.band(n) };
  }
  function canScore() {
    const d = D();
    const met = d.CAN_CRIT.filter((c) => st.can[c.n] === true).map((c) => c.n);
    const answered = Object.keys(st.can).length;
    return { met, n: met.length, answered, total: d.CAN_CRIT.length, meets: met.length >= 3 };
  }

  function alcoholNote() {
    const c = ciwaScore(), p = pawssScore();
    const items = D().CIWA.items.filter((it) => st.ciwa[it.k] != null).map((it) => it.k + st.ciwa[it.k]).join(' ');
    return [
      st.hours ? 'Last drink about ' + st.hours + ' h ago.' : '',
      st.pawssT === false ? 'PAWSS not applicable (no alcohol in the past 30 days).' : st.pawssT ? 'PAWSS ' + p.n + '/9: ' + (p.n >= 4 ? 'high risk of complicated withdrawal (≥4)' : 'lower risk') + '.' : '',
      c.answered ? 'CIWA-Ar ' + c.score + '/67' + (c.answered < c.total ? ' (' + (c.total - c.answered) + ' items not scored)' : ', ' + c.band.split(':')[0]) + '; items ' + items + '.' : '',
      c.answered === c.total ? (c.score >= 19 ? 'Plan: front-load benzodiazepine, thiamine IV, replete Mg/K/PO4, consider ED/ICU-level monitoring; reassess hourly.' : c.score >= 10 ? 'Plan: symptom-triggered benzodiazepine, thiamine, electrolytes; rescore in 1 h.' : 'Plan: monitor and rescore; supportive care if low risk.') : ''
    ].filter(Boolean).join('\n');
  }
  function cannabisNote() {
    const c = canScore();
    return c.answered ? 'Cannabis withdrawal screen: ' + c.n + '/7 symptoms within about 1 week of stopping (' + (c.meets ? 'meets criterion B, ≥3' : 'below threshold') + ')' + (c.met.length ? ': ' + c.met.map((k) => D().CAN_CRIT[k - 1].en.toLowerCase().split(' (')[0]).join('; ') : '') + '. Confirm criteria A, C and D; consider CHS if vomiting is cyclic.' : '';
  }

  /* ---- tabs ---- */
  function alcohol(showEn) {
    const d = D(), sub = st.sub.alcohol;
    let body = pills([['assess', 'Assess'], ['treat', 'Treat'], ['explain', 'Explain to the patient']], sub, 'sub');
    if (sub === 'assess') {
      const c = ciwaScore(), p = pawssScore();
      body += '<div class="card"><h3>Ask</h3><div class="row" style="margin-bottom:6px"><label class="small" for="wdHours">Hours since last drink</label><input class="input" id="wdHours" type="number" min="0" inputmode="numeric" style="width:90px;min-height:36px" value="' + esc(st.hours) + '"></div>' + lines(d.ALC_ASK, showEn) + '</div>' +
        '<div class="card"><h3>PAWSS: risk before symptoms</h3><p class="small muted">' + esc(d.PAWSS.note) + '</p>' + line(d.PAWSS.threshold, showEn) +
        '<div class="seg" role="group" aria-label="Alcohol in past 30 days"><button class="' + (st.pawssT === true ? 'on' : '') + '" data-pt="1">Oo</button><button class="' + (st.pawssT === false ? 'on' : '') + '" data-pt="0">Hindi</button></div>' +
        (st.pawssT ? d.PAWSS.items.map((it, i) => '<div class="sd-crit' + (st.pawss[i] ? ' yes' : '') + '"><div class="sd-num">' + (i + 1) + '</div><div class="sd-body">' + line(it, showEn) + '<label class="ho-chk" style="margin-top:6px"><input type="checkbox" data-pw="' + i + '"' + (st.pawss[i] ? ' checked' : '') + '> <span>Yes / present</span></label></div></div>').join('') +
          '<p><b>PAWSS ' + p.n + '/9</b> · <span class="pill ' + (p.n >= 4 ? 'bad' : 'good') + '">' + esc(p.band) + '</span></p>' : st.pawssT === false ? '<p class="small muted">No alcohol in the past 30 days: the PAWSS does not apply.</p>' : '') + '</div>' +
        '<div class="card"><h3>CIWA-Ar</h3><p class="small muted">' + esc(d.CIWA.note) + '</p>' +
        d.CIWA.items.map((it) => { const v = st.ciwa[it.k]; return '<div class="sd-crit' + (v > 0 ? ' yes' : v === 0 ? ' no' : '') + '"><div class="sd-num">' + esc(it.k) + '</div><div class="sd-body"><div class="small" style="font-weight:600">' + esc(it.name) + (it.obs ? ' <span class="pill">observe</span>' : '') + '</div>' + line(it, showEn) +
          '<div class="sd-opts">' + Array.from({ length: it.max + 1 }, (_, n) => '<button class="pill' + (v === n ? ' lv' : '') + '" data-ck="' + it.k + '" data-v="' + n + '" title="' + esc(it.a[n] || '') + '">' + n + '</button>').join('') + '</div>' +
          '<div class="sd-n">' + Object.entries(it.a).map(([n, a]) => n + ' ' + esc(a)).join(' · ') + '</div></div></div>'; }).join('') +
        '<p><b>CIWA-Ar ' + c.score + '/67</b>' + (c.answered < c.total ? ' <span class="small muted">(' + (c.total - c.answered) + ' items not yet scored)</span>' : ' · <span class="pill ' + (c.score >= 19 ? 'bad' : c.score >= 10 ? 'warn' : 'good') + '">' + esc(c.band) + '</span>') + '</p></div>' +
        '<div class="card sd-result ' + (c.score >= 19 ? 'severe' : c.score >= 10 ? 'moderate' : c.answered ? 'mild' : '') + '"><h3>Result</h3>' +
        '<label class="small" for="wdNote">Chart line (copy, then paste where you document; add nothing that identifies the patient)</label><textarea class="input" id="wdNote" rows="5" style="font-family:ui-monospace,Menlo,monospace;font-size:.85rem">' + esc(alcoholNote()) + '</textarea>' +
        '<div class="row" style="margin-top:8px"><button class="btn sm primary" data-copy="wdNote">Copy chart line</button><button class="btn sm" data-sub="treat">Treat →</button><button class="btn sm ghost" id="wdReset">Clear scores</button></div></div>';
    } else if (sub === 'treat') {
      const r = d.ALC_REF;
      body += ref(r.course) + ref(r.ddx) + ref(r.risk) + ref(r.care) + ref(r.thiamine) + ref(r.benzo) + ref(r.pheno) + ref(r.resistant) + ref(r.adjunct) + ref(r.aud) + ref(r.patho) +
        '<div class="card"><h3>Next</h3><div class="row"><a class="btn sm" href="#/psych/sud?s=alcohol">AUD screener and brief intervention</a><button class="btn sm" data-tab="special">Liver, older adults, pregnancy</button><button class="btn sm" data-tab="agitation">The agitated patient</button></div></div>';
    } else {
      body += '<div class="card"><h3>Explain withdrawal and its treatment</h3><p class="small muted">Plain language for the patient and the family. Say the Tagalog line, then check understanding.</p>' + lines(d.ALC_EXPLAIN, showEn) + '</div>' +
        '<div class="card"><h3>Study the phrases</h3><div class="row"><a class="btn sm" href="#/psych/s/wd-alcohol">Phrase section: alcohol withdrawal</a><a class="btn sm" href="#/psych/case/mang-ben-etoh">Case simulation: alcohol withdrawal</a><a class="btn sm" href="#/psych/handout?s=wd-alcohol">Handout</a></div></div>';
    }
    return body;
  }

  function cannabis(showEn) {
    const d = D(), sub = st.sub.cannabis;
    let body = pills([['assess', 'Assess'], ['treat', 'Treat'], ['explain', 'Explain to the patient']], sub, 'sub');
    if (sub === 'assess') {
      const c = canScore();
      body += '<div class="card"><h3>Ask</h3>' + lines(d.CAN_ASK, showEn) + '</div>' +
        '<div class="card"><h3>The seven symptoms (criterion B: 3 or more within about 1 week)</h3><p class="small muted">Tap Oo or Hindi after each answer.</p>' +
        d.CAN_CRIT.map((cr) => { const a = st.can[cr.n]; return '<div class="sd-crit' + (a === true ? ' yes' : a === false ? ' no' : '') + '"><div class="sd-num">' + cr.n + '</div><div class="sd-body">' + line(cr, showEn) +
          '<div class="seg sd-ans" role="group" aria-label="Symptom ' + cr.n + '"><button class="' + (a === true ? 'on' : '') + '" data-can="' + cr.n + '" data-v="1">Oo</button><button class="' + (a === false ? 'on' : '') + '" data-can="' + cr.n + '" data-v="0">Hindi</button></div></div></div>'; }).join('') +
        '<div class="sd-group">Criteria C and D</div>' + lines(d.CAN_CD, showEn) +
        '<p><b>' + c.n + '/7</b>' + (c.answered < c.total ? ' <span class="small muted">(' + (c.total - c.answered) + ' not yet answered)</span>' : ' · <span class="pill ' + (c.meets ? 'warn' : 'good') + '">' + (c.meets ? 'meets criterion B' : 'below threshold') + '</span>') + '</p></div>' +
        '<div class="card"><h3>Is it CHS instead?</h3><p class="small muted">Cyclic vomiting during ongoing heavy use, relieved by hot showers, is cannabinoid hyperemesis syndrome, not withdrawal.</p>' + lines(d.CHS_ASK, showEn) + '</div>' +
        '<div class="card sd-result ' + (c.meets ? 'moderate' : c.answered ? 'mild' : '') + '"><h3>Result</h3><label class="small" for="wdCanNote">Chart line (nothing identifying)</label><textarea class="input" id="wdCanNote" rows="4" style="font-family:ui-monospace,Menlo,monospace;font-size:.85rem">' + esc(cannabisNote()) + '</textarea>' +
        '<div class="row" style="margin-top:8px"><button class="btn sm primary" data-copy="wdCanNote">Copy chart line</button><button class="btn sm" data-sub="treat">Treat →</button><button class="btn sm ghost" id="wdReset">Clear answers</button></div></div>';
    } else if (sub === 'treat') {
      const r = d.CAN_REF;
      body += ref(r.dx) + ref(r.course) + ref(r.mgmt) + ref(r.chs) + ref(r.comorb) + ref(r.drugs) +
        '<div class="card"><h3>Next</h3><div class="row"><a class="btn sm" href="#/psych/sud?s=cannabis">CUD screener and brief intervention</a><button class="btn sm" data-tab="agitation">The agitated patient</button></div></div>';
    } else {
      body += '<div class="card"><h3>Explain the time course</h3><p class="small muted">Psychoeducation is itself a treatment: say what to expect and when it ends.</p>' + lines(d.CAN_EXPLAIN, showEn) + '</div>' +
        '<div class="card"><h3>Study the phrases</h3><div class="row"><a class="btn sm" href="#/psych/s/wd-cannabis">Phrase section: cannabis withdrawal and CHS</a><a class="btn sm" href="#/psych/handout?s=wd-cannabis">Handout</a></div></div>';
    }
    return body;
  }

  function agitation(showEn) {
    const d = D(), sub = st.sub.agitation, r = d.AGIT_REF;
    let body = pills([['steps', 'Steps and what to say'], ['meds', 'Medication'], ['restraint', 'Safety and restraint']], sub, 'sub');
    if (sub === 'steps') body += ref(r.principles) + ref(r.screen) + ref(r.env) + ref(r.beta) +
      '<div class="card"><h3>What to say (Project BETA domains in Tagalog)</h3><p class="small muted">The full bedside checklist with the hospital form (MMH-NUR-04-112-01), audio drill and practice case is in De-escalation.</p>' + d.AGIT_LINES.map((p) => '<div class="sd-line"><div class="sd-tl"><span class="pill" style="margin-right:6px">' + (p.d === 11 ? 'restraint' : 'domain ' + p.d) + '</span>' + esc(p.tl) + (p.n ? '<div class="sd-n">' + esc(p.n) + '</div>' : '') + (showEn ? '<div class="sd-en">' + esc(p.en) + '</div>' : '') + '</div>' + App.sayBtn(p.tl) + '</div>').join('') +
      '<div class="row" style="margin-top:10px"><a class="btn sm primary" href="#/psych/deesc">Open the de-escalation checklist</a><a class="btn sm" href="#/psych/s/wd-agitation">Phrase section</a></div></div>' + ref(r.scales);
    else if (sub === 'meds') body += ref(r.cause) + ref(r.meds) + ref(r.trials);
    else body += ref(r.safety) + ref(r.restraint);
    return body;
  }

  function special(showEn) {
    const d = D(), sub = st.sub.special;
    const sp = d.SPECIAL.find((x) => x.id === sub) || d.SPECIAL[0];
    return pills(d.SPECIAL.map((x) => [x.id, x.h]), sp.id, 'sub') + ref(sp) +
      '<div class="card"><h3>Ask</h3>' + lines(d.SPECIAL_ASK, showEn) + '</div>';
  }

  function cases(showEn) {
    const d = D(), sub = st.sub.cases;
    const c = d.CASES.find((x) => x.id === sub) || d.CASES[0];
    const open = st.caseOpen === c.id;
    return pills(d.CASES.map((x) => [x.id, x.title]), c.id, 'sub') +
      '<div class="card"><span class="eyebrow">Practice case</span><h3>' + esc(c.title) + '</h3><p>' + esc(c.stem) + '</p><p><b>' + esc(c.q) + '</b></p>' +
      (open ? '<ul class="wd-ul">' + c.a.map((x) => '<li>' + x + '</li>').join('') + '</ul><div class="sd-group">Say it in Tagalog</div><div class="sd-line"><div class="sd-tl">' + esc(c.tl) + '</div>' + App.sayBtn(c.tl.replace(/^[^"]*"/, '').replace(/"[^"]*$/, '')) + '</div><button class="btn sm ghost" data-case="">Hide answer</button>' : '<button class="btn sm primary" data-case="' + c.id + '">Show the key answers</button>') + '</div>';
  }

  function quick() {
    const q = D().QUICK;
    return '<div class="grid">' + [['Alcohol withdrawal', q.alcohol], ['Cannabis withdrawal', q.cannabis], ['The agitated patient', q.agitation]].map(([h, l]) => '<div class="card"><h3>' + h + '</h3><ul class="wd-ul">' + l.map((x) => '<li>' + x + '</li>').join('') + '</ul></div>').join('') +
      '<div class="card"><h3>Special populations</h3><ul class="wd-ul"><li><b>Cirrhosis:</b> lorazepam or oxazepam by symptoms; avoid phenobarbital; tell withdrawal apart from HE (ammonia does not decide it); acamprosate or baclofen for AUD.</li><li><b>Older adults:</b> short-acting benzodiazepines for withdrawal (a Beers exception); antipsychotics at a quarter to half the adult dose; non-drug delirium measures first.</li><li><b>Pregnancy:</b> admit if CIWA-Ar ≥10; benzodiazepines (lorazepam near term); no valproate; never restrain supine or prone after 20 weeks.</li><li><b>Adolescents:</b> alcohol withdrawal is rare; CUD treatment is MET/CBT plus contingency management and family therapy; pediatric weight-based dosing; holding counts as restraint.</li></ul></div></div>';
  }

  function nurse(showEn) {
    const d = D(), c = ciwaScore();
    return '<div class="notice">' + esc(d.NURSE.notice) + '</div>' +
      d.NURSE.steps.map((s, i) => '<div class="card sd-step"><h3>' + (i + 1) + '. ' + esc(s.title) + '</h3>' + lines(s.lines, showEn) + '</div>').join('') +
      '<div class="card"><h3>Score the CIWA-Ar</h3><p class="small muted">Ask the six question items, observe tremor, sweats and agitation, then tap a score. The total and band go in the chart line below.</p>' +
      d.CIWA.items.map((it) => { const v = st.ciwa[it.k]; return '<div class="sd-crit' + (v > 0 ? ' yes' : v === 0 ? ' no' : '') + '"><div class="sd-num">' + esc(it.k) + '</div><div class="sd-body"><div class="small" style="font-weight:600">' + esc(it.name) + (it.obs ? ' <span class="pill">observe</span>' : '') + '</div>' + line(it, showEn) +
        '<div class="sd-opts">' + Array.from({ length: it.max + 1 }, (_, n) => '<button class="pill' + (v === n ? ' lv' : '') + '" data-ck="' + it.k + '" data-v="' + n + '" title="' + esc(it.a[n] || '') + '">' + n + '</button>').join('') + '</div></div></div>'; }).join('') +
      '<p><b>CIWA-Ar ' + c.score + '/67</b>' + (c.answered < c.total ? ' <span class="small muted">(' + (c.total - c.answered) + ' items not yet scored)</span>' : ' · <span class="pill ' + (c.score >= 19 ? 'bad' : c.score >= 10 ? 'warn' : 'good') + '">' + esc(c.band) + '</span>') + '</p>' +
      '<label class="small" for="wdNote">Chart line (nothing identifying)</label><textarea class="input" id="wdNote" rows="3" style="font-family:ui-monospace,Menlo,monospace;font-size:.85rem">' + esc(alcoholNote()) + '</textarea><div class="row" style="margin-top:8px"><button class="btn sm primary" data-copy="wdNote">Copy chart line</button><button class="btn sm ghost" id="wdReset">Clear scores</button></div></div>' +
      '<div class="notice info"><b>Escalate.</b> ' + esc(d.NURSE.escalate) + '</div>' +
      '<div class="card"><h3>Agitation: the first steps</h3><ul class="wd-ul">' + d.QUICK.agitation.map((x) => '<li>' + x + '</li>').join('') + '</ul><div class="row"><a class="btn sm primary" href="#/psych/deesc">De-escalation checklist (MMH-NUR-04-112-01)</a></div></div>';
  }

  function render(el) {
    const d = D();
    const role = S().settings.role || 'resident';
    const showEn = S().settings.sudEn !== false;
    const TABS = [['alcohol', 'Alcohol'], ['cannabis', 'Cannabis'], ['agitation', 'Agitation'], ['special', 'Special populations'], ['cases', 'Cases'], ['quick', 'Quick card']];
    const body = role === 'nurse' ? nurse(showEn) : { alcohol, cannabis, agitation, special, cases, quick }[st.tab](showEn);
    el.innerHTML = crumb([['Psychiatry', '#/psych'], ['Withdrawal and agitation']]) + '<span class="eyebrow">Ward · ED · ICU</span><h1>Withdrawal and agitation</h1>' +
      '<p class="muted">Alcohol withdrawal (risk, CIWA-Ar, benzodiazepines, phenobarbital, thiamine), cannabis withdrawal and cannabinoid hyperemesis, and the agitated patient from de-escalation to restraint, with special populations and practice cases. Patient-facing lines are in Tagalog with audio. Scores stay on this screen and are cleared when you leave.</p>' +
      (d.REVIEWED ? '' : '<div class="notice" style="margin-bottom:12px">' + esc(d.draftNotice) + '</div>') +
      '<div class="row" style="flex-wrap:wrap;gap:10px;margin-bottom:12px"><div class="seg" role="group" aria-label="Role"><button class="' + (role === 'resident' ? 'on' : '') + '" data-role="resident">Resident</button><button class="' + (role === 'nurse' ? 'on' : '') + '" data-role="nurse">Nurse</button></div>' +
      '<label class="ho-chk"><input type="checkbox" id="wdEn"' + (showEn ? ' checked' : '') + '> <span>English</span></label></div>' +
      (role === 'resident' ? '<div class="sd-chips" role="tablist">' + TABS.map(([id, t]) => '<button class="pill' + (id === st.tab ? ' lv' : '') + '" data-tab="' + id + '" role="tab" aria-selected="' + (id === st.tab) + '">' + esc(t) + '</button>').join('') + '</div>' : '') +
      body + '<div class="notice info" style="margin-top:12px">' + esc(d.source) + '</div>';

    const re = () => render(el);
    el.querySelectorAll('[data-tab]').forEach((b) => (b.onclick = () => { st.tab = b.dataset.tab; re(); window.scrollTo(0, 0); }));
    el.querySelectorAll('[data-sub]').forEach((b) => (b.onclick = () => { st.sub[st.tab] = b.dataset.sub; re(); }));
    el.querySelectorAll('[data-role]').forEach((b) => (b.onclick = () => { S().settings.role = b.dataset.role; App.save(); re(); }));
    el.querySelectorAll('[data-pt]').forEach((b) => (b.onclick = () => { const v = b.dataset.pt === '1'; st.pawssT = st.pawssT === v ? null : v; re(); }));
    el.querySelectorAll('[data-pw]').forEach((b) => (b.onchange = () => { st.pawss[+b.dataset.pw] = b.checked; re(); }));
    el.querySelectorAll('[data-ck]').forEach((b) => (b.onclick = () => { const k = b.dataset.ck, v = +b.dataset.v; if (st.ciwa[k] === v) delete st.ciwa[k]; else st.ciwa[k] = v; re(); }));
    el.querySelectorAll('[data-can]').forEach((b) => (b.onclick = () => { const n = +b.dataset.can, v = b.dataset.v === '1'; if (st.can[n] === v) delete st.can[n]; else st.can[n] = v; re(); }));
    el.querySelectorAll('[data-case]').forEach((b) => (b.onclick = () => { st.caseOpen = b.dataset.case || null; re(); }));
    el.querySelectorAll('[data-copy]').forEach((b) => (b.onclick = () => { const t = el.querySelector('#' + b.dataset.copy); (navigator.clipboard ? navigator.clipboard.writeText(t.value) : Promise.reject()).then(() => App.toast('Chart line copied.'), () => { t.select(); App.toast('Text selected. Copy it with your device\'s copy command.'); }); App.activity(5); }));
    const on = (id, ev, fn) => { const x = el.querySelector(id); if (x) x[ev] = fn; };
    on('#wdEn', 'onchange', (e) => { S().settings.sudEn = e.target.checked; App.save(); re(); });
    on('#wdReset', 'onclick', () => { const keep = { tab: st.tab, sub: st.sub }; st = Object.assign(fresh(), keep); re(); });
    on('#wdHours', 'onchange', (e) => { st.hours = e.target.value; const t = el.querySelector('#wdNote'); if (t) t.value = alcoholNote(); });
  }

  V.withdrawal = (el, p, q) => {
    if (!st) st = fresh();
    if (q && q.t && ['alcohol', 'cannabis', 'agitation', 'special', 'cases', 'quick'].includes(q.t)) st.tab = q.t;
    render(el);
  };
  window.addEventListener('hashchange', () => { if (!location.hash.startsWith('#/psych/withdrawal')) st = null; });
})();
