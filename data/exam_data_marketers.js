Object.assign(EXAM_DATA, {
  "Marketing Cloud Email Specialist": {
    questions: 60,
    time: 90,
    pass: 67,
    experience: "6+ months using Marketing Cloud Email Studio with hands-on campaign experience",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-mc-email---MC-202",
    prerequisites: [],
    overview: "The Marketing Cloud Email Specialist certification validates expertise in email marketing using Salesforce Marketing Cloud. Candidates demonstrate proficiency in email design, subscriber management, deliverability, and analytics.",
        domains:[
      {name:"Email Marketing Best Practices",pct:10,color:"#00A1E0"},
      {name:"Content Creation and Delivery",pct:24,color:"#2ECC71"},
      {name:"Marketing Automation",pct:26,color:"#F39C12"},
      {name:"Subscriber and Data Management",pct:26,color:"#E74C3C"},
      {name:"Insights and Analytics",pct:14,color:"#9B59B6"},
    ],
    studyDays:[
      {tag:"email-studio",focus:"Email Studio: content builder, email templates, A/B testing, and send management",topics:[
        {text:"Email Studio Overview",url:"https://help.salesforce.com/s/articleView?id=sf.mc_es_overview.htm"},
        {text:"Content Builder",url:"https://help.salesforce.com/s/articleView?id=sf.mc_ceb_overview.htm"},
        {text:"Email Templates",url:"https://help.salesforce.com/s/articleView?id=sf.mc_es_email_templates.htm"},
        {text:"A/B Testing",url:"https://help.salesforce.com/s/articleView?id=sf.mc_es_ab_testing.htm"},
        {text:"Email Send Definitions",url:"https://help.salesforce.com/s/articleView?id=sf.mc_es_send_email.htm"},
        {text:"MC Email Specialist Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Marketing-Cloud-Email-Specialist-Exam-Guide"}
      ]},
      {tag:"ampscript",focus:"AMPscript for dynamic email content: personalization strings, lookups, and conditionals",topics:[
        {text:"AMPscript Overview",url:"https://ampscript.guide/"},
        {text:"AMPscript Functions Reference",url:"https://ampscript.guide/functions/"},
        {text:"Personalization Strings",url:"https://help.salesforce.com/s/articleView?id=sf.mc_es_personalization_strings.htm"},
        {text:"AMPscript Lookup Functions",url:"https://ampscript.guide/functions/data-functions/"},
        {text:"Content Syndication with AMPscript",url:"https://help.salesforce.com/s/articleView?id=sf.mc_ceb_code_snippet_overview.htm"},
        {text:"Dynamic Content Blocks",url:"https://help.salesforce.com/s/articleView?id=sf.mc_ceb_dynamic_content.htm"}
      ]},
      {tag:"automation-studio-email",focus:"Automation Studio: scheduled automations, activities, and SQL query activities",topics:[
        {text:"Automation Studio Overview",url:"https://help.salesforce.com/s/articleView?id=sf.mc_as_automation_studio_overview.htm"},
        {text:"Automation Activities",url:"https://help.salesforce.com/s/articleView?id=sf.mc_as_activities.htm"},
        {text:"SQL Query Activity",url:"https://help.salesforce.com/s/articleView?id=sf.mc_as_sql_query_activity.htm"},
        {text:"Scheduled Automation",url:"https://help.salesforce.com/s/articleView?id=sf.mc_as_triggered_automation.htm"},
        {text:"Data Extract Activity",url:"https://help.salesforce.com/s/articleView?id=sf.mc_as_data_extract_activity.htm"},
        {text:"Import File Activity",url:"https://help.salesforce.com/s/articleView?id=sf.mc_as_import_file_activity.htm"}
      ]},
      {tag:"exam-prep-email-spec",focus:"Email Specialist exam prep: Email Studio, AMPscript, Automation Studio, and deliverability",topics:[
        {text:"MC Email Specialist Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Marketing-Cloud-Email-Specialist-Exam-Guide"},
        {text:"MC Email Specialist Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-marketing-cloud-email-specialist-credential"},
        {text:"Email Studio Specialist Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_email_studio_specialist"},
        {text:"AMPscript Guide",url:"https://ampscript.guide/"},
        {text:"Marketing Cloud Documentation",url:"https://help.salesforce.com/s/articleView?id=sf.mc_overview.htm"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-mc-email-spec---MC-Spec-201"}
      ]}
    ],
    quiz:[
      {domain:"Subscriber and List Management", q: "Which subscriber status in Marketing Cloud indicates a permanent delivery failure?", a: "Bounced", options: ["Held", "Unsubscribed", "Bounced", "Inactive"] },
      {domain:"Email Marketing Concepts", q: "What is the purpose of a Publication List in Marketing Cloud?", a: "To allow subscribers to manage their communication preferences", options: ["To import bulk subscriber data", "To allow subscribers to manage their communication preferences", "To store email templates", "To track send analytics"] },
      {domain:"Content Creation and Delivery", q: "Which content tool in Marketing Cloud allows marketers to personalize emails with subscriber data?", a: "AMPscript", options: ["SSJS", "AMPscript", "Liquid", "Handlebars"] },
      {domain:"Subscriber and List Management", q: "What does a hard bounce indicate?", a: "The recipient email address is permanently invalid", options: ["The recipient's inbox is full", "The recipient email address is permanently invalid", "The recipient's server is temporarily unavailable", "The email was flagged as spam"] },
      {domain:"Content Creation and Delivery", q: "Which feature in Email Studio displays different content to different subscriber segments within a single email?", a: "Dynamic Content", options: ["Content Blocks", "AMPscript Variables", "Dynamic Content", "Subscriber Attributes"] },
      {domain:"Inbox Rendering and Deliverability", q: "What is the purpose of DKIM in email deliverability?", a: "To cryptographically sign emails to prove they came from an authorized sender", options: ["To blacklist spam domains", "To encrypt the email body", "To cryptographically sign emails to prove they came from an authorized sender", "To set IP reputation scores"] },
      {domain:"Email Marketing Concepts", q: "Which Marketing Cloud feature is used to test different subject lines to determine which performs better?", a: "A/B Testing", options: ["Multivariate Testing", "A/B Testing", "Dynamic Subject Lines", "Send Time Optimization"] },
      {domain:"Subscriber and List Management", q: "What is a Sendable Data Extension?", a: "A data extension with a subscriber relationship field that can be used as a send audience", options: ["Any data extension that stores email content", "A data extension with a subscriber relationship field that can be used as a send audience", "A data extension shared across business units", "A data extension that automatically triggers sends"] },
      {domain:"Subscriber and List Management", q: "Which field type in a data extension should be used to store an email address?", a: "EmailAddress", options: ["Text", "EmailAddress", "Phone", "Locale"] },
      {domain:"Email Marketing Concepts", q: "What does the Subscription Center in Marketing Cloud allow subscribers to do?", a: "Manage which publication lists they are subscribed to", options: ["Update their billing information", "Manage which publication lists they are subscribed to", "Access premium content", "Configure two-factor authentication"] },
      {domain:"Email Marketing Best Practices", q: "Which email metric measures the percentage of delivered emails that were opened?", a: "Open Rate", options: ["Delivery Rate", "Click-to-Open Rate", "Open Rate", "Bounce Rate"] },
      {domain:"Email Marketing Concepts", q: "What is an IP Warming plan?", a: "A strategy to gradually increase sending volume on a new IP to build sender reputation", options: ["A security protocol for IP whitelisting", "A strategy to gradually increase sending volume on a new IP to build sender reputation", "A technical process for configuring dedicated IPs", "A method to warm up a cold database"] },
      {domain:"Email Marketing Concepts", q: "In Marketing Cloud, which object stores unique contact information across all channels?", a: "All Subscribers List", options: ["Master Contact List", "All Subscribers List", "Contact Builder Profile", "Global Subscriber Table"] },
      {domain:"Messaging Features and Functionality", q: "Which send option in Email Studio allows you to specify a future date and time for the email to send?", a: "Schedule", options: ["Triggered Send", "Schedule", "Batch Send", "Queue Send"] },
      {domain:"Email Marketing Concepts", q: "What is the Import Wizard primarily used for?", a: "Importing subscribers into lists or data extensions from a file", options: ["Configuring data extension schemas", "Importing subscribers into lists or data extensions from a file", "Importing email templates", "Importing journey configurations"] },
      {domain:"Email Marketing Concepts", q: "Which Marketing Cloud feature blocks specific email addresses from receiving any marketing email?", a: "Suppression List", options: ["Exclusion List", "Blacklist", "Suppression List", "Publication List"] },
      {domain:"Subscriber and List Management", q: "What AMPscript function is used to retrieve a value from a data extension?", a: "Lookup()", options: ["RetrieveValue()", "Lookup()", "GetValue()", "DataExtensionLookup()"] },
      {domain:"Messaging Features and Functionality", q: "Which report in Email Studio shows how many recipients clicked each link in an email?", a: "Link Tracking Report", options: ["Click Summary", "Link Tracking Report", "Engagement Report", "URL Performance"] },
      {domain:"Subscriber and List Management", q: "What CAN-SPAM requirement specifies what must be included in every commercial email?", a: "A physical mailing address and a functioning unsubscribe mechanism", options: ["The sender's phone number", "A physical mailing address and a functioning unsubscribe mechanism", "The recipient's full name", "A promotional offer"] },
      {domain:"Subscriber and List Management", q: "What is the primary advantage of using a data extension over a list for sending emails?", a: "Data extensions support custom fields and more complex data structures", options: ["Lists are limited to 500 subscribers", "Data extensions support custom fields and more complex data structures", "Data extensions send faster", "Lists cannot be used in Journey Builder"] }
    ],
    tips:[
      "Know the difference between lists and data extensions — and when the exam expects you to use each.",
      "Memorize subscriber statuses and what triggers each status change.",
      "Understand AMPscript syntax for personalization: Lookup(), AttributeValue(), IF/THEN blocks.",
      "Know all CAN-SPAM and GDPR requirements applicable to email marketing in Marketing Cloud.",
      "Dynamic content questions are common — know how default content and rules work.",
      "Be able to explain what SPF, DKIM, and DMARC each do for deliverability.",
      "Practice reading Email Studio tracking reports and interpreting the metrics.",
      "Know the A/B testing process end-to-end, including how the winner is selected."
    ]
  },

  "Marketing Cloud Engagement Developer": {
    questions: 60,
    time: 90,
    pass: 63,
    experience: "1+ year developing in Marketing Cloud with hands-on scripting and API experience",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-mce-dev---MCE-Dev-201",
    prerequisites: [],
    overview: "The Marketing Cloud Engagement Developer certification validates technical expertise in developing solutions on the Marketing Cloud platform. Candidates demonstrate proficiency in AMPscript, SSJS, REST/SOAP APIs, Journey Builder customization, and data architecture.",
        domains:[
      {name:"Data Modeling",pct:14,color:"#00A1E0"},
      {name:"Programmatic Languages",pct:35,color:"#2ECC71"},
      {name:"Data Management",pct:22,color:"#F39C12"},
      {name:"Security",pct:7,color:"#E74C3C"},
    ],
    studyDays:[
      {tag:"mc-dev-apis",focus:"Marketing Cloud APIs: REST and SOAP APIs, triggers, and programmatic sends",topics:[
        {text:"Marketing Cloud REST API",url:"https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/rest-api.html"},
        {text:"Marketing Cloud SOAP API",url:"https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/soap-api.html"},
        {text:"Transactional Messaging API",url:"https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/transactional-messaging-api.html"},
        {text:"OAuth2 Authentication",url:"https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/authentication.html"},
        {text:"API Integration with Server-Side JS",url:"https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/ssjs_syntaxGuide.html"},
        {text:"MC Engagement Developer Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Marketing-Cloud-Developer-Exam-Guide"}
      ]},
      {tag:"ssjs",focus:"Server-Side JavaScript (SSJS) for Marketing Cloud: data extensions, API calls, and automation",topics:[
        {text:"SSJS Overview",url:"https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/ssjs_syntaxGuide.html"},
        {text:"SSJS HTTP Functions",url:"https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/ssjs_httpFunctions.html"},
        {text:"SSJS Data Extension Functions",url:"https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/ssjs_dataExtensionFunctions.html"},
        {text:"SSJS in Cloud Pages",url:"https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/cloudpages_code.html"},
        {text:"AMPscript and SSJS Combined",url:"https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/ampscript_ssjs_interop.html"},
        {text:"MC Dev Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-marketing-cloud-developer-credential"}
      ]},
      {tag:"exam-prep-mc-dev",focus:"MC Engagement Developer exam prep: APIs, SSJS, AMPscript, and integration patterns",topics:[
        {text:"MC Engagement Developer Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Marketing-Cloud-Developer-Exam-Guide"},
        {text:"MC Developer Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-marketing-cloud-developer-credential"},
        {text:"Marketing Cloud REST API Docs",url:"https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/rest-api.html"},
        {text:"AMPscript Guide",url:"https://ampscript.guide/"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-mc-developer---MC-Dev-201"},
        {text:"MC Developer Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_mc_developer"}
      ]}
    ],
    quiz:[
      {domain:"AMPscript", q: "Which AMPscript function retrieves a single value from a data extension?", a: "Lookup()", options: ["LookupRows()", "Lookup()", "DataExtensionField()", "GetValue()"] },
      {domain:"Subscriber Data Management", q: "What AMPscript function is used to insert or update a record in a data extension?", a: "UpsertData()", options: ["InsertData()", "UpdateData()", "UpsertData()", "WriteData()"] },
      {domain:"Server-Side JavaScript (SSJS)", q: "What is the purpose of Platform.Load() in SSJS?", a: "To import Marketing Cloud JavaScript libraries", options: ["To load an external JavaScript file", "To import Marketing Cloud JavaScript libraries", "To initialize an API connection", "To load subscriber data into memory"] },
      {domain:"Marketing Cloud Architecture", q: "Which Marketing Cloud REST API grant type is used for server-to-server integrations without a user?", a: "Client Credentials", options: ["Authorization Code", "Password Grant", "Client Credentials", "Implicit Grant"] },
      {domain:"AMPscript", q: "What AMPscript function iterates over rows returned by LookupOrderedRows()?", a: "FOR/NEXT with ROW() and FIELD()", options: ["FOREACH/ENDFOR", "FOR/NEXT with ROW() and FIELD()", "LOOP/ENDLOOP", "WHILE/ENDWHILE"] },
      {domain:"Marketing Cloud Architecture", q: "Which Marketing Cloud component allows developers to build web pages and forms that interact with Marketing Cloud data?", a: "CloudPages", options: ["Content Builder", "CloudPages", "Interaction Studio", "Intelligence Reports"] },
      {domain:"API Integration", q: "What is the purpose of an Event Definition in Journey Builder's API entry?", a: "It defines the schema for the data payload sent to the journey entry API", options: ["It schedules when the journey starts", "It defines the schema for the data payload sent to the journey entry API", "It configures the journey exit criteria", "It logs API calls for audit purposes"] },
      {domain:"Marketing Cloud Architecture", q: "In SSJS, which object is used to interact with Marketing Cloud data extensions?", a: "DataExtension", options: ["SFMC.DataExtension", "DataExtension", "Platform.DataExtension", "DE"] },
      {domain:"Automation", q: "What SQL keyword is used to combine results from two SELECT statements in a Query Activity?", a: "UNION ALL", options: ["JOIN", "MERGE", "UNION ALL", "COMBINE"] },
      {domain:"Marketing Cloud Architecture", q: "Which Marketing Cloud API is primarily used for legacy operations and subscriber management?", a: "SOAP API", options: ["REST API", "SOAP API", "GraphQL API", "Bulk API"] },
      {domain:"AMPscript", q: "What does the AMPscript AttributeValue() function do?", a: "Retrieves a subscriber attribute value from the All Subscribers list", options: ["Retrieves a custom object field value", "Retrieves a subscriber attribute value from the All Subscribers list", "Returns a data extension column value", "Gets an account-level setting value"] },
      {domain:"Automation", q: "Which Automation Studio activity type runs a custom SSJS script?", a: "Script Activity", options: ["Code Activity", "Script Activity", "Custom Activity", "API Activity"] },
      {domain:"AMPscript", q: "What is the correct AMPscript syntax to declare a variable named 'firstName'?", a: "%%[ VAR @firstName ]%%", options: ["%%[ SET @firstName ]%%", "%%[ VAR @firstName ]%%", "%%[ DIM firstName AS STRING ]%%", "%%[ DECLARE @firstName ]%%"] },
      {domain:"Marketing Cloud Architecture", q: "Which REST API endpoint is used to inject a contact into a Journey Builder journey?", a: "/interaction/v1/events", options: ["/journey/v1/entry", "/interaction/v1/events", "/contacts/v1/inject", "/journey/v1/trigger"] },
      {domain:"AMPscript", q: "What does the AMPscript Now() function return?", a: "The current date and time in Central Standard Time", options: ["The send date of the email", "The current date and time in Central Standard Time", "The subscriber's local time", "The account's timezone date/time"] },
      {domain:"Marketing Cloud Architecture", q: "Which Marketing Cloud feature allows tracking of how email links perform across channels with UTM parameters?", a: "Web Analytics Connector", options: ["Email Intelligence", "Web Analytics Connector", "Journey Analytics", "Link Alias Configuration"] },
      {domain:"AMPscript", q: "What does the LookupRowset() AMPscript function return?", a: "A rowset of all matching rows from a data extension", options: ["The count of matching rows", "A rowset of all matching rows from a data extension", "The first matching row only", "A nested XML object"] },
      {domain:"Subscriber Data Management", q: "In a CloudPages Smart Capture form, where is submitted data stored?", a: "A data extension specified in the form configuration", options: ["The All Subscribers list", "A data extension specified in the form configuration", "A Salesforce custom object", "A Marketing Cloud list"] },
      {domain:"API Integration", q: "Which Marketing Cloud API feature enables real-time, event-triggered transactional email sends?", a: "Transactional Messaging API", options: ["Journey Builder API", "Transactional Messaging API", "Triggered Send API", "Real-Time Send API"] },
      {domain:"Server-Side JavaScript (SSJS)", q: "What is the SSJS equivalent of the AMPscript Lookup() function?", a: "DataExtension.Init().Rows.Lookup()", options: ["DE.Lookup()", "DataExtension.Init().Rows.Lookup()", "Platform.Lookup()", "SFMC.DELookup()"] }
    ],
    tips:[
      "Master all AMPscript data extension functions — Lookup, LookupRows, UpsertData — these dominate the exam.",
      "Know the difference between AMPscript and SSJS and when to use each.",
      "Understand the OAuth2 client credentials flow for REST API authentication thoroughly.",
      "Practice writing SQL queries for Query Activity, especially JOINs across data extensions.",
      "Know the Journey Builder REST API events endpoint format for injecting contacts.",
      "Understand CloudPages Smart Capture forms and how they store data.",
      "Be familiar with SSJS DataExtension object methods as the programmatic counterpart to AMPscript.",
      "Know common AMPscript date functions and the Marketing Cloud timezone (CST)."
    ]
  },

  "Marketing Cloud Account Engagement Specialist": {
    questions: 60,
    time: 90,
    pass: 67,
    experience: "6+ months using Pardot/Marketing Cloud Account Engagement for B2B marketing",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-engagement-specialist---MC-201",
    prerequisites: [],
    overview: "The Marketing Cloud Account Engagement Specialist (formerly Pardot Specialist) certification validates expertise in B2B marketing automation using Marketing Cloud Account Engagement. Candidates demonstrate proficiency in lead nurturing, scoring, automation, and Salesforce integration.",
        domains:[
      {name:"Visitors and Prospects",pct:8,color:"#00A1E0"},
      {name:"Administration",pct:11,color:"#2ECC71"},
      {name:"Account Engagement Forms, Form Handlers and Landing Pages",pct:20,color:"#F39C12"},
      {name:"Lead Management",pct:24,color:"#E74C3C"},
      {name:"Email Marketing",pct:20,color:"#9B59B6"},
      {name:"Engagement Studio",pct:17,color:"#1ABC9C"},
    ],
    studyDays:[
      {tag:"pardot-setup",focus:"Account Engagement (Pardot) fundamentals: prospects, scoring, grading, and campaigns",topics:[
        {text:"Account Engagement Overview",url:"https://help.salesforce.com/s/articleView?id=sf.pardot_overview.htm"},
        {text:"Prospect Management",url:"https://help.salesforce.com/s/articleView?id=sf.pardot_prospect_management.htm"},
        {text:"Scoring and Grading",url:"https://help.salesforce.com/s/articleView?id=sf.pardot_scoring_grading.htm"},
        {text:"Connected Campaigns",url:"https://help.salesforce.com/s/articleView?id=sf.pardot_campaigns_connected.htm"},
        {text:"Account Engagement Specialist Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Pardot-Specialist-Exam-Guide"},
        {text:"Trailmix: Account Engagement Specialist",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-marketing-cloud-account-engagement-specialist-credential"}
      ]},
      {tag:"pardot-forms-automation",focus:"Account Engagement forms, landing pages, automation rules, and engagement programs",topics:[
        {text:"Forms and Form Handlers",url:"https://help.salesforce.com/s/articleView?id=sf.pardot_forms_overview.htm"},
        {text:"Landing Pages",url:"https://help.salesforce.com/s/articleView?id=sf.pardot_landing_pages_overview.htm"},
        {text:"Automation Rules",url:"https://help.salesforce.com/s/articleView?id=sf.pardot_automation_rules.htm"},
        {text:"Engagement Studio",url:"https://help.salesforce.com/s/articleView?id=sf.pardot_engagement_studio.htm"},
        {text:"Dynamic Lists",url:"https://help.salesforce.com/s/articleView?id=sf.pardot_dynamic_lists.htm"},
        {text:"Salesforce Connector for Pardot",url:"https://help.salesforce.com/s/articleView?id=sf.pardot_sf_connector_overview.htm"}
      ]},
      {tag:"exam-prep-pardot",focus:"Account Engagement Specialist exam prep: scoring, automation, and Salesforce integration",topics:[
        {text:"Account Engagement Specialist Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Pardot-Specialist-Exam-Guide"},
        {text:"Trailmix: Account Engagement Specialist",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-marketing-cloud-account-engagement-specialist-credential"},
        {text:"Account Engagement Documentation",url:"https://help.salesforce.com/s/articleView?id=sf.pardot_overview.htm"},
        {text:"Engagement Studio Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_pardot_specialist"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-pardot-spec---Pardot-Spec-201"},
        {text:"Pardot Trailhead Trail",url:"https://trailhead.salesforce.com/content/learn/trails/b2bmarketing"}
      ]}
    ],
    quiz:[
      {domain:"Lead Management", q: "What is the difference between a Pardot Score and a Grade?", a: "Score measures engagement level; Grade measures fit to the ideal customer profile", options: ["Score measures CRM activity; Grade measures website activity", "Score measures engagement level; Grade measures fit to the ideal customer profile", "Score is manual; Grade is automated", "Score is set by admin; Grade is set by the prospect"] },
      {domain:"Pardot Forms, Form Handlers, and Landing Pages", q: "Which Pardot feature allows you to collect data incrementally across multiple form submissions?", a: "Progressive Profiling", options: ["Dynamic Forms", "Progressive Profiling", "Conditional Fields", "Multi-Step Forms"] },
      {domain:"Email Marketing", q: "What is the purpose of a Dynamic List in Pardot?", a: "To automatically add or remove prospects based on criteria that is continuously evaluated", options: ["To create a one-time export of prospects matching criteria", "To automatically add or remove prospects based on criteria that is continuously evaluated", "To define campaign members for Salesforce sync", "To store static subscriber lists for email sends"] },
      {domain:"Lead Management", q: "Which automation type in Pardot runs only once per prospect matching the criteria?", a: "Segmentation Rule", options: ["Dynamic List", "Automation Rule", "Segmentation Rule", "Engagement Program"] },
      {domain:"Pardot Forms, Form Handlers, and Landing Pages", q: "What is a Completion Action in Pardot?", a: "An action triggered when a prospect completes a specific activity like submitting a form", options: ["An action run when an engagement program completes", "An action triggered when a prospect completes a specific activity like submitting a form", "A campaign completion notification to sales", "A webhook sent to Salesforce after a send"] },
      {domain:"Pardot Forms, Form Handlers, and Landing Pages", q: "Which Pardot feature maps external form data to Pardot prospect fields?", a: "Form Handler", options: ["Third-Party Form Connector", "Form Handler", "External Form Integration", "Web-to-Lead"] },
      {domain:"Engagement Studio", q: "In Engagement Studio, what type of step checks a condition before deciding the next path?", a: "Rule Step", options: ["Decision Step", "Rule Step", "Condition Step", "Branch Step"] },
      {domain:"Administration", q: "What does the Pardot-Salesforce sync do by default when the same field has different values in both systems?", a: "Salesforce wins (CRM data overwrites Pardot)", options: ["Pardot wins (most recently updated)", "Salesforce wins (CRM data overwrites Pardot)", "It creates a sync conflict alert", "The field with the most recently updated record wins"] },
      {domain:"Lead Management", q: "Which Pardot list type is automatically maintained based on prospect field values?", a: "Dynamic List", options: ["Static List", "Suppression List", "Dynamic List", "Seed List"] },
      {domain:"Administration", q: "What is a Pardot Custom Redirect used for?", a: "To track clicks on external links not in Pardot emails", options: ["To redirect prospects to a different landing page", "To track clicks on external links not in Pardot emails", "To redirect form submissions to a custom thank you page", "To manage URL redirects for landing page SEO"] },
      {domain:"Email Marketing", q: "Which Pardot feature allows sales reps to send Pardot emails and see prospect engagement directly in Salesforce?", a: "Salesforce Engage", options: ["Sales Path", "Salesforce Engage", "Lightning Sync", "Pardot Sales Extension"] },
      {domain:"Lead Management", q: "What is the maximum prospect score in Pardot by default?", a: "There is no default maximum", options: ["100", "1000", "There is no default maximum", "500"] },
      {domain:"Visitors and Prospects", q: "Which Pardot report shows where prospects are in the buying cycle from inquiry to customer?", a: "Lifecycle Report", options: ["Pipeline Report", "Lifecycle Report", "Funnel Report", "Revenue Report"] },
      {domain:"Administration", q: "What is a Pardot Tracker Domain used for?", a: "To brand tracking links with the company's domain instead of Pardot's default domain", options: ["To track domain authority for SEO", "To brand tracking links with the company's domain instead of Pardot's default domain", "To whitelist email domains for deliverability", "To configure CNAME records for landing pages"] },
      {domain:"Administration", q: "In Pardot, which object must exist before a prospect can sync to Salesforce?", a: "A matching Lead or Contact record in Salesforce", options: ["An Opportunity in Salesforce", "A matching Lead or Contact record in Salesforce", "A Campaign in Salesforce", "A Salesforce Account record"] },
      {domain:"Lead Management", q: "What does the Pardot Grade represent?", a: "How well a prospect matches the ideal customer profile", options: ["A prospect's engagement level with marketing content", "How well a prospect matches the ideal customer profile", "A score assigned by the sales rep", "The email deliverability score for the prospect"] },
      {domain:"Pardot Forms, Form Handlers, and Landing Pages", q: "Which Pardot feature allows A/B testing specifically on landing pages?", a: "Landing Page A/B Testing", options: ["Email A/B Testing", "Campaign Testing", "Landing Page A/B Testing", "Multivariate Testing"] },
      {domain:"Email Marketing", q: "What type of Pardot email is sent outside of campaigns and bypasses opt-out rules?", a: "Operational Email", options: ["Transactional Email", "System Email", "Operational Email", "Admin Email"] },
      {domain:"Engagement Studio", q: "In Engagement Studio, what is the purpose of a 'Trigger' step?", a: "To start the next path when a prospect performs a specific action", options: ["To set a time delay before the next action", "To start the next path when a prospect performs a specific action", "To evaluate a condition about the prospect's data", "To add the prospect to a list"] },
      {domain:"Pardot Forms, Form Handlers, and Landing Pages", q: "Which Pardot plan is required to use Advanced Dynamic Content?", a: "Pardot Plus or higher", options: ["Pardot Growth", "Pardot Plus or higher", "Pardot Premium only", "Any Pardot plan"] }
    ],
    tips:[
      "Understand the difference between score (engagement) and grade (fit) — it's the most fundamental Pardot concept.",
      "Know all automation types: dynamic lists, segmentation rules, automation rules, and Engagement Studio — and when to use each.",
      "Master the Salesforce-Pardot sync: field conflict resolution, sync triggers, and connector settings.",
      "Understand Completion Actions and all the types available (add to list, assign to user, increase score, etc.).",
      "Know what Progressive Profiling is and how to configure it — it's a frequently tested feature.",
      "Be able to explain all Engagement Studio step types: trigger, action, rule, and delay.",
      "Understand tracker domains and the importance of custom domains for branding and deliverability.",
      "Know what an operational email is and when you would use one vs. a list email."
    ]
  },

});
