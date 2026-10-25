/* De-escalation process checklist.
   Structure follows a hospital nursing de-escalation checklist (behaviors observed → 12 steps → escalation),
   with Tagalog phrases added for each step. No patient or staff information is stored here.
   New phrases are appended to the "deescalation" section so they also appear in flashcards, search, and handouts. */
(function () {
  const sec = (window.PSYCH_SECTIONS || []).find((s) => s.id === 'deescalation');
  if (!sec) return;
  const idx = (en) => sec.phrases.findIndex((p) => p.en === en);
  const add = (p) => { let i = idx(p.en); if (i < 0) { sec.phrases.push(p); i = sec.phrases.length - 1; } return 'deescalation:' + i; };
  const use = (en) => 'deescalation:' + idx(en);

  window.PSYCH_DEESC = {
    behaviors: [
      { en: 'Restlessness', tl: 'Hindi mapakali', say: 'Hindi siya mapakali.' },
      { en: 'Irritability', tl: 'Mainit ang ulo, iritable', say: 'Mainit ang ulo niya.' },
      { en: 'Anger with loud voice', tl: 'Galit at sumisigaw', say: 'Galit siya at sumisigaw.' },
      { en: 'Pacing back and forth', tl: 'Palakad-lakad, pabalik-balik', say: 'Palakad-lakad siya, pabalik-balik.' },
      { en: 'Agitation', tl: 'Nagwawala, balisa at magulo ang kilos', say: 'Nagwawala siya.' },
      { en: 'Threatening', tl: 'Nagbabanta', say: 'Nagbabanta siyang manakit.' },
      { en: 'Demanding', tl: 'Mapilit, nagde-demand', say: 'Mapilit siya, gusto niyang masunod agad.' },
      { en: 'Hostility', tl: 'Palaban, galit sa lahat', say: 'Palaban siya sa lahat ng lumalapit.' },
      { en: 'Others (specify), e.g., lifting or throwing objects', tl: 'Nagbubuhat o nagbabato ng gamit', say: 'Binubuhat niya ang kama.' }
    ],
    steps: [
      { en: 'Respect the patient\'s and your personal space. Keep at least two arms\' length between you and the patient.',
        tip: 'Stand at an angle, not face to face. Keep the exit behind you and hands visible.',
        say: [add({ en: 'I\'ll stay here. I won\'t come closer.', f: 'Dito lang po ako. Hindi po ako lalapit.', c: 'Dito lang ako. Hindi ako lalapit.' })] },
      { en: 'Approach the patient in a non-threatening, calm manner. Do not provoke the patient.',
        tip: 'Soft, slow voice. No arguing, laughing, crowding, or sudden movements. One staff member speaks.',
        say: [use('I\'m here to help you.'), use('Let\'s calm down first.')] },
      { en: 'Introduce yourself. Provide orientation and reassurance.',
        tip: 'Use the patient\'s name. Say where they are and that they are safe.',
        say: [add({ en: 'I am Nurse/Doctor ___. You are in the hospital.', f: 'Ako po si Nurse/Dok ___. Nasa ospital po kayo.', c: 'Ako si Nurse/Dok ___. Nasa ospital ka.' }), use('You are safe here.'), use('No one will hurt you.')] },
      { en: 'Use clear, simple, and short statements.',
        tip: 'One instruction at a time. Repeat calmly if needed.',
        say: [add({ en: 'Please sit down.', f: 'Upo po muna kayo.', c: 'Upo ka muna.' }), add({ en: 'Please put the bed down.', f: 'Ibaba po muna ninyo ang kama.', c: 'Ibaba mo muna ang kama.' }), use('Breathe slowly with me.')] },
      { en: 'Allow the patient to express himself/herself.',
        tip: 'Let them talk. Short silences are fine.',
        say: [add({ en: 'What happened? Tell me.', f: 'Ano po ang nangyari? Sabihin po ninyo sa akin.', c: 'Ano ang nangyari? Sabihin mo sa akin.' }), use('Tell me what you need.')] },
      { en: 'Listen closely to what the patient is saying.',
        tip: 'Reflect back what you heard and name the feeling.',
        say: [add({ en: 'I understand. You\'re angry because ___, is that right?', f: 'Naiintindihan ko po. Galit po kayo dahil ___, tama po ba?', c: 'Naiintindihan ko. Galit ka dahil ___, tama ba?' }), use('I can see that you are very upset.')] },
      { en: 'Agree, or agree to disagree.',
        tip: 'Agree with the feeling or a true part of the complaint without arguing about beliefs.',
        say: [add({ en: 'You\'re right, being here is really hard.', f: 'Tama po kayo, mahirap po talaga ang nandito.', c: 'Tama ka, mahirap talaga ang nandito.' }), add({ en: 'We see it differently, but we can still talk.', f: 'Magkaiba po tayo ng tingin, pero puwede pa rin po tayong mag-usap.', c: 'Magkaiba tayo ng tingin, pero puwede pa rin tayong mag-usap.' })] },
      { en: 'Set clear limits. Tell the patient that aggressive behavior is not acceptable.',
        tip: 'Firm, calm, and respectful. State the limit and the reason, not a threat.',
        say: [add({ en: 'Hurting people or breaking things is not allowed here.', f: 'Hindi po puwede ang manakit o manira ng gamit dito.', c: 'Hindi puwede ang manakit o manira ng gamit dito.' }), add({ en: 'I want to help you, but not while you are hurting anyone.', f: 'Gusto ko po kayong tulungan, pero hindi po habang may nasasaktan.', c: 'Gusto kitang tulungan, pero hindi habang may nasasaktan.' })] },
      { en: 'Reassure the patient that you want to help them regain control and establish acceptable behavior.',
        tip: 'Frame it as working together.',
        say: [add({ en: 'I want to help you calm down and get back in control.', f: 'Gusto ko po kayong tulungan na kumalma at makontrol ang sarili ninyo.', c: 'Gusto kitang tulungan na kumalma at makontrol ang sarili mo.' })] },
      { en: 'Coach the patient on how to stay in control. Use gentle confrontation with instruction.',
        tip: 'Give a concrete next action and praise each step.',
        say: [add({ en: 'Slowly. You can do it.', f: 'Dahan-dahan lang po. Kaya po ninyo iyan.', c: 'Dahan-dahan lang. Kaya mo iyan.' }), add({ en: 'Take a deep breath: one, two, three.', f: 'Huminga po nang malalim: isa, dalawa, tatlo.', c: 'Huminga nang malalim: isa, dalawa, tatlo.' }), add({ en: 'Good. Thank you for putting it down.', f: 'Salamat po at ibinaba ninyo. Magaling po.', c: 'Salamat at ibinaba mo. Magaling.' })] },
      { en: 'Offer choices and optimism. Be assertive and quickly propose alternatives to violence.',
        tip: 'Two acceptable options, both fine for you.',
        say: [add({ en: 'Would you like to sit here or walk with me for a while?', f: 'Gusto po ba ninyong umupo dito, o maglakad muna kasama ko?', c: 'Gusto mo bang umupo dito, o maglakad muna kasama ko?' }), add({ en: 'Once we\'ve calmed down, we\'ll talk about what you want.', f: 'Pagkatapos po nating kumalma, pag-uusapan natin ang gusto ninyo.', c: 'Pagkatapos nating kumalma, pag-uusapan natin ang gusto mo.' }), use('Would you like some water?')] },
      { en: 'Broach the subject of medication. Explain how medication can help.',
        tip: 'Offer oral first; let the patient choose the route when possible.',
        say: [add({ en: 'There is medicine that can help you calm down and feel better.', f: 'May gamot po na makakatulong para kumalma at gumaan ang pakiramdam ninyo.', c: 'May gamot na makakatulong para kumalma ka at gumaan ang pakiramdam mo.' }), use('Would you prefer a tablet or an injection?')] }
    ],
    // What happens when verbal de-escalation is not enough. Wording is general; follow your hospital's policy.
    after: [
      { title: 'Escalate', who: 'NOD and POD',
        points: ['NAOD refers to the NOD for further intervention; the POD is notified and assesses the patient.', 'Keep using calm verbal de-escalation throughout.', 'Offer oral medication first; give the patient a choice of route where possible.'],
        say: [use('We will give you medicine to help you calm down.'), use('Would you prefer a tablet or an injection?')] },
      { title: 'Restraint or seclusion (last resort)', who: 'Physician order, trained team',
        points: ['Only to prevent imminent harm to the patient or others, after less restrictive measures fail (RA 11036: least restrictive care).', 'Requires a physician\'s order per hospital policy; use the minimum force and time needed.', 'Explain what is happening and why, even if the patient seems not to listen.', 'Remove belts, sharp objects, and anything that can be used to harm.'],
        say: [add({ en: 'This is only temporary, for your safety and others\'.', f: 'Pansamantala lang po ito, para sa kaligtasan ninyo at ng iba.', c: 'Pansamantala lang ito, para sa kaligtasan mo at ng iba.' }), add({ en: 'We are not punishing you.', f: 'Hindi po namin kayo pinaparusahan.', c: 'Hindi ka namin pinaparusahan.' }), add({ en: 'Once you are calm, we will remove it.', f: 'Kapag kalmado na po kayo, tatanggalin na namin ito.', c: 'Kapag kalmado ka na, tatanggalin na namin ito.' })] },
      { title: 'Monitoring', who: 'NOD, at the interval set by policy',
        points: ['Check breathing, circulation, skin, and vital signs at the interval your policy sets (often every 15 minutes).', 'Offer fluids, toileting, and position change; check for pain and tightness.', 'Reassess regularly whether restraint is still needed. Document each check.'],
        say: [add({ en: 'Is it too tight? Does anything hurt?', f: 'Masyado po bang masikip? May masakit po ba?', c: 'Masyado bang masikip? May masakit ba?' }), add({ en: 'Do you want to drink or use the toilet?', f: 'Gusto po ba ninyong uminom o umihi?', c: 'Gusto mo bang uminom o umihi?' }), add({ en: 'Can you breathe well?', f: 'Nakakahinga po ba kayo nang maayos?', c: 'Nakakahinga ka ba nang maayos?' })] },
      { title: 'Release', who: 'NOD with POD',
        points: ['Release as soon as the patient is calm and safe, often in steps.', 'Tell the patient what you are doing before each step.'],
        say: [add({ en: 'You are calmer now. We will remove it slowly.', f: 'Mas kalmado na po kayo. Dahan-dahan po naming tatanggalin ito.', c: 'Mas kalmado ka na. Dahan-dahan naming tatanggalin ito.' })] },
      { title: 'Debrief', who: 'Patient, staff, and family',
        points: ['Talk with the patient once calm: what happened, what helped, what to do next time.', 'Staff debrief: what worked, injuries, and lessons. Inform the family as appropriate.', 'Document the incident, interventions, times, and outcome.'],
        say: [add({ en: 'From your point of view, what happened earlier?', f: 'Sa tingin po ninyo, ano po ang nangyari kanina?', c: 'Sa tingin mo, ano ang nangyari kanina?' }), add({ en: 'What makes you get angry or upset?', f: 'Ano po ang nagpapainit ng ulo ninyo?', c: 'Ano ang nagpapainit ng ulo mo?' }), add({ en: 'What would help next time?', f: 'Ano po ang makakatulong sa susunod?', c: 'Ano ang makakatulong sa susunod?' }), add({ en: 'Are you hurt anywhere?', f: 'May nasaktan po ba sa inyo?', c: 'May nasaktan ba sa iyo?' })] }
    ],
    escalation: [
      ['NAOD', 'Nursing Attendant on Duty', 'Starts de-escalation. If it fails, refers to the NOD.'],
      ['NOD', 'Nurse on Duty', 'Takes over for further intervention.'],
      ['POD', 'Physician on Duty', 'Notify at all times, whether or not de-escalation succeeds.']
    ],
    outcomes: [['successful', 'Successful'], ['partial', 'Partly successful'], ['failed', 'Not successful: escalated']]
  };
})();
