/* Picture words, group 'clothes' (Usap Tayo 3.10.0): tap-to-learn pictures for #/pictures (js/pictures.js).
   DRAFT FOR REVIEW by Dr. Navarro (native speaker). Translated from the English glosses and the drawings of
   Hanashimasho 0.24.0 (pictures/art-clothes.js is reused unchanged).
   Shape (PLAN-3.10 A1): window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([ { id, group, title, lv: 'A1'|'A2',
     kind: 'diagram'|'cards', art (diagram only), intro: one English sentence,
     parts: [ { id (permanent), w: the word as said, lower case, 1 to 3 words, en, lv: 'A1'|'A2'|'B1', alt?: [other answers],
                diagram: x, y exactly as in the Japanese set; cards: pic = ONE emoji, Emoji 12.0 or older } ],
     say: [ { tl: a sentence whose answer is exactly ONE part, en, p: part id } ] } ]);   6 to 10 sentences
   Set ids and part ids are permanent: append only after release (never insert, reorder or delete). */
window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([
  { id: 'clothes', group: 'clothes', title: 'Clothes', lv: 'A1', kind: 'diagram', art: 'clothes',
    intro: 'Two people dressed for going out: tap each item to hear its name, ready for naka- (nakasalamin, nakapalda) when you describe what someone is wearing.',
    parts: [
      { id: 'boushi', w: 'sumbrero', en: 'hat', lv: 'A1', x: 95, y: 34 },
      { id: 'megane', w: 'salamin', en: 'glasses', lv: 'A1', x: 105, y: 76, alt: ['salamin sa mata', 'eyeglasses'] },
      { id: 'poketto', w: 'bulsa', en: 'pocket', lv: 'A1', x: 78, y: 140 },
      { id: 'shatsu', w: 'polo', en: 'shirt (with collar and buttons)', lv: 'A1', x: 115, y: 138, alt: ['damit', 'polo shirt', 'kamiseta'] },
      { id: 'botan', w: 'butones', en: 'button', lv: 'A2', x: 95, y: 170, alt: ['botones'] },
      { id: 'beruto', w: 'sinturon', en: 'belt', lv: 'A2', x: 114, y: 205 },
      { id: 'zubon', w: 'pantalon', en: 'trousers', lv: 'A1', x: 79, y: 290 },
      { id: 'kutsu', w: 'sapatos', en: 'shoes', lv: 'A1', x: 117, y: 369 },
      { id: 'kooto', w: 'jacket', en: 'coat, jacket', lv: 'A1', x: 282, y: 175, alt: ['dyaket', 'coat'] },
      { id: 'sukaato', w: 'palda', en: 'skirt', lv: 'A1', x: 252, y: 274 },
      { id: 'kaban', w: 'bag', en: 'bag', lv: 'A1', x: 311, y: 238 },
      { id: 'kutsushita', w: 'medyas', en: 'socks', lv: 'A1', x: 255, y: 345 }
    ],
    say: [
      { tl: 'Nakasumbrero ang lalaki.', en: 'The man is wearing a hat.', p: 'boushi' },
      { tl: 'Malabo po ang mata ko, kaya nakasalamin ako.', en: 'My eyesight is poor, so I wear glasses.', p: 'megane' },
      { tl: 'Malamig, kaya naka-jacket ang babae.', en: 'It is cold, so the woman is wearing a coat.', p: 'kooto' },
      { tl: 'Palda ang suot ng babae.', en: 'The woman is wearing a skirt.', p: 'sukaato' },
      { tl: 'Pakihubad po ang sapatos bago kayo tumuntong sa timbangan.', en: 'Please take off your shoes before you step on the scale.', p: 'kutsu' },
      { tl: 'Titingnan ko po ang paa ninyo, pakihubad po ang medyas.', en: 'I am going to look at your feet, so please take off your socks.', p: 'kutsushita' },
      { tl: 'Pakibukas po ang unang butones, pakikinggan ko po ang dibdib ninyo.', en: 'Please undo the top button; I will listen to your chest.', p: 'botan' },
      { tl: 'Pakiluwagan po ang sinturon ninyo, titingnan ko po ang tiyan ninyo.', en: 'Please loosen your belt; I will examine your stomach.', p: 'beruto' },
      { tl: 'Nasa bag ko po ang pitaka ko.', en: 'My wallet is in my bag.', p: 'kaban' },
      { tl: 'Lagi kong inilalagay sa bulsa ko ang ballpen.', en: 'I always keep my pen in my pocket.', p: 'poketto' }
    ] },
  { id: 'accessories-colours', group: 'clothes', title: 'Colours and accessories', lv: 'A1', kind: 'cards',
    intro: 'Colour words and a few things people wear or carry; many people use the English word for brown, orange and violet.',
    parts: [
      { id: 'pula', w: 'pula', en: 'red', lv: 'A1', pic: '🔴' },
      { id: 'asul', w: 'asul', en: 'blue', lv: 'A1', pic: '🔵', alt: ['bughaw', 'blue'] },
      { id: 'dilaw', w: 'dilaw', en: 'yellow', lv: 'A1', pic: '🟡' },
      { id: 'puti', w: 'puti', en: 'white', lv: 'A1', pic: '⚪' },
      { id: 'itim', w: 'itim', en: 'black', lv: 'A1', pic: '⚫' },
      { id: 'berde', w: 'berde', en: 'green', lv: 'A1', pic: '🟢', alt: ['luntian', 'green'] },
      { id: 'brown', w: 'brown', en: 'brown', lv: 'A1', pic: '🟤', alt: ['kayumanggi', 'tsokolate'] },
      { id: 'orange', w: 'orange', en: 'orange', lv: 'A1', pic: '🟠', alt: ['kahel', 'dalandan'] },
      { id: 'violet', w: 'violet', en: 'purple, violet', lv: 'A2', pic: '🟣', alt: ['lila', 'ube', 'purple'] },
      { id: 'payong', w: 'payong', en: 'umbrella', lv: 'A1', pic: '🌂' },
      { id: 'relo', w: 'relo', en: 'watch', lv: 'A1', pic: '⌚' },
      { id: 'singsing', w: 'singsing', en: 'ring', lv: 'A1', pic: '💍' },
      { id: 'cap', w: 'cap', en: 'cap', lv: 'A1', pic: '🧢', alt: ['sumbrero', 'gora'] },
      { id: 'guwantes', w: 'guwantes', en: 'gloves', lv: 'A2', pic: '🧤', alt: ['gwantes', 'gloves'] },
      { id: 'kurbata', w: 'kurbata', en: 'necktie', lv: 'A2', pic: '👔', alt: ['necktie'] }
    ],
    say: [
      { tl: 'Pula ang kulay ng dugo.', en: 'Blood is red.', p: 'pula' },
      { tl: 'Asul ang langit kapag maaraw.', en: 'The sky is blue on a sunny day.', p: 'asul' },
      { tl: 'Dilaw ang hinog na saging.', en: 'A ripe banana is yellow.', p: 'dilaw' },
      { tl: 'Puti ang uniporme ng mga nars.', en: 'The nurses\' uniform is white.', p: 'puti' },
      { tl: 'Berde ang mga dahon ng puno.', en: 'The leaves of the tree are green.', p: 'berde' },
      { tl: 'Ginagamit ito kapag umuulan o kapag tirik ang araw.', en: 'You use it when it rains or when the sun is blazing.', p: 'payong' },
      { tl: 'Tinitingnan ito ng nars habang binibilang ang pulso.', en: 'The nurse looks at this while counting a pulse.', p: 'relo' },
      { tl: 'Pakitanggal po muna ang singsing bago ang X-ray.', en: 'Please take off your ring before the X-ray.', p: 'singsing' },
      { tl: 'Nagsusuot ng guwantes ang nars bago linisin ang sugat.', en: 'The nurse puts on gloves before cleaning the wound.', p: 'guwantes' },
      { tl: 'Nakakurbata si Sir tuwing may meeting.', en: 'Sir wears a necktie whenever there is a meeting.', p: 'kurbata' }
    ] }
]);
