/* Listening exercises (3.5.0): audio first, text hidden until you ask for it.
   { id, level, kind, title, titleEn, setting (English, what you are about to hear), psych?,
     speakers: [names], lines: [[speakerIdx, tagalog, english, say?]]: say = the same line respelled for the voice
     (acronyms, Dr./Dra., Doc, numbers); the screen and dictation use the tagalog, the audio uses say.
     q: [[question, [options], correctIdx, explanation]],  (same shape as READING.q)
     dictation: [lineIdx, ...] }  lines to type from the audio at the end.
   Keep each line one or two sentences: every line is one recorded clip. */
window.LISTENING = [
{
  id: 'voicemail-klinika', level: 'B1', kind: 'Voicemail', title: 'Mensahe mula sa Klinika', titleEn: 'A message from the clinic',
  setting: 'A voicemail left on a patient\'s phone by the clinic receptionist. Listen for the new day and time, what to bring, and the deadline.',
  speakers: ['Receptionist'],
  lines: [
    [0, 'Magandang hapon po. Si Joy po ito, mula sa klinika ni Dra. Reyes.', 'Good afternoon. This is Joy, from Dr. Reyes\'s clinic.', 'Magandang hapon po. Si Joy po ito, mula sa klinika ni Doktora Reyes.'],
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
    [0, 'Ang bus na papuntang Mariveles, na nakatakdang umalis nang alas-tres y medya, ay maaantala nang mga apatnapu\'t limang minuto.', 'The bus to Mariveles, scheduled to leave at three thirty, will be delayed by about forty-five minutes.', 'Ang bus na papuntang Mariveles, na nakatakdang umalis nang alas-tres i medya, ay maaantala nang mga apatnapu\'t limang minuto.'],
    [0, 'Ito po ay dahil sa isang aksidente sa highway malapit sa San Fernando.', 'This is because of an accident on the highway near San Fernando.'],
    [0, 'Ang mga pasaherong may tiket para sa biyaheng iyon ay maghintay na lamang po sa Gate 4, hindi na sa Gate 2.', 'Passengers with tickets for that trip should wait at Gate 4, no longer at Gate 2.', 'Ang mga pasaherong may tiket para sa biyaheng iyon ay maghintay na lamang po sa geyt por, hindi na sa geyt tu.'],
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
    [0, 'Kaye, i-endorse ko na \'yung Bed 7, si Tatay na bagong admit kahapon.', 'Kaye, let me endorse Bed 7, the older man admitted yesterday.', 'Kaye, i-endors ko na \'yung bed seben, si Tatay na bagong admit kahapon.'],
    [0, 'Hindi siya nakatulog hanggang alas-dos. Pabalik-balik siya sa pinto, sinasabing may susundo raw sa kanya.', 'He didn\'t sleep until two. He kept going back and forth to the door, saying someone was coming to fetch him.'],
    [0, 'Binigyan ko siya ng PRN na haloperidol bandang alas-dos y medya, ayon sa order ni Doc.', 'I gave him PRN haloperidol around two thirty, per the doctor\'s order.', 'Binigyan ko siya ng pi-ar-en na haloperidol bandang alas-dos i medya, ayon sa order ni Dok.'],
    [0, 'Pagkatapos noon, kumalma naman siya at nakatulog nang mga apat na oras.', 'After that he calmed down and slept for about four hours.'],
    [1, 'Kumain ba siya? At \'yung vital signs?', 'Did he eat? And the vital signs?'],
    [0, 'Kaunti lang ang kinain niya kagabi. Normal ang BP, pero medyo mataas ang pulso kaninang alas-singko, one-ten.', 'He ate very little last night. BP is normal, but his pulse was a bit high at five this morning, one-ten.', 'Kaunti lang ang kinain niya kagabi. Normal ang bi-pi, pero medyo mataas ang pulso kaninang alas-singko, wan-ten.'],
    [1, 'Sige, babantayan ko. May tumawag ba sa pamilya?', 'Okay, I\'ll watch it. Did anyone from the family call?'],
    [0, 'Oo, tumawag ang anak niya. Darating daw siya mamayang tanghali, dala ang mga lumang reseta.', 'Yes, his son called. He said he\'ll come at noon today, bringing the old prescriptions.'],
    [1, 'Okay. Ano pa ang dapat kong abangan?', 'Okay. What else should I watch out for?'],
    [0, 'Pakibantayan kung nanginginig siya o pinagpapawisan. Sabi ng anak, malakas daw siyang uminom bago ma-admit.', 'Please watch for shaking or sweating. The son said he drank heavily before admission.'],
    [1, 'Ah, kaya pala. I-inform ko si Doc para ma-check kung withdrawal.', 'Ah, that explains it. I\'ll inform the doctor so he can check for withdrawal.', 'Ah, kaya pala, i-inform ko si Dok para ma-tsek kung withdrawal.']
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
    [0, 'Magandang umaga, mga tagapakinig. Kasama natin ngayon si Dr. Lim, isang psychiatrist.', 'Good morning, listeners. With us today is Dr. Lim, a psychiatrist.', 'Magandang umaga, mga tagapakinig. Kasama natin ngayon si Doktora Lim, isang saykayatrist.'],
    [0, 'Doktora, bakit po kaya marami pa ring Pilipino ang ayaw magpatingin kahit hirap na hirap na sila?', 'Doctor, why do so many Filipinos still refuse to be seen even when they are really struggling?'],
    [1, 'Magandang umaga. Sa totoo lang, hindi iisa ang dahilan. Nariyan ang gastos, ang layo ng ospital, at siyempre, ang hiya.', 'Good morning. Honestly, there is no single reason. There\'s the cost, the distance to the hospital and, of course, hiya.'],
    [1, 'Marami ang nag-aakala na kapag nagpatingin ka, ibig sabihin ay mahina ka o kulang ang pananampalataya mo.', 'Many assume that if you get help, it means you are weak or your faith is lacking.'],
    [0, 'Ano po ang masasabi ninyo sa ganyang paniniwala?', 'What do you say to that belief?'],
    [1, 'Iginagalang ko ang pananampalataya ng pasyente. Sa katunayan, madalas itong nakatutulong sa paggaling.', 'I respect the patient\'s faith. In fact, it often helps recovery.'],
    [1, 'Pero ang depresyon ay hindi kakulangan sa dasal, kung paanong ang diyabetis ay hindi kakulangan sa disiplina.', 'But depression is not a lack of prayer, just as diabetes is not a lack of discipline.'],
    [0, 'Paano naman po kung ayaw talagang pumunta ng kapamilya?', 'And what if a family member really refuses to go?'],
    [1, 'Huwag muna ninyong pilitin. Makinig muna kayo, at itanong kung ano ang pinakamabigat para sa kanya.', 'Don\'t force them yet. Listen first, and ask what weighs on them most.'],
    [1, 'Pero kung may banta na sa kanyang buhay, huwag nang maghintay. Tumawag sa 1553, ang crisis hotline ng NCMH, na bukas bente-kuwatro oras.', 'But if their life is at risk, don\'t wait. Call 1553, the NCMH crisis hotline, open 24 hours.', 'Pero kung may banta na sa kanyang buhay, huwag nang maghintay. Tumawag sa wan, payb, payb, tri, ang krisis hatlayn ng en-si-em-eyts, na bukas bente-kuwatro oras.']
  ],
  q: [['Which reason does Dr. Lim NOT mention?', ['Too few doctors who speak Tagalog', 'Cost', 'Distance to the hospital'], 0, 'gastos, layo ng ospital, hiya.'],
      ['What comparison does she use?', ['Depression is not a lack of prayer, just as diabetes is not a lack of discipline', 'Depression is like a cold', 'Faith is like medicine'], 0, 'kung paanong = just as (introduces a parallel).'],
      ['What is her view of faith?', ['She respects it and says it often helps recovery', 'She tells patients to stop praying', 'She avoids the topic'], 0, 'Iginagalang ko… madalas itong nakatutulong sa paggaling.'],
      ['Ano ang payo niya kung ayaw pumunta ng kapamilya?', ['makinig muna at alamin ang pinakamabigat para sa kanya', 'pilitin agad', 'hayaan na lang'], 0, 'Huwag muna ninyong pilitin. Makinig muna kayo.'],
      ['When should the family not wait?', ['When there is a threat to the person\'s life: call 1553', 'When the person misses work', 'When the neighbors notice'], 0, 'kung may banta na sa kanyang buhay.'],
      ['"Sa totoo lang" is used to…', ['signal a frank answer', 'disagree with the host', 'change the topic'], 0, 'sa totoo lang = honestly, to tell the truth.']],
  dictation: [6, 8]
},
/* 3.6.0 */
{
  id: 'tawag-pamilya', level: 'B2', kind: 'Phone call', title: 'Tawag sa Kapatid ng Pasyente', titleEn: 'Calling the patient\'s sister', psych: true,
  setting: 'A ward resident phones the sister of a newly admitted patient to get the history from the family and set up a family meeting. Listen for when and why the medicine stopped, what changed, the risk questions and what the family should bring.',
  speakers: ['Dr. Santos (resident)', 'Lorna (sister)'],
  lines: [
    [1, 'Hello? Sino po sila?', 'Hello? Who is this?'],
    [0, 'Magandang hapon po. Si Dr. Santos po ito, ang resident na may hawak kay Boyet sa ward.', 'Good afternoon. This is Dr. Santos, the resident in charge of Boyet on the ward.', 'Magandang hapon po. Si Doktor Santos po ito, ang resident na may hawak kay Boyet sa ward.'],
    [0, 'May ilang tanong lang po ako para mas maintindihan namin ang nangyari bago siya dinala rito. May oras po ba kayo ngayon?', 'I just have a few questions so we can better understand what happened before he was brought here. Do you have time now?'],
    [1, 'Opo, Dok. Kumusta na po ba siya? Hindi po ako nakatulog kagabi kakaisip.', 'Yes, Doc. How is he? I couldn\'t sleep last night from worrying.'],
    [0, 'Mas kalmado na po siya ngayon, at kumain na siya kaninang tanghali. Kailan po ba siya huling uminom ng gamot niya?', 'He\'s calmer now, and he ate at lunch today. When did he last take his medicine?'],
    [1, 'Mga dalawang buwan na po, Dok. Sabi niya, magaling na raw siya at hindi na niya kailangan.', 'About two months ago, Doc. He said he was well and didn\'t need it anymore.'],
    [1, 'Tapos noong nakaraang linggo, halos hindi na siya natutulog. Sinasabi niyang pinili raw siya para iligtas ang mundo.', 'Then last week he hardly slept at all. He kept saying he had been chosen to save the world.'],
    [0, 'Salamat po at sinabi ninyo iyan. May nasaktan po ba siya, o may sinabi ba siyang gusto niyang saktan ang sarili niya?', 'Thank you for telling me. Did he hurt anyone, or did he say he wanted to hurt himself?'],
    [1, 'Wala naman po. Pero minsan, sinisigawan niya si Nanay kapag pinipigilan siyang lumabas nang gabi.', 'No. But sometimes he shouts at Nanay when she stops him from going out at night.'],
    [0, 'Naiintindihan ko po. Puwede po ba kayong pumunta sa Huwebes, alas-dos, para sa family meeting?', 'I understand. Can you come on Thursday at two for a family meeting?'],
    [0, 'Pakidala po ang mga natitirang gamot niya at ang mga lumang reseta, para makita namin kung ano ang naging epektibo.', 'Please bring his leftover medicines and old prescriptions, so we can see what has worked.'],
    [1, 'Sige po, Dok. Isasama ko na rin po si Nanay. Salamat po talaga.', 'Okay, Doc. I\'ll bring Nanay along too. Thank you so much.']
  ],
  q: [['Gaano katagal nang hindi umiinom ng gamot si Boyet?', ['mga dalawang buwan', 'mga dalawang linggo', 'mga dalawang taon'], 0, 'Mga dalawang buwan na po.'],
      ['Why did he stop his medicine?', ['He said he was already well and did not need it', 'Side effects', 'He ran out of money'], 0, 'Feeling well and stopping is a common route to relapse: note it as limited insight and plan education.'],
      ['Which detail points to grandiosity?', ['"pinili raw siya para iligtas ang mundo"', '"halos hindi na natutulog"', '"sinisigawan si Nanay"'], 0, 'A grandiose belief; with little sleep, think of mania or a psychotic relapse.'],
      ['Why does Dr. Santos ask whether he hurt anyone or wanted to hurt himself?', ['To assess risk to others and to himself', 'To report him to the police', 'Out of curiosity'], 0, 'Every collateral history includes violence and self-harm questions.'],
      ['Ano ang ipinakiusap ng doktor na dalhin?', ['ang natitirang gamot at mga lumang reseta', 'damit at pagkain', 'pambayad sa ospital'], 0, 'para makita kung ano ang naging epektibo.'],
      ['"Kakaisip" tells you Lorna could not sleep because she…', ['kept thinking and worrying', 'was sick', 'was working late'], 0, 'ka- + repeated root (kakaisip) = from doing something over and over.']],
  dictation: [5, 10]
},
{
  id: 'triage-opd', level: 'B1', kind: 'OPD triage', title: 'Sa Triage ng OPD', titleEn: 'At the OPD triage desk', psych: true,
  setting: 'A triage nurse in the psychiatry OPD sees a 19-year-old and her mother. Listen for the complaint, the routine questions, one answer that changes the plan, and what the nurse does next.',
  speakers: ['Triage nurse', 'Nanay', 'Ella'],
  lines: [
    [0, 'Magandang umaga po. Ano po ang ipapakonsulta natin ngayon?', 'Good morning. What brings you in for a consult today?'],
    [1, 'Itong anak ko po, si Ella. Dalawang linggo na siyang halos hindi kumakain at laging umiiyak.', 'It\'s my daughter, Ella. For two weeks she has hardly eaten and cries all the time.'],
    [0, 'Sige po. Ella, ilang taon ka na?', 'All right. Ella, how old are you?'],
    [2, 'Labinsiyam po.', 'Nineteen.'],
    [0, 'Kukunin ko muna ang BP mo at ang timbang mo, ha.', 'I\'ll take your blood pressure and weight first, okay?', 'Kukunin ko muna ang bi-pi mo at ang timbang mo, ha.'],
    [0, 'May iniinom ka bang gamot ngayon, o may allergy ka ba sa gamot?', 'Are you taking any medicine now, or are you allergic to any medicine?'],
    [2, 'Wala po.', 'No.'],
    [0, 'Itinatanong ko ito sa lahat ng pasyente. Nitong mga nakaraang araw, may naisip ka bang saktan ang sarili mo?', 'I ask every patient this. In the past few days, have you thought of hurting yourself?'],
    [2, '(tumingin sa sahig) ...Minsan po, gusto ko na lang matulog at hindi na magising.', '(looks at the floor) ...Sometimes I just want to sleep and never wake up.'],
    [0, 'Salamat at sinabi mo sa akin. Tama ang ginawa mo.', 'Thank you for telling me. You did the right thing.'],
    [0, 'Nanay, uunahin po namin si Ella. Dito muna po kayo sa tabi ng nurse station habang tinatawag ko si Doktora.', 'Nanay, we will see Ella first. Please stay here by the nurse station while I call the doctor.'],
    [1, 'Diyos ko... Opo, opo. Hindi ko po alam na ganoon na pala ang nararamdaman niya.', 'Oh my God... Yes, yes. I didn\'t know that was how she was feeling.']
  ],
  q: [['Gaano katagal nang halos hindi kumakain si Ella?', ['dalawang linggo', 'dalawang araw', 'dalawang buwan'], 0, 'Dalawang linggo na.'],
      ['Ilang taon na si Ella?', ['labinsiyam', 'labimpito', 'siyam'], 0, 'Labinsiyam = 19.'],
      ['Why does the nurse say "Itinatanong ko ito sa lahat ng pasyente"?', ['To make a sensitive question routine so Ella does not feel singled out', 'Because she suspects Ella', 'To fill in a form quickly'], 0, 'Normalizing makes an honest answer easier.'],
      ['What does Ella\'s answer show?', ['A wish to be dead, which needs a full suicide assessment now', 'She is only sleepy', 'Nothing serious'], 0, 'Passive death wishes still call for questions on plan, intent, means and past attempts.'],
      ['Ano ang ginawa ng nurse pagkatapos?', ['inuna si Ella at tinawag ang doktor', 'pinauwi sila', 'binigyan sila ng numero at pinaghintay'], 0, 'uunahin po namin si Ella.'],
      ['"Diyos ko" here expresses…', ['shock and distress', 'anger at Ella', 'thanks'], 0, 'An exclamation of alarm; the next line shows she had not known.']],
  dictation: [1, 10]
},
{
  id: 'pulong-barangay', level: 'C1', kind: 'Community meeting', title: 'Asembleya sa Barangay', titleEn: 'Barangay assembly',
  setting: 'At the monthly barangay assembly, the barangay captain announces a community mental health program, a resident raises a worry and the rural health unit nurse answers. Listen for the schedule, the objection and how it is answered.',
  speakers: ['Kapitana Rosales', 'Mang Tony (resident)', 'Nurse Gina (RHU)'],
  lines: [
    [0, 'Magandang gabi po sa ating lahat. Salamat sa pagdalo sa ating buwanang asembleya.', 'Good evening, everyone. Thank you for coming to our monthly assembly.'],
    [0, 'Iisa lang po ang pangunahing paksa natin ngayong gabi: ang bagong programa para sa kalusugang pangkaisipan dito sa barangay.', 'We have only one main topic tonight: the new mental health program here in the barangay.'],
    [0, 'Simula sa susunod na buwan, may libreng konsulta tuwing ikalawang Martes ng buwan sa ating health center, kasama ang isang doktor mula sa ospital ng probinsya.', 'Starting next month, there will be free consultations every second Tuesday of the month at our health center, with a doctor from the provincial hospital.'],
    [0, 'Bukod diyan, sinanay na ang ating mga barangay health worker para bumisita sa mga pamilyang humihingi ng tulong.', 'Besides that, our barangay health workers have been trained to visit families who ask for help.'],
    [1, 'Kapitana, may tanong lang po. Hindi po ba mapapahiya ang pamilya kapag nakita ng kapitbahay na binibisita sila ng BHW?', 'Captain, just a question. Won\'t the family be embarrassed when the neighbors see the health worker visiting them?', 'Kapitana, may tanong lang po. Hindi po ba mapapahiya ang pamilya kapag nakita ng kapitbahay na binibisita sila ng bi-eyts-dabol-yu?'],
    [0, 'Magandang tanong iyan, Mang Tony. Si Nurse Gina na po ang sasagot.', 'That\'s a good question, Mang Tony. Nurse Gina will answer.'],
    [2, 'Salamat po. Ang pagbisita po ng BHW ay katulad lang ng pagbisita sa mga buntis o sa may altapresyon. Walang nakasulat sa labas kung ano ang dahilan.', 'Thank you. A health worker\'s visit is just like the visits to pregnant women or people with high blood pressure. Nothing outside says what the reason is.', 'Salamat po. Ang pagbisita po ng bi-eyts-dabol-yu ay katulad lang ng pagbisita sa mga buntis o sa may altapresyon. Walang nakasulat sa labas kung ano ang dahilan.'],
    [2, 'At kumpidensyal po ang lahat ng mapag-uusapan, ayon sa batas.', 'And everything discussed is confidential, by law.'],
    [1, 'E, paano po kung ayaw talaga ng pasyente?', 'Well, what if the patient really doesn\'t want it?'],
    [2, 'Hindi po namin pipilitin ang taong may kakayahang magdesisyon. Pero kung may panganib sa buhay niya o sa iba, tutulong po kami agad at kakausapin ang pamilya.', 'We won\'t force a person who is able to decide. But if there is danger to their life or to others, we will help right away and talk to the family.'],
    [0, 'O, siya. Ipapaskil bukas sa labas ng barangay hall ang listahan ng mga BHW at ang kanilang mga numero.', 'All right, then. The list of health workers and their numbers will be posted outside the barangay hall tomorrow.', 'O, siya. Ipapaskil bukas sa labas ng barangay hall ang listahan ng mga bi-eyts-dabol-yu at ang kanilang mga numero.']
  ],
  q: [['Kailan ang libreng konsulta?', ['tuwing ikalawang Martes ng buwan', 'tuwing Lunes', 'isang beses sa isang taon'], 0, 'tuwing ikalawang Martes ng buwan.'],
      ['Who will hold the consultations?', ['A doctor from the provincial hospital', 'The barangay captain', 'A priest'], 0, 'kasama ang isang doktor mula sa ospital ng probinsya.'],
      ['What is Mang Tony worried about?', ['That families will be shamed when neighbors see the visits', 'The cost', 'The distance to the health center'], 0, 'mapapahiya ang pamilya: the hiya theme again.'],
      ['How does Nurse Gina answer that worry?', ['She compares the visits to routine visits for pregnancy and high blood pressure, and says nothing shows the reason', 'She says the visits will be at night', 'She says neighbors will not notice'], 0, 'Folding mental health into ordinary home visits lowers stigma.'],
      ['Ayon kay Nurse Gina, kailan sila kikilos kahit ayaw ng pasyente?', ['kung may panganib sa buhay niya o sa iba', 'kapag hiniling ng kapitbahay', 'palagi'], 0, 'Respect for capacity, with a safety exception.'],
      ['"O, siya" at the end signals that the captain is…', ['wrapping up and moving on', 'angry', 'asking a question'], 0, 'O, siya = all right then; used to close a topic.']],
  dictation: [3, 9]
}
];
