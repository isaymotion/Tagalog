/* Lesson extras part 3 (3.14.0). Draft for review. Shape: see js/views.js. Ids are lesson ids. */
window.LESSON_EXTRA = Object.assign(window.LESSON_EXTRA || {}, {
  'particles': {
    mistakes: [
      ['Masakit ba pa ang tiyan mo?', 'Masakit pa ba ang tiyan mo?', 'Pa (still) comes before ba. Ba sits at the end of the particle group.'],
      ['Lang sandali po.', 'Sandali lang po.', 'Lang cannot start a sentence; it follows the word it limits.'],
      ['Gising po na ba si Lola?', 'Gising na po ba si Lola?', 'Na comes before po, and po before ba: na, po, ba.']
    ],
    more: [
      ['Nahihilo pa po ba kayo?', 'Are you still dizzy?'],
      ['Tulog na raw si Tatay.', 'They say Father is asleep now.'],
      ['Sabihin mo nga sa akin kung ano ang masakit.', 'Please tell me what hurts.'],
      ['Ikaw naman ang magluto bukas.', 'It is your turn to cook tomorrow.'],
      ['Isang tasa lang ng kape ang ininom ko.', 'I only drank one cup of coffee.'],
      ['Inaantok ako kasi maaga akong nagising.', 'I am sleepy because I woke up early.']
    ],
    quiz: [
      ['"He says he is hungry already." Gutom na ____ siya.', ['raw', 'ba', 'lang'], 0, 'Raw (daw after a consonant) marks what someone else said.'],
      ['"Sandali lang po." means', ['Wait, I have finished.', 'Just a moment, please.', 'It is already late.'], 1, 'Lang = just; po adds respect.'],
      ['Which sentence is correct?', ['Masakit po din ba?', 'Masakit ba din po?', 'Masakit din po ba?'], 2, 'Order: din, then po, then ba.'],
      ['A mother tells you "Masakit daw ang dibdib niya." What do you know?', ['She is passing on what the patient told her', 'She examined his chest herself', 'His chest no longer hurts'], 0, 'Daw shows the mother is reporting; ask the patient directly as well.'],
      ['Which particle softens the request? "Tulungan mo ____ ako."', ['ba', 'nga', 'pa'], 1, 'Nga softens a request, like a gentle please.'],
      ['"He is not awake yet." Hindi ____ siya gising.', ['na', 'nga', 'pa'], 2, 'Hindi pa = not yet. Hindi na = no longer.']
    ]
  },
  'politeness': {
    mistakes: [
      ['Po salamat.', 'Salamat po.', 'Po never starts a sentence; it follows the first word.'],
      ['Umupo po ka.', 'Umupo po kayo.', 'With po, the respectful "you" is kayo, not ka.'],
      ['Mang Rosa, salamat po.', 'Aling Rosa, salamat po.', 'Mang is for men. For an older woman by name, use Aling.']
    ],
    more: [
      ['Lola, masakit po ba ang likod ninyo?', 'Grandma, does your back hurt?'],
      ['Tatay, ano po ang pangalan ninyo?', 'Sir, what is your name? (to an older man)'],
      ['Opo, babalik po ako bukas.', 'Yes, I will come back tomorrow.'],
      ['Kuya, magkano po ito?', 'How much is this? (to a slightly older man)'],
      ['Ate, saan po ang palengke?', 'Where is the market? (to a slightly older woman)'],
      ['Mang Tonyo, magandang umaga po.', 'Good morning, Mang Tonyo.']
    ],
    quiz: [
      ['Your patient is a man about your father\'s age. Best address:', ['Tatay, with po', 'Bata', 'Ikaw'], 0, 'Tatay with po is respectful and warm.'],
      ['"Ate" is used for', ['a younger brother', 'a woman a bit older than you', 'a female doctor'], 1, 'Ate = older sister, or a woman a little older than you.'],
      ['Which sentence is respectful?', ['Salamat ka.', 'Salamat, bata.', 'Salamat po.'], 2, 'Po marks respect.'],
      ['"Opo" answers a question with', ['a respectful yes', 'a respectful no', 'a maybe'], 0, 'Opo = yes, respectfully.'],
      ['A nineteen-year-old patient talks to you casually and never uses po. A good approach:', ['Insist that he use po', 'Follow his lead; dropping po can build rapport', 'End the interview'], 1, 'With young or same-age patients, follow their lead.'],
      ['Fill the gap: "Aling Liza, kumusta ____ kayo?"', ['ka', 'mo', 'po'], 2, 'Kumusta po kayo: po with kayo.']
    ]
  },
  'register': {
    mistakes: [
      ['Na-stress ko sa trabaho.', 'Na-stress ako sa trabaho.', 'Na-stress describes what happened to you, so the person is ako, not ko.'],
      ['Nag-text ako sa iyo bukas.', 'Magte-text ako sa iyo bukas.', 'Bukas needs the future form: mag- with the first syllable repeated, magte-text.'],
      ['Nag-try ko ang bagong gamot.', 'Nag-try ako ng bagong gamot.', 'Nag- is actor focus: the doer is ako and the thing tried takes ng.']
    ],
    more: [
      ['Ite-text ko po kayo kapag may resulta na.', 'I will text you when the results are in.'],
      ['Na-depress daw siya noong nawalan siya ng trabaho.', 'They say he got depressed when he lost his job.'],
      ['Mayroon po ba kayong iniinom na gamot sa ngayon?', 'Are you taking any medicine at present? (more formal)'],
      ['Nag-try akong magluto ng adobo kagabi.', 'I tried cooking adobo last night.'],
      ['Na-late ako kasi matrapik.', 'I was late because of the traffic.'],
      ['Nag-break na sila noong isang buwan.', 'They broke up last month.']
    ],
    quiz: [
      ['Everyday version of "Mayroon ka bang lagnat?"', ['May lagnat ka ba?', 'Lagnat ay mayroon ka?', 'Ikaw ay may lagnat ba?'], 0, 'May plus the noun is the everyday form of mayroon.'],
      ['"Na-check ko na ang presyon niya." means', ['I will check his blood pressure.', 'I already checked his blood pressure.', 'Please check his blood pressure.'], 1, 'Na- plus na: done already.'],
      ['Which word would an ordinary speaker use for "chair"?', ['salumpuwit', 'upuan', 'salipawpaw'], 1, 'Salumpuwit is a textbook coinage; salipawpaw means airplane.'],
      ['An elderly farmer answers only in deep Tagalog and looks lost when you say "allergy". Best next step:', ['Switch to plain formal Tagalog: "Mayroon po ba kayong alerhiya sa gamot?"', 'Repeat the English word louder', 'Write the question in English'], 0, 'Match the patient: plain, more formal Tagalog, slowly.'],
      ['"Baka ma-depress siya" means he might', ['stop being depressed', 'depress someone', 'get depressed'], 2, 'Ma- plus an English root: something that happens to you.'],
      ['Formal Filipino for "Nag-try na po ba kayo ng ibang gamot?"', ['Bumili na po ba kayo ng ibang gamot?', 'Uminom na po ba kayo ng ibang gamot?', 'Sumubok na po ba kayo ng ibang gamot?'], 2, 'Sumubok = to try.']
    ]
  },
  'storytelling': {
    mistakes: [
      ['Hanggang ngayon, umiyak pa rin siya gabi-gabi.', 'Hanggang ngayon, umiiyak pa rin siya gabi-gabi.', 'Hanggang ngayon means it is still going on, so the verb must be ongoing: umiiyak.'],
      ['Nung isang buwan, magsisimula ang problema.', 'Nung isang buwan, nagsimula ang problema.', 'Nung isang buwan points to the past, so the verb is completed: nagsimula.'],
      ['Kailan po ninyo unang mapapansin na ayaw na niyang kumain?', 'Kailan po ninyo unang napansin na ayaw na niyang kumain?', 'You are asking about a first time in the past, so the verb is completed: napansin.']
    ],
    more: [
      ['Noong una, akala namin pagod lang siya sa trabaho.', 'At first we thought he was just tired from work.'],
      ['Bigla na lang po siyang nagsisigaw noong isang gabi.', 'One night he suddenly started shouting.'],
      ['Simula noong mamatay ang asawa niya, unti-unti na siyang nanahimik.', 'Since his wife died, he has gradually gone quiet.'],
      ['Nung isang buwan, lumipat kami sa Balanga.', 'Last month we moved to Balanga.'],
      ['Umulan nang malakas, tapos biglang nawalan ng kuryente.', 'It rained hard, then suddenly the power went out.'],
      ['Hanggang ngayon, hindi ko pa rin mahanap ang susi ko.', 'Until now I still cannot find my key.']
    ],
    quiz: [
      ['"Tapos" in a patient\'s story means', ['then, after that', 'because', 'suddenly'], 0, 'Tapos marks the next event.'],
      ['"____, maayos pa siya. Pero noong Mayo, nagbago siya." (At first)', ['Hanggang ngayon', 'Noong una', 'Simula noon'], 1, 'Noong una = at first.'],
      ['"Bago nito, nangyari na rin po ba ito sa kanya?" asks about', ['what happened afterwards', 'an earlier similar episode', 'what is happening now'], 1, 'Bago nito = before this: a past episode.'],
      ['A wife says "Bigla na lang siyang nagbago noong isang linggo." What does this suggest about onset?', ['Gradual, over years', 'Unclear: she did not say when', 'Sudden, about a week ago'], 2, 'Bigla = suddenly; noong isang linggo = last week.'],
      ['A son says: "Noong una, ayaw lang niyang lumabas. Tapos, ayaw na rin niyang maligo. Ngayon, hindi na siya nagsasalita." In what order did the changes come?', ['Not going out, then not bathing, now not speaking', 'Not speaking, then not bathing, then not going out', 'All at the same time'], 0, 'Noong una, tapos, ngayon: first, then, now.'],
      ['"Ano po ang nangyari pagkatapos noon?" asks', ['what happened before that', 'why it happened', 'what happened after that'], 2, 'Pagkatapos noon = after that.']
    ]
  },
  'connectors': {
    mistakes: [
      ['Noong dumating ka bukas, tawagan mo ako.', 'Kapag dumating ka bukas, tawagan mo ako.', 'Bukas is in the future, so use kapag; noong is only for the past.'],
      ['Nakikinig siya ng radyo habang magluto.', 'Nakikinig siya ng radyo habang nagluluto.', 'Habang means while it is going on, so the verb is ongoing: nagluluto.'],
      ['Bumalik po kayo pagkatapos ang isang buwan.', 'Bumalik po kayo pagkatapos ng isang buwan.', 'Pagkatapos before a noun or a length of time takes ng.']
    ],
    more: [
      ['Hindi siya kumain kaninang tanghali kasi masakit ang tiyan niya.', 'He did not eat at lunch because his stomach hurt.'],
      ['Kapag hindi kayo makatulog, sabihin po ninyo sa nars.', 'Whenever you cannot sleep, please tell the nurse.'],
      ['Kahit inaantok siya, ayaw niyang humiga.', 'Even though he is sleepy, he does not want to lie down.'],
      ['Umuulan kanina, kaya nagdala ako ng payong.', 'It was raining earlier, so I brought an umbrella.'],
      ['Kung may oras ka bukas, kain tayo sa labas.', 'If you have time tomorrow, let us eat out.'],
      ['Nag-iipon ako para makabili ng bisikleta.', 'I am saving so that I can buy a bicycle.']
    ],
    quiz: [
      ['"Umiinom siya ng tubig ____ nauuhaw siya." (because)', ['kasi', 'kaya', 'kahit'], 0, 'Kasi gives the cause.'],
      ['"Hindi ako pumasok kahapon dahil may lagnat ako." Dahil introduces', ['the result', 'the cause', 'the time'], 1, 'Dahil = because: the cause.'],
      ['Which sentence is correct?', ['Uminom ka ng gamot bago kumain.', 'Uminom ka ng gamot bago kumain ka na.', 'Uminom ka ng gamot bago ang kumain.'], 0, 'Bago plus the base form of the verb.'],
      ['A patient says "Naririnig ko ang boses kapag mag-isa ako." The voices come', ['only once, in the past', 'whenever he is alone', 'only when others are present'], 1, 'Kapag = whenever: a repeated pattern worth exploring.'],
      ['"Hindi siya umuwi ____ hatinggabi." (until)', ['habang', 'para', 'hanggang'], 2, 'Hanggang = until.'],
      ['"I take a walk so that I can sleep well."', ['Naglalakad ako kaya makatulog nang maayos.', 'Naglalakad ako kahit makatulog nang maayos.', 'Naglalakad ako para makatulog nang maayos.'], 2, 'Para = so that, in order to.']
    ]
  },
  'hedging': {
    mistakes: [
      ['Siguro ka ba na may sumusunod sa iyo?', 'Sigurado ka ba na may sumusunod sa iyo?', 'Siguro means maybe. To ask "Are you sure?" use sigurado.'],
      ['Yata umalis na siya.', 'Umalis na yata siya.', 'Yata cannot start a sentence; it follows the first word, like the other short particles.'],
      ['Daw may tumatawag sa kanya sa gabi.', 'May tumatawag daw sa kanya sa gabi.', 'Daw cannot start a sentence; it comes after the first phrase.']
    ],
    more: [
      ['Kagabi pa raw siya hindi kumakain.', 'They say he has not eaten since last night.'],
      ['Baka po mahilo kayo kapag tumayo kayo agad.', 'You might get dizzy if you stand up right away.'],
      ['Parang may bumubulong sa tainga ko kapag tahimik.', 'It is as if someone whispers in my ear when it is quiet.'],
      ['Uulan yata mamayang hapon.', 'I think it will rain this afternoon.'],
      ['Nandito ka pala, akala ko umuwi ka na.', 'Oh, you are here. I thought you had gone home.'],
      ['Sana makapasa ako sa pagsusulit bukas.', 'I hope I pass the exam tomorrow.']
    ],
    quiz: [
      ['"Uuwi na ____ si Ben bukas." (I think so, but I am not sure)', ['yata', 'sana', 'talaga'], 0, 'Yata = I think, not sure.'],
      ['"Baka mahulog ka." expresses', ['a certainty', 'a worry that it might happen', 'a report from someone else'], 1, 'Baka = it might happen, often with worry.'],
      ['"May bisita pala tayo." The speaker', ['hopes a visitor comes', 'is sure no one is coming', 'has just realized there is a visitor'], 2, 'Pala = so it turns out.'],
      ['A sister says "Nilalason daw siya ng kapitbahay." How do you chart it?', ['The neighbor is poisoning the patient', 'The patient believes the neighbor is poisoning him, as reported by the sister', 'The sister believes the neighbor is poisoning him'], 1, 'Daw marks the patient\'s claim passed on, not the sister\'s view.'],
      ['"I wish I had gone earlier."', ['Baka pumunta ako nang mas maaga.', 'Pumunta raw ako nang mas maaga.', 'Sana pumunta ako nang mas maaga.'], 2, 'Sana with a completed verb = I wish it had been so.'],
      ['To test how firmly a patient holds a belief, ask:', ['Sigurado ka ba na may lason ang pagkain mo?', 'Baka may lason ang pagkain mo.', 'May lason daw ang pagkain mo.'], 0, 'Sigurado ka ba asks about conviction without suggesting an answer.']
    ]
  },
  'enclitics': {
    mistakes: [
      ['Hindi kumain siya.', 'Hindi siya kumain.', 'When hindi comes first, the pronoun moves up to follow it, ahead of the verb.'],
      ['Mahal ko ka.', 'Mahal kita.', 'Ko plus ka always becomes kita.'],
      ['Gutom pa ka ba?', 'Gutom ka pa ba?', 'The one-syllable pronoun ka comes before pa and ba.']
    ],
    more: [
      ['Hindi pa po ba kayo nakakatulog?', 'Have you still not been able to sleep?'],
      ['Tatawagin kita mamaya para sa gamot mo.', 'I will call you later for your medicine.'],
      ['Masakit din po ba ang tiyan ninyo?', 'Does your stomach hurt too?'],
      ['Saan ka na nakatira ngayon?', 'Where do you live now?'],
      ['Hindi ko pa nababasa ang mensahe mo.', 'I have not read your message yet.'],
      ['Ikaw na lang ang bumili ng tinapay.', 'You go and buy the bread instead.']
    ],
    quiz: [
      ['"Have you taken it yet?"', ['Ininom na mo ba?', 'Ininom mo na ba?', 'Ininom ba mo na?'], 1, 'Mo first, then na, then ba.'],
      ['"I remember you."', ['Naaalala kita.', 'Naaalala ko ka.', 'Naaalala ka ko.'], 0, 'Ko plus ka becomes kita.'],
      ['"He has not come home yet." (respectful) Hindi ____ siya umuuwi.', ['po pa', 'pa po', 'ba pa'], 1, 'Pa before po, then the two-syllable pronoun siya.'],
      ['Respectful: "Have you taken the medicine?"', ['Nainom ninyo na po ba ang gamot?', 'Nainom po na ninyo ba ang gamot?', 'Nainom na po ba ninyo ang gamot?'], 2, 'Na, po, ba, then the two-syllable pronoun ninyo.'],
      ['Which word can never start a sentence?', ['hindi', 'ikaw', 'ba'], 2, 'Ba is a short particle; it always follows another word.'],
      ['You ask "Uminom ka na ba ng gamot?" and the patient says "Hindi pa." What does it tell you?', ['He has not taken it yet; ask why and since when', 'He refuses medicine for good', 'He already took it'], 0, 'Hindi pa = not yet. Follow it up.']
    ]
  },
  'kinship': {
    mistakes: [
      ['Ikaw ba ang nanay niya?', 'Kayo po ba ang nanay niya?', 'Speak to a relative at the bedside with po and kayo; ikaw sounds rude to an older watcher.'],
      ['Lumabas muna kayo.', 'Puwede po bang lumabas muna kayo sandali?', 'A bare command sounds like a dismissal; ask the family with puwede po ba.'],
      ['Ano mo siya?', 'Ano po ninyo siya?', 'To a relative, use po and ninyo: "What is he to you?"']
    ],
    more: [
      ['Kayo po ba ang bantay niya ngayong gabi?', 'Are you the one watching over him tonight?'],
      ['Pangalawa po ba siya sa magkakapatid?', 'Is he the second child in the family?'],
      ['Sino po ang nag-aalaga sa kanya kapag nasa trabaho kayo?', 'Who looks after him when you are at work?'],
      ['Ako ang panganay, kaya ako ang tumutulong kina Nanay.', 'I am the eldest, so I am the one who helps my parents.'],
      ['Ninang ko si Aling Rosa sa binyag.', 'Aling Rosa is my godmother from my baptism.'],
      ['Nasa ibang bansa ang tatay ko, kaya si Lola ang nagpalaki sa akin.', 'My father works abroad, so my grandmother raised me.']
    ],
    quiz: [
      ['"Bunso" is the', ['youngest child', 'eldest child', 'only son'], 0, 'Bunso = youngest.'],
      ['"Ninang" is a', ['grandmother', 'godmother', 'aunt by blood'], 1, 'Ninang = godmother; ninong = godfather.'],
      ['"Kumare" is', ['your child\'s godmother, or the mother of your godchild', 'your sister-in-law', 'a female doctor'], 0, 'Kumare and kumpare are co-parents through baptism or marriage sponsorship.'],
      ['A mother answers every question you ask her adult son. You need to ask him about suicidal thoughts. Best step:', ['Ask the mother to answer for him', 'Ask politely: "Puwede ko po ba siyang makausap nang mag-isa sandali?"', 'Skip the question'], 1, 'Sensitive topics need time alone with the patient.'],
      ['"Sino po ang kasama ninyo sa bahay?" asks', ['who brought you here', 'who your doctor is', 'who lives with you'], 2, 'Kasama sa bahay = living with you.'],
      ['"Ano po ninyo ang pasyente?" asks the relative', ['what the patient ate', 'when the patient arrived', 'how the patient is related to them'], 2, 'Ano ninyo = what is he or she to you.']
    ]
  },
  'values': {
    mistakes: [
      ['Naiintindihan po ba ninyo kung kailan kayo babalik?', 'Kailan po kayo babalik dito?', 'A yes-no check invites a polite opo; an open question shows what the patient really understood.'],
      ['Bakit ngayon lang po ninyo sinabi?', 'Salamat po at sinabi ninyo ito sa akin.', 'Asking why they waited adds to hiya; thanking them makes it easier to say more.'],
      ['Mali po ang pag-inom ninyo ng gamot.', 'Tingnan po natin nang sabay kung paano ninyo iniinom ang gamot.', 'Blunt criticism hurts amor propio; natin makes it a shared task.']
    ],
    more: [
      ['Hindi po kayo nag-iisa, marami pong pamilya ang dumaraan dito.', 'You are not alone; many families go through this.'],
      ['Ano po ang ibig ninyong sabihin sa bahala na?', 'What do you mean by bahala na?'],
      ['May sama po ba kayo ng loob sa isang tao sa bahay?', 'Are you holding a grudge against someone at home?'],
      ['Malaki ang utang na loob ko sa tita ko kasi siya ang nagpaaral sa akin.', 'I owe my aunt a great deal because she paid for my schooling.'],
      ['Nagtatampo si Liza kasi hindi mo siya tinawagan.', 'Liza is sulking because you did not call her.'],
      ['Sumama na lang ako sa kanila para hindi sila magalit.', 'I just went along with them so they would not get upset.']
    ],
    quiz: [
      ['"Nahihiya po akong sabihin." The patient feels', ['embarrassed to say it', 'angry about it', 'too tired to say it'], 0, 'Hiya = shame, embarrassment.'],
      ['A daughter says her father sulks after a small slight and waits to be coaxed, but he eats, sleeps and works normally. This sounds like', ['tampo', 'major depression', 'psychosis'], 0, 'Tampo is hurt withdrawal, not depression.'],
      ['"Bahala na" is worth exploring because it can mean', ['only laziness', 'faith-based courage or fatalism', 'a curse'], 1, 'Ask what the patient means by it.'],
      ['"Utang na loob" is', ['a bank loan', 'resentment held inside', 'a lasting debt of gratitude'], 2, 'A lasting obligation to those who helped you.'],
      ['Pakikisama can lead a patient to', ['refuse every treatment loudly', 'say opo outwardly but not follow the plan', 'ask many questions'], 1, 'Avoiding open disagreement.'],
      ['Which question best checks real understanding?', ['Naiintindihan po ba ninyo?', 'Okay lang po ba?', 'Ano po ang gagawin ninyo kapag naubos ang gamot?'], 2, 'An open question cannot be answered with a polite opo.']
    ]
  },
  'folk': {
    mistakes: [
      ['Hindi po totoo ang kulam.', 'Ano po ang alam ninyo tungkol sa kulam?', 'Dismissing the belief costs trust; ask about it instead.'],
      ['Huwag na po kayong pumunta sa albularyo.', 'Puwede po kayong magpatingin sa albularyo, pero ituloy po ninyo ang gamot.', 'Both can help. Forbidding folk care often ends adherence instead.'],
      ['Guni-guni lang po ninyo iyan.', 'Ikuwento po ninyo sa akin ang nakita ninyo.', 'Calling it imagination shuts the story down; ask the patient to describe it.']
    ],
    more: [
      ['Ano po ang ginawa ng albularyo para sa kanya?', 'What did the folk healer do for him?'],
      ['Sa inyong lugar, naniniwala rin po ba ang mga tao sa kulam?', 'In your area, do people also believe in hexes?'],
      ['Kailan po ninyo unang naisip na may sumanib sa kanya?', 'When did you first think something had possessed him?'],
      ['Tabi-tabi po, makikiraan lang po kami.', 'Excuse us, spirits, we are just passing through.'],
      ['Sabi ng lola ko, may nuno sa punso sa likod ng bahay namin.', 'My grandmother says there is a mound spirit behind our house.'],
      ['Nagpahilot si Mang Tonyo kasi napilay ang paa niya.', 'Mang Tonyo went to a traditional massage healer because he sprained his foot.']
    ],
    quiz: [
      ['"Kinulam" means', ['bewitched, hexed', 'possessed by a spirit', 'visited by a dwarf'], 0, 'Kulam = witchcraft; kinulam = was hexed.'],
      ['"Sinapian siya" means', ['he was hexed', 'he was possessed', 'he was healed'], 1, 'Sapi = possession.'],
      ['Which points to psychosis rather than a shared folk belief?', ['The whole family believes in duwende', 'He says the engkanto chose him alone to rule the world, and his family finds this strange', 'He consulted an albularyo'], 1, 'Grandiose, personal, and not shared by his community.'],
      ['A mother says a spirit took over her son. He has also stopped bathing, talks to himself all day and lost his job. Best approach:', ['Accept it as a folk belief and send him home', 'Tell her spirits do not exist', 'Respect her explanation and still assess for psychosis'], 2, 'Functional decline is a red flag, whatever the explanation.'],
      ['"Ano po ang sinabi ng albularyo?" asks', ['what the folk healer said', 'where the folk healer lives', 'how much the folk healer charged'], 0, 'Sinabi = what was said.'],
      ['To a family seeing both the albularyo and the psychiatrist, the most helpful message is', ['Stop seeing the albularyo', 'Folk healing always makes things worse', 'Both can help; keep taking the medicine'], 2, 'Respecting the explanatory model improves adherence.']
    ]
  },
  'idioms-distress': {
    mistakes: [
      ['Huwag po kayong ganyan.', 'Ano po ang ibig ninyong sabihin sa ayoko na?', 'When a patient says "Ayoko na", do not scold; ask what it means and assess risk.'],
      ['Kinakabahan ka lang.', 'Kailan po kayo kinakabahan?', 'Lang dismisses the complaint; ask when the nervous feeling comes.'],
      ['Pagod lang po kayo.', 'Anong klaseng pagod po iyan?', 'Pagod na ako can mean tired of living; do not close it off, ask what kind of tired.']
    ],
    more: [
      ['Kailan pa po mabigat ang dibdib ninyo?', 'Since when has your chest felt heavy?'],
      ['Tulala lang daw siya buong araw sa kuwarto.', 'They say he just stares blankly in his room all day.'],
      ['Mainit po ba ang ulo ninyo nitong mga nakaraang araw?', 'Have you been irritable these past few days?'],
      ['Kinakabahan ako tuwing may pagsusulit.', 'I get nervous whenever there is an exam.'],
      ['Wala akong ganang kumain ngayon.', 'I have no appetite today.'],
      ['Parang lutang pa ako kasi kulang ako sa tulog.', 'I still feel spaced out because I did not get enough sleep.']
    ],
    quiz: [
      ['"Mainit ang ulo niya" usually means he is', ['feverish', 'irritable', 'sleepy'], 1, 'A hot head = irritability.'],
      ['"Wala akong gana" may point to', ['loss of appetite or drive', 'high energy', 'good sleep'], 0, 'Gana = appetite, drive.'],
      ['"Na-high blood ako sa kanya" most often means', ['I got angry at him', 'He measured my blood pressure', 'I gave him blood'], 0, 'An idiom for an anger outburst.'],
      ['"Tulala" describes someone who', ['talks very fast', 'stares blankly', 'shouts at others'], 1, 'Withdrawal, dissociation, catatonia or depression.'],
      ['An elderly man says "Pagod na ako." What should you do next?', ['Give vitamins and move on', 'Assume he means body fatigue', 'Ask what he means and screen for passive suicidal thoughts'], 2, 'Pagod na ako may hint at passive suicidal ideation.'],
      ['A patient says "May pasma po ako" and shows trembling hands. You should consider', ['a folk illness only, nothing to assess', 'a skin rash', 'anxiety, medicine side effects or withdrawal'], 2, 'Pasma often describes tremor and sweaty palms.']
    ]
  },
  'interpreting': {
    mistakes: [
      ['Tanungin mo siya kung nakakatulog siya.', 'Nakakatulog po ba kayo nang maayos?', 'Speak to the patient in the first person; the nurse interprets your own words.'],
      ['Ikaw na lang ang magsalin ng sinasabi ng tatay mo.', 'Ang nars po muna ang magsasalin ng sinasabi ng tatay ninyo.', 'A relative may soften the patient\'s words out of hiya; use a nurse for the patient\'s own account.'],
      ['Opo, naiintindihan ko po.', 'Pakiulit po, hindi ko po naintindihan.', 'Saying you understood when you did not hides the answer; ask for a repeat.']
    ],
    more: [
      ['Pakiulit po nang dahan-dahan ang huling sinabi ninyo.', 'Please repeat slowly what you just said.'],
      ['Pakisalin po ninyo ang bawat salita niya, kahit paulit-ulit.', 'Please interpret every word he says, even if he repeats himself.'],
      ['Puwede po ba kayong maghintay muna sa labas habang kausap ko siya?', 'Could you wait outside while I talk with him?'],
      ['Hindi ko maintindihan ang sinabi mo, puwede mo bang ulitin?', 'I did not understand what you said; can you repeat it?'],
      ['Ano ang ibig sabihin ng salitang iyan?', 'What does that word mean?'],
      ['Mabagal pa akong magsalita ng Tagalog, kaya pasensiya ka na.', 'I still speak Tagalog slowly, so please bear with me.']
    ],
    quiz: [
      ['"Pakiulit po" asks the patient to', ['speak louder', 'repeat what they said', 'stop talking'], 1, 'Paki- + ulit = please repeat.'],
      ['A woman starts to describe her husband hitting her, and he is in the room. Best step:', ['Ask the husband to interpret', 'Find a moment alone with her, with a nurse interpreting if needed', 'Stop asking'], 1, 'The patient will never disclose through the person she fears.'],
      ['"Hindi ko po naintindihan" means', ['I did not understand', 'I did not hear you', 'I do not agree'], 0, 'Naintindihan = understood.'],
      ['The patient uses a word for a spirit that has no English match. The nurse interpreting should', ['leave it out', 'say "ghost" and move on', 'flag it so you can ask more'], 2, 'Untranslatable words often carry the meaning; flag them.'],
      ['When you chart a nurse-interpreted interview, write', ['the interpreter\'s role, not the nurse\'s name as informant', 'the nurse\'s name as the informant', 'nothing about the interpreter'], 0, 'Record the role; the nurse is not an informant.'],
      ['"Dahan-dahan lang po" asks the speaker to', ['stop', 'say more', 'go slowly'], 2, 'Dahan-dahan = slowly.']
    ]
  }
});
