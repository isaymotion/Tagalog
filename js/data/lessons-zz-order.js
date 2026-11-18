/* Lesson order, units and unit reviews (3.14.0). Loaded AFTER every lesson data file (lessons.js, lessons-2.js,
   lessons-pictures.js, lesson-extra-*.js, lessons-review.js) and before js/core.js, so every page (lessons list,
   previous / next, Home "next lesson", progress counts, search, handout) sees one order.
   LESSON_UNITS: [unit name, [lesson ids in order]]. Each listed lesson gets that `unit`, and window.LESSONS is re-sorted
   IN PLACE (same array object) into this order. A lesson listed nowhere keeps its own `unit`: it goes after the listed
   lessons of that unit if the unit is here, else at the end in file order. (The normal way to add a lesson is to add
   its id below.)
   LESSON_REVIEWS (js/data/lessons-review.js) { '<unit name>': { id, level, title, summary, intro, rows, quiz } }: each
   becomes a lesson { id, level, unit, title, summary, review: true, body, quiz } placed LAST in its unit. rows are
   [lesson id, key point, Tagalog example, English, voice?]; a row naming no lesson is left out. The body is a stacked
   list (lesson link, key point, then an ordinary <div class="ex"> example box), so the example gets its speaker button,
   prints in the handout and is recorded by tools/collect-texts.js like any lesson example.
   Running this file twice gives the same result. Loads alone in Node (global.window = global). No Tagalog here. */
(function (root) {
  root.LESSON_UNITS = [
    ['Foundations', ['pronounce', 'markers', 'names', 'pronouns', 'linkers', 'may-wala', 'questions', 'negation', 'demonstratives', 'plurals']],
    ['Verbs: focus and aspect', ['focus', 'aspect', 'panlapi', 'mag-um', 'choosing-focus', 'focus-an-i', 'mang-verbs', 'ay-inversion', 'recent-past']],
    ['Verbs: more affixes', ['ability', 'causative', 'social-verbs', 'accidental', 'nominalising', 'pang-ipang', 'feeling-verbs', 'may-verbs', 'ka-an-verbs', 'magsi']],
    ['Natural speech', ['particles', 'politeness', 'enclitics', 'softeners', 'din-daw', 'hedging', 'exclamations', 'tags']],
    ['Building sentences', ['connectors', 'reason-result', 'conditionals', 'time-clauses', 'while-before-after', 'kahit-kung', 'reported-speech', 'relative-clauses', 'nang-ng']],
    ['Register and style', ['register', 'spoken-short-forms', 'storytelling', 'instructions', 'formal-filipino']],
    ['Everyday life', ['numbers', 'modals', 'comparisons', 'requests', 'time-words', 'intensifiers', 'location', 'spanish-numbers', 'ordinals', 'equality']],
    ['Culture', ['kinship', 'values', 'folk', 'idioms-distress', 'interpreting']],
    ['Picture lessons', ['pic-nasaan', 'pic-masakit', 'pic-paglalarawan', 'pic-bilang', 'pic-suot', 'pic-direksyon', 'pic-karatula', 'pic-makina', 'pic-kalagayan', 'pic-paliwanag']]
  ];
  const L = root.LESSONS;
  if (!Array.isArray(L)) return;
  const U = root.LESSON_UNITS;
  const R = root.LESSON_REVIEWS && typeof root.LESSON_REVIEWS === 'object' ? root.LESSON_REVIEWS : {};
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const str = (s) => typeof s === 'string' && s.trim() !== '';
  // Idempotent: reviews built by an earlier run (marked builtReview) are taken out and built again.
  const lessons = L.filter((l) => l && typeof l === 'object' && !l.builtReview);
  const byId = new Map();
  lessons.forEach((l) => { if (l.id && !byId.has(l.id)) byId.set(l.id, l); });
  const listed = new Set();
  U.forEach(([u, ids]) => ids.forEach((id) => { const l = byId.get(id); if (l && !listed.has(id)) { l.unit = u; listed.add(id); } }));
  const review = (u) => {
    const r = Object.prototype.hasOwnProperty.call(R, u) ? R[u] : null;
    if (!r || typeof r !== 'object' || !str(r.id) || byId.has(r.id)) return null;
    const rows = (Array.isArray(r.rows) ? r.rows : []).filter((x) => Array.isArray(x) && str(x[0]) && byId.has(x[0]) && str(x[2]));
    const quiz = (Array.isArray(r.quiz) ? r.quiz : []).filter((q) => Array.isArray(q) && str(q[0]) && Array.isArray(q[1]) && q[1].length >= 2 && Number.isInteger(q[2]) && q[2] >= 0 && q[2] < q[1].length);
    const body = (str(r.intro) ? '<p>' + esc(r.intro) + '</p>' : '') + '<div class="rv-list">' + rows.map(([id, point, tl, en, voice]) =>
      '<div class="rv-row"><p class="rv-h"><a href="#/lessons/' + esc(id) + '"><b>' + esc(byId.get(id).title) + '</b></a></p>' + (str(point) ? '<p class="rv-pt">' + esc(point) + '</p>' : '') +
      '<div class="ex"' + (str(voice) ? ' data-voice="' + esc(voice) + '"' : '') + '><b>' + esc(tl) + '</b><span>' + esc(en || '') + '</span></div></div>').join('') + '</div>';
    const out = { id: r.id, level: str(r.level) ? r.level : 'A1', unit: u, title: str(r.title) ? r.title : 'Review: ' + u, summary: str(r.summary) ? r.summary : '', review: true, body, quiz };
    Object.defineProperty(out, 'builtReview', { value: true, enumerable: false });
    return out;
  };
  const out = [], seen = new Set();
  const put = (l) => { if (l && !seen.has(l)) { seen.add(l); out.push(l); } };
  U.forEach(([u, ids]) => {
    ids.forEach((id) => put(byId.get(id)));
    lessons.forEach((l) => { if (l.unit === u && !listed.has(l.id)) put(l); });
    put(review(u));
  });
  lessons.forEach(put);
  L.length = 0;
  out.forEach((l) => L.push(l));
})(typeof window !== 'undefined' ? window : globalThis);
