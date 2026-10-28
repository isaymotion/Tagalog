/* Mood episode checker: tap through the DSM-5-TR major depressive and manic/hypomanic episode criteria in Tagalog,
   with duration, impairment and specifiers, plus the PHQ-9 and MDQ. Answers live only in memory for this page. */
(function () {
  const { esc } = App;
  const V = App.views;
  const S = () => App.state;
  const D = () => window.PSYCH_MOOD;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';

  let st = null;
  const fresh = () => ({ tab: 'mde', mde: {}, mdeDur: '', mdeImp: '', mdeSpec: {}, gate: '', man: {}, manDur: '', manHosp: false, manPsy: false, manSub: false, manSpec: {}, phq: {}, phqImp: '', mdq: {}, mdqSame: '', mdqProb: '' });

  const line = (q, showEn) => '<div class="sd-line"><div class="sd-tl">' + esc(q.tl) + (q.n ? '<div class="sd-n">' + esc(q.n) + '</div>' : '') + (showEn ? '<div class="sd-en">' + esc(q.en) + '</div>' : '') + '</div>' + App.sayBtn(q.tl) + '</div>';
  const yn = (key, n, a) => '<div class="seg sd-ans" role="group"><button class="' + (a === true ? 'on' : '') + '" data-yn="' + key + '" data-n="' + n + '" data-v="1" aria-pressed="' + (a === true) + '">Oo</button><button class="' + (a === false ? 'on' : '') + '" data-yn="' + key + '" data-n="' + n + '" data-v="0" aria-pressed="' + (a === false) + '">Hindi</button></div>';
  const crit = (key, c, showEn, a) => '<div class="sd-crit' + (a === true ? ' yes' : a === false ? ' no' : '') + (c.risk ? ' sd-risk' : '') + '"><div class="sd-num">' + esc(c.b || c.n) + '</div><div class="sd-body"><div class="small muted">' + (c.gate ? 'Gate · ' : '') + esc(c.en) + '</div>' + line(c.q, showEn) + yn(key, c.n, a) + '</div></div>';
  const sel = (id, val, opts) => '<select class="input" id="' + id + '" style="width:auto;max-width:100%;min-height:36px">' + opts.map(([v, t]) => '<option value="' + v + '"' + (val === v ? ' selected' : '') + '>' + esc(t) + '</option>').join('') + '</select>';
  const chk = (key, id, label, on) => '<label class="ho-chk"><input type="checkbox" data-spec="' + key + '" data-id="' + id + '"' + (on ? ' checked' : '') + '> <span>' + esc(label) + '</span></label>';

  function mdeResult() {
    const d = D(); const met = d.mde.filter((c) => st.mde[c.n] === true).map((c) => c.n);
    const gate = met.includes(1) || met.includes(2), n = met.length;
    const answered = Object.keys(st.mde).length;
    let verdict, ok = false;
    if (!gate && answered >= 2 && st.mde[1] === false && st.mde[2] === false) verdict = 'Gate not met: no depressed mood and no loss of interest, so not a major depressive episode whatever the count.';
    else if (gate && n >= 5) {
      if (st.mdeDur === 'lt2w') verdict = 'Symptoms present but for less than two weeks: criteria for a major depressive episode are not met yet.';
      else if (st.mdeImp === 'no') verdict = 'Five or more symptoms but no significant distress or impairment: the episode criteria are not met.';
      else { ok = true; verdict = 'Major depressive episode: criteria met (' + n + '/9 with a gate symptom' + (st.mdeDur === 'ge2w' ? ', two weeks or more' : '') + ').'; }
    } else verdict = n + '/9 so far' + (gate ? ' (gate met)' : ' (no gate symptom yet)') + '; five with a gate symptom are needed.';
    const specs = Object.keys(st.mdeSpec).filter((k) => st.mdeSpec[k]);
    const note = [ok ? 'Major depressive episode, criteria met: ' + met.map((k) => k + ' ' + d.mde[k - 1].en.toLowerCase()).join('; ') + '.' : 'Major depressive episode: criteria not met (' + n + '/9' + (gate ? '' : ', no gate symptom') + ').',
      specs.length ? 'Specifiers/features: ' + specs.join(', ') + '.' : '',
      met.includes(9) ? 'Item 9 positive: suicide risk assessment done/needed.' : '',
      phqLine()].filter(Boolean).join('\n');
    return { met, n, gate, ok, verdict, note, answered };
  }
  function phqLine() {
    const d = D(); const ans = d.phq9.items.filter((_, i) => st.phq[i] != null).length;
    if (!ans) return '';
    const score = d.phq9.items.reduce((t, _, i) => t + (st.phq[i] || 0), 0);
    return 'PHQ-9 ' + score + '/27' + (ans < 9 ? ' (' + (9 - ans) + ' items unanswered)' : ', ' + d.phq9.bands(score)) + (st.phqImp ? '; difficulty: ' + st.phqImp : '') + '.';
  }
  function manResult() {
    const d = D(); const met = d.manic.filter((c) => st.man[c.n] === true).map((c) => c.n);
    const n = met.length, need = st.gate === 'irritable' ? 4 : 3;
    let verdict = '', kind = '';
    if (!st.gate) verdict = 'Choose the gate first: elevated/expansive or irritable mood with increased energy.';
    else if (st.gate === 'none') verdict = 'No distinct period of elevated or irritable mood: not a manic or hypomanic episode.';
    else if (n < need) verdict = n + '/7 so far; ' + need + ' are needed' + (st.gate === 'irritable' ? ' when the mood is only irritable' : '') + '.';
    else if (st.manSub) verdict = 'Symptoms present but during substance or medication use: consider a substance/medication-induced episode (an episode that persists beyond the physiological effect, or that emerged on an antidepressant and persists, can still count).';
    else if (st.manHosp || st.manPsy || st.manDur === 'ge1w') { kind = 'manic'; verdict = 'Manic episode: criteria met (' + n + '/7' + (st.manHosp ? ', hospitalized' : st.manPsy ? ', psychotic features' : ', one week or more') + ').'; }
    else if (st.manDur === 'd4to6') { kind = 'hypomanic'; verdict = 'Hypomanic episode: criteria met (' + n + '/7, four to six days, no hospitalization, no psychosis). Check that the change was observable by others and not severe enough to impair function.'; }
    else if (st.manDur === 'lt4d') verdict = 'Fewer than four days: below the threshold for a hypomanic episode (consider short-duration hypomania, other specified bipolar).';
    else verdict = n + '/7 met; set the duration to decide between mania and hypomania.';
    const specs = Object.keys(st.manSpec).filter((k) => st.manSpec[k]);
    const note = [kind ? kind.charAt(0).toUpperCase() + kind.slice(1) + ' episode, criteria met (' + (st.gate === 'irritable' ? 'irritable' : 'elevated/expansive') + ' mood; ' + met.map((k) => d.manic[k - 1].en.toLowerCase()).join('; ') + ').' : 'Manic/hypomanic episode: criteria not met.',
      specs.length ? 'Specifiers/features: ' + specs.join(', ') + '.' : '', mdqLine()].filter(Boolean).join('\n');
    return { met, n, need, kind, verdict, note };
  }
  function mdqLine() {
    const d = D(); const ans = d.mdq.items.filter((_, i) => st.mdq[i] != null).length;
    if (!ans) return '';
    const yes = d.mdq.items.filter((_, i) => st.mdq[i] === true).length;
    const pos = yes >= 7 && st.mdqSame === 'yes' && (st.mdqProb === 'moderate' || st.mdqProb === 'serious');
    return 'MDQ ' + yes + '/13 yes' + (ans < 13 ? ' (' + (13 - ans) + ' unanswered)' : '') + (st.mdqSame ? ', same period: ' + st.mdqSame : '') + (st.mdqProb ? ', problem: ' + st.mdqProb : '') + ' → ' + (ans === 13 && st.mdqSame && st.mdqProb ? (pos ? 'positive screen' : 'negative screen') : 'incomplete') + '.';
  }

  const copyBtn = (id) => '<button class="btn sm primary" data-copy="' + id + '">Copy chart line</button>';

  function render(el) {
    const d = D(); const showEn = S().settings.moodEn !== false;
    let body = '';
    if (st.tab === 'mde') {
      const r = mdeResult();
      body = '<div class="card"><h3>Depressed mood: gate, then SIGECAPS</h3><p class="small muted">Nearly every day for the same two-week period. One of the two gate symptoms plus five of nine in total.</p>' +
        d.mde.map((c) => crit('mde', c, showEn, st.mde[c.n])).join('') + '</div>' +
        '<div class="card"><h3>Duration, impairment, features</h3>' + line(d.extra.mde[0], showEn) + line(d.extra.mde[1], showEn) +
        '<div class="sd-spec"><label class="ho-chk"><span>Duration</span> ' + sel('mdeDur', st.mdeDur, [['', '—'], ['ge2w', 'Two weeks or more'], ['lt2w', 'Less than two weeks']]) + '</label>' +
        '<label class="ho-chk"><span>Distress or impairment</span> ' + sel('mdeImp', st.mdeImp, [['', '—'], ['yes', 'Yes'], ['no', 'No']]) + '</label></div>' +
        '<h3 style="margin-top:12px">Ask every depressed patient</h3>' + line(d.extra.mde[2], showEn) + '<p class="small muted">If yes, open the <a href="#" data-tab-link="man">mania tab</a> or the MDQ before prescribing an antidepressant.</p>' +
        '<h3 style="margin-top:12px">Features</h3>' + line(d.extra.mde[3], showEn) + line(d.extra.mde[4], showEn) + line(d.extra.mde[5], showEn) + line(d.extra.mde[6], showEn) +
        '<div class="sd-spec">' + [['with psychotic features', 'With psychotic features'], ['with mixed features', 'With mixed features'], ['with melancholic features', 'With melancholic features (early waking, worse in the morning, marked retardation or agitation, anhedonia)'], ['with peripartum onset', 'With peripartum onset'], ['with anxious distress', 'With anxious distress'], ['bereavement context', 'Began after a death (grief considered)']].map(([id, l]) => chk('mde', id, l, st.mdeSpec[id])).join('') + '</div></div>' +
        '<div class="card sd-result ' + (r.ok ? 'moderate' : '') + '"><div class="row" style="justify-content:space-between;flex-wrap:wrap"><h3 style="margin:0">Result</h3><span class="pill ' + (r.ok ? 'warn' : '') + '">' + r.n + '/9' + (r.gate ? ' · gate' : '') + '</span></div><p>' + esc(r.verdict) + '</p>' +
        (r.answered < 9 ? '<p class="small muted">' + (9 - r.answered) + ' criteria not yet answered.</p>' : '') +
        (r.met.includes(9) ? '<div class="notice"><b>Item 9 is positive.</b> Go to <a href="#/psych/s/suicide">suicide risk</a> now: ideation, plan, intent, means, past attempts, protective factors.</div>' : '') +
        '<label class="small" for="mdeNote">Chart line (add nothing that identifies the patient)</label><textarea class="input" id="mdeNote" rows="4" style="font-family:ui-monospace,Menlo,monospace;font-size:.85rem">' + esc(r.note) + '</textarea>' +
        '<div class="row" style="margin-top:8px">' + copyBtn('mdeNote') + '<button class="btn sm" data-tab="phq">PHQ-9 →</button><button class="btn sm ghost" id="mdReset">Clear answers</button></div></div>';
    } else if (st.tab === 'man') {
      const r = manResult();
      body = '<div class="card"><h3>Gate: a distinct period of elevated, expansive, or irritable mood with increased energy</h3>' +
        d.manicGate.map((g) => '<div class="sd-crit' + (st.gate === g.id ? ' yes' : '') + '"><div class="sd-num">A</div><div class="sd-body"><div class="small muted">' + esc(g.en) + '</div>' + line(g.q, showEn) + '<div class="seg sd-ans" role="group"><button class="' + (st.gate === g.id ? 'on' : '') + '" data-gate="' + g.id + '">Oo</button></div></div></div>').join('') +
        line(d.extra.manic[0], showEn) + '<div class="row" style="margin-top:8px"><button class="btn sm ' + (st.gate === 'none' ? 'primary' : '') + '" data-gate="none">Hindi: no such period</button></div></div>' +
        '<div class="card"><h3>DIGFAST</h3><p class="small muted">Three of seven, or four if the mood was only irritable, present to a significant degree and a noticeable change from usual behavior.</p>' +
        d.manic.map((c) => crit('man', c, showEn, st.man[c.n])).join('') + '</div>' +
        '<div class="card"><h3>Duration, severity, exclusions</h3>' + line(d.extra.manic[1], showEn) + line(d.extra.manic[2], showEn) + line(d.extra.manic[3], showEn) + line(d.extra.manic[4], showEn) +
        '<div class="sd-spec"><label class="ho-chk"><span>Duration</span> ' + sel('manDur', st.manDur, [['', '—'], ['ge1w', 'One week or more'], ['d4to6', 'Four to six days'], ['lt4d', 'Less than four days']]) + '</label>' +
        '<label class="ho-chk"><input type="checkbox" id="manHosp"' + (st.manHosp ? ' checked' : '') + '> <span>Hospitalized or marked impairment</span></label>' +
        '<label class="ho-chk"><input type="checkbox" id="manPsy"' + (st.manPsy ? ' checked' : '') + '> <span>Psychotic features</span></label>' +
        '<label class="ho-chk"><input type="checkbox" id="manSub"' + (st.manSub ? ' checked' : '') + '> <span>During substance, medication, or medical cause</span></label></div>' +
        '<h3 style="margin-top:12px">Features</h3>' + line(d.extra.manic[5], showEn) +
        '<div class="sd-spec">' + [['with mixed features', 'With mixed features'], ['with psychotic features', 'With psychotic features'], ['with anxious distress', 'With anxious distress'], ['with rapid cycling', 'Rapid cycling (four or more episodes in a year)'], ['with peripartum onset', 'With peripartum onset']].map(([id, l]) => chk('man', id, l, st.manSpec[id])).join('') + '</div></div>' +
        '<div class="card sd-result ' + (r.kind === 'manic' ? 'severe' : r.kind === 'hypomanic' ? 'moderate' : '') + '"><div class="row" style="justify-content:space-between;flex-wrap:wrap"><h3 style="margin:0">Result</h3><span class="pill ' + (r.kind ? 'warn' : '') + '">' + r.n + '/7 · need ' + r.need + '</span></div><p>' + esc(r.verdict) + '</p>' +
        '<label class="small" for="manNote">Chart line (add nothing that identifies the patient)</label><textarea class="input" id="manNote" rows="4" style="font-family:ui-monospace,Menlo,monospace;font-size:.85rem">' + esc(r.note) + '</textarea>' +
        '<div class="row" style="margin-top:8px">' + copyBtn('manNote') + '<button class="btn sm" data-tab="mdq">MDQ →</button><button class="btn sm ghost" id="mdReset">Clear answers</button></div></div>';
    } else if (st.tab === 'phq') {
      const q = d.phq9; const score = q.items.reduce((t, _, i) => t + (st.phq[i] || 0), 0); const ans = q.items.filter((_, i) => st.phq[i] != null).length;
      body = '<div class="card"><h3>' + esc(q.title) + '</h3><p class="small muted">' + esc(q.note) + '</p>' + line(q.stem, showEn) +
        q.items.map((it, i) => '<div class="sd-crit' + (st.phq[i] != null ? ' yes' : '') + (it.risk ? ' sd-risk' : '') + '"><div class="sd-num">' + (i + 1) + '</div><div class="sd-body">' + line(it, showEn) + '<div class="sd-opts">' + q.opts.map((o) => '<button class="pill' + (st.phq[i] === o[1] ? ' lv' : '') + '" data-phq="' + i + '" data-pts="' + o[1] + '">' + esc(o[0]) + '</button>').join('') + '</div></div></div>').join('') +
        '<div class="sd-crit"><div class="sd-num">+</div><div class="sd-body">' + line(q.impairment, showEn) + '<div class="sd-opts">' + q.impairment.opts.map((o) => '<button class="pill' + (st.phqImp === o ? ' lv' : '') + '" data-phqimp="' + esc(o) + '">' + esc(o) + '</button>').join('') + '</div></div></div>' +
        '<div class="sd-result card" style="margin-top:12px"><p><b>PHQ-9:</b> ' + score + '/27' + (ans < 9 ? ' <span class="small muted">(' + (9 - ans) + ' unanswered)</span>' : ' · ' + esc(q.bands(score))) + '</p>' + (st.phq[8] > 0 ? '<div class="notice"><b>Item 9 is positive.</b> Assess <a href="#/psych/s/suicide">suicide risk</a> now.</div>' : '') +
        '<textarea class="input" id="phqNote" rows="2" style="font-family:ui-monospace,Menlo,monospace;font-size:.85rem">' + esc(phqLine()) + '</textarea><div class="row" style="margin-top:8px">' + copyBtn('phqNote') + '<button class="btn sm" data-tab="mde">← Back to the criteria</button></div></div></div>';
    } else if (st.tab === 'mdq') {
      const q = d.mdq;
      body = '<div class="card"><h3>' + esc(q.title) + '</h3><p class="small muted">' + esc(q.note) + '</p>' + line(q.stem, showEn) +
        q.items.map((it, i) => '<div class="sd-crit' + (st.mdq[i] === true ? ' yes' : st.mdq[i] === false ? ' no' : '') + '"><div class="sd-num">' + (i + 1) + '</div><div class="sd-body">' + line(it, showEn) + yn('mdq', i, st.mdq[i]) + '</div></div>').join('') +
        '<div class="sd-crit"><div class="sd-num">+</div><div class="sd-body">' + line(q.same, showEn) + '<div class="seg sd-ans"><button class="' + (st.mdqSame === 'yes' ? 'on' : '') + '" data-same="yes">Oo</button><button class="' + (st.mdqSame === 'no' ? 'on' : '') + '" data-same="no">Hindi</button></div></div></div>' +
        '<div class="sd-crit"><div class="sd-num">+</div><div class="sd-body">' + line(q.problem, showEn) + '<div class="sd-opts">' + [['none', q.problem.opts[0]], ['minor', q.problem.opts[1]], ['moderate', q.problem.opts[2]], ['serious', q.problem.opts[3]]].map(([v, t]) => '<button class="pill' + (st.mdqProb === v ? ' lv' : '') + '" data-prob="' + v + '">' + esc(t) + '</button>').join('') + '</div></div></div>' +
        '<div class="sd-result card" style="margin-top:12px"><p><b>' + esc(mdqLine() || 'MDQ: not started.') + '</b></p><textarea class="input" id="mdqNote" rows="2" style="font-family:ui-monospace,Menlo,monospace;font-size:.85rem">' + esc(mdqLine()) + '</textarea><div class="row" style="margin-top:8px">' + copyBtn('mdqNote') + '<button class="btn sm" data-tab="man">← Back to DIGFAST</button></div></div></div>';
    }

    el.innerHTML = crumb([['Psychiatry', '#/psych'], ['Mood episode']]) + '<span class="eyebrow">Checker · DSM-5-TR</span><h1>Mood episode</h1>' +
      '<p class="muted">Tap through the criteria for a major depressive episode (depressed mood + SIGECAPS) and a manic or hypomanic episode (elevated, expansive or irritable mood + DIGFAST) in Tagalog, then score the PHQ-9 or MDQ. Answers stay on this screen and are cleared when you leave.</p>' +
      '<div class="row" style="flex-wrap:wrap;gap:10px;margin-bottom:12px"><div class="seg" role="group" aria-label="Section">' + [['mde', 'Depressed mood'], ['man', 'Elevated / irritable'], ['phq', 'PHQ-9'], ['mdq', 'MDQ']].map(([k, t]) => '<button class="' + (st.tab === k ? 'on' : '') + '" data-tab="' + k + '">' + t + '</button>').join('') + '</div>' +
      '<label class="ho-chk"><input type="checkbox" id="mdEn"' + (showEn ? ' checked' : '') + '> <span>English</span></label></div>' + body +
      '<div class="notice info" style="margin-top:12px">Criteria paraphrased from DSM-5-TR (depressive and bipolar disorders). Episode criteria are one step; the diagnosis (major depressive disorder, bipolar I or II, other) also needs the history of past episodes and the exclusions. Tagalog lines are practice phrasings, not validated translations; the PHQ-9 and MDQ here are paraphrases for training.</div>';

    el.querySelectorAll('[data-tab]').forEach((b) => (b.onclick = () => { st.tab = b.dataset.tab; render(el); window.scrollTo(0, 0); }));
    el.querySelectorAll('[data-tab-link]').forEach((b) => (b.onclick = (e) => { e.preventDefault(); st.tab = b.dataset.tabLink; render(el); window.scrollTo(0, 0); }));
    el.querySelectorAll('[data-yn]').forEach((b) => (b.onclick = () => { const k = b.dataset.yn, n = +b.dataset.n, v = b.dataset.v === '1'; const o = st[k]; if (o[n] === v) delete o[n]; else o[n] = v; render(el); }));
    el.querySelectorAll('[data-gate]').forEach((b) => (b.onclick = () => { st.gate = st.gate === b.dataset.gate ? '' : b.dataset.gate; render(el); }));
    el.querySelectorAll('[data-spec]').forEach((b) => (b.onchange = () => { st[b.dataset.spec + 'Spec'][b.dataset.id] = b.checked; render(el); }));
    el.querySelectorAll('[data-phq]').forEach((b) => (b.onclick = () => { const i = +b.dataset.phq, p = +b.dataset.pts; if (st.phq[i] === p) delete st.phq[i]; else st.phq[i] = p; render(el); }));
    el.querySelectorAll('[data-phqimp]').forEach((b) => (b.onclick = () => { st.phqImp = st.phqImp === b.dataset.phqimp ? '' : b.dataset.phqimp; render(el); }));
    el.querySelectorAll('[data-same]').forEach((b) => (b.onclick = () => { st.mdqSame = st.mdqSame === b.dataset.same ? '' : b.dataset.same; render(el); }));
    el.querySelectorAll('[data-prob]').forEach((b) => (b.onclick = () => { st.mdqProb = st.mdqProb === b.dataset.prob ? '' : b.dataset.prob; render(el); }));
    el.querySelectorAll('[data-copy]').forEach((b) => (b.onclick = () => { const t = el.querySelector('#' + b.dataset.copy); (navigator.clipboard ? navigator.clipboard.writeText(t.value) : Promise.reject()).then(() => App.toast('Chart line copied.'), () => { t.select(); App.toast('Text selected. Copy it with your device\'s copy command.'); }); App.activity(5); }));
    const on = (id, ev, fn) => { const x = el.querySelector(id); if (x) x[ev] = fn; };
    on('#mdEn', 'onchange', (e) => { S().settings.moodEn = e.target.checked; App.save(); render(el); });
    on('#mdeDur', 'onchange', (e) => { st.mdeDur = e.target.value; render(el); });
    on('#mdeImp', 'onchange', (e) => { st.mdeImp = e.target.value; render(el); });
    on('#manDur', 'onchange', (e) => { st.manDur = e.target.value; render(el); });
    on('#manHosp', 'onchange', (e) => { st.manHosp = e.target.checked; render(el); });
    on('#manPsy', 'onchange', (e) => { st.manPsy = e.target.checked; render(el); });
    on('#manSub', 'onchange', (e) => { st.manSub = e.target.checked; render(el); });
    on('#mdReset', 'onclick', () => { const tab = st.tab; st = fresh(); st.tab = tab; render(el); });
  }

  V.moodEpisode = (el, p, q) => { if (!st) st = fresh(); if (q && q.t) st.tab = q.t; render(el); };
  window.addEventListener('hashchange', () => { if (!location.hash.startsWith('#/psych/mood')) st = null; });
})();
