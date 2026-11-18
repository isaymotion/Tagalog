# Pass 10 (3.17.0): gap sentences by lesson. Read /home/claude/work/RULES.md first.

Each lesson gets a "Practise this lesson" set of 10 fill-the-gap sentences on exactly what the lesson teaches. For each
lesson in your list read its body, its quiz and its extras (so you repeat NONE of their sentences): lesson bodies are in
the files named in your task; extras in /home/claude/tagalog/js/data/lesson-extra-*.js (or the NEW_EXTRA of the same file
for new lessons).

## Output: one JS file (path in your task)
```js
/* Gap sentences by lesson, part N (3.17.0). Draft for review. { q (exactly one ____), en, a, opts (3 or 4, including a), why } */
window.LESSON_GAPS = Object.assign(window.LESSON_GAPS || {}, {
  'markers': [
    { q: 'Bumili ako ____ gamot sa botika.', en: 'I bought medicine at the pharmacy.', a: 'ng', opts: ['ang', 'ng', 'sa'], why: 'The thing bought, with an actor-focus verb, takes ng.' },
    … exactly 10
  ],
  …
});
```
Rules
- The sentence with ____ replaced by `a` must be a complete, natural, correct Tagalog sentence (it is recorded as audio
  and played after the answer). If the answer attaches to a word (a prefix or a linker), write the gap as the WHOLE word
  (q: '____ ako sa palengke bukas.', a: 'Pupunta', opts: ['Pupunta', 'Pumunta', 'Pumupunta']), never half a word.
- `en` is the English of the full sentence and must make the intended answer the only one that fits. Every wrong
  option must be clearly wrong IN THAT SENTENCE for a careful speaker given the English (not merely less common, and
  not a real sentence with the same meaning).
- Options: 3 or 4 short forms of the same kind (three markers, three verb forms, three particles…). Vary the position
  of the right answer across the 10 items. Capitalize all options when the gap starts the sentence.
- Test the lesson's own point, at the lesson's level, covering its different sub-points across the 10 items. About 4
  of 10 from the ward, clinic or a family visit; the rest everyday life.
- Culture and picture lessons: the gap is the key word or phrase the lesson teaches (a kinship term, a value word, a
  position word, a body part in a "masakit" sentence), with options from the same family of words.
- `pronounce`: gaps test spelling of sounds (ng / mga / nang vs ng is NOT pronunciation; use words like ngipin, ngayon,
  mga, paa, gabi where the options are misspellings a learner would write, e.g. ['ngipin', 'nipin', 'ngeepin']).
- No two items in the whole file with the same q. RULES.md applies to every Tagalog string (no ALL CAPS, acronyms,
  accents, digits, brands, stigmatizing words; invented first names only).
- Check: `node -e "global.window=global; require('<file>'); const G=window.LESSON_GAPS; for (const k in G) { const bad=G[k].filter(x=>(x.q.match(/____/g)||[]).length!==1||!x.opts.includes(x.a)||x.opts.length<3||new Set(x.opts).size!==x.opts.length); console.log(k, G[k].length, bad.length?'BAD '+JSON.stringify(bad):'ok'); }"`
  Every lesson must print 10 and ok. Save after every two lessons.

## Final reply
File path, a line per lesson with its count, and a short list of items where a second answer might be defensible or
where you were less than sure.
