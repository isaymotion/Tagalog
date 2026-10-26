/* Discharge summary assessment, field by field, following the hospital's Discharge Summary form (MMH-MED-04-04-02).
   For each field: what to assess, Tagalog questions to ask, likely answers, and standard wording to document.
   Only the form's structure is used; no patient or staff information is stored.
   The questions are also added as the "discharge" phrase section (flashcards, search, audio pack, handouts). */
(function () {
  const P = (en, f, c, extra) => Object.assign({ en, f, c }, extra || {});
  const FIELDS = [
    { id: 'behavior', group: 'Discharge MSE', label: 'Behavior/Attitude', kind: 'observe',
      assess: 'Observe throughout the interview: grooming, eye contact, psychomotor activity, cooperation, and attitude toward the examiner. Compare with the admission MSE.',
      ask: [
        P('How are you today?', 'Kumusta po kayo ngayong araw?', 'Kumusta ka ngayong araw?'),
        P('May I talk with you for a few minutes before you go home?', 'Puwede ko po ba kayong makausap nang ilang minuto bago kayo umuwi?', 'Puwede ba kitang makausap sandali bago ka umuwi?')
      ],
      picks: ['Calm', 'Cooperative', 'Good eye contact', 'Fairly groomed', 'Well groomed', 'Guarded', 'Restless', 'Withdrawn', 'Irritable', 'Psychomotor retardation', 'Overfamiliar'] },
    { id: 'mood', group: 'Discharge MSE', label: 'Mood/Affect', kind: 'ask',
      assess: 'Mood is what the patient reports: quote their words in Tagalog with a translation. Affect is what you observe: range, intensity, stability, and whether it matches the mood.',
      ask: [
        P('How have you been feeling these past few days?', 'Kumusta po ang pakiramdam ninyo nitong mga nakaraang araw?', 'Kumusta ang pakiramdam mo nitong mga nakaraang araw?', { answers: [['Okay na po ako, Dok. Gumaan na po ang pakiramdam ko.', 'I\'m okay now, Doc. I feel lighter.'], ['Medyo malungkot pa rin po.', 'Still a bit sad.']] }),
        P('Are you happy, sad, worried, or angry?', 'Masaya po ba kayo, malungkot, nag-aalala, o galit?', 'Masaya ka ba, malungkot, nag-aalala, o galit?'),
        P('From 1 to 10, with 10 the best, how is your mood today?', 'Mula isa hanggang sampu, at sampu ang pinakamaganda, ilan po ang pakiramdam ninyo ngayon?', 'From 1 to 10, ilan ang mood mo ngayon?')
      ],
      picks: ['Euthymic mood', 'Dysphoric mood', 'Anxious mood', 'Irritable mood', 'Euphoric mood', 'Congruent affect', 'Incongruent affect', 'Full range affect', 'Restricted affect', 'Blunted affect', 'Flat affect', 'Labile affect', 'Mildly elevated mood'] },
    { id: 'process', group: 'Discharge MSE', label: 'Thought Process', kind: 'observe',
      assess: 'Judge from how the patient tells a story: is it goal-directed, relevant, and coherent? Note circumstantiality, tangentiality, loose associations, flight of ideas, or blocking.',
      ask: [
        P('Tell me how you came to be admitted and what happened during your stay.', 'Ikuwento po ninyo kung paano kayo na-admit dito at ano ang nangyari habang nandito kayo.', 'Ikuwento mo kung paano ka na-admit dito at ano ang nangyari habang nandito ka.'),
        P('What are your plans when you go home?', 'Ano po ang mga plano ninyo pag-uwi?', 'Ano ang mga plano mo pag-uwi?')
      ],
      picks: ['Goal-directed', 'Coherent and relevant', 'Some circumstantiality', 'Some tangentiality', 'Loose associations', 'Flight of ideas', 'Thought blocking'] },
    { id: 'positive', group: 'Thought Content', label: 'Positive symptoms', kind: 'ask',
      assess: 'Re-ask about the hallucinations and delusions noted on admission. Ask how strongly the patient still believes the earlier ideas, and watch for responding to internal stimuli.',
      ask: [
        P('Do you still hear voices that others don\'t hear?', 'May naririnig pa po ba kayong boses na hindi naririnig ng iba?', 'May naririnig ka pa bang boses na hindi naririnig ng iba?', { answers: [['Wala na po.', 'Not anymore.'], ['Minsan po, pero mahina na.', 'Sometimes, but they\'re faint now.']] }),
        P('Is anyone still whispering to you?', 'May bumubulong pa po ba sa inyo?', 'May bumubulong pa ba sa iyo?'),
        P('Do you still see shadows or things others don\'t see?', 'May nakikita pa po ba kayong anino o mga bagay na hindi nakikita ng iba?', 'May nakikita ka pa bang anino o mga bagay na hindi nakikita ng iba?'),
        P('Do you still feel that someone wants to harm you?', 'Pakiramdam pa po ba ninyo ay may gustong manakit sa inyo?', 'Feeling mo pa ba may gustong manakit sa iyo?'),
        P('What do you think now about what you believed before you were admitted?', 'Ano na po ang tingin ninyo ngayon sa mga pinaniniwalaan ninyo bago kayo na-admit?', 'Ano na ang tingin mo ngayon sa mga pinaniniwalaan mo bago ka na-admit?', { n: 'Name the specific belief from admission, e.g., "na minamanmanan kayo ng kapitbahay".' })
      ],
      picks: ['No hallucinations elicited', 'Not responding to internal stimuli', 'Residual auditory hallucinations, less frequent', 'Residual persecutory ideas, less intense', 'Delusions no longer held', 'Delusions persist', 'Grandiose ideas, less intense', 'Responding to internal stimuli', 'Command auditory hallucinations, persist (reassess discharge)'] },
    { id: 'negative', group: 'Thought Content', label: 'Negative symptoms', kind: 'ask',
      assess: 'Ask about and observe motivation, interest, social contact, speech amount, emotional expression, and self-care. Ward staff observations help here.',
      ask: [
        P('Do you enjoy the activities here again?', 'Nag-e-enjoy na po ba kayo ulit sa mga gawain dito?', 'Nag-e-enjoy ka na ba ulit sa mga gawain dito?'),
        P('Do you talk with the other patients?', 'Nakikipag-usap po ba kayo sa ibang pasyente?', 'Nakikipag-usap ka ba sa ibang pasyente?'),
        P('Do you feel like doing things?', 'May gana po ba kayong gumawa ng mga bagay?', 'May gana ka bang gumawa ng mga bagay?'),
        P('Do you bathe and tidy yourself every day?', 'Naliligo at nag-aayos po ba kayo ng sarili araw-araw?', 'Naliligo at nag-aayos ka ba ng sarili araw-araw?')
      ],
      picks: ['None noted', 'Mild blunting', 'Alogia (poverty of speech)', 'Avolition', 'Anhedonia', 'Asociality', 'Poor self-care'] },
    { id: 'suicide', group: 'Thought Content', label: 'Suicidal ideas', kind: 'ask', risk: true,
      assess: 'Ask directly. Cover current ideation, plan, intent, and the plan for what the patient will do if the thoughts return at home. Any active ideation means discharge readiness must be reassessed.',
      ask: [
        P('In the past few days, have you thought of hurting yourself or killing yourself?', 'Nitong mga nakaraang araw, naisip po ba ninyong saktan ang sarili ninyo o magpakamatay?', 'Nitong mga nakaraang araw, naisip mo bang saktan ang sarili mo o magpakamatay?'),
        P('Do you have any plan to end your life?', 'May plano po ba kayong wakasan ang buhay ninyo?', 'May plano ka bang wakasan ang buhay mo?'),
        P('If those thoughts come back at home, what will you do and whom will you tell?', 'Kung bumalik po ang ganitong isipin pag-uwi, ano po ang gagawin ninyo at kanino kayo magsasabi?', 'Kung bumalik ang ganitong isipin pag-uwi, ano ang gagawin mo at kanino ka magsasabi?')
      ],
      picks: ['None', 'Denies suicidal ideation, plan, or intent', 'Passive death wish, no plan or intent', 'Active suicidal ideation (reassess discharge)'] },
    { id: 'homicide', group: 'Thought Content', label: 'Homicidal ideas', kind: 'ask', risk: true,
      assess: 'Ask about thoughts of harming others, specific targets, and grudges. Any active ideation means discharge readiness must be reassessed.',
      ask: [
        P('Have you had thoughts of hurting anyone?', 'May naiisip po ba kayong saktan na ibang tao?', 'May naiisip ka bang saktan na ibang tao?'),
        P('Is there anyone you are angry at and want to get back at?', 'May tao po bang galit kayo at gusto ninyong gantihan?', 'May tao bang galit ka at gusto mong gantihan?')
      ],
      picks: ['None', 'Denies homicidal ideation', 'Homicidal ideation present (reassess discharge)'] },
    { id: 'orientation', group: 'Cognition', label: 'Orientation', kind: 'ask',
      assess: 'Time, place, and person. Record as oriented ×3 or note what is missed.',
      ask: [
        P('What day and date is it today?', 'Anong araw at petsa po ngayon?', 'Anong araw at petsa ngayon?'),
        P('Where are we right now?', 'Nasaan po tayo ngayon?', 'Nasaan tayo ngayon?'),
        P('Who am I?', 'Sino po ako?', 'Sino ako?')
      ],
      picks: ['Oriented to time, place, and person (×3)', 'Disoriented to time', 'Disoriented to place', 'Disoriented to person'] },
    { id: 'memory', group: 'Cognition', label: 'Memory', kind: 'ask',
      assess: 'Immediate (repeat three words), recent (recall after 5 minutes, breakfast, date of admission), and remote (birthplace, school).',
      ask: [
        P('Remember these three words: ball, tree, key. Please repeat them.', 'Tandaan po ninyo ang tatlong salitang ito: bola, puno, susi. Pakiulit po.', 'Tandaan mo ang tatlong salita: bola, puno, susi. Ulitin mo.'),
        P('What were the three words I asked you to remember?', 'Ano po ang tatlong salitang pinatandaan ko kanina?', 'Ano yung tatlong salitang pinatandaan ko kanina?'),
        P('What did you eat for breakfast this morning?', 'Ano po ang kinain ninyo kaninang almusal?', 'Ano ang kinain mo kaninang almusal?'),
        P('When were you admitted here?', 'Kailan po kayo na-admit dito?', 'Kailan ka na-admit dito?'),
        P('Where were you born?', 'Saan po kayo ipinanganak?', 'Saan ka ipinanganak?')
      ],
      picks: ['Intact immediate, recent, and remote memory', 'Impaired immediate memory', 'Impaired recent memory', 'Impaired remote memory'] },
    { id: 'insight', group: 'Cognition', label: 'Insight', kind: 'ask',
      assess: 'Awareness of illness, its cause, and the need for treatment. Grade 1–6: 1 complete denial; 2 slight awareness, still denying; 3 aware but blames others or outside factors; 4 aware the cause is something unknown in oneself; 5 intellectual insight; 6 true emotional insight.',
      ask: [
        P('Why were you admitted here?', 'Bakit po kayo na-admit dito?', 'Bakit ka na-admit dito?', { answers: [['Kasi po hindi ako natutulog at may naririnig akong boses.', 'Because I wasn\'t sleeping and I heard voices.'], ['Dinala lang po ako ng pamilya ko. Wala naman akong sakit.', 'My family just brought me. I\'m not sick.']] }),
        P('Do you think you have an illness?', 'Sa tingin po ba ninyo ay may sakit kayo?', 'Sa tingin mo ba may sakit ka?'),
        P('Do you still need to take medicine after you go home? Why?', 'Kailangan pa po ba ninyong uminom ng gamot pag-uwi? Bakit po?', 'Kailangan mo pa bang uminom ng gamot pag-uwi? Bakit?'),
        P('What could happen if you stop your medicine?', 'Ano po ang puwedeng mangyari kapag tumigil kayo sa gamot?', 'Ano ang puwedeng mangyari kapag tumigil ka sa gamot?')
      ],
      picks: ['Good', 'Fair', 'Poor', 'Grade 1: complete denial', 'Grade 2: slight awareness', 'Grade 3: blames others/external factors', 'Grade 4: aware, cause unknown in self', 'Grade 5: intellectual insight', 'Grade 6: true emotional insight'] },
    { id: 'judgment', group: 'Cognition', label: 'Judgment', kind: 'ask',
      assess: 'Test judgment (hypothetical situations) and social judgment (realistic plans for problems after discharge).',
      ask: [
        P('What will you do if you run out of medicine?', 'Ano po ang gagawin ninyo kung maubusan kayo ng gamot?', 'Ano ang gagawin mo kung maubusan ka ng gamot?'),
        P('If the voices come back at home, what will you do?', 'Kung bumalik po ang mga boses pag-uwi, ano po ang gagawin ninyo?', 'Kung bumalik ang mga boses pag-uwi, ano ang gagawin mo?'),
        P('If you smelled smoke in a crowded cinema, what would you do?', 'Kung may naamoy po kayong usok sa loob ng sinehan na maraming tao, ano po ang gagawin ninyo?', 'Kung may naamoy kang usok sa sinehan na maraming tao, ano ang gagawin mo?')
      ],
      picks: ['Good', 'Fair', 'Poor', 'Intact test judgment', 'Intact social judgment', 'Impaired social judgment'] },
    { id: 'sleep', group: 'Other', label: 'Sleep', kind: 'ask',
      assess: 'Hours, onset, waking at night, and daytime sleepiness (possible sedation). Check the ward sleep chart.',
      ask: [
        P('How is your sleep? How many hours?', 'Kumusta po ang tulog ninyo? Ilang oras po?', 'Kumusta ang tulog mo? Ilang oras?'),
        P('Do you wake up in the middle of the night?', 'Nagigising po ba kayo sa gitna ng gabi?', 'Nagigising ka ba sa gitna ng gabi?'),
        P('Are you sleepy during the day?', 'Inaantok po ba kayo sa araw?', 'Inaantok ka ba sa araw?')
      ],
      picks: ['Good', 'Fair', 'Poor', '7–8 hours, uninterrupted', 'Difficulty initiating sleep', 'Frequent awakenings', 'Daytime sedation', 'Reduced need for sleep'] },
    { id: 'adverse', group: 'Other', label: 'Adverse event', kind: 'ask',
      assess: 'Medication side effects, medical illness, falls or injuries, and any agitation needing restraint during the stay.',
      ask: [
        P('Is the medicine causing anything unpleasant: stiffness, shaking, sleepiness, dizziness, restlessness?', 'May hindi po ba magandang epekto ang gamot: naninigas, nanginginig, inaantok, nahihilo, o hindi mapakali?', 'May hindi ba magandang epekto ang gamot: naninigas, nanginginig, inaantok, nahihilo, o hindi mapakali?'),
        P('Did you get sick or get hurt while you were here?', 'Nagkasakit o nasaktan po ba kayo habang nandito kayo?', 'Nagkasakit o nasaktan ka ba habang nandito ka?')
      ],
      picks: ['None', 'Extrapyramidal symptoms', 'Akathisia', 'Sedation', 'Weight gain', 'Medical illness during admission', 'Fall or injury', 'Agitation requiring restraint', 'Tremor', 'Withdrawal symptoms'] },
    { id: 'diagnosis', group: 'Plan', label: 'Diagnosis', kind: 'explain',
      assess: 'Write the diagnosis with course specifiers (e.g., multiple episodes; currently in acute episode, partial remission, or full remission) and other comorbidities. Explain it to the patient and family in plain words.',
      ask: [
        P('Your illness is called ___. It is treatable.', 'Ang tawag po sa sakit ninyo ay ___. Nagagamot po ito.', 'Ang tawag sa sakit mo ay ___. Nagagamot ito.'),
        P('This illness affects thinking and can make a person hear or believe things that are not real.', 'Naaapektuhan po ng sakit na ito ang pag-iisip, at puwedeng may marinig o paniwalaan ang tao na hindi totoo.', 'Naaapektuhan ng sakit na ito ang pag-iisip, at puwedeng may marinig o paniwalaan ang tao na hindi totoo.'),
        P('It is not your fault, and it is not caused by a curse.', 'Hindi po ninyo ito kasalanan, at hindi po ito dahil sa kulam o sumpa.', 'Hindi mo ito kasalanan, at hindi ito dahil sa kulam o sumpa.')
      ],
      picks: ['Schizophrenia, multiple episodes, currently in acute episode', 'Schizophrenia, multiple episodes, currently in partial remission', 'Schizophrenia, first episode, currently in acute episode', 'Bipolar I disorder, current episode manic', 'Major depressive disorder, recurrent', 'Other comorbid: ___', 'Bipolar I disorder, current or most recent episode manic, in partial remission', 'Methamphetamine-induced psychotic disorder, with ___ use disorder', 'Schizophrenia, first episode, currently in partial remission'] },
    { id: 'medications', group: 'Plan', label: 'Medications', kind: 'explain',
      assess: 'Write each drug with dose, form, and schedule, including depot injections and their interval. Confirm with teach-back, and check that the family can get and afford the medicines.',
      ask: [
        P('These are your medicines for home: ___, once a day, every night.', 'Ito po ang mga gamot ninyo pag-uwi: ___, isang beses sa isang araw, tuwing gabi.', 'Ito ang mga gamot mo pag-uwi: ___, isang beses sa isang araw, tuwing gabi.'),
        P('Your injection is every ___ weeks. Your next one is on ___.', 'Ang iniksiyon po ninyo ay tuwing ___ linggo. Ang susunod po ay sa ___.', 'Ang iniksiyon mo ay tuwing ___ linggo. Ang susunod ay sa ___.'),
        P('Can you tell me how you will take your medicines?', 'Puwede po ba ninyong sabihin kung paano ninyo iinumin ang mga gamot?', 'Puwede mo bang sabihin kung paano mo iinumin ang mga gamot?'),
        P('Where will you get your medicines? Can you afford them?', 'Saan po kayo kukuha ng gamot? May pambili po ba kayo?', 'Saan ka kukuha ng gamot? May pambili ka ba?'),
        P('Don\'t stop the medicine even when you feel well.', 'Huwag po ninyong ititigil ang gamot kahit maayos na ang pakiramdam ninyo.', 'Huwag mong itigil ang gamot kahit maayos na ang pakiramdam mo.')
      ],
      picks: ['Olanzapine ___ mg tab, 1 tab at HS', 'Fluphenazine decanoate ___ mg/ml, ___ ml deep IM every ___ weeks', 'Risperidone ___ mg tab, ___', 'Biperiden 2 mg tab, ___', 'Teach-back done, correct', 'Family supervises medication', 'Teach-back incorrect, re-taught', 'Lithium carbonate ___ mg tab, ___', 'Divalproex sodium ___ mg tab, ___', 'Haloperidol ___ mg tab, ___', 'Quetiapine ___ mg tab, ___', 'Sertraline ___ mg tab, ___'] },
    { id: 'aftercare', group: 'Plan', label: 'Aftercare Follow-up', kind: 'explain',
      assess: 'Follow-up date and place, depot schedule, who will supervise at home, warning signs of relapse, crisis contacts, or transfer details if not going home.',
      ask: [
        P('Please come back for your check-up on ___.', 'Bumalik po kayo para sa check-up sa ___.', 'Bumalik ka para sa check-up sa ___.'),
        P('Who at home will help you remember your medicine?', 'Sino po sa bahay ang tutulong sa inyo na maalala ang gamot?', 'Sino sa bahay ang tutulong sa iyo na maalala ang gamot?'),
        P('Come back right away if you can\'t sleep, the voices return, or you think of hurting yourself or others.', 'Bumalik po kayo agad kung hindi kayo makatulog, bumalik ang mga boses, o naisip ninyong saktan ang sarili o ibang tao.', 'Bumalik ka agad kung hindi ka makatulog, bumalik ang mga boses, o naisip mong saktan ang sarili mo o ibang tao.'),
        P('You can call the NCMH crisis hotline at 1553, any time.', 'Puwede po kayong tumawag sa NCMH crisis hotline sa 1553, kahit anong oras.', 'Puwede kang tumawag sa NCMH crisis hotline sa 1553, kahit anong oras.')
      ],
      picks: ['OPD follow-up in 2 weeks', 'Depot injection schedule given', 'Family oriented on warning signs', 'Referred to ___', 'Transferred to ___ ward due to ___', 'Safety plan made with patient and family', 'Laboratory tests before follow-up: ___', 'Discharge deferred: ___'] },
    { id: 'by', group: 'Plan', label: 'By', kind: 'sign',
      assess: 'Signed by the attending psychiatrist with name and license number. Sign on the paper form; the app does not record names.', ask: [], picks: [] }
  ];

  const sec = { id: 'discharge', group: 'Management', title: 'Discharge assessment', intro: 'Questions for each field of the discharge summary: discharge MSE, sleep, adverse events, diagnosis, medications, and aftercare.', phrases: [] };
  FIELDS.forEach((f) => { f.refs = f.ask.map((p) => { sec.phrases.push(p); return 'discharge:' + (sec.phrases.length - 1); }); });
  // Added in 1.7.0. Phrase indexes are flashcard IDs, so later questions are APPENDED here (end of the section),
  // and to the end of their field's ask list. Never insert into FIELDS[].ask above.
  const MORE = [
    ['positive', P('Do the voices still tell you to hurt yourself or others?', 'Inuutusan pa po ba kayo ng boses na saktan ang sarili ninyo o ibang tao?', 'Inuutusan ka pa ba ng boses na saktan ang sarili mo o ibang tao?', { n: 'Ask this whenever voices were present on admission. Persisting command hallucinations mean discharge readiness must be reassessed.' })],
    ['sleep', P('Do you feel unusually energetic, as if you don\'t need to sleep?', 'Pakiramdam po ba ninyo ay sobra ang lakas ninyo, na parang hindi na ninyo kailangang matulog?', 'Feeling mo ba sobra ang lakas mo, na parang hindi mo na kailangang matulog?', { n: 'Reduced need for sleep is an early sign of mania returning.' })],
    ['judgment', P('If your friends offer you shabu or alcohol, what will you do?', 'Kung alukin po kayo ng mga kaibigan ninyo ng shabu o alak, ano po ang gagawin ninyo?', 'Kung alukin ka ng barkada mo ng shabu o alak, ano ang gagawin mo?')],
    ['medications', P('Lithium needs blood tests. If you vomit, have diarrhea, shake a lot, or can\'t walk straight, come back right away.', 'Kailangan po ng blood test habang umiinom kayo ng lithium. Kapag nagsuka kayo, nagtae, nanginig nang husto, o hindi makalakad nang diretso, bumalik po kayo agad.', 'Kailangan ng blood test habang umiinom ka ng lithium. Kapag nagsuka ka, nagtae, nanginig nang husto, o hindi makalakad nang diretso, bumalik ka agad.', { n: 'Also: drink enough water, and avoid suddenly eating much more or much less salt.' })],
    ['aftercare', P('We think it is safer for her to stay a few more days, because ___.', 'Sa tingin po namin, mas ligtas kung manatili muna siya rito nang ilang araw pa, dahil ___.', 'Sa tingin namin, mas ligtas kung dito muna siya nang ilang araw pa, dahil ___.', { n: 'Said to the family when discharge is deferred. Use "siya" for the patient; give the reason in plain words.' })]
  ];
  MORE.forEach(([id, p]) => { const f = FIELDS.find((x) => x.id === id); f.ask.push(p); sec.phrases.push(p); f.refs.push('discharge:' + (sec.phrases.length - 1)); });
  (window.PSYCH_SECTIONS = window.PSYCH_SECTIONS || []).push(sec);
  (window.PSYCH_FLOW_EXTRA = window.PSYCH_FLOW_EXTRA || []).push({ id: 'discharge', title: 'Discharge assessment', goal: 'Questions for each discharge summary field.', sections: ['discharge'], key: FIELDS.filter((f) => f.refs.length).map((f) => f.refs[0]) });
  window.PSYCH_DISCHARGE = { form: 'MMH-MED-04-04-02', title: 'Discharge Summary', fields: FIELDS };
})();
