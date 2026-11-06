/* What's New. Newest entry FIRST. version = semver string (also the key for the unseen badge on Home,
   the menu and the footer). date = ISO: YYYY-MM-DD, or YYYY-MM for releases before 3.0.0 whose exact day
   was not recorded. Item type: feature | update | correction | content.
   For every release: add an entry here, then bump APP_META.version (data/app-meta.js) and VERSION in sw.js. */
window.APP_CHANGELOG = [
  {
    version: '3.0.0', date: '2026-11-06', title: 'Design refresh',
    items: [
      { type: 'feature', text: 'Same colours, buttons, text-size and theme controls as the other isaymotion apps; your navy and gold stay.' },
      { type: 'feature', text: 'The More tab now opens a grouped menu: Learn, Drill, Interview, Clinical tools, App.' },
      { type: 'feature', text: 'Backup with undo in the footer; your existing backup files still restore.' },
      { type: 'correction', text: 'Updating the app no longer clears the other isaymotion apps’ offline files on this phone.' }
    ]
  },
  {
    version: '2.9.1', date: '2026-11', title: 'Cleaner verb tables',
    items: [
      { type: 'correction', text: 'In the verb handout, the affix is marked by how the form is built, not by matching letters, and the repeated aspect syllable is shown in italics. Irregular forms such as bilhin are left unmarked instead of marked wrongly.' }
    ]
  },
  {
    version: '2.9.0', date: '2026-11', title: 'Verb and lesson handouts',
    items: [
      { type: 'feature', text: 'A verb handout: conjugation tables for every verb or just the clinical ones, example sentences for each aspect, an "aspect at a glance" page, and a worksheet with an answer key. Pick a single verb to print a one-verb sheet.' },
      { type: 'feature', text: 'A lesson handout: print any lesson with its examples and tables, the quiz questions, and an answer key on its own page.' },
      { type: 'update', text: 'The Verb trainer and every lesson page have a Print handout button, and both handouts print on A4, Letter or A5 or download as a PDF.' }
    ]
  },
  {
    version: '2.8.0', date: '2026-11', title: 'Printable Panlapi handout',
    items: [
      { type: 'feature', text: 'A grammar handout generator for the Panlapi trainer: the affix cheat sheet, the sound-change rules, the word list with each affix marked, and a worksheet (find the root, choose the form the sentence needs) with an answer key. Filter by affix type or clinical words, hide English, print on A4, Letter or A5, or download a PDF.' },
      { type: 'update', text: 'The Panlapi page has a Print handout button, and the handout is searchable by name.' }
    ]
  },
  {
    version: '2.7.0', date: '2026-11', title: 'Psychiatry in four tabs, and a Practice tab',
    items: [
      { type: 'feature', text: 'The Psychiatry hub is split into Interview (phrase sections), Cases (simulations, admission and discharge practice, interpretation drill), Ward tools (mood, substance use, withdrawal, de-escalation, discharge assessment) and Print. Each tab has its own link.' },
      { type: 'feature', text: 'A Practice tab in the phone bar gathers every drill in one place: verbs, Panlapi, flashcards due, lesson quizzes, reading, speaking, and the clinical drills.' },
      { type: 'update', text: 'The phone bar is now Home, Psychiatry, Practice, Cards, More. The Dictionary moved under More; the search box at the top still looks up any word from anywhere.' }
    ]
  },
  {
    version: '2.6.0', date: '2026-11', title: 'A Home screen built around today',
    items: [
      { type: 'feature', text: 'Home now opens with Today: your cards due, one quick practice that rotates daily, and your next lesson. Pinned and Continue follow, then the psychiatry shortcuts.' },
      { type: 'feature', text: 'Pin any page: tap the star beside a page title to keep it on Home and at the top of More. Tap again to unpin.' },
      { type: 'feature', text: 'Every deep page now has the same breadcrumb trail (Psychiatry / Discharge practice / Ramon), so a shared link always leads back to its section.' },
      { type: 'update', text: 'The "Everything" grid left Home; the More screen lists every page, grouped.' }
    ]
  },
  {
    version: '2.5.0', date: '2026-11', title: 'Text size',
    items: [
      { type: 'feature', text: 'Tap Aa in the top bar (or open Settings) to make text smaller or larger: Smaller, Default, Larger, Largest. Your choice is saved on this device and works offline.' }
    ]
  },
  {
    version: '2.4.1', date: '2026-11', title: 'Easier to find things',
    items: [
      { type: 'feature', text: 'Panlapi now has its own entry in the side menu and on the More screen, next to the Verb trainer.' },
      { type: 'feature', text: 'The More screen is grouped (Learn, You, Psychiatry tools) with a line about each page, and starts with the pages you opened most recently.' },
      { type: 'feature', text: 'Search finds every page by name, including the psychiatry tools (try "mood", "withdrawal", "panlapi").' }
    ]
  },
  {
    version: '2.4.0', date: '2026-11', title: 'Panlapi: the affix trainer',
    items: [
      { type: 'feature', text: 'New page under Verbs: Panlapi. Take any word apart into its root and affix, and learn the five positions: unlapi, gitlapi, hulapi, kabilaan, laguhan. 216 words, 120 of them from the ward (kalungkutan, nakakatakot, pampatulog, painumin, pinag-usapan).' },
      { type: 'feature', text: 'Four drills: name the affix type, find the root, build the word from root + affix, and choose the affix a sentence forces (Uminom ka ng gamot / Inumin mo ang gamot). Wrong builds show which sound change or placement rule was missed.' },
      { type: 'feature', text: 'Nine rules with examples: infix placement, ni-, -hin/-han, final o to u, d to r, dropped vowels (tingnan, buksan, kunin), pam-/pan-/mam- assimilation, reduplication as aspect, and the hyphen before vowel roots.' },
      { type: 'feature', text: 'New lesson "Panlapi: the five positions" in the Verbs unit. Affix words you get wrong join the Mistakes deck.' }
    ]
  },
  {
    version: '2.3.5', date: '2026-10', title: 'Link to response practice in Tagalog',
    items: [
      { type: 'feature', text: 'The Shea\'s techniques section now links to the trainer\'s Chapter 5 response practice, which can be played in Filipino with its Sagot sa Tagalog switch.' }
    ]
  },
  {
    version: '2.3.4', date: '2026-10', title: 'Links to three interviews written in Tagalog, set in Mariveles',
    items: [
      { type: 'feature', text: 'The anxiety, depression, collateral and alcohol withdrawal sections now link to simulated interviews in the Psychiatric Interviewing Trainer that are composed in Filipino first: Nasa kuwarto si Nanay, Nerbiyos daw and Ang kasama.' }
    ]
  },
  {
    version: '2.3.3', date: '2026-10', title: 'Links to the trainer\'s interviews that can be played in Tagalog',
    items: [
      { type: 'feature', text: 'The de-escalation, suicide risk and delusions sections now link to simulated interviews in the Psychiatric Interviewing Trainer that have a Sa Tagalog switch: the patient\'s lines and your choices in Filipino, with the English underneath.' }
    ]
  },
  {
    version: '2.3.2', date: '2026-10', title: 'Links to the new Tagalog drills in the Psychiatric Interviewing Trainer',
    items: [
      { type: 'feature', text: 'The Opening, History of present illness and Shea\'s techniques sections now link to the trainer\'s Tagalog drills: idioms of distress (nerbiyos, sumpong, kulam, lutang), choosing the right register (po, kayo, ikaw), and Pakinggan, hearing the move in a Tagalog line.' }
    ]
  },
  {
    version: '2.3.1', date: '2026-10', title: 'Natural Filipino voice for the substance use and withdrawal screens',
    items: [
      { type: 'correction', text: 'The 11 criteria, remission questions, motivational-interviewing lines and nurse script now play in the recorded Filipino voice for every substance (sigarilyo, alak, shabu, marijuana, other drugs, sugal), not only for nganga.' },
      { type: 'correction', text: 'Alcohol withdrawal, cannabis withdrawal and agitation lines now play in the recorded voice too.' },
      { type: 'update', text: 'The audio pack now picks up new psychiatry screens automatically, so future modules get the natural voice without extra steps.' }
    ]
  },
  {
    version: '2.3.0', date: '2026-10', title: 'Verb trainer: sentences for every aspect',
    items: [
      { type: 'feature', text: 'Every verb now comes with natural sample sentences for each aspect (infinitive/command, completed, ongoing, future) plus bare-root uses like "Tara, kain tayo!" — 628 sentences across the 78 verbs, with the verb form highlighted and audio for each.' },
      { type: 'feature', text: 'Most sentences are bedside lines: "Ininom na po ba ninyo yung gamot?", "Inumin po dapat ninyo itong gamot", "May naririnig ka bang boses?", "Kailan ka tumigil sa gamot?" Clinical sentences are tagged, and "Play clinical only" reads just those.' },
      { type: 'feature', text: 'Two sentence drills in the verb trainer: Fill the blank in a sentence (choose the right form) and Translate the sentence. Both work with the Clinical verbs filter.' },
      { type: 'feature', text: 'Flashcard decks "Verb sentences (all)" and "Verb sentences: clinical", and an "Add sentences to flashcards" button on each verb page.' },
      { type: 'update', text: 'Universal search now finds verb sentences, so typing "gamot" or "boses" lists the verb pages that use them.' },
      { type: 'content', text: 'The new sentences are a first draft pending native-speaker review; please report any that sound unnatural.' }
    ]
  },
  {
    version: '2.3.0', date: '2026-10', title: 'Links to the trainer\'s Chapter 15 (the psychodynamic lens)',
    items: [
      { type: 'update', text: 'De-escalation, Explaining diagnosis and treatment, and Closing the interview now also link to the Psychiatric Interviewing Trainer\'s Chapter 15 study guide: complementary shifts with an angry patient, collaborative planning when a patient splits, and setting boundaries with a patient who fears abandonment.' }
    ]
  },
  {
    version: '2.2.3', date: '2026-10', title: 'Links to the trainer\'s Chapter 14 (personality differential)',
    items: [
      { type: 'update', text: 'Personal and social history, and Shea\'s techniques, now also link to the Psychiatric Interviewing Trainer\'s Chapter 14 study guide: probe questions for personality disorders, and anchoring traits to adolescence while ruling out a current episode.' }
    ]
  },
  {
    version: '2.2.2', date: '2026-10', title: 'Links to the trainer\'s Chapter 13 (personality disorders)',
    items: [
      { type: 'update', text: 'Personal and social history, and Explaining diagnosis and treatment, now also link to the Psychiatric Interviewing Trainer\'s Chapter 13 study guide: reading the social history for personality patterns, and fitting the treatment discussion to the patient\'s personality.' }
    ]
  },
  {
    version: '2.2.1', date: '2026-10', title: 'More links to the Psychiatric Interviewing Trainer',
    items: [
      { type: 'update', text: 'A phrase section can now link to several trainer chapters under "Technique notes". Thirteen sections gained links to the new Chapter 10 (depression), 11 (psychosis differential) and 12 (the person beneath the psychosis) study guides: opening, depression, hallucinations, delusions, suicide, substances, collateral history, MSE cognition, medication side effects, elderly patients, alcohol withdrawal and agitation.' }
    ]
  },
  {
    version: '2.2.0', date: '2026-10', title: 'Mood reorganized: SIGECAPS and DIGFAST, with a mood episode checker',
    items: [
      { type: 'update', text: 'The Depression section is now "Depressed mood and SIGECAPS": the two gate symptoms first (depressed mood, loss of interest, two weeks), then Sleep, Interest, Guilt, Energy, Concentration, Appetite, Psychomotor, Suicide, each lettered. New lines: duration, impairment, the bipolar screen question to ask every depressed patient, psychotic features, mixed features, peripartum onset, and grief versus depression with a cultural note.' },
      { type: 'update', text: 'The Mania section is now "Elevated, expansive or irritable mood and DIGFAST": the gate (elevated/expansive, or irritable only, with increased energy; noticed by others), then Distractibility, Indiscretion, Grandiosity, Flight of ideas, Activity, Sleep, Talkativeness, then duration, hospitalization, psychosis, substances, and mixed features.' },
      { type: 'feature', text: 'Mood episode checker (Psychiatry → Mood episode): tap Oo or Hindi through the criteria; the app applies the DSM-5-TR rules (one gate symptom plus five of nine for two weeks; three of seven, or four if only irritable, for one week or any length if hospitalized; four days for hypomania), flags item 9 for suicide risk, and writes a copyable chart line with features. Nothing about the patient is saved.' },
      { type: 'feature', text: 'PHQ-9 and MDQ in Tagalog, scored on the same page: PHQ-9 severity bands and the MDQ positive-screen rule before starting an antidepressant. Paraphrased for training, not validated translations.' },
      { type: 'update', text: 'MSE interviewer sheet pages 1–2 and the PDF, the handout flow, and the admission MSE use the new order. Flashcard progress for the reordered phrases was moved automatically.' }
    ]
  },
  {
    version: '2.1.0', date: '2026-10', title: 'Withdrawal and agitation: alcohol, cannabis, the agitated patient',
    items: [
      { type: 'feature', text: 'Withdrawal and agitation (Psychiatry → Withdrawal and agitation): a bedside teaching reference condensed from the OpenEvidence Alcohol and Cannabis Withdrawal Guide, with the patient-facing parts in Tagalog with audio. Tabs for Alcohol, Cannabis, Agitation, Special populations, Cases and a Quick card.' },
      { type: 'feature', text: 'Alcohol: ask the risk history in Tagalog, score the PAWSS (≥4 = high risk) and the CIWA-Ar (0–67, each item with its anchors) on the page, then copy a chart line with a plan matched to the band. Treatment reference: time course, differential, level of care, thiamine and electrolytes, symptom-triggered vs fixed vs front-loaded benzodiazepines, phenobarbital, benzodiazepine-resistant withdrawal, adjuncts that do and do not work, and AUD medication to start before discharge. Nothing about the patient is saved.' },
      { type: 'feature', text: 'Cannabis: the seven DSM-5-TR withdrawal symptoms in Tagalog with an Oo/Hindi counter (3 or more in a week), the cannabinoid hyperemesis questions, a CHS vs withdrawal table, symptom-targeted management, the investigational medication table and the time course explained to the patient.' },
      { type: 'feature', text: 'Agitation: safety and medical screen, environment, Project BETA\'s 10 domains with a Tagalog line for each, medication matched to the cause, the adult medication reference and trials, safety issues (olanzapine + benzodiazepine, QTc, akathisia, respiratory depression) and restraint as a last resort, linked to the hospital de-escalation checklist.' },
      { type: 'feature', text: 'Special populations: cirrhosis (withdrawal vs hepatic encephalopathy), older adults, pregnancy and adolescents, with the screening questions in Tagalog. Four practice cases with answers and a Tagalog line to say.' },
      { type: 'feature', text: 'Nurse view: a monitoring script in Tagalog (what to tell the patient, the CIWA-Ar round, cannabis days 3–5, after sedation), the CIWA-Ar scorer, and when to escalate. Pending Nursing Service review.' },
      { type: 'content', text: 'Three new phrase sections under Substance use (alcohol withdrawal and CIWA-Ar, cannabis withdrawal and CHS, agitation and the withdrawal watch), with flashcards, search and audio. Marked draft for review until the wording has been checked by a native-speaking clinician.' }
    ]
  },
  {
    version: '2.0.1', date: '2026-10', title: 'Substance use screening and brief intervention',
    items: [
      { type: 'feature', text: 'Substance use (Psychiatry → Substance use): screen betel nut (nganga, bunga, mama, buyo, hitso), tobacco, alcohol, shabu, cannabis, other substances and gambling (sabong, e-sabong, online) on the DSM-5-TR criteria in Tagalog. Tap Oo or Hindi; the app rates mild, moderate or severe, applies remission and other specifiers, and gives the ICD-10-CM code and a copyable chart line. Nothing about the patient is saved.' },
      { type: 'feature', text: 'Add-on screens scored on the same page: AUDIT-C for alcohol and the Fagerström test for nicotine dependence, in Tagalog with answer choices.' },
      { type: 'feature', text: 'Brief intervention: a six-step motivational interview in Tagalog (permission and open questions, reflections and affirmations, importance and confidence rulers, elicit–provide–elicit with substance-specific psychoeducation, change plan, and what to say when the patient is not ready), ending in a summary that uses the patient\'s own reasons.' },
      { type: 'feature', text: 'Nurse view (Resident / Nurse switch on the page): a short screening and brief-advice script with withdrawal watch items and when to escalate. Pending Nursing Service review.' },
      { type: 'feature', text: 'Betel nut specifics: what is in the quid (tobacco changes the diagnosis and the risk), quids per day, swallowing the juice, a mouth check for white or red patches and trismus, and harm-reduction steps for patients not ready to quit. Alcohol counts in bote, lapad, bilog and tagay; cigarettes in sticks and kaha.' },
      { type: 'feature', text: 'Case simulation: Mang Tonyo, a fisherman referred for a white patch in the cheek, from first question to a change plan.' },
      { type: 'feature', text: 'MSE interviewer sheet, pages 3 and 4: the substance screen, the 11 criteria, betel nut, AUDIT-C, Fagerström, the gambling criteria, then the motivational interview, psychoeducation per substance and the nurse script, printable with the rest of the sheet.' },
      { type: 'content', text: 'Five new phrase sections under Substance use (the 11 criteria, betel nut, tobacco/alcohol/shabu, gambling, AUDIT-C and Fagerström) and one under Motivational interviewing, all with flashcards, search and audio. Criteria are paraphrased from the DSM-5-TR; the Tagalog is for training, not a validated translation.' }
    ]
  },
  {
    version: '1.10.0', date: '2026-10', title: 'Shea\'s techniques in Tagalog, linked to the trainer',
    items: [
      { type: 'feature', text: 'New phrase section (Psychiatry → Asking so the truth can come out): 24 Tagalog phrasings of Shea\'s validity techniques (gentle assumption, symptom amplification, denial of the specific, behavioral incidents, shame attenuation, normalization, anchor questions) and the mood questions that most interviews miss (the mania screen, the two hypomania screens, early morning awakening, libido, persistence, family suicide). Respectful and everyday forms, with a note naming the technique.' },
      { type: 'feature', text: 'Technique notes: every psychiatry section now links to the chapter and section of the Psychiatric Interviewing Trainer (isaymotion.github.io/sheatrainer) that teaches the technique behind its phrases. The trainer links back here from its study guides.' },
      { type: 'content', text: 'The new section is marked draft for review until a native-speaking clinician has checked the wording; new phrases play with the device voice until the recorded audio pack is regenerated.' }
    ]
  },
  {
    version: '1.9.0', date: '2026-10', title: 'MSE interviewer sheet',
    items: [
      { type: 'feature', text: 'MSE interviewer sheet (Psychiatry → MSE interviewer sheet): a two-page Tagalog question sheet for the OPD and wards. Mood, depression (D-I-S-A-E-C-G-P + hopelessness), suicide (screen, explore, protective factors), mania (D-S-A-F-P-I-G-R), hallucinations, delusions by type with conviction and action, anger and impulse control, violence, substances, anxiety, cognition, insight and judgment, closing, and the observed parts of the MSE.' },
      { type: 'feature', text: 'Print it from the app (A4, three columns, two pages) or download the ready-made PDF; works offline. Show or hide English, and tap any line to hear it.' },
      { type: 'content', text: 'Phrases marked UT are the same ones used in the rest of the app; the other ward questions were written for this sheet and are practice phrasings, not validated translations.' }
    ]
  },
  {
    version: '1.8.1', date: '2026-10', title: 'MSE Trainer link',
    items: [
      { type: 'feature', text: 'Links to the MSE Trainer\'s new Tagalog cases from the Psychiatry page and the admission MSE practice: quick drills on naming a single finding, including Filipino culture-or-pathology look-alikes.' },
      { type: 'content', text: 'The audio pack now also records the MSE Trainer\'s Tagalog lines, so both apps use the same Filipino voice.' }
    ]
  },
  {
    version: '1.8.0', date: '2026-10', title: 'Admission MSE practice',
    items: [
      { type: 'feature', text: 'Admission MSE practice (Psychiatry → Admission MSE practice): interview a simulated patient on admission, in the order of the MSE section of the hospital\'s Readmission Form (MMH-MED-04-26-01/02).' },
      { type: 'feature', text: 'Start with the chief complaint in the informant\'s own words, then document each domain: appearance, psychomotor activity, attitude, mood and affect, speech, thought process, perception, thought content, suicidal and homicidal ideation, orientation, insight, impulse control, and judgment.' },
      { type: 'feature', text: 'Evidence questions: after checking a domain, choose the patient line that supports the key finding.' },
      { type: 'feature', text: 'Compare your MSE with the model, write it as you would on the form for self-check, and see the same patient\'s admission and discharge MSE side by side.' },
      { type: 'content', text: 'First case: Mang Ramon on readmission (schizophrenia). Traps include dropping "po" as a sign of irritability, delusional content with a linear thought process, and a family\'s engkanto explanation that is not the patient\'s delusion.' }
    ]
  },
  {
    version: '1.7.0', date: '2026-10', title: 'More discharge cases',
    items: [
      { type: 'content', text: 'Three new discharge practice cases: bipolar I disorder with mania settling (on lithium), methamphetamine-induced psychosis, and first-episode schizophrenia where the family wants discharge but the patient is not ready.' },
      { type: 'feature', text: 'Each case now ends with your decision: discharge today or defer. It is compared with the model and counts toward the score.' },
      { type: 'feature', text: 'Some answers now come from a family member, labeled with who is speaking.' },
      { type: 'update', text: 'Discharge assessment: new documentation picks for lithium, divalproex, haloperidol, quetiapine, sertraline, bipolar I in partial remission, methamphetamine-induced psychotic disorder, command hallucinations, tremor, withdrawal, safety plan, laboratory tests, and deferred discharge.' },
      { type: 'update', text: 'Discharge assessment: five new questions (command hallucinations, reduced need for sleep, offers of shabu or alcohol, lithium safety, explaining a deferred discharge to the family), and a safety flag when command hallucinations persist.' }
    ]
  },
  {
    version: '1.6.0', date: '2026-10', title: 'Discharge practice cases',
    items: [
      { type: 'feature', text: 'Discharge practice (Psychiatry → Discharge practice): interview a simulated patient on the day of discharge, using the same fields and questions as the Discharge Summary form (MMH-MED-04-04-02).' },
      { type: 'feature', text: 'Tap Ask to hear the patient answer in Tagalog. Read the chart and ward notes, then document each field with the form\'s wording.' },
      { type: 'feature', text: 'Check each field against a model answer: what you missed, what the findings don\'t support and why, and any key question you didn\'t ask.' },
      { type: 'feature', text: 'At the end, compare your discharge MSE with the model field by field, with a score and safety flags for missed suicide or homicide findings.' },
      { type: 'content', text: 'Two cases: schizophrenia back on medicine (a teach-back error and a restraint only in the chart), and recurrent depression with a passive death wish that comes out only on the third question.' }
    ]
  },
  {
    version: '1.5.0', date: '2026-10', title: 'Discharge assessment',
    items: [
      { type: 'feature', text: 'Discharge assessment (Psychiatry → Discharge assessment): go through each field of the hospital Discharge Summary form (MMH-MED-04-04-02) one at a time.' },
      { type: 'feature', text: 'Each field shows what to assess, the Tagalog questions to ask (with audio), likely patient answers, and standard wording to tap into your documentation.' },
      { type: 'feature', text: 'Summary in the form\'s layout, ready to copy, with safety flags for suicidal or homicidal ideas, persisting delusions, poor insight, and empty fields.' },
      { type: 'feature', text: 'Insight graded on the 1–6 scale, the patient\'s own words for mood, and teach-back for discharge medications.' },
      { type: 'feature', text: 'Printable discharge summary interview guide in the handout generator.' },
      { type: 'content', text: '53 new discharge questions, also in flashcards, search, and the audio pack.' }
    ]
  },
  {
    version: '1.4.0', date: '2026-10', title: 'Natural Filipino audio',
    items: [
      { type: 'feature', text: 'Tagalog audio pack: every word and phrase in the app (about 3,000) recorded with a natural Filipino neural voice, played instead of the device voice.' },
      { type: 'feature', text: 'The pack is recorded by a GitHub job and updates itself when content changes. Choose a female or male voice and the speaking rate.' },
      { type: 'feature', text: 'Settings → Voice: switch between the recorded voice and the device voice, see what is installed, and save all audio for offline use.' },
      { type: 'correction', text: 'Without a recording or a Filipino device voice, the app now uses the closest voice (Indonesian, Malay, or Spanish) instead of an English one.' },
      { type: 'update', text: 'Dialogues, readings, and the de-escalation drill play recorded clips in sequence.' }
    ]
  },
  {
    version: '1.3.0', date: '2026-10', title: 'De-escalation: drills, pocket card, and next steps',
    items: [
      { type: 'feature', text: 'Practice case "Agitated patient: de-escalation": choose your words step by step through the checklist, with feedback. Also available as a spoken role-play.' },
      { type: 'feature', text: 'Rapid drill: listen-and-repeat loops and timed quick-response prompts so the first lines come out automatically.' },
      { type: 'feature', text: '"If it fails" guide: escalation, restraint or seclusion as a last resort, monitoring, release, and debrief, with Tagalog phrases for each.' },
      { type: 'feature', text: 'De-escalation pocket card: two A6 sides with the 12 steps and one Tagalog line each. Print double-sided and laminate.' },
      { type: 'update', text: 'Checklist and printouts now show Mariveles Mental Wellness and General Hospital and form number MMH-NUR-04-112-01.' },
      { type: 'content', text: '11 new phrases for restraint, monitoring, release, and debriefing.' }
    ]
  },
  {
    version: '1.2.0', date: '2026-10', title: 'De-escalation checklist',
    items: [
      { type: 'feature', text: 'De-escalation checklist (Psychiatry → De-escalation checklist): tick the behaviors observed, work through the 12 steps, and record the outcome.' },
      { type: 'feature', text: 'Every step has Tagalog phrases to say aloud, in respectful and everyday forms, with tips such as keeping two arms\' length and an open exit.' },
      { type: 'feature', text: 'Escalation path built in: if de-escalation fails, the NAOD refers to the NOD, and the POD is notified at all times.' },
      { type: 'feature', text: 'Copyable chart note with time, behaviors, steps done, and remarks. Nothing is saved and no patient details are asked for.' },
      { type: 'feature', text: 'Printable blank checklist with Tagalog phrases in the handout generator, also included in the Risk assessment and Complete reference presets.' },
      { type: 'content', text: '17 new de-escalation phrases, also added to flashcards and search.' }
    ]
  },
  {
    version: '1.1.0', date: '2026-10', title: 'Printable psychiatry handouts',
    items: [
      { type: 'feature', text: 'Handout generator (Psychiatry → Printable handout): download a PDF or print the psychiatric interview flow and the MSE.' },
      { type: 'feature', text: 'English translation can be shown, hidden for practice, or moved to an answer key at the end.' },
      { type: 'feature', text: 'Five starting points: Full interview + MSE, MSE only, Risk assessment, Pocket booklet (A5), and Complete reference.' },
      { type: 'feature', text: 'Interview flow overview with numbered steps and "go to risk assessment now" branch points.' },
      { type: 'feature', text: 'MSE table: what to assess, Tagalog prompts, and plain Tagalog descriptions families use; optional blank MSE write-up form.' },
      { type: 'feature', text: 'Choose respectful, everyday, or both registers; A4, Letter, or A5; three text sizes; tips and likely patient answers on or off.' },
      { type: 'update', text: 'Each psychiatry section has a "Handout of this section" button.' },
      { type: 'update', text: 'PDFs work offline once the app has been opened online.' }
    ]
  },
  {
    version: '1.0.0', date: '2026-10', title: 'First release',
    items: [
      { type: 'feature', text: 'Psychiatry Tagalog track: 26 sections and 315 phrases from opening and consent to MSE, risk, management, children, and elderly patients. Every phrase comes in a respectful (po) form and an everyday form.' },
      { type: 'feature', text: 'Hallucination and delusion screening phrases, including spirit and folk-belief questions ("Nakakakita ka ba ng mga anino o maligno?", "May bumubulong ba sa iyo?").' },
      { type: 'feature', text: 'Five interactive case simulations: first-episode psychosis, depression with suicide risk, mania, delirium, and alcohol withdrawal.' },
      { type: 'feature', text: 'Patient-response interpretation drill with clinical significance for each line.' },
      { type: 'feature', text: 'English–Filipino and Filipino–English dictionary (about 1,650 entries) with root-word search (type "kinakain" to find "kain").' },
      { type: 'feature', text: 'Universal search across the dictionary, lessons, reading, dialogues, and psychiatry phrases.' },
      { type: 'feature', text: 'Spaced-repetition flashcards with decks by topic, a psychiatry deck, and an automatic mistakes deck.' },
      { type: 'feature', text: 'Verb aspect and affix trainer covering -um-, mag-, ma-, -in, i-, and -an.' },
      { type: 'feature', text: 'Grammar and culture lessons: markers, focus, aspect, particles, po/opo, numbers and time, Taglish, hiya, utang na loob, folk beliefs, and idioms of distress.' },
      { type: 'feature', text: 'Graded reading passages with glossaries and comprehension questions.' },
      { type: 'feature', text: 'Speaking drills with text-to-speech, speech recognition (where the browser supports it), and record-and-compare.' },
      { type: 'feature', text: 'Placement test, levels, streaks, progress stats, and backup export/import.' },
      { type: 'feature', text: 'Dark and light mode, back and forward buttons, offline support, and install-to-home-screen.' }
    ]
  }
];
