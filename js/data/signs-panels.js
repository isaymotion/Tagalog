/* Machine panels (Usap Tayo 3.10.0): #/signs?tab=panels (js/signs.js). A Tagalog request is shown and spoken; the learner
   presses the ONE right control. 10 Philippine panels (PLAN-3.10 A3), written fresh, not translated.
   DRAFT FOR REVIEW by Dr. Navarro (native speaker) before use.
   Shape: window.SIGN_PANELS = [ { id, title, lv: 'A1' | 'A2', note,
     rows: [ [ { id, label (as printed on real machines here, mostly English), en, kind: 'btn' | 'lamp' (status light,
             never an answer) | 'dial' } ] ]   2 to 4 rows, 6 to 12 controls in all,
     tasks: [ { q: spoken Tagalog request (recorded), en, a: the ONE right control id, why } ]   5 or 6 tasks } ].
   Panel ids and control ids are permanent: append only after release. */
window.SIGN_PANELS = [
  { id: 'electric-fan', title: 'Electric fan', lv: 'A1',
    note: 'A stand fan with push buttons, found in most homes and wards. People say buksan and patayin (turn on and off), lakasan and hinaan (stronger and weaker), and paikutin (make it turn from side to side).',
    rows: [
      [ { id: 'off', label: 'OFF', en: 'off', kind: 'btn' }, { id: 'low', label: '1', en: 'low speed', kind: 'btn' },
        { id: 'med', label: '2', en: 'medium speed', kind: 'btn' }, { id: 'high', label: '3', en: 'high speed', kind: 'btn' } ],
      [ { id: 'swing', label: 'SWING', en: 'turn from side to side', kind: 'btn' }, { id: 'timer', label: 'TIMER', en: 'switch off by itself later', kind: 'btn' },
        { id: 'power-lamp', label: 'POWER', en: 'power light', kind: 'lamp' } ]
    ],
    tasks: [
      { q: 'Pakibuksan mo nga ang electric fan, yung pinakamahina lang.', en: 'Please turn on the electric fan, just the weakest setting.', a: 'low', why: 'Pinakamahina = the weakest: speed 1.' },
      { q: 'Ang init! Itodo mo na ang electric fan.', en: 'It is so hot! Turn the electric fan all the way up.', a: 'high', why: 'Itodo = put it at the maximum: speed 3.' },
      { q: 'Masyadong malakas ang hangin. Hinaan mo nang kaunti, sa gitna lang.', en: 'The wind is too strong. Turn it down a little, just to the middle.', a: 'med', why: 'Hinaan nang kaunti = a little weaker; sa gitna = in the middle: speed 2.' },
      { q: 'Patayin mo na ang electric fan, giniginaw na ako.', en: 'Turn off the electric fan now, I am already feeling cold.', a: 'off', why: 'Patayin = turn off (literally "kill"); giniginaw = feeling cold.' },
      { q: 'Paikutin mo nga ang electric fan para mahanginan tayong lahat.', en: 'Make the electric fan turn so that all of us get some air.', a: 'swing', why: 'Paikutin = make it go around; mahanginan = to get air (hangin = wind).' },
      { q: 'Pakilagyan po ng timer ang electric fan para kusang mamatay pagkatulog ko.', en: 'Please put a timer on the electric fan so it turns itself off after I fall asleep.', a: 'timer', why: 'Kusang mamatay = to switch off by itself; pagkatulog = after falling asleep.' }
    ] },

  { id: 'rice-cooker', title: 'Rice cooker', lv: 'A1',
    note: 'A digital rice cooker. Magsaing (isaing) is to cook rice; kanin is cooked rice, bigas is uncooked rice, and lugaw is rice porridge.',
    rows: [
      [ { id: 'cook', label: 'COOK', en: 'start cooking', kind: 'btn' }, { id: 'warm', label: 'KEEP WARM', en: 'keep the rice warm', kind: 'btn' },
        { id: 'cancel', label: 'CANCEL', en: 'stop', kind: 'btn' } ],
      [ { id: 'porridge', label: 'PORRIDGE', en: 'cook porridge', kind: 'btn' }, { id: 'timer', label: 'TIMER', en: 'cook later at a set time', kind: 'btn' } ],
      [ { id: 'cook-lamp', label: 'COOKING', en: 'cooking light', kind: 'lamp' }, { id: 'warm-lamp', label: 'WARM', en: 'warm light', kind: 'lamp' } ]
    ],
    tasks: [
      { q: 'Nahugasan ko na ang bigas. Isaing mo na.', en: 'I have already washed the rice. Cook it now.', a: 'cook', why: 'Isaing / magsaing = to cook rice.' },
      { q: 'Luto na ang kanin. I-warm mo na lang para mainit pa pagdating ni Tatay.', en: 'The rice is cooked. Just keep it warm so it is still hot when Dad arrives.', a: 'warm', why: 'I-warm = the English "warm" with i-: keep it warm.' },
      { q: 'Lugaw ang lutuin mo para kay Lola, hindi pa siya makakain ng kanin.', en: 'Cook porridge for Grandma, she cannot eat rice yet.', a: 'porridge', why: 'Lugaw = rice porridge, soft food for the sick or the elderly.' },
      { q: 'Mamayang hapon pa natin kakainin. I-set mo na lang para mamaya pa maluto.', en: 'We will only eat it this afternoon. Just set it so the rice cooks later.', a: 'timer', why: 'Mamaya = later today; i-set = set it: the timer.' },
      { q: 'Naku, kulang ang tubig na nailagay mo. Ihinto mo muna.', en: 'Oh no, you did not put in enough water. Stop it first.', a: 'cancel', why: 'Ihinto = to stop; muna = first, for now.' }
    ] },

  { id: 'aircon-remote', title: 'Aircon remote', lv: 'A2',
    note: 'A remote for a split-type aircon. Aircon here only cools, so hinaan ang aircon (make it weaker) means make it less cold, and palamigin means make it colder.',
    rows: [
      [ { id: 'power', label: 'ON/OFF', en: 'on and off', kind: 'btn' }, { id: 'mode', label: 'MODE', en: 'cool, dry or fan only', kind: 'btn' } ],
      [ { id: 'temp-up', label: 'TEMP +', en: 'temperature up (less cold)', kind: 'btn' }, { id: 'temp-down', label: 'TEMP -', en: 'temperature down (colder)', kind: 'btn' } ],
      [ { id: 'fan', label: 'FAN', en: 'fan speed', kind: 'btn' }, { id: 'swing', label: 'SWING', en: 'move the air flaps', kind: 'btn' },
        { id: 'timer', label: 'TIMER', en: 'switch off by itself later', kind: 'btn' }, { id: 'sleep', label: 'SLEEP', en: 'night setting', kind: 'btn' } ]
    ],
    tasks: [
      { q: 'Giniginaw na po si Lola. Pakibawasan po ang lamig ng aircon.', en: 'Grandma is already cold. Please make the aircon less cold.', a: 'temp-up', why: 'Bawasan ang lamig = less cold: raise the temperature, not the fan.' },
      { q: 'Ang init pa rin dito sa kuwarto. Palamigin mo pa nang kaunti.', en: 'It is still hot here in the room. Make it a little colder.', a: 'temp-down', why: 'Palamigin = make it colder (malamig = cold): lower the temperature.' },
      { q: 'Buksan mo na ang aircon bago dumating ang pasyente.', en: 'Turn on the aircon before the patient arrives.', a: 'power', why: 'Buksan = open, and for machines, turn on.' },
      { q: 'Ang ingay ng hangin. Hinaan mo lang ang fan, huwag ang lamig.', en: 'The air is so noisy. Just turn down the fan, not the cold.', a: 'fan', why: 'Hinaan ang fan = slower air; huwag ang lamig = leave the cold as it is.' },
      { q: 'I-swing mo ang aircon para pantay ang lamig sa buong kuwarto.', en: 'Set the aircon to swing so the whole room is evenly cool.', a: 'swing', why: 'I-swing = the English "swing" with i-; pantay = even.' },
      { q: 'Lagyan mo ng timer ang aircon, mga dalawang oras, para kusa itong mamatay.', en: 'Put a two-hour timer on the aircon so it turns itself off.', a: 'timer', why: 'Kusa itong mamatay = it switches off by itself.' }
    ] },

  { id: 'tv-remote', title: 'TV remote', lv: 'A1',
    note: 'A TV remote, as in a ward day room. Lakasan and hinaan mean louder and softer for sound; ilipat ng channel means change the channel.',
    rows: [
      [ { id: 'power', label: 'POWER', en: 'on and off', kind: 'btn' }, { id: 'source', label: 'INPUT', en: 'choose TV or HDMI', kind: 'btn' },
        { id: 'mute', label: 'MUTE', en: 'no sound', kind: 'btn' } ],
      [ { id: 'vol-up', label: 'VOL +', en: 'louder', kind: 'btn' }, { id: 'vol-down', label: 'VOL -', en: 'softer', kind: 'btn' } ],
      [ { id: 'ch-up', label: 'CH +', en: 'next channel', kind: 'btn' }, { id: 'ch-down', label: 'CH -', en: 'previous channel', kind: 'btn' } ]
    ],
    tasks: [
      { q: 'Pakilakasan po ang TV, hindi ko marinig.', en: 'Please turn up the TV, I cannot hear it.', a: 'vol-up', why: 'Lakasan = make it louder (malakas = loud, strong).' },
      { q: 'Hinaan mo ang TV, natutulog na ang pasyente sa kabilang kama.', en: 'Turn down the TV, the patient in the next bed is already asleep.', a: 'vol-down', why: 'Hinaan = make it softer (mahina = soft, weak).' },
      { q: 'Ilipat mo nga sa kasunod na channel.', en: 'Switch to the next channel, please.', a: 'ch-up', why: 'Ilipat = move, switch; kasunod = the one after.' },
      { q: 'Ibalik mo sa naunang channel, mas maganda yung balita doon.', en: 'Go back to the previous channel, the news there was better.', a: 'ch-down', why: 'Ibalik = bring back; nauna = the one before.' },
      { q: 'Sandali, may tumatawag sa akin. Patahimikin mo muna ang TV.', en: 'Wait, someone is calling me. Make the TV quiet for now.', a: 'mute', why: 'Patahimikin = make it quiet (tahimik = quiet).' },
      { q: 'Oras na ng pahinga. Patayin na natin ang TV.', en: 'It is rest time now. Let us turn off the TV.', a: 'power', why: 'Patayin = turn off.' }
    ] },

  { id: 'washing-machine', title: 'Washing machine (twin tub)', lv: 'A2',
    note: 'A twin-tub washer, the common kind in Philippine homes: one tub washes, the other (the spinner) spins the water out. Maglaba is to do the laundry, magbanlaw is to rinse, and patuyuin is to dry.',
    rows: [
      [ { id: 'wash-timer', label: 'WASH TIMER', en: 'how long to wash', kind: 'dial' }, { id: 'wash-mode', label: 'WASH SELECTOR', en: 'normal or soft (gentle) wash', kind: 'dial' },
        { id: 'drain', label: 'DRAIN', en: 'let the water out', kind: 'dial' } ],
      [ { id: 'spin-timer', label: 'SPIN TIMER', en: 'how long to spin', kind: 'dial' }, { id: 'buzzer', label: 'BUZZER', en: 'sound when finished, on or off', kind: 'btn' },
        { id: 'power-lamp', label: 'POWER', en: 'power light', kind: 'lamp' } ]
    ],
    tasks: [
      { q: 'Labhan mo na ang mga damit. Ikutin mo ang timer nang mga sampung minuto.', en: 'Wash the clothes now. Turn the timer to about ten minutes.', a: 'wash-timer', why: 'Labhan = wash (clothes); ikutin = turn (a dial).' },
      { q: 'Manipis ang tela ng mga blusa, kaya dapat dahan-dahan lang ang ikot.', en: 'The blouses are thin cloth, so the turning should be gentle.', a: 'wash-mode', why: 'Dahan-dahan = slowly, gently: the soft wash.' },
      { q: 'Ang labo na ng tubig. Palabasin mo na ang tubig para makapagbanlaw ka.', en: 'The water is already cloudy. Let the water out so you can rinse.', a: 'drain', why: 'Palabasin = let it out (labas = outside): drain.' },
      { q: 'Tapos na ang banlaw. Ilipat mo na sa spinner para mapiga.', en: 'The rinsing is done. Move it to the spinner so the water is wrung out.', a: 'spin-timer', why: 'Mapiga = to be wrung out (piga = squeeze); spinner = the spin tub.' },
      { q: 'May mantsa pa ang kuwelyo. Labhan mo ulit nang limang minuto.', en: 'The collar still has a stain. Wash it again for five minutes.', a: 'wash-timer', why: 'Ulit = again; mantsa = stain.' }
    ] },

  { id: 'water-dispenser', title: 'Water dispenser', lv: 'A1',
    note: 'A water dispenser with a big bottle on top, in offices and nurse stations. Mainit is hot, malamig is cold; the switches at the back turn the heater and the cooler on or off.',
    rows: [
      [ { id: 'hot', label: 'HOT', en: 'hot water', kind: 'btn' }, { id: 'normal', label: 'NORMAL', en: 'room-temperature water', kind: 'btn' },
        { id: 'cold', label: 'COLD', en: 'cold water', kind: 'btn' }, { id: 'lock', label: 'CHILD LOCK', en: 'lock the hot tap', kind: 'btn' } ],
      [ { id: 'heat-lamp', label: 'HEATING', en: 'heating light', kind: 'lamp' }, { id: 'cool-lamp', label: 'COOLING', en: 'cooling light', kind: 'lamp' } ],
      [ { id: 'heat-switch', label: 'HOT WATER SWITCH', en: 'heater on or off (at the back)', kind: 'btn' }, { id: 'cool-switch', label: 'COLD WATER SWITCH', en: 'cooler on or off (at the back)', kind: 'btn' } ]
    ],
    tasks: [
      { q: 'Gusto ko po ng mainit na tubig para sa kape.', en: 'I would like hot water for coffee, please.', a: 'hot', why: 'Mainit = hot.' },
      { q: 'Malamig na tubig po sana, ang init kasi ng panahon.', en: 'Cold water, please, the weather is so hot.', a: 'cold', why: 'Malamig = cold; ang init ng panahon = the weather is hot.' },
      { q: 'Yung hindi malamig at hindi mainit lang po. Masakit kasi ang lalamunan ko.', en: 'Just the one that is not cold and not hot, please. My throat is sore.', a: 'normal', why: 'Hindi malamig, hindi mainit = neither cold nor hot: normal.' },
      { q: 'May mga bata rito. I-lock mo ang gripo ng mainit para hindi sila mapaso.', en: 'There are children here. Lock the hot tap so they do not get burned.', a: 'lock', why: 'Gripo = tap; mapaso = to get scalded or burned.' },
      { q: 'Aalis tayo nang matagal. Patayin mo muna yung switch ng mainit sa likod.', en: 'We will be away a long time. Turn off the hot water switch at the back first.', a: 'heat-switch', why: 'Switch ng mainit = the switch for the hot water; sa likod = at the back.' },
      { q: 'I-on mo na yung switch ng malamig sa likod, darating na ang mga bisita.', en: 'Turn on the cold water switch at the back, the visitors are coming.', a: 'cool-switch', why: 'I-on = turn on; switch ng malamig = the switch for the cold water.' }
    ] },

  { id: 'atm', title: 'ATM', lv: 'A2',
    note: 'A generic bank ATM. Screens are in English; people say mag-withdraw or kumuha ng pera (take out money) and tingnan ang balance (check the balance).',
    rows: [
      [ { id: 'withdrawal', label: 'WITHDRAWAL', en: 'take out money', kind: 'btn' }, { id: 'fast-cash', label: 'FAST CASH', en: 'take out a set amount', kind: 'btn' } ],
      [ { id: 'balance', label: 'BALANCE INQUIRY', en: 'see how much is in the account', kind: 'btn' }, { id: 'transfer', label: 'FUND TRANSFER', en: 'send money to another account', kind: 'btn' } ],
      [ { id: 'yes', label: 'YES', en: 'yes', kind: 'btn' }, { id: 'no', label: 'NO', en: 'no', kind: 'btn' } ],
      [ { id: 'cancel', label: 'CANCEL', en: 'stop and return the card', kind: 'btn' }, { id: 'clear', label: 'CLEAR', en: 'erase what was typed', kind: 'btn' },
        { id: 'enter', label: 'ENTER', en: 'go on, confirm', kind: 'btn' } ]
    ],
    tasks: [
      { q: 'Titingnan ko lang kung magkano pa ang laman ng account ko.', en: 'I just want to check how much is left in my account.', a: 'balance', why: 'Magkano pa ang laman = how much is still in it: balance inquiry.' },
      { q: 'Maglalabas po ako ng pera. Ako na po ang magta-type ng halaga.', en: 'I am going to take out money. I will type the amount myself.', a: 'withdrawal', why: 'Maglabas ng pera and type your own amount = withdrawal (fast cash gives set amounts).' },
      { q: 'Ipapadala ko ang pera sa account ng anak ko.', en: 'I will send the money to my child\'s account.', a: 'transfer', why: 'Ipadala = to send: fund transfer.' },
      { q: 'Tay, mali po ang na-type ninyo. Burahin muna natin.', en: 'Dad, you typed it wrong. Let us erase it first.', a: 'clear', why: 'Burahin = erase (bura = erasure): clear.' },
      { q: 'Huwag na lang, ayoko nang ituloy. Ilabas mo na ang card ko.', en: 'Never mind, I do not want to go on. Get my card out.', a: 'cancel', why: 'Huwag na lang = never mind; ituloy = to continue.' },
      { q: 'Tama po ang halagang na-type ninyo. Ituloy na po natin.', en: 'The amount you typed is correct. Let us go on.', a: 'enter', why: 'Tama = correct; ituloy = go on: confirm with enter.' }
    ] },

  { id: 'elevator', title: 'Elevator', lv: 'A1',
    note: 'A hospital elevator. Floors are palapag (or floor); G is the ground floor. Ordinal numbers use ika-: ikalawa (second), ikatlo (third), ikaapat (fourth).',
    rows: [
      [ { id: 'g', label: 'G', en: 'ground floor', kind: 'btn' }, { id: 'f2', label: '2', en: 'second floor', kind: 'btn' },
        { id: 'f3', label: '3', en: 'third floor', kind: 'btn' }, { id: 'f4', label: '4', en: 'fourth floor', kind: 'btn' } ],
      [ { id: 'open', label: 'OPEN', en: 'open the door', kind: 'btn' }, { id: 'close', label: 'CLOSE', en: 'close the door', kind: 'btn' } ],
      [ { id: 'alarm', label: 'ALARM', en: 'call for help', kind: 'btn' }, { id: 'overload', label: 'OVERLOAD', en: 'too heavy light', kind: 'lamp' } ]
    ],
    tasks: [
      { q: 'Sa ikatlong palapag po tayo.', en: 'We are going to the third floor.', a: 'f3', why: 'Ikatlo = third; palapag = floor.' },
      { q: 'Sa ikaapat na palapag ang ward ni Nanay.', en: 'Mom\'s ward is on the fourth floor.', a: 'f4', why: 'Ikaapat = fourth.' },
      { q: 'Sa pinakababa na po tayo, palabas na kami ng ospital.', en: 'We are going all the way down, we are leaving the hospital.', a: 'g', why: 'Pinakababa = the lowest floor: G, the ground floor.' },
      { q: 'Pakihintay po! May hahabol pa.', en: 'Please wait! Someone else is coming.', a: 'open', why: 'Pakihintay = please wait; hahabol = will catch up: hold the door open.' },
      { q: 'Wala nang sasakay. Isara mo na ang pinto.', en: 'No one else is getting on. Close the door now.', a: 'close', why: 'Isara = close; sasakay = will get on.' },
      { q: 'Hindi na gumagalaw ang elevator at ayaw bumukas ng pinto. Humingi tayo ng tulong.', en: 'The elevator is not moving and the door will not open. Let us ask for help.', a: 'alarm', why: 'Humingi ng tulong = ask for help: the alarm.' }
    ] },

  { id: 'queue-kiosk', title: 'Queue number machine', lv: 'A2',
    note: 'A machine at the hospital entrance that prints a queue number for each service. The guard tells you which one to press; numero is the number and pila is the line.',
    rows: [
      [ { id: 'opd', label: 'OPD', en: 'outpatient consultation', kind: 'btn' }, { id: 'cashier', label: 'CASHIER', en: 'pay here', kind: 'btn' },
        { id: 'pharmacy', label: 'PHARMACY', en: 'medicines', kind: 'btn' } ],
      [ { id: 'lab', label: 'LABORATORY', en: 'blood and urine tests', kind: 'btn' }, { id: 'xray', label: 'X-RAY', en: 'x-ray', kind: 'btn' },
        { id: 'senior', label: 'SENIOR / PWD', en: 'priority line for older people and persons with disability', kind: 'btn' } ],
      [ { id: 'print', label: 'PRINT', en: 'print the number', kind: 'btn' }, { id: 'paper-lamp', label: 'NO PAPER', en: 'out of paper light', kind: 'lamp' } ]
    ],
    tasks: [
      { q: 'Magpapa-check-up po kayo? Pindutin ninyo yung para sa konsulta.', en: 'Are you here for a check-up? Press the one for consultations.', a: 'opd', why: 'Magpa-check-up = to have a check-up: the outpatient department.' },
      { q: 'Magbabayad muna tayo bago kunin ang resulta.', en: 'We have to pay first before getting the results.', a: 'cashier', why: 'Magbayad = to pay.' },
      { q: 'Kukunin po namin ang gamot na nireseta ng doktor.', en: 'We are going to get the medicine the doctor prescribed.', a: 'pharmacy', why: 'Gamot = medicine; nireseta = prescribed: the pharmacy (botika).' },
      { q: 'Kukunan daw po ng dugo si Nanay.', en: 'They said Mom will have blood taken.', a: 'lab', why: 'Kukunan ng dugo = blood will be taken: the laboratory.' },
      { q: 'Pinapa-X-ray po ng doktor ang dibdib ni Tatay.', en: 'The doctor asked for an x-ray of Dad\'s chest.', a: 'xray', why: 'Pinapa-X-ray = had an x-ray requested; dibdib = chest.' },
      { q: 'Senior citizen po si Lolo? Doon po kayo sa hiwalay na pila.', en: 'Is Grandpa a senior citizen? Please use the separate line.', a: 'senior', why: 'Hiwalay na pila = a separate line: the priority line.' }
    ] },

  { id: 'bed-call', title: 'Hospital bed and nurse call', lv: 'A2',
    note: 'The hand control of a ward bed. Ulunan is the head end of the bed and paanan the foot end; itaas is raise and ibaba is lower. Tumawag ng nars is to call the nurse.',
    rows: [
      [ { id: 'call', label: 'NURSE CALL', en: 'call the nurse', kind: 'btn' }, { id: 'cancel', label: 'CANCEL', en: 'cancel the call', kind: 'btn' },
        { id: 'light', label: 'LIGHT', en: 'reading light', kind: 'btn' }, { id: 'call-lamp', label: 'CALLING', en: 'call is on light', kind: 'lamp' } ],
      [ { id: 'head-up', label: 'HEAD UP', en: 'raise the head end', kind: 'btn' }, { id: 'head-down', label: 'HEAD DOWN', en: 'lower the head end', kind: 'btn' } ],
      [ { id: 'foot-up', label: 'FOOT UP', en: 'raise the foot end', kind: 'btn' }, { id: 'foot-down', label: 'FOOT DOWN', en: 'lower the foot end', kind: 'btn' } ]
    ],
    tasks: [
      { q: 'Nahihirapan po akong huminga kapag nakahiga. Pakitaas po ang ulunan.', en: 'I find it hard to breathe when lying down. Please raise the head of the bed.', a: 'head-up', why: 'Pakitaas = please raise; ulunan = the head end of the bed.' },
      { q: 'Pakibaba na po ang ulunan, gusto ko na pong humiga nang diretso at matulog.', en: 'Please lower the head of the bed now, I want to lie flat and sleep.', a: 'head-down', why: 'Pakibaba = please lower; humiga nang diretso = lie flat.' },
      { q: 'Namamaga po ang paa ko. Pakitaas po ang paanan.', en: 'My feet are swollen. Please raise the foot of the bed.', a: 'foot-up', why: 'Namamaga = swollen; paanan = the foot end of the bed.' },
      { q: 'Nangangalay na po ang binti ko. Pakibaba po ang paanan.', en: 'My legs are getting stiff and tired. Please lower the foot of the bed.', a: 'foot-down', why: 'Nangangalay = aching and stiff from staying in one position; ibaba = lower.' },
      { q: 'Kapag may kailangan po kayo o masama ang pakiramdam ninyo, pindutin lang po ito para tawagin kami.', en: 'If you need anything or you feel unwell, just press this to call us.', a: 'call', why: 'Pindutin = press; tawagin kami = call us: the nurse call.' },
      { q: 'Ang dilim po, hindi ko makita ang tsinelas ko.', en: 'It is dark, I cannot see my slippers.', a: 'light', why: 'Madilim = dark: turn on the light.' }
    ] }
];
