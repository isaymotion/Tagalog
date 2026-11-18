# Pass 10 (ships as 3.17.0): Practise this lesson (gaps by lesson) and Listen and reply

Read /home/claude/work/CODER.md first. Worktree: /home/claude/tl-p10 (branch wip-3.17.0). Tests: /home/claude/work/p10/tests
(write `data_check_ext_p10.js` and `smoke_ext_p10.py`). Port 8777. Pass folder: /home/claude/work/p10.
Reference (read only, sister app): /home/claude/isaymotion/japanese `js/reply.js` (Listen and reply) and how its
lesson page links to practice (`App.lessonLinks`).
The main session has ALREADY added to this worktree, uncommitted: 640 dictionary words, their examples
(`js/data/examples-7.js`, `-8.js`), more find-the-mistake and change-the-sentence items (`js/data/drills-more.js`), six
readings and six dialogues. Do not touch those data files. All data for YOUR part is final and already in the worktree:
`js/data/lesson-gaps-1.js` … `-4.js` and `js/data/listen-reply.js` (not yet loaded by index.html: you add the tags).

## A. Practise this lesson
Data: `window.LESSON_GAPS = { '<lesson id>': [ { q (exactly one ____), en, a, opts (3 or 4, including a), why, voice? } ×10 ] }`
for 76 lessons (no review lessons). `voice` = the full sentence as the voice should say it (only on a few items with
apostrophe forms). Load the four files after the lesson-extra files and before `lessons-zz-order.js`.
- New drill in `js/drills.js`: a DRILLS row `lessongaps` in group 'Grammar', title "Practise a lesson", and a run
  function. Route `#/drills/lessongaps?l=<lesson id>`: without `l` (or with an unknown id) the page shows a lesson
  picker (a select grouped by unit in `LESSON_UNITS` order, listing only lessons that have gaps, each with its best
  score if any) and a Start button; with `l` it shows the lesson title as the heading context, a link back to the
  lesson, and starts on Start. The quiz = that lesson's 10 items in random order through `App.runQuiz`, built like the
  existing gap drills (`gapQs` in drills.js: read it and reuse what you can): q with the blank, `sub` = en, options
  shuffled as the existing gap drills do, Tagalog options class tl, `sayAfter` = `voice` or the sentence with the blank
  filled, `exp` = why. Best score `state.done.lessonGaps[id]` (create the object), `App.activity(10)`. After the
  score: "Try again", "Back to the lesson", and "Next lesson's practice" (next lesson in order that has gaps).
- Lesson page: push a function into `App.lessonLinks` (from drills.js) that returns
  `<a class="btn" href="#/drills/lessongaps?l=<id>">Practise this lesson</a>` (with the best score as a small pill when
  there is one) for lessons with gaps and '' otherwise. Review lessons: return a link "Practise this unit" to
  `#/drills/lessongaps?u=<review lesson id>` that runs 10 items drawn at random from all lessons of that unit (score
  `state.done.lessonGaps['unit:<review id>']`).
- Lessons list (`V.lessons`): no change. Progress page: one row "Lesson practice: X of Y lessons" via the
  `App.progressExtra` chain. Practice page (`V.practice` in app.js): one tile. Search: one `Page` entry.
- Daily mix: add ONE part through `App.dailyExtra` ("Lesson practice": one random gap item, preferring lessons the
  learner has finished, i.e. with an entry in `state.done.lessons`; any lesson if none).
- Drills handout (`js/grammar-handout.js`, topic `drills`): no change.
- `tools/collect-texts.js`: load the four files; record for every item `voice` if present, else q with ____ replaced
  by a (arrow-function loop).

## B. Listen and reply
Data: `window.LISTEN_REPLY = [ { id: 'lr-001', lv: 'A1'|'A2'|'B1'|'B2', clin: bool, who, say, en, opts: [{ tl, en } ×4], a, why } ]`
(72 items). Load `js/data/listen-reply.js` near the listening data.
- New view file `js/reply.js`, new top-level page key `reply`, route `#/reply`, title "Listen and reply". Port the
  design of Hanashimashō's reply.js to this app's conventions: segs Everyday / Clinical / All
  (`state.settings.replyKind`) and level All / A1 / A2 / B1 / B2 (`state.settings.replyLv`, only levels that have
  items in that kind); a Start button; 10 items a round. Each question: the line `say` is PLAYED when the question
  opens and from a "Play again" button and its text stays hidden until answered (use `App.runQuiz` with `hideQ` if it
  can show four Tagalog options each with its own small speaker; read how `js/point-listen.js` and the stress `ear`
  set use `hideQ`; if runQuiz cannot do per-option speakers, write a small runner in reply.js, keeping the look of
  runQuiz: `.opt` buttons, `.feedback`, `[data-act=next]`), `who` shown as a muted line. Options: the four Tagalog
  replies in shuffled order. After answering: `say` with a speaker and its English, each option's English (the right
  one marked), and `why`. Score: `state.done.reply['<everyday|clinical|all>:<lv|all>']` = best %; missed ids in
  `state.done.reply.miss` (newest last, max 200; a right answer removes the id) and a "Practise my mistakes" button
  when there are 3 or more. `App.activity(10)`.
- API for tests and the daily mix: `App.replyItems()`, `App.replyQs(kind, lv, n)` → runQuiz-style question objects
  (so one can join the daily mix through `App.dailyExtra`: add a "Listen and reply" part).
- Wiring: `routes`, `NAV` (group Learn, next to Listening, an existing icon), `TITLES`, `BLURB`, `MORE_KEYS`, the search
  `Page` list (the page only; never the item texts), a Practice tile, Home quick-practice rotation, a Progress row via
  the `App.progressExtra` chain, `data/strings.js` nav string if NAV titles come from it (see how `nav.vocab` was
  added; give an English string and a Tagalog draft "Makinig at sumagot").
- `tools/collect-texts.js`: record every `say` and every `opts[].tl`.
- Draft notice at the bottom of the page like other drafted modules.

## Tests
`data_check_ext_p10.js`: LESSON_GAPS: every key is a non-review lesson id, 10 items each, exactly one ____ in q, a in
opts, 3 or 4 distinct opts, no duplicate q in the whole set, filled sentence (and `voice`) has no accent, digit or
ALL-CAPS word of 2+ letters, `voice` has no apostrophe; WARN (list) lessons without gaps. LISTEN_REPLY: ids unique and
`lr-NNN`, lv valid, 4 opts with tl and en, a in 0..3, no accent / digit / ALL-CAPS in say and opts.tl, no stigmatizing
words (baliw, adik, sira-ulo, loko-loko), at least 30 everyday and 30 clinical, every level present in both kinds.
counts: `lessonGapLessons`, `lessonGaps`, `listenReply`.
`smoke_ext_p10.py`: ROUTES = `#/drills/lessongaps`, `#/drills/lessongaps?l=markers`, `#/reply`, a lesson page. Checks:
the lesson page of a lesson with gaps shows "Practise this lesson" and a review shows "Practise this unit"; the picker
lists units in order; play a lesson's practice to the score (always choosing the right option: find it from the data)
= 100% saved in `state.done.lessonGaps`, and no audio is played before answering (stub `App.speak` / `App.speakAsync`
and check nothing containing the answer was spoken before the click); the unit practice builds 10 items from that
unit only; `App.replyQs('clinical','all',10)` gives 10 questions of 4 distinct options from clinical items only and
the answer index points at the right text; play a Listen and reply round to the score with the text of `say` not in
the page before answering and present after; a wrong answer puts the id in `miss`, a right one removes it; kind and
level segs filter and are remembered; daily mix still builds 20 times with exactly 10 well-formed questions; search
finds both pages; no overflow at 390 px and 125% on both pages before and after answering.
The existing ext tests must still pass (smoke_ext_vocab.py counts tiles on the Practice page and on `#/vocab`: if your
new Practice tiles change a count it checks, update that number in your copy and tell me).

## Out of scope
Version numbers, changelog, README (give me the README rows and files list). No commits.
