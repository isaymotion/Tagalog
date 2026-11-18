# Pass 10 (3.17.0): more dictionary words with example sentences. Read /home/claude/work/RULES.md first.

The dictionary has 2,134 entries in /home/claude/tagalog/js/data/dict-core.js, dict-everyday.js, dict-clinical.js,
dict-more.js, dict-themes.js (lines `tagalog|english|pos|category|root|note`). Add 320 NEW words on the themes in
your task. A word is new only if its headword is not already a headword in ANY of those five files: check EVERY
candidate with this command and drop the ones it finds:
```
node -e "global.window=global; ['core','everyday','clinical','more','themes'].forEach(f=>require('/home/claude/tagalog/js/data/dict-'+f+'.js')); const have=new Set([].concat(window.DICT_RAW,window.DICT_RAW2||[]).flatMap(x=>String(x).split('\n')).map(l=>l.trim().split('|')[0].toLowerCase()).filter(Boolean)); require('<your file>'); const seen=new Set(); let d=0; window.NEW_WORDS.forEach(l=>{const k=l.split('|')[0].toLowerCase(); if(have.has(k)||seen.has(k)){d++;console.log('DUP',l);} seen.add(k);}); console.log('words',window.NEW_WORDS.length,'dups',d,'examples',window.NEW_EX.length)"
```
## Output: one JS file (path in your task)
```js
window.NEW_WORDS = [
  'magpabakuna|to get vaccinated|v|health|bakuna|',
  …
];
window.NEW_EX = [
  ['magpabakuna|to get vaccinated', 'Kailangan nang magpabakuna ng bunso namin.', 'Our youngest needs to get vaccinated now.'],
  …
];
```
- Line format: `tagalog|english|pos|category|root|note`. pos is one of n, v, adj, adv, pron, part, conj, prep, interj,
  num, phr. category is one of: basics, particles, grammar, pronouns, questions, numbers, time, colors, people, family,
  body, food, home, money, work, places, nature, clothing, school, tech, travel, adjectives, modals, verbs, emotions,
  mind, health, beliefs, risk, substance, clinical, routine, civic (never `stigma`). root = the root word for an
  affixed word (else empty). note = a short usage note only when really useful (else empty). No `|` inside a field.
- Words a learner will actually meet: common, current, standard spelling (see RULES.md). Verbs in the infinitive
  (magluto, kumain, linisin) unless a fixed form is the useful entry. No brand names, no proper names, no acronyms, no
  stigmatizing words, no obscure or literary-only words. English glosses short (under 40 characters where possible),
  with "to …" for verbs.
- NEW_EX: one example sentence for EVERY word, following /home/claude/work/p9/BRIEF.md exactly (key = the first two
  fields; the sentence contains the headword exactly as spelled; 4 to 12 words; meaning guessable from context).
Save after every 40 words. Run the check above until it prints dups 0 and examples = words.

## Final reply
File path, word count per category, and words whose spelling or meaning a native speaker should confirm.
