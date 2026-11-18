/* Lesson extras part 1 (3.14.0). Draft for review. Shape: see js/views.js. Ids are lesson ids. */
window.LESSON_EXTRA = Object.assign(window.LESSON_EXTRA || {}, {
  'pronounce': {
    mistakes: [
      ['Masakit ang nipin ko.', 'Masakit ang ngipin ko.', 'The word for tooth starts with the single sound ng, as at the end of "sing". English ears often miss it at the start of a word.'],
      ['Kumain na ang manga bata.', 'Kumain na ang mga bata.', 'The plural marker sounds like ma-nga but is always written mga.'],
      ['Bumili siya nang tinapay.', 'Bumili siya ng tinapay.', 'The marker sounds like nang but is written ng. Nang is a different word.']
    ],
    more: [
      ['Masakit po ba ang ngipin ninyo?', 'Does your tooth hurt?'],
      ['Bumalik po kayo bukas sa klinika.', 'Please come back to the clinic tomorrow.'],
      ['Ilang taon na po ang bata?', 'How old is the child?'],
      ['Malapit lang ang tindahan sa bahay namin.', 'The store is close to our house.'],
      ['Maraming tao sa labas ngayon.', 'There are a lot of people outside now.'],
      ['Ngayon na ba tayo aalis?', 'Are we leaving now?']
    ],
    quiz: [
      ['How is the "ng" in "ngayon" (now) said?', ['like the "ng" at the end of "sing"', 'as "nag"', 'as "en-ji"'], 0, 'Ng is one sound, and it can start a word.'],
      ['You hear "koo-moos-ta". How is it spelled?', ['Koomoosta', 'Kumusta', 'Kumoosta'], 1, 'The "oo" sound is written u in Tagalog.'],
      ['How many syllables in "paa" (foot)?', ['One', 'Three', 'Two'], 2, 'Every vowel is pronounced: pa-a.'],
      ['"Bukas ang klinika", with the stress on the last syllable (bu-KAS), means', ['The clinic is open', 'The clinic is far', 'The clinic is closed'], 0, 'buKAS = open. BUkas = tomorrow.'],
      ['Telling a family you will see them tomorrow, say "bukas" with the stress on', ['the second syllable: bu-KAS', 'the first syllable: BU-kas', 'neither, because stress never changes meaning'], 1, 'BUkas = tomorrow. buKAS = open.'],
      ['Which is spelled correctly? (My foot hurts.)', ['Masakeet ang paa ko.', 'Masakit ang pa ko.', 'Masakit ang paa ko.'], 2, 'The "ee" sound is written i, and both vowels of paa are written and said.']
    ]
  },
  'markers': {
    mistakes: [
      ['Pumunta ako ang ospital.', 'Pumunta ako sa ospital.', 'A place you go to takes sa, not ang.'],
      ['Bumili ako ang saging.', 'Bumili ako ng saging.', 'With an actor-focus verb the thing bought takes ng. Ako is already the topic.'],
      ['Masakit ang ulo ang bata.', 'Masakit ang ulo ng bata.', 'The owner (the child\'s head) takes ng, not a second ang.']
    ],
    more: [
      ['Masakit ang likod ng pasyente.', 'The patient\'s back hurts.'],
      ['Uminom na po ba kayo ng tubig?', 'Have you had some water?'],
      ['Pumunta ang nanay ng pasyente sa klinika.', 'The patient\'s mother went to the clinic.'],
      ['Kumain kami ng isda sa bahay.', 'We ate fish at home.'],
      ['Malinis ang kusina ng lola ko.', 'My grandmother\'s kitchen is clean.'],
      ['Bumili ang tatay ko ng tinapay sa palengke.', 'My father bought bread at the market.']
    ],
    quiz: [
      ['"Nasaan ang anak ____ pasyente?" (Where is the patient\'s child?)', ['sa', 'ang', 'ng'], 2, 'Possession takes ng.'],
      ['"Malaki ang bahay ng lola ko." What is big?', ['my grandmother', 'my grandmother\'s house', 'my house'], 1, 'Ang bahay is the topic; ng lola ko says whose house.'],
      ['Which sentence is correct? (The child drank milk.)', ['Uminom ang bata sa gatas.', 'Uminom ang bata ng gatas.', 'Uminom ng bata ang gatas.'], 1, 'The doer of uminom takes ang; the drink takes ng.'],
      ['The daughter says "Naiwan sa bahay ang gamot ng tatay ko." Whose medicine was left at home?', ['her father\'s', 'her own', 'the doctor\'s'], 0, 'Ng tatay ko = of my father.'],
      ['"Bumili ako ____ gamot sa botika."', ['ng', 'sa', 'ang'], 0, 'The thing bought in an actor-focus sentence takes ng.'],
      ['"Natulog ang bata ____ kuwarto."', ['ang', 'ng', 'sa'], 2, 'Location takes sa.']
    ]
  },
  'names': {
    mistakes: [
      ['Nasaan ang Carlo?', 'Nasaan si Carlo?', 'A person\'s name as the topic takes si, not ang.'],
      ['Ito ang anak ng Aling Rosa.', 'Ito ang anak ni Aling Rosa.', 'The owner is a named person, so ng becomes ni.'],
      ['Tumawag ako sa Liza kagabi.', 'Tumawag ako kay Liza kagabi.', 'Toward a named person, sa becomes kay.']
    ],
    more: [
      ['Si Aling Rosa po ba ang bantay ng pasyente?', 'Is Aling Rosa the patient\'s watcher?'],
      ['Nasaan po ang gamot ni Mang Tonyo?', 'Where is Mang Tonyo\'s medicine?'],
      ['Bumisita sina Ben at Liza sa pasyente kahapon.', 'Ben and Liza visited the patient yesterday.'],
      ['Si Carlo ang kapatid ni Ana.', 'Carlo is Ana\'s brother.'],
      ['Nagpadala ako ng pagkain kay Lola.', 'I sent some food to Grandma.'],
      ['Pupunta kami kina Liza sa Linggo.', 'We are going to Liza\'s place on Sunday.']
    ],
    quiz: [
      ['"Masarap ang luto ____ Mang Tonyo."', ['si', 'ni', 'kay'], 1, 'Whose cooking: ni + name.'],
      ['"Sumama ka ____ Liza." (Go with Liza.)', ['kay', 'si', 'ni'], 0, 'Toward or with a named person: kay.'],
      ['Which is correct? (Ben is the nurse.)', ['Ang Ben ang nars.', 'Ni Ben ang nars.', 'Si Ben ang nars.'], 2, 'A name as the topic takes si.'],
      ['"Pumunta kami kina Ana." means', ['We went to Ana\'s family\'s place.', 'We went with Ana.', 'Ana came to our place.'], 0, 'Kina = to the place of Ana and her people.'],
      ['A watcher says "Ako po ang anak ni Mang Tonyo." Who is the watcher?', ['Mang Tonyo', 'Mang Tonyo\'s child', 'Mang Tonyo\'s father'], 1, 'Anak ni Mang Tonyo = Mang Tonyo\'s child.'],
      ['"____ Ana at Ben ang mga bantay." (Ana and Ben are the watchers.)', ['Kina', 'Nina', 'Sina'], 2, 'Two names as the topic: sina.']
    ]
  },
  'pronouns': {
    mistakes: [
      ['Masakit ang likod ako.', 'Masakit ang likod ko.', '"My" after a noun is ko, from the ng-set, not ako.'],
      ['Nasaan ang anak ka?', 'Nasaan ang anak mo?', '"Your" after a noun is mo, not ka.'],
      ['Ko ang bag na ito.', 'Akin ang bag na ito.', '"Mine" at the front of the sentence is akin, from the sa-set.']
    ],
    more: [
      ['Tutulungan po namin kayo.', 'We (the staff) will help you.'],
      ['Maglakad po tayo sa labas mamaya.', 'Let\'s take a walk outside later.'],
      ['Kaniya po ba ang tsinelas na ito?', 'Are these slippers his?'],
      ['Pupunta kami sa palengke bukas.', 'We (not you) are going to the market tomorrow.'],
      ['Iyo ba ang payong na ito?', 'Is this umbrella yours?'],
      ['Magluto tayo ng adobo mamaya.', 'Let\'s cook adobo later.']
    ],
    quiz: [
      ['"Pupunta ____ sa Maynila." (We, not you, are going to Manila.)', ['kami', 'tayo', 'sila'], 0, 'Kami leaves the listener out.'],
      ['"Ano ang trabaho ____?" (What is his job?)', ['siya', 'niya', 'kaniya'], 1, '"His" after a noun is niya.'],
      ['Which is correct? (This is mine.)', ['Ko ito.', 'Ako ito.', 'Akin ito.'], 2, 'Mine = akin. Ako ito means "It\'s me."'],
      ['A patient says "Kinakausap niya ako." What do you ask next?', ['Lalaki po ba o babae?', 'Ilang taon na po kayo?', 'Kumain na po ba kayo?'], 0, 'Niya has no gender, so ask who it is.'],
      ['"Kumain na ba ____?" (to a group of visitors)', ['ka', 'kayo', 'siya'], 1, 'Kayo is "you" for more than one person.'],
      ['"Kanila ang bahay na iyon." means', ['They are at that house.', 'That house is ours.', 'That house is theirs.'], 2, 'Kanila = theirs.']
    ]
  },
  'linkers': {
    mistakes: [
      ['Maganda na umaga po.', 'Magandang umaga po.', 'Maganda ends in a vowel, so it takes -ng, not na.'],
      ['Mabaitng nars si Liza.', 'Mabait na nars si Liza.', 'Mabait ends in t, a consonant, so the linker is na.'],
      ['May malaki aso sa labas.', 'May malaking aso sa labas.', 'A describing word and its noun always need a linker.']
    ],
    more: [
      ['Kailangan po ninyong magpahinga.', 'You need to rest.'],
      ['Malinis na kumot po ito.', 'This is a clean blanket.'],
      ['Mainit na tubig po ba ang gusto ninyo?', 'Would you like warm water?'],
      ['Bumili ako ng bagong sapatos.', 'I bought new shoes.'],
      ['May mahabang pila sa palengke kanina.', 'There was a long line at the market earlier.'],
      ['Gusto naming manood ng sine mamaya.', 'We want to watch a movie later.']
    ],
    quiz: [
      ['"a long day"', ['mahabang araw', 'mahaba na araw', 'mahabang na araw'], 0, 'Mahaba ends in a vowel: add -ng.'],
      ['"a clean room"', ['malinisng kuwarto', 'malinis na kuwarto', 'malinis kuwarto'], 1, 'Malinis ends in s: use na.'],
      ['Which is correct? (They want to eat.)', ['Gusto nila kumain.', 'Gusto sila kumain.', 'Gusto nilang kumain.'], 2, 'Nila + -ng links gusto to the verb.'],
      ['"kaibigang mabait" means', ['a kind friend', 'a friend who is far', 'a kind sister'], 0, 'Kaibigan ends in n, so it takes -g. The order is flexible.'],
      ['A patient says "Ayaw kong uminom ng gamot." She is telling you that', ['she already took her medicine', 'she does not want to take her medicine', 'she has no medicine left'], 1, 'Ayaw kong + verb = I don\'t want to.'],
      ['"a quiet place"', ['tahimik lugar', 'tahimikng lugar', 'tahimik na lugar'], 2, 'Tahimik ends in k: use na.']
    ]
  },
  'may-wala': {
    mistakes: [
      ['May ka bang lagnat?', 'May lagnat ka ba?', 'May must be followed directly by the noun. Use mayroon if a word comes between.'],
      ['Wala ako lagnat.', 'Wala akong lagnat.', 'After wala, the pronoun takes the linker -ng before the noun.'],
      ['Hindi may gamot sa bahay.', 'Walang gamot sa bahay.', '"There is no" is wala, not hindi may.']
    ],
    more: [
      ['May sakit po ba ang anak ninyo?', 'Is your child sick?'],
      ['Wala pong bantay ang pasyente ngayong gabi.', 'The patient has no watcher tonight.'],
      ['Mayroon po ba kayong ubo o sipon?', 'Do you have a cough or a cold?'],
      ['May tindahan sa kanto.', 'There is a store at the corner.'],
      ['Walang tubig sa gripo kaninang umaga.', 'There was no water from the tap this morning.'],
      ['Meron ka bang barya?', 'Do you have any coins?']
    ],
    quiz: [
      ['"There is no doctor here today."', ['Walang doktor dito ngayon.', 'Hindi may doktor dito ngayon.', 'Wala doktor dito ngayon.'], 0, 'Wala + -ng + noun.'],
      ['"____ po ba kayong anak?" (Do you have children?)', ['May', 'Mayroon', 'Wala'], 1, 'Words come between, so use mayroon.'],
      ['"May umiiyak sa labas." means', ['No one is crying outside.', 'I am crying outside.', 'Someone is crying outside.'], 2, 'May + verb = someone who is doing it.'],
      ['You need to know if anyone at home is with the patient. Ask:', ['May kasama po ba kayo sa bahay?', 'Kasama po ba kayo sa bahay?', 'Wala po ba kayo sa bahay?'], 0, 'May kasama = there is someone with you.'],
      ['Which is correct? (Do you have a question?)', ['May ba kayong tanong?', 'May tanong ba kayo?', 'Mayroon tanong ba kayo?'], 1, 'May + noun first, then ba and the pronoun.'],
      ['"____ siyang trabaho." (He has no job.)', ['May', 'Mayroon', 'Wala'], 2, 'Not having something is wala.']
    ]
  },
  'questions': {
    mistakes: [
      ['Ba kumain ka na?', 'Kumain ka na ba?', 'Ba never starts a sentence. It comes after the first word or phrase and after ka and na.'],
      ['Pagod ba ka?', 'Pagod ka ba?', 'A short pronoun like ka comes before ba.'],
      ['Gaano malaki ang sugat?', 'Gaano kalaki ang sugat?', 'After gaano, the describing word takes ka- in place of ma-.']
    ],
    more: [
      ['Kailan po kayo huling kumain?', 'When did you last eat?'],
      ['Sino po ang nagbabantay sa inyo sa gabi?', 'Who stays with you at night?'],
      ['Gaano po kadalas sumasakit ang ulo ninyo?', 'How often do you get headaches?'],
      ['Magkano po ang isang kilo ng bigas?', 'How much is a kilo of rice?'],
      ['Saan tayo kakain mamaya?', 'Where are we eating later?'],
      ['Bakit ka nagmamadali?', 'Why are you in a hurry?']
    ],
    quiz: [
      ['"Where is the nurse?"', ['Nasaan ang nars?', 'Kailan ang nars?', 'Sino ang nars?'], 0, 'Nasaan = where is.'],
      ['"How much is the fare?"', ['Ilan ang pamasahe?', 'Magkano ang pamasahe?', 'Gaano ang pamasahe?'], 1, 'Magkano asks about cost.'],
      ['"Paano po ninyo iniinom ang gamot?" asks', ['why you take the medicine', 'when you take the medicine', 'how you take the medicine'], 2, 'Paano = how.'],
      ['You want to know how long the patient has been unable to sleep. Ask:', ['Gaano katagal na po kayong hindi makatulog?', 'Bakit po kayo hindi natutulog?', 'Saan po kayo natutulog?'], 0, 'Gaano katagal = how long. It also avoids a blunt bakit.'],
      ['Which is correct? (Are you full now?)', ['Busog ba ka na?', 'Busog ka na ba?', 'Ba busog ka na?'], 1, 'Ka and na come first, then ba.'],
      ['"____ po kayo dumating?" (When did you arrive?)', ['Saan', 'Bakit', 'Kailan'], 2, 'Kailan = when.']
    ]
  },
  'negation': {
    mistakes: [
      ['Hindi kumain siya.', 'Hindi siya kumain.', 'A short pronoun jumps forward to sit right after hindi.'],
      ['Hindi ako alam.', 'Hindi ko alam.', 'Alam takes the ng-set pronoun: ko, not ako.'],
      ['Hindi mo kalimutan ang gamot.', 'Huwag mong kalimutan ang gamot.', 'A "don\'t" command uses huwag, and the pronoun takes -ng.']
    ],
    more: [
      ['Hindi pa po dumarating ang resulta.', 'The result has not come in yet.'],
      ['Wala po siyang gana kaninang umaga.', 'She had no appetite this morning.'],
      ['Huwag po kayong lumabas nang mag-isa.', 'Please don\'t go out on your own.'],
      ['Hindi na ako nagtatrabaho tuwing Sabado.', 'I no longer work on Saturdays.'],
      ['Wala kaming kuryente kagabi.', 'We had no electricity last night.'],
      ['Huwag kang maingay, tulog pa ang bata.', 'Don\'t be noisy, the child is still asleep.']
    ],
    quiz: [
      ['"Hindi pa ako kumakain." means', ['I have not eaten yet.', 'I no longer eat.', 'I don\'t want to eat.'], 0, 'Hindi pa = not yet.'],
      ['"____ kang umalis." (Don\'t leave.)', ['Hindi', 'Huwag', 'Wala'], 1, 'A command uses huwag.'],
      ['Which is correct? (She is not sad.)', ['Wala siyang malungkot.', 'Hindi malungkot siya.', 'Hindi siya malungkot.'], 2, 'Hindi negates a describing word, and siya moves up after hindi.'],
      ['You want to tell a patient not to get up yet. Say:', ['Huwag po muna kayong tumayo.', 'Hindi po muna kayo tumayo.', 'Wala po muna kayong tumayo.'], 0, 'A polite "don\'t" is huwag po + kayong.'],
      ['"Wala na kaming bigas." means', ['We have rice now.', 'We have no more rice.', 'We have no rice yet.'], 1, 'Wala na = none anymore.'],
      ['"____ ko siya kilala." (I don\'t know him.)', ['Wala', 'Huwag', 'Hindi'], 2, 'A statement is negated with hindi.']
    ]
  },
  'demonstratives': {
    mistakes: [
      ['Ilagay mo ang bag ito.', 'Ilagay mo ang bag dito.', '"Here" as a place is dito, the sa form. Ito means "this".'],
      ['Masakit ang ngipin ito.', 'Masakit ang ngiping ito.', 'A pointing word joined to a noun needs a linker: -g after a word ending in n.'],
      ['Nasa doon ang nanay ko.', 'Nandoon ang nanay ko.', '"Is over there" is nandoon. Nasa goes with a place noun, not with doon.']
    ],
    more: [
      ['Dito po ba masakit?', 'Does it hurt here?'],
      ['Ilagay po natin iyan sa mesa.', 'Let\'s put that on the table.'],
      ['Inumin po ninyo ito pagkatapos kumain.', 'Please take this after eating.'],
      ['Masarap ang tinapay na ito.', 'This bread is delicious.'],
      ['Doon kami nakatira dati.', 'We used to live there.'],
      ['Ganiyan ang tamang pagtiklop ng damit.', 'That is the right way to fold clothes.']
    ],
    quiz: [
      ['"What is that?" (the thing in the listener\'s hand)', ['Ano iyan?', 'Ano ito?', 'Ano iyon?'], 0, 'Iyan = that, near the listener.'],
      ['"The bathroom is over there." (far from both of you)', ['Diyan ang banyo.', 'Doon ang banyo.', 'Dito ang banyo.'], 1, 'Doon = over there, far from both.'],
      ['"this room"', ['ang kuwarto ito', 'ang ito kuwarto', 'ang kuwartong ito'], 2, 'Kuwarto ends in a vowel: kuwarto + -ng + ito.'],
      ['The patient is holding his side. To ask if it hurts there, say:', ['Masakit po ba diyan?', 'Masakit po ba doon?', 'Masakit po ba dito?'], 0, 'Diyan = there, near the listener.'],
      ['"Nandiyan ba si Ben?" means', ['Is Ben here with me?', 'Is Ben there with you?', 'Who is Ben?'], 1, 'Nandiyan = is there, near the listener.'],
      ['"Hindi ganoon ang nangyari." means', ['That did not happen there.', 'That is what happened.', 'That is not how it happened.'], 2, 'Ganoon = like that.']
    ]
  },
  'plurals': {
    mistakes: [
      ['May tatlo anak si Mang Tonyo.', 'May tatlong anak si Mang Tonyo.', 'A number joins its noun with a linker: tatlo + -ng.'],
      ['Pupunta kami sina Ben.', 'Pupunta kami kina Ben.', 'Going to Ben\'s place takes kina, the plural of kay. Sina marks a topic.'],
      ['Nasaan ang lahat gamot?', 'Nasaan ang lahat ng gamot?', 'Lahat joins its noun with ng.']
    ],
    more: [
      ['Nasa mesa na po ang mga resulta ninyo.', 'Your results are on the table now.'],
      ['Ilang tableta po ang iniinom niya sa gabi?', 'How many tablets does she take at night?'],
      ['Mababait po ang mga bantay sa kabilang kama.', 'The watchers at the next bed are kind.'],
      ['Maraming bata sa parke tuwing Linggo.', 'There are a lot of children at the park every Sunday.'],
      ['Dumating na ang mga bisita.', 'The guests have arrived.'],
      ['Bumili kami ng kaunting prutas.', 'We bought a little fruit.']
    ],
    quiz: [
      ['"Kumain na ang lahat ____ pasyente."', ['ng', 'na', 'sa'], 0, 'Lahat ng + noun = all the.'],
      ['"Malalaki ang mga kuwarto." means', ['The room is big.', 'The rooms are big.', 'The rooms are small.'], 1, 'Mga and the doubled malalaki both show the plural.'],
      ['"We stayed at Ana\'s place."', ['Tumuloy kami kina Ana.', 'Tumuloy kami sina Ana.', 'Tumuloy kami si Ana.'], 0, 'At someone\'s place: kina + name.'],
      ['The watcher says "Mga isang linggo na po siyang hindi natutulog nang maayos." How long has it been?', ['exactly one week', 'about one week', 'one day'], 1, 'Before a number, mga means "about".'],
      ['"Magkakaibigan kami." means', ['We are two siblings.', 'We are mother and child.', 'We are a group of friends.'], 2, 'Magkaka- + kaibigan = three or more friends.'],
      ['"Umiinom siya ng tubig ____ oras." (He drinks water every hour.)', ['marami', 'lahat', 'bawat'], 2, 'Bawat = each, every.']
    ]
  }
});
