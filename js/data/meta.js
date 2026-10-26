/* App metadata, attribution, What's New, and placement test. */
window.APP_META = {
  name: 'Usap Tayo',
  tagline: 'Tagalog for clinicians',
  version: '1.6.0',
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
