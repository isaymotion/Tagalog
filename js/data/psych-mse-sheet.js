/* MSE interviewer sheet: the two-page Tagalog MSE question sheet for the OPD and wards.
   Items are either { r: 'sectionId:index' } (an existing phrase from PSYCH_SECTIONS, shown with a UT mark)
   or { tl, en, b } written for the sheet itself (b = margin badge, e.g. the DISAECGP letters).
   Formal register (po / kayo) throughout. Practice phrasings for training, not validated translations. */
window.PSYCH_MSE_SHEET = {
  id: 'mse-sheet',
  title: 'Tagalog MSE Interviewer Guide',
  subtitle: 'Mga tanong para sa psychiatric interview at Mental Status Examination · OPD at Wards · magalang na anyo (po / kayo)',
  reminder: 'Huwag kalimutan: Orientation (oras, lugar, tao) · Insight · Judgment. Obserbahan: appearance, psychomotor, attitude, speech, affect, thought process.',
  disclaimer: 'Mga practice phrasing para sa training, hindi validated translation — i-adjust sa pasyente. UT = phrase na nasa Usap Tayo.',
  pages: [
    [['opening', 'mood', 'depression'], ['suicide', 'mania'], ['hallucinations', 'behaviour']],
    [['delusions', 'violence', 'clarify'], ['substance', 'anxiety', 'closing', 'observe'], ['cognition', 'insight']]
  ],
  sections: [
    { id: 'opening', title: 'Pagbubukas at rapport', en: 'Opening', ut: true, blocks: [
      { items: [
        { tl: 'Magandang umaga po. Ako po si Dr. ____, isa po sa mga doktor dito.', en: 'Good morning. I\'m Dr. ____, one of the doctors here.', ut: true },
        { r: 'opening:1' }, { r: 'opening:3' },
        { tl: 'Marami po akong itatanong. Ang ilan po ay medyo personal. Walang maling sagot.', en: 'I will ask many questions. Some may be personal. There are no wrong answers.', ut: true },
        { r: 'opening:8' },
        { tl: 'Ano po ang nagdala sa inyo dito ngayon? Kanino pong ideya ang pumunta dito?', en: 'What brings you here today? Whose idea was it to come here?', ut: true },
        { tl: 'Ikuwento po ninyo sa akin ang nangyari. Kailan po ito nagsimula — bigla o unti-unti?', en: 'Tell me what happened. When did it start — suddenly or gradually?', ut: true },
        { r: 'cc-hpi:10' }
      ] } ],
      note: 'Bago ang mga sintomas: Kasama po ba kayo ng iba nang nangyari ito, o nag-iisa? Tulog, gana sa pagkain, gamot (iniinom pa ba? kailan tumigil?).' },

    { id: 'mood', title: 'Mood', en: 'Mood screen', blocks: [
      { items: [
        { r: 'opening:9' },
        { tl: 'Kumusta po ang inyong mood o pakiramdam nitong nakaraang dalawang linggo?', en: 'How has your mood been these past two weeks?' },
        { tl: 'Mula isa hanggang sampu, gaano po kaganda ang pakiramdam ninyo ngayon?', en: 'From one to ten, how good do you feel right now?' }
      ] } ],
      note: 'Isulat ang mood sa sariling salita ng pasyente (quote sa Tagalog + translation). Affect = ang naoobserbahan mo.' },

    { id: 'depression', title: 'Depresyon', en: 'Depression · D I S A E C G P + hopeless', blocks: [
      { items: [
        { b: 'D', tl: 'Nalulungkot po ba kayo nitong mga nakaraang araw? Madalas po ba kayong umiiyak?', en: 'Have you been sad these past days? Do you cry often?' },
        { b: 'I', tl: 'Nawalan po ba kayo ng gana o interes sa mga bagay-bagay?', en: 'Have you lost interest or pleasure in things?' },
        { b: 'S', tl: 'Kumusta po ang tulog ninyo? Ilang oras po? Mahirap po bang makatulog, o nagigising nang maaga?', en: 'How is your sleep? How many hours? Trouble falling asleep, or waking early?' },
        { b: 'A', tl: 'Kumusta po ang gana ninyo sa pagkain? Pumayat o tumaba po ba kayo?', en: 'How is your appetite? Have you lost or gained weight?' },
        { b: 'E', tl: 'Lagi po ba kayong pagod o walang lakas?', en: 'Are you always tired or without energy?' },
        { b: 'C', tl: 'Nakakapag-concentrate po ba kayo, halimbawa sa panonood ng TV o pagbabasa?', en: 'Can you concentrate, for example on watching TV or reading?' },
        { b: 'G', tl: 'Nakakaramdam po ba kayo ng pagkakonsensiya, o na wala kayong halaga? Sinisisi po ba ninyo ang sarili ninyo?', en: 'Do you feel guilty, or worthless? Do you blame yourself?' },
        { b: 'P', tl: 'May nakapansin po ba na bumagal kayo kumilos o magsalita, o hindi kayo makapirmi?', en: 'Has anyone noticed you moving or speaking more slowly, or being unable to sit still?' },
        { b: 'H', tl: 'Nawawalan na po ba kayo ng pag-asa sa hinaharap?', en: 'Are you losing hope for the future?' },
        { tl: 'Mas mabigat po ba ang pakiramdam sa umaga o sa gabi?', en: 'Do you feel worse in the morning or at night?' },
        { b: 'S', tl: 'Sa mga panahong mabigat ang inyong pakiramdam, naiisip po ba ninyo na ayaw na ninyong mabuhay, o saktan ang inyong sarili?', en: 'When you feel this heavy, do you think you don\'t want to live anymore, or of hurting yourself?', arrow: '→ Suicide' }
      ] } ] },

    { id: 'suicide', title: 'Suicide', en: 'Screen → explore. Itanong nang direkta.', risk: true, blocks: [
      { h: '1 · Screen', items: [ { r: 'suicide:0' }, { r: 'suicide:1' },
        { tl: 'Naisip na po ba ninyong wakasan ang inyong buhay? / Naisip na po ba ninyong magpakamatay?', en: 'Have you thought about ending your life? / about killing yourself?', ut: true } ] },
      { h: '2 · Kung oo — explore', items: [
        { tl: 'Gaano po katagal ito tumagal? Gaano po kadalas ninyo naiisip ito?', en: 'How long did it last? How often do you think about it?' },
        { r: 'suicide:5' },
        { tl: 'Mayroon na po ba kayong plano? Naisip na po ba ninyo kung paano ninyo ito gagawin?', en: 'Do you have a plan? Have you thought about how you would do it?', ut: true },
        { r: 'suicide:11' }, { r: 'suicide:10' },
        { tl: 'Mayroon po ba kayong maaabot na gamot, lason, lubid, kutsilyo, o baril? May pesticide po ba sa bahay?', en: 'Do you have access to pills, poison, a rope, a knife, or a gun? Is there pesticide at home?', ut: true },
        { tl: 'Sinubukan na po ba ninyong wakasan ang buhay ninyo dati? Ano po ang ginawa ninyo? Ano po ang nangyari pagkatapos?', en: 'Have you ever tried to end your life before? What did you do? What happened afterwards?', ut: true },
        { r: 'suicide:14' } ] },
      { h: '3 · Protective / closing', items: [
        { tl: 'Ano po ang pumipigil sa inyo na gawin ito? Ano po ang nagbibigay sa inyo ng dahilan para magpatuloy?', en: 'What has stopped you? What gives you a reason to keep going?', ut: true },
        { r: 'suicide:18' } ] } ],
      note: 'Idokumento: death wish → ideation → plan → intent → means → past attempts → protective factors. NCMH crisis hotline 1553.' },

    { id: 'mania', title: 'Mania / Hypomania', en: 'D S A F P I G R', blocks: [
      { items: [
        { b: 'D', tl: 'Nagkaroon na po ba kayo ng panahon na sobrang saya o sobrang sigla ninyo, higit sa karaniwan?', en: 'Have you had a period of feeling unusually happy or full of energy, more than usual?' },
        { b: 'S', tl: 'Kaunti lang po ba ang tulog ninyo pero hindi kayo napapagod?', en: 'Do you sleep very little but not feel tired?' },
        { b: 'A', tl: 'Mas mainit po ba ang ulo ninyo, o mas madaling magalit?', en: 'Are you more hot-headed, or more easily angered?' },
        { b: 'F', tl: 'Parang nag-uunahan po ba ang mga iniisip ninyo?', en: 'Do your thoughts seem to race?' },
        { b: 'P', tl: 'Sinabihan po ba kayo na masyado kayong mabilis o madaldal magsalita?', en: 'Have people told you that you talk too fast or too much?' },
        { b: 'I', tl: 'Marami po ba kayong sinimulang proyekto? Malaki po ba ang nagastos ninyo?', en: 'Have you started many projects? Spent a lot of money?' },
        { b: 'G', tl: 'Pakiramdam po ba ninyo ay may espesyal kayong kapangyarihan o misyon?', en: 'Do you feel you have special powers or a mission?' },
        { b: 'R', tl: 'May ginawa po ba kayong mapanganib na hindi ninyo karaniwang ginagawa?', en: 'Have you done anything risky that you don\'t usually do?' }
      ] } ],
      note: 'Gaano po katagal ito tumagal? (≥ 4 araw hypomania; ≥ 1 linggo o na-admit = mania)' },

    { id: 'hallucinations', title: 'Hallucinations', en: 'Perception', blocks: [
      { h: 'Screen', items: [
        { tl: 'May naririnig po ba kayong boses o tunog kahit walang tao sa paligid?', en: 'Do you hear voices or sounds even when no one is around?' },
        { tl: 'May bumubulong po ba sa inyo?', en: 'Does someone whisper to you?' },
        { tl: 'May nakikita po ba kayong hindi nakikita ng ibang tao?', en: 'Do you see things that other people don\'t see?' },
        { tl: 'May naaamoy, nalalasahan, o nararamdaman po ba kayo sa katawan na kakaiba?', en: 'Do you smell, taste, or feel anything unusual on your body?' } ] },
      { h: 'Kung oo — explore ang boses', items: [
        { tl: 'Isa lang po ba ang boses o marami? Boses po ba ng lalaki o babae?', en: 'Is it one voice or many? A man\'s voice or a woman\'s?' },
        { tl: 'Kilala po ba ninyo kung kanino?', en: 'Do you know whose voice it is?' },
        { tl: 'Ano po ang sinasabi ng boses?', en: 'What does the voice say?' },
        { tl: 'Nag-uusap po ba ang mga boses tungkol sa inyo?', en: 'Do the voices talk about you with each other?' },
        { tl: 'Pinupuna po ba nila, o kinokomentuhan ang ginagawa ninyo?', en: 'Do they criticize you, or comment on what you are doing?' },
        { tl: 'Inuutusan po ba kayo ng boses na gumawa ng mga bagay? Sinusunod po ba ninyo?', en: 'Does the voice tell you to do things? Do you obey it?', arrow: '→ command' },
        { tl: 'Saan po galing ang boses — sa loob ng ulo o sa labas, parang totoong tao?', en: 'Where does the voice come from — inside your head or outside, like a real person?' },
        { tl: 'Kailan po ito nangyayari — gising, o patulog / pagising lang?', en: 'When does it happen — while awake, or only when falling asleep / waking up?' },
        { r: 'substance:9' } ] } ],
      note: 'Obserbahan: responding to internal stimuli? Pagkakita sa namatay na kamag-anak sa panaginip o habang nagluluksa ay hindi agad hallucination.' },

    { id: 'behaviour', title: 'Galit, kilos, impulse control', en: 'Behaviour change', blocks: [
      { items: [
        { tl: 'May napansin po ba kayo na pagbabago sa inyong kilos o pag-uugali nitong mga nakaraang buwan?', en: 'Have you noticed a change in your behaviour these past months?' },
        { tl: 'Mas madali po ba kayong magalit o makipagtalo sa iba?', en: 'Do you get angry or argue with others more easily?' },
        { tl: 'May pagkakataon po ba na may nasaktan kayong ibang tao, o may nasira kayong gamit dahil sa galit?', en: 'Have you ever hurt someone, or broken things, out of anger?' },
        { tl: 'May mga nagawa po ba kayo nang biglaan, nang hindi muna nag-iisip?', en: 'Have you done things on impulse, without thinking first?' },
        { r: 'violence:5' }
      ] } ] },

    { id: 'delusions', title: 'Delusions', en: 'Thought content', blocks: [
      { items: [
        { b: 'Per', tl: 'Pakiramdam po ba ninyo ay may gustong manakit sa inyo?', en: 'Do you feel someone wants to hurt you?' },
        { b: 'Per', tl: 'May sumusunod o nagmamanman po ba sa inyo? May nagplano po ba laban sa inyo?', en: 'Is someone following or watching you? Plotting against you?' },
        { b: 'Ref', tl: 'May espesyal po bang mensahe para sa inyo ang TV, radyo, o social media?', en: 'Does the TV, radio, or social media have special messages for you?' },
        { b: 'Gr', tl: 'Mayroon po ba kayong espesyal na kapangyarihan o kakayahan na wala sa iba?', en: 'Do you have special powers or abilities that others don\'t have?' },
        { b: 'God', tl: 'Binigyan po ba kayo ng Diyos, o ng isang espiritu, ng espesyal na misyon?', en: 'Has God, or a spirit, given you a special mission?' },
        { b: 'Th', tl: 'Nababasa po ba ng ibang tao ang isip ninyo?', en: 'Can other people read your mind?' },
        { b: 'Th', tl: 'May naglalagay po ba ng mga isipin sa utak ninyo na hindi sa inyo galing? May kumukuha po ba ng mga iniisip ninyo?', en: 'Does someone put thoughts in your head that aren\'t yours? Take your thoughts away?' },
        { b: 'Ctrl', tl: 'May kumokontrol po ba sa kilos o katawan ninyo mula sa labas?', en: 'Does something from outside control your movements or body?' },
        { b: 'Jeal', tl: 'Sa tingin po ba ninyo ay nagtataksil ang asawa ninyo?', en: 'Do you believe your spouse is unfaithful?' },
        { b: 'Som', tl: 'May sakit po ba kayo sa katawan na hindi makita ng mga doktor?', en: 'Do you have an illness in your body that doctors can\'t find?' } ] },
      { h: 'Conviction at kilos', items: [
        { b: 'Proof', tl: 'Gaano po kayo kasigurado na totoo ito? May ibang paliwanag po ba?', en: 'How sure are you that this is true? Could there be another explanation?' },
        { b: 'Plan', tl: 'Ano po ang ginawa ninyo dahil dito? Ano po ang balak ninyong gawin?', en: 'What have you done because of this? What do you plan to do?' } ] } ],
      note: 'Delusion = fixed, false, hindi ibinabahagi ng kultura/relihiyon. Paniniwala ng pamilya sa kulam o engkanto ay cultural explanation, hindi delusion ng pasyente.' },

    { id: 'violence', title: 'Karahasan / homicide', en: 'Violence risk', risk: true, ut: true, blocks: [
      { items: [ { r: 'violence:0' },
        { tl: 'Sino po? Naisip na po ba ninyo kung paano? May balak po ba kayong gawin ito?', en: 'Who? Have you thought about how? Do you intend to do it?', ut: true },
        { r: 'violence:2' }, { r: 'violence:3' }, { r: 'violence:4' } ] } ],
      note: 'Kung may target: sino, paano, kailan, access sa armas — i-escalate at idokumento.' },

    { id: 'clarify', title: 'Pagpapalinaw at follow-up', en: 'Clarifying', ut: true, blocks: [
      { items: [
        { tl: 'Puwede po ba ninyong ipaliwanag pa iyan? Ano po ang ibig ninyong sabihin doon?', en: 'Can you tell me more about that? What do you mean by that?', ut: true },
        { tl: 'Gumaan po ba o lumala? Nangyari na po ba ito dati?', en: 'Has it gotten better or worse? Has this happened before?', ut: true },
        { tl: 'Paano po ito nakaapekto sa trabaho, pag-aaral, o pamilya ninyo?', en: 'How has this affected your work, studies, or family?', ut: true },
        { r: 'cc-hpi:11' },
        { tl: 'Iniinom pa po ba ninyo ang gamot ninyo? Kailan po kayo tumigil, at bakit?', en: 'Are you still taking your medicine? When did you stop, and why?' }
      ] } ] },

    { id: 'substance', title: 'Alak at droga', en: 'Substance use', ut: true, blocks: [
      { items: [
        { tl: 'Umiinom po ba kayo ng alak? Ano po — beer, gin, tuba, lambanog? Ilang bote po sa isang inuman? Ilang araw sa isang linggo?', en: 'Do you drink alcohol? What — beer, gin, tuba, lambanog? How many bottles in one sitting? How many days a week?', ut: true },
        { r: 'substance:6' }, { r: 'substance:5' },
        { tl: 'Nakagamit na po ba kayo ng droga tulad ng shabu, marijuana, o rugby? Gaano po kadalas, at kailan ang huling gamit?', en: 'Have you ever used drugs like shabu, marijuana, or rugby? How often, and when was the last time?', ut: true },
        { r: 'substance:10' }, { r: 'substance:12' }
      ] } ] },

    { id: 'anxiety', title: 'Pagkabalisa', en: 'Anxiety screen', ut: true, blocks: [
      { items: [
        { tl: 'Madalas po ba kayong mag-alala? Mahirap po bang pigilan ang pag-aalala ninyo?', en: 'Do you worry a lot? Is it hard to control the worrying?', ut: true },
        { r: 'anxiety:2' },
        { tl: 'Nagkaroon na po ba kayo ng biglaang matinding takot — bumibilis ang tibok ng puso, hinihingal, parang mamamatay kayo?', en: 'Have you had sudden attacks of intense fear — pounding heart, shortness of breath, feeling you might die?', ut: true },
        { tl: 'May mga pumapasok po ba sa isip ninyo na paulit-ulit kahit ayaw ninyo? Kailangan po bang maghugas, mag-check, o magbilang nang paulit-ulit?', en: 'Do thoughts keep coming back even if you don\'t want them? Do you have to wash, check, or count over and over?', ut: true }
      ] } ] },

    { id: 'closing', title: 'Pagtatapos', en: 'Closing', ut: true, blocks: [
      { items: [ { r: 'closing:0' }, { r: 'closing:1' }, { r: 'closing:2' },
        { tl: 'Tutulungan po namin kayong gumaling. Magkikita po ulit tayo bukas. Ingat po kayo.', en: 'We will help you get better. I will see you again tomorrow. Take care.', ut: true } ] } ] },

    { id: 'observe', title: 'Obserbahan — hindi tinatanong', en: 'Observed MSE', obs: [
      ['Appearance', 'apparent age, built, damit, grooming/hygiene (well / fairly kempt, unkempt)'],
      ['Psychomotor', 'agitation, retardation, restless, tremor, AIMs'],
      ['Attitude / eye contact', 'cooperative, guarded, suspicious, hostile; nakayuko ay maaaring paggalang, hindi agad "guarded"'],
      ['Speech', 'spontaneity, productivity, rate, volume, pressured; Taglish ay normal, hindi finding'],
      ['Affect', 'range, intensity, stability, congruence sa mood'],
      ['Thought process', 'linear/goal-directed, circumstantial, tangential, loose, FOI, blocking'],
      ['Perception', 'responding to internal stimuli?'] ] },

    { id: 'cognition', title: 'Cognition', en: 'Orientation · attention · memory', ut: true, blocks: [
      { items: [ { r: 'mse-cog:0' } ] },
      { h: 'Orientation — oras, lugar, tao', items: [
        { tl: 'Anong petsa po ngayon? Anong araw? Anong buwan at taon? Umaga, hapon, o gabi na po ba?', en: 'What is the date today? The day? Month and year? Is it morning, afternoon, or evening?', ut: true },
        { tl: 'Nasaan po tayo ngayon? Anong lugar / anong ospital po ito?', en: 'Where are we right now? What place / what hospital is this?', ut: true },
        { tl: 'Ano po ang buong pangalan ninyo? Ilang taon na po kayo? Sino po ako? Ano po ang trabaho ko dito?', en: 'What is your full name? How old are you? Who am I? What do I do here?', ut: true } ] },
      { h: 'Attention', items: [
        { tl: 'Magbilang po kayo pababa mula isandaan, bawasan ng pito tuwing bilang. (100, 93, 86, 79, 72)', en: 'Count backwards from 100 by sevens. (100, 93, 86, 79, 72)', ut: true },
        { tl: 'Sabihin po ninyo ang mga araw ng linggo nang pabaligtad, simula sa Linggo. / Ulitin po: tatlo, walo, dalawa, lima.', en: 'Say the days of the week backwards, starting from Sunday. / Repeat: 3, 8, 2, 5.', ut: true } ] },
      { h: 'Memory', items: [
        { tl: 'Tandaan po ninyo ang tatlong salitang ito: bola, puno, susi. Pakiulit po. … (pagkatapos ng 3–5 min) Ano po ang tatlong salitang pinatandaan ko?', en: 'Remember these three words: ball, tree, key. Please repeat them. … (after 3–5 min) What were the three words?', ut: true },
        { tl: 'Ano po ang kinain ninyo sa almusal? Sino po ang Pangulo ng Pilipinas ngayon?', en: 'What did you eat for breakfast? Who is the President of the Philippines now?', ut: true } ] },
      { h: 'Abstraction', items: [
        { tl: 'Paano po magkapareho ang saging at ang mangga? Ang dyip at ang traysikel?', en: 'How are a banana and a mango alike? A jeepney and a tricycle?', ut: true },
        { r: 'mse-abstract:2' } ] } ] },

    { id: 'insight', title: 'Insight at judgment', en: '', ut: true, blocks: [
      { h: 'Insight (grade 1–6)', items: [
        { tl: 'Sa tingin po ba ninyo ay may sakit kayo? Ano po sa tingin ninyo ang nangyayari sa inyo?', en: 'Do you think you are sick? What do you think is happening to you?', ut: true },
        { r: 'mse-abstract:8' },
        { tl: 'Sa tingin po ba ninyo ay makakatulong ang gamot sa inyo? Kailangan po ba ninyo ng tulong?', en: 'Do you think medicine could help you? Do you need help?', ut: true } ] },
      { h: 'Judgment', items: [ { r: 'mse-abstract:5' }, { r: 'mse-abstract:6' }, { r: 'mse-abstract:10' } ] } ],
      note: 'Isulat ang grade + maikling dahilan ng pasyente. Social judgment = tunay na desisyon bago ma-admit.' }
  ]
};
