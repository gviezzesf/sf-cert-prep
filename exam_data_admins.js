Object.assign(EXAM_DATA, {
  "Platform Administrator":{
    questions:60,time:105,pass:"65%",experience:"6 months",
    trailheadUrl:"https://trailheadacademy.salesforce.com/certificate/exam-platform-admin---Plat-Admn-201",
    prerequisites:[],
    overview:"The Platform Administrator certification validates your ability to configure and manage a Salesforce org for a business. It covers the full admin toolkit — user management, the security and sharing model, object and field customisation, Sales and Service Cloud features, Flow Builder automation, reports and dashboards, and data management tools. It is the recommended starting point for anyone new to the Salesforce ecosystem and is a prerequisite for many advanced certifications.",
    domains:[
      {name:"Configuration and Setup",pct:20,color:"#00A1E0",desc:"Configure the Salesforce org: company settings, user management, security model, and the multi-layer sharing architecture.",keyTopics:[
        {title:"User Creation & Deactivation",desc:"Create users with appropriate licenses, set roles and profiles, and deactivate (not delete) departing users to preserve data history."},
        {title:"Profiles & Permission Sets",desc:"Profiles set baseline access for a group of users; Permission Sets layer additional permissions on top without changing the profile."},
        {title:"Password Policies & Session Settings",desc:"Enforce password complexity, expiration, and lockout rules; configure session timeout and login IP ranges at the org level."},
        {title:"Organization-Wide Defaults",desc:"OWDs set the most restrictive baseline for record access — Public Read/Write, Public Read Only, or Private — per object."},
        {title:"Role Hierarchy & Sharing Rules",desc:"The role hierarchy grants upward visibility; sharing rules extend access horizontally to users outside the hierarchy path."},
        {title:"Login Hours & IP Restrictions",desc:"Restrict when and from where users can log in via profile-level login hours and trusted IP ranges."}
      ]},
      {name:"Object Manager and Lightning App Builder",pct:20,color:"#2ECC71",desc:"Design and customize the data model and build app pages using declarative tools — no code required.",keyTopics:[
        {title:"Standard & Custom Objects",desc:"Standard objects (Account, Contact, Opportunity) are built in; custom objects store business-specific data and follow the same rules."},
        {title:"Custom Fields & Field Types",desc:"Choose the right field type (Text, Number, Picklist, Formula, etc.) — field type determines storage, filtering, and formula compatibility."},
        {title:"Lookup vs Master-Detail Relationships",desc:"Lookup is flexible and optional; Master-Detail enforces ownership, enables roll-up summaries, and cascades delete to child records."},
        {title:"Validation Rules & Formula Fields",desc:"Validation rules prevent bad data on save; formula fields calculate read-only values from other fields without storing data."},
        {title:"Lightning App Builder Pages",desc:"Build App, Home, and Record pages by dragging standard and custom components onto a canvas — no code needed."},
        {title:"Dynamic Forms & Component Visibility",desc:"Dynamic Forms move fields off the page layout onto the canvas with individual visibility rules per field or section."}
      ]},
      {name:"Sales and Marketing Applications",pct:12,color:"#F39C12",desc:"Configure Sales Cloud features including leads, opportunities, campaigns, and the sales process.",keyTopics:[
        {title:"Lead Conversion Process",desc:"Converting a lead creates an Account, Contact, and optionally an Opportunity — field mapping controls what data carries over."},
        {title:"Opportunity Stages & Forecast Categories",desc:"Stages track deal progress; each stage maps to a forecast category that rolls up into collaborative forecasting totals."},
        {title:"Campaign Management & ROI",desc:"Campaigns track marketing spend and member responses; campaign influence connects campaigns to opportunities for ROI reporting."},
        {title:"Price Books & Products",desc:"Products define what you sell; price books set prices per product per currency — opportunities reference a single price book."},
        {title:"Activity Management",desc:"Tasks (to-dos) and Events (calendar items) are the core activity types — both log to the Activity Timeline on records."},
        {title:"Collaborative Forecasting",desc:"Forecasting rolls up opportunity amounts by owner and stage, allowing managers to adjust and submit forecasts up the hierarchy."}
      ]},
      {name:"Service and Support Applications",pct:11,color:"#E74C3C",desc:"Set up Service Cloud for case management, knowledge, entitlements, and the service console.",keyTopics:[
        {title:"Case Management & Queues",desc:"Cases track customer issues; queues hold unassigned cases so agents can pick up work based on skills or availability."},
        {title:"Assignment & Escalation Rules",desc:"Assignment rules route new cases to the right queue or agent; escalation rules auto-escalate cases that breach SLA time limits."},
        {title:"Salesforce Knowledge Articles",desc:"Knowledge stores FAQ and how-to articles that agents attach to cases — article types and data categories control visibility."},
        {title:"Entitlements & Milestones",desc:"Entitlements define the support level a customer is owed; milestones track SLA targets (e.g., first response within 4 hours) on cases."},
        {title:"Service Console Configuration",desc:"The console is a multi-tab browser-like UI for agents — configure it with push notifications, macros, and quick text for efficiency."},
        {title:"Omni-Channel Routing Basics",desc:"Omni-Channel routes work items (cases, chats) to agents based on capacity, skills, and availability in real time."}
      ]},
      {name:"Productivity and Collaboration",pct:7,color:"#1ABC9C",desc:"Enable user productivity with Chatter, calendars, activity tracking, and mobile access.",keyTopics:[
        {title:"Chatter Feeds & Groups",desc:"Chatter lets users post updates, share files, and collaborate on records — groups organize conversations by team or project."},
        {title:"Activity Tracking",desc:"Tasks and Events on the Activity Timeline give a chronological history of all touchpoints with a customer or record."},
        {title:"Salesforce Mobile App",desc:"The mobile app gives field users access to records, tasks, and approvals — admins control layout via mobile-specific page assignments."},
        {title:"Email Integration",desc:"Einstein Activity Capture and Outlook/Gmail integrations sync emails and events between Salesforce and email clients automatically."},
        {title:"Calendars & Availability",desc:"Shared calendars and the resource calendar let teams see colleague availability and schedule customer-facing events."}
      ]},
      {name:"Data and Analytics Management",pct:14,color:"#FF6B35",desc:"Manage data quality, run imports and exports, and build reports and dashboards for insights.",keyTopics:[
        {title:"Data Import Wizard & Data Loader",desc:"Import Wizard handles up to 50,000 records via browser for supported objects; Data Loader handles larger volumes via CSV and CLI."},
        {title:"Duplicate Rules & Matching Rules",desc:"Matching rules identify potential duplicates using field comparisons; duplicate rules define what happens when a match is found (alert or block)."},
        {title:"Report Types & Formats",desc:"Report types define available objects and fields; formats are Tabular, Summary, Matrix, and Joined — each suited to different analytical needs."},
        {title:"Dashboard Components",desc:"Charts, tables, metrics, and gauges visualize report data in real time — each component is powered by a single source report."},
        {title:"Analytic Snapshots",desc:"Analytic snapshots capture report data at a point in time to a custom object, enabling trend tracking over days, weeks, or months."},
        {title:"Weekly Export & Backup",desc:"The weekly export service generates a full data backup as CSV files — schedule it regularly as a disaster recovery measure."}
      ]},
      {name:"Workflow/Process Automation",pct:16,color:"#BDC3E7",desc:"Automate business processes declaratively using Flow Builder, approval processes, and automation tools.",keyTopics:[
        {title:"Record-Triggered Flows",desc:"Fire automatically when a record is created or updated — before-save flows update fields without DML; after-save flows can update related records."},
        {title:"Screen Flows",desc:"Guide users through multi-step processes with input screens, decisions, and loops — launched from buttons, Quick Actions, or LWC."},
        {title:"Scheduled Flows",desc:"Run on a recurring schedule or at a time relative to a record field — used for follow-up reminders, batch updates, and SLA enforcement."},
        {title:"Approval Processes",desc:"Multi-step approval workflows route records to approvers based on criteria — supports parallel and sequential approval chains."},
        {title:"Flow Best Practices",desc:"Use before-save flows for field updates, minimize DML in after-save flows, and bulkify using loop collections to avoid governor limits."},
        {title:"Retiring Workflow Rules & Process Builder",desc:"Salesforce is retiring Workflow Rules and Process Builder — migrate all automation to Flow Builder as the single automation tool."}
      ]}
    ],
    studyDays:[
      {tag:"user-management",focus:"User management: profiles, roles, permission sets, and user licenses",topics:[
        {text:"Profiles Overview",url:"https://help.salesforce.com/s/articleView?id=sf.admin_userprofiles.htm"},
        {text:"Permission Sets",url:"https://help.salesforce.com/s/articleView?id=sf.perm_sets_overview.htm"},
        {text:"Role Hierarchy",url:"https://help.salesforce.com/s/articleView?id=sf.user_role_hierarchy.htm"},
        {text:"User License Types",url:"https://help.salesforce.com/s/articleView?id=sf.users_understanding_license_types.htm"},
        {text:"Permission Set Groups",url:"https://help.salesforce.com/s/articleView?id=sf.perm_set_groups.htm"},
        {text:"Delegated Administration",url:"https://help.salesforce.com/s/articleView?id=sf.delegated_admin_overview.htm"}
      ]},
      {tag:"security-sharing",focus:"Security and sharing model: OWDs, sharing rules, field-level security, and record access",topics:[
        {text:"Org-Wide Sharing Defaults",url:"https://help.salesforce.com/s/articleView?id=sf.security_sharing_owd_setting.htm"},
        {text:"Sharing Rules",url:"https://help.salesforce.com/s/articleView?id=sf.security_sharing_rules.htm"},
        {text:"Field-Level Security",url:"https://help.salesforce.com/s/articleView?id=sf.admin_fls.htm"},
        {text:"Record Access Overview",url:"https://help.salesforce.com/s/articleView?id=sf.security_sharing_overview.htm"},
        {text:"Manual Sharing",url:"https://help.salesforce.com/s/articleView?id=sf.security_sharing_manual.htm"},
        {text:"Shield Platform Encryption",url:"https://help.salesforce.com/s/articleView?id=sf.security_pe_overview.htm"}
      ]},
      {tag:"objects-fields",focus:"Data model: standard and custom objects, fields, relationships, and schema",topics:[
        {text:"Custom Object Creation",url:"https://help.salesforce.com/s/articleView?id=sf.dev_objectcreate_task.htm"},
        {text:"Field Types Reference",url:"https://help.salesforce.com/s/articleView?id=sf.custom_field_types.htm"},
        {text:"Object Relationships",url:"https://help.salesforce.com/s/articleView?id=sf.relationships_considerations.htm"},
        {text:"Schema Builder",url:"https://help.salesforce.com/s/articleView?id=sf.schema_builder.htm"},
        {text:"Validation Rules",url:"https://help.salesforce.com/s/articleView?id=sf.fields_about_validation_rules.htm"},
        {text:"Formula Fields",url:"https://help.salesforce.com/s/articleView?id=sf.customize_formulas.htm"}
      ]},
      {tag:"automation",focus:"Automation tools: Flow Builder, approval processes, and when to use each",topics:[
        {text:"Flow Builder Overview",url:"https://help.salesforce.com/s/articleView?id=sf.flow_overview.htm"},
        {text:"Flow Types Reference",url:"https://help.salesforce.com/s/articleView?id=sf.flow_concepts_type.htm"},
        {text:"Approval Processes",url:"https://help.salesforce.com/s/articleView?id=sf.approvals_create_approval_process.htm"},
        {text:"Flow and Process Automation Overview",url:"https://help.salesforce.com/s/articleView?id=sf.flow_overview.htm"},
        {text:"Before-Save Flows",url:"https://help.salesforce.com/s/articleView?id=sf.flow_concepts_trigger_record_before.htm"},
        {text:"Scheduled Flows",url:"https://help.salesforce.com/s/articleView?id=sf.flow_concepts_trigger_scheduled.htm"}
      ]},
      {tag:"sales-service",focus:"Sales Cloud and Service Cloud features: leads, opportunities, cases, and queues",topics:[
        {text:"Lead Management",url:"https://help.salesforce.com/s/articleView?id=sf.leads_overview.htm"},
        {text:"Opportunities Overview",url:"https://help.salesforce.com/s/articleView?id=sf.opportunities_overview.htm"},
        {text:"Cases Overview",url:"https://help.salesforce.com/s/articleView?id=sf.cases_def_what_is_a_case.htm"},
        {text:"Queues",url:"https://help.salesforce.com/s/articleView?id=sf.queues_overview.htm"},
        {text:"Entitlements and SLAs",url:"https://help.salesforce.com/s/articleView?id=sf.entitlements_overview.htm"},
        {text:"Email-to-Case Setup",url:"https://help.salesforce.com/s/articleView?id=sf.setting_up_email_to_case.htm"}
      ]},
      {tag:"reports-dashboards",focus:"Reports and dashboards: report types, filters, groupings, and dashboard components",topics:[
        {text:"Reports Overview",url:"https://help.salesforce.com/s/articleView?id=sf.reports_overview.htm"},
        {text:"Report Types",url:"https://help.salesforce.com/s/articleView?id=sf.reports_report_types_overview.htm"},
        {text:"Report Builder",url:"https://help.salesforce.com/s/articleView?id=sf.reports_builder_create.htm"},
        {text:"Dashboards Overview",url:"https://help.salesforce.com/s/articleView?id=sf.dashboards_overview.htm"},
        {text:"Report Filters",url:"https://help.salesforce.com/s/articleView?id=sf.reports_filters_overview.htm"},
        {text:"Dynamic Dashboards",url:"https://help.salesforce.com/s/articleView?id=sf.dashboards_dynamic.htm"}
      ]},
      {tag:"data-management",focus:"Data management: import wizard, data loader, duplicate rules, and data quality",topics:[
        {text:"Data Import Wizard",url:"https://help.salesforce.com/s/articleView?id=sf.data_import_wizard.htm"},
        {text:"Data Loader Guide",url:"https://developer.salesforce.com/docs/atlas.en-us.dataLoader.meta/dataLoader/data_loader.htm"},
        {text:"Duplicate Management",url:"https://help.salesforce.com/s/articleView?id=sf.duplicate_prevention_overview.htm"},
        {text:"Mass Transfer Records",url:"https://help.salesforce.com/s/articleView?id=sf.admin_massxfer.htm"},
        {text:"Recycle Bin",url:"https://help.salesforce.com/s/articleView?id=sf.recycle_bin.htm"},
        {text:"Data Export Service",url:"https://help.salesforce.com/s/articleView?id=sf.admin_exportdata.htm"}
      ]},
      {tag:"exam-prep-admin",focus:"Platform Administrator exam prep: review all domains and scenario-based questions",topics:[
        {text:"Platform Administrator Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Administrator-Exam-Guide"},
        {text:"Admin Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-administrator-credential"},
        {text:"Trailhead: Admin Beginner Trail",url:"https://trailhead.salesforce.com/content/learn/trails/force_com_admin_beginner"},
        {text:"Admin Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_admin"},
        {text:"Security Specialist Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_security"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-platform-admin---Plat-Admn-201"}
      ]}
    ],
    quiz:[
      {domain:"Configuration",q:"A user needs to see all records in the org regardless of sharing settings. Which feature should be used?",opts:["Public Read/Write OWD","View All Data system permission","Profile-level record access","Manual sharing"],correct:1,explanation:"View All Data is a system permission that grants visibility to all records regardless of sharing rules or OWD settings."},
      {domain:"Automation",q:"Which automation tool should be used to update a related record when a field changes on a parent object?",opts:["Workflow Rule","Process Builder","Flow Builder","Approval Process"],correct:2,explanation:"Flow Builder (Record-Triggered Flow) is the recommended tool for cross-object updates and complex automation in modern Salesforce."},
      {domain:"Data",q:"What is the maximum number of records the Data Import Wizard can process per import?",opts:["5,000","10,000","50,000","100,000"],correct:2,explanation:"The Data Import Wizard supports up to 50,000 records per import for supported objects."},
      {domain:"Objects",q:"Which relationship type automatically deletes child records when the parent is deleted?",opts:["Lookup","Master-Detail","Many-to-Many","Hierarchical"],correct:1,explanation:"Master-Detail relationships have cascade delete behavior — deleting the master record automatically deletes all associated detail records."},
      {domain:"Reports",q:"Which report type allows you to view records from multiple related objects in a single report?",opts:["Tabular","Summary","Matrix","Joined"],correct:3,explanation:"Joined reports allow you to view data from multiple report blocks (different report types) side by side in a single report."},
      {domain:"Security",q:"A user needs to access a specific field not available on their profile. What is the recommended approach?",opts:["Edit the profile","Create a new profile","Use a Permission Set","Share the record manually"],correct:2,explanation:"Permission Sets are used to grant additional access to specific fields, objects, or features without modifying profiles."},
      {domain:"Configuration",q:"Which sharing model setting allows any user to view and edit any record of that object, regardless of ownership?",opts:["Private","Public Read Only","Public Read/Write","Controlled by Parent"],correct:2,explanation:"Public Read/Write OWD allows all users to view and edit all records of that object — it is the most permissive OWD setting."},
      {domain:"Configuration",q:"A sales rep should only see records owned by themselves and their subordinates in the role hierarchy. Which OWD achieves this?",opts:["Public Read/Write","Public Read Only","Private","Controlled by Parent"],correct:2,explanation:"Private OWD restricts record access to the owner and users above them in the role hierarchy, ensuring reps only see their own and their reports' records."},
      {domain:"Configuration",q:"What is the correct order of precedence in the Salesforce security model?",opts:["Sharing rules → OWD → Role hierarchy → Profiles","OWD → Role hierarchy → Sharing rules → Manual sharing","Profiles → OWD → Role hierarchy → Permission Sets","Manual sharing → Sharing rules → OWD → Profiles"],correct:1,explanation:"OWD sets the floor, the role hierarchy opens access upward, sharing rules extend it horizontally, and manual sharing handles one-off exceptions — each layer adds access, never removes it."},
      {domain:"Automation",q:"A company wants to prevent a case from being closed unless a resolution field is populated. Which tool is best?",opts:["Flow Builder","Validation Rule","Workflow Rule","Assignment Rule"],correct:1,explanation:"Validation rules evaluate field criteria when a record is saved and prevent saving if the condition is true — perfect for enforcing data completeness requirements."},
      {domain:"Automation",q:"Which Flow element is used to loop through a collection of records and perform an action on each one?",opts:["Decision","Assignment","Loop","Get Records"],correct:2,explanation:"The Loop element iterates over a collection variable (such as a list of records) one item at a time, allowing actions to be performed on each record."},
      {domain:"Automation",q:"Workflow Rules are being retired. What is the Salesforce-recommended replacement?",opts:["Process Builder","Apex Triggers","Flow Builder","Approval Processes"],correct:2,explanation:"Salesforce has announced the retirement of Workflow Rules and Process Builder — Flow Builder (record-triggered flows) is the official replacement for both."},
      {domain:"Objects",q:"A formula field on Account references a field on a related Contact. Why might this be problematic?",opts:["Formula fields cannot reference related objects","Cross-object formulas are limited to 10 hops","Cross-object formulas make the field read-only on both objects","Cross-object formulas prevent record deletion on the related object"],correct:1,explanation:"Cross-object formula fields can reference fields on related objects but are limited to 10 relationships — be aware this can also impact performance on large record sets."},
      {domain:"Objects",q:"Which field type should be used to store a value calculated from other fields on the same record without user input?",opts:["Text","Number","Formula","Roll-Up Summary"],correct:2,explanation:"Formula fields calculate their value at runtime from other fields and expressions — they are read-only and do not store data in the database."},
      {domain:"Data",q:"Which tool should an admin use to load 2 million records into Salesforce?",opts:["Data Import Wizard","Manual entry","Data Loader","Reports"],correct:2,explanation:"Data Loader handles large data volumes via CSV files and command-line scripting — the Data Import Wizard is limited to 50,000 records and a subset of objects."},
      {domain:"Data",q:"What happens when a duplicate rule is set to 'Block' and a matching record is found?",opts:["The record is saved and the user is warned","The record is saved silently","The save is prevented and the user sees matching records","The duplicate is automatically merged"],correct:2,explanation:"A Block action prevents the record from being saved and presents the user with the matching records so they can decide whether to use an existing record."},
      {domain:"Reports",q:"An admin wants to show the total value of all open opportunities grouped by owner and stage. Which report format is correct?",opts:["Tabular","Summary","Matrix","Joined"],correct:2,explanation:"Matrix reports group data by both rows and columns — grouping by owner (rows) and stage (columns) with a summarised amount is a classic matrix use case."},
      {domain:"Security",q:"Which feature restricts the hours during which a user can log in to Salesforce?",opts:["IP Restrictions","Login Flows","Login Hours on the Profile","Session Settings"],correct:2,explanation:"Login Hours on the profile define the days and times a user is allowed to log in — outside these hours the login is blocked regardless of IP or credentials."},
      {domain:"Configuration",q:"An admin needs to give 10 specific users access to a custom app without changing their profiles. What is the best approach?",opts:["Create a new profile for those users","Use a Permission Set assigned to those users","Change the OWD for the app object","Create a sharing rule for those users"],correct:1,explanation:"Permission Sets grant additional access to specific users without modifying profiles — assigning the same permission set to multiple users is the recommended scalable approach."},
      {domain:"Automation",q:"Which type of Flow is most appropriate for guiding a call centre agent through a troubleshooting script?",opts:["Record-Triggered Flow","Scheduled Flow","Screen Flow","Autolaunched Flow"],correct:2,explanation:"Screen Flows present interactive screens to users, making them ideal for guided processes like troubleshooting scripts, wizards, and data collection workflows."}
    ],
    tips:[
      {icon:"🔐",title:"Master the Security Model",body:"The security model (OWD, role hierarchy, sharing rules, profiles, permission sets) is heavily tested. Draw it out and understand layering."},
      {icon:"⚡",title:"Flow Over Workflow",body:"Process Builder and Workflow Rules are being retired. Focus your automation study on Flow Builder — record-triggered, screen, and scheduled flows."},
      {icon:"📊",title:"Reports are Testable",body:"Know the four report formats, joined reports, and dashboard component types. Report filters and cross-filters appear on the exam."},
      {icon:"🔄",title:"Understand Data Tools",body:"Know when to use Data Import Wizard vs Data Loader. Import Wizard is UI-based with 50k limit; Data Loader handles larger volumes via CSV."},
      {icon:"📝",title:"Read the Exam Guide",body:"The official exam guide lists exact topic areas and their weights. Use it to prioritize your study time effectively."},
      {icon:"🏆",title:"Review the Exam Guide",body:"Download the official Admin exam guide from Trailhead. It breaks down exact topic weights so you know where to focus — don't skip it."}
    ]
  },

  "Platform App Builder":{
    questions:60,time:105,pass:"63%",experience:"6 months",
    trailheadUrl:"https://trailheadacademy.salesforce.com/certificate/exam-app-builder---Plat-Admn-202",
    prerequisites:[
      {name:"Platform Administrator",url:"https://help.salesforce.com/s/articleView?id=sf.cpq_contracts_overview.htm",note:"App Builder builds directly on admin concepts — user management, security model, and object configuration are prerequisite knowledge."}
    ],
    overview:"The Platform App Builder certification is for professionals who design, build, and deploy custom applications using the declarative capabilities of the Salesforce platform. The exam covers the platform fundamentals, data modelling with objects and relationships, Flow Builder automation, Lightning App Builder page design, and app deployment using sandboxes and packages. It is the go-to credential for admins looking to move into a more technical building role without writing code.",
    domains:[
      {name:"Salesforce Fundamentals",pct:23,color:"#00A1E0",desc:"Understand the Salesforce platform capabilities, cloud products, multi-tenancy, and the AppExchange ecosystem.",keyTopics:[
        {title:"Salesforce Cloud Product Overview",desc:"Sales Cloud, Service Cloud, Marketing Cloud, Experience Cloud, and Platform are the core clouds — understand what each is designed to do."},
        {title:"Multi-Tenant Architecture",desc:"All Salesforce customers share the same infrastructure; data is logically isolated by org ID — governor limits enforce fair resource usage."},
        {title:"Declarative vs Programmatic Development",desc:"Declarative tools (flows, validation rules, Lightning App Builder) require no code; programmatic tools (Apex, LWC) handle complex logic."},
        {title:"AppExchange Managed Packages",desc:"AppExchange solutions are installed into an org as managed (locked, upgradeable) or unmanaged (editable source) packages."},
        {title:"Governor Limits Overview",desc:"Limits apply per transaction to CPU, heap, SOQL, and DML — they exist to protect shared infrastructure in the multi-tenant model."},
        {title:"Sandboxes & Environments",desc:"Sandboxes are copies of production used for development and testing — Developer, Developer Pro, Partial, and Full each have different data and refresh limits."}
      ]},
      {name:"Data Modeling and Management",pct:22,color:"#2ECC71",desc:"Design scalable data models using standard and custom objects, relationships, and external data sources.",keyTopics:[
        {title:"Custom Objects & Fields",desc:"Custom objects extend the platform's data model; choose field types carefully as they affect storage, filtering, and formula capabilities."},
        {title:"Lookup vs Master-Detail Relationships",desc:"Lookup is optional and flexible; Master-Detail is required, enables roll-up summaries, and cascades delete from parent to child."},
        {title:"Many-to-Many Relationships",desc:"Implemented via a junction object with two Master-Detail relationships — models scenarios like Students enrolled in many Courses."},
        {title:"Roll-Up Summary Fields",desc:"Aggregate child record values (COUNT, SUM, MIN, MAX) onto the master record — only available on Master-Detail relationships."},
        {title:"Formula Fields",desc:"Read-only calculated fields that reference other fields, functions, and operators — evaluated at runtime and not stored."},
        {title:"External Objects & Salesforce Connect",desc:"External objects surface data from outside Salesforce in real time via OData adapters — data stays in the external system."}
      ]},
      {name:"Business Logic and Process Automation",pct:28,color:"#F39C12",desc:"Automate business processes declaratively with Flow Builder and approval processes — the largest exam domain.",keyTopics:[
        {title:"Record-Triggered Flows (Before Save)",desc:"Before-save flows run before the record is written to the database — use for field updates as no DML statement is needed."},
        {title:"Record-Triggered Flows (After Save)",desc:"After-save flows run after the record is committed — use when updating related records or triggering downstream processes."},
        {title:"Screen Flows for Guided UI",desc:"Screen flows present users with input forms, decisions, and confirmation steps — launched from buttons, Quick Actions, or embedded in pages."},
        {title:"Scheduled Flows",desc:"Run on a fixed schedule or relative to a date field on a record — used for reminders, recurring updates, and time-based automation."},
        {title:"Sub-Flows & Reusable Components",desc:"Extract repeated logic into a reusable flow and call it as a subflow — reduces duplication and centralises maintenance."},
        {title:"Approval Processes",desc:"Route records through one or more approval steps with defined approvers, entry criteria, and actions on approve/reject."}
      ]},
      {name:"User Interface",pct:17,color:"#E74C3C",desc:"Build and customize Lightning pages, record pages, and app pages using Lightning App Builder.",keyTopics:[
        {title:"Lightning App Builder Page Types",desc:"App pages, Home pages, and Record pages each have different layouts, available components, and assignment scopes."},
        {title:"Dynamic Forms",desc:"Move fields from the page layout directly onto the Lightning page canvas — enables per-field visibility rules and conditional layouts."},
        {title:"Dynamic Actions",desc:"Place action buttons directly on the canvas with visibility rules — replaces the static page layout action bar."},
        {title:"Component Visibility Rules",desc:"Show or hide any component based on profile, permission set, record field value, or device type without writing code."},
        {title:"Custom Lightning Components",desc:"LWC and Aura components can be made available in Lightning App Builder by exposing them with a design resource."},
        {title:"Lightning Experience Customization",desc:"Customize navigation bars, app branding, list views, and compact layouts to tailor the UI for different user groups."}
      ]},
      {name:"App Deployment",pct:10,color:"#1ABC9C",desc:"Manage the change lifecycle using sandboxes, change sets, and packages to deploy to production.",keyTopics:[
        {title:"Sandbox Types",desc:"Developer (200MB) for coding; Developer Pro (1GB) for more space; Partial (5GB sample) for realistic testing; Full for UAT with production data."},
        {title:"Change Sets",desc:"Outbound change sets bundle metadata in the source org; inbound change sets are deployed in the target — UI-based, no CLI needed."},
        {title:"Managed vs Unmanaged Packages",desc:"Managed packages lock source code for distribution on AppExchange; unmanaged packages are open source with no upgrade path."},
        {title:"Unlocked Packages",desc:"Salesforce DX packages that support modular, source-tracked development — preferred for enterprise orgs using CI/CD."},
        {title:"Deployment Best Practices",desc:"Always deploy to a sandbox first, validate before deploying to production, and run all tests as part of the deployment."},
        {title:"Environment Hub",desc:"The Environment Hub connects and manages multiple Salesforce orgs from a single location — useful for ISVs and multi-org enterprises."}
      ]}
    ],
    studyDays:[
      {tag:"declarative-data",focus:"Data model design: custom objects, fields, relationships, and schema planning",topics:[
        {text:"Data Modeling Module",url:"https://trailhead.salesforce.com/content/learn/modules/data_modeling"},
        {text:"Custom Objects",url:"https://help.salesforce.com/s/articleView?id=sf.dev_objectcreate_task.htm"},
        {text:"Object Relationships",url:"https://help.salesforce.com/s/articleView?id=sf.relationships_considerations.htm"},
        {text:"Schema Builder",url:"https://help.salesforce.com/s/articleView?id=sf.schema_builder.htm"},
        {text:"Validation Rules",url:"https://help.salesforce.com/s/articleView?id=sf.fields_about_validation_rules.htm"},
        {text:"App Builder Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-App-Builder-Exam-Guide"}
      ]},
      {tag:"automation-builder",focus:"Flow Builder automation: record-triggered, screen flows, and decision elements",topics:[
        {text:"Flow Builder Overview",url:"https://help.salesforce.com/s/articleView?id=sf.flow_overview.htm"},
        {text:"Record-Triggered Flows",url:"https://help.salesforce.com/s/articleView?id=sf.flow_concepts_trigger_record.htm"},
        {text:"Screen Flows",url:"https://help.salesforce.com/s/articleView?id=sf.flow_concepts_trigger_screen.htm"},
        {text:"Scheduled Flows",url:"https://help.salesforce.com/s/articleView?id=sf.flow_concepts_trigger_scheduled.htm"},
        {text:"Flow Decision Elements",url:"https://help.salesforce.com/s/articleView?id=sf.flow_ref_elements_decision.htm"},
        {text:"Approval Processes",url:"https://help.salesforce.com/s/articleView?id=sf.approvals_create_approval_process.htm"}
      ]},
      {tag:"lightning-pages",focus:"Lightning App Builder: page types, components, visibility filters, and deployment",topics:[
        {text:"Lightning App Builder",url:"https://help.salesforce.com/s/articleView?id=sf.lightning_app_builder_overview.htm"},
        {text:"Record Page Layouts",url:"https://help.salesforce.com/s/articleView?id=sf.lightning_app_builder_record_page.htm"},
        {text:"Standard Lightning Components",url:"https://help.salesforce.com/s/articleView?id=sf.lightning_app_builder_standard_components.htm"},
        {text:"Component Visibility Filters",url:"https://help.salesforce.com/s/articleView?id=sf.lightning_app_builder_component_visibility.htm"},
        {text:"Dynamic Forms",url:"https://help.salesforce.com/s/articleView?id=sf.dynamic_forms_overview.htm"},
        {text:"Dynamic Actions",url:"https://help.salesforce.com/s/articleView?id=sf.dynamic_actions_overview.htm"}
      ]},
      {tag:"app-deployment",focus:"App deployment: sandboxes, change sets, and App Exchange packaging basics",topics:[
        {text:"Sandboxes for Development",url:"https://help.salesforce.com/s/articleView?id=sf.create_test_instance.htm"},
        {text:"Change Sets",url:"https://help.salesforce.com/s/articleView?id=sf.changesets.htm"},
        {text:"Managed vs Unmanaged Packages",url:"https://help.salesforce.com/s/articleView?id=sf.sharing_apps.htm"},
        {text:"AppExchange Overview",url:"https://appexchange.salesforce.com/"},
        {text:"Change Set Best Practices",url:"https://help.salesforce.com/s/articleView?id=sf.changesets_best_practices.htm"},
        {text:"App Builder Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-app-builder-credential"}
      ]},
      {tag:"exam-prep-appbuilder",focus:"App Builder exam prep: data model, automation, Lightning pages, and deployment",topics:[
        {text:"App Builder Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-App-Builder-Exam-Guide"},
        {text:"App Builder Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-app-builder-credential"},
        {text:"App Customization Specialist Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_lightning_app_builder"},
        {text:"Process Automation Specialist Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_process_automation"},
        {text:"Data Modeling Module",url:"https://trailhead.salesforce.com/content/learn/modules/data_modeling"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-app-builder---Plat-Admn-202"}
      ]}
    ],
    quiz:[
      {domain:"Data Modeling",q:"Which field type is available only on Master-Detail relationships and not Lookup relationships?",opts:["Formula field","Roll-up Summary field","Currency field","Checkbox field"],correct:1,explanation:"Roll-up Summary fields can only be created on the master object in a Master-Detail relationship to aggregate child record data."},
      {domain:"Automation",q:"Which Flow type runs before a record is saved to the database, allowing field updates without a DML statement?",opts:["Scheduled Flow","After-Save Record-Triggered Flow","Before-Save Record-Triggered Flow","Screen Flow"],correct:2,explanation:"Before-save record-triggered flows run before the record is committed, so field updates happen automatically as part of the save operation."},
      {domain:"UI",q:"Which feature in Lightning App Builder allows components to show or hide based on user profile or record field values?",opts:["Dynamic Forms","Component Visibility","Conditional Rendering","App Permissions"],correct:1,explanation:"Component Visibility Rules in Lightning App Builder allow you to conditionally show/hide components based on criteria like profile, permission set, or field values."},
      {domain:"Fundamentals",q:"What governs the logical isolation of data in a multi-tenant Salesforce environment?",opts:["Separate databases per org","Org ID-based data partitioning","Profile restrictions","IP restrictions"],correct:1,explanation:"Salesforce uses a multi-tenant architecture where all orgs share the same infrastructure but data is logically isolated using org identifiers in a shared database."},
      {domain:"Deployment",q:"Which sandbox type is a full replica of production including all data?",opts:["Developer Sandbox","Developer Pro Sandbox","Partial Data Sandbox","Full Sandbox"],correct:3,explanation:"A Full Sandbox is a complete copy of production including all data, metadata, and configuration, used for final UAT and performance testing."},
      {domain:"Data Modeling",q:"A junction object in Salesforce is used to model which type of relationship?",opts:["One-to-one","One-to-many","Many-to-many","Hierarchical"],correct:2,explanation:"A junction object has two Master-Detail relationships pointing to two different parent objects, creating a many-to-many relationship between those parent objects."},
      {domain:"Data Modeling",q:"Which of the following is a limitation of a Lookup relationship compared to a Master-Detail relationship?",opts:["Lookup fields cannot be required","Roll-up summary fields are not available on the lookup parent","Lookup relationships cannot be created on custom objects","Lookup relationships prevent record sharing"],correct:1,explanation:"Roll-up summary fields (COUNT, SUM, MIN, MAX) are only available when the parent side of a Master-Detail relationship — they cannot be created on the parent of a Lookup."},
      {domain:"Data Modeling",q:"What is the maximum number of custom objects allowed in a Salesforce Enterprise Edition org?",opts:["200","500","800","2,000"],correct:2,explanation:"Enterprise Edition orgs support up to 800 custom objects. The limit varies by edition — Developer Edition allows 400, Unlimited Edition allows 2,000."},
      {domain:"Automation",q:"Which element in Flow Builder is used to create or update records in the database?",opts:["Assignment","Decision","Create Records / Update Records","Loop"],correct:2,explanation:"The Create Records and Update Records flow elements perform DML operations — they are the declarative equivalent of Apex insert and update statements."},
      {domain:"Automation",q:"A before-save record-triggered flow updates a field on the record being saved. How many DML statements does this consume?",opts:["One DML per field updated","One DML for the entire record","Zero — before-save flows update fields as part of the same save operation","Two — one for the flow and one for the record"],correct:2,explanation:"Before-save flows run before the record is committed, so field updates they make are included in the original save with no additional DML statement consumed."},
      {domain:"Automation",q:"Which approval process action fires when a record is first submitted for approval?",opts:["Final Approval Action","Final Rejection Action","Initial Submission Action","Recall Action"],correct:2,explanation:"Initial Submission Actions run when the record enters the approval process for the first time — common uses include locking the record and sending a notification."},
      {domain:"UI",q:"What must be configured on an LWC component to make it available as a Lightning App Builder component?",opts:["A @wire decorator","A lightning__AppPage target in the component's metadata","An Aura wrapper component","An @api property named 'label'"],correct:1,explanation:"To expose an LWC in Lightning App Builder, the component's .js-meta.xml file must include a <target> of lightning__AppPage, lightning__RecordPage, or lightning__HomePage."},
      {domain:"UI",q:"Dynamic Actions replace which older feature in Lightning Experience?",opts:["Quick Actions on page layouts","The action bar defined in page layouts","Related lists","Component visibility filters"],correct:1,explanation:"Dynamic Actions move buttons and actions from the static page layout action bar onto the Lightning page canvas, where each action can have individual visibility rules."},
      {domain:"Fundamentals",q:"Which Salesforce edition includes access to the Salesforce Platform license and custom application development?",opts:["Essentials","Professional","Enterprise","All editions"],correct:2,explanation:"Enterprise Edition and above include Salesforce Platform licenses and full API access required for custom development — Professional Edition has limited API access and no platform licenses by default."},
      {domain:"Fundamentals",q:"What is a key characteristic of Salesforce's multi-tenant architecture?",opts:["Each customer has a dedicated database server","All customers share infrastructure but have logically isolated data","Customers can choose their own server hardware","Data is replicated across customer orgs for redundancy"],correct:1,explanation:"Multi-tenancy means all Salesforce customers run on shared infrastructure — logical isolation via org IDs keeps data separate while Salesforce manages all hardware and software upgrades."},
      {domain:"Deployment",q:"What is the correct sequence for deploying a change set to production?",opts:["Upload outbound → validate inbound → deploy inbound","Create inbound → upload outbound → validate","Validate outbound → deploy inbound → refresh sandbox","Deploy outbound → create inbound → validate"],correct:0,explanation:"You upload an outbound change set from the source org, then in the target org you validate the inbound change set (runs tests without deploying), and finally deploy it."},
      {domain:"Deployment",q:"Which package type allows you to develop modularly, track source in version control, and upgrade installed components?",opts:["Unmanaged Package","Managed Package","Unlocked Package","Change Set"],correct:2,explanation:"Unlocked Packages support modular development with source tracking and can be upgraded in subscriber orgs — they are the recommended modern alternative to unmanaged packages for internal apps."},
      {domain:"Data Modeling",q:"Which field type stores a reference to another record and displays it as a clickable link?",opts:["Text","URL","Lookup Relationship","Formula"],correct:2,explanation:"A Lookup Relationship field stores a reference (record ID) to a record in another object and renders it as a hyperlink to that record — it creates a relationship between two objects."},
      {domain:"UI",q:"Which Lightning App Builder feature allows individual fields to have their own visibility rules independently of the page layout?",opts:["Component Visibility","Dynamic Actions","Dynamic Forms","Record Types"],correct:2,explanation:"Dynamic Forms move fields from the page layout onto the Lightning page canvas so each field or field section can have independent visibility rules based on profile, field values, or device type."}
    ],
    tips:[
      {icon:"🔄",title:"Flow is King",body:"Process Automation (28%) is the largest domain. Master Flow Builder thoroughly — before-save flows, sub-flows, and approval processes."},
      {icon:"🗂️",title:"Know Your Relationships",body:"Understand lookup vs master-detail tradeoffs: cascade delete, roll-up summaries, and required field behavior on master-detail."},
      {icon:"📱",title:"Lightning App Builder Details",body:"Know dynamic forms, dynamic actions, and component visibility rules. These appear frequently in UI questions."},
      {icon:"📦",title:"Understand Package Types",body:"Know the difference between unmanaged, managed, and unlocked packages and when each is appropriate for deployment."},
      {icon:"⚡",title:"Formula Fields vs Flows",body:"Understand when to use formula fields (read-only calculated values) vs flows (automated updates). Each has specific appropriate use cases."},
      {icon:"🎯",title:"Focus on Declarative Tools",body:"App Builder is about declarative configuration. While Apex knowledge helps context, focus on out-of-the-box configuration capabilities."}
    ]
  },

  "Slack Administrator": {
    questions:60,
    time:90,
    pass:"65%",
    experience:"6+ months Slack workspace administration experience",
    trailheadUrl:"https://trailheadacademy.salesforce.com/certificate/exam-slack-administrator---Slack-Admn-201",
    prerequisites:[],
    overview:"The Slack Administrator credential validates the skills needed to configure, manage, and optimize a Slack workspace or Enterprise Grid for an organization. Topics include workspace setup, channel management, user provisioning, security and compliance policies, app integrations, and enterprise administration.",
    domains:[
      {
        name:"Workspace & Org Management",
        pct:30,
        color:"#0070d2",
        desc:"Configure workspace settings, manage org-wide defaults, and govern the Slack environment.",
        keyTopics:[
          {
            title:"Workspace Settings",
            desc:"Name, icon, messaging policies, and workspace-level preferences."
          },
          {
            title:"Enterprise Grid",
            desc:"Multi-workspace management, org-level settings, and connected workspaces."
          },
          {
            title:"Billing & Plans",
            desc:"Slack plan differences and how billing is managed for teams and Enterprise."
          }
        ]
      },
      {
        name:"Channels & Messaging",
        pct:20,
        color:"#1b96ff",
        desc:"Manage channels, messaging policies, and communication workflows.",
        keyTopics:[
          {
            title:"Channel Types",
            desc:"Public, private, shared channels, and DMs — governance and use cases."
          },
          {
            title:"Channel Management",
            desc:"Creating, archiving, and naming convention policies for channels."
          },
          {
            title:"Messaging Policies",
            desc:"Message retention, deletion policies, and admin controls."
          }
        ]
      },
      {
        name:"Security & Compliance",
        pct:25,
        color:"#ff6b6b",
        desc:"Data retention, DLP, eDiscovery, and security settings for regulated environments.",
        keyTopics:[
          {
            title:"Data Retention Policies",
            desc:"Setting message and file retention at workspace and channel level."
          },
          {
            title:"DLP & eDiscovery",
            desc:"Integration with third-party DLP and eDiscovery tools for compliance."
          },
          {
            title:"SSO & 2FA",
            desc:"Configuring SSO with SAML and enforcing two-factor authentication."
          }
        ]
      },
      {
        name:"Integrations & Apps",
        pct:25,
        color:"#4bc885",
        desc:"Manage the Slack App Directory, custom integrations, and Salesforce-Slack integrations.",
        keyTopics:[
          {
            title:"App Directory Management",
            desc:"Approving, restricting, and managing Slack App Directory access."
          },
          {
            title:"Salesforce for Slack",
            desc:"Salesforce CRM integrations available via Slack and their configuration."
          },
          {
            title:"Workflow Builder",
            desc:"Creating no-code automated workflows within Slack."
          }
        ]
      }
    ],
    studyDays:[
      {tag:"foundation",focus:"Understand the Slack platform, workspace structure, and key features",topics:[{text:"Trailhead: Slack Basics",url:"https://trailhead.salesforce.com/content/learn/modules/slack-basics"},{text:"Salesforce Help: Slack Administrator Overview",url:"https://help.salesforce.com/s/articleView?id=sf.slack_admin_overview.htm"}]},
      {tag:"setup",focus:"Set up a Slack workspace: workspace settings, profile fields, and domain claiming",topics:[{text:"Salesforce Help: Workspace Settings in Slack",url:"https://help.salesforce.com/s/articleView?id=sf.slack_admin_workspace_settings.htm"},{text:"Trailhead: Slack Administrator Cert Prep",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-slack-administrator-credential"}]},
      {tag:"users",focus:"Manage users: inviting, deactivating, and provisioning with SCIM",topics:[{text:"Salesforce Help: Manage Slack Members",url:"https://help.salesforce.com/s/articleView?id=sf.slack_setup_manage_members.htm"},{text:"Salesforce Help: SCIM Provisioning for Slack",url:"https://help.salesforce.com/s/articleView?id=sf.slack_admin_scim.htm"}]},
      {tag:"channels",focus:"Manage channels: naming conventions, permissions, and governance policies",topics:[{text:"Salesforce Help: Slack Channel Management",url:"https://help.salesforce.com/s/articleView?id=sf.slack_admin_getting_started.htm"},{text:"Salesforce Help: Channel Permissions in Slack",url:"https://help.salesforce.com/s/articleView?id=sf.slack_admin_channel_permissions.htm"}]},
      {tag:"security",focus:"Configure SSO, two-factor authentication, and session management",topics:[{text:"Salesforce Help: Slack Security Overview",url:"https://help.salesforce.com/s/articleView?id=sf.slack_security_overview.htm"},{text:"Salesforce Help: SAML SSO for Slack",url:"https://help.salesforce.com/s/articleView?id=sf.slack_admin_sso.htm"}]},
      {tag:"enterprise",focus:"Understand Enterprise Grid: org management, multi-workspace policies",topics:[{text:"Salesforce Help: Slack Enterprise Grid Overview",url:"https://help.salesforce.com/s/articleView?id=sf.slack_admin_enterprise_grid.htm"},{text:"Salesforce Help: Manage Workspaces in Enterprise Grid",url:"https://help.salesforce.com/s/articleView?id=sf.slack_admin_manage_workspace.htm"}]},
      {tag:"apps",focus:"Manage the app directory: approve, restrict, and configure third-party apps",topics:[{text:"Salesforce Help: Slack App Directory Overview",url:"https://help.salesforce.com/s/articleView?id=sf.slack_apps_apps_directory.htm"},{text:"Salesforce Help: Restrict App Installations",url:"https://help.salesforce.com/s/articleView?id=sf.slack_admin_app_approvals.htm"}]},
      {tag:"connect",focus:"Configure Slack Connect for external collaboration with partner organizations",topics:[{text:"Salesforce Help: Slack Connect Overview",url:"https://help.salesforce.com/s/articleView?id=sf.slack_connect_overview.htm"},{text:"Trailhead: Slack Basics — Slack Connect",url:"https://trailhead.salesforce.com/content/learn/modules/slack-basics"}]},
      {tag:"analytics",focus:"Use Slack analytics to track workspace usage and adoption",topics:[{text:"Salesforce Help: Slack Analytics",url:"https://help.salesforce.com/s/articleView?id=sf.slack_admin_analytics.htm"},{text:"Salesforce Help: Message and Channel Activity Reports",url:"https://help.salesforce.com/s/articleView?id=sf.slack_admin_activity_reports.htm"}]}
    ],
    quiz:[
      {
        domain:"Workspace & Org Management",
        q:"What is Slack Enterprise Grid?",
        opts:[
          "A Slack plan for small teams",
          "A multi-workspace Salesforce product",
          "An org-level Slack structure allowing centralized management of multiple workspaces",
          "A Slack developer API tier"
        ],
        correct:2,
        explanation:"Enterprise Grid enables large organizations to connect multiple Slack workspaces under a single organization with centralized admin, security, and billing controls."
      },
      {
        domain:"Workspace & Org Management",
        q:"What is SCIM used for in Slack administration?",
        opts:[
          "Encrypting Slack messages",
          "Automating user provisioning and deprovisioning via an identity provider",
          "Setting message retention policies",
          "Managing Slack billing"
        ],
        correct:1,
        explanation:"SCIM (System for Cross-domain Identity Management) allows identity providers (Okta, Azure AD) to automatically provision and deprovision Slack users when HR or IT systems change."
      },
      {
        domain:"Channels & Messaging",
        q:"What is a Slack Connect channel?",
        opts:[
          "A private internal channel",
          "A channel that connects users from two or more different Slack organizations",
          "A channel restricted to admins only",
          "A bot-only channel"
        ],
        correct:1,
        explanation:"Slack Connect channels enable secure collaboration between users from different Slack organizations — replacing email chains for external partnerships."
      },
      {
        domain:"Security & Compliance",
        q:"What data retention policy setting controls how long messages are kept in a workspace?",
        opts:[
          "Workspace archival settings",
          "Message retention policy at workspace or channel level",
          "Data export permissions",
          "SSO timeout settings"
        ],
        correct:1,
        explanation:"Admins can set message retention policies at the workspace level (default) or override them at the channel level — specifying how many days messages and files are retained."
      },
      {
        domain:"Integrations & Apps",
        q:"What does Workflow Builder allow Slack admins and users to create?",
        opts:[
          "Custom Slack apps requiring code",
          "No-code automated workflows triggered by Slack events",
          "API integrations with external databases",
          "Custom slash commands"
        ],
        correct:1,
        explanation:"Workflow Builder is Slack's no-code automation tool — it creates workflows triggered by events (message posted, reaction added, form submitted) to automate processes like standups and approvals."
      },
      {
        domain:"Security & Compliance",
        q:"Which Slack feature allows organizations to comply with legal hold and eDiscovery requirements?",
        opts:[
          "Message pinning",
          "Data exports for Enterprise Grid / Compliance Exports",
          "Slack analytics reports",
          "Workspace-level search"
        ],
        correct:1,
        explanation:"Enterprise Grid includes compliance export tools that allow organizations to export all message history and files for eDiscovery, legal hold, and regulatory compliance purposes."
      },
      {
        domain:"Workspace & Org Management",
        q:"How are Slack users typically provisioned in an Enterprise Grid environment?",
        opts:[
          "Manual invites only",
          "Via SCIM API connected to an Identity Provider for automated provisioning",
          "Through the Slack mobile app",
          "Via a CSV bulk import tool in the admin portal"
        ],
        correct:1,
        explanation:"Enterprise Grid orgs typically use SCIM provisioning connected to an IdP (Okta, Azure AD) for automated user lifecycle management — ensuring users are added and removed consistently."
      },
      {
        domain:"Channels & Messaging",
        q:"What is the difference between a public and private channel in Slack?",
        opts:[
          "Public channels allow external users; private do not",
          "Public channels are searchable and joinable by anyone in the workspace; private channels require invitation",
          "Public channels support file sharing; private do not",
          "There is no functional difference"
        ],
        correct:1,
        explanation:"Public channels are visible in the channel browser and joinable by any workspace member. Private channels are invitation-only and do not appear in search results for non-members."
      },
      {
        domain:"Integrations & Apps",
        q:"What does the Salesforce for Slack app allow users to do?",
        opts:[
          "Deploy Salesforce code from Slack",
          "View and update Salesforce CRM records, get deal alerts, and manage tasks directly in Slack",
          "Replace Salesforce Lightning Experience with Slack",
          "Connect Apex code to Slack bots"
        ],
        correct:1,
        explanation:"The Salesforce for Slack app provides CRM record views, deal notifications, task management, and Salesforce search capabilities directly within Slack channels and DMs."
      },
      {
        domain:"Security & Compliance",
        q:"What is two-factor authentication (2FA) enforcement used for in Slack?",
        opts:[
          "To encrypt message content",
          "To require users to verify their identity with a second factor in addition to their password",
          "To limit login to specific IP addresses",
          "To enable SSO with Google"
        ],
        correct:1,
        explanation:"Enforcing 2FA requires all workspace members to use a second authentication factor (authenticator app, SMS) in addition to their password — significantly reducing account takeover risk."
      },
      {
        domain:"Workspace & Org Management",
        q:"What happens to Slack messages when a user leaves a workspace?",
        opts:[
          "All their messages are deleted",
          "Their messages remain in Slack; only their user account is deactivated",
          "Their messages move to a special archive",
          "Their messages are transferred to their manager"
        ],
        correct:1,
        explanation:"When a user is deactivated in Slack, their messages remain in channels for compliance and context. The account is deactivated (not deleted), and message history is preserved."
      },
      {
        domain:"Channels & Messaging",
        q:"Which Slack admin setting prevents members from creating new channels?",
        opts:[
          "Channel naming policy",
          "Restricting channel creation to admins and owners only in workspace settings",
          "Enterprise Grid channel governance",
          "DLP policy enforcement"
        ],
        correct:1,
        explanation:"Workspace admins can restrict channel creation so only admins and workspace owners can create new channels — useful for enterprises that need governance over channel sprawl."
      },
      {
        domain:"Integrations & Apps",
        q:"What should admins do before approving a new app from the Slack App Directory?",
        opts:[
          "Install it on all users' accounts immediately",
          "Review the app's permissions, data access, and privacy policy; test in a controlled environment",
          "Request Slack support to evaluate it",
          "Require the app developer to obtain Salesforce certification"
        ],
        correct:1,
        explanation:"Before approving apps, admins should review what data permissions the app requests, the developer's privacy policy, and whether it meets the organization's security requirements."
      },
      {
        domain:"Security & Compliance",
        q:"What is the purpose of a Slack Data Loss Prevention (DLP) integration?",
        opts:[
          "To prevent message deletion",
          "To scan messages for sensitive data (PII, credit cards, confidential info) and take automated action",
          "To back up Slack messages to an external server",
          "To monitor employee productivity"
        ],
        correct:1,
        explanation:"DLP integrations scan Slack messages and files in real-time for sensitive data patterns — they can alert admins, quarantine messages, or block posts containing confidential information."
      },
      {
        domain:"Workspace & Org Management",
        q:"What is the Slack Analytics dashboard used for?",
        opts:[
          "Building custom Slack apps",
          "Measuring workspace adoption metrics like active users, messages sent, and channel activity",
          "Auditing security events",
          "Managing billing and subscriptions"
        ],
        correct:1,
        explanation:"Slack Analytics provides admins with usage metrics — active users (daily, weekly, monthly), messages sent, channels created, and app usage — to measure adoption and identify engagement trends."
      },
      {
        domain:"Integrations & Apps",
        q:"Which Slack feature allows admins to create forms and collect structured information within Slack?",
        opts:[
          "Slash commands",
          "Workflow Builder forms",
          "Slack Canvas",
          "App home tabs"
        ],
        correct:1,
        explanation:"Workflow Builder includes a form step that allows users to submit structured data via a modal in Slack — collected responses can trigger subsequent workflow steps or be sent to a channel."
      },
      {
        domain:"Security & Compliance",
        q:"What is SAML SSO used for in Slack?",
        opts:[
          "Encrypting direct messages",
          "Allowing users to log into Slack using credentials from their corporate Identity Provider instead of Slack passwords",
          "Integrating Slack with Salesforce CRM",
          "Enabling two-factor authentication"
        ],
        correct:1,
        explanation:"SAML SSO lets organizations authenticate Slack users via their IdP (Okta, Azure AD, PingFederate) — users sign in with corporate credentials without needing separate Slack passwords."
      },
      {
        domain:"Workspace & Org Management",
        q:"What is the purpose of Slack's Default Channels setting?",
        opts:[
          "To restrict which channels admins can view",
          "To automatically add new workspace members to specified channels when they join",
          "To archive inactive channels automatically",
          "To set read-only channels for announcements"
        ],
        correct:1,
        explanation:"Default channels are automatically assigned to every new member who joins the workspace — common examples include #general, #announcements, and #help-desk."
      },
      {
        domain:"Channels & Messaging",
        q:"What is message threading in Slack used for?",
        opts:[
          "To pin important messages",
          "To keep replies to a message organized in a thread without cluttering the main channel",
          "To encrypt sensitive messages",
          "To create a sub-channel"
        ],
        correct:1,
        explanation:"Message threads allow replies to be grouped under the original message — they keep channels focused by moving detailed discussions off the main timeline."
      },
      {
        domain:"Integrations & Apps",
        q:"What is a Slack App Request?",
        opts:[
          "A support ticket to Slack Inc.",
          "A workflow for workspace members to request admin approval for new Slack apps",
          "A type of Slack webhook",
          "A request to create a private channel"
        ],
        correct:1,
        explanation:"The App Request workflow allows members to request apps from the App Directory — admins receive notifications and can approve, deny, or defer requests, maintaining governance over app installations."
      }
    ],
    resources:[
      {
        type:"Trailhead",
        title:"Trailhead: Slack Administrator",
        desc:"Official Trailhead learning path for this certification.",
        url:"https://help.salesforce.com/s/articleView?id=sf.admin_password.htm"
      },
      {
        type:"Community",
        title:"Trailblazer Community",
        desc:"Connect with certified professionals and exam takers.",
        url:"https://help.salesforce.com/s/articleView?id=sf.admin_sharing.htm"
      },
      {
        type:"SFBen",
        title:"SalesforceBen: Slack Administrator Guide",
        desc:"Free certification guide and practice questions.",
        url:"https://www.salesforceben.com/slack-certifications/"
      }
    ],
    tips:[
      {
        icon:"🏢",
        title:"Know Enterprise Grid",
        body:"Enterprise Grid is heavily tested — understand org-level vs workspace-level admin controls, multi-workspace management, and how org owners differ from workspace admins."
      },
      {
        icon:"🔒",
        title:"Security Is 25% of the Exam",
        body:"Data retention, DLP, eDiscovery, SSO, and 2FA are all tested. Know the difference between workspace-level and channel-level retention policies."
      },
      {
        icon:"🔧",
        title:"Workflow Builder Use Cases",
        body:"Know what Workflow Builder can automate without code and common use cases: daily standups, IT request forms, new-hire onboarding flows."
      },
      {
        icon:"📱",
        title:"Slack Connect vs Guest Access",
        body:"Understand the difference between Slack Connect (channel-level cross-org collaboration) and guest users (single or multi-channel guests within your workspace)."
      },
      {
        icon:"📊",
        title:"Analytics Metrics Matter",
        body:"Know the key Slack analytics metrics (daily active users, messages, file shares) and what they indicate about workspace health and adoption."
      }
    ]
  },
  "Tableau Server Administrator": {
    questions:60,
    time:90,
    pass:"72%",
    experience:"Hands-on Tableau Server or Tableau Cloud administration experience",
    trailheadUrl:"https://trailhead.salesforce.com/credentials/tableauservercertifiedassociate",
    prerequisites:[],
    overview:"The Tableau Server Certified Associate (Server Administrator) credential validates skills in deploying, managing, and maintaining Tableau Server and Tableau Cloud environments. It covers installation and configuration, site and user management, security, content governance, and performance monitoring.",
    domains:[
      {
        name:"Installation & Configuration",
        pct:30,
        color:"#0070d2",
        desc:"Tableau Server architecture, installation, and configuration.",
        keyTopics:[
          {
            title:"Architecture Overview",
            desc:"Tableau Server components: Gateway, Application Server, VizQL Server, Data Server, Repository."
          },
          {
            title:"Installation Options",
            desc:"Single-node vs multi-node deployments, hardware requirements, and distributed topology."
          },
          {
            title:"Configuration Settings",
            desc:"TSM (Tableau Services Manager) for configuring server processes and settings."
          }
        ]
      },
      {
        name:"Site & User Management",
        pct:25,
        color:"#1b96ff",
        desc:"Managing Tableau sites, users, groups, and role assignments.",
        keyTopics:[
          {
            title:"Sites",
            desc:"Creating and configuring Tableau Server sites — site roles and isolation."
          },
          {
            title:"User & Group Management",
            desc:"Adding users, assigning site roles, managing groups, and import via Active Directory."
          },
          {
            title:"License Management",
            desc:"Creator, Explorer, Viewer licenses — assignment and usage tracking."
          }
        ]
      },
      {
        name:"Security",
        pct:25,
        color:"#ff6b6b",
        desc:"Tableau Server security: authentication, authorization, and data access control.",
        keyTopics:[
          {
            title:"Authentication Methods",
            desc:"Local auth, Active Directory, SAML, OpenID Connect, and Trusted Tickets."
          },
          {
            title:"Permissions Model",
            desc:"Content permissions, capabilities, and effective permissions in Tableau."
          },
          {
            title:"Row-Level Security",
            desc:"Implementing row-level data security using user filters and entitlement tables."
          }
        ]
      },
      {
        name:"Performance & Maintenance",
        pct:20,
        color:"#4bc885",
        desc:"Monitoring, tuning, backup, and maintenance of Tableau Server.",
        keyTopics:[
          {
            title:"Monitoring & Alerts",
            desc:"TSM status pages, log files, and Resource Monitoring Tool (RMT)."
          },
          {
            title:"Backup & Recovery",
            desc:"tsm maintenance backup and restore procedures."
          },
          {
            title:"Performance Tuning",
            desc:"Caching strategies, extract refresh optimization, and process scaling."
          }
        ]
      }
    ],
    studyDays:[
      {tag:"foundation",focus:"Understand Tableau Server architecture: processes, nodes, and high availability",topics:[{text:"Tableau Help: Tableau Server Architecture Overview",url:"https://help.tableau.com/current/server/en-us/server_process_concepts.htm"},{text:"Trailhead: Tableau Server Administrator Cert Prep",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-tableau-server-certified-administrator-credential"}]},
      {tag:"installation",focus:"Install and configure Tableau Server on Windows or Linux",topics:[{text:"Tableau Help: Install Tableau Server",url:"https://help.tableau.com/current/server/en-us/install_config_top.htm"},{text:"Tableau Help: Get Started with Tableau Server",url:"https://help.tableau.com/current/server/en-us/get_started_server.htm"}]},
      {tag:"tsm",focus:"Use Tableau Services Manager (TSM) CLI and web UI for configuration",topics:[{text:"Tableau Help: TSM Command Line Reference",url:"https://help.tableau.com/current/server/en-us/tsm.htm"},{text:"Tableau Help: TSM Overview",url:"https://help.tableau.com/current/server/en-us/tsm_overview.htm"}]},
      {tag:"sites",focus:"Create and manage sites, projects, and permission hierarchies",topics:[{text:"Tableau Help: Sites Overview",url:"https://help.tableau.com/current/server/en-us/sites_add.htm"},{text:"Tableau Help: Permissions Overview",url:"https://help.tableau.com/current/server/en-us/permission_section.htm"}]},
      {tag:"users",focus:"Manage users, groups, and licensing on Tableau Server",topics:[{text:"Tableau Help: Add Users to Tableau Server",url:"https://help.tableau.com/current/server/en-us/users_add_server.htm"},{text:"Tableau Help: User Licensing",url:"https://help.tableau.com/current/server/en-us/license_server_overview.htm"}]},
      {tag:"security",focus:"Configure authentication: SAML, Active Directory, and local authentication",topics:[{text:"Tableau Help: Authentication Overview",url:"https://help.tableau.com/current/server/en-us/security_auth.htm"},{text:"Tableau Help: Configure SAML Authentication",url:"https://help.tableau.com/current/server/en-us/saml_requ.htm"}]},
      {tag:"performance",focus:"Monitor server performance with Admin Views and TSM monitoring",topics:[{text:"Tableau Help: Admin Views Overview",url:"https://help.tableau.com/current/server/en-us/adminview.htm"},{text:"Tableau Help: Performance Overview",url:"https://help.tableau.com/current/server/en-us/perf_overview.htm"}]},
      {tag:"maintenance",focus:"Perform backups, restore, and regular maintenance tasks",topics:[{text:"Tableau Help: Back Up Tableau Server",url:"https://help.tableau.com/current/server/en-us/db_backup.htm"},{text:"Tableau Help: Restore from Backup",url:"https://help.tableau.com/current/server/en-us/db_restore.htm"}]},
      {tag:"data",focus:"Manage data sources, schedules, and extract refresh jobs",topics:[{text:"Tableau Help: Manage Refresh Schedules",url:"https://help.tableau.com/current/server/en-us/schedule_refresh.htm"},{text:"Tableau Help: Manage Data Sources",url:"https://help.tableau.com/current/server/en-us/datasources.htm"}]}
    ],
    quiz:[
      {
        domain:"Installation & Configuration",
        q:"What is TSM (Tableau Services Manager) used for?",
        opts:[
          "Creating Tableau workbooks",
          "Administering Tableau Server — configuring settings, managing services, and performing maintenance",
          "Building data connections",
          "Publishing content to sites"
        ],
        correct:1,
        explanation:"TSM is the management interface for Tableau Server administration — it provides both a web UI and CLI for configuring processes, managing backups, and controlling server services."
      },
      {
        domain:"Installation & Configuration",
        q:"What component in Tableau Server handles the initial routing of all requests?",
        opts:[
          "VizQL Server",
          "Application Server",
          "Gateway",
          "Data Server"
        ],
        correct:2,
        explanation:"The Gateway is the front-end router/load balancer that receives all HTTP requests and distributes them to the appropriate Tableau Server processes."
      },
      {
        domain:"Site & User Management",
        q:"What is a Tableau Server 'Site'?",
        opts:[
          "A geographic server location",
          "An isolated partition of a Tableau Server instance with its own users, groups, and content",
          "A type of dashboard layout",
          "A Tableau Cloud region"
        ],
        correct:1,
        explanation:"Sites provide multi-tenant isolation on a single Tableau Server — each site has its own users, groups, projects, workbooks, and data sources, completely separate from other sites."
      },
      {
        domain:"Site & User Management",
        q:"What is the difference between a Creator and a Viewer license in Tableau?",
        opts:[
          "Creators can only view; Viewers can build",
          "Creators can build and publish workbooks; Viewers can only view and interact with published content",
          "They are identical but priced differently",
          "Creators require a separate server installation"
        ],
        correct:1,
        explanation:"Creator licenses allow full use of Tableau Desktop, Tableau Prep, and web authoring. Viewer licenses allow viewing and interacting with published dashboards but not creating or editing content."
      },
      {
        domain:"Security",
        q:"What is a Trusted Ticket in Tableau Server used for?",
        opts:[
          "Admin authentication bypass",
          "Embedding Tableau views in external web applications with automatic authentication",
          "Granting permanent admin access to service accounts",
          "A type of SSL certificate"
        ],
        correct:1,
        explanation:"Trusted Tickets enable seamless embedding — the web server requests a ticket from Tableau Server for a specific user and redeems it to display an embedded view without requiring a separate login."
      },
      {
        domain:"Security",
        q:"What is the most granular level at which Tableau permissions can be set?",
        opts:[
          "Server level",
          "Site level",
          "Project level",
          "Individual content item (workbook, data source, view)"
        ],
        correct:3,
        explanation:"Tableau permissions can be set at the individual content item level — each workbook, data source, or view can have its own permission rules, providing the most granular control."
      },
      {
        domain:"Performance & Maintenance",
        q:"What does a 'warm cache' mean in Tableau Server?",
        opts:[
          "The server is overheating",
          "A recently generated view is stored in cache and can be served quickly without re-querying the data source",
          "A pre-scheduled extract refresh",
          "A backup stored in a warm standby server"
        ],
        correct:1,
        explanation:"Cached views are stored temporarily after the first load — subsequent requests for the same view (with same filters) are served from cache, improving response time significantly."
      },
      {
        domain:"Performance & Maintenance",
        q:"What is the purpose of the TSM 'tsm maintenance backup' command?",
        opts:[
          "To delete old log files",
          "To create a backup of the Tableau Server repository and configuration for disaster recovery",
          "To refresh all extract data sources",
          "To restart Tableau Server services"
        ],
        correct:1,
        explanation:"'tsm maintenance backup' creates a .tsbak file containing the server's repository database (users, content, site config) and optionally the data extract files — essential for disaster recovery."
      },
      {
        domain:"Installation & Configuration",
        q:"What is a multi-node Tableau Server deployment used for?",
        opts:[
          "Supporting multiple Tableau Desktop versions simultaneously",
          "Distributing server processes across multiple machines for high availability and scalability",
          "Running Tableau Server in multiple cloud regions simultaneously",
          "Isolating content for different departments"
        ],
        correct:1,
        explanation:"Multi-node deployments distribute Tableau Server processes (VizQL, Application, Gateway, Data Server) across multiple machines to improve performance, scalability, and high availability."
      },
      {
        domain:"Site & User Management",
        q:"What is an 'Unlicensed' user in Tableau Server?",
        opts:[
          "A user who has been banned",
          "A user whose account exists but has no active license assigned — they cannot access Tableau",
          "A free tier user with view-only access",
          "A guest user from outside the organization"
        ],
        correct:1,
        explanation:"Unlicensed users have accounts in Tableau Server but cannot log in or access content — this state is typically used temporarily when licenses need to be reassigned."
      },
      {
        domain:"Security",
        q:"How does row-level security using 'user functions' work in Tableau?",
        opts:[
          "It restricts which dashboards a user can open",
          "It filters the data returned in a view based on the logged-in user's identity, using USERNAME() or ISMEMBEROF() in calculations",
          "It controls file download permissions",
          "It encrypts individual database rows"
        ],
        correct:1,
        explanation:"User filter calculations (using USERNAME(), USERDOMAIN(), or ISMEMBEROF()) return only data rows matching the current user — this implements row-level security at the view level."
      },
      {
        domain:"Performance & Maintenance",
        q:"What does the Resource Monitoring Tool (RMT) provide for Tableau Server?",
        opts:[
          "A tool for building embedded analytics",
          "Real-time monitoring of Tableau Server health, events, and performance metrics",
          "A command-line backup utility",
          "A license usage calculator"
        ],
        correct:1,
        explanation:"RMT is a separately installed monitoring application that provides comprehensive dashboards for Tableau Server health — including CPU, memory, active sessions, background job queues, and error events."
      },
      {
        domain:"Installation & Configuration",
        q:"What is the Tableau Server Repository?",
        opts:[
          "A GitHub repository for Tableau workbooks",
          "The PostgreSQL database that stores Tableau Server metadata: users, workbooks, data sources, and activity logs",
          "A file store for Tableau Desktop backups",
          "The Tableau content library"
        ],
        correct:1,
        explanation:"The Repository is Tableau Server's internal PostgreSQL database — it stores all server metadata including user accounts, site configurations, content metadata, and activity logs used for monitoring."
      },
      {
        domain:"Site & User Management",
        q:"What does syncing with Active Directory allow in Tableau Server?",
        opts:[
          "Publishing workbooks directly from Active Directory",
          "Automatically importing and updating users and groups from an AD server",
          "Replacing Tableau licenses with AD licenses",
          "Encrypting content using AD certificates"
        ],
        correct:1,
        explanation:"Active Directory synchronization automatically imports users and groups from AD into Tableau Server — when users are added or removed in AD, the changes can sync to Tableau without manual admin work."
      },
      {
        domain:"Security",
        q:"What is the purpose of the 'Lock Content Permissions' setting on a Tableau Server project?",
        opts:[
          "To prevent publishing to the project",
          "To force all content in the project to use the project's permission rules, overriding individual item permissions",
          "To archive the project's content",
          "To make the project read-only for all users"
        ],
        correct:1,
        explanation:"Locking content permissions on a project means all workbooks and data sources in that project inherit the project's permissions exactly — individual item overrides are not allowed, simplifying governance."
      },
      {
        domain:"Performance & Maintenance",
        q:"What should be done before upgrading Tableau Server to a new version?",
        opts:[
          "Delete all cached views",
          "Take a full backup using tsm maintenance backup",
          "Notify all users to log out permanently",
          "Uninstall the current version first"
        ],
        correct:1,
        explanation:"Always take a full TSM backup before upgrading — this ensures you can restore to the previous version if the upgrade fails, protecting all user data and configurations."
      },
      {
        domain:"Installation & Configuration",
        q:"What is the minimum number of cores required for a supported Tableau Server installation?",
        opts:[
          "2 cores",
          "4 cores",
          "8 cores",
          "16 cores"
        ],
        correct:2,
        explanation:"Tableau Server requires a minimum of 8 cores for production installations. Development and testing environments may use fewer, but production workloads need at least 8 cores for reliable performance."
      },
      {
        domain:"Site & User Management",
        q:"What is a Tableau Server Group used for?",
        opts:[
          "Organizing workbooks by category",
          "Grouping users to assign permissions collectively rather than individually",
          "Creating shared Tableau Desktop licenses",
          "Connecting to shared data sources"
        ],
        correct:1,
        explanation:"Groups allow admins to assign permissions to multiple users simultaneously — a permission set on a group applies to all members, simplifying access management at scale."
      },
      {
        domain:"Security",
        q:"What type of authentication allows users to log into Tableau Server using an external Identity Provider's credentials?",
        opts:[
          "Local authentication",
          "Active Directory authentication",
          "SAML authentication",
          "Trusted Ticket authentication"
        ],
        correct:2,
        explanation:"SAML (Security Assertion Markup Language) enables federated SSO — users authenticate with their Identity Provider (Okta, ADFS, Azure AD) which issues a SAML assertion Tableau Server trusts."
      },
      {
        domain:"Performance & Maintenance",
        q:"What is an 'extract refresh failure' in Tableau Server and how is it typically resolved?",
        opts:[
          "A UI rendering error — fixed by clearing browser cache",
          "A background job that failed to update a Tableau extract from the source — resolved by checking credentials, source connectivity, and job logs",
          "A server crash requiring full restart",
          "A license expiry warning"
        ],
        correct:1,
        explanation:"Extract refresh failures occur when the background job cannot connect to or query the data source — common causes include expired credentials, source downtime, or schema changes. Checking job logs identifies the root cause."
      }
    ],
    resources:[
      {
        type:"Official",
        title:"Tableau Server Help Documentation",
        desc:"Official Tableau Server administration documentation.",
        url:"https://help.salesforce.com/s/articleView?id=sf.opportunities.htm"
      },
      {
        type:"Official",
        title:"Tableau Server Admin Exam Guide",
        desc:"Official exam outline for the Server Certified Associate credential.",
        url:"https://help.salesforce.com/s/articleView?id=sf.opportunities_overview.htm"
      },
      {
        type:"Trailhead",
        title:"Tableau Server Admin Trail",
        desc:"Hands-on Tableau Server administration learning.",
        url:"https://trailhead.salesforce.com/content/learn/trails/tableau"
      },
      {
        type:"Community",
        title:"Tableau Community Forums",
        desc:"Connect with Tableau Server administrators.",
        url:"https://community.tableau.com"
      }
    ],
    tips:[
      {
        icon:"⚙️",
        title:"TSM is Your Tool",
        body:"Tableau Services Manager (TSM) is central to server administration — know both the web UI and CLI commands for configuration, backup, restore, and maintenance."
      },
      {
        icon:"🔐",
        title:"Permissions Are Cumulative",
        body:"Effective permissions in Tableau are calculated from the most permissive grant across all groups a user belongs to and project permissions — understand how project locking changes this."
      },
      {
        icon:"📊",
        title:"Monitor with RMT",
        body:"The Resource Monitoring Tool provides operational dashboards for Tableau Server health — know what metrics it provides and how to diagnose common performance issues."
      },
      {
        icon:"🗄️",
        title:"Backup Before Everything",
        body:"Always run tsm maintenance backup before upgrades or significant configuration changes — the exam tests knowledge of backup/restore procedures."
      },
      {
        icon:"👥",
        title:"License Types",
        body:"Creator, Explorer, Viewer — know what each can do and how they are counted. License usage monitoring and assignment are common admin scenarios tested."
      }
    ]
  },
  "Platform Administrator II": {
    questions: 60,
    time: 105,
    pass: 65,
    experience: "2+ years as Salesforce Administrator with advanced configuration experience",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-platform-admin2---Plat-Admn-301",
    prerequisites: ["Platform Administrator"],
    overview: "The Salesforce Advanced Administrator certification validates expertise in advanced Salesforce features including advanced automation, data management, analytics, and security. Candidates demonstrate mastery beyond the admin fundamentals.",
    domains: [
      { name: "Security and Access", pct: 20, color: "#00A1E0", desc: "Design and configure Salesforce's layered security model for user access, record visibility, and data protection.", keyTopics: [
      {title:"Profiles and Permission Sets",desc:"Profiles set baseline access; Permission Sets layer additional permissions — use Permission Set Groups to bundle sets by job role."},
      {title:"OWD and Role Hierarchy",desc:"OWD defines the most restrictive sharing baseline; the role hierarchy grants upward visibility — together they form the foundation of record access."},
      {title:"Sharing Rules",desc:"Criteria-based and ownership-based sharing rules extend access beyond OWD to users who need it for their role."},
      {title:"Field-Level Security",desc:"FLS controls which fields each profile or permission set can read or edit — enforced in the UI and API (with enforced FLS in Apex)."},
      {title:"Login Security",desc:"Restrict access with login hours, trusted IP ranges, MFA enforcement, and session timeout settings."}
    ] },
      { name: "Extending Custom Objects and Applications", pct: 8, color: "#2ECC71", desc: "Create and configure custom objects, fields, and relationships to extend the Salesforce data model.", keyTopics: [
      {title:"Custom Object Design",desc:"Custom objects store business-specific data — define field types, required fields, record name format, and search layout at creation time."},
      {title:"Relationship Types",desc:"Master-Detail enforces ownership and enables roll-up summaries; Lookup is flexible and optional; Many-to-Many requires a junction object."},
      {title:"Record Types",desc:"Record types allow different picklist values, page layouts, and business processes for different user groups on the same object."},
      {title:"Formula and Roll-Up Fields",desc:"Formula fields calculate values at runtime; roll-up summaries aggregate child records — both are read-only and require no code."},
      {title:"Schema Builder",desc:"Schema Builder provides a visual ERD-style view for designing and modifying the data model — useful for understanding complex object relationships."}
    ] },
      { name: "Auditing and Monitoring", pct: 6, color: "#F39C12", desc: "Monitor user activity, configuration changes, and data access across the Salesforce org.", keyTopics: [
      {title:"Setup Audit Trail",desc:"Records the last 180 days of configuration changes — captures who changed what and when, essential for compliance and troubleshooting."},
      {title:"Field History Tracking",desc:"Track changes to up to 20 fields per object — captures old and new values, who changed them, and when."},
      {title:"Login History",desc:"View recent login attempts including IP address, browser, and success/failure status — identify suspicious login patterns."},
      {title:"Event Monitoring",desc:"Premium feature that captures detailed event logs for API calls, report exports, logins, and more — requires Shield or Event Monitoring license."},
      {title:"Debug Logs",desc:"Debug logs capture Apex execution details for troubleshooting — set log levels per user and download from Setup."}
    ] },
      { name: "Sales Cloud", pct: 10, color: "#E74C3C", desc: "Configure Sales Cloud features including leads, opportunities, forecasting, and territory management.", keyTopics: [
      {title:"Lead Management",desc:"Configure lead assignment rules, web-to-lead capture, auto-response rules, and conversion field mapping."},
      {title:"Opportunity Management",desc:"Set up opportunity stages, sales processes per record type, path guidance, and probability settings."},
      {title:"Forecasting",desc:"Configure collaborative forecasting: forecast types, quota management, and adjustment permissions for managers."},
      {title:"Territory Management",desc:"Enterprise Territory Management assigns accounts to territories based on rules — supports complex, hierarchical sales territory structures."},
      {title:"Einstein Activity Capture",desc:"Sync emails and calendar events from Gmail or Outlook to Salesforce automatically — reduces manual logging for sales reps."}
    ] },
      { name: "Service Cloud", pct: 10, color: "#1ABC9C", desc: "Configure Service Cloud features including case management, knowledge, entitlements, and service channels.", keyTopics: [
      {title:"Case Management",desc:"Configure case assignment and escalation rules, queues, and auto-response rules to route and acknowledge incoming customer requests."},
      {title:"Knowledge Management",desc:"Set up Knowledge article types, data categories, and publishing workflows — enable agents and customers to find answers quickly."},
      {title:"Entitlements and Milestones",desc:"Entitlements define the service level a customer is owed; milestones track SLA deadlines (e.g., first response, resolution time) on cases."},
      {title:"Omni-Channel Routing",desc:"Route cases, chats, and messaging conversations to agents based on capacity, skills, and availability in real time."},
      {title:"Service Console",desc:"Configure the Lightning Service Console with utility bar, push notifications, split view, and macros for agent efficiency."}
    ] },
      { name: "Data Management", pct: 10, color: "#BDC3E7", desc: "Manage data quality, imports, exports, duplicate prevention, and data archiving in Salesforce.", keyTopics: [
      {title:"Data Import Wizard",desc:"Supports imports of up to 50,000 records for standard objects via the browser — includes duplicate matching during import."},
      {title:"Data Loader",desc:"CLI tool for bulk inserts, updates, upserts, deletes, and exports — handles millions of records using CSV files."},
      {title:"Duplicate Rules and Matching Rules",desc:"Matching rules identify potential duplicates; duplicate rules define actions (alert or block) when a match is found on save or import."},
      {title:"Data Export Service",desc:"Schedule automated weekly or monthly exports of all org data as CSV files — a basic backup mechanism."},
      {title:"Big Objects and Archiving",desc:"Big Objects store billions of historical records at low cost — use Async SOQL to query them. Consider archiving strategies for LDV."}
    ] },
      { name: "Content Management", pct: 4, color: "#FF6B35", desc: "Manage files, documents, and content sharing across the Salesforce org using Files and Content Libraries.", keyTopics: [
      {title:"Salesforce Files",desc:"Salesforce Files is the primary content management tool — attach files to records, share them with users or groups, and version them."},
      {title:"Libraries",desc:"Content Libraries organize files into shared repositories — control access with library permissions and member roles."},
      {title:"File Sharing Settings",desc:"Control how files can be shared: internally, externally, or publicly — set org-wide defaults and per-file sharing."},
      {title:"Google Drive and SharePoint Integration",desc:"Files Connect integrates Salesforce with Google Drive and SharePoint — users access external files within Salesforce without migration."},
      {title:"Chatter and Files",desc:"Files shared in Chatter posts are visible to all feed followers — understand the sharing implications of posting files in public groups."}
    ] },
      { name: "Change Management", pct: 6, color: "#9B59B6", desc: "Plan and execute Salesforce changes using best practices for deployment, testing, and user adoption.", keyTopics: [
      {title:"Sandbox Strategy",desc:"Use Developer sandboxes for build, Developer Pro for isolated testing, Partial/Full for UAT — match sandbox type to use case."},
      {title:"Change Sets",desc:"Change sets move metadata between related orgs — build outbound sets in source, deploy inbound in target — UI-driven with no version history."},
      {title:"Deployment Tools",desc:"Choose between Change Sets (simple), SFDX CLI (automated), DevOps Center (native pipeline), and third-party tools (Copado, Gearset)."},
      {title:"User Training",desc:"Train users before go-live using role-based training, sandbox environments, and Trailhead — adoption depends on preparation."},
      {title:"Release Communication",desc:"Communicate upcoming changes to users in advance — release notes, training sessions, and sandbox previews reduce resistance."}
    ] },
      { name: "Analytics, Reports, and Dashboards", pct: 13, color: "#00A1E0", desc: "Design reports and dashboards that give users actionable insights from Salesforce data.", keyTopics: [
      {title:"Report Types",desc:"Report types define the objects and fields available — choose or create the right report type before building the report."},
      {title:"Report Formats",desc:"Tabular (flat list), Summary (grouped), Matrix (cross-tab), and Joined (multiple blocks) — match format to the analytical need."},
      {title:"Filters and Bucketing",desc:"Use field filters, cross-filters, and bucket columns to slice and categorize data without modifying the underlying records."},
      {title:"Dashboard Components",desc:"Charts, tables, gauges, and metrics powered by source reports — each component answers a specific business question."},
      {title:"Report Subscriptions",desc:"Schedule reports to be emailed to users — keep stakeholders informed without requiring them to log in."}
    ] },
      { name: "Process Automation", pct: 13, color: "#2ECC71", desc: "Automate business processes using Flow Builder, approval processes, and declarative automation tools.", keyTopics: [
      {title:"Record-Triggered Flows",desc:"Fire on record insert or update — before-save flows update the triggering record efficiently; after-save flows can update related records."},
      {title:"Scheduled Flows",desc:"Run on a recurring schedule or at a date-relative time — useful for SLA follow-ups, batch updates, and reminder notifications."},
      {title:"Screen Flows",desc:"Guide users through multi-step processes with input screens, decisions, and confirmation steps — launched from buttons or quick actions."},
      {title:"Approval Processes",desc:"Multi-step approval chains with auto-approve/reject, parallel approvals, and recall — used for discounts, PTO requests, and change approvals."},
      {title:"Flow Best Practices",desc:"Use before-save flows for field updates on the triggering record; bulkify with collections; avoid SOQL or DML inside loops."}
    ] }
    ],
    studyDays:[
      {tag:"advanced-automation",focus:"Advanced Flow: subflows, fault paths, loops, and screen flow components",topics:[
        {text:"Advanced Flow Building",url:"https://help.salesforce.com/s/articleView?id=sf.flow_build.htm"},
        {text:"Subflows",url:"https://help.salesforce.com/s/articleView?id=sf.flow_ref_elements_subflow.htm"},
        {text:"Fault Paths in Flow",url:"https://help.salesforce.com/s/articleView?id=sf.flow_add_fault_path.htm"},
        {text:"Screen Flow Custom Components",url:"https://developer.salesforce.com/docs/platform/lwc/guide/use-flow.html"},
        {text:"Flow Debugging",url:"https://help.salesforce.com/s/articleView?id=sf.flow_test.htm"},
        {text:"Admin II Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Advanced-Administrator-Exam-Guide"}
      ]},
      {tag:"advanced-security",focus:"Advanced security: session policies, transaction security, audit trail, and health check",topics:[
        {text:"Session Security Settings",url:"https://help.salesforce.com/s/articleView?id=sf.security_auth_timeout.htm"},
        {text:"Transaction Security Policies",url:"https://help.salesforce.com/s/articleView?id=sf.transaction_security_policy.htm"},
        {text:"Setup Audit Trail",url:"https://help.salesforce.com/s/articleView?id=sf.admin_monitorsetup.htm"},
        {text:"Salesforce Health Check",url:"https://help.salesforce.com/s/articleView?id=sf.security_health_check.htm"},
        {text:"Login Forensics",url:"https://help.salesforce.com/s/articleView?id=sf.security_login_forensics.htm"},
        {text:"Shield Event Monitoring",url:"https://help.salesforce.com/s/articleView?id=sf.event_monitoring_overview.htm"}
      ]},
      {tag:"change-management",focus:"Change and release management: sandboxes, change sets, and deployment strategies",topics:[
        {text:"Sandbox Types",url:"https://help.salesforce.com/s/articleView?id=sf.data_sandbox_environments.htm"},
        {text:"Change Sets",url:"https://help.salesforce.com/s/articleView?id=sf.changesets.htm"},
        {text:"Sandbox Refresh",url:"https://help.salesforce.com/s/articleView?id=sf.data_sandbox_refresh.htm"},
        {text:"Deployment Best Practices",url:"https://help.salesforce.com/s/articleView?id=sf.changesets_best_practices.htm"},
        {text:"Metadata Coverage Report",url:"https://developer.salesforce.com/docs/metadata-coverage"},
        {text:"Unlocked Packages Overview",url:"https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_intro.htm"}
      ]},
      {tag:"analytics-advanced",focus:"Advanced analytics: joined reports, historical trending, Einstein Analytics basics",topics:[
        {text:"Joined Reports",url:"https://help.salesforce.com/s/articleView?id=sf.reports_joined_overview.htm"},
        {text:"Historical Trending Reports",url:"https://help.salesforce.com/s/articleView?id=sf.reports_enable_historical_trending.htm"},
        {text:"CRM Analytics Overview",url:"https://help.salesforce.com/s/articleView?id=sf.bi_overview.htm"},
        {text:"Report Subscriptions",url:"https://help.salesforce.com/s/articleView?id=sf.reports_subscribe_overview.htm"},
        {text:"Analytics Snapshots",url:"https://help.salesforce.com/s/articleView?id=sf.data_about_analytic_snap.htm"},
        {text:"Admin II Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-advanced-administrator-credential"}
      ]},
      {tag:"exam-prep-admin2",focus:"Admin II exam prep: scenarios across advanced automation, security, and change management",topics:[
        {text:"Admin II Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Advanced-Administrator-Exam-Guide"},
        {text:"Admin II Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-advanced-administrator-credential"},
        {text:"Advanced Admin Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_adv_admin"},
        {text:"Security Specialist Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_security"},
        {text:"Reports and Dashboards Specialist Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_rd"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-platform-admin2---Plat-Admn-211"}
      ]}
    ],
    quiz:[
      {domain:"Extending Custom Objects and Applications", q: "Which sharing mechanism allows a record owner to share a specific record with another user?", a: "Manual Sharing", options: ["Sharing Rules", "Role Hierarchy", "Manual Sharing", "Permission Sets"] },
      {domain:"Auditing and Monitoring", q: "What does the Setup Audit Trail track?", a: "Configuration changes made in Setup", options: ["Data changes by users", "Configuration changes made in Setup", "Login attempts", "API calls"] },
      {domain:"Analytics, Reports, and Dashboards", q: "Which type of report allows you to view data from two different report types in one view?", a: "Joined Report", options: ["Summary Report", "Matrix Report", "Joined Report", "Tabular Report"] },
      {domain:"Security and Access", q: "What is the maximum number of criteria-based sharing rules per object?", a: "50", options: ["25", "50", "100", "200"] },
      {domain:"Change Management", q: "Which feature allows admins to delegate user management tasks to non-admin users?", a: "Delegated Administration", options: ["Permission Sets", "Delegated Administration", "Custom Profiles", "Sharing Sets"] },
      {domain:"Analytics, Reports, and Dashboards", q: "What must be true for a dynamic dashboard to work?", a: "The viewer must have the 'View My Team's Dashboards' permission", options: ["The viewer must be a System Administrator", "The viewer must have the 'View My Team's Dashboards' permission", "The running user must be the dashboard creator", "The org must have CRM Analytics enabled"] },
      {domain:"Change Management", q: "Which sandbox type supports a full copy of production data?", a: "Full Sandbox", options: ["Developer Sandbox", "Developer Pro Sandbox", "Partial Copy Sandbox", "Full Sandbox"] },
      {domain:"Data Management", q: "What is an External ID used for in data import?", a: "To upsert records using a non-Salesforce ID field", options: ["To display records in external portals", "To upsert records using a non-Salesforce ID field", "To encrypt sensitive data", "To link to external databases"] },
      {domain:"Process Automation", q: "Which automation tool should be used to invoke a Flow from a record change with the most current Salesforce best practice?", a: "Record-Triggered Flow", options: ["Process Builder", "Workflow Rule", "Record-Triggered Flow", "Apex Trigger"] },
      {domain:"Sales Cloud", q: "In Territory Management 2.0, what determines which accounts belong to a territory?", a: "Assignment Rules", options: ["Role Hierarchy", "Assignment Rules", "Sharing Rules", "OWD Settings"] },
      {domain:"Data Management", q: "Which feature allows you to enforce that duplicate records cannot be created?", a: "Duplicate Rules", options: ["Validation Rules", "Matching Rules", "Duplicate Rules", "Record Types"] },
      {domain:"Security and Access", q: "What is the purpose of a Muting Permission Set?", a: "To remove permissions granted by a Permission Set Group", options: ["To temporarily disable a user", "To remove permissions granted by a Permission Set Group", "To prevent field edits on specific objects", "To restrict login hours"] },
      {domain:"Analytics, Reports, and Dashboards", q: "Which report format supports row-level and column-level subtotals?", a: "Matrix Report", options: ["Tabular Report", "Summary Report", "Matrix Report", "Joined Report"] },
      {domain:"Extending Custom Objects and Applications", q: "What happens to child records when a parent record is deleted in a Master-Detail relationship?", a: "Child records are also deleted", options: ["Child records become orphaned", "Child records are also deleted", "Child records are archived", "An error prevents deletion"] },
      {domain:"Auditing and Monitoring", q: "Which feature allows an admin to monitor real-time events like logins and API calls?", a: "Event Monitoring", options: ["Setup Audit Trail", "Login History", "Event Monitoring", "Debug Logs"] },
      {domain:"Process Automation", q: "In an approval process, what action can a submitter take after submitting for approval?", a: "Recall the approval request", options: ["Approve the request themselves", "Recall the approval request", "Reassign the approver", "Skip to the next step"] },
      {domain:"Content Management", q: "Which Salesforce Knowledge feature categorizes articles for visibility control?", a: "Data Categories", options: ["Article Types", "Data Categories", "Knowledge Channels", "Publication Status"] },
      {domain:"Content Management", q: "What is the primary benefit of Skinny Tables in Salesforce?", a: "Improved query performance on large data sets", options: ["Reduced storage costs", "Improved query performance on large data sets", "Better security for sensitive fields", "Faster screen layouts"] },
      {domain:"Process Automation", q: "Which type of Flow is best for automating a business process that requires user interaction?", a: "Screen Flow", options: ["Record-Triggered Flow", "Schedule-Triggered Flow", "Screen Flow", "Autolaunched Flow"] },
      {domain:"Change Management", q: "What change set component type is NOT supported in change set deployments?", a: "Roles", options: ["Custom Objects", "Apex Classes", "Roles", "Validation Rules"] }
    ],
    tips:[
      "Know the difference between sharing rules, manual sharing, and Apex sharing — and when each is appropriate.",
      "Understand all sandbox types, their data capacity, and refresh intervals by heart.",
      "Practice building complex Flows with fault paths and subflows — these are heavily tested.",
      "Know which metadata types cannot be deployed via change sets (roles, some settings).",
      "Be able to identify when Territory Management 2.0 is the right tool vs. sharing rules.",
      "Understand dynamic dashboards: the 'running user' concept and how viewer permissions apply.",
      "Review the Event Monitoring feature — know what events are captured and how to access them.",
      "For approval processes, know every trigger action and final approval/rejection action available."
    ]
  },

  "CPQ Administrator": {
    questions: 60,
    time: 105,
    pass: 65,
    experience: "6+ months administering Salesforce CPQ with hands-on configuration experience",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-cpq-admin---Sales-Admn-202",
    prerequisites: ["Platform Administrator"],
    overview: "The Salesforce CPQ Specialist certification validates the ability to implement and configure Salesforce CPQ (Configure, Price, Quote). Candidates demonstrate expertise in product catalog setup, pricing, quoting processes, contracts, and amendments.",
    domains: [
      { name: "CPQ Package Settings", pct: 8, color: "#00A1E0", desc: "Configure the core Salesforce CPQ package settings that govern calculator behavior and global defaults.", keyTopics: [
      {title:"CPQ Installation and Setup",desc:"Install Salesforce CPQ from AppExchange and configure the CPQ package settings object to set global defaults for pricing and quoting."},
      {title:"Calculator Settings",desc:"Configure when the CPQ calculator runs, background calculation settings, and rounding behavior for pricing calculations."},
      {title:"Quote Settings",desc:"Set default quote validity, quote line grouping behavior, and how line items are sorted and displayed on quotes."},
      {title:"Localization",desc:"Configure currency settings, multi-currency support, and locale-specific formatting for international CPQ deployments."},
      {title:"CPQ Permissions",desc:"Assign CPQ-specific permission sets (CPQ Quote User, CPQ Admin) to control access to quoting, pricing rules, and configuration tools."}
    ] },
      { name: "Products and Product Catalog", pct: 20, color: "#2ECC71", desc: "Build and manage the product catalog including bundles, options, and product features.", keyTopics: [
      {title:"Product Setup",desc:"Create products with the correct product family, subscription type (One-Time, Evergreen, Termed), and pricing tier."},
      {title:"Product Bundles",desc:"Bundles group products together — define a bundle parent and add options that can be required, optional, or conditionally displayed."},
      {title:"Product Options",desc:"Options within a bundle can have min/max quantities, default quantities, and be required or user-selectable."},
      {title:"Feature Groups",desc:"Features organize bundle options into logical groups with their own min/max selection rules — e.g., 'Choose 1-2 support tiers'."},
      {title:"Configuration Attributes",desc:"Bundle-level fields that drive product rules or pricing — e.g., a 'Deployment Type' attribute that changes available options."}
    ] },
      { name: "Pricing", pct: 25, color: "#F39C12", desc: "Configure CPQ's pricing engine including price rules, discount schedules, and contracted pricing.", keyTopics: [
      {title:"Price Books",desc:"Standard and custom price books set per-product prices — CPQ uses the price book assigned to the quote to start pricing."},
      {title:"Discount Schedules",desc:"Volume-based discount tables — Slab applies the tier discount to the full quantity; Range applies each tier's rate only to that quantity band."},
      {title:"Price Rules",desc:"Automated rules that update quote line fields (price, quantity, discount) based on conditions — run in a defined calculation sequence."},
      {title:"Block Pricing",desc:"A flat fee for a quantity range — regardless of exact quantity within the range, the same price applies."},
      {title:"Contracted Pricing",desc:"Account-specific pricing negotiated outside the standard price book — overrides standard prices for named accounts automatically."}
    ] },
      { name: "Quote Templates and Quote Documents", pct: 15, color: "#E74C3C", desc: "Design professional quote documents using CPQ templates and conditional content sections.", keyTopics: [
      {title:"Quote Template Structure",desc:"Templates define the header, line item section, totals block, and footer of the generated PDF or Word document."},
      {title:"Line Columns",desc:"Configure which fields appear as columns in the line items section — show product name, quantity, unit price, discount, and total."},
      {title:"Dynamic Content",desc:"Use conditional template sections to include or exclude content blocks based on quote fields — e.g., show a data processing agreement only for EU customers."},
      {title:"HTML Templates",desc:"CPQ supports HTML-based templates for full design flexibility — embed logos, custom CSS, and brand styling."},
      {title:"Quote Document Generation",desc:"Trigger document generation via the Generate Document button, Flow, or Apex — output can be PDF or Word format."}
    ] },
      { name: "Orders, Contracts, Amendments, and Renewals", pct: 20, color: "#1ABC9C", desc: "Manage the post-quote lifecycle including order generation, contract creation, amendments, and renewals.", keyTopics: [
      {title:"Order Generation",desc:"Ordered quotes create Order records with Order Products — the order captures what was sold and triggers fulfillment processes."},
      {title:"Contracts",desc:"Contracts are created from orders — they track subscription start/end dates, account terms, and are the basis for amendments and renewals."},
      {title:"Amendment Quotes",desc:"Mid-term changes generate an Amendment Quote — CPQ calculates prorated charges for added or removed products automatically."},
      {title:"Renewal Quotes",desc:"At contract end, CPQ generates a Renewal Quote pre-populated with existing products — reps can adjust and send without rebuilding from scratch."},
      {title:"Evergreen vs Termed Subscriptions",desc:"Evergreen subscriptions have no end date and auto-renew; Termed subscriptions have a fixed period and generate renewal quotes."}
    ] },
      { name: "Approvals", pct: 12, color: "#BDC3E7", desc: "Configure CPQ approval processes that gate quoting based on discount levels, product types, or deal size.", keyTopics: [
      {title:"CPQ Approval Conditions",desc:"Define what triggers an approval — common conditions include discount over a threshold, specific product included, or total deal value exceeded."},
      {title:"Approval Chains",desc:"Chain approvals sequentially or in parallel — a deal might need both a manager and a finance approver before submission."},
      {title:"Approval Rules",desc:"CPQ's native approval engine (different from standard Salesforce Approvals) — configure approval rules, groups, and steps within the CPQ package."},
      {title:"Approver Groups",desc:"Groups allow any member to approve — use when any manager in a group can sign off rather than requiring a specific individual."},
      {title:"Approval Notifications",desc:"Configure email alerts to notify approvers when action is required — include a direct link to the quote for one-click review."}
    ] }
    ],
    studyDays:[
      {tag:"cpq-products",focus:"CPQ product catalog: products, options, features, and product rules",topics:[
        {text:"CPQ Product Setup",url:"https://help.salesforce.com/s/articleView?id=sf.cpq_product_setup.htm"},
        {text:"Product Options",url:"https://help.salesforce.com/s/articleView?id=sf.cpq_product_options.htm"},
        {text:"Product Features",url:"https://help.salesforce.com/s/articleView?id=sf.cpq_product_features.htm"},
        {text:"Product Rules",url:"https://help.salesforce.com/s/articleView?id=sf.cpq_product_rules.htm"},
        {text:"Product Filter Fields",url:"https://help.salesforce.com/s/articleView?id=sf.cpq_product_filter_field.htm"},
        {text:"CPQ Admin Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-CPQ-Specialist-Exam-Guide"}
      ]},
      {tag:"cpq-pricing",focus:"CPQ pricing: price rules, discount schedules, block pricing, and contracted prices",topics:[
        {text:"CPQ Pricing Methods",url:"https://help.salesforce.com/s/articleView?id=sf.cpq_pricing_methods.htm"},
        {text:"Price Rules",url:"https://help.salesforce.com/s/articleView?id=sf.cpq_price_rules.htm"},
        {text:"Discount Schedules",url:"https://help.salesforce.com/s/articleView?id=sf.cpq_discount_schedules.htm"},
        {text:"Block Pricing",url:"https://help.salesforce.com/s/articleView?id=sf.cpq_block_pricing.htm"},
        {text:"Contracted Prices",url:"https://help.salesforce.com/s/articleView?id=sf.cpq_contracted_prices.htm"},
        {text:"Proration and Subscription Pricing",url:"https://help.salesforce.com/s/articleView?id=sf.cpq_subscription_pricing.htm"}
      ]},
      {tag:"cpq-quotes-contracts",focus:"CPQ quotes, quote templates, contracts, and renewal management",topics:[
        {text:"Quote Templates",url:"https://help.salesforce.com/s/articleView?id=sf.cpq_quote_templates.htm"},
        {text:"Quote Line Editor",url:"https://help.salesforce.com/s/articleView?id=sf.cpq_quote_line_editor.htm"},
        {text:"CPQ Contracts",url:"https://help.salesforce.com/s/articleView?id=sf.cpq_contracts_overview.htm"},
        {text:"CPQ Renewals",url:"https://help.salesforce.com/s/articleView?id=sf.cpq_renewals.htm"},
        {text:"CPQ Amendments",url:"https://help.salesforce.com/s/articleView?id=sf.cpq_amendments.htm"},
        {text:"CPQ Orders",url:"https://help.salesforce.com/s/articleView?id=sf.cpq_orders_overview.htm"}
      ]},
      {tag:"exam-prep-cpq",focus:"CPQ Administrator exam prep: product catalog, pricing, and contract scenarios",topics:[
        {text:"CPQ Specialist Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-CPQ-Specialist-Exam-Guide"},
        {text:"CPQ Specialist Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-cpq-specialist-credential"},
        {text:"CPQ Specialist Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_cpq_specialist"},
        {text:"CPQ Documentation",url:"https://help.salesforce.com/s/articleView?id=sf.cpq_overview.htm"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-cpq-specialist---CPQ-Spec-201"},
        {text:"Revenue Cloud Trailhead Module",url:"https://trailhead.salesforce.com/content/learn/modules/salesforce-cpq-basics"}
      ]}
    ],
    quiz:[
      {domain:"Products and Product Catalog", q: "What is the correct order of the CPQ pricing waterfall?", a: "List Price → Discount Schedule → Special Price → Customer Price", options: ["Cost Price → List Price → Net Price", "List Price → Discount Schedule → Special Price → Customer Price", "Customer Price → Special Price → Net Price", "List Price → Block Price → Net Price"] },
      {domain:"Pricing", q: "Which product rule type prevents a quote from being saved if conditions are violated?", a: "Validation Rule", options: ["Alert Rule", "Filter Rule", "Selection Rule", "Validation Rule"] },
      {domain:"Pricing", q: "What is a Contracted Price used for in CPQ?", a: "To provide account-specific pricing that overrides the price book", options: ["To apply volume discounts automatically", "To provide account-specific pricing that overrides the price book", "To define subscription renewal pricing", "To block discounts on specific products"] },
      {domain:"Pricing", q: "Which CPQ feature allows different prices based on quantity tiers?", a: "Discount Schedule", options: ["Block Pricing", "Discount Schedule", "Price Rule", "Subscription Pricing"] },
      {domain:"Pricing", q: "What is the purpose of a Price Rule in CPQ?", a: "To automate price calculations based on conditions", options: ["To prevent discounting below a threshold", "To automate price calculations based on conditions", "To enforce product selection constraints", "To generate renewal opportunities"] },
      {domain:"Products and Product Catalog", q: "Which type of product is used to group related products that are sold together?", a: "Bundle", options: ["Kit", "Bundle", "Package", "Configuration"] },
      {domain:"Products and Product Catalog", q: "What CPQ setting controls whether a product is available for individual sale or only as a bundle component?", a: "Component", options: ["Optional", "Required", "Component", "Feature"] },
      {domain:"Pricing", q: "Which field on a Quote Line stores the price after all automated discounts but before the rep's manual discount?", a: "Special Price", options: ["Net Price", "Customer Price", "Special Price", "List Price"] },
      {domain:"Orders, Contracts, Amendments, and Renewals", q: "What is the purpose of Co-termination in CPQ subscriptions?", a: "To align subscription end dates for products on the same account", options: ["To automatically renew contracts", "To align subscription end dates for products on the same account", "To merge multiple quotes into one", "To synchronize discount schedules"] },
      {domain:"Orders, Contracts, Amendments, and Renewals", q: "Which CPQ object stores the line items for an active contract?", a: "Subscriptions", options: ["Contract Products", "Order Products", "Subscriptions", "Contracted Products"] },
      {domain:"Orders, Contracts, Amendments, and Renewals", q: "What is required before generating an Order from a CPQ Quote?", a: "The Quote must be marked as Primary and the Opportunity stage must be Closed Won", options: ["The Quote must be approved", "The Quote must be marked as Primary and the Opportunity stage must be Closed Won", "The Contract must be activated", "The customer must sign the quote document"] },
      {domain:"CPQ Package Settings", q: "Which feature in CPQ allows you to synchronize a field value from a Quote Line to a standard Salesforce object field?", a: "Twin Fields", options: ["Formula Fields", "Twin Fields", "Price Actions", "Lookup Queries"] },
      {domain:"Orders, Contracts, Amendments, and Renewals", q: "What happens during an Amendment in CPQ?", a: "A new quote is created to modify an existing active contract", options: ["The original contract is deleted and replaced", "A new quote is created to modify an existing active contract", "Contract lines are updated directly without a quote", "A renewal opportunity is automatically created"] },
      {domain:"Orders, Contracts, Amendments, and Renewals", q: "Which CPQ setting determines whether subscription products renew at the same price or at the current list price?", a: "Renewal Pricing Method", options: ["Renewal Term", "Co-term Method", "Renewal Pricing Method", "Subscription Pricing Method"] },
      {domain:"Pricing", q: "What is a Lookup Query used for in CPQ Price Rules?", a: "To retrieve values from a lookup object to use in price calculations", options: ["To search the product catalog during quoting", "To retrieve values from a lookup object to use in price calculations", "To query historical pricing data", "To look up account-specific discounts"] },
      {domain:"CPQ Package Settings", q: "Which option in the Quote Line Editor allows reps to configure a bundle's components?", a: "Configure button", options: ["Edit Components button", "Configure button", "Bundle Setup link", "Product Options tab"] },
      {domain:"Products and Product Catalog", q: "What does the CPQ 'Percent Of Total' pricing method calculate?", a: "A product price as a percentage of the total quote value", options: ["A discount as a percentage of the list price", "A product price as a percentage of the total quote value", "Tax as a percentage of the order total", "A fee as a percentage of the subscription term"] },
      {domain:"Quote Templates and Quote Documents", q: "Which CPQ feature allows different sections of a quote document to show/hide based on data conditions?", a: "Conditional Template Content", options: ["Dynamic Sections", "Conditional Template Content", "Template Variables", "Quote Rules"] },
      {domain:"CPQ Package Settings", q: "In CPQ, what is the purpose of an Option Constraint?", a: "To define dependency rules between product options in a bundle", options: ["To limit the quantity of a product option", "To define dependency rules between product options in a bundle", "To restrict which accounts can select certain options", "To enforce approval for high-value options"] },
      {domain:"Products and Product Catalog", q: "Which object in CPQ represents a product that has been placed on an activated contract?", a: "Subscription", options: ["Contracted Product", "Order Product", "Quote Line", "Subscription"] }
    ],
    tips:[
      "Memorize the CPQ pricing waterfall — nearly every pricing question is based on understanding it.",
      "Know all four product rule types (validation, selection, filter, alert) and when to use each.",
      "Understand the amendment and renewal flows thoroughly — these are a major exam focus.",
      "Practice building discount schedules with both volume and term dimensions.",
      "Know the difference between Subscriptions and Order Products in the CPQ data model.",
      "Be able to explain what co-termination is and how it affects renewal dates.",
      "Understand the purpose of Twin Fields for syncing data to standard Salesforce objects.",
      "Know the full order-of-operations: Quote → Order → Contract → Amendment/Renewal."
    ]
  },

  "Marketing Cloud Engagement Administrator": {
    questions: 60,
    time: 90,
    pass: 67,
    experience: "1+ year administering Marketing Cloud Engagement with hands-on experience across core features",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-mce-admin---MCE-Admn-201",
    prerequisites: [],
    overview: "The Marketing Cloud Engagement Administrator certification validates expertise in administering the Marketing Cloud Engagement platform. Candidates demonstrate ability to configure the platform, manage users and security, implement data architecture, and maintain deliverability.",
    domains: [
      { name: "Digital Marketing Concepts", pct: 10, color: "#00A1E0", desc: "Understand fundamental digital marketing concepts that underpin Marketing Cloud configuration decisions.", keyTopics: [
      {title:"Email Marketing Fundamentals",desc:"Email remains the highest-ROI digital channel — understand open rates, click rates, conversion rates, and unsubscribe rates as KPIs."},
      {title:"Customer Lifecycle",desc:"Map customer stages (awareness, acquisition, engagement, retention, advocacy) to MCE journeys and messaging strategies."},
      {title:"Permission-Based Marketing",desc:"Only send to subscribers who have opted in — permission-based marketing improves deliverability and brand trust."},
      {title:"Omnichannel Marketing",desc:"Coordinate messaging across email, SMS, push, and advertising to create a consistent, personalized customer experience."},
      {title:"Marketing Attribution",desc:"Track which campaigns influenced a conversion — first-touch, last-touch, and multi-touch attribution models answer different questions."}
    ] },
      { name: "Subscriber Data Management", pct: 20, color: "#2ECC71", desc: "Manage subscriber data using lists, data extensions, and Contact Builder for accurate targeting.", keyTopics: [
      {title:"Lists vs Data Extensions",desc:"Lists are simple subscriber tables; Data Extensions are flexible relational tables — use DEs for complex segmentation and triggered sends."},
      {title:"Contact Builder",desc:"Contact Builder links data extensions to contacts using a defined relationship — enables cross-channel personalization."},
      {title:"Attribute Groups",desc:"Attribute groups in Contact Builder define how data extensions relate to contacts — foundational for Journey Builder entry sources."},
      {title:"Subscriber Status",desc:"Track subscription status (Active, Unsubscribed, Bounced, Held) and ensure suppression logic respects all unsubscribed records."},
      {title:"Data Retention",desc:"Configure data retention policies on sendable DEs to automatically delete old records — balances data freshness and storage costs."}
    ] },
      { name: "Messaging Features", pct: 20, color: "#F39C12", desc: "Configure email, SMS, and push messaging features across Marketing Cloud's messaging tools.", keyTopics: [
      {title:"Content Builder",desc:"The primary content creation tool — build reusable email templates, content blocks, and landing pages with drag-and-drop."},
      {title:"AMPscript",desc:"AMPscript personalizes content at send time — use it for conditional content blocks, data lookups, and dynamic product recommendations."},
      {title:"MobileConnect SMS",desc:"Configure short codes, keywords, and MO/MT message handling for SMS campaigns — comply with carrier and regulatory requirements."},
      {title:"MobilePush",desc:"Set up iOS and Android push notifications — configure apps, certificates, and push messages in the MobilePush app."},
      {title:"CloudPages",desc:"Create landing pages, microsites, and smart capture forms hosted on Salesforce infrastructure — integrates directly with subscriber data."}
    ] },
      { name: "Platform Administration", pct: 20, color: "#E74C3C", desc: "Administer Marketing Cloud users, business units, permissions, and org-level configuration.", keyTopics: [
      {title:"Business Units",desc:"Partition the MCE org into separate units for brands or regions — each BU has its own contacts, content, sends, and tracking."},
      {title:"User Roles and Permissions",desc:"Assign roles (Admin, Content Creator, Analyst) to control what each user can see and do in Marketing Cloud."},
      {title:"SSO Configuration",desc:"Configure SAML SSO so users log into Marketing Cloud with their corporate identity provider credentials."},
      {title:"Reply Mail Management",desc:"Configure automated handling of reply emails — auto-forward to agents, auto-reply to recipients, or suppress based on reply content."},
      {title:"IP Allowlisting",desc:"Restrict Marketing Cloud access to known corporate IP addresses — adds a network-level layer of security for admin functions."}
    ] },
      { name: "Data Management and Analytics", pct: 15, color: "#1ABC9C", desc: "Import data, manage storage, and extract performance analytics from Marketing Cloud.", keyTopics: [
      {title:"FTP Import",desc:"Automate data imports via the Marketing Cloud FTP site — schedule Import Activities in Automation Studio to process files regularly."},
      {title:"Data Views",desc:"System tables (e.g., _Sent, _Open, _Click, _Bounce) store all send and engagement data — query them via SQL for custom reporting."},
      {title:"Tracking and Analytics",desc:"Email Studio tracking provides open, click, bounce, and unsubscribe metrics per send — use them to optimize future campaigns."},
      {title:"Einstein Engagement Analytics",desc:"Einstein Engagement Scoring predicts which subscribers are likely to engage — use scores for win-back campaigns and suppression."},
      {title:"SQL Query Activity",desc:"Write SQL queries in Automation Studio to create or refresh data extensions from tracking data and subscriber data."}
    ] },
      { name: "Setup, Configuration, and Troubleshooting", pct: 15, color: "#BDC3E7", desc: "Configure Marketing Cloud integrations, troubleshoot common issues, and maintain platform health.", keyTopics: [
      {title:"Marketing Cloud Connect",desc:"Connect MCE to Sales or Service Cloud — configure synced data extensions, triggered sends, and journey entry from CRM events."},
      {title:"Sender Authentication Package (SAP)",desc:"SAP includes a dedicated sending IP, custom tracking domain, and reply mail management — foundational for deliverability."},
      {title:"Deliverability Troubleshooting",desc:"Investigate high bounce rates, spam complaints, and inbox placement issues — check SPF/DKIM records, IP reputation, and list quality."},
      {title:"API Troubleshooting",desc:"Use the Marketing Cloud REST and SOAP APIs to diagnose automation failures, subscriber sync issues, and send errors."},
      {title:"Audit and Error Logs",desc:"Review Automation Studio error logs, Import Activity logs, and the Email Studio bounce summary to identify and resolve processing failures."}
    ] }
    ],
    studyDays:[
      {tag:"mc-setup",focus:"Marketing Cloud account setup: business units, users, roles, and IP warming",topics:[
        {text:"Marketing Cloud Account Setup",url:"https://help.salesforce.com/s/articleView?id=sf.mc_overview_administrators.htm"},
        {text:"Business Units",url:"https://help.salesforce.com/s/articleView?id=sf.mc_overview_business_units.htm"},
        {text:"User Roles and Permissions",url:"https://help.salesforce.com/s/articleView?id=sf.mc_overview_role_permissions.htm"},
        {text:"IP Warming Best Practices",url:"https://help.salesforce.com/s/articleView?id=sf.mc_es_ip_warming.htm"},
        {text:"MC Admin Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Marketing-Cloud-Administrator-Exam-Guide"},
        {text:"MC Admin Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-marketing-cloud-administrator-credential"}
      ]},
      {tag:"mc-data",focus:"Marketing Cloud data management: data extensions, contact model, and data retention",topics:[
        {text:"Data Extensions Overview",url:"https://help.salesforce.com/s/articleView?id=sf.mc_es_create_data_extension.htm"},
        {text:"Contact Model",url:"https://help.salesforce.com/s/articleView?id=sf.mc_cab_contact_builder.htm"},
        {text:"Data Retention Policies",url:"https://help.salesforce.com/s/articleView?id=sf.mc_es_data_retention_policy.htm"},
        {text:"Marketing Cloud Connect",url:"https://help.salesforce.com/s/articleView?id=sf.mc_co_marketing_cloud_connect.htm"},
        {text:"Profile and Preference Center",url:"https://help.salesforce.com/s/articleView?id=sf.mc_es_profile_center.htm"},
        {text:"Subscriber Management",url:"https://help.salesforce.com/s/articleView?id=sf.mc_es_subscribers.htm"}
      ]},
      {tag:"mc-deliverability",focus:"Email deliverability: authentication, SPF, DKIM, DMARC, and bounce handling",topics:[
        {text:"Email Deliverability Overview",url:"https://help.salesforce.com/s/articleView?id=sf.mc_es_deliverability.htm"},
        {text:"SPF and DKIM Authentication",url:"https://help.salesforce.com/s/articleView?id=sf.mc_es_spf_dkim.htm"},
        {text:"DMARC Configuration",url:"https://help.salesforce.com/s/articleView?id=sf.mc_es_dmarc.htm"},
        {text:"Bounce and Unsubscribe Management",url:"https://help.salesforce.com/s/articleView?id=sf.mc_es_bounce_management.htm"},
        {text:"Reply Mail Management",url:"https://help.salesforce.com/s/articleView?id=sf.mc_es_reply_mail.htm"},
        {text:"Compliance and CAN-SPAM",url:"https://help.salesforce.com/s/articleView?id=sf.mc_es_can_spam.htm"}
      ]},
      {tag:"exam-prep-mc-admin",focus:"MC Administrator exam prep: setup, data, deliverability, and compliance scenarios",topics:[
        {text:"MC Administrator Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Marketing-Cloud-Administrator-Exam-Guide"},
        {text:"MC Admin Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-marketing-cloud-administrator-credential"},
        {text:"Marketing Cloud Documentation",url:"https://help.salesforce.com/s/articleView?id=sf.mc_overview.htm"},
        {text:"Email Specialist Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_email_studio_specialist"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-mc-email-admin---MC-Admin-201"},
        {text:"Marketing Cloud Basics Module",url:"https://trailhead.salesforce.com/content/learn/modules/marketing-cloud-basics"}
      ]}
    ],
    quiz:[
      {domain:"Platform Administration", q: "What is the purpose of a Publication List in Marketing Cloud?", a: "To allow subscribers to opt in or out of specific communication types", options: ["To segment subscribers for targeted sends", "To allow subscribers to opt in or out of specific communication types", "To store transactional email content", "To track email engagement over time"] },
      {domain:"Digital Marketing Concepts", q: "Which Marketing Cloud feature is used to create multi-step, multi-channel customer journeys?", a: "Journey Builder", options: ["Automation Studio", "Journey Builder", "Email Studio", "Contact Builder"] },
      {domain:"Subscriber Data Management", q: "What is a Sendable Data Extension?", a: "A data extension linked to the subscriber data model that can be used as a send audience", options: ["Any data extension that stores email content", "A data extension linked to the subscriber data model that can be used as a send audience", "A data extension used only for SQL queries", "A data extension that sends automatically on a schedule"] },
      {domain:"Setup, Configuration, and Troubleshooting", q: "Which authentication standard is used to prove an email was sent from an authorized server for a domain?", a: "DKIM", options: ["DMARC", "SPF", "DKIM", "SSL"] },
      {domain:"Digital Marketing Concepts", q: "What is the purpose of IP Warming?", a: "To gradually build a reputation for a new sending IP address", options: ["To encrypt outbound emails", "To gradually build a reputation for a new sending IP address", "To configure dedicated IP pools for different business units", "To warm up the database before a bulk import"] },
      {domain:"Platform Administration", q: "In Marketing Cloud, what does a Suppression List do?", a: "Prevents specific subscribers from receiving messages", options: ["Removes inactive subscribers permanently", "Prevents specific subscribers from receiving messages", "Suppresses tracking data for specific sends", "Hides certain data extensions from users"] },
      {domain:"Data Management and Analytics", q: "Which Automation Studio activity is used to move data between data extensions using SQL?", a: "Query Activity", options: ["Script Activity", "Filter Activity", "Query Activity", "Data Extract Activity"] },
      {domain:"Platform Administration", q: "What is the Contact Key in Marketing Cloud?", a: "A unique identifier that links subscriber data across channels in Contact Builder", options: ["The email address used as the primary identifier", "A unique identifier that links subscriber data across channels in Contact Builder", "An API key for accessing subscriber data", "The Salesforce Contact ID synced to Marketing Cloud"] },
      {domain:"Data Management and Analytics", q: "Which bounce type indicates a permanent delivery failure and should trigger unsubscription?", a: "Hard Bounce", options: ["Soft Bounce", "Hard Bounce", "Block Bounce", "Technical Bounce"] },
      {domain:"Data Management and Analytics", q: "What Marketing Cloud feature connects data from Salesforce CRM to Marketing Cloud campaigns?", a: "Marketing Cloud Connect", options: ["REST API Integration", "Synchronized Data Extensions", "Marketing Cloud Connect", "AppExchange Connector"] },
      {domain:"Platform Administration", q: "Which role in Marketing Cloud has the highest level of access including account administration?", a: "Administrator", options: ["Marketing Cloud Administrator", "Administrator", "Super User", "Content Creator"] },
      {domain:"Digital Marketing Concepts", q: "What is the purpose of a Send Classification in Marketing Cloud?", a: "To group delivery profile and sender profile settings for sends", options: ["To classify subscribers into groups", "To group delivery profile and sender profile settings for sends", "To categorize email content types", "To define send windows for messages"] },
      {domain:"Messaging Features", q: "What is AMPscript in Marketing Cloud used for?", a: "To personalize email content and logic using a scripting language", options: ["To automate journey entry events", "To personalize email content and logic using a scripting language", "To write SQL queries for data extensions", "To configure API integrations"] },
      {domain:"Subscriber Data Management", q: "Which Marketing Cloud feature stores and manages multi-channel customer profile data?", a: "Contact Builder", options: ["Audience Builder", "Data Designer", "Contact Builder", "Profile Center"] },
      {domain:"Data Management and Analytics", q: "In Automation Studio, what trigger type starts an automation when a file arrives in an FTP folder?", a: "File Drop Automation", options: ["Scheduled Automation", "API Triggered Automation", "File Drop Automation", "Data Event Automation"] },
      {domain:"Platform Administration", q: "What CAN-SPAM requirement must all commercial emails include?", a: "A functional unsubscribe mechanism", options: ["The sender's physical mailing address", "A functional unsubscribe mechanism", "Both a physical address and unsubscribe link", "The sender's phone number"] },
      {domain:"Digital Marketing Concepts", q: "Which Marketing Cloud Studio is used to manage SMS and push notification campaigns?", a: "Mobile Studio", options: ["Social Studio", "Mobile Studio", "Journey Builder", "Advertising Studio"] },
      {domain:"Digital Marketing Concepts", q: "What is a Triggered Send in Marketing Cloud?", a: "A real-time, event-based email send initiated via API or automation", options: ["A scheduled batch email send", "A real-time, event-based email send initiated via API or automation", "An A/B test email deployment", "A journey entry event configuration"] },
      {domain:"Data Management and Analytics", q: "Which Marketing Cloud setting controls how long data in a data extension is retained?", a: "Data Retention Policy", options: ["Data Extension Settings", "Data Retention Policy", "Archive Settings", "Subscriber Expiration"] },
      {domain:"Platform Administration", q: "In Marketing Cloud RBAC, what determines which features a user can access?", a: "Roles assigned to the user", options: ["The business unit the user belongs to", "Roles assigned to the user", "The user's profile in Salesforce CRM", "The user's email domain"] }
    ],
    tips:[
      "Understand the subscriber data model deeply — lists vs. data extensions, when to use each, and the All Subscribers list.",
      "Know deliverability fundamentals: SPF, DKIM, DMARC, IP warming, and bounce handling.",
      "Be familiar with Contact Builder, attribute groups, and cardinality — these connect data across channels.",
      "Know Automation Studio activity types and the difference between scheduled and file-drop triggers.",
      "Understand the CAN-SPAM and GDPR requirements as they apply to Marketing Cloud configuration.",
      "Know the difference between a publication list, suppression list, and exclusion list.",
      "Practice SQL queries used in Query Activity — joining and filtering data extensions is heavily tested.",
      "Understand Marketing Cloud Connect and how Synchronized Data Extensions bring CRM data into MC."
    ]
  },

});
