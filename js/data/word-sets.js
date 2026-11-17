/* Word sets (3.8.0). View: js/words.js (#/words). Drill: "Word families" in js/drills.js.
   WORD_FAMILIES: one root and the words built from it. { r, en, forms: [[tl, en]], rel?: [[tl, en]] }.
     forms = words from this root; rel = related words from other roots, shown under the family, not drilled.
   WORD_LADDERS: one feeling from mild to severe. { id, en, steps: [[tl, en]] } in order, mildest first.
   WORD_SYNONYMS: the same idea in three registers. { en, deep: [..], daily: [..], mix: [..], note? }.
     deep = formal or literary Filipino (news, church, forms) · daily = what most people say · mix = Taglish or borrowed.
   Items are keyed by their text and can be edited or reordered freely.
   Drafted by Claude, pending Dr. Navarro's review. The ladders are a rough guide: people differ in how strong a word feels. */
window.WORD_FAMILIES = [
  { r: 'tulog', en: 'sleep', forms: [['matulog', 'to sleep'], ['natutulog', 'is sleeping'], ['nakatulog', 'fell asleep; was able to sleep'], ['makatulog', 'to be able to sleep'], ['patulugin', 'to put (someone) to sleep'], ['pagtulog', 'sleeping, sleep (noun)'], ['tulugan', 'a place to sleep'], ['pampatulog', 'something to help one sleep']],
    rel: [['antok', 'sleepiness'], ['puyat', 'short of sleep from staying up'], ['himbing', 'deep sleep']] },
  { r: 'kain', en: 'eat', forms: [['kumain', 'to eat'], ['kainin', 'to eat (a certain thing)'], ['pakainin', 'to feed (someone)'], ['makakain', 'to be able to eat'], ['pagkain', 'food; eating'], ['kainan', 'a place to eat; a meal together'], ['kakakain', 'has just eaten']],
    rel: [['gutom', 'hunger; hungry'], ['busog', 'full'], ['gana', 'appetite']] },
  { r: 'inom', en: 'drink', forms: [['uminom', 'to drink; to take (medicine)'], ['inumin', 'to drink (it); a drink'], ['painumin', 'to give (someone) a drink or medicine'], ['makainom', 'to be able to drink'], ['pag-inom', 'drinking; taking (medicine)'], ['inuman', 'a drinking session'], ['kakainom', 'has just drunk or taken']],
    rel: [['uhaw', 'thirst; thirsty'], ['alak', 'liquor'], ['lasing', 'drunk']] },
  { r: 'takot', en: 'fear', forms: [['matakot', 'to be afraid'], ['natatakot', 'is afraid'], ['takutin', 'to frighten (someone)'], ['nakakatakot', 'frightening'], ['katakutan', 'to fear (something)'], ['pananakot', 'threats, intimidation'], ['takot na takot', 'terrified']],
    rel: [['kaba', 'nervousness; pounding of the chest'], ['sindak', 'terror, shock']] },
  { r: 'lungkot', en: 'sadness', forms: [['malungkot', 'sad'], ['nalulungkot', 'is feeling sad'], ['kalungkutan', 'sadness (noun)'], ['nakakalungkot', 'saddening'], ['ikalungkot', 'to be saddened by'], ['lungkot na lungkot', 'very sad']],
    rel: [['lumbay', 'sorrow (deep word)'], ['iyak', 'crying'], ['pangungulila', 'missing someone; loneliness']] },
  { r: 'isip', en: 'mind, thought', forms: [['mag-isip', 'to think'], ['isipin', 'to think about (something)'], ['naiisip', 'is thinking of; comes to mind'], ['maisip', 'to occur to one'], ['pag-iisip', 'thinking; the mind'], ['kaisipan', 'thought, idea; way of thinking'], ['nag-iisip', 'is thinking; has a lot on the mind']],
    rel: [['alala', 'worry; memory'], ['malay', 'awareness, consciousness']] },
  { r: 'usap', en: 'talk', forms: [['mag-usap', 'to talk with each other'], ['kausapin', 'to talk to (someone)'], ['makipag-usap', 'to talk with, to converse'], ['pag-usapan', 'to discuss (a matter)'], ['usapan', 'conversation; agreement'], ['kausap', 'the person one is talking to'], ['pakikipag-usap', 'conversing']],
    rel: [['kuwento', 'story'], ['salita', 'word; speech']] },
  { r: 'sakit', en: 'pain, illness', forms: [['masakit', 'painful'], ['sumakit', 'to start to hurt'], ['saktan', 'to hurt (someone)'], ['nasaktan', 'got hurt'], ['magkasakit', 'to fall ill'], ['pananakit', 'aching; hurting (someone)'], ['sakitin', 'sickly']],
    rel: [['kirot', 'sharp or throbbing pain'], ['hapdi', 'stinging pain'], ['karamdaman', 'illness (deep word)']] },
  { r: 'alala', en: 'worry; remember', forms: [['mag-alala', 'to worry'], ['nag-aalala', 'is worried'], ['pag-aalala', 'worry (noun)'], ['maalala', 'to remember'], ['alalahanin', 'to keep in mind; a worry'], ['ipaalala', 'to remind'], ['paalala', 'a reminder']],
    rel: [['limot', 'forgetting'], ['balisa', 'anxious, restless']] },
  { r: 'galit', en: 'anger', forms: [['magalit', 'to get angry'], ['nagagalit', 'is angry'], ['galitin', 'to make (someone) angry'], ['kagalitan', 'to scold'], ['nakakagalit', 'infuriating'], ['ikagalit', 'to be angered by'], ['galit na galit', 'furious']],
    rel: [['inis', 'annoyance'], ['tampo', 'hurt feelings shown by going quiet'], ['poot', 'hatred, wrath (deep word)']] },
  { r: 'tulong', en: 'help', forms: [['tumulong', 'to help'], ['tulungan', 'to help (someone)'], ['matulungan', 'to be able to help (someone)'], ['makatulong', 'to be of help'], ['magtulungan', 'to help one another'], ['pagtulong', 'helping'], ['katulong', 'helper; household helper']],
    rel: [['saklolo', 'help! rescue'], ['alalay', 'support, assistance']] },
  { r: 'bili', en: 'buy', forms: [['bumili', 'to buy'], ['bilhin', 'to buy (it)'], ['bilhan', 'to buy from; to buy for'], ['ibili', 'to buy for (someone)'], ['ipambili', 'to use for buying'], ['mamili', 'to go shopping'], ['bilihin', 'goods for sale']],
    rel: [['benta', 'sale; sales'], ['bayad', 'payment']] },
  { r: 'wala', en: 'none; lost', forms: [['mawala', 'to be lost; to disappear'], ['nawala', 'got lost; disappeared'], ['nawawala', 'is missing'], ['nawalan', 'lost (something); was left without'], ['iwala', 'to lose (something)'], ['pagkawala', 'loss; disappearance']],
    rel: [['hanap', 'search'], ['kulang', 'lacking']] },
  { r: 'patay', en: 'dead', forms: [['mamatay', 'to die'], ['namatay', 'died'], ['namatayan', 'bereaved; lost someone to death'], ['patayin', 'to kill; to switch off'], ['magpakamatay', 'to take one\'s own life'], ['pagkamatay', 'the death (of someone)'], ['kamatayan', 'death']],
    rel: [['buhay', 'life; alive'], ['yumao', 'passed away (respectful)'], ['libing', 'burial']] },
  { r: 'rinig', en: 'hear', forms: [['marinig', 'to hear'], ['naririnig', 'hears; is hearing'], ['nakakarinig', 'is able to hear; hears (voices)'], ['makarinig', 'to be able to hear'], ['iparinig', 'to let (someone) hear'], ['pandinig', 'hearing (the sense)'], ['rinig na rinig', 'heard very clearly']],
    rel: [['kinig', 'listen (root of makinig)'], ['bulong', 'whisper'], ['boses', 'voice']] },
  { r: 'kita', en: 'see', forms: [['makita', 'to see'], ['nakikita', 'sees; is seeing'], ['makakita', 'to be able to see'], ['ipakita', 'to show'], ['magkita', 'to see each other, to meet'], ['magpakita', 'to appear, to show oneself'], ['pagkikita', 'a meeting']],
    rel: [['tingin', 'look; opinion'], ['paningin', 'eyesight'], ['anino', 'shadow']] }
];
window.WORD_LADDERS = [
  { id: 'lungkot', en: 'Sadness', steps: [['matamlay', 'low, listless'], ['malungkot', 'sad'], ['lungkot na lungkot', 'very sad'], ['nagdadalamhati', 'grieving, in anguish'], ['wala nang pag-asa', 'without hope']] },
  { id: 'takot', en: 'Fear', steps: [['nag-aalala', 'worried'], ['kinakabahan', 'nervous, chest pounding'], ['natatakot', 'afraid'], ['takot na takot', 'terrified'], ['nasindak', 'struck with terror']] },
  { id: 'galit', en: 'Anger', steps: [['naiinis', 'annoyed'], ['nabubuwisit', 'fed up (casual)'], ['galit', 'angry'], ['galit na galit', 'furious'], ['nagwawala', 'raging, out of control']] },
  { id: 'pagod', en: 'Tiredness', steps: [['medyo pagod', 'a bit tired'], ['pagod', 'tired'], ['pagod na pagod', 'exhausted'], ['hapong-hapo', 'worn out, spent'], ['bagsak', 'wiped out (casual)']] },
  { id: 'saya', en: 'Happiness', steps: [['panatag', 'at ease'], ['masaya', 'happy'], ['masayang-masaya', 'very happy'], ['tuwang-tuwa', 'overjoyed'], ['sobra-sobra ang saya', 'far too happy (ask about sleep and energy)']] },
  { id: 'sakit', en: 'Pain', steps: [['medyo masakit', 'hurts a little'], ['masakit', 'painful'], ['sobrang sakit', 'extremely painful'], ['hindi na matiis ang sakit', 'the pain can no longer be borne']] },
  { id: 'balisa', en: 'Worry', steps: [['maraming iniisip', 'has a lot on the mind'], ['nag-aalala', 'worried'], ['balisa', 'anxious, restless'], ['hindi mapakali', 'cannot keep still'], ['natataranta', 'panicking, rattled']] },
  { id: 'hiya', en: 'Shame', steps: [['nahihiya', 'shy; embarrassed'], ['hiyang-hiya', 'deeply ashamed'], ['napahiya', 'humiliated in front of others']] }
];
window.WORD_SYNONYMS = [
  { en: 'sad', deep: ['nalulumbay'], daily: ['malungkot'], mix: ['sad', 'nade-depress'] },
  { en: 'worried', deep: ['nababahala'], daily: ['nag-aalala'], mix: ['nai-stress', 'worried'] },
  { en: 'nervous', deep: ['nangangamba'], daily: ['kinakabahan'], mix: ['ninenerbiyos', 'nate-tense'] },
  { en: 'confused', deep: ['tuliro'], daily: ['naguguluhan', 'nalilito'], mix: ['confused'] },
  { en: 'lonely', deep: ['nangungulila'], daily: ['nag-iisa', 'malungkot'], mix: ['lonely'], note: 'Nangungulila is missing someone who is gone.' },
  { en: 'happy', deep: ['maligaya'], daily: ['masaya'], mix: ['happy'] },
  { en: 'tired', deep: ['hapo'], daily: ['pagod'], mix: ['tired', 'stressed'] },
  { en: 'to understand', deep: ['maunawaan'], daily: ['maintindihan'], mix: ['ma-gets'] },
  { en: 'to rest', deep: ['mamahinga'], daily: ['magpahinga'], mix: ['mag-rest'] },
  { en: 'to take one\'s own life', deep: ['magpatiwakal'], daily: ['magpakamatay'], mix: ['mag-suicide'], note: 'Magpatiwakal is the word in news reports. In an interview use the plain magpakamatay.' },
  { en: 'deep sadness, depression', deep: ['matinding kalungkutan'], daily: ['sobrang lungkot'], mix: ['depression', 'na-depress'] },
  { en: 'illness', deep: ['karamdaman'], daily: ['sakit'], mix: ['sickness'] },
  { en: 'feelings', deep: ['damdamin'], daily: ['pakiramdam', 'nararamdaman'], mix: ['feelings'], note: 'Pakiramdam is also how the body feels.' },
  { en: 'mind', deep: ['diwa', 'kaisipan'], daily: ['isip'], mix: ['utak', 'mind'], note: 'Utak is the brain; people use it for the mind in casual talk.' },
  { en: 'problem', deep: ['suliranin'], daily: ['problema'], mix: ['issue'] },
  { en: 'reason, cause', deep: ['sanhi'], daily: ['dahilan'], mix: ['reason'] },
  { en: 'question', deep: ['katanungan'], daily: ['tanong'], mix: ['question'] },
  { en: 'answer', deep: ['kasagutan', 'tugon'], daily: ['sagot'], mix: ['answer'] },
  { en: 'doctor', deep: ['manggagamot'], daily: ['doktor'], mix: ['doc'] },
  { en: 'hospital', deep: ['pagamutan'], daily: ['ospital'], mix: ['hospital'] },
  { en: 'family', deep: ['mag-anak'], daily: ['pamilya'], mix: ['family'] },
  { en: 'spouse', deep: ['kabiyak'], daily: ['asawa'], mix: ['mister', 'misis'] },
  { en: 'child (son or daughter)', deep: ['supling'], daily: ['anak'], mix: ['baby', 'kids'] },
  { en: 'work, livelihood', deep: ['hanapbuhay'], daily: ['trabaho'], mix: ['work'] },
  { en: 'money', deep: ['salapi'], daily: ['pera'], mix: ['cash'] },
  { en: 'because', deep: ['sapagkat'], daily: ['kasi', 'dahil'], mix: ['because'] },
  { en: 'but', deep: ['ngunit', 'subalit'], daily: ['pero'], mix: ['but'] },
  { en: 'maybe', deep: ['marahil'], daily: ['siguro', 'baka'], mix: ['maybe'] }
];
