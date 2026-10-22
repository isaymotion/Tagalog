/* Grammar and culture lessons. body is trusted HTML authored here.
   quiz: [question, [options], correctIndex, explanation] */
window.LESSONS = [
{
  id: 'pronounce', level: 'A1', unit: 'Foundations', title: 'Sounds and spelling',
  summary: 'Read Tagalog aloud correctly from day one.',
  body: `
<p>Tagalog is spelled almost exactly as it sounds. Five vowels, each with one sound:</p>
<table><tr><th>Letter</th><th>Sound</th><th>Example</th></tr>
<tr><td>a</td><td>"a" in <i>father</i></td><td><b>a</b>raw (sun, day)</td></tr>
<tr><td>e</td><td>"e" in <i>bed</i></td><td>b<b>e</b>rde (green)</td></tr>
<tr><td>i</td><td>"ee" in <i>see</i></td><td><b>i</b>sa (one)</td></tr>
<tr><td>o</td><td>"o" in <i>port</i></td><td>ak<b>o</b> (I)</td></tr>
<tr><td>u</td><td>"oo" in <i>food</i></td><td><b>u</b>lo (head)</td></tr></table>
<h3>Watch out for</h3>
<ul>
<li><b>ng</b> is one sound, like the end of <i>sing</i>, and can start a word: <b>ng</b>ipin (tooth), <b>ng</b>ayon (now).</li>
<li><b>ng</b> (the marker) is pronounced <b>nang</b>. <b>mga</b> (plural marker) is pronounced <b>ma-NGA</b>.</li>
<li><b>Glottal stops</b>: a catch in the throat, like the middle of <i>uh-oh</i>. <i>bata</i> (child) ends with one. Stress and glottal stops change meaning: <i>BUkas</i> (open) vs <i>buKAS</i> (tomorrow).</li>
<li>Every vowel is pronounced. <i>Tao</i> is <b>TA-o</b>, two syllables. <i>Oo</i> (yes) is <b>O-o</b> with a catch between.</li>
<li>Consonants are not aspirated. <i>p, t, k</i> are softer than in English.</li>
</ul>
<div class="note">Clinical tip: When unsure of stress, speak slowly and evenly. Patients understand slow, even Tagalog far better than fast Tagalog with wrong stress.</div>`,
  quiz: [
    ['How is the marker "mga" pronounced?', ['mi-ga', 'ma-NGA', 'em-ga', 'mag'], 1, 'mga is an abbreviation pronounced ma-NGA.'],
    ['How is the marker "ng" pronounced?', ['ing', 'nang', 'en-ji', 'ng (silent)'], 1, 'The marker ng is pronounced nang.'],
    ['How many syllables in "tao" (person)?', ['One', 'Two', 'Three'], 1, 'Every vowel is pronounced: TA-o.']
  ]
},
{
  id: 'markers', level: 'A1', unit: 'Foundations', title: 'Ang, ng, sa: the three markers',
  summary: 'Every Tagalog sentence is built around these three little words.',
  body: `
<p>Tagalog nouns are introduced by markers that tell you each noun's role.</p>
<table><tr><th>Marker</th><th>Role</th><th>Rough English</th></tr>
<tr><td><b>ang</b></td><td>The topic (focus) of the sentence</td><td>"the" (the one we're talking about)</td></tr>
<tr><td><b>ng</b></td><td>Non-topic actor or object; possession</td><td>"of", "a", "by"</td></tr>
<tr><td><b>sa</b></td><td>Location, direction, recipient; definite non-topic</td><td>"in, at, to, from"</td></tr></table>
<h3>Word order: predicate first</h3>
<p>Tagalog usually puts the comment (verb or description) first and the topic last.</p>
<div class="ex"><b>Masakit ang ulo ko.</b><span>My head hurts. (Painful the head of-me.)</span></div>
<div class="ex"><b>Kumain ang bata ng kanin.</b><span>The child ate rice.</span></div>
<div class="ex"><b>Pumunta ang pasyente sa ospital.</b><span>The patient went to the hospital.</span></div>
<h3>Possession with ng</h3>
<div class="ex"><b>ang gamot ng pasyente</b><span>the patient's medicine</span></div>
<div class="ex"><b>ang bahay ng nanay ko</b><span>my mother's house</span></div>
<div class="note">Plural: add <b>mga</b> after the marker: <i>ang mga bata</i> (the children), <i>sa mga pasyente</i> (to the patients).</div>`,
  quiz: [
    ['Choose the marker: "Masakit ___ tiyan ko." (My stomach hurts.)', ['ang', 'ng', 'sa'], 0, 'The stomach is the topic: ang tiyan ko.'],
    ['Choose the marker: "Pumunta siya ___ palengke." (She went to the market.)', ['ang', 'ng', 'sa'], 2, 'Direction uses sa.'],
    ['Choose the marker: "Uminom siya ___ tubig." (He drank water.)', ['ang', 'ng', 'sa'], 1, 'An indefinite object in an actor-focus sentence takes ng.'],
    ['"ang anak ng doktor" means:', ['the doctor\'s child', 'the child is a doctor', 'the doctor and child'], 0, 'ng shows possession.']
  ]
},
{
  id: 'names', level: 'A1', unit: 'Foundations', title: 'Si, ni, kay: markers for names',
  summary: 'People\'s names use their own set of markers.',
  body: `
<p>When the noun is a person's name (or a title used as a name like <i>Nanay</i>, <i>Dok</i>), swap the markers:</p>
<table><tr><th>Common noun</th><th>Personal name</th><th>Plural names</th></tr>
<tr><td>ang</td><td><b>si</b></td><td><b>sina</b></td></tr>
<tr><td>ng</td><td><b>ni</b></td><td><b>nina</b></td></tr>
<tr><td>sa</td><td><b>kay</b></td><td><b>kina</b></td></tr></table>
<div class="ex"><b>Si Maria ang pasyente.</b><span>Maria is the patient.</span></div>
<div class="ex"><b>Ang anak ni Aling Rosa.</b><span>Aling Rosa's child.</span></div>
<div class="ex"><b>Ibigay mo ito kay Dok Navarro.</b><span>Give this to Dr. Navarro.</span></div>
<div class="ex"><b>Pumunta sina Juan sa bahay.</b><span>Juan and the others came to the house.</span></div>
<div class="note"><b>Aling</b> (for women) and <b>Mang</b> (for men) are respectful titles for older adults: <i>Aling Nena, Mang Jose</i>.</div>`,
  quiz: [
    ['"___ Pedro ang kapatid ko."', ['Si', 'Ni', 'Kay'], 0, 'Topic name marker: si.'],
    ['"Ang asawa ___ Liza."', ['si', 'ni', 'kay'], 1, 'Possession with a name: ni.'],
    ['"Tumawag ka ___ Ana."', ['si', 'ni', 'kay'], 2, 'Direction toward a named person: kay.']
  ]
},
{
  id: 'pronouns', level: 'A1', unit: 'Foundations', title: 'Pronouns and the two "we"s',
  summary: 'Three sets of pronouns, plus inclusive vs exclusive "we".',
  body: `
<table><tr><th></th><th>ang-set (topic)</th><th>ng-set (my, by me)</th><th>sa-set (to me, mine)</th></tr>
<tr><td>I</td><td>ako</td><td>ko</td><td>akin</td></tr>
<tr><td>you</td><td>ikaw / ka</td><td>mo</td><td>iyo</td></tr>
<tr><td>he/she</td><td>siya</td><td>niya</td><td>kaniya</td></tr>
<tr><td>we (incl.)</td><td>tayo</td><td>natin</td><td>atin</td></tr>
<tr><td>we (excl.)</td><td>kami</td><td>namin</td><td>amin</td></tr>
<tr><td>you (pl./polite)</td><td>kayo</td><td>ninyo</td><td>inyo</td></tr>
<tr><td>they</td><td>sila</td><td>nila</td><td>kanila</td></tr></table>
<h3>Tayo vs kami</h3>
<p><b>Tayo</b> includes the listener. <b>Kami</b> excludes the listener.</p>
<div class="ex"><b>Pag-usapan natin ito.</b><span>Let's (you and I) talk about this.</span></div>
<div class="ex"><b>Kami ng team ay tutulong sa iyo.</b><span>We (the team, not you) will help you.</span></div>
<h3>Siya has no gender</h3>
<p>Ask for clarification: <i>Lalaki o babae?</i> (Male or female?) when a patient says "siya" about a voice or person.</p>
<h3>Kayo for respect</h3>
<p>Use <b>kayo / ninyo / inyo</b> for one older person. Combined with <b>po</b>, this is the most respectful register. <i>Kumusta po kayo?</i></p>
<div class="note">Clinical tip: Use <i>natin</i> to build alliance: <i>Gagamutin natin ito</i> (We'll treat this together).</div>`,
  quiz: [
    ['Talking with a patient about "our plan" (you and the patient):', ['ang plano namin', 'ang plano natin', 'ang plano nila'], 1, 'Inclusive "our" = natin.'],
    ['"Mine" / "to me":', ['ako', 'ko', 'akin'], 2, 'akin is the sa-set.'],
    ['Most respectful way to say "How are you?" to an elderly patient:', ['Kumusta ka?', 'Kumusta po kayo?', 'Kumusta siya?'], 1, 'po + kayo is the respectful form.']
  ]
},
{
  id: 'linkers', level: 'A1', unit: 'Foundations', title: 'Linkers: na and -ng',
  summary: 'The glue between adjectives, nouns, and verbs.',
  body: `
<p>Adjectives and nouns are joined by a linker. After a vowel, attach <b>-ng</b>. After <i>n</i>, attach <b>-g</b>. After other consonants, use <b>na</b>.</p>
<div class="ex"><b>magandang umaga</b><span>good morning (maganda + -ng)</span></div>
<div class="ex"><b>malaking bahay</b><span>big house</span></div>
<div class="ex"><b>mabait na doktor</b><span>kind doctor</span></div>
<div class="ex"><b>batang lalaki</b><span>young boy</span></div>
<div class="ex"><b>huling gamot</b><span>last medicine</span></div>
<p>Order is flexible: <i>bahay na malaki</i> and <i>malaking bahay</i> both work.</p>
<h3>Linking verbs</h3>
<div class="ex"><b>Gusto kong matulog.</b><span>I want to sleep.</span></div>
<div class="ex"><b>Ayaw niyang kumain.</b><span>He/She doesn't want to eat.</span></div>`,
  quiz: [
    ['"sad patient":', ['malungkot ang pasyente', 'malungkot na pasyente', 'malungkotng pasyente'], 1, 'Ends in t (consonant) → na.'],
    ['"good evening":', ['maganda gabi', 'magandang gabi', 'maganda na gabi'], 1, 'maganda ends in a vowel → -ng.'],
    ['"I want to go home":', ['Gusto ko umuwi', 'Gusto kong umuwi', 'Gusto ako umuwi'], 1, 'ko + -ng → kong.']
  ]
},
{
  id: 'may-wala', level: 'A1', unit: 'Foundations', title: 'May, mayroon, wala',
  summary: 'There is / has / there isn\'t: essential for symptom questions.',
  body: `
<p><b>May</b> + noun = there is / has. <b>Mayroon</b> (spoken: <b>meron</b>) is used when something comes between, or alone as an answer. <b>Wala</b> = there isn't / doesn't have.</p>
<div class="ex"><b>May lagnat ka ba?</b><span>Do you have a fever?</span></div>
<div class="ex"><b>Mayroon po. / Meron po.</b><span>Yes, I do.</span></div>
<div class="ex"><b>Wala po.</b><span>No, I don't. / There isn't.</span></div>
<div class="ex"><b>Mayroon ka bang allergy sa gamot?</b><span>Do you have any drug allergies?</span></div>
<div class="ex"><b>Walang tao sa bahay.</b><span>No one is at home.</span></div>
<div class="note">Answering "Wala po" is the standard "no" to may-questions. Answering "Hindi po" sounds slightly off for these.</div>
<h3>May + verb: someone</h3>
<div class="ex"><b>May bumubulong ba sa iyo?</b><span>Is someone whispering to you?</span></div>
<div class="ex"><b>May nanakit ba sa iyo?</b><span>Did someone hurt you?</span></div>`,
  quiz: [
    ['"Do you have a fever?"', ['May lagnat ka ba?', 'Wala lagnat ka ba?', 'Lagnat ba may ka?'], 0, 'may + noun, then the pronoun ka, then ba.'],
    ['Natural "No" answer to "May anak ka ba?"', ['Hindi po', 'Wala po', 'Ayaw po'], 1, 'Wala answers may/mayroon questions.'],
    ['"Is anyone talking to you?"', ['May kumakausap ba sa iyo?', 'Wala kumakausap sa iyo?', 'Kumakausap ka ba?'], 0, 'may + verb = someone who...']
  ]
},
{
  id: 'questions', level: 'A1', unit: 'Foundations', title: 'Asking questions',
  summary: 'Question words and the particle ba.',
  body: `
<table><tr><th>Word</th><th>Meaning</th><th>Example</th></tr>
<tr><td>ano</td><td>what</td><td>Ano ang pangalan mo?</td></tr>
<tr><td>sino</td><td>who</td><td>Sino ang kasama mo?</td></tr>
<tr><td>saan</td><td>where (to/at)</td><td>Saan ka nakatira?</td></tr>
<tr><td>nasaan</td><td>where is</td><td>Nasaan ang asawa mo?</td></tr>
<tr><td>kailan</td><td>when</td><td>Kailan ito nagsimula?</td></tr>
<tr><td>bakit</td><td>why</td><td>Bakit ka nandito?</td></tr>
<tr><td>paano</td><td>how</td><td>Paano ito nangyari?</td></tr>
<tr><td>ilan</td><td>how many</td><td>Ilan ang anak mo?</td></tr>
<tr><td>magkano</td><td>how much (cost)</td><td>Magkano ang gamot?</td></tr>
<tr><td>gaano</td><td>how (degree)</td><td>Gaano kasakit? Gaano katagal?</td></tr></table>
<h3>Yes/no questions with ba</h3>
<p>Add <b>ba</b> after the first word or phrase. Pronouns like <i>ka</i> come before ba.</p>
<div class="ex"><b>Natutulog ka ba nang maayos?</b><span>Are you sleeping well?</span></div>
<div class="ex"><b>Umiinom ka ba ng alak?</b><span>Do you drink alcohol?</span></div>
<div class="note">Clinical tip: "Bakit?" can sound confrontational. Soften it: <i>Ano po ang dahilan...?</i> (What is the reason...?) or <i>Ano po ang nangyari?</i> (What happened?).</div>`,
  quiz: [
    ['"When did it start?"', ['Saan ito nagsimula?', 'Kailan ito nagsimula?', 'Paano ito nagsimula?'], 1, 'kailan = when.'],
    ['"How many children do you have?"', ['Ilan ang anak mo?', 'Magkano ang anak mo?', 'Gaano ang anak mo?'], 0, 'ilan = how many (count).'],
    ['Where does ba go? "Do you hear voices?"', ['May naririnig ba kang boses?', 'May naririnig ka bang boses?', 'Ba may naririnig kang boses?'], 1, 'ka comes before ba (short pronouns first).']
  ]
},
{
  id: 'negation', level: 'A1', unit: 'Foundations', title: 'Hindi, wala, huwag',
  summary: 'Three ways to say no.',
  body: `
<ul><li><b>Hindi</b> negates verbs, adjectives, and statements: <i>Hindi ako natutulog.</i> (I don't sleep.)</li>
<li><b>Wala</b> negates existence/possession: <i>Wala akong gana.</i> (I have no appetite.)</li>
<li><b>Huwag</b> is "don't" for commands: <i>Huwag kang matakot.</i> (Don't be afraid.)</li></ul>
<p>Short pronouns jump forward after hindi/wala/huwag:</p>
<div class="ex"><b>Hindi ko alam.</b><span>I don't know.</span></div>
<div class="ex"><b>Hindi pa siya kumakain.</b><span>He/She hasn't eaten yet.</span></div>
<div class="ex"><b>Hindi na ako umiinom ng gamot.</b><span>I no longer take medicine.</span></div>
<div class="ex"><b>Huwag mong ihinto ang gamot.</b><span>Don't stop the medicine.</span></div>
<div class="note"><b>hindi pa</b> = not yet. <b>hindi na</b> = not anymore. Listen closely: these change a medication history completely.</div>`,
  quiz: [
    ['"I don\'t have money."', ['Hindi ako pera.', 'Wala akong pera.', 'Huwag akong pera.'], 1, 'Possession → wala.'],
    ['"Don\'t worry."', ['Hindi ka mag-alala.', 'Huwag kang mag-alala.', 'Wala kang mag-alala.'], 1, 'Command → huwag.'],
    ['"Hindi na siya umiinom ng gamot" means:', ['He hasn\'t taken it yet', 'He no longer takes the medicine', 'He doesn\'t drink'], 1, 'hindi na = not anymore.']
  ]
},
{
  id: 'focus', level: 'A2', unit: 'Verbs', title: 'Verb focus: who or what is the topic',
  summary: 'The single most important idea in Tagalog grammar.',
  body: `
<p>The verb's affix tells you which noun is the topic (marked by <b>ang</b>).</p>
<table><tr><th>Focus</th><th>Affixes</th><th>Topic is...</th><th>Example</th></tr>
<tr><td>Actor</td><td>-um-, mag-, ma-</td><td>the doer</td><td><b>Kumain</b> <u>ang bata</u> ng isda.</td></tr>
<tr><td>Object</td><td>-in, i-</td><td>the thing acted on</td><td><b>Kinain</b> ng bata <u>ang isda</u>.</td></tr>
<tr><td>Locative</td><td>-an</td><td>the place/person receiving</td><td><b>Sinulatan</b> ko <u>ang nanay ko</u>.</td></tr>
<tr><td>Benefactive</td><td>i-, ipag-</td><td>who benefits</td><td><b>Ipinagluto</b> ko <u>siya</u>.</td></tr></table>
<p>Both "Kumain ang bata ng isda" and "Kinain ng bata ang isda" mean "The child ate (the) fish." The topic differs: object focus implies a specific fish.</p>
<h3>Rule of thumb</h3>
<ul><li>Specific, known object → object focus is preferred: <i>Ininom mo ba ang gamot?</i> (Did you take <u>the</u> medicine?)</li>
<li>Indefinite object or asking about the doer → actor focus: <i>Sino ang uminom ng gamot?</i> (Who took medicine?)</li></ul>
<h3>Questions with sino/ano</h3>
<div class="ex"><b>Sino ang nagdala sa iyo dito?</b><span>Who brought you here? (actor focus, asking about the doer)</span></div>
<div class="ex"><b>Ano ang sinabi ng boses?</b><span>What did the voice say? (object focus, asking about the thing said)</span></div>`,
  quiz: [
    ['Object focus of "kain" (completed):', ['kumain', 'kinain', 'kakain'], 1, 'kinain = was eaten (object focus, completed).'],
    ['"What did the voice say?"', ['Ano ang nagsabi ng boses?', 'Ano ang sinabi ng boses?', 'Ano ang sabi ang boses?'], 1, 'The thing said is the topic → object focus sinabi.'],
    ['"Who brought you here?"', ['Sino ang dinala sa iyo dito?', 'Sino ang nagdala sa iyo dito?'], 1, 'Asking about the doer → actor focus nagdala.']
  ]
},
{
  id: 'aspect', level: 'A2', unit: 'Verbs', title: 'Aspect: completed, ongoing, future',
  summary: 'Tagalog marks whether an action has started and finished, not tense.',
  body: `
<table><tr><th>Aspect</th><th>-um- (kain)</th><th>mag- (luto)</th><th>-in (kain)</th><th>Pattern</th></tr>
<tr><td>Infinitive</td><td>kumain</td><td>magluto</td><td>kainin</td><td>base form, commands</td></tr>
<tr><td>Completed</td><td>kumain</td><td>nagluto</td><td>kinain</td><td>started and finished</td></tr>
<tr><td>Incompleted</td><td>kumakain</td><td>nagluluto</td><td>kinakain</td><td>started, not finished; habits</td></tr>
<tr><td>Contemplated</td><td>kakain</td><td>magluluto</td><td>kakainin</td><td>not yet started</td></tr></table>
<h3>The two moves</h3>
<ol><li><b>Reduplicate</b> the first syllable of the root for unfinished actions: kain → <b>ka</b>kain.</li>
<li><b>Mark it as started</b>: -um- / nag- / -in- appear in completed and incompleted.</li></ol>
<h3>Habits use incompleted</h3>
<div class="ex"><b>Umiinom ako ng gamot araw-araw.</b><span>I take medicine every day.</span></div>
<div class="ex"><b>Natutulog siya nang alas-dos ng madaling-araw.</b><span>He/She sleeps at 2 a.m.</span></div>
<h3>Recent completion: ka- + reduplication</h3>
<div class="ex"><b>Kakakain ko lang.</b><span>I just ate.</span></div>
<div class="note">Practice all verbs in the Verb Trainer. Clinical histories depend on these: <i>uminom</i> (took), <i>umiinom</i> (takes), <i>iinom</i> (will take).</div>`,
  quiz: [
    ['"I am taking medicine (regularly)":', ['Uminom ako ng gamot', 'Umiinom ako ng gamot', 'Iinom ako ng gamot'], 1, 'Habit/ongoing → incompleted.'],
    ['Contemplated of "tulog" (ma-):', ['natulog', 'natutulog', 'matutulog'], 2, 'ma + reduplicated root.'],
    ['"Nagluto" is:', ['completed', 'incompleted', 'contemplated'], 0, 'nag- without reduplication = completed.']
  ]
},
{
  id: 'particles', level: 'A2', unit: 'Natural speech', title: 'Particles: na, pa, ba, naman, kasi, nga, lang',
  summary: 'The small words that make you sound fluent.',
  body: `
<table><tr><th>Particle</th><th>Meaning</th><th>Example</th></tr>
<tr><td>na</td><td>already, now</td><td>Kumain ka na? (Have you eaten?)</td></tr>
<tr><td>pa</td><td>still, yet, more</td><td>Masakit pa ba? (Does it still hurt?)</td></tr>
<tr><td>ba</td><td>question</td><td>Okay ka ba?</td></tr>
<tr><td>naman</td><td>softener; "how about"</td><td>Ikaw naman? Sige naman.</td></tr>
<tr><td>kasi</td><td>because; you see</td><td>Hindi ako nakatulog kasi maingay.</td></tr>
<tr><td>nga</td><td>indeed; please (soft)</td><td>Ikuwento mo nga. (Please tell me.)</td></tr>
<tr><td>lang</td><td>just, only</td><td>Sandali lang. Minsan lang.</td></tr>
<tr><td>din/rin</td><td>also</td><td>Ako rin.</td></tr>
<tr><td>daw/raw</td><td>reportedly</td><td>Masakit daw ang ulo niya. (He says his head hurts.)</td></tr>
<tr><td>po</td><td>respect</td><td>Salamat po.</td></tr></table>
<h3>Order</h3>
<p>Short pronouns (ka, ko, mo, siya...) come first, then particles in roughly this order: <b>na/pa → nga → din/rin → daw/raw → po → ba</b>.</p>
<div class="ex"><b>Kumain ka na ba?</b><span>Have you eaten already?</span></div>
<div class="ex"><b>Masakit pa rin daw po.</b><span>He/She says it still hurts (polite).</span></div>
<h3>Daw/raw in collateral history</h3>
<p>Families reporting what the patient said use <b>daw</b>: <i>May naririnig daw siyang boses.</i> (He says he hears voices.) This tells you the informant didn't witness it directly.</p>`,
  quiz: [
    ['"Does it still hurt?"', ['Masakit na ba?', 'Masakit pa ba?', 'Masakit lang ba?'], 1, 'pa = still.'],
    ['"May naririnig daw siya" means:', ['He hears things (I saw it)', 'He says he hears things', 'He used to hear things'], 1, 'daw = reportedly.'],
    ['Correct order: "Have you eaten already?"', ['Kumain na ka ba?', 'Kumain ka na ba?', 'Kumain ba ka na?'], 1, 'Pronoun ka first, then na, then ba.']
  ]
},
{
  id: 'politeness', level: 'A1', unit: 'Natural speech', title: 'Po, opo, and respectful address',
  summary: 'Respect is grammar in Tagalog. It changes how patients respond to you.',
  body: `
<p>Use <b>po</b> (or the softer <b>ho</b>) in every sentence with elders, patients' parents, strangers, and anyone senior. <b>Opo</b> means "yes" respectfully.</p>
<div class="ex"><b>Ano po ang nararamdaman ninyo?</b><span>What are you feeling? (respectful)</span></div>
<div class="ex"><b>Opo, naiintindihan ko po.</b><span>Yes, I understand.</span></div>
<h3>Addressing people</h3>
<ul><li><b>Nanay / Tatay, Nay / Tay</b>: older patients (like a parent's age).</li>
<li><b>Lola / Lolo</b>: elderly patients. Warm and widely accepted.</li>
<li><b>Ate / Kuya</b>: someone a bit older than you.</li>
<li><b>Aling / Mang + name</b>: older adults by name.</li>
<li><b>Ma'am / Sir</b>: very common in clinics, neutral and safe.</li></ul>
<h3>Patients will call you</h3>
<p><b>Dok, Doc, Doktora</b> (female doctor), <b>Doktor</b>. Hearing <i>"Opo, Dok"</i> is normal.</p>
<div class="note">With younger or same-age patients, dropping po can build rapport. Start polite; follow the patient's lead.</div>`,
  quiz: [
    ['A 70-year-old woman patient. Best address:', ['Ikaw', 'Lola / Nanay with po', 'Bata'], 1, 'Lola/Nanay + po shows respect and warmth.'],
    ['Respectful "yes":', ['Oo', 'Opo', 'Sige'], 1, 'opo.'],
    ['"Doktora" refers to:', ['a female doctor', 'a nurse', 'a hospital'], 0, 'Doktora = female doctor.']
  ]
},
{
  id: 'numbers', level: 'A1', unit: 'Everyday life', title: 'Numbers, time, and money',
  summary: 'Native numbers for counting, Spanish numbers for clocks and pesos.',
  body: `
<p>Filipinos use <b>native Tagalog numbers</b> for counting things and ages, <b>Spanish-derived numbers</b> for time and often money, and <b>English</b> numbers a lot too.</p>
<table><tr><th>#</th><th>Tagalog</th><th>Spanish</th></tr>
<tr><td>1</td><td>isa</td><td>uno</td></tr><tr><td>2</td><td>dalawa</td><td>dos</td></tr>
<tr><td>3</td><td>tatlo</td><td>tres</td></tr><tr><td>4</td><td>apat</td><td>kuwatro</td></tr>
<tr><td>5</td><td>lima</td><td>singko</td></tr><tr><td>6</td><td>anim</td><td>sais</td></tr>
<tr><td>7</td><td>pito</td><td>siyete</td></tr><tr><td>8</td><td>walo</td><td>otso</td></tr>
<tr><td>9</td><td>siyam</td><td>nuwebe</td></tr><tr><td>10</td><td>sampu</td><td>diyes</td></tr></table>
<h3>Telling time (Spanish)</h3>
<div class="ex"><b>Anong oras na?</b><span>What time is it?</span></div>
<div class="ex"><b>Alas-tres na.</b><span>It's three o'clock.</span></div>
<div class="ex"><b>Ala-una y medya</b><span>1:30</span></div>
<div class="ex"><b>alas-otso ng umaga / ng gabi</b><span>8 a.m. / 8 p.m.</span></div>
<h3>Money</h3>
<div class="ex"><b>Magkano po?</b><span>How much?</span></div>
<div class="ex"><b>Singkwenta pesos / limampung piso</b><span>50 pesos</span></div>
<h3>Ages and counts (native)</h3>
<div class="ex"><b>Tatlumpu't dalawang taon na ako.</b><span>I'm 32 years old. (Many will just say "thirty-two".)</span></div>
<div class="note">Clinical tip: For medication schedules, say the Spanish time: <i>isang tableta tuwing alas-otso ng gabi</i> (one tablet every 8 p.m.).</div>`,
  quiz: [
    ['"It\'s 3 o\'clock":', ['Tatlo na.', 'Alas-tres na.', 'Ikatlo na.'], 1, 'Time uses Spanish numbers.'],
    ['"siyam" means:', ['7', '8', '9'], 2, 'siyam = 9.'],
    ['"ala-una y medya" is:', ['1:00', '1:30', '1:15'], 1, 'y medya = half past.']
  ]
},
{
  id: 'modals', level: 'A2', unit: 'Everyday life', title: 'Gusto, ayaw, kailangan, puwede, kaya, dapat',
  summary: 'Want, need, can, should.',
  body: `
<p>These pseudo-verbs take the <b>ng-set</b> pronoun (ko, mo, niya) and a linker before the verb.</p>
<div class="ex"><b>Gusto kong umuwi.</b><span>I want to go home.</span></div>
<div class="ex"><b>Ayaw niyang kumain.</b><span>He/She doesn't want to eat.</span></div>
<div class="ex"><b>Kailangan mong uminom ng gamot.</b><span>You need to take medicine.</span></div>
<div class="ex"><b>Puwede ba akong magtanong?</b><span>May I ask a question? (puwede uses the ang-set)</span></div>
<div class="ex"><b>Kaya mo pa ba?</b><span>Can you still manage / cope?</span></div>
<div class="ex"><b>Dapat kang magpahinga.</b><span>You should rest.</span></div>
<div class="note"><b>"Kaya mo pa ba?"</b> is a powerful, natural way to ask about coping. <b>"Hindi ko na kaya"</b> (I can't take it anymore) is a statement that warrants a risk assessment.</div>`,
  quiz: [
    ['"He doesn\'t want to take his medicine":', ['Ayaw niyang uminom ng gamot.', 'Ayaw siya uminom ng gamot.', 'Hindi gusto siya gamot.'], 0, 'ayaw + niya + -ng + verb.'],
    ['"Hindi ko na kaya" means:', ['I don\'t know', 'I can\'t take it anymore', 'I don\'t want to'], 1, 'Flag for risk assessment.'],
    ['"Can you still cope?"', ['Gusto mo pa ba?', 'Kaya mo pa ba?', 'Dapat ka pa ba?'], 1, 'kaya = able/capable.']
  ]
},
{
  id: 'comparisons', level: 'A2', unit: 'Everyday life', title: 'Comparing: mas, pinaka-, kasing-',
  summary: 'More, most, as ... as. Useful for tracking symptoms over time.',
  body: `
<div class="ex"><b>Mas masakit ngayon kaysa kahapon.</b><span>It hurts more today than yesterday.</span></div>
<div class="ex"><b>Pinakamahirap ang gabi.</b><span>Nights are the hardest.</span></div>
<div class="ex"><b>Kasinlakas ng dati ang boses.</b><span>The voice is as loud as before.</span></div>
<div class="ex"><b>Mas gumaan ba ang pakiramdam mo?</b><span>Do you feel lighter/better?</span></div>
<div class="ex"><b>Lumala ba o gumanda?</b><span>Did it get worse or better?</span></div>
<h3>Rating scales</h3>
<div class="ex"><b>Mula isa hanggang sampu, gaano kalungkot ka ngayon?</b><span>From one to ten, how sad are you now?</span></div>`,
  quiz: [
    ['"Did it get worse?"', ['Gumaling ba?', 'Lumala ba?', 'Gumaan ba?'], 1, 'lumala = worsened.'],
    ['"most difficult":', ['mas mahirap', 'pinakamahirap', 'kasinghirap'], 1, 'pinaka- = most.']
  ]
},
{
  id: 'register', level: 'B1', unit: 'Natural speech', title: 'Formal Filipino vs everyday Taglish',
  summary: 'How people actually talk in Manila hospitals.',
  body: `
<p>Textbook Filipino and real speech differ. In Metro Manila, many people mix English and Tagalog (<b>Taglish</b>). Rural and older patients, and those with less schooling, may speak "pure" Tagalog and not understand English medical terms.</p>
<table><tr><th>Formal</th><th>Everyday / Taglish</th><th>English</th></tr>
<tr><td>Mayroon ka bang alerhiya sa gamot?</td><td>May allergy ka ba sa gamot?</td><td>Any drug allergies?</td></tr>
<tr><td>Kailan ito nagsimula?</td><td>Kailan nag-start?</td><td>When did it start?</td></tr>
<tr><td>Ikaw ba ay nalulungkot?</td><td>Nalulungkot ka ba? / Sad ka ba?</td><td>Are you sad?</td></tr>
<tr><td>Hindi ako makatulog.</td><td>Hirap akong matulog. / Di ako makatulog.</td><td>I can't sleep.</td></tr></table>
<h3>Common Taglish verbs</h3>
<p>English roots take Tagalog affixes: <i>mag-text, nag-try, i-check, na-stress, ma-depress, nag-break (kami)</i>.</p>
<div class="ex"><b>Na-stress ako sa trabaho.</b><span>I got stressed at work.</span></div>
<div class="ex"><b>I-che-check ko lang ang BP mo.</b><span>I'll just check your BP.</span></div>
<div class="note">Use the <b>Register</b> toggle in Settings. Psychiatry phrases show both a formal version and an everyday version. Start with everyday Tagalog; switch to more formal if the patient answers in deep Tagalog.</div>
<h3>Avoid "deep" words that sound like a textbook</h3>
<p>Words like <i>salumpuwit</i> (chair) or <i>salipawpaw</i> (airplane) are textbook inventions no one uses. Prefer <i>upuan, eroplano</i>.</p>`,
  quiz: [
    ['"Na-stress ako" means:', ['I relaxed', 'I got stressed', 'I am strong'], 1, 'Taglish na- + stress = got stressed.'],
    ['For an elderly patient from a rural province, you should:', ['Use only English medical terms', 'Use plain everyday Tagalog, slowly', 'Use the deepest literary Tagalog'], 1, 'Plain, slow Tagalog is clearest.']
  ]
},
{
  id: 'ay-inversion', level: 'B1', unit: 'Verbs', title: 'Ay-inversion and formal sentences',
  summary: 'Recognize the formal word order used in writing and speeches.',
  body: `
<p>In formal writing and speeches, the topic can come first, linked by <b>ay</b>:</p>
<div class="ex"><b>Ang pasyente ay natutulog.</b><span>= Natutulog ang pasyente. (The patient is sleeping.)</span></div>
<div class="ex"><b>Si Dok ay darating mamaya.</b><span>= Darating si Dok mamaya.</span></div>
<p>In conversation, ay is shortened to <b>'y</b> after vowels: <i>Ako'y pagod.</i> Recognize it in documents and consent forms; in conversation, use predicate-first.</p>`,
  quiz: [['"Ang bata ay umiiyak" is equivalent to:', ['Umiiyak ang bata.', 'Ang umiiyak bata.', 'Bata umiiyak ay.'], 0, 'Same meaning, everyday order.']]
},
{
  id: 'kinship', level: 'A2', unit: 'Culture', title: 'Family, kinship, and who is in the room',
  summary: 'The family is part of the patient. Know the roles.',
  body: `
<p>Filipino families are close-knit and multigenerational. Expect a <b>bantay</b> (family watcher) at the bedside, and expect relatives to answer for the patient.</p>
<ul><li><b>Panganay</b> (eldest) often carries responsibility for parents and siblings.</li>
<li><b>Bunso</b> (youngest) is often protected and may care for aging parents.</li>
<li><b>Ninong/Ninang</b> (godparents) and <b>kumpare/kumare</b> (co-parents) are extended kin.</li>
<li><b>OFW</b> parents working abroad: children may be raised by grandparents or aunts.</li></ul>
<h3>Collateral history phrases</h3>
<div class="ex"><b>Ano po ang kaugnayan ninyo sa pasyente?</b><span>What is your relationship to the patient?</span></div>
<div class="ex"><b>Sino po ang kasama niya sa bahay?</b><span>Who lives with him/her?</span></div>
<div class="ex"><b>Puwede ko po ba muna siyang makausap nang mag-isa?</b><span>May I talk to him/her alone first?</span></div>
<div class="note">Always try to interview the patient alone for part of the visit, especially about substance use, abuse, and suicidal thoughts. Ask the family politely to step out.</div>`,
  quiz: [
    ['"Bantay" in a hospital means:', ['a security guard only', 'a family member who stays with the patient', 'a nurse'], 1, 'Family bedside watcher.'],
    ['"Panganay" is the:', ['eldest child', 'youngest child', 'godchild'], 0, 'panganay = eldest.']
  ]
},
{
  id: 'values', level: 'B1', unit: 'Culture', title: 'Hiya, utang na loob, pakikisama, bahala na',
  summary: 'Core values that shape how patients disclose (or hide) symptoms.',
  body: `
<dl>
<dt>Hiya (shame, propriety)</dt><dd>Fear of losing face for oneself or the family. Patients may deny symptoms to avoid embarrassment, especially about psychosis, sex, substance use, or family conflict. Normalize: <i>Maraming tao po ang nakakaranas nito.</i> (Many people experience this.)</dd>
<dt>Utang na loob (debt of gratitude)</dt><dd>A lasting obligation to those who helped you. Can drive caregiving burden, and conflict when someone feels ungrateful.</dd>
<dt>Pakikisama (getting along)</dt><dd>Avoiding open conflict. Patients may say "opo" to agree outwardly but not adhere. Check understanding with open questions: <i>Paano mo po iinumin ang gamot?</i> (How will you take the medicine?)</dd>
<dt>Amor propio / pride</dt><dd>Sensitivity to criticism. Frame feedback gently.</dd>
<dt>Bahala na (come what may)</dt><dd>Can mean faith-based courage or fatalism. Explore it rather than assume passivity.</dd>
<dt>Sama ng loob (resentment held inside)</dt><dd>Often expressed somatically: <i>mabigat ang dibdib</i>, headaches, poor sleep.</dd>
<dt>Tampo</dt><dd>Hurt withdrawal expecting to be coaxed back. Not the same as depression, though families may confuse the two.</dd>
<dt>Kapwa (shared self)</dt><dd>The core of Sikolohiyang Pilipino (Filipino psychology): seeing others as fellow persons, not strangers. Build rapport as kapwa, not only as an authority.</dd>
</dl>
<div class="note">An "opo" from a patient often means "I heard you," not "I agree" or "I will do it."</div>`,
  quiz: [
    ['A patient says "opo" to every instruction but looks unsure. Best next step:', ['Accept the opo', 'Ask them to explain the plan back in their own words', 'Speak louder'], 1, 'Teach-back avoids pakikisama-driven agreement.'],
    ['"Sama ng loob" is best described as:', ['physical illness', 'resentment or hurt held inside', 'a curse'], 1, 'Often somatized.']
  ]
},
{
  id: 'folk', level: 'B1', unit: 'Culture', title: 'Folk beliefs, spirits, and cultural explanations',
  summary: 'Distinguishing culturally shared beliefs from psychotic symptoms.',
  body: `
<p>Belief in spirits (<b>engkanto, duwende, nuno sa punso, multo, maligno</b>), witchcraft (<b>kulam, barang</b>), and spirit possession (<b>sapi, sanib</b>) is common across social classes. A belief is not a delusion when it is <b>shared by the person's community</b> and held in a culturally typical way.</p>
<h3>Questions that help</h3>
<div class="ex"><b>Naniniwala rin po ba ang pamilya ninyo dito?</b><span>Does your family also believe this?</span></div>
<div class="ex"><b>Ano po sa tingin ninyo ang sanhi nito?</b><span>What do you think caused this? (explanatory model)</span></div>
<div class="ex"><b>Nagpatingin na po ba kayo sa albularyo o manghihilot?</b><span>Have you consulted a folk healer?</span></div>
<div class="ex"><b>Ano po ang sinabi nila?</b><span>What did they say?</span></div>
<h3>Red flags pointing to psychosis</h3>
<ul><li>The family thinks the belief is strange or excessive.</li>
<li>The belief is bizarre, highly personal, or elaborated beyond the folk version (e.g., the engkanto chose them to save the world).</li>
<li>Accompanied by functional decline, disorganization, negative symptoms, or hearing running commentary.</li>
<li>Fixed despite evidence that would persuade others in their community.</li></ul>
<div class="note">Respect the explanatory model. Many families pursue both the albularyo and the psychiatrist. Saying "both can help" improves adherence more than dismissing folk healing.</div>`,
  quiz: [
    ['A patient says she was hexed (kinulam) by a neighbor. Her family shares this belief. Best next question:', ['"That is a delusion."', '"Ano po sa tingin ninyo ang nangyari, at ano ang ginawa ninyo tungkol dito?"', 'Ignore it'], 1, 'Explore the explanatory model and help-seeking.'],
    ['"Tabi-tabi po" is said to:', ['a doctor', 'unseen spirits like the nuno sa punso', 'a jeepney driver'], 1, 'Asking spirits to step aside.']
  ]
},
{
  id: 'idioms-distress', level: 'B1', unit: 'Culture', title: 'Idioms of distress',
  summary: 'How Filipino patients describe depression, anxiety, and psychosis in their own words.',
  body: `
<table><tr><th>Patient says</th><th>Literally</th><th>May indicate</th></tr>
<tr><td>Mabigat ang dibdib ko</td><td>My chest is heavy</td><td>Sadness, grief, anxiety</td></tr>
<tr><td>Nerbiyos</td><td>Nerves</td><td>Anxiety, panic</td></tr>
<tr><td>Kinakabahan ako</td><td>I feel kaba (nervous flutter)</td><td>Anxiety, palpitations</td></tr>
<tr><td>Wala akong gana</td><td>I have no appetite/drive</td><td>Anhedonia, anorexia</td></tr>
<tr><td>Pagod na ako</td><td>I'm tired already</td><td>Exhaustion, demoralization; may hint at passive suicidal ideation</td></tr>
<tr><td>Ayoko na</td><td>I don't want it anymore</td><td>Giving up. Ask about suicidal ideation.</td></tr>
<tr><td>Parang lutang ako</td><td>I feel like I'm floating</td><td>Dissociation, derealization, sedation</td></tr>
<tr><td>Tulala</td><td>Staring blankly</td><td>Withdrawal, catatonia, dissociation, depression</td></tr>
<tr><td>Wala sa sarili</td><td>Not in oneself</td><td>Confusion, psychosis, dissociation</td></tr>
<tr><td>Nagwawala</td><td>Going wild</td><td>Agitation, mania, psychosis, intoxication</td></tr>
<tr><td>Mainit ang ulo</td><td>Hot head</td><td>Irritability (depression, mania, substance)</td></tr>
<tr><td>Na-high blood</td><td>Blood pressure went up</td><td>Anger outburst</td></tr>
<tr><td>Pasma</td><td>Hot-cold imbalance</td><td>Tremor, sweaty palms (anxiety, EPS, withdrawal)</td></tr>
<tr><td>Ulyanin</td><td>Senile</td><td>Dementia, delirium, depression in elderly</td></tr>
<tr><td>Nabaliw / nasiraan ng bait</td><td>Went crazy / lost good sense</td><td>Psychosis (stigmatizing)</td></tr>
<tr><td>May sumasanib sa kanya</td><td>Something possesses him/her</td><td>Dissociative episodes, psychosis, seizure</td></tr>
<tr><td>Bangungot</td><td>Nightmare (also sudden nocturnal death)</td><td>Nightmares, sleep paralysis</td></tr></table>
<div class="note">Follow up with "Ano po ang ibig ninyong sabihin?" (What do you mean by that?). Never assume the clinical meaning.</div>`,
  quiz: [
    ['"Parang lutang ako" most suggests:', ['Elevated mood', 'Dissociation or feeling detached', 'Hunger'], 1, 'Floating/detached feeling.'],
    ['"Ayoko na" should prompt:', ['A joke to lighten the mood', 'Suicide risk assessment', 'Nothing'], 1, 'Giving up statements warrant risk screening.']
  ]
},
{
  id: 'storytelling', level: 'B2', unit: 'Natural speech', title: 'Following a patient\'s story',
  summary: 'Connectors and time words that structure narrative history.',
  body: `
<p>Patients often tell their history as a story (<b>kuwento</b>). These words mark sequence:</p>
<table><tr><th>Word</th><th>Meaning</th></tr>
<tr><td>noong una / nung una</td><td>at first</td></tr>
<tr><td>tapos / pagkatapos</td><td>then / afterwards</td></tr>
<tr><td>simula noon</td><td>since then</td></tr>
<tr><td>bigla</td><td>suddenly</td></tr>
<tr><td>unti-unti</td><td>gradually</td></tr>
<tr><td>hanggang ngayon</td><td>until now</td></tr>
<tr><td>bago nito</td><td>before this</td></tr>
<tr><td>nung isang buwan</td><td>last month</td></tr></table>
<div class="ex"><b>Noong una, hindi lang siya makatulog. Tapos, unti-unti na siyang hindi kumakain. Simula noon, tulala na lang siya.</b><span>At first he just couldn't sleep. Then gradually he stopped eating. Since then he just stares blankly.</span></div>
<h3>Useful prompts</h3>
<div class="ex"><b>Tapos ano po ang nangyari?</b><span>Then what happened?</span></div>
<div class="ex"><b>Kailan po ninyo unang napansin?</b><span>When did you first notice?</span></div>
<div class="ex"><b>Bigla po ba o unti-unti?</b><span>Sudden or gradual?</span></div>`,
  quiz: [
    ['"unti-unti" means:', ['suddenly', 'gradually', 'again'], 1, 'Gradual onset.'],
    ['"Simula noon" means:', ['since then', 'before that', 'at first'], 0, 'since then.']
  ]
}
];
