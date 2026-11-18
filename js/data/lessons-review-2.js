/* Unit reviews, additions of 3.16.0: one row and two quiz items for each lesson of js/data/lessons-3.js, appended to the
   reviews of js/data/lessons-review.js (loaded after it, before lessons-zz-order.js). Draft for review. */
(function (R) {
  if (!R) return;
  const add = (unit, row, quiz) => { const r = R[unit]; if (!r) return; r.rows.push(row); quiz.forEach((k) => r.quiz.push(k)); };
  add('Verbs: focus and aspect', ['mag-um', 'moving or acting by yourself is usually -um-; doing something to an object is usually mag-; some roots take both with different meanings', 'Umuwi siya nang maaga at nag-uwi ng pansit.', 'He went home early and brought home some noodles.'], [
    ['"Nag-alis siya ng sapatos." means', ['He went away from his shoes.', 'He took off his shoes.', 'He bought shoes.'], 1, 'Mag-alis = remove something. Umalis = leave.'],
    ['"She went out."', ['Lumabas siya.', 'Naglabas siya.', 'Inilabas siya.'], 0, 'Going out yourself is lumabas. Naglabas needs a thing taken out; inilabas siya means someone took her out.']
  ]);
  add('Verbs: focus and aspect', ['choosing-focus', '-in for the thing affected, i- for the thing moved or passed on, -an for the place or person reached; a specific object pulls toward these forms', 'Iabot mo sa akin ang tuwalya, tapos punasan mo ang mesa.', 'Hand me the towel, then wipe the table.'], [
    ['"Lagyan mo ng asukal ang kape." The topic is', ['the sugar', 'the coffee', 'you'], 1, 'Lagyan (-an) makes the container reached the topic; the sugar takes ng.'],
    ['"Eat the bread." (that piece of bread)', ['Kainin mo ang tinapay.', 'Kumain ka ang tinapay.', 'Kumain mo ang tinapay.'], 0, 'A specific object is the topic of the object-focus verb kainin, with mo as the doer.']
  ]);
  add('Verbs: focus and aspect', ['mang-verbs', 'mang- spreads an action over many things or people, names a livelihood or gathering, and blends its last sound with the root', 'Namimili si Aling Rosa ng isda sa mga mangingisda tuwing umaga.', 'Aling Rosa buys fish from the fishers every morning.'], [
    ['Mang- + sigarilyo:', ['mangsigarilyo', 'manigarilyo', 'mansigarilyo'], 1, 'Before s the prefix is man- and the s drops.'],
    ['"Nangunguna siya." means', ['She is in first place.', 'She was the first to leave.', 'She will gather things.'], 0, 'Manguna, from una, first; nangunguna is the ongoing form.']
  ]);
  add('Verbs: more affixes', ['pang-ipang', 'pang- names a purpose (pantulog, panlinis), pampa- what causes something (pampatulog), and ipang- makes the thing used the topic', 'Ang perang pang-ulam ang ipinambili niya ng sabong panlaba.', 'She used the money for food to buy laundry soap.'], [
    ['"Ipanghugas mo ito ng plato." What is "ito"?', ['the plate', 'what you wash the plate with', 'the sink'], 1, 'Ipang- makes the thing used the topic; the plate takes ng.'],
    ['Pang- + tulog:', ['panulog', 'pangtulog', 'pantulog'], 2, 'Before t the prefix is pan-, and pang- words usually keep the t.']
  ]);
  add('Verbs: more affixes', ['ka-an-verbs', 'ma- makes the one who feels the topic, ka- -an the target of the feeling, ikina- its cause', 'Ikinainis ng nars ang ingay, pero hindi niya kinagalitan ang mga bata.', 'The noise annoyed the nurse, but she did not scold the children.'], [
    ['"Kinaiinisan siya ng mga kasama niya." Who is annoyed?', ['he is', 'his companions are', 'nobody yet'], 1, 'With ka- -an the one who feels takes ng (ng mga kasama niya); siya is the target.'],
    ['"Ikinalungkot ____ ang balita." (we, not including you)', ['namin', 'kami', 'sa amin'], 0, 'The one who feels takes the ng form with ikina-: namin.']
  ]);
  add('Verbs: more affixes', ['magsi', 'magsi- on um- roots and magsipag- on mag- roots mark a plural doer; the plain verb with a plural topic is always fine', 'Nagsiuwi na ang mga bantay kagabi.', 'The watchers all went home last night.'], [
    ['"Magsitayo po ang lahat." is said to', ['one older person', 'a whole group', 'a child alone'], 1, 'Magsi- needs a plural doer: here, lahat.'],
    ['"Nagsialisan ang mga tao." means', ['the people all left', 'the people will leave', 'one person left'], 0, 'Nagsi- with -an: many people leaving at once.']
  ]);
  add('Verbs: more affixes', ['feeling-verbs', 'the ma- verb is the person who feels it (natatakot ako sa ...); nakaka- is what causes it (nakakatakot ang ...)', 'Naiinis po siya kapag maingay sa kuwarto.', 'He gets annoyed when the room is noisy.'], [
    ['"Nakakahiya." describes', ['the embarrassing situation', 'a shy person', 'an angry person'], 0, 'Nakaka- describes what causes the feeling.'],
    ['"I get tired easily."', ['Nakakapagod ako agad.', 'Napapagod ako agad.', 'Pinapagod ako agad.'], 1, 'Your own feeling takes the ma- verb.']
  ]);
  add('Verbs: more affixes', ['may-verbs', 'may + verb = someone or something; wala + linker + verb = no one, nothing; the person takes ako, not ko', 'May hinihintay pa po kami.', 'We are still waiting for someone.'], [
    ['"Walang dumalaw sa kanya." means', ['no one visited him', 'he visited no one', 'he did not want visitors'], 0, 'Wala + linker + actor-focus verb = no one did it.'],
    ['"May gagawin ____ mamaya." (I)', ['ko', 'ako', 'akin'], 1, 'After may, the person takes the ang form.']
  ]);
  add('Natural speech', ['softeners', 'nga, naman, lang, muna and sana soften a request; sharp nga sounds impatient, and na naman means again', 'Pakitingnan naman po ang anak ko.', 'Could you please take a look at my child?'], [
    ['"Pakihinaan ____ ang radyo." (please, gently insisting)', ['naman', 'na naman', 'daw'], 0, 'Naman pleads gently. Na naman means again; daw reports.'],
    ['"Kaunti lang po" from a patient in pain may mean', ['there is no pain at all', 'the patient is playing the pain down', 'the patient wants more medicine'], 1, 'Lang can minimize. Ask more.']
  ]);
  add('Natural speech', ['din-daw', 'din, daw, dito, doon become rin, raw, rito, roon after a vowel, w or y; din can also mean finally', 'Umuwi na rin po ang kapatid niya.', 'His sibling has gone home too.'], [
    ['"Ikaw ____." (you too)', ['din', 'rin', 'raw'], 1, 'Ikaw ends in w, so rin.'],
    ['"Pumunta ka raw sa klinika." The speaker is', ['passing on someone else\'s instruction', 'guessing', 'asking a question'], 0, 'Raw marks the words as someone else\'s.']
  ]);
  add('Natural speech', ['tags', '\'no and \'di ba seek agreement, ha checks, kaya wonders, pala realizes; naman e and na nga e complain', 'Masakit pa pala ang sugat ninyo.', 'Oh, so your wound still hurts.'], [
    ['"Kumain na nga ako, e." signals', ['mild annoyance', 'wondering', 'agreement'], 0, 'Na nga e: I already did, stop asking.'],
    ['Which ending means "I wonder"?', ['ha', 'kaya', 'o'], 1, 'Kaya after the first word = I wonder.']
  ]);
  add('Building sentences', ['time-clauses', 'noong or nang for one past event; pagka- + root = right after; pagdating ko = upon arriving; mula nang = since', 'Nahilo po ako pagkabangon ko sa kama.', 'I felt dizzy as soon as I got up from the bed.'], [
    ['"Pagdating ng doktor, aalis na kami." When will we leave?', ['before the doctor arrives', 'when the doctor arrives', 'because the doctor arrived'], 1, 'Pagdating ng = upon the arrival of; the future aalis puts it in the future.'],
    ['"____ nawalan siya ng trabaho, hindi na siya lumalabas." (since)', ['Simula noong', 'Kapag', 'Habang'], 0, 'Simula noong = since. Kapag is when or whenever; habang is while.']
  ]);
  add('Building sentences', ['while-before-after', 'habang + ongoing form; bago and pagkatapos + base form, even for the past; pagkatapos ng + noun; saka = and then', 'Magpalit ka muna ng damit, saka tayo kumain.', 'Change your clothes first, and then we will eat.'], [
    ['"Habang ____ ako, may tumawag sa akin." (while I was bathing)', ['naliligo', 'maligo', 'maliligo'], 0, 'Habang takes the ongoing form for an action in progress.'],
    ['"Pagkatapos ____ hapunan, nanood kami ng balita."', ['ang', 'sa', 'ng'], 2, 'Pagkatapos + noun takes ng.']
  ]);
  add('Building sentences', ['kahit-kung', 'kahit + question word = any-, no matter; kung + question word = a question inside a sentence; kung anu-ano = all sorts of', 'Hindi ko po maalala kung saan ko nailagay ang salamin ko.', 'I cannot remember where I put my glasses.'], [
    ['"Puwede kayong umupo ____ saan." (anywhere)', ['kung', 'kahit', 'dahil'], 1, 'Kahit saan = anywhere. Kung saan = where, inside a sentence.'],
    ['"Alam mo ba ____ sino ang kasama niya?"', ['kung', 'kahit', 'nang'], 0, 'A question inside a sentence takes kung: whether you know who is with him.']
  ]);
  add('Building sentences', ['nang-ng', 'both are said nang; write ng before a noun, nang for when, so that, how, repeated verbs and na + -ng', 'Inayos ni Ana ang kama nang makahiga agad ang pasyente.', 'Ana made the bed so that the patient could lie down right away.'], [
    ['"Kumain ____ tinapay ang bata."', ['nang', 'ng', 'na'], 1, 'Tinapay is a noun, the thing eaten: ng.'],
    ['"Huminga po kayo ____ dahan-dahan."', ['nang', 'ng', 'sa'], 0, 'Dahan-dahan says how you breathe: nang.']
  ]);
  add('Building sentences', ['reason-result', 'dahil + clause, dahil sa + noun, dahil kay + name; kasi at the start or after the first word; tuloy = an unwanted result', 'Naiwan ko ang payong, nabasa tuloy ako.', 'I left my umbrella behind, so I got wet.'], [
    ['"Hindi siya nakapasok ____ sa lagnat."', ['kaya', 'dahil', 'tuloy'], 1, 'Dahil sa + noun = because of. Kaya and tuloy introduce a result.'],
    ['"Kaya nga po namin siya dinala rito." Kaya nga means', ['that is exactly why', 'even so', 'in case'], 0, 'Kaya nga = that is exactly why, agreeing or insisting.']
  ]);
  add('Register and style', ['formal-filipino', 'notices use ay, mangyaring, upang, subalit, alinsunod sa; say them aloud with pero, para, ayon sa and po', 'Mangyaring huwag manigarilyo sa loob ng ospital.', 'Please do not smoke inside the hospital.'], [
    ['"Upang maiwasan ang impeksiyon" means', ['in order to prevent infection', 'because of an infection', 'in spite of the infection'], 0, 'Upang = para, in order to.'],
    ['The spoken form of "subalit" is', ['kasi', 'pero', 'kaya'], 1, 'Subalit = pero, but.']
  ]);
  add('Register and style', ['instructions', 'una, tapos, saka, bago, habang, hanggang order the steps; -in, i-, -an take mo or ninyo, -um- and mag- take ka or kayo', 'Pagkatapos po ninyong maligo, palitan ninyo ang gasa.', 'After you bathe, change the gauze.'], [
    ['"Pakiulit nga po kung paano ninyo iinumin ang gamot" is used to', ['check understanding by teach-back', 'scold the patient', 'ask for a prescription'], 0, 'The patient says the steps back.'],
    ['"____ po ninyong itigil ang gamot." (do not)', ['Hindi', 'Huwag', 'Wala'], 1, 'Huwag = do not, with the linker -ng on the pronoun.']
  ]);
  add('Everyday life', ['ordinals', 'una, then ikalawa or pangalawa for order; tig- for each; doubling for at a time; beses for times', 'Pangatlong araw na po niya rito sa ward.', 'It is already her third day here on the ward.'], [
    ['"Tigtatlo kayo." means', ['you each get three', 'three times', 'the third one'], 0, 'Tig- + number = so many each.'],
    ['"Pang-ilan po ako?" asks', ['how much to pay', 'my place in the line', 'how many tablets'], 1, 'Pang-ilan asks for a place in order.']
  ]);
  add('Everyday life', ['equality', 'kasing- + root + ng = as ... as (n before d, l, r, s, t; m before b, p); magkasing- and pareho for two alike; hindi kasing- = not as', 'Hindi na po kasintaas ng dati ang lagnat niya.', 'His fever is not as high as before.'], [
    ['"Pareho kami ng edad." means', ['I am older', 'we are the same age', 'we are both old'], 1, 'Pareho + the people + ng + what they share.'],
    ['"Hindi kasinlamig ng Baguio ang Maynila." means', ['Manila is colder than Baguio', 'Manila and Baguio are equally cold', 'Manila is not as cold as Baguio'], 2, 'Hindi kasing- = not as ... as.']
  ]);
})(window.LESSON_REVIEWS);
