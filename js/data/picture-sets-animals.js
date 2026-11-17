/* Picture words, group 'animals' (Usap Tayo 3.10.0): tap-to-learn pictures for #/pictures (js/pictures.js).
   DRAFT FOR REVIEW by Dr. Navarro (native speaker).
   Shape (PLAN-3.10 A1): window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([ { id, group, title, lv: 'A1'|'A2',
     kind: 'diagram'|'cards', art (diagram only, pictures/art-animals.js, unchanged), intro: one English sentence,
     parts: [ { id, w: the word as said (lower case, 1 to 3 words), en, lv: 'A1'|'A2'|'B1', alt: [other accepted answers],
                diagram: x, y exactly as in the Japanese source (same ids, same order); cards: pic = ONE emoji, Emoji 12.0 or older } ],
     say: [ { tl: a sentence whose answer is exactly ONE part, en, p: part id } ] } ]);   6 to 10 say lines per set
   Sets: pets-farm c A1; zoo c A2; birds-insects-sea c A2; animal-parts d A2.
   Set ids and part ids are permanent after release: append only. */
window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([
  { id: 'pets-farm', group: 'animals', title: 'Pets and farm animals', lv: 'A1', kind: 'cards',
    intro: 'Animals people keep at home and in the province, from the dog in the yard to the carabao in the rice field.',
    parts: [
      { id: 'aso', w: 'aso', en: 'dog', lv: 'A1', pic: '🐕' },
      { id: 'pusa', w: 'pusa', en: 'cat', lv: 'A1', pic: '🐈' },
      { id: 'manok', w: 'manok', en: 'chicken, rooster', lv: 'A1', pic: '🐓' },
      { id: 'sisiw', w: 'sisiw', en: 'chick', lv: 'A2', pic: '🐤' },
      { id: 'baboy', w: 'baboy', en: 'pig', lv: 'A1', pic: '🐖' },
      { id: 'baka', w: 'baka', en: 'cow', lv: 'A1', pic: '🐄' },
      { id: 'kalabaw', w: 'kalabaw', en: 'carabao, water buffalo', lv: 'A1', pic: '🐃' },
      { id: 'kambing', w: 'kambing', en: 'goat', lv: 'A1', pic: '🐐' },
      { id: 'kabayo', w: 'kabayo', en: 'horse', lv: 'A1', pic: '🐎' },
      { id: 'bibe', w: 'bibe', en: 'duck', lv: 'A2', pic: '🦆', alt: ['pato'] },
      { id: 'daga', w: 'daga', en: 'rat, mouse', lv: 'A1', pic: '🐁' },
      { id: 'kuneho', w: 'kuneho', en: 'rabbit', lv: 'A2', pic: '🐇', alt: ['rabbit'] },
      { id: 'tupa', w: 'tupa', en: 'sheep', lv: 'A2', pic: '🐑' }
    ],
    say: [
      { tl: 'Kailan po kayo nakagat ng aso?', en: 'When did the dog bite you?', p: 'aso' },
      { tl: 'Kinalmot po ako ng pusa sa kamay.', en: 'The cat scratched my hand.', p: 'pusa' },
      { tl: 'Nakagat po ako ng daga kagabi habang natutulog.', en: 'A rat bit me last night while I was asleep.', p: 'daga' },
      { tl: 'Tumitilaok ito tuwing madaling-araw.', en: 'It crows every day before dawn.', p: 'manok' },
      { tl: 'Ito ang katulong ng magsasaka sa pag-aararo ng palayan.', en: 'It helps the farmer plough the rice field.', p: 'kalabaw' },
      { tl: 'Ito ang hayop na nililitson kapag may handaan.', en: 'This is the animal roasted whole (lechon) at a feast.', p: 'baboy' },
      { tl: 'Dito galing ang karaniwang gatas na nabibili sa tindahan.', en: 'The usual milk sold in stores comes from this animal.', p: 'baka' },
      { tl: 'Mahahaba ang tainga nito at mahilig ito sa karot.', en: 'It has long ears and loves carrots.', p: 'kuneho' },
      { tl: 'Sinasakyan ito at mabilis itong tumakbo.', en: 'People ride it, and it runs fast.', p: 'kabayo' },
      { tl: 'Kambing po ang inaalagaan ng lolo ko sa probinsya.', en: 'My grandfather raises goats in the province.', p: 'kambing' }
    ] },

  { id: 'zoo', group: 'animals', title: 'At the zoo', lv: 'A2', kind: 'cards',
    intro: 'Wild animals you see at a zoo; many of their names come from Spanish or English.',
    parts: [
      { id: 'elepante', w: 'elepante', en: 'elephant', lv: 'A1', pic: '🐘' },
      { id: 'leon', w: 'leon', en: 'lion', lv: 'A1', pic: '🦁' },
      { id: 'tigre', w: 'tigre', en: 'tiger', lv: 'A1', pic: '🐅' },
      { id: 'giraffe', w: 'giraffe', en: 'giraffe', lv: 'A2', pic: '🦒', alt: ['dyirap'] },
      { id: 'panda', w: 'panda', en: 'panda', lv: 'A2', pic: '🐼' },
      { id: 'unggoy', w: 'unggoy', en: 'monkey', lv: 'A1', pic: '🐒', alt: ['matsing', 'tsonggo'] },
      { id: 'gorilya', w: 'gorilya', en: 'gorilla', lv: 'A2', pic: '🦍', alt: ['gorilla'] },
      { id: 'oso', w: 'oso', en: 'bear', lv: 'A2', pic: '🐻', alt: ['bear'] },
      { id: 'zebra', w: 'zebra', en: 'zebra', lv: 'A2', pic: '🦓' },
      { id: 'hippo', w: 'hippo', en: 'hippopotamus', lv: 'B1', pic: '🦛', alt: ['hipopotamus'] },
      { id: 'buwaya', w: 'buwaya', en: 'crocodile', lv: 'A2', pic: '🐊', alt: ['crocodile'] },
      { id: 'ahas', w: 'ahas', en: 'snake', lv: 'A1', pic: '🐍' },
      { id: 'koala', w: 'koala', en: 'koala', lv: 'B1', pic: '🐨' },
      { id: 'kangaroo', w: 'kangaroo', en: 'kangaroo', lv: 'A2', pic: '🦘' }
    ],
    say: [
      { tl: 'Napakalaki nito, at napakahaba ng nguso nito.', en: 'It is huge, and its trunk is very long.', p: 'elepante' },
      { tl: 'Ito ang may pinakamahabang leeg sa lahat ng hayop.', en: 'It has the longest neck of all animals.', p: 'giraffe' },
      { tl: 'Itim at puti ito at kumakain ng kawayan.', en: 'It is black and white and eats bamboo.', p: 'panda' },
      { tl: 'Para itong kabayo na may guhit-guhit na itim at puti.', en: 'It is like a horse with black and white stripes.', p: 'zebra' },
      { tl: 'Tinatawag itong hari ng kagubatan.', en: 'It is called the king of the jungle.', p: 'leon' },
      { tl: 'Mahilig ito sa saging at magaling umakyat sa puno.', en: 'It loves bananas and is good at climbing trees.', p: 'unggoy' },
      { tl: 'Nakagat po ng ahas ang tatay ko sa bukid.', en: 'A snake bit my father in the field.', p: 'ahas' },
      { tl: 'Tumatalon-talon ito gamit ang mahahaba nitong paa sa likod.', en: 'It hops along on its long back legs.', p: 'kangaroo' },
      { tl: 'Nakatira ito sa ilog at mukha itong napakalaking butiki.', en: 'It lives in rivers and looks like a huge lizard.', p: 'buwaya' },
      { tl: 'Malaki at mabalahibo ito, at mahilig sa pulot.', en: 'It is big and furry and loves honey.', p: 'oso' }
    ] },

  { id: 'birds-insects-sea', group: 'animals', title: 'Birds, insects and sea life', lv: 'A2', kind: 'cards',
    intro: 'Birds, insects and sea animals, including a few that bite or sting and a few you eat.',
    parts: [
      { id: 'ibon', w: 'ibon', en: 'bird', lv: 'A1', pic: '🐦' },
      { id: 'agila', w: 'agila', en: 'eagle', lv: 'A2', pic: '🦅' },
      { id: 'kuwago', w: 'kuwago', en: 'owl', lv: 'B1', pic: '🦉', alt: ['kwago'] },
      { id: 'paruparo', w: 'paruparo', en: 'butterfly', lv: 'A2', pic: '🦋', alt: ['paru-paro'] },
      { id: 'bubuyog', w: 'bubuyog', en: 'bee', lv: 'A2', pic: '🐝', alt: ['bee'] },
      { id: 'langgam', w: 'langgam', en: 'ant', lv: 'A1', pic: '🐜' },
      { id: 'lamok', w: 'lamok', en: 'mosquito', lv: 'A1', pic: '🦟' },
      { id: 'gagamba', w: 'gagamba', en: 'spider', lv: 'A2', pic: '🕷️' },
      { id: 'isda', w: 'isda', en: 'fish', lv: 'A1', pic: '🐟' },
      { id: 'lumba-lumba', w: 'lumba-lumba', en: 'dolphin', lv: 'B1', pic: '🐬', alt: ['dolphin'] },
      { id: 'pating', w: 'pating', en: 'shark', lv: 'A2', pic: '🦈' },
      { id: 'pugita', w: 'pugita', en: 'octopus', lv: 'B1', pic: '🐙', alt: ['octopus'] },
      { id: 'pusit', w: 'pusit', en: 'squid', lv: 'A2', pic: '🦑' },
      { id: 'alimango', w: 'alimango', en: 'crab', lv: 'A2', pic: '🦀', alt: ['alimasag', 'crab'] },
      { id: 'hipon', w: 'hipon', en: 'shrimp', lv: 'A1', pic: '🦐' },
      { id: 'pagong', w: 'pagong', en: 'turtle', lv: 'A2', pic: '🐢', alt: ['pawikan'] }
    ],
    say: [
      { tl: 'Ito ang nagdadala ng dengue, kaya takpan po natin ang mga timba ng tubig.', en: 'This carries dengue, so let us cover the water buckets.', p: 'lamok' },
      { tl: 'Kinagat po ako ng bubuyog at namaga ang braso ko.', en: 'A bee stung me and my arm swelled up.', p: 'bubuyog' },
      { tl: 'Nangangati at namamantal po ako tuwing kumakain ng hipon.', en: 'I get itchy and break out in hives every time I eat shrimp.', p: 'hipon' },
      { tl: 'Maliit at itim ito, at pinupuntahan nito ang matatamis.', en: 'It is small and black, and it goes after sweet things.', p: 'langgam' },
      { tl: 'Gumagawa ito ng sapot sa sulok ng kisame.', en: 'It makes a web in the corner of the ceiling.', p: 'gagamba' },
      { tl: 'Gising ito sa gabi at tulog sa araw.', en: 'It is awake at night and asleep during the day.', p: 'kuwago' },
      { tl: 'Mas mabuti po sa kalusugan ang kumain ng isda kaysa karne.', en: 'Eating fish rather than meat is better for your health.', p: 'isda' },
      { tl: 'Walo ang galamay nito.', en: 'It has eight arms.', p: 'pugita' },
      { tl: 'Patagilid itong maglakad.', en: 'It walks sideways.', p: 'alimango' },
      { tl: 'Ito ang pambansang ibon ng Pilipinas.', en: 'This is the national bird of the Philippines.', p: 'agila' }
    ] },

  { id: 'animal-parts', group: 'animals', title: 'Parts of animals', lv: 'A2', kind: 'diagram', art: 'animal-parts',
    intro: 'The body parts of a dog and a bird; many are the same words used for people.',
    parts: [
      { id: 'atama', w: 'ulo', en: 'head', lv: 'A1', x: 205, y: 93 },
      { id: 'mimi', w: 'tainga', en: 'ear', lv: 'A1', x: 176, y: 131, alt: ['tenga'] },
      { id: 'me', w: 'mata', en: 'eye', lv: 'A1', x: 229, y: 111 },
      { id: 'hana', w: 'ilong', en: 'nose', lv: 'A1', x: 273, y: 114, alt: ['nguso'] },
      { id: 'kuchi', w: 'bibig', en: 'mouth', lv: 'A1', x: 243, y: 151 },
      { id: 'kubi', w: 'leeg', en: 'neck', lv: 'A1', x: 187, y: 167 },
      { id: 'senaka', w: 'likod', en: 'back', lv: 'A1', x: 115, y: 142 },
      { id: 'ke', w: 'balahibo', en: 'fur, hair', lv: 'A2', x: 97, y: 185 },
      { id: 'shippo', w: 'buntot', en: 'tail', lv: 'A1', x: 20, y: 116 },
      { id: 'ashi', w: 'paa', en: 'leg, paw', lv: 'A1', x: 164, y: 246, alt: ['binti'] },
      { id: 'kuchibashi', w: 'tuka', en: 'beak', lv: 'A2', x: 391, y: 83 },
      { id: 'hane', w: 'pakpak', en: 'wing', lv: 'A2', x: 331, y: 165 },
      { id: 'tsume', w: 'kuko', en: 'claw', lv: 'A2', x: 320, y: 262 }
    ],
    say: [
      { tl: 'Ikinakawag ito ng aso kapag masaya siya.', en: 'A dog wags this when it is happy.', p: 'shippo' },
      { tl: 'Ginagamit ito ng aso sa pag-amoy.', en: 'A dog uses this to smell.', p: 'hana' },
      { tl: 'Mahaba at nakalaylay ang tainga ng asong ito.', en: 'This dog has long, floppy ears.', p: 'mimi' },
      { tl: 'Ito ang ginagamit ng aso para makakita.', en: 'A dog uses these to see.', p: 'me' },
      { tl: 'Sinusuklay ko ito araw-araw para hindi magbuhol-buhol.', en: 'I brush it every day so it does not get tangled.', p: 'ke' },
      { tl: 'Apat ito sa aso, at ginagamit niya ang mga ito sa pagtakbo.', en: 'A dog has four of these and runs on them.', p: 'ashi' },
      { tl: 'Ibinubuka ito ng aso kapag tumatahol o kumakain.', en: 'A dog opens this when it barks or eats.', p: 'kuchi' },
      { tl: 'Ito ang ginagamit ng ibon sa pagkain ng buto at insekto.', en: 'A bird eats seeds and insects with this.', p: 'kuchibashi' },
      { tl: 'Ikinakampay ito ng ibon para makalipad.', en: 'A bird flaps these to fly.', p: 'hane' },
      { tl: 'Matatalas ang mga ito, at dito kumakapit ang ibon sa sanga.', en: 'They are sharp, and the bird grips the branch with them.', p: 'tsume' }
    ] }
]);
