/* Admission MSE practice cases: the same fictional patients as the discharge cases, seen on the day of admission.
   Structure follows PSYCH_ADMIT_MSE (Readmission Form MMH-MED-04-26-01/02).
   Per case: cc = chief complaint step { ask: phrase ref, ans: [tl, en, who], opts: [[text, correct, why]] }.
   Per domain (keyed by PSYCH_ADMIT_MSE domain id), same fields as the discharge cases:
     obs, ans { askIndex: [tl, en, who?] }, key, need, ok, wrong, doc, why, quote (mood)
     ev   optional evidence question: { find, opts: [[text, correct]], why }. "Which line supports this finding?" */
window.PSYCH_MSE_CASES = [
{
  id: 'ramon', title: 'Mang Ramon on readmission', level: 'B1', dx: 'Schizophrenia', form: 'readmission',
  setting: 'Admitting section, evening. Mang Ramon, 42, tricycle driver, known to the hospital (two earlier admissions). Brought by his wife, Aling Cora, and a barangay tanod.',
  chart: [
    'Known case of schizophrenia. Last discharged on olanzapine; stopped it about 2 months ago "kasi magaling na raw siya".',
    'Wife: for 3 weeks, not sleeping, talking toward the wall at night, refused to drink water at home. Today he threw a chair at the door when she served dinner.',
    'No alcohol or drug use per wife. No medical illness known.'
  ],
  cc: { ask: 'collateral:1',
    ans: ['Hindi na po siya natutulog, Dok, at nagwawala. Sabi niya, may lason daw po ang pagkain namin.', 'He doesn\'t sleep anymore, Doc, and he\'s violent. He says our food is poisoned.', 'Aling Cora (wife)'],
    opts: [
      ['"Hindi na po siya natutulog at nagwawala. Sabi niya, may lason daw po ang pagkain namin."', true, 'The form records the chief complaint in the informant\'s own words, in Tagalog, in quotation marks.'],
      ['Insomnia, aggression, and persecutory delusions', false, 'That is your interpretation. It belongs in the HPI and MSE, not the chief complaint.'],
      ['The patient is not sleeping and is violent.', false, 'A translation loses the informant\'s words. Quote the Tagalog; add a translation in parentheses if your service requires it.']
    ] },
  domains: {
    appearance: {
      obs: 'Adult male, medium built, in a sweat-stained shirt and basketball shorts. Unshaven, hair uncombed, noticeable body odor.',
      ans: { 0: ['(tumango lang)', '(just nods)'], 1: ['Ayoko. Dito na lang ako nakatayo.', 'I don\'t want to. I\'ll just stand here.'] },
      need: ['Adult male', 'Medium built', 'Unkempt'], ok: ['Poor hygiene'],
      wrong: { 'Fairly kempt': 'Unshaven, uncombed, and with body odor is unkempt.' },
      doc: 'Adult male, medium built, in a sweat-stained shirt and shorts, unshaven, unkempt, with body odor',
      why: 'Self-care drops as psychosis returns. Recording it here gives you the baseline to compare at discharge.' },
    psychomotor: {
      obs: 'Stands at first, sits only after his wife asks. Jiggles his leg, stands up twice to look out the door.',
      ans: { 0: ['Hindi ako mabagal. Gusto ko lang umuwi.', 'I\'m not slow. I just want to go home.'] },
      need: ['Restless'], ok: ['Psychomotor agitation'],
      wrong: { 'No psychomotor agitation or retardation': 'He jiggles his leg and gets up twice to check the door.', 'Psychomotor retardation': 'He is restless, not slowed.' },
      doc: 'Restless (leg jiggling, gets up twice to check the door); no abnormal movements',
      why: 'Restlessness on admission is also part of the agitation risk. Keep it in mind with the chair-throwing history.' },
    attitude: {
      obs: 'Watches the door and your notes; asks what you are writing. Looks at you only when challenging you. His wife says he is usually magalang.',
      ans: { 0: ['Bakit mo tinatanong? ...Ramon na lang.', 'Why are you asking? ...Just Ramon.'], 1: ['Tagalog. Bilisan mo na lang, Dok.', 'Tagalog. Just hurry up, Doc.'] },
      need: ['Guarded', 'Irritable'], ok: ['Suspicious', 'Cooperative', 'Fair eye contact', 'Poor eye contact'],
      wrong: { Hostile: 'He is sharp and suspicious but has not threatened you. Hostile is stronger than what you see.', Uncooperative: 'He is curt, but he answers your questions.' },
      ev: { find: 'Irritable', opts: [['"Bakit mo tinatanong? ...Ramon na lang."', true], ['"(tumango lang)"', false], ['"Hindi ako mabagal."', false]],
        why: 'He drops "po" with a doctor and challenges the question. In Tagalog, dropping po when someone usually uses it is a real sign of irritation, especially as his wife says he is normally polite.' },
      doc: 'Guarded and irritable, cooperative only in part; fair eye contact, watches the door',
      why: 'Listen to the register, not only the words. "Bakit mo tinatanong?" without po, from a man who usually says po, tells you about his attitude.' },
    mood: {
      obs: 'Tense jaw. Voice rises when he talks about the neighbors; otherwise little change in expression.',
      ans: { 0: ['Paano ako magiging okay, e nilalason nila kami!', 'How can I be okay when they\'re poisoning us!'], 1: ['Galit. Hindi ako makatulog dahil sa kanila.', 'Angry. I can\'t sleep because of them.'], 2: ['Wala akong pakialam sa numero mo.', 'I don\'t care about your number.'] },
      quote: 'Galit. Hindi ako makatulog dahil sa kanila. (Angry. I can\'t sleep because of them.)',
      need: ['Irritable mood', 'Restricted affect', 'Congruent affect'], ok: ['Anxious mood'],
      wrong: { 'Sad mood': 'He says he is angry, and his affect matches.', 'Labile affect': 'His affect is steady, tense and angry, without sudden swings.' },
      ev: { find: 'Irritable mood', opts: [['"Galit. Hindi ako makatulog dahil sa kanila."', true], ['"Tagalog. Bilisan mo na lang, Dok."', false], ['"Ayoko. Dito na lang ako nakatayo."', false]],
        why: 'Mood is what the patient reports. "Galit" is his own word for it.' },
      doc: '"Galit. Hindi ako makatulog dahil sa kanila." (Angry. I can\'t sleep because of them.) Irritable mood; restricted, congruent affect',
      why: 'He refused the 1 to 10 scale. Quote his own word instead; it is the better record anyway.' },
    speech: {
      obs: 'Speaks only when asked, in short sentences. Normal rate. Gets louder when he talks about the neighbors.',
      ans: { 0: ['Yung kapitbahay, si Mang Ben. May inilalagay siya sa tubig namin. Nakita ko siyang dumaan sa likod ng bahay. Kaya hindi na ako umiinom ng tubig sa bahay.', 'The neighbor, Mang Ben. He puts something in our water. I saw him pass behind the house. So I don\'t drink water at home anymore.'] },
      need: ['Non-spontaneous (answers only when asked)', 'Normal rate'], ok: ['Non-productive', 'Adequate volume', 'Loud volume'],
      wrong: { Pressured: 'Normal rate, and he can be interrupted.', 'Poverty of speech': 'When he does speak about the neighbors, he gives detail. He chooses not to talk; that is guardedness.' },
      doc: 'Non-spontaneous, normal rate, adequate volume, louder when discussing the neighbors',
      why: 'Few words from a guarded patient is not poverty of speech. The difference shows when a topic he cares about comes up and he says more.' },
    process: {
      ans: { 0: ['Yung kapitbahay, si Mang Ben. May inilalagay siya sa tubig namin. Nakita ko siyang dumaan sa likod ng bahay. Kaya hindi na ako umiinom ng tubig sa bahay.', 'The neighbor, Mang Ben. He puts something in our water. I saw him pass behind the house. So I don\'t drink water at home anymore.'],
        1: ['Ibig kong sabihin, gusto niya kaming mawala para makuha niya ang lupa namin. Matagal na niyang gusto iyon.', 'I mean, he wants us gone so he can take our land. He\'s wanted it for a long time.'] },
      need: ['Linear', 'Goal-directed'],
      wrong: { 'Loose associations': 'Each sentence follows from the last. The content is delusional, but the process is linear.', Tangential: 'He answers the question asked.' },
      ev: { find: 'Linear', opts: [['"...Nakita ko siyang dumaan sa likod ng bahay. Kaya hindi na ako umiinom ng tubig sa bahay."', true], ['"Wala akong pakialam sa numero mo."', false], ['"Bilisan mo na lang, Dok."', false]],
        why: 'Observation, then conclusion, then action ("kaya..."). The logic is followed step by step, even though the premise is false.' },
      doc: 'Linear and goal-directed',
      why: 'Don\'t let delusional content pull you into calling the process disorganized. Process is how ideas connect; content is what they are about.' },
    perception: {
      obs: 'Twice turns his head toward the wall and pauses, then goes on.',
      ans: { 0: ['Oo. Sa dingding. Pinag-uusapan nila ako gabi-gabi.', 'Yes. Through the wall. They talk about me every night.'], 1: ['Hindi bulong. Malakas. Kahit ikaw maririnig mo kung makikinig ka.', 'Not whispering. Loud. Even you\'d hear it if you listened.'],
        2: ['Wala.', 'No.'], 3: ['Sabi nila, papatayin daw kami. Na wala akong kuwenta.', 'They say they\'ll kill us. That I\'m worthless.'], 4: ['Hindi naman nila ako inuutusan.', 'They don\'t give me orders.'] },
      key: [0, 3, 4],
      need: ['Auditory hallucinations', 'Responding to internal stimuli'],
      wrong: { 'Denies perceptual disturbances': 'He describes voices through the wall every night.', 'Command auditory hallucinations': 'He hears threats and insults, but he says they don\'t give him orders.', 'Visual hallucinations': 'He denies seeing things.' },
      ev: { find: 'Responding to internal stimuli', opts: [['Twice turns his head toward the wall and pauses', true], ['Watches the door and your notes', false], ['Jiggles his leg', false]],
        why: 'Turning toward a sound and pausing mid-interview suggests he is hearing the voices now.' },
      doc: 'Auditory hallucinations: voices through the wall, talking about him nightly, threatening to kill the family, calling him worthless; no commands; responding to internal stimuli (turns toward the wall)',
      why: 'Always ask what the voices say and whether they command. Here: threats and insults, no commands. Note the content: it feeds the persecutory delusion.' },
    content: {
      ans: { 0: ['Oo, yung kapitbahay.', 'Yes, the neighbor.'], 1: ['Oo. Binabantayan nila ang bahay namin.', 'Yes. They watch our house.'], 2: ['Oo! Lason sa tubig at sa kanin.', 'Yes! Poison in the water and the rice.'],
        3: ['Sigurado ako. Nakita ko mismo.', 'I\'m sure. I saw it myself.'], 4: ['Wala nang ibang paliwanag. Bakit niya ako titingnan nang ganoon?', 'There\'s no other explanation. Why else would he look at me like that?'], 5: ['Hindi. Sila ang may kasalanan.', 'No. They\'re the ones at fault.'],
        6: ['Dok, baka po na-engkanto siya. Sabi ng albularyo sa amin.', 'Doc, maybe he was bewitched by an engkanto. That\'s what the folk healer said.', 'Aling Cora (wife)'] },
      key: [3, 4],
      need: ['Persecutory delusions'], ok: ['Delusions of reference'],
      wrong: { 'No delusions elicited': 'He is sure the neighbor is poisoning the family and accepts no other explanation.', 'Guilt or worthlessness (not delusional)': 'He blames others, not himself.' },
      ev: { find: 'Persecutory delusions', opts: [['"Sigurado ako. Nakita ko mismo." and "Wala nang ibang paliwanag."', true], ['"Dok, baka po na-engkanto siya." (wife)', false], ['"Hindi bulong. Malakas."', false]],
        why: 'Fixed certainty and no room for another explanation make it a delusion. The engkanto idea is his wife\'s cultural explanation of his illness, not his delusion.' },
      doc: 'Persecutory delusion: neighbor poisoning the family\'s water and rice to take their land; held with full conviction, no alternative explanation accepted',
      why: 'The two questions that make it a delusion are "how sure are you?" and "could there be another explanation?". Note the land motive: it may explain why this neighbor.' },
    safety: {
      ans: { 0: ['Hindi.', 'No.'], 1: ['Hindi.', 'No.'], 2: ['Hindi. Sila ang dapat mawala.', 'No. They\'re the ones who should disappear.'], 3: ['Wala.', 'None.'], 4: ['Wala.', 'None.'],
        5: ['Kung lalapit pa siya sa bahay namin, lalabanan ko siya. May itak ako.', 'If he comes near our house again, I\'ll fight him. I have a machete.'] },
      key: [5],
      need: ['Denies suicidal ideation', 'Homicidal ideation toward ___'],
      wrong: { 'Denies homicidal ideation': '"Lalabanan ko siya. May itak ako." is a conditional threat with a weapon toward a named person. That is homicidal ideation.' },
      ev: { find: 'Homicidal ideation', opts: [['"Kung lalapit pa siya sa bahay namin, lalabanan ko siya. May itak ako."', true], ['"Hindi. Sila ang dapat mawala."', false], ['"Galit. Hindi ako makatulog dahil sa kanila."', false]],
        why: 'A named target, a condition, and access to a weapon. "Sila ang dapat mawala" alone is vaguer; the itak statement is the clear one.' },
      doc: 'Denies suicidal ideation; homicidal ideation toward the neighbor (Mang Ben), conditional ("kung lalapit pa siya"), has access to an itak',
      why: 'Document the target, the condition, and the means. Ask the family to remove the itak, and consider the duty to protect the neighbor.' },
    orientation: {
      ans: { 0: ['Lunes.', 'Monday.'], 1: ['Ospital. Ikukulong n\'yo na naman ako.', 'Hospital. You\'ll lock me up again.'], 2: ['Doktor. Kayo yung nagpapainom ng gamot.', 'Doctor. You\'re the ones who make me take medicine.'] },
      need: ['Oriented to 3 spheres'],
      doc: 'Oriented to 3 spheres',
      why: 'Psychosis with clear orientation is the usual pattern. Disorientation would make you look for delirium or a medical cause.' },
    insight: {
      ans: { 0: ['Wala akong sakit. Sila ang may problema.', 'I\'m not sick. They\'re the ones with the problem.'], 1: ['Kasi akala nila baliw ako.', 'Because they think I\'m crazy.'], 2: ['Hindi ko kailangan ng gamot. Kaya nga ako tumigil.', 'I don\'t need medicine. That\'s why I stopped.'] },
      need: ['Poor', 'Grade 1: complete denial'],
      wrong: { 'Grade 3: blames others/external factors': 'Grade 3 needs some awareness of illness. He denies being ill at all.', Fair: 'He denies any illness and rejects medicine.' },
      ev: { find: 'Grade 1: complete denial', opts: [['"Wala akong sakit. Sila ang may problema."', true], ['"Kasi akala nila baliw ako."', false], ['"Ospital. Ikukulong n\'yo na naman ako."', false]],
        why: 'He denies being ill. Blaming others here is part of the delusion, not grade 3.' },
      doc: 'Poor (grade 1): denies illness ("Wala akong sakit. Sila ang may problema."); stopped medicine because he felt he didn\'t need it',
      why: 'Write the reason he stopped the medicine. It is the main target for discharge planning.' },
    impulse: {
      obs: 'Slams his palm on the table once when the neighbor is mentioned.',
      ans: { 0: ['Kapag ginagalit nila ako.', 'When they make me angry.'], 1: ['Binato ko lang ng upuan ang pinto. Hindi ko naman sila tinamaan.', 'I just threw a chair at the door. I didn\'t hit anyone.'] },
      need: ['Poor impulse control'],
      wrong: { 'Fair impulse control': 'He threw a chair today, slammed the table during the interview, and threatens to fight with an itak.' },
      doc: 'Poor impulse control (threw a chair at home today; slammed the table during the interview)',
      why: 'Impulse control comes from the history and what you see. Both point the same way here.' },
    judgment: {
      ans: { 0: ['Ihuhulog ko sa koreo.', 'I\'d drop it in the mail.'], 1: ['Lalabas ako at sasabihan ang mga tao.', 'I\'d go out and warn people.'] },
      need: ['Intact test judgment', 'Impaired social judgment'], ok: ['Fair', 'Poor'],
      wrong: { 'Intact social judgment': 'He stopped his medicine, stopped drinking water at home, and threatens a neighbor with an itak.', Good: 'Hypothetical answers are fine, but his real decisions are not.' },
      doc: 'Fair: intact test judgment; impaired social judgment (stopped medicine, refuses water at home, threatens neighbor)',
      why: 'Test judgment can be intact while real-life judgment is not. Many charts write a single word (e.g., "fair judgment"); give the reason too.' }
  }
}
];
