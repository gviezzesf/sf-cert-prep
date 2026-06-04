Object.assign(EXAM_DATA, {
  "Platform Foundations": {
    questions: 60,
    time: 105,
    pass: "65%",
    experience: "No experience required",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-platform-foundations---Plat-101",
    prerequisites: [],
    overview: "The Salesforce Associate (Platform Foundations) certification is the entry-level credential for the Salesforce ecosystem. It validates a foundational understanding of the Salesforce platform — including CRM concepts, platform navigation, the data model, the security model, and basic automation — and is designed for those new to Salesforce with no prior experience required.",
    domains: [
      {name:"Salesforce Ecosystem and CRM",pct:21,color:"#00A1E0",desc:"Understand what Salesforce is, how CRM works, and the value the platform delivers to businesses.",keyTopics:[
        {title:"What Is CRM",desc:"Customer Relationship Management systems centralize customer data, interactions, and history so teams can collaborate and deliver better experiences."},
        {title:"Salesforce Products Overview",desc:"Salesforce offers Sales Cloud, Service Cloud, Marketing Cloud, Platform, and more — each addresses different business needs built on the same core platform."},
        {title:"The Salesforce Ecosystem",desc:"The ecosystem includes partners, consultants, AppExchange ISVs, and Trailblazers — understanding it helps candidates understand career paths and the broader context."},
        {title:"Trailhead and Learning Resources",desc:"Trailhead is Salesforce's free online learning platform — badges, modules, trails, and superbadges are the primary self-service learning paths for all Salesforce roles."}
      ]},
      {name:"Navigation and User Interface",pct:20,color:"#2ECC71",desc:"Navigate the Salesforce Lightning Experience UI, find records, and use core platform features.",keyTopics:[
        {title:"Lightning Experience vs Classic",desc:"Lightning Experience is the modern Salesforce UI — it replaced Salesforce Classic and offers a faster, more visual interface with improved features and components."},
        {title:"App Launcher and Navigation",desc:"The App Launcher lets users switch between apps; the navigation bar gives quick access to objects and records within the current app."},
        {title:"List Views and Search",desc:"List views filter and display records by criteria; global search finds records, files, and metadata across the whole org using keywords."},
        {title:"Home Page and Activity Timeline",desc:"The Home page shows tasks, pipeline charts, and recent items; the Activity Timeline on records shows the full history of emails, calls, meetings, and tasks."}
      ]},
      {name:"Data Model",pct:25,color:"#F39C12",desc:"Understand Salesforce objects, fields, and relationships — the building blocks of every Salesforce data model.",keyTopics:[
        {title:"Standard vs Custom Objects",desc:"Standard objects (Account, Contact, Lead, Opportunity, Case) are built into Salesforce; custom objects store business-specific data and follow the same rules as standard objects."},
        {title:"Fields and Field Types",desc:"Fields store data on records — common types include Text, Number, Date, Picklist, Checkbox, Formula, and Lookup — each with different storage and behaviour characteristics."},
        {title:"Relationships",desc:"Lookup relationships link objects optionally; Master-Detail relationships enforce ownership and enable roll-up summary fields — understanding the difference is fundamental."},
        {title:"Record IDs and External IDs",desc:"Every Salesforce record has a unique 18-character ID; external IDs allow records to be identified by a field from an external system, enabling upsert operations."}
      ]},
      {name:"Security Model",pct:19,color:"#E74C3C",desc:"Understand the layered Salesforce security model — who can see and do what, and how access is controlled.",keyTopics:[
        {title:"Profiles and Permissions",desc:"Profiles control what objects and fields a user can access and what system actions they can perform — every user must have exactly one profile."},
        {title:"Roles and Record Visibility",desc:"The role hierarchy determines which records users can see based on their position — users see their own records plus those of anyone below them in the hierarchy."},
        {title:"Organization-Wide Defaults",desc:"OWDs set the most restrictive baseline for record access — Private means only the owner and hierarchy can see a record; Public Read/Write means everyone can."},
        {title:"Field-Level Security",desc:"Field-level security controls whether a user can see or edit a specific field, independent of whether they can see the record — set on profiles or permission sets."}
      ]},
      {name:"Core Business Processes",pct:15,color:"#1ABC9C",desc:"Understand the core Sales and Service Cloud processes that most Salesforce implementations support.",keyTopics:[
        {title:"Lead to Opportunity Process",desc:"Leads represent potential customers; converting a lead creates an Account, Contact, and optionally an Opportunity to track the sales deal."},
        {title:"Case Management Basics",desc:"Cases track customer service issues from creation through resolution — they can be assigned to agents or queues and escalated based on rules."},
        {title:"Reports and Dashboards",desc:"Reports query and display Salesforce data in tabular or grouped formats; dashboards visualize report data as charts and metrics on a single screen."},
        {title:"Activities: Tasks and Events",desc:"Tasks are to-do items with a due date; Events are calendar meetings — both log to the Activity Timeline and help track customer touchpoints."}
      ]}
    ],
    studyDays:[
      {tag:"platform-basics",focus:"Salesforce platform overview: clouds, org model, and the Salesforce ecosystem",topics:[
        {text:"Salesforce Platform Basics Trailhead",url:"https://trailhead.salesforce.com/content/learn/modules/salesforce_platform_basics"},
        {text:"What is Salesforce?",url:"https://help.salesforce.com/s/articleView?id=sf.overview_what_is_salesforce.htm"},
        {text:"Org Model and Multi-Tenancy",url:"https://trailhead.salesforce.com/content/learn/modules/salesforce_platform_basics"},
        {text:"Data Model Overview",url:"https://trailhead.salesforce.com/content/learn/modules/data_modeling"},
        {text:"Platform Foundations Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Platform-Foundations-Exam-Guide"},
        {text:"Trailmix: Platform Foundations",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-platform-foundations-credential"}
      ]},
      {tag:"navigation-customization",focus:"Lightning Experience navigation, App Builder, and basic org customization",topics:[
        {text:"Lightning Experience Overview",url:"https://help.salesforce.com/s/articleView?id=sf.lex_overview.htm"},
        {text:"Lightning App Builder",url:"https://help.salesforce.com/s/articleView?id=sf.lightning_app_builder_overview.htm"},
        {text:"Custom Objects and Fields",url:"https://help.salesforce.com/s/articleView?id=sf.dev_objectcreate_task.htm"},
        {text:"Page Layouts",url:"https://help.salesforce.com/s/articleView?id=sf.customize_layout.htm"},
        {text:"List Views",url:"https://help.salesforce.com/s/articleView?id=sf.listviews_edit.htm"},
        {text:"Formula Fields Basics",url:"https://help.salesforce.com/s/articleView?id=sf.customize_formulas.htm"}
      ]},
      {tag:"exam-prep-foundations",focus:"Platform Foundations exam prep: platform overview, data model, and navigation",topics:[
        {text:"Platform Foundations Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Platform-Foundations-Exam-Guide"},
        {text:"Salesforce Platform Basics",url:"https://trailhead.salesforce.com/content/learn/modules/salesforce_platform_basics"},
        {text:"Data Modeling Module",url:"https://trailhead.salesforce.com/content/learn/modules/data_modeling"},
        {text:"Lightning Experience Basics",url:"https://trailhead.salesforce.com/content/learn/modules/lex_migration_introduction"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-platform-foundations---Plat-Found-101"},
        {text:"Trailhead Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-platform-foundations-credential"}
      ]}
    ],
    quiz:[
      {domain:"Data Model",q:"Which standard object represents a potential customer who has not yet been qualified?",opts:["Account","Contact","Lead","Opportunity"],correct:2,explanation:"Leads represent unqualified potential customers — once qualified, they are converted into an Account, Contact, and optionally an Opportunity."},
      {domain:"Data Model",q:"What type of relationship enforces ownership, cascades delete to child records, and enables roll-up summary fields?",opts:["Lookup relationship","Many-to-many relationship","Master-Detail relationship","Hierarchical relationship"],correct:2,explanation:"Master-Detail relationships are tighter — the child record's ownership is tied to the parent, deleting the parent deletes all children, and roll-up summary fields can aggregate child data."},
      {domain:"Security Model",q:"Which Salesforce feature sets the most restrictive default level of record access for all users?",opts:["Permission Sets","Role Hierarchy","Organization-Wide Defaults (OWD)","Profiles"],correct:2,explanation:"OWDs set the floor for record access — they define the baseline visibility before any sharing rules, roles, or manual sharing opens access further."},
      {domain:"Security Model",q:"A user can see all records owned by themselves and their subordinates in the role hierarchy. Which OWD setting achieves this?",opts:["Public Read/Write","Public Read Only","Private","Controlled by Parent"],correct:2,explanation:"Private OWD restricts record access to the owner and users above them in the role hierarchy — it is the most restrictive OWD setting."},
      {domain:"Navigation and User Interface",q:"Which Salesforce tool allows users to switch between different apps within the same org?",opts:["Global Search","Setup Menu","App Launcher","Navigation Bar"],correct:2,explanation:"The App Launcher (waffle icon) displays all available apps and lets users switch between them without logging out."},
      {domain:"Salesforce Ecosystem and CRM",q:"What does CRM stand for?",opts:["Customer Resource Management","Customer Relationship Management","Client Record Management","Central Record Model"],correct:1,explanation:"CRM stands for Customer Relationship Management — it refers to systems and strategies for managing interactions with current and potential customers."},
      {domain:"Data Model",q:"Which field type automatically calculates its value from other fields without storing data in the database?",opts:["Text field","Number field","Formula field","Roll-Up Summary field"],correct:2,explanation:"Formula fields calculate their value at runtime from expressions referencing other fields — they are read-only and do not consume storage."},
      {domain:"Core Business Processes",q:"When a Lead is converted in Salesforce, which records are created?",opts:["Account and Case","Contact and Lead","Account, Contact, and optionally an Opportunity","Opportunity and Task"],correct:2,explanation:"Lead conversion creates an Account (or matches to existing), a Contact, and optionally a new Opportunity — field mapping controls which Lead data carries over."},
      {domain:"Core Business Processes",q:"Which report format groups records by a field and shows subtotals for each group?",opts:["Tabular","Summary","Matrix","Joined"],correct:1,explanation:"Summary reports group records by one or more fields and display subtotals — they are the most commonly used report format for grouped analysis."},
      {domain:"Security Model",q:"A user needs access to one extra field that is not on their profile. What is the recommended approach?",opts:["Create a new profile","Edit the existing profile","Assign a Permission Set that includes the field access","Grant the user View All Data"],correct:2,explanation:"Permission Sets grant additional access to specific objects, fields, or features without changing the user's profile — they are the preferred way to extend access for individual users."},
      {domain:"Data Model",q:"What is the maximum number of Master-Detail relationships a custom object can have?",opts:["1","2","3","5"],correct:1,explanation:"A custom object can have at most 2 Master-Detail relationships — this allows a junction object pattern for many-to-many relationships."},
      {domain:"Navigation and User Interface",q:"Where can an admin see a chronological list of all touchpoints (calls, emails, meetings) with a customer on a record?",opts:["Related Lists","Activity Timeline","Chatter Feed","Reports tab"],correct:1,explanation:"The Activity Timeline on a record shows all past and upcoming activities (tasks, events, emails, calls) in chronological order."},
      {domain:"Core Business Processes",q:"Which object tracks a customer service issue from creation to resolution?",opts:["Opportunity","Lead","Task","Case"],correct:3,explanation:"Cases represent customer service issues or questions — they track the issue, its status, the assigned agent, and the resolution history."},
      {domain:"Salesforce Ecosystem and CRM",q:"What is Trailhead?",opts:["Salesforce's paid consulting partner network","Salesforce's free online learning platform for earning badges and certifications","A Salesforce tool for building reports","A data migration tool"],correct:1,explanation:"Trailhead is Salesforce's free, gamified online learning platform — it offers modules, trails, projects, and superbadges for all skill levels and roles."},
      {domain:"Data Model",q:"Which field type stores a reference to another record in the same or different object?",opts:["Text field","Picklist field","Lookup field","Formula field"],correct:2,explanation:"Lookup fields store a reference (the ID) to a related record — they create a link between two objects, like linking a Contact to an Account."},
      {domain:"Core Business Processes",q:"A sales rep needs to log a phone call they just completed with a customer. Which activity type should they use?",opts:["Event","Task — Log a Call","Case","Chatter Post"],correct:1,explanation:"'Log a Call' creates a completed Task record that captures the date, contact, description, and outcome of a call — it appears on the Activity Timeline."},
      {domain:"Navigation and User Interface",q:"Which Salesforce feature lets users create a filtered view of records for a specific object?",opts:["Dashboard","List View","Report","Homepage"],correct:1,explanation:"List Views are filtered, saved queries on an object — users can create personal views or shared views to see relevant subsets of records without running a full report."},
      {domain:"Security Model",q:"Field-Level Security is configured on which Salesforce components?",opts:["Sharing rules","Profiles and Permission Sets","Role hierarchy","OWD settings"],correct:1,explanation:"Field-Level Security (FLS) is set on Profiles and Permission Sets — it controls whether users with that profile/permission set can see or edit specific fields."},
      {domain:"Salesforce Ecosystem and CRM",q:"Which Salesforce marketplace allows customers to install third-party apps and components into their org?",opts:["Trailhead","AppExchange","Salesforce Setup","Developer Console"],correct:1,explanation:"AppExchange is Salesforce's marketplace for pre-built apps, components, and consulting services — managed packages installed from AppExchange extend org functionality."},
      {domain:"Core Business Processes",q:"Which report format allows you to group data by both rows and columns to show a summary grid?",opts:["Tabular","Summary","Matrix","Joined"],correct:2,explanation:"Matrix reports group by both rows and columns and display a summary value at each intersection — useful for showing data like revenue by product and region."}
    ],
    tips:[
      {icon:"🌟",title:"Start with Trailhead",body:"The Salesforce Associate exam closely follows the Admin Beginner trail on Trailhead. Complete each module and earn the badges — the trail covers all exam domains."},
      {icon:"🔐",title:"Master the Security Model",body:"Know OWDs, profiles, permission sets, and role hierarchy — the security model is tested heavily. Understand which layer controls what type of access."},
      {icon:"📊",title:"Know the Standard Objects",body:"Be able to name Account, Contact, Lead, Opportunity, and Case and explain what each represents and how they relate to each other."},
      {icon:"🔗",title:"Relationships Are Key",body:"Understand the difference between Lookup and Master-Detail relationships — the exam tests cascade delete, roll-up summaries, and required vs optional parent."},
      {icon:"📈",title:"Reports and Dashboards",body:"Know the four report formats (Tabular, Summary, Matrix, Joined) and what each is used for — report and dashboard questions appear on every sitting."},
      {icon:"🏆",title:"Use the Exam Guide",body:"Download the official Salesforce Associate exam guide from Trailhead. It lists exact topic weights so you can focus your study time where it matters most."}
    ]
  },

  "Sales Foundations": {
    questions: 60,
    time: 105,
    pass: "65%",
    experience: "No experience required",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-sales-foundations---Sales-101",
    prerequisites: [],
    overview: "The Sales Foundations certification validates foundational knowledge of Sales Cloud and CRM concepts for individuals new to sales technology. The exam covers the sales process, account and contact management, opportunity management, sales productivity tools, and basic reporting — ideal for sales reps, sales operations staff, and anyone adopting Salesforce for the first time.",
    domains: [
      {name:"Sales Cloud Basics",pct:22,color:"#00A1E0",desc:"Understand Sales Cloud features and how they support the end-to-end sales process.",keyTopics:[
        {title:"What Is Sales Cloud",desc:"Sales Cloud is Salesforce's CRM for sales teams — it manages the full sales cycle from lead generation through opportunity close and provides tools for forecasting, collaboration, and analysis."},
        {title:"Sales Process Overview",desc:"A structured sales process moves prospects from Awareness through Consideration to Decision — Sales Cloud stages on Opportunities map to each step of the business's sales methodology."},
        {title:"Sales Console",desc:"The Sales Console is a streamlined UI for sales reps that surfaces account, contact, and opportunity data in one view — it reduces clicks and increases productivity."},
        {title:"Einstein Sales Features",desc:"Einstein Activity Capture automatically logs emails and calendar events; Einstein Lead Scoring prioritizes leads by conversion likelihood using AI."}
      ]},
      {name:"Leads and Accounts",pct:23,color:"#2ECC71",desc:"Manage leads through qualification and conversion, and maintain accurate account and contact records.",keyTopics:[
        {title:"Lead Management",desc:"Leads represent unqualified prospects — they are captured from web forms, campaigns, or manual entry and worked through a qualification process before being converted."},
        {title:"Lead Conversion",desc:"Converting a lead creates an Account, Contact, and optionally an Opportunity — lead field mapping controls which data carries over to the new records."},
        {title:"Account Hierarchy",desc:"Accounts can be linked in a parent-child hierarchy to represent corporate structures — the Account Hierarchy view shows the full organizational relationship tree."},
        {title:"Contact Roles on Opportunities",desc:"Contact Roles define each contact's role in a deal (Decision Maker, Influencer, Economic Buyer) — they help sales reps understand who to engage and how."}
      ]},
      {name:"Opportunity Management",pct:25,color:"#F39C12",desc:"Track deals through stages, manage pipeline, and forecast revenue using Salesforce Opportunities.",keyTopics:[
        {title:"Opportunity Stages",desc:"Stages represent where a deal is in the sales process — each stage has a probability that rolls up into forecasting; customising stages to match the sales methodology improves data quality."},
        {title:"Forecast Categories",desc:"Each stage maps to a forecast category (Pipeline, Best Case, Commit, Closed Won/Lost) — these roll up into collaborative forecasts for management reporting."},
        {title:"Products and Price Books",desc:"Products are what you sell; Price Books set prices per product; Opportunity Line Items link Products to specific Opportunities at the agreed price."},
        {title:"Close Date and Amount",desc:"The Close Date and Amount fields drive pipeline and forecast reporting — keeping them accurate is a core sales hygiene discipline."},
        {title:"Opportunity Teams",desc:"Opportunity Teams let multiple sales reps collaborate on a deal with defined roles — team members can be given read or write access to the opportunity."}
      ]},
      {name:"Sales Productivity",pct:17,color:"#E74C3C",desc:"Use Salesforce productivity tools — activities, email, calendars, and mobile — to work more efficiently.",keyTopics:[
        {title:"Tasks and Events",desc:"Tasks are action items; Events are calendar-based meetings — both log to the Activity Timeline and help track all customer interactions in one place."},
        {title:"Email Integration",desc:"Salesforce integrates with Gmail and Outlook to log emails and sync calendar events automatically — this reduces manual data entry and keeps records current."},
        {title:"Salesforce Mobile App",desc:"The mobile app gives sales reps access to accounts, contacts, opportunities, and tasks from anywhere — it supports logging calls and updating records in the field."},
        {title:"Chatter Collaboration",desc:"Chatter lets sales team members collaborate on deals, share updates, and @mention colleagues directly on opportunity and account records."}
      ]},
      {name:"Reports and Dashboards",pct:13,color:"#1ABC9C",desc:"Use reports and dashboards to track sales performance, pipeline health, and forecast accuracy.",keyTopics:[
        {title:"Sales Reports",desc:"Common sales reports include pipeline by stage, opportunities by owner, and close date reports — Summary and Matrix formats are most useful for sales analysis."},
        {title:"Sales Dashboards",desc:"Sales dashboards typically show pipeline funnel, leaderboards, and quota attainment — each component is powered by a report and refreshes automatically."},
        {title:"Forecast Reports",desc:"Collaborative forecasting reports roll up opportunity amounts by owner, stage, and forecast category — managers use them to review and adjust team forecasts."},
        {title:"List Views for Pipeline Management",desc:"Filtered list views on Opportunities let reps quickly see their open pipeline, deals closing this month, or stalled opportunities without running a full report."}
      ]}
    ],
    studyDays:[
      {tag:"sales-process",focus:"Salesforce Sales Cloud fundamentals: leads, accounts, contacts, and opportunities",topics:[
        {text:"Sales Cloud Basics Trailhead",url:"https://trailhead.salesforce.com/content/learn/modules/sales-cloud-platform-quick-look"},
        {text:"Lead Management",url:"https://help.salesforce.com/s/articleView?id=sf.leads_overview.htm"},
        {text:"Opportunity Management",url:"https://help.salesforce.com/s/articleView?id=sf.opportunities_overview.htm"},
        {text:"Accounts and Contacts",url:"https://help.salesforce.com/s/articleView?id=sf.accounts_overview.htm"},
        {text:"Sales Foundations Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Sales-Cloud-Foundations-Exam-Guide"},
        {text:"Trailmix: Sales Foundations",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-sales-foundations-credential"}
      ]},
      {tag:"sales-tools",focus:"Sales productivity tools: activities, tasks, events, and Salesforce Inbox",topics:[
        {text:"Tasks and Events",url:"https://help.salesforce.com/s/articleView?id=sf.tasks.htm"},
        {text:"Activity Timeline",url:"https://help.salesforce.com/s/articleView?id=sf.activity_timeline.htm"},
        {text:"Sales Cadences",url:"https://help.salesforce.com/s/articleView?id=sf.sales_cadences_intro.htm"},
        {text:"Forecasting Overview",url:"https://help.salesforce.com/s/articleView?id=sf.forecasts3_overview.htm"},
        {text:"Reports for Sales",url:"https://help.salesforce.com/s/articleView?id=sf.reports_overview.htm"},
        {text:"Einstein Activity Capture",url:"https://help.salesforce.com/s/articleView?id=sf.einstein_sales_activity_capture.htm"}
      ]},
      {tag:"exam-prep-sales-found",focus:"Sales Foundations exam prep: lead-to-close process and productivity tools",topics:[
        {text:"Sales Foundations Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Sales-Cloud-Foundations-Exam-Guide"},
        {text:"Sales Cloud Basics Module",url:"https://trailhead.salesforce.com/content/learn/modules/sales-cloud-platform-quick-look"},
        {text:"Lead and Opportunity Management Module",url:"https://trailhead.salesforce.com/content/learn/modules/leads_opportunities_lightning_experience"},
        {text:"Trailmix: Sales Foundations",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-sales-foundations-credential"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-sales-foundations---Sales-Found-101"},
        {text:"Trailhead: Sales Cloud Trail",url:"https://trailhead.salesforce.com/content/learn/trails/sell-using-salesforce-crm"}
      ]}
    ],
    quiz:[
      {domain:"Leads and Accounts",q:"What records are created when a Salesforce Lead is converted?",opts:["Task and Event","Account, Contact, and optionally an Opportunity","Case and Contact","Opportunity and Lead"],correct:1,explanation:"Lead conversion creates an Account (or matches an existing one), a Contact, and optionally an Opportunity — field mapping controls which data carries over."},
      {domain:"Opportunity Management",q:"Which field on an Opportunity determines when it will appear in a monthly forecast?",opts:["Created Date","Last Modified Date","Close Date","Stage"],correct:2,explanation:"Close Date drives forecasting — the opportunity appears in the forecast for the period containing its Close Date, so keeping this accurate is critical for pipeline visibility."},
      {domain:"Sales Cloud Basics",q:"Which Salesforce feature automatically logs emails and calendar events from Gmail or Outlook to Salesforce records?",opts:["Chatter","Einstein Activity Capture","Web-to-Lead","Salesforce Inbox manually"],correct:1,explanation:"Einstein Activity Capture syncs emails and calendar events between the email client and Salesforce automatically, reducing manual logging by sales reps."},
      {domain:"Opportunity Management",q:"A sales rep wants to know which contacts at a prospect company are the decision makers on a deal. Where is this tracked?",opts:["Account Team","Contact Roles on the Opportunity","Opportunity Stage","Lead Source"],correct:1,explanation:"Contact Roles on an Opportunity assign each contact a role (Decision Maker, Influencer, Economic Buyer) — this helps the rep understand the buying committee."},
      {domain:"Opportunity Management",q:"Which Opportunity field rolls up to determine the total value of all open deals in a forecast?",opts:["Stage","Probability","Amount","Lead Source"],correct:2,explanation:"Amount is the deal value — it is multiplied by the stage Probability to calculate weighted pipeline, and rolled up in collaborative forecasting dashboards."},
      {domain:"Sales Productivity",q:"A sales rep just finished a 30-minute discovery call with a prospect. What should they create in Salesforce to record the call?",opts:["A new Lead","A Task using 'Log a Call'","A new Case","An Opportunity"],correct:1,explanation:"'Log a Call' creates a completed Task record capturing the call details — it appears on the Activity Timeline so the full call history is visible to the team."},
      {domain:"Leads and Accounts",q:"Which standard object models a company that a sales team is actively pursuing or doing business with?",opts:["Lead","Contact","Account","Opportunity"],correct:2,explanation:"Accounts represent companies (or individuals in B2C) — they are the central object around which Contacts, Opportunities, Cases, and other records are related."},
      {domain:"Reports and Dashboards",q:"A sales manager wants to see total Opportunity Amount grouped by Stage. Which report format is most appropriate?",opts:["Tabular","Summary","Matrix","Joined"],correct:1,explanation:"Summary reports group records by a field and show subtotals — grouping Opportunities by Stage with a sum of Amount is a classic Summary report use case."},
      {domain:"Opportunity Management",q:"Which forecast category indicates that a sales rep is highly confident a deal will close in the current period?",opts:["Pipeline","Best Case","Commit","Closed Won"],correct:2,explanation:"Commit means the rep is committing to close the deal in the forecast period — it is more confident than Best Case and is used in manager forecast roll-ups."},
      {domain:"Sales Cloud Basics",q:"What is the purpose of a Price Book in Salesforce?",opts:["To store customer billing addresses","To define the prices for products when added to Opportunities","To track competitor pricing","To manage sales commission rates"],correct:1,explanation:"Price Books define the prices at which products are sold — an Opportunity references a Price Book, and Line Items show the products from that Price Book at the agreed price."},
      {domain:"Sales Productivity",q:"Which Salesforce tool lets sales reps collaborate with colleagues by posting updates and @mentioning teammates on an Opportunity record?",opts:["Tasks","Chatter","Reports","Campaigns"],correct:1,explanation:"Chatter is Salesforce's collaboration tool — reps can post updates, share files, ask questions, and @mention colleagues directly on records like Opportunities and Accounts."},
      {domain:"Leads and Accounts",q:"A company has a corporate parent with 5 subsidiary divisions each with their own Account. How should this be modelled?",opts:["Create 6 separate unrelated Accounts","Use an Account Hierarchy with the parent Account linked to child Accounts","Create a custom object for corporate groups","Use Opportunity Teams"],correct:1,explanation:"Account Hierarchy links child Accounts to a parent Account — this models corporate structures and allows roll-up views of all business across a company group."},
      {domain:"Reports and Dashboards",q:"What is the maximum number of report types that can be combined in a Joined report?",opts:["2","3","5","10"],correct:2,explanation:"Joined reports can include up to 5 blocks (report types) — each block can have its own groupings, filters, and columns, displayed side by side in a single report."},
      {domain:"Sales Cloud Basics",q:"Which Salesforce AI feature scores Leads based on their likelihood to convert, helping reps prioritize their work?",opts:["Einstein Opportunity Scoring","Einstein Lead Scoring","Einstein Activity Capture","Einstein Case Classification"],correct:1,explanation:"Einstein Lead Scoring uses machine learning to score leads based on historical conversion patterns — reps can sort their lead list by score to focus on the highest-priority prospects."},
      {domain:"Opportunity Management",q:"A sales manager wants to track which team members are collaborating on a large enterprise deal. Which feature enables this?",opts:["Chatter Groups","Opportunity Teams","Account Teams","Contact Roles"],correct:1,explanation:"Opportunity Teams allow multiple reps to be assigned roles on a single Opportunity — each team member can be given specific access levels and appears on the Opportunity Team related list."},
      {domain:"Sales Productivity",q:"Which Salesforce app allows sales reps to access and update their pipeline on a smartphone while travelling between meetings?",opts:["Salesforce Desktop app","Salesforce Mobile App","Trailhead Go","Heroku app"],correct:1,explanation:"The Salesforce Mobile App (available on iOS and Android) gives reps full access to their Salesforce records, activities, and dashboards from any mobile device."},
      {domain:"Leads and Accounts",q:"A Contact is associated with which primary standard object?",opts:["Lead","Opportunity","Account","Case"],correct:2,explanation:"Contacts are individuals associated with an Account — the Account-Contact relationship is the core of the B2B data model in Salesforce."},
      {domain:"Opportunity Management",q:"Which Opportunity field represents the percentage likelihood of closing a deal and is typically set automatically by the Stage?",opts:["Amount","Close Date","Probability","Lead Source"],correct:2,explanation:"Probability is set by the Opportunity Stage and represents the statistical likelihood of winning the deal — it is used to calculate weighted pipeline in forecast reports."},
      {domain:"Reports and Dashboards",q:"A dashboard component shows a large single number representing total Closed Won revenue this quarter. Which component type is this?",opts:["Bar chart","Funnel chart","Metric","Gauge"],correct:2,explanation:"A Metric dashboard component displays a single aggregate value prominently — it is used for key headline numbers like total revenue, case count, or quota attainment."},
      {domain:"Sales Cloud Basics",q:"Which Salesforce feature guides sales reps through a defined series of steps (stages) based on their sales methodology?",opts:["Approval Process","Opportunity Stages with Sales Path","Flow Builder","Assignment Rules"],correct:1,explanation:"Sales Path visualizes the Opportunity Stages as a progress bar and surfaces coaching notes for each stage — it guides reps through the sales methodology step by step."}
    ],
    tips:[
      {icon:"🎯",title:"Know the Sales Process Objects",body:"Understand Lead, Account, Contact, and Opportunity and how they relate. Lead conversion is heavily tested — know exactly what records are created and what data maps over."},
      {icon:"📅",title:"Close Date Drives Everything",body:"Close Date and Amount are the most important Opportunity fields — they drive pipeline, forecasting, and reports. Know how forecast categories work and which stages map to Commit vs Best Case."},
      {icon:"📞",title:"Activities Are Tested",body:"Know the difference between Tasks (to-dos, Log a Call) and Events (calendar meetings). Both appear on the Activity Timeline. Log a Call is the most common way to record a completed call."},
      {icon:"📊",title:"Dashboard Components",body:"Know the four main dashboard component types — Bar/Line charts, Metric (single number), Gauge, and Funnel — and which use case each serves for a sales manager."},
      {icon:"🏆",title:"Use the Exam Guide",body:"Download the official Sales Foundations exam guide from Trailhead and study each domain. The Opportunity Management domain has the highest weight — prioritize it."}
    ]
  },

  "Marketing Cloud Engagement Foundations": {
    questions: 60,
    time: 105,
    pass: "65%",
    experience: "No experience required",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-marketing-foundations---MC-101",
    prerequisites: [],
    overview: "The Marketing Cloud Engagement Foundations certification is the entry-level credential for Salesforce Marketing Cloud. It validates a foundational understanding of the Marketing Cloud platform, email marketing concepts, audience management, Journey Builder basics, and analytics — designed for marketers new to the platform who want to demonstrate core competency.",
    domains: [
      {name:"Marketing Cloud Overview",pct:22,color:"#00A1E0",desc:"Understand the Marketing Cloud platform, its products, and how it fits in the Salesforce ecosystem.",keyTopics:[
        {title:"Marketing Cloud Products",desc:"Marketing Cloud includes Email Studio, Mobile Studio, Social Studio, Advertising Studio, Journey Builder, Content Builder, and Audience Builder — each addresses a different channel or function."},
        {title:"Business Units",desc:"Business Units segment a Marketing Cloud account by brand, region, or team — each BU has its own users, data, and sending settings while sharing a parent account."},
        {title:"Marketing Cloud Connect",desc:"Marketing Cloud Connect integrates Marketing Cloud with Salesforce CRM, synchronizing Contacts, Leads, and Campaigns — enabling synchronized data and triggered sends."},
        {title:"Subscriber vs Contact",desc:"A Subscriber is a person in a specific list or publication list; a Contact is the unified profile in Contact Builder that de-duplicates across channels using a Contact Key."}
      ]},
      {name:"Email Studio",pct:28,color:"#2ECC71",desc:"Create, test, and send email communications using Email Studio and Content Builder.",keyTopics:[
        {title:"Content Builder",desc:"Content Builder is the unified content management tool in Marketing Cloud — it stores images, HTML blocks, email templates, and content blocks used across all channels."},
        {title:"Email Templates",desc:"Templates define the structure and branding of an email — using templates ensures consistency and lets marketers focus on content rather than layout."},
        {title:"AMPscript Basics",desc:"AMPscript is Marketing Cloud's scripting language used to personalize email content with subscriber data — basic personalization uses %%FieldName%% substitution strings."},
        {title:"Send Classification",desc:"Send Classifications define whether an email is Commercial or Transactional — Commercial sends require unsubscribe handling; Transactional sends bypass unsubscribe for critical messages."},
        {title:"Tracking and Analytics",desc:"Email tracking captures Opens, Clicks, Bounces, Unsubscribes, and Spam Complaints — these metrics appear in Tracking reports and the Send Summary view."}
      ]},
      {name:"Audience Management",pct:25,color:"#F39C12",desc:"Manage subscribers, lists, and data extensions to organize and segment email audiences.",keyTopics:[
        {title:"Lists vs Data Extensions",desc:"Lists are simple flat subscriber tables suitable for small, non-segmented audiences; Data Extensions are relational tables that support complex segmentation and large volumes."},
        {title:"Publication Lists",desc:"Publication Lists group subscribers by interest or preference — subscribers can manage their own subscriptions across lists from a preference centre."},
        {title:"Suppression Lists",desc:"Suppression Lists prevent specific addresses from receiving an email send — used to exclude unsubscribes, competitors, or do-not-contact records."},
        {title:"Subscriber Status",desc:"Subscriber statuses include Active, Unsubscribed, Bounced, and Held — only Active subscribers receive sends; Held subscribers have had 3 or more soft bounces."},
        {title:"Data Import",desc:"Data can be imported into Marketing Cloud via manual file upload, FTP, or API — import activities in Automation Studio schedule recurring imports."}
      ]},
      {name:"Journey Builder",pct:15,color:"#E74C3C",desc:"Build automated customer journeys that send the right message at the right time based on customer behaviour.",keyTopics:[
        {title:"Journey Entry Sources",desc:"Journeys can be triggered by a Data Extension, CRM Campaign, CloudPage form submission, API event, or date — the entry source determines who enters the journey and when."},
        {title:"Activities in Journeys",desc:"Journey activities include Email Send, Wait, Decision Split, Random Split, Engagement Split, Update Contact, and Path Optimizer — each controls the path a contact follows."},
        {title:"Engagement Splits",desc:"Engagement Splits route contacts based on whether they opened or clicked a previous email — they enable behaviour-based branching without manual segmentation."},
        {title:"Journey Goals and Exit Criteria",desc:"A Goal defines what constitutes success in the journey (e.g., a purchase); Exit Criteria remove contacts who meet a condition — both are optional but improve journey effectiveness."}
      ]},
      {name:"Deliverability and Compliance",pct:10,color:"#1ABC9C",desc:"Understand email deliverability best practices and legal compliance requirements for email marketing.",keyTopics:[
        {title:"CAN-SPAM and GDPR",desc:"CAN-SPAM (US) requires a physical address and unsubscribe mechanism in every commercial email; GDPR (EU) requires explicit consent and the right to erasure — both affect Marketing Cloud configuration."},
        {title:"SPF, DKIM, and DMARC",desc:"SPF and DKIM authenticate sending domains and improve deliverability; DMARC builds on both to instruct receivers how to handle unauthenticated messages."},
        {title:"Bounce Management",desc:"Hard bounces (invalid addresses) should be removed immediately; soft bounces (temporary failures) are retried — Marketing Cloud manages bounce handling automatically."},
        {title:"IP Warming",desc:"New sending IPs must be warmed up by gradually increasing send volume — jumping to full volume on a new IP results in poor deliverability and spam filtering."}
      ]}
    ],
    studyDays:[
      {tag:"mc-basics",focus:"Marketing Cloud Engagement foundations: Email Studio, Contact Builder, and Journey Builder basics",topics:[
        {text:"Marketing Cloud Basics Trailhead",url:"https://trailhead.salesforce.com/content/learn/modules/marketing-cloud-basics"},
        {text:"Email Studio Overview",url:"https://help.salesforce.com/s/articleView?id=sf.mc_es_overview.htm"},
        {text:"Contact Builder Overview",url:"https://help.salesforce.com/s/articleView?id=sf.mc_cab_contact_builder.htm"},
        {text:"Journey Builder Overview",url:"https://help.salesforce.com/s/articleView?id=sf.mc_jb_overview.htm"},
        {text:"MC Engagement Foundations Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Marketing-Cloud-Engagement-Foundations-Exam-Guide"},
        {text:"Trailmix: MC Engagement Foundations",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-marketing-cloud-engagement-foundations-credential"}
      ]},
      {tag:"exam-prep-mc-found",focus:"MC Engagement Foundations exam prep: Email Studio and Journey Builder fundamentals",topics:[
        {text:"MC Engagement Foundations Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Marketing-Cloud-Engagement-Foundations-Exam-Guide"},
        {text:"Marketing Cloud Basics",url:"https://trailhead.salesforce.com/content/learn/modules/marketing-cloud-basics"},
        {text:"Email Studio Module",url:"https://trailhead.salesforce.com/content/learn/modules/marketing-cloud-email-studio"},
        {text:"Journey Builder Module",url:"https://trailhead.salesforce.com/content/learn/modules/marketing-cloud-journey-builder"},
        {text:"Trailmix: MC Foundations",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-marketing-cloud-engagement-foundations-credential"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-mc-foundations---MC-Found-101"}
      ]}
    ],
    quiz:[
      {domain:"Email Studio",q:"Which Marketing Cloud tool stores and manages images, HTML blocks, and email templates for use across channels?",opts:["Email Studio","Automation Studio","Content Builder","Journey Builder"],correct:2,explanation:"Content Builder is the unified content management system — all reusable content (images, templates, content blocks) is stored and managed there."},
      {domain:"Audience Management",q:"A marketing team needs to send different promotions to different customer segments using complex SQL-based queries. Which audience type should they use?",opts:["All Subscribers list","Publication List","Suppression List","Data Extension"],correct:3,explanation:"Data Extensions are relational tables that support complex segmentation with SQL queries — they are required for anything beyond simple flat subscriber lists."},
      {domain:"Audience Management",q:"A subscriber has had 3 soft bounces on their email address. What is their subscriber status?",opts:["Active","Unsubscribed","Held","Bounced"],correct:2,explanation:"After 3 soft bounces, Marketing Cloud automatically sets the subscriber status to Held — Held subscribers do not receive future sends until the issue is resolved."},
      {domain:"Journey Builder",q:"Which Journey Builder activity routes contacts down different paths based on whether they opened a previous email?",opts:["Decision Split","Wait activity","Random Split","Update Contact"],correct:0,explanation:"An Engagement Split (a type of Decision Split) routes contacts based on their engagement — opened, clicked, or did not engage — with a previous email in the journey."},
      {domain:"Deliverability and Compliance",q:"Which law requires all commercial emails sent to US recipients to include a physical mailing address and a working unsubscribe mechanism?",opts:["GDPR","CCPA","CAN-SPAM","CASL"],correct:2,explanation:"CAN-SPAM (Controlling the Assault of Non-Solicited Pornography And Marketing Act) governs commercial email in the US — it mandates a postal address and unsubscribe option in every send."},
      {domain:"Email Studio",q:"What is the difference between a Commercial and Transactional send classification?",opts:["Commercial sends are faster; Transactional sends are slower","Commercial sends require an unsubscribe link; Transactional sends bypass unsubscribe for critical messages","Transactional sends can only be used with Data Extensions","Commercial sends require DKIM; Transactional sends do not"],correct:1,explanation:"Commercial sends (marketing emails) require compliance with CAN-SPAM/GDPR unsubscribe requirements. Transactional sends (receipts, password resets) bypass unsubscribe as they are service messages."},
      {domain:"Marketing Cloud Overview",q:"Which Marketing Cloud feature integrates the platform with Salesforce CRM to sync Contacts and Leads?",opts:["Automation Studio","Marketing Cloud Connect","Journey Builder","Contact Builder"],correct:1,explanation:"Marketing Cloud Connect is the integration layer between Marketing Cloud and the Salesforce CRM platform — it synchronizes subscriber data, enables triggered sends from CRM events, and links campaigns."},
      {domain:"Audience Management",q:"A marketer wants to ensure that a list of opted-out customers never receives any marketing emails. Which feature should they use?",opts:["Publication List","Suppression List","Data Extension filter","Journey exit criteria"],correct:1,explanation:"Suppression Lists contain addresses that are excluded from a send — any email address on a suppression list will not receive the send, regardless of other audience membership."},
      {domain:"Email Studio",q:"What does %%FirstName%% represent in a Marketing Cloud email?",opts:["An AMPscript function","A dynamic content rule","A personalization string that substitutes the subscriber's First Name value","A tracking tag"],correct:2,explanation:"%%FieldName%% personalization strings are substituted at send time with the matching field value for each subscriber — %%FirstName%% inserts the subscriber's first name."},
      {domain:"Journey Builder",q:"What is the purpose of a Journey Goal?",opts:["To set the maximum number of emails in a journey","To define the success condition — when a contact achieves the goal they may exit the journey early","To trigger the journey start","To configure the wait period between activities"],correct:1,explanation:"A Journey Goal defines what success looks like — when a contact meets the goal condition (e.g., makes a purchase), they can exit the journey early rather than receiving all remaining activities."},
      {domain:"Marketing Cloud Overview",q:"What is a Business Unit in Marketing Cloud?",opts:["A department within the Salesforce CRM org","A segment of a Marketing Cloud account that has its own users, data, and sending settings","A type of email template","A subscriber segment created in Audience Builder"],correct:1,explanation:"Business Units allow one Marketing Cloud account to be partitioned for different brands, regions, or teams — each BU operates independently but shares the parent account's licence."},
      {domain:"Deliverability and Compliance",q:"What is IP warming?",opts:["Encrypting email content before sending","Gradually increasing send volume from a new IP address to build sender reputation","Setting up SPF and DKIM records","Removing hard bounces from subscriber lists"],correct:1,explanation:"IP warming builds sender reputation on a new sending IP by starting with small volumes and gradually increasing — jumping to full volume immediately causes spam filtering and poor deliverability."},
      {domain:"Audience Management",q:"Which subscriber status indicates the address is valid and will receive future sends?",opts:["Held","Unsubscribed","Bounced","Active"],correct:3,explanation:"Active is the subscriber status for addresses that are valid and have not unsubscribed — only Active subscribers receive sends."},
      {domain:"Email Studio",q:"Which Marketing Cloud tracking metric measures the percentage of delivered emails where the recipient opened the message?",opts:["Click-through rate","Open rate","Bounce rate","Delivery rate"],correct:1,explanation:"Open rate measures how many delivered emails were opened — it is calculated as (Unique Opens / Delivered) × 100 and is a primary engagement metric for email campaigns."},
      {domain:"Journey Builder",q:"A welcome email journey should start when a new subscriber joins a list. Which entry source should be configured?",opts:["API Event","CRM Campaign","Data Extension — with re-entry allowed for new rows","Random Split"],correct:2,explanation:"A Data Extension entry source triggers journey entry when a contact meets the entry criteria in the DE — configuring it to fire on new or updated rows starts the journey when new subscribers are added."},
      {domain:"Marketing Cloud Overview",q:"What is the Contact Key in Marketing Cloud Contact Builder?",opts:["A field used for A/B testing","A unique identifier that links all of a customer's data across channels into one unified profile","The email address used to send to a subscriber","A security token for API authentication"],correct:1,explanation:"Contact Key is the unique identifier for a Contact in Contact Builder — it de-duplicates customer records across channels, linking email, mobile, and CRM data into one profile."},
      {domain:"Deliverability and Compliance",q:"Which email authentication protocol allows a domain owner to specify which mail servers are authorized to send email on their behalf?",opts:["DKIM","DMARC","SPF","TLS"],correct:2,explanation:"SPF (Sender Policy Framework) is a DNS record that lists the IP addresses authorized to send email for a domain — receiving servers check SPF to detect spoofed senders."},
      {domain:"Email Studio",q:"A company sends order confirmation emails that customers must receive regardless of their marketing opt-out status. Which send classification should be used?",opts:["Commercial","Promotional","Transactional","Bulk"],correct:2,explanation:"Transactional send classification is used for service messages (order confirmations, password resets) — these bypass unsubscribe handling because they are critical non-marketing communications."},
      {domain:"Audience Management",q:"What is the key difference between a List and a Data Extension in Marketing Cloud?",opts:["Lists are only for SMS; Data Extensions are for email","Lists are flat subscriber tables limited in scale; Data Extensions are relational tables supporting complex segmentation and large volumes","Data Extensions require AMPscript; Lists do not","Lists are free; Data Extensions have additional cost"],correct:1,explanation:"Lists are simple and work for small, basic audiences; Data Extensions are more powerful — they are relational, support SQL queries and complex joins, and are required for enterprise-scale marketing."},
      {domain:"Journey Builder",q:"Which Journey Builder activity pauses a contact's progression for a defined period before moving them to the next step?",opts:["Decision Split","Random Split","Wait","Engagement Split"],correct:2,explanation:"The Wait activity holds a contact in the journey for a specified duration (hours, days) or until a specific date before advancing them to the next activity."}
    ],
    tips:[
      {icon:"📧",title:"Content Builder Is Central",body:"All email content is managed in Content Builder. Know its structure — folders, templates, content blocks, and images — and how it relates to Email Studio."},
      {icon:"👥",title:"Lists vs Data Extensions",body:"This distinction is heavily tested. Lists are simple and limited; Data Extensions are relational and scalable. Know when to use each and the difference in subscriber management."},
      {icon:"⚖️",title:"Know CAN-SPAM and GDPR",body:"Compliance questions appear on every exam. Know the CAN-SPAM requirements (postal address, unsubscribe, honest subject lines) and the core GDPR principles (consent, right to erasure)."},
      {icon:"🗺️",title:"Journey Builder Activities",body:"Know all the key Journey activities — Email Send, Wait, Decision Split, Engagement Split, Random Split, Update Contact. Scenario questions test which activity to use in a given situation."},
      {icon:"📊",title:"Email Metrics",body:"Know the key email metrics — Open Rate, Click-Through Rate, Bounce Rate, Unsubscribe Rate — and what each measures. Hard vs soft bounce distinction is commonly tested."},
      {icon:"🏆",title:"Use the Official Cert Prep",body:"Follow the Trailhead Marketing Cloud Basics trail and the Email Marketing Basics module — they map directly to the exam domains and provide hands-on practice."}
    ]
  },

  "Tableau Desktop Foundations": {
    questions: 45,
    time: 60,
    pass: "70%",
    experience: "No experience required",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-strategy-designer---Plat-UX-102",
    prerequisites: [],
    overview: "The Tableau Desktop Foundations certification is the entry-level credential for Tableau, validating foundational skills in connecting to data, building visualizations, and creating dashboards. It is designed for those new to Tableau who want to demonstrate they can use the tool for basic data analysis and business intelligence tasks.",
    domains: [
      {name:"Connecting to Data",pct:23,color:"#00A1E0",desc:"Connect Tableau to various data sources and understand the difference between live and extract connections.",keyTopics:[
        {title:"Data Source Types",desc:"Tableau connects to files (Excel, CSV, JSON), databases (SQL Server, MySQL, PostgreSQL), cloud sources (Salesforce, Google Sheets, BigQuery), and web data connectors."},
        {title:"Live vs Extract",desc:"Live connections query the source database in real time; Extracts (.hyper files) are snapshots of data stored in Tableau's optimized format — faster for analysis but require refreshing."},
        {title:"Data Interpreter",desc:"Data Interpreter cleans messy Excel files by identifying and removing headers, footers, and formatting that would otherwise confuse Tableau's data model."},
        {title:"Unions and Joins",desc:"Unions stack rows from similar tables; Joins combine columns from related tables using a key — understanding when to use each is essential for multi-table data models."}
      ]},
      {name:"Visual Analytics",pct:30,color:"#2ECC71",desc:"Build charts, maps, and visualizations using Tableau's Show Me panel and Marks card.",keyTopics:[
        {title:"Dimensions vs Measures",desc:"Dimensions are categorical fields (discrete) that group data; Measures are numeric fields (continuous) that are aggregated — this distinction drives everything in Tableau."},
        {title:"Show Me Panel",desc:"Show Me suggests appropriate chart types based on the fields you have selected — it is the fastest way to explore which visualization suits your data."},
        {title:"Marks Card",desc:"The Marks card controls Color, Size, Label, Detail, and Tooltip for each mark — it is the primary tool for customizing how data points are visually encoded."},
        {title:"Filters",desc:"Tableau has four filter types: Extract, Data Source, Context, and Dimension/Measure filters — they operate in this order of precedence and each serves a different purpose."},
        {title:"Geographic Maps",desc:"Tableau auto-recognizes geographic fields (Country, State, City) and can create filled maps, symbol maps, and density maps — geographic roles must be assigned to ambiguous fields."}
      ]},
      {name:"Calculations",pct:22,color:"#F39C12",desc:"Create basic calculated fields, use built-in functions, and understand aggregation in Tableau.",keyTopics:[
        {title:"Calculated Fields",desc:"Calculated fields create new fields using Tableau's formula language — they can reference existing fields, functions, and parameters to derive new values."},
        {title:"Aggregation Functions",desc:"SUM, AVG, MIN, MAX, COUNT, COUNTD are the core aggregation functions — they determine how Tableau rolls up measure values when dimensions are added to the view."},
        {title:"String and Date Functions",desc:"String functions (LEFT, REPLACE, CONTAINS, LEN) and date functions (DATEPART, DATEDIFF, TODAY) are commonly used to clean and transform data in calculated fields."},
        {title:"Table Calculations",desc:"Table calculations compute values relative to other values in the view (RUNNING_SUM, WINDOW_AVG, RANK) — they compute after the query returns data, not in the database."}
      ]},
      {name:"Dashboards and Stories",pct:15,color:"#E74C3C",desc:"Assemble multiple views into interactive dashboards and build stories to communicate insights.",keyTopics:[
        {title:"Dashboard Layout",desc:"Dashboards use tiled and floating layout containers — tiled objects snap to a grid for clean alignment; floating objects can be placed anywhere with precise control."},
        {title:"Dashboard Actions",desc:"Filter, Highlight, and URL actions connect views in a dashboard — Filter actions let users click a mark to filter other views, creating interactive exploration experiences."},
        {title:"Device Designer",desc:"Device Designer lets you create separate layouts for Phone, Tablet, and Desktop — the dashboard automatically shows the right layout for the viewer's device."},
        {title:"Stories",desc:"Stories are sequences of story points — each point is a saved view or dashboard with an optional caption — used to walk an audience through a data-driven narrative."}
      ]},
      {name:"Tableau Concepts",pct:10,color:"#1ABC9C",desc:"Understand core Tableau concepts including the data model, LOD expressions, and the Tableau product family.",keyTopics:[
        {title:"Tableau Product Family",desc:"Tableau Desktop creates content; Tableau Server/Cloud publishes and shares it; Tableau Prep Builder cleans and shapes data — understand the role of each product."},
        {title:"LOD Expressions",desc:"Level of Detail (LOD) expressions — FIXED, INCLUDE, EXCLUDE — let you compute aggregations at a different granularity than the view, unlocking advanced analytics."},
        {title:"Parameters",desc:"Parameters are dynamic values that users can change — they connect to filters, reference lines, calculated fields, and other elements to make views interactive."},
        {title:"Tooltips",desc:"Tooltips appear on hover and can show field values, custom text, or even Viz in Tooltip — customizing tooltips improves the reader's ability to understand data points."}
      ]}
    ],
    studyDays:[
      {tag:"tableau-desktop-basics",focus:"Tableau Desktop fundamentals: connecting to data, building views, and basic charts",topics:[
        {text:"Tableau Desktop Getting Started",url:"https://help.tableau.com/current/pro/desktop/en-us/getstarted_overview.htm"},
        {text:"Connecting to Data Sources",url:"https://help.tableau.com/current/pro/desktop/en-us/basicconnectoverview.htm"},
        {text:"Building Basic Charts",url:"https://help.tableau.com/current/pro/desktop/en-us/buildmanual_shelves.htm"},
        {text:"Tableau Desktop Foundations Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Tableau-Desktop-Specialist-Exam-Guide"},
        {text:"Calculated Fields",url:"https://help.tableau.com/current/pro/desktop/en-us/calculations_calculatedfields_create.htm"},
        {text:"Tableau Free Training Videos",url:"https://www.tableau.com/learn/training"}
      ]},
      {tag:"exam-prep-tableau-found",focus:"Tableau Desktop Foundations exam prep: charts, calculations, and data connections",topics:[
        {text:"Tableau Desktop Foundations Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Tableau-Desktop-Specialist-Exam-Guide"},
        {text:"Tableau Help Documentation",url:"https://help.tableau.com"},
        {text:"Tableau Training Videos",url:"https://www.tableau.com/learn/training"},
        {text:"Trailmix: Tableau Desktop",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/tableau-desktop-specialist"},
        {text:"Exam Registration",url:"https://trailhead.salesforce.com/credentials/tableaudesktopspecialist"},
        {text:"Tableau Public Gallery",url:"https://public.tableau.com/app/discover"}
      ]}
    ],
    quiz:[
      {domain:"Connecting to Data",q:"What is the main advantage of a Tableau Extract (.hyper file) over a Live connection?",opts:["It is more secure","It allows real-time data updates","It is faster for analysis because data is stored in Tableau's optimized format","It supports more data sources"],correct:2,explanation:"Extracts store data in Tableau's columnar .hyper format, which is highly optimized for fast querying — they are faster for analysis but require refreshing to get updated data."},
      {domain:"Visual Analytics",q:"In Tableau, which type of field is typically used to create groups and headers in a view?",opts:["Measure","Continuous field","Dimension","Aggregation"],correct:2,explanation:"Dimensions are categorical (usually discrete) fields — they create headers, group data, and define the level of detail in a view. Measures provide the numbers being aggregated."},
      {domain:"Visual Analytics",q:"A user wants Tableau to suggest the best chart type for the fields they have selected. Which feature does this?",opts:["Marks card","Analytics pane","Show Me panel","Data Interpreter"],correct:2,explanation:"Show Me automatically highlights appropriate chart types based on the number and type of fields selected — it is the fastest way to explore visualization options."},
      {domain:"Calculations",q:"Which Tableau calculation type computes values relative to other marks in the current view, such as running total or percent of total?",opts:["Calculated field","LOD expression","Table calculation","Parameter"],correct:2,explanation:"Table calculations compute after the query returns data and reference other values in the same view — RUNNING_SUM, WINDOW_AVG, and PERCENT_OF_TOTAL are common examples."},
      {domain:"Visual Analytics",q:"A field contains US state names but Tableau is not recognizing it as geographic. What should the user do?",opts:["Change the field type to Number","Assign a Geographic Role of State/Province to the field","Switch to a Live connection","Use Data Interpreter"],correct:1,explanation:"Assigning a Geographic Role tells Tableau what type of geographic data the field represents — without this, Tableau cannot generate a map from the field."},
      {domain:"Dashboards and Stories",q:"Which dashboard layout type snaps objects to a grid and is recommended for clean, aligned dashboards?",opts:["Floating layout","Tiled layout","Device layout","Story layout"],correct:1,explanation:"Tiled objects snap to a grid and resize relative to each other — this creates clean, aligned dashboards that resize well across different screen sizes."},
      {domain:"Dashboards and Stories",q:"A dashboard has two charts. Clicking a bar in Chart A should filter Chart B to show only the related data. Which feature enables this?",opts:["Highlight action","URL action","Filter action","Parameter action"],correct:2,explanation:"A Filter action uses a click on a mark in one view to filter another view — it is the most common type of dashboard interactivity in Tableau."},
      {domain:"Calculations",q:"Which aggregation function counts the number of unique values in a field?",opts:["COUNT","SUM","COUNTD","AVG"],correct:2,explanation:"COUNTD (Count Distinct) returns the number of unique values — COUNT includes duplicates, while COUNTD de-duplicates before counting."},
      {domain:"Connecting to Data",q:"A user has two Excel sheets with the same column structure that should be combined into one table. Which Tableau feature achieves this?",opts:["Join","Blend","Union","Extract"],correct:2,explanation:"Union stacks rows from multiple tables with the same structure into a single table — it is appropriate when you want to combine data from similar sources, not join on a key."},
      {domain:"Tableau Concepts",q:"What does a FIXED LOD expression do?",opts:["Computes at the view's level of detail","Includes additional dimensions in the computation","Excludes dimensions from the view level of detail","Computes at a specified level of detail, regardless of what dimensions are in the view"],correct:3,explanation:"FIXED LOD expressions compute at a level of detail you define with dimensions, ignoring what dimensions are in the view — for example, {FIXED [Customer]: SUM([Sales])} always computes per customer."},
      {domain:"Visual Analytics",q:"Which Marks card property controls the colour of marks based on a field value?",opts:["Size","Detail","Label","Color"],correct:3,explanation:"Dropping a field onto the Color property of the Marks card encodes that field's values as different colours on each mark — it is one of the most powerful visual encodings in Tableau."},
      {domain:"Tableau Concepts",q:"Which Tableau product is used to publish and share workbooks so others can view them in a browser without Tableau Desktop?",opts:["Tableau Prep Builder","Tableau Desktop","Tableau Server or Tableau Cloud","Tableau Public"],correct:2,explanation:"Tableau Server (self-hosted) and Tableau Cloud (SaaS) are the platforms for publishing and sharing workbooks — viewers access them via a browser without needing a Desktop licence."},
      {domain:"Calculations",q:"A calculated field needs to return the first 3 characters of a string field. Which function should be used?",opts:["CONTAINS","LEN","LEFT","MID"],correct:2,explanation:"LEFT(string, number) returns a specified number of characters from the left side of a string — LEFT([Product Code], 3) would return the first 3 characters."},
      {domain:"Connecting to Data",q:"What does the Tableau Data Interpreter do?",opts:["Translates data between different languages","Cleans messy Excel files by removing headers, footers, and formatting that would interfere with analysis","Converts Live connections to Extracts","Generates calculated fields automatically from data patterns"],correct:1,explanation:"Data Interpreter detects and removes merged cells, headers, footers, and other Excel formatting that would confuse Tableau's data ingestion — it is offered automatically when connecting to Excel files."},
      {domain:"Visual Analytics",q:"A user places a Date field on Columns and a Sales measure on Rows. What chart type does Tableau create by default?",opts:["Bar chart","Scatter plot","Line chart","Map"],correct:2,explanation:"When a continuous date is on Columns and a measure on Rows, Tableau's default mark type is Line — this creates a time-series line chart."},
      {domain:"Dashboards and Stories",q:"What is a Tableau Story?",opts:["A type of calculated field","A sequence of worksheets or dashboards with captions that guide viewers through a data narrative","A type of dashboard action","A data source annotation"],correct:1,explanation:"Tableau Stories are sequences of story points — each point shows a worksheet or dashboard with an optional caption — they are used to present a structured data narrative or presentation."},
      {domain:"Tableau Concepts",q:"What is a Parameter in Tableau?",opts:["A type of filter that applies to all worksheets","A dynamic placeholder value that users can change, enabling interactive and what-if analysis","A calculated field that uses LOD expressions","A connection setting for Extract refresh"],correct:1,explanation:"Parameters are user-adjustable values — they can be used in calculated fields, filters, reference lines, and other places to make views interactive and enable scenario analysis."},
      {domain:"Visual Analytics",q:"Which filter type in Tableau has the highest priority and filters data before other filter types are applied?",opts:["Dimension filter","Measure filter","Context filter","Extract filter"],correct:3,explanation:"Extract filters are applied first (when creating the extract), followed by Data Source filters, Context filters, and then Dimension/Measure filters — Context filters have priority over Dimension/Measure filters."},
      {domain:"Calculations",q:"Which table calculation returns the cumulative sum of a measure across all previous rows in the view?",opts:["WINDOW_AVG","RANK","RUNNING_SUM","PERCENT_OF_TOTAL"],correct:2,explanation:"RUNNING_SUM computes the cumulative (running) total of a measure from the first row to the current row — it is commonly used for cumulative revenue or count charts."},
      {domain:"Connecting to Data",q:"A user wants to combine data from an Orders table and a Customers table using the CustomerID field. Which operation should they use?",opts:["Union","Blend","Join","Extract"],correct:2,explanation:"A Join combines columns from two related tables using a matching key field — joining Orders to Customers on CustomerID adds customer attributes to each order row."}
    ],
    tips:[
      {icon:"📊",title:"Dimensions vs Measures Is Everything",body:"The dimension/measure distinction is the most fundamental concept in Tableau. Dimensions group and categorize (discrete headers); Measures aggregate (continuous numbers). Get this right and the rest of the tool makes sense."},
      {icon:"🗺️",title:"Show Me Is Your Starting Point",body:"When in doubt about which chart to build, use Show Me. The exam may describe a scenario and ask which chart type is most appropriate — remember Show Me's logic: 1 measure = bar; 1 date + 1 measure = line; 2 measures = scatter."},
      {icon:"🔢",title:"Know Your Aggregations",body:"SUM, AVG, MIN, MAX, COUNT, COUNTD — know what each does and when to use it. COUNTD is commonly tested because beginners confuse it with COUNT."},
      {icon:"⚙️",title:"Filter Order of Operations",body:"Extract → Data Source → Context → Dimension/Measure — this order matters. Context filters are frequently tested because they affect which other filters can reference them."},
      {icon:"🎛️",title:"Parameters Make Views Interactive",body:"Parameters are reusable dynamic values. Know how to create one, connect it to a calculated field, and use it in a filter — parameter questions appear on the exam."},
      {icon:"🏆",title:"Practice on Tableau Public",body:"Download Tableau Desktop's free trial and practice with the sample Superstore dataset. The exam tests practical knowledge — building vizzes hands-on is more effective than reading alone."}
    ]
  },

  "MuleSoft Integration Foundations": {
    questions: 60,
    time: 105,
    pass: "65%",
    experience: "No experience required",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-mule-foundations---Mule-101",
    prerequisites: [],
    overview: "The MuleSoft Integration Foundations certification validates entry-level knowledge of integration concepts, APIs, and the MuleSoft Anypoint Platform. It is designed for those new to integration who want to understand how APIs and integrations work and how MuleSoft fits in the broader technology landscape.",
    domains: [
      {name:"Integration Concepts",pct:25,color:"#00A1E0",desc:"Understand what integration is, why it matters, and the key patterns used to connect systems.",keyTopics:[
        {title:"What Is Integration",desc:"Integration connects different systems so they can share data and functionality — without integration, businesses operate in siloed applications that cannot communicate."},
        {title:"Point-to-Point vs Hub-and-Spoke",desc:"Point-to-point connects each system directly, creating a spaghetti architecture; hub-and-spoke routes all integrations through a central platform, reducing complexity."},
        {title:"Synchronous vs Asynchronous",desc:"Synchronous integrations wait for a response (real-time); asynchronous integrations fire and continue without waiting (batch, events) — the choice depends on latency and reliability needs."},
        {title:"APIs vs ETL vs Messaging",desc:"APIs expose functionality on demand; ETL moves bulk data between systems on a schedule; messaging queues deliver events reliably — each pattern suits different use cases."}
      ]},
      {name:"API Basics",pct:25,color:"#2ECC71",desc:"Understand what APIs are, how REST APIs work, and the role APIs play in modern integration.",keyTopics:[
        {title:"What Is an API",desc:"An API (Application Programming Interface) is a contract that defines how software components communicate — REST APIs use HTTP and JSON/XML to exchange data over the web."},
        {title:"REST Fundamentals",desc:"REST APIs use HTTP methods (GET, POST, PUT, PATCH, DELETE) and URLs to identify resources — understanding these methods and status codes is foundational for any integration work."},
        {title:"API Specification",desc:"API specifications (RAML, OpenAPI/Swagger) define an API's endpoints, data types, and behavior before any code is written — they enable design-first API development."},
        {title:"API Security",desc:"APIs are secured with API keys, OAuth 2.0 tokens, or JWT — understanding authentication vs authorization is essential for building safe integrations."}
      ]},
      {name:"Anypoint Platform Overview",pct:25,color:"#F39C12",desc:"Navigate the MuleSoft Anypoint Platform and understand its key components and tools.",keyTopics:[
        {title:"Anypoint Studio",desc:"Anypoint Studio is the Eclipse-based IDE for building Mule applications — it provides a visual flow designer, connectors, and built-in testing capabilities."},
        {title:"Anypoint Exchange",desc:"Anypoint Exchange is MuleSoft's marketplace for reusable assets — APIs, connectors, templates, and examples that teams can discover and reuse across projects."},
        {title:"Runtime Manager",desc:"Runtime Manager deploys and manages Mule applications on CloudHub (MuleSoft's iPaaS) or on-premises runtimes — it provides monitoring, logging, and alerting."},
        {title:"API Manager",desc:"API Manager applies policies (rate limiting, authentication, caching) to published APIs — it is the control plane for enforcing API governance without changing application code."}
      ]},
      {name:"Mule Applications",pct:15,color:"#E74C3C",desc:"Understand the building blocks of a Mule application — flows, connectors, and transformations.",keyTopics:[
        {title:"Flows and Sub-flows",desc:"Flows are the basic processing unit in Mule — they consist of a source (trigger), processing components, and an optional target; sub-flows are reusable processing logic without a trigger."},
        {title:"Connectors",desc:"Connectors integrate Mule with external systems (HTTP, Database, Salesforce, File, SFTP) — each connector provides pre-built operations to read, write, and listen for events."},
        {title:"DataWeave Basics",desc:"DataWeave is MuleSoft's data transformation language — it converts between formats (JSON, XML, CSV) and restructures data payloads as they flow through a Mule application."},
        {title:"Error Handling",desc:"On Error Continue allows a flow to continue after an error; On Error Propagate re-throws the error to the parent flow — every integration should handle failures gracefully."}
      ]},
      {name:"API-led Connectivity",pct:10,color:"#1ABC9C",desc:"Understand MuleSoft's API-led connectivity methodology and the three API layers.",keyTopics:[
        {title:"System APIs",desc:"System APIs expose data from backend systems (databases, ERPs, Salesforce) with no transformation — they are the connection point to core systems of record."},
        {title:"Process APIs",desc:"Process APIs orchestrate calls to multiple System APIs and apply business logic — they are the business layer, combining and transforming data for specific use cases."},
        {title:"Experience APIs",desc:"Experience APIs tailor data for specific consumers (mobile app, web portal, partner) — they are the presentation layer and change frequently as consumer needs evolve."},
        {title:"Benefits of API-led",desc:"API-led connectivity enables reuse, reduces duplication, and makes integrations composable — a System API built once can serve multiple Process APIs without rebuilding."}
      ]}
    ],
    studyDays:[
      {tag:"mulesoft-basics",focus:"MuleSoft integration fundamentals: Anypoint Platform, Mule flows, and connector basics",topics:[
        {text:"MuleSoft Integration Foundations Exam Guide",url:"https://trailhead.salesforce.com/help?article=MuleSoft-Certified-Integration-Foundations-Exam-Guide"},
        {text:"Anypoint Platform Overview",url:"https://docs.mulesoft.com/general/"},
        {text:"MuleSoft Basics Trailhead",url:"https://trailhead.salesforce.com/content/learn/modules/mulesoft-basics"},
        {text:"Mule 4 Overview",url:"https://docs.mulesoft.com/mule-runtime/latest/"},
        {text:"DataWeave Basics",url:"https://docs.mulesoft.com/dataweave/latest/"},
        {text:"Trailmix: MuleSoft Integration Foundations",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/mulesoft-integration-foundations"}
      ]},
      {tag:"exam-prep-mule-found",focus:"MuleSoft Integration Foundations exam prep: Anypoint Platform and basic integration concepts",topics:[
        {text:"MuleSoft Integration Foundations Exam Guide",url:"https://trailhead.salesforce.com/help?article=MuleSoft-Certified-Integration-Foundations-Exam-Guide"},
        {text:"MuleSoft Basics Module",url:"https://trailhead.salesforce.com/content/learn/modules/mulesoft-basics"},
        {text:"Anypoint Platform Docs",url:"https://docs.mulesoft.com/"},
        {text:"DataWeave Playground",url:"https://dataweave.mulesoft.com/learn/playground"},
        {text:"Trailmix: MuleSoft Foundations",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/mulesoft-integration-foundations"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-mule-foundations---Mule-Found-101"}
      ]}
    ],
    quiz:[
      {domain:"Integration Concepts",q:"What problem does integration primarily solve?",opts:["Improving UI design","Connecting siloed systems so they can share data and functionality","Securing APIs from attacks","Reducing database storage costs"],correct:1,explanation:"Integration connects disparate systems so they can exchange data and work together — without integration, businesses face data silos, manual re-entry, and disconnected processes."},
      {domain:"Integration Concepts",q:"Which integration topology routes all system communications through a central platform?",opts:["Point-to-point","Peer-to-peer mesh","Hub-and-spoke","Direct connection"],correct:2,explanation:"Hub-and-spoke architecture routes all integrations through a central integration platform — this reduces the number of connections from O(n²) to O(n) compared to point-to-point."},
      {domain:"API Basics",q:"Which HTTP method is used to retrieve a resource from a REST API without modifying it?",opts:["POST","PUT","DELETE","GET"],correct:3,explanation:"GET is the HTTP method for reading/retrieving resources — it is idempotent (can be called multiple times without side effects) and should not modify server state."},
      {domain:"API Basics",q:"What HTTP status code indicates a resource was successfully created?",opts:["200 OK","201 Created","404 Not Found","500 Internal Server Error"],correct:1,explanation:"201 Created indicates that a POST request successfully created a new resource — the response typically includes a Location header with the new resource's URL."},
      {domain:"Anypoint Platform Overview",q:"Which Anypoint Platform component is used to deploy and monitor Mule applications?",opts:["Anypoint Studio","Anypoint Exchange","Runtime Manager","API Manager"],correct:2,explanation:"Runtime Manager is the deployment and operations tool — it deploys Mule apps to CloudHub or on-premises runtimes and provides monitoring, logging, and alerting."},
      {domain:"Anypoint Platform Overview",q:"What is Anypoint Exchange?",opts:["A marketplace for buying Salesforce licences","A repository of reusable API specifications, connectors, templates, and examples","A tool for testing REST APIs","A cloud runtime for Mule applications"],correct:1,explanation:"Anypoint Exchange is MuleSoft's asset marketplace — teams publish and discover reusable APIs, connectors, and templates, enabling reuse and reducing duplication across projects."},
      {domain:"API Basics",q:"What is the purpose of an API specification such as RAML or OpenAPI?",opts:["To deploy APIs to production","To define an API's endpoints, data types, and behavior before any code is written","To monitor API performance","To authenticate API consumers"],correct:1,explanation:"API specifications define the contract for an API — what endpoints exist, what data they accept and return — enabling design-first development and documentation."},
      {domain:"Mule Applications",q:"In a Mule flow, what component triggers the flow to start processing?",opts:["A processor","A transformer","A source (trigger)","An error handler"],correct:2,explanation:"Every Mule flow starts with a source — an HTTP listener, scheduler, or connector that triggers the flow when an event occurs (an HTTP request arrives, a schedule fires, a message lands on a queue)."},
      {domain:"Mule Applications",q:"What is DataWeave in MuleSoft?",opts:["A deployment pipeline tool","A data transformation language used to convert and restructure payloads in Mule flows","A security policy for API authentication","A monitoring dashboard component"],correct:1,explanation:"DataWeave is MuleSoft's native data transformation language — it converts between formats (JSON, XML, CSV) and restructures data as it flows through Mule applications."},
      {domain:"API-led Connectivity",q:"Which API layer in API-led connectivity is responsible for exposing backend system data with no business logic?",opts:["Experience API","Process API","System API","Integration API"],correct:2,explanation:"System APIs connect to and expose data from backend systems of record (databases, ERPs, Salesforce) — they contain no business logic and change only when the underlying system changes."},
      {domain:"API-led Connectivity",q:"A Process API needs to combine customer data from a CRM System API and order data from an ERP System API. What is the Process API's role?",opts:["To expose the raw data directly to consumers","To apply business logic by orchestrating calls to both System APIs and combining the results","To store the combined data in a database","To authenticate the consumer before forwarding the request"],correct:1,explanation:"Process APIs implement business logic and orchestrate multiple System API calls — they combine, enrich, and transform data for specific business processes without connecting directly to systems."},
      {domain:"Integration Concepts",q:"Which integration pattern is most appropriate when a large file of records needs to be transferred between systems nightly?",opts:["Synchronous REST API call","Batch data synchronization","Real-time event streaming","Point-to-point direct database connection"],correct:1,explanation:"Batch data synchronization is designed for large-volume, scheduled data transfers — it is more efficient and reliable than real-time APIs for moving bulk data on a schedule."},
      {domain:"Anypoint Platform Overview",q:"What does API Manager allow you to do without changing your Mule application code?",opts:["Redesign the data model","Apply policies (rate limiting, authentication, caching) to APIs","Redeploy apps to a different CloudHub region","Merge RAML specifications from different projects"],correct:1,explanation:"API Manager applies governance policies to published APIs declaratively — policies like rate limiting and OAuth enforcement are applied at the gateway layer without modifying application code."},
      {domain:"API Basics",q:"What is the difference between authentication and authorization in the context of APIs?",opts:["They are synonyms for the same concept","Authentication verifies who the caller is; authorization determines what they are allowed to do","Authentication is for users; authorization is for applications only","Authorization happens before authentication"],correct:1,explanation:"Authentication verifies identity (who are you?) while authorization determines access rights (what are you allowed to do?) — both are required for secure APIs."},
      {domain:"Mule Applications",q:"Which error handling strategy allows a Mule flow to continue processing after catching an error?",opts:["On Error Propagate","Raise Error","On Error Continue","Try-Catch"],correct:2,explanation:"On Error Continue handles the error within the error handler and allows the flow to continue normally — On Error Propagate re-throws the error to the parent flow or caller."},
      {domain:"API-led Connectivity",q:"Which API layer would you build to provide a tailored response for a mobile app that needs a simplified view of customer data?",opts:["System API","Process API","Experience API","Database API"],correct:2,explanation:"Experience APIs tailor data for specific consumers — a mobile app needs a lightweight, simplified payload, so the Experience API trims and formats the data from underlying Process APIs."},
      {domain:"Anypoint Platform Overview",q:"Which Anypoint Platform tool is used to build and test Mule applications locally before deployment?",opts:["Runtime Manager","API Manager","Anypoint Exchange","Anypoint Studio"],correct:3,explanation:"Anypoint Studio is the development IDE — developers build flows, configure connectors, write DataWeave, and run local unit tests before deploying to CloudHub or on-premises."},
      {domain:"Integration Concepts",q:"A company's Salesforce and ERP system need to exchange data every hour. Which integration approach is most appropriate?",opts:["Real-time synchronous API call on every record change","Batch synchronization running on an hourly schedule","Direct database replication","Point-to-point TCP socket connection"],correct:1,explanation:"Hourly batch synchronization is appropriate when near-real-time is not required — it is more efficient than polling every record change and simpler than a streaming event architecture."},
      {domain:"Mule Applications",q:"What is the purpose of a Mule connector?",opts:["To define the API specification","To provide pre-built operations for integrating with external systems like Salesforce, HTTP, and databases","To deploy apps to CloudHub","To test DataWeave transformations"],correct:1,explanation:"Connectors are pre-built integration components that abstract the complexity of connecting to external systems — they expose operations (query, insert, listen) without requiring custom code."},
      {domain:"API Basics",q:"Which HTTP method is typically used to update an existing resource partially?",opts:["GET","POST","PUT","PATCH"],correct:3,explanation:"PATCH is used for partial updates — it sends only the fields to be changed, whereas PUT replaces the entire resource. PATCH is more efficient when only a few fields need updating."}
    ],
    tips:[
      {icon:"🔗",title:"API-led Is the Core Concept",body:"API-led connectivity — System, Process, Experience API layers — is the most important concept for this exam. Understand what each layer does and why the separation matters."},
      {icon:"🌐",title:"Know REST HTTP Methods",body:"GET, POST, PUT, PATCH, DELETE and their corresponding status codes (200, 201, 204, 400, 401, 404, 500) are tested. Know which method to use for each CRUD operation."},
      {icon:"🏭",title:"Anypoint Platform Components",body:"Know the role of each component — Studio (build), Exchange (discover/share), Runtime Manager (deploy/monitor), API Manager (govern). Scenario questions test which tool to use for each task."},
      {icon:"⚖️",title:"Sync vs Async",body:"Integration pattern selection (synchronous vs asynchronous, batch vs real-time) is tested with scenario questions. Map each pattern to its appropriate use case."},
      {icon:"🏆",title:"Use the Free Trial",body:"Sign up for a free Anypoint Platform trial and work through the MuleSoft Basics Trailhead module with hands-on exercises — the exam tests practical knowledge of the platform."}
    ]
  },

});
