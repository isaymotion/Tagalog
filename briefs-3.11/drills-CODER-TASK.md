# Pass 5 (will ship as 3.12.0): grammar drills

Read /home/claude/work/CODER.md first. Worktree: /home/claude/tl-p5. Tests: /home/claude/work/p5/tests
(ext files: `data_check_ext_drills2.js`, `smoke_ext_drills2.py`). Port 8771. Pass folder: /home/claude/work/p5.

## Data
A writer is producing `/home/claude/work/p5/drills-grammar.js` (shape and rules in /home/claude/work/p5/BRIEF.md:
`DRILL_GAPS` 150 items in sets lk / pt / pn / qw / neg, and `DRILL_CHANGE` 48 items in types q / neg / po / asp).
Copy it to `js/data/drills-grammar.js` in your worktree when it exists (check again before your final test run and
copy the newest version). Until then work with a small seed file of your own in the same shape (5 items per set).
Load it in `index.html` right after `js/data/drills.js`.

## 1. Drills page in groups
Give every `DRILLS` row a group `g`: 'Grammar', 'Vocabulary' or 'Listening and writing', and draw `#/drills` with one
heading (h2) per group. Existing rows: switch, markers, build, focus, errors = Grammar; roots, families = Vocabulary;
dictation, translate, stress = Listening and writing. Keep the buttons under the grid.

## 2. New drills (rows in DRILLS + RUN; all Grammar)
- `aspect` "Choose the aspect". No new data: generated from `VERB_SENTENCES` (js/data/verb-sentences.js; rows
  `[tl, en, form, aspect, flags, note]`) and the verb forms (`VERBS`, `Conj.conjugate`, `v.o` overrides; see
  `App.verbForms` if it exists, and how tools/collect-texts.js builds forms). For a sentence whose `form` occurs exactly
  once in `tl` as a whole word (case-insensitive) and whose aspect is inf / com / inc / con: blank the form
  (`____`, keep a capital first letter out of the gap text: if the form starts the sentence, show the options
  capitalised), options = the distinct forms of the SAME verb and affix in the four aspects (need at least 3 distinct;
  skip the sentence otherwise), sub = the English, `sayAfter` = the full sentence, exp = full sentence + a short
  aspect note ("Completed: it already happened." / "Ongoing or habitual." / "Not yet begun." / "Infinitive: after
  gusto, kailangan, puwede, or as a command."). Sets: `all`, `c` (clinical: flags contains 'c'). Skip a sentence when
  another option would give an equally natural sentence that the English does not rule out only if you can detect it
  mechanically (e.g. identical strings); otherwise trust the English line. Expose the pool size for tests.
- `linker` "Na, -ng or nothing?" = DRILL_GAPS set `lk`. The question shows q; options `na`, `-ng`, `-g`, and
  `nothing` shown as "no linker"; after answering show and speak `full`.
- `particle` "Choose the small word" = set `pt`. `pronoun` "Ako, ko or akin?" = set `pn`.
  `qword` "Choose the question word" = set `qw`. `negation` "Hindi, wala or huwag?" = set `neg`.
  One generator `gapQs(set, n)` for all five: opts from the item, `sayAfter` and exp use `full` or q with the gap
  filled. These five rows have no set selector (opts: []); best score key `<id>:all`.
- `change` "Change the sentence" = DRILL_CHANGE. Selector: All kinds / Make it a question (q) / Make it negative (neg)
  / Make it respectful (po) / Change the time (asp) / Type the answer (type). Choice sets use `App.runQuiz`
  (q = `from`, sub = the instruction + ' · ' + nothing else that reveals the answer; options `to` + the 3 `wrong`;
  `sayAfter` = `to`; exp = `to` + English + why). The typed set uses `runTyped` with `exact: true`, answers =
  `[to].concat(alt)`, prompt = `from` (Tagalog), sub = instruction. Instructions: q 'Make it a yes or no question.',
  neg 'Make it negative.', po 'Make it respectful, as to an older patient.', asp by `time`: past 'Say it as already
  done.', now 'Say it as happening now.', future 'Say it as still to come.' Wrong sentences are never spoken.
- Give each new row `lessons: [...]` with existing lesson ids (aspect: aspect, focus; linker: linkers; particle:
  particles, enclitics; pronoun: pronouns; qword: questions; negation: negation; change: questions, negation,
  politeness, aspect).
- Add generators to `App.drillQs` for tests (aspect, gaps, change).

## 3. Daily mix
`dailyQs()` must still return exactly 10 questions: 2 vocabulary + 8 questions from 8 DIFFERENT parts chosen at random
from all the other parts (the 8 old ones plus aspect, linker, particle, pronoun, question word, negation, change the
sentence). Keep the tag prefix on `sub`. Update the page text ("one question from each of eight drills").
Also allow other files to add parts: read `App.dailyExtra` (an array of `[tag, fn]`, may be undefined) at call time
and include those parts in the random choice.

## 4. Drills handout (printable)
New topic `drills` in `js/grammar-handout.js`, built exactly like the existing topics there (read how `listening`,
`reading` and `lesson` are done: settings sub-key in `SUBKEYS`, preview HTML + pdfmake doc, `App.grammarHandoutBuild`
model for tests, paper sizes, "Prepared for" line, attribution-only footer). Route `#/drills/handout` placed BEFORE
`/drills/<id>`; settings in `state.settings.ghandout.drills`. Parts (each can be switched on or off, default all on
except dictation):
  A. Fill the gap: N items sampled across markers (DRILL_CLOZE) and DRILL_GAPS, each printed with its options in
     brackets under the line, e.g. "Natutulog ____ pasyente.  (ang · ng · sa)" plus the English.
  B. Find the mistake (DRILL_ERRORS): the wrong sentence, English, a ruled line to write the corrected sentence.
  C. Switch the focus (DRILL_FOCUS): the actor-focus sentence + English + ruled line for the object-focus sentence.
  D. Change the sentence (DRILL_CHANGE): `from` + instruction + ruled line.
  E. Say it in Tagalog (DRILL_TRANSLATE): English + ruled line.
  F. Dictation (DRILL_DICTATION): numbered blank lines for the learner; the lines to read aloud go in the key
     ("A partner reads each line twice.").
  Answer key on its own page: answers for every part (for E the model answer; for C the object-focus sentence).
Options: items per part (8 / 12 / 16), English show / hide, paper (same choices as the other topics), a "New set"
button that changes the sample; sampling must be stable for a given seed so preview, print and PDF show the same
items (see `mixQ(qs, seed)` and how other topics sample). Print handout buttons: on `#/drills` and on each drill page
that has a part (markers, the five gap drills, errors, focus, change, translate, dictation). Add it to search.
Smoke must build the PDF for A4 and A5 and print its page count like the others do (see how smoke.py saves PDFs for
`listening_a4`; do the same inside your ext with pdfmake loaded the same way) and check the model
(`App.grammarHandoutBuild({topic:'drills', …})`): every part has the requested number of items, the key has an
answer for each, the same seed gives the same items.

## 5. Wiring
Practice page tiles for the seven new drills and the handout; Home quick-practice rotation (add aspect, particle,
change); search entries (each new drill by title, the handout); `BLURB.drills` text; `tools/collect-texts.js`
(DRILL_GAPS: `full` or the filled q; DRILL_CHANGE: `from`, `to` and every `alt`; never `wrong`); `sw.js` FILES.

## 6. Tests to write
data_check ext: counts `gaps`, `change`, `aspectPool` (compute the aspect pool the same way the drill does, or load
js/drills.js if that is practical; at least assert that 300+ sentences qualify); DRILL_GAPS: one `____`, `a` in opts,
no duplicate opts or q, lk has `full` and the fixed options and `full` really contains the linker implied by `a`
(for 'na': " na "; for '-ng' / '-g': the first word + ng / g; for 'nothing': the two words adjacent), neg has the
three negators, 25+ per set when the writer's file is in (warn, do not fail, on a seed file: detect by total < 100);
DRILL_CHANGE: 3 wrong, none equal to `to` or an `alt` after lowercasing and stripping punctuation, asp has `time`;
no ALL-CAPS word and no accented letter in any Tagalog field; every lesson id in the new rows exists.
smoke ext: ROUTES for the new pages; run each new drill to its score screen and check the score is saved; generator
checks in the page (aspect: 4 or 3 distinct options, the answer is among them, the filled sentence equals the
original sentence; gaps: answer among options; change: 4 distinct options); the typed change set: type the model
answer for every item (100%), and check a `wrong` sentence is rejected; 20 daily mixes of exactly 10 well-formed
questions with 8 different non-vocabulary tags; the Drills page shows three group headings; handout checks above.
