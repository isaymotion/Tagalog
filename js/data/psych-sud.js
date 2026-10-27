/* Substance use disorder screening and brief intervention (Tagalog), for the OPD, wards and the MSE sheet.
   Criteria follow the DSM-5-TR substance use disorder template (11 criteria, 2 or more within 12 months;
   mild 2–3, moderate 4–5, severe 6 or more), paraphrased in Tagalog. Betel nut is an "other (or unknown)
   substance" in the manual, so the same 11 criteria apply with the substance named. Codes are ICD-10-CM
   as listed in DSM-5-TR; confirm against the manual and the hospital's coding practice.
   {s} in a line is replaced by the substance word, {w} by that substance's withdrawal symptoms.
   These are practice phrasings for training, not validated translations; confirm wording with native-speaking
   clinicians. Nothing here stores patient information. */
(function () {
  const SUB = [
    { id: 'betel', label: 'Betel nut (nganga, bunga, mama, buyo, hitso)', s: 'nganga', en: 'betel nut', unit: 'nganga (quid)',
      dsm: 'Other (or unknown) substance use disorder, betel nut', cls: 'other', codes: { mild: 'F19.10', modsev: 'F19.20', remMild: 'F19.11', remModsev: 'F19.21' },
      w: 'pagkairita, pagkabalisa, hirap mag-concentrate, pag-aantok o hirap matulog, o matinding pananabik sa nganga',
      wen: 'irritability, anxiety, poor concentration, drowsiness or insomnia, or strong craving',
      ask: [
        { tl: 'Ngumunguya po ba kayo ng nganga? Sa inyo po, nganga, bunga, mama, buyo, o hitso ang tawag dito?', en: 'Do you chew betel nut? What do you call it where you are from: nganga, bunga, mama, buyo, or hitso?', n: 'Say the local word first, then offer the others. Patients from other provinces may know only one of them: bunga or buyo (Ilocos and the north), mama (Bikol and the Visayas), hitso (Batanes and Cagayan).' },
        { tl: 'Ano po ang kasama sa nganga ninyo: bunga, dahon ng ikmo, apog? May tabako po bang kasama?', en: 'What goes into your quid: areca nut, betel leaf, lime? Is tobacco added?', n: 'Tobacco in the quid (mascada or shredded leaf) adds tobacco use disorder and raises cancer risk. Lime (apog) speeds up the nut\'s effect.' },
        { tl: 'Ilang nganga po sa isang araw? Ilang taon na po kayong ngumunguya?', en: 'How many quids a day? For how many years?', n: 'Count quids, and ask how long each is kept in the cheek; some chew one quid for an hour, others replace it every few minutes.' },
        { tl: 'Nilulunok po ba ninyo ang katas, o iniluluwa?', en: 'Do you swallow the juice, or spit it out?' },
        { tl: 'Kailan po ang huling nganga ninyo?', en: 'When was your last quid?' },
        { tl: 'May sugat, puti, o pulang bahagi po ba sa bibig ninyo na hindi gumagaling? Nahihirapan po ba kayong ibuka nang malaki ang bibig?', en: 'Do you have a sore, white or red patch in your mouth that does not heal? Is it hard to open your mouth wide?', n: 'Non-healing patches and trismus (oral submucous fibrosis) need a mouth examination and referral.' }
      ],
      psychoed: [
        { tl: 'Ang bunga ng nganga po mismo, kahit walang tabako, ay nagdudulot ng kanser sa bibig at lalamunan.', en: 'The areca nut itself, even without tobacco, causes cancer of the mouth and throat.', n: 'Areca nut is a Group 1 carcinogen (WHO/IARC) with or without tobacco.' },
        { tl: 'Kapag may tabako po ang nganga, mas mataas pa ang panganib.', en: 'When the quid has tobacco, the risk is even higher.' },
        { tl: 'Ang puting o pulang bahagi sa bibig, at ang hirap sa pagbuka ng bibig, ay maaaring maagang senyales. Kailangan po itong ipatingin.', en: 'White or red patches in the mouth, and difficulty opening the mouth, can be early signs. These need to be examined.' },
        { tl: 'Nakakasira rin po ito ng ngipin at gilagid, at nagpapabilis ng tibok ng puso.', en: 'It also damages teeth and gums and speeds up the heart.' },
        { tl: 'Nakaka-adik po ang nganga: kaya mahirap itigil, hindi dahil mahina kayo.', en: 'Betel nut is addictive; that is why it is hard to stop, not because you are weak.' },
        { tl: 'Para sa buntis, nakakasama po ito sa sanggol.', en: 'In pregnancy it harms the baby.' },
        { tl: 'Kung hindi pa po ninyo kayang itigil: alisin muna ang tabako sa nganga, bawasan ang apog, at ipatingin ang bibig kada ilang buwan.', en: 'If you cannot stop yet: take the tobacco out of the quid first, use less lime, and have your mouth checked every few months.', n: 'Harm reduction while working toward quitting.' }
      ] },
    { id: 'tobacco', label: 'Tobacco (sigarilyo, vape, mascada)', s: 'sigarilyo', en: 'tobacco', unit: 'stick',
      dsm: 'Tobacco use disorder', cls: 'tobacco', codes: { mild: 'Z72.0', modsev: 'F17.200', remMild: 'Z72.0 (no remission code for mild)', remModsev: 'F17.201' },
      w: 'pagkairita, pagkabalisa, hirap mag-concentrate, pagtaas ng gana sa pagkain, o hirap matulog',
      wen: 'irritability, anxiety, poor concentration, increased appetite, or insomnia',
      ask: [
        { tl: 'Naninigarilyo po ba kayo, o gumagamit ng vape o mascada?', en: 'Do you smoke, or use a vape or chewing tobacco?' },
        { tl: 'Ilang stick o ilang kaha po sa isang araw? Ilang taon na po?', en: 'How many sticks or how many packs a day? For how many years?', n: 'Kaha = pack of 20. Pack-years = packs per day × years.' },
        { tl: 'Gaano po katagal pagkagising kayo unang naninigarilyo?', en: 'How soon after waking do you have your first cigarette?', n: 'Within 30 minutes suggests heavier dependence.' },
        { tl: 'Kailan po ang huling sigarilyo ninyo?', en: 'When was your last cigarette?' }
      ],
      psychoed: [
        { tl: 'Ang sigarilyo po ang pangunahing sanhi ng sakit sa baga, puso, at stroke, at ng maraming kanser.', en: 'Smoking is a leading cause of lung disease, heart disease, stroke, and many cancers.' },
        { tl: 'Pagkatigil po: sa loob ng ilang linggo, gumaganda ang paghinga; sa loob ng isang taon, bumababa nang malaki ang panganib sa puso.', en: 'After stopping: breathing improves within weeks; within a year the heart risk falls a lot.' },
        { tl: 'Pinakamahirap po ang unang linggo. Ang pagkairita at pananabik ay lumilipas.', en: 'The first week is the hardest. The irritability and craving pass.' },
        { tl: 'May mga gamot po na nakakatulong, tulad ng nicotine gum o patch. Puwede po nating pag-usapan.', en: 'There are medicines that help, like nicotine gum or patches. We can talk about them.' }
      ] },
    { id: 'alcohol', label: 'Alcohol (alak)', s: 'alak', en: 'alcohol', unit: 'bote',
      dsm: 'Alcohol use disorder', cls: 'alcohol', codes: { mild: 'F10.10', modsev: 'F10.20', remMild: 'F10.11', remModsev: 'F10.21' },
      w: 'panginginig ng kamay, pagpapawis, pagkabalisa, hirap matulog, pagsusuka, o may nakikita o naririnig na kakaiba',
      wen: 'shaking hands, sweating, anxiety, insomnia, vomiting, or seeing or hearing unusual things',
      ask: [
        { tl: 'Umiinom po ba kayo ng alak? Ano po: beer, gin, tuba, lambanog?', en: 'Do you drink alcohol? What: beer, gin, tuba, lambanog?' },
        { tl: 'Ilang bote, lapad, o bilog po sa isang inuman? Ilang tagay po? Ilang araw po sa isang linggo?', en: 'How many bottles, flat bottles, or round bottles in one sitting? How many shots? How many days a week?', n: 'Lapad = 375 ml flat bottle of gin (about 10 standard drinks shared); bilog = 350 ml round bottle; tagay = one shot in the shared round; a 330 ml beer or one tagay of gin is about one standard drink.' },
        { tl: 'Kailan po ang huling inom ninyo?', en: 'When was your last drink?', n: 'Heavy daily drinkers whose last drink was 6–48 hours ago need withdrawal monitoring.' },
        { tl: 'Nagkaroon na po ba kayo ng kombulsyon o nakakita ng mga bagay na wala naman pagkatapos tumigil sa pag-inom?', en: 'Have you ever had a seizure or seen things that were not there after stopping drinking?', n: 'Past withdrawal seizures or delirium predict a more severe course.' }
      ],
      psychoed: [
        { tl: 'Ang sobrang alak po ay nakakasira ng atay, lapay, at puso, at nagpapataas ng presyon.', en: 'Too much alcohol damages the liver, pancreas, and heart, and raises blood pressure.' },
        { tl: 'Nagpapalala rin po ito ng lungkot at pagkabalisa, at nagpapahirap ng tulog, kahit parang nakakatulong sa simula.', en: 'It also worsens sadness and anxiety and disturbs sleep, even though it seems to help at first.' },
        { tl: 'Kung araw-araw po kayong umiinom nang marami, huwag po itong biglang itigil nang walang gabay ng doktor. Maaaring delikado ang withdrawal.', en: 'If you drink heavily every day, do not stop suddenly without a doctor\'s guidance. Withdrawal can be dangerous.', n: 'Seizures and delirium tremens.' },
        { tl: 'Marami po ang nakakatigil sa tulong ng gamot, kausap, at suporta ng pamilya.', en: 'Many people stop with the help of medicine, counseling, and family support.' }
      ] },
    { id: 'shabu', label: 'Shabu (methamphetamine)', s: 'shabu', en: 'shabu', unit: 'gamit',
      dsm: 'Stimulant use disorder, amphetamine-type substance (shabu)', cls: 'stimulant', codes: { mild: 'F15.10', modsev: 'F15.20', remMild: 'F15.11', remModsev: 'F15.21' },
      w: 'matinding pagod, sobrang tulog o hirap matulog, lungkot, malakas na gana sa pagkain, o masasamang panaginip',
      wen: 'severe fatigue, sleeping too much or too little, low mood, strong appetite, or bad dreams',
      ask: [
        { tl: 'Nakagamit na po ba kayo ng shabu o ibang droga? Hindi po ako manghuhusga; kailangan ko lang pong malaman para sa gamutan.', en: 'Have you used shabu or other drugs? I am not here to judge; I need to know for your treatment.', n: 'Say this before asking. Fear of the law keeps many from answering.' },
        { tl: 'Paano po ninyo ginagamit: sinisinghot, hinihithit, o tinuturok?', en: 'How do you use it: snorted, smoked, or injected?' },
        { tl: 'Gaano po kadalas? Kailan po ang huling gamit?', en: 'How often? When was the last use?' },
        { tl: 'Nagkaroon na po ba kayo ng paranoya, naririnig na boses, o nagalit nang husto habang gumagamit?', en: 'Have you had paranoia, heard voices, or become very angry while using?' }
      ],
      psychoed: [
        { tl: 'Ang shabu po ay nagdudulot ng paranoya, boses, hirap matulog, at pagkagalit, at nakakasira ng puso at ngipin.', en: 'Shabu causes paranoia, voices, insomnia, and anger, and damages the heart and teeth.' },
        { tl: 'Pagkatapos po ng gamit, dumarating ang matinding lungkot at pagod. Nandito po kami para tumulong, hindi para manghusga.', en: 'After use comes severe low mood and exhaustion. We are here to help, not to judge.' },
        { tl: 'May mga programa po para sa paggaling. Puwede po kayong i-refer kung gusto ninyo.', en: 'There are recovery programs. We can refer you if you want.', n: 'Name the nearest DOH treatment and rehabilitation center or outpatient program.' }
      ] },
    { id: 'cannabis', label: 'Cannabis (marijuana)', s: 'marijuana', en: 'cannabis', unit: 'gamit',
      dsm: 'Cannabis use disorder', cls: 'cannabis', codes: { mild: 'F12.10', modsev: 'F12.20', remMild: 'F12.11', remModsev: 'F12.21' },
      w: 'pagkairita, hirap matulog, pagkawala ng gana, o pagkabalisa',
      wen: 'irritability, insomnia, loss of appetite, or anxiety',
      ask: [
        { tl: 'Gumagamit po ba kayo ng marijuana? Gaano po kadalas, at kailan po ang huling gamit?', en: 'Do you use marijuana? How often, and when was the last use?' }
      ],
      psychoed: [
        { tl: 'Ang madalas na paggamit po ng marijuana ay nagpapataas ng panganib ng psychosis, lalo na sa mga kabataan, at nakakaapekto sa memorya at motibasyon.', en: 'Frequent marijuana use raises the risk of psychosis, especially in young people, and affects memory and motivation.' }
      ] },
    { id: 'other', label: 'Other (rugby, gamot, iba pa)', s: 'gamot o droga', en: 'the substance', unit: 'gamit',
      dsm: 'Other (or unknown) substance use disorder (name the substance)', cls: 'other', codes: { mild: 'F19.10', modsev: 'F19.20', remMild: 'F19.11', remModsev: 'F19.21' },
      w: 'hindi magandang pakiramdam sa katawan o isip',
      wen: 'physical or mental discomfort',
      ask: [
        { tl: 'Gumagamit po ba kayo ng ibang bagay para makaramdam ng iba: rugby, gamot na walang reseta, o iba pa? Ano po ito?', en: 'Do you use anything else to feel different: rugby (solvent), medicines without a prescription, or other things? What is it?' },
        { tl: 'Gaano po kadalas, at kailan po ang huling gamit?', en: 'How often, and when was the last use?' }
      ],
      psychoed: [
        { tl: 'Kahit anong gamot o droga po na ginagamit nang hindi ayon sa reseta ay maaaring makasama sa katawan at isip.', en: 'Any medicine or drug used outside its prescription can harm the body and mind.' }
      ] },
    { id: 'gambling', label: 'Gambling (sugal, sabong, online)', s: 'sugal', en: 'gambling', unit: 'pusta', gamble: true,
      dsm: 'Gambling disorder', cls: 'gambling', codes: { mild: 'F63.0', modsev: 'F63.0', remMild: 'F63.0', remModsev: 'F63.0' },
      w: 'pagkabalisa o pagkairita',
      wen: 'restlessness or irritability',
      ask: [
        { tl: 'Nagsusugal po ba kayo: sabong o e-sabong, online casino, tong-its, lotto, o pustahan sa laro?', en: 'Do you gamble: cockfighting or e-sabong, online casino, tong-its (cards), lotto, or betting on games?', n: 'Online gambling on the phone is easy to hide; ask about apps and GCash or e-wallet transfers.' },
        { tl: 'Gaano po kadalas, at magkano po ang karaniwang pusta? Magkano po ang natalo ninyo nitong nakaraang buwan?', en: 'How often, and how much is the usual bet? How much did you lose this past month?' },
        { tl: 'May utang po ba kayo dahil sa sugal? Kanino po?', en: 'Do you have debts because of gambling? To whom?', n: 'Debt to lenders (5-6) and family conflict are common presentations; ask about suicidal thoughts when debts are large.' },
        { tl: 'Nagsusugal po ba kayo sa cellphone? Ilang oras po sa isang araw?', en: 'Do you gamble on your phone? How many hours a day?' }
      ],
      psychoed: [
        { tl: 'Ang sugal po ay nagbabago ng utak katulad ng droga: ang pananabik at ang paghabol sa natalo ay parte ng sakit, hindi kahinaan ng loob.', en: 'Gambling changes the brain like a drug: the craving and the chasing of losses are part of the illness, not weakness of character.' },
        { tl: 'Laging panalo po ang bahay o ang app sa katagalan. Hindi po mababawi ang natalo sa pamamagitan ng dagdag na pusta.', en: 'The house or the app always wins in the long run. Losses are not recovered by betting more.' },
        { tl: 'Nakakatulong po ang pagpapahawak ng pera o ATM sa pinagkakatiwalaan, pag-alis ng gambling apps, at pag-block ng e-wallet sa mga site.', en: 'It helps to let a trusted person hold the money or ATM card, delete gambling apps, and block the e-wallet from gambling sites.' },
        { tl: 'Kapag malaki po ang utang at nawawalan kayo ng pag-asa, sabihin po agad sa amin. May paraan po.', en: 'When the debt is large and you are losing hope, tell us right away. There are ways out.', n: 'Gambling disorder carries a high suicide risk; screen every time.' }
      ] }
  ];

  /* Gambling disorder: 9 criteria (DSM-5-TR, paraphrased), 4 or more in 12 months; mild 4–5, moderate 6–7, severe 8–9. */
  const GAMB = [
    { n: 1, group: 'gamble', en: 'Needs to gamble with increasing amounts to get the excitement', tl: 'Kailangan po ba ninyong taasan ang pusta para maramdaman ang dating kilig o excitement?' },
    { n: 2, group: 'gamble', en: 'Restless or irritable when trying to cut down or stop', tl: 'Kapag binabawasan o itinitigil ninyo ang sugal, nagiging balisa o mainit po ba ang ulo ninyo?' },
    { n: 3, group: 'gamble', en: 'Repeated unsuccessful efforts to control, cut back, or stop', tl: 'Sinubukan na po ba ninyong kontrolin, bawasan, o itigil ang sugal, pero hindi nagtagumpay?' },
    { n: 4, group: 'gamble', en: 'Preoccupied with gambling', tl: 'Lagi po bang nasa isip ninyo ang sugal: ang nakaraang laro, ang susunod na pusta, o kung saan kukuha ng pera para dito?' },
    { n: 5, group: 'gamble', en: 'Gambles when distressed', tl: 'Nagsusugal po ba kayo kapag malungkot, balisa, stressed, o may konsensiya?' },
    { n: 6, group: 'gamble', en: 'Chasing: returns to get even after losing', tl: 'Pagkatapos matalo, bumabalik po ba kayo para bawiin ang natalo?' },
    { n: 7, group: 'gamble', en: 'Lies to conceal the extent of gambling', tl: 'Nagsisinungaling po ba kayo sa pamilya o sa iba tungkol sa dami ng sugal ninyo?' },
    { n: 8, group: 'gamble', en: 'Jeopardized or lost a relationship, job, or opportunity because of gambling', tl: 'Nalagay po ba sa panganib o nawala ang relasyon, trabaho, o pag-aaral ninyo dahil sa sugal?' },
    { n: 9, group: 'gamble', en: 'Relies on others for money to relieve gambling debts', tl: 'Umaasa po ba kayo sa iba, halimbawa pamilya o 5-6, para bayaran ang utang sa sugal?' }
  ];

  /* The 11 criteria (DSM-5-TR, paraphrased). group: control | social | risky | pharm. */
  const CRIT = [
    { n: 1, group: 'control', en: 'Larger amounts or over a longer period than intended', tl: 'Madalas po ba kayong gumagamit ng {s} nang mas marami o mas matagal kaysa sa binabalak ninyo?' },
    { n: 2, group: 'control', en: 'Persistent desire or unsuccessful efforts to cut down or control use', tl: 'Gusto po ba ninyong bawasan o itigil ang {s}? Sinubukan na po ba ninyo, pero hindi nagtagumpay?' },
    { n: 3, group: 'control', en: 'A great deal of time spent obtaining, using, or recovering', tl: 'Malaki po bang bahagi ng araw ninyo ang napupunta sa paghahanap, paggamit, o pagbawi mula sa {s}?' },
    { n: 4, group: 'control', en: 'Craving: a strong desire or urge to use', tl: 'May mga oras po ba na sobrang lakas ng pananabik ninyo sa {s} na hindi kayo makapag-isip ng iba?' },
    { n: 5, group: 'social', en: 'Failure to fulfill major role obligations at work, school, or home', tl: 'Dahil po sa {s}, nagkukulang po ba kayo sa trabaho, pag-aaral, o mga tungkulin sa bahay, halimbawa hindi nakakapasok o napapabayaan ang pamilya?' },
    { n: 6, group: 'social', en: 'Continued use despite persistent social or interpersonal problems caused or worsened by it', tl: 'Nagkakaproblema po ba kayo sa asawa, pamilya, o kaibigan dahil sa {s}, pero nagpapatuloy pa rin kayo?' },
    { n: 7, group: 'social', en: 'Important social, occupational, or recreational activities given up or reduced', tl: 'May mga gawain po ba na dati ninyong mahalaga, tulad ng trabaho, simba, libangan, o pakikisalamuha, na inihinto o binawasan ninyo dahil sa {s}?' },
    { n: 8, group: 'risky', en: 'Recurrent use in physically hazardous situations', tl: 'Gumagamit po ba kayo ng {s} sa mga delikadong pagkakataon, halimbawa habang nagmamaneho, nagtatrabaho sa makina, o nasa dagat?' },
    { n: 9, group: 'risky', en: 'Continued use despite a physical or psychological problem it causes or worsens', tl: 'Alam po ba ninyong may dulot na sakit o problema sa katawan o isip ang {s} sa inyo, pero nagpapatuloy pa rin kayo?' },
    { n: 10, group: 'pharm', en: 'Tolerance: need for more, or diminished effect with the same amount', tl: 'Kailangan po ba ninyo ng mas marami ngayon para maramdaman ang dating epekto? O mas kaunti na ang epekto kahit pareho ang dami?' },
    { n: 11, group: 'pharm', en: 'Withdrawal: the characteristic syndrome, or use to relieve or avoid it', tl: 'Kapag tumigil o nabawasan kayo sa {s}, nakakaramdam po ba kayo ng {w}? Gumagamit po ba kayo para maiwasan ito?' }
  ];
  const GROUPS = { control: 'Impaired control (1–4)', social: 'Social impairment (5–7)', risky: 'Risky use (8–9)', pharm: 'Pharmacological (10–11)', gamble: 'Gambling disorder (9 criteria; 4 or more)' };

  /* Optional validated add-on screens, paraphrased into Tagalog (not validated translations). Each item: tl, en, opts [label, points]. */
  const SCREENS = {
    alcohol: { id: 'auditc', title: 'AUDIT-C (quick alcohol screen)', note: 'Score 0–12. Positive: 4 or more (men), 3 or more (women). It flags hazardous drinking; the 11 criteria still decide the diagnosis.',
      items: [
        { tl: 'Gaano po kadalas kayong umiinom ng alak?', en: 'How often do you have a drink containing alcohol?', opts: [['Hindi kailanman', 0], ['Isang beses sa isang buwan o mas bihira', 1], ['2–4 beses sa isang buwan', 2], ['2–3 beses sa isang linggo', 3], ['4 o higit pang beses sa isang linggo', 4]] },
        { tl: 'Sa isang araw na umiinom kayo, ilang tagay o bote po ang karaniwan?', en: 'How many standard drinks do you have on a typical day when drinking?', opts: [['1–2', 0], ['3–4', 1], ['5–6', 2], ['7–9', 3], ['10 o higit pa', 4]], n: 'One standard drink ≈ 330 ml beer, one tagay (30 ml) of gin, or a small glass of wine; a lapad of gin is about 10.' },
        { tl: 'Gaano po kadalas kayong nakakainom ng anim o higit pa sa isang inuman?', en: 'How often do you have six or more drinks on one occasion?', opts: [['Hindi kailanman', 0], ['Mas bihira sa isang beses sa isang buwan', 1], ['Buwan-buwan', 2], ['Linggo-linggo', 3], ['Araw-araw o halos araw-araw', 4]] }
      ],
      bands: (n, female) => (n >= (female ? 3 : 4) ? 'positive (hazardous drinking)' : 'negative') },
    tobacco: { id: 'fager', title: 'Fagerström test (nicotine dependence)', note: 'Score 0–10: 0–2 low, 3–4 low to moderate, 5–7 moderate, 8–10 high dependence. Higher scores favor nicotine replacement or other pharmacotherapy.',
      items: [
        { tl: 'Gaano po katagal pagkagising kayo unang naninigarilyo?', en: 'How soon after waking do you smoke your first cigarette?', opts: [['Sa loob ng 5 minuto', 3], ['6–30 minuto', 2], ['31–60 minuto', 1], ['Pagkalipas ng 60 minuto', 0]] },
        { tl: 'Mahirap po bang hindi manigarilyo sa mga lugar na bawal, tulad ng simbahan, dyip, o ospital?', en: 'Is it hard not to smoke where it is forbidden, like church, a jeepney, or the hospital?', opts: [['Oo', 1], ['Hindi', 0]] },
        { tl: 'Aling sigarilyo po ang pinakamahirap iwanan?', en: 'Which cigarette would you most hate to give up?', opts: [['Ang una sa umaga', 1], ['Iba', 0]] },
        { tl: 'Ilang stick po sa isang araw?', en: 'How many cigarettes a day?', opts: [['10 o mas kaunti', 0], ['11–20', 1], ['21–30', 2], ['31 o higit pa', 3]] },
        { tl: 'Mas madalas po ba kayong naninigarilyo sa unang oras pagkagising kaysa sa buong araw?', en: 'Do you smoke more in the first hours after waking than during the rest of the day?', opts: [['Oo', 1], ['Hindi', 0]] },
        { tl: 'Naninigarilyo po ba kayo kahit may sakit kayo at nakahiga halos buong araw?', en: 'Do you smoke even when you are ill and in bed most of the day?', opts: [['Oo', 1], ['Hindi', 0]] }
      ],
      bands: (n) => (n >= 8 ? 'high dependence' : n >= 5 ? 'moderate dependence' : n >= 3 ? 'low to moderate dependence' : 'low dependence') }
  };

  /* Opening lines for any substance, and the time frame. */
  const OPEN = [
    { tl: 'Itatanong ko po ang tungkol sa nganga, sigarilyo, alak, at ibang gamot o droga. Tinatanong po namin ito sa lahat, dahil nakakaapekto ito sa kalusugan at sa gamutan.', en: 'I will ask about betel nut, cigarettes, alcohol, and other drugs. We ask everyone, because these affect health and treatment.', n: 'Normalize first. It lowers hiya.' },
    { tl: 'Hindi po ako manghuhusga, at hindi po ito ipapaalam sa pulis. Para po ito sa gamutan ninyo.', en: 'I will not judge you, and this is not reported to the police. It is for your treatment.' },
    { tl: 'Pag-usapan po natin ang nakaraang labindalawang buwan.', en: 'Let us talk about the past twelve months.', n: 'The criteria count applies to a 12-month period.' },
    { tl: 'Sa lahat po ng ito, alin po ang pinakamalaki ang epekto sa inyo?', en: 'Of all these, which one affects you the most?' }
  ];
  const REMISSION = [
    { tl: 'Kailan po ang huling gamit ninyo? Ilang buwan na po kayong tigil o kontrolado?', en: 'When was your last use? For how many months have you stopped or kept it under control?', n: '≥3 months without criteria (craving allowed) = early remission; ≥12 months = sustained remission.' },
    { tl: 'Nasa lugar po ba kayo kung saan hindi ninyo makukuha ang {s}, tulad ng ospital o rehab?', en: 'Are you somewhere you cannot get {s}, like a hospital or a rehabilitation center?', n: 'Specifier: in a controlled environment.' }
  ];

  /* Brief intervention: a guided motivational-interviewing flow (OARS; importance and confidence rulers;
     elicit–provide–elicit; change plan). Each step has lines to choose from. */
  const MI = [
    { id: 'permission', title: 'Ask permission and open', goal: 'Ask before advising. Open questions, then listen without interrupting.', lines: [
      { tl: 'Puwede po ba nating pag-usapan nang kaunti ang {s}?', en: 'May we talk a little about {s}?' },
      { tl: 'Ano po ang nagugustuhan ninyo sa {s}? Ano naman po ang hindi?', en: 'What do you like about {s}? What do you not like about it?', n: 'Decisional balance. Ask the good things first; the patient feels heard.' },
      { tl: 'Ano po ang nangyayari kapag nakagamit na kayo ng {s}?', en: 'What happens once you have used {s}?' },
      { tl: 'Paano po ito nakakaapekto sa mga bagay na mahalaga sa inyo, tulad ng pamilya, trabaho, o kalusugan?', en: 'How does it affect the things that matter to you, like family, work, or health?' }
    ] },
    { id: 'reflect', title: 'Reflect and affirm', goal: 'Say back what you heard; notice strengths. Reflect change talk when you hear it.', lines: [
      { tl: 'Kung tama po ang pagkakaintindi ko, nakakatulong ito sa stress ninyo, pero nag-aalala kayo sa bibig ninyo.', en: 'If I understand you, it helps with your stress, but you worry about your mouth.', n: 'Double-sided reflection: the good, then the concern, ending on change.' },
      { tl: 'Parang mahalaga po sa inyo na maging malusog para sa mga anak ninyo.', en: 'It sounds like being healthy for your children matters to you.' },
      { tl: 'Salamat po sa pagiging bukas. Hindi po madali ang pag-usapan ito.', en: 'Thank you for being open. This is not easy to talk about.' },
      { tl: 'Nakita ko po na sinubukan na ninyong tumigil dati. Malaki po iyon.', en: 'I see you have tried to stop before. That is a big thing.', n: 'Affirm effort, not just outcome.' },
      { tl: 'Ano po ang ibig ninyong sabihin doon?', en: 'What do you mean by that?' }
    ] },
    { id: 'rulers', title: 'Importance and confidence rulers', goal: 'Two numbers, then ask why not lower: the answer is change talk.', lines: [
      { tl: 'Mula zero hanggang sampu, gaano po kahalaga sa inyo na bawasan o itigil ang {s}?', en: 'From zero to ten, how important is it to you to cut down or stop {s}?' },
      { tl: 'Bakit po iyan at hindi mas mababa?', en: 'Why that number and not lower?', n: 'Never ask "why not higher"; it invites arguments against change.' },
      { tl: 'Ano po ang kailangang mangyari para tumaas ito nang dalawang puntos?', en: 'What would need to happen for it to go up by two points?' },
      { tl: 'Mula zero hanggang sampu, gaano po kayo kakumpiyansa na magagawa ninyo ito kung magpasya kayo?', en: 'From zero to ten, how confident are you that you could do it if you decided to?' },
      { tl: 'Ano po ang nakatulong sa inyo noong nagawa ninyong tumigil kahit saglit?', en: 'What helped you when you managed to stop, even briefly?' }
    ] },
    { id: 'feedback', title: 'Elicit, provide, elicit', goal: 'Ask what they know, give one or two facts with permission, then ask what they make of it.', lines: [
      { tl: 'Ano po ang alam ninyo tungkol sa epekto ng {s} sa katawan?', en: 'What do you know about the effects of {s} on the body?' },
      { tl: 'Puwede ko po bang ibahagi ang ilang bagay na alam namin tungkol dito?', en: 'May I share a few things we know about this?' },
      { tl: '(Magbigay ng isa o dalawang katotohanan mula sa psychoeducation.)', en: '(Give one or two facts from the psychoeducation list.)', n: 'Short and specific to this patient, for example the mouth patch you just saw.' },
      { tl: 'Ano po sa tingin ninyo? Paano po ito para sa inyo?', en: 'What do you think? How does this apply to you?' }
    ] },
    { id: 'plan', title: 'Change plan (if ready)', goal: 'Let the patient choose the goal and the first step. Small and specific beats big and vague.', lines: [
      { tl: 'Ano po ang gusto ninyong gawin: bawasan muna, o itigil nang tuluyan?', en: 'What would you like to do: cut down first, or stop completely?' },
      { tl: 'Kailan po kayo magsisimula? Anong petsa po?', en: 'When will you start? What date?' },
      { tl: 'Kailan po ang pinakamahirap: pagkatapos kumain, kasama ang mga kaibigan, kapag stressed o pagod?', en: 'When is it hardest: after meals, with friends, when stressed or tired?', n: 'Triggers.' },
      { tl: 'Ano po ang gagawin ninyo sa halip? Halimbawa, chewing gum, tubig, lakad, o kausapin ang asawa.', en: 'What will you do instead? For example, chewing gum, water, a walk, or talking to your spouse.' },
      { tl: 'Sino po ang makakatulong sa inyo? Puwede po ba nating sabihin sa kanila ang plano?', en: 'Who can support you? May we tell them the plan?' },
      { tl: 'Paano po natin malalaman na gumagana ito? Ilang {u} po sa isang araw ang target ninyo?', en: 'How will we know it is working? How many {u} a day is your target?' },
      { tl: 'May gamot po na makakatulong sa pananabik at sa withdrawal. Gusto po ba ninyong pag-usapan?', en: 'There is medicine that can help with craving and withdrawal. Would you like to talk about it?' }
    ] },
    { id: 'notready', title: 'If not ready', goal: 'Do not argue. Respect autonomy, keep the door open, offer harm reduction.', lines: [
      { tl: 'Naiintindihan ko po na hindi pa kayo handa ngayon. Kayo po ang magpapasya.', en: 'I understand you are not ready right now. The decision is yours.' },
      { tl: 'Puwede po ba akong magtanong ulit tungkol dito sa susunod nating pagkikita?', en: 'May I ask about this again at our next visit?' },
      { tl: 'Habang hindi pa po kayo tumitigil, ano po ang maliit na bagay na puwede ninyong gawin para mas ligtas?', en: 'While you have not stopped, what is one small thing you could do to be safer?', n: 'Harm reduction: no tobacco in the quid, not drinking before driving, not using alone.' },
      { tl: 'Kung magbago po ang isip ninyo, nandito lang po kami.', en: 'If you change your mind, we are here.' }
    ] },
    { id: 'close', title: 'Close and follow up', goal: 'Summarize their own reasons and plan. Normalize slips.', lines: [
      { tl: 'Bubuurin ko po: gusto ninyong bawasan ang {s} para sa pamilya ninyo, at magsisimula kayo sa Lunes.', en: 'To summarize: you want to cut down on {s} for your family, and you will start on Monday.', n: 'Use the patient\'s own words and reasons.' },
      { tl: 'Normal po ang pagbalik o pagkadulas. Hindi po ito kabiguan; babalik lang po tayo sa plano.', en: 'A slip or relapse is normal. It is not failure; we just go back to the plan.' },
      { tl: 'Magkita po tayo ulit sa loob ng dalawang linggo para makita kung paano.', en: 'Let us meet again in two weeks to see how it goes.' },
      { tl: 'Salamat po. Malaking hakbang po ang pag-usapan ito.', en: 'Thank you. Talking about this is a big step.' }
    ] }
  ];

  /* Nurse view: a shorter screening and advice script. Pending Nursing Service review. */
  const NURSE = {
    notice: 'Nurse screening script, pending Nursing Service review. Use it as a communication aid; follow the ward\'s own procedures and report findings to the resident on duty.',
    steps: [
      { title: 'Ask', lines: [
        { tl: 'Ngumunguya po ba kayo ng nganga (bunga, mama, buyo), naninigarilyo, umiinom ng alak, gumagamit ng ibang gamot o droga, o nagsusugal?', en: 'Do you chew betel nut, smoke, drink alcohol, use other drugs, or gamble?' },
        { tl: 'Kung ngumunguya po kayo: may sugat o puting bahagi po ba sa bibig ninyo? Pakibuka po nang malaki ang bibig.', en: 'If you chew: is there a sore or white patch in your mouth? Please open your mouth wide.', n: 'Look at the cheeks, gums and tongue; note trismus. Report any patch or sore.' },
        { tl: 'Gaano po karami sa isang araw? Kailan po ang huling gamit?', en: 'How much a day? When was the last use?' }
      ] },
      { title: 'Watch for withdrawal', lines: [
        { tl: 'Nanginginig po ba ang kamay ninyo, pinagpapawisan, o nahihilo?', en: 'Are your hands shaking, are you sweating, or dizzy?', n: 'Alcohol: shaking, sweating, fast pulse, high BP, confusion. Report at once.' },
        { tl: 'Nakakatulog po ba kayo? May nakikita o naririnig po ba kayong kakaiba?', en: 'Are you able to sleep? Are you seeing or hearing anything unusual?' }
      ] },
      { title: 'Brief advice', lines: [
        { tl: 'Bilang nurse ninyo, pinapayo ko po na bawasan o itigil ang {s} para sa kalusugan ninyo. Handa po kaming tumulong.', en: 'As your nurse, I advise you to cut down or stop {s} for your health. We are ready to help.' },
        { tl: 'Habang nasa ospital po kayo, sabihin po ninyo sa amin kung nananabik kayo o masama ang pakiramdam ninyo.', en: 'While you are in the hospital, tell us if you have cravings or feel unwell.' },
        { tl: 'Ipapaalam ko po sa doktor para matulungan kayo.', en: 'I will let the doctor know so you can be helped.' }
      ] }
    ],
    escalate: 'Report to the resident on duty: any alcohol withdrawal signs, confusion, hallucinations, suicidal statements, large gambling debts, or a mouth lesion in a betel nut chewer.'
  };

  window.PSYCH_SUD = { substances: SUB, criteria: CRIT, gambling: GAMB, groups: GROUPS, screens: SCREENS, open: OPEN, remission: REMISSION, mi: MI, nurse: NURSE,
    criteriaFor: (sub) => (sub && sub.gamble ? GAMB : CRIT),
    severity: (n) => (n >= 6 ? 'severe' : n >= 4 ? 'moderate' : n >= 2 ? 'mild' : 'none'),
    severityFor: (sub, n) => (sub && sub.gamble ? (n >= 8 ? 'severe' : n >= 6 ? 'moderate' : n >= 4 ? 'mild' : 'none') : (n >= 6 ? 'severe' : n >= 4 ? 'moderate' : n >= 2 ? 'mild' : 'none')),
    rule: (sub) => (sub && sub.gamble ? '4 or more of 9 in 12 months: mild 4–5, moderate 6–7, severe 8–9' : '2 or more of 11 in 12 months: mild 2–3, moderate 4–5, severe 6 or more'),
    fill: (text, sub) => String(text).replace(/\{s\}/g, sub.s).replace(/\{w\}/g, sub.w).replace(/\{u\}/g, sub.unit) };

  /* Also publish the lines as phrase sections, so they appear in search, flashcards, the handout generator
     and the audio pack. Betel nut is the worked example for the criteria; the screener substitutes other substances. */
  const sec = (id, title, intro, items) => ({ id, group: 'Substance use', title, intro, phrases: items.map((p) => ({ en: p.en, f: p.tl, n: p.n })) });
  const betel = SUB[0];
  const fillB = (p) => ({ en: p.en.replace(/\{s\}/g, betel.en).replace(/\{u\}/g, 'quids'), tl: PSYCH_SUD.fill(p.tl, betel), n: p.n });
  const sections = [
    sec('sud-screen', 'Substance use: the 11 criteria', 'DSM-5-TR substance use disorder, asked about betel nut (nganga). Replace "nganga" with sigarilyo, alak, shabu, or the drug named. Two or more in 12 months: mild 2–3, moderate 4–5, severe 6 or more. The screener in Psychiatry → Substance use does the counting.',
      OPEN.concat(CRIT.map((c) => ({ tl: c.tl, en: c.n + '. ' + c.en, n: GROUPS[c.group] })), REMISSION).map(fillB)),
    sec('sud-betel', 'Betel nut (nganga): asking and explaining', 'Betel nut chewing is common in the province. Ask what is in the quid (tobacco changes the diagnosis and the risk), look in the mouth, and explain plainly.',
      betel.ask.concat(betel.psychoed)),
    sec('sud-other', 'Tobacco, alcohol, shabu: asking and explaining', 'Substance-specific questions and psychoeducation for the other common substances.',
      SUB.slice(1, 4).flatMap((s) => s.ask.concat(s.psychoed))),
    sec('sud-gambling', 'Gambling (sugal, sabong, online): the 9 criteria', 'Gambling disorder, DSM-5-TR: 4 or more of 9 criteria in 12 months; mild 4–5, moderate 6–7, severe 8–9. Ask about e-sabong and phone apps.',
      SUB.find((x) => x.id === 'gambling').ask.concat(GAMB.map((c) => ({ tl: c.tl, en: c.n + '. ' + c.en })), SUB.find((x) => x.id === 'gambling').psychoed)),
    sec('sud-screens', 'AUDIT-C and Fagerström in Tagalog', 'Quick add-on screens: three AUDIT-C questions for alcohol and six Fagerström questions for nicotine dependence, with the answer choices. The screener in Psychiatry → Substance use scores them.',
      SCREENS.alcohol.items.concat(SCREENS.tobacco.items).map((it) => ({ tl: it.tl, en: it.en, n: it.opts.map((o) => o[0]).join(' / ') }))),
    sec('mi', 'Motivational interviewing', 'Brief intervention in Tagalog: permission, open questions, reflections, rulers, elicit–provide–elicit, change plan, and what to say when the patient is not ready. The guided flow is in Psychiatry → Substance use → Brief intervention.',
      MI.flatMap((st) => st.lines).map(fillB))
  ];
  if (window.PSYCH_SECTIONS) sections.forEach((s) => PSYCH_SECTIONS.push(s));
})();
