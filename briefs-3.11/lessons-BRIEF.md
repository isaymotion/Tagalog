# Pass 4: grammar lessons (read /home/claude/work/RULES.md first)

Write grammar lessons in exactly the format of /home/claude/tagalog/js/data/lessons.js. Read these existing lessons in
that file as models of length, tone and markup before writing: `recent-past`, `hedging`, `enclitics`, `requests`.
Also skim the titles and summaries of all lessons in that file and in js/data/lessons-pictures.js so you do not repeat
them; build on them and link to them where useful with `<a href="#/lessons/<id>">title</a>`.

## Output format
A JS file that sets `window.NEW_LESSONS = [ {…}, {…} ];` with one object per lesson:

```js
{
  id: 'conditionals', level: 'B1', unit: 'Natural speech', title: '…',
  summary: 'One or two sentences.',
  body: `
<p>…</p>
<h3>…</h3>
<table><tr><th>…</th></tr><tr><td>…</td></tr></table>
<div class="ex"><b>Tagalog sentence.</b><span>English translation.</span></div>
<div class="note">Clinical tip: …</div>`,
  quiz: [
    ['question', ['option A', 'option B', 'option C'], correctIndex, 'short explanation'],
    … exactly 6 items
  ]
}
```

Rules for the body:
- Allowed tags only: p, h3, b, i, table/tr/th/td, ul/ol/li, a, `<div class="ex"><b>TL</b><span>EN</span></div>`,
  `<div class="note">…</div>`. Nothing else, no inline styles.
- Each `.ex` box holds ONE complete Tagalog sentence or phrase inside `<b>`, with nothing but plain text in the `<b>`
  (it is recorded as audio exactly as written). No slashes, brackets, blanks or two alternatives inside a `.ex <b>`.
- 12 to 18 `.ex` examples per lesson, 2 to 4 `h3` sections, at least one table where a pattern has forms to compare,
  one or two `.note` boxes (a clinical tip that shows why the pattern matters at the bedside, and/or a common mistake).
- Length: about the size of `hedging` or `enclitics` (roughly 350 to 550 words of English explanation).
- Quiz: exactly 6 items, 3 options each; vary the position of the right answer (not always the same index); mix
  meaning questions, gap questions ("____") and one clinical-reasoning question. Every right answer must be the only
  defensible one.
- Say honestly where speakers vary or where everyday speech differs from the textbook.

## Lessons to write
See the list in your task message.
