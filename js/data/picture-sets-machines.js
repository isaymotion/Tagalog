/* Picture words, group 'machines' (Usap Tayo 3.10.0): tap-to-learn pictures for #/pictures (js/pictures.js).
   DRAFT FOR REVIEW by Dr. Navarro (native speaker). All Tagalog here is a draft.
   Shape (PLAN-3.10 A1): window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([ { id, group, title, lv: 'A1'|'A2',
     kind: 'diagram'|'cards', art (diagram only, pictures/art-machines.js), intro: one English sentence,
     parts: [ { id, w: the word as said (lower case, 1 to 3 words), en, lv: 'A1'|'A2'|'B1', alt: [other accepted answers],
                diagram: x, y (kept from the Japanese art, never moved); cards: pic = ONE emoji, Emoji 12.0 or older } ],
     say: [ { tl: a sentence whose answer is exactly ONE part, en, p: part id } ] } ]);   6 to 10 sentences
   Sets: car d A2; bicycle d A2; computer-phone d A2; vehicles c A1; ward-things c A2.
   Set ids and part ids are permanent after release: append only. */
window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([
  { id: 'car', group: 'machines', title: 'A car', lv: 'A2', kind: 'diagram', art: 'car',
    intro: 'The outside and inside parts of a car, for getting a patient in and out safely and for everyday driving talk.',
    parts: [
      { id: 'taiya', w: 'gulong', en: 'tyre, wheel', lv: 'A1', x: 100, y: 198, alt: ['tire', 'goma'] },
      { id: 'doa', w: 'pinto', en: 'door', lv: 'A1', x: 250, y: 162, alt: ['pintuan'] },
      { id: 'mado', w: 'bintana', en: 'window', lv: 'A1', x: 160, y: 102 },
      { id: 'handoru', w: 'manibela', en: 'steering wheel', lv: 'A2', x: 247, y: 107 },
      { id: 'zaseki', w: 'upuan', en: 'seat', lv: 'A1', x: 215, y: 106, alt: ['silya'] },
      { id: 'raito', w: 'ilaw', en: 'headlight', lv: 'A1', x: 372, y: 136, alt: ['headlight'] },
      { id: 'miraa', w: 'side mirror', en: 'side mirror', lv: 'A2', x: 314, y: 96, alt: ['salamin'] },
      { id: 'waipaa', w: 'wiper', en: 'windscreen wiper', lv: 'A2', x: 336, y: 126 },
      { id: 'yane', w: 'bubong', en: 'roof', lv: 'A2', x: 200, y: 64 },
      { id: 'toranku', w: 'compartment', en: 'boot, trunk', lv: 'A2', x: 70, y: 145, alt: ['trunk'] },
      { id: 'banpaa', w: 'bumper', en: 'bumper', lv: 'A2', x: 359, y: 184 }
    ],
    say: [
      { tl: 'Ako na po ang magbubukas ng pinto. Dahan-dahan lang po sa pagsakay.', en: 'I will open the door for you. Get in slowly.', p: 'doa' },
      { tl: 'Ingat po sa ulo, mababa ang bubong ng kotse.', en: 'Mind your head; the roof of the car is low.', p: 'yane' },
      { tl: 'Umupo po kayo sa upuan sa likod at magsuot ng seatbelt.', en: 'Please sit on the back seat and put on your seatbelt.', p: 'zaseki' },
      { tl: 'Ilagay po natin ang wheelchair sa compartment.', en: 'Let us put the wheelchair in the boot.', p: 'toranku' },
      { tl: 'Buksan mo ang bintana, ang init sa loob.', en: 'Open the window, it is so hot inside.', p: 'mado' },
      { tl: 'Flat ang gulong, hindi tayo makakaalis.', en: 'The tyre is flat; we cannot leave.', p: 'taiya' },
      { tl: 'Buksan mo ang ilaw, madilim na sa daan.', en: 'Turn on the headlights, the road is dark now.', p: 'raito' },
      { tl: 'Tumingin ka muna sa side mirror bago lumiko.', en: 'Look in the side mirror before you turn.', p: 'miraa' },
      { tl: 'Umuulan, paandarin mo ang wiper.', en: 'It is raining; switch on the wiper.', p: 'waipaa' },
      { tl: 'Nayupi ang bumper nang mabangga ang kotse.', en: 'The bumper got dented when the car was hit.', p: 'banpaa' }
    ] },

  { id: 'bicycle', group: 'machines', title: 'A bicycle', lv: 'A2', kind: 'diagram', art: 'bicycle',
    intro: 'The parts of an everyday town bicycle, with a basket, a bell and a lock.',
    parts: [
      { id: 'sadoru', w: 'upuan', en: 'saddle, seat', lv: 'A1', x: 162, y: 97, alt: ['saddle'] },
      { id: 'handoru', w: 'manibela', en: 'handlebars', lv: 'A2', x: 238, y: 84, alt: ['hawakan'] },
      { id: 'beru', w: 'busina', en: 'bell', lv: 'A2', x: 262, y: 48, alt: ['bell', 'kampanilya'] },
      { id: 'kago', w: 'basket', en: 'basket', lv: 'A1', x: 320, y: 111, alt: ['buslo'] },
      { id: 'raito', w: 'ilaw', en: 'light', lv: 'A1', x: 372, y: 121 },
      { id: 'bureeki', w: 'preno', en: 'brake lever', lv: 'A2', x: 206, y: 111, alt: ['brake'] },
      { id: 'taiya', w: 'gulong', en: 'tyre, wheel', lv: 'A1', x: 351, y: 251, alt: ['tire', 'goma'] },
      { id: 'pedaru', w: 'pedal', en: 'pedal', lv: 'A2', x: 220, y: 248, alt: ['pedalan'] },
      { id: 'cheen', w: 'kadena', en: 'chain', lv: 'A2', x: 145, y: 200, alt: ['chain'] },
      { id: 'kagi', w: 'kandado', en: 'lock', lv: 'A2', x: 150, y: 152, alt: ['lock'] },
      { id: 'nidai', w: 'rack', en: 'rear rack', lv: 'B1', x: 95, y: 134, alt: ['patungan sa likod', 'angkasan'] },
      { id: 'sutando', w: 'stand', en: 'kickstand', lv: 'B1', x: 157, y: 255, alt: ['kickstand', 'tukod'] }
    ],
    say: [
      { tl: 'Doc, nahulog daw po siya sa bisikleta dahil sira ang preno.', en: 'Doc, they say he fell off the bicycle because the brake was broken.', p: 'bureeki' },
      { tl: 'Naipit po ang paa ko sa kadena.', en: 'My foot got caught in the chain.', p: 'cheen' },
      { tl: 'Nadulas daw po ang paa niya sa pedal kaya siya nasugatan.', en: 'They say his foot slipped off the pedal, so he got hurt.', p: 'pedaru' },
      { tl: 'Masyadong mataas ang upuan, hindi umaabot ang paa ko sa lupa.', en: 'The saddle is too high; my feet do not reach the ground.', p: 'sadoru' },
      { tl: 'Hawakan mo nang mabuti ang manibela.', en: 'Hold the handlebars firmly.', p: 'handoru' },
      { tl: 'Patunugin mo ang busina para tumabi ang mga tao.', en: 'Ring the bell so people move aside.', p: 'beru' },
      { tl: 'Ilagay mo ang mga pinamili sa basket.', en: 'Put the shopping in the basket.', p: 'kago' },
      { tl: 'Buksan mo ang ilaw kapag gabi na.', en: 'Turn on the light when it is night.', p: 'raito' },
      { tl: 'Huwag kalimutan ang kandado para hindi manakaw ang bisikleta.', en: 'Do not forget the lock so the bicycle does not get stolen.', p: 'kagi' },
      { tl: 'Ibaba mo ang stand para hindi tumumba ang bisikleta.', en: 'Put down the kickstand so the bicycle does not fall over.', p: 'sutando' }
    ] },

  { id: 'computer-phone', group: 'machines', title: 'Computer and phone', lv: 'A2', kind: 'diagram', art: 'computer-phone',
    intro: 'A laptop and a smartphone with the things around them, for online consults and for helping patients with their phones.',
    parts: [
      { id: 'gamen', w: 'screen', en: 'screen', lv: 'A1', x: 210, y: 80, alt: ['iskrin', 'monitor'] },
      { id: 'kamera', w: 'camera', en: 'camera', lv: 'A1', x: 155, y: 31, alt: ['kamera'] },
      { id: 'kiiboodo', w: 'keyboard', en: 'keyboard', lv: 'A1', x: 110, y: 194 },
      { id: 'dengen', w: 'power button', en: 'power button', lv: 'A2', x: 262, y: 193, alt: ['power'] },
      { id: 'mausu', w: 'mouse', en: 'mouse', lv: 'A1', x: 240, y: 264 },
      { id: 'sumaho', w: 'cellphone', en: 'smartphone', lv: 'A1', x: 336, y: 168, alt: ['cp', 'selpon', 'smartphone', 'phone'] },
      { id: 'apuri', w: 'app', en: 'app', lv: 'A2', x: 320, y: 60, alt: ['application'] },
      { id: 'botan', w: 'button', en: 'button', lv: 'A2', x: 380, y: 68, alt: ['pindutan'] },
      { id: 'koodo', w: 'kable', en: 'cable', lv: 'A2', x: 337, y: 215, alt: ['cord', 'wire', 'cable'] },
      { id: 'juudenki', w: 'charger', en: 'charger', lv: 'A1', x: 342, y: 261 },
      { id: 'iyahon', w: 'earphones', en: 'earphones', lv: 'A2', x: 48, y: 250, alt: ['earphone', 'headset'] }
    ],
    say: [
      { tl: 'Nakikita po ba ninyo ako sa screen?', en: 'Can you see me on the screen?', p: 'gamen' },
      { tl: 'Pakibuksan po ang camera para makita ko kayo.', en: 'Please turn on the camera so I can see you.', p: 'kamera' },
      { tl: 'I-download po ninyo ang app para sa online consult.', en: 'Please download the app for the online consult.', p: 'apuri' },
      { tl: 'Gumamit po kayo ng earphones para walang ibang makarinig ng usapan natin.', en: 'Please use earphones so nobody else hears our conversation.', p: 'iyahon' },
      { tl: 'Tatawagan po namin kayo sa cellphone ninyo bago ang check-up.', en: 'We will call you on your phone before the check-up.', p: 'sumaho' },
      { tl: 'Pindutin po ang power button para buksan ang laptop.', en: 'Press the power button to turn on the laptop.', p: 'dengen' },
      { tl: 'I-type po ninyo ang pangalan ninyo sa keyboard.', en: 'Please type your name on the keyboard.', p: 'kiiboodo' },
      { tl: 'I-click po ninyo ang link gamit ang mouse.', en: 'Please click the link with the mouse.', p: 'mausu' },
      { tl: 'Pindutin po ang button sa gilid para lumakas ang tunog.', en: 'Press the button on the side to make the sound louder.', p: 'botan' },
      { tl: 'Pahiram po ng charger, lowbat na po ako.', en: 'May I borrow a charger? My battery is low.', p: 'juudenki' }
    ] },

  { id: 'vehicles', group: 'machines', title: 'Vehicles', lv: 'A1', kind: 'cards',
    intro: 'Words for the jeepneys, tricycles, boats and other vehicles people use to get around and to come to the hospital (phones have no jeepney picture, so a jeep stands in for it).',
    parts: [
      { id: 'dyip', w: 'dyip', en: 'jeepney', lv: 'A1', pic: '🚙', alt: ['jeep', 'jeepney', 'dyipni'] },
      { id: 'traysikel', w: 'traysikel', en: 'tricycle', lv: 'A1', pic: '🛺', alt: ['tricycle'] },
      { id: 'bus', w: 'bus', en: 'bus', lv: 'A1', pic: '🚌' },
      { id: 'tren', w: 'tren', en: 'train', lv: 'A1', pic: '🚆', alt: ['train'] },
      { id: 'bangka', w: 'bangka', en: 'small boat', lv: 'A1', pic: '🛶' },
      { id: 'motorsiklo', w: 'motorsiklo', en: 'motorbike', lv: 'A1', pic: '🏍️', alt: ['motor'] },
      { id: 'bisikleta', w: 'bisikleta', en: 'bicycle', lv: 'A1', pic: '🚲', alt: ['bike'] },
      { id: 'kotse', w: 'kotse', en: 'car', lv: 'A1', pic: '🚗', alt: ['sasakyan'] },
      { id: 'trak', w: 'trak', en: 'truck', lv: 'A1', pic: '🚚', alt: ['truck'] },
      { id: 'ambulansya', w: 'ambulansya', en: 'ambulance', lv: 'A2', pic: '🚑', alt: ['ambulance'] },
      { id: 'eroplano', w: 'eroplano', en: 'aeroplane', lv: 'A1', pic: '✈️' },
      { id: 'barko', w: 'barko', en: 'ship', lv: 'A1', pic: '🚢' },
      { id: 'taxi', w: 'taxi', en: 'taxi', lv: 'A1', pic: '🚕', alt: ['taksi'] },
      { id: 'van', w: 'van', en: 'van, UV Express', lv: 'A2', pic: '🚐' }
    ],
    say: [
      { tl: 'Sumakay po kayo ng dyip, tapos bumaba sa tapat ng ospital.', en: 'Take a jeepney, then get off in front of the hospital.', p: 'dyip' },
      { tl: 'Mag-traysikel na lang po kayo mula sa kanto papunta rito.', en: 'Just take a tricycle from the corner to here.', p: 'traysikel' },
      { tl: 'Tumawag po kayo ng ambulansya kapag emergency.', en: 'Call an ambulance in an emergency.', p: 'ambulansya' },
      { tl: 'Dinala raw po siya rito ng kapitbahay sakay ng motorsiklo.', en: 'They say a neighbour brought him here on a motorbike.', p: 'motorsiklo' },
      { tl: 'Kauuwi lang po niya galing abroad, sumakay siya ng eroplano kahapon.', en: 'He just came home from abroad; he took a plane yesterday.', p: 'eroplano' },
      { tl: 'Mangingisda po ang tatay niya at may sarili silang bangka.', en: 'His father is a fisherman and they have their own boat.', p: 'bangka' },
      { tl: 'Galing pa po kami sa probinsya, nag-bus kami.', en: 'We came all the way from the province; we took the bus.', p: 'bus' },
      { tl: 'Sumasakay ng barko ang mga taga-isla papuntang Maynila.', en: 'People from the islands take a ship to Manila.', p: 'barko' },
      { tl: 'Nagbibisikleta siya papuntang palengke.', en: 'She rides a bicycle to the market.', p: 'bisikleta' },
      { tl: 'Nag-taxi na lang po kami kasi gabi na.', en: 'We just took a taxi because it was already night.', p: 'taxi' }
    ] },

  { id: 'ward-things', group: 'machines', title: 'Things on the ward', lv: 'A2', kind: 'cards',
    intro: 'Everyday things a patient sees on a hospital ward, from the thermometer to the wheelchair.',
    parts: [
      { id: 'thermometer', w: 'thermometer', en: 'thermometer', lv: 'A1', pic: '🌡️', alt: ['termometro'] },
      { id: 'iniksyon', w: 'iniksyon', en: 'injection', lv: 'A2', pic: '💉', alt: ['injection', 'turok'] },
      { id: 'gamot', w: 'gamot', en: 'medicine', lv: 'A1', pic: '💊' },
      { id: 'band-aid', w: 'plaster', en: 'sticking plaster', lv: 'A1', pic: '🩹', alt: ['band-aid', 'benda'] },
      { id: 'stethoscope', w: 'stethoscope', en: 'stethoscope', lv: 'A2', pic: '🩺', alt: ['istetoskopyo'] },
      { id: 'wheelchair', w: 'wheelchair', en: 'wheelchair', lv: 'A1', pic: '🦽' },
      { id: 'kama', w: 'kama', en: 'bed', lv: 'A1', pic: '🛏️', alt: ['higaan'] },
      { id: 'face-mask', w: 'face mask', en: 'face mask', lv: 'A1', pic: '😷', alt: ['mask'] },
      { id: 'dugo', w: 'dugo', en: 'blood', lv: 'A1', pic: '🩸' },
      { id: 'sabon', w: 'sabon', en: 'soap', lv: 'A1', pic: '🧼' },
      { id: 'guwantes', w: 'guwantes', en: 'gloves', lv: 'A2', pic: '🧤', alt: ['gloves', 'gwantes'] },
      { id: 'gunting', w: 'gunting', en: 'scissors', lv: 'A1', pic: '✂️' },
      { id: 'basurahan', w: 'basurahan', en: 'rubbish bin', lv: 'A1', pic: '🗑️' },
      { id: 'upuan', w: 'upuan', en: 'chair', lv: 'A1', pic: '🪑', alt: ['silya'] },
      { id: 'tissue', w: 'tissue', en: 'tissue, toilet paper', lv: 'A1', pic: '🧻', alt: ['tisyu', 'toilet paper'] }
    ],
    say: [
      { tl: 'Ilalagay ko po ang thermometer sa kili-kili ninyo.', en: 'I will put the thermometer under your arm.', p: 'thermometer' },
      { tl: 'Kikirot lang po nang kaunti ang iniksyon.', en: 'The injection will only sting a little.', p: 'iniksyon' },
      { tl: 'Oras na po ng gamot ninyo.', en: 'It is time for your medicine.', p: 'gamot' },
      { tl: 'Lalagyan ko po ng plaster ang paltos sa paa ninyo.', en: 'I will put a plaster on the blister on your foot.', p: 'band-aid' },
      { tl: 'Pakikinggan ko po ang dibdib ninyo gamit ang stethoscope.', en: 'I will listen to your chest with the stethoscope.', p: 'stethoscope' },
      { tl: 'Sasakay po kayo sa wheelchair papunta sa X-ray.', en: 'You will ride in the wheelchair to the X-ray room.', p: 'wheelchair' },
      { tl: 'Isuot po ninyo ang face mask habang nasa ward.', en: 'Please wear the face mask while you are on the ward.', p: 'face-mask' },
      { tl: 'Magsuot ka muna ng guwantes bago hawakan ang sugat.', en: 'Put on gloves before you touch the wound.', p: 'guwantes' },
      { tl: 'Humiga po muna kayo sa kama at magpahinga.', en: 'Please lie down on the bed for a while and rest.', p: 'kama' },
      { tl: 'Maghugas po kayo ng kamay gamit ang sabon bago kumain.', en: 'Please wash your hands with soap before eating.', p: 'sabon' }
    ] }
]);
