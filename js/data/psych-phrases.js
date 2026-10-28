/* Psychiatry Tagalog: interview phrase sections.
   Each phrase: en, f (formal/respectful, po + kayo), c (everyday/casual, ka/mo, may include Taglish), n (note).
   Answers: likely patient replies [tagalog, english].
   These are practice phrasings written for training, not validated research translations.
   Confirm local usage with supervisors, nurses, and patients. */
window.PSYCH_SECTIONS = [
{
  id: 'opening', group: 'Interview', title: 'Opening and rapport',
  intro: 'Introduce yourself, establish respect, and set the agenda. A warm opening lowers hiya.',
  phrases: [
    { en: 'Good morning. I\'m Dr. Navarro, one of the psychiatrists here.', f: 'Magandang umaga po. Ako po si Dr. Navarro, isa po sa mga psychiatrist dito.', c: 'Magandang umaga. Ako si Dr. Navarro, isa sa mga psychiatrist dito.' },
    { en: 'What would you like me to call you?', f: 'Ano po ang gusto ninyong itawag ko sa inyo?', c: 'Ano ang gusto mong itawag ko sa iyo?' },
    { en: 'Please have a seat.', f: 'Upo po kayo.', c: 'Upo ka.' },
    { en: 'Are you comfortable speaking in Tagalog, or would you prefer English?', f: 'Komportable po ba kayong mag-Tagalog, o mas gusto ninyo ang Ingles?', c: 'Okay lang ba sa iyo na mag-Tagalog tayo, o mas gusto mo ang English?' },
    { en: 'I\'m still learning Tagalog. Please tell me if you don\'t understand me.', f: 'Nag-aaral pa po ako ng Tagalog. Sabihin po ninyo kung hindi ninyo ako maintindihan.', c: 'Nag-aaral pa ako ng Tagalog. Sabihin mo lang kung hindi mo ako maintindihan.', n: 'Admitting this openly usually earns goodwill and patience.' },
    { en: 'We have about forty-five minutes to talk.', f: 'Mayroon po tayong mga apatnapu\'t limang minuto para mag-usap.', c: 'May mga 45 minutes tayo para mag-usap.' },
    { en: 'I will ask many questions. Some may be personal.', f: 'Marami po akong itatanong. Ang ilan po ay medyo personal.', c: 'Marami akong itatanong. Yung iba, medyo personal.' },
    { en: 'You can tell me anything. There are no wrong answers.', f: 'Puwede po ninyong sabihin sa akin ang kahit ano. Walang maling sagot.', c: 'Puwede mong sabihin sa akin ang kahit ano. Walang maling sagot.' },
    { en: 'Take your time.', f: 'Dahan-dahan lang po. Walang nagmamadali.', c: 'Dahan-dahan lang. Walang nagmamadali.' },
    { en: 'How are you feeling right now?', f: 'Kumusta po ang pakiramdam ninyo ngayon?', c: 'Kumusta ang pakiramdam mo ngayon?' }
  ]
},
{
  id: 'consent', group: 'Interview', title: 'Confidentiality and consent',
  intro: 'Explain privacy and its limits. Under RA 11036 patients have rights to information and informed consent.',
  phrases: [
    { en: 'What we talk about stays between us and your treatment team.', f: 'Ang pag-uusapan po natin ay mananatili sa pagitan natin at ng mga doktor na gumagamot sa inyo.', c: 'Ang pag-uusapan natin ay sa atin lang at sa mga doktor na tumitingin sa iyo.' },
    { en: 'But if I believe you or someone else is in danger, I may need to tell others to keep everyone safe.', f: 'Pero kung sa tingin ko po ay nasa panganib kayo o ang ibang tao, maaaring kailangan ko pong sabihin sa iba para maging ligtas ang lahat.', c: 'Pero kung sa tingin ko ay delikado ka o ang ibang tao, baka kailangan kong sabihin sa iba para safe ang lahat.' },
    { en: 'May I speak with your family as well?', f: 'Puwede ko rin po bang kausapin ang pamilya ninyo?', c: 'Puwede ko rin bang kausapin ang pamilya mo?' },
    { en: 'Is there anything you don\'t want me to tell your family?', f: 'May mga bagay po ba na ayaw ninyong sabihin ko sa pamilya ninyo?', c: 'May gusto ka bang hindi ko sabihin sa pamilya mo?' },
    { en: 'Do you agree to this treatment?', f: 'Pumapayag po ba kayo sa gamutang ito?', c: 'Pumapayag ka ba sa gamutang ito?' },
    { en: 'You can ask me questions at any time.', f: 'Puwede po kayong magtanong sa akin kahit kailan.', c: 'Puwede kang magtanong sa akin kahit kailan.' },
    { en: 'You have the right to know your diagnosis and treatment.', f: 'May karapatan po kayong malaman ang inyong diyagnosis at gamutan.', c: 'May karapatan kang malaman ang diagnosis at gamutan mo.' }
  ]
},
{
  id: 'cc-hpi', group: 'Interview', title: 'Chief complaint and history of present illness',
  intro: 'Open questions first, then clarify onset, duration, course, triggers, and impact.',
  phrases: [
    { en: 'What brings you here today?', f: 'Ano po ang nagdala sa inyo dito ngayon?', c: 'Ano ang nagdala sa iyo dito ngayon?' },
    { en: 'What is the problem you want help with?', f: 'Ano po ang problemang gusto ninyong matulungan?', c: 'Ano ang problemang gusto mong matulungan?' },
    { en: 'Tell me what happened.', f: 'Ikuwento po ninyo sa akin ang nangyari.', c: 'Ikuwento mo sa akin ang nangyari.' },
    { en: 'Whose idea was it to come here?', f: 'Kanino pong ideya ang pumunta dito?', c: 'Kaninong idea ang pumunta dito?' },
    { en: 'When did this start?', f: 'Kailan po ito nagsimula?', c: 'Kailan ito nagsimula?' },
    { en: 'Did it start suddenly or gradually?', f: 'Bigla po ba itong nagsimula o unti-unti?', c: 'Biglaan ba o unti-unti?' },
    { en: 'What was happening in your life when it started?', f: 'Ano po ang nangyayari sa buhay ninyo noong nagsimula ito?', c: 'Ano ang nangyayari sa buhay mo noong nagsimula ito?' },
    { en: 'Has it gotten better or worse?', f: 'Gumaan po ba o lumala?', c: 'Gumaan ba o lumala?' },
    { en: 'Has this happened before?', f: 'Nangyari na po ba ito dati?', c: 'Nangyari na ba ito dati?' },
    { en: 'How has this affected your work or studies?', f: 'Paano po ito nakaapekto sa trabaho o pag-aaral ninyo?', c: 'Paano ito nakaapekto sa trabaho o pag-aaral mo?' },
    { en: 'What do you think is causing this?', f: 'Ano po sa tingin ninyo ang sanhi nito?', c: 'Ano sa tingin mo ang dahilan nito?', n: 'Elicits the explanatory model. Listen for spiritual, folk, or stress-based explanations.' },
    { en: 'What have you done to feel better?', f: 'Ano na po ang mga ginawa ninyo para gumaan ang pakiramdam ninyo?', c: 'Ano na ang ginawa mo para gumaan ang pakiramdam mo?' },
    { en: 'Can you tell me more about that?', f: 'Puwede po ba ninyong ipaliwanag pa iyan?', c: 'Puwede mo bang ikuwento pa iyan?' },
    { en: 'What do you mean by that?', f: 'Ano po ang ibig ninyong sabihin doon?', c: 'Ano ang ibig mong sabihin doon?' }
  ]
},
{
  id: 'depression', group: 'Interview', title: 'Depressed mood and SIGECAPS',
  intro: 'Gate first: depressed mood or loss of interest most of the day, nearly every day, for two weeks. Then SIGECAPS: Sleep, Interest, Guilt, Energy, Concentration, Appetite, Psychomotor, Suicide. Major depressive episode = one gate symptom + five of nine in total. Always ask every depressed patient about past elevated mood before starting an antidepressant.',
  phrases: [
    { en: 'How has your mood been over the past two weeks?', f: 'Kumusta po ang inyong mood o pakiramdam nitong nakaraang dalawang linggo?', c: 'Kumusta ang mood mo nitong nakaraang dalawang linggo?', n: 'Gate · depressed mood' },
    { en: 'Have you been feeling sad or down most of the day, nearly every day?', f: 'Nalulungkot po ba kayo halos buong araw, halos araw-araw?', c: 'Nalulungkot ka ba halos buong araw, araw-araw?', n: 'Gate · depressed mood. "Mabigat ang dibdib", "wala sa mood", and "pagod na ako" are common idioms.', answers: [['Opo, lagi po akong malungkot.', 'Yes, I\'m always sad.'], ['Mabigat po ang dibdib ko.', 'My chest feels heavy.']] },
    { en: 'Do you still enjoy the things you used to enjoy?', f: 'Nag-e-enjoy pa po ba kayo sa mga bagay na dati ninyong kinagigiliwan?', c: 'Nag-e-enjoy ka pa ba sa mga bagay na gusto mo dati?', n: 'Gate · anhedonia' },
    { en: 'Do you cry often?', f: 'Madalas po ba kayong umiiyak?', c: 'Madalas ka bang umiiyak?' },
    { en: 'From 1 to 10, with 10 the best, how is your mood today?', f: 'Mula isa hanggang sampu, at sampu ang pinakamaganda, gaano po kaganda ang pakiramdam ninyo ngayon?', c: 'From 1 to 10, 10 ang pinakamaganda, ilan ang mood mo ngayon?' },
    { en: 'S · How is your sleep? Do you have trouble falling asleep, staying asleep, or do you wake up too early? Or are you sleeping much more than usual?', f: 'Kumusta po ang tulog ninyo? Nahihirapan po ba kayong makatulog, nagigising sa gitna ng gabi, o masyadong maaga nagigising? O mas mahaba po ba ang tulog ninyo kaysa dati?', c: 'Kumusta ang tulog mo? Hirap ka bang makatulog, nagigising sa gitna ng gabi, o masyadong maaga nagigising? O sobrang haba ng tulog mo?', n: 'Sleep: insomnia or hypersomnia. Early waking suggests melancholic features.' },
    { en: 'S · How many hours do you sleep each night?', f: 'Ilang oras po kayo natutulog gabi-gabi?', c: 'Ilang oras ka natutulog gabi-gabi?' },
    { en: 'I · Have you lost interest in things?', f: 'Nawalan po ba kayo ng gana o interes sa mga bagay-bagay?', c: 'Nawalan ka ba ng gana sa mga bagay-bagay?', n: 'Interest. "Gana" covers both appetite and motivation; clarify which.' },
    { en: 'G · Do you feel guilty or worthless? Do you blame yourself for things?', f: 'Nakakaramdam po ba kayo ng pagkakonsensiya, o na wala kayong halaga? Sinisisi po ba ninyo ang sarili ninyo?', c: 'Feeling mo ba guilty ka o wala kang kwenta? Sinisisi mo ba ang sarili mo?', n: 'Guilt or worthlessness. If the guilt is fixed and out of proportion (a sin that cannot be forgiven, having ruined the family), ask about psychotic features.' },
    { en: 'E · Do you feel tired or have no energy?', f: 'Lagi po ba kayong pagod o walang lakas?', c: 'Lagi ka bang pagod o walang energy?', n: 'Energy' },
    { en: 'C · Can you concentrate, for example on watching TV or reading? Is it hard to make decisions?', f: 'Nakakapag-concentrate po ba kayo, halimbawa sa panonood ng TV o pagbabasa? Nahihirapan po ba kayong magdesisyon?', c: 'Nakakapag-focus ka ba, halimbawa sa panonood ng TV o pagbabasa? Hirap ka bang magdesisyon?', n: 'Concentration or indecisiveness' },
    { en: 'A · How is your appetite? Have you lost or gained weight?', f: 'Kumusta po ang gana ninyo sa pagkain? Pumayat o tumaba po ba kayo?', c: 'Kumusta ang gana mo sa pagkain? Pumayat ka ba o tumaba?', n: 'Appetite or weight change (about 5% in a month without trying).' },
    { en: 'P · Have others noticed you moving or speaking more slowly, or being restless?', f: 'May nakapansin po ba na bumagal kayo kumilos o magsalita, o hindi kayo mapakali?', c: 'May nakapansin ba na bumagal ka kumilos o magsalita, o hindi ka mapakali?', n: 'Psychomotor retardation or agitation, observable by others.' },
    { en: 'S · With everything you are going through, have you thought that you would rather not live, or of hurting yourself?', f: 'Sa lahat po ng pinagdadaanan ninyo, naisip po ba ninyo na mas mabuti pang hindi na mabuhay, o saktan ang inyong sarili?', c: 'Sa lahat ng pinagdadaanan mo, naisip mo bang mas mabuti pang hindi na mabuhay, o saktan ang sarili mo?', n: 'Suicide. If yes, go to the Suicide risk section now.' },
    { en: 'Do you feel hopeless about the future?', f: 'Nawawalan na po ba kayo ng pag-asa sa hinaharap?', c: 'Nawawalan ka na ba ng pag-asa?', n: 'Hopelessness is not a DSM criterion but predicts suicide risk.' },
    { en: 'Is it worse in the morning or at night?', f: 'Mas mabigat po ba ang pakiramdam sa umaga o sa gabi?', c: 'Mas mabigat ba sa umaga o sa gabi?', n: 'Worse in the morning suggests melancholic features.' },
    { en: 'How long has this been going on? Has it been like this nearly every day?', f: 'Gaano po katagal na ito? Halos araw-araw po ba?', c: 'Gaano na katagal ito? Halos araw-araw ba?', n: 'Duration: at least two weeks.' },
    { en: 'Has it affected your work, your studies, or your care for the family?', f: 'Naapektuhan po ba nito ang trabaho, pag-aaral, o pag-aalaga ninyo sa pamilya?', c: 'Naapektuhan ba nito ang trabaho, pag-aaral, o pag-aalaga mo sa pamilya?', n: 'Impairment.' },
    { en: 'Have you ever had the opposite: days when you felt unusually high, full of energy, and needed little sleep?', f: 'Nagkaroon na po ba kayo ng kabaligtaran nito: mga araw na sobrang taas ng pakiramdam ninyo, punong-puno ng sigla, at kaunti lang ang tulog pero hindi napapagod?', c: 'Nagkaroon ka na ba ng kabaligtaran: mga araw na sobrang taas ng mood mo, sobrang energetic, at konti lang ang tulog pero hindi napapagod?', n: 'Bipolar screen. Ask every depressed patient before prescribing an antidepressant; if yes, go to the DIGFAST section.' },
    { en: 'When you feel this low, do you hear voices or believe things that others say are not true?', f: 'Kapag ganito po kababa ang pakiramdam ninyo, may naririnig po ba kayong boses, o may pinaniniwalaan kayo na sabi ng iba ay hindi totoo?', c: 'Kapag ganito ka kababa, may naririnig ka bang boses, o may pinaniniwalaan ka na sabi ng iba ay hindi totoo?', n: 'Psychotic features: mood-congruent guilt, nihilistic, or somatic delusions; hallucinations.' },
    { en: 'During these sad days, were there also times you felt sped up, restless, or that your thoughts were racing?', f: 'Sa mga araw pong ito na malungkot kayo, may mga oras po ba na parang mabilis kayo, hindi mapakali, o nag-uunahan ang iniisip ninyo?', c: 'Sa mga araw na malungkot ka, may mga oras bang parang mabilis ka, hindi mapakali, o nag-uunahan ang iniisip mo?', n: 'Mixed features: three or more manic symptoms during the depressive episode.' },
    { en: 'Did this start during pregnancy or within the weeks after giving birth?', f: 'Nagsimula po ba ito habang buntis kayo, o sa mga linggo pagkatapos manganak?', c: 'Nagsimula ba ito habang buntis ka, o sa mga linggo pagkatapos mong manganak?', n: 'Peripartum onset: during pregnancy or within four weeks of delivery. Ask about thoughts of harming the baby.' },
    { en: 'Did this begin after someone close to you died?', f: 'Nagsimula po ba ito pagkatapos mamatay ng isang mahal ninyo sa buhay?', c: 'Nagsimula ba ito pagkatapos mamatay ng mahal mo sa buhay?', n: 'Grief versus depression: in grief the pain comes in waves and self-esteem is kept; persistent worthlessness, retardation, and suicidal thoughts beyond "wanting to join" the deceased point to a depressive episode. Long mourning (padasal, babang-luksa) is cultural, not pathology.' }
  ]
},
{
  id: 'mania', group: 'Interview', title: 'Elevated, expansive or irritable mood and DIGFAST',
  intro: 'Gate first: a distinct period of abnormally elevated, expansive, or irritable mood with increased energy or activity. Then DIGFAST: Distractibility, Indiscretion, Grandiosity, Flight of ideas, Activity, Sleep, Talkativeness. Mania = gate + three of seven (four if the mood is only irritable) for at least one week, or any length if hospitalized; hypomania = at least four days, no hospitalization, no psychosis.',
  phrases: [
    { en: 'Have you ever had a period when you felt extremely happy, high, or energetic, more than usual, for days at a time?', f: 'Nagkaroon na po ba kayo ng panahon na sobrang saya, sobrang taas ng pakiramdam, o sobrang sigla ninyo, higit sa karaniwan, nang ilang araw na sunod-sunod?', c: 'Nagkaroon ka na ba ng panahon na sobrang saya, sobrang taas ng mood, o sobrang energetic mo, higit sa normal, nang ilang araw na sunod-sunod?', n: 'Gate · elevated or expansive mood' },
    { en: 'Or a period when you were much more irritable or easily angered than usual, with more energy?', f: 'O panahon po na mas mainit ang ulo ninyo o mas madaling magalit kaysa karaniwan, at mas malakas ang sigla ninyo?', c: 'O panahon na mas mainit ang ulo mo o mas madaling magalit, at mas malakas ang energy mo?', n: 'Gate · irritable mood. If the mood was only irritable, four of the seven DIGFAST symptoms are needed.' },
    { en: 'Did family or friends notice you were not your usual self?', f: 'Napansin po ba ng pamilya o mga kaibigan ninyo na hindi kayo katulad ng dati?', c: 'Napansin ba ng pamilya o mga kaibigan mo na iba ka sa dati?', n: 'The change must be observable by others. Collateral history is often the key.' },
    { en: 'D · Were you easily distracted, jumping from one thing to another?', f: 'Madali po ba kayong nalilihis ng pansin, lumilipat-lipat sa iba\'t ibang bagay?', c: 'Madali ka bang ma-distract, lipat-lipat sa iba\'t ibang bagay?', n: 'Distractibility' },
    { en: 'I · Did you do risky things you wouldn\'t normally do, like spending a lot of money, gambling, or sexual indiscretions?', f: 'May ginawa po ba kayong mapanganib na hindi ninyo karaniwang ginagawa, tulad ng malaking gastos, pagsusugal, o pakikipagrelasyon nang padalos-dalos?', c: 'May ginawa ka bang delikado na hindi mo usually ginagawa, tulad ng malaking gastos, sugal, o padalos-dalos na relasyon?', n: 'Indiscretion: pleasurable activities with painful consequences.' },
    { en: 'G · Did you feel you had special powers, a special mission, or that you were more important than others?', f: 'Pakiramdam po ba ninyo ay may espesyal kayong kapangyarihan o misyon, o mas mahalaga kayo kaysa sa iba?', c: 'Feeling mo ba may special powers ka o misyon, o mas mahalaga ka kaysa sa iba?', n: 'Grandiosity. Religious grandiosity (a mission from God) is common; check whether the family shares the belief.' },
    { en: 'F · Did your thoughts race, as if they were running ahead of you?', f: 'Parang nag-uunahan po ba ang mga iniisip ninyo, na parang hindi ninyo mahabol?', c: 'Parang nag-uunahan ba ang mga iniisip mo, na parang hindi mo mahabol?', n: 'Flight of ideas or racing thoughts' },
    { en: 'A · Were you much more active than usual, starting many projects, or unable to sit still?', f: 'Mas aktibo po ba kayo kaysa karaniwan, maraming sinimulang proyekto, o hindi makaupo nang matagal?', c: 'Mas aktibo ka ba kaysa dati, maraming sinimulang projects, o hindi makaupo nang matagal?', n: 'Activity: goal-directed activity or psychomotor agitation.' },
    { en: 'S · Did you need much less sleep but not feel tired?', f: 'Kaunti lang po ba ang tulog ninyo pero hindi kayo napapagod?', c: 'Konti lang ba ang tulog mo pero hindi ka napapagod?', n: 'Sleep: decreased need, not insomnia. Ask "Ilang oras?" and whether they felt rested.' },
    { en: 'T · Did people say you talked too fast or too much, or that it was hard to interrupt you?', f: 'Sinabihan po ba kayo na masyado kayong mabilis o madaldal magsalita, o mahirap kayong sabatin?', c: 'Sinabihan ka ba na masyado kang mabilis o madaldal, o mahirap kang sabatin?', n: 'Talkativeness or pressured speech' },
    { en: 'How long did this last?', f: 'Gaano po katagal ito tumagal?', c: 'Gaano katagal ito?', n: 'Mania: one week or longer; hypomania: at least four days.' },
    { en: 'Were you admitted to a hospital, or did you get into trouble because of it?', f: 'Na-admit po ba kayo sa ospital, o nagkaproblema kayo dahil dito?', c: 'Na-admit ka ba, o nagkaproblema ka dahil dito?', n: 'Hospitalization or marked impairment makes it mania regardless of duration.' },
    { en: 'At that time, did you hear voices or believe things others said were not true?', f: 'Noong panahong iyon, may naririnig po ba kayong boses, o may pinaniniwalaan kayo na sabi ng iba ay hindi totoo?', c: 'Noon, may naririnig ka bang boses, o may pinaniniwalaan ka na sabi ng iba ay hindi totoo?', n: 'Psychotic features rule out hypomania.' },
    { en: 'Were you drinking, using shabu, or taking any new medicine when this happened?', f: 'Umiinom po ba kayo ng alak, gumagamit ng shabu, o may bagong gamot kayo noong nangyari ito?', c: 'Umiinom ka ba, gumagamit ng shabu, o may bagong gamot ka noong nangyari ito?', n: 'Rule out substance- or medication-induced episodes (shabu, steroids, antidepressants).' },
    { en: 'During that period, were there also times you felt very sad, hopeless, or thought of dying?', f: 'Sa panahong iyon, may mga oras po ba na sobrang lungkot ninyo, nawalan ng pag-asa, o naisip ang kamatayan?', c: 'Noon, may mga oras bang sobrang lungkot mo, nawalan ng pag-asa, o naisip mo ang kamatayan?', n: 'Mixed features: three or more depressive symptoms during the manic episode. Suicide risk is high in mixed states.' }
  ]
},
{
  id: 'anxiety', group: 'Interview', title: 'Anxiety, panic, and OCD',
  intro: 'Patients often say "nerbiyos," "kaba," or "mabigat ang dibdib" for anxiety.',
  phrases: [
    { en: 'Do you worry a lot?', f: 'Madalas po ba kayong mag-alala?', c: 'Madalas ka bang mag-alala?' },
    { en: 'Is it hard to control your worrying?', f: 'Mahirap po bang pigilan ang pag-aalala ninyo?', c: 'Mahirap bang pigilan ang pag-aalala mo?' },
    { en: 'Do you feel nervous or on edge?', f: 'Kinakabahan po ba kayo o hindi mapakali?', c: 'Kinakabahan ka ba o hindi mapakali?' },
    { en: 'Have you had sudden attacks of intense fear, with a pounding heart, shortness of breath, or feeling you might die?', f: 'Nagkaroon na po ba kayo ng biglaang matinding takot, na bumibilis ang tibok ng puso, hinihingal, o pakiramdam ninyo ay mamamatay kayo?', c: 'Nagkaroon ka na ba ng biglaang matinding takot, na bumibilis ang tibok ng puso mo, hinihingal ka, o feeling mo mamamatay ka?' },
    { en: 'Do you avoid places because you\'re afraid it will happen again?', f: 'May mga lugar po ba kayong iniiwasan dahil natatakot kayong maulit ito?', c: 'May mga lugar ka bang iniiwasan dahil takot kang maulit?' },
    { en: 'Do you have thoughts that keep coming back even if you don\'t want them?', f: 'May mga pumapasok po ba sa isip ninyo na paulit-ulit kahit ayaw ninyo?', c: 'May mga naiisip ka ba na paulit-ulit kahit ayaw mo?' },
    { en: 'Do you have to wash, check, or count things over and over?', f: 'Kailangan po ba ninyong maghugas, mag-check, o magbilang nang paulit-ulit?', c: 'Kailangan mo bang maghugas, mag-check, o magbilang nang paulit-ulit?' },
    { en: 'What happens if you don\'t do it?', f: 'Ano po ang nangyayari kapag hindi ninyo ito ginawa?', c: 'Ano ang nangyayari kapag hindi mo ginawa?' },
    { en: 'Are you very afraid of being judged or embarrassed in front of people?', f: 'Takot na takot po ba kayong husgahan o mapahiya sa harap ng ibang tao?', c: 'Takot na takot ka bang ma-judge o mapahiya sa harap ng ibang tao?' }
  ]
},
{
  id: 'trauma', group: 'Interview', title: 'Trauma and PTSD',
  intro: 'Ask gently and give control. Patients don\'t need to give details to be assessed.',
  phrases: [
    { en: 'Has something very frightening or painful ever happened to you?', f: 'May nangyari na po ba sa inyo na sobrang nakakatakot o masakit?', c: 'May nangyari na ba sa iyo na sobrang nakakatakot o masakit?' },
    { en: 'You don\'t have to tell me the details if you\'re not ready.', f: 'Hindi po ninyo kailangang ikuwento ang detalye kung hindi pa kayo handa.', c: 'Hindi mo kailangang ikuwento ang detalye kung hindi ka pa handa.' },
    { en: 'Do you have memories or nightmares about it that you can\'t stop?', f: 'May mga alaala o bangungot po ba kayo tungkol dito na hindi ninyo mapigilan?', c: 'May mga alaala o bangungot ka ba tungkol dito na hindi mo mapigilan?' },
    { en: 'Do you feel like it\'s happening again?', f: 'Pakiramdam po ba ninyo ay parang nangyayari ulit ito?', c: 'Feeling mo ba parang nangyayari ulit?' },
    { en: 'Do you avoid things that remind you of it?', f: 'Iniiwasan po ba ninyo ang mga bagay na nagpapaalala nito?', c: 'Iniiwasan mo ba ang mga bagay na nagpapaalala nito?' },
    { en: 'Are you easily startled?', f: 'Madali po ba kayong magulat?', c: 'Magugulatin ka ba?' },
    { en: 'Has anyone hurt you physically, emotionally, or sexually?', f: 'May nanakit na po ba sa inyo, sa katawan, sa damdamin, o sa sekswal na paraan?', c: 'May nanakit na ba sa iyo, physically, emotionally, o sexually?' },
    { en: 'Are you safe at home now?', f: 'Ligtas po ba kayo sa bahay ngayon?', c: 'Safe ka ba sa bahay ngayon?' }
  ]
},
{
  id: 'hallucinations', group: 'Interview', title: 'Psychosis: hallucinations and perceptual disturbances',
  intro: 'Normalize first ("Some people who are very stressed experience..."), then ask each modality. Distinguish culturally shared spirit experiences from hallucinations. Ask about content, frequency, command type, and response.',
  phrases: [
    { en: 'Sometimes when people are very stressed, they hear or see things others don\'t. Has that happened to you?', f: 'Minsan po, kapag sobrang stressed ang isang tao, may naririnig o nakikita silang hindi naririnig o nakikita ng iba. Nangyari na po ba ito sa inyo?', c: 'Minsan, kapag sobrang stressed ang tao, may naririnig o nakikita sila na hindi naririnig o nakikita ng iba. Nangyari na ba ito sa iyo?', n: 'Normalizing statement before asking. Reduces hiya.' },
    { en: 'Do you hear voices or sounds when no one is around?', f: 'May naririnig po ba kayong boses o tunog kahit walang tao sa paligid?', c: 'May naririnig ka bang boses o tunog kahit walang tao?' },
    { en: 'Is someone whispering to you?', f: 'May bumubulong po ba sa inyo?', c: 'May bumubulong ba sa iyo?', answers: [['Opo, sa kaliwang tenga ko po.', 'Yes, in my left ear.'], ['Minsan po, pag gabi.', 'Sometimes, at night.']] },
    { en: 'Is someone talking to you that you can\'t see?', f: 'May kumakausap po ba sa inyo na hindi ninyo nakikita?', c: 'May kumakausap ba sa iyo na hindi mo nakikita?' },
    { en: 'Do you see shadows or evil spirits?', f: 'Nakakakita po ba kayo ng mga anino o maligno?', c: 'Nakakakita ka ba ng mga anino o maligno?', n: 'Follow up: Do others see them too? Does your family believe they\'re real?' },
    { en: 'Do you see things that others don\'t see?', f: 'May nakikita po ba kayong hindi nakikita ng ibang tao?', c: 'May nakikita ka bang hindi nakikita ng iba?' },
    { en: 'Do you see people, animals, or figures that aren\'t really there?', f: 'May nakikita po ba kayong tao, hayop, o hugis na wala naman talaga doon?', c: 'May nakikita ka bang tao, hayop, o hugis na wala naman talaga?' },
    { en: 'Is it one voice or many?', f: 'Isa lang po ba ang boses o marami?', c: 'Isa lang ba ang boses o marami?' },
    { en: 'Is it a man\'s or a woman\'s voice? Do you recognize it?', f: 'Boses po ba ng lalaki o babae? Kilala po ba ninyo kung kanino?', c: 'Boses ba ng lalaki o babae? Kilala mo ba kung kanino?' },
    { en: 'Does the voice come from inside your head or from outside, through your ears?', f: 'Nanggagaling po ba ang boses sa loob ng ulo ninyo o sa labas, sa tenga ninyo?', c: 'Galing ba ang boses sa loob ng ulo mo o sa labas, sa tenga mo?' },
    { en: 'What does the voice say?', f: 'Ano po ang sinasabi ng boses?', c: 'Ano ang sinasabi ng boses?', answers: [['Sinasabi po na wala akong kwenta.', 'It says I\'m worthless.'], ['Minumura po ako.', 'It curses at me.']] },
    { en: 'Do the voices talk to each other about you?', f: 'Nag-uusap po ba ang mga boses tungkol sa inyo?', c: 'Nag-uusap ba ang mga boses tungkol sa iyo?', n: 'Third-person voices discussing the patient.' },
    { en: 'Do they comment on what you are doing?', f: 'Pinupuna po ba nila o kinokomentuhan ang ginagawa ninyo?', c: 'Kinokomentuhan ba nila ang ginagawa mo?', n: 'Running commentary.' },
    { en: 'Do the voices tell you to do things?', f: 'Inuutusan po ba kayo ng boses na gumawa ng mga bagay?', c: 'Inuutusan ka ba ng boses na gumawa ng kung ano?', n: 'Command hallucinations. Always follow up on content.' },
    { en: 'Do they tell you to hurt yourself or others?', f: 'Sinasabihan po ba kayo ng boses na saktan ang sarili ninyo o ang ibang tao?', c: 'Sinasabihan ka ba ng boses na saktan ang sarili mo o ibang tao?' },
    { en: 'Do you follow what the voices say? Can you resist them?', f: 'Sinusunod po ba ninyo ang sinasabi ng boses? Kaya po ba ninyong hindi sumunod?', c: 'Sinusunod mo ba ang boses? Kaya mo bang hindi sumunod?' },
    { en: 'How often do you hear them? Are you hearing them now?', f: 'Gaano po kadalas ninyo ito naririnig? Naririnig po ba ninyo ngayon?', c: 'Gaano kadalas mo naririnig? Naririnig mo ba ngayon?' },
    { en: 'When do you hear them? Only when falling asleep or waking up?', f: 'Kailan po ninyo ito naririnig? Kapag patulog o pagising lang po ba?', c: 'Kailan mo naririnig? Pag patulog o pagising lang ba?', n: 'Hypnagogic/hypnopompic experiences can be normal.' },
    { en: 'Do you smell strange things others can\'t smell?', f: 'May naaamoy po ba kayong kakaiba na hindi naaamoy ng iba?', c: 'May naaamoy ka bang kakaiba na hindi naaamoy ng iba?' },
    { en: 'Does your food taste strange, like poison?', f: 'May kakaiba po bang lasa ang pagkain ninyo, parang may lason?', c: 'May kakaibang lasa ba ang pagkain mo, parang may lason?' },
    { en: 'Do you feel something crawling on your skin or touching you?', f: 'May nararamdaman po ba kayong gumagapang sa balat ninyo o humahawak sa inyo?', c: 'May nararamdaman ka bang gumagapang sa balat mo o humahawak sa iyo?' },
    { en: 'Do you feel something entering or possessing your body?', f: 'May nararamdaman po ba kayong pumapasok o sumasanib sa katawan ninyo?', c: 'May nararamdaman ka bang pumapasok o sumasanib sa katawan mo?', n: 'Ask about possession experiences directly; families may describe them as sapi or sanib.' },
    { en: 'Do your family or neighbors also see or hear these things?', f: 'Nakikita o naririnig din po ba ito ng pamilya o kapitbahay ninyo?', c: 'Nakikita o naririnig din ba ito ng pamilya o kapitbahay mo?', n: 'Helps separate shared cultural experience from individual hallucination.' },
    { en: 'How do you feel when you hear them?', f: 'Ano po ang nararamdaman ninyo kapag naririnig ninyo sila?', c: 'Ano ang nararamdaman mo kapag naririnig mo sila?' }
  ]
},
{
  id: 'delusions', group: 'Interview', title: 'Psychosis: delusions and thought disturbances',
  intro: 'Ask with curiosity, not challenge. Check fixity: "Could there be another explanation?"',
  phrases: [
    { en: 'Do you feel someone wants to harm you?', f: 'Pakiramdam po ba ninyo ay may gustong manakit sa inyo?', c: 'Feeling mo ba may gustong manakit sa iyo?' },
    { en: 'Is someone following or watching you?', f: 'May sumusunod o nagmamanman po ba sa inyo?', c: 'May sumusunod o nagmamanman ba sa iyo?' },
    { en: 'Is someone plotting against you?', f: 'May nagpaplano po ba laban sa inyo?', c: 'May nagpaplano ba laban sa iyo?' },
    { en: 'Do you feel that people are talking about you?', f: 'Pakiramdam po ba ninyo ay pinag-uusapan kayo ng ibang tao?', c: 'Feeling mo ba pinag-uusapan ka ng ibang tao?' },
    { en: 'Is anyone putting something in your food?', f: 'May naglalagay po ba ng kung ano sa pagkain ninyo?', c: 'May naglalagay ba ng kung ano sa pagkain mo?' },
    { en: 'Do you think someone has bewitched you?', f: 'Sa tingin po ba ninyo ay may kumulam sa inyo?', c: 'Sa tingin mo ba may kumulam sa iyo?', n: 'Kulam beliefs are common. Explore whether the family shares it and how elaborated it is.' },
    { en: 'Do the TV, radio, or social media send you special messages?', f: 'May espesyal po bang mensahe para sa inyo ang TV, radyo, o social media?', c: 'May special message ba para sa iyo ang TV, radio, o social media?', n: 'Ideas/delusions of reference.' },
    { en: 'Do you have special powers or abilities that others don\'t have?', f: 'Mayroon po ba kayong espesyal na kapangyarihan o kakayahan na wala sa iba?', c: 'May special powers o abilities ka ba na wala sa iba?', n: 'Grandiosity.' },
    { en: 'Has God or a spirit given you a special mission?', f: 'Binigyan po ba kayo ng Diyos o ng isang espiritu ng espesyal na misyon?', c: 'Binigyan ka ba ng Diyos o ng espiritu ng special mission?' },
    { en: 'Can others read your mind?', f: 'Nababasa po ba ng ibang tao ang isip ninyo?', c: 'Nababasa ba ng iba ang isip mo?' },
    { en: 'Does someone put thoughts into your head that aren\'t yours?', f: 'May naglalagay po ba ng mga isipin sa utak ninyo na hindi sa inyo galing?', c: 'May naglalagay ba ng mga isip sa utak mo na hindi sa iyo galing?', n: 'Thought insertion.' },
    { en: 'Are your thoughts being taken out of your head?', f: 'May kumukuha po ba ng mga iniisip ninyo mula sa utak ninyo?', c: 'May kumukuha ba ng mga iniisip mo mula sa utak mo?', n: 'Thought withdrawal.' },
    { en: 'Can others hear your thoughts out loud?', f: 'Naririnig po ba ng ibang tao ang mga iniisip ninyo?', c: 'Naririnig ba ng iba ang mga iniisip mo?', n: 'Thought broadcasting.' },
    { en: 'Is something controlling your body or actions?', f: 'May kumokontrol po ba sa katawan o sa mga kilos ninyo?', c: 'May kumokontrol ba sa katawan o kilos mo?', n: 'Passivity/delusions of control.' },
    { en: 'Do you feel you have done something terrible and deserve punishment?', f: 'Pakiramdam po ba ninyo ay may nagawa kayong napakasama at dapat kayong parusahan?', c: 'Feeling mo ba may nagawa kang sobrang sama at dapat kang parusahan?', n: 'Delusions of guilt (psychotic depression).' },
    { en: 'Do you feel your body is rotting or your organs are missing?', f: 'Pakiramdam po ba ninyo ay nabubulok ang katawan ninyo o nawawala ang mga lamang-loob ninyo?', c: 'Feeling mo ba nabubulok ang katawan mo o nawawala ang mga laman-loob mo?', n: 'Nihilistic/somatic delusions.' },
    { en: 'Is your spouse being unfaithful?', f: 'Sa tingin po ba ninyo ay nagtataksil ang asawa ninyo?', c: 'Sa tingin mo ba nagloloko ang asawa mo?', n: 'Delusional jealousy. Explore evidence and safety.' },
    { en: 'How sure are you that this is true?', f: 'Gaano po kayo kasigurado na totoo ito?', c: 'Gaano ka kasigurado na totoo ito?' },
    { en: 'Could there be another explanation?', f: 'Puwede po bang may iba pang paliwanag?', c: 'Puwede bang may ibang paliwanag?' },
    { en: 'What have you done because of this?', f: 'Ano po ang ginawa ninyo dahil dito?', c: 'Ano ang ginawa mo dahil dito?', n: 'Ask whether beliefs drive behavior (risk).' }
  ]
},
{
  id: 'suicide', group: 'Risk', title: 'Suicide and self-harm risk',
  intro: 'Asking directly does not increase risk. Move from passive to active ideation, then plan, intent, means, preparation, past attempts, protective factors.',
  phrases: [
    { en: 'With everything you\'re going through, have you felt that life isn\'t worth living?', f: 'Sa lahat po ng pinagdadaanan ninyo, naramdaman na po ba ninyo na parang walang saysay ang buhay?', c: 'Sa lahat ng pinagdadaanan mo, naramdaman mo na ba na parang walang saysay ang buhay?' },
    { en: 'Have you wished you could go to sleep and not wake up?', f: 'Naisip na po ba ninyo na sana matulog na lang kayo at hindi na magising?', c: 'Naisip mo na ba na sana matulog ka na lang at hindi na magising?', n: 'Passive death wish.' },
    { en: 'Have you thought about ending your life?', f: 'Naisip na po ba ninyong wakasan ang inyong buhay?', c: 'Naisip mo na bang wakasan ang buhay mo?' },
    { en: 'Have you thought about killing yourself?', f: 'Naisip na po ba ninyong magpakamatay?', c: 'Naisip mo na bang magpakamatay?', n: 'Use the direct word. Euphemisms can be misunderstood.' },
    { en: 'How often do you have these thoughts?', f: 'Gaano po kadalas ninyo naiisip ito?', c: 'Gaano kadalas mo naiisip ito?' },
    { en: 'Are you having these thoughts now?', f: 'Naiisip po ba ninyo ito ngayon?', c: 'Naiisip mo ba ito ngayon?' },
    { en: 'Have you thought about how you would do it?', f: 'Naisip na po ba ninyo kung paano ninyo ito gagawin?', c: 'Naisip mo na ba kung paano mo ito gagawin?' },
    { en: 'Do you have a plan?', f: 'Mayroon na po ba kayong plano?', c: 'May plano ka na ba?' },
    { en: 'Do you have access to pills, poison, a rope, a knife, or a gun?', f: 'Mayroon po ba kayong maaabot na gamot, lason, lubid, kutsilyo, o baril?', c: 'May access ka ba sa gamot, lason, lubid, kutsilyo, o baril?', n: 'Pesticides (e.g., in farming areas) are a common means in the Philippines. Ask specifically.' },
    { en: 'Is there any pesticide or chemical at home?', f: 'May pesticide o kemikal po ba sa bahay ninyo?', c: 'May pesticide o kemikal ba sa bahay ninyo?' },
    { en: 'Have you done anything to prepare, like writing a letter or giving away your things?', f: 'May ginawa na po ba kayong paghahanda, tulad ng pagsulat ng sulat o pamimigay ng mga gamit ninyo?', c: 'May ginawa ka na bang paghahanda, tulad ng pagsulat ng sulat o pamimigay ng gamit mo?' },
    { en: 'Do you intend to act on these thoughts?', f: 'May balak po ba kayong gawin ito?', c: 'May balak ka bang gawin ito?' },
    { en: 'Have you ever tried to end your life before?', f: 'Sinubukan na po ba ninyong wakasan ang buhay ninyo dati?', c: 'Sinubukan mo na bang wakasan ang buhay mo dati?' },
    { en: 'What did you do? What happened afterwards?', f: 'Ano po ang ginawa ninyo? Ano po ang nangyari pagkatapos?', c: 'Ano ang ginawa mo? Ano ang nangyari pagkatapos?' },
    { en: 'Have you hurt yourself on purpose, like cutting or burning?', f: 'Sinadya na po ba ninyong saktan ang sarili ninyo, tulad ng paglalaslas o pagpapaso?', c: 'Sinadya mo na bang saktan ang sarili mo, tulad ng paglalaslas o pagpapaso?' },
    { en: 'What has stopped you from acting on these thoughts?', f: 'Ano po ang pumipigil sa inyo na gawin ito?', c: 'Ano ang pumipigil sa iyo na gawin ito?', n: 'Protective factors: family, children, faith (kasalanan), hope.' },
    { en: 'What gives you reasons to keep living?', f: 'Ano po ang nagbibigay sa inyo ng dahilan para magpatuloy sa buhay?', c: 'Ano ang dahilan mo para magpatuloy?' },
    { en: 'Can you tell me or someone you trust if these thoughts get stronger?', f: 'Puwede po ba ninyong sabihin sa akin o sa taong pinagkakatiwalaan ninyo kung lumakas ang mga isiping ito?', c: 'Puwede mo bang sabihin sa akin o sa taong pinagkakatiwalaan mo kung lumakas ang mga isiping ito?' },
    { en: 'Thank you for telling me. You are not alone in this.', f: 'Salamat po sa pagsasabi ninyo sa akin. Hindi po kayo nag-iisa dito.', c: 'Salamat sa pagsasabi mo sa akin. Hindi ka nag-iisa dito.' },
    { en: 'You can call the NCMH crisis hotline at 1553 any time.', f: 'Puwede po kayong tumawag sa NCMH crisis hotline sa 1553 kahit anong oras.', c: 'Puwede kang tumawag sa NCMH crisis hotline sa 1553 anytime.', n: 'NCMH Crisis Hotline (24/7): 1553 (toll-free landline, nationwide), 0919-057-1553, 0917-899-8727. Numbers as reported January 2026; verify periodically.' }
  ]
},
{
  id: 'violence', group: 'Risk', title: 'Violence and homicide risk',
  intro: 'Ask about thoughts of harming others, targets, history of violence, weapons, and substance use.',
  phrases: [
    { en: 'Have you had thoughts of hurting someone else?', f: 'Naisip na po ba ninyong saktan ang ibang tao?', c: 'Naisip mo na bang saktan ang ibang tao?' },
    { en: 'Who? Have you thought about how?', f: 'Sino po? Naisip na po ba ninyo kung paano?', c: 'Sino? Naisip mo na ba kung paano?' },
    { en: 'Have you ever hurt anyone when you were angry?', f: 'May nasaktan na po ba kayo noong galit kayo?', c: 'May nasaktan ka na ba noong galit ka?' },
    { en: 'Do you carry a weapon?', f: 'May dala po ba kayong armas, tulad ng kutsilyo o baril?', c: 'May dala ka bang armas, tulad ng kutsilyo o baril?' },
    { en: 'Have you been in trouble with the police?', f: 'Nagkaproblema na po ba kayo sa pulis?', c: 'Nagkaproblema ka na ba sa pulis?' },
    { en: 'Does your temper get out of control?', f: 'Nawawalan po ba kayo ng kontrol kapag nagagalit?', c: 'Nawawalan ka ba ng kontrol kapag galit ka?' }
  ]
},
{
  id: 'deescalation', group: 'Risk', title: 'De-escalation with an agitated patient',
  intro: 'Calm voice, simple words, respect. Offer choices. Keep yourself safe with an exit and staff nearby.',
  phrases: [
    { en: 'I\'m here to help you.', f: 'Nandito po ako para tumulong sa inyo.', c: 'Nandito ako para tulungan ka.' },
    { en: 'You are safe here.', f: 'Ligtas po kayo dito.', c: 'Safe ka dito.' },
    { en: 'Let\'s calm down first.', f: 'Kumalma po muna tayo.', c: 'Kalma muna tayo.' },
    { en: 'Breathe slowly with me.', f: 'Huminga po tayo nang dahan-dahan.', c: 'Huminga tayo nang dahan-dahan.' },
    { en: 'I can see that you are very upset.', f: 'Nakikita ko po na sobrang sama ng loob ninyo.', c: 'Nakikita ko na sobrang upset ka.' },
    { en: 'Tell me what you need.', f: 'Sabihin po ninyo sa akin kung ano ang kailangan ninyo.', c: 'Sabihin mo sa akin kung ano ang kailangan mo.' },
    { en: 'Would you like to sit down?', f: 'Gusto po ba ninyong umupo?', c: 'Gusto mo bang umupo?' },
    { en: 'Would you like some water?', f: 'Gusto po ba ninyo ng tubig?', c: 'Gusto mo ng tubig?' },
    { en: 'Please put that down.', f: 'Pakibaba po ninyo iyan.', c: 'Pakibaba mo iyan.' },
    { en: 'We will give you medicine to help you calm down.', f: 'Bibigyan po namin kayo ng gamot para kumalma kayo.', c: 'Bibigyan ka namin ng gamot para kumalma ka.' },
    { en: 'Would you prefer a tablet or an injection?', f: 'Mas gusto po ba ninyo ng tableta o iniksiyon?', c: 'Tablet ba o injection ang gusto mo?', n: 'Offering a choice preserves dignity and often prevents restraint.' },
    { en: 'No one will hurt you.', f: 'Walang mananakit sa inyo.', c: 'Walang mananakit sa iyo.' }
  ]
},
{
  id: 'substance', group: 'Interview', title: 'Alcohol, drugs, and gambling',
  intro: 'Ask non-judgmentally. Avoid "adik." Interview the patient alone when possible.',
  phrases: [
    { en: 'Do you drink alcohol?', f: 'Umiinom po ba kayo ng alak?', c: 'Umiinom ka ba ng alak?' },
    { en: 'What do you drink? Beer, gin, tuba, lambanog?', f: 'Ano po ang iniinom ninyo? Beer, gin, tuba, o lambanog?', c: 'Ano ang iniinom mo? Beer, gin, tuba, o lambanog?' },
    { en: 'How many bottles in one sitting?', f: 'Ilang bote po sa isang inuman?', c: 'Ilang bote sa isang inuman?' },
    { en: 'How many days a week do you drink?', f: 'Ilang araw po sa isang linggo kayo umiinom?', c: 'Ilang araw sa isang linggo ka umiinom?' },
    { en: 'Do you drink in the morning to steady your nerves?', f: 'Umiinom po ba kayo sa umaga para mawala ang panginginig o nerbiyos?', c: 'Umiinom ka ba sa umaga para mawala ang panginginig?' },
    { en: 'When you stop drinking, do your hands shake, do you sweat, or see things?', f: 'Kapag tumigil po kayo sa pag-inom, nanginginig po ba ang kamay ninyo, pinagpapawisan, o may nakikita kayong kakaiba?', c: 'Kapag tumigil ka sa pag-inom, nanginginig ba ang kamay mo, pinagpapawisan ka, o may nakikita kang kakaiba?', n: 'Withdrawal screen. Ask the time of the last drink.' },
    { en: 'When was your last drink?', f: 'Kailan po ang huling inom ninyo?', c: 'Kailan ang huling inom mo?' },
    { en: 'Have you ever used drugs like shabu, marijuana, or rugby?', f: 'Nakagamit na po ba kayo ng droga tulad ng shabu, marijuana, o rugby?', c: 'Nakagamit ka na ba ng droga tulad ng shabu, marijuana, o rugby?' },
    { en: 'How often, and when was the last time?', f: 'Gaano po kadalas, at kailan po ang huling gamit ninyo?', c: 'Gaano kadalas, at kailan ang huling gamit mo?' },
    { en: 'Did you use when the voices started?', f: 'Gumagamit po ba kayo noong nagsimula ang mga boses?', c: 'Gumagamit ka ba noong nagsimula ang mga boses?' },
    { en: 'Do you smoke? How many sticks a day?', f: 'Naninigarilyo po ba kayo? Ilang stick po sa isang araw?', c: 'Nagyoyosi ka ba? Ilang stick sa isang araw?' },
    { en: 'Do you gamble, for example online sabong or casino?', f: 'Nagsusugal po ba kayo, halimbawa online sabong o casino?', c: 'Nagsusugal ka ba, tulad ng online sabong o casino?' },
    { en: 'Has drinking caused problems with your family or work?', f: 'Nagdulot na po ba ng problema ang pag-inom sa pamilya o trabaho ninyo?', c: 'Nagka-problema ka na ba sa pamilya o trabaho dahil sa pag-inom?' }
  ]
},
{
  id: 'history', group: 'Interview', title: 'Past psychiatric, medical, and medication history',
  intro: 'Ask about prior episodes, hospitalizations, medicines (names, doses, adherence), and medical conditions.',
  phrases: [
    { en: 'Have you seen a psychiatrist or psychologist before?', f: 'Nakapagpatingin na po ba kayo sa psychiatrist o psychologist dati?', c: 'Nakapagpa-check up ka na ba sa psychiatrist o psychologist dati?' },
    { en: 'Have you been admitted to a hospital for this?', f: 'Na-admit na po ba kayo sa ospital dahil dito?', c: 'Na-admit ka na ba sa ospital dahil dito?' },
    { en: 'Have you been to NCMH or another mental hospital?', f: 'Nakapunta na po ba kayo sa NCMH o sa ibang mental hospital?', c: 'Nakapunta ka na ba sa NCMH o ibang mental hospital?' },
    { en: 'What medicines were you given? Do you have the prescription or the box?', f: 'Anong mga gamot po ang ibinigay sa inyo? Dala po ba ninyo ang reseta o ang kahon?', c: 'Anong gamot ang binigay sa iyo? Dala mo ba ang reseta o kahon?' },
    { en: 'Are you still taking them?', f: 'Iniinom pa po ba ninyo ang mga ito?', c: 'Iniinom mo pa ba?' },
    { en: 'Why did you stop?', f: 'Bakit po kayo tumigil?', c: 'Bakit ka tumigil?', answers: [['Wala na po kaming pambili.', 'We had no more money to buy it.'], ['Gumaling na po kasi ako.', 'Because I got better already.'], ['Nakakaantok po kasi.', 'It made me sleepy.']] },
    { en: 'Do you have other illnesses like high blood pressure, diabetes, thyroid problems, or seizures?', f: 'May iba pa po ba kayong sakit tulad ng high blood, diabetes, sakit sa thyroid, o kombulsiyon?', c: 'May iba ka pa bang sakit tulad ng high blood, diabetes, thyroid, o seizure?' },
    { en: 'Have you had a head injury or lost consciousness?', f: 'Nauntog o nabagok na po ba ang ulo ninyo, o nawalan ng malay?', c: 'Nabagok na ba ang ulo mo o nawalan ka ng malay?' },
    { en: 'Do you have any allergies to medicine?', f: 'May allergy po ba kayo sa anumang gamot?', c: 'May allergy ka ba sa gamot?' },
    { en: 'Are you pregnant or breastfeeding? When was your last period?', f: 'Buntis po ba kayo o nagpapasuso? Kailan po ang huling regla ninyo?', c: 'Buntis ka ba o nagpapa-breastfeed? Kailan ang huling mens mo?' },
    { en: 'Are you taking herbal medicine or anything from a folk healer?', f: 'Umiinom po ba kayo ng herbal o anumang galing sa albularyo?', c: 'Umiinom ka ba ng herbal o galing sa albularyo?' }
  ]
},
{
  id: 'family-hx', group: 'Interview', title: 'Family history',
  intro: 'Families may hide psychiatric illness due to stigma. Use plain descriptions, not labels.',
  phrases: [
    { en: 'Has anyone in your family had a mental illness?', f: 'May kamag-anak po ba kayong nagkaroon ng sakit sa pag-iisip?', c: 'May kamag-anak ka bang nagkaroon ng sakit sa pag-iisip?' },
    { en: 'Has anyone needed to see a psychiatrist or been admitted to NCMH?', f: 'May kamag-anak po ba kayong nagpatingin sa psychiatrist o na-admit sa NCMH?', c: 'May kamag-anak ka bang nagpa-check up sa psychiatrist o na-admit sa NCMH?' },
    { en: 'Has anyone in your family taken their own life?', f: 'May kamag-anak po ba kayong nagpakamatay?', c: 'May kamag-anak ka bang nagpakamatay?' },
    { en: 'Has anyone had problems with alcohol or drugs?', f: 'May kamag-anak po ba kayong nagkaproblema sa alak o droga?', c: 'May kamag-anak ka bang nagka-problema sa alak o droga?' },
    { en: 'Was anyone known to talk to themselves or act strangely?', f: 'May kamag-anak po ba kayong kinakausap ang sarili o kakaiba ang kilos?', c: 'May kamag-anak ka bang kinakausap ang sarili o kakaiba ang kilos?', n: 'Lay descriptions find history that labels miss.' }
  ]
},
{
  id: 'social', group: 'Interview', title: 'Personal and social history',
  intro: 'Development, education, work, relationships, living situation, faith, and supports.',
  phrases: [
    { en: 'Where did you grow up? Who raised you?', f: 'Saan po kayo lumaki? Sino po ang nagpalaki sa inyo?', c: 'Saan ka lumaki? Sino ang nagpalaki sa iyo?' },
    { en: 'What was your childhood like?', f: 'Kumusta po ang inyong pagkabata?', c: 'Kumusta ang pagkabata mo?' },
    { en: 'How far did you get in school?', f: 'Hanggang saan po kayo nakapag-aral?', c: 'Hanggang saan ka nakapag-aral?' },
    { en: 'What is your work? Are you working now?', f: 'Ano po ang trabaho ninyo? May trabaho po ba kayo ngayon?', c: 'Ano ang trabaho mo? May trabaho ka ba ngayon?' },
    { en: 'Are you married? Do you have children?', f: 'May asawa po ba kayo? May mga anak po ba kayo?', c: 'May asawa ka ba? May anak ka ba?' },
    { en: 'Who do you live with?', f: 'Sino po ang kasama ninyo sa bahay?', c: 'Sino ang kasama mo sa bahay?' },
    { en: 'Who do you turn to when you have a problem?', f: 'Kanino po kayo lumalapit kapag may problema kayo?', c: 'Kanino ka lumalapit kapag may problema ka?' },
    { en: 'Is anyone in your family working abroad?', f: 'May kapamilya po ba kayong nagtatrabaho sa ibang bansa?', c: 'May kapamilya ka bang OFW?' },
    { en: 'How are you doing financially?', f: 'Kumusta po ang inyong kabuhayan o pinansiyal na kalagayan?', c: 'Kumusta ang finances ninyo?' },
    { en: 'What is your religion? Is your faith important to you?', f: 'Ano po ang inyong relihiyon? Mahalaga po ba sa inyo ang pananampalataya?', c: 'Ano ang relihiyon mo? Mahalaga ba sa iyo ang faith mo?' }
  ]
},
{
  id: 'collateral', group: 'Interview', title: 'Collateral history from family',
  intro: 'Families often bring the patient and give most of the history. Listen for daw/raw (reported speech).',
  phrases: [
    { en: 'What is your relationship to the patient?', f: 'Ano po ang kaugnayan ninyo sa pasyente?', c: 'Ano ang relasyon mo sa pasyente?' },
    { en: 'What changes have you noticed in him/her?', f: 'Ano pong mga pagbabago ang napansin ninyo sa kanya?', c: 'Anong mga pagbabago ang napansin mo sa kanya?' },
    { en: 'When did you first notice?', f: 'Kailan po ninyo unang napansin?', c: 'Kailan mo unang napansin?' },
    { en: 'Does he/she talk or laugh alone?', f: 'Nagsasalita o tumatawa po ba siyang mag-isa?', c: 'Nagsasalita o tumatawa ba siyang mag-isa?' },
    { en: 'Does he/she still bathe, eat, and sleep normally?', f: 'Naliligo, kumakain, at natutulog pa po ba siya nang normal?', c: 'Naliligo, kumakain, at natutulog pa ba siya nang normal?' },
    { en: 'Has he/she become violent or destroyed things?', f: 'Naging marahas po ba siya o may sinira po ba siyang mga gamit?', c: 'Nagwala ba siya o may sinira ba siyang gamit?' },
    { en: 'Has he/she said anything about wanting to die?', f: 'May sinabi po ba siya tungkol sa pagnanais na mamatay?', c: 'May sinabi ba siya na gusto na niyang mamatay?' },
    { en: 'Was he/she using alcohol or drugs?', f: 'Umiinom po ba siya ng alak o gumagamit ng droga?', c: 'Umiinom ba siya o gumagamit ng droga?' },
    { en: 'Did you see this yourself, or did someone tell you?', f: 'Kayo po mismo ba ang nakakita nito, o may nagsabi lang sa inyo?', c: 'Ikaw mismo ba ang nakakita, o may nagkuwento lang?' },
    { en: 'May I talk to him/her alone for a few minutes?', f: 'Puwede ko po ba siyang makausap nang mag-isa nang ilang minuto?', c: 'Puwede ko ba siyang makausap nang mag-isa sandali?' },
    { en: 'How are you coping with all this?', f: 'Kumusta naman po kayo sa lahat ng ito?', c: 'Kumusta ka naman sa lahat ng ito?', n: 'Caregiver burden is common. Acknowledge it.' }
  ]
},
{
  id: 'mse-cog', group: 'Mental Status Exam', title: 'MSE: orientation, attention, memory',
  intro: 'Bedside cognitive questions in your own words (not a copyrighted instrument). Many Filipinos do arithmetic in English; allow it.',
  phrases: [
    { en: 'I\'ll ask some questions to check your memory and concentration. Some are easy, some are hard.', f: 'Magtatanong po ako ng ilang bagay para masuri ang memorya at konsentrasyon ninyo. Ang ilan ay madali, ang ilan ay mahirap.', c: 'Magtatanong ako ng ilang bagay para i-check ang memory at concentration mo. Yung iba madali, yung iba mahirap.' },
    { en: 'What is your full name?', f: 'Ano po ang buong pangalan ninyo?', c: 'Ano ang buong pangalan mo?' },
    { en: 'How old are you?', f: 'Ilang taon na po kayo?', c: 'Ilang taon ka na?' },
    { en: 'What is today\'s date?', f: 'Anong petsa po ngayon?', c: 'Anong petsa ngayon?' },
    { en: 'What day of the week is it?', f: 'Anong araw po ngayon?', c: 'Anong araw ngayon?' },
    { en: 'What month and year is it?', f: 'Anong buwan at taon po ngayon?', c: 'Anong buwan at taon ngayon?' },
    { en: 'Is it morning, afternoon, or evening?', f: 'Umaga, hapon, o gabi na po ba ngayon?', c: 'Umaga, hapon, o gabi na ba ngayon?' },
    { en: 'Where are we right now?', f: 'Nasaan po tayo ngayon?', c: 'Nasaan tayo ngayon?' },
    { en: 'What city are we in?', f: 'Anong lungsod po ito?', c: 'Anong city ito?' },
    { en: 'Who am I? What do I do here?', f: 'Sino po ako? Ano po ang trabaho ko dito?', c: 'Sino ako? Ano ang trabaho ko dito?' },
    { en: 'Remember these three words: ball, tree, key. Please repeat them.', f: 'Tandaan po ninyo ang tatlong salitang ito: bola, puno, susi. Pakiulit po.', c: 'Tandaan mo ang tatlong salita: bola, puno, susi. Ulitin mo.' },
    { en: 'Count backwards from 100 by sevens.', f: 'Magbilang po kayo pababa mula isandaan, bawasan ng pito tuwing bilang.', c: 'Mag-count down ka mula 100, minus 7 every time.', n: 'Expected: 93, 86, 79, 72, 65. Tagalog: siyamnapu\'t tatlo, walumpu\'t anim... Most will answer in English.' },
    { en: 'Spell "WORLD" backwards. (Alternative: say the days of the week backwards.)', f: 'Sabihin po ninyo ang mga araw ng linggo nang pabaligtad, simula sa Linggo.', c: 'Sabihin mo ang mga araw ng linggo pabaliktad, simula sa Linggo.', n: 'Spelling WORLD backwards is English-dependent. Days backwards works in Tagalog: Linggo, Sabado, Biyernes...' },
    { en: 'Repeat these numbers after me: 3, 8, 2, 5.', f: 'Ulitin po ninyo ang mga numerong ito: tatlo, walo, dalawa, lima.', c: 'Ulitin mo: 3, 8, 2, 5.', n: 'Digit span (attention).' },
    { en: 'What were the three words I asked you to remember?', f: 'Ano po ang tatlong salitang pinatandaan ko sa inyo kanina?', c: 'Ano yung tatlong salitang pinatandaan ko kanina?' },
    { en: 'What did you eat for breakfast?', f: 'Ano po ang kinain ninyo sa almusal?', c: 'Ano ang kinain mo sa almusal?', n: 'Recent memory; verify with family.' },
    { en: 'Who is the President of the Philippines?', f: 'Sino po ang Pangulo ng Pilipinas ngayon?', c: 'Sino ang Presidente ng Pilipinas ngayon?', n: 'General knowledge; adjust to education level.' },
    { en: 'What is this? (show a pen, a watch)', f: 'Ano po ito?', c: 'Ano ito?', n: 'Naming: ballpen, relo.' },
    { en: 'Take this paper in your right hand, fold it in half, and put it on the table.', f: 'Kunin po ninyo ang papel gamit ang kanang kamay, tiklupin sa gitna, at ilagay sa mesa.', c: 'Kunin mo ang papel gamit ang kanang kamay, tiklupin sa gitna, at ilagay sa mesa.', n: 'Three-step command.' }
  ]
},
{
  id: 'mse-abstract', group: 'Mental Status Exam', title: 'MSE: abstraction, judgment, insight',
  intro: 'Use familiar Filipino proverbs (salawikain) for abstraction. Concrete answers may suggest psychosis, cognitive impairment, or limited schooling.',
  phrases: [
    { en: 'How are a banana and a mango alike?', f: 'Paano po magkapareho ang saging at ang mangga?', c: 'Paano magkapareho ang saging at mangga?', n: 'Abstract answer: both are fruits (prutas).' },
    { en: 'How are a jeepney and a tricycle alike?', f: 'Paano po magkapareho ang dyip at ang traysikel?', c: 'Paano magkapareho ang jeep at tricycle?', n: 'Both are vehicles / transportation (sasakyan).' },
    { en: 'What does this saying mean: "Where there is perseverance, there is stew"?', f: 'Ano po ang ibig sabihin ng kasabihang "Kapag may tiyaga, may nilaga"?', c: 'Ano ang ibig sabihin ng "Kapag may tiyaga, may nilaga"?', n: 'Abstract: hard work pays off. Concrete: if you\'re patient, you\'ll have soup.' },
    { en: 'What does this mean: "One who doesn\'t look back at where they came from won\'t reach their destination"?', f: 'Ano po ang ibig sabihin ng "Ang hindi lumingon sa pinanggalingan ay hindi makararating sa paroroonan"?', c: 'Ano ang ibig sabihin ng "Ang hindi lumingon sa pinanggalingan ay hindi makararating sa paroroonan"?', n: 'Abstract: remember your roots / be grateful.' },
    { en: 'What does this mean: "No matter how long the procession, it still ends at the church"?', f: 'Ano po ang ibig sabihin ng "Gaano man kahaba ang prusisyon, sa simbahan din ang tuloy"?', c: 'Ano ang ibig sabihin ng "Gaano man kahaba ang prusisyon, sa simbahan din ang tuloy"?', n: 'Abstract: things end up where they\'re meant to; destiny/inevitability.' },
    { en: 'If you found a sealed, stamped, addressed envelope on the street, what would you do?', f: 'Kung may napulot po kayong sobre sa kalye na may selyo at address na, ano po ang gagawin ninyo?', c: 'Kung may napulot kang sobre sa kalye na may selyo at address, ano ang gagawin mo?' },
    { en: 'If you smelled smoke in a crowded cinema, what would you do?', f: 'Kung may naamoy po kayong usok sa loob ng sinehan na maraming tao, ano po ang gagawin ninyo?', c: 'Kung may naamoy kang usok sa sinehan na maraming tao, ano ang gagawin mo?' },
    { en: 'Do you think you are sick?', f: 'Sa tingin po ba ninyo ay may sakit kayo?', c: 'Sa tingin mo ba may sakit ka?' },
    { en: 'Why do you think your family brought you here?', f: 'Bakit po sa tingin ninyo kayo dinala dito ng pamilya ninyo?', c: 'Bakit sa tingin mo dinala ka dito ng pamilya mo?' },
    { en: 'Do you think medicine could help you?', f: 'Sa tingin po ba ninyo ay makakatulong ang gamot sa inyo?', c: 'Sa tingin mo ba makakatulong ang gamot?' },
    { en: 'What would you do if the voices came back after you go home?', f: 'Ano po ang gagawin ninyo kung bumalik ang mga boses pag-uwi ninyo?', c: 'Ano ang gagawin mo kung bumalik ang mga boses pag-uwi mo?', n: 'Judgment and relapse planning.' }
  ]
},
{
  id: 'mse-describe', group: 'Mental Status Exam', title: 'MSE: describing observations',
  intro: 'English MSE terms paired with the plain Tagalog families use. Use these to understand collateral and explain findings.',
  phrases: [
    { en: 'Unkempt, poor hygiene', f: 'Magulo ang ayos at hindi naliligo', c: 'Gusgusin, hindi naliligo', n: 'gusgusin = unkempt, grubby' },
    { en: 'Well-groomed', f: 'Maayos ang pananamit at malinis', c: 'Malinis at maayos manamit' },
    { en: 'Poor eye contact', f: 'Hindi tumitingin sa mata', c: 'Ayaw tumingin sa mata', n: 'Can be cultural deference to authority. Interpret carefully.' },
    { en: 'Psychomotor agitation', f: 'Hindi mapakali, palakad-lakad', c: 'Di mapakali, lakad nang lakad' },
    { en: 'Psychomotor retardation', f: 'Mabagal kumilos at magsalita', c: 'Ang bagal kumilos at magsalita' },
    { en: 'Pressured speech', f: 'Mabilis at tuloy-tuloy magsalita, mahirap sabatan', c: 'Ang bilis magsalita, walang tigil' },
    { en: 'Poverty of speech', f: 'Kaunti lang magsalita, maiikli ang sagot', c: 'Tipid magsalita' },
    { en: 'Blunted / flat affect', f: 'Walang emosyon ang mukha', c: 'Walang reaction ang mukha, parang blangko' },
    { en: 'Labile affect', f: 'Pabago-bago ang emosyon, biglang iiyak tapos tatawa', c: 'Pabago-bago ang mood, iiyak tapos tatawa' },
    { en: 'Tangential / loose associations', f: 'Paiba-iba ang usapan, hindi masundan ang sinasabi', c: 'Kung saan-saan napupunta ang kuwento, di masundan' },
    { en: 'Flight of ideas', f: 'Mabilis lumipat sa iba\'t ibang paksa', c: 'Ang bilis magpalipat-lipat ng topic' },
    { en: 'Responding to internal stimuli', f: 'Parang may kinakausap o pinakikinggan na wala naman', c: 'Parang may kausap na hindi nakikita' },
    { en: 'Guarded', f: 'Mapaghinala at ayaw magsalita tungkol sa sarili', c: 'Defensive, ayaw magkuwento' },
    { en: 'Catatonic / mute', f: 'Hindi gumagalaw o nagsasalita, nakatulala', c: 'Tulala, hindi gumagalaw o nagsasalita' },
    { en: 'Disoriented', f: 'Hindi alam kung nasaan siya o anong araw ngayon', c: 'Lito, hindi alam kung nasaan o anong araw' },
    { en: 'Poor insight', f: 'Hindi naniniwalang may sakit siya', c: 'Ayaw maniwalang may sakit siya' },
    { en: 'Euthymic mood', f: 'Normal ang pakiramdam, hindi malungkot o sobrang saya', c: 'Okay ang mood, normal lang' },
    { en: 'Irritable', f: 'Mainit ang ulo, madaling magalit', c: 'Mainitin ang ulo' }
  ]
},
{
  id: 'explain', group: 'Management', title: 'Explaining diagnosis and treatment',
  intro: 'Use simple words, avoid stigmatizing labels, check understanding with teach-back.',
  phrases: [
    { en: 'What you are experiencing is an illness, like diabetes or high blood pressure. It can be treated.', f: 'Ang nararanasan po ninyo ay isang sakit, katulad ng diabetes o high blood. Nagagamot po ito.', c: 'Ang nararanasan mo ay isang sakit, katulad ng diabetes o high blood. Nagagamot ito.' },
    { en: 'It is not your fault.', f: 'Hindi po ninyo ito kasalanan.', c: 'Hindi mo ito kasalanan.' },
    { en: 'This is not because you are weak.', f: 'Hindi po ito dahil mahina kayo.', c: 'Hindi ito dahil mahina ka.' },
    { en: 'The brain is also an organ that can get sick.', f: 'Ang utak po ay bahagi rin ng katawan na puwedeng magkasakit.', c: 'Ang utak ay parte rin ng katawan na puwedeng magkasakit.' },
    { en: 'This is called depression. It affects your mood, sleep, and energy.', f: 'Ang tawag po dito ay depresyon. Naaapektuhan nito ang inyong pakiramdam, tulog, at lakas.', c: 'Ang tawag dito ay depression. Naaapektuhan nito ang mood, tulog, at energy mo.' },
    { en: 'Many people recover with treatment.', f: 'Maraming tao po ang gumagaling sa tamang gamutan.', c: 'Maraming tao ang gumagaling sa tamang gamutan.' },
    { en: 'The medicine takes two to four weeks to work.', f: 'Dalawa hanggang apat na linggo po bago umepekto ang gamot.', c: '2 to 4 weeks bago tumalab ang gamot.' },
    { en: 'Don\'t stop the medicine even if you feel better.', f: 'Huwag po ninyong ititigil ang gamot kahit gumaan na ang pakiramdam ninyo.', c: 'Huwag mong itigil ang gamot kahit okay ka na.' },
    { en: 'Can you tell me in your own words how you will take the medicine?', f: 'Puwede po ba ninyong sabihin sa sarili ninyong salita kung paano ninyo iinumin ang gamot?', c: 'Puwede mo bang sabihin sa sarili mong salita kung paano mo iinumin ang gamot?', n: 'Teach-back. Counters "opo" without understanding.' },
    { en: 'We will also do talk therapy.', f: 'Magkakaroon din po tayo ng psychotherapy, o pag-uusap na gamutan.', c: 'Magkakaroon din tayo ng therapy, yung pag-uusap.' },
    { en: 'You can continue praying and going to church. Both can help.', f: 'Puwede po kayong magpatuloy sa pagdarasal at pagsisimba. Pareho pong makakatulong.', c: 'Puwede kang magpatuloy sa pagdarasal at pagsisimba. Pareho silang makakatulong.' },
    { en: 'Do you have any questions?', f: 'May tanong po ba kayo?', c: 'May tanong ka ba?' }
  ]
},
{
  id: 'meds', group: 'Management', title: 'Medication side effects and adherence',
  intro: 'Ask specifically. Patients may attribute side effects to "pasma" or simply stop the medicine.',
  phrases: [
    { en: 'Are you taking your medicine every day?', f: 'Iniinom po ba ninyo ang gamot araw-araw?', c: 'Iniinom mo ba ang gamot araw-araw?' },
    { en: 'How many times did you miss it this week?', f: 'Ilang beses po kayong hindi nakainom ngayong linggo?', c: 'Ilang beses kang hindi nakainom this week?' },
    { en: 'Is anything making it hard to take the medicine, like cost?', f: 'May nagpapahirap po ba sa pag-inom ninyo ng gamot, tulad ng presyo?', c: 'May nagpapahirap ba sa pag-inom mo ng gamot, tulad ng presyo?', n: 'Cost is a major adherence barrier. Ask about Malasakit Centers and free government medicines.' },
    { en: 'Are you sleepy or dizzy?', f: 'Inaantok o nahihilo po ba kayo?', c: 'Inaantok o nahihilo ka ba?' },
    { en: 'Does your body feel stiff?', f: 'Naninigas po ba ang katawan ninyo?', c: 'Naninigas ba ang katawan mo?' },
    { en: 'Are your hands shaking?', f: 'Nanginginig po ba ang mga kamay ninyo?', c: 'Nanginginig ba ang kamay mo?' },
    { en: 'Do you feel restless, like you can\'t sit still?', f: 'Hindi po ba kayo mapakali, parang hindi kayo makaupo nang matagal?', c: 'Di ka ba mapakali, parang hindi ka makaupo nang matagal?', n: 'Akathisia.' },
    { en: 'Does your neck or tongue twist or stiffen? Is it hard to move your eyes?', f: 'Pumipilipit o naninigas po ba ang leeg o dila ninyo? Nahihirapan po bang igalaw ang mata?', c: 'Pumipilipit o naninigas ba ang leeg o dila mo? Hirap bang igalaw ang mata?', n: 'Acute dystonia. Urgent.' },
    { en: 'Are you drooling?', f: 'Naglalaway po ba kayo?', c: 'Naglalaway ka ba?' },
    { en: 'Have you gained weight or become very hungry?', f: 'Tumaba po ba kayo o laging gutom?', c: 'Tumaba ka ba o laging gutom?' },
    { en: 'Any changes in your period or breasts?', f: 'May pagbabago po ba sa regla ninyo o sa dibdib?', c: 'May pagbabago ba sa mens o sa dibdib mo?' },
    { en: 'Any problems with sexual function?', f: 'May problema po ba kayo sa sekswal na pakikipagtalik?', c: 'May problema ka ba sa sex life mo?' },
    { en: 'Do you have a fever, very stiff muscles, or confusion?', f: 'May lagnat po ba kayo, sobrang paninigas ng kalamnan, o pagkalito?', c: 'May lagnat ka ba, sobrang paninigas ng muscles, o nalilito ka?', n: 'NMS screen. Emergency.' },
    { en: 'Is your mouth dry? Are you constipated?', f: 'Tuyo po ba ang bibig ninyo? Hirap po ba kayong dumumi?', c: 'Tuyo ba ang bibig mo? Constipated ka ba?' }
  ]
},
{
  id: 'admission', group: 'Management', title: 'Admission, safety, and discharge',
  intro: 'Explain why, how long, and what to expect. Families often fear psychiatric admission.',
  phrases: [
    { en: 'I recommend that you stay in the hospital for a while.', f: 'Inirerekomenda ko po na manatili muna kayo sa ospital.', c: 'Ang suggestion ko ay mag-stay ka muna sa ospital.' },
    { en: 'This is for your safety and so we can adjust your medicine.', f: 'Ito po ay para sa inyong kaligtasan at para maayos namin ang inyong gamot.', c: 'Para ito sa kaligtasan mo at para maayos namin ang gamot mo.' },
    { en: 'Your family can visit you.', f: 'Puwede po kayong dalawin ng pamilya ninyo.', c: 'Puwede kang dalawin ng pamilya mo.' },
    { en: 'We will remove sharp objects and belts for safety.', f: 'Kukunin po muna namin ang mga matutulis na bagay at sinturon para sa kaligtasan.', c: 'Kukunin muna namin ang matutulis na bagay at belt para safe.' },
    { en: 'The nurses will check on you often.', f: 'Madalas po kayong titingnan ng mga nars.', c: 'Madalas kang titingnan ng mga nurse.' },
    { en: 'You can go home when you are better.', f: 'Puwede na po kayong umuwi kapag mas maayos na kayo.', c: 'Puwede ka nang umuwi kapag okay ka na.' },
    { en: 'Your follow-up check-up is in two weeks.', f: 'Ang follow-up check-up po ninyo ay pagkalipas ng dalawang linggo.', c: 'Ang follow-up mo ay after 2 weeks.' },
    { en: 'Come back right away if the voices return or you have thoughts of hurting yourself.', f: 'Bumalik po kayo agad kapag bumalik ang mga boses o kung naisip ninyong saktan ang sarili ninyo.', c: 'Bumalik ka agad kapag bumalik ang mga boses o kung naisip mong saktan ang sarili mo.' }
  ]
},
{
  id: 'child', group: 'Special populations', title: 'Children and adolescents',
  intro: 'Use simple language, ka/mo, and age-appropriate topics. See adolescents alone for HEADSS topics.',
  phrases: [
    { en: 'Hi! What\'s your name? How old are you?', f: 'Hello! Ano ang pangalan mo? Ilang taon ka na?', c: 'Hi! Anong name mo? Ilang taon ka na?' },
    { en: 'What grade are you in?', f: 'Anong grade ka na?', c: 'Grade ilan ka na?' },
    { en: 'What do you like to do for fun?', f: 'Ano ang mga gusto mong gawin para maglibang?', c: 'Ano ang hilig mong gawin?' },
    { en: 'Who are your friends at school?', f: 'Sino-sino ang mga kaibigan mo sa school?', c: 'Sino ang mga friends mo sa school?' },
    { en: 'Is anyone bullying or teasing you?', f: 'May nambu-bully o nang-aasar ba sa iyo?', c: 'May nambu-bully ba sa iyo?' },
    { en: 'How do you get along with your parents?', f: 'Kumusta ang samahan ninyo ng mga magulang mo?', c: 'Okay ba kayo ng parents mo?' },
    { en: 'Is anyone at home hurting you?', f: 'May nananakit ba sa iyo sa bahay?', c: 'May nananakit ba sa iyo sa bahay?' },
    { en: 'Has anyone touched you in a way that made you uncomfortable?', f: 'May humawak na ba sa iyo sa paraang hindi ka komportable?', c: 'May humawak na ba sa iyo na hindi ka comfortable?' },
    { en: 'Do you have a boyfriend or girlfriend?', f: 'May boyfriend o girlfriend ka ba?', c: 'May jowa ka ba?' },
    { en: 'Have your friends tried vaping, drinking, or drugs?', f: 'Sinubukan na ba ng mga kaibigan mo ang vape, alak, o droga?', c: 'Nag-try na ba ng vape, alak, o drugs ang friends mo?', n: 'Asking about peers first is less threatening; then ask about the teen.' },
    { en: 'You did a great job answering my questions.', f: 'Ang galing mong sumagot sa mga tanong ko.', c: 'Ang galing mo sumagot!' }
  ]
},
{
  id: 'elderly', group: 'Special populations', title: 'Elderly patients, dementia, and delirium',
  intro: 'Speak slowly, face the patient, use Lola/Lolo or Nanay/Tatay with po. Get collateral on baseline function.',
  phrases: [
    { en: 'Lola, good morning. How are you feeling?', f: 'Lola, magandang umaga po. Kumusta po ang pakiramdam ninyo?', c: 'La, good morning po. Kumusta po kayo?' },
    { en: 'Can you hear me well?', f: 'Naririnig po ba ninyo ako nang maayos?', c: 'Naririnig n\'yo po ba ako?' },
    { en: 'Do you forget things more than before?', f: 'Mas madalas na po ba kayong makalimot kaysa dati?', c: 'Mas makakalimutin na po ba kayo kaysa dati?' },
    { en: 'Do you get lost in familiar places?', f: 'Naliligaw na po ba kayo sa mga lugar na kilala ninyo?', c: 'Naliligaw na po ba kayo sa mga lugar na alam n\'yo?' },
    { en: 'Can you still manage your own money and medicines?', f: 'Kaya pa po ba ninyong hawakan ang sarili ninyong pera at gamot?', c: 'Kaya n\'yo pa po bang hawakan ang pera at gamot n\'yo?' },
    { en: 'Did the confusion start suddenly or slowly over months?', f: 'Biglaan po ba nagsimula ang pagkalito, o unti-unti sa loob ng ilang buwan?', c: 'Biglaan po ba ang pagkalito o unti-unti?', n: 'Sudden onset, fluctuation, and inattention suggest delirium.' },
    { en: 'Is it worse at night?', f: 'Mas lumalala po ba sa gabi?', c: 'Mas malala po ba sa gabi?' },
    { en: 'Does he/she have a fever, cough, or pain when urinating?', f: 'May lagnat, ubo, o masakit po bang umihi?', c: 'May lagnat, ubo, o masakit bang umihi?' },
    { en: 'Did he/she start any new medicine recently?', f: 'May bago po bang gamot na sinimulan kamakailan?', c: 'May bagong gamot po ba recently?' },
    { en: 'Can he/she still bathe, dress, and eat without help?', f: 'Kaya pa po ba niyang maligo, magbihis, at kumain nang walang tulong?', c: 'Kaya pa po ba niyang maligo, magbihis, at kumain mag-isa?' }
  ]
},
{
  id: 'closing', group: 'Interview', title: 'Closing the interview',
  intro: 'Summarize, give hope, set the next step, and invite questions.',
  phrases: [
    { en: 'Thank you for sharing all of this with me.', f: 'Maraming salamat po sa pagbabahagi ninyo ng lahat ng ito.', c: 'Salamat sa pag-share mo ng lahat ng ito.' },
    { en: 'Let me summarize what I heard.', f: 'Bubuurin ko po ang mga narinig ko.', c: 'I-summarize ko lang ang mga narinig ko.' },
    { en: 'Is there anything I didn\'t ask that you want me to know?', f: 'May hindi po ba ako naitanong na gusto ninyong malaman ko?', c: 'May hindi ba ako natanong na gusto mong malaman ko?' },
    { en: 'We will help you get better.', f: 'Tutulungan po namin kayong gumaling.', c: 'Tutulungan ka namin gumaling.' },
    { en: 'I will see you again tomorrow.', f: 'Magkikita po ulit tayo bukas.', c: 'Kita ulit tayo bukas.' },
    { en: 'Take care.', f: 'Ingat po kayo.', c: 'Ingat ka.' }
  ]
}
];
