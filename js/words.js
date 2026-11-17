/* Word families (3.8.0): #/words?tab=fam|lad|syn. Data: js/data/word-sets.js.
   fam  one root and the words built from it (WORD_FAMILIES); ?r=<root> scrolls to that family
   lad  one feeling from mild to strong (WORD_LADDERS)
   syn  the same idea in deep Filipino, everyday speech and Taglish (WORD_SYNONYMS)
   The matching drill is #/drills/families (js/drills.js). */
(function () {
  const { esc } = App;
  const V = (App.views = App.views || {});
  const FAMS = window.WORD_FAMILIES || [], LADS = window.WORD_LADDERS || [], SYNS = window.WORD_SYNONYMS || [];
  const TABS = [['fam', 'Families'], ['lad', 'Mild to strong'], ['syn', 'Deep, everyday, Taglish']];
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

  V.words = (el, p, q) => {
    const tab = q && q.r ? 'fam' : TABS.some(([k]) => k === (q && q.tab)) ? q.tab : 'fam';
    el.innerHTML = '<h1>Word families</h1>' +
      '<div class="ptabs" role="tablist">' + TABS.map(([k, t]) => '<a role="tab" aria-selected="' + (k === tab) + '" class="' + (k === tab ? 'on' : '') + '" href="#/words?tab=' + k + '">' + t + '</a>').join('') + '</div>' +
      '<div style="margin-top:12px">' + (tab === 'lad' ? lad() : tab === 'syn' ? syn() : fam()) + '</div>' +
      '<div class="row" style="margin-top:14px"><a class="btn primary" href="#/drills/families">Practice these</a><a class="btn" href="#/dict">Dictionary</a></div>' +
      '<p class="muted small" style="margin-top:12px">Drafted for study; the Tagalog is pending review by a native speaker.</p>';
    if (q && q.r) { const t = el.querySelector('#wf-' + (window.CSS && CSS.escape ? CSS.escape(q.r) : q.r)); if (t) setTimeout(() => t.scrollIntoView({ block: 'start' }), 60); }
  };
})();
