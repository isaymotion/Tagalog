/* Substance use screening and brief intervention: Tagalog screener on the DSM-5-TR 11 criteria with severity
   and codes, a guided motivational-interviewing flow, psychoeducation, and a nurse script.
   Screening answers live only in memory for this page; nothing about a patient is saved. */
(function () {
  const { esc, icons } = App;
  const V = App.views;
  const S = () => App.state;
  const D = () => window.PSYCH_SUD;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';

  // Page state (not persisted): chosen substance, criterion answers, specifiers, rulers, plan.
  let st = null;
  const fresh = (subId) => ({ sub: subId || 'betel', ans: {}, scr: {}, female: false, rem: 'none', course: '', ctrl: false, maint: false, imp: '', conf: '', goal: '', start: '', tab: 'screen', mi: 0 });

  const line = (p, sub, showEn) => {
    const tl = D().fill(p.tl, sub);
    return '<div class="sd-line"><div class="sd-tl">' + esc(tl) + (typeof p.n === 'string' && p.n ? '<div class="sd-n">' + esc(p.n) + '</div>' : '') + (showEn ? '<div class="sd-en">' + esc(D().fill(p.en, sub).replace(/\{w\}/g, sub.wen)) + '</div>' : '') + '</div>' + (p.tl.startsWith('(') ? '' : App.sayBtn(tl)) + '</div>';
  };

  function result() {
    const d = D(), sub = d.substances.find((x) => x.id === st.sub);
    const crit = d.criteriaFor(sub), max = crit.length;
    const met = crit.filter((c) => st.ans[c.n] === true).map((c) => c.n);
    const n = met.length, sev = d.severityFor(sub, n);
    const scr = d.screens[sub.id];
    const scrAnswered = scr ? scr.items.filter((_, i) => st.scr[i] != null).length : 0;
    const scrScore = scr ? scr.items.reduce((t, _, i) => t + (st.scr[i] || 0), 0) : 0;
    const scrLine = scr && scrAnswered === scr.items.length ? scr.title.split(' (')[0] + ' ' + scrScore + '/' + scr.items.reduce((t, it) => t + Math.max(...it.opts.map((o) => o[1])), 0) + ', ' + scr.bands(scrScore, st.female) : '';
    const answered = Object.keys(st.ans).length;
    let code = '', label = '';
    if (sev === 'none') { label = 'Below threshold (fewer than ' + (sub.gamble ? 4 : 2) + ' criteria)'; }
    else {
      label = sub.dsm + ', ' + sev;
      if (st.rem === 'early') { label += ', in early remission'; code = sev === 'mild' ? sub.codes.remMild : sub.codes.remModsev; }
      else if (st.rem === 'sustained') { label += ', in sustained remission'; code = sev === 'mild' ? sub.codes.remMild : sub.codes.remModsev; }
      else code = sev === 'mild' ? sub.codes.mild : sub.codes.modsev;
      if (sub.gamble && st.course) label += ', ' + st.course;
      if (st.ctrl) label += ', in a controlled environment';
      if (st.maint && sub.id === 'tobacco') label += ', on maintenance therapy';
    }
    const note = [
      label + (sev === 'none' ? '' : ' (' + n + '/' + max + ' criteria in the past 12 months: ' + met.join(', ') + ')') + (code ? '. ICD-10-CM ' + code : '') + '.',
      sev !== 'none' && met.length ? 'Criteria met: ' + met.map((k) => k + ' ' + crit[k - 1].en.toLowerCase()).join('; ') + '.' : '',
      scrLine ? scrLine + '.' : '',
      st.imp !== '' || st.conf !== '' ? 'Brief intervention: importance ' + (st.imp === '' ? '—' : st.imp + '/10') + ', confidence ' + (st.conf === '' ? '—' : st.conf + '/10') + '.' : '',
      st.goal ? 'Patient\'s goal: ' + st.goal + (st.start ? ', starting ' + st.start : '') + '.' : ''
    ].filter(Boolean).join('\n');
    return { sub, crit, max, met, n, sev, label, code, note, answered, scr, scrAnswered, scrScore, scrLine };
  }

  function render(el) {
    const d = D();
    const sub = d.substances.find((x) => x.id === st.sub);
    const role = S().settings.role || 'resident';
    const showEn = S().settings.sudEn !== false;
    const subChips = '<div class="sd-chips">' + d.substances.map((x) => '<button class="pill' + (x.id === st.sub ? ' lv' : '') + '" data-sub="' + x.id + '">' + esc(x.label) + '</button>').join('') + '</div>';
    let body = '';

    if (role === 'nurse') {
      body = '<div class="notice">' + esc(d.nurse.notice) + '</div>' + subChips +
        d.nurse.steps.map((s, i) => '<div class="card sd-step"><h3>' + (i + 1) + '. ' + esc(s.title) + '</h3>' + s.lines.map((p) => line(p, sub, showEn)).join('') + '</div>').join('') +
        '<div class="notice info"><b>Escalate.</b> ' + esc(d.nurse.escalate) + '</div>' +
        '<div class="card"><h3>Explain: ' + esc(sub.label) + '</h3>' + sub.psychoed.map((p) => line(p, sub, showEn)).join('') + '</div>';
    } else if (st.tab === 'screen') {
      const r = result();
      body = subChips +
        '<div class="card"><h3>Open</h3>' + d.open.map((p) => line(p, sub, showEn)).join('') + '</div>' +
        '<div class="card"><h3>Ask about ' + esc(sub.label) + '</h3>' + sub.ask.map((p) => line(p, sub, showEn)).join('') + '</div>' +
        (r.scr ? '<div class="card"><h3>' + esc(r.scr.title) + '</h3><p class="small muted">' + esc(r.scr.note) + '</p>' +
          (sub.id === 'alcohol' ? '<div class="seg" role="group" aria-label="Sex" style="margin-bottom:8px"><button class="' + (!st.female ? 'on' : '') + '" data-sex="m">Lalaki</button><button class="' + (st.female ? 'on' : '') + '" data-sex="f">Babae</button></div>' : '') +
          r.scr.items.map((it, i) => '<div class="sd-crit' + (st.scr[i] != null ? ' yes' : '') + '"><div class="sd-num">' + (i + 1) + '</div><div class="sd-body">' + line(it, sub, showEn) +
            '<div class="sd-opts">' + it.opts.map((o) => '<button class="pill' + (st['scrPick' + i] === o[0] ? ' lv' : '') + '" data-scr="' + i + '" data-pts="' + o[1] + '" data-lab="' + esc(o[0]) + '">' + esc(o[0]) + '</button>').join('') + '</div></div></div>').join('') +
          '<p><b>Score:</b> ' + r.scrScore + (r.scrAnswered < r.scr.items.length ? ' <span class="small muted">(' + (r.scr.items.length - r.scrAnswered) + ' not yet answered)</span>' : ' · ' + esc(r.scr.bands(r.scrScore, st.female))) + '</p></div>' : '') +
        '<div class="card"><h3>The ' + r.max + ' criteria, past 12 months</h3><p class="small muted">Tap Oo or Hindi after each answer. ' + (sub.gamble ? 'Not better explained by a manic episode.' : 'Tolerance and withdrawal do not count for medicines taken as prescribed.') + '</p>' +
        Object.keys(d.groups).filter((g) => r.crit.some((c) => c.group === g)).map((g) => '<div class="sd-group">' + esc(d.groups[g]) + '</div>' + r.crit.filter((c) => c.group === g).map((c) => {
          const a = st.ans[c.n];
          return '<div class="sd-crit' + (a === true ? ' yes' : a === false ? ' no' : '') + '"><div class="sd-num">' + c.n + '</div><div class="sd-body">' + line(c, sub, showEn) +
            '<div class="seg sd-ans" role="group" aria-label="Criterion ' + c.n + '"><button class="' + (a === true ? 'on' : '') + '" data-crit="' + c.n + '" data-v="1" aria-pressed="' + (a === true) + '">Oo</button><button class="' + (a === false ? 'on' : '') + '" data-crit="' + c.n + '" data-v="0" aria-pressed="' + (a === false) + '">Hindi</button></div></div></div>';
        }).join('')).join('') + '</div>' +
        '<div class="card"><h3>Course and specifiers</h3>' + d.remission.map((p) => line(p, sub, showEn)).join('') +
        '<div class="sd-spec"><label class="ho-chk" style="flex-wrap:wrap"><span>Remission</span> <select class="input" id="sdRem" style="width:auto;max-width:100%;min-height:36px"><option value="none"' + (st.rem === 'none' ? ' selected' : '') + '>Current (criteria in the past 12 months)</option><option value="early"' + (st.rem === 'early' ? ' selected' : '') + '>Early remission (≥3 and <12 months)</option><option value="sustained"' + (st.rem === 'sustained' ? ' selected' : '') + '>Sustained remission (≥12 months)</option></select></label>' +
        '<label class="ho-chk"><input type="checkbox" id="sdCtrl"' + (st.ctrl ? ' checked' : '') + '> <span>In a controlled environment</span></label>' +
        (sub.id === 'tobacco' ? '<label class="ho-chk"><input type="checkbox" id="sdMaint"' + (st.maint ? ' checked' : '') + '> <span>On maintenance therapy (e.g. nicotine replacement)</span></label>' : '') +
        (sub.gamble ? '<label class="ho-chk"><span>Course</span> <select class="input" id="sdCourse" style="width:auto;max-width:100%;min-height:36px"><option value=""' + (!st.course ? ' selected' : '') + '>—</option><option value="episodic"' + (st.course === 'episodic' ? ' selected' : '') + '>Episodic</option><option value="persistent"' + (st.course === 'persistent' ? ' selected' : '') + '>Persistent</option></select></label>' : '') + '</div></div>' +
        '<div class="card sd-result ' + r.sev + '"><div class="row" style="justify-content:space-between;flex-wrap:wrap"><h3 style="margin:0">Result</h3><span class="pill ' + (r.sev === 'none' ? '' : r.sev === 'mild' ? 'good' : 'warn') + '">' + r.n + '/' + r.max + ' · ' + (r.sev === 'none' ? 'below threshold' : r.sev) + '</span></div>' +
        '<p>' + esc(r.label) + (r.code ? ' <span class="pill">' + esc(r.code) + '</span>' : '') + '</p>' +
        (r.answered < r.max ? '<p class="small muted">' + (r.max - r.answered) + ' criteria not yet answered.</p>' : '') +
        '<p class="small muted">' + esc(d.rule(sub)) + '. Remission: no criteria except craving for ≥3 months (early) or ≥12 months (sustained). Confirm codes against DSM-5-TR and the hospital\'s coding practice.</p>' +
        '<label class="small" for="sdNote">Chart line (copy, then paste where you document; add nothing that identifies the patient here)</label><textarea class="input" id="sdNote" rows="5" style="font-family:ui-monospace,Menlo,monospace;font-size:.85rem">' + esc(r.note) + '</textarea>' +
        '<div class="row" style="margin-top:8px"><button class="btn sm primary" id="sdCopy">Copy chart line</button><button class="btn sm" id="sdMi">Brief intervention →</button><button class="btn sm ghost" id="sdReset">Clear answers</button></div></div>';
    } else if (st.tab === 'mi') {
      const steps = d.mi;
      body = subChips +
        '<p class="muted">Motivational interviewing in six short steps. Ask permission, listen more than you talk, and let the patient give the reasons. Use the rulers; the numbers go into the chart line.</p>' +
        '<div class="sd-steps">' + steps.map((s, i) => '<button class="pill' + (i === st.mi ? ' lv' : '') + '" data-mi="' + i + '">' + (i + 1) + '. ' + esc(s.title) + '</button>').join('') + '</div>' +
        (function () {
          const s = steps[st.mi];
          let extra = '';
          if (s.id === 'rulers') extra = '<div class="sd-rulers"><label>Importance <b id="impV">' + (st.imp === '' ? '–' : st.imp) + '</b>/10<input type="range" min="0" max="10" id="sdImp" value="' + (st.imp === '' ? 0 : st.imp) + '"></label><label>Confidence <b id="confV">' + (st.conf === '' ? '–' : st.conf) + '</b>/10<input type="range" min="0" max="10" id="sdConf" value="' + (st.conf === '' ? 0 : st.conf) + '"></label></div>';
          if (s.id === 'plan') extra = '<div class="row" style="flex-wrap:wrap;gap:8px;margin-top:8px"><input class="input" id="sdGoal" placeholder="Patient\'s goal in their words (e.g. bawasan sa 3 nganga kada araw)" value="' + esc(st.goal) + '" style="flex:2;min-width:200px"><input class="input" id="sdStart" placeholder="Start date" value="' + esc(st.start) + '" style="flex:1;min-width:120px"></div>';
          if (s.id === 'feedback') extra = '<details class="sd-det"><summary>Psychoeducation for ' + esc(sub.label) + '</summary>' + sub.psychoed.map((p) => line(p, sub, showEn)).join('') + '</details>';
          return '<div class="card sd-step"><h3>' + (st.mi + 1) + '. ' + esc(s.title) + '</h3><p class="small muted">' + esc(s.goal) + '</p>' + s.lines.map((p) => line(p, sub, showEn)).join('') + extra +
            '<div class="row" style="margin-top:10px"><button class="btn sm" id="miPrev"' + (st.mi === 0 ? ' disabled' : '') + '>← Back</button><button class="btn sm primary" id="miNext"' + (st.mi === steps.length - 1 ? ' disabled' : '') + '>Next →</button><a class="btn sm ghost" href="#/psych/sud" id="sdBackScreen">Back to the result</a></div></div>';
        })();
    } else if (st.tab === 'learn') {
      body = subChips + '<div class="card"><h3>Explain: ' + esc(sub.label) + '</h3>' + sub.psychoed.map((p) => line(p, sub, showEn)).join('') + '</div>' +
        '<div class="card"><h3>Study the phrases</h3><p class="small muted">The same lines as phrase sections, with flashcards, quizzes, and audio.</p><div class="row" style="flex-wrap:wrap">' +
        [['sud-screen', 'The 11 criteria'], ['sud-betel', 'Betel nut'], ['sud-other', 'Tobacco, alcohol, shabu'], ['sud-gambling', 'Gambling'], ['sud-screens', 'AUDIT-C and Fagerström'], ['mi', 'Motivational interviewing']].map(([id, t]) => '<a class="btn sm" href="#/psych/s/' + id + '">' + esc(t) + '</a>').join('') +
        '<a class="btn sm" href="#/psych/case/tonyo-nganga">Practice case: Mang Tonyo</a><a class="btn sm" href="#/psych/handout">Print: SUD screen + brief intervention</a></div></div>' +
        '<div class="notice info">Criteria paraphrased from DSM-5-TR (substance-related and addictive disorders). Betel nut is coded as an other (or unknown) substance. Tagalog lines are practice phrasings for training, not validated translations.</div>';
    }

    el.innerHTML = crumb([['Psychiatry', '#/psych'], ['Substance use']]) + '<span class="eyebrow">Screening · brief intervention</span><h1>Substance use</h1>' +
      '<p class="muted">Screen betel nut (nganga), tobacco, alcohol, shabu, other substances and gambling on the DSM-5-TR criteria in Tagalog, rate mild, moderate or severe (with AUDIT-C and Fagerström as add-ons), then run a brief motivational interview. Answers stay on this screen and are cleared when you leave.</p>' +
      '<div class="row" style="flex-wrap:wrap;gap:10px;margin-bottom:12px"><div class="seg" role="group" aria-label="Role"><button class="' + (role === 'resident' ? 'on' : '') + '" data-role="resident">Resident</button><button class="' + (role === 'nurse' ? 'on' : '') + '" data-role="nurse">Nurse</button></div>' +
      (role === 'resident' ? '<div class="seg" role="group" aria-label="Section"><button class="' + (st.tab === 'screen' ? 'on' : '') + '" data-tab="screen">Screen</button><button class="' + (st.tab === 'mi' ? 'on' : '') + '" data-tab="mi">Brief intervention</button><button class="' + (st.tab === 'learn' ? 'on' : '') + '" data-tab="learn">Explain and study</button></div>' : '') +
      '<label class="ho-chk"><input type="checkbox" id="sdEn"' + (showEn ? ' checked' : '') + '> <span>English</span></label></div>' + body;

    el.querySelectorAll('[data-sub]').forEach((b) => (b.onclick = () => { st = Object.assign(fresh(b.dataset.sub), { tab: st.tab, mi: st.mi }); render(el); }));
    el.querySelectorAll('[data-tab]').forEach((b) => (b.onclick = () => { st.tab = b.dataset.tab; render(el); }));
    el.querySelectorAll('[data-role]').forEach((b) => (b.onclick = () => { S().settings.role = b.dataset.role; App.save(); render(el); }));
    el.querySelectorAll('[data-mi]').forEach((b) => (b.onclick = () => { st.mi = +b.dataset.mi; render(el); }));
    el.querySelectorAll('[data-crit]').forEach((b) => (b.onclick = () => { const n = +b.dataset.crit, v = b.dataset.v === '1'; if (st.ans[n] === v) delete st.ans[n]; else st.ans[n] = v; render(el); const t = el.querySelector('.sd-result'); if (Object.keys(st.ans).length === d.criteriaFor(sub).length && t) t.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }));
    el.querySelectorAll('[data-scr]').forEach((b) => (b.onclick = () => { const i = +b.dataset.scr; if (st['scrPick' + i] === b.dataset.lab) { delete st.scr[i]; delete st['scrPick' + i]; } else { st.scr[i] = +b.dataset.pts; st['scrPick' + i] = b.dataset.lab; } render(el); }));
    el.querySelectorAll('[data-sex]').forEach((b) => (b.onclick = () => { st.female = b.dataset.sex === 'f'; render(el); }));
    const on = (id, ev, fn) => { const x = el.querySelector(id); if (x) x[ev] = fn; };
    on('#sdEn', 'onchange', (e) => { S().settings.sudEn = e.target.checked; App.save(); render(el); });
    on('#sdRem', 'onchange', (e) => { st.rem = e.target.value; render(el); });
    on('#sdCtrl', 'onchange', (e) => { st.ctrl = e.target.checked; render(el); });
    on('#sdCourse', 'onchange', (e) => { st.course = e.target.value; render(el); });
    on('#sdMaint', 'onchange', (e) => { st.maint = e.target.checked; render(el); });
    on('#sdReset', 'onclick', () => { st = fresh(st.sub); render(el); });
    on('#sdMi', 'onclick', () => { st.tab = 'mi'; st.mi = 0; render(el); window.scrollTo(0, 0); });
    on('#sdBackScreen', 'onclick', (e) => { e.preventDefault(); st.tab = 'screen'; render(el); });
    on('#miPrev', 'onclick', () => { st.mi--; render(el); });
    on('#miNext', 'onclick', () => { st.mi++; render(el); });
    on('#sdImp', 'oninput', (e) => { st.imp = +e.target.value; el.querySelector('#impV').textContent = st.imp; });
    on('#sdConf', 'oninput', (e) => { st.conf = +e.target.value; el.querySelector('#confV').textContent = st.conf; });
    on('#sdGoal', 'oninput', (e) => { st.goal = e.target.value; });
    on('#sdStart', 'oninput', (e) => { st.start = e.target.value; });
    on('#sdCopy', 'onclick', () => { const t = el.querySelector('#sdNote'); (navigator.clipboard ? navigator.clipboard.writeText(t.value) : Promise.reject()).then(() => App.toast('Chart line copied.'), () => { t.select(); App.toast('Text selected. Copy it with your device\'s copy command.'); }); App.activity(5); });
  }

  V.sud = (el, p, q) => {
    if (!st || (q && q.s && q.s !== st.sub)) st = fresh(q && q.s);
    render(el);
  };
  // Clear screening answers when the user navigates away from the page.
  window.addEventListener('hashchange', () => { if (!location.hash.startsWith('#/psych/sud')) st = null; });
})();
