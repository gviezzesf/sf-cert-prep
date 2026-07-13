Object.assign(EXAM_DATA, {
  "Platform Administrator":{
    questions:60,time:105,pass:"65%",experience:"6 months",
    trailheadUrl:"https://trailheadacademy.salesforce.com/certificate/exam-platform-admin---Plat-Admn-201",
    prerequisites:[],
    overview:"The Platform Administrator certification validates your ability to configure and manage a Salesforce org for a business. It covers the full admin toolkit — user management, the security and sharing model, object and field customisation, Sales and Service Cloud features, Flow Builder automation, reports and dashboards, and data management tools. It is the recommended starting point for anyone new to the Salesforce ecosystem and is a prerequisite for many advanced certifications.",
        domains:[
      {name:"Configuration and Setup",pct:15,color:"#00A1E0",desc:"Understand the information found in the company settings (for example: company settings fiscal year, business hours, currency management, default settings).",keyTopics:[{title:"information found in the company settings",desc:"Describe the information found in the company settings (for example: company settings fiscal year, business hours, currency management, default settings)."},{title:"Distinguish",desc:"Distinguish and understand the administration of declarative configuration of the user interface (UI) (for example: UI/UX settings, app menu, list views, global actions, Lightning App Builder)."},{title:"demonstrate the proper setup",desc:"Given a scenario, demonstrate the proper setup and maintenance of users (user name is unique, locales, working hours, how to distribute licenses, types of licenses, not deleting a user, implications of making inactive, override, assigning feature licenses, management of users with various login methods)."},{title:"various organization Security Controls",desc:"Explain the various organization Security Controls (for example: Identity verification, Setup Audit Trail, Login Hours, Session Settings, agent access)."},{title:"Given a user request scenario, apply the appropriate secu...",desc:"Given a user request scenario, apply the appropriate security controls based on the features and capabilities of the Salesforce sharing model (for example: Teams, Sharing hierarchy, public groups, org-wide defaults, sharing: roles, subordinates, role hierarchy, report and dashboard folders)."},{title:"determine the appropriate use of a custom profile or perm...",desc:"Given a scenario, determine the appropriate use of a custom profile or permission set (using the various profile settings, permission set group, and muting)."}]},
      {name:"Object Manager and Lightning App Builder",pct:15,color:"#2ECC71",desc:"Understand the standard object architecture and relationship model (for example: standard object, parent/child, master detail/lookup/junction relationships, record types, Schema Builder).",keyTopics:[{title:"standard object architecture",desc:"Describe the standard object architecture and relationship model (for example: standard object, parent/child, master detail/lookup/junction relationships, record types, Schema Builder)."},{title:"create, delete,",desc:"Explain how to create, delete, and customize fields and page layouts on standard and custom objects, and know the implications of deleting fields (roll-up summaries, cross object formulas, picklist dependencies, relationship fields)."},{title:"determine how to create",desc:"Given a scenario, determine how to create and assign page layouts, visibility on Lightning page layouts, record types, and business processes for custom and standard objects (quick actions and global actions)."}]},
      {name:"Sales and Marketing Applications",pct:10,color:"#F39C12",desc:"Apply knowledge to identify the capabilities and implications of the sales process (for example: leads, opportunities, path).",keyTopics:[{title:"identify the capabilities",desc:"Given a scenario, identify the capabilities and implications of the sales process (for example: leads, opportunities, path)."},{title:"apply the appropriate sales productivity features using o...",desc:"Given a scenario, apply the appropriate sales productivity features using opportunity tools (for example: dashboards, lead scoring, Einstein for Sales, opportunity scoring, grading, and home page assistant, forecasting, territory management)."},{title:"capabilities of lead automation tools",desc:"Describe the capabilities of lead automation tools and campaign management (for example: leads, lead convert, lead assignment rules, campaign, and campaign members)."}]},
      {name:"Service and Support Applications",pct:10,color:"#E74C3C",desc:"Understand the capabilities of case management (for example: case, case assignment rules, and queues).",keyTopics:[{title:"capabilities of case management",desc:"Describe the capabilities of case management (for example: case, case assignment rules, and queues)."},{title:"identify how to automate case management",desc:"Given a scenario, identify how to automate case management (for example: support process, case auto-response rules, case escalation, Einstein for Service)."}]},
      {name:"Productivity and Collaboration",pct:10,color:"#9B59B6",desc:"Understand the capabilities of activity management (tasks, events).",keyTopics:[{title:"capabilities of activity management",desc:"Describe the capabilities of activity management (tasks, events)."},{title:"features of Chatter",desc:"Describe the features of Chatter (groups, accessibility to groups, internal/external users)."},{title:"capabilities of the Salesforce mobile app",desc:"Describe the capabilities of the Salesforce mobile app (Lightning page, modifying the app, browser, app menu, visibility, branding mobile app, build launchpad)."},{title:"Identify use cases for AppExchange applications",desc:"Identify use cases for AppExchange applications (awareness of managed or unmanaged packages, who is allowed to publish, prompts on AgentExchange, flows)."}]},
      {name:"Data and Analytics Management",pct:17,color:"#1ABC9C",desc:"Understand the considerations when importing, updating, transferring, mass deleting, exporting, and backing up data (Archival, Apex data loader, Import Wizard).",keyTopics:[{title:"considerations when importing, updating, transferring, ma...",desc:"Describe the considerations when importing, updating, transferring, mass deleting, exporting, and backing up data (Archival, Apex data loader, Import Wizard)."},{title:"capabilities",desc:"Describe the capabilities and implications of data validation tools (duplicate and matching rules, validation rules)."},{title:"options available when creating or customizing a report o...",desc:"Describe the options available when creating or customizing a report or report type (join objects together, with or without records, renaming the fields, formulas, bucket, join reports, chart settings, hide details, grouping totals, troubleshooting fields at a high level)."},{title:"impact of the sharing model on reports",desc:"Describe the impact of the sharing model on reports (visibility, understand folder structure, sharing fields)."},{title:"options available when creating",desc:"Describe the options available when creating and modifying dashboards (for example: dashboard widgets, data sources, chart types/settings, subscribing, dynamic dashboard, org licensing limits, view dashboard as, schedule refresh, filters)."}]},
      {name:"Automation",pct:15,color:"#E67E22",desc:"Apply knowledge to identify the appropriate automation solution based on the capabilities of the tool (escalation rules, case assignment rules, lead assignment rules, default automation user, AI).",keyTopics:[{title:"identify the appropriate automation solution based on the...",desc:"Given a scenario, identify the appropriate automation solution based on the capabilities of the tool (escalation rules, case assignment rules, lead assignment rules, default automation user, AI)."},{title:"Describe capabilities, use cases,",desc:"Describe capabilities, use cases, and configuration for Flow (screen flows, record-triggered flows, autolaunched flows, order of execution)."},{title:"Describe capabilities, use cases,",desc:"Describe capabilities, use cases, and configuration for the approval process (criteria for approvers, rejections, approvals)."}]},
      {name:"Agentforce",pct:8,color:"#3498DB",desc:"Understand the capabilities and use cases of Agentforce (scenarios about use cases, when it’s appropriate to use AI, security, troubleshooting agent permissions).",keyTopics:[{title:"capabilities",desc:"Describe the capabilities and use cases of Agentforce (scenarios about use cases, when it’s appropriate to use AI, security, troubleshooting agent permissions)."},{title:"maintain, update, or install prompts",desc:"Explain how to maintain, update, or install prompts and instructions in Agent Builder (light testing, conversation preview)."}]},
    ],
    studyDays:[
      {tag:"user-management",focus:"User management: profiles, roles, permission sets, and user licenses",topics:[
        {text:"Profiles",url:"https://help.salesforce.com/s/articleView?id=platform.admin_userprofiles.htm&type=5"},
        {text:"Permission Sets",url:"https://help.salesforce.com/s/articleView?id=platform.perm_sets_overview.htm&type=5"},
        {text:"Create a Role Hierarchy",url:"https://trailhead.salesforce.com/content/learn/modules/data_security/data_security_roles"},
        {text:"User License Type Options",url:"https://help.salesforce.com/s/articleView?id=platform.users_license_types_options.htm&type=5"},
        {text:"Permission Set Groups",url:"https://trailhead.salesforce.com/content/learn/modules/permission-set-groups"},
        {text:"Define Delegate Administrators",url:"https://help.salesforce.com/s/articleView?id=platform.delegating_user_administration.htm&type=5"}
      ]},
      {tag:"security-sharing",focus:"Security and sharing model: OWDs, sharing rules, field-level security, and record access",topics:[
        {text:"Org-Wide Sharing Defaults",url:"https://help.salesforce.com/s/articleView?id=platform.security_sharing_owd_about.htm&type=5"},
        {text:"Sharing Rules",url:"https://help.salesforce.com/s/articleView?id=platform.security_about_sharing_rules.htm&type=5"},
        {text:"Field-Level Security",url:"https://help.salesforce.com/s/articleView?id=platform.users_profiles_field_perms.htm&type=5"},
        {text:"Sharing and Record Access Features",url:"https://help.salesforce.com/s/articleView?id=platform.managing_the_sharing_model.htm&type=5"},
        {text:"Control Manual Sharing for User Records",url:"https://help.salesforce.com/s/articleView?id=platform.security_sharing_owd_user_manual.htm&type=5"},
        {text:"Shield Platform Encryption",url:"https://trailhead.salesforce.com/content/learn/modules/spe_admins"}
      ]},
      {tag:"objects-fields",focus:"Data model: standard and custom objects, fields, relationships, and schema",topics:[
        {text:"Create a Custom Object",url:"https://help.salesforce.com/s/articleView?id=platform.dev_objectcreate_task_parent.htm&type=5"},
        {text:"Custom Field Types",url:"https://help.salesforce.com/s/articleView?id=platform.custom_field_types.htm&type=5"},
        {text:"Object Relationships",url:"https://help.salesforce.com/s/articleView?id=platform.relationships_considerations.htm&type=5"},
        {text:"Work with Schema Builder",url:"https://trailhead.salesforce.com/content/learn/modules/data_modeling/schema_builder"},
        {text:"Validation Rules",url:"https://help.salesforce.com/s/articleView?id=platform.fields_about_field_validation.htm&type=5"},
        {text:"Build a Formula Field",url:"https://help.salesforce.com/s/articleView?id=platform.customize_formulas.htm&type=5"}
      ]},
      {tag:"automation",focus:"Automation tools: Flow Builder, approval processes, and when to use each",topics:[
        {text:"Build Flows with Flow Builder",url:"https://trailhead.salesforce.com/content/learn/trails/build-flows-with-flow-builder"},
        {text:"Flow Types",url:"https://help.salesforce.com/s/articleView?id=platform.flow_concepts_type.htm&type=5"},
        {text:"Automate Your Approvals with Flow Approval Processes",url:"https://help.salesforce.com/s/articleView?id=platform.automate_automated_approvals.htm&type=5"},
        {text:"Build Flows with Flow Builder",url:"https://trailhead.salesforce.com/content/learn/trails/build-flows-with-flow-builder"},
        {text:"Before-Save Record-Triggered Flows",url:"https://help.salesforce.com/s/articleView?id=platform.flow_concepts_trigger_record.htm&type=5"},
        {text:"What Is a Schedule-Triggered Flow?",url:"https://admin.salesforce.com/blog/2023/what-is-a-schedule-triggered-flow"}
      ]},
      {tag:"sales-service",focus:"Sales Cloud and Service Cloud features: leads, opportunities, cases, and queues",topics:[
        {text:"What Is Lead Management?",url:"https://www.salesforce.com/eu/sales/what-is-lead-management/"},
        {text:"Opportunities",url:"https://help.salesforce.com/s/articleView?id=sales.opportunities.htm&type=5"},
        {text:"Manage and Work with Cases",url:"https://help.salesforce.com/s/articleView?id=service.support_agents_intro.htm&type=5"},
        {text:"Set Up Queues",url:"https://help.salesforce.com/s/articleView?id=service.queues_overview.htm&type=5"},
        {text:"What Are SLA Policies, Entitlements, and Milestones?",url:"https://help.salesforce.com/s/articleView?id=service.it_srvcs_sla_policies_explainer.htm&type=5"},
        {text:"Send and Receive Emails with Email-to-Case",url:"https://help.salesforce.com/s/articleView?id=service.customizesupport_email.htm&type=5"}
      ]},
      {tag:"reports-dashboards",focus:"Reports and dashboards: report types, filters, groupings, and dashboard components",topics:[
        {text:"Custom Report Types",url:"https://help.salesforce.com/s/articleView?id=xcloud.reports_report_type_setup.htm&type=5"},
        {text:"Standard Report Types",url:"https://help.salesforce.com/s/articleView?id=analytics.standard_report_folders.htm&type=5"},
        {text:"Build a Report in Lightning Experience",url:"https://help.salesforce.com/s/articleView?id=analytics.reports_build_lex.htm&type=5"},
        {text:"Dashboards",url:"https://help.salesforce.com/s/articleView?id=analytics.rd_dashboards_overview.htm&type=5"},
        {text:"Filter Report Data",url:"https://help.salesforce.com/s/articleView?id=analytics.reports_builder_filtering_overview.htm&type=5"},
        {text:"Dynamic Dashboards",url:"https://help.salesforce.com/s/articleView?id=analytics.dashboards_dynamic_overview.htm&type=5"}
      ]},
      {tag:"data-management",focus:"Data management: import wizard, data loader, duplicate rules, and data quality",topics:[
        {text:"Data Import Wizard",url:"https://help.salesforce.com/s/articleView?id=sf.data_import_wizard.htm&type=5"},
        {text:"Data Loader Guide",url:"https://developer.salesforce.com/docs/atlas.en-us.dataLoader.meta/dataLoader/data_loader.htm"},
        {text:"Customize Duplicate Management",url:"https://help.salesforce.com/s/articleView?id=sales.duplicate_prevention_map_of_tasks.htm&type=5"},
        {text:"Mass Transfer Records",url:"https://help.salesforce.com/s/articleView?id=platform.admin_transfer.htm&type=5"},
        {text:"Recycle Bin",url:"https://help.salesforce.com/s/articleView?id=xcloud.recycle_bin.htm&type=5"},
        {text:"Data Export FAQ",url:"https://help.salesforce.com/s/articleView?id=000383962&type=1"}
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
    trailmixUrl: "https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-platform-app-builder-credential",
    prerequisites:[
      {name:"Platform Administrator",url:"https://help.salesforce.com/s/articleView?id=000381709&type=1",note:"App Builder builds directly on admin concepts — user management, security model, and object configuration are prerequisite knowledge."}
    ],
    overview:"The Platform App Builder certification is for professionals who design, build, and deploy custom applications using the declarative capabilities of the Salesforce platform. The exam covers the platform fundamentals, data modelling with objects and relationships, Flow Builder automation, Lightning App Builder page design, and app deployment using sandboxes and packages. It is the go-to credential for admins looking to move into a more technical building role without writing code.",
        domains:[
      {name:"Salesforce Fundamentals",pct:23,color:"#00A1E0",desc:"Apply knowledge to identify the boundaries of declarative customization and the use cases for programmatic customization.",keyTopics:[{title:"identify the boundaries of declarative customization",desc:"Given a scenario, identify the boundaries of declarative customization and the use cases for programmatic customization."},{title:"Identify common scenarios for extending an org using the ...",desc:"Identify common scenarios for extending an org using the AppExchange."},{title:"features",desc:"Apply features and capabilities available to restrict and extend object, record, and field access."},{title:"Given a set of business requirements, determine the appro...",desc:"Given a set of business requirements, determine the appropriate sharing solution."},{title:"features",desc:"Identify the features and capabilities available when creating reports, report types, and dashboards."},{title:"Given a set of requirements, determine the appropriate gl...",desc:"Given a set of requirements, determine the appropriate global, object-specific actions and layouts to optimize the Salesforce mobile user experience."},{title:"customizations",desc:"Describe the customizations and use cases for Chatter."}]},
      {name:"Data Modeling and Management",pct:22,color:"#2ECC71",desc:"Apply knowledge to determine the appropriate data model.",keyTopics:[{title:"determine the appropriate data model",desc:"Given a scenario, determine the appropriate data model."},{title:"explain the capabilities of the various relationship types",desc:"Given a scenario, explain the capabilities of the various relationship types and the implications of each on record access, user interface, and reporting."},{title:"determine the considerations when selecting or changing a...",desc:"Given a scenario, determine the considerations when selecting or changing a field data type."},{title:"capabilities",desc:"Explain the capabilities and considerations of the Schema Builder."},{title:"determine the options",desc:"Given a scenario, determine the options and considerations when importing and exporting data, including the capabilities of external data sources."}]},
      {name:"Business Logic and Process Automation",pct:28,color:"#F39C12",desc:"Apply knowledge to demonstrate the use of formula fields to meet stated business requirements.",keyTopics:[{title:"demonstrate the use of formula fields to meet stated busi...",desc:"Given a scenario, demonstrate the use of formula fields to meet stated business requirements."},{title:"determine the capabilities, use cases,",desc:"Given a scenario, determine the capabilities, use cases, and implications of roll-up summary fields."},{title:"demonstrate the use of validation rules to meet stated bu...",desc:"Given a scenario, demonstrate the use of validation rules to meet stated business requirements."},{title:"determine the capabilities",desc:"Given a scenario, determine the capabilities and use cases for approval processes."},{title:"determine the tool or action needed to meet business requ...",desc:"Given a scenario, determine the tool or action needed to meet business requirements."},{title:"Given a set of business requirements, recommend a solutio...",desc:"Given a set of business requirements, recommend a solution to automate business processes while avoiding errors in automation."}]},
      {name:"User Interface",pct:17,color:"#E74C3C",desc:"Understand the user interface customization options.",keyTopics:[{title:"user interface customization options",desc:"Describe the user interface customization options."},{title:"Demonstrate the capabilities",desc:"Demonstrate the capabilities and use cases for custom buttons, links, and actions."},{title:"determine the declarative options available for incorpora...",desc:"Given a scenario, determine the declarative options available for incorporating Lightning components in an application."},{title:"programmatic customizations available for incorporating c...",desc:"Describe the programmatic customizations available for incorporating custom Lightning components in an application."}]},
      {name:"App Deployment",pct:10,color:"#9B59B6",desc:"Given a set of business requirements, recommend a solution for key milestones and considerations when managing the application lifecycle and various types of sandboxes.",keyTopics:[{title:"Given a set of business requirements, recommend a solutio...",desc:"Given a set of business requirements, recommend a solution for key milestones and considerations when managing the application lifecycle and various types of sandboxes."},{title:"Given a use case, demonstrate knowledge, viability,",desc:"Given a use case, demonstrate knowledge, viability, and troubleshooting when using change sets."},{title:"use cases",desc:"Describe the use cases and considerations when using unmanaged and managed packages."},{title:"determine the appropriate deployment plan",desc:"Given a scenario, determine the appropriate deployment plan."}]},
    ],
    studyDays:[
      {tag:"declarative-data",focus:"Data model design: custom objects, fields, relationships, and schema planning",topics:[
        {text:"Data Modeling Module",url:"https://trailhead.salesforce.com/content/learn/modules/data_modeling"},
        {text:"Create a Custom Object",url:"https://help.salesforce.com/s/articleView?id=platform.dev_objectcreate_task_parent.htm&type=5"},
        {text:"Object Relationships",url:"https://help.salesforce.com/s/articleView?id=platform.relationships_considerations.htm&type=5"},
        {text:"Work with Schema Builder",url:"https://trailhead.salesforce.com/content/learn/modules/data_modeling/schema_builder"},
        {text:"Validation Rules",url:"https://help.salesforce.com/s/articleView?id=platform.fields_about_field_validation.htm&type=5"},
        {text:"App Builder Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-App-Builder-Exam-Guide"}
      ]},
      {tag:"automation-builder",focus:"Flow Builder automation: record-triggered, screen flows, and decision elements",topics:[
        {text:"Build Flows with Flow Builder",url:"https://trailhead.salesforce.com/content/learn/trails/build-flows-with-flow-builder"},
        {text:"What Is a Record-Triggered Flow?",url:"https://admin.salesforce.com/blog/2023/what-is-a-record-triggered-flow"},
        {text:"What Is a Screen Flow?",url:"https://admin.salesforce.com/blog/2023/what-is-a-screen-flow"},
        {text:"What Is a Schedule-Triggered Flow?",url:"https://admin.salesforce.com/blog/2023/what-is-a-schedule-triggered-flow"},
        {text:"Decision Element",url:"https://help.salesforce.com/s/articleView?id=platform.flow_ref_elements_decision.htm&type=5"},
        {text:"Automate Your Approvals with Flow Approval Processes",url:"https://help.salesforce.com/s/articleView?id=platform.automate_automated_approvals.htm&type=5"}
      ]},
      {tag:"lightning-pages",focus:"Lightning App Builder: page types, components, visibility filters, and deployment",topics:[
        {text:"Get Help for Lightning App Builder",url:"https://help.salesforce.com/s/articleView?id=platform.lightning_app_builder_overview.htm&type=5"},
        {text:"Page Layouts",url:"https://help.salesforce.com/s/articleView?id=platform.customize_layout.htm&type=5"},
        {text:"Standard Lightning Page Components",url:"https://help.salesforce.com/s/articleView?id=platform.lightning_page_components.htm&type=5"},
        {text:"Add Visibility Rules for Dynamic Pages",url:"https://trailhead.salesforce.com/content/learn/modules/lightning_app_builder/add-visibility-rules-for-dynamic-pages-lab"},
        {text:"Break Up Your Record Details with Dynamic Forms",url:"https://help.salesforce.com/s/articleView?id=platform.dynamic_forms_overview.htm&type=5"},
      ]},
      {tag:"app-deployment",focus:"App deployment: sandboxes, change sets, and App Exchange packaging basics",topics:[
        {text:"Salesforce Sandboxes",url:"https://www.salesforce.com/eu/platform/sandboxes-environments/"},
        {text:"Change Sets",url:"https://help.salesforce.com/s/articleView?id=platform.changesets.htm&type=5"},
        {text:"Managed Package Types",url:"https://www.youtube.com/watch?v=q1nmQFpKAac"},
        {text:"AppExchange Overview",url:"https://appexchange.salesforce.com/"},
        {text:"Deploy Your Changes",url:"https://help.salesforce.com/s/articleView?id=platform.deploy_overview.htm&type=5"},
        {text:"App Builder Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-platform-app-builder-credential"}
      ]},
      {tag:"exam-prep-appbuilder",focus:"App Builder exam prep: data model, automation, Lightning pages, and deployment",topics:[
        {text:"App Builder Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-App-Builder-Exam-Guide"},
        {text:"App Builder Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-platform-app-builder-credential"},
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
    trailmixUrl: null,
    prerequisites:[],
    overview:"The Slack Administrator credential validates the skills needed to configure, manage, and optimize a Slack workspace or Enterprise Grid for an organization. Topics include workspace setup, channel management, user provisioning, security and compliance policies, app integrations, and enterprise administration.",
        domains:[
      {name:"Fundamentals",pct:9,color:"#00A1E0",desc:"Summarize the key privileges and responsibilities of each Slack user role.",keyTopics:[{title:"Summarize the key privileges",desc:"Summarize the key privileges and responsibilities of each Slack user role."},{title:"unique features of each Slack paid plan",desc:"Identify the unique features of each Slack paid plan."},{title:"common responsibilities of Slack Admin",desc:"Identify the common responsibilities of Slack Admin and Owner roles."},{title:"Identify workspace",desc:"Identify workspace and org-level settings and dashboards."}]},
      {name:"Workspace Administration",pct:9,color:"#2ECC71",desc:"Determine when to create a workspace to meet the needs of an organization.",keyTopics:[{title:"Determine when to create a workspace to meet the needs of...",desc:"Determine when to create a workspace to meet the needs of an organization."},{title:"Manage the workspace creation",desc:"Manage the workspace creation and approval process."},{title:"Choose a workspace visibility setting that meets the need...",desc:"Choose a workspace visibility setting that meets the needs of the members and organization."},{title:"Prepare an Enterprise Grid design that meets the needs of...",desc:"Prepare an Enterprise Grid design that meets the needs of the members and organization."},{title:"Recommend how to consolidate workspaces",desc:"Recommend how to consolidate workspaces."}]},
      {name:"Channel and User Group Administration",pct:28,color:"#F39C12",desc:"Set up and administer Slack channels.",keyTopics:[{title:"Set up",desc:"Set up and administer Slack channels."},{title:"Recommend when to use a channel, a direct message",desc:"Recommend when to use a channel, a direct message (DM), or a group DM."},{title:"Recommend when to use a public or private channel",desc:"Recommend when to use a public or private channel."},{title:"Recommend when to use multi-workspace channels",desc:"Recommend when to use multi-workspace channels."},{title:"Administer channel posting permissions",desc:"Administer channel posting permissions."},{title:"Given a business case, recommend when to share a channel ...",desc:"Given a business case, recommend when to share a channel with an outside organization."},{title:"Demonstrate how to manage connections, channels,",desc:"Demonstrate how to manage connections, channels, and DMs with outside organizations."},{title:"Establish channel-naming guidelines",desc:"Establish channel-naming guidelines and set recommended prefixes to meet the needs of an organization."},{title:"Administer policies to manage the status or state of chan...",desc:"Administer policies to manage the status or state of channels (for example, delete, archive, and convert)."},{title:"Recognize when to use",desc:"Recognize when to use and how to set up Slack user groups."}]},
      {name:"User Lifecycle Management",pct:14,color:"#E74C3C",desc:"Implement the best authentication option based on the Slack plan and an organization's requirements.",keyTopics:[{title:"Implement the best authentication option based on the Sla...",desc:"Implement the best authentication option based on the Slack plan and an organization's requirements."},{title:"Recommend a process for new account creation for differen...",desc:"Recommend a process for new account creation for different use cases."},{title:"Recommend when to use a system for cross-domain identity ...",desc:"Recommend when to use a system for cross-domain identity management (SCIM) versus just-in-time (JIT) to provision users."},{title:"Recommend a process for getting new users into the right ...",desc:"Recommend a process for getting new users into the right workspace(s) and channels."},{title:"Demonstrate the two ways full member accounts can be deac...",desc:"Demonstrate the two ways full member accounts can be deactivated (manual deactivation versus SCIM deprovisioning)."},{title:"Create a guest user request",desc:"Create a guest user request and approval process."}]},
      {name:"App Administration",pct:10,color:"#9B59B6",desc:"Summarize the value of interoperability for decision makers and end users.",keyTopics:[{title:"Summarize the value of interoperability for decision makers",desc:"Summarize the value of interoperability for decision makers and end users."},{title:"Use Workflow Builder to automate routine tasks",desc:"Use Workflow Builder to automate routine tasks and manual business processes."},{title:"App installation process",desc:"Understand the App installation process."},{title:"Set up",desc:"Set up and manage an app-approval process."}]},
      {name:"Security",pct:15,color:"#1ABC9C",desc:"Identify Slack product security features and settings to meet an organization's security needs.",keyTopics:[{title:"Identify Slack product security features",desc:"Identify Slack product security features and settings to meet an organization's security needs."},{title:"Describe how Slack prioritizes security governance, risk ...",desc:"Describe how Slack prioritizes security governance, risk management, and compliance and identify examples of each."},{title:"Describe product features that manage access",desc:"Describe product features that manage access and mobile devices to meet specific business needs."},{title:"Recommend product features that protect",desc:"Recommend product features that protect and manage sensitive data to meet specific business needs."},{title:"Recommend product features that govern information to mee...",desc:"Recommend product features that govern information to meet specific business needs."},{title:"Recommend when to audit user activity in Slack",desc:"Recommend when to audit user activity in Slack."}]},
      {name:"Enabling Slack Success",pct:15,color:"#E67E22",desc:"Develop a vision and identify goals for Slack at an organization.",keyTopics:[{title:"Develop a vision",desc:"Develop a vision and identify goals for Slack at an organization."},{title:"Use the analytics dashboard to track Slack usage",desc:"Use the analytics dashboard to track Slack usage."},{title:"Make recommendations based on analytics data",desc:"Make recommendations based on analytics data (for example, channel archival, work with Slack Champions, publish a Slack etiquette guide)."},{title:"Build a Slack team to maintain a workspace or org based o...",desc:"Build a Slack team to maintain a workspace or org based on best practices."},{title:"Enable admins to promote Slack as the Digital HQ for thei...",desc:"Enable admins to promote Slack as the Digital HQ for their organization."},{title:"Promote ongoing member enablement",desc:"Promote ongoing member enablement and engagement with specific programs and resources."}]},
    ],
    studyDays:[
      {tag:"foundation",focus:"Understand the Slack platform, workspace structure, and key features",topics:[{text:"Workspace administration",url:"https://trailhead.salesforce.com/content/learn/modules/slack-basics"},{text:"Salesforce Help: Slack Administrator Overview",url:"https://slack.com/intl/en-gb/help/categories/200122103-Workspace-administration"}]},
      {tag:"setup",focus:"Set up a Slack workspace: workspace settings, profile fields, and domain claiming",topics:[{text:"Review your workspace’s settings",url:"https://slack.com/intl/en-gb/help/articles/360000355143-Review-your-workspace%E2%80%99s-settings"},{text:"Trailhead: Slack Administrator Cert Prep",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-slack-administrator-credential"}]},
      {tag:"users",focus:"Manage users: inviting, deactivating, and provisioning with SCIM",topics:[{text:"Manage members with SCIM provisioning",url:"https://help.salesforce.com/s/articleView?id=slack.slack_salesforce_channels_setup.htm&type=5"},{text:"Salesforce Help: SCIM Provisioning for Slack",url:"https://slack.com/intl/en-gb/help/articles/212572638-Manage-members-with-SCIM-provisioning"}]},
      {tag:"channels",focus:"Manage channels: naming conventions, permissions, and governance policies",topics:[{text:"Use channel management tools",url:"https://slack.com/intl/en-gb/help/articles/360047512554-Use-channel-management-tools"},{text:"Salesforce Help: Channel Permissions in Slack",url:"https://slack.com/intl/en-gb/help/articles/360004635551-Manage-channel-posting-permissions"}]},
      {tag:"security",focus:"Configure SSO, two-factor authentication, and session management",topics:[{text:"Security tips to protect your workspace",url:"https://slack.com/intl/en-gb/help/articles/115004155306-Security-tips-to-protect-your-workspace"},{text:"Salesforce Help: SAML SSO for Slack",url:"https://slack.com/intl/en-gb/help/articles/203772216-Set-up-SAML-single-sign-on-for-Slack"}]},
      {tag:"enterprise",focus:"Understand Enterprise Grid: org management, multi-workspace policies",topics:[{text:"An introduction to Slack Enterprise Grid",url:"https://slack.com/intl/en-gb/resources/why-use-slack/slack-enterprise-grid"},{text:"Salesforce Help: Manage Workspaces in Enterprise Grid",url:"https://trailhead.salesforce.com/content/learn/modules/slack-workspace-design"}]},
      {tag:"apps",focus:"Manage the app directory: approve, restrict, and configure third-party apps",topics:[{text:"Guide to apps in Slack",url:"https://slack.com/intl/en-gb/help/articles/360001537467-Guide-to-apps-in-Slack"},{text:"Salesforce Help: Restrict App Installations",url:"https://slack.com/intl/en-gb/help/articles/1500009181142-Manage-app-settings-and-permissions"}]},
      {tag:"connect",focus:"Configure Slack Connect for external collaboration with partner organizations",topics:[{text:"Getting started with Slack Connect",url:"https://slack.com/intl/en-gb/resources/using-slack/getting-started-with-slack-connect"},{text:"Trailhead: Slack Basics — Slack Connect",url:"https://trailhead.salesforce.com/content/learn/modules/slack-basics"}]},
      {tag:"analytics",focus:"Use Slack analytics to track workspace usage and adoption",topics:[{text:"Understand the data in your Slack analytics dashboard",url:"https://slack.com/intl/en-gb/help/articles/360057638533-Understand-the-data-in-your-Slack-analytics-dashboard"},{text:"Salesforce Help: Message and Channel Activity Reports",url:"https://slack.com/intl/en-gb/help/articles/218407447-View-your-Slack-analytics-dashboard"}]}
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
    trailmixUrl: null,
    prerequisites:[],
    overview:"The Tableau Server Certified Associate (Server Administrator) credential validates skills in deploying, managing, and maintaining Tableau Server and Tableau Cloud environments. It covers installation and configuration, site and user management, security, content governance, and performance monitoring.",
        domains:[
      {name:"Connecting to and Preparing Data",pct:20,color:"#00A1E0",desc:"1.1 User Experience",keyTopics:[{title:"1.1 User Experience",desc:"1.1 User Experience"},{title:"1.1.1 User Interface",desc:"1.1.1 User Interface"},{title:"1.1.2 Navigation",desc:"1.1.2 Navigation"},{title:"1.2 Topology",desc:"1.2 Topology"},{title:"1.2.1 Identify client components",desc:"1.2.1 Identify client components"},{title:"1.2.2 Identify server components",desc:"1.2.2 Identify server components"},{title:"1.2.3 Describe how they work together",desc:"1.2.3 Describe how they work together"},{title:"1.3 Versions",desc:"1.3 Versions"},{title:"1.3.1 Understand:",desc:"1.3.1 Understand:"},{title:"1.3.1.1 How to identify the current version of Tableau Se...",desc:"1.3.1.1 How to identify the current version of Tableau Server"},{title:"1.3.1.2 Where to obtain the latest release of Tableau Server",desc:"1.3.1.2 Where to obtain the latest release of Tableau Server"},{title:"1.3.1.3 Where to access release notes of Tableau Server",desc:"1.3.1.3 Where to access release notes of Tableau Server"},{title:"1.4 Minimum Hardware Requirements",desc:"1.4 Minimum Hardware Requirements"},{title:"1.4.1 Understand:",desc:"1.4.1 Understand:"},{title:"1.4.1.1 RAM requirements",desc:"1.4.1.1 RAM requirements"},{title:"1.4.1.2 CPU requirements",desc:"1.4.1.2 CPU requirements"},{title:"1.4.1.3 Hard disk requirements",desc:"1.4.1.3 Hard disk requirements"},{title:"1.5 Software Requirements",desc:"1.5 Software Requirements"},{title:"1.5.1 List the supporting Operating Systems",desc:"1.5.1 List the supporting Operating Systems"},{title:"1.5.2 Understand:",desc:"1.5.2 Understand:"},{title:"1.5.2.1 Browser requirements",desc:"1.5.2.1 Browser requirements"},{title:"1.5.2.2 Options for email alerts",desc:"1.5.2.2 Options for email alerts"},{title:"1.5.2.3 Anti-virus concerns",desc:"1.5.2.3 Anti-virus concerns"},{title:"1.5.3 Identify the SMTP Server",desc:"1.5.3 Identify the SMTP Server"},{title:"1.5.4 Be familiar with potential port issues",desc:"1.5.4 Be familiar with potential port issues"},{title:"1.5.5 Explain the purpose",desc:"1.5.5 Explain the purpose and benefits of a dedicated server"},{title:"1.5.6 Identify the considerations for running in the cloud",desc:"1.5.6 Identify the considerations for running in the cloud"},{title:"1.6 Licensing",desc:"1.6 Licensing"},{title:"1.6.1 Understand user-based licensing",desc:"1.6.1 Understand user-based licensing"},{title:"1.6.1.1 Describe the different license types",desc:"1.6.1.1 Describe the different license types"},{title:"1.6.1.2 Describe how license types map to site roles",desc:"1.6.1.2 Describe how license types map to site roles"},{title:"1.7 Server Processes",desc:"1.7 Server Processes"},{title:"1.7.1 Describe each Tableau Services Manager",desc:"1.7.1 Describe each Tableau Services Manager and Tableau Server process"},{title:"1.7.2 Understand:",desc:"1.7.2 Understand:"},{title:"1.7.2.1 Default process count at installation",desc:"1.7.2.1 Default process count at installation"},{title:"1.7.2.2 Multiple-instance processes",desc:"1.7.2.2 Multiple-instance processes"},{title:"1.7.2.3 Process-to-process workflows",desc:"1.7.2.3 Process-to-process workflows"},{title:"1.7.2.4 Processes in distributed",desc:"1.7.2.4 Processes in distributed and high-availability environments"},{title:"1.7.2.5 Purpose of a load balancer",desc:"1.7.2.5 Purpose of a load balancer"},{title:"1.8 Data Source Identification",desc:"1.8 Data Source Identification"},{title:"1.8.1 Identify the ports required",desc:"1.8.1 Identify the ports required"},{title:"1.8.2 Identify the necessary database drivers",desc:"1.8.2 Identify the necessary database drivers"},{title:"1.8.3 Understand the differences between:",desc:"1.8.3 Understand the differences between:"},{title:"1.8.3.1 File vs",desc:"1.8.3.1 File vs. Relational vs. Cube"},{title:"1.8.3.2 Extract vs",desc:"1.8.3.2 Extract vs. Live Connections"},{title:"1.8.4 Explain the benefits of published data sources",desc:"1.8.4 Explain the benefits of published data sources"},{title:"1.9 Infrastructure Network",desc:"1.9 Infrastructure Network"},{title:"1.9.1 Understand network latency implications",desc:"1.9.1 Understand network latency implications"},{title:"1.9.2 Explain the risks of Dynamic-IP addressing",desc:"1.9.2 Explain the risks of Dynamic-IP addressing"}]},
      {name:"Installation and Configuration",pct:26,color:"#2ECC71",desc:"2.1 Installation",keyTopics:[{title:"2.1 Installation",desc:"2.1 Installation"},{title:"2.1.1 Understand installation steps",desc:"2.1.1 Understand installation steps and options"},{title:"2.1.1.1 Install Path",desc:"2.1.1.1 Install Path"},{title:"2.1.1.2 Gateway port",desc:"2.1.1.2 Gateway port"},{title:"2.1.2 Understand Identity Store",desc:"2.1.2 Understand Identity Store and SSO options:"},{title:"2.1.2.1 External",desc:"2.1.2.1 External (Active Directory) vs. local"},{title:"2.1.2.2 Trusted Tickets",desc:"2.1.2.2 Trusted Tickets"},{title:"2.1.2.3 SAML",desc:"2.1.2.3 SAML"},{title:"2.1.2.4 Kerberos",desc:"2.1.2.4 Kerberos and OpenID Connect"},{title:"2.1.3 Describe the impact of the automatic-login options",desc:"2.1.3 Describe the impact of the automatic-login options"},{title:"2.1.4 Understand how to set up SSL",desc:"2.1.4 Understand how to set up SSL"},{title:"2.1.5 Understand Tableau best practices for installing a ...",desc:"2.1.5 Understand Tableau best practices for installing a single-machine environment"},{title:"2.1.6 Understand silent installs",desc:"2.1.6 Understand silent installs"},{title:"2.2 Tableau Server Configuration",desc:"2.2 Tableau Server Configuration"},{title:"2.2.1 Understand cache settings",desc:"2.2.1 Understand cache settings"},{title:"2.2.2 Understand how to:",desc:"2.2.2 Understand how to:"},{title:"2.2.2.1 Apply process distribution",desc:"2.2.2.1 Apply process distribution"},{title:"2.2.2.2 Configure Email alerts / subscriptions",desc:"2.2.2.2 Configure Email alerts / subscriptions"},{title:"2.2.2.3 Configure optional customizations",desc:"2.2.2.3 Configure optional customizations"},{title:"2.2.3 Describe:",desc:"2.2.3 Describe:"},{title:"2.2.3.1 Site configuration options",desc:"2.2.3.1 Site configuration options"},{title:"2.2.3.2 User quotas 2.2.3.3 Storage quota",desc:"2.2.3.2 User quotas 2.2.3.3 Storage quota"},{title:"2.2.3.4 How to enable",desc:"2.2.3.4 How to enable and edit site subscriptions"},{title:"2.2.3.5 Project configuration options",desc:"2.2.3.5 Project configuration options"},{title:"2.2.3.6 Group",desc:"2.2.3.6 Group and User Configuration options"},{title:"2.2.4 Understand who can add users",desc:"2.2.4 Understand who can add users"},{title:"2.3 Adding Users",desc:"2.3 Adding Users"},{title:"2.3.1 License type",desc:"2.3.1 License type and site role"},{title:"2.3.2 Admin level",desc:"2.3.2 Admin level"},{title:"2.3.3 Publisher level",desc:"2.3.3 Publisher level"},{title:"2.3.4 Importing via Active Directory or Local",desc:"2.3.4 Importing via Active Directory or Local"},{title:"2.4 Security",desc:"2.4 Security"},{title:"2.4.1 Describe the security configuration for:",desc:"2.4.1 Describe the security configuration for:"},{title:"2.4.1.1 Site level",desc:"2.4.1.1 Site level"},{title:"2.4.1.2 Project level",desc:"2.4.1.2 Project level"},{title:"2.4.1.3 Group level",desc:"2.4.1.3 Group level"},{title:"2.4.1.4 User level",desc:"2.4.1.4 User level"},{title:"2.4.1.5 Data source level",desc:"2.4.1.5 Data source level"},{title:"2.4.1.6 Workbook level",desc:"2.4.1.6 Workbook level"},{title:"2.5 Permissions",desc:"2.5 Permissions"},{title:"2.5.1 Understand:",desc:"2.5.1 Understand:"},{title:"2.5.1.1 System permission composition",desc:"2.5.1.1 System permission composition"},{title:"2.5.1.2 The ramifications of permission design",desc:"2.5.1.2 The ramifications of permission design"},{title:"2.5.1.3 The Tableau Security Model",desc:"2.5.1.3 The Tableau Security Model"},{title:"2.5.2 Describe the differences between Allow v",desc:"2.5.2 Describe the differences between Allow v. Deny v. None"}]},
      {name:"Administration",pct:36,color:"#F39C12",desc:"3.1 Understand how to:",keyTopics:[{title:"3.1 Understand how to:",desc:"3.1 Understand how to:"},{title:"3.1.1 Maintain data connections",desc:"3.1.1 Maintain data connections"},{title:"3.1.2 Create schedules",desc:"3.1.2 Create schedules"},{title:"3.1.3 Create, edit",desc:"3.1.3 Create, edit and delete subscriptions"},{title:"3.1.4 Perform Server analysis",desc:"3.1.4 Perform Server analysis"},{title:"3.1.5 Complete a backup",desc:"3.1.5 Complete a backup and restore"},{title:"3.1.6 Perform cleanup",desc:"3.1.6 Perform cleanup"},{title:"3.1.7 Add, remove, or deactivate users",desc:"3.1.7 Add, remove, or deactivate users"},{title:"3.1.8 Update licenses",desc:"3.1.8 Update licenses"},{title:"3.1.9 Start, stop or restart",desc:"3.1.9 Start, stop or restart"},{title:"3.1.10 Utilize tsm",desc:"3.1.10 Utilize tsm and tabcmd"},{title:"3.1.11 Use REST API",desc:"3.1.11 Use REST API"},{title:"3.1.12 Work with Log Files",desc:"3.1.12 Work with Log Files"},{title:"3.1.13 Understand Embedding",desc:"3.1.13 Understand Embedding"},{title:"3.1.14 Monitor Desktop license usage",desc:"3.1.14 Monitor Desktop license usage"},{title:"3.1.15 Manage workbook",desc:"3.1.15 Manage workbook and data source revision history"},{title:"3.2 Describe how to:",desc:"3.2 Describe how to:"},{title:"3.2.1 View server status in multiple ways",desc:"3.2.1 View server status in multiple ways"},{title:"3.2.2 View email alerts",desc:"3.2.2 View email alerts"},{title:"3.2.3 Set data-driven alerts",desc:"3.2.3 Set data-driven alerts"},{title:"3.2.4 Use built-in administrative views",desc:"3.2.4 Use built-in administrative views"},{title:"3.2.5 Create custom admin views",desc:"3.2.5 Create custom admin views"},{title:"3.2.6 Create a performance recording",desc:"3.2.6 Create a performance recording"},{title:"3.2.7 Create a nested project",desc:"3.2.7 Create a nested project"},{title:"3.2.8 Work with Sites",desc:"3.2.8 Work with Sites and Site Admin options"},{title:"3.3 Contrast end-user with System-administrator capabilities",desc:"3.3 Contrast end-user with System-administrator capabilities"},{title:"3.4 End-user Abilities",desc:"3.4 End-user Abilities"},{title:"3.5 Understand:",desc:"3.5 Understand:"},{title:"3.5.1 Table recommendations",desc:"3.5.1 Table recommendations"},{title:"3.5.2 Publishing views",desc:"3.5.2 Publishing views and data sources"},{title:"3.5.3 Renaming a workbook",desc:"3.5.3 Renaming a workbook"},{title:"3.5.4 Interacting with a view via the Web",desc:"3.5.4 Interacting with a view via the Web"},{title:"3.5.5 Web authoring & editing",desc:"3.5.5 Web authoring & editing"},{title:"3.5.6 How to share views",desc:"3.5.6 How to share views"},{title:"3.5.7 Data Source Certification",desc:"3.5.7 Data Source Certification"},{title:"3.5.8 Extract caching",desc:"3.5.8 Extract caching"}]},
      {name:"Troubleshooting",pct:12,color:"#E74C3C",desc:"4.1 Understand requirements of third-party cookies in a browser",keyTopics:[{title:"4.1 Understand requirements of third-party cookies in a b...",desc:"4.1 Understand requirements of third-party cookies in a browser"},{title:"4.2 Understand how to:",desc:"4.2 Understand how to:"},{title:"4.2.1 Reset passwords for a Tableau user or Tableau Run-A...",desc:"4.2.1 Reset passwords for a Tableau user or Tableau Run-As Service account"},{title:"4.2.2 Package log files for reporting",desc:"4.2.2 Package log files for reporting"},{title:"4.2.3 Use tsm to validate site resources",desc:"4.2.3 Use tsm to validate site resources"},{title:"4.2.4 Rebuild the search index",desc:"4.2.4 Rebuild the search index"},{title:"4.2.5 Use maintenance analysis reports",desc:"4.2.5 Use maintenance analysis reports"},{title:"4.2.6 Create/open support requests",desc:"4.2.6 Create/open support requests"}]},
      {name:"Migration & Upgrade",pct:6,color:"#9B59B6",desc:"5.1 Understand the upgrade process",keyTopics:[{title:"5.1 Understand the upgrade process",desc:"5.1 Understand the upgrade process"},{title:"5.2 Explain how",desc:"5.2 Explain how and why to perform a clean reinstall"},{title:"5.3 Describe how to migrate to different hardware",desc:"5.3 Describe how to migrate to different hardware"},{title:"5.4 Understand backwards compatibility",desc:"5.4 Understand backwards compatibility"}]},
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
        url:"https://help.salesforce.com/s/articleView?id=sales.opportunities.htm&type=5"
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
        domains:[
      {name:"Security and Access",pct:20,color:"#00A1E0",desc:"Apply knowledge to determine the implications to record and field data access (Sharing model, controlled by parent, grant access by hierarchies, dashboard and report folders access, email folder access, Territory Management).",keyTopics:[{title:"determine the implications to record",desc:"Given a scenario, determine the implications to record and field data access (Sharing model, controlled by parent, grant access by hierarchies, dashboard and report folders access, email folder access, Territory Management)."},{title:"capabilities of custom profiles, permission sets,",desc:"Compare and contrast the capabilities of custom profiles, permission sets, and delegated administration."},{title:"determine the implications of user authentication",desc:"Given a scenario, determine the implications of user authentication."},{title:"capabilities of a complex business model",desc:"Compare and contrast the capabilities of a complex business model (Person accounts, Account, Contacts, and Contact to multiple Accounts)."}]},
      {name:"Objects and Applications",pct:19,color:"#2ECC71",desc:"Apply knowledge to determine the appropriate solution to enhance or extend objects (master-detail, lookup, junction object, related list, record type, Schema Builder, and Object Creator).",keyTopics:[{title:"determine the appropriate solution to enhance or extend o...",desc:"Given a scenario, determine the appropriate solution to enhance or extend objects (master-detail, lookup, junction object, related list, record type, Schema Builder, and Object Creator)."},{title:"determine the appropriate solution to enhance or extend t...",desc:"Given a scenario, determine the appropriate solution to enhance or extend the UI/UX with applications (App Manager, Lightning App Builder, Dynamic Forms, standard Lightning page components, Console, and Lightning page analyze button)."}]},
      {name:"Auditing and Monitoring",pct:10,color:"#F39C12",desc:"Apply knowledge to determine the appropriate tools for monitoring and troubleshooting system activity (debug log, set up audit trail).",keyTopics:[{title:"determine the appropriate tools for monitoring",desc:"Given a scenario, determine the appropriate tools for monitoring and troubleshooting system activity (debug log, set up audit trail)."},{title:"ensure sensitive data is set up to support a business/leg...",desc:"Explain how to ensure sensitive data is set up to support a business/legal/compliance use case in production and sandbox environments."},{title:"review",desc:"Explain how to review and troubleshoot security settings including pending updates that may change system access."}]},
      {name:"Cloud Applications",pct:11,color:"#E74C3C",desc:"Understand the features of Salesforce which enable Sales users to conduct the sale process, including products, price books, schedules, orders, and quotes.",keyTopics:[{title:"features of Salesforce which enable Sales users to conduc...",desc:"Describe the features of Salesforce which enable Sales users to conduct the sale process, including products, price books, schedules, orders, and quotes."},{title:"Distinguish",desc:"Distinguish and understand the implications and capabilities of Forecasting and Territory Management."},{title:"create",desc:"Explain how to create and maintain Salesforce Knowledge (article record types, data categories)."},{title:"create",desc:"Explain how to create and maintain service entitlements and entitlement processes."},{title:"features of Salesforce which enable interaction between s...",desc:"Describe the features of Salesforce which enable interaction between support agents and customers (Chat, Case Feed, Service Cloud Console, Experience Cloud sites, Omni-Channel)."},{title:"understand the standard Salesforce suite of products that...",desc:"Given a scenario, understand the standard Salesforce suite of products that enable extending the core platform."}]},
      {name:"Data and Analytics Management",pct:13,color:"#9B59B6",desc:"Explain the tools and best practices for assessing, improving, and enriching data quality (data types, validation, managing duplicates, enriching, archiving).",keyTopics:[{title:"tools",desc:"Explain the tools and best practices for assessing, improving, and enriching data quality (data types, validation, managing duplicates, enriching, archiving)."},{title:"determine the appropriate analytic tools to meet complex ...",desc:"Given a scenario, determine the appropriate analytic tools to meet complex reporting requirements (custom report types, reporting snapshots, complex charting, custom summary formulas, bucketing, joined reports, cross filters, dynamic dashboards, dashboard filters)."},{title:"Understand methods to connect to, access, backup/restore,...",desc:"Understand methods to connect to, access, backup/restore, or archive data outside of the Salesforce Platform (big objects, data warehouse, external objects, data lakes, third-party solutions, and Salesforce Connect)."},{title:"identify the appropriate tools",desc:"Given a scenario, identify the appropriate tools and methods for importing data into Salesforce (data import wizard, data loader, and external ID)."}]},
      {name:"Environment Management and Deployment",pct:7,color:"#1ABC9C",desc:"Understand the options available to move metadata between environments (change sets, sandboxes, and AppExchange - managed/unmanaged).",keyTopics:[{title:"options available to move metadata between environments",desc:"Describe the options available to move metadata between environments (change sets, sandboxes, and AppExchange - managed/unmanaged)."},{title:"capabilities",desc:"Describe the capabilities and best practices for using change sets to move metadata between environments."}]},
      {name:"Process Automation",pct:20,color:"#E67E22",desc:"Given a complex scenario, determine the solution using the best tool or combination of tools to solve a business problem.",keyTopics:[{title:"Given a complex scenario, determine the solution using th...",desc:"Given a complex scenario, determine the solution using the best tool or combination of tools to solve a business problem."},{title:"identify the appropriate tool or method for troubleshooti...",desc:"Given a scenario, identify the appropriate tool or method for troubleshooting declarative automation."},{title:"explain the capabilities",desc:"Given a scenario, explain the capabilities and limitations of each declarative automation tool."},{title:"implications of the order of execution when using automat...",desc:"Understand the implications of the order of execution when using automation tools."}]},
    ],
    studyDays:[
      {tag:"advanced-automation",focus:"Advanced Flow: subflows, fault paths, loops, and screen flow components",topics:[
        {text:"Build Flows with Flow Builder",url:"https://trailhead.salesforce.com/content/learn/trails/build-flows-with-flow-builder"},
        {text:"What Is a Subflow?",url:"https://admin.salesforce.com/blog/2023/what-is-a-subflow"},
        {text:"Customize What Happens When a Flow Fails",url:"https://help.salesforce.com/s/articleView?id=platform.flow_build_logic_fault.htm&type=5"},
        {text:"Screen Flow Custom Components",url:"https://developer.salesforce.com/docs/platform/lwc/guide/use-flow.html"},
        {text:"Flow Debugging",url:"https://help.salesforce.com/s/articleView?id=release-notes.rn_forcecom_flow_debug.htm&release=230&type=5"},
        {text:"Admin II Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Advanced-Administrator-Exam-Guide"}
      ]},
      {tag:"advanced-security",focus:"Advanced security: session policies, transaction security, audit trail, and health check",topics:[
        {text:"Session Security",url:"https://help.salesforce.com/s/articleView?id=xcloud.security_overview_sessions.htm&type=5"},
        {text:"Get Started with Transaction Security",url:"https://trailhead.salesforce.com/content/learn/modules/enhanced_transaction_security/enhanced_transaction_security_basics"},
        {text:"Setup Audit Trail Control",url:"https://help.salesforce.com/s/articleView?id=xcloud.shr_set_up_audit_trail.htm&type=5"},
        {text:"Security Health Check",url:"https://help.salesforce.com/s/articleView?id=xcloud.security_health_check.htm&type=5"},
        {text:"Investigate Login Anomalies",url:"https://help.salesforce.com/s/articleView?id=xcloud.real_time_em_threat_detection_questions_for_investigation.htm&type=5"},
        {text:"Event Monitoring",url:"https://help.salesforce.com/s/articleView?id=xcloud.real_time_event_monitoring_overview.htm&type=5"}
      ]},
      {tag:"change-management",focus:"Change and release management: sandboxes, change sets, and deployment strategies",topics:[
        {text:"Sandbox Types and Templates",url:"https://help.salesforce.com/s/articleView?id=platform.create_test_instance.htm&type=5"},
        {text:"Change Sets",url:"https://help.salesforce.com/s/articleView?id=platform.changesets.htm&type=5"},
        {text:"What Happens When a Sandbox Is Refreshed",url:"https://help.salesforce.com/s/articleView?id=platform.devops_center_sandbox_refresh.htm&type=5"},
        {text:"Deploy Your Changes",url:"https://help.salesforce.com/s/articleView?id=platform.deploy_overview.htm&type=5"},
        {text:"Metadata Coverage Report",url:"https://developer.salesforce.com/docs/metadata-coverage"},
        {text:"Unlocked Packages Overview",url:"https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_intro.htm"}
      ]},
      {tag:"analytics-advanced",focus:"Advanced analytics: joined reports, historical trending, Einstein Analytics basics",topics:[
        {text:"Create a Joined Report",url:"https://help.salesforce.com/s/articleView?id=analytics.reports_joined_create.htm&type=5"},
        {text:"Track Changes Over Time with Historical Trend Reporting",url:"https://help.salesforce.com/s/articleView?id=analytics.reports_historical_concepts.htm&type=5"},
        {text:"CRM Analytics",url:"https://help.salesforce.com/s/articleView?id=analytics.bi.htm&type=5"},
        {text:"Subscribe to Reports in Lightning Experience",url:"https://help.salesforce.com/s/articleView?id=analytics.reports_subscribe_lex.htm&type=5"},
        {text:"Report on Historical Data with Reporting Snapshots",url:"https://help.salesforce.com/s/articleView?id=analytics.data_about_analytic_snap.htm&type=5"},
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
      {domain:"Extending Custom Objects and Applications",q:"Which sharing mechanism allows a record owner to share a specific record with another user?",opts:["Sharing Rules", "Role Hierarchy", "Manual Sharing", "Permission Sets"],correct:2,explanation:"Manual sharing is initiated by the record owner — it grants Read or Read/Write access to a specific user or group on a single record without requiring a sharing rule or OWD change."},
      {domain:"Auditing and Monitoring",q:"What does the Setup Audit Trail track?",opts:["Data changes by users", "Configuration changes made in Setup", "Login attempts", "API calls"],correct:1,explanation:"Setup Audit Trail logs up to 6 months of configuration changes made in Setup — recording who changed what and when — giving admins a reliable audit of org modifications without debug logs."},
      {domain:"Analytics, Reports, and Dashboards",q:"Which type of report allows you to view data from two different report types in one view?",opts:["Summary Report", "Matrix Report", "Joined Report", "Tabular Report"],correct:2,explanation:"Joined reports combine up to 5 report blocks, each using a different report type, so you can compare data from different objects side by side in a single report."},
      {domain:"Security and Access",q:"What is the maximum number of criteria-based sharing rules per object?",opts:["25", "50", "100", "200"],correct:1,explanation:"Salesforce limits criteria-based sharing rules to 50 per object. Hitting this limit is a signal to simplify the sharing model using role hierarchy or public groups instead."},
      {domain:"Change Management",q:"Which feature allows admins to delegate user management tasks to non-admin users?",opts:["Permission Sets", "Delegated Administration", "Custom Profiles", "Sharing Sets"],correct:1,explanation:"Delegated Administration lets non-admin users perform scoped admin tasks — like creating users, resetting passwords, or managing specific roles — reducing the burden on system admins."},
      {domain:"Analytics, Reports, and Dashboards",q:"What must be true for a dynamic dashboard to work?",opts:["The viewer must be a System Administrator", "The viewer must have the 'View My Team\'s Dashboards' permission", "The running user must be the dashboard creator", "The org must have CRM Analytics enabled"],correct:1,explanation:"Dynamic dashboards run as the logged-in user so each viewer sees their own data. The 'View My Team\'s Dashboards' permission is required to enable this per-viewer rendering."},
      {domain:"Change Management",q:"Which sandbox type supports a full copy of production data?",opts:["Developer Sandbox", "Developer Pro Sandbox", "Partial Copy Sandbox", "Full Sandbox"],correct:3,explanation:"Full Sandbox is the only type that copies all production data, metadata, and configuration — used for final UAT and performance testing, though it takes longer to create and refresh than other types."},
      {domain:"Data Management",q:"What is an External ID used for in data import?",opts:["To display records in external portals", "To upsert records using a non-Salesforce ID field", "To encrypt sensitive data", "To link to external databases"],correct:1,explanation:"External ID fields let you upsert using an identifier from an external system — if a match is found the record updates, otherwise a new one is created — preventing duplicates during data migration."},
      {domain:"Process Automation",q:"Which automation tool should be used to invoke a Flow from a record change with the most current Salesforce best practice?",opts:["Process Builder", "Workflow Rule", "Record-Triggered Flow", "Apex Trigger"],correct:2,explanation:"Salesforce recommends Record-Triggered Flows as the direct replacement for both Workflow Rules and Process Builder — they support before/after save contexts, cross-object updates, and are the fully supported path going forward."},
      {domain:"Sales Cloud",q:"In Territory Management 2.0, what determines which accounts belong to a territory?",opts:["Role Hierarchy", "Assignment Rules", "Sharing Rules", "OWD Settings"],correct:1,explanation:"Territory assignment rules define filter criteria (such as billing state or industry) that automatically assign matching accounts to a territory — no manual assignment is needed once the rules are configured."},
      {domain:"Data Management",q:"Which feature allows you to enforce that duplicate records cannot be created?",opts:["Validation Rules", "Matching Rules", "Duplicate Rules", "Record Types"],correct:2,explanation:"Duplicate Rules work with Matching Rules — the matching rule identifies potential duplicates, and the duplicate rule defines the enforcement action. Setting the action to Block prevents the duplicate from being saved entirely."},
      {domain:"Security and Access",q:"What is the purpose of a Muting Permission Set?",opts:["To temporarily disable a user", "To remove permissions granted by a Permission Set Group", "To prevent field edits on specific objects", "To restrict login hours"],correct:1,explanation:"A Muting Permission Set suppresses specific permissions within a Permission Set Group without requiring you to modify the individual permission sets — giving fine-grained control over the group's effective permissions."},
      {domain:"Analytics, Reports, and Dashboards",q:"Which report format supports row-level and column-level subtotals?",opts:["Tabular Report", "Summary Report", "Matrix Report", "Joined Report"],correct:2,explanation:"Matrix reports group data by both rows and columns, showing subtotals at each intersection plus grand totals — ideal for comparisons like pipeline by owner (rows) and stage (columns)."},
      {domain:"Extending Custom Objects and Applications",q:"What happens to child records when a parent record is deleted in a Master-Detail relationship?",opts:["Child records become orphaned", "Child records are also deleted", "Child records are archived", "An error prevents deletion"],correct:1,explanation:"Master-Detail relationships enforce cascade delete — deleting the parent automatically deletes all child records. This is a key distinction from Lookup relationships, where child records are left with a blank lookup field."},
      {domain:"Auditing and Monitoring",q:"Which feature allows an admin to monitor real-time events like logins and API calls?",opts:["Setup Audit Trail", "Login History", "Event Monitoring", "Debug Logs"],correct:2,explanation:"Event Monitoring (part of Salesforce Shield) provides detailed logs of user and system activity in near real-time — covering logins, API calls, report exports, and more — far beyond what Setup Audit Trail or Login History capture."},
      {domain:"Process Automation",q:"In an approval process, what action can a submitter take after submitting for approval?",opts:["Approve the request themselves", "Recall the approval request", "Reassign the approver", "Skip to the next step"],correct:1,explanation:"After submitting, the original submitter can recall the approval request as long as it hasn't been approved or rejected yet — this cancels the pending approval and returns the record to its pre-submission state."},
      {domain:"Content Management",q:"Which Salesforce Knowledge feature categorizes articles for visibility control?",opts:["Article Types", "Data Categories", "Knowledge Channels", "Publication Status"],correct:1,explanation:"Data Categories control which Knowledge articles are visible to which users and community audiences — you assign categories to articles and map category visibility to profiles or permission sets to enforce access."},
      {domain:"Content Management",q:"What is the primary benefit of Skinny Tables in Salesforce?",opts:["Reduced storage costs", "Improved query performance on large data sets", "Better security for sensitive fields", "Faster screen layouts"],correct:1,explanation:"Skinny Tables are system-managed internal tables that store a subset of frequently queried fields, avoiding expensive joins and full table scans on large objects. They must be requested from Salesforce Support."},
      {domain:"Process Automation",q:"Which type of Flow is best for automating a business process that requires user interaction?",opts:["Record-Triggered Flow", "Schedule-Triggered Flow", "Screen Flow", "Autolaunched Flow"],correct:2,explanation:"Screen Flows present interactive UI screens to guide users through multi-step processes — they're the correct choice whenever the automation requires human input, such as guided data entry or troubleshooting wizards."},
      {domain:"Change Management",q:"What change set component type is NOT supported in change set deployments?",opts:["Custom Objects", "Apex Classes", "Roles", "Validation Rules"],correct:2,explanation:"Roles cannot be included in change sets and must be recreated manually in the target org. This is a known limitation and a common reason teams prefer Salesforce CLI or unlocked packages for full-org migrations."},
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

  "Marketing Cloud Engagement Administrator": {
    questions: 60,
    time: 90,
    pass: 67,
    experience: "1+ year administering Marketing Cloud Engagement with hands-on experience across core features",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-mce-admin---MCE-Admn-201",
    trailmixUrl: "https://trailhead.salesforce.com/content/learn/trails/study-for-the-marketing-cloud-administrator-exam",
    prerequisites: [],
    overview: "The Marketing Cloud Engagement Administrator certification validates expertise in administering the Marketing Cloud Engagement platform. Candidates demonstrate ability to configure the platform, manage users and security, implement data architecture, and maintain deliverability.",
        domains:[
      {name:"Digital Marketing Proficiency",pct:13,color:"#00A1E0",desc:"Describe governance and compliance in relation to digital marketing.",keyTopics:[{title:"Describe governance",desc:"Describe governance and compliance in relation to digital marketing."},{title:"Recognize security best practices for data, permissions,",desc:"Recognize security best practices for data, permissions, and PII."},{title:"Describe Marketing Cloud product inventory",desc:"Describe Marketing Cloud product inventory and product offerings."}]},
      {name:"Subscriber Data Management",pct:18,color:"#2ECC71",desc:"Apply knowledge to describe the contact model.",keyTopics:[{title:"describe the contact model",desc:"Given a scenario, describe the contact model."},{title:"evaluate data quality",desc:"Given a scenario, evaluate data quality."},{title:"Explain preference",desc:"Explain preference and profile center concepts."}]},
      {name:"Channel Management",pct:16,color:"#F39C12",desc:"Apply knowledge to describe the configuration of Mobile Studio.",keyTopics:[{title:"describe the configuration of Mobile Studio",desc:"Given a scenario, describe the configuration of Mobile Studio."},{title:"describe the configuration of Email Studio",desc:"Given a scenario, describe the configuration of Email Studio."},{title:"describe the configuration of Advertising Studio",desc:"Given a scenario, describe the configuration of Advertising Studio."},{title:"concepts",desc:"Explain the concepts and typical use cases of Journey Builder."}]},
      {name:"Maintenance",pct:15,color:"#E74C3C",desc:"Apply knowledge to describe solutions for data extraction and report generation.",keyTopics:[{title:"describe solutions for data extraction",desc:"Given a scenario, describe solutions for data extraction and report generation."},{title:"monitor a Marketing Cloud account",desc:"Given a scenario, monitor a Marketing Cloud account and provide system availability."},{title:"evaluate benefits of additional Marketing Cloud products",desc:"Given a scenario, evaluate benefits of additional Marketing Cloud products."}]},
    ],
    studyDays:[
      {tag:"mc-setup",focus:"Marketing Cloud account setup: business units, users, roles, and IP warming",topics:[
        {text:"Marketing Cloud Engagement Setup",url:"https://help.salesforce.com/s/articleView?id=mktg.mc_overview_administration.htm&type=5"},
        {text:"Managing Your Business Unit",url:"https://help.salesforce.com/s/articleView?id=mktg.pardot_administration.htm&type=5"},
        {text:"User Roles in Marketing Cloud Engagement",url:"https://help.salesforce.com/s/articleView?id=mktg.mc_overview_marketing_cloud_roles.htm&type=5"},
        {text:"Reputation Warming",url:"https://help.salesforce.com/s/articleView?id=mktg.pardot_email_warm_ip.htm&type=5"},
        {text:"MC Admin Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Marketing-Cloud-Administrator-Exam-Guide"},
        {text:"MC Admin Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-marketing-cloud-administrator-credential"}
      ]},
      {tag:"mc-data",focus:"Marketing Cloud data management: data extensions, contact model, and data retention",topics:[
        {text:"Learn About Data Extensions",url:"https://trailhead.salesforce.com/content/learn/modules/marketing-cloud-contact-management/learn-about-data-extensions"},
        {text:"Data Designer in Contact Builder",url:"https://help.salesforce.com/s/articleView?id=mktg.mc_cab_data_designer.htm&type=5"},
        {text:"Data Deletion in Account Engagement",url:"https://help.salesforce.com/s/articleView?id=xcloud.data_deletion_pardot.htm&type=5"},
        {text:"Configure the Marketing Cloud Connection",url:"https://trailhead.salesforce.com/content/learn/modules/marketing-cloud-connect/finish-mc-connect-configuration"},
        {text:"Email Preference Pages",url:"https://help.salesforce.com/s/articleView?id=mktg.pardot_emails_preference_center_parent.htm&type=5"},
        {text:"Subscribers",url:"https://help.salesforce.com/s/articleView?id=mktg.mc_es_subscribers.htm&type=5"}
      ]},
      {tag:"mc-deliverability",focus:"Email deliverability: authentication, SPF, DKIM, DMARC, and bounce handling",topics:[
        {text:"Email Deliverability Overview",url:"https://www.salesforce.com/marketing/email/deliverability/"},
        {text:"Salesforce SPF and DKIM FAQ",url:"https://help.salesforce.com/s/articleView?id=000389240&type=1"},
        {text:"DMARC Support in Account Engagement",url:"https://help.salesforce.com/s/articleView?id=000381338&type=1"},
        {text:"Managing Bounce Data Between Account Engagement & Salesforce",url:"https://help.salesforce.com/s/articleView?id=000393429&type=1"},
        {text:"Reply Mail Management for Email Studio",url:"https://help.salesforce.com/s/articleView?id=mktg.mc_es_reply_mail_management.htm&type=5"},
        {text:"CAN-SPAM Requirements",url:"https://help.salesforce.com/s/articleView?id=mktg.mc_es_can_spam_requirements.htm&type=5"}
      ]},
      {tag:"exam-prep-mc-admin",focus:"MC Administrator exam prep: setup, data, deliverability, and compliance scenarios",topics:[
        {text:"MC Administrator Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Marketing-Cloud-Administrator-Exam-Guide"},
        {text:"MC Admin Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-marketing-cloud-administrator-credential"},
        {text:"What is a Marketing Cloud?",url:"https://www.salesforce.com/eu/marketing/cloud/"},
        {text:"Email Specialist Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_email_studio_specialist"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-mc-email-admin---MC-Admin-201"},
        {text:"Marketing Cloud Basics Module",url:"https://trailhead.salesforce.com/content/learn/modules/marketing-cloud-basics"}
      ]}
    ],
    quiz:[
      {domain:"Platform Administration",q:"What is the purpose of a Publication List in Marketing Cloud?",opts:["To segment subscribers for targeted sends", "To allow subscribers to opt in or out of specific communication types", "To store transactional email content", "To track email engagement over time"],correct:1,explanation:"Publication Lists let subscribers control which communication types they receive via the Subscription Center. Only subscribers opted in to the list receive sends from it, giving contacts granular opt-in control."},
      {domain:"Digital Marketing Concepts",q:"Which Marketing Cloud feature is used to create multi-step, multi-channel customer journeys?",opts:["Automation Studio", "Journey Builder", "Email Studio", "Contact Builder"],correct:1,explanation:"Journey Builder is the campaign orchestration tool — it designs automated, event-triggered, multi-channel experiences (email, SMS, push, ads) with decision splits based on subscriber behavior and data."},
      {domain:"Subscriber Data Management",q:"What is a Sendable Data Extension?",opts:["Any data extension that stores email content", "A data extension linked to the subscriber data model that can be used as a send audience", "A data extension used only for SQL queries", "A data extension that sends automatically on a schedule"],correct:1,explanation:"A Sendable Data Extension has a relationship field mapping to the All Subscribers list (via Email Address or Subscriber Key) — this linkage is required for a data extension to be selectable as the audience for an email send."},
      {domain:"Setup, Configuration, and Troubleshooting",q:"Which authentication standard is used to prove an email was sent from an authorized server for a domain?",opts:["DMARC", "SPF", "DKIM", "SSL"],correct:2,explanation:"DKIM (DomainKeys Identified Mail) adds a cryptographic signature to outbound emails that receiving servers verify against a public key in the sender\'s DNS — proving the message came from an authorized server and wasn\'t altered in transit."},
      {domain:"Digital Marketing Concepts",q:"What is the purpose of IP Warming?",opts:["To encrypt outbound emails", "To gradually build a reputation for a new sending IP address", "To configure dedicated IP pools for different business units", "To warm up the database before a bulk import"],correct:1,explanation:"New IPs have no sender reputation with ISPs, so sending high volume immediately triggers spam filters. IP Warming gradually increases send volume over weeks so ISPs build a positive reputation for the IP before full-scale deployment."},
      {domain:"Platform Administration",q:"In Marketing Cloud, what does a Suppression List do?",opts:["Removes inactive subscribers permanently", "Prevents specific subscribers from receiving messages", "Suppresses tracking data for specific sends", "Hides certain data extensions from users"],correct:1,explanation:"A Suppression List excludes specific email addresses from a send even if they\'re in the target audience — commonly used to exclude opted-out customers, competitors, or internal test addresses from going live."},
      {domain:"Data Management and Analytics",q:"Which Automation Studio activity is used to move data between data extensions using SQL?",opts:["Script Activity", "Filter Activity", "Query Activity", "Data Extract Activity"],correct:2,explanation:"Query Activities execute SQL SELECT statements against Marketing Cloud data extensions and write results to a target data extension — they\'re the primary tool for segmenting, transforming, and moving data inside Automation Studio."},
      {domain:"Platform Administration",q:"What is the Contact Key in Marketing Cloud?",opts:["The email address used as the primary identifier", "A unique identifier that links subscriber data across channels in Contact Builder", "An API key for accessing subscriber data", "The Salesforce Contact ID synced to Marketing Cloud"],correct:1,explanation:"The Contact Key is a stable, unique identifier for a contact across all channels in Contact Builder — it ties together email, mobile, and advertising data for the same individual, enabling consistent cross-channel personalization and suppression."},
      {domain:"Data Management and Analytics",q:"Which bounce type indicates a permanent delivery failure and should trigger unsubscription?",opts:["Soft Bounce", "Hard Bounce", "Block Bounce", "Technical Bounce"],correct:1,explanation:"A Hard Bounce means the address is permanently undeliverable (e.g. mailbox doesn\'t exist). Marketing Cloud automatically unsubscribes hard-bounced addresses to protect sender reputation and list hygiene."},
      {domain:"Data Management and Analytics",q:"What Marketing Cloud feature connects data from Salesforce CRM to Marketing Cloud campaigns?",opts:["REST API Integration", "Synchronized Data Extensions", "Marketing Cloud Connect", "AppExchange Connector"],correct:2,explanation:"Marketing Cloud Connect is the native integration layer — it syncs Salesforce Contacts, Leads, and Campaigns to Marketing Cloud via Synchronized Data Extensions, enabling CRM-targeted sends and closed-loop reporting."},
      {domain:"Platform Administration",q:"Which role in Marketing Cloud has the highest level of access including account administration?",opts:["Marketing Cloud Administrator", "Administrator", "Super User", "Content Creator"],correct:1,explanation:"The Administrator role includes full account-level settings and user management on top of all Studio access — it sits above Marketing Cloud Administrator, which has broad access but not full account administration capabilities."},
      {domain:"Digital Marketing Concepts",q:"What is the purpose of a Send Classification in Marketing Cloud?",opts:["To classify subscribers into groups", "To group delivery profile and sender profile settings for sends", "To categorize email content types", "To define send windows for messages"],correct:1,explanation:"Send Classifications bundle a Sender Profile (from name and address) and a Delivery Profile (IP pool, header/footer) into a reusable configuration — selecting one on an email send automatically applies those deliverability settings consistently."},
      {domain:"Messaging Features",q:"What is AMPscript in Marketing Cloud used for?",opts:["To automate journey entry events", "To personalize email content and logic using a scripting language", "To write SQL queries for data extensions", "To configure API integrations"],correct:1,explanation:"AMPscript is Marketing Cloud\'s proprietary scripting language embedded in email HTML — it enables dynamic personalization using subscriber attributes, conditional content blocks, loops over data extension rows, and server-side lookups at send time."},
      {domain:"Subscriber Data Management",q:"Which Marketing Cloud feature stores and manages multi-channel customer profile data?",opts:["Audience Builder", "Data Designer", "Contact Builder", "Profile Center"],correct:2,explanation:"Contact Builder is the data management hub — it links data extensions to contacts via attribute groups, defines cardinality between datasets, and builds a unified customer profile spanning email, mobile, and web channels."},
      {domain:"Data Management and Analytics",q:"In Automation Studio, what trigger type starts an automation when a file arrives in an FTP folder?",opts:["Scheduled Automation", "API Triggered Automation", "File Drop Automation", "Data Event Automation"],correct:2,explanation:"File Drop Automations monitor a specified FTP folder and trigger the workflow as soon as a file matching the naming pattern arrives — useful for processing inbound data feeds from external systems without needing a scheduled polling interval."},
      {domain:"Platform Administration",q:"What CAN-SPAM requirement must all commercial emails include?",opts:["The sender\'s physical mailing address", "A functional unsubscribe mechanism", "Both a physical address and unsubscribe link", "The sender\'s phone number"],correct:1,explanation:"CAN-SPAM requires all commercial emails to include a functioning opt-out mechanism that honors unsubscribe requests within 10 business days. While a physical address is also required, the functional unsubscribe is the core deliverability requirement enforced by ISPs."},
      {domain:"Digital Marketing Concepts",q:"Which Marketing Cloud Studio is used to manage SMS and push notification campaigns?",opts:["Social Studio", "Mobile Studio", "Journey Builder", "Advertising Studio"],correct:1,explanation:"Mobile Studio handles SMS (via MobileConnect) and push notifications (via MobilePush) — Social Studio is for social media, Advertising Studio for paid channels, and Journey Builder orchestrates multi-channel journeys across all studios."},
      {domain:"Digital Marketing Concepts",q:"What is a Triggered Send in Marketing Cloud?",opts:["A scheduled batch email send", "A real-time, event-based email send initiated via API or automation", "An A/B test email deployment", "A journey entry event configuration"],correct:1,explanation:"Triggered Sends fire immediately in response to a specific event — a form submission, purchase, or API call — sending a personalized email to a single subscriber in near real-time, unlike batch sends which target a list at a scheduled time."},
      {domain:"Data Management and Analytics",q:"Which Marketing Cloud setting controls how long data in a data extension is retained?",opts:["Data Extension Settings", "Data Retention Policy", "Archive Settings", "Subscriber Expiration"],correct:1,explanation:"Data Retention Policies are configured on individual data extensions and define when records are automatically deleted — by period (e.g. delete records older than 6 months) or by a fixed date. Without one, data is retained indefinitely."},
      {domain:"Platform Administration",q:"In Marketing Cloud RBAC, what determines which features a user can access?",opts:["The business unit the user belongs to", "Roles assigned to the user", "The user\'s profile in Salesforce CRM", "The user\'s email domain"],correct:1,explanation:"Marketing Cloud uses Role-Based Access Control where roles define which Studios, features, and actions are available. Roles are assigned directly to users or inherited from business unit membership, operating independently from Salesforce CRM profiles."},
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
