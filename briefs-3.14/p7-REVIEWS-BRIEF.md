# Pass 7: unit reviews. Read /home/claude/work/RULES.md and /home/claude/work/p7/BRIEF.md first.

In 3.14.0 the lessons are regrouped into nine units (below). Each unit ends with a review lesson: a one-screen summary
table (one row per lesson of the unit) and a 10-item mixed quiz. Read every lesson of a unit (body and quiz) in
/home/claude/tagalog/js/data/lessons.js, lessons-2.js, lessons-pictures.js before writing its review.

Units and their lessons (ids):
- 'Foundations': pronounce, markers, names, pronouns, linkers, may-wala, questions, negation, demonstratives, plurals
- 'Verbs: focus and aspect': focus, aspect, panlapi, focus-an-i, ay-inversion, recent-past
- 'Verbs: more affixes': ability, causative, social-verbs, accidental, nominalising
- 'Natural speech': particles, politeness, enclitics, hedging, exclamations
- 'Building sentences': connectors, conditionals, reported-speech, relative-clauses
- 'Register and style': register, spoken-short-forms, storytelling
- 'Everyday life': numbers, modals, comparisons, requests, time-words, intensifiers, location, spanish-numbers
- 'Culture': kinship, values, folk, idioms-distress, interpreting
- 'Picture lessons': pic-nasaan, pic-masakit, pic-paglalarawan, pic-bilang, pic-suot, pic-direksyon, pic-karatula, pic-makina, pic-kalagayan, pic-paliwanag

## Output: /home/claude/work/p7/lessons-review.js
```js
/* Unit reviews (3.14.0). Draft for review. One per unit; js/data/lessons-zz-order.js turns each into a lesson at the end of its unit.
   rows and quiz are append only (later releases add rows for new lessons). */
window.LESSON_REVIEWS = Object.assign(window.LESSON_REVIEWS || {}, {
  'Foundations': {
    id: 'review-foundations', level: 'A1', title: 'Review: Foundations',
    summary: 'One or two sentences saying what the unit covered.',
    intro: 'Two or three plain sentences: what to be able to do after this unit, and how to use the table.',
    rows: [
      ['markers', 'ang marks the topic, ng the non-topic doer or object, sa the place or direction', 'Kumain ang bata ng mangga sa kusina.', 'The child ate a mango in the kitchen.'],
      … one row per lesson of the unit, in the unit's order: [lesson id, the key point in one short English line, ONE Tagalog example sentence, its English]
    ],
    quiz: [ ['question', ['a', 'b', 'c'], idx, 'why'], … exactly 10, covering every lesson of the unit at least once (units of 3 to 5 lessons: 2 or 3 items per lesson) ]
  },
  …nine units, ids: review-foundations, review-verbs-1, review-verbs-2, review-natural, review-sentences, review-register, review-everyday, review-culture, review-pictures
});
```
Rules: the row example is a NEW sentence (not in the lesson body), one complete sentence, recorded as audio, so it
follows every rule of RULES.md. Quiz items: 3 options, the right answer the only defensible one, positions varied
(roughly equal use of index 0, 1, 2), no question repeated from a lesson's own quiz; mix lessons so the learner has to
choose between patterns of the unit (that is the point of a review). `level` = the highest level among the unit's
lessons except a single outlier. Check the file loads with node and print the counts. Save early.
