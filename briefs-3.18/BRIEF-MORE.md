# Usap Tayo: six more picture sets in Tagalog (port of Hanashimasho 0.27.0)

You write ONE data file: two picture sets for the Tagalog-learning app Usap Tayo (repo /home/claude/tagalog, READ ONLY for you).
The drawings already exist and are reused unchanged. You rewrite the words and sentences in Tagalog. Adapt, do not translate.

Learner: an English-speaking psychiatry resident or nurse learning Tagalog for the ward at a hospital in Bataan, Philippines.
Dr. Navarro, a native speaker, reviews everything: all Tagalog is a DRAFT.

## Files
- Source (Japanese, for ids, pins and ideas): /home/claude/work-tl/src/picture-sets-more-N.js
- The pictures with numbered pins (pin number = order of `parts`): /home/claude/work-tl/art-ref/more-N-<set id>-light.png. LOOK at each one with the Read tool before writing, and again when you finish: label what is DRAWN at each pin.
- Model for the Tagalog shape and tone: /home/claude/tagalog/js/data/picture-sets-home.js and picture-sets-town.js (read the header and two sets).
- Write your file to /home/claude/work-tl/new/picture-sets-more-N.js. Write nothing else, anywhere. Never run git.
- Check: `node /home/claude/work-tl/tools/chk-more.js /home/claude/work-tl/new/picture-sets-more-N.js` must end "0 error(s)"; read every WARN and fix it or be ready to explain it.

## Shape
```
/* Picture words added in Usap Tayo 3.18.0 (part N): <set titles>. Port of Hanashimasho 0.27.0; drawings in pictures/art-more-N.js.
   DRAFT FOR REVIEW by Dr. Navarro (native speaker). All Tagalog here is a draft.
   Shape: the header of picture-sets-home.js. Set ids and part ids are permanent: append only. */
window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([
  { id, group, title, lv: 'A1'|'A2', kind: 'diagram', art, intro: 'one or two English sentences',
    parts: [ { id, w, en, lv: 'A1'|'A2'|'B1', x, y, alt: [...] } ],
    say: [ { tl, en, p } ] }
]);
```
- Keep EXACTLY: set `id`, `group`, `kind`, `art`, the number and order of parts, every part `id`, `x`, `y`. Never add, drop or move a part. If a drawn thing has no sensible Tagalog label, still give your best label and say so in your report.
- Set `lv`: source N5 -> 'A1', N4 -> 'A2'. Part `lv`: 'A1', 'A2' or 'B1' by how early a learner of Tagalog needs the word (at most a quarter of a set B1).
- `title`: short English, may be adapted (for example "At the botika").
- `w`: the word as people SAY it, lower case, 1 to 3 words, no article. Real acronyms keep capitals (TV). Each `w` in a set is different.
- `alt` (optional): other answers to accept when the learner types (mesa / lamesa; ref / refrigerator). An alt must not be another part's answer.
- `en`: short gloss of the Tagalog word as used here.
- `say`: EXACTLY 10 "listen and point" sentences per set, each for a DIFFERENT part: a natural sentence whose answer is exactly ONE part (`p`), and that names no other part of the set. The sentence should contain the part's word (an inflected or linked form such as "kamang" is fine). Vary them: where it is, what you do with it, a patient's line, a nurse's or pharmacist's line. At least four per set health- or ward-related where the topic allows. Write every sentence by hand.

## Language rules
- Plain conversational Filipino as spoken in Bataan and Metro Manila, not deep or textbook Tagalog. Where everyone uses the English or Spanish-derived word, use it (aircon, cellphone, kutsara, tinidor, TV, drawer, locker). Prefer the Tagalog word when both are common (ilaw, pinto, unan, kumot, kama).
- First check how the app already names the same thing and reuse that word: `grep -rn "<english>" /home/claude/tagalog/js/data/picture-sets-*.js /home/claude/tagalog/js/data/dict-*.js` (dictionary lines are `tagalog | english | ...`). A part whose `w` equals a dictionary headword exactly gets an "Open in dictionary" link, so prefer the dictionary's spelling when it is natural.
- po / opo / kayo where staff speak to a patient or an elder, and where a patient speaks to staff.
- Spelling for the recorded voice: normal sentence case. NEVER a word in ALL CAPITALS except a real acronym (TV, CR, OPD, ER, ATM, ID). NO accent marks and no n-tilde anywhere.
- No stigmatizing words (baliw, adik, sira-ulo). No medicine names, brand names, doses, or advice on how or when to take a medicine. No method detail of any kind. No real hospital names, people or phone numbers. Keep everyday examples away from wounds.
- No sentence may depend on today's date or sound like an orientation test question ("Anong araw ngayon?" is OUT; an appointment line is fine).
- Nothing about pain or rating scales.
- English: plain, active, no em-dash asides.

## Report (your final message, short)
1. The table of parts: id | w | alt | why, for any part where you chose between two natural words.
2. Lines you are unsure of, for the reviewer and for Dr. Navarro (two natural choices, regional doubt).
3. The checker's last line and any WARN you left.
