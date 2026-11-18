/* 3.14.0: lesson extras (LESSON_EXTRA, js/data/lesson-extra-*.js), units (LESSON_UNITS, js/data/lessons-zz-order.js) and
   unit reviews (LESSON_REVIEWS, js/data/lessons-review.js, built into LESSONS as review lessons).
   Passes with any subset of the data files: a lesson without extras is a WARN line, not a failure. */
module.exports = (C, bad, counts) => {
  const L = C.LESSONS || [], byId = new Map(L.map((l) => [l.id, l]));
  const X = C.LESSON_EXTRA && typeof C.LESSON_EXTRA === 'object' ? C.LESSON_EXTRA : {};
  const U = Array.isArray(C.LESSON_UNITS) ? C.LESSON_UNITS : null;
  const R = C.LESSON_REVIEWS && typeof C.LESSON_REVIEWS === 'object' ? C.LESSON_REVIEWS : {};
  const isStr = (s) => typeof s === 'string' && s.trim() !== '';
  const optStr = (s) => s === undefined || isStr(s);
  const norm = (s) => String(s).toLowerCase().replace(/&#39;/g, "'").replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();
  const text = (html) => norm(String(html || '').replace(/<[^>]+>/g, ' '));
  // Tagalog that is shown and recorded: the voice reads accents, digits and capitals badly.
  const spoken = (where, s) => {
    if (typeof s !== 'string') return;
    if (/[áàâäéèêëíìîïóòôöúùûü]/i.test(s)) bad(where + ': accented letter in Tagalog: ' + s);
    if (/\d/.test(s)) bad(where + ': digit in Tagalog (write numbers as words): ' + s);
    if (/\b[A-Z]{2,}\b/.test(s)) bad(where + ': ALL-CAPS word in Tagalog: ' + s);
  };
  const STIGMA = ['baliw', 'adik', 'sira-ulo', 'sira ulo', 'loko-loko'];
  const stigma = (where, o) => { const t = JSON.stringify(o).toLowerCase(); STIGMA.forEach((w) => { if (new RegExp('(^|[^a-z-])' + w + '([^a-z-]|$)').test(t)) bad(where + ': stigmatizing word ' + w); }); };
  const quizRow = (q) => Array.isArray(q) && isStr(q[0]) && Array.isArray(q[1]) && q[1].length === 3 && q[1].every(isStr) && new Set(q[1]).size === 3 && Number.isInteger(q[2]) && q[2] >= 0 && q[2] <= 2 && isStr(q[3]);

  // ---------- Extras ----------
  let nMis = 0, nMore = 0, nQuiz = 0, nExtras = 0;
  Object.keys(X).forEach((id) => {
    const x = X[id], l = byId.get(id), w = 'LESSON_EXTRA ' + id;
    if (!l) { bad(w + ': not a lesson id'); return; }
    if (l.review) bad(w + ': extras for a review lesson');
    if (!x || typeof x !== 'object' || Array.isArray(x)) { bad(w + ': not an object'); return; }
    nExtras++;
    const body = text(l.body), own = new Set((l.quiz || []).map((q) => norm(q[0])));
    const mis = x.mistakes, more = x.more, quiz = x.quiz;
    if (!Array.isArray(mis) || (mis.length !== 0 && mis.length !== 3)) bad(w + ': mistakes must be 0 or 3 rows');
    (Array.isArray(mis) ? mis : []).forEach((m, i) => {
      if (!Array.isArray(m) || m.length < 3 || m.length > 4 || !isStr(m[0]) || !isStr(m[1]) || !isStr(m[2]) || !optStr(m[3])) { bad(w + ' mistake ' + (i + 1) + ': [wrong, right, why, voice?] of strings'); return; }
      nMis++;
      if (norm(m[0]) === norm(m[1])) bad(w + ' mistake ' + (i + 1) + ': wrong line equals the right line');
      spoken(w + ' mistake ' + (i + 1), m[1]); spoken(w + ' mistake ' + (i + 1) + ' voice', m[3]);
      if (m[3] !== undefined && /'/.test(m[3])) bad(w + ' mistake ' + (i + 1) + ': voice text keeps an apostrophe');
    });
    if (!Array.isArray(more) || more.length !== 6) bad(w + ': more must be 6 rows');
    (Array.isArray(more) ? more : []).forEach((m, i) => {
      if (!Array.isArray(m) || m.length < 2 || m.length > 3 || !isStr(m[0]) || !isStr(m[1]) || !optStr(m[2])) { bad(w + ' more ' + (i + 1) + ': [tl, en, voice?] of strings'); return; }
      nMore++;
      if (body.includes(norm(m[0]))) bad(w + ' more ' + (i + 1) + ': repeats a sentence of the lesson body: ' + m[0]);
      spoken(w + ' more ' + (i + 1), m[0]); spoken(w + ' more ' + (i + 1) + ' voice', m[2]);
      if (m[2] !== undefined && /'/.test(m[2])) bad(w + ' more ' + (i + 1) + ': voice text keeps an apostrophe');
    });
    if (Array.isArray(more) && new Set(more.filter(Array.isArray).map((m) => norm(m[0]))).size !== more.length) bad(w + ': duplicate more sentence');
    if (!Array.isArray(quiz) || quiz.length !== 6) bad(w + ': quiz must be 6 rows');
    (Array.isArray(quiz) ? quiz : []).forEach((q, i) => {
      if (!quizRow(q)) { bad(w + ' quiz ' + (i + 1) + ': [q, 3 different options, index 0..2, why]'); return; }
      nQuiz++;
      if (own.has(norm(q[0]))) bad(w + ' quiz ' + (i + 1) + ': repeats a question of the lesson quiz: ' + q[0]);
    });
    stigma(w, x);
  });
  const without = L.filter((l) => !l.review && !Object.prototype.hasOwnProperty.call(X, l.id)).map((l) => l.id);
  if (without.length) console.log('WARN lessons still without extras (' + without.length + '): ' + without.join(', '));

  // ---------- Units ----------
  if (!U) bad('LESSON_UNITS missing (js/data/lessons-zz-order.js)');
  const unitOf = new Map(), names = new Set();
  (U || []).forEach((u, k) => {
    if (!Array.isArray(u) || !isStr(u[0]) || !Array.isArray(u[1])) { bad('LESSON_UNITS row ' + k + ': [name, [ids]]'); return; }
    if (names.has(u[0])) bad('LESSON_UNITS: unit twice: ' + u[0]); names.add(u[0]);
    if (u[1].length > 10) bad('LESSON_UNITS ' + u[0] + ': more than 10 lessons');
    u[1].forEach((id) => {
      if (!byId.has(id)) bad('LESSON_UNITS ' + u[0] + ': no lesson ' + id);
      if (unitOf.has(id)) bad('LESSON_UNITS: ' + id + ' is in ' + unitOf.get(id) + ' and ' + u[0]);
      unitOf.set(id, u[0]);
      if (byId.has(id) && byId.get(id).unit !== u[0]) bad('lesson ' + id + ' has unit ' + byId.get(id).unit + ', not ' + u[0]);
    });
  });
  const unlisted = L.filter((l) => !l.review && !unitOf.has(l.id)).map((l) => l.id);
  if (unlisted.length) console.log('WARN lessons not listed in LESSON_UNITS: ' + unlisted.join(', '));
  // LESSONS is in unit order, each unit in one run, and a unit review is the last lesson of its unit.
  { const runs = []; L.forEach((l) => { if (!runs.length || runs[runs.length - 1] !== l.unit) runs.push(l.unit); });
    if (new Set(runs).size !== runs.length) bad('LESSONS: a unit is split: ' + runs.join(' | '));
    const order = (U || []).map((u) => u[0]).filter((n) => runs.includes(n));
    if (runs.filter((n) => names.has(n)).join('|') !== order.join('|')) bad('LESSONS: units not in LESSON_UNITS order');
    if (U) U.forEach((u) => { const ls = L.filter((l) => !l.review && l.unit === u[0]).map((l) => l.id), want = u[1].filter((id) => byId.has(id)); if (ls.slice(0, want.length).join() !== want.join()) bad('LESSONS: unit ' + u[0] + ' not in LESSON_UNITS order'); }); }

  // ---------- Reviews ----------
  let nRev = 0;
  Object.keys(R).forEach((u) => {
    const r = R[u], w = 'LESSON_REVIEWS ' + u;
    if (!names.has(u)) bad(w + ': not a unit name in LESSON_UNITS');
    if (!r || typeof r !== 'object') { bad(w + ': not an object'); return; }
    ['id', 'level', 'title', 'summary', 'intro'].forEach((k) => { if (!isStr(r[k])) bad(w + ': missing ' + k); });
    const ids = ((U || []).find((x) => x[0] === u) || [u, []])[1];
    if (!Array.isArray(r.rows) || !r.rows.length) bad(w + ': no rows');
    const seenRow = new Set();
    (Array.isArray(r.rows) ? r.rows : []).forEach((x, i) => {
      if (!Array.isArray(x) || x.length < 4 || x.length > 5 || !x.slice(0, 4).every(isStr) || !optStr(x[4])) { bad(w + ' row ' + (i + 1) + ': [lesson id, point, tl, en, voice?] of strings'); return; }
      if (!ids.includes(x[0])) bad(w + ' row ' + (i + 1) + ': ' + x[0] + ' is not a lesson of the unit');
      if (seenRow.has(x[0])) bad(w + ': two rows for ' + x[0]); seenRow.add(x[0]);
      const l = byId.get(x[0]); if (l && !l.review && text(l.body).includes(norm(x[2]))) bad(w + ' row ' + (i + 1) + ': example repeats the lesson body: ' + x[2]);
      spoken(w + ' row ' + (i + 1), x[2]); spoken(w + ' row ' + (i + 1) + ' voice', x[4]);
      if (x[4] !== undefined && /'/.test(x[4])) bad(w + ' row ' + (i + 1) + ': voice text keeps an apostrophe');
    });
    const missing = ids.filter((id) => byId.has(id) && !seenRow.has(id)); if (missing.length) console.log('WARN ' + w + ': no row for ' + missing.join(', '));
    if (!Array.isArray(r.quiz) || r.quiz.length < 10) bad(w + ': quiz needs 10 or more rows');
    (Array.isArray(r.quiz) ? r.quiz : []).forEach((q, i) => { if (!quizRow(q)) bad(w + ' quiz ' + (i + 1) + ': [q, 3 different options, index 0..2, why]'); });
    stigma(w, r);
    const built = byId.get(r.id);
    if (!built || !built.review) { bad(w + ': review lesson ' + r.id + ' was not built into LESSONS'); return; }
    nRev++;
    const inUnit = L.filter((l) => l.unit === u);
    if (inUnit[inUnit.length - 1] !== built) bad(w + ': review is not the last lesson of its unit');
    if (L.filter((l) => l.id === r.id).length !== 1) bad(w + ': review built twice');
  });
  if (new Set(L.map((l) => l.id)).size !== L.length) bad('LESSONS: duplicate id after ordering');
  Object.assign(counts, { extras: nExtras, extraMistakes: nMis, extraMore: nMore, extraQuiz: nQuiz, units: (U || []).length, reviews: nRev });
};
