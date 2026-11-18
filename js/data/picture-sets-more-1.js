/* Picture words added in Usap Tayo 3.18.0 (part 1): Shops in town; At the botika. Port of Hanashimasho 0.27.0; drawings in pictures/art-more-1.js.
   DRAFT FOR REVIEW by Dr. Navarro (native speaker). All Tagalog here is a draft.
   Shape: the header of picture-sets-home.js. Set ids and part ids are permanent: append only. */
window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([
  { id: 'shops', group: 'town', title: 'Shops in town', lv: 'A2', kind: 'diagram', art: 'shops',
    intro: 'A row of small shops, each known by the picture on its sign and the goods in its window, with a supermarket and a vending machine. At the palengke the fish and meat stalls are also called the isdaan and the karnehan.',
    parts: [
      { id: 'panya', w: 'panaderya', en: 'bakery', lv: 'A1', x: 69, y: 128, alt: ['bakery', 'bakeshop'] },
      { id: 'yaoya', w: 'tindahan ng gulay', en: 'greengrocer, vegetable shop', lv: 'A1', x: 151, y: 128, alt: ['gulayan', 'greengrocer'] },
      { id: 'sakanaya', w: 'tindahan ng isda', en: 'fish shop, fish stall', lv: 'A2', x: 233, y: 128, alt: ['isdaan', 'fish shop'] },
      { id: 'nikuya', w: 'tindahan ng karne', en: 'butcher, meat shop', lv: 'A2', x: 315, y: 128, alt: ['karnehan', 'butcher', 'meat shop'] },
      { id: 'hanaya', w: 'flower shop', en: 'flower shop, florist', lv: 'A2', x: 397, y: 128, alt: ['tindahan ng bulaklak', 'florist'] },
      { id: 'honya', w: 'bookstore', en: 'bookstore', lv: 'A2', x: 69, y: 336, alt: ['tindahan ng libro', 'bookshop'] },
      { id: 'kutsuya', w: 'shoe store', en: 'shoe store', lv: 'A2', x: 151, y: 336, alt: ['tindahan ng sapatos', 'shoe shop'] },
      { id: 'tokoya', w: 'barberya', en: "barber's, barbershop", lv: 'A2', x: 233, y: 336, alt: ['barbershop', 'barber shop', 'gupitan'] },
      { id: 'suupaa', w: 'supermarket', en: 'supermarket', lv: 'A1', x: 346, y: 240, alt: ['grocery', 'groseri'] },
      { id: 'reji', w: 'cashier', en: 'cashier, checkout (where you pay)', lv: 'A2', x: 368, y: 316, alt: ['kaha', 'counter', 'checkout'] },
      { id: 'fukuro', w: 'supot', en: 'bag (plastic or paper)', lv: 'A2', x: 270, y: 306, alt: ['plastic', 'plastik', 'bag'] },
      { id: 'tenin', w: 'tindera', en: 'shop assistant, saleswoman (tindero for a man)', lv: 'A2', x: 312, y: 328, alt: ['tindero', 'saleslady', 'kahera'] },
      { id: 'jidouhanbaiki', w: 'vending machine', en: 'vending machine', lv: 'B1', x: 395, y: 350, alt: ['vendo'] }
    ],
    say: [
      { tl: 'Sabi ng doktor, kumain daw ako ng mas maraming gulay, kaya dumaan ako sa tindahan ng gulay.', en: 'The doctor told me to eat more vegetables, so I stopped at the vegetable shop.', p: 'yaoya' },
      { tl: 'Sa flower shop sa kanto kami bumibili ng bulaklak tuwing Undas.', en: 'We buy flowers at the flower shop on the corner every Undas.', p: 'hanaya' },
      { tl: 'Bumili ako sa shoe store ng komportableng sapatos para sa mahabang duty.', en: 'I bought comfortable shoes at the shoe store for long shifts.', p: 'kutsuya' },
      { tl: 'May vending machine po sa lobby ng ospital kung nauuhaw kayo.', en: 'There is a vending machine in the hospital lobby if you are thirsty.', p: 'jidouhanbaiki' },
      { tl: 'Tapos na po akong mamili, pipila na po ako sa cashier.', en: 'I am done shopping; I will line up at the cashier now.', p: 'reji' },
      { tl: 'Kung may hindi kayo mahanap, magtanong lang po kayo sa tindera.', en: 'If there is something you cannot find, just ask the shop assistant.', p: 'tenin' },
      { tl: 'Kailangan po ba ninyo ng supot?', en: 'Do you need a bag?', p: 'fukuro' },
      { tl: 'Paglabas ko po ng ospital, magpapagupit agad ako sa barberya.', en: 'When I leave the hospital, I will get a haircut at the barber\'s straight away.', p: 'tokoya' },
      { tl: 'Bumili ako ng diksiyonaryo ng Tagalog sa bookstore.', en: 'I bought a Tagalog dictionary at the bookstore.', p: 'honya' },
      { tl: 'Tuwing umaga, bumibili ako ng pandesal sa panaderya.', en: 'Every morning I buy pandesal at the bakery.', p: 'panya' }
    ] },

  { id: 'pharmacy-counter', group: 'town', title: 'At the botika', lv: 'A2', kind: 'diagram', art: 'pharmacy-counter',
    intro: 'The pharmacist behind the botika counter, and the things on it: the reseta, the bag for your medicines and the forms medicine comes in. The booklet stands for a list of your own medicines that you bring along.',
    parts: [
      { id: 'yakuzaishi', w: 'pharmacist', en: 'pharmacist', lv: 'A2', x: 100, y: 148, alt: ['parmasyutiko', 'parmasyotiko'] },
      { id: 'masuku', w: 'face mask', en: 'face mask', lv: 'A1', x: 156, y: 80, alt: ['mask'] },
      { id: 'tana', w: 'estante', en: 'shelf, shelves', lv: 'A2', x: 392, y: 105, alt: ['istante', 'shelf'] },
      { id: 'shohousen', w: 'reseta', en: 'prescription', lv: 'A1', x: 36, y: 234, alt: ['prescription'] },
      { id: 'kusuribukuro', w: 'supot ng gamot', en: 'medicine bag (small paper bag for your medicines)', lv: 'A2', x: 120, y: 238, alt: ['supot', 'medicine bag', 'paper bag'] },
      { id: 'okusuritechou', w: 'listahan ng gamot', en: 'list of your medicines', lv: 'B1', x: 192, y: 234, alt: ['listahan', 'medicine list'] },
      { id: 'bangou', w: 'numero', en: 'queue number', lv: 'A1', x: 300, y: 210, alt: ['number', 'queue number', 'numero ng pila'] },
      { id: 'koppu', w: 'baso', en: 'glass', lv: 'A1', x: 383, y: 232 },
      { id: 'jouzai', w: 'tableta', en: 'tablet', lv: 'A2', x: 78, y: 300, alt: ['tablet', 'pill'] },
      { id: 'kapuseru', w: 'kapsula', en: 'capsule', lv: 'A2', x: 116, y: 306, alt: ['capsule'] },
      { id: 'konagusuri', w: 'pulbos na gamot', en: 'powder medicine', lv: 'B1', x: 196, y: 318, alt: ['gamot na pulbos', 'pulbos', 'powder'] },
      { id: 'shiroppu', w: 'syrup', en: 'syrup (liquid medicine)', lv: 'A2', x: 312, y: 326, alt: ['sirup'] },
      { id: 'megusuri', w: 'eye drops', en: 'eye drops', lv: 'A2', x: 388, y: 322, alt: ['pampatak sa mata', 'patak sa mata', 'eyedrops', 'eye drop'] },
      { id: 'nurigusuri', w: 'pamahid', en: 'ointment, cream', lv: 'A2', x: 50, y: 390, alt: ['ointment', 'cream'] },
      { id: 'shippu', w: 'patch', en: 'medicated patch', lv: 'B1', x: 168, y: 396, alt: ['pantapal', 'tapal', 'medicated patch'] },
      { id: 'saifu', w: 'pitaka', en: 'wallet, purse', lv: 'A1', x: 310, y: 396, alt: ['wallet', 'purse'] }
    ],
    say: [
      { tl: 'Ito po ang reseta ko galing sa doktor.', en: 'Here is my prescription from the doctor.', p: 'shohousen' },
      { tl: 'Maupo muna po kayo, tatawagin na lang po namin ang numero ninyo.', en: 'Please take a seat for now; we will call your number.', p: 'bangou' },
      { tl: 'Dala po ba ninyo ang listahan ng gamot ninyo?', en: 'Do you have the list of your medicines with you?', p: 'okusuritechou' },
      { tl: 'Kung may tanong po kayo tungkol sa gamot, magtanong lang po kayo sa pharmacist.', en: 'If you have a question about your medicine, just ask the pharmacist.', p: 'yakuzaishi' },
      { tl: 'Nandito na po sa supot ng gamot ang lahat ng binili ninyo.', en: 'Everything you bought is here in the medicine bag.', p: 'kusuribukuro' },
      { tl: 'Sandali lang po, nasa pitaka ko ang senior citizen ID ko.', en: 'One moment, my senior citizen ID is in my wallet.', p: 'saifu' },
      { tl: 'Naiwan ko po sa bahay ang eye drops ko.', en: 'I left my eye drops at home.', p: 'megusuri' },
      { tl: 'Wala na po ba kayong ganitong syrup? Para po sana sa anak ko.', en: 'Do you have no more of this syrup? It was meant for my child.', p: 'shiroppu' },
      { tl: 'Nagbebenta rin po ba kayo ng face mask?', en: 'Do you also sell face masks?', p: 'masuku' },
      { tl: 'Magkano po itong pamahid?', en: 'How much is this ointment?', p: 'nurigusuri' }
    ] }
]);
