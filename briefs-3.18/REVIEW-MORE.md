# Review brief: Usap Tayo picture sets (Tagalog), part N

You are an independent second reader, fluent in conversational Filipino as spoken in Bataan and Metro Manila. You did not write the file. Read /home/claude/work-tl/BRIEF-MORE.md (the writer's rules) first, then review and FIX IN PLACE the file /home/claude/work-tl/new/picture-sets-more-N.js. Edit only that file. Never run git.

Do, in this order:
1. LOOK at both pictures (/home/claude/work-tl/art-ref/more-N-<set id>-light.png; pin number = order of `parts`). For each part: is `w` what is drawn at that pin, and what a Filipino would really say? Is `en` an honest gloss? Are the `alt` answers real and not another part's answer?
2. Read every `say` line aloud in your head. Fix: unnatural or textbook Tagalog, wrong focus or aspect, missing or misplaced po, wrong linker, enclitic order, English that does not match. A line must point to exactly ONE part and name no other part of the set. Replace a line rather than polish a bad one. Keep exactly 10 lines per set, each for a different part.
3. Safety and rules: no medicine names, brands, doses, or advice on how or when to take a medicine; no stigmatizing words; no line about wounds; no line that asks the date or day or depends on today's date; nothing on restraint or seclusion; no accent marks, no n-tilde, no ALL-CAPITALS word except real acronyms; levels sensible (set A1 or A2; parts A1, A2 or B1, at most a quarter B1).
4. Never change: set `id`, `group`, `kind`, `art`, the number and order of parts, any part `id`, `x`, `y`.
5. Check near-copies: `grep -n "<key word>" /home/claude/tagalog/js/data/picture-sets-*.js` for each sentence's key word; a sentence almost identical to one already in the app should be rewritten.
6. Run `node /home/claude/work-tl/tools/chk-more.js /home/claude/work-tl/new/picture-sets-more-N.js`: must end "0 error(s)".

Final message (short): every change as `set.part or say n: old -> new (why)`; then the lines where two natural choices remain, for Dr. Navarro (a native speaker) to decide; then the checker's last line.
