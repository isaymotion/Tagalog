# Pass 9 (ships as 3.15.0): one example sentence for every dictionary word. Read /home/claude/work/RULES.md first.

Your input file (path in your task) has one dictionary entry per line: `tagalog|english|pos|category|root|note`
(root and note may be missing). Write ONE example sentence for EVERY line, in the same order.

## Output: a JS file (path in your task), exactly this shape
```js
/* Example sentences for dictionary words, part N (3.15.0). Draft for review. Key = 'tagalog|english' of the dictionary line, exactly. */
window.DICT_EX = (window.DICT_EX || []).concat([
  ['gamot|medicine', 'Ininom ko na ang gamot kaninang umaga.', 'I already took the medicine this morning.'],
  ['matulog|to sleep', 'Gusto ko nang matulog.', 'I want to sleep now.'],
  ['pagod|tired', 'Pagod na pagod ako pagkatapos ng duty.', 'I was very tired after my shift.', 'Pagod'],
  …
]);
```
- Item 1: the key, copied EXACTLY from the first two fields of the input line (same spelling, punctuation, spaces).
- Item 2: one natural Tagalog sentence, 4 to 12 words, that contains the headword EXACTLY as spelled in the
  dictionary (same affixes, same aspect; capital first letter is fine at the start of a sentence), used in the meaning
  given by the English field. If the headword has alternatives ("a / b") use the first. If the headword is a phrase,
  the whole phrase appears. Only when the exact form truly cannot stand in a natural sentence (a bare root that is
  never said alone) use the closest natural form and give that form as it appears in the sentence as a 4th item.
- Item 3: natural English translation of the sentence.
- Item 4 (optional): only when the form in the sentence differs from the headword (see above), or when the headword
  occurs twice in the sentence (then give the occurrence that carries the meaning).
- The sentence must make the meaning guessable from context (it is also used as a fill-the-gap question where the
  headword is blanked and the learner picks it among four words of the same category). So avoid sentences where any
  word of the category would fit ("May ____ ako."): add a detail that points to THIS word.
- Level: keep the other words simple (A1 to A2) unless the headword is advanced. Categories `health`, `mind`, `risk`,
  `substance`, `clinical`, `emotions`, `beliefs`: use a ward, clinic or family-visit sentence, as a clinician, nurse,
  patient or relative would really say it; other categories: everyday life. Mix speakers (I, you, he/she, we, names).
- Risk words: neutral clinical sentences only (an assessment question or a plain report). Nothing that encourages
  self-harm, no methods beyond the headword itself, no dosing advice.
- An entry whose headword is an acronym in capitals in the dictionary (for example a hospital department) may appear in
  capitals in its own sentence; no other all-caps words, no other acronyms. No digits: numbers as words. No accented
  letters. No brand names. Invented first names only. No stigmatizing words.
- Do not write the same sentence frame again and again: vary structure (statements, questions, requests, negatives).

Check before you finish:
```
node -e "global.window=global; require('<your file>'); const fs=require('fs'); const want=fs.readFileSync('<your input>','utf8').trim().split('\n').map(l=>l.split('|').slice(0,2).join('|')); const got=new Map(window.DICT_EX.map(x=>[x[0],x])); let miss=0,noform=0; want.forEach(k=>{const x=got.get(k); if(!x){miss++;console.log('MISSING',k);return;} const f=(x[3]||k.split('|')[0].split(' / ')[0]).toLowerCase(); if(!x[1].toLowerCase().includes(f)){noform++;console.log('FORM',k,'::',x[1]);}}); console.log('entries',window.DICT_EX.length,'missing',miss,'form problems',noform)"
```
It must print missing 0 and form problems 0. Save the file after every 40 entries (write early, extend).

## Final reply
File path, entry count, and a short list of entries where you were unsure of the headword's own meaning or spelling
(possible dictionary errors: do not fix them, list them).
