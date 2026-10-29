/* Sample sentences for the verb trainer, one set per root in verbs.js.
   Each sentence: [Tagalog, English, verb form used, aspect, flags, note]
     aspect: inf (infinitive / command), com (completed), inc (incompleted), con (contemplated),
             root (bare root: casual invitation, command, or adjective-like use — "Tara, kain tayo")
     flags:  'c' = clinical / bedside sentence
   Plain conversational Filipino as patients and staff actually speak it. Wording is original. DRAFT for native-speaker review. */
window.VERB_SENTENCES = {
  kain: [
    ['Kailangan mo pang kumain kahit kaunti.', 'You still need to eat, even a little.', 'kumain', 'inf', 'c'],
    ['Kainin natin ito.', "Let's eat this.", 'kainin', 'inf', '', 'natin = we (including you); object focus'],
    ['Gusto mo bang kumain muna bago tayo mag-usap?', 'Do you want to eat first before we talk?', 'kumain', 'inf', 'c'],
    ['Kumain ka na ba?', 'Have you eaten?', 'kumain', 'com', '', 'The everyday Filipino greeting'],
    ['Kumain po ba kayo kaninang umaga?', 'Did you eat this morning?', 'kumain', 'com', 'c'],
    ['Kinain niya ang lahat ng pagkain sa plato.', 'He/She ate all the food on the plate.', 'kinain', 'com'],
    ['Kumakain pa ba siya nang maayos?', 'Is he/she still eating properly?', 'kumakain', 'inc', 'c'],
    ['Hindi na siya kumakain mula noong isang linggo.', "He/She hasn't been eating since last week.", 'kumakain', 'inc', 'c'],
    ['Kinakain mo ba ang pagkain dito sa ward?', 'Do you eat the food here on the ward?', 'kinakain', 'inc', 'c'],
    ['Kakain na ba tayo?', 'Are we going to eat now?', 'kakain', 'con'],
    ['Kakainin ko mamaya.', "I'll eat it later.", 'kakainin', 'con'],
    ['Kakain po muna kayo bago uminom ng gamot.', "You'll eat first before taking the medicine.", 'kakain', 'con', 'c'],
    ['Tara, kain tayo!', "Come on, let's eat!", 'kain', 'root'],
    ['Kain na!', "Eat now! / Food's ready!", 'kain', 'root']
  ],
  inom: [
    ['Uminom po kayo ng maraming tubig.', 'Please drink plenty of water.', 'uminom', 'inf', 'c'],
    ['Inumin po ninyo ito tuwing gabi.', 'Take this every night.', 'inumin', 'inf', 'c'],
    ['Dapat po ninyong inumin itong gamot.', 'You should take this medicine.', 'inumin', 'inf', 'c'],
    ['Huwag kang uminom ng alak habang nasa gamot ka.', "Don't drink alcohol while you're on medication.", 'uminom', 'inf', 'c'],
    ['Ininom na po ba ninyo yung gamot?', 'Did you already take the medicine?', 'ininom', 'com', 'c'],
    ['Uminom siya ng tatlong bote ng beer kagabi.', 'He/She drank three bottles of beer last night.', 'uminom', 'com', 'c'],
    ['Ininom niya nang sabay-sabay ang lahat ng tableta.', 'He/She took all the tablets at once.', 'ininom', 'com', 'c'],
    ['Iniinom mo ba ang gamot mo araw-araw?', 'Do you take your medicine every day?', 'iniinom', 'inc', 'c'],
    ['Umiinom ka pa ba?', 'Do you still drink (alcohol)?', 'umiinom', 'inc', 'c', 'Context makes "alcohol" understood'],
    ['Araw-araw ba kayong umiinom?', 'Do you drink every day?', 'umiinom', 'inc', 'c'],
    ['Iinom ako ng kape mamaya.', "I'll drink coffee later.", 'iinom', 'con'],
    ['Iinumin ko po mamayang gabi.', "I'll take it tonight.", 'iinumin', 'con', 'c'],
    ['Iinom po ba kayo ng gamot kahit wala na kayong sintomas?', 'Will you take the medicine even when you no longer have symptoms?', 'iinom', 'con', 'c'],
    ['Inom na po ng gamot.', 'Time to take your medicine.', 'inom', 'root', 'c', 'Ward shorthand; bare root + na']
  ],
  alis: [
    ['Gusto kong umalis dito.', 'I want to leave here.', 'umalis', 'inf', 'c'],
    ['Huwag ka munang umalis.', "Don't leave yet.", 'umalis', 'inf'],
    ['Umalis siya kahapon.', 'He/She left yesterday.', 'umalis', 'com'],
    ['Umalis siya ng bahay nang hindi nagpapaalam.', 'He/She left the house without telling anyone.', 'umalis', 'com', 'c'],
    ['Umaalis siya tuwing gabi at hindi alam kung saan pumupunta.', 'He/She leaves every night and no one knows where he/she goes.', 'umaalis', 'inc', 'c'],
    ['Aalis na po ako.', "I'll be leaving now.", 'aalis', 'con'],
    ['Kailan po kayo aalis sa ospital?', 'When will you leave the hospital?', 'aalis', 'con', 'c'],
    ['Alis na!', 'Go away! / Leave!', 'alis', 'root', 'c', 'Often heard from an agitated patient']
  ],
  punta: [
    ['Puwede ka bang pumunta sa klinika bukas?', 'Can you come to the clinic tomorrow?', 'pumunta', 'inf', 'c'],
    ['Pumunta ako sa ospital kahapon.', 'I went to the hospital yesterday.', 'pumunta', 'com'],
    ['Saan ka pumunta noong nawala ka?', 'Where did you go when you went missing?', 'pumunta', 'com', 'c'],
    ['Pumupunta ka pa ba sa simbahan?', 'Do you still go to church?', 'pumupunta', 'inc', 'c'],
    ['Pupunta kami sa ospital bukas.', 'We will go to the hospital tomorrow.', 'pupunta', 'con'],
    ['Pupunta po ba kayo sa follow-up sa susunod na buwan?', 'Will you come to the follow-up next month?', 'pupunta', 'con', 'c'],
    ['Punta ka dito.', 'Come here.', 'punta', 'root']
  ],
  dating: [
    ['Ano ang nangyari bago siya dumating dito?', 'What happened before he/she arrived here?', 'dumating', 'inf', 'c', 'After "bago" the infinitive is used'],
    ['Dumating na ang doktor.', 'The doctor has arrived.', 'dumating', 'com'],
    ['Anong oras kayo dumating sa ER?', 'What time did you arrive at the ER?', 'dumating', 'com', 'c'],
    ['Dumarating ang mga boses tuwing gabi.', 'The voices come every night.', 'dumarating', 'inc', 'c', 'd between vowels often becomes r: dumarating; dumadating is also heard'],
    ['Dumadating ba ang pamilya mo para dalawin ka?', 'Does your family come to visit you?', 'dumadating', 'inc', 'c'],
    ['Darating ang asawa niya mamaya.', 'His/Her spouse will arrive later.', 'darating', 'con', '', 'darating (d→r) is the usual spoken form'],
    ['Darating po ba ang bantay ninyo bukas?', 'Will your companion come tomorrow?', 'darating', 'con', 'c', 'bantay = the family member who stays with the patient']
  ],
  uwi: [
    ['Gusto ko nang umuwi.', 'I want to go home now.', 'umuwi', 'inf', 'c'],
    ['Hindi pa po kayo puwedeng umuwi.', "You can't go home yet.", 'umuwi', 'inf', 'c'],
    ['Umuwi siya nang lasing kagabi.', 'He/She came home drunk last night.', 'umuwi', 'com', 'c'],
    ['Umuuwi ka ba sa inyo tuwing weekend?', 'Do you go home to your family on weekends?', 'umuuwi', 'inc'],
    ['Kailan po ako uuwi?', 'When will I go home?', 'uuwi', 'con', 'c'],
    ['Uuwi ka na bukas kung maayos ang kondisyon mo.', "You'll go home tomorrow if your condition is stable.", 'uuwi', 'con', 'c'],
    ['Uwi na tayo.', "Let's go home.", 'uwi', 'root']
  ],
  balik: [
    ['Puwede ka bang bumalik sa Lunes?', 'Can you come back on Monday?', 'bumalik', 'inf', 'c'],
    ['Bumalik kayo sa susunod na linggo.', 'Come back next week.', 'bumalik', 'inf', 'c'],
    ['Ibalik mo ang gamot sa nurse.', 'Return the medicine to the nurse.', 'ibalik', 'inf', 'c'],
    ['Bumalik ang mga sintomas noong tumigil siya sa gamot.', 'The symptoms came back when he/she stopped the medicine.', 'bumalik', 'com', 'c'],
    ['Ibinalik niya ang pera.', 'He/She returned the money.', 'ibinalik', 'com'],
    ['Bumabalik ang takot tuwing gabi.', 'The fear keeps coming back at night.', 'bumabalik', 'inc', 'c'],
    ['Ibinabalik ko ang susi pagkatapos ko itong gamitin.', 'I return the key after using it.', 'ibinabalik', 'inc'],
    ['Babalik po ako bukas para tingnan kayo.', "I'll come back tomorrow to check on you.", 'babalik', 'con', 'c'],
    ['Ibabalik ko ang libro bukas.', "I'll return the book tomorrow.", 'ibabalik', 'con'],
    ['Balik ka ha?', 'Come back, okay?', 'balik', 'root']
  ],
  pasok: [
    ['Pumasok po kayo.', 'Please come in.', 'pumasok', 'inf'],
    ['Hindi ko na kayang pumasok sa trabaho.', 'I can no longer manage to go to work.', 'pumasok', 'inf', 'c'],
    ['Pumasok siya sa kuwarto nang hindi kumakatok.', 'He/She entered the room without knocking.', 'pumasok', 'com'],
    ['Kailan ka huling pumasok sa eskuwela?', 'When did you last go to school?', 'pumasok', 'com', 'c'],
    ['Pumapasok ka pa ba sa trabaho?', 'Are you still going to work?', 'pumapasok', 'inc', 'c'],
    ['Papasok ako bukas kahit masama ang pakiramdam ko.', "I'll go to work tomorrow even though I feel unwell.", 'papasok', 'con'],
    ['Pasok!', 'Come in!', 'pasok', 'root']
  ],
  labas: [
    ['Ayaw niyang lumabas ng bahay.', "He/She doesn't want to leave the house.", 'lumabas', 'inf', 'c'],
    ['Ilabas mo ang basura.', 'Take out the trash.', 'ilabas', 'inf'],
    ['Lumabas siya nang walang damit sa kalsada.', 'He/She went out on the street without clothes.', 'lumabas', 'com', 'c'],
    ['Hindi na siya lumalabas ng kuwarto.', 'He/She no longer leaves the room.', 'lumalabas', 'inc', 'c'],
    ['Lumalabas ang galit niya kapag lasing siya.', "His/Her anger comes out when he/she's drunk.", 'lumalabas', 'inc', 'c'],
    ['Lalabas lang ako sandali.', "I'll just step out for a moment.", 'lalabas', 'con'],
    ['Ilalabas ka namin para maglakad-lakad mamaya.', "We'll take you out for a short walk later.", 'ilalabas', 'con', 'c'],
    ['Labas!', 'Get out!', 'labas', 'root']
  ],
  sakay: [
    ['Tulungan natin siyang sumakay sa wheelchair.', "Let's help him/her get onto the wheelchair.", 'sumakay', 'inf', 'c'],
    ['Sumakay kami ng dyip.', 'We rode a jeepney.', 'sumakay', 'com'],
    ['Sumasakay ako ng tricycle papunta sa trabaho.', 'I take a tricycle to work.', 'sumasakay', 'inc'],
    ['Sasakay kami ng bus pauwi.', "We'll take the bus home.", 'sasakay', 'con'],
    ['Sakay na!', 'Hop on!', 'sakay', 'root']
  ],
  takbo: [
    ['Gusto niyang tumakbo palayo sa mga boses.', 'He/She wants to run away from the voices.', 'tumakbo', 'inf', 'c'],
    ['Tumakbo siya palabas ng bahay.', 'He/She ran out of the house.', 'tumakbo', 'com', 'c'],
    ['Tumatakbo siya tuwing umaga para gumaan ang pakiramdam.', 'He/She runs every morning to feel better.', 'tumatakbo', 'inc'],
    ['Tatakbo ako sa marathon sa Disyembre.', "I'll run in the marathon in December.", 'tatakbo', 'con'],
    ['Takbo!', 'Run!', 'takbo', 'root']
  ],
  tayo: [
    ['Tumayo po kayo.', 'Please stand up.', 'tumayo', 'inf'],
    ['Hirap ba kayong tumayo mula sa upuan?', 'Do you have difficulty standing from a chair?', 'tumayo', 'inf', 'c'],
    ['Tumayo siya nang bigla at sumigaw.', 'He/She stood up suddenly and shouted.', 'tumayo', 'com', 'c'],
    ['Tumatayo siya at umuupo nang paulit-ulit.', 'He/She keeps standing up and sitting down.', 'tumatayo', 'inc', 'c'],
    ['Tatayo lang ako sandali.', "I'll just stand for a moment.", 'tatayo', 'con'],
    ['Tayo na.', "Let's go. / Up we get.", 'tayo', 'root', '', 'tayo also means "we (including you)"']
  ],
  upo: [
    ['Umupo po kayo.', 'Please sit down.', 'umupo', 'inf'],
    ['Puwede po ba akong umupo sa tabi ninyo?', 'May I sit beside you?', 'umupo', 'inf', 'c'],
    ['Umupo siya sa sulok at hindi kumibo.', "He/She sat in the corner and didn't speak.", 'umupo', 'com', 'c'],
    ['Umuupo siya sa labas buong araw at nakatitig lang.', 'He/She sits outside all day just staring.', 'umuupo', 'inc', 'c'],
    ['Uupo muna ako at mag-uusap tayo.', "I'll sit down first and we'll talk.", 'uupo', 'con', 'c'],
    ['Upo ka muna.', 'Have a seat first.', 'upo', 'root']
  ],
  higa: [
    ['Humiga ka muna.', 'Lie down for a while.', 'humiga', 'inf'],
    ['Humiga po kayo sa kama para masuri ko kayo.', 'Please lie on the bed so I can examine you.', 'humiga', 'inf', 'c'],
    ['Humiga siya buong araw at hindi bumangon.', "He/She lay down all day and didn't get up.", 'humiga', 'com', 'c'],
    ['Humihiga ka ba agad pagkatapos kumain?', 'Do you lie down right after eating?', 'humihiga', 'inc'],
    ['Hihiga na po ako.', "I'll lie down now.", 'hihiga', 'con'],
    ['Higa ka na.', 'Lie down now.', 'higa', 'root']
  ],
  gising: [
    ['Hirap ba kayong gumising sa umaga?', 'Do you have a hard time waking up in the morning?', 'gumising', 'inf', 'c'],
    ['Gisingin mo ako kung may problema.', 'Wake me up if there is a problem.', 'gisingin', 'inf', 'c', 'gisingin = wake (someone) up, object focus'],
    ['Gumising ako nang alas-tres at hindi na nakatulog ulit.', "I woke up at three and couldn't sleep again.", 'gumising', 'com', 'c'],
    ['Gumising siyang sumisigaw kagabi.', 'He/She woke up screaming last night.', 'gumising', 'com', 'c'],
    ['Anong oras ka gumigising?', 'What time do you wake up?', 'gumigising', 'inc', 'c'],
    ['Gumigising ba kayo sa gabi nang maraming beses?', 'Do you wake up many times during the night?', 'gumigising', 'inc', 'c'],
    ['Gigising ako nang maaga bukas.', "I'll wake up early tomorrow.", 'gigising', 'con'],
    ['Gising na!', 'Wake up!', 'gising', 'root']
  ],
  bangon: [
    ['Hirap akong bumangon sa umaga.', 'I have a hard time getting up in the morning.', 'bumangon', 'inf', 'c'],
    ['Wala akong ganang bumangon.', 'I have no drive to get up.', 'bumangon', 'inf', 'c'],
    ['Bumangon siya nang alas-kuwatro at nagsimulang maglinis.', 'He/She got up at four and started cleaning.', 'bumangon', 'com', 'c'],
    ['Bumabangon ka ba para kumain?', 'Do you get up to eat?', 'bumabangon', 'inc', 'c'],
    ['Babangon na po ako, Dok.', "I'll get up now, Doc.", 'babangon', 'con'],
    ['Bangon na.', 'Get up now.', 'bangon', 'root']
  ],
  iyak: [
    ['Okay lang pong umiyak.', "It's okay to cry.", 'umiyak', 'inf', 'c'],
    ['Umiyak siya nang matagal pagkatapos ng tawag.', 'He/She cried for a long time after the call.', 'umiyak', 'com', 'c'],
    ['Kailan ka huling umiyak?', 'When did you last cry?', 'umiyak', 'com', 'c'],
    ['Madalas ka bang umiiyak?', 'Do you often cry?', 'umiiyak', 'inc', 'c'],
    ['Umiiyak siya nang walang dahilan.', 'He/She cries for no reason.', 'umiiyak', 'inc', 'c'],
    ['Baka iiyak lang ako kapag kinuwento ko.', 'I might just cry if I tell it.', 'iiyak', 'con', 'c']
  ],
  tawa: [
    ['Hindi na ako makatawa gaya ng dati.', "I can't laugh like I used to.", 'makatawa', 'inf', 'c', 'maka- = be able to'],
    ['Tumawa siya nang malakas nang mag-isa.', 'He/She laughed loudly alone.', 'tumawa', 'com', 'c'],
    ['Tumatawa siya mag-isa.', 'He/She laughs alone.', 'tumatawa', 'inc', 'c'],
    ['Tumatawa ba siya kahit walang nakakatawa?', 'Does he/she laugh even when nothing is funny?', 'tumatawa', 'inc', 'c'],
    ['Tatawa ka rin ulit balang araw.', "You'll laugh again someday.", 'tatawa', 'con', 'c']
  ],
  hinga: [
    ['Huminga ka nang malalim.', 'Take a deep breath.', 'huminga', 'inf', 'c'],
    ['Hirap po ba kayong huminga?', 'Do you have difficulty breathing?', 'huminga', 'inf', 'c'],
    ['Huminga siya nang malalim bago sumagot.', 'He/She took a deep breath before answering.', 'huminga', 'com'],
    ['Humihinga nang mabilis ang pasyente.', 'The patient is breathing fast.', 'humihinga', 'inc', 'c'],
    ['Nakakahinga ka pa ba nang maayos?', 'Can you still breathe properly?', 'nakakahinga', 'inc', 'c'],
    ['Hihinga tayo nang dahan-dahan, sabay.', "We'll breathe slowly, together.", 'hihinga', 'con', 'c'],
    ['Hinga lang. Hinga.', 'Just breathe. Breathe.', 'hinga', 'root', 'c']
  ],
  sigaw: [
    ['Huwag po kayong sumigaw, nandito lang ako.', "Please don't shout, I'm right here.", 'sumigaw', 'inf', 'c'],
    ['Sumigaw siya sa nurse kaninang umaga.', 'He/She shouted at the nurse this morning.', 'sumigaw', 'com', 'c'],
    ['Sumisigaw siya sa gabi.', 'He/She shouts at night.', 'sumisigaw', 'inc', 'c'],
    ['Sinisigawan niya ang mga kapatid niya.', 'He/She yells at his/her siblings.', 'sinisigawan', 'inc', 'c', 'sigawan = shout at (someone)'],
    ['Sisigaw ako kung hindi mo ako pakakawalan!', "I'll scream if you don't let me go!", 'sisigaw', 'con', 'c']
  ],
  kanta: [
    ['Kumanta tayo!', "Let's sing!", 'kumanta', 'inf'],
    ['Kantahin mo ang paborito mong kanta.', 'Sing your favorite song.', 'kantahin', 'inf'],
    ['Kumanta siya nang malakas sa gitna ng gabi.', 'He/She sang loudly in the middle of the night.', 'kumanta', 'com', 'c'],
    ['Kumakanta ka ba sa simbahan?', 'Do you sing at church?', 'kumakanta', 'inc'],
    ['Kakanta kami sa Pasko.', "We'll sing at Christmas.", 'kakanta', 'con'],
    ['Kanta ka naman.', 'Come on, sing one.', 'kanta', 'root']
  ],
  sayaw: [
    ['Gusto mo bang sumayaw?', 'Do you want to dance?', 'sumayaw', 'inf'],
    ['Sumayaw siya sa kalsada nang walang tugtog.', 'He/She danced in the street with no music.', 'sumayaw', 'com', 'c'],
    ['Sumasayaw sila sa pista.', 'They dance at the fiesta.', 'sumasayaw', 'inc'],
    ['Sasayaw kami sa kasal.', "We'll dance at the wedding.", 'sasayaw', 'con']
  ],
  sulat: [
    ['Isulat mo ang pangalan mo.', 'Write your name.', 'isulat', 'inf', 'c'],
    ['Puwede ka bang sumulat ng isang pangungusap?', 'Can you write one sentence?', 'sumulat', 'inf', 'c', 'MSE: written language'],
    ['Sulatan mo ako kapag may problema.', "Write to me if there's a problem.", 'sulatan', 'inf'],
    ['Sumulat siya ng liham bago siya nawala.', 'He/She wrote a letter before disappearing.', 'sumulat', 'com', 'c'],
    ['Isinulat niya ang lahat sa kuwaderno.', 'He/She wrote everything in a notebook.', 'isinulat', 'com'],
    ['Sumusulat siya ng mga mensahe para sa mga patay.', 'He/She writes messages to the dead.', 'sumusulat', 'inc', 'c'],
    ['Isinusulat ko ang mga ininom kong gamot araw-araw.', 'I write down the medicines I take every day.', 'isinusulat', 'inc', 'c'],
    ['Isusulat ko ang reseta.', "I'll write the prescription.", 'isusulat', 'con', 'c'],
    ['Susulatan kita ng sertipiko.', "I'll write you a certificate.", 'susulatan', 'con']
  ],
  basa: [
    ['Puwede mo bang basahin ito nang malakas?', 'Can you read this aloud?', 'basahin', 'inf', 'c', 'MSE: reading'],
    ['Hirap ba kayong magbasa?', 'Do you have difficulty reading?', 'magbasa', 'inf', 'c'],
    ['Nagbasa ako ng libro kagabi.', 'I read a book last night.', 'nagbasa', 'com'],
    ['Binasa mo ba ang papel na pinirmahan mo?', 'Did you read the paper you signed?', 'binasa', 'com', 'c'],
    ['Nagbabasa ako ng libro.', 'I am reading a book.', 'nagbabasa', 'inc'],
    ['Hindi na siya nagbabasa dahil hindi na siya makapag-concentrate.', "He/She no longer reads because he/she can't concentrate.", 'nagbabasa', 'inc', 'c'],
    ['Babasahin ko ang resulta ng laboratoryo mo.', "I'll read your lab results.", 'babasahin', 'con', 'c'],
    ['Magbabasa ako bukas.', "I'll read tomorrow.", 'magbabasa', 'con']
  ],
  bili: [
    ['Bumili ka ng gamot sa botika.', 'Buy the medicine at the pharmacy.', 'bumili', 'inf', 'c'],
    ['Saan ko puwedeng bilhin ito?', 'Where can I buy this?', 'bilhin', 'inf', 'c'],
    ['Ano ang binili mo?', 'What did you buy?', 'binili', 'com'],
    ['Bumili siya ng maraming gamit na hindi naman kailangan.', "He/She bought many things that weren't even needed.", 'bumili', 'com', 'c', 'Spending sprees: ask in mania'],
    ['Binibili niya lahat ng makita niya online.', 'He/She buys everything he/she sees online.', 'binibili', 'inc', 'c'],
    ['Bumibili ka pa ba ng shabu?', 'Do you still buy shabu?', 'bumibili', 'inc', 'c'],
    ['Bibilhin ko ang gamot bukas.', "I'll buy the medicine tomorrow.", 'bibilhin', 'con', 'c'],
    ['Bibili ako ng bigas pauwi.', "I'll buy rice on the way home.", 'bibili', 'con']
  ],
  sagot: [
    ['Sagutin mo ang tanong.', 'Answer the question.', 'sagutin', 'inf'],
    ["Hindi mo kailangang sumagot kung hindi ka pa handa.", "You don't have to answer if you're not ready yet.", 'sumagot', 'inf', 'c'],
    ['Hindi siya sumagot nang tawagin ko siya.', "He/She didn't answer when I called him/her.", 'sumagot', 'com', 'c'],
    ['Sinagot niya ang boses na parang may kausap.', 'He/She answered the voice as if talking to someone.', 'sinagot', 'com', 'c'],
    ['Sumasagot siya pero hindi tugma sa tanong.', 'He/She answers, but not in line with the question.', 'sumasagot', 'inc', 'c', 'Tangential or irrelevant answers'],
    ['Sinasagutan ko ang mga mensahe nila.', 'I answer their messages.', 'sinasagutan', 'inc'],
    ['Sasagutin ko lahat ng tanong ninyo mamaya.', "I'll answer all your questions later.", 'sasagutin', 'con', 'c'],
    ['Sasagot ako sa tawag mo.', "I'll answer your call.", 'sasagot', 'con']
  ],
  tawag: [
    ['Tumawag po kayo sa amin kung may mangyari.', 'Call us if anything happens.', 'tumawag', 'inf', 'c'],
    ['Tawagan mo ang nurse kung lumala ang sakit.', 'Call the nurse if the pain gets worse.', 'tawagan', 'inf', 'c'],
    ['Tumawag ang asawa niya kagabi.', 'His/Her spouse called last night.', 'tumawag', 'com'],
    ['Tinawagan ko na ang pamilya mo.', "I've already called your family.", 'tinawagan', 'com', 'c'],
    ['Tumatawag siya sa akin tuwing hatinggabi.', 'He/She calls me every midnight.', 'tumatawag', 'inc', 'c'],
    ['Tinatawagan ba kayo ng mga anak ninyo?', 'Do your children call you?', 'tinatawagan', 'inc', 'c'],
    ['Tatawagan kita mamaya.', "I'll call you later.", 'tatawagan', 'con'],
    ['Tatawag ako sa hotline kapag hindi ko na kaya.', "I'll call the hotline when I can't take it anymore.", 'tatawag', 'con', 'c', 'Safety plan language']
  ],
  tulong: [
    ['Nandito kami para tumulong.', "We're here to help.", 'tumulong', 'inf', 'c'],
    ['Tulungan mo akong tumayo.', 'Help me stand up.', 'tulungan', 'inf'],
    ['Tumulong ang mga kapitbahay nang mahulog siya.', 'The neighbors helped when he/she collapsed.', 'tumulong', 'com'],
    ['Tinulungan siya ng kapatid niyang pumunta dito.', 'His/Her sibling helped him/her come here.', 'tinulungan', 'com', 'c'],
    ['Tumutulong ba kayo sa gawaing-bahay?', 'Do you help with housework?', 'tumutulong', 'inc', 'c'],
    ['Tinutulungan ko siya sa pag-inom ng gamot.', 'I help him/her with taking the medicine.', 'tinutulungan', 'inc', 'c'],
    ['Tutulungan ka namin dito.', "We'll help you here.", 'tutulungan', 'con', 'c'],
    ['Paano kita matutulungan?', 'How can I help you?', 'matutulungan', 'con', 'c', 'ma- + -an: matulungan = be able to help'],
    ['Tulong!', 'Help!', 'tulong', 'root']
  ],
  kuha: [
    ['Kunin mo ang gamot mo sa nurse station.', 'Get your medicine at the nurse station.', 'kunin', 'inf', 'c'],
    ['Puwede ba akong kumuha ng tubig?', 'May I get some water?', 'kumuha', 'inf'],
    ['Kinuha niya ang pera.', 'He/She took the money.', 'kinuha', 'com'],
    ['Kumuha siya ng kutsilyo sa kusina.', 'He/She took a knife from the kitchen.', 'kumuha', 'com', 'c'],
    ['Kinukuha ng mga anak niya ang pensiyon niya.', 'His/Her children take his/her pension.', 'kinukuha', 'inc', 'c'],
    ['Kumukuha ba kayo ng gamot sa health center?', 'Do you get your medicine from the health center?', 'kumukuha', 'inc', 'c'],
    ['Kukuha lang po ako ng dugo ninyo.', "I'll just take some blood.", 'kukuha', 'con', 'c'],
    ['Kukunin ko ang resulta bukas.', "I'll get the result tomorrow.", 'kukunin', 'con'],
    ['Kuha mo?', 'Got it? / Understood?', 'kuha', 'root']
  ],
  gawa: [
    ['Ano ang gusto mong gawin ngayon?', 'What do you want to do now?', 'gawin', 'inf'],
    ['May binabalak ka bang gawin sa sarili mo?', 'Are you planning to do something to yourself?', 'gawin', 'inf', 'c', 'Suicide risk: plan'],
    ['Ano ang ginawa mo kahapon buong araw?', 'What did you do all day yesterday?', 'ginawa', 'com', 'c'],
    ['Gumawa siya ng gulo sa barangay.', 'He/She caused trouble in the barangay.', 'gumawa', 'com', 'c'],
    ['Ano ang ginagawa mo?', 'What are you doing?', 'ginagawa', 'inc'],
    ['Ano ang ginagawa mo kapag naririnig mo ang boses?', 'What do you do when you hear the voice?', 'ginagawa', 'inc', 'c'],
    ['Gagawin ko ang lahat para gumaling.', "I'll do everything to get better.", 'gagawin', 'con', 'c'],
    ['Gagawa tayo ng plano para sa paglabas mo.', "We'll make a plan for your discharge.", 'gagawa', 'con', 'c']
  ],
  bigay: [
    ['Ibigay mo sa akin ang kutsilyo.', 'Give me the knife.', 'ibigay', 'inf', 'c'],
    ['Puwede ba kayong magbigay ng ihi para sa test?', 'Can you give a urine sample for the test?', 'magbigay', 'inf', 'c'],
    ['Ibinigay ko na ang gamot sa nurse.', 'I already gave the medicine to the nurse.', 'ibinigay', 'com', 'c'],
    ['Nagbigay siya ng pera sa lahat ng makasalubong niya.', 'He/She gave money to everyone he/she met.', 'nagbigay', 'com', 'c'],
    ['Ibinibigay ba ninyo ang gamot sa tamang oras?', 'Do you give the medicine at the right time?', 'ibinibigay', 'inc', 'c'],
    ['Nagbibigay siya ng mga gamit niya sa iba.', 'He/She has been giving away his/her belongings.', 'nagbibigay', 'inc', 'c', 'Giving away possessions: a warning sign to ask about'],
    ['Ibibigay ko ang reseta.', 'I will give the prescription.', 'ibibigay', 'con', 'c'],
    ['Magbibigay kami ng gamot para makatulog ka.', "We'll give you medicine so you can sleep.", 'magbibigay', 'con', 'c'],
    ['Bigay mo sa akin.', 'Give it to me.', 'bigay', 'root']
  ],
  luto: [
    ['Gusto mo bang magluto bukas?', 'Do you want to cook tomorrow?', 'magluto', 'inf'],
    ['Lutuin natin ang isda.', "Let's cook the fish.", 'lutuin', 'inf'],
    ['Nagluto siya para sa buong pamilya kagabi.', 'He/She cooked for the whole family last night.', 'nagluto', 'com'],
    ["Niluto niya ang ulam pero hindi niya kinain.", "He/She cooked the dish but didn't eat it.", 'niluto', 'com', 'c'],
    ['Nagluluto si Nanay.', 'Mom is cooking.', 'nagluluto', 'inc'],
    ['Nagluluto ka pa ba para sa mga anak mo?', 'Do you still cook for your children?', 'nagluluto', 'inc', 'c'],
    ['Magluluto ako ng sinigang mamaya.', "I'll cook sinigang later.", 'magluluto', 'con'],
    ['Lulutuin ko ang paborito mo pag-uwi mo.', "I'll cook your favorite when you come home.", 'lulutuin', 'con']
  ],
  linis: [
    ['Puwede mo bang linisin ang kama mo?', 'Can you clean your bed?', 'linisin', 'inf'],
    ['Kaya mo pa bang maglinis ng sarili mo?', 'Can you still clean yourself?', 'maglinis', 'inf', 'c'],
    ['Naglinis siya ng buong bahay nang alas-dos ng madaling araw.', 'He/She cleaned the whole house at two in the morning.', 'naglinis', 'com', 'c'],
    ['Nilinis ko na ang sugat.', "I've cleaned the wound.", 'nilinis', 'com', 'c'],
    ['Naglilinis ka pa ba ng bahay?', 'Do you still clean the house?', 'naglilinis', 'inc', 'c'],
    ['Nililinis niya ang kamay niya nang paulit-ulit.', 'He/She cleans his/her hands over and over.', 'nililinis', 'inc', 'c'],
    ['Maglilinis ako mamaya.', "I'll clean later.", 'maglilinis', 'con'],
    ['Lilinisin ng nurse ang sugat mo araw-araw.', 'The nurse will clean your wound every day.', 'lilinisin', 'con', 'c']
  ],
  aral: [
    ['Gusto ko sanang mag-aral ulit.', 'I would like to study again.', 'mag-aral', 'inf', 'c'],
    ['Nag-aral ako ng nursing noon.', 'I studied nursing before.', 'nag-aral', 'com'],
    ['Nag-aral ba siya nang maayos bago nagkasakit?', 'Did he/she do well in school before getting sick?', 'nag-aral', 'com', 'c', 'Premorbid functioning'],
    ['Nag-aaral ako ng Tagalog.', 'I am studying Tagalog.', 'nag-aaral', 'inc'],
    ['Nag-aaral pa ba ang anak ninyo?', 'Is your child still in school?', 'nag-aaral', 'inc', 'c'],
    ['Mag-aaral ako ng medisina.', "I'll study medicine.", 'mag-aaral', 'con'],
    ['Aral muna bago laro.', 'Study first before playing.', 'aral', 'root']
  ],
  turo: [
    ['Ituro mo kung saan masakit.', 'Point to where it hurts.', 'ituro', 'inf', 'c'],
    ['Gusto ko kayong turuan ng ehersisyo sa paghinga.', 'I want to teach you a breathing exercise.', 'turuan', 'inf', 'c', 'turuan = teach (someone)'],
    ['Itinuro niya ang bintana nang tanungin ko kung nasaan ang boses.', 'He/She pointed to the window when I asked where the voice was.', 'itinuro', 'com', 'c'],
    ['Nagturo ako sa elementarya ng sampung taon.', 'I taught in elementary school for ten years.', 'nagturo', 'com'],
    ['Nagtuturo siya sa eskuwela.', 'He/She teaches at a school.', 'nagtuturo', 'inc'],
    ['Itinuturo ng nurse kung paano inumin ang gamot.', 'The nurse is teaching how to take the medicine.', 'itinuturo', 'inc', 'c'],
    ['Ituturo ko sa inyo ang mga senyales na dapat bantayan.', "I'll teach you the warning signs to watch for.", 'ituturo', 'con', 'c'],
    ['Magtuturo ako bukas.', "I'll teach tomorrow.", 'magtuturo', 'con']
  ],
  trabaho: [
    ['Gusto ko nang magtrabaho ulit.', 'I want to work again.', 'magtrabaho', 'inf', 'c'],
    ['Kaya mo na bang magtrabaho?', 'Are you able to work now?', 'magtrabaho', 'inf', 'c'],
    ['Nagtrabaho ako sa Saudi ng limang taon.', 'I worked in Saudi for five years.', 'nagtrabaho', 'com'],
    ['Nagtrabaho siya nang walang tulog ng tatlong araw.', 'He/She worked without sleep for three days.', 'nagtrabaho', 'com', 'c'],
    ['Nagtatrabaho ka ba ngayon?', 'Are you working now?', 'nagtatrabaho', 'inc', 'c'],
    ['Saan po kayo nagtatrabaho?', 'Where do you work?', 'nagtatrabaho', 'inc', 'c'],
    ['Magtatrabaho ako ulit kapag magaling na ako.', "I'll work again when I'm well.", 'magtatrabaho', 'con', 'c'],
    ['Trabaho muna.', 'Work first.', 'trabaho', 'root']
  ],
  hintay: [
    ['Maghintay po kayo sandali.', 'Please wait a moment.', 'maghintay', 'inf'],
    ['Hintayin natin ang resulta bago magdesisyon.', "Let's wait for the result before deciding.", 'hintayin', 'inf', 'c'],
    ['Naghintay siya ng tatlong oras sa ER.', 'He/She waited three hours at the ER.', 'naghintay', 'com'],
    ['Hinintay ko ang tawag niya pero hindi siya tumawag.', "I waited for his/her call but he/she didn't call.", 'hinintay', 'com'],
    ['Naghihintay ang pamilya mo sa labas.', 'Your family is waiting outside.', 'naghihintay', 'inc', 'c'],
    ['Hinihintay niya ang boses na magsalita tuwing gabi.', 'He/She waits for the voice to speak every night.', 'hinihintay', 'inc', 'c'],
    ["Maghihintay ako hanggang handa ka nang magsalita.", "I'll wait until you're ready to talk.", 'maghihintay', 'con', 'c'],
    ['Hihintayin kita dito.', "I'll wait for you here.", 'hihintayin', 'con'],
    ['Hintay lang.', 'Just a sec.', 'hintay', 'root']
  ],
  dasal: [
    ['Gusto mo bang magdasal muna?', 'Do you want to pray first?', 'magdasal', 'inf', 'c'],
    ['Nagdasal siya buong gabi at hindi natulog.', "He/She prayed all night and didn't sleep.", 'nagdasal', 'com', 'c'],
    ['Nagdadasal ako gabi-gabi.', 'I pray every night.', 'nagdadasal', 'inc'],
    ['Nagdadasal ka pa ba?', 'Do you still pray?', 'nagdadasal', 'inc', 'c', 'Spiritual coping and anhedonia'],
    ['Magdadasal ako para sa iyo.', "I'll pray for you.", 'magdadasal', 'con'],
    ['Dasal lang.', 'Just pray.', 'dasal', 'root', '', 'Common family advice; often heard before consultation']
  ],
  salita: [
    ['Magsalita ka nang dahan-dahan.', 'Speak slowly.', 'magsalita', 'inf'],
    ['Ayaw niyang magsalita mula noong Lunes.', "He/She hasn't wanted to speak since Monday.", 'magsalita', 'inf', 'c'],
    ['Nagsalita siya nang mabilis at hindi mapigilan.', "He/She spoke fast and couldn't be stopped.", 'nagsalita', 'com', 'c', 'Pressured speech'],
    ['Nagsasalita siya nang mag-isa.', 'He/She talks to himself/herself.', 'nagsasalita', 'inc', 'c'],
    ['Nagsasalita ba siya ng mga bagay na hindi makatotohanan?', "Does he/she say things that aren't realistic?", 'nagsasalita', 'inc', 'c'],
    ['Magsasalita ako sa pamilya mo tungkol dito.', "I'll speak to your family about this.", 'magsasalita', 'con', 'c'],
    ['Salita lang. Nakikinig ako.', "Go on, talk. I'm listening.", 'salita', 'root', 'c']
  ],
  tanong: [
    ['Puwede ba akong magtanong?', 'May I ask a question?', 'magtanong', 'inf'],
    ['Tanungin ninyo ang nurse kung may hindi kayo maintindihan.', "Ask the nurse if there's anything you don't understand.", 'tanungin', 'inf', 'c'],
    ['Nagtanong siya kung bakit siya nandito.', 'He/She asked why he/she is here.', 'nagtanong', 'com', 'c'],
    ['Tinanong ko siya kung may balak siyang magpakamatay.', 'I asked him/her whether he/she intends to take his/her life.', 'tinanong', 'com', 'c'],
    ['Nagtatanong ang pamilya kung kailan siya uuwi.', 'The family is asking when he/she will go home.', 'nagtatanong', 'inc', 'c'],
    ['Tinatanong niya ang parehong tanong nang paulit-ulit.', 'He/She asks the same question over and over.', 'tinatanong', 'inc', 'c'],
    ['Magtatanong ako ng ilang bagay tungkol sa tulog ninyo.', "I'll ask a few things about your sleep.", 'magtatanong', 'con', 'c'],
    ['Tatanungin ko ang kapatid mo mamaya.', "I'll ask your sibling later.", 'tatanungin', 'con', 'c'],
    ['Tanong lang po.', 'Just a question.', 'tanong', 'root']
  ],
  lakad: [
    ['Kaya mo bang maglakad nang mag-isa?', 'Can you walk on your own?', 'maglakad', 'inf', 'c'],
    ['Naglakad siya papunta sa ibang bayan nang walang pera.', 'He/She walked to another town with no money.', 'naglakad', 'com', 'c'],
    ['Naglalakad siya sa gabi nang walang direksiyon.', 'He/She walks at night aimlessly.', 'naglalakad', 'inc', 'c'],
    ['Naglalakad ka ba araw-araw bilang ehersisyo?', 'Do you walk every day as exercise?', 'naglalakad', 'inc'],
    ['Maglalakad lang tayo sa hallway sandali.', "We'll just walk in the hallway for a bit.", 'maglalakad', 'con', 'c'],
    ['Lakad na.', "Let's walk. / Go on.", 'lakad', 'root']
  ],
  laro: [
    ['Gusto mo bang maglaro ng baraha?', 'Do you want to play cards?', 'maglaro', 'inf'],
    ['Laruin natin ito.', "Let's play with this.", 'laruin', 'inf'],
    ['Naglaro siya ng basketball bago siya nahimatay.', 'He/She played basketball before fainting.', 'naglaro', 'com'],
    ['Naglalaro ang mga bata.', 'The children are playing.', 'naglalaro', 'inc'],
    ['Naglalaro ka pa ba kasama ng mga kaibigan mo?', 'Do you still play with your friends?', 'naglalaro', 'inc', 'c'],
    ['Nilalaro niya ang mga daliri niya nang paulit-ulit.', 'He/She keeps fidgeting with his/her fingers.', 'nilalaro', 'inc', 'c'],
    ['Maglalaro kami mamayang hapon.', "We'll play this afternoon.", 'maglalaro', 'con'],
    ['Laro tayo!', "Let's play!", 'laro', 'root']
  ],
  bayad: [
    ['Hindi mo kailangang magbayad para sa konsulta dito.', "You don't need to pay for the consultation here.", 'magbayad', 'inf', 'c'],
    ['Bayaran mo ang utang mo sa tindahan.', 'Pay your debt at the store.', 'bayaran', 'inf'],
    ['Nagbayad siya ng malaki sa albularyo.', 'He/She paid a lot to the folk healer.', 'nagbayad', 'com', 'c'],
    ['Binayaran ko na ang bill.', 'I already paid the bill.', 'binayaran', 'com'],
    ['Nagbabayad ka ba ng PhilHealth?', 'Do you pay PhilHealth?', 'nagbabayad', 'inc', 'c'],
    ['Binabayaran ng anak niya ang gamot niya.', 'His/Her child pays for his/her medicine.', 'binabayaran', 'inc', 'c'],
    ['Magbabayad ako bukas.', "I'll pay tomorrow.", 'magbabayad', 'con'],
    ['Babayaran ko kayo sa susunod na buwan.', "I'll pay you next month.", 'babayaran', 'con'],
    ['Bayad po.', "Here's my fare.", 'bayad', 'root', '', 'What you say handing your fare on a jeepney']
  ],
  dala: [
    ['Dalhin mo ang lahat ng gamot mo sa susunod na follow-up.', 'Bring all your medicines to the next follow-up.', 'dalhin', 'inf', 'c'],
    ['Puwede ka bang magdala ng bantay?', 'Can you bring a companion?', 'magdala', 'inf', 'c'],
    ['Sino ang nagdala sa iyo dito?', 'Who brought you here?', 'nagdala', 'com', 'c'],
    ['Dinala siya ng mga pulis sa ER.', 'He/She was brought to the ER by the police.', 'dinala', 'com', 'c'],
    ['Nagdadala ba kayo ng pagkain para sa kanya?', 'Do you bring food for him/her?', 'nagdadala', 'inc', 'c'],
    ['Dinadala niya ang kutsilyo kahit saan siya pumunta.', 'He/She carries a knife wherever he/she goes.', 'dinadala', 'inc', 'c'],
    ['Dadalhin ka namin sa ward mamaya.', "We'll bring you to the ward later.", 'dadalhin', 'con', 'c'],
    ['Magdadala ako ng pagkain bukas.', "I'll bring food tomorrow.", 'magdadala', 'con'],
    ['Dala mo ba ang reseta?', 'Did you bring the prescription?', 'dala', 'root', 'c', 'Bare root used like an adjective: "is it brought?"']
  ],
  hanap: [
    ['Tulungan kitang maghanap ng trabaho.', 'Let me help you look for a job.', 'maghanap', 'inf', 'c'],
    ['Hanapin natin ang pinakamalapit na health center.', "Let's find the nearest health center.", 'hanapin', 'inf', 'c'],
    ['Hinanap namin siya buong gabi.', 'We looked for him/her all night.', 'hinanap', 'com', 'c'],
    ['Naghanap siya ng armas sa bahay.', 'He/She looked for a weapon in the house.', 'naghanap', 'com', 'c'],
    ['Hinahanap ka ng nanay mo.', 'Your mother is looking for you.', 'hinahanap', 'inc'],
    ['Naghahanap siya ng mga nakatagong camera sa kuwarto.', 'He/She keeps looking for hidden cameras in the room.', 'naghahanap', 'inc', 'c'],
    ['Hahanapin ko ang chart mo.', "I'll look for your chart.", 'hahanapin', 'con', 'c'],
    ['Maghahanap kami ng paraan para makakuha ka ng libreng gamot.', "We'll look for a way for you to get free medicine.", 'maghahanap', 'con', 'c']
  ],
  isip: [
    ['Subukan mong mag-isip ng isang bagay na nagpapasaya sa iyo.', 'Try to think of one thing that makes you happy.', 'mag-isip', 'inf', 'c'],
    ['Isipin mo muna bago ka magdesisyon.', 'Think first before you decide.', 'isipin', 'inf'],
    ['Naisip mo na bang saktan ang sarili mo?', 'Have you ever thought of hurting yourself?', 'naisip', 'com', 'c', 'ma- + isip: naisip = it occurred to (someone)'],
    ['Nag-isip siya nang matagal bago sumagot.', 'He/She thought for a long time before answering.', 'nag-isip', 'com'],
    ['Inisip ko na wala nang kuwenta ang buhay.', 'I thought that life no longer had any worth.', 'inisip', 'com', 'c'],
    ['Ano ang iniisip mo?', 'What are you thinking about?', 'iniisip', 'inc', 'c'],
    ['Iniisip mo ba na mas mabuti pang mamatay ka na lang?', 'Do you think it would be better if you were just dead?', 'iniisip', 'inc', 'c', 'Passive death wish'],
    ['Nag-iisip ka ba nang malinaw ngayon?', 'Are you thinking clearly now?', 'nag-iisip', 'inc', 'c'],
    ['Iisipin ko ang sinabi ninyo, Dok.', "I'll think about what you said, Doc.", 'iisipin', 'con', 'c'],
    ['Mag-iisip tayo ng paraan nang sama-sama.', "We'll think of a way together.", 'mag-iisip', 'con', 'c'],
    ['Isip-isip muna.', 'Think it over first.', 'isip', 'root']
  ],
  kuwento: [
    ['Ikuwento mo nga sa akin ang nangyari.', 'Tell me what happened.', 'ikuwento', 'inf', 'c'],
    ['Puwede ka bang magkuwento tungkol sa pamilya mo?', 'Can you tell me about your family?', 'magkuwento', 'inf', 'c'],
    ['Ikinuwento niya na may sumusunod sa kanya.', 'He/She said that someone was following him/her.', 'ikinuwento', 'com', 'c'],
    ['Nagkuwento siya tungkol sa pagkabata niya.', 'He/She talked about his/her childhood.', 'nagkuwento', 'com', 'c'],
    ["Nagkukuwento siya ng mga bagay na hindi nangyari.", "He/She tells stories about things that didn't happen.", 'nagkukuwento', 'inc', 'c'],
    ['Ikinukuwento ba niya sa inyo ang mga naririnig niya?', 'Does he/she tell you about what he/she hears?', 'ikinukuwento', 'inc', 'c'],
    ['Magkukuwento ako sa inyo tungkol sa gamot na ito.', "I'll tell you about this medicine.", 'magkukuwento', 'con', 'c'],
    ['Ikukuwento ko sa iyo ang plano namin.', "I'll tell you our plan.", 'ikukuwento', 'con', 'c'],
    ['Kuwento ka naman.', 'Tell me something. / Share a story.', 'kuwento', 'root']
  ],
  pahinga: [
    ['Magpahinga ka muna.', 'Rest for a while.', 'magpahinga', 'inf'],
    ['Kailangan ninyong magpahinga at matulog nang sapat.', 'You need to rest and get enough sleep.', 'magpahinga', 'inf', 'c'],
    ['Nagpahinga siya ng isang buwan sa trabaho.', 'He/She took a month off from work.', 'nagpahinga', 'com', 'c'],
    ['Nagpapahinga ba kayo sa tanghali?', 'Do you rest at noon?', 'nagpapahinga', 'inc'],
    ['Hindi siya nagpapahinga kahit pagod na.', "He/She doesn't rest even when already tired.", 'nagpapahinga', 'inc', 'c'],
    ['Magpapahinga ako pagkatapos ng duty.', "I'll rest after duty.", 'magpapahinga', 'con'],
    ['Pahinga muna.', 'Take a break first.', 'pahinga', 'root']
  ],
  bihis: [
    ['Magbihis ka na, aalis tayo.', "Get dressed, we're leaving.", 'magbihis', 'inf'],
    ['Hindi siya nagbihis ng isang linggo.', "He/She didn't change clothes for a week.", 'nagbihis', 'com', 'c'],
    ['Nagbibihis ba siya araw-araw?', 'Does he/she change clothes every day?', 'nagbibihis', 'inc', 'c'],
    ['Nakakapagbihis ka pa ba nang mag-isa?', 'Can you still dress yourself?', 'nakakapagbihis', 'inc', 'c', 'makapag- = be able to; ongoing form nakakapag-'],
    ['Magbibihis lang ako saglit.', "I'll just get dressed for a sec.", 'magbibihis', 'con']
  ],
  lagay: [
    ['Ilagay mo dito.', 'Put it here.', 'ilagay', 'inf'],
    ['Ilagay po ninyo ang gamot sa lugar na hindi maaabot ng mga bata.', "Put the medicine where children can't reach it.", 'ilagay', 'inf', 'c'],
    ['Inilagay niya ang lahat ng gamot sa isang bote.', 'He/She put all the medicines in one bottle.', 'inilagay', 'com', 'c'],
    ['Naglagay siya ng kandado sa lahat ng pinto dahil sa takot.', 'He/She put locks on all the doors out of fear.', 'naglagay', 'com', 'c'],
    ['Inilalagay ko ang gamot sa pill box tuwing Linggo.', 'I put the medicine in the pill box every Sunday.', 'inilalagay', 'inc', 'c'],
    ["Naglalagay siya ng foil sa bintana para hindi siya ma-monitor.", "He/She puts foil on the windows so he/she can't be monitored.", 'naglalagay', 'inc', 'c'],
    ['Ilalagay ko ang pangalan mo sa listahan.', "I'll put your name on the list.", 'ilalagay', 'con'],
    ['Maglalagay kami ng IV line.', "We'll place an IV line.", 'maglalagay', 'con', 'c']
  ],
  benta: [
    ['Huwag mong ibenta ang gamot na ibinigay namin.', "Don't sell the medicine we gave you.", 'ibenta', 'inf', 'c'],
    ['Ibinenta niya ang lahat ng gamit niya.', 'He/She sold all his/her things.', 'ibinenta', 'com', 'c'],
    ['Nagbenta siya ng motor para may pambili ng droga.', 'He/She sold the motorcycle to have money for drugs.', 'nagbenta', 'com', 'c'],
    ['Nagbebenta siya ng isda sa palengke.', 'He/She sells fish at the market.', 'nagbebenta', 'inc'],
    ["Ibinebenta niya ang mga alahas ng asawa niya nang palihim.", "He/She has been secretly selling his/her spouse's jewelry.", 'ibinebenta', 'inc', 'c'],
    ['Ibebenta ko ang lupa para sa gastos sa ospital.', "I'll sell the land for the hospital expenses.", 'ibebenta', 'con'],
    ['Magbebenta ako ng kakanin bukas.', "I'll sell rice cakes tomorrow.", 'magbebenta', 'con']
  ],
  sara: [
    ['Pakisara ang pinto.', 'Please close the door.', 'pakisara', 'inf', '', 'paki- = please (do)'],
    ['Isara mo ang mata mo at huminga nang malalim.', 'Close your eyes and take a deep breath.', 'isara', 'inf', 'c'],
    ['Isinara niya ang lahat ng bintana at kurtina.', 'He/She closed all the windows and curtains.', 'isinara', 'com', 'c'],
    ['Nagsara ang tindahan nila noong isang taon.', 'Their store closed last year.', 'nagsara', 'com'],
    ['Isinasara niya ang pinto kapag naririnig niya ang boses.', 'He/She closes the door when he/she hears the voice.', 'isinasara', 'inc', 'c'],
    ['Nagsasara ang botika nang alas-otso.', 'The pharmacy closes at eight.', 'nagsasara', 'inc'],
    ['Isasara ko lang ang ilaw para makatulog ka.', "I'll just turn off the light so you can sleep.", 'isasara', 'con', 'c'],
    ['Magsasara na ang klinika.', 'The clinic is about to close.', 'magsasara', 'con'],
    ['Sara na.', 'Closed. / Close it.', 'sara', 'root']
  ],
  bukas: [
    ['Buksan mo ang bintana.', 'Open the window.', 'buksan', 'inf'],
    ['Buksan po ninyo ang bibig ninyo.', 'Please open your mouth.', 'buksan', 'inf', 'c'],
    ['Puwede ka bang magbukas ng pinto para sa akin?', 'Can you open the door for me?', 'magbukas', 'inf'],
    ['Binuksan ko ang bote ng gamot para sa kanya.', 'I opened the medicine bottle for him/her.', 'binuksan', 'com', 'c'],
    ['Nagbukas siya ng maraming utang online.', 'He/She took out many loans online.', 'nagbukas', 'com', 'c'],
    ["Binubuksan niya ang mga sulat ng iba.", "He/She opens other people's mail.", 'binubuksan', 'inc', 'c'],
    ['Nagbubukas ang OPD nang alas-otso.', 'The OPD opens at eight.', 'nagbubukas', 'inc'],
    ['Bubuksan ko ang kurtina para may liwanag.', "I'll open the curtain for some light.", 'bubuksan', 'con'],
    ['Magbubukas kami ng bagong klinika sa bayan.', "We'll open a new clinic in town.", 'magbubukas', 'con'],
    ['Bukas po ba ang klinika?', 'Is the clinic open?', 'bukas', 'root', 'c', 'bukas = open (adjective) and also "tomorrow"']
  ],
  gamit: [
    ['Puwede ko bang gamitin ang banyo?', 'May I use the bathroom?', 'gamitin', 'inf'],
    ['Huwag kang gumamit ng alak para makatulog.', "Don't use alcohol to fall asleep.", 'gumamit', 'inf', 'c'],
    ['Gumamit ka na ba ng shabu dati?', 'Have you used shabu before?', 'gumamit', 'com', 'c'],
    ['Ginamit niya ang lahat ng pera sa sugal.', 'He/She used all the money on gambling.', 'ginamit', 'com', 'c'],
    ['Gumagamit ka ba ng droga?', 'Do you use drugs?', 'gumagamit', 'inc', 'c'],
    ['Gumagamit ka pa ba?', 'Are you still using?', 'gumagamit', 'inc', 'c', 'Substances understood from context'],
    ['Ginagamit mo pa ba ang inhaler mo?', 'Do you still use your inhaler?', 'ginagamit', 'inc', 'c'],
    ['Gagamitin natin ang gamot na ito para sa tulog mo.', "We'll use this medicine for your sleep.", 'gagamitin', 'con', 'c'],
    ['Gagamit ako ng wheelchair para sa kanya.', "I'll use a wheelchair for him/her.", 'gagamit', 'con', 'c'],
    ['Gamit ko ito.', 'This is mine. / I use this.', 'gamit', 'root']
  ],
  tigil: [
    ['Gusto ko nang tumigil sa pag-inom.', 'I want to stop drinking.', 'tumigil', 'inf', 'c'],
    ['Itigil mo muna ang gamot na ito.', 'Stop this medicine for now.', 'itigil', 'inf', 'c'],
    ['Huwag kayong tumigil sa gamot nang hindi nagsasabi sa amin.', "Don't stop the medicine without telling us.", 'tumigil', 'inf', 'c'],
    ['Kailan ka tumigil sa gamot?', 'When did you stop your medicine?', 'tumigil', 'com', 'c'],
    ['Itinigil niya ang gamot dahil tumaba siya.', 'He/She stopped the medicine because he/she gained weight.', 'itinigil', 'com', 'c'],
    ['Tumitigil siya sa gamot tuwing gumagaling ang pakiramdam niya.', 'He/She stops the medicine every time he/she feels better.', 'tumitigil', 'inc', 'c'],
    ["Hindi tumitigil ang mga boses.", "The voices don't stop.", 'tumitigil', 'inc', 'c'],
    ['Titigil ako sa paninigarilyo sa Enero.', "I'll stop smoking in January.", 'titigil', 'con', 'c'],
    ['Ititigil namin ang gamot nang dahan-dahan, hindi bigla.', "We'll stop the medicine gradually, not suddenly.", 'ititigil', 'con', 'c'],
    ['Tigil!', 'Stop!', 'tigil', 'root'],
    ['Tama na, tigil na.', "That's enough, stop now.", 'tigil', 'root']
  ],
  simula: [
    ['Puwede na ba tayong magsimula?', 'Can we start now?', 'magsimula', 'inf', 'c'],
    ['Simulan natin sa dahilan kung bakit ka nandito.', "Let's start with the reason you're here.", 'simulan', 'inf', 'c'],
    ['Kailan ito nagsimula?', 'When did this start?', 'nagsimula', 'com', 'c'],
    ['Nagsimula ang mga boses pagkatapos mamatay ng tatay niya.', 'The voices started after his/her father died.', 'nagsimula', 'com', 'c'],
    ['Sinimulan niya ang gamot noong Hunyo.', 'He/She started the medicine in June.', 'sinimulan', 'com', 'c'],
    ['Nagsisimula na ulit ang mga sintomas.', 'The symptoms are starting again.', 'nagsisimula', 'inc', 'c'],
    ['Nagsisimula ang araw ko sa kape.', 'My day starts with coffee.', 'nagsisimula', 'inc'],
    ['Magsisimula tayo sa mababang dosis.', "We'll start with a low dose.", 'magsisimula', 'con', 'c'],
    ['Sisimulan ko ang gamot bukas.', "I'll start the medicine tomorrow.", 'sisimulan', 'con', 'c'],
    ['Simula pa lang ito.', 'This is just the beginning.', 'simula', 'root']
  ],
  sunod: [
    ['Sundin mo ang sinabi ng doktor.', 'Follow what the doctor said.', 'sundin', 'inf', 'c'],
    ['Puwede ka bang sumunod sa akin?', 'Can you follow me?', 'sumunod', 'inf'],
    ["Sinunod niya ang utos ng boses.", "He/She obeyed the voice's command.", 'sinunod', 'com', 'c', 'Command hallucinations'],
    ['Sumunod siya sa akin hanggang sa bahay.', 'He/She followed me all the way home.', 'sumunod', 'com', 'c'],
    ['Sinusunod mo ba ang sinasabi ng boses?', 'Do you follow what the voice says?', 'sinusunod', 'inc', 'c'],
    ['May sumusunod ba sa iyo?', 'Is someone following you?', 'sumusunod', 'inc', 'c', 'Persecutory ideas'],
    ['Sinusunod niya ang mga tagubilin sa gamot.', 'He/She follows the medication instructions.', 'sinusunod', 'inc', 'c'],
    ['Susundin ko po ang payo ninyo.', "I'll follow your advice.", 'susundin', 'con', 'c'],
    ['Susunod na po ako.', "I'll be right behind you.", 'susunod', 'con'],
    ['Sunod ka sa akin.', 'Follow me.', 'sunod', 'root']
  ],
  suka: [
    ['Gusto mo bang magsuka?', 'Do you feel like vomiting?', 'magsuka', 'inf', 'c'],
    ['Nagsuka siya kagabi.', 'He/She vomited last night.', 'nagsuka', 'com', 'c'],
    ['Nagsuka ba siya pagkatapos uminom ng mga tableta?', 'Did he/she vomit after taking the tablets?', 'nagsuka', 'com', 'c'],
    ['Nagsusuka ka ba pagkatapos kumain?', 'Do you vomit after eating?', 'nagsusuka', 'inc', 'c'],
    ['Nagsusuka siya tuwing umaga dahil sa alak.', 'He/She vomits every morning because of the alcohol.', 'nagsusuka', 'inc', 'c'],
    ["Pakiramdam ko magsusuka ako.", "I feel like I'm going to vomit.", 'magsusuka', 'con', 'c'],
    ['Suka!', '(About to) vomit!', 'suka', 'root', '', 'suka also means vinegar']
  ],
  tulog: [
    ['Subukan mong matulog nang maaga.', 'Try to sleep early.', 'matulog', 'inf', 'c'],
    ['Hindi ako makatulog.', "I can't sleep.", 'makatulog', 'inf', 'c', 'maka- = be able to'],
    ['Natulog ka ba kagabi?', 'Did you sleep last night?', 'natulog', 'com', 'c'],
    ['Natulog siya nang tatlong araw na tuloy-tuloy.', 'He/She slept for three days straight.', 'natulog', 'com', 'c'],
    ['Anong oras ka nakatulog?', 'What time did you fall asleep?', 'nakatulog', 'com', 'c'],
    ['Ilang oras ka natutulog?', 'How many hours do you sleep?', 'natutulog', 'inc', 'c'],
    ['Natutulog ka ba sa araw at gising sa gabi?', 'Do you sleep in the day and stay awake at night?', 'natutulog', 'inc', 'c'],
    ['Nakakatulog ka ba nang walang gamot?', 'Can you fall asleep without medicine?', 'nakakatulog', 'inc', 'c'],
    ['Matutulog na ako.', "I'll sleep now.", 'matutulog', 'con'],
    ['Matutulog po kayo nang mas maayos kapag ininom ninyo ito.', "You'll sleep better when you take this.", 'matutulog', 'con', 'c'],
    ['Tulog na.', 'Go to sleep. / Already asleep.', 'tulog', 'root']
  ],
  ligo: [
    ['Kailangan mo nang maligo.', 'You need to take a bath now.', 'maligo', 'inf', 'c'],
    ['Naligo ka na ba ngayong araw?', 'Have you bathed today?', 'naligo', 'com', 'c'],
    ['Huling naligo siya noong Lunes.', 'He/She last bathed on Monday.', 'naligo', 'com', 'c'],
    ['Naliligo ka pa ba araw-araw?', 'Do you still bathe every day?', 'naliligo', 'inc', 'c'],
    ['Naliligo siya ng limang beses sa isang araw.', 'He/She bathes five times a day.', 'naliligo', 'inc', 'c'],
    ['Maliligo ako pagkatapos nito.', "I'll bathe after this.", 'maliligo', 'con'],
    ['Ligo na!', 'Go take a bath!', 'ligo', 'root']
  ],
  takot: [
    ['Huwag kang matakot, nandito lang kami.', "Don't be afraid, we're right here.", 'matakot', 'inf', 'c'],
    ['Natakot ako nang makita ko siyang may hawak na kutsilyo.', 'I got scared when I saw him/her holding a knife.', 'natakot', 'com', 'c'],
    ['Natakot siya sa anino sa dingding.', 'He/She got scared of a shadow on the wall.', 'natakot', 'com', 'c'],
    ['Natatakot ka ba?', 'Are you afraid?', 'natatakot', 'inc', 'c'],
    ['Natatakot siya na may papatay sa kanya.', 'He/She is afraid someone will kill him/her.', 'natatakot', 'inc', 'c'],
    ['Ano ang kinatatakutan mo?', 'What are you afraid of?', 'kinatatakutan', 'inc', 'c', 'ka- -an focus on the thing feared'],
    ['Matatakot ang mga bata kung makita ka nilang ganito.', 'The children will be scared if they see you like this.', 'matatakot', 'con', 'c'],
    ['Takot ako sa dilim.', "I'm afraid of the dark.", 'takot', 'root', '', 'Bare root used as an adjective']
  ],
  galit: [
    ['Huwag po kayong magalit, gusto ko lang maintindihan.', "Please don't get angry, I just want to understand.", 'magalit', 'inf', 'c'],
    ['Madali ka bang magalit?', 'Do you get angry easily?', 'magalit', 'inf', 'c'],
    ['Nagalit siya nang sabihin kong kailangan niyang manatili.', 'He/She got angry when I said he/she needs to stay.', 'nagalit', 'com', 'c'],
    ['Bakit ka nagalit kagabi?', 'Why did you get angry last night?', 'nagalit', 'com', 'c'],
    ['Nagagalit siya sa maliliit na bagay.', 'He/She gets angry over small things.', 'nagagalit', 'inc', 'c'],
    ['Nagagalit ka ba sa sarili mo?', 'Are you angry at yourself?', 'nagagalit', 'inc', 'c'],
    ['Magagalit ang nanay ko kapag nalaman niya.', 'My mother will be angry when she finds out.', 'magagalit', 'con'],
    ['Galit ka ba sa akin?', 'Are you angry at me?', 'galit', 'root', 'c', 'Bare root used as an adjective']
  ],
  buhay: [
    ['Gusto mo pa bang mabuhay?', 'Do you still want to live?', 'mabuhay', 'inf', 'c'],
    ['Mahirap mabuhay nang ganito.', "It's hard to live like this.", 'mabuhay', 'inf', 'c'],
    ['Mabuhay!', 'Long live! / Welcome!', 'mabuhay', 'inf', '', 'The national cheer and greeting'],
    ['Nabuhay siya nang mag-isa sa loob ng sampung taon.', 'He/She lived alone for ten years.', 'nabuhay', 'com'],
    ['Nabubuhay siya sa tulong ng mga kapatid niya.', 'He/She lives on the support of his/her siblings.', 'nabubuhay', 'inc', 'c'],
    ['Para saan ka nabubuhay ngayon?', 'What do you live for now?', 'nabubuhay', 'inc', 'c', 'Reasons for living'],
    ['Mabubuhay ka pa nang matagal.', "You'll still live a long time.", 'mabubuhay', 'con'],
    ['Buhay pa ba siya?', 'Is he/she still alive?', 'buhay', 'root', 'c', 'Bare root used as an adjective']
  ],
  tuto: [
    ['Gusto kong matuto ng paraan para kalmahin ang sarili ko.', 'I want to learn a way to calm myself.', 'matuto', 'inf', 'c'],
    ['Natuto ako ng Tagalog sa ward.', 'I learned Tagalog on the ward.', 'natuto', 'com'],
    ['Natuto siyang magbasa noong anim na taon siya.', 'He/She learned to read at six years old.', 'natuto', 'com', 'c', 'Developmental history'],
    ['Natututo ako ng Tagalog.', 'I am learning Tagalog.', 'natututo', 'inc'],
    ['Natututo ka ba nang mabilis sa eskuwela?', 'Do you learn quickly at school?', 'natututo', 'inc'],
    ['Matututo ka ring makilala ang mga senyales.', "You'll also learn to recognize the signs.", 'matututo', 'con', 'c']
  ],
  kita: [
    ['Gusto kong makita ang pamilya ko.', 'I want to see my family.', 'makita', 'inf', 'c'],
    ['Puwede ko bang makita ang reseta ninyo?', 'May I see your prescription?', 'makita', 'inf', 'c'],
    ['Nakita mo ba ang nangyari?', 'Did you see what happened?', 'nakita', 'com'],
    ['Nakita ko siyang nakikipag-usap sa pader.', 'I saw him/her talking to the wall.', 'nakita', 'com', 'c'],
    ['Ano ang nakita mo kagabi?', 'What did you see last night?', 'nakita', 'com', 'c'],
    ["May nakikita ka bang hindi nakikita ng iba?", "Do you see things others don't see?", 'nakikita', 'inc', 'c'],
    ['Nakikita mo ba sila kahit nakapikit ka?', 'Do you see them even with your eyes closed?', 'nakikita', 'inc', 'c'],
    ['Makikita mo ang pagbabago sa loob ng dalawang linggo.', "You'll see the change within two weeks.", 'makikita', 'con', 'c'],
    ['Makikita kita bukas.', "I'll see you tomorrow.", 'makikita', 'con'],
    ['Kita tayo bukas!', 'See you tomorrow!', 'kita', 'root']
  ],
  dinig: [
    ['Gusto kong marinig ang panig mo.', 'I want to hear your side.', 'marinig', 'inf', 'c'],
    ["Hindi ko marinig ang sinasabi mo.", "I can't hear what you're saying.", 'marinig', 'inf'],
    ['Narinig mo ba ang sinabi ko?', 'Did you hear what I said?', 'narinig', 'com'],
    ['Kailan mo unang narinig ang boses?', 'When did you first hear the voice?', 'narinig', 'com', 'c'],
    ['May naririnig ka bang boses?', 'Do you hear voices?', 'naririnig', 'inc', 'c'],
    ["Naririnig mo ba sila ngayon habang nag-uusap tayo?", "Do you hear them now while we're talking?", 'naririnig', 'inc', 'c'],
    ['Ilang boses ang naririnig mo?', 'How many voices do you hear?', 'naririnig', 'inc', 'c'],
    ['Maririnig mo ang nurse kapag tinawag ka na.', "You'll hear the nurse when you're called.", 'maririnig', 'con'],
    ['Dinig ko kayo.', 'I can hear you.', 'dinig', 'root']
  ],
  patay: [
    ['Gusto mo bang mamatay?', 'Do you want to die?', 'mamatay', 'inf', 'c'],
    ['Muntik na siyang mamatay.', 'He/She almost died.', 'mamatay', 'inf', 'c'],
    ['May gusto ka bang patayin?', 'Is there anyone you want to kill?', 'patayin', 'inf', 'c', 'Violence risk; patayin = kill, object focus'],
    ['Patayin mo ang ilaw.', 'Turn off the light.', 'patayin', 'inf', '', 'patay also = switch off'],
    ['Namatay ang asawa niya noong isang taon.', 'His/Her spouse died last year.', 'namatay', 'com', 'c'],
    ["Pinatay daw ng boses ang kaibigan niya, sabi niya.", "The voice killed his/her friend, he/she says.", 'pinatay', 'com', 'c'],
    ['Pinapatay niya ang ilaw buong araw.', 'He/She keeps the lights off all day.', 'pinapatay', 'inc', 'c'],
    ["Mamamatay ako kung hindi ako lalabas dito!", "I'll die if I don't get out of here!", 'mamamatay', 'con', 'c'],
    ['Sinasabi ng boses na papatayin niya ako.', 'The voice says it will kill me.', 'papatayin', 'con', 'c'],
    ['Patay na ang tatay ko.', 'My father is dead.', 'patay', 'root', 'c', 'Bare root used as an adjective']
  ],
  kalma: [
    ['Kumalma ka muna.', 'Calm down first.', 'kumalma', 'inf', 'c'],
    ["Subukan nating kumalma nang sabay.", "Let's try to calm down together.", 'kumalma', 'inf', 'c'],
    ['Kumalma siya pagkatapos ng gamot.', 'He/She calmed down after the medicine.', 'kumalma', 'com', 'c'],
    ['Kumakalma siya kapag kausap ang nanay niya.', 'He/She calms down when talking with his/her mother.', 'kumakalma', 'inc', 'c'],
    ['Kakalma rin ang pakiramdam mo, maghintay lang tayo.', 'Your feelings will settle too, let us just wait.', 'kakalma', 'con', 'c'],
    ['Kalma lang.', 'Just stay calm.', 'kalma', 'root', 'c'],
    ['Kalma, kalma. Nandito ako.', "Easy, easy. I'm here.", 'kalma', 'root', 'c']
  ],
  tingin: [
    ['Tingnan mo ako.', 'Look at me.', 'tingnan', 'inf', 'c'],
    ['Puwede po bang tumingin ako sa mga braso ninyo?', 'May I look at your arms?', 'tumingin', 'inf', 'c'],
    ['Tumingin siya sa kisame nang matagal.', 'He/She looked at the ceiling for a long time.', 'tumingin', 'com', 'c'],
    ['Tiningnan na ba kayo ng doktor?', 'Has the doctor seen you yet?', 'tiningnan', 'com', 'c'],
    ['Tumitingin siya sa paligid na parang may hinahanap.', 'He/She looks around as if searching for something.', 'tumitingin', 'inc', 'c', 'Responding to internal stimuli'],
    ['Tinitingnan ba ninyo kung iniinom niya ang gamot?', 'Do you check whether he/she takes the medicine?', 'tinitingnan', 'inc', 'c'],
    ['Titingnan ko ang presyon ninyo.', "I'll check your blood pressure.", 'titingnan', 'con', 'c'],
    ['Titingin lang ako sandali.', "I'll just take a quick look.", 'titingin', 'con'],
    ['Tingin ka dito.', 'Look here.', 'tingin', 'root']
  ],
  sabi: [
    ['Sabihin mo sa akin kung masama ang pakiramdam mo.', 'Tell me if you feel unwell.', 'sabihin', 'inf', 'c'],
    ['Puwede mo bang sabihin ulit?', 'Can you say it again?', 'sabihin', 'inf'],
    ['Ano ang sinabi mo sa kanya?', 'What did you say to him/her?', 'sinabi', 'com'],
    ['Sinabi niya na gusto na niyang mawala.', 'He/She said he/she wants to disappear.', 'sinabi', 'com', 'c', '"mawala" is a common indirect way of voicing a death wish'],
    ['Nagsabi na ba kayo sa pamilya ninyo?', 'Have you told your family?', 'nagsabi', 'com', 'c'],
    ['Ano ang sinasabi ng boses?', 'What does the voice say?', 'sinasabi', 'inc', 'c'],
    ['Sinasabi ba ng boses na saktan mo ang sarili mo?', 'Does the voice tell you to hurt yourself?', 'sinasabi', 'inc', 'c'],
    ['Nagsasabi ka ba ng totoo sa akin?', 'Are you telling me the truth?', 'nagsasabi', 'inc', 'c'],
    ['Sasabihin ko sa inyo ang resulta bukas.', "I'll tell you the result tomorrow.", 'sasabihin', 'con', 'c'],
    ['Magsasabi ako sa nurse kapag masakit na.', "I'll tell the nurse when it hurts.", 'magsasabi', 'con', 'c'],
    ['Sabi ko sa iyo, eh.', 'I told you so.', 'sabi', 'root'],
    ['Sabi ng nanay ko, baliw daw ako.', "My mother says I'm crazy.", 'sabi', 'root', 'c', 'daw = reported speech']
  ],
  sakit: [
    ["Huwag mong saktan ang sarili mo.", "Don't hurt yourself.", 'saktan', 'inf', 'c'],
    ['Gusto mo bang saktan ang ibang tao?', 'Do you want to hurt other people?', 'saktan', 'inf', 'c'],
    ['May nanakit ba sa iyo?', 'Has anyone hurt you?', 'nanakit', 'com', 'c', 'mang- + sakit: manakit = hurt someone; completed nanakit'],
    ['Sinaktan niya ang kapatid niya kagabi.', 'He/She hurt his/her sibling last night.', 'sinaktan', 'com', 'c'],
    ['Sinasaktan ka ba ng asawa mo?', 'Does your spouse hurt you?', 'sinasaktan', 'inc', 'c'],
    ['May sumasakit ba sa iyo?', 'Does anything hurt?', 'sumasakit', 'inc', 'c', 'sumakit = to ache'],
    ['Sumasakit ang ulo ko araw-araw.', 'My head hurts every day.', 'sumasakit', 'inc', 'c'],
    ["Hindi ka namin sasaktan.", "We won't hurt you.", 'sasaktan', 'con', 'c'],
    ['Sasakit nang kaunti ang braso mo sa turok.', 'Your arm will hurt a little from the injection.', 'sasakit', 'con', 'c'],
    ['Masakit ba?', 'Does it hurt?', 'masakit', 'root', 'c', 'ma- adjective from the same root']
  ],
  usap: [
    ['Puwede ba tayong mag-usap sandali?', 'Can we talk for a moment?', 'mag-usap', 'inf', 'c'],
    ['Gusto kong kausapin ang nanay mo.', 'I want to talk to your mother.', 'kausapin', 'inf', 'c'],
    ['Nag-usap kami ng asawa ko kagabi.', 'My spouse and I talked last night.', 'nag-usap', 'com'],
    ["Kinausap ko na ang pamilya ninyo tungkol sa gamot.", "I've talked to your family about the medicine.", 'kinausap', 'com', 'c'],
    ["May kumakausap ba sa iyo na hindi mo nakikita?", "Is someone talking to you whom you can't see?", 'kumakausap', 'inc', 'c'],
    ['Nag-uusap ba kayo ng asawa mo tungkol dito?', 'Do you and your spouse talk about this?', 'nag-uusap', 'inc', 'c'],
    ['Kinakausap niya ang sarili niya sa salamin.', 'He/She talks to himself/herself in the mirror.', 'kinakausap', 'inc', 'c'],
    ["Mag-uusap tayo ulit bukas.", "We'll talk again tomorrow.", 'mag-uusap', 'con', 'c'],
    ["Kakausapin ko ang social worker para sa inyo.", "I'll talk to the social worker for you.", 'kakausapin', 'con', 'c'],
    ['Usap tayo.', "Let's talk.", 'usap', 'root', 'c', 'The name of this app']
  ],
  iwan: [
    ["Huwag mo akong iwan.", "Don't leave me.", 'iwan', 'inf', 'c'],
    ['Puwede mo bang iwan ang gamit mo sa nurse?', 'Can you leave your belongings with the nurse?', 'iwan', 'inf', 'c'],
    ['Iniwan siya ng asawa niya.', 'His/Her spouse left him/her.', 'iniwan', 'com', 'c'],
    ['Iniwan niya ang mga anak niya sa kapitbahay at umalis.', 'He/She left the children with the neighbor and went away.', 'iniwan', 'com', 'c'],
    ['Iniiwan ba ninyo siyang mag-isa sa bahay?', 'Do you leave him/her alone at home?', 'iniiwan', 'inc', 'c'],
    ["Iniiwan niya ang gamot sa ilalim ng dila.", "He/She keeps the pill under the tongue (doesn't swallow it).", 'iniiwan', 'inc', 'c', 'Cheeking medication'],
    ["Hindi ka namin iiwan.", "We won't leave you.", 'iiwan', 'con', 'c'],
    ['Iiwan ko ang numero ko sa nurse.', "I'll leave my number with the nurse.", 'iiwan', 'con', 'c']
  ],
  limot: [
    ['Baka makalimutan ko ang gamot ko.', 'I might forget my medicine.', 'makalimutan', 'inf', 'c'],
    ["Huwag mong kalimutan ang follow-up mo.", "Don't forget your follow-up.", 'kalimutan', 'inf', 'c'],
    ['Nakalimutan ko kung saan ko inilagay ang susi.', 'I forgot where I put the key.', 'nakalimutan', 'com', 'c'],
    ['Nakalimutan niya ang pangalan ng mga apo niya.', 'He/She forgot the names of his/her grandchildren.', 'nakalimutan', 'com', 'c'],
    ['Madalas mo bang nakakalimutan ang mga bagay?', 'Do you often forget things?', 'nakakalimutan', 'inc', 'c'],
    ['Nakakalimutan niyang patayin ang kalan.', 'He/She forgets to turn off the stove.', 'nakakalimutan', 'inc', 'c', 'Safety question in cognitive screening'],
    ["Baka makakalimutan ninyo, kaya isusulat ko.", "You might forget, so I'll write it down.", 'makakalimutan', 'con', 'c'],
    ['Limot ko na.', "I've forgotten. / I don't remember anymore.", 'limot', 'root']
  ],
  intindi: [
    ["Gusto kong maintindihan kung ano ang nararamdaman mo.", "I want to understand what you're feeling.", 'maintindihan', 'inf', 'c'],
    ["Hindi ko maintindihan ang sinasabi niya.", "I can't understand what he/she is saying.", 'maintindihan', 'inf', 'c'],
    ['Intindihin mo naman ako.', 'Please try to understand me.', 'intindihin', 'inf', '', 'intindihin = object-focus command'],
    ['Naintindihan mo ba ang paliwanag ko?', 'Did you understand my explanation?', 'naintindihan', 'com', 'c'],
    ['Naintindihan ko na po, Dok.', 'I understand now, Doc.', 'naintindihan', 'com', 'c'],
    ['Naiintindihan mo ba ako?', 'Do you understand me?', 'naiintindihan', 'inc', 'c'],
    ['Naiintindihan ba niya kung bakit siya nandito?', 'Does he/she understand why he/she is here?', 'naiintindihan', 'inc', 'c', 'Insight'],
    ['Maiintindihan mo rin ito sa bandang huli.', "You'll understand this eventually.", 'maiintindihan', 'con']
  ],
  alala: [
    ["Huwag kang mag-alala.", "Don't worry.", 'mag-alala', 'inf', 'c'],
    ['Normal lang na mag-alala tungkol dito.', "It's normal to worry about this.", 'mag-alala', 'inf', 'c'],
    ["Nag-alala kami nang hindi siya umuwi.", "We got worried when he/she didn't come home.", 'nag-alala', 'com', 'c'],
    ['Nag-aalala ang pamilya mo.', 'Your family is worried.', 'nag-aalala', 'inc', 'c'],
    ['Ano ang pinaka-inaalala mo ngayon?', 'What worries you most right now?', 'inaalala', 'inc', 'c'],
    ['Nag-aalala ka ba nang halos araw-araw?', 'Do you worry almost every day?', 'nag-aalala', 'inc', 'c', 'Anxiety screening'],
    ["Mag-aalala lang ang mga magulang mo kung hindi ka tatawag.", "Your parents will just worry if you don't call.", 'mag-aalala', 'con'],
    ['Alala ko pa noong bata ako...', 'I still remember when I was a child...', 'alala', 'root', '', 'alala also = remember (naaalala)']
  ],
  kilala: [
    ['Gusto kitang makilala nang mas mabuti.', 'I want to get to know you better.', 'makilala', 'inf', 'c'],
    ['Nakilala ko siya sa trabaho.', 'I met him/her at work.', 'nakilala', 'com'],
    ["Hindi niya nakilala ang sarili niyang anak.", "He/She didn't recognize his/her own child.", 'nakilala', 'com', 'c'],
    ['Nakikilala mo ba kung sino ako?', 'Do you recognize who I am?', 'nakikilala', 'inc', 'c'],
    ['Nakikilala pa ba niya ang mga kapitbahay?', 'Does he/she still recognize the neighbors?', 'nakikilala', 'inc', 'c'],
    ['Makikilala mo ang mga ibang pasyente sa group.', "You'll get to know the other patients in the group.", 'makikilala', 'con', 'c'],
    ['Kilala mo ba siya?', 'Do you know him/her?', 'kilala', 'root', '', 'Bare root used as an adjective']
  ],
  lasing: [
    ["Ayaw ko nang malasing ulit.", "I don't want to get drunk again.", 'malasing', 'inf', 'c'],
    ['Gaano ka kadalas malasing?', 'How often do you get drunk?', 'malasing', 'inf', 'c'],
    ['Nalasing siya at nakipag-away sa kapitbahay.', 'He/She got drunk and fought with the neighbor.', 'nalasing', 'com', 'c'],
    ['Kailan ka huling nalasing?', 'When did you last get drunk?', 'nalasing', 'com', 'c'],
    ['Nalalasing ka ba agad sa isang bote lang?', 'Do you get drunk quickly on just one bottle?', 'nalalasing', 'inc', 'c', 'Tolerance'],
    ["Malalasing ka kung iinom ka kasabay ng gamot.", "You'll get drunk if you drink alongside the medicine.", 'malalasing', 'con', 'c'],
    ['Lasing ba siya nang dumating?', 'Was he/she drunk when he/she arrived?', 'lasing', 'root', 'c', 'Bare root used as an adjective']
  ]
};
