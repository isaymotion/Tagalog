/* Unit reviews (3.14.0). Draft for review. One per unit; js/data/lessons-zz-order.js turns each into a lesson at the end of its unit.
   rows and quiz are append only (later releases add rows for new lessons). */
window.LESSON_REVIEWS = Object.assign(window.LESSON_REVIEWS || {}, {
  'Foundations': {
    id: 'review-foundations', level: 'A1', title: 'Review: Foundations',
    summary: 'The building blocks: sounds, the markers for things and names, pronouns, linkers, may and wala, questions, saying no, pointing words and plurals.',
    intro: 'After this unit you can build short sentences, ask simple questions, say no in the right way and point to things near and far. Read each row, say the example aloud, and go back to a lesson when a row does not feel easy yet.',
    rows: [
      ['pronounce', 'every vowel is said; ng is one sound; the marker ng is said "nang" and mga is said "ma-nga"', 'Ngayon ang uwi ng mga bata.', 'The children come home today.'],
      ['markers', 'ang marks the topic, ng the non-topic doer, the object or the owner, sa the place or direction', 'Bumili ang nanay ng gamot sa botika.', 'The mother bought medicine at the pharmacy.'],
      ['names', 'before a name, si, ni, kay take the place of ang, ng, sa; sina, nina, kina for more than one', 'Ibinigay ni Ben ang susi kay Ana.', 'Ben gave the key to Ana.'],
      ['pronouns', 'three sets (ako, ko, akin); tayo includes the listener, kami does not; kayo for respect', 'Sasamahan namin kayo sa ward.', 'We will go with you to the ward.'],
      ['linkers', '-ng after a vowel, -g after n, na after other consonants', 'Gusto kong uminom ng malamig na tubig.', 'I want to drink cold water.'],
      ['may-wala', 'may + noun = there is, has; mayroon or meron when it stands alone; wala + -ng = there is none', 'Wala po akong ubo, pero may sipon ako.', 'I have no cough, but I have a cold.'],
      ['questions', 'the question word comes first; ba goes after the first word, but after a short pronoun like ka', 'Kailan ka huling kumain?', 'When did you last eat?'],
      ['negation', 'hindi for actions and descriptions, wala for having none, huwag for do not; short pronouns move up after them', 'Hindi siya kumain kagabi.', 'He did not eat last night.'],
      ['demonstratives', 'ito near me, iyan near you, iyon far from us both; dito, diyan, doon for the place', 'Ano po iyan sa kamay ninyo?', 'What is that in your hand?'],
      ['plurals', 'mga makes a plural, but drop it after a number or a word like marami; mga before a number means about', 'Dalawang bisita lang po ang puwede sa loob.', 'Only two visitors are allowed inside.']
    ],
    quiz: [
      ['"Binigyan ____ Ana ng pagkain ang bata."', ['si', 'ni', 'kay'], 1, 'Ana is the doer of an object-focus verb, so she takes ni, the name form of ng.'],
      ['Which is correct?', ['mainit na kape', 'mainitng kape', 'mainit kape'], 0, 'Mainit ends in t, a consonant other than n, so the linker is the separate word na.'],
      ['"I have no fever." "____ po akong lagnat."', ['Hindi', 'Wala', 'Huwag'], 1, 'Having none is wala, with the linker on the pronoun: wala po akong. Hindi negates actions and descriptions; huwag is do not.'],
      ['"Where is your child now?" "____ po ang anak ninyo ngayon?"', ['Sino', 'Ilan', 'Nasaan'], 2, 'Nasaan asks where someone or something is. Sino is who; ilan is how many.'],
      ['A nurse tells the patient that the staff, not the patient, will help. "Tutulungan ____ kayo."', ['natin', 'nila', 'namin'], 2, 'Namin is we without the listener. Natin would include the patient; nila is they.'],
      ['"Ano po ito?" The speaker is asking about something', ['near the speaker', 'near the listener', 'far from both'], 0, 'Ito is near me. Iyan is near you; iyon is far from both.'],
      ['"Kina Lola tayo matutulog." Where will we sleep?', ['at Grandma\'s place', 'in the hospital', 'in our own house'], 0, 'Kina + a name often means at that person\'s house.'],
      ['In "ngipin" (tooth), the first sound is', ['n and then g, two sounds', 'one sound, like the end of "sing"', 'silent'], 1, 'Ng is a single sound and can start a word: ngipin, ngayon.'],
      ['You ask "Kumain na po ba kayo?" The patient says "Hindi pa po." He means', ['not anymore', 'not hungry', 'not yet'], 2, 'Hindi pa = not yet. Hindi na = not anymore.'],
      ['"Nagluluto si Nanay ____ adobo sa kusina."', ['ng', 'ang', 'sa'], 0, 'Si Nanay is the topic, so the thing cooked takes ng. Sa is for the place, sa kusina.']
    ]
  },
  'Verbs: focus and aspect': {
    id: 'review-verbs-1', level: 'B1', title: 'Review: Verbs, focus and aspect',
    summary: 'How a Tagalog verb is built: which noun it puts in focus, whether the action is done, going on or still to come, the affix positions, the formal ay order and the just-happened form.',
    intro: 'After this unit you can read a verb and tell who or what the sentence is about and when the action happens. Use the table to test yourself: cover the English, read the Tagalog, and name the focus and the aspect of each verb.',
    rows: [
      ['focus', 'the affix shows which noun is the ang topic: -um- and mag- for the doer, -in and i- for the thing acted on', 'Niluto ni Aling Rosa ang isda.', 'Aling Rosa cooked the fish.'],
      ['aspect', 'completed, ongoing or not yet started; repeat the first syllable for unfinished actions, and use the ongoing form for habits', 'Naglalakad ako tuwing umaga.', 'I go for a walk every morning.'],
      ['panlapi', 'unlapi before the root, gitlapi inside it, hulapi after it, kabilaan on both sides, laguhan all three', 'Inalagaan siya ng kapatid niya.', 'Her sister took care of her.'],
      ['focus-an-i', '-an puts the place or person reached in focus, i- and ipag- the one who benefits, ipang- the thing used', 'Ipinagtimpla ko ng kape si Lola.', 'I made coffee for Grandma.'],
      ['ay-inversion', 'in formal writing the topic can come first, joined by ay; in conversation the comment comes first', 'Ang klinika ay sarado tuwing Linggo.', 'The clinic is closed on Sundays.'],
      ['recent-past', 'kaka- + root + lang says it only just happened; the doer takes ko, niya or ng', 'Kakaalis lang ng anak ninyo.', 'Your child has just left.']
    ],
    quiz: [
      ['"Who cooked the rice?" "Sino ang ____ ng kanin?"', ['nagluto', 'niluto', 'magluluto'], 0, 'Asking about the doer takes actor focus, and the cooking is done: nagluto.'],
      ['"Kakain na tayo." When is the eating?', ['It already happened.', 'It has not started yet.', 'It happens every day.'], 1, 'Kakain is the contemplated form: about to happen. Kumain is done; kumakain is ongoing or a habit.'],
      ['Which sentence says the action happened only a moment ago?', ['Uminom na ako ng gamot.', 'Umiinom ako ng gamot.', 'Kakainom ko lang ng gamot.'], 2, 'Kaka- + root + lang = only just. Uminom na is simply already done; umiinom is a habit.'],
      ['"Kakaalis lang ____ bisita."', ['ang', 'ng', 'sa'], 1, 'The just-happened form has no topic, so the doer takes ng, not ang.'],
      ['"Tinulungan ng anak ang nanay." Who was helped?', ['the child', 'both of them', 'the mother'], 2, 'Ang marks the topic of an -an verb, the person the help reached: ang nanay. The helper takes ng.'],
      ['"Ipinagluto ko ng adobo si Ben" means', ['Ben cooked adobo for me.', 'I cooked adobo for Ben.', 'I ate Ben\'s adobo.'], 1, 'Ipag- puts the one who benefits in focus: si Ben. Ko is the cook.'],
      ['Which word has a hulapi (suffix) and nothing else?', ['basahin', 'kumain', 'nagbasa'], 0, 'Basa + -hin. Kumain has a gitlapi; nagbasa has an unlapi and a repeated syllable.'],
      ['Where are you most likely to read "Ang pasyente ay pumapayag sa gamutan"?', ['a text to a friend', 'a consent form', 'a sign in a jeepney'], 1, 'The ay order is formal, the style of documents and forms. In talk you would say Pumapayag ang pasyente.'],
      ['You want to know if the patient took the medicine you left last night. Which is correct?', ['Ininom po ba ninyo ang gamot kagabi?', 'Uminom po ba kayo ang gamot kagabi?', 'Iinom po ba ninyo ang gamot kagabi?'], 0, 'A specific, known medicine takes object focus, and the act is done: ininom. Iinom is future and does not fit kagabi.'],
      ['The watcher says "Katutulog lang po ng pasyente." The patient', ['has not slept', 'is about to sleep', 'has only just fallen asleep'], 2, 'Katutulog (everyday kakatulog) + lang = just fell asleep. A good moment to come back later.']
    ]
  },
  'Verbs: more affixes': {
    id: 'review-verbs-2', level: 'B1', title: 'Review: Verbs, more affixes',
    summary: 'The affixes that change what an action means: able to, having it done, doing it with others, happening by accident, and turning a verb into a noun.',
    intro: 'After this unit you can tell whether something was chosen, managed, arranged, shared or accidental, which is often the clinical point of a sentence. Use the table to compare the affixes, then try the quiz, where you have to pick between them.',
    rows: [
      ['ability', 'maka- and ma- say able to, managed to, or did without meaning to; seeing and hearing take ma-', 'Hindi ko makita ang salamin ko.', 'I cannot find my glasses.'],
      ['causative', 'magpa- means having something done for you; pa- -in means making or letting someone do it; pa- alone asks for something', 'Nagpagupit si Carlo kahapon.', 'Carlo got a haircut yesterday.'],
      ['social-verbs', 'maki- joins in or asks a favor, makipag- acts with a partner marked by sa, mag- -an means doing it to each other', 'Nakipaglaro si Ben sa mga pinsan niya.', 'Ben played with his cousins.'],
      ['accidental', 'na-, na- -an and napa- mark what happens without intention; say nakalimutan ko but nadapa ako', 'Napangiti si Lola nang makita ang apo niya.', 'Grandma broke into a smile when she saw her grandchild.'],
      ['nominalising', 'pag- makes the act, ka- -an a quality or state, pagka- the event or "right after"', 'Kumusta po ang pag-aaral ng anak ninyo?', 'How is your child doing at school?']
    ],
    quiz: [
      ['"I could not sleep last night." "Hindi ako ____ kagabi."', ['natulog', 'nakatulog', 'matutulog'], 1, 'Not able to is the maka- form: nakatulog. Hindi ako natulog says you did not sleep, as if by choice.'],
      ['"May nakikita ka bang hindi nakikita ng iba?" asks about', ['things the patient sees that others do not', 'things the patient is looking for', 'people the patient visits'], 0, 'Nakikita is the ma- form for seeing, which comes to you. It is a screening question for hallucinations.'],
      ['"Nagpakuha ako ng dugo kanina" means', ['I drew someone\'s blood.', 'I had my blood taken.', 'I lost some blood.'], 1, 'Magpa- = have it done for you: the speaker had a blood test.'],
      ['A daughter says "Pinapainom ko po siya ng gamot gabi-gabi." Who gives the medicine?', ['the daughter', 'the patient alone', 'nobody yet'], 0, 'Pa- -in: the daughter has the patient take it. That is part of the adherence history.'],
      ['"Nagtulungan ang magkapatid" means', ['One sibling helped the other.', 'The siblings helped each other.', 'The siblings asked for help.'], 1, 'Mag- -an with a plural doer means to each other.'],
      ['The family is eating and you would like to join in. You say "____ po ako."', ['Makikikain', 'Magpapakain', 'Pakainin'], 0, 'Maki- + the future form, with po, politely asks to join in. Magpapakain is having someone fed.'],
      ['"Napaupo si Lola sa gulat" means', ['Grandma made someone sit down.', 'Grandma sat down slowly to rest.', 'Grandma sank into a seat from shock.'], 2, 'Napa- is a sudden reaction she could not stop.'],
      ['Which is correct?', ['Nahulog ko sa hagdan.', 'Nahulog ako sa hagdan.', 'Nahulog akin sa hagdan.'], 1, 'The fall happened to the person\'s own body, so the person takes ako.'],
      ['You want an open question about the patient\'s work. Ask', ['Kumusta po ang nagtatrabaho ninyo?', 'Kumusta po ang trabahuhin ninyo?', 'Kumusta po ang pagtatrabaho ninyo?'], 2, 'From the mag- verb, the noun is pag- + repeated syllable + root: pagtatrabaho.'],
      ['"Katahimikan" means', ['quiet, as a describing word', 'to keep quiet', 'silence, quietness'], 2, 'Ka- -an makes a quality or state: tahimik, quiet, becomes katahimikan, silence.']
    ]
  },
  'Natural speech': {
    id: 'review-natural', level: 'A2', title: 'Review: Natural speech',
    summary: 'The small words that make Tagalog sound natural: particles, po and respectful address, the order of the short words, hedges, and exclamations.',
    intro: 'After this unit you can sound polite and natural, put the short words in the right order, and hear how sure a speaker is and how they feel. Say each example aloud, and listen for where the short words sit.',
    rows: [
      ['particles', 'na already, pa still, lang only, naman softens, kasi because, nga please or indeed', 'Pagod na ako kasi wala pa akong tulog.', 'I am tired because I have not had any sleep yet.'],
      ['politeness', 'po in every sentence to elders and strangers, opo for yes, kayo for one older person', 'Opo, Nanay, babalik po ako mamaya.', 'Yes, Nanay, I will come back later.'],
      ['enclitics', 'the short words follow the first word in a fixed order: ka, ko, mo, then na or pa, then po, then ba; ko + ka = kita', 'Hindi pa po ba kayo nagugutom?', 'Are you not hungry yet?'],
      ['hedging', 'daw passes on what others said; yata, siguro, baka and parang show how sure the speaker is', 'Umalis na yata si Ben.', 'I think Ben has already left.'],
      ['exclamations', 'ang + the bare root makes "how ...!"; naku, aray and sayang show the feeling first', 'Naku, ang lakas ng ulan!', 'Oh no, the rain is so heavy!']
    ],
    quiz: [
      ['"Are you still awake?" "Gising ka ____?"', ['pa ba', 'na ba', 'lang ba'], 0, 'Pa = still. Gising ka na ba? asks whether you are awake already.'],
      ['"Hindi siya pumasok sa trabaho ____ masama ang pakiramdam niya."', ['pa', 'nga', 'kasi'], 2, 'Kasi gives the reason: because he felt unwell.'],
      ['A woman about your mother\'s age is waiting in the clinic. You greet her:', ['Kumusta ka, bata?', 'Uy, kumusta?', 'Kumusta po kayo, Nanay?'], 2, 'Po, kayo and Nanay show respect to someone of a parent\'s age.'],
      ['An elder asks "Kumain ka na ba?" A respectful answer is', ['Oo, kumain na ako.', 'Opo, kumain na po ako.', 'Opo, kumain ako na po.'], 1, 'Opo for yes and po in the answer; na follows the verb before po.'],
      ['"Does your stomach hurt too?" Which order is natural?', ['Masakit din po ba ang tiyan ninyo?', 'Masakit po din ba ang tiyan ninyo?', 'Masakit ba po din ang tiyan ninyo?'], 0, 'Din comes before po, and ba comes last of the short words.'],
      ['"He has not eaten yet." "Hindi ____ kumakain."', ['siya pa', 'pa siya', 'pa ba siya'], 1, 'One-syllable pa comes before the two-syllable pronoun siya. Ba would make it a question.'],
      ['A relative says "Mga isang linggo na yata." She is', ['not sure of the exact time', 'quoting the patient', 'certain it has been one week'], 0, 'Yata and mga both mark a guess: about a week, I think.'],
      ['"____ umulan mamaya, magdala ka ng payong."', ['Sana', 'Baka', 'Pala'], 1, 'Baka = it might, with some worry, so you prepare. Sana would be hoping for rain.'],
      ['"The coffee is so hot!"', ['Ang mainit ng kape!', 'Ang init ng kape!', 'Init ang kape!'], 1, 'Ang + the bare root, without ma-, then ng + the thing.'],
      ['As you press on his knee, the patient says "Aray!" This tells you', ['he is surprised to see you', 'he regrets something', 'it hurts at that spot'], 2, 'Aray signals sudden pain: examine there gently.']
    ]
  },
  'Building sentences': {
    id: 'review-sentences', level: 'B1', title: 'Review: Building sentences',
    summary: 'Joining ideas into longer sentences: cause and result, conditions and wishes, reporting what others said, and clauses that describe a noun.',
    intro: 'After this unit you can follow and build a history with causes, conditions, sources and details. Use the table to see one connector or pattern per lesson, then mix them in the quiz.',
    rows: [
      ['connectors', 'kasi and dahil give the cause, kaya the result; kung is if, kapag whenever, noong once in the past', 'Umuulan kanina, kaya hindi kami lumabas.', 'It was raining earlier, so we did not go out.'],
      ['conditionals', 'kung sakali for in case, basta for as long as, kahit for even if; sana with a completed verb looks back at what did not happen', 'Tawagan mo ako kung sakaling lumala ang ubo mo.', 'Call me in case your cough gets worse.'],
      ['reported-speech', 'sabi + the ng form names the speaker, daw marks it secondhand, ayon sa means according to, akala ko means I thought, wrongly', 'Sabi ng anak niya, hindi raw siya kumakain sa bahay.', 'Her child says she is not eating at home.'],
      ['relative-clauses', 'a clause joins its noun with na or -ng, and the noun must be the topic of the clause', 'Nasa mesa ang sulat na isinulat ni Carlo.', 'The letter Carlo wrote is on the table.']
    ],
    quiz: [
      ['"Wala siyang gana, ____ hindi siya kumain."', ['kasi', 'kaya', 'kung'], 1, 'Kaya introduces the result: so he did not eat. Kasi would introduce a cause.'],
      ['"He listens to the radio while he cooks." "Nakikinig siya ng radyo ____ nagluluto."', ['habang', 'hanggang', 'noong'], 0, 'Habang = while. Hanggang is until; noong is when, in the past.'],
      ['Which sentence is about something that happens again and again?', ['Kapag umuulan, sumasakit ang ulo ko.', 'Noong umulan, sumakit ang ulo ko.', 'Kahit umulan, hindi sumakit ang ulo ko.'], 0, 'Kapag + the ongoing form = whenever. Noong is one time in the past.'],
      ['"Puwede po kayong kumain ng kahit ano, ____ hindi maalat."', ['kahit', 'kung hindi', 'basta'], 2, 'Basta = as long as: the one condition that matters.'],
      ['A mother says "Kung dinala ko lang siya agad, sana hindi lumala." What is she most likely feeling?', ['guilt or regret', 'relief', 'anger at the doctor'], 0, 'Kung ... sana with completed verbs looks back at what did not happen. It is a moment to reassure her.'],
      ['"Inumin mo ang gamot, kung hindi, babalik ang lagnat." Here kung hindi means', ['even if', 'whether', 'otherwise'], 2, 'Kung hindi = otherwise, or else: the result if the advice is not followed.'],
      ['"Narinig kong aalis na si Liza." The speaker', ['saw Liza leave', 'heard from someone that Liza is leaving', 'is asking whether Liza is leaving'], 1, 'Narinig ko na (narinig kong) = I heard that: secondhand news.'],
      ['"Tanong ni Lola kung uuwi na siya bukas." Grandma', ['said she will go home tomorrow', 'asked whether she will go home tomorrow', 'does not want to go home'], 1, 'Tanong + kung reports a yes or no question.'],
      ['"the food my mother cooked"', ['ang pagkaing nagluto ang nanay ko', 'ang pagkaing niluto ng nanay ko', 'ang pagkain niluto nanay ko'], 1, 'The food is the topic of the clause, so the verb is object focus, niluto, and the cook takes ng.'],
      ['A patient says the man next door watches him all the time. Which reply reads his words back to him?', ['Hindi po totoo iyan.', 'Ang lalaki po ba ay nakatira?', 'Ang sinasabi po ninyo, binabantayan kayo ng lalaking nakatira sa tabi ninyo.'], 2, 'A relative clause (ang lalaking nakatira sa tabi ninyo) keeps his own terms, so you can go on asking.']
    ]
  },
  'Register and style': {
    id: 'review-register', level: 'B1', title: 'Review: Register and style',
    summary: 'How Tagalog changes with the setting: formal Filipino and everyday Taglish, the short forms of fast speech, and the words that order a patient\'s story.',
    intro: 'After this unit you can follow a fast, everyday account, choose a level of speech that fits the patient, and keep a story in order. Read the rows aloud, and notice which forms you should understand and which you should use yourself.',
    rows: [
      ['register', 'everyday Tagalog takes English roots with Tagalog affixes; start plain and everyday, and go more formal if the patient does', 'Nag-text po ba sa inyo ang anak ninyo?', 'Did your child text you?'],
      ['spoken-short-forms', 'fast speech clips words (yung, nasan, meron, pag, teka); understand them, but answer in fuller forms with po', 'Teka lang, nasan yung payong ko?', 'Wait a moment, where is my umbrella?'],
      ['storytelling', 'noong una, tapos, bigla, unti-unti, simula noon and hanggang ngayon put the story in order', 'Simula noon, hindi na siya lumalabas ng bahay.', 'Since then, he no longer goes out of the house.']
    ],
    quiz: [
      ['"Na-check na po ba ang dugo ninyo?" shows', ['an English root with a Tagalog affix', 'deep formal Filipino', 'a word that only appears in writing'], 0, 'Na- + check: everyday Taglish, as many people really speak.'],
      ['An older patient answers you in deep, formal Tagalog. You', ['answer only in English', 'use as many short forms as you can', 'move to more formal Tagalog yourself'], 2, 'Start everyday, then follow the patient\'s level.'],
      ['Which word for "chair" do people really use?', ['salumpuwit', 'upuan', 'salipawpaw'], 1, 'Upuan. Salumpuwit is a textbook invention, and salipawpaw is the made-up word for airplane.'],
      ['"Nasan" is the spoken form of', ['nasaan', 'nasa', 'saan'], 0, 'Nasan = nasaan, where is.'],
      ['"Ang lamig, \'no?" The \'no at the end asks the listener to', ['agree', 'repeat it', 'leave'], 0, '\'No or ano at the end means "right?", asking you to agree.'],
      ['A relative begins "E, kasi po nung lumipat kami, ganyan na s\'ya." What should you listen for?', ['a rude tone', 'the reason she thinks matters most', 'a request for medicine'], 1, 'E and kasi often introduce the reason the relative thinks matters. Fast, clipped speech is normal, not rude.'],
      ['"Tsaka" means', ['wait', 'I do not know', 'and also'], 2, 'Tsaka (at saka) = and also, and then. Wait is teka; I do not know is ewan.'],
      ['"Bigla" means', ['gradually', 'suddenly', 'since then'], 1, 'Bigla = suddenly. Gradually is unti-unti; since then is simula noon.'],
      ['The relative pauses in the middle of the story. Which prompt keeps it going?', ['Hindi po totoo iyan.', 'Bakit po ganyan kayo?', 'Tapos po?'], 2, 'Tapos po? (And then?) invites the next part without judging.'],
      ['"____, hindi lang siya makatulog. Tapos, ayaw na niyang kumain."', ['Hanggang ngayon', 'Noong una', 'Simula noon'], 1, 'Noong una = at first, the opening of the story. Tapos comes after it.']
    ]
  },
  'Everyday life': {
    id: 'review-everyday', level: 'A2', title: 'Review: Everyday life',
    summary: 'The everyday tools: numbers and the clock, want and need, comparing, asking and telling, time words, how much, where, and which numbers to expect when.',
    intro: 'After this unit you can handle times, prices, places, requests and how often or how much, on the ward and at the market. Use the table as a quick check, then try the quiz, which mixes the lessons.',
    rows: [
      ['numbers', 'native numbers count things and ages; Spanish-derived numbers tell the clock and often prices', 'Alas-siyete po ang alis ng bus.', 'The bus leaves at seven.'],
      ['modals', 'gusto, ayaw, kailangan and dapat take ko, mo, niya and a linker; puwede takes ako; kaya mo pa ba asks about coping', 'Kailangan kong magpahinga ngayong hapon.', 'I need to rest this afternoon.'],
      ['comparisons', 'mas ... kaysa for more than, pinaka- for the most, kasing- for as ... as', 'Mas matangkad si Carlo kaysa sa kuya niya.', 'Carlo is taller than his older brother.'],
      ['requests', 'commands use the base form; huwag + pronoun with a linker; paki- asks politely; tayo and muna soften', 'Pakiabot po ang baso.', 'Please pass me the glass.'],
      ['time-words', 'kanina earlier, mamaya later, tuwing every; noong for past days, sa for coming ones; a length + na = it has been', 'Tatlong araw na po siyang may lagnat.', 'He has had a fever for three days now.'],
      ['intensifiers', 'medyo a little, masyado too, sobra and napaka- very; doubling with na or -ng means completely', 'Pagod na pagod si Mang Tonyo galing sa bukid.', 'Mang Tonyo is exhausted after the farm.'],
      ['location', 'nasa = is at, with no verb; sa marks the place of an action; galing sa is from, papunta sa is to', 'Galing po sa palengke si Aling Rosa.', 'Aling Rosa has just come from the market.'],
      ['spanish-numbers', 'Spanish-derived numbers for the clock, small prices and casual ages; Tagalog numbers for counting things', 'Bente-singko pesos po ang pamasahe papunta sa bayan.', 'The fare to town is twenty-five pesos.']
    ],
    quiz: [
      ['"Alas-otso ng gabi" is', ['8 a.m.', '8 p.m.', 'eight minutes'], 1, 'Alas- + a Spanish-derived number is the clock; ng gabi is in the evening.'],
      ['"I want to rest."', ['Gusto kong magpahinga.', 'Gusto akong magpahinga.', 'Gusto ko magpahinga ako.'], 0, 'Gusto takes the ng-form ko, and the linker -ng joins it to the verb.'],
      ['"Mas magaan na po ang pakiramdam ko kaysa kahapon." The patient feels', ['worse than yesterday', 'better than yesterday', 'the same as yesterday'], 1, 'Mas magaan = lighter: better than yesterday.'],
      ['An agitated patient is standing and shouting. Which instruction is calmest?', ['Umupo ka!', 'Huwag kang sumigaw!', 'Umupo muna tayo, ha?'], 2, 'Tayo and muna invite instead of ordering, and it says what to do.'],
      ['"Dalawang araw pa lang" means', ['only two days so far', 'two days from now', 'every two days'], 0, 'A length of time + pa lang = only so far.'],
      ['"Hindi gaanong masakit" means', ['It hurts terribly.', 'It does not hurt that much.', 'It does not hurt at all.'], 1, 'Hindi gaano = not very. It still hurts a little.'],
      ['"I have just come from Bataan." "____ po ako sa Bataan."', ['Galing', 'Papunta', 'Nasaan'], 0, 'Galing sa = from. Papunta sa is going to; nasaan asks where.'],
      ['"Trenta\'y singko" is', ['53', '35', '30'], 1, 'Trenta (30) joined with \'y to singko (5).'],
      ['A patient says "Sobrang pagod na po ako, hindi ko na kaya." What do you do next?', ['Say "Kaya mo iyan!" and move on.', 'Ask what time it is.', 'Ask gently how they are coping and about their safety.'], 2, 'Hindi ko na kaya, with sobra, is a cue for a risk assessment, not for cheering up.'],
      ['"Nights are the hardest for me." "Ang gabi ang ____ para sa akin."', ['mas mahirap', 'kasinghirap', 'pinakamahirap'], 2, 'Pinaka- = the most. Mas is more; kasing- is as ... as.']
    ]
  },
  'Culture': {
    id: 'review-culture', level: 'B1', title: 'Review: Culture',
    summary: 'The family at the bedside, the values that shape what patients say, folk beliefs, idioms of distress, and when to get an interpreter.',
    intro: 'After this unit you can read the cultural side of an interview: who is in the room, what an opo or a folk explanation may mean, and when your Tagalog is not enough. Read each row as a reminder, then try the cases in the quiz.',
    rows: [
      ['kinship', 'expect a bantay at the bedside; panganay and bunso carry family roles; see the patient alone for part of the visit', 'Kayo po ba ang bantay ni Lolo ngayong gabi?', 'Are you staying with Grandpa tonight?'],
      ['values', 'hiya, utang na loob, pakikisama and sama ng loob shape what patients say; an opo may only mean "I heard you"', 'Ano po ang gagawin ninyo pag-uwi ninyo sa bahay?', 'What will you do when you get home?'],
      ['folk', 'a shared folk belief is not a delusion; ask what the family believes and respect their explanation', 'Ano po ang sabi ng albularyo tungkol sa nangyari sa kanya?', 'What did the folk healer say about what happened to him?'],
      ['idioms-distress', 'patients name distress in the body and in idioms; ask what they mean before you assume', 'Kailan po nagsimulang bumigat ang dibdib ninyo?', 'When did your chest start to feel heavy?'],
      ['interpreting', 'interview alone for routine follow-up; ask a nurse to interpret for risk, consent and thought disorder; never use the family to interpret the patient\'s own words', 'Tutulong po ang nars sa pagsasalin para malinaw ang usapan natin.', 'The nurse will help interpret so that our talk is clear.']
    ],
    quiz: [
      ['"Bunso" is', ['the eldest child', 'the youngest child', 'a godparent'], 1, 'Bunso = the youngest. The eldest is panganay; godparents are ninong and ninang.'],
      ['A relative answers every question for the patient. What do you say?', ['Tumahimik po kayo.', 'Sige po, kayo na lang ang sumagot.', 'Puwede ko po bang makausap muna si Ben nang mag-isa?'], 2, 'Politely ask for time alone with the patient. Telling the relative to be quiet shames them.'],
      ['A patient says "Opo" to the whole plan but looks unsure. Here "opo" most likely means', ['I heard you.', 'I fully agree and will do it.', 'I want to go home.'], 0, 'Out of pakikisama, opo often means only "I heard you". Check by asking them to explain the plan.'],
      ['A daughter says "Utang na loob ko sa nanay ko ang lahat, kaya ako ang nag-aalaga." This tells you', ['she owes her mother money', 'she wants to stop caring for her', 'a debt of gratitude drives her caregiving'], 2, 'Utang na loob is a lasting debt of gratitude, not money. It can also mean a heavy caregiving burden.'],
      ['The family says their son was "sinapian". Which question respects their view and gathers information?', ['Ano po sa tingin ninyo ang nangyari sa kanya?', 'Walang ganyan, sakit po iyan.', 'Huwag na po kayong maniwala diyan.'], 0, 'Ask for their explanation first. Dismissing the belief closes the conversation.'],
      ['Which points more toward psychosis than a shared folk belief?', ['The family shares the belief.', 'The patient says the engkanto chose him to save the world.', 'The family also went to an albularyo.'], 1, 'A belief that is highly personal and grows beyond the folk version is a red flag.'],
      ['As an idiom of distress, "Mainit ang ulo niya" usually means', ['he has a fever', 'he is irritable', 'he is sleepy'], 1, 'A hot head = irritability, seen in depression, mania or substance use. Ask what they mean.'],
      ['A relative says "Tulala siya buong araw." He', ['talks all day', 'sleeps all day', 'stares blankly all day'], 2, 'Tulala = staring blankly: think of withdrawal, depression, dissociation or catatonia.'],
      ['Which needs a nurse to interpret, even if your Tagalog is good enough for routine talk?', ['asking about sleep at a follow-up', 'explaining consent for admission', 'asking about appetite'], 1, 'Consent must be explained in a language the patient fully understands.'],
      ['You did not fully understand one line the patient said. What do you do?', ['Write it down in her own words and ask the nurse later.', 'Guess the meaning and chart it.', 'Leave it out of the notes.'], 0, 'These lines are often idioms of distress that carry the diagnosis.']
    ]
  },
  'Picture lessons': {
    id: 'review-pictures', level: 'A2', title: 'Review: Picture lessons',
    summary: 'The picture lessons: where things are, where it hurts, describing, counting, clothes, directions, signs, machines, states, and explaining with a diagram.',
    intro: 'After this unit you can talk about what you see: places, the body, things, clothes, signs and machines. Use the table to recall each pattern, then go back to the pictures and make new sentences of your own.',
    rows: [
      ['pic-nasaan', 'nasaan asks where; answer with nasa + position word + ng', 'Nasa ilalim po ng kama ang tsinelas ninyo.', 'Your slippers are under the bed.'],
      ['pic-masakit', 'masakit + ang + body part + ko; ask saan po masakit? and kailan pa po?', 'Masakit po ang likod ko kapag umuubo ako.', 'My back hurts when I cough.'],
      ['pic-paglalarawan', 'the describing word comes first, then ang; may for has, walang for has none', 'Malaki ang tainga ng elepante.', 'The elephant\'s ears are big.'],
      ['pic-bilang', 'number + linker + noun, with no mga after a number; ilan asks how many', 'Tatlong saging at isang mansanas ang binili ko.', 'I bought three bananas and one apple.'],
      ['pic-suot', 'nakasuot ng + the item, or naka- joined to it: nakasalamin, naka-jacket', 'Nakasumbrero at nakatsinelas si Mang Tonyo.', 'Mang Tonyo is wearing a hat and slippers.'],
      ['pic-direksyon', 'diretso, kumanan and kumaliwa to move; katabi is next to, katapat is across from', 'Kumaliwa po kayo sa kanto, tapos diretso lang.', 'Turn left at the corner, then go straight on.'],
      ['pic-karatula', 'bawal + base verb for a rule, huwag for a warning, paki- and po for a polite request', 'Bawal kumain sa loob ng sinehan.', 'No eating inside the cinema.'],
      ['pic-makina', 'object-focus verbs: buksan, patayin, lakasan, hinaan, pindutin, isaksak, hugutin', 'Pakipatay po ang electric fan bago kayo umalis.', 'Please switch off the electric fan before you leave.'],
      ['pic-kalagayan', 'naka- + root describes a state with nobody named: nakabukas, nakasara, nakapatong', 'Nakabukas pa ang ilaw sa kusina.', 'The kitchen light is still on.'],
      ['pic-paliwanag', 'name it with ito po ang, place it with nandito po, say what it does with ang trabaho po nito ay', 'Ito po ang lalamunan. Dito po dumadaan ang pagkain papunta sa sikmura.', 'This is the throat. Food passes through here on its way to the stomach.']
    ],
    quiz: [
      ['"The glasses are on the table." Which is correct?', ['Nasa ibabaw ng mesa ang salamin.', 'Nasa ibabaw mesa ang salamin.', 'Nasa sa ibabaw ng mesa ang salamin.'], 0, 'Nasa + position word + ng + the object. No second sa.'],
      ['The patient answers "Kaninang umaga pa po." Which question did you ask?', ['Saan po masakit?', 'Kailan pa po?', 'Gaano po kasakit?'], 1, 'Kaninang umaga pa = since this morning: it answers since when.'],
      ['"The bag is big." Which is a full sentence?', ['Malaking bag', 'Malaki ang bag.', 'Bag na malaki'], 1, 'Describing word + ang makes a sentence. With a linker it is only a phrase: a big bag.'],
      ['"Five chairs"', ['limang upuan', 'lima upuan', 'limang mga upuan'], 0, 'Number + linker + noun. No mga after a number.'],
      ['Which sentence says what someone is wearing?', ['Nakasara ang pinto.', 'Nakapatong ang baso.', 'Naka-uniform si Liza.'], 2, 'Naka- + a piece of clothing says what a person wears. The others are states of things.'],
      ['"The pharmacy is across from the bank."', ['Katabi ng bangko ang botika.', 'Katapat ng bangko ang botika.', 'Lampas sa bangko ang botika.'], 1, 'Katapat = across from, facing. Katabi is next to; lampas sa is past.'],
      ['Which sign states a rule?', ['Bawal manigarilyo', 'Pakisara po ang pinto', 'Pasensya na po sa abala'], 0, 'Bawal + base verb = not allowed. Paki- and po ask nicely.'],
      ['Which one is a command?', ['Nakapatay ang aircon.', 'Both of them', 'Patayin mo ang aircon.'], 2, 'Patayin mo is an object-focus command. Nakapatay only describes the state: the aircon is off.'],
      ['"Nakasandal sa pader ang walis" means', ['The broom is leaning against the wall.', 'The broom is hanging on the wall.', 'The broom is lying on the floor.'], 0, 'Nakasandal = leaning. Hanging is nakasabit.'],
      ['You show a relative where the heart is on the diagram. Which is the clearest first line?', ['Gagaling po ang puso niya.', 'Ang puso po ay bahagi ng sistemang kardyobaskular.', 'Ito po ang puso. Nandito po ito sa gitna ng dibdib.'], 2, 'Name it, then place it, in plain words. Do not promise a result.']
    ]
  }
});
