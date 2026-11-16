/* Listening exercises (3.5.0): audio first, text hidden until you ask for it.
   { id, level, kind, title, titleEn, setting (English, what you are about to hear), psych?,
     speakers: [names], lines: [[speakerIdx, tagalog, english]],
     q: [[question, [options], correctIdx, explanation]],  (same shape as READING.q)
     dictation: [lineIdx, ...] }  lines to type from the audio at the end.
   Keep each line one or two sentences: every line is one recorded clip. */
window.LISTENING = [
{
  id: 'voicemail-klinika', level: 'B1', kind: 'Voicemail', title: 'Mensahe mula sa Klinika', titleEn: 'A message from the clinic',
  setting: 'A voicemail left on a patient\'s phone by the clinic receptionist. Listen for the new day and time, what to bring, and the deadline.',
  speakers: ['Receptionist'],
  lines: [
    [0, 'Magandang hapon po. Si Joy po ito, mula sa klinika ni Dra. Reyes.', 'Good afternoon. This is Joy, from Dr. Reyes\'s clinic.'],
    [0, 'Tumatawag po ako para kay Ginoong Ramil Cruz, tungkol sa follow-up niya.', 'I\'m calling for Mr. Ramil Cruz, about his follow-up.'],
    [0, 'Inilipat po ang check-up ninyo mula Martes papuntang Huwebes, alas-diyes ng umaga, dahil may seminar po si Doktora.', 'Your check-up has been moved from Tuesday to Thursday, ten in the morning, because the doctor has a seminar.'],
    [0, 'Pakidala po ang lahat ng gamot na iniinom ninyo ngayon, pati ang resulta ng laboratoryo noong nakaraang buwan.', 'Please bring all the medicines you are taking now, and the lab results from last month.'],
    [0, 'Kung hindi po kayo makakarating, pakitawagan lang po kami bago mag-alas-singko ng hapon bukas.', 'If you can\'t come, please call us before five in the afternoon tomorrow.'],
    [0, 'Huwag po kayong mag-alala, wala na pong bayad ang paglipat ng iskedyul.', 'Don\'t worry, there is no charge for moving the schedule.'],
    [0, 'Salamat po, at magandang araw.', 'Thank you, and have a good day.']
  ],
  q: [['Bakit inilipat ang check-up?', ['may seminar si Doktora', 'may sakit si Doktora', 'sarado ang klinika'], 0, 'dahil may seminar po si Doktora.'],
      ['Kailan na ang bagong iskedyul?', ['Martes, alas-diyes ng umaga', 'Huwebes, alas-diyes ng umaga', 'Huwebes, alas-singko ng hapon'], 1, 'Huwebes, alas-diyes ng umaga. Alas-singko is the call-back deadline, not the appointment.'],
      ['What should he bring?', ['All his current medicines and last month\'s lab results', 'Only his ID', 'Payment for the new schedule'], 0, 'lahat ng gamot na iniinom ninyo ngayon, pati ang resulta ng laboratoryo.'],
      ['What should he do if he cannot come?', ['Call before 5 pm tomorrow', 'Just not show up', 'Send a text on Thursday'], 0, 'pakitawagan lang po kami bago mag-alas-singko ng hapon bukas.'],
      ['"Wala na pong bayad" means:', ['There is no charge', 'He still owes money', 'He must pay again'], 0, 'bayad = payment; wala na = there is no longer any.']],
  dictation: [3, 5]
},
{
  id: 'anunsyo-terminal', level: 'B1', kind: 'Announcement', title: 'Anunsyo sa Terminal ng Bus', titleEn: 'Bus terminal announcement',
  setting: 'A public address announcement at a bus terminal. Listen for the delay, the reason, the new gate and the option for those in a hurry.',
  speakers: ['Announcer'],
  lines: [
    [0, 'Atensyon po sa lahat ng pasahero.', 'Attention, all passengers.'],
    [0, 'Ang bus na papuntang Mariveles, na nakatakdang umalis nang alas-tres y medya, ay maaantala nang mga apatnapu\'t limang minuto.', 'The bus to Mariveles, scheduled to leave at three thirty, will be delayed by about forty-five minutes.'],
    [0, 'Ito po ay dahil sa isang aksidente sa highway malapit sa San Fernando.', 'This is because of an accident on the highway near San Fernando.'],
    [0, 'Ang mga pasaherong may tiket para sa biyaheng iyon ay maghintay na lamang po sa Gate 4, hindi na sa Gate 2.', 'Passengers with tickets for that trip should wait at Gate 4, no longer at Gate 2.'],
    [0, 'Para sa mga gustong lumipat sa mas maagang biyahe papuntang Balanga, lumapit lamang po sa ticket booth bago mag-alas-tres.', 'Those who want to switch to an earlier trip to Balanga, please go to the ticket booth before three.'],
    [0, 'Paalala rin po: huwag iwanan ang inyong bagahe nang walang bantay.', 'A reminder too: do not leave your baggage unattended.'],
    [0, 'Maraming salamat po sa inyong pang-unawa.', 'Thank you very much for your understanding.']
  ],
  q: [['Gaano katagal maaantala ang bus?', ['mga labinlimang minuto', 'mga apatnapu\'t limang minuto', 'mga isang oras at kalahati'], 1, 'apatnapu\'t lima = 45.'],
      ['Saan na maghihintay ang mga pasahero papuntang Mariveles?', ['sa Gate 2', 'sa Gate 4', 'sa ticket booth'], 1, 'sa Gate 4, hindi na sa Gate 2.'],
      ['Why is the bus late?', ['An accident on the highway near San Fernando', 'Heavy rain', 'The driver is sick'], 0, 'dahil sa isang aksidente sa highway.'],
      ['Ano ang puwedeng gawin ng nagmamadali?', ['lumipat sa mas maagang biyahe papuntang Balanga', 'sumakay ng dyip', 'magbayad nang doble'], 0, 'lumapit sa ticket booth bago mag-alas-tres.'],
      ['What does "nakatakdang umalis" mean?', ['scheduled to leave', 'has already left', 'refuses to leave'], 0, 'takda = set, scheduled.']],
  dictation: [1, 5]
},
{
  id: 'radyo-bagyo', level: 'B2', kind: 'Radio bulletin', title: 'Ulat-Panahon sa Radyo', titleEn: 'Radio weather bulletin',
  setting: 'An evening radio bulletin as a typhoon approaches Central Luzon. Listen for signal levels, who should evacuate, class suspensions and the next update. Fast, formal broadcast Tagalog.',
  speakers: ['Newscaster'],
  lines: [
    [0, 'Magandang gabi, mga kababayan. Narito ang pinakahuling ulat-panahon.', 'Good evening, fellow countrymen. Here is the latest weather report.'],
    [0, 'Bahagyang lumakas ang bagyo habang papalapit ito sa kalupaan ng Gitnang Luzon.', 'The storm has slightly strengthened as it approaches the landmass of Central Luzon.'],
    [0, 'Nakataas na ang Signal Number 2 sa Bataan, Zambales, at Pampanga, habang Signal Number 1 naman sa Metro Manila.', 'Signal Number 2 is now raised over Bataan, Zambales and Pampanga, while Metro Manila is under Signal Number 1.'],
    [0, 'Inaasahang tatama ito sa lupa bukas ng madaling-araw, kaya pinapayuhan ang mga nakatira malapit sa baybayin na lumikas na ngayong gabi.', 'It is expected to make landfall tomorrow at dawn, so those living near the coast are advised to evacuate tonight.'],
    [0, 'Walang pasok mula kindergarten hanggang senior high school sa mga lugar na may Signal Number 2. Sa Metro Manila, kindergarten lamang ang walang pasok.', 'There are no classes from kindergarten to senior high school in areas under Signal Number 2. In Metro Manila, only kindergarten has no classes.'],
    [0, 'Ipinagbabawal din muna ang paglalayag ng maliliit na bangka.', 'Small boats are also banned from sailing for now.'],
    [0, 'Ihanda ang inyong go-bag: tubig, de-lata, flashlight, gamot, at mahahalagang dokumento.', 'Prepare your go-bag: water, canned food, a flashlight, medicine and important documents.'],
    [0, 'Manatiling nakatutok para sa susunod na ulat, alas-onse mamayang gabi.', 'Stay tuned for the next report, at eleven tonight.']
  ],
  q: [['Anong signal ang nakataas sa Bataan?', ['Signal Number 1', 'Signal Number 2', 'Signal Number 3'], 1, 'Bataan, Zambales at Pampanga: Signal Number 2.'],
      ['Sino ang pinapayuhang lumikas ngayong gabi?', ['ang mga nakatira malapit sa baybayin', 'lahat ng taga-Maynila', 'ang mga estudyante'], 0, 'malapit sa baybayin = near the coast.'],
      ['In Metro Manila, who has no classes?', ['Kindergarten only', 'Kindergarten to senior high', 'Nobody'], 0, 'Sa Metro Manila, kindergarten lamang.'],
      ['"Bahagyang lumakas" means the storm…', ['slightly strengthened', 'weakened a lot', 'stayed the same'], 0, 'bahagya = slightly; lumakas = became stronger.'],
      ['When is the next update?', ['Eleven tonight', 'Tomorrow at dawn', 'In one hour'], 0, 'alas-onse mamayang gabi. Madaling-araw is the expected landfall.'],
      ['Which item is NOT in the go-bag list?', ['a radio', 'canned food', 'important documents'], 0, 'tubig, de-lata, flashlight, gamot, mahahalagang dokumento.']],
  dictation: [3, 6]
},
{
  id: 'endorsement', level: 'B2', kind: 'Shift endorsement', title: 'Endorsement sa Pagpapalit ng Shift', titleEn: 'Nurse shift endorsement', psych: true,
  setting: 'Two ward nurses hand over a new patient at 6 am. Real endorsements mix Tagalog and English (Taglish). Listen for the night\'s events, medication, vital signs and what to watch for.',
  speakers: ['Dan (night shift)', 'Kaye (morning shift)'],
  lines: [
    [0, 'Kaye, i-endorse ko na \'yung Bed 7, si Tatay na bagong admit kahapon.', 'Kaye, let me endorse Bed 7, the older man admitted yesterday.'],
    [0, 'Hindi siya nakatulog hanggang alas-dos. Pabalik-balik siya sa pinto, sinasabing may susundo raw sa kanya.', 'He didn\'t sleep until two. He kept going back and forth to the door, saying someone was coming to fetch him.'],
    [0, 'Binigyan ko siya ng PRN na haloperidol bandang alas-dos y medya, ayon sa order ni Doc.', 'I gave him PRN haloperidol around two thirty, per the doctor\'s order.'],
    [0, 'Pagkatapos noon, kumalma naman siya at nakatulog nang mga apat na oras.', 'After that he calmed down and slept for about four hours.'],
    [1, 'Kumain ba siya? At \'yung vital signs?', 'Did he eat? And the vital signs?'],
    [0, 'Kaunti lang ang kinain niya kagabi. Normal ang BP, pero medyo mataas ang pulso kaninang alas-singko, one-ten.', 'He ate very little last night. BP is normal, but his pulse was a bit high at five this morning, one-ten.'],
    [1, 'Sige, babantayan ko. May tumawag ba sa pamilya?', 'Okay, I\'ll watch it. Did anyone from the family call?'],
    [0, 'Oo, tumawag ang anak niya. Darating daw siya mamayang tanghali, dala ang mga lumang reseta.', 'Yes, his son called. He said he\'ll come at noon today, bringing the old prescriptions.'],
    [1, 'Okay. Ano pa ang dapat kong abangan?', 'Okay. What else should I watch out for?'],
    [0, 'Pakibantayan kung nanginginig siya o pinagpapawisan. Sabi ng anak, malakas daw siyang uminom bago ma-admit.', 'Please watch for shaking or sweating. The son said he drank heavily before admission.'],
    [1, 'Ah, kaya pala. I-inform ko si Doc para ma-check kung withdrawal.', 'Ah, that explains it. I\'ll inform the doctor so he can check for withdrawal.']
  ],
  q: [['Bakit hindi nakatulog ang pasyente?', ['pabalik-balik siya sa pinto at sinasabing may susundo sa kanya', 'masakit ang ulo niya', 'maingay sa ward'], 0, 'Night restlessness with a false belief: note it for the MSE.'],
      ['Ano ang ibinigay sa kanya, at kailan?', ['PRN na haloperidol, bandang alas-dos y medya', 'paracetamol, alas-singko', 'walang ibinigay'], 0, 'ayon sa order ni Doc.'],
      ['Which vital sign was abnormal?', ['Pulse 110 at 5 am', 'Blood pressure', 'Temperature'], 0, 'Normal ang BP, pero medyo mataas ang pulso.'],
      ['Kailan darating ang anak?', ['mamayang tanghali', 'kagabi', 'bukas ng umaga'], 0, 'mamayang tanghali = at noon later today.'],
      ['Why does Kaye think of withdrawal?', ['Heavy drinking before admission, plus night agitation and a fast pulse', 'He asked for alcohol', 'He has a fever'], 0, 'Agitation, insomnia and tachycardia 1 to 3 days after the last drink: rule out alcohol withdrawal and delirium. Watch tremor and sweating (CIWA-Ar).'],
      ['"Kaya pala" signals that Kaye…', ['suddenly understands the reason', 'disagrees with Dan', 'is asking a question'], 0, 'kaya pala = so that\'s why.']],
  dictation: [1, 9]
},
{
  id: 'usapan-pamilya', level: 'C1', kind: 'Conversation', title: 'Usapan ng Pamilya tungkol kay Tatay', titleEn: 'A family talks about Tatay', psych: true,
  setting: 'Two adult siblings and their mother talk at home about their father, who has not been himself since he retired. Listen for each person\'s view, the hedging, and how they decide to raise it with him.',
  speakers: ['Ate Malou', 'Jun', 'Nanay'],
  lines: [
    [0, 'Jun, napansin mo ba si Tatay? Halos isang buwan na siyang hindi lumalabas ng kwarto.', 'Jun, have you noticed Tatay? He has hardly left his room in almost a month.'],
    [1, 'Napansin ko, Ate. Pero baka pagod lang siya. Kakaretiro lang niya, e.', 'I noticed, Ate. But maybe he\'s just tired. He only just retired.'],
    [0, 'Hindi lang pagod \'yon. Hindi na siya kumakain nang maayos, at kahapon, sinabi niyang wala na raw siyang silbi.', 'That\'s not just tiredness. He isn\'t eating properly anymore, and yesterday he said he\'s of no use anymore.'],
    [1, 'Si Tatay? Ewan ko, Ate. Ayokong pag-usapan siya ng mga kapitbahay kung dadalhin natin siya sa psychiatrist.', 'Tatay? I don\'t know, Ate. I don\'t want the neighbors talking about him if we take him to a psychiatrist.'],
    [2, 'Mga anak, tama na. Hindi kahihiyan ang magpatingin.', 'Children, that\'s enough. Getting checked is no disgrace.'],
    [2, 'Noong namatay ang Lolo ninyo, ganyan din siya. Hindi niya inamin, pero ilang buwan siyang hindi nakatulog nang maayos.', 'When your Lolo died, he was like this too. He never admitted it, but for months he couldn\'t sleep properly.'],
    [0, 'Kaya nga, Nay. Ayokong maulit \'yon nang walang tumutulong sa kanya.', 'Exactly, Nay. I don\'t want that to happen again with no one helping him.'],
    [1, 'Sige na nga. Pero ako na ang kakausap sa kanya. Mas makikinig siya sa akin kaysa sa doktor.', 'Fine, then. But I\'ll be the one to talk to him. He\'ll listen to me more than to a doctor.'],
    [2, 'Basta kausapin mo siya nang mahinahon. Sabihin mo, magpapa-check-up lang tayo para sa tulog niya.', 'Just talk to him calmly. Tell him we\'re only getting a check-up for his sleep.'],
    [0, 'Sasamahan kita, Jun. Sa Sabado, pagkatapos ng misa.', 'I\'ll go with you, Jun. On Saturday, after Mass.']
  ],
  q: [['What is Jun\'s first explanation for Tatay\'s behavior?', ['He\'s just tired after retiring', 'He is physically sick', 'He is angry at the family'], 0, 'baka pagod lang siya. Kakaretiro lang niya, e.'],
      ['Ano ang ikinababahala ni Jun?', ['baka pag-usapan si Tatay ng mga kapitbahay', 'ang gastos', 'ang layo ng ospital'], 0, 'Fear of what the neighbors will say: the hiya theme from the reading "Hiya at ang Lakas ng Loob".'],
      ['Clinically, which of Tatay\'s words is the most urgent to follow up?', ['"wala na raw siyang silbi"', '"pagod lang"', '"hindi lumalabas ng kwarto"'], 0, 'Worthlessness after a loss of role: ask directly about hopelessness and suicidal thoughts.'],
      ['Bakit binanggit ni Nanay ang Lolo?', ['para ipakitang nangyari na ito dati, pagkatapos ng isang pagkawala', 'para ikumpara ang kanilang trabaho', 'dahil doktor ang Lolo'], 0, 'A past episode after bereavement: relevant history for the interview.'],
      ['How does Nanay suggest presenting the visit?', ['As a check-up for his sleep', 'As an emergency', 'Without telling him'], 0, 'Starting from a physical complaint is a common, lower-stigma route to care.'],
      ['"Sige na nga" tells you Jun…', ['agrees, a little reluctantly', 'refuses', 'is excited'], 0, 'nga after sige softens it into a reluctant "fine, then".']],
  dictation: [2, 5]
},
{
  id: 'radyo-panayam', level: 'C1', kind: 'Radio interview', title: 'Panayam sa Radyo: Bakit Ayaw Magpatingin?', titleEn: 'Radio interview: why people avoid help', psych: true,
  setting: 'A morning radio host interviews a psychiatrist. Listen for the reasons she gives, the comparison she uses, her view of faith and her advice to families.',
  speakers: ['Host', 'Dr. Lim (psychiatrist)'],
  lines: [
    [0, 'Magandang umaga, mga tagapakinig. Kasama natin ngayon si Dr. Lim, isang psychiatrist.', 'Good morning, listeners. With us today is Dr. Lim, a psychiatrist.'],
    [0, 'Doktora, bakit po kaya marami pa ring Pilipino ang ayaw magpatingin kahit hirap na hirap na sila?', 'Doctor, why do so many Filipinos still refuse to be seen even when they are really struggling?'],
    [1, 'Magandang umaga. Sa totoo lang, hindi iisa ang dahilan. Nariyan ang gastos, ang layo ng ospital, at siyempre, ang hiya.', 'Good morning. Honestly, there is no single reason. There\'s the cost, the distance to the hospital and, of course, hiya.'],
    [1, 'Marami ang nag-aakala na kapag nagpatingin ka, ibig sabihin ay mahina ka o kulang ang pananampalataya mo.', 'Many assume that if you get help, it means you are weak or your faith is lacking.'],
    [0, 'Ano po ang masasabi ninyo sa ganyang paniniwala?', 'What do you say to that belief?'],
    [1, 'Iginagalang ko ang pananampalataya ng pasyente. Sa katunayan, madalas itong nakatutulong sa paggaling.', 'I respect the patient\'s faith. In fact, it often helps recovery.'],
    [1, 'Pero ang depresyon ay hindi kakulangan sa dasal, kung paanong ang diyabetis ay hindi kakulangan sa disiplina.', 'But depression is not a lack of prayer, just as diabetes is not a lack of discipline.'],
    [0, 'Paano naman po kung ayaw talagang pumunta ng kapamilya?', 'And what if a family member really refuses to go?'],
    [1, 'Huwag muna ninyong pilitin. Makinig muna kayo, at itanong kung ano ang pinakamabigat para sa kanya.', 'Don\'t force them yet. Listen first, and ask what weighs on them most.'],
    [1, 'Pero kung may banta na sa kanyang buhay, huwag nang maghintay. Tumawag sa 1553, ang crisis hotline ng NCMH, na bukas bente-kuwatro oras.', 'But if their life is at risk, don\'t wait. Call 1553, the NCMH crisis hotline, open 24 hours.']
  ],
  q: [['Which reason does Dr. Lim NOT mention?', ['Too few doctors who speak Tagalog', 'Cost', 'Distance to the hospital'], 0, 'gastos, layo ng ospital, hiya.'],
      ['What comparison does she use?', ['Depression is not a lack of prayer, just as diabetes is not a lack of discipline', 'Depression is like a cold', 'Faith is like medicine'], 0, 'kung paanong = just as (introduces a parallel).'],
      ['What is her view of faith?', ['She respects it and says it often helps recovery', 'She tells patients to stop praying', 'She avoids the topic'], 0, 'Iginagalang ko… madalas itong nakatutulong sa paggaling.'],
      ['Ano ang payo niya kung ayaw pumunta ng kapamilya?', ['makinig muna at alamin ang pinakamabigat para sa kanya', 'pilitin agad', 'hayaan na lang'], 0, 'Huwag muna ninyong pilitin. Makinig muna kayo.'],
      ['When should the family not wait?', ['When there is a threat to the person\'s life: call 1553', 'When the person misses work', 'When the neighbors notice'], 0, 'kung may banta na sa kanyang buhay.'],
      ['"Sa totoo lang" is used to…', ['signal a frank answer', 'disagree with the host', 'change the topic'], 0, 'sa totoo lang = honestly, to tell the truth.']],
  dictation: [6, 8]
}
];
