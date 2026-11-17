/* Picture lessons (3.10.0): ten grammar lessons built around the picture sets (js/data/picture-sets-*.js).
   DRAFT FOR REVIEW by Dr. Navarro (native speaker). Same shape as js/data/lessons.js:
   { id, level, unit: 'Picture lessons', title, summary, body: HTML, quiz: [[q, [4 options], correctIdx, explanation]] }.
   A body may show a picture: <div class="pic-embed" data-pic="<set id>"></div> (mounted by App.mountPics in js/views.js).
   Lesson ids are permanent (progress and links use them). */
window.NEW_LESSONS = [];
window.NEW_LESSONS = (window.NEW_LESSONS || []).concat([
  {
    id: 'pic-nasaan', level: 'A1', unit: 'Picture lessons',
    title: 'Nasaan? Where things are',
    summary: 'Ask where something is with nasaan, answer with nasa plus a position word and ng, and point with nandito, nandiyan, nandoon.',
    body: `
<p>To ask where a thing or a person is, use <b>Nasaan</b> and the <b>ang</b> phrase. To answer, use <b>nasa</b> ("is at"). For an exact spot, put a position word after <b>nasa</b> and join it to the object with <b>ng</b>: <i>nasa ilalim ng mesa</i>, under the table.</p>
<div class="ex"><b>Nasaan ang bola?</b><span>Where is the ball?</span></div>
<div class="ex"><b>Nasa ilalim ng mesa ang bola.</b><span>The ball is under the table.</span></div>
<h3>The position words</h3>
<p>Tap the picture to hear each one. Every pin is one position.</p>
<div class="pic-embed" data-pic="positions"></div>
<table><tr><th>Position word</th><th>Meaning</th><th>In the picture</th></tr>
<tr><td><b>sa ibabaw ng</b></td><td>on, on top of</td><td>the cat on the table</td></tr>
<tr><td><b>sa ilalim ng</b></td><td>under</td><td>the ball under the table</td></tr>
<tr><td><b>sa loob ng</b></td><td>in, inside</td><td>the apples in the big box</td></tr>
<tr><td><b>sa labas ng</b></td><td>outside</td><td>the bird outside the window</td></tr>
<tr><td><b>sa harap ng</b></td><td>in front of</td><td>the bag in front of the big box</td></tr>
<tr><td><b>sa likod ng</b></td><td>behind</td><td>the dog behind the big box</td></tr>
<tr><td><b>sa tabi ng</b></td><td>next to</td><td>the small box next to the big box</td></tr>
<tr><td><b>sa kaliwa / kanan ng</b></td><td>left / right of</td><td>the cup and the book beside the clock</td></tr>
<tr><td><b>sa pagitan ng ... at ...</b></td><td>between</td><td>the clock between the cup and the book</td></tr>
<tr><td><b>sa gitna ng</b></td><td>in the middle of</td><td>the middle of a room or a line</td></tr></table>
<div class="ex"><b>Nasa ibabaw ng mesa ang pusa.</b><span>The cat is on the table.</span></div>
<div class="ex"><b>Nasa loob ng malaking kahon ang mga mansanas.</b><span>The apples are inside the big box.</span></div>
<div class="ex"><b>Nasa likod ng malaking kahon ang aso.</b><span>The dog is behind the big box.</span></div>
<div class="ex"><b>Nasa harap ng malaking kahon ang bag.</b><span>The bag is in front of the big box.</span></div>
<div class="ex"><b>Nasa pagitan ng tasa at libro ang orasan.</b><span>The clock is between the cup and the book.</span></div>
<div class="ex"><b>Nasa labas ng bintana ang ibon.</b><span>The bird is outside the window.</span></div>
<p>The answer can also start with the thing: <i>Ang pusa, nasa ibabaw ng mesa.</i> In a quick reply, drop the thing altogether: <i>Nasa ilalim po ng mesa.</i></p>
<h3>In a room</h3>
<p>Now tap the living room and ask where each thing is.</p>
<div class="pic-embed" data-pic="living-room"></div>
<div class="ex"><b>Nasaan ang baso?</b><span>Where is the glass?</span></div>
<div class="ex"><b>Nasa ibabaw po ng mesa, sa tabi ng diyaryo.</b><span>On the table, next to the newspaper.</span></div>
<div class="ex"><b>Nasa harap ng sopa ang mesa.</b><span>The table is in front of the sofa.</span></div>
<div class="ex"><b>Nasa pagitan ng bintana at larawan ang orasan.</b><span>The clock is between the window and the picture.</span></div>
<div class="ex"><b>Nasa kaliwa ng sopa ang estante.</b><span>The bookshelf is to the left of the sofa.</span></div>
<h3>Here, there, over there</h3>
<p>When you can point, use the "is here" words from <a href="#/lessons/demonstratives">Ito, iyan, iyon</a>: <b>nandito</b> (here, near me), <b>nandiyan</b> (there, near you), <b>nandoon</b> (over there, away from us both). Everyday speech shortens them to <i>andito, andiyan, andoon</i>.</p>
<div class="ex"><b>Nandito po ang upuan.</b><span>The chair is here.</span></div>
<div class="ex"><b>Nandiyan po ba ang diyaryo?</b><span>Is the newspaper there (near you)?</span></div>
<div class="ex"><b>Nandoon po ang pinto, sa kanan.</b><span>The door is over there, on the right.</span></div>
<div class="note">Common trap: the position word is a noun, so it needs <b>ng</b> before the object. Say <i>nasa ilalim <b>ng</b> mesa</i>, not <i>nasa ilalim mesa</i>. And <b>nasa</b> already contains <b>sa</b>: never say <i>nasa sa</i>.</div>
<h3>With people: na kay, nasa akin</h3>
<p><b>Nasa</b> goes before a thing or a place. Before a person's name or a title like Ate, the standard form is <b>na kay</b> (written as two words), or just <b>kay</b>. You will hear <i>nasa kay</i> in fast speech, but do not write it. With a pronoun, use <b>nasa</b> + the sa form: <b>nasa akin</b>, <b>nasa iyo</b>, <b>nasa kanya</b>, <b>nasa inyo</b>.</p>
<div class="ex"><b>Na kay Ate ang susi.</b><span>Ate has the key. (The key is with Ate.)</span></div>
<div class="ex"><b>Nasa akin po ang susi.</b><span>I have the key.</span></div>
<h3>On the ward</h3>
<div class="ex"><b>Nasaan po ang salamin ninyo?</b><span>Where are your glasses?</span></div>
<div class="ex"><b>Nasa loob po ng bag ang mga gamit ninyo.</b><span>Your things are inside the bag.</span></div>
<div class="ex"><b>Nandito lang po ako sa labas ng pinto.</b><span>I am just here outside the door.</span></div>
<p>Asking "where" is also an orientation question: <i>Nasaan po tayo ngayon?</i> (Where are we now?) checks whether a patient knows the place.</p>
`,
    quiz: [
      ['"The ball is under the table."', ['Nasa ibabaw ng mesa ang bola.', 'Nasa ilalim mesa ang bola.', 'Nasa ilalim ng mesa ang bola.', 'Nasa sa ilalim ng mesa ang bola.'], 2, 'Nasa + ilalim + ng + the object. The position word needs ng, and nasa already contains sa.'],
      ['In the positions picture, where is the dog?', ['Nasa likod ng malaking kahon.', 'Nasa loob ng malaking kahon.', 'Nasa harap ng malaking kahon.', 'Nasa ibabaw ng mesa.'], 0, 'The dog is behind the big box: sa likod ng. The bag is the one in front (sa harap ng).'],
      ['"Nasa pagitan ng tasa at libro ang orasan" means', ['The cup is next to the book.', 'The clock is between the cup and the book.', 'The book is to the right of the clock.', 'The clock is on top of the book.'], 1, 'Sa pagitan ng X at Y = between X and Y. Ang orasan is the thing being placed.'],
      ['A patient asks where the door is. It is far from both of you. You say:', ['Nandito po ang pinto.', 'Nandiyan po ang pinto.', 'Ito po ang pinto.', 'Nandoon po ang pinto.'], 3, 'Nandoon = over there, away from both speaker and listener. Nandito is near me, nandiyan near you.'],
      ['"Ate has the key." Which is the standard written form?', ['Nasa Ate ang susi.', 'Nasa sa Ate ang susi.', 'Na kay Ate ang susi.', 'Nasaan Ate ang susi.'], 2, 'Before a person\'s name or title, use na kay (or just kay). Nasa is for things and places; with a pronoun it is nasa akin, nasa kanya.']
    ]
  },
  {
    id: 'pic-masakit', level: 'A1', unit: 'Picture lessons',
    title: 'Masakit ang ulo ko: saying where it hurts',
    summary: 'Name the part of the body with Masakit ang ... ko, ask Saan po masakit? and Kailan pa po?, and describe the feeling: makirot, mahapdi, namamaga, manhid, makati.',
    body: `
<p>The basic pain sentence is <b>Masakit + ang + body part + ko</b>. <b>Masakit</b> (painful) comes first, the body part is the <b>ang</b> phrase, and <b>ko</b> (my) follows it. Talking about the patient, use <b>ninyo</b> (your, respectful), <b>niya</b> (his, her) or <b>mo</b> (your, familiar).</p>
<div class="ex"><b>Masakit po ang ulo ko.</b><span>My head hurts.</span></div>
<div class="ex"><b>Masakit po ba ang tiyan ninyo?</b><span>Does your stomach hurt?</span></div>
<div class="ex"><b>Masakit daw po ang tuhod niya.</b><span>She says her knee hurts.</span></div>
<p>Often the verb <b>sumasakit</b> (keeps hurting, starts to hurt) is used, and it can say when: <i>Sumasakit po ang tuhod ko kapag umaakyat ako sa hagdan.</i></p>
<h3>The body words</h3>
<p>Tap the picture to hear each part. These are the words a patient will use.</p>
<div class="pic-embed" data-pic="body-front"></div>
<div class="ex"><b>Masakit po ang leeg ko kapag lumilingon ako.</b><span>My neck hurts when I turn my head.</span></div>
<div class="ex"><b>Masakit po ang balikat ko.</b><span>My shoulder hurts.</span></div>
<div class="ex"><b>Kumakabog po ang dibdib ko.</b><span>My heart is pounding in my chest.</span></div>
<p>The face has its own set. Tap it too.</p>
<div class="pic-embed" data-pic="face"></div>
<div class="ex"><b>Masakit po ang lalamunan ko kapag lumulunok ako.</b><span>My throat hurts when I swallow.</span></div>
<div class="ex"><b>Masakit po ang kaliwang tainga ko.</b><span>My left ear hurts.</span></div>
<h3>Asking where and since when</h3>
<p><b>Saan po masakit?</b> asks where. Patients often answer by pointing and saying <b>dito</b> (here) or <b>dito banda</b> / <b>banda rito</b> (around here). Ask them to point: <b>Pakituro po.</b></p>
<div class="ex"><b>Saan po masakit? Pakituro po.</b><span>Where does it hurt? Please point to it.</span></div>
<div class="ex"><b>Dito po banda, sa tiyan.</b><span>Around here, in the stomach.</span></div>
<p><b>Kailan pa po?</b> asks since when. The answer takes <b>pa</b> too: <i>kahapon pa</i>, since yesterday.</p>
<div class="ex"><b>Kailan pa po sumasakit ang ulo ninyo?</b><span>Since when has your head been hurting?</span></div>
<div class="ex"><b>Kaninang umaga pa po.</b><span>Since this morning.</span></div>
<h3>What kind of feeling</h3>
<table><tr><th>Word</th><th>Meaning</th><th>Typical part</th></tr>
<tr><td><b>makirot</b></td><td>sharp and sore</td><td>a tooth, a wound</td></tr>
<tr><td><b>mahapdi</b></td><td>stinging, burning</td><td>eyes, throat, a cut</td></tr>
<tr><td><b>namamaga</b></td><td>swollen</td><td>a knee, a foot</td></tr>
<tr><td><b>manhid, namamanhid</b></td><td>numb</td><td>a hand, a foot</td></tr>
<tr><td><b>makati</b></td><td>itchy</td><td>skin, eyes</td></tr></table>
<p>They go in the same slot as <b>masakit</b>.</p>
<div class="ex"><b>Makirot po ang ngipin ko.</b><span>My tooth aches sharply.</span></div>
<div class="ex"><b>Mahapdi po ang lalamunan ko.</b><span>My throat stings.</span></div>
<div class="ex"><b>Namamaga po ang paa ni Lola.</b><span>Grandma's foot is swollen.</span></div>
<div class="ex"><b>Namamanhid po ang kamay ko.</b><span>My hand is going numb.</span></div>
<div class="ex"><b>Makati po ang mata ko.</b><span>My eyes are itchy.</span></div>
<div class="note">Common trap: <b>sakit</b> alone is a noun (pain, illness), and <b>may sakit</b> means "is sick". So <i>May sakit po ako</i> is "I am sick", while <i>Masakit po ang ulo ko</i> is "my head hurts". Do not say <i>Masakit ako</i> for "I am in pain"; name the part.</div>
<h3>On the ward</h3>
<p>Pain is often how distress first shows. Ask simply, let the patient point, and follow up. Chest pain or heaviness still needs a medical check, even when it comes with nerves.</p>
<div class="ex"><b>May masakit po ba sa inyo ngayon?</b><span>Is anything hurting you right now?</span></div>
<div class="ex"><b>Mabigat po ang dibdib ko kapag kinakabahan ako.</b><span>My chest feels heavy when I get nervous.</span></div>
<p>For a patient who finds it easier to point than to talk, open the <a href="#/pictures/bodymap">body map</a>: it has these questions and pain words with sound, and a plain 0 to 10 line.</p>
`,
    quiz: [
      ['"My head hurts." (respectful)', ['Masakit po ako ng ulo.', 'Masakit po ang ulo ko.', 'May sakit po ang ulo ko.', 'Ulo ko po masakit ako.'], 1, 'Masakit + ang + body part + ko. The body part is the ang phrase, not ako.'],
      ['How do you ask a patient where it hurts?', ['Kailan pa po?', 'Gaano po kasakit?', 'Bakit po masakit?', 'Saan po masakit?'], 3, 'Saan = where. Kailan pa = since when; gaano kasakit = how much. Add Pakituro po (please point) so the patient can show you.'],
      ['The patient says "Kahapon pa po." They are telling you', ['where it hurts', 'how much it hurts', 'since when it has hurt', 'what makes it worse'], 2, 'Kahapon pa = since yesterday. It answers Kailan pa po?'],
      ['"Namamaga po ang tuhod ko" means', ['My knee is swollen.', 'My knee is numb.', 'My knee is itchy.', 'My knee stings.'], 0, 'Namamaga = swollen. Manhid / namamanhid is numb, makati itchy, mahapdi stinging.'],
      ['"May sakit po ako" means', ['My body hurts.', 'I am sick.', 'I hurt someone.', 'It hurts here.'], 1, 'May sakit = has an illness, is sick. For a painful part, say Masakit po ang ... ko.']
    ]
  },
  {
    id: 'pic-paglalarawan', level: 'A1', unit: 'Picture lessons',
    title: 'Mahaba ang buntot: describing what you see',
    summary: 'Describe with adjective + ang (Mahaba ang buntot ng aso), say what something has or lacks with may and wala, and use malaki, maliit, mahaba, maikli.',
    body: `
<p>A Tagalog description puts the describing word <b>first</b>, then the <b>ang</b> phrase: <b>Mahaba ang buntot</b>, "the tail is long". There is no word for "is". To say whose tail, add <b>ng</b> and the owner: <b>ang buntot ng aso</b>, the dog's tail.</p>
<h3>Describing the dog and the bird</h3>
<p>Tap the picture to hear each part, then describe it.</p>
<div class="pic-embed" data-pic="animal-parts"></div>
<div class="ex"><b>Mahaba ang buntot ng aso.</b><span>The dog's tail is long.</span></div>
<div class="ex"><b>Mahaba at nakalaylay ang tainga ng aso.</b><span>The dog's ears are long and floppy.</span></div>
<div class="ex"><b>Maikli ang balahibo ng aso.</b><span>The dog's fur is short.</span></div>
<div class="ex"><b>Matulis ang tuka ng ibon.</b><span>The bird's beak is pointed.</span></div>
<div class="ex"><b>Matatalas ang kuko ng ibon.</b><span>The bird's claws are sharp.</span></div>
<div class="ex"><b>Maliit ang mata ng ibon.</b><span>The bird's eye is small.</span></div>
<p>To ask for a description, use <b>Ano ang hitsura ng ...?</b> (What does ... look like?) or ask about one part with <b>ba</b>: <i>Mahaba ba ang buntot?</i> The answer can drop the thing you both already know about.</p>
<div class="ex"><b>Ano ang hitsura ng aso? Mahaba po ang tainga at ang buntot.</b><span>What does the dog look like? Its ears and tail are long.</span></div>
<p>With more than one thing, people often repeat the first syllable of the root: <i>mahaba → mahahaba</i>, <i>malaki → malalaki</i>, <i>matalas → matatalas</i>. It is common but not required.</p>
<h3>Pairs of opposites</h3>
<table><tr><th>Word</th><th>Opposite</th></tr>
<tr><td><b>malaki</b> (big)</td><td><b>maliit</b> (small)</td></tr>
<tr><td><b>mahaba</b> (long)</td><td><b>maikli</b> (short, in length)</td></tr>
<tr><td><b>matalas</b> (sharp)</td><td><b>mapurol</b> (blunt)</td></tr>
<tr><td><b>malambot</b> (soft)</td><td><b>matigas</b> (hard)</td></tr></table>
<p><b>Maikli</b> is for length: hair, a tail, time. For a person, tall is <b>matangkad</b> and short is <b>maliit</b> (some say <b>mababa</b>). Avoid <i>pandak</i>: it can sound rude.</p>
<h3>Has and does not have: may, wala</h3>
<p><b>May</b> + thing + <b>ang</b> owner says what something has. <b>Wala</b> takes the linker: <b>walang</b> + thing. See <a href="#/lessons/may-wala">May and wala</a>.</p>
<div class="ex"><b>May pakpak ang ibon.</b><span>The bird has wings.</span></div>
<div class="ex"><b>Walang pakpak ang aso.</b><span>The dog has no wings.</span></div>
<div class="ex"><b>May tuka ang ibon, pero walang tuka ang aso.</b><span>The bird has a beak, but the dog does not.</span></div>
<div class="ex"><b>Apat ang paa ng aso.</b><span>The dog has four legs.</span></div>
<h3>Description inside a phrase</h3>
<p>The adjective can also sit right next to the noun, joined by the linker <b>na</b> or <b>-ng</b> (see <a href="#/lessons/linkers">Linkers</a>). Then it is a phrase, not a sentence.</p>
<div class="ex"><b>Aso na may mahabang buntot</b><span>A dog with a long tail</span></div>
<div class="ex"><b>Ito ang asong mahaba ang tainga.</b><span>This is the dog with long ears.</span></div>
<div class="note">Common trap: <b>mahabang buntot</b> (with the linker) means "a long tail", a phrase. <b>Mahaba ang buntot</b> (with ang) means "the tail is long", a full sentence. If you want to say something about the thing, use <b>ang</b>.</div>
<h3>On the ward</h3>
<p>The same pattern describes a wound, a symptom or a person's appearance in a plain, neutral way.</p>
<div class="ex"><b>Malaki po ba ang sugat?</b><span>Is the wound big?</span></div>
<div class="ex"><b>Maliit lang po ang pasa sa braso niya.</b><span>The bruise on her arm is only small.</span></div>
<div class="ex"><b>Mahaba po ang buhok niya.</b><span>Her hair is long.</span></div>
<div class="ex"><b>Wala po akong ganang kumain.</b><span>I have no appetite.</span></div>
`,
    quiz: [
      ['"The dog\'s tail is long."', ['Mahabang buntot ng aso.', 'Ang aso mahaba buntot.', 'Buntot ng aso ay mahabang.', 'Mahaba ang buntot ng aso.'], 3, 'Adjective first, then the ang phrase, then ng + owner. Mahabang buntot is only a phrase.'],
      ['In the picture, which sentence is true?', ['May pakpak ang aso.', 'Walang pakpak ang aso.', 'Walang tuka ang ibon.', 'Walang buntot ang aso.'], 1, 'The dog has no wings: walang pakpak. The bird has the beak and the wings; the dog has a long tail.'],
      ['The opposite of mahaba is', ['maikli', 'maliit', 'malaki', 'mapurol'], 0, 'Mahaba (long) and maikli (short) are about length. Malaki and maliit are about size.'],
      ['"Matatalas ang kuko ng ibon." Why matatalas and not matalas?', ['It is the past tense', 'It is more polite', 'The claws are more than one', 'It means very sharp'], 2, 'Repeating the first syllable of the root (ma-ta-talas) marks a plural subject. It is common but optional.'],
      ['"Walang pakpak ang aso." Why walang and not wala?', ['Wala takes the linker before the thing', 'It is plural', 'It is a question', 'It is respectful'], 0, 'Wala joins the thing with the linker -ng: walang pakpak, walang gana.']
    ]
  },
  {
    id: 'pic-bilang', level: 'A1', unit: 'Picture lessons',
    title: 'Isang aso, dalawang pusa: counting things',
    summary: 'Count with a number + linker + noun, ask Ilan?, use mga for plurals, and measure with piraso, baso, tasa, pares, kilo. Know when people switch to Spanish or English numbers.',
    body: `
<p>A number goes <b>before</b> the noun and is joined to it with the linker: <b>-ng</b> after a vowel, <b>na</b> after a consonant. <i>Isa</i> becomes <b>isang</b>, <i>dalawa</i> becomes <b>dalawang</b>, but <i>apat</i> takes <b>na</b>: <b>apat na</b>.</p>
<table><tr><th>#</th><th>With a noun</th><th>#</th><th>With a noun</th></tr>
<tr><td>1</td><td><b>isang</b> aso</td><td>6</td><td><b>anim na</b> sisiw</td></tr>
<tr><td>2</td><td><b>dalawang</b> pusa</td><td>7</td><td><b>pitong</b> bibe</td></tr>
<tr><td>3</td><td><b>tatlong</b> mangga</td><td>8</td><td><b>walong</b> saging</td></tr>
<tr><td>4</td><td><b>apat na</b> manok</td><td>9</td><td><b>siyam na</b> kamatis</td></tr>
<tr><td>5</td><td><b>limang</b> kambing</td><td>10</td><td><b>sampung</b> mais</td></tr></table>
<h3>Animals</h3>
<p>Tap the picture to hear each animal, then count them.</p>
<div class="pic-embed" data-pic="pets-farm"></div>
<div class="ex"><b>May isang aso at dalawang pusa kami.</b><span>We have one dog and two cats.</span></div>
<div class="ex"><b>Apat na kalabaw ang nasa palayan.</b><span>There are four carabaos in the rice field.</span></div>
<div class="ex"><b>Ilan ang manok ni Lolo?</b><span>How many chickens does Grandpa have?</span></div>
<div class="ex"><b>Ilang kambing po ang alaga ninyo?</b><span>How many goats do you raise?</span></div>
<div class="ex"><b>Lima po.</b><span>Five.</span></div>
<p><b>Ilan</b> asks "how many". Before a noun it takes the linker too: <b>ilang</b> kambing. Alone, it is <b>Ilan ang ...?</b></p>
<h3>Mga: more than one</h3>
<p><b>Mga</b> (said "manga") marks a plural when there is no number: <i>ang mga pusa</i>, the cats. Before a number it means "about": <i>mga sampu</i>, about ten.</p>
<div class="ex"><b>Nasa labas ang mga manok.</b><span>The chickens are outside.</span></div>
<div class="ex"><b>Mga sampung sisiw po.</b><span>About ten chicks.</span></div>
<h3>Fruit, vegetables and measures</h3>
<p>Tap the market picture. Things sold or served by the unit take a measure word, then <b>ng</b>.</p>
<div class="pic-embed" data-pic="fruit-veg"></div>
<table><tr><th>Measure</th><th>Example</th></tr>
<tr><td><b>piraso</b> (piece)</td><td>tatlong piraso ng mansanas</td></tr>
<tr><td><b>kilo</b></td><td>isang kilo ng kamatis, kalahating kilo ng sibuyas</td></tr>
<tr><td><b>baso</b> (glass)</td><td>isang baso ng tubig</td></tr>
<tr><td><b>tasa</b> (cup)</td><td>dalawang tasa ng kape</td></tr>
<tr><td><b>pares</b> (pair)</td><td>isang pares ng tsinelas</td></tr></table>
<div class="ex"><b>Ilang piraso po ng mansanas ang dala ng bisita ninyo?</b><span>How many apples did your visitor bring?</span></div>
<div class="ex"><b>Isang kilo po ng mangga.</b><span>One kilo of mangoes, please.</span></div>
<div class="ex"><b>Kalahating kilo po ng bawang.</b><span>Half a kilo of garlic, please.</span></div>
<div class="ex"><b>Isang pares po ng medyas.</b><span>One pair of socks, please.</span></div>
<div class="note">Common trap: do not use <b>mga</b> after a number. Say <i>dalawang pusa</i>, not <i>dalawang mga pusa</i>; the number already shows there is more than one. And do not drop the linker: <i>tatlong mangga</i>, not <i>tatlo mangga</i>.</div>
<h3>Spanish and English numbers</h3>
<p>Native numbers are for counting things. For <b>prices</b> and <b>clock time</b>, people switch: prices mostly in English (<i>forty-five pesos</i>), with older vendors also using Spanish (<i>kuwarenta'y singko</i>), and time in Spanish (<i>alas-otso</i>). Big numbers, phone numbers and room numbers are usually English. See <a href="#/lessons/numbers">Numbers, time, and money</a>.</p>
<div class="ex"><b>Magkano po ang isang kilo ng kamatis? Sixty po.</b><span>How much is a kilo of tomatoes? Sixty pesos. (Some vendors say sisenta.)</span></div>
<div class="ex"><b>Alas-diyes po sila dumating.</b><span>They arrived at ten o'clock.</span></div>
<h3>On the ward</h3>
<div class="ex"><b>Ilang baso po ng tubig ang naiinom ninyo sa isang araw?</b><span>How many glasses of water do you drink a day?</span></div>
<div class="ex"><b>Ilang tasa po ng kape ang iniinom ninyo sa isang araw?</b><span>How many cups of coffee do you have a day?</span></div>
<div class="ex"><b>Ilan po kayong magkakapatid?</b><span>How many brothers and sisters are you, counting yourself?</span></div>
`,
    quiz: [
      ['"Three mangoes"', ['tatlo mangga', 'tatlong mga mangga', 'tatlong mangga', 'mangga tatlo'], 2, 'Number + linker + noun. Tatlo ends in a vowel, so it takes -ng. No mga after a number.'],
      ['"Four chickens"', ['apat na manok', 'apatng manok', 'apat manok', 'apat ng manok'], 0, 'Apat ends in a consonant, so the linker is na: apat na manok.'],
      ['"How many goats do you raise?" (respectful)', ['Ilan kambing po ang alaga ninyo?', 'Ilang kambing po ang alaga ninyo?', 'Magkano po ang kambing ninyo?', 'Ilang mga kambing po ang alaga ninyo?'], 1, 'Ilan before a noun takes the linker: ilang kambing. Magkano asks a price.'],
      ['"Mga sampung sisiw" means', ['ten chicks exactly', 'the ten chicks', 'about ten chicks', 'more than ten chicks'], 2, 'Before a number, mga means about, roughly.'],
      ['At the market, the vendor most likely says the price of a kilo of tomatoes as', ['Animnapung piraso po.', 'Sixty po.', 'Anim na kilo po.', 'Alas-sais po.'], 1, 'Prices are usually said in English (or Spanish). Alas-sais is clock time; anim na kilo is a weight.']
    ]
  },
  {
    id: 'pic-suot', level: 'A2', unit: 'Picture lessons',
    title: 'Nakasuot ng polo: what someone is wearing',
    summary: 'Say what someone wears with nakasuot ng and naka- + noun (nakasalamin, nakatsinelas, naka-face mask), add colours, and describe a patient\'s appearance neutrally.',
    body: `
<p>Two patterns say what someone is wearing. The full one is <b>nakasuot ng</b> + the item: <i>Nakasuot ng polo ang lalaki.</i> The short one fuses <b>naka-</b> straight onto the item: <i>Nakapolo ang lalaki.</i> Both mean "is wearing" now, as a state. To ask, say <b>Ano ang suot niya?</b> (What is he wearing?).</p>
<h3>The two people in the picture</h3>
<p>Tap each item to hear its name, then describe the man and the woman.</p>
<div class="pic-embed" data-pic="clothes"></div>
<div class="ex"><b>Nakasumbrero ang lalaki.</b><span>The man is wearing a hat.</span></div>
<div class="ex"><b>Nakasalamin ang lalaki, pero hindi nakasalamin ang babae.</b><span>The man wears glasses, but the woman does not.</span></div>
<div class="ex"><b>Nakasuot ng polo at pantalon ang lalaki.</b><span>The man is wearing a shirt and trousers.</span></div>
<div class="ex"><b>May sinturon ang pantalon niya.</b><span>His trousers have a belt.</span></div>
<div class="ex"><b>Naka-jacket at nakapalda ang babae.</b><span>The woman is wearing a jacket and a skirt.</span></div>
<div class="ex"><b>Nakamedyas at nakasapatos siya.</b><span>She is wearing socks and shoes.</span></div>
<div class="ex"><b>May dalang bag ang babae.</b><span>The woman is carrying a bag.</span></div>
<p>A bag is carried, not worn, so it takes <b>may dala</b>, not <b>naka-</b>.</p>
<h3>Spelling: when to use a hyphen</h3>
<p>One rule for this app: put a hyphen after <b>naka-</b> only before an English word or a proper noun, written the English way: <b>naka-jacket</b>, <b>naka-face mask</b>, <b>naka-uniform</b>. Before a Tagalog root, including old loans spelled the Tagalog way, write one word with no hyphen: <b>nakasalamin</b>, <b>nakatsinelas</b>, <b>nakapantalon</b>, <b>nakasapatos</b>.</p>
<div class="ex"><b>Naka-face mask po ba kayo?</b><span>Are you wearing a face mask?</span></div>
<div class="ex"><b>Nakatsinelas lang siya.</b><span>She is just in slippers.</span></div>
<h3>Colours</h3>
<p>A colour comes before the item with the linker: <b>pulang damit</b>, <b>puting polo</b>, <b>itim na sapatos</b>. Or say <b>kulay</b> + colour after it: <i>damit na kulay asul</i>. The <a href="#/pictures/accessories-colours">accessories and colours</a> set has the colour words.</p>
<div class="ex"><b>Ano po ang kulay ng damit niya?</b><span>What colour are her clothes?</span></div>
<div class="ex"><b>Nakasuot siya ng pulang damit at itim na pantalon.</b><span>He is wearing a red top and black trousers.</span></div>
<div class="ex"><b>Kulay asul ang jacket niya.</b><span>Her jacket is blue.</span></div>
<div class="note">Common trap: <b>nakasuot ng</b> needs the <b>ng</b>: <i>nakasuot ng jacket</i>, not <i>nakasuot jacket</i>. With the short form, do not add <b>ng</b> or <b>suot</b>: <i>naka-jacket</i>, not <i>naka-ng jacket</i>. And <b>suot</b> alone is a noun: <i>Ang suot niya</i> = what he is wearing.</div>
<h3>On the ward: describing appearance for the MSE</h3>
<p>In the general appearance part of a mental status exam, say what you see, the way a camera would. Describe the clothes, the grooming and what fits the setting; leave out words that judge the person.</p>
<div class="ex"><b>Nakasuot siya ng malinis na damit.</b><span>He is wearing clean clothes.</span></div>
<div class="ex"><b>Maayos ang buhok niya.</b><span>Her hair is neat.</span></div>
<div class="ex"><b>Nakatsinelas siya at naka-face mask.</b><span>She is wearing slippers and a face mask.</span></div>
<div class="ex"><b>Naka-jacket siya kahit mainit ang panahon.</b><span>He is wearing a jacket even though the weather is hot.</span></div>
<div class="ex"><b>May mantsa ang damit niya.</b><span>There is a stain on his clothes.</span></div>
<p>Notice that the last line describes the clothes, not the person. Write what is there; the doctor draws the conclusions.</p>
`,
    quiz: [
      ['"The man is wearing glasses."', ['Nakasalamin ang lalaki.', 'Naka-ng salamin ang lalaki.', 'Nakasuot salamin ang lalaki.', 'May salamin ang lalaki sa bag.'], 0, 'Naka- fused onto the item: nakasalamin. The long form needs ng: nakasuot ng salamin.'],
      ['In the clothes picture, which is true?', ['Nakasumbrero ang babae.', 'Nakasalamin ang babae.', 'Nakapalda ang lalaki.', 'Naka-jacket ang babae.'], 3, 'The woman wears the jacket and the skirt; the man has the hat and the glasses.'],
      ['How do you write "wearing a face mask"?', ['nakaface mask', 'naka-face mask', 'nakasuot face mask', 'naka ng face mask'], 1, 'With an English word, naka- takes a hyphen: naka-face mask, naka-jacket.'],
      ['"A red dress" is', ['damit pula', 'pula ng damit', 'pulang damit', 'damit ng pula'], 2, 'Colour + linker + item: pula ends in a vowel, so pulang damit. Itim takes na: itim na sapatos.'],
      ['Which line describes a patient\'s appearance neutrally for an MSE?', ['Madungis siya.', 'Pangit ang suot niya.', 'Wala siyang pakialam sa sarili.', 'May mantsa ang damit niya.'], 3, 'Describe what is seen (a stain on the clothes), not a judgement of the person.']
    ]
  }
]);
window.NEW_LESSONS = (window.NEW_LESSONS || []).concat([
{
  id: 'pic-direksyon', level: 'A2', unit: 'Picture lessons', title: 'Asking the way: diretso, kumanan, kumaliwa',
  summary: 'Ask where a place is and give simple directions, on the street and inside the hospital.',
  body: `
<p>Giving directions takes very few words: two or three verbs for moving, a few words for where things stand next to each other, and <b>sa</b> or <b>nasa</b> for the place. Learn them on the street first, then use the same words inside the hospital, where patients and relatives ask you the way every day.</p>
<h3>Asking the way</h3>
<p>The everyday question is <b>Saan po ang ...?</b> (Where is ...?). Start with <b>Makikitanong po</b> (May I ask) to a stranger. <b>Nasaan</b> means the same as <b>saan ... ang</b>; see <a href="#/lessons/pic-nasaan">Where things are</a> and <a href="#/lessons/demonstratives">Ito, iyan, iyon</a>.</p>
<div class="ex"><b>Makikitanong po, saan po ang botika?</b><span>Excuse me, where is the pharmacy?</span></div>
<div class="ex"><b>Paano po pumunta sa ospital?</b><span>How do I get to the hospital?</span></div>
<div class="ex"><b>Malayo pa po ba?</b><span>Is it still far?</span></div>
<h3>The direction words</h3>
<table><tr><th>Word</th><th>Meaning</th></tr>
<tr><td><b>diretso</b>, dumiretso</td><td>straight on; go straight on</td></tr>
<tr><td><b>kanan</b>, kumanan</td><td>right; turn right</td></tr>
<tr><td><b>kaliwa</b>, kumaliwa</td><td>left; turn left</td></tr>
<tr><td>lumiko</td><td>turn (lumiko sa kanan = turn right)</td></tr>
<tr><td>tumawid</td><td>cross (the road)</td></tr>
<tr><td><b>sa kanto</b></td><td>at the corner</td></tr>
<tr><td><b>katapat ng</b></td><td>across from, facing</td></tr>
<tr><td><b>katabi ng</b></td><td>next to</td></tr>
<tr><td><b>lampas sa</b>, paglampas sa</td><td>past, beyond; after you pass</td></tr>
<tr><td>sa dulo</td><td>at the end</td></tr></table>
<p><b>Kumanan</b> and <b>kumaliwa</b> are <b>-um-</b> verbs built on kanan and kaliwa, so the command is <b>Kumanan po kayo</b>. Casual speech often drops the verb: <b>Diretso lang, tapos kanan.</b></p>
<p>Tap the street picture to hear each place. Put your finger on the road at the left (kalsada) and walk toward the intersection: the hospital is on your left, the park on your right.</p>
<div class="pic-embed" data-pic="street"></div>
<h3>On the street</h3>
<div class="ex"><b>Diretso lang po kayo hanggang sa intersection.</b><span>Just go straight on until the intersection.</span></div>
<div class="ex"><b>Nasa kaliwa po ninyo ang ospital, bago mag-intersection.</b><span>The hospital is on your left, before the intersection.</span></div>
<div class="ex"><b>Katapat ng ospital ang parke.</b><span>The park is across the road from the hospital.</span></div>
<div class="ex"><b>Tumawid po kayo sa tawiran. Nasa kanto, sa kanan, ang bangko.</b><span>Cross at the pedestrian crossing. The bank is on the corner, on the right.</span></div>
<div class="ex"><b>Katabi ng bangko ang tindahan.</b><span>The shop is next to the bank.</span></div>
<div class="ex"><b>Paglampas po ninyo sa post office, nandoon ang paaralan.</b><span>Once you pass the post office, the school is there.</span></div>
<p>On a jeepney you stop the ride with <b>Para po!</b> and pay with <b>Bayad po.</b> Say it a little before your stop: <b>Para po, sa kanto lang.</b> (Stop please, just at the corner.)</p>
<p>Inside the hospital the same words work. Tap the floor plan: the pasukan (entrance) is at the bottom, so left and right are as you walk in.</p>
<div class="pic-embed" data-pic="hospital-floor"></div>
<h3>Inside the hospital</h3>
<div class="ex"><b>Pagpasok po ninyo, diretso lang. Nandoon po ang information.</b><span>When you come in, go straight on. The information desk is there.</span></div>
<div class="ex"><b>Nasa kaliwa po ng hintayan ang consultation room.</b><span>The consultation room is on the left of the waiting area.</span></div>
<div class="ex"><b>Katapat po ng consultation room ang botika.</b><span>The pharmacy is across from the consultation room.</span></div>
<div class="ex"><b>Malapit po sa labasan ang cashier.</b><span>The cashier is near the exit.</span></div>
<div class="ex"><b>Nasa dulo po ang nurse station. Katabi nito ang CR.</b><span>The nurses' station is at the end. The CR is next to it.</span></div>
<div class="ex"><b>Lampas sa CR, nandoon po ang elevator at ang hagdan.</b><span>Past the CR are the elevator and the stairs.</span></div>
<div class="note">Common trap: <b>katabi</b> is next to, side by side; <b>katapat</b> is facing, across from. The bank and the shop are <i>magkatabi</i>; the hospital and the park are <i>magkatapat</i>, with the road between them. And <b>Para po!</b> on a jeepney means "stop here", from Spanish <i>parar</i>, not "for".</div>
<h3>On the ward</h3>
<p>A relative stops you in the corridor. Answer with <b>po</b>, keep it to one or two steps, and offer to walk with them if they look lost.</p>
<div class="ex"><b>Saan po ang CR? / Diretso lang po, katabi ng nurse station.</b><span>Where is the CR? / Straight on, next to the nurses' station.</span></div>
<div class="ex"><b>Sa cashier po muna kayo, tapos sa botika.</b><span>Go to the cashier first, then to the pharmacy.</span></div>
<div class="ex"><b>Nasa dulo po ang ward, sa kaliwa.</b><span>The ward is at the end, on the left.</span></div>
<div class="ex"><b>Sasamahan ko na po kayo.</b><span>I will go with you.</span></div>
<p>Practise the places in <a href="#/pictures/street">At the crossroads</a> and <a href="#/pictures/hospital-floor">A hospital floor plan</a>.</p>`,
  quiz: [
    ['"Turn right at the corner." (respectful)', ['Kumaliwa po kayo sa kanto.', 'Diretso po kayo sa kanto.', 'Kumanan po kayo sa kanto.', 'Tumawid po kayo sa kanto.'], 2, 'Kumanan = turn right (-um- + kanan). Kumaliwa = turn left; tumawid = cross.'],
    ['In the street picture, the hospital and the park face each other across the road. They are', ['magkatapat', 'magkatabi', 'nasa kanto', 'lampas'], 0, 'Katapat = across from, facing. Katabi = side by side, like the bank and the shop.'],
    ['You want the jeepney to stop. You say', ['Bayad po!', 'Para po!', 'Diretso po!', 'Saan po?'], 1, 'Para po = stop here, please. Bayad po is said when you hand over the fare.'],
    ['"Lampas sa CR, nandoon ang elevator" means', ['The elevator is before the CR.', 'The elevator is inside the CR.', 'The elevator is across from the CR.', 'The elevator is past the CR.'], 3, 'Lampas sa = past, beyond. Bago = before.'],
    ['A relative asks where the pharmacy is. Which answer is respectful and clear?', ['Botika? Ewan.', 'Katapat po ng consultation room ang botika.', 'Doon ka.', 'Kumanan ka sa botika.'], 1, 'Po, plus one landmark from the floor plan: across from the consultation room.']
  ]
},
{
  id: 'pic-karatula', level: 'A2', unit: 'Picture lessons', title: 'How signs talk: bawal, huwag, paki-, mag-ingat',
  summary: 'Philippine signs use a few fixed patterns. Learn them once and you can read most walls, doors and jeepneys.',
  body: `
<p>Signs are short, so they drop the people. There is no <i>ka</i> or <i>kayo</i>, and the verb stays in its plain base form. Once you know six or seven patterns, most signs read themselves. Every example here is on a board in <a href="#/signs">Signs and buttons</a>, where you can tap it to hear it.</p>
<h3>Bawal: it is not allowed</h3>
<p><b>Bawal</b> + base verb is the commonest sign in the country. The verb does not change for time: never <i>bawal nanigarilyo</i>.</p>
<div class="ex"><b>Bawal manigarilyo</b><span>No smoking</span></div>
<div class="ex"><b>Bawal umihi dito</b><span>No urinating here</span></div>
<div class="ex"><b>Bawal tumawid, nakamamatay</b><span>No crossing: it can kill you</span></div>
<table><tr><th>Pattern</th><th>Sign</th></tr>
<tr><td>bawal + adjective</td><td>Bawal maingay (No noise)</td></tr>
<tr><td>bawal ang + noun</td><td>Bawal ang bata sa ward; Bawal ang utang</td></tr>
<tr><td>bawal + object-focus verb + ang</td><td>Bawal hawakan ang paninda (Do not touch the goods)</td></tr></table>
<h3>Huwag: do not</h3>
<p><b>Huwag</b> is softer than bawal: a warning or a request, not a rule. On a sign it takes the verb directly; in speech you add the person, <i>Huwag po kayong ...</i> (see <a href="#/lessons/requests">Asking and telling</a>).</p>
<div class="ex"><b>Huwag lumampas sa dilaw na linya</b><span>Do not step past the yellow line</span></div>
<div class="ex"><b>Huwag itapon ang tissue sa inidoro</b><span>Do not throw tissue in the toilet bowl</span></div>
<h3>Mag-ingat: take care</h3>
<p><b>Mag-ingat sa</b> + noun is "watch out for". <b>Ingat</b> alone is the short form.</p>
<div class="ex"><b>Mag-ingat, madulas ang sahig</b><span>Caution, slippery floor</span></div>
<div class="ex"><b>Mag-ingat sa pagtawid</b><span>Cross with care</span></div>
<h3>Plain verbs as instructions</h3>
<p>A base verb with nobody named is an instruction to everyone.</p>
<div class="ex"><b>Maghugas ng kamay</b><span>Wash your hands</span></div>
<div class="ex"><b>Kumuha ng numero</b><span>Take a number</span></div>
<h3>Paki- and po: the polite signs</h3>
<p>Where the writer wants to ask nicely, you see <b>paki-</b> and <b>po</b>, often on CR doors and in jeepneys.</p>
<div class="ex"><b>Pakisara po ang pinto</b><span>Please close the door</span></div>
<div class="ex"><b>Barya lang po sa umaga</b><span>Coins only in the morning, please</span></div>
<div class="ex"><b>Pasensya na po sa abala</b><span>Sorry for the inconvenience</span></div>
<h3>Dito, rito and lamang</h3>
<p><b>Dito</b> (here) closes many signs: <i>Pila dito</i>, <i>Dito po magbayad</i>, <i>Bawal pumarada dito</i>. Careful writing turns it into <b>rito</b> after a vowel, so you will also see <i>Bawal umihi rito</i>; both mean the same. <b>Lamang</b> is the written form of <b>lang</b> (only).</p>
<div class="ex"><b>Isang bantay lamang bawat pasyente</b><span>Only one watcher per patient</span></div>
<div class="ex"><b>Para sa panlabas na gamit lamang</b><span>For external use only</span></div>
<h3>Taglish signs</h3>
<p>An English verb takes <b>mag-</b> or <b>paki-</b> with a hyphen: <i>Bawal mag-park dito</i>, <i>Paki-flush po pagkatapos gumamit</i>. English nouns slot in unchanged: <i>Magsuot ng face mask</i>, <i>Load dito</i>.</p>
<h3>Signs with no verb</h3>
<p>Many signs are a single word. A root + <b>-an</b> is the place where you do it: <i>tawiran</i> (crossing), <i>pasukan</i> (entrance), <i>labasan</i> (exit), <i>sakayan</i>, <i>babaan</i>. Others give a state: <i>Sarado</i>, <i>Sira</i> (out of order), <i>Ubos na</i> (sold out), <i>Walang tubig</i>.</p>
<div class="note">Common trap: <b>Bukas</b> on a door or a shop means open. Anywhere else it usually means tomorrow. <b>Bukas ang botika</b> = the pharmacy is open; <b>Bukas na lang po</b> = tomorrow, please.</div>
<h3>On the ward</h3>
<p>When you point a patient or visitor to a rule, say the sign aloud with <b>po</b>. After bawal, po takes the linker: <b>Bawal pong ...</b></p>
<div class="ex"><b>Pasensya na po, bawal pong manigarilyo dito.</b><span>Sorry, smoking is not allowed here.</span></div>
<div class="ex"><b>Bawal po ang cellphone sa loob ng ward.</b><span>Cellphones are not allowed inside the ward.</span></div>
<div class="ex"><b>Isa lang po ang puwedeng magbantay sa pasyente.</b><span>Only one person can stay with the patient as a watcher.</span></div>
<div class="ex"><b>Iwan po muna ninyo ang gamit sa guwardiya.</b><span>Please leave your things with the guard first.</span></div>`,
  quiz: [
    ['"No littering" on a wall. Which pattern does "Bawal magkalat" use?', ['huwag + verb', 'bawal + base verb', 'paki- + verb', 'root + -an'], 1, 'Bawal + the plain base verb: it is not allowed to do it.'],
    ['Which sign is a polite request?', ['Bawal pumasok', 'Sarado', 'Pakisara po ang pinto', 'Bawal ang utang'], 2, 'Paki- and po make a request. Bawal states a rule.'],
    ['"Lamang" on a sign means', ['only', 'here', 'please', 'careful'], 0, 'Lamang is the written form of lang: Empleyado lamang = employees only.'],
    ['A sign on a shop door says "Bukas". It means', ['tomorrow', 'closed', 'sold out', 'open'], 3, 'On a door or a shop, bukas = open. Elsewhere it often means tomorrow.'],
    ['How do you say the No smoking rule to a visitor, politely?', ['Bawal nanigarilyo ka.', 'Huwag manigarilyo.', 'Pakimanigarilyo po.', 'Bawal pong manigarilyo dito.'], 3, 'Po after bawal takes the linker -ng, and the verb stays in its base form.']
  ]
},
{
  id: 'pic-makina', level: 'A2', unit: 'Picture lessons', title: 'Machine talk: buksan, patayin, pindutin, i-on',
  summary: 'The verbs for switching things on and off, louder and softer, pressing and plugging in, and how to give steps in order.',
  body: `
<p>Talking about machines takes about ten verbs. Most are object-focus verbs: the machine is the <b>ang</b> word and the person doing it is <b>mo</b> or <b>ninyo</b>, so you hear <i>Buksan mo ang TV</i> and, politely, <i>Pakibuksan po ang TV</i>.</p>
<h3>The verbs</h3>
<table><tr><th>Verb</th><th>Root</th><th>Meaning</th></tr>
<tr><td><b>buksan</b></td><td>bukas</td><td>turn on (also: open)</td></tr>
<tr><td><b>patayin</b></td><td>patay</td><td>turn off</td></tr>
<tr><td><b>lakasan</b></td><td>lakas</td><td>turn up, make stronger or louder</td></tr>
<tr><td><b>hinaan</b></td><td>hina</td><td>turn down, make weaker or softer</td></tr>
<tr><td><b>pindutin</b></td><td>pindot</td><td>press</td></tr>
<tr><td><b>isaksak</b></td><td>saksak</td><td>plug in</td></tr>
<tr><td><b>hugutin</b></td><td>hugot</td><td>pull out, unplug</td></tr>
<tr><td><b>i-on</b>, <b>i-off</b></td><td>English</td><td>switch on, switch off</td></tr></table>
<p>Note the sound changes: bukas + -an gives <b>buksan</b> (the vowel drops), and pindot + -in gives <b>pindutin</b> (o becomes u). Any English verb can take <b>i-</b> with a hyphen: <i>i-on</i>, <i>i-click</i>, <i>i-type</i>, <i>i-charge</i>.</p>
<h3>On, off, louder, softer</h3>
<p>These lines are from the panels in <a href="#/signs?tab=panels">Signs and buttons</a>, where you hear the request and press the right control.</p>
<div class="ex"><b>Pakilakasan po ang TV, hindi ko marinig.</b><span>Please turn up the TV, I cannot hear it.</span></div>
<div class="ex"><b>Hinaan mo ang TV, natutulog na ang pasyente sa kabilang kama.</b><span>Turn down the TV, the patient in the next bed is asleep.</span></div>
<div class="ex"><b>Patayin mo na ang electric fan, giniginaw na ako.</b><span>Turn off the electric fan, I am feeling cold.</span></div>
<div class="ex"><b>I-on mo na yung switch ng malamig sa likod.</b><span>Turn on the cold water switch at the back (of the water dispenser).</span></div>
<h3>Phone and computer</h3>
<p>Tap the picture to hear each part. The power button is beside the keyboard, the camera sits above the screen, and the phone's button is on its side.</p>
<div class="pic-embed" data-pic="computer-phone"></div>
<div class="ex"><b>Pindutin po ang power button para buksan ang laptop.</b><span>Press the power button to turn on the laptop.</span></div>
<div class="ex"><b>Pakibuksan po ang camera para makita ko kayo.</b><span>Please turn on the camera so I can see you.</span></div>
<div class="ex"><b>Pindutin po ang button sa gilid para lumakas ang tunog.</b><span>Press the button on the side to make the sound louder.</span></div>
<div class="ex"><b>Isaksak po ninyo ang charger, lowbat na po ang cellphone.</b><span>Please plug in the charger, the phone battery is low.</span></div>
<h3>Things around the house</h3>
<p>Tap the picture of electrical things: the flashlight, the battery and the plug are the words you need when something stops working.</p>
<div class="pic-embed" data-pic="appliances"></div>
<div class="ex"><b>Pakihugot po ang plug bago linisin ang electric fan.</b><span>Please pull out the plug before cleaning the electric fan.</span></div>
<div class="ex"><b>Hindi gumagana ang remote, ubos na yata ang baterya.</b><span>The remote does not work, the battery must be dead.</span></div>
<div class="ex"><b>Brownout! Nasaan ang flashlight?</b><span>Power cut! Where is the flashlight?</span></div>
<h3>Steps in order</h3>
<p>Give steps with <b>una</b> (first), <b>tapos</b> (then, everyday) and <b>pagkatapos</b> (after that). <b>Kapag</b> + completed verb says what happens when you do something.</p>
<div class="ex"><b>Una, isaksak ang plug. Tapos, pindutin ang power button.</b><span>First, plug it in. Then press the power button.</span></div>
<div class="ex"><b>Pagkatapos, hintayin po ninyong umilaw.</b><span>After that, wait for it to light up.</span></div>
<div class="ex"><b>Kapag pinindot po ninyo ito, lalabas ang numero ninyo.</b><span>When you press this, your number comes out.</span></div>
<div class="note">Common trap: <b>patayin</b> comes from <i>patay</i> (dead), but for machines it is the ordinary word for "turn off", with nothing violent in it: <i>Patayin ang ilaw</i> = turn off the light. And <b>buksan</b> means turn on as well as open, so <i>Buksan ang ilaw</i> is "turn on the light". For an aircon, <b>hinaan</b> means make it less cold, not lower the number.</div>
<h3>On the ward</h3>
<div class="ex"><b>Kapag may kailangan po kayo, pindutin lang po ito para tawagin kami.</b><span>If you need anything, just press this to call us.</span></div>
<div class="ex"><b>Oras na po ng pahinga. Patayin na natin ang TV.</b><span>It is rest time now. Let us turn off the TV.</span></div>
<div class="ex"><b>Pakihinaan po ang aircon, giniginaw na si Lola.</b><span>Please make the aircon less cold, Grandma is feeling cold.</span></div>
<p>More words in <a href="#/pictures/computer-phone">Computer and phone</a> and <a href="#/pictures/appliances">Electrical things</a>.</p>`,
  quiz: [
    ['"Please turn up the TV." (polite)', ['Pakihinaan po ang TV.', 'Pakilakasan po ang TV.', 'Pakipatay po ang TV.', 'Pakihugot po ang TV.'], 1, 'Lakasan = make louder or stronger (lakas = strength). Hinaan is the opposite.'],
    ['"Patayin mo ang ilaw" means', ['Turn off the light.', 'Break the light.', 'Turn on the light.', 'Change the bulb.'], 0, 'For machines and lights, patayin is simply "turn off".'],
    ['The verb for "unplug, pull out the plug" is', ['isaksak', 'pindutin', 'hugutin', 'buksan'], 2, 'Hugutin (from hugot) = pull out. Isaksak = plug in.'],
    ['Which is the right way to write an English verb with i-?', ['ion', 'i on', 'ion-', 'i-on'], 3, 'i- + English verb takes a hyphen: i-on, i-off, i-click.'],
    ['"Kapag pinindot mo ito, tatawag ang nars." What does kapag add?', ['before', 'when, whenever', 'because', 'until'], 1, 'Kapag = when, whenever: what happens each time you press it.']
  ]
},
{
  id: 'pic-kalagayan', level: 'A2', unit: 'Picture lessons', title: 'How things are: nakabukas, nakasara, nakapatong',
  summary: 'Naka- + root describes the state something is in right now: open, closed, on, off, resting on, hanging.',
  body: `
<p>To say how something <i>is</i>, not what someone <i>did</i>, Tagalog uses <b>naka-</b> + root. <b>Binuksan ko ang bintana</b> is an action (I opened the window). <b>Nakabukas ang bintana</b> is a state (the window is open), with nobody named. Naka- words do not change for time, so they work with <i>kanina</i>, <i>ngayon</i> or <i>mamaya</i> alike.</p>
<h3>The common states</h3>
<table><tr><th>Word</th><th>Root</th><th>Meaning</th></tr>
<tr><td><b>nakabukas</b></td><td>bukas</td><td>open; switched on</td></tr>
<tr><td><b>nakasara</b></td><td>sara</td><td>closed, shut</td></tr>
<tr><td><b>nakapatay</b></td><td>patay</td><td>switched off</td></tr>
<tr><td><b>nakapatong</b></td><td>patong</td><td>resting on top of</td></tr>
<tr><td><b>nakasabit</b></td><td>sabit</td><td>hanging</td></tr>
<tr><td>nakakabit</td><td>kabit</td><td>attached, fixed to</td></tr>
<tr><td>nakasandal</td><td>sandal</td><td>leaning</td></tr>
<tr><td>nakaupo, nakahiga, nakatayo</td><td>upo, higa, tayo</td><td>sitting, lying down, standing</td></tr></table>
<p>The thing is the <b>ang</b> word, and the place takes <b>sa</b>: <i>Nakapatong sa mesa ang baso.</i> Ask with <b>ba</b> and deny with <b>hindi</b>: <i>Nakasara ba?</i> <i>Hindi nakasara.</i></p>
<p>Tap the living room picture and check each sentence against it: the light, the window, the wall and the table.</p>
<div class="pic-embed" data-pic="living-room"></div>
<h3>In the living room</h3>
<div class="ex"><b>Nakabukas ang ilaw.</b><span>The light is on.</span></div>
<div class="ex"><b>Nakasabit ang ilaw sa kisame.</b><span>The light hangs from the ceiling.</span></div>
<div class="ex"><b>Nakakabit sa dingding ang aircon.</b><span>The aircon is fixed to the wall.</span></div>
<div class="ex"><b>Nakasara ang bintana, pero nakabukas ang kurtina.</b><span>The window is closed, but the curtains are open.</span></div>
<div class="ex"><b>Nakasabit sa dingding ang orasan at ang larawan.</b><span>The clock and the picture hang on the wall.</span></div>
<div class="ex"><b>Nakapatong sa mesa ang baso at ang diyaryo.</b><span>The glass and the newspaper are on the table.</span></div>
<div class="ex"><b>May isang librong nakasandal sa ibang libro sa estante.</b><span>On the bookshelf, one book is leaning against the others.</span></div>
<div class="ex"><b>Walang nakaupo sa sopa.</b><span>Nobody is sitting on the sofa.</span></div>
<p>The picture does not show whether the TV or the aircon is on, so ask, or use <b>kung</b> (if):</p>
<div class="ex"><b>Nakabukas po ba ang TV?</b><span>Is the TV on?</span></div>
<div class="ex"><b>Kung nakabukas ang aircon, dapat nakasara ang pinto.</b><span>If the aircon is on, the door should be closed.</span></div>
<p>Now tap the bedroom picture. Look at the desk: the book lies open, and the glasses are beside it.</p>
<div class="pic-embed" data-pic="bedroom"></div>
<h3>In the bedroom</h3>
<div class="ex"><b>Nakabukas ang libro sa mesa.</b><span>The book lies open on the desk.</span></div>
<div class="ex"><b>Nakapatong din sa mesa ang salamin, sa tabi ng libro.</b><span>The glasses are on the desk too, next to the book.</span></div>
<div class="ex"><b>Nakapatong ang alarm clock sa maliit na mesa sa tabi ng kama.</b><span>The alarm clock is on the small table beside the bed.</span></div>
<div class="ex"><b>Nakasara ang pinto, at walang nakahiga sa kama.</b><span>The door is closed, and nobody is lying on the bed.</span></div>
<div class="ex"><b>Kung nakabukas pa ang lampshade, patayin na natin bago matulog.</b><span>If the lamp is still on, let us switch it off before sleeping.</span></div>
<div class="note">Common trap: with a light or a machine, <b>nakabukas</b> means switched on, not "open", and <b>nakapatay</b> means switched off. Do not mix the state with the action: <b>Nakabukas ang ilaw</b> (the light is on) describes the room; <b>Binuksan ko ang ilaw</b> (I turned it on) tells what you did. The same naka- describes what a person wears, as in <i>nakasalamin</i>: see <a href="#/lessons/pic-suot">What someone wears</a>.</div>
<h3>On the ward</h3>
<p>Naka- words are handy on rounds and in the endorsement: they report what you found, not who did it.</p>
<div class="ex"><b>Nakahiga po ba siya o nakaupo habang kumakain?</b><span>Was he lying down or sitting up while he ate?</span></div>
<div class="ex"><b>Gusto po ba ninyong nakabukas ang ilaw habang natutulog kayo?</b><span>Do you want the light on while you sleep?</span></div>
<div class="ex"><b>Nakasara po ang pinto ng ward sa gabi.</b><span>The ward door is kept closed at night.</span></div>
<p>Review place words in <a href="#/lessons/pic-nasaan">Where things are</a>, and the pictures in <a href="#/pictures/living-room">The living room</a> and <a href="#/pictures/bedroom">The bedroom</a>.</p>`,
  quiz: [
    ['"The window is closed."', ['Isinara ang bintana.', 'Nakasara ang bintana.', 'Sarado ka sa bintana.', 'Isara mo ang bintana.'], 1, 'Naka- + sara describes the state. Isinara reports an action; isara mo is a command.'],
    ['In the living room picture, what is on the table?', ['the clock and the picture', 'the TV', 'the glass and the newspaper', 'the glasses and a book'], 2, 'Nakapatong sa mesa ang baso at ang diyaryo. The clock and the picture hang on the wall.'],
    ['"Nakabukas ang ilaw" means', ['The light is on.', 'The light is broken.', 'Someone opened the light.', 'The light is hanging.'], 0, 'With lights and machines, nakabukas = switched on.'],
    ['Which word describes the clock on the wall?', ['nakapatong', 'nakahiga', 'nakapatay', 'nakasabit'], 3, 'Nakasabit = hanging, like the clock and the picture on the living room wall.'],
    ['The living room picture does not show whether the TV is on. Which sentence fits?', ['Nakabukas ang TV.', 'Nakapatay ang TV.', 'Nakabukas po ba ang TV?', 'Binuksan ko ang TV.'], 2, 'When the picture does not show it, ask. A naka- word with ba is a natural yes or no question.']
  ]
},
{
  id: 'pic-paliwanag', level: 'B1', unit: 'Picture lessons', title: 'Explaining with a diagram: ito po ang ..., nandito po',
  summary: 'Show a patient or relative a part of the body on a picture: what it is, where it is, what it does, in plain words, and check that they understood.',
  body: `
<p>When you explain with a picture, three short moves do most of the work: name the part (<b>Ito po ang ...</b>), place it (<b>Nandito po ito</b>, <b>dito banda</b>), and say what it does (<b>Ang trabaho po nito ay ...</b>). Then check understanding before you go on. Keep to everyday words: <i>puso</i>, <i>baga</i>, <i>dugo</i>, <i>hangin</i>. Many patients also know the English names, so <i>ang atay, yung liver</i> is fine.</p>
<table><tr><th>Move</th><th>Phrases</th></tr>
<tr><td>Name it</td><td>Ito po ang ... ; Ito po yung tinatawag na ...</td></tr>
<tr><td>Place it</td><td>Nandito po ito; nasa loob po ng ...; dito banda; sa pagitan ng ...; nakakabit sa ...</td></tr>
<tr><td>Say what it does</td><td>Ang trabaho po nito ay ...; dito po dumadaan ang ...</td></tr>
<tr><td>Show how</td><td>Ganito po; parang ganito</td></tr>
<tr><td>Check</td><td>Naiintindihan po ba? May tanong po ba kayo?</td></tr></table>
<p>Tap the picture of the inside of the body. It faces you, like the patient sitting across from you.</p>
<div class="pic-embed" data-pic="inside"></div>
<h3>Naming and placing</h3>
<div class="ex"><b>Ito po ang utak. Nandito po ito sa loob ng ulo.</b><span>This is the brain. It is here, inside the head.</span></div>
<div class="ex"><b>Ito po ang puso. Nasa gitna po ito ng dibdib, sa pagitan ng dalawang baga.</b><span>This is the heart. It is in the middle of the chest, between the two lungs.</span></div>
<div class="ex"><b>Ito po ang atay. Nasa kanan po ninyo ito, sa ilalim ng kanang baga, sa likod ng mga tadyang.</b><span>This is the liver. It is on your right, below the right lung, behind the lower ribs.</span></div>
<div class="ex"><b>Ito po ang lalamunan. Nakakabit po ito sa likod ng bibig at bumababa sa leeg.</b><span>This is the throat. It joins the back of the mouth and runs down the neck.</span></div>
<div class="ex"><b>Ito po ang gulugod, ang butong dumadaan sa gitna ng likod.</b><span>This is the spine, the bone that runs down the middle of the back.</span></div>
<h3>What it does</h3>
<div class="ex"><b>Ang trabaho po ng puso ay magbomba ng dugo sa buong katawan.</b><span>The heart's job is to pump blood round the whole body.</span></div>
<div class="ex"><b>Ito po ang baga. Dito pumapasok ang hangin kapag humihinga tayo.</b><span>These are the lungs. This is where the air goes when we breathe in.</span></div>
<div class="ex"><b>Sa utak po tayo nag-iisip, nakakaalala at nakakaramdam.</b><span>We think, remember and feel with the brain.</span></div>
<div class="ex"><b>Pagkatapos ng sikmura, dito po dumadaan ang kinain natin. Ito po ang bituka.</b><span>After the stomach, the food we eat passes through here. These are the intestines.</span></div>
<div class="note">Common trap: a diagram faces you, so its left is the patient's right. The liver is on the left side of the picture but on the patient's <b>right</b>: say <b>sa kanan po ninyo</b> and touch your own right side, or point on the patient's own body. Also say <b>sikmura</b> for the stomach as an organ; <b>tiyan</b> is the whole belly from outside.</div>
<h3>From the picture to the body</h3>
<p>Then move to the outside of the body, so the patient can find the place on themselves. Tap the body picture and match each line to it.</p>
<div class="pic-embed" data-pic="body-front"></div>
<div class="ex"><b>Ganito po: ang sikmura ay dito banda, sa itaas ng pusod.</b><span>Like this: the stomach is around here, above the navel.</span></div>
<div class="ex"><b>Ang atay po, dito sa kanan, sa ilalim ng mga tadyang.</b><span>The liver is here on the right, under the ribs.</span></div>
<h3>Checking understanding</h3>
<p>Do not ask only <i>Naiintindihan po ba?</i>: many patients say yes out of politeness. Invite questions, and ask them to say it back in their own words.</p>
<div class="ex"><b>Naiintindihan po ba? May tanong po ba kayo?</b><span>Is that clear? Do you have any questions?</span></div>
<div class="ex"><b>Puwede po ba ninyong ikuwento ulit sa akin, sa sarili ninyong salita?</b><span>Could you tell it back to me in your own words?</span></div>
<div class="ex"><b>Uulitin ko po ba, mas dahan-dahan?</b><span>Shall I say it again, more slowly?</span></div>
<h3>On the ward: when they ask about treatment</h3>
<p>Say what a part is, where it is and what it does. Do not promise a result and do not name a medicine: hand the treatment over to the doctor.</p>
<div class="ex"><b>Ipapaliwanag po ng doktor ang gamutan.</b><span>The doctor will explain the treatment.</span></div>
<div class="ex"><b>Itanong po natin sa doktor mamaya; siya po ang magpapaliwanag.</b><span>Let us ask the doctor later; he or she will explain it.</span></div>
<p>Practise the words in <a href="#/pictures/inside">Inside the body</a> and <a href="#/pictures/body-front">The body (front)</a>, and the polite forms in <a href="#/lessons/requests">Asking and telling</a>.</p>`,
  quiz: [
    ['You point at the heart on the diagram. You say', ['Nandito po ang puso ko.', 'Ito po ang puso.', 'Masakit po ang puso.', 'Puso po ba ito ninyo?'], 1, 'Ito po ang ... names the part you are pointing at.'],
    ['The liver is on the left of the diagram. To the patient you say it is', ['sa kaliwa po ninyo', 'sa likod po ninyo', 'sa kanan po ninyo', 'sa gitna po ninyo'], 2, 'The diagram faces you, so its left is the patient\'s right.'],
    ['"Ang trabaho po ng baga ay ..." The best ending:', ['tumulong sa paghinga.', 'tumunaw ng pagkain.', 'magbomba ng dugo.', 'mag-isip.'], 0, 'The lungs are for breathing. Pumping blood is the heart\'s job; thinking is the brain\'s.'],
    ['The best way to check that a patient understood:', ['Naiintindihan mo, di ba?', 'Wala na po kayong tanong.', 'Sigurado po akong gagaling kayo.', 'Puwede po ba ninyong ikuwento ulit sa sarili ninyong salita?'], 3, 'Asking for it back in their own words shows what was understood; a yes may only be politeness.'],
    ['The patient asks what the treatment will be. You say', ['Ipapaliwanag po ng doktor ang gamutan.', 'Gagaling po kayo agad.', 'Hindi ko po alam.', 'Huwag na po kayong magtanong.'], 0, 'Explain the part, not the treatment: hand it over to the doctor, with no promise.']
  ]
}
]);
window.LESSONS = window.LESSONS || [];
window.LESSONS.push(...window.NEW_LESSONS);
delete window.NEW_LESSONS;
