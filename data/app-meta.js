/* App identity. version must match the newest entry in data/changelog.js and VERSION in sw.js. */
window.APP_META = {
  name: 'Usap Tayo',
  short: 'Usap Tayo',
  tagline: 'Tagalog for the psychiatric interview',
  version: '3.1.0',
  repo: 'Tagalog',
  updated: 'November 2026',
  author: 'Isabella Navarro, MD',
  email: 'isaymotion@gmail.com',
  // Institution whose nursing de-escalation checklist and discharge form the app follows (shown on handouts).
  institution: { name: 'Mariveles Mental Wellness and General Hospital', address: 'P. Monroe Street Poblacion, Mariveles, Bataan, Philippines 2105', short: 'MMWGH', deescForm: 'MMH-NUR-04-112-01', dischargeForm: 'MMH-MED-04-04-02' },
  attribution: 'App created by Isabella Navarro, MD. Latest version November 2026. isaymotion@gmail.com'
};

/* Show the "Other apps" group in the menu? Off for now: the apps are not interlinked yet.
   The list below is kept in step with the other apps so it can be switched on later. */
window.SHOW_OTHER_APPS = false;

window.APP_LINKS = [
  { name: 'MSE Trainer', href: 'https://isaymotion.github.io/MSEtrainer/' },
  { name: 'Usap Tayo (Tagalog)', href: 'https://isaymotion.github.io/Tagalog/' },
  { name: 'DSM-5-TR Study Companion', href: 'https://isaymotion.github.io/DSMVapp/' },
  { name: 'Stahl Study Companion', href: 'https://isaymotion.github.io/Stahl/' },
  { name: 'Kaplan Study', href: 'https://isaymotion.github.io/KaplanStudy/' },
  { name: 'Shea Trainer', href: 'https://isaymotion.github.io/sheatrainer/' }
];

/* Storage keys are unchanged from 2.x ('usaptayo.v1' holds all progress), so no MIGRATE_KEYS is needed. */
