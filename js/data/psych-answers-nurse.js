/* Likely patient and family replies for the six nurse sections (3.2.0), merged into PSYCH_ANSWERS.sections.
   Load AFTER psych-answers.js (which creates PSYCH_ANSWERS). Item = [tagalog, english, clinicalNote?] (note <= 16 words).
   STATUS: DRAFT. Tagalog for review by Dr. Navarro or a native-speaking clinician; nurse content pending Nursing Service review. */
window.PSYCH_ANSWERS = window.PSYCH_ANSWERS || { common: [], sections: {} };
Object.assign(window.PSYCH_ANSWERS.sections, {
  'nurse-admit': [
    ['Opo, naiintindihan ko po.', 'Yes, I understand.'],
    ['Bakit po kailangang tingnan ang mga gamit ko?', 'Why do you have to look through my things?', 'Explain calmly: done with everyone, for safety; items returned at discharge.'],
    ['Puwede ko po bang hawakan ang cellphone ko?', 'Can I keep my phone?', 'Check your ward\'s rules and the doctor\'s orders before you answer.'],
    ['Kailan po puwedeng dumalaw ang pamilya ko?', 'When can my family visit?'],
    ['Palayaw ko na lang po ang itawag ninyo.', 'Just call me by my nickname.'],
    ['Mas gusto ko pong tawagin sa pangalan ko.', 'I\'d like to be called by my first name.'],
    ['Medyo pagod po ako, gusto ko pong humiga.', 'I\'m a bit tired, I\'d like to lie down.'],
    ['Ayoko po rito.', 'I don\'t want to be here.', 'Acknowledge it without arguing; tell the doctor, at once if trying to leave.'],
    ['Ayoko pong tanggalin ang singsing ko.', 'I don\'t want to take off this ring.', 'Ask why it matters; check your ward\'s rules and offer a choice.'],
    ['Okay lang po ako sa ngayon.', 'I\'m fine for now.']
  ],
  'nurse-meds': [
    ['Opo, iinumin ko po.', 'Yes, I\'ll take it.'],
    ['Ayoko pong uminom ngayon.', 'I don\'t want to take it now.', 'Ask why, do not press; record it and tell the doctor.'],
    ['Iba po ang kulay ng gamot na ito sa dati.', 'This medicine is a different colour from usual.', 'Stop and check the order before you give it.'],
    ['Kapag ininom ko po ito, inaantok ako at wala akong magawa.', 'When I take it I get sleepy and can\'t do anything.', 'Possible side effect; tell the doctor.'],
    ['May lason po ba ito?', 'Is there poison in it?', 'Possible persecutory belief; do not argue, tell the doctor.'],
    ['Hindi po mapakali ang mga binti ko.', 'My legs feel restless, I can\'t keep still.', 'Possible akathisia; tell the doctor.'],
    ['Nanginginig po palagi ang mga kamay ko.', 'My hands keep shaking.', 'Tell the doctor; at once if with vomiting, diarrhoea or confusion.'],
    ['Hindi po ako makatulog. Puwede po bang humingi ng pampatulog?', 'I can\'t sleep, can I have something to help me sleep?', 'Check whether there is an as-needed order.'],
    ['Magaling na po ako, kaya hindi ko na siguro kailangan ang gamot.', 'I\'m better now, so I don\'t think I need the medicine.', 'Listen, record and tell the doctor.'],
    ['Mamaya ko na po iinumin, iwan n\'yo na lang po diyan.', 'I\'ll take it later, just leave it there.', 'Do not leave medicines at the bedside; offer to come back.']
  ],
  'nurse-daily': [
    ['Kaunti lang po ang tulog ko.', 'I didn\'t sleep much.'],
    ['Ilang beses po akong nagising kagabi.', 'I woke up many times in the night.'],
    ['Mahimbing po ang tulog ko.', 'I slept soundly.'],
    ['Wala po akong gana, kalahati lang po ang nakain ko.', 'I had no appetite and could only eat about half.'],
    ['Parang may inilagay po sa pagkain, kaya hindi ko makain.', 'I feel something has been put in the food, so I can\'t eat it.', 'Possible delusional belief; do not argue. Record intake and tell the doctor.'],
    ['Apat na araw na po akong hindi nakakadumi.', 'I haven\'t had a bowel movement for four days.', 'Report it; at once if belly pain, swelling or vomiting.'],
    ['Nahihirapan po akong umihi.', 'It\'s hard to pass urine.', 'Possible medicine side effect; tell the doctor.'],
    ['Ayoko pong maligo ngayon.', 'I don\'t want to bathe today.', 'Ask why; offer another time or a sponge bath.'],
    ['Masakit po ang ulo ko.', 'I have a headache.'],
    ['Wala po akong ganang gumawa ng kahit ano.', 'I don\'t feel like doing anything.', 'Low energy or motivation; record and pass it on.']
  ],
  'nurse-risk': [
    ['Hindi na po ako mapakali mula kaninang umaga.', 'I\'ve felt unsettled since the morning.', 'Ask what is behind it; may precede agitation or be a side effect.'],
    ['Medyo mas okay po kaysa kahapon.', 'A little better than yesterday.'],
    ['Hindi po, hindi ko naiisip na mamatay.', 'No, I haven\'t been thinking of dying.'],
    ['Sa totoo lang po, gusto ko pa ring mamatay.', 'Honestly, I still feel like dying.', 'Ask whether it is stronger than before, and tell the doctor.'],
    ['Mas matindi po ngayon kaysa kahapon.', 'It\'s stronger than yesterday.', 'Tell the doctor at once.'],
    ['Nakapagpasya na po ako.', 'I\'ve already made up my mind.', 'Possible plan or intent. Stay with the patient and tell the doctor at once.'],
    ['Sinasabi po ng boses na mamatay na ako.', 'The voice tells me to die.', 'Command voices: tell the doctor at once.'],
    ['Parang may sumusunod po sa akin. Natatakot po ako.', 'I feel someone is after me. I\'m scared.', 'Fear can drive agitation; report it to the doctor.'],
    ['Bakit po ninyo hinahalughog ang kuwarto ko? Pinaghihinalaan n\'yo po ba ako?', 'Why are you searching my room? Do you suspect me?', 'Explain again that the check is routine for everyone.'],
    ['Maaliwalas na po ang isip ko ngayon. Wala na pong dapat ipag-alala.', 'My mind feels clear today. There\'s nothing to worry about any more.', 'Sudden calm after despair: ask gently and tell the doctor at once.']
  ],
  'nurse-calm': [
    ['Gusto ko pong magpahinga muna sa tahimik na kuwarto.', 'I\'d like to rest in the quiet room for a bit.'],
    ['Puwede po bang makahingi ng tubig?', 'Could I have some water?'],
    ['Sige po, magpapahinga muna ako.', 'Then I\'ll rest a bit first.'],
    ['Ayoko ng gamot!', 'I don\'t want medicine!', 'Ask what worries them about it; report the refusal to the doctor.'],
    ['Ayoko po ng gamot na iyan. Parang lumalabo ang isip ko.', 'I don\'t want that medicine. It makes my mind foggy.', 'Report the reason to the doctor; it may be a side effect.'],
    ['Huwag n\'yo akong pagtulungan!', 'Don\'t all gang up on me!', 'Keep only needed staff close; others wait further away, if safe.'],
    ['Ang tagal ko pong naghintay, kaya nagalit ako.', 'I waited for ages, so I lost my temper.'],
    ['Pasensya na po sa pagsigaw ko kanina.', 'I\'m sorry for shouting earlier.'],
    ['Nakatulong po ang mapag-isa sandali.', 'Having some time alone helped.'],
    ['Sa susunod po, sasabihin ko agad kapag naiinis na ako.', 'Next time I\'ll tell you sooner when I start getting irritated.']
  ],
  'nurse-educ': [
    ['Naiintindihan ko po. Iinumin ko po sa halos parehong oras araw-araw.', 'I understand. I\'ll take it at about the same time each day.'],
    ['Kapag magaling na po ako, puwede ko nang itigil ang gamot, di ba?', 'Once I\'m better I can stop the medicine, right?', 'Explain again that stopping is decided with the doctor.'],
    ['Natatakot po akong tumaba dahil sa gamot.', 'I\'m worried the medicine will make me put on weight.', 'Report the worry to the doctor; it can lead to stopping the medicine.'],
    ['Madalas ko pong makalimutan ang gamot sa umaga.', 'I often forget the morning dose.'],
    ['Okay lang po ba ang kaunting alak?', 'Is a little alcohol all right?', 'Refer the question to the doctor.'],
    ['Gusto ko pong ako na lang ang magtabi ng gamot ko.', 'I want to look after my own medicines.', 'Report to the doctor, who decides who keeps the medicines.'],
    ['Ano po ang gagawin namin kung ayaw niyang uminom?', 'What should we do if they won\'t take it?', 'Advise contacting the hospital; do not suggest forcing it.'],
    ['Nitong mga nakaraang araw, parang hindi na naman siya natutulog sa gabi.', 'Lately they don\'t seem to be sleeping at night again.', 'Possible early sign of relapse; tell the doctor.'],
    ['Pagod na pagod na rin po ako.', 'I\'m worn out too.', 'Carer strain: ask how they are coping and tell the team.'],
    ['Kailan po ang susunod na check-up?', 'When is the next check-up?']
  ]
});
