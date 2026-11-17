/* Picture words, group 'nature' (Usap Tayo 3.10.0): tap-to-learn pictures for #/pictures (js/pictures.js).
   DRAFT FOR REVIEW by Dr. Navarro (native speaker).
   Shape (PLAN-3.10 A1): window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([ { id, group, title, lv: 'A1'|'A2',
     kind: 'diagram'|'cards', art (diagram only, pictures/art-nature.js, unchanged), intro: one English sentence,
     parts: [ { id, w: the word as said (lower case, 1 to 3 words), en, lv: 'A1'|'A2'|'B1', alt: [other accepted answers],
                diagram: x, y exactly as in the Japanese source (same ids, same order); cards: pic = ONE emoji, Emoji 12.0 or older } ],
     say: [ { tl: a sentence whose answer is exactly ONE part, en, p: part id } ] } ]);   6 to 10 say lines per set
   Sets: landscape d A1; weather c A1; seasons-plants c A1.
   Set ids and part ids are permanent after release: append only. */
window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([
  { id: 'landscape', group: 'nature', title: 'A landscape', lv: 'A1', kind: 'diagram', art: 'landscape',
    intro: 'The basic words for the land, water and sky around you, in one country scene.',
    parts: [
      { id: 'sora', w: 'langit', en: 'sky', lv: 'A1', x: 262, y: 34 },
      { id: 'taiyou', w: 'araw', en: 'sun', lv: 'A1', x: 352, y: 46 },
      { id: 'kumo', w: 'ulap', en: 'cloud', lv: 'A1', x: 88, y: 46 },
      { id: 'yama', w: 'bundok', en: 'mountain', lv: 'A1', x: 205, y: 118 },
      { id: 'mori', w: 'gubat', en: 'forest', lv: 'A2', x: 60, y: 136, alt: ['kagubatan'] },
      { id: 'ki', w: 'puno', en: 'tree', lv: 'A1', x: 146, y: 184 },
      { id: 'kawa', w: 'ilog', en: 'river', lv: 'A1', x: 236, y: 244 },
      { id: 'hashi', w: 'tulay', en: 'bridge', lv: 'A1', x: 199, y: 190 },
      { id: 'umi', w: 'dagat', en: 'sea', lv: 'A1', x: 334, y: 262 },
      { id: 'shima', w: 'isla', en: 'island', lv: 'A2', x: 352, y: 192, alt: ['pulo'] },
      { id: 'tanbo', w: 'palayan', en: 'rice field', lv: 'A2', x: 98, y: 240, alt: ['bukid', 'taniman ng palay'] },
      { id: 'hana', w: 'bulaklak', en: 'flower', lv: 'A1', x: 178, y: 262 }
    ],
    say: [
      { tl: 'Umakyat kami ng bundok noong bakasyon.', en: 'We climbed a mountain during the holidays.', p: 'yama' },
      { tl: 'Noong bata ako, lagi kaming naliligo sa ilog.', en: 'When I was a child, we always swam in the river.', p: 'kawa' },
      { tl: 'Gustong-gusto ko pong lumangoy sa dagat.', en: 'I really love swimming in the sea.', p: 'umi' },
      { tl: 'Mataas na ang araw, mainit na sa labas.', en: 'The sun is high, it is already hot outside.', p: 'taiyou' },
      { tl: 'Maitim ang mga ulap, mukhang uulan.', en: 'The clouds are dark, it looks like rain.', p: 'kumo' },
      { tl: 'Ang sarap maglakad sa gubat, ang presko ng hangin.', en: 'Walking in the forest is lovely, the air is so fresh.', p: 'mori' },
      { tl: 'Nagdala po ako ng bulaklak nang dalawin ko ang kaibigan ko sa ospital.', en: 'I brought flowers when I visited my friend in hospital.', p: 'hana' },
      { tl: 'Pagtawid po ninyo sa tulay, nandoon na ang ospital.', en: 'Once you cross the bridge, the hospital is there.', p: 'hashi' },
      { tl: 'Isang oras po ang biyahe sa bangka papunta sa isla.', en: 'It is an hour by boat to the island.', p: 'shima' },
      { tl: 'Dito po nagtatanim ng palay ang tatay ko.', en: 'This is where my father plants rice.', p: 'tanbo' }
    ] },

  { id: 'weather', group: 'nature', title: 'Weather', lv: 'A1', kind: 'cards',
    intro: 'Words for the weather, the small talk that starts many conversations here, plus a few you use on the ward.',
    parts: [
      { id: 'maaraw', w: 'maaraw', en: 'sunny', lv: 'A1', pic: '☀️' },
      { id: 'maulap', w: 'maulap', en: 'cloudy', lv: 'A1', pic: '☁️' },
      { id: 'ulan', w: 'ulan', en: 'rain', lv: 'A1', pic: '🌧️' },
      { id: 'hangin', w: 'hangin', en: 'wind', lv: 'A1', pic: '🌬️' },
      { id: 'bagyo', w: 'bagyo', en: 'typhoon', lv: 'A1', pic: '🌀' },
      { id: 'kidlat', w: 'kidlat', en: 'lightning', lv: 'A2', pic: '⚡' },
      { id: 'buhawi', w: 'buhawi', en: 'tornado, whirlwind', lv: 'B1', pic: '🌪️' },
      { id: 'bahaghari', w: 'bahaghari', en: 'rainbow', lv: 'A2', pic: '🌈' },
      { id: 'payong', w: 'payong', en: 'umbrella', lv: 'A1', pic: '☂️' },
      { id: 'mainit', w: 'mainit', en: 'hot', lv: 'A1', pic: '🥵' },
      { id: 'malamig', w: 'malamig', en: 'cold', lv: 'A1', pic: '🥶' },
      { id: 'temperatura', w: 'temperatura', en: 'temperature', lv: 'A2', pic: '🌡️', alt: ['temperature'] },
      { id: 'yelo', w: 'yelo', en: 'ice', lv: 'A1', pic: '🧊' }
    ],
    say: [
      { tl: 'Sumasakit po ba ang ulo ninyo kapag umuulan?', en: 'Do you get headaches when it rains?', p: 'ulan' },
      { tl: 'Huwag po ninyong kalimutan ang payong paglabas ninyo.', en: 'Do not forget your umbrella when you go out.', p: 'payong' },
      { tl: 'Ang init ngayon, uminom po kayo ng maraming tubig.', en: 'It is hot today, please drink plenty of water.', p: 'mainit' },
      { tl: 'Malamig po rito sa ward, gusto ba ninyo ng kumot?', en: 'It is cold here in the ward, would you like a blanket?', p: 'malamig' },
      { tl: 'Natakot po ako sa kidlat kagabi kaya hindi ako nakatulog.', en: 'The lightning frightened me last night, so I could not sleep.', p: 'kidlat' },
      { tl: 'May paparating na bagyo, kaya walang pasok bukas.', en: 'A typhoon is coming, so there is no school or work tomorrow.', p: 'bagyo' },
      { tl: 'Kukunin ko po ang temperatura ninyo.', en: 'I will take your temperature.', p: 'temperatura' },
      { tl: 'Lagyan po natin ng yelo ang namamagang paa ninyo.', en: 'Let us put ice on your swollen foot.', p: 'yelo' },
      { tl: 'Maaraw po ngayon. Gusto ba ninyong lumabas sandali?', en: 'It is sunny today. Would you like to go out for a while?', p: 'maaraw' },
      { tl: 'Makulay ito at lumalabas sa langit pagkatapos umulan.', en: 'It is colourful and appears in the sky after it rains.', p: 'bahaghari' }
    ] },

  { id: 'seasons-plants', group: 'nature', title: 'Seasons, plants and the night sky', lv: 'A1', kind: 'cards',
    intro: 'The two seasons of the Philippines, the plants around you, and the night sky.',
    parts: [
      { id: 'tag-init', w: 'tag-init', en: 'hot season, summer', lv: 'A1', pic: '🏖️', alt: ['tag-araw', 'summer'] },
      { id: 'tag-ulan', w: 'tag-ulan', en: 'rainy season', lv: 'A1', pic: '☔' },
      { id: 'pasko', w: 'Pasko', en: 'Christmas (season)', lv: 'A1', pic: '🎄', alt: ['christmas'] },
      { id: 'gabi', w: 'gabi', en: 'night', lv: 'A1', pic: '🌃' },
      { id: 'buwan', w: 'buwan', en: 'moon', lv: 'A1', pic: '🌙' },
      { id: 'bituin', w: 'bituin', en: 'star', lv: 'A1', pic: '⭐' },
      { id: 'puno', w: 'puno', en: 'tree', lv: 'A1', pic: '🌳' },
      { id: 'niyog', w: 'niyog', en: 'coconut palm', lv: 'A1', pic: '🌴', alt: ['puno ng niyog', 'palma'] },
      { id: 'bulaklak', w: 'bulaklak', en: 'flower', lv: 'A1', pic: '🌼' },
      { id: 'gumamela', w: 'gumamela', en: 'hibiscus', lv: 'A2', pic: '🌺' },
      { id: 'mirasol', w: 'mirasol', en: 'sunflower', lv: 'A2', pic: '🌻', alt: ['sunflower'] },
      { id: 'dahon', w: 'dahon', en: 'leaf', lv: 'A1', pic: '🍃' },
      { id: 'damo', w: 'damo', en: 'grass, weeds', lv: 'A1', pic: '🌿' },
      { id: 'halaman', w: 'halaman', en: 'plant', lv: 'A2', pic: '🌱', alt: ['tanim'] },
      { id: 'palay', w: 'palay', en: 'rice plant, unhusked rice', lv: 'A2', pic: '🌾' }
    ],
    say: [
      { tl: 'Tuwing tag-init, ang daming nagpupunta sa beach.', en: 'In the hot season, lots of people go to the beach.', p: 'tag-init' },
      { tl: 'Tuwing tag-ulan, maraming nagkakasakit ng trangkaso at dengue.', en: 'In the rainy season, many people get flu and dengue.', p: 'tag-ulan' },
      { tl: 'Tuwing Pasko, nagsasabit kami ng parol at nagsasalu-salo sa Noche Buena.', en: 'At Christmas we hang up lanterns and share the Christmas Eve feast.', p: 'pasko' },
      { tl: 'Anong oras po kayo karaniwang natutulog sa gabi?', en: 'What time do you usually go to sleep at night?', p: 'gabi' },
      { tl: 'Bilog na bilog ang buwan kagabi.', en: 'The moon was perfectly full last night.', p: 'buwan' },
      { tl: 'May malaking puno sa harap ng ospital.', en: 'There is a big tree in front of the hospital.', p: 'puno' },
      { tl: 'Nagdidilig po ako ng mga halaman tuwing umaga.', en: 'I water the plants every morning.', p: 'halaman' },
      { tl: 'Mahaba na ang damo sa bakuran, kailangan nang tabasin.', en: 'The grass in the yard is long, it needs cutting.', p: 'damo' },
      { tl: 'Inaani ito at ginagawang bigas.', en: 'It is harvested and made into rice.', p: 'palay' },
      { tl: 'Dito galing ang buko at gata.', en: 'Young coconut and coconut milk come from this.', p: 'niyog' }
    ] }
]);
