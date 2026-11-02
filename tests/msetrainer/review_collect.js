// Collects the new Tagalog lines from both repos as JSON rows for the review workbook.
const fs=require('fs'),vm=require('vm'),path=require('path');
const [mse,ut]=process.argv.slice(2);
const rows={mse:[],ut:[],panlapi:[]};
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
{ // Panlapi trainer (js/data/affixes.js): every word and every focus-drill sentence. Columns: Where, Type, Root/segmentation, Tagalog, English (+ Claude's note), Flag.
  const c={console};c.window=c;vm.createContext(c);vm.runInContext(fs.readFileSync(path.join(ut,'js/data/affixes.js'),'utf8'),c);
  const SUB={uh:'prefix+suffix',gh:'infix+suffix',ug:'prefix+infix'};
  const FLAG={kamatayan:'Root given as matay. Check.',pabayaan:'Root given as bayaa. Check.',katotohanan:'Doubling of the root syllable (toto-). Check.',pinagtawanan:'Doubling (tawa-nan). Check.',higaan:'Written without h (higa + an). Check.',kasiyahan:'saya + an with a→i (siya-). Check.',magkaroon:'doon with d→r. Check.'};
  c.AFFIX_ITEMS.forEach(it=>{
    const type=it.t+(it.sub?' ('+(SUB[it.sub]||it.sub)+')':'')+(it.clin?' · clinical':'');
    rows.panlapi.push(['af:'+it.w,'Panlapi: '+type,'root '+it.r+' · '+it.seg+' · '+it.pos,it.w,it.en+(it.note?'  [note: '+it.note+']':''),'','',FLAG[it.w]||'']);
  });
  c.AFFIX_FOCUS_DRILL.forEach((d,i)=>{
    const full=d.q.replace('____',d.ok);
    rows.panlapi.push(['focus:'+(i+1),'Focus drill'+(d.clin?' · clinical':''),'correct: '+d.ok+' · wrong: '+d.no+(d.alt?' · also wrong: '+d.alt:''),full+'   ('+d.q+')',d.en+'  [why: '+d.why+']','','','']);
  });
}
const dedupe=a=>{const s=new Set();return a.filter(r=>{const k=r[0]+'|'+r[3];if(s.has(k))return false;s.add(k);return true;});};
rows.mse=dedupe(rows.mse);rows.ut=dedupe(rows.ut);
console.log(JSON.stringify(rows));
