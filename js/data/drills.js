/* Language drills (3.7.0). View: js/drills.js (#/drills).
   DRILL_CLOZE: choose the marker. { q (with ____), en, a, set, why }.
     set: 'm' ang / ng / sa · 'n' si / ni / kay · 'ito' ito / nito / dito · 'iyan' iyan / niyan / diyan · 'iyon' iyon / noon / doon
   DRILL_BUILD: put the words in order. { en, t: [tiles in the model order], end, alt?: [[other accepted orders]], why }.
     Every alt must use exactly the same tiles. Tagalog word order is flexible, so list every natural order.
   The Formal / Everyday switch drill needs no data here: it uses the f and c forms of PSYCH_SECTIONS.
   Items are keyed by their text, so both lists can be edited or reordered freely.
   Drafted by Claude, pending Dr. Navarro's review. */
window.DRILL_CLOZE_SETS = {
  m: { title: 'Ang, ng, sa', opts: ['ang', 'ng', 'sa'], lesson: 'markers' },
  n: { title: 'Si, ni, kay', opts: ['si', 'ni', 'kay'], lesson: 'names' },
  ito: { title: 'Ito, iyan, iyon', opts: ['ito', 'nito', 'dito'], lesson: 'demonstratives' },
  iyan: { title: 'Ito, iyan, iyon', opts: ['iyan', 'niyan', 'diyan'], lesson: 'demonstratives' },
  iyon: { title: 'Ito, iyan, iyon', opts: ['iyon', 'noon', 'doon'], lesson: 'demonstratives' }
};
window.DRILL_CLOZE = [
  // ang / ng / sa
  { q: 'Natutulog ____ pasyente.', en: 'The patient is sleeping.', a: 'ang', set: 'm', why: 'The one the sentence is about (the topic) takes ang.' },
  { q: 'Uminom ____ gamot ang bata.', en: 'The child took medicine.', a: 'ng', set: 'm', why: 'With an actor-focus verb (uminom), the thing acted on takes ng.' },
  { q: 'Pumunta siya ____ ospital.', en: 'He went to the hospital.', a: 'sa', set: 'm', why: 'Direction and place take sa.' },
  { q: 'Ininom ____ pasyente ang gamot.', en: 'The patient took the medicine.', a: 'ng', set: 'm', why: 'With an object-focus verb (ininom), the doer takes ng.' },
  { q: 'Ininom ng pasyente ____ gamot.', en: 'The patient took the medicine.', a: 'ang', set: 'm', why: 'Object focus: the thing acted on is the topic, so it takes ang.' },
  { q: 'Nakatira kami ____ Mariveles.', en: 'We live in Mariveles.', a: 'sa', set: 'm', why: 'Location takes sa.' },
  { q: 'Bumili ____ bigas ang nanay.', en: 'Mother bought rice.', a: 'ng', set: 'm', why: 'Bumili is actor focus; what was bought takes ng.' },
  { q: 'Ibinigay ko ____ nars ang reseta.', en: 'I gave the prescription to the nurse.', a: 'sa', set: 'm', why: 'The person something is given to takes sa.' },
  { q: 'Masakit ____ ulo ko.', en: 'My head hurts.', a: 'ang', set: 'm', why: 'The thing being described is the topic: ang ulo ko.' },
  { q: 'Ito ang bahay ____ kapitbahay namin.', en: 'This is our neighbor\'s house.', a: 'ng', set: 'm', why: 'The owner follows the thing owned and takes ng.' },
  { q: 'Galing siya ____ trabaho.', en: 'He came from work.', a: 'sa', set: 'm', why: 'Galing sa: coming from a place.' },
  { q: 'Kinausap ____ doktor ang pamilya.', en: 'The doctor spoke with the family.', a: 'ng', set: 'm', why: 'Kinausap is object focus: the doer (doktor) takes ng, the family is the topic.' },
  { q: 'Nagluto ____ nanay ng hapunan.', en: 'Mother cooked dinner.', a: 'ang', set: 'm', why: 'Nagluto is actor focus: the doer is the topic and takes ang.' },
  { q: 'Naghihintay ____ asawa niya sa labas.', en: 'His wife is waiting outside.', a: 'ang', set: 'm', why: 'The one who is waiting is the topic.' },
  { q: 'Takot siya ____ dilim.', en: 'He is afraid of the dark.', a: 'sa', set: 'm', why: 'Takot sa: the thing feared takes sa. The same goes for galit sa and hiya sa.' },
  { q: 'Kailangan ____ pasyente ang pahinga.', en: 'The patient needs rest.', a: 'ng', set: 'm', why: 'With kailangan, gusto and ayaw, the person who needs or wants takes ng.' },
  { q: 'Sino ____ kasama mo sa bahay?', en: 'Who lives with you at home?', a: 'ang', set: 'm', why: 'After sino and ano, the rest of the question starts with ang.' },
  { q: 'Nagbigay ____ payo ang doktor.', en: 'The doctor gave advice.', a: 'ng', set: 'm', why: 'Nagbigay is actor focus; the thing given takes ng.' },
  { q: 'Umuwi na ____ mga bisita.', en: 'The visitors have gone home.', a: 'ang', set: 'm', why: 'The ones who went home are the topic: ang mga bisita.' },
  { q: 'Sinabi niya iyon ____ kapatid niya.', en: 'He said that to his sibling.', a: 'sa', set: 'm', why: 'The person spoken to takes sa.' },
  { q: 'Gusto ____ bata ang lugaw.', en: 'The child likes the porridge.', a: 'ng', set: 'm', why: 'With gusto, the one who likes takes ng; the thing liked, when specific, takes ang.' },
  // si / ni / kay
  { q: 'Natutulog ____ Lola.', en: 'Grandma is sleeping.', a: 'si', set: 'n', why: 'A named person as topic takes si (the name version of ang).' },
  { q: 'Kapatid ____ Ana si Ben.', en: 'Ben is Ana\'s brother.', a: 'ni', set: 'n', why: 'A named owner takes ni (the name version of ng).' },
  { q: 'Ibigay mo ito ____ Aling Rosa.', en: 'Give this to Aling Rosa.', a: 'kay', set: 'n', why: 'A named person something goes to takes kay (the name version of sa).' },
  { q: 'Sinundo ____ Carlo ang nanay niya.', en: 'Carlo fetched his mother.', a: 'ni', set: 'n', why: 'Sinundo is object focus: the named doer takes ni.' },
  { q: 'Tumawag ____ Mang Tonyo kanina.', en: 'Mang Tonyo called earlier.', a: 'si', set: 'n', why: 'Tumawag is actor focus: the caller is the topic.' },
  { q: 'Nagpaalam ako ____ Tatay.', en: 'I asked Father for permission to go.', a: 'kay', set: 'n', why: 'Nagpaalam kay: the person you take leave from.' },
  { q: 'Sino ____ Liza?', en: 'Who is Liza?', a: 'si', set: 'n', why: 'After sino, a name takes si.' },
  { q: 'Bahay ito ____ Kapitan Reyes.', en: 'This is Captain Reyes\'s house.', a: 'ni', set: 'n', why: 'A named owner takes ni. A title before the name does not change this.' },
  { q: 'Galit ba kayo ____ Ramon?', en: 'Are you angry at Ramon?', a: 'kay', set: 'n', why: 'Galit sa becomes galit kay before a name.' },
  { q: 'Dinala ____ Mika ang mga gamot.', en: 'Mika brought the medicines.', a: 'ni', set: 'n', why: 'Dinala is object focus: the named doer takes ni.' },
  { q: 'Kasama ko ____ Nanay kagabi.', en: 'Mother was with me last night.', a: 'si', set: 'n', why: 'Kasama ko si Nanay: the person who was with me is the topic.' },
  { q: 'Galing ang sulat ____ Arnel.', en: 'The letter is from Arnel.', a: 'kay', set: 'n', why: 'Galing sa becomes galing kay before a name.' },
  // ito / nito / dito
  { q: 'Ano ____?', en: 'What is this? (in your hand)', a: 'ito', set: 'ito', why: 'Ito is the ang form: this thing near me.' },
  { q: 'Umupo po kayo ____.', en: 'Please sit here.', a: 'dito', set: 'ito', why: 'Dito is the sa form: here, near me.' },
  { q: 'Uminom ka ____.', en: 'Drink some of this.', a: 'nito', set: 'ito', why: 'Nito is the ng form: the object of an actor-focus verb.' },
  { q: 'Kailan ka dumating ____ sa ospital?', en: 'When did you arrive here at the hospital?', a: 'dito', set: 'ito', why: 'Dito sa ospital: here at the hospital.' },
  { q: 'Kanino ang tsinelas na ____?', en: 'Whose slippers are these?', a: 'ito', set: 'ito', why: 'Tsinelas na ito: these slippers. The linker na joins the noun and ito.' },
  // iyan / niyan / diyan
  { q: 'Masakit ba ____?', en: 'Does that hurt? (the spot the patient is touching)', a: 'iyan', set: 'iyan', why: 'Iyan: that thing near you, the listener.' },
  { q: 'Ilagay mo ____ ang bag mo.', en: 'Put your bag there (beside you).', a: 'diyan', set: 'iyan', why: 'Diyan is the sa form: there, near you.' },
  { q: 'Sino ang nagbigay ____?', en: 'Who gave you that?', a: 'niyan', set: 'iyan', why: 'Nagbigay is actor focus, so the thing given takes the ng form: niyan.' },
  // iyon / noon / doon
  { q: 'Nakikita mo ba ang bahay na ____?', en: 'Do you see that house over there?', a: 'iyon', set: 'iyon', why: 'Iyon: that thing far from both of us.' },
  { q: 'Nakatira ang kapatid ko ____ sa Balanga.', en: 'My sibling lives over there in Balanga.', a: 'doon', set: 'iyon', why: 'Doon is the sa form: over there, far from both of us.' },
  { q: 'Ano ang ibig sabihin ____?', en: 'What does that mean? (what was said earlier)', a: 'noon', set: 'iyon', why: 'Noon (also niyon, and n\'on in speech) is the ng form of iyon.' },
  { q: 'Huwag kang pumunta ____.', en: 'Do not go over there.', a: 'doon', set: 'iyon', why: 'A place far from both speakers: doon.' }
];

window.DRILL_BUILD = [
  { en: 'Have you eaten already?', t: ['Kumain', 'ka', 'na', 'ba'], end: '?', why: 'The short pronoun ka comes first, then na, then ba.' },
  { en: 'Have you eaten already? (respectful)', t: ['Kumain', 'na', 'po', 'ba', 'kayo'], end: '?', why: 'The particles na, po and ba come before a two-syllable pronoun like kayo.' },
  { en: 'I have not eaten yet. (respectful)', t: ['Hindi', 'pa', 'po', 'ako', 'kumakain'], end: '.', why: 'After hindi, the particles and the pronoun move in front of the verb.' },
  { en: 'I have not seen him yet.', t: ['Hindi', 'ko', 'pa', 'siya', 'nakikita'], end: '.', why: 'Short pronoun ko first, then pa, then the longer pronoun siya, then the verb.' },
  { en: 'Has she taken her medicine?', t: ['Nakainom', 'na', 'ba', 'siya', 'ng gamot'], end: '?', why: 'Na and ba follow the first word; siya comes after them.' },
  { en: 'Where does it hurt? (respectful)', t: ['Saan', 'po', 'masakit'], end: '?', why: 'Po sits right after the first word of the sentence.' },
  { en: 'Are you still hearing voices?', t: ['May', 'naririnig', 'pa', 'ba', 'kayong', 'boses'], end: '?', why: 'May and its word count as one unit, so pa and ba come after naririnig. Kayo takes the linker -ng before boses.' },
  { en: 'I am just tired.', t: ['Pagod', 'lang', 'ako'], end: '.', why: 'Lang comes before the two-syllable pronoun ako.' },
  { en: 'He also wants to go home.', t: ['Gusto', 'rin', 'niyang', 'umuwi'], end: '.', why: 'Rin comes before niya. Niya takes the linker -ng before the verb.' },
  { en: 'Do not leave yet.', t: ['Huwag', 'ka', 'munang', 'umalis'], end: '.', why: 'After huwag: the short pronoun, then muna with the linker, then the verb.' },
  { en: 'May I ask you something? (respectful)', t: ['Puwede', 'po', 'ba', 'akong', 'magtanong'], end: '?', why: 'Po, then ba, then the pronoun with its linker, then the verb.' },
  { en: 'What is your name? (respectful)', t: ['Ano', 'po', 'ang', 'pangalan', 'ninyo'], end: '?', why: 'Po follows the question word. The owner (ninyo) follows the thing owned.' },
  { en: 'I cannot sleep at night.', t: ['Hindi', 'ako', 'makatulog', 'sa gabi'], end: '.', alt: [['sa gabi', 'Hindi', 'ako', 'makatulog']], why: 'After hindi the pronoun moves in front of the verb. The time phrase can also open the sentence.' },
  { en: 'They say he is not sleeping.', t: ['Hindi', 'raw', 'siya', 'natutulog'], end: '.', why: 'Raw (reported speech) comes before siya. It is raw, not daw, after a vowel.' },
  { en: 'Do you know him?', t: ['Kilala', 'mo', 'ba', 'siya'], end: '?', why: 'Short pronoun mo, then ba, then the longer pronoun siya.' },
  { en: 'I took the medicine this morning.', t: ['Ininom', 'ko', 'ang gamot', 'kaninang umaga'], end: '.', alt: [['Ininom', 'ko', 'kaninang umaga', 'ang gamot'], ['kaninang umaga', 'ko', 'ininom', 'ang gamot']], why: 'Ko stays right after the first word. The time phrase is free to move.' },
  { en: 'Who is with you at home?', t: ['Sino', 'ang', 'kasama', 'mo', 'sa bahay'], end: '?', alt: [['Sino', 'sa bahay', 'ang', 'kasama', 'mo']], why: 'Sino ang ... : the question word, then ang, then the description.' },
  { en: 'Why did you stop the medicine?', t: ['Bakit', 'mo', 'itinigil', 'ang gamot'], end: '?', why: 'After bakit, the short pronoun is pulled in front of the verb.' },
  { en: 'I have not told Mother yet.', t: ['Hindi', 'ko', 'pa', 'sinasabi', 'kay Nanay'], end: '.', why: 'Hindi, then ko, then pa, then the verb.' },
  { en: 'Please sit down first. (respectful)', t: ['Umupo', 'po', 'muna', 'kayo'], end: '.', alt: [['Umupo', 'muna', 'po', 'kayo']], why: 'Po and muna both come before kayo. Either order of the two is heard.' },
  { en: 'Is your husband here too? (respectful)', t: ['Nandito', 'rin', 'ba', 'ang asawa', 'ninyo'], end: '?', why: 'Rin, then ba, right after the first word.' },
  { en: 'When did this start? (respectful)', t: ['Kailan', 'po', 'ito', 'nagsimula'], end: '?', alt: [['Kailan', 'po', 'nagsimula', 'ito']], why: 'Po follows the question word.' },
  { en: 'I just woke up.', t: ['Kagigising', 'ko', 'lang'], end: '.', why: 'The recent past (ka- plus a repeated syllable) takes ko, not ako, and is usually followed by lang.' },
  { en: 'She does not want to eat anymore.', t: ['Ayaw', 'na', 'niyang', 'kumain'], end: '.', why: 'Na comes before niya; niya takes the linker before the verb.' },
  { en: 'Do you have any more questions?', t: ['May', 'tanong', 'pa', 'ba', 'kayo'], end: '?', why: 'May tanong is one unit; pa and ba follow it, then kayo.' },
  { en: 'I will come back tomorrow.', t: ['Babalik', 'ako', 'bukas'], end: '.', alt: [['bukas', 'babalik', 'ako']], why: 'Verb first, then the pronoun. The time word can also open the sentence.' },
  { en: 'Did you sleep well last night?', t: ['Nakatulog', 'ka', 'ba', 'nang maayos', 'kagabi'], end: '?', alt: [['Nakatulog', 'ka', 'ba', 'kagabi', 'nang maayos']], why: 'Ka, then ba, right after the verb. Nang maayos says how: well.' },
  { en: 'Nobody is helping me.', t: ['Walang', 'tumutulong', 'sa akin'], end: '.', why: 'Wala takes the linker -ng before the verb: walang tumutulong.' },
  { en: 'Do you think about hurting yourself?', t: ['Naiisip', 'mo', 'bang', 'saktan', 'ang sarili mo'], end: '?', why: 'Mo, then ba with the linker -ng, which joins it to the next verb.' },
  { en: 'I am the one who brought him here.', t: ['Ako', 'ang', 'nagdala', 'sa kanya', 'dito'], end: '.', alt: [['Ako', 'ang', 'nagdala', 'dito', 'sa kanya']], why: 'Ako ang ... puts the stress on who did it.' },
  { en: 'He has not come home since yesterday.', t: ['Hindi', 'pa', 'siya', 'umuuwi', 'mula kahapon'], end: '.', alt: [['mula kahapon', 'hindi', 'pa', 'siya', 'umuuwi']], why: 'Hindi, then pa, then siya, then the verb.' },
  { en: 'What did the voice say to you?', t: ['Ano', 'ang', 'sinabi', 'ng boses', 'sa iyo'], end: '?', alt: [['Ano', 'ang', 'sinabi', 'sa iyo', 'ng boses']], why: 'Ano ang sinabi: what was said. The speaker (ng boses) and the listener (sa iyo) can come in either order.' }
];
