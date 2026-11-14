/* Psychiatry track views: hub, phrase sections, case simulations, interpretation drill. */
(function () {
  const { esc, shuffle, pick, icons } = App;
  const V = App.views;
  const S = () => App.state;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';
  const primary = (p) => (S().settings.register === 'c' ? p.c || p.f : p.f);
  const secondary = (p) => (S().settings.register === 'c' ? p.f : p.c);

  /* Resident / Nurse role (3.2.0, ported from Hanashimasho 0.16.0). settings.role is shared with the substance use and withdrawal tools.
     Nurse view: the nurse sections (role: 'nurse') first, then the resident sections most used on the ward.
     Flashcards, search, the point board and the listening drill still see every section. */
  const NURSE_ALSO = ['deescalation', 'suicide', 'violence', 'meds', 'admission', 'elderly'];
  const NURSE_NOTICE = 'Nurse scripts are pending Nursing Service review, and their Tagalog is a draft for review. Use them for practice and check the wording with your ward before using it with patients.';
  const hasNurse = () => PSYCH_SECTIONS.some((s) => s.role === 'nurse');
  const role = () => (hasNurse() && S().settings.role === 'nurse' ? 'nurse' : 'resident');
  App.roleSeg = () => '<div class="seg role-seg" role="group" aria-label="Role">' + [['resident', 'Resident'], ['nurse', 'Nurse']].map(([k, t]) => '<button type="button" data-role="' + k + '" class="' + (role() === k ? 'on' : '') + '" aria-pressed="' + (role() === k) + '">' + t + '</button>').join('') + '</div>';
  /* Sections in the order the current role sees them; prev / next on a section page follow it. */
  const roleSections = (r) => r === 'nurse'
    ? PSYCH_SECTIONS.filter((s) => s.role === 'nurse').concat(NURSE_ALSO.map((id) => PSYCH_SECTIONS.find((s) => s.id === id)).filter(Boolean))
    : PSYCH_SECTIONS.filter((s) => s.role !== 'nurse');

  V.psych = (el, p, q) => {
    const groups = {};
    const R = role();
    roleSections(R).forEach((s) => { const g = R === 'nurse' && s.role !== 'nurse' ? 'Also useful on the ward' : s.group; (groups[g] = groups[g] || []).push(s); });
    const done = S().done;
    const tab = (q && q.tab) || 'interview';
    const T = (h, eyebrow, title, p) => '<a class="tile" href="' + h + '"><span class="eyebrow">' + eyebrow + '</span><h3>' + title + '</h3><p>' + p + '</p></a>';
    const TABS = [['interview', 'Interview'], ['cases', 'Cases'], ['tools', 'Ward tools'], ['print', 'Print']];
    const body = {
      interview: Object.entries(groups).map(([g, ss]) => '<h2 style="margin-top:16px">' + esc(g) + '</h2><div class="grid">' + ss.map((s) =>
        '<a class="tile" href="#/psych/s/' + s.id + '"><h3>' + esc(s.title) + '</h3><p>' + s.phrases.length + ' phrases' + (s.draft ? ' · draft for review' : '') + '</p>' + (done.sections[s.id] ? '<div class="meta"><span class="pill good">opened</span></div>' : '') + '</a>').join('') + '</div>').join('') +
        '<h2 style="margin-top:20px">Related lessons</h2><div class="grid">' + ['politeness', 'values', 'folk', 'idioms-distress', 'interpreting', 'kinship', 'storytelling'].map((id) => { const l = LESSONS.find((x) => x.id === id); return '<a class="tile" href="#/lessons/' + l.id + '"><h3>' + esc(l.title) + '</h3><p>' + esc(l.summary) + '</p></a>'; }).join('') + '</div>',
      cases: '<div class="grid" style="margin-top:14px">' +
        T('#/psych/cases', 'Simulate', 'Case simulations', PSYCH_CASES.length + ' interactive interviews with feedback and an MSE summary.') +
        T('#/psych/mcases', 'Admission', 'Admission MSE practice', 'Interview a patient on admission, document each MSE domain, and name the evidence.') +
        T('#/psych/dcases', 'Ward', 'Discharge practice', 'Interview, document the discharge MSE, compare with a model answer.') +
        T('#/psych/interp', 'Listen', 'What is the patient saying?', PSYCH_INTERP.length + ' patient and family lines to interpret.') +
        T('#/psych/listen', 'Listen', 'Listening drill', 'Hear a patient reply at natural speed, choose the meaning, then see the text.') +
        T('#/flash/psych', 'Memorize', 'Psychiatry flashcards', 'All phrases with spaced repetition.') +
        T('https://isaymotion.github.io/MSEtrainer/#/practice?lang=tl', 'MSE Trainer', 'Name the finding in Tagalog', 'Quick cases in your MSE Trainer, in Filipino.') + '</div>',
      tools: '<div class="grid" style="margin-top:14px">' +
        T('#/psych/point', 'Bedside', 'Point board (Ituro)', 'Turn the phone around: the patient points to a reply, the phone speaks it, you read the English.') +
        T('#/psych/mood', 'Checker', 'Mood episode', 'SIGECAPS and DIGFAST as tap-to-count DSM-5-TR criteria in Tagalog.') +
        T('#/psych/sud', 'Screen · counsel', 'Substance use', 'Betel nut, tobacco, alcohol, shabu, gambling: criteria, severity, brief intervention.') +
        T('#/psych/withdrawal', 'Ward · ED', 'Withdrawal and agitation', 'PAWSS, CIWA-Ar, cannabis withdrawal, agitation by cause.') +
        T('#/psych/deesc', 'Bedside', 'De-escalation checklist', '12 steps with Tagalog phrases, outcome, and a copyable note.') +
        T('#/psych/discharge', 'Ward', 'Discharge assessment', 'Each discharge summary field: what to ask and how to document it.') + '</div>',
      print: '<div class="grid" style="margin-top:14px">' +
        T('#/psych/mse-sheet', 'Print', 'MSE interviewer sheet', 'Four pages for the OPD and wards: every Tagalog screening question.') +
        T('#/psych/handout', 'Print', 'Printable handout', 'Interview flow and MSE as a PDF, with or without English.') +
        T('#/psych/handout?deesccard=1', 'Print', 'De-escalation pocket card', 'A6 card for the ward.') +
        T('#/psych/handout?discharge=1', 'Print', 'Discharge guide', 'The discharge assessment as a printable guide.') + '</div>'
    };
    el.innerHTML = '<h1>Psychiatry Tagalog</h1>' +
      '<p class="muted" style="margin-top:4px">Phrases for the psychiatric interview and MSE, ' + LANG.registerIntro + '.</p>' +
      '<div class="ptabs" role="tablist">' + TABS.map(([k, t]) => '<a role="tab" aria-selected="' + (k === tab) + '" class="' + (k === tab ? 'on' : '') + '" href="#/psych?tab=' + k + '">' + t + '</a>').join('') + '</div>' +
      (tab === 'interview' && hasNurse() ? '<div class="row" style="margin-top:12px;gap:10px;flex-wrap:wrap;align-items:center"><span class="muted small">I am a</span>' + App.roleSeg() + '</div>' : '') +
      (tab === 'interview' && R === 'nurse' ? '<div class="notice warn" style="margin-top:12px">' + esc(NURSE_NOTICE) + '</div>' : '') +
      (tab === 'interview' ? '<div class="notice info" style="margin-top:12px">Practice phrasings for training, not validated translations. Confirm wording with your supervisors and adapt to each patient.</div>' : '') +
      body[tab];
    el.querySelectorAll('[data-role]').forEach((b) => (b.onclick = () => { S().settings.role = b.dataset.role; App.save(); V.psych(el, p, q); }));
  };

  V.psychSection = (el, p, q) => {
    const s = PSYCH_SECTIONS.find((x) => x.id === p.id);
    if (!s) { el.innerHTML = '<p>Section not found. <a href="#/psych">Psychiatry</a></p>'; return; }
    if (!S().done.sections[s.id]) { S().done.sections[s.id] = true; App.save(); }
    const list = roleSections(s.role === 'nurse' ? 'nurse' : role()), idx = list.indexOf(s);
    const next = idx < 0 ? null : list[idx + 1], prev = idx < 0 ? null : list[idx - 1];
    let mode = 'study';
    const draw = () => {
      const body = el.querySelector('#pbody');
      if (mode === 'quiz') {
        const qs = shuffle(s.phrases.map((ph, i) => ({ ph, i }))).slice(0, 10).map(({ ph, i }) => {
          const others = pick(s.phrases.filter((x) => x !== ph), 3).map(primary);
          return { q: ph.en, opts: [primary(ph)].concat(others), a: 0, exp: secondary(ph) ? 'Also: ' + secondary(ph) : '', tlo: true, cardId: 'p:' + s.id + ':' + i, say: null };
        });
        body.innerHTML = '<div id="qz"></div>';
        App.runQuiz(body.querySelector('#qz'), qs, { onDone: (r, n) => { S().done.sections[s.id] = Math.round((100 * r) / n); App.activity(10); } });
        return;
      }
      if (mode === 'reverse') {
        const qs = shuffle(s.phrases.map((ph, i) => ({ ph, i }))).slice(0, 10).map(({ ph, i }) => ({ q: primary(ph), say: primary(ph), opts: [ph.en].concat(pick(s.phrases.filter((x) => x !== ph), 3).map((x) => x.en)), a: 0, exp: ph.n || '', tlq: true, cardId: 'p:' + s.id + ':' + i }));
        body.innerHTML = '<div id="qz"></div>';
        App.runQuiz(body.querySelector('#qz'), qs, { onDone: () => App.activity(10) });
        return;
      }
      const recall = mode === 'recall';
      body.innerHTML = '<div class="card">' + s.phrases.map((ph, i) => {
        const id = 'p:' + s.id + ':' + i, inDeck = !!S().srs[id];
        return '<div class="phrase' + (recall ? ' hide-tl' : '') + '" id="ph' + i + '">' +
          '<div class="en">' + esc(ph.en) + '</div><div class="acts">' + App.sayBtn(primary(ph)) +
          '<button class="say" data-addcard="' + id + '" title="' + (inDeck ? 'In your review deck' : 'Add to flashcards') + '" aria-label="Add to flashcards">' + (inDeck ? icons.check : icons.plus) + '</button></div>' +
          '<div class="main" style="grid-column:1/-1" data-reveal>' + esc(primary(ph)) + '</div>' +
          (secondary(ph) && secondary(ph) !== primary(ph) ? '<div class="alt" style="grid-column:1/-1" data-reveal><b>' + (S().settings.register === 'c' ? LANG.registers.f.short : LANG.registers.c.short) + '</b>' + esc(secondary(ph)) + ' ' + '</div>' : '') +
          (ph.n ? '<div class="note">' + esc(ph.n) + '</div>' : '') +
          (ph.answers ? '<div class="ans"><span class="eyebrow">Patients may answer</span>' + ph.answers.map(([t, e]) => '<div><span>' + esc(t) + '</span> <span class="muted">— ' + esc(e) + '</span></div>').join('') + '</div>' : '') +
          '</div>';
      }).join('') + '</div>';
      if (recall) body.querySelectorAll('[data-reveal]').forEach((r) => (r.onclick = () => r.closest('.phrase').classList.remove('hide-tl')));
      if (q.p != null) { const t = body.querySelector('#ph' + q.p); if (t) { t.scrollIntoView({ block: 'center' }); t.style.background = 'var(--surface-2)'; } }
    };
    const sheaRaw = (window.SHEA_LINKS || {})[s.id], ST = window.SHEA_TRAINER;
    const shea = sheaRaw ? [].concat(sheaRaw) : [];
    const sheaA = (l) => '<a href="' + (l.href ? ST.root + l.href : ST.base + l.ch + '/' + l.sec) + '" target="_blank" rel="noopener">' + esc(l.label) + '</a>';
    const sheaLink = shea.length && ST ? (shea.length === 1
      ? '<p class="small"><b>Technique notes:</b> ' + sheaA(shea[0]) + ' in the ' + esc(ST.name) + ' explains why these questions are worded this way.</p>'
      : '<div class="small"><b>Technique notes</b> in the ' + esc(ST.name) + ', on why these questions are worded this way:<ul style="margin:4px 0 12px;padding-left:20px">' + shea.map((l) => '<li>' + sheaA(l) + '</li>').join('') + '</ul></div>') : '';
    const draftNote = s.role === 'nurse' ? '<div class="notice warn" style="margin-bottom:12px">' + esc(NURSE_NOTICE) + '</div>'
      : (s.draft && ST ? '<div class="notice warn" style="margin-bottom:12px">' + esc(ST.draftNotice) + '</div>' : '');
    el.innerHTML = crumb([['Psychiatry', '#/psych'], [s.title]]) + '<span class="eyebrow">' + esc(s.group) + '</span><h1>' + esc(s.title) + '</h1><p class="muted">' + esc(s.intro) + '</p>' + draftNote + sheaLink +
      '<div class="spread" style="margin-bottom:12px"><div class="seg" role="group" aria-label="Mode">' +
      [['study', 'Study'], ['recall', 'Recall'], ['quiz', 'Quiz ' + LANG.quiz.toTarget], ['reverse', 'Quiz ' + LANG.quiz.toEnglish]].map(([k, t]) => '<button data-m="' + k + '" class="' + (mode === k ? 'on' : '') + '">' + t + '</button>').join('') + '</div>' +
      '<div class="row">' + (s.id === 'deescalation' ? '<a class="btn sm primary" href="#/psych/deesc">Open the checklist</a>' : '') + '<a class="btn sm" href="#/psych/point?s=' + s.id + '">Point board</a><a class="btn sm" href="#/psych/listen?s=' + s.id + '">Listen</a><a class="btn sm" href="#/psych/handout?s=' + s.id + '">Handout of this section</a><button class="btn sm" id="addall">' + icons.plus + ' Add all to flashcards</button></div></div>' +
      '<p class="muted small" id="modehelp">Recall hides the ' + LANG.name + ': say it aloud from the English, then tap to check.</p>' +
      '<div id="pbody"></div>' +
      '<div class="spread" style="margin-top:16px">' + (prev ? '<a class="btn" href="#/psych/s/' + prev.id + '">← ' + esc(prev.title) + '</a>' : '<span></span>') + (next ? '<a class="btn" href="#/psych/s/' + next.id + '">' + esc(next.title) + ' →</a>' : '') + '</div>';
    el.querySelectorAll('[data-m]').forEach((b) => (b.onclick = () => { mode = b.dataset.m; el.querySelectorAll('[data-m]').forEach((x) => x.classList.toggle('on', x === b)); q.p = null; draw(); }));
    el.querySelector('#addall').onclick = () => {
      let n = 0;
      s.phrases.forEach((ph, i) => { const id = 'p:' + s.id + ':' + i; if (!S().srs[id]) { S().srs[id] = { e: 2.5, i: 0, r: 0, due: Date.now() }; n++; } });
      App.save(); App.toast(n ? n + ' phrases added to your reviews.' : 'All phrases are already in your reviews.'); draw();
    };
    draw();
  };

  V.psychCases = (el) => {
    el.innerHTML = crumb([['Psychiatry', '#/psych'], ['Case simulations']]) + '<h1>Case simulations</h1><p class="muted">Read what the patient or family says, then choose your next line. You get feedback on each choice and a findings summary with an MSE at the end. For speaking practice, open the same case in <a href="#/speak">Speaking</a>.</p><div class="grid">' +
      PSYCH_CASES.map((c) => '<a class="tile" href="#/psych/case/' + c.id + '"><div class="row"><span class="pill lv">' + esc(c.level) + '</span>' + (S().done.cases[c.id] != null ? '<span class="pill good">' + S().done.cases[c.id] + '%</span>' : '') + '</div><h3 style="margin-top:6px">' + esc(c.title) + '</h3><p>' + esc(c.setting) + '</p></a>').join('') + '</div>';
  };

  V.psychCase = (el, p) => {
    const c = PSYCH_CASES.find((x) => x.id === p.id);
    if (!c) { el.innerHTML = '<p>Case not found.</p>'; return; }
    let i = 0, pts = 0;
    const log = [];
    const draw = () => {
      const body = el.querySelector('#cbody');
      const hist = log.map((h) => '<div class="line"><div class="spread"><span class="who">' + esc(h.who) + '</span>' + App.sayBtn(h.line[0]) + '</div><div class="t">' + esc(h.line[0]) + '</div><div class="e">' + esc(h.line[1]) + '</div></div>' +
        '<div class="line me"><div class="spread"><span class="who">You</span>' + App.sayBtn(h.pick.tl) + '</div><div class="t">' + esc(h.pick.tl) + '</div><div class="e">' + esc(h.pick.en) + '</div></div>' +
        '<div class="feedback ' + (h.pick.score === 2 ? 'ok' : h.pick.score === 1 ? 'mid' : 'no') + '">' + esc(h.pick.fb) + (h.pick.score < 2 ? '<div class="small" style="margin-top:4px"><b>Better:</b> <span class="tl">' + esc(h.best.tl) + '</span></div>' : '') + '</div>').join('');
      if (i >= c.steps.length) {
        const max = c.steps.length * 2, pct = Math.round((100 * pts) / max);
        S().done.cases[c.id] = Math.max(pct, S().done.cases[c.id] || 0); App.activity(20);
        body.innerHTML = '<div class="dlg">' + hist + '</div><div class="card stack" style="margin-top:16px"><div class="spread"><h2 style="margin:0">Case complete</h2><span class="pill ' + (pct >= 80 ? 'good' : pct >= 50 ? 'warn' : 'bad') + '">' + pct + '%</span></div>' +
          '<h3 style="margin:0">Key findings</h3><ul style="margin:0">' + c.summary.findings.map((f) => '<li>' + esc(f) + '</li>').join('') + '</ul>' +
          '<h3 style="margin:0">Mental status exam</h3><p style="margin:0">' + esc(c.summary.mse) + '</p>' +
          '<div class="row"><button class="btn primary" id="again">Run the case again</button><a class="btn" href="#/speak/case-' + c.id + '">Practice speaking it</a><a class="btn" href="#/psych/cases">Other cases</a></div></div>';
        body.querySelector('#again').onclick = () => { i = 0; pts = 0; log.length = 0; draw(); };
        return;
      }
      const st = c.steps[i];
      const order = shuffle(st.choices.map((x, k) => k));
      body.innerHTML = '<div class="dlg">' + hist + '<div class="line"><div class="spread"><span class="who">' + esc(st.who) + '</span>' + App.sayBtn(st.line[0]) + '</div><div class="t">' + esc(st.line[0]) + '</div><div class="e" id="ctr" hidden>' + esc(st.line[1]) + '</div><button class="btn sm ghost" id="showtr" style="justify-self:start">Show English</button></div></div>' +
        '<h3 style="margin-top:16px">What do you say next?</h3><div class="opts">' + order.map((k) => '<button class="opt" data-k="' + k + '"><div class="tl" style="font-size:1.05rem">' + esc(st.choices[k].tl) + '</div><div class="muted small">' + esc(st.choices[k].en) + '</div></button>').join('') + '</div>';
      body.querySelector('#showtr').onclick = (e) => { body.querySelector('#ctr').hidden = false; e.target.remove(); };
      body.querySelectorAll('.opt').forEach((b) => (b.onclick = () => {
        const pk = st.choices[+b.dataset.k];
        pts += pk.score;
        App.recordAnswer(pk.score === 2);
        log.push({ who: st.who, line: st.line, pick: pk, best: st.choices.find((x) => x.score === 2) });
        i++; draw();
        const fb = el.querySelectorAll('.feedback'); if (fb.length) fb[fb.length - 1].scrollIntoView({ block: 'center' });
      }));
    };
    el.innerHTML = crumb([['Psychiatry', '#/psych'], ['Cases', '#/psych/cases'], [c.title]]) + '<h1>' + esc(c.title) + '</h1><div class="notice info">' + esc(c.setting) + '</div><div id="cbody" style="margin-top:14px"></div>';
    draw();
  };

  V.psychInterp = (el) => {
    let mode = 'quiz';
    const draw = () => {
      const box = el.querySelector('#ibody');
      if (mode === 'list') {
        box.innerHTML = '<div class="card">' + PSYCH_INTERP.map(([t, e, sig]) => '<div class="phrase"><div class="main">' + esc(t) + '</div><div class="acts">' + App.sayBtn(t) + '</div><div class="en" style="grid-column:1/-1;font-weight:500">' + esc(e) + '</div><div class="note">' + esc(sig) + '</div></div>').join('') + '</div>';
        return;
      }
      const qs = pick(PSYCH_INTERP, 10).map((it) => ({ q: it[0], say: it[0], tlq: true, opts: [it[1]].concat(pick(PSYCH_INTERP.filter((x) => x !== it), 3).map((x) => x[1])), a: 0, exp: it[2] }));
      box.innerHTML = '<p class="muted small">Tip: tap the speaker first and try to understand by ear before reading.</p><div id="iq"></div>';
      App.runQuiz(box.querySelector('#iq'), qs, { onDone: () => App.activity(10) });
    };
    el.innerHTML = crumb([['Psychiatry', '#/psych'], ['Interpretation drill']]) + '<h1>What is the patient saying?</h1><p class="muted">Real-sounding patient and family statements. Choose the meaning, then read the clinical significance.</p>' +
      '<div class="seg" role="group" style="margin-bottom:12px">' + [['quiz', 'Quiz (10)'], ['list', 'Study list']].map(([k, t]) => '<button data-m="' + k + '" class="' + (mode === k ? 'on' : '') + '">' + t + '</button>').join('') + '</div><div id="ibody"></div>';
    el.querySelectorAll('[data-m]').forEach((b) => (b.onclick = () => { mode = b.dataset.m; el.querySelectorAll('[data-m]').forEach((x) => x.classList.toggle('on', x === b)); draw(); }));
    draw();
  };
})();
