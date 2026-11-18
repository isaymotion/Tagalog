/* Lesson extras part 2 (3.14.0). Draft for review. Shape: see js/views.js. Ids are lesson ids. */
window.LESSON_EXTRA = Object.assign(window.LESSON_EXTRA || {}, {
  'focus': {
    mistakes: [
      ['Ininom mo ba ng gamot?', 'Ininom mo ba ang gamot?', 'Ininom is object focus, so the medicine is the topic and needs ang, not ng.'],
      ['Sino ang niluto ng adobo?', 'Sino ang nagluto ng adobo?', 'Sino here asks about the doer, so the verb must be actor focus. Niluto would make the dish the topic.'],
      ['Uminom ko ang gamot.', 'Ininom ko ang gamot.', 'Ko is the ng-form doer, which goes with object focus ininom. With uminom the doer would be ako.']
    ],
    more: [
      ['Sino po ang nagbantay sa inyo kagabi?', 'Who stayed with you last night?'],
      ['Dinala ng anak niya ang mga gamot niya.', 'His child brought his medicines.'],
      ['Ano po ang kinain ninyo kaninang umaga?', 'What did you eat this morning?'],
      ['Binili ni Ana ang pulang damit.', 'Ana bought the red dress.'],
      ['Nagluto si Mang Tonyo ng sinigang para sa amin.', 'Mang Tonyo cooked sinigang for us.'],
      ['Sinulatan ni Ben ang lola niya.', 'Ben wrote to his grandmother.']
    ],
    quiz: [
      ['Which marker fits? "Ininom ____ pasyente ang gamot."', ['ng', 'ang', 'sa'], 0, 'With object focus ininom, the doer takes ng and the medicine takes ang.'],
      ['"Who cooked the rice?"', ['Sino ang niluto ng kanin?', 'Sino ang nagluto ng kanin?', 'Ano ang nagluto ng kanin?'], 1, 'Asking about the doer, so actor focus nagluto, and sino for a person.'],
      ['In "Kinain ng aso ang tinapay", what is the topic?', ['the dog', 'nobody', 'the bread'], 2, 'Ang marks the topic: ang tinapay. The eater, ng aso, is not the topic.'],
      ['Which sentence is correct?', ['Binili ko ang gamot.', 'Bumili ko ang gamot.', 'Binili ako ang gamot.'], 0, 'Object focus binili takes a ng-form doer (ko) and an ang topic (ang gamot).'],
      ['At triage a mother says "Kinagat ng aso ang anak ko." Whose wound do you check?', ['the dog\'s', 'her child\'s', 'the mother\'s'], 1, 'Ang anak ko is the topic of object focus kinagat: the child was bitten; ng aso is the biter.'],
      ['Which affix puts the place or person reached in the ang slot?', ['-in', '-um-', '-an'], 2, '-an is locative focus, as in sinulatan (was written to).']
    ]
  },
  'aspect': {
    mistakes: [
      ['Kakain ako ng isda kahapon.', 'Kumain ako ng isda kahapon.', 'Kahapon is finished time, so use the completed form kumain, not the contemplated kakain.'],
      ['Nagluto ako ng adobo bukas.', 'Magluluto ako ng adobo bukas.', 'Bukas is not yet started, so use the contemplated form magluluto.'],
      ['Kukumain ako mamaya.', 'Kakain ako mamaya.', 'The contemplated form of an -um- verb drops -um- and only doubles the first syllable: kakain.']
    ],
    more: [
      ['Umiinom pa po ba kayo ng kape gabi-gabi?', 'Do you still drink coffee every night?'],
      ['Babalik po ang doktor mamayang hapon.', 'The doctor will come back this afternoon.'],
      ['Nagising po siya nang alas-kuwatro kaninang madaling-araw.', 'He woke up at four this morning.'],
      ['Naglalaba si Aling Rosa tuwing Sabado.', 'Aling Rosa does the laundry every Saturday.'],
      ['Pupunta kami sa palengke mamaya.', 'We will go to the market later.'],
      ['Nagbasa ako ng diyaryo kaninang umaga.', 'I read the newspaper this morning.']
    ],
    quiz: [
      ['"She is cooking right now":', ['Nagluto siya ngayon.', 'Nagluluto siya ngayon.', 'Magluluto siya ngayon.'], 1, 'Started and not finished: incompleted nagluluto.'],
      ['Contemplated of "inom" (-um-):', ['iinom', 'uminom', 'umiinom'], 0, 'No -um-, just the doubled first syllable: i-inom.'],
      ['"Kinakain" is:', ['completed', 'contemplated', 'incompleted'], 2, '-in- shows it has started; the doubled ka shows it is not finished.'],
      ['Which sentence is correct?', ['Aalis ako kahapon.', 'Umalis ako kahapon.', 'Umaalis ako kahapon.'], 1, 'Kahapon is past and finished, so completed umalis.'],
      ['A patient says "Umiinom ako ng alak." What does the aspect tell you?', ['It is a habit that still goes on', 'He drank once and stopped', 'He plans to start drinking'], 0, 'Incompleted aspect is used for habits, so ask how often and how much.'],
      ['"____ ang doktor bukas." (The doctor will come tomorrow.)', ['Dumating', 'Dumarating', 'Darating'], 2, 'Not yet started: contemplated darating.']
    ]
  },
  'panlapi': {
    mistakes: [
      ['Inomin mo ang tubig.', 'Inumin mo ang tubig.', 'A final o becomes u before a suffix: inom + -in is inumin.'],
      ['Sabiin mo sa nars.', 'Sabihin mo sa nars.', 'After a vowel the suffix -in becomes -hin: sabi + -in is sabihin.'],
      ['Patawadin mo ako.', 'Patawarin mo ako.', 'A d between vowels becomes r: pa + tawad + -in is patawarin.']
    ],
    more: [
      ['Tinulungan ng nars ang pasyenteng maligo.', 'The nurse helped the patient take a bath.'],
      ['Pinag-usapan po namin ng pamilya ninyo ang plano.', 'We discussed the plan with your family.'],
      ['Nakakatakot po ba ang mga naririnig ninyo?', 'Are the things you hear frightening?'],
      ['Buksan mo nga ang bintana.', 'Please open the window.'],
      ['Kumakanta si Liza habang naglilinis ng bahay.', 'Liza sings while she cleans the house.'],
      ['Hugasan mo muna ang mga plato.', 'Wash the plates first.']
    ],
    quiz: [
      ['What kind of affix is "mag-" in "magluto"?', ['unlapi', 'gitlapi', 'hulapi'], 0, 'Mag- comes before the root luto, so it is a prefix.'],
      ['The root of "binigyan" is:', ['bigyan', 'bigay', 'bini'], 1, 'B-in-igy-an: -in- and -an around bigay, which loses its a before the suffix.'],
      ['Build: sabi + -in', ['sabiin', 'sabin', 'sabihin'], 2, 'The root ends in a vowel, so the suffix is -hin.'],
      ['"Pinagsabihan" is:', ['laguhan', 'kabilaan', 'unlapi only'], 0, 'P-in-ag-sabi-han: pag- before, -in- inside, -han after.'],
      ['Completed object focus of "luto":', ['linuto', 'niluto', 'lutoin'], 1, 'Roots starting with l take ni- instead of -in-.'],
      ['Which sentence says the person feels the fear himself?', ['Nakakatakot ang boses.', 'Takot ang boses.', 'Natatakot ako.'], 2, 'Na- is feeling it; nakaka- describes what causes the fear.']
    ]
  },
  'ay-inversion': {
    mistakes: [
      ['Bata ay naglalaro sa labas.', 'Ang bata ay naglalaro sa labas.', 'The topic keeps its marker ang when it moves in front of ay.'],
      ['Ang Ana ay nars.', 'Si Ana ay nars.', 'A personal name takes si, not ang, even in front of ay.'],
      ['Ang doktor\'y darating.', 'Ang doktor ay darating.', 'The short form \'y is used only after a vowel; doktor ends in r.']
    ],
    more: [
      ['Ang mga bisita ay maaaring pumasok mula alas-dos hanggang alas-singko ng hapon.', 'Visitors may come in from two to five in the afternoon.'],
      ['Ang pasyente ay binigyan ng gamot kaninang umaga.', 'The patient was given medicine this morning.'],
      ['Ako po\'y nagpapasalamat sa tulong ninyo.', 'I am grateful for your help.'],
      ['Ang Pilipinas ay binubuo ng maraming isla.', 'The Philippines is made up of many islands.'],
      ['Si Lola Rosa ay ipinanganak sa Bataan.', 'Grandma Rosa was born in Bataan.'],
      ['Tayo\'y magdasal bago kumain.', 'Let us pray before we eat.']
    ],
    quiz: [
      ['"Darating ang bus mamaya" in ay-order:', ['Ang bus ay darating mamaya.', 'Darating ay ang bus mamaya.', 'Bus ay darating ang mamaya.'], 0, 'The ang-phrase moves to the front, then ay, then the verb.'],
      ['"Siya ay masaya" in its short form:', ['Siya masaya.', 'Siya\'y masaya.', 'Siy\'ay masaya.'], 1, 'Siya ends in a vowel, so ay shortens to \'y.'],
      ['Which sentence is correct?', ['Ang Ben ay doktor.', 'Ben ay doktor.', 'Si Ben ay doktor.'], 2, 'A name keeps si before ay.'],
      ['"Ang gamot ay iniinom tuwing umaga." In everyday order:', ['Iniinom ang gamot tuwing umaga.', 'Ang iniinom ang gamot tuwing umaga.', 'Gamot iniinom tuwing umaga.'], 0, 'Verb first, then the ang-phrase; the meaning is the same.'],
      ['A consent form says "Ang pasyente ay pumapayag sa gamutan." What does it state?', ['The patient refuses treatment', 'The patient agrees to the treatment', 'The patient asked for a doctor'], 1, 'Pumapayag = agrees; gamutan = treatment.'],
      ['Where are you most likely to meet ay-order?', ['A quick chat with a patient', 'A text to a friend', 'A written hospital notice'], 2, 'Ay-order belongs to writing, notices and speeches.']
    ]
  },
  'ability': {
    mistakes: [
      ['Hindi siya makaaral dahil sa sakit.', 'Hindi siya makapag-aral dahil sa sakit.', 'A verb that normally takes mag- uses makapag- for "able to": mag-aral becomes makapag-aral.'],
      ['Nakita ako ang sugat.', 'Nakita ko ang sugat.', 'Nakita is object focus: the one who sees takes ko and the thing seen takes ang.'],
      ['Nakatulog ko nang maayos.', 'Nakatulog ako nang maayos.', 'Maka- is actor focus, so the sleeper takes ako, not ko.']
    ],
    more: [
      ['Nakakalakad na po ba kayo nang mag-isa?', 'Can you walk on your own now?'],
      ['Hindi ko po naintindihan ang sinabi ng doktor.', 'I did not understand what the doctor said.'],
      ['Naaalala po ba ninyo kung paano kayo nakarating dito?', 'Do you remember how you got here?'],
      ['Nakabili ka ba ng tinapay kanina?', 'Were you able to buy bread earlier?'],
      ['Hindi ako makapagluto ngayon kasi walang gas.', 'I cannot cook today because there is no gas.'],
      ['Nakita ko si Carlo sa palengke kahapon.', 'I saw Carlo at the market yesterday.']
    ],
    quiz: [
      ['"I was able to sleep."', ['Nakatulog ako.', 'Natulog ako.', 'Makakatulog ako.'], 0, 'Completed maka- form: nakatulog. Natulog only says "I slept"; makakatulog is future.'],
      ['"He can no longer study." "Hindi na siya ____."', ['makaaral', 'makapag-aral', 'mag-aral'], 1, 'Mag-aral is a mag- verb, so "able to" is makapag-aral.'],
      ['Which sentence says it happened by accident?', ['Sinira ko ang upuan.', 'Sisirain ko ang upuan.', 'Nasira ko ang upuan.'], 2, 'The ma- form (nasira) marks an act that was not meant.'],
      ['"Nakikita ko siya." means', ['I see him.', 'I will look for him.', 'I looked at him on purpose.'], 0, 'Seeing comes to you, so it uses the ma- form; nakikita is ongoing.'],
      ['A patient says "Hindi ako makakain." What is she telling you?', ['She refuses to eat on principle', 'She is unable to eat', 'She has already eaten'], 1, 'Makakain = able to eat; with hindi it means she cannot. Ask why.'],
      ['A father says "Nasaktan ko ang anak ko." What should you do?', ['Assume it was deliberate', 'Assume it was an accident', 'Ask whether it was on purpose'], 2, 'Nasaktan hints that it was not meant but does not settle it. Ask: Sinadya po ba ninyo?']
    ]
  },
  'causative': {
    mistakes: [
      ['Nagpatingin ako ang doktor.', 'Nagpatingin ako sa doktor.', 'With magpa- the person who does the action for you takes sa.'],
      ['Pinakain ako ang bata.', 'Pinakain ko ang bata.', 'Pinakain is pa- -in: the one who feeds takes ko and the child who is fed takes ang.'],
      ['Nagpagupit ko sa barbero.', 'Nagpagupit ako sa barbero.', 'Magpa- is actor focus, so the person who gets the haircut takes ako.']
    ],
    more: [
      ['Nagpakuha na po ba kayo ng dugo kanina?', 'Did you have your blood drawn earlier?'],
      ['Pinainom na po siya ng anak niya ng gamot.', 'His child has already given him his medicine.'],
      ['Ipakita po ninyo sa nars ang sugat.', 'Please show the wound to the nurse.'],
      ['Nagpagawa si Mang Tonyo ng bagong bubong.', 'Mang Tonyo had a new roof made.'],
      ['Pinaupo ni Ana ang lola niya sa tabi ng bintana.', 'Ana had her grandmother sit by the window.'],
      ['Pasabay po hanggang sa kanto.', 'May I ride along to the corner, please?']
    ],
    quiz: [
      ['"I had my hair cut."', ['Nagpagupit ako.', 'Gumupit ako.', 'Ginupit ko.'], 0, 'Magpa- = have something done for yourself.'],
      ['"Pinauwi siya." means', ['He went home on his own.', 'He was sent home.', 'He will go home.'], 1, 'Pa- -in: someone else let or made him go home.'],
      ['"____ mo sa akin ang resulta." (Show me the result.)', ['Nagpakita', 'Pinakita', 'Ipakita'], 2, 'A command with ipa-: the thing shown, ang resulta, is the topic.'],
      ['Which sentence is correct?', ['Nagpabili ako ng tinapay kay Ben.', 'Nagpabili ko ng tinapay kay Ben.', 'Nagpabili ako ang tinapay kay Ben.'], 0, 'Magpa- takes an ang-form doer (ako), ng for the thing and kay for the person who buys.'],
      ['A mother says "Pinapainom ko siya ng gamot gabi-gabi." Who gives the medicine?', ['The patient himself', 'The mother', 'The nurse'], 1, 'Ko is the one who causes the drinking; siya is the one who swallows it.'],
      ['A patient says "Nagpahilot muna ako bago pumunta rito." What does it tell you?', ['He gave someone a massage', 'He refused any treatment', 'He had a massage treatment before coming'], 2, 'Magpa- shows he chose to have someone treat him; ask who and what was done.']
    ]
  },
  'focus-an-i': {
    mistakes: [
      ['Binigyan ko siya ang gamot.', 'Binigyan ko siya ng gamot.', 'With binigyan the receiver (siya) is the topic, so the thing given takes ng.'],
      ['Pinunta ko ang lola ko kahapon.', 'Pinuntahan ko ang lola ko kahapon.', 'Punta takes -an for the person or place you go to: pinuntahan.'],
      ['Nagluto ko siya ng adobo.', 'Ipinagluto ko siya ng adobo.', 'With ko as the doer and siya as the one cooked for, the verb must be ipag-: ipinagluto.']
    ],
    more: [
      ['Tinurukan na po ba kayo ng nars kanina?', 'Did the nurse give you an injection earlier?'],
      ['Ikukuha ko po kayo ng tubig.', 'I will get you some water.'],
      ['Lagyan po natin ng gasa ang sugat.', 'Let us put gauze on the wound.'],
      ['Ipagtimpla mo nga ng kape ang lolo mo.', 'Please make your grandfather some coffee.'],
      ['Ipinambayad ko sa kuryente ang suweldo ko.', 'I used my salary to pay for the electricity.'],
      ['Sinabihan ko si Ben na umuwi nang maaga.', 'I told Ben to go home early.']
    ],
    quiz: [
      ['"I will cook for you."', ['Ipagluluto kita.', 'Lulutuin kita.', 'Magluluto ka.'], 0, 'Ipag- puts the one cooked for in focus. Lulutuin kita would mean "I will cook you".'],
      ['"Pinuntahan namin si Lola." What is the topic?', ['namin, the ones who went', 'si Lola, the person visited', 'the trip itself'], 1, 'With -an the ang-phrase is the person or place reached.'],
      ['Which marker fits? "Binigyan ko ____ bata ng pagkain."', ['ng', 'sa', 'ang'], 2, 'The receiver is the topic of binigyan, so it takes ang.'],
      ['"Hugasan mo ang sugat." The topic, ang sugat, is', ['the place the washing reaches', 'the one who washes', 'the water used'], 0, '-an puts the surface or place acted on in the ang slot.'],
      ['A patient says "Sinigawan ako ng kapatid ko." Who did the shouting?', ['The patient', 'The sibling', 'Both of them'], 1, 'Ako is the one shouted at (-an); ng kapatid ko is the doer.'],
      ['"Ikinuha ko siya ng tubig." means', ['He got water for me.', 'I took the water from him.', 'I got water for him.'], 2, 'I- puts the one who benefits (siya) in focus; ko is the doer.']
    ]
  },
  'nominalising': {
    mistakes: [
      ['Kumusta ang pag-aral mo?', 'Kumusta ang pag-aaral mo?', 'Mag-aral is a mag- verb, so its noun doubles the first syllable of the root: pag-aaral.'],
      ['Kumusta ang natutulog mo?', 'Kumusta ang pagtulog mo?', 'After kumusta ang you need a noun, pagtulog (your sleep), not a verb form.'],
      ['Ramdam ko ang kalungkot niya.', 'Ramdam ko ang kalungkutan niya.', 'The state noun needs both parts, ka- and -an: kalungkutan.']
    ],
    more: [
      ['Kumusta po ang pagdumi ninyo?', 'How are your bowel movements?'],
      ['Lumala ang pagkabalisa niya mula nang mawalan siya ng trabaho.', 'His anxiety got worse after he lost his job.'],
      ['Nasaan po ang hintayan ng mga bantay?', 'Where is the waiting area for the watchers?'],
      ['Mahilig sa pagluluto si Aling Rosa.', 'Aling Rosa loves cooking.'],
      ['Pagkauwi ko, natulog agad ako.', 'As soon as I got home, I went straight to sleep.'],
      ['Ramdam namin ang katahimikan sa bundok.', 'We felt the stillness of the mountain.']
    ],
    quiz: [
      ['The noun "drinking, taking" from uminom', ['pag-inom', 'pag-iinom', 'kainuman'], 0, 'From an -um- verb: pag- + root.'],
      ['The noun "working" from magtrabaho', ['pagtrabahuhan', 'pagtatrabaho', 'katrabahuhan'], 1, 'From a mag- verb the first syllable of the root is doubled.'],
      ['"Kalusugan" is', ['healthy', 'to heal', 'health'], 2, 'Ka- -an makes the quality or state.'],
      ['"Pagkagising niya, umiyak siya." means', ['As soon as he woke up, he cried.', 'Before he woke up, he cried.', 'He cried in his sleep.'], 0, 'Pagka- + root = right after.'],
      ['You want a quick open question about appetite. Which fits?', ['Kumain ka?', 'Kumusta po ang pagkain ninyo?', 'Kakain po ba kayo?'], 1, 'Kumusta ang + a pag- noun is an open question; the others ask yes or no.'],
      ['A wife says "Lumala ang pag-inom niya ng alak." What got worse?', ['His appetite', 'His sleep', 'His drinking'], 2, 'Pag-inom ng alak = the drinking of alcohol.']
    ]
  },
  'recent-past': {
    mistakes: [
      ['Kakaligo ako lang.', 'Kakaligo ko lang.', 'With the just-done form the doer takes ko, not ako.'],
      ['Kakauminom ko lang ng tubig.', 'Kakainom ko lang ng tubig.', 'Kaka- goes on the bare root; the -um- of uminom drops.'],
      ['Kakaalis lang ang doktor.', 'Kakaalis lang ng doktor.', 'This form has no topic, so the doer takes ng, not ang.']
    ],
    more: [
      ['Kakainom lang po niya ng gamot bago kayo dumating.', 'He took his medicine just before you arrived.'],
      ['Kararating lang po ng resulta ng dugo ninyo.', 'Your blood test result has just come in.'],
      ['Kalalabas lang po ng anak ninyo para bumili ng pagkain.', 'Your child has just stepped out to buy food.'],
      ['Kakaluto lang ni Aling Rosa ng sinaing.', 'Aling Rosa has just cooked the rice.'],
      ['Kakaalis lang ng bus papuntang Maynila.', 'The bus to Manila has just left.'],
      ['Kakatawag ko lang kay Ben.', 'I just called Ben.']
    ],
    quiz: [
      ['"She just arrived." "Kararating lang ____."', ['niya', 'siya', 'sa kanya'], 0, 'The doer takes the ng form: niya.'],
      ['"Kakaligo ko lang." means', ['I will take a bath.', 'I just took a bath.', 'I am taking a bath.'], 1, 'Kaka- + root = only just done.'],
      ['Which sentence is correct?', ['Kakaalis ang bus lang.', 'Kakaalis lang ang bus.', 'Kakaalis lang ng bus.'], 2, 'Lang follows the verb, and the doer takes ng.'],
      ['The textbook form of "kakatulog" is:', ['katutulog', 'natulog', 'katulog'], 0, 'Ka- + the doubled first syllable of tulog.'],
      ['A nurse says "Kakatulog lang po niya." The visit is not urgent. What do you do?', ['Wake him now for a long interview', 'Let him rest and come back later', 'Chart that he slept all night'], 1, 'He has only just fallen asleep; it says nothing about the whole night.'],
      ['A daughter says "Kapapanganak lang ng ate ko, at hindi na siya natutulog." Why does the timing matter?', ['It happened years ago', 'It shows the baby is sick', 'It points to the weeks right after birth'], 2, 'Kapapanganak lang places the change in the postpartum period. Ask when exactly.']
    ]
  },
  'social-verbs': {
    mistakes: [
      ['Nakipagkita ako ng kaibigan ko.', 'Nakipagkita ako sa kaibigan ko.', 'The partner of makipag- takes sa (or kay for a name), not ng.'],
      ['Nagsigawan ako sa kapatid ko.', 'Nagsigawan kami ng kapatid ko.', 'Mag- -an needs a plural doer; kami ng kapatid ko names both people.'],
      ['Nakipag-away ko sa kapatid ko.', 'Nakipag-away ako sa kapatid ko.', 'These verbs are actor focus, so the doer takes ako, not ko.']
    ],
    more: [
      ['Nakikipaglaro pa po ba siya sa ibang bata?', 'Does he still play with other children?'],
      ['Nagkakasundo po ba kayo ng asawa ninyo?', 'Do you and your spouse get along?'],
      ['Makikiupo po muna kami rito habang hinihintay ang doktor.', 'May we sit here for a while as we wait for the doctor?'],
      ['Nakisabay ako kay Carlo pauwi.', 'I got a ride home with Carlo.'],
      ['Nagtulungan kami sa paglilinis ng bakuran.', 'We helped one another clean the yard.'],
      ['Makikipagkita ako kay Ana bukas ng hapon.', 'I am meeting up with Ana tomorrow afternoon.']
    ],
    quiz: [
      ['Ongoing form of makisakay:', ['nakikisakay', 'nakisakay', 'makikisakay'], 0, 'Na- plus the doubled ki- = ongoing.'],
      ['"Nagyayakapan sila." means', ['They hugged someone else.', 'They are hugging each other.', 'One of them is hugging.'], 1, 'Mag- -an = to each other; the doubled ya marks ongoing.'],
      ['"Gusto ko pong makipagkita ____ Liza."', ['si', 'ni', 'kay'], 2, 'The partner of makipag- takes kay when it is a name.'],
      ['Which sentence is correct?', ['Nagtulungan ang magkakapatid.', 'Nagtulungan si Ben.', 'Nakipagtulungan ang magkakapatid ng kapitbahay.'], 0, 'Mag- -an needs a plural doer; a partner would take sa, not ng.'],
      ['A father says "Hindi na siya nakikipag-usap sa amin." What is he describing?', ['A loud fight', 'Withdrawal from the family', 'A request to see a doctor'], 1, 'Nakikipag-usap = talks with; hindi na = no longer. Ask since when.'],
      ['A wife says "Nagkagalit kami ng biyenan ko." What happened?', ['She hit her mother-in-law', 'Her mother-in-law moved in', 'She and her mother-in-law fell out'], 2, 'Magka- + galit = came to be angry with each other.']
    ]
  },
  'accidental': {
    mistakes: [
      ['Naiwan ako ang susi sa bahay.', 'Naiwan ko ang susi sa bahay.', 'When a thing got left behind, the person takes ko and the thing takes ang.'],
      ['Nahulog ko sa hagdan.', 'Nahulog ako sa hagdan.', 'Falling happens to your own body, so the person takes ako.'],
      ['Nawalan siya ang trabaho.', 'Nawalan siya ng trabaho.', 'With nawalan the person takes ang and what was lost takes ng.']
    ],
    more: [
      ['Nadulas po siya sa banyo kaninang umaga.', 'He slipped in the bathroom this morning.'],
      ['Naiwan po ng bantay ang mga gamot sa bahay.', 'The watcher left the medicines at home.'],
      ['Napahawak siya sa dibdib niya nang marinig ang balita.', 'She clutched her chest when she heard the news.'],
      ['Natapon ang tubig sa sahig.', 'The water spilled on the floor.'],
      ['Naipit ang daliri ko sa pinto.', 'My finger got caught in the door.'],
      ['Napatawa kami sa kuwento ni Mang Tonyo.', 'We burst out laughing at Mang Tonyo\'s story.']
    ],
    quiz: [
      ['"I lost my wallet."', ['Nawala ang pitaka ko.', 'Nawala ako ang pitaka ko.', 'Winala ang pitaka ko.'], 0, 'The thing that went missing is the topic of nawala.'],
      ['"Nakalimutan ____ ang pangalan niya."', ['ako', 'ko', 'sa akin'], 1, 'The one who forgets takes ko; the name takes ang.'],
      ['"Napasigaw siya." means', ['She made someone shout.', 'She will shout.', 'She cried out suddenly.'], 2, 'Napa- = a sudden reaction she could not stop.'],
      ['Which sentence says she threw the food away on purpose?', ['Itinapon niya ang pagkain.', 'Natapon ang pagkain.', 'Natapon niya ang pagkain.'], 0, 'Itinapon is the deliberate form; natapon is spilled or thrown out by accident.'],
      ['A patient says "Nahulog po ako sa motor." What is the best next question?', ['Sinadya po ba ninyong mahulog, di ba?', 'Paano po nangyari?', 'Bakit po kayo nagpabaya?'], 1, 'Start open and without blame; ask about intent later in a neutral way if needed.'],
      ['"____ ako sa pinto." (I bumped my head on the door.)', ['Inuntog', 'Untugin', 'Nauntog'], 2, 'An accident to your own body: na- form with ako.']
    ]
  }
});
