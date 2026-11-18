# Pass 6: vocabulary drill data (read /home/claude/work/RULES.md first)

The app's dictionary is in /home/claude/tagalog/js/data/dict-core.js, dict-everyday.js, dict-clinical.js, dict-more.js
and dict-themes.js (lines `tagalog|english|pos|category|root|note`). Prefer words that are in the dictionary (grep to
check); a word that is not there is allowed when it is common. Also read /home/claude/tagalog/js/data/word-sets.js so
you do not repeat its ladders and synonym sets.

Write ONE file: /home/claude/work/p6/vocab-sets.js

```js
/* Vocabulary drill sets (3.13.0). View: js/vocab.js. Drafted by Claude, pending Dr. Navarro's review.
   WORD_PAIRS: { id, type:'opp'|'col', a, ea, b, eb, en? }   ids are permanent: append only
   WORD_ODD: { id, w:[4 Tagalog words], odd: index, cat, why } */
window.WORD_PAIRS = [ … ];
window.WORD_ODD = [ … ];
```

## WORD_PAIRS: 150 items
- 70 opposites, ids `wp-o-001` … : `{ id:'wp-o-001', type:'opp', a:'malaki', ea:'big', b:'maliit', eb:'small' }`.
  True, everyday opposites that every speaker agrees on: adjectives (mainit / malamig, mabigat / magaan, malinis /
  marumi, mahal / mura, masaya / malungkot, gising / tulog), verbs in the same form (pumasok / lumabas, umakyat /
  bumaba, bumili / magbenta … write the pair in matching aspect: infinitive), nouns (araw / gabi; only clean
  opposites), adverbs and position words (loob / labas, itaas / ibaba, harap / likod). One word each side. About 15 of the 70 useful on the ward (kalmado / balisa, gumaling /
  lumala, tumaas / bumaba). Each a and each b appears only once in the
  whole opposites list, and ea / eb are one to three English words.
- 80 collocations ("what goes with it"), ids `wp-c-001` … :
  `{ id:'wp-c-001', type:'col', a:'uminom ng', ea:'to take (drink)', b:'gamot', eb:'medicine', en:'to take medicine' }`.
  a = a verb (infinitive) with its marker, b = the noun that goes with it; a + ' ' + b is a natural fixed expression
  that is recorded as audio: magsipilyo ng ngipin, maghugas ng kamay, magsuklay ng buhok, magwalis ng sahig, maglaba ng damit, magsampay ng
  damit, magtimpla ng kape, magbayad ng pamasahe, sumakay ng dyip, pumila sa botika, kumuha ng dugo, magpa-check-up sa doktor, Each `a` verb may appear at most twice in the list and each `b` noun only once, because the drill shows one
  verb and asks which noun goes with it among nouns from other items; so no noun in the list may be a natural object
  of another item's verb in a way that makes two options right. Check this carefully: avoid generic verbs (kumuha,
  bumili, gumawa, magdala) except with a noun that only they take, and avoid generic nouns. About 25 of the 80 from
  the ward or clinic (magpatingin sa doktor, magpakuha ng dugo, magpa-ineksyon, uminom ng gamot, magpalit ng benda).

## WORD_ODD: 50 items, ids `wo-001` …
"Which word does not belong?" `{ id:'wo-001', w:['aso','pusa','manok','mesa'], odd: 3, cat:'animals',
why:'Aso, pusa and manok are animals; mesa is a table.' }`.
- Four single common Tagalog words (noun, verb or adjective, all the same part of speech and form). Three share an
  obvious category (animals, fruit, body parts, family, feelings, kitchen things, weather, vehicles, places in a
  hospital, times of day, colours, verbs of movement, things you wear …); the fourth plainly does not.
- The odd word must not belong to the category under any reasonable reading, and must not be odd for a second reason
  the three also split on. Vary the position of `odd` (0 to 3) evenly. `cat` = short English label of the shared
  category. `why` names the category and glosses all four words in English.
- Difficulty: 20 easy (A1 words), 20 medium (A2), 10 harder where the category is finer (three feelings of sadness
  and one of anger; three verbs done with the hands and one with the feet). About 12 of the 50 with health or ward words.
- No word appears in more than two items.
