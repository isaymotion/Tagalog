# Pass 9 (ships as 3.15.0): example sentences for dictionary words

Read /home/claude/work/CODER.md first. Worktree: /home/claude/tl-p9 (branch wip-3.15.0). Tests: /home/claude/work/p9/tests
(write `data_check_ext_examples.js` and `smoke_ext_examples.py`). Port 8773. Pass folder: /home/claude/work/p9.
Reference (read only, sister app): /home/claude/isaymotion/japanese: `DICT_EX` in its `js/views.js` (word page, card
back) and `js/data/examples-1.js` header.

Another coder is changing `js/views.js` (the LESSON page only: `V.lessons`, `V.lesson`), `js/grammar-handout.js`, and
adding lesson data files in another worktree. Keep your edits to shared files short and self-contained, and do not
touch the lesson code or the handout.

## Data (being written while you work)
`/home/claude/work/p9/examples-{1..6}.js` (shape and rules: /home/claude/work/p9/BRIEF.md):
`window.DICT_EX = (window.DICT_EX || []).concat([[ 'tagalog|english', sentenceTl, sentenceEn, formInSentence? ], …])`,
about 355 entries a file, about 2,130 in all. Copy to `js/data/examples-{1..6}.js` whenever they exist (copy the newest
again before your final test run; your code and tests must pass with any subset). Load them in `index.html` after the
dictionary files and before `js/core.js`. Until a real file exists use a seed of 12 entries of your own in the same
shape, and delete the seed at the end.

## 1. Index (js/core.js, next to the dictionary index)
`App.exampleOf(entry)` → `{ tl, en, form }` or null, where entry is a dictionary entry (`{ id, tl, en, … }`); key =
`entry.tl + '|' + entry.en` exactly as in the dictionary line (check how `readDict` stores `tl` / `en`: if it trims or
changes them, key on the raw fields). Build the Map lazily on first use; first entry wins; ignore malformed rows.
`form` = row[3] or the headword (first alternative of "a / b"). Also `App.exampleCount()`.

## 2. Word page (`V.word` in js/views.js) and card back
- Word page: an "Example" block under the meaning: the sentence (class `tl`) with the headword form highlighted
  (`<mark class="exw">`, token-based style, case-insensitive whole-form match; if the form is not found, no highlight),
  a speaker button (`App.sayBtn(sentence)`), and the English under it.
- Flashcards (`V.flash` and wherever a dictionary card's back is drawn, see `App.cardFor` in core.js): on the BACK of
  a dictionary word card (ids `d<n>`), under the answer, the example sentence (small, class `tl`) with its English and
  a small speaker. Tagalog → English direction: the example shows only on the back, and the highlighted word is fine.
  English → Tagalog direction: also only on the back. Never on the front. Other card kinds (phrases `p:`, affix `af:`)
  are unchanged. Check the card at 390 px and 125% text: no overflow, the rating buttons stay reachable.
- A setting is not needed.

## 3. "In context" game on `#/vocab` (js/vocab.js)
New mode `context` "In context" (eyebrow "Vocabulary · 10 sentences", `src: true`): a sentence with the headword form
replaced by `____` (replace only the first whole-form match, keep the sentence's capital and punctuation; skip entries
whose form cannot be found), `sub` = the English of the sentence; options = the headword + 3 other headwords of the
SAME part of speech and, where enough exist, the same category (never one whose English equals the answer's, never a
word that is another form of the same root); Tagalog options (class tl; follow how `hear` and `opp` build questions);
`sayAfter` = the full sentence; `exp` = word = meaning; `cardId` = the dictionary id (a miss goes to the mistakes deck
like `hear`). Uses the word-source selector like `match` / `type` / `hear`; a source with fewer than 8 usable entries
falls back to all. Expose `App.vocabQs.context(n, cat)`; add it to the daily mix through `App.dailyExtra` the same way
the other four vocab parts are added; add the tile to `#/vocab`, the Practice page Vocabulary group, the search list
(one `Page` entry), and the Home quick-practice rotation if vocab modes are listed there one by one. Best score
`state.done.vocab['context:<source>']`.

## 4. Dictionary list and search
- No change to the dictionary list rows (keep them light).
- Search: do NOT index example sentences (it would flood results).
- Listening: nothing.

## 5. Audio list (tools/collect-texts.js)
Load the six files and record every example sentence (`x[1]`) with an arrow-function loop. Report how many texts are
new, then `git checkout tools/texts.json tools/caps.json`.

## 6. Tests
`data_check_ext_examples.js`: every key matches exactly one dictionary entry's `tl|en` (a key that matches nothing is
a failure: print it); no duplicate keys; sentence and English non-empty; the sentence contains the form
(case-insensitive); no accented letters, no digits; the only ALL-CAPS words (2+ letters) allowed in a sentence are the
entry's own headword when it is all caps in the dictionary; no stigmatizing words (baliw, adik, sira-ulo, loko-loko);
sentence length 3 to 16 words (outside = WARN, not failure); no `stigma`-category entry has an example. Entries
WITHOUT an example: WARN with the count and the first 20 (so the check passes with partial data). counts: `examples`,
`examplesMissing`. Also WARN (list, first 30) on sentences that appear twice.
`smoke_ext_examples.py`: ROUTES = a word page that has an example, `#/vocab`, `#/vocab/context`. Checks: the word
page shows the example with one speaker button and a highlighted form; a word without an example (temporarily remove
it from the index or pick a stigma word) shows no empty block; flashcard back of a dictionary card shows the example
and the front does not (drive the Flashcards page: find how smoke.py starts a deck); `App.vocabQs.context(10)` gives
10 questions with 4 distinct options, exactly one blank, the answer at the stated index, no option whose English
equals the answer's; play the game to its score and check the best score is saved; daily mix still builds 20 times
with exactly 10 well-formed questions (see smoke_ext_vocab.py for the existing check and keep `App.dailyExtra` intact);
no overflow at 390 px and 125% on the word page and the game.

## Out of scope
Version numbers, changelog, README (give me the README row and files list). No commits.
