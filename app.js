let selectedExam = null;
let selectedWeeks = null;
let currentExam = null;
let currentWeeks = null;
let activeTab = 'overview';
let quizFilter = 'All';

const themeToggleHome = document.getElementById('theme-toggle-home');
const themeToggleApp = document.getElementById('theme-toggle-app');
const homeScreen = document.getElementById('home-screen');
const appScreen = document.getElementById('app-screen');
const picklistInput = document.getElementById('picklist-input');
const picklistDropdown = document.getElementById('picklist-dropdown');
const picklistClear = document.getElementById('picklist-clear');
const picklistToggleBtn = document.getElementById('picklist-toggle');
const selectedBadge = document.getElementById('selected-exam-badge');
const weeksRow = document.getElementById('weeks-row');
const launchBtn = document.getElementById('launch-btn');
const backBtn = document.getElementById('back-btn');
const appExamName = document.getElementById('app-exam-name');

function getTheme(){return localStorage.getItem('sf_theme')||'dark';}
function setTheme(t){
  localStorage.setItem('sf_theme',t);
  document.body.classList.toggle('light',t==='light');
  const icon=t==='light'?'🌙 Dark':'☀️ Light';
  themeToggleHome.textContent=icon;
  themeToggleApp.textContent=icon;
}

setTheme(getTheme());

themeToggleHome.addEventListener('click',()=>setTheme(getTheme()==='dark'?'light':'dark'));
themeToggleApp.addEventListener('click',()=>setTheme(getTheme()==='dark'?'light':'dark'));

// ── Notes ────────────────────────────────────────────────────────────────────
const notesPanel = document.getElementById('notes-panel');
const notesTextarea = document.getElementById('notes-textarea');
const notesToggleBtn = document.getElementById('notes-toggle-btn');
const notesClearBtn = document.getElementById('notes-clear-btn');
const notesExamLabel = document.getElementById('notes-exam-label');
let notesOpen = false;

function notesKey(exam){ return `sf_notes_${exam?exam.toLowerCase().replace(/[^a-z0-9]/g,'_'):'_'}`; }

function loadNotes(exam){
  notesTextarea.value = localStorage.getItem(notesKey(exam)) || '';
  notesExamLabel.textContent = exam || '';
}

function saveNotes(exam){
  localStorage.setItem(notesKey(exam), notesTextarea.value);
}

function showNotesPanel(){
  notesPanel.style.display='flex';
  
}

function hideNotesPanel(){
  notesPanel.style.display='none';
  notesOpen=false;
  
}

function toggleNotes(){
  notesOpen=!notesOpen;
  notesPanel.classList.toggle('notes-open', notesOpen);
  notesPanel.classList.toggle('notes-collapsed', !notesOpen);
  notesToggleBtn.textContent = notesOpen ? '▼ Hide' : '▲ Show';
  if(notesOpen){ autoResizeNotes(); notesTextarea.focus(); }
  
}

notesToggleBtn.addEventListener('click', e=>{ e.stopPropagation(); toggleNotes(); });
notesPanel.querySelector('.notes-header').addEventListener('click', toggleNotes);

// Drag-to-resize from top handle
const notesResizeHandle = document.getElementById('notes-resize-handle');
let notesResizing=false, notesResizeStartY=0, notesResizeStartH=0;
notesResizeHandle.addEventListener('mousedown', e=>{
  if(!notesOpen) return;
  notesResizing=true;
  notesResizeStartY=e.clientY;
  notesResizeStartH=parseInt(notesTextarea.style.height)||notesTextarea.offsetHeight;
  e.preventDefault();
});
document.addEventListener('mousemove', e=>{
  if(!notesResizing) return;
  const delta=notesResizeStartY-e.clientY;
  const newH=Math.min(Math.max(notesResizeStartH+delta, 100), NOTES_MAX_H);
  notesTextarea.style.height=newH+'px';
});
document.addEventListener('mouseup', ()=>{ notesResizing=false; });
notesTextarea.addEventListener('click', e=>e.stopPropagation());

const NOTES_MAX_H=460;
function autoResizeNotes(){
  requestAnimationFrame(()=>{
    notesTextarea.style.height='auto';
    notesTextarea.style.height=Math.min(notesTextarea.scrollHeight, NOTES_MAX_H)+'px';
  });
}

notesTextarea.addEventListener('input', ()=>{
  saveNotes(currentExam);
  // Only grow, never shrink — preserve manual resize
  const currentH = notesTextarea.offsetHeight;
  notesTextarea.style.height = 'auto';
  const needed = Math.min(notesTextarea.scrollHeight, NOTES_MAX_H);
  notesTextarea.style.height = Math.max(currentH, needed) + 'px';
});

notesClearBtn.addEventListener('click', e=>{
  e.stopPropagation();
  if(!notesTextarea.value.trim()) return;
  if(confirm('Clear all notes for this exam? This cannot be undone.')) {
    notesTextarea.value='';
    saveNotes(currentExam);
  }
});

function buildDropdown(filter){
  picklistDropdown.innerHTML='';
  const q=filter.toLowerCase().trim();
  let anyResult=false;
  EXAMS_LIST.forEach(group=>{
    const matches=group.exams.filter(e=>e.toLowerCase().includes(q)).sort((a,b)=>a.localeCompare(b));
    if(matches.length===0)return;
    anyResult=true;
    const lbl=document.createElement('div');
    lbl.className='picklist-group-label';
    lbl.textContent=group.group;
    picklistDropdown.appendChild(lbl);
    matches.forEach(exam=>{
      const opt=document.createElement('div');
      opt.className='picklist-option'+(selectedExam===exam?' selected':'');
      opt.textContent=exam;
      opt.addEventListener('click',()=>selectExam(exam));
      picklistDropdown.appendChild(opt);
    });
  });
  if(!anyResult){
    const msg=document.createElement('div');
    msg.style.cssText='padding:16px;text-align:center;color:var(--muted);font-size:0.9rem';
    msg.textContent='No certifications found';
    picklistDropdown.appendChild(msg);
  }
}

function openDropdown(){
  buildDropdown(picklistInput.value);
  picklistDropdown.classList.remove('hidden');
  picklistToggleBtn.classList.add('open');
}

function closeDropdown(){
  picklistDropdown.classList.add('hidden');
  picklistToggleBtn.classList.remove('open');
  picklistDropdown.querySelectorAll('.picklist-option.focused').forEach(el=>el.classList.remove('focused'));
}

function selectExam(name){
  selectedExam=name;
  localStorage.setItem('sf_last_exam',name);
  picklistInput.value=name;
  picklistInput.classList.add('has-value');
  picklistClear.classList.add('visible');
  closeDropdown();
  updateLaunch();
}

function clearExam(){
  selectedExam=null;
  picklistInput.value='';
  picklistInput.classList.remove('has-value');
  picklistClear.classList.remove('visible');
  picklistInput.focus();
  openDropdown();
  updateLaunch();
}

picklistInput.addEventListener('focus',()=>openDropdown());

picklistInput.addEventListener('input',()=>{
  buildDropdown(picklistInput.value);
  picklistDropdown.classList.remove('hidden');
  picklistToggleBtn.classList.add('open');
  if(selectedExam&&picklistInput.value!==selectedExam){
    selectedExam=null;
    picklistInput.classList.remove('has-value');
    picklistClear.classList.remove('visible');
    updateLaunch();
  }
});

picklistInput.addEventListener('keydown',e=>{
  const options=[...picklistDropdown.querySelectorAll('.picklist-option')];
  if(!options.length&&e.key!=='Escape')return;
  const focused=picklistDropdown.querySelector('.picklist-option.focused');
  let idx=options.indexOf(focused);
  if(e.key==='ArrowDown'){
    e.preventDefault();
    if(picklistDropdown.classList.contains('hidden'))openDropdown();
    if(focused)focused.classList.remove('focused');
    idx=idx<options.length-1?idx+1:0;
    options[idx].classList.add('focused');
    options[idx].scrollIntoView({block:'nearest'});
  } else if(e.key==='ArrowUp'){
    e.preventDefault();
    if(focused)focused.classList.remove('focused');
    idx=idx>0?idx-1:options.length-1;
    options[idx].classList.add('focused');
    options[idx].scrollIntoView({block:'nearest'});
  } else if(e.key==='Enter'){
    e.preventDefault();
    if(focused){selectExam(focused.textContent);}
  } else if(e.key==='Escape'){
    closeDropdown();
    if(selectedExam)picklistInput.value=selectedExam;
  }
});

picklistClear.addEventListener('mousedown',e=>{
  e.preventDefault(); // don't steal focus from input
  clearExam();
});

picklistToggleBtn.addEventListener('mousedown',e=>{
  e.preventDefault();
  if(picklistDropdown.classList.contains('hidden')){
    picklistInput.focus();
    openDropdown();
  } else {
    closeDropdown();
    if(selectedExam)picklistInput.value=selectedExam;
  }
});

document.addEventListener('click',e=>{
  if(!document.getElementById('picklist-wrapper').contains(e.target)){
    closeDropdown();
    if(selectedExam)picklistInput.value=selectedExam;
  }
});

weeksRow.querySelectorAll('.pace-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    weeksRow.querySelectorAll('.pace-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    selectedWeeks=parseInt(btn.dataset.w);
    localStorage.setItem('sf_last_weeks',selectedWeeks);
    updateLaunch();
  });
});

function updateLaunch(){
  launchBtn.disabled=!(selectedExam&&selectedWeeks);
  const preview=document.getElementById('plan-preview');
  const totalDays=selectedExam?getPlanDayCount(selectedExam):0;
  // Update per-button week estimates
  [1,2,3,5].forEach(w=>{
    const el=document.getElementById(`pw-${w}`);
    if(!el)return;
    if(totalDays>0){
      const wks=Math.ceil(totalDays/w);
      el.textContent=`${wks} week${wks!==1?'s':''}`;
    } else {
      el.textContent='';
    }
  });
  if(!preview)return;
  if(selectedExam&&selectedWeeks&&totalDays>0){
    const weeks=Math.ceil(totalDays/selectedWeeks);
    preview.innerHTML=`<strong>${totalDays} study days</strong> &nbsp;·&nbsp; ${weeks} week${weeks!==1?'s':''} at ${selectedWeeks} day${selectedWeeks!==1?'s':''}/week`;
    preview.classList.add('visible');
  } else {
    preview.classList.remove('visible');
  }
}

const lastExam=localStorage.getItem('sf_last_exam');
const lastWeeks=localStorage.getItem('sf_last_weeks');
if(lastExam){picklistInput.value=lastExam;picklistInput.classList.add('has-value');picklistClear.classList.add('visible');selectedExam=lastExam;}
if(lastWeeks){
  const btn=weeksRow.querySelector(`[data-w="${lastWeeks}"]`);
  if(btn){selectedWeeks=parseInt(lastWeeks);btn.classList.add('active');}
}
updateLaunch();

launchBtn.addEventListener('click',()=>{
  if(!selectedExam||!selectedWeeks)return;
  currentExam=selectedExam;
  currentWeeks=selectedWeeks;
  launchApp();
});

backBtn.addEventListener('click',()=>{
  clearInterval(mockTimerInterval);
  mockState=null;mockQuestions=[];mockAnswers={};
  appScreen.classList.add('hidden');
  homeScreen.classList.remove('hidden');
  activeTab='overview';
  document.querySelectorAll('.tab-btn').forEach(b=>{
    b.classList.remove('hidden');
    b.classList.toggle('active',b.dataset.tab==='overview');
  });
  document.querySelectorAll('.tab-panel').forEach(p=>p.classList.toggle('active',p.id==='tab-overview'));
  hideNotesPanel();
});

function launchApp(){
  appExamName.textContent=currentExam;
  homeScreen.classList.add('hidden');
  appScreen.classList.remove('hidden');
  clearInterval(mockTimerInterval);
  mockState=null;mockQuestions=[];mockAnswers={};
  const d=getExamData(currentExam);
  const isDesignation=!!(d&&d.designation);
  const hiddenTabs=['plan','resources','quiz','mock','tips'];
  document.querySelectorAll('.tab-btn').forEach(b=>{
    b.classList.toggle('hidden',isDesignation&&hiddenTabs.includes(b.dataset.tab));
  });
  renderOverview();
  if(!isDesignation){renderPlan();renderResources();renderQuiz();renderMock();renderTips();}
  switchTab('overview');
  loadNotes(currentExam);
  showNotesPanel();
}

document.querySelectorAll('.tab-btn').forEach(btn=>{
  btn.addEventListener('click',()=>switchTab(btn.dataset.tab));
});

function switchTab(tab){
  if(mockState==='active'&&tab!=='mock'){
    if(!confirm('You have a mock exam in progress. Leaving this tab will end the exam. Continue?'))return;
    clearInterval(mockTimerInterval);
    mockState=null;mockQuestions=[];mockAnswers={};
    renderMock();
  }
  activeTab=tab;
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab));
  document.querySelectorAll('.tab-panel').forEach(p=>p.classList.toggle('active',p.id===`tab-${tab}`));
  if(tab==='overview')animateBars();
}

function animateBars(){
  setTimeout(()=>{
    document.querySelectorAll('.bar-fill').forEach(b=>{b.style.width=b.dataset.pct+'%';});
  },100);
}

function launchExam(examName,tab){
  currentExam=examName;
  currentWeeks=currentWeeks||5;
  appExamName.textContent=currentExam;
  clearInterval(mockTimerInterval);
  mockState=null;mockQuestions=[];mockAnswers={};
  const d=getExamData(currentExam);
  const isDesignation=!!(d&&d.designation);
  const hiddenTabs=['plan','resources','quiz','mock','tips'];
  document.querySelectorAll('.tab-btn').forEach(b=>{
    b.classList.toggle('hidden',isDesignation&&hiddenTabs.includes(b.dataset.tab));
  });
  renderOverview();
  if(!isDesignation){renderPlan();renderResources();renderQuiz();renderMock();renderTips();}
  switchTab(tab||'overview');
}

document.getElementById('tab-overview').addEventListener('click',e=>{
  const btn=e.target.closest('[data-prereq-idx]');
  if(!btn)return;
  const d=getExamData(currentExam);
  if(!d||!d.prerequisites)return;
  const prereq=d.prerequisites[parseInt(btn.dataset.prereqIdx)];
  if(prereq)launchExam(typeof prereq==='string'?prereq:prereq.name,btn.dataset.prereqTab);
});

function toggleDomain(i){
  const row=document.getElementById(`dom-row-${i}`);
  if(!row)return;
  row.classList.toggle('open');
}

function renderOverview(){
  const d=getExamData(currentExam);
  const el=document.getElementById('tab-overview');
  if(!d){
    el.innerHTML=`<h2 class="section-title">${currentExam}</h2><div class="coming-soon"><h3>Content Coming Soon</h3><p>Detailed exam data for this certification will be available soon.</p></div>`;
    return;
  }
  const statsHtml = d.designation ? `
<div class="designation-notice">
  <div class="designation-badge">Designation</div>
  <p>This credential is not earned through a standalone exam. It is automatically awarded when all required prerequisite certifications below are passed.</p>
</div>` : `
<div class="overview-grid">
  <div class="stat-card"><div class="stat-value">${d.questions}</div><div class="stat-label">Questions</div></div>
  <div class="stat-card"><div class="stat-value">${d.time} min</div><div class="stat-label">Time Allowed</div></div>
  <div class="stat-card"><div class="stat-value">${typeof d.pass==='number'?d.pass+'%':d.pass}</div><div class="stat-label">Passing Score</div></div>
</div>`;
  el.innerHTML=`
<h2 class="section-title">${currentExam}</h2>
${statsHtml}
${(()=>{
  if(!d.prerequisites||d.prerequisites.length===0) return '';
  const req=d.prerequisites.map((p,pi)=>({p,pi})).filter(({p})=>typeof p==='object'&&p.required);
  const rec=d.prerequisites.map((p,pi)=>({p,pi})).filter(({p})=>!(typeof p==='object'&&p.required));
  const renderItem=({p,pi})=>{
    const name=typeof p==='string'?p:p.name;
    const note=typeof p==='string'?'':p.note;
    return `<div class="prereq-item"><button class="prereq-link" data-prereq-idx="${pi}" data-prereq-tab="overview">${name} → Overview</button>${note?`<span class="prereq-note">${note}</span>`:''}</div>`;
  };
  let out='';
  if(req.length>0) out+=`<div class="prereq-panel prereq-panel--required"><div class="prereq-header">🔒 Required Prerequisites</div><div class="prereq-list">${req.map(renderItem).join('')}</div></div>`;
  if(rec.length>0) out+=`<div class="prereq-panel"><div class="prereq-header">⚠ Recommended Prerequisites</div><div class="prereq-list">${rec.map(renderItem).join('')}</div></div>`;
  return out;
})()}
${d.overview?`<div class="exam-overview-block">
  <p class="exam-overview-text">${d.overview}</p>
  ${d.experience?`<p class="exam-overview-text" style="margin-top:10px"><strong>Recommended experience:</strong> ${d.experience}</p>`:''}
  <div style="text-align:center;display:flex;justify-content:center;gap:10px">
    <button class="trailhead-btn" style="background:var(--mid-blue)" onclick="switchTab('plan')">Go to Study Plan →</button>
    ${d.trailheadUrl?`<a class="trailhead-btn" href="${d.trailheadUrl}" target="_blank">View on Trailhead ↗</a>`:''}
  </div>
</div>`:''}
${d.designation ? '' : `<div class="domains-section">
  <h3 style="margin-bottom:16px;font-size:1.1rem">Exam Domains <span style="font-size:0.8rem;font-weight:400;color:var(--muted);margin-left:6px">click to expand</span></h3>
  ${(d.domains||[]).map((dom,i)=>`
  <div class="domain-row" id="dom-row-${i}">
    <div class="domain-trigger" onclick="toggleDomain(${i})">
      <span class="domain-name">${dom.name}</span>
      <span class="domain-pct">${dom.pct}%</span>
      <span class="domain-chevron">▼</span>
    </div>
    <div class="bar-wrap">
      <div class="bar-track"><div class="bar-fill" style="background:${dom.color}" data-pct="${dom.pct}"></div></div>
    </div>
    <div class="domain-detail">
      <div class="domain-detail-inner">
        ${dom.desc?`<div class="domain-desc">${dom.desc}</div>`:''}
        ${(dom.keyTopics||[]).length>0?`<ul class="domain-topic-list">${dom.keyTopics.map(t=>`<li class="domain-topic-item"><div><div class="domain-topic-desc">${t.desc}</div></div></li>`).join('')}</ul>`:''}
        ${!dom.desc&&(!dom.keyTopics||dom.keyTopics.length===0)?`<div class="domain-desc" style="color:var(--muted)">${dom.name} — ${dom.pct}% of the exam</div>`:''}
      </div>
    </div>
  </div>`).join('')}
</div>`}
`;
}

function normalizeTemplate(tmpl){
  // Normalize studyDays entries that use alternate schemas into the canonical {tag,focus,topics:[{text,url}]} form
  let tag=tmpl.tag||'review';
  let focus=tmpl.focus||tmpl.content||'';
  let topics=tmpl.topics;
  if(!topics){
    topics=[{text:"Study: "+tmpl.title,url:"https://trailhead.salesforce.com"}];
  } else if(topics.length>0&&typeof topics[0]==='string'){
    // topics is an array of plain strings — convert to {text,url}
    topics=topics.map(s=>({text:s,url:"https://trailhead.salesforce.com"}));
  }
  // If focus is empty but topics are strings, build focus from them
  if(!focus&&topics.length>0) focus=topics.map(t=>t.text||t).join('; ');
  // Derive title from focus if not explicitly set
  const title=tmpl.title||(focus?focus.split(/[:–—]/)[0].trim().substring(0,55):tag.charAt(0).toUpperCase()+tag.slice(1)+' Study');
  return Object.assign({},tmpl,{tag,focus,topics,title});
}

function matchDomains(entry, domains){
  if(!domains||!domains.length) return [];
  const haystack=(entry.tag+' '+entry.focus+(entry.title||'')).toLowerCase();
  const matched=domains.filter(dom=>{
    const words=dom.name.toLowerCase().replace(/[^a-z0-9 ]/g,' ').split(/\s+/).filter(w=>w.length>3);
    return words.some(w=>haystack.includes(w));
  });
  return matched.length ? matched : [];
}

function generateDays(daysPerWeek,examName){
  const d=getExamData(examName);
  if(!d)return[];
  const entries=(d.studyDays||[]).map(normalizeTemplate);
  if(!entries.length)return[];

  // One studyDays entry = one day. No cycling, no repeats.
  // daysPerWeek controls pacing: week numbers are assigned accordingly.
  return entries.map((entry,i)=>{
    const week=Math.floor(i/daysPerWeek)+1;
    const dayNum=i+1;
    return {
      id:`day_${dayNum}`,num:dayNum,week,
      title:entry.title,
      tag:entry.tag,
      focus:entry.focus,
      topics:entry.topics,
      matchedDomains:matchDomains(entry, d.domains)
    };
  });
}

function getPlanDayCount(examName){
  const d=getExamData(examName);
  if(!d)return 0;
  return (d.studyDays||[]).length;
}

function getPlanKey(){return `sf_plan_${slugify(currentExam)}`;}
function getPlanProgress(){try{return JSON.parse(localStorage.getItem(getPlanKey()))||{};}catch{return {};}}
function savePlanProgress(p){localStorage.setItem(getPlanKey(),JSON.stringify(p));}

function renderPlan(){
  const d=getExamData(currentExam);
  const el=document.getElementById('tab-plan');
  if(!d){
    el.innerHTML=`<h2 class="section-title">Study Plan</h2><div class="coming-soon"><h3>Content Coming Soon</h3><p>A personalized study plan for this certification will be available soon.</p></div>`;
    return;
  }
  const days=generateDays(currentWeeks,currentExam);
  const progress=getPlanProgress();
  const completed=days.filter(dd=>progress[dd.id]).length;
  const totalDays=days.length;
  const pct=totalDays?Math.round((completed/totalDays)*100):0;

  el.innerHTML=`
<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:20px">
  <h2 class="section-title" style="margin:0">Study Plan</h2>
  <div style="display:flex;align-items:center;gap:10px">
    <span class="progress-note">Progress saved in your browser ✓</span>
    <button class="reset-btn" id="reset-plan-btn">Reset Progress</button>
  </div>
</div>
<div class="progress-bar-wrap">
  <div style="display:flex;justify-content:space-between;align-items:center">
    <span style="font-weight:600">${completed} / ${totalDays} days completed</span>
    <span style="font-weight:700;color:var(--green)">${pct}%</span>
  </div>
  <div class="progress-bar-track"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
  <span class="progress-text">${totalDays} days · ${Math.ceil(totalDays/currentWeeks)} week${Math.ceil(totalDays/currentWeeks)!==1?'s':''} at ${currentWeeks} day${currentWeeks!==1?'s':''}/week</span>
</div>
<div id="days-container">
${days.map(day=>`
<div class="day-card${progress[day.id]?' completed':''}" id="card-${day.id}">
  <div class="day-header" onclick="toggleDay('${day.id}')">
    <div class="day-checkbox${progress[day.id]?' checked':''}" id="chk-${day.id}" onclick="event.stopPropagation();toggleCheck('${day.id}')"></div>
    <div class="day-info">
      <div class="day-num">Week ${day.week} · Day ${day.num}</div>
      <div class="day-title">${day.title}</div>
    </div>
    <span class="day-domain-tags">${day.matchedDomains&&day.matchedDomains.length?day.matchedDomains.map(dom=>{const c=dom.color==='#E74C3C'?'#8E44AD':dom.color;return `<span class="day-domain-pill" style="background:${c}22;color:${c};border:1px solid ${c}55">${dom.name}</span>`;}).join(''):`<span class="day-domain-pill" style="background:#7f8c8d22;color:#7f8c8d;border:1px solid #7f8c8d55">${day.tag}</span>`}</span>
    <span class="day-chevron">▼</span>
  </div>
  <div class="day-body" id="body-${day.id}">
    <div class="day-body-inner">
      <div class="day-focus">${day.focus}</div>
      <ul class="day-topics">
        ${day.topics.map(t=>`<li><a href="${t.url}" target="_blank">${t.text}</a></li>`).join('')}
      </ul>
    </div>
  </div>
</div>`).join('')}
</div>`;

  document.getElementById('reset-plan-btn').addEventListener('click',()=>{
    if(confirm('Reset all study plan progress? This cannot be undone.')){{savePlanProgress({});renderPlan();}};
  });
}

function toggleDay(id){
  const card=document.getElementById(`card-${id}`);
  const wasOpen=card.classList.contains('open');
  document.querySelectorAll('.day-card.open').forEach(c=>c.classList.remove('open'));
  if(!wasOpen)card.classList.add('open');
}

function toggleCheck(id){
  const progress=getPlanProgress();
  progress[id]=!progress[id];
  savePlanProgress(progress);
  renderPlan();
}

function getBookmarkKey(){return `sf_bm_${slugify(currentExam)}`;}
function getBookmarks(){try{return JSON.parse(localStorage.getItem(getBookmarkKey()))||{};}catch{return {};}}
function saveBookmarks(b){localStorage.setItem(getBookmarkKey(),JSON.stringify(b));}
function toggleBookmark(url){
  const b=getBookmarks();
  if(b[url])delete b[url]; else b[url]=1;
  saveBookmarks(b);
  renderResources();
}

function renderDocLinks(links){
  const b=getBookmarks();
  const bookmarked=links.filter(l=>b[l.url]);
  const rest=links.filter(l=>!b[l.url]);
  const renderRow=l=>`<div class="doc-link-row${b[l.url]?' bookmarked':''}">
    <button class="doc-bookmark-btn${b[l.url]?' bookmarked':''}" onclick="toggleBookmark('${l.url.replace(/'/g,"\\'")}')" title="${b[l.url]?'Remove bookmark':'Bookmark'}">★</button>
    <a href="${l.url}" target="_blank" style="font-size:0.82rem;color:var(--blue)">${l.text}</a>
  </div>`;
  let html='';
  if(bookmarked.length){
    html+=`<div class="doc-bookmarked-section">${bookmarked.map(renderRow).join('')}</div>`;
  }
  html+=rest.map(renderRow).join('');
  return html;
}

function renderResources(){
  const d=getExamData(currentExam);
  const el=document.getElementById('tab-resources');
  const resources=(d&&d.resources&&d.resources.length)?d.resources:getGenericResources(currentExam);
  el.innerHTML=`
<h2 class="section-title">Resources</h2>
<div class="resources-grid">
${resources.map(r=>`
<div class="resource-card${r.type==='Docs'?' resource-card--docs':''}">
  <span class="resource-badge badge-${(r.type||'docs').toLowerCase()}">${r.type||'docs'}</span>
  <div class="resource-title">${r.title}</div>
  ${r.links?`<div class="resource-desc">${renderDocLinks(r.links)}</div>`:`<div class="resource-desc">${r.desc||''}</div>`}
  ${r.url?`<a class="resource-link" href="${r.url}" target="_blank">Open resource →</a>`:''}
</div>`).join('')}
</div>`;
}

function getQuizKey(){return `sf_quiz_${slugify(currentExam)}`;}
function getQuizAnswers(){try{return JSON.parse(localStorage.getItem(getQuizKey()))||{};}catch{return {};}}
function saveQuizAnswers(a){localStorage.setItem(getQuizKey(),JSON.stringify(a));}

let currentQuizFiltered=[];

function normalizeQuizItem(q){
  // Handle alternate schema: {q, a, options:[...]} → {q, domain, opts:[...], correct:idx, explanation:''}
  if(q.opts!==undefined) return q; // already canonical
  const opts=q.options||[];
  const correct=opts.indexOf(q.a);
  return {q:q.q, domain:q.domain||'General', opts, correct:correct>=0?correct:0, explanation:q.explanation||q.a||''};
}

function renderQuiz(){
  const d=getExamData(currentExam);
  const el=document.getElementById('tab-quiz');
  if(!d||!d.quiz||d.quiz.length===0){
    el.innerHTML=`<h2 class="section-title">Quiz</h2><div class="coming-soon"><h3>Content Coming Soon</h3><p>Practice questions for this certification will be available soon.</p></div>`;
    return;
  }
  // Normalize quiz items in-place once
  if(d.quiz[0]&&d.quiz[0].opts===undefined) d.quiz=d.quiz.map(normalizeQuizItem);
  const answers=getQuizAnswers();
  const domains=['All',...new Set(d.quiz.map(q=>q.domain))];
  currentQuizFiltered=quizFilter==='All'?[...d.quiz]:d.quiz.filter(q=>q.domain===quizFilter);
  const filtered=currentQuizFiltered;
  const answered=filtered.filter(q=>answers[q.q]!==undefined).length;
  const correct=filtered.filter(q=>answers[q.q]!==undefined&&answers[q.q]===q.correct).length;

  el.innerHTML=`
<h2 class="section-title">Quiz</h2>
<div class="quiz-controls">
${domains.map(dom=>`<button class="quiz-filter-btn${quizFilter===dom?' active':''}" onclick="setQuizFilter('${dom}')">${dom}</button>`).join('')}
</div>
<div class="quiz-score-bar">
  <span class="score-label">Score:</span>
  <span class="score-value">${correct}/${answered}</span>
  <span class="score-label">of ${filtered.length} questions answered</span>
  <div class="quiz-action-btns">
    <button class="sm-btn" onclick="shuffleQuiz()">Shuffle</button>
    <button class="sm-btn" onclick="resetQuiz()">Reset</button>
  </div>
</div>
${answered===filtered.length&&filtered.length>0?`<div class="quiz-summary"><h3>Quiz Complete!</h3><p>You scored <strong>${correct} out of ${filtered.length}</strong> (${Math.round((correct/filtered.length)*100)}%)</p></div>`:''}
<div id="questions-container">
${filtered.map((q,i)=>{
  const userAns=answers[q.q];
  const answered2=userAns!==undefined;
  return `<div class="q-card">
  <div class="q-domain-tag">${q.domain}</div>
  <div class="q-text">${q.q}</div>
  <div class="q-options">
  ${q.opts.map((opt,idx)=>{
    let cls='q-opt';
    if(answered2){
      if(idx===q.correct)cls+=' correct';
      else if(idx===userAns&&userAns!==q.correct)cls+=' wrong';
    }
    return `<button class="${cls}"${answered2?' disabled':''} onclick="answerQ(${i},${idx})">${String.fromCharCode(65+idx)}. ${opt}</button>`;
  }).join('')}
  </div>
  <div class="q-explanation${answered2?' show':''}">💡 ${q.explanation}</div>
</div>`;
}).join('')}
</div>`;
}

function setQuizFilter(f){quizFilter=f;renderQuiz();}

function answerQ(qIdx,optIdx){
  const q=currentQuizFiltered[qIdx];
  if(!q)return;
  const answers=getQuizAnswers();
  if(answers[q.q]!==undefined)return;
  answers[q.q]=optIdx;
  saveQuizAnswers(answers);

  // Targeted DOM update — avoid full re-render so previously-answered
  // explanations don't replay the animation
  const container=document.getElementById('questions-container');
  const cards=container.querySelectorAll('.q-card');
  const card=cards[qIdx];
  if(!card){renderQuiz();return;}

  // Update option buttons
  const btns=card.querySelectorAll('.q-opt');
  btns.forEach((btn,idx)=>{
    btn.disabled=true;
    btn.classList.remove('correct','wrong');
    if(idx===q.correct)btn.classList.add('correct');
    else if(idx===optIdx)btn.classList.add('wrong');
  });

  // Reveal explanation with animation
  const expl=card.querySelector('.q-explanation');
  if(expl){expl.classList.add('show','newly-revealed');}

  // Update score bar
  const allAnswers=getQuizAnswers();
  const answered=currentQuizFiltered.filter(qq=>allAnswers[qq.q]!==undefined).length;
  const correct=currentQuizFiltered.filter(qq=>allAnswers[qq.q]!==undefined&&allAnswers[qq.q]===qq.correct).length;
  const scoreVal=document.querySelector('.score-value');
  if(scoreVal)scoreVal.textContent=`${correct}/${answered}`;
}

function shuffleQuiz(){
  const d=getExamData(currentExam);
  if(!d)return;
  for(let i=d.quiz.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[d.quiz[i],d.quiz[j]]=[d.quiz[j],d.quiz[i]];}
  renderQuiz();
}

function resetQuiz(){
  if(confirm('Reset all quiz answers?')){saveQuizAnswers({});renderQuiz();}
}

// ── Mock Exam ────────────────────────────────────────────────────────────────
let mockState = null; // null | 'active' | 'scored' | 'review'
let mockQuestions = [];
let mockAnswers = {};  // idx → optIdx
let mockTimerMode = 'remaining'; // 'remaining' | 'elapsed' | 'hidden'
let mockTimerInterval = null;
let mockSecondsLeft = 0;
let mockSecondsElapsed = 0;
let mockTimeLimitSec = 0;

function mockFmt(sec){
  const m=Math.floor(sec/60),s=sec%60;
  return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

function mockTimerClass(sec,limit){
  const pct=sec/limit;
  if(pct<=0.1)return 'danger';
  if(pct<=0.25)return 'warning';
  return '';
}

function mockStartTimer(){
  clearInterval(mockTimerInterval);
  mockTimerInterval=setInterval(()=>{
    if(mockState!=='active'){clearInterval(mockTimerInterval);return;}
    mockSecondsLeft=Math.max(0,mockSecondsLeft-1);
    mockSecondsElapsed++;
    updateMockTimerDisplay();
    if(mockSecondsLeft===0)mockSubmit(true);
  },1000);
}

function updateMockTimerDisplay(){
  const el=document.getElementById('mock-timer-val');
  const btn=document.getElementById('mock-timer-mode-btn');
  if(!el)return;
  if(mockTimerMode==='hidden'){el.textContent='';if(btn)btn.textContent='Show Timer';}
  else if(mockTimerMode==='elapsed'){
    el.textContent=mockFmt(mockSecondsElapsed);
    el.className='mock-timer-display';
    if(btn)btn.textContent='Elapsed';
  } else {
    el.textContent=mockFmt(mockSecondsLeft);
    el.className='mock-timer-display '+mockTimerClass(mockSecondsLeft,mockTimeLimitSec);
    if(btn)btn.textContent='Remaining';
  }
}

function cycleMockTimerMode(){
  const modes=['remaining','elapsed','hidden'];
  mockTimerMode=modes[(modes.indexOf(mockTimerMode)+1)%3];
  updateMockTimerDisplay();
}

function renderMock(){
  const d=getExamData(currentExam);
  const el=document.getElementById('tab-mock');
  if(!d||!d.quiz||d.quiz.length===0){
    el.innerHTML=`<h2 class="section-title">Mock Exam</h2><div class="coming-soon"><h3>Content Coming Soon</h3><p>Practice questions for this certification will be available soon.</p></div>`;
    return;
  }
  if(d.quiz[0]&&d.quiz[0].opts===undefined) d.quiz=d.quiz.map(normalizeQuizItem);

  if(mockState===null){
    const timeMins=Math.round((20/(d.questions||60))*d.time);
    const passStr=typeof d.pass==='number'?d.pass+'%':d.pass;
    el.innerHTML=`
<h2 class="section-title">Mock Exam</h2>
<div class="mock-start-card">
  <h3>${currentExam}</h3>
  <p><strong>20 questions</strong> · <strong>${timeMins} minutes</strong></p>
  <p style="margin-top:4px">Passing score: <strong>${passStr}</strong></p>
  <p style="margin-top:12px;font-size:0.85rem">Answer all questions, then submit to see your results. No feedback is shown until the end.</p>
  <button class="mock-start-btn" onclick="mockBegin()">Start Mock Exam</button>
</div>`;
    return;
  }

  if(mockState==='scored'){
    renderMockScore();
    return;
  }

  if(mockState==='review'){
    renderMockReview();
    return;
  }

  // active
  const answered=Object.keys(mockAnswers).length;
  const total=mockQuestions.length;
  el.innerHTML=`
<h2 class="section-title">Mock Exam</h2>
<div class="mock-timer-bar">
  <span id="mock-timer-val" class="mock-timer-display"></span>
  <button class="mock-timer-toggle" id="mock-timer-mode-btn" onclick="cycleMockTimerMode()">Remaining</button>
  <span class="mock-progress-label">${answered} / ${total} answered</span>
  <button class="mock-submit-btn" onclick="mockSubmit(false)">Submit Exam</button>
</div>
<div id="mock-questions-container">
${mockQuestions.map((q,i)=>{
  const sel=mockAnswers[i];
  return `<div class="mock-q-card">
  <div class="q-domain-tag">${q.domain} &nbsp;·&nbsp; Q${i+1}</div>
  <div class="q-text">${q.q}</div>
  <div class="q-options">
  ${q.opts.map((opt,idx)=>`<button class="q-opt${sel===idx?' selected':''}" onclick="mockAnswer(${i},${idx})">${String.fromCharCode(65+idx)}. ${opt}</button>`).join('')}
  </div>
</div>`;
}).join('')}
</div>
<div style="text-align:right;margin-top:12px">
  <button class="mock-submit-btn" onclick="mockSubmit(false)">Submit Exam</button>
</div>`;
  updateMockTimerDisplay();
}

function mockBegin(){
  const d=getExamData(currentExam);
  if(!d||!d.quiz)return;
  if(d.quiz[0]&&d.quiz[0].opts===undefined) d.quiz=d.quiz.map(normalizeQuizItem);
  // Fisher-Yates shuffle a copy
  const pool=[...d.quiz];
  for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
  mockQuestions=pool.slice(0,20);
  mockAnswers={};
  mockTimeLimitSec=Math.round((20/(d.questions||60))*d.time)*60;
  mockSecondsLeft=mockTimeLimitSec;
  mockSecondsElapsed=0;
  mockState='active';
  mockTimerMode='remaining';
  renderMock();
  mockStartTimer();
}

function mockAnswer(qIdx,optIdx){
  if(mockState!=='active')return;
  mockAnswers[qIdx]=optIdx;
  // Update just the buttons in this card without full re-render
  const cards=document.querySelectorAll('#mock-questions-container .mock-q-card');
  if(cards[qIdx]){
    cards[qIdx].querySelectorAll('.q-opt').forEach((btn,idx)=>{
      btn.classList.toggle('selected',idx===optIdx);
    });
  }
  // Update progress label
  const lbl=document.querySelector('.mock-progress-label');
  if(lbl)lbl.textContent=`${Object.keys(mockAnswers).length} / ${mockQuestions.length} answered`;
}

function mockSubmit(timedOut){
  if(mockState!=='active')return;
  clearInterval(mockTimerInterval);
  const unanswered=mockQuestions.length-Object.keys(mockAnswers).length;
  if(!timedOut&&unanswered>0){
    if(!confirm(`You have ${unanswered} unanswered question${unanswered>1?'s':''}. Submit anyway?`))return;
  }
  mockState='scored';
  renderMock();
}

function renderMockScore(){
  const d=getExamData(currentExam);
  const el=document.getElementById('tab-mock');
  const total=mockQuestions.length;
  const correct=mockQuestions.filter((q,i)=>mockAnswers[i]===q.correct).length;
  const pct=Math.round((correct/total)*100);
  const passNum=parseInt((typeof d.pass==='number'?d.pass+'%':d.pass)||'65');
  const passed=pct>=passNum;
  const timeTaken=mockFmt(mockSecondsElapsed);

  // Build per-domain breakdown
  const domainMap={};
  mockQuestions.forEach((q,i)=>{
    const dom=q.domain||'General';
    if(!domainMap[dom])domainMap[dom]={total:0,correct:0};
    domainMap[dom].total++;
    if(mockAnswers[i]===q.correct)domainMap[dom].correct++;
  });
  const domainRows=Object.entries(domainMap)
    .sort((a,b)=>(a[1].correct/a[1].total)-(b[1].correct/b[1].total))
    .map(([name,s])=>{
      const dpct=Math.round((s.correct/s.total)*100);
      const color=dpct>=80?'var(--green)':dpct>=50?'#e67e22':'var(--red)';
      return `<div class="mock-domain-row">
  <span class="mock-domain-name" title="${name}">${name}</span>
  <div class="mock-domain-track"><div class="mock-domain-fill" style="width:${dpct}%;background:${color}"></div></div>
  <span class="mock-domain-score" style="color:${color}">${s.correct}/${s.total}</span>
</div>`;
    }).join('');

  el.innerHTML=`
<h2 class="section-title">Mock Exam — Results</h2>
<div class="mock-score-card ${passed?'pass':'fail'}">
  <div class="mock-score-verdict">${passed?'PASS':'FAIL'}</div>
  <div class="mock-score-big">${correct} / ${total}</div>
  <div class="mock-score-sub">${pct}% &nbsp;·&nbsp; Passing score: ${typeof d.pass==='number'?d.pass+'%':d.pass} &nbsp;·&nbsp; Time: ${timeTaken}</div>
  <div class="mock-domain-breakdown">
    <div class="mock-domain-breakdown-title">Domain Breakdown</div>
    ${domainRows}
  </div>
  <div class="mock-score-actions" style="margin-top:22px">
    <button class="mock-review-btn" onclick="mockGoReview()">Review All Questions</button>
    <button class="mock-retake-btn" onclick="mockReset()">Retake</button>
  </div>
</div>`;
}

function mockGoReview(){
  mockState='review';
  renderMock();
}

function renderMockReview(){
  const d=getExamData(currentExam);
  const el=document.getElementById('tab-mock');
  const total=mockQuestions.length;
  const correct=mockQuestions.filter((q,i)=>mockAnswers[i]===q.correct).length;
  const pct=Math.round((correct/total)*100);
  el.innerHTML=`
<h2 class="section-title">Mock Exam — Review</h2>
<div class="mock-review-header">
  <h3>Score: ${correct}/${total} (${pct}%)</h3>
  <button class="mock-review-back" onclick="mockGoScore()">← Back to Results</button>
  <button class="mock-review-back" onclick="mockReset()" style="margin-left:auto">Retake</button>
</div>
${mockQuestions.map((q,i)=>{
  const userAns=mockAnswers[i];
  const answered=userAns!==undefined;
  return `<div class="mock-q-card">
  <div class="q-domain-tag">${q.domain} &nbsp;·&nbsp; Q${i+1} &nbsp;·&nbsp; ${answered?(userAns===q.correct?'✓ Correct':'✗ Wrong'):'— Skipped'}</div>
  <div class="q-text">${q.q}</div>
  <div class="q-options">
  ${q.opts.map((opt,idx)=>{
    let cls='q-opt';
    if(idx===q.correct)cls+=' correct';
    else if(answered&&idx===userAns&&userAns!==q.correct)cls+=' wrong';
    return `<button class="${cls}" disabled>${String.fromCharCode(65+idx)}. ${opt}</button>`;
  }).join('')}
  </div>
  <div class="mock-q-explanation">💡 ${q.explanation}</div>
</div>`;
}).join('')}
<div style="text-align:center;margin-top:20px">
  <button class="mock-review-back" onclick="mockGoScore()">← Back to Results</button>
</div>`;
}

function mockGoScore(){
  mockState='scored';
  renderMock();
}

function mockReset(){
  clearInterval(mockTimerInterval);
  mockState=null;
  mockQuestions=[];
  mockAnswers={};
  renderMock();
}
// ── end Mock Exam ────────────────────────────────────────────────────────────

function renderTips(){
  const d=getExamData(currentExam);
  const el=document.getElementById('tab-tips');
  if(!d||!d.tips){
    el.innerHTML=`<h2 class="section-title">Tips</h2><div class="coming-soon"><h3>Content Coming Soon</h3><p>Exam-specific tips for this certification will be available soon.</p></div>`;
    return;
  }
  const icons=['💡','🎯','📚','⚡','🔑','✅','🧠','🏆','📝','🔍'];
  el.innerHTML=`
<h2 class="section-title">Exam Tips</h2>
<div class="tips-grid">
${d.tips.map((t,i)=>{
  // Handle both plain strings and {icon,title,body} objects
  if(typeof t==='string'){
    const icon=icons[i%icons.length];
    const dash=t.indexOf(' — ');
    const title=dash>-1?t.slice(0,dash):t.slice(0,60);
    const body=dash>-1?t.slice(dash+3):t;
    return `<div class="tip-card"><div class="tip-icon">${icon}</div><div class="tip-title">${title}</div><div class="tip-body">${body}</div></div>`;
  }
  return `<div class="tip-card"><div class="tip-icon">${t.icon||'💡'}</div><div class="tip-title">${t.title}</div><div class="tip-body">${t.body}</div></div>`;
}).join('')}
</div>`;
}
