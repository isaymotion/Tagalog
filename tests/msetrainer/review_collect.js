// Collects the new Tagalog lines from both repos as JSON rows for the review workbook.
const fs=require('fs'),vm=require('vm'),path=require('path');
const [mse,ut]=process.argv.slice(2);
const rows={mse:[],ut:[]};
{ const c={console};vm.createContext(c);['js/data.js','js/data-tl.js'].forEach(f=>vm.runInContext(fs.readFileSync(path.join(mse,f),'utf8'),c));
  const {V,TERMS}=vm.runInContext('({V,TERMS})',c);
  V.filter(v=>v.lang==='tl').forEach(v=>{
    v.x.split('\n').forEach(l=>{ if(/^[CP]:/.test(l)&&l.includes(' || ')){const [tl,en]=l.slice(2).trim().split(' || ');rows.mse.push([v.id,TERMS[v.t].n,l[0]==='C'?'Clinician':'Patient',tl,en]);} });
    if(v.ask){const [tl,en]=v.ask.split(' || ');rows.mse.push([v.id,TERMS[v.t].n,'Ask it in Tagalog',tl,en]);}
  }); }
{ const c={console};c.window=c;vm.createContext(c);
  ['js/data/psych-phrases.js','js/data/psych-discharge.js','js/data/psych-discharge-cases.js','js/data/psych-admit-mse.js','js/data/psych-mse-cases.js'].forEach(f=>vm.runInContext(fs.readFileSync(path.join(ut,f),'utf8'),c));
  const sec=c.PSYCH_SECTIONS.find(s=>s.id==='discharge');
  sec.phrases.slice(53).forEach((p,i)=>{rows.ut.push(['discharge:'+(53+i),'Discharge question (new in 1.7.0)','Clinician (respectful)',p.f,p.en]);if(p.c&&p.c!==p.f)rows.ut.push(['discharge:'+(53+i),'Discharge question (new in 1.7.0)','Clinician (everyday)',p.c,p.en]);});
  c.PSYCH_DISCHARGE_CASES.forEach(cs=>Object.entries(cs.fields).forEach(([fid,f])=>Object.values(f.ans||{}).forEach(a=>rows.ut.push(['dcase '+cs.id,'Discharge: '+fid,a[2]||'Patient',a[0],a[1]]))));
  c.PSYCH_MSE_CASES.forEach(cs=>{rows.ut.push(['mcase '+cs.id,'Admission MSE: chief complaint',cs.cc.ans[2]||'Informant',cs.cc.ans[0],cs.cc.ans[1]]);
    Object.entries(cs.domains).forEach(([did,d])=>Object.values(d.ans||{}).forEach(a=>rows.ut.push(['mcase '+cs.id,'Admission MSE: '+did,a[2]||'Patient',a[0],a[1]])));});
}
const dedupe=a=>{const s=new Set();return a.filter(r=>{const k=r[0]+'|'+r[3];if(s.has(k))return false;s.add(k);return true;});};
rows.mse=dedupe(rows.mse);rows.ut=dedupe(rows.ut);
console.log(JSON.stringify(rows));
