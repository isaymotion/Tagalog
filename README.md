# Usap Tayo: Tagalog for Clinicians

<img src="icons/icon-192.png" alt="Usap Tayo icon" width="96" align="right">

*Usap tayo* means "let's talk." This web app teaches English speakers to become fluent in conversational Tagalog (Filipino), with a training track for psychiatric interviews with Filipino-speaking patients.

**App created by Isabella Navarro, MD. Latest version November 2026. isaymotion@gmail.com**

Version **3.9.3** (2026-11-17): the 3.9.2 recordings dropped the stressed vowel and are removed; last-syllable stress sentences are silent unless a side has an approved `say`. 3.9.2 (2026-11-17): last-syllable stress sentences re-recorded with a hyphen-and-accent respelling (`WORD_STRESS_SAY`), on the Stress pairs tab only. 3.9.1 (2026-11-17): stress pairs with a last-syllable stress are silent and the By ear set is off, because the voice stressed them wrongly. 3.9.0 (2026-11-17): daily mix, three more drills (switch the focus, find the mistake, stress pairs), false friends and look-alikes, C1 placement band. 3.8.0 (2026-11-17): six more lessons, four new drills, word families, 115 new words. 3.7.0: six lessons, three drills, 191 themed words. 3.6.3 (2026-11-16): unknown capitals spelled by default. 3.6.2: app-wide pronunciation fixes for abbreviations. 3.6.1: listening audio respelled for abbreviations. 3.6.0: listening handouts and three more recordings. 3.5.0: listening exercises and five harder readings. 3.4.0: print handouts for readings and dialogues. 3.3.0: admission MSE cases for Carlo, Arnel and Mika. 3.2.0: Resident / Nurse switch and six nurse phrase sections. 3.1.2: phone menu scrolls again. 3.1.1: point-board replies for all 38 sections, lesson example box fix. 3.1.0: point board (Ituro), listening drill, interpreter lesson, PHQ-9/MDQ source notes, language pack (`js/lang.js`).

## What's inside

| Section | What it does |
|---|---|
| **Psychiatry Tagalog** | 33 sections (452 phrases) covering opening and consent, HPI, depression, mania, anxiety/OCD, trauma, hallucinations, delusions, suicide and violence risk, de-escalation, substances (screening criteria, betel nut, gambling, AUDIT-C and Fagerström, motivational interviewing), history, collateral, MSE (cognition, abstraction, observations), explaining diagnosis, medication side effects, admission, children, elderly patients, closing, and Shea's validity techniques (gentle assumption, symptom amplification, denial of the specific, behavioral incidents, shame attenuation, normalization, anchor questions; draft for review). Each phrase has a respectful (*po*) form and an everyday/Taglish form. Every section links to the chapter of the [Psychiatric Interviewing Trainer](https://isaymotion.github.io/sheatrainer/) that teaches the technique behind it, and the trainer's study guides link back. |
| **Nurse phrases (Resident / Nurse switch)** | Psychiatry → Interview has a Resident / Nurse switch (`settings.role`, shared with the substance use and withdrawal nurse scripts). The Nurse view lists six nurse sections first (125 phrases: arriving on the ward, giving medicines and side effects, sleep and daily care, safety checks for suicide risk and agitation, calming things down, teaching patients and families), then the resident sections most used on the ward. Each nurse section has 10 point-board replies. Flashcards, search, point board and listening drill see every section in both views. `js/data/psych-phrases-nurse.js`, `js/data/psych-answers-nurse.js`. Draft for review; pending Nursing Service review. |
| **Point board (Ituro)** | When the patient's answer is too fast to follow, turn the phone around: the patient taps a reply, the phone speaks it and the interviewer reads the English. General replies (yes/no, how often, since when, how much, how I feel, I need…), a 0–10 scale spoken in Tagalog, and 7–11 likely replies for each of the 44 sections (`js/data/psych-answers.js`, draft for review). Patient view enlarges the tiles and hides the English; nothing is saved. Route `#/psych/point?s=<section>`. |
| **Listening drill** | Hear a patient or family reply at natural speed (slower or faster on request), choose its meaning from four, then see the Tagalog. Pool: the point-board replies, the interpretation drill and the case simulations; filter by section. Route `#/psych/listen?s=<section>`. |
| **Case simulations** | 7 interactive interviews (first-episode psychosis, depression with suicide risk, mania, delirium, alcohol withdrawal, agitated patient, betel nut use disorder) with feedback and an MSE summary. |
| **Mood episode** | Tap-to-count DSM-5-TR checker: depressed mood + SIGECAPS (gate + 5 of 9, two weeks) and elevated/expansive or irritable mood + DIGFAST (3 of 7, or 4 if only irritable; mania vs hypomania by duration, hospitalization and psychosis), with features, a copyable chart line, and the PHQ-9 and MDQ in Tagalog. Nothing is saved. |
| **Substance use** | Screen betel nut (nganga, bunga, mama, buyo, hitso), tobacco, alcohol, shabu, cannabis, other substances and gambling on the DSM-5-TR criteria in Tagalog; mild / moderate / severe, remission and other specifiers, ICD-10-CM code and a copyable chart line (nothing is saved). AUDIT-C and Fagerström scored on the page. Six-step motivational interview with substance-specific psychoeducation, a nurse screening and brief-advice script (Resident / Nurse switch), and a betel nut case simulation. Criteria paraphrased from DSM-5-TR. |
| **Withdrawal and agitation** | Bedside teaching reference condensed from the OpenEvidence *Alcohol and Cannabis Withdrawal Guide*, with the patient-facing parts in Tagalog with audio. **Alcohol:** risk history, the PAWSS and the CIWA-Ar scored on the page (nothing saved) with a copyable chart line and a plan by band; time course, differential, level of care, thiamine and electrolytes, symptom-triggered / fixed / front-loaded benzodiazepines, phenobarbital, benzodiazepine-resistant withdrawal, adjuncts, AUD medication before discharge. **Cannabis:** the seven DSM-5-TR withdrawal symptoms with an Oo/Hindi counter, cannabinoid hyperemesis (CHS) questions and table, symptom-targeted and investigational treatment, time course explained to the patient. **Agitation:** safety screen, environment, Project BETA's 10 domains with a Tagalog line each, medication by cause, adult medication reference, trials, safety issues, restraint last. **Special populations** (cirrhosis, older adults, pregnancy, adolescents), four practice cases, a quick card, and a Nurse view with a monitoring script and escalation rules (pending Nursing Service review). |
| **MSE interviewer sheet** | Four A4 pages of Tagalog screening questions for the OPD and wards: opening, mood, depression (D-I-S-A-E-C-G-P), suicide (screen → explore → protective factors), mania (D-S-A-F-P-I-G-R), hallucinations, delusions by type, anger and impulse control, violence, substances, anxiety, cognition, insight and judgment, closing, the observed MSE, then substance use screening and the brief intervention. Print from the app, download the ready-made PDF (`handouts/`), show or hide English, tap to listen. Phrases marked UT are shared with the rest of the app. |
| **Printable handout** | PDF or print of the interview flow and MSE. English can be shown, hidden, or moved to an answer key. Presets: Full interview + MSE, MSE only, Risk assessment, Pocket booklet (A5), Complete reference. Works offline. |
| **De-escalation checklist** | Based on Mariveles Mental Wellness and General Hospital form MMH-NUR-04-112-01. Tabs for the bedside checklist, a rapid audio drill, an "if it fails" guide (restraint, monitoring, debrief), and a practice case. A6 pocket card in the handout generator. Interactive 12-step checklist with Tagalog phrases for each step, behaviors observed, outcome, escalation path (NAOD → NOD, notify POD), and a copyable chart note. Printable blank version in the handout generator. |
| **Discharge assessment** | Guided walk through each field of the hospital Discharge Summary form (MMH-MED-04-04-02): what to assess, Tagalog questions with audio, tap-to-document wording, and a copyable summary with safety flags. Printable question guide. |
| **Discharge practice** | Simulated discharge interviews: ask the form's questions, hear the patient answer in Tagalog, document each field, check it against a model answer, and compare the full discharge MSE at the end. |
| **Admission MSE practice** | Simulated admission interviews in the order of the Readmission Form MSE (MMH-MED-04-26-01/02): chief complaint in the informant's words, each MSE domain checked against a model, evidence questions, and an admission vs discharge comparison. Four patients: Ramon (readmission), Carlo, Arnel and Mika. |
| **Interpretation drill** | 28 patient and family statements with meaning and clinical significance. |
| **Dictionary** | About 1,850 entries, English → Filipino and Filipino → English, with root-word search (`kinakain` finds `kain`, `binubulungan` finds `bulong`). |
| **Universal search** | One search bar (press `/`) across words, phrases, lessons, readings, dialogues, cases, and verbs. |
| **Flashcards** | Spaced repetition with topic decks, psychiatry decks, verb-form decks, and an automatic "My mistakes" deck. |
| **Verb trainer** | 78 verbs across -um-, mag-, ma-, -in, i-, -an with type-the-form, multiple-choice, and identify-the-aspect drills, plus 628 natural sample sentences (one set per aspect, most of them bedside lines) with fill-the-blank and translate-the-sentence drills. |
| **Panlapi (affix trainer)** | Take words apart into root and affix: unlapi, gitlapi, hulapi, kabilaan, laguhan. 216 words (120 clinical), 9 sound-change and placement rules, 26 affix meanings, and four drills (name the type, find the root, build the word, choose the affix the sentence forces). `js/data/affixes.js`, `js/affixes.js`, route `#/affixes`. |
| **Grammar handouts** | Printable references with a Print handout button on the pages they come from. Panlapi: affix cheat sheet, sound-change rules, word list with the affix marked, worksheet and answer key. Verbs: conjugation tables for all, clinical or one verb, example sentences per aspect, an aspect-at-a-glance page, worksheet and key. Lessons: any lesson with its quiz and an answer key. Hide English where it applies, A4/Letter/A5, PDF or print. |
| **Grammar drills** | `#/drills`: Choose the marker (ang/ng/sa, si/ni/kay, ito/iyan/iyon; 45 gap sentences with the reason), Build the sentence (32 sentences as word tiles, every natural order accepted, trains enclitic order), Formal or everyday (matches the respectful and everyday forms of every psychiatry phrase). Ten items a run, best scores saved. |
| **Grammar drills (3.8.0)** | Four more at `#/drills`: Find the root (495 dictionary words, wrong options are half-stripped forms), Word families (pick the form; deep word to everyday word; which is stronger), Numbers, times and doses (audio first, typed; the figure is also accepted), Say it in Tagalog (typed translation, every accepted answer listed, 80% word match counts). |
| **Word families** | `#/words`: 16 roots with the words built from them, 8 feeling ladders from mild to strong, 28 ideas in deep Filipino, everyday speech and Taglish. Dictionary entries link to their family; families are in search. |
| **Lessons** | 36 grammar and culture lessons with quizzes (3.7.0 added demonstratives, connectors, maka-/ma-, magpa-/pa-, requests, hedging and hearsay; 3.8.0 added enclitic order, time words, intensifiers, -an / i- / ipang- focus, noun-making affixes and the kaka- form): markers, focus, aspect, particles, po/opo, numbers/time/money, Taglish, hiya, utang na loob, folk beliefs, idioms of distress, and when your Tagalog is not enough (interviewing alone vs a nurse interpreting, family as informants not interpreters, running an interpreted interview, which rating-scale version goes in the chart). |
| **Reading** | 17 graded passages (A1–C1) with glossaries and comprehension questions (the B2–C1 ones ask for inference, tone and stance). A Listen first button hides the text so you answer by ear. Print handout per passage: passage, glossary, questions, answer key; English under each paragraph, on its own page, or left out. |
| **Listening** | Nine audio-first recordings (B1–C1): clinic voicemail, terminal announcement, radio typhoon bulletin, nurse shift endorsement, family conversation, radio interview, a resident's phone call to a patient's sister, OPD triage, barangay assembly. Print handout per recording (`#/listen/handout?id=`): notes box, questions, dictation, transcript, key. Play all, replay a line, slow down; questions, transcript with optional English, and dictation. Data in `js/data/listening.js`, view `js/listen.js` (`#/listen`, `#/listen/<id>`). |
| **Speaking** | Dialogues in Listen, Shadow, and Role-play modes, with text-to-speech, speech recognition, and record-and-compare. Print handout per dialogue (clinical ones included): script and a role-play worksheet with your lines blank under the English cue, plus an answer key. |
| **You** | Placement test, streaks, XP, progress stats, backup export/import, settings, What's New, About. |

## Version 3.9.0: daily mix, three drills, stress pairs, Spanish and English words

Pass 3 of the expansion.

- **Daily mix** (`#/daily`, `V.daily` in `js/drills.js`): ten multiple-choice questions, two dictionary words (mistakes and due cards first) and one each from markers, register, roots, word families, false friends, focus, stress and find the mistake. Best score per day in `state.done.daily['YYYY-MM-DD']` (three months kept). Tile on Home (Today) and on Practice.
- **Switch the focus** (`#/drills/focus`, data `DRILL_FOCUS`, 24 pairs): actor focus to object focus, the reverse, or typed. Wrong options are built from the pair itself (new verb with the old markers, old verb with the new markers, wrong aspect). The typed set needs every word right (`exact`).
- **Find the mistake** (`#/drills/errors`, data `DRILL_ERRORS`, 41 sentences in three sets): tap the wrong word.
- **Same spelling, different stress** (`#/drills/stress`, data `WORD_STRESS`, 28 pairs): from the sentence, by ear (the sentence is played, not the single word), from the meaning. Stress is shown with capitals (BU-kas, bu-KAS).
- **Word families page**: two more tabs, `#/words?tab=str` (stress pairs) and `#/words?tab=look` (46 false friends, 12 spelling rules, 111 look-alikes: `WORD_FALSE_FRIENDS`, `WORD_SPELLING`, `WORD_COGNATES`). Two more sets in the Word families drill: `ff` and `cog`.
- **Placement**: five C1 questions (25 in all); C1 needs B2 passed and three of the five.

Files changed: `js/drills.js`, `js/words.js`, `js/views.js`, `js/app.js`, `js/core.js`, `js/data/drills.js`, `js/data/word-sets.js`, `js/data/meta.js`, `css/style.css`, `tools/collect-texts.js`, `data/changelog.js`, `data/app-meta.js`, `sw.js`, `README.md`.

## Version 3.8.0: six more lessons, four drills, word families

- **Lessons** (`js/data/lessons.js`, 30 → 36): `enclitics`, `time-words`, `intensifiers`, `focus-an-i`, `nominalising`, `recent-past`.
- **Drills** (`js/drills.js`): new ids `roots`, `families`, `dictation`, `translate`. `roots` needs no data: it uses every one-word dictionary entry whose `root` `App.findRoots` can recover. `families` has three sets (`fam`, `syn`, `lad`) over `js/data/word-sets.js`. `dictation` and `translate` use `DRILL_DICTATION` `{ tl, en, set, n? }` and `DRILL_TRANSLATE` `{ en, tl: [accepted answers], set, why? }` in `js/data/drills.js`; both are typed and scored by `App.drillTypedScore` (best `App.similarity` over the accepted answers, 80 or more is right; for dictation the figure `n` is accepted too).
- **Word families** (`js/words.js`, data `js/data/word-sets.js`): route `#/words?tab=fam|lad|syn`, `#/words?r=<root>` scrolls to one family. `WORD_FAMILIES` `{ r, en, forms: [[tl, en]], rel? }` (at least 5 forms each), `WORD_LADDERS` `{ id, en, steps: [[tl, en]] }` mildest first, `WORD_SYNONYMS` `{ en, deep, daily, mix, note? }` (the first `daily` word must be unique across sets: the drill uses it as the answer).
- **Vocabulary**: 115 entries appended to `js/data/dict-themes.js` (ids d1849 onward).
- `tools/collect-texts.js` records the dictation lines, the model answer of each translation item, every family form, ladder step and deep or everyday synonym. Taglish words are not recorded.
- Files changed: `index.html`, `sw.js`, `css/style.css`, `data/app-meta.js`, `data/changelog.js`, `js/app.js`, `js/core.js`, `js/views.js`, `js/drills.js`, `js/words.js` (new), `js/data/word-sets.js` (new), `js/data/drills.js`, `js/data/dict-themes.js`, `js/data/lessons.js`, `tools/collect-texts.js`.
- All new Tagalog is a draft pending Dr. Navarro's review.

## Version 3.7.0: six lessons, three drills, themed vocabulary

- **Lessons** (`js/data/lessons.js`, 24 → 30): `demonstratives`, `connectors`, `ability` (maka-/ma-), `causative` (magpa-/pa-), `requests`, `hedging`.
- **Drills** (`js/drills.js`, data `js/data/drills.js`): routes `#/drills` and `#/drills/<id>` with ids `markers`, `build`, `switch`. `DRILL_CLOZE` items are `{ q, en, a, set, why }`; `DRILL_BUILD` items are `{ en, t, end, alt?, why }` where every `alt` is another accepted order of the same tiles. Scores in `state.done.drills`. `runQuiz` takes `sayAfter` (a speaker button shown with the feedback, so the audio never gives the answer away).
- **Vocabulary** (`js/data/dict-themes.js`, 191 entries, `window.DICT_RAW2`): new topics `routine` and `civic`. **Append only.**
- **Stable dictionary ids** (`js/core.js`): the four original files keep the ids they always had; `DICT_RAW2` entries are numbered after them in file order, so saved flashcard progress no longer shifts when words are added. New words go at the end of `dict-themes.js` (or a later `DICT_RAW2` file loaded after it), never into the four original files.
- Files changed: `index.html`, `sw.js`, `css/style.css`, `data/app-meta.js`, `data/changelog.js`, `js/app.js`, `js/core.js`, `js/views.js`, `js/pronounce.js`, `js/drills.js` (new), `js/data/drills.js` (new), `js/data/dict-themes.js` (new), `js/data/lessons.js`, `tools/collect-texts.js`.

## Version 3.6.3: capitals spelled by default

- **Update**: `js/pronounce.js` no longer needs an acronym list. An all-caps word is spelled with Filipino letter names unless it is in `WORDS` (said as a word, e.g. PAGASA, COVID, CIWA → siwa, OK → okey), a lowercase Tagalog headword in `DICT_RAW`, or part of a heading (capital words opening the text or a sentence and ending in `:` or a dash: PARA SA:, PAKSA:, SAN ISIDRO —). `collect-texts.js` writes `tools/caps.json` (word → spoken form; committed by the audio job) and prints it; dev-tools `data_check.js` prints it as INFO. No existing clip changed.
- **Files changed:** `js/pronounce.js`, `tools/collect-texts.js`, `tools/caps.json` (new), `.github/workflows/audio-pack.yml`, `sw.js`, `data/app-meta.js`, `data/changelog.js`, `README.md`.

## Version 3.6.2: app-wide pronunciation rule

- **Correction**: `js/pronounce.js` defines `window.PRONOUNCE(text)`, applied by `App.spoken` (`js/core.js`) before playing or keying a clip and by `tools/collect-texts.js` when recording, so clip names match. Doc → Dok, Dr./Dra. → Doktor/Doktora, acronyms in its `ACRONYMS` list spelled with Filipino letter names (NCMH → en-si-em-eyts), other all-caps words lowercased (headings), 1553 and 911 digit by digit, `y medya` → `i medya`, sentence-initial `I-verb` → `i-verb`. Lines in `tools/extra-texts/msetrainer.txt` are recorded without it (MSE Trainer keys clips from its own text). (3.6.3: unknown capitals are spelled by default.) Screen text is unchanged.
- **Files changed:** `js/pronounce.js` (new), `js/core.js`, `tools/collect-texts.js`, `index.html`, `sw.js`, `data/app-meta.js`, `data/changelog.js`, `README.md`.

## Version 3.6.1: spoken versions for listening lines

- **Correction**: a listening line may carry a 4th item, the same line respelled for the voice (`PRN` → `pi-ar-en`, `Doc` → `Dok`, `I-inform` → `i-inform` after a comma so it is not read as the English letter I, `BP` → `bi-pi`, `BHW`, `NCMH`, `Dr./Dra.`, bed and gate numbers, `y medya` → `i medya`). `js/listen.js` plays it (`sayOf`); `tools/collect-texts.js` records it; the screen, handouts and dictation use the normal text. `tests/data_check.js` (dev-tools) fails any listening line with an acronym, Dr./Dra., Doc or a bed/gate number and no spoken version.
- **Files changed:** `js/data/listening.js`, `js/listen.js`, `tools/collect-texts.js`, `sw.js`, `data/app-meta.js`, `data/changelog.js`, `README.md`.

## Version 3.6.0: listening handouts and three more recordings

- **Feature**: topic `listening` in `js/grammar-handout.js` (`#/listen/handout?id=<id>`, settings `ghandout.listening`): notes box (6 ruled lines), questions, dictation (two ruled lines per `dictation` line; one unbreakable block in the PDF), transcript on its own page (`english` show/hide), answer key + dictation answers. The sheet tells the class to play the audio from the Listening page. Route `/listen/handout` sits before `/listen/<id>` in `app.js`.
- **Update**: `mixQ(qs, seed)` prints reading and listening options in a fixed shuffled order per item (seeded by the item id), so keys are not all A; the key is built from the same order.
- **Content**: `tawag-pamilya` (B2, clinical), `triage-opd` (B1, clinical), `pulong-barangay` (C1) appended to `js/data/listening.js`. Tagalog drafted by Claude, pending review.
- **Files changed:** `js/data/listening.js`, `js/grammar-handout.js`, `js/listen.js`, `js/app.js`, `js/core.js`, `css/style.css`, `sw.js`, `data/app-meta.js`, `data/changelog.js`, `README.md`.

## Version 3.5.0: listening exercises and harder readings

- **Feature**: `#/listen` and `#/listen/<id>` (`js/listen.js`, data `js/data/listening.js`, `LISTENING: [{ id, level, kind, title, titleEn, setting, psych?, speakers, lines:[[speakerIdx, tl, en]], q:[[q, opts, idx, expl]], dictation:[lineIdx] }]`). Audio first: Play all, Stop, Slower/Normal, replay one line; questions by `runQuiz`; transcript with optional English; dictation graded with `App.similarity`. Best score in `state.done.listening`. In `NAV` (Learn), the Practice page, Home's daily quick practice, Progress and search (titles and settings only, not transcripts).
- **Content**: five B2–C1 passages appended to `js/data/reading.js`: `bataan-alaala`, `balita-baha`, `memo-dalaw`, `opinyon-hiya`, `huling-biyahe`. Tagalog drafted by Claude, pending review.
- Listen first button on every passage hides the text until you choose to show it.
- **Files changed:** `js/data/listening.js` (new), `js/listen.js` (new), `js/data/reading.js`, `index.html`, `sw.js`, `data/app-meta.js`, `data/changelog.js`, `js/app.js`, `js/core.js`, `js/views.js`, `css/style.css`, `tools/collect-texts.js`, `README.md`.

## Version 3.4.0: reading and dialogue handouts

- **Feature**: two new topics in `js/grammar-handout.js`, same pattern as the lesson handout. `reading` (`#/reading/handout?id=<passage>`, settings in `ghandout.reading`): passage, glossary, questions, answer key; `english` is `show` (under each paragraph), `end` (translation on its own page) or `hide`. `dialogue` (`#/speak/handout?id=<dialogue>`, settings in `ghandout.dialogue`): script, role-play worksheet (learner's lines blank with the English cue and ruled lines), answer key; `register` `f`/`c` picks the Taglish line where a dialogue has one. The clinical dialogues built from `PSYCH_CASES` (`case-<id>`) are included.
- Print handout buttons on every reading passage and dialogue page; both pages are in search. The "Prepared for" placeholder now says "First years" instead of PGY-1 (also in the psychiatry handout).
- **Files changed:** `sw.js`, `data/app-meta.js`, `data/changelog.js`, `js/grammar-handout.js`, `js/handout.js`, `js/views.js`, `js/app.js`, `js/core.js`, `css/style.css`, `README.md`.

## Version 3.3.0: three more admission MSE cases

- **Content**: `js/data/psych-mse-cases.js` adds `carlo`, `arnel` and `mika` (`form: 'initial'`), matching the "Admission MSE" line in each discharge case's chart. Teaching points: register (Carlo drops po from overfamiliarity, Ramon from irritation, Arnel keeps po while suspicious), pressured vs rapid speech (Carlo vs Arnel), clang associations in Tagalog (kita / kita mo, pera / pero / puro), hypervigilance vs responding to internal stimuli (Arnel), thought blocking and command hallucinations with a plan (Mika), and a psychomotor baseline before antipsychotics (Mika, akathisia at discharge). Draft for review.
- These are first admissions; they use the Readmission Form MSE order until the initial admission form is added. The list page says so (`js/mse-practice.js`).
- **Fix**: `App.spoken()` in `js/core.js` drops stage directions before playing or keying audio: a `(...)` at the start of a line or next to an ellipsis. Brackets inside a sentence (`nganga (bunga, mama, buyo)`) are kept. `tools/collect-texts.js` uses the same rule, so about 17 existing case lines get new clips without the direction.
- **Files changed:** `sw.js`, `data/app-meta.js`, `data/changelog.js`, `js/core.js`, `js/data/psych-mse-cases.js`, `js/mse-practice.js`, `tools/collect-texts.js`, `tools/texts.json`, `README.md`.

## Version 3.2.0: Resident / Nurse switch and nurse phrase sections

- **Role switch**: `js/psych-views.js` adds `App.roleSeg()`, `roleSections(role)` and `NURSE_ALSO` (ported from Hanashimasho 0.16.0). The Interview tab shows the switch; the Nurse view lists the `role: 'nurse'` sections, then `deescalation`, `suicide`, `violence`, `meds`, `admission`, `elderly` under "Also useful on the ward", with a notice that nurse scripts are pending Nursing Service review. Section prev / next follow the role's list. Flashcards, search, point board and listening drill are unchanged and see all sections.
- **Content**: `js/data/psych-phrases-nurse.js` appends six sections (`nurse-admit` 16, `nurse-meds` 24, `nurse-daily` 21, `nurse-risk` 23, `nurse-calm` 17, `nurse-educ` 24 = 125 phrases) to the end of `PSYCH_SECTIONS`; `js/data/psych-answers-nurse.js` merges 60 replies into `PSYCH_ANSWERS.sections`. Written in Tagalog from the English of the Japanese app and adapted to a Philippine public ward (nurses' station instead of a call button, CR, prescription or medicine list, 911 plus the NCMH Crisis Hotline 1553). Draft for review.
- **Files changed:** `index.html`, `sw.js`, `data/app-meta.js`, `data/changelog.js`, `js/psych-views.js`, `js/data/psych-phrases-nurse.js` (new), `js/data/psych-answers-nurse.js` (new), `tools/collect-texts.js`, `tools/texts.json`, `README.md`.

## Version 3.1.1: replies for every section, lesson example fix

- **Point board / listening drill**: `js/data/psych-answers.js` now has section-specific replies for `sud-screen`, `sud-betel`, `sud-other`, `sud-gambling`, `sud-screens`, `mi`, `mood-screens`, `wd-alcohol`, `wd-cannabis`, `wd-agitation` (100 items, draft for review), so every section's board shows its own replies above the general groups.
- **Fix**: lesson example boxes (`.lesson-body .ex`) placed the English in a second column beside a zero-width Tagalog column once the speaker button was appended (`views.js` set the grid position on a wrapper that was never inserted). The button now gets class-based placement (`.ex.has-say` in `css/style.css`).
- **Files changed:** `sw.js`, `css/style.css`, `data/app-meta.js`, `data/changelog.js`, `js/views.js`, `js/data/psych-answers.js`, `tools/texts.json`, `README.md`.

## Version 3.1.0: point board, listening drill, interpreter lesson

- **Point board (Ituro)** at `#/psych/point`, also from the *Point board* button on every phrase section and from Psychiatry → Ward tools.
- **Listening drill** at `#/psych/listen`, in Practice, Psychiatry → Cases and the Home quick-practice rotation.
- **Lesson** `interpreting` (Culture, B1), linked from the Psychiatry hub's Related lessons and from the Mood episode checker.
- **PHQ-9 / MDQ source notes** in the Mood episode checker and the "PHQ-9 and MDQ in Tagalog" section.
- **Language pack `js/lang.js`**: voice matching, speech-recognition tag, register labels, quiz words, dictionary and flashcard direction labels, Settings voice help. The engine (`core.js`, `views.js`, `psych-views.js`, `point-listen.js`, `app.js`) reads `window.LANG` instead of hard-coding Tagalog, so a sister app (e.g. a Spanish *Hablemos*) can replace `js/lang.js` and `js/data/*` and keep the engine. Still Tagalog-specific by design: the lessons, Panlapi, verb trainer (`conjugate.js`), dictionary, readings, dialogues and the audio-pack workflow voices.
- **Audio**: `tools/collect-texts.js` now includes the point-board replies and the spoken 0–10 numbers (`tools/extra-texts/point-board.txt`); the audio-pack job records them on the next run.
- **Files changed:** `index.html`, `sw.js`, `css/style.css`, `data/app-meta.js`, `data/changelog.js`, `js/lang.js` (new), `js/point-listen.js` (new), `js/data/psych-answers.js` (new), `js/core.js`, `js/views.js`, `js/psych-views.js`, `js/app.js`, `js/mood.js`, `js/data/psych-mood.js`, `js/data/lessons.js`, `tools/collect-texts.js`, `tools/extra-texts/point-board.txt`, `tools/texts.json`, `README.md`.

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

- **Dictionary words**: add a line at the END of `js/data/dict-themes.js` in the form `tagalog|english|pos|category|root|note`. Never add, remove or reorder lines in the four older `dict-*.js` files or earlier in `dict-themes.js`: flashcard progress is saved by a word's position.
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
js/drills.js            Language drills: markers, build, switch, roots, families, dictation, translate
js/words.js             Word families page: families, mild-to-strong ladders, deep / everyday / Taglish sets
js/grammar-handout.js   Grammar handout generator (#/affixes/handout, #/verbs/handout, #/lessons/handout): Panlapi, verbs and lesson topics, lesson HTML to PDF converter, PDF via App.pdfKit
handouts/               Ready-made PDFs (Tagalog MSE Interviewer Guide)
js/vendor/              pdfmake (PDF library, MIT license)
js/app.js               Routing, rail / tab bar / More drawer, back-forward, theme, text size, search bar, backup
js/data/                All content
```
