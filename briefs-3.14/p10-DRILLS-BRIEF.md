# Pass 10 (3.17.0): more "find the mistake" and "change the sentence" items. Read /home/claude/work/RULES.md first.

Read, in /home/claude/tagalog: `DRILL_ERRORS` in js/data/drills.js (41 items) and `DRILL_CHANGE` in
js/data/drills-grammar.js (48 items), and the header comments of both files. Then read the section "DRILL_CHANGE" of
/home/claude/devtools/briefs-3.11/drills-data-BRIEF.md (types q, neg, po, asp and their rules: they apply unchanged).
Write MORE items of exactly the same shapes, repeating none of the existing sentences.

## Output: /home/claude/work/p10/drills-more.js
```js
/* More drill items (3.17.0). Draft for review. Appended to DRILL_ERRORS and DRILL_CHANGE by js/data/drills-more.js. */
window.MORE_ERRORS = [ { bad, i: [word positions, 0-based, of the wrong word(s) in bad split on spaces], fix, en, set: 'm'|'o'|'v', why }, … 80 items ];
window.MORE_CHANGE = [ { type: 'q'|'neg'|'po'|'asp', from, to, alt: [], wrong: [3], en, why, time? }, … 72 items, 18 per type ];
```
MORE_ERRORS: 80 items: 28 in set `m` (markers and pronouns: ang / ng / sa, si / ni / kay, ako / ko / akin forms),
26 in `o` (small words and linkers: enclitic order, missing or wrong linker na / -ng, hindi / wala / huwag, may /
mayroon), 26 in `v` (verb forms: aspect against a time word, wrong focus for the markers, mag- vs -um- on a fixed
verb, missing reduplication, maka- / nakaka-).
- `bad` is a sentence with exactly ONE error (one wrong word, or two adjacent words in the wrong order: then `i` lists
  both positions). `fix` is the same sentence corrected with the smallest change. `i` must point at the word(s) a
  learner should tap: count words by splitting `bad` on single spaces, starting at 0.
- THE HARD RULE: `bad` must be wrong for EVERY careful native speaker, not merely informal, casual or regional. Do
  NOT use as errors: dropped linkers after gusto / puwede / kailangan ("gusto ko kumain"), "pumunta ng ospital",
  "nagkain", "kakagising", loose placement of po, "Bakit itinigil mo", ng / nang spelling, din / rin or daw / raw
  choice, "po din". A focus mismatch has two possible fixes, so make the rest of the sentence force one (in
  "Kumain ko ng mangga" the ng shows the verb is right and ko is wrong). `bad` must not be a real sentence with
  another meaning.
- `fix` is recorded as audio; `bad` never is. Sentences of 3 to 9 words; about a third ward or clinic.
MORE_CHANGE: follow the 3.11 brief's rules. `wrong` = exactly 3 plausible wrong answers, each wrong for a careful
speaker AND not a real sentence that answers the instruction (see the pitfalls: make a command unmistakable with muna
or po before asking for its negative). `asp` items carry `time`.

Check the file loads with node, print the counts per set and per type, and verify every `i` is in range and that
`bad` and `fix` differ in at least one word at those positions. Save early.

## Final reply
File path, counts, and the items you were least sure are wrong for every speaker.
