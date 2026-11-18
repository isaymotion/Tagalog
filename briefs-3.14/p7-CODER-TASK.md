# Pass 7 (ships as 3.14.0): lesson extras, units and unit reviews

Read /home/claude/work/CODER.md first. Worktree: /home/claude/tl-p7 (branch wip-3.14.0). Tests: /home/claude/work/p7/tests
(write `data_check_ext_extras.js` and `smoke_ext_extras.py`). Port 8771. Pass folder: /home/claude/work/p7.
Reference implementation (read only, a sister app with the same engine): /home/claude/isaymotion/japanese
(`js/views.js` around "0.23.0 lesson extras", `js/data/lesson-extra-1.js` header, `js/data/lessons-zz-order.js`,
and the `.lx-*` rules in its `css/style.css`). Port its ideas; keep Usap Tayo's own code style.

## Data (written by others while you work)
- `/home/claude/work/p7/lesson-extra-{1..6}.js` → copy to `js/data/lesson-extra-{1..6}.js` when they exist (copy the
  newest versions again before your final test run; some may still be missing: your code and tests must pass with any
  subset, including none). Shape: /home/claude/work/p7/BRIEF.md. Load them in `index.html` after
  `js/data/lessons-pictures.js`.
- `/home/claude/work/p7/lessons-review.js` → `js/data/lessons-review.js` (shape: /home/claude/work/p7/REVIEWS-BRIEF.md),
  loaded after the lesson-extra files. Until it exists use a seed of your own with two units.
Until the real files exist, write small seed files in the same shapes (2 lessons, 2 reviews) to develop against, and
delete the seeds before finishing (real files replace them; if a real file is still missing at the end, leave NO seed
in its place and say so).

## 1. Lesson order and units: new file `js/data/lessons-zz-order.js`
Loaded after ALL lesson data (lessons.js, lessons-2.js, lessons-pictures.js, lesson-extra-*, lessons-review.js) and
before `js/core.js`. It must also load alone in Node (`global.window = global`) without error.
```js
window.LESSON_UNITS = [
  ['Foundations', ['pronounce','markers','names','pronouns','linkers','may-wala','questions','negation','demonstratives','plurals']],
  ['Verbs: focus and aspect', ['focus','aspect','panlapi','focus-an-i','ay-inversion','recent-past']],
  ['Verbs: more affixes', ['ability','causative','social-verbs','accidental','nominalising']],
  ['Natural speech', ['particles','politeness','enclitics','hedging','exclamations']],
  ['Building sentences', ['connectors','conditionals','reported-speech','relative-clauses']],
  ['Register and style', ['register','spoken-short-forms','storytelling']],
  ['Everyday life', ['numbers','modals','comparisons','requests','time-words','intensifiers','location','spanish-numbers']],
  ['Culture', ['kinship','values','folk','idioms-distress','interpreting']],
  ['Picture lessons', ['pic-nasaan','pic-masakit','pic-paglalarawan','pic-bilang','pic-suot','pic-direksyon','pic-karatula','pic-makina','pic-kalagayan','pic-paliwanag']]
];
```
It (a) sets each listed lesson's `unit` to its unit name and re-sorts `window.LESSONS` IN PLACE (same array object) into
this order; a lesson not listed anywhere keeps its own `unit` and goes after the listed lessons of that unit name if the
unit exists, else at the end in file order (so a later data file can add a lesson without editing this one, though the
normal way is to add its id here); (b) for each unit that has an entry in `window.LESSON_REVIEWS`, builds a review lesson
`{ id, level, unit, title, summary, review: true, body, quiz }` and inserts it as the LAST lesson of the unit. The body is
`<p>intro</p>` + a table "Lesson | Key point | Example" with one row per `rows` entry whose lesson id exists: lesson
title as a link `<a href="#/lessons/<id>">`, the key point, and the example as a real example box inside the cell or,
simpler and better on phones, NOT a table at all: a stacked list, one block per row = lesson link (bold), key point
(muted), then `<div class="ex"><b>TL</b><span>EN</span></div>` so the example gets its speaker button and prints in the
handout like any lesson example. Use the stacked form. Running the file twice must give the same result (idempotent:
do not add a review twice). Check nothing else in the app depends on the OLD unit names or on lesson array positions
(grep for `'Verbs'`, `'Picture lessons'`, `'Natural speech'`, `unit ===`, `LESSONS[`, `.unit`): fix what does
(e.g. the handout's lesson select groups by unit; the lesson `panlapi` is described as "unit Verbs" somewhere; the
smoke/data tests may name units).

## 2. Lessons list (`V.lessons` in js/views.js)
Units in `LESSON_UNITS` order; a review tile carries a "Review" pill (`<span class="pill rv">Review</span>`, add a
token-based style) next to its level pill. Under the h1, one line with how many lessons are done out of all, as now if
there is one. No other change.

## 3. Lesson page (`V.lesson`)
After the lesson body and before "Check yourself":
- "Common mistakes" (h2) when `mistakes` has valid rows: each row = the wrong line struck through with a ✗ mark and a
  screen-reader "Wrong: " prefix (it is NOT an `.ex`, has no speaker, is never spoken), then the right line as
  `<div class="ex lx-ok"><b class="tl">right</b><span>why</span></div>` (gets the speaker button like body examples).
- "More examples" (h2): each as `<div class="ex"><b>TL</b><span>EN</span></div>`.
Both inside one `<div class="lesson-body lx">` so the existing speaker-button code and styles apply (the existing loop
adds buttons to `.lesson-body .ex`: make sure it now covers the extras and the review rows, and still honours
`data-voice`). After "Check yourself": "More practice" (h2) with a second `App.runQuiz` in `#lq2` when the lesson has
an extras quiz; best % in `state.done.lessonsMore[id]` (create the object if absent; lesson completion stays
`state.done.lessons`), `App.activity(5)`. A review lesson shows the Review pill beside its level, and its own quiz is
its "Check yourself" (10 items). Previous / next buttons follow the new order. Also add `App.lessonLinks = App.lessonLinks || []`
(functions `(lesson) => html` drawn in a `.row.noprint` under the quizzes; each returns '' when it has nothing): a
later pass uses it. Malformed extras (not an object, rows of the wrong shape) must be ignored without an error.

## 4. Progress, Home, search
- Progress page: wherever lessons done are counted, reviews count as lessons (they are in LESSONS). Add a small
  "More practice done: X of Y lessons" line or row using `App.progressExtra` chaining (see js/vocab.js for how it chains).
- Home "next lesson" tile must follow the new order (it probably takes the first lesson without a score: check).
- Search (js/core.js): lessons are indexed by title/summary already; make sure review lessons appear (kind label
  "Lesson"), and do NOT index the extras' sentences.

## 5. Lesson handout (`js/grammar-handout.js`, topic `lesson`)
New options in `ghandout.lesson` (checkboxes, default on): `mistakes` ("Common mistakes"), `more` ("More examples"),
`quiz2` ("More practice quiz", with its answers added to the key when `key` is on). Mistakes print as: ✗ wrong line
(struck through in the HTML preview; in the PDF use pdfmake `decoration: 'lineThrough'`, and remember the PDF font
lacks some glyphs: use a plain "x" or the word "Not:" if ✗ does not render, check how other topics handle glyphs),
then the right line bold and the why. More examples print like body examples (Tagalog bold, English under it, respect
the `english` show/hide option as the body does). Review lessons print through the same path (their body is ordinary
lesson HTML). Fresh pdfmake node objects each time. The lesson select lists lessons by unit in the new order.

## 6. Audio list (`tools/collect-texts.js`)
Add the new data files to its load list (and lessons-zz-order.js after them, so review bodies exist), and record:
every `more[i][0]`, the RIGHT line of each mistake (`mistakes[i][1]`), each review row's example. NEVER the wrong line.
Review bodies are built into LESSONS, so if the existing lesson-body `.ex` sweep already picks up the review examples,
do not add them twice (a duplicate is harmless but check the count). Run it and report how many texts are new
(compare its count before and after), then `git checkout tools/texts.json tools/caps.json`.

## 7. Tests
`data_check_ext_extras.js`: every LESSON_EXTRA key is a lesson id; shape (mistakes 0 or 3 rows of 3 strings; more = 6
rows of 2; quiz = 6 rows `[q, 3 opts, idx 0..2, why]`), wrong ≠ right, no `more` sentence that appears inside the
lesson's body text, no quiz question equal to one of the lesson's own, no Tagalog string (right lines, more, review
examples) with an accented letter, a digit, or an ALL-CAPS word of 2+ letters; no stigmatizing words
(baliw, adik, sira-ulo, loko-loko); LESSON_UNITS ids all exist and no lesson is in two units; each unit has at most
10 lessons not counting its review; each LESSON_REVIEWS unit name is in LESSON_UNITS, rows name lessons of that unit,
quiz = 10+ valid rows; counts: `extras` (lessons with extras), `extraMistakes`, `extraMore`, `extraQuiz`, `units`,
`reviews`. A lesson WITHOUT extras is a WARN line (printed), not a failure, so the check passes while data is partial;
print the list of lessons still without extras. The main `data_check.js` prints `"lessons":N`: it will now include
reviews; that is expected (say the number).
`smoke_ext_extras.py`: ROUTES = the lessons list, a lesson with extras, a review lesson, the lesson handout for a
lesson with extras. Checks: units appear in LESSON_UNITS order and each review is last in its unit with a Review pill;
on a lesson with extras the wrong lines have no speaker button and are inside `<s>`, every right line and every more
example has exactly one speaker button; play "More practice" to its score and check `state.done.lessonsMore[id]` is
saved and `state.done.lessons[id]` is untouched by it; a lesson without extras (stub `LESSON_EXTRA` entry removed for
the test, then restored) shows no empty headings; a malformed entry (`LESSON_EXTRA[id] = 5`) does not break the page
(restore after); prev / next follow the new order across a unit boundary; the handout model
(`App.grammarHandoutBuild` / `App.grammarHandoutDoc`, see how smoke.py tests the lesson handout) contains the mistakes
and examples when the options are on and not when off, and the PDF builds; no horizontal overflow at 390 px and 125%
text on the lesson page with extras and on a review.

## Out of scope
Version numbers, changelog, README (give me the README row and files list in your reply). No commits.
