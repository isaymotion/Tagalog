/* Word families (3.8.0): #/words?tab=fam|lad|syn. Data: js/data/word-sets.js.
   fam  one root and the words built from it (WORD_FAMILIES); ?r=<root> scrolls to that family
   lad  one feeling from mild to strong (WORD_LADDERS)
   syn  the same idea in deep Filipino, everyday speech and Taglish (WORD_SYNONYMS)
   str  one spelling, two words, told apart by stress (WORD_STRESS, 3.9.0); drill #/drills/stress
   look words from Spanish and English (3.9.0): spelling rules, false friends (WORD_FALSE_FRIENDS), look-alikes (WORD_COGNATES)
   The matching drill is #/drills/families (js/drills.js). */
(function () {
  const { esc } = App;
  const V = (App.views = App.views || {});
  const FAMS = window.WORD_FAMILIES || [], LADS = window.WORD_LADDERS || [], SYNS = window.WORD_SYNONYMS || [];
  const STRESS = window.WORD_STRESS || [], FALSE = window.WORD_FALSE_FRIENDS || [], COGS = window.WORD_COGNATES || [], SPELL = window.WORD_SPELLING || [], GROUPS = window.WORD_COGNATE_GROUPS || [];
  const TABS = [['fam', 'Families'], ['lad', 'Mild to strong'], ['syn', 'Deep, everyday, Taglish'], ['str', 'Stress pairs'], ['look', 'Spanish and English']];
  const DRILL = { str: ['#/drills/stress', 'Practice stress pairs'], look: ['#/drills/families', 'Practice false friends'] };
  const LANGS = { es: 'Spanish', en: 'English' };
  const row = (tl, en) => '<div class="afe"><div class="spread"><b class="tl">' + esc(tl) + '</b>' + App.sayBtn(tl) + '</div><div class="muted">' + esc(en) + '</div></div>';

  const fam = () => '<p class="muted">One root carries a whole family of words. Learn the root once, then read the affixes. ' + FAMS.length + ' families.</p>' +
    '<div class="row" style="margin-bottom:10px">' + FAMS.map((f) => '<a class="btn sm tl" href="#/words?r=' + encodeURIComponent(f.r) + '">' + esc(f.r) + '</a>').join('') + '</div>' +
    FAMS.map((f) => '<section class="card wfam" id="wf-' + esc(f.r) + '"><h2 class="tl" style="margin:0">' + esc(f.r) + ' <span class="muted" style="font-weight:400;font-size:.95rem;font-family:var(--font-ui)">' + esc(f.en) + '</span></h2>' +
      f.forms.map((x) => row(x[0], x[1])).join('') +
      (f.rel && f.rel.length ? '<p class="muted small" style="margin:8px 0 0">Related words: ' + f.rel.map((x) => '<span class="tl">' + esc(x[0]) + '</span> (' + esc(x[1]) + ')').join(' · ') + '</p>' : '') + '</section>').join('');

  const lad = () => '<p class="muted">Words for the same feeling, from mild to strong. Use them to ask how bad it is, and to hear how bad the patient says it is.</p>' +
    '<div class="notice info" style="margin-bottom:12px">A rough guide. People differ in how strong a word feels, so ask the patient to describe it.</div>' +
    LADS.map((l) => '<section class="card wfam"><h2 style="margin:0">' + esc(l.en) + '</h2>' +
      l.steps.map((s, i) => '<div class="afe"><div class="spread"><span><span class="wlad" aria-hidden="true">' + Array.from({ length: l.steps.length }, (_, k) => '<i' + (k <= i ? ' class="on"' : '') + '></i>').join('') + '</span> <b class="tl">' + esc(s[0]) + '</b></span>' + App.sayBtn(s[0]) + '</div><div class="muted">' + esc(s[1]) + '</div></div>').join('') + '</section>').join('');

  const syn = () => '<p class="muted">The same idea in three registers. Deep words appear in news, church and forms; everyday words are what most people say; Taglish is common in town and among the young. Understand all three, speak the everyday one.</p>' +
    SYNS.map((x) => '<section class="card wsyn"><h3 style="margin:0 0 6px">' + esc(x.en) + '</h3><dl>' +
      [['Deep', x.deep, true], ['Everyday', x.daily, true], ['Taglish', x.mix, false]].map(([lab, ws, say]) => '<dt>' + lab + '</dt><dd>' + (ws || []).map((w) => '<span class="tl">' + esc(w) + '</span>' + (say ? ' ' + App.sayBtn(w) : '')).join(', ') + '</dd>').join('') +
      '</dl>' + (x.note ? '<p class="muted small" style="margin:6px 0 0">' + esc(x.note) + '</p>' : '') + '</section>').join('');

  const side = (x, m, last) => '<div class="afe"><div class="spread"><span><b class="tl wstress">' + esc(App.stressLabel(x, last)) + '</b> <span class="muted">' + esc(m.en) + '</span></span>' + App.sayBtn(m.ex[0]) + '</div>' +
    '<div class="tl">' + esc(m.ex[0]) + '</div><div class="muted small">' + esc(m.ex[1]) + (m.mark !== x.w ? ' · In a dictionary: ' + esc(m.mark) : '') + '</div></div>';
  const str = () => '<p class="muted">Tagalog is written without accents, so one spelling can be two different words. Only the stress tells them apart. Capital letters show the stressed syllable. ' + STRESS.length + ' pairs.</p>' +
    '<div class="notice info" style="margin-bottom:12px">The speaker button plays the whole sentence. The recorded voice does not always stress a single word the right way, so learn the stress from the capitals and from the people around you.</div>' +
    STRESS.map((x) => '<section class="card wfam"><h2 class="tl" style="margin:0">' + esc(x.w) + '</h2>' + side(x, x.a, false) + side(x, x.b, true) + (x.note ? '<p class="muted small" style="margin:8px 0 0">' + esc(x.note) + '</p>' : '') + '</section>').join('');

  const look = () => '<p class="muted">Thousands of Tagalog words came from Spanish, and many newer ones from English. Most kept their meaning, so you already know them once you see through the spelling. Some changed their meaning: learn those first.</p>' +
    '<h2>False friends <span class="muted small">' + FALSE.length + '</span></h2><p class="muted small">Words that look familiar and mean something else. Those marked Ward matter in an interview.</p>' +
    FALSE.map((x) => '<div class="card wsyn"><div class="spread"><span><b class="tl">' + esc(x.tl) + '</b>' + (x.clin ? ' <span class="pill">Ward</span>' : '') + '</span>' + (x.mix ? '' : App.sayBtn(x.tl)) + '</div>' +
      '<div>' + esc(x.en) + '</div><div class="muted small">' + LANGS[x.from] + ' ' + esc(x.src) + ': ' + esc(x.srcEn) + '</div>' + (x.note ? '<div class="muted small" style="margin-top:4px">' + esc(x.note) + '</div>' : '') + '</div>').join('') +
    '<h2 style="margin-top:18px">How the spelling changes</h2><div class="card">' + SPELL.map((r) => '<div class="afe"><b>' + esc(r[0]) + '</b><div class="muted tl">' + esc(r[1]) + '</div></div>').join('') + '</div>' +
    '<h2 style="margin-top:18px">Look-alikes <span class="muted small">' + COGS.length + '</span></h2><p class="muted small">Same meaning as the Spanish or English word.</p>' +
    GROUPS.map(([g, title]) => { const ws = COGS.filter((c) => c[4] === g); return ws.length ? '<section class="card wfam"><h3 style="margin:0 0 4px">' + esc(title) + '</h3><div class="wcog">' +
      ws.map((c) => '<div><b class="tl">' + esc(c[0]) + '</b> ' + App.sayBtn(c[0]) + '<div class="muted small">' + esc(c[3]) + (c[2].toLowerCase() !== c[0] ? ' · ' + (c[1] === 'en' ? 'Eng. ' : 'Sp. ') + esc(c[2]) : '') + '</div></div>').join('') + '</div></section>' : ''; }).join('');

  V.words = (el, p, q) => {
    const tab = q && q.r ? 'fam' : TABS.some(([k]) => k === (q && q.tab)) ? q.tab : 'fam';
    el.innerHTML = '<h1>Word families</h1>' +
      '<div class="ptabs" role="tablist">' + TABS.map(([k, t]) => '<a role="tab" aria-selected="' + (k === tab) + '" class="' + (k === tab ? 'on' : '') + '" href="#/words?tab=' + k + '">' + t + '</a>').join('') + '</div>' +
      '<div style="margin-top:12px">' + (tab === 'lad' ? lad() : tab === 'syn' ? syn() : tab === 'str' ? str() : tab === 'look' ? look() : fam()) + '</div>' +
      '<div class="row" style="margin-top:14px"><a class="btn primary" href="' + (DRILL[tab] || ['#/drills/families'])[0] + '">' + (DRILL[tab] || [0, 'Practice these'])[1] + '</a><a class="btn" href="#/dict">Dictionary</a></div>' +
      '<p class="muted small" style="margin-top:12px">Drafted for study; the Tagalog is pending review by a native speaker.</p>';
    const on = el.querySelector('.ptabs a.on'), bar = el.querySelector('.ptabs'); // five tabs do not fit a phone: bring the open one into view
    if (on && bar && on.offsetLeft + on.offsetWidth > bar.clientWidth) bar.scrollLeft = on.offsetLeft - 16;
    if (q && q.r) { const t = el.querySelector('#wf-' + (window.CSS && CSS.escape ? CSS.escape(q.r) : q.r)); if (t) setTimeout(() => t.scrollIntoView({ block: 'start' }), 60); }
  };
})();
