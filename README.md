# Usap Tayo: Tagalog for Clinicians

<img src="icons/icon-192.png" alt="Usap Tayo icon" width="96" align="right">

*Usap tayo* means "let's talk." This web app teaches English speakers to become fluent in conversational Tagalog (Filipino), with a training track for psychiatric interviews with Filipino-speaking patients.

**App created by Isabella Navarro, MD. Latest version October 2026. isaymotion@gmail.com**

## What's inside

| Section | What it does |
|---|---|
| **Psychiatry Tagalog** | 26 sections (343 phrases) covering opening and consent, HPI, depression, mania, anxiety/OCD, trauma, hallucinations, delusions, suicide and violence risk, de-escalation, substances, history, collateral, MSE (cognition, abstraction, observations), explaining diagnosis, medication side effects, admission, children, elderly patients, and closing. Each phrase has a respectful (*po*) form and an everyday/Taglish form. |
| **Case simulations** | 6 interactive interviews (first-episode psychosis, depression with suicide risk, mania, delirium, alcohol withdrawal, agitated patient) with feedback and an MSE summary. |
| **MSE interviewer sheet** | Two A4 pages of Tagalog screening questions for the OPD and wards: opening, mood, depression (D-I-S-A-E-C-G-P), suicide (screen → explore → protective factors), mania (D-S-A-F-P-I-G-R), hallucinations, delusions by type, anger and impulse control, violence, substances, anxiety, cognition, insight and judgment, closing, and the observed MSE. Print from the app, download the ready-made PDF (`handouts/`), show or hide English, tap to listen. Phrases marked UT are shared with the rest of the app. |
| **Printable handout** | PDF or print of the interview flow and MSE. English can be shown, hidden, or moved to an answer key. Presets: Full interview + MSE, MSE only, Risk assessment, Pocket booklet (A5), Complete reference. Works offline. |
| **De-escalation checklist** | Based on Mariveles Mental Wellness and General Hospital form MMH-NUR-04-112-01. Tabs for the bedside checklist, a rapid audio drill, an "if it fails" guide (restraint, monitoring, debrief), and a practice case. A6 pocket card in the handout generator. Interactive 12-step checklist with Tagalog phrases for each step, behaviors observed, outcome, escalation path (NAOD → NOD, notify POD), and a copyable chart note. Printable blank version in the handout generator. |
| **Discharge assessment** | Guided walk through each field of the hospital Discharge Summary form (MMH-MED-04-04-02): what to assess, Tagalog questions with audio, tap-to-document wording, and a copyable summary with safety flags. Printable question guide. |
| **Discharge practice** | Simulated discharge interviews: ask the form's questions, hear the patient answer in Tagalog, document each field, check it against a model answer, and compare the full discharge MSE at the end. |
| **Admission MSE practice** | Simulated admission interviews in the order of the Readmission Form MSE (MMH-MED-04-26-01/02): chief complaint in the informant's words, each MSE domain checked against a model, evidence questions, and an admission vs discharge comparison. |
| **Interpretation drill** | 28 patient and family statements with meaning and clinical significance. |
| **Dictionary** | About 1,650 entries, English → Filipino and Filipino → English, with root-word search (`kinakain` finds `kain`, `binubulungan` finds `bulong`). |
| **Universal search** | One search bar (press `/`) across words, phrases, lessons, readings, dialogues, cases, and verbs. |
| **Flashcards** | Spaced repetition with topic decks, psychiatry decks, verb-form decks, and an automatic "My mistakes" deck. |
| **Verb trainer** | 78 verbs across -um-, mag-, ma-, -in, i-, -an with type-the-form, multiple-choice, and identify-the-aspect drills. |
| **Lessons** | 22 grammar and culture lessons with quizzes: markers, focus, aspect, particles, po/opo, numbers/time/money, Taglish, hiya, utang na loob, folk beliefs, idioms of distress. |
| **Reading** | 12 graded passages (A1–B2) with glossaries and comprehension questions. |
| **Speaking** | Dialogues in Listen, Shadow, and Role-play modes, with text-to-speech, speech recognition, and record-and-compare. |
| **You** | Placement test, streaks, XP, progress stats, backup export/import, settings, What's New, About. |

Also: dark/light mode, back/forward buttons, offline support, and install-to-home-screen (PWA).

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
- **Cases and interpretation items**: `psych-cases.js`.
- **Handout order and MSE table**: `psych-flow.js` (interview steps, key phrases for pocket cards, MSE domains).
- **Lessons, readings, dialogues, verbs**: `lessons.js`, `reading.js`, `dialogues.js`, `verbs.js`.
- **What's New**: add a new entry at the top of `WHATS_NEW` in `meta.js`, and update `version` and `updated` in `APP_META`.

After changing files, bump `VERSION` in `sw.js` so installed copies pick up the update.

## Important note on clinical content

Psychiatry phrases are practice phrasings written for training. They are not validated translations of research instruments (such as the PHQ-9 or C-SSRS). Use validated Filipino versions where your institution requires them, and confirm wording with supervisors, nurses, and patients. The cognitive items are bedside questions written for this app and do not reproduce copyrighted tests. Regional languages (Cebuano, Ilocano, Hiligaynon, and others) are not covered.

Crisis line in the Philippines: NCMH Crisis Hotline **1553** (24/7).

## Project structure

```
index.html              App shell
manifest.webmanifest    Install metadata
sw.js                   Offline cache
css/style.css           Styles (light and dark themes)
icons/                  App icons
js/core.js              Storage, dictionary index, root-word stemmer, search, spaced repetition, speech
js/conjugate.js         Verb conjugation engine
js/views.js             Main pages
js/psych-views.js       Psychiatry pages
js/handout.js           Printable handout / PDF generator
js/mse-sheet.js         MSE interviewer sheet (two-page print view)
handouts/               Ready-made PDFs (Tagalog MSE Interviewer Guide)
js/vendor/              pdfmake (PDF library, MIT license)
js/app.js               Routing, navigation, theme, search bar
js/data/                All content
```
