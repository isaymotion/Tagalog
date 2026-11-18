/* Grammar lessons, third file (3.16.0): twenty lessons to B2. Same shape as js/data/lessons.js, six quiz items each.
   mag-um, choosing-focus, mang-verbs, pang-ipang, ka-an-verbs, magsi, feeling-verbs, may-verbs, softeners, din-daw, tags,
   time-clauses, while-before-after, kahit-kung, nang-ng, reason-result, formal-filipino, instructions, ordinals, equality.
   Units and order are set in js/data/lessons-zz-order.js. An example may carry data-voice="text for the voice".
   Drafted by Claude (one writer and one second reader per lesson), pending Dr. Navarro's review. */
window.LESSONS = window.LESSONS || [];
window.LESSONS.push(
{
  id: 'mag-um', level: 'B1', unit: 'Verbs: focus and aspect', title: 'Mag- or -um-? Two ways to make the doer the topic',
  summary: 'Both affixes make actor-focus verbs, but each root has its own. Some roots take both with different meanings: umalis is to leave, mag-alis is to take something off. Learn the tendencies, then learn each verb with its affix.',
  body: `
<p>The <a href="#/lessons/focus">focus lesson</a> showed that <b>-um-</b> and <b>mag-</b> both make the doer the topic. Sooner or later every learner asks which one a root takes. No rule predicts every verb, but there are strong tendencies. They help you guess well and remember better.</p>
<table><tr><th>Affix</th><th>Base</th><th>Completed</th><th>Ongoing</th><th>Future</th></tr>
<tr><td>-um- (kain)</td><td>kumain</td><td>kumain</td><td>kumakain</td><td>kakain</td></tr>
<tr><td>-um- (alis)</td><td>umalis</td><td>umalis</td><td>umaalis</td><td>aalis</td></tr>
<tr><td>mag- (luto)</td><td>magluto</td><td>nagluto</td><td>nagluluto</td><td>magluluto</td></tr>
<tr><td>mag- (alis)</td><td>mag-alis</td><td>nag-alis</td><td>nag-aalis</td><td>mag-aalis</td></tr></table>
<p>With -um- the base and completed forms look the same, and the future drops -um- altogether. With mag- the completed form changes m to n. Both double the first syllable of the root for ongoing and future. Write a hyphen when the root starts with a vowel: <i>mag-alis</i>, <i>nag-aral</i>. A third, smaller group uses <b>ma-</b> (<i>matulog, maligo, makinig</i>); learn those as you meet them.</p>
<h3>-um-: moving yourself, changing by yourself</h3>
<p>-um- is the usual affix for actions that stay with the doer: going and coming (<i>pumunta, dumating, umuwi, lumabas</i>), body positions (<i>tumayo, umupo</i>), and natural actions such as <i>kumain, uminom, umiyak, tumawa</i>. With a describing root it means becoming: <i>gumaling</i> (got better), <i>lumala</i> (got worse), <i>pumayat</i> (lost weight), <i>tumaba</i> (gained weight), <i>sumakit</i> (began to hurt).</p>
<div class="ex"><b>Lumala po ba ang ubo ninyo mula kahapon?</b><span>Has your cough gotten worse since yesterday?</span></div>
<div class="ex"><b>Pumayat siya nang husto nitong mga nakaraang buwan.</b><span>She has lost a lot of weight over the past few months.</span></div>
<div class="ex"><b>Umuwi na ang mga bisita.</b><span>The visitors have gone home.</span></div>
<div class="ex"><b>Tumayo po kayo nang dahan-dahan.</b><span>Please stand up slowly.</span></div>
<h3>mag-: deliberate activity, often done to something</h3>
<p>mag- is the usual affix for planned activities and for actions done to an object: <i>magluto, maglinis, maglaba, magtrabaho, mag-aral, magdala, magbigay</i>. It is also the affix for many noun roots (<i>magsimba</i>, to go to Mass, from <i>simba</i>; <i>magsapatos</i>, to put on shoes) and for almost every English loan: <i>mag-text, mag-drive, mag-shopping</i>.</p>
<div class="ex"><b>Nagluluto po ba kayo para sa sarili ninyo?</b><span>Do you cook for yourself?</span></div>
<div class="ex"><b>Nag-text na ako sa kapatid mo.</b><span>I have already texted your sibling.</span></div>
<div class="ex"><b>Nagsisimba kami tuwing Linggo.</b><span>We go to Mass every Sunday.</span></div>
<h3>Same root, two verbs</h3>
<p>Many roots take both. The -um- verb is the doer moving or acting alone; the mag- verb moves or works on something else, and that thing takes <b>ng</b>.</p>
<table><tr><th>-um-</th><th>Meaning</th><th>mag-</th><th>Meaning</th></tr>
<tr><td>umalis</td><td>leave</td><td>mag-alis</td><td>take off, remove</td></tr>
<tr><td>tumayo</td><td>stand up</td><td>magtayo</td><td>build, set up</td></tr>
<tr><td>umuwi</td><td>go home</td><td>mag-uwi</td><td>bring home</td></tr>
<tr><td>lumabas</td><td>go out, come out</td><td>maglabas</td><td>take out, bring out</td></tr>
<tr><td>pumasok</td><td>go in</td><td>magpasok</td><td>bring in, put in</td></tr>
<tr><td>tumuro</td><td>point</td><td>magturo</td><td>teach</td></tr>
<tr><td>bumili</td><td>buy</td><td>magbili</td><td>sell (old-fashioned)</td></tr></table>
<div class="ex"><b>Umalis siya sa ospital nang hindi nagpapaalam.</b><span>He left the hospital without telling anyone.</span></div>
<div class="ex"><b>Mag-alis po kayo ng sapatos bago pumasok.</b><span>Please take off your shoes before you go in.</span></div>
<div class="ex"><b>Nagtayo sila ng maliit na tindahan sa harap ng bahay.</b><span>They set up a small store in front of the house.</span></div>
<div class="ex"><b>Lumabas na po ba ang resulta?</b><span>Has the result come out yet?</span></div>
<div class="ex"><b>Naglabas siya ng pera sa bulsa.</b><span>He took some money out of his pocket.</span></div>
<div class="ex"><b>Nag-uwi si Ben ng pasalubong para sa mga anak niya.</b><span>Ben brought home presents for his children.</span></div>
<div class="ex"><b>Nagtuturo siya sa elementarya.</b><span>She teaches at an elementary school.</span></div>
<p>Textbooks like the pair bumili and magbili, but magbili (to sell) now sounds old. People say <i>magbenta</i> or <i>magtinda</i>, and the old root survives in signs such as <i>Ipinagbibili</i> (For sale). For buying, say <i>bumili</i>.</p>
<p>Be honest with yourself about the limits of the tendencies. A few roots take both with little or no difference: <i>sumulat</i> and <i>magsulat</i> (write), <i>bumasa</i> and <i>magbasa</i> (read; magbasa is more common in speech). Some verbs break the pattern: <i>humingi</i> (ask for) is deliberate but takes -um-. Speakers and regions also differ. Learn each new verb together with its affix, as you would learn a noun with its gender in Spanish: <i>kumain, nagluto, umalis, nag-alis</i>.</p>
<div class="note">Clinical tip: -um- with a describing root gives you the vocabulary of change in one word. <b>Gumaling po ba?</b> (Did it get better?), <b>Lumala po ba?</b> (Did it get worse?), <b>Sumakit po ba ulit?</b> (Did it hurt again?), <b>Pumayat po ba siya?</b> (Did he lose weight?) track the course of an illness quickly.</div>
<div class="note">Common mistake: using mag- for a motion verb. <i>Umuwi na siya</i> is "He went home". <i>Nag-uwi siya</i> means he brought something home, and the listener waits to hear what.</div>`,
  quiz: [
    ['"He has gone home."', ['Nag-uwi na siya.', 'Umuwi na siya.', 'Mag-uwi na siya.'], 1, 'Going home yourself is umuwi. Nag-uwi means bringing something home.'],
    ['"Nagtayo sila ng bahay." means', ['They stood beside the house.', 'They left the house.', 'They built a house.'], 2, 'Magtayo = build or set up. Tumayo = stand up.'],
    ['"____ ako ng adobo kagabi." (luto)', ['Nagluto', 'Lumuto', 'Magluluto'], 0, 'Luto takes mag-, and kagabi needs the completed form nagluto.'],
    ['Which verb means "got better"?', ['naggaling', 'ginaling', 'gumaling'], 2, 'A describing root with -um- means becoming: gumaling, lumala, pumayat.'],
    ['"Nagtuturo siya." means', ['He is pointing.', 'He teaches.', 'He is being taught.'], 1, 'Magturo = teach. Tumuro = point.'],
    ['A relative says: "Lumabas po siya kagabi at hindi pa bumabalik." What happened?', ['He went out last night and has not come back.', 'He took something out last night.', 'He brought someone out last night.'], 0, 'Lumabas (-um-) is the person going out. Taking something out would be naglabas with an object.']
  ]
},
{
  id: 'choosing-focus', level: 'B1', unit: 'Verbs: focus and aspect', title: '-in, i- or -an? Choosing the object-side verb',
  summary: 'Once the object is the topic, choose the affix by what happens to it: -in for the thing affected, i- for the thing moved or passed on, -an for the place, surface or person reached. A specific object pushes speakers toward these forms.',
  body: `
<p><a href="#/lessons/focus">Verb focus</a> and <a href="#/lessons/focus-an-i">Three more focuses</a> showed what each affix puts in the <b>ang</b> slot. This lesson is about the everyday choice: you know you want an object-side verb, so which one? Many roots take two or three of these affixes, each with its own meaning.</p>
<table><tr><th>Root</th><th>-in</th><th>i-</th><th>-an</th></tr>
<tr><td>sulat</td><td>sulatin: compose (a letter, a poem)</td><td>isulat: write down (a name, a number)</td><td>sulatan: write to (someone), write on (a page)</td></tr>
<tr><td>abot</td><td>abutin: reach (something high, a place, a time)</td><td>iabot: hand over (a thing)</td><td>abutan: hand something to (someone)</td></tr>
<tr><td>kuha</td><td>kunin: take, get (a thing)</td><td>ikuha: get something for (someone)</td><td>kunan, kuhanan: take something from (someone)</td></tr>
<tr><td>lagay</td><td>none</td><td>ilagay: put (a thing)</td><td>lagyan: put something on or in (a surface, a container)</td></tr>
<tr><td>tapon</td><td>none</td><td>itapon: throw away (a thing)</td><td>tapunan: throw something at or onto (someone, a place)</td></tr></table>
<h3>Three questions to ask</h3>
<ul><li>Is the thing changed, used up, made, or looked for? Use <b>-in</b>: <i>kainin, inumin, lutuin, hanapin, gamutin</i>.</li>
<li>Is it moved, put, given, thrown or passed on? Use <b>i-</b>: <i>ilagay, ibigay, itapon, ibalik, iabot</i>.</li>
<li>Is it the place, surface or person the action reaches? Use <b>-an</b>: <i>lagyan, bigyan, hugasan, puntahan, tawagan</i>.</li></ul>
<div class="ex"><b>Isulat po ninyo ang pangalan ninyo rito.</b><span>Please write your name here.</span></div>
<div class="ex"><b>Sulatan mo naman ang lola mo.</b><span>Do write to your grandmother.</span></div>
<div class="ex"><b>Sinulat niya ang tula noong nasa ospital siya.</b><span>He wrote the poem while he was in the hospital.</span></div>
<div class="ex"><b>Iabot mo nga sa akin ang baso.</b><span>Hand me the glass, please.</span></div>
<div class="ex"><b>Abutan mo ng tubig ang lolo.</b><span>Hand Grandpa some water.</span></div>
<div class="ex"><b>Kukunan po kayo ng dugo mamaya.</b><span>We will take some blood from you later.</span></div>
<div class="ex"><b>Ilagay mo ang yelo sa tuhod mo.</b><span>Put the ice on your knee.</span></div>
<div class="ex"><b>Lagyan mo ng yelo ang tuhod mo.</b><span>Put ice on your knee.</span></div>
<p>The last two say almost the same thing. With <i>ilagay</i> the ice is the topic; with <i>lagyan</i> the knee is. Choose the one that matches what you are talking about.</p>
<h3>When the topic is a person</h3>
<p>With verbs of asking, telling, teaching and calling, the person often takes <b>-in</b> or <b>-an</b> and the message takes <b>i-</b>. Two common verbs do not follow the "thing moved" idea: the words said take <i>sabihin</i>, and the thing brought takes <i>dalhin</i>, both with -in.</p>
<table><tr><th>The person is the topic</th><th>The message or thing is the topic</th></tr>
<tr><td>tanungin: ask (someone)</td><td>itanong: ask (a question)</td></tr>
<tr><td>sabihan: tell (someone)</td><td>sabihin: say (something)</td></tr>
<tr><td>turuan: teach (someone)</td><td>ituro: teach, point out (something)</td></tr></table>
<p>Calling has two person-topic verbs: <i>tawagin</i> is to call someone over to you, and <i>tawagan</i> is to phone someone.</p>
<div class="ex"><b>Tatanungin ko po kayo tungkol sa pagtulog ninyo.</b><span>I am going to ask you about your sleep.</span></div>
<div class="ex"><b>Itanong mo sa nars kung anong oras puwedeng dumalaw.</b><span>Ask the nurse what time visitors are allowed.</span></div>
<div class="ex"><b>Tawagin mo nga ang nars.</b><span>Please call the nurse over.</span></div>
<div class="ex"><b>Tatawagan ko ang anak ninyo mamaya.</b><span>I will phone your child later.</span></div>
<div class="ex"><b>Sinabihan na siya ng doktor na huwag magbuhat ng mabigat.</b><span>The doctor has already told him not to lift anything heavy.</span></div>
<h3>A specific object pulls toward object focus</h3>
<p>Actor focus with an ng-object usually means "a" or "some": <i>Kumain ka ng saging</i> (Have a banana). Once the object is specific, such as the banana on the table, this medicine, your name, or a person, speakers move it to the ang slot: <i>Kainin mo ang saging</i> (Eat the banana). That is why instructions about a particular thing are nearly always object-side.</p>
<p>The main exception: when you ask about the doer with <b>sino</b>, or describe the doer with a clause, the verb stays actor focus even if the object is specific. With a person as the object, actor focus marks that person with sa (<i>Tumawag ako sa kanya</i>), but object focus is more usual (<i>Tinawagan ko siya</i>).</p>
<div class="ex"><b>Uminom ka ng tubig.</b><span>Drink some water.</span></div>
<div class="ex"><b>Inumin mo ang gamot na ito pagkatapos kumain.</b><span>Take this medicine after eating.</span></div>
<div class="ex"><b>Sino ang kumuha ng tsinelas ko?</b><span>Who took my slippers?</span></div>
<div class="note">Clinical tip: medication teaching is about one particular tablet or cream, so it is object-side. <b>Inumin po ninyo ito</b> (Take this), <b>Ilagay po ninyo sa ilalim ng dila</b> (Put it under your tongue). For an ointment both work, with different topics: <b>Ipahid po ninyo ang pamahid sa sugat</b> (the ointment is the topic) and <b>Pahiran po ninyo ng pamahid ang sugat</b> (the wound is the topic).</div>
<div class="note">Common mistake: tawagin for a phone call. <i>Tawagin mo ang anak mo</i> means call your child over to you. To phone, say <i>Tawagan mo ang anak mo</i>.</div>`,
  quiz: [
    ['"____ mo ng yelo ang tuhod mo."', ['Ilagay', 'Lagyan', 'Lagayin'], 1, 'The knee is the surface reached, so -an: lagyan. With ilagay the ice would be the topic.'],
    ['"Tawagan mo ang anak mo." means', ['Call your child over here.', 'Phone your child.', 'Your child will call you.'], 1, 'Tawagan = phone someone. Tawagin = call someone over.'],
    ['"Hand me the glass."', ['Abutin mo ako ng baso.', 'Abutan mo ang baso.', 'Iabot mo sa akin ang baso.'], 2, 'The glass is passed on, so i-: iabot. With abutan the person would be the topic: Abutan mo ako ng baso.'],
    ['"Ask the nurse." (the nurse is the topic)', ['Tanungin mo ang nars.', 'Itanong mo ang nars.', 'Tanungan mo ang nars.'], 0, 'The person asked takes -in: tanungin. Itanong puts the question in focus.'],
    ['"Kainin mo ang mangga." means', ['Eat the mango.', 'Eat a mango, any mango.', 'You ate a mango.'], 0, 'Object focus marks a specific mango. Kumain ka ng mangga would be "have a mango".'],
    ['You are handing a patient one particular tablet. Which is right?', ['Uminom po kayo ito.', 'Iinom po ninyo ito.', 'Inumin po ninyo ito.'], 2, 'A specific tablet is the topic, so the object-focus inumin, with ninyo as the doer.']
  ]
},
{
  id: 'mang-verbs', level: 'B1', unit: 'Verbs: focus and aspect', title: 'Mang-: mamili, mangisda, manggamot',
  summary: 'Mang- makes actor-focus verbs for doing something again and again or to many, for making a living, and for gathering. Its last sound blends with the root: mamili, manahi, mangisda.',
  body: `
<p>Mang- is a third actor-focus prefix beside <a href="#/lessons/mag-um">-um- and mag-</a>. Its final sound changes to match the first sound of the root, and often that first consonant disappears. The doer takes <b>ang</b> and the object takes <b>ng</b>, as with the other actor-focus verbs.</p>
<table><tr><th>Root starts with</th><th>Prefix</th><th>Examples</th></tr>
<tr><td>p, b</td><td>mam-; p drops, b often drops</td><td>pili: mamili; pasyal: mamasyal; bigay: mamigay</td></tr>
<tr><td>t, s</td><td>man-; t and s usually drop</td><td>tahi: manahi; sakit: manakit; sigarilyo: manigarilyo</td></tr>
<tr><td>d, l, r</td><td>man-; the consonant stays</td><td>lamig: manlamig; dukot: mandukot</td></tr>
<tr><td>k</td><td>mang-; k drops</td><td>kuha: manguha; kagat: mangagat</td></tr>
<tr><td>a vowel, g, h, m, n, w, y</td><td>mang-; nothing drops</td><td>isda: mangisda; gamot: manggamot; hingi: manghingi; yari: mangyari</td></tr></table>
<p>These are tendencies. A few roots keep a consonant that "should" drop, and some speakers vary. Learn each verb as a whole word.</p>
<h3>Aspect: double the blended syllable</h3>
<p>The completed form changes m to n. The ongoing and future forms double the first syllable of the root in its blended shape, so the doubled syllable carries the new sound: <i>na-mi-mili</i>, <i>na-na-nahi</i>, <i>na-ngi-ngisda</i>.</p>
<table><tr><th>Base</th><th>Completed</th><th>Ongoing</th><th>Future</th></tr>
<tr><td>mamili</td><td>namili</td><td>namimili</td><td>mamimili</td></tr>
<tr><td>manahi</td><td>nanahi</td><td>nananahi</td><td>mananahi</td></tr>
<tr><td>mangisda</td><td>nangisda</td><td>nangingisda</td><td>mangingisda</td></tr>
<tr><td>manguna</td><td>nanguna</td><td>nangunguna</td><td>mangunguna</td></tr>
<tr><td>mangyari</td><td>nangyari</td><td>nangyayari</td><td>mangyayari</td></tr></table>
<p><i>Nangunguna</i> (from <i>una</i>, first) is "is leading, is in first place". <i>Nangyari</i> is in one of the most useful questions you will ask: <i>Ano po ang nangyari?</i> (What happened?)</p>
<h3>Again and again, or to many</h3>
<p>With many roots mang- spreads the action over many things, many people or many occasions. Compare it with the plain -um- or mag- verb.</p>
<table><tr><th>Plain verb</th><th>Mang- verb</th></tr>
<tr><td>bumili: buy (something)</td><td>mamili: shop, buy various things</td></tr>
<tr><td>humingi: ask for (something)</td><td>manghingi: ask people for things, go around asking</td></tr>
<tr><td>magbigay: give</td><td>mamigay: give out, hand out</td></tr>
<tr><td>sumakit: start to hurt</td><td>manakit: hurt people; also, to ache all over</td></tr></table>
<div class="ex"><b>Namimili kami sa palengke tuwing Sabado.</b><span>We do our shopping at the market every Saturday.</span></div>
<div class="ex"><b>Bumili lang ako ng isang kilong bigas.</b><span>I just bought a kilo of rice.</span></div>
<div class="ex"><b>Namigay ang barangay ng bigas pagkatapos ng bagyo.</b><span>The barangay handed out rice after the typhoon.</span></div>
<div class="ex"><b>Nanghihingi po siya ng pera sa mga kapitbahay.</b><span>He goes around asking the neighbors for money.</span></div>
<div class="ex"><b>Nananakit po ba siya ng ibang tao kapag galit?</b><span>Does he hurt other people when he is angry?</span></div>
<div class="ex"><b>Nangangagat ang aso nila.</b><span>Their dog bites.</span></div>
<p>Mamili has a second meaning, "choose", from <i>pili</i>. The sentence tells you which.</p>
<div class="ex"><b>Mamili po kayo: umaga o hapon?</b><span>Please choose: morning or afternoon?</span></div>
<h3>Making a living, and gathering</h3>
<p>Mang- names livelihoods, and with the doubled syllable it names the worker: <i>mangingisda</i> (fisher), <i>mananahi</i> (dressmaker), <i>manggagamot</i> (healer), <i>mamimili</i> (shopper, buyer). Many other jobs use mag-: <i>magsasaka</i> (farmer), <i>magtitinda</i> (vendor). Mang- also means gathering: <i>manguha</i> (gather), <i>mamitas</i> (pick fruit, from <i>pitas</i>), <i>mamulot</i> (pick things up, from <i>pulot</i>).</p>
<div class="ex"><b>Nangingisda ang tatay niya sa Mariveles.</b><span>Her father fishes for a living in Mariveles.</span></div>
<div class="ex"><b>Nanahi ang nanay ko para makapag-aral kami.</b><span>My mother sewed for a living so that we could go to school.</span></div>
<div class="ex"><b>Nanggagamot ng mga kapitbahay ang lola niya gamit ang mga halamang gamot.</b><span>His grandmother treats the neighbors with medicinal plants.</span></div>
<div class="ex"><b>Namitas kami ng mangga sa likod-bahay.</b><span>We picked mangoes in the backyard.</span></div>
<p>You will also hear mang- with describing roots for a sensation spreading through the body: <i>nanghihina</i> (feeling weak), <i>nanlalamig</i> (going cold), <i>nanginginig</i> (trembling), <i>nangangati</i> (itching).</p>
<div class="ex"><b>Nanlalamig at nanginginig ang mga kamay niya.</b><span>His hands are cold and trembling.</span></div>
<div class="note">Clinical tip: <i>nananakit</i> has two readings. <b>Nananakit ang katawan ko</b> is "my body aches"; <b>Nananakit siya</b> is "he hurts people". In a risk interview, name the object so there is no doubt: <b>Nananakit po ba siya ng ibang tao?</b> Ask for a recent example and who was hurt.</div>
<div class="note">Common mistake: keeping the root unchanged. Say <i>manahi</i>, not <i>mangtahi</i>; <i>nangingisda</i>, not <i>nangisngisda</i>. The doubled syllable copies the blended sound.</div>`,
  quiz: [
    ['Mang- + tahi gives', ['mangtahi', 'manahi', 'mantahi'], 1, 'Before t the prefix is man- and the t drops.'],
    ['Completed form of mangisda:', ['nangisda', 'nangingisda', 'mangingisda'], 0, 'Change m to n. Nangingisda is ongoing; mangingisda is future, or the noun fisher.'],
    ['"Ano po ang ____?" (What happened?)', ['nangyayari', 'mangyari', 'nangyari'], 2, 'Completed: nangyari. Nangyayari is "is happening".'],
    ['"Namigay sila ng damit." means', ['They gave one shirt to someone.', 'They handed out clothes.', 'They bought clothes.'], 1, 'Mamigay = give out to many. Magbigay is plain give.'],
    ['A mangingisda is', ['a fisher', 'a dressmaker', 'a healer'], 0, 'Mang- + isda with the doubled syllable names the worker.'],
    ['In a risk interview, which question clearly asks whether the patient hurts other people?', ['Nananakit po ba ang katawan niya?', 'Masakit po ba siya?', 'Nananakit po ba siya ng ibang tao?'], 2, 'Naming the object (ng ibang tao) rules out the reading "his body aches".']
  ]
},
{
  id: 'pang-ipang', level: 'B1', unit: 'Verbs: more affixes', title: 'Pang- and ipang-: what it is for, and what was used',
  summary: 'Pang- makes words of purpose: pantulog (for sleeping in), pampatulog (to help you sleep), panlinis (for cleaning). Ipang- makes verbs whose topic is the thing used: ipambili, ipanghugas.',
  body: `
<p><a href="#/lessons/focus-an-i">Three more focuses</a> introduced <b>ipang-</b> and the noun <i>pampatulog</i>. This lesson goes further: the sound changes, the difference between <i>pantulog</i> and <i>pampatulog</i>, how pang- words sit in a sentence, and the instrument verbs.</p>
<table><tr><th>Root starts with</th><th>Prefix</th><th>Examples</th></tr>
<tr><td>p, b</td><td>pam-</td><td>pambayad, pambili, pampatulog</td></tr>
<tr><td>d, l, r, s, t</td><td>pan-</td><td>panlinis, panlaba, pansulat, pantulog</td></tr>
<tr><td>a vowel, k, g, h, m, n, w, y</td><td>pang-</td><td>pang-ulam, pangkain, panghugas, panggatong</td></tr></table>
<p>Unlike <a href="#/lessons/mang-verbs">mang- verbs</a>, pang- words usually keep the root's first consonant: <i>pantulog</i>, <i>pambayad</i>. A few everyday words drop it: <i>pamasahe</i> (fare money, from pasahe), <i>pamalengke</i> (market money, from palengke). Some exist in both shapes, such as <i>pansulat</i> and the more formal <i>panulat</i> (something to write with). Write a hyphen before a vowel: <i>pang-ulam</i>.</p>
<h3>Para saan? Pang- words of purpose</h3>
<p>A pang- word answers <i>Para saan?</i> (What is it for?). It can stand alone, or follow a noun: <i>sabong panlaba</i> (laundry soap), <i>damit pambahay</i> (house clothes). In these fixed pairs the linker is <i>-ng</i> after a vowel, and after a consonant it is often left out in speech.</p>
<div class="ex"><b>Para saan po ang puting tableta?</b><span>What is the white tablet for?</span></div>
<div class="ex"><b>Pampatulog po iyan, para sa gabi.</b><span>That one helps you sleep; it is for the night.</span></div>
<div class="ex"><b>Magpalit ka na ng pantulog.</b><span>Change into your sleepwear now.</span></div>
<div class="ex"><b>Wala na po kaming pangkain hanggang Biyernes.</b><span>We have nothing left for food until Friday.</span></div>
<div class="ex"><b>Bumili ako ng sabong panlaba at panlinis ng banyo.</b><span>I bought laundry soap and something to clean the bathroom.</span></div>
<div class="ex"><b>May pamasahe ka pa ba pauwi?</b><span>Do you still have money for the fare home?</span></div>
<div class="ex"><b>Pambayad ko ito sa kuryente.</b><span>This is my money for the electric bill.</span></div>
<h3>Pantulog or pampatulog? Pang- plus pa-</h3>
<p>Pang- + <b>pa-</b> (cause) gives <b>pampa-</b>: something that makes a thing happen. Many medicine words are built this way.</p>
<table><tr><th>Word</th><th>Built from</th><th>Meaning</th></tr>
<tr><td>pantulog</td><td>pang- + tulog</td><td>sleepwear, something to sleep in</td></tr>
<tr><td>pampatulog</td><td>pang- + pa- + tulog</td><td>sleep aid, something that makes you sleep</td></tr>
<tr><td>pampakalma</td><td>pang- + pa- + kalma</td><td>something that calms you</td></tr>
<tr><td>pampagana</td><td>pang- + pa- + gana</td><td>something that gives you an appetite</td></tr>
<tr><td>pampababa ng lagnat</td><td>pang- + pa- + baba</td><td>something to bring a fever down</td></tr></table>
<div class="ex"><b>Umiinom po ba kayo ng pampatulog?</b><span>Do you take anything to help you sleep?</span></div>
<div class="ex"><b>Binigyan siya ng pampakalma kagabi.</b><span>He was given something to calm him last night.</span></div>
<div class="ex"><b>Ano po ang ininom ninyong pampababa ng lagnat?</b><span>What did you take to bring the fever down?</span></div>
<h3>Ipang-: the thing used is the topic</h3>
<p>The verb puts <b>i-</b> before pang-, with the same sound changes: <i>ipambili, ipanghugas, ipanlinis, ipambayad</i>. The thing used takes <b>ang</b>, and what is bought or washed takes <b>ng</b>. In everyday speech the i- is often dropped in the completed form: <i>pinambili</i>, <i>pinanghugas</i>.</p>
<table><tr><th>Base</th><th>Completed</th><th>Ongoing</th><th>Future</th></tr>
<tr><td>ipanghugas</td><td>ipinanghugas, pinanghugas</td><td>ipinanghuhugas</td><td>ipanghuhugas</td></tr>
<tr><td>ipambili</td><td>ipinambili, pinambili</td><td>ipinambibili</td><td>ipambibili</td></tr></table>
<div class="ex"><b>Ito ang ipanghugas mo ng plato.</b><span>Use this to wash the plates.</span></div>
<div class="ex"><b>Pinambili niya ng gamot ang pera mula sa kapatid niya.</b><span>He used the money from his sibling to buy medicine.</span></div>
<div class="ex"><b>Ano po ang ipinanlinis ninyo sa sugat?</b><span>What did you use to clean the wound?</span></div>
<div class="ex"><b>Ipambabayad ko sa upa ang suweldo ko ngayong buwan.</b><span>I will use my pay this month for the rent.</span></div>
<p>Instrument verbs are less frequent in casual talk than the pang- word. Many people would rather say <i>Pambili ko ito ng gamot</i> (This is my money for medicine) or <i>Ginamit ko itong pambili ng gamot</i>. Understand ipang- when you hear it, and use whichever feels easier.</p>
<div class="note">Clinical tip: <i>pampatulog</i> is how patients and relatives name any sleeping pill or sedative, often one bought without a prescription or borrowed from a relative. Ask what it is and where it came from: <b>Ano po ang pangalan ng pampatulog, at saan po ninyo ito nakuha?</b> And <b>Wala po kaming pambili</b> (We have no money to buy it) is a common reason for stopping medicine. Ask about it kindly before you assume refusal.</div>
<div class="note">Common mistake: mixing <i>pantulog</i> and <i>pampatulog</i>. A patient wears pantulog and takes pampatulog.</div>`,
  quiz: [
    ['"Pampatulog" is', ['sleepwear', 'something that makes you sleep', 'a bed'], 1, 'Pampa- = something that causes: here, sleep. Sleepwear is pantulog.'],
    ['Pang- + bayad:', ['pambayad', 'pangbayad', 'panbayad'], 0, 'Before b the prefix becomes pam-.'],
    ['"Wala na kaming ____ ng bigas." (money to buy rice)', ['pangbili', 'bumili', 'pambili'], 2, 'The pang- word pambili names the money for buying; before b the prefix is pam-, so pangbili is wrong. Bumili is the verb, and the sentence would then mean none of us bought rice.'],
    ['"Ano ang ipinanlinis mo sa sugat?" asks about', ['the wound', 'the thing used for cleaning', 'the person who cleaned'], 1, 'Ipang- makes the thing used the topic.'],
    ['The everyday completed form of ipambili is', ['pinambili', 'pambibili', 'ipambibili'], 0, 'In speech the i- of ipinambili is often dropped. Ipambibili is the future.'],
    ['A patient stopped her medicine and says: "Wala po kaming pambili." What is the most likely reason?', ['She thinks she is cured.', 'She dislikes the taste.', 'She cannot afford it.'], 2, 'Pambili = money for buying. Explore cost and access before assuming refusal.']
  ]
},
{
  id: 'ka-an-verbs', level: 'B2', unit: 'Verbs: more affixes', title: 'Kinatakutan, ikinagalit: verbs for what we feel about something',
  summary: 'Ma- keeps the person who feels as the topic (natatakot siya sa aso). Ka- -an makes the target of the feeling the topic (kinatatakutan niya ang aso), and ikina- makes its cause the topic (ikinagalit niya ang sinabi ko).',
  body: `
<p>Feelings are usually <b>ma-</b> verbs: <i>natakot siya</i>, <i>nagalit siya</i>, <i>natuwa siya</i>. The person who feels is the topic and the target takes <b>sa</b>. Two other affixes move something else into the <b>ang</b> slot, and you will meet them in relatives' stories, in formal speech and in writing. With both, the person who feels takes the ng form. These are verbs; do not confuse them with ka- -an nouns of state such as <i>kalungkutan</i> (sadness), covered in <a href="#/lessons/nominalising">Making nouns</a>.</p>
<table><tr><th>Root</th><th>ma-: the feeler is the topic</th><th>ka- -an: the target is the topic</th><th>ikina-: the cause is the topic</th></tr>
<tr><td>takot</td><td>Natakot siya sa aso.</td><td>Kinatakutan niya ang aso.</td><td>Ikinatakot niya ang narinig niya.</td></tr>
<tr><td>galit</td><td>Nagalit siya sa akin.</td><td>Kinagalitan niya ako.</td><td>Ikinagalit niya ang sinabi ko.</td></tr>
<tr><td>tuwa</td><td>Natuwa ang bata sa aso.</td><td>Kinatuwaan ng bata ang aso.</td><td>Ikinatuwa niya ang balita.</td></tr>
<tr><td>inis</td><td>Nainis ako sa kanya.</td><td>Kinainisan ko siya.</td><td>Ikinainis ko ang ginawa niya.</td></tr>
<tr><td>lungkot</td><td>Nalungkot kami.</td><td>rarely used</td><td>Ikinalungkot namin ang nangyari.</td></tr></table>
<p>Not every feeling has a natural ka- -an verb. For sadness, people use ma- and ikina-.</p>
<h3>Ka- -an: the person or thing the feeling is aimed at</h3>
<table><tr><th>Base</th><th>Completed</th><th>Ongoing</th><th>Future</th></tr>
<tr><td>katakutan</td><td>kinatakutan</td><td>kinatatakutan</td><td>katatakutan</td></tr>
<tr><td>kagalitan</td><td>kinagalitan</td><td>kinagagalitan</td><td>kagagalitan</td></tr>
<tr><td>kainisan</td><td>kinainisan</td><td>kinaiinisan</td><td>kaiinisan</td></tr></table>
<p>The completed form puts -in- after the k; the ongoing form also doubles the first syllable of the root. These verbs are mostly heard in the completed and ongoing forms, and very often after <i>ang</i>: <i>ang kinatatakutan ko</i> (what I fear). They are seldom used as commands, apart from set religious phrases such as <i>Katakutan ninyo ang Diyos</i> (Fear God) and <i>kagalitan</i> in its sense of scold.</p>
<p><i>Kinagalitan</i> has a special everyday meaning: scolded. <i>Kinagalitan ako ni Mama</i> is "Mom scolded me", while <i>Nagalit si Mama sa akin</i> is "Mom got angry with me", which she may not have said out loud.</p>
<div class="ex"><b>Ano po ang kinatatakutan ninyo?</b><span>What are you afraid of?</span></div>
<div class="ex"><b>Kinatatakutan siya ng mga bata sa lugar nila.</b><span>The children in their neighborhood are afraid of him.</span></div>
<div class="ex"><b>Kinagalitan siya ng amo niya sa harap ng ibang tao.</b><span>Her boss scolded her in front of other people.</span></div>
<div class="ex"><b>Kinaiinisan siya ng mga kasama niya sa trabaho.</b><span>His co-workers find him annoying.</span></div>
<div class="ex"><b>Kinatuwaan ng lahat ang bagong silang na sanggol.</b><span>Everyone was delighted with the newborn baby.</span></div>
<p>Ka- -an also marks the setting or object of a life experience: <i>kinalakihan</i> (where one grew up), <i>kinahiligan</i> (what one took up as a pastime; many people say <i>nakahiligan</i>).</p>
<div class="ex"><b>Ito ang bahay na kinalakihan ko.</b><span>This is the house I grew up in.</span></div>
<div class="ex"><b>Kinahiligan niya ang paghahalaman nang magretiro siya.</b><span>He took up gardening when he retired.</span></div>
<h3>Ikina-: the cause</h3>
<p>With <b>ikina-</b> the topic is what caused the feeling: news, a remark, an event. The forms are <i>ikinatuwa</i> (completed), <i>ikinatutuwa</i> (ongoing) and <i>ikatutuwa</i> (future). Ikina- also asks for the cause of an event that is not a feeling, most often <i>ikinamatay</i> (cause of death).</p>
<div class="ex"><b>Ano po ang ikinagalit niya bago siya sumigaw?</b><span>What made him angry before he shouted?</span></div>
<div class="ex"><b>Ikinatuwa ng pamilya ang paggaling niya.</b><span>The family was glad about his recovery.</span></div>
<div class="ex"><b>Ikinalulungkot ko po ang nangyari sa asawa ninyo.</b><span>I am sorry about what happened to your spouse.</span></div>
<div class="ex"><b>Ano po ang ikinamatay ng tatay ninyo?</b><span>What did your father die of?</span></div>
<div class="ex"><b>Ikinagagalak naming makilala kayo.</b><span>We are pleased to meet you.</span></div>
<p><i>Ikinalulungkot ko</i> and <i>ikinagagalak</i> are formal: you will hear them in speeches, announcements and letters. In conversation people more often say <i>Nalulungkot ako</i> or <i>Natutuwa akong makilala kayo</i>.</p>
<h3>Which one should you use?</h3>
<ul><li><b>Ma-</b> is the safe default when you ask how someone feels: <i>Natatakot po ba kayo?</i></li>
<li><b>Ka- -an</b> when the target is what you are talking about, especially "the one I fear", "the person he resents": <i>ang kinaiinisan niya</i>.</li>
<li><b>Ikina-</b> to ask about causes and triggers: <i>Ano po ang ikinalungkot ninyo?</i></li></ul>
<div class="ex"><b>Natatakot po ba kayo sa kanya?</b><span>Are you afraid of him?</span></div>
<div class="note">Clinical tip: the three forms answer three questions in a safety or mood history. <b>Natatakot po ba kayo sa kanya?</b> asks about the patient's own fear. <b>Kinatatakutan po ba siya ng mga kapitbahay?</b> tells you how others see the patient. <b>Ano po ang ikinagalit niya?</b> asks for the trigger, which is what you need to plan around.</div>
<div class="note">Common mistake: keeping the ma- markers with a ka- -an verb. Say <i>Kinatakutan ko ang aso</i> (feeler ko, target ang), not <i>Kinatakutan ako sa aso</i>.</div>`,
  quiz: [
    ['"Kinatatakutan niya ang dilim." The topic is', ['the one who is afraid', 'the dark', 'someone who frightens her'], 1, 'Ka- -an makes the target of the feeling the topic; niya is the one who feels.'],
    ['"Kinagalitan ako ng tatay ko." In everyday speech this means', ['My father scolded me.', 'I got angry at my father.', 'My father is angry at someone else.'], 0, 'Kinagalitan usually means scolded: the anger was said out loud to the person.'],
    ['"Ano po ang ____ niya?" (What did he die of?)', ['pinatay', 'namatay', 'ikinamatay'], 2, 'Ikina- makes the cause the topic. Pinatay niya asks what he killed.'],
    ['Ongoing form of kagalitan:', ['kinagalitan', 'kinagagalitan', 'kagagalitan'], 1, 'Completed -in- plus the doubled syllable ga.'],
    ['"Ikinatuwa ng pamilya ang balita." What is the topic?', ['the news, the cause of the joy', 'the family', 'nobody'], 0, 'Ikina- puts the cause in the ang slot; the family who felt it takes ng.'],
    ['You want to ask a patient, as simply as possible, whether she is afraid of her husband. Which is best?', ['Kinatakutan po ba kayo ng asawa ninyo?', 'Ikinatatakot po ba ninyo ang asawa ninyo?', 'Natatakot po ba kayo sa asawa ninyo?'], 2, 'Ma- with the patient as topic is the plainest way to ask about her own fear. The first option asks whether her husband was afraid of her.']
  ]
},
{
  id: 'magsi', level: 'B2', unit: 'Verbs: more affixes', title: 'Magsi- and magsipag-: when a whole group does it',
  summary: 'An affix that marks a plural doer. You hear it in announcements, instructions to a group and storytelling, but the plain verb with a plural topic is always correct too.',
  body: `
<p>Tagalog can show in the verb itself that the doers are many. <b>Magsi-</b> goes on roots that normally take <i>um-</i>: <i>kumain → magsikain</i>, <i>umuwi → magsiuwi</i>, <i>umalis → magsialis</i>, <i>umupo → magsiupo</i>. <b>Magsipag-</b> goes on roots that normally take <i>mag-</i>: <i>maghanda → magsipaghanda</i>, <i>maglinis → magsipaglinis</i>, <i>magtapos → magsipagtapos</i>. Both are actor focus, so the group of doers takes <i>ang</i>, and that topic must be plural: <i>sila</i>, <i>kayo</i> meaning several people, <i>tayo</i>, <i>lahat</i>, or a noun with <i>mga</i>.</p>
<table><tr><th>Plain verb</th><th>Base</th><th>Completed</th><th>Ongoing</th><th>Future</th></tr>
<tr><td>kumain</td><td>magsikain</td><td>nagsikain</td><td>nagsisikain</td><td>magsisikain</td></tr>
<tr><td>umuwi</td><td>magsiuwi</td><td>nagsiuwi</td><td>nagsisiuwi</td><td>magsisiuwi</td></tr>
<tr><td>umalis</td><td>magsialis</td><td>nagsialis</td><td>nagsisialis</td><td>magsisialis</td></tr>
<tr><td>maghanda</td><td>magsipaghanda</td><td>nagsipaghanda</td><td>nagsisipaghanda</td><td>magsisipaghanda</td></tr>
<tr><td>magtapos</td><td>magsipagtapos</td><td>nagsipagtapos</td><td>nagsisipagtapos</td><td>magsisipagtapos</td></tr></table>
<p>The aspect pattern is the one you know from other <i>mag-</i> verbs: <i>mag-</i> becomes <i>nag-</i> for completed and ongoing, and the ongoing and future forms double <i>si</i>. Older and Bible Tagalog also puts plain <i>magsi-</i> on some <i>mag-</i> roots, so you may meet forms that break the textbook pairing.</p>
<h3>Telling a group what to do</h3>
<p>The base form is the command. It sounds orderly and a little formal, which is why it is at home in schools, churches, offices and wards. With <b>po</b> it is polite to a group of adults.</p>
<div class="ex"><b>Magsiupo na po tayo.</b><span>Let us all sit down now.</span></div>
<div class="ex"><b>Magsitayo po ang lahat.</b><span>Everyone, please stand.</span></div>
<div class="ex"><b>Magsipaghanda na kayo, aalis tayo nang alas otso.</b><span>Get ready, all of you, we leave at eight.</span></div>
<div class="ex"><b>Magsiupo po kayo nang pabilog.</b><span>Please all sit in a circle.</span></div>
<div class="ex"><b>Magsibalik na po kayo sa mga kuwarto ninyo.</b><span>Please go back to your rooms now, everyone.</span></div>
<div class="ex"><b>Pinakikiusapan ang mga bantay na magsilabas muna ng ward.</b><span>Watchers are kindly asked to step out of the ward for now.</span></div>
<h3>In stories and the news: magsi- with -an</h3>
<p>In narration <i>nagsi-</i> paints a scene with many people. Add <b>-an</b> and the picture becomes many people acting at once or one after another: <i>nagsitakbuhan</i> (ran off in all directions), <i>nagsidatingan</i> (kept arriving), <i>nagsiuwian</i>, <i>nagsialisan</i>. This is different from the "together" or "to each other" <i>mag- -an</i> of <i>nag-iyakan</i> and <i>nagsigawan</i>, which is covered in <a href="#/lessons/social-verbs">Maki-, makipag-, mag- -an</a>.</p>
<div class="ex"><b>Nagsikain na ang mga bata.</b><span>The children have all eaten.</span></div>
<div class="ex"><b>Nagsialis agad ang mga tao pagkatapos ng misa.</b><span>People left right after Mass.</span></div>
<div class="ex"><b>Nagsitakbuhan ang mga tao nang lumindol.</b><span>People ran off in all directions when the earthquake struck.</span></div>
<div class="ex"><b>Nagsidatingan ang mga kamag-anak niya noong gabing iyon.</b><span>His relatives kept arriving that night.</span></div>
<div class="ex"><b>Nagsisipaglinis ang mga estudyante ng silid-aralan.</b><span>The students are cleaning the classroom.</span></div>
<div class="ex"><b>Binati ng punong-guro ang mga magsisipagtapos.</b><span>The principal congratulated the graduating students.</span></div>
<h3>The plain form is always fine</h3>
<p>Magsi- is never required. Everyday speech mostly uses the plain verb with a plural topic, and a learner who does the same is always correct. Learn magsi- so you understand announcements and stories, and use it yourself mainly for group instructions.</p>
<div class="ex"><b>Umuwi na ang mga bisita.</b><span>The visitors have gone home.</span></div>
<div class="ex"><b>Umupo na po kayong lahat.</b><span>Please sit down now, all of you.</span></div>
<div class="note">Clinical tip: in a group session or a ward announcement, magsi- gives a clear, polite instruction to everyone at once. With one patient, even an older one you address with <i>po</i> and <i>kayo</i>, use the plain verb: <i>Umupo po kayo</i>. Respectful <i>kayo</i> for one person is not a real plural. In a history, a relative's <i>Nagsialisan na po ang mga kapatid niya</i> (his siblings have all moved away) is a cue to ask who is left to support him.</div>`,
  quiz: [
    ['Telling a group of visitors to go home:', ['Magsiuwi na po kayo.', 'Magsipaguwi na po kayo.', 'Nagsiuwi na po kayo.'], 0, 'Umuwi is an um- verb, so it takes magsi-; the base form gives the instruction. Nagsiuwi is completed.'],
    ['Ongoing form of magsikain:', ['nagsikain', 'magsisikain', 'nagsisikain'], 2, 'Nag- plus doubled si: nagsisikain. Magsisikain is future; nagsikain is completed.'],
    ['"Nagsitakbuhan ang mga tao." means', ['One person ran away', 'People ran off in all directions', 'People will run tomorrow'], 1, 'Nagsi- with -an: many people acting at once.'],
    ['Which sentence is NOT correct?', ['Nagsialis na ang mga bisita.', 'Nagsialis na si Ben.', 'Umalis na si Ben.'], 1, 'Magsi- needs a plural topic; si Ben is one person.'],
    ['Maglinis is a mag- verb. For a group of students cleaning:', ['Nagsisipaglinis ang mga estudyante.', 'Nagsisilinis ang estudyante.', 'Naglinisan ang estudyante.'], 0, 'Mag- roots take magsipag-, and the topic is plural with mga.'],
    ['You lead a group session and want everyone seated in a circle. You say:', ['Umupo ka nang pabilog.', 'Nagsiupo po kayo nang pabilog.', 'Magsiupo po kayo nang pabilog.'], 2, 'The base form magsiupo is the group instruction; ka is singular and nagsiupo is completed.']
  ]
},
{
  id: 'feeling-verbs', level: 'B1', unit: 'Verbs: more affixes', title: 'Natatakot ako, nakakatakot siya: feeling it or causing it',
  summary: 'One root gives two words: the ma- verb for the person who feels it, and the nakaka- word for the person or thing that causes it. English does the same with bored and boring.',
  body: `
<p>Many feelings come from a root that makes two words. The <b>ma-</b> verb describes the person who has the feeling, who takes <i>ang</i>: <i>Natatakot ako</i> (I am scared). The <b>nakaka-</b> word describes whoever or whatever causes the feeling: <i>Nakakatakot siya</i> (he is frightening). The cause of a feeling takes <b>sa</b> after the ma- verb: <i>Natatakot ako sa aso</i>. English speakers mix these up just as learners of English mix up <i>bored</i> and <i>boring</i>.</p>
<table><tr><th>Root</th><th>Feeling: completed</th><th>Ongoing</th><th>Future</th><th>Causing it</th><th>Formal written</th></tr>
<tr><td>takot</td><td>natakot</td><td>natatakot</td><td>matatakot</td><td>nakakatakot</td><td>nakatatakot</td></tr>
<tr><td>inis</td><td>nainis</td><td>naiinis</td><td>maiinis</td><td>nakakainis</td><td>nakaiinis</td></tr>
<tr><td>pagod</td><td>napagod</td><td>napapagod</td><td>mapapagod</td><td>nakakapagod</td><td>nakapapagod</td></tr>
<tr><td>hiya</td><td>nahiya</td><td>nahihiya</td><td>mahihiya</td><td>nakakahiya</td><td>nakahihiya</td></tr></table>
<p>The same pairing works for <i>naaawa / nakakaawa</i> (feel pity, pitiful), <i>natutuwa / nakakatuwa</i> (glad, delightful), <i>nalulungkot / nakakalungkot</i> (sad, saddening), <i>nababagot / nakakabagot</i> (bored, boring) and <i>nagulat / nakakagulat</i> (surprised, surprising). <i>Kaba</i> works differently on the feeling side: <i>kinakabahan ako</i> (I am nervous), but <i>nakakakaba</i> (nerve-racking).</p>
<h3>The person who feels it: ma- and its aspects</h3>
<p>Completed <i>natakot</i> is a moment of fear; ongoing <i>natatakot</i> is being afraid now or again and again; after <b>huwag</b> use the base <i>matakot</i>. A linker and a verb say what the person is afraid or ashamed to do. When someone frightens or annoys you on purpose, the verb changes to <i>-in-</i>: <i>Tinakot niya ako</i>.</p>
<div class="ex"><b>Natatakot ako sa aso ng kapitbahay.</b><span>I am scared of the neighbor's dog.</span></div>
<div class="ex"><b>Natakot ang bata nang biglang mawalan ng kuryente.</b><span>The child got scared when the power suddenly went out.</span></div>
<div class="ex"><b>Naiinis na ako sa ingay sa labas.</b><span>The noise outside is starting to annoy me.</span></div>
<div class="ex"><b>Napapagod agad ako kapag umaakyat ng hagdan.</b><span>I get tired quickly when I climb stairs.</span></div>
<div class="ex"><b>Nahihiya po akong sabihin sa asawa ko.</b><span>I am embarrassed to tell my spouse.</span></div>
<div class="ex"><b>Huwag po kayong matakot, nandito lang kami.</b><span>Do not be afraid, we are right here.</span></div>
<div class="ex"><b>Tinatakot daw siya ng mga boses.</b><span>He says the voices threaten him.</span></div>
<h3>The thing that causes it: nakaka-</h3>
<p>The nakaka- word works like a describing word. It does not change for aspect, so time words show when: <i>Nakakatakot iyon kagabi</i>.</p>
<div class="ex"><b>Nakakatakot ang aso ng kapitbahay.</b><span>The neighbor's dog is frightening.</span></div>
<div class="ex"><b>Nakakapagod ang biyahe mula Maynila.</b><span>The trip from Manila is tiring.</span></div>
<div class="ex"><b>Nakakahiya po, pero hindi ko nainom ang gamot kahapon.</b><span>It is embarrassing, but I did not get to take my medicine yesterday.</span></div>
<div class="ex"><b>Nakakabagot dito sa ward.</b><span>It is boring here on the ward.</span></div>
<h3>Nakaka-, nakata-, kaka-: what you will hear</h3>
<p>Everyday speech doubles <i>ka</i>: <b>nakakatakot</b>. Grammar books and careful writing double the first syllable of the root instead: <b>nakatatakot</b>, <b>nakapapagod</b>, <b>nakahihiya</b>. You will see these in news and signs; both are correct. In fast, casual speech <i>na-</i> drops: <i>Kakahiya naman!</i>, <i>Kakainis!</i> Do not confuse this with the <a href="#/lessons/recent-past">kaka- of "just did"</a>: <i>kakainis</i> has no doer and expresses a feeling.</p>
<div class="ex"><b>Nakatatakot ang mga pangyayari sa ating bayan.</b><span>The events in our town are frightening.</span></div>
<div class="ex"><b>Kakainis naman ang trapik!</b><span>The traffic is so annoying!</span></div>
<div class="note">Clinical tip: listen for which word the patient chose. <b>Nakakatakot po ang mga boses</b> tells you about the voices; <b>Natatakot po ba kayo?</b> asks about the patient's own fear, so ask it. <b>Nakakahiya</b> often signals <i>hiya</i> about the situation, a reason a patient may hold back. <b>Nakakapagod na po ang lahat</b> (everything has become exhausting) is a statement about life, not stairs: ask gently what feels so heavy and whether thoughts of dying have come.</div>
<div class="note">Common mistake: <i>Nakakatakot ako</i> means "I am frightening", not "I am frightened". For your own feeling use the ma- verb: <i>Natatakot ako</i>.</div>`,
  quiz: [
    ['"I am scared of the dark."', ['Nakakatakot ako sa dilim.', 'Natatakot ako sa dilim.', 'Tinatakot ako sa dilim.'], 1, 'The person who feels fear takes the ma- verb; nakakatakot would make you the scary one.'],
    ['"Nakakapagod ang trabaho ko." means', ['My work is tiring', 'My work makes me feel shy', 'I will be tired at work tomorrow'], 0, 'Nakaka- describes what causes the feeling.'],
    ['"____ po ako sa inyo, pasensya na po." (I feel embarrassed)', ['Nakakahiya', 'Mahihiya', 'Nahihiya'], 2, 'The person who feels it takes the ongoing ma- form; mahihiya is future.'],
    ['The formal written form of nakakainis is', ['nakaiinis', 'naiinis', 'kinaiinis'], 0, 'Formal style doubles the first syllable of the root after naka-.'],
    ['"Huwag kang ____." (be afraid)', ['natakot', 'matakot', 'nakakatakot'], 1, 'After huwag, use the base form.'],
    ['A patient says "Nakakatakot po ang mga boses." What has she told you, and what next?', ['That she frightens the voices; reassure her', 'That she is not afraid; move on', 'That the voices are frightening; ask about her own fear and what they say'], 2, 'Nakaka- describes the voices. Ask Natatakot po ba kayo? and what the voices say.']
  ]
},
{
  id: 'may-verbs', level: 'B1', unit: 'Verbs: more affixes', title: 'May ginagawa, walang makain: someone, something, nothing',
  summary: 'Put a verb straight after may or wala and you get "someone who", "something to", "nowhere to" and "nothing to". Tagalog needs no word for someone or anything.',
  body: `
<p><a href="#/lessons/may-wala">May, mayroon, wala</a> showed <i>may</i> with a noun and a first look at <i>may</i> with a verb. This lesson builds the whole pattern. Tagalog has no separate word for <i>someone</i>, <i>something</i> or <i>anything</i>: a verb after <b>may</b> or <b>wala</b> does the job, and its <b>focus</b> tells you what the hidden word is. Do not use <i>sino</i> or <i>ano</i> here: <i>Sino ang kumakatok?</i> asks who is knocking.</p>
<table><tr><th>English</th><th>Tagalog</th><th>Why</th></tr>
<tr><td>Someone is knocking.</td><td>May kumakatok.</td><td>actor focus: the hidden word is the doer</td></tr>
<tr><td>Has someone hurt you?</td><td>Mayroon bang nanakit sa iyo?</td><td>actor focus, with mayroon</td></tr>
<tr><td>I have something to say.</td><td>May sasabihin ako.</td><td>object focus: the hidden word is the thing</td></tr>
<tr><td>Do you hear anything?</td><td>May naririnig ka ba?</td><td>ma- verb: the thing heard</td></tr>
<tr><td>I have somewhere to go.</td><td>May pupuntahan ako.</td><td>-an focus: the place</td></tr>
<tr><td>No one came.</td><td>Walang dumating.</td><td>wala + linker + verb</td></tr>
<tr><td>I cannot remember anything.</td><td>Wala akong maalala.</td><td>wala + pronoun with linker + ma- verb</td></tr></table>
<h3>May + verb: someone or something</h3>
<p>After <i>may</i> the verb comes straight, with no linker, and keeps its normal aspect: <i>may dumating</i> (someone arrived), <i>may darating</i> (someone is coming). With an object-focus verb, the person who has something to do, say or hear takes the <b>ang</b> form: <i>May sasabihin <b>ako</b></i>, <i>May naririnig <b>ka</b> ba?</i>, even though the same verbs alone take <i>ko</i> and <i>mo</i>: <i>Sasabihin ko</i>, <i>Naririnig mo ba?</i></p>
<div class="ex"><b>May kumakatok sa likod ng bahay.</b><span>Someone is knocking at the back of the house.</span></div>
<div class="ex"><b>May tumawag sa iyo kanina.</b><span>Someone called you earlier.</span></div>
<div class="ex"><b>May ginagawa ka ba ngayon?</b><span>Are you busy right now?</span></div>
<div class="ex"><b>May sasabihin po ako sa inyo.</b><span>I have something to tell you.</span></div>
<div class="ex"><b>May pupuntahan pa ako mamayang hapon.</b><span>I still have somewhere to go this afternoon.</span></div>
<div class="ex"><b>May naririnig po ba kayo kapag mag-isa kayo?</b><span>Do you hear anything when you are alone?</span></div>
<div class="ex"><b>May dumadalaw po ba sa inyo rito?</b><span>Does anyone visit you here?</span></div>
<h3>Mayroon, meron and wala take the linker</h3>
<p><b>Mayroon</b> (spoken <b>meron</b>) and <b>wala</b> need the linker before the verb. A short pronoun or particle moves up right after them and carries the linker itself: <i>wala akong</i>, <i>wala ka bang</i>, <i>mayroon bang</i>. <i>Wala na</i> plus the linker is written <b>wala nang</b>: no one any more. A verb clause can also describe a noun: <i>May napansin po ba kayong pagbabago?</i> (a change that you noticed).</p>
<div class="ex"><b>Mayroon bang nanakit sa iyo?</b><span>Has anyone hurt you?</span></div>
<div class="ex"><b>Meron akong ipapakita sa iyo.</b><span>I have something to show you.</span></div>
<div class="ex"><b>Walang dumalaw sa kanya kahapon.</b><span>No one visited him yesterday.</span></div>
<div class="ex"><b>Wala nang dumadalaw sa kanya.</b><span>No one visits him any more.</span></div>
<div class="ex"><b>May napansin po ba kayong pagbabago sa kanya?</b><span>Have you noticed any change in him?</span></div>
<h3>Nothing to eat, no one to talk to: wala + ma- or maka-</h3>
<p>The able-to forms from <a href="#/lessons/ability">Maka- and ma-</a> are the natural verbs after <i>wala</i>: <i>walang magawa</i> (nothing one can do), <i>walang makain</i> (nothing to eat), <i>walang makausap</i> (no one to talk to), <i>walang mapuntahan</i> (nowhere to go). An ordinary verb gives "does nothing": <i>Wala siyang ginagawa</i>.</p>
<div class="ex"><b>Wala akong maalala pagkatapos ng aksidente.</b><span>I cannot remember anything after the accident.</span></div>
<div class="ex"><b>Walang makain ang pamilya nila noong nawalan ng trabaho ang tatay.</b><span>Their family had nothing to eat when the father lost his job.</span></div>
<div class="ex"><b>Wala na po akong magawa.</b><span>There is nothing more I can do.</span></div>
<div class="ex"><b>Wala po akong makausap sa bahay.</b><span>I have no one to talk to at home.</span></div>
<div class="ex"><b>Wala siyang ginagawa kundi matulog.</b><span>He does nothing but sleep.</span></div>
<div class="note">Clinical tip: these short phrases carry a lot. <b>Wala po akong makausap</b> and <b>Wala na po akong magawa</b> speak of isolation and helplessness, so ask about mood and safety. <b>Wala siyang ginagawa kundi matulog</b> from a relative describes a loss of function: ask since when. Open questions with <i>may</i> do not name a culprit: <b>Mayroon bang nanakit sa iyo?</b> is easier to answer than a question about one person.</div>
<div class="note">Common mistake: <i>May sasabihin ko</i>. After <i>may</i> the person takes <i>ako</i>: <i>May sasabihin ako</i>.</div>`,
  quiz: [
    ['"May kumakatok." means', ['I am knocking', 'Someone is knocking', 'No one is knocking'], 1, 'May + actor-focus verb: someone does it.'],
    ['"May sasabihin ____ sa iyo." (I)', ['ako', 'ko', 'akin'], 0, 'After may, the person who has something to say takes the ang form.'],
    ['"Wala ____ maalala." (I)', ['ako', 'akong', 'ko'], 1, 'The pronoun moves up after wala and carries the linker.'],
    ['"Walang makain ang pamilya." means', ['The family does not want to eat', 'No one fed the family', 'The family has nothing to eat'], 2, 'Wala + linker + ma- verb: nothing one can eat.'],
    ['"I have somewhere to go later."', ['May pupuntahan ako mamaya.', 'May pupunta ako mamaya.', 'Pupuntahan ko mamaya.'], 0, 'The -an form makes the hidden word a place.'],
    ['A widow says "Wala na po akong makausap." What does it tell you?', ['She refuses to talk with you', 'She has no one left to talk to; ask about support and mood', 'She cannot speak because of pain'], 1, 'Walang makausap = no one to talk to: a sign of isolation worth exploring.']
  ]
},
{
  id: 'softeners', level: 'A2', unit: 'Natural speech', title: 'Naman, nga, sana, muna, lang: softening requests and replies',
  summary: 'The small words that turn an order into a kind request and a blunt answer into a gentle one, and what each of them adds.',
  body: `
<p>You met <b>nga</b>, <b>naman</b> and <b>lang</b> in <a href="#/lessons/particles">Particles</a>, and <b>paki-</b>, <b>muna</b> and <b>puwede ba</b> in <a href="#/lessons/requests">Asking and telling</a>. This lesson shows what each softener adds and how they combine. They are tiny words, but they decide whether a request sounds kind or bossy. Use them together with <b>po</b> (see <a href="#/lessons/politeness">Po, opo, and respectful address</a>).</p>
<table><tr><th>Word</th><th>What it adds</th><th>Feels like</th></tr>
<tr><td><b>nga</b></td><td>a light "please"; in replies, "indeed"</td><td>friendly; impatient if said sharply</td></tr>
<tr><td><b>naman</b></td><td>gentle insistence, pleading</td><td>"please, come on"</td></tr>
<tr><td><b>lang</b></td><td>makes the request small</td><td>"just, only"</td></tr>
<tr><td><b>muna</b></td><td>only for now, or before something else</td><td>"first, for the moment"</td></tr>
<tr><td><b>sana</b></td><td>turns a request into a hope</td><td>"I hope, it would be good if"</td></tr>
<tr><td><b>puwede ba</b>, <b>puwede po bang</b></td><td>asks permission or ability</td><td>"could you, may I"</td></tr></table>
<h3>Softening a request: nga, naman, lang, muna</h3>
<p><b>Nga</b> is the everyday "please" between family and friends, and it goes well with <b>paki-</b>. Tone matters: said sharply, <i>Tumahimik ka nga!</i> means "Will you be quiet!" <b>Naman</b> pleads. It suggests the person has been holding back and you are gently pushing. <b>Lang</b> says "this is a small thing", and <b>muna</b> says "only for now". All of them sit right after the verb and any short pronoun, and usually before <b>po</b>. With <b>muna</b> you will also hear <b>po muna</b>: <i>Maupo po muna kayo</i>.</p>
<div class="ex"><b>Pakiabot nga po ang baso.</b><span>Could you pass me the glass, please?</span></div>
<div class="ex"><b>Pakihinaan naman ang radyo, natutulog ang bata.</b><span>Please turn the radio down, the child is sleeping.</span></div>
<div class="ex"><b>Tulungan mo naman ako rito.</b><span>Come on, help me here.</span></div>
<div class="ex"><b>Kumain ka naman kahit kaunti.</b><span>Please eat, even just a little.</span></div>
<div class="ex"><b>Kukunan ko lang po kayo ng dugo.</b><span>I am just going to take some blood.</span></div>
<div class="ex"><b>Tanong ko lang po, saan ang botika?</b><span>Just a question: where is the pharmacy?</span></div>
<div class="ex"><b>Maupo muna po kayo.</b><span>Please have a seat for now.</span></div>
<div class="ex"><b>Dito ka lang muna, babalik ako.</b><span>Stay here for now, I will be back.</span></div>
<div class="ex"><b>Isang tanong na lang po, tapos na tayo.</b><span>Just one more question, and then we are done.</span></div>
<h3>Sana and puwede ba: hope and permission</h3>
<p><b>Sana</b> puts the request as a wish, so the listener can say no without losing face. <b>Puwede ba</b> asks; with a following verb clause it takes the linker: <b>puwede po bang</b>. To ask for yourself, put the pronoun after <i>ba</i>: <i>puwede ba akong</i>.</p>
<div class="ex"><b>Sana po makabalik kayo sa Huwebes.</b><span>I hope you can come back on Thursday.</span></div>
<div class="ex"><b>Sana matulungan mo ako bukas.</b><span>I hope you can help me tomorrow.</span></div>
<div class="ex"><b>Puwede po bang buksan ninyo ang bibig ninyo?</b><span>Could you open your mouth, please?</span></div>
<div class="ex"><b>Puwede ba akong sumabay sa iyo pauwi?</b><span>Can I ride home with you?</span></div>
<h3>Softening a reply</h3>
<p>In answers, <b>naman</b> takes the edge off: <i>Mabuti naman po</i> is the usual "I'm fine, thanks", and <i>hindi naman</i> is a soft "not really". <b>Nga</b> agrees: <i>Oo nga</i>, "yes, that's right". <b>Lang</b> shrinks: <i>wala lang</i>, "it's nothing".</p>
<div class="ex"><b>Mabuti naman po, salamat.</b><span>I'm fine, thank you.</span></div>
<div class="ex"><b>Oo nga, ang lamig ngayon.</b><span>Yes, it really is cold today.</span></div>
<div class="ex"><b>Hindi naman po masyadong masakit.</b><span>It doesn't hurt that much, really.</span></div>
<div class="note">Clinical tip: patients use the same softeners to play things down. <b>Kaunti lang po</b> and <b>Hindi naman po masyado</b> can hide real pain or real distress, out of hiya or not wanting to bother you. Follow up gently: <i>Gaano po kasakit, mula isa hanggang sampu?</i> When you ask, use <b>lang</b> and <b>muna</b> to make a procedure sound small and temporary, but never to hide what you are about to do.</div>
<div class="note">Common mistake: adding <b>na</b> before <b>naman</b>. <i>Na naman</i> means "again", often with annoyance: <i>Umiiyak na naman siya</i> is "She is crying again." It is not a softer <i>naman</i>.</div>`,
  quiz: [
    ['"Kumain ka ____ kahit kaunti." (gently pleading)', ['pala', 'naman', 'na naman'], 1, 'Naman pleads gently. Na naman means "again", and pala means "it turns out".'],
    ['"Maupo muna po kayo." What does muna add?', ['for now, before the next thing', 'again', 'quickly'], 0, 'Muna = first, for the moment.'],
    ['Which word order is correct?', ['Pakiabot po nga ang baso.', 'Pakiabot ang baso nga po.', 'Pakiabot nga po ang baso.'], 2, 'Nga comes right after the verb, before po.'],
    ['"Sana po makabalik kayo sa Huwebes." How does it sound?', ['A gentle hope that leaves room to say no', 'A strict order', 'A question about the past'], 0, 'Sana turns the request into a wish.'],
    ['"Umiiyak na naman siya." means', ['She is crying a little', 'She is crying again', 'Please let her cry'], 1, 'Na naman = again, often with annoyance.'],
    ['A patient says "Hindi naman po masyadong masakit" but is holding her side. Best next step?', ['Accept it and move on', 'Tell her she is exaggerating', 'Ask gently how bad it is, from one to ten'], 2, 'Naman and lang can play pain down. Check with a gentle follow-up question.']
  ]
},
{
  id: 'din-daw', level: 'A2', unit: 'Natural speech', title: 'Din or rin, daw or raw, dito or rito: the d and r switch',
  summary: 'Five short words change d to r after a vowel. Learn the rule, how loosely people follow it in speech, and what din and daw really add.',
  body: `
<p>Five little words start with <b>d</b> after a consonant but switch to <b>r</b> after a vowel. You already know <b>daw</b> as the hearsay marker from <a href="#/lessons/reported-speech">Sabi niya, ayon sa, akala ko</a> and <a href="#/lessons/hedging">Daw, yata, baka, siguro, parang</a>. This lesson gives the rule, says honestly how speech differs, and adds the other meanings of <b>din</b>.</p>
<table><tr><th>After a consonant</th><th>After a vowel, w or y</th><th>Meaning</th></tr>
<tr><td><b>din</b></td><td><b>rin</b></td><td>also, too; in the end</td></tr>
<tr><td><b>daw</b></td><td><b>raw</b></td><td>so they say, I was told</td></tr>
<tr><td><b>dito</b></td><td><b>rito</b></td><td>here</td></tr>
<tr><td><b>doon</b></td><td><b>roon</b></td><td>there, over there</td></tr>
<tr><td><b>dine</b></td><td><b>rine</b></td><td>here (regional)</td></tr></table>
<h3>The rule</h3>
<p>Look at the sound just before the word. After a vowel (a, e, i, o, u), and after a word ending in <b>w</b> or <b>y</b> such as <i>ikaw</i> or <i>bahay</i>, use the <b>r</b> form. After any other consonant, use <b>d</b>. At the start of a sentence the word is always <b>d</b>: <i>Dito ka maupo.</i> Some common exceptions: many writers keep <b>d</b> after a word that already ends in ra, ri, ro, raw or ray, to avoid two r sounds together (<i>maaari din</i>, <i>biro daw</i>). Fixed words such as <i>nandito</i>, <i>narito</i>, <i>nandoon</i> and <i>naroon</i> do not change.</p>
<div class="ex"><b>Gutom na rin ako.</b><span>I am hungry too.</span></div>
<div class="ex"><b>Salamat din po.</b><span>Thank you too.</span></div>
<div class="ex"><b>Ikaw rin, mag-ingat ka.</b><span>You too, take care.</span></div>
<div class="ex"><b>Matibay raw ang bahay na iyon.</b><span>That house is sturdy, they say.</span></div>
<div class="ex"><b>Halika rito.</b><span>Come here.</span></div>
<div class="ex"><b>Doon sila nakatira dati.</b><span>They used to live there.</span></div>
<div class="ex"><b>Pumunta kami roon kahapon.</b><span>We went there yesterday.</span></div>
<div class="ex"><b>Maupo ka rine, anak.</b><span>Sit here, my child.</span></div>
<h3>Speech and writing</h3>
<p>In everyday speech many people ignore the rule: <i>ako din</i>, <i>siya daw</i> and <i>punta ka dito</i> are heard all the time, and nobody will misunderstand you. In writing, in notes for patients and in the model answers in this app, follow the rule. <b>Dine</b> and <b>rine</b> are heard in Batangas, Quezon and nearby provinces, mostly from older speakers; recognize them, but you do not need to use them.</p>
<h3>What din adds</h3>
<p>The main meaning is "also, too", and with a negative, "either": <i>hindi rin</i>. With a verb about something you waited for, <b>din</b> means "in the end, finally". <b>Din naman</b> softens a judgment: "fairly, not bad after all". Order: <b>din</b> comes after <i>na</i> or <i>pa</i> and before <i>daw</i> and <i>po</i>.</p>
<div class="ex"><b>Masakit din po ang likod ko.</b><span>My back hurts too.</span></div>
<div class="ex"><b>Hindi rin po ako makatulog.</b><span>I cannot sleep either.</span></div>
<div class="ex"><b>Ganoon din po ba kahapon?</b><span>Was it the same yesterday too?</span></div>
<div class="ex"><b>Natapos din ang ulan.</b><span>The rain finally stopped.</span></div>
<div class="ex"><b>Masarap din naman ang luto rito.</b><span>The cooking here is quite good, actually.</span></div>
<h3>What daw adds</h3>
<p><b>Daw</b> marks words as someone else's. Passing on an instruction with <b>daw</b> makes it softer, because the order is not yours: <i>Kumain ka na raw</i> means "(someone says) you should eat now". <b>Ano raw?</b> asks "What did he say?"</p>
<div class="ex"><b>Kumain ka na raw.</b><span>You should eat now, they say.</span></div>
<div class="ex"><b>Inumin mo na raw ang gamot mo, sabi ng nars.</b><span>The nurse says you should take your medicine now.</span></div>
<div class="ex"><b>Hindi raw po siya umiinom ng gamot sa bahay.</b><span>He does not take his medicine at home, I was told.</span></div>
<div class="ex"><b>Kailan daw po ako puwedeng umuwi?</b><span>When did they say I can go home?</span></div>
<div class="note">Clinical tip: when you pass on another person's instruction, <b>raw</b> makes the source clear and sounds less bossy. For anything important, also name the source: <i>Sabi po ng doktor, ...</i> When a relative says <b>raw</b>, chart it as reported, not seen.</div>
<div class="note">Common mistake: putting <b>din</b> or <b>daw</b> first or after <b>po</b>. These words lean on the word before them: <i>Ako rin po</i>, not <i>Rin ako</i>. In careful speech <b>po</b> comes after them: <i>Salamat din po</i>.</div>`,
  quiz: [
    ['"Masakit ____ po ang tiyan ko." (also, following the rule)', ['rin', 'din', 'raw'], 1, 'Masakit ends in t, a consonant, so din.'],
    ['Which follows the d / r rule?', ['Pumunta kami doon.', 'Nakatira sila doon.', 'Pumunta kami roon.'], 2, 'Kami and sila both end in a vowel, so roon.'],
    ['"Ang tagal bago nakatulog si Lolo, pero nakatulog din siya." Here din means', ['in the end, finally', 'also, he too', 'so they say'], 0, 'After a long wait, din means it finally happened.'],
    ['"Kumain ka na raw." Who wants you to eat?', ['Only the speaker', 'Someone else, and the speaker passes it on', 'Nobody; it is a question'], 1, 'Raw marks the instruction as someone else\'s.'],
    ['"Hindi ____ ako makatulog." (not either, following the rule)', ['raw ba', 'din', 'rin'], 2, 'Hindi ends in a vowel, so rin.'],
    ['You pass on the doctor\'s instruction to a patient\'s mother. Which makes the source clear?', ['Painumin daw po ninyo siya ng tubig, sabi ng doktor.', 'Painumin ko siya ng tubig.', 'Uminom ka rin ng tubig.'], 0, 'Daw plus sabi ng doktor shows whose instruction it is.']
  ]
},
{
  id: 'tags', level: 'B1', unit: 'Natural speech', title: '\'No, ha, e, o, \'di ba, kaya, pala: how a sentence ends',
  summary: 'The little words at the end of a sentence tell you whether the speaker wants agreement, is checking, complaining, pointing or wondering. Learn to hear them, and which ones are safe for you to use.',
  body: `
<p><a href="#/lessons/spoken-short-forms">Yung, 'di, 'wag, pa'no</a> introduced a few of these tone words. Here they are side by side, with what each signals and whether a clinician should use it. You met <b>pala</b> in <a href="#/lessons/hedging">Daw, yata, baka</a> and <b>kaya</b> meaning "so" in <a href="#/lessons/connectors">Connecting ideas</a>; as a tag, <b>kaya</b> means something else.</p>
<table><tr><th>Tag</th><th>Signals</th><th>Safe for you with patients?</th></tr>
<tr><td><b>ano</b>, <b>'no</b></td><td>seeking agreement: "isn't it?"</td><td>yes, in small talk</td></tr>
<tr><td><b>'di ba</b>, <b>hindi ba</b></td><td>checking a fact: "right?"</td><td>yes, but not for symptoms</td></tr>
<tr><td><b>ha</b></td><td>checking, softening an instruction: "okay?"</td><td>yes</td></tr>
<tr><td><b>o</b>, <b>oh</b></td><td>pointing out: "look, here"</td><td>yes</td></tr>
<tr><td><b>kaya</b></td><td>wondering: "I wonder"</td><td>yes</td></tr>
<tr><td><b>pala</b></td><td>a new realization: "oh, so"</td><td>yes</td></tr>
<tr><td><b>e</b>, <b>eh</b></td><td>a mild excuse or reason: "well, you see"</td><td>sparingly</td></tr>
<tr><td><b>naman e</b></td><td>a complaint: "oh, come on"</td><td>no</td></tr>
<tr><td><b>na nga e</b></td><td>defensive: "I already did, okay?"</td><td>no</td></tr>
<tr><td><b>sige</b>, <b>sige na</b></td><td>okay, go ahead; come on (urging)</td><td>yes: <i>sige po</i></td></tr></table>
<h3>Seeking agreement and checking: 'no, 'di ba, ha</h3>
<p><b>'No</b> (short for <i>ano</i>) and <b>'di ba</b> invite the listener to agree. Said with a falling tone, a final <b>'no</b> can also push back: <i>Hindi ako ganoon, 'no!</i> is "I'm not like that, you know!" <b>Ha</b> with a rising tone checks and softens: "okay?" Alone, <i>Ha?</i> means "Pardon?"</p>
<div class="ex" data-voice="Mainit ngayon, no?"><b>Mainit ngayon, 'no?</b><span>It's hot today, isn't it?</span></div>
<div class="ex"><b>Ang hirap po niyan, ano?</b><span>That's hard, isn't it?</span></div>
<div class="ex" data-voice="Kahapon ang uwi niya, di ba?"><b>Kahapon ang uwi niya, 'di ba?</b><span>He came home yesterday, right?</span></div>
<div class="ex" data-voice="Sabi po ninyo kanina, masakit ang tiyan ninyo, di ba po?"><b>Sabi po ninyo kanina, masakit ang tiyan ninyo, 'di ba po?</b><span>You said earlier that your stomach hurts, right?</span></div>
<div class="ex"><b>Babalik ako mamaya, ha?</b><span>I'll come back later, okay?</span></div>
<div class="ex"><b>Tawagan po ninyo kami kapag may kailangan kayo, ha?</b><span>Call us if you need anything, okay?</span></div>
<h3>Pointing out and wondering: o, kaya, pala</h3>
<p><b>O</b> draws attention to something you are handing over or showing. <b>Kaya</b> is a short word that goes after the first word, like <i>ba</i>, and turns a question into wondering aloud: it sounds curious, not demanding. <b>Pala</b> marks something the speaker has only just found out.</p>
<div class="ex"><b>O, ito na ang kape mo.</b><span>Here, this is your coffee.</span></div>
<div class="ex"><b>Tingnan mo, o, ang laki ng buwan.</b><span>Look, the moon is so big.</span></div>
<div class="ex"><b>Uulan kaya mamaya?</b><span>I wonder if it will rain later.</span></div>
<div class="ex"><b>Ano po kaya ang nakakatulong sa inyo kapag ganyan ang pakiramdam ninyo?</b><span>I wonder what helps you when you feel like that.</span></div>
<div class="ex"><b>Taga-Bataan din po pala kayo!</b><span>Oh, so you are from Bataan too!</span></div>
<div class="ex"><b>Sarado pala ang tindahan.</b><span>Oh, the store is closed.</span></div>
<h3>Excuses and complaints: e, naman e, na nga e, sige</h3>
<p>A final <b>e</b> gives a reason and asks for understanding. <b>Naman e</b> complains. <b>Na nga e</b> says "I already did it, stop asking", and often means the speaker feels nagged or blamed. <b>Sige</b> agrees or closes a talk; <b>sige na</b> urges.</p>
<div class="ex"><b>Hindi ako nakapunta, umuulan kasi, e.</b><span>I couldn't go, it was raining, you see.</span></div>
<div class="ex"><b>Wala po kasi kaming pamasahe, e.</b><span>We had no money for the fare, you see.</span></div>
<div class="ex"><b>Ang tagal mo naman, e.</b><span>You took so long!</span></div>
<div class="ex"><b>Uminom na nga po ako ng gamot, e.</b><span>I already took my medicine, okay?</span></div>
<div class="ex"><b>Sige na, sumama ka na.</b><span>Come on, just come with us.</span></div>
<div class="note">Clinical tip: <b>ha</b>, <b>o</b>, <b>kaya</b>, <b>pala</b> and <b>sige po</b> make you sound warm and natural. Avoid <b>'di ba</b> when asking about symptoms: <i>Wala na kayong naririnig na boses, 'di ba?</i> invites a yes. Ask openly instead. Do not use <b>naman e</b> or <b>na nga e</b> yourself. When a patient or relative says them, they feel nagged or blamed: acknowledge it (<i>Pasensiya na po, kailangan ko lang pong siguraduhin</i>) instead of arguing.</div>`,
  quiz: [
    ['"Mainit ngayon, \'no?" The speaker wants you to', ['repeat the sentence', 'agree', 'leave'], 1, '\'No at the end seeks agreement.'],
    ['"Uminom na nga po ako ng gamot, e." How does the patient most likely feel?', ['a little annoyed at being asked again', 'grateful', 'confused about the medicine'], 0, 'Na nga e is defensive: I already did, okay?'],
    ['"Darating ____ si Ben mamaya?" (I wonder)', ['pala', 'ha', 'kaya'], 2, 'Kaya after the first word turns the question into wondering.'],
    ['"Sarado pala ang tindahan." The speaker', ['knew it all along', 'is just finding this out', 'is asking you'], 1, 'Pala marks a new realization.'],
    ['"O, ito na ang gamot mo." Here o means', ['here, look', 'or', 'why'], 0, 'O points out or hands something over.'],
    ['Checking for hallucinations, which question is best?', ['Wala na po kayong naririnig na boses, \'di ba?', 'Ang tagal po naman ninyo, e.', 'May naririnig po ba kayong boses kahit walang tao?'], 2, 'An open question does not push the patient toward yes.']
  ]
},
{
  id: 'time-clauses', level: 'B1', unit: 'Building sentences', title: 'When, as soon as, since: noong, nang, pagka-, pagdating',
  summary: 'Join a whole event to a sentence to say when something happened, what happened right after it, and since when. These are the anchors of a symptom timeline.',
  body: `
<p><a href="#/lessons/time-words">Time words</a> gave you single words such as <i>kanina</i> and <i>simula noong</i>. This lesson joins a whole event to the sentence: "when it started", "as soon as I woke up", "since we moved". For <b>kung</b> and <b>kapag</b> (if, whenever) see <a href="#/lessons/conditionals">If, when, in case</a>; here you only see where <i>kapag</i> sits on the timeline.</p>
<table><tr><th>Word</th><th>What follows</th><th>Meaning</th></tr>
<tr><td><b>noong</b>, nung</td><td>a clause, usually with the completed verb</td><td>when (one time in the past)</td></tr>
<tr><td><b>nang</b></td><td>a clause, carefully with the base form: nang magsimula, nang mamatay</td><td>when (one time in the past)</td></tr>
<tr><td><b>pagka-</b> + root</td><td>the doer in the ng form: pagkagising ko</td><td>as soon as, right after</td></tr>
<tr><td><b>pag-</b> + root</td><td>the doer in the ng form: pagdating niya</td><td>upon, at the moment of</td></tr>
<tr><td><b>kapag</b>, pag</td><td>a full clause, the doer in the ang form</td><td>when, whenever (future or repeated)</td></tr>
<tr><td><b>sa tuwing</b>, tuwing</td><td>a clause, usually with the ongoing verb</td><td>every time</td></tr>
<tr><td><b>mula nang</b>, simula noong</td><td>a clause</td><td>since</td></tr></table>
<h3>Noong and nang: one time in the past</h3>
<p>Both mean "when" for a single past event. After <b>noong</b> speakers normally use the completed form. After <b>nang</b> the careful choice is the base form (<i>nang magsimula, nang mahilo</i>), though the completed form is also heard in speech. For -um- verbs the two look the same: <i>noong dumating, nang dumating</i>. In fast speech <i>noong</i> becomes <i>nung</i>.</p>
<div class="ex"><b>Noong nagkasakit si Lolo, kami ang nag-alaga sa kanya.</b><span>When Grandpa got sick, we were the ones who looked after him.</span></div>
<div class="ex"><b>Umiiyak na siya nang dumating kami.</b><span>She was already crying when we arrived.</span></div>
<div class="ex"><b>Nung bata pa ako, takot ako sa dilim.</b><span>When I was still a child, I was afraid of the dark.</span></div>
<h3>Pagka- and pag-: right after, and upon</h3>
<p>These make the verb a noun (see <a href="#/lessons/nominalising">Making nouns</a>), so the doer takes the <b>ng</b> form: <i>pagkagising ko, pagdating niya</i>. <b>Pagka-</b> stresses that the first action was finished: <i>pagkakain</i> (right after eating), <i>pagkaligo</i>; <i>pagkatapos</i> itself is pagka- + tapos (see <a href="#/lessons/while-before-after">While, before, after, until</a>). <b>Pag-</b> marks the moment, and <i>pagdating</i> (upon arriving) is by far the most common. Both work for past and future; the main verb tells you which.</p>
<table><tr><th>Form</th><th>Grammar</th><th>Meaning</th></tr>
<tr><td>pagdating niya</td><td>pag- noun, doer niya, written as one word</td><td>upon his arrival, when he arrived or arrives</td></tr>
<tr><td>pag dumating siya</td><td>pag = kapag, a full clause, doer siya, two words</td><td>when or if he arrives</td></tr></table>
<div class="ex"><b>Pagkakain ko ng hipon, nangati ang buong katawan ko.</b><span>Right after I ate shrimp, my whole body itched.</span></div>
<div class="ex"><b>Pagdating ko sa bahay, wala nang tao.</b><span>When I got home, nobody was there anymore.</span></div>
<div class="ex"><b>Pagpasok niya sa kuwarto, bigla siyang sumigaw.</b><span>As he came into the room, he suddenly shouted.</span></div>
<div class="ex"><b>Pagdating po ng resulta, babalikan ko kayo.</b><span>When the result comes, I will come back to you.</span></div>
<div class="ex"><b>Kapag nahilo po kayo ulit, umupo muna kayo at tumawag ng nars.</b><span>If you feel dizzy again, sit down first and call a nurse.</span></div>
<h3>Every time, and since</h3>
<p><b>Sa tuwing</b> (or just <i>tuwing</i>) + a clause is "every time", usually with the ongoing form. <b>Mula nang</b> and <b>simula noong</b> mean "since"; the main clause often has <i>na</i> or <i>hindi na</i> (now, no longer) because something changed.</p>
<div class="ex"><b>Sa tuwing umuuwi siyang lasing, nag-aaway sila ng asawa niya.</b><span>Every time he comes home drunk, he and his wife fight.</span></div>
<div class="ex"><b>Simula noong naaksidente siya, ayaw na niyang sumakay ng motor.</b><span>Since his accident, he no longer wants to ride a motorcycle.</span></div>
<div class="ex"><b>Mula nang lumipat kami rito, mas maayos na ang tulog ko.</b><span>Since we moved here, my sleep has been better.</span></div>
<h3>Building a symptom timeline</h3>
<p>Each pattern gives you one kind of timeline question: the moment of onset (<i>nang</i>), what came right after an event (<i>pagka-</i>), how it repeats (<i>sa tuwing</i>) and what changed since (<i>mula nang</i>).</p>
<div class="ex"><b>Nasaan po kayo nang magsimula ang paninikip ng dibdib ninyo?</b><span>Where were you when the tightness in your chest started?</span></div>
<div class="ex"><b>Pagkagising ninyo kaninang umaga, ano po ang una ninyong naramdaman?</b><span>As soon as you woke up this morning, what did you feel first?</span></div>
<div class="ex"><b>Ano po ang ginagawa ninyo nang bigla kayong mahilo?</b><span>What were you doing when you suddenly felt dizzy?</span></div>
<div class="ex"><b>Sa tuwing naririnig ninyo ang boses, ano po ang ginagawa ninyo?</b><span>Every time you hear the voice, what do you do?</span></div>
<div class="ex"><b>Mula nang magsimula ang ubo ninyo, nilagnat po ba kayo?</b><span>Since your cough started, have you had a fever?</span></div>
<div class="note">Clinical tip: patients and relatives date things by events, not by the calendar: <i>mula nang mamatay si Nanay</i>, <i>pagkapanganak ko</i>, <i>noong nawalan siya ng trabaho</i>. Take the event as the anchor, then ask when it was (<i>Kailan po iyon?</i>) and what changed after it (<i>Mula noon, ano po ang nagbago?</i>).</div>
<div class="note">Common mistake: <i>pagdating siya</i>. A pag- or pagka- word is a noun, so the person takes the ng form: <i>pagdating niya</i>, <i>pagkagising ko</i>.</div>`,
  quiz: [
    ['"____ dumating kami, umiiyak na siya." (when, one time in the past)', ['Kapag', 'Nang', 'Sa tuwing'], 1, 'Nang (or noong) is when for one past event. Kapag is for future or repeated events; sa tuwing is every time.'],
    ['"Pagkagising ____, masakit na ang ulo ko."', ['ako', 'ko', 'sa akin'], 1, 'Pagkagising is a noun, so the person takes the ng form ko.'],
    ['"Sa tuwing naririnig ko ang boses, nagtatakip ako ng tainga." How often does this happen?', ['Only once, in the past', 'Never again', 'Each time the voice comes'], 2, 'Sa tuwing = every time.'],
    ['"Mula nang lumipat kami rito, mas maayos na ang tulog ko." Mula nang means', ['since', 'until', 'before'], 0, 'Mula nang and simula noong = since. Hanggang is until; bago is before.'],
    ['Which sentence is correct?', ['Pagdating niya, kumain kami.', 'Pagdating siya, kumain kami.', 'Pagdating sa kanya, kumain kami.'], 0, 'Pagdating is a noun, so the doer takes niya. With siya you need the clause form: pag dumating siya.'],
    ['A patient says her chest felt tight this morning. Which question pins down the moment it began?', ['Masakit po ba ang dibdib ninyo?', 'Nasaan po kayo nang magsimula ang paninikip?', 'Kapag masakit ang dibdib ninyo, umiinom po ba kayo ng tubig?'], 1, 'Nang + base form asks about the one past moment of onset. The others ask whether it hurts and about a repeated pattern.']
  ]
},
{
  id: 'while-before-after', level: 'B1', unit: 'Building sentences', title: 'While, before, after, until: habang, bago, pagkatapos, saka',
  summary: 'Words that put two actions in order, and the verb form each one takes. The rule that surprises learners: bago and pagkatapos take the base form, even for the past.',
  body: `
<p><a href="#/lessons/connectors">Connecting ideas</a> introduced <i>habang, bago, pagkatapos</i> and <i>hanggang</i>. This lesson shows what follows each word, adds <b>samantalang</b>, <b>hangga't</b> and <b>saka</b>, and fixes the verb form. The <b>base form</b> is the form without aspect, the one you find in the dictionary: <i>kumain, magpahinga, matulog, umalis</i>.</p>
<table><tr><th>Word</th><th>Meaning</th><th>What follows</th><th>Example</th></tr>
<tr><td><b>habang</b></td><td>while, as</td><td>ongoing form for an action in progress</td><td>habang kumakain kami</td></tr>
<tr><td><b>samantalang</b></td><td>while, whereas</td><td>any form; mostly a contrast</td><td>samantalang si Ben ang naghuhugas</td></tr>
<tr><td><b>bago</b></td><td>before</td><td>base form; the doer in the ang form</td><td>bago matulog, bago ka umalis</td></tr>
<tr><td><b>pagkatapos</b></td><td>after</td><td>ng + noun, or base form; the doer in the ng form</td><td>pagkatapos ng operasyon, pagkatapos kong maligo</td></tr>
<tr><td><b>pagkatapos</b>, tapos</td><td>afterwards, then</td><td>a full clause, often completed with na</td><td>pagkatapos ay umuwi na kami</td></tr>
<tr><td><b>hanggang</b> (sa)</td><td>until</td><td>a time or noun, or a base form</td><td>hanggang gabi, hanggang sa makatulog</td></tr>
<tr><td><b>hangga't</b></td><td>as long as; with hindi: until</td><td>a clause, often with pa</td><td>hangga't hindi pa siya dumarating</td></tr>
<tr><td><b>saka</b>, tsaka</td><td>and then; saka lang: only then</td><td>base form in instructions, completed in a story</td><td>saka ka uminom</td></tr></table>
<h3>While: habang and samantalang</h3>
<p><b>Habang</b> takes the ongoing form for something in progress. <i>Habang tumatagal</i> (as time goes on) with <i>lalo</i> gives "the longer ..., the more ...". <b>Samantalang</b> can also mean "while" in time, but in speech it mostly sets two people or facts side by side: "whereas".</p>
<div class="ex"><b>Habang kumakain kami, biglang nawalan ng kuryente.</b><span>While we were eating, the power suddenly went out.</span></div>
<div class="ex"><b>Habang naghihintay po kayo, puwede po kayong umupo sa tabi ng bintana.</b><span>While you wait, you can sit by the window.</span></div>
<div class="ex"><b>Habang tumatagal, lalo siyang nagiging tahimik.</b><span>The longer it goes on, the quieter he becomes.</span></div>
<div class="ex"><b>Ako ang nagluluto, samantalang si Ben ang naghuhugas ng pinggan.</b><span>I do the cooking, whereas Ben washes the dishes.</span></div>
<h3>Before and after: bago and pagkatapos</h3>
<p>Both take the base form, even for an event that is over: careful speakers say <i>bago siya umalis kahapon</i>, <i>pagkatapos kong maligo</i>. You will hear the completed form too (<i>pagkatapos kong naligo</i>), and the future after bago (<i>bago ka aalis</i>), but the base form is always correct. Note who takes which form: after <b>bago</b> the doer is <i>ka, siya, kayo</i>; after <b>pagkatapos</b> it is <i>kong, niyang, ninyong</i>, with the linker.</p>
<div class="ex"><b>Bago ka umalis, patayin mo ang ilaw.</b><span>Before you leave, switch off the light.</span></div>
<div class="ex"><b>Bago po kayo umuwi, dadaan muna sa inyo ang nars.</b><span>Before you go home, the nurse will stop by to see you.</span></div>
<div class="ex"><b>Ano po ang nangyari bago kayo dalhin dito?</b><span>What happened before you were brought here?</span></div>
<div class="ex"><b>Pagkatapos ng operasyon, bawal po munang magbuhat ng mabigat.</b><span>After the operation, no lifting of heavy things for now.</span></div>
<div class="ex"><b>Pagkatapos kong maligo, nagbihis ako at umalis.</b><span>After I bathed, I got dressed and left.</span></div>
<div class="ex"><b>Nagpahinga muna kami sandali, pagkatapos ay umuwi na kami.</b><span>We rested for a while, and afterwards we went home.</span></div>
<h3>Until and as long as: hanggang and hangga't</h3>
<p><b>Hanggang</b> takes a time or noun (<i>hanggang gabi</i>) or a base form, often with ma- or maka-. <b>Hangga't</b> means "as long as"; with <i>hindi</i> it means "until": <i>hangga't hindi pa</i> = as long as not yet.</p>
<div class="ex"><b>Hintayin mo ako rito hanggang makabalik ako.</b><span>Wait for me here until I get back.</span></div>
<div class="ex"><b>Nagkuwentuhan kami hanggang sa makatulog ang mga bata.</b><span>We chatted until the children fell asleep.</span></div>
<div class="ex"><b>Hangga't may lagnat ka, sa bahay ka muna.</b><span>As long as you have a fever, stay home for now.</span></div>
<div class="ex"><b>Dito lang po ako hangga't hindi pa kayo kumakalma.</b><span>I will stay right here until you calm down.</span></div>
<h3>And then: saka</h3>
<p><b>Saka</b> (also said and written <i>tsaka</i>) after <i>muna</i> gives an order of steps: first this, then that. <b>Saka lang</b> means "only then". Saka can also mean "and also, besides": <i>Pagod ako, saka gutom pa</i>.</p>
<div class="ex"><b>Kumain ka muna, saka ka uminom ng gamot.</b><span>Eat first, and then take your medicine.</span></div>
<div class="ex"><b>Saka lang siya nagpatingin nang hindi na niya matiis ang sakit.</b><span>Only when he could no longer bear the pain did he see a doctor.</span></div>
<div class="note">Clinical tip: medicine labels and instructions use exactly these words: <b>bago kumain</b>, <b>pagkatapos kumain</b>, <b>bago matulog</b>. Ask the patient to say back when they will take it. <b>Hangga't</b> is also a calm way to promise presence: <i>Dito lang po ako hangga't ...</i></div>
<div class="note">Common mistake: putting the doer in the wrong form. Say <i>bago siya umalis</i> but <i>pagkatapos niyang kumain</i>, not <i>bago niya umalis</i> or <i>pagkatapos siyang kumain</i>.</div>`,
  quiz: [
    ['"Inumin po ninyo ito ____ matulog." (before)', ['bago', 'habang', 'saka'], 0, 'Bago + base form = before. Habang is while; saka is and then.'],
    ['Which sentence is correct?', ['Bago niya umalis, nagpaalam siya.', 'Bago siyang umalis, nagpaalam siya.', 'Bago siya umalis, nagpaalam siya.'], 2, 'After bago the doer takes the ang form, with no linker: bago siya umalis.'],
    ['"Habang tumatagal, lalo siyang nagiging tahimik." means', ['The longer it goes on, the quieter he gets.', 'He was quiet for a long time once.', 'He will be quiet until later.'], 0, 'Habang tumatagal + lalo = the longer ..., the more ....'],
    ['"Dito lang po ako hangga\'t hindi pa kayo kumakalma." The nurse will stay', ['only for a minute', 'until the patient calms down', 'while the patient sleeps'], 1, 'Hangga\'t hindi pa = as long as not yet, so until.'],
    ['"Kumain ka muna, ____ ka uminom ng gamot." (and then)', ['habang', 'samantalang', 'saka'], 2, 'Muna ... saka = first ..., then ....'],
    ['A patient says "Saka lang po ako nagpatingin nang hindi ko na matiis." What does this tell you?', ['He came in as soon as it started.', 'He waited until the pain was unbearable before seeking care.', 'He comes for check-ups regularly.'], 1, 'Saka lang = only then. Ask how long he waited and what kept him from coming sooner.']
  ]
},
{
  id: 'kahit-kung', level: 'B1', unit: 'Building sentences', title: 'Kahit sino, kung saan: any-, even, and questions inside sentences',
  summary: 'Kahit with a question word means any or no matter; kung with a question word puts a question inside a sentence; and kung anu-ano means all sorts of.',
  body: `
<p>You have met <b>kahit</b> as "even though" in <a href="#/lessons/connectors">Connecting ideas</a> and as "even if" in <a href="#/lessons/conditionals">If, when, in case</a>. Put it before a question word and it means "any" or "no matter". Put <b>kung</b> before the same question word and you get a question inside a sentence: "I don't know where".</p>
<table><tr><th>Question word</th><th>kahit: any, no matter</th><th>kung: embedded question</th><th>kung + doubled: all sorts of</th></tr>
<tr><td>ano (what)</td><td>kahit ano: anything</td><td>kung ano: what</td><td>kung anu-ano: all sorts of things</td></tr>
<tr><td>sino (who)</td><td>kahit sino: anyone</td><td>kung sino: who</td><td>kung sinu-sino: all sorts of people</td></tr>
<tr><td>saan (where)</td><td>kahit saan: anywhere</td><td>kung saan: where</td><td>kung saan-saan: all over the place</td></tr>
<tr><td>kailan (when)</td><td>kahit kailan: any time; with a negative, never</td><td>kung kailan: when</td><td></td></tr>
<tr><td>paano (how)</td><td>kahit paano: somehow, at least</td><td>kung paano: how</td><td></td></tr></table>
<h3>Kahit + question word: any, no matter</h3>
<p>The question word keeps its other forms: <i>kahit kanino</i> (to anyone), and <i>sa kahit sino</i> or <i>ng kahit ano</i> where the verb needs a marker. With <i>hindi</i> or <i>ayaw</i> it means "not ... anyone, not ... anything". Before a noun or a clause add the linker: <i>kahit anong oras</i>, <i>kahit anong gawin ko</i> (no matter what I do).</p>
<div class="ex"><b>Kahit ano po, puwede ninyong sabihin sa akin.</b><span>You can tell me anything.</span></div>
<div class="ex"><b>Ayaw niyang kumain ng kahit ano mula kahapon.</b><span>He has not wanted to eat anything since yesterday.</span></div>
<div class="ex"><b>Puwede po kayong tumawag sa amin kahit kailan.</b><span>You can call us any time.</span></div>
<div class="ex"><b>Kahit anong gawin ko, hindi ako makatulog.</b><span>No matter what I do, I cannot sleep.</span></div>
<div class="ex"><b>Hindi siya nakikipag-usap sa kahit sino.</b><span>He does not talk to anyone.</span></div>
<div class="ex"><b>Kahit saan ako pumunta, parang may sumusunod sa akin.</b><span>Wherever I go, it feels like someone is following me.</span></div>
<div class="ex"><b>Puwedeng mangyari ito kahit kanino.</b><span>This can happen to anyone.</span></div>
<h3>Kahit + clause or noun: even, at least</h3>
<p>Before a clause, <b>kahit</b> and the slightly stronger <b>kahit na</b> mean "even though" or "even if". Before a noun, kahit means "even", and with a negative "not even": <i>kahit tubig</i>. <b>Kahit kaunti</b> is "even a little"; <b>kahit papaano</b> (or <i>kahit paano</i>) is "at least, somehow, to some degree".</p>
<div class="ex"><b>Kahit na mahirap, pinipilit niyang pumasok sa trabaho.</b><span>Even though it is hard, she makes herself go to work.</span></div>
<div class="ex"><b>Kahit umiinom na siya ng gamot, may naririnig pa rin siyang boses.</b><span>Even though he is taking his medicine now, he still hears a voice.</span></div>
<div class="ex"><b>Kahit tubig, ayaw niyang inumin.</b><span>He will not drink even water.</span></div>
<div class="ex"><b>Kumain po kayo kahit kaunti.</b><span>Please eat, even just a little.</span></div>
<div class="ex"><b>Kahit papaano, nakatulog po ako nang ilang oras kagabi.</b><span>At least I managed to sleep a few hours last night.</span></div>
<h3>Kung + question word: questions inside a sentence</h3>
<p>After verbs like <i>alam, maalala, tanungin, sabihin</i>, put <b>kung</b> + the question word. The short pronoun comes straight after the question word, as in a direct question: <i>kung saan siya pumunta</i>. <i>Ba</i> is normally left out. For a yes or no question, <b>kung</b> alone means "whether".</p>
<div class="ex"><b>Hindi ko alam kung saan siya pumunta.</b><span>I do not know where he went.</span></div>
<div class="ex"><b>Naaalala po ba ninyo kung ano ang nangyari kagabi?</b><span>Do you remember what happened last night?</span></div>
<div class="ex"><b>Tanungin mo si Ana kung kumain na siya.</b><span>Ask Ana whether she has eaten.</span></div>
<div class="ex"><b>Hindi pa namin alam kung kailan siya makakauwi.</b><span>We do not know yet when he can go home.</span></div>
<h3>Kung anu-ano, kung sinu-sino: all sorts of</h3>
<p>Doubling the question word after kung means "all sorts of", often with a note of disorder or disapproval. The current guide of the Komisyon sa Wikang Filipino spells the doubled forms <i>ano-ano, sino-sino</i>; <i>anu-ano, sinu-sino</i> is the older and still very common spelling. They sound the same.</p>
<div class="ex"><b>Kung anu-ano raw ang sinasabi niya kapag hindi siya nakakatulog.</b><span>They say he talks about all sorts of things when he cannot sleep.</span></div>
<div class="ex"><b>Kung saan-saan siya pumupunta tuwing gabi.</b><span>He goes all over the place every night.</span></div>
<div class="note">Clinical tip: <b>Kahit ano po, puwede ninyong sabihin</b> opens the door, and <b>Puwedeng mangyari ito kahit kanino</b> takes away some shame. When a relative says <i>kung anu-ano ang sinasabi niya</i>, that is a summary, not a description: ask for examples (<i>Ano po ang mga halimbawa ng sinasabi niya?</i>) and chart his actual words.</div>
<div class="note">Common mistake: using kahit for an English "where" or "what" inside a sentence. <i>Hindi ko alam kung saan</i>, not <i>kahit saan</i>. And keep the linker before a noun: <i>kahit anong oras</i>.</div>`,
  quiz: [
    ['"Ayaw niyang kumain ng ____." (anything)', ['kahit ano', 'kung ano', 'kung anu-ano'], 0, 'Kahit ano = anything. Kung ano starts an embedded question; kung anu-ano is all sorts of things.'],
    ['"Hindi ko alam ____ siya pumunta."', ['kahit saan', 'kung saan', 'saan ba'], 1, 'A question inside a sentence takes kung + the question word.'],
    ['"Kahit tubig, ayaw niyang inumin." means', ['He wants only water.', 'He refuses even water.', 'He drinks water anyway.'], 1, 'Kahit + noun with a negative = not even.'],
    ['"Kung anu-ano ang sinasabi niya." The relative means he says', ['exactly one thing again and again', 'whatever you ask him to say', 'all sorts of things that do not hang together'], 2, 'Kung + doubled question word = all sorts of, often with a note of disorder.'],
    ['"____ anong oras, puwede kayong tumawag."', ['Kahit', 'Kung', 'Dahil'], 0, 'Kahit anong oras = any time, at whatever hour.'],
    ['A patient hesitates to say what he hears. Which sentence invites him without pressure?', ['Kung anu-ano po ang sinasabi ninyo.', 'Sabihin na po ninyo kahit ayaw ninyo.', 'Kahit ano po, puwede ninyong sabihin sa akin.'], 2, 'It tells him anything is acceptable. The first dismisses his words; the second pushes against his wish.']
  ]
},
{
  id: 'nang-ng', level: 'B1', unit: 'Building sentences', title: 'Nang or ng? Telling them apart in writing',
  summary: 'Both are said "nang". Ng goes before a noun; nang has five other jobs: when, so that, how, repeated verbs, and na + -ng. A decision table for your own writing, and why you will see the two mixed.',
  body: `
<p><b>Ng</b> and <b>nang</b> sound the same: both are said "nang". In speech you never have to choose. The choice matters only in writing: notes, text messages, signs. <b>Ng</b> is a marker in front of a noun (see <a href="#/lessons/markers">Ang, ng, sa</a>). <b>Nang</b> does five main jobs, shown below.</p>
<h3>Ng: in front of a noun</h3>
<p>Ng marks the doer that is not the topic, the thing acted on, and the owner. It also appears in time phrases such as <i>alas tres ng hapon</i>.</p>
<div class="ex"><b>Bumili si Liza ng tinapay sa panaderya.</b><span>Liza bought bread at the bakery.</span></div>
<div class="ex"><b>Ito po ba ang kuwarto ng nanay ninyo?</b><span>Is this your mother's room?</span></div>
<div class="ex"><b>Ibinigay na ng doktor ang reseta kay Ben.</b><span>The doctor has already given Ben the prescription.</span></div>
<h3>Nang: the five accepted uses</h3>
<table><tr><th>Use</th><th>Meaning</th><th>Example</th></tr>
<tr><td>1. when</td><td>one time in the past, like noong</td><td>nang dumating ako</td></tr>
<tr><td>2. so that</td><td>in order to, like para or upang</td><td>magpahinga ka nang gumaling ka</td></tr>
<tr><td>3. how</td><td>after a verb, before a word that says how, how much or when</td><td>tumakbo nang mabilis</td></tr>
<tr><td>4. repeated verb</td><td>keeps on doing it</td><td>iyak nang iyak</td></tr>
<tr><td>5. na + -ng</td><td>already, anymore, joined to a verb</td><td>ayaw nang kumain = ayaw na + -ng</td></tr></table>
<div class="ex"><b>Tulog na ang mga bata nang umuwi ako.</b><span>The children were already asleep when I came home.</span></div>
<div class="ex"><b>Nang tanungin namin siya, wala raw siyang maalala.</b><span>When we asked him, he said he could not remember anything.</span></div>
<div class="ex"><b>Magpahinga ka nang gumaling ka agad.</b><span>Rest so that you get better soon.</span></div>
<div class="ex"><b>Dahan-dahan po tayong tatayo nang hindi kayo mahilo.</b><span>We will stand up slowly so that you do not get dizzy.</span></div>
<div class="ex"><b>Tumakbo siya nang mabilis papunta sa sakayan.</b><span>He ran quickly to the jeepney stop.</span></div>
<div class="ex"><b>Isulat po ninyo nang malinaw ang pangalan ninyo.</b><span>Please write your name clearly.</span></div>
<div class="ex"><b>Natulog siya nang maaga kagabi.</b><span>He went to bed early last night.</span></div>
<div class="ex"><b>Iyak nang iyak ang bata kagabi.</b><span>The child kept crying last night.</span></div>
<div class="ex"><b>Lakad po siya nang lakad sa pasilyo buong gabi.</b><span>He kept walking up and down the corridor all night.</span></div>
<div class="ex"><b>Ayaw nang kumain ni Lolo mula kahapon.</b><span>Grandpa has not wanted to eat anymore since yesterday.</span></div>
<div class="ex"><b>Huwag ka nang umiyak, nandito na ako.</b><span>Do not cry anymore, I am here now.</span></div>
<h3>Deciding in your own writing</h3>
<table><tr><th>Ask</th><th>If yes, write</th><th>Example</th></tr>
<tr><td>Is the next word a noun: a thing, a doer, an owner?</td><td>ng</td><td>kumain ng saging, bahay ng lola</td></tr>
<tr><td>Could you put noong in its place?</td><td>nang</td><td>nang dumating siya</td></tr>
<tr><td>Could you put para or upang in its place?</td><td>nang</td><td>nang hindi ka mahilo</td></tr>
<tr><td>Does it link a verb to a word that says how, how much or when?</td><td>nang</td><td>magsalita nang malakas</td></tr>
<tr><td>Is the same verb on both sides?</td><td>nang</td><td>tawa nang tawa</td></tr>
<tr><td>Is it na (already, anymore) joined to the next word?</td><td>nang</td><td>huwag ka nang umalis</td></tr></table>
<p>One sentence can need both:</p>
<div class="ex"><b>Uminom siya ng tubig nang mabilis.</b><span>He drank the water quickly.</span></div>
<div class="ex"><b>Kumain ka ng gulay nang lumakas ka.</b><span>Eat vegetables so that you get stronger.</span></div>
<div class="note">Be honest with yourself about what you will read: many native writers mix the two, above all ng for manner (<i>mag-ingat ng mabuti</i>), in texts, on signs and even in print. Reading both is normal, and the rest of the sentence tells you the meaning. In your own writing, follow the table, and do not trust extra rules you may find online.</div>
<div class="note">Clinical tip: nang + a repeated verb is how relatives describe behaviour: <i>lakad nang lakad, salita nang salita, iyak nang iyak</i>. It tells you something is going on and on, not how long. Follow up with <i>Gaano po katagal?</i> and <i>Ilang araw na po?</i></div>`,
  quiz: [
    ['"Bumili ako ____ gamot sa botika."', ['nang', 'ng', 'na'], 1, 'Gamot is a noun, the thing bought, so the marker is ng.'],
    ['"Magsalita po kayo ____ malakas."', ['ng', 'sa', 'nang'], 2, 'Malakas says how you speak, so the linker is nang.'],
    ['"Iyak nang iyak ang bata." means', ['The child kept on crying.', 'The child cried once.', 'The child will cry.'], 0, 'Verb + nang + the same verb = keeps on doing it.'],
    ['"Ayaw nang kumain ni Lolo." Here nang is', ['the marker of an object', 'na (anymore) joined to the linker -ng', 'the word for "so that"'], 1, 'Ayaw na + -ng + kumain is written ayaw nang kumain.'],
    ['Which sentence is spelled correctly?', ['Magpahinga ka nang gumaling ka.', 'Magpahinga ka ng gumaling ka.', 'Magpahinga ka sa gumaling ka.'], 0, 'Here nang means so that; you could say para instead.'],
    ['A wife says "Lakad po siya nang lakad sa bahay buong gabi." What should you ask next?', ['Ano po ang binili niya?', 'Ilang gabi na po siyang ganyan?', 'Saan po siya nag-aaral?'], 1, 'The repeated verb tells you it goes on and on; you still need to know for how long.']
  ]
},
{
  id: 'reason-result', level: 'B1', unit: 'Building sentences', title: 'Because and so: dahil, kasi, sapagkat, kaya, tuloy',
  summary: 'The words for causes and results, from everyday kasi and tuloy to the formal sapagkat and sanhi ng you will read on forms and in the news.',
  body: `
<p><a href="#/lessons/connectors">Connecting ideas</a> gave you <i>kasi, dahil</i> and <i>kaya</i> for simple causes and results. This lesson adds what follows <b>dahil</b>, the two places <b>kasi</b> can sit, the formal words you will read in letters, reports and the news, and the little word <b>tuloy</b> that marks an unwanted result.</p>
<table><tr><th>Word</th><th>Introduces</th><th>Register</th></tr>
<tr><td><b>dahil</b> + clause; <b>dahil sa</b> + noun or pronoun; <b>dahil kay</b> + name</td><td>the cause</td><td>everyday and formal</td></tr>
<tr><td><b>kasi</b></td><td>the cause; "you see"</td><td>everyday</td></tr>
<tr><td><b>sapagkat</b>, pagkat</td><td>the cause</td><td>formal, written</td></tr>
<tr><td><b>palibhasa</b></td><td>the cause, from a trait or situation everyone knows</td><td>everyday, often critical</td></tr>
<tr><td><b>dulot ng</b>, <b>sanhi ng</b>, <b>bunga ng</b></td><td>the cause, as a noun phrase</td><td>formal, medical, news</td></tr>
<tr><td><b>kaya</b>, <b>kaya naman</b>, <b>kaya nga</b>, kaya pala</td><td>the result</td><td>everyday</td></tr>
<tr><td><b>tuloy</b></td><td>an unwanted result</td><td>everyday</td></tr>
<tr><td><b>kung kaya</b>, kung kaya't</td><td>the result: therefore</td><td>formal</td></tr></table>
<h3>Dahil, dahil sa, dahil kay</h3>
<p><b>Dahil</b> alone takes a whole clause. Before a noun it needs <b>sa</b>, and before a person's name <b>kay</b> (<i>kina</i> for several names). Pronouns take their sa form: <i>dahil sa akin, dahil sa kanya, dahil sa iyo</i>.</p>
<div class="ex"><b>Dahil wala siyang pamasahe, hindi siya nakabalik sa klinika.</b><span>Because he had no fare, he could not come back to the clinic.</span></div>
<div class="ex"><b>Sarado ang palengke dahil sa bagyo.</b><span>The market is closed because of the typhoon.</span></div>
<div class="ex"><b>Dahil kay Ana, natuto akong magluto.</b><span>Thanks to Ana, I learned to cook.</span></div>
<h3>Kasi, sapagkat and palibhasa</h3>
<p><b>Kasi</b> can open the clause (<i>Kasi po, ...</i>), often to start an answer to <i>Bakit?</i>. It can also sit after the first word like the short words in <a href="#/lessons/enclitics">Where the short words go</a>: after <i>ko, ka, mo</i> and <i>po</i>, before <i>siya, ako, kayo</i>: <i>Hindi ko kasi alam</i>, <i>Wala po kasi akong kasama</i>. Said alone after a name or pronoun it blames: <i>Ikaw kasi!</i> (It is your fault!). <b>Sapagkat</b> means the same but belongs to writing, speeches and prayers. <b>Palibhasa</b> explains by something everyone already knows about the person, often with a hint of criticism.</p>
<div class="ex"><b>Wala po kasi akong kasama sa bahay.</b><span>You see, I have no one with me at home.</span></div>
<div class="ex"><b>Kasi po, natatakot akong lumabas nang mag-isa.</b><span>It is because I am afraid to go out alone.</span></div>
<div class="ex"><b>Hindi siya nakapasok sapagkat masama ang pakiramdam niya.</b><span>She could not come in because she was feeling unwell.</span></div>
<div class="ex"><b>Palibhasa bunso siya, sanay siyang inaasikaso ng lahat.</b><span>Being the youngest, he is used to everyone looking after him.</span></div>
<h3>Dulot, sanhi, bunga: the cause as a noun</h3>
<p>These name the cause in a noun phrase, the way reports, forms and the news do: <i>sanhi ng pagkamatay</i> is "cause of death". <b>Dulot ng</b> is "brought about by", <b>sanhi ng</b> "the cause of", <b>bunga ng</b> "the result of" (bunga is also fruit).</p>
<div class="ex"><b>Ayon sa doktor, dulot ng gamot ang pagkahilo niya.</b><span>According to the doctor, his dizziness is caused by the medicine.</span></div>
<div class="ex"><b>Ang naiwang kandila ang sanhi ng sunog.</b><span>The candle that was left burning was the cause of the fire.</span></div>
<div class="ex"><b>Bunga ng puyat at pagod ang pananakit ng ulo niya.</b><span>Her headache is the result of lack of sleep and exhaustion.</span></div>
<h3>Kaya, tuloy and kung kaya: the result</h3>
<p><b>Kaya naman</b> is "and so, naturally": the result was to be expected. <b>Kaya nga</b> is "that is exactly why", agreeing or insisting. <b>Kaya pala</b> is "so that is why", a sudden realization. <b>Tuloy</b> sits after the first word (and after <i>ko, ka, mo</i>) and marks a result nobody wanted, often with blame. <b>Kung kaya</b> is the formal "therefore". Do not confuse these with <i>kaya</i> meaning "can" (see <a href="#/lessons/modals">Gusto, ayaw, kailangan</a>) or <i>Tuloy po kayo</i> (Please come in).</p>
<div class="ex"><b>Tatlong gabi na siyang hindi natutulog, kaya naman mainit ang ulo niya.</b><span>He has not slept for three nights, so naturally he is irritable.</span></div>
<div class="ex"><b>Kaya nga po namin siya dinala rito.</b><span>That is exactly why we brought him here.</span></div>
<div class="ex"><b>Kaya pala hindi ka makatulog, nagkape ka pala kagabi.</b><span>So that is why you could not sleep: you had coffee last night.</span></div>
<div class="ex"><b>Nagpuyat ka kagabi, inaantok ka tuloy ngayon.</b><span>You stayed up late last night, and now you are sleepy.</span></div>
<div class="ex"><b>Ang tagal ng dyip, nahuli tuloy ako sa trabaho.</b><span>The jeepney took so long that I ended up late for work.</span></div>
<div class="ex"><b>Malakas ang ulan, kung kaya sinuspinde ang klase sa buong lalawigan.</b><span>The rain was heavy, therefore classes were suspended across the province.</span></div>
<div class="note">Clinical tip: <i>Bakit po?</i> can sound like a demand for a justification, for example about missed doses or visits. <b>Ano po kaya ang naging dahilan?</b> is softer; then wait for the <i>kasi</i>. From relatives, <b>palibhasa</b> and <b>tuloy</b> often carry a verdict (<i>Hindi kasi uminom ng gamot, nabinat tuloy</i>): take the facts, and do not join the blame.</div>
<div class="note">Common mistake: <i>dahil ang ulan</i> or <i>dahil kay siya</i>. Say <i>dahil sa ulan</i>, <i>dahil sa kanya</i>, and keep kay for names: <i>dahil kay Ben</i>.</div>`,
  quiz: [
    ['"Sarado ang paaralan dahil ____ baha."', ['sa', 'kay', 'ang'], 0, 'Before a common noun, dahil takes sa. Kay is for names.'],
    ['"Nagpuyat ka kagabi, inaantok ka ____ ngayon." (unwanted result)', ['kasi', 'sapagkat', 'tuloy'], 2, 'Tuloy marks an unwanted result. Kasi and sapagkat give a cause.'],
    ['Which sentence puts kasi in a natural place?', ['Wala akong kasama sa kasi bahay.', 'Wala kasi akong kasama sa bahay.', 'Wala akong kasi kasama sa bahay.'], 1, 'Kasi sits after the first word, before ako.'],
    ['"Palibhasa bunso siya, sanay siyang inaasikaso." Palibhasa gives', ['a reason based on a known trait', 'a wish', 'a result'], 0, 'Palibhasa = being (the youngest), since after all: a reason everyone knows, often a little critical.'],
    ['"Kaya pala ..." expresses', ['a formal conclusion', 'a sudden realization: so that is why', 'a request'], 1, 'Kaya pala = so that is why. The formal therefore is kung kaya.'],
    ['A man missed his clinic visit. Which question asks the reason without sounding like a demand?', ['Bakit hindi kayo bumalik?', 'Dahil sa inyo kaya lumala ito.', 'Ano po kaya ang naging dahilan at hindi kayo nakabalik?'], 2, 'Po, kaya and the neutral word dahilan soften the question. The first sounds like a reprimand; the second blames him.']
  ]
},
{
  id: 'formal-filipino', level: 'B2', unit: 'Register and style', title: 'Mangyaring, alinsunod sa, subalit: reading formal Filipino and saying it plainly',
  summary: 'Consent forms, memos, hospital notices and the news use a formal written Filipino. Learn to read its key words and turn them into plain speech for a patient.',
  body: `
<p><a href="#/lessons/ay-inversion">Ay-inversion</a> showed the topic-first order of formal sentences, and <a href="#/lessons/register">Formal Filipino vs everyday Taglish</a> showed how far speech drifts from the textbook. Written notices, memos, consent forms and news use a set of formal words that patients read but rarely say. You need to read them, and you need to say the same thing aloud in plain Tagalog.</p>
<table><tr><th>Formal, written</th><th>Plain, spoken</th><th>Meaning</th></tr>
<tr><td><b>Ang pasyente ay ...</b></td><td><b>... ang pasyente</b></td><td>topic first, joined by ay</td></tr>
<tr><td><b>ang mga sumusunod</b></td><td>ito po ang mga</td><td>the following</td></tr>
<tr><td><b>kaugnay ng</b>, <b>hinggil sa</b></td><td>tungkol sa</td><td>in connection with; regarding</td></tr>
<tr><td><b>alinsunod sa</b></td><td>ayon sa, sabi ng</td><td>in accordance with</td></tr>
<tr><td><b>upang</b></td><td>para</td><td>in order to</td></tr>
<tr><td><b>subalit</b>, <b>ngunit</b>, <b>datapwat</b></td><td>pero</td><td>but, however</td></tr>
<tr><td><b>sapagkat</b></td><td>kasi, dahil</td><td>because</td></tr>
<tr><td><b>nararapat</b></td><td>dapat, kailangan</td><td>should, ought to</td></tr>
<tr><td><b>mangyaring</b></td><td>paki-, puwede po bang</td><td>please (in notices)</td></tr>
<tr><td><b>ipinababatid</b></td><td>gusto po naming sabihin</td><td>be it known, we inform you</td></tr>
<tr><td><b>maaari</b>, <b>lamang</b></td><td>puwede, lang</td><td>may, can; only</td></tr></table>
<h3>Notices and memos</h3>
<p>A notice speaks to everyone, so it has no <i>po</i> and often no "you". <b>Mangyaring</b> plus the base form of the verb is the written "please". <b>Ipinababatid</b> (it is made known) opens an announcement, and <b>ang mga sumusunod</b> introduces a list. Memos like the past form <b>nasabing</b> (the said, the above).</p>
<div class="ex"><b>Ipinababatid sa lahat na sarado ang klinika sa darating na Lunes.</b><span>All are hereby informed that the clinic is closed this coming Monday.</span></div>
<div class="ex"><b>Mangyaring maghintay sa labas habang isinasagawa ang pagsusuri.</b><span>Please wait outside while the examination is in progress.</span></div>
<div class="ex"><b>Ang mga sumusunod ay kailangang dalhin sa araw ng konsulta.</b><span>The following must be brought on the day of the consultation.</span></div>
<div class="ex"><b>Alinsunod sa patakaran ng ospital, dalawang bisita lamang ang pinapayagan sa bawat pasyente.</b><span>In accordance with hospital policy, only two visitors are allowed per patient.</span></div>
<div class="ex"><b>Kaugnay ng nasabing insidente, isang pagpupulong ang gaganapin bukas.</b><span>In connection with the said incident, a meeting will be held tomorrow.</span></div>
<div class="ex"><b>Upang maiwasan ang impeksiyon, mangyaring maghugas ng kamay bago pumasok sa silid.</b><span>To prevent infection, please wash your hands before entering the room.</span></div>
<div class="ex"><b>Ayon sa ulat, ang bagyo ay inaasahang tatama sa lalawigan bukas ng hapon.</b><span>According to the report, the storm is expected to hit the province tomorrow afternoon.</span></div>
<h3>Consent forms and letters</h3>
<p>Forms state rights, duties and reasons. Watch for <b>nararapat</b> (a duty), <b>sapagkat</b> (the reason) and <b>subalit</b> or <b>ngunit</b> (a condition or limit). <b>Ngunit</b> is the usual written "but" in news and letters, <b>subalit</b> sounds a little more formal, and <b>datapwat</b> is old-fashioned, found mostly in older texts and some legal writing.</p>
<div class="ex"><b>Ang pasyente ay may karapatang tumanggi sa anumang paggamot.</b><span>The patient has the right to refuse any treatment.</span></div>
<div class="ex"><b>Nararapat na ipaalam sa doktor ang anumang alerhiya sa gamot.</b><span>Any drug allergy should be reported to the doctor.</span></div>
<div class="ex"><b>Hinggil sa inyong kahilingan, maaaring kunin ang inyong rekord sa Biyernes.</b><span>Regarding your request, your records may be collected on Friday.</span></div>
<div class="ex"><b>Maaari nang umuwi ang pasyente, subalit kailangan niyang bumalik makalipas ang isang linggo.</b><span>The patient may go home, but must return after one week.</span></div>
<div class="ex"><b>Hindi natuloy ang operasyon sapagkat mataas pa ang lagnat ng pasyente.</b><span>The operation did not go ahead because the patient still had a high fever.</span></div>
<h3>Saying it aloud</h3>
<p>Do not read a form aloud word for word. Put the verb first again, swap each formal word for its everyday partner, speak to the person with <b>po</b> and <b>kayo</b>, and keep one idea per sentence.</p>
<div class="ex"><b>Puwede po ninyong tanggihan ang kahit anong gamutan kung ayaw ninyo.</b><span>You can refuse any treatment if you do not want it.</span></div>
<div class="ex"><b>Sabihin po ninyo sa amin kung may alerhiya kayo sa gamot.</b><span>Please tell us if you are allergic to any medicine.</span></div>
<div class="ex"><b>Maghugas po muna kayo ng kamay bago pumasok, para hindi kumalat ang mikrobyo.</b><span>Please wash your hands before going in, so germs do not spread.</span></div>
<div class="ex"><b>Puwede na po siyang umuwi, pero kailangan niyang bumalik pagkalipas ng isang linggo.</b><span>He can go home now, but he needs to come back after a week.</span></div>
<div class="note">Clinical tip: many patients, especially older ones, will sign a form they did not understand rather than admit it, out of hiya. Explain each part in plain spoken Tagalog, then ask them to tell it back in their own words before they sign. A patient who answers in formal Filipino may prefer it; follow their lead.</div>
<div class="note">Common mistake: using written words in conversation. <i>Mangyaring umupo</i> said to a patient sounds like a sign on the wall. Say <i>Maupo po kayo</i>.</div>`,
  quiz: [
    ['"Mangyaring maghintay sa labas." In speech you would say', ['Maghintay po muna kayo sa labas.', 'Naghintay sila sa labas.', 'Mangyayari sa labas.'], 0, 'Mangyaring is the written please; in speech, use the verb with po and kayo.'],
    ['"Upang" in everyday speech is', ['pero', 'para', 'kasi'], 1, 'Upang = para, in order to.'],
    ['"Ang mga sumusunod ay kailangang dalhin." What comes next on the notice?', ['a signature', 'a question', 'a list'], 2, 'Ang mga sumusunod = the following.'],
    ['"Sapagkat" means', ['because', 'however', 'regarding'], 0, 'Sapagkat = kasi, dahil.'],
    ['Which sentence is formal written Filipino?', ['Pero kailangan niyang bumalik.', 'Subalit kailangan niyang bumalik.', 'Tapos babalik siya.'], 1, 'Subalit is the formal but.'],
    ['An elderly patient is handed a consent form. Best approach?', ['Read it aloud word for word, quickly', 'Hand it over and wait for the signature', 'Explain it in plain spoken Tagalog with po, then ask her to tell it back'], 2, 'Plain speech and teach-back show whether consent is informed.']
  ]
},
{
  id: 'instructions', level: 'B1', unit: 'Register and style', title: 'Una, tapos, bago, hanggang: giving instructions step by step',
  summary: 'How to give clear, polite instructions in order, say what not to do, and check that the patient really understood.',
  body: `
<p>This lesson puts together the commands and <b>huwag</b> from <a href="#/lessons/requests">Asking and telling</a>, the time words from <a href="#/lessons/connectors">Connecting ideas</a> and the focus forms from <a href="#/lessons/focus">Verb focus</a>, to give instructions a patient can follow at home.</p>
<h3>Putting steps in order</h3>
<table><tr><th>Word</th><th>Meaning</th><th>Note</th></tr>
<tr><td><b>una</b>, <b>unang-una</b></td><td>first, first of all</td><td>then <i>pangalawa</i>, second</td></tr>
<tr><td><b>pagkatapos</b></td><td>after that</td><td><i>pagkatapos kumain</i> = after eating</td></tr>
<tr><td><b>tapos</b></td><td>then</td><td>the everyday form of <i>pagkatapos</i></td></tr>
<tr><td><b>saka</b></td><td>and then, only then</td><td>pulls the short pronoun forward: <i>saka ka</i></td></tr>
<tr><td><b>bago</b></td><td>before</td><td><i>bago kumain</i>, <i>bago kayo matulog</i></td></tr>
<tr><td><b>habang</b></td><td>while</td><td>takes the ongoing form</td></tr>
<tr><td><b>hanggang</b></td><td>until</td><td>often <i>hanggang sa</i> before a noun</td></tr>
<tr><td><b>kapag tapos na</b></td><td>once it is done</td><td><i>kapag tapos na po kayo</i></td></tr></table>
<h3>Which command form?</h3>
<p>Actor-focus verbs (<b>-um-</b>, <b>mag-</b>) take <b>ka</b> or <b>kayo</b>. Object-focus verbs (<b>-in</b>, <b>i-</b>, <b>-an</b>) take <b>mo</b> or <b>ninyo</b>, and the thing acted on takes <b>ang</b>. <b>Po</b> comes before <i>kayo</i> and <i>ninyo</i>. <b>Paki-</b> is the polite request, and the pronoun can be left out.</p>
<table><tr><th>Form</th><th>Pronoun</th><th>Example</th></tr>
<tr><td>-um-, mag-</td><td>ka, kayo</td><td>Umupo po kayo. Maghugas po kayo.</td></tr>
<tr><td>-in</td><td>mo, ninyo</td><td>Inumin po ninyo ang gamot.</td></tr>
<tr><td>i-</td><td>mo, ninyo</td><td>Itapon po ninyo ang gasa.</td></tr>
<tr><td>-an</td><td>mo, ninyo</td><td>Linisan po ninyo ang sugat.</td></tr>
<tr><td>paki-</td><td>(ninyo)</td><td>Pakitapon po ang gasa.</td></tr></table>
<div class="ex"><b>Una, maghugas po kayo ng kamay gamit ang sabon at tubig.</b><span>First, wash your hands with soap and water.</span></div>
<div class="ex"><b>Pagkatapos, tanggalin po ninyo nang dahan-dahan ang lumang gasa.</b><span>After that, slowly remove the old gauze.</span></div>
<div class="ex"><b>Habang nililinis ninyo ang sugat, tingnan po ninyo kung may nana.</b><span>While you are cleaning the wound, check whether there is pus.</span></div>
<div class="ex"><b>Tapos, takpan po ninyo ng bagong gasa ang sugat.</b><span>Then cover the wound with new gauze.</span></div>
<div class="ex"><b>Kapag tapos na po kayo, itapon ninyo ang lumang gasa sa basurahan.</b><span>Once you are done, throw the old gauze in the bin.</span></div>
<div class="ex"><b>Inumin po ninyo ang gamot ayon sa nakasulat sa reseta.</b><span>Take the medicine as written on the prescription.</span></div>
<div class="ex"><b>Bago po kayo umalis ng bahay, tingnan ninyo kung dala ninyo ang gamot.</b><span>Before you leave the house, check that you have your medicine with you.</span></div>
<div class="ex"><b>Pag-uwi po ninyo, ituloy ninyo ang gamot hanggang sa susunod ninyong check-up.</b><span>When you get home, keep taking the medicine until your next check-up.</span></div>
<div class="ex"><b>Una, hugasan mo ang bigas, tapos lagyan mo ng tubig.</b><span>First wash the rice, then add water.</span></div>
<div class="ex"><b>Magsabon ka muna, saka ka magbanlaw.</b><span>Soap yourself first, then rinse.</span></div>
<div class="ex"><b>Haluin mo ang sabaw hanggang kumulo.</b><span>Stir the soup until it boils.</span></div>
<h3>What not to do: huwag</h3>
<p><b>Huwag</b> takes the pronoun with a linker, then the verb: <i>huwag po ninyong</i>, <i>huwag kang</i>. The base form is the neutral choice. The future form after <i>huwag</i> (<i>huwag ninyong kakamutin</i>) is also very common and sounds like a firmer warning. Pair each "don't" with a "do".</p>
<div class="ex"><b>Huwag po ninyong basain ang gasa.</b><span>Do not get the gauze wet.</span></div>
<div class="ex"><b>Huwag po ninyong kakamutin ang sugat.</b><span>Do not scratch the wound.</span></div>
<div class="ex"><b>Huwag po ninyong itigil ang gamot nang hindi muna nagtatanong sa doktor.</b><span>Do not stop the medicine without asking the doctor first.</span></div>
<h3>Checking understanding: teach-back</h3>
<p><i>Naiintindihan po ba ninyo?</i> almost always gets <i>opo</i>, out of politeness or hiya. Ask the person to say the steps back instead, and frame it as checking your own explanation.</p>
<div class="ex"><b>Pakiulit nga po kung paano ninyo iinumin ang gamot.</b><span>Please tell me again how you will take the medicine.</span></div>
<div class="ex"><b>Para lang po masiguro ko, paano ninyo lilinisan ang sugat pag-uwi ninyo?</b><span>Just so I am sure, how will you clean the wound when you get home?</span></div>
<div class="note">Clinical tip: give one step per sentence, start each with <b>una</b>, <b>tapos</b> or <b>pagkatapos</b>, and pause. Say what to do before what not to do. End with teach-back, and blame yourself if a step comes back wrong: <i>Baka po hindi ko naipaliwanag nang mabuti.</i> For doses and times, point to the prescription or the label instead of giving them from memory.</div>
<div class="note">Common mistake: using <b>ka</b> or <b>kayo</b> with an <b>-in</b>, <b>i-</b> or <b>-an</b> verb. It is <i>Inumin mo</i> and <i>Linisan po ninyo</i>, never <i>Inumin ka</i>.</div>`,
  quiz: [
    ['"____ po ninyo ang sugat." (clean it)', ['Linisan', 'Maglinis', 'Nilinis'], 0, 'Linisan is the object-focus command that goes with ninyo; nilinis is completed.'],
    ['"Magsabon ka muna, saka ka magbanlaw." What comes second?', ['soaping', 'rinsing', 'both at once'], 1, 'Saka = and then, only then.'],
    ['Which negative instruction is correct?', ['Huwag po kayong basain ang gasa.', 'Hindi po ninyo basain ang gasa.', 'Huwag po ninyong basain ang gasa.'], 2, 'Basain is an -in verb, so ninyo, with huwag and the linker -ng.'],
    ['"Haluin mo ang sabaw hanggang kumulo." means stir', ['until it boils', 'before it boils', 'while it cools'], 0, 'Hanggang = until.'],
    ['"Inumin ____ ang gamot."', ['po kayo', 'po ninyo', 'ka po'], 1, 'Inumin is object focus, so ninyo, with po before it.'],
    ['You have explained the wound care. What best checks understanding?', ['Naiintindihan po ba ninyo?', 'Madali lang po iyan.', 'Para lang po masiguro ko, paano ninyo lilinisan ang sugat pag-uwi ninyo?'], 2, 'Teach-back shows what was understood; a yes or no question invites opo.']
  ]
},
{
  id: 'ordinals', level: 'A2', unit: 'Everyday life', title: 'Una, pangalawa, tig-isa: order, shares and how many times',
  summary: 'First, second and third in the queue; one each and two at a time; twice a day and half a tablet. The number words for schedules and lines.',
  body: `
<p><a href="#/lessons/numbers">Numbers, time, and money</a> gave the counting words. Tagalog builds the other number words from them with a few prefixes and with doubling.</p>
<h3>First, second, third</h3>
<p>"First" is <b>una</b> (you will also meet <i>pang-una</i> in set phrases such as <i>pangunang lunas</i>, first aid). From two up there are two sets: <b>ika-</b> (more formal, the one in writing) and <b>pang-</b> (very common in speech). Both are correct. Two and three drop their first syllable: <i>ikalawa, pangalawa</i>, <i>ikatlo, pangatlo</i>. <i>Pang-</i> changes its last sound to fit the next letter: <i>panlima</i>, <i>pampito</i>. Before a noun add the linker: <i>unang araw</i>, <i>ikalawang palapag</i>, <i>pang-apat na anak</i>. To ask a place in order, say <b>pang-ilan</b> or <b>ikailan</b>.</p>
<table><tr><th>Counting</th><th>ika-</th><th>pang-</th><th>English</th></tr>
<tr><td>isa</td><td>una</td><td>una</td><td>first</td></tr>
<tr><td>dalawa</td><td>ikalawa</td><td>pangalawa</td><td>second</td></tr>
<tr><td>tatlo</td><td>ikatlo</td><td>pangatlo</td><td>third</td></tr>
<tr><td>apat</td><td>ikaapat</td><td>pang-apat</td><td>fourth</td></tr>
<tr><td>lima</td><td>ikalima</td><td>panlima</td><td>fifth</td></tr>
<tr><td>anim</td><td>ikaanim</td><td>pang-anim</td><td>sixth</td></tr>
<tr><td>pito</td><td>ikapito</td><td>pampito</td><td>seventh</td></tr>
<tr><td>sampu</td><td>ikasampu</td><td>pansampu</td><td>tenth</td></tr></table>
<div class="ex"><b>Pang-ilan po ako sa pila?</b><span>What number am I in the queue?</span></div>
<div class="ex"><b>Pang-apat pa po kayo, maupo muna po kayo.</b><span>You are fourth, please have a seat for now.</span></div>
<div class="ex"><b>Unang araw pa lang niya rito sa ward.</b><span>It is only her first day here on the ward.</span></div>
<div class="ex"><b>Nasa ikalawang palapag po ang botika.</b><span>The pharmacy is on the second floor.</span></div>
<div class="ex"><b>Pangalawang anak ko po siya.</b><span>She is my second child.</span></div>
<h3>Each, and at a time: tig- and doubling</h3>
<p><b>Tig-</b> plus a number means "so many each": <i>tig-isa, tigdalawa, tigtatlo, tig-apat</i>. Some speakers double the first syllable of the number, <i>tig-iisa, tigdadalawa</i>, with the same meaning. In the market tig- goes on Spanish number words too: <i>tigbebente</i> (twenty pesos each). Doubling the number gives "so many at a time": <b>isa-isa</b> (one by one), <b>dala-dalawa</b> (two at a time), <b>tatlo-tatlo</b>.</p>
<div class="ex"><b>Tig-isa kayo ng saging.</b><span>You each get one banana.</span></div>
<div class="ex"><b>Tigdalawang pandesal ang ibinigay sa mga bata.</b><span>The children were given two rolls each.</span></div>
<div class="ex"><b>Tigbebente po ang mangga.</b><span>The mangoes are twenty pesos each.</span></div>
<div class="ex"><b>Isa-isa lang po ang puwedeng pumasok.</b><span>Only one person may go in at a time.</span></div>
<div class="ex"><b>Dala-dalawa po ang pasok ng mga bisita.</b><span>Visitors go in two at a time.</span></div>
<h3>How many times, and parts of a whole</h3>
<p>In everyday speech "times" is <b>beses</b>: <i>isang beses</i> (once, also <i>minsan</i>), <i>dalawang beses</i>, <i>tatlong beses sa isang araw</i>. The native forms with <b>maka-</b>, <i>makalawa</i> (twice) and <i>makatlo</i> (three times), sound formal and appear in writing. Careful: <b>sa makalawa</b> means "the day after tomorrow", and <i>kamakalawa</i> means "the day before yesterday". For parts, <b>kalahati</b> (half) is everyday; <b>sangkapat</b> (a quarter) and <b>sangkatlo</b> (a third) are more bookish, and people often say <i>one-fourth</i> in English.</p>
<div class="ex"><b>Tatlong beses po sa isang araw ang inom ng gamot na ito.</b><span>This medicine is taken three times a day.</span></div>
<div class="ex"><b>Dalawang beses na siyang naospital ngayong taon.</b><span>She has been in hospital twice this year.</span></div>
<div class="ex"><b>Makalawa na siyang bumalik dito ngayong buwan.</b><span>He has come back here twice this month.</span></div>
<div class="ex"><b>Babalik po kayo sa makalawa.</b><span>Please come back the day after tomorrow.</span></div>
<div class="ex"><b>Kalahating tableta lang po ang iniinom niya sa gabi.</b><span>She only takes half a tablet at night.</span></div>
<div class="ex"><b>Sangkapat ng sahod niya ang napupunta sa upa.</b><span>A quarter of his salary goes to rent.</span></div>
<div class="note">Clinical tip: when you explain a schedule, say the number of times and the hours together, and ask the patient to say it back: <i>Ilang beses po sa isang araw, at anong oras?</i> If a relative says <i>sa makalawa</i>, check whether she means a date, not "twice".</div>
<div class="note">Common mistake: <i>ikaisa</i> and <i>ikadalawa</i>. First is <i>una</i>, and second is <i>ikalawa</i> or <i>pangalawa</i>.</div>`,
  quiz: [
    ['"Second" as most people say it:', ['ikadalawa', 'pangalawa', 'pandalawa'], 1, 'Pangalawa (or formal ikalawa). Two drops its first syllable.'],
    ['"Ito ang ____ araw niya rito." (first)', ['ikaisang', 'pangisang', 'unang'], 2, 'First is una, with the linker before a noun.'],
    ['"Tig-isa kayo." means', ['One of you', 'You each get one', 'Once'], 1, 'Tig- + number = so many each.'],
    ['"Tatlong beses sa isang araw" means', ['three times a day', 'every three days', 'on the third day'], 0, 'Beses = times; sa isang araw = in one day.'],
    ['"Babalik po kayo sa makalawa." When?', ['twice a day', 'in two weeks', 'the day after tomorrow'], 2, 'Sa makalawa is a day, not "twice".'],
    ['At the clinic a relative asks "Pang-ilan na po kami?" What does she want to know?', ['Their place in the queue', 'How many tablets to give', 'How many times to come back'], 0, 'Pang-ilan asks for a place in order.']
  ]
},
{
  id: 'equality', level: 'B1', unit: 'Everyday life', title: 'Kasintangkad, pareho, parang: as ... as, the same, like',
  summary: 'How to say that two things are alike: kasing- and its sound changes, magkasing- and pareho for pairs, gaya ng and parang for likeness, and hindi kasing- for "not as ... as".',
  body: `
<p><a href="#/lessons/comparisons">Comparing: mas, pinaka-, kasing-</a> showed one kasing- example. This lesson gives the full set of words for sameness and likeness, which patients use to say whether a symptom is the same, better, or "like" something.</p>
<h3>Kasing- and its sound changes</h3>
<p><b>Kasing-</b> goes on the <b>root</b> of a describing word, without <i>ma-</i>: <i>malaki → kasinlaki</i>, <i>mabigat → kasimbigat</i>. What it is compared with takes <b>ng</b> (or <b>ni</b> for a name, or <i>ko, mo, niya</i>), and the thing described takes <i>ang</i>. The <i>ng</i> of the prefix changes to fit the next sound: <b>n</b> before d, l, r, s, t and <b>m</b> before b, p. Writers do not all follow this, and you will also see <i>kasinglaki</i>. The shorter <b>sing-</b> (<i>simputi, sintangkad</i>) means the same and sounds more literary.</p>
<table><tr><th>Root</th><th>kasing-</th><th>magkasing-</th><th>Sound change</th></tr>
<tr><td>tangkad</td><td>kasintangkad</td><td>magkasintangkad</td><td>n before t</td></tr>
<tr><td>laki</td><td>kasinlaki</td><td>magkasinlaki</td><td>n before l</td></tr>
<tr><td>sakit</td><td>kasinsakit</td><td>magkasinsakit</td><td>n before s</td></tr>
<tr><td>bigat</td><td>kasimbigat</td><td>magkasimbigat</td><td>m before b</td></tr>
<tr><td>puti</td><td>kasimputi</td><td>magkasimputi</td><td>m before p</td></tr>
<tr><td>ganda</td><td>kasingganda</td><td>magkasingganda</td><td>no change</td></tr>
<tr><td>edad</td><td>kasing-edad</td><td>magkasing-edad</td><td>hyphen before a vowel</td></tr></table>
<div class="ex"><b>Kasintangkad na ng tatay niya si Carlo.</b><span>Carlo is now as tall as his father.</span></div>
<div class="ex"><b>Kasimbigat ng bata ang bag mo!</b><span>Your bag is as heavy as a child!</span></div>
<div class="ex"><b>Kasinlaki ng kamao ang bukol.</b><span>The lump is as big as a fist.</span></div>
<div class="ex"><b>Simputi ng papel ang mukha niya kanina.</b><span>Her face was as white as paper earlier.</span></div>
<h3>Magkasing- and pareho: two things alike</h3>
<p><b>Magkasing-</b> puts both sides in one plural topic, so there is no <i>ng</i> phrase for the thing compared: <i>Magkasintangkad sila</i>. <i>Kami ng asawa ko</i> means "my spouse and I". <b>Pareho</b> means "the same" or "both": <i>pareho</i> + the people + <b>ng</b> + what they share, or <i>parehong</i> + a describing word for "both".</p>
<div class="ex"><b>Magkasintangkad ang magkapatid.</b><span>The two siblings are the same height.</span></div>
<div class="ex"><b>Magkasing-edad kami ng asawa ko.</b><span>My spouse and I are the same age.</span></div>
<div class="ex"><b>Pareho po kami ng sakit ng nanay ko.</b><span>My mother and I have the same illness.</span></div>
<div class="ex"><b>Parehong masakit ang dalawang tuhod ko.</b><span>Both my knees hurt.</span></div>
<div class="ex"><b>Pareho lang po ang pakiramdam ko, walang nagbago.</b><span>I feel just the same, nothing has changed.</span></div>
<h3>Gaya ng, tulad ng, parang, kamukha</h3>
<p><b>Gaya ng</b>, <b>tulad ng</b> and <b>katulad ng</b> (also <i>kagaya ng</i>) mean "like" or "as" and are used the same way; take <i>ni</i> before a name. <b>Parang</b> means "like" or "as if" and often carries doubt (see <a href="#/lessons/hedging">Daw, yata, baka, siguro, parang</a>). <b>Kamukha</b> is "looks like", for faces; <b>magkamukha</b> for two who look alike.</p>
<div class="ex"><b>Gaya ng dati, sa Linggo kami dadalaw.</b><span>As usual, we will visit on Sunday.</span></div>
<div class="ex"><b>Tulad ng sinabi ko po kanina, hindi siya natutulog sa gabi.</b><span>As I said earlier, he does not sleep at night.</span></div>
<div class="ex"><b>Katulad ng tatay niya, tahimik siyang tao.</b><span>Like his father, he is a quiet person.</span></div>
<div class="ex"><b>Parang may gumagapang po sa braso ko.</b><span>It feels like something is crawling on my arm.</span></div>
<div class="ex"><b>Kamukhang-kamukha mo ang nanay mo.</b><span>You look just like your mother.</span></div>
<h3>Not as ... as: hindi kasing-</h3>
<p>Put <b>hindi</b> in front for "not as ... as". With <i>na</i> it says the change over time: <i>hindi na kasinsakit</i> (no longer as painful). Everyday speech also uses <i>hindi na gaanong ... gaya ng</i>.</p>
<div class="ex"><b>Hindi na po kasinsakit ng kahapon ang ulo ko.</b><span>My head is not as painful as yesterday.</span></div>
<div class="ex"><b>Hindi kasinlamig ng Baguio ang Bataan.</b><span>Bataan is not as cold as Baguio.</span></div>
<div class="note">Clinical tip: likeness words carry the patient's own description of a symptom. <b>Parang may gumagapang sa braso ko</b> may be a tactile hallucination or withdrawal, so ask for more. <b>Hindi na po kasinsakit</b> and <b>pareho lang</b> are your follow-up answers: better, or no change. In a family history, <b>Pareho po kami ng sakit</b> tells you an illness runs in the family.</div>
<div class="note">Common mistake: putting kasing- on the ma- word. Say <i>kasinsakit</i>, not <i>kasingmasakit</i>.</div>`,
  quiz: [
    ['In standard spelling, "as heavy as" is written', ['kasimbigat', 'kasinbigat', 'kasingmabigat'], 0, 'M before b; and kasing- takes the root, not the ma- word.'],
    ['"Kasintangkad ____ tatay niya si Carlo."', ['sa', 'ang', 'ng'], 2, 'What it is compared with takes ng.'],
    ['"Magkamukha sila." means', ['They look alike', 'They are the same age', 'They are the same height'], 0, 'Kamukha = looks like; magka- for the pair.'],
    ['"It is not as painful as yesterday."', ['Kasinsakit na ng kahapon.', 'Hindi na kasinsakit ng kahapon.', 'Hindi na masakit kahapon.'], 1, 'Hindi + kasing- = not as ... as.'],
    ['"Pareho kami ng sakit ng nanay ko." means', ['My mother is sicker than me', 'My mother and I have the same illness', 'My mother caught my illness'], 1, 'Pareho + the people + ng + what they share.'],
    ['A patient says "Parang may gumagapang sa balat ko." What should you do?', ['Chart that insects are on her skin', 'Treat it as unimportant because parang shows doubt', 'Ask her to describe it more, and think of tactile hallucinations or withdrawal'], 2, 'Parang introduces her own description of a sensation; explore it.']
  ]
}
);
