Object.assign(EXAM_DATA, {
  "Platform Developer":{
    questions:60,time:105,pass:"65%",experience:"6 months dev",
    trailheadUrl:"https://trailheadacademy.salesforce.com/certificate/exam-platform-dev1---Plat-Dev-201",
    prerequisites:[
      {name:"Platform Administrator",url:"https://developer.salesforce.com/docs/atlas.en-us.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_remote_process_invocation_request_reply.htm",note:"Not a hard requirement, but admin knowledge — sharing model, objects, flows — is assumed context for developer exam questions."}
    ],
    overview:"The Platform Developer certification is designed for developers who build custom applications on the Salesforce platform using Apex and Lightning Web Components. The exam assesses your understanding of Apex fundamentals, SOQL and DML, trigger patterns, asynchronous processing, LWC component architecture, Apex testing, and metadata deployment. It is the entry-level developer credential and serves as the foundation for Platform Developer II and other technical certifications.",
        domains:[
      {name:"Developer Fundamentals",pct:27,color:"#00A1E0"},
      {name:"Process Automation and Logic",pct:28,color:"#2ECC71"},
      {name:"User Interface",pct:25,color:"#F39C12"},
      {name:"Testing, Debugging, and Deployment",pct:20,color:"#E74C3C"},
    ],
    studyDays:[
      {tag:"apex-basics",focus:"Apex language fundamentals: classes, interfaces, collections, and exception handling",topics:[
        {text:"Apex Developer Guide — Intro",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_intro_what_is_apex.htm"},
        {text:"Apex Data Types and Variables",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/langCon_apex_data_types.htm"},
        {text:"Apex Collections: List, Set, Map",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/langCon_apex_collections.htm"},
        {text:"Apex Classes and Interfaces",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_understanding.htm"},
        {text:"Apex Exception Handling",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_exception_definition.htm"},
        {text:"Apex Governor Limits",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm"}
      ]},
      {tag:"soql-dml",focus:"SOQL queries, relationship queries, DML statements, and database class methods",topics:[
        {text:"SOQL SELECT Syntax",url:"https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select.htm"},
        {text:"SOQL Relationship Queries",url:"https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships.htm"},
        {text:"DML Statements",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_dml_section.htm"},
        {text:"Database Class Methods",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_methods_system_database.htm"},
        {text:"SOQL For Loops",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_for_loops.htm"},
        {text:"Aggregate SOQL Functions",url:"https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_agg_functions.htm"}
      ]},
      {tag:"triggers",focus:"Apex triggers: context variables, trigger framework patterns, and recursive prevention",topics:[
        {text:"Apex Triggers Overview",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_triggers.htm"},
        {text:"Trigger Context Variables",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_triggers_context_variables.htm"},
        {text:"Trigger Best Practices",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_trigger_bulkifying.htm"},
        {text:"Bulkified Trigger Patterns",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_dml_bulk.htm"},
        {text:"Before vs After Triggers",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_triggers_order_of_execution.htm"},
        {text:"Order of Execution",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_triggers_order_of_execution.htm"}
      ]},
      {tag:"async-apex",focus:"Asynchronous Apex: Future, Batch, Queueable, and Scheduled Apex patterns",topics:[
        {text:"Async Apex Overview",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_async_overview.htm"},
        {text:"Future Methods",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_invoking_future_methods.htm"},
        {text:"Batch Apex",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_batch_interface.htm"},
        {text:"Queueable Apex",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_queueing_jobs.htm"},
        {text:"Scheduled Apex",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_scheduler.htm"},
        {text:"Async Limits and Chaining",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm"}
      ]},
      {tag:"lwc",focus:"Lightning Web Components: component lifecycle, data binding, events, and wire service",topics:[
        {text:"LWC Developer Guide",url:"https://developer.salesforce.com/docs/platform/lwc/guide/"},
        {text:"LWC Component Lifecycle",url:"https://developer.salesforce.com/docs/platform/lwc/guide/lifecycle-hooks.html"},
        {text:"LWC Properties and Data Binding",url:"https://developer.salesforce.com/docs/platform/lwc/guide/create-components-data-binding.html"},
        {text:"LWC Events",url:"https://developer.salesforce.com/docs/platform/lwc/guide/events.html"},
        {text:"Wire Service and Adapters",url:"https://developer.salesforce.com/docs/platform/lwc/guide/data-wire-service-about.html"},
        {text:"LWC and Apex Data Access",url:"https://developer.salesforce.com/docs/platform/lwc/guide/apex.html"}
      ]},
      {tag:"lwc-advanced",focus:"LWC advanced patterns: slots, dynamic components, navigation, and base components",topics:[
        {text:"LWC Slots",url:"https://developer.salesforce.com/docs/platform/lwc/guide/create-components-slots.html"},
        {text:"LWC Dynamic Component Creation",url:"https://developer.salesforce.com/docs/platform/lwc/guide/dynamic-components.html"},
        {text:"LWC Navigation Service",url:"https://developer.salesforce.com/docs/platform/lwc/guide/navigate-page-reference.html"},
        {text:"Lightning Base Components Library",url:"https://developer.salesforce.com/docs/platform/lwc/guide/migrate-map-aura-lwc-features.html"},
        {text:"LWC Security Model",url:"https://developer.salesforce.com/docs/platform/lwc/guide/security.html"},
        {text:"LWC Unit Testing with Jest",url:"https://developer.salesforce.com/docs/platform/lwc/guide/testing-jest-introduction.html"}
      ]},
      {tag:"apex-testing",focus:"Apex test classes: test data, assertions, mocking, and coverage requirements",topics:[
        {text:"Apex Testing Overview",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_testing_intro.htm"},
        {text:"@testSetup Methods",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_testing_testsetup_using.htm"},
        {text:"Test.startTest and stopTest",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_testing_tools_start_stop_test.htm"},
        {text:"Mock HTTP Callouts",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http_testing_httpmock.htm"},
        {text:"System.assert Methods",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_testing_assertion_methods.htm"},
        {text:"Code Coverage Requirements",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_code_coverage_intro.htm"}
      ]},
      {tag:"security-apex",focus:"Apex security: CRUD/FLS enforcement, sharing keywords, and injection prevention",topics:[
        {text:"Apex Security and Sharing",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_security_sharing_chapter.htm"},
        {text:"with sharing / without sharing",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm"},
        {text:"User Mode Operations",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_enforce_usermode.htm"},
        {text:"SOQL Injection Prevention",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_security_injection_vulnerabilities.htm"},
        {text:"XSS Prevention in Visualforce",url:"https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/pages_security_tips_xss.htm"},
        {text:"Field-Level Security in Apex",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_enforce_usermode.htm"}
      ]},
      {tag:"callouts",focus:"Apex callouts: HTTP requests, named credentials, REST services, and mock callouts",topics:[
        {text:"Apex HTTP Callouts",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_callouts.htm"},
        {text:"Named Credentials in Callouts",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_callouts_named_credentials.htm"},
        {text:"Apex REST Web Services",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_rest_intro.htm"},
        {text:"Callout Limits",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_callouts_timeouts.htm"},
        {text:"HttpRequest and HttpResponse",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http.htm"},
        {text:"StaticResourceCalloutMock",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http_testing_httpmock.htm"}
      ]},
      {tag:"deployment",focus:"Deploy Apex metadata: change sets, Metadata API, and Salesforce CLI",topics:[
        {text:"Change Sets Overview",url:"https://help.salesforce.com/s/articleView?id=sf.changesets.htm"},
        {text:"Salesforce CLI Deploy",url:"https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_source.htm"},
        {text:"Metadata API Deploy",url:"https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm"},
        {text:"Running Apex Tests on Deploy",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_testing_running_command_line.htm"},
        {text:"Sandbox Management",url:"https://help.salesforce.com/s/articleView?id=sf.create_test_instance.htm"},
        {text:"Platform Developer Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Platform-Developer-I-Exam-Guide"}
      ]}
    ],
    quiz:[
      {domain:"Apex",q:"Which statement correctly describes a 'bulkified' Apex trigger?",opts:["It uses @future to run asynchronously","It processes records using collections rather than one record at a time","It only fires for insert operations","It skips SOQL queries entirely"],correct:1,explanation:"Bulkification means operating on the full Trigger.new collection using bulk SOQL and DML outside loops to stay within governor limits."},
      {domain:"Apex",q:"What is the maximum number of SOQL queries allowed per synchronous Apex transaction?",opts:["50","100","200","500"],correct:1,explanation:"Salesforce allows a maximum of 100 SOQL queries per synchronous Apex transaction."},
      {domain:"Async",q:"Which asynchronous Apex method allows chaining of jobs in a sequence?",opts:["@future","Batch Apex","Queueable Apex","Scheduled Apex"],correct:2,explanation:"Queueable Apex allows you to chain jobs by enqueuing a new job from within a running job's execute method."},
      {domain:"LWC",q:"Which decorator is used to expose a public property in a Lightning Web Component?",opts:["@track","@wire","@api","@expose"],correct:2,explanation:"@api exposes a property or method as public, making it accessible from a parent component or through the record page."},
      {domain:"Testing",q:"What minimum code coverage percentage is required to deploy Apex to production?",opts:["50%","60%","75%","100%"],correct:2,explanation:"Salesforce requires at least 75% aggregate code coverage across all Apex classes and triggers to deploy to production."},
      {domain:"Deployment",q:"Which deployment tool is recommended for modern CI/CD pipelines with Salesforce DX?",opts:["Change Sets","Ant Migration Tool","Salesforce CLI","Data Loader"],correct:2,explanation:"Salesforce CLI (sf or sfdx) is the modern recommended tool for source-driven development and CI/CD deployments with scratch orgs and packages."},
      {domain:"Apex",q:"Which statement about Apex governor limits is correct?",opts:["Limits reset after each DML operation","Limits are enforced per Apex transaction, not per class","Limits are only enforced in production orgs","@future methods share limits with their calling transaction"],correct:1,explanation:"Governor limits are enforced per transaction — all Apex code within a single transaction shares the same limits, regardless of how many classes are involved."},
      {domain:"Apex",q:"A SOQL query inside a for loop will likely cause which error?",opts:["NullPointerException","DML Exception","System.LimitException: Too many SOQL queries","Heap size exceeded"],correct:2,explanation:"Placing SOQL inside a loop quickly exhausts the 100 SOQL query limit per transaction, causing a LimitException — always move queries outside loops."},
      {domain:"Apex",q:"Which collection type in Apex enforces uniqueness of its elements?",opts:["List","Map","Set","Array"],correct:2,explanation:"A Set stores unique values only — adding a duplicate element has no effect. Use Sets to deduplicate record IDs before querying."},
      {domain:"Apex",q:"What does the 'upsert' DML statement do?",opts:["Updates all records matching a criteria","Inserts a record only if it doesn't exist, then stops","Inserts new records and updates existing ones based on an external ID or record ID","Deletes and re-inserts a record"],correct:2,explanation:"Upsert checks whether records exist using the specified external ID field (or record ID) — matching records are updated, non-matching records are inserted."},
      {domain:"Async",q:"Which async Apex type is designed specifically for processing large numbers of records that would exceed synchronous governor limits?",opts:["@future","Queueable Apex","Batch Apex","Scheduled Apex"],correct:2,explanation:"Batch Apex processes records in configurable chunks (up to 2,000 per batch execution) and gets fresh governor limits for each chunk, making it ideal for mass data operations."},
      {domain:"Async",q:"A @future method must have which method signature characteristic?",opts:["It must return a value","It must be private","It must be static and return void","It must implement an interface"],correct:2,explanation:"@future methods must be declared as static and must return void — they cannot return values because they run asynchronously after the calling transaction completes."},
      {domain:"LWC",q:"Which lifecycle hook in LWC fires after every render of the component, including the initial render?",opts:["connectedCallback","constructor","renderedCallback","disconnectedCallback"],correct:2,explanation:"renderedCallback fires each time the component's DOM is re-rendered — use it to interact with DOM elements after they are available, but guard against infinite loops."},
      {domain:"LWC",q:"How does a child LWC component communicate an event to its parent?",opts:["By directly modifying the parent's @api property","By dispatching a CustomEvent and letting the parent listen with an event handler","By calling a method on the parent via @wire","By importing a shared module and mutating shared state"],correct:1,explanation:"Child-to-parent communication in LWC uses CustomEvent — the child dispatches the event, and the parent listens using an on<eventname> handler on the child's tag."},
      {domain:"LWC",q:"The @wire decorator in LWC is used to do what?",opts:["Expose a property to parent components","Reactively provision data from Apex or Salesforce UI API","Define component-level CSS variables","Register an event listener on the component"],correct:1,explanation:"@wire reactively connects a component property or function to an Apex method or UI API wire adapter — when the wired data changes, the component re-renders automatically."},
      {domain:"Testing",q:"What is the purpose of Test.setMock() in Apex tests?",opts:["It resets all governor limits","It registers a mock implementation to intercept HTTP callouts during tests","It populates test data automatically","It prevents DML from writing to the database"],correct:1,explanation:"Test.setMock() registers an HttpCalloutMock or WebServiceMock implementation so that Apex callouts made during the test return the mock response instead of hitting a real endpoint."},
      {domain:"Testing",q:"Which approach ensures test data is isolated and not affected by existing org data?",opts:["Use @isTest(SeeAllData=false) and create data in the test","Use @isTest(SeeAllData=true) to access all records","Query existing records in a @testSetup method","Rely on sandbox data"],correct:0,explanation:"@isTest(SeeAllData=false) is the default — test classes run in an isolated context and should create all required data within the test or @testSetup method."},
      {domain:"Deployment",q:"Which sandbox type is refreshed from production and contains a configurable sample of production data up to 5GB?",opts:["Developer Sandbox","Developer Pro Sandbox","Partial Data Sandbox","Full Sandbox"],correct:2,explanation:"Partial Data Sandbox uses a sandbox template to copy a defined subset of production data (up to 5GB), balancing realistic test data with faster refresh times than a Full Sandbox."},
      {domain:"Deployment",q:"What is the minimum code coverage required for each individual Apex class when deploying to production?",opts:["0% — only aggregate coverage matters","75% per class","50% per class","100% per class"],correct:0,explanation:"Salesforce requires 75% aggregate coverage across all classes and triggers — there is no per-class minimum. However, every trigger must have at least 1% coverage (i.e., at least one test must execute it)."},
      {domain:"Apex",q:"Which Apex exception is thrown when a DML operation violates a record validation rule or required field?",opts:["NullPointerException","DmlException","QueryException","LimitException"],correct:1,explanation:"DmlException is thrown when a DML statement fails — this includes validation rule violations, required field errors, duplicate blocking rules, and other save-time failures."}
    ],
    tips:[
      {icon:"⚡",title:"Bulk Everything",body:"Every SOQL query and DML statement inside a loop is a trap. Always use collections and move database operations outside loops."},
      {icon:"📐",title:"Understand Order of Execution",body:"The exam tests trigger order of execution — know what fires before and after triggers, including validation rules and workflow."},
      {icon:"🧪",title:"Test Class Quality Matters",body:"Writing meaningful assertions (System.assert, assertEquals) is just as important as coverage percentage. Understand what to test."},
      {icon:"🔌",title:"LWC Data Patterns",body:"Know the @wire decorator, imperative Apex calls, and when to use each. Understand component communication patterns (@api, events, LMS)."},
      {icon:"🔄",title:"Governor Limits are Everywhere",body:"Memorize the key limits: 100 SOQL, 150 DML, 10MB heap, 60s CPU. Questions often involve identifying which limit would be hit."},
      {icon:"🚀",title:"Practice Deployment Scenarios",body:"Understand sandbox types (Developer, Partial, Full) and when change sets vs CLI are appropriate. Deployment failure scenarios appear on exam."}
    ]
  },

  "Platform Developer II": {
    questions: 60,
    time: 120,
    pass: 63,
    experience: "2+ years Salesforce development with deep Apex, LWC, and integration experience",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-platform-dev2---Plat-Dev-301",
    prerequisites: ["Platform Developer"],
    overview: "The Salesforce Platform Developer II certification validates advanced development skills including complex Apex patterns, Lightning Web Components architecture, performance optimization, and enterprise integration. This is one of the most challenging Salesforce certifications.",
        domains:[
      {name:"Advanced Developer Fundamentals",pct:15,color:"#00A1E0"},
      {name:"Process Automation, Logic, and Integration",pct:27,color:"#2ECC71"},
      {name:"User Interface",pct:20,color:"#F39C12"},
      {name:"Testing, Debugging, and Deployment",pct:20,color:"#E74C3C"},
      {name:"Performance",pct:18,color:"#9B59B6"},
    ],
    studyDays:[
      {tag:"advanced-apex",focus:"Advanced Apex patterns: design patterns, virtual/abstract classes, and interface hierarchies",topics:[
        {text:"Apex Design Patterns",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_patterns_intro.htm"},
        {text:"Abstract Classes and Virtual Methods",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_abstract.htm"},
        {text:"Singleton and Strategy Patterns in Apex",url:"https://trailhead.salesforce.com/content/learn/modules/apex_patterns_sl"},
        {text:"Apex Stub API for Mocking",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_testing_stub_api.htm"},
        {text:"Apex Metadata API (CDATA)",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_namespace_metadata.htm"},
        {text:"Platform Developer II Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Platform-Developer-II-Exam-Guide"}
      ]},
      {tag:"performance-apex",focus:"Write performant Apex: SOQL query optimization, bulkification, and selector patterns",topics:[
        {text:"Apex Performance Best Practices",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_perf_improve_intro.htm"},
        {text:"SOQL Selectivity",url:"https://developer.salesforce.com/docs/atlas.en-us.ldv_dev.meta/ldv_dev/ldv_elements_soql.htm"},
        {text:"Bulk Design Patterns",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_dml_bulk.htm"},
        {text:"SOQL For Loops to Avoid Heap",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_for_loops.htm"},
        {text:"Platform Cache Apex API",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_cache_namespace_overview.htm"},
        {text:"Custom Metadata for Configuration",url:"https://help.salesforce.com/s/articleView?id=sf.custommetadatatypes_overview.htm"}
      ]},
      {tag:"integration-advanced",focus:"Advanced integration: Platform Events, Change Data Capture, and Streaming API patterns",topics:[
        {text:"Platform Events Developer Guide",url:"https://developer.salesforce.com/docs/atlas.en-us.platform_events.meta/platform_events/platform_events_intro.htm"},
        {text:"Change Data Capture Guide",url:"https://developer.salesforce.com/docs/atlas.en-us.change_data_capture.meta/change_data_capture/cdc_intro.htm"},
        {text:"Streaming API Developer Guide",url:"https://developer.salesforce.com/docs/atlas.en-us.api_streaming.meta/api_streaming/intro_stream.htm"},
        {text:"Pub/Sub API (gRPC Streaming)",url:"https://developer.salesforce.com/docs/platform/pub-sub-api/guide/"},
        {text:"EventBus.publish() in Apex",url:"https://developer.salesforce.com/docs/atlas.en-us.platform_events.meta/platform_events/platform_events_publish_apex.htm"},
        {text:"CDC Event Replay and Retention",url:"https://developer.salesforce.com/docs/atlas.en-us.change_data_capture.meta/change_data_capture/cdc_event_delivery.htm"}
      ]},
      {tag:"lwc-advanced-ii",focus:"Advanced LWC: Lightning Message Service, NavigationMixin, and Aura interoperability",topics:[
        {text:"Lightning Message Service",url:"https://developer.salesforce.com/docs/platform/lwc/guide/messaging.html"},
        {text:"NavigationMixin",url:"https://developer.salesforce.com/docs/platform/lwc/guide/navigate-page-reference.html"},
        {text:"LWC and Aura Interoperability",url:"https://developer.salesforce.com/docs/platform/lwc/guide/migrate-map-aura-lwc-features.html"},
        {text:"LWC Dynamic Imports",url:"https://developer.salesforce.com/docs/platform/lwc/guide/dynamic-components.html"},
        {text:"LWC Accessibility Standards",url:"https://developer.salesforce.com/docs/platform/lwc/guide/accessibility.html"},
        {text:"LWC Performance Best Practices",url:"https://developer.salesforce.com/docs/platform/lwc/guide/performance.html"}
      ]},
      {tag:"visualforce-advanced",focus:"Advanced Visualforce: controllers, extensions, remoting, and StandardSetController",topics:[
        {text:"Visualforce Developer Guide",url:"https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/pages_intro_what_is_it.htm"},
        {text:"Custom Controllers",url:"https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/pages_controller_custom.htm"},
        {text:"Controller Extensions",url:"https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/pages_controller_extension.htm"},
        {text:"JavaScript Remoting",url:"https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/pages_js_remoting.htm"},
        {text:"StandardSetController for List Views",url:"https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/apex_pages_standardsetcontroller.htm"},
        {text:"Visualforce Security",url:"https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/pages_security_tips_xss.htm"}
      ]},
      {tag:"apex-superbadge",focus:"Practice complex Apex scenarios: trigger frameworks, service layers, and integration testing",topics:[
        {text:"Apex Specialist Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_apex"},
        {text:"Apex Integration Services Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_apex_int"},
        {text:"Apex Stub API Mocking",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_testing_stub_api.htm"},
        {text:"Apex Triggers Best Practices",url:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_trigger_bulkifying.htm"},
        {text:"Apex Service Layer Patterns",url:"https://trailhead.salesforce.com/content/learn/modules/apex_patterns_sl"},
        {text:"PDI Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-platform-developer-ii-credential"}
      ]},
      {tag:"exam-prep-pdii",focus:"PDII exam prep: scenario questions on advanced Apex, integration, and LWC",topics:[
        {text:"Platform Developer II Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Platform-Developer-II-Exam-Guide"},
        {text:"PDII Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-platform-developer-ii-credential"},
        {text:"Apex Advanced Patterns Module",url:"https://trailhead.salesforce.com/content/learn/modules/apex_patterns_sl"},
        {text:"Apex Testing Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_apex"},
        {text:"LWC Specialist Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_lwc_specialist"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-platform-dev2---Plat-Dev-211"}
      ]}
    ],
    quiz:[
      {domain:"Salesforce Fundamentals", q: "Which async Apex type supports chaining jobs and is best for sequenced processing?", a: "Queueable", options: ["@future", "Batch Apex", "Queueable", "Scheduled Apex"] },
      {domain:"Business Logic and Process Automation", q: "What is the maximum number of Batch Apex records processed per execute() method call?", a: "2000 (default 200)", options: ["200 (fixed)", "2000 (default 200)", "10000 (default 200)", "500 (fixed)"] },
      {domain:"User Interface", q: "Which LWC lifecycle hook fires after every render, including initial render?", a: "renderedCallback", options: ["connectedCallback", "renderCallback", "renderedCallback", "afterRender"] },
      {domain:"User Interface", q: "What is the purpose of Lightning Message Service (LMS)?", a: "To communicate between LWC, Aura, and Visualforce components across the DOM hierarchy", options: ["To send push notifications to users", "To communicate between LWC, Aura, and Visualforce components across the DOM hierarchy", "To call external REST APIs from components", "To handle error messaging in components"] },
      {domain:"Salesforce Fundamentals", q: "Which Apex keyword makes a class or method run in the context of the current user's sharing rules?", a: "with sharing", options: ["enforce sharing", "with sharing", "current user", "system context"] },
      {domain:"Salesforce Fundamentals", q: "What is SOQL injection and how is it prevented?", a: "A vulnerability from concatenating user input into SOQL strings; prevented with String.escapeSingleQuotes() or static queries", options: ["A SOQL error from nested queries; prevented by limiting query depth", "A vulnerability from concatenating user input into SOQL strings; prevented with String.escapeSingleQuotes() or static queries", "A governor limit issue; prevented with selective indexes", "A syntax error from unescaped characters; prevented by using bind variables only"] },
      {domain:"Business Logic and Process Automation", q: "Which method must be implemented in a class using the Database.Batchable interface?", a: "start(), execute(), finish()", options: ["execute(), complete()", "start(), execute(), finish()", "query(), process(), done()", "initialize(), run(), close()"] },
      {domain:"Salesforce Fundamentals", q: "What is the purpose of @TestSetup in an Apex test class?", a: "To create test data once before all test methods in the class, rolled back after each test", options: ["To configure the test environment for async tests", "To create test data once before all test methods in the class, rolled back after each test", "To mark a method to only run in sandbox environments", "To initialize mock callout responses"] },
      {domain:"User Interface", q: "In LWC, how does a child component expose a property for a parent to set?", a: "@api decorator on the property", options: ["@wire decorator on the property", "@api decorator on the property", "public keyword before the property", "dispatchEvent to the parent"] },
      {domain:"Testing, Debugging, and Deployment", q: "What does the StaticResourceCalloutMock class do in Apex testing?", a: "Simulates an HTTP callout response using data from a static resource file", options: ["Mocks database queries using static SOQL results", "Simulates an HTTP callout response using data from a static resource file", "Creates a mock for Platform Event publishing", "Simulates a Salesforce API response for integration tests"] },
      {domain:"Integration", q: "Which Platform Event feature allows a subscriber to receive events that occurred before they subscribed?", a: "Replay ID", options: ["Event Log", "Replay ID", "Durable Subscription", "Event Buffer"] },
      {domain:"Business Logic and Process Automation", q: "What is the purpose of the Database.Stateful interface in Batch Apex?", a: "To maintain instance variable values between execute() calls", options: ["To make batch jobs run synchronously", "To maintain instance variable values between execute() calls", "To enable chaining of batch jobs", "To store batch results in a custom object"] },
      {domain:"Salesforce Fundamentals", q: "Which SOQL syntax queries a polymorphic lookup field that can reference multiple object types?", a: "TYPEOF expression", options: ["POLYMORPHIC JOIN", "TYPEOF expression", "CAST AS syntax", "UNION query"] },
      {domain:"Integration", q: "What is the key difference between Platform Events and Custom Objects for event processing?", a: "Platform Events are published and consumed in near real-time without persistent storage (unless replay is used)", options: ["Platform Events require triggers; Custom Objects use flows", "Platform Events are published and consumed in near real-time without persistent storage (unless replay is used)", "Custom Objects support subscriptions; Platform Events do not", "Platform Events can only be published from Apex"] },
      {domain:"Testing, Debugging, and Deployment", q: "In SFDX, what command deploys metadata to an org using a package.xml manifest?", a: "sf project deploy start --manifest package.xml", options: ["sf org deploy --manifest package.xml", "sf project deploy start --manifest package.xml", "sf metadata:deploy --manifest package.xml", "sf deploy --target-org --manifest package.xml"] },
      {domain:"Salesforce Fundamentals", q: "Which sharing model in Apex allows a method to ignore the calling user's sharing rules?", a: "without sharing", options: ["system sharing", "without sharing", "no sharing", "global sharing"] },
      {domain:"Business Logic and Process Automation", q: "What is the purpose of the Selector layer in Apex Enterprise Patterns?", a: "To centralize all SOQL queries for a specific object in one class", options: ["To handle UI data binding", "To centralize all SOQL queries for a specific object in one class", "To manage DML operations in a transaction", "To define the object schema"] },
      {domain:"Integration", q: "How many synchronous Apex callouts can be made per transaction?", a: "100", options: ["10", "50", "100", "200"] },
      {domain:"User Interface", q: "Which LWC decorator makes a property reactive (triggers re-render when it changes)?", a: "@track (for objects/arrays) or any primitive property", options: ["@reactive", "@track (for objects/arrays) or any primitive property", "@observable", "@state"] },
      {domain:"Salesforce Fundamentals", q: "What is an Unlocked Package in Salesforce DX?", a: "A metadata package that enables modular development and versioned deployment independent of org configuration", options: ["A package that can be installed without a managed package license", "A metadata package that enables modular development and versioned deployment independent of org configuration", "A package type with no version control restrictions", "An open-source AppExchange package"] }
    ],
    tips:[
      "Master all async Apex types, their limits, and when to choose one over another — the exam heavily tests this.",
      "Know the Apex sharing model: with sharing, without sharing, inherited sharing, and their implications.",
      "Be fluent in LWC communication patterns: @api, CustomEvent, and Lightning Message Service.",
      "Understand the Apex Enterprise Patterns — FFLIB is a popular framework and exam questions reference its concepts.",
      "Practice identifying governor limit risks in code scenarios and know how to refactor them.",
      "Know all Batch Apex interface methods and when to use Database.Stateful.",
      "Understand Platform Events thoroughly: publish, subscribe, replay ID, and Change Data Capture.",
      "Know SOQL performance optimization: selective filters, indexes, and query plans."
    ]
  },

  "JavaScript Developer": {
    questions: 60,
    time: 105,
    pass: 65,
    experience: "1+ year JavaScript development with ES6+ and modern web development experience",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-javascript-dev---JS-Dev-101",
    prerequisites: [],
    overview: "The Salesforce JavaScript Developer I certification validates expertise in core JavaScript development on the Salesforce platform. Candidates demonstrate proficiency in ES6+, LWC, asynchronous patterns, testing, and debugging JavaScript applications.",
        domains:[
      {name:"Variables, Types, and Collections",pct:23,color:"#00A1E0"},
      {name:"Objects, Functions, and Classes",pct:25,color:"#2ECC71"},
      {name:"Browser and Events",pct:17,color:"#F39C12"},
      {name:"Debugging and Error Handling",pct:7,color:"#E74C3C"},
      {name:"Asynchronous Programming",pct:13,color:"#9B59B6"},
      {name:"Server Side JavaScript",pct:8,color:"#1ABC9C"},
      {name:"Testing",pct:7,color:"#E67E22"},
    ],
    studyDays:[
      {tag:"js-fundamentals",focus:"JavaScript fundamentals: scope, closures, prototypes, and ES6+ syntax",topics:[
        {text:"JavaScript Developer Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-JavaScript-Developer-I-Exam-Guide"},
        {text:"MDN JavaScript Guide",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"},
        {text:"ES6 Features Overview",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference"},
        {text:"Closures",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures"},
        {text:"Prototype Chain",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain"},
        {text:"Trailmix: JavaScript Developer I",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-javascript-developer-i-credential"}
      ]},
      {tag:"async-js",focus:"Asynchronous JavaScript: callbacks, Promises, async/await, and the event loop",topics:[
        {text:"Promises",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"},
        {text:"Async/Await",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function"},
        {text:"Event Loop",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop"},
        {text:"Fetch API",url:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},
        {text:"Error Handling in Promises",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises"},
        {text:"JavaScript Modules (import/export)",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"}
      ]},
      {tag:"dom-events",focus:"DOM manipulation, event handling, and browser APIs",topics:[
        {text:"DOM Introduction",url:"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction"},
        {text:"EventTarget.addEventListener",url:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"},
        {text:"Event Bubbling and Capturing",url:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events"},
        {text:"Web Storage API",url:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API"},
        {text:"Shadow DOM",url:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM"},
        {text:"Custom Elements",url:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements"}
      ]},
      {tag:"lwc-js",focus:"JavaScript in LWC: decorators, reactive properties, and JS module system",topics:[
        {text:"LWC JavaScript Overview",url:"https://developer.salesforce.com/docs/platform/lwc/guide/create-components.html"},
        {text:"@api, @track, @wire Decorators",url:"https://developer.salesforce.com/docs/platform/lwc/guide/create-components-data-binding.html"},
        {text:"LWC JavaScript Modules",url:"https://developer.salesforce.com/docs/platform/lwc/guide/js-api.html"},
        {text:"LWC Events and CustomEvent",url:"https://developer.salesforce.com/docs/platform/lwc/guide/events.html"},
        {text:"LWC Template Directives",url:"https://developer.salesforce.com/docs/platform/lwc/guide/reference-directives.html"},
        {text:"LWC Testing with Jest",url:"https://developer.salesforce.com/docs/platform/lwc/guide/testing-jest-introduction.html"}
      ]},
      {tag:"patterns-testing",focus:"JavaScript design patterns, unit testing with Jest, and debugging",topics:[
        {text:"Jest Getting Started",url:"https://jestjs.io/docs/getting-started"},
        {text:"LWC Jest Setup",url:"https://developer.salesforce.com/docs/platform/lwc/guide/testing-jest-installation.html"},
        {text:"Mocking in Jest",url:"https://jestjs.io/docs/mock-functions"},
        {text:"JavaScript Design Patterns",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"},
        {text:"Browser DevTools Debugging",url:"https://developer.chrome.com/docs/devtools/javascript/"},
        {text:"JavaScript Specialist Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_javascript_specialist"}
      ]},
      {tag:"exam-prep-jsdi",focus:"JavaScript Developer I exam prep: ES6+, async, DOM, LWC JS, and testing",topics:[
        {text:"JavaScript Developer I Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-JavaScript-Developer-I-Exam-Guide"},
        {text:"JavaScript Developer Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-javascript-developer-i-credential"},
        {text:"JavaScript Specialist Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_javascript_specialist"},
        {text:"MDN Web Docs JavaScript Reference",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference"},
        {text:"LWC Developer Guide",url:"https://developer.salesforce.com/docs/platform/lwc/guide/"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-javascript-dev1---JS-Dev-201"}
      ]}
    ],
    quiz:[
      {domain:"Debugging and Error Handling", q: "What is the output of: `console.log(typeof null)`?", a: "'object'", options: ["'null'", "'object'", "'undefined'", "'primitive'"] },
      {domain:"Variables, Data Types, and Collections", q: "Which variable declaration has block scope and cannot be reassigned?", a: "const", options: ["var", "let", "const", "static"] },
      {domain:"Objects, Functions, and Classes", q: "What does a closure capture?", a: "Variables from its outer (enclosing) scope", options: ["The return value of the outer function", "Variables from its outer (enclosing) scope", "A copy of the global scope at the time of creation", "Only the function's own local variables"] },
      {domain:"Variables, Data Types, and Collections", q: "What is the value of `this` inside an arrow function?", a: "The `this` value of the enclosing lexical context", options: ["The global object", "undefined", "The object that called the arrow function", "The `this` value of the enclosing lexical context"] },
      {domain:"Variables, Data Types, and Collections", q: "What does Array.prototype.reduce() return?", a: "A single accumulated value", options: ["A new array", "A single accumulated value", "A boolean", "The last element"] },
      {domain:"Browser and Events", q: "What is event bubbling?", a: "An event propagating up from the target element to ancestor elements", options: ["An event propagating down from the document to the target", "An event propagating up from the target element to ancestor elements", "An event that occurs repeatedly until stopped", "An event fired in a loop"] },
      {domain:"Asynchronous Programming", q: "What does Promise.all() do when one of the Promises rejects?", a: "The entire Promise.all() rejects immediately with that rejection reason", options: ["It skips the rejected promise and resolves with the rest", "The entire Promise.all() rejects immediately with that rejection reason", "It waits for all promises to settle before rejecting", "It resolves with undefined for the rejected promise"] },
      {domain:"Objects, Functions, and Classes", q: "Which keyword makes a function return a Promise implicitly?", a: "async", options: ["await", "async", "promise", "yield"] },
      {domain:"Objects, Functions, and Classes", q: "In JavaScript, what is the prototype chain used for?", a: "Property and method lookup on objects", options: ["Memory management and garbage collection", "Property and method lookup on objects", "Defining class hierarchies at compile time", "Managing function scope"] },
      {domain:"Variables, Data Types, and Collections", q: "What is the difference between == and === in JavaScript?", a: "=== checks value AND type (strict equality); == allows type coercion", options: ["== is for strings; === is for numbers", "=== checks value AND type (strict equality); == allows type coercion", "== checks reference equality; === checks value equality", "There is no difference in modern JavaScript"] },
      {domain:"Objects, Functions, and Classes", q: "What does the spread operator (...) do when used in a function call?", a: "Expands an iterable into individual arguments", options: ["Creates a rest parameter array", "Expands an iterable into individual arguments", "Creates a shallow copy of an object", "Merges two arrays"] },
      {domain:"Variables, Data Types, and Collections", q: "Which method checks if at least one element in an array satisfies a condition?", a: "Array.some()", options: ["Array.includes()", "Array.any()", "Array.some()", "Array.find()"] },
      {domain:"Asynchronous Programming", q: "What is the microtask queue in the JavaScript event loop?", a: "A queue for Promise callbacks that processes before the next task from the task queue", options: ["A priority queue for high-performance tasks", "A queue for Promise callbacks that processes before the next task from the task queue", "A queue for setTimeout callbacks under 1ms", "A browser API for managing asynchronous DOM updates"] },
      {domain:"Debugging and Error Handling", q: "How do you create a custom event in JavaScript that bubbles?", a: "new CustomEvent('eventName', { bubbles: true, detail: data })", options: ["new Event('eventName', true)", "new CustomEvent('eventName', { bubbles: true, detail: data })", "document.createEvent('CustomEvent', { bubbles: true })", "Event.create('eventName', { bubble: true })"] },
      {domain:"Variables, Data Types, and Collections", q: "What is the purpose of Symbol.iterator?", a: "To make an object iterable with for...of and spread syntax", options: ["To create unique property keys", "To make an object iterable with for...of and spread syntax", "To define object comparison behavior", "To mark an object as a generator"] },
      {domain:"Testing", q: "In Jest, what does jest.fn() create?", a: "A mock function that tracks calls and can define return values", options: ["A fake async function", "A mock function that tracks calls and can define return values", "A spy on an existing function", "A fake module import"] },
      {domain:"Variables, Data Types, and Collections", q: "What is the difference between call() and apply() in JavaScript?", a: "call() takes arguments individually; apply() takes arguments as an array", options: ["call() is synchronous; apply() is asynchronous", "call() takes arguments individually; apply() takes arguments as an array", "apply() changes `this`; call() does not", "There is no functional difference"] },
      {domain:"Asynchronous Programming", q: "What does the nullish coalescing operator (??) return?", a: "The right-hand value if the left-hand value is null or undefined", options: ["The right-hand value if the left-hand value is falsy", "The right-hand value if the left-hand value is null or undefined", "The truthy value between the two operands", "The first defined value in a chain"] },
      {domain:"Server-Side JavaScript", q: "Which ES6 feature allows importing only part of a module?", a: "Named imports: import { functionName } from 'module'", options: ["Partial imports: import partial('functionName') from 'module'", "Named imports: import { functionName } from 'module'", "Selective imports: import select(functionName) from 'module'", "Destructured imports: const { fn } = require('module')"] },
      {domain:"Variables, Data Types, and Collections", q: "What is the output of `[1,2,3].map(x => x * 2)`?", a: "[2, 4, 6]", options: ["6", "[1,2,3]", "[2, 4, 6]", "undefined"] }
    ],
    tips:[
      "Master `this` binding thoroughly — arrow functions vs. regular functions vs. call/apply/bind is heavily tested.",
      "Understand closures deeply: they capture variables from enclosing scope, not copies.",
      "Know the JavaScript event loop, task queue, and microtask queue — Promise timing questions depend on this.",
      "Practice all Promise combinators: Promise.all, allSettled, race, and any.",
      "Know event propagation: bubbling vs. capturing, stopPropagation(), and event delegation.",
      "Be fluent in ES6+ syntax: destructuring, spread, default parameters, template literals, modules.",
      "Understand the prototype chain and how property lookup traverses it.",
      "For Jest testing questions: know jest.fn(), jest.mock(), and how to test async code."
    ]
  },

  "OmniStudio Developer": {
    questions: 60,
    time: 105,
    pass: 63,
    experience: "6+ months developing with OmniStudio components (OmniScript, FlexCards, DataRaptors, Integration Procedures)",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-omnistudio-developer---Plat-Dev-210",
    prerequisites: ["Platform Developer"],
    overview: "The OmniStudio Developer certification validates expertise in developing digital engagement solutions using OmniStudio tools. Candidates demonstrate proficiency in OmniScript, FlexCards, DataRaptors, Integration Procedures, and the overall OmniStudio architecture.",
        domains:[
      {name:"Omnistudio Fundamentals",pct:18,color:"#00A1E0"},
      {name:"Flexcards",pct:15,color:"#2ECC71"},
      {name:"Omniscripts",pct:20,color:"#F39C12"},
      {name:"Integration Procedures",pct:15,color:"#E74C3C"},
      {name:"Data Mappers",pct:17,color:"#9B59B6"},
      {name:"Troubleshooting and Debugging",pct:15,color:"#1ABC9C"},
    ],
    studyDays:[
      {tag:"omnistudio-overview",focus:"OmniStudio architecture: FlexCards, OmniScripts, DataRaptors, and Integration Procedures",topics:[
        {text:"OmniStudio Overview",url:"https://help.salesforce.com/s/articleView?id=sf.os_omnistudio_overview.htm"},
        {text:"OmniStudio Developer Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-OmniStudio-Developer-Exam-Guide"},
        {text:"OmniStudio Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-omnistudio-developer-credential"},
        {text:"OmniStudio Architecture Trailhead",url:"https://trailhead.salesforce.com/content/learn/modules/omnistudio-architecture"},
        {text:"FlexCards Overview",url:"https://help.salesforce.com/s/articleView?id=sf.os_flexcards.htm"},
        {text:"OmniScript Overview",url:"https://help.salesforce.com/s/articleView?id=sf.os_omniscript.htm"}
      ]},
      {tag:"flexcards",focus:"Build FlexCards: data sources, actions, states, flyouts, and embedded components",topics:[
        {text:"FlexCards Developer Guide",url:"https://help.salesforce.com/s/articleView?id=sf.os_flexcards.htm"},
        {text:"FlexCard Data Sources",url:"https://help.salesforce.com/s/articleView?id=sf.os_flexcard_datasources.htm"},
        {text:"FlexCard Actions",url:"https://help.salesforce.com/s/articleView?id=sf.os_flexcard_actions.htm"},
        {text:"FlexCard States and Conditions",url:"https://help.salesforce.com/s/articleView?id=sf.os_flexcard_states.htm"},
        {text:"Flyout FlexCards",url:"https://help.salesforce.com/s/articleView?id=sf.os_flexcard_flyout.htm"},
        {text:"Nested FlexCards",url:"https://help.salesforce.com/s/articleView?id=sf.os_flexcard_parent_child.htm"}
      ]},
      {tag:"omniscript",focus:"Build OmniScripts: elements, branching logic, data actions, and script embeds",topics:[
        {text:"OmniScript Elements Reference",url:"https://help.salesforce.com/s/articleView?id=sf.os_omniscript_elements.htm"},
        {text:"OmniScript Branching and Conditions",url:"https://help.salesforce.com/s/articleView?id=sf.os_omniscript_conditions.htm"},
        {text:"OmniScript Data Actions",url:"https://help.salesforce.com/s/articleView?id=sf.os_omniscript_data_actions.htm"},
        {text:"OmniScript LWC Custom Elements",url:"https://help.salesforce.com/s/articleView?id=sf.os_custom_lwc_omniscript.htm"},
        {text:"OmniScript Debugging",url:"https://help.salesforce.com/s/articleView?id=sf.os_omniscript_debug.htm"},
        {text:"OmniScript Pubsub",url:"https://help.salesforce.com/s/articleView?id=sf.os_omniscript_pubsub.htm"}
      ]},
      {tag:"dataraptors",focus:"Design DataRaptors: Extract, Transform, Load, and Turbo Extract types",topics:[
        {text:"DataRaptor Overview",url:"https://help.salesforce.com/s/articleView?id=sf.os_dataraptor.htm"},
        {text:"DataRaptor Extract",url:"https://help.salesforce.com/s/articleView?id=sf.os_dataraptor_extract.htm"},
        {text:"DataRaptor Transform",url:"https://help.salesforce.com/s/articleView?id=sf.os_dataraptor_transform.htm"},
        {text:"DataRaptor Load",url:"https://help.salesforce.com/s/articleView?id=sf.os_dataraptor_load.htm"},
        {text:"DataRaptor Turbo Extract",url:"https://help.salesforce.com/s/articleView?id=sf.os_dataraptor_turbo_extract.htm"},
        {text:"DataRaptor Formula Functions",url:"https://help.salesforce.com/s/articleView?id=sf.os_dataraptor_formula.htm"}
      ]},
      {tag:"integration-procedures",focus:"Build Integration Procedures: HTTP actions, DataRaptor actions, and error handling",topics:[
        {text:"Integration Procedures Overview",url:"https://help.salesforce.com/s/articleView?id=sf.os_integration_procedure.htm"},
        {text:"HTTP Action in Integration Procedure",url:"https://help.salesforce.com/s/articleView?id=sf.os_integration_procedure_http.htm"},
        {text:"DataRaptor Action in IP",url:"https://help.salesforce.com/s/articleView?id=sf.os_integration_procedure_dataraptor.htm"},
        {text:"Integration Procedure Error Handling",url:"https://help.salesforce.com/s/articleView?id=sf.os_integration_procedure_error.htm"},
        {text:"Apex Remote Action in IP",url:"https://help.salesforce.com/s/articleView?id=sf.os_integration_procedure_apex.htm"},
        {text:"Response Action and Chaining",url:"https://help.salesforce.com/s/articleView?id=sf.os_integration_procedure_response.htm"}
      ]},
      {tag:"exam-prep-omni",focus:"OmniStudio Developer exam prep: FlexCards, OmniScript, DataRaptor, and Integration Procedure scenarios",topics:[
        {text:"OmniStudio Developer Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-OmniStudio-Developer-Exam-Guide"},
        {text:"OmniStudio Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-omnistudio-developer-credential"},
        {text:"OmniStudio Help Documentation",url:"https://help.salesforce.com/s/articleView?id=sf.os_omnistudio_overview.htm"},
        {text:"OmniStudio Developer Trailhead Module",url:"https://trailhead.salesforce.com/content/learn/modules/omnistudio-developer"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-omnistudio-dev---OmniS-Dev-201"},
        {text:"OmniStudio Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_omnistudio"}
      ]}
    ],
    quiz:[
      {domain:"DataRaptors", q: "Which DataRaptor type performs the fastest reads from Salesforce?", a: "Turbo Extract", options: ["Extract", "Transform", "Turbo Extract", "Load"] },
      {domain:"Integration Procedures", q: "What is the primary purpose of an OmniScript Integration Procedure action?", a: "To call a server-side Integration Procedure to retrieve or process data", options: ["To navigate to another OmniScript step", "To call a server-side Integration Procedure to retrieve or process data", "To load data from a DataRaptor directly", "To send an HTTP request to an external API"] },
      {domain:"OmniStudio Fundamentals", q: "In OmniStudio, which component is primarily used for displaying record data in a card format on a page layout?", a: "FlexCard", options: ["OmniScript", "FlexCard", "DataRaptor", "Integration Procedure"] },
      {domain:"OmniScript", q: "Which OmniScript element type is used to display read-only text with merge field data?", a: "Text Block", options: ["Text", "Display Only", "Text Block", "HTML Block"] },
      {domain:"DataRaptors", q: "What DataRaptor type is used to create or update records in Salesforce?", a: "Load", options: ["Extract", "Transform", "Load", "Upsert"] },
      {domain:"Integration Procedures", q: "In an Integration Procedure, which element type is used to iterate over a collection of items?", a: "Loop Block", options: ["For Each", "Loop Block", "Collection Iterator", "Repeat Step"] },
      {domain:"Integration Procedures", q: "What is the purpose of the 'Set Values' element in an Integration Procedure?", a: "To set, transform, or calculate values within the Integration Procedure data model", options: ["To save data to a Salesforce object", "To set, transform, or calculate values within the Integration Procedure data model", "To define HTTP request parameters", "To configure DataRaptor input parameters"] },
      {domain:"Integration Procedures", q: "How does an OmniScript pass data to an Integration Procedure action?", a: "Through the OmniScript JSON data model (input map)", options: ["Through URL parameters", "Through the OmniScript JSON data model (input map)", "Through a shared session variable", "Through a DataRaptor intermediate layer"] },
      {domain:"FlexCards", q: "Which FlexCard feature allows different UI layouts based on record field values?", a: "Card States", options: ["Conditional Templates", "Card States", "Dynamic Layouts", "View Modes"] },
      {domain:"DataRaptors", q: "What is the key limitation of DataRaptor Turbo Extract compared to standard Extract?", a: "It can only query a single object with no relationship traversal", options: ["It cannot use SOQL filters", "It can only query a single object with no relationship traversal", "It does not support picklist fields", "It requires Apex to execute"] },
      {domain:"OmniScript", q: "In OmniScript, what does the 'Conditional View' property control?", a: "Whether an element is visible to the user based on a condition", options: ["Whether a step is skipped during navigation", "Whether an element is visible to the user based on a condition", "Whether a field is required based on another field's value", "Whether an action runs conditionally"] },
      {domain:"Integration Procedures", q: "Which OmniScript action type is used to call an external REST API?", a: "HTTP Action", options: ["Remote Action", "External Action", "HTTP Action", "API Call"] },
      {domain:"DataRaptors", q: "What is the role of a DataRaptor Transform in the OmniStudio architecture?", a: "To reshape, calculate, or reformat JSON data without making Salesforce DML calls", options: ["To replace a DataRaptor Extract for faster data retrieval", "To reshape, calculate, or reformat JSON data without making Salesforce DML calls", "To transform Salesforce data into external API format", "To validate data before a DataRaptor Load"] },
      {domain:"FlexCards", q: "In FlexCards, what type of action opens a full OmniScript in a modal overlay?", a: "OmniScript Action (Modal)", options: ["Flyout Action", "OmniScript Action (Modal)", "Navigate Action", "Embedded Action"] },
      {domain:"OmniScript", q: "How is OmniScript data structured?", a: "As a hierarchical JSON object", options: ["As a flat key-value map", "As a SQL-like table structure", "As a hierarchical JSON object", "As an XML document"] },
      {domain:"Integration Procedures", q: "Which Integration Procedure element type is used to make a DataRaptor call?", a: "DataRaptor Action", options: ["DataRaptor Call", "DataRaptor Action", "DataRaptor Step", "Execute DataRaptor"] },
      {domain:"OmniScript", q: "What is the purpose of OmniScript Preview mode?", a: "To test an OmniScript without deploying it, using sample data", options: ["To publish an OmniScript to end users", "To test an OmniScript without deploying it, using sample data", "To view the OmniScript JSON source code", "To simulate an OmniScript in multiple languages"] },
      {domain:"OmniStudio Fundamentals", q: "Which OmniStudio component orchestrates multiple server-side calls and data transformations?", a: "Integration Procedure", options: ["DataRaptor Transform", "Integration Procedure", "OmniScript Server Action", "FlexCard Datasource"] },
      {domain:"Integration Procedures", q: "What must be true about an OmniScript element's API name for it to save data to the JSON node?", a: "It must match the desired key in the JSON data model", options: ["It must start with 'OmniScript_'", "It must match the Salesforce field API name exactly", "It must match the desired key in the JSON data model", "It must be in camelCase format"] },
      {domain:"OmniStudio Fundamentals", q: "Which feature in OmniStudio allows developers to extend a standard OmniStudio LWC with custom logic?", a: "LWC Override", options: ["Custom LWC Plugin", "LWC Override", "Component Injection", "OmniStudio Extension API"] }
    ],
    tips:[
      "Memorize the four DataRaptor types and their specific use cases — this is fundamental to every OmniStudio question.",
      "Know the difference between when to use an OmniScript action vs. a DataRaptor directly vs. an Integration Procedure.",
      "Understand how the OmniScript JSON data model works — data flows, nodes, and merge fields.",
      "Know Integration Procedure element types: DataRaptor Action, HTTP Action, Set Values, Loop Block, Conditional Step.",
      "Understand FlexCard states and when to use different card views for different data conditions.",
      "Know the limitations of Turbo Extract vs. standard Extract — single object, no relationships.",
      "Practice using the debug console in both Integration Procedures and DataRaptors.",
      "Understand how FlexCards use datasources (SOQL, DataRaptor, Integration Procedure) and when to choose each."
    ]
  },

  "Industries CPQ Developer": {
    questions: 60,
    time: 105,
    pass: 65,
    experience: "1+ year developing with Salesforce Industries CPQ (Vlocity CPQ) for telecommunications or other industries",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-industries-cpq---Ind-Dev-201",
    prerequisites: ["Platform Developer"],
    overview: "The Industries CPQ Developer certification validates expertise in developing and configuring the Salesforce Industries CPQ solution (formerly Vlocity CPQ). Candidates demonstrate proficiency in catalog management, pricing, OmniStudio integration, and CPQ customization for complex industry use cases.",
        domains:[
      {name:"Products",pct:20,color:"#00A1E0"},
      {name:"Promotions and Discounts",pct:7,color:"#2ECC71"},
      {name:"Pricing",pct:17,color:"#F39C12"},
      {name:"Ordering and Quoting",pct:12,color:"#E74C3C"},
      {name:"Troubleshooting",pct:20,color:"#9B59B6"},
    ],
    studyDays:[
      {tag:"industries-cpq-overview",focus:"Industries CPQ architecture: product catalog, pricing, orders, and the Quote object",topics:[
        {text:"Industries CPQ Developer Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Industries-CPQ-Developer-Exam-Guide"},
        {text:"Industries CPQ Overview",url:"https://help.salesforce.com/s/articleView?id=ind.comms_cpq_overview.htm"},
        {text:"Industries CPQ Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-industries-cpq-developer"},
        {text:"Product Catalog Setup",url:"https://help.salesforce.com/s/articleView?id=ind.comms_cpq_product_catalog.htm"},
        {text:"Price List and Pricing Rules",url:"https://help.salesforce.com/s/articleView?id=ind.comms_cpq_pricing.htm"},
        {text:"Offer Setup",url:"https://help.salesforce.com/s/articleView?id=ind.comms_cpq_offer.htm"}
      ]},
      {tag:"cpq-customization",focus:"Customize Industries CPQ with Apex, OmniStudio, and custom pricing logic",topics:[
        {text:"Apex Customization for Industries CPQ",url:"https://help.salesforce.com/s/articleView?id=ind.comms_cpq_apex.htm"},
        {text:"OmniStudio in Industries CPQ",url:"https://help.salesforce.com/s/articleView?id=ind.comms_cpq_omnistudio.htm"},
        {text:"Custom Pricing Logic",url:"https://help.salesforce.com/s/articleView?id=ind.comms_cpq_custom_pricing.htm"},
        {text:"Validation Rules for CPQ Objects",url:"https://help.salesforce.com/s/articleView?id=ind.comms_cpq_validation.htm"},
        {text:"Industries CPQ APIs",url:"https://developer.salesforce.com/docs/atlas.en-us.industries_reference.meta/industries_reference/"},
        {text:"CPQ Order Orchestration",url:"https://help.salesforce.com/s/articleView?id=ind.comms_cpq_order.htm"}
      ]},
      {tag:"exam-prep-icpq",focus:"Industries CPQ Developer exam prep: product catalog, pricing, and customization scenarios",topics:[
        {text:"Industries CPQ Developer Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Industries-CPQ-Developer-Exam-Guide"},
        {text:"Industries CPQ Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-industries-cpq-developer"},
        {text:"Industries CPQ Documentation",url:"https://help.salesforce.com/s/articleView?id=ind.comms_cpq_overview.htm"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-ind-cpq-dev---Ind-CPQ-Dev-201"},
        {text:"Industries CPQ Developer Module",url:"https://trailhead.salesforce.com/content/learn/modules/industries-cpq-developer"},
        {text:"Industries CPQ Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_industries_cpq"}
      ]}
    ],
    quiz:[
      {domain:"Industries CPQ Fundamentals", q: "What is the top-level product structure in Industries CPQ's catalog?", a: "Offer", options: ["Product", "Bundle", "Offer", "Product Family"] },
      {domain:"OmniStudio and CPQ Integration", q: "Which Industries CPQ feature automatically applies rules based on contextual data like customer segment?", a: "Context Framework", options: ["Compatibility Rules", "Attribute Rules", "Context Framework", "Pricing Rules"] },
      {domain:"Pricing", q: "What type of charge in Industries CPQ represents an ongoing monthly fee?", a: "Recurring Charge", options: ["One-Time Charge", "Recurring Charge", "Usage Charge", "Subscription Fee"] },
      {domain:"Industries CPQ Fundamentals", q: "Which OmniStudio component is primarily used to build guided selling flows in Industries CPQ?", a: "OmniScript", options: ["FlexCard", "OmniScript", "Integration Procedure", "DataRaptor"] },
      {domain:"Industries CPQ Fundamentals", q: "What is a Compatibility Rule used for in Industries CPQ?", a: "To enforce inclusion/exclusion constraints between products in a cart", options: ["To calculate dynamic prices based on attributes", "To enforce inclusion/exclusion constraints between products in a cart", "To define attribute dependencies", "To set discount approval thresholds"] },
      {domain:"Cart and Order Management", q: "Which Industries CPQ object stores the current state of a customer's product selection before ordering?", a: "Cart", options: ["Opportunity", "Cart", "Quote", "Product Order"] },
      {domain:"Industries CPQ Fundamentals", q: "What is the purpose of Attribute-Based Configuration in Industries CPQ?", a: "To allow product customization through configurable options that influence pricing and compatibility", options: ["To define fixed product variants", "To allow product customization through configurable options that influence pricing and compatibility", "To configure OmniScript element properties", "To set up product catalog hierarchy"] },
      {domain:"Catalog Management", q: "Which DataRaptor type would you use to retrieve product catalog data for display in a FlexCard?", a: "Extract or Turbo Extract", options: ["Load", "Transform", "Extract or Turbo Extract", "Composite Extract"] },
      {domain:"Industries CPQ Fundamentals", q: "In Industries CPQ, what does 'Effective Dating' allow?", a: "Scheduling price or catalog changes to take effect at a future date", options: ["Tracking when a cart was last modified", "Scheduling price or catalog changes to take effect at a future date", "Setting expiration dates on promotional offers", "Logging when a product was last purchased"] },
      {domain:"Cart and Order Management", q: "Which cart lifecycle state means the cart has been reviewed and is ready for order submission?", a: "Approved", options: ["Validated", "Reviewed", "Approved", "Finalized"] },
      {domain:"Pricing", q: "What Industries CPQ feature enables tiered pricing based on the quantity ordered?", a: "Volume Pricing", options: ["Tier Discount", "Volume Pricing", "Quantity Pricing Rule", "Bulk Pricing Plan"] },
      {domain:"Pricing", q: "How does Industries CPQ integrate with Salesforce Order Management for fulfillment?", a: "Submitted cart data is converted to an Order object with corresponding Order Products", options: ["Cart data is exported to an external fulfillment system via API", "Submitted cart data is converted to an Order object with corresponding Order Products", "A Platform Event triggers the fulfillment workflow", "The cart is cloned as an Order automatically"] },
      {domain:"Pricing", q: "Which Integration Procedure action type is used to call an external pricing engine?", a: "HTTP Action", options: ["DataRaptor Action", "HTTP Action", "Remote Apex Action", "External Service Action"] },
      {domain:"Pricing", q: "What is a Pricing Plan in Industries CPQ?", a: "A container for pricing elements that defines how charges are calculated for a product", options: ["A list of discounts available for an account", "A container for pricing elements that defines how charges are calculated for a product", "A schedule of when prices change over a subscription term", "A set of promotional codes for a campaign"] },
      {domain:"Customization and Extensibility", q: "In Industries CPQ, what triggers a catalog publish event?", a: "When a catalog version transitions from draft to active/published state", options: ["When a new product is added to the catalog", "When a catalog version transitions from draft to active/published state", "When a cart references catalog items for the first time", "When a product's price changes"] },
      {domain:"Industries CPQ Fundamentals", q: "Which Industries CPQ component governs what products are visible to a specific customer based on their profile?", a: "Context Rules", options: ["Entitlement Rules", "Context Rules", "Product Visibility Rules", "Customer Profile Filters"] },
      {domain:"Catalog Management", q: "What type of object represents a specific configuration of a product (e.g., a specific data plan with specific attributes)?", a: "Product Specification", options: ["Product Instance", "Product Specification", "Product Configuration", "Configured Offer"] },
      {domain:"Industries CPQ Fundamentals", q: "Which OmniStudio Integration Procedure element allows you to run multiple actions in parallel?", a: "There is no native parallel execution — steps run sequentially", options: ["Parallel Block", "Async Step", "There is no native parallel execution — steps run sequentially", "Concurrent Action"] },
      {domain:"Industries CPQ Fundamentals", q: "What Industries CPQ API operation is called to initiate price recalculation after changing cart items?", a: "Calculate Prices API", options: ["Refresh Cart API", "Calculate Prices API", "Update Line Items API", "Recompute Charges API"] },
      {domain:"Customization and Extensibility", q: "Which Apex extension point in Industries CPQ allows custom pricing logic to override calculated prices?", a: "CPQ Pricing Apex Plugin", options: ["Custom Pricing Rule Class", "CPQ Pricing Apex Plugin", "Override Pricing Trigger", "Cart Price Apex Handler"] }
    ],
    tips:[
      "Understand the catalog hierarchy: Product Family → Product → Offer → Bundle — and each object's role.",
      "Know the Context Framework thoroughly — it's a unique feature of Industries CPQ not found in standard CPQ.",
      "Understand all charge types (one-time, recurring, usage) and how they appear in the cart.",
      "Be able to explain the cart lifecycle states and when transitions occur.",
      "Know how OmniScript and Integration Procedures interact with CPQ APIs for guided selling.",
      "Understand compatibility rules vs. attribute rules — different purposes, different configurations.",
      "Know effective dating — managing catalog and price version validity is heavily tested.",
      "Be familiar with Apex extension points for custom pricing logic."
    ]
  },

  "B2C Commerce Cloud Developer": {
    questions: 60,
    time: 105,
    pass: 67,
    experience: "1+ year developing on Salesforce B2C Commerce (formerly Demandware) platform",
    trailheadUrl: "https://trailhead.salesforce.com/credentials/b2ccommerceclouddev",
    prerequisites: [],
    overview: "The Salesforce B2C Commerce Developer certification validates technical expertise in developing e-commerce storefronts on the Salesforce B2C Commerce platform. Candidates demonstrate proficiency in SFRA, cartridges, pipelines, controllers, templates, and API integration.",
        domains:[
      {name:"B2C Commerce Setup",pct:11,color:"#00A1E0"},
      {name:"Work With a B2C Site",pct:12,color:"#2ECC71"},
      {name:"Data Management Using Business Manager Usage",pct:24,color:"#F39C12"},
      {name:"Application Development",pct:53,color:"#E74C3C"},
    ],
    studyDays:[
      {tag:"b2c-dev-setup",focus:"Set up B2C Commerce developer environment: Business Manager, sandbox, and code upload",topics:[
        {text:"B2C Commerce Developer Guide",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/"},
        {text:"B2C Commerce Developer Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-B2C-Commerce-Developer-Exam-Guide"},
        {text:"Business Manager Overview",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/business-manager.html"},
        {text:"B2C Commerce Dev Setup Trailhead",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/b2c-commerce-developer"},
        {text:"B2C Commerce VS Code Extension",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/vscode-extension.html"},
        {text:"Uploading Cartridges to Sandbox",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/cartridges.html"}
      ]},
      {tag:"sfra-development",focus:"Develop with SFRA: controllers, routes, templates, and client-side rendering",topics:[
        {text:"SFRA Developer Guide",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/sfra.html"},
        {text:"SFRA Controllers and Routes",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/controllers-routes.html"},
        {text:"ISML Templates",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/isml-overview.html"},
        {text:"SFRA Client-Side JavaScript",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/frontend-development.html"},
        {text:"SFRA Forms",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/forms.html"},
        {text:"Extending SFRA Cartridges",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/extend-sfra.html"}
      ]},
      {tag:"b2c-apis",focus:"Use B2C Commerce APIs: Shop API, Data API, and SCAPI (Shopper APIs)",topics:[
        {text:"Salesforce Commerce API (SCAPI)",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/scapi.html"},
        {text:"Shop API Reference",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/references/"},
        {text:"Data API Reference",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/references/"},
        {text:"SLAS Authentication",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/slas.html"},
        {text:"Open Commerce API (OCAPI)",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/ocapi-usage.html"},
        {text:"API Explorer",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/"}
      ]},
      {tag:"b2c-hooks-scripts",focus:"B2C Commerce hooks, scripts, job framework, and Business Manager extensions",topics:[
        {text:"B2C Commerce Hooks",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/hooks.html"},
        {text:"Script API Reference",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/references/"},
        {text:"Job Framework",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/jobs-framework.html"},
        {text:"Business Manager Modules",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/business-manager.html"},
        {text:"Pipeline Debugging in B2C",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/debugging.html"},
        {text:"Log Center",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/log-center.html"}
      ]},
      {tag:"exam-prep-b2c-dev",focus:"B2C Commerce Developer exam prep: SFRA, APIs, hooks, and Business Manager",topics:[
        {text:"B2C Commerce Developer Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-B2C-Commerce-Developer-Exam-Guide"},
        {text:"B2C Commerce Developer Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/b2c-commerce-developer"},
        {text:"B2C Commerce Developer Guide",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/"},
        {text:"SFRA Reference",url:"https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/sfra.html"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-b2c-comm-dev---B2C-Dev-201"},
        {text:"B2C Commerce Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_b2c_cc_developer"}
      ]}
    ],
    quiz:[
      {domain:"SFRA (Storefront Reference Architecture)", q: "In SFRA, which method adds additional functionality to an existing route without replacing it?", a: "server.append()", options: ["server.extend()", "server.append()", "server.prepend()", "server.override()"] },
      {domain:"Cartridge Development", q: "What is the purpose of the cartridge path in B2C Commerce?", a: "To define the order in which cartridges are searched for resources", options: ["To set the URL path for the storefront", "To define the order in which cartridges are searched for resources", "To configure the CDN routing rules", "To set the deployment order for cartridges"] },
      {domain:"Business Manager", q: "Which B2C Commerce product type represents a parent product with multiple color/size variations?", a: "Variation Master", options: ["Product Set", "Variation Master", "Product Bundle", "Master Product Group"] },
      {domain:"SFRA (Storefront Reference Architecture)", q: "What is ISML used for in B2C Commerce?", a: "Server-side templating for rendering HTML pages", options: ["Defining product catalog structures", "Server-side templating for rendering HTML pages", "Writing business logic in Business Manager", "Configuring API endpoints"] },
      {domain:"SFRA (Storefront Reference Architecture)", q: "Which SFRA method completely replaces an existing route handler?", a: "server.replace()", options: ["server.override()", "server.replace()", "server.swap()", "server.rewrite()"] },
      {domain:"Commerce Cloud Fundamentals", q: "What does the SLAS (Shopper Login and API Access Service) provide in SCAPI?", a: "Authentication tokens for Shopper API access", options: ["A storefront login page template", "Authentication tokens for Shopper API access", "Single sign-on for Business Manager", "API rate limiting configuration"] },
      {domain:"Business Manager", q: "In B2C Commerce, what is a Content Slot?", a: "A configurable area on a page that can display different content based on scheduling or A/B testing", options: ["A template placeholder for product images", "A configurable area on a page that can display different content based on scheduling or A/B testing", "A CDN-cached resource block", "A region reserved for paid advertising"] },
      {domain:"Commerce Cloud Fundamentals", q: "Which B2C Commerce object is used to manage an active shopping session before checkout?", a: "Basket", options: ["Cart", "Basket", "Order", "ShoppingSession"] },
      {domain:"Cartridge Development", q: "What is the purpose of the package.json file in an SFRA cartridge?", a: "To define cartridge metadata including name, version, and hook registrations", options: ["To manage npm dependencies for the cartridge", "To define cartridge metadata including name, version, and hook registrations", "To configure site preferences for the cartridge", "To list all ISML templates in the cartridge"] },
      {domain:"Commerce Cloud Fundamentals", q: "Which B2C Commerce API is used for storefront customer-facing operations (browse, cart, checkout)?", a: "Shop API (OCAPI) or Shopper APIs (SCAPI)", options: ["Data API", "Admin API", "Shop API (OCAPI) or Shopper APIs (SCAPI)", "Management API"] },
      {domain:"Performance and Caching", q: "What type of caching is managed by Akamai/CDN in B2C Commerce?", a: "Page-level caching for static and semi-static pages", options: ["Database query caching", "Page-level caching for static and semi-static pages", "Session data caching", "Product catalog caching"] },
      {domain:"Commerce Cloud Fundamentals", q: "In SFRA, what does the ViewData object contain?", a: "Data passed from the controller to the template for rendering", options: ["Request parameters from the shopper's browser", "Data passed from the controller to the template for rendering", "Commerce Cloud API authentication credentials", "Business Manager configuration settings"] },
      {domain:"Integrations", q: "Which B2C Commerce approach is used for integrating third-party payment processors?", a: "Payment Processor hooks and custom payment form actions", options: ["Direct API calls in ISML templates", "Payment Processor hooks and custom payment form actions", "Business Manager payment settings only", "OCAPI payment endpoint override"] },
      {domain:"Cartridge Development", q: "What is the main purpose of B2C Commerce Custom Objects?", a: "To store custom data that doesn't fit into standard system objects", options: ["To override the behavior of system objects", "To store custom data that doesn't fit into standard system objects", "To create custom product types", "To store temporary session data"] },
      {domain:"Performance and Caching", q: "In SiteGenesis, what is a Pipeline?", a: "A visual workflow that defines request handling logic using connected nodes (pipelets)", options: ["A server-side data processing queue", "A visual workflow that defines request handling logic using connected nodes (pipelets)", "A CI/CD deployment pipeline for code changes", "A cached data feed for product updates"] },
      {domain:"Commerce Cloud Fundamentals", q: "Which SFRA file is responsible for defining how modules are resolved in require() calls?", a: "package.json (main field and module aliases)", options: ["cartridge.properties", "package.json (main field and module aliases)", "webpack.config.js", "require.config.js"] },
      {domain:"Business Manager", q: "What Business Manager tool is used to configure A/B tests on content slots?", a: "Content Slot Configuration with multiple content variations and scheduling", options: ["A/B Testing Manager", "Content Slot Configuration with multiple content variations and scheduling", "Campaign Manager", "Personalization Rules"] },
      {domain:"Cartridge Development", q: "Which B2C Commerce feature is used to configure site-wide or feature-specific settings accessible in scripts?", a: "Site Preferences (custom and system)", options: ["Environment Variables", "Site Preferences (custom and system)", "Config Files in Cartridge", "Business Manager Global Settings"] },
      {domain:"Cartridge Development", q: "What B2C Commerce log type captures all HTTP requests and responses for debugging?", a: "Request Log", options: ["Debug Log", "Request Log", "Access Log", "API Trace Log"] },
      {domain:"SFRA (Storefront Reference Architecture)", q: "In B2C Commerce SFRA, what is the purpose of a 'middleware' function in a route definition?", a: "A function in the route chain that processes the request and can pass control to the next function", options: ["A proxy server between the CDN and the storefront", "A function in the route chain that processes the request and can pass control to the next function", "A caching layer for ISML template rendering", "A security filter for API requests"] }
    ],
    tips:[
      "Understand SFRA's route extension methods: append, prepend, replace — this is fundamental to cartridge development.",
      "Know the cartridge path and how override resolution works across multiple cartridges.",
      "Understand all B2C Commerce product types and when to use each (variation master, bundle, set).",
      "Know the difference between OCAPI and SCAPI and when each is used.",
      "Understand B2C Commerce caching layers: page cache, slot cache, and component cache.",
      "Know Content Slots thoroughly — configuration, scheduling, and A/B testing options.",
      "Be able to explain the SFRA MVC pattern: controller → model/viewmodel → ISML template.",
      "Know B2C Commerce hooks and how they extend order and payment processing."
    ]
  },

  "MuleSoft Developer": {
    questions: 60,
    time: 120,
    pass: 70,
    experience: "1+ year developing integration solutions with MuleSoft Anypoint Platform",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-mule-dev---Mule-Dev-201",
    prerequisites: [],
    overview: "The MuleSoft Certified Developer - Level 1 certification validates the ability to build Mule applications using Anypoint Studio. Candidates demonstrate proficiency in Mule 4 runtime, core components, connectors, DataWeave, error handling, and API design.",
        domains:[
      {name:"Designing APIs",pct:8,color:"#00A1E0"},
      {name:"Accessing and Modifying Mule Events",pct:10,color:"#2ECC71"},
      {name:"Structuring Mule Applications",pct:10,color:"#F39C12"},
      {name:"Building API Implementation Interfaces",pct:7,color:"#E74C3C"},
      {name:"Using Connectors",pct:10,color:"#9B59B6"},
      {name:"Processing Records",pct:10,color:"#1ABC9C"},
      {name:"Transforming Data",pct:10,color:"#E67E22"},
      {name:"Routing Events",pct:8,color:"#3498DB"},
      {name:"Handling Errors",pct:8,color:"#E91E63"},
      {name:"Debugging and Troubleshooting Mule Applications",pct:5,color:"#607D8B"},
      {name:"Deploying and Managing APIs and Integrations",pct:7,color:"#795548"},
    ],
    studyDays:[
      {tag:"mule4-basics",focus:"Mule 4 development fundamentals: flows, connectors, and the Mule event model",topics:[
        {text:"MuleSoft Developer Exam Guide",url:"https://trailhead.salesforce.com/help?article=MuleSoft-Certified-Developer-Level-1-Exam-Guide"},
        {text:"Mule 4 Developer Guide",url:"https://docs.mulesoft.com/mule-runtime/latest/"},
        {text:"Mule Event Model",url:"https://docs.mulesoft.com/mule-runtime/latest/about-mule-event"},
        {text:"Anypoint Studio Setup",url:"https://docs.mulesoft.com/studio/latest/"},
        {text:"Core Components Overview",url:"https://docs.mulesoft.com/mule-runtime/latest/about-components"},
        {text:"Developer Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/mulesoft-certified-developer-1"}
      ]},
      {tag:"dataweave-dev",focus:"DataWeave 2.0 fundamentals: syntax, selectors, built-in functions, and transformations",topics:[
        {text:"DataWeave Language Guide",url:"https://docs.mulesoft.com/dataweave/latest/"},
        {text:"DataWeave Selectors",url:"https://docs.mulesoft.com/dataweave/latest/dataweave-selectors"},
        {text:"DataWeave Core Functions",url:"https://docs.mulesoft.com/dataweave/latest/dw-core"},
        {text:"DataWeave Cookbook",url:"https://docs.mulesoft.com/dataweave/latest/dataweave-cookbook"},
        {text:"DataWeave Playground",url:"https://dataweave.mulesoft.com/learn/playground"},
        {text:"DataWeave Format Support",url:"https://docs.mulesoft.com/dataweave/latest/dataweave-formats"}
      ]},
      {tag:"connectors-flows",focus:"Use Anypoint connectors: HTTP, Database, Salesforce, File, and JMS",topics:[
        {text:"HTTP Connector",url:"https://docs.mulesoft.com/http-connector/latest/"},
        {text:"Database Connector",url:"https://docs.mulesoft.com/db-connector/latest/"},
        {text:"Salesforce Connector",url:"https://docs.mulesoft.com/salesforce-connector/latest/"},
        {text:"File Connector",url:"https://docs.mulesoft.com/file-connector/latest/"},
        {text:"JMS Connector",url:"https://docs.mulesoft.com/jms-connector/latest/"},
        {text:"Anypoint Connector DevKit Overview",url:"https://docs.mulesoft.com/connector-devkit/latest/"}
      ]},
      {tag:"error-handling-mule",focus:"Error handling in Mule 4: On Error Continue, On Error Propagate, and retry logic",topics:[
        {text:"Error Handling in Mule 4",url:"https://docs.mulesoft.com/mule-runtime/latest/error-handling"},
        {text:"On Error Continue vs Propagate",url:"https://docs.mulesoft.com/mule-runtime/latest/on-error-scope-concept"},
        {text:"Error Types and Hierarchy",url:"https://docs.mulesoft.com/mule-runtime/latest/mule-error-concept"},
        {text:"Until Successful Scope",url:"https://docs.mulesoft.com/mule-runtime/latest/until-successful-scope"},
        {text:"Redelivery Policy",url:"https://docs.mulesoft.com/mule-runtime/latest/redelivery-policy"},
        {text:"Try Scope",url:"https://docs.mulesoft.com/mule-runtime/latest/try-scope-concept"}
      ]},
      {tag:"api-design-mule",focus:"Design and implement REST APIs with RAML in Anypoint Design Center",topics:[
        {text:"Design Center API Designer",url:"https://docs.mulesoft.com/design-center/design-create-publish-api-specs"},
        {text:"RAML 1.0 Specification",url:"https://github.com/raml-org/raml-spec/blob/master/versions/raml-10/raml-10.md"},
        {text:"APIkit Router",url:"https://docs.mulesoft.com/apikit/latest/"},
        {text:"Implementing a RAML API in Studio",url:"https://docs.mulesoft.com/apikit/latest/apikit-4-implement-rest-api"},
        {text:"Mocking with Design Center",url:"https://docs.mulesoft.com/design-center/design-mocking-service"},
        {text:"Anypoint Exchange Publishing",url:"https://docs.mulesoft.com/exchange/"}
      ]},
      {tag:"deploy-test-mule",focus:"Test and deploy Mule apps: MUnit, CloudHub deployment, and Runtime Manager",topics:[
        {text:"MUnit Testing Framework",url:"https://docs.mulesoft.com/munit/latest/"},
        {text:"MUnit Test Suite Setup",url:"https://docs.mulesoft.com/munit/latest/munit-test-concept"},
        {text:"CloudHub Deployment",url:"https://docs.mulesoft.com/cloudhub/"},
        {text:"Runtime Manager Overview",url:"https://docs.mulesoft.com/runtime-manager/latest/"},
        {text:"Anypoint Monitoring",url:"https://docs.mulesoft.com/monitoring/"},
        {text:"Exam Registration: MuleSoft Developer",url:"https://trailheadacademy.salesforce.com/certificate/exam-mule-dev1---Mule-Dev-201"}
      ]}
    ],
    quiz:[
      {domain:"API-Led Connectivity", q: "In API-led connectivity, which layer connects to backend systems like databases and ERPs?", a: "System API", options: ["Experience API", "Process API", "System API", "Integration API"] },
      {domain:"DataWeave", q: "What does DataWeave's 'map' operator do?", a: "Transforms each element of an array into a new value", options: ["Merges two objects into one", "Transforms each element of an array into a new value", "Filters an array based on a condition", "Maps a key to a value in an object"] },
      {domain:"Error Handling", q: "Which Mule 4 error handler propagates the error to the parent scope after executing its actions?", a: "On Error Propagate", options: ["On Error Continue", "On Error Propagate", "On Error Raise", "On Error Stop"] },
      {domain:"Building Integration Applications", q: "What is the Mule Event composed of?", a: "Payload, Attributes, and Variables", options: ["Body, Headers, and Parameters", "Payload, Attributes, and Variables", "Message, Context, and Config", "Data, Metadata, and Flow Variables"] },
      {domain:"Building Integration Applications", q: "Which Mule 4 component processes multiple routes in parallel and merges results?", a: "Scatter-Gather", options: ["Parallel For Each", "Scatter-Gather", "Parallel Flow", "Async Scope"] },
      {domain:"DataWeave", q: "Which DataWeave operator returns a new array containing only elements that satisfy a condition?", a: "filter", options: ["select", "filter", "where", "find"] },
      {domain:"Anypoint Platform Overview", q: "What Anypoint Platform component is used to publish and discover reusable assets (APIs, connectors, templates)?", a: "Anypoint Exchange", options: ["Runtime Manager", "API Manager", "Anypoint Exchange", "Design Center"] },
      {domain:"Anypoint Platform Overview", q: "In MuleSoft, what is the purpose of the Autodiscovery element in a Mule app?", a: "To register the Mule app with API Manager for policy enforcement", options: ["To auto-detect and configure connectors", "To register the Mule app with API Manager for policy enforcement", "To automatically discover available endpoints on startup", "To sync the app config with CloudHub"] },
      {domain:"DataWeave", q: "Which DataWeave function groups an array into a new object of arrays based on a criteria?", a: "groupBy", options: ["partition", "groupBy", "categorize", "splitBy"] },
      {domain:"Anypoint Platform Overview", q: "In Mule 4, what does the 'Set Variable' component do?", a: "Stores a value in the Mule Event that persists for the duration of the flow", options: ["Sets the payload to a new value", "Stores a value in the Mule Event that persists for the duration of the flow", "Sets a session variable available across flows", "Configures a connector property"] },
      {domain:"Anypoint Platform Overview", q: "Which CloudHub resource type determines the amount of vCPU and memory available to a Mule app?", a: "Worker size", options: ["Instance type", "Worker size", "vCore allocation", "Runtime environment"] },
      {domain:"Building Integration Applications", q: "In a Batch Job, what is the purpose of the 'Batch Aggregator' scope?", a: "To process multiple records as a group/batch at the end of a Batch Step", options: ["To merge all batch results into a single payload", "To process multiple records as a group/batch at the end of a Batch Step", "To summarize batch statistics for monitoring", "To commit database transactions for the entire batch"] },
      {domain:"Building Integration Applications", q: "Which MuleSoft component provides asynchronous messaging with queues and exchanges?", a: "Anypoint MQ", options: ["JMS Connector", "Anypoint MQ", "Kafka Connector", "VM Connector"] },
      {domain:"Anypoint Platform Overview", q: "What is RAML used for in MuleSoft development?", a: "Designing RESTful APIs in a human-readable format before implementation", options: ["Writing DataWeave transformation scripts", "Designing RESTful APIs in a human-readable format before implementation", "Configuring Mule runtime settings", "Defining database schemas for the Database connector"] },
      {domain:"Anypoint Platform Overview", q: "In MUnit, what is the purpose of a 'Mock When' processor?", a: "To replace a component's behavior with a defined response during testing", options: ["To generate mock data for test payloads", "To replace a component's behavior with a defined response during testing", "To mock HTTP servers for integration tests", "To skip a component during test execution"] },
      {domain:"Building Integration Applications", q: "Which Mule 4 flow trigger receives incoming HTTP requests?", a: "HTTP Listener", options: ["HTTP Source", "HTTP Listener", "REST Trigger", "Web Source"] },
      {domain:"DataWeave", q: "What DataWeave output directive is used to produce XML from a transformation?", a: "output application/xml", options: ["output text/xml", "output application/xml", "output format/xml", "output type/xml"] },
      {domain:"Anypoint Platform Overview", q: "Which Anypoint Platform component manages API policies, SLAs, and client application registrations?", a: "API Manager", options: ["Runtime Manager", "Exchange", "API Manager", "Design Center"] },
      {domain:"Building Integration Applications", q: "In the Salesforce connector, which operation is used to insert new records or update existing ones based on an external ID?", a: "Upsert", options: ["Create or Update", "Upsert", "Merge", "Save"] },
      {domain:"Building Integration Applications", q: "What happens to the Mule Event payload after a 'For Each' scope completes?", a: "The payload is restored to what it was before entering the For Each scope", options: ["The payload contains the last processed element", "The payload is a collection of all transformed elements", "The payload is restored to what it was before entering the For Each scope", "The payload is cleared to null"] }
    ],
    tips:[
      "Master DataWeave — it's 25% of the exam. Practice map, filter, reduce, groupBy, and format conversions.",
      "Understand the Mule 4 Event model (payload, attributes, variables) before everything else.",
      "Know all error handler types and how error propagation works through nested scopes.",
      "Understand API-led connectivity layers and what type of logic belongs in each layer.",
      "Know all core components and their exact behavior: For Each, Scatter-Gather, Choice, Set Variable.",
      "Understand CloudHub deployment: workers, regions, and environment variables.",
      "Know API Manager policies and the autodiscovery mechanism for connecting deployed apps.",
      "Practice RAML syntax — resource types, traits, and data types are important for design-first questions."
    ]
  },

  "MuleSoft Developer II": {
    questions: 60,
    time: 120,
    pass: 70,
    experience: "2+ years developing with MuleSoft Anypoint Platform with advanced integration and API experience",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-mule-dev-2---Mule-Dev-301",
    prerequisites: [{name:"MuleSoft Developer",required:true}],
    overview: "The MuleSoft Certified Developer - Level 2 certification validates advanced Mule development skills. Candidates demonstrate proficiency in advanced DataWeave, performance optimization, security implementation, complex error handling, and enterprise integration patterns.",
        domains:[
      {name:"Expose production-ready Anypoint Platform-managed APIs from Mule applications",pct:13,color:"#00A1E0"},
      {name:"Implement maintainable and modular Mule applications and their Maven builds",pct:25,color:"#2ECC71"},
      {name:"Implement monitorable Mule applications",pct:15,color:"#F39C12"},
      {name:"Implement performant and reliable Mule applications",pct:27,color:"#E74C3C"},
      {name:"Secure data at rest and in transit",pct:20,color:"#9B59B6"},
    ],
    studyDays:[
      {tag:"advanced-mule4",focus:"Advanced Mule 4 patterns: scatter-gather, parallel foreach, and streaming",topics:[
        {text:"MuleSoft Developer II Exam Guide",url:"https://trailhead.salesforce.com/help?article=MuleSoft-Certified-Developer-Level-2-Exam-Guide"},
        {text:"Scatter-Gather Scope",url:"https://docs.mulesoft.com/mule-runtime/latest/scatter-gather-concept"},
        {text:"Parallel ForEach Scope",url:"https://docs.mulesoft.com/mule-runtime/latest/parallel-foreach-scope"},
        {text:"Batch Processing",url:"https://docs.mulesoft.com/mule-runtime/latest/batch-processing-concept"},
        {text:"Streaming in Mule 4",url:"https://docs.mulesoft.com/mule-runtime/latest/streaming-about"},
        {text:"Developer II Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/mulesoft-certified-developer-level-2"}
      ]},
      {tag:"advanced-dataweave",focus:"Advanced DataWeave: recursion, custom functions, flat files, and performance",topics:[
        {text:"DataWeave Custom Functions",url:"https://docs.mulesoft.com/dataweave/latest/dataweave-create-module"},
        {text:"DataWeave Streaming",url:"https://docs.mulesoft.com/dataweave/latest/dataweave-streaming"},
        {text:"Flat File and Fixed-Width Formats",url:"https://docs.mulesoft.com/dataweave/latest/dataweave-formats-flatfile"},
        {text:"EDI with DataWeave",url:"https://docs.mulesoft.com/dataweave/latest/dataweave-formats"},
        {text:"DataWeave Pattern: Group and Pivot",url:"https://docs.mulesoft.com/dataweave/latest/dataweave-cookbook-perform-basic-transformation"},
        {text:"DataWeave Performance Best Practices",url:"https://docs.mulesoft.com/dataweave/latest/"}
      ]},
      {tag:"api-governance",focus:"API governance with API Manager: policies, SLA tiers, and custom policies",topics:[
        {text:"API Manager Overview",url:"https://docs.mulesoft.com/api-manager/latest/"},
        {text:"Applying Out-of-the-Box Policies",url:"https://docs.mulesoft.com/api-manager/latest/policies-overview"},
        {text:"Custom Policies",url:"https://docs.mulesoft.com/api-manager/latest/custom-policy-general-concept"},
        {text:"SLA Tiers and Rate Limiting",url:"https://docs.mulesoft.com/api-manager/latest/defining-sla-tiers"},
        {text:"Anypoint Analytics",url:"https://docs.mulesoft.com/api-manager/latest/viewing-api-analytics"},
        {text:"API Autodiscovery",url:"https://docs.mulesoft.com/api-manager/latest/api-auto-discovery-new-concept"}
      ]},
      {tag:"security-advanced-mule",focus:"Advanced security: OAuth 2.0, JWT policy, TLS, and secrets management",topics:[
        {text:"OAuth 2.0 in Mule 4",url:"https://docs.mulesoft.com/api-manager/latest/oauth2-provider-concept"},
        {text:"JWT Validation Policy",url:"https://docs.mulesoft.com/api-manager/latest/jwt-validation-policy"},
        {text:"TLS Configuration",url:"https://docs.mulesoft.com/mule-runtime/latest/tls-configuration"},
        {text:"Anypoint Secrets Manager",url:"https://docs.mulesoft.com/anypoint-security/secrets-manager"},
        {text:"Secure Configuration Properties",url:"https://docs.mulesoft.com/mule-runtime/latest/secure-configuration-properties"},
        {text:"IP Allowlist Policy",url:"https://docs.mulesoft.com/api-manager/latest/ip-allowlist"}
      ]},
      {tag:"exam-prep-mule2",focus:"MuleSoft Developer II exam prep: advanced Mule 4, DataWeave, API governance",topics:[
        {text:"MuleSoft Developer II Exam Guide",url:"https://trailhead.salesforce.com/help?article=MuleSoft-Certified-Developer-Level-2-Exam-Guide"},
        {text:"Developer II Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/mulesoft-certified-developer-level-2"},
        {text:"Anypoint Platform Documentation",url:"https://docs.mulesoft.com/"},
        {text:"DataWeave Playground",url:"https://dataweave.mulesoft.com/learn/playground"},
        {text:"MUnit Testing Guide",url:"https://docs.mulesoft.com/munit/latest/"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-mule-dev2---Mule-Dev-211"}
      ]}
    ],
    quiz:[
      {domain:"Advanced DataWeave", q: "What is the purpose of DataWeave's 'fun' keyword?", a: "To define a reusable named function within a DataWeave script", options: ["To mark a function as asynchronous", "To define a reusable named function within a DataWeave script", "To call an external function library", "To declare a conditional expression"] },
      {domain:"Anypoint Platform Architecture", q: "Which MuleSoft feature encrypts sensitive configuration properties like passwords in mule-app.properties?", a: "Secure Properties Placeholder", options: ["Credential Vault", "Secure Properties Placeholder", "CloudHub Secrets Manager", "Anypoint Key Manager"] },
      {domain:"Anypoint Platform Architecture", q: "What does the 'Until Successful' scope do in Mule 4?", a: "Retries the enclosed processors until they succeed or the maximum retry count is reached", options: ["Waits until a specific condition becomes true", "Retries the enclosed processors until they succeed or the maximum retry count is reached", "Executes a flow until a timeout occurs", "Polls an endpoint until a response is received"] },
      {domain:"Anypoint Platform Architecture", q: "In Mule 4, what is the difference between reconnection and retry?", a: "Reconnection re-establishes a connection to a resource; retry re-executes the flow operation", options: ["They are synonymous in Mule 4", "Reconnection re-establishes a connection to a resource; retry re-executes the flow operation", "Retry is for HTTP; reconnection is for databases", "Reconnection is automatic; retry requires explicit configuration"] },
      {domain:"Anypoint Platform Architecture", q: "Which Anypoint deployment model runs Mule runtimes on customer-managed Kubernetes clusters?", a: "Anypoint Runtime Fabric", options: ["CloudHub 2.0", "Anypoint Runtime Fabric", "Hybrid Deployment", "Private Cloud Edition"] },
      {domain:"Advanced DataWeave", q: "What DataWeave function merges two objects, with the second object's values taking precedence?", a: "++ (merge operator) or update", options: ["merge()", "++ (merge operator) or update", "combine()", "extend()"] },
      {domain:"Security", q: "Which security configuration enables both server and client certificate verification in a TLS connection?", a: "Mutual TLS (mTLS)", options: ["Two-Way TLS (mTLS)", "Mutual TLS (mTLS)", "Bidirectional SSL", "Client-Authenticated TLS"] },
      {domain:"Anypoint Platform Architecture", q: "What is the Cache Scope used for in Mule 4?", a: "Caching the results of expensive operations to avoid repeating them for the same input", options: ["Storing flow variables between flow executions", "Caching the results of expensive operations to avoid repeating them for the same input", "Managing Mule event state across transactions", "Providing in-memory storage for batch processing"] },
      {domain:"Anypoint Platform Architecture", q: "In a Batch Job, what does the 'Accept Policy' on a Batch Step control?", a: "Which records the step processes based on their success/failure in previous steps", options: ["The number of records accepted per batch", "Which records the step processes based on their success/failure in previous steps", "The timeout for accepting new records into the batch", "The record acceptance rate for performance tuning"] },
      {domain:"Advanced DataWeave", q: "Which DataWeave module provides string manipulation functions like trim, upper, and replace?", a: "dw::core::Strings", options: ["dw::text::Utils", "dw::core::Strings", "dw::util::Strings", "dw::String"] },
      {domain:"Anypoint Platform Architecture", q: "What is Anypoint Object Store v2 primarily used for?", a: "Persisting state (key-value pairs) across Mule flows and application restarts in CloudHub", options: ["Storing large file attachments for messaging", "Persisting state (key-value pairs) across Mule flows and application restarts in CloudHub", "Caching API responses for performance", "Managing configuration properties for multiple environments"] },
      {domain:"Enterprise Deployment", q: "Which enterprise integration pattern routes a message to different flows based on its content?", a: "Content-Based Router (Choice Router)", options: ["Message Dispatcher", "Content-Based Router (Choice Router)", "Dynamic Router", "Message Classifier"] },
      {domain:"Anypoint Platform Architecture", q: "How does Anypoint Monitoring distributed tracing help troubleshoot issues?", a: "It tracks a request across multiple microservices showing the processing timeline for each hop", options: ["It monitors database query execution times", "It tracks a request across multiple microservices showing the processing timeline for each hop", "It traces code execution within a single Mule flow", "It identifies slow DataWeave transformations"] },
      {domain:"Enterprise Deployment", q: "In MuleSoft CI/CD, which Maven plugin is used to deploy Mule applications from a build pipeline?", a: "Mule Maven Plugin", options: ["Anypoint Deploy Plugin", "Mule Maven Plugin", "CloudHub Maven Plugin", "Anypoint CLI Plugin"] },
      {domain:"Advanced DataWeave", q: "What DataWeave type annotation would you use for a field that can be either a String or null?", a: "String | Null", options: ["String?", "Optional<String>", "String | Null", "Nullable<String>"] },
      {domain:"Anypoint Platform Architecture", q: "Which API Manager policy validates that the API caller has a valid OAuth 2.0 access token?", a: "OAuth 2.0 Access Token Enforcement", options: ["JWT Validation Policy", "OAuth 2.0 Access Token Enforcement", "OpenID Connect Policy", "API Key Enforcement"] },
      {domain:"Enterprise Deployment", q: "What is the Dead Letter Channel pattern used for in enterprise integration?", a: "Routing messages that cannot be processed to a separate error destination for investigation", options: ["Archiving all messages for audit", "Routing messages that cannot be processed to a separate error destination for investigation", "Discarding failed messages automatically", "Replaying failed messages after a timeout"] },
      {domain:"Anypoint Platform Architecture", q: "Which approach in Anypoint Platform allows deploying one Mule app with different configurations per environment?", a: "Environment-specific properties files with the Mule Maven Plugin deployment targets", options: ["Multiple deployments of the same jar with different names", "Environment-specific properties files with the Mule Maven Plugin deployment targets", "Separate Anypoint Platform organizations per environment", "CloudHub environment variables overriding app properties"] },
      {domain:"Advanced DataWeave", q: "What is a DataWeave recursive function used for?", a: "Processing hierarchical or nested data structures by having the function call itself", options: ["Calling the same DataWeave script multiple times", "Processing hierarchical or nested data structures by having the function call itself", "Looping over a flat array without using map", "Building self-referencing data models"] },
      {domain:"Anypoint Platform Architecture", q: "In Anypoint Platform's control plane / runtime plane separation, what does the runtime plane handle?", a: "Executing Mule integration flows and processing actual messages", options: ["Managing API policies and routing rules", "Executing Mule integration flows and processing actual messages", "Hosting the Anypoint Studio IDE", "Storing API specifications in Exchange"] }
    ],
    tips:[
      "Master advanced DataWeave: recursive functions, type annotations, custom modules — 25% of exam.",
      "Know all security configurations: OAuth 2.0, TLS/mTLS, secure properties, and API Manager policies.",
      "Understand Until Successful vs. reconnection strategies and when to apply each.",
      "Know the Cache Scope configuration: TTL, cache store, and when caching provides value.",
      "Be able to explain all enterprise integration patterns and map them to Mule components.",
      "Understand Anypoint Runtime Fabric vs. CloudHub — different deployment architectures.",
      "Know CI/CD pipelines for MuleSoft: Mule Maven Plugin and MUnit test automation.",
      "Understand Batch Aggregator and Accept Policy for advanced batch processing scenarios."
    ]
  },

  "MuleSoft Hyperautomation Developer": {
    questions: 60,
    time: 120,
    pass: 68,
    experience: "1+ year building automation solutions combining MuleSoft, RPA, and AI/ML capabilities",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-hyperautomation-developer---Mule-Dev-202",
    prerequisites: [{name:"MuleSoft Developer",required:true}],
    overview: "The MuleSoft Hyperautomation Developer certification validates expertise in building end-to-end automation solutions using MuleSoft's Anypoint Platform combined with RPA (Robotic Process Automation) and intelligent automation capabilities.",
        domains:[
      {name:"Employ best practices when using hyperautomation",pct:20,color:"#00A1E0"},
      {name:"Use Composer to automate data integrations in a hyperautomation project",pct:12,color:"#2ECC71"},
      {name:"Design, build, and manage MuleSoft RPA processes used in hyperautomation",pct:17,color:"#F39C12"},
      {name:"Use Salesforce Flow to build hyperautomation workflows",pct:13,color:"#E74C3C"},
      {name:"Use Anypoint platform to deliver, and manage APIs in a hyperautomation project",pct:15,color:"#9B59B6"},
      {name:"Use Anypoint Platform to monitor hyperautomation API endpoints",pct:7,color:"#1ABC9C"},
      {name:"Use Anypoint Exchange to catalog (publish), share, discover, and reuse assets",pct:8,color:"#E67E22"},
      {name:"Use Salesforce Flow Orchestrator to build parallel, multi-user, multi-step workstreams",pct:8,color:"#3498DB"},
    ],
    studyDays:[
      {tag:"hyperauto-overview",focus:"MuleSoft Hyperautomation: RPA, Composer, and intelligent automation capabilities",topics:[
        {text:"MuleSoft Hyperautomation Developer Exam Guide",url:"https://trailhead.salesforce.com/help?article=MuleSoft-Certified-Hyperautomation-Specialist-Exam-Guide"},
        {text:"MuleSoft RPA Overview",url:"https://docs.mulesoft.com/rpa-home/"},
        {text:"MuleSoft Composer Overview",url:"https://docs.mulesoft.com/composer/latest/"},
        {text:"Hyperautomation Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/mulesoft-hyperautomation-specialist"},
        {text:"Anypoint Platform and Automation",url:"https://docs.mulesoft.com/general/"},
        {text:"Salesforce Flow and MuleSoft Integration",url:"https://help.salesforce.com/s/articleView?id=sf.flow_builder.htm"}
      ]},
      {tag:"mulesoft-rpa",focus:"Build RPA bots: process recording, bot deployment, and attended vs unattended automation",topics:[
        {text:"MuleSoft RPA Developer Guide",url:"https://docs.mulesoft.com/rpa-builder/latest/"},
        {text:"RPA Process Recording",url:"https://docs.mulesoft.com/rpa-recorder/latest/"},
        {text:"RPA Bot Deployment",url:"https://docs.mulesoft.com/rpa-manager/latest/"},
        {text:"Attended vs Unattended Bots",url:"https://docs.mulesoft.com/rpa-home/"},
        {text:"RPA and Anypoint Integration",url:"https://docs.mulesoft.com/rpa-home/"},
        {text:"AI Features in RPA",url:"https://docs.mulesoft.com/rpa-builder/latest/"}
      ]},
      {tag:"composer",focus:"Build no-code integrations with MuleSoft Composer: triggers, actions, and data mapping",topics:[
        {text:"MuleSoft Composer Overview",url:"https://docs.mulesoft.com/composer/latest/"},
        {text:"Composer Connectors",url:"https://docs.mulesoft.com/composer/latest/ms_composer_reference"},
        {text:"Composer Data Mapping",url:"https://docs.mulesoft.com/composer/latest/ms_composer_using_a_flow_and_functions"},
        {text:"Composer for Salesforce",url:"https://help.salesforce.com/s/articleView?id=sf.flow_builder_mulesoft_composer.htm"},
        {text:"Composer Triggers and Scheduling",url:"https://docs.mulesoft.com/composer/latest/"},
        {text:"Composer vs Anypoint Studio",url:"https://docs.mulesoft.com/composer/latest/"}
      ]},
      {tag:"exam-prep-hyperauto",focus:"MuleSoft Hyperautomation Specialist exam prep: RPA, Composer, and automation scenarios",topics:[
        {text:"Hyperautomation Exam Guide",url:"https://trailhead.salesforce.com/help?article=MuleSoft-Certified-Hyperautomation-Specialist-Exam-Guide"},
        {text:"Hyperautomation Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/mulesoft-hyperautomation-specialist"},
        {text:"MuleSoft RPA Documentation",url:"https://docs.mulesoft.com/rpa-home/"},
        {text:"MuleSoft Composer Documentation",url:"https://docs.mulesoft.com/composer/latest/"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-mule-hyperauto---Mule-HA-201"},
        {text:"Anypoint Platform Overview",url:"https://docs.mulesoft.com/general/"}
      ]}
    ],
    quiz:[
      {domain:"Hyperautomation Fundamentals", q: "What distinguishes RPA from standard API integration in hyperautomation?", a: "RPA automates UI interactions with applications that lack APIs", options: ["RPA is faster than API calls", "RPA automates UI interactions with applications that lack APIs", "RPA handles real-time events; APIs handle batch", "RPA requires less maintenance than API integrations"] },
      {domain:"Composer Integration", q: "Which MuleSoft component is the no-code/low-code integration builder for business users?", a: "Anypoint Composer", options: ["Anypoint Studio", "Anypoint Composer", "Flow Designer", "Integration Builder"] },
      {domain:"MuleSoft RPA", q: "What is the role of RPA Manager in MuleSoft RPA?", a: "To orchestrate, schedule, and monitor bot executions", options: ["To develop and record bot scripts", "To orchestrate, schedule, and monitor bot executions", "To connect bots to Salesforce", "To define RPA API endpoints"] },
      {domain:"AI/ML in Automation", q: "In MuleSoft Intelligent Document Processing, what does a 'confidence threshold' control?", a: "The minimum confidence score for accepting an extracted field value without human review", options: ["The maximum document size for processing", "The minimum confidence score for accepting an extracted field value without human review", "The number of documents processed per hour", "The acceptable error rate for document classification"] },
      {domain:"Hyperautomation Fundamentals", q: "What is an attended bot in RPA?", a: "A bot that runs on a user's machine and requires human initiation or interaction", options: ["A bot monitored by a human supervisor", "A bot that runs on a user's machine and requires human initiation or interaction", "A bot with manual override capabilities", "A bot that requires approval before each execution"] },
      {domain:"Hyperautomation Fundamentals", q: "Which RPA tool is used to create and edit bot automation scripts?", a: "RPA Builder", options: ["RPA Studio", "RPA Builder", "Bot Designer", "Automation Recorder"] },
      {domain:"Composer Integration", q: "When should you choose Anypoint Composer over Anypoint Studio for integration?", a: "When the integration is straightforward and the builder is a business user without coding skills", options: ["When performance is critical for high-volume integrations", "When the integration is straightforward and the builder is a business user without coding skills", "When advanced error handling and DataWeave are required", "When integrating with legacy systems using complex protocols"] },
      {domain:"Hyperautomation Fundamentals", q: "Which component manages bot credentials securely in MuleSoft RPA?", a: "Credential Manager in RPA Manager", options: ["Secure Properties in Anypoint", "Credential Manager in RPA Manager", "Anypoint Secrets Manager", "Bot Vault"] },
      {domain:"Hyperautomation Fundamentals", q: "What is the primary use case for combining RPA and MuleSoft API integration?", a: "Orchestrating legacy UI-based system access alongside modern API-connected systems in one workflow", options: ["Replacing API integrations entirely with bot-based automation", "Orchestrating legacy UI-based system access alongside modern API-connected systems in one workflow", "Reducing MuleSoft license costs by substituting Mule flows with bots", "Running bots in parallel with Mule apps for redundancy"] },
      {domain:"Hyperautomation Fundamentals", q: "In MuleSoft hyperautomation, what is process mining used for?", a: "Analyzing system log data to discover actual process flows and identify automation opportunities", options: ["Mining blockchain transactions for audit trails", "Analyzing system log data to discover actual process flows and identify automation opportunities", "Extracting data from documents using ML models", "Mining API usage patterns for performance optimization"] },
      {domain:"AI/ML in Automation", q: "What type of automation does Intelligent Document Processing enable?", a: "Automated extraction of structured data from unstructured documents like invoices and forms", options: ["Real-time translation of documents between languages", "Automated extraction of structured data from unstructured documents like invoices and forms", "Automated generation of PDF reports from structured data", "Optical character recognition for image-to-text conversion only"] },
      {domain:"MuleSoft RPA", q: "How does a MuleSoft Mule flow trigger an RPA bot process?", a: "By calling the RPA API from a Mule flow to start a bot process execution", options: ["By publishing a Platform Event that RPA subscribes to", "By calling the RPA API from a Mule flow to start a bot process execution", "Through a dedicated MuleSoft RPA Connector", "By dropping a file in an FTP location that RPA monitors"] },
      {domain:"Hyperautomation Fundamentals", q: "Which metric best demonstrates the ROI of an RPA automation?", a: "Time saved per transaction multiplied by transaction volume", options: ["Bot uptime percentage", "Time saved per transaction multiplied by transaction volume", "Number of screens automated", "Bot deployment cost"] },
      {domain:"MuleSoft RPA", q: "In RPA Builder, what is an element selector used for?", a: "Identifying a specific UI element (button, field) on a screen for the bot to interact with", options: ["Selecting which bot should execute a process", "Identifying a specific UI element (button, field) on a screen for the bot to interact with", "Choosing the application to automate from a catalog", "Filtering input data before the bot processes it"] },
      {domain:"Hyperautomation Fundamentals", q: "What is a Bot Pool in MuleSoft RPA?", a: "A group of bots that can be allocated to execute processes, enabling parallel or failover execution", options: ["A storage location for bot scripts", "A group of bots that can be allocated to execute processes, enabling parallel or failover execution", "A pool of test environments for bot validation", "A shared credential store for multiple bots"] },
      {domain:"Hyperautomation Fundamentals", q: "In hyperautomation design, which system type is best suited for API integration vs. RPA?", a: "Modern SaaS systems with APIs → API integration; Legacy systems with only a UI → RPA", options: ["All systems should use API integration for reliability", "Modern SaaS systems with APIs → API integration; Legacy systems with only a UI → RPA", "RPA is always preferred for consistency", "The choice depends only on transaction volume"] },
      {domain:"Composer Integration", q: "What Anypoint Composer feature allows a flow to run on a scheduled basis?", a: "Scheduler trigger", options: ["Cron Job trigger", "Timer trigger", "Scheduler trigger", "Polling Trigger"] },
      {domain:"MuleSoft RPA", q: "What does 'unattended bot execution' mean in RPA?", a: "The bot runs automatically without human initiation, typically on a server or virtual machine", options: ["The bot runs without any monitoring or supervision", "The bot runs automatically without human initiation, typically on a server or virtual machine", "The bot executes without logging its actions", "The bot skips UI interaction steps automatically"] },
      {domain:"AI/ML in Automation", q: "Which MuleSoft capability integrates AI models for document and data processing in automation workflows?", a: "Intelligent Document Processing (IDP)", options: ["MuleSoft AI Gateway", "Intelligent Document Processing (IDP)", "Einstein Analytics Connector", "AI Data Processor"] },
      {domain:"Monitoring and Governance", q: "In a hyperautomation governance framework, what is the purpose of a Center of Excellence (CoE)?", a: "To standardize automation practices, manage the bot portfolio, and ensure quality across all automations", options: ["To develop all automation scripts centrally", "To standardize automation practices, manage the bot portfolio, and ensure quality across all automations", "To provide technical support for bot failures", "To manage licensing costs for RPA software"] }
    ],
    tips:[
      "Understand when to use RPA vs. API integration — choosing the right tool for each scenario is central to the exam.",
      "Know the three RPA components: RPA Builder (design), RPA Manager (orchestrate), RPA Bot (execute).",
      "Understand attended vs. unattended bots and their different use cases.",
      "Know how Mule flows trigger and interact with RPA bots via the RPA API.",
      "Understand Anypoint Composer's audience (business users) and its limitations vs. Anypoint Studio.",
      "Know Intelligent Document Processing: document models, confidence thresholds, and human-in-the-loop.",
      "Be able to design end-to-end hyperautomation workflows that combine RPA, Mule, and AI tools.",
      "Understand bot credential management and security best practices in RPA deployments."
    ]
  },

  "Slack Developer": {
    questions: 60,
    time: 90,
    pass: 65,
    experience: "6+ months developing Slack apps with the Slack API and Bolt framework",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-slack-developer---Slack-Dev-201",
    prerequisites: ["Platform Developer"],
    overview: "The Slack Developer certification validates expertise in building Slack apps and integrations. Candidates demonstrate proficiency in the Slack API platform, Bolt framework, app distribution, Block Kit UI, and integration with Salesforce.",
        domains:[
      {name:"Apps in the Slack Platform",pct:7,color:"#00A1E0"},
      {name:"Design the Interactive Flow of Your App",pct:20,color:"#2ECC71"},
      {name:"Design Your Workflows: Spotlight on Slack's APIs",pct:13,color:"#F39C12"},
      {name:"Design a Great User Experience",pct:8,color:"#E74C3C"},
      {name:"Design for Security",pct:19,color:"#9B59B6"},
      {name:"Design for Scale",pct:9,color:"#1ABC9C"},
      {name:"APIs for Managing Your Slack",pct:12,color:"#E67E22"},
      {name:"Distribute Your App",pct:7,color:"#3498DB"},
    ],
    studyDays:[
      {tag:"slack-api-platform",focus:"Slack platform fundamentals: app types, scopes, tokens, and the Bolt framework",topics:[
        {text:"Slack Developer Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Slack-Developer-Exam-Guide"},
        {text:"Slack API Documentation",url:"https://api.slack.com/docs"},
        {text:"Slack App Types Overview",url:"https://api.slack.com/start/overview"},
        {text:"Bolt for JavaScript",url:"https://slack.dev/bolt-js/"},
        {text:"Bolt for Python",url:"https://slack.dev/bolt-python/"},
        {text:"Slack Developer Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-slack-developer-credential"}
      ]},
      {tag:"block-kit",focus:"Build Slack UIs with Block Kit: blocks, elements, modals, and home tabs",topics:[
        {text:"Block Kit Overview",url:"https://api.slack.com/block-kit"},
        {text:"Block Kit Builder",url:"https://app.slack.com/block-kit-builder"},
        {text:"Block Types Reference",url:"https://api.slack.com/reference/block-kit/blocks"},
        {text:"Block Elements",url:"https://api.slack.com/reference/block-kit/block-elements"},
        {text:"Modals in Slack",url:"https://api.slack.com/surfaces/modals"},
        {text:"App Home Tab",url:"https://api.slack.com/surfaces/app-home"}
      ]},
      {tag:"slack-events-actions",focus:"Handle Slack events, actions, and commands with the Events API and slash commands",topics:[
        {text:"Slack Events API",url:"https://api.slack.com/events-api"},
        {text:"Subscribing to Events",url:"https://api.slack.com/events-api#subscribing_to_event_types"},
        {text:"Slash Commands",url:"https://api.slack.com/interactivity/slash-commands"},
        {text:"Interactivity and Shortcuts",url:"https://api.slack.com/interactivity"},
        {text:"Block Actions and Payloads",url:"https://api.slack.com/reference/interaction-payloads/block-actions"},
        {text:"Workflow Steps for Apps",url:"https://api.slack.com/workflows/steps"}
      ]},
      {tag:"slack-salesforce",focus:"Integrate Slack apps with Salesforce: Slack SDK for Salesforce and Flow actions",topics:[
        {text:"Slack SDK for Salesforce",url:"https://developer.salesforce.com/docs/platform/salesforce-slack-sdk/guide/"},
        {text:"Salesforce for Slack App",url:"https://help.salesforce.com/s/articleView?id=sf.slack_salesforce_app.htm"},
        {text:"Flow Actions for Slack",url:"https://help.salesforce.com/s/articleView?id=sf.flow_ref_elements_actions_slack.htm"},
        {text:"Salesforce-Slack Integration Patterns",url:"https://developer.salesforce.com/docs/platform/salesforce-slack-sdk/guide/"},
        {text:"Apex and Slack Notifications",url:"https://developer.salesforce.com/docs/platform/salesforce-slack-sdk/guide/"},
        {text:"Slack Connect for B2B Automation",url:"https://api.slack.com/apis/slack-connect"}
      ]},
      {tag:"exam-prep-slack-dev",focus:"Slack Developer exam prep: Bolt, Block Kit, Events API, and Salesforce integration",topics:[
        {text:"Slack Developer Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Slack-Developer-Exam-Guide"},
        {text:"Slack Developer Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-slack-developer-credential"},
        {text:"Slack API Documentation",url:"https://api.slack.com/docs"},
        {text:"Bolt Framework Docs",url:"https://slack.dev/bolt-js/"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-slack-developer---Slack-Dev-201"},
        {text:"Slack Developer Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_slack_developer"}
      ]}
    ],
    quiz:[
      {domain:"Slack App Features", q: "Which Bolt method listens for a Slack slash command?", a: ".command()", options: [".slash()", ".command()", ".trigger()", ".cmd()"] },
      {domain:"Slack Platform Fundamentals", q: "What is required immediately when Slack sends an event to an app's endpoint?", a: "Acknowledgment (ack) within 3 seconds", options: ["A response message to the user", "Acknowledgment (ack) within 3 seconds", "The full response payload", "A 200 OK status and full response"] },
      {domain:"Salesforce and Slack Integration", q: "Which Slack token type is used by a bot to post messages on behalf of the app?", a: "Bot Token (xoxb-)", options: ["User Token (xoxu-)", "Bot Token (xoxb-)", "App Token (xapp-)", "OAuth Token"] },
      {domain:"Block Kit and UI Design", q: "What Block Kit block type is used to display a section of text with optional accessory?", a: "Section block", options: ["Text block", "Content block", "Section block", "Message block"] },
      {domain:"Block Kit and UI Design", q: "Which Slack API method is used to open a modal for a user?", a: "views.open", options: ["modals.create", "views.open", "dialog.open", "modal.launch"] },
      {domain:"Slack Platform Fundamentals", q: "What is Socket Mode in Slack?", a: "A way to receive events via a WebSocket connection instead of a public HTTP endpoint", options: ["A secure mode that encrypts all messages in a workspace", "A way to receive events via a WebSocket connection instead of a public HTTP endpoint", "A dedicated channel type for app communications", "A protocol for real-time messaging between users"] },
      {domain:"Bolt Framework", q: "In Bolt, what does the `say()` utility function do?", a: "Sends a message to the same channel where the triggering event occurred", options: ["Sends a direct message to the user who triggered the event", "Sends a message to the same channel where the triggering event occurred", "Says a text-to-speech message to the user", "Broadcasts a message to all channels"] },
      {domain:"Slack App Features", q: "Which Slack event is triggered when a user opens the App Home tab?", a: "app_home_opened", options: ["home_tab_viewed", "app_home_opened", "view_home", "home_opened"] },
      {domain:"Block Kit and UI Design", q: "What is the purpose of Block Kit's 'actions' block type?", a: "To display interactive elements like buttons and select menus", options: ["To define the actions a Slack bot can perform", "To display interactive elements like buttons and select menus", "To configure message action buttons in the Slack composer", "To trigger workflow steps from a message"] },
      {domain:"Bolt Framework", q: "In a Slack modal, which event is fired when a user clicks the Submit button?", a: "view_submission", options: ["modal_submit", "view_submission", "form_submit", "view_close"] },
      {domain:"Salesforce and Slack Integration", q: "What Salesforce feature is used to send a Slack notification from an automated process?", a: "Flow with 'Send Message to Slack Channel' action", options: ["Slack Trigger in Process Builder", "Flow with 'Send Message to Slack Channel' action", "Apex Callout to Slack API", "Platform Event published to Slack"] },
      {domain:"Block Kit and UI Design", q: "Which Slack API method updates the content of an already-opened modal?", a: "views.update", options: ["modals.update", "views.update", "views.replace", "modal.refresh"] },
      {domain:"App Distribution and Security", q: "What is the purpose of Slack request signature verification?", a: "To confirm that incoming requests are actually from Slack and not spoofed", options: ["To authenticate the Slack bot token on each request", "To confirm that incoming requests are actually from Slack and not spoofed", "To verify the user has permission to use the slash command", "To validate Block Kit payload schemas"] },
      {domain:"Slack App Features", q: "Which Block Kit element allows a user to pick a date from a calendar picker?", a: "datepicker", options: ["date_input", "calendar_select", "datepicker", "date_element"] },
      {domain:"Slack App Features", q: "What is a Slack global shortcut?", a: "A shortcut accessible from the Slack composer toolbar or search that isn't tied to a specific message", options: ["A keyboard shortcut for Slack navigation", "A shortcut accessible from the Slack composer toolbar or search that isn't tied to a specific message", "An app shortcut appearing in every message's overflow menu", "A shortcut configured per-channel by an admin"] },
      {domain:"Slack Platform Fundamentals", q: "In the Salesforce Slack SDK, which class handles incoming Slack event payloads in Apex?", a: "Slack.EventHandler", options: ["SlackEvent.Handler", "Slack.EventHandler", "SlackPayloadProcessor", "Slack.MessageHandler"] },
      {domain:"Salesforce and Slack Integration", q: "How does OAuth token rotation improve Slack app security?", a: "Automatically refreshes bot and user tokens before they expire, reducing the impact of token leakage", options: ["Rotates tokens every 24 hours regardless of activity", "Automatically refreshes bot and user tokens before they expire, reducing the impact of token leakage", "Invalidates all previous sessions when a new user connects", "Requires users to re-authenticate each session"] },
      {domain:"Bolt Framework", q: "Which Bolt context property provides access to the Slack Web API client in an event listener?", a: "client", options: ["api", "client", "slack", "webClient"] },
      {domain:"App Distribution and Security", q: "What is the Slack App Directory?", a: "A marketplace where distributed Slack apps can be publicly listed for any workspace to install", options: ["A folder in Slack for organizing app integrations", "A marketplace where distributed Slack apps can be publicly listed for any workspace to install", "An internal list of approved apps for a company's Slack workspace", "A GitHub repository for open-source Slack apps"] },
      {domain:"Block Kit and UI Design", q: "In Block Kit, what property on an interactive element stores a unique identifier for handling its action?", a: "action_id", options: ["element_id", "block_action", "action_id", "component_id"] }
    ],
    tips:[
      "Understand the Bolt framework patterns thoroughly: .event(), .action(), .command() — most practical questions test Bolt.",
      "Know all Block Kit block and element types — especially sections, actions blocks, and input blocks.",
      "Master the modal flow: views.open, view_submission handling, views.update, and views.push.",
      "Understand all Slack token types (bot, user, app) and which operations require each.",
      "Know the Events API: subscriptions, challenge-response verification, and ack() timing.",
      "Understand Socket Mode and when to use it vs. public HTTPS endpoints.",
      "Know Salesforce-Slack integration options: Flow actions, Salesforce Slack SDK, and Apex callouts.",
      "Always verify request signatures in production — this is a key security requirement tested on the exam."
    ]
  },

});
