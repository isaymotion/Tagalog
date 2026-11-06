# Usap Tayo: Tagalog for Clinicians

<img src="icons/icon-192.png" alt="Usap Tayo icon" width="96" align="right">

*Usap tayo* means "let's talk." This web app teaches English speakers to become fluent in conversational Tagalog (Filipino), with a training track for psychiatric interviews with Filipino-speaking patients.

**App created by Isabella Navarro, MD. Latest version November 2026. isaymotion@gmail.com**

Version **3.0.0** (2026-11-06): design refresh to match the other isaymotion apps.

## What's inside

| Section | What it does |
|---|---|
| **Psychiatry Tagalog** | 33 sections (452 phrases) covering opening and consent, HPI, depression, mania, anxiety/OCD, trauma, hallucinations, delusions, suicide and violence risk, de-escalation, substances (screening criteria, betel nut, gambling, AUDIT-C and Fagerström, motivational interviewing), history, collateral, MSE (cognition, abstraction, observations), explaining diagnosis, medication side effects, admission, children, elderly patients, closing, and Shea's validity techniques (gentle assumption, symptom amplification, denial of the specific, behavioral incidents, shame attenuation, normalization, anchor questions; draft for review). Each phrase has a respectful (*po*) form and an everyday/Taglish form. Every section links to the chapter of the [Psychiatric Interviewing Trainer](https://isaymotion.github.io/sheatrainer/) that teaches the technique behind it, and the trainer's study guides link back. |
| **Case simulations** | 7 interactive interviews (first-episode psychosis, depression with suicide risk, mania, delirium, alcohol withdrawal, agitated patient, betel nut use disorder) with feedback and an MSE summary. |
| **Mood episode** | Tap-to-count DSM-5-TR checker: depressed mood + SIGECAPS (gate + 5 of 9, two weeks) and elevated/expansive or irritable mood + DIGFAST (3 of 7, or 4 if only irritable; mania vs hypomania by duration, hospitalization and psychosis), with features, a copyable chart line, and the PHQ-9 and MDQ in Tagalog. Nothing is saved. |
| **Substance use** | Screen betel nut (nganga, bunga, mama, buyo, hitso), tobacco, alcohol, shabu, cannabis, other substances and gambling on the DSM-5-TR criteria in Tagalog; mild / moderate / severe, remission and other specifiers, ICD-10-CM code and a copyable chart line (nothing is saved). AUDIT-C and Fagerström scored on the page. Six-step motivational interview with substance-specific psychoeducation, a nurse screening and brief-advice script (Resident / Nurse switch), and a betel nut case simulation. Criteria paraphrased from DSM-5-TR. |
| **Withdrawal and agitation** | Bedside teaching reference condensed from the OpenEvidence *Alcohol and Cannabis Withdrawal Guide*, with the patient-facing parts in Tagalog with audio. **Alcohol:** risk history, the PAWSS and the CIWA-Ar scored on the page (nothing saved) with a copyable chart line and a plan by band; time course, differential, level of care, thiamine and electrolytes, symptom-triggered / fixed / front-loaded benzodiazepines, phenobarbital, benzodiazepine-resistant withdrawal, adjuncts, AUD medication before discharge. **Cannabis:** the seven DSM-5-TR withdrawal symptoms with an Oo/Hindi counter, cannabinoid hyperemesis (CHS) questions and table, symptom-targeted and investigational treatment, time course explained to the patient. **Agitation:** safety screen, environment, Project BETA's 10 domains with a Tagalog line each, medication by cause, adult medication reference, trials, safety issues, restraint last. **Special populations** (cirrhosis, older adults, pregnancy, adolescents), four practice cases, a quick card, and a Nurse view with a monitoring script and escalation rules (pending Nursing Service review). |
| **MSE interviewer sheet** | Four A4 pages of Tagalog screening questions for the OPD and wards: opening, mood, depression (D-I-S-A-E-C-G-P), suicide (screen → explore → protective factors), mania (D-S-A-F-P-I-G-R), hallucinations, delusions by type, anger and impulse control, violence, substances, anxiety, cognition, insight and judgment, closing, the observed MSE, then substance use screening and the brief intervention. Print from the app, download the ready-made PDF (`handouts/`), show or hide English, tap to listen. Phrases marked UT are shared with the rest of the app. |
| **Printable handout** | PDF or print of the interview flow and MSE. English can be shown, hidden, or moved to an answer key. Presets: Full interview + MSE, MSE only, Risk assessment, Pocket booklet (A5), Complete reference. Works offline. |
| **De-escalation checklist** | Based on Mariveles Mental Wellness and General Hospital form MMH-NUR-04-112-01. Tabs for the bedside checklist, a rapid audio drill, an "if it fails" guide (restraint, monitoring, debrief), and a practice case. A6 pocket card in the handout generator. Interactive 12-step checklist with Tagalog phrases for each step, behaviors observed, outcome, escalation path (NAOD → NOD, notify POD), and a copyable chart note. Printable blank version in the handout generator. |
| **Discharge assessment** | Guided walk through each field of the hospital Discharge Summary form (MMH-MED-04-04-02): what to assess, Tagalog questions with audio, tap-to-document wording, and a copyable summary with safety flags. Printable question guide. |
| **Discharge practice** | Simulated discharge interviews: ask the form's questions, hear the patient answer in Tagalog, document each field, check it against a model answer, and compare the full discharge MSE at the end. |
| **Admission MSE practice** | Simulated admission interviews in the order of the Readmission Form MSE (MMH-MED-04-26-01/02): chief complaint in the informant's words, each MSE domain checked against a model, evidence questions, and an admission vs discharge comparison. |
| **Interpretation drill** | 28 patient and family statements with meaning and clinical significance. |
| **Dictionary** | About 1,650 entries, English → Filipino and Filipino → English, with root-word search (`kinakain` finds `kain`, `binubulungan` finds `bulong`). |
| **Universal search** | One search bar (press `/`) across words, phrases, lessons, readings, dialogues, cases, and verbs. |
| **Flashcards** | Spaced repetition with topic decks, psychiatry decks, verb-form decks, and an automatic "My mistakes" deck. |
| **Verb trainer** | 78 verbs across -um-, mag-, ma-, -in, i-, -an with type-the-form, multiple-choice, and identify-the-aspect drills, plus 628 natural sample sentences (one set per aspect, most of them bedside lines) with fill-the-blank and translate-the-sentence drills. |
| **Panlapi (affix trainer)** | Take words apart into root and affix: unlapi, gitlapi, hulapi, kabilaan, laguhan. 216 words (120 clinical), 9 sound-change and placement rules, 26 affix meanings, and four drills (name the type, find the root, build the word, choose the affix the sentence forces). `js/data/affixes.js`, `js/affixes.js`, route `#/affixes`. |
| **Grammar handouts** | Printable references with a Print handout button on the pages they come from. Panlapi: affix cheat sheet, sound-change rules, word list with the affix marked, worksheet and answer key. Verbs: conjugation tables for all, clinical or one verb, example sentences per aspect, an aspect-at-a-glance page, worksheet and key. Lessons: any lesson with its quiz and an answer key. Hide English where it applies, A4/Letter/A5, PDF or print. |
| **Lessons** | 23 grammar and culture lessons with quizzes: markers, focus, aspect, particles, po/opo, numbers/time/money, Taglish, hiya, utang na loob, folk beliefs, idioms of distress. |
| **Reading** | 12 graded passages (A1–B2) with glossaries and comprehension questions. |
| **Speaking** | Dialogues in Listen, Shadow, and Role-play modes, with text-to-speech, speech recognition, and record-and-compare. |
| **You** | Placement test, streaks, XP, progress stats, backup export/import, settings, What's New, About. |

## Version 3.0.0: design refresh

- **Same look as the other isaymotion apps**: shared colour tokens, buttons, cards and footer, with Usap Tayo's navy and gold kept. Top bar, desktop side rail, the five phone tabs (Home, Psychiatry, Practice, Cards, More) and every screen and link work as before.
- **More opens a grouped menu** on phones and tablets (under 1100px): Recent pages at the top, then Home and Practice; **Learn** (Lessons, Reading, Speaking, Dictionary); **Drill** (Flashcards, Verb trainer, Panlapi, Placement test); **Interview** (Psychiatry Tagalog, Case simulations, What is the patient saying?, Admission MSE practice, Discharge practice); **Clinical tools** (Mood episode checker, Substance use, Withdrawal and agitation, De-escalation, Discharge assessment, MSE interviewer sheet, Printable handout); **App** (Progress, Settings, What's New, About). The desktop rail uses the same groups, and `#/more` shows the same list as a page.
- **Footer on every page** with What's new, About, Settings, a **backup panel** (export, import with a confirmation, and *Undo last import*; installed phone apps get the share sheet), the attribution and a disclaimer. Export and import on the Progress and Settings pages use the same functions.
- **Theme button** cycles Match device → Light → Dark (the Settings page has the same three choices); the browser bar colour follows. **Aa** keeps the four text sizes.
- **Language of the app's own labels** (menu groups, footer, backup) can be switched to Tagalog on the About page. The Tagalog wording is a draft for review; lessons and phrases are bilingual as before.
- On phones the search box sits on its own row under the top bar so the full placeholder shows; all top-bar buttons are 44px. Back/forward also work with Alt+Left/Right and return to where you were on the page.
- **Fix:** the offline cache no longer deletes the other isaymotion apps' offline files when Usap Tayo updates (all the apps share isaymotion.github.io).

**Upgrading from 2.9.1: nothing to do.** Progress stays where it was (`usaptayo.v1` in the browser), and backup files made with 2.9.1 or earlier still restore with *Import backup*.

Also: a tabbed Psychiatry hub (Interview, Cases, Ward tools, Print), a Practice tab listing every drill, a Home screen built around today (cards due, a rotating quick practice, next lesson, pinned and recent pages), pin-to-Home stars on every page, uniform breadcrumbs, match-device/light/dark theme, adjustable text size (Aa button), back/forward buttons, offline support, and install-to-home-screen (PWA).

## Publish it with GitHub Pages

1. On GitHub, open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
3. After a minute the app is live at `https://isaymotion.github.io/tagalog/`.
4. On a phone, open that link, then use **Add to Home Screen** (iPhone Safari) or **Install app** (Android Chrome).

To try it locally: run `python3 -m http.server` in this folder and open `http://localhost:8000`. (Opening `index.html` directly also works, but offline mode needs a web server.)

## Audio pack (natural Filipino voice)

Browsers on most phones have no Filipino voice, so Tagalog read by the device sounds wrong. The app therefore plays recorded clips from `audio/` whenever they exist.

The clips are made by the GitHub Actions job **Build Tagalog audio pack** (`.github/workflows/audio-pack.yml`):

1. On GitHub, open the **Actions** tab. If asked, click **I understand my workflows, go ahead and enable them**.
2. Choose **Build Tagalog audio pack** → **Run workflow**. Pick the voice (Blessica, female; Angelo, male) and rate, then **Run workflow**.
3. In about 10–20 minutes the job commits roughly 3,000 MP3 clips (about 40 MB) to `audio/`. The app uses them automatically.

The job also runs by itself whenever files in `js/data/` change, so new phrases get audio. To change the voice for everything, run it with **Re-record every clip** ticked.

How it works: `tools/collect-texts.js` lists every Tagalog string the app can speak; `tools/make_audio_pack.py` records each one (file name = hash of the text, see `js/audio-key.js`) and writes `audio/manifest.json`. The default engine is Microsoft's neural Filipino voices via the open-source `edge-tts` client, an unofficial client of Microsoft's free Read Aloud service, fine for a free educational app but not a paid API. The script also supports Meta's open MMS Tagalog model (`--engine mms`, CC BY-NC 4.0), which is lower quality but fully open.

Without the pack, the app uses a Filipino device voice if one is installed (Android: Google Text-to-speech → Filipino; Microsoft Edge on a computer), otherwise the closest available voice (Indonesian, Malay, or Spanish), never English.

## Speech features

- **Text-to-speech** uses the device's voices. Quality is best with a Filipino voice installed: on Android, Google Text-to-speech → install Filipino; Chrome on desktop often includes one. Choose the voice in **Settings → Voice**.
- **Speech recognition** (scoring your spoken lines) works in Chrome and Edge. Other browsers can still use **Record** to play back and compare.

## Adding content

All content lives in plain JavaScript files under `js/data/`. No build step.

- **Dictionary words**: add a line to any `dict-*.js` file in the form `tagalog|english|pos|category|root|note`.
- **Psychiatry phrases**: add `{ en, f, c, n }` objects to a section in `psych-phrases.js` (`f` = respectful form, `c` = everyday form, `n` = note).
- **Shea technique phrases and trainer links**: `psych-shea.js` holds the "Asking so the truth can come out" section (appended to `PSYCH_SECTIONS`, so other indexes stay stable) and `SHEA_LINKS`, the map from each psychiatry section to a chapter and section of the Psychiatric Interviewing Trainer. Set `REVIEWED = true` there once the wording has been checked, to remove the draft notice.
- **Withdrawal and agitation**: `psych-withdrawal.js` holds the Tagalog lines (`ALC_ASK`, `PAWSS`, `CIWA`, `CAN_CRIT`, `AGIT_LINES`, `NURSE`, …) and the English reference cards (`ALC_REF`, `CAN_REF`, `AGIT_REF`, `SPECIAL`, `CASES`). Set `REVIEWED = true` once the Tagalog has been checked, to remove the draft notice. Doses come from the teaching guide; edit them there if the hospital protocol differs.
- **Cases and interpretation items**: `psych-cases.js`.
- **Handout order and MSE table**: `psych-flow.js` (interview steps, key phrases for pocket cards, MSE domains).
- **Lessons, readings, dialogues, verbs**: `lessons.js`, `reading.js`, `dialogues.js`, `verbs.js`, `verb-sentences.js` (sample sentences per verb and aspect).
- **What's New**: add a new entry at the top of `APP_CHANGELOG` in `data/changelog.js` (semver `version`, ISO `date`, items typed `feature`, `update`, `correction` or `content`), then set the same `version` (and `updated` month) in `data/app-meta.js`.

After changing files, bump `VERSION` in `sw.js` (`PREFIX + 'x.y.z'`, the same number as `data/app-meta.js` and the newest changelog entry) so installed copies pick up the update. The service worker only deletes caches whose names start with `usaptayo-`, and keeps `usaptayo-audio`; never change that rule, because every isaymotion app shares the same site.

## Important note on clinical content

The Withdrawal and agitation page is a study aid condensed from a teaching guide; doses are typical adult doses and must be checked against the hospital protocol, organ function and interactions. Psychiatry phrases are practice phrasings written for training. They are not validated translations of research instruments (such as the PHQ-9 or C-SSRS). Use validated Filipino versions where your institution requires them, and confirm wording with supervisors, nurses, and patients. The cognitive items are bedside questions written for this app and do not reproduce copyrighted tests. Regional languages (Cebuano, Ilocano, Hiligaynon, and others) are not covered.

Crisis line in the Philippines: NCMH Crisis Hotline **1553** (24/7).

## Project structure

```
index.html              App shell
manifest.webmanifest    Install metadata
sw.js                   Offline cache
css/style.css           Styles: shared isaymotion tokens (light and dark), shell, screens
data/app-meta.js        Name, version, attribution, institution, APP_LINKS (Other apps menu, off)
data/changelog.js       What's New (APP_CHANGELOG)
data/hospital.js        Shared hospital and program constants (same file in every app)
data/strings.js         English and Tagalog (draft) labels for the menu, footer and backup
icons/                  App icons
js/core.js              Storage, dictionary index, root-word stemmer, search, spaced repetition, speech
js/conjugate.js         Verb conjugation engine
js/views.js             Main pages
js/psych-views.js       Psychiatry pages
js/handout.js           Printable handout / PDF generator
js/mse-sheet.js         MSE interviewer sheet (four-page print view)
js/sud.js               Substance use screening, brief intervention, nurse script
js/mood.js              Mood episode checker (SIGECAPS, DIGFAST, PHQ-9, MDQ)
js/withdrawal.js        Withdrawal and agitation: PAWSS, CIWA-Ar, cannabis withdrawal counter, teaching reference, nurse script
js/affixes.js           Panlapi affix trainer: type, root, build and focus drills over js/data/affixes.js
js/grammar-handout.js   Grammar handout generator (#/affixes/handout, #/verbs/handout, #/lessons/handout): Panlapi, verbs and lesson topics, lesson HTML to PDF converter, PDF via App.pdfKit
handouts/               Ready-made PDFs (Tagalog MSE Interviewer Guide)
js/vendor/              pdfmake (PDF library, MIT license)
js/app.js               Routing, rail / tab bar / More drawer, back-forward, theme, text size, search bar, backup
js/data/                All content
```
