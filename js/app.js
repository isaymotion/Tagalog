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
    [/^\/affixes$/, V.affixes, 'affixes'],
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
    [/^\/psych\/handout$/, V.handout, 'psych'],
    [/^\/placement$/, V.placement, 'placement'],
    [/^\/progress$/, V.progress, 'progress'],
    [/^\/settings$/, V.settings, 'settings'],
    [/^\/new$/, V.whatsnew, 'new'],
    [/^\/about$/, V.about, 'about']
  ];
  const TITLES = { home: '', dict: 'Dictionary', flash: 'Flashcards', verbs: 'Verbs', affixes: 'Panlapi', lessons: 'Lessons', reading: 'Reading', speak: 'Speaking', psych: 'Psychiatry', placement: 'Placement', progress: 'Progress', settings: 'Settings', new: "What's New", about: 'About' };

  /* ---------- Navigation rail + tab bar ---------- */
  const NAV = [
    ['Learn', [['home', '#/', 'Home', icons.home], ['dict', '#/dict', 'Dictionary', icons.book], ['flash', '#/flash', 'Flashcards', icons.cards], ['verbs', '#/verbs', 'Verb trainer', icons.verb], ['affixes', '#/affixes', 'Panlapi', icons.affix], ['lessons', '#/lessons', 'Lessons', icons.lesson], ['reading', '#/reading', 'Reading', icons.read], ['speak', '#/speak', 'Speaking', icons.speak]]],
    ['Clinical', [['psych', '#/psych', 'Psychiatry Tagalog', icons.brain]]],
    ['You', [['placement', '#/placement', 'Placement test', icons.target], ['progress', '#/progress', 'Progress', icons.chart], ['settings', '#/settings', 'Settings', icons.gear], ['new', '#/new', "What's New", icons.spark], ['about', '#/about', 'About', icons.info]]]
  ];
  $('#rail').innerHTML = NAV.map(([g, items]) => '<h4>' + g + '</h4>' + items.map(([k, h, t, ic]) => '<a href="' + h + '" data-nav="' + k + '"' + (k === 'psych' ? ' class="psy"' : '') + '>' + ic + '<span>' + t + '</span>' + (k === 'new' && App.state.seenVersion !== APP_META.version ? ' <span class="pill warn" style="margin-left:auto">new</span>' : '') + '</a>').join('')).join('');
  $('#tabbar').innerHTML = [['home', '#/', 'Home', icons.home], ['dict', '#/dict', 'Dictionary', icons.book], ['flash', '#/flash', 'Cards', icons.cards], ['psych', '#/psych', 'Psychiatry', icons.brain], ['more', '#/about', 'More', icons.info]]
    .map(([k, h, t, ic]) => '<a href="' + (k === 'more' ? '#/more' : h) + '" data-nav="' + k + '">' + ic + '<span>' + t + '</span></a>').join('');
  $('#attrib').innerHTML = esc(APP_META.attribution.replace(' ' + APP_META.email, '')) + ' <a href="mailto:' + esc(APP_META.email) + '">' + esc(APP_META.email) + '</a> · <a href="#/new">What\'s New</a> · <a href="#/about">About</a>';

  // "More" page for phones
  const BLURB = {
    verbs: 'Aspect and focus drills, 78 verbs', affixes: 'Unlapi, gitlapi, hulapi: take words apart', lessons: 'Grammar and culture', reading: 'Graded passages', speak: 'Dialogues with listening and recording',
    placement: '20 questions to find your level', progress: 'Streak, stats, backup', settings: 'Register, voice, theme', new: 'What changed in each version', about: 'Credits and disclaimers'
  };
  const PSY_TOOLS = [['#/psych/cases', 'Case simulations'], ['#/psych/mcases', 'Admission MSE practice'], ['#/psych/dcases', 'Discharge practice'], ['#/psych/discharge', 'Discharge assessment'],
    ['#/psych/mood', 'Mood episode checker'], ['#/psych/sud', 'Substance use'], ['#/psych/withdrawal', 'Withdrawal and agitation'], ['#/psych/deesc', 'De-escalation'], ['#/psych/mse-sheet', 'MSE interviewer sheet'], ['#/psych/handout', 'Printable handout']];
  V.more = (el) => {
    const recent = (App.state.recent || []).filter((r) => r.hash !== '#/more');
    const pins = (App.state.pins || []).slice().reverse();
    el.innerHTML = '<h1>More</h1>' +
      (pins.length ? '<h2>Pinned</h2><div class="row" style="margin-bottom:6px">' + pins.map((p) => '<a class="btn sm" href="' + esc(p.hash) + '">' + icons.starOn + ' ' + esc(p.title) + '</a>').join('') + '</div>' : '') +
      (recent.length ? '<h2>Recent</h2><div class="row" style="margin-bottom:6px">' + recent.slice(0, 6).map((r) => '<a class="btn sm" href="' + esc(r.hash) + '">' + esc(r.title) + '</a>').join('') + '</div>' : '') +
      NAV.map(([g, items]) => { const its = items.filter(([k]) => !['home', 'dict', 'flash', 'psych'].includes(k)); return its.length ? '<h2>' + g + '</h2><div class="grid">' + its.map(([k, h, t, ic]) => '<a class="tile" href="' + h + '"><h3 class="row" style="gap:8px">' + ic + t + '</h3>' + (BLURB[k] ? '<p>' + BLURB[k] + '</p>' : '') + '</a>').join('') + '</div>' : ''; }).join('') +
      '<h2>Psychiatry tools</h2><div class="grid">' + PSY_TOOLS.map(([h, t]) => '<a class="tile" href="' + h + '"><h3>' + t + '</h3></a>').join('') + '<a class="tile" href="#/psych"><h3>All sections and phrases</h3></a></div>';
  };
  routes.push([/^\/more$/, V.more, 'more']);
  const MORE_KEYS = ['verbs', 'affixes', 'lessons', 'reading', 'speak', 'placement', 'progress', 'settings', 'new', 'about', 'more'];

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
    App.decorate(view, path, q, key);
    if (key && key !== 'home' && key !== 'more' && key !== '') { // remember the last pages visited for the More screen
      const h1 = view.querySelector('h1'); const title = (h1 ? h1.textContent : TITLES[key] || key).trim().slice(0, 40);
      const hash = '#' + path + (q && Object.keys(q).length && !q.p ? '?' + new URLSearchParams(q) : '');
      App.state.recent = [{ hash, title, sec: App._section || '' }].concat((App.state.recent || []).filter((r) => r.hash !== hash)).slice(0, 8); App.save();
    }
    if (!q.p) window.scrollTo(0, 0);
    syncHistory();
    hideSuggest();
  }
  window.addEventListener('hashchange', render);
  window.addEventListener('popstate', syncHistory);

  /* ---------- Breadcrumbs and pins, the same on every page ----------
     A view that draws its own .breadcrumb keeps it. Otherwise a deep page (two or more path segments) gets
     "Section / Page" built from the route, and nested practice pages get their list page in between. */
  const PARENT = { '/psych/dcase': ['Discharge practice', '#/psych/dcases'], '/psych/mcase': ['Admission MSE practice', '#/psych/mcases'], '/psych/case': ['Case simulations', '#/psych/cases'], '/psych/s': null };
  const NO_PIN = new Set(['home', 'more', 'search', 'settings', 'progress', 'new', 'about', 'placement', '']);
  App.decorate = (view, path, q, key) => {
    const h1 = view.querySelector('h1');
    App._section = TITLES[key] || '';
    const segs = path.split('/').filter(Boolean);
    if (h1 && !view.querySelector('.breadcrumb') && segs.length >= 2) {
      const top = TITLES[key] || segs[0];
      const mid = PARENT['/' + segs.slice(0, 2).join('/')];
      const items = [[top, '#/' + segs[0]]].concat(mid ? [mid] : [], [[h1.textContent.trim().slice(0, 48)]]);
      h1.insertAdjacentHTML('beforebegin', '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>');
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

  /* ---------- Text size ---------- */
  const TEXT_SIZES = [['90', 'Smaller'], ['100', 'Default'], ['112.5', 'Larger'], ['125', 'Largest']];
  App.applyTextSize = () => {
    const v = App.state.settings.textSize || '100';
    document.documentElement.style.fontSize = TEXT_SIZES.some(([k]) => k === v) && v !== '100' ? v + '%' : '';
  };
  App.textSizeSeg = () => '<div class="seg" role="group" aria-label="Text size">' + TEXT_SIZES.map(([k, t], i) => '<button data-ts="' + k + '" class="' + ((App.state.settings.textSize || '100') === k ? 'on' : '') + '" style="font-size:' + (0.82 + i * 0.1) + 'rem">' + t + '</button>').join('') + '</div>';
  (() => {
    const btn = $('#textSizeBtn'), panel = $('#textSizePanel');
    const build = () => { panel.innerHTML = '<span class="eyebrow">Text size</span>' + App.textSizeSeg(); panel.querySelectorAll('[data-ts]').forEach((b) => (b.onclick = () => { App.state.settings.textSize = b.dataset.ts; App.save(); App.applyTextSize(); build(); })); };
    const open = () => { build(); panel.hidden = false; btn.setAttribute('aria-expanded', 'true'); const on = panel.querySelector('.on'); if (on) on.focus(); };
    const close = () => { if (panel.hidden) return; panel.hidden = true; btn.setAttribute('aria-expanded', 'false'); };
    btn.onclick = (e) => { e.stopPropagation(); if (panel.hidden) open(); else close(); };
    document.addEventListener('click', (e) => { if (!panel.hidden && !panel.contains(e.target) && e.target !== btn) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !panel.hidden) { close(); btn.focus(); } });
    window.addEventListener('hashchange', close);
    App.applyTextSize();
  })();

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
