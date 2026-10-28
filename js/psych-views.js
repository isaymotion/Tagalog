/* Psychiatry track views: hub, phrase sections, case simulations, interpretation drill. */
(function () {
  const { esc, shuffle, pick, icons } = App;
  const V = App.views;
  const S = () => App.state;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';
  const primary = (p) => (S().settings.register === 'c' ? p.c || p.f : p.f);
  const secondary = (p) => (S().settings.register === 'c' ? p.f : p.c);

  V.psych = (el) => {
    const groups = {};
    PSYCH_SECTIONS.forEach((s) => (groups[s.group] = groups[s.group] || []).push(s));
    const done = S().done;
    el.innerHTML = '<h1>Psychiatry Tagalog</h1>' +
      '<p class="muted">Phrases for the full psychiatric interview and mental status exam, each in a respectful form (<i>po</i>) and an everyday form. Switch the default in <a href="#/settings">Settings → Register</a>.</p>' +
      '<div class="notice info" style="margin-bottom:14px">These are practice phrasings for training, not validated translations of research instruments. Confirm wording with your supervisors and adapt to each patient. Crisis line: NCMH <b>1553</b>.</div>' +
      '<div class="grid">' +
      '<a class="tile" href="#/psych/cases"><span class="eyebrow">Simulate</span><h3>Case simulations</h3><p>' + PSYCH_CASES.length + ' interactive interviews with feedback and an MSE summary.</p></a>' +
      '<a class="tile" href="#/psych/interp"><span class="eyebrow">Listen</span><h3>What is the patient saying?</h3><p>' + PSYCH_INTERP.length + ' patient and family lines to interpret, with clinical significance.</p></a>' +
      '<a class="tile" href="#/psych/discharge"><span class="eyebrow">Ward</span><h3>Discharge assessment</h3><p>Each discharge summary field: what to ask in Tagalog and how to document it.</p></a>' +
      '<a class="tile" href="#/psych/dcases"><span class="eyebrow">Ward</span><h3>Discharge practice</h3><p>Interview a simulated patient, document the discharge MSE, and compare it with a model answer.</p></a>' +
      '<a class="tile" href="#/psych/mcases"><span class="eyebrow">Admission</span><h3>Admission MSE practice</h3><p>Interview a patient on admission, document each MSE domain, and name the evidence for key findings.</p></a>' +
      '<a class="tile" href="https://isaymotion.github.io/MSEtrainer/#/practice?lang=tl" target="_blank" rel="noopener"><span class="eyebrow">MSE Trainer</span><h3>Name the finding in Tagalog</h3><p>Quick cases in your MSE Trainer app: Tagalog patient lines and Filipino culture-or-pathology look-alikes.</p></a>' +
      '<a class="tile" href="#/psych/mood"><span class="eyebrow">Checker</span><h3>Mood episode</h3><p>Depressed mood + SIGECAPS and elevated/irritable mood + DIGFAST as tap-to-count DSM-5-TR criteria in Tagalog, with duration, features, PHQ-9 and MDQ, and a copyable chart line.</p></a>' +
      '<a class="tile" href="#/psych/sud"><span class="eyebrow">Screen · counsel</span><h3>Substance use</h3><p>Betel nut, tobacco, alcohol, shabu, gambling: the DSM-5-TR criteria in Tagalog with mild/moderate/severe and codes, AUDIT-C and Fagerström, a brief motivational interview, and a nurse script.</p></a>' +
      '<a class="tile" href="#/psych/withdrawal"><span class="eyebrow">Ward · ED</span><h3>Withdrawal and agitation</h3><p>Alcohol withdrawal (PAWSS, CIWA-Ar scored on the page, benzodiazepines, phenobarbital, thiamine), cannabis withdrawal and CHS, the agitated patient from de-escalation to restraint, special populations and practice cases, with Tagalog lines and a nurse monitoring script.</p></a>' +
      '<a class="tile" href="#/psych/deesc"><span class="eyebrow">Bedside</span><h3>De-escalation checklist</h3><p>12 steps with Tagalog phrases, outcome, and a copyable note.</p></a>' +
      '<a class="tile" href="#/psych/mse-sheet"><span class="eyebrow">Print</span><h3>MSE interviewer sheet</h3><p>Four pages for the OPD and wards: every Tagalog screening question for the MSE (DISAECGP, mania, suicide and violence risk, cognition, insight and judgment), then substance use screening and the brief intervention.</p></a>' +
      '<a class="tile" href="#/psych/handout"><span class="eyebrow">Print</span><h3>Printable handout</h3><p>Interview flow and MSE as a PDF, with or without English.</p></a>' +
      '<a class="tile" href="#/flash/psych"><span class="eyebrow">Memorize</span><h3>Psychiatry flashcards</h3><p>All phrases with spaced repetition.</p></a>' +
      '<a class="tile" href="#/lessons/idioms-distress"><span class="eyebrow">Culture</span><h3>Idioms of distress</h3><p>Mabigat ang dibdib, nerbiyos, tulala, and more.</p></a></div>' +
      Object.entries(groups).map(([g, ss]) => '<h2 style="margin-top:20px">' + esc(g) + '</h2><div class="grid">' + ss.map((s) =>
        '<a class="tile" href="#/psych/s/' + s.id + '"><h3>' + esc(s.title) + '</h3><p>' + s.phrases.length + ' phrases' + (s.draft ? ' · draft for review' : '') + '</p>' + (done.sections[s.id] ? '<div class="meta"><span class="pill good">' + (done.sections[s.id] === true ? 'Opened' : done.sections[s.id] + '% quiz') + '</span></div>' : '') + '</a>').join('') + '</div>').join('') +
      '<h2 style="margin-top:20px">Related lessons</h2><div class="grid">' + ['politeness', 'values', 'folk', 'idioms-distress', 'kinship', 'storytelling'].map((id) => { const l = LESSONS.find((x) => x.id === id); return l ? '<a class="tile" href="#/lessons/' + l.id + '"><h3>' + esc(l.title) + '</h3><p>' + esc(l.summary) + '</p></a>' : ''; }).join('') + '</div>';
  };

  V.psychSection = (el, p, q) => {
    const s = PSYCH_SECTIONS.find((x) => x.id === p.id);
    if (!s) { el.innerHTML = '<p>Section not found. <a href="#/psych">Psychiatry</a></p>'; return; }
    if (!S().done.sections[s.id]) { S().done.sections[s.id] = true; App.save(); }
    const idx = PSYCH_SECTIONS.indexOf(s), next = PSYCH_SECTIONS[idx + 1], prev = PSYCH_SECTIONS[idx - 1];
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
          (secondary(ph) && secondary(ph) !== primary(ph) ? '<div class="alt" style="grid-column:1/-1" data-reveal><b>' + (S().settings.register === 'c' ? 'Respectful' : 'Everyday') + '</b>' + esc(secondary(ph)) + ' ' + '</div>' : '') +
          (ph.n ? '<div class="note">' + esc(ph.n) + '</div>' : '') +
          (ph.answers ? '<div class="ans"><span class="eyebrow">Patients may answer</span>' + ph.answers.map(([t, e]) => '<div><span>' + esc(t) + '</span> <span class="muted">— ' + esc(e) + '</span></div>').join('') + '</div>' : '') +
          '</div>';
      }).join('') + '</div>';
      if (recall) body.querySelectorAll('[data-reveal]').forEach((r) => (r.onclick = () => r.closest('.phrase').classList.remove('hide-tl')));
      if (q.p != null) { const t = body.querySelector('#ph' + q.p); if (t) { t.scrollIntoView({ block: 'center' }); t.style.background = 'var(--surface-2)'; } }
    };
    const sheaRaw = (window.SHEA_LINKS || {})[s.id], ST = window.SHEA_TRAINER;
    const shea = sheaRaw ? [].concat(sheaRaw) : [];
    const sheaA = (l) => '<a href="' + ST.base + l.ch + '/' + l.sec + '" target="_blank" rel="noopener">' + esc(l.label) + '</a>';
    const sheaLink = shea.length && ST ? (shea.length === 1
      ? '<p class="small"><b>Technique notes:</b> ' + sheaA(shea[0]) + ' in the ' + esc(ST.name) + ' explains why these questions are worded this way.</p>'
      : '<div class="small"><b>Technique notes</b> in the ' + esc(ST.name) + ', on why these questions are worded this way:<ul style="margin:4px 0 12px;padding-left:20px">' + shea.map((l) => '<li>' + sheaA(l) + '</li>').join('') + '</ul></div>') : '';
    const draftNote = s.draft && ST ? '<div class="notice warn" style="margin-bottom:12px">' + esc(ST.draftNotice) + '</div>' : '';
    el.innerHTML = crumb([['Psychiatry', '#/psych'], [s.title]]) + '<span class="eyebrow">' + esc(s.group) + '</span><h1>' + esc(s.title) + '</h1><p class="muted">' + esc(s.intro) + '</p>' + draftNote + sheaLink +
      '<div class="spread" style="margin-bottom:12px"><div class="seg" role="group" aria-label="Mode">' +
      [['study', 'Study'], ['recall', 'Recall'], ['quiz', 'Quiz EN→TL'], ['reverse', 'Quiz TL→EN']].map(([k, t]) => '<button data-m="' + k + '" class="' + (mode === k ? 'on' : '') + '">' + t + '</button>').join('') + '</div>' +
      '<div class="row">' + (s.id === 'deescalation' ? '<a class="btn sm primary" href="#/psych/deesc">Open the checklist</a>' : '') + '<a class="btn sm" href="#/psych/handout?s=' + s.id + '">Handout of this section</a><button class="btn sm" id="addall">' + icons.plus + ' Add all to flashcards</button></div></div>' +
      '<p class="muted small" id="modehelp">Recall hides the Tagalog: say it aloud from the English, then tap to check.</p>' +
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
