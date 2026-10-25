/* Views: home, search, dictionary, flashcards, verbs, lessons, reading, speaking, placement, progress, settings, What's New, About. */
(function () {
  const { esc, norm, shuffle, pick, icons } = App;
  const V = (App.views = {});
  const S = () => App.state;
  const lvPill = (lv) => '<span class="pill lv">' + esc(lv) + '</span>';
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';

  /* ---------- Reusable quiz ---------- */
  // qs: [{q, opts, a, exp, cardId}]
  App.runQuiz = function (el, qs, opts) {
    opts = opts || {};
    let i = 0, right = 0;
    const draw = () => {
      if (i >= qs.length) {
        const pct = Math.round((100 * right) / qs.length);
        el.innerHTML = '<div class="card stack"><h3>' + (pct >= 80 ? 'Magaling!' : pct >= 50 ? 'Ayos!' : 'Kaya mo yan!') + ' ' + right + ' / ' + qs.length + '</h3>' +
          '<div class="progress"><i style="width:' + pct + '%"></i></div>' +
          '<div class="row"><button class="btn primary" data-act="retry">Try again</button>' + (opts.after || '') + '</div></div>';
        el.querySelector('[data-act=retry]').onclick = () => { i = 0; right = 0; qs = shuffle(qs); draw(); };
        opts.onDone && opts.onDone(right, qs.length);
        return;
      }
      const q = qs[i];
      const order = shuffle(q.opts.map((o, k) => k));
      el.innerHTML = '<div class="card stack"><div class="spread"><span class="eyebrow">Question ' + (i + 1) + ' of ' + qs.length + '</span>' + (q.say ? App.sayBtn(q.say) : '') + '</div>' +
        '<div class="' + (q.tlq ? 'tl' : '') + '" style="font-size:1.12rem;font-weight:600">' + esc(q.q) + '</div>' +
        '<div class="opts">' + order.map((k) => '<button class="opt' + (q.tlo ? ' tl' : '') + '" data-k="' + k + '">' + esc(q.opts[k]) + '</button>').join('') + '</div><div data-fb></div></div>';
      el.querySelectorAll('.opt').forEach((b) => (b.onclick = () => {
        const k = +b.dataset.k, ok = k === q.a;
        if (ok) right++;
        App.recordAnswer(ok, q.cardId);
        el.querySelectorAll('.opt').forEach((x) => { x.disabled = true; if (+x.dataset.k === q.a) x.classList.add('right'); });
        if (!ok) b.classList.add('wrong');
        el.querySelector('[data-fb]').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + '">' + (ok ? '<b>Tama!</b> ' : '<b>Mali.</b> ') + esc(q.exp || '') + '</div>' +
          '<div class="row" style="margin-top:10px"><button class="btn primary" data-act="next">' + (i + 1 < qs.length ? 'Next' : 'See score') + '</button></div>';
        el.querySelector('[data-act=next]').onclick = () => { i++; draw(); };
        el.querySelector('[data-act=next]').focus();
      }));
    };
    draw();
  };

  /* ---------- Home ---------- */
  V.home = (el) => {
    const s = S();
    const decks = App.decks();
    const due = decks.find((d) => d.id === 'due').ids.length;
    const lessonsDone = Object.keys(s.done.lessons).length;
    const nextLesson = (window.LESSONS || []).find((l) => !(l.id in s.done.lessons));
    const isNew = s.seenVersion !== APP_META.version;
    el.innerHTML =
      '<section class="hero"><svg class="rays" viewBox="0 0 100 100" aria-hidden="true">' + Array.from({ length: 8 }, (_, k) => '<rect x="47" y="2" width="6" height="30" fill="#e3b53f" transform="rotate(' + k * 45 + ' 50 50)"/>').join('') + '<circle cx="50" cy="50" r="16" fill="#e3b53f"/></svg>' +
      '<img src="icons/logo-96.png" alt=""><div><h1>Usap Tayo</h1><p>Tagalog for everyday life and for the psychiatric interview.</p></div></section>' +
      (isNew ? '<a class="tile" href="#/new" style="margin-top:12px;border-color:var(--gold)"><span class="eyebrow">What\'s New · v' + esc(APP_META.version) + '</span><h3 style="margin-top:4px">' + esc(WHATS_NEW[0].title) + '</h3><p>See what\'s in this version.</p></a>' : '') +
      '<div class="stats" style="margin-top:14px">' +
      '<div class="stat"><b>' + App.streakNow() + '</b><span>day streak</span></div>' +
      '<div class="stat"><b>' + due + '</b><span>cards due</span></div>' +
      '<div class="stat"><b>' + lessonsDone + '/' + LESSONS.length + '</b><span>lessons done</span></div>' +
      '<div class="stat"><b>' + s.xp + '</b><span>XP · level ' + esc(s.level || '—') + '</span></div></div>' +
      '<h2 style="margin-top:22px">Continue</h2><div class="grid">' +
      (due ? '<a class="tile" href="#/flash/due"><span class="eyebrow">Review</span><h3>' + due + ' cards due</h3><p>Spaced repetition keeps words fresh.</p></a>' : '<a class="tile" href="#/flash"><span class="eyebrow">Flashcards</span><h3>Start a deck</h3><p>Vocabulary, verbs, and psychiatry phrases.</p></a>') +
      (nextLesson ? '<a class="tile" href="#/lessons/' + nextLesson.id + '"><span class="eyebrow">Next lesson · ' + esc(nextLesson.level) + '</span><h3>' + esc(nextLesson.title) + '</h3><p>' + esc(nextLesson.summary) + '</p></a>' : '') +
      (!s.level ? '<a class="tile" href="#/placement"><span class="eyebrow">New here?</span><h3>Take the placement test</h3><p>20 questions to find your level.</p></a>' : '') +
      '</div>' +
      '<h2 style="margin-top:22px">Psychiatry Tagalog</h2><div class="grid">' +
      '<a class="tile" href="#/psych/s/hallucinations"><span class="eyebrow">Interview</span><h3>Hallucinations</h3><p>"May bumubulong ba sa iyo?" and more.</p></a>' +
      '<a class="tile" href="#/psych/s/suicide"><span class="eyebrow">Risk</span><h3>Suicide risk assessment</h3><p>Direct, respectful questions from ideation to plan.</p></a>' +
      '<a class="tile" href="#/psych/case/jomar"><span class="eyebrow">Case simulation</span><h3>First-episode psychosis</h3><p>Interview Jomar and his mother.</p></a>' +
      '<a class="tile" href="#/psych"><span class="eyebrow">All sections</span><h3>Open the psychiatry track</h3><p>' + PSYCH_SECTIONS.length + ' sections, ' + PSYCH_CASES.length + ' cases.</p></a></div>' +
      '<h2 style="margin-top:22px">Everything</h2><div class="grid">' +
      [['#/dict', 'Dictionary', App.DICT.length + ' entries, both directions, root-word search'], ['#/verbs', 'Verb trainer', 'Aspect and affix drills'], ['#/lessons', 'Lessons', 'Grammar and culture'], ['#/reading', 'Reading', 'Graded passages with questions'], ['#/speak', 'Speaking', 'Dialogues with listening and recording'], ['#/progress', 'Progress', 'Stats and backup']]
        .map(([h, t, p]) => '<a class="tile" href="' + h + '"><h3>' + t + '</h3><p>' + p + '</p></a>').join('') + '</div>';
  };

  /* ---------- Search results ---------- */
  V.search = (el, p, q) => {
    const term = q.q || '';
    const res = App.searchAll(term);
    const groups = {};
    res.forEach((r) => (groups[r.type] = groups[r.type] || []).push(r));
    el.innerHTML = '<h1>Search</h1><div class="row"><input class="input" id="sq" type="search" value="' + esc(term) + '" placeholder="Search Tagalog or English" style="flex:1;min-width:0"></div>' +
      '<p class="muted small">' + res.length + ' results' + (term ? ' for “' + esc(term) + '”' : '') + '. Tagalog words are matched by root too: try <a href="#/search?q=kinakain">kinakain</a> or <a href="#/search?q=binubulungan">binubulungan</a>.</p>' +
      Object.entries(groups).map(([g, items]) => '<h2>' + esc(g) + ' <span class="muted small">' + items.length + '</span></h2><div class="card">' +
        items.slice(0, 40).map((r) => '<div class="entry"><div class="w"><a href="' + r.route + '">' + esc(r.title) + '</a></div><div class="d muted">' + esc(r.sub || '') + '</div></div>').join('') + '</div>').join('');
    const inp = el.querySelector('#sq');
    inp.onkeydown = (e) => { if (e.key === 'Enter') App.go('#/search?q=' + encodeURIComponent(inp.value)); };
  };

  /* ---------- Dictionary ---------- */
  V.dict = (el, p, q) => {
    let dir = q.dir || 'both', cat = q.cat || '', term = q.q || '', letter = q.l || '';
    const draw = () => {
      let list;
      if (term) list = App.searchDict(term, dir === 'both' ? null : dir).map((r) => Object.assign({ why: r.why }, r.e));
      else {
        list = App.DICT.filter((e) => (!cat || e.cat === cat) && (!letter || e.ftl.startsWith(letter)));
        if (dir === 'en') list = list.slice().sort((a, b) => a.nen.localeCompare(b.nen));
      }
      const shown = list.slice(0, 200);
      el.querySelector('#dres').innerHTML = '<p class="muted small">' + list.length + ' entries' + (list.length > 200 ? ' (showing 200)' : '') + '</p><div class="card">' +
        (shown.length ? shown.map((e) => entryHTML(e, dir === 'en')).join('') : '<p>No match. Try a shorter word or the root form.</p>') + '</div>';
    };
    const letters = 'a b k d e g h i l m n ng o p r s t u w y'.split(' ');
    el.innerHTML = '<h1>Dictionary</h1>' +
      '<div class="stack"><input class="input" id="dq" type="search" placeholder="Type Tagalog or English (e.g., bumubulong, sad)" value="' + esc(term) + '">' +
      '<div class="spread"><div class="seg" role="group" aria-label="Direction">' +
      [['both', 'Both'], ['tl', 'Filipino → English'], ['en', 'English → Filipino']].map(([k, t]) => '<button data-dir="' + k + '" class="' + (dir === k ? 'on' : '') + '">' + t + '</button>').join('') + '</div>' +
      '<select class="input" id="dcat" style="width:auto;max-width:100%"><option value="">All topics</option>' + Object.entries(App.CATS).map(([k, t]) => '<option value="' + k + '"' + (cat === k ? ' selected' : '') + '>' + esc(t) + '</option>').join('') + '</select></div>' +
      '<div class="letters" aria-label="Browse by letter">' + letters.map((L) => '<button data-l="' + L + '" class="' + (letter === L ? 'on' : '') + '">' + L.toUpperCase() + '</button>').join('') + '</div></div><div id="dres" style="margin-top:12px"></div>';
    const dq = el.querySelector('#dq');
    let t;
    dq.oninput = () => { clearTimeout(t); t = setTimeout(() => { term = dq.value; letter = ''; draw(); }, 150); };
    el.querySelectorAll('[data-dir]').forEach((b) => (b.onclick = () => { dir = b.dataset.dir; el.querySelectorAll('[data-dir]').forEach((x) => x.classList.toggle('on', x === b)); draw(); }));
    el.querySelector('#dcat').onchange = (e) => { cat = e.target.value; term = ''; dq.value = ''; draw(); };
    el.querySelectorAll('[data-l]').forEach((b) => (b.onclick = () => { letter = letter === b.dataset.l ? '' : b.dataset.l; term = ''; dq.value = ''; el.querySelectorAll('[data-l]').forEach((x) => x.classList.toggle('on', x.dataset.l === letter)); draw(); }));
    draw();
    if (!term) setTimeout(() => window.innerWidth > 860 && dq.focus(), 0);
  };
  function entryHTML(e, enFirst) {
    const inDeck = !!S().srs[e.id];
    const head = enFirst ? '<div class="w" style="font-family:var(--font-ui)">' + esc(e.en) + '</div>' : '<div class="w"><a href="#/dict/' + e.id + '">' + esc(e.tl) + '</a></div>';
    const body = enFirst ? '<div class="d"><a class="tl" href="#/dict/' + e.id + '" style="font-weight:600">' + esc(e.tl) + '</a> <span class="muted small">' + esc(App.POS[e.pos] || '') + '</span></div>' : '<div class="d">' + esc(e.en) + ' <span class="muted small">' + esc(App.POS[e.pos] || '') + (e.root ? ' · root <a href="#/dict?q=' + encodeURIComponent(e.root) + '">' + esc(e.root) + '</a>' : '') + '</span></div>';
    return '<div class="entry">' + head + '<div class="acts">' + App.sayBtn(e.tl, e.tl) +
      '<button class="say" data-addcard="' + e.id + '" title="' + (inDeck ? 'In your review deck' : 'Add to flashcards') + '" aria-label="Add to flashcards">' + (inDeck ? icons.check : icons.plus) + '</button></div>' +
      body + (e.note ? '<div class="nn">' + esc(e.note) + '</div>' : '') + (e.why ? '<div class="nn">Matched by ' + esc(e.why) + '</div>' : '') + '</div>';
  }
  App.entryHTML = entryHTML;

  V.word = (el, p) => {
    const e = App.dictById[p.id];
    if (!e) { el.innerHTML = '<p>Word not found. <a href="#/dict">Back to dictionary</a></p>'; return; }
    const r = e.root || '';
    const related = r ? (App.byRoot.get(App.flat(r)) || []).filter((x) => x.id !== e.id) : [];
    const verb = (window.VERBS || []).find((v) => v.r === r || v.r === e.tl);
    const phrases = [];
    PSYCH_SECTIONS.forEach((s) => s.phrases.forEach((ph, i) => { if (App.flat(ph.f + ' ' + (ph.c || '')).includes(e.ftl) && e.ftl.length > 2) phrases.push([s, ph, i]); }));
    el.innerHTML = crumb([['Dictionary', '#/dict'], [e.tl]]) +
      '<div class="card stack"><div class="spread"><h1 class="tl" style="margin:0">' + esc(e.tl) + '</h1><div class="row">' + App.sayBtn(e.tl) +
      '<button class="btn sm" data-addcard="' + e.id + '">' + (S().srs[e.id] ? icons.check + ' In deck' : icons.plus + ' Add to flashcards') + '</button></div></div>' +
      '<div style="font-size:1.15rem">' + esc(e.en) + '</div><div class="row"><span class="pill">' + esc(App.POS[e.pos] || e.pos) + '</span><a class="pill" href="#/dict?cat=' + e.cat + '">' + esc(App.CATS[e.cat] || e.cat) + '</a>' + (r ? '<span class="pill">root: ' + esc(r) + '</span>' : '') + '</div>' +
      (e.note ? '<div class="notice info">' + esc(e.note) + '</div>' : '') + '</div>' +
      (verb ? '<h2 style="margin-top:18px">Verb forms</h2>' + verbTable(verb) + '<p><a href="#/verbs/' + verb.r + '">Practice this verb</a></p>' : '') +
      (related.length ? '<h2 style="margin-top:18px">Same root</h2><div class="card">' + related.map((x) => entryHTML(x)).join('') + '</div>' : '') +
      (phrases.length ? '<h2 style="margin-top:18px">In psychiatry phrases</h2><div class="card">' + phrases.slice(0, 8).map(([s, ph, i]) => '<div class="entry"><div class="w"><a href="#/psych/s/' + s.id + '?p=' + i + '">' + esc(ph.f) + '</a></div><div class="d muted">' + esc(ph.en) + '</div></div>').join('') + '</div>' : '');
  };

  /* ---------- Flashcards ---------- */
  V.flash = (el) => {
    const decks = App.decks();
    const groups = {};
    decks.forEach((d) => (groups[d.group] = groups[d.group] || []).push(d));
    const now = Date.now();
    el.innerHTML = '<h1>Flashcards</h1><p class="muted">Spaced repetition: cards you know come back less often, cards you miss come back sooner. Wrong answers anywhere in the app go to <b>My mistakes</b>.</p>' +
      '<div class="row" style="margin-bottom:12px"><span class="muted small">Card front:</span><div class="seg" role="group">' +
      [['tl-en', 'Filipino first'], ['en-tl', 'English first']].map(([k, t]) => '<button data-dirc="' + k + '" class="' + (S().settings.cardDir === k ? 'on' : '') + '">' + t + '</button>').join('') + '</div></div>' +
      Object.entries(groups).map(([g, ds]) => '<h2>' + esc(g) + '</h2><div class="grid">' + ds.map((d) => {
        const seen = d.ids.filter((id) => S().srs[id]).length;
        const due = d.ids.filter((id) => S().srs[id] && S().srs[id].due <= now).length;
        const disabled = !d.ids.length;
        return '<a class="tile" href="' + (disabled ? '#/flash' : '#/flash/' + d.id) + '"' + (disabled ? ' aria-disabled="true" style="opacity:.6"' : '') + '><h3>' + esc(d.name) + '</h3><p>' + d.ids.length + ' cards · ' + seen + ' learned</p><div class="meta row">' + (due ? '<span class="pill warn">' + due + ' due</span>' : '') + (d.id === 'mistakes' && !d.ids.length ? '<span class="pill good">No mistakes yet</span>' : '') + '</div></a>';
      }).join('') + '</div>').join('');
    el.querySelectorAll('[data-dirc]').forEach((b) => (b.onclick = () => { S().settings.cardDir = b.dataset.dirc; App.save(); V.flash(el); }));
  };

  V.review = (el, p) => {
    const deck = App.decks().find((d) => d.id === p.deck);
    if (!deck) { el.innerHTML = '<p>Deck not found. <a href="#/flash">All decks</a></p>'; return; }
    let queue = p.deck === 'mistakes' ? shuffle(deck.ids) : App.srsQueue(deck.ids);
    let i = 0, flipped = false, done = 0;
    const enFirst = S().settings.cardDir === 'en-tl';
    const draw = () => {
      if (i >= queue.length) {
        el.innerHTML = crumb([['Flashcards', '#/flash'], [deck.name]]) + '<div class="card stack" style="text-align:center"><h2>' + (done ? 'Tapos na! ' + done + ' cards reviewed.' : 'Nothing due in this deck right now.') + '</h2>' +
          '<p class="muted">' + (done ? 'Come back tomorrow for the next reviews.' : 'You have reviewed everything due and reached today\'s new-card limit for this deck.') + '</p>' +
          '<div class="row" style="justify-content:center"><a class="btn primary" href="#/flash">All decks</a><button class="btn" data-act="cram">Practice anyway</button></div></div>';
        el.querySelector('[data-act=cram]').onclick = () => { queue = pick(deck.ids, 20); i = 0; draw(); };
        return;
      }
      const c = App.cardFor(queue[i]);
      if (!c) { i++; draw(); return; }
      const front = enFirst ? esc(c.en) : esc(c.tl), back = enFirst ? esc(c.tl) : esc(c.en);
      el.innerHTML = crumb([['Flashcards', '#/flash'], [deck.name]]) +
        '<div class="spread" style="margin-bottom:8px"><span class="muted small">' + (i + 1) + ' / ' + queue.length + (S().srs[c.id] ? '' : ' · <span class="pill">new</span>') + '</span>' + App.sayBtn(c.tl) + '</div>' +
        '<div class="progress" style="margin-bottom:12px"><i style="width:' + Math.round((100 * i) / queue.length) + '%"></i></div>' +
        '<div class="card flash" id="fc" tabindex="0" role="button" aria-label="Flip card"><div>' +
        '<div class="front" style="' + (enFirst ? 'font-family:var(--font-ui);font-size:1.35rem' : '') + '">' + front + '</div>' +
        (flipped ? '<div class="back ' + (enFirst ? 'tl' : '') + '">' + back + '</div>' + (c.alt ? '<div class="hint tl">Also: ' + esc(c.alt) + '</div>' : '') + (c.note ? '<div class="hint">' + esc(c.note) + '</div>' : '') + (c.sub ? '<div class="hint">' + esc(c.sub) + '</div>' : '') : '<div class="hint">Tap or press Space to show the answer</div>') +
        '</div></div>' +
        (flipped ? '<div class="grade" style="margin-top:12px">' + [['again', 'Again', 0], ['', 'Hard', 1], ['good', 'Good', 2], ['', 'Easy', 3]].map(([cls, t, g]) => '<button class="' + cls + '" data-g="' + g + '">' + t + '<small>' + App.nextLabel(c.id, g) + '</small></button>').join('') + '</div><p class="muted small" style="text-align:center">Keys: 1 Again · 2 Hard · 3 Good · 4 Easy</p>' : '');
      const fc = el.querySelector('#fc');
      fc.onclick = (ev) => { if (ev.target.closest('.say')) return; if (!flipped) { flipped = true; if (!enFirst) App.speak(c.tl); draw(); } };
      el.querySelectorAll('[data-g]').forEach((b) => (b.onclick = () => grade(+b.dataset.g, c)));
    };
    const grade = (g, c) => { App.srsGrade(c.id, g); done++; if (g === 0) queue.push(c.id); i++; flipped = false; draw(); };
    App.keyHandler = (e) => {
      if (e.target.matches('input,textarea,select')) return;
      if (e.key === ' ' && !flipped) { e.preventDefault(); flipped = true; draw(); }
      else if (flipped && ['1', '2', '3', '4'].includes(e.key)) { const c = App.cardFor(queue[i]); c && grade(+e.key - 1, c); }
    };
    draw();
  };

  /* ---------- Verbs ---------- */
  function verbTable(v) {
    const f = App.verbForms(v);
    return '<div class="tablewrap"><table class="conj"><tr><th>Focus</th><th>Infinitive</th><th>Completed</th><th>Ongoing</th><th>Future</th></tr>' +
      Object.entries(f).map(([af, x]) => '<tr><td>' + esc(Conj.FOCUS[af] || af) + '</td>' + ['inf', 'com', 'inc', 'con'].map((k) => '<td><b>' + esc(x[k]) + '</b> ' + App.sayBtn(x[k]) + '</td>').join('') + '</tr>').join('') + '</table></div>';
  }
  App.verbTable = verbTable;
  V.verbs = (el) => {
    el.innerHTML = '<h1>Verb trainer</h1><p class="muted">Tagalog verbs change by <b>focus</b> (affix) and <b>aspect</b> (completed, ongoing, future). Drill the forms until they are automatic. Verbs marked <span class="pill">clinical</span> come up constantly in interviews.</p>' +
      '<div class="card stack"><h2 style="margin:0">Drill</h2><div class="row">' +
      '<label class="small">Verbs <select class="input" id="vset" style="width:auto"><option value="all">All verbs</option><option value="clinical">Clinical verbs</option></select></label>' +
      '<label class="small">Mode <select class="input" id="vmode" style="width:auto"><option value="type">Type the form</option><option value="mc">Multiple choice</option><option value="id">Identify the aspect</option></select></label>' +
      '<button class="btn primary" id="vgo">Start 10 questions</button></div><div id="vdrill"></div></div>' +
      '<div class="notice info" style="margin-top:12px"><b>Quick rules.</b> Ongoing and future reduplicate the first syllable: <span class="tl">kain → <b>ka</b>kain</span>. Completed and ongoing show the "started" marker: <span class="tl">-um-, nag-, -in-</span>. Read the <a href="#/lessons/aspect">aspect lesson</a> and <a href="#/lessons/focus">focus lesson</a>.</div>' +
      '<h2 style="margin-top:18px">All verbs</h2><div class="grid">' + VERBS.map((v) => '<a class="tile" href="#/verbs/' + v.r + '"><h3 class="tl">' + esc(v.r) + '</h3><p>' + esc(v.en) + '</p><div class="meta row">' + v.a.concat(Object.keys(v.o || {}).filter((k) => !v.a.includes(k))).map((a) => '<span class="pill">' + esc(a === 'custom' ? 'special' : a) + '</span>').join('') + (v.clinical ? '<span class="pill warn">clinical</span>' : '') + '</div></a>').join('') + '</div>';
    el.querySelector('#vgo').onclick = () => verbDrill(el.querySelector('#vdrill'), el.querySelector('#vset').value, el.querySelector('#vmode').value);
  };
  function verbItems(set) {
    const items = [];
    VERBS.filter((v) => set !== 'clinical' || v.clinical).forEach((v) => {
      const f = App.verbForms(v);
      Object.entries(f).forEach(([af, x]) => ['inf', 'com', 'inc', 'con'].forEach((asp) => items.push({ v, af, asp, form: x[asp], all: x })));
    });
    return items;
  }
  function verbDrill(box, set, mode) {
    const items = pick(verbItems(set), 10);
    if (mode === 'type') {
      let i = 0, right = 0;
      const draw = () => {
        if (i >= items.length) { box.innerHTML = '<div class="feedback ok"><b>' + right + ' / ' + items.length + '</b> correct. <button class="btn sm" id="again">Again</button></div>'; box.querySelector('#again').onclick = () => verbDrill(box, set, mode); return; }
        const it = items[i];
        box.innerHTML = '<div class="stack" style="margin-top:12px"><span class="eyebrow">' + (i + 1) + ' / ' + items.length + '</span>' +
          '<div>Root <b class="tl">' + esc(it.v.r) + '</b> (' + esc(it.v.en) + ') · <b>' + esc(Conj.FOCUS[it.af] || it.af) + '</b> · <b>' + esc(Conj.ASPECTS[it.asp]) + '</b></div>' +
          '<div class="row"><input class="input tl" id="vin" autocomplete="off" autocapitalize="off" spellcheck="false" style="flex:1;min-width:0" placeholder="Type the verb form"><button class="btn primary" id="vchk">Check</button></div><div id="vfb"></div></div>';
        const inp = box.querySelector('#vin');
        inp.focus();
        const check = () => {
          const ok = App.flat(inp.value) === App.flat(it.form);
          if (ok) right++;
          App.recordAnswer(ok, 'v:' + it.v.r + ':' + it.af + ':' + (it.asp === 'inf' ? 'com' : it.asp));
          box.querySelector('#vfb').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + '">' + (ok ? '<b>Tama!</b> ' : '<b>Answer:</b> ') + '<span class="tl">' + esc(it.form) + '</span> ' + App.sayBtn(it.form) +
            '<div class="small muted" style="margin-top:4px">' + esc(it.all.inf + ' · ' + it.all.com + ' · ' + it.all.inc + ' · ' + it.all.con) + '</div></div><button class="btn primary" id="vnext" style="margin-top:8px">Next</button>';
          box.querySelector('#vchk').disabled = true; inp.disabled = true;
          const nx = box.querySelector('#vnext'); nx.onclick = () => { i++; draw(); }; nx.focus();
        };
        box.querySelector('#vchk').onclick = check;
        inp.onkeydown = (e) => { if (e.key === 'Enter') check(); };
      };
      draw();
    } else if (mode === 'mc') {
      const qs = items.map((it) => {
        const opts = [...new Set([it.form, it.all.inf, it.all.com, it.all.inc, it.all.con])];
        const wrong = shuffle(opts.filter((o) => o !== it.form)).slice(0, 3);
        const all = [it.form].concat(wrong);
        return { q: it.v.r + ' (' + it.v.en + ') — ' + (Conj.FOCUS[it.af] || it.af) + ', ' + Conj.ASPECTS[it.asp].toLowerCase(), opts: all, a: 0, exp: it.all.inf + ' · ' + it.all.com + ' · ' + it.all.inc + ' · ' + it.all.con, tlo: true };
      });
      const d = document.createElement('div'); d.style.marginTop = '12px'; box.innerHTML = ''; box.appendChild(d);
      App.runQuiz(d, qs);
    } else {
      const names = { inf: 'Infinitive / command', com: 'Completed', inc: 'Ongoing', con: 'Future' };
      const qs = items.filter((it) => it.asp !== 'inf' || it.all.inf !== it.all.com).map((it) => ({ q: it.form + '  (' + it.v.en + ')', say: it.form, opts: ['Infinitive / command', 'Completed', 'Ongoing', 'Future'], a: ['inf', 'com', 'inc', 'con'].indexOf(it.asp), exp: names[it.asp] + ' of ' + it.v.r + ' (' + (Conj.FOCUS[it.af] || it.af) + ').', tlq: true }));
      const d = document.createElement('div'); d.style.marginTop = '12px'; box.innerHTML = ''; box.appendChild(d);
      App.runQuiz(d, qs);
    }
  }
  V.verb = (el, p) => {
    const v = VERBS.find((x) => x.r === p.root);
    if (!v) { el.innerHTML = '<p>Verb not found. <a href="#/verbs">All verbs</a></p>'; return; }
    const [exT, exE] = (v.ex || '|').split('|');
    el.innerHTML = crumb([['Verb trainer', '#/verbs'], [v.r]]) + '<h1><span class="tl">' + esc(v.r) + '</span> · ' + esc(v.en) + '</h1>' +
      verbTable(v) + (exT ? '<div class="card" style="margin-top:12px"><div class="spread"><div><div class="tl" style="font-size:1.12rem">' + esc(exT) + '</div><div class="muted">' + esc(exE) + '</div></div>' + App.sayBtn(exT) + '</div></div>' : '') +
      '<div class="row" style="margin-top:12px"><button class="btn" id="addv">' + icons.plus + ' Add forms to flashcards</button><a class="btn" href="#/dict?q=' + encodeURIComponent(v.r) + '">Words with this root</a></div>';
    el.querySelector('#addv').onclick = () => {
      const f = App.verbForms(v); let n = 0;
      Object.keys(f).forEach((af) => ['com', 'inc', 'con'].forEach((asp) => { const id = 'v:' + v.r + ':' + af + ':' + asp; if (!S().srs[id]) { S().srs[id] = { e: 2.5, i: 0, r: 0, due: Date.now() }; n++; } }));
      App.save(); App.toast(n + ' cards added. Find them under All due reviews.');
    };
  };

  /* ---------- Lessons ---------- */
  V.lessons = (el) => {
    const units = {};
    LESSONS.forEach((l) => (units[l.unit] = units[l.unit] || []).push(l));
    el.innerHTML = '<h1>Lessons</h1><p class="muted">Short grammar and culture lessons, each with a quiz. Tap <span class="kbd">🔊</span> on any example to hear it.</p>' +
      Object.entries(units).map(([u, ls]) => '<h2>' + esc(u) + '</h2><div class="grid">' + ls.map((l) => {
        const sc = S().done.lessons[l.id];
        return '<a class="tile" href="#/lessons/' + l.id + '"><div class="row">' + lvPill(l.level) + (sc != null ? '<span class="pill good">' + icons.check.replace('<svg', '<svg width="12" height="12"') + ' ' + sc + '%</span>' : '') + '</div><h3 style="margin-top:6px">' + esc(l.title) + '</h3><p>' + esc(l.summary) + '</p></a>';
      }).join('') + '</div>').join('');
  };
  V.lesson = (el, p) => {
    const l = LESSONS.find((x) => x.id === p.id);
    if (!l) { el.innerHTML = '<p>Lesson not found.</p>'; return; }
    const idx = LESSONS.indexOf(l), next = LESSONS[idx + 1], prev = LESSONS[idx - 1];
    el.innerHTML = crumb([['Lessons', '#/lessons'], [l.title]]) + '<div class="row">' + lvPill(l.level) + '<span class="muted small">' + esc(l.unit) + '</span></div><h1 style="margin-top:6px">' + esc(l.title) + '</h1>' +
      '<div class="lesson-body">' + l.body.replace(/<table>/g, '<div class="tablewrap"><table>').replace(/<\/table>/g, '</table></div>') + '</div>' +
      '<h2 style="margin-top:20px">Check yourself</h2><div id="lq"></div>' +
      '<div class="spread" style="margin-top:16px">' + (prev ? '<a class="btn" href="#/lessons/' + prev.id + '">← ' + esc(prev.title) + '</a>' : '<span></span>') + (next ? '<a class="btn" href="#/lessons/' + next.id + '">' + esc(next.title) + ' →</a>' : '') + '</div>';
    // speak buttons for examples
    el.querySelectorAll('.lesson-body .ex').forEach((ex) => { const b = ex.querySelector('b'); if (b) { ex.style.gridTemplateColumns = 'minmax(0,1fr) auto'; const btn = document.createElement('div'); btn.innerHTML = App.sayBtn(b.textContent); btn.style.gridRow = '1 / span 2'; btn.style.gridColumn = '2'; ex.appendChild(btn.firstChild); } });
    App.runQuiz(el.querySelector('#lq'), l.quiz.map(([q, opts, a, exp]) => ({ q, opts, a, exp })), {
      onDone: (r, n) => { const pct = Math.round((100 * r) / n); S().done.lessons[l.id] = Math.max(pct, S().done.lessons[l.id] || 0); App.activity(10); }
    });
  };

  /* ---------- Reading ---------- */
  V.reading = (el) => {
    el.innerHTML = '<h1>Reading</h1><p class="muted">Read the Tagalog first. Reveal the translation only when you need it, then answer the questions. Passages marked <span class="pill warn">clinical</span> practice psychiatric content.</p><div class="grid">' +
      READING.map((r) => '<a class="tile" href="#/reading/' + r.id + '"><div class="row">' + lvPill(r.level) + (r.psych ? '<span class="pill warn">clinical</span>' : '') + (S().done.reading[r.id] != null ? '<span class="pill good">' + S().done.reading[r.id] + '%</span>' : '') + '</div><h3 class="tl" style="margin-top:6px">' + esc(r.title) + '</h3><p>' + esc(r.titleEn) + '</p></a>').join('') + '</div>';
  };
  V.passage = (el, p) => {
    const r = READING.find((x) => x.id === p.id);
    if (!r) { el.innerHTML = '<p>Passage not found.</p>'; return; }
    let showTr = false;
    const draw = () => {
      el.querySelector('#pbody').innerHTML = r.tl.map((t, i) => '<p>' + esc(t) + '</p>' + (showTr ? '<p class="tr">' + esc(r.en[i]) + '</p>' : '')).join('');
      el.querySelector('#trbtn').textContent = showTr ? 'Hide translation' : 'Show translation';
    };
    el.innerHTML = crumb([['Reading', '#/reading'], [r.title]]) + '<div class="row">' + lvPill(r.level) + '</div><h1 class="tl" style="margin-top:6px">' + esc(r.title) + '</h1><p class="muted">' + esc(r.titleEn) + '</p>' +
      '<div class="row"><button class="btn" id="readall">' + icons.sound + ' Listen</button><button class="btn" id="trbtn"></button></div>' +
      '<div class="card passage" id="pbody" style="margin-top:12px"></div>' +
      '<h2 style="margin-top:16px">Glossary</h2><div class="gloss">' + r.gloss.map(([t, e]) => '<span><b>' + esc(t) + '</b> — ' + esc(e) + '</span>').join('') + '</div>' +
      '<h2 style="margin-top:16px">Questions</h2><div id="rq"></div>';
    el.querySelector('#trbtn').onclick = () => { showTr = !showTr; draw(); };
    el.querySelector('#readall').onclick = () => App.speakAll(r.tl, 350);
    draw();
    App.runQuiz(el.querySelector('#rq'), r.q.map(([q, opts, a, exp]) => ({ q, opts, a, exp, tlq: !/^(Which|What|Why|How|Clinically)\b|^"/.test(q) })), {
      onDone: (rt, n) => { S().done.reading[r.id] = Math.max(Math.round((100 * rt) / n), S().done.reading[r.id] || 0); App.activity(10); }
    });
  };

  /* ---------- Speaking ---------- */
  V.speak = (el) => {
    el.innerHTML = '<h1>Speaking</h1>' + speechSupportNote() +
      '<p class="muted">Each dialogue has three modes: <b>Listen</b> to the whole conversation, <b>Shadow</b> each line after the audio, and <b>Role-play</b>, where your lines are hidden and you say them from the English cue. Clinical dialogues are in the <a href="#/psych">psychiatry track</a>.</p><div class="grid">' +
      DIALOGUES.map((d) => '<a class="tile" href="#/speak/' + d.id + '"><div class="row">' + lvPill(d.level) + (S().done.dialogues[d.id] != null ? '<span class="pill good">' + S().done.dialogues[d.id] + '%</span>' : '') + '</div><h3 style="margin-top:6px">' + esc(d.title) + '</h3><p>' + d.lines.length + ' lines · you are ' + esc(d.roles[d.you]) + '</p></a>').join('') + '</div>' +
      '<h2 style="margin-top:18px">Clinical dialogues</h2><div class="grid">' + PSYCH_CASES.map((c) => '<a class="tile" href="#/speak/case-' + c.id + '"><div class="row">' + lvPill(c.level) + '<span class="pill warn">clinical</span></div><h3 style="margin-top:6px">' + esc(c.title) + '</h3><p>Role-play the best-practice interview lines.</p></a>').join('') + '</div>';
  };
  function speechSupportNote() {
    const st = App.audioStatus();
    const parts = [];
    if (st.pack) { /* recorded Filipino audio covers the app's phrases */ }
    else if (st.voiceKind === 'filipino' || st.voiceKind === 'chosen') { /* device Filipino voice */ }
    else if (st.voiceKind === 'near') parts.push('The Filipino audio pack is not installed yet, so audio uses the closest voice on this device (' + esc(st.voiceName) + '). It sounds closer to Tagalog than an English voice, but not native.');
    else parts.push(App.canSpeak ? 'No Filipino voice is available yet. Install the audio pack (see Settings → Voice) for natural Filipino audio.' : 'This browser has no text-to-speech.');
    if (!App.canListen) parts.push('Speech scoring isn\'t available in this browser (it works best in Chrome). You can still use <b>Record</b> to compare.');
    return parts.length ? '<div class="notice" style="margin-bottom:12px">' + parts.join(' ') + ' <a href="#/settings">Voice settings</a></div>' : '';
  }

  App.speechSupportNote = speechSupportNote;
  // Turn a case into a dialogue: patient line + best clinician response
  App.caseDialogue = (c) => {
    const lines = [];
    c.steps.forEach((s) => { lines.push([1, s.line[0], s.line[1], null, s.who]); const best = s.choices.find((x) => x.score === 2); lines.push([0, best.tl, best.en]); });
    return { id: 'case-' + c.id, level: c.level, title: c.title + ' (clinical)', roles: ['You (doctor)', 'Patient/family'], you: 0, lines, setting: c.setting };
  };
  V.dialogue = (el, p) => {
    const d = p.id.startsWith('case-') ? App.caseDialogue(PSYCH_CASES.find((c) => 'case-' + c.id === p.id) || PSYCH_CASES[0]) : DIALOGUES.find((x) => x.id === p.id);
    if (!d) { el.innerHTML = '<p>Dialogue not found.</p>'; return; }
    let mode = 'listen', step = 0, scores = [], rec = null, recUrl = {};
    const reg = S().settings.register;
    const textOf = (l) => (reg === 'c' && l[3] ? l[3] : l[1]);
    const draw = () => {
      const lines = d.lines.map((l, i) => {
        const me = l[0] === d.you, hidden = mode === 'role' && me && i >= step, active = mode !== 'listen' && i === step;
        const who = l[4] || d.roles[l[0]];
        return '<div class="line' + (me ? ' me' : '') + (hidden ? ' masked' : '') + '"' + (active ? ' style="outline:2px solid var(--gold)"' : '') + (mode !== 'listen' && i > step ? ' hidden' : '') + '>' +
          '<div class="spread"><span class="who">' + esc(who) + '</span>' + (hidden ? '' : App.sayBtn(textOf(l))) + '</div>' +
          '<div class="t">' + esc(textOf(l)) + '</div><div class="e">' + esc(l[2]) + '</div>' +
          (scores[i] != null ? '<div class="small"><span class="score">' + scores[i].s + '%</span> match · heard: <i>' + esc(scores[i].heard) + '</i></div>' : '') +
          (recUrl[i] ? '<audio controls src="' + recUrl[i] + '" style="width:100%;height:36px"></audio>' : '') + '</div>';
      }).join('');
      const cur = d.lines[step];
      const myTurn = mode !== 'listen' && cur && (mode === 'shadow' || cur[0] === d.you);
      el.querySelector('#dlg').innerHTML = lines;
      el.querySelector('#dctl').innerHTML = mode === 'listen'
        ? '<button class="btn primary" id="playall">' + icons.sound + ' Play all</button>'
        : (cur ? (myTurn
          ? '<span class="muted small">' + (mode === 'role' ? 'Your line: say it in Tagalog.' : 'Repeat after the audio.') + '</span>' +
            (mode === 'shadow' ? '<button class="btn" id="hear">' + icons.sound + ' Hear</button>' : '') +
            (App.canListen ? '<button class="btn primary" id="mic">' + icons.mic + ' Speak</button>' : '') +
            (App.canRecord ? '<button class="btn" id="rec">' + icons.rec + ' Record</button>' : '') +
            '<button class="btn" id="reveal">' + (mode === 'role' ? 'Reveal & next' : 'Next') + '</button>'
          : '<button class="btn primary" id="nextline">' + icons.sound + ' Play their line</button>')
          : '<span class="pill good">Finished</span>' + (scores.filter(Boolean).length ? ' <span class="muted small">Average match ' + avg() + '%</span>' : '') + '<button class="btn" id="restart">Start over</button>');
      bind();
    };
    const avg = () => { const s = scores.filter(Boolean).map((x) => x.s); return s.length ? Math.round(s.reduce((a, b) => a + b, 0) / s.length) : 0; };
    const advance = () => { step++; if (step >= d.lines.length) { const a = avg(); if (a) S().done.dialogues[d.id] = Math.max(a, S().done.dialogues[d.id] || 0); App.activity(10); } draw(); const c = d.lines[step]; if (c && mode === 'role' && c[0] !== d.you) setTimeout(() => App.speak(textOf(c)), 250); };
    const bind = () => {
      const q = (s) => el.querySelector(s);
      if (q('#playall')) q('#playall').onclick = () => App.speakAll(d.lines.map(textOf), 300);
      if (q('#hear')) q('#hear').onclick = () => App.speak(textOf(d.lines[step]));
      if (q('#nextline')) q('#nextline').onclick = () => { App.speak(textOf(d.lines[step])); advance(); };
      if (q('#reveal')) q('#reveal').onclick = advance;
      if (q('#restart')) q('#restart').onclick = () => { step = 0; scores = []; recUrl = {}; draw(); };
      if (q('#mic')) q('#mic').onclick = () => {
        const target = textOf(d.lines[step]); const i = step;
        q('#mic').innerHTML = '<span class="recdot"></span> Listening…'; q('#mic').disabled = true;
        const r = App.listen((alts) => { const best = alts.map((a) => ({ heard: a, s: App.similarity(target, a) })).sort((a, b) => b.s - a.s)[0]; scores[i] = best; App.recordAnswer(best.s >= 70); draw(); }, () => { const m = q('#mic'); if (m) { m.disabled = false; m.innerHTML = icons.mic + ' Speak'; } });
        if (!r) App.toast('Could not start speech recognition.');
      };
      if (q('#rec')) q('#rec').onclick = async () => {
        if (rec) { const url = await rec.stop(); rec = null; recUrl[step] = url; draw(); return; }
        try { rec = await App.record(); q('#rec').innerHTML = '<span class="recdot"></span> Stop'; } catch (e) { App.toast('Microphone unavailable or permission denied.'); }
      };
    };
    el.innerHTML = crumb([['Speaking', '#/speak'], [d.title]]) + '<div class="row">' + lvPill(d.level) + '</div><h1 style="margin-top:6px">' + esc(d.title) + '</h1>' + (d.setting ? '<p class="muted">' + esc(d.setting) + '</p>' : '') + speechSupportNote() +
      '<div class="seg" role="group" aria-label="Mode" style="margin-bottom:12px">' + [['listen', 'Listen'], ['shadow', 'Shadow'], ['role', 'Role-play']].map(([k, t]) => '<button data-m="' + k + '" class="' + (mode === k ? 'on' : '') + '">' + t + '</button>').join('') + '</div>' +
      '<div class="dlg" id="dlg"></div><div class="row" id="dctl" style="margin-top:14px;position:sticky;bottom:calc(70px + env(safe-area-inset-bottom,0px));background:var(--bg);padding:8px 0"></div>';
    el.querySelectorAll('[data-m]').forEach((b) => (b.onclick = () => { mode = b.dataset.m; step = 0; scores = []; recUrl = {}; el.querySelectorAll('[data-m]').forEach((x) => x.classList.toggle('on', x === b)); draw(); const c = d.lines[0]; if (mode === 'role' && c[0] !== d.you) setTimeout(() => App.speak(textOf(c)), 250); }));
    draw();
  };

  /* ---------- Placement ---------- */
  V.placement = (el) => {
    el.innerHTML = '<h1>Placement test</h1><p class="muted">20 questions from beginner (A1) to upper-intermediate (B2). Skip what you don\'t know; guessing only hides your real level.</p><div id="pq"></div>';
    const qs = PLACEMENT.map(([lv, q, opts, a]) => ({ lv, q, opts: opts.concat(["I don't know"]), a }));
    let i = 0; const got = { A1: 0, A2: 0, B1: 0, B2: 0 }, tot = { A1: 0, A2: 0, B1: 0, B2: 0 };
    qs.forEach((q) => tot[q.lv]++);
    const box = el.querySelector('#pq');
    const draw = () => {
      if (i >= qs.length) {
        let level = 'A1';
        if (got.A1 / tot.A1 >= 0.8) level = 'A2';
        if (level === 'A2' && got.A2 / tot.A2 >= 0.6) level = 'B1';
        if (level === 'B1' && got.B1 / tot.B1 >= 0.6) level = 'B2';
        if (level === 'B2' && got.B2 / tot.B2 < 0.6) level = 'B1';
        S().level = level; App.activity(20);
        const rec = { A1: ['#/lessons/pronounce', 'Start with Sounds and spelling, then the markers lesson.'], A2: ['#/lessons/focus', 'Go to verb focus and aspect, and drill the verb trainer.'], B1: ['#/psych', 'You\'re ready for the psychiatry track. Keep the verb trainer going.'], B2: ['#/psych/case/jomar', 'Jump into the case simulations and interpretation drills.'] }[level];
        box.innerHTML = '<div class="card stack"><span class="eyebrow">Your level</span><h2 style="margin:0">' + level + '</h2>' +
          '<div class="tablewrap"><table><tr><th>Level</th><th>Score</th></tr>' + Object.keys(got).map((k) => '<tr><td>' + k + '</td><td>' + got[k] + ' / ' + tot[k] + '</td></tr>').join('') + '</table></div>' +
          '<p>' + rec[1] + '</p><div class="row"><a class="btn primary" href="' + rec[0] + '">Go there</a><a class="btn" href="#/">Home</a></div></div>';
        return;
      }
      const q = qs[i];
      box.innerHTML = '<div class="card stack"><span class="eyebrow">' + (i + 1) + ' / ' + qs.length + '</span><div style="font-weight:600;font-size:1.08rem">' + esc(q.q) + '</div><div class="opts">' +
        q.opts.map((o, k) => '<button class="opt" data-k="' + k + '">' + esc(o) + '</button>').join('') + '</div></div>';
      box.querySelectorAll('.opt').forEach((b) => (b.onclick = () => { if (+b.dataset.k === q.a) got[q.lv]++; i++; draw(); }));
    };
    draw();
  };

  /* ---------- Progress ---------- */
  V.progress = (el) => {
    const s = S();
    const learned = Object.keys(s.srs).length;
    const mature = Object.values(s.srs).filter((c) => c.i >= 21).length;
    const acc = s.stats.answered ? Math.round((100 * s.stats.correct) / s.stats.answered) : 0;
    const days = new Set(s.streak.days || []);
    const cal = Array.from({ length: 84 }, (_, k) => { const d = new Date(Date.now() - (83 - k) * 864e5); const key = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); return '<i title="' + key + '" style="display:block;aspect-ratio:1;border-radius:3px;background:' + (days.has(key) ? 'var(--gold)' : 'var(--surface-2)') + '"></i>'; }).join('');
    const sec = PSYCH_SECTIONS.length, secSeen = Object.keys(s.done.sections).length;
    el.innerHTML = '<h1>Progress</h1><div class="stats">' +
      [[App.streakNow(), 'day streak'], [s.streak.best || 0, 'best streak'], [s.xp, 'XP'], [s.level || '—', 'level'], [learned, 'cards learned'], [mature, 'cards mature (21d+)'], [acc + '%', 'accuracy'], [s.mistakes.length, 'in mistakes deck']]
        .map(([b, t]) => '<div class="stat"><b>' + esc(b) + '</b><span>' + t + '</span></div>').join('') + '</div>' +
      '<h2 style="margin-top:18px">Last 12 weeks</h2><div class="card"><div style="display:grid;grid-template-columns:repeat(21,1fr);gap:3px;max-width:520px">' + cal + '</div></div>' +
      '<h2 style="margin-top:18px">Completion</h2><div class="card stack">' +
      [['Lessons', Object.keys(s.done.lessons).length, LESSONS.length], ['Reading passages', Object.keys(s.done.reading).length, READING.length], ['Dialogues', Object.keys(s.done.dialogues).length, DIALOGUES.length + PSYCH_CASES.length], ['Psychiatry sections opened', secSeen, sec], ['Case simulations', Object.keys(s.done.cases).length, PSYCH_CASES.length]]
        .map(([t, a, b]) => '<div><div class="spread small"><span>' + t + '</span><span class="muted">' + a + ' / ' + b + '</span></div><div class="progress"><i style="width:' + Math.round((100 * a) / Math.max(1, b)) + '%"></i></div></div>').join('') + '</div>' +
      '<h2 style="margin-top:18px">Backup</h2><div class="card stack"><p style="margin:0">Progress is saved on this device. Export a backup file to move it to another phone or browser.</p>' +
      '<div class="row"><button class="btn" id="exp">Export backup</button><label class="btn" for="imp">Import backup</label><input type="file" id="imp" accept="application/json,.json" hidden></div>' +
      '<details><summary class="small muted">Copy backup as text instead</summary><textarea class="input" id="bk" rows="4" style="margin-top:8px;font-family:ui-monospace,monospace;font-size:.75rem"></textarea><div class="row" style="margin-top:6px"><button class="btn sm" id="bkload">Load from text</button></div></details></div>';
    el.querySelector('#bk').value = JSON.stringify(s);
    el.querySelector('#exp').onclick = () => {
      const blob = new Blob([JSON.stringify(s, null, 1)], { type: 'application/json' });
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'usap-tayo-backup-' + App.today() + '.json'; document.body.appendChild(a); a.click(); a.remove();
      App.toast('Backup downloaded. If nothing downloaded, copy the text backup below.');
    };
    const load = (txt) => { try { const o = JSON.parse(txt); if (!o || typeof o !== 'object' || !o.settings) throw 0; App.importState(o); App.applyTheme(); App.toast('Backup restored.'); V.progress(el); } catch (e) { App.toast('That file is not a Usap Tayo backup.'); } };
    el.querySelector('#imp').onchange = (e) => { const f = e.target.files[0]; if (f) f.text().then(load); };
    el.querySelector('#bkload').onclick = () => load(el.querySelector('#bk').value);
  };

  /* ---------- Settings ---------- */
  V.settings = (el) => {
    const s = S().settings;
    const voices = App.voices();
    const fil = App.filipinoVoices();
    el.innerHTML = '<h1>Settings</h1><div class="stack">' +
      '<div class="card stack"><h2 style="margin:0">Appearance</h2><div class="seg" role="group" aria-label="Theme">' + [['system', 'System'], ['light', 'Light'], ['dark', 'Dark']].map(([k, t]) => '<button data-theme="' + k + '" class="' + (s.theme === k ? 'on' : '') + '">' + t + '</button>').join('') + '</div></div>' +
      '<div class="card stack"><h2 style="margin:0">Register</h2><p class="muted" style="margin:0">Which version of each psychiatry phrase to show first. Respectful uses <i>po</i> and <i>kayo</i> (for elders, most adult patients, and family). Everyday uses <i>ka/mo</i> and some Taglish (for younger patients and peers).</p>' +
      '<div class="seg" role="group" aria-label="Register">' + [['f', 'Respectful (po)'], ['c', 'Everyday / Taglish']].map(([k, t]) => '<button data-reg="' + k + '" class="' + (s.register === k ? 'on' : '') + '">' + t + '</button>').join('') + '</div></div>' +
      '<div class="card stack"><h2 style="margin:0">Voice</h2>' + voiceCard(s, voices) + '</div>' +
      '<div class="card stack"><h2 style="margin:0">Flashcards</h2><label>New cards per day <input class="input" type="number" id="npd" min="5" max="100" value="' + s.newPerDay + '" style="width:120px"></label></div>' +
      '<div class="card stack"><h2 style="margin:0">Install</h2><p style="margin:0">Add Usap Tayo to your home screen to use it like an app, even offline. iPhone: Safari → Share → <b>Add to Home Screen</b>. Android: Chrome menu → <b>Install app</b>.</p><div class="row"><button class="btn" id="install" hidden>Install now</button></div></div>' +
      '<div class="card stack"><h2 style="margin:0">Reset</h2><p class="muted" style="margin:0">Erase all progress on this device. Export a backup first if you want to keep it.</p><div class="row"><button class="btn" id="reset1">Erase progress…</button><span id="reset2" hidden><span class="small">Are you sure? </span><button class="btn sm" id="resetyes" style="color:var(--bad);border-color:var(--bad)">Yes, erase everything</button> <button class="btn sm" id="resetno">Cancel</button></span></div></div>' +
      '</div>';
    el.querySelectorAll('[data-theme]').forEach((b) => (b.onclick = () => { s.theme = b.dataset.theme; App.save(); App.applyTheme(); V.settings(el); }));
    el.querySelectorAll('[data-reg]').forEach((b) => (b.onclick = () => { s.register = b.dataset.reg; App.save(); V.settings(el); }));
    el.querySelector('#voice').onchange = (e) => { s.voice = e.target.value; App.save(); };
    el.querySelectorAll('[data-vsrc]').forEach((b) => (b.onclick = () => { s.voiceSource = b.dataset.vsrc; App.save(); V.settings(el); }));
    const dl = el.querySelector('#dlAudio');
    if (dl) dl.onclick = async () => {
      const keys = [...App.pack.keys], stat = el.querySelector('#dlStat');
      dl.disabled = true; let n = 0, fail = 0;
      let cache = null; try { cache = await caches.open('usaptayo-audio'); } catch (e) {}
      for (let i = 0; i < keys.length; i += 8) {
        await Promise.all(keys.slice(i, i + 8).map(async (k) => {
          const url = 'audio/' + k + '.mp3';
          try { if (cache && (await cache.match(url))) { n++; return; } const r = await fetch(url); if (!r.ok) throw 0; if (cache) await cache.put(url, r); n++; } catch (e) { fail++; }
        }));
        stat.textContent = 'Saved ' + n + ' of ' + keys.length + (fail ? ' (' + fail + ' failed)' : '');
      }
      stat.textContent = fail ? 'Saved ' + n + ' of ' + keys.length + '. Some failed; tap again to retry.' : 'All ' + n + ' clips saved for offline use.';
      dl.disabled = false;
    };
    el.querySelector('#rate').oninput = (e) => { s.rate = +e.target.value; App.save(); };
    el.querySelector('#npd').onchange = (e) => { s.newPerDay = Math.max(5, Math.min(100, +e.target.value || 20)); App.save(); };
    el.querySelector('#test').onclick = () => App.speak('Magandang umaga po. Kumusta po kayo?');
    if (App.installPrompt) { const b = el.querySelector('#install'); b.hidden = false; b.onclick = () => App.installPrompt.prompt(); }
    el.querySelector('#reset1').onclick = () => { el.querySelector('#reset2').hidden = false; };
    el.querySelector('#resetno').onclick = () => { el.querySelector('#reset2').hidden = true; };
    el.querySelector('#resetyes').onclick = () => { App.reset(); App.applyTheme(); App.toast('Progress erased.'); V.settings(el); };
    if (!voices.length && App.canSpeak) setTimeout(() => { if (App.voices().length && location.hash.startsWith('#/settings')) V.settings(el); }, 600);
  };

  function voiceCard(s, voices) {
    const st = App.audioStatus(), info = App.pack.info;
    const packLine = info
      ? '<span class="pill good">Installed</span> ' + info.count + ' recorded clips · ' + esc(info.voice) + ' · ' + esc(info.generated) + ' · ' + (info.bytes / 1e6).toFixed(0) + ' MB'
      : (App.pack.ready ? '<span class="pill warn">Not installed yet</span> The recordings are made by a one-click job on GitHub. See "Audio pack" in the README.' : 'Checking…');
    const dev = App.bestTagalogVoice();
    const devLine = dev.kind === 'filipino' || dev.kind === 'chosen' ? 'Filipino voice: ' + esc(dev.voice.name) : dev.kind === 'near' ? 'No Filipino voice on this device. Closest match: ' + esc(dev.voice.name + ' (' + dev.voice.lang + ')') + '.' : 'No usable voice on this device.';
    return '<div class="seg" role="group" aria-label="Voice source" style="display:flex;flex-wrap:wrap">' + [['pack', 'Recorded Filipino voice'], ['device', 'Device voice']].map(([k, t]) => '<button data-vsrc="' + k + '" class="' + (s.voiceSource === k ? 'on' : '') + '">' + t + '</button>').join('') + '</div>' +
      '<div class="small"><b>Audio pack:</b> ' + packLine + '</div>' +
      (info ? '<div class="row"><button class="btn sm" id="dlAudio">Save all audio for offline use</button><span class="small muted" id="dlStat"></span></div>' : '') +
      '<div class="small"><b>Device voice:</b> ' + devLine + ' Used for anything without a recording' + (s.voiceSource === 'device' ? ' and, with this setting, for everything' : '') + '. It never uses an English voice for Tagalog unless you pick one below.</div>' +
      '<details><summary class="small">Choose a device voice</summary><label class="small" style="display:block;margin-top:6px">Voice <select class="input" id="voice"><option value="">Automatic</option>' + voices.map((v) => '<option value="' + esc(v.name) + '"' + (s.voice === v.name ? ' selected' : '') + '>' + esc(v.name + ' (' + v.lang + ')') + '</option>').join('') + '</select></label>' +
      '<p class="small muted" style="margin:6px 0 0">Android: Settings → Google Text-to-speech → install Filipino. Microsoft Edge on a computer includes natural Filipino voices (Blessica, Angelo). iPhone has no Filipino voice, so use the recorded pack.</p></details>' +
      '<label>Speed <input type="range" id="rate" min="0.5" max="1.2" step="0.05" value="' + s.rate + '" style="width:100%"></label>' +
      '<div class="row"><button class="btn" id="test">' + icons.sound + ' Test: "Magandang umaga po. Kumusta po kayo?"</button></div>';
  }

  /* ---------- What's New ---------- */
  V.whatsnew = (el) => {
    S().seenVersion = APP_META.version; App.save();
    const label = { new: ['New', 'good'], improved: ['Improved', ''], fixed: ['Fixed', 'warn'], content: ['Content', ''] };
    el.innerHTML = '<h1>What\'s New</h1><p class="muted">Latest version ' + esc(APP_META.version) + ' · ' + esc(APP_META.updated) + '</p>' +
      WHATS_NEW.map((r) => '<div class="card stack" style="margin-bottom:12px"><div class="spread"><h2 style="margin:0">Version ' + esc(r.version) + ' · ' + esc(r.title) + '</h2><span class="muted small">' + esc(r.date) + '</span></div><div class="chg">' +
        r.items.map(([t, txt]) => '<span class="pill ' + (label[t] || ['', ''])[1] + '">' + (label[t] || [t])[0] + '</span><span>' + esc(txt) + '</span>').join('') + '</div></div>').join('') +
      '<p class="muted small">Suggestions or corrections? Email <span style="user-select:all">' + esc(APP_META.email) + '</span>.</p>';
  };

  /* ---------- About ---------- */
  V.about = (el) => {
    el.innerHTML = '<div class="card stack" style="text-align:center;align-items:center;justify-items:center"><img src="icons/icon-192.png" alt="Usap Tayo icon" width="96" height="96" style="border-radius:22px"><h1 style="margin:0">Usap Tayo</h1><p class="muted" style="margin:0">' + esc(APP_META.tagline) + ' · version ' + esc(APP_META.version) + '</p>' +
      '<p style="margin:8px 0 0"><b>App created by ' + esc(APP_META.author) + '.</b><br>Latest version ' + esc(APP_META.updated) + '.<br><a href="mailto:' + esc(APP_META.email) + '">' + esc(APP_META.email) + '</a></p>' +
      '<div class="row" style="justify-content:center"><a class="btn" href="#/new">What\'s New</a><button class="btn" id="copymail">Copy email</button></div></div>' +
      '<h2 style="margin-top:18px">About the content</h2><div class="card stack"><p style="margin:0">"Usap tayo" means "let\'s talk." The app teaches conversational Tagalog (Filipino) to English speakers, with a training track for psychiatric interviews with Filipino-speaking patients.</p>' +
      '<p style="margin:0">Psychiatry phrases are practice phrasings written for training. They are <b>not</b> validated translations of research instruments (such as the PHQ-9 or C-SSRS). Use validated Filipino versions where your institution requires them, and confirm wording with your supervisors, nurses, and patients. Regional languages (Cebuano, Ilocano, Hiligaynon, and others) are not covered.</p>' +
      '<p style="margin:0">The cognitive questions are bedside items written for this app and do not reproduce copyrighted tests.</p>' +
      '<p style="margin:0">Crisis line in the Philippines: NCMH Crisis Hotline <b>1553</b> (24/7). Verify current numbers locally.</p></div>' +
      '<h2 style="margin-top:18px">Keyboard shortcuts</h2><div class="card"><p style="margin:0"><span class="kbd">/</span> search · <span class="kbd">Alt</span>+<span class="kbd">←</span>/<span class="kbd">→</span> back/forward · <span class="kbd">Space</span> flip flashcard · <span class="kbd">1</span>–<span class="kbd">4</span> grade card</p></div>';
    el.querySelector('#copymail').onclick = () => { navigator.clipboard && navigator.clipboard.writeText(APP_META.email).then(() => App.toast('Email copied.'), () => App.toast(APP_META.email)); };
  };
})();
