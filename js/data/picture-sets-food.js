/* Picture words, group 'food' (Usap Tayo 3.10.0): tap-to-learn pictures for #/pictures (js/pictures.js).
   DRAFT FOR REVIEW by Dr. Navarro (native speaker). All Tagalog here is a draft.
   Shape (PLAN-3.10 A1): window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([ { id, group, title, lv: 'A1'|'A2',
     kind: 'diagram'|'cards', art (diagram only, pictures/art-food.js), intro: one English sentence,
     parts: [ { id, w: the word as said (lower case, 1 to 3 words), en, lv: 'A1'|'A2'|'B1', alt: [other accepted answers],
                diagram: x, y (kept from the Japanese art, never moved); cards: pic = ONE emoji, Emoji 12.0 or older } ],
     say: [ { tl: a sentence whose answer is exactly ONE part, en, p: part id } ] } ]);   6 to 10 sentences
   Sets: fruit-veg c A1; meals-drinks c A1; table-setting d A2.
   Set ids and part ids are permanent after release: append only. */
window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([
  { id: 'fruit-veg', group: 'food', title: 'Fruit and vegetables', lv: 'A1', kind: 'cards',
    intro: 'Common fruit and vegetables you meet at the market, in meals and in the fruit that visitors bring.',
    parts: [
      { id: 'mangga', w: 'mangga', en: 'mango', lv: 'A1', pic: '🥭' },
      { id: 'saging', w: 'saging', en: 'banana', lv: 'A1', pic: '🍌' },
      { id: 'niyog', w: 'niyog', en: 'coconut', lv: 'A1', pic: '🥥', alt: ['buko'] },
      { id: 'pinya', w: 'pinya', en: 'pineapple', lv: 'A1', pic: '🍍' },
      { id: 'pakwan', w: 'pakwan', en: 'watermelon', lv: 'A1', pic: '🍉' },
      { id: 'dalandan', w: 'dalandan', en: 'orange', lv: 'A2', pic: '🍊', alt: ['orange', 'kahel'] },
      { id: 'ubas', w: 'ubas', en: 'grapes', lv: 'A1', pic: '🍇' },
      { id: 'mansanas', w: 'mansanas', en: 'apple', lv: 'A1', pic: '🍎' },
      { id: 'kamatis', w: 'kamatis', en: 'tomato', lv: 'A1', pic: '🍅' },
      { id: 'sibuyas', w: 'sibuyas', en: 'onion', lv: 'A1', pic: '🧅' },
      { id: 'bawang', w: 'bawang', en: 'garlic', lv: 'A1', pic: '🧄' },
      { id: 'talong', w: 'talong', en: 'aubergine, eggplant', lv: 'A1', pic: '🍆' },
      { id: 'mais', w: 'mais', en: 'corn', lv: 'A1', pic: '🌽' },
      { id: 'kamote', w: 'kamote', en: 'sweet potato', lv: 'A2', pic: '🍠' },
      { id: 'karot', w: 'karot', en: 'carrot', lv: 'A1', pic: '🥕', alt: ['carrot', 'carrots'] },
      { id: 'pechay', w: 'pechay', en: 'bok choy, leafy greens', lv: 'A2', pic: '🥬', alt: ['petsay'] }
    ],
    say: [
      { tl: 'Nagdala po ang pamilya niya ng mangga galing sa probinsya.', en: 'His family brought mangoes from the province.', p: 'mangga' },
      { tl: 'Kumain po muna kayo ng saging para may laman ang tiyan ninyo.', en: 'Please eat a banana first so you have something in your stomach.', p: 'saging' },
      { tl: 'Ilang piraso po ng mansanas ang dala ng bisita ninyo?', en: 'How many apples did your visitor bring?', p: 'mansanas' },
      { tl: 'Buko juice po ang gusto niyang inumin.', en: 'Fresh coconut water is what she wants to drink.', p: 'niyog' },
      { tl: 'Pula ang loob at berde ang balat ng pakwan.', en: 'A watermelon is red inside and green outside.', p: 'pakwan' },
      { tl: 'Napapaluha ako tuwing naghihiwa ng sibuyas.', en: 'I tear up every time I cut onions.', p: 'sibuyas' },
      { tl: 'Nilagang kamote po ang merienda natin ngayon.', en: 'Boiled sweet potato is our snack today.', p: 'kamote' },
      { tl: 'Kulay ube ang balat ng talong.', en: 'The skin of an eggplant is purple.', p: 'talong' },
      { tl: 'Nilagang mais ang paborito ni Lolo.', en: 'Boiled corn is Grandpa’s favourite.', p: 'mais' },
      { tl: 'Matamis at medyo maasim ang pinya.', en: 'Pineapple is sweet and a little sour.', p: 'pinya' }
    ] },

  { id: 'meals-drinks', group: 'food', title: 'Meals and drinks', lv: 'A1', kind: 'cards',
    intro: 'Everyday food and drinks, useful when you ask a patient what they eat and drink.',
    parts: [
      { id: 'kanin', w: 'kanin', en: 'cooked rice', lv: 'A1', pic: '🍚' },
      { id: 'ulam', w: 'ulam', en: 'dish eaten with rice', lv: 'A1', pic: '🥘' },
      { id: 'sabaw', w: 'sabaw', en: 'soup, broth', lv: 'A1', pic: '🍲' },
      { id: 'lugaw', w: 'lugaw', en: 'rice porridge', lv: 'A2', pic: '🥣' },
      { id: 'itlog', w: 'itlog', en: 'egg', lv: 'A1', pic: '🥚' },
      { id: 'isda', w: 'isda', en: 'fish', lv: 'A1', pic: '🐟' },
      { id: 'manok', w: 'manok', en: 'chicken', lv: 'A1', pic: '🍗' },
      { id: 'karne', w: 'karne', en: 'meat', lv: 'A1', pic: '🍖' },
      { id: 'tinapay', w: 'tinapay', en: 'bread', lv: 'A1', pic: '🍞', alt: ['pandesal'] },
      { id: 'pansit', w: 'pansit', en: 'noodles', lv: 'A1', pic: '🍜', alt: ['pancit', 'noodles'] },
      { id: 'tubig', w: 'tubig', en: 'water', lv: 'A1', pic: '💧' },
      { id: 'kape', w: 'kape', en: 'coffee', lv: 'A1', pic: '☕' },
      { id: 'gatas', w: 'gatas', en: 'milk', lv: 'A1', pic: '🥛' },
      { id: 'juice', w: 'juice', en: 'juice', lv: 'A1', pic: '🧃', alt: ['dyus'] },
      { id: 'softdrinks', w: 'softdrinks', en: 'soft drink, soda', lv: 'A1', pic: '🥤', alt: ['soft drinks', 'soda'] },
      { id: 'alak', w: 'alak', en: 'alcohol, liquor', lv: 'A2', pic: '🍺', alt: ['beer', 'serbesa'] }
    ],
    say: [
      { tl: 'Naubos po ba ninyo ang kanin ninyo kanina?', en: 'Did you finish your rice earlier?', p: 'kanin' },
      { tl: 'Ano po ang ulam ninyo kaninang tanghalian?', en: 'What did you have with your rice at lunch?', p: 'ulam' },
      { tl: 'Lugaw lang po muna ang kakainin niya kasi masakit ang lalamunan niya.', en: 'She will only eat rice porridge for now because her throat hurts.', p: 'lugaw' },
      { tl: 'Ilang tasa po ng kape ang iniinom ninyo sa isang araw?', en: 'How many cups of coffee do you drink a day?', p: 'kape' },
      { tl: 'Umiinom po ba kayo ng alak? Gaano po kadalas?', en: 'Do you drink alcohol? How often?', p: 'alak' },
      { tl: 'Uminom po kayo ng maraming tubig.', en: 'Please drink plenty of water.', p: 'tubig' },
      { tl: 'Bawasan po ninyo ang softdrinks, maraming asukal iyan.', en: 'Please cut down on soft drinks; they have a lot of sugar.', p: 'softdrinks' },
      { tl: 'Humigop po muna kayo ng mainit na sabaw para gumaan ang pakiramdam ninyo.', en: 'Have some hot broth first so you feel better.', p: 'sabaw' },
      { tl: 'Pandesal ang tinapay na kinakain namin tuwing almusal.', en: 'Pandesal is the bread we eat every breakfast.', p: 'tinapay' },
      { tl: 'Nagluto si Nanay ng pansit para sa kaarawan ni Lolo.', en: 'Mother cooked noodles for Grandpa’s birthday.', p: 'pansit' }
    ] },

  { id: 'table-setting', group: 'food', title: 'A meal tray', lv: 'A2', kind: 'diagram', art: 'table-setting',
    intro: 'The things on and around a meal tray, as served at home or on a hospital ward.',
    parts: [
      { id: 'obon', w: 'tray', en: 'tray', lv: 'A2', x: 25, y: 222, alt: ['bandeha'] },
      { id: 'chawan', w: 'mangkok ng kanin', en: 'rice bowl', lv: 'A1', x: 100, y: 236 },
      { id: 'owan', w: 'mangkok ng sabaw', en: 'soup bowl', lv: 'A1', x: 218, y: 238 },
      { id: 'osara', w: 'plato', en: 'plate', lv: 'A1', x: 272, y: 188, alt: ['pinggan'] },
      { id: 'hashi', w: 'chopsticks', en: 'chopsticks', lv: 'A2', x: 110, y: 272 },
      { id: 'supuun', w: 'kutsara', en: 'spoon', lv: 'A1', x: 246, y: 272 },
      { id: 'fooku', w: 'tinidor', en: 'fork', lv: 'A1', x: 346, y: 266 },
      { id: 'naifu', w: 'kutsilyo', en: 'knife', lv: 'A1', x: 393, y: 280 },
      { id: 'koppu', w: 'baso', en: 'glass', lv: 'A1', x: 54, y: 114 },
      { id: 'yunomi', w: 'tasa', en: 'teacup, cup', lv: 'A2', x: 358, y: 140, alt: ['teacup'] },
      { id: 'kyuusu', w: 'tsarera', en: 'teapot', lv: 'B1', x: 360, y: 84, alt: ['teapot'] },
      { id: 'shouyu', w: 'toyo', en: 'soy sauce', lv: 'A1', x: 130, y: 120 },
      { id: 'shio', w: 'asin', en: 'salt', lv: 'A1', x: 190, y: 120 }
    ],
    say: [
      { tl: 'Ilalapag ko po ang tray sa mesa sa tabi ng kama ninyo.', en: 'I will set the tray on the table beside your bed.', p: 'obon' },
      { tl: 'Kalahati lang po ng mangkok ng kanin ang nakain niya.', en: 'He only ate half of the bowl of rice.', p: 'chawan' },
      { tl: 'Mainit pa po ang mangkok ng sabaw, ingat po.', en: 'The soup bowl is still hot; be careful.', p: 'owan' },
      { tl: 'Hindi po niya mahawakan nang maayos ang kutsara kasi nanginginig ang kamay niya.', en: 'She cannot hold the spoon properly because her hand is shaking.', p: 'supuun' },
      { tl: 'Matalas po ang kutsilyo, ilalayo muna namin.', en: 'The knife is sharp; we will keep it away for now.', p: 'naifu' },
      { tl: 'Huwag na po ninyong dagdagan ng asin, bawal po sa altapresyon ninyo.', en: 'Please do not add salt; it is bad for your high blood pressure.', p: 'shio' },
      { tl: 'Nasa plato ang pritong isda.', en: 'The fried fish is on the plate.', p: 'osara' },
      { tl: 'Sa Japan, chopsticks ang gamit nila sa pagkain.', en: 'In Japan, people eat with chopsticks.', p: 'hashi' },
      { tl: 'Isawsaw mo ang isda sa toyo.', en: 'Dip the fish in soy sauce.', p: 'shouyu' },
      { tl: 'Tinusok ko ng tinidor ang karne.', en: 'I speared the meat with the fork.', p: 'fooku' }
    ] }
]);
