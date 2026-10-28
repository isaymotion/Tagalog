/* Interview flow and MSE structure used by the handout generator (and available to other views).
   Phrases are referenced as "sectionId:index" into PSYCH_SECTIONS so wording lives in one place.
   key = the short list used for pocket cards and "key phrases only". */
window.PSYCH_FLOW = [
  { id: 'open', title: 'Opening and rapport', goal: 'Introduce yourself, agree on language, and set a respectful tone.',
    sections: ['opening'], key: ['opening:0', 'opening:1', 'opening:3', 'opening:4', 'opening:9'],
    tip: 'Start with po and kayo. Follow the patient\'s lead if they prefer ka/mo.' },
  { id: 'consent', title: 'Confidentiality and consent', goal: 'Explain privacy and its limits; ask permission to involve family.',
    sections: ['consent'], key: ['consent:0', 'consent:1', 'consent:2'] },
  { id: 'hpi', title: 'Chief complaint and history of present illness', goal: 'Open questions first, then onset, course, triggers, impact, and the patient\'s own explanation.',
    sections: ['cc-hpi'], key: ['cc-hpi:0', 'cc-hpi:2', 'cc-hpi:4', 'cc-hpi:5', 'cc-hpi:6', 'cc-hpi:9', 'cc-hpi:10', 'cc-hpi:13'],
    tip: 'Ask "Ano po ang ibig ninyong sabihin?" whenever the patient uses an idiom like "mabigat ang dibdib" or "nerbiyos".' },
  { id: 'mood', title: 'Mood: depressed mood and SIGECAPS', goal: 'Gate (depressed mood or anhedonia for two weeks), then SIGECAPS; one gate symptom plus five of nine. Screen for past elevated mood before any antidepressant.',
    sections: ['depression'], key: ['depression:1', 'depression:2', 'depression:5', 'depression:7', 'depression:8', 'depression:9', 'depression:10', 'depression:11', 'depression:12', 'depression:13', 'depression:18'],
    branch: 'Hopelessness, "ayoko na", or "pagod na ako" → go to suicide risk now.' },
  { id: 'mania', title: 'Mood: elevated, expansive or irritable mood and DIGFAST', goal: 'Gate (a distinct period of elevated, expansive, or irritable mood with increased energy), then DIGFAST; three of seven (four if only irritable), one week for mania, four days for hypomania.',
    sections: ['mania'], key: ['mania:0', 'mania:1', 'mania:3', 'mania:4', 'mania:5', 'mania:6', 'mania:7', 'mania:8', 'mania:9', 'mania:10'] },
  { id: 'anx', title: 'Anxiety, panic, and OCD', goal: 'Worry, panic attacks, avoidance, obsessions, and compulsions.',
    sections: ['anxiety'], key: ['anxiety:0', 'anxiety:2', 'anxiety:3', 'anxiety:5', 'anxiety:6'] },
  { id: 'trauma', title: 'Trauma', goal: 'Ask gently; details are optional. Check current safety.',
    sections: ['trauma'], key: ['trauma:0', 'trauma:1', 'trauma:2', 'trauma:6', 'trauma:7'] },
  { id: 'percept', title: 'Psychosis: perception', goal: 'Normalize, then ask each modality. Content, frequency, command type, and response.',
    sections: ['hallucinations'], key: ['hallucinations:0', 'hallucinations:1', 'hallucinations:2', 'hallucinations:3', 'hallucinations:4', 'hallucinations:10', 'hallucinations:11', 'hallucinations:13', 'hallucinations:14', 'hallucinations:22'],
    branch: 'Command hallucinations to harm → suicide and violence risk now.',
    tip: 'Spirit experiences (maligno, engkanto) may be culturally shared. Ask whether family members see or believe the same.' },
  { id: 'thought', title: 'Psychosis: thought content', goal: 'Persecution, reference, grandiosity, passivity phenomena; check conviction and actions taken.',
    sections: ['delusions'], key: ['delusions:0', 'delusions:1', 'delusions:3', 'delusions:5', 'delusions:6', 'delusions:7', 'delusions:10', 'delusions:13', 'delusions:17', 'delusions:19'] },
  { id: 'suicide', title: 'Suicide and self-harm risk', goal: 'Passive → active ideation → plan → means → preparation → intent → past attempts → protective factors.',
    sections: ['suicide'], key: ['suicide:0', 'suicide:1', 'suicide:3', 'suicide:5', 'suicide:7', 'suicide:8', 'suicide:9', 'suicide:11', 'suicide:12', 'suicide:15', 'suicide:18', 'suicide:19'],
    tip: 'Asking directly does not increase risk. Use the word "magpakamatay".' },
  { id: 'violence', title: 'Violence risk', goal: 'Thoughts of harming others, target, history, weapons.',
    sections: ['violence'], key: ['violence:0', 'violence:1', 'violence:2', 'violence:3'] },
  { id: 'subs', title: 'Alcohol, drugs, and gambling', goal: 'Type, amount, frequency, last use, withdrawal, consequences.',
    sections: ['substance'], key: ['substance:0', 'substance:1', 'substance:2', 'substance:4', 'substance:6', 'substance:7', 'substance:8', 'substance:11'],
    tip: 'Avoid "adik". Interview the patient alone for this part.' },
  { id: 'pmh', title: 'Past psychiatric and medical history', goal: 'Prior episodes, admissions, medicines and adherence, medical illness, allergies, pregnancy, folk remedies.',
    sections: ['history'], key: ['history:0', 'history:1', 'history:3', 'history:4', 'history:5', 'history:6', 'history:8', 'history:10'] },
  { id: 'fhx', title: 'Family history', goal: 'Use plain descriptions; families may hide labels.',
    sections: ['family-hx'], key: ['family-hx:0', 'family-hx:2', 'family-hx:3', 'family-hx:4'] },
  { id: 'social', title: 'Personal and social history', goal: 'Upbringing, school, work, relationships, living situation, finances, faith, supports.',
    sections: ['social'], key: ['social:0', 'social:2', 'social:3', 'social:4', 'social:5', 'social:6', 'social:7', 'social:9'] },
  { id: 'collat', title: 'Collateral history', goal: 'Changes noticed, function, safety. Check whether the informant saw it or heard it (daw/raw).',
    sections: ['collateral'], key: ['collateral:0', 'collateral:1', 'collateral:3', 'collateral:4', 'collateral:5', 'collateral:6', 'collateral:8', 'collateral:10'] },
  { id: 'mse', title: 'Mental status exam', goal: 'Observe throughout; then test cognition, abstraction, insight, and judgment. See the MSE table.',
    sections: ['mse-cog', 'mse-abstract'], key: ['mse-cog:0', 'mse-cog:3', 'mse-cog:7', 'mse-cog:10', 'mse-cog:11', 'mse-cog:12', 'mse-cog:14', 'mse-abstract:0', 'mse-abstract:2', 'mse-abstract:6', 'mse-abstract:7', 'mse-abstract:8'] },
  { id: 'plan', title: 'Explaining diagnosis and plan', goal: 'Plain words, no stigmatizing labels, teach-back to confirm understanding.',
    sections: ['explain'], key: ['explain:0', 'explain:1', 'explain:5', 'explain:6', 'explain:7', 'explain:8', 'explain:11'] },
  { id: 'close', title: 'Closing', goal: 'Summarize, invite questions, set the next step.',
    sections: ['closing'], key: ['closing:0', 'closing:1', 'closing:2', 'closing:3', 'closing:5'] }
];

/* Optional add-on sections (not part of the standard flow order). */
window.PSYCH_FLOW_EXTRA = [
  { id: 'sud', title: 'Substance use screening and brief intervention', goal: 'Betel nut, tobacco, alcohol, shabu, gambling: the DSM-5-TR criteria, severity, and a motivational interview.', sections: ['sud-screen', 'sud-betel', 'sud-other', 'sud-gambling', 'sud-screens', 'mi'], key: ['sud-screen:0', 'sud-screen:1', 'sud-screen:4', 'sud-screen:5', 'sud-screen:7', 'sud-screen:12', 'sud-screen:13', 'sud-betel:0', 'sud-betel:1', 'sud-betel:5', 'mi:0', 'mi:1', 'mi:9', 'mi:12', 'mi:19', 'mi:25'],
    tip: 'Normalize first ("tinatanong namin ito sa lahat"), see the patient alone, and never say "adik".' },
  { id: 'deesc', title: 'De-escalation', goal: 'Calm voice, simple words, offer choices.', sections: ['deescalation'], key: ['deescalation:0', 'deescalation:1', 'deescalation:2', 'deescalation:3', 'deescalation:5', 'deescalation:8', 'deescalation:10'] },
  { id: 'meds', title: 'Medication side effects and adherence', goal: 'Ask specifically; cost is a common barrier.', sections: ['meds'], key: ['meds:0', 'meds:2', 'meds:3', 'meds:4', 'meds:5', 'meds:6', 'meds:7', 'meds:12'] },
  { id: 'admit', title: 'Admission and discharge', goal: 'Why, how long, what to expect.', sections: ['admission'], key: ['admission:0', 'admission:1', 'admission:2', 'admission:6', 'admission:7'] },
  { id: 'child', title: 'Children and adolescents', goal: 'Simple words, ka/mo; see teens alone.', sections: ['child'], key: ['child:0', 'child:1', 'child:4', 'child:6', 'child:7', 'child:9'] },
  { id: 'elder', title: 'Elderly patients, dementia, and delirium', goal: 'Slow speech, baseline function, acute vs gradual change.', sections: ['elderly'], key: ['elderly:0', 'elderly:1', 'elderly:2', 'elderly:5', 'elderly:6', 'elderly:7', 'elderly:9'] }
];

/* MSE structure: what to assess, Tagalog prompts (refs), and observation vocabulary (refs into mse-describe). */
window.PSYCH_MSE = [
  { domain: 'Appearance', assess: 'Grooming, hygiene, dress, apparent age, distinguishing features', ask: [], terms: ['mse-describe:0', 'mse-describe:1'] },
  { domain: 'Behavior', assess: 'Eye contact, cooperation, psychomotor activity, abnormal movements', ask: [], terms: ['mse-describe:2', 'mse-describe:3', 'mse-describe:4', 'mse-describe:12', 'mse-describe:13'], note: 'Avoiding eye contact can be cultural deference to a doctor.' },
  { domain: 'Speech', assess: 'Rate, volume, amount, fluency, language used (Tagalog, Taglish, regional)', ask: [], terms: ['mse-describe:5', 'mse-describe:6'] },
  { domain: 'Mood', assess: 'Patient\'s own words, quoted in Tagalog with translation', ask: ['opening:9', 'depression:0', 'depression:4'], terms: ['mse-describe:16', 'mse-describe:17'] },
  { domain: 'Affect', assess: 'Range, intensity, stability, congruence with mood', ask: [], terms: ['mse-describe:7', 'mse-describe:8'] },
  { domain: 'Thought process', assess: 'Goal-directed, circumstantial, tangential, loose, flight of ideas', ask: ['cc-hpi:12'], terms: ['mse-describe:9', 'mse-describe:10'] },
  { domain: 'Thought content', assess: 'Delusions, obsessions, preoccupations, suicidal and homicidal ideation', ask: ['delusions:0', 'delusions:6', 'suicide:3', 'violence:0'], terms: [] },
  { domain: 'Perception', assess: 'Hallucinations by modality, illusions, depersonalization', ask: ['hallucinations:1', 'hallucinations:2', 'hallucinations:4'], terms: ['mse-describe:11'] },
  { domain: 'Orientation', assess: 'Person, place, time', ask: ['mse-cog:3', 'mse-cog:5', 'mse-cog:7'], terms: ['mse-describe:14'] },
  { domain: 'Attention', assess: 'Serial 7s, days of the week backwards, digit span', ask: ['mse-cog:11', 'mse-cog:12', 'mse-cog:13'], terms: [] },
  { domain: 'Memory', assess: 'Registration, recall at 5 minutes, recent and remote memory', ask: ['mse-cog:10', 'mse-cog:14', 'mse-cog:15'], terms: [] },
  { domain: 'Abstraction', assess: 'Similarities and Filipino proverbs (salawikain); note schooling', ask: ['mse-abstract:0', 'mse-abstract:2'], terms: [] },
  { domain: 'Insight', assess: 'Awareness of illness and need for treatment', ask: ['mse-abstract:7', 'mse-abstract:8', 'mse-abstract:9'], terms: ['mse-describe:15'] },
  { domain: 'Judgment', assess: 'Hypothetical scenarios and recent real decisions', ask: ['mse-abstract:5', 'mse-abstract:6', 'mse-abstract:10'], terms: [] }
];
