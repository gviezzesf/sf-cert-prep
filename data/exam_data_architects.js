Object.assign(EXAM_DATA, {
  "Platform Integration Architect":{
    questions:60,time:105,pass:"63%",experience:"5+ years",
    trailheadUrl:"https://trailheadacademy.salesforce.com/certificate/exam-integration-arch---Plat-Arch-204",
    prerequisites:[
      {name:"Platform Administrator",url:"https://trailheadacademy.salesforce.com/certificate/exam-platform-admin---Plat-Admn-201",note:"Core platform knowledge is assumed throughout the exam — admin concepts underpin all integration design decisions."},
      {name:"Platform App Builder",url:"https://trailheadacademy.salesforce.com/certificate/exam-app-builder---Plat-Admn-202",note:"Recommended to understand the declarative platform before tackling architecture-level integration design."},
      {name:"Platform Developer",url:"https://trailheadacademy.salesforce.com/certificate/exam-platform-dev1---Plat-Dev-201",note:"Apex callouts, triggers, and async patterns are core exam topics — developer experience is strongly advised."}
    ],
    overview:"The Platform Integration Architect credential is aimed at experienced architects who design and build integrations between Salesforce and external systems. The exam tests your ability to select the right integration pattern for a given scenario, choose appropriate APIs (REST, SOAP, Bulk, Streaming), design secure and resilient solutions using OAuth, Named Credentials, and Shield, and govern integration landscapes at scale. Candidates are expected to have at least five years of Salesforce experience and hands-on knowledge of integration platforms such as MuleSoft.",
        domains:[
      {name:"Evaluate the Current System Landscape",pct:8,color:"#00A1E0"},
      {name:"Evaluate Business Needs",pct:11,color:"#2ECC71"},
      {name:"Translate Needs to Integration Requirements",pct:22,color:"#F39C12"},
      {name:"Design Integration Solutions",pct:28,color:"#E74C3C"},
      {name:"Build Solution",pct:23,color:"#9B59B6"},
      {name:"Maintain Integration",pct:8,color:"#1ABC9C"},
    ],
    studyDays:[
      {tag:"integration-patterns",focus:"Master Salesforce integration patterns: request-reply, fire-and-forget, batch, and remote call-in",topics:[
        {text:"Integration Patterns and Practices Guide",url:"https://developer.salesforce.com/docs/atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_intro_overview.htm"},
        {text:"Remote Process Invocation — Request and Reply",url:"https://developer.salesforce.com/docs/atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_remote_process_invocation_request_reply.htm"},
        {text:"Remote Process Invocation — Fire and Forget",url:"https://developer.salesforce.com/docs/atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_remote_process_invocation_fire_forget.htm"},
        {text:"Batch Data Synchronization Pattern",url:"https://developer.salesforce.com/docs/atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_batch_data_synchronization.htm"},
        {text:"Remote Call-In Pattern",url:"https://developer.salesforce.com/docs/atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_remote_call_in.htm"},
        {text:"Data Virtualization Pattern",url:"https://developer.salesforce.com/docs/atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_data_virtualization.htm"}
      ]},
      {tag:"rest-api",focus:"Design with the Salesforce REST API: resources, authentication, composite, and sObject endpoints",topics:[
        {text:"REST API Developer Guide",url:"https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_what_is_rest_api.htm"},
        {text:"REST API Composite Resources",url:"https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_composite.htm"},
        {text:"sObject Rows Resource",url:"https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_basic_info.htm"},
        {text:"REST API Authentication",url:"https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/quickstart_oauth.htm"},
        {text:"Bulk API 2.0 vs REST API: When to Use Which",url:"https://developer.salesforce.com/docs/atlas.en-us.api_asynch.meta/api_asynch/asynch_api_intro.htm"},
        {text:"REST API Limits and Considerations",url:"https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest_resources.htm"}
      ]},
      {tag:"soap-api",focus:"Understand SOAP API capabilities, WSDL types, and when to choose SOAP over REST",topics:[
        {text:"SOAP API Developer Guide",url:"https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_quickstart_intro.htm"},
        {text:"Enterprise vs Partner WSDL",url:"https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_partner_wsdl.htm"},
        {text:"SOAP API upsert and merge operations",url:"https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_calls_upsert.htm"},
        {text:"SOAP API Calls Reference",url:"https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_calls_list.htm"},
        {text:"API Limits Trailhead",url:"https://trailhead.salesforce.com/content/learn/modules/api_basics/api_basics_overview"}
      ]},
      {tag:"bulk-api",focus:"Design large-volume data operations with Bulk API 2.0: jobs, batches, concurrency modes",topics:[
        {text:"Bulk API 2.0 Developer Guide",url:"https://developer.salesforce.com/docs/atlas.en-us.api_asynch.meta/api_asynch/asynch_api_intro.htm"},
        {text:"Create a Bulk API 2.0 Ingest Job",url:"https://developer.salesforce.com/docs/atlas.en-us.api_asynch.meta/api_asynch/create_job.htm"},
        {text:"Bulk API 2.0 Query",url:"https://developer.salesforce.com/docs/atlas.en-us.api_asynch.meta/api_asynch/query_create_job.htm"},
        {text:"Bulk API Best Practices",url:"https://developer.salesforce.com/docs/atlas.en-us.api_asynch.meta/api_asynch/asynch_api_bulk_query_intro.htm"},
        {text:"Bulk API 1.0 Concurrency Modes",url:"https://developer.salesforce.com/docs/atlas.en-us.api_asynch.meta/api_asynch/asynch_api_concepts_serial_parallel.htm"},
        {text:"Large Data Volumes Developer Guide",url:"https://developer.salesforce.com/docs/atlas.en-us.ldv_dev.meta/ldv_dev/ldv_intro.htm"}
      ]},
      {tag:"streaming-api",focus:"Implement real-time event-driven integrations with Streaming API, PushTopic, and Platform Events",topics:[
        {text:"Streaming API Developer Guide",url:"https://developer.salesforce.com/docs/atlas.en-us.api_streaming.meta/api_streaming/intro_stream.htm"},
        {text:"PushTopic Streaming",url:"https://developer.salesforce.com/docs/atlas.en-us.api_streaming.meta/api_streaming/code_sample_interactive_vfp_intro.htm"},
        {text:"Platform Events Developer Guide",url:"https://developer.salesforce.com/docs/atlas.en-us.platform_events.meta/platform_events/platform_events_intro.htm"},
        {text:"Platform Event Considerations",url:"https://developer.salesforce.com/docs/atlas.en-us.platform_events.meta/platform_events/platform_events_considerations.htm"},
        {text:"Change Data Capture Developer Guide",url:"https://developer.salesforce.com/docs/atlas.en-us.change_data_capture.meta/change_data_capture/cdc_intro.htm"},
        {text:"Event Bus Allocations",url:"https://developer.salesforce.com/docs/atlas.en-us.platform_events.meta/platform_events/platform_events_limits.htm"}
      ]},
      {tag:"oauth",focus:"Design OAuth 2.0 flows for server-to-server, user-agent, JWT Bearer, and device flows",topics:[
        {text:"OAuth 2.0 Flows in Salesforce",url:"https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_flows.htm"},
        {text:"JWT Bearer Token Flow",url:"https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_jwt_flow.htm"},
        {text:"Web Server OAuth Flow",url:"https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_web_server_flow.htm"},
        {text:"Client Credentials OAuth Flow",url:"https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_client_credentials_flow.htm"},
        {text:"Named Credentials Overview",url:"https://help.salesforce.com/s/articleView?id=sf.named_credentials_about.htm"},
        {text:"Connected Apps Overview",url:"https://help.salesforce.com/s/articleView?id=sf.connected_app_overview.htm"}
      ]},
      {tag:"named-credentials",focus:"Implement Named Credentials, External Credentials, and secure callout authentication",topics:[
        {text:"Named Credentials as Callout Endpoints",url:"https://help.salesforce.com/s/articleView?id=sf.named_credentials_about.htm"},
        {text:"External Credentials Overview",url:"https://help.salesforce.com/s/articleView?id=sf.external_credentials.htm"},
        {text:"Per-User Named Credentials",url:"https://help.salesforce.com/s/articleView?id=sf.named_credentials_per_user.htm"},
        {text:"Apex HTTP Callouts with Named Credentials",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_callouts_named_credentials.htm"},
        {text:"External Services and Swagger Integration",url:"https://help.salesforce.com/s/articleView?id=sf.external_services.htm"},
        {text:"Remote Site Settings",url:"https://help.salesforce.com/s/articleView?id=sf.configuring_remoteproxy.htm"}
      ]},
      {tag:"middleware",focus:"Evaluate MuleSoft, Salesforce Connect, and ESB middleware patterns for integration governance",topics:[
        {text:"Salesforce Connect Overview",url:"https://help.salesforce.com/s/articleView?id=sf.platform_connect_about.htm"},
        {text:"OData Adapter for Salesforce Connect",url:"https://help.salesforce.com/s/articleView?id=sf.platform_connect_adapters.htm"},
        {text:"MuleSoft Anypoint Platform Overview",url:"https://docs.mulesoft.com/general/"},
        {text:"API-Led Connectivity Whitepaper",url:"https://www.mulesoft.com/resources/api/what-is-api-led-connectivity"},
        {text:"Integration Architecture Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/architect-integration-architecture"},
        {text:"Salesforce Architects: Integration Patterns",url:"https://architect.salesforce.com/design/decision-guides/integrate-salesforce"}
      ]},
      {tag:"error-handling",focus:"Design resilient integrations: idempotency, retry logic, dead-letter queues, and governor limits",topics:[
        {text:"Apex Governor Limits",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm"},
        {text:"Apex Callout Limits and Considerations",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_callouts_timeouts.htm"},
        {text:"Platform Event Error Handling",url:"https://developer.salesforce.com/docs/atlas.en-us.platform_events.meta/platform_events/platform_events_error_handling.htm"},
        {text:"Queueable Apex for Async Retry",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_queueing_jobs.htm"},
        {text:"Idempotent Design Patterns",url:"https://developer.salesforce.com/docs/atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_idempotent_capability.htm"},
        {text:"API Request Limits",url:"https://help.salesforce.com/s/articleView?id=sf.integrate_api_rate_limiting.htm"}
      ]},
      {tag:"security-shield",focus:"Secure integrations with Shield Platform Encryption, TLS, IP restrictions, and audit trail",topics:[
        {text:"Shield Platform Encryption Architecture",url:"https://help.salesforce.com/s/articleView?id=sf.security_pe_overview.htm"},
        {text:"Shield Platform Encryption Considerations for Integrations",url:"https://help.salesforce.com/s/articleView?id=sf.security_pe_considerations.htm"},
        {text:"TLS Requirements for API Callouts",url:"https://help.salesforce.com/s/articleView?id=sf.security_tls.htm"},
        {text:"IP Allowlisting for Connected Apps",url:"https://help.salesforce.com/s/articleView?id=sf.connected_app_continuous_ip.htm"},
        {text:"Field Audit Trail",url:"https://help.salesforce.com/s/articleView?id=sf.field_audit_trail.htm"},
        {text:"Event Monitoring",url:"https://help.salesforce.com/s/articleView?id=sf.event_monitoring_overview.htm"}
      ]},
      {tag:"apex-integration",focus:"Build Apex HTTP callouts, REST services, and SOAP services within governor limits",topics:[
        {text:"Apex Callouts Overview",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_callouts.htm"},
        {text:"Apex REST Web Services",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_rest_intro.htm"},
        {text:"Apex SOAP Web Services",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_web_services_intro.htm"},
        {text:"Async Apex for Callout Chaining",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_invoking_future_methods.htm"},
        {text:"Continuations for Long-Running Callouts",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_continuation_overview.htm"},
        {text:"Mock Callouts in Apex Tests",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http_testing_httpmock.htm"}
      ]},
      {tag:"event-driven",focus:"Architect event-driven solutions using Platform Events, Change Data Capture, and outbound messaging",topics:[
        {text:"Platform Events Use Cases",url:"https://developer.salesforce.com/docs/atlas.en-us.platform_events.meta/platform_events/platform_events_use_cases.htm"},
        {text:"Change Data Capture Events Reference",url:"https://developer.salesforce.com/docs/atlas.en-us.change_data_capture.meta/change_data_capture/cdc_event_fields.htm"},
        {text:"Outbound Messaging",url:"https://help.salesforce.com/s/articleView?id=sf.workflow_outbound_messaging.htm"},
        {text:"EventBus.publish() in Apex",url:"https://developer.salesforce.com/docs/atlas.en-us.platform_events.meta/platform_events/platform_events_publish_apex.htm"},
        {text:"Platform Events in Flows",url:"https://developer.salesforce.com/docs/atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_flow.htm"},
        {text:"CometD Subscription and Replay",url:"https://developer.salesforce.com/docs/atlas.en-us.api_streaming.meta/api_streaming/using_streaming_api_stateless.htm"}
      ]},
      {tag:"governance",focus:"Design integration governance: API versioning strategy, monitoring, and capacity planning",topics:[
        {text:"API Version Management",url:"https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_guidelines_versioning.htm"},
        {text:"API Usage Monitoring",url:"https://help.salesforce.com/s/articleView?id=sf.monitoring_api_total_calls.htm"},
        {text:"Integration Architecture Decision Guide",url:"https://architect.salesforce.com/design/decision-guides/integrate-salesforce"},
        {text:"Architect: Integration Well-Formed",url:"https://architect.salesforce.com/well-formed-architecture/integration"},
        {text:"Salesforce API Versioning Policy",url:"https://help.salesforce.com/s/articleView?id=sf.integrate_api_versioning.htm"},
        {text:"Trailmix: Architect Integration Architecture",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/architect-integration-architecture"}
      ]},
      {tag:"mulesoft-sf",focus:"Design MuleSoft-to-Salesforce integration using Anypoint Connector, DataSense, and DataWeave",topics:[
        {text:"Salesforce Connector Reference (MuleSoft)",url:"https://docs.mulesoft.com/salesforce-connector/latest/"},
        {text:"DataWeave Language Guide",url:"https://docs.mulesoft.com/dataweave/latest/"},
        {text:"Anypoint Platform Overview",url:"https://docs.mulesoft.com/general/"},
        {text:"API-Led Connectivity Architecture",url:"https://www.mulesoft.com/resources/api/what-is-api-led-connectivity"},
        {text:"MuleSoft Salesforce Integration Patterns",url:"https://trailhead.salesforce.com/content/learn/modules/mulesoft-basics"},
        {text:"CloudHub vs RTF Deployment Tradeoffs",url:"https://docs.mulesoft.com/cloudhub/"}
      ]},
      {tag:"exam-prep",focus:"Review exam guide, attempt practice scenarios, and validate integration pattern selection skills",topics:[
        {text:"Platform Integration Architect Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Integration-Architect-Exam-Guide"},
        {text:"Trailmix: Prepare for Platform Integration Architect",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/architect-integration-architecture"},
        {text:"Architect Website — Integration Domain",url:"https://architect.salesforce.com/design/decision-guides/integrate-salesforce"},
        {text:"Focus on Force Practice Exams",url:"https://focusonforce.com/certifications/platform-integration-architect/"},
        {text:"Integration Patterns Quick Reference",url:"https://developer.salesforce.com/docs/atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_integration_patterns_intro.htm"},
        {text:"Exam: Platform Integration Architect",url:"https://trailheadacademy.salesforce.com/certificate/exam-integration-arch---Plat-Arch-204"}
      ]}
    ],
    quiz:[
      {domain:"Architecture",q:"Which integration pattern is best suited when Salesforce needs to retrieve data from an external system in real time during a user interaction?",opts:["Batch Data Synchronization","Remote Process Invocation – Request and Reply","Fire and Forget","Remote Call-In"],correct:1,explanation:"Request-Reply is used when Salesforce invokes a remote system and waits for a response synchronously, ideal for real-time lookups."},
      {domain:"API",q:"A client needs to load 5 million records into Salesforce nightly. Which API should be used?",opts:["REST API","SOAP API","Bulk API 2.0","Streaming API"],correct:2,explanation:"Bulk API 2.0 is optimized for loading large datasets with automatic batching and higher limits than REST or SOAP."},
      {domain:"Events",q:"What is the default retention period for Platform Event messages on the event bus?",opts:["1 hour","24 hours","72 hours","7 days"],correct:2,explanation:"Platform Events are retained on the event bus for 72 hours, enabling subscribers to replay missed events."},
      {domain:"Events",q:"Change Data Capture events include which type of data?",opts:["Only newly created records","Full record snapshots","Changed fields and header metadata","Only deleted record IDs"],correct:2,explanation:"CDC events contain changed field values and header metadata (e.g., change type, originating transaction) rather than full record snapshots."},
      {domain:"Security",q:"Which OAuth 2.0 flow is recommended for server-to-server integrations where no user interaction is possible?",opts:["Web Server Flow","User-Agent Flow","JWT Bearer Token Flow","Device Flow"],correct:2,explanation:"JWT Bearer Token Flow allows a server application to authenticate using a certificate without prompting for user credentials."},
      {domain:"Middleware",q:"In API-led connectivity, which layer exposes data from core systems with no business logic?",opts:["Experience API","Process API","System API","Enterprise Service Bus"],correct:2,explanation:"System APIs unlock backend systems (databases, ERPs, Salesforce) and expose their data without transformation or business logic."},
      {domain:"Architecture",q:"Which Salesforce feature enables external systems to subscribe to real-time record changes without polling?",opts:["Outbound Messages","Platform Events","Change Data Capture","Streaming API PushTopic"],correct:2,explanation:"Change Data Capture pushes change events to subscribers automatically whenever tracked records are created, updated, deleted, or undeleted."},
      {domain:"Governance",q:"What is the primary benefit of using Named Credentials for integration callouts?",opts:["They bypass governor limits","They store authentication details securely outside code","They allow unauthenticated callouts","They automatically retry failed requests"],correct:1,explanation:"Named Credentials store endpoint URL and authentication details declaratively, keeping sensitive credentials out of Apex code and improving security."},
      {domain:"API",q:"Which Salesforce API is best suited for retrieving metadata about objects and their fields programmatically?",opts:["REST API sObject Describe","Bulk API 2.0","Tooling API","Streaming API"],correct:0,explanation:"The REST API sObject Describe endpoint returns metadata about a specific object including field definitions, picklist values, and relationship info."},
      {domain:"API",q:"What is the purpose of a Composite API request?",opts:["To authenticate multiple users in one call","To bundle multiple REST API requests into a single HTTP request","To subscribe to real-time data changes","To query across multiple objects simultaneously"],correct:1,explanation:"Composite API lets you execute up to 25 subrequests in a single call and reference the output of one subrequest in a later one, reducing round trips."},
      {domain:"Architecture",q:"A legacy on-premise system cannot initiate outbound calls. Which integration pattern fits this constraint?",opts:["Remote Process Invocation – Request and Reply","Remote Call-In","Fire and Forget","UI Update Based on Data Changes"],correct:1,explanation:"Remote Call-In means Salesforce is the system being called — the external system initiates the call into Salesforce, which suits a system that cannot make outbound calls."},
      {domain:"Architecture",q:"Which pattern should be used when Salesforce must invoke an external process that takes several minutes to complete?",opts:["Request and Reply","Fire and Forget","Batch Data Synchronization","Remote Call-In"],correct:1,explanation:"Fire and Forget (async remote invocation) is appropriate when Salesforce triggers a long-running external process and does not need to wait for a response."},
      {domain:"Events",q:"Which component must be defined before other Apex code or flows can publish a Platform Event?",opts:["A Platform Event object with at least one field","A Connected App","An outbound message","A Named Credential"],correct:0,explanation:"Platform Events are custom event objects defined in Setup — you must create the event definition and its fields before publishing or subscribing."},
      {domain:"Security",q:"Shield Platform Encryption encrypts data at which level?",opts:["Network transport layer only","Application layer — data is encrypted at rest in the database","Browser session layer","API response payload only"],correct:1,explanation:"Shield Platform Encryption encrypts data at rest at the application layer, meaning the encrypted values are stored in the database rather than plain text."},
      {domain:"Security",q:"Which feature provides a detailed audit log of all configuration changes made in a Salesforce org?",opts:["Field History Tracking","Event Monitoring","Setup Audit Trail","Shield Platform Encryption"],correct:2,explanation:"Setup Audit Trail records the last 180 days of configuration changes including who made each change, what changed, and when."},
      {domain:"Middleware",q:"In MuleSoft's API-led connectivity, which API layer handles business process orchestration across multiple system APIs?",opts:["Experience API","Process API","System API","Data API"],correct:1,explanation:"Process APIs implement business logic and orchestrate calls to one or more System APIs — they contain no presentation logic and no direct system connections."},
      {domain:"API",q:"What is the maximum batch size for a single Bulk API 2.0 ingest job?",opts:["10,000 records","100,000 records","150,000 records","There is no per-job record limit"],correct:3,explanation:"Bulk API 2.0 does not have a per-job record limit — it processes all records in the uploaded CSV, splitting them internally into batches of up to 10,000."},
      {domain:"Governance",q:"An integration is consuming 80% of the daily API limit by 2pm. What is the recommended first step?",opts:["Increase the API limit via Salesforce support","Switch all calls to Bulk API","Implement caching and reduce polling frequency","Migrate to Platform Events"],correct:2,explanation:"Caching responses and reducing polling frequency is the most immediate and cost-effective way to reduce API consumption before seeking a limit increase or architectural change."},
      {domain:"Architecture",q:"Which integration topology is most appropriate when many systems need to exchange data with each other?",opts:["Point-to-point","Hub and spoke","Peer-to-peer mesh","Batch file transfer"],correct:1,explanation:"Hub-and-spoke (ESB/integration platform as hub) reduces the number of point-to-point connections from O(n²) to O(n), making it the standard choice for many-to-many integration."},
      {domain:"Events",q:"A subscriber missed Platform Events during a downtime window. Which feature allows it to replay those missed events?",opts:["Outbound Messaging retry","Replay ID with durable subscription","Apex trigger re-execution","Batch Data Sync job"],correct:1,explanation:"Platform Events support durable subscriptions — subscribers can specify a Replay ID to replay events from a specific point within the 72-hour retention window."}
    ],
    tips:[
      {icon:"🗺️",title:"Know Your Patterns Cold",body:"The exam heavily tests pattern selection. Be able to identify the right pattern given latency, data volume, and direction requirements."},
      {icon:"⚡",title:"Event-Driven is a Top Domain",body:"Platform Events and CDC together cover a large portion. Understand event retention, replay ID, and error events thoroughly."},
      {icon:"🔐",title:"OAuth Flows Matter",body:"Know JWT Bearer, Web Server, and User-Agent flows. Understand when each is appropriate and their security implications."},
      {icon:"🧱",title:"API-led Architecture",body:"Understand system/process/experience API layers and how MuleSoft fits. The exam expects architectural thinking not just implementation details."},
      {icon:"📊",title:"Governance is Testable",body:"Don't skip the governance domain. Questions on API versioning, monitoring, and CoE responsibilities do appear."},
      {icon:"⚠️",title:"Error Handling Design",body:"Design error handling for async flows. Know how Platform Event error events work and retry patterns using Queueable Apex."},
      {icon:"📝",title:"Use the Official Patterns Guide",body:"The integration patterns guide is the canonical study resource. Read all patterns including their key considerations sections."},
      {icon:"🏆",title:"Review the Exam Guide",body:"Download the official Integration Architecture Designer exam guide from Trailhead. It lists exact domains and weights — use it to prioritize your study time."}
    ]
  },

  "Platform Data Architect": {
    questions: 60,
    time: 120,
    pass: 63,
    experience: "2+ years architecting Salesforce data models with expertise in complex data management",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-data-architect---Plat-Arch-201",
    prerequisites: ["Platform Administrator", "Platform Developer"],
    overview: "The Salesforce Platform Data Architect certification validates expertise in designing scalable, high-performance data models for complex Salesforce implementations. Candidates demonstrate mastery of data modeling, large data volumes, data governance, and data migration strategies.",
        domains:[
      {name:"Data Modeling/Database Design",pct:25,color:"#00A1E0"},
      {name:"Master Data Management",pct:5,color:"#2ECC71"},
      {name:"Salesforce Data Management",pct:25,color:"#F39C12"},
      {name:"Data Governance",pct:10,color:"#E74C3C"},
      {name:"Large Data Volume Considerations",pct:20,color:"#9B59B6"},
      {name:"Data Migration",pct:15,color:"#1ABC9C"},
    ],
    studyDays:[
      {tag:"data-modeling",focus:"Design complex Salesforce data models: objects, relationships, and schema trade-offs",topics:[
        {text:"Data Modeling Trailhead Module",url:"https://trailhead.salesforce.com/content/learn/modules/data_modeling"},
        {text:"Object Relationships Overview",url:"https://help.salesforce.com/s/articleView?id=sf.relationships_considerations.htm"},
        {text:"Many-to-Many Relationships with Junction Objects",url:"https://help.salesforce.com/s/articleView?id=sf.relationships_manytomany.htm"},
        {text:"External Objects and Salesforce Connect",url:"https://help.salesforce.com/s/articleView?id=sf.platform_connect_about.htm"},
        {text:"Schema Builder",url:"https://help.salesforce.com/s/articleView?id=sf.schema_builder.htm"},
        {text:"Data Architecture Decision Guide",url:"https://architect.salesforce.com/design/decision-guides/store-data"}
      ]},
      {tag:"ldv",focus:"Architect for Large Data Volumes: skinny tables, indexing, and query optimization",topics:[
        {text:"Large Data Volumes Developer Guide",url:"https://developer.salesforce.com/docs/atlas.en-us.ldv_dev.meta/ldv_dev/ldv_intro.htm"},
        {text:"Indexing Fields for Large Data Volumes",url:"https://developer.salesforce.com/docs/atlas.en-us.ldv_dev.meta/ldv_dev/ldv_elements_indexes.htm"},
        {text:"Skinny Tables",url:"https://developer.salesforce.com/docs/atlas.en-us.ldv_dev.meta/ldv_dev/ldv_elements_skinny_tables.htm"},
        {text:"Record Counts and Query Performance",url:"https://developer.salesforce.com/docs/atlas.en-us.ldv_dev.meta/ldv_dev/ldv_elements_query_performance.htm"},
        {text:"SOQL Query Optimizer",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_query_optim.htm"},
        {text:"Bulk API for LDV Operations",url:"https://developer.salesforce.com/docs/atlas.en-us.api_asynch.meta/api_asynch/asynch_api_intro.htm"}
      ]},
      {tag:"soql",focus:"Write advanced SOQL: semi-joins, anti-joins, aggregate functions, and subqueries",topics:[
        {text:"SOQL and SOSL Reference",url:"https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql.htm"},
        {text:"Aggregate Functions in SOQL",url:"https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_agg_functions.htm"},
        {text:"Semi-Joins and Anti-Joins",url:"https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_compoundwhere.htm"},
        {text:"Relationship Queries",url:"https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships.htm"},
        {text:"SOQL Selective Queries",url:"https://developer.salesforce.com/docs/atlas.en-us.ldv_dev.meta/ldv_dev/ldv_elements_soql.htm"},
        {text:"SOSL Reference",url:"https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl.htm"}
      ]},
      {tag:"data-migration",focus:"Plan and execute data migration: ETL tools, data loader, mapping, and cutover strategy",topics:[
        {text:"Data Loader Guide",url:"https://developer.salesforce.com/docs/atlas.en-us.dataLoader.meta/dataLoader/data_loader.htm"},
        {text:"Data Migration Best Practices",url:"https://developer.salesforce.com/docs/atlas.en-us.ldv_dev.meta/ldv_dev/ldv_deployments.htm"},
        {text:"Bulk API for Data Migration",url:"https://developer.salesforce.com/docs/atlas.en-us.api_asynch.meta/api_asynch/asynch_api_intro.htm"},
        {text:"Field History Tracking Considerations",url:"https://help.salesforce.com/s/articleView?id=sf.tracking_field_history.htm"},
        {text:"Data Import Wizard",url:"https://help.salesforce.com/s/articleView?id=sf.data_import_wizard.htm"},
        {text:"External IDs for Upsert",url:"https://help.salesforce.com/s/articleView?id=sf.faq_import_general_what_is_an_external.htm"}
      ]},
      {tag:"data-quality",focus:"Implement data quality: validation rules, duplicate management, and matching rules",topics:[
        {text:"Validation Rules",url:"https://help.salesforce.com/s/articleView?id=sf.fields_about_validation_rules.htm"},
        {text:"Duplicate Management Overview",url:"https://help.salesforce.com/s/articleView?id=sf.duplicate_prevention_overview.htm"},
        {text:"Matching Rules",url:"https://help.salesforce.com/s/articleView?id=sf.matching_rules_overview.htm"},
        {text:"Duplicate Rules",url:"https://help.salesforce.com/s/articleView?id=sf.duplicate_rules_overview.htm"},
        {text:"Data Quality Trailhead",url:"https://trailhead.salesforce.com/content/learn/modules/salesforce-data-quality"},
        {text:"Einstein Data Detect",url:"https://help.salesforce.com/s/articleView?id=sf.data_detect_overview.htm"}
      ]},
      {tag:"data-governance",focus:"Design data governance policies: stewardship, classification, retention, and compliance",topics:[
        {text:"Data Governance Overview",url:"https://architect.salesforce.com/design/decision-guides/store-data"},
        {text:"Field-Level Security",url:"https://help.salesforce.com/s/articleView?id=sf.admin_fls.htm"},
        {text:"Data Classification Fields",url:"https://help.salesforce.com/s/articleView?id=sf.security_data_classification_fields.htm"},
        {text:"Retention Policies and Data Archiving",url:"https://developer.salesforce.com/docs/atlas.en-us.ldv_dev.meta/ldv_dev/ldv_deployments.htm"},
        {text:"Shield Platform Encryption for Data at Rest",url:"https://help.salesforce.com/s/articleView?id=sf.security_pe_overview.htm"},
        {text:"GDPR Compliance on Salesforce",url:"https://help.salesforce.com/s/articleView?id=sf.gdpr_overview.htm"}
      ]},
      {tag:"master-data",focus:"Implement Master Data Management: golden records, deduplication, and cross-system identity",topics:[
        {text:"Salesforce MDM Patterns",url:"https://architect.salesforce.com/design/decision-guides/store-data"},
        {text:"Duplicate Prevention for Master Data",url:"https://help.salesforce.com/s/articleView?id=sf.duplicate_prevention_overview.htm"},
        {text:"External ID Strategy",url:"https://help.salesforce.com/s/articleView?id=sf.faq_import_general_what_is_an_external.htm"},
        {text:"Contact and Account Merging",url:"https://help.salesforce.com/s/articleView?id=sf.contacts_merge.htm"},
        {text:"Data Cloud for MDM",url:"https://help.salesforce.com/s/articleView?id=sf.c360_a_data_cloud_overview.htm"},
        {text:"Cross-Object Relationships and MDM",url:"https://help.salesforce.com/s/articleView?id=sf.relationships_considerations.htm"}
      ]},
      {tag:"archiving",focus:"Architect data archiving and purging strategies for regulatory compliance and performance",topics:[
        {text:"Big Objects Overview",url:"https://developer.salesforce.com/docs/atlas.en-us.bigobjects.meta/bigobjects/big_object.htm"},
        {text:"Big Objects Implementation Guide",url:"https://developer.salesforce.com/docs/atlas.en-us.bigobjects.meta/bigobjects/big_object_define.htm"},
        {text:"Heroku Connect for Offloading Data",url:"https://devcenter.heroku.com/articles/heroku-connect"},
        {text:"Field History Retention Policy",url:"https://help.salesforce.com/s/articleView?id=sf.tracking_field_history.htm"},
        {text:"Data Archiving Best Practices",url:"https://developer.salesforce.com/docs/atlas.en-us.ldv_dev.meta/ldv_dev/ldv_deployments.htm"},
        {text:"Einstein Analytics Connect Live Datasets",url:"https://help.salesforce.com/s/articleView?id=sf.bi_integrate_connectors_sfdc.htm"}
      ]},
      {tag:"multi-org",focus:"Design multi-org data strategies: data replication, org sync, and cross-org sharing",topics:[
        {text:"Salesforce to Salesforce Overview",url:"https://help.salesforce.com/s/articleView?id=sf.business_network_intro.htm"},
        {text:"Cross-Org Adapter for Salesforce Connect",url:"https://help.salesforce.com/s/articleView?id=sf.platform_connect_cross_org_adapter.htm"},
        {text:"Data Federation Patterns",url:"https://architect.salesforce.com/design/decision-guides/store-data"},
        {text:"Shield Event Monitoring Across Orgs",url:"https://help.salesforce.com/s/articleView?id=sf.event_monitoring_overview.htm"},
        {text:"Change Data Capture for Replication",url:"https://developer.salesforce.com/docs/atlas.en-us.change_data_capture.meta/change_data_capture/cdc_intro.htm"},
        {text:"Sandboxes as Org Strategy",url:"https://help.salesforce.com/s/articleView?id=sf.create_test_instance.htm"}
      ]},
      {tag:"analytics-data",focus:"Feed data into CRM Analytics, Tableau, and Data Cloud from Salesforce data models",topics:[
        {text:"CRM Analytics Data Integration",url:"https://help.salesforce.com/s/articleView?id=sf.bi_integrate_connectors_sfdc.htm"},
        {text:"Data Cloud Ingestion API",url:"https://developer.salesforce.com/docs/atlas.en-us.c360a_api.meta/c360a_api/c360a_api_overview.htm"},
        {text:"Salesforce Reports and Dashboards",url:"https://help.salesforce.com/s/articleView?id=sf.analytics_overview.htm"},
        {text:"Tableau Hyper API",url:"https://help.tableau.com/current/api/hyper_api/en-us/index.html"},
        {text:"Data Streams in Data Cloud",url:"https://help.salesforce.com/s/articleView?id=sf.c360_a_data_stream_overview.htm"},
        {text:"Report Builder Overview",url:"https://help.salesforce.com/s/articleView?id=sf.reports_builder_create.htm"}
      ]},
      {tag:"exam-prep",focus:"Platform Data Architect exam guide review, practice scenarios, and domain scoring",topics:[
        {text:"Platform Data Architect Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Data-Architect-Exam-Guide"},
        {text:"Trailmix: Architect Data Architecture",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/architect-data-architecture-and-management"},
        {text:"Architect Website — Data Domain",url:"https://architect.salesforce.com/design/decision-guides/store-data"},
        {text:"Large Data Volumes Guide",url:"https://developer.salesforce.com/docs/atlas.en-us.ldv_dev.meta/ldv_dev/ldv_intro.htm"},
        {text:"Data Architecture Well-Formed",url:"https://architect.salesforce.com/well-formed-architecture/data"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-data-architect---Plat-Arch-201"}
      ]}
    ],
    quiz:[
      {domain:"Large Data Volumes", q: "What is the primary impact of Large Data Volumes on SOQL performance?", a: "Full table scans become extremely slow without proper indexing on selective filter fields", options: ["Governor limits are lower for large objects", "Full table scans become extremely slow without proper indexing on selective filter fields", "SOQL syntax changes for LDV objects", "DML operations are automatically batched for LDV"] },
      {domain:"Large Data Volumes", q: "Which relationship type in Salesforce automatically deletes child records when the parent is deleted?", a: "Master-Detail Relationship", options: ["Lookup Relationship", "Master-Detail Relationship", "External Lookup Relationship", "Hierarchical Relationship"] },
      {domain:"Large Data Volumes", q: "What is a Skinny Table in Salesforce?", a: "A system-managed performance table containing frequently queried fields from a large object", options: ["A custom object with fewer than 10 fields", "A system-managed performance table containing frequently queried fields from a large object", "A read-only view of a standard object for reporting", "A flat table created by the platform for archiving"] },
      {domain:"Data Modeling", q: "Which field type is automatically indexed in Salesforce?", a: "External ID fields", options: ["Formula fields", "Rich Text Area fields", "External ID fields", "Multi-select Picklist fields"] },
      {domain:"Data Modeling", q: "When should you use a Big Object instead of a standard Custom Object?", a: "When storing immutable, high-volume archival data that needs to be retained long-term", options: ["When you need real-time reporting on the data", "When storing immutable, high-volume archival data that needs to be retained long-term", "When the data needs Master-Detail relationships", "When you need to enforce validation rules on the records"] },
      {domain:"Data Migration", q: "What is the correct sequencing order for migrating related data?", a: "Parent objects before child objects", options: ["Alphabetical by object name", "Child objects before parent objects", "Parent objects before child objects", "Alphabetical by record count, smallest first"] },
      {domain:"Data Governance", q: "Which Salesforce feature provides on-platform encryption for specific fields containing sensitive data?", a: "Salesforce Shield Platform Encryption", options: ["Classic Encryption", "AES Field Encryption", "Salesforce Shield Platform Encryption", "Secure Field Masking"] },
      {domain:"Master Data Management", q: "What is a Matching Rule used for in duplicate management?", a: "Defining the criteria to identify two records as potential duplicates", options: ["Preventing duplicate records from being created", "Defining the criteria to identify two records as potential duplicates", "Merging duplicate records automatically", "Setting the match threshold for lead conversion"] },
      {domain:"Data Modeling", q: "What is the purpose of an External ID field in Salesforce?", a: "To store an identifier from an external system and enable upsert operations", options: ["To link Salesforce to an external database", "To store an identifier from an external system and enable upsert operations", "To mask sensitive data in API responses", "To index a field for faster SOQL queries"] },
      {domain:"Large Data Volumes", q: "Which API mode in Data Loader provides better performance for large data loads?", a: "Bulk API", options: ["REST API", "SOAP API", "Bulk API", "Tooling API"] },
      {domain:"Data Modeling", q: "What is a self-relationship (hierarchical relationship) typically used for?", a: "Modeling hierarchical structures like org charts where parent and child are the same object", options: ["Linking two records of different object types", "Modeling hierarchical structures like org charts where parent and child are the same object", "Creating a lookup that references the same record", "Building recursive automation logic"] },
      {domain:"Large Data Volumes", q: "How does Salesforce Connect (External Objects) differ from data replication?", a: "Data stays in the external system; Salesforce accesses it in real-time via OData or custom adapters", options: ["External Objects cache data in Salesforce for performance", "Data stays in the external system; Salesforce accesses it in real-time via OData or custom adapters", "External Objects create a copy of data in Salesforce nightly", "Salesforce Connect uses Apex to import data on demand"] },
      {domain:"Data Modeling", q: "What is the purpose of Divisions in Salesforce for LDV?", a: "To logically partition a large data set by business unit, improving query performance for each division", options: ["To physically separate data into different database tables", "To logically partition a large data set by business unit, improving query performance for each division", "To archive older records into separate storage", "To restrict data visibility by department"] },
      {domain:"Large Data Volumes", q: "Which approach is recommended for migrating 10 million records into Salesforce?", a: "Bulk API with parallel processing and batch sizes optimized for performance", options: ["Manual entry with data validation", "Data Loader with SOAP API for reliability", "Bulk API with parallel processing and batch sizes optimized for performance", "Salesforce Connect OData feed"] },
      {domain:"Data Modeling", q: "What does a Roll-Up Summary field calculate?", a: "An aggregate value (COUNT, SUM, MIN, MAX) from child records in a Master-Detail relationship", options: ["The total number of fields on a child object", "An aggregate value (COUNT, SUM, MIN, MAX) from child records in a Master-Detail relationship", "A formula calculated across multiple related objects", "The sum of a field across all records of a custom object"] },
      {domain:"Data Governance", q: "Which data governance concept tracks where data originated and how it was transformed?", a: "Data Lineage", options: ["Data Catalog", "Data Lineage", "Data Dictionary", "Data Audit Trail"] },
      {domain:"Data Modeling", q: "What is the key limitation of Multi-Select Picklist fields in SOQL?", a: "They cannot use equality operators (=) and require INCLUDES/EXCLUDES operators", options: ["They cannot be used in WHERE clauses", "They cannot use equality operators (=) and require INCLUDES/EXCLUDES operators", "They are limited to 10 values in a query", "They cannot be indexed for performance"] },
      {domain:"Master Data Management", q: "In an MDM strategy, what is a 'Golden Record'?", a: "The authoritative master record that represents the single, verified version of a person or entity", options: ["A premium record with full audit history", "The authoritative master record that represents the single, verified version of a person or entity", "A record that has been verified by a third party", "The first record created for a given entity"] },
      {domain:"Large Data Volumes", q: "What is the benefit of using async SOQL with Big Objects?", a: "It allows querying billions of records without hitting synchronous governor limits", options: ["It returns results faster than synchronous queries", "It allows querying billions of records without hitting synchronous governor limits", "It bypasses SOQL syntax requirements for Big Objects", "It enables joins between Big Objects and standard objects"] },
      {domain:"Data Modeling", q: "When designing a data model, what is the key consideration for choosing a Lookup vs. Master-Detail relationship?", a: "Whether the child record can exist independently (Lookup) or only in context of the parent (Master-Detail)", options: ["Whether you need roll-up summaries (always use Lookup)", "Whether the child record can exist independently (Lookup) or only in context of the parent (Master-Detail)", "Whether the objects are standard or custom", "Whether you need sharing rules on the child object"] }
    ],
    tips:[
      "Master LDV strategies: skinny tables, Big Objects, archiving, and selective SOQL filters.",
      "Know all relationship types and their implications: cascade delete, roll-ups, reparenting.",
      "Understand SOQL query optimization deeply — the query optimizer and indexing are critical topics.",
      "Know exactly when to use Big Objects vs. standard custom objects vs. archiving to external systems.",
      "Be able to design a complete data migration plan including sequencing parent before child.",
      "Understand duplicate management: the difference between matching rules and duplicate rules.",
      "Know Salesforce Connect (External Objects) and when federation beats replication.",
      "Understand Salesforce Shield encryption: what it protects, its limitations, and impact on search."
    ]
  },

  "Platform Sharing and Visibility Architect": {
    questions: 60,
    time: 120,
    pass: 63,
    experience: "2+ years designing Salesforce security and sharing models for complex implementations",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-sharing-visibility---Plat-Arch-205",
    prerequisites: ["Platform Administrator"],
    overview: "The Platform Sharing and Visibility Architect certification validates expertise in designing comprehensive Salesforce security and data sharing architectures. Candidates demonstrate mastery of org-wide defaults, sharing rules, role hierarchies, permission sets, and team-based access models.",
        domains:[
      {name:"Permissions to Standard Objects, Custom Objects, and Fields",pct:27,color:"#00A1E0"},
      {name:"Access to Records",pct:39,color:"#2ECC71"},
      {name:"Access to Other Data",pct:16,color:"#F39C12"},
      {name:"Implications of Security Model Choice",pct:18,color:"#E74C3C"},
    ],
    studyDays:[
      {tag:"owds",focus:"Configure Org-Wide Defaults and understand their impact on data visibility",topics:[
        {text:"Org-Wide Sharing Defaults",url:"https://help.salesforce.com/s/articleView?id=sf.security_sharing_owd_setting.htm"},
        {text:"OWD for External Access",url:"https://help.salesforce.com/s/articleView?id=sf.security_sharing_external_owd.htm"},
        {text:"Controlled by Parent Sharing Setting",url:"https://help.salesforce.com/s/articleView?id=sf.security_sharing_owd_setting.htm"},
        {text:"Sharing Settings Page",url:"https://help.salesforce.com/s/articleView?id=sf.security_sharing_settings.htm"},
        {text:"Record Access Levels",url:"https://help.salesforce.com/s/articleView?id=sf.security_sharing_access_levels.htm"},
        {text:"Implicit Sharing",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_security_sharing_understanding.htm"}
      ]},
      {tag:"role-hierarchy",focus:"Design role hierarchies for data access rollup and understand territory management",topics:[
        {text:"Role Hierarchy Overview",url:"https://help.salesforce.com/s/articleView?id=sf.user_role_hierarchy.htm"},
        {text:"Sharing and the Role Hierarchy",url:"https://help.salesforce.com/s/articleView?id=sf.security_sharing_role_hierarchy.htm"},
        {text:"Enterprise Territory Management",url:"https://help.salesforce.com/s/articleView?id=sf.territory2_overview.htm"},
        {text:"Territory Hierarchy vs Role Hierarchy",url:"https://help.salesforce.com/s/articleView?id=sf.territory2_limitations.htm"},
        {text:"Role Hierarchy and Forecasting",url:"https://help.salesforce.com/s/articleView?id=sf.forecasts3_overview.htm"},
        {text:"Sharing Architecture Decision Guide",url:"https://architect.salesforce.com/design/decision-guides/share-protect-data"}
      ]},
      {tag:"sharing-rules",focus:"Implement sharing rules: criteria-based, owner-based, and manual sharing",topics:[
        {text:"Sharing Rules Overview",url:"https://help.salesforce.com/s/articleView?id=sf.security_sharing_rules.htm"},
        {text:"Criteria-Based Sharing Rules",url:"https://help.salesforce.com/s/articleView?id=sf.security_sharing_rules_criteria_based.htm"},
        {text:"Owner-Based Sharing Rules",url:"https://help.salesforce.com/s/articleView?id=sf.security_sharing_rules_owner_based.htm"},
        {text:"Manual Sharing",url:"https://help.salesforce.com/s/articleView?id=sf.security_sharing_manual.htm"},
        {text:"Sharing Set for Portals",url:"https://help.salesforce.com/s/articleView?id=sf.customer_portal_associate_sharing_sets.htm"},
        {text:"Share Group for High Volume Users",url:"https://help.salesforce.com/s/articleView?id=sf.customer_portal_share_groups.htm"}
      ]},
      {tag:"apex-sharing",focus:"Use Apex Managed Sharing: sharing objects, share records, and with sharing keywords",topics:[
        {text:"Apex Managed Sharing Overview",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_security_sharing_understanding.htm"},
        {text:"Creating Share Records in Apex",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_bulk_sharing_creating_with_apex.htm"},
        {text:"with sharing and without sharing",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm"},
        {text:"inherited sharing Keyword",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm"},
        {text:"Sharing Object Architecture",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_bulk_sharing_understanding_obj.htm"},
        {text:"User Mode Operations in SOQL",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_enforce_usermode.htm"}
      ]},
      {tag:"permission-sets",focus:"Design permission sets, permission set groups, and muting permission sets",topics:[
        {text:"Permission Sets Overview",url:"https://help.salesforce.com/s/articleView?id=sf.perm_sets_overview.htm"},
        {text:"Permission Set Groups",url:"https://help.salesforce.com/s/articleView?id=sf.perm_set_groups.htm"},
        {text:"Muting Permission Sets",url:"https://help.salesforce.com/s/articleView?id=sf.perm_set_groups_muting.htm"},
        {text:"User Licenses and Permission Sets",url:"https://help.salesforce.com/s/articleView?id=sf.users_permsets_overview.htm"},
        {text:"Object-Level Security",url:"https://help.salesforce.com/s/articleView?id=sf.admin_abl.htm"},
        {text:"Field-Level Security",url:"https://help.salesforce.com/s/articleView?id=sf.admin_fls.htm"}
      ]},
      {tag:"communities-sharing",focus:"Configure sharing for Experience Cloud sites: sharing sets, super user access, and guest access",topics:[
        {text:"Experience Cloud Sharing Overview",url:"https://help.salesforce.com/s/articleView?id=sf.networks_sharing_overview.htm"},
        {text:"Sharing Sets for Experience Cloud",url:"https://help.salesforce.com/s/articleView?id=sf.customer_portal_associate_sharing_sets.htm"},
        {text:"Guest User Security Best Practices",url:"https://help.salesforce.com/s/articleView?id=sf.networks_guest_user_security.htm"},
        {text:"External OWD for Partner and Customer Users",url:"https://help.salesforce.com/s/articleView?id=sf.security_sharing_external_owd.htm"},
        {text:"Community User Sharing",url:"https://help.salesforce.com/s/articleView?id=sf.customer_portal_sharing_usermodel.htm"},
        {text:"Super User Access",url:"https://help.salesforce.com/s/articleView?id=sf.customer_portal_super_user.htm"}
      ]},
      {tag:"teams",focus:"Implement account teams, opportunity teams, and case teams for collaborative access",topics:[
        {text:"Account Teams Overview",url:"https://help.salesforce.com/s/articleView?id=sf.accountteam_def.htm"},
        {text:"Opportunity Teams",url:"https://help.salesforce.com/s/articleView?id=sf.salesteam_def.htm"},
        {text:"Case Teams",url:"https://help.salesforce.com/s/articleView?id=sf.caseteam_def.htm"},
        {text:"Team Member Roles",url:"https://help.salesforce.com/s/articleView?id=sf.accountteam_custom_roles.htm"},
        {text:"Sharing Teams with Apex",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_bulk_sharing_creating_with_apex.htm"},
        {text:"Territory and Team Interaction",url:"https://help.salesforce.com/s/articleView?id=sf.territory2_limitations.htm"}
      ]},
      {tag:"encryption-fls",focus:"Layer field-level security with encryption, data masking, and Shield for sensitive data",topics:[
        {text:"Field-Level Security",url:"https://help.salesforce.com/s/articleView?id=sf.admin_fls.htm"},
        {text:"Shield Platform Encryption",url:"https://help.salesforce.com/s/articleView?id=sf.security_pe_overview.htm"},
        {text:"Shield Encryption Key Management",url:"https://help.salesforce.com/s/articleView?id=sf.security_pe_manage_keys.htm"},
        {text:"Dynamic Data Masking",url:"https://help.salesforce.com/s/articleView?id=sf.security_pe_data_masking.htm"},
        {text:"Data Classification and Sensitivity",url:"https://help.salesforce.com/s/articleView?id=sf.security_data_classification_fields.htm"},
        {text:"Restriction Rules",url:"https://help.salesforce.com/s/articleView?id=sf.security_restriction_rules.htm"}
      ]},
      {tag:"restriction-scoping",focus:"Use restriction rules, scoping rules, and record access summaries for fine-grained visibility",topics:[
        {text:"Restriction Rules Overview",url:"https://help.salesforce.com/s/articleView?id=sf.security_restriction_rules.htm"},
        {text:"Scoping Rules Overview",url:"https://help.salesforce.com/s/articleView?id=sf.security_scoping_rules.htm"},
        {text:"Record Access Recalculation",url:"https://help.salesforce.com/s/articleView?id=sf.security_sharing_recalc.htm"},
        {text:"Access Policy Overview",url:"https://help.salesforce.com/s/articleView?id=sf.security_restriction_rules.htm"},
        {text:"Sharing Architecture Guide",url:"https://architect.salesforce.com/design/decision-guides/share-protect-data"},
        {text:"Large-Scale Sharing Considerations",url:"https://developer.salesforce.com/docs/atlas.en-us.ldv_dev.meta/ldv_dev/ldv_elements_sharing.htm"}
      ]},
      {tag:"audit-compliance",focus:"Configure audit, compliance, and event monitoring for sharing model validation",topics:[
        {text:"Field Audit Trail",url:"https://help.salesforce.com/s/articleView?id=sf.field_audit_trail.htm"},
        {text:"Setup Audit Trail",url:"https://help.salesforce.com/s/articleView?id=sf.admin_monitorsetup.htm"},
        {text:"Event Monitoring Overview",url:"https://help.salesforce.com/s/articleView?id=sf.event_monitoring_overview.htm"},
        {text:"Transaction Security Policies",url:"https://help.salesforce.com/s/articleView?id=sf.transaction_security_policy.htm"},
        {text:"Login History",url:"https://help.salesforce.com/s/articleView?id=sf.users_login_history.htm"},
        {text:"Debug Log and Apex Sharing Tests",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_debugging_debug_log.htm"}
      ]},
      {tag:"exam-prep",focus:"Sharing and Visibility exam guide review, practice with complex sharing scenarios",topics:[
        {text:"Sharing and Visibility Architect Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Sharing-and-Visibility-Architect-Exam-Guide"},
        {text:"Trailmix: Architect Sharing and Visibility",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/architect-sharing-and-visibility"},
        {text:"Architect Website — Security Domain",url:"https://architect.salesforce.com/design/decision-guides/share-protect-data"},
        {text:"Sharing Well-Formed Architecture",url:"https://architect.salesforce.com/well-formed-architecture/security"},
        {text:"Apex Sharing Reference",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_security_sharing_understanding.htm"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-sharing-visibility---Plat-Arch-205"}
      ]}
    ],
    quiz:[
      {domain:"Sharing Basics and OWD", q: "What OWD setting prevents record access to any user who is not the owner, above in role hierarchy, or explicitly shared?", a: "Private", options: ["Controlled by Parent", "Private", "Public Read Only", "Restricted"] },
      {domain:"Role Hierarchies and Teams", q: "How does the Role Hierarchy grant access to records?", a: "Users in higher roles can access records owned by users in subordinate roles", options: ["Users in all roles can access each other's records", "Users in higher roles can access records owned by users in subordinate roles", "Users inherit permissions from their role to all records", "Role hierarchy controls field visibility only"] },
      {domain:"Profiles, Permission Sets, and Field-Level Security", q: "What is a Muting Permission Set used for?", a: "To suppress specific permissions that are granted by a Permission Set Group", options: ["To prevent a user from logging in", "To suppress specific permissions that are granted by a Permission Set Group", "To hide fields from specific users", "To restrict API access for a permission set"] },
      {domain:"Sharing Rules and Manual Sharing", q: "Which sharing mechanism allows a record owner to share a specific record one-at-a-time?", a: "Manual Sharing", options: ["Sharing Rules", "Manual Sharing", "Apex Sharing", "Team Sharing"] },
      {domain:"Sharing Rules and Manual Sharing", q: "What type of sharing rule evaluates field values on a record to determine sharing?", a: "Criteria-Based Sharing Rule", options: ["Field-Based Sharing Rule", "Criteria-Based Sharing Rule", "Conditional Sharing Rule", "Dynamic Sharing Rule"] },
      {domain:"Programmatic Sharing", q: "In Apex, what does `with sharing` enforce?", a: "Record-level access restrictions based on the running user's sharing settings", options: ["Field-level security for all queries", "Record-level access restrictions based on the running user's sharing settings", "Object-level permission checks for DML", "Profile-based restrictions on all operations"] },
      {domain:"Programmatic Sharing", q: "What is the rowCause field in an Apex Share object used for?", a: "To identify the reason (source) of the sharing record for audit and deletion purposes", options: ["To determine the access level of the shared record", "To identify the reason (source) of the sharing record for audit and deletion purposes", "To track who created the sharing rule", "To set the expiration date for the sharing entry"] },
      {domain:"Community and External Sharing", q: "Which Experience Cloud sharing feature grants access based on an external user's account relationship?", a: "Sharing Set", options: ["Account-Based Sharing", "Sharing Set", "Customer Community Sharing Rule", "Account Relationship Share"] },
      {domain:"Sharing Rules and Manual Sharing", q: "What is the maximum number of ownership-based sharing rules per object?", a: "300 (100 ownership-based + 50 criteria-based per category)", options: ["50", "100", "300 (100 ownership-based + 50 criteria-based per category)", "Unlimited"] },
      {domain:"Role Hierarchies and Teams", q: "How does Territory Management 2.0 differ from Role Hierarchy for account access?", a: "Territories can assign accounts to multiple territories with rules; roles grant access based on org structure", options: ["Territory Management is for external users only", "Territories can assign accounts to multiple territories with rules; roles grant access based on org structure", "Territory Management uses OWD; Role Hierarchy uses sharing rules", "They are functionally identical but configured differently"] },
      {domain:"Sharing Basics and OWD", q: "What does OWD 'Controlled by Parent' mean for a child object?", a: "The child record's sharing follows the sharing settings of its parent Master-Detail record", options: ["The child record can be shared by any parent user", "The child record's sharing follows the sharing settings of its parent Master-Detail record", "The child inherits the profile permissions of the parent record's owner", "The parent controls which fields are visible on the child record"] },
      {domain:"Programmatic Sharing", q: "Which type of Apex class ignores the calling user's sharing rules?", a: "A class declared with `without sharing`", options: ["A class with `@SuppressSharing` annotation", "A class declared with `without sharing`", "A @future method", "A Schedulable class"] },
      {domain:"Sharing Basics and OWD", q: "What is the purpose of a Public Group in Salesforce sharing?", a: "To create a reusable collection of users, roles, and other groups for use in sharing rules and assignments", options: ["To share records publicly with all users in the org", "To create a reusable collection of users, roles, and other groups for use in sharing rules and assignments", "To define a portal user group for Experience Cloud", "To group picklist values for use in criteria-based sharing"] },
      {domain:"Role Hierarchies and Teams", q: "How does implicit sharing work between Account and Contact records?", a: "Users with access to an Account automatically gain read access to its related Contacts, Opportunities, and Cases", options: ["Contacts inherit the Account's OWD sharing setting only", "Users with access to an Account automatically gain read access to its related Contacts, Opportunities, and Cases", "Implicit sharing only applies when OWD is Public Read Only", "Users must have explicit sharing on both Account and Contact"] },
      {domain:"Community and External Sharing", q: "What is the key difference between high-volume and low-volume Community (Experience Cloud) users for sharing?", a: "High-volume users use sharing sets and queries only; standard users can use sharing rules and role hierarchy", options: ["High-volume users have read-only access; low-volume users have full access", "High-volume users use sharing sets and queries only; standard users can use sharing rules and role hierarchy", "High-volume users cost less per license; low-volume are more expensive", "High-volume users bypass OWD; low-volume users respect OWD"] },
      {domain:"Programmatic Sharing", q: "What Apex object is used to programmatically create sharing for the Account object?", a: "AccountShare", options: ["Account__Share", "AccountShare", "AccountSharingRule", "SharingRule.Account"] },
      {domain:"Programmatic Sharing", q: "What is `inherited sharing` in Apex?", a: "The class uses the sharing context of the caller, applying with sharing if called from a with-sharing class", options: ["The class inherits OWD settings directly from the org", "The class uses the sharing context of the caller, applying with sharing if called from a with-sharing class", "The class inherits permissions from the parent class", "The class uses sharing settings from the most recently called class"] },
      {domain:"Profiles, Permission Sets, and Field-Level Security", q: "Which type of permission set configuration is designed to be used across many users representing their job function?", a: "Permission Set Group", options: ["Profile", "Permission Set Group", "Permission Set", "Role"] },
      {domain:"Sharing Basics and OWD", q: "When designing a sharing architecture, why is it best to start with Private OWD?", a: "Starting restrictive and opening access is safer and more controlled than starting open and trying to restrict", options: ["Private OWD improves system performance significantly", "Starting restrictive and opening access is safer and more controlled than starting open and trying to restrict", "You cannot set OWD to Private after going live", "Private OWD is required for all certifications"] },
      {domain:"Sharing Basics and OWD", q: "What happens to sharing rules when OWD is set to Public Read/Write?", a: "Sharing rules become unnecessary since all users already have read/write access", options: ["Sharing rules continue to apply on top of OWD", "Sharing rules become unnecessary since all users already have read/write access", "Sharing rules are automatically deleted", "Sharing rules only apply to external users"] }
    ],
    tips:[
      "Understand the complete security model: org → object → record → field — and which layer addresses each requirement.",
      "Know OWD settings for every standard object and what each setting means for record access.",
      "Master Apex sharing: Share objects, rowCause, and when programmatic sharing is needed.",
      "Know the difference between `with sharing`, `without sharing`, and `inherited sharing` and their consequences.",
      "Understand implicit sharing for Account-related objects — it's invisible but important.",
      "Know sharing sets for Experience Cloud high-volume users — this is a distinct mechanism from sharing rules.",
      "Be able to design a sharing architecture given a complex scenario with multiple business units.",
      "Know permission set groups and muting permission sets as the modern replacement for profile-based permissions."
    ]
  },

  "Platform Identity and Access Management Architect": {
    questions: 60,
    time: 120,
    pass: 63,
    experience: "2+ years designing Salesforce identity solutions including SSO and federation",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-identity-access---Plat-Arch-203",
    prerequisites: ["Platform Administrator"],
    overview: "The Platform Identity and Access Management Architect certification validates expertise in designing enterprise identity solutions on the Salesforce platform. Candidates demonstrate mastery of SSO, OAuth 2.0, identity providers, connected apps, and MFA.",
        domains:[
      {name:"Identity Management Concepts",pct:17,color:"#00A1E0"},
      {name:"Accepting Third-Party Identity in Salesforce",pct:21,color:"#2ECC71"},
      {name:"Salesforce as an Identity Provider",pct:17,color:"#F39C12"},
      {name:"Access Management Best Practices",pct:15,color:"#E74C3C"},
      {name:"Salesforce Identity",pct:12,color:"#9B59B6"},
      {name:"Community (Partner and Customer)",pct:18,color:"#1ABC9C"},
    ],
    studyDays:[
      {tag:"identity-fundamentals",focus:"Understand Salesforce identity concepts: federation, provisioning, and the identity layer",topics:[
        {text:"Identity and Access Management Trailhead",url:"https://trailhead.salesforce.com/content/learn/modules/identity_login"},
        {text:"Identity Overview on Trailhead",url:"https://trailhead.salesforce.com/content/learn/trails/identity"},
        {text:"Salesforce Identity Features",url:"https://help.salesforce.com/s/articleView?id=sf.identity_overview.htm"},
        {text:"Identity Provider vs Service Provider",url:"https://help.salesforce.com/s/articleView?id=sf.sso_about.htm"},
        {text:"Authentication vs Authorization",url:"https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_flows.htm"},
        {text:"Identity Architect Decision Guide",url:"https://architect.salesforce.com/design/decision-guides/manage-identities"}
      ]},
      {tag:"saml-sso",focus:"Configure SAML 2.0 SSO: IdP-initiated, SP-initiated, just-in-time provisioning",topics:[
        {text:"SAML SSO Overview",url:"https://help.salesforce.com/s/articleView?id=sf.sso_about.htm"},
        {text:"Configure SSO with SAML",url:"https://help.salesforce.com/s/articleView?id=sf.sso_saml_idp.htm"},
        {text:"SP-Initiated SSO",url:"https://help.salesforce.com/s/articleView?id=sf.sso_sp_initiated.htm"},
        {text:"IdP-Initiated SSO",url:"https://help.salesforce.com/s/articleView?id=sf.sso_idp_initiated.htm"},
        {text:"Just-in-Time (JIT) Provisioning",url:"https://help.salesforce.com/s/articleView?id=sf.sso_jit_about.htm"},
        {text:"SAML Assertion Validator",url:"https://help.salesforce.com/s/articleView?id=sf.sso_saml_validating_assertion.htm"}
      ]},
      {tag:"oauth-flows",focus:"Implement all OAuth 2.0 flows: Web Server, JWT Bearer, Device, PKCE, and Client Credentials",topics:[
        {text:"OAuth 2.0 Overview",url:"https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_flows.htm"},
        {text:"JWT Bearer Token Flow",url:"https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_jwt_flow.htm"},
        {text:"Web Server Flow",url:"https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_web_server_flow.htm"},
        {text:"Client Credentials Flow",url:"https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_client_credentials_flow.htm"},
        {text:"PKCE for Mobile and Native Apps",url:"https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_PKCE_flow.htm"},
        {text:"Refresh Token Policy",url:"https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_refresh_token_flow.htm"}
      ]},
      {tag:"connected-apps",focus:"Configure Connected Apps: access policies, OAuth scopes, IP restrictions, and session policies",topics:[
        {text:"Connected Apps Overview",url:"https://help.salesforce.com/s/articleView?id=sf.connected_app_overview.htm"},
        {text:"Create a Connected App",url:"https://help.salesforce.com/s/articleView?id=sf.connected_app_create.htm"},
        {text:"Connected App OAuth Policies",url:"https://help.salesforce.com/s/articleView?id=sf.connected_app_manage_oauth.htm"},
        {text:"IP Relaxation and Continuous IP",url:"https://help.salesforce.com/s/articleView?id=sf.connected_app_continuous_ip.htm"},
        {text:"Connected App Session Policies",url:"https://help.salesforce.com/s/articleView?id=sf.connected_app_session_policies.htm"},
        {text:"OAuth Scopes Reference",url:"https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_scopes.htm"}
      ]},
      {tag:"mfa-security",focus:"Configure MFA, passwordless login, and high-assurance session policies",topics:[
        {text:"MFA Overview",url:"https://help.salesforce.com/s/articleView?id=sf.security_overview_2fa.htm"},
        {text:"MFA Enforcement",url:"https://help.salesforce.com/s/articleView?id=sf.security_require_2fa_all_users.htm"},
        {text:"Salesforce Authenticator App",url:"https://help.salesforce.com/s/articleView?id=sf.security_overview_2fa_salesforce_authenticator.htm"},
        {text:"Session Security Levels",url:"https://help.salesforce.com/s/articleView?id=sf.security_auth_assurance.htm"},
        {text:"High Assurance and Session Policies",url:"https://help.salesforce.com/s/articleView?id=sf.security_auth_policies.htm"},
        {text:"Passwordless Login",url:"https://help.salesforce.com/s/articleView?id=sf.networks_member_login_options.htm"}
      ]},
      {tag:"identity-provider",focus:"Use Salesforce as an Identity Provider for external systems with SAML and OIDC",topics:[
        {text:"Salesforce as Identity Provider",url:"https://help.salesforce.com/s/articleView?id=sf.sso_saml_salesforce_as_idp.htm"},
        {text:"Configure OIDC Provider",url:"https://help.salesforce.com/s/articleView?id=sf.sso_provider_openid_connect.htm"},
        {text:"Social Sign-On Providers",url:"https://help.salesforce.com/s/articleView?id=sf.sso_provider_google.htm"},
        {text:"Delegated Authentication",url:"https://help.salesforce.com/s/articleView?id=sf.sso_delauthentication.htm"},
        {text:"Identity Provider Login Page",url:"https://help.salesforce.com/s/articleView?id=sf.sso_idp_login.htm"},
        {text:"Salesforce Identity Licensing",url:"https://help.salesforce.com/s/articleView?id=sf.users_license_types_identity.htm"}
      ]},
      {tag:"scim-provisioning",focus:"Automate user provisioning and deprovisioning with SCIM and identity governance",topics:[
        {text:"SCIM Overview",url:"https://help.salesforce.com/s/articleView?id=sf.identity_scim_overview.htm"},
        {text:"SCIM Configuration",url:"https://help.salesforce.com/s/articleView?id=sf.identity_scim_configure.htm"},
        {text:"Automated User Provisioning with Okta",url:"https://help.salesforce.com/s/articleView?id=sf.identity_scim_configure.htm"},
        {text:"JIT Provisioning Handlers",url:"https://help.salesforce.com/s/articleView?id=sf.sso_jit_registration_handler.htm"},
        {text:"User Provisioning for Connected Apps",url:"https://help.salesforce.com/s/articleView?id=sf.connected_app_manage_user_provisioning.htm"},
        {text:"Identity Governance Best Practices",url:"https://architect.salesforce.com/design/decision-guides/manage-identities"}
      ]},
      {tag:"experience-cloud-identity",focus:"Configure identity for Experience Cloud: self-registration, social login, and B2C flows",topics:[
        {text:"Experience Cloud Identity Overview",url:"https://help.salesforce.com/s/articleView?id=sf.networks_member_login_options.htm"},
        {text:"Self-Registration for Sites",url:"https://help.salesforce.com/s/articleView?id=sf.networks_self_registration.htm"},
        {text:"Social Sign-On for Communities",url:"https://help.salesforce.com/s/articleView?id=sf.sso_provider_google.htm"},
        {text:"Custom Login Flow",url:"https://help.salesforce.com/s/articleView?id=sf.security_login_flow_overview.htm"},
        {text:"Authentication Providers",url:"https://help.salesforce.com/s/articleView?id=sf.sso_provider_google.htm"},
        {text:"Guest User Identity",url:"https://help.salesforce.com/s/articleView?id=sf.networks_guest_user_security.htm"}
      ]},
      {tag:"certificates-keys",focus:"Manage digital certificates, key pairs, and mutual TLS for secure integrations",topics:[
        {text:"Certificates and Keys Overview",url:"https://help.salesforce.com/s/articleView?id=sf.security_keys_about.htm"},
        {text:"Generate a Self-Signed Certificate",url:"https://help.salesforce.com/s/articleView?id=sf.security_keys_creating.htm"},
        {text:"Mutual TLS (mTLS)",url:"https://help.salesforce.com/s/articleView?id=sf.connected_app_create_api_integration.htm"},
        {text:"JWT Signing Certificates",url:"https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_jwt_flow.htm"},
        {text:"Shield Encryption Key Management",url:"https://help.salesforce.com/s/articleView?id=sf.security_pe_manage_keys.htm"},
        {text:"Named Credentials and Auth Providers",url:"https://help.salesforce.com/s/articleView?id=sf.named_credentials_about.htm"}
      ]},
      {tag:"login-policies",focus:"Design login policies: IP restrictions, login hours, and trusted IP ranges",topics:[
        {text:"Login IP Ranges",url:"https://help.salesforce.com/s/articleView?id=sf.security_networkaccess.htm"},
        {text:"Login Hours",url:"https://help.salesforce.com/s/articleView?id=sf.users_login_hours.htm"},
        {text:"Org-Wide Login IP Restrictions",url:"https://help.salesforce.com/s/articleView?id=sf.security_networkaccess.htm"},
        {text:"Transaction Security for Login Events",url:"https://help.salesforce.com/s/articleView?id=sf.transaction_security_policy.htm"},
        {text:"Session Settings",url:"https://help.salesforce.com/s/articleView?id=sf.security_auth_timeout.htm"},
        {text:"Login History",url:"https://help.salesforce.com/s/articleView?id=sf.users_login_history.htm"}
      ]},
      {tag:"exam-prep",focus:"IAM Architect exam guide, scenario practice across SSO, OAuth, and provisioning domains",topics:[
        {text:"Identity and Access Management Architect Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Identity-and-Access-Management-Architect-Exam-Guide"},
        {text:"Trailmix: Architect Identity and Access Management",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/architect-identity-and-access-management"},
        {text:"Identity Architect Decision Guide",url:"https://architect.salesforce.com/design/decision-guides/manage-identities"},
        {text:"Identity Well-Formed Architecture",url:"https://architect.salesforce.com/well-formed-architecture/identity"},
        {text:"OAuth 2.0 Flows Reference",url:"https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_flows.htm"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-identity-access---Plat-Arch-203"}
      ]}
    ],
    quiz:[
      {domain:"Salesforce as Identity Provider", q: "Which OAuth 2.0 grant type is designed for server-to-server integrations with no user interaction?", a: "Client Credentials", options: ["Authorization Code", "Implicit", "Client Credentials", "Resource Owner Password Credentials"] },
      {domain:"Salesforce as Service Provider", q: "What is the purpose of Just-in-Time (JIT) provisioning in SAML SSO?", a: "To automatically create or update Salesforce user records when a user logs in via SSO for the first time", options: ["To speed up the SSO login process", "To automatically create or update Salesforce user records when a user logs in via SSO for the first time", "To provision users in batches before they log in", "To distribute authentication load across multiple IdPs"] },
      {domain:"Salesforce as Identity Provider", q: "In SAML SSO, what is the difference between SP-initiated and IdP-initiated flows?", a: "SP-initiated starts at the service provider (Salesforce) and redirects to the IdP; IdP-initiated starts directly at the IdP", options: ["There is no functional difference", "SP-initiated starts at the service provider (Salesforce) and redirects to the IdP; IdP-initiated starts directly at the IdP", "IdP-initiated is more secure; SP-initiated is for public apps", "SP-initiated uses POST binding; IdP-initiated uses Redirect binding"] },
      {domain:"Salesforce Identity Features", q: "Which Salesforce feature must be enabled to use SSO and Lightning Experience features?", a: "My Domain", options: ["Custom Domain", "My Domain", "SSO Domain", "Identity Domain"] },
      {domain:"Connected Apps", q: "What is an OAuth 2.0 Refresh Token used for?", a: "To obtain a new access token after the current one expires without requiring the user to re-authenticate", options: ["To validate the identity of the user", "To obtain a new access token after the current one expires without requiring the user to re-authenticate", "To revoke all active sessions for a user", "To extend the lifetime of the current access token"] },
      {domain:"OAuth 2.0 and Access Tokens", q: "Which OAuth 2.0 grant type is best for a mobile app where the user authenticates interactively?", a: "Authorization Code with PKCE", options: ["Implicit", "Client Credentials", "Authorization Code with PKCE", "Resource Owner Password Credentials"] },
      {domain:"Salesforce as Identity Provider", q: "What does the OpenID Connect 'ID token' contain?", a: "Claims about the authenticated user's identity in a signed JWT format", options: ["The user's password hash", "Claims about the authenticated user's identity in a signed JWT format", "An encrypted access token for API calls", "The list of OAuth scopes granted to the app"] },
      {domain:"Salesforce as Service Provider", q: "What is Delegated Authentication in Salesforce?", a: "A feature that passes user credentials to an external web service for authentication instead of Salesforce validating them", options: ["Allowing users to delegate their login to another user", "A feature that passes user credentials to an external web service for authentication instead of Salesforce validating them", "SSO where authentication is delegated to a SAML IdP", "A policy that delegates authentication to Salesforce Identity"] },
      {domain:"Connected Apps", q: "Which Connected App setting controls whether a connected app requires users to re-authorize after a security change?", a: "Permitted Users setting and IP Relaxation policy", options: ["Session Security Level", "Permitted Users setting and IP Relaxation policy", "OAuth Token Expiry", "Certificate Validation policy"] },
      {domain:"Connected Apps", q: "What is the purpose of the 'Named Credential' in Salesforce for Apex callouts?", a: "To store authentication credentials securely and reference them in callouts without hardcoding credentials", options: ["To name a custom API endpoint for reuse in Salesforce", "To store authentication credentials securely and reference them in callouts without hardcoding credentials", "To define a named user for integration purposes", "To configure a trusted server certificate for HTTPS callouts"] },
      {domain:"Salesforce as Identity Provider", q: "What is required in a SAML assertion for Salesforce to recognize the user?", a: "A Subject element with the user's Salesforce username or federated identifier", options: ["The user's Salesforce User ID", "A Subject element with the user's Salesforce username or federated identifier", "A hashed version of the user's password", "The user's profile name and role"] },
      {domain:"Salesforce Identity Features", q: "Which MFA method is available natively in Salesforce without a third-party app?", a: "Salesforce Authenticator", options: ["SMS Text Message", "Email One-Time Password", "Salesforce Authenticator", "Hardware Security Key (FIDO2)"] },
      {domain:"OAuth 2.0 and Access Tokens", q: "What is the 'Implicit' OAuth 2.0 grant type's security concern?", a: "The access token is returned directly in the URL fragment, making it visible in browser history", options: ["It doesn't support user consent screens", "The access token is returned directly in the URL fragment, making it visible in browser history", "It requires the client secret to be embedded in the app", "It doesn't support token refresh"] },
      {domain:"Community (Experience Cloud) Identity", q: "Which Experience Cloud user type is best for millions of portal users with limited Salesforce license costs?", a: "External Identity license users (Guest users or high-volume portal users)", options: ["Partner Community license users", "External Identity license users (Guest users or high-volume portal users)", "Salesforce Platform license users", "Customer Community Plus license users"] },
      {domain:"Salesforce as Identity Provider", q: "What SAML binding type sends the SAML request as an HTTP form POST?", a: "POST binding", options: ["Redirect binding", "POST binding", "Artifact binding", "SOAP binding"] },
      {domain:"Connected Apps", q: "In the OAuth 2.0 Authorization Code flow, what is the purpose of the 'state' parameter?", a: "To prevent CSRF attacks by carrying an opaque value that is verified when the callback is received", options: ["To identify the application requesting authorization", "To prevent CSRF attacks by carrying an opaque value that is verified when the callback is received", "To pass the requested scopes to the authorization server", "To set the lifetime of the authorization code"] },
      {domain:"Identity Management Concepts", q: "What is the difference between authentication and authorization?", a: "Authentication verifies identity (who you are); authorization determines what you're allowed to do", options: ["Authentication uses SAML; authorization uses OAuth", "Authentication verifies identity (who you are); authorization determines what you're allowed to do", "Authentication is for internal users; authorization is for external users", "They are the same concept"] },
      {domain:"Community (Experience Cloud) Identity", q: "How does Social Sign-On work in Salesforce Experience Cloud?", a: "Users authenticate via an external identity provider (Google, Facebook) and Salesforce creates or links their portal account", options: ["Users share their social media credentials with Salesforce", "Users authenticate via an external identity provider (Google, Facebook) and Salesforce creates or links their portal account", "Salesforce posts on social media on behalf of the user", "Users' social media profiles are imported into Salesforce as contacts"] },
      {domain:"Salesforce as Identity Provider", q: "What is the SAML bearer assertion grant type in OAuth 2.0 used for?", a: "Exchanging a SAML 2.0 assertion for an OAuth access token to access APIs", options: ["Generating SAML assertions from OAuth tokens", "Exchanging a SAML 2.0 assertion for an OAuth access token to access APIs", "Authenticating with both SAML and OAuth simultaneously", "Revoking access tokens using SAML credentials"] },
      {domain:"Salesforce as Identity Provider", q: "What is Enhanced Domains in Salesforce?", a: "A domain format that includes the org-specific subdomain in all URLs, improving SSO and Lightning compatibility", options: ["A feature for managing multiple My Domain configurations", "A domain format that includes the org-specific subdomain in all URLs, improving SSO and Lightning compatibility", "A security feature that encrypts domain names", "A CDN configuration for improved page load times"] }
    ],
    tips:[
      "Master all OAuth 2.0 grant types — when to use each is the most tested IAM topic.",
      "Know SAML 2.0 thoroughly: SP-initiated vs. IdP-initiated, assertion structure, JIT provisioning.",
      "Understand Connected App settings: scopes, IP relaxation, session policies, and permitted users.",
      "Know MFA options available in Salesforce and what each verification method requires.",
      "Understand the difference between authentication (who you are) and authorization (what you can do).",
      "Know Named Credentials and how they secure callout authentication in Apex.",
      "Be able to explain the Authorization Code flow with PKCE for mobile and SPA applications.",
      "Understand My Domain requirements for SSO and Enhanced Domains for Lightning compatibility."
    ]
  },

  "Platform Development Lifecycle and Deployment Architect": {
    questions: 60,
    time: 120,
    pass: 63,
    experience: "2+ years architecting Salesforce development processes and deployment pipelines",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-dev-lifecycle---Plat-Arch-202",
    prerequisites: ["Platform Developer"],
    overview: "The Platform Development Lifecycle and Deployment Architect certification validates expertise in designing and managing Salesforce development lifecycles. Candidates demonstrate mastery of environment strategy, source control, CI/CD pipelines, testing strategies, and metadata deployment.",
        domains:[
      {name:"Application Lifecycle Management",pct:8,color:"#00A1E0"},
      {name:"Planning",pct:13,color:"#2ECC71"},
      {name:"System Design",pct:15,color:"#F39C12"},
      {name:"Building",pct:14,color:"#E74C3C"},
      {name:"Deploying",pct:14,color:"#9B59B6"},
      {name:"Testing",pct:13,color:"#1ABC9C"},
      {name:"Releasing",pct:13,color:"#E67E22"},
      {name:"Operating",pct:10,color:"#3498DB"},
    ],
    studyDays:[
      {tag:"env-strategy",focus:"Design environment strategy: sandboxes, scratch orgs, and org types for SDLC",topics:[
        {text:"Sandbox Overview",url:"https://help.salesforce.com/s/articleView?id=sf.create_test_instance.htm"},
        {text:"Sandbox Types: Developer, Partial, Full",url:"https://help.salesforce.com/s/articleView?id=sf.data_sandbox_environments.htm"},
        {text:"Scratch Orgs Overview",url:"https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs.htm"},
        {text:"Org Shape and Snapshot",url:"https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_shape_intro.htm"},
        {text:"Dev Hub Configuration",url:"https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_setup_enable_devhub.htm"},
        {text:"Development Lifecycle Guide",url:"https://architect.salesforce.com/design/decision-guides/deploy"}
      ]},
      {tag:"source-control",focus:"Implement source control with Git: branching strategies, version control for metadata",topics:[
        {text:"Salesforce DX and Source Control",url:"https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_control_intro.htm"},
        {text:"Git Branching Strategies for Salesforce",url:"https://architect.salesforce.com/design/decision-guides/deploy"},
        {text:"Source Format vs Metadata API Format",url:"https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_file_format.htm"},
        {text:"Salesforce CLI Source Commands",url:"https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_source.htm"},
        {text:"Using .forceignore",url:"https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_exclude_source.htm"},
        {text:"Project Configuration sfdx-project.json",url:"https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm"}
      ]},
      {tag:"metadata-deploy",focus:"Deploy metadata with Metadata API, Salesforce CLI, and change sets",topics:[
        {text:"Metadata API Developer Guide",url:"https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_intro.htm"},
        {text:"Deploy and Retrieve with Metadata API",url:"https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm"},
        {text:"Change Sets Overview",url:"https://help.salesforce.com/s/articleView?id=sf.changesets.htm"},
        {text:"Salesforce CLI Deploy Command",url:"https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_source.htm"},
        {text:"Package.xml Manifest",url:"https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/manifest_samples.htm"},
        {text:"Deployment Rollback Strategies",url:"https://help.salesforce.com/s/articleView?id=sf.changesets_best_practices.htm"}
      ]},
      {tag:"unlocked-packages",focus:"Architect packaging strategy with Unlocked Packages and 2nd Generation Packaging",topics:[
        {text:"Unlocked Packages Overview",url:"https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_intro.htm"},
        {text:"2nd Generation Managed Packages",url:"https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_dev2gp_comparison.htm"},
        {text:"Package Dependency Management",url:"https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_dependencies.htm"},
        {text:"Package Versioning",url:"https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_create.htm"},
        {text:"Org-Dependent Unlocked Packages",url:"https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_org_dep.htm"},
        {text:"AppExchange ISV Packaging",url:"https://developer.salesforce.com/docs/atlas.en-us.packagingGuide.meta/packagingGuide/packaging_intro.htm"}
      ]},
      {tag:"cicd",focus:"Build CI/CD pipelines: Jenkins, GitHub Actions, or Salesforce DevOps Center",topics:[
        {text:"DevOps Center Overview",url:"https://help.salesforce.com/s/articleView?id=sf.devops_center_overview.htm"},
        {text:"GitHub Actions for Salesforce",url:"https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ci_github_actions.htm"},
        {text:"CI Pipeline with Salesforce CLI",url:"https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ci.htm"},
        {text:"Salesforce CLI Auth for CI",url:"https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_connected_app.htm"},
        {text:"Apex Test Run in CI",url:"https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_apex.htm"},
        {text:"CumulusCI for Salesforce",url:"https://cumulusci.readthedocs.io/en/latest/"}
      ]},
      {tag:"apex-testing",focus:"Design Apex test strategy: test classes, coverage requirements, and bulk test patterns",topics:[
        {text:"Apex Testing Overview",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_testing_intro.htm"},
        {text:"Test.startTest and stopTest",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_testing_tools_start_stop_test.htm"},
        {text:"@testSetup Methods",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_testing_testsetup_using.htm"},
        {text:"Apex Code Coverage Requirements",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_code_coverage_intro.htm"},
        {text:"Mocking with Test.setMock",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http_testing_httpmock.htm"},
        {text:"Test Data Strategies",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_testing_data_factory.htm"}
      ]},
      {tag:"release-management",focus:"Govern release management: release trains, feature flags, and deployment windows",topics:[
        {text:"Salesforce Release Management Trailhead",url:"https://trailhead.salesforce.com/content/learn/modules/application_lifecycle_and_development_models"},
        {text:"DevOps Center Pipeline Stages",url:"https://help.salesforce.com/s/articleView?id=sf.devops_center_pipeline.htm"},
        {text:"Feature Management in Unlocked Packages",url:"https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_feature_flags.htm"},
        {text:"Sandbox Refresh Strategy",url:"https://help.salesforce.com/s/articleView?id=sf.data_sandbox_refresh.htm"},
        {text:"Post-Copy Apex Classes",url:"https://help.salesforce.com/s/articleView?id=sf.data_sandbox_post_copy.htm"},
        {text:"Development Lifecycle Decision Guide",url:"https://architect.salesforce.com/design/decision-guides/deploy"}
      ]},
      {tag:"static-analysis",focus:"Use PMD, Code Analyzer, and Apex linting for code quality enforcement in pipelines",topics:[
        {text:"Salesforce Code Analyzer",url:"https://forcedotcom.github.io/sfdx-scanner/"},
        {text:"PMD Apex Rules",url:"https://pmd.github.io/pmd/pmd_rules_apex.html"},
        {text:"ESLint for LWC",url:"https://developer.salesforce.com/docs/platform/lwc/guide/code-quality-javascript-tools.html"},
        {text:"Apex Code Coverage in CI",url:"https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ci.htm"},
        {text:"LWC Unit Testing with Jest",url:"https://developer.salesforce.com/docs/platform/lwc/guide/testing-jest-introduction.html"},
        {text:"Developer Experience Quality Trailhead",url:"https://trailhead.salesforce.com/content/learn/modules/unit-testing-on-the-lightning-platform"}
      ]},
      {tag:"exam-prep",focus:"DLDC Architect exam guide, practice scenarios around environment strategy and deployment patterns",topics:[
        {text:"Development Lifecycle Architect Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Development-Lifecycle-and-Deployment-Architect-Exam-Guide"},
        {text:"Trailmix: Architect Development Lifecycle",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/architect-dev-lifecycle-and-deployment"},
        {text:"DevOps Center Documentation",url:"https://help.salesforce.com/s/articleView?id=sf.devops_center_overview.htm"},
        {text:"Salesforce DX Developer Guide",url:"https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm"},
        {text:"Deployment Architecture Decision Guide",url:"https://architect.salesforce.com/design/decision-guides/deploy"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-dev-lifecycle---Plat-Arch-202"}
      ]}
    ],
    quiz:[
      {domain:"Environment Strategy", q: "Which sandbox type provides a full copy of production data for testing?", a: "Full Sandbox", options: ["Partial Copy Sandbox", "Full Sandbox", "Developer Pro Sandbox", "QA Sandbox"] },
      {domain:"Environment Strategy", q: "What is the primary advantage of Scratch Orgs over Sandboxes for CI/CD?", a: "They can be created and deleted on demand, enabling ephemeral, reproducible test environments", options: ["They have more storage capacity than Developer sandboxes", "They can be created and deleted on demand, enabling ephemeral, reproducible test environments", "They include production data for realistic testing", "They do not count against the org's sandbox allocation"] },
      {domain:"Source Control", q: "In Git Gitflow branching, what branch contains production-ready code?", a: "main/master branch", options: ["develop branch", "release branch", "main/master branch", "hotfix branch"] },
      {domain:"Deployment Strategy and Tools", q: "What does the `--check-only` flag do during a Salesforce CLI deployment?", a: "Validates the deployment without actually deploying the components", options: ["Checks the deployment package for syntax errors only", "Validates the deployment without actually deploying the components", "Deploys to a sandbox environment only", "Checks if all required tests pass without running them"] },
      {domain:"Deployment Strategy and Tools", q: "What is an Unlocked Package's key advantage over Change Sets?", a: "Source-tracked, versioned, and dependency-aware deployments that can be automated in CI/CD", options: ["Unlocked Packages include data; Change Sets do not", "Source-tracked, versioned, and dependency-aware deployments that can be automated in CI/CD", "Unlocked Packages deploy faster than Change Sets", "Unlocked Packages support all metadata types; Change Sets do not"] },
      {domain:"Testing", q: "What is the minimum Apex test coverage required to deploy code to production?", a: "75% overall org coverage", options: ["75% per class", "75% overall org coverage", "80% per class", "100% for new code"] },
      {domain:"Deployment Strategy and Tools", q: "Which Salesforce tool provides a native UI for managing DevOps pipelines with work items and stages?", a: "Salesforce DevOps Center", options: ["Salesforce Org Studio", "Change Set Manager", "Salesforce DevOps Center", "Deployment Pipeline Console"] },
      {domain:"Source Control", q: "What is the purpose of a package.xml file in Salesforce metadata deployments?", a: "To specify which metadata components to retrieve or deploy", options: ["To configure package dependencies for AppExchange", "To specify which metadata components to retrieve or deploy", "To define npm dependencies for Salesforce DX projects", "To set deployment order for complex metadata types"] },
      {domain:"Source Control", q: "In CI/CD for Salesforce, what does PMD (Program Metrics Detector) provide?", a: "Static code analysis to identify potential bugs, security vulnerabilities, and poor coding practices in Apex", options: ["Performance monitoring for deployed Apex code", "Static code analysis to identify potential bugs, security vulnerabilities, and poor coding practices in Apex", "Test execution reporting for Apex test classes", "Package dependency validation"] },
      {domain:"Deployment Strategy and Tools", q: "What is the advantage of Custom Metadata Types over Custom Settings for feature flags?", a: "Custom Metadata Types are deployable as metadata; Custom Settings are data that must be managed separately", options: ["Custom Metadata Types support more data types", "Custom Metadata Types are deployable as metadata; Custom Settings are data that must be managed separately", "Custom Metadata Types have higher governor limits", "Custom Metadata Types allow real-time updates without deployment"] },
      {domain:"Environment Strategy", q: "Which Salesforce environment refresh interval is longest?", a: "Full Sandbox - 29 days", options: ["Developer Sandbox - 1 day", "Partial Sandbox - 5 days", "Full Sandbox - 29 days", "Developer Pro Sandbox - 3 days"] },
      {domain:"Deployment Strategy and Tools", q: "What is a delta deployment strategy in Salesforce CI/CD?", a: "Deploying only the metadata that changed between two commits rather than the entire project", options: ["Deploying changes in small batches over time", "Deploying only the metadata that changed between two commits rather than the entire project", "Deploying to delta/staging environment before production", "A strategy that deploys new features and removes deprecated features simultaneously"] },
      {domain:"Source Control", q: "In the package development model, what is a namespace used for?", a: "To prefix all components in a managed package, preventing naming conflicts in subscriber orgs", options: ["To define the package version number", "To prefix all components in a managed package, preventing naming conflicts in subscriber orgs", "To restrict who can install the package", "To enable cross-org API calls for the package"] },
      {domain:"Environment Strategy", q: "Which anti-pattern does the recommendation 'never edit directly in production' address?", a: "Bypassing the development lifecycle and creating untracked configuration drift", options: ["Avoiding governor limit violations in production", "Bypassing the development lifecycle and creating untracked configuration drift", "Preventing unauthorized access to production data", "Reducing sandbox refresh costs"] },
      {domain:"Source Control", q: "What is the purpose of a hotfix branch in Gitflow?", a: "To apply urgent fixes directly to the main branch without going through the full release process", options: ["To fix bugs found in the develop branch", "To apply urgent fixes directly to the main branch without going through the full release process", "To patch sandbox environments quickly", "To revert broken commits from feature branches"] },
      {domain:"Deployment Strategy and Tools", q: "Which deployment approach is recommended when deploying metadata with complex inter-dependencies?", a: "Define deployment order in package.xml and deploy in a single transaction to maintain consistency", options: ["Deploy components alphabetically to avoid conflicts", "Define deployment order in package.xml and deploy in a single transaction to maintain consistency", "Deploy each component individually to isolate failures", "Use change sets which automatically handle dependencies"] },
      {domain:"Testing", q: "What @TestSetup annotation does in Apex test classes?", a: "Creates test records once before all test methods run, rolled back between each test method", options: ["Marks the class as a test data factory", "Creates test records once before all test methods run, rolled back between each test method", "Configures which sandbox environment to test against", "Sets up mock callout responses for all tests"] },
      {domain:"Source Control", q: "Which source control strategy keeps the main branch always deployable with short-lived feature branches?", a: "Trunk-Based Development", options: ["Gitflow", "Trunk-Based Development", "Feature Branch Strategy", "Release Branch Strategy"] },
      {domain:"Source Control", q: "What is the key limitation of Change Sets for large-scale Salesforce deployments?", a: "They are UI-based, not automatable, have no version history, and don't support all metadata types", options: ["They are slower than SFDX deployments", "They are UI-based, not automatable, have no version history, and don't support all metadata types", "They can only be used between sandboxes, not to production", "They require a Full Sandbox for deployment"] },
      {domain:"Source Control", q: "Which CI/CD best practice prevents technical debt from accumulating in Salesforce codebases?", a: "Enforcing code review gates and static analysis checks on every pull request", options: ["Running all tests after every commit", "Enforcing code review gates and static analysis checks on every pull request", "Deploying hotfixes directly to production", "Using only declarative tools to avoid code debt"] }
    ],
    tips:[
      "Know all sandbox types, their data copy capabilities, and refresh intervals — the exam tests this extensively.",
      "Understand the full spectrum of deployment tools: Change Sets, Metadata API, SFDX CLI, Unlocked Packages, DevOps Center.",
      "Know the difference between org-based development (change sets) and source-driven development (SFDX) — and when each is appropriate.",
      "Understand CI/CD pipeline components for Salesforce: source control, static analysis, test execution, deployment automation.",
      "Know Scratch Org advantages for CI/CD: ephemeral, version-controlled, no refresh waiting.",
      "Understand Unlocked Package versioning and when to use them vs. org-based change sets.",
      "Know Apex test best practices: @TestSetup, test factories, isolation, and the 75% coverage requirement.",
      "Be able to design a complete environment strategy and release management process for a large org."
    ]
  },

  "System Architect": {
    questions: null,
    time: null,
    pass: null,
    designation: true,
    experience: "3+ years as a Salesforce Architect across multiple domains and complex implementations",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-sys-architect---Sys-Arch-301",
    prerequisites: [{name:"Platform Data Architect",required:true},{name:"Platform Sharing and Visibility Architect",required:true},{name:"Platform Identity and Access Management Architect",required:true},{name:"Platform Development Lifecycle and Deployment Architect",required:true}],
    overview: "The Salesforce System Architect certification (formerly Certified Technical Architect path prereq) validates the ability to design Salesforce solutions across all technical domains. Candidates demonstrate mastery of data architecture, security, identity, integration, and development lifecycle for enterprise-scale solutions.",
    domains: [
      { name: "Governance and Lifecycle Management", pct: 15, color: "#00A1E0" },
      { name: "Security Architecture", pct: 20, color: "#2ECC71", desc: "Architect end-to-end security postures covering identity, access control, and compliance.", keyTopics: [
      {title:"Identity and Access",desc:"Design SSO, MFA, and delegated authentication flows for internal and external users."},
      {title:"Sharing and Visibility",desc:"Configure OWD, sharing rules, role hierarchies, and manual sharing strategies."},
      {title:"Compliance Controls",desc:"Map Salesforce security features to SOC 2, PCI-DSS, and HIPAA requirements."}
    ] },
      { name: "Integration Architecture", pct: 20, color: "#F39C12", desc: "Design integration topologies connecting Salesforce to enterprise systems using appropriate patterns and middleware.", keyTopics: [
      {title:"Integration Patterns",desc:"Select synchronous, asynchronous, event-driven, or batch integration patterns per use case."},
      {title:"Middleware Selection",desc:"Evaluate MuleSoft, Boomi, and native Salesforce Connect for integration scenarios."},
      {title:"API Governance",desc:"Establish API versioning, rate limiting, and lifecycle management policies."}
    ] },
      { name: "Data Architecture", pct: 20, color: "#E74C3C" },
      { name: "Performance Architecture", pct: 15, color: "#1ABC9C" },
      { name: "Business Architecture", pct: 10, color: "#BDC3E7" }
    ],
    studyDays:[
      {tag:"domain-review",focus:"Review all four Architect domain exams and how they intersect for System Architect",topics:[
        {text:"System Architect Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-System-Architect-Exam-Guide"},
        {text:"Trailmix: Architect System Design",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/architect-system-architect"},
        {text:"Platform Data Architect Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/architect-data-architecture-and-management"},
        {text:"Sharing and Visibility Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/architect-sharing-and-visibility"},
        {text:"IAM Architect Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/architect-identity-and-access-management"},
        {text:"DLDC Architect Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/architect-dev-lifecycle-and-deployment"}
      ]},
      {tag:"cross-domain-data",focus:"Apply data architecture principles at enterprise scale: multi-org, federation, and MDM",topics:[
        {text:"Large Data Volumes Developer Guide",url:"https://developer.salesforce.com/docs/atlas.en-us.ldv_dev.meta/ldv_dev/ldv_intro.htm"},
        {text:"Data Architecture Decision Guide",url:"https://architect.salesforce.com/design/decision-guides/store-data"},
        {text:"Big Objects for Archiving",url:"https://developer.salesforce.com/docs/atlas.en-us.bigobjects.meta/bigobjects/big_object.htm"},
        {text:"External Objects and Salesforce Connect",url:"https://help.salesforce.com/s/articleView?id=sf.platform_connect_about.htm"},
        {text:"Master Data Management Patterns",url:"https://architect.salesforce.com/design/decision-guides/store-data"},
        {text:"Multi-Org Replication Patterns",url:"https://help.salesforce.com/s/articleView?id=sf.business_network_intro.htm"}
      ]},
      {tag:"cross-domain-security",focus:"Design enterprise security: layering OWDs, sharing rules, FLS, and Apex sharing",topics:[
        {text:"Security and Sharing Architecture",url:"https://architect.salesforce.com/design/decision-guides/share-protect-data"},
        {text:"Org-Wide Defaults",url:"https://help.salesforce.com/s/articleView?id=sf.security_sharing_owd_setting.htm"},
        {text:"Apex Managed Sharing",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_security_sharing_understanding.htm"},
        {text:"Permission Set Groups",url:"https://help.salesforce.com/s/articleView?id=sf.perm_set_groups.htm"},
        {text:"Restriction and Scoping Rules",url:"https://help.salesforce.com/s/articleView?id=sf.security_restriction_rules.htm"},
        {text:"Shield Platform Encryption",url:"https://help.salesforce.com/s/articleView?id=sf.security_pe_overview.htm"}
      ]},
      {tag:"cross-domain-identity",focus:"Integrate identity patterns with data and sharing: SSO, SCIM, and attribute-based access",topics:[
        {text:"Identity Architecture Decision Guide",url:"https://architect.salesforce.com/design/decision-guides/manage-identities"},
        {text:"SAML SSO with Attribute Mapping",url:"https://help.salesforce.com/s/articleView?id=sf.sso_jit_about.htm"},
        {text:"OAuth Integration and Sharing Model",url:"https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_flows.htm"},
        {text:"Connected App Policies",url:"https://help.salesforce.com/s/articleView?id=sf.connected_app_manage_oauth.htm"},
        {text:"SCIM and JIT Provisioning",url:"https://help.salesforce.com/s/articleView?id=sf.identity_scim_overview.htm"},
        {text:"MFA and Session Assurance",url:"https://help.salesforce.com/s/articleView?id=sf.security_auth_assurance.htm"}
      ]},
      {tag:"cross-domain-integration",focus:"Cross-domain integration design: API selection, event-driven patterns, and middleware",topics:[
        {text:"Integration Patterns and Practices Guide",url:"https://developer.salesforce.com/docs/atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_intro_overview.htm"},
        {text:"Platform Events for Cross-Domain Events",url:"https://developer.salesforce.com/docs/atlas.en-us.platform_events.meta/platform_events/platform_events_intro.htm"},
        {text:"Change Data Capture",url:"https://developer.salesforce.com/docs/atlas.en-us.change_data_capture.meta/change_data_capture/cdc_intro.htm"},
        {text:"Bulk API for System-to-System Data",url:"https://developer.salesforce.com/docs/atlas.en-us.api_asynch.meta/api_asynch/asynch_api_intro.htm"},
        {text:"MuleSoft API-Led Connectivity",url:"https://www.mulesoft.com/resources/api/what-is-api-led-connectivity"},
        {text:"Named Credentials and External Credentials",url:"https://help.salesforce.com/s/articleView?id=sf.named_credentials_about.htm"}
      ]},
      {tag:"cross-domain-deployment",focus:"Design deployment strategy across all domains: packages, CI/CD, and environment governance",topics:[
        {text:"Development Lifecycle Decision Guide",url:"https://architect.salesforce.com/design/decision-guides/deploy"},
        {text:"Unlocked Packages for Cross-Domain Metadata",url:"https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_intro.htm"},
        {text:"DevOps Center",url:"https://help.salesforce.com/s/articleView?id=sf.devops_center_overview.htm"},
        {text:"Sandbox Refresh Strategy",url:"https://help.salesforce.com/s/articleView?id=sf.data_sandbox_refresh.htm"},
        {text:"Change Set Limitations at Scale",url:"https://help.salesforce.com/s/articleView?id=sf.changesets.htm"},
        {text:"Scratch Org Pooling for CI",url:"https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs.htm"}
      ]},
      {tag:"well-formed-arch",focus:"Apply Salesforce Well-Formed Architecture principles across all technical domains",topics:[
        {text:"Well-Formed Architecture Overview",url:"https://architect.salesforce.com/well-formed-architecture"},
        {text:"Data Well-Formed",url:"https://architect.salesforce.com/well-formed-architecture/data"},
        {text:"Integration Well-Formed",url:"https://architect.salesforce.com/well-formed-architecture/integration"},
        {text:"Security Well-Formed",url:"https://architect.salesforce.com/well-formed-architecture/security"},
        {text:"Identity Well-Formed",url:"https://architect.salesforce.com/well-formed-architecture/identity"},
        {text:"Architect Website",url:"https://architect.salesforce.com"}
      ]},
      {tag:"scenario-practice",focus:"Practice complex cross-domain scenario questions combining data, security, identity, and deployment",topics:[
        {text:"Salesforce Architect Scenarios",url:"https://architect.salesforce.com"},
        {text:"Trailhead Superbadge: Advanced Apex Specialist",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_apex"},
        {text:"Trailhead Superbadge: Security Specialist",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_security"},
        {text:"System Architect Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-System-Architect-Exam-Guide"},
        {text:"Focus on Force Practice Exams",url:"https://focusonforce.com"},
        {text:"Exam Registration: System Architect",url:"https://trailheadacademy.salesforce.com/certificate/exam-sys-architect---Sys-Arch-301"}
      ]}
    ],
    quiz:[
      {domain:"Integration Architecture", q: "Which integration pattern is best for connecting many different systems where each needs to communicate with others?", a: "Hub-and-Spoke (ESB/MuleSoft)", options: ["Point-to-Point", "Hub-and-Spoke (ESB/MuleSoft)", "Peer-to-Peer", "Event-Driven Architecture"] },
      {domain:"Integration Architecture", q: "What is Change Data Capture (CDC) used for in Salesforce integration architecture?", a: "Publishing near-real-time events when Salesforce records are created, updated, deleted, or undeleted", options: ["Capturing all user activity for audit purposes", "Publishing near-real-time events when Salesforce records are created, updated, deleted, or undeleted", "Tracking changes to Salesforce configuration in Setup Audit Trail", "Monitoring API call volumes for rate limiting"] },
      {domain:"Security Architecture", q: "In a multi-org Salesforce architecture, when should you consider splitting into multiple orgs?", a: "When business units have completely different data models, compliance requirements, or no need to share data", options: ["When there are more than 100 custom objects", "When business units have completely different data models, compliance requirements, or no need to share data", "When performance begins to degrade in the single org", "When there are multiple Salesforce administrators"] },
      {domain:"Security Architecture", q: "What is an Architecture Decision Record (ADR)?", a: "A document capturing an architectural decision, its context, the options considered, and the rationale for the choice", options: ["A record of changes made by a Salesforce Architect in Setup", "A document capturing an architectural decision, its context, the options considered, and the rationale for the choice", "An approval form for technical changes signed by stakeholders", "A Salesforce custom object tracking architectural issues"] },
      {domain:"Integration Architecture", q: "Which Salesforce API is most appropriate for consuming real-time event streams from external subscribers?", a: "Streaming API (CometD protocol) or Platform Events", options: ["REST API with polling", "Streaming API (CometD protocol) or Platform Events", "SOAP API with subscriptions", "Bulk API batch processing"] },
      {domain:"Governance and Lifecycle Management", q: "What is Recovery Time Objective (RTO) in disaster recovery planning?", a: "The maximum acceptable time to restore service after an outage", options: ["The maximum acceptable data loss measured in time", "The maximum acceptable time to restore service after an outage", "The time required to complete a disaster recovery test", "The scheduled maintenance window for backups"] },
      {domain:"Integration Architecture", q: "Why is event-driven architecture preferred over synchronous point-to-point integration for high-volume scenarios?", a: "Events decouple producer and consumer, allowing asynchronous processing and better handling of volume spikes", options: ["Event-driven systems are always faster than synchronous calls", "Events decouple producer and consumer, allowing asynchronous processing and better handling of volume spikes", "Event-driven architecture eliminates the need for error handling", "Events are more secure than synchronous API calls"] },
      {domain:"Integration Architecture", q: "What is the primary benefit of API-Led Connectivity in an enterprise integration architecture?", a: "Creating reusable, discoverable API layers that reduce point-to-point complexity and enable agility", options: ["Eliminating the need for middleware", "Creating reusable, discoverable API layers that reduce point-to-point complexity and enable agility", "Ensuring all APIs use REST protocol", "Centralizing all integration logic in one system"] },
      {domain:"Governance and Lifecycle Management", q: "When should an architect choose declarative automation over Apex code?", a: "When the automation can be expressed without code, reducing maintenance cost and making it accessible to admins", options: ["Always — declarative is always preferred", "When the automation can be expressed without code, reducing maintenance cost and making it accessible to admins", "Only for simple field updates without conditions", "When performance is not a concern"] },
      {domain:"Governance and Lifecycle Management", q: "What is technical debt in the context of Salesforce architecture?", a: "The accumulated cost of shortcuts, workarounds, and poor design decisions that must eventually be addressed", options: ["Unpaid Salesforce licensing fees", "The accumulated cost of shortcuts, workarounds, and poor design decisions that must eventually be addressed", "Legacy code that cannot be removed due to dependencies", "Excess custom objects and fields that go unused"] },
      {domain:"Integration Architecture", q: "How does the Salesforce Bulk API differ from the REST API for data operations?", a: "Bulk API processes records asynchronously in batches optimized for large volumes; REST processes records synchronously", options: ["Bulk API is faster for single record operations", "Bulk API processes records asynchronously in batches optimized for large volumes; REST processes records synchronously", "REST API supports more operations than Bulk API", "Bulk API requires a separate authentication mechanism"] },
      {domain:"Business Architecture", q: "What is the purpose of a capability map in enterprise architecture?", a: "To catalog the business capabilities an organization has, independent of how they are implemented", options: ["To document which Salesforce features are licensed", "To catalog the business capabilities an organization has, independent of how they are implemented", "To map source code to deployment environments", "To list all integrations between systems"] },
      {domain:"Data Architecture", q: "Which performance optimization technique stores frequently accessed data to avoid repeated expensive operations?", a: "Caching (Platform Cache, Custom Metadata, static variables)", options: ["Async processing", "Caching (Platform Cache, Custom Metadata, static variables)", "Denormalization", "Index optimization"] },
      {domain:"Integration Architecture", q: "In a hybrid deployment (Salesforce + on-premise systems), what pattern provides the most resilient integration?", a: "MuleSoft as the integration layer with message queuing for reliability", options: ["Direct HTTPS callouts from Apex to the on-premise system", "MuleSoft as the integration layer with message queuing for reliability", "Salesforce Connect for real-time on-premise data access", "Scheduled batch jobs to synchronize data nightly"] },
      {domain:"Data Architecture", q: "What is the key consideration when designing a data model that spans multiple Salesforce clouds?", a: "Defining a common identifier (like a customer ID) that can correlate records across clouds", options: ["Ensuring all objects have identical field names across clouds", "Defining a common identifier (like a customer ID) that can correlate records across clouds", "Deploying all clouds in the same Salesforce org", "Using only standard objects to ensure cross-cloud compatibility"] },
      {domain:"Governance and Lifecycle Management", q: "What governance practice prevents configuration drift between Salesforce environments?", a: "Source control for all metadata with automated deployment pipelines", options: ["Weekly manual comparisons between environments", "Source control for all metadata with automated deployment pipelines", "Using Full Sandbox refreshes before each release", "Restricting all changes to the production org"] },
      {domain:"Security Architecture", q: "Which pattern should be used when multiple downstream systems need to react to Salesforce data changes?", a: "Publish Platform Events or CDC events that downstream systems subscribe to independently", options: ["Make synchronous callouts from Apex triggers to each downstream system", "Publish Platform Events or CDC events that downstream systems subscribe to independently", "Use a scheduled batch job to poll for changes and notify systems", "Deploy a webhook to each downstream system"] },
      {domain:"Governance and Lifecycle Management", q: "When evaluating build vs. buy for a new Salesforce capability, what is the primary consideration?", a: "Whether the capability is a core competency (build) or commodity (buy/use existing AppExchange)", options: ["Build is always better for security reasons", "Whether the capability is a core competency (build) or commodity (buy/use existing AppExchange)", "Cost of development vs. license cost only", "AppExchange solutions are always preferred to reduce risk"] },
      {domain:"Performance Architecture", q: "What is the Salesforce Platform Cache used for?", a: "Storing data in memory across transactions to avoid repeated SOQL queries or expensive computations", options: ["Caching Visualforce page HTML for faster rendering", "Storing data in memory across transactions to avoid repeated SOQL queries or expensive computations", "Caching API authentication tokens", "Storing static resources like JavaScript and CSS"] },
      {domain:"Security Architecture", q: "What does a Threat Model analysis provide in security architecture?", a: "Identification of potential attack vectors, threats, and mitigation strategies for a system", options: ["A list of security patches to apply", "Identification of potential attack vectors, threats, and mitigation strategies for a system", "A compliance checklist for regulatory requirements", "A vulnerability scan report for deployed code"] }
    ],
    tips:[
      "Think in trade-offs — every architecture question has multiple valid answers; pick the one that best fits the constraints given.",
      "Know integration patterns: point-to-point, hub-and-spoke, EDA — and the business scenarios each suits best.",
      "Understand event-driven architecture deeply: Platform Events, CDC, and how they decouple systems.",
      "Know when multiple orgs are appropriate vs. a single org — this is a high-level architectural decision.",
      "Be able to justify declarative vs. programmatic choices based on the specific scenario given.",
      "Understand Salesforce API types: REST, SOAP, Bulk, Streaming — and their performance and use-case differences.",
      "Know Platform Cache: when to use it, partitions (org vs. session), and TTL considerations.",
      "Practice writing Architecture Decision Records — the exam tests whether you can articulate decisions and their rationale."
    ]
  },

  "Application Architect": {
    questions: null,
    time: null,
    pass: null,
    designation: true,
    experience: "2+ years architecting Salesforce applications with expertise in data modeling and security",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-app-architect---App-Arch-301",
    prerequisites: [{name:"Platform Data Architect",required:true},{name:"Platform Sharing and Visibility Architect",required:true}],
    overview: "The Salesforce Application Architect certification validates the ability to design secure, scalable Salesforce applications. It is awarded upon passing the Platform Data Architect and Platform Sharing and Visibility Architect exams, signifying mastery of data architecture and security design.",
    domains: [
      { name: "Data Architecture and Management", pct: 35, color: "#00A1E0", desc: "Design robust Salesforce data models and data management strategies for enterprise applications.", keyTopics: [
      {title:"Complex Data Modeling",desc:"Model real-world entities accurately — use junction objects, self-relationships, and external objects to represent complex business domains."},
      {title:"LDV Strategies",desc:"For objects with 1M+ records: ensure selective SOQL, request skinny tables via support, design batch processing, and plan archiving early."},
      {title:"External Data Access",desc:"Use Salesforce Connect for real-time external data access — understand External Object limitations (no triggers, limited SOQL) vs data replication tradeoffs."},
      {title:"Data Quality Controls",desc:"Layer data quality: required fields, validation rules, duplicate rules, and matching rules — build quality in at entry, not as a cleanup task."},
      {title:"Migration Design",desc:"Design migrations with external IDs, phased loads, and rollback checkpoints — validate each phase before loading the next dependency layer."}
    ] },
      { name: "Security Architecture", pct: 35, color: "#2ECC71", desc: "Design the complete security model covering object, record, and field-level access for enterprise solutions.", keyTopics: [
      {title:"Permission Model Design",desc:"Design profiles as job-role baselines; use Permission Set Groups for functional access; use muting sets for exceptions — minimize profile proliferation."},
      {title:"Record Sharing Model",desc:"Start with Private OWD, add role hierarchy for upward visibility, add sharing rules for lateral access, use Apex for dynamic complex sharing."},
      {title:"Shield Encryption",desc:"Understand what Shield encrypts (fields at rest), what it does not protect (in-memory processing), and the impact on search, filters, and formulas."},
      {title:"Security Review",desc:"Conduct formal security reviews before go-live: review FLS enforcement in Apex, SOQL injection risks, and sharing model completeness."},
      {title:"Compliance Architecture",desc:"Design for GDPR, CCPA, and HIPAA requirements — implement field-level encryption, audit logging, data retention, and DSR processes."}
    ] },
      { name: "Application Design", pct: 20, color: "#F39C12", desc: "Apply software design patterns and Salesforce best practices to build maintainable, scalable applications.", keyTopics: [
      {title:"Apex Enterprise Patterns",desc:"Service Layer (business logic), Domain Layer (object-specific logic), Selector Layer (SOQL), Unit of Work (DML batching) — apply for complex Apex."},
      {title:"Automation Architecture",desc:"Design automation order: before-save Flow for field updates, after-save Flow for related record updates, Apex for complex logic — avoid mixing approaches."},
      {title:"LWC Architecture",desc:"Decompose complex UIs into container components (data fetching) and presentational components (pure display) — promotes reuse and testability."},
      {title:"Error Handling Design",desc:"Design error handling at all layers — Apex try/catch, Flow fault paths, API error responses — surface actionable messages to users."},
      {title:"Technical Debt Prevention",desc:"Enforce code review, maintain test coverage, document architectural decisions, and schedule regular refactoring — debt compounds quickly."}
    ] },
      { name: "Integration and Business Processes", pct: 10, color: "#E74C3C", desc: "Design integrations and automated business processes that connect Salesforce to the broader enterprise.", keyTopics: [
      {title:"Integration Pattern Selection",desc:"Synchronous REST for real-time queries; Platform Events for event-driven; Batch API for bulk data; MuleSoft for complex orchestration."},
      {title:"Process Automation Integration",desc:"Combine Flow, Apex, and external API calls in a single automation — design for atomicity and rollback when multi-step processes fail partway."},
      {title:"Outbound Messaging",desc:"Use outbound messages for reliable, guaranteed delivery to external systems — they retry automatically and are simpler than Apex callouts for simple notifications."},
      {title:"External Service Integration",desc:"Register external REST APIs as External Services — invoke them from Flow without Apex code using the visual declarative interface."},
      {title:"Connected System Design",desc:"Map all integrated systems, their data contracts, and update frequencies — ensures the application design accounts for all external dependencies."}
    ] }
    ],
    studyDays:[
      {tag:"app-arch-overview",focus:"Understand Application Architect designation: data + sharing domains and their interaction",topics:[
        {text:"Application Architect Overview",url:"https://trailheadacademy.salesforce.com/certificate/exam-app-architect---App-Arch-301"},
        {text:"Platform Data Architect Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Data-Architect-Exam-Guide"},
        {text:"Sharing and Visibility Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Sharing-and-Visibility-Architect-Exam-Guide"},
        {text:"Data Architecture Decision Guide",url:"https://architect.salesforce.com/design/decision-guides/store-data"},
        {text:"Security and Sharing Decision Guide",url:"https://architect.salesforce.com/design/decision-guides/share-protect-data"},
        {text:"Architect Website",url:"https://architect.salesforce.com"}
      ]},
      {tag:"data-model-security",focus:"Design data models with security in mind: FLS, OWD, and relationships that affect sharing",topics:[
        {text:"Object Relationships and Sharing",url:"https://help.salesforce.com/s/articleView?id=sf.relationships_considerations.htm"},
        {text:"Implicit Sharing via Relationships",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_security_sharing_understanding.htm"},
        {text:"Lookup vs Master-Detail Sharing Implications",url:"https://help.salesforce.com/s/articleView?id=sf.relationships_considerations.htm"},
        {text:"Field-Level Security",url:"https://help.salesforce.com/s/articleView?id=sf.admin_fls.htm"},
        {text:"Org-Wide Defaults",url:"https://help.salesforce.com/s/articleView?id=sf.security_sharing_owd_setting.htm"},
        {text:"Schema Design Best Practices",url:"https://architect.salesforce.com/design/decision-guides/store-data"}
      ]},
      {tag:"ldv-sharing",focus:"LDV at scale with sharing: deferring sharing recalculation and performance implications",topics:[
        {text:"Large Data Volumes and Sharing",url:"https://developer.salesforce.com/docs/atlas.en-us.ldv_dev.meta/ldv_dev/ldv_elements_sharing.htm"},
        {text:"Defer Sharing Recalculation",url:"https://help.salesforce.com/s/articleView?id=sf.security_sharing_recalc.htm"},
        {text:"Skinny Tables",url:"https://developer.salesforce.com/docs/atlas.en-us.ldv_dev.meta/ldv_dev/ldv_elements_skinny_tables.htm"},
        {text:"SOQL Selective Queries",url:"https://developer.salesforce.com/docs/atlas.en-us.ldv_dev.meta/ldv_dev/ldv_elements_soql.htm"},
        {text:"Sharing Rules at Scale",url:"https://developer.salesforce.com/docs/atlas.en-us.ldv_dev.meta/ldv_dev/ldv_elements_sharing.htm"},
        {text:"Record Count Limits and Indexing",url:"https://developer.salesforce.com/docs/atlas.en-us.ldv_dev.meta/ldv_dev/ldv_elements_indexes.htm"}
      ]},
      {tag:"apex-data-sharing",focus:"Build Apex that respects data architecture: sharing enforcement, DML limits, and SOQL",topics:[
        {text:"with sharing and without sharing",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm"},
        {text:"Apex Managed Sharing",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_bulk_sharing_creating_with_apex.htm"},
        {text:"Bulkified DML",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_dml_bulk.htm"},
        {text:"SOQL For Loops",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_for_loops.htm"},
        {text:"Apex Security with CRUD and FLS",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_enforce_usermode.htm"},
        {text:"Schema.describeSObjectResult",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_methods_system_sobject_describe.htm"}
      ]},
      {tag:"scenario-practice",focus:"Practice Application Architect scenarios: data model + sharing rules combined exam questions",topics:[
        {text:"Application Architect Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/architect-application-architect"},
        {text:"Data Architecture Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/architect-data-architecture-and-management"},
        {text:"Sharing and Visibility Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/architect-sharing-and-visibility"},
        {text:"Trailhead Superbadge: Security Specialist",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_security"},
        {text:"Architect Website Decision Guides",url:"https://architect.salesforce.com/design/decision-guides"},
        {text:"Application Architect Credential",url:"https://trailheadacademy.salesforce.com/certificate/exam-app-architect---App-Arch-301"}
      ]}
    ],
    quiz:[
      {domain:"Application Design", q: "What is the Application Architect certification?", a: "A designation awarded when you pass both Platform Data Architect and Platform Sharing and Visibility Architect exams", options: ["A standalone exam covering data and security architecture", "A designation awarded when you pass both Platform Data Architect and Platform Sharing and Visibility Architect exams", "An advanced version of the Platform Developer II certification", "An assessment given by Salesforce after 3 years of experience"] },
      {domain:"Security Architecture", q: "When designing a security model, what is the recommended starting point for OWD settings?", a: "Private (most restrictive), then open access as needed", options: ["Public Read/Write to enable all users to collaborate", "Private (most restrictive), then open access as needed", "Controlled by Parent for all objects", "Public Read Only and add sharing rules for write access"] },
      {domain:"Data Architecture and Management", q: "How should you model a many-to-many relationship between two objects in Salesforce?", a: "Create a junction object with Master-Detail relationships to both objects", options: ["Add a Lookup field from each object to the other", "Create a junction object with Master-Detail relationships to both objects", "Use a Many-to-Many relationship type on one of the objects", "Use a custom field of type List to store related IDs"] },
      {domain:"Data Architecture and Management", q: "What LDV strategy should be used for archiving records that must remain accessible on-platform?", a: "Big Objects for immutable archive records with async SOQL access", options: ["Delete records after 7 years per compliance requirements", "Big Objects for immutable archive records with async SOQL access", "Move records to a related Archive custom object", "Use Full Sandbox for archive data storage"] },
      {domain:"Data Architecture and Management", q: "In a complex enterprise scenario with regional divisions, what is the most scalable sharing model?", a: "Private OWD + role hierarchy per division + criteria-based sharing rules for cross-division access", options: ["Public Read/Write for all objects with FLS restrictions", "Private OWD + role hierarchy per division + criteria-based sharing rules for cross-division access", "Apex sharing for all records to maximize flexibility", "One sharing rule per division granting access to all records"] },
      {domain:"Data Architecture and Management", q: "What is the purpose of using External ID fields in an application data model?", a: "To enable upsert operations with external system identifiers and to link records across systems", options: ["To encrypt the record ID for security", "To enable upsert operations with external system identifiers and to link records across systems", "To make a field visible in the external system API only", "To replace the Salesforce record ID with a custom format"] },
      {domain:"Security Architecture", q: "When should an architect choose probabilistic encryption over deterministic encryption in Salesforce Shield?", a: "When the field is not used in WHERE clauses or for sorting (i.e., not queried directly)", options: ["Probabilistic is always the better choice for security", "When the field is not used in WHERE clauses or for sorting (i.e., not queried directly)", "When the field value must be unique", "Probabilistic should be used for all numeric fields"] },
      {domain:"Application Design", q: "What is the automation evaluation order in Salesforce when multiple automation types run on the same object?", a: "Before Save Flow → Apex before trigger → Validation Rules → Duplicate Rules → After trigger → Workflow → Process Builder → After Save Flow", options: ["Triggers → Flows → Workflow Rules → Validation Rules", "Before Save Flow → Apex before trigger → Validation Rules → Duplicate Rules → After trigger → Workflow → Process Builder → After Save Flow", "Validation Rules → Flows → Triggers → Workflow", "The order is indeterminate and depends on creation date"] },
      {domain:"Security Architecture", q: "What is the key benefit of using Permission Set Groups in application architecture?", a: "They allow assembling multiple permission sets into job-function profiles that can be assigned/revoked as a unit", options: ["They replace profiles entirely for all permissions", "They allow assembling multiple permission sets into job-function profiles that can be assigned/revoked as a unit", "They grant higher limits than individual permission sets", "They automatically sync with the role hierarchy"] },
      {domain:"Data Architecture and Management", q: "When should you use Apex sharing instead of declarative sharing rules?", a: "When sharing must be based on complex logic that cannot be expressed in criteria-based rules", options: ["Whenever you need to share records with more than 100 users", "When sharing must be based on complex logic that cannot be expressed in criteria-based rules", "When OWD is set to Public Read/Write", "For all sharing in Experience Cloud communities"] },
      {domain:"Data Architecture and Management", q: "What is the risk of having too many criteria-based sharing rules?", a: "Sharing rule recalculation can become slow and resource-intensive for large data sets", options: ["It increases storage costs significantly", "Sharing rule recalculation can become slow and resource-intensive for large data sets", "It prevents the use of role hierarchy", "Too many sharing rules cause DML governor limit errors"] },
      {domain:"Application Design", q: "Which design approach reduces risk when building complex multi-object applications in Salesforce?", a: "Service Layer pattern: centralizing business logic in Apex service classes rather than embedding in triggers", options: ["Building all logic in Flow to avoid code complexity", "Service Layer pattern: centralizing business logic in Apex service classes rather than embedding in triggers", "Using Process Builder for all automation to maintain simplicity", "Distributing logic across multiple small triggers on each object"] },
      {domain:"Security Architecture", q: "What is the primary reason to avoid using `without sharing` in Apex unnecessarily?", a: "It bypasses the user's sharing rules, potentially exposing records the user should not see", options: ["It slows down query performance", "It bypasses the user's sharing rules, potentially exposing records the user should not see", "It prevents triggers from firing correctly", "It causes governor limit issues"] },
      {domain:"Data Architecture and Management", q: "In a data migration project, what should be validated before beginning the actual migration?", a: "Data profiling: completeness, quality, uniqueness, and field mapping from source to target", options: ["Running the migration in production first to test performance", "Data profiling: completeness, quality, uniqueness, and field mapping from source to target", "Enabling all custom validation rules in the target org", "Setting all OWD to Public Read/Write to avoid sharing conflicts"] },
      {domain:"Security Architecture", q: "What is the purpose of a Security Matrix in application architecture documentation?", a: "A grid showing which user profiles/permission sets have access to which objects, fields, and record types", options: ["A diagram of the org's network security controls", "A grid showing which user profiles/permission sets have access to which objects, fields, and record types", "A compliance checklist for SOC2 requirements", "A mapping of Salesforce objects to their security classification"] },
      {domain:"Data Architecture and Management", q: "How does Salesforce Duplicate Management protect data quality at the application layer?", a: "By comparing new records against existing ones using matching rules and enforcing duplicate rules to alert or block", options: ["By automatically merging duplicate records after detection", "By comparing new records against existing ones using matching rules and enforcing duplicate rules to alert or block", "By preventing data import if duplicates are found", "By requiring admin approval for records that match existing ones"] },
      {domain:"Data Architecture and Management", q: "When would you recommend a multi-org architecture over a single org?", a: "When business units have strict data isolation requirements, different compliance standards, or completely separate business processes", options: ["When there are more than 500 users in the org", "When business units have strict data isolation requirements, different compliance standards, or completely separate business processes", "When performance degrades due to record volume", "When multiple Salesforce admins need to manage the org"] },
      {domain:"Data Architecture and Management", q: "What is the key trade-off between using Roll-Up Summary fields vs. Apex-based aggregation?", a: "Roll-up summaries are declarative and real-time but limited to Master-Detail; Apex supports Lookup and complex logic but adds code maintenance", options: ["Roll-up summaries are faster; Apex is more flexible but no other differences", "Roll-up summaries are declarative and real-time but limited to Master-Detail; Apex supports Lookup and complex logic but adds code maintenance", "Apex aggregation is always better for performance", "Roll-up summaries support all relationship types but require batch recalculation"] },
      {domain:"Application Design", q: "What is the Selector Layer in Apex Enterprise Patterns used for in application architecture?", a: "Centralizing all SOQL queries for an object, ensuring consistent field selection, sharing enforcement, and query reuse", options: ["Selecting which workflow rules apply to an object", "Centralizing all SOQL queries for an object, ensuring consistent field selection, sharing enforcement, and query reuse", "Managing UI field visibility for an application", "Routing user requests to the correct Apex controller"] },
      {domain:"Security Architecture", q: "Why is field-level security important even when object-level permissions are set correctly?", a: "Object permissions control access to the object; FLS controls which specific fields within the object the user can see or edit", options: ["FLS only applies to API access, not UI", "Object permissions control access to the object; FLS controls which specific fields within the object the user can see or edit", "Object permissions and FLS are redundant — only one is needed", "FLS only affects reports and dashboards, not record pages"] }
    ],
    tips:[
      "The Application Architect designation is earned by passing Platform Data Architect AND Platform Sharing and Visibility Architect — master both domains.",
      "Practice scenario-based questions that combine data modeling and security in a single scenario.",
      "Know the full automation evaluation order — it's critical for understanding multi-automation interactions.",
      "Understand when to use each sharing mechanism: OWD, roles, sharing rules, manual sharing, Apex sharing.",
      "Know Salesforce Shield encryption — probabilistic vs. deterministic, search limitations, and field type support.",
      "Understand Big Objects: when to use them, Big Object indexes, and async SOQL for queries.",
      "Be able to design a complete security matrix from business requirements.",
      "Know Apex Enterprise Patterns: Selector, Domain, Service, and Unit of Work layers."
    ]
  },

  "B2B Solution Architect": {
    questions: 60,
    time: 120,
    pass: 63,
    experience: "2+ years architecting Salesforce solutions for B2B commerce and sales organizations",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-b2b-solution-architect---Arch-301",
    prerequisites: ["Platform Developer", "Platform Administrator"],
    overview: "The Salesforce B2B Solution Architect certification validates expertise in architecting end-to-end Salesforce solutions for B2B companies. Candidates demonstrate the ability to design multi-cloud solutions spanning Sales Cloud, Service Cloud, Experience Cloud, CPQ, and Revenue Cloud.",
        domains:[
      {name:"Discovery and Customer Success",pct:25,color:"#00A1E0"},
      {name:"Data Governance and Integration",pct:26,color:"#2ECC71"},
      {name:"Design",pct:29,color:"#F39C12"},
      {name:"Delivery",pct:12,color:"#E74C3C"},
      {name:"Operationalize the Solution",pct:8,color:"#9B59B6"},
    ],
    studyDays:[
      {tag:"b2b-landscape",focus:"Understand the B2B Salesforce product landscape: Sales Cloud, Service Cloud, Revenue Cloud, CPQ",topics:[
        {text:"B2B Solution Architect Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-B2B-Solution-Architect-Exam-Guide"},
        {text:"Sales Cloud Overview",url:"https://help.salesforce.com/s/articleView?id=sf.sales_core.htm"},
        {text:"Revenue Cloud Overview",url:"https://help.salesforce.com/s/articleView?id=sf.cpq_rev_cloud.htm"},
        {text:"CPQ Overview",url:"https://help.salesforce.com/s/articleView?id=sf.cpq_overview.htm"},
        {text:"Experience Cloud for B2B",url:"https://help.salesforce.com/s/articleView?id=sf.networks_overview.htm"},
        {text:"Trailmix: Architect B2B Solutions",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/architect-b2b-solution"}
      ]},
      {tag:"cpq-design",focus:"Design CPQ solutions: product catalog, pricing rules, quote templates, and contracts",topics:[
        {text:"CPQ Product Catalog",url:"https://help.salesforce.com/s/articleView?id=sf.cpq_product_catalog.htm"},
        {text:"CPQ Pricing Methods",url:"https://help.salesforce.com/s/articleView?id=sf.cpq_pricing_methods.htm"},
        {text:"CPQ Discount Schedules",url:"https://help.salesforce.com/s/articleView?id=sf.cpq_discount_schedules.htm"},
        {text:"CPQ Quote Templates",url:"https://help.salesforce.com/s/articleView?id=sf.cpq_quote_templates.htm"},
        {text:"CPQ Contracts and Renewals",url:"https://help.salesforce.com/s/articleView?id=sf.cpq_contracts_overview.htm"},
        {text:"CPQ Order Management",url:"https://help.salesforce.com/s/articleView?id=sf.cpq_orders_overview.htm"}
      ]},
      {tag:"sales-cloud-advanced",focus:"Advanced Sales Cloud configuration: territory management, forecasting, and pipeline management",topics:[
        {text:"Enterprise Territory Management",url:"https://help.salesforce.com/s/articleView?id=sf.territory2_overview.htm"},
        {text:"Collaborative Forecasting",url:"https://help.salesforce.com/s/articleView?id=sf.forecasts3_overview.htm"},
        {text:"Opportunity Splits",url:"https://help.salesforce.com/s/articleView?id=sf.teamselling_opportunity_splits.htm"},
        {text:"Account Hierarchy",url:"https://help.salesforce.com/s/articleView?id=sf.account_hierarchy.htm"},
        {text:"Sales Engagement (Cadences)",url:"https://help.salesforce.com/s/articleView?id=sf.sales_cadences_intro.htm"},
        {text:"Einstein Activity Capture",url:"https://help.salesforce.com/s/articleView?id=sf.einstein_sales_activity_capture.htm"}
      ]},
      {tag:"service-cloud-b2b",focus:"Design Service Cloud for B2B: case management, entitlements, and field service",topics:[
        {text:"Entitlements and SLAs",url:"https://help.salesforce.com/s/articleView?id=sf.entitlements_overview.htm"},
        {text:"Service Cloud Voice",url:"https://help.salesforce.com/s/articleView?id=sf.voice_overview.htm"},
        {text:"Omni-Channel Routing",url:"https://help.salesforce.com/s/articleView?id=sf.omnichannel_intro.htm"},
        {text:"Knowledge Management",url:"https://help.salesforce.com/s/articleView?id=sf.knowledge_whatis.htm"},
        {text:"Field Service Lightning Overview",url:"https://help.salesforce.com/s/articleView?id=sf.fs_overview.htm"},
        {text:"Service Cloud Einstein",url:"https://help.salesforce.com/s/articleView?id=sf.einstein_service_overview.htm"}
      ]},
      {tag:"experience-cloud-b2b",focus:"Build B2B portals with Experience Cloud: partner community, account portal, and CMS",topics:[
        {text:"Experience Cloud Overview",url:"https://help.salesforce.com/s/articleView?id=sf.networks_overview.htm"},
        {text:"Partner Relationship Management",url:"https://help.salesforce.com/s/articleView?id=sf.partner_overview.htm"},
        {text:"Experience Cloud Templates",url:"https://help.salesforce.com/s/articleView?id=sf.networks_lightning_templates.htm"},
        {text:"CMS Connect and Content",url:"https://help.salesforce.com/s/articleView?id=sf.cms_overview.htm"},
        {text:"Sharing and Visibility for Communities",url:"https://help.salesforce.com/s/articleView?id=sf.networks_sharing_overview.htm"},
        {text:"Partner User License Types",url:"https://help.salesforce.com/s/articleView?id=sf.users_license_types_partner.htm"}
      ]},
      {tag:"data-cloud-b2b",focus:"Unify B2B customer data with Data Cloud: ingestion, identity resolution, and segments",topics:[
        {text:"Data Cloud Overview",url:"https://help.salesforce.com/s/articleView?id=sf.c360_a_data_cloud_overview.htm"},
        {text:"Data Cloud Ingestion API",url:"https://developer.salesforce.com/docs/atlas.en-us.c360a_api.meta/c360a_api/c360a_api_overview.htm"},
        {text:"Identity Resolution",url:"https://help.salesforce.com/s/articleView?id=sf.c360_a_identity_resolution_overview.htm"},
        {text:"Segmentation in Data Cloud",url:"https://help.salesforce.com/s/articleView?id=sf.c360_a_segment_overview.htm"},
        {text:"Data Cloud and CRM Analytics",url:"https://help.salesforce.com/s/articleView?id=sf.bi_integrate_connectors_sfdc.htm"},
        {text:"Data Cloud Activation",url:"https://help.salesforce.com/s/articleView?id=sf.c360_a_activation_overview.htm"}
      ]},
      {tag:"integration-b2b",focus:"Design B2B integrations: ERP sync, order management, and middleware patterns",topics:[
        {text:"Integration Patterns and Practices",url:"https://developer.salesforce.com/docs/atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_intro_overview.htm"},
        {text:"MuleSoft Anypoint Platform",url:"https://docs.mulesoft.com/general/"},
        {text:"Platform Events for ERP Integration",url:"https://developer.salesforce.com/docs/atlas.en-us.platform_events.meta/platform_events/platform_events_intro.htm"},
        {text:"Salesforce Connect for ERP Data",url:"https://help.salesforce.com/s/articleView?id=sf.platform_connect_about.htm"},
        {text:"Change Data Capture",url:"https://developer.salesforce.com/docs/atlas.en-us.change_data_capture.meta/change_data_capture/cdc_intro.htm"},
        {text:"B2B Commerce Integration Patterns",url:"https://help.salesforce.com/s/articleView?id=sf.b2b_comm_integration.htm"}
      ]},
      {tag:"multi-cloud-design",focus:"Architect multi-cloud B2B solutions: data flow, process alignment, and platform limits",topics:[
        {text:"Multi-Cloud Reference Architecture",url:"https://architect.salesforce.com/design/decision-guides"},
        {text:"Cross-Cloud Data Model Design",url:"https://architect.salesforce.com/design/decision-guides/store-data"},
        {text:"Shared Services vs Separate Orgs",url:"https://architect.salesforce.com/design/decision-guides/deploy"},
        {text:"Governor Limits Across Clouds",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm"},
        {text:"Salesforce Platform Architecture Overview",url:"https://architect.salesforce.com"},
        {text:"Automation in Multi-Cloud Flows",url:"https://help.salesforce.com/s/articleView?id=sf.flow_builder.htm"}
      ]},
      {tag:"exam-prep",focus:"B2B Solution Architect exam review: scenarios combining CPQ, Sales, Service, and Experience Cloud",topics:[
        {text:"B2B Solution Architect Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-B2B-Solution-Architect-Exam-Guide"},
        {text:"Trailmix: B2B Solution Architect",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/architect-b2b-solution"},
        {text:"Architect Decision Guides",url:"https://architect.salesforce.com/design/decision-guides"},
        {text:"CPQ Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_cpq_specialist"},
        {text:"B2B Solution Architect Credential",url:"https://trailheadacademy.salesforce.com/certificate/exam-b2b-solution-architect---Arch-301"},
        {text:"Focus on Force Practice Exams",url:"https://focusonforce.com"}
      ]}
    ],
    quiz:[
      {domain:"B2B Digital Commerce", q: "Which Salesforce cloud provides self-service partner deal registration and lead distribution in B2B?", a: "Experience Cloud with Partner Relationship Management (PRM)", options: ["Sales Cloud Partner module", "Experience Cloud with Partner Relationship Management (PRM)", "Marketing Cloud for Partners", "Salesforce for Partners App"] },
      {domain:"B2B Customer Journey Design", q: "In a B2B quote-to-cash architecture, what happens after a CPQ quote is accepted by the customer?", a: "An Order is generated from the quote, which leads to a Contract for subscription products", options: ["The quote becomes an Invoice automatically", "An Order is generated from the quote, which leads to a Contract for subscription products", "The opportunity is closed won and the process ends", "A Service Contract is created for support entitlements"] },
      {domain:"B2B Customer Journey Design", q: "How does Account-Based Marketing (ABM) in Pardot differ from standard lead-based marketing?", a: "ABM targets specific accounts and buying committees rather than individual leads in isolation", options: ["ABM sends only one email per account to avoid spam", "ABM targets specific accounts and buying committees rather than individual leads in isolation", "ABM focuses on post-sale marketing only", "ABM uses only direct mail instead of digital channels"] },
      {domain:"B2B Data Model and Governance", q: "What is the purpose of the Account Hierarchy in a B2B data model?", a: "To model parent-child relationships between corporate accounts and their subsidiaries or divisions", options: ["To define which account owns related contacts", "To model parent-child relationships between corporate accounts and their subsidiaries or divisions", "To rank accounts by revenue tier", "To link accounts to their associated price books"] },
      {domain:"B2B Data Model and Governance", q: "Which B2B Commerce feature allows specific customers to see account-specific prices?", a: "Contracted Prices or Account-Based Price Books", options: ["Dynamic Pricing Rules", "Contracted Prices or Account-Based Price Books", "Customer-Specific Discount Schedules", "Account Price Visibility Settings"] },
      {domain:"Solution Delivery", q: "In a multi-cloud B2B architecture, what is the recommended approach for data synchronization between Salesforce and an ERP system?", a: "MuleSoft integration layer with bi-directional sync using Platform Events or scheduled batch processes", options: ["Direct Apex callouts to the ERP from Salesforce triggers", "MuleSoft integration layer with bi-directional sync using Platform Events or scheduled batch processes", "Nightly CSV file exchange via FTP", "Real-time REST API calls in both directions for every change"] },
      {domain:"Functional and Technical Requirements", q: "What is Einstein Opportunity Scoring used for in B2B sales?", a: "Predicting the probability of an opportunity closing based on historical patterns and engagement signals", options: ["Scoring the quality of opportunity descriptions entered by reps", "Predicting the probability of an opportunity closing based on historical patterns and engagement signals", "Assigning numerical scores to accounts for prioritization", "Scoring the performance of sales reps"] },
      {domain:"Functional and Technical Requirements", q: "How does Data Cloud support B2B use cases?", a: "By unifying fragmented data from multiple sources to create a single view of the account and its contacts", options: ["By replacing Salesforce Sales Cloud for B2B companies", "By unifying fragmented data from multiple sources to create a single view of the account and its contacts", "By providing real-time analytics dashboards for B2B metrics", "By automating B2B order management workflows"] },
      {domain:"Functional and Technical Requirements", q: "What is the key challenge of implementing CPQ for a B2B company with complex product configurations?", a: "Modeling product compatibility rules and pricing logic that match the complexity of the actual product catalog", options: ["Migrating existing quotes from legacy systems", "Modeling product compatibility rules and pricing logic that match the complexity of the actual product catalog", "Getting sales reps to adopt the new quoting process", "Connecting CPQ to the website product catalog"] },
      {domain:"B2B Digital Commerce", q: "In a partner portal (Experience Cloud) implementation, what sharing mechanism grants partners access to their account's opportunities?", a: "Sharing Sets based on account relationship", options: ["Role Hierarchy", "Sharing Sets based on account relationship", "Public Groups", "Manual Sharing"] },
      {domain:"B2B Data Model and Governance", q: "What B2B solution design approach is recommended for a company with complex service entitlements?", a: "Service Cloud with Entitlement Management: service contracts, entitlement processes, and milestones", options: ["Build custom Apex to manage SLA tracking", "Service Cloud with Entitlement Management: service contracts, entitlement processes, and milestones", "Use Salesforce CPQ subscription products to track service tiers", "Configure Cases with SLA fields using custom automation"] },
      {domain:"B2B Data Model and Governance", q: "When designing a B2B solution for a company expanding internationally, what data considerations are critical?", a: "Multi-currency support, GDPR compliance, data residency requirements, and language/locale settings", options: ["Adding custom text fields for each language", "Multi-currency support, GDPR compliance, data residency requirements, and language/locale settings", "Deploying separate Salesforce orgs for each country", "Using translation workbench only for UI labels"] },
      {domain:"Functional and Technical Requirements", q: "Which CRM Analytics (Tableau CRM) capability helps B2B sales teams prioritize accounts?", a: "AI-powered account health scoring and pipeline risk analysis", options: ["Standard Salesforce dashboards and reports", "AI-powered account health scoring and pipeline risk analysis", "Territory management assignment visualization only", "Email engagement tracking reports"] },
      {domain:"Solution Delivery", q: "In B2B Solution Architecture, what is the purpose of a 'connected campaign' between Salesforce and Pardot?", a: "To synchronize campaign data between both platforms so marketing and sales have a unified view of campaign performance", options: ["To automatically convert leads from Pardot to Salesforce contacts", "To synchronize campaign data between both platforms so marketing and sales have a unified view of campaign performance", "To allow sales reps to send Pardot emails from Salesforce", "To trigger Pardot nurture programs from Salesforce opportunity stages"] },
      {domain:"B2B Digital Commerce", q: "What is the recommended approach for handling product bundles across both B2B Commerce and CPQ?", a: "Design a single product catalog in Salesforce CPQ that surfaces into B2B Commerce through integration", options: ["Maintain separate product catalogs in each system", "Design a single product catalog in Salesforce CPQ that surfaces into B2B Commerce through integration", "Use B2B Commerce as the master catalog and sync to CPQ", "Configure products manually in both systems with identical names"] },
      {domain:"Functional and Technical Requirements", q: "What is 'Revenue Cloud' in Salesforce?", a: "A suite combining CPQ, Billing, and Revenue lifecycle management for end-to-end quote-to-cash", options: ["A financial analytics dashboard for revenue reporting", "A suite combining CPQ, Billing, and Revenue lifecycle management for end-to-end quote-to-cash", "A module within Sales Cloud for tracking revenue forecasts", "A Commerce Cloud feature for B2B revenue management"] },
      {domain:"B2B Digital Commerce", q: "How should an architect handle the requirement to display real-time inventory levels from an ERP in Salesforce quotes?", a: "Salesforce Connect External Objects to federate ERP inventory data in real-time", options: ["Nightly batch sync of inventory data into a custom Salesforce object", "Salesforce Connect External Objects to federate ERP inventory data in real-time", "Display inventory via an embedded Visualforce page calling the ERP API", "Cache inventory data in Platform Cache refreshed every hour"] },
      {domain:"Solution Delivery", q: "What is the Agile approach recommended for complex B2B Salesforce implementations?", a: "Scrum with iterative delivery in 2-week sprints, prioritizing business value in the backlog", options: ["Waterfall with full upfront design to avoid rework", "Scrum with iterative delivery in 2-week sprints, prioritizing business value in the backlog", "Kanban with no fixed sprint length for maximum flexibility", "SAFe for enterprise-wide transformation programs only"] },
      {domain:"Integration and APIs", q: "What technology enables Salesforce to trigger real-time notifications to external systems when a B2B opportunity is closed won?", a: "Platform Events or Change Data Capture (CDC)", options: ["Outbound Messaging via Workflow", "Platform Events or Change Data Capture (CDC)", "Scheduled Apex batch job", "SOAP API callback registration"] },
      {domain:"Functional and Technical Requirements", q: "In a B2B implementation, which stakeholder group typically defines the business requirements for the CPQ process?", a: "Sales Operations team with input from Sales, Finance, and Product Management", options: ["IT department", "Sales reps directly", "Sales Operations team with input from Sales, Finance, and Product Management", "Salesforce implementation partner only"] }
    ],
    tips:[
      "Think end-to-end: understand the complete B2B journey from lead acquisition through renewal — the exam tests holistic thinking.",
      "Know CPQ architecture thoroughly: the quote-to-cash flow, contracts, amendments, and renewals.",
      "Understand how multiple Salesforce clouds integrate: Sales + Marketing + Service + CPQ + Experience Cloud.",
      "Know partner portal architecture: Experience Cloud with PRM, sharing sets, and deal registration.",
      "Be able to identify when to use Data Cloud vs. standard Salesforce data for B2B use cases.",
      "Understand the MuleSoft integration patterns for ERP connectivity in a B2B context.",
      "Know how Pardot/MCAE integrates with Sales Cloud for B2B ABM campaigns.",
      "Practice scenario-based questions where you must select the right Salesforce cloud(s) for a business requirement."
    ]
  },

  "B2C Solution Architect": {
    questions: 60,
    time: 120,
    pass: 63,
    experience: "2+ years architecting Salesforce solutions for B2C companies including Commerce and Marketing",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-b2c-solution-architect---Arch-302",
    prerequisites: ["Platform Developer", "Platform Administrator"],
    overview: "The Salesforce B2C Solution Architect certification validates expertise in designing end-to-end solutions for B2C companies. Candidates demonstrate the ability to architect multi-cloud solutions spanning B2C Commerce, Marketing Cloud, Service Cloud, and Loyalty Management.",
        domains:[
      {name:"Discovery and Customer Success",pct:27,color:"#00A1E0"},
      {name:"Functional Capabilities and Business Value",pct:7,color:"#2ECC71"},
      {name:"Architecture Design",pct:18,color:"#F39C12"},
      {name:"Data Models and Management",pct:25,color:"#E74C3C"},
      {name:"Integration",pct:23,color:"#9B59B6"},
    ],
    studyDays:[
      {tag:"b2c-landscape",focus:"Understand the B2C Salesforce product landscape: Commerce, Marketing Cloud, Service Cloud, Loyalty",topics:[
        {text:"B2C Solution Architect Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-B2C-Solution-Architect-Exam-Guide"},
        {text:"B2C Commerce Developer Guide",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/"},
        {text:"Marketing Cloud Overview",url:"https://help.salesforce.com/s/articleView?id=sf.mc_overview.htm"},
        {text:"Loyalty Management Overview",url:"https://help.salesforce.com/s/articleView?id=sf.loyalty_overview.htm"},
        {text:"Trailmix: B2C Solution Architect",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/architect-b2c-solution"},
        {text:"Architect Website",url:"https://architect.salesforce.com"}
      ]},
      {tag:"b2c-commerce",focus:"Design B2C Commerce Cloud solutions: storefront, cartridge architecture, and APIs",topics:[
        {text:"B2C Commerce SFRA",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/sfra.html"},
        {text:"B2C Commerce APIs",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/scapi.html"},
        {text:"Cartridge Architecture",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/cartridges.html"},
        {text:"B2C Commerce Order Management",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/order-management.html"},
        {text:"B2C Commerce Search and Catalog",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/search.html"},
        {text:"Page Designer",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/page-designer.html"}
      ]},
      {tag:"marketing-cloud-b2c",focus:"Design Marketing Cloud journeys, data extensions, and cross-channel engagement",topics:[
        {text:"Journey Builder Overview",url:"https://help.salesforce.com/s/articleView?id=sf.mc_jb_overview.htm"},
        {text:"Data Extensions and Segmentation",url:"https://help.salesforce.com/s/articleView?id=sf.mc_es_create_data_extension.htm"},
        {text:"Marketing Cloud Connect",url:"https://help.salesforce.com/s/articleView?id=sf.mc_co_marketing_cloud_connect.htm"},
        {text:"Contact Builder and Data Designer",url:"https://help.salesforce.com/s/articleView?id=sf.mc_cab_contact_builder.htm"},
        {text:"Transactional Messaging API",url:"https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/transactional-messaging-api.html"},
        {text:"Marketing Cloud Personalization (Interaction Studio)",url:"https://help.salesforce.com/s/articleView?id=sf.mc_pers_overview.htm"}
      ]},
      {tag:"identity-b2c",focus:"Design B2C customer identity: self-registration, social login, progressive profiling",topics:[
        {text:"Experience Cloud for B2C",url:"https://help.salesforce.com/s/articleView?id=sf.networks_overview.htm"},
        {text:"Self-Registration for Sites",url:"https://help.salesforce.com/s/articleView?id=sf.networks_self_registration.htm"},
        {text:"Social Sign-On Providers",url:"https://help.salesforce.com/s/articleView?id=sf.sso_provider_google.htm"},
        {text:"Customer Identity and Access Management",url:"https://help.salesforce.com/s/articleView?id=sf.identity_overview.htm"},
        {text:"Customer 360 Identity",url:"https://help.salesforce.com/s/articleView?id=sf.c360_a_data_cloud_overview.htm"},
        {text:"Guest User Security Best Practices",url:"https://help.salesforce.com/s/articleView?id=sf.networks_guest_user_security.htm"}
      ]},
      {tag:"data-cloud-b2c",focus:"Unify B2C data in Data Cloud: CDP, real-time profiles, and activation to marketing",topics:[
        {text:"Data Cloud Overview",url:"https://help.salesforce.com/s/articleView?id=sf.c360_a_data_cloud_overview.htm"},
        {text:"Data Streams and Ingestion",url:"https://help.salesforce.com/s/articleView?id=sf.c360_a_data_stream_overview.htm"},
        {text:"Identity Resolution",url:"https://help.salesforce.com/s/articleView?id=sf.c360_a_identity_resolution_overview.htm"},
        {text:"Calculated Insights",url:"https://help.salesforce.com/s/articleView?id=sf.c360_a_calculated_insight_overview.htm"},
        {text:"Activation to Marketing Cloud",url:"https://help.salesforce.com/s/articleView?id=sf.c360_a_activation_overview.htm"},
        {text:"Data Cloud for Commerce",url:"https://help.salesforce.com/s/articleView?id=sf.c360_a_data_cloud_overview.htm"}
      ]},
      {tag:"service-cloud-b2c",focus:"Integrate Service Cloud for B2C: case deflection, digital engagement, and Einstein bots",topics:[
        {text:"Service Cloud for Consumer Businesses",url:"https://help.salesforce.com/s/articleView?id=sf.service_cloud_overview.htm"},
        {text:"Einstein Bots",url:"https://help.salesforce.com/s/articleView?id=sf.bots_intro.htm"},
        {text:"Digital Engagement",url:"https://help.salesforce.com/s/articleView?id=sf.messaging_intro.htm"},
        {text:"Knowledge for Self-Service",url:"https://help.salesforce.com/s/articleView?id=sf.knowledge_whatis.htm"},
        {text:"Omni-Channel Routing",url:"https://help.salesforce.com/s/articleView?id=sf.omnichannel_intro.htm"},
        {text:"Service Cloud Einstein Case Classification",url:"https://help.salesforce.com/s/articleView?id=sf.einstein_case_overview.htm"}
      ]},
      {tag:"loyalty-b2c",focus:"Design Loyalty Management: program tiers, accrual rules, redemption, and promotions",topics:[
        {text:"Loyalty Management Overview",url:"https://help.salesforce.com/s/articleView?id=sf.loyalty_overview.htm"},
        {text:"Loyalty Program Tiers",url:"https://help.salesforce.com/s/articleView?id=sf.loyalty_tiers.htm"},
        {text:"Accrual and Redemption Rules",url:"https://help.salesforce.com/s/articleView?id=sf.loyalty_accrual_overview.htm"},
        {text:"Promotions in Loyalty",url:"https://help.salesforce.com/s/articleView?id=sf.loyalty_promotions_overview.htm"},
        {text:"Loyalty and Marketing Cloud Integration",url:"https://help.salesforce.com/s/articleView?id=sf.loyalty_marketing_cloud.htm"},
        {text:"Loyalty API",url:"https://developer.salesforce.com/docs/atlas.en-us.loyalty.meta/loyalty/loyalty_api_intro.htm"}
      ]},
      {tag:"multi-cloud-b2c",focus:"Architect multi-cloud B2C flows: order placed in Commerce triggers journey in Marketing Cloud",topics:[
        {text:"B2C Multi-Cloud Reference Architecture",url:"https://architect.salesforce.com/design/decision-guides"},
        {text:"Commerce and Marketing Cloud Integration",url:"https://help.salesforce.com/s/articleView?id=sf.mc_co_marketing_cloud_connect.htm"},
        {text:"Platform Events for Order Events",url:"https://developer.salesforce.com/docs/atlas.en-us.platform_events.meta/platform_events/platform_events_intro.htm"},
        {text:"Headless Commerce API",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/scapi.html"},
        {text:"Data Cloud Activation to Channels",url:"https://help.salesforce.com/s/articleView?id=sf.c360_a_activation_overview.htm"},
        {text:"Salesforce Flow for Cross-Cloud Automation",url:"https://help.salesforce.com/s/articleView?id=sf.flow_builder.htm"}
      ]},
      {tag:"exam-prep",focus:"B2C Solution Architect exam review: multi-cloud scenarios, data unification, and Commerce design",topics:[
        {text:"B2C Solution Architect Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-B2C-Solution-Architect-Exam-Guide"},
        {text:"Trailmix: B2C Solution Architect",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/architect-b2c-solution"},
        {text:"B2C Commerce Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/commerce-cloud-b2c"},
        {text:"Data Cloud Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/get-to-know-salesforce-cdp"},
        {text:"B2C Solution Architect Credential",url:"https://trailheadacademy.salesforce.com/certificate/exam-b2c-solution-architect---Arch-302"},
        {text:"Architect Decision Guides",url:"https://architect.salesforce.com/design/decision-guides"}
      ]}
    ],
    quiz:[
      {domain:"B2C Customer Data and Identity", q: "What is the primary role of Salesforce Data Cloud in a B2C architecture?", a: "Unifying customer data from multiple sources to create a single, actionable customer profile", options: ["Replacing Marketing Cloud for B2C email campaigns", "Unifying customer data from multiple sources to create a single, actionable customer profile", "Providing a cloud-based CRM for B2C sales teams", "Managing B2C Commerce product catalog data"] },
      {domain:"B2C Commerce", q: "Which B2C Commerce architecture approach uses APIs to separate the storefront presentation from the commerce engine?", a: "Headless Commerce with SCAPI (Salesforce Commerce API)", options: ["Server-Side Rendering with ISML", "Headless Commerce with SCAPI (Salesforce Commerce API)", "SiteGenesis legacy architecture", "Progressive Web App with OCAPI"] },
      {domain:"B2C Customer Data and Identity", q: "What is the purpose of Loyalty Management's 'Member Activity' in Salesforce?", a: "To track actions that earn or redeem loyalty points for a member", options: ["To log customer service interactions", "To track actions that earn or redeem loyalty points for a member", "To measure loyalty program adoption metrics", "To schedule loyalty promotion campaigns"] },
      {domain:"Marketing Automation", q: "In a B2C multi-channel Marketing Cloud architecture, what does Journey Builder's 'decision split' do?", a: "Routes contacts to different journey paths based on data attributes or behaviors", options: ["Splits the email list for A/B testing", "Routes contacts to different journey paths based on data attributes or behaviors", "Decides which sending IP to use for deliverability", "Splits journey processing across multiple business units"] },
      {domain:"B2C Commerce", q: "What is the role of the Order Management System (OMS) in B2C Commerce architecture?", a: "Orchestrating fulfillment, managing inventory, processing returns, and coordinating with 3PL providers", options: ["Managing the B2C Commerce product catalog", "Orchestrating fulfillment, managing inventory, processing returns, and coordinating with 3PL providers", "Processing payments and fraud detection", "Managing customer accounts and order history display"] },
      {domain:"B2C Customer Data and Identity", q: "How does Data Cloud's identity resolution benefit B2C marketing?", a: "It matches and merges customer records from different sources into a unified profile for more accurate targeting", options: ["It verifies email addresses before sending campaigns", "It matches and merges customer records from different sources into a unified profile for more accurate targeting", "It resolves GDPR consent preferences across systems", "It identifies high-value customers for VIP treatment"] },
      {domain:"Marketing Automation", q: "Which Marketing Cloud feature enables personalized product recommendations in emails based on browsing history?", a: "Einstein Recommendations (Interaction Studio / Marketing Cloud Personalization)", options: ["AMPscript Personalization", "Einstein Recommendations (Interaction Studio / Marketing Cloud Personalization)", "Dynamic Content Blocks", "Behavioral Triggers"] },
      {domain:"B2C Service", q: "In B2C service design, what is the primary challenge of high-volume consumer case management?", a: "Routing and resolving a high volume of cases efficiently while maintaining quality", options: ["Ensuring cases are assigned to the right specialist", "Routing and resolving a high volume of cases efficiently while maintaining quality", "Building a comprehensive knowledge base", "Preventing duplicate cases from the same customer"] },
      {domain:"Functional and Technical Requirements", q: "What is 'clienteling' in an omni-channel B2C retail context?", a: "A service approach where store associates use customer data (purchase history, preferences) to provide personalized in-store service", options: ["A loyalty program feature for top-tier clients", "A service approach where store associates use customer data (purchase history, preferences) to provide personalized in-store service", "An analytics feature that tracks in-store customer behavior", "A B2C Commerce feature for in-store order pickup"] },
      {domain:"B2C Customer Data and Identity", q: "What GDPR 'right' allows a consumer to request that all their personal data be permanently deleted?", a: "Right to Erasure (Right to be Forgotten)", options: ["Right to Access", "Right to Rectification", "Right to Erasure (Right to be Forgotten)", "Right to Portability"] },
      {domain:"Marketing Automation", q: "Which B2C integration pattern is recommended for near-real-time customer data synchronization between Commerce and Marketing Cloud?", a: "Triggered event-based integration using Platform Events or Marketing Cloud Connect data extensions", options: ["Nightly batch file exchange via FTP", "Triggered event-based integration using Platform Events or Marketing Cloud Connect data extensions", "Direct SOQL queries from Marketing Cloud to Salesforce", "Weekly full data export and import"] },
      {domain:"B2C Customer Data and Identity", q: "In Loyalty Management, what is the difference between a Loyalty Program 'Tier' and a 'Member Activity'?", a: "Tiers define status levels based on point thresholds; Member Activities are the transactions that earn/redeem points", options: ["Tiers are for B2B; Member Activities are for B2C", "Tiers define status levels based on point thresholds; Member Activities are the transactions that earn/redeem points", "They are interchangeable — tiers are based on activity history", "Member Activities define the tier requirements; tiers track points"] },
      {domain:"B2C Commerce", q: "What is a Composable Commerce architecture?", a: "A modular approach where commerce capabilities are assembled from best-of-breed components via APIs rather than a monolithic platform", options: ["A commerce platform built using Salesforce components only", "A modular approach where commerce capabilities are assembled from best-of-breed components via APIs rather than a monolithic platform", "A headless commerce setup with only one frontend framework", "An OMS that automatically composes order fulfillment workflows"] },
      {domain:"Marketing Automation", q: "How does Marketing Cloud Connect enable post-purchase marketing for B2C?", a: "Synchronized order and account data from Salesforce Core to Marketing Cloud enables order-triggered journey automation", options: ["Sends automated order confirmation emails from Sales Cloud", "Synchronized order and account data from Salesforce Core to Marketing Cloud enables order-triggered journey automation", "Connects the Commerce Cloud order data directly to Marketing Cloud", "Provides access to order history in the Marketing Cloud Email editor"] },
      {domain:"B2C Customer Data and Identity", q: "What B2C scenario best justifies implementing Salesforce OMS vs. relying on Commerce Cloud order management?", a: "When the company has complex fulfillment across multiple warehouses, stores, and third-party logistics providers", options: ["When order volume exceeds 1,000 orders per day", "When the company has complex fulfillment across multiple warehouses, stores, and third-party logistics providers", "When the company sells internationally with multiple currencies", "When customers want self-service returns management"] },
      {domain:"Marketing Automation", q: "Which Marketing Cloud capability is specifically designed for real-time, one-to-one personalization on the website?", a: "Marketing Cloud Personalization (formerly Interaction Studio)", options: ["Einstein Send Time Optimization", "Marketing Cloud Personalization (formerly Interaction Studio)", "Journey Builder Real-Time Events", "Web Studio personalization blocks"] },
      {domain:"B2C Customer Data and Identity", q: "What is the recommended Salesforce approach for B2C subscription management?", a: "Revenue Cloud or Subscription Management combined with billing automation", options: ["Custom Apex and objects for subscription tracking", "Revenue Cloud or Subscription Management combined with billing automation", "Salesforce CPQ for consumer subscription products", "Marketing Cloud Journey Builder with renewal triggers"] },
      {domain:"Marketing Automation", q: "In a B2C multi-site Commerce Cloud deployment, what is the benefit of a shared product catalog?", a: "Products and pricing can be managed once and shared across all sites, reducing maintenance overhead", options: ["All sites use identical promotions automatically", "Products and pricing can be managed once and shared across all sites, reducing maintenance overhead", "Inventory is automatically balanced across sites", "Customer accounts are shared across all sites by default"] },
      {domain:"Functional and Technical Requirements", q: "What is the primary benefit of A/B testing in a B2C digital commerce and marketing architecture?", a: "Enabling data-driven optimization of user experiences, messaging, and promotions based on actual customer behavior", options: ["Reducing server load by splitting traffic", "Enabling data-driven optimization of user experiences, messaging, and promotions based on actual customer behavior", "Ensuring brand consistency across channels", "Improving SEO rankings through content variation"] },
      {domain:"B2C Customer Data and Identity", q: "What does CCPA (California Consumer Privacy Act) require of B2C companies?", a: "Giving California consumers the right to know, delete, and opt out of the sale of their personal information", options: ["Encrypting all customer data with AES-256", "Giving California consumers the right to know, delete, and opt out of the sale of their personal information", "Implementing MFA for all consumer accounts", "Notifying customers of data breaches within 24 hours"] }
    ],
    tips:[
      "Understand the complete B2C customer lifecycle: acquisition → purchase → service → retention → loyalty.",
      "Know Data Cloud's role in identity resolution and creating a unified customer profile.",
      "Understand headless commerce with SCAPI — this is increasingly the architecture of choice for B2C.",
      "Know the B2C integration points between Commerce, Marketing Cloud, Service Cloud, and Loyalty.",
      "Understand GDPR and CCPA requirements and how they're implemented in Salesforce B2C solutions.",
      "Know when to use OMS vs. built-in Commerce order management — complex fulfillment scenarios justify OMS.",
      "Understand Loyalty Management: tiers, member activities, promotions, and integration with Commerce.",
      "Know Marketing Cloud Personalization (Interaction Studio) for real-time B2C personalization."
    ]
  },

  "Technical Architect": {
    questions: null,
    time: null,
    pass: null,
    designation: true,
    experience: "5+ years as a Salesforce architect with mastery across all technical domains",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-review-board---Plat-Arch-401-Eval",
    prerequisites: [{name:"System Architect",required:true},{name:"Application Architect",required:true}],
    overview: "The Salesforce Certified Technical Architect (CTA) is the highest-level Salesforce certification, demonstrating mastery across all Salesforce technical domains. Unlike other exams, the CTA involves a board review where candidates present an architectural solution to a panel of Salesforce experts. It requires passing all four Architect domain exams plus the Application Architect and System Architect designations.",
    domains: [
      { name: "Data Architecture", pct: 20, color: "#00A1E0", desc: "Design scalable, secure Salesforce data architectures including modeling, storage, and migration strategies.", keyTopics: [
      {title:"Data Modeling",desc:"Apply best practices for object relationships, field types, and record volume management."},
      {title:"Large Data Volumes",desc:"Implement skinny tables, custom indexes, and query optimization for LDV orgs."},
      {title:"Data Migration",desc:"Architect ETL pipelines for initial data loads and ongoing synchronization."}
    ] },
      { name: "Security Architecture", pct: 20, color: "#2ECC71" },
      { name: "Integration Architecture", pct: 20, color: "#F39C12" },
      { name: "Development Lifecycle", pct: 20, color: "#E74C3C", desc: "Govern Salesforce development practices including source control, CI/CD, and release management.", keyTopics: [
      {title:"Org Strategy",desc:"Choose between org-based and package-based development models for enterprise teams."},
      {title:"CI/CD Pipelines",desc:"Implement SFDX, GitHub Actions, and Copado pipelines for automated deployments."},
      {title:"Code Quality",desc:"Enforce Apex PMD rules, test coverage gates, and code review processes."}
    ] },
      { name: "Solution Presentation", pct: 20, color: "#1ABC9C", desc: "Communicate complex architecture decisions to both technical and executive stakeholders with clarity and confidence.", keyTopics: [
      {title:"Architecture Diagrams",desc:"Produce C4 model, sequence, and data flow diagrams at appropriate abstraction levels."},
      {title:"Stakeholder Communication",desc:"Tailor architecture presentations to business sponsors vs. technical delivery teams."},
      {title:"Trade-off Analysis",desc:"Document options considered, pros/cons, and rationale for architecture decisions."}
    ] }
    ],
    studyDays:[
      {tag:"cta-overview",focus:"Understand the CTA board review format: scenario, whiteboarding, and panel Q&A",topics:[
        {text:"Certified Technical Architect Overview",url:"https://trailheadacademy.salesforce.com/certificate/exam-review-board---Plat-Arch-401-Eval"},
        {text:"CTA Review Board Process",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Technical-Architect-Exam-Guide"},
        {text:"CTA Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/architect-technical-architect"},
        {text:"Architect Website",url:"https://architect.salesforce.com"},
        {text:"Well-Formed Architecture Overview",url:"https://architect.salesforce.com/well-formed-architecture"},
        {text:"SalesforceBen CTA Guidance",url:"https://www.salesforceben.com/the-drip/cta-exam/"}
      ]},
      {tag:"all-domains-mastery",focus:"Achieve mastery across all System and Application Architect domains simultaneously",topics:[
        {text:"Data Architecture Decision Guide",url:"https://architect.salesforce.com/design/decision-guides/store-data"},
        {text:"Security and Sharing Decision Guide",url:"https://architect.salesforce.com/design/decision-guides/share-protect-data"},
        {text:"Identity and Access Decision Guide",url:"https://architect.salesforce.com/design/decision-guides/manage-identities"},
        {text:"Integration Decision Guide",url:"https://architect.salesforce.com/design/decision-guides/integrate-salesforce"},
        {text:"Deployment Decision Guide",url:"https://architect.salesforce.com/design/decision-guides/deploy"},
        {text:"Performance and Scalability Decision Guide",url:"https://architect.salesforce.com/design/decision-guides/performance"}
      ]},
      {tag:"scenario-whiteboard",focus:"Practice whiteboarding enterprise Salesforce solutions under time pressure",topics:[
        {text:"CTA Scenario Practice — Architect Website",url:"https://architect.salesforce.com"},
        {text:"Well-Formed Architecture: Data",url:"https://architect.salesforce.com/well-formed-architecture/data"},
        {text:"Well-Formed Architecture: Integration",url:"https://architect.salesforce.com/well-formed-architecture/integration"},
        {text:"Well-Formed Architecture: Security",url:"https://architect.salesforce.com/well-formed-architecture/security"},
        {text:"Well-Formed Architecture: Identity",url:"https://architect.salesforce.com/well-formed-architecture/identity"},
        {text:"CTA Mock Review Resources",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/architect-technical-architect"}
      ]},
      {tag:"enterprise-design",focus:"Design enterprise-scale Salesforce solutions: org strategy, multi-cloud, and governance",topics:[
        {text:"Multi-Org vs Single Org Decision",url:"https://architect.salesforce.com/design/decision-guides/deploy"},
        {text:"Enterprise Territory Management",url:"https://help.salesforce.com/s/articleView?id=sf.territory2_overview.htm"},
        {text:"Salesforce Platform Limits",url:"https://help.salesforce.com/s/articleView?id=sf.salesforce_app_limits_cheatsheet.htm"},
        {text:"Governor Limits Reference",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm"},
        {text:"Salesforce Architects: All Patterns",url:"https://architect.salesforce.com/design/patterns"},
        {text:"CTA Preparation Blog Resources",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/architect-technical-architect"}
      ]},
      {tag:"exam-prep",focus:"Final CTA prep: mock scenarios, review board expectations, and articulation skills",topics:[
        {text:"Technical Architect Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Technical-Architect-Exam-Guide"},
        {text:"CTA Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/architect-technical-architect"},
        {text:"Architect.Salesforce.com",url:"https://architect.salesforce.com"},
        {text:"All Well-Formed Architecture Pages",url:"https://architect.salesforce.com/well-formed-architecture"},
        {text:"All Decision Guides",url:"https://architect.salesforce.com/design/decision-guides"},
        {text:"CTA Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-review-board---Plat-Arch-401-Eval"}
      ]}
    ],
    quiz:[
      {domain:"Data Architecture", q: "How does the CTA assessment differ from all other Salesforce certifications?", a: "It is a board review where candidates present an architecture solution to a panel of Salesforce experts, not a written exam", options: ["It is an online exam with 200 questions", "It is a board review where candidates present an architecture solution to a panel of Salesforce experts, not a written exam", "It requires submitting a project portfolio for review", "It involves a 2-day practical implementation challenge"] },
      {domain:"Development Lifecycle", q: "What are the prerequisites for the CTA board review?", a: "All four Architect domain exams + Application Architect + System Architect designations", options: ["Any 5 Salesforce certifications", "All four Architect domain exams + Application Architect + System Architect designations", "Platform Developer II + three Architect exams", "10 years of Salesforce experience"] },
      {domain:"Development Lifecycle", q: "During the CTA board review, how much time is given to review the case study before the presentation begins?", a: "30 minutes", options: ["15 minutes", "30 minutes", "1 hour", "The case study is provided 1 day in advance"] },
      {domain:"Development Lifecycle", q: "What is the typical format of a CTA board review session?", a: "30-minute case study review, 30-minute presentation, 60-minute Q&A with three evaluators", options: ["60-minute presentation, 60-minute Q&A", "30-minute case study review, 30-minute presentation, 60-minute Q&A with three evaluators", "2-hour written response, 1-hour verbal defense", "15-minute presentation, 105-minute panel discussion"] },
      {domain:"Security Architecture", q: "In a CTA scenario, what makes a security architecture recommendation strong?", a: "Justifying each security mechanism with a specific business or compliance requirement from the case study", options: ["Including every Salesforce security feature available", "Justifying each security mechanism with a specific business or compliance requirement from the case study", "Choosing the most restrictive settings in all cases", "Demonstrating knowledge of Salesforce Shield features"] },
      {domain:"Solution Presentation", q: "What is the most important principle when making architecture decisions in a CTA case study?", a: "Every decision must be justified with reference to the specific requirements and constraints given", options: ["Always choose the most technically advanced solution", "Every decision must be justified with reference to the specific requirements and constraints given", "Follow Salesforce best practices exactly as documented", "Prioritize cost reduction above all other factors"] },
      {domain:"Data Architecture", q: "In a CTA data architecture, when is Big Objects the right choice?", a: "When archiving immutable, high-volume data that must remain on-platform and accessible via async SOQL", options: ["For all data with more than 1M records", "When archiving immutable, high-volume data that must remain on-platform and accessible via async SOQL", "Whenever standard SOQL performance degrades", "As a replacement for all custom objects in large orgs"] },
      {domain:"Integration Architecture", q: "What does a CTA evaluator look for when assessing an integration architecture recommendation?", a: "Pattern justification (why this pattern for this scenario), error handling, failover, and scalability considerations", options: ["Whether the candidate used MuleSoft for all integrations", "Pattern justification (why this pattern for this scenario), error handling, failover, and scalability considerations", "Number of integrations included in the solution", "Whether REST was chosen over SOAP"] },
      {domain:"Data Architecture", q: "How should a CTA candidate handle a scenario requirement they believe is technically infeasible in Salesforce?", a: "Acknowledge the constraint, explain the limitation clearly, and propose an alternative design that meets the business intent", options: ["Skip the requirement and focus on what is feasible", "Acknowledge the constraint, explain the limitation clearly, and propose an alternative design that meets the business intent", "Tell the evaluators the requirement is wrong", "Design a workaround that technically meets the literal requirement"] },
      {domain:"Solution Presentation", q: "What is the purpose of identifying trade-offs explicitly in a CTA presentation?", a: "To demonstrate architectural maturity by showing awareness that every design choice has costs and benefits", options: ["To excuse any weaknesses in the proposed solution", "To demonstrate architectural maturity by showing awareness that every design choice has costs and benefits", "To give evaluators alternative solutions to choose from", "To comply with the presentation format requirements"] },
      {domain:"Data Architecture", q: "In a CTA scenario requiring multi-org architecture, what is the primary justification for splitting into multiple orgs?", a: "Data isolation requirements, compliance boundaries, or completely separate business models that prevent data sharing", options: ["Performance would degrade in a single org", "Data isolation requirements, compliance boundaries, or completely separate business models that prevent data sharing", "The company has more than 100,000 users", "Multiple Salesforce clouds are required"] },
      {domain:"Data Architecture", q: "What non-functional requirements should always be addressed in a CTA architecture proposal?", a: "Performance (response time/throughput), availability (uptime/DR), scalability, security, and compliance", options: ["Only the requirements explicitly listed in the case study", "Performance (response time/throughput), availability (uptime/DR), scalability, security, and compliance", "Cost and licensing considerations only", "UI/UX and user adoption metrics"] },
      {domain:"Data Architecture", q: "How should governor limits be addressed in a CTA scenario with high data volumes?", a: "Proactively identify which limits are at risk, design async patterns to avoid synchronous limits, and demonstrate awareness of bulk processing requirements", options: ["Note that governor limits are Salesforce's responsibility to manage", "Proactively identify which limits are at risk, design async patterns to avoid synchronous limits, and demonstrate awareness of bulk processing requirements", "Propose increasing governor limits through Salesforce support", "Use Apex without sharing to bypass limit calculations"] },
      {domain:"Development Lifecycle", q: "In a CTA presentation, what is the appropriate level of detail for the development lifecycle section?", a: "Enough to show the environment strategy, CI/CD approach, and testing strategy are appropriate for the scenario scale and team size", options: ["Full CI/CD pipeline configuration details", "Enough to show the environment strategy, CI/CD approach, and testing strategy are appropriate for the scenario scale and team size", "Only mention whether to use agile or waterfall", "Skip it unless the case study specifically asks about deployment"] },
      {domain:"Data Architecture", q: "What is the significance of the Application Architect and System Architect designations as prerequisites for CTA?", a: "They prove mastery of all four domain areas (data, security, identity, DLCM) before the holistic CTA board review", options: ["They provide discount codes for the CTA board review", "They prove mastery of all four domain areas (data, security, identity, DLCM) before the holistic CTA board review", "They are optional — direct CTA attempts are allowed", "They replace the need to pass individual domain exams"] },
      {domain:"Development Lifecycle", q: "When should a CTA candidate choose declarative over programmatic solutions in their recommendation?", a: "When the business requirement can be met declaratively without sacrificing performance, maintainability, or scalability", options: ["Always — declarative is always the right answer for CTA", "When the business requirement can be met declaratively without sacrificing performance, maintainability, or scalability", "Declarative solutions should never be chosen — programs are more robust", "Only when the team has no developers available"] },
      {domain:"Development Lifecycle", q: "What architectural principle should guide decisions about Apex sharing vs. declarative sharing?", a: "Use declarative sharing (OWD + sharing rules) wherever possible; use Apex sharing only when declarative cannot express the required logic", options: ["Apex sharing provides better performance so always choose it", "Use declarative sharing (OWD + sharing rules) wherever possible; use Apex sharing only when declarative cannot express the required logic", "Declarative sharing is always sufficient — Apex sharing is deprecated", "Choose based on team preference and expertise"] },
      {domain:"Development Lifecycle", q: "What is the recommended approach for handling unexpected Q&A challenges during the CTA board review?", a: "Pause to think, acknowledge what you don't know if unsure, and reason through the answer aloud based on principles", options: ["Immediately provide an answer even if uncertain", "Pause to think, acknowledge what you don't know if unsure, and reason through the answer aloud based on principles", "Defer all unexpected questions to the written materials", "Ask the panel for hints about the expected answer"] },
      {domain:"Data Architecture", q: "Which diagram type is most effective for communicating a Salesforce data architecture to a CTA panel?", a: "Entity Relationship Diagram (ERD) showing objects, fields, and relationship types", options: ["UML class diagram", "Entity Relationship Diagram (ERD) showing objects, fields, and relationship types", "Data flow diagram only", "A written table listing all objects"] },
      {domain:"Development Lifecycle", q: "What is the most common reason CTA candidates do not pass the board review?", a: "Inability to justify design decisions with specific requirements or failure to address non-functional requirements", options: ["Insufficient Salesforce product knowledge", "Inability to justify design decisions with specific requirements or failure to address non-functional requirements", "Presentation time running over the 30-minute limit", "Not using Salesforce Shield in the security design"] }
    ],
    tips:[
      "The CTA is a board review, not an exam — practice presenting and defending decisions out loud, not just studying notes.",
      "Every decision must be justified with the case study requirements — generic best practices aren't enough.",
      "Practice diagramming under time pressure: 30 minutes to analyze and structure a complex case study is very tight.",
      "Identify all non-functional requirements in the case study even if not explicitly stated — they're always there.",
      "Address trade-offs proactively — showing you understand what you're sacrificing for a design choice demonstrates maturity.",
      "Practice mock board reviews with others — the Q&A is where candidates often struggle most.",
      "Know governor limits across all domains and be able to design around them instinctively.",
      "Completion of all 4 domain architect exams (Data, Sharing/Visibility, Identity, DLCM) plus Application Architect and System Architect is required before applying."
    ]
  },

  "B2C Commerce Architect": {
    questions: 60,
    time: 120,
    pass: 63,
    experience: "2+ years architecting B2C Commerce Cloud implementations with full project lifecycle experience",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-b2c-comm-architect---Arch-303",
    prerequisites: [{name:"B2C Commerce Cloud Developer",required:true}],
    overview: "The Salesforce B2C Commerce Architect certification validates expertise in architecting end-to-end B2C Commerce Cloud solutions. Candidates demonstrate the ability to design scalable, performant storefronts, integration strategies, content management, and omni-channel commerce architectures.",
        domains:[
      {name:"Design/Discovery",pct:29,color:"#00A1E0"},
      {name:"Monitoring/Troubleshooting",pct:14,color:"#2ECC71"},
      {name:"Integrations and Customizations",pct:22,color:"#F39C12"},
      {name:"Launch",pct:16,color:"#E74C3C"},
    ],
    studyDays:[
      {tag:"b2c-architecture",focus:"Understand B2C Commerce Cloud architecture: SFRA, pipelines, and storefront topology",topics:[
        {text:"B2C Commerce Architecture Overview",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/"},
        {text:"SFRA Architecture",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/sfra.html"},
        {text:"B2C Commerce Cartridge Architecture",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/cartridges.html"},
        {text:"Pipeline and Controller Architecture",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/controllers-routes.html"},
        {text:"B2C Commerce Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-B2C-Commerce-Architect-Exam-Guide"},
        {text:"Trailmix: B2C Commerce Architect",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/architect-b2c-commerce"}
      ]},
      {tag:"storefront-design",focus:"Design storefront customization: page templates, content slots, and component architecture",topics:[
        {text:"Page Designer",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/page-designer.html"},
        {text:"Content Slots and Promotions",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/content-slots.html"},
        {text:"Custom Templates and ISML",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/isml-overview.html"},
        {text:"B2C Commerce CSS and Responsive Design",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/frontend-development.html"},
        {text:"B2C Commerce Forms",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/forms.html"},
        {text:"PWA Kit for Headless Commerce",url:"https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/getting-started.html"}
      ]},
      {tag:"catalog-pricing",focus:"Design product catalog, inventory model, pricing architecture, and promotions engine",topics:[
        {text:"Product and Catalog Setup",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/product-catalog-setup.html"},
        {text:"Pricing Architecture",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/pricing.html"},
        {text:"Promotions and Campaigns",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/promotions.html"},
        {text:"Inventory Management",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/inventory.html"},
        {text:"Search and Sorting Rules",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/search.html"},
        {text:"Multi-Locale and Multi-Currency",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/localization.html"}
      ]},
      {tag:"checkout-order",focus:"Design checkout flows, payment integration, and order management architecture",topics:[
        {text:"Checkout Architecture",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/checkout.html"},
        {text:"Payment Integration",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/payment-integration.html"},
        {text:"Order Management",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/order-management.html"},
        {text:"Salesforce Order Management Integration",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/oms-integration.html"},
        {text:"Tax Calculation Integration",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/tax.html"},
        {text:"Fraud Detection",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/fraud-detection.html"}
      ]},
      {tag:"integration-b2c-arch",focus:"Design B2C Commerce integrations: Marketing Cloud, Service Cloud, and ERP connections",topics:[
        {text:"Commerce Cloud APIs (SCAPI)",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/scapi.html"},
        {text:"Marketing Cloud Integration",url:"https://help.salesforce.com/s/articleView?id=sf.mc_co_marketing_cloud_connect.htm"},
        {text:"Service Cloud Order Support Integration",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/service-cloud-connector.html"},
        {text:"Headless Commerce with PWA Kit",url:"https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/getting-started.html"},
        {text:"B2C Commerce Connector for SFMC",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/marketing-cloud-connector.html"},
        {text:"Change Data Capture for Commerce Events",url:"https://developer.salesforce.com/docs/atlas.en-us.change_data_capture.meta/change_data_capture/cdc_intro.htm"}
      ]},
      {tag:"performance-scalability",focus:"Design for B2C Commerce performance: CDN, caching, page rendering, and scalability",topics:[
        {text:"Performance Best Practices",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/performance.html"},
        {text:"CDN Configuration",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/cdn.html"},
        {text:"Page Caching Strategy",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/caching.html"},
        {text:"Image Optimization",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/image-optimization.html"},
        {text:"Log Center and Monitoring",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/log-center.html"},
        {text:"Peak Traffic Planning",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/scalability.html"}
      ]},
      {tag:"security-pci",focus:"Design B2C Commerce security: PCI compliance, HTTPS, tokenization, and data protection",topics:[
        {text:"B2C Commerce Security Overview",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/security.html"},
        {text:"PCI Compliance on Commerce Cloud",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/pci-compliance.html"},
        {text:"Payment Tokenization",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/payment-integration.html"},
        {text:"Shopper Authentication and JWT",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/slas.html"},
        {text:"SLAS (Shopper Login and API Access Service)",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/slas.html"},
        {text:"GDPR Data Privacy",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/gdpr.html"}
      ]},
      {tag:"exam-prep",focus:"B2C Commerce Architect exam review: storefront, integration, performance, and security scenarios",topics:[
        {text:"B2C Commerce Architect Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-B2C-Commerce-Architect-Exam-Guide"},
        {text:"Trailmix: B2C Commerce Architect",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/architect-b2c-commerce"},
        {text:"B2C Commerce Developer Guide",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/"},
        {text:"PWA Kit Documentation",url:"https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/getting-started.html"},
        {text:"B2C Commerce Architect Credential",url:"https://trailheadacademy.salesforce.com/certificate/exam-b2c-comm-architect---Arch-303"},
        {text:"Focus on Force Practice Exams",url:"https://focusonforce.com"}
      ]}
    ],
    quiz:[
      {domain:"Architecture Overview and Fundamentals", q: "What is the primary advantage of the SFRA cartridge extension model?", a: "It allows customization by overriding specific components without modifying the base SFRA code, enabling clean upgrades", options: ["It eliminates the need for custom JavaScript", "It allows customization by overriding specific components without modifying the base SFRA code, enabling clean upgrades", "It provides better performance than SiteGenesis", "It removes the need for Business Manager configuration"] },
      {domain:"Architecture Overview and Fundamentals", q: "In B2C Commerce headless architecture, what does SLAS (Shopper Login and API Access Service) provide?", a: "OAuth 2.0 authentication tokens for shoppers to access Shopper APIs securely", options: ["A single sign-on service for Business Manager users", "OAuth 2.0 authentication tokens for shoppers to access Shopper APIs securely", "A load balancing service for high-traffic events", "A security layer that scans shopper inputs for vulnerabilities"] },
      {domain:"Performance and Scalability", q: "Which B2C Commerce feature uses AI to optimize product search results and recommendations?", a: "Einstein Product Discovery", options: ["B2C Search Engine", "Einstein Product Discovery", "AI Commerce Search", "Smart Catalog Search"] },
      {domain:"Integrations", q: "What is the key benefit of using tokenization for payment processing in B2C Commerce?", a: "It removes credit card data from the Commerce environment, reducing PCI DSS compliance scope", options: ["It speeds up payment processing significantly", "It removes credit card data from the Commerce environment, reducing PCI DSS compliance scope", "It enables recurring billing for subscriptions", "It supports more payment methods than direct integration"] },
      {domain:"Architecture Overview and Fundamentals", q: "In a multi-site B2C Commerce architecture, what is a 'shared catalog'?", a: "A product catalog that is shared and referenced by multiple sites, reducing duplication", options: ["A catalog managed by multiple administrators", "A product catalog that is shared and referenced by multiple sites, reducing duplication", "A publicly visible catalog without authentication requirements", "A catalog synchronized from an external PIM system"] },
      {domain:"Performance and Scalability", q: "What approach is recommended for Black Friday/Cyber Monday peak traffic on B2C Commerce?", a: "Cache warming, extended CDN caching, performance testing beforehand, and capacity confirmation with Salesforce", options: ["Temporarily increasing server resources manually", "Cache warming, extended CDN caching, performance testing beforehand, and capacity confirmation with Salesforce", "Enabling maintenance mode and queuing requests", "Deploying additional B2C Commerce instances before the event"] },
      {domain:"Integrations", q: "Which B2C Commerce integration pattern is recommended for real-time inventory checks?", a: "Asynchronous background fetch with caching (not synchronous in the checkout critical path)", options: ["Synchronous callout in the checkout flow for accuracy", "Asynchronous background fetch with caching (not synchronous in the checkout critical path)", "Nightly inventory sync to a B2C Commerce custom object", "Einstein AI prediction for inventory availability"] },
      {domain:"Architecture Overview and Fundamentals", q: "What is Page Designer in B2C Commerce used for?", a: "A drag-and-drop visual content editor for building and managing storefront pages without code", options: ["A design tool for creating ISML templates", "A drag-and-drop visual content editor for building and managing storefront pages without code", "A wireframing tool for UX designers", "A testing environment for previewing page changes"] },
      {domain:"Architecture Overview and Fundamentals", q: "In B2C Commerce, what is a Content Slot?", a: "A configurable page area that can display different content based on scheduling, campaigns, or customer segments", options: ["A server-side caching zone in the page", "A configurable page area that can display different content based on scheduling, campaigns, or customer segments", "A placeholder in an ISML template for static content", "A JavaScript component that loads content dynamically"] },
      {domain:"Architecture Overview and Fundamentals", q: "What is the recommended DevOps approach for B2C Commerce code deployment?", a: "Source control with Git, automated code upload using SFCC CI tools or VS Code Commerce Tools, and activation after testing", options: ["Manual ZIP file upload via Business Manager for all deployments", "Source control with Git, automated code upload using SFCC CI tools or VS Code Commerce Tools, and activation after testing", "Deploying directly from developer machines to production", "Using Salesforce Change Sets for all code deployments"] },
      {domain:"Performance and Scalability", q: "Which caching layer in B2C Commerce handles the most traffic and provides the greatest performance benefit?", a: "CDN (Akamai) page caching for fully cached pages", options: ["Application server memory cache", "Browser local storage cache", "CDN (Akamai) page caching for fully cached pages", "Business Manager content cache"] },
      {domain:"Architecture Overview and Fundamentals", q: "What is BOPIS (Buy Online, Pick Up In Store) in omni-channel B2C commerce?", a: "A fulfillment model where customers purchase online and collect orders at a physical store", options: ["A payment model combining online and in-store purchase flows", "A fulfillment model where customers purchase online and collect orders at a physical store", "A loyalty program integration between e-commerce and POS", "A feature that allows store associates to place online orders on behalf of customers"] },
      {domain:"Integrations", q: "How should a B2C Commerce architect reduce the risk of third-party integration failures in the checkout flow?", a: "Use asynchronous processing for non-critical integrations and graceful degradation for semi-critical ones", options: ["Eliminate all third-party integrations from the checkout flow", "Use asynchronous processing for non-critical integrations and graceful degradation for semi-critical ones", "Replace all integrations with Salesforce native features", "Add retry logic to all synchronous integration calls"] },
      {domain:"Solution Delivery", q: "What is the Commerce Tools VS Code extension used for in B2C Commerce development?", a: "Managing sandboxes, uploading and activating cartridges, and viewing logs from within VS Code", options: ["Generating ISML templates automatically", "Managing sandboxes, uploading and activating cartridges, and viewing logs from within VS Code", "Running unit tests for SFRA controllers", "Connecting to Business Manager for site configuration"] },
      {domain:"Architecture Overview and Fundamentals", q: "In B2C Commerce, what is a 'promotion exclusivity' setting used for?", a: "Controlling whether multiple promotions can be applied simultaneously to the same order or product", options: ["Preventing promotional pricing from being applied to VIP accounts", "Controlling whether multiple promotions can be applied simultaneously to the same order or product", "Limiting promotions to specific customer groups only", "Setting the maximum discount percentage for a promotion"] },
      {domain:"Architecture Overview and Fundamentals", q: "What B2C Commerce feature supports showing different content to different customer segments (e.g., VIP vs. new customers)?", a: "Content slots with customer group-based slot configurations", options: ["A/B testing only", "Content slots with customer group-based slot configurations", "Dynamic ISML conditional rendering", "Customer account preferences"] },
      {domain:"Architecture Overview and Fundamentals", q: "Which B2C Commerce architecture approach is best for companies that want to use a React frontend?", a: "Headless Commerce with SCAPI, decoupling the React frontend from the Commerce engine", options: ["SiteGenesis with embedded React components", "SFRA with React replacing ISML templates", "Headless Commerce with SCAPI, decoupling the React frontend from the Commerce engine", "Lightning Web Components embedded in the B2C Commerce storefront"] },
      {domain:"Architecture Overview and Fundamentals", q: "What is the risk of having too many synchronous callouts in the B2C Commerce checkout flow?", a: "Each callout adds latency; multiple slow callouts can cause checkout timeouts and cart abandonment", options: ["Synchronous callouts violate PCI compliance", "Each callout adds latency; multiple slow callouts can cause checkout timeouts and cart abandonment", "B2C Commerce has a hard limit of 1 callout per checkout page", "Callouts in checkout bypass CDN caching"] },
      {domain:"Performance and Scalability", q: "In B2C Commerce, what is the 'Log Center' used for?", a: "Viewing application logs, error logs, and custom log output for debugging deployed code", options: ["Configuring Business Manager access logs", "Viewing application logs, error logs, and custom log output for debugging deployed code", "Managing CDN request logs for performance analysis", "Storing order transaction logs for compliance"] },
      {domain:"Solution Delivery", q: "What security consideration is critical when integrating a third-party tax calculation service in B2C Commerce checkout?", a: "Ensuring callouts are asynchronous or have appropriate timeouts to prevent checkout failure if the tax service is unavailable", options: ["Encrypting all tax calculation results", "Ensuring callouts are asynchronous or have appropriate timeouts to prevent checkout failure if the tax service is unavailable", "Using a dedicated B2C Commerce tax cartridge only", "Validating tax service SSL certificates on every request"] }
    ],
    tips:[
      "Master SFRA's extension model: cartridge path, server.append/prepend/replace — this is fundamental to architecture decisions.",
      "Understand headless commerce thoroughly: SCAPI, SLAS, and composable architecture patterns.",
      "Know B2C Commerce caching layers: CDN, slot cache, and component cache — and when each applies.",
      "Design for peak traffic: cache warming, CDN strategy, and performance testing are critical architect responsibilities.",
      "Understand PCI compliance and tokenization in payment architecture — never store card data in Commerce.",
      "Know Einstein Product Discovery for search architecture questions.",
      "Be able to identify which integrations belong in checkout (synchronous) vs. background (asynchronous).",
      "Understand multi-site architecture: shared catalogs, locale configurations, and multi-currency setups."
    ]
  },

  "Heroku Architect": {
    questions: 60,
    time: 120,
    pass: 63,
    experience: "2+ years architecting cloud applications on Heroku with Salesforce integration experience",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-heroku-arch---Plat-Arch-206",
    prerequisites: ["Platform Developer"],
    overview: "The Heroku Architect certification validates expertise in designing and architecting cloud applications on the Heroku platform, including Salesforce integration patterns. Candidates demonstrate mastery of Heroku architecture, deployment, scaling, security, and integration with Salesforce.",
        domains:[
      {name:"Heroku Platform",pct:10,color:"#00A1E0"},
      {name:"Security",pct:15,color:"#2ECC71"},
      {name:"Heroku Enterprise",pct:28,color:"#F39C12"},
      {name:"Architect Applications",pct:15,color:"#E74C3C"},
      {name:"Integrations",pct:15,color:"#9B59B6"},
    ],
    studyDays:[
      {tag:"heroku-platform",focus:"Understand Heroku platform architecture: dynos, buildpacks, add-ons, and routing mesh",topics:[
        {text:"Heroku Architecture Overview",url:"https://devcenter.heroku.com/articles/heroku-architecture"},
        {text:"Dynos Overview",url:"https://devcenter.heroku.com/articles/dynos"},
        {text:"Buildpacks",url:"https://devcenter.heroku.com/articles/buildpacks"},
        {text:"Heroku Add-ons Catalog",url:"https://elements.heroku.com/addons"},
        {text:"Heroku Routing Mesh",url:"https://devcenter.heroku.com/articles/http-routing"},
        {text:"Heroku Architect Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Heroku-Architect-Exam-Guide"}
      ]},
      {tag:"heroku-deployment",focus:"Design deployment pipelines on Heroku: CI/CD, review apps, and release phase",topics:[
        {text:"Heroku Pipelines",url:"https://devcenter.heroku.com/articles/pipelines"},
        {text:"Review Apps",url:"https://devcenter.heroku.com/articles/github-integration-review-apps"},
        {text:"Heroku CI",url:"https://devcenter.heroku.com/articles/heroku-ci"},
        {text:"Release Phase",url:"https://devcenter.heroku.com/articles/release-phase"},
        {text:"Heroku Deploy via Git",url:"https://devcenter.heroku.com/articles/git"},
        {text:"Container Registry",url:"https://devcenter.heroku.com/articles/container-registry-and-runtime"}
      ]},
      {tag:"heroku-data",focus:"Design data architecture on Heroku: Postgres, Redis, Kafka, and external data stores",topics:[
        {text:"Heroku Postgres",url:"https://devcenter.heroku.com/articles/heroku-postgresql"},
        {text:"Heroku Data for Redis",url:"https://devcenter.heroku.com/articles/heroku-redis"},
        {text:"Apache Kafka on Heroku",url:"https://devcenter.heroku.com/articles/kafka-on-heroku"},
        {text:"Heroku Postgres Follower Databases",url:"https://devcenter.heroku.com/articles/heroku-postgres-follower-databases"},
        {text:"Database Connection Pooling",url:"https://devcenter.heroku.com/articles/concurrency-and-database-connections"},
        {text:"Postgres High Availability and HA Add-on",url:"https://devcenter.heroku.com/articles/heroku-postgres-high-availability"}
      ]},
      {tag:"heroku-connect",focus:"Design Heroku Connect for bidirectional Salesforce and Postgres sync",topics:[
        {text:"Heroku Connect Overview",url:"https://devcenter.heroku.com/articles/heroku-connect"},
        {text:"Heroku Connect Architecture",url:"https://devcenter.heroku.com/articles/heroku-connect-database-tables"},
        {text:"Heroku Connect Mapping",url:"https://devcenter.heroku.com/articles/heroku-connect-mapping"},
        {text:"Heroku Connect Sync Modes",url:"https://devcenter.heroku.com/articles/heroku-connect-sync-modes"},
        {text:"Handling Conflicts in Heroku Connect",url:"https://devcenter.heroku.com/articles/heroku-connect-conflict-resolution"},
        {text:"Heroku Connect Polling Interval",url:"https://devcenter.heroku.com/articles/heroku-connect-polling"}
      ]},
      {tag:"heroku-security",focus:"Design security on Heroku: private spaces, Shield, mTLS, and compliance",topics:[
        {text:"Heroku Private Spaces",url:"https://devcenter.heroku.com/articles/private-spaces"},
        {text:"Heroku Shield",url:"https://devcenter.heroku.com/articles/heroku-shield"},
        {text:"Network Isolation in Private Spaces",url:"https://devcenter.heroku.com/articles/private-space-vpn-connection"},
        {text:"SSL and TLS on Heroku",url:"https://devcenter.heroku.com/articles/ssl"},
        {text:"Heroku Compliance (HIPAA, PCI)",url:"https://devcenter.heroku.com/articles/heroku-compliance"},
        {text:"Config Vars for Secrets Management",url:"https://devcenter.heroku.com/articles/config-vars"}
      ]},
      {tag:"heroku-scaling",focus:"Design Heroku scaling: autoscaling, horizontal and vertical scaling, and concurrency",topics:[
        {text:"Scaling Your Dyno Formation",url:"https://devcenter.heroku.com/articles/scaling"},
        {text:"Heroku Autoscaling",url:"https://devcenter.heroku.com/articles/scaling#automatic-scaling"},
        {text:"Performance Dynos",url:"https://devcenter.heroku.com/articles/dyno-types"},
        {text:"Heroku Metrics and Alerting",url:"https://devcenter.heroku.com/articles/metrics"},
        {text:"Worker Dyno Patterns",url:"https://devcenter.heroku.com/articles/background-jobs-queueing"},
        {text:"Heroku Scheduler",url:"https://devcenter.heroku.com/articles/scheduler"}
      ]},
      {tag:"sf-heroku-integration",focus:"Design integration between Salesforce and Heroku: webhooks, Eventing, and canvas apps",topics:[
        {text:"Salesforce and Heroku Integration Patterns",url:"https://devcenter.heroku.com/articles/salesforce-heroku-integration"},
        {text:"Platform Events from Heroku",url:"https://developer.salesforce.com/docs/atlas.en-us.platform_events.meta/platform_events/platform_events_intro.htm"},
        {text:"Canvas Apps on Salesforce",url:"https://help.salesforce.com/s/articleView?id=sf.connected_app_canvas_intro.htm"},
        {text:"Salesforce REST API from Heroku",url:"https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_what_is_rest_api.htm"},
        {text:"Heroku External Objects",url:"https://devcenter.heroku.com/articles/heroku-external-objects"},
        {text:"OAuth for Salesforce-Heroku Apps",url:"https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_flows.htm"}
      ]},
      {tag:"exam-prep",focus:"Heroku Architect exam review: deployment, data, scaling, security, and Salesforce integration",topics:[
        {text:"Heroku Architect Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Heroku-Architect-Exam-Guide"},
        {text:"Trailmix: Architect Heroku",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/architect-heroku"},
        {text:"Heroku Dev Center",url:"https://devcenter.heroku.com"},
        {text:"Heroku Connect Documentation",url:"https://devcenter.heroku.com/articles/heroku-connect"},
        {text:"Heroku Architect Credential",url:"https://trailheadacademy.salesforce.com/certificate/exam-heroku-arch---Plat-Arch-206"},
        {text:"Focus on Force Practice Exams",url:"https://focusonforce.com"}
      ]}
    ],
    quiz:[
      {domain:"Heroku Architecture Overview", q: "What is a Heroku Dyno?", a: "A lightweight, isolated container running a single process in a Heroku application", options: ["A Heroku database instance", "A lightweight, isolated container running a single process in a Heroku application", "A deployment pipeline stage in Heroku", "A Heroku add-on for monitoring"] },
      {domain:"Heroku Architecture Overview", q: "Which Heroku dyno type handles scheduled or queued background tasks?", a: "Worker Dyno", options: ["One-off Dyno", "Background Dyno", "Worker Dyno", "Task Dyno"] },
      {domain:"Data Architecture", q: "What is Heroku Connect used for?", a: "Bidirectional data synchronization between Heroku Postgres and Salesforce", options: ["Connecting Heroku apps to external REST APIs", "Bidirectional data synchronization between Heroku Postgres and Salesforce", "Linking GitHub repositories to Heroku for CI/CD", "Connecting Heroku to AWS services"] },
      {domain:"Security", q: "What is a Heroku Private Space?", a: "A dedicated, network-isolated environment for Heroku apps with compliance certifications", options: ["A private GitHub repository for Heroku code", "A dedicated, network-isolated environment for Heroku apps with compliance certifications", "A private add-on marketplace for enterprise customers", "A password-protected staging environment"] },
      {domain:"Application Architecture", q: "What is a Buildpack in Heroku?", a: "A script that transforms source code into a deployable slug by detecting the runtime and installing dependencies", options: ["A compressed package of a Heroku application", "A script that transforms source code into a deployable slug by detecting the runtime and installing dependencies", "A Heroku add-on package for common functionality", "A Docker configuration for containerized deployment"] },
      {domain:"Heroku Architecture Overview", q: "How does Heroku Postgres connection pooling (PgBouncer) benefit high-concurrency applications?", a: "It maintains a pool of database connections and distributes application requests, reducing the overhead of creating new connections", options: ["It encrypts database connections for security", "It maintains a pool of database connections and distributes application requests, reducing the overhead of creating new connections", "It caches frequently executed queries for performance", "It automatically scales the database when connections are high"] },
      {domain:"Application Architecture", q: "What is the 12-factor app methodology principle that applies to Heroku configuration management?", a: "Store config in the environment (environment variables), not in code", options: ["Use one codebase tracked in version control", "Store config in the environment (environment variables), not in code", "Export services as bindings", "Run admin processes as one-off tasks"] },
      {domain:"Heroku Architecture Overview", q: "Which Heroku feature allows testing pull requests in isolated environments before merging?", a: "Review Apps", options: ["Feature Branch Apps", "Review Apps", "PR Preview Environments", "Staging Pipelines"] },
      {domain:"Data Architecture", q: "In Heroku Connect, what is the 'polling frequency' setting?", a: "How often Heroku Connect checks Salesforce for data changes to sync to Heroku Postgres", options: ["How often the Heroku app polls the database for updates", "How often Heroku Connect checks Salesforce for data changes to sync to Heroku Postgres", "The rate at which Salesforce data is written to Heroku", "The frequency of Heroku Connect health check pings"] },
      {domain:"Heroku Architecture Overview", q: "What is the key advantage of Heroku for developers compared to AWS or Azure?", a: "Abstracted infrastructure management so developers focus on code, not server configuration", options: ["Lower cost for all workload types", "Abstracted infrastructure management so developers focus on code, not server configuration", "Better performance than other cloud providers", "Native integration with all Salesforce products"] },
      {domain:"Application Architecture", q: "How should secrets and API keys be stored in a Heroku application?", a: "As Config Vars (environment variables) accessible to the app at runtime", options: ["In a .env file committed to the repository", "As Config Vars (environment variables) accessible to the app at runtime", "In the Heroku Postgres database config table", "Encrypted in the application code"] },
      {domain:"Data Architecture", q: "What Heroku feature is designed for data-intensive workloads requiring real-time event streaming?", a: "Heroku Kafka (Apache Kafka add-on)", options: ["Heroku Redis", "Heroku Kafka (Apache Kafka add-on)", "Heroku Data Streams", "Heroku Event Hub"] },
      {domain:"Heroku Architecture Overview", q: "In a Salesforce + Heroku architecture, when should you use Heroku as middleware?", a: "When complex, compute-intensive transformations or third-party integrations are needed that exceed Salesforce governor limits", options: ["Whenever any integration with an external system is required", "When complex, compute-intensive transformations or third-party integrations are needed that exceed Salesforce governor limits", "Only when Salesforce Connect is not available", "For all data storage that exceeds Salesforce storage limits"] },
      {domain:"Heroku Architecture Overview", q: "What is a Heroku Slug?", a: "A compressed, deployable package of your application code and its dependencies, generated by buildpacks", options: ["A unique identifier for a Heroku application", "A compressed, deployable package of your application code and its dependencies, generated by buildpacks", "A database snapshot for disaster recovery", "A pre-built add-on configuration template"] },
      {domain:"Heroku Architecture Overview", q: "Which Heroku plan is required for HIPAA-compliant data processing?", a: "Heroku Private Spaces with Shield Data Protection", options: ["Heroku Enterprise", "Heroku Private Spaces with Shield Data Protection", "Any paid Heroku plan with SSL enabled", "Heroku Standard plan with data encryption add-on"] },
      {domain:"Data Architecture", q: "What is the purpose of a Heroku follower database?", a: "A read-only database replica that can serve read queries, offloading the primary database", options: ["A backup database that activates on primary failure", "A read-only database replica that can serve read queries, offloading the primary database", "A separate database for staging environment testing", "A replica database in a different geographic region"] },
      {domain:"DevOps and Monitoring", q: "In Heroku Pipelines, what is 'promotion'?", a: "Moving an application's slug from one pipeline stage (e.g., staging) to the next (e.g., production) without rebuilding", options: ["Upgrading a Heroku dyno to a higher performance tier", "Moving an application's slug from one pipeline stage (e.g., staging) to the next (e.g., production) without rebuilding", "Publishing a Heroku app to the Salesforce AppExchange", "Increasing the number of dynos in a formation"] },
      {domain:"Heroku Architecture Overview", q: "What Heroku feature can be used for tasks that need to run on a schedule (e.g., daily reports)?", a: "Heroku Scheduler add-on", options: ["Heroku Cron", "Heroku Scheduler add-on", "Heroku Clock Processes", "One-off Dynos with CI triggers"] },
      {domain:"Data Architecture", q: "How does Salesforce External Objects (Salesforce Connect) integrate with Heroku Postgres?", a: "Via an OData adapter that exposes Heroku Postgres tables as External Objects queryable in Salesforce", options: ["Through a REST API endpoint deployed on Heroku", "Via an OData adapter that exposes Heroku Postgres tables as External Objects queryable in Salesforce", "Via Heroku Connect bidirectional sync to Salesforce standard objects", "Through a Salesforce-managed connector in the AppExchange"] },
      {domain:"Heroku Architecture Overview", q: "What is the key difference between horizontal and vertical scaling on Heroku?", a: "Horizontal scaling adds more dynos (instances); vertical scaling uses larger/faster dynos", options: ["Horizontal scaling increases database size; vertical scaling increases app dynos", "Horizontal scaling adds more dynos (instances); vertical scaling uses larger/faster dynos", "Horizontal scaling is manual; vertical scaling is automatic", "They are the same concept on Heroku"] }
    ],
    tips:[
      "Know all dyno types and sizes — web vs. worker dynos and when each is appropriate.",
      "Understand Heroku Connect thoroughly: bidirectional sync, mapping configuration, and conflict resolution.",
      "Know when Private Spaces are required: compliance (HIPAA, PCI), network isolation, and dedicated infrastructure.",
      "Apply 12-factor app principles to Heroku architecture questions — especially config in environment variables.",
      "Understand Heroku Postgres connection limits and when PgBouncer connection pooling is needed.",
      "Know the Heroku Pipeline and Review Apps for CI/CD pipeline design questions.",
      "Understand when to use Heroku as Salesforce middleware vs. direct Salesforce integration.",
      "Know Heroku scaling strategies: horizontal (more dynos) vs. vertical (larger dynos) and autoscaling."
    ]
  },

  "Tableau Architect": {
    questions: 60,
    time: 120,
    pass: 65,
    experience: "2+ years architecting enterprise Tableau deployments with governance and scalability experience",
    trailheadUrl: "https://trailhead.salesforce.com/credentials/tableauarchitect",
    prerequisites: [{name:"Tableau Desktop Specialist",required:true}],
    overview: "The Tableau Architect certification validates expertise in designing and architecting enterprise Tableau deployments. Candidates demonstrate the ability to design scalable analytics environments, data governance frameworks, performance-optimized workbooks, and integration with Salesforce Einstein Analytics.",
        domains:[
      {name:"Design a Tableau Infrastructure",pct:22,color:"#00A1E0"},
      {name:"Deploy Tableau Server",pct:37,color:"#2ECC71"},
      {name:"Monitor and Maintain a Tableau Deployment",pct:41,color:"#F39C12"},
    ],
    studyDays:[
      {tag:"tableau-architecture",focus:"Understand enterprise Tableau deployment architecture: Server, Cloud, and distributed topology",topics:[
        {text:"Tableau Server Architecture Overview",url:"https://help.tableau.com/current/server/en-us/server_process_concepts.htm"},
        {text:"Tableau Cloud Overview",url:"https://help.tableau.com/current/online/en-us/to_about_tableau_online.htm"},
        {text:"Multi-Node Tableau Server",url:"https://help.tableau.com/current/server/en-us/distrib_install.htm"},
        {text:"Tableau Architect Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Tableau-Architect-Exam-Guide"},
        {text:"Trailmix: Tableau Architect",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/tableau-architect"},
        {text:"Tableau Dev Center",url:"https://developer.salesforce.com/tableau"}
      ]},
      {tag:"data-sources-governance",focus:"Design enterprise data source strategy: live vs extract, certified data sources, and governance",topics:[
        {text:"Data Source Best Practices",url:"https://help.tableau.com/current/server/en-us/datasources.htm"},
        {text:"Tableau Extracts and Hyper",url:"https://help.tableau.com/current/pro/desktop/en-us/extracting_data.htm"},
        {text:"Certified Data Sources",url:"https://help.tableau.com/current/server/en-us/datasource_certified.htm"},
        {text:"Virtual Connections",url:"https://help.tableau.com/current/server/en-us/virtual_connections.htm"},
        {text:"Data Management Add-On",url:"https://help.tableau.com/current/server/en-us/dm_overview.htm"},
        {text:"Tableau Catalog",url:"https://help.tableau.com/current/server/en-us/dm_catalog_overview.htm"}
      ]},
      {tag:"performance-optimization",focus:"Optimize Tableau workbook and server performance: caching, indexes, and query optimization",topics:[
        {text:"Performance Recording",url:"https://help.tableau.com/current/pro/desktop/en-us/perf_record_create_desktop.htm"},
        {text:"Tableau Workbook Performance Checklist",url:"https://help.tableau.com/current/pro/desktop/en-us/performance_tips.htm"},
        {text:"Extract Optimization",url:"https://help.tableau.com/current/pro/desktop/en-us/extracting_data.htm"},
        {text:"VizQL Query Reduction",url:"https://help.tableau.com/current/pro/desktop/en-us/performance_tips.htm"},
        {text:"Resource Monitoring Tool (RMT)",url:"https://help.tableau.com/current/server/en-us/rmt-intro.htm"},
        {text:"Caching Strategies",url:"https://help.tableau.com/current/server/en-us/perf_overview.htm"}
      ]},
      {tag:"security-rls",focus:"Design enterprise Tableau security: user filters, entitlement tables, and row-level security",topics:[
        {text:"Row-Level Security Overview",url:"https://help.tableau.com/current/pro/desktop/en-us/publish_userfilters.htm"},
        {text:"User Filter Techniques",url:"https://help.tableau.com/current/pro/desktop/en-us/publish_userfilters_create.htm"},
        {text:"Entitlement Tables for RLS",url:"https://help.tableau.com/current/pro/desktop/en-us/publish_userfilters_entitlements.htm"},
        {text:"Permissions Model",url:"https://help.tableau.com/current/server/en-us/permission_section.htm"},
        {text:"Site Roles and Capabilities",url:"https://help.tableau.com/current/server/en-us/users_site_roles.htm"},
        {text:"Dynamic Column-Level Security",url:"https://help.tableau.com/current/pro/desktop/en-us/publish_userfilters.htm"}
      ]},
      {tag:"tableau-api",focus:"Design Tableau programmatic integrations: REST API, Metadata API, and Hyper API",topics:[
        {text:"Tableau REST API Reference",url:"https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api.htm"},
        {text:"Metadata API (GraphQL)",url:"https://help.tableau.com/current/api/metadata_api/en-us/index.html"},
        {text:"Hyper API",url:"https://help.tableau.com/current/api/hyper_api/en-us/index.html"},
        {text:"Tableau Server Client (Python)",url:"https://tableau.github.io/server-client-python/"},
        {text:"Embedded Analytics with Tableau",url:"https://help.tableau.com/current/api/embedding_api/en-us/index.html"},
        {text:"Tableau Webhooks",url:"https://help.tableau.com/current/developer/webhooks/en-us/index.html"}
      ]},
      {tag:"salesforce-integration",focus:"Integrate Tableau with Salesforce: Salesforce connector, CRM Analytics, and Einstein Analytics",topics:[
        {text:"Salesforce Connector for Tableau",url:"https://help.tableau.com/current/pro/desktop/en-us/examples_salesforce.htm"},
        {text:"Tableau in Salesforce (Tableau Viz LWC)",url:"https://help.tableau.com/current/server/en-us/tableau_in_salesforce.htm"},
        {text:"CRM Analytics vs Tableau",url:"https://help.salesforce.com/s/articleView?id=sf.bi_get_started.htm"},
        {text:"Salesforce Tableau CRM",url:"https://help.salesforce.com/s/articleView?id=sf.bi_get_started.htm"},
        {text:"Tableau Data Stories in Salesforce",url:"https://help.tableau.com/current/server/en-us/tableau_in_salesforce.htm"},
        {text:"Tableau Bridge for On-Premises Data",url:"https://help.tableau.com/current/online/en-us/qs_connect_live_tableau_bridge.htm"}
      ]},
      {tag:"governance-ops",focus:"Design Tableau governance: content lifecycle, naming standards, certification, and usage analytics",topics:[
        {text:"Tableau Catalog and Data Governance",url:"https://help.tableau.com/current/server/en-us/dm_catalog_overview.htm"},
        {text:"Content Permissions and Projects",url:"https://help.tableau.com/current/server/en-us/projects.htm"},
        {text:"Usage Statistics and Admin Views",url:"https://help.tableau.com/current/server/en-us/adminview.htm"},
        {text:"Workbook and Data Source Certifications",url:"https://help.tableau.com/current/server/en-us/datasource_certified.htm"},
        {text:"Tableau Blueprint",url:"https://help.tableau.com/current/blueprint/en-us/bp_overview.htm"},
        {text:"Tableau Pulse and Ask Data",url:"https://help.tableau.com/current/server/en-us/pulse-overview.htm"}
      ]},
      {tag:"exam-prep",focus:"Tableau Architect exam review: performance, governance, security, and API integration scenarios",topics:[
        {text:"Tableau Architect Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Tableau-Architect-Exam-Guide"},
        {text:"Trailmix: Tableau Architect",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/tableau-architect"},
        {text:"Tableau Help Center",url:"https://help.tableau.com"},
        {text:"Tableau Dev Center",url:"https://developer.salesforce.com/tableau"},
        {text:"Tableau Architect Credential",url:"https://trailhead.salesforce.com/credentials/tableauarchitect"},
        {text:"Tableau Blueprint for Governance",url:"https://help.tableau.com/current/blueprint/en-us/bp_overview.htm"}
      ]}
    ],
    quiz:[
      {domain:"Data Architecture", q: "In Tableau, what is the advantage of a Hyper extract over a live connection?", a: "Extracts provide fast in-memory query performance independent of the source database's availability and load", options: ["Extracts always have more current data", "Extracts provide fast in-memory query performance independent of the source database's availability and load", "Extracts support more data types than live connections", "Extracts bypass all security restrictions"] },
      {domain:"Security and Governance", q: "What is Row-Level Security (RLS) in Tableau?", a: "Filtering data so each user sees only the rows they are authorized to view, based on their identity", options: ["Encrypting specific rows of sensitive data", "Filtering data so each user sees only the rows they are authorized to view, based on their identity", "Restricting which users can edit specific rows in a dashboard", "A database-level feature that Tableau inherits automatically"] },
      {domain:"Data Architecture", q: "Which Tableau component connects on-premise data sources to Tableau Cloud?", a: "Tableau Bridge", options: ["Tableau Gateway", "Tableau Bridge", "Tableau Connector", "Tableau Data Server"] },
      {domain:"Data Architecture", q: "What is a Virtual Connection in Tableau?", a: "A centralized, shareable layer between data sources and content that enables centralized access control and RLS", options: ["A cloud-based connection that does not require credentials", "A centralized, shareable layer between data sources and content that enables centralized access control and RLS", "A connection that virtualizes multiple data sources into one", "A Tableau Server feature that caches connection strings"] },
      {domain:"Tableau Server Architecture", q: "Which Tableau Server component processes queries and renders visualizations?", a: "VizQL Server", options: ["Application Server", "Cache Server", "VizQL Server", "Data Server"] },
      {domain:"Data Architecture", q: "What is the Tableau Backgrounder process used for?", a: "Running scheduled extract refreshes, subscriptions, and other background tasks", options: ["Processing user authentication requests", "Running scheduled extract refreshes, subscriptions, and other background tasks", "Managing the server cache", "Handling administrative API calls"] },
      {domain:"Security and Governance", q: "In Tableau security, what is the recommended approach for implementing RLS for 100,000 users?", a: "Entitlement table approach: a user-to-data mapping table joined to the data source with USERNAME() function", options: ["User filters on each workbook individually", "Entitlement table approach: a user-to-data mapping table joined to the data source with USERNAME() function", "Separate sites per user group", "Database-level VPD for all data sources"] },
      {domain:"Data Architecture", q: "What is Tableau Catalog used for?", a: "Data governance: tracking data lineage, impact analysis, certifying content, and adding data quality warnings", options: ["Managing the Tableau product catalog and license inventory", "Data governance: tracking data lineage, impact analysis, certifying content, and adding data quality warnings", "Cataloging available workbooks for self-service discovery", "Managing Tableau Server backup catalog files"] },
      {domain:"Security and Governance", q: "Which LOD calculation type computes a value at a dimension level coarser than the view?", a: "FIXED LOD", options: ["INCLUDE LOD", "EXCLUDE LOD", "FIXED LOD", "AGGREGATE LOD"] },
      {domain:"Data Architecture", q: "What is a Published Data Source in Tableau?", a: "A centrally managed data source stored on Tableau Server that multiple workbooks can connect to", options: ["A data source extracted to a Hyper file and published", "A centrally managed data source stored on Tableau Server that multiple workbooks can connect to", "A data source made publicly accessible without authentication", "A data source certified by the data stewardship team"] },
      {domain:"Tableau Server Architecture", q: "In a Tableau Server distributed architecture, what role does a 'worker node' play?", a: "Additional server instances that share load for VizQL, Backgrounder, and Data Server processes", options: ["A dedicated machine for test/staging environments", "Additional server instances that share load for VizQL, Backgrounder, and Data Server processes", "A replica of the primary server for failover only", "A gateway node handling incoming user traffic"] },
      {domain:"Security and Governance", q: "What Tableau feature enables users to authenticate to Tableau using their corporate SSO (e.g., Azure AD)?", a: "SAML Authentication or OIDC", options: ["Tableau Native SSO", "SAML Authentication or OIDC", "Connected App Authentication", "OAuth 2.0 Implicit Flow"] },
      {domain:"Analytics Design", q: "What is Einstein Discovery in the context of Tableau?", a: "An AI/ML feature that adds predictive analytics and recommendations to Tableau dashboards", options: ["A Salesforce product for standalone data discovery", "An AI/ML feature that adds predictive analytics and recommendations to Tableau dashboards", "A built-in Tableau feature for anomaly detection only", "A connector between Tableau and Salesforce Einstein Analytics"] },
      {domain:"Security and Governance", q: "What governance practice ensures Tableau dashboards reference trusted, high-quality data?", a: "Data source certification: marking specific data sources and workbooks as certified after review", options: ["Locking all data source permissions to admin-only", "Data source certification: marking specific data sources and workbooks as certified after review", "Using only live connections to prevent stale extracts", "Restricting all Tableau content to Creator license users"] },
      {domain:"Security and Governance", q: "How does the Tableau Connected App feature benefit embedded analytics security?", a: "It enables JWT-based SSO for embedding Tableau views in external applications without user credentials", options: ["It connects Tableau to Salesforce without an additional connector", "It enables JWT-based SSO for embedding Tableau views in external applications without user credentials", "It provides an app-to-app data pipeline between Tableau and other applications", "It allows Tableau to act as an IdP for connected third-party tools"] },
      {domain:"Tableau Server Architecture", q: "When should a Tableau architect recommend Tableau Cloud over Tableau Server?", a: "When the organization prefers SaaS-managed infrastructure, reduced administrative burden, and has no data sovereignty requirements preventing cloud hosting", options: ["Tableau Cloud is always preferred for security reasons", "When the organization prefers SaaS-managed infrastructure, reduced administrative burden, and has no data sovereignty requirements preventing cloud hosting", "When extract refresh performance needs exceed on-premise capacity", "Tableau Server is always preferred for enterprise deployments"] },
      {domain:"Tableau Server Architecture", q: "What is the purpose of the Tableau Server Repository?", a: "Storing all Tableau Server metadata: user accounts, permissions, workbook definitions, and extract schedules", options: ["Backing up published workbooks and data sources", "Storing all Tableau Server metadata: user accounts, permissions, workbook definitions, and extract schedules", "Caching frequently accessed query results", "Storing the raw data for all published data sources"] },
      {domain:"Security and Governance", q: "What is a self-service analytics governance challenge that architects must address?", a: "Balancing user freedom to create content with maintaining data quality, security, and trusted analytics", options: ["Preventing users from creating any unapproved dashboards", "Balancing user freedom to create content with maintaining data quality, security, and trusted analytics", "Ensuring all dashboards are built by certified Tableau developers", "Limiting Tableau access to senior management only"] },
      {domain:"Data Architecture", q: "What is the performance impact of using many complex calculated fields in a Tableau workbook?", a: "Complex calculations increase query processing time; row-level calculations are worst, especially on large datasets", options: ["Calculated fields always perform better than database columns", "Complex calculations increase query processing time; row-level calculations are worst, especially on large datasets", "Calculated fields are computed at publish time and have no runtime impact", "The number of calculated fields has no significant performance impact"] },
      {domain:"Data Architecture", q: "In a Tableau architecture for an enterprise with strict data residency requirements, what approach is recommended?", a: "Tableau Server deployed on-premise or in a compliant cloud region with clear data residency boundaries", options: ["Tableau Cloud with data encryption for all sensitive data", "Tableau Server deployed on-premise or in a compliant cloud region with clear data residency boundaries", "Using only embedded analytics with no central Tableau Server", "Restricting all dashboards to CSV export mode only"] }
    ],
    tips:[
      "Know Tableau Server architecture components: VizQL Server, Backgrounder, Data Server, Cache Server, Repository.",
      "Master RLS implementation options: user filters, entitlement tables, VPD — and know when to use each.",
      "Understand extract vs. live connection trade-offs: performance, freshness, and source availability.",
      "Know Virtual Connections and how they centralize data governance in a large Tableau deployment.",
      "Understand Tableau Catalog features: data lineage, impact analysis, and certification.",
      "Know authentication options: local, AD, SAML, OIDC — and Connected Apps for embedded analytics.",
      "Understand Tableau Cloud vs. Server decision factors: data residency, administrative burden, and performance.",
      "Know LOD calculations and their performance implications: FIXED vs. INCLUDE vs. EXCLUDE."
    ]
  },

  "MuleSoft Platform Architect": {
    questions: 60,
    time: 120,
    pass: 70,
    experience: "2+ years architecting integration solutions on MuleSoft Anypoint Platform at enterprise scale",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-mule-plat-arch---Mule-Arch-201",
    prerequisites: [{name:"MuleSoft Developer",required:true}],
    overview: "The MuleSoft Certified Platform Architect - Level 1 certification validates the ability to design enterprise integration architectures using MuleSoft Anypoint Platform. Candidates demonstrate mastery of API-led connectivity, system design, governance, and enterprise deployment strategies.",
        domains:[
      {name:"Explaining application network basics",pct:7,color:"#00A1E0"},
      {name:"Establishing organizational and platform foundations",pct:10,color:"#2ECC71"},
      {name:"Designing and sharing APIs",pct:10,color:"#F39C12"},
      {name:"Designing APIs using System, Process, and Experience Layers",pct:12,color:"#E74C3C"},
      {name:"Governing web APIs on Anypoint Platform",pct:17,color:"#9B59B6"},
      {name:"Architecting and deploying API implementations",pct:11,color:"#1ABC9C"},
      {name:"Deploying API implementations to CloudHub",pct:11,color:"#E67E22"},
      {name:"Meeting API quality goals",pct:10,color:"#3498DB"},
      {name:"Monitoring and analyzing application networks",pct:12,color:"#E91E63"},
    ],
    studyDays:[
      {tag:"api-led",focus:"Master API-led connectivity: System, Process, and Experience API layers",topics:[
        {text:"API-Led Connectivity Overview",url:"https://www.mulesoft.com/resources/api/what-is-api-led-connectivity"},
        {text:"Anypoint Platform Overview",url:"https://docs.mulesoft.com/general/"},
        {text:"MuleSoft Platform Architect Exam Guide",url:"https://trailhead.salesforce.com/help?article=MuleSoft-Certified-Platform-Architect-Level-1-Exam-Guide"},
        {text:"Design Center and API Designer",url:"https://docs.mulesoft.com/design-center/"},
        {text:"Exchange for API Publishing",url:"https://docs.mulesoft.com/exchange/"},
        {text:"Trailmix: MuleSoft Platform Architect",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/mulesoft-certified-platform-architect-level-1"}
      ]},
      {tag:"raml-oas",focus:"Design APIs with RAML and OAS: resource types, traits, libraries, and API fragments",topics:[
        {text:"RAML 1.0 Specification",url:"https://github.com/raml-org/raml-spec/blob/master/versions/raml-10/raml-10.md"},
        {text:"API Design Best Practices",url:"https://docs.mulesoft.com/design-center/design-create-publish-api-specs"},
        {text:"RAML Resource Types and Traits",url:"https://docs.mulesoft.com/design-center/"},
        {text:"OAS 3.0 Support in Design Center",url:"https://docs.mulesoft.com/design-center/design-create-publish-api-specs"},
        {text:"API Fragments and Reuse",url:"https://docs.mulesoft.com/design-center/"},
        {text:"API Mocking with Design Center",url:"https://docs.mulesoft.com/design-center/design-mocking-service"}
      ]},
      {tag:"mule4-runtime",focus:"Understand Mule 4 runtime: flow architecture, error handling, and threading model",topics:[
        {text:"Mule 4 Overview",url:"https://docs.mulesoft.com/mule-runtime/latest/"},
        {text:"Mule Event and Message Lifecycle",url:"https://docs.mulesoft.com/mule-runtime/latest/about-mule-event"},
        {text:"Error Handling in Mule 4",url:"https://docs.mulesoft.com/mule-runtime/latest/error-handling"},
        {text:"Flow and Sub-Flow Design",url:"https://docs.mulesoft.com/mule-runtime/latest/about-flows"},
        {text:"Mule 4 Schedulers",url:"https://docs.mulesoft.com/mule-runtime/latest/scheduler-concept"},
        {text:"Async Processing in Mule 4",url:"https://docs.mulesoft.com/mule-runtime/latest/async-scope-reference"}
      ]},
      {tag:"dataweave",focus:"Write DataWeave 2.0 transformations: mapping, filtering, grouping, and type coercion",topics:[
        {text:"DataWeave Language Guide",url:"https://docs.mulesoft.com/dataweave/latest/"},
        {text:"DataWeave Selectors",url:"https://docs.mulesoft.com/dataweave/latest/dataweave-selectors"},
        {text:"DataWeave Functions",url:"https://docs.mulesoft.com/dataweave/latest/dw-core"},
        {text:"DataWeave Mapping Patterns",url:"https://docs.mulesoft.com/dataweave/latest/dataweave-cookbook"},
        {text:"DataWeave for JSON/XML Transformation",url:"https://docs.mulesoft.com/dataweave/latest/dataweave-formats"},
        {text:"DataWeave Streaming",url:"https://docs.mulesoft.com/dataweave/latest/dataweave-streaming"}
      ]},
      {tag:"connectors-integration",focus:"Design with core MuleSoft connectors: HTTP, Database, Salesforce, JMS, and File",topics:[
        {text:"HTTP Connector",url:"https://docs.mulesoft.com/http-connector/latest/"},
        {text:"Salesforce Connector",url:"https://docs.mulesoft.com/salesforce-connector/latest/"},
        {text:"Database Connector",url:"https://docs.mulesoft.com/db-connector/latest/"},
        {text:"JMS Connector",url:"https://docs.mulesoft.com/jms-connector/latest/"},
        {text:"Anypoint Connector DevKit",url:"https://docs.mulesoft.com/connector-devkit/latest/"},
        {text:"File and FTP Connector",url:"https://docs.mulesoft.com/file-connector/latest/"}
      ]},
      {tag:"api-management",focus:"Govern APIs with API Manager: policies, rate limiting, SLA tiers, and analytics",topics:[
        {text:"API Manager Overview",url:"https://docs.mulesoft.com/api-manager/latest/"},
        {text:"Applying Policies",url:"https://docs.mulesoft.com/api-manager/latest/policies-overview"},
        {text:"Rate Limiting Policy",url:"https://docs.mulesoft.com/api-manager/latest/rate-limiting-sla-based-policies"},
        {text:"SLA Tiers",url:"https://docs.mulesoft.com/api-manager/latest/defining-sla-tiers"},
        {text:"Client ID Enforcement",url:"https://docs.mulesoft.com/api-manager/latest/client-id-based-policies"},
        {text:"Anypoint Analytics",url:"https://docs.mulesoft.com/api-manager/latest/viewing-api-analytics"}
      ]},
      {tag:"deployment-governance",focus:"Deploy MuleSoft to CloudHub, RTF, and on-premises: scaling, logging, and alerts",topics:[
        {text:"CloudHub Overview",url:"https://docs.mulesoft.com/cloudhub/"},
        {text:"Runtime Fabric (RTF)",url:"https://docs.mulesoft.com/runtime-fabric/latest/"},
        {text:"Deployment Strategies",url:"https://docs.mulesoft.com/mule-runtime/latest/deploying"},
        {text:"CloudHub Autoscaling",url:"https://docs.mulesoft.com/cloudhub/cloudhub-deploying-to-multiple-workers"},
        {text:"Anypoint Monitoring",url:"https://docs.mulesoft.com/monitoring/"},
        {text:"Alert Configuration",url:"https://docs.mulesoft.com/monitoring/alerts"}
      ]},
      {tag:"security-mulesoft",focus:"Secure MuleSoft APIs: OAuth 2.0, JWT, TLS, and secrets management with Secrets Manager",topics:[
        {text:"MuleSoft OAuth 2.0 Provider",url:"https://docs.mulesoft.com/api-manager/latest/oauth2-provider-concept"},
        {text:"JWT Validation Policy",url:"https://docs.mulesoft.com/api-manager/latest/jwt-validation-policy"},
        {text:"TLS Configuration in Mule",url:"https://docs.mulesoft.com/mule-runtime/latest/tls-configuration"},
        {text:"Anypoint Secrets Manager",url:"https://docs.mulesoft.com/anypoint-security/secrets-manager"},
        {text:"Secure Properties Placeholder",url:"https://docs.mulesoft.com/mule-runtime/latest/secure-configuration-properties"},
        {text:"Anypoint Security Policies",url:"https://docs.mulesoft.com/anypoint-security/"}
      ]},
      {tag:"exam-prep",focus:"MuleSoft Platform Architect Level 1 exam review: API-led design, DataWeave, and governance",topics:[
        {text:"MuleSoft Platform Architect L1 Exam Guide",url:"https://trailhead.salesforce.com/help?article=MuleSoft-Certified-Platform-Architect-Level-1-Exam-Guide"},
        {text:"Trailmix: MuleSoft Platform Architect L1",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/mulesoft-certified-platform-architect-level-1"},
        {text:"Anypoint Platform Documentation",url:"https://docs.mulesoft.com/"},
        {text:"DataWeave Playground",url:"https://dataweave.mulesoft.com/learn/playground"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-mule-plat-arch---Mule-Arch-201"},
        {text:"MuleSoft Training",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/mulesoft-integration-and-apis"}
      ]}
    ],
    quiz:[
      {domain:"API-Led Connectivity Design", q: "In API-led connectivity, which API layer is responsible for composing data from multiple System APIs?", a: "Process API", options: ["Experience API", "Process API", "Orchestration API", "System API"] },
      {domain:"System Architecture", q: "What is the primary benefit of a Center for Enablement (C4E) in MuleSoft architecture?", a: "Driving API reuse across the organization by publishing and governing shared API assets", options: ["Providing technical support for Mule developers", "Driving API reuse across the organization by publishing and governing shared API assets", "Managing Anypoint Platform licenses and vCore allocation", "Training all developers to become MuleSoft certified"] },
      {domain:"Anypoint Platform Architecture", q: "Which Anypoint Platform deployment model runs Mule runtimes on customer-managed infrastructure?", a: "Anypoint Runtime Fabric", options: ["CloudHub", "Anypoint Private Cloud", "Anypoint Runtime Fabric", "Hybrid Deployment Manager"] },
      {domain:"Anypoint Platform Architecture", q: "What is Anypoint DataGraph used for?", a: "Creating a unified GraphQL API that federates multiple REST APIs into a single queryable endpoint", options: ["A visual data transformation tool for DataWeave", "Creating a unified GraphQL API that federates multiple REST APIs into a single queryable endpoint", "A graph database connector for Anypoint Platform", "A dashboard for visualizing API relationships in Exchange"] },
      {domain:"System Architecture", q: "What distinguishes synchronous integration from asynchronous integration?", a: "Synchronous waits for a response before continuing; asynchronous sends the message and continues without waiting", options: ["Synchronous is faster; asynchronous is more reliable", "Synchronous waits for a response before continuing; asynchronous sends the message and continues without waiting", "Synchronous uses REST; asynchronous uses messaging queues exclusively", "Synchronous is for internal systems; asynchronous is for external systems"] },
      {domain:"API-Led Connectivity Design", q: "What is a canonical data model in enterprise integration?", a: "A common, agreed-upon data format used as an intermediary between all integrated systems", options: ["The official Salesforce data model for all integrations", "A common, agreed-upon data format used as an intermediary between all integrated systems", "A data model generated by DataWeave automatically", "An XML schema required by SOAP web services"] },
      {domain:"System Architecture", q: "How does Anypoint MQ differ from Kafka in a MuleSoft architecture?", a: "Anypoint MQ is a managed, Anypoint-native queue service; Kafka provides high-throughput event streaming with replay", options: ["They are functionally identical", "Anypoint MQ is a managed, Anypoint-native queue service; Kafka provides high-throughput event streaming with replay", "Kafka is faster but requires more configuration", "Anypoint MQ supports millions of messages; Kafka is limited to smaller volumes"] },
      {domain:"API-Led Connectivity Design", q: "What is the role of an Experience API in API-led connectivity?", a: "To tailor data and functionality for specific consumer experiences (mobile, web, partner)", options: ["To expose raw system data with minimal transformation", "To tailor data and functionality for specific consumer experiences (mobile, web, partner)", "To orchestrate business processes across multiple System APIs", "To provide monitoring dashboards for API consumers"] },
      {domain:"System Architecture", q: "In a distributed Mule architecture, what is the purpose of a 'dead letter queue'?", a: "To capture messages that could not be processed after maximum retries for investigation and replay", options: ["To discard failed messages automatically", "To capture messages that could not be processed after maximum retries for investigation and replay", "To queue all incoming messages before processing", "To store messages when the primary queue is at capacity"] },
      {domain:"System Architecture", q: "What is mTLS used for in a MuleSoft service mesh?", a: "Mutual authentication between Mule services, ensuring both client and server verify each other's certificates", options: ["Encrypting data in transit between Mule and external APIs", "Mutual authentication between Mule services, ensuring both client and server verify each other's certificates", "Managing TLS certificates for all API endpoints", "Authenticating API consumers to the API gateway"] },
      {domain:"Anypoint Platform Architecture", q: "What CloudHub 2.0 deployment configuration provides network isolation similar to a VPC?", a: "CloudHub 2.0 Private Space", options: ["Dedicated Tenant", "CloudHub 2.0 Private Space", "Isolated Runtime Environment", "CloudHub VPN Configuration"] },
      {domain:"Governance and Operations", q: "In API governance, what is the purpose of an SLA Tier in Anypoint API Manager?", a: "Defining different service levels (e.g., 100 req/min vs. 1000 req/min) that consumers can subscribe to", options: ["Setting the SLA for Anypoint Platform uptime", "Defining different service levels (e.g., 100 req/min vs. 1000 req/min) that consumers can subscribe to", "Measuring API response time SLAs", "Setting contract terms for API consumers"] },
      {domain:"Anypoint Platform Architecture", q: "What Anypoint Platform component allows discovering, consuming, and reusing APIs and connectors?", a: "Anypoint Exchange", options: ["API Portal", "Anypoint Exchange", "API Catalog", "Design Center"] },
      {domain:"Anypoint Platform Architecture", q: "What is the key benefit of separating the control plane from the runtime plane in Anypoint Platform?", a: "The runtime can continue processing even if the control plane is temporarily unavailable", options: ["It allows different security models for each plane", "The runtime can continue processing even if the control plane is temporarily unavailable", "It reduces licensing costs by separating concerns", "It allows different Mule versions in each plane"] },
      {domain:"System Architecture", q: "When designing a MuleSoft integration for a system with strict data residency requirements, what architecture is recommended?", a: "Runtime Fabric deployed on-premise or in the required region, with the control plane managing it remotely", options: ["CloudHub with data encryption for compliance", "Runtime Fabric deployed on-premise or in the required region, with the control plane managing it remotely", "Anypoint Private Cloud Edition with all components on-premise", "CloudHub in the nearest geographic region"] },
      {domain:"Anypoint Platform Architecture", q: "What is the purpose of a RAML Trait in API design?", a: "A reusable group of RAML properties (e.g., pagination, security, error responses) that can be applied to multiple resources", options: ["A data type definition for request/response schemas", "A reusable group of RAML properties (e.g., pagination, security, error responses) that can be applied to multiple resources", "A version identifier for the API specification", "A library of common utility functions for RAML scripts"] },
      {domain:"API-Led Connectivity Design", q: "What metric best demonstrates the ROI of implementing API-led connectivity in an organization?", a: "Reduction in time to build new integrations due to reuse of existing API assets", options: ["Number of APIs published to Exchange", "Reduction in time to build new integrations due to reuse of existing API assets", "Total number of API calls processed", "Cost of Anypoint Platform licenses"] },
      {domain:"Governance and Operations", q: "In Anypoint Monitoring, what does distributed tracing help architects identify?", a: "The complete request path and latency at each hop across multiple Mule applications", options: ["Errors in DataWeave transformations", "The complete request path and latency at each hop across multiple Mule applications", "CPU and memory usage per Mule worker", "Database query execution plans"] },
      {domain:"System Architecture", q: "Which integration pattern is most appropriate for a scenario where the source system needs confirmation that all downstream systems processed the message?", a: "Synchronous orchestration with a Process API aggregating responses", options: ["Asynchronous fire-and-forget", "Synchronous orchestration with a Process API aggregating responses", "Event-driven with Platform Events", "Scheduled batch processing"] },
      {domain:"Anypoint Platform Architecture", q: "What is the architectural benefit of RAML Resource Types?", a: "Defining common patterns for resource behavior (e.g., collection, member) that eliminate repetition across APIs", options: ["Providing runtime type checking for API payloads", "Defining common patterns for resource behavior (e.g., collection, member) that eliminate repetition across APIs", "Creating reusable authentication schemes for API resources", "Generating automatic RAML documentation"] }
    ],
    tips:[
      "Master API-led connectivity: know exactly what logic belongs in System, Process, and Experience APIs.",
      "Understand deployment model trade-offs: CloudHub vs. Runtime Fabric vs. on-premise — focus on compliance, cost, and control.",
      "Know integration patterns and their non-functional trade-offs: synchronous vs. async, EDA vs. request-reply.",
      "Understand the Center for Enablement model and how it drives API reuse.",
      "Know Anypoint DataGraph and when it simplifies consumer access vs. adds unnecessary complexity.",
      "Understand API governance: SLA tiers, policies, client application management, and API versioning.",
      "Know RAML design principles: resource types, traits, and libraries for reusable API design.",
      "Understand HA/DR strategies for Mule: CloudHub multi-worker, Runtime Fabric Kubernetes redundancy."
    ]
  },

  "MuleSoft Platform Integration Architect": {
    questions: 60,
    time: 120,
    pass: 70,
    experience: "3+ years as a MuleSoft architect with enterprise-scale integration architecture experience",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-mule-int-arch---Mule-Arch-202",
    prerequisites: [{name:"MuleSoft Platform Architect",required:true}],
    overview: "The MuleSoft Certified Platform Architect - Level 2 (Integration Architect) certification validates advanced MuleSoft architecture skills. Candidates demonstrate mastery of complex enterprise integration design, multi-cloud architecture, advanced governance, and technical leadership in large-scale integration programs.",
        domains:[
      {name:"Initiating integration solutions on the Anypoint Platform",pct:8,color:"#00A1E0"},
      {name:"Designing for the runtime plane technology architecture",pct:15,color:"#2ECC71"},
      {name:"Designing architecture using integration paradigms",pct:10,color:"#F39C12"},
      {name:"Designing and developing Mule applications",pct:15,color:"#E74C3C"},
      {name:"Designing automated tests for Mule applications",pct:5,color:"#9B59B6"},
      {name:"Designing integration solutions to meet persistence requirements",pct:10,color:"#1ABC9C"},
      {name:"Designing integration solutions to meet reliability requirements",pct:8,color:"#E67E22"},
      {name:"Designing integration solutions to meet performance requirements",pct:7,color:"#3498DB"},
      {name:"Designing integration solutions to meet security requirements",pct:8,color:"#E91E63"},
      {name:"Applying DevOps practices and operating integration solutions",pct:14,color:"#607D8B"},
    ],
    studyDays:[
      {tag:"enterprise-integration-arch",focus:"Design enterprise integration architectures: hub-and-spoke, ESB, and mesh patterns",topics:[
        {text:"MuleSoft Platform Architect L2 Exam Guide",url:"https://trailhead.salesforce.com/help?article=MuleSoft-Certified-Platform-Architect-Level-2-Exam-Guide"},
        {text:"Anypoint Platform Architecture",url:"https://docs.mulesoft.com/general/"},
        {text:"API-Led Connectivity at Scale",url:"https://www.mulesoft.com/resources/api/what-is-api-led-connectivity"},
        {text:"Trailmix: MuleSoft Integration Architect",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/mulesoft-certified-platform-architect-level-2"},
        {text:"Event-Driven Architecture with MuleSoft",url:"https://docs.mulesoft.com/mule-runtime/latest/"},
        {text:"MuleSoft Reference Architecture",url:"https://docs.mulesoft.com/general/"}
      ]},
      {tag:"advanced-dataweave",focus:"Advanced DataWeave: recursion, streaming, performance optimization, and custom modules",topics:[
        {text:"DataWeave Reference",url:"https://docs.mulesoft.com/dataweave/latest/"},
        {text:"DataWeave Streaming for Large Payloads",url:"https://docs.mulesoft.com/dataweave/latest/dataweave-streaming"},
        {text:"Custom DataWeave Modules",url:"https://docs.mulesoft.com/dataweave/latest/dataweave-create-module"},
        {text:"DataWeave Performance Tips",url:"https://docs.mulesoft.com/dataweave/latest/dataweave-cookbook"},
        {text:"Recursive DataWeave Functions",url:"https://docs.mulesoft.com/dataweave/latest/dw-core-functions-reduce"},
        {text:"DataWeave Flat File and EDI",url:"https://docs.mulesoft.com/dataweave/latest/dataweave-formats-flatfile"}
      ]},
      {tag:"reliability-patterns",focus:"Design reliable integrations: idempotency, circuit breaker, saga pattern, and compensating transactions",topics:[
        {text:"Reliability Patterns in MuleSoft",url:"https://docs.mulesoft.com/mule-runtime/latest/reliability-patterns"},
        {text:"Until Successful Scope",url:"https://docs.mulesoft.com/mule-runtime/latest/until-successful-scope"},
        {text:"Redelivery Policy",url:"https://docs.mulesoft.com/mule-runtime/latest/redelivery-policy"},
        {text:"Idempotent Message Filter",url:"https://docs.mulesoft.com/mule-runtime/latest/idempotent-message-validator"},
        {text:"Saga Pattern with Mule",url:"https://docs.mulesoft.com/mule-runtime/latest/"},
        {text:"Object Store for State Management",url:"https://docs.mulesoft.com/object-store-connector/latest/"}
      ]},
      {tag:"multi-cloud-deployment",focus:"Design multi-cloud deployment: CloudHub 2.0, RTF, and hybrid on-premises patterns",topics:[
        {text:"CloudHub 2.0 Overview",url:"https://docs.mulesoft.com/cloudhub-2/"},
        {text:"Runtime Fabric Advanced Configuration",url:"https://docs.mulesoft.com/runtime-fabric/latest/"},
        {text:"Anypoint Private Cloud Edition",url:"https://docs.mulesoft.com/private-cloud/latest/"},
        {text:"Hybrid Deployment Patterns",url:"https://docs.mulesoft.com/runtime-manager/latest/deployment-strategies"},
        {text:"Anypoint VPC",url:"https://docs.mulesoft.com/cloudhub/virtual-private-cloud"},
        {text:"Dedicated Load Balancer",url:"https://docs.mulesoft.com/cloudhub/dedicated-load-balancer-about"}
      ]},
      {tag:"governance-at-scale",focus:"Design API governance at enterprise scale: Center for Enablement, API versioning, and deprecation",topics:[
        {text:"Center for Enablement (C4E) Model",url:"https://www.mulesoft.com/resources/api/what-is-api-led-connectivity"},
        {text:"API Versioning Strategy",url:"https://docs.mulesoft.com/api-manager/latest/"},
        {text:"Anypoint Exchange for Reuse",url:"https://docs.mulesoft.com/exchange/"},
        {text:"API Deprecation Policies",url:"https://docs.mulesoft.com/api-manager/latest/policies-overview"},
        {text:"CICD for MuleSoft with Maven",url:"https://docs.mulesoft.com/mule-runtime/latest/mmp-concept"},
        {text:"Anypoint CLI for Automation",url:"https://docs.mulesoft.com/anypoint-cli/latest/"}
      ]},
      {tag:"advanced-security",focus:"Advanced MuleSoft security: OAuth 2.0 federation, mTLS, IP allowlisting, and threat protection",topics:[
        {text:"OAuth 2.0 Token Delegation",url:"https://docs.mulesoft.com/api-manager/latest/oauth2-provider-concept"},
        {text:"Mutual TLS in Mule",url:"https://docs.mulesoft.com/mule-runtime/latest/tls-configuration"},
        {text:"Anypoint Security Threat Protection",url:"https://docs.mulesoft.com/anypoint-security/"},
        {text:"IP Allowlist Policy",url:"https://docs.mulesoft.com/api-manager/latest/ip-allowlist"},
        {text:"Penetration Testing on MuleSoft APIs",url:"https://docs.mulesoft.com/anypoint-security/"},
        {text:"Secrets Manager and Secure Properties",url:"https://docs.mulesoft.com/anypoint-security/secrets-manager"}
      ]},
      {tag:"performance-tuning",focus:"Tune MuleSoft performance: thread pool tuning, caching, batching, and memory management",topics:[
        {text:"Mule Runtime Performance Tuning",url:"https://docs.mulesoft.com/mule-runtime/latest/tuning-guide"},
        {text:"Batch Processing in Mule 4",url:"https://docs.mulesoft.com/mule-runtime/latest/batch-processing-concept"},
        {text:"Caching Scope",url:"https://docs.mulesoft.com/mule-runtime/latest/cache-scope"},
        {text:"Thread Pool Strategies",url:"https://docs.mulesoft.com/mule-runtime/latest/execution-engine"},
        {text:"Anypoint Monitoring for Performance",url:"https://docs.mulesoft.com/monitoring/"},
        {text:"Memory Management and GC Tuning",url:"https://docs.mulesoft.com/mule-runtime/latest/tuning-guide"}
      ]},
      {tag:"exam-prep",focus:"MuleSoft Integration Architect Level 2 exam review: reliability, governance, and multi-cloud design",topics:[
        {text:"MuleSoft Platform Architect L2 Exam Guide",url:"https://trailhead.salesforce.com/help?article=MuleSoft-Certified-Platform-Architect-Level-2-Exam-Guide"},
        {text:"Trailmix: MuleSoft Integration Architect L2",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/mulesoft-certified-platform-architect-level-2"},
        {text:"Anypoint Platform Documentation",url:"https://docs.mulesoft.com/"},
        {text:"MuleSoft Reliability Patterns",url:"https://docs.mulesoft.com/mule-runtime/latest/reliability-patterns"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-mule-int-arch---Mule-Arch-202"},
        {text:"DataWeave Playground",url:"https://dataweave.mulesoft.com/learn/playground"}
      ]}
    ],
    quiz:[
      {domain:"Digital Transformation Leadership", q: "What is the Strangler Fig pattern used for in legacy integration modernization?", a: "Incrementally replacing legacy system functionality with new services while keeping the legacy system running until fully replaced", options: ["Migrating all legacy systems to Mule in a single cutover", "Incrementally replacing legacy system functionality with new services while keeping the legacy system running until fully replaced", "Wrapping a legacy system with an API without modifying it", "Strangling technical debt by rewriting all integrations simultaneously"] },
      {domain:"Advanced Architecture Design", q: "What is the Saga pattern in distributed microservices transactions?", a: "A sequence of local transactions where each step publishes an event to trigger the next, with compensating transactions for rollback", options: ["A design pattern for long-running Mule batch jobs", "A sequence of local transactions where each step publishes an event to trigger the next, with compensating transactions for rollback", "A pattern for managing Mule flow state across multiple executions", "A Mule error handling pattern for multi-step rollbacks"] },
      {domain:"Advanced Architecture Design", q: "What is Anypoint Flex Gateway used for?", a: "Extending Anypoint API governance and policy enforcement to non-Mule APIs and microservices", options: ["An alternative to API Manager for small deployments", "Extending Anypoint API governance and policy enforcement to non-Mule APIs and microservices", "A lightweight Mule runtime for edge deployments", "A GraphQL gateway for Anypoint DataGraph"] },
      {domain:"Advanced Architecture Design", q: "What is CQRS (Command Query Responsibility Segregation) in an integration context?", a: "Separating read (query) and write (command) operations into different models/services for scalability", options: ["Separating synchronous and asynchronous processing in Mule flows", "Separating read (query) and write (command) operations into different models/services for scalability", "A pattern for separating API design from API implementation", "A Salesforce pattern for separating trigger and flow automation"] },
      {domain:"Advanced Architecture Design", q: "What is Event Sourcing in an enterprise architecture context?", a: "Storing state changes as a sequence of immutable events rather than just the current state", options: ["Using Salesforce Platform Events as the primary data store", "Storing state changes as a sequence of immutable events rather than just the current state", "A pattern for streaming events to multiple consumers simultaneously", "Sourcing events from external systems for Mule processing"] },
      {domain:"Advanced Architecture Design", q: "What is consumer-driven contract testing in an integration architecture?", a: "The API consumer defines the expected API behavior, and the provider validates their implementation against those contracts", options: ["The provider writes test cases that consumers must pass", "The API consumer defines the expected API behavior, and the provider validates their implementation against those contracts", "A testing approach where consumers share integration test suites with providers", "A contract-based SLA between API consumers and providers"] },
      {domain:"Security Architecture", q: "How does a zero-trust security model apply to MuleSoft integrations?", a: "Every service-to-service call is authenticated and authorized regardless of network location, assuming no implicit trust", options: ["Zero-trust means no external APIs are allowed", "Every service-to-service call is authenticated and authorized regardless of network location, assuming no implicit trust", "All API keys are rotated on every request", "Internal Mule services operate without authentication for performance"] },
      {domain:"Security Architecture", q: "What is the primary benefit of OpenTelemetry integration in a MuleSoft observability architecture?", a: "Standardized, vendor-neutral distributed tracing, metrics, and logs that work across Mule and non-Mule services", options: ["Providing Salesforce-native monitoring for Mule", "Standardized, vendor-neutral distributed tracing, metrics, and logs that work across Mule and non-Mule services", "Reducing monitoring costs by replacing Anypoint Monitoring", "Auto-instrumenting all DataWeave transformations for profiling"] },
      {domain:"Enterprise Governance", q: "In enterprise API governance, what is 'policy as code'?", a: "Defining API governance rules in machine-readable configuration files that are version-controlled and automatically enforced", options: ["Writing Apex or Java code to implement API policies manually", "Defining API governance rules in machine-readable configuration files that are version-controlled and automatically enforced", "A Mule design pattern for applying policies programmatically", "Using RAML specifications as the policy enforcement mechanism"] },
      {domain:"Advanced Architecture Design", q: "When should an architect choose Anypoint Flex Gateway over Anypoint API Manager?", a: "When API governance needs to extend to non-Mule microservices deployed in Kubernetes or other runtimes", options: ["Flex Gateway is always preferred for better performance", "When API governance needs to extend to non-Mule microservices deployed in Kubernetes or other runtimes", "When cost is the primary concern for API management", "When APIs require more than 10 policies simultaneously"] },
      {domain:"Digital Transformation Leadership", q: "What is the anti-corruption layer pattern in legacy modernization?", a: "A translation layer that isolates new services from legacy system models, preventing the legacy data model from contaminating new designs", options: ["A security layer preventing unauthorized access to legacy systems", "A translation layer that isolates new services from legacy system models, preventing the legacy data model from contaminating new designs", "A Mule component that wraps legacy SOAP services with REST APIs", "A pattern for gradually corrupting the legacy system data to force migration"] },
      {domain:"Enterprise Governance", q: "What metric best measures the success of a Center for Enablement in driving API reuse?", a: "Reduction in time-to-build new integrations and percentage of projects reusing existing API assets", options: ["Number of API certifications earned by developers", "Reduction in time-to-build new integrations and percentage of projects reusing existing API assets", "Total vCore consumption reduction", "Number of APIs published to Exchange per quarter"] },
      {domain:"Advanced Architecture Design", q: "In a high-availability Anypoint MQ architecture, what prevents message loss when a consumer fails?", a: "Message acknowledgment with auto-replay: messages are not removed until acknowledged, and unacknowledged messages are redelivered", options: ["Anypoint MQ automatically backs up all messages to S3", "Message acknowledgment with auto-replay: messages are not removed until acknowledged, and unacknowledged messages are redelivered", "Enabling redundant queue configuration in MQ settings", "Using synchronous MQ calls instead of asynchronous"] },
      {domain:"Performance and Scalability", q: "What is the circuit breaker pattern applied to MuleSoft integrations?", a: "Preventing cascading failures by stopping calls to a failing downstream system after a threshold of failures, allowing it time to recover", options: ["A pattern that reroutes traffic around a broken Mule worker", "Preventing cascading failures by stopping calls to a failing downstream system after a threshold of failures, allowing it time to recover", "A Mule error handler that breaks the flow on the first error", "A monitoring alert that triggers when circuit failures exceed a threshold"] },
      {domain:"Advanced Architecture Design", q: "What is the primary consideration for designing integration architectures in regulated industries (healthcare, finance)?", a: "Compliance requirements dictate data residency, encryption standards, audit logging, and access controls — these must be addressed at the architecture level", options: ["Using only on-premise deployments for all regulated data", "Compliance requirements dictate data residency, encryption standards, audit logging, and access controls — these must be addressed at the architecture level", "Avoiding cloud deployments entirely to maintain control", "Implementing additional layers of authentication for all API consumers"] },
      {domain:"Advanced Architecture Design", q: "In a multi-cloud architecture with Mule, what is the key challenge?", a: "Managing identity, security, and data governance consistently across cloud boundaries", options: ["Ensuring all clouds use the same API versions", "Managing identity, security, and data governance consistently across cloud boundaries", "Deploying Mule runtimes to multiple clouds simultaneously", "Preventing vendor lock-in for any single cloud provider"] },
      {domain:"Digital Transformation Leadership", q: "What is the purpose of chaos engineering in an integration resilience strategy?", a: "Deliberately injecting failures to test and improve the system's ability to recover and maintain SLAs under failure conditions", options: ["Testing the system under maximum expected load", "Deliberately injecting failures to test and improve the system's ability to recover and maintain SLAs under failure conditions", "Simulating random network conditions for performance testing", "Introducing randomness to DataWeave transformations for edge case testing"] },
      {domain:"Advanced Architecture Design", q: "How should an Integration Architect approach TCO (Total Cost of Ownership) analysis for platform selection?", a: "Consider licensing, implementation, training, ongoing operations, maintenance, and the cost of vendor lock-in over a 3-5 year horizon", options: ["Focus only on the upfront licensing cost", "Consider licensing, implementation, training, ongoing operations, maintenance, and the cost of vendor lock-in over a 3-5 year horizon", "Use the cheapest platform that meets minimum requirements", "Select the platform with the largest market share for ecosystem benefits"] },
      {domain:"Advanced Architecture Design", q: "In Kafka-based integration architecture with Mule, what does the 'consumer group' concept enable?", a: "Multiple consumers to read from the same topic in parallel while each partition is consumed by only one consumer in the group", options: ["A shared consumer identity for security purposes", "Multiple consumers to read from the same topic in parallel while each partition is consumed by only one consumer in the group", "Grouping multiple Kafka topics under one subscription", "A security policy limiting Kafka access to authorized consumer groups"] },
      {domain:"Advanced Architecture Design", q: "What is the key principle of a 'product-led' API management model?", a: "APIs are treated as products with defined consumers, SLAs, roadmaps, and measured by developer experience and adoption", options: ["All APIs must be managed by the product management team", "APIs are treated as products with defined consumers, SLAs, roadmaps, and measured by developer experience and adoption", "API development is led by product managers rather than developers", "APIs are only built for external monetization, not internal use"] }
    ],
    tips:[
      "Know advanced patterns: Strangler Fig, Saga, CQRS, Event Sourcing — and when each is appropriate for enterprise integration.",
      "Understand Anypoint Flex Gateway as a tool for extending governance to non-Mule services.",
      "Know the zero-trust security model and how it applies to service-to-service integration.",
      "Understand chaos engineering and why it's valuable for resilience testing of integration architectures.",
      "Know consumer-driven contract testing and how it prevents API breaking changes.",
      "Be able to perform a TCO analysis across integration platform options.",
      "Understand the C4E evolution from IT-led to product-led API management.",
      "Know circuit breaker patterns and how they prevent cascading failures in distributed integration."
    ]
  },

});
