/* Lesson extras part 5 (3.14.0). Draft for review. Shape: see js/views.js. Ids are lesson ids. */
window.LESSON_EXTRA = Object.assign(window.LESSON_EXTRA || {}, {
  'time-words': {
    mistakes: [
      ['Sa Lunes po siya nagsimulang uminom ng gamot.', 'Noong Lunes po siya nagsimulang uminom ng gamot.', 'A finished event takes noong; sa Lunes is the coming Monday and clashes with the past verb.'],
      ['Mamaya po siya dumating.', 'Kanina po siya dumating.', 'Kanina is earlier today and mamaya is later today, so a past verb needs kanina.'],
      ['Para sa isang buwan na po siyang malungkot.', 'Isang buwan na po siyang malungkot.', 'English "for a month" is not para sa; a length of time plus na already says how long it has been.']
    ],
    more: [
      ['Kagabi pa po siya hindi kumakain.', 'She has not eaten since last night.'],
      ['Gaano na po katagal ninyong iniinom ang gamot na ito?', 'How long have you been taking this medicine?'],
      ['Simula noong Agosto pa po siya hindi pumapasok sa trabaho.', 'He has not gone to work since August.'],
      ['Tuwing Linggo kami nagsisimba.', 'We go to church every Sunday.'],
      ['Bihira na lang akong umuwi sa probinsiya.', 'I rarely go home to the province now.'],
      ['Mamayang hapon na lang tayo mag-usap.', 'Let us just talk later this afternoon.']
    ],
    quiz: [
      ['"Kahapon" means', ['yesterday', 'tomorrow', 'earlier today'], 0, 'Kahapon = yesterday. Bukas = tomorrow; kanina = earlier today.'],
      ['"Next Friday": "____ Biyernes"', ['noong', 'sa', 'tuwing'], 1, 'Sa + day name points to the future; noong points to the past.'],
      ['"Dalawang araw pa lang" means', ['every two days', 'two days from now', 'only two days so far'], 2, 'A length of time + pa lang = only that long so far.'],
      ['Which sentence is correct?', ['Noong isang linggo po siya dinala rito.', 'Sa isang linggo po siya dinala rito.', 'Mamaya po siya dinala rito.'], 0, 'Dinala is a finished action, so it needs a past time word: noong isang linggo.'],
      ['A patient says "Matagal na po." What do you do next?', ['Write "a long time" and move on', 'Ask: Mga ilang buwan o taon na po?', 'Ask: Saan po kayo nakatira?'], 1, 'Matagal na is vague; follow up to get an actual length of time.'],
      ['"Gaano po kadalas?" asks', ['how long', 'how far', 'how often'], 2, 'Gaano kadalas = how often. Gaano katagal = how long.']
    ]
  },
  'intensifiers': {
    mistakes: [
      ['Sobrang lungkot ang anak ko.', 'Sobrang lungkot ng anak ko.', 'After sobrang + root, the one described takes ng, not ang.'],
      ['Napakamabait ng nars.', 'Napakabait ng nars.', 'Napaka- goes on the root (bait), not on the ma- word (mabait).'],
      ['Takot takot ang bata.', 'Takot na takot ang bata.', 'Doubling needs the linker between the two words: na after a consonant, -ng after a vowel.']
    ],
    more: [
      ['Medyo masakit pa po ang sugat ko.', 'My wound still hurts a bit.'],
      ['Sobrang bigat po ng dibdib ko.', 'My chest feels extremely heavy.'],
      ['Hindi na po masyadong malakas ang mga boses.', 'The voices are not so loud anymore.'],
      ['Ang init ng panahon ngayon!', 'The weather is so hot today!'],
      ['Napakasarap ng luto ni Lola.', 'Grandma\'s cooking is delicious.'],
      ['Gutom na gutom na ang mga bata.', 'The children are starving.']
    ],
    quiz: [
      ['Which is weakest?', ['Medyo pagod ako.', 'Pagod na pagod ako.', 'Sobrang pagod ako.'], 0, 'Medyo = somewhat. Doubling and sobrang are both strong.'],
      ['"Ang ganda ____ bahay ninyo!"', ['ang', 'ng', 'sa'], 1, 'After ang + root (how ...!), the thing described takes ng.'],
      ['"Hindi gaanong mainit" means', ['very hot', 'too hot', 'not very hot'], 2, 'Hindi gaano = not very.'],
      ['Which sentence is correct?', ['Napakabait ng anak ninyo.', 'Napakamabait ng anak ninyo.', 'Napakabait ang anak ninyo.'], 0, 'Napaka- + root, then ng before the one described.'],
      ['A patient says "Pagod na pagod na po ako sa buhay." What is your next step?', ['Tell her to rest and move on', 'Ask gently about thoughts of death', 'Ask what she ate today'], 1, 'Being so tired of life is a cue to ask about thoughts of death.'],
      ['"Masyadong malamig ang kuwarto." The room is', ['a bit cold', 'not cold', 'too cold'], 2, 'Masyado = too, overly.']
    ]
  },
  'location': {
    mistakes: [
      ['Nasaan ka pupunta?', 'Saan ka pupunta?', 'Nasaan asks where something is and goes before an ang-phrase; before a verb, use saan.'],
      ['Hindi nasa bahay si Ben.', 'Wala sa bahay si Ben.', 'The negative of nasa is wala sa, not hindi nasa.'],
      ['Galing ako sa Liza.', 'Galing ako kay Liza.', 'Before a person\'s name, sa becomes kay.']
    ],
    more: [
      ['Nasa klinika pa po ang doktor.', 'The doctor is still at the clinic.'],
      ['Galing po siya sa ibang ospital.', 'He came from another hospital.'],
      ['Nakaupo po sa tabi ng kama ang nanay niya.', 'Her mother is sitting next to the bed.'],
      ['Saan ka bumili ng tinapay?', 'Where did you buy the bread?'],
      ['Papunta kami sa simbahan.', 'We are on our way to church.'],
      ['Nasa ilalim ng upuan ang tsinelas mo.', 'Your slippers are under the chair.']
    ],
    quiz: [
      ['"Where is the nurse?"', ['Nasaan ang nars?', 'Nasa ang nars?', 'Saan nasa ang nars?'], 0, 'Nasaan goes before an ang-phrase to ask where someone is.'],
      ['"Galing kay Ana ang sulat" means', ['The letter is for Ana.', 'The letter is from Ana.', 'Ana is going to write a letter.'], 1, 'Galing kay = from, with a person\'s name.'],
      ['"behind the house"', ['sa likod sa bahay', 'sa likod na bahay', 'sa likod ng bahay'], 2, 'A position word is a noun, so what follows takes ng.'],
      ['Which sentence is correct?', ['Kumakain si Ben nasa kusina.', 'Kumakain si Ben sa kusina.', 'Kumakain si Ben nasaan kusina.'], 1, 'With a verb, the place takes sa; nasa is used only when there is no verb.'],
      ['"Nandiyan" means', ['there, near you', 'over there, far from us both', 'here, near me'], 0, 'Nandito = near me, nandiyan = near you, nandoon = far from us both.'],
      ['On the ward you ask "Nasaan po tayo ngayon?" and the patient says "Nasa palengke po." This suggests', ['the patient is fully oriented', 'the patient is on the way to the market', 'the patient may not be oriented to place'], 2, 'A wrong answer to the place question is a finding of disorientation.']
    ]
  },
  'spanish-numbers': {
    mistakes: [
      ['Alas-uno po siya dumating.', 'Ala-una po siya dumating.', 'One o\'clock is ala-una; only the other hours take alas-.'],
      ['Ika-kinse po ng Marso siya dinala rito.', 'A-kinse po ng Marso siya dinala rito.', 'Spanish-derived numbers in dates take a-; ika- goes only with Tagalog numbers (ikalabinlima).'],
      ['Alas-dos na oras po siyang natulog.', 'Dalawang oras po siyang natulog.', 'Alas- names a clock time, not a length of time; count hours with Tagalog numbers and a linker.']
    ],
    more: [
      ['Alas-sais po ng umaga ang unang inom niya ng gamot.', 'Her first dose is at six in the morning.'],
      ['Kuwarenta\'y siyete na po ang nanay ko.', 'My mother is forty-seven.'],
      ['A-tres po ng Mayo ang huling check-up niya.', 'His last check-up was on the third of May.'],
      ['Trenta pesos po ang pamasahe papunta sa bayan.', 'The fare to town is thirty pesos.'],
      ['Alas-singko y medya ng hapon ang uwi ko.', 'I go home at five-thirty in the afternoon.'],
      ['Sesenta pesos ang isang kilo ng saging.', 'Bananas are sixty pesos a kilo.']
    ],
    quiz: [
      ['"Menos kinse para alas-otso" is', ['7:45', '8:15', '8:45'], 0, 'Menos kinse = fifteen minutes before, so a quarter to eight.'],
      ['"Trenta\'y singko" is', ['53', '35', '30'], 1, 'Trenta (30) + \'y + singko (5).'],
      ['Which date is careful, formal Tagalog?', ['a-diyes ng Abril', 'diyes ng Abril', 'ikasampu ng Abril'], 2, 'Formal Tagalog dates use ika- with a Tagalog number.'],
      ['"He slept for three hours."', ['Alas-tres siyang natulog.', 'Tatlong oras siyang natulog.', 'Tatlo oras siyang natulog.'], 1, 'A length of time is counted with a Tagalog number and a linker. Alas-tres siyang natulog means he fell asleep at three.'],
      ['A relative says the patient is "mga kuwarenta". What is the best follow-up?', ['Kuwarenta pesos po ba?', 'Alas-kuwatro po ba?', 'Anong taon po siya ipinanganak?'], 2, 'Ages from relatives are often rounded; the birth year pins it down.'],
      ['"Ala-una ng hapon" is', ['1:00 in the afternoon', '1:00 in the morning', '11:00 in the morning'], 0, 'Ala-una = one o\'clock; ng hapon = in the afternoon.']
    ]
  },
  'pic-nasaan': {
    mistakes: [
      ['Nasa ilalim kama ang tsinelas.', 'Nasa ilalim ng kama ang tsinelas.', 'The position word is a noun, so it needs ng before the object.'],
      ['Nasa sa loob ng bag ang susi.', 'Nasa loob ng bag ang susi.', 'Nasa already contains sa; do not add a second sa.'],
      ['Nasa ako po ang salamin ninyo.', 'Nasa akin po ang salamin ninyo.', 'With a pronoun, nasa takes the sa form: nasa akin, nasa iyo, nasa kanya.']
    ],
    more: [
      ['Nasa ilalim po ng kama ang tsinelas ninyo.', 'Your slippers are under the bed.'],
      ['Nasa tabi po ng bintana ang kama ninyo.', 'Your bed is next to the window.'],
      ['Nasaan po ang kuwarto ni Mang Tonyo?', 'Where is Mang Tonyo\'s room?'],
      ['Nasa loob ng kabinet ang mga plato.', 'The plates are inside the cupboard.'],
      ['Nasaan ang cellphone ko?', 'Where is my cellphone?'],
      ['Nandoon ang tindahan, sa tabi ng simbahan.', 'The store is over there, next to the church.']
    ],
    quiz: [
      ['"Nasa ilalim ____ upuan ang bag."', ['ng', 'sa', 'ang'], 0, 'Position word + ng + the object.'],
      ['"Nasa loob ng bag ang susi" means', ['The key is under the bag.', 'The key is inside the bag.', 'The key is next to the bag.'], 1, 'Sa loob ng = inside.'],
      ['You want to ask a patient where her bag is. You say:', ['Ano po ang bag ninyo?', 'Sino po ang bag ninyo?', 'Nasaan po ang bag ninyo?'], 2, 'Nasaan + ang phrase asks where something is.'],
      ['In the positions picture, where is the bird?', ['Nasa ilalim ng mesa.', 'Nasa labas ng bintana.', 'Nasa loob ng malaking kahon.'], 1, 'The bird is outside the window: sa labas ng.'],
      ['"I have the key." (The key is with me.)', ['Nasa akin ang susi.', 'Nasa ako ang susi.', 'Na kay ako ang susi.'], 0, 'With a pronoun, use nasa + the sa form: nasa akin.'],
      ['The patient\'s slippers are right beside her, far from you. You tell her:', ['Nandito po ang tsinelas ninyo.', 'Nandoon po ang tsinelas ninyo.', 'Nandiyan po ang tsinelas ninyo.'], 2, 'Nandiyan = there, near the listener.']
    ]
  },
  'pic-masakit': {
    mistakes: [
      ['Masakit ako ng tiyan.', 'Masakit ang tiyan ko.', 'The body part is the ang phrase and ko follows it; ako is not the one that is painful.'],
      ['Masakit po ang ko likod.', 'Masakit po ang likod ko.', 'Ko (my) comes after the noun, not before it as in English.'],
      ['Masakit po ang mata kanan ko.', 'Masakit po ang kanang mata ko.', 'Left or right goes before the body part, joined with the linker: kanang mata.']
    ],
    more: [
      ['Masakit po ba ang likod ninyo?', 'Does your back hurt?'],
      ['Kailan pa po namamanhid ang paa ninyo?', 'Since when has your foot been numb?'],
      ['Makirot daw po ang sugat niya.', 'He says his wound is sore.'],
      ['Masakit ang mga paa ko dahil malayo ang nilakad namin.', 'My feet hurt because we walked a long way.'],
      ['Makati ang braso ko dahil sa lamok.', 'My arm is itchy because of the mosquitoes.'],
      ['Masakit ang ngipin ng anak ko.', 'My child has a toothache.']
    ],
    quiz: [
      ['"My back hurts."', ['Masakit ang likod ko.', 'Masakit ako ng likod.', 'Masakit ang likod ako.'], 0, 'Masakit + ang + body part + ko.'],
      ['"Mahapdi po ang mata ko" means', ['My eyes are swollen.', 'My eyes sting.', 'My eyes are numb.'], 1, 'Mahapdi = stinging, burning.'],
      ['"Masakit po ba ang tuhod ____?" (your, respectful)', ['mo', 'ko', 'ninyo'], 2, 'Ninyo is the respectful "your"; mo is familiar and ko is "my".'],
      ['How do you ask "Since when?" about pain?', ['Saan pa po?', 'Kailan pa po?', 'Gaano pa po?'], 1, 'Kailan pa = since when.'],
      ['A patient points to his stomach and says "Dito po banda." What has he told you?', ['Roughly where it hurts', 'Since when it has hurt', 'How bad it is'], 0, 'Dito banda = around here: he is showing the place.'],
      ['A nervous patient says "Mabigat po ang dibdib ko." What do you do?', ['Tell him it is only nerves', 'Ask him to point to his foot', 'Ask about it and arrange a medical check'], 2, 'Chest heaviness still needs a medical check, even when it comes with nerves.']
    ]
  },
  'pic-paglalarawan': {
    mistakes: [
      ['Mahabang ang buntot ng pusa.', 'Mahaba ang buntot ng pusa.', 'In a sentence the describing word takes no linker before ang; mahabang is only for a phrase like mahabang buntot.'],
      ['Mahaba ang tainga aso.', 'Mahaba ang tainga ng aso.', 'The owner is joined with ng: ang buntot ng aso.'],
      ['Wala pakpak ang pusa.', 'Walang pakpak ang pusa.', 'Wala takes the linker before the thing: walang pakpak.']
    ],
    more: [
      ['Malaki po ba ang bukol sa ulo niya?', 'Is the bump on his head big?'],
      ['Maikli na po ang buhok niya ngayon.', 'Her hair is short now.'],
      ['Walang sugat ang kamay niya.', 'His hand has no wound.'],
      ['Malaki ang bahay nina Ana.', 'Ana\'s family\'s house is big.'],
      ['Matigas ang tinapay na ito.', 'This bread is hard.'],
      ['May mahabang buntot ang pusa namin.', 'Our cat has a long tail.']
    ],
    quiz: [
      ['"The cat\'s eyes are big."', ['Malaki ang mata ng pusa.', 'Malaking mata ng pusa.', 'Malaki ang mata pusa.'], 0, 'Describing word, then the ang phrase, then ng + owner.'],
      ['The opposite of malambot is', ['malaki', 'matigas', 'matalas'], 1, 'Malambot (soft) and matigas (hard).'],
      ['"Mahabang buhok" is', ['a full sentence: the hair is long', 'a question about hair', 'a phrase: long hair'], 2, 'With the linker it is a phrase; with ang (mahaba ang buhok) it is a sentence.'],
      ['"____ tuka ang aso." (The dog has no beak.)', ['May', 'Walang', 'Wala'], 1, 'Wala takes the linker before the thing: walang tuka.'],
      ['For a person, "tall" is', ['matangkad', 'mahaba', 'malaki'], 0, 'Matangkad = tall. Mahaba is for length, malaki for size.'],
      ['A relative mentions a cut. You want to ask "Is the wound long?"', ['Mahaba po ba sugat?', 'Sugat po ba mahaba?', 'Mahaba po ba ang sugat?'], 2, 'Describing word first, then po ba, then the ang phrase.']
    ]
  },
  'pic-bilang': {
    mistakes: [
      ['Tatlo aso ang alaga namin.', 'Tatlong aso ang alaga namin.', 'The number joins the noun with the linker: tatlo ends in a vowel, so it takes -ng.'],
      ['Dalawang mga pusa ang nasa labas.', 'Dalawang pusa ang nasa labas.', 'No mga after a number; the number already shows there is more than one.'],
      ['Apat ng saging ang binili ko.', 'Apat na saging ang binili ko.', 'After a consonant the linker is na; ng here is the marker, not the linker.']
    ],
    more: [
      ['Ilan po ang anak ninyo?', 'How many children do you have?'],
      ['Dalawang kumot po ang hiningi ng pasyente.', 'The patient asked for two blankets.'],
      ['Isang baso lang po ng gatas ang naubos niya.', 'She only finished one glass of milk.'],
      ['Bumili ako ng isang kilo ng bigas.', 'I bought a kilo of rice.'],
      ['May tatlong kambing si Mang Tonyo.', 'Mang Tonyo has three goats.'],
      ['Ilang pares ng sapatos ang dala mo?', 'How many pairs of shoes did you bring?']
    ],
    quiz: [
      ['"Seven ducks"', ['pitong bibe', 'pito na bibe', 'pitong mga bibe'], 0, 'Pito ends in a vowel, so it takes -ng. No mga after a number.'],
      ['"Ilan ang aso ninyo?" asks', ['how much your dog costs', 'how many dogs you have', 'where your dog is'], 1, 'Ilan = how many. Magkano asks a price.'],
      ['"Isang baso ____ tubig."', ['na', 'ang', 'ng'], 2, 'A measure word joins the thing measured with ng.'],
      ['Which is correct?', ['siyam ng kamatis', 'siyam na kamatis', 'siyamng kamatis'], 1, 'Siyam ends in a consonant, so the linker is na.'],
      ['Asked how many cups of coffee she drinks a day, a patient says "Mga lima po." She means', ['about five', 'exactly five', 'the five cups'], 0, 'Before a number, mga means about.'],
      ['You ask "Ilan po kayong magkakapatid?" and the patient says "Apat po kami." How many brothers and sisters does he have besides himself?', ['four', 'five', 'three'], 2, 'The answer counts the speaker too, so four in all means three others.']
    ]
  },
  'pic-suot': {
    mistakes: [
      ['Nakasuot jacket ang babae.', 'Nakasuot ng jacket ang babae.', 'The long form needs ng before the item: nakasuot ng.'],
      ['Naka siya palda.', 'Nakapalda siya.', 'Naka- is a prefix: it attaches to the thing worn, and siya follows the whole word.'],
      ['Itim sapatos ang suot niya.', 'Itim na sapatos ang suot niya.', 'A colour joins the item with the linker; itim ends in a consonant, so it takes na.']
    ],
    more: [
      ['Ano po ang suot ng anak ninyo nang umalis siya?', 'What was your child wearing when he left?'],
      ['Nakatsinelas lang po siya nang dumating sa ospital.', 'She was only in slippers when she arrived at the hospital.'],
      ['Naka-uniform ang mga nars.', 'The nurses are in uniform.'],
      ['Nakasumbrero si Lolo kapag pumupunta sa bukid.', 'Grandpa wears a hat when he goes to the farm.'],
      ['Nakasuot si Ana ng asul na palda.', 'Ana is wearing a blue skirt.'],
      ['Nakasalamin na ngayon ang kapatid ko.', 'My brother wears glasses now.']
    ],
    quiz: [
      ['"She is wearing a skirt."', ['Nakapalda siya.', 'Naka-ng palda siya.', 'Nakasuot palda siya.'], 0, 'Naka- fused onto the item: nakapalda. The long form needs ng: nakasuot ng palda.'],
      ['"Ano ang suot niya?" asks', ['Where is she going?', 'What is she wearing?', 'What colour is it?'], 1, 'Suot is what someone has on.'],
      ['"Nakasuot siya ____ itim na pantalon."', ['na', 'ang', 'ng'], 2, 'Nakasuot is followed by ng before the item.'],
      ['A woman is holding a bag in her hand. Which describes it best?', ['Nakasuot ng bag ang babae.', 'May dalang bag ang babae.', 'Bag ang babae.'], 1, 'A bag held in the hand is carried: may dala. Nakasuot is for clothes.'],
      ['"Black shoes"', ['itim na sapatos', 'itim ng sapatos', 'sapatos itim'], 0, 'Colour + linker + item; itim takes na.'],
      ['For the appearance part of an MSE, which line fits best?', ['Burara siya.', 'Mukha siyang tamad.', 'Nakasuot siya ng dalawang jacket.'], 2, 'Describe what is seen, not a judgement of the person.']
    ]
  }
});
