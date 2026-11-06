/* App shell: routing, navigation (rail, tab bar, More drawer), back/forward, theme, text size, universal search,
   backup, shell strings, global events. Shared isaymotion patterns (theme, footer backup, drawer) adapted to
   Usap Tayo's own navigation. */
(function () {
  const { esc, icons } = App;
  const V = App.views;
  const $ = (s) => document.querySelector(s);
  const view = $('#view');
  const root = document.documentElement;
  // Every localStorage key this app writes starts with PREFIX: 'usaptayo.v1' (all progress and settings, js/core.js)
  // and the shell's 'usaptayo.lastBackup'. The backup panel exports and restores everything under it.
  const PREFIX = 'usaptayo.';
  const META = window.APP_META || {};
  const CHANGELOG = (App.CHANGELOG = window.APP_CHANGELOG || []);

  // Imports put the old blob back and reload; nothing may write the in-memory state over it in between.
  const coreSave = App.save;
  App.save = () => { if (!App.frozen) coreSave(); };

  /* ---------- Shell strings (data/strings.js). The content is already bilingual; this covers the app's own labels. ---------- */
  const STR = window.STRINGS || {};
  const own = (o, k) => !!o && Object.prototype.hasOwnProperty.call(o, k);
  const lang = () => (App.state.settings.uiLang === 'tl' ? 'tl' : 'en');
  const t = (k) => { let s = own(STR[lang()], k) ? STR[lang()][k] : null; if (typeof s !== 'string' || !s) s = own(STR.en, k) ? STR.en[k] : null; return typeof s === 'string' && s ? s : k; };
  const tf = (k, v) => t(k).replace(/\{(\w+)\}/g, (m, x) => (v && own(v, x) ? String(v[x]) : m));
  App.t = t; App.tf = tf;
  function applyStatic() {
    document.querySelectorAll('[data-i18n]').forEach((el) => { const v = t(el.dataset.i18n); if (v !== el.dataset.i18n) el.textContent = v; });
    document.querySelectorAll('[data-i18n-attr]').forEach((el) => el.dataset.i18nAttr.split(';').forEach((pair) => {
      const at = pair.indexOf(':'), key = pair.slice(at + 1);
      if (at > 0 && t(key) !== key) el.setAttribute(pair.slice(0, at), t(key));
    }));
  }

  /* ---------- Routes ---------- */
  const routes = [
    [/^\/$/, V.home, 'home'],
    [/^\/search$/, V.search, ''],
    [/^\/dict$/, V.dict, 'dict'],
    [/^\/dict\/(?<id>d\d+)$/, V.word, 'dict'],
    [/^\/flash$/, V.flash, 'flash'],
    [/^\/flash\/(?<deck>[\w-]+)$/, V.review, 'flash'],
    [/^\/verbs$/, V.verbs, 'verbs'],
    [/^\/verbs\/handout$/, V.ghandoutVerbs, 'verbs'],
    [/^\/verbs\/(?<root>[\w-]+)$/, V.verb, 'verbs'],
    [/^\/affixes$/, V.affixes, 'affixes'],
    [/^\/affixes\/handout$/, V.ghandout, 'affixes'],

    [/^\/lessons$/, V.lessons, 'lessons'],
    [/^\/lessons\/handout$/, V.ghandoutLesson, 'lessons'],
    [/^\/lessons\/(?<id>[\w-]+)$/, V.lesson, 'lessons'],
    [/^\/reading$/, V.reading, 'reading'],
    [/^\/reading\/(?<id>[\w-]+)$/, V.passage, 'reading'],
    [/^\/speak$/, V.speak, 'speak'],
    [/^\/speak\/(?<id>[\w-]+)$/, V.dialogue, 'speak'],
    [/^\/psych$/, V.psych, 'psych'],
    [/^\/psych\/s\/(?<id>[\w-]+)$/, V.psychSection, 'psych'],
    [/^\/psych\/cases$/, V.psychCases, 'psych'],
    [/^\/psych\/case\/(?<id>[\w-]+)$/, V.psychCase, 'psych'],
    [/^\/psych\/interp$/, V.psychInterp, 'psych'],
    [/^\/psych\/handout$/, V.handout, 'psych'],
    [/^\/psych\/mse-sheet$/, V.mseSheet, 'psych'],
    [/^\/psych\/sud$/, V.sud, 'psych'],
    [/^\/psych\/mood$/, V.moodEpisode, 'psych'],
    [/^\/psych\/withdrawal$/, V.withdrawal, 'psych'],
    [/^\/psych\/deesc$/, V.deesc, 'psych'],
    [/^\/psych\/discharge$/, V.discharge, 'psych'],
    [/^\/psych\/dcases$/, V.dischargeCases, 'psych'],
    [/^\/psych\/mcases$/, V.mseCases, 'psych'],
    [/^\/psych\/mcase\/(?<id>[\w-]+)$/, V.mseCase, 'psych'],
    [/^\/psych\/dcase\/(?<id>[\w-]+)$/, V.dischargeCase, 'psych'],
    [/^\/placement$/, V.placement, 'placement'],
    [/^\/progress$/, V.progress, 'progress'],
    [/^\/settings$/, V.settings, 'settings'],
    [/^\/new$/, V.whatsnew, 'new'],
    [/^\/about$/, V.about, 'about']
  ];
  const TITLES = { home: '', practice: 'Practice', dict: 'Dictionary', flash: 'Flashcards', verbs: 'Verbs', affixes: 'Panlapi', lessons: 'Lessons', reading: 'Reading', speak: 'Speaking', psych: 'Psychiatry', placement: 'Placement', progress: 'Progress', settings: 'Settings', new: "What's New", about: 'About' };

  /* ---------- Navigation: one grouped list for the desktop rail, the phone drawer (More) and the #/more page ----------
     [key, href, label, icon]. Group labels are shell strings (data/strings.js); item labels are the app's own. */
  const PSY_PRACTICE = [['p-cases', '#/psych/cases', 'Case simulations', icons.case], ['p-interp', '#/psych/interp', 'What is the patient saying?', icons.ear],
    ['p-mcases', '#/psych/mcases', 'Admission MSE practice', icons.eye], ['p-dcases', '#/psych/dcases', 'Discharge practice', icons.check]];
  const PSY_TOOLS = [['p-mood', '#/psych/mood', 'Mood episode checker', icons.chart], ['p-sud', '#/psych/sud', 'Substance use', icons.target],
    ['p-wd', '#/psych/withdrawal', 'Withdrawal and agitation', icons.spark], ['p-deesc', '#/psych/deesc', 'De-escalation', icons.speak],
    ['p-dis', '#/psych/discharge', 'Discharge assessment', icons.check], ['p-mse', '#/psych/mse-sheet', 'MSE interviewer sheet', icons.lesson],
    ['p-ho', '#/psych/handout', 'Printable handout', icons.read]];
  const NAV = [
    ['', [['home', '#/', 'Home', icons.home], ['practice', '#/practice', 'Practice', icons.target]]],
    ['nav.learn', [['lessons', '#/lessons', 'Lessons', icons.lesson], ['reading', '#/reading', 'Reading', icons.read], ['speak', '#/speak', 'Speaking', icons.speak], ['dict', '#/dict', 'Dictionary', icons.book]]],
    ['nav.drill', [['flash', '#/flash', 'Flashcards', icons.cards], ['verbs', '#/verbs', 'Verb trainer', icons.verb], ['affixes', '#/affixes', 'Panlapi', icons.affix], ['placement', '#/placement', 'Placement test', icons.target]]],
    ['nav.interview', [['psych', '#/psych', 'Psychiatry Tagalog', icons.brain]].concat(PSY_PRACTICE)],
    ['nav.tools', PSY_TOOLS],
    ['nav.app', [['progress', '#/progress', 'Progress', icons.chart], ['settings', '#/settings', 'Settings', icons.gear], ['new', '#/new', "What's New", icons.spark], ['about', '#/about', 'About', icons.info]]]
  ];
  App.NAV = NAV;
  const NAV_HREFS = NAV.reduce((a, g) => a.concat(g[1].map((i) => i[1])), []);
  // Deep pages light up their list page in the menu.
  const PARENT = { '/psych/dcase': ['Discharge practice', '#/psych/dcases'], '/psych/mcase': ['Admission MSE practice', '#/psych/mcases'], '/psych/case': ['Case simulations', '#/psych/cases'], '/psych/s': null };
  function activeHref(path) {
    if (NAV_HREFS.includes('#' + path)) return '#' + path;
    const segs = path.split('/').filter(Boolean);
    const mid = PARENT['/' + segs.slice(0, 2).join('/')];
    return mid ? mid[1] : '#/' + (segs[0] || '');
  }
  const navItem = (k, h, label, ic) => '<li><a class="nav-item' + (k === 'psych' ? ' psy' : '') + '" href="' + h + '" data-nav="' + k + '">' + ic + '<span>' + esc(label) + '</span>' +
    (k === 'new' ? '<span class="badge" data-badge="news" hidden></span>' : '') + '</a></li>';
  function otherApps() {   // off until the apps are interlinked (window.SHOW_OTHER_APPS in data/app-meta.js)
    if (!window.SHOW_OTHER_APPS) return '';
    const me = String(META.repo || '').toLowerCase();
    const list = (window.APP_LINKS || []).filter((a) => a && /^https?:\/\//i.test(a.href || '') && String(a.href).replace(/[?#].*$/, '').replace(/\/+$/, '').split('/').pop().toLowerCase() !== me);
    return list.length ? '<div class="nav-group"><p class="nav-label">' + esc(t('nav.otherApps')) + '</p><ul>' + list.map((a) => '<li><a class="nav-item" href="' + esc(a.href) + '" target="_blank" rel="noopener">' + icons.read + '<span>' + esc(a.name) + '</span><span class="sr-only"> ' + esc(t('nav.newTab')) + '</span></a></li>').join('') + '</ul></div>' : '';
  }
  function buildNav() {
    $('#railBody').innerHTML = NAV.map(([g, items]) => '<div class="nav-group">' + (g ? '<p class="nav-label">' + esc(t(g)) + '</p>' : '') + '<ul>' + items.map((i) => navItem.apply(null, i)).join('') + '</ul></div>').join('') + otherApps();
    $('#tabbar').innerHTML = [['home', '#/', 'Home', icons.home], ['psych', '#/psych', 'Psychiatry', icons.brain], ['practice', '#/practice', 'Practice', icons.target], ['flash', '#/flash', 'Cards', icons.cards]]
      .map(([k, h, l, ic]) => '<a href="' + h + '" data-nav="' + k + '">' + ic + '<span>' + l + '</span></a>').join('') +
      '<button type="button" id="tabMore" data-nav="more" aria-controls="rail" aria-expanded="' + (document.body.classList.contains('drawer-open') ? 'true' : 'false') + '">' + icons.info + '<span>More</span><span class="badge tab-badge" data-badge="news" hidden></span></button>';
    $('#tabMore').onclick = () => (document.body.classList.contains('drawer-open') ? closeDrawer(true) : openDrawer());
    updateBadges();
  }
  // "What's New" badge: shown until the What's New page has been opened for this version (state.seenVersion, as in 2.x).
  function unseenCount() {
    const seen = App.state.seenVersion || '';
    if (seen === META.version) return 0;
    const i = CHANGELOG.findIndex((e) => e.version === seen);
    return i > 0 ? i : 0;
  }
  function updateBadges() {
    const unseen = App.state.seenVersion !== META.version, n = unseenCount();
    document.querySelectorAll('[data-badge="news"]').forEach((b) => { b.textContent = n || t('nav.new'); b.hidden = !unseen; });
  }
  App.updateBadges = updateBadges;

  /* ---------- Drawer (phones and tablets, under 1100px): the rail slides in from the More tab ---------- */
  const rail = $('#rail'), backdrop = $('#navBackdrop');
  const drawerMode = () => matchMedia('(max-width: 1099px)').matches;
  const CLOCK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';
  function fillRecent() {
    const rec = (App.state.recent || []).filter((r) => r.hash !== '#/more').slice(0, 5);
    $('#railRecent').innerHTML = rec.length ? '<div class="nav-group nav-recent"><p class="nav-label">' + esc(t('nav.recent')) + '</p><ul>' +
      rec.map((r) => '<li><a class="nav-item" href="' + esc(r.hash) + '">' + CLOCK + '<span>' + esc(r.title) + '</span></a></li>').join('') + '</ul></div>' : '';
  }
  function openDrawer() {
    if (!drawerMode()) { App.go('#/more'); return; }
    fillRecent();
    document.body.classList.add('drawer-open');
    backdrop.hidden = false;
    const b = $('#tabMore'); if (b) b.setAttribute('aria-expanded', 'true');
    setTimeout(() => $('#navClose').focus(), 60);
  }
  function closeDrawer(restoreFocus) {
    if (!document.body.classList.contains('drawer-open')) return;
    document.body.classList.remove('drawer-open');
    backdrop.hidden = true;
    const b = $('#tabMore'); if (b) { b.setAttribute('aria-expanded', 'false'); if (restoreFocus) b.focus(); }
  }
  App.openDrawer = openDrawer; App.closeDrawer = closeDrawer;
  $('#navClose').onclick = () => closeDrawer(true);
  backdrop.onclick = () => closeDrawer(true);
  rail.addEventListener('click', (e) => { const a = e.target.closest('a'); if (a && a.getAttribute('href') === location.hash) closeDrawer(false); });
  window.addEventListener('hashchange', () => closeDrawer(false));
  window.addEventListener('resize', () => { if (!drawerMode()) closeDrawer(false); });
  document.addEventListener('keydown', (e) => {
    if (!document.body.classList.contains('drawer-open')) return;
    if (e.key === 'Escape') { e.preventDefault(); closeDrawer(true); return; }
    if (e.key === 'Tab') {   // keep focus inside the open drawer
      const f = [...rail.querySelectorAll('a[href], button:not([disabled])')].filter((x) => x.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && (document.activeElement === first || !rail.contains(document.activeElement))) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && (document.activeElement === last || !rail.contains(document.activeElement))) { e.preventDefault(); first.focus(); }
    }
  }, true);

  /* ---------- Practice and More pages ---------- */
  const BLURB = {
    dict: App.DICT.length + ' entries, both directions, root-word search', flash: 'Spaced repetition across every deck',
    verbs: 'Aspect and focus drills, 78 verbs', affixes: 'Unlapi, gitlapi, hulapi: take words apart', lessons: 'Grammar and culture', reading: 'Graded passages', speak: 'Dialogues with listening and recording',
    practice: 'Every drill on one page', psych: (window.PSYCH_SECTIONS || []).length + ' interview sections and the ward tools',
    placement: '20 questions to find your level', progress: 'Streak, stats, backup', settings: 'Register, voice, theme', new: 'What changed in each version', about: 'Credits and disclaimers'
  };
  V.practice = (el) => {
    const s = App.state, due = App.decks().find((d) => d.id === 'due').ids.length;
    const T = (h, eyebrow, title, p) => '<a class="tile" href="' + h + '"><span class="eyebrow">' + eyebrow + '</span><h3>' + title + '</h3><p>' + p + '</p></a>';
    const best = (k) => { const o = s.done.affixes || {}; const v = Object.keys(o).filter((x) => x.startsWith(k)).map((x) => o[x]); return v.length ? 'Best ' + Math.max(...v) + '%' : 'Not tried yet'; };
    el.innerHTML = '<h1>Practice</h1><p class="muted">Short drills you can finish in a few minutes. Scores feed your streak and XP.</p>' +
      '<h2>Language</h2><div class="grid">' +
      T('#/verbs', 'Drill · 10 questions', 'Verb trainer', 'Aspect and focus forms, then real sentences.') +
      T('#/affixes', 'Drill · 10 questions', 'Panlapi', 'Name the affix, find the root, build the word. ' + best('type')) +
      T('#/flash/due', 'Review', due ? due + ' cards due' : 'Flashcards', 'Spaced repetition across every deck.') +
      T('#/lessons', 'Quiz', 'Lesson quizzes', Object.keys(s.done.lessons).length + ' of ' + LESSONS.length + ' lessons done.') +
      T('#/reading', 'Read', 'Reading', 'Graded passages with questions.') +
      T('#/speak', 'Speak', 'Speaking', 'Dialogues with listening and recording.') + '</div>' +
      '<h2 style="margin-top:18px">Clinical</h2><div class="grid">' +
      T('#/psych/cases', 'Simulate', 'Case simulations', PSYCH_CASES.length + ' interviews with feedback.') +
      T('#/psych/interp', 'Listen', 'What is the patient saying?', 'Interpret patient and family lines.') +
      T('#/psych/mcases', 'Document', 'Admission MSE practice', 'Interview, document, compare.') +
      T('#/psych/dcases', 'Document', 'Discharge practice', 'Five patients, discharge or defer.') +
      T('#/psych/deesc?tab=drill', 'Rapid drill', 'De-escalation', 'The 12 steps under time pressure.') + '</div>';
  };
  // The same grouped list as the drawer, as a page: for deep links and for desktop.
  V.more = (el) => {
    const recent = (App.state.recent || []).filter((r) => r.hash !== '#/more');
    const pins = (App.state.pins || []).slice().reverse();
    el.innerHTML = '<h1>More</h1>' +
      (pins.length ? '<h2>Pinned</h2><div class="row" style="margin-bottom:6px">' + pins.map((p) => '<a class="btn sm" href="' + esc(p.hash) + '">' + icons.starOn + ' ' + esc(p.title) + '</a>').join('') + '</div>' : '') +
      (recent.length ? '<h2>' + esc(t('nav.recent')) + '</h2><div class="row" style="margin-bottom:6px">' + recent.slice(0, 6).map((r) => '<a class="btn sm" href="' + esc(r.hash) + '">' + esc(r.title) + '</a>').join('') + '</div>' : '') +
      NAV.map(([g, items]) => '<section class="more-grp">' + (g ? '<h2>' + esc(t(g)) + '</h2>' : '') + '<div class="grid">' + items.map(([k, h, l, ic]) => '<a class="tile" href="' + h + '"><h3 class="row" style="gap:8px">' + ic + esc(l) + '</h3>' + (BLURB[k] ? '<p>' + esc(BLURB[k]) + '</p>' : '') + '</a>').join('') + '</div></section>').join('') +
      '<section class="more-grp"><div class="grid"><a class="tile" href="#/psych"><h3>All psychiatry sections and phrases</h3></a></div></section>';
  };
  routes.push([/^\/more$/, V.more, 'more']);
  routes.push([/^\/practice$/, V.practice, 'practice']);
  const MORE_KEYS = ['dict', 'lessons', 'reading', 'speak', 'placement', 'progress', 'settings', 'new', 'about', 'more'];

  /* ---------- Header height -> --top (the search drops to a second row on phones) ---------- */
  function setTopVar() { const h = $('.topbar'); if (h) root.style.setProperty('--top', h.offsetHeight + 'px'); }
  window.addEventListener('resize', setTopVar);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(setTopVar);

  /* ---------- Back / forward tracking ----------
     The browser history is the source of truth. Each entry gets an index so the
     buttons know whether there is somewhere to go; scroll is restored on back/forward. */
  let curIdx = 0;
  const maxKey = 'usaptayo.navmax';
  const getMax = () => { try { return +sessionStorage.getItem(maxKey) || 0; } catch (e) { return 0; } };
  const setMax = (n) => { try { sessionStorage.setItem(maxKey, n); } catch (e) {} };
  try { if ('scrollRestoration' in history) history.scrollRestoration = 'manual'; } catch (e) {}
  const scrollAt = {};
  window.addEventListener('scroll', () => { scrollAt[curIdx] = window.scrollY; }, { passive: true });
  function syncHistory() {
    const st = history.state;
    if (st && typeof st.idx === 'number') curIdx = st.idx;
    else { curIdx = (curIdx || 0) + (document.readyState === 'complete' ? 1 : 0); setMax(curIdx); try { history.replaceState({ idx: curIdx }, ''); } catch (e) {} }
    $('#navBack').disabled = curIdx <= 0;
    $('#navFwd').disabled = curIdx >= getMax();
  }
  $('#navBack').onclick = () => history.back();
  $('#navFwd').onclick = () => history.forward();

  App.go = (hash) => { if (location.hash === hash) render(); else location.hash = hash; };

  /* ---------- Render ---------- */
  function parse() {
    const h = location.hash.replace(/^#/, '') || '/';
    const [path, qs] = h.split('?');
    const q = Object.fromEntries(new URLSearchParams(qs || ''));
    return { path: path || '/', q };
  }
  function render() {
    App.keyHandler = null;
    if (App.onLeave) { try { App.onLeave(); } catch (e) {} App.onLeave = null; }
    App.stopSpeech();
    const st = history.state;
    const back = st && typeof st.idx === 'number' && st.idx !== curIdx ? scrollAt[st.idx] : null;   // arrived by back/forward
    const { path, q } = parse();
    let hit = null;
    for (const [re, fn, key] of routes) { const m = path.match(re); if (m) { hit = [fn, m.groups || {}, key]; break; } }
    if (!hit) { view.innerHTML = '<h1>Page not found</h1><p><a href="#/">Go home</a></p>'; syncHistory(); return; }
    const [fn, params, key] = hit;
    try { fn(view, params, q); } catch (e) { console.error(e); view.innerHTML = '<h1>Something went wrong</h1><p class="muted">' + esc(e.message) + '</p><p><a href="#/">Go home</a></p>'; }
    const act = activeHref(path);
    document.querySelectorAll('#railBody .nav-item').forEach((a) => { const on = a.getAttribute('href') === act; a.classList.toggle('on', on); if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    document.querySelectorAll('#tabbar [data-nav]').forEach((a) => a.classList.toggle('on', a.dataset.nav === key || (a.dataset.nav === 'more' && MORE_KEYS.includes(key))));
    document.title = (TITLES[key] ? TITLES[key] + ' · ' : '') + 'Usap Tayo';
    App.decorate(view, path, q, key);
    if (key && key !== 'home' && key !== 'more' && key !== '') { // remember the last pages visited for the More screen and drawer
      const h1 = view.querySelector('h1'); const title = (h1 ? h1.textContent : TITLES[key] || key).trim().slice(0, 40);
      const hash = '#' + path + (q && Object.keys(q).length && !q.p ? '?' + new URLSearchParams(q) : '');
      App.state.recent = [{ hash, title, sec: App._section || '' }].concat((App.state.recent || []).filter((r) => r.hash !== hash)).slice(0, 8); App.save();
    }
    if (back != null) requestAnimationFrame(() => window.scrollTo(0, back));
    else if (!q.p) window.scrollTo(0, 0);
    syncHistory();
    updateBadges();
    hideSuggest();
  }
  App.render = render;
  window.addEventListener('hashchange', render);
  // hashchange (and so render) follows popstate for every hash traversal; render reads the entry's index itself.
  window.addEventListener('popstate', () => setTimeout(syncHistory, 50));

  /* ---------- Breadcrumbs and pins, the same on every page ----------
     A view that draws its own .breadcrumb keeps it. Otherwise a deep page (two or more path segments) gets
     "Section / Page" built from the route, and nested practice pages get their list page in between. */
  const NO_PIN = new Set(['home', 'more', 'search', 'settings', 'progress', 'new', 'about', 'placement', '']);
  App.decorate = (view, path, q, key) => {
    const h1 = view.querySelector('h1');
    App._section = TITLES[key] || '';
    const segs = path.split('/').filter(Boolean);
    if (h1 && !view.querySelector('.breadcrumb') && segs.length >= 2) {
      const top = TITLES[key] || segs[0];
      const mid = PARENT['/' + segs.slice(0, 2).join('/')];
      const items = [[top, '#/' + segs[0]]].concat(mid ? [mid] : [], [[h1.textContent.trim().slice(0, 48)]]);
      h1.insertAdjacentHTML('beforebegin', '<div class="breadcrumb">' + items.map(([tt, h]) => (h ? '<a href="' + h + '">' + esc(tt) + '</a>' : esc(tt))).join(' / ') + '</div>');
    }
    if (h1 && !NO_PIN.has(key)) {
      const hash = '#' + path + (q && Object.keys(q).length && !q.p ? '?' + new URLSearchParams(q) : '');
      const title = h1.textContent.trim().slice(0, 40);
      const b = document.createElement('button');
      const bc = view.querySelector('.breadcrumb'); const sec = bc ? [...bc.querySelectorAll('a')].map((a) => a.textContent).pop() || '' : App._section; App._section = sec; b.className = 'pin'; b.type = 'button';
      const draw = () => { const on = App.isPinned(hash); b.innerHTML = (on ? icons.starOn : icons.star); b.title = on ? 'Unpin from Home' : 'Pin to Home'; b.setAttribute('aria-label', b.title); b.classList.toggle('on', on); };
      b.onclick = () => { App.togglePin(hash, title, sec); draw(); App.toast(App.isPinned(hash) ? 'Pinned to Home' : 'Unpinned'); };
      draw(); h1.classList.add('has-pin'); h1.appendChild(b);
    }
  };
  App.isPinned = (hash) => (App.state.pins || []).some((p) => p.hash === hash);
  App.togglePin = (hash, title, sec) => {
    const pins = App.state.pins || [];
    App.state.pins = App.isPinned(hash) ? pins.filter((p) => p.hash !== hash) : pins.concat({ hash, title, sec: sec || '' }).slice(-12);
    App.save();
  };

  /* ---------- Text size (Aa panel; the same four sizes as the other apps, saved in settings.textSize) ---------- */
  const TEXT_SIZES = [['90', 'textsize.smaller'], ['100', 'textsize.default'], ['112.5', 'textsize.larger'], ['125', 'textsize.largest']];
  App.applyTextSize = () => {
    const v = App.state.settings.textSize || '100';
    root.style.fontSize = TEXT_SIZES.some(([k]) => k === v) && v !== '100' ? v + '%' : '';
    setTopVar();
  };
  App.textSizeSeg = () => '<div class="seg" role="group" aria-label="' + esc(t('textsize.title')) + '">' + TEXT_SIZES.map(([k, l], i) => '<button type="button" data-ts="' + k + '" aria-pressed="' + ((App.state.settings.textSize || '100') === k) + '" class="' + ((App.state.settings.textSize || '100') === k ? 'on' : '') + '" style="font-size:' + (0.82 + i * 0.1).toFixed(2) + 'rem">' + esc(t(l)) + '</button>').join('') + '</div>';
  (() => {
    const btn = $('#textSizeBtn'), panel = $('#textSizePanel');
    const build = () => { panel.setAttribute('aria-label', t('textsize.title')); panel.innerHTML = '<span class="eyebrow">' + esc(t('textsize.title')) + '</span>' + App.textSizeSeg(); panel.querySelectorAll('[data-ts]').forEach((b) => (b.onclick = () => { App.state.settings.textSize = b.dataset.ts; App.save(); App.applyTextSize(); build(); const on = panel.querySelector('.on'); if (on) on.focus(); })); };
    const open = () => { build(); panel.hidden = false; btn.setAttribute('aria-expanded', 'true'); const on = panel.querySelector('.on'); if (on) on.focus(); };
    const close = () => { if (panel.hidden) return; panel.hidden = true; btn.setAttribute('aria-expanded', 'false'); };
    btn.onclick = (e) => { e.stopPropagation(); if (panel.hidden) open(); else close(); };
    document.addEventListener('click', (e) => { if (!panel.hidden && !panel.contains(e.target) && !btn.contains(e.target)) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !panel.hidden) { close(); btn.focus(); } });
    window.addEventListener('hashchange', close);
    App.applyTextSize();
  })();

  /* ---------- Theme: match device / light / dark (settings.theme 'system' | 'light' | 'dark'; no attribute = match device) ---------- */
  const THEME_ICONS = {
    system: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor"/></svg>',
    dark: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
    light: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
  };
  const darkMQ = matchMedia('(prefers-color-scheme: dark)');
  const themeMode = () => { const m = App.state.settings.theme; return m === 'light' || m === 'dark' ? m : 'system'; };
  App.themeName = (m) => t(m === 'system' ? 'theme.auto' : 'theme.' + m);
  App.applyTheme = () => {
    const m = themeMode();
    if (m === 'system') root.removeAttribute('data-theme'); else root.setAttribute('data-theme', m);
    const dark = m === 'dark' || (m === 'system' && darkMQ.matches);
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', getComputedStyle(root).getPropertyValue('--night').trim() || (dark ? '#0F1830' : '#1C346E'));
    const b = $('#themeBtn'), label = tf('theme.label', { name: App.themeName(m) });
    b.innerHTML = THEME_ICONS[m]; b.title = label; b.setAttribute('aria-label', label);
  };
  $('#themeBtn').onclick = () => {
    App.state.settings.theme = { system: 'light', light: 'dark', dark: 'system' }[themeMode()];
    App.save(); App.applyTheme();
    if (location.hash.startsWith('#/settings')) render();
  };
  if (darkMQ.addEventListener) darkMQ.addEventListener('change', App.applyTheme); else if (darkMQ.addListener) darkMQ.addListener(App.applyTheme);

  /* ---------- Backup: export / import / undo of everything under PREFIX (footer panel; Progress and Settings use the same functions) ----------
     File: { app: 'usap-tayo', format: 1, exported, attribution, summary, data: { 'v1': '<progress JSON>', ... } }.
     Import also accepts 2.x backup files, which are the progress object itself ({ settings, srs, done, … }). */
  const BK_APP = 'usap-tayo', BK_UNDO = BK_APP + ':undo-import';
  const pad2 = (n) => (n < 10 ? '0' : '') + n;
  function bkCollect() {
    App.save();
    const data = {};
    try { for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k && k.indexOf(PREFIX) === 0) data[k.slice(PREFIX.length)] = localStorage.getItem(k); } } catch (e) {}
    return data;
  }
  function bkReplace(data) {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k && k.indexOf(PREFIX) === 0) keys.push(k); }
    keys.forEach((k) => localStorage.removeItem(k));
    Object.keys(data).forEach((k) => localStorage.setItem(PREFIX + k, data[k]));
  }
  function bkSummary(data) {
    let s = null; try { s = data && data.v1 ? JSON.parse(data.v1) : null; } catch (e) {}
    if (!s || typeof s !== 'object') return t('backup.nothing');
    return tf('backup.sum', { cards: Object.keys(s.srs || {}).length, lessons: Object.keys((s.done && s.done.lessons) || {}).length, xp: +s.xp || 0 });
  }
  function bkDate(v) {
    const d = new Date(v);
    if (v == null || isNaN(d.getTime())) return '';
    const loc = lang() === 'tl' ? 'fil' : undefined;
    return d.toLocaleDateString(loc, { year: 'numeric', month: 'short', day: 'numeric' }) + ', ' + d.toLocaleTimeString(loc, { hour: 'numeric', minute: '2-digit' });
  }
  function bkStatus(msg, isErr) {
    const el = $('#bk-status'); if (!el) return;
    el.textContent = msg || ''; el.classList.toggle('is-error', !!isErr);
  }
  function bkPaint() {
    const meta = $('#bk-meta'), un = $('#bk-undo');
    let last = null; try { last = JSON.parse(localStorage.getItem(PREFIX + 'lastBackup')); } catch (e) {}
    if (meta) meta.textContent = tf('backup.onDevice', { summary: bkSummary(bkCollect()) }) + ' ' + (last && bkDate(last) ? tf('backup.lastExported', { date: bkDate(last) }) : t('backup.notExported'));
    let has = false; try { has = !!localStorage.getItem(BK_UNDO); } catch (e) {}
    if (un) un.hidden = !has;
  }
  function bkPayload() {
    const data = bkCollect();
    return { app: BK_APP, format: 1, version: META.version, exported: new Date().toISOString(), attribution: META.attribution, summary: bkSummary(data), data };
  }
  function bkExport() {
    const now = new Date();
    try { localStorage.setItem(PREFIX + 'lastBackup', JSON.stringify(now.toISOString())); } catch (e) {}
    const payload = bkPayload();
    const name = 'usap-tayo-backup-' + now.getFullYear() + '-' + pad2(now.getMonth() + 1) + '-' + pad2(now.getDate()) + '.json';
    const json = JSON.stringify(payload, null, 1);
    const standalone = (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone;
    let file = null; try { file = new File([json], name, { type: 'application/json' }); } catch (e) {}
    if (standalone && file && navigator.canShare && navigator.canShare({ files: [file] })) {
      // Installed apps on phones cannot always download files; the share sheet can save to Files or send it on.
      navigator.share({ files: [file], title: tf('backup.shareTitle', { app: META.name }) }).then(() => { bkStatus(t('backup.shared')); bkPaint(); }).catch(() => bkStatus(t('backup.exportCancelled')));
      return payload;
    }
    const url = URL.createObjectURL(new Blob([json], { type: 'application/json' }));
    const a = document.createElement('a'); a.href = url; a.download = name; a.rel = 'noopener';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
    bkStatus(tf('backup.saved', { name })); App.toast(tf('backup.saved', { name }));
    bkPaint();
    return payload;
  }
  // Returns { exported, data } for a valid backup of either format, else null.
  function bkParse(text, fallbackDate) {
    let p; try { p = JSON.parse(text); } catch (e) { return null; }
    if (p && p.app === BK_APP && p.data && typeof p.data === 'object') {
      let ok = Object.keys(p.data).every((k) => typeof p.data[k] === 'string' && k.length < 80);
      if (ok) Object.keys(p.data).forEach((k) => { try { JSON.parse(p.data[k]); } catch (e) { ok = false; } });
      if (ok && p.data.v1) { try { const v = JSON.parse(p.data.v1); if (!v || typeof v !== 'object' || !v.settings) ok = false; } catch (e) { ok = false; } }
      return ok ? { exported: p.exported, data: p.data } : null;
    }
    if (p && typeof p === 'object' && !Array.isArray(p) && p.settings && typeof p.settings === 'object' && !('app' in p)) {   // 2.x backup file
      return { exported: fallbackDate || null, data: { v1: JSON.stringify(p) } };
    }
    return null;
  }
  function bkImportText(text, fallbackDate) {
    const bad = tf('backup.notBackup', { app: META.name });
    const p = bkParse(text, fallbackDate);
    if (!p) { bkStatus(bad, true); App.toast(bad); return false; }
    const msg = tf('backup.confirmImport', { date: bkDate(p.exported) || t('backup.unknownDate'), backup: bkSummary(p.data), device: bkSummary(bkCollect()) });
    if (!window.confirm(msg)) { bkStatus(t('backup.importCancelled')); return false; }
    try {
      localStorage.setItem(BK_UNDO, JSON.stringify({ saved: new Date().toISOString(), data: bkCollect() }));
      App.frozen = true;
      bkReplace(p.data);
    } catch (e) { App.frozen = false; bkStatus(t('backup.importFailed'), true); return false; }
    bkStatus(t('backup.imported')); App.toast(t('backup.imported'));
    setTimeout(() => location.reload(), 700);
    return true;
  }
  function bkImportFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onerror = () => bkStatus(t('backup.unreadable'), true);
    reader.onload = () => bkImportText(String(reader.result), file.lastModified ? new Date(file.lastModified).toISOString() : null);
    reader.readAsText(file);
  }
  function bkUndo() {
    let snap; try { snap = JSON.parse(localStorage.getItem(BK_UNDO)); } catch (e) {}
    if (!snap || !snap.data) { bkPaint(); return; }
    if (!window.confirm(tf('backup.confirmUndo', { summary: bkSummary(snap.data) }))) return;
    try { App.frozen = true; bkReplace(snap.data); localStorage.removeItem(BK_UNDO); } catch (e) { App.frozen = false; bkStatus(t('backup.undoFailed'), true); return; }
    bkStatus(t('backup.restored')); App.toast(t('backup.restored'));
    setTimeout(() => location.reload(), 700);
  }
  App.backup = { export: bkExport, payload: bkPayload, importFile: bkImportFile, importText: bkImportText, undo: bkUndo, paint: bkPaint, summary: () => bkSummary(bkCollect()) };
  (() => {
    const fi = $('#bk-file');
    $('#bk-export').addEventListener('click', bkExport);
    fi.addEventListener('change', () => { bkImportFile(fi.files && fi.files[0]); fi.value = ''; });
    $('#bk-undo').addEventListener('click', bkUndo);
  })();

  /* ---------- Language of the shell (About page) ---------- */
  App.setLang = (l) => {
    App.state.settings.uiLang = l === 'tl' ? 'tl' : 'en'; App.save();
    applyStatic(); buildNav(); App.applyTheme(); bkPaint(); render();
  };

  /* ---------- Universal search ---------- */
  const gs = $('#gsearch'), sug = $('#gsuggest');
  let active = -1, results = [];
  function hideSuggest() { sug.hidden = true; active = -1; }
  function showSuggest() {
    const v = gs.value.trim();
    if (!v) { hideSuggest(); return; }
    results = App.searchAll(v, 8);
    sug.innerHTML = results.map((r, i) => '<a href="' + r.route + '" role="option" data-i="' + i + '"' + (i === active ? ' class="active"' : '') + '><div class="stype">' + esc(r.type) + '</div><div><b class="' + (r.type === 'Dictionary' || r.type === 'Phrase' ? 'tl' : '') + '">' + esc(r.title) + '</b></div><div class="small muted">' + esc(r.sub || '') + '</div></a>').join('') +
      '<a href="#/search?q=' + encodeURIComponent(v) + '"><b>See all results for “' + esc(v) + '”</b></a>';
    sug.hidden = false;
  }
  let st;
  gs.addEventListener('input', () => { clearTimeout(st); st = setTimeout(() => { active = -1; showSuggest(); }, 120); });
  gs.addEventListener('focus', () => { if (gs.value.trim()) showSuggest(); });
  gs.addEventListener('keydown', (e) => {
    const n = sug.querySelectorAll('a').length;
    if (e.key === 'ArrowDown') { e.preventDefault(); active = Math.min(n - 1, active + 1); showSuggest(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); active = Math.max(-1, active - 1); showSuggest(); }
    else if (e.key === 'Enter') {
      e.preventDefault();
      const a = sug.querySelectorAll('a')[active];
      App.go(a ? a.getAttribute('href') : '#/search?q=' + encodeURIComponent(gs.value.trim()));
      gs.blur(); hideSuggest();
    } else if (e.key === 'Escape') { hideSuggest(); gs.blur(); }
  });
  document.addEventListener('click', (e) => { if (!e.target.closest('.searchwrap')) hideSuggest(); else if (e.target.closest('.suggest a')) { hideSuggest(); gs.blur(); } });

  /* ---------- Global events ---------- */
  document.addEventListener('click', (e) => {
    const s = e.target.closest('[data-say]');
    if (s) { e.preventDefault(); e.stopPropagation(); App.speak(s.dataset.say); return; }
    const a = e.target.closest('[data-addcard]');
    if (a) {
      const id = a.dataset.addcard;
      if (!App.state.srs[id]) { App.state.srs[id] = { e: 2.5, i: 0, r: 0, due: Date.now() }; App.save(); App.toast('Added to flashcards. It will appear in All due reviews.'); }
      else App.toast('Already in your flashcards.');
      if (a.classList.contains('say')) a.innerHTML = icons.check; else a.innerHTML = icons.check + ' In deck';
    }
  }, true);
  document.addEventListener('keydown', (e) => {
    if (e.altKey && (e.key === 'ArrowLeft' || e.key === 'ArrowRight') && !e.target.matches('input,textarea,select,[contenteditable]')) {
      e.preventDefault(); if (e.key === 'ArrowLeft') history.back(); else history.forward(); return;
    }
    if (e.key === '/' && !e.target.matches('input,textarea,select')) { e.preventDefault(); gs.focus(); return; }
    App.keyHandler && App.keyHandler(e);
  });

  /* ---------- Install + offline ---------- */
  window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); App.installPrompt = e; });
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
  }

  applyStatic();
  buildNav();
  App.applyTheme();
  setTopVar();
  bkPaint();
  App.loadAudioPack().then(() => { if (/^#\/(settings|speak)/.test(location.hash)) render(); });
  if (!location.hash) { try { history.replaceState({ idx: 0 }, '', '#/'); } catch (e) { location.hash = '#/'; } }
  render();
  // Voices load asynchronously in some browsers; refresh voice-dependent pages once.
  if (window.speechSynthesis) speechSynthesis.addEventListener && speechSynthesis.addEventListener('voiceschanged', () => { if (/^#\/(settings|speak)/.test(location.hash)) render(); }, { once: true });
})();
