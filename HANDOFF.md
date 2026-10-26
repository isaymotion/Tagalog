# Usap Tayo — handoff

## 1. Project and audience
- **What:** "Usap Tayo" (Tagalog for "let's talk"), an offline-capable web app teaching English speakers fluent Tagalog, with a psychiatry track for residents and nurses at Mariveles Mental Wellness and General Hospital (MMWGH), Bataan.
- **Owner:** Ma. Isabella P. Navarro, MD, incoming PGY-1 psychiatry resident at MMWGH. Nurses there also request features.
- **Repo:** github.com/isaymotion/Tagalog (git remote also works as `isaymotion/tagalog`). Branches: `main` = the app (served by GitHub Pages); `dev-tools` = tests + this doc (not published).
- **Live:** https://isaymotion.github.io/tagalog/ (Pages deploys `main` root automatically).
- **Current version:** 1.8.1 (Oct 2026). Service worker cache `usaptayo-1.8.1`.
- **Linked app:** MSE Trainer, repo `isaymotion/MSEtrainer`, live https://isaymotion.github.io/MSEtrainer/ (see section 10).

## 2. Fixed rules
- Attribution string (footer, About, PDFs), exact: `App created by Isabella Navarro, MD. Latest version October 2026. isaymotion@gmail.com` (in `js/data/meta.js` → `APP_META.attribution`). Update the month/year in it only when the release month changes.
- Every release: add an entry at the TOP of `WHATS_NEW` in `meta.js`, bump `APP_META.version`, bump `VERSION` in `sw.js` (`usaptayo-X.Y.Z`), add any new JS files to the `FILES` list in `sw.js`.
- **Never** put patient names, ages, record numbers, staff names, signatures, or license numbers into the app or repo. Users send photos of real hospital forms: use only the form's structure (field names, order, form number).
- Hospital forms already used: de-escalation checklist `MMH-NUR-04-112-01`; discharge summary `MMH-MED-04-04-02` (stored in `APP_META.institution`); Readmission Form `MMH-MED-04-26-02` (page 1: identifiers, chief complaints in Tagalog quotes, HPI, past psychiatric history, medical history, substance use) and `MMH-MED-04-26-01` (page 2: MSE, PE, vital signs, diagnosis, plan, admitting physician); only its MSE order is used, in `psych-admit-mse.js`. The **initial admission form** is still to come from her (Liza's MSE case waits for it). User approved showing hospital name/address and form numbers; government seals are not reproduced.
- Psychiatry phrases are practice phrasings, not validated instrument translations; keep that disclaimer (About, handouts). Don't reproduce copyrighted tests (MMSE text, C-SSRS).
- Every psychiatry phrase has `f` (respectful, po/kayo) and `c` (everyday/Taglish) forms. Avoid stigmatizing terms (baliw, adik) except in the "stigma" dictionary category.
- Crisis line shown: NCMH Crisis Hotline 1553 (24/7), plus 0919-057-1553, 0917-899-8727 (per Jan 2026 report).
- Commits authored as `Isabella Navarro <isaymotion@gmail.com>` with the Claude co-author trailer. Push straight to `main` (user's repo, no PR flow).
- Writing style in UI copy: plain, active, no em-dash asides.

## 3. Architecture and data formats
Static site, vanilla JS, no build step. `index.html` loads scripts in order: data files → `conjugate.js` → `audio-key.js` → `core.js` → `views.js` → `psych-views.js` → `handout.js` → `deesc.js` → `discharge.js` → `discharge-practice.js` → `mse-practice.js` → `app.js`. Hash routing (`#/path?query`) in `app.js` `routes`.

| File | Contents |
|---|---|
| `js/data/dict-*.js` | `DICT_RAW` lines: `tagalog|english|pos|category|root|note` e.g. `bumubulong|is whispering|v|mind|bulong` |
| `js/data/verbs.js` | `{ r:'kain', en:'eat', a:['um','in'], o:{in:[inf,com,inc,con]}, clinical:true, ex:'TL|EN' }` |
| `js/data/lessons.js` | `{ id, level, unit, title, summary, body:HTML, quiz:[[q,[opts],correctIdx,expl]] }` |
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
| `js/data/meta.js` | `APP_META`, `WHATS_NEW`, `PLACEMENT` |
| `js/core.js` | storage (`localStorage` key `usaptayo.v1`), dictionary index, root-word stemmer `App.findRoots`, search, SRS, speech (`App.speakAsync`, audio pack first, then Filipino device voice, then id/ms/es voice, never English) |
| `js/handout.js` | handout/PDF generator (pdfmake in `js/vendor/`, lazy-loaded); presets `full, mse, risk, pocket, discharge, deesccard, everything` |
| `audio/` | `manifest.json` + `<16-hex>.mp3` clips; key = `AudioKey(text)` in `js/audio-key.js` (NFC, trim, collapse spaces, lowercase, two FNV-1a 32-bit hashes over UTF-8) |
| `tools/` | `collect-texts.js` (lists all speakable Tagalog → `texts.json`), `make_audio_pack.py` (edge-tts `fil-PH-BlessicaNeural`; `--engine mms` alt) |
| `.github/workflows/audio-pack.yml` | records missing clips on push to `js/data/**`, `tools/**`, or the workflow; manual dispatch with voice/rate/rebuild |

Phrase card IDs: `p:<sectionId>:<index>`, so **only append** phrases to a section; never reorder or insert (it would break users' flashcard progress and refs).

## 4. Per-feature recipe
1. Add content in `js/data/` (new file → add `<script>` to `index.html` before `meta.js`, and to `tools/collect-texts.js` file list, and `sw.js` FILES).
2. New page → view function in a `js/*.js` file (`App.views.x = (el, params, query) => {...}`), route in `app.js`, link tile in `psych-views.js` hub (and `core.js` search index `Page` list).
3. Styles appended to `css/style.css` using existing tokens (light/dark).
4. Printable version → option + preset in `handout.js` (render in both `renderHTML` and `docDef`; the PDF font lacks some glyphs, see pitfalls).
5. Release bookkeeping (section 2), README table row.
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
Baseline (v1.8.0): data_check prints `{"version":"1.8.0","dict":1658,"sections":27,"phrases":401,"cases":6,"lessons":22,"reading":12,"dialogues":8,"verbs":78,"dcases":5,"mcases":1}` and `DATA OK`; smoke prints PDF page counts (full 12, mse 6, risk 6, pocket 15, discharge 4, deesccard 2, everything 30) and `SMOKE OK · 49 routes × 2 viewports` (smoke also runs discharge practice flows on Ramon, Liza and Mika, the command-hallucination flag, and the admission MSE flow on Ramon). Audio: 3515/3515 clips (includes 119 MSE Trainer lines).
Last verified clean: 2026-10-26 after the 1.8.0 release (both tests pass).

## 6. Status
| Area | Done |
|---|---|
| Core learning | Dictionary 1,658 (root search), search, SRS flashcards + mistakes deck, verb trainer (78 verbs), 22 lessons, 12 readings, 8 dialogues, placement, progress/backup, settings, What's New, About, dark/light, back/forward, PWA offline |
| Psychiatry | 27 sections / 396 phrases, 6 case sims, 28 interpretation items, interview flow + MSE structure |
| Handouts | PDF/print generator, 7 presets, English show/hide/answer key, A4/Letter/A5/A6 |
| De-escalation | Checklist (MMH-NUR-04-112-01), rapid drill, "if it fails" guide, practice case, A6 pocket card |
| Discharge | Guided field-by-field assessment (MMH-MED-04-04-02), summary with safety flags, printable guide; practice cases (`#/psych/dcases`, `#/psych/dcase/<id>`): Ramon (schizophrenia, teach-back error, restraint only in chart), Liza (recurrent MDD, passive death wish found only by the 3rd suicide question), Carlo (bipolar I, mania settling, lithium, impaired social judgment), Arnel (methamphetamine-induced psychosis, "konti lang, pang-puyat" relapse plan), Mika (first-episode schizophrenia, command hallucinations, model decision = defer). Discharge-or-defer decision at the end. 1.7.0 also appended picks (new drugs/diagnoses, command hallucinations, deferred discharge) and 5 questions to the real assessment, plus a command-hallucination flag. Best scores in `state.done.dcases` |
| Admission MSE | `#/psych/mcases`: Readmission Form MSE order, chief complaint MCQ, 13 domains, evidence questions, form-style self-check, admission vs discharge comparison. Case: Ramon. Liza waits for the initial admission form |
| Audio | 3,515 clips (incl. MSE Trainer lines), Filipino neural voice, auto-updating GitHub job |

## 7. Next steps (offered to the user, not yet chosen)
Shipped 2026-10-26: 1.6.0 discharge practice, 1.7.0 three more discharge cases, 1.8.0 admission MSE practice (with admission vs discharge comparison). 1.8.1 added links to the MSE Trainer and records its Tagalog lines. Next release = **1.9.0**, cache `usaptayo-1.9.0`.
- **Waiting on her:** the Tagalog review workbook `tagalog-review-2026-10.xlsx` (413 draft lines: 119 MSE Trainer, 294 Usap Tayo from 1.6–1.8). When she sends it back, apply each "Fix" row (column A says where: MSE Trainer case id, `discharge:<n>`, `dcase <id>`, `mcase <id>`), rerun `tools/import-msetrainer.js` if MSE Trainer lines changed, and push both. Rebuild the workbook with `tests/msetrainer/review_collect.js` + `review_build.py`.
- **Waiting on her:** initial admission form photo → Liza's admission MSE case (same pattern as Ramon; she is a first admission at MMWGH). Check whether the initial form's MSE section matches the readmission order; if not, add a second domain list keyed by `form` on the case.
- Admission MSE cases for Carlo (flight of ideas, pressured speech, clanging in Tagalog), Arnel, and Mika (thought blocking): offered, good for formal thought disorder practice.
- Nurse version: she will get the nurses' forms first.
- Printable case sheet for discharge/MSE cases (not in handouts yet).
- Filipino take-home sheet for patient/family (meds schedule, follow-up, warning signs, hotline) from discharge fields.
- More hospital forms in the same pattern (admission/intake, progress notes): she would send photos.
- Match department-standard documentation wording.
- Earlier suggestions not yet done: patient/family handouts in Filipino (diagnosis/meds), Filipino safety-plan form, "my handout" builder from starred phrases, pronunciation stress marks, QR codes on handouts.
- Verify "if it fails" guide (restraint/monitoring intervals) against MMWGH policy if she sends it.

## 8. Pitfalls learned
- Network is allowlisted (package registries + GitHub only). Google Fonts, Hugging Face, Microsoft speech endpoints are blocked here; that's why audio is recorded by the GitHub Actions job. `gh` GraphQL is blocked: use `gh api` REST (e.g. `gh workflow run` fails; the dispatch POST works). Enabling Pages via API is blocked (already enabled).
- Action logs can't be downloaded here; the audio job writes `audio/last-run.json` (counts + sample errors) and commits it even on failure.
- `make_audio_pack.py` args starting with `-` must use `=`: `--rate=-5%` (else argparse exit 2).
- edge-tts can hang without a timeout; script uses 45 s per clip, early stop if 40 clips fail, `--max-minutes 50`. Occasional `NoAudioReceived` → just rerun the job (only missing clips are made).
- pdfmake's Roboto lacks `→` and `☐`: `fixGlyphs()` swaps `→`→`»`; draw checkboxes as tiny tables. Never JSON-clone a doc definition (it drops layout functions).
- `App.handoutDoc(o)` fills defaults; tests must pass a preset's `o`.
- Starting a server with `&` then `pkill` makes the Bash call exit 144; use `run_in_background`.
- Background watchers die at their time limit; poll `gh run view <id> --json status,conclusion`.
- A phrase section's indexes are IDs; append only.
- New discharge questions go in the `MORE` list at the end of `psych-discharge.js` (appended to the section and to the end of the field's `ask`), never into `FIELDS[].ask`.
- New picks are plain strings, so appending them is safe; smoke tests click picks by index, so append rather than insert.
- `version: 'X'` appears in both `APP_META` and `WHATS_NEW`; match `  version: 'X',\n  updated` when bumping.
- Discharge practice answers are keyed by question index within a discharge field's `ask`. Changing `psych-discharge.js` asks would both break phrase IDs and misalign case answers: append only.
- `.eyebrow` is uppercased by CSS, so Playwright `inner_text` returns capitals; compare lowercased.
- `js/views.js` creates `App.views`; later view files must not reassign it (`discharge-practice.js` and `mse-practice.js` use `App.views || {}` so data_check can load them in Node for the grader).
- Element screenshots on phone show the sticky header over the card; that's an artifact, not a layout bug.
- Medication/diagnosis "picks" in discharge mirror the form's examples (olanzapine, fluphenazine decanoate); keep them generic with blanks.

## 9. Files to re-attach
None required. The user's photos of hospital forms (including the readmission form, 2026-10-26) contained patient data and were deliberately not saved; ask her for a fresh photo only if a new form is being added. The app icon is already in `icons/`.

## 10. MSE Trainer (isaymotion/MSEtrainer)
- Separate study app (Shea-based, 462 cases). No build step: `index.html`, `css/style.css`, `js/data.js` (English cases, terms, `T()`), `js/data-tl.js` (Tagalog cases + "Culture or pathology?" domain `fc`, 10 terms), `js/news.js` (What's New), `js/audio-key.js` (copy of ours), `js/app.js`. Attribution line in its footer and README: `Made by Isabella Navarro, MD. Latest version October 2026. isaymotion@gmail.com` (keep exact; update month only). She chose: push directly to its `main` (2026-10-26).
- Tagalog case format: `lang:'tl'`, C:/P: lines `Tagalog || English` (English hidden until answered), `ask:'tl || en'`, optional `dom:'fc'` to file a standard-term case under Culture or pathology?. Tagalog cases are original (not Shea) and say so; terms still cite Shea chapters.
- Audio: it plays our clips from `https://isaymotion.github.io/tagalog/audio/<AudioKey>.mp3` (manifest fetched cross-origin). After changing its Tagalog lines: `node tools/import-msetrainer.js /home/claude/msetrainer` here (writes `tools/extra-texts/msetrainer.txt`; `collect-texts.js` reads every `tools/extra-texts/*.txt`), commit, push; the audio job records them. Text in parentheses (stage directions) is skipped by both sides (`speakable()`).
- "Sa Tagalog" card on every MSE/culture case links into our stable routes `#/psych/s/<section>` and `#/lessons/<id>` (maps `UT_DOM`/`UT_TERM` in its app.js). Never rename those section or lesson ids.
- Its deep links: `#/practice?lang=tl&dom=fc`, `#/practice?drill=<term>`; views `#/practice|glossary|progress|new|about`. Prefs `dv:5` (a saved dv:4 list of 26 domains counts as "all").
- Tests (kept here, not in its repo): `node tests/msetrainer/data_check.js /home/claude/msetrainer` → `{"cases":462,"terms":419,"domains":27,"tagalog":42,"culture":15}` `DATA OK`; serve it on 8766 and `python3 tests/msetrainer/smoke.py http://localhost:8766/index.html <scratchpad>/mse` → `SMOKE OK` (phone dark + desktop light, deep link, hidden English, Ask it in Tagalog, Sa Tagalog, views, back/forward, theme cycle, menu, backup export/import round trip).
- Clone: `git clone https://github.com/isaymotion/msetrainer /home/claude/msetrainer` (add the repo to the session first; the remote prints a "moved to MSEtrainer" notice, harmless).
