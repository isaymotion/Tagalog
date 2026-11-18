# Pass 6 (will ship as 3.13.0): vocabulary practice

Read /home/claude/work/CODER.md first. Worktree: /home/claude/tl-p6. Tests: /home/claude/work/p6/tests
(ext files: `data_check_ext_vocab.js`, `smoke_ext_vocab.py`). Port 8772. Pass folder: /home/claude/work/p6.

Another coder is changing `js/drills.js`, `js/data/drills*.js` and `js/grammar-handout.js` in a different worktree at
the same time. To keep the merge small: put ALL your code in NEW files (`js/vocab.js`, `js/data/vocab-sets.js`) and
keep your edits to shared files (`index.html`, `sw.js`, `js/app.js`, `js/core.js`, `js/views.js`,
`tools/collect-texts.js`, `css/style.css`) to short, self-contained additions. Do NOT edit `js/drills.js`.

## Data
A writer is producing `/home/claude/work/p6/vocab-sets.js` (shape and rules in /home/claude/work/p6/BRIEF.md:
`WORD_PAIRS` 70 opposites + 80 collocations, `WORD_ODD` 50). Copy it to `js/data/vocab-sets.js` when it exists (check
again before your final test run and copy the newest version). Until then work with a small seed file of your own in
the same shape (8 opposites, 8 collocations, 6 odd). Load it in `index.html` after `js/data/word-sets.js`.

## The page: `#/vocab` "Vocabulary practice" (new top-level page, key `vocab`)
One view file `js/vocab.js`, loaded after `js/words.js`. Layout: h1, one line of intro, then a grid of tiles, one per
mode, each with its best score; `#/vocab/<mode>` runs a mode (route key `vocab` for both; `PARENT` / breadcrumb so the
mode page shows Vocabulary practice as its parent). A mode page has: the word-source selector where it applies, a Start
button, the game, and after the score "Try again" and "All vocabulary practice".

Word source (for match, type, hear): a select with "My mistakes and cards due" (dictionary ids in `state.mistakes`
and due `state.srs`; shown only when there are 5 or more), "All words", then every dictionary category from `App.CATS`
with its label, EXCEPT `stigma`. Remember the last choice in `state.settings.vocabCat`. Only one-word entries or
entries of up to three words are used; an entry is usable for a game only if its English gloss is 40 characters or
fewer. Never draw wrong answers whose English equals the right answer's English.

Modes:
1. `match` "Match the pairs". A round shows 5 Tagalog words in one column and their 5 English meanings, shuffled, in
   the other (two columns side by side that fit a 390 px phone at 125% text: let long text wrap inside the tile). Tap
   one tile, then its partner in the other column: right = both turn green and lock (and the Tagalog word is spoken);
   wrong = both flash red briefly and a miss is counted. Three rounds a game (15 pairs). Score % =
   pairs / (pairs + misses). Sources: the word-source selector above PLUS "Opposites" (WORD_PAIRS type opp: column
   one = a, column two = b, both Tagalog, with the English small under each word). Within a round no two words may
   share an English gloss. Keyboard: tiles are buttons.
2. `opp` "Opposites": `App.runQuiz`, 10 questions; q = one side of an opposite pair (random side), sub = its English +
   ' · What is the opposite?', options = the partner + 3 words from OTHER pairs (same side type), `say` = the word,
   exp = 'a (ea) ↔ b (eb)'.
3. `col` "What goes with it?": 10 questions; q = `a + ' ____'` (e.g. "uminom ng ____"), sub = the item's `en`,
   options = `b` + 3 `b` nouns from items with a DIFFERENT `a`, `sayAfter` = a + ' ' + b, exp = the full expression
   and English.
4. `odd` "Odd one out": 10 questions from WORD_ODD; q = 'Which word does not belong?', options = the four words in a
   shuffled order (careful: keep track of the right one), exp = `why`. Tagalog options (class tl).
5. `type` "Type the word": English meaning (+ part of speech label if the app has one for display) → type the Tagalog
   word. Uses one-word dictionary entries from the chosen source. Accept: the word itself; any other dictionary
   headword with the same English gloss; compared lower-case, without accents, hyphens and punctuation; plus the same
   spelling tolerance `js/pictures.js` uses for "Label it" (a letter-by-letter similarity of 85 or more on words of 6+
   letters: reuse its helper if it is exposed, or expose it as `App.letterSimilarity` from pictures.js with a
   one-line change). After checking: show the word with a speaker button, and "Almost: check the spelling" when it
   passed only by tolerance. 10 words; Enter submits; an empty answer is ignored. Wrong words go to the mistakes deck
   the way other quizzes do (`cardId` / `App.recordAnswer`: read how runQuiz records a miss for a card and do the same).
6. `hear` "Hear the word": `App.runQuiz` with `hideQ` (see how js/drills.js stress `ear` set and js/point-listen.js use
   it): the word is played, the learner picks the meaning among 4 from the same category; the word is shown after
   answering. `cardId` = the dictionary id.
7. `affix` "Guess the meaning from the parts": from `AFFIX_ITEMS` (js/data/affixes.js: `{ w, r, seg, t, pos, en }`) and
   `AFFIX_LIST` (affix meanings). q = the word, sub = 'Root: <r> · ' + the affix pieces as the Panlapi page shows them
   (reuse `App.affixPieces` or the seg notation rendered plainly, e.g. "pa- + tulog + -in") + ' · What does it mean?';
   options = its `en` + 3 `en` from other items, preferring items with the SAME root (most confusable), then the same
   affix type; exp = word = en, and one line naming what the affix adds when AFFIX_LIST has it. `say` = the word.
   Do NOT gloss the root from the dictionary (roots are often homographs).
Scores: `state.done.vocab['<mode>:<source or all>']` = best %. `App.activity(10)` per finished game.

Expose for tests and for the daily mix: `App.vocabQs = { opp(n), col(n), odd(n), hear(n, cat), affix(n) }`, each
returning runQuiz question objects, and `App.vocabPool(cat)`.

## Category progress
On `#/vocab` under the tiles, a "Your words by topic" list: one row per dictionary category (label, number of words,
how many are in the learner's flashcard deck = have a `state.srs` entry, how many are known = srs `r >= 3`, and a thin
progress bar of known / total), sorted by the app's category order, each row linking to the flashcard deck or
dictionary filter for that category (use whatever route the Dictionary / Flashcards pages already support for a
category; if none exists link to `#/vocab/match` with that source preselected via `?cat=<key>`; every mode page must
accept `?cat=`). Also add one row to the Progress page through `App.progressExtra`: js/pictures.js already assigns
`App.progressExtra`, so CHAIN it (keep the previous function and concatenate its rows) from vocab.js.

## Wiring
`routes` (`/vocab`, `/vocab/<mode>`), `NAV` (group nav.drill, title 'Vocabulary practice', pick an existing icon),
`TITLES`, `BLURB`, `MORE_KEYS`, search (`Page` entry for the page and one per mode), Practice page: a "Vocabulary"
group of tiles or tiles in the Language group for the seven modes, Home quick-practice rotation (match, opp, hear),
`tools/collect-texts.js` (load the data file; record each opposite's `a` and `b`, and `a + ' ' + b` for each
collocation; nothing for WORD_ODD), `sw.js` FILES, `data/strings.js` if NAV titles need a string key (follow how
`nav.*` strings are done for other pages, English and the Tagalog draft).
Daily mix: do not edit drills.js. At the end of vocab.js add
`App.dailyExtra = (App.dailyExtra || []).concat([['Opposites', () => App.vocabQs.opp(1)], ['What goes with it', () => App.vocabQs.col(1)], ['Odd one out', () => App.vocabQs.odd(1)], ['Word parts', () => App.vocabQs.affix(1)]]);`
(the other coder makes the daily mix read `App.dailyExtra`).

## Tests to write
data_check ext: counts `pairsOpp`, `pairsCol`, `oddOne`; unique ids; opposites: no word twice; collocations: each `b`
once, each `a` at most twice; WORD_ODD: 4 distinct words, `odd` in 0..3, `why` present; no ALL-CAPS word, no accented
letter in Tagalog fields; thresholds 60 / 70 / 40 when the writer's file is in (warn only on a seed file: detect by
size). smoke ext: ROUTES (`#/vocab` and every mode); every quiz mode played to the score and the score saved;
generator checks in the page (4 distinct options, the answer present, wrong answers never equal to the right gloss,
odd-one-out keeps the right word after shuffling: verify by checking the marked answer against WORD_ODD); match: play
a full game by reading the pairs from the DOM (use data attributes you add for this) = 100%, and one deliberate
mismatch lowers the score; type: type the right word for every item = 100%, a wrong word is marked wrong, a 1-letter
slip on a long word passes as "Almost"; category progress list renders a row per category; `?cat=` preselects;
Progress page has the new row and still has the pictures rows; search finds 'opposites'.
