Object.assign(EXAM_DATA, {
  "Marketing Cloud Email Specialist": {
    questions: 60,
    time: 90,
    pass: 67,
    experience: "6+ months using Marketing Cloud Email Studio with hands-on campaign experience",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-mc-email---MC-202",
    prerequisites: [],
    overview: "The Marketing Cloud Email Specialist certification validates expertise in email marketing using Salesforce Marketing Cloud. Candidates demonstrate proficiency in email design, subscriber management, deliverability, and analytics.",
    domains: [
      { name: "Email Marketing Concepts", pct: 10, color: "#00A1E0", desc: "Understand the fundamentals of email marketing strategy, metrics, and best practices.", keyTopics: [
      {title:"Email as a Marketing Channel",desc:"Email delivers the highest ROI of any digital channel — understand how to balance frequency, relevance, and timing."},
      {title:"Key Email Metrics",desc:"Track open rate, click-through rate (CTR), click-to-open rate (CTOR), conversion rate, bounce rate, and unsubscribe rate."},
      {title:"Segmentation Strategy",desc:"Send more relevant content by segmenting subscribers based on demographics, behavior, lifecycle stage, and engagement history."},
      {title:"Email Frequency and Fatigue",desc:"Sending too frequently causes unsubscribes; too infrequently causes disengagement — test to find the optimal cadence per segment."},
      {title:"A/B Testing",desc:"Test subject lines, send times, content, and CTAs with a subset of subscribers before sending the winner to the full list."}
    ] },
      { name: "Subscriber and List Management", pct: 25, color: "#2ECC71", desc: "Build and maintain healthy subscriber lists using proper data management and subscription hygiene practices.", keyTopics: [
      {title:"Subscriber Key Best Practices",desc:"Use a stable internal ID (not email address) as the subscriber key — email addresses change but IDs remain constant."},
      {title:"Subscription Management",desc:"Honor all unsubscribe requests immediately — configure the subscription center for subscriber self-service preference management."},
      {title:"List Hygiene",desc:"Remove hard bounces, long-inactive subscribers, and spam complainers regularly to protect sender reputation."},
      {title:"Suppression Lists",desc:"Use suppression lists to exclude specific subscribers (opt-outs, employees, competitors) from specific send audiences."},
      {title:"Data Extension Best Practices",desc:"Index the subscriber key and any fields used in filters — this significantly improves DE query and send performance."}
    ] },
      { name: "Email Marketing Best Practices", pct: 15, color: "#F39C12", desc: "Apply industry best practices to maximize deliverability, engagement, and compliance in email campaigns.", keyTopics: [
      {title:"Subject Line Best Practices",desc:"Keep subject lines under 50 characters, avoid spam trigger words, and personalize with the subscriber's name or relevant data."},
      {title:"Preview Text",desc:"Preview text appears next to the subject line in the inbox — use it to complement (not repeat) the subject line for higher open rates."},
      {title:"Mobile Optimization",desc:"Over 50% of emails are opened on mobile — use responsive templates, single-column layouts, and large tap targets for CTAs."},
      {title:"CAN-SPAM and GDPR",desc:"Include a physical mailing address, clear sender identification, and a working unsubscribe link in all commercial emails."},
      {title:"Engagement-Based Sending",desc:"Send to your most engaged subscribers first — ISPs use engagement signals to determine inbox placement for subsequent sends."}
    ] },
      { name: "Content Creation and Delivery", pct: 20, color: "#E74C3C", desc: "Create personalized, well-designed email content and execute targeted sends in Marketing Cloud.", keyTopics: [
      {title:"Content Builder Templates",desc:"Build reusable drag-and-drop email templates in Content Builder — define locked and unlocked regions for brand consistency."},
      {title:"Dynamic Content Blocks",desc:"Show different content to different subscribers in the same email using rule-based dynamic content blocks in Content Builder."},
      {title:"AMPscript Personalization",desc:"Use AMPscript to insert subscriber data, perform lookups, and render conditional content at send time for deep personalization."},
      {title:"Triggered Sends",desc:"Configure triggered send definitions to send transactional emails automatically in response to API calls or subscriber events."},
      {title:"Send Throttling",desc:"Throttle high-volume sends to avoid overwhelming servers or triggering ISP rate limits — configure batch size and interval in send settings."}
    ] },
      { name: "Messaging Features and Functionality", pct: 20, color: "#1ABC9C", desc: "Leverage advanced Email Studio features including tracking, testing, and automation integrations.", keyTopics: [
      {title:"Send Logging",desc:"Use Send Logging DEs to capture all send-time data alongside subscriber data — enables rich post-send analysis per message."},
      {title:"Litmus Integration",desc:"Litmus (or Email on Acid) previews how an email renders across 90+ email clients and devices before sending."},
      {title:"Test Sends",desc:"Always send a test before going live — review rendering, personalization accuracy, link functionality, and unsubscribe behavior."},
      {title:"Forwarding and Social Sharing",desc:"Forward-to-a-Friend and social sharing features extend email reach — track shares separately from standard email engagement."},
      {title:"Email Studio Analytics",desc:"Use tracking reports (opens, clicks, bounces, unsubscribes) to measure campaign performance and optimize future sends."}
    ] },
      { name: "Inbox Rendering and Deliverability", pct: 10, color: "#BDC3E7", desc: "Ensure emails land in the inbox by managing sender reputation, authentication, and rendering.", keyTopics: [
      {title:"Inbox Rendering",desc:"Test how emails render across Gmail, Outlook, Apple Mail, and mobile clients — layout inconsistencies can significantly hurt engagement."},
      {title:"Sender Authentication",desc:"Configure SPF, DKIM, and DMARC records for your sending domain — authenticated emails are far less likely to be marked as spam."},
      {title:"IP Reputation",desc:"Your sending IP's reputation with ISPs determines inbox placement — monitor reputation using tools like Google Postmaster and Return Path."},
      {title:"Spam Filter Testing",desc:"Run emails through spam filter tests (SpamAssassin score) before sending — identify trigger words, broken HTML, and link reputation issues."},
      {title:"Feedback Loops",desc:"Register for ISP feedback loops to receive spam complaints — suppress complainers immediately to protect your sender reputation."}
    ] }
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
    domains: [
      { name: "Marketing Cloud Architecture", pct: 10, color: "#00A1E0", desc: "Understand Marketing Cloud's technical architecture, data model, and how components interact.", keyTopics: [
      {title:"MCE Infrastructure",desc:"Marketing Cloud is a multi-tenant SaaS platform — understanding its architecture helps design scalable, maintainable solutions."},
      {title:"Business Unit Architecture",desc:"Business Units partition the org — developer solutions must account for BU context, including API endpoints and authentication scope."},
      {title:"Contact Model",desc:"The contact model links data extensions to contacts via Contact Builder — foundational for personalization across channels."},
      {title:"API Endpoints",desc:"MCE uses tenant-specific subdomains (REST) and SOAP endpoints — always use the correct tenant-specific endpoint, not generic URLs."},
      {title:"Authentication Flow",desc:"MCE uses OAuth 2.0 with client credentials flow for server-to-server API access — tokens expire every 20 minutes."}
    ] },
      { name: "Subscriber Data Management", pct: 20, color: "#2ECC71", desc: "Manage subscriber and contact data programmatically using APIs and data extension operations.", keyTopics: [
      {title:"Data Extension API",desc:"Use the REST API to create, update, delete, and query data extension records — supports upsert via primary key for idempotent operations."},
      {title:"Contact Builder API",desc:"Programmatically define attribute groups and link data extensions to the contact model — used in complex multi-DE architectures."},
      {title:"Subscriber API",desc:"Manage subscriber status, attributes, and list membership via the SOAP API — older but still used for list-based subscriber management."},
      {title:"Triggered Send Data Extensions",desc:"Configure triggered send DEs to capture send-time data alongside subscriber attributes for post-send analysis."},
      {title:"Data Retention Policies",desc:"Set programmatic data retention on DEs to auto-delete records after a defined period — important for GDPR compliance."}
    ] },
      { name: "AMPscript", pct: 20, color: "#F39C12", desc: "Write AMPscript to personalize email content, perform data lookups, and render conditional blocks.", keyTopics: [
      {title:"AMPscript Syntax",desc:"AMPscript uses %%[code]%% blocks and %%=expression=%% inline syntax — all functions are case-insensitive."},
      {title:"Lookup and LookupRows",desc:"Lookup retrieves a single value from a DE; LookupRows returns multiple rows — use these for dynamic product recommendations."},
      {title:"IF/ELSEIF/ELSE",desc:"Conditional logic in AMPscript shows different content based on subscriber attributes or DE values — most common personalization pattern."},
      {title:"FOR loops",desc:"Loop over a rowset from LookupRows to render repeat content blocks — used for order items, recommendation carousels, and dynamic tables."},
      {title:"Server-Side Rendering",desc:"AMPscript executes server-side at send time — no client processing required, but rendering errors suppress the entire email."}
    ] },
      { name: "Server-Side JavaScript (SSJS)", pct: 10, color: "#E74C3C", desc: "Use SSJS in CloudPages and email content blocks for complex server-side logic beyond AMPscript.", keyTopics: [
      {title:"SSJS vs AMPscript",desc:"SSJS is more powerful than AMPscript — use it for complex logic, REST API calls, and operations AMPscript cannot handle."},
      {title:"Platform.Load",desc:"Use Platform.Load('Core','1') to access MCE platform libraries for HTTP requests, data operations, and utility functions."},
      {title:"HTTP Calls from SSJS",desc:"Use HTTP GET/POST within SSJS to call external APIs from CloudPages or email content — note that this runs at render time."},
      {title:"SSJS in CloudPages",desc:"SSJS powers server-rendered landing pages and microsites on CloudPages — ideal for form processing and data capture workflows."},
      {title:"Error Handling in SSJS",desc:"Use try/catch blocks and write errors to a log DE — SSJS errors can silently fail without proper error capture."}
    ] },
      { name: "API Integration", pct: 20, color: "#1ABC9C", desc: "Integrate Marketing Cloud with external systems using the REST and SOAP APIs.", keyTopics: [
      {title:"REST API Overview",desc:"MCE REST API supports contacts, data extensions, journey triggers, transactional messaging, and asset management."},
      {title:"SOAP API Overview",desc:"The SOAP API handles subscribers, lists, triggered sends, and some legacy operations — use REST for new integrations where possible."},
      {title:"OAuth 2.0 Authentication",desc:"Obtain access tokens using client credentials — store client ID and secret securely in environment variables, never in code."},
      {title:"Transactional Messaging API",desc:"Trigger transactional emails and SMS via REST API — use for order confirmations, password resets, and real-time notifications."},
      {title:"Journey Builder API",desc:"Use the REST API to fire custom events that trigger journey entry for specific contacts — enables CRM-triggered journeys."}
    ] },
      { name: "Automation", pct: 10, color: "#BDC3E7", desc: "Build and manage automated workflows in Automation Studio and schedule data operations.", keyTopics: [
      {title:"Automation Types",desc:"Scheduled automations run on a timer; File Drop automations trigger when a file lands in the FTP folder — match type to use case."},
      {title:"Activity Types",desc:"Activities include Import File, Query, Filter, Send Email, Data Extract, File Transfer, and Script — chain them into sequences."},
      {title:"SQL Query Activity",desc:"Write SQL against MCE data views and DEs to create or refresh segmentation DEs — the primary tool for advanced segmentation."},
      {title:"Error Handling",desc:"Configure email notifications on automation failure and build monitoring dashboards to detect broken automations quickly."},
      {title:"Dependency Management",desc:"Order activities correctly — a SQL Query must complete before the Send Email that uses its output DE."}
    ] },
      { name: "Analytics and Insights", pct: 10, color: "#FF6B35", desc: "Extract engagement data and build custom analytics using Data Views and reporting tools.", keyTopics: [
      {title:"Data Views Reference",desc:"_Sent, _Open, _Click, _Bounce, _Unsubscribe, _JobSubscriber — these system tables hold all engagement data for SQL reporting."},
      {title:"Custom Reporting DEs",desc:"Build custom reporting tables by joining Data Views to subscriber DEs in SQL — create campaign performance summaries."},
      {title:"Einstein Engagement",desc:"Einstein Engagement Scoring predicts open and click likelihood — use scores to prioritize active subscribers and suppress fatigued ones."},
      {title:"Journey Analytics",desc:"Journey Builder provides built-in analytics for entry, goal completion, email engagement, and path distribution — review after each journey version."},
      {title:"Datorama / Marketing Cloud Intelligence",desc:"MCE Intelligence (formerly Datorama) aggregates data across channels and sources for cross-channel campaign analytics."}
    ] }
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
    domains: [
      { name: "Visitors and Prospects", pct: 20, color: "#00A1E0", desc: "Understand how MCAE tracks website visitors and converts anonymous traffic into identified prospects.", keyTopics: [
      {title:"Tracking Pixel",desc:"The MCAE JavaScript tracking code identifies known prospects and logs anonymous visitor activity by IP address."},
      {title:"Visitor to Prospect Conversion",desc:"A visitor becomes a prospect when they complete a form — their cookie links prior anonymous activity to their new prospect record."},
      {title:"Prospect Activity",desc:"MCAE logs every page view, email open, click, form fill, and file download to the prospect's activity timeline."},
      {title:"Anonymous Visitors",desc:"Unidentified visitors are tracked by IP and company via reverse IP lookup — useful for ABM targeting and sales intelligence."},
      {title:"Visitor Filters",desc:"Exclude internal IP addresses (employees, developers) from tracking to keep activity data meaningful and reporting accurate."}
    ] },
      { name: "Administration", pct: 15, color: "#2ECC71", desc: "Configure MCAE account settings, user access, connector sync, and org-level preferences.", keyTopics: [
      {title:"User Roles",desc:"MCAE roles (Administrator, Marketing, Sales, Sales Manager) control access to features — assign the least-privileged role appropriate for each user."},
      {title:"Salesforce Connector",desc:"The connector syncs prospects with Salesforce Leads and Contacts — configure sync direction, field mapping, and conflict resolution."},
      {title:"Account Recycle Bin",desc:"Deleted prospects are soft-deleted — recover them from the recycle bin within 30 days before permanent deletion."},
      {title:"Domain Validation",desc:"Validate your sending domain in MCAE to improve email deliverability — SPF and DKIM setup is managed through account settings."},
      {title:"Lifecycle Stages",desc:"Configure custom stages for prospect lifecycle (MQL, SAL, SQL) — use automation rules to move prospects between stages automatically."}
    ] },
      { name: "Pardot Forms, Form Handlers, and Landing Pages", pct: 15, color: "#F39C12", desc: "Capture prospect data using MCAE forms, form handlers, and hosted landing pages.", keyTopics: [
      {title:"MCAE Forms",desc:"Hosted forms capture prospect data and automatically create or update prospect records — include all required fields for lead scoring."},
      {title:"Progressive Profiling",desc:"Show only new questions to returning visitors — progressively build prospect profiles without overwhelming them on each visit."},
      {title:"Form Handlers",desc:"Form handlers allow MCAE to process third-party form submissions — the form lives on your site but data flows into MCAE."},
      {title:"Landing Pages",desc:"MCAE-hosted landing pages pair with forms for campaign-specific data capture — use layouts and custom code for full brand control."},
      {title:"Thank-You Content",desc:"Configure post-submission thank-you pages and autoresponder emails to acknowledge submission and deliver gated content."}
    ] },
      { name: "Lead Management", pct: 20, color: "#E74C3C", desc: "Score, grade, and route prospects to sales at the right time using MCAE's lead management features.", keyTopics: [
      {title:"Prospect Scoring",desc:"Score tracks prospect engagement — points are added for positive activities (email opens, page views) and subtracted for negative ones (unsubscribes)."},
      {title:"Prospect Grading",desc:"Grades measure how well a prospect matches the ideal customer profile — configure grading profiles with criteria like job title, company size, and industry."},
      {title:"Automation Rules",desc:"Trigger-based rules that run when prospects match criteria — common actions include assigning to a user, adding to a list, or sending a notification."},
      {title:"Assignment Rules",desc:"Automatically assign prospects to the right sales rep or queue based on criteria like territory, lead source, or company size."},
      {title:"Salesforce Lead/Contact Sync",desc:"Prospects sync bidirectionally with Salesforce — understand sync trigger conditions and field mapping to prevent data conflicts."}
    ] },
      { name: "Email Marketing", pct: 20, color: "#1ABC9C", desc: "Create and send targeted email campaigns to prospects using MCAE's email tools.", keyTopics: [
      {title:"List Emails",desc:"Batch emails sent to a static or dynamic list — the primary tool for newsletter-style and one-time campaign sends."},
      {title:"One-to-One Emails",desc:"Sales reps send individual templated emails to prospects directly from the MCAE prospect record or Salesforce."},
      {title:"Email Templates",desc:"Create reusable HTML or drag-and-drop templates — use custom fields for personalization and dynamic content for segmentation."},
      {title:"Variable Tags",desc:"Variable tags personalize email content with prospect field values — similar to merge fields in Marketing Cloud."},
      {title:"Email Deliverability",desc:"Configure a validated sending domain, monitor bounce rates, and respect unsubscribes to maintain good sender reputation."}
    ] },
      { name: "Engagement Studio", pct: 10, color: "#BDC3E7", desc: "Build automated nurture programs using Engagement Studio's visual, branching journey canvas.", keyTopics: [
      {title:"Engagement Programs",desc:"Engagement Studio programs are visual flowcharts with triggers, conditions, actions, and wait steps — replace legacy Drip Programs."},
      {title:"Triggers",desc:"Trigger steps check whether a prospect matches a condition at program entry — e.g., 'Has the prospect opened an email in the last 30 days?'"},
      {title:"Conditions",desc:"Condition steps branch the program flow — 'Yes' path for prospects who match, 'No' path for those who don't."},
      {title:"Actions",desc:"Action steps perform operations on the prospect — send email, add to list, notify owner, adjust score, change field value."},
      {title:"Wait Steps",desc:"Wait steps pause prospect progression for a defined period or until a specific day/time — control the cadence of the nurture flow."}
    ] }
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
