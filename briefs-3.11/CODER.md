# Usap Tayo: rules for every coder

Usap Tayo is a static web app (vanilla JS, no build step, hash routing) that teaches Tagalog. You work ONLY in the git
worktree named in your task and in your own tests folder. Do not touch /home/claude/tagalog, /home/claude/devtools or
another worker's folder. Do NOT commit, push, bump the version, or edit `data/changelog.js`, `data/app-meta.js` or the
`VERSION` line of `sw.js` (the main session does release bookkeeping). You DO add new JS files to `index.html`
(a `<script>` tag in the right place) and to the `FILES` list in `sw.js`.

## Read first
- `js/drills.js` and `js/data/drills.js` (the drill engine: DRILLS rows, RUN map, `App.runQuiz`, `runTyped`, `saveBest`).
- `App.runQuiz` in `js/views.js` (question fields: q, sub, tlq, tlo, say, sayAfter, hideQ, opts, a, exp, cardId; find out
  whether it shuffles options itself and follow what the existing generators do).
- `js/app.js`: `routes`, `NAV`, `TITLES`, `BLURB`, `MORE_KEYS`, `V.practice` (every drill has a tile there), `PARENT`.
- `js/core.js`: the search `Page` list, `App.similarity`, `App.flat`, `App.spoken`, `App.speak`, `App.sayBtn`, `App.CATS`,
  SRS state (`state.srs`, `state.mistakes`), `App.dictById`, `App.DICT` entries `{ id, tl, en, pos, cat, root, note }`.
- `js/words.js` and `js/listen.js` as examples of small view files; `css/style.css` tokens (use existing classes:
  `.card .stack .row .grid .tile .eyebrow .pill .btn .seg .wtile .wline .wbank .feedback .notice .muted .small .tl`).

## Conventions that must hold
- A view is `App.views.x = (el, params, query) => {…}` with exactly one `<h1>` at the top. Use
  `const V = (App.views = App.views || {});` (never reassign App.views). Views defined in a file loaded before `app.js`
  can be put straight into the `routes` array; a more specific route goes BEFORE a general one (`/drills/handout`
  before `/drills/<id>`).
- A top-level page needs: `NAV`, `TITLES`, `BLURB`, `MORE_KEYS` (so the phone More tab highlights), the search `Page`
  list in core.js, a tile on `V.practice`, and it should enter the Home quick-practice rotation if there is one for drills.
- Every Tagalog string shown gets class `tl`. Every playback goes through `App.speak` / `App.speakAsync` /
  `App.sayBtn(text)`. A gap question must not reveal its answer by audio before answering: use `sayAfter`, not `say`.
- Scores: best percentage per set, saved with `App.save()`, and `App.activity(n)` for XP, like `saveBest` in drills.js.
- Phone first: test at 390 px wide, also with `App.state.settings.textSize = 125` (then `App.applyTextSize()`), in
  light and dark: no horizontal overflow (`document.documentElement.scrollWidth > window.innerWidth` must be false).
  Prefer stacked layouts over wide tables. New CSS goes at the END of `css/style.css`, using existing tokens
  (CSS variables) so dark mode works; no hard-coded colours except through tokens.
- UI copy: plain, active English, no em dashes used as asides.
- Any Tagalog text the app can speak must be listed by `tools/collect-texts.js` (it builds the audio pack). Add an
  arrow-function loop for new data there (never `forEach(add)` with a function taking extra parameters; see the
  comments in that file), and add the new data file to its load list. Wrong sentences are never recorded.
- pdfmake (handouts): never reuse one node object in two places; build a fresh object each time. The font lacks `→`
  and `☐` (see `fixGlyphs` and how other handout topics draw checkboxes and ruled lines).
- Do not change ids or the order of existing data. Do not rename existing routes.

## Tests
Your copy of the tests is in your `tests` folder (path in your task). `data_check.js` loads every
`data_check_ext_*.js` next to it (`module.exports = (C, bad, counts, repo) => {…}`; `C` is the app's global scope after
loading all data scripts and core.js, `bad(msg)` records a failure, add your totals to `counts`). `smoke.py` loads every
`smoke_ext_*.py` next to it: a module with `ROUTES = ['#/…', …]` (each is opened on desktop light and phone dark and
checked for errors and overflow) and `async def checks(pg, name, fails):` run once per viewport (Playwright async page
`pg`; append strings to `fails`). Write ONE ext file of each kind for your pass, named in your task. Do not edit
`smoke.py` or `data_check.js` themselves.
Useful facts for Playwright: `.eyebrow` text is upper-cased by CSS (compare lowercased); when stubbing a function in
`pg.evaluate`, end the expression with `; 0`; wait 150 ms after changing `location.hash`; quizzes are driven by
clicking `.opt` then `[data-act=next]` (read smoke.py for examples of running a drill to its score screen).

Run, and make pass, before you finish (serve YOUR worktree on YOUR port with the Bash tool's run_in_background):
```
node <your tests>/data_check.js <your worktree>            # must end with DATA OK
python3 -m http.server <port> --directory <your worktree>   # run_in_background
python3 <your tests>/smoke.py --base http://localhost:<port>/index.html --out /home/claude/work/<pass>/out   # must end with SMOKE OK (takes about 5 minutes)
node <your worktree>/tools/collect-texts.js                  # must run; then `git -C <your worktree> checkout tools/texts.json tools/caps.json`
```
Also take phone screenshots of each new screen (390x844, light and dark, and one at 125% text size) with Playwright
into /home/claude/work/<pass>/shots/ and LOOK at them (Read tool) to check the layout before you finish.

## When done
Reply with: files changed and added; the new routes; state keys used; what the tests now cover; the counts printed by
data_check; anything you were unsure about or left out; and a ready-to-paste README feature-table row and
"files changed" list for the release notes.
