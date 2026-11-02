# Usap Tayo — handoff

## 1. Project and audience
- **What:** "Usap Tayo" (Tagalog for "let's talk"), an offline-capable web app teaching English speakers fluent Tagalog, with a psychiatry track for residents and nurses at Mariveles Mental Wellness and General Hospital (MMWGH), Bataan.
- **Owner:** Ma. Isabella P. Navarro, MD, incoming PGY-1 psychiatry resident at MMWGH. Nurses there also request features.
- **Repo:** github.com/isaymotion/Tagalog (git remote also works as `isaymotion/tagalog`). Branches: `main` = the app (served by GitHub Pages); `dev-tools` = tests + this doc (not published).
- **Live:** https://isaymotion.github.io/tagalog/ (Pages deploys `main` root automatically).
- **Current version:** 2.9.1 (Nov 2026). Service worker cache `usaptayo-2.9.1`. Releases on 2026-11-02: 2.9.1 structural affix marking, 2.9.0 verb and lesson handouts, 2.8.0 printable Panlapi grammar handout, 2.4.0 Panlapi trainer, 2.4.1 Panlapi in the menu + grouped More screen, 2.5.0 text size adjuster, 2.6.0 task-driven Home + pins + central breadcrumbs, 2.7.0 tabbed Psychiatry hub + Practice tab + new phone bar. (1.9 to 2.3 added the MSE interviewer sheet, substance use screener, mood episode checker, withdrawal and agitation guide and Shea techniques; the README feature table is kept current.)
- **Linked app:** MSE Trainer, repo `isaymotion/MSEtrainer`, live https://isaymotion.github.io/MSEtrainer/ (see section 10). Her other study apps are in section 11.

## 2. Fixed rules
- Attribution string (footer, About, PDFs), exact: `App created by Isabella Navarro, MD. Latest version November 2026. isaymotion@gmail.com` (in `js/data/meta.js` → `APP_META.attribution`, also README line 7). Update the month/year in it only when the release month changes (also `APP_META.updated`).
- Every release: add an entry at the TOP of `WHATS_NEW` in `meta.js` (item kinds: `new`, `improved`, `fixed`, `content`), bump `APP_META.version`, bump `VERSION` in `sw.js` (`usaptayo-X.Y.Z`), add any new JS files to the `FILES` list in `sw.js`.
- **Never** put patient names, ages, record numbers, staff names, signatures, or license numbers into the app or repo. Users send photos of real hospital forms: use only the form's structure (field names, order, form number).
- Hospital forms already used: de-escalation checklist `MMH-NUR-04-112-01`; discharge summary `MMH-MED-04-04-02` (stored in `APP_META.institution`); Readmission Form `MMH-MED-04-26-02` (page 1: identifiers, chief complaints in Tagalog quotes, HPI, past psychiatric history, medical history, substance use) and `MMH-MED-04-26-01` (page 2: MSE, PE, vital signs, diagnosis, plan, admitting physician); only its MSE order is used, in `psych-admit-mse.js`. The **initial admission form** is still to come from her (Liza's MSE case waits for it). User approved showing hospital name/address and form numbers; government seals are not reproduced.
- Psychiatry phrases are practice phrasings, not validated instrument translations; keep that disclaimer (About, handouts). Don't reproduce copyrighted tests (MMSE text, C-SSRS).
- Every psychiatry phrase has `f` (respectful, po/kayo) and `c` (everyday/Taglish) forms. Avoid stigmatizing terms (baliw, adik) except in the "stigma" dictionary category.
- Crisis line shown: NCMH Crisis Hotline 1553 (24/7), plus 0919-057-1553, 0917-899-8727 (per Jan 2026 report).
- Commits authored as `Isabella Navarro <isaymotion@gmail.com>` with the Claude co-author trailer. Push straight to `main` (user's repo, no PR flow). Add the repo to the session with push access first (`add_repo`), or the git proxy returns 403.
- Writing style in UI copy: plain, active, no em-dash asides.
- She prefers subagents (Sonnet) for simpler per-app implementation work, with design, clinical content and final review kept by the main session. The text size rollout (section 11) used one subagent per app from a shared spec and that worked well; spot-check each result yourself on a phone viewport afterwards.
- For UI changes she wants to see first, prototype on a scratch branch in the real app and send phone screenshots (light + dark rows); she decides from those ("ship it" / "drop it"). Squash-merge the branch into main when shipping.

## 3. Architecture and data formats
Static site, vanilla JS, no build step. `index.html` loads scripts in order: data files (ending with `affixes.js`, then `meta.js`) → `conjugate.js` → `audio-key.js` → `core.js` → `views.js` → `psych-views.js` → `handout.js` → `mse-sheet.js` → `sud.js` → `mood.js` → `withdrawal.js` → `deesc.js` → `discharge.js` → `discharge-practice.js` → `mse-practice.js` → `affixes.js` → `grammar-handout.js` → `app.js`. Hash routing (`#/path?query`) in `app.js` `routes`.

Navigation conventions (2.4.1 to 2.7.0, all in `app.js` unless noted):
- Phone tab bar: Home, Psychiatry, Practice, Cards, More. Dictionary is reachable from the header search, the desktop rail, More (first under Learn) and the Home footer line. `#/practice` (`V.practice` in app.js, registered with `routes.push` after `V.more` because it is defined after the routes array) lists every drill in Language and Clinical groups.
- Psychiatry hub (`psych-views.js` `V.psych`) has four tabs read from `?tab=`: `interview` (default; phrase sections + related lessons + the practice-phrasings notice), `cases`, `tools`, `print`. Tab pills are `.ptabs`, sticky under the top bar. Add a new psychiatry page to the right tab's tile list there and to `PSY_TOOLS` in app.js.
- `NAV` is the single list of top-level pages (key, hash, title, icon): it renders the desktop rail and the phone More screen (grouped Learn / You, with `BLURB` one-liners), plus `PSY_TOOLS` for the psychiatry tools group. A new top-level page goes in `NAV`, `TITLES`, `MORE_KEYS` (so the More tab highlights) and the `core.js` search `Page` list.
- `render()` calls `App.decorate(view, path, q, key)` after every view: it inserts a `.breadcrumb` on any deep page (two or more path segments) that did not draw its own, using `TITLES[key]` and the `PARENT` map for nested lists (`/psych/dcase` → Discharge practice, `/psych/mcase` → Admission MSE practice, `/psych/case` → Case simulations), and appends a pin button (`.pin`) to the `h1` of every page not in `NO_PIN`. Pins live in `state.pins` `[{hash,title,sec}]` (max 12); recents in `state.recent` `[{hash,title,sec}]` (last 8). `sec` is the section label from the breadcrumb.
- Home (`views.js` `V.home`): hero, What's New tile when unseen, stats, **Today** (cards due or start a deck; a quick-practice tile that rotates daily through verbs, panlapi, interpretation drill, psych flashcards, case simulation; next lesson; placement if no level), **Pinned**, **Continue** (recents not pinned), four psychiatry shortcuts, and a line pointing to Dictionary and More. There is no "Everything" grid any more.
- Text size: `#textSizeBtn` (Aa) in the top bar opens `#textSizePanel`; `App.applyTextSize()` sets `documentElement.style.fontSize` from `state.settings.textSize` (90 / 100 / 112.5 / 125); an inline head script applies it before first paint; Settings → Appearance has the same `App.textSizeSeg()`. CSS: `.stack > *` and `.row > label` have `min-width: 0` and `select.input` `max-width: 100%` so long selects fit at 125% on phones; test new pages at 125% on 390px.

| File | Contents |
|---|---|
| `js/data/dict-*.js` | `DICT_RAW` lines: `tagalog|english|pos|category|root|note` e.g. `bumubulong|is whispering|v|mind|bulong` |
| `js/data/verbs.js` | `{ r:'kain', en:'eat', a:['um','in'], o:{in:[inf,com,inc,con]}, clinical:true, ex:'TL|EN' }`; `verb-sentences.js` has `VERB_SENTENCES[root] = [[tl,en,form,aspect,flags,note]]` |
| `js/data/affixes.js` | Panlapi trainer: `AFFIX_TYPES` (unlapi, gitlapi, hulapi, kabilaan, laguhan), `AFFIX_RULES` (9 sound-change/placement rules, tl+en+ex), `AFFIX_LIST` (26 affixes with meaning), `AFFIX_ITEMS: [{ w, r, seg, t, sub?, pos, en, note?, clin? }]` (216 words; `seg` notation: `[..]` affix, `{..}` repeated aspect syllable, `<in>` infix inside a prefix, e.g. `[p<in>ag]-usap[an]`; `sub` on kabilaan = `uh` prefix+suffix, `gh` infix+suffix, `ug` prefix+infix), `AFFIX_FOCUS_DRILL: [{ q (with ____), en, ok, no, why, clin? }]`. View `js/affixes.js` (`#/affixes`, `?t=<type>` filters), drills type/root/build/focus, scores in `state.done.affixes`, cards `af:<word>` resolved in `core.js` `cardFor`. **Drafted by Claude, awaiting her native-speaker review** (she said she would correct later). |
| `js/data/lessons.js` | `{ id, level, unit, title, summary, body:HTML, quiz:[[q,[opts],correctIdx,expl]] }`; lesson `panlapi` (unit Verbs) belongs to the affix trainer |
| `js/data/reading.js` | `{ id, level, title, titleEn, tl:[paras], en:[paras], gloss:[[tl,en]], q:[[q,opts,idx,expl]], psych? }` |
| `js/data/dialogues.js` | `{ id, level, title, roles, you, lines:[[speakerIdx, tl, en, taglish?]] }` |
| `js/data/psych-phrases.js` | `PSYCH_SECTIONS: [{ id, group, title, intro, phrases:[{ en, f, c, n?, answers?:[[tl,en]] }] }]` |
| `js/data/psych-cases.js` | `PSYCH_CASES: [{ id, title, level, setting, steps:[{ who, line:[tl,en], choices:[{tl,en,score:0|1|2,fb}] }], summary:{findings,mse} }]`; `PSYCH_INTERP: [[tl,en,significance]]` |
| `js/data/psych-flow.js` | `PSYCH_FLOW` (19 interview steps), `PSYCH_FLOW_EXTRA`, `PSYCH_MSE`; phrases referenced as `"sectionId:index"` |
| `js/data/psych-deesc.js` | `PSYCH_DEESC { behaviors, steps(12), after(5 phases), escalation, outcomes }`; appends phrases to section `deescalation` |
| `js/data/psych-discharge.js` | `PSYCH_DISCHARGE { form, fields:[{ id, group, label, kind, assess, ask, picks, risk? }] }`; creates section `discharge` and a `PSYCH_FLOW_EXTRA` entry |
| `js/data/psych-discharge-cases.js` | `PSYCH_DISCHARGE_CASES: [{ id, title, level, setting, chart:[lines], fields:{ <dischargeFieldId>: { obs?, ans:{qIdx:[tl,en]}, key?:[qIdx], need:[pick or [any-of]], ok?, wrong?:{pick:why}, doc, why, quote? } } }]`. `qIdx` indexes the field's `ask` in `psych-discharge.js`; every pick must be a string from that field's `picks` (data_check enforces this, and that the model grades as a full match). Grader: `App.dischargeGrade(caseField, Set)` in `js/discharge-practice.js`. Also per case: `dx` (tile label), `decision:{discharge:bool, why}` (graded end decision); an `ans` entry may have a 3rd item = speaker (e.g. 'Aling Tess (mother)') |
| `js/data/psych-admit-mse.js` | `PSYCH_ADMIT_MSE { form, domains:[{ id, group, label, kind, assess, ask:[phrase refs], picks, risk? }] }`: 13 domains in Readmission Form order (appearance, psychomotor, attitude, mood, speech, process, perception, content, safety, orientation, insight, impulse, judgment). Uses existing phrases only; append to `ask`, never insert |
| `js/data/psych-mse-cases.js` | `PSYCH_MSE_CASES: [{ id (same as its discharge case), title, level, dx, form, setting, chart, cc:{ ask, ans:[tl,en,who], opts:[[text,correct,why]] }, domains:{ <id>: { obs?, ans, key?, need, ok?, wrong?, doc, why, quote?, ev?:{ find, opts:[[text,correct]], why } } } }]`. View: `js/mse-practice.js` (`#/psych/mcases`, `#/psych/mcase/<id>`), scores in `state.done.mcases`; compare screen shows admission vs discharge rows when a discharge case has the same id |
| `js/data/psych-mse-sheet.js`, `psych-sud.js`, `psych-mood.js`, `psych-withdrawal.js`, `psych-shea.js` | Later modules (MSE interviewer sheet, substance use screener, mood episode checker, withdrawal/agitation guide, Shea techniques); README section "Data files" documents them. `collect-texts.js` sweeps every `PSYCH_*`/`SHEA_*` export for `tl`/`f`/`c` strings |
| `js/data/meta.js` | `APP_META`, `WHATS_NEW`, `PLACEMENT` |
| `js/core.js` | storage (`localStorage` key `usaptayo.v1`), dictionary index, root-word stemmer `App.findRoots`, search, SRS, speech (`App.speakAsync`, audio pack first, then Filipino device voice, then id/ms/es voice, never English), `icons` (incl. `affix`, `star`, `starOn`) |
| `js/handout.js` | psychiatry handout/PDF generator (pdfmake in `js/vendor/`, lazy-loaded); presets `full, mse, risk, pocket, discharge, deesccard, everything`. Exposes `App.pdfKit = { load, logo, fixGlyphs, NAVY, GOLD, MUTED, LINE, TINT }` for other handout modules |
| `js/grammar-handout.js` | grammar handout (`#/affixes/handout`, `?t=<type>&set=clinical`), options in `state.settings.ghandout`: cheat sheet (AFFIX_TYPES + AFFIX_LIST), rules, word list in two columns with affix pieces in brown (`App.affixPieces`), worksheet A (24 sampled words, root + type blanks) and B (focus drill, 3 same-root options: from AFFIX_ITEMS sharing `r`, else the drill item's `alt`; paired items spread apart by `spreadPairs`), answer key. `App.grammarHandoutDoc(o)` / `App.grammarHandoutBuild(o)` for tests. Footer = attribution only (she asked for no URL). Topic option `topic`: `verbs` (`#/verbs/handout`, `?v=<root>&set=clinical`; settings in `ghandout.verbs`; aspect-at-a-glance page, conjugation tables from `App.verbForms`, sentences from `VERB_SENTENCES`, worksheet A = 16 regular verbs × 4 aspects (custom-only verbs excluded), B = 16 sentences with 3 aspect options) and `lesson` (`#/lessons/handout?id=`; settings in `ghandout.lesson`; `App.htmlToPdf(html)` converts p/h3/b/i/u/ul/ol/table/dl/div.ex/div.note; all 23 lessons verified at 100% text coverage). Affix marking in verb tables (`affixSplit(form, root, af, asp)`) rebuilds the form like conjugate.js and marks affix (brown) and reduplication (italic); override forms (bilhin, kunin, marinig...) are left unmarked on purpose |
| `audio/` | `manifest.json` + `<16-hex>.mp3` clips; key = `AudioKey(text)` in `js/audio-key.js` (NFC, trim, collapse spaces, lowercase, two FNV-1a 32-bit hashes over UTF-8) |
| `tools/` | `collect-texts.js` (lists all speakable Tagalog → `texts.json`; affix words, rule examples and filled focus sentences are added explicitly), `make_audio_pack.py` (edge-tts `fil-PH-BlessicaNeural`; `--engine mms` alt) |
| `.github/workflows/audio-pack.yml` | records missing clips on push to `js/data/**`, `tools/**`, or the workflow; manual dispatch with voice/rate/rebuild |

Phrase card IDs: `p:<sectionId>:<index>`, so **only append** phrases to a section; never reorder or insert (it would break users' flashcard progress and refs). Affix cards are keyed by word (`af:kumain`), so affix items can be edited or reordered freely; renaming a word orphans its mistakes-deck entry (harmless, `cardFor` returns null).

## 4. Per-feature recipe
1. Add content in `js/data/` (new file → add `<script>` to `index.html` before `meta.js`, and to `tools/collect-texts.js` file list, and `sw.js` FILES).
2. New page → view function in a `js/*.js` file (`App.views.x = (el, params, query) => {...}`) with an `<h1>`; route in `app.js`; for a top-level page add it to `NAV`/`TITLES`/`MORE_KEYS`, for a psychiatry page add a tile under the right tab in `psych-views.js` `V.psych` and a row in `PSY_TOOLS`; for a drill add a tile to `V.practice`; add it to the `core.js` search `Page` list. Breadcrumb and pin button come for free from `App.decorate`.
3. Styles appended to `css/style.css` using existing tokens (light/dark). On phones prefer stacked `.afe`-style entries over wide tables; check at 125% text size.
4. Printable version → option + preset in `handout.js` (render in both `renderHTML` and `docDef`; the PDF font lacks some glyphs, see pitfalls).
5. Release bookkeeping (section 2), README table row and file map line.
6. Run both tests (section 5), commit, push. The audio workflow then records new phrases (~1 min per 100). Check `audio/last-run.json` after `git pull`.

## 5. Commands
```bash
git clone https://github.com/isaymotion/tagalog /home/claude/tagalog          # app (main)
git -C /home/claude/tagalog fetch origin dev-tools
git -C /home/claude/tagalog worktree add /home/claude/devtools dev-tools        # tests + this doc
node /home/claude/devtools/tests/data_check.js /home/claude/tagalog            # expect "DATA OK"
# start a server with the Bash tool's run_in_background (not "&"):
python3 -m http.server 8765 --directory /home/claude/tagalog
python3 /home/claude/devtools/tests/smoke.py --base http://localhost:8765/index.html --out <scratchpad>/suite   # expect "SMOKE OK"
gh run list -R isaymotion/tagalog -w "Build Tagalog audio pack" -L 3             # audio job status
gh api -X POST repos/isaymotion/tagalog/actions/workflows/audio-pack.yml/dispatches -f ref=main   # rerun audio job
```
Baseline (v2.9.1, 2026-11-02): data_check prints `{"version":"2.9.1","dict":1658,"sections":38,"phrases":662,"cases":7,"lessons":23,"reading":12,"dialogues":8,"verbs":78,"dcases":5,"mcases":1,"affixes":216}` and `DATA OK`; smoke prints PDF page counts (full 13, mse 6, risk 6, pocket 16, discharge 4, deesccard 2, everything 38, grammar_a4 13, grammar_a5 6, verbs_a4 30, lesson_a4 2) and `SMOKE OK · 61 routes × 2 viewports` (smoke also checks the grammar worksheet has 3 options per item and no adjacent pairs) (smoke also runs discharge practice flows on Ramon, Liza and Mika, the command-hallucination flag, the admission MSE flow on Ramon, all four panlapi drills to the score screen, pin / breadcrumb / Home checks, hub tabs and Dictionary under More). Audio: 4,690 clips after the 2.4.0 job.
Last verified clean: 2026-11-02 (evening session, fresh clone) on 2.9.1: both tests pass with the baseline numbers above.

## 6. Status
| Area | Done |
|---|---|
| Core learning | Dictionary 1,658 (root search), search, SRS flashcards + mistakes deck, verb trainer (78 verbs, 628 sentences), 23 lessons, 12 readings, 8 dialogues, placement, progress/backup, settings, What's New, About, dark/light, text size, back/forward, PWA offline |
| Navigation (2.4.1 to 2.7.0) | Task-driven Home (Today / Pinned / Continue), pin stars on every page, uniform breadcrumbs, grouped More screen with Recent and Psychiatry tools, all pages searchable by name, Psychiatry hub in four tabs (Interview / Cases / Ward tools / Print), Practice tab in the phone bar listing every drill |
| Grammar handouts (2.8.0, 2.9.0) | `#/affixes/handout`, `#/verbs/handout`, `#/lessons/handout?id=`: Panlapi, verbs and any lesson as preview/print/PDF with worksheets and keys; Print handout buttons on the Panlapi page, verb trainer and every lesson |
| Panlapi (2.4.0) | `#/affixes`: five affix positions, 216 words (120 clinical) with segmentation, 9 rules, 26 affix meanings, drills (name the type, find the root, build the word, choose the affix the sentence forces), lesson `panlapi`, verb trainer link, mistakes deck. Data drafted by Claude; her review pending |
| Psychiatry | 38 sections / 662 phrases, 7 case sims, interpretation drill, interview flow + MSE structure, MSE interviewer sheet, SUD screener, mood episode checker, withdrawal/agitation guide, Shea techniques (see README) |
| Handouts | PDF/print generator, 7 presets, English show/hide/answer key, A4/Letter/A5/A6 |
| De-escalation | Checklist (MMH-NUR-04-112-01), rapid drill, "if it fails" guide, practice case, A6 pocket card |
| Discharge | Guided field-by-field assessment (MMH-MED-04-04-02), summary with safety flags, printable guide; practice cases Ramon, Liza, Carlo, Arnel, Mika with discharge-or-defer decision. Best scores in `state.done.dcases` |
| Admission MSE | `#/psych/mcases`: Readmission Form MSE order, chief complaint MCQ, 13 domains, evidence questions, form-style self-check, admission vs discharge comparison. Case: Ramon. Liza waits for the initial admission form |
| Audio | 4,690 clips (incl. MSE Trainer lines), Filipino neural voice, auto-updating GitHub job |

## 7. Next steps
Next release = **2.9.2** (affix data corrections) or **2.10.0** (new feature). Grammar handout ideas left: reading/dialogue handouts (same topic pattern), a "my handout" builder from starred items.
- **Waiting on her:** corrections to `js/data/affixes.js`. Flagged for her: kabilaan used for any two affixes (`sub` uh/gh/ug) vs the strict prefix+suffix textbook definition; roots given for kamatayan (matay), pabayaan (bayaa); irregular doubling in katotohanan, pinagtawanan; higaan without h; kasiyahan (saya → siya-); magkaroon (doon, d→r). Clinical register in the focus drill (patulugin ang pasyente for sedation, Ikinalulungkot ko).
- All navigation suggestions are now shipped (2.4.1 to 2.7.0) except a keyboard shortcut for search as a command palette. Watch for nurse feedback on Dictionary leaving the phone bar; the fallback is a Dictionary tile in Home's Today row.
- Panlapi follow-ups offered: a clinical-only drill set keyed to ward roots; a drill that gives a dictionary word and asks for its root using `App.findRoots` on the whole 1,658-word dictionary.
- **Waiting on her:** the Tagalog review workbook `tagalog-review-2026-11.xlsx` (sent 2026-11-02; replaces the October file). Sheets: How to use, MSE Trainer (119 lines), Usap Tayo (294), Panlapi (239 = 216 `AFFIX_ITEMS` words + 23 `AFFIX_FOCUS_DRILL` sentences; Where = `af:<word>` or `focus:<n>` (1-based index into the drill array); 7 words pre-flagged in Notes: kamatayan, pabayaan, katotohanan, pinagtawanan, higaan, kasiyahan, magkaroon). When she sends it back, apply each "Fix" row (column A says where), rerun `tools/import-msetrainer.js` if MSE Trainer lines changed, and push both. Panlapi fixes = release 2.9.2. Rebuild the workbook any time with `node tests/msetrainer/review_collect.js <msetrainer clone> <tagalog clone> > rows.json && python3 tests/msetrainer/review_build.py` (run in a scratch dir; writes `tagalog-review-2026-11.xlsx`; MSE Trainer can be a read-only clone at `/home/claude/isaymotion/msetrainer`).
- **Waiting on her:** initial admission form photo → Liza's admission MSE case (same pattern as Ramon). Check whether the initial form's MSE section matches the readmission order; if not, add a second domain list keyed by `form` on the case.
- Admission MSE cases for Carlo (flight of ideas, pressured speech, clanging in Tagalog), Arnel, and Mika (thought blocking).
- Nurse version: she will get the nurses' forms first.
- Printable case sheet for discharge/MSE cases; Filipino take-home sheet for patient/family from discharge fields; more hospital forms in the same pattern; department-standard documentation wording.
- Earlier suggestions not yet done: patient/family handouts in Filipino (diagnosis/meds), Filipino safety-plan form, "my handout" builder from starred phrases, pronunciation stress marks, QR codes on handouts.
- Verify "if it fails" guide (restraint/monitoring intervals) against MMWGH policy if she sends it.

## 8. Pitfalls learned
- Network is allowlisted (package registries + GitHub only). Google Fonts, Hugging Face, Microsoft speech endpoints are blocked here; that's why audio is recorded by the GitHub Actions job. `gh` GraphQL is blocked: use `gh api` REST (e.g. `gh workflow run` fails; the dispatch POST works). Enabling Pages via API is blocked (already enabled).
- The audio job commits `audio/` to `main` within a minute of any push that touches `js/data/**`. Always `git fetch origin main && git rebase origin/main` before pushing a second time, or the push is rejected as non-fast-forward.
- Action logs can't be downloaded here; the audio job writes `audio/last-run.json` (counts + sample errors) and commits it even on failure.
- `make_audio_pack.py` args starting with `-` must use `=`: `--rate=-5%` (else argparse exit 2).
- edge-tts can hang without a timeout; script uses 45 s per clip, early stop if 40 clips fail, `--max-minutes 50`. Occasional `NoAudioReceived` → just rerun the job (only missing clips are made).
- pdfmake's Roboto lacks `→` and `☐`: `fixGlyphs()` swaps `→`→`»`; draw checkboxes as tiny tables. Never JSON-clone a doc definition (it drops layout functions).
- `App.handoutDoc(o)` fills defaults; tests must pass a preset's `o`.
- Starting a server with `&` then `pkill` makes the Bash call exit 144; use `run_in_background`. A background server is stopped after ~30 min of a reply ending; restart it before the next smoke run.
- Background watchers die at their time limit; poll `gh run view <id> --json status,conclusion`.
- A phrase section's indexes are IDs; append only.
- New discharge questions go in the `MORE` list at the end of `psych-discharge.js` (appended to the section and to the end of the field's `ask`), never into `FIELDS[].ask`.
- New picks are plain strings, so appending them is safe; smoke tests click picks by index, so append rather than insert.
- `version: 'X'` appears in both `APP_META` and `WHATS_NEW`; match `  version: 'X',\n  updated` when bumping.
- Discharge practice answers are keyed by question index within a discharge field's `ask`. Changing `psych-discharge.js` asks would both break phrase IDs and misalign case answers: append only.
- `.eyebrow` is uppercased by CSS, so Playwright `inner_text` returns capitals; compare lowercased.
- `js/views.js` creates `App.views`; later view files must not reassign it (use `App.views || {}` so data_check can load them in Node).
- In `app.js`, `routes` is built before `V.more`/`V.practice` exist; register views defined in app.js with `routes.push` after their definition, or the route stores `undefined` and the page shows "fn is not a function".
- In `affixes.js`, build-drill distractors are generated from the seg and filtered against every real word in `AFFIX_ITEMS`, so a wrong option is never another listed word; a written hyphen is attached to the prefix piece by `pieces()`.
- Tile icons inside `.tile h3` need the `.tile h3 svg` size rule; without it an inline SVG fills the tile.
- A view must have exactly one `h1` at the top for `App.decorate` to place the breadcrumb and pin correctly; views that draw their own `.breadcrumb` are left alone.
- Element screenshots on phone show the sticky header over the card; that's an artifact, not a layout bug.
- Medication/diagnosis "picks" in discharge mirror the form's examples (olanzapine, fluphenazine decanoate); keep them generic with blanks.

## 9. Files to re-attach
None required. The user's photos of hospital forms (including the readmission form, 2026-10-26) contained patient data and were deliberately not saved; ask her for a fresh photo only if a new form is being added. The app icon is already in `icons/`.

## 10. MSE Trainer (isaymotion/MSEtrainer)
- Separate study app (Shea-based, 462 cases). No build step: `index.html`, `css/style.css`, `js/data.js` (English cases, terms, `T()`), `js/data-tl.js` (Tagalog cases + "Culture or pathology?" domain `fc`, 10 terms), `js/news.js` (What's New), `js/audio-key.js` (copy of ours), `js/app.js`. Attribution line in its footer and README: `Made by Isabella Navarro, MD. Latest version November 2026. isaymotion@gmail.com` (keep exact; update month only). She chose: push directly to its `main` (2026-10-26). Cache name in `sw.js` is `mse-trainer-vN` (v4 after the text size release); bump it per release.
- Tagalog case format: `lang:'tl'`, C:/P: lines `Tagalog || English` (English hidden until answered), `ask:'tl || en'`, optional `dom:'fc'` to file a standard-term case under Culture or pathology?. Tagalog cases are original (not Shea) and say so; terms still cite Shea chapters.
- Audio: it plays our clips from `https://isaymotion.github.io/tagalog/audio/<AudioKey>.mp3` (manifest fetched cross-origin). After changing its Tagalog lines: `node tools/import-msetrainer.js /home/claude/msetrainer` here (writes `tools/extra-texts/msetrainer.txt`; `collect-texts.js` reads every `tools/extra-texts/*.txt`), commit, push; the audio job records them. Text in parentheses (stage directions) is skipped by both sides (`speakable()`).
- "Sa Tagalog" card on every MSE/culture case links into our stable routes `#/psych/s/<section>` and `#/lessons/<id>` (maps `UT_DOM`/`UT_TERM` in its app.js). Never rename those section or lesson ids.
- Its deep links: `#/practice?lang=tl&dom=fc`, `#/practice?drill=<term>`, `#/custom` (opens the Custom session sheet with `#lang`, `#mode`, `#len` and the domain picker); views `#/home|practice|glossary|progress|new|about`. Prefs `dv:5` (a saved dv:4 list of 26 domains counts as "all"). Top bar: logo only below 430px wide (the brand name is hidden so Aa + theme + search fit).
- Tests (kept here, not in its repo): `node tests/msetrainer/data_check.js /home/claude/msetrainer` → `{"cases":462,"terms":419,"domains":27,"tagalog":42,"culture":15}` `DATA OK`; serve it on 8766 and `python3 tests/msetrainer/smoke.py http://localhost:8766/index.html <scratchpad>/mse` → `SMOKE OK` (phone dark + desktop light, deep link, hidden English, Ask it in Tagalog, Sa Tagalog, custom session English filter, views, history back/forward, text size, theme cycle, menu, backup export/import round trip). Updated 2026-11-02 for the custom session sheet and November attribution.
- Clone: `git clone https://github.com/isaymotion/msetrainer /home/claude/msetrainer` (add the repo to the session first; the remote prints a "moved to MSEtrainer" notice, harmless).

## 11. Her other study apps (text size adjuster rollout, 2026-11-02)
All on GitHub Pages under isaymotion, default branch `main`, pushed directly. Each now has the KaplanStudy-style "Aa" text size control (`#textSizeBtn` + `#textSizePanel`, values 90/100/112.5/125, applied before first paint from the app's own storage key). The reference is `isaymotion/KaplanStudy` (`js/app.js` `TEXT_SIZES`/`applyTextSize`, key `ks:v1:textSize`). Per app:
- **DSMVapp** (DSM-5-TR Study Companion, derived from KaplanStudy): `store` helper, key prefix `dsm:v1:`, `data/changelog.js` entries by id (53 = text size), `sw.js` cache `dsm-companion-<date>-<tag>`. Phone top bar tightened at ≤480px.
- **Stahl** (Stahl Study Companion, same codebase family): prefix `sp:v1:`, changelog id 21, cache `stahl-companion-<date>-<tag>`. Brand subtitle hidden on phones. Known: 320px wide at 125% still overflows on `.chapter-row`.
- **sheatrainer** (Psychiatric Interviewing Trainer): single `app.js`/`styles.css`/`index.html`, no service worker, versioned only by `styles.css?v=N` (now 10), `WHATS_NEW` in app.js, key `sheatrainer.textSize`; textSize is in its backup export/import.
- **StahlReviewer** (Psychopharmacology Trainer): one inline `index.html`, no version scheme, no service worker, key `psychopharm-trainer-textSize`.
- **MemorablePsychiatry** (Psychiatry Mnemonic Reviewer): `app.js`/`style.css`/`sw.js`, versioned by README "Pass N" + index badge + cache `pmr-passN-v1` (now Pass 19 / v1.18.0), key `pmr-textSize`; all px font sizes converted to rem.
- Attribution months: only Usap Tayo and MSE Trainer say November 2026; KaplanStudy and the five above still say October 2026 (never updated per release in their history), left as is.
- Not touched: `case-psychinterview` (case presentation slides) and `reviewpsychinterview` (an older copy of MSE Trainer), judged not to be study apps she uses day to day; ask if she wants them done.
