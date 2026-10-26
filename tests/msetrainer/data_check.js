const fs=require('fs'),vm=require('vm'),path=require('path');const repo=process.argv[2];
const ctx={console};vm.createContext(ctx);
for(const f of ['js/data.js','js/data-tl.js','js/news.js'])vm.runInContext(fs.readFileSync(path.join(repo,f),'utf8'),ctx,{filename:f});
vm.runInContext('this.D={DOMAINS,TERMS,V,DOM,DOMG,GROUPS,WHATS_NEW,CH};',ctx);
const {DOMAINS,TERMS,V,DOM,DOMG,GROUPS,CH}=ctx.D;let fails=0;const bad=m=>{fails++;console.log('FAIL',m)};
const ids=new Set();
V.forEach(v=>{
  if(ids.has(v.id))bad('dup id '+v.id);ids.add(v.id);
  if(!TERMS[v.t])bad(v.id+' bad t '+v.t);
  if(!Array.isArray(v.d)||v.d.length!==3||new Set(v.d).size!==3||v.d.includes(v.t))bad(v.id+' distractors');
  v.d.forEach(k=>{if(!TERMS[k])bad(v.id+' bad d '+k)});
  if(v.dom&&!DOM[v.dom])bad(v.id+' bad dom');
  if(!v.w)bad(v.id+' no explanation');
  if(v.lang==='tl'){
    v.x.split('\n').forEach(l=>{if(/^[CP]:/.test(l)&&!l.includes(' || '))bad(v.id+' Tagalog line without English: '+l.slice(0,40))});
    if(!v.ask||!v.ask.includes(' || '))bad(v.id+' ask missing');
  }
});
Object.values(TERMS).forEach(t=>{if(!DOM[t.dom])bad('term dom '+t.k);t.ch.forEach(c=>{if(!CH[c])bad('term ch '+t.k+' '+c)});if(!t.def||!t.tell||!t.chart)bad('term fields '+t.k)});
DOMAINS.forEach(d=>{if(!GROUPS.find(g=>g.g===d.g))bad('group '+d.k);const n=V.filter(v=>(v.dom||TERMS[v.t].dom)===d.k).length;if(!n)bad('empty domain '+d.k)});
const tl=V.filter(v=>v.lang==='tl');
console.log(JSON.stringify({cases:V.length,terms:Object.keys(TERMS).length,domains:DOMAINS.length,tagalog:tl.length,culture:V.filter(v=>(v.dom||TERMS[v.t].dom)==='fc').length}));
console.log(fails?fails+' FAILURES':'DATA OK');process.exit(fails?1:0);
