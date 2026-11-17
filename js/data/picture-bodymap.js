/* Body map (Usap Tayo 3.10.0): #/pictures/bodymap (js/picture-print.js): the patient taps where it hurts; printable
   one-page handout with a plain 0 to 10 line. Nothing is stored.
   DRAFT FOR REVIEW by Dr. Navarro (native speaker) before use.
   Shape (PLAN-3.10 A4): window.PICTURE_BODYMAP = { sets: ['body-front', 'body-back'] (picture set ids),
     ask: [ { tl, en } ] exactly 8 = questions a clinician asks, with po,
     words: [ { tl, en } ] exactly 10 = pain and sensation words the patient can point to,
     scale: { tl, en } = our own caption for the plain 0 to 10 line }.
   No faces scale and no published scale wording. Append only after release. */
window.PICTURE_BODYMAP = {
  sets: ['body-front', 'body-back'],
  ask: [
    { tl: 'Saan po masakit? Pakituro po.', en: 'Where does it hurt? Please point to it.' },
    { tl: 'Saan po ang pinakamasakit?', en: 'Where does it hurt the most?' },
    { tl: 'Kailan pa po ito sumasakit?', en: 'Since when has it been hurting?' },
    { tl: 'Tuloy-tuloy po ba ang sakit, o nawawala at bumabalik?', en: 'Is the pain there all the time, or does it come and go?' },
    { tl: 'Kumakalat po ba ang sakit sa ibang parte ng katawan?', en: 'Does the pain spread to other parts of the body?' },
    { tl: 'Ano po ang nagpapalala sa sakit, at ano ang nagpapagaan nito?', en: 'What makes the pain worse, and what makes it better?' },
    { tl: 'Kung zero ang walang sakit at ten ang pinakamatindi, ilan po ang sakit ninyo ngayon?', en: 'If zero is no pain and ten is the worst, what number is your pain now?' },
    { tl: 'May iba pa po ba kayong nararamdaman sa katawan?', en: 'Is there anything else you are feeling in your body?' }
  ],
  words: [
    { tl: 'makirot', en: 'sharp and sore (as of a wound or a sore tooth)' },
    { tl: 'mahapdi', en: 'stinging, smarting (as on a cut, a burn or sore eyes; also a burning stomach)' },
    { tl: 'parang tinutusok', en: 'pricking, as if poked with something sharp' },
    { tl: 'pumipintig', en: 'throbbing, pulsing (beats like a heartbeat)' },
    { tl: 'namamanhid', en: 'numb, no feeling' },
    { tl: 'parang kinukuryente', en: 'shooting, like an electric shock' },
    { tl: 'nangangalay', en: 'tired, stiff and aching from strain or from staying in one position' },
    { tl: 'mabigat', en: 'heavy (as in a heavy head or chest)' },
    { tl: 'masikip', en: 'tight, squeezed (as in a tight chest)' },
    { tl: 'makati', en: 'itchy' }
  ],
  scale: { tl: 'Gaano po kasakit? Ituro po ang numero. Zero: walang sakit. Ten: pinakamatinding sakit.',
           en: 'How much does it hurt? Point to the number. 0: no pain. 10: the worst pain.' }
};
