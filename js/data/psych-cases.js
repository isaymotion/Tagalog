/* Interactive case simulations and patient-response interpretation drills.
   Case step: who speaks, line [tagalog, english], then choices for the learner's next line.
   score: 2 = best, 1 = acceptable, 0 = avoid. */
window.PSYCH_CASES = [
{
  id: 'jomar', title: 'First-episode psychosis', level: 'B1',
  setting: 'Outpatient clinic. Jomar, 19, is brought by his mother, Aling Rosa. He sits with his hood up, glancing at the corner of the room.',
  steps: [
    { who: 'Aling Rosa', line: ['Dok, tulungan po ninyo ang anak ko. Hindi na po siya lumalabas ng kuwarto.', 'Doc, please help my son. He doesn\'t leave his room anymore.'],
      choices: [
        { tl: 'Salamat po sa pagdala sa kanya. Puwede ko po ba munang kausapin si Jomar nang mag-isa, tapos kayo naman po?', en: 'Thank you for bringing him. May I first speak with Jomar alone, then with you?', score: 2, fb: 'Good: you thank the mother, plan to see the patient alone, and promise her a turn.' },
        { tl: 'Baliw na po ba siya?', en: 'Is he crazy?', score: 0, fb: 'Avoid "baliw". It is stigmatizing and will increase hiya and defensiveness.' },
        { tl: 'Ano po ang nangyari?', en: 'What happened?', score: 1, fb: 'Acceptable, but the patient should also have a chance to speak for himself.' } ] },
    { who: 'Jomar', line: ['(tahimik) ...Wala naman akong sakit. Sila ang may problema.', '(quiet) ...I\'m not sick. They are the ones with the problem.'],
      choices: [
        { tl: 'Sino ang tinutukoy mong "sila"?', en: 'Who do you mean by "they"?', score: 2, fb: 'Good: you follow his words with curiosity. This invites him to describe the persecutory content.' },
        { tl: 'May sakit ka. Kailangan mong uminom ng gamot.', en: 'You are sick. You need to take medicine.', score: 0, fb: 'Confronting insight this early damages rapport.' },
        { tl: 'Okay. Kumusta ang tulog mo?', en: 'Okay. How is your sleep?', score: 1, fb: 'A safe question, but you missed an opening.' } ] },
    { who: 'Jomar', line: ['Yung mga kapitbahay. Minamanmanan nila ako. Naririnig ko sila sa dingding, pinag-uusapan nila ako.', 'The neighbors. They\'re watching me. I hear them through the wall; they talk about me.'],
      choices: [
        { tl: 'Ano ang sinasabi nila tungkol sa iyo?', en: 'What do they say about you?', score: 2, fb: 'Good: you ask about the content of the voices.' },
        { tl: 'Imposible iyan.', en: 'That\'s impossible.', score: 0, fb: 'Arguing with delusions is not helpful.' },
        { tl: 'Kailan ito nagsimula?', en: 'When did this start?', score: 1, fb: 'Useful, but ask about content first while he is talking.' } ] },
    { who: 'Jomar', line: ['Sinasabi nila na masama akong tao, na dapat na akong mawala. Minsan inuutusan nila ako.', 'They say I\'m a bad person, that I should disappear. Sometimes they command me.'],
      choices: [
        { tl: 'Ano ang inuutos nila sa iyo? Inuutusan ka ba nilang saktan ang sarili mo o ibang tao?', en: 'What do they command you to do? Do they tell you to hurt yourself or others?', score: 2, fb: 'Essential. You found command hallucinations, so ask about harm right away.' },
        { tl: 'Huwag mo na lang silang pansinin.', en: 'Just ignore them.', score: 0, fb: 'This dismisses him and misses the risk assessment.' },
        { tl: 'Boses ba ng lalaki o babae?', en: 'Is it a man\'s or woman\'s voice?', score: 1, fb: 'Relevant detail, but risk comes first.' } ] },
    { who: 'Jomar', line: ['Sabi nila tumalon na lang daw ako sa bubong. Pero hindi ko naman gagawin... siguro.', 'They say I should just jump off the roof. But I won\'t do it... I think.'],
      choices: [
        { tl: 'Salamat sa pagsasabi mo. Naisip mo na bang magpakamatay? May ginawa ka na bang paghahanda?', en: 'Thank you for telling me. Have you thought of killing yourself? Have you made any preparations?', score: 2, fb: 'Good: you thank him, then ask directly about ideation and preparation.' },
        { tl: 'Mabuti naman at hindi mo gagawin.', en: 'Good that you won\'t do it.', score: 0, fb: '"Siguro" (maybe) is ambivalence. Explore it; don\'t accept reassurance.' },
        { tl: 'Gaano kadalas mo naririnig iyan?', en: 'How often do you hear that?', score: 1, fb: 'Useful, but clarify suicidal intent first.' } ] },
    { who: 'Aling Rosa', line: ['Dinala na po namin siya sa albularyo. Sabi po, na-engkanto raw siya.', 'We already took him to a folk healer. They said he was bewitched by an engkanto.'],
      choices: [
        { tl: 'Naiintindihan ko po. Puwede pong sabay ang dasal at ang gamot. Ano po ang nakita ninyong pagbabago mula noon?', en: 'I understand. Prayer and medicine can go together. What changes have you seen since then?', score: 2, fb: 'Good: you respect her explanatory model while bringing in treatment, which improves adherence.' },
        { tl: 'Hindi po totoo ang engkanto.', en: 'Engkantos aren\'t real.', score: 0, fb: 'Dismissing her beliefs can drive the family away from care.' },
        { tl: 'Sige po. Gaano po katagal na ito?', en: 'Okay. How long has this been?', score: 1, fb: 'Needed info, but acknowledge her belief first.' } ] }
  ],
  summary: {
    findings: ['Social withdrawal and functional decline (no longer leaves his room)', 'Persecutory delusions (neighbors watching him)', 'Auditory hallucinations: third-person, derogatory, command type (to jump from roof)', 'Passive suicidal ideation with ambivalence. Needs full risk assessment and safety planning; consider admission', 'Poor insight', 'Family explanatory model: engkanto; prior consultation with an albularyo'],
    mse: '19M, hooded, poorly groomed. Guarded, glancing at the corner (possibly responding to internal stimuli). Speech soft, sparse. Mood not stated; affect restricted. Thought content: persecutory delusions; passive SI with command hallucinations to jump. Perception: AH, third-person, derogatory, command. Insight poor. Judgment impaired.'
  }
},
{
  id: 'rosa-dep', title: 'Depression and suicide risk', level: 'B1',
  setting: 'Medicine ward consult. Nanay Carmen, 54, admitted for chest pain with normal cardiac workup. The intern says she cries at night.',
  steps: [
    { who: 'Nanay Carmen', line: ['Mabigat po ang dibdib ko, Dok. Lagi na lang po.', 'My chest feels heavy, Doc. All the time.'],
      choices: [
        { tl: 'Ikuwento po ninyo sa akin. Kailan po ito nagsimula, at ano po ang nangyayari sa buhay ninyo noon?', en: 'Tell me about it. When did it start, and what was happening in your life then?', score: 2, fb: 'Good: you treat "mabigat ang dibdib" as a possible idiom of distress and explore its context.' },
        { tl: 'Normal po ang ECG ninyo, kaya wala po kayong sakit.', en: 'Your ECG is normal, so you\'re not sick.', score: 0, fb: 'This invalidates her suffering.' },
        { tl: 'Masakit po ba ngayon?', en: 'Does it hurt now?', score: 1, fb: 'Reasonable, but stays on the physical level.' } ] },
    { who: 'Nanay Carmen', line: ['Simula po nang mamatay ang asawa ko noong Marso. Wala na pong gana ang lahat.', 'Since my husband died in March. I have no drive for anything.'],
      choices: [
        { tl: 'Nakikiramay po ako. Kumusta po ang tulog at pagkain ninyo mula noon?', en: 'My condolences. How have your sleep and eating been since then?', score: 2, fb: 'Good: you show empathy, then screen for neurovegetative symptoms.' },
        { tl: 'Kailangan po ninyong mag-move on.', en: 'You need to move on.', score: 0, fb: 'Dismissive.' },
        { tl: 'Ilang taon po kayong kasal?', en: 'How many years were you married?', score: 1, fb: 'Shows interest, but doesn\'t advance the assessment.' } ] },
    { who: 'Nanay Carmen', line: ['Hindi po ako makatulog. Pumayat na po ako. Pagod na pagod na po ako, Dok. Ayoko na.', 'I can\'t sleep. I\'ve lost weight. I\'m so tired, Doc. I don\'t want this anymore.'],
      choices: [
        { tl: 'Kapag sinabi po ninyong "ayoko na," naisip na po ba ninyong wakasan ang inyong buhay?', en: 'When you say "I don\'t want this anymore," have you thought of ending your life?', score: 2, fb: 'Excellent: "ayoko na" is a cue to ask directly about suicide.' },
        { tl: 'Huwag po kayong magsalita ng ganyan.', en: 'Don\'t talk like that.', score: 0, fb: 'This shuts down disclosure.' },
        { tl: 'Bibigyan ko po kayo ng pampatulog.', en: 'I\'ll give you a sleeping pill.', score: 0, fb: 'Premature, and potentially dangerous before you know her risk.' } ] },
    { who: 'Nanay Carmen', line: ['Minsan po, naiisip ko na sana sumama na lang ako sa kanya. May naipon po akong mga gamot sa bahay.', 'Sometimes I think I should have just gone with him. I\'ve saved up medicines at home.'],
      choices: [
        { tl: 'Salamat po sa pagtitiwala ninyo. Anong mga gamot po iyon, at gaano karami? May plano po ba kayo kung kailan?', en: 'Thank you for trusting me. What medicines, and how many? Do you have a plan for when?', score: 2, fb: 'Good: you assess means, plan, and timing.' },
        { tl: 'Kasalanan po iyan sa Diyos.', en: 'That is a sin against God.', score: 0, fb: 'Faith can protect her, but saying this now shames her.' },
        { tl: 'May mga anak po ba kayo?', en: 'Do you have children?', score: 1, fb: 'Protective factors matter, but finish assessing means first.' } ] },
    { who: 'Nanay Carmen', line: ['Mga gamot po ng asawa ko sa puso. Wala pa po akong plano. Pero naiisip ko po ang mga apo ko.', 'My husband\'s heart medicines. No plan yet. But I think of my grandchildren.'],
      choices: [
        { tl: 'Mahalaga po ang mga apo ninyo. Puwede po ba nating kausapin ang anak ninyo para maalis muna ang mga gamot sa bahay?', en: 'Your grandchildren are important. Can we talk with your child about removing those medicines from the house for now?', score: 2, fb: 'Good: you build on a protective factor, plan means restriction, and involve the family with consent.' },
        { tl: 'Okay po, mabuti at wala kayong plano.', en: 'Okay, good that you have no plan.', score: 0, fb: 'Means restriction is still needed.' },
        { tl: 'Gaano po kayo kalapit sa mga apo ninyo?', en: 'How close are you to your grandchildren?', score: 1, fb: 'Builds rapport, but move to safety planning.' } ] }
  ],
  summary: {
    findings: ['Bereavement 7 months ago (spouse)', 'Depressive symptoms: low mood, anhedonia ("wala nang gana"), insomnia, weight loss, fatigue', 'Somatic idiom: "mabigat ang dibdib" with negative cardiac workup', 'Passive death wish ("sumama na lang sa kanya")', 'Access to lethal means (stockpiled cardiac medicines); no current plan', 'Protective factors: grandchildren, faith'],
    mse: '54F, tearful, psychomotor slowing. Mood "pagod na pagod"; affect depressed, congruent. Thought content: hopelessness, passive SI, no current plan; means available. No psychotic features elicited. Insight fair.'
  }
},
{
  id: 'kevin-mania', title: 'Manic episode', level: 'B2',
  setting: 'Emergency room. Kevin, 28, brought by his sister. He is talking rapidly and keeps standing up.',
  steps: [
    { who: 'Kevin', line: ['Dok! Ang ganda ng araw! Alam mo bang may bago akong negosyo? Tatlo! Magiging bilyonaryo ako bago mag-Pasko!', 'Doc! What a beautiful day! Did you know I have a new business? Three! I\'ll be a billionaire before Christmas!'],
      choices: [
        { tl: 'Mukhang ang dami mong plano. Kailan ka huling natulog nang maayos?', en: 'You seem to have a lot of plans. When did you last sleep well?', score: 2, fb: 'Good: you acknowledge him without arguing and ask about sleep, a key mania feature.' },
        { tl: 'Imposible iyan.', en: 'That\'s impossible.', score: 0, fb: 'Arguing will escalate him.' },
        { tl: 'Ano ang mga negosyo mo?', en: 'What are your businesses?', score: 1, fb: 'Explores grandiosity but may fuel flight of ideas.' } ] },
    { who: 'Kevin', line: ['Tulog? Hindi ko na kailangan! Dalawang oras lang, sobrang lakas ko pa rin!', 'Sleep? I don\'t need it! Just two hours and I\'m still super strong!'],
      choices: [
        { tl: 'Ilang araw na ganito? Gaano karami na ang nagastos mo?', en: 'How many days has it been like this? How much have you spent?', score: 2, fb: 'Good: duration and risky behavior (spending).' },
        { tl: 'Matulog ka na.', en: 'Go to sleep.', score: 0, fb: 'Unhelpful.' },
        { tl: 'Okay ka lang ba?', en: 'Are you okay?', score: 1, fb: 'Too vague.' } ] },
    { who: 'Ate ni Kevin', line: ['Isang linggo na po, Dok. Naubos po niya ang ipon niya. Nagagalit po siya kapag pinipigilan.', 'A week now, Doc. He used up his savings. He gets angry when we stop him.'],
      choices: [
        { tl: 'Nanakit na po ba siya o may sinira? Umiinom po ba siya o gumagamit ng droga?', en: 'Has he hurt anyone or destroyed things? Is he drinking or using drugs?', score: 2, fb: 'Good: you ask about violence risk and rule out substances (e.g., shabu).' },
        { tl: 'Normal lang po iyan sa lalaki.', en: 'That\'s normal for men.', score: 0, fb: 'Dismissive.' },
        { tl: 'Ganito na po ba siya dati?', en: 'Has he been like this before?', score: 1, fb: 'Important history; ask about safety first.' } ] },
    { who: 'Ate ni Kevin', line: ['Noong isang taon po, sobrang lungkot niya, hindi bumabangon ng isang buwan.', 'Last year he was very sad and didn\'t get out of bed for a month.'],
      choices: [
        { tl: 'Salamat po, mahalaga iyan. May kamag-anak po ba kayong ganito rin, o nagpakamatay?', en: 'Thank you, that\'s important. Do you have relatives like this, or who died by suicide?', score: 2, fb: 'Good: a prior depressive episode plus current mania suggests bipolar I. Family history is next.' },
        { tl: 'Okay po.', en: 'Okay.', score: 0, fb: 'You missed the significance.' } ] }
  ],
  summary: {
    findings: ['1 week: elevated/irritable mood, decreased need for sleep (2 h), grandiosity (billionaire), excessive spending, pressured speech', 'Prior major depressive episode', 'Consistent with bipolar I disorder, current manic episode. Rule out substance-induced (shabu) and medical causes'],
    mse: '28M, hyperactive, restless. Speech rapid, pressured. Mood "ang ganda ng araw"; affect expansive, irritable. Flight of ideas. Grandiose ideation. Insight poor; judgment impaired.'
  }
},
{
  id: 'lola-delirium', title: 'Delirium in an elderly patient', level: 'B1',
  setting: 'Ward consult at night. Lola Pacing, 82, is pulling at her IV and calling out. Her grandson Rico is at the bedside.',
  steps: [
    { who: 'Lola Pacing', line: ['Sino ka? Nasaan ako? Iuwi na ninyo ako! May mga bata sa kisame!', 'Who are you? Where am I? Take me home! There are children on the ceiling!'],
      choices: [
        { tl: 'Lola, ako po si Dok Bella. Nasa ospital po kayo. Ligtas po kayo dito.', en: 'Lola, I\'m Dr. Bella. You\'re in the hospital. You are safe here.', score: 2, fb: 'Good: calm orientation and reassurance.' },
        { tl: 'Walang bata diyan, Lola.', en: 'There are no children there, Lola.', score: 1, fb: 'Gentle reality orientation is okay, but start with who you are and where she is.' },
        { tl: 'Itali na natin siya.', en: 'Let\'s tie her down.', score: 0, fb: 'Restraint is a last resort and can worsen delirium.' } ] },
    { who: 'Rico', line: ['Dok, kaninang umaga po okay pa siya. Kilala pa niya ako. Ngayong gabi lang po siya nagkaganito.', 'Doc, this morning she was still fine. She still recognized me. Only tonight did she become like this.'],
      choices: [
        { tl: 'Mahalaga po iyan. May lagnat po ba siya, hirap umihi, o may bagong gamot na ibinigay ngayong araw?', en: 'That\'s important. Does she have a fever, trouble urinating, or any new medicine today?', score: 2, fb: 'Good: acute onset and fluctuation point to delirium, so you look for the cause.' },
        { tl: 'Ulyanin na po kasi siya.', en: 'She\'s just senile.', score: 0, fb: 'Acute change is not "just" dementia. Look for delirium.' } ] },
    { who: 'Lola Pacing', line: ['(sa tanong na "Anong araw ngayon?") ...Pasko? Hindi ko alam...', '(asked "What day is it?") ...Christmas? I don\'t know...'],
      choices: [
        { tl: 'Okay lang po, Lola. Sabihin po ninyo ang mga araw ng linggo nang pabaligtad, simula sa Linggo.', en: 'That\'s okay, Lola. Say the days of the week backwards, starting from Sunday.', score: 2, fb: 'Good: you test attention, the core feature of delirium, in a language-appropriate way.' },
        { tl: 'Mali po kayo, Lola.', en: 'You\'re wrong, Lola.', score: 0, fb: 'This shames her.' } ] }
  ],
  summary: {
    findings: ['Acute onset (hours), fluctuating course', 'Disorientation and inattention', 'Visual hallucinations (children on the ceiling)', 'Agitation at night', 'Likely delirium. Search for cause (UTI, medications, metabolic, hypoxia)'],
    mse: '82F, agitated, pulling at IV. Disoriented to time and place. Inattentive (failed days backwards). Visual hallucinations. Speech loud, disorganized.'
  }
},
{
  id: 'mang-ben-etoh', title: 'Alcohol withdrawal', level: 'B2',
  setting: 'Surgery ward, post-op day 2. Mang Ben, 47, is sweaty and tremulous and says insects are on the wall.',
  steps: [
    { who: 'Mang Ben', line: ['Dok, ang daming ipis sa pader! Nanginginig po ako, hindi ako makatulog.', 'Doc, so many cockroaches on the wall! I\'m shaking, I can\'t sleep.'],
      choices: [
        { tl: 'Mang Ben, umiinom po ba kayo ng alak bago kayo na-ospital? Kailan po ang huling inom ninyo?', en: 'Mang Ben, were you drinking alcohol before you were hospitalized? When was your last drink?', score: 2, fb: 'Good: tremor, insomnia, and visual hallucinations around 48 hours after admission suggest alcohol withdrawal.' },
        { tl: 'Walang ipis diyan.', en: 'There are no cockroaches there.', score: 0, fb: 'Misses the diagnosis.' },
        { tl: 'Gusto po ba ninyo ng pampatulog?', en: 'Would you like a sleeping pill?', score: 1, fb: 'Treatment may help, but first establish the cause and how severe it is.' } ] },
    { who: 'Mang Ben', line: ['Araw-araw po, Dok. Mga isang bote ng gin, minsan dalawa. Huling inom ko po bago ako operahan.', 'Every day, Doc. About one bottle of gin, sometimes two. My last drink was before my operation.'],
      choices: [
        { tl: 'Salamat po sa pagiging tapat. Nagkaroon na po ba kayo ng kombulsiyon dati kapag tumigil kayo?', en: 'Thank you for being honest. Have you had seizures before when you stopped?', score: 2, fb: 'Good: a history of withdrawal seizures or DTs predicts severe withdrawal.' },
        { tl: 'Ang dami po niyan! Adik po kayo.', en: 'That\'s a lot! You\'re an addict.', score: 0, fb: 'Stigmatizing; it will reduce honesty.' } ] }
  ],
  summary: {
    findings: ['Daily heavy alcohol use (1–2 bottles gin)', 'Last drink ~48 h ago', 'Tremor, diaphoresis, insomnia, visual hallucinations (insects)', 'Alcohol withdrawal, at risk for delirium tremens. Assess orientation, vitals, seizure history; start withdrawal protocol and thiamine'],
    mse: '47M, diaphoretic, tremulous, anxious. Visual hallucinations (insects). Assess orientation and attention.'
  }
},
{
  id: 'agitated', title: 'Agitated patient: de-escalation', level: 'B1',
  setting: 'Acute ward, late morning. Mang Ernesto, 45, admitted three days ago, is holding up one end of his bed and shouting near the nurses\' station. You are the nurse on duty; another staff member stands nearby. Choose your words step by step, following the de-escalation checklist.',
  steps: [
    { who: 'Mang Ernesto', line: ['Huwag kayong lalapit! Ibabagsak ko \'tong kama!', 'Don\'t come near! I\'ll drop this bed!'],
      choices: [
        { tl: 'Dito lang po ako, Mang Ernesto. Hindi po ako lalapit. Ako po si Nurse Ana.', en: 'I\'ll stay right here, Mang Ernesto. I won\'t come closer. I\'m Nurse Ana.', score: 2, fb: 'Steps 1–3: you keep your distance, stay calm, and introduce yourself.' },
        { tl: 'Ibaba mo \'yan! Ngayon na!', en: 'Put that down! Now!', score: 0, fb: 'Shouting an order while he is threatening escalates the situation (step 2: do not provoke).' },
        { tl: 'Kumalma po kayo.', en: 'Please calm down.', score: 1, fb: 'Calm, but "calm down" alone rarely works. Introduce yourself and show you are keeping your distance first.' } ] },
    { who: 'Mang Ernesto', line: ['Ikinulong n\'yo ako dito! Gusto ko nang umuwi!', 'You locked me up here! I want to go home!'],
      choices: [
        { tl: 'Galit po kayo kasi gusto na ninyong umuwi, tama po ba? Ikuwento po ninyo sa akin.', en: 'You\'re angry because you want to go home, is that right? Tell me about it.', score: 2, fb: 'Steps 5–6: you let him express himself and reflect the feeling back.' },
        { tl: 'Hindi ka puwedeng umuwi, may sakit ka.', en: 'You can\'t go home, you\'re sick.', score: 0, fb: 'Arguing about the admission now adds fuel. Listen first.' },
        { tl: 'Bakit po kayo galit?', en: 'Why are you angry?', score: 1, fb: '"Bakit" can sound like a challenge. Reflecting the feeling works better.' } ] },
    { who: 'Mang Ernesto', line: ['Tatlong araw na ako dito, walang nagsasabi sa akin kung kailan ako lalabas!', 'I\'ve been here three days and nobody tells me when I\'m getting out!'],
      choices: [
        { tl: 'Tama po kayo, mahirap pong maghintay nang walang alam. Aalamin ko po iyan para sa inyo.', en: 'You\'re right, it\'s hard to wait without knowing. I\'ll find out for you.', score: 2, fb: 'Step 7: you agree with the part that is true and offer help.' },
        { tl: 'Ganyan talaga dito.', en: 'That\'s just how it is here.', score: 0, fb: 'Dismissive.' },
        { tl: 'Hindi ko po alam.', en: 'I don\'t know.', score: 1, fb: 'Honest, but offer to find out.' } ] },
    { who: 'Mang Ernesto', line: ['(nakataas pa rin ang kama) ...Basta! Ayoko dito!', '(still holding the bed up) ...Whatever! I don\'t want to be here!'],
      choices: [
        { tl: 'Hindi po puwede ang manira ng gamit, baka may masaktan. Gusto ko po kayong tulungan na kumalma.', en: 'Breaking things isn\'t allowed; someone could get hurt. I want to help you calm down.', score: 2, fb: 'Steps 8–9: a clear limit with the reason, then reassurance that you want to help.' },
        { tl: 'Kapag hindi mo ibinaba, itatali ka namin.', en: 'If you don\'t put it down, we\'ll tie you up.', score: 0, fb: 'A threat is not a limit. It usually escalates.' },
        { tl: 'Sige po, bahala kayo.', en: 'Fine, up to you.', score: 0, fb: 'Leaving a dangerous behavior unaddressed is unsafe.' } ] },
    { who: 'Mang Ernesto', line: ['(huminga nang malalim) ...Paano?', '(takes a deep breath) ...How?'],
      choices: [
        { tl: 'Ibaba po muna natin nang dahan-dahan ang kama. Kaya po ninyo iyan. Huminga po tayo: isa, dalawa, tatlo.', en: 'Let\'s put the bed down slowly. You can do it. Let\'s breathe: one, two, three.', score: 2, fb: 'Step 10: concrete coaching, one action at a time.' },
        { tl: 'Basta ibaba po ninyo.', en: 'Just put it down.', score: 1, fb: 'Clear, but coach him through it.' },
        { tl: 'Ewan ko po.', en: 'I don\'t know.', score: 0, fb: 'He asked for help. Give a specific next step.' } ] },
    { who: 'Mang Ernesto', line: ['(ibinaba ang kama) O, ayan na.', '(puts the bed down) There. Done.'],
      choices: [
        { tl: 'Salamat po at ibinaba ninyo. Magaling po. Gusto po ba ninyong umupo dito, o maglakad muna kasama ko?', en: 'Thank you for putting it down. Well done. Would you like to sit here, or walk with me for a while?', score: 2, fb: 'Steps 10–11: praise, then two acceptable choices.' },
        { tl: 'Okay.', en: 'Okay.', score: 1, fb: 'Missed the chance to reinforce the calm behavior.' },
        { tl: 'Dapat kanina pa.', en: 'You should have done that earlier.', score: 0, fb: 'Shaming can restart the escalation.' } ] },
    { who: 'Mang Ernesto', line: ['Hindi pa rin ako mapakali... ang init ng ulo ko.', 'I still can\'t settle... I\'m so irritable.'],
      choices: [
        { tl: 'May gamot po na makakatulong para kumalma kayo. Tableta po ba o iniksiyon ang gusto ninyo?', en: 'There\'s medicine that can help you calm down. Would you prefer a tablet or an injection?', score: 2, fb: 'Step 12: explain how medication helps and offer a choice. Then notify the POD.' },
        { tl: 'Iiniksiyunan na lang po namin kayo.', en: 'We\'ll just give you an injection.', score: 0, fb: 'Offer oral medication and a choice first.' },
        { tl: 'Matulog na lang po kayo.', en: 'Just go to sleep.', score: 1, fb: 'He is telling you he still feels unsettled. Offer help.' } ] }
  ],
  summary: {
    findings: ['Agitation with threat to drop a bed, loud and irritable, three days after admission', 'Trigger: feels detained and uninformed about discharge', 'Responded to verbal de-escalation: distance, introduction, listening, agreeing, limits, coaching, choices', 'Accepted offer of medication', 'Remarks: successful. Notify the POD; follow up on his discharge question; debrief with him later ("Ano po ang makakatulong sa susunod?")'],
    mse: '45M, initially agitated, standing, lifting bed, loud. Mood "galit"; affect irritable, later calmer. Goal-directed complaint about discharge. Accepted limits and medication.'
  }
}

];

/* Interpretation drill: what is the patient (or family) saying? [tagalog, english, clinical significance] */
window.PSYCH_INTERP = [
  ['Wala na po akong gana sa lahat.', 'I have no more drive/appetite for anything.', 'Anhedonia or poor appetite. Clarify which.'],
  ['Pagod na po ako. Ayoko na.', 'I\'m tired already. I don\'t want this anymore.', 'Possible hopelessness or suicidal ideation. Ask directly.'],
  ['Sana hindi na lang ako nagising.', 'I wish I had not woken up.', 'Passive death wish.'],
  ['Pabigat na lang po ako sa pamilya ko.', 'I\'m just a burden to my family.', 'Perceived burdensomeness: suicide risk factor.'],
  ['May bumubulong po sa tenga ko kahit walang tao.', 'Someone whispers in my ear even when no one is there.', 'Auditory hallucination.'],
  ['Inuutusan po ako ng boses na saktan ang kapatid ko.', 'The voice commands me to hurt my sibling.', 'Command hallucination with violence risk.'],
  ['May nakikita po akong anino sa sulok tuwing gabi.', 'I see a shadow in the corner every night.', 'Possible visual hallucination. Explore timing (sleep transitions?), culture, and delirium.'],
  ['Pinag-uusapan po ako ng mga kapitbahay. Alam nila ang iniisip ko.', 'The neighbors talk about me. They know what I\'m thinking.', 'Ideas of reference; thought broadcasting.'],
  ['May naglalagay po ng lason sa pagkain ko.', 'Someone is putting poison in my food.', 'Persecutory delusion. Ask whether he/she is still eating.'],
  ['Kinulam po ako ng dati kong kaibigan.', 'I was hexed by my former friend.', 'Possible cultural belief vs delusion. Ask whether the family shares it.'],
  ['Para po akong lutang, parang hindi totoo ang paligid.', 'I feel like I\'m floating; my surroundings feel unreal.', 'Depersonalization or derealization.'],
  ['Hindi po ako mapakali, lakad ako nang lakad.', 'I can\'t sit still; I keep walking.', 'Agitation or akathisia (check antipsychotic use).'],
  ['Naninigas po ang leeg ko at umiikot ang mata ko pataas.', 'My neck is stiffening and my eyes roll upward.', 'Acute dystonia / oculogyric crisis. Urgent.'],
  ['Nanginginig po ang kamay ko tuwing umaga hanggang makainom ako.', 'My hands shake every morning until I have a drink.', 'Alcohol dependence with withdrawal.'],
  ['Kinakabahan po ako, bumibilis ang tibok ng puso ko, akala ko mamamatay na ako.', 'I get nervous, my heart races, I thought I would die.', 'Panic attack.'],
  ['Paulit-ulit po akong naghuhugas ng kamay, hindi ko mapigilan.', 'I wash my hands over and over; I can\'t stop.', 'Compulsions (OCD).'],
  ['Hanggang ngayon, napapanaginipan ko pa rin po ang baha.', 'Until now, I still dream about the flood.', 'Trauma-related nightmares (PTSD symptoms).'],
  ['Hindi na po siya naliligo at kinakausap ang sarili.', 'He/She no longer bathes and talks to himself/herself.', 'Collateral: self-neglect and possible response to hallucinations.'],
  ['Nagwawala po siya kagabi, binasag ang mga plato.', 'He/She went berserk last night and smashed the plates.', 'Agitation/violence. Assess safety and cause.'],
  ['Hindi na po niya kami nakikilala minsan.', 'Sometimes he/she no longer recognizes us.', 'Cognitive impairment. Acute or chronic?'],
  ['Dalawang oras lang po ang tulog ko pero ang lakas ko pa rin.', 'I only sleep two hours but I\'m still full of energy.', 'Decreased need for sleep (mania).'],
  ['Ako po ang pinili ng Diyos para iligtas ang mundo.', 'God chose me to save the world.', 'Grandiose/religious delusion.'],
  ['Wala na po kaming pambili ng gamot kaya tumigil siya.', 'We had no money to buy the medicine, so he/she stopped.', 'Non-adherence from cost. Address access.'],
  ['Opo, opo, iinumin ko po.', 'Yes, yes, I\'ll take it.', '"Opo" may reflect pakikisama, not understanding. Use teach-back.'],
  ['May sumasanib po sa kanya tuwing hapon.', 'Something possesses him/her every afternoon.', 'Possession episodes: consider dissociation, seizures, psychosis; explore culture.'],
  ['Mabigat po ang dibdib ko, parang may nakadagan.', 'My chest is heavy, like something is pressing on it.', 'Somatic idiom of distress (depression/anxiety) after ruling out cardiac causes.'],
  ['Mainit po ang ulo niya lagi, kaunting bagay lang nagagalit na.', 'He/She is always hot-headed; gets angry at little things.', 'Irritability.'],
  ['Hindi ko po alam kung bakit ako dinala dito. Wala naman akong sakit.', 'I don\'t know why I was brought here. I\'m not sick.', 'Poor insight.']
];
