/* App metadata, attribution, What's New, and placement test. */
window.APP_META = {
  name: 'Usap Tayo',
  tagline: 'Tagalog for clinicians',
  version: '2.0.0',
  updated: 'October 2026',
  author: 'Isabella Navarro, MD',
  email: 'isaymotion@gmail.com',
  // Institution whose nursing de-escalation checklist the app's checklist follows.
  institution: { name: 'Mariveles Mental Wellness and General Hospital', address: 'P. Monroe Street Poblacion, Mariveles, Bataan, Philippines 2105', short: 'MMWGH', deescForm: 'MMH-NUR-04-112-01', dischargeForm: 'MMH-MED-04-04-02' },
  attribution: 'App created by Isabella Navarro, MD. Latest version October 2026. isaymotion@gmail.com'
};

/* Newest first. type: new | improved | fixed | content */
window.WHATS_NEW = [
  {
    version: '2.0.0', date: 'October 2026', title: 'Substance use screening and brief intervention',
    items: [
      ['new', 'Substance use (Psychiatry → Substance use): screen betel nut (nganga, bunga, mama, buyo, hitso), tobacco, alcohol, shabu, cannabis, other substances and gambling (sabong, e-sabong, online) on the DSM-5-TR criteria in Tagalog. Tap Oo or Hindi; the app rates mild, moderate or severe, applies remission and other specifiers, and gives the ICD-10-CM code and a copyable chart line. Nothing about the patient is saved.'],
      ['new', 'Add-on screens scored on the same page: AUDIT-C for alcohol and the Fagerström test for nicotine dependence, in Tagalog with answer choices.'],
      ['new', 'Brief intervention: a six-step motivational interview in Tagalog (permission and open questions, reflections and affirmations, importance and confidence rulers, elicit–provide–elicit with substance-specific psychoeducation, change plan, and what to say when the patient is not ready), ending in a summary that uses the patient\'s own reasons.'],
      ['new', 'Nurse view (Resident / Nurse switch on the page): a short screening and brief-advice script with withdrawal watch items and when to escalate. Pending Nursing Service review.'],
      ['new', 'Betel nut specifics: what is in the quid (tobacco changes the diagnosis and the risk), quids per day, swallowing the juice, a mouth check for white or red patches and trismus, and harm-reduction steps for patients not ready to quit. Alcohol counts in bote, lapad, bilog and tagay; cigarettes in sticks and kaha.'],
      ['new', 'Case simulation: Mang Tonyo, a fisherman referred for a white patch in the cheek, from first question to a change plan.'],
      ['new', 'MSE interviewer sheet, pages 3 and 4: the substance screen, the 11 criteria, betel nut, AUDIT-C, Fagerström, the gambling criteria, then the motivational interview, psychoeducation per substance and the nurse script, printable with the rest of the sheet.'],
      ['content', 'Five new phrase sections under Substance use (the 11 criteria, betel nut, tobacco/alcohol/shabu, gambling, AUDIT-C and Fagerström) and one under Motivational interviewing, all with flashcards, search and audio. Criteria are paraphrased from the DSM-5-TR; the Tagalog is for training, not a validated translation.']
    ]
  },
  {
    version: '1.10.0', date: 'October 2026', title: 'Shea\'s techniques in Tagalog, linked to the trainer',
    items: [
      ['new', 'New phrase section (Psychiatry → Asking so the truth can come out): 24 Tagalog phrasings of Shea\'s validity techniques (gentle assumption, symptom amplification, denial of the specific, behavioral incidents, shame attenuation, normalization, anchor questions) and the mood questions that most interviews miss (the mania screen, the two hypomania screens, early morning awakening, libido, persistence, family suicide). Respectful and everyday forms, with a note naming the technique.'],
      ['new', 'Technique notes: every psychiatry section now links to the chapter and section of the Psychiatric Interviewing Trainer (isaymotion.github.io/sheatrainer) that teaches the technique behind its phrases. The trainer links back here from its study guides.'],
      ['content', 'The new section is marked draft for review until a native-speaking clinician has checked the wording; new phrases play with the device voice until the recorded audio pack is regenerated.']
    ]
  },
  {
    version: '1.9.0', date: 'October 2026', title: 'MSE interviewer sheet',
    items: [
      ['new', 'MSE interviewer sheet (Psychiatry → MSE interviewer sheet): a two-page Tagalog question sheet for the OPD and wards. Mood, depression (D-I-S-A-E-C-G-P + hopelessness), suicide (screen, explore, protective factors), mania (D-S-A-F-P-I-G-R), hallucinations, delusions by type with conviction and action, anger and impulse control, violence, substances, anxiety, cognition, insight and judgment, closing, and the observed parts of the MSE.'],
      ['new', 'Print it from the app (A4, three columns, two pages) or download the ready-made PDF; works offline. Show or hide English, and tap any line to hear it.'],
      ['content', 'Phrases marked UT are the same ones used in the rest of the app; the other ward questions were written for this sheet and are practice phrasings, not validated translations.']
    ]
  },
  {
    version: '1.8.1', date: 'October 2026', title: 'MSE Trainer link',
    items: [
      ['new', 'Links to the MSE Trainer\'s new Tagalog cases from the Psychiatry page and the admission MSE practice: quick drills on naming a single finding, including Filipino culture-or-pathology look-alikes.'],
      ['content', 'The audio pack now also records the MSE Trainer\'s Tagalog lines, so both apps use the same Filipino voice.']
    ]
  },
  {
    version: '1.8.0', date: 'October 2026', title: 'Admission MSE practice',
    items: [
      ['new', 'Admission MSE practice (Psychiatry → Admission MSE practice): interview a simulated patient on admission, in the order of the MSE section of the hospital\'s Readmission Form (MMH-MED-04-26-01/02).'],
      ['new', 'Start with the chief complaint in the informant\'s own words, then document each domain: appearance, psychomotor activity, attitude, mood and affect, speech, thought process, perception, thought content, suicidal and homicidal ideation, orientation, insight, impulse control, and judgment.'],
      ['new', 'Evidence questions: after checking a domain, choose the patient line that supports the key finding.'],
      ['new', 'Compare your MSE with the model, write it as you would on the form for self-check, and see the same patient\'s admission and discharge MSE side by side.'],
      ['content', 'First case: Mang Ramon on readmission (schizophrenia). Traps include dropping "po" as a sign of irritability, delusional content with a linear thought process, and a family\'s engkanto explanation that is not the patient\'s delusion.']
    ]
  },
  {
    version: '1.7.0', date: 'October 2026', title: 'More discharge cases',
    items: [
      ['content', 'Three new discharge practice cases: bipolar I disorder with mania settling (on lithium), methamphetamine-induced psychosis, and first-episode schizophrenia where the family wants discharge but the patient is not ready.'],
      ['new', 'Each case now ends with your decision: discharge today or defer. It is compared with the model and counts toward the score.'],
      ['new', 'Some answers now come from a family member, labeled with who is speaking.'],
      ['improved', 'Discharge assessment: new documentation picks for lithium, divalproex, haloperidol, quetiapine, sertraline, bipolar I in partial remission, methamphetamine-induced psychotic disorder, command hallucinations, tremor, withdrawal, safety plan, laboratory tests, and deferred discharge.'],
      ['improved', 'Discharge assessment: five new questions (command hallucinations, reduced need for sleep, offers of shabu or alcohol, lithium safety, explaining a deferred discharge to the family), and a safety flag when command hallucinations persist.']
    ]
  },
  {
    version: '1.6.0', date: 'October 2026', title: 'Discharge practice cases',
    items: [
      ['new', 'Discharge practice (Psychiatry → Discharge practice): interview a simulated patient on the day of discharge, using the same fields and questions as the Discharge Summary form (MMH-MED-04-04-02).'],
      ['new', 'Tap Ask to hear the patient answer in Tagalog. Read the chart and ward notes, then document each field with the form\'s wording.'],
      ['new', 'Check each field against a model answer: what you missed, what the findings don\'t support and why, and any key question you didn\'t ask.'],
      ['new', 'At the end, compare your discharge MSE with the model field by field, with a score and safety flags for missed suicide or homicide findings.'],
      ['content', 'Two cases: schizophrenia back on medicine (a teach-back error and a restraint only in the chart), and recurrent depression with a passive death wish that comes out only on the third question.']
    ]
  },
  {
    version: '1.5.0', date: 'October 2026', title: 'Discharge assessment',
    items: [
      ['new', 'Discharge assessment (Psychiatry → Discharge assessment): go through each field of the hospital Discharge Summary form (MMH-MED-04-04-02) one at a time.'],
      ['new', 'Each field shows what to assess, the Tagalog questions to ask (with audio), likely patient answers, and standard wording to tap into your documentation.'],
      ['new', 'Summary in the form\'s layout, ready to copy, with safety flags for suicidal or homicidal ideas, persisting delusions, poor insight, and empty fields.'],
      ['new', 'Insight graded on the 1–6 scale, the patient\'s own words for mood, and teach-back for discharge medications.'],
      ['new', 'Printable discharge summary interview guide in the handout generator.'],
      ['content', '53 new discharge questions, also in flashcards, search, and the audio pack.']
    ]
  },
  {
    version: '1.4.0', date: 'October 2026', title: 'Natural Filipino audio',
    items: [
      ['new', 'Tagalog audio pack: every word and phrase in the app (about 3,000) recorded with a natural Filipino neural voice, played instead of the device voice.'],
      ['new', 'The pack is recorded by a GitHub job and updates itself when content changes. Choose a female or male voice and the speaking rate.'],
      ['new', 'Settings → Voice: switch between the recorded voice and the device voice, see what is installed, and save all audio for offline use.'],
      ['fixed', 'Without a recording or a Filipino device voice, the app now uses the closest voice (Indonesian, Malay, or Spanish) instead of an English one.'],
      ['improved', 'Dialogues, readings, and the de-escalation drill play recorded clips in sequence.']
    ]
  },
  {
    version: '1.3.0', date: 'October 2026', title: 'De-escalation: drills, pocket card, and next steps',
    items: [
      ['new', 'Practice case "Agitated patient: de-escalation": choose your words step by step through the checklist, with feedback. Also available as a spoken role-play.'],
      ['new', 'Rapid drill: listen-and-repeat loops and timed quick-response prompts so the first lines come out automatically.'],
      ['new', '"If it fails" guide: escalation, restraint or seclusion as a last resort, monitoring, release, and debrief, with Tagalog phrases for each.'],
      ['new', 'De-escalation pocket card: two A6 sides with the 12 steps and one Tagalog line each. Print double-sided and laminate.'],
      ['improved', 'Checklist and printouts now show Mariveles Mental Wellness and General Hospital and form number MMH-NUR-04-112-01.'],
      ['content', '11 new phrases for restraint, monitoring, release, and debriefing.']
    ]
  },
  {
    version: '1.2.0', date: 'October 2026', title: 'De-escalation checklist',
    items: [
      ['new', 'De-escalation checklist (Psychiatry → De-escalation checklist): tick the behaviors observed, work through the 12 steps, and record the outcome.'],
      ['new', 'Every step has Tagalog phrases to say aloud, in respectful and everyday forms, with tips such as keeping two arms\' length and an open exit.'],
      ['new', 'Escalation path built in: if de-escalation fails, the NAOD refers to the NOD, and the POD is notified at all times.'],
      ['new', 'Copyable chart note with time, behaviors, steps done, and remarks. Nothing is saved and no patient details are asked for.'],
      ['new', 'Printable blank checklist with Tagalog phrases in the handout generator, also included in the Risk assessment and Complete reference presets.'],
      ['content', '17 new de-escalation phrases, also added to flashcards and search.']
    ]
  },
  {
    version: '1.1.0', date: 'October 2026', title: 'Printable psychiatry handouts',
    items: [
      ['new', 'Handout generator (Psychiatry → Printable handout): download a PDF or print the psychiatric interview flow and the MSE.'],
      ['new', 'English translation can be shown, hidden for practice, or moved to an answer key at the end.'],
      ['new', 'Five starting points: Full interview + MSE, MSE only, Risk assessment, Pocket booklet (A5), and Complete reference.'],
      ['new', 'Interview flow overview with numbered steps and "go to risk assessment now" branch points.'],
      ['new', 'MSE table: what to assess, Tagalog prompts, and plain Tagalog descriptions families use; optional blank MSE write-up form.'],
      ['new', 'Choose respectful, everyday, or both registers; A4, Letter, or A5; three text sizes; tips and likely patient answers on or off.'],
      ['improved', 'Each psychiatry section has a "Handout of this section" button.'],
      ['improved', 'PDFs work offline once the app has been opened online.']
    ]
  },
  {
    version: '1.0.0', date: 'October 2026', title: 'First release',
    items: [
      ['new', 'Psychiatry Tagalog track: 26 sections and 315 phrases from opening and consent to MSE, risk, management, children, and elderly patients. Every phrase comes in a respectful (po) form and an everyday form.'],
      ['new', 'Hallucination and delusion screening phrases, including spirit and folk-belief questions ("Nakakakita ka ba ng mga anino o maligno?", "May bumubulong ba sa iyo?").'],
      ['new', 'Five interactive case simulations: first-episode psychosis, depression with suicide risk, mania, delirium, and alcohol withdrawal.'],
      ['new', 'Patient-response interpretation drill with clinical significance for each line.'],
      ['new', 'English–Filipino and Filipino–English dictionary (about 1,650 entries) with root-word search (type "kinakain" to find "kain").'],
      ['new', 'Universal search across the dictionary, lessons, reading, dialogues, and psychiatry phrases.'],
      ['new', 'Spaced-repetition flashcards with decks by topic, a psychiatry deck, and an automatic mistakes deck.'],
      ['new', 'Verb aspect and affix trainer covering -um-, mag-, ma-, -in, i-, and -an.'],
      ['new', 'Grammar and culture lessons: markers, focus, aspect, particles, po/opo, numbers and time, Taglish, hiya, utang na loob, folk beliefs, and idioms of distress.'],
      ['new', 'Graded reading passages with glossaries and comprehension questions.'],
      ['new', 'Speaking drills with text-to-speech, speech recognition (where the browser supports it), and record-and-compare.'],
      ['new', 'Placement test, levels, streaks, progress stats, and backup export/import.'],
      ['new', 'Dark and light mode, back and forward buttons, offline support, and install-to-home-screen.']
    ]
  }
];

/* Placement test: [level, question, options, correctIndex] */
window.PLACEMENT = [
  ['A1', '"Salamat po" means:', ['Good morning', 'Thank you (polite)', 'Goodbye'], 1],
  ['A1', '"Ilang taon ka na?" asks about your:', ['name', 'age', 'job'], 1],
  ['A1', 'Which is "I"?', ['ako', 'ikaw', 'siya'], 0],
  ['A1', '"Masakit ang ulo ko" means:', ['My head hurts', 'I\'m hungry', 'I\'m sleepy'], 0],
  ['A1', 'Choose the marker: "Pumunta ako ___ ospital."', ['ang', 'ng', 'sa'], 2],
  ['A2', '"Kumain ka na ba?" means:', ['Will you eat?', 'Have you eaten?', 'Are you eating?'], 1],
  ['A2', 'Incompleted (ongoing) form of "inom" (-um-):', ['uminom', 'umiinom', 'iinom'], 1],
  ['A2', '"We" including the listener:', ['kami', 'tayo', 'sila'], 1],
  ['A2', '"Alas-tres" is:', ['3 o\'clock', '3 pesos', '3 days'], 0],
  ['A2', '"Wala akong gana" means:', ['I have no appetite/drive', 'I have no money', 'I am not here'], 0],
  ['B1', '"Hindi na siya umiinom ng gamot" means:', ['He hasn\'t taken it yet', 'He no longer takes his medicine', 'He will take it'], 1],
  ['B1', '"Ano ang sinabi ng boses?" uses which focus?', ['actor', 'object', 'locative'], 1],
  ['B1', '"May naririnig daw siyang boses" — "daw" tells you:', ['he denies it', 'it\'s reported by someone', 'it happened long ago'], 1],
  ['B1', 'Correct particle order: "Have you eaten already?"', ['Kumain ka na ba?', 'Kumain na ka ba?', 'Kumain ba na ka?'], 0],
  ['B1', '"Hiya" best translates as:', ['joy', 'shame/propriety', 'anger'], 1],
  ['B2', '"Kapag may tiyaga, may nilaga" means:', ['Patience leads to reward', 'Eat stew when sad', 'Be quick'], 0],
  ['B2', '"Sinasaniban siya" most likely means:', ['He is being possessed', 'He is being fed', 'He is sleeping'], 0],
  ['B2', 'Contemplated, object focus of "kuha":', ['kinuha', 'kukunin', 'kumukuha'], 1],
  ['B2', '"Pabigat lang ako sa pamilya ko" signals:', ['gratitude', 'perceived burdensomeness', 'boredom'], 1],
  ['B2', '"Ipinagluto ko siya" means:', ['I cooked him', 'I cooked for him', 'He cooked for me'], 1]
];
