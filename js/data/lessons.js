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
<li><b>Glottal stops</b>: a catch in the throat, like the middle of <i>uh-oh</i>. <i>bata</i> (child) ends with one. Stress and glottal stops change meaning: <i>BUkas</i> (tomorrow) vs <i>buKAS</i> (open).</li>
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
  id: 'panlapi', level: 'A2', unit: 'Verbs', title: 'Panlapi: the five positions',
  summary: 'Unlapi, gitlapi, hulapi, kabilaan, laguhan: how to take any Tagalog word apart.',
  body: `
<p>Almost every long Tagalog word is a short root (<b>salitang-ugat</b>) wearing one or more affixes (<b>panlapi</b>). Filipino grammar names an affix by where it sits.</p>
<table><tr><th>Name</th><th>Where</th><th>Example</th><th>Root</th></tr>
<tr><td><b>Unlapi</b> (prefix)</td><td>before the root</td><td><b>mag</b>-aral, <b>ma</b>tulog, <b>nakaka</b>takot</td><td>aral, tulog, takot</td></tr>
<tr><td><b>Gitlapi</b> (infix)</td><td>inside the root, after its first consonant</td><td>k<b>um</b>ain, s<b>in</b>abi</td><td>kain, sabi</td></tr>
<tr><td><b>Hulapi</b> (suffix)</td><td>after the root</td><td>inum<b>in</b>, tulung<b>an</b></td><td>inom, tulong</td></tr>
<tr><td><b>Kabilaan</b></td><td>two affixes at once</td><td><b>ka</b>lungkut<b>an</b>, t<b>in</b>ulung<b>an</b></td><td>lungkot, tulong</td></tr>
<tr><td><b>Laguhan</b></td><td>prefix + infix + suffix</td><td><b>p<u>in</u>ag</b>-usap<b>an</b></td><td>usap</td></tr></table>
<p>Only two infixes exist (<b>-um-</b>, <b>-in-</b>) and only two suffixes (<b>-in</b>, <b>-an</b>). Everything else is a prefix, so most of the learning is on the prefixes and on the sound changes.</p>
<h3>Why it matters at the bedside</h3>
<p>The affix tells you who the sentence is about. <i>Uminom ka ng gamot</i> puts the patient in focus; <i>Inumin mo ang gamot</i> puts the medicine in focus. The same root also gives you nouns you will chart and hear every day:</p>
<div class="ex"><b>Malungkot siya at puno ng kalungkutan ang kuwento niya.</b><span>He is sad and his story is full of sadness. (ma- adjective, ka- -an abstract noun)</span></div>
<div class="ex"><b>Nakakatakot daw ang boses, kaya natatakot siyang matulog.</b><span>The voice is frightening, he says, so he is afraid to sleep. (nakaka- causes the feeling, na- feels it)</span></div>
<div class="ex"><b>Binigyan siya ng pampatulog para makatulog.</b><span>He was given a sleeping pill so he could fall asleep. (-in- -an, pang- pa-, maka-)</span></div>
<h3>Five sound changes to expect</h3>
<ol><li>A vowel-initial root takes the infix in front: <b>um</b>alis, <b>in</b>inom.</li>
<li>Roots in l, y, w take <b>ni-</b> instead of -in-: <b>ni</b>luto, <b>ni</b>yakap.</li>
<li>A final <b>o</b> becomes <b>u</b> before a suffix: inom → inum<b>in</b>; lungkot → kalungkut<b>an</b>.</li>
<li>After a vowel the suffix is <b>-hin</b> / <b>-han</b>: basa<b>hin</b>, sama<b>han</b>.</li>
<li><b>d</b> between vowels becomes <b>r</b>: ma + dami → ma<b>r</b>ami; pa + tawad + in → patawa<b>r</b>in.</li></ol>
<p>Some roots drop a vowel or change shape and have to be learned one by one: tingin → <b>tingnan</b>, bukas → <b>buksan</b>, bigay → <b>bigyan</b>, kuha → <b>kunin</b>, dala → <b>dalhin</b>.</p>
<h3>Not an affix: the repeated syllable</h3>
<p>Ka<b>ka</b>in, k<b>um</b>a<b>ka</b>in, nag<b>ba</b>basa: the repeated first syllable marks aspect (ongoing or future), not a new affix. Strip it off before you look for the root.</p>
<div class="note">Drill all five positions in the <a href="#/affixes">Panlapi trainer</a>: name the type, find the root, build the word, and pick the affix a sentence forces.</div>`,
  quiz: [
    ['What kind of affix is in "kumain"?', ['unlapi', 'gitlapi', 'hulapi'], 1, '-um- sits inside the root after the first consonant: k-um-ain.'],
    ['The root of "kalungkutan" is:', ['lungkot', 'lungkut', 'kalungkot'], 0, 'ka- -an around lungkot; the o became u before the suffix.'],
    ['"Tinulungan" is:', ['hulapi only', 'gitlapi only', 'kabilaan (infix + suffix)'], 2, 't-in-ulung-an: -in- inside, -an after.'],
    ['Build: inom + -in', ['inomin', 'inumin', 'inomhin'], 1, 'Final o becomes u; the root ends in a consonant, so no h.'],
    ['In "nagbabasa", the "ba" that repeats is:', ['an unlapi', 'a gitlapi', 'aspect marking, not an affix'], 2, 'Reduplication shows ongoing aspect; the affix is nag-.']
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
},
{
  id: 'interpreting', level: 'B1', unit: 'Culture', title: 'When your Tagalog is not enough: nurses, family and the point board',
  summary: 'When to interview alone, when to ask a nurse to interpret, when never to use the family, and how to keep an interpreted interview clinically sound.',
  draft: true,
  body: `
<p>Usap Tayo gets you to a working interview, not to native fluency. Knowing when to stop and get help is a clinical skill, and patients respect it. This lesson is about the three situations you will meet on the ward and in the OPD.</p>
<h3>1. Interview in Tagalog yourself when…</h3>
<ul>
<li>the questions are routine: mood, sleep, appetite, side effects, orientation, daily functioning, follow-up of a known patient;</li>
<li>you can follow the gist of the answers and the patient is not in crisis;</li>
<li>you have time to repeat and clarify (<i>Pakiulit po</i>, <i>Ano po ang ibig ninyong sabihin?</i>).</li>
</ul>
<p>Tell the patient at the start that you are still learning, and invite correction. Most patients slow down and help.</p>
<div class="ex"><b>Nag-aaral pa po ako ng Tagalog. Sabihin po ninyo kung hindi ninyo ako maintindihan.</b><span>I am still learning Tagalog. Tell me if you do not understand me.</span></div>
<div class="ex"><b>Puwede po bang dahan-dahan lang?</b><span>Could you go slowly, please?</span></div>
<h3>2. Ask a nurse or a colleague to interpret when…</h3>
<ul>
<li><b>risk is on the table</b>: suicide or violence risk assessment, an agitated or intoxicated patient, a decision about admission or restraint;</li>
<li><b>consent or rights</b>: explaining the diagnosis and treatment, informed consent for medication or admission, the patient's rights under RA 11036 (Mental Health Act). A patient cannot consent to what was not explained in a language they understand;</li>
<li><b>thought disorder</b>: loose associations, neologisms, tangential speech. You cannot rate what you cannot follow, and a second language hides formal thought disorder;</li>
<li><b>children, elderly patients with cognitive impairment, trauma disclosures</b>, or anything where a misunderstood word changes the plan.</li>
</ul>
<div class="ex"><b>Puwede po bang tumulong ang nurse na magsalin, para sigurado akong tama ang pagkakaintindi ko?</b><span>May the nurse help interpret, so I am sure I understand you correctly?</span></div>
<p>Good practice for a nurse-interpreted interview:</p>
<ul>
<li>Brief the nurse first: the purpose, that you want <b>everything</b> interpreted (not summarized), including swearing, tangents and silences.</li>
<li>Speak to the <b>patient</b>, in the first person, and keep looking at them. Short segments, one question at a time.</li>
<li>Ask the nurse to flag anything that does not translate ("the patient used a word for a spirit I cannot translate") rather than smoothing it over.</li>
<li>After the interview, ask the nurse what they noticed about speech, affect and wording. Document "interviewed with [role] interpreting"; never record the nurse's name as an informant.</li>
</ul>
<h3>3. Family members: helpers for history, not interpreters for the patient's own account</h3>
<p>Family give invaluable <a href="#/psych/s/collateral">collateral history</a>. But using a relative to interpret the patient's own words has predictable failures:</p>
<ul>
<li><b>Filtering by hiya</b>: relatives soften or omit suicidal thoughts, sexual content, substance use, and complaints about the family itself.</li>
<li><b>Answering for the patient</b>: "Okay naman siya, Dok" when the patient has not spoken.</li>
<li><b>Safety</b>: if the family member is the one the patient fears (violence, coercion, financial abuse), the patient will never say so through them. Always find a moment alone with the patient, using a nurse if needed.</li>
<li><b>Confidentiality</b>: the patient may not want the relative to hear the answer. Ask first.</li>
</ul>
<div class="ex"><b>Puwede po bang makausap ko muna siya nang mag-isa? Babalikan ko po kayo pagkatapos.</b><span>May I speak with him/her alone first? I will come back to you afterwards.</span></div>
<h3>4. Tools in this app for the gap in between</h3>
<ul>
<li><a href="#/psych/point">Point board (Ituro)</a>: when you understand the question but not the fast answer, turn the phone around and let the patient tap. The phone speaks the line and shows you the English. Useful for frequency, duration, severity and the common replies in each section; it is not a substitute for an interpreter in a risk assessment.</li>
<li><a href="#/psych/listen">Listening drill</a>: train the ear on real replies at natural speed, so you need the point board less.</li>
<li><a href="#/psych/mse-sheet">MSE interviewer sheet</a>: read the question off the page when your pronunciation fails you.</li>
</ul>
<h3>5. Rating scales: use the real translation when the score goes in the chart</h3>
<p>The PHQ-9 and MDQ in the <a href="#/psych/mood">Mood episode checker</a> are <b>paraphrased for training</b> so you learn to ask the items. When a score is documented, administer the published instrument: the PHQ-9 (Kroenke, Spitzer and Williams, 2001; free to use, with official translations including Filipino distributed through the PHQ screeners site) and the MDQ (Hirschfeld et al., 2000; © University of Texas Medical Branch, free for clinical and educational use; a screen, not a diagnosis). A paraphrased item is a different item, and the cut-offs no longer apply.</p>
<div class="note">Clinical tip: write down, in the patient's own Tagalog words, any line you did not fully understand and ask a nurse about it afterwards. These lines are often the idioms of distress that carry the diagnosis.</div>`,
  quiz: [
    ['A depressed patient mentions "pagod na ako sa buhay." You caught the words but are not sure of the weight. What next?', ['Note it as fatigue and move on', 'Ask the nurse to interpret and assess suicide risk directly', 'Ask the daughter what he meant'], 1, 'Risk is on the table: get a nurse to interpret and ask directly. The daughter may filter the answer.'],
    ['Which interview is reasonable to do alone with ward-level Tagalog?', ['Informed consent for admission', 'Follow-up of sleep, appetite and side effects in a known patient', 'Assessment of loose associations'], 1, 'Routine review questions with a known patient. Consent and thought disorder need an interpreter.'],
    ['When a nurse interprets, you should', ['speak to the nurse in the third person: "Ask him if…"', 'speak to the patient in the first person, in short segments', 'let the nurse summarize to save time'], 1, 'First person, to the patient, short segments; everything interpreted, not summarized.'],
    ['The point board is best used for', ['risk assessment instead of an interpreter', 'fast answers about frequency, duration, severity and common replies', 'documenting the patient\'s identity'], 1, 'It bridges a fast answer; it never replaces an interpreter for risk or consent, and it saves nothing.'],
    ['A PHQ-9 score for the chart should come from', ['the paraphrased items in the Mood episode checker', 'the published PHQ-9 in its official Filipino translation', 'your own translation on the spot'], 1, 'Paraphrased items are training wording; cut-offs apply only to the published instrument.']
  ]
},
/* ---- 3.7.0: six grammar lessons. Drafted by Claude, pending Dr. Navarro's review. ---- */
{
  id: 'demonstratives', level: 'A1', unit: 'Foundations', title: 'Ito, iyan, iyon: this, that, here, there',
  summary: 'Pointing words change with distance and with the marker they replace.',
  body: `
<p>Tagalog has three distances, not two: near me, near you, and far from both of us. Each one has an <b>ang</b> form, a <b>ng</b> form and a <b>sa</b> form, just like the markers.</p>
<table><tr><th></th><th>Near me</th><th>Near you</th><th>Far from both</th></tr>
<tr><td>ang form (this, that)</td><td><b>ito</b></td><td><b>iyan</b></td><td><b>iyon</b></td></tr>
<tr><td>ng form (of this, some of this)</td><td>nito</td><td>niyan</td><td>noon, niyon</td></tr>
<tr><td>sa form (here, there)</td><td><b>dito</b></td><td><b>diyan</b></td><td><b>doon</b></td></tr>
<tr><td>is here, is there</td><td>nandito</td><td>nandiyan</td><td>nandoon</td></tr>
<tr><td>like this, like that</td><td>ganito</td><td>ganiyan</td><td>ganoon</td></tr></table>
<div class="ex"><b>Ano ito?</b><span>What is this?</span></div>
<div class="ex"><b>Masakit ba iyan?</b><span>Does that hurt? (the spot you are touching)</span></div>
<div class="ex"><b>Sino iyon?</b><span>Who is that over there?</span></div>
<div class="ex"><b>Dito po kayo umupo.</b><span>Please sit here.</span></div>
<div class="ex"><b>Nandiyan ba ang nanay mo?</b><span>Is your mother there with you?</span></div>
<div class="ex"><b>Doon po ang botika.</b><span>The pharmacy is over there.</span></div>
<h3>With a noun</h3>
<p>The pointing word joins its noun with the linker <b>na</b> or <b>-ng</b>, before or after it.</p>
<div class="ex"><b>Ang gamot na ito ay para sa tulog.</b><span>This medicine is for sleep.</span></div>
<div class="ex"><b>Kailan nagsimula ang problemang iyan?</b><span>When did that problem start?</span></div>
<h3>Nasa and nasaan: where something is</h3>
<div class="ex"><b>Nasaan ang reseta?</b><span>Where is the prescription?</span></div>
<div class="ex"><b>Nasa ward ang pasyente.</b><span>The patient is in the ward.</span></div>
<div class="ex"><b>Nasa akin ang susi.</b><span>I have the key. (The key is with me.)</span></div>
<h3>Like this, like that</h3>
<div class="ex"><b>Ganito po ang pag-inom ng gamot.</b><span>This is how to take the medicine.</span></div>
<div class="ex"><b>Ganoon ba ang nararamdaman mo?</b><span>Is that how you feel?</span></div>
<h3>In fast speech</h3>
<ul>
<li>The first vowel drops: <i>'to</i>, <i>'yan</i>, <i>'yon</i>, <i>n'on</i>, <i>ganyan</i>, <i>gan'on</i>.</li>
<li>After a vowel, formal writing turns <b>d</b> into <b>r</b>: <i>dito → rito</i>, <i>doon → roon</i>. Everyday speech keeps the <b>d</b>.</li>
</ul>
<div class="note">Clinical tip: pointing words tell you where and when an experience is happening. <b>Naririnig mo ba iyon ngayon?</b> (Do you hear that now?) and <b>Nandito ba sila ngayon?</b> (Are they here now?) check for hallucinations in the room without leading the patient.</div>`,
  quiz: [
    ['"Please sit here."', ['Diyan po kayo umupo.', 'Dito po kayo umupo.', 'Doon po kayo umupo.'], 1, 'Dito = here, near the speaker.'],
    ['You point at the arm the patient is holding. Which word?', ['ito', 'iyan', 'iyon'], 1, 'Iyan = that, near the listener.'],
    ['"Nasaan ang gamot?" asks', ['what the medicine is', 'where the medicine is', 'whose medicine it is'], 1, 'Nasaan = where is.'],
    ['"Is that how you feel?"', ['Ganoon ba ang nararamdaman mo?', 'Doon ba ang nararamdaman mo?', 'Noon ba ang nararamdaman mo?'], 0, 'Ganoon = like that.']
  ]
},
{
  id: 'connectors', level: 'A2', unit: 'Natural speech', title: 'Connecting ideas: kasi, kaya, pero, kung, kapag',
  summary: 'The small words that turn short sentences into a story with causes and a timeline.',
  body: `
<table><tr><th>Word</th><th>Meaning</th></tr>
<tr><td><b>at</b>, <b>o</b></td><td>and, or</td></tr>
<tr><td><b>pero</b> (formal: ngunit, subalit)</td><td>but</td></tr>
<tr><td><b>kasi</b>, <b>dahil</b></td><td>because</td></tr>
<tr><td><b>kaya</b></td><td>so, that is why</td></tr>
<tr><td><b>kung</b></td><td>if; whether</td></tr>
<tr><td><b>kapag</b>, <b>pag</b></td><td>when, whenever</td></tr>
<tr><td><b>noong</b></td><td>when (once, in the past)</td></tr>
<tr><td><b>habang</b></td><td>while</td></tr>
<tr><td><b>bago</b>, <b>pagkatapos</b></td><td>before, after</td></tr>
<tr><td><b>hanggang</b></td><td>until</td></tr>
<tr><td><b>kahit</b></td><td>even though, even if</td></tr>
<tr><td><b>para</b></td><td>so that, in order to</td></tr></table>
<h3>Cause and result</h3>
<p><b>Kasi</b> and <b>dahil</b> introduce the cause. <b>Kaya</b> introduces the result.</p>
<div class="ex"><b>Hindi ako nakatulog kasi maingay.</b><span>I could not sleep because it was noisy.</span></div>
<div class="ex"><b>Maingay kagabi, kaya hindi ako nakatulog.</b><span>It was noisy last night, so I could not sleep.</span></div>
<div class="ex"><b>Gusto kong kumain pero wala akong gana.</b><span>I want to eat but I have no appetite.</span></div>
<div class="ex"><b>Kahit pagod siya, hindi siya makatulog.</b><span>Even though he is tired, he cannot sleep.</span></div>
<h3>If and when</h3>
<p><b>Kung</b> is for something uncertain. <b>Kapag</b> is for something expected or repeated. <b>Noong</b> is for one time in the past.</p>
<div class="ex"><b>Kung may tanong kayo, sabihin lang po ninyo.</b><span>If you have a question, just say so.</span></div>
<div class="ex"><b>Kapag umiinom siya, nagagalit siya.</b><span>When he drinks, he gets angry.</span></div>
<div class="ex"><b>Noong bata ako, masayahin ako.</b><span>When I was a child, I was cheerful.</span></div>
<h3>Order in time</h3>
<div class="ex"><b>Inumin po ninyo ang gamot bago matulog.</b><span>Take the medicine before going to sleep.</span></div>
<div class="ex"><b>Bumalik po kayo pagkatapos ng dalawang linggo.</b><span>Please come back after two weeks.</span></div>
<div class="ex"><b>Naririnig ko sila habang naliligo ako.</b><span>I hear them while I am bathing.</span></div>
<div class="ex"><b>Hindi siya kumain hanggang gabi.</b><span>He did not eat until night.</span></div>
<div class="note">Clinical tip: use these to build the timeline. <b>Ano ang nangyari bago iyon?</b> (What happened before that?) <b>At pagkatapos?</b> (And after?) An answer that opens with <b>Kasi...</b> means an explanation is coming: wait for it.</div>`,
  quiz: [
    ['"____ umiinom siya, nagagalit siya." (whenever he drinks)', ['Noong', 'Kapag', 'Kaya'], 1, 'Kapag = when, whenever: something repeated or expected.'],
    ['"Kaya" introduces', ['the cause', 'the result', 'a condition'], 1, 'Kasi and dahil give the cause; kaya gives the result.'],
    ['"Noong bata ako" means', ['If I were a child', 'Because I was a child', 'When I was a child'], 2, 'Noong = when, for one time in the past.'],
    ['"even though"', ['habang', 'hanggang', 'kahit'], 2, 'Kahit = even though, even if.']
  ]
},
{
  id: 'ability', level: 'B1', unit: 'Verbs', title: 'Maka- and ma-: able to, happened to, by accident',
  summary: 'One prefix says "can". The same prefix says "did not mean to". The difference matters on the ward.',
  body: `
<p><b>Maka-</b> (actor focus) and <b>ma-</b> (object focus) replace the ordinary affix when the action is something a person <b>is able to do</b>, <b>manages to do</b>, or <b>does without meaning to</b>.</p>
<table><tr><th></th><th>Base</th><th>Completed</th><th>Ongoing</th><th>Future</th></tr>
<tr><td>maka- (tulog)</td><td>makatulog</td><td>nakatulog</td><td>nakakatulog</td><td>makakatulog</td></tr>
<tr><td>ma- (kita)</td><td>makita</td><td>nakita</td><td>nakikita</td><td>makikita</td></tr></table>
<h3>Able to</h3>
<div class="ex"><b>Hindi ako makatulog.</b><span>I cannot sleep.</span></div>
<div class="ex"><b>Nakatulog ka ba kagabi?</b><span>Were you able to sleep last night?</span></div>
<div class="ex"><b>Nakakakain ka ba nang maayos?</b><span>Are you able to eat properly?</span></div>
<div class="ex"><b>Hindi na siya makapagtrabaho.</b><span>He can no longer work.</span></div>
<p>Verbs that normally take <b>mag-</b> use <b>makapag-</b>: <i>magtrabaho → makapagtrabaho</i>, <i>mag-isip → makapag-isip</i>.</p>
<h3>Not on purpose</h3>
<p>Compare the ordinary form (a plain or deliberate act) with the ma- or maka- form (it happened, or it was not meant).</p>
<div class="ex"><b>Binasag ko ang baso.</b><span>I broke the glass. (on purpose)</span></div>
<div class="ex"><b>Nabasag ko ang baso.</b><span>I broke the glass. (by accident)</span></div>
<div class="ex"><b>Sinaktan niya ang kapatid niya.</b><span>He hurt his sibling. (on purpose)</span></div>
<div class="ex"><b>Nasaktan niya ang kapatid niya.</b><span>He ended up hurting his sibling.</span></div>
<div class="ex"><b>Uminom siya ng maraming gamot.</b><span>He took a lot of medicine.</span></div>
<div class="ex"><b>Nakainom siya ng maraming gamot.</b><span>He ended up taking a lot of medicine.</span></div>
<h3>Things that come to you</h3>
<p>Seeing, hearing, remembering and feeling are not chosen, so these verbs are almost always in the ma- form: <i>nakikita, naririnig, naaalala, nakalimutan, naiisip, nararamdaman</i>.</p>
<div class="ex"><b>May naririnig ka bang hindi naririnig ng iba?</b><span>Do you hear things other people do not hear?</span></div>
<div class="ex"><b>Nakalimutan kong inumin ang gamot.</b><span>I forgot to take the medicine.</span></div>
<div class="note">Clinical tip: the verb form hints at intent but never settles it. Families often choose the softer ma- form out of hiya. When you hear <b>nakainom</b>, <b>nasaktan</b> or <b>nahulog</b>, ask directly: <b>Sinadya mo ba?</b> (Did you do it on purpose?) The reply <b>Hindi ko sinasadya</b> means "I did not mean to." Chart the patient's own words.</div>`,
  quiz: [
    ['"I cannot sleep."', ['Hindi ako natulog.', 'Hindi ako makatulog.', 'Hindi ako matutulog.'], 1, 'Makatulog = able to sleep. Natulog = slept; matutulog = will sleep.'],
    ['Which sentence says it was done on purpose?', ['Nabasag ko ang baso.', 'Binasag ko ang baso.'], 1, 'The -in- form is a deliberate act; na- is accidental.'],
    ['A relative says "Nakainom siya ng maraming gamot." What should you do?', ['Record it as an accident', 'Record it as intentional', 'Ask about intent directly'], 2, 'The form only hints. Ask: Sinadya mo ba?'],
    ['"Did you do it on purpose?"', ['Sinadya mo ba?', 'Nakaya mo ba?', 'Nasabi mo ba?'], 0, 'Sadya = intention; sinadya = did on purpose.']
  ]
},
{
  id: 'causative', level: 'B1', unit: 'Verbs', title: 'Magpa- and pa-: having something done',
  summary: 'Who did it, and who had it done? Pa- adds a second person to the action.',
  body: `
<p><b>Pa-</b> means "cause" or "let". With it, one person arranges the action and another carries it out.</p>
<h3>Magpa-: get something done for yourself</h3>
<table><tr><th>Base</th><th>Completed</th><th>Ongoing</th><th>Future</th></tr>
<tr><td>magpatingin</td><td>nagpatingin</td><td>nagpapatingin</td><td>magpapatingin</td></tr></table>
<div class="ex"><b>Nagpatingin ako sa doktor.</b><span>I saw a doctor. (I had a doctor check me.)</span></div>
<div class="ex"><b>Nagpagamot siya sa albularyo.</b><span>He sought treatment from a folk healer.</span></div>
<div class="ex"><b>Nagpabili ako ng gamot sa anak ko.</b><span>I had my child buy the medicine.</span></div>
<div class="ex"><b>Magpapakuha po kayo ng dugo bukas.</b><span>You will have your blood drawn tomorrow.</span></div>
<h3>Pa- with -in: the person made to act is the topic</h3>
<div class="ex"><b>Pinainom ko siya ng gamot.</b><span>I gave him the medicine to take.</span></div>
<div class="ex"><b>Pinakain mo na ba ang bata?</b><span>Have you fed the child?</span></div>
<div class="ex"><b>Patulugin muna natin siya.</b><span>Let us let him sleep first.</span></div>
<div class="ex"><b>Pinauwi na siya ng doktor.</b><span>The doctor has sent him home.</span></div>
<h3>Ipa-: the thing or person acted on is the topic</h3>
<div class="ex"><b>Ipakita mo sa akin ang reseta.</b><span>Show me the prescription.</span></div>
<div class="ex"><b>Ipaalam po ninyo sa nars.</b><span>Please let the nurse know.</span></div>
<div class="ex"><b>Ipatingin ninyo siya sa doktor.</b><span>Have a doctor see him.</span></div>
<h3>Pa- alone: a quick request</h3>
<div class="ex"><b>Patingin po.</b><span>Let me see, please.</span></div>
<div class="ex"><b>Patulong naman.</b><span>Help me, please.</span></div>
<div class="ex"><b>Pabili po ng tubig.</b><span>I would like to buy water, please.</span></div>
<div class="note">Clinical tip: listen for who took the action. <b>Uminom siya ng gamot</b> means he took it himself. <b>Pinainom siya ng gamot</b> means someone gave it to him. That difference is the adherence history. <b>Nagpatingin</b> also tells you the patient or family chose to seek care, and from whom.</div>`,
  quiz: [
    ['"Nagpatingin ako sa doktor" means', ['I examined the doctor.', 'I had a doctor check me.', 'The doctor looked for me.'], 1, 'Magpa- = have something done for yourself.'],
    ['In "Pinainom siya ng gamot", who swallowed the medicine?', ['The speaker', 'Siya, after someone gave it', 'Nobody yet'], 1, 'Pa- -in: siya was made to drink it by someone else.'],
    ['"Have you fed the child?"', ['Kumain ka na ba?', 'Pinakain mo na ba ang bata?', 'Kumakain ba ang bata?'], 1, 'Pakainin = to feed (cause to eat); completed: pinakain.'],
    ['"Patingin po."', ['Let me see, please.', 'Look at me.', 'I am being watched.'], 0, 'Pa- plus a root is a short, polite request.']
  ]
},
{
  id: 'requests', level: 'A2', unit: 'Everyday life', title: 'Asking and telling: paki-, nga, huwag',
  summary: 'Commands, polite requests and the softeners that keep an instruction from sounding like an order.',
  body: `
<h3>Commands use the base form</h3>
<p>Use the base (infinitive) form of the verb with <b>ka</b> or <b>kayo</b> for actor-focus verbs, and <b>mo</b> or <b>ninyo</b> for object-focus verbs.</p>
<div class="ex"><b>Umupo ka.</b><span>Sit down.</span></div>
<div class="ex"><b>Umupo po kayo.</b><span>Please sit down. (respectful)</span></div>
<div class="ex"><b>Inumin mo ito.</b><span>Drink this.</span></div>
<div class="ex"><b>Huminga po kayo nang malalim.</b><span>Please breathe deeply.</span></div>
<h3>Huwag: do not</h3>
<p><b>Huwag</b> is followed by the pronoun with a linker, then the base form.</p>
<div class="ex"><b>Huwag kang tumayo.</b><span>Do not stand up.</span></div>
<div class="ex"><b>Huwag po kayong mag-alala.</b><span>Please do not worry.</span></div>
<div class="ex"><b>Huwag mong inumin iyan.</b><span>Do not drink that.</span></div>
<h3>Paki-: please do this</h3>
<p><b>Paki-</b> plus a root is a polite request. The person asked is <b>mo</b> or <b>ninyo</b> and is often left out.</p>
<div class="ex"><b>Pakiulit po.</b><span>Please repeat that.</span></div>
<div class="ex"><b>Pakibagalan po ninyo.</b><span>Please say it more slowly.</span></div>
<div class="ex"><b>Pakisara po ang pinto.</b><span>Please close the door.</span></div>
<div class="ex"><b>Pakihintay po sandali.</b><span>Please wait a moment.</span></div>
<div class="ex"><b>Pakisulat po ang pangalan ninyo.</b><span>Please write your name.</span></div>
<h3>Maki-: may I share or join</h3>
<div class="ex"><b>Makikiraan po.</b><span>Excuse me, may I pass?</span></div>
<div class="ex"><b>Makikigamit po ng banyo.</b><span>May I use the bathroom?</span></div>
<h3>Softeners</h3>
<ul>
<li><b>nga</b>: a light "please, go on". <i>Tingnan mo nga ito.</i></li>
<li><b>muna</b>: first, for now. <i>Sandali muna.</i></li>
<li><b>puwede ba</b>, formal <b>maaari ba</b>: could you, may I.</li>
<li><b>tayo</b> in place of <b>ka</b>: "let us" in place of "you".</li>
</ul>
<div class="ex"><b>Puwede po bang humiga kayo?</b><span>Could you lie down, please?</span></div>
<div class="ex"><b>Maaari po bang malaman ang edad ninyo?</b><span>May I know your age?</span></div>
<div class="ex"><b>Umupo muna tayo.</b><span>Let us sit down first.</span></div>
<div class="ex"><b>Dahan-dahan lang po.</b><span>Slowly, take it easy.</span></div>
<div class="note">Clinical tip: with an agitated patient, keep instructions short, calm and positive, and prefer <b>tayo</b>. <b>Umupo muna tayo</b> invites; <b>Umupo ka</b> orders. Say what to do, not only what to stop.</div>`,
  quiz: [
    ['The polite way to say "Please repeat that."', ['Ulitin mo.', 'Pakiulit po.', 'Inulit po.'], 1, 'Paki- plus the root, with po.'],
    ['"Please do not worry." (respectful)', ['Hindi po kayo nag-aalala.', 'Wala po kayong alala.', 'Huwag po kayong mag-alala.'], 2, 'Huwag + pronoun with linker + base form.'],
    ['"Makikiraan po" is said when you', ['pass in front of or between people', 'ask someone to wait', 'ask for the bill'], 0, 'Maki- + daan: asking to share the way.'],
    ['Why does "Umupo muna tayo" sound softer than "Umupo ka"?', ['It is in the past', 'Tayo includes the speaker: let us', 'It is more formal Filipino'], 1, 'Tayo = we, including you. It turns an order into an invitation.']
  ]
},
{
  id: 'hedging', level: 'B1', unit: 'Natural speech', title: 'Daw, yata, baka, siguro, parang: how sure is the speaker?',
  summary: 'Small words that mark hearsay, doubt, guesses and wishes. They tell you whose claim it is and how firmly it is held.',
  body: `
<table><tr><th>Word</th><th>What it adds</th></tr>
<tr><td><b>daw</b>, <b>raw</b></td><td>Someone else said this; the speaker is passing it on. <i>Raw</i> after a vowel sound.</td></tr>
<tr><td><b>yata</b></td><td>I think so, but I am not sure.</td></tr>
<tr><td><b>baka</b></td><td>It might happen or be true, often with worry.</td></tr>
<tr><td><b>siguro</b></td><td>Probably, maybe. It does <u>not</u> mean "sure".</td></tr>
<tr><td><b>parang</b></td><td>It seems, as if.</td></tr>
<tr><td><b>pala</b></td><td>So it turns out: the speaker has just realized it.</td></tr>
<tr><td><b>sana</b></td><td>I hope; with a completed verb, I wish it had been so.</td></tr>
<tr><td><b>talaga</b>, <b>sigurado</b></td><td>Really; sure, certain.</td></tr></table>
<h3>Hearsay</h3>
<div class="ex"><b>May lason daw ang pagkain.</b><span>He says the food is poisoned.</span></div>
<div class="ex"><b>Hindi raw siya natutulog.</b><span>They say he does not sleep.</span></div>
<h3>Doubt and guessing</h3>
<div class="ex"><b>Tatlong araw na yata.</b><span>Three days now, I think.</span></div>
<div class="ex"><b>Baka bumalik ang mga boses.</b><span>The voices might come back.</span></div>
<div class="ex"><b>Siguro pagod lang ako.</b><span>Maybe I am just tired.</span></div>
<div class="ex"><b>Parang may sumusunod sa akin.</b><span>It is as if someone is following me.</span></div>
<h3>Realizing and hoping</h3>
<div class="ex"><b>May sakit pala siya.</b><span>So he is ill, it turns out.</span></div>
<div class="ex"><b>Sana gumaling na siya.</b><span>I hope he gets well soon.</span></div>
<div class="ex"><b>Sana hindi ko na lang sinabi.</b><span>I wish I had not said it.</span></div>
<div class="ex"><b>Sigurado ka ba?</b><span>Are you sure?</span></div>
<div class="note">Clinical tip: these words carry the level of conviction. <b>May sumusunod sa akin</b> is stated as fact; <b>Parang may sumusunod sa akin</b> leaves room for doubt. When a relative says <b>Sinusundan daw siya</b>, the relative is reporting the patient's claim, not agreeing with it: chart it as reported. To test conviction, ask <b>Sigurado ka ba, o parang ganoon lang?</b> (Are you sure, or does it only seem that way?)</div>`,
  quiz: [
    ['"Hindi raw siya kumakain." Who is the source?', ['The speaker saw it', 'Someone else said it', 'Nobody knows'], 1, 'Raw and daw mark reported speech.'],
    ['"Siguro" means', ['surely, certainly', 'probably, maybe', 'never'], 1, 'Siguro = maybe. Sigurado = sure.'],
    ['Which shows less conviction?', ['May sumusunod sa akin.', 'Parang may sumusunod sa akin.'], 1, 'Parang = as if, it seems.'],
    ['"I hope he gets well."', ['Baka gumaling siya.', 'Gumaling daw siya.', 'Sana gumaling na siya.'], 2, 'Sana = I hope.']
  ]
},
{
  id: 'enclitics', level: 'A2', unit: 'Natural speech', title: 'Where the short words go: ka, ko, na, pa, po, ba',
  summary: 'The short pronouns and particles sit right after the first word of the sentence, and they line up in a fixed order.',
  body: `
<p>Tagalog has a set of short, unstressed words that cannot start a sentence. They attach to the <b>first full word</b>: the verb, <i>hindi</i>, a question word or a describing word. Getting this order right is most of what makes a sentence sound natural.</p>
<h3>Rule 1: second position</h3>
<div class="ex"><b>Kumain ka na ba?</b><span>Have you eaten yet?</span></div>
<div class="ex"><b>Hindi pa po ako kumakain.</b><span>I have not eaten yet.</span></div>
<div class="ex"><b>Bakit ka pa gising?</b><span>Why are you still awake?</span></div>
<p>When <i>hindi</i> or a question word comes first, the short words move up to follow it, ahead of the verb.</p>
<h3>Rule 2: the order inside the group</h3>
<table><tr><th>Slot</th><th>Words</th></tr>
<tr><td>1</td><td>one-syllable pronouns: <b>ka, ko, mo</b></td></tr>
<tr><td>2</td><td><b>na</b> (already, now) or <b>pa</b> (still, yet)</td></tr>
<tr><td>3</td><td><b>nga, din / rin, lang</b></td></tr>
<tr><td>4</td><td><b>daw / raw</b></td></tr>
<tr><td>5</td><td><b>po</b></td></tr>
<tr><td>6</td><td><b>ba</b></td></tr>
<tr><td>7</td><td>two-syllable pronouns: <b>ako, siya, kami, tayo, kayo, sila, niya, namin, ninyo, nila</b></td></tr></table>
<div class="ex"><b>Kumain na po ba kayo?</b><span>Have you eaten yet? (respectful)</span></div>
<div class="ex"><b>Nainom mo na ba ang gamot mo?</b><span>Have you taken your medicine?</span></div>
<div class="ex"><b>Hindi ko pa po naiinom.</b><span>I have not taken it yet.</span></div>
<div class="ex"><b>Masakit pa rin po ba ang ulo ninyo?</b><span>Does your head still hurt?</span></div>
<div class="ex"><b>Ikaw lang ba ang nakakarinig niyan?</b><span>Are you the only one who hears that?</span></div>
<h3>Rule 3: ko + ka = kita</h3>
<p>"I ... you" is never <i>ko ka</i>. The two merge into <b>kita</b>.</p>
<div class="ex"><b>Tutulungan kita.</b><span>I will help you.</span></div>
<div class="ex"><b>Naiintindihan kita.</b><span>I understand you.</span></div>
<div class="note">Clinical tip: the answer to a <b>na ba</b> question mirrors it. <b>Kumain ka na ba?</b> gets <b>Oo, kumain na ako</b> or <b>Hindi pa</b>. A bare <b>Hindi pa</b> means "not yet", so follow it up: since when? Practice this order in the Build the sentence drill.</div>`,
  quiz: [
    ['Which order is natural?', ['Kumain na ka ba?', 'Kumain ka na ba?', 'Ka kumain na ba?'], 1, 'One-syllable pronoun first, then na, then ba.'],
    ['"I have not eaten yet." (respectful)', ['Hindi ako pa po kumakain.', 'Hindi pa po ako kumakain.', 'Hindi po ako pa kumakain.'], 1, 'After hindi: pa, po, then the two-syllable pronoun ako.'],
    ['"I will help you."', ['Tutulungan ko ka.', 'Tutulungan kita.', 'Tutulungan ka ko.'], 1, 'Ko + ka becomes kita.'],
    ['Respectful: "Have you been able to sleep?"', ['Nakatulog na po ba kayo?', 'Nakatulog kayo na ba po?', 'Nakatulog ba na po kayo?'], 0, 'Na, po, ba, then kayo.']
  ]
},
{
  id: 'time-words', level: 'A2', unit: 'Everyday life', title: 'Time words: kanina, mamaya, tuwing, simula noong',
  summary: 'When it started, how long it has lasted and how often it happens: the words every history needs.',
  body: `
<table><tr><th>Word</th><th>Meaning</th></tr>
<tr><td><b>kanina</b>, kaninang umaga</td><td>earlier today; earlier this morning</td></tr>
<tr><td><b>mamaya</b>, mamayang gabi</td><td>later today; later tonight</td></tr>
<tr><td><b>kagabi</b>, <b>kahapon</b>, <b>kamakalawa</b></td><td>last night; yesterday; the day before yesterday</td></tr>
<tr><td><b>bukas</b>, <b>sa makalawa</b></td><td>tomorrow; the day after tomorrow</td></tr>
<tr><td><b>noong</b> Lunes, noong isang linggo</td><td>last Monday; last week (past)</td></tr>
<tr><td><b>sa</b> Lunes, sa susunod na linggo</td><td>this coming Monday; next week (future)</td></tr>
<tr><td><b>tuwing</b> gabi; araw-araw, gabi-gabi</td><td>every night; every day, every night</td></tr>
<tr><td><b>simula noong</b>, mula noong</td><td>since</td></tr>
<tr><td><b>hanggang</b>, hanggang ngayon</td><td>until; until now</td></tr>
<tr><td><b>ilang beses</b>, isang beses, dalawang beses</td><td>how many times; once; twice</td></tr>
<tr><td><b>gaano katagal</b>, <b>gaano kadalas</b></td><td>how long; how often</td></tr>
<tr><td>lagi, madalas, paminsan-minsan, bihira</td><td>always, often, now and then, rarely</td></tr></table>
<h3>When did it start?</h3>
<div class="ex"><b>Kailan po ito nagsimula?</b><span>When did this start?</span></div>
<div class="ex"><b>Simula noong namatay ang asawa ko.</b><span>Since my spouse died.</span></div>
<div class="ex"><b>Kaninang umaga lang po.</b><span>Only this morning.</span></div>
<h3>How long?</h3>
<div class="ex"><b>Gaano na po katagal?</b><span>How long has it been?</span></div>
<div class="ex"><b>Dalawang linggo na po akong hindi makatulog.</b><span>I have not been able to sleep for two weeks now.</span></div>
<div class="ex"><b>Hanggang ngayon, malungkot pa rin ako.</b><span>Until now, I am still sad.</span></div>
<h3>How often?</h3>
<div class="ex"><b>Gaano po kadalas ninyo itong naririnig?</b><span>How often do you hear it?</span></div>
<div class="ex"><b>Tuwing gabi ko po naririnig ang mga boses.</b><span>I hear the voices every night.</span></div>
<div class="ex"><b>Ilang beses po sa isang araw?</b><span>How many times a day?</span></div>
<div class="ex"><b>Paminsan-minsan lang po.</b><span>Only now and then.</span></div>
<div class="note">Clinical tip: a length of time plus <b>na</b> means "it has been": <b>Tatlong buwan na</b>. With <b>pa lang</b> it means "only so far": <b>Dalawang araw pa lang</b>. <b>Mga</b> before a number means "about": <b>mga isang taon na</b>. <b>Matagal na</b> is "for a long time" and needs a follow-up question; <b>kamakailan lang</b> is "just recently". The same day name is past with <b>noong</b> and future with <b>sa</b>.</div>`,
  quiz: [
    ['"Kanina" means', ['later today', 'earlier today', 'yesterday'], 1, 'Kanina = earlier today. Mamaya = later today.'],
    ['"Tuwing gabi" means', ['tonight only', 'every night', 'last night'], 1, 'Tuwing = every, whenever.'],
    ['"Last Monday"', ['sa Lunes', 'noong Lunes', 'tuwing Lunes'], 1, 'Noong marks the past; sa Lunes is the coming Monday.'],
    ['"Dalawang linggo na."', ['In two weeks.', 'It has been two weeks.', 'Twice a week.'], 1, 'A length of time + na = it has been that long.']
  ]
},
{
  id: 'intensifiers', level: 'A2', unit: 'Everyday life', title: 'How much? Medyo, sobra, napaka-, and doubling',
  summary: 'Ways to say a little, very, too and extremely. Patients grade their symptoms with these words.',
  body: `
<table><tr><th>Pattern</th><th>Strength</th><th>Example</th></tr>
<tr><td><b>medyo</b> + describing word</td><td>somewhat</td><td>medyo malungkot</td></tr>
<tr><td><b>hindi gaano</b>, <b>hindi masyado</b></td><td>not very</td><td>hindi gaanong masakit</td></tr>
<tr><td><b>masyado</b></td><td>too, overly</td><td>masyadong maingay</td></tr>
<tr><td><b>sobra</b>, <b>sobrang</b> + root</td><td>extremely</td><td>sobrang lungkot</td></tr>
<tr><td><b>napaka-</b> + root</td><td>very, extremely</td><td>napakasakit</td></tr>
<tr><td><b>ang</b> + root</td><td>how ...! so ...!</td><td>Ang sakit!</td></tr>
<tr><td>word + <b>na</b> or <b>-ng</b> + same word</td><td>completely</td><td>pagod na pagod, galit na galit</td></tr></table>
<h3>A little</h3>
<div class="ex"><b>Medyo nahihilo po ako.</b><span>I am a bit dizzy.</span></div>
<div class="ex"><b>Hindi naman po gaanong masakit.</b><span>It does not hurt that much.</span></div>
<h3>A lot</h3>
<div class="ex"><b>Napakasakit po ng ulo ko.</b><span>My head hurts terribly.</span></div>
<div class="ex"><b>Ang sakit ng tiyan ko!</b><span>My stomach hurts so much!</span></div>
<div class="ex"><b>Sobrang ingay ng mga boses.</b><span>The voices are extremely loud.</span></div>
<div class="ex"><b>Masyadong mabilis ang isip ko.</b><span>My mind is going too fast.</span></div>
<h3>Doubling</h3>
<div class="ex"><b>Pagod na pagod na po ako.</b><span>I am completely exhausted.</span></div>
<div class="ex"><b>Takot na takot siya kagabi.</b><span>He was terrified last night.</span></div>
<div class="ex"><b>Galit na galit ang tatay niya.</b><span>His father is furious.</span></div>
<p>After <b>napaka-</b>, <b>ang</b> + root and <b>sobrang</b> + root, the thing described takes <b>ng</b>, not <i>ang</i>: <b>Napakasakit ng ulo ko</b>.</p>
<div class="note">Clinical tip: use these as a spoken severity scale. Ask <b>Medyo lang ba, o sobra?</b> (Only a little, or a lot?). Listen to doubling: <b>pagod na pagod na ako</b> is stronger than <b>pagod ako</b>, and <b>Pagod na pagod na ako sa buhay</b> (I am so tired of life) is a cue to ask about thoughts of death.</div>`,
  quiz: [
    ['Which is strongest?', ['Medyo malungkot ako.', 'Malungkot ako.', 'Napakalungkot ko.'], 2, 'Napaka- = very, extremely.'],
    ['"Napakasakit ____ tiyan ko."', ['ang', 'ng', 'sa'], 1, 'After napaka-, the thing described takes ng.'],
    ['"Pagod na pagod" means', ['a little tired', 'completely exhausted', 'tired again'], 1, 'Doubling with na intensifies.'],
    ['"Masyadong maingay" means', ['too noisy', 'a bit noisy', 'not noisy'], 0, 'Masyado = too, overly.']
  ]
},
{
  id: 'focus-an-i', level: 'B1', unit: 'Verbs', title: 'Three more focuses: place, beneficiary, instrument',
  summary: 'With -an, i- and ipang- the topic of the sentence is the place or person reached, the one who benefits, or the thing used.',
  body: `
<p>The focus lesson covered the doer (<b>-um-, mag-</b>) and the thing acted on (<b>-in</b>). Three more affixes put other parts of the event in the <b>ang</b> slot. One root shows them all:</p>
<table><tr><th>Verb</th><th>The ang-phrase is</th><th>Meaning</th></tr>
<tr><td><b>bumili</b></td><td>the buyer</td><td>to buy</td></tr>
<tr><td><b>bilhin</b></td><td>the thing bought</td><td>to buy (it)</td></tr>
<tr><td><b>bilhan</b></td><td>the seller, or the person bought for</td><td>to buy from; to buy for</td></tr>
<tr><td><b>ibili</b></td><td>the person bought for</td><td>to buy for</td></tr>
<tr><td><b>ipambili</b></td><td>the money used</td><td>to use for buying</td></tr></table>
<h3>-an: the place or person the action reaches</h3>
<div class="ex"><b>Binigyan ng nars ng gamot ang pasyente.</b><span>The nurse gave the patient medicine.</span></div>
<div class="ex"><b>Pupuntahan ko po kayo mamaya.</b><span>I will come to you later.</span></div>
<div class="ex"><b>Tinawagan namin ang pamilya.</b><span>We called the family.</span></div>
<div class="ex"><b>Hugasan mo ang kamay mo.</b><span>Wash your hands.</span></div>
<h3>i- and ipag-: for someone</h3>
<div class="ex"><b>Ibili mo ako ng tubig.</b><span>Buy me some water.</span></div>
<div class="ex"><b>Ipinagluto siya ng nanay niya.</b><span>His mother cooked for him.</span></div>
<div class="ex"><b>Ipagdarasal ko po kayo.</b><span>I will pray for you.</span></div>
<p>In everyday speech <b>-an</b> often does this job too: <b>Binilhan ko siya ng gamot</b> (I bought medicine for him).</p>
<h3>ipang-, ipam-, ipan-: the thing used</h3>
<div class="ex"><b>Ipinambili niya ng alak ang pera.</b><span>He used the money to buy liquor.</span></div>
<div class="ex"><b>Ipambayad mo ito sa pamasahe.</b><span>Use this to pay the fare.</span></div>
<p>The noun form is <b>pang-</b>: <b>pampatulog</b> (something for sleeping), <b>pambayad</b> (something to pay with).</p>
<div class="note">Clinical tip: find the <b>ang</b>-phrase first, then read the affix. In <b>Binigyan ako ng gamot</b> the speaker received the medicine. In <b>Sinaktan siya ng asawa niya</b> the person hurt is <i>siya</i> and the one who did it is the spouse. Reading these the wrong way round reverses the history.</div>`,
  quiz: [
    ['"Binigyan ng nars ng gamot ang pasyente." Who received something?', ['The nurse', 'The patient', 'Nobody'], 1, 'With -an the ang-phrase (ang pasyente) is the one the action reaches.'],
    ['"Buy me some water."', ['Bumili ako ng tubig.', 'Ibili mo ako ng tubig.', 'Binili ko ang tubig.'], 1, 'Ibili: the ang-form ako is the one it is bought for.'],
    ['"Ipinambili niya ng alak ang pera." The money was', ['what he bought', 'what he used to buy', 'who he bought for'], 1, 'Ipang- puts the thing used in the ang slot.'],
    ['"Tinawagan namin ang pamilya."', ['The family called us.', 'We called the family.', 'We are the family.'], 1, 'Namin is the doer; ang pamilya is the one reached.']
  ]
},
{
  id: 'nominalising', level: 'B1', unit: 'Verbs', title: 'Making nouns: pag-, ka- -an, pagka-',
  summary: 'Turn a verb or a describing word into a noun: sleeping, sadness, the death of. These are the nouns you ask about.',
  body: `
<table><tr><th>Pattern</th><th>Makes</th><th>Examples</th></tr>
<tr><td><b>pag-</b> + root</td><td>the act (from -um- and ma- verbs)</td><td>pagtulog, pagkain, pag-inom, pag-iyak</td></tr>
<tr><td><b>pag-</b> + doubled first syllable + root</td><td>the act (from mag- verbs)</td><td>pagluluto, pagtatrabaho, pag-aaral, pagsusugal</td></tr>
<tr><td><b>ka-</b> root <b>-an</b></td><td>a quality or state</td><td>kalungkutan, kalusugan, kahirapan, katahimikan</td></tr>
<tr><td><b>pagka-</b> + root</td><td>the event or state of</td><td>pagkamatay, pagkawala, pagkabalisa</td></tr>
<tr><td>root + <b>-an</b></td><td>the place for it</td><td>tulugan, kainan, hintayan</td></tr></table>
<h3>pag-: the act of doing</h3>
<div class="ex"><b>Kumusta po ang pagtulog ninyo?</b><span>How is your sleep?</span></div>
<div class="ex"><b>Kumusta ang pagkain niya?</b><span>How is his eating?</span></div>
<div class="ex"><b>Nakakatulong po ba ang pag-inom ng gamot?</b><span>Does taking the medicine help?</span></div>
<div class="ex"><b>Ang pagsusugal ang problema niya.</b><span>Gambling is his problem.</span></div>
<p><b>Pagkain</b> means both "eating" and "food"; the sentence tells you which.</p>
<h3>ka- -an: a quality or state</h3>
<div class="ex"><b>Matindi ang kalungkutan niya.</b><span>His sadness is intense.</span></div>
<div class="ex"><b>Mahalaga ang kalusugan ng isip.</b><span>Mental health is important.</span></div>
<h3>pagka-: the event, and "right after"</h3>
<div class="ex"><b>Nagsimula ito pagkamatay ng anak niya.</b><span>It started after the death of his child.</span></div>
<div class="ex"><b>Inumin po ito pagkakain.</b><span>Take this after eating.</span></div>
<div class="ex"><b>Pagkagising ko, mabigat na ang pakiramdam ko.</b><span>As soon as I wake up, I already feel heavy.</span></div>
<div class="note">Clinical tip: <b>Kumusta ang ...?</b> plus a pag- noun is the quickest open question: <b>pagtulog</b>, <b>pagkain</b>, <b>pag-inom ng gamot</b>, <b>pagtatrabaho</b>, <b>pag-aaral</b>. In medication instructions, <b>pagkakain</b> or <b>pagkatapos kumain</b> is after eating and <b>bago kumain</b> is before.</div>`,
  quiz: [
    ['The noun "sleeping, sleep" from matulog', ['pagtulog', 'katulugan', 'tulugin'], 0, 'Pag- + root.'],
    ['The noun "cooking" from magluto', ['pagluto', 'pagluluto', 'kalutuan'], 1, 'From a mag- verb, the first syllable of the root is doubled.'],
    ['"Kalungkutan" is', ['sad', 'sadness', 'to make sad'], 1, 'Ka- -an makes the quality or state.'],
    ['"Inumin ito pagkakain."', ['Take this before eating.', 'Take this after eating.', 'Take this instead of eating.'], 1, 'Pagka- + verb root = right after.']
  ]
},
{
  id: 'recent-past', level: 'B1', unit: 'Verbs', title: 'Kaka-: it only just happened',
  summary: 'The recently completed form says an action was finished a moment ago. The doer takes ko, mo, niya or ng.',
  body: `
<p>To say something <b>has just</b> happened, Tagalog has its own verb form, almost always followed by <b>lang</b>. The textbook form is <b>ka-</b> + the doubled first syllable of the root. In everyday speech most people simply say <b>kaka-</b> + root.</p>
<table><tr><th>Root</th><th>Textbook</th><th>Everyday</th><th>Meaning</th></tr>
<tr><td>kain</td><td>kakakain</td><td>kakakain</td><td>just ate</td></tr>
<tr><td>gising</td><td>kagigising</td><td>kakagising</td><td>just woke up</td></tr>
<tr><td>dating</td><td>kararating</td><td>kakarating</td><td>just arrived</td></tr>
<tr><td>alis</td><td>kaaalis</td><td>kakaalis</td><td>just left</td></tr>
<tr><td>inom</td><td>kaiinom</td><td>kakainom</td><td>just drank, just took</td></tr>
<tr><td>tulog</td><td>katutulog</td><td>kakatulog</td><td>just fell asleep</td></tr></table>
<h3>The doer is not in the ang form</h3>
<p>This form has no topic. The doer takes <b>ko, mo, niya, namin, nila</b> or <b>ng</b>, and so does the thing acted on.</p>
<div class="ex"><b>Kakakain ko lang po.</b><span>I just ate.</span></div>
<div class="ex"><b>Kakagising lang niya.</b><span>He just woke up.</span></div>
<div class="ex"><b>Kararating lang po ng doktor.</b><span>The doctor has just arrived.</span></div>
<div class="ex"><b>Kakainom ko lang ng gamot.</b><span>I just took my medicine.</span></div>
<div class="ex"><b>Kakatulog lang ng pasyente.</b><span>The patient has just fallen asleep.</span></div>
<div class="ex"><b>Kakalabas lang niya sa ospital.</b><span>He was only just discharged from the hospital.</span></div>
<h3>Compare</h3>
<div class="ex"><b>Kumain na ako.</b><span>I have already eaten.</span></div>
<div class="ex"><b>Kakakain ko lang.</b><span>I only just ate.</span></div>
<div class="note">Clinical tip: this form dates an event to the last hours or days, which is often the whole point. <b>Kakahinto lang niya sa pag-inom ng alak</b> (he has only just stopped drinking) puts the patient inside the withdrawal window. <b>Kapapanganak lang niya</b> or <b>Kakapanganak lang niya</b> (she has just given birth) points to the postpartum period. Ask <b>Kailan po eksakto?</b> (When exactly?) to pin it down.</div>`,
  quiz: [
    ['"Kakakain ko lang."', ['I am about to eat.', 'I just ate.', 'I always eat.'], 1, 'Kaka- = only just done.'],
    ['"Kakagising lang ____." (I just woke up)', ['ako', 'ko', 'akin'], 1, 'The doer takes the ko form, not ako.'],
    ['"Kararating lang ng doktor."', ['The doctor is coming soon.', 'The doctor has just arrived.', 'The doctor has left.'], 1, 'Ka- + doubled syllable of dating; d becomes r.'],
    ['Why does "Kakahinto lang niya sa pag-inom ng alak" matter?', ['Withdrawal may still be ahead', 'He has never drunk alcohol', 'He is drinking right now'], 0, 'He has only just stopped, so watch for withdrawal.']
  ]
}
];
