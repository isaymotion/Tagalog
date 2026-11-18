/* Lesson extras part 4 (3.14.0). Draft for review. Shape: see js/views.js. Ids are lesson ids. */
window.LESSON_EXTRA = Object.assign(window.LESSON_EXTRA || {}, {
  'conditionals': {
    mistakes: [
      ['Kung matutulog ka nang maaga, hindi ka sana inaantok ngayon.', 'Kung natulog ka nang maaga, hindi ka sana inaantok ngayon.', 'For something that did not happen, kung takes the completed form, not the future, and sana goes in the result.'],
      ['Magdala ka ng kumot kung sakali lumamig.', 'Magdala ka ng kumot kung sakaling lumamig.', 'Kung sakali needs the linker before the verb: sakaling.'],
      ['Kapag dumating na ang resulta, sinabi ko po sa inyo.', 'Kapag dumating na ang resulta, sasabihin ko po sa inyo.', 'The completed form after kapag means "once it has happened", so the result is still future: sasabihin.']
    ],
    more: [
      ['Kapag kinakabahan po kayo, saan sa katawan ninyo ito nararamdaman?', 'When you feel nervous, where in your body do you feel it?'],
      ['Kung sakaling hindi po kayo makatulog mamayang gabi, tawagin lang po ninyo ang nars.', 'In case you cannot sleep tonight, just call the nurse.'],
      ['Puwede po kayong umuwi sa Sabado, basta tuloy-tuloy po ang pag-inom ninyo ng gamot.', 'You can go home on Saturday, as long as you keep taking your medicine.'],
      ['Kahit gabihin tayo, tatapusin natin ito.', 'Even if it gets late, we will finish this.'],
      ['Kumain ka muna, kung hindi, sasakit ang tiyan mo.', 'Eat first, otherwise your stomach will hurt.'],
      ['Kung nag-aral ako nang mabuti, e di sana pumasa ako sa pagsusulit.', 'If I had studied hard, I would have passed the exam.']
    ],
    quiz: [
      ['"____ sumasakit ang ulo mo, umiinom ka ba ng tubig?" (whenever)', ['Kapag', 'Kahit', 'Sana'], 0, 'Kapag = whenever, for something that happens again and again.'],
      ['"Kahit umiyak ka, hindi kita papayagan." This means', ['If you cry, I will allow you.', 'Because you cried, I will not allow you.', 'Even if you cry, I will not allow you.'], 2, 'Kahit = even if: the condition changes nothing.'],
      ['Which sentence means "If you had brought an umbrella, you would not have got wet"?', ['Kung magdadala ka ng payong, hindi ka sana nabasa.', 'Kung nagdala ka ng payong, hindi ka sana nabasa.', 'Kapag nagdala ka ng payong, nabasa ka sana.'], 1, 'Kung + completed verb, with sana in the result, describes what did not happen.'],
      ['"Sasama ako sa inyo, ____ hindi tayo gagabihin." (as long as)', ['kahit', 'kung hindi', 'basta'], 2, 'Basta = as long as, the one condition that matters.'],
      ['"Sana makauwi na po kayo sa Linggo." This is', ['a hope for the future', 'something that did not happen', 'an order'], 0, 'With a base verb, sana is a hope.'],
      ['A mother says: "Kung dinala ko siya rito noong isang linggo, e di sana hindi siya lumala." Best response?', ['Oo nga po, kasalanan po ninyo.', 'Ang mahalaga po, nandito na siya ngayon at inaalagaan na natin siya.', 'Bakit po hindi ninyo siya dinala agad?'], 1, 'E di sana often carries guilt. Reassure; do not agree or blame.']
    ]
  },
  'reported-speech': {
    mistakes: [
      ['Ayon sa Mang Tonyo, sarado na ang tindahan.', 'Ayon kay Mang Tonyo, sarado na ang tindahan.', 'Before a name, ayon takes kay, not sa.'],
      ['Sabi ng Liza, susunduin daw niya ang anak niya.', 'Sabi ni Liza, susunduin daw niya ang anak niya.', 'The source of sabi takes ni before a name and ng before other nouns.'],
      ['Sinabi ang nars na bawal pa po kayong kumain.', 'Sinabi ng nars na bawal pa po kayong kumain.', 'Sinabi is object focus, so the one who said it takes ng, not ang.']
    ],
    more: [
      ['Sabi po ng anak ninyo, hindi na raw kayo kumakain ng hapunan.', 'Your son says you no longer eat dinner.'],
      ['Ayon po sa nars, nagising daw siya nang alas-dos ng madaling-araw.', 'According to the nurse, he woke up at two in the morning.'],
      ['Tanong po ng nanay niya kung puwede na siyang dalawin bukas.', 'His mother asks whether he can have visitors tomorrow.'],
      ['Akala ko sarado ang tindahan, bukas pala.', 'I thought the store was closed, but it turns out it is open.'],
      ['Narinig kong ikakasal na raw si Carlo.', 'I heard that Carlo is getting married.'],
      ['Kuwento ni Lola, naglalakad daw sila papuntang eskuwela noon.', 'As Grandma tells it, they used to walk to school back then.']
    ],
    quiz: [
      ['"Sabi ____ Carlo, mamaya na raw siya darating."', ['ni', 'ng', 'kay'], 0, 'Sabi takes ni before a name.'],
      ['"Ayon ____ nanay niya, hindi siya umuwi kagabi."', ['ng', 'kay', 'sa'], 2, 'Ayon sa before a common noun; ayon kay before a name.'],
      ['Report this: "Gutom na ako," sabi ni Ben.', ['Sabi ni Ben, gutom na raw ako.', 'Sabi ni Ben, gutom na raw siya.', 'Sabi ko, gutom na raw si Ben.'], 1, 'In the report, ako shifts to siya, and Ben stays the source.'],
      ['"Akala ko tapos ka na." The speaker most likely', ['has found out you are not done yet', 'knows for sure you are done', 'is asking whether you are done'], 0, 'Akala ko usually means the belief turned out wrong.'],
      ['A patient\'s brother says: "Nakikipag-away raw siya sa kapitbahay." Best next question?', ['Kailan po siya iinom ng gamot?', 'Kayo po mismo ba ang nakakita nito?', 'Ano po ang paborito niyang pagkain?'], 1, 'Raw shows it is secondhand. Ask whether the informant saw it himself.'],
      ['"Tanong niya kung puwede siyang umuwi." What did he do?', ['He said he can go home', 'He asked why he must go home', 'He asked whether he may go home'], 2, 'Tanong niya kung = he asked whether.']
    ]
  },
  'relative-clauses': {
    mistakes: [
      ['Masarap ang tinapay na bumili ako.', 'Masarap ang tinapay na binili ko.', 'The bread is the thing acted on, so it needs an object-focus verb (binili) with the doer as ko.'],
      ['Nasaan ang bag iniwan ko rito?', 'Nasaan ang bag na iniwan ko rito?', 'A clause needs the linker to join its noun. Bag ends in a consonant, so the linker is na.'],
      ['Siya ang nars sino nag-alaga sa akin.', 'Siya ang nars na nag-alaga sa akin.', 'Tagalog has no relative "who". Sino only asks questions; the linker na does the job.']
    ],
    more: [
      ['Ito po ba ang tabletang ibinigay sa inyo kaninang umaga?', 'Is this the tablet you were given this morning?'],
      ['Nasa labas po ang anak niyang naghatid sa kanya.', 'The son who brought her here is outside.'],
      ['May nakikita po ba kayong hindi nakikita ng iba?', 'Do you see things that other people do not see?'],
      ['Nawala ang payong na binili ko kahapon.', 'The umbrella I bought yesterday got lost.'],
      ['Kilala mo ba yung babaeng kumakanta sa simbahan?', 'Do you know the woman who sings at church?'],
      ['Walang sumasagot sa telepono nila.', 'Nobody is answering their phone.']
    ],
    quiz: [
      ['"the letter Ana wrote"', ['ang sulat na sumulat si Ana', 'ang sulat na isinulat ni Ana', 'ang sulat isinulat si Ana'], 1, 'The letter is the thing acted on: object focus (isinulat), with the doer as ni Ana.'],
      ['"the child who is crying"', ['ang batang umiiyak', 'ang batang iniiyakan', 'ang bata umiiyak'], 0, 'The child is the doer, so actor focus; bata ends in a vowel, so -ng.'],
      ['"Ito po ang silid ____ tutulugan ninyo."', ['na', 'ng', 'ang'], 0, 'Silid ends in a consonant, so the linker is na.'],
      ['"Walang tumawag kagabi" means', ['Someone called last night', 'He did not call last night', 'Nobody called last night'], 2, 'Walang + actor-focus verb = nobody did it.'],
      ['Which sentence is correct?', ['Asawa ko ang lalaking dinala ako rito.', 'Asawa ko ang lalaking nagdala sa akin dito.', 'Asawa ko ang lalaki sino nagdala sa akin dito.'], 1, 'The man is the doer, so the verb is actor focus (nagdala) and the linker is -ng.'],
      ['A patient says: "May taong sumusunod sa akin." Which reply reads it back in her own terms?', ['Wala pong sumusunod sa inyo.', 'Takot po kayo sa tao.', 'Ang ibig po ninyong sabihin, may taong sumusunod sa inyo?'], 2, 'It keeps her clause and checks your understanding without dismissing it.']
    ]
  },
  'spoken-short-forms': {
    mistakes: [
      ['Ayoko ko ng maanghang.', 'Ayoko ng maanghang.', 'Ayoko already contains ko (ayaw ko), so a second ko is wrong.'],
      ['Ayaw s\'yang kumain.', 'Ayaw n\'yang kumain.', 'The short forms keep their sets: ayaw takes the ng-set, so n\'ya (niya), not s\'ya (siya).', 'Ayaw nyang kumain.'],
      ['Nasan ka pupunta?', 'Sa\'n ka pupunta?', 'Nasan (nasaan) asks where something is. For where someone is going, use sa\'n (saan).', 'San ka pupunta?']
    ],
    more: [
      ['\'Di na po s\'ya naliligo mula nung Lunes.', 'He has not bathed since Monday.', 'Di na po sya naliligo mula nung Lunes.'],
      ['Ewan ko po, basta bigla na lang s\'yang sumigaw kagabi.', 'I don\'t know, he just suddenly started shouting last night.', 'Ewan ko po, basta bigla na lang syang sumigaw kagabi.'],
      ['Pa\'no po namin s\'ya mapapainom ng gamot kung ayaw n\'ya?', 'How can we get him to take his medicine if he does not want to?', 'Pano po namin sya mapapainom ng gamot kung ayaw nya?'],
      ['Ba\'t ang tagal mo?', 'Why did you take so long?', 'Bat ang tagal mo?'],
      ['Teka, nasan na yung susi ko?', 'Wait, where is my key?'],
      ['O, \'yan na yung hinahanap mo.', 'Here, that is the one you were looking for.', 'O, yan na yung hinahanap mo.']
    ],
    quiz: [
      ['"Ga\'no" is short for', ['gaano', 'ganoon', 'gabi'], 0, 'Ga\'no = gaano, how much or how long.'],
      ['"Kelan ka babalik?" The fuller form of kelan is', ['kailangan', 'kailan', 'kahapon'], 1, 'Kelan = kailan, when. Kailangan means need.'],
      ['"Nasan" asks', ['where someone or something is', 'where someone is going', 'when something happens'], 0, 'Nasan = nasaan, where is. Going somewhere takes sa\'n.'],
      ['"\'Tsaka" in "\'Tsaka po, ayaw na n\'yang lumabas" means', ['because', 'I don\'t know', 'and also'], 2, '\'Tsaka = at saka, and also, and then.'],
      ['A grandson asks his grandmother "Ba\'t \'di ka kumain?" How would you, as her doctor, ask the same thing?', ['Ba\'t \'di po kayo kumain?', 'Bakit po hindi kayo kumain?', 'Bakit hindi ka kumain?'], 1, 'Use the fuller forms with po and kayo yourself, especially with elders.'],
      ['A relative says: "E, kasi po nung namatay yung tatay n\'ya, \'di na s\'ya lumalabas." What is she telling you?', ['That she does not know the reason', 'That she wants to change the subject', 'The reason she thinks matters: he stopped going out after his father died'], 2, 'E and kasi introduce the reason the relative thinks matters most.']
    ]
  },
  'exclamations': {
    mistakes: [
      ['Ang masarap ng luto mo!', 'Ang sarap ng luto mo!', 'The exclamation uses ang + the bare root, without ma-.'],
      ['Ang ganda ang bahay ninyo!', 'Ang ganda ng bahay ninyo!', 'The thing described follows with ng, not a second ang.'],
      ['Ang bait si Ana!', 'Ang bait ni Ana!', 'Before a name, the thing described takes ni, not si.']
    ],
    more: [
      ['Naku, ang taas pa rin po ng lagnat niya.', 'Oh dear, his fever is still so high.'],
      ['Aray, ang sakit po ng likod ko kapag tumatayo ako.', 'Ouch, my back hurts so much when I stand up.'],
      ['Buti na lang po at dinala ninyo siya agad.', 'Good thing you brought him in right away.'],
      ['Ang lamig ng hangin ngayong gabi!', 'The air is so cold tonight!'],
      ['Sayang, naubos na ang pandesal.', 'What a pity, the bread rolls are all gone.'],
      ['Grabe, ang haba ng pila sa palengke!', 'Wow, the line at the market is so long!']
    ],
    quiz: [
      ['"How delicious!"', ['Ang sarap!', 'Ang masarap!', 'Sarap ang!'], 0, 'Ang + the bare root. Ang masarap = the delicious one.'],
      ['"Ang bait ____ Liza!"', ['ng', 'ni', 'si'], 1, 'Before a name, the thing described takes ni.'],
      ['"Aray!" usually signals', ['regret', 'sudden pain', 'relief'], 1, 'Aray = ouch.'],
      ['"Kawawa naman" signals', ['pity', 'anger', 'surprise at good news'], 0, 'Kawawa naman = poor thing.'],
      ['"Hay naku," said with a long sigh, most likely shows', ['excitement', 'chest pain', 'weariness or exasperation'], 2, 'Hay naku signals weariness; you might ask Pagod na po ba kayo?'],
      ['A patient winces and says "Aray!" when you press on her right side. Best next step?', ['Ignore it, it is just a habit', 'Ask her to stop complaining', 'Ask gently where it hurts and examine that area'], 2, 'Aray is pain you can hear: it tells you where to examine.']
    ]
  },
  'numbers': {
    mistakes: [
      ['Alas-apat na ba?', 'Alas-kuwatro na ba?', 'Telling time uses the Spanish numbers after alas: alas-kuwatro, not alas-apat.'],
      ['Ala-dos na po ng hapon.', 'Alas-dos na po ng hapon.', 'Only one o\'clock is ala-una. Every other hour takes alas-.'],
      ['Dalawa tableta po ang ininom niya.', 'Dalawang tableta po ang ininom niya.', 'A number before a noun needs the linker: dalawang tableta.']
    ],
    more: [
      ['Alas-siyete po ng umaga ang almusal dito.', 'Breakfast here is at seven in the morning.'],
      ['Dalawang araw na po siyang hindi kumakain.', 'He has not eaten for two days.'],
      ['Alas-dos po ng hapon ang dalaw.', 'Visiting time is at two in the afternoon.'],
      ['Tatlo po ang anak ko.', 'I have three children.'],
      ['Limang piso po ang isa.', 'They are five pesos each.'],
      ['Alas-sais na, umuwi na tayo.', 'It is six o\'clock, let us go home.']
    ],
    quiz: [
      ['"apat" means', ['4', '5', '6'], 0, 'Apat = 4.'],
      ['"Two o\'clock" in Tagalog', ['Ala-dos', 'Alas-dos', 'Dalawa na'], 1, 'Time uses alas- with the Spanish number. Only one o\'clock is ala-una.'],
      ['"five children"', ['limang anak', 'lima anak', 'singko anak'], 0, 'Counting things uses the native number with the linker: limang.'],
      ['"sampu" means', ['7', '10', '100'], 1, 'Sampu = 10.'],
      ['"It is eight in the evening."', ['Alas-otso na ng umaga.', 'Walo na ng gabi.', 'Alas-otso na ng gabi.'], 2, 'Alas-otso with ng gabi; ng umaga would be morning.'],
      ['You tell a patient her medicine is at nine at night. Which is the most natural?', ['Siyam ng gabi po ang gamot ninyo.', 'Alas-diyes po ng gabi ang gamot ninyo.', 'Alas-nuwebe po ng gabi ang gamot ninyo.'], 2, 'Time uses the Spanish number: nuwebe = nine. Diyes is ten.']
    ]
  },
  'modals': {
    mistakes: [
      ['Gusto ako kumain ng mangga.', 'Gusto kong kumain ng mangga.', 'Gusto takes the ng-set pronoun (ko) with a linker before the verb: kong.'],
      ['Ayaw siya maligo.', 'Ayaw niyang maligo.', 'Ayaw takes the ng-set pronoun with a linker: niyang, not siya.'],
      ['Puwede po ba akong umuupo rito?', 'Puwede po ba akong umupo rito?', 'After a modal the verb stays in the base form, not the ongoing form.']
    ],
    more: [
      ['Ayaw po niyang maligo mula kahapon.', 'He has not wanted to bathe since yesterday.'],
      ['Kailangan po ninyong kumain bago uminom ng gamot.', 'You need to eat before taking your medicine.'],
      ['Kaya pa po ba ninyong maglakad papunta sa banyo?', 'Can you still walk to the bathroom?'],
      ['Gusto mo bang sumama sa palengke?', 'Do you want to come along to the market?'],
      ['Dapat tayong umalis nang maaga bukas.', 'We should leave early tomorrow.'],
      ['Puwede ka bang tumawag mamaya?', 'Can you call later?']
    ],
    quiz: [
      ['"I need to sleep."', ['Kailangan kong matulog.', 'Kailangan ako matulog.', 'Kailangan ko natulog.'], 0, 'Kailangan + ko + -ng + base verb.'],
      ['"Puwede ba ____ pumasok?" (May I come in?)', ['kong', 'akong', 'ko'], 1, 'Puwede uses the ang-set: akong.'],
      ['"Ayaw kong umalis" means', ['I want to leave', 'I do not want to leave', 'I cannot leave'], 1, 'Ayaw = not want.'],
      ['"Dapat kang magpahinga" is', ['advice that you should rest', 'a question about resting', 'a statement that you already rested'], 0, 'Dapat = should.'],
      ['Which sentence is correct?', ['Gusto niya kumain siya.', 'Gusto siyang kumain.', 'Gusto niyang kumain.'], 2, 'Gusto + niya + -ng + base verb.'],
      ['A patient says: "Hindi ko na po kaya." What should you do?', ['Say "Kaya mo iyan" and move on', 'Change the subject to something lighter', 'Ask more about it and do a risk assessment'], 2, 'Hindi ko na kaya (I can\'t take it anymore) warrants a risk assessment.']
    ]
  },
  'comparisons': {
    mistakes: [
      ['Si Ben ang mas pinakamatangkad sa klase.', 'Si Ben ang pinakamatangkad sa klase.', 'Pinaka- already means "most"; do not add mas.'],
      ['Kasinlaki ang bahay namin ang bahay ninyo.', 'Kasinlaki ng bahay namin ang bahay ninyo.', 'With kasing- or kasin-, the thing compared with takes ng.'],
      ['Kasingmaganda ng nanay niya si Liza.', 'Kasingganda ng nanay niya si Liza.', 'Kasing- joins the bare root, without ma-: kasingganda.']
    ],
    more: [
      ['Mas mahimbing po ba ang tulog ninyo ngayon kaysa noong isang linggo?', 'Is your sleep deeper now than last week?'],
      ['Pinakamabigat po ang pakiramdam ko tuwing umaga.', 'I feel heaviest every morning.'],
      ['Kasinsakit pa rin po ba ng dati ang ulo ninyo?', 'Does your head still hurt as much as before?'],
      ['Mas mura ang isda sa palengke kaysa sa tindahan sa kanto.', 'Fish is cheaper at the market than at the corner store.'],
      ['Ito ang pinakamasarap na ulam na natikman ko.', 'This is the most delicious dish I have ever tasted.'],
      ['Kasingtangkad na ng tatay niya si Carlo.', 'Carlo is now as tall as his father.']
    ],
    quiz: [
      ['"cheaper"', ['mas mura', 'pinakamura', 'kasingmura'], 0, 'Mas = more, -er.'],
      ['"Pinakamaliit" means', ['smaller', 'smallest', 'as small as'], 1, 'Pinaka- = most, -est.'],
      ['"Mas mainit ngayon ____ kahapon."', ['kaysa', 'ng', 'ang'], 0, 'Mas ... kaysa = more ... than.'],
      ['"Kasimbigat ng bigas ang bag." means', ['The bag is heavier than the rice', 'The bag is as heavy as the rice', 'The bag is the heaviest'], 1, 'Kasing- (kasim- before b) = as ... as.'],
      ['Which sentence is correct?', ['Mas pinakamabilis siya.', 'Siya ang mas pinakamabilis.', 'Siya ang pinakamabilis.'], 2, 'Pinaka- alone means most; mas and pinaka- do not go together.'],
      ['Last week a patient rated her sadness eight out of ten. Today she says: "Mas magaan na po ngayon." What does that tell you?', ['She feels worse than before', 'She feels the same', 'She feels better than before'], 2, 'Mas magaan = lighter: the heaviness has eased. Ask her to rate it again.']
    ]
  },
  'requests': {
    mistakes: [
      ['Inumin po kayo ito.', 'Inumin po ninyo ito.', 'Inumin is object focus, so the person asked is ninyo (or mo), not kayo.'],
      ['Umupo mo muna rito.', 'Umupo ka muna rito.', 'Umupo is actor focus, so the person asked is ka (or kayo), not mo.'],
      ['Huwag mong ginalaw iyan.', 'Huwag mong galawin iyan.', 'After huwag the verb is in the base form, not the completed form.']
    ],
    more: [
      ['Pakitaas po ang manggas ninyo.', 'Please roll up your sleeve.'],
      ['Huwag po kayong tumayo nang mag-isa.', 'Please do not stand up on your own.'],
      ['Huminga muna tayo nang dahan-dahan.', 'Let us breathe slowly first.'],
      ['Pakiabot nga ang asin.', 'Please pass the salt.'],
      ['Makikiinom po ng tubig.', 'May I have some water, please?'],
      ['Isara mo nga ang bintana.', 'Close the window, will you.']
    ],
    quiz: [
      ['"Please open the window." (polite)', ['Pakibukas po ang bintana.', 'Binuksan po ang bintana.', 'Bukas po ang bintana.'], 0, 'Paki- + root, with po.'],
      ['"Do not touch that."', ['Huwag mong hawakan iyan.', 'Hindi mo hinawakan iyan.', 'Huwag mo hinawakan iyan.'], 0, 'Huwag + mo with linker + base form.'],
      ['"____ po kayo rito." (Please sit here.)', ['Inupuan', 'Umupo', 'Naupo'], 1, 'Commands use the base form; umupo is actor focus, so kayo.'],
      ['Which sentence is correct?', ['Kainin ka ito.', 'Kumain mo ito.', 'Kainin mo ito.'], 2, 'Kainin is object focus, so the person asked is mo.'],
      ['"Makikiupo po" is said when you', ['ask someone to stand', 'ask to sit with others or share a seat', 'tell someone to leave'], 1, 'Maki- asks to share or join: here, to sit.'],
      ['An agitated patient is pacing. Which instruction fits the lesson\'s advice best?', ['Huwag kang maglakad!', 'Ano ba ang problema mo?', 'Umupo muna tayo rito.'], 2, 'Short, calm, positive, with tayo: an invitation, not an order.']
    ]
  }
});
