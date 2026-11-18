# Pass 10 (3.17.0): six readings and six dialogues. Read /home/claude/work/RULES.md first.

Read /home/claude/tagalog/js/data/reading.js (17 passages) and js/data/dialogues.js (8 dialogues) for format, tone,
length and the topics already used (do not repeat a topic).

## Output 1: /home/claude/work/p10/reading-more.js → `window.NEW_READING = [ six passages ]`
Each exactly in the shape of reading.js: `{ id, level, title, titleEn, tl: [paragraphs], en: [paragraphs, same count],
gloss: [[tl, en] × 8 to 12], q: [[question, [3 or 4 options], index, explanation] × 5], psych?: true }`.
Six passages: A2 `sari-sari` (a day at a neighborhood store), B1 `barangay-health` (a barangay health worker's visit;
write "barangay health worker" out, no acronym), B1 `dalaw-ward` (a daughter's first visit to her mother on a
psychiatric ward; psych: true; warm, de-stigmatizing), B2 `liham-pasasalamat` (a recovered patient's thank-you letter
to the ward staff; psych: true), B2 `balita-tagtuyot` (a news report on a drought and the farmers), C1
`sanaysay-pag-uwi` (an essay by a nurse coming home from work abroad). Length grows with level: A2 about 110 words,
B1 about 160, B2 about 220, C1 about 280 Tagalog words. Questions test understanding, in English for A2 and B1, in
Tagalog for B2 and C1; vary the right index. Each paragraph is recorded as audio.

## Output 2: /home/claude/work/p10/dialogues-more.js → `window.NEW_DIALOGUES = [ six dialogues ]`
Each exactly in the shape of dialogues.js: `{ id, level, title, roles: ['You', 'Other'], you: 0, lines: [[speakerIdx,
tl, en, taglish?]] }` (the optional 4th item is an everyday Taglish version of the learner's line where one is
natural; give it on about a third of the learner's lines). 8 to 12 lines each. Six dialogues: A2 `botika` (buying
medicine at a pharmacy, no brand names, no dosing advice beyond reading the label aloud), A2 `kapitbahay` (chatting
with a neighbor about family), B1 `bantay` (a resident talks with a patient's watcher about how the night went),
B1 `follow-up` (a follow-up clinic visit: sleep, appetite, side effects in plain words), B2 `family-meeting`
(explaining a discharge plan to a family that disagrees among themselves), B2 `barangay-referral` (a nurse phones a
barangay health worker to arrange a home visit). Every line is recorded as audio.

RULES.md applies to every Tagalog string. No real people, places only as general as "Bataan", "Maynila", "Balanga".
Check both files load with node and print ids, levels, paragraph / line counts. Save early.

## Final reply
File paths, counts, and the lines where two natural wordings exist.
