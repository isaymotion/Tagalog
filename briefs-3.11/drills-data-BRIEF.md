# Pass 5: grammar drill data (read /home/claude/work/RULES.md first)

Read /home/claude/tagalog/js/data/drills.js first (DRILL_CLOZE, DRILL_ERRORS, DRILL_TRANSLATE) to see the tone and to
avoid repeating its sentences. Also read the lessons `linkers`, `particles`, `enclitics`, `pronouns`, `questions`,
`negation`, `politeness` in /home/claude/tagalog/js/data/lessons.js: your items must agree with what they teach.

Write ONE file: /home/claude/work/p5/drills-grammar.js, in this shape:

```js
/* Grammar drills, second set (3.12.0). View: js/drills.js. Drafted by Claude, pending Dr. Navarro's review.
   DRILL_GAPS: { q (one ____), en, a, opts, full?, set, why }
   DRILL_CHANGE: { type, from, to, alt, wrong, en, why } */
window.DRILL_GAPS = [ … ];
window.DRILL_CHANGE = [ … ];
```

## DRILL_GAPS: 150 items, 30 per set
Each item: `{ q: 'Sentence with exactly one ____', en: 'English of the full sentence', a: 'right answer',
opts: ['3 or 4 options, including a'], set: '<set>', why: 'one short sentence saying why' }`.
The sentence with ____ replaced by `a` must be a complete natural sentence (it is recorded as audio). Every wrong
option must be clearly wrong for a careful speaker in THAT sentence (not merely less common). The English line must
make the intended meaning unambiguous. Vary which option position holds the right answer. No two items with the same q.

Sets:
- `lk` linker. The gap sits between two words and stands for what joins them. opts is always
  `['na', '-ng', '-g', 'nothing']`. Write q with the gap as a separate token: `'Maganda ____ bahay ito.'` and add
  `full: 'Magandang bahay ito.'` (the complete sentence as really written; required for every lk item). a = 'na' after a
  consonant other than n (mabait na bata), '-ng' after a vowel (magandang), '-g' after a word ending in n
  (mahinahon → mahinahong, ganoon → ganoong, karaniwan → karaniwang, akin → aking), 'nothing' where no
  linker belongs (e.g. after hindi, between ang and a noun, after may: "May ____ lagnat siya." → nothing; before ng).
  About 9 na, 9 -ng, 6 -g, 6 nothing. Include adjective + noun, number + noun (dalawang, apat na), gusto kong,
  puwede bang, relative clauses (ang babaeng nakaupo), and noun + na + clause.
- `pt` particle (the short adverb words): choose among na, pa, lang, naman, pala, kasi, nga, ba, din / rin, daw / raw,
  muna, yata, sana. opts = 4 particles per item (a + 3 that are wrong there). The English must force the choice
  ("already" → na, "still / yet" → pa, "only / just" → lang, "so it turns out" → pala, "first / for now" → muna,
  "I hope" → sana, "they say" → daw / raw, "also" → din / rin).
- `pn` pronoun form: choose among the three forms of the same pronoun. opts is one of: ['ako','ko','akin'],
  ['ka','mo','iyo'], ['siya','niya','kanya'], ['kami','namin','amin'], ['tayo','natin','atin'], ['kayo','ninyo','inyo'],
  ['sila','nila','kanila'] (5 items each for ako and siya sets, 4 each for the rest). Use frames such as
  "Sa ____ ang payong." (akin), "Gusto ____ ng kape." (ko), "Pagod na ____." (ako), "Para sa ____ ito." (iyo),
  object-focus verbs (ko form), actor-focus verbs (ako form). Do not use "kita".
- `qw` question word: sino, ano, saan, nasaan, kailan, bakit, paano, ilan, magkano, alin, kanino, gaano (with
  gaano katagal / gaano kadalas), kumusta. opts = 4 question words (capitalised if the gap starts the sentence,
  e.g. q: '____ po kayo nakatira?', a: 'Saan'). The rest of the sentence and the English must force one answer
  (saan + verb vs nasaan + noun; ilan vs magkano; sino vs kanino).
- `neg` negation: opts is always ['hindi', 'wala', 'huwag'] (capitalised in all three when the gap starts the
  sentence, e.g. ['Hindi','Wala','Huwag']). 10 each. Include hindi pa, wala pa, wala na, huwag muna, huwag kang,
  wala akong, hindi ko alam, "____ po akong gana kumain." (Wala).

## DRILL_CHANGE: 48 items, 12 per type
"Change the sentence": the learner sees `from` and an instruction, and must produce `to`.
`{ type, from: 'Tagalog sentence.', to: 'model answer.', alt: ['other fully correct answers', …], wrong: ['x','y','z'],
en: 'English of the answer (to)', why: 'one short sentence on what changed' }`
- `alt`: every other answer a careful speaker would accept (e.g. with the pronoun and particle in the other allowed
  place). May be empty.
- `wrong`: exactly 3 Tagalog sentences that look plausible but are wrong answers to the instruction: a real learner
  slip (particle in the wrong place, wrong negator, markers not changed, ka kept where kayo is needed). They may be
  ungrammatical; they are never recorded or spoken.
- Types:
  - `q`: make it a yes / no question with ba. "Umiinom ka ng gamot." → "Umiinom ka ba ng gamot?" (ka comes before ba;
    ba comes before siya, sila, kayo, niya …; with po: "po ba").
  - `neg`: make it negative. "Kumain siya." → "Hindi siya kumain." (pronouns move up after hindi); may → wala
    ("May lagnat siya." → "Wala siyang lagnat."); commands → huwag ("Uminom ka ng alak." → "Huwag kang uminom ng alak.");
    gusto → ayaw is accepted as alt next to "hindi gusto".
  - `po`: make it respectful for an older patient: add po in the right place and change ka / mo / iyo to
    kayo / ninyo / inyo. "Kumain ka na ba?" → "Kumain na po ba kayo?" Opo for Oo.
  - `asp`: change the time. The instruction is built from a field `to_time` on the item: add
    `time: 'past' | 'now' | 'future'` (the time of `to`). "Kumakain ako." (now) → time 'future' → "Kakain ako."
    Change time words too if `from` has one (kahapon → bukas); keep sentences free of time words unless they change.
    Use common verbs of all types (um, mag, ma, in, i, an).

Check every `to` and `alt` for enclitic order. Sentences 3 to 8 words. About a third ward or clinic.
