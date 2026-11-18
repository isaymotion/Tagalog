/* What's New. Newest entry FIRST. version = semver string (also the key for the unseen badge on Home,
   the menu and the footer). date = ISO: YYYY-MM-DD, or YYYY-MM for releases before version 3 whose exact day
   was not recorded. Item type: feature | update | correction | content.
   For every release: add an entry here, then bump APP_META.version (data/app-meta.js) and VERSION in sw.js. */
window.APP_CHANGELOG = [
  {
    version: '3.18.0', date: '2026-11-18', title: 'Six more picture sets, two redrawn pictures',
    items: [
      { type: 'content', text: 'Picture words has six more pictures: shops in town, at the botika, kitchen tools, a bed on the ward, sports and hobbies, and clocks and the calendar. That is 87 more words and 60 more sentences for Listen and point.' },
      { type: 'update', text: 'The arm and hand picture is redrawn with a full forearm and shoulder, and the kitchen picture now shows the burners of the stove. Their words are the same.' },
      { type: 'content', text: 'All the new Tagalog is a draft for review. Words with two natural choices accept both when you type, for example cashier or kaha, bedsheet or kobre-kama, videoke or karaoke.' }
    ]
  },
  {
    version: '3.17.0', date: '2026-11-18', title: 'Practise a lesson, Listen and reply, 640 more words',
    items: [
      { type: 'feature', text: 'Practise this lesson: every lesson page has a button to ten gap sentences on exactly what that lesson teaches. Each unit review has Practise this unit. There is also a lesson picker under Drills.' },
      { type: 'feature', text: 'Listen and reply: hear a line from a neighbor, a vendor, a patient or a relative, then choose the natural reply from four. Choose Everyday or Clinical and a level from A1 to B2. Lines you miss can be practised again.' },
      { type: 'content', text: '640 more dictionary words, each with an example sentence: feelings, thinking and memory, symptoms, hospital words, self-care, family life, character, barangay and government, storms and farming, travel, work and money, school, cooking, the house, church and wakes, phones and messaging, time words.' },
      { type: 'content', text: '760 gap sentences by lesson, 72 Listen and reply lines, 79 more find-the-mistake sentences and 71 more change-the-sentence items.' },
      { type: 'content', text: 'Six more readings (A2 to C1) and six more dialogues (A2 to B2), including a ward visit, a thank-you letter, a follow-up visit and a family meeting.' },
      { type: 'update', text: 'The daily mix can now draw a lesson-practice question and a Listen and reply question.' }
    ]
  },
  {
    version: '3.16.0', date: '2026-11-18', title: 'Twenty more grammar lessons, to B2',
    items: [
      { type: 'content', text: 'Verbs: mag- or -um-, choosing -in, i- or -an, mang- verbs, pang- words and ipang- verbs, feeling verbs (natatakot or nakakatakot), may and wala with verbs, ka- -an verbs of feeling, and magsi- for many doers.' },
      { type: 'content', text: 'Building sentences: reason and result, when and after clauses, while, before, after and until, kahit and kung with question words, and nang or ng.' },
      { type: 'content', text: 'Natural speech: softeners (naman, nga, muna, sana), din or rin and daw or raw, and sentence tags (\'no, ha, di ba, kaya, pala).' },
      { type: 'content', text: 'Register and style: giving instructions step by step, and formal written Filipino as seen in forms and notices. Everyday life: ordinals and tig-, and saying things are the same (kasing-, pareho, gaya ng).' },
      { type: 'feature', text: 'Each new lesson has its own quiz, common mistakes, more examples and a More practice quiz, and a place in its unit\'s review.' },
      { type: 'update', text: 'Every unit now has ten lessons or fewer. Lessons are in a teaching order within each unit.' }
    ]
  },
  {
    version: '3.15.0', date: '2026-11-18', title: 'An example sentence for every word',
    items: [
      { type: 'feature', text: 'Every dictionary word now has an example sentence with audio. It shows on the word\'s page, with the word highlighted, and on the back of its flashcard.' },
      { type: 'feature', text: 'In context, a new game on the Vocabulary practice page: ten sentences with a word missing. Choose the word that fits among four of the same kind. Words you miss go to My mistakes.' },
      { type: 'update', text: 'The daily mix can now also draw an In context question.' },
      { type: 'content', text: '2,128 example sentences: ward, clinic and family-visit sentences for health, mind and feeling words, everyday sentences for the rest. All drafted for study and pending review by a native speaker.' }
    ]
  },
  {
    version: '3.14.0', date: '2026-11-18', title: 'Lesson extras, nine units and unit reviews',
    items: [
      { type: 'feature', text: 'Every lesson now ends with Common mistakes: the wrong line is struck through, then the correct line with audio and a short reason.' },
      { type: 'feature', text: 'More examples: six extra sentences in every lesson, half from the ward and half from everyday life, each with audio.' },
      { type: 'feature', text: 'More practice: a second quiz of six questions after each lesson\'s own quiz. Its best score is kept separately.' },
      { type: 'feature', text: 'The lessons are now grouped into nine units, and each unit ends with a Review: one key point and one example per lesson, and a mixed quiz of ten questions.' },
      { type: 'update', text: 'The lesson handout can print the common mistakes, the extra examples and the extra quiz with its answers.' },
      { type: 'content', text: '168 common mistakes, 336 more examples, 336 more quiz questions and nine unit reviews. All drafted for study and pending review by a native speaker.' },
      { type: 'correction', text: 'Pronunciation lesson: the stress of bukas was the wrong way round. BUkas is tomorrow and buKAS is open.' }
    ]
  },
  {
    version: '3.13.0', date: '2026-11-18', title: 'Vocabulary practice: seven word games',
    items: [
      { type: 'feature', text: 'A new Vocabulary practice page with seven short games: Match the pairs, Opposites, What goes with it? (uminom ng gamot, magsipilyo ng ngipin), Odd one out, Type the word, Hear the word, and Guess the meaning from the parts.' },
      { type: 'feature', text: 'Choose the words to practise: your mistakes and cards due, all words, or one topic of the dictionary.' },
      { type: 'feature', text: 'Your words by topic: for each topic, how many words there are, how many are in your flashcards and how many you know well.' },
      { type: 'content', text: '70 pairs of opposites, 77 word partners and 50 odd-one-out sets.' },
      { type: 'update', text: 'The daily mix can now also draw from opposites, word partners, odd one out and word parts.' }
    ]
  },
  {
    version: '3.12.0', date: '2026-11-18', title: 'Seven more grammar drills and a printable drill sheet',
    items: [
      { type: 'feature', text: 'Choose the aspect: 534 sentences from the verb trainer with the verb taken out. Pick the form that fits the English: done, going on, still to come, or the plain form.' },
      { type: 'feature', text: 'Five gap drills, 150 sentences: Na, -ng or nothing? (linkers), Choose the small word (na, pa, lang, naman, pala, kasi, muna, sana), Ako, ko or akin?, Choose the question word, and Hindi, wala or huwag?' },
      { type: 'feature', text: 'Change the sentence, 48 items: make it a question, make it negative, make it respectful, or change the time. Choose the answer or type it.' },
      { type: 'feature', text: 'Drills handout: print a worksheet of gaps, find the mistake, switch the focus, change the sentence, translation and dictation, with an answer key. Use the Print handout button on the Drills page.' },
      { type: 'update', text: 'The Drills page is now in three groups: Grammar, Vocabulary, and Listening and writing. The daily mix draws its eight grammar questions from fifteen drills.' }
    ]
  },
  {
    version: '3.11.0', date: '2026-11-18', title: 'Ten more grammar lessons',
    items: [
      { type: 'content', text: 'Ten new lessons, 56 in all: if and when (kung, kapag, sakali, basta, sana); reporting what others said (sabi, ayon sa, akala ko); doing things with other people (maki-, makipag-, mag- -an); things that just happen (naiwan, nahulog, napaiyak); more than one (mga, sina, magkakapatid); where (nasa, sa, nandito, galing sa); the man who, the medicine that (joining a clause to a noun); Tagalog as it is really spoken (yung, \'di, \'wag, pa\'no); which numbers when (alas-dos, bente pesos, dalawang tableta); and exclamations (Ang ganda! Naku! Sayang!).' },
      { type: 'feature', text: 'The new lessons have six quiz questions each, a table of forms, a clinical tip and a common mistake.' },
      { type: 'update', text: 'In the lesson on spoken short forms the voice is given each line without its apostrophes, so that s\'ya and pa\'no are read as words. The new recordings arrive a few minutes after the update.' }
    ]
  },
  {
    version: '3.10.1', date: '2026-11-18', title: 'TV is said correctly',
    items: [
      { type: 'correction', text: 'The recorded voice said TV as "tebai". It now says ti-bi everywhere TV appears: the picture words, the dictionary and every sentence with the word. The new recordings arrive a few minutes after the update.' }
    ]
  },
  {
    version: '3.10.0', date: '2026-11-18', title: 'Picture words, body map, signs and buttons, picture lessons',
    items: [
      { type: 'feature', text: 'Picture words (Practice, Pictures): 38 picture sets with 509 everyday and ward words. 23 are labelled drawings (the body front and back, face, arm and hand, leg and foot, inside the body, a house, living room, kitchen, bathroom, bedroom, a street, a station, a hospital floor plan, where things are, a dog and a bird, a car, a bicycle, computer and phone, a meal tray, clothes, a landscape, a family tree) and 15 are picture cards (animals, food, vehicles, things on the ward, weather, feelings, the daily routine and more). Four ways to practise each set: Learn by tapping, Identify, Label it (choose or type) and Listen and point, with 380 sentences.' },
      { type: 'feature', text: 'Print sheet for every picture set: a numbered picture with blank lines to label, and an answer key.' },
      { type: 'feature', text: 'Body map (Practice, Pictures): the patient taps where it hurts and the word shows large in Tagalog and English. Eight questions to ask and ten pain words, with sound, and a one-page handout with a plain 0 to 10 line. Nothing is saved.' },
      { type: 'feature', text: 'Signs and buttons: 118 Philippine signs in seven groups (in the hospital, getting around, on the street, doors and buildings, in a shop, in the CR, on the medicine label) with a quiz both ways, and ten machine panels (electric fan, rice cooker, aircon remote, TV remote, twin-tub washing machine, water dispenser, ATM, elevator, queue number machine, hospital bed and nurse call). On a panel you hear a request in Tagalog and press the right button.' },
      { type: 'content', text: 'Ten picture lessons in a new unit: Nasaan (where things are), Masakit ang … (body words and pain), describing with ang and may, counting things, what someone is wearing, giving directions, how signs talk, machine words, naka- for how things are, and explaining with a diagram. 46 lessons in all.' },
      { type: 'content', text: 'Dictionary: 170 new words from the pictures (2,134 in all).' },
      { type: 'update', text: 'All of the new Tagalog is a draft for Dr. Navarro to check. The drawings are shared with the Japanese sister app, so a few show Japanese things (a bathtub, chopsticks, a rice bowl); they are labelled the way a Filipino would name them.' }
    ]
  },
  {
    version: '3.9.4', date: '2026-11-17', title: 'Stress pairs: last-syllable recordings fixed, By ear is back',
    items: [
      { type: 'correction', text: 'The last-syllable sentences on the Stress pairs tab (tu-LOG, bu-KAS, ga-LIT, ba-SA and the rest) are re-recorded with the stress in the right place, checked by ear by Dr. Navarro, and have their speaker buttons back. The By ear set of the stress drill is back too.' },
      { type: 'correction', text: 'The pair suka (vinegar, vomit) is removed from the stress pairs: both words are stressed on the first syllable and differ only by the catch in the throat at the end of vinegar. There are now 27 pairs.' }
    ]
  },
  {
    version: '3.9.3', date: '2026-11-17', title: 'Stress pairs: faulty recordings removed',
    items: [
      { type: 'correction', text: 'The re-recorded last-syllable sentences of version 3.9.2 swallowed the stressed vowel (Tulog pa ang pasyente came out as "Tulg"). They are removed. On the Stress pairs tab only the first-syllable sentences have a speaker button until a recording has been approved by ear.' }
    ]
  },
  {
    version: '3.9.2', date: '2026-11-17', title: 'Stress pairs: last-syllable sentences re-recorded',
    items: [
      { type: 'correction', text: 'On the Stress pairs tab, the sentences with a last-syllable stress (bu-HAY, la-BI, su-NOG) have a speaker button again, re-recorded with a spelling the voice stresses on the last syllable. They are still being checked by ear; the By ear set of the stress drill stays off until that is done.' }
    ]
  },
  {
    version: '3.9.1', date: '2026-11-17', title: 'Stress pairs: wrong audio removed',
    items: [
      { type: 'correction', text: 'The recorded voice said several last-syllable words (labi, buhay, sunog, paso, basa) with the stress on the first syllable. Sentences with a last-syllable stress no longer have a speaker button, and the By ear set of the stress drill is switched off until those clips are right. The capitals (bu-HAY) are correct and unchanged.' }
    ]
  },
  {
    version: '3.9.0', date: '2026-11-17', title: 'Daily mix, three new drills, stress pairs, Spanish and English words',
    items: [
      { type: 'feature', text: 'Daily mix on Home and Practice: ten mixed questions in about five minutes. Two words (your mistakes and due cards first), then one question each from markers, register, roots, word families, false friends, focus, stress and find the mistake. Home shows when you have done it today.' },
      { type: 'feature', text: 'Three new drills. Switch the focus: read a sentence and choose, or type, the same sentence with the other topic (Uminom ang pasyente ng gamot, Ininom ng pasyente ang gamot). Find the mistake: tap the one wrong word in a sentence, then read the correction. Same spelling, different stress: bukas is tomorrow or open, gutom is hunger or hungry; work it out from the sentence, by ear, or from the meaning.' },
      { type: 'feature', text: 'Two new tabs on the Word families page. Stress pairs: 28 spellings that are two words, each with a sentence for both meanings. Spanish and English: 46 false friends (siguro is maybe, not sure; delikado is dangerous; bisyo, multo, nerbiyos and other words that matter in an interview), 12 spelling rules, and 111 look-alikes that kept their meaning.' },
      { type: 'feature', text: 'Two new sets in the Word families drill: False friends and Borrowed words.' },
      { type: 'update', text: 'The placement test now goes up to C1: five new questions, 25 in all. A level you already have stays until you take the test again.' },
      { type: 'content', text: 'All new Tagalog is a draft awaiting review by Dr. Navarro. Audio for the new sentences is recorded automatically shortly after release.' }
    ]
  },
  {
    version: '3.8.0', date: '2026-11-17', title: 'Six more lessons, four new drills, word families',
    items: [
      { type: 'feature', text: 'Four new drills on the Drills page. Find the root: strip the affixes from a dictionary word. Word families: choose the right word from one root, match a deep Filipino word to the everyday one, or pick the stronger of two words. Numbers, times and doses: hear an age, a clock time or a dose and type it. Say it in Tagalog: read an English line and type the Tagalog, with several accepted answers.' },
      { type: 'feature', text: 'New Word families page (More → Word families). Sixteen roots with the words built from them (tulog, kain, inom, takot, lungkot, isip and more), eight sets of words for a feeling from mild to strong, and 28 ideas in deep Filipino, everyday speech and Taglish. Dictionary entries link to their family.' },
      { type: 'content', text: 'Six new lessons with quizzes: Where the short words go (ka, ko, na, pa, po, ba); Time words (kanina, mamaya, tuwing, simula noong); How much (medyo, sobra, napaka-, and doubling); Three more focuses (place, beneficiary, instrument); Making nouns (pag-, ka- -an, pagka-); and Kaka- (it only just happened). There are now 36 lessons.' },
      { type: 'content', text: '115 new dictionary words: commuting, kitchen and cooking, market and produce, house and household things, farming and fishing, family occasions, body sensations in plain words, and time expressions.' },
      { type: 'content', text: 'All new Tagalog is a draft awaiting review by Dr. Navarro. Audio for the new words and sentences is recorded automatically shortly after release.' }
    ]
  },
  {
    version: '3.7.0', date: '2026-11-17', title: 'Six grammar lessons, three new drills, 191 new words',
    items: [
      { type: 'feature', text: 'New Drills page (Practice, or More → Grammar drills) with three drills of ten items each. Choose the marker: ang, ng or sa; si, ni or kay; ito, iyan or iyon. Build the sentence: tap word tiles into order to learn where na, po, ba, ko and the other short words go. Formal or everyday: match each interview line to the same line in the other register.' },
      { type: 'content', text: 'Six new lessons with quizzes: Ito, iyan, iyon (this, that, here, there); Connecting ideas (kasi, kaya, pero, kung, kapag); Maka- and ma- (able to, happened to, by accident); Magpa- and pa- (having something done); Asking and telling (paki-, nga, huwag); and Daw, yata, baka, siguro, parang (how sure is the speaker). There are now 30 lessons.' },
      { type: 'content', text: '191 new dictionary words in themed sets: daily routine and self-care, sleep, livelihood, barangay and benefits, courts and police, faith, phones and social media, weather and disasters, plus more colors, people, clothing, school and money words. Two new dictionary topics: Daily routine & sleep, and Barangay, papers & the law.' },
      { type: 'update', text: 'Dictionary flashcards now keep their place when new words are added. Before this version, adding words could move saved flashcard progress to a different word.' },
      { type: 'content', text: 'All new Tagalog is a draft awaiting review by Dr. Navarro. Audio for the new words and sentences is recorded automatically shortly after release.' }
    ]
  },
  {
    version: '3.6.3', date: '2026-11-16', title: 'New abbreviations are read correctly by default',
    items: [
      { type: 'update', text: 'Any new abbreviation in capitals (for example DSM or ADHD) is now spelled out letter by letter automatically, the way a Filipino speaker says it. Capital words are read as words only in headings such as PARA SA: or PAKSA:, when they are Tagalog dictionary words, or for the few abbreviations said as words (PAGASA, COVID, CIWA, OK). Nothing you hear today changes.' }
    ]
  },
  {
    version: '3.6.2', date: '2026-11-16', title: 'Clearer audio across the whole app',
    items: [
      { type: 'correction', text: 'The voice now says abbreviations the way a Filipino speaker would, everywhere in the app: Doc as "Dok", Dr. and Dra. as Doktor and Doktora, NCMH, OPD, ER, CR, TV, OT, ATM and other acronyms letter by letter, the 1553 and 911 hotlines digit by digit, "y medya" as "i medya", and I-summarize or I-check at the start of a sentence with an "ee" sound. All-caps headings such as PARA SA are read as words. About 60 clips were re-recorded. The text on screen is unchanged.' }
    ]
  },
  {
    version: '3.6.1', date: '2026-11-16', title: 'Clearer audio in the listening exercises',
    items: [
      { type: 'correction', text: 'Lines with abbreviations were read strangely by the voice: PRN, BP, BHW, NCMH, Dr., Dra., Doc, I-inform, bed and gate numbers, the 1553 hotline and "y medya". They are now recorded from a spelling the voice reads correctly (pi-ar-en, Dok, i-inform with an "ee" sound). The text on screen and the dictation answers keep the normal spelling.' }
    ]
  },
  {
    version: '3.6.0', date: '2026-11-16', title: 'Listening handouts and three more recordings',
    items: [
      { type: 'feature', text: 'Print any listening exercise: a notes box, the questions and two dictation lines, then the transcript and the answer key on their own pages. Use the Print handout button on each recording, or Print a listening handout on the Listening page. Play the audio from the app while the class works on paper.' },
      { type: 'content', text: 'Three new recordings: a resident phoning a patient\'s sister for the family history (B2), an OPD triage where one answer changes the plan (B1), and a barangay assembly on a new community mental health program (C1).' },
      { type: 'update', text: 'Reading and listening handouts now print the answer options in a mixed order, so the right answer is not always A. Each sheet still prints the same way every time.' }
    ]
  },
  {
    version: '3.5.0', date: '2026-11-16', title: 'Listening exercises and harder readings',
    items: [
      { type: 'feature', text: 'New Listening section (in More, under Learn, and on the Practice page) with six recordings from real life: a clinic voicemail, a bus terminal announcement, a typhoon bulletin on the radio, a nurse shift endorsement in Taglish, a family deciding how to bring Tatay for a check-up, and a radio interview with a psychiatrist. Levels B1 to C1.' },
      { type: 'feature', text: 'Each recording is audio first: play it all, replay any single line, or slow it down. Answer the questions by ear, then open the transcript (with or without English) and finish with a short dictation scored by matching words.' },
      { type: 'content', text: 'Five longer reading passages at B2 and C1: the Death March and Mariveles, a flood news report, a ward visiting memo, an opinion piece on hiya and asking for help, and a short story about a jeepney driver\'s last trip. The questions now ask for inference, tone and the writer\'s stance, not just details.' },
      { type: 'feature', text: 'Every reading passage has a Listen first button that hides the text so you can answer by ear, then show the text to check.' }
    ]
  },
  {
    version: '3.4.0', date: '2026-11-16', title: 'Print handouts for readings and dialogues',
    items: [
      { type: 'feature', text: 'Every reading passage now has a Print handout button. The handout has the Tagalog passage, the glossary, the questions with lettered options and an answer key. Put the English under each paragraph, on its own page, or leave it out for a Tagalog-only sheet.' },
      { type: 'feature', text: 'Every dialogue, including the clinical ones from the case simulations, has a Print handout button too. It prints the script and a role-play worksheet: the other speakers\' lines are shown, and your lines are left blank with the English cue for you to write in Tagalog. The answer key lists your lines. You can choose the respectful or the everyday (Taglish) wording.' },
      { type: 'update', text: 'Both handouts download as PDF or print on A4, Letter or an A5 booklet, and remember your choices on this device.' }
    ]
  },
  {
    version: '3.3.0', date: '2026-11-16', title: 'Three more admission MSE cases',
    items: [
      { type: 'content', text: 'Admission MSE practice has three new patients, each seen on the day of admission: Carlo (mania: pressured speech, flight of ideas with clanging in Tagalog, grandiose delusions), Arnel (shabu-induced psychosis: hypervigilance, visual hallucinations, a threat to a neighbor) and Mika (first-episode schizophrenia: thought blocking, command hallucinations, found on a rooftop ledge). Each links to the same patient\'s discharge case for the admission vs discharge comparison.' },
      { type: 'update', text: 'The three are first admissions. Until the hospital\'s initial admission form is added, they use the MSE order of the Readmission Form. Tagalog lines are a draft for review; audio follows on the next audio-pack run.' },
      { type: 'correction', text: 'The voice no longer reads stage directions aloud. In lines like "(tumango) ...Hindi po", the part in brackets is now skipped when the line is played.' }
    ]
  },
  {
    version: '3.2.0', date: '2026-11-14', title: 'Resident / Nurse switch and nurse phrase sections',
    items: [
      { type: 'feature', text: 'Psychiatry → Interview now has a Resident / Nurse switch. The Nurse view shows six nurse sections first, then the resident sections most used on the ward (de-escalation, suicide, violence, medicines, admission, older patients). Prev / next on a section page follow the list you see. The switch is the same setting the substance use and withdrawal tools already use for their nurse scripts.' },
      { type: 'content', text: 'Six nurse sections, 125 phrases in respectful (po) and everyday forms: arriving on the ward, giving medicines and checking side effects, sleep and daily care, safety checks for suicide risk and agitation, calming things down, and teaching patients and families. Each has 10 likely replies on the point board and in the listening drill. Draft for review; nurse content is pending Nursing Service review.' },
      { type: 'update', text: 'Flashcards, search, the point board and the listening drill include the nurse sections in both views. Audio for the new lines follows on the next audio-pack run.' }
    ]
  },
  {
    version: '3.1.2', date: '2026-11-13', title: 'Menu scrolling fixed',
    items: [
      { type: 'correction', text: 'The menu that opens from More now scrolls on phones and tablets. Before, it was taller than the screen and could not be scrolled, so the items at the bottom of the list (such as Settings and About) could not be reached from it.' }
    ]
  },
  {
    version: '3.1.1', date: '2026-11-08', title: 'Replies for every section, lesson example fix',
    items: [
      { type: 'content', text: 'Point board and listening drill: likely patient replies for the ten sections that showed only the general replies (substance use screening, betel, other substances, gambling, screening tools, motivational interviewing, PHQ-9 and MDQ, alcohol and cannabis withdrawal, agitation). Draft for review; audio follows on the next audio-pack run.' },
      { type: 'correction', text: 'Lesson example boxes: the Tagalog line no longer collapses to one word per line under the English when the speaker button is added.' }
    ]
  },
  {
    version: '3.1.0', date: '2026-11-08', title: 'Point board, listening drill, interpreter lesson',
    items: [
      { type: 'feature', text: 'Point board (Ituro): when the answer is too fast, turn the phone around. The patient taps a reply, the phone speaks it and you read the English. General replies (yes/no, how often, since when, how much, how I feel, I need…), a 0–10 scale, and likely replies for every interview section. Nothing is saved. Psychiatry → Ward tools, or the Point board button on any section.' },
      { type: 'feature', text: 'Listening drill: hear a patient or family reply at natural speed (or slower), choose its meaning, then see the Tagalog. Draws on the point-board replies, the interpretation drill and the case simulations; filter by section.' },
      { type: 'content', text: 'New lesson: When your Tagalog is not enough — interviewing alone vs asking a nurse to interpret, why family should not interpret the patient\u2019s own account, how to run an interpreted interview, and which rating-scale version belongs in the chart.' },
      { type: 'content', text: 'About 300 likely patient replies added across all 27 interview sections (draft for review). Audio for them is recorded by the next audio-pack run.' },
      { type: 'update', text: 'Source and licence notes for the PHQ-9 and MDQ in the Mood episode checker: the lines in the app are training paraphrases; documented scores come from the published instruments.' },
      { type: 'update', text: 'Under the hood: language-specific settings (voices, register labels, quiz words) moved to js/lang.js so a sister app for another language can reuse the engine.' }
    ]
  },
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
