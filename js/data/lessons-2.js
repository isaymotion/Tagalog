/* Grammar lessons, second file (3.11.0): conditionals, reported-speech, social-verbs, accidental, plurals, location,
   relative-clauses, spoken-short-forms, spanish-numbers, exclamations. Same shape as js/data/lessons.js, six quiz items each.
   An example may carry data-voice="text for the voice" (spoken-short-forms: the same line without apostrophes).
   Drafted by Claude, pending Dr. Navarro's review. */
window.LESSONS = window.LESSONS || [];
window.LESSONS.push(
{
  id: 'conditionals', level: 'B1', unit: 'Natural speech', title: 'If, when, in case: kung, kapag, sakali, basta, sana',
  summary: 'Conditions, wishes and the things that did not happen. These words let you ask about triggers and plan for a bad night.',
  body: `
<p><a href="#/lessons/connectors">Connecting ideas</a> introduced <b>kung</b> and <b>kapag</b>. This lesson adds the rest of the family and shows which verb form follows each word.</p>
<table><tr><th>Word</th><th>Meaning</th><th>Use</th></tr>
<tr><td><b>kung</b></td><td>if</td><td>an uncertain condition</td></tr>
<tr><td><b>kapag</b>, <b>pag</b></td><td>when, whenever; if (as expected)</td><td>something sure to happen, or that happens again and again</td></tr>
<tr><td><b>kung sakali</b>, <b>sakaling</b></td><td>in case, if by chance</td><td>a possibility you prepare for</td></tr>
<tr><td><b>kung hindi</b></td><td>otherwise, or else</td><td>the result if the advice is ignored</td></tr>
<tr><td><b>basta</b></td><td>as long as</td><td>the one condition that matters</td></tr>
<tr><td><b>kahit</b></td><td>even if</td><td>a condition that changes nothing</td></tr>
<tr><td><b>sana</b></td><td>I hope; it would have</td><td>wishes and things that did not happen</td></tr></table>
<h3>Which verb form after kung and kapag?</h3>
<p>For something that happens repeatedly, use the <b>ongoing</b> form. For one future event, everyday speech usually uses the <b>completed</b> form: it means "once it has happened", not the past. The future form is also heard after <i>kung</i>, especially when the speaker doubts it will happen.</p>
<div class="ex"><b>Kapag umuulan, sumasakit ang tuhod ko.</b><span>Whenever it rains, my knee hurts.</span></div>
<div class="ex"><b>Kapag dumating na ang doktor, tatawagin ko po kayo.</b><span>When the doctor arrives, I will call you.</span></div>
<div class="ex"><b>Pag nagutom ka, may tinapay sa mesa.</b><span>If you get hungry, there is bread on the table.</span></div>
<div class="ex"><b>Kung may lagnat ka pa bukas, bumalik ka rito.</b><span>If you still have a fever tomorrow, come back here.</span></div>
<div class="ex"><b>Kapag hindi po kayo nakakatulog, ano po ang ginagawa ninyo?</b><span>When you cannot sleep, what do you do?</span></div>
<h3>In case, otherwise, as long as, even if</h3>
<div class="ex"><b>Magdala ka ng payong kung sakaling umulan.</b><span>Bring an umbrella in case it rains.</span></div>
<div class="ex"><b>Bilisan mo, kung hindi, maiiwan tayo ng bus.</b><span>Hurry up, otherwise the bus will leave without us.</span></div>
<div class="ex"><b>Puwede kang lumabas, basta bumalik ka bago mag-alas sais.</b><span>You can go out, as long as you are back before six.</span></div>
<div class="ex"><b>Basta po may kasama kayo, puwede kayong maglakad sa labas.</b><span>As long as someone is with you, you may walk outside.</span></div>
<div class="ex"><b>Kahit umulan bukas, tuloy ang lakad namin.</b><span>Even if it rains tomorrow, our trip is still on.</span></div>
<div class="ex"><b>Kung sakaling bumalik ang mga naiisip na iyon, sino po ang tatawagan ninyo?</b><span>In case those thoughts come back, whom will you call?</span></div>
<h3>Sana: wishes and what did not happen</h3>
<p>With a future or base verb, <b>sana</b> is a hope. With a completed verb it often looks back at something that did not happen: "if only", "should have". Context decides, and <i>Sana uminom ka ng gamot</i> can also be a hope that you did. Put <b>kung</b> in front and <b>sana</b> in the result to build a full "if it had ..., it would have ..." sentence. <b>E di sana</b> (then it would have) is the everyday way to start the result, often with a note of reproach.</p>
<div class="ex"><b>Sana uminom ka ng gamot.</b><span>If only you had taken your medicine.</span></div>
<div class="ex"><b>Kung uminom siya ng gamot, hindi sana siya nabinat.</b><span>If he had taken his medicine, he would not have relapsed.</span></div>
<div class="ex"><b>Kung nag-almusal ka, e di sana hindi ka nahilo.</b><span>If you had eaten breakfast, you would not have felt dizzy.</span></div>
<div class="ex"><b>Kung alam ko lang, sana sinamahan kita.</b><span>If only I had known, I would have gone with you.</span></div>
<div class="ex"><b>Kung nadala namin siya agad dito, hindi sana lumala ang sakit niya.</b><span>If we had brought him here right away, his illness would not have got worse.</span></div>
<div class="note">Clinical tip: <b>kapag</b> questions find triggers and patterns (<i>Kapag ganoon, ano po ang nararamdaman ninyo?</i>), and <b>kung sakali</b> is the natural wording for a safety plan, because it names the possibility without predicting it. Listen for <b>sana</b> and <b>e di sana</b> from relatives: they often carry guilt (<i>Kung nadala namin siya agad...</i>). That is a moment to reassure, not to agree.</div>
<div class="note">Common mistake: reading the completed form after <i>kapag</i> as past. <i>Kapag dumating ang doktor</i> is about the future.</div>`,
  quiz: [
    ['"____ umulan bukas, magdala ka ng payong." (in case)', ['Kahit', 'Basta', 'Kung sakaling'], 2, 'Kung sakali = in case, if by chance. Kahit = even if; basta = as long as.'],
    ['"Kapag dumating ang doktor, tatawagin kita." When does the doctor arrive?', ['Already, in the past', 'Later, in the future', 'Every day'], 1, 'After kapag, the completed form for one event means "once it has happened".'],
    ['"Kung uminom siya ng gamot, hindi sana siya nabinat." What happened?', ['He took it and stayed well', 'He did not take it and relapsed', 'He will take it so he stays well'], 1, 'Kung + completed verb + sana describes what did not happen.'],
    ['"Puwede kang lumabas, ____ bumalik ka bago mag-alas sais."', ['basta', 'kahit', 'kung hindi'], 0, 'Basta = as long as.'],
    ['"Bilisan mo, kung hindi, maiiwan tayo ng bus." Here "kung hindi" means', ['otherwise', 'whether', 'even if'], 0, 'Kung hindi = if not, otherwise.'],
    ['Which is the best wording for a safety plan?', ['Hindi na po babalik ang mga naiisip na iyon, di ba?', 'Bakit po ninyo naiisip iyon?', 'Kung sakaling bumalik ang mga naiisip na iyon, sino po ang tatawagan ninyo?'], 2, 'Kung sakali names the possibility and asks for a plan, without promising or blaming.']
  ]
},
{
  id: 'reported-speech', level: 'B1', unit: 'Natural speech', title: 'Sabi niya, ayon sa, akala ko: reporting what others said',
  summary: 'How to quote, how to pass on what someone said, and how to keep track of whose words they are.',
  body: `
<p>Much of a psychiatric history comes from someone other than the patient. Tagalog has a small set of words for passing on another person's words, and each one tells you something about the source.</p>
<table><tr><th>Form</th><th>Meaning</th><th>Note</th></tr>
<tr><td><b>sabi ko</b>, <b>sabi mo</b>, <b>sabi niya</b></td><td>I said, you said, he or she said</td><td>the speaker takes the ng form</td></tr>
<tr><td><b>sabi ni Ana</b>, <b>sabi ng doktor</b></td><td>Ana said, the doctor said</td><td>ni for names, ng for others</td></tr>
<tr><td><b>ang sabi niya</b></td><td>what he said was</td><td>a little more formal</td></tr>
<tr><td><b>sinabi niya na ...</b>, <b>sinabing ...</b></td><td>he said that ...</td><td>the full verb; <i>sinasabi</i> = is saying</td></tr>
<tr><td><b>daw</b>, <b>raw</b></td><td>so I was told</td><td>marks the claim as secondhand</td></tr>
<tr><td><b>ayon sa</b>, <b>ayon kay</b></td><td>according to</td><td>sa for common nouns, kay for names</td></tr>
<tr><td><b>tanong niya kung</b></td><td>he asked whether</td><td>reported yes or no question</td></tr>
<tr><td><b>kuwento niya</b></td><td>as he tells it</td><td>for a story or account</td></tr>
<tr><td><b>narinig ko na</b></td><td>I heard that</td><td>often shortened to <i>narinig kong</i></td></tr>
<tr><td><b>akala ko</b></td><td>I thought</td><td>usually: and I was wrong</td></tr></table>
<h3>Quoting and reporting</h3>
<p>A quote keeps the original words. A report shifts the pronouns to fit the new speaker: <i>ako</i> becomes <i>siya</i>, <i>ko</i> becomes <i>niya</i>, and <i>ikaw</i> may become <i>ako</i>. Everyday speech often blurs the two, so listen for the pronoun to know who is meant.</p>
<div class="ex"><b>"Pagod na ako," sabi ni Ana.</b><span>"I am tired," Ana said.</span></div>
<div class="ex"><b>Sabi ni Ana, pagod na raw siya.</b><span>Ana said she was tired.</span></div>
<div class="ex"><b>Sabi niya, babalik daw siya bukas.</b><span>He said he would come back tomorrow.</span></div>
<div class="ex"><b>Sinabi ng doktor na kailangan kong magpahinga.</b><span>The doctor said that I need to rest.</span></div>
<div class="ex"><b>Ano ang sabi ng nars?</b><span>What did the nurse say?</span></div>
<div class="ex"><b>Tanong niya kung puwede siyang tumawag mamaya.</b><span>She asked whether she could call later.</span></div>
<h3>Sabi, daw and the other source words</h3>
<p><b>Sabi</b> names the source. <b>Daw</b> and <b>raw</b> only flag that the claim is secondhand (see <a href="#/lessons/hedging">Daw, yata, baka, siguro, parang</a>). Speakers often use both in one sentence: the source with <i>sabi</i>, then <i>daw</i> on the reported part.</p>
<div class="ex"><b>Alas siyete raw aalis ang bus.</b><span>The bus leaves at seven, I was told.</span></div>
<div class="ex"><b>Ayon sa doktor, puwede na siyang umuwi sa Lunes.</b><span>According to the doctor, he can go home on Monday.</span></div>
<div class="ex"><b>Narinig kong lilipat na sila sa Maynila.</b><span>I heard that they are moving to Manila.</span></div>
<div class="ex"><b>Akala ko Martes ang check-up, Miyerkoles pala.</b><span>I thought the check-up was on Tuesday, but it turns out it is Wednesday.</span></div>
<div class="ex"><b>Kuwento niya, nawalan siya ng trabaho noong isang buwan.</b><span>As he tells it, he lost his job last month.</span></div>
<h3>At the bedside</h3>
<div class="ex"><b>Sabi po ng asawa niya, tatlong araw na raw siyang hindi natutulog.</b><span>His wife says he has not slept for three days.</span></div>
<div class="ex"><b>Ayon po sa kapatid niya, ayaw na niyang lumabas ng bahay.</b><span>According to her sibling, she no longer wants to leave the house.</span></div>
<div class="ex"><b>Nakita po ba ninyo mismo, o ikinuwento lang sa inyo?</b><span>Did you see it yourself, or were you only told about it?</span></div>
<div class="ex"><b>Ano po ang sinasabi ng mga boses?</b><span>What do the voices say?</span></div>
<div class="ex"><b>Sinasabi po ba ng mga boses na saktan ninyo ang sarili ninyo?</b><span>Do the voices tell you to hurt yourself?</span></div>
<div class="note">Clinical tip: chart the source. <i>Sabi po ng asawa niya ... raw</i> is collateral, not the patient's own report, and a relative may be passing on what a neighbor said. Ask <b>Nakita po ba ninyo mismo?</b> to separate what the informant saw from what was heard. For hallucinations, <b>sinasabi</b> (ongoing) asks what the voices keep saying; follow it with whether they give orders.</div>
<div class="note">Common mistake: putting <i>daw</i> on your own words. <i>Sabi ko daw</i> means "they say that I said", which is a different claim.</div>`,
  quiz: [
    ['"Sabi ni Ana, pagod na raw siya." Who is tired?', ['The speaker', 'Ana', 'The listener'], 1, 'Siya refers back to Ana; raw marks it as her words passed on.'],
    ['Report this: "Babalik ako bukas," sabi niya.', ['Sabi ko, babalik daw siya bukas.', 'Sabi niya, babalik daw ako bukas.', 'Sabi niya, babalik daw siya bukas.'], 2, 'In the report, ako shifts to siya, and the source stays niya.'],
    ['"____ sa doktor, puwede na siyang umuwi."', ['Sabi', 'Ayon', 'Tanong'], 1, 'Ayon sa = according to. Sabi takes ng or ni, not sa.'],
    ['"Akala ko Martes ang check-up." What does the speaker most likely mean?', ['I thought it was Tuesday, and I was wrong', 'I know for sure it is Tuesday', 'Someone asked me if it is Tuesday'], 0, 'Akala ko usually signals a belief that turned out wrong.'],
    ['"Ano po ang sinasabi ng mga boses?" asks', ['whether the patient hears voices', 'who else heard the voices', 'what the voices are saying'], 2, 'Sinasabi = is saying. It assumes the voices have already been reported.'],
    ['A wife says: "Tatlong araw na raw siyang hindi natutulog." How do you chart it?', ['Patient states he has not slept for three days', 'Per wife, passing on a secondhand report: no sleep for three days', 'Wife has not slept for three days'], 1, 'Raw shows the wife is passing on what she heard. Note the source and check whether she saw it herself.']
  ]
},
{
  id: 'social-verbs', level: 'B1', unit: 'Verbs', title: 'Maki-, makipag-, mag- -an: doing things with other people',
  summary: 'Three affixes for joining in, doing something with a partner, and doing something to each other. They are the grammar of social functioning.',
  body: `
<p>Tagalog builds "with others" into the verb. <b>Maki-</b> means joining in on what others are doing, or politely asking to share something. <b>Makipag-</b> means doing something with a partner. <b>Mag- -an</b> means doing something to each other. All three are actor focus: the doer takes <i>ang</i>.</p>
<table><tr><th>Affix</th><th>Base</th><th>Completed</th><th>Ongoing</th><th>Future</th></tr>
<tr><td>maki- (raan)</td><td>makiraan</td><td>nakiraan</td><td>nakikiraan</td><td>makikiraan</td></tr>
<tr><td>makipag- (usap)</td><td>makipag-usap</td><td>nakipag-usap</td><td>nakikipag-usap</td><td>makikipag-usap</td></tr>
<tr><td>mag- -an (sigaw)</td><td>magsigawan</td><td>nagsigawan</td><td>nagsisigawan</td><td>magsisigawan</td></tr>
<tr><td>magka- (sundo)</td><td>magkasundo</td><td>nagkasundo</td><td>nagkakasundo</td><td>magkakasundo</td></tr></table>
<p>The aspect pattern is the same as for other ma- verbs: <i>ma-</i> becomes <i>na-</i> for completed and ongoing, and the ongoing and future forms double the syllable after the prefix (<i>ki</i>, <i>si</i>, <i>ka</i>). Watch the doubling in speech: <i>nakipag-usap</i> (talked with) is done, while <i>nakikipag-usap</i> (talks with, is talking with) is still going on.</p>
<h3>Maki-: join in, or ask a favor</h3>
<p>The polite request uses the future form plus <b>po</b>: <i>Makikiraan po</i> (may I get through), <i>Makikitawag po</i> (may I use your phone). With <i>puwede</i> the base form is used.</p>
<div class="ex"><b>Makikiraan lang po.</b><span>Excuse me, may I just get through?</span></div>
<div class="ex"><b>Puwede po bang makitawag?</b><span>May I use your phone to make a call?</span></div>
<div class="ex"><b>Nakisakay ako sa kapitbahay papunta sa palengke.</b><span>I got a ride with a neighbor to the market.</span></div>
<div class="ex"><b>Nakikain kami sa bahay ng tita ko.</b><span>We ate at my aunt's house.</span></div>
<div class="ex"><b>Hindi na siya nakikihalubilo sa ibang pasyente.</b><span>He no longer mixes with the other patients.</span></div>
<h3>Makipag-: with a partner</h3>
<p>The partner is marked with <b>sa</b>, or <b>kay</b> for a name: <i>makipag-usap sa doktor</i>, <i>makipagkita kay Ben</i>.</p>
<div class="ex"><b>Gusto ko pong makipag-usap sa doktor.</b><span>I would like to talk with the doctor.</span></div>
<div class="ex"><b>Nakipagkita siya sa kaibigan niya kahapon.</b><span>She met up with her friend yesterday.</span></div>
<div class="ex"><b>Nakikipag-away siya sa kapatid niya kapag lasing siya.</b><span>He picks fights with his sibling when he is drunk.</span></div>
<div class="ex"><b>Nakipaghiwalay na siya sa asawa niya.</b><span>She has separated from her husband.</span></div>
<div class="ex"><b>Nakikipag-usap pa po ba siya sa mga kapitbahay?</b><span>Does he still talk with the neighbors?</span></div>
<h3>Mag- -an and magka-: to each other</h3>
<p><b>Mag- -an</b> needs a plural doer. The common ones are <i>magtulungan, magsigawan, magkuwentuhan, magyakapan, maghintayan</i>. Many people simply say <i>nag-away sila</i> for "they fought"; <i>nag-awayan</i> exists but sounds like a bigger, longer quarrel. <b>Magka-</b> with a few roots means coming to share a state: <i>nagkasundo</i> (came to agree), <i>nagkagalit</i> (fell out).</p>
<div class="ex"><b>Nagsisigawan po ba kayo sa bahay?</b><span>Do you shout at each other at home?</span></div>
<div class="ex"><b>Nagtulungan ang magkakapitbahay noong baha.</b><span>The neighbors helped one another during the flood.</span></div>
<div class="ex"><b>Nagkuwentuhan kami hanggang hatinggabi.</b><span>We chatted until midnight.</span></div>
<div class="ex"><b>Nagyakapan ang mag-ina pagdating niya.</b><span>Mother and child hugged each other when she arrived.</span></div>
<div class="ex"><b>Hindi nagkakasundo ang mag-asawa.</b><span>The couple do not get along.</span></div>
<div class="ex"><b>Nagkagalit sila dahil sa pera.</b><span>They fell out over money.</span></div>
<div class="note">Clinical tip: these verbs map social functioning quickly. <b>Nakikipag-usap pa po ba siya sa iba?</b> asks about contact; <b>Nagsisigawan po ba kayo?</b> asks about conflict without naming anyone as the aggressor, which feels safer for the family to answer. <i>Nakikihalubilo</i> sounds a little formal; families may say <i>Hindi na siya lumalabas</i> or <i>Lagi na lang siyang nasa kuwarto</i> instead.</div>
<div class="note">Common mistake: marking the partner with <i>ng</i>. It is <i>makipag-usap sa doktor</i>, not <i>makipag-usap ng doktor</i>.</div>`,
  quiz: [
    ['You need to get past people in a crowded hallway. You say:', ['Nakipagkita po.', 'Makikiraan po.', 'Magtulungan po.'], 1, 'Maki- in the future form + po is the polite "may I".'],
    ['"Gusto kong makipag-usap ____ doktor."', ['sa', 'ng', 'ang'], 0, 'The partner of makipag- takes sa (or kay for a name).'],
    ['"Nagsisigawan sila." means', ['One of them is shouting', 'They shouted at a neighbor', 'They are shouting at each other'], 2, 'Mag- -an = to each other; nagsisi- is the ongoing form.'],
    ['Completed form of makipag-away:', ['makikipag-away', 'nakipag-away', 'nakikipag-away'], 1, 'Na- replaces ma- for completed; the doubled ki- marks ongoing or future.'],
    ['A mother says: "Hindi na siya nakikihalubilo." What does this suggest?', ['Withdrawal from other people', 'A fight at home', 'A request to use the phone'], 0, 'Makihalubilo = mix with others. Ask since when, and what changed.'],
    ['"Puwede po bang makitawag?" asks', ['to call someone on your behalf', 'to use the other person\'s phone', 'to talk with the doctor'], 1, 'Makitawag = make a call using someone else\'s phone.']
  ]
},
{
  id: 'accidental', level: 'B1', unit: 'Verbs', title: 'It just happened: naiwan, nahulog, napaiyak',
  summary: 'Verbs for things that happen to you without intention: forgetting, dropping, tripping, bursting into tears. Telling them from deliberate acts is a clinical skill.',
  body: `
<p>Many everyday events are not chosen. Tagalog marks them with <b>ma-</b>, <b>ma- -an</b> and <b>mapa-</b>, and in the completed form these become <b>na-</b>, <b>na- -an</b> and <b>napa-</b>. The able-to and happened-to forms with <b>naka-</b> (<i>nakainom, nakatulog</i>) are covered in <a href="#/lessons/ability">Maka- and ma-</a>; this lesson goes further into accidents and involuntary reactions.</p>
<table><tr><th>Root</th><th>Deliberate</th><th>Accidental</th></tr>
<tr><td>iwan</td><td>iniwan (left behind on purpose)</td><td>naiwan (got left behind)</td></tr>
<tr><td>basag</td><td>binasag (smashed)</td><td>nabasag (got broken)</td></tr>
<tr><td>tapon</td><td>itinapon (threw away)</td><td>natapon (got spilled)</td></tr>
<tr><td>sugat</td><td>sinugatan (cut someone)</td><td>nasugatan (got cut, got wounded)</td></tr>
<tr><td>hulog</td><td>inihulog (dropped on purpose)</td><td>nahulog (fell)</td></tr></table>
<h3>Who takes ko, and who takes ako</h3>
<p>When there is a thing that was forgotten, left, found out or felt, the person takes <b>ko</b> (ng form) and the thing takes <i>ang</i>: <i>Nakalimutan ko ang gamot</i>. When the event happens to the person's own body or life, the person takes <b>ako</b>: <i>Nadapa ako</i>, <i>Nasugatan ako</i>, <i>Nahirapan ako</i>. With <i>nawalan</i>, the person takes <i>ang</i> and what was lost takes <i>ng</i>.</p>
<div class="ex"><b>Nakalimutan ko pong inumin ang gamot kagabi.</b><span>I forgot to take my medicine last night.</span></div>
<div class="ex"><b>Naiwan ko ang payong ko sa dyip.</b><span>I left my umbrella on the jeepney.</span></div>
<div class="ex"><b>Nabalitaan kong nanganak na si Liza.</b><span>I heard that Liza has given birth.</span></div>
<div class="ex"><b>Nahirapan po akong huminga kagabi.</b><span>I had trouble breathing last night.</span></div>
<div class="ex"><b>Nawalan siya ng gana mula nang mamatay ang asawa niya.</b><span>She has lost her appetite since her husband died.</span></div>
<h3>Ma-: it fell, it broke, it got lost</h3>
<div class="ex"><b>Nadapa ako sa hagdan.</b><span>I tripped on the stairs.</span></div>
<div class="ex"><b>Nahulog ang cellphone ko sa kanal.</b><span>My cellphone fell into the gutter.</span></div>
<div class="ex"><b>Nabasag ang plato.</b><span>The plate broke.</span></div>
<div class="ex"><b>Natapon ang kape sa damit ko.</b><span>The coffee spilled on my clothes.</span></div>
<div class="ex"><b>Nawala ang susi ko.</b><span>I lost my key.</span></div>
<h3>Mapa-: a sudden reaction you could not stop</h3>
<p><b>Napa-</b> describes an instant, involuntary response, often to a feeling: <i>napaiyak</i> (burst into tears), <i>napasigaw</i> (cried out), <i>napatigil</i> (stopped short), <i>napaupo</i> (sank into a seat).</p>
<div class="ex"><b>Napaiyak siya nang mabanggit ang anak niya.</b><span>She burst into tears when her child was mentioned.</span></div>
<div class="ex"><b>Napasigaw ako sa gulat.</b><span>I cried out in surprise.</span></div>
<div class="ex"><b>Napaupo na lang siya sa sahig.</b><span>He just sank down onto the floor.</span></div>
<h3>Accident or not? Asking without leading</h3>
<p>Start with an open question. If the story is unclear, offer both possibilities in the same calm tone, so neither sounds like the expected answer.</p>
<div class="ex"><b>Paano po kayo nasugatan?</b><span>How did you get hurt?</span></div>
<div class="ex"><b>Nahulog po ba kayo, o tumalon po kayo?</b><span>Did you fall, or did you jump?</span></div>
<div class="ex"><b>Nasugatan po ba kayo nang hindi sinasadya, o sinugatan po ninyo ang sarili ninyo?</b><span>Were you hurt by accident, or did you cut yourself?</span></div>
<div class="note">Clinical tip: the accidental form is the polite, face-saving default, so <i>nasugatan</i> or <i>nahulog</i> from a patient or relative does not settle intent. Ask the open question first, then the paired one, without blame, and chart the patient's own words. For missed doses, <b>Nakalimutan ko pong inumin</b> (I forgot) is different from <b>Hindi ko na po ininom</b> (I chose not to take it): ask which it was.</div>
<div class="note">Common mistake: mixing the two patterns. Say <i>Nakalimutan ko</i>, not <i>Nakalimutan ako</i>; say <i>Nadapa ako</i>, not <i>Nadapa ko</i>.</div>`,
  quiz: [
    ['"I forgot my medicine."', ['Nakalimutan ako ang gamot.', 'Nakalimutan ko ang gamot.', 'Kinalimutan ko ang gamot.'], 1, 'The person who forgets takes ko; the forgotten thing takes ang. Kinalimutan means deliberately put out of mind.'],
    ['"I tripped."', ['Nadapa ako.', 'Nadapa ko.', 'Dinapa ko.'], 0, 'Tripping happens to your body, so the person takes ako.'],
    ['Which sentence says the glass broke by accident?', ['Binasag niya ang baso.', 'Babasagin niya ang baso.', 'Nabasag ang baso.'], 2, 'Na- marks the unplanned event; binasag is deliberate.'],
    ['"Napaiyak siya." means', ['She made someone cry', 'She suddenly burst into tears', 'She will cry later'], 1, 'Napa- = a sudden, involuntary reaction.'],
    ['"Nawalan siya ____ gana."', ['ng', 'sa', 'ang'], 0, 'With nawalan, what was lost takes ng.'],
    ['A patient has a fresh wound on the wrist. Which is the best first question?', ['Nasugatan lang po kayo, di ba?', 'Sinugatan po ba ninyo ang sarili ninyo?', 'Paano po kayo nasugatan?'], 2, 'Start open, without suggesting either answer; then ask about intent directly if needed.']
  ]
},
{
  id: 'plurals', level: 'A2', unit: 'Foundations', title: 'More than one: mga, sina, and plural words',
  summary: 'Tagalog nouns do not change for the plural. Small words do the work: mga, sina, number words, and a few doubled forms.',
  body: `
<p>There is no plural ending in Tagalog. <b>Mga</b> (said "ma-nga") before a noun makes it plural: <i>ang mga gamot</i> (the medicines). It is left out when a number or a quantity word already shows there is more than one: <i>dalawang anak</i>, <i>maraming tao</i>. You will hear <i>maraming mga tao</i> in speech, but the shorter form is cleaner. Before a number or a time, <b>mga</b> means "about": <i>mga alas tres</i> (around three o'clock).</p>
<table><tr><th>Word</th><th>With a noun</th><th>Meaning</th></tr>
<tr><td><b>mga</b></td><td>mga bata</td><td>children</td></tr>
<tr><td><b>marami</b></td><td>maraming tao</td><td>many people</td></tr>
<tr><td><b>ilan</b></td><td>ilang araw</td><td>a few days; how many days?</td></tr>
<tr><td><b>kaunti</b></td><td>kaunting tubig</td><td>a little water</td></tr>
<tr><td><b>lahat</b></td><td>lahat ng gamot</td><td>all the medicines</td></tr>
<tr><td><b>bawat</b></td><td>bawat isa, bawat araw</td><td>each one, every day</td></tr></table>
<h3>Mga and the quantity words</h3>
<div class="ex"><b>Nasaan ang mga gamot ko?</b><span>Where are my medicines?</span></div>
<div class="ex"><b>Maraming tao sa ospital ngayon.</b><span>There are a lot of people at the hospital today.</span></div>
<div class="ex"><b>Ilang araw na po kayong hindi kumakain?</b><span>For how many days have you not been eating?</span></div>
<div class="ex"><b>Mga dalawang linggo na po siyang ganito.</b><span>He has been like this for about two weeks.</span></div>
<div class="ex"><b>Nasa kahon ang lahat ng gamot.</b><span>All the medicines are in the box.</span></div>
<div class="ex"><b>May sariling kama ang bawat isa.</b><span>Each one has a bed of their own.</span></div>
<div class="ex"><b>Kaunting kanin lang po ang nakain niya.</b><span>She only managed to eat a little rice.</span></div>
<h3>Sina, nina, kina for names</h3>
<p><b>Sina, nina, kina</b> are the plural of <a href="#/lessons/names">si, ni, kay</a>. <i>Sina Ana</i> means Ana and the people with her, or several named people. <i>Kina Ben</i> often means "at Ben's house". Plural pronouns combine with numbers and <i>lahat</i>: <b>kayong lahat</b> (all of you), <b>tayong dalawa</b> (the two of us). Plural <i>kayo</i> used for one person out of respect is covered in <a href="#/lessons/politeness">Po, opo, and respectful address</a>.</p>
<div class="ex"><b>Dumating na sina Ana.</b><span>Ana and the others have arrived.</span></div>
<div class="ex"><b>Kina Ben kami kakain mamaya.</b><span>We will eat at Ben's place later.</span></div>
<div class="ex"><b>Kumain na ba kayong lahat?</b><span>Have all of you eaten?</span></div>
<div class="ex"><b>Tayong dalawa ang maglilinis ng kuwarto.</b><span>The two of us will clean the room.</span></div>
<p>Describing words can show the plural by doubling the first syllable after <i>ma-</i>: <i>magaganda, malalaki, mababait</i>. This is optional: <i>Mabait ang mga nars</i> is also correct.</p>
<div class="ex"><b>Mababait ang mga nars dito.</b><span>The nurses here are kind.</span></div>
<div class="ex"><b>Malalaki na ang mga anak niya.</b><span>Her children are grown up now.</span></div>
<h3>Family groups and plural questions</h3>
<table><tr><th>Form</th><th>Example</th><th>Meaning</th></tr>
<tr><td>mag- + kin word: a pair</td><td>mag-ina, mag-ama, mag-asawa</td><td>mother and child, father and child, married couple</td></tr>
<tr><td>magka-: two who share a tie</td><td>magkapatid, magkaibigan</td><td>two siblings, two friends</td></tr>
<tr><td>magkaka-: three or more</td><td>magkakapatid, magkakaibigan</td><td>a group of siblings, a group of friends</td></tr></table>
<p>In casual speech <i>magkapatid</i> is sometimes used for more than two. Doubling a question word asks for a list: <b>sino-sino</b> (who all), <b>ano-ano</b> (what all).</p>
<div class="ex"><b>Mag-ina po ba kayo?</b><span>Are you mother and child?</span></div>
<div class="ex"><b>Lima kaming magkakapatid.</b><span>There are five of us siblings.</span></div>
<div class="ex"><b>Sino-sino po ang kasama ninyo?</b><span>Who all came with you?</span></div>
<div class="ex"><b>Ano-ano po ang mga gamot na iniinom ninyo?</b><span>What medicines are you taking?</span></div>
<div class="note">Clinical tip: <b>Sino po ang kasama ninyo?</b> usually gets one name. <b>Sino-sino</b> invites the whole list, which matters for who can give collateral and who will be at home. In the family history, check the tie before asking sensitive questions: <b>Mag-ina po ba kayo?</b> or <b>Magkapatid po ba kayo?</b></div>`,
  quiz: [
    ['"Dumating na sina Ana." means', ['Ana has arrived alone', 'Ana and the others have arrived', 'Ana\'s things have arrived'], 1, 'Sina = plural of si: Ana and the people with her.'],
    ['"____ araw na po kayong hindi kumakain?"', ['Ilang', 'Lahat', 'Bawat'], 0, 'Ilan + -ng = how many. Lahat and bawat do not ask a question.'],
    ['Which is correct?', ['dalawa anak', 'anak dalawa', 'dalawang anak'], 2, 'Number + linker -ng + noun. No mga is needed after a number.'],
    ['"Mga alas tres" means', ['around three o\'clock', 'exactly three o\'clock', 'every three hours'], 0, 'Before a number or time, mga means "about".'],
    ['Three or more siblings:', ['magkapatid', 'magkakapatid', 'mag-ina'], 1, 'Magkaka- is for three or more; magkapatid is two.'],
    ['You need to know everyone who came with the patient. Ask:', ['May kasama po ba kayo?', 'Sino po ang kasama ninyo?', 'Sino-sino po ang kasama ninyo?'], 2, 'Doubled sino-sino asks for the full list.']
  ]
},
{
  id: 'location', level: 'A2', unit: 'Everyday life', title: 'Where: nasa, sa, nandito, galing sa',
  summary: 'The grammar of place in one page: is at versus does at, where is versus where to, here and there, from and toward.',
  body: `
<p>This page sums up the grammar behind two picture lessons: <a href="#/lessons/pic-nasaan">Nasaan? Where things are</a> and <a href="#/lessons/pic-direksyon">Asking the way</a>. Go there for the pictures and the full list of position words.</p>
<h3>Nasa or sa? Nasaan or saan?</h3>
<p><b>Nasa</b> means "is at". It is the whole predicate, so no verb is needed. <b>Sa</b> only marks the place, so it goes with a verb or another predicate. In the same way, ask <b>nasaan</b> ("where is") before an ang-phrase and <b>saan</b> before a verb: <i>Nasaan si Ben?</i> but <i>Saan ka pupunta?</i> In casual speech <i>Saan ang ...?</i> also means "where is". The negative of nasa is <b>wala sa</b>.</p>
<div class="ex"><b>Nasa kusina si Nanay.</b><span>Mother is in the kitchen.</span></div>
<div class="ex"><b>Nagluluto si Nanay sa kusina.</b><span>Mother is cooking in the kitchen.</span></div>
<div class="ex"><b>Wala sa kuwarto ang pasyente.</b><span>The patient is not in the room.</span></div>
<p>To point, use <b>nandito</b> (here, near me), <b>nandiyan</b> (there, near you) and <b>nandoon</b> (over there). <b>Narito, nariyan, naroon</b> mean the same and sound more careful. <b>Sa may</b> + place means "near, around": a rough spot, not an exact one.</p>
<div class="ex"><b>Nandoon po sa labas ang asawa ninyo.</b><span>Your spouse is out there.</span></div>
<div class="ex"><b>Sa may palengke lang po kami nakatira.</b><span>We live just around the market.</span></div>
<h3>Position words and ka- words</h3>
<table><tr><th>Position</th><th>Meaning</th></tr>
<tr><td>sa loob ng, sa labas ng</td><td>inside, outside</td></tr>
<tr><td>sa harap ng, sa likod ng</td><td>in front of, behind</td></tr>
<tr><td>sa tabi ng, sa tapat ng</td><td>next to, across from</td></tr>
<tr><td>sa ibabaw ng, sa ilalim ng</td><td>on top of, under</td></tr>
<tr><td>sa pagitan ng ... at ...</td><td>between ... and ...</td></tr></table>
<p>The position word is a noun, so what follows takes <b>ng</b>, <b>ni</b> before a name, or a ko-form pronoun: <i>sa tabi ni Ana</i>, <i>sa tabi ko</i>. <b>Katabi</b>, <b>kaharap</b> and <b>kalapit</b> are words on their own: the one next to, facing, or near someone.</p>
<div class="ex"><b>Katabi ko siya sa bus kanina.</b><span>He was sitting next to me on the bus earlier.</span></div>
<h3>From, toward, as far as</h3>
<p><b>Galing sa</b> is "from", <b>papunta sa</b> is "going to", <b>hanggang sa</b> is "as far as, up to". With a name, use <b>kay</b>: <i>galing kay Liza</i>.</p>
<div class="ex"><b>Galing pa po kami sa probinsiya.</b><span>We have come all the way from the province.</span></div>
<div class="ex"><b>Masakit po mula sa batok hanggang sa likod.</b><span>It hurts from the nape of my neck down to my back.</span></div>
<div class="ex"><b>Nasaan po tayo ngayon?</b><span>Where are we right now?</span></div>
<div class="note">Clinical tip: <b>Nasaan po tayo ngayon?</b> tests orientation to place; an answer like <i>Nasa bahay po</i> from a patient on the ward is a finding. Ask about pain with <b>Saan po masakit?</b> and let the patient point and say <i>dito</i>. To find the family, ask <b>Nasaan po ang kasama ninyo?</b> and listen for <i>nasa labas</i> (just outside) or <i>wala po rito</i> (not here).</div>`,
  quiz: [
    ['"Mother is in the kitchen."', ['Nasa sa kusina si Nanay.', 'Nasa kusina si Nanay.', 'Nasaan kusina si Nanay.'], 1, 'Nasa already contains sa, and it needs no verb.'],
    ['"Saan ka ____?" (Where are you going?)', ['pupunta', 'nasa', 'galing'], 0, 'Saan goes before a verb; nasaan goes before an ang-phrase.'],
    ['"The patient is not in the room."', ['Hindi nasa kuwarto ang pasyente.', 'Walang kuwarto ang pasyente.', 'Wala sa kuwarto ang pasyente.'], 2, 'The negative of nasa is wala sa. Walang kuwarto means "has no room".'],
    ['"Sa may palengke kami nakatira" means', ['We live near the market.', 'We live inside the market.', 'We live far from the market.'], 0, 'Sa may = near, around.'],
    ['"next to the bed"', ['sa tabi kama', 'sa tabi sa kama', 'sa tabi ng kama'], 2, 'A position word is a noun, so the object takes ng.'],
    ['To check orientation to place, you ask', ['Saan po kayo pupunta?', 'Nasaan po tayo ngayon?', 'Galing po ba kayo sa bahay?'], 1, 'Nasaan po tayo ngayon? = Where are we right now?']
  ]
},
{
  id: 'relative-clauses', level: 'B1', unit: 'Natural speech', title: 'The man who, the medicine that: joining a clause to a noun',
  summary: 'Tagalog has no word for "who", "which" or "that". A whole clause joins its noun with the linker na or -ng, and the noun must be the topic of that clause.',
  body: `
<p>English needs <i>who, which</i> or <i>that</i> to hang a clause on a noun. Tagalog uses the same linker that joins a describing word to a noun (see <a href="#/lessons/linkers">Linkers: na and -ng</a>): <b>-ng</b> after a vowel or <i>n</i>, <b>na</b> after other consonants. Whatever follows the linker describes the noun, whether it is one word or a whole clause.</p>
<div class="ex"><b>Kapatid ko ang lalaking nakaupo sa labas.</b><span>The man sitting outside is my brother.</span></div>
<div class="ex"><b>Ito po ang gamot na ininom ko kagabi.</b><span>This is the medicine I took last night.</span></div>
<div class="ex"><b>Asawa niya ang babaeng kausap ng doktor.</b><span>The woman the doctor is talking to is his wife.</span></div>
<p>The order can flip, as with describing words: <i>ang lalaking nakaupo</i> or <i>ang nakaupong lalaki</i>. The noun-first order is more common when the clause is long.</p>
<div class="ex"><b>Kapatid ko po ang nakaupong lalaki.</b><span>The seated man is my brother.</span></div>
<h3>The one rule: the noun is the topic of the clause</h3>
<p>Inside the clause, the noun you are describing must be the <b>ang</b>-phrase, the topic. So you choose the verb's focus to fit it (see <a href="#/lessons/focus">Verb focus</a>). If the noun is the doer, use an actor-focus verb; if it is the thing acted on, use an object-focus verb, and the doer takes <b>ko, mo, niya</b> or <b>ng</b>.</p>
<table><tr><th>The noun is</th><th>Focus</th><th>Example</th><th>Meaning</th></tr>
<tr><td>the doer</td><td>actor: -um-, mag-</td><td>ang doktor na tumingin sa akin</td><td>the doctor who examined me</td></tr>
<tr><td>the one acted on</td><td>object: -in, i-</td><td>ang doktor na tiningnan ko</td><td>the doctor I looked at</td></tr>
<tr><td>the thing acted on</td><td>object</td><td>ang gamot na ininom ko</td><td>the medicine I took</td></tr>
<tr><td>(wrong)</td><td>actor</td><td>ang gamot na uminom ako</td><td>reads as "the medicine that drank"</td></tr></table>
<div class="ex"><b>Siya po ang doktor na tumingin sa akin.</b><span>He is the doctor who examined me.</span></div>
<div class="ex"><b>Siya po ang doktor na hinahanap ko.</b><span>She is the doctor I am looking for.</span></div>
<div class="ex"><b>Masarap ang ulam na niluto ni Aling Rosa.</b><span>The dish Aling Rosa cooked is delicious.</span></div>
<h3>No noun at all</h3>
<p>Drop the noun and <b>ang</b> + clause means "the one who, the thing that". <b>Ang mga</b> makes it plural. In speech <b>yung</b> (from <i>iyong</i>) does the same job and also opens a long everyday noun phrase: <i>yung ... na ...</i>.</p>
<div class="ex"><b>Tatay ko po ang nakaupo sa may pinto.</b><span>The one sitting by the door is my father.</span></div>
<div class="ex"><b>Kamag-anak po ng pasyente ang mga dumating kanina.</b><span>The people who arrived earlier are the patient's relatives.</span></div>
<div class="ex"><b>Totoo ba yung sinabi mo kahapon?</b><span>Is what you said yesterday true?</span></div>
<div class="ex"><b>Nasaan na yung nars na kausap ko kanina?</b><span>Where is the nurse I was talking to earlier?</span></div>
<h3>May and wala + clause</h3>
<p><b>May</b> + clause means "someone or something is doing", and <b>walang</b> + clause means "no one is doing". When the clause has its own doer, it usually sits after the verb as <i>ako</i> with a linker: <i>may naririnig akong boses</i>. Speakers also say <i>may naririnig ako na boses</i>; both are everyday Tagalog.</p>
<div class="ex"><b>May kumakatok sa pinto.</b><span>Someone is knocking at the door.</span></div>
<div class="ex"><b>Walang nakakaalam kung nasaan siya.</b><span>Nobody knows where he is.</span></div>
<div class="ex"><b>May naririnig akong boses kahit walang tao.</b><span>I hear a voice even when nobody is there.</span></div>
<div class="ex"><b>May taong sumusunod sa akin.</b><span>Someone is following me.</span></div>
<div class="ex"><b>Kilala po ba ninyo ang boses na naririnig ninyo?</b><span>Do you know the voice you are hearing?</span></div>
<div class="ex"><b>Ano po ang gamot na iniinom ninyo ngayon?</b><span>What is the medicine you are taking now?</span></div>
<div class="note">Clinical tip: these clauses let you pin down exactly what the patient means and read it back in the patient's own terms. <b>Ang boses na naririnig ninyo</b> (the voice you hear) keeps the voice as the topic, so you can go on: <i>lalaki ba o babae? ano ang sinasabi?</i> When you summarize, use the same pattern: <i>Ang sinasabi po ninyo, may taong sumusunod sa inyo</i> (What you are saying is, someone is following you).</div>
<div class="note">Common mistake: keeping the English order "the medicine that I drank" as <i>ang gamot na uminom ako</i>. Find the noun, make it the topic, then pick the focus: <i>ang gamot na ininom ko</i>.</div>`,
  quiz: [
    ['"the medicine I took"', ['ang gamot na uminom ako', 'ang gamot na ininom ko', 'ang gamot ininom ako'], 1, 'The medicine is the thing acted on, so the verb is object focus (ininom) and the doer is ko.'],
    ['"the doctor who examined me"', ['ang doktor na tumingin sa akin', 'ang doktor na tiningnan ko', 'ang doktor na tumingin ko'], 0, 'The doctor is the doer, so the verb is actor focus.'],
    ['"Ang nakaupo sa may pinto" means', ['the door that is open', 'sitting by the door', 'the one sitting by the door'], 2, 'Ang + clause with no noun = the one who.'],
    ['"Walang ____ kung nasaan siya." (Nobody knows where he is.)', ['nakakaalam', 'alam', 'nakakaalamin'], 0, 'Walang + actor-focus verb = nobody is doing it.'],
    ['"ang babae____ kausap ng doktor"', ['na', '-ng (babaeng)', 'no linker'], 1, 'Babae ends in a vowel, so the linker is -ng: babaeng.'],
    ['A patient says "May naririnig akong boses." Which follow-up keeps her words and asks for more?', ['Kilala po ba ninyo ang boses na naririnig ninyo?', 'Hindi po totoo ang boses.', 'Uminom po ba kayo ng boses?'], 0, 'It reuses her phrase as a clause on the noun boses and asks about it without dismissing it.']
  ]
},
{
  id: 'spoken-short-forms', level: 'B1', unit: 'Natural speech', title: 'Yung, \'di, \'wag, pa\'no: Tagalog as it is really spoken',
  summary: 'Fast speech clips and merges words. Learn to recognize the short forms patients and relatives use, while you keep the fuller, respectful forms yourself.',
  body: `
<p>Written Filipino and spoken Filipino are not the same. In ordinary talk, short words lose a syllable, two words melt into one, and little words like <i>e</i>, <i>ha</i> and <i>'no</i> carry tone. A relative telling you what happened at home will use these forms all the time. You need to <b>understand</b> them; you do not need to copy them. See also <a href="#/lessons/register">Formal Filipino vs everyday Taglish</a>.</p>
<h3>Written and spoken</h3>
<table><tr><th>Written</th><th>Spoken</th><th>Meaning</th></tr>
<tr><td>ang, iyong</td><td>yung</td><td>the, that</td></tr>
<tr><td>noong; ng</td><td>nung</td><td>when (past); of</td></tr>
<tr><td>hindi; hindi ba</td><td>'di; 'di ba</td><td>not; isn't it?</td></tr>
<tr><td>huwag</td><td>'wag</td><td>don't</td></tr>
<tr><td>iyan, iyon, ito</td><td>'yan, 'yon, 'to</td><td>that, that over there, this</td></tr>
<tr><td>at saka</td><td>'tsaka, tsaka, tyaka</td><td>and also, and then</td></tr>
<tr><td>paano, bakit, gaano, saan</td><td>pa'no, ba't, ga'no, sa'n</td><td>how, why, how much, where</td></tr>
<tr><td>kailan, nasaan</td><td>kelan, nasan</td><td>when, where is</td></tr>
<tr><td>ganoon, ganyan, ganito</td><td>ganun, ganon, ganyan, ganto</td><td>like that, like this</td></tr>
<tr><td>mayroon, kapag</td><td>meron, pag</td><td>there is; when, if</td></tr>
<tr><td>siya, niya, ninyo</td><td>s'ya, n'ya, n'yo</td><td>he or she, his or her, your</td></tr>
<tr><td>sabi ko; sabi mo</td><td>'ka ko, kako; 'ka mo, kamo</td><td>I said; you said</td></tr>
<tr><td>puwede, ayaw ko</td><td>pwede, ayoko</td><td>can; I don't want</td></tr></table>
<p>Text-message spelling varies a lot: <i>pano, pa'no, panu</i> are all the same word. Read for the sound.</p>
<div class="ex"><b>Nasan na yung gamot ni Lola?</b><span>Where is Grandma's medicine?</span></div>
<div class="ex" data-voice="Nung isang linggo pa sya di makatulog."><b>Nung isang linggo pa s'ya 'di makatulog.</b><span>She has not been able to sleep since last week.</span></div>
<div class="ex" data-voice="San mo nilagay yon?"><b>Sa'n mo nilagay 'yon?</b><span>Where did you put that?</span></div>
<div class="ex" data-voice="Pano to gamitin?"><b>Pa'no 'to gamitin?</b><span>How do you use this?</span></div>
<div class="ex" data-voice="Bat ka umiiyak?"><b>Ba't ka umiiyak?</b><span>Why are you crying?</span></div>
<div class="ex"><b>Kelan ka uuwi?</b><span>When are you coming home?</span></div>
<div class="ex"><b>Meron pa ba tayong bigas?</b><span>Do we still have rice?</span></div>
<div class="ex" data-voice="Ganyan talaga sya pag pagod."><b>Ganyan talaga s'ya pag pagod.</b><span>He is really like that when he is tired.</span></div>
<div class="ex"><b>Umuwi ka na, kako sa kanya.</b><span>"Go home now," I told him.</span></div>
<h3>Little words that carry tone</h3>
<ul>
<li><b>e, eh</b>: "well, you see", often a mild excuse. <b>E 'di</b> said as one word means "then, so".</li>
<li><b>o, oh</b>: "here, look", handing something over or pointing it out; <b>o sige</b> is "all right then".</li>
<li><b>'no</b> or <b>ano</b> at the end: "right?", asking you to agree.</li>
<li><b>ha</b> at the end softens a command ("okay?"); <b>Ha?</b> alone means "What? Pardon?"</li>
<li><b>kasi</b> at the start gives the reason ("because, you see"); at the end it complains ("that's why").</li>
<li><b>kaya nga</b>: "exactly, that's the point". <b>ewan</b>: "I don't know". <b>teka</b>: "wait". <b>tara</b>: "let's go". <b>sige</b>: "okay, go ahead".</li>
</ul>
<p>These sit in the same slots as the particles in <a href="#/lessons/particles">Particles</a>.</p>
<div class="ex" data-voice="Wag ka nang mag-alala, ha?"><b>'Wag ka nang mag-alala, ha?</b><span>Don't worry anymore, okay?</span></div>
<div class="ex" data-voice="Ang init, no?"><b>Ang init, 'no?</b><span>It's hot, isn't it?</span></div>
<div class="ex"><b>Teka lang, sasama ako.</b><span>Wait a moment, I'm coming along.</span></div>
<div class="ex" data-voice="O sige, tsaka na lang natin pag-usapan."><b>O sige, 'tsaka na lang natin pag-usapan.</b><span>All right, let's talk about it later.</span></div>
<div class="ex"><b>Ewan ko, basta ayoko ng ganyan.</b><span>I don't know, I just don't like that.</span></div>
<h3>On the ward</h3>
<div class="ex" data-voice="E, di na nga po sya kumakain."><b>E, 'di na nga po s'ya kumakain.</b><span>Well, he isn't even eating anymore.</span></div>
<div class="ex" data-voice="Kasi po nung umuwi sya galing Maynila, ganyan na sya."><b>Kasi po nung umuwi s'ya galing Maynila, ganyan na s'ya.</b><span>You see, ever since he came home from Manila, he has been like that.</span></div>
<div class="ex" data-voice="Tsaka po, ayaw na nyang lumabas ng kuwarto."><b>'Tsaka po, ayaw na n'yang lumabas ng kuwarto.</b><span>And also, he doesn't want to leave his room anymore.</span></div>
<div class="ex" data-voice="Di ba po sabi nyo, tuloy-tuloy lang ang gamot?"><b>'Di ba po sabi n'yo, tuloy-tuloy lang ang gamot?</b><span>Didn't you say the medicine should be taken without stopping?</span></div>
<div class="note">Clinical tip: a fast, clipped account is normal, not rude, and it often comes when a relative is worried. Let it run, then check one fact at a time. Answer in fuller forms with <b>po</b> (<i>Hindi po ba siya kumakain?</i>), especially with elders. Short forms from a young doctor can sound too familiar. Listen for <b>e</b> and <b>kasi</b>: they often introduce the reason the relative thinks matters most.</div>`,
  quiz: [
    ['"Ba\'t" is short for', ['baka', 'bakit', 'bata'], 1, 'Ba\'t = bakit, why.'],
    ['"Ayoko" means', ['I don\'t want (to)', 'I don\'t know', 'I agree'], 0, 'Ayoko = ayaw ko. "I don\'t know" is ewan.'],
    ['"Ewan" means', ['wait', 'let\'s go', 'I don\'t know'], 2, 'Ewan = I don\'t know. Teka = wait; tara = let\'s go.'],
    ['The fuller form of "Meron pa ba?"', ['Wala pa ba?', 'Mayroon pa ba?', 'Mamaya pa ba?'], 1, 'Meron = mayroon.'],
    ['"Umuwi ka na, ____ sa kanya." (I told him)', ['kamo', 'kasi', 'kako'], 2, 'Kako = sabi ko, I said. Kamo = you said.'],
    ['A worried relative tells you the story fast, full of \'di, yung and s\'ya. Best response?', ['Understand her short forms, and answer in fuller forms with po', 'Copy every short form and drop po', 'Ask her to speak formal Filipino only'], 0, 'Recognize the casual forms; keep your own speech respectful.']
  ]
},
{
  id: 'spanish-numbers', level: 'A2', unit: 'Everyday life', title: 'Alas-dos, bente pesos, dalawang tableta: which numbers when',
  summary: 'Filipinos switch between Spanish-derived, Tagalog and English numbers depending on what is being counted. Know which one to expect for time, money, age and dates.',
  body: `
<p><a href="#/lessons/numbers">Numbers, time, and money</a> gives the Tagalog and Spanish numbers from one to ten and the basic clock. <a href="#/lessons/time-words">Time words</a> covers kanina, mamaya and tuwing. This lesson is about <b>choosing</b>: which set of numbers people use for which job, so you can follow an answer without stopping to translate.</p>
<h3>The Spanish-derived numbers</h3>
<table><tr><th>Number</th><th>Spanish-derived</th><th>Number</th><th>Spanish-derived</th></tr>
<tr><td>1, 2, 3</td><td>uno, dos, tres</td><td>20</td><td>bente</td></tr>
<tr><td>4, 5, 6</td><td>kuwatro, singko, sais</td><td>30</td><td>trenta</td></tr>
<tr><td>7, 8, 9</td><td>siyete, otso, nuwebe</td><td>40</td><td>kuwarenta</td></tr>
<tr><td>10, 11, 12</td><td>diyes, onse, dose</td><td>50</td><td>singkuwenta</td></tr>
<tr><td>13, 14, 15</td><td>trese, katorse, kinse</td><td>60, 70</td><td>sesenta, setenta</td></tr>
<tr><td>16 to 19</td><td>disisais, disisiyete, disiotso, disinuwebe</td><td>80, 90</td><td>otsenta, nobenta</td></tr></table>
<p>From 21 to 29, join with a hyphen: <i>bente-uno, bente-dos, bente-singko</i>. From 31 up, join with <b>'y</b>: <i>trenta'y singko</i> (35), <i>kuwarenta'y otso</i> (48).</p>
<h3>Which numbers for which job</h3>
<table><tr><th>Job</th><th>What you will hear</th></tr>
<tr><td>Clock time</td><td>Spanish-derived: alas-dos, alas-diyes y medya. English is common too.</td></tr>
<tr><td>Prices</td><td>Spanish-derived or English for small sums; Tagalog for hundreds: isang daan, tatlong daan. Mixes are normal: isang daan at bente.</td></tr>
<tr><td>Age</td><td>Spanish-derived in casual talk (bente-singko anyos), Tagalog when careful (dalawampu't limang taong gulang), English in many clinics.</td></tr>
<tr><td>Dates</td><td>a- + Spanish number (a-kinse ng Hunyo); formal Tagalog ika- (ikalabinlima ng Hunyo).</td></tr>
<tr><td>Counting things and times</td><td>Tagalog with a linker (dalawang tableta, tatlong beses) or English. Never Spanish-derived.</td></tr></table>
<h3>The clock</h3>
<p><b>Ala-una</b> is one o'clock; every other hour takes <b>alas-</b>: <i>alas-dos</i> to <i>alas-dose</i>. Half past is <b>y medya</b>; quarter past is <b>y kuwarto</b> or <b>kinse</b>; quarter to is <b>menos kinse</b>: <i>menos kinse para alas-singko</i> (4:45). Other minutes follow the hour: <i>alas-dos bente</i> (2:20). Add the part of the day: <b>ng madaling-araw</b> (small hours), <b>ng umaga</b>, <b>ng tanghali</b> (around noon), <b>ng hapon</b>, <b>ng gabi</b>. Midnight is <b>alas-dose ng hatinggabi</b>.</p>
<div class="ex"><b>Mga alas-tres po ng madaling-araw siya nagigising.</b><span>He wakes up at around three in the morning.</span></div>
<div class="ex"><b>Alas-nuwebe y medya po kagabi ang huling inom niya ng gamot.</b><span>Her last dose was at nine-thirty last night.</span></div>
<div class="ex"><b>Alas-diyes y kuwarto na po.</b><span>It is a quarter past ten.</span></div>
<div class="ex"><b>Alas-dose ng hatinggabi na po siya nakatulog.</b><span>He only fell asleep at midnight.</span></div>
<h3>Money, age and dates</h3>
<div class="ex"><b>Bente pesos po ang isa.</b><span>Twenty pesos each.</span></div>
<div class="ex"><b>Singkuwenta na lang po, suki.</b><span>Just fifty, then, for a regular customer.</span></div>
<div class="ex"><b>Dos singkuwenta po ang isang banig ng gamot.</b><span>One strip of the medicine costs two hundred fifty.</span></div>
<div class="ex"><b>Tatlong daan po ang pamasahe namin papunta rito.</b><span>Our fare to get here is three hundred.</span></div>
<p>In prices, <i>dos singkuwenta</i> now usually means 250 (two hundred, fifty); older speakers may mean two pesos fifty. Context decides.</p>
<div class="ex"><b>Bente-singko anyos na po ang anak ko.</b><span>My son is twenty-five.</span></div>
<div class="ex"><b>Kuwarenta'y dos na po ako.</b><span>I am forty-two.</span></div>
<div class="ex"><b>Dalawampu't limang taong gulang na po siya.</b><span>She is twenty-five years old.</span></div>
<div class="ex"><b>A-kinse po ng Hunyo ang kaarawan ko.</b><span>My birthday is the fifteenth of June.</span></div>
<div class="ex"><b>Dinala po siya rito noong ikalabinlima ng Hunyo.</b><span>He was brought here on the fifteenth of June.</span></div>
<div class="ex"><b>Dalawang tableta po ang iniinom niya sa gabi.</b><span>She takes two tablets at night.</span></div>
<div class="ex"><b>Tatlong beses na po siyang naospital.</b><span>He has been hospitalized three times.</span></div>
<div class="note">Clinical tip: a bare <i>alas-otso</i> can be morning or night, so ask <b>Ng umaga po o ng gabi?</b> When you ask the time of the last dose or when symptoms began, expect Spanish-derived hours and <b>mga</b> (about). Ages from relatives are often rounded; check with <b>Anong taon po siya ipinanganak?</b> (What year was he born?). When a relative names amounts, such as the fare or the price of a strip of tablets, it is often a worry about whether they can keep up the treatment: ask, and involve the social worker.</div>`,
  quiz: [
    ['"Alas-tres y medya" is', ['3:15', '3:30', '3:45'], 1, 'Y medya = half past.'],
    ['One o\'clock is', ['ala-una', 'alas-uno', 'alas-isa'], 0, 'Only one o\'clock takes ala-; the rest take alas-.'],
    ['"Kuwarenta\'y otso" is', ['84', '40', '48'], 2, 'Kuwarenta (40) + \'y + otso (8).'],
    ['Counting tablets, which is natural?', ['dos tableta', 'dalawang tableta', 'tableta dos'], 1, 'Things are counted with Tagalog numbers and a linker.'],
    ['"Alas-dose ng hatinggabi" is', ['midnight', 'noon', 'dawn'], 0, 'Hatinggabi = midnight. Noon is alas-dose ng tanghali.'],
    ['A relative says the patient wakes "mga alas-tres". What do you check?', ['Nothing; the time is clear', 'Whether she means Spanish or English numbers', 'Whether it is ng madaling-araw or ng hapon'], 2, 'The hour alone does not say which part of the day; early waking at three in the morning is a sleep finding.']
  ]
},
{
  id: 'exclamations', level: 'A2', unit: 'Natural speech', title: 'Ang ganda! Naku! Sayang! Exclamations and what they signal',
  summary: 'How Tagalog says "how ...!", and the short exclamations that show surprise, pain, regret, relief and sympathy before the content does.',
  body: `
<p>An exclamation often tells you how a person feels before the rest of the sentence does. Tagalog has one very productive pattern for "How ...!" and a set of short words that people use all day. Strength words such as <b>napaka-</b> and doubling are in <a href="#/lessons/intensifiers">How much?</a>; this lesson does not repeat them.</p>
<h3>Ang + root: how ...!</h3>
<p>Put <b>ang</b> before the bare root, without <i>ma-</i>: <i>maganda</i> becomes <b>Ang ganda!</b> The thing described follows with <b>ng</b> (or <b>ni</b> before a name, or a ko-form pronoun). For many people, or for extra force, repeat the first syllable of the root: <i>Ang gaganda nila!</i></p>
<div class="ex"><b>Ang init ngayon!</b><span>It's so hot today!</span></div>
<div class="ex"><b>Ang ganda ng umaga!</b><span>What a beautiful morning!</span></div>
<div class="ex"><b>Ang sakit ng ulo ko!</b><span>My head hurts so much!</span></div>
<div class="ex"><b>Ang gaganda nila!</b><span>They are all so pretty!</span></div>
<div class="ex"><b>Ang babait ng mga nars dito!</b><span>The nurses here are so kind!</span></div>
<p><b>Kay</b> + root means the same, but it sounds literary or old-fashioned. You will hear it from older speakers, in songs and in prayers.</p>
<div class="ex"><b>Kay bilis ng panahon.</b><span>How quickly time goes.</span></div>
<div class="note">Common mistake: <i>Ang maganda!</i> is not an exclamation; it means "the pretty one". Use the root: <b>Ang ganda!</b> Also, <b>Buti nga</b> is not <b>Buti na lang</b>: the first means "serves you right", the second "good thing".</div>
<h3>Exclamation words</h3>
<table><tr><th>Exclamation</th><th>What it signals</th></tr>
<tr><td>Naku, Nako</td><td>surprise, worry or sympathy: oh no, oh dear</td></tr>
<tr><td>Hay naku</td><td>weariness or exasperation, often with a sigh</td></tr>
<tr><td>Ay</td><td>mild surprise, or catching one's own mistake</td></tr>
<tr><td>Aray, Aray ko</td><td>sudden pain: ouch</td></tr>
<tr><td>Sayang</td><td>regret: what a waste, a chance missed</td></tr>
<tr><td>Grabe</td><td>too much, intense; good or bad</td></tr>
<tr><td>Hala</td><td>alarm, uh-oh; in <i>Hala, sige</i> it urges someone on</td></tr>
<tr><td>Susmaryosep, Diyos ko</td><td>shock, fear or distress; ordinary speech for many older people</td></tr>
<tr><td>Salamat sa Diyos, Buti na lang</td><td>relief, thanks: thank God, good thing</td></tr>
<tr><td>Buti nga</td><td>serves you right</td></tr>
<tr><td>Talaga? Ganoon ba?</td><td>interest or surprise: really? is that so?</td></tr>
<tr><td>O sige</td><td>all right then, agreement</td></tr>
<tr><td>Ano ba iyan</td><td>mild annoyance; spoken <i>Ano ba 'yan</i></td></tr>
<tr><td>Kawawa naman</td><td>pity: poor thing</td></tr>
<tr><td>Nakakahiya naman</td><td>embarrassment, or polite reluctance to trouble someone</td></tr>
<tr><td>Nakakatakot</td><td>that's frightening</td></tr></table>
<div class="ex"><b>Naku, naiwan ko ang payong ko!</b><span>Oh no, I left my umbrella behind!</span></div>
<div class="ex"><b>Hay naku, ang hirap talaga ng buhay.</b><span>Oh dear, life is really hard.</span></div>
<div class="ex"><b>Aray ko, dahan-dahan lang po.</b><span>Ouch, gently please.</span></div>
<div class="ex"><b>Sayang, hindi ko na siya naabutan.</b><span>What a pity, I didn't get there in time to see him.</span></div>
<div class="ex"><b>Hala, nasaan na ang bata?</b><span>Uh-oh, where has the child gone?</span></div>
<div class="ex"><b>Diyos ko, ano na ang gagawin namin?</b><span>My God, what are we going to do now?</span></div>
<div class="ex"><b>Salamat sa Diyos at ligtas po siya.</b><span>Thank God he is safe.</span></div>
<div class="ex"><b>Buti na lang at nandito kayo.</b><span>Good thing you are here.</span></div>
<div class="ex"><b>Ano ba iyan, ang ingay!</b><span>Oh, come on, it's so noisy!</span></div>
<div class="ex"><b>Kawawa naman ang bata.</b><span>The poor child.</span></div>
<div class="ex"><b>Nakakahiya naman po sa inyo.</b><span>I'm so sorry to trouble you.</span></div>
<h3>Reading and answering</h3>
<div class="ex"><b>Naku, ang hirap po pala ng pinagdaanan ninyo.</b><span>Oh, what you went through was really hard.</span></div>
<div class="note">Clinical tip: exclamations are affect you can hear. <b>Aray</b> as the patient moves tells you where to examine. <b>Hay naku</b> with a sigh suggests weariness: ask <i>Pagod na po ba kayo?</i> <b>Sayang</b> marks regret: ask what was lost. <b>Diyos ko</b> and <b>Susmaryosep</b> are everyday for many older Filipinos and are not, by themselves, a sign of religious preoccupation; judge by the content of the thoughts. Answer with an exclamation of your own and <b>pala</b>, as above: it shows you heard the feeling. See <a href="#/lessons/idioms-distress">Idioms of distress</a>.</div>`,
  quiz: [
    ['"How beautiful!"', ['Ang maganda!', 'Ang ganda!', 'Ganda ang!'], 1, 'Ang + the bare root. Ang maganda = the pretty one.'],
    ['"Ang sakit ____ ulo ko!"', ['ng', 'ang', 'sa'], 0, 'The thing described takes ng.'],
    ['"Sayang" usually signals', ['pain', 'anger', 'regret or a missed chance'], 2, 'Sayang = what a waste, what a pity.'],
    ['Which one means "good thing"?', ['Buti nga', 'Buti na lang', 'Kawawa naman'], 1, 'Buti na lang = good thing. Buti nga = serves you right.'],
    ['Why "Ang gaganda nila!" and not "Ang ganda nila!"?', ['The repeated syllable stresses that there are many', 'It is the past form', 'It turns it into a question'], 0, 'Repeating the first syllable marks plural or extra force.'],
    ['An older patient says "Diyos ko, Susmaryosep" on hearing she must stay overnight. This most likely shows', ['religious preoccupation', 'disorganized speech', 'an everyday expression of shock or distress'], 2, 'These are ordinary exclamations for many older Filipinos; judge religious content by the thoughts, not by the exclamation.']
  ]
}
);
