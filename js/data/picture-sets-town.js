/* Picture words, group 'town' (Usap Tayo 3.10.0): tap-to-learn pictures for #/pictures (js/pictures.js).
   DRAFT FOR REVIEW by Dr. Navarro (native speaker).
   Shape (PLAN-3.10 A1): window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([ { id, group, title, lv: 'A1'|'A2',
     kind: 'diagram'|'cards', art (diagram only, pictures/art-town.js, unchanged), intro: one English sentence,
     parts: [ { id, w: the word as said (lower case, 1 to 3 words), en, lv: 'A1'|'A2'|'B1', alt: [other accepted answers],
                diagram: x, y exactly as in the Japanese source (same ids, same order); cards: pic = ONE emoji, Emoji 12.0 or older } ],
     say: [ { tl: a sentence whose answer is exactly ONE part, en, p: part id } ] } ]);   6 to 10 say lines per set
   Sets: street d A1; station d A2; buildings c A1; hospital-floor d A2; positions d A1.
   Set ids and part ids are permanent after release: append only. */
window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([
  { id: 'street', group: 'town', title: 'At the crossroads', lv: 'A1', kind: 'diagram', art: 'street',
    intro: 'A street corner seen from above, with the words you need to ask for and give directions.',
    parts: [
      { id: 'michi', w: 'kalsada', en: 'road, street', lv: 'A1', x: 70, y: 202, alt: ['kalye', 'daan'] },
      { id: 'kousaten', w: 'intersection', en: 'crossroads, intersection', lv: 'A2', x: 202, y: 202, alt: ['interseksyon', 'krosing'] },
      { id: 'shingou', w: 'stoplight', en: 'traffic light', lv: 'A1', x: 161, y: 97, alt: ['traffic light', 'ilaw trapiko', 'ilaw-trapiko'] },
      { id: 'oudanhodou', w: 'tawiran', en: 'pedestrian crossing', lv: 'A2', x: 203, y: 250, alt: ['pedestrian lane', 'pedestrian crossing'] },
      { id: 'kado', w: 'kanto', en: 'corner (where the bank stands)', lv: 'A1', x: 240, y: 240 },
      { id: 'hodou', w: 'bangketa', en: 'sidewalk, pavement', lv: 'A2', x: 330, y: 239, alt: ['sidewalk'] },
      { id: 'kuruma', w: 'kotse', en: 'car', lv: 'A1', x: 218, y: 55, alt: ['sasakyan', 'auto'] },
      { id: 'byouin', w: 'ospital', en: 'hospital', lv: 'A1', x: 80, y: 98, alt: ['hospital'] },
      { id: 'yuubinkyoku', w: 'post office', en: 'post office', lv: 'A2', x: 288, y: 110, alt: ['koreo'] },
      { id: 'gakkou', w: 'paaralan', en: 'school', lv: 'A1', x: 361, y: 110, alt: ['eskuwelahan', 'eskwelahan', 'iskul'] },
      { id: 'ginkou', w: 'bangko', en: 'bank', lv: 'A1', x: 291, y: 330, alt: ['bank'] },
      { id: 'mise', w: 'tindahan', en: 'shop, store', lv: 'A1', x: 367, y: 345, alt: ['store'] },
      { id: 'kouen', w: 'parke', en: 'park', lv: 'A1', x: 82, y: 322, alt: ['park'] }
    ],
    say: [
      { tl: 'Dumiretso lang po kayo pagdating sa intersection.', en: 'Just go straight on when you reach the intersection.', p: 'kousaten' },
      { tl: 'Hintayin mo ako sa kanto, sa may bangko.', en: 'Wait for me at the corner, by the bank.', p: 'kado' },
      { tl: 'Huminto ka kapag pula ang stoplight.', en: 'Stop when the stoplight is red.', p: 'shingou' },
      { tl: 'Dito po tayo tumawid sa tawiran, Lola.', en: 'Let us cross here at the pedestrian crossing, Lola.', p: 'oudanhodou' },
      { tl: 'Dito tayo pumupunta kapag masama ang pakiramdam natin.', en: 'We go here when we feel unwell.', p: 'byouin' },
      { tl: 'Mag-ingat ka, may parating na kotse.', en: 'Be careful, a car is coming.', p: 'kuruma' },
      { tl: 'Sa bangketa po kayo maglakad para ligtas kayo.', en: 'Please walk on the sidewalk so you are safe.', p: 'hodou' },
      { tl: 'Malapit lang po sa paaralan ang bahay namin.', en: 'Our house is near the school.', p: 'gakkou' },
      { tl: 'Dito ko po idinedeposito ang sweldo ko.', en: 'I deposit my salary here.', p: 'ginkou' },
      { tl: 'Maglakad-lakad po tayo sa parke para gumaan ang pakiramdam ninyo.', en: 'Let us take a walk in the park so you feel lighter.', p: 'kouen' }
    ] },

  { id: 'station', group: 'town', title: 'At the train station', lv: 'A2', kind: 'diagram', art: 'station',
    intro: 'A small train station, like an MRT or LRT stop: the ticket area upstairs, then the stairs or the elevator down to the platform and the train.',
    parts: [
      { id: 'kippu', w: 'tiket', en: 'ticket (card)', lv: 'A2', x: 212, y: 159, alt: ['ticket', 'card'] },
      { id: 'kaisatsu', w: 'turnstile', en: 'turnstile, ticket gate', lv: 'A2', x: 281, y: 160, alt: ['pasukan', 'gate'] },
      { id: 'tokei', w: 'orasan', en: 'clock', lv: 'A1', x: 281, y: 70, alt: ['relo'] },
      { id: 'ekiin', w: 'staff ng istasyon', en: 'station staff', lv: 'B1', x: 348, y: 152, alt: ['staff', 'tauhan ng istasyon', 'empleyado'] },
      { id: 'deguchi', w: 'labasan', en: 'exit', lv: 'A1', x: 395, y: 164, alt: ['exit'] },
      { id: 'erebeetaa', w: 'elevator', en: 'elevator, lift', lv: 'A1', x: 30, y: 296 },
      { id: 'kaidan', w: 'hagdan', en: 'stairs', lv: 'A1', x: 108, y: 250, alt: ['hagdanan'] },
      { id: 'benchi', w: 'upuan', en: 'bench, seat', lv: 'A1', x: 191, y: 302, alt: ['bangko', 'bench'] },
      { id: 'hoomu', w: 'platform', en: 'platform', lv: 'A2', x: 130, y: 338, alt: ['plataporma'] },
      { id: 'senro', w: 'riles', en: 'railway track', lv: 'A2', x: 130, y: 395, alt: ['riles ng tren'] },
      { id: 'densha', w: 'tren', en: 'train', lv: 'A1', x: 262, y: 342, alt: ['MRT', 'LRT'] },
      { id: 'doa', w: 'pinto ng tren', en: 'door (of the train)', lv: 'A1', x: 345, y: 336, alt: ['pinto', 'pintuan'] }
    ],
    say: [
      { tl: 'Sumakay na tayo sa susunod na tren.', en: 'Let us take the next train.', p: 'densha' },
      { tl: 'Magsasara na ang pinto, mag-ingat po.', en: 'The doors are closing, please be careful.', p: 'doa' },
      { tl: 'Huwag po kayong lumampas sa dilaw na linya ng platform.', en: 'Please do not step past the yellow line on the platform.', p: 'hoomu' },
      { tl: 'Bawal pong bumaba sa riles.', en: 'Going down onto the tracks is not allowed.', p: 'senro' },
      { tl: 'Magkita tayo sa may turnstile.', en: 'Let us meet at the turnstile.', p: 'kaisatsu' },
      { tl: 'Nawawala po ang tiket ko.', en: 'My ticket is missing.', p: 'kippu' },
      { tl: 'Naka-wheelchair po kayo, kaya sa elevator po tayo dumaan.', en: 'You are in a wheelchair, so let us take the elevator.', p: 'erebeetaa' },
      { tl: 'Dahan-dahan lang po sa pagbaba ng hagdan.', en: 'Go slowly going down the stairs.', p: 'kaidan' },
      { tl: 'Pagod na po ako, magpahinga muna tayo sa upuan.', en: 'I am tired, let us rest on the bench first.', p: 'benchi' },
      { tl: 'Kapag nahilo po kayo, sabihin agad ninyo sa staff ng istasyon.', en: 'If you feel dizzy, tell the station staff right away.', p: 'ekiin' }
    ] },

  { id: 'buildings', group: 'town', title: 'Buildings in town', lv: 'A1', kind: 'cards',
    intro: 'Buildings and places in a Philippine town that you go to in everyday life.',
    parts: [
      { id: 'bahay', w: 'bahay', en: 'house, home', lv: 'A1', pic: '🏠' },
      { id: 'ospital', w: 'ospital', en: 'hospital', lv: 'A1', pic: '🏥', alt: ['hospital'] },
      { id: 'botika', w: 'botika', en: 'pharmacy, drugstore', lv: 'A1', pic: '💊', alt: ['pharmacy', 'parmasya'] },
      { id: 'bangko', w: 'bangko', en: 'bank', lv: 'A1', pic: '🏦', alt: ['bank'] },
      { id: 'post-office', w: 'post office', en: 'post office', lv: 'A2', pic: '🏤', alt: ['koreo'] },
      { id: 'paaralan', w: 'paaralan', en: 'school', lv: 'A1', pic: '🏫', alt: ['eskuwelahan', 'eskwelahan', 'iskul'] },
      { id: 'simbahan', w: 'simbahan', en: 'church', lv: 'A1', pic: '⛪' },
      { id: 'hotel', w: 'hotel', en: 'hotel', lv: 'A1', pic: '🏨' },
      { id: 'tindahan', w: 'tindahan', en: 'shop, convenience store', lv: 'A1', pic: '🏪', alt: ['store', 'convenience store'] },
      { id: 'mall', w: 'mall', en: 'shopping mall, department store', lv: 'A1', pic: '🏬' },
      { id: 'opisina', w: 'opisina', en: 'office', lv: 'A1', pic: '🏢', alt: ['office'] },
      { id: 'pabrika', w: 'pabrika', en: 'factory', lv: 'A2', pic: '🏭', alt: ['factory'] },
      { id: 'istasyon', w: 'istasyon', en: 'train station', lv: 'A2', pic: '🚉', alt: ['istasyon ng tren', 'station'] },
      { id: 'kainan', w: 'kainan', en: 'restaurant, eatery', lv: 'A2', pic: '🍴', alt: ['restawran', 'restaurant', 'karinderya'] },
      { id: 'munisipyo', w: 'munisipyo', en: 'town hall, municipal hall', lv: 'B1', pic: '🏛️', alt: ['city hall', 'town hall'] }
    ],
    say: [
      { tl: 'Kapag may lagnat po kayo, pumunta kayo sa ospital.', en: 'When you have a fever, go to the hospital.', p: 'ospital' },
      { tl: 'Dito po ninyo mabibili ang gamot na nireseta ng doktor.', en: 'You can buy the medicine the doctor prescribed here.', p: 'botika' },
      { tl: 'Magpahinga po kayo nang mabuti sa bahay ngayong araw.', en: 'Please rest well at home today.', p: 'bahay' },
      { tl: 'Kumusta po kayo sa opisina? May bumabagabag po ba sa inyo sa trabaho?', en: 'How are things at the office? Is anything at work troubling you?', p: 'opisina' },
      { tl: 'Tuwing umaga, pumapasok ang mga bata sa paaralan.', en: 'Every morning the children go to school.', p: 'paaralan' },
      { tl: 'Nagsisimba po kami tuwing Linggo.', en: 'We go to church every Sunday.', p: 'simbahan' },
      { tl: 'Bumili ka nga ng yelo sa tindahan.', en: 'Go and buy some ice at the store.', p: 'tindahan' },
      { tl: 'Dito po nagtatrabaho ang tatay ko, gumagawa sila ng sapatos.', en: 'My father works here; they make shoes.', p: 'pabrika' },
      { tl: 'Sa munisipyo po kami kumuha ng birth certificate ng anak ko.', en: "We got my child's birth certificate at the municipal hall.", p: 'munisipyo' },
      { tl: 'Magwi-withdraw muna ako ng pera sa bangko.', en: 'I will withdraw some money at the bank first.', p: 'bangko' }
    ] },

  { id: 'hospital-floor', group: 'town', title: 'A hospital floor plan', lv: 'A2', kind: 'diagram', art: 'hospital-floor',
    intro: 'A simple hospital floor plan: from the entrance to the information desk, the waiting area, the consultation room, the pharmacy, the cashier and the ward.',
    parts: [
      { id: 'iriguchi', w: 'pasukan', en: 'entrance', lv: 'A1', x: 200, y: 360, alt: ['entrance'] },
      { id: 'deguchi', w: 'labasan', en: 'exit', lv: 'A1', x: 380, y: 360, alt: ['exit'] },
      { id: 'uketsuke', w: 'information', en: 'information desk, reception', lv: 'A2', x: 172, y: 296, alt: ['information desk', 'tanungan', 'reception', 'registration', 'admitting'] },
      { id: 'machiaishitsu', w: 'hintayan', en: 'waiting area', lv: 'A2', x: 212, y: 210, alt: ['waiting area'] },
      { id: 'shinsatsushitsu', w: 'consultation room', en: "consultation room (doctor's room)", lv: 'A2', x: 98, y: 210, alt: ['kuwarto ng doktor', 'kwarto ng doktor', 'klinika', 'clinic'] },
      { id: 'yakkyoku', w: 'botika', en: 'pharmacy', lv: 'A1', x: 360, y: 232, alt: ['pharmacy', 'parmasya'] },
      { id: 'kaikei', w: 'cashier', en: 'cashier (where you pay)', lv: 'A2', x: 332, y: 296, alt: ['kahera', 'bayaran'] },
      { id: 'byoushitsu', w: 'ward', en: 'ward, patient room', lv: 'A2', x: 80, y: 62, alt: ['kuwarto', 'kwarto', 'silid ng pasyente'] },
      { id: 'naasusuteeshon', w: 'nurse station', en: "nurses' station", lv: 'A2', x: 200, y: 66, alt: ["nurses' station", 'nurses station'] },
      { id: 'toire', w: 'CR', en: 'toilet, comfort room', lv: 'A1', x: 284, y: 98, alt: ['banyo', 'palikuran', 'comfort room', 'kubeta'] },
      { id: 'erebeetaa', w: 'elevator', en: 'elevator, lift', lv: 'A1', x: 340, y: 70 },
      { id: 'kaidan', w: 'hagdan', en: 'stairs', lv: 'A1', x: 387, y: 64, alt: ['hagdanan'] },
      { id: 'baiten', w: 'tindahan', en: 'hospital shop, kiosk', lv: 'A2', x: 50, y: 330, alt: ['kiosk', 'canteen', 'kantina'] },
      { id: 'denwa', w: 'telepono', en: 'telephone', lv: 'A2', x: 261, y: 342, alt: ['phone'] },
      { id: 'takushii', w: 'taxi', en: 'taxi', lv: 'A1', x: 108, y: 404, alt: ['taksi'] },
      { id: 'niwa', w: 'hardin', en: 'garden', lv: 'A2', x: 292, y: 404, alt: ['garden'] }
    ],
    say: [
      { tl: 'Kung first time po ninyo rito, magtanong po kayo sa information.', en: 'If this is your first time here, please ask at the information desk.', p: 'uketsuke' },
      { tl: 'Maupo po muna kayo sa hintayan hanggang tawagin ang pangalan ninyo.', en: 'Please sit in the waiting area until your name is called.', p: 'machiaishitsu' },
      { tl: 'Pasok na po kayo sa consultation room, hinihintay na kayo ng doktor.', en: 'Please go into the consultation room, the doctor is waiting for you.', p: 'shinsatsushitsu' },
      { tl: 'Pagkatapos ng konsulta, sa cashier po kayo magbabayad.', en: 'After the consultation, you pay at the cashier.', p: 'kaikei' },
      { tl: 'Sa botika po ninyo bilhin ang gamot na nasa reseta.', en: 'Please buy the medicine on the prescription at the pharmacy.', p: 'yakkyoku' },
      { tl: 'Habang naka-admit po kayo, magpahinga kayo nang mabuti sa ward.', en: 'While you are admitted, please rest well in the ward.', p: 'byoushitsu' },
      { tl: 'Kapag may kailangan po kayo, lumapit lang kayo sa nurse station.', en: "If you need anything, just come to the nurses' station.", p: 'naasusuteeshon' },
      { tl: 'Kung masakit po ang tuhod ninyo, mag-elevator na lang po tayo.', en: 'If your knees hurt, let us just take the elevator.', p: 'erebeetaa' },
      { tl: 'Makikitanong po, saan po ang CR dito?', en: 'May I ask, where is the CR here?', p: 'toire' },
      { tl: 'Maganda ang panahon, maglakad-lakad po tayo sa hardin.', en: 'The weather is nice, let us take a walk in the garden.', p: 'niwa' }
    ] },

  { id: 'positions', group: 'town', title: 'Where things are', lv: 'A1', kind: 'diagram', art: 'positions',
    intro: 'Position words: each pin marks a thing that is on, under, in, in front of, behind, next to, left of, right of, between or outside something.',
    parts: [
      { id: 'ue', w: 'sa ibabaw', en: 'on, on top of (the cat on the table)', lv: 'A1', x: 94, y: 218, alt: ['ibabaw', 'nasa ibabaw'] },
      { id: 'shita', w: 'sa ilalim', en: 'under (the ball under the table)', lv: 'A1', x: 95, y: 333, alt: ['ilalim', 'nasa ilalim'] },
      { id: 'naka', w: 'sa loob', en: 'in, inside (the apples in the big box)', lv: 'A1', x: 312, y: 279, alt: ['loob', 'nasa loob'] },
      { id: 'mae', w: 'sa harap', en: 'in front of (the bag in front of the big box)', lv: 'A1', x: 311, y: 372, alt: ['harap', 'nasa harap', 'sa harapan', 'harapan'] },
      { id: 'ushiro', w: 'sa likod', en: 'behind (the dog behind the big box)', lv: 'A1', x: 356, y: 262, alt: ['likod', 'nasa likod', 'sa likuran', 'likuran'] },
      { id: 'tonari', w: 'sa tabi', en: 'next to (the small box next to the big box)', lv: 'A1', x: 222, y: 338, alt: ['tabi', 'nasa tabi', 'katabi'] },
      { id: 'hidari', w: 'sa kaliwa', en: 'left (the cup left of the clock)', lv: 'A1', x: 75, y: 106, alt: ['kaliwa', 'nasa kaliwa'] },
      { id: 'migi', w: 'sa kanan', en: 'right (the book right of the clock)', lv: 'A1', x: 219, y: 95, alt: ['kanan', 'nasa kanan'] },
      { id: 'aida', w: 'sa pagitan', en: 'between (the clock between the cup and the book)', lv: 'A2', x: 145, y: 96, alt: ['pagitan', 'nasa pagitan', 'sa gitna', 'gitna'] },
      { id: 'soto', w: 'sa labas', en: 'outside (the bird outside the window)', lv: 'A1', x: 349, y: 106, alt: ['labas', 'nasa labas'] }
    ],
    say: [
      { tl: 'Nasa ibabaw ng mesa ang pusa.', en: 'The cat is on the table.', p: 'ue' },
      { tl: 'Nasa ilalim ng mesa ang bola.', en: 'The ball is under the table.', p: 'shita' },
      { tl: 'Nasa loob ng malaking kahon ang mga mansanas.', en: 'The apples are in the big box.', p: 'naka' },
      { tl: 'Nasa harap ng malaking kahon ang bag.', en: 'The bag is in front of the big box.', p: 'mae' },
      { tl: 'Nasa likod ng malaking kahon ang aso.', en: 'The dog is behind the big box.', p: 'ushiro' },
      { tl: 'Nasa tabi ng malaking kahon ang maliit na kahon.', en: 'The small box is next to the big box.', p: 'tonari' },
      { tl: 'Nasa kaliwa ng orasan ang tasa.', en: 'The cup is to the left of the clock.', p: 'hidari' },
      { tl: 'Nasa kanan ng orasan ang libro.', en: 'The book is to the right of the clock.', p: 'migi' },
      { tl: 'Nasa pagitan ng tasa at libro ang orasan.', en: 'The clock is between the cup and the book.', p: 'aida' },
      { tl: 'Nasa labas ng bintana ang ibon.', en: 'The bird is outside the window.', p: 'soto' }
    ] }
]);
