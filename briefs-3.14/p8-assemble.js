global.window = global; const fs = require('fs');
['a', 'b', 'c', 'd'].forEach((x) => require('/home/claude/work/p8/lessons-3' + x + '.js'));
const repo = process.argv[2];
const q = (s) => "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n') + "'";
const arr = (a) => '[' + a.map((x) => Array.isArray(x) ? arr(x) : typeof x === 'number' ? x : q(x)).join(', ') + ']';
const order = ['mag-um', 'choosing-focus', 'mang-verbs', 'pang-ipang', 'ka-an-verbs', 'magsi', 'feeling-verbs', 'may-verbs', 'softeners', 'din-daw', 'tags', 'time-clauses', 'while-before-after', 'kahit-kung', 'nang-ng', 'reason-result', 'formal-filipino', 'instructions', 'ordinals', 'equality'];
const L = order.map((id) => NEW_LESSONS.find((l) => l.id === id));
if (L.some((l) => !l) || L.length !== NEW_LESSONS.length) throw new Error('lesson list');
let s = `/* Grammar lessons, third file (3.16.0): twenty lessons to B2. Same shape as js/data/lessons.js, six quiz items each.
   mag-um, choosing-focus, mang-verbs, pang-ipang, ka-an-verbs, magsi, feeling-verbs, may-verbs, softeners, din-daw, tags,
   time-clauses, while-before-after, kahit-kung, nang-ng, reason-result, formal-filipino, instructions, ordinals, equality.
   Units and order are set in js/data/lessons-zz-order.js. An example may carry data-voice="text for the voice".
   Drafted by Claude (one writer and one second reader per lesson), pending Dr. Navarro's review. */
window.LESSONS = window.LESSONS || [];
window.LESSONS.push(
`;
s += L.map((l) => { if (/`|\$\{/.test(l.body)) throw new Error('backtick in ' + l.id);
  return `{
  id: ${q(l.id)}, level: ${q(l.level)}, unit: ${q(l.unit)}, title: ${q(l.title)},
  summary: ${q(l.summary)},
  body: \`${l.body.replace(/\\/g, '\\\\')}\`,
  quiz: [
${l.quiz.map((k) => '    ' + arr(k)).join(',\n')}
  ]
}`; }).join(',\n') + '\n);\n';
fs.writeFileSync(repo + '/js/data/lessons-3.js', s);
let e = `/* Lesson extras part 7 (3.16.0): the twenty lessons of js/data/lessons-3.js. Draft for review. Shape: see js/views.js. */
window.LESSON_EXTRA = Object.assign(window.LESSON_EXTRA || {}, {
`;
e += order.map((id) => { const x = NEW_EXTRA[id]; if (!x) throw new Error('extra ' + id);
  return `  ${q(id)}: {
    mistakes: [
${x.mistakes.map((k) => '      ' + arr(k)).join(',\n')}
    ],
    more: [
${x.more.map((k) => '      ' + arr(k)).join(',\n')}
    ],
    quiz: [
${x.quiz.map((k) => '      ' + arr(k)).join(',\n')}
    ]
  }`; }).join(',\n') + '\n});\n';
fs.writeFileSync(repo + '/js/data/lesson-extra-7.js', e);
let r = `/* Unit reviews, additions of 3.16.0: one row and two quiz items for each lesson of js/data/lessons-3.js, appended to the
   reviews of js/data/lessons-review.js (loaded after it, before lessons-zz-order.js). Draft for review. */
(function (R) {
  if (!R) return;
  const add = (unit, row, quiz) => { const r = R[unit]; if (!r) return; r.rows.push(row); quiz.forEach((k) => r.quiz.push(k)); };
`;
r += order.map((id) => { const x = NEW_REVIEW.find((k) => k.row[0] === id); if (!x) throw new Error('review ' + id);
  return `  add(${q(x.unit)}, ${arr(x.row)}, [\n${x.quiz.map((k) => '    ' + arr(k)).join(',\n')}\n  ]);`; }).join('\n') + '\n})(window.LESSON_REVIEWS);\n';
fs.writeFileSync(repo + '/js/data/lessons-review-2.js', r);
console.log('ok', L.length);
