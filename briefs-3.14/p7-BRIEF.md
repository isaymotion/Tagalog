# Pass 7 (ships as 3.14.0): lesson extras. Read /home/claude/work/RULES.md first.

For each lesson in your list, read its body and quiz in the app repo (READ ONLY): /home/claude/tagalog/js/data/lessons.js,
lessons-2.js or lessons-pictures.js (find it by `id: '<id>'`). Then write its "extras": things that deepen the lesson
without repeating it.

## Output: one JS file (path in your task), exactly this shape
```js
/* Lesson extras part N (3.14.0). Draft for review. Shape: see js/views.js. Ids are lesson ids. */
window.LESSON_EXTRA = Object.assign(window.LESSON_EXTRA || {}, {
  'markers': {
    mistakes: [
      ['Kumain ako ang mangga.', 'Kumain ako ng mangga.', 'With an actor-focus verb the thing eaten takes ng; ang would make it a second topic.'],
      … exactly 3
    ],
    more: [
      ['Uminom na po ba kayo ng gamot?', 'Have you taken your medicine yet?'],
      … exactly 6
    ],
    quiz: [
      ['Which marker fits? "Binili ____ nanay ang gamot."', ['ng', 'ang', 'sa'], 0, 'The doer of an object-focus verb takes ng.'],
      … exactly 6
    ]
  },
  …
});
```
## Rules
- `mistakes` (3 per lesson): [wrong Tagalog, right Tagalog, why in English]. A REAL learner error that an English
  speaker makes with THIS lesson's point. The wrong line must be wrong for every careful native speaker, not merely
  informal or regional, and must not be a real sentence with another meaning. The right line is one complete sentence,
  the smallest fix of the wrong one. The right line is recorded as audio, the wrong one never is.
- `more` (6 per lesson): [Tagalog, English]. New example sentences showing the lesson's pattern: 3 from the ward,
  clinic or a family visit, 3 from everyday life. One complete sentence each (two short sentences at most), plain text,
  no slashes, brackets, blanks or alternatives. NONE may repeat a sentence that is in the lesson body.
- `quiz` (6 per lesson): [question, [exactly 3 options], index of the right option, short why]. Same style as the
  lesson's own quiz but NONE may repeat its questions. Mix gap questions ("____"), meaning questions, "which sentence
  is correct" and at least one bedside-reasoning question. Vary the position of the right answer: across the 6 items
  use index 0, 1 and 2 two times each. The right answer must be the ONLY defensible one: wrong options must be clearly
  wrong, not just less common.
- Culture lessons (`values`, `folk`, `kinship`, `interpreting`, `idioms-distress`) and picture lessons (`pic-…`):
  `more` and `quiz` as above; `mistakes` may be [] when the lesson has no grammar point (for a culture lesson a
  "mistake" may instead be a wrong WORDING a clinician might use, with the kinder or more natural wording as the fix).
- Stay at the lesson's level: an A1 lesson's extras use A1 to A2 words and simple verb forms.
- Do not teach a pattern the lesson does not cover. Do not contradict the lesson. If you think the lesson itself has
  an error, do not fix it: list it in your final reply.
- Every Tagalog string follows RULES.md (no ALL CAPITALS, no acronyms, no accented letters, no digits: numbers as
  words, no brand names, no stigmatizing words, invented first names only).
- JS strings in single quotes; escape an apostrophe as \'. Check with
  `node -e "global.window=global; require('<your file>'); const X=window.LESSON_EXTRA; for (const k in X) console.log(k, X[k].mistakes.length, X[k].more.length, X[k].quiz.length)"`.
- Save the file after every two lessons (write early, extend), so nothing is lost if you are cut off.

## Final reply
File path; a line per lesson with its counts; and a short list of items where two natural wordings exist or where you
were less than sure (so the owner, a native speaker, checks those first).
