# Pass 10 (3.17.0): Listen and reply. Read /home/claude/work/RULES.md first.

A new drill: the learner HEARS one line (not shown) and chooses the natural REPLY among four Tagalog lines.

## Output: /home/claude/work/p10/listen-reply.js
```js
/* Listen and reply (3.17.0). Draft for review. Ids permanent, append only. */
window.LISTEN_REPLY = [
  { id: 'lr-001', lv: 'A1', clin: false, who: 'A neighbor, in the morning', say: 'Saan ka pupunta?', en: 'Where are you going?',
    opts: [ { tl: 'Sa palengke lang.', en: 'Just to the market.' }, { tl: 'Kahapon pa.', en: 'Since yesterday.' }, { tl: 'Si Ana po.', en: 'Ana.' }, { tl: 'Oo, masarap.', en: 'Yes, it is delicious.' } ],
    a: 0, why: 'Saan asks for a place.' },
  … 72 items
];
```
- 72 items: 36 everyday (`clin: false`) and 36 clinical (`clin: true`: a patient, relative or nurse speaks to the
  learner, who is a psychiatry resident or nurse on a ward or in a clinic; the right option is what a kind, competent
  clinician would say next). Levels: A1 12, A2 24, B1 24, B2 12 (split evenly between everyday and clinical).
- `say`: one or two natural spoken sentences. `who`: a few English words on who speaks and where (no names needed).
- `opts`: exactly 4 Tagalog replies with English. Exactly ONE is a natural, appropriate reply. The other three are
  correct Tagalog sentences that do NOT fit: they answer a different question word, the wrong time, the wrong person,
  miss the speaker's feeling, or (clinical) are dismissive, leading or unsafe where the right one is open and kind.
  They must not be silly; a learner who half-understood `say` should be tempted. All four of similar length.
- `a`: index of the right reply; use each index 0 to 3 eighteen times. `why`: one short English sentence.
- Clinical safety: when `say` hints at hopelessness or self-harm, the right reply asks gently and directly about it
  or stays with the person; never a reply that promises secrecy, argues, minimises or gives advice on methods.
  No dosing advice. No diagnosis told to the patient in one line.
- Every `say` and every option is recorded as audio: RULES.md applies to all of them (no ALL CAPS, acronyms, "Dok",
  accents, digits, brands, stigmatizing words; respectful forms with po and kayo toward patients and elders).
- Do not reuse sentences from /home/claude/tagalog/js/data/listening.js, dialogues.js or psych-cases.js (skim them).
Check the file loads, ids are unique lr-001 … lr-072, counts per level and kind, and the spread of `a`. Save early.

## Final reply
File path, the counts, and the items where a second option might be defensible.
