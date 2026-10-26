/* App shell: routing, navigation (back/forward), theme, universal search, global events. */
(function () {
  const { esc, icons } = App;
  const V = App.views;
  const $ = (s) => document.querySelector(s);
  const view = $('#view');

  /* ---------- Routes ---------- */
  const routes = [
    [/^\/$/, V.home, 'home'],
    [/^\/search$/, V.search, ''],
    [/^\/dict$/, V.dict, 'dict'],
    [/^\/dict\/(?<id>d\d+)$/, V.word, 'dict'],
    [/^\/flash$/, V.flash, 'flash'],
    [/^\/flash\/(?<deck>[\w-]+)$/, V.review, 'flash'],
    [/^\/verbs$/, V.verbs, 'verbs'],
    [/^\/verbs\/(?<root>[\w-]+)$/, V.verb, 'verbs'],
    [/^\/lessons$/, V.lessons, 'lessons'],
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
    [/^\/psych\/deesc$/, V.deesc, 'psych'],
    [/^\/psych\/discharge$/, V.discharge, 'psych'],
    [/^\/psych\/dcases$/, V.dischargeCases, 'psych'],
    [/^\/psych\/mcases$/, V.mseCases, 'psych'],
    [/^\/psych\/mcase\/(?<id>[\w-]+)$/, V.mseCase, 'psych'],
    [/^\/psych\/dcase\/(?<id>[\w-]+)$/, V.dischargeCase, 'psych'],
    [/^\/psych\/handout$/, V.handout, 'psych'],
    [/^\/placement$/, V.placement, 'placement'],
    [/^\/progress$/, V.progress, 'progress'],
    [/^\/settings$/, V.settings, 'settings'],
    [/^\/new$/, V.whatsnew, 'new'],
    [/^\/about$/, V.about, 'about']
  ];
  const TITLES = { home: '', dict: 'Dictionary', flash: 'Flashcards', verbs: 'Verbs', lessons: 'Lessons', reading: 'Reading', speak: 'Speaking', psych: 'Psychiatry', placement: 'Placement', progress: 'Progress', settings: 'Settings', new: "What's New", about: 'About' };

  /* ---------- Navigation rail + tab bar ---------- */
  const NAV = [
    ['Learn', [['home', '#/', 'Home', icons.home], ['dict', '#/dict', 'Dictionary', icons.book], ['flash', '#/flash', 'Flashcards', icons.cards], ['verbs', '#/verbs', 'Verb trainer', icons.verb], ['lessons', '#/lessons', 'Lessons', icons.lesson], ['reading', '#/reading', 'Reading', icons.read], ['speak', '#/speak', 'Speaking', icons.speak]]],
    ['Clinical', [['psych', '#/psych', 'Psychiatry Tagalog', icons.brain]]],
    ['You', [['placement', '#/placement', 'Placement test', icons.target], ['progress', '#/progress', 'Progress', icons.chart], ['settings', '#/settings', 'Settings', icons.gear], ['new', '#/new', "What's New", icons.spark], ['about', '#/about', 'About', icons.info]]]
  ];
  $('#rail').innerHTML = NAV.map(([g, items]) => '<h4>' + g + '</h4>' + items.map(([k, h, t, ic]) => '<a href="' + h + '" data-nav="' + k + '"' + (k === 'psych' ? ' class="psy"' : '') + '>' + ic + '<span>' + t + '</span>' + (k === 'new' && App.state.seenVersion !== APP_META.version ? ' <span class="pill warn" style="margin-left:auto">new</span>' : '') + '</a>').join('')).join('');
  $('#tabbar').innerHTML = [['home', '#/', 'Home', icons.home], ['dict', '#/dict', 'Dictionary', icons.book], ['flash', '#/flash', 'Cards', icons.cards], ['psych', '#/psych', 'Psychiatry', icons.brain], ['more', '#/about', 'More', icons.info]]
    .map(([k, h, t, ic]) => '<a href="' + (k === 'more' ? '#/more' : h) + '" data-nav="' + k + '">' + ic + '<span>' + t + '</span></a>').join('');
  $('#attrib').innerHTML = esc(APP_META.attribution.replace(' ' + APP_META.email, '')) + ' <a href="mailto:' + esc(APP_META.email) + '">' + esc(APP_META.email) + '</a> · <a href="#/new">What\'s New</a> · <a href="#/about">About</a>';

  // "More" page for phones
  V.more = (el) => {
    el.innerHTML = '<h1>More</h1><div class="grid">' + NAV.flatMap(([, items]) => items).filter(([k]) => !['home', 'dict', 'flash', 'psych'].includes(k))
      .map(([k, h, t]) => '<a class="tile" href="' + h + '"><h3>' + t + '</h3></a>').join('') + '</div>';
  };
  routes.push([/^\/more$/, V.more, 'more']);
  const MORE_KEYS = ['verbs', 'lessons', 'reading', 'speak', 'placement', 'progress', 'settings', 'new', 'about', 'more'];

  /* ---------- Back / forward tracking ----------
     The browser history is the source of truth. Each entry gets an index so the
     buttons know whether there is somewhere to go. */
  let curIdx = 0;
  const maxKey = 'usaptayo.navmax';
  const getMax = () => { try { return +sessionStorage.getItem(maxKey) || 0; } catch (e) { return 0; } };
  const setMax = (n) => { try { sessionStorage.setItem(maxKey, n); } catch (e) {} };
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
    const { path, q } = parse();
    let hit = null;
    for (const [re, fn, key] of routes) { const m = path.match(re); if (m) { hit = [fn, m.groups || {}, key]; break; } }
    if (!hit) { view.innerHTML = '<h1>Page not found</h1><p><a href="#/">Go home</a></p>'; return; }
    const [fn, params, key] = hit;
    try { fn(view, params, q); } catch (e) { console.error(e); view.innerHTML = '<h1>Something went wrong</h1><p class="muted">' + esc(e.message) + '</p><p><a href="#/">Go home</a></p>'; }
    document.querySelectorAll('[data-nav]').forEach((a) => a.classList.toggle('on', a.dataset.nav === key || (a.dataset.nav === 'more' && MORE_KEYS.includes(key))));
    document.title = (TITLES[key] ? TITLES[key] + ' · ' : '') + 'Usap Tayo';
    if (!q.p) window.scrollTo(0, 0);
    syncHistory();
    hideSuggest();
  }
  window.addEventListener('hashchange', render);
  window.addEventListener('popstate', syncHistory);

  /* ---------- Theme ---------- */
  App.applyTheme = () => {
    const t = App.state.settings.theme;
    if (t === 'system') document.documentElement.removeAttribute('data-theme'); else document.documentElement.setAttribute('data-theme', t);
    const dark = t === 'dark' || (t === 'system' && matchMedia('(prefers-color-scheme: dark)').matches);
    $('#themeBtn').innerHTML = dark ? icons.sun : icons.moon;
    $('#themeBtn').title = dark ? 'Switch to light mode' : 'Switch to dark mode';
    $('#themeBtn').setAttribute('aria-label', $('#themeBtn').title);
  };
  $('#themeBtn').onclick = () => {
    const t = App.state.settings.theme;
    const dark = t === 'dark' || (t === 'system' && matchMedia('(prefers-color-scheme: dark)').matches);
    App.state.settings.theme = dark ? 'light' : 'dark';
    App.save(); App.applyTheme();
    if (location.hash.startsWith('#/settings')) render();
  };
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', App.applyTheme);

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
    if (e.key === '/' && !e.target.matches('input,textarea,select')) { e.preventDefault(); gs.focus(); return; }
    App.keyHandler && App.keyHandler(e);
  });

  /* ---------- Install + offline ---------- */
  window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); App.installPrompt = e; });
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
  }

  App.applyTheme();
  App.loadAudioPack().then(() => { if (/^#\/(settings|speak)/.test(location.hash)) render(); });
  if (!location.hash) { try { history.replaceState({ idx: 0 }, '', '#/'); } catch (e) { location.hash = '#/'; } }
  render();
  // Voices load asynchronously in some browsers; refresh voice-dependent pages once.
  if (window.speechSynthesis) speechSynthesis.addEventListener && speechSynthesis.addEventListener('voiceschanged', () => { if (/^#\/(settings|speak)/.test(location.hash)) render(); }, { once: true });
})();
