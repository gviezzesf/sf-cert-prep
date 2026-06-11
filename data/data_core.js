const EXAMS_LIST = [
  {group:"Foundations",exams:["Platform Foundations","Sales Foundations","Marketing Cloud Engagement Foundations","Tableau Desktop Foundations","MuleSoft Integration Foundations"]},
  {group:"Administrators",exams:["Platform Administrator","Platform Administrator II","Slack Administrator","Tableau Server Administrator","CPQ Administrator","Marketing Cloud Engagement Administrator"]},
  {group:"Designers",exams:["Platform App Builder","Platform User Experience Designer","Platform Strategy Designer"]},
  {group:"Developers",exams:["Platform Developer","Platform Developer II","JavaScript Developer","OmniStudio Developer","Industries CPQ Developer","B2C Commerce Cloud Developer","MuleSoft Developer","MuleSoft Developer II","MuleSoft Hyperautomation Developer","Slack Developer"]},
  {group:"Architects",exams:["Platform Integration Architect","Platform Data Architect","Platform Sharing and Visibility Architect","Platform Identity and Access Management Architect","Platform Development Lifecycle and Deployment Architect","System Architect","Application Architect","B2B Solution Architect","B2C Solution Architect","Technical Architect","B2C Commerce Architect","Heroku Architect","Tableau Architect","MuleSoft Platform Architect","MuleSoft Platform Integration Architect"]},
  {group:"Consultants",exams:["Business Analyst","Sales Cloud Consultant","Service Cloud Consultant","Experience Cloud Consultant","Field Service Consultant","Data Cloud Consultant","Education Cloud Consultant","Nonprofit Cloud Consultant (NPC)","Nonprofit Success Pack Consultant","OmniStudio Consultant","Slack Consultant","CRM Analytics and Einstein Discovery Consultant","MuleSoft Catalyst Consultant","Marketing Cloud Engagement Consultant","Marketing Cloud Account Engagement Consultant","Revenue Cloud Consultant","Tableau Consultant","Tableau Data Analyst"]},
  {group:"Marketers",exams:["Marketing Cloud Email Specialist","Marketing Cloud Engagement Developer","Marketing Cloud Account Engagement Specialist"]},
  {group:"AI",exams:["Agentforce Specialist"]}
];

function slugify(name){return name.toLowerCase().replace(/[^a-z0-9 ]/g,'').replace(/ +/g,'_');}

const EXAM_DATA = {};

function getExamData(examName){
  return EXAM_DATA[examName] || null;
}

function getGenericResources(examName){
  const d=getExamData(examName);
  const resources=[];

  // 1. Official exam page
  if(d&&d.trailheadUrl){
    resources.push({type:"Official",title:"Exam Registration & Guide",desc:"Official exam page on Trailhead Academy — find the exam guide, registration link, and credential requirements.",url:d.trailheadUrl});
  }

  // 2. Cert-specific trailmix — use explicit override if provided, else auto-generate from slug
  const slug=examName.toLowerCase().replace(/[^a-z0-9 ]/g,'').replace(/ +/g,'-');
  const trailmixUrl=(d&&d.trailmixUrl)?d.trailmixUrl:`https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-${slug}-credential`;
  resources.push({type:"Trailhead",title:"Official Cert Prep Trailmix",desc:"Salesforce-curated collection of modules, projects, and superbadges to prepare for this exam.",url:trailmixUrl});

  // 3. Trailblazer Community cert study group
  resources.push({type:"Community",title:"Trailblazer Community",desc:"Connect with other candidates, ask questions, and find study tips from certified professionals.",url:"https://trailhead.salesforce.com/trailblazer-community/feed?sort=LAST_MODIFIED_DATE_DESC"});

  // 4. Architect website for architect certs
  if(examName.toLowerCase().includes('architect')){
    resources.push({type:"Official",title:"Salesforce Architect Website",desc:"Decision guides, reference architectures, and best practice documentation from the Salesforce Architect Relations team.",url:"https://architect.salesforce.com"});
  }

  // 5. Developer docs for developer/API certs
  if(examName.toLowerCase().includes('developer')||examName.toLowerCase().includes('integration')||examName.toLowerCase().includes('mulesoft')){
    resources.push({type:"Official",title:"Salesforce Developer Documentation",desc:"Full API references, Apex developer guide, and platform developer docs.",url:"https://developer.salesforce.com/docs"});
  }

  // 6. Key Documentation — deduplicated links from all study days
  if(d&&d.studyDays&&d.studyDays.length){
    const seen=new Set();
    const links=[];
    d.studyDays.forEach(day=>{
      (day.topics||[]).forEach(t=>{
        if(t.url&&t.text&&!seen.has(t.url)){
          seen.add(t.url);
          links.push({text:t.text,url:t.url});
        }
      });
    });
    if(links.length){
      resources.push({type:"Docs",title:"Key Documentation",links,url:null});
    }
  }

  // Fallback if nothing built
  if(!resources.length){
    resources.push({type:"Trailhead",title:"Trailhead Learning Platform",desc:"Free learning modules, trails, and superbadges from Salesforce.",url:"https://trailhead.salesforce.com"});
  }

  return resources;
}
