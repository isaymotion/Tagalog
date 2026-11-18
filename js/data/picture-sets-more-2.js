/* Picture words added in Usap Tayo 3.18.0 (part 2): Kitchen tools and tableware; A bed on the ward. Port of Hanashimasho 0.27.0; drawings in pictures/art-more-2.js.
   DRAFT FOR REVIEW by Dr. Navarro (native speaker). All Tagalog here is a draft.
   Shape: the header of picture-sets-home.js. Set ids and part ids are permanent: append only. */
window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([
  { id: 'kitchen-tools', group: 'home', title: 'Kitchen tools and tableware', lv: 'A2', kind: 'diagram', art: 'kitchen-tools',
    intro: 'The small things you cook, eat and wash up with, on the wall, the shelf and the counter.',
    parts: [
      { id: 'epuron', w: 'apron', en: 'apron', lv: 'A2', x: 60, y: 84, alt: ['tapis'] },
      { id: 'otama', w: 'sandok', en: 'ladle', lv: 'A2', x: 165, y: 66, alt: ['ladle'] },
      { id: 'kappu', w: 'tasa', en: 'mug, cup', lv: 'A1', x: 236, y: 98, alt: ['mug'] },
      { id: 'bin', w: 'garapon', en: 'jar', lv: 'A2', x: 310, y: 92, alt: ['jar'] },
      { id: 'yakan', w: 'takure', en: 'kettle', lv: 'A2', x: 66, y: 174, alt: ['kettle'] },
      { id: 'bouru', w: 'malaking mangkok', en: 'big bowl, mixing bowl', lv: 'A2', x: 162, y: 182, alt: ['mangkok', 'bowl'] },
      { id: 'chawan', w: 'mangkok ng kanin', en: 'rice bowl', lv: 'A1', x: 262, y: 188 },
      { id: 'bentoubako', w: 'baunan', en: 'lunch box', lv: 'A2', x: 312, y: 186, alt: ['lunch box', 'lalagyan ng baon'] },
      { id: 'manaita', w: 'sangkalan', en: 'chopping board', lv: 'A2', x: 108, y: 238, alt: ['chopping board'] },
      { id: 'hashi', w: 'chopsticks', en: 'chopsticks', lv: 'A2', x: 157, y: 252 },
      { id: 'supuun', w: 'kutsara', en: 'spoon', lv: 'A1', x: 190, y: 252 },
      { id: 'shamoji', w: 'sandok ng kanin', en: 'rice paddle', lv: 'B1', x: 223, y: 252, alt: ['rice paddle'] },
      { id: 'furaigaeshi', w: 'siyanse', en: 'turner, spatula', lv: 'B1', x: 264, y: 252, alt: ['sianse', 'spatula'] },
      { id: 'suponji', w: 'espongha', en: 'sponge', lv: 'A2', x: 360, y: 238, alt: ['sponge'] }
    ],
    say: [
      { tl: 'Hugasan mong mabuti ang sangkalan pagkatapos maghiwa ng karne.', en: 'Wash the chopping board well after cutting meat.', p: 'manaita' },
      { tl: 'Magpapakulo ako ng tubig sa takure para sa kape.', en: 'I will boil water in the kettle for coffee.', p: 'yakan' },
      { tl: 'Lagyan po natin ng pangalan ang tasa ninyo para hindi magamit ng iba.', en: 'Let us put your name on your mug so no one else uses it.', p: 'kappu' },
      { tl: 'Kapag nahihirapan po kayong lumunok, kumain po kayo nang dahan-dahan gamit ang maliit na kutsara.', en: 'When swallowing is hard, eat slowly with a small spoon.', p: 'supuun' },
      { tl: 'Gusto pa po ba ninyo ng isa pang mangkok ng kanin?', en: 'Would you like another bowl of rice?', p: 'chawan' },
      { tl: 'Lagyan mo rin ng gulay ang baunan mo, mabuti iyon sa katawan.', en: 'Put some vegetables in your lunch box too; that is good for your body.', p: 'bentoubako' },
      { tl: 'Ikuha mo ng sabaw si Lolo gamit ang sandok.', en: 'Get some soup for Grandpa with the ladle.', p: 'otama' },
      { tl: 'Lagyan mo ng sabon ang espongha bago maghugas ng plato.', en: 'Put soap on the sponge before you wash the plates.', p: 'suponji' },
      { tl: 'Baligtarin mo ang itlog gamit ang siyanse para hindi masunog.', en: 'Turn the egg over with the turner so it does not burn.', p: 'furaigaeshi' },
      { tl: 'Basain mo muna ang sandok ng kanin para hindi dumikit dito ang kanin.', en: 'Wet the rice paddle first so the rice does not stick to it.', p: 'shamoji' }
    ] },

  { id: 'ward-room', group: 'town', title: 'A bed on the ward', lv: 'A2', kind: 'diagram', art: 'ward-room',
    intro: 'A patient\'s bed space on a hospital ward, and the gentle things nurses say about it.',
    parts: [
      { id: 'kaaten', w: 'kurtina', en: 'curtain', lv: 'A1', x: 35, y: 150 },
      { id: 'mado', w: 'bintana', en: 'window', lv: 'A1', x: 135, y: 64 },
      { id: 'denki', w: 'ilaw', en: 'light', lv: 'A1', x: 235, y: 42 },
      { id: 'nafuda', w: 'bed tag', en: 'name card at the bed', lv: 'A2', x: 149, y: 121, alt: ['name tag', 'name card', 'bed card'] },
      { id: 'makura', w: 'unan', en: 'pillow', lv: 'A1', x: 110, y: 160 },
      { id: 'naasukooru', w: 'call button', en: 'nurse call button', lv: 'A2', x: 180, y: 158, alt: ['buzzer', 'nurse call', 'call bell'] },
      { id: 'shiitsu', w: 'bedsheet', en: 'bed sheet', lv: 'A2', x: 136, y: 190, alt: ['bed sheet', 'kobre-kama', 'kubrekama', 'sapin', 'sapin ng kama'] },
      { id: 'moufu', w: 'kumot', en: 'blanket', lv: 'A1', x: 234, y: 186 },
      { id: 'beddo', w: 'kama', en: 'bed', lv: 'A1', x: 200, y: 214, alt: ['higaan'] },
      { id: 'teeburu', w: 'mesa', en: 'table (over-bed table)', lv: 'A1', x: 236, y: 138, alt: ['lamesa', 'over-bed table'] },
      { id: 'terebi', w: 'TV', en: 'television', lv: 'A1', x: 343, y: 143, alt: ['telebisyon'] },
      { id: 'hikidashi', w: 'drawer', en: 'drawer', lv: 'A2', x: 343, y: 185 },
      { id: 'rokkaa', w: 'locker', en: 'locker', lv: 'A2', x: 394, y: 130, alt: ['aparador'] },
      { id: 'surippa', w: 'tsinelas', en: 'slippers', lv: 'A1', x: 116, y: 284, alt: ['slippers'] }
    ],
    say: [
      { tl: 'Nandito po ang call button. Pindutin lang po ninyo kung may kailangan kayo.', en: 'Here is the call button. Just press it if you need anything.', p: 'naasukooru' },
      { tl: 'Hihilahin ko po ang kurtina para may privacy kayo habang nagbibihis.', en: 'I will draw the curtain so you have privacy while you change.', p: 'kaaten' },
      { tl: 'Lalagyan ko po ng unan ang likod ninyo para komportable kayo sa pag-upo.', en: 'I will put a pillow behind your back so you can sit comfortably.', p: 'makura' },
      { tl: 'Itataas ko po ang kumot hanggang balikat ninyo.', en: 'I will pull the blanket up to your shoulders.', p: 'moufu' },
      { tl: 'Papalitan ko po ng malinis ang bedsheet ninyo.', en: 'I will change your sheet for a clean one.', p: 'shiitsu' },
      { tl: 'Ibababa ko po nang kaunti ang mesa para maabot ninyo ang pagkain.', en: 'I will lower the table a little so you can reach your food.', p: 'teeburu' },
      { tl: 'Mas mabuti po ang tsinelas na hindi madulas at hindi madaling matanggal sa paa, para hindi po kayo matumba.', en: 'Slippers that do not slip and do not come off easily are better, so that you do not fall.', p: 'surippa' },
      { tl: 'Tama po ba ang pangalan ninyo sa bed tag?', en: 'Is your name on the bed tag correct?', p: 'nafuda' },
      { tl: 'Dahan-dahan lang po sa pagbangon mula sa kama, baka po mahilo kayo.', en: 'Please get up from the bed slowly, in case you feel dizzy.', p: 'beddo' },
      { tl: 'Pakihinaan lang po ang TV, nagpapahinga po kasi ang katabi ninyo.', en: 'Please turn the TV down a little; the person next to you is resting.', p: 'terebi' }
    ] }
]);
