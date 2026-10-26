/* Discharge practice cases: simulated patients for the discharge assessment (form MMH-MED-04-04-02).
   The learner asks the form's questions, documents with the form's picks, and compares with a model answer.
   Patients are fictional. Doses are typical teaching examples, not prescribing advice.
   Per field (keyed by PSYCH_DISCHARGE field id):
     obs   what the learner observes or reads in the chart (English)
     ans   { questionIndex: [tagalog, english] }, the patient's answer to that field's question (index into field.ask)
     key   question indexes whose answer changes the documentation (feedback names any that were not asked)
     need  required picks; an inner array means "any one of these"
     ok    acceptable extra picks (no penalty)
     wrong { pick: why } targeted feedback for common wrong picks
     doc   model documentation line
     why   teaching point shown after checking
     quote (mood only) model patient quote */
window.PSYCH_DISCHARGE_CASES = [
{
  id: 'ramon', title: 'Back on medicine, ready to go home', level: 'B1',
  setting: 'Ward, morning of planned discharge. Mang Ramon, 42, tricycle driver, third admission. His wife is waiting at the nurses\' station.',
  chart: [
    'Admitted 3 weeks ago after stopping his medicine for 2 months: insomnia, hearing neighbors\' voices through the wall, believed a neighbor was poisoning the family\'s food, threw a chair at home.',
    'Admission MSE: guarded, irritable, unkempt; persecutory delusion; auditory hallucinations; insight grade 1.',
    'Course: restrained once on the day of admission for agitation. No restraint since. Weight up 3 kg. Sleep chart 8 hours a night for 10 nights.',
    'Home medicine: olanzapine 10 mg tab, 1 tab at bedtime. Plan: OPD in 2 weeks; wife to supervise medicine.'
  ],
  fields: {
    behavior: {
      obs: 'Seated, in his own clean clothes, shaved. Answers readily with good eye contact. No abnormal movements. Smiles when greeted.',
      ans: { 0: ['Mabuti naman po, Dok. Excited na po akong umuwi.', 'I\'m fine, Doc. I\'m excited to go home.'], 1: ['Sige po, Dok. Walang problema.', 'Sure, Doc. No problem.'] },
      need: ['Calm', 'Cooperative', 'Good eye contact', ['Well groomed', 'Fairly groomed']],
      wrong: { Guarded: 'Guarded was his admission state. Document what you see today.', Irritable: 'Irritable was his admission state. Today he is pleasant.' },
      doc: 'Calm, cooperative, good eye contact, well groomed',
      why: 'Compare with the admission MSE: guarded, irritable, and unkempt then; calm, cooperative, and groomed now. The change itself supports discharge.' },
    mood: {
      obs: 'Smiles when he talks about his children; looks briefly worried when he mentions the neighbors. Expression varies, but a little less than expected.',
      ans: { 0: ['Okay na po ako, Dok. Gumaan na po ang pakiramdam ko.', 'I\'m okay now, Doc. I feel lighter.'],
        1: ['Masaya po, kasi uuwi na ako. Pero medyo nag-aalala rin po ako kung ano ang sasabihin ng mga kapitbahay.', 'Happy, because I\'m going home. But I\'m also a bit worried about what the neighbors will say.'],
        2: ['Siguro po pito.', 'Maybe seven.'] },
      quote: 'Okay na po ako, Dok. Gumaan na po ang pakiramdam ko. (I\'m okay now, Doc. I feel lighter.)',
      need: ['Euthymic mood', 'Congruent affect', 'Restricted affect'], ok: ['Full range affect'],
      wrong: { 'Anxious mood': 'His worry about the neighbors is realistic and situational, not his main mood. Mention it in the details.', 'Flat affect': 'Flat means almost no expression. He smiles and looks worried at fitting moments.' },
      doc: '"Okay na po ako, Dok. Gumaan na po ang pakiramdam ko." (I\'m okay now, Doc. I feel lighter.) Euthymic mood, congruent, slightly restricted affect; realistic worry about stigma from neighbors',
      why: 'Quote his words for mood. Affect is what you see: it fits his mood and varies, but slightly less than expected, so "restricted" (or "full range" if you saw more) is fair.' },
    process: {
      obs: 'Tells the story in order and answers each question.',
      ans: { 0: ['Noong isang buwan po, tumigil ako sa gamot kasi akala ko magaling na ako. Hindi na po ako nakatulog, tapos may naririnig na akong boses. Nagwala po ako sa bahay, kaya dinala ako ng asawa ko dito. Dito po, unti-unti akong gumaling.', 'Last month I stopped my medicine because I thought I was well. I couldn\'t sleep, then I started hearing voices. I became violent at home, so my wife brought me here. Here I slowly got better.'],
        1: ['Babalik po ako sa pagta-tricycle. Pero sa umpisa, tutulong muna ako sa tindahan ng asawa ko.', 'I\'ll go back to driving a tricycle. But at first I\'ll help at my wife\'s store.'] },
      need: ['Goal-directed', 'Coherent and relevant'],
      doc: 'Goal-directed, coherent and relevant',
      why: 'A clear, ordered account of the admission plus realistic plans: goal-directed and coherent.' },
    positive: {
      obs: 'Not seen talking to himself or looking at empty corners during the interview. Nurses\' notes agree.',
      ans: { 0: ['Wala na po. Minsan po, sa gabi, may mahinang boses pa rin. Pero bihira na at hindi ko na pinapansin.', 'Not anymore. Sometimes at night there\'s still a faint voice. But it\'s rare now and I ignore it.'],
        1: ['Wala na po.', 'Not anymore.'], 2: ['Wala po.', 'No.'],
        3: ['Hindi na po. Dahil po siguro sa sakit ko kaya ko naisip iyon.', 'Not anymore. Maybe it was because of my illness that I thought that.'],
        4: ['Akala ko po talaga nilalason ng kapitbahay ang pagkain namin. Ngayon po, alam kong hindi totoo iyon. Sakit ko lang po iyon.', 'I really thought the neighbor was poisoning our food. Now I know that wasn\'t true. It was just my illness.'] },
      key: [0, 4],
      need: ['Residual auditory hallucinations, less frequent', 'Not responding to internal stimuli', 'Delusions no longer held'],
      wrong: { 'No hallucinations elicited': 'He said a faint voice still comes at night, though rarely. Document residual hallucinations: they are the baseline for relapse monitoring.', 'Delusions persist': 'He now calls the poisoning idea "just my illness". That belief is no longer held.' },
      doc: 'Residual auditory hallucinations, less frequent (faint voice at night, rare, ignores it); not responding to internal stimuli; persecutory delusion no longer held',
      why: '"Wala na po" is often followed by "minsan po...". Let the patient finish. Name the admission belief when you re-ask about it.' },
    negative: {
      obs: 'Ward notes: joins occupational therapy and group activities, chats with other patients, does his own laundry. Speech normal in amount.',
      ans: { 0: ['Opo, sumasali po ako sa OT. Gumagawa po kami ng basahan.', 'Yes, I join OT. We make rag rugs.'], 1: ['Opo, may mga kakuwentuhan na po ako dito.', 'Yes, I have people to chat with here.'],
        2: ['Opo, Dok. Gusto ko na nga pong magtrabaho.', 'Yes, Doc. I actually want to work now.'], 3: ['Opo, araw-araw po. Ako na rin po ang naglalaba ng damit ko.', 'Yes, every day. I wash my own clothes too.'] },
      need: [['Mild blunting', 'None noted']],
      wrong: { Avolition: 'He wants to work and joins OT. Motivation is good.', Asociality: 'He chats with other patients.', 'Poor self-care': 'He bathes daily and does his own laundry.' },
      doc: 'Mild blunting; motivation, social contact, and self-care good',
      why: 'Motivation, social contact, and self-care are good. The slightly limited expression can be called mild blunting; "none noted" is also acceptable.' },
    suicide: {
      ans: { 0: ['Wala po, Dok.', 'No, Doc.'], 1: ['Wala po. Gusto ko pong mabuhay para sa mga anak ko.', 'No. I want to live for my children.'],
        2: ['Sasabihin ko po agad sa asawa ko, tapos babalik po kami dito.', 'I\'d tell my wife right away, then we\'d come back here.'] },
      key: [0, 2],
      need: [['Denies suicidal ideation, plan, or intent', 'None']],
      doc: 'Denies suicidal ideation, plan, or intent; reasons for living (children); plan to tell wife if thoughts return',
      why: 'Write the protective factors too: reasons for living and what he will do if the thoughts come back.' },
    homicide: {
      ans: { 0: ['Wala na po. Nahihiya nga po ako sa ginawa ko sa bahay bago ako na-admit.', 'Not anymore. I\'m actually ashamed of what I did at home before I was admitted.'],
        1: ['Wala po. Yung kapitbahay po, hihingi pa nga ako ng tawad.', 'No. The neighbor, I\'ll even ask him for forgiveness.'] },
      key: [1],
      need: [['Denies homicidal ideation', 'None']],
      doc: 'Denies homicidal ideation, including toward the neighbor named on admission',
      why: 'He was violent and blamed a neighbor on admission. Ask about that person specifically, not only "anyone".' },
    orientation: {
      ans: { 0: ['Lunes po ngayon. Katapusan na po ng Oktubre.', 'It\'s Monday. It\'s the end of October.'], 1: ['Sa ospital po, dito sa Mariveles.', 'At the hospital, here in Mariveles.'], 2: ['Kayo po si Dok, ang doktor ko.', 'You\'re Doc, my doctor.'] },
      need: ['Oriented to time, place, and person (×3)'],
      doc: 'Oriented to time, place, and person (×3)',
      why: 'Correct day and month, place, and person.' },
    memory: {
      ans: { 0: ['Bola, puno, susi.', 'Ball, tree, key.'], 1: ['Bola... susi... at puno po.', 'Ball... key... and tree.'], 2: ['Lugaw po at itlog.', 'Rice porridge and egg.'],
        3: ['Mga tatlong linggo na po. Noong unang linggo ng Oktubre.', 'About three weeks ago. The first week of October.'], 4: ['Sa Orion po, Bataan.', 'In Orion, Bataan.'] },
      need: ['Intact immediate, recent, and remote memory'],
      doc: 'Intact immediate (3/3), recent (3/3 recall, breakfast, admission date), and remote memory',
      why: 'The order of the recalled words doesn\'t matter: 3 of 3 is intact.' },
    insight: {
      ans: { 0: ['Kasi po tumigil ako sa gamot, kaya bumalik ang sakit ko. Hindi na po ako nakatulog at may naririnig akong boses.', 'Because I stopped my medicine, so my illness came back. I couldn\'t sleep and I heard voices.'],
        1: ['Opo. Schizophrenia daw po. Hindi ko po alam kung bakit ako nagkaganito, pero alam kong may sakit ako.', 'Yes. They said schizophrenia. I don\'t know why I got this way, but I know I\'m sick.'],
        2: ['Opo, para hindi na bumalik ang mga boses. Pero sana po hindi na habambuhay.', 'Yes, so the voices won\'t come back. But I hope it won\'t be for life.'],
        3: ['Babalik po ang sakit ko, tulad ng nangyari ngayon.', 'My illness will come back, like what happened this time.'] },
      key: [1, 2],
      need: ['Fair', 'Grade 4: aware, cause unknown in self'], ok: ['Grade 5: intellectual insight'],
      wrong: { Good: 'He hopes the medicine won\'t be for life and stopped it last time once he felt well. That limits insight.', 'Grade 6: true emotional insight': 'Grade 6 means the insight changes behavior. He stopped his medicine last time once he felt well, so it is not yet shown.', 'Grade 1: complete denial': 'Grade 1 was his admission state. He now accepts he is ill.' },
      doc: 'Fair (grade 4): accepts he has an illness and links stopping medicine to relapse; does not know why he became ill; hopes medicine is not lifelong',
      why: 'He accepts the illness and the link to stopping medicine, but "I don\'t know why I got this way" and "I hope it won\'t be for life" point to grade 4 (some raters would say 5). The jump from grade 1 on admission is worth stating.' },
    judgment: {
      ans: { 0: ['Pupunta po agad ako sa health center o dito sa OPD bago maubos.', 'I\'ll go to the health center or here at the OPD before it runs out.'],
        1: ['Sasabihin ko po sa asawa ko, tapos babalik po kami dito.', 'I\'ll tell my wife, then we\'ll come back here.'],
        2: ['Sasabihan ko po ang mga tao, lalabas kami nang maayos, tapos hahanapin ko ang guwardiya.', 'I\'d warn people, we\'d go out calmly, then I\'d look for the guard.'] },
      need: ['Intact test judgment', 'Intact social judgment'], ok: ['Good'],
      doc: 'Good: intact test and social judgment',
      why: 'Realistic plans for running out of medicine and for returning voices show intact social judgment.' },
    sleep: {
      obs: 'Ward sleep chart: 8 hours a night for the past 10 nights.',
      ans: { 0: ['Maayos na po. Mga alas-nuwebe po ako natutulog, gising ng alas-singko.', 'Fine now. I sleep around nine and wake at five.'], 1: ['Hindi na po, tuloy-tuloy na.', 'Not anymore, it\'s continuous.'],
        2: ['Medyo po, sa umaga. Pero nawawala rin pagkatapos mag-almusal.', 'A bit, in the morning. But it goes away after breakfast.'] },
      need: ['Good', '7–8 hours, uninterrupted'], ok: ['Daytime sedation'],
      wrong: { 'Difficulty initiating sleep': 'He falls asleep around nine without trouble.', 'Frequent awakenings': 'He sleeps straight through, and the chart agrees.' },
      doc: 'Good, 7–8 hours, uninterrupted (sleep chart 8 h for 10 nights); mild morning drowsiness that clears after breakfast',
      why: 'Insomnia was his first relapse sign, so good sleep matters. Mild morning drowsiness on olanzapine is worth noting.' },
    adverse: {
      obs: 'Chart: restrained once on the day of admission for agitation. Weight up 3 kg since admission. No falls, no medical illness.',
      ans: { 0: ['Wala naman pong naninigas o nanginginig. Medyo inaantok lang po sa umaga. Tsaka tumaba po ako, lumalaki ang tiyan ko.', 'Nothing stiff or shaking. Just a bit sleepy in the morning. And I gained weight, my belly is getting bigger.'], 1: ['Wala po.', 'No.'] },
      key: [0],
      need: ['Weight gain', 'Agitation requiring restraint'], ok: ['Sedation'],
      wrong: { None: 'Check the chart: he was restrained on day 1 and gained 3 kg. The patient won\'t mention the restraint.', 'Extrapyramidal symptoms': 'He denies stiffness and shaking.' },
      doc: 'Weight gain (3 kg since admission); agitation requiring restraint once on admission day; mild morning sedation',
      why: 'Adverse events come from the chart as much as the patient. Weight gain on olanzapine means weight, glucose, and lipids should be checked at follow-up.' },
    diagnosis: {
      ans: { 0: ['Opo, Dok. Alam ko na po iyan.', 'Yes, Doc. I know that already.'], 1: ['Opo, ganoon nga po ang nangyari sa akin.', 'Yes, that\'s what happened to me.'],
        2: ['Salamat po. Sabi po kasi ng lola ko, baka raw nakulam ako.', 'Thank you. My grandmother said maybe I was bewitched.'] },
      need: ['Schizophrenia, multiple episodes, currently in partial remission'],
      wrong: { 'Schizophrenia, multiple episodes, currently in acute episode': 'He is much better, with only a rare faint voice left. That is partial remission.', 'Schizophrenia, first episode, currently in acute episode': 'This is his third admission: multiple episodes.' },
      doc: 'Schizophrenia, multiple episodes, currently in partial remission',
      why: 'Third admission, so multiple episodes. Residual rare voices mean partial, not full, remission. The grandmother\'s idea of kulam is a chance to explain the illness to the family too.' },
    medications: {
      ans: { 0: ['Opo.', 'Yes.'], 1: ['Wala naman po akong iniksiyon, Dok, di ba?', 'I don\'t have an injection, Doc, right?'],
        2: ['Iinumin ko po ang isang tableta kapag hindi ako makatulog.', 'I\'ll take one tablet when I can\'t sleep.'],
        3: ['Sa health center po, libre raw doon. Kung wala, bibili po ang asawa ko.', 'At the health center, it\'s free there. If not, my wife will buy it.'],
        4: ['Opo, hindi ko na po uulitin.', 'Yes, I won\'t do that again.'] },
      key: [2],
      need: ['Olanzapine ___ mg tab, 1 tab at HS'], ok: ['Family supervises medication'],
      wrong: { 'Teach-back done, correct': 'His teach-back was wrong: he plans to take it only when he can\'t sleep. Re-teach ("every night, even when you sleep well"), ask again, and mark it correct only when it is.', 'Fluphenazine decanoate ___ mg/ml, ___ ml deep IM every ___ weeks': 'He has no depot injection, as he said himself.' },
      doc: 'Olanzapine 10 mg tab, 1 tab at HS; teach-back initially incorrect ("only when I can\'t sleep"), re-taught; wife to supervise',
      why: 'Teach-back is the step that catches errors. Without it he would have gone home taking his antipsychotic only on bad nights, which is how he relapsed last time.' },
    aftercare: {
      ans: { 0: ['Opo, Dok. Isusulat ko po.', 'Yes, Doc. I\'ll write it down.'],
        1: ['Ang asawa ko po. Siya po ang magtatago ng gamot at magbibigay sa akin tuwing gabi.', 'My wife. She\'ll keep the medicine and give it to me every night.'],
        2: ['Opo. Hindi pagkakatulog po ang unang senyales noong huli.', 'Yes. Not sleeping was the first sign last time.'],
        3: ['Salamat po. Ise-save ko po sa cellphone.', 'Thank you. I\'ll save it on my phone.'] },
      need: ['OPD follow-up in 2 weeks', 'Family oriented on warning signs'],
      wrong: { 'Depot injection schedule given': 'He is on oral medicine only.', 'Transferred to ___ ward due to ___': 'He is going home.' },
      doc: 'OPD follow-up in 2 weeks; wife to keep and give medicine nightly; family oriented on warning signs (insomnia first); crisis hotline given',
      why: 'He named his own early warning sign (insomnia). Put it in the plan so the family watches for it.' }
  }
},
{
  id: 'liza', title: 'Better, but not fully safe', level: 'B1',
  setting: 'Ward, afternoon before planned discharge. Liza, 34, public school teacher, second depressive episode. Her mother is visiting; her husband works abroad.',
  chart: [
    'Admitted 2 weeks ago after telling her sister she wanted to die. Not eating or sleeping for a month, stopped going to work, felt she was a burden to her family.',
    'Admission MSE: psychomotor retardation, poor eye contact, depressed mood, constricted affect, active suicidal ideation without a specific plan, insight fair.',
    'Course: started sertraline; nausea and headache in the first week, resolved. No restraint, no falls. Sleep chart 5 to 6 hours.',
    'First episode 3 years ago, treated for 2 months, stopped on her own. Plan: sertraline 100 mg tab, 1 tab after breakfast; OPD in 2 weeks; refer to psychology for psychotherapy; mother to keep and give medicines.'
  ],
  fields: {
    behavior: {
      obs: 'Sits quietly, hair combed, in clothes her mother brought. Eye contact fair; looks down when she talks about her husband. Speaks softly but answers fully. Moves a little slowly, much less than on admission.',
      ans: { 0: ['Medyo okay na po, Dok.', 'A bit okay now, Doc.'], 1: ['Sige po.', 'All right.'] },
      need: ['Calm', 'Cooperative', 'Fairly groomed'], ok: ['Psychomotor retardation'],
      wrong: { 'Well groomed': 'Hair combed and clean clothes, but no more than that: fairly groomed.', Withdrawn: 'She answers every question fully. Quiet is not withdrawn.', Restless: 'She sits still.' },
      doc: 'Calm, cooperative, fairly groomed, fair eye contact, mild psychomotor slowing (improved from admission)',
      why: 'Mild slowing can still be documented. What matters is the improvement from marked retardation on admission.' },
    mood: {
      obs: 'Tearful briefly when she talks about her children; smiles faintly at a light comment. Range reduced, but she reacts.',
      ans: { 0: ['Mas okay na po kaysa dati. Pero may lungkot pa rin po, lalo na sa gabi.', 'Better than before. But there\'s still sadness, especially at night.'],
        1: ['Medyo malungkot pa rin po, pero hindi na tulad ng dati.', 'Still a little sad, but not like before.'],
        2: ['Mga lima po. Noong na-admit ako, isa lang.', 'About five. When I was admitted, just one.'] },
      key: [2],
      quote: 'Mas okay na po kaysa dati. Pero may lungkot pa rin po. (Better than before. But there\'s still sadness.)',
      need: ['Dysphoric mood', 'Congruent affect', 'Restricted affect'],
      wrong: { 'Euthymic mood': 'She still reports sadness and rates her mood 5 of 10. Improved is not euthymic, and writing it hides residual symptoms.', 'Flat affect': 'She is tearful and smiles at fitting moments. Reduced, not flat.' },
      doc: '"Mas okay na po kaysa dati. Pero may lungkot pa rin po." (Better than before. But there\'s still sadness.) Mood 5/10 (1/10 on admission). Dysphoric mood, congruent, restricted affect',
      why: 'The 1 to 10 rating shows change in numbers: from 1 to 5. It also shows she is not yet well.' },
    process: {
      obs: 'Answers in order, with some pauses.',
      ans: { 0: ['Hindi na po ako kumakain at natutulog. Pakiramdam ko po, wala akong silbi. Sinabi ko po sa ate ko na gusto ko nang mamatay, kaya dinala niya ako dito.', 'I wasn\'t eating or sleeping anymore. I felt useless. I told my older sister I wanted to die, so she brought me here.'],
        1: ['Aalagaan ko po ang mga anak ko at tatawagan ang asawa ko. Baka po bumalik ako sa pagtuturo pagkatapos ng ilang linggo.', 'I\'ll take care of my children and call my husband. Maybe I\'ll go back to teaching after a few weeks.'] },
      need: ['Goal-directed', 'Coherent and relevant'],
      wrong: { 'Thought blocking': 'Pauses while she gathers her thoughts are not blocking. Blocking is a sudden stop mid-thought that the patient can\'t explain.' },
      doc: 'Goal-directed, coherent and relevant',
      why: 'Slow and with pauses, but goal-directed. Note the content: "wala akong silbi" (I\'m useless) on admission.' },
    positive: {
      obs: 'Not responding to internal stimuli.',
      ans: { 0: ['Wala po, Dok. Kahit noon po, wala akong naririnig na boses.', 'No, Doc. Even before, I never heard voices.'], 1: ['Wala po.', 'No.'], 2: ['Wala po.', 'No.'], 3: ['Wala po.', 'No.'],
        4: ['Noon po, akala ko pabigat ako sa pamilya ko. Ngayon po, nababawasan na. Pero minsan nararamdaman ko pa rin.', 'Before, I thought I was a burden to my family. Now it\'s less. But sometimes I still feel it.'] },
      key: [4],
      need: ['No hallucinations elicited', 'Not responding to internal stimuli'], ok: ['Delusions no longer held'],
      wrong: { 'Delusions persist': 'Feeling like a burden is a depressive cognition, not a delusion: she can question it. Write it in the details, and carry it to the suicide field, because perceived burdensomeness is a risk factor.', 'Residual auditory hallucinations, less frequent': 'She has never heard voices.' },
      doc: 'No hallucinations elicited; not responding to internal stimuli; no delusions; residual feelings of being a burden, less intense',
      why: 'No psychotic features. The burden thought is the important finding here, and it links to suicide risk.' },
    negative: {
      obs: 'Ward notes: attends group therapy but leaves early, tired; spends free time in her room; bathes daily.',
      ans: { 0: ['Minsan po. Sumasali po ako sa group, pero mabilis akong mapagod.', 'Sometimes. I join group, but I tire quickly.'], 1: ['Kaunti lang po. Mas gusto ko pong mag-isa.', 'Only a little. I prefer to be alone.'],
        2: ['Unti-unti na po. Dati, ayaw ko talagang bumangon.', 'It\'s slowly coming back. Before, I really didn\'t want to get up.'], 3: ['Opo, araw-araw na po ngayon.', 'Yes, every day now.'] },
      need: ['Anhedonia'], ok: ['Avolition', 'Asociality', 'Mild blunting'],
      wrong: { 'None noted': 'She still tires quickly, prefers being alone, and her interest is only slowly returning.', 'Poor self-care': 'She bathes daily now.' },
      doc: 'Reduced interest and energy (anhedonia), improving; prefers to be alone; self-care adequate',
      why: 'In depression this field captures reduced interest, energy, and social contact. Document them as improving, not gone.' },
    suicide: {
      ans: { 0: ['Wala na po, Dok.', 'Not anymore, Doc.'], 1: ['Wala po. Hindi ko po gagawin iyon sa mga anak ko.', 'No. I won\'t do that to my children.'],
        2: ['...Minsan po, sa gabi, naiisip ko pa rin na sana hindi na lang ako magising. Pero hindi ko po gagawin. Sasabihin ko po kay Nanay.', '...Sometimes at night I still think I wish I wouldn\'t wake up. But I won\'t do it. I\'d tell Mama.'] },
      key: [2],
      need: ['Passive death wish, no plan or intent'],
      wrong: { 'Denies suicidal ideation, plan, or intent': 'She denied at first, but the third question brought out "sana hindi na lang ako magising" (I wish I wouldn\'t wake up). That is a passive death wish. Document it and make a safety plan before she leaves.',
        None: 'She denied at first, but the third question brought out a passive death wish. Document it and make a safety plan before she leaves.',
        'Active suicidal ideation (reassess discharge)': 'She has no plan or intent, and says she would tell her mother. That is passive. Reassess if that changes.' },
      doc: 'Passive death wish at night ("sana hindi na lang ako magising"), no plan or intent; protective: children, will tell mother. Safety plan made; mother to keep medicines',
      why: 'Patients often answer "wala na po" to the first question. The third question, what she will do if the thoughts come back, is the one that found the risk. Ask all three.' },
    homicide: {
      ans: { 0: ['Wala po.', 'No.'], 1: ['Wala po. Sa sarili ko lang po ako nagagalit minsan.', 'No. Sometimes I\'m only angry at myself.'] },
      need: [['Denies homicidal ideation', 'None']],
      doc: 'Denies homicidal ideation',
      why: 'Anger turned on herself fits the depression and the self-blame.' },
    orientation: {
      ans: { 0: ['Lunes po. Katapusan na po ng Oktubre.', 'Monday. It\'s the end of October.'], 1: ['Sa ospital po sa Mariveles.', 'At the hospital in Mariveles.'], 2: ['Kayo po si Dok.', 'You\'re Doc.'] },
      need: ['Oriented to time, place, and person (×3)'],
      doc: 'Oriented to time, place, and person (×3)',
      why: 'Fully oriented.' },
    memory: {
      ans: { 0: ['Bola, puno, susi.', 'Ball, tree, key.'], 1: ['Bola, puno... ano po ulit yung pangatlo? ...Ay, susi po.', 'Ball, tree... what was the third again? ...Oh, key.'],
        2: ['Tinapay po at kape.', 'Bread and coffee.'], 3: ['Dalawang linggo na po.', 'Two weeks ago.'], 4: ['Sa Balanga po.', 'In Balanga.'] },
      need: ['Intact immediate, recent, and remote memory'],
      wrong: { 'Impaired recent memory': 'She recalled all three words on her own after a pause. Slowed recall from poor concentration is common in depression; note it in the details rather than calling memory impaired.' },
      doc: 'Intact immediate, recent (3/3, slow to recall the third word), and remote memory',
      why: 'Effortful recall with a correct answer is intact. Note the slow recall: poor concentration may still affect her work as a teacher.' },
    insight: {
      ans: { 0: ['Kasi po sobrang lungkot ko at gusto ko nang mamatay. Depression daw po.', 'Because I was so sad and wanted to die. They said it\'s depression.'],
        1: ['Opo. Alam ko na po ngayon na sakit ito, hindi kahinaan. Alam ko na rin po ang mga senyales, tulad ng hindi pagkakatulog.', 'Yes. I know now that this is an illness, not weakness. I also know the signs, like not sleeping.'],
        2: ['Opo, ng ilang buwan pa raw po kahit maayos na ako, para hindi bumalik.', 'Yes, for a few more months even when I\'m well, so it won\'t come back.'],
        3: ['Puwede pong bumalik ang lungkot. Ganoon po ang nangyari noong una. Tumigil ako agad.', 'The sadness can come back. That\'s what happened the first time. I stopped right away.'] },
      need: ['Good', ['Grade 5: intellectual insight', 'Grade 6: true emotional insight']],
      wrong: { Poor: 'She names the illness, knows her warning signs, and plans to continue treatment.', 'Grade 3: blames others/external factors': 'She does not blame others.' },
      doc: 'Good (grade 5): recognizes depression as an illness, knows early warning signs, plans to continue medicine after recovery; learned from stopping early in the first episode',
      why: 'Grade 5 or 6 are both defensible. Grade 6 needs behavior change, which you will see at follow-up.' },
    judgment: {
      ans: { 0: ['Pupunta po ako sa health center o tatawag dito sa OPD.', 'I\'ll go to the health center or call the OPD here.'], 1: ['Wala naman po akong naririnig na boses, Dok.', 'I don\'t hear any voices, Doc.'],
        2: ['Lalabas po ako agad at sasabihan ang iba.', 'I\'d go out right away and warn the others.'] },
      need: ['Intact test judgment', 'Intact social judgment'], ok: ['Good'],
      doc: 'Good: intact test and social judgment',
      why: 'The "voices" question doesn\'t fit her. Ask instead what she will do if the sadness or the thought of not waking up comes back.' },
    sleep: {
      obs: 'Ward sleep chart: 5 to 6 hours a night.',
      ans: { 0: ['Mga anim na oras po. Medyo matagal pa rin po akong makatulog, mga isang oras.', 'About six hours. It still takes me a while to fall asleep, about an hour.'],
        1: ['Minsan po, mga alas-tres, tapos hirap na akong bumalik sa tulog.', 'Sometimes around three, then it\'s hard to get back to sleep.'], 2: ['Hindi naman po.', 'Not really.'] },
      need: ['Fair', 'Difficulty initiating sleep'], ok: ['Frequent awakenings', 'Poor'],
      wrong: { Good: 'Five to six hours with an hour to fall asleep is not yet good.', '7–8 hours, uninterrupted': 'The chart shows 5 to 6 hours, and she wakes at three some nights.' },
      doc: 'Fair, 5–6 hours (sleep chart); about 1 hour to fall asleep; occasional early waking at 3 a.m.',
      why: 'Residual insomnia is a relapse risk and she named it as a warning sign. Track it at follow-up.' },
    adverse: {
      obs: 'Chart: nausea and headache in the first week of sertraline, resolved. No falls, no restraint, no medical illness.',
      ans: { 0: ['Noong umpisa po, nasusuka ako at sumasakit ang ulo, pero nawala na po.', 'At first I felt nauseous and had headaches, but they\'ve gone.'], 1: ['Wala po.', 'No.'] },
      need: ['None'],
      wrong: { 'Medical illness during admission': 'The nausea and headache were medicine side effects, and they resolved.', Sedation: 'She is not sleepy in the daytime.' },
      doc: 'None current; transient nausea and headache in the first week of sertraline, resolved',
      why: 'Write "none" plus the side effects that resolved. It explains the early complaints if she mentions them at follow-up.' },
    diagnosis: {
      ans: { 0: ['Opo. Akala ko po dati, mahina lang ang loob ko.', 'Yes. I used to think I was just weak-willed.'], 1: ['Pero wala naman po akong naririnig na ganyan, Dok.', 'But I don\'t hear things like that, Doc.'],
        2: ['Salamat po, Dok. Kailangan ko pong marinig iyan.', 'Thank you, Doc. I needed to hear that.'] },
      need: ['Major depressive disorder, recurrent'],
      doc: 'Major depressive disorder, recurrent, current episode severe (improving)',
      why: 'Second episode, so recurrent. The second explanation line describes psychosis. Skip it for depression, as her answer shows.' },
    medications: {
      ans: { 0: ['Opo.', 'Yes.'], 1: ['Wala po akong iniksiyon, di ba, Dok?', 'I don\'t have an injection, right, Doc?'],
        2: ['Isang tableta po ng sertraline tuwing umaga pagkatapos mag-almusal, araw-araw, kahit maayos na ang pakiramdam ko.', 'One sertraline tablet every morning after breakfast, every day, even when I feel well.'],
        3: ['Sa health center po, o bibili si Nanay sa botika.', 'At the health center, or Mama will buy it at the pharmacy.'], 4: ['Opo, Dok. Hindi na po tulad ng dati.', 'Yes, Doc. Not like before.'] },
      key: [2],
      need: ['Teach-back done, correct', 'Family supervises medication'],
      wrong: { 'Olanzapine ___ mg tab, 1 tab at HS': 'She is on sertraline, which is not in the quick picks. Write it in the details.', 'Fluphenazine decanoate ___ mg/ml, ___ ml deep IM every ___ weeks': 'She has no injection.' },
      doc: 'Sertraline 100 mg tab, 1 tab after breakfast; teach-back correct; mother to keep the supply and give one dose a day',
      why: 'With a passive death wish, the family keeps the supply and gives one dose at a time. Write sertraline in the details since it isn\'t a quick pick.' },
    aftercare: {
      ans: { 0: ['Opo, Dok.', 'Yes, Doc.'], 1: ['Si Nanay po. Siya na rin po ang magtatago ng mga gamot ko.', 'Mama. She\'ll also keep my medicines.'],
        2: ['Opo. Sasabihin ko po kay Nanay kapag bumalik ang ganoong isipin.', 'Yes. I\'ll tell Mama if those thoughts come back.'],
        3: ['Salamat po. Isusulat ko po sa likod ng reseta.', 'Thank you. I\'ll write it on the back of the prescription.'] },
      need: ['OPD follow-up in 2 weeks', 'Family oriented on warning signs', 'Referred to ___'],
      wrong: { 'Depot injection schedule given': 'She is on oral medicine only.' },
      doc: 'OPD follow-up in 2 weeks; referred to psychology for psychotherapy; mother oriented on warning signs and safety plan; crisis hotline 1553 given',
      why: 'With a passive death wish, consider earlier contact (a phone check-in within the week) and make sure the mother knows the hotline too.' }
  }
}
];
