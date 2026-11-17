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

/* 3.8.0: two typed drills.
   DRILL_DICTATION: hear it, type it. { tl, en, set, n? }. set: 'num' numbers · 'time' clock times · 'dose' doses.
     n = the figure in digits; typing it also counts as right. Write numbers as words in tl (the voice reads them).
   DRILL_TRANSLATE: English to Tagalog, typed. { en, tl: [accepted answers, the model first], set, why? }. set: 'e' everyday · 'w' ward.
     The typed line is compared word by word (App.similarity) with every accepted answer; 80% or more counts as right.
   Drafted by Claude, pending Dr. Navarro's review. */
window.DRILL_DICTATION = [
  { tl: 'Dalawampu\'t tatlong taong gulang na siya.', en: 'He is twenty-three years old.', set: 'num', n: '23' },
  { tl: 'Tatlong araw na siyang hindi kumakain.', en: 'He has not eaten for three days.', set: 'num', n: '3' },
  { tl: 'Anim silang magkakapatid.', en: 'There are six of them, brothers and sisters.', set: 'num', n: '6' },
  { tl: 'Labinlimang taon na kaming kasal.', en: 'We have been married for fifteen years.', set: 'num', n: '15' },
  { tl: 'Limampung piso ang pamasahe.', en: 'The fare is fifty pesos.', set: 'num', n: '50' },
  { tl: 'Isang daan at dalawampung piso po.', en: 'One hundred and twenty pesos.', set: 'num', n: '120' },
  { tl: 'Mga apat na oras lang ang tulog ko.', en: 'I only sleep about four hours.', set: 'num', n: '4' },
  { tl: 'Pitong bote po gabi-gabi.', en: 'Seven bottles every night.', set: 'num', n: '7' },
  { tl: 'Dalawang kaha ng sigarilyo sa isang araw.', en: 'Two packs of cigarettes a day.', set: 'num', n: '2' },
  { tl: 'Singkuwenta pesos lang po.', en: 'Only fifty pesos.', set: 'num', n: '50' },
  { tl: 'Walong buwan na siyang walang trabaho.', en: 'He has been out of work for eight months.', set: 'num', n: '8' },
  { tl: 'Siyamnapu\'t dalawang taong gulang ang lola ko.', en: 'My grandmother is ninety-two years old.', set: 'num', n: '92' },
  { tl: 'Alas-tres y medya ng hapon.', en: 'Half past three in the afternoon.', set: 'time', n: '3:30' },
  { tl: 'Alas-otso ng umaga ang konsulta.', en: 'The consultation is at eight in the morning.', set: 'time', n: '8:00' },
  { tl: 'Ala-una ng madaling-araw siya nagigising.', en: 'He wakes up at one in the early morning.', set: 'time', n: '1:00' },
  { tl: 'Alas-diyes ng gabi ang gamot.', en: 'The medicine is at ten at night.', set: 'time', n: '10:00' },
  { tl: 'Alas-sais y medya ng umaga.', en: 'Half past six in the morning.', set: 'time', n: '6:30' },
  { tl: 'Alas-dose ng tanghali.', en: 'Twelve noon.', set: 'time', n: '12:00' },
  { tl: 'Menos kinse para alas-singko.', en: 'A quarter to five.', set: 'time', n: '4:45' },
  { tl: 'Alas-nuwebe kinse ng gabi.', en: 'A quarter past nine at night.', set: 'time', n: '9:15' },
  { tl: 'Tuwing alas-kuwatro ng hapon.', en: 'Every afternoon at four.', set: 'time', n: '4:00' },
  { tl: 'Alas-siyete ng gabi hanggang alas-singko ng umaga.', en: 'From seven at night until five in the morning.', set: 'time' },
  { tl: 'Bumalik po kayo sa Huwebes, alas-dos ng hapon.', en: 'Please come back on Thursday at two in the afternoon.', set: 'time' },
  { tl: 'Mga alas-onse na siya natutulog.', en: 'He goes to sleep at about eleven.', set: 'time', n: '11:00' },
  { tl: 'Isang tableta pagkatapos kumain.', en: 'One tablet after eating.', set: 'dose' },
  { tl: 'Kalahating tableta bago matulog.', en: 'Half a tablet before sleeping.', set: 'dose' },
  { tl: 'Dalawang beses sa isang araw, umaga at gabi.', en: 'Twice a day, morning and night.', set: 'dose' },
  { tl: 'Tatlong beses sa isang araw pagkatapos kumain.', en: 'Three times a day after meals.', set: 'dose' },
  { tl: 'Isang tableta tuwing gabi.', en: 'One tablet every night.', set: 'dose' },
  { tl: 'Dalawang kapsula tuwing umaga.', en: 'Two capsules every morning.', set: 'dose' },
  { tl: 'Isang kutsarita tuwing walong oras.', en: 'One teaspoon every eight hours.', set: 'dose' },
  { tl: 'Isang iniksyon kada buwan.', en: 'One injection every month.', set: 'dose' },
  { tl: 'Huwag lalampas sa tatlong tableta sa isang araw.', en: 'Do not go over three tablets in a day.', set: 'dose' },
  { tl: 'Kung hindi makatulog, isa pang kalahating tableta.', en: 'If you cannot sleep, another half tablet.', set: 'dose' },
  { tl: 'Inumin ito sa loob ng dalawang linggo.', en: 'Take this for two weeks.', set: 'dose' },
  { tl: 'Isang tableta sa umaga at dalawa sa gabi.', en: 'One tablet in the morning and two at night.', set: 'dose' }
];
window.DRILL_TRANSLATE = [
  { en: 'Where do you live?', tl: ['Saan ka nakatira?', 'Saan po kayo nakatira?', 'Saan kayo nakatira?'], set: 'e' },
  { en: 'I am hungry.', tl: ['Gutom ako.', 'Gutom na ako.', 'Nagugutom ako.', 'Nagugutom na ako.'], set: 'e' },
  { en: 'What is your name?', tl: ['Ano ang pangalan mo?', 'Ano po ang pangalan ninyo?', 'Anong pangalan mo?', 'Ano po ang pangalan nila?'], set: 'e' },
  { en: 'I do not understand.', tl: ['Hindi ko maintindihan.', 'Hindi ko po maintindihan.', 'Hindi ko naiintindihan.', 'Hindi ko po naiintindihan.'], set: 'e' },
  { en: 'Wait a moment.', tl: ['Sandali lang.', 'Sandali lang po.', 'Teka lang.', 'Saglit lang.', 'Saglit lang po.'], set: 'e' },
  { en: 'How much is this?', tl: ['Magkano ito?', 'Magkano po ito?'], set: 'e' },
  { en: 'I will come back tomorrow.', tl: ['Babalik ako bukas.', 'Babalik po ako bukas.'], set: 'e' },
  { en: 'She is not here.', tl: ['Wala siya dito.', 'Wala siya rito.', 'Wala po siya dito.', 'Wala po siya rito.'], set: 'e' },
  { en: 'Who is with you?', tl: ['Sino ang kasama mo?', 'Sino po ang kasama ninyo?', 'Sinong kasama mo?'], set: 'e' },
  { en: 'I am already tired.', tl: ['Pagod na ako.', 'Pagod na po ako.'], set: 'e' },
  { en: 'Please sit down.', tl: ['Umupo po kayo.', 'Maupo po kayo.', 'Umupo ka.', 'Upo po kayo.', 'Maupo ka.'], set: 'e' },
  { en: 'It is raining.', tl: ['Umuulan.', 'Umuulan na.'], set: 'e' },
  { en: 'Do you have children?', tl: ['May anak ka ba?', 'May mga anak po ba kayo?', 'May anak po ba kayo?', 'May mga anak ka ba?'], set: 'e' },
  { en: 'I just ate.', tl: ['Kakakain ko lang.', 'Kakakain ko lang po.'], set: 'e', why: 'The just-done form takes ko, not ako.' },
  { en: 'Thank you very much.', tl: ['Maraming salamat.', 'Maraming salamat po.'], set: 'e' },
  { en: 'Have you eaten?', tl: ['Kumain ka na ba?', 'Kumain na po ba kayo?', 'Kumain na ba kayo?'], set: 'w', why: 'Short words in order: ka, na, po, ba; kayo comes after them.' },
  { en: 'Were you able to sleep last night?', tl: ['Nakatulog ka ba kagabi?', 'Nakatulog po ba kayo kagabi?', 'Nakatulog ba kayo kagabi?'], set: 'w' },
  { en: 'What do you feel?', tl: ['Ano ang nararamdaman mo?', 'Ano po ang nararamdaman ninyo?', 'Anong nararamdaman mo?'], set: 'w' },
  { en: 'Do you hear voices?', tl: ['May naririnig ka bang mga boses?', 'May naririnig po ba kayong mga boses?', 'Nakakarinig ka ba ng mga boses?', 'Nakakarinig po ba kayo ng mga boses?', 'May naririnig ka bang boses?', 'May naririnig po ba kayong boses?'], set: 'w' },
  { en: 'Take your medicine.', tl: ['Inumin mo ang gamot mo.', 'Inumin po ninyo ang gamot ninyo.', 'Uminom ka ng gamot.', 'Uminom po kayo ng gamot.'], set: 'w' },
  { en: 'Since when?', tl: ['Kailan pa?', 'Kailan pa po?', 'Mula kailan pa?', 'Simula kailan?'], set: 'w' },
  { en: 'Does anything hurt?', tl: ['May masakit ba sa iyo?', 'May masakit po ba sa inyo?', 'May masakit ba?', 'May masakit po ba?'], set: 'w' },
  { en: 'You are safe here.', tl: ['Ligtas ka dito.', 'Ligtas po kayo dito.', 'Ligtas ka rito.', 'Ligtas po kayo rito.'], set: 'w' },
  { en: 'I am here to help you.', tl: ['Nandito ako para tulungan ka.', 'Nandito po ako para tulungan kayo.', 'Narito ako para tulungan ka.', 'Nandito ako para tumulong sa iyo.', 'Nandito po ako para tumulong sa inyo.'], set: 'w' },
  { en: 'Who brought you here?', tl: ['Sino ang nagdala sa iyo dito?', 'Sino po ang nagdala sa inyo dito?', 'Sino ang naghatid sa iyo dito?', 'Sino po ang naghatid sa inyo dito?', 'Sino ang nagdala sa iyo rito?'], set: 'w' },
  { en: 'How long has it been?', tl: ['Gaano na katagal?', 'Gaano na po katagal?'], set: 'w' },
  { en: 'Do you drink alcohol?', tl: ['Umiinom ka ba ng alak?', 'Umiinom po ba kayo ng alak?'], set: 'w' },
  { en: 'Are you afraid?', tl: ['Natatakot ka ba?', 'Natatakot po ba kayo?', 'Takot ka ba?'], set: 'w' },
  { en: 'Tell me what happened.', tl: ['Ikuwento mo sa akin ang nangyari.', 'Ikuwento po ninyo sa akin ang nangyari.', 'Sabihin mo sa akin ang nangyari.', 'Sabihin po ninyo sa akin ang nangyari.', 'Ikuwento mo ang nangyari.'], set: 'w' },
  { en: 'Do you want to rest?', tl: ['Gusto mo bang magpahinga?', 'Gusto po ba ninyong magpahinga?', 'Gusto ba ninyong magpahinga?'], set: 'w' },
  { en: 'Have you thought of hurting yourself?', tl: ['Naisip mo na bang saktan ang sarili mo?', 'Naisip na po ba ninyong saktan ang sarili ninyo?', 'Naiisip mo bang saktan ang sarili mo?', 'Naiisip po ba ninyong saktan ang sarili ninyo?'], set: 'w', why: 'Ask it plainly. Asking does not put the idea in the patient\'s head.' },
  { en: 'I will call the doctor.', tl: ['Tatawagin ko ang doktor.', 'Tatawagin ko po ang doktor.', 'Tatawagan ko ang doktor.', 'Tatawagan ko po ang doktor.'], set: 'w' }
];

/* 3.9.0: two more drills.
   DRILL_FOCUS: the same event told two ways. { a, ar, o, or, ax, ox, enA, enO, why, end?, oAlt? }.
     a + ar = the actor-focus sentence (verb, then the rest); o + or = the object-focus sentence.
     ax, ox = the same verbs in another aspect (used as wrong options). oAlt = other accepted object-focus verbs (typed set).
     The drill builds its wrong options by mixing the pieces: the new verb with the old markers, the old verb with the new markers.
   DRILL_ERRORS: one mistake in each sentence. { bad, i: [word positions that count as the mistake, from 0], fix, en, why, set }.
     set: 'm' markers and pronouns · 'o' small words and linkers · 'v' verb forms. Words are split on spaces.
     Only mistakes no careful speaker would make: no item may be merely informal.
   Drafted by Claude, pending Dr. Navarro's review. */
window.DRILL_FOCUS = [
  { a: 'Uminom', ar: 'ang pasyente ng gamot', o: 'Ininom', or: 'ng pasyente ang gamot', ax: 'Iinom', ox: 'Iinumin', enA: 'The patient took some medicine.', enO: 'The patient took the medicine.', why: 'Uminom becomes ininom. The doer moves from ang to ng, and the thing taken becomes the ang word.' },
  { a: 'Kumain', ar: 'ako ng mangga', o: 'Kinain', or: 'ko ang mangga', ax: 'Kakain', ox: 'Kakainin', enA: 'I ate a mango.', enO: 'I ate the mango.', why: 'Ako becomes ko, because the doer is no longer the topic. Kinain ako would mean that something ate me.' },
  { a: 'Bumili', ar: 'si Nanay ng bigas', o: 'Binili', or: 'ni Nanay ang bigas', ax: 'Bibili', ox: 'Bibilhin', enA: 'Mother bought rice.', enO: 'Mother bought the rice.', why: 'For a name, si becomes ni.' },
  { a: 'Nagluto', ar: 'ang lola ng lugaw', o: 'Niluto', or: 'ng lola ang lugaw', ax: 'Magluluto', ox: 'Lulutuin', enA: 'Grandmother cooked porridge.', enO: 'Grandmother cooked the porridge.', why: 'A mag- verb often pairs with an -in verb: nagluto, niluto.' },
  { a: 'Sumulat', ar: 'siya ng liham', o: 'Sinulat', or: 'niya ang liham', ax: 'Susulat', ox: 'Susulatin', oAlt: ['Isinulat'], enA: 'She wrote a letter.', enO: 'She wrote the letter.', why: 'Siya becomes niya. Isinulat is also heard.' },
  { a: 'Nagbabasa', ar: 'ang bata ng libro', o: 'Binabasa', or: 'ng bata ang libro', ax: 'Nagbasa', ox: 'Binasa', enA: 'The child is reading a book.', enO: 'The child is reading the book.', why: 'Keep the aspect: both verbs are ongoing (the first syllable of the root is repeated).' },
  { a: 'Iinom', ar: 'ka ba ng tubig', o: 'Iinumin', or: 'mo ba ang tubig', ax: 'Uminom', ox: 'Ininom', end: '?', enA: 'Will you drink some water?', enO: 'Will you drink the water?', why: 'Ka becomes mo. Both verbs are still to happen.' },
  { a: 'Kumuha', ar: 'ang nars ng dugo', o: 'Kinuha', or: 'ng nars ang dugo', ax: 'Kukuha', ox: 'Kukunin', enA: 'The nurse drew blood.', enO: 'The nurse drew the blood.', why: 'Kumuha becomes kinuha. The nurse moves to ng.' },
  { a: 'Nagdala', ar: 'si Carlo ng pagkain', o: 'Dinala', or: 'ni Carlo ang pagkain', ax: 'Magdadala', ox: 'Dadalhin', enA: 'Carlo brought food.', enO: 'Carlo brought the food.', why: 'Nagdala becomes dinala, and si Carlo becomes ni Carlo.' },
  { a: 'Naghugas', ar: 'ako ng pinggan', o: 'Hinugasan', or: 'ko ang pinggan', ax: 'Maghuhugas', ox: 'Huhugasan', enA: 'I washed dishes.', enO: 'I washed the plate.', why: 'Some verbs take -an, not -in, when the thing acted on is the topic: hugasan, buksan, bayaran.' },
  { a: 'Nagbukas', ar: 'siya ng bintana', o: 'Binuksan', or: 'niya ang bintana', ax: 'Magbubukas', ox: 'Bubuksan', enA: 'He opened a window.', enO: 'He opened the window.', why: 'Buksan is an -an verb, and the root loses a vowel: bukas, buksan.' },
  { a: 'Tumawag', ar: 'ang doktor ng nars', o: 'Tinawag', or: 'ng doktor ang nars', ax: 'Tatawag', ox: 'Tatawagin', enA: 'The doctor called a nurse.', enO: 'The doctor called the nurse.', why: 'Watch the markers when both are people. Tinawag ang doktor ng nars would mean that the nurse called the doctor.' },
  { a: 'Naghahanap', ar: 'kami ng doktor', o: 'Hinahanap', or: 'namin ang doktor', ax: 'Naghanap', ox: 'Hinanap', enA: 'We are looking for a doctor.', enO: 'We are looking for the doctor.', why: 'Kami becomes namin.' },
  { a: 'Magbabayad', ar: 'sila ng utang', o: 'Babayaran', or: 'nila ang utang', ax: 'Nagbayad', ox: 'Binayaran', enA: 'They will pay a debt.', enO: 'They will pay the debt.', why: 'Sila becomes nila. Bayaran is an -an verb.' },
  { a: 'Nagtapon', ar: 'ang lalaki ng gamot', o: 'Itinapon', or: 'ng lalaki ang gamot', ax: 'Magtatapon', ox: 'Itatapon', enA: 'The man threw away some medicine.', enO: 'The man threw away the medicine.', why: 'Verbs that move a thing away from the doer take i-: itapon, ibigay, ilagay.' },
  { a: 'Nagbigay', ar: 'ang doktor ng reseta', o: 'Ibinigay', or: 'ng doktor ang reseta', ax: 'Magbibigay', ox: 'Ibibigay', enA: 'The doctor gave a prescription.', enO: 'The doctor gave the prescription.', why: 'Ibigay is an i- verb.' },
  { a: 'Naglagay', ar: 'siya ng asin', o: 'Inilagay', or: 'niya ang asin', ax: 'Maglalagay', ox: 'Ilalagay', enA: 'She put in some salt.', enO: 'She put in the salt.', why: 'Ilagay is an i- verb. Siya becomes niya.' },
  { a: 'Nakakita', ar: 'ako ng ahas', o: 'Nakita', or: 'ko ang ahas', ax: 'Makakakita', ox: 'Makikita', enA: 'I saw a snake.', enO: 'I saw the snake.', why: 'Maka- verbs pair with ma- verbs: nakakita, nakita.' },
  { a: 'Nakarinig', ar: 'siya ng boses', o: 'Narinig', or: 'niya ang boses', ax: 'Makakarinig', ox: 'Maririnig', enA: 'He heard a voice.', enO: 'He heard the voice.', why: 'Nakarinig becomes narinig. Siya becomes niya.' },
  { a: 'Nagtago', ar: 'ang pasyente ng gamot', o: 'Itinago', or: 'ng pasyente ang gamot', ax: 'Magtatago', ox: 'Itatago', enA: 'The patient hid some medicine.', enO: 'The patient hid the medicine.', why: 'Itago is an i- verb.' },
  { a: 'Humihingi', ar: 'ang pasyente ng tubig', o: 'Hinihingi', or: 'ng pasyente ang tubig', ax: 'Humingi', ox: 'Hiningi', enA: 'The patient is asking for water.', enO: 'The patient is asking for the water.', why: 'Both verbs are ongoing: humihingi, hinihingi.' },
  { a: 'Nagsusuot', ar: 'ang bata ng tsinelas', o: 'Isinusuot', or: 'ng bata ang tsinelas', ax: 'Nagsuot', ox: 'Isinuot', enA: 'The child is putting on slippers.', enO: 'The child is putting on the slippers.', why: 'Isuot is an i- verb. Both verbs are ongoing.' },
  { a: 'Maglilinis', ar: 'kami ng kuwarto', o: 'Lilinisin', or: 'namin ang kuwarto', ax: 'Naglinis', ox: 'Nilinis', enA: 'We will clean a room.', enO: 'We will clean the room.', why: 'Kami becomes namin. Both verbs are still to happen.' },
  { a: 'Nagbasag', ar: 'siya ng baso', o: 'Binasag', or: 'niya ang baso', ax: 'Magbabasag', ox: 'Babasagin', enA: 'He broke a glass.', enO: 'He broke the glass.', why: 'Nagbasag becomes binasag. Siya becomes niya.' }
];

window.DRILL_ERRORS = [
  // markers and pronouns
  { bad: 'Natutulog ng pasyente.', i: [1], fix: 'Natutulog ang pasyente.', en: 'The patient is sleeping.', set: 'm', why: 'The one the sentence is about takes ang.' },
  { bad: 'Ibinigay ko ang reseta ang nars.', i: [4], fix: 'Ibinigay ko ang reseta sa nars.', en: 'I gave the prescription to the nurse.', set: 'm', why: 'The person something is given to takes sa. A sentence has one ang word.' },
  { bad: 'Kapatid si Ana si Ben.', i: [1], fix: 'Kapatid ni Ana si Ben.', en: 'Ben is Ana\'s brother.', set: 'm', why: 'A named owner takes ni.' },
  { bad: 'Ininom ang pasyente ang gamot.', i: [1], fix: 'Ininom ng pasyente ang gamot.', en: 'The patient took the medicine.', set: 'm', why: 'With ininom the doer takes ng.' },
  { bad: 'Nakatira kami ng Mariveles.', i: [2], fix: 'Nakatira kami sa Mariveles.', en: 'We live in Mariveles.', set: 'm', why: 'A place takes sa.' },
  { bad: 'Tumawag ni Mang Tonyo kanina.', i: [1], fix: 'Tumawag si Mang Tonyo kanina.', en: 'Mang Tonyo called earlier.', set: 'm', why: 'Tumawag is actor focus, so the caller takes si.' },
  { bad: 'Ibigay mo ito si Aling Rosa.', i: [3], fix: 'Ibigay mo ito kay Aling Rosa.', en: 'Give this to Aling Rosa.', set: 'm', why: 'A named person something goes to takes kay.' },
  { bad: 'Kumain ko ng mangga.', i: [1], fix: 'Kumain ako ng mangga.', en: 'I ate a mango.', set: 'm', why: 'Kumain is actor focus: the doer is ako, not ko.' },
  { bad: 'Binili ako ang gamot.', i: [1], fix: 'Binili ko ang gamot.', en: 'I bought the medicine.', set: 'm', why: 'Binili is object focus: the doer is ko. Binili ako would mean that someone bought me.' },
  { bad: 'Gusto ako ng kape.', i: [1], fix: 'Gusto ko ng kape.', en: 'I want coffee.', set: 'm', why: 'With gusto, ayaw and kailangan, the person takes the ng form: ko, mo, niya.' },
  { bad: 'Mahal ko ikaw.', i: [1, 2], fix: 'Mahal kita.', en: 'I love you.', set: 'm', why: 'Ko and ka never stand together. I to you is one word: kita.' },
  { bad: 'Sino ng kasama mo sa bahay?', i: [1], fix: 'Sino ang kasama mo sa bahay?', en: 'Who lives with you at home?', set: 'm', why: 'After sino comes ang.' },
  { bad: 'Takot siya ng karayom.', i: [2], fix: 'Takot siya sa karayom.', en: 'He is afraid of needles.', set: 'm', why: 'Takot sa, galit sa, hiya sa: the feeling points at its target with sa.' },
  { bad: 'May ang lagnat ang bata.', i: [1], fix: 'May lagnat ang bata.', en: 'The child has a fever.', set: 'm', why: 'May is followed straight by the thing. It never takes ang.' },
  { bad: 'Ang Maria ay nars.', i: [0], fix: 'Si Maria ay nars.', en: 'Maria is a nurse.', set: 'm', why: 'A person\'s name takes si, not ang.' },
  { bad: 'Mga si Ana at Ben ay magkapatid.', i: [0, 1], fix: 'Sina Ana at Ben ay magkapatid.', en: 'Ana and Ben are siblings.', set: 'm', why: 'Two or more named people take sina.' },
  // small words and linkers
  { bad: 'Kumain na ka ba?', i: [1, 2], fix: 'Kumain ka na ba?', en: 'Have you eaten already?', set: 'o', why: 'The one-syllable pronouns ka, ko and mo come before na, pa and ba.' },
  { bad: 'Hindi ko siya pa nakikita.', i: [2, 3], fix: 'Hindi ko pa siya nakikita.', en: 'I have not seen him yet.', set: 'o', why: 'Pa comes before a two-syllable pronoun like siya.' },
  { bad: 'Kilala ba mo siya?', i: [1, 2], fix: 'Kilala mo ba siya?', en: 'Do you know him?', set: 'o', why: 'Mo comes before ba.' },
  { bad: 'Maganda na bahay ito.', i: [0, 1], fix: 'Magandang bahay ito.', en: 'This is a beautiful house.', set: 'o', why: 'After a vowel the linker is -ng, joined to the word: magandang.' },
  { bad: 'Masarap ng pagkain ito.', i: [1], fix: 'Masarap na pagkain ito.', en: 'This is delicious food.', set: 'o', why: 'After a consonant the linker is na. Ng is a marker, not a linker.' },
  { bad: 'May dalawa anak siya.', i: [1], fix: 'May dalawang anak siya.', en: 'She has two children.', set: 'o', why: 'A number takes the linker before its noun: dalawang anak.' },
  { bad: 'Ilan taon ka na?', i: [0], fix: 'Ilang taon ka na?', en: 'How old are you?', set: 'o', why: 'Ilan takes the linker before its noun: ilang taon.' },
  { bad: 'Mayroon lagnat ang bata.', i: [0], fix: 'Mayroong lagnat ang bata.', en: 'The child has a fever.', set: 'o', why: 'Mayroon takes the linker -ng. May does not.' },
  { bad: 'Hindi akong pera.', i: [0], fix: 'Wala akong pera.', en: 'I have no money.', set: 'o', why: 'Not having is wala. Hindi says that something is not so.' },
  { bad: 'Wala ako pagod.', i: [0], fix: 'Hindi ako pagod.', en: 'I am not tired.', set: 'o', why: 'Hindi negates a description or an action. Wala means there is none.' },
  { bad: 'Hindi kang umalis.', i: [0], fix: 'Huwag kang umalis.', en: 'Do not leave.', set: 'o', why: 'A command not to do something starts with huwag.' },
  { bad: 'Kumusta ikaw?', i: [1], fix: 'Kumusta ka?', en: 'How are you?', set: 'o', why: 'After the first word the short form ka is used. Ikaw stands at the start or alone.' },
  { bad: 'Ka ba ang doktor?', i: [0], fix: 'Ikaw ba ang doktor?', en: 'Are you the doctor?', set: 'o', why: 'Ka can never start a sentence. Use ikaw.' },
  { bad: 'Sino ang pangalan niya?', i: [0], fix: 'Ano ang pangalan niya?', en: 'What is his name?', set: 'o', why: 'A name is asked with ano. Sino asks who a person is.' },
  { bad: 'Kailan oras na?', i: [0], fix: 'Anong oras na?', en: 'What time is it?', set: 'o', why: 'Clock time is asked with anong oras. Kailan asks for a day or date.' },
  // verb forms
  { bad: 'Kumain ako bukas.', i: [0], fix: 'Kakain ako bukas.', en: 'I will eat tomorrow.', set: 'v', why: 'Bukas is still to come: repeat the first syllable of the root and drop -um-.' },
  { bad: 'Kakain ako kahapon.', i: [0], fix: 'Kumain ako kahapon.', en: 'I ate yesterday.', set: 'v', why: 'Kahapon is finished: use the completed form.' },
  { bad: 'Umiinom siya ng gamot bukas ng umaga.', i: [0], fix: 'Iinom siya ng gamot bukas ng umaga.', en: 'He will take medicine tomorrow morning.', set: 'v', why: 'Umiinom is happening now. For tomorrow use iinom.' },
  { bad: 'Kailangan mong umiinom ng gamot.', i: [2], fix: 'Kailangan mong uminom ng gamot.', en: 'You need to take medicine.', set: 'v', why: 'After kailangan, gusto and puwede the verb stays in its basic form.' },
  { bad: 'Nagluto ng nanay ang hapunan.', i: [0], fix: 'Niluto ng nanay ang hapunan.', en: 'Mother cooked the dinner.', set: 'v', why: 'The doer has ng and the food has ang, so the verb must be object focus: niluto.' },
  { bad: 'Binili si Ana ng bigas.', i: [0], fix: 'Bumili si Ana ng bigas.', en: 'Ana bought rice.', set: 'v', why: 'The doer has si and the thing has ng, so the verb must be actor focus: bumili.' },
  { bad: 'Kumakainin ko ang tinapay.', i: [0], fix: 'Kinakain ko ang tinapay.', en: 'I am eating the bread.', set: 'v', why: 'A verb takes -um- or -in, never both.' },
  { bad: 'Maglalaro ang mga bata kanina.', i: [0], fix: 'Naglaro ang mga bata kanina.', en: 'The children played earlier.', set: 'v', why: 'Kanina is past. Mag- becomes nag- for what has happened.' },
  { bad: 'Nakatulog ako mamayang gabi.', i: [0], fix: 'Matutulog ako mamayang gabi.', en: 'I will sleep tonight.', set: 'v', why: 'Mamayang gabi is still to come: matutulog.' },
  { bad: 'Hindi ako makakatulog kagabi.', i: [2], fix: 'Hindi ako nakatulog kagabi.', en: 'I could not sleep last night.', set: 'v', why: 'Kagabi is past: maka- becomes naka-.' }
];
