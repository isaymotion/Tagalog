/* Speaking / dialogue drills. lines: [speakerIndex, tagalog, english, taglishAlternative?]
   you = index of the role the learner plays. */
window.DIALOGUES = [
{
  id: 'meet', level: 'A1', title: 'Meeting someone', roles: ['You', 'Liza'], you: 0,
  lines: [
    [0, 'Magandang umaga po! Ako si Bella.', 'Good morning! I\'m Bella.'],
    [1, 'Magandang umaga rin! Ako naman si Liza. Kumusta ka?', 'Good morning too! I\'m Liza. How are you?'],
    [0, 'Mabuti naman, salamat. Ikaw?', 'I\'m fine, thanks. And you?'],
    [1, 'Okay lang. Taga-saan ka?', 'I\'m okay. Where are you from?'],
    [0, 'Taga-Amerika ako, pero nag-aaral ako ng Tagalog.', 'I\'m from America, but I\'m studying Tagalog.', 'Taga-US ako, pero nag-aaral ako ng Tagalog.'],
    [1, 'Ang galing mo naman!', 'You\'re so good!'],
    [0, 'Salamat! Unti-unti lang.', 'Thanks! Little by little.']
  ]
},
{
  id: 'jeep', level: 'A1', title: 'Riding a jeepney', roles: ['You', 'Driver', 'Passenger'], you: 0,
  lines: [
    [0, 'Kuya, dadaan po ba ito sa PGH?', 'Kuya, does this pass by PGH?'],
    [1, 'Oo, sakay na.', 'Yes, get in.'],
    [0, 'Bayad po. Isa, galing Quiapo, papuntang PGH.', 'Here\'s my fare. One, from Quiapo to PGH.'],
    [2, 'Ito po, Kuya, bayad daw.', 'Here, Kuya, fare (from her).'],
    [1, 'Sukli mo, Ineng.', 'Your change, miss.'],
    [0, 'Salamat po. Para po sa tabi!', 'Thank you. Stop by the side, please!']
  ]
},
{
  id: 'market', level: 'A1', title: 'Buying at the market', roles: ['You', 'Vendor'], you: 0,
  lines: [
    [0, 'Ate, magkano po ang mangga?', 'Ate, how much are the mangoes?'],
    [1, 'Isandaan at dalawampu ang isang kilo.', 'One hundred twenty per kilo.'],
    [0, 'Puwede po bang isandaan na lang?', 'Can it be one hundred instead?'],
    [1, 'Sige na nga, isandaan at sampu.', 'Oh fine, one hundred ten.'],
    [0, 'Sige po, isang kilo.', 'Okay, one kilo.'],
    [1, 'Heto. Salamat, balik ka ha!', 'Here. Thanks, come back okay!']
  ]
},
{
  id: 'directions', level: 'A2', title: 'Asking for directions', roles: ['You', 'Guard'], you: 0,
  lines: [
    [0, 'Kuya, saan po ang Department of Psychiatry?', 'Kuya, where is the Department of Psychiatry?'],
    [1, 'Diretso lang po kayo, tapos kumanan sa dulo. Nasa ikatlong palapag po.', 'Go straight, then turn right at the end. It\'s on the third floor.'],
    [0, 'May elevator po ba?', 'Is there an elevator?'],
    [1, 'Meron po, sa kaliwa ng information.', 'Yes, to the left of the information desk.'],
    [0, 'Salamat po, Kuya.', 'Thank you, Kuya.']
  ]
},
{
  id: 'food', level: 'A2', title: 'Lunch with co-residents', roles: ['You', 'Mia'], you: 0,
  lines: [
    [1, 'Kumain ka na ba?', 'Have you eaten?'],
    [0, 'Hindi pa. Gutom na gutom na ako.', 'Not yet. I\'m starving.'],
    [1, 'Tara, sa canteen tayo. Masarap ang sinigang nila.', 'Let\'s go to the canteen. Their sinigang is delicious.'],
    [0, 'Sige! Pero hindi ako masyadong mahilig sa maasim.', 'Okay! But I\'m not very fond of sour food.', 'Sige! Pero hindi ako fan ng maasim.'],
    [1, 'E di adobo na lang. Libre kita ngayon.', 'Then adobo instead. My treat today.'],
    [0, 'Talaga? Salamat! Ako naman sa susunod.', 'Really? Thanks! My turn next time.']
  ]
},
{
  id: 'phone', level: 'A2', title: 'Calling a patient\'s family', roles: ['You', 'Family member'], you: 0,
  lines: [
    [0, 'Hello po, magandang hapon. Si Dr. Navarro po ito mula sa ospital.', 'Hello, good afternoon. This is Dr. Navarro from the hospital.'],
    [1, 'Ay, Dok! Kumusta na po si Tatay?', 'Oh, Doc! How is Dad?'],
    [0, 'Maayos naman po ang lagay niya. Kumakain na po siya at nakakatulog na.', 'He is doing well. He is eating now and can sleep.'],
    [1, 'Salamat sa Diyos. Kailan po siya puwedeng umuwi?', 'Thank God. When can he go home?'],
    [0, 'Pag-uusapan po natin bukas. Puwede po ba kayong pumunta nang alas-diyes?', 'We\'ll discuss it tomorrow. Can you come at 10 o\'clock?'],
    [1, 'Opo, pupunta po ako.', 'Yes, I\'ll come.']
  ]
},
{
  id: 'smalltalk', level: 'B1', title: 'Small talk with a bantay', roles: ['You', 'Bantay'], you: 0,
  lines: [
    [0, 'Kumusta po kayo? Nakatulog po ba kayo kagabi?', 'How are you? Were you able to sleep last night?'],
    [1, 'Kaunti lang po, Dok. Mainit po kasi at maingay.', 'Just a little, Doc. It\'s hot and noisy.'],
    [0, 'Pasensya na po. Matagal na po ba kayong nagbabantay?', 'I\'m sorry. Have you been watching over him for long?'],
    [1, 'Tatlong araw na po. Kami po ng kapatid ko ang nagpapalitan.', 'Three days now. My sibling and I take turns.'],
    [0, 'Ang hirap po niyan. Huwag po ninyong kalimutang kumain at magpahinga rin.', 'That\'s hard. Don\'t forget to eat and rest too.'],
    [1, 'Salamat po, Dok. Ang bait ninyo.', 'Thank you, Doc. You\'re very kind.']
  ]
},
{
  id: 'explain-med', level: 'B1', title: 'Explaining a prescription', roles: ['You', 'Patient'], you: 0,
  lines: [
    [0, 'Ito po ang reseta ninyo. Isang tableta po, isang beses sa isang araw, tuwing alas-otso ng gabi.', 'This is your prescription. One tablet, once a day, every 8 p.m.'],
    [1, 'Pagkatapos po ba kumain?', 'After eating?'],
    [0, 'Opo, pagkatapos ng hapunan. Puwede po kayong antukin, kaya huwag po muna kayong magmaneho.', 'Yes, after dinner. You may get sleepy, so don\'t drive for now.'],
    [1, 'Gaano po katagal ko iinumin?', 'How long will I take it?'],
    [0, 'Tuloy-tuloy po muna, kahit gumaan na ang pakiramdam ninyo. Huwag po ninyong ititigil nang hindi tayo nag-uusap.', 'Continuously for now, even when you feel better. Don\'t stop it without us talking first.'],
    [0, 'Para masigurado ko po, paano po ninyo iinumin ang gamot?', 'Just to make sure, how will you take the medicine?'],
    [1, 'Isang tableta po, alas-otso ng gabi, pagkatapos kumain.', 'One tablet, at 8 p.m., after eating.'],
    [0, 'Tama po. Magaling!', 'That\'s right. Great!']
  ]
}
];
