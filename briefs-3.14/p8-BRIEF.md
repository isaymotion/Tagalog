# Pass 8 (ships as 3.16.0): new grammar lessons to B2. Read /home/claude/work/RULES.md first.

Then read /home/claude/devtools/briefs-3.11/lessons-BRIEF.md: the lesson FORMAT and body rules there apply unchanged
(allowed tags, 12 to 18 `.ex` examples, 2 to 4 h3 sections, a table where forms are compared, one or two `.note`
boxes, exactly 6 quiz items of 3 options with varied positions). As models of length and tone read, in
/home/claude/tagalog/js/data/lessons-2.js, the lessons `conditionals`, `social-verbs`, `accidental`, and skim the
titles and summaries of ALL lessons in lessons.js, lessons-2.js and lessons-pictures.js so you build on them (link to
related lessons with `<a href="#/lessons/<id>">title</a>`) and do not repeat them.

For each lesson also write its extras (shape and rules: /home/claude/work/p7/BRIEF.md: 3 mistakes, 6 more examples
not in the body, 6 more quiz items not in the lesson quiz) and its unit-review material (one summary row and two
review quiz items).

## Output: ONE JS file (path in your task)
```js
window.NEW_LESSONS = (window.NEW_LESSONS || []).concat([
  { id: '…', level: 'B1', unit: '…', title: '…', summary: '…', body: `…`, quiz: [ …6 ] },
]);
window.NEW_EXTRA = Object.assign(window.NEW_EXTRA || {}, {
  '<lesson id>': { mistakes: [ …3 ], more: [ …6 ], quiz: [ …6 ] },
});
window.NEW_REVIEW = (window.NEW_REVIEW || []).concat([
  { unit: '<unit name>', row: ['<lesson id>', 'key point in one short English line', 'ONE new Tagalog example sentence', 'its English'],
    quiz: [ ['question', ['a','b','c'], idx, 'why'], ['question', ['a','b','c'], idx, 'why'] ] },
]);
```
Use the ids, units and levels given in your task exactly. Each lesson teaches what a learner at that level needs to
UNDERSTAND patients and relatives and to SPEAK correctly at the bedside and in daily life; say honestly where speakers
vary, where everyday speech differs from the textbook, and what is safe for a learner to say. Grammar claims must be
ones a Filipino teacher would accept; when a rule has exceptions give the common ones. Every Tagalog example must be
natural and correct in focus, aspect, markers, linkers and enclitic order.

Check the file loads with node (`global.window=global; require(file)`) and print per lesson: number of `.ex` boxes
(count `class="ex"` in the body), quiz length, extras counts. Save after each lesson (write early, extend).

## Final reply
File path; per lesson the counts; and a short list of points where two natural wordings or two analyses exist and you
chose one (the owner, a native speaker, checks those first).
