# Lesson writer brief (Usap Tayo 3.10.0 picture lessons)
You write grammar lessons for Usap Tayo (Tagalog for English-speaking psychiatry residents and nurses in Bataan). A
native-speaker psychiatrist reviews your draft. Do NOT run git commands. Write ONLY the file named in your task.
Read first: /home/claude/work-tl/PLAN-3.10.md (rules; A5 = the ten lessons), then three existing lessons in
/home/claude/tagalog/js/data/lessons.js for voice, depth and HTML (ids `demonstratives`, `requests`, `enclitics`): match
them. Then the FINISHED picture sets your lessons embed, in /home/claude/work-tl/new/picture-sets-*.js (signs: /home/claude/work-tl/new/signs.js and signs-panels.js), and their
renders in /home/claude/work-tl/art-ref/. Your examples must agree with the pictures (what is on the table, who wears
what, which word the set uses for a thing): use the sets' own words.
Shape of each lesson: `{ id, level, unit: 'Picture lessons', title, summary, body: `...HTML...`, quiz: [[q, [4 opts], correctIdx, expl], x5] }`.
- Body: 450 to 700 words of English explanation with 14 to 22 examples `<div class="ex"><b>Tagalog</b><span>English</span></div>`,
  h3 section headings, a table where it helps, one `<div class="note">` on a common trap, and a short section
  "On the ward" with clinical examples (po / kayo). Embed the pictures named in the plan with
  `<div class="pic-embed" data-pic="<set id>"></div>` right before the section that uses them, with a sentence telling
  the learner to tap the picture. Link to other pages with plain anchors (`<a href="#/signs">Signs and buttons</a>`,
  `<a href="#/pictures/<set id>">`, `<a href="#/lessons/<id>">` for related existing lessons such as demonstratives,
  markers, linkers, may-wala, requests, numbers).
- Quiz: 5 items, 4 options each, vary the position of the right answer, an explanation that teaches.
- Rules: plain conversational Filipino; no accent marks; no Tagalog word in ALL CAPITALS; no medicine names, doses,
  brands, stigmatizing words; no treatment promises in pic-paliwanag (say only what a part is, where it is, what it
  does, and "ipapaliwanag po ng doktor ang gamutan").
- The file is a fragment: `window.NEW_LESSONS = (window.NEW_LESSONS || []).concat([ {...}, ... ]);` (the main session merges it).
Check with `node --check` and a small script: 5 quiz items each with 4 options and a valid index; every data-pic id
exists in window.PICTURE_SETS (load the picture-sets files with `global.window = global`); every `<div class="ex">` has a b and a span.
REPORT (under 200 words): lessons written, example counts, and the lines you are least sure of for the native reviewer.
