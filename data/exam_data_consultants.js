Object.assign(EXAM_DATA, {
  "Business Analyst": {
    questions: 60,
    time: 105,
    pass: 72,
    experience: "1+ year experience as a Business Analyst on Salesforce implementations",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-business-analyst---BA-201",
    prerequisites: [],
    overview: "The Salesforce Business Analyst certification validates expertise in facilitating discovery, gathering requirements, and collaborating with stakeholders to deliver Salesforce solutions. Candidates demonstrate proficiency in user stories, process mapping, and bridging business needs with technical solutions.",
    domains: [
      { name: "Customer Discovery", pct: 17, color: "#00A1E0", desc: "Apply discovery techniques to understand business goals, pain points, and success criteria before designing solutions.", keyTopics: [
      {title:"Discovery Facilitation",desc:"Run structured discovery sessions using techniques like SPIN, 5-Whys, and affinity mapping."},
      {title:"Stakeholder Identification",desc:"Map stakeholder groups by role, influence, and interest to guide engagement strategy."},
      {title:"Problem Framing",desc:"Translate raw business pain points into clearly scoped problem statements for solution design."}
    ] },
      { name: "Collaboration with Stakeholders", pct: 24, color: "#2ECC71", desc: "Facilitate productive collaboration between business stakeholders and technical teams throughout the project lifecycle.", keyTopics: [
      {title:"Requirements Workshops",desc:"Design and facilitate workshops to elicit, validate, and prioritize requirements."},
      {title:"Consensus Building",desc:"Navigate conflicting stakeholder opinions and build agreement on solution scope."},
      {title:"Communication Plans",desc:"Create RACI matrices and communication cadences for projects with multiple stakeholders."}
    ] },
      { name: "Business Process Mapping", pct: 16, color: "#F39C12", desc: "Document current and future-state business processes to identify automation opportunities and solution requirements.", keyTopics: [
      {title:"Process Mapping Techniques",desc:"Apply swimlane diagrams, BPMN notation, and value stream maps to document workflows."},
      {title:"Gap Analysis",desc:"Compare current-state processes to desired future-state to identify solution requirements."},
      {title:"Process Optimization",desc:"Recommend process improvements that reduce handoffs, delays, and manual effort."}
    ] },
      { name: "User Stories", pct: 21, color: "#E74C3C", desc: "Write clear, testable user stories and acceptance criteria that bridge business needs and technical delivery.", keyTopics: [
      {title:"Story Writing",desc:"Structure user stories in the 'As a / I want / So that' format with clear business value."},
      {title:"Acceptance Criteria",desc:"Define Given/When/Then acceptance criteria that enable unambiguous testing."},
      {title:"Backlog Grooming",desc:"Facilitate backlog refinement sessions to size, prioritize, and elaborate stories."}
    ] },
      { name: "User Acceptance Testing (UAT)", pct: 12, color: "#1ABC9C", desc: "Plan and support UAT activities to confirm that delivered solutions meet business requirements.", keyTopics: [
      {title:"UAT Planning",desc:"Create UAT test plans covering scope, entry/exit criteria, and stakeholder sign-off process."},
      {title:"Test Case Development",desc:"Translate acceptance criteria into executable UAT test cases with expected outcomes."},
      {title:"Defect Triage",desc:"Facilitate defect prioritization sessions to distinguish blockers from post-launch fixes."}
    ] },
      { name: "Declarative Salesforce", pct: 10, color: "#BDC3E7", desc: "Understand Salesforce's declarative toolset to advise on feasible no-code and low-code solutions.", keyTopics: [
      {title:"Flows and Automation",desc:"Identify when Salesforce Flow covers a requirement vs. when Apex is needed."},
      {title:"Object and Field Design",desc:"Recommend custom objects, fields, and relationships to model business data."},
      {title:"Reports and Dashboards",desc:"Configure Salesforce reports and dashboards to surface business insights."}
    ] }
    ],
    studyDays:[
      {tag:"discovery-requirements",focus:"Discovery and requirements: stakeholder interviews, as-is/to-be process maps, and user stories",topics:[
        {text:"Business Analyst Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Business-Analyst-Exam-Guide"},
        {text:"User Stories in Salesforce",url:"https://help.salesforce.com/s/articleView?id=sf.bi_user_stories.htm"},
        {text:"Process Mapping Trailhead",url:"https://trailhead.salesforce.com/content/learn/modules/salesforce-business-analyst-quick-look"},
        {text:"Salesforce Maps and Diagramming",url:"https://help.salesforce.com/s/articleView?id=sf.bi_process_map.htm"},
        {text:"Business Analyst Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-business-analyst-credential"},
        {text:"Stakeholder Engagement Module",url:"https://trailhead.salesforce.com/content/learn/modules/salesforce-business-analyst-quick-look"}
      ]},
      {tag:"collaboration-tools",focus:"Collaboration and tools: User Story Collaboration, Flow Builder for BAs, and Salesforce Anywhere",topics:[
        {text:"User Story Collaboration Tool",url:"https://help.salesforce.com/s/articleView?id=sf.bi_user_story_collaboration.htm"},
        {text:"Flow Builder for BAs",url:"https://help.salesforce.com/s/articleView?id=sf.flow_overview.htm"},
        {text:"Approval Processes for BAs",url:"https://help.salesforce.com/s/articleView?id=sf.approvals_create_approval_process.htm"},
        {text:"Reports for Business Analysis",url:"https://help.salesforce.com/s/articleView?id=sf.reports_overview.htm"},
        {text:"Business Analysis Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_business_analyst"},
        {text:"Trailhead BA Trail",url:"https://trailhead.salesforce.com/content/learn/trails/salesforce-business-analyst"}
      ]},
      {tag:"exam-prep-ba",focus:"Business Analyst exam prep: discovery, user stories, and Salesforce-specific BA skills",topics:[
        {text:"Business Analyst Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Business-Analyst-Exam-Guide"},
        {text:"BA Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-business-analyst-credential"},
        {text:"Business Analysis Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_business_analyst"},
        {text:"Salesforce Business Analyst Quick Look",url:"https://trailhead.salesforce.com/content/learn/modules/salesforce-business-analyst-quick-look"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-business-analyst---BA-201"},
        {text:"BA Trail",url:"https://trailhead.salesforce.com/content/learn/trails/salesforce-business-analyst"}
      ]}
    ],
    quiz:[
      {domain:"User Stories", q: "What is the standard format for writing a user story?", a: "As a [role], I want [goal], so that [benefit]", options: ["When [condition], then [action]", "As a [role], I want [goal], so that [benefit]", "Given [context], when [action], then [outcome]", "User needs [feature] to accomplish [goal]"] },
      {domain:"User Stories", q: "What does the INVEST acronym stand for for well-formed user stories?", a: "Independent, Negotiable, Valuable, Estimable, Small, Testable", options: ["Integrated, New, Verified, Executable, Specific, Trackable", "Independent, Negotiable, Valuable, Estimable, Small, Testable", "Iterative, New, Validated, Estimated, Scoped, Tested", "Integrated, Negotiated, Verified, Executable, Sized, Testable"] },
      {domain:"Business Process Mapping", q: "What is a swimlane diagram used for in business process mapping?", a: "Showing which roles or departments are responsible for each step in a process", options: ["Mapping database relationships between objects", "Showing which roles or departments are responsible for each step in a process", "Visualizing data flow through integration points", "Diagramming the Salesforce object schema"] },
      {domain:"Business Process Mapping", q: "What is the purpose of a current-state (as-is) process map?", a: "To document how a process works today, revealing pain points and inefficiencies", options: ["To define the desired future process flow", "To document how a process works today, revealing pain points and inefficiencies", "To specify the technical implementation steps", "To satisfy compliance documentation requirements"] },
      {domain:"Customer Discovery", q: "In Agile, what is the role of the Product Owner?", a: "Prioritizing the backlog and representing the voice of the customer to the development team", options: ["Facilitating Scrum ceremonies and removing impediments", "Prioritizing the backlog and representing the voice of the customer to the development team", "Writing user stories and acceptance criteria", "Approving all technical decisions made by the team"] },
      {domain:"User Acceptance Testing (UAT)", q: "What is a UAT test case derived from?", a: "The acceptance criteria of the corresponding user story", options: ["The technical design specification", "The acceptance criteria of the corresponding user story", "The system admin's configuration documentation", "The defect log from the previous sprint"] },
      {domain:"Collaboration with Stakeholders", q: "Which requirements prioritization framework uses four categories: Must Have, Should Have, Could Have, Won't Have?", a: "MoSCoW", options: ["RICE", "Kano", "MoSCoW", "Weighted Scoring"] },
      {domain:"Collaboration with Stakeholders", q: "What is the purpose of affinity mapping in a requirements workshop?", a: "Grouping related ideas or requirements together to identify themes and patterns", options: ["Mapping system integrations to business processes", "Grouping related ideas or requirements together to identify themes and patterns", "Creating a visual map of stakeholder relationships", "Documenting data flow between systems"] },
      {domain:"Collaboration with Stakeholders", q: "What is a Business Requirements Document (BRD) used for?", a: "Documenting the business needs and outcomes a project must achieve", options: ["Technical specifications for developers to implement", "Documenting the business needs and outcomes a project must achieve", "A sprint backlog with user stories", "A deployment checklist for go-live"] },
      {domain:"User Acceptance Testing (UAT)", q: "What is a UAT defect's 'severity' based on?", a: "The business impact of the defect if not fixed (e.g., critical, high, medium, low)", options: ["How long the defect has been open", "The business impact of the defect if not fixed (e.g., critical, high, medium, low)", "The number of users affected by the defect", "How difficult the defect is to reproduce"] },
      {domain:"Customer Discovery", q: "In Agile, what is the purpose of a Sprint Retrospective?", a: "For the team to reflect on the process and identify improvements for the next sprint", options: ["Reviewing completed features with stakeholders", "For the team to reflect on the process and identify improvements for the next sprint", "Planning user stories for the upcoming sprint", "Updating the product backlog with new requirements"] },
      {domain:"User Acceptance Testing (UAT)", q: "What is 'scope creep' in a Salesforce project?", a: "Uncontrolled addition of requirements after the project scope has been agreed upon", options: ["When the project schedule extends beyond the agreed deadline", "Uncontrolled addition of requirements after the project scope has been agreed upon", "When technical complexity increases during development", "When stakeholders change their business processes mid-project"] },
      {domain:"User Stories", q: "Which Salesforce feature allows BAs to prototype UI solutions without writing code?", a: "Lightning App Builder / Flow Screen Designer", options: ["Custom Apex classes", "Lightning App Builder / Flow Screen Designer", "Process Builder templates", "Visualforce page editor"] },
      {domain:"Customer Discovery", q: "What is a stakeholder's 'interest vs. power' matrix used for?", a: "Categorizing stakeholders to determine appropriate engagement and communication strategies", options: ["Assessing user adoption risk for each stakeholder group", "Categorizing stakeholders to determine appropriate engagement and communication strategies", "Ranking business requirements by stakeholder priority", "Identifying subject matter experts for UAT"] },
      {domain:"User Stories", q: "What does 'Given/When/Then' format specify in acceptance criteria?", a: "Given [context], When [action], Then [expected outcome]", options: ["Given [priority], When [feature], Then [test]", "Given [context], When [action], Then [expected outcome]", "Given [user role], When [requirement], Then [implementation]", "Given [problem], When [solution], Then [benefit]"] },
      {domain:"Declarative Salesforce", q: "What Salesforce feature would a BA recommend for automating a simple record update when another field changes?", a: "Flow (Record-Triggered Flow)", options: ["Custom Apex Trigger", "Flow (Record-Triggered Flow)", "Workflow Rule", "Lightning Component"] },
      {domain:"Customer Discovery", q: "What is the purpose of a Sprint Review in Agile?", a: "Demonstrating completed sprint work to stakeholders and gathering feedback", options: ["The team reviewing their own process", "Demonstrating completed sprint work to stakeholders and gathering feedback", "Updating the release notes for the sprint", "Planning the next sprint's backlog"] },
      {domain:"Collaboration with Stakeholders", q: "What is a key risk BAs should flag when stakeholders cannot agree on requirements?", a: "Project delays, scope ambiguity, and delivering a solution that doesn't meet anyone's needs", options: ["Developer inefficiency due to unclear specifications", "Project delays, scope ambiguity, and delivering a solution that doesn't meet anyone's needs", "Budget overrun from extra development hours", "Test case gaps in the UAT plan"] },
      {domain:"Declarative Salesforce", q: "What is the difference between a functional requirement and a non-functional requirement?", a: "Functional requirements describe what the system does; non-functional describe how well it does it (performance, security, usability)", options: ["Functional requirements come from business users; non-functional come from IT", "Functional requirements describe what the system does; non-functional describe how well it does it (performance, security, usability)", "Functional requirements are documented; non-functional are assumed", "Non-functional requirements are only tested in UAT; functional in unit tests"] },
      {domain:"Declarative Salesforce", q: "Why is a traceability matrix important in Salesforce project delivery?", a: "It links business requirements to user stories and test cases, ensuring all requirements are implemented and tested", options: ["It tracks code changes to requirements documentation", "It links business requirements to user stories and test cases, ensuring all requirements are implemented and tested", "It maps Salesforce objects to source system data", "It documents the relationship between sandboxes and deployment environments"] }
    ],
    tips:[
      "Master user story writing — format, acceptance criteria, and the INVEST criteria are heavily tested.",
      "Know all Agile ceremonies and who is responsible for what in each ceremony.",
      "Understand when to use each discovery technique: interviews, workshops, observation, surveys.",
      "Know UAT planning: test case derivation from acceptance criteria, defect severity levels.",
      "Understand the BA's role in bridging business and technical teams — not writing code, but translating requirements.",
      "Know the MoSCoW framework for requirements prioritization.",
      "Be able to identify when a Salesforce declarative solution is appropriate vs. needing customization.",
      "Understand the difference between functional and non-functional requirements and how to document each."
    ]
  },

  "Sales Cloud Consultant": {
    questions: 60,
    time: 105,
    pass: 63,
    experience: "1+ year implementing Salesforce Sales Cloud solutions",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-sales-consultant---Sales-Con-201",
    prerequisites: ["Platform Administrator"],
    overview: "The Salesforce Sales Cloud Consultant certification validates expertise in designing and implementing Sales Cloud solutions. Candidates demonstrate the ability to analyze customer requirements, design lead-to-cash processes, and implement Sales Cloud features including opportunities, forecasting, and territory management.",
    domains: [
      { name: "Industry Knowledge", pct: 7, color: "#00A1E0", desc: "Understand sales industry concepts, KPIs, and processes that Salesforce Sales Cloud is designed to support.", keyTopics: [
      {title:"Sales Terminology",desc:"Know common sales terms: pipeline, forecast categories, quota, ramp, and sales velocity."},
      {title:"Sales Process Stages",desc:"Map sales methodologies (MEDDIC, Challenger, SPIN) to Salesforce opportunity stages."},
      {title:"Sales KPIs",desc:"Identify leading and lagging sales indicators and how Salesforce metrics track against them."}
    ] },
      { name: "Implementation Strategies", pct: 13, color: "#2ECC71", desc: "Apply Sales Cloud implementation best practices including data migration, change management, and rollout planning.", keyTopics: [
      {title:"Implementation Methodology",desc:"Apply Salesforce implementation phases: discover, design, build, test, deploy, and optimize."},
      {title:"Data Migration",desc:"Plan account, contact, and opportunity data migration including deduplication and mapping."},
      {title:"Change Management",desc:"Design adoption programs for sales teams including training, champions, and incentives."}
    ] },
      { name: "Sales Metrics, Reports, and Dashboards", pct: 13, color: "#F39C12", desc: "Design Salesforce reports and dashboards that give sales leaders and reps actionable visibility.", keyTopics: [
      {title:"Report Types",desc:"Select joined, summary, matrix, and tabular report types for different sales analytics needs."},
      {title:"Dashboard Design",desc:"Build role-based dashboards for VPs, managers, and reps with relevant KPI visibility."},
      {title:"Forecasting Reports",desc:"Configure collaborative forecasting reports to track quota attainment and pipeline health."}
    ] },
      { name: "Sales Cloud Solution Design", pct: 25, color: "#E74C3C", desc: "Design Sales Cloud configurations for lead management, opportunity tracking, and account-based selling.", keyTopics: [
      {title:"Lead Management",desc:"Design lead capture, assignment rules, and conversion processes for sales funnel entry."},
      {title:"Opportunity Management",desc:"Configure opportunity stages, sales processes, and path guidance for deal tracking."},
      {title:"Account-Based Selling",desc:"Model account hierarchies, contact roles, and territory management for enterprise sales."}
    ] },
      { name: "Marketing and Leads", pct: 13, color: "#1ABC9C", desc: "Configure Salesforce lead management and marketing integration to support top-of-funnel sales activities.", keyTopics: [
      {title:"Lead Capture and Routing",desc:"Set up web-to-lead, lead assignment rules, and round-robin queues for inbound leads."},
      {title:"Campaign Management",desc:"Configure Salesforce Campaigns and ROI tracking for marketing-driven pipeline."},
      {title:"Marketing Cloud Integration",desc:"Connect Marketing Cloud Account Engagement (Pardot) for lead nurture handoffs."}
    ] },
      { name: "Account and Contact Management", pct: 11, color: "#BDC3E7", desc: "Configure Salesforce account and contact records for effective relationship and activity management.", keyTopics: [
      {title:"Account Hierarchies",desc:"Model parent-child account relationships for enterprise and multi-division customers."},
      {title:"Contact Roles",desc:"Configure opportunity contact roles to track buying committee members and influence."},
      {title:"Activity Tracking",desc:"Enable activity timeline, Einstein Activity Capture, and task/event automation."}
    ] },
      { name: "Opportunity Management", pct: 12, color: "#FF6B35", desc: "Configure Salesforce opportunity management including stages, forecasting, and collaboration features.", keyTopics: [
      {title:"Stage Management",desc:"Define opportunity stages aligned to the sales process with probability and guidance."},
      {title:"Collaborative Forecasting",desc:"Set up forecasting categories, adjustments, and manager override capabilities."},
      {title:"Big Deal Alerts",desc:"Configure opportunity update reminders and big deal alerts for manager visibility."}
    ] },
      { name: "Sales Productivity", pct: 6, color: "#9B59B6", desc: "Implement Salesforce productivity features that reduce administrative burden for sales reps.", keyTopics: [
      {title:"Einstein Features",desc:"Enable Einstein Lead Scoring, Opportunity Scoring, and Email Insights for reps."},
      {title:"Salesforce Inbox",desc:"Configure Salesforce Inbox for email integration and activity logging from email clients."},
      {title:"Mobile Optimization",desc:"Customize Salesforce mobile app navigation and layouts for field sales use cases."}
    ] }
    ],
    studyDays:[
      {tag:"sales-solution-design",focus:"Solution design for Sales Cloud: lead process, opportunity management, and forecasting",topics:[
        {text:"Sales Cloud Consultant Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Sales-Cloud-Consultant-Exam-Guide"},
        {text:"Lead Management",url:"https://help.salesforce.com/s/articleView?id=sf.leads_overview.htm"},
        {text:"Opportunity Management",url:"https://help.salesforce.com/s/articleView?id=sf.opportunities_overview.htm"},
        {text:"Collaborative Forecasting",url:"https://help.salesforce.com/s/articleView?id=sf.forecasts3_overview.htm"},
        {text:"Territory Management",url:"https://help.salesforce.com/s/articleView?id=sf.territory2_overview.htm"},
        {text:"Sales Cloud Consultant Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-sales-cloud-consultant-credential"}
      ]},
      {tag:"sales-automation",focus:"Sales automation: Einstein Activity Capture, cadences, CPQ basics, and revenue intelligence",topics:[
        {text:"Einstein Activity Capture",url:"https://help.salesforce.com/s/articleView?id=sf.einstein_sales_activity_capture.htm"},
        {text:"Sales Engagement Cadences",url:"https://help.salesforce.com/s/articleView?id=sf.sales_cadences_intro.htm"},
        {text:"Products and Price Books",url:"https://help.salesforce.com/s/articleView?id=sf.products_def.htm"},
        {text:"Quotes Object",url:"https://help.salesforce.com/s/articleView?id=sf.quotes_overview.htm"},
        {text:"Einstein Deal Insights",url:"https://help.salesforce.com/s/articleView?id=sf.einstein_sales_deal_insights.htm"},
        {text:"Pipeline Inspection",url:"https://help.salesforce.com/s/articleView?id=sf.pipeline_inspection_overview.htm"}
      ]},
      {tag:"exam-prep-sales-con",focus:"Sales Cloud Consultant exam prep: industry scenarios, implementation design, and data migration",topics:[
        {text:"Sales Cloud Consultant Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Sales-Cloud-Consultant-Exam-Guide"},
        {text:"Sales Cloud Consultant Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-sales-cloud-consultant-credential"},
        {text:"Sales Cloud Specialist Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_sales_cloud"},
        {text:"Forecasting Module",url:"https://trailhead.salesforce.com/content/learn/modules/forecasting_lightning_experience"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-sales-consultant---Sales-Con-201"},
        {text:"Territory Management Module",url:"https://trailhead.salesforce.com/content/learn/modules/territory_management"}
      ]}
    ],
    quiz:[
      {domain:"Opportunity Management", q: "Which Salesforce feature allows an admin to define guidance and key fields for reps at each opportunity stage?", a: "Sales Path", options: ["Opportunity Stages", "Sales Path", "Stage Guidance", "Opportunity Kanban"] },
      {domain:"Industry Knowledge", q: "What does a forecast category of 'Commit' indicate?", a: "The rep is highly confident the opportunity will close in the forecast period", options: ["The opportunity has been closed won", "The rep is highly confident the opportunity will close in the forecast period", "The manager has manually adjusted the forecast", "The opportunity is in early pipeline stages"] },
      {domain:"Sales Cloud Solution Design", q: "Which Sales Cloud feature enables territory-based account assignment using automated rules?", a: "Territory Management 2.0", options: ["Account Assignment Rules", "Territory Management 2.0", "Role Hierarchy", "Sharing Rules"] },
      {domain:"Sales Cloud Solution Design", q: "What is the purpose of Lead Conversion in Salesforce?", a: "To convert a Lead into an Account, Contact, and optionally an Opportunity", options: ["To move a Lead from one stage to another", "To convert a Lead into an Account, Contact, and optionally an Opportunity", "To assign a Lead to the appropriate sales rep", "To score a Lead based on engagement activity"] },
      {domain:"Opportunity Management", q: "Which field on an Opportunity determines which category it appears in for collaborative forecasting?", a: "Forecast Category", options: ["Opportunity Stage", "Close Date", "Forecast Category", "Probability"] },
      {domain:"Marketing and Leads", q: "What is a Campaign Hierarchy in Salesforce?", a: "A parent-child relationship between campaigns allowing roll-up of campaign statistics", options: ["A multi-step drip campaign automation sequence", "A parent-child relationship between campaigns allowing roll-up of campaign statistics", "A prioritization model for campaign budgets", "A stage-based campaign progression workflow"] },
      {domain:"Marketing and Leads", q: "Which report type would show which marketing campaigns generated the most closed opportunities?", a: "Campaigns with Opportunities report type using Campaign Influence", options: ["Opportunity by Lead Source report", "Campaigns with Opportunities report type using Campaign Influence", "Campaign ROI Analysis report", "Opportunity Pipeline by Source report"] },
      {domain:"Account and Contact Management", q: "What is Einstein Activity Capture used for?", a: "Automatically logging emails and calendar events to related Salesforce records", options: ["Tracking manual activity entries by sales reps", "Automatically logging emails and calendar events to related Salesforce records", "Predicting the next best action for sales reps", "Capturing Einstein Lead Score activity signals"] },
      {domain:"Opportunity Management", q: "In Collaborative Forecasting, what can a sales manager do that a rep cannot?", a: "Adjust forecast amounts for their direct reports", options: ["View their own quota", "Adjust forecast amounts for their direct reports", "Create new opportunity records", "Override the system-calculated probability"] },
      {domain:"Implementation Strategies", q: "What is the purpose of a Product Schedule in Salesforce CPQ/Sales Cloud?", a: "To define recurring revenue recognition or delivery schedule for a product", options: ["To schedule when a product is available in the price book", "To define recurring revenue recognition or delivery schedule for a product", "To set the delivery date for physical products", "To schedule when a product is reviewed for pricing updates"] },
      {domain:"Sales Cloud Solution Design", q: "Which lead management feature sends an automated email to a prospect after web-to-lead form submission?", a: "Auto-Response Rules", options: ["Lead Assignment Rules", "Auto-Response Rules", "Email Alerts", "Lead Queues"] },
      {domain:"Industry Knowledge", q: "What is Pipeline Coverage Ratio?", a: "The total pipeline value divided by the remaining quota, showing if there's enough pipeline to hit the number", options: ["The percentage of opportunities that close on time", "The total pipeline value divided by the remaining quota, showing if there's enough pipeline to hit the number", "The ratio of won opportunities to total opportunities", "The average number of opportunities per rep"] },
      {domain:"Implementation Strategies", q: "What type of Salesforce object is used to associate a price to a product for a specific price book?", a: "Price Book Entry", options: ["Product Price", "Price List Item", "Price Book Entry", "Product Rate"] },
      {domain:"Sales Cloud Solution Design", q: "In Sales Cloud, what is the purpose of Contact Roles on an Opportunity?", a: "To track which contacts are involved in the deal and their role in the buying decision", options: ["To control which contacts can edit the opportunity", "To track which contacts are involved in the deal and their role in the buying decision", "To set the primary contact for opportunity notifications", "To map contacts to their related accounts for the deal"] },
      {domain:"Sales Productivity", q: "Which Einstein feature analyzes sales calls to extract insights like key moments and competitor mentions?", a: "Einstein Conversation Insights", options: ["Einstein Call Coaching", "Einstein Conversation Insights", "Einstein Speech Analysis", "Einstein Sales Coach"] },
      {domain:"Account and Contact Management", q: "What is the recommended data model for tracking multiple products sold in a single sale?", a: "Opportunity Products (Opportunity Line Items) linked to the Opportunity", options: ["A separate custom object for each product sale", "Opportunity Products (Opportunity Line Items) linked to the Opportunity", "Multiple Opportunity records, one per product", "Product custom fields on the Opportunity record"] },
      {domain:"Implementation Strategies", q: "What Sales Cloud feature helps managers see the risk level of each opportunity in their team's pipeline?", a: "Pipeline Inspection", options: ["Forecast Dashboard", "Pipeline Inspection", "Territory Insights", "Sales Analytics App"] },
      {domain:"Sales Cloud Solution Design", q: "When should a consultant recommend Territory Management 2.0 over role-based sharing for account access?", a: "When account assignments need to be rules-based and independent of the org hierarchy", options: ["Territory Management is always better than roles", "When account assignments need to be rules-based and independent of the org hierarchy", "When the company has fewer than 100 sales reps", "When accounts need to be shared with external partners"] },
      {domain:"Sales Cloud Solution Design", q: "What is the primary benefit of using Account Hierarchies in Sales Cloud?", a: "Viewing revenue rollup across parent and child accounts for enterprise account management", options: ["Enforcing a specific org chart structure", "Viewing revenue rollup across parent and child accounts for enterprise account management", "Setting up sharing rules based on account tier", "Linking multiple contacts to their corporate parent"] },
      {domain:"Implementation Strategies", q: "Which Sales Cloud implementation best practice prevents duplicate accounts and contacts?", a: "Enabling Duplicate Management with matching rules and duplicate rules at go-live", options: ["Running monthly deduplication reports", "Enabling Duplicate Management with matching rules and duplicate rules at go-live", "Training users not to create duplicates", "Requiring admin approval for all new account creation"] }
    ],
    tips:[
      "Know the lead-to-opportunity-to-close process end-to-end — every decision point and what drives it.",
      "Understand Collaborative Forecasting: forecast hierarchy, categories, manager adjustments, and quotas.",
      "Know Territory Management 2.0 thoroughly — assignment rules, territory types, and access control.",
      "Understand Campaign Management: hierarchy, influence models, and ROI measurement.",
      "Know when Sales Path is the right recommendation for improving rep adoption.",
      "Be able to design an Account Hierarchy strategy for a large enterprise.",
      "Know Einstein Sales features: Lead Scoring, Opportunity Scoring, Activity Capture.",
      "Practice identifying which report type answers each sales leadership question."
    ]
  },

  "Service Cloud Consultant": {
    questions: 60,
    time: 105,
    pass: 65,
    experience: "1+ year implementing Salesforce Service Cloud solutions",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-service-consultant---Service-Con-201",
    prerequisites: ["Platform Administrator"],
    overview: "The Salesforce Service Cloud Consultant certification validates expertise in designing and implementing Service Cloud solutions. Candidates demonstrate mastery of case management, omni-channel routing, entitlements, knowledge bases, and field service integration.",
    domains: [
      { name: "Industry Knowledge", pct: 10, color: "#00A1E0", desc: "Understand customer service industry concepts, metrics, and best practices relevant to Service Cloud implementations.", keyTopics: [
      {title:"Service Terminology",desc:"Know key service metrics: CSAT, NPS, FCR, AHT, and SLA compliance rates."},
      {title:"Contact Center Models",desc:"Differentiate inbound vs. outbound, tiered support, and digital-first contact center models."},
      {title:"Service Trends",desc:"Understand digital deflection, self-service, and AI-augmented service industry trends."}
    ] },
      { name: "Implementation Strategies", pct: 15, color: "#2ECC71", desc: "Apply Service Cloud implementation methodologies including discovery, design, and phased deployment.", keyTopics: [
      {title:"Service Discovery",desc:"Conduct current-state service process assessment and future-state design workshops."},
      {title:"Phased Rollout",desc:"Plan phased Service Cloud rollouts by channel, team, or geography to reduce risk."},
      {title:"Agent Adoption",desc:"Design training and change management programs for contact center agent adoption."}
    ] },
      { name: "Service Cloud Solution Design", pct: 25, color: "#F39C12", desc: "Design core Service Cloud configurations including case management, omnichannel, and agent workspace.", keyTopics: [
      {title:"Case Management Design",desc:"Configure case creation, routing, escalation, and closure processes for service teams."},
      {title:"Omnichannel Setup",desc:"Configure omnichannel routing with skill-based assignment for email, chat, and voice."},
      {title:"Agent Workspace",desc:"Customize Lightning Service Console with components, quick actions, and macros for agents."}
    ] },
      { name: "Case Management", pct: 17, color: "#E74C3C", desc: "Configure Salesforce case management features to handle customer issues efficiently at scale.", keyTopics: [
      {title:"Case Assignment Rules",desc:"Build case assignment rules based on criteria like product, priority, and language."},
      {title:"Escalation Rules",desc:"Configure time-based escalation rules with automatic reassignment and notification."},
      {title:"Case Teams",desc:"Set up case teams for collaborative resolution of complex or high-priority cases."}
    ] },
      { name: "Knowledge Management", pct: 12, color: "#1ABC9C", desc: "Implement Salesforce Knowledge to deflect cases, speed up resolution, and capture organizational expertise.", keyTopics: [
      {title:"Knowledge Article Types",desc:"Design knowledge article record types and fields for different content categories."},
      {title:"Publishing Workflow",desc:"Configure draft/review/publish workflow with approval steps for quality control."},
      {title:"Einstein Search for Knowledge",desc:"Enable Einstein Article Recommendations to surface relevant articles during case resolution."}
    ] },
      { name: "Interaction Channels", pct: 11, color: "#BDC3E7", desc: "Configure Service Cloud digital channels including chat, messaging, email-to-case, and voice.", keyTopics: [
      {title:"Chat and Messaging",desc:"Set up Einstein Bots and live agent chat with pre-chat forms and routing logic."},
      {title:"Email-to-Case",desc:"Configure email-to-case with on-demand or email service addresses and auto-response rules."},
      {title:"Voice Integration",desc:"Integrate Amazon Connect or other CTI adapters via Service Cloud Voice."}
    ] },
      { name: "Contact Center Analytics", pct: 10, color: "#FF6B35", desc: "Build Service Cloud reports and dashboards to monitor contact center performance and agent productivity.", keyTopics: [
      {title:"Service Reports",desc:"Build case volume, resolution time, and backlog reports for operations management."},
      {title:"Agent Performance Dashboards",desc:"Create agent-level dashboards showing case handling metrics and CSAT scores."},
      {title:"SLA Compliance Monitoring",desc:"Track entitlement milestone compliance and SLA breach risk across the case queue."}
    ] }
    ],
    studyDays:[
      {tag:"service-solution-design",focus:"Service Cloud solution design: case management, entitlements, and service processes",topics:[
        {text:"Service Cloud Consultant Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Service-Cloud-Consultant-Exam-Guide"},
        {text:"Cases Overview",url:"https://help.salesforce.com/s/articleView?id=sf.cases_def_what_is_a_case.htm"},
        {text:"Entitlements and SLAs",url:"https://help.salesforce.com/s/articleView?id=sf.entitlements_overview.htm"},
        {text:"Omni-Channel Routing",url:"https://help.salesforce.com/s/articleView?id=sf.omnichannel_intro.htm"},
        {text:"Knowledge Management",url:"https://help.salesforce.com/s/articleView?id=sf.knowledge_whatis.htm"},
        {text:"Service Cloud Consultant Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-service-cloud-consultant-credential"}
      ]},
      {tag:"digital-engagement",focus:"Digital channels: digital engagement, Einstein Bots, Voice, and Field Service",topics:[
        {text:"Digital Engagement",url:"https://help.salesforce.com/s/articleView?id=sf.messaging_intro.htm"},
        {text:"Einstein Bots",url:"https://help.salesforce.com/s/articleView?id=sf.bots_intro.htm"},
        {text:"Service Cloud Voice",url:"https://help.salesforce.com/s/articleView?id=sf.voice_overview.htm"},
        {text:"Field Service Lightning",url:"https://help.salesforce.com/s/articleView?id=sf.fs_overview.htm"},
        {text:"Case Auto-Response Rules",url:"https://help.salesforce.com/s/articleView?id=sf.creating_auto-response_rules.htm"},
        {text:"Service Analytics",url:"https://help.salesforce.com/s/articleView?id=sf.bi_integrate_connectors_sfdc.htm"}
      ]},
      {tag:"exam-prep-svc-con",focus:"Service Cloud Consultant exam prep: omni-channel, knowledge, and entitlement scenarios",topics:[
        {text:"Service Cloud Consultant Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Service-Cloud-Consultant-Exam-Guide"},
        {text:"Service Cloud Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-service-cloud-consultant-credential"},
        {text:"Service Cloud Specialist Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_service_cloud"},
        {text:"Knowledge Basics Module",url:"https://trailhead.salesforce.com/content/learn/modules/knowledge_lightning"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-service-consultant---Svc-Con-201"},
        {text:"Omni-Channel Module",url:"https://trailhead.salesforce.com/content/learn/modules/omni-channel-lex"}
      ]}
    ],
    quiz:[
      {domain:"Service Cloud Solution Design", q: "Which Service Cloud feature automatically routes cases to the agent with the right skill set?", a: "Skills-Based Routing in Omni-Channel", options: ["Case Assignment Rules", "Skills-Based Routing in Omni-Channel", "Queue-Based Routing", "Einstein Case Routing"] },
      {domain:"Case Management", q: "What is the purpose of an Entitlement Milestone?", a: "To define a time-based SLA requirement that must be met within a case's entitlement process", options: ["To mark key stages in a case's lifecycle", "To define a time-based SLA requirement that must be met within a case's entitlement process", "To record resolution details when a case is closed", "To track customer satisfaction at key service points"] },
      {domain:"Service Cloud Solution Design", q: "What type of Email-to-Case setup is recommended for high email volume environments?", a: "Enhanced Email-to-Case (uses on-demand service to avoid Apex email limits)", options: ["On-Demand Email-to-Case", "Enhanced Email-to-Case (uses on-demand service to avoid Apex email limits)", "Standard Email-to-Case", "Batch Email Processing"] },
      {domain:"Industry Knowledge", q: "Which Service Cloud feature allows agents to access a complete view of a customer with multiple tabs and a utility bar?", a: "Service Console", options: ["Service Cloud App", "Service Console", "Agent Workspace", "Lightning Experience for Service"] },
      {domain:"Contact Center Analytics", q: "What is First Call Resolution (FCR) in service metrics?", a: "The percentage of cases resolved on the customer's first contact without requiring follow-up", options: ["The time it takes to answer an incoming call", "The percentage of cases resolved on the customer's first contact without requiring follow-up", "The resolution rate within the first 24 hours", "The accuracy of case categorization on first entry"] },
      {domain:"Industry Knowledge", q: "Which Knowledge feature controls which articles are visible to customers vs. internal agents?", a: "Knowledge Channels (Data Category Visibility)", options: ["Article Publication Status", "Knowledge Channels (Data Category Visibility)", "Article Type Visibility", "Knowledge Access Profiles"] },
      {domain:"Case Management", q: "What is the purpose of a Case Assignment Rule in Salesforce?", a: "To automatically assign incoming cases to the appropriate queue or agent based on case field values", options: ["To set the case priority based on SLA", "To automatically assign incoming cases to the appropriate queue or agent based on case field values", "To route cases to knowledge articles automatically", "To assign case ownership based on territory"] },
      {domain:"Implementation Strategies", q: "What is Omni-Channel presence status used for?", a: "Allowing agents to set their availability to receive new work items from Omni-Channel", options: ["Tracking agent login hours for payroll", "Allowing agents to set their availability to receive new work items from Omni-Channel", "Setting customer-visible status during chat sessions", "Monitoring case queue volumes in real time"] },
      {domain:"Implementation Strategies", q: "In Service Cloud, what does a Service Contract represent?", a: "A formal agreement with a customer defining the level of service they are entitled to receive", options: ["The statement of work for a professional services project", "A formal agreement with a customer defining the level of service they are entitled to receive", "A contract template for case resolution workflows", "A subscription agreement for product usage"] },
      {domain:"Knowledge Management", q: "Which Service Cloud feature helps deflect cases by presenting customers with relevant Knowledge articles?", a: "Experience Cloud self-service portal with Knowledge integration", options: ["Auto-Response Rules with article links", "Experience Cloud self-service portal with Knowledge integration", "Case Deflection Flow on the web form", "Einstein Article Recommendations in the inbox"] },
      {domain:"Interaction Channels", q: "What is a CTI (Computer Telephony Integration) screen pop?", a: "Automatically displaying a customer's record in Salesforce when an incoming call is received", options: ["A popup notification for incoming chat requests", "Automatically displaying a customer's record in Salesforce when an incoming call is received", "A dashboard screen that appears during a call for call notes", "An automatic case creation from a phone call"] },
      {domain:"Service Cloud Solution Design", q: "Which Service Cloud feature can automatically suggest knowledge articles to an agent as they type in a case?", a: "Einstein Article Recommendations", options: ["Quick Text Search", "Einstein Article Recommendations", "Knowledge Search Sidebar", "Case Feed Article Suggestions"] },
      {domain:"Case Management", q: "What is the purpose of Case Escalation Rules?", a: "To automatically reassign or escalate cases that haven't been resolved within a specified time", options: ["To define which cases require manager approval", "To automatically reassign or escalate cases that haven't been resolved within a specified time", "To escalate case priority when critical keywords are detected", "To notify supervisors when case volume exceeds a threshold"] },
      {domain:"Case Management", q: "Which Salesforce feature enables agents to send repetitive, consistent text snippets in case messages?", a: "Quick Text", options: ["Email Templates", "Quick Text", "Message Macros", "Canned Responses"] },
      {domain:"Implementation Strategies", q: "In a Service Cloud implementation, when should skills-based routing be used?", a: "When different agents have specialized expertise and cases should be matched to the agent with the right skill", options: ["When case volume is too high for queue-based routing", "When different agents have specialized expertise and cases should be matched to the agent with the right skill", "Skills-based routing should always replace queue-based routing", "Only for digital channel cases (chat, messaging)"] },
      {domain:"Industry Knowledge", q: "What report metric best measures the effectiveness of a self-service Knowledge base?", a: "Case deflection rate: percentage of customers who found an answer without creating a case", options: ["Number of article views", "Case deflection rate: percentage of customers who found an answer without creating a case", "Total knowledge articles published", "Agent article usage rate"] },
      {domain:"Service Cloud Solution Design", q: "Which Einstein Service feature automatically suggests the correct routing for incoming cases?", a: "Einstein Case Routing", options: ["Einstein Classification", "Einstein Case Routing", "Einstein Intent Routing", "Einstein Queue Manager"] },
      {domain:"Industry Knowledge", q: "What Work Order object in FSL represents a task assigned to a field technician?", a: "Work Order Line Item", options: ["Service Task", "Work Order Line Item", "Field Service Task", "Resource Assignment"] },
      {domain:"Industry Knowledge", q: "What is the recommended practice for CSAT survey timing in Service Cloud?", a: "Send CSAT survey immediately after case closure while the experience is fresh", options: ["Wait 3 days after case closure for reflection time", "Send CSAT survey immediately after case closure while the experience is fresh", "Send a weekly digest survey to all customers", "Only survey customers with high-priority cases"] },
      {domain:"Service Cloud Solution Design", q: "In Service Cloud solution design, when is Web-to-Case preferred over Email-to-Case?", a: "When structured data collection from customers is important (using form fields)", options: ["When email volume is too high", "When structured data collection from customers is important (using form fields)", "Web-to-Case is always preferred for security reasons", "When cases need to automatically attach emails"] }
    ],
    tips:[
      "Know Omni-Channel thoroughly: routing models, service channels, agent capacity, and presence status.",
      "Understand Entitlement Management end-to-end: entitlement processes, milestones, time triggers, and actions.",
      "Know Knowledge Management: data categories, channels, article types, and publication workflow.",
      "Understand the case lifecycle and all case creation channels (Email-to-Case, Web-to-Case, Chat).",
      "Be able to design a case escalation and routing strategy for a given contact center scenario.",
      "Know Service Console configuration: navigation model, utility bar, and console actions.",
      "Understand Einstein Service features: article recommendations, case routing, and Einstein Bots.",
      "Practice scenario-based questions asking you to choose between routing methods or channel configurations."
    ]
  },

  "Experience Cloud Consultant": {
    questions: 60,
    time: 105,
    pass: 65,
    experience: "1+ year implementing Salesforce Experience Cloud solutions",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-exp-cld-consultant---EX-Con-101",
    prerequisites: ["Platform Administrator"],
    overview: "The Salesforce Experience Cloud Consultant certification validates expertise in designing and implementing Experience Cloud communities. Candidates demonstrate mastery of community setup, templates, security, branding, and integration with Salesforce data.",
    domains: [
      { name: "Sharing, Visibility, and Licensing", pct: 23, color: "#00A1E0", desc: "Configure Experience Cloud sharing models, user licenses, and visibility settings to control data access for external users.", keyTopics: [
      {title:"External User Licenses",desc:"Select the correct Experience Cloud license type (Customer Community, Partner Community, etc.) per use case."},
      {title:"Sharing Sets and Rules",desc:"Configure sharing sets to grant portal users access to records related to their account or contact."},
      {title:"OWD for External Users",desc:"Set appropriate OWD defaults and understand their impact on portal user data visibility."}
    ] },
      { name: "Community Setup, Configuration, and Management", pct: 22, color: "#2ECC71", desc: "Configure Experience Cloud communities including creation, theme setup, and day-to-day administration.", keyTopics: [
      {title:"Community Creation",desc:"Create and configure Experience Cloud sites using Setup, including domain, activation, and indexing."},
      {title:"Navigation and Pages",desc:"Build site navigation menus, page layouts, and component placement using Experience Builder."},
      {title:"Community Management",desc:"Administer community members, moderate content, and manage user registration and login."}
    ] },
      { name: "Community Templates and Themes", pct: 18, color: "#F39C12", desc: "Apply and customize Experience Cloud templates and themes to create branded, responsive community experiences.", keyTopics: [
      {title:"Template Selection",desc:"Choose the right Experience Cloud template (LWR, Aura, Help Center, Partner Central) for the use case."},
      {title:"Theme Customization",desc:"Customize branding, colors, fonts, and CSS in Experience Builder for corporate identity."},
      {title:"LWC Components",desc:"Add custom Lightning Web Components to Experience Cloud pages for custom functionality."}
    ] },
      { name: "Salesforce CMS and Content", pct: 8, color: "#E74C3C", desc: "Use Salesforce CMS to manage and publish content across Experience Cloud sites.", keyTopics: [
      {title:"CMS Workspaces",desc:"Create CMS workspaces and connect them to Experience Cloud channels for content distribution."},
      {title:"Content Types",desc:"Configure CMS content types for articles, news, banners, and product content."},
      {title:"Translation and Localization",desc:"Manage multi-language content with CMS translation workflows for global communities."}
    ] },
      { name: "Security", pct: 15, color: "#1ABC9C", desc: "Secure Experience Cloud sites through authentication, guest user policies, and data protection settings.", keyTopics: [
      {title:"Guest User Security",desc:"Configure guest user profiles with minimal permissions and review guest access risks."},
      {title:"Login and Authentication",desc:"Set up social login, self-registration, and custom login pages for community users."},
      {title:"ClickJack and CSP",desc:"Enable ClickJack protection and configure Content Security Policy for Experience Cloud pages."}
    ] },
      { name: "Adoption and Analytics", pct: 14, color: "#BDC3E7", desc: "Drive community adoption and measure engagement using Experience Cloud dashboards and analytics.", keyTopics: [
      {title:"Community Analytics",desc:"Use the Community Management dashboards to track member growth, page views, and engagement."},
      {title:"Gamification Features",desc:"Enable reputation points and levels to incentivize quality contributions in communities."},
      {title:"Adoption Campaigns",desc:"Design launch and ongoing adoption campaigns with email and in-app notifications."}
    ] }
    ],
    studyDays:[
      {tag:"experience-cloud-design",focus:"Design Experience Cloud sites: templates, themes, branding, and Lightning pages",topics:[
        {text:"Experience Cloud Consultant Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Experience-Cloud-Consultant-Exam-Guide"},
        {text:"Experience Cloud Site Templates",url:"https://help.salesforce.com/s/articleView?id=sf.networks_lightning_templates.htm"},
        {text:"Experience Builder",url:"https://help.salesforce.com/s/articleView?id=sf.networks_builder_overview.htm"},
        {text:"CMS Content",url:"https://help.salesforce.com/s/articleView?id=sf.cms_overview.htm"},
        {text:"Experience Cloud Sharing",url:"https://help.salesforce.com/s/articleView?id=sf.networks_sharing_overview.htm"},
        {text:"Experience Cloud Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-experience-cloud-consultant-credential"}
      ]},
      {tag:"portal-users-security",focus:"Community users: licenses, self-registration, sharing sets, and guest user security",topics:[
        {text:"Community User Licenses",url:"https://help.salesforce.com/s/articleView?id=sf.users_license_types_communities.htm"},
        {text:"Self-Registration",url:"https://help.salesforce.com/s/articleView?id=sf.networks_self_registration.htm"},
        {text:"Sharing Sets",url:"https://help.salesforce.com/s/articleView?id=sf.customer_portal_associate_sharing_sets.htm"},
        {text:"Guest User Security",url:"https://help.salesforce.com/s/articleView?id=sf.networks_guest_user_security.htm"},
        {text:"Authentication Providers",url:"https://help.salesforce.com/s/articleView?id=sf.sso_provider_google.htm"},
        {text:"Moderation and Compliance",url:"https://help.salesforce.com/s/articleView?id=sf.networks_rules_overview.htm"}
      ]},
      {tag:"exam-prep-exp-con",focus:"Experience Cloud Consultant exam prep: site design, user management, and sharing",topics:[
        {text:"Experience Cloud Consultant Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Experience-Cloud-Consultant-Exam-Guide"},
        {text:"Experience Cloud Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-experience-cloud-consultant-credential"},
        {text:"Experience Cloud Basics Module",url:"https://trailhead.salesforce.com/content/learn/modules/community_cloud_basics"},
        {text:"Experience Cloud Specialist Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_community_specialist"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-experience-consultant---Exp-Con-201"},
        {text:"Digital Experiences Module",url:"https://trailhead.salesforce.com/content/learn/modules/sf_pkg_digital_experiences"}
      ]}
    ],
    quiz:[
      {domain:"Sharing, Visibility, and Licensing", q: "Which Experience Cloud license type allows external partners to access Opportunities, Leads, and run reports?", a: "Partner Community license", options: ["Customer Community Plus license", "Partner Community license", "External Apps license", "Customer Community license"] },
      {domain:"Sharing, Visibility, and Licensing", q: "What is a Sharing Set used for in Experience Cloud?", a: "Granting community users access to records related to their account without using the role hierarchy", options: ["Creating security groups for community moderation", "Granting community users access to records related to their account without using the role hierarchy", "Sharing community pages with specific user groups", "Setting visibility rules for Knowledge articles in the community"] },
      {domain:"Community Setup, Configuration, and Management", q: "Which Experience Cloud template is optimized for partner relationship management?", a: "Partner Central", options: ["Customer Service", "Partner Central", "Build Your Own (LWR)", "Salesforce Tabs + Visualforce"] },
      {domain:"Sharing, Visibility, and Licensing", q: "What is the difference between Customer Community and Customer Community Plus licenses?", a: "Plus licenses include a role in the Role Hierarchy, enabling sharing rules; standard licenses use sharing sets only", options: ["Plus licenses have higher storage limits", "Plus licenses include a role in the Role Hierarchy, enabling sharing rules; standard licenses use sharing sets only", "Plus licenses allow Chatter; standard licenses don't", "There is no functional difference — only price"] },
      {domain:"Sharing, Visibility, and Licensing", q: "Which feature allows guests (unauthenticated visitors) to access an Experience Cloud site?", a: "Guest User Profile configuration with appropriate object/record visibility", options: ["Public Site Settings", "Guest User Profile configuration with appropriate object/record visibility", "Anonymous Access Policy", "Guest Community License"] },
      {domain:"Security", q: "What is the purpose of a Registration Handler Apex class in Experience Cloud?", a: "To customize the self-registration flow: creating or updating users and assigning profiles during registration", options: ["To validate passwords during user registration", "To customize the self-registration flow: creating or updating users and assigning profiles during registration", "To handle OTP verification for new registrations", "To register the community with the App Exchange"] },
      {domain:"Sharing, Visibility, and Licensing", q: "Which Experience Cloud analytics dashboard shows how many unique users visited the community?", a: "Page Views dashboard (showing member logins and unique visitors)", options: ["Case Deflection Analytics", "Page Views dashboard (showing member logins and unique visitors)", "Community Health Dashboard", "Member Engagement Report"] },
      {domain:"Salesforce CMS and Content", q: "What is the role of Salesforce CMS in Experience Cloud?", a: "Providing a centralized content repository for managing and publishing content across Experience Cloud sites", options: ["Managing Knowledge article workflows", "Providing a centralized content repository for managing and publishing content across Experience Cloud sites", "Handling content delivery to CDN for performance", "Storing static resources for Lightning components"] },
      {domain:"Sharing, Visibility, and Licensing", q: "In Experience Cloud, what are Topics used for?", a: "Organizing Chatter posts and content to make information discoverable by subject area", options: ["Categorizing Knowledge articles by data category", "Organizing Chatter posts and content to make information discoverable by subject area", "Defining navigation menus in the community", "Tagging cases with categories for routing"] },
      {domain:"Sharing, Visibility, and Licensing", q: "Which Experience Cloud feature reduces support costs by helping users find answers before creating a case?", a: "Knowledge article search and case deflection", options: ["Escalation to agent chat", "Knowledge article search and case deflection", "Community moderation", "Guest user record access"] },
      {domain:"Sharing, Visibility, and Licensing", q: "What is the 'High-Volume Community User' license designed for?", a: "Cost-effective access for millions of external users who only interact with their own data", options: ["Power users with advanced analytics access", "Cost-effective access for millions of external users who only interact with their own data", "Internal employees accessing the community from mobile", "Partner users with revenue-reporting access"] },
      {domain:"Community Setup, Configuration, and Management", q: "What Community Builder feature allows non-developer admins to customize the look of a community site?", a: "Theme Editor (colors, fonts, and visual styling without code)", options: ["Lightning Component Editor", "Theme Editor (colors, fonts, and visual styling without code)", "CSS Override Console", "Branding Manager"] },
      {domain:"Sharing, Visibility, and Licensing", q: "What is the purpose of the 'Moderation Criteria' in Experience Cloud?", a: "Defining conditions (keywords, content types) that trigger automated moderation actions", options: ["Setting user roles and permissions in the community", "Defining conditions (keywords, content types) that trigger automated moderation actions", "Configuring spam filters for incoming emails", "Establishing reputation point thresholds for badges"] },
      {domain:"Community Setup, Configuration, and Management", q: "Which template is best for a simple, high-performance marketing or informational site?", a: "Build Your Own (LWR) Microsite", options: ["Customer Service Template", "Build Your Own (LWR) Microsite", "Partner Central Template", "Salesforce Tabs + Visualforce"] },
      {domain:"Sharing, Visibility, and Licensing", q: "In Experience Cloud, what does 'Networks' refer to in the underlying data model?", a: "The Salesforce object that represents an Experience Cloud site (formerly called Network)", options: ["The network infrastructure hosting the community", "The Salesforce object that represents an Experience Cloud site (formerly called Network)", "The set of connected communities in a hub-and-spoke model", "The Chatter network connecting all internal users"] },
      {domain:"Community Setup, Configuration, and Management", q: "How does Community Moderation 'flagging' work?", a: "Community members can flag content they believe violates community guidelines, triggering moderator review", options: ["The system automatically flags inappropriate content using AI", "Community members can flag content they believe violates community guidelines, triggering moderator review", "Admins receive flags for all new posts for approval", "Flagged content is automatically hidden until reviewed"] },
      {domain:"Sharing, Visibility, and Licensing", q: "What is a key adoption metric for an Experience Cloud customer support community?", a: "Case deflection rate: percentage of customers who resolved their issue without creating a case", options: ["Number of community members registered", "Case deflection rate: percentage of customers who resolved their issue without creating a case", "Total page views per day", "Number of articles published per month"] },
      {domain:"Sharing, Visibility, and Licensing", q: "Which Experience Cloud feature allows partners to register new deals to prevent conflict with direct sales?", a: "Deal Registration", options: ["Opportunity Sharing", "Deal Registration", "Lead Distribution", "Pipeline Management"] },
      {domain:"Community Templates and Themes", q: "What is the LWR (Lightning Web Runtime) advantage over Aura-based Experience Cloud templates?", a: "Better performance through modern web standards, faster page loads, and PWA capabilities", options: ["More pre-built components available", "Better performance through modern web standards, faster page loads, and PWA capabilities", "Compatibility with all Visualforce pages", "No-code component customization options"] },
      {domain:"Sharing, Visibility, and Licensing", q: "When should a consultant recommend the Customer Community Plus license over the standard Customer Community license?", a: "When customers need to see records beyond their own account (e.g., cases from their organization) requiring role-based sharing", options: ["When customers need to run reports on their data", "When customers need to see records beyond their own account (e.g., cases from their organization) requiring role-based sharing", "When customers need Chatter access", "Customer Community Plus is always the better choice"] }
    ],
    tips:[
      "Know all license types: Customer Community vs. Customer Community Plus vs. Partner Community — and what sharing mechanism each uses.",
      "Master sharing for external users: sharing sets, sharing rules, and when each applies to community users.",
      "Know all template options and the appropriate use case for each.",
      "Understand the Guest User profile and how to securely configure access for unauthenticated visitors.",
      "Know Community moderation features: flagging, criteria, and automated moderation actions.",
      "Understand the self-registration flow and Registration Handler Apex customization.",
      "Know community analytics metrics and how to measure community health and adoption.",
      "Understand the difference between high-volume (no role) and standard community users and the sharing implications."
    ]
  },

  "Field Service Consultant": {
    questions: 60,
    time: 105,
    pass: 63,
    experience: "1+ year implementing Salesforce Field Service Lightning solutions",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-fs-consultant---FS-Con-101",
    prerequisites: ["Platform Administrator"],
    overview: "The Salesforce Field Service Consultant certification validates expertise in implementing Field Service Lightning (FSL). Candidates demonstrate mastery of work order management, scheduling optimization, resource management, and mobile app configuration for field service operations.",
    domains: [
      { name: "Managing Resources", pct: 16, color: "#00A1E0", desc: "Configure Field Service resource management including service resources, skills, service territories, and operating hours.", keyTopics: [
      {title:"Service Resources",desc:"Create and configure service resources, set skills and certifications, and assign service territories."},
      {title:"Service Territories",desc:"Design territory hierarchies and operating hours to reflect geographic field service coverage."},
      {title:"Resource Capacity",desc:"Configure capacity-based scheduling and resource availability for balanced workload distribution."}
    ] },
      { name: "Managing Work Orders", pct: 24, color: "#2ECC71", desc: "Configure Field Service work orders to capture service requests, track completion, and manage parts usage.", keyTopics: [
      {title:"Work Order Creation",desc:"Set up work order creation from cases, assets, or maintenance plans with required fields."},
      {title:"Work Order Line Items",desc:"Configure work order line items for discrete tasks and parts consumption tracking."},
      {title:"Service Appointments",desc:"Create and manage service appointments linked to work orders with status lifecycle."}
    ] },
      { name: "Scheduling and Optimization", pct: 28, color: "#F39C12", desc: "Configure and optimize Field Service scheduling to maximize resource utilization and minimize travel time.", keyTopics: [
      {title:"Scheduling Policies",desc:"Define scheduling policies with work rules and objectives to guide the optimization engine."},
      {title:"Optimization Engine",desc:"Run global, single-resource, and in-day optimization to improve schedule efficiency."},
      {title:"Gantt and Dispatch Console",desc:"Use the dispatcher console Gantt to visualize, drag-drop, and manage field schedules."}
    ] },
      { name: "FSL Configuration", pct: 20, color: "#E74C3C", desc: "Configure core Field Service Lightning settings including the managed package, permission sets, and custom settings.", keyTopics: [
      {title:"FSL Managed Package",desc:"Install and configure the FSL managed package including service objectives and scheduling permissions."},
      {title:"Permission Sets",desc:"Assign FSL permission sets (Dispatcher, Technician, Agent) to appropriate user groups."},
      {title:"Custom Settings and Flows",desc:"Configure FSL custom settings and build flows for automated work order and appointment creation."}
    ] },
      { name: "Mobile and Offline", pct: 12, color: "#1ABC9C", desc: "Configure the Field Service Mobile app for offline-capable technician workflows and data capture.", keyTopics: [
      {title:"Mobile App Setup",desc:"Configure the Field Service mobile app with offline profiles and sync settings."},
      {title:"Briefings and Knowledge",desc:"Surface work order details, manuals, and knowledge articles in technician mobile briefings."},
      {title:"Signature and Parts",desc:"Enable mobile signature capture, parts consumption, and service report generation on-site."}
    ] }
    ],
    studyDays:[
      {tag:"fsl-setup",focus:"Field Service Lightning setup: work orders, service appointments, scheduling policies",topics:[
        {text:"Field Service Consultant Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Field-Service-Consultant-Exam-Guide"},
        {text:"Field Service Overview",url:"https://help.salesforce.com/s/articleView?id=sf.fs_overview.htm"},
        {text:"Work Orders",url:"https://help.salesforce.com/s/articleView?id=sf.fs_work_orders.htm"},
        {text:"Service Appointments",url:"https://help.salesforce.com/s/articleView?id=sf.fs_service_appointments.htm"},
        {text:"Scheduling Policies",url:"https://help.salesforce.com/s/articleView?id=sf.fs_scheduling_policies.htm"},
        {text:"FSL Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-field-service-consultant-credential"}
      ]},
      {tag:"fsl-workforce",focus:"Field Service workforce: service territories, resources, crews, and mobile app",topics:[
        {text:"Service Territories",url:"https://help.salesforce.com/s/articleView?id=sf.fs_service_territories.htm"},
        {text:"Service Resources",url:"https://help.salesforce.com/s/articleView?id=sf.fs_service_resources.htm"},
        {text:"Dispatcher Console",url:"https://help.salesforce.com/s/articleView?id=sf.fs_dispatcher_console.htm"},
        {text:"Mobile Worker App",url:"https://help.salesforce.com/s/articleView?id=sf.fs_mobile_app_overview.htm"},
        {text:"Inventory and Parts",url:"https://help.salesforce.com/s/articleView?id=sf.fs_inventory.htm"},
        {text:"Time Sheets",url:"https://help.salesforce.com/s/articleView?id=sf.fs_time_sheets.htm"}
      ]},
      {tag:"exam-prep-fsl",focus:"Field Service Consultant exam prep: scheduling, work orders, and mobile worker scenarios",topics:[
        {text:"Field Service Consultant Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Field-Service-Consultant-Exam-Guide"},
        {text:"FSL Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-field-service-consultant-credential"},
        {text:"Field Service Basics Module",url:"https://trailhead.salesforce.com/content/learn/modules/field_service_basics"},
        {text:"Field Service Specialist Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_field_service_specialist"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-field-service-consultant---FSL-Con-201"},
        {text:"Service Resource Scheduling Module",url:"https://trailhead.salesforce.com/content/learn/modules/service-resource-scheduling"}
      ]}
    ],
    quiz:[
      {domain:"Managing Work Orders", q: "What FSL object represents an individual task or material required on a Work Order?", a: "Work Order Line Item", options: ["Service Task", "Work Order Line Item", "Work Task", "Service Item"] },
      {domain:"FSL Configuration", q: "Which FSL component provides a visual calendar-based view for dispatchers to manage technician schedules?", a: "Dispatcher Console with Gantt Chart", options: ["Field Service Map", "Dispatcher Console with Gantt Chart", "Technician Timeline", "Resource Scheduler"] },
      {domain:"Managing Resources", q: "What is the purpose of a Scheduling Policy in FSL?", a: "Defining the rules and objectives the optimization engine uses to assign appointments to resources", options: ["Defining when technicians are available to work", "Defining the rules and objectives the optimization engine uses to assign appointments to resources", "Setting customer appointment window preferences", "Configuring the mobile app scheduling display"] },
      {domain:"Managing Work Orders", q: "Which FSL object stores parts/materials available at a specific location (warehouse, truck)?", a: "Product Item", options: ["Product Consumed", "Product Item", "Inventory Item", "Stock Item"] },
      {domain:"Scheduling and Optimization", q: "What is 'In-Day Optimization' in FSL?", a: "Continuously optimizing the remaining appointments for the current day as conditions change", options: ["Optimizing a single technician's schedule manually", "Continuously optimizing the remaining appointments for the current day as conditions change", "Running optimization at the start of each workday", "Optimizing appointment windows based on customer preferences"] },
      {domain:"FSL Configuration", q: "What FSL feature tracks the time a technician spends on different activities?", a: "Time Sheet Entries", options: ["Activity Logs", "Time Sheet Entries", "Labor Records", "Job Time Tracker"] },
      {domain:"Managing Resources", q: "Which FSL object defines the recurring maintenance schedule for an asset?", a: "Maintenance Plan", options: ["Asset Schedule", "Maintenance Plan", "Preventive Work Order", "Service Contract"] },
      {domain:"Managing Resources", q: "What is a Service Territory Member?", a: "A Service Resource assigned to work in a specific Service Territory", options: ["A customer account in a service region", "A Service Resource assigned to work in a specific Service Territory", "A team member in a crew assigned to a territory", "A manager responsible for a service territory"] },
      {domain:"Managing Work Orders", q: "Which FSL feature allows the system to automatically generate Work Orders for recurring maintenance?", a: "Maintenance Work Rules with Preventive Maintenance Plans", options: ["Scheduled Apex triggers", "Maintenance Work Rules with Preventive Maintenance Plans", "Auto-generated Work Orders via Workflow", "Service Scheduling Engine"] },
      {domain:"Managing Resources", q: "What does 'First Time Fix Rate' measure in Field Service analytics?", a: "The percentage of service appointments resolved on the first visit without a return trip", options: ["The percentage of appointments completed in the first hour", "The percentage of service appointments resolved on the first visit without a return trip", "The percentage of Work Orders opened and closed the same day", "The accuracy of initial appointment time estimates"] },
      {domain:"Mobile and Offline", q: "What FSL mobile feature allows technicians to work without internet connectivity?", a: "Offline Access in the FSL Mobile App", options: ["Mobile Cache Mode", "Offline Access in the FSL Mobile App", "Service App Light Mode", "Technician Sync Mode"] },
      {domain:"Managing Work Orders", q: "How are Customer Assets used in FSL?", a: "To track equipment installed at customer sites that requires maintenance and service", options: ["To manage the customer's billing information for services", "To track equipment installed at customer sites that requires maintenance and service", "To store product catalog information for the field technician", "To document asset ownership and transfer records"] },
      {domain:"Managing Work Orders", q: "What is a Return Order in FSL parts management?", a: "A record tracking parts returned by a technician to the warehouse after a job", options: ["A Work Order created when parts are returned from a job", "A record tracking parts returned by a technician to the warehouse after a job", "A customer return request for defective equipment", "An order created when parts need to be re-ordered from a supplier"] },
      {domain:"Managing Resources", q: "Which FSL scheduling option allows a customer to choose their preferred appointment window?", a: "Appointment Booking (Self-Scheduling) via Experience Cloud or embedded booking widget", options: ["Dispatcher Manual Assignment", "Appointment Booking (Self-Scheduling) via Experience Cloud or embedded booking widget", "Customer-Requested Scheduling in FSL", "Self-Service Gantt for Customers"] },
      {domain:"Managing Resources", q: "What is the role of Crew Leader in FSL?", a: "The resource responsible for managing a crew and typically the primary contact for communication", options: ["An admin role for configuring crew settings", "The resource responsible for managing a crew and typically the primary contact for communication", "The most senior technician in a service territory", "The dispatcher assigned to manage the crew's schedule"] },
      {domain:"FSL Configuration", q: "Which FSL feature notifies customers automatically when a technician is on the way to their location?", a: "Appointment Assistant (customer-facing notifications)", options: ["Customer SMS Notifications", "Appointment Assistant (customer-facing notifications)", "Technician Tracking Widget", "En-Route Alert Configuration"] },
      {domain:"Managing Resources", q: "What is the 'Work Type' object used for in FSL?", a: "Defining templates with required skills, duration, and work order line items for common types of work", options: ["Categorizing work orders by business unit", "Defining templates with required skills, duration, and work order line items for common types of work", "Setting work order billing type (time and materials, fixed)", "Classifying field service activities for reporting purposes"] },
      {domain:"Scheduling and Optimization", q: "In FSL, what does 'Global Optimization' do?", a: "Optimizes all scheduled appointments across all resources and territories for a specified date range", options: ["Provides AI-powered routing for all technicians globally", "Optimizes all scheduled appointments across all resources and territories for a specified date range", "Runs nightly optimization for the next 30 days", "Globalizes scheduling settings across multiple FSL orgs"] },
      {domain:"Managing Resources", q: "What is the purpose of 'Operating Hours' in FSL configuration?", a: "Defining when service resources or territories are available to be scheduled", options: ["Setting business hours for the call center", "Defining when service resources or territories are available to be scheduled", "Configuring the time window for appointment confirmations", "Setting the hours that the FSL mobile app is available"] },
      {domain:"Managing Resources", q: "Which FSL report would show how much time technicians spend driving vs. working?", a: "Resource Utilization Report (Travel Time vs. Work Time)", options: ["Service Appointment Activity Report", "Resource Utilization Report (Travel Time vs. Work Time)", "Technician Efficiency Dashboard", "Work Order Completion Time Report"] }
    ],
    tips:[
      "Know the FSL data model: Work Order → Service Appointment → Service Resource → Service Territory.",
      "Understand Scheduling Policies and Optimization thoroughly — the exam heavily tests scheduling configuration.",
      "Know all resource management elements: skills, operating hours, absence management, and crew configuration.",
      "Understand the difference between In-Day and Global Optimization and when to use each.",
      "Know Parts Management: Product Item, Product Consumed, Product Required, and Return Orders.",
      "Understand Preventive Maintenance: Maintenance Plans, Work Rules, and auto-generated Work Orders.",
      "Know the FSL mobile app capabilities, especially offline access for technicians in low-connectivity areas.",
      "Be able to design a Field Service implementation from Case creation through Work Order to completion."
    ]
  },

  "Data Cloud Consultant": {
    questions: 60,
    time: 105,
    pass: 67,
    experience: "1+ year implementing Salesforce Data Cloud (formerly CDP) solutions",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-data-cloud---Data-Con-101",
    prerequisites: ["Platform Administrator"],
    overview: "The Salesforce Data Cloud Consultant certification validates expertise in implementing Salesforce Data Cloud solutions. Candidates demonstrate mastery of data ingestion, identity resolution, segmentation, activation, and AI/analytics use cases for unified customer data.",
    domains: [
      { name: "Data Cloud Architecture", pct: 15, color: "#00A1E0", desc: "Understand Data Cloud platform architecture including data ingestion, storage layers, and integration with Salesforce.", keyTopics: [
      {title:"Platform Overview",desc:"Describe Data Cloud components: data streams, data lake objects, data model objects, and calculated insights."},
      {title:"Salesforce Integration",desc:"Explain how Data Cloud connects to Sales, Service, and Marketing Cloud via native connectors."},
      {title:"Data Cloud Licensing",desc:"Understand Data Cloud credit consumption model and capacity planning for customer data volumes."}
    ] },
      { name: "Data Ingestion and Modeling", pct: 25, color: "#2ECC71", desc: "Configure Data Cloud data streams and data model objects to ingest and structure customer data from multiple sources.", keyTopics: [
      {title:"Data Stream Configuration",desc:"Set up batch, streaming, and Salesforce CRM data streams with appropriate ingestion schedules."},
      {title:"Data Model Mapping",desc:"Map source fields to Data Cloud standard or custom data model objects for unified storage."},
      {title:"Data Transforms",desc:"Apply formula fields, filters, and enrichments to raw ingested data in Data Cloud."}
    ] },
      { name: "Identity Resolution", pct: 20, color: "#F39C12", desc: "Configure Data Cloud identity resolution rules to create unified individual profiles from disparate data sources.", keyTopics: [
      {title:"Matching Rules",desc:"Define fuzzy and exact matching rules on email, phone, and name fields to link records."},
      {title:"Reconciliation Rules",desc:"Set reconciliation rules to determine which source wins for each field in the unified profile."},
      {title:"Profile Review",desc:"Use the profile explorer to inspect unified individual profiles and verify resolution quality."}
    ] },
      { name: "Segmentation and Activation", pct: 25, color: "#E74C3C", desc: "Build Data Cloud segments and activate them to marketing, advertising, and Salesforce CRM destinations.", keyTopics: [
      {title:"Segment Builder",desc:"Create segments using attribute, related attribute, and calculated insight filters."},
      {title:"Activation Targets",desc:"Configure activation targets for Marketing Cloud, advertising platforms, and CRM."},
      {title:"Segment Refresh",desc:"Set segment refresh schedules and understand full vs. rapid publish options."}
    ] },
      { name: "Insights and Analytics", pct: 15, color: "#1ABC9C", desc: "Create Data Cloud calculated insights and integrate them with Salesforce for AI-powered decisioning.", keyTopics: [
      {title:"Calculated Insights",desc:"Build metric-based calculated insights using SOQL-style queries across data model objects."},
      {title:"Einstein and AI",desc:"Use Data Cloud as the data foundation for Einstein features like Next Best Action and scoring."},
      {title:"CRM Analytics Integration",desc:"Connect Data Cloud datasets to CRM Analytics for advanced reporting and exploration."}
    ] }
    ],
    studyDays:[
      {tag:"data-cloud-setup",focus:"Data Cloud setup: data streams, ingestion, identity resolution, and data model",topics:[
        {text:"Data Cloud Consultant Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Data-Cloud-Consultant-Exam-Guide"},
        {text:"Data Cloud Overview",url:"https://help.salesforce.com/s/articleView?id=sf.c360_a_data_cloud_overview.htm"},
        {text:"Data Streams",url:"https://help.salesforce.com/s/articleView?id=sf.c360_a_data_stream_overview.htm"},
        {text:"Identity Resolution",url:"https://help.salesforce.com/s/articleView?id=sf.c360_a_identity_resolution_overview.htm"},
        {text:"Data Cloud Data Model",url:"https://help.salesforce.com/s/articleView?id=sf.c360_a_data_model_overview.htm"},
        {text:"Data Cloud Consultant Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-data-cloud-consultant-credential"}
      ]},
      {tag:"data-cloud-activation",focus:"Data Cloud segmentation, calculated insights, activation, and marketing integration",topics:[
        {text:"Segmentation in Data Cloud",url:"https://help.salesforce.com/s/articleView?id=sf.c360_a_segment_overview.htm"},
        {text:"Calculated Insights",url:"https://help.salesforce.com/s/articleView?id=sf.c360_a_calculated_insight_overview.htm"},
        {text:"Activation Targets",url:"https://help.salesforce.com/s/articleView?id=sf.c360_a_activation_overview.htm"},
        {text:"Data Cloud and Marketing Cloud",url:"https://help.salesforce.com/s/articleView?id=sf.c360_a_activation_marketing_cloud.htm"},
        {text:"Data Cloud Ingestion API",url:"https://developer.salesforce.com/docs/atlas.en-us.c360a_api.meta/c360a_api/c360a_api_overview.htm"},
        {text:"Data Cloud and Flow",url:"https://help.salesforce.com/s/articleView?id=sf.c360_a_flow_integration.htm"}
      ]},
      {tag:"exam-prep-dc-con",focus:"Data Cloud Consultant exam prep: ingestion, identity resolution, segmentation, and activation",topics:[
        {text:"Data Cloud Consultant Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Data-Cloud-Consultant-Exam-Guide"},
        {text:"Data Cloud Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-data-cloud-consultant-credential"},
        {text:"Data Cloud Basics Module",url:"https://trailhead.salesforce.com/content/learn/modules/salesforce-data-cloud-quick-look"},
        {text:"Data Cloud Specialist Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_data_cloud"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-data-cloud-consultant---DC-Con-201"},
        {text:"Data Cloud Documentation",url:"https://help.salesforce.com/s/articleView?id=sf.c360_a_data_cloud_overview.htm"}
      ]}
    ],
    quiz:[
      {domain:"Identity Resolution", q: "What is the purpose of Identity Resolution in Salesforce Data Cloud?", a: "To match and merge records from different sources into a single Unified Individual profile", options: ["To verify the identity of Data Cloud users", "To match and merge records from different sources into a single Unified Individual profile", "To resolve data conflicts between Sales Cloud and Marketing Cloud", "To assign unique IDs to all records ingested into Data Cloud"] },
      {domain:"Data Ingestion and Modeling", q: "What is a Data Stream in Salesforce Data Cloud?", a: "A connection to a data source that ingests data into Data Cloud on a defined schedule", options: ["A real-time data pipeline between Sales Cloud and Marketing Cloud", "A connection to a data source that ingests data into Data Cloud on a defined schedule", "A streaming API for real-time event processing", "A dashboard showing data flow through the platform"] },
      {domain:"Identity Resolution", q: "Which Data Cloud object type represents the unified view of an individual customer?", a: "Unified Individual", options: ["Unified Profile", "Unified Individual", "Master Record", "Customer 360 Profile"] },
      {domain:"Insights and Analytics", q: "What is a Calculated Insight in Data Cloud?", a: "A derived metric computed from Data Cloud data using a SQL-like query, available for segmentation", options: ["A pre-built AI prediction from Einstein", "A derived metric computed from Data Cloud data using a SQL-like query, available for segmentation", "An insight generated automatically by the Identity Resolution engine", "A recommendation from Data Cloud's AI for activation targets"] },
      {domain:"Segmentation and Activation", q: "What is the purpose of a Segment in Data Cloud?", a: "A defined audience of Unified Individuals meeting specific criteria, used for activation and personalization", options: ["A subset of data in a data extension for testing", "A defined audience of Unified Individuals meeting specific criteria, used for activation and personalization", "A report category for organizing Data Cloud dashboards", "A security partition separating customer data by region"] },
      {domain:"Identity Resolution", q: "In Data Cloud identity resolution, what is 'deterministic matching'?", a: "Matching records based on exact field values (e.g., email address matches exactly)", options: ["AI-powered probabilistic matching using ML", "Matching records based on exact field values (e.g., email address matches exactly)", "Matching based on a confirmed identity document", "Matching using a pre-determined rule set with manual review"] },
      {domain:"Segmentation and Activation", q: "What is an Activation Target in Data Cloud?", a: "A destination where Data Cloud activates (publishes) segment data for use in marketing or personalization", options: ["The Salesforce org that Data Cloud sends data to", "A destination where Data Cloud activates (publishes) segment data for use in marketing or personalization", "A target KPI for a Data Cloud campaign", "A specific database table where segment results are stored"] },
      {domain:"Data Cloud Architecture", q: "Which Data Cloud object type stores raw ingested data before it is mapped to the data model?", a: "Data Lake Object (DLO)", options: ["Data Stream Object", "Data Lake Object (DLO)", "Raw Data Store", "Staging Area Object"] },
      {domain:"Data Cloud Architecture", q: "What is Contact Point Consent in Data Cloud?", a: "A record tracking whether a customer has consented to be contacted via a specific channel (email, phone, etc.)", options: ["A consent form linked to a Contact record", "A record tracking whether a customer has consented to be contacted via a specific channel (email, phone, etc.)", "An opt-in record for the Data Cloud platform terms", "A GDPR compliance certificate for the Data Cloud org"] },
      {domain:"Identity Resolution", q: "How does Data Cloud integrate with Marketing Cloud for email personalization?", a: "Activating Data Cloud segments to Marketing Cloud, where they become sendable data extensions for Journey Builder", options: ["Replacing Marketing Cloud's subscriber lists with Data Cloud profiles", "Activating Data Cloud segments to Marketing Cloud, where they become sendable data extensions for Journey Builder", "Syncing Data Cloud Unified Profiles to All Subscribers in Marketing Cloud", "Connecting Data Cloud to Marketing Cloud via the Salesforce SOAP API"] },
      {domain:"Identity Resolution", q: "What is a Reconciliation Rule in Data Cloud Identity Resolution?", a: "A rule determining which source field value to use on the Unified Profile when multiple sources provide different values", options: ["A rule for resolving data conflicts during ETL ingestion", "A rule determining which source field value to use on the Unified Profile when multiple sources provide different values", "A conflict resolution workflow for data stewards to review", "A matching rule for identifying duplicate records"] },
      {domain:"Segmentation and Activation", q: "Which Data Cloud segment type updates membership in real time as events occur?", a: "Streaming Segment (Real-Time Segment)", options: ["Live Segment", "Streaming Segment (Real-Time Segment)", "Dynamic Segment", "Event-Based Segment"] },
      {domain:"Identity Resolution", q: "What is the Data Cloud Profile Explorer used for?", a: "Viewing a unified 360-degree view of an individual customer's profile, engagements, and segment memberships", options: ["Exploring the Data Cloud data model schema", "Viewing a unified 360-degree view of an individual customer's profile, engagements, and segment memberships", "Analyzing data quality metrics for ingested data", "Browsing available data streams and their connection status"] },
      {domain:"Data Cloud Architecture", q: "In Data Cloud, what is the role of the 'Individual' Data Model Object (DMO)?", a: "The central DMO representing a person, to which all other related DMOs connect", options: ["A temporary staging object for unmatched records", "The central DMO representing a person, to which all other related DMOs connect", "A DMO specifically for anonymous visitor tracking", "A synonym for the Unified Individual object"] },
      {domain:"Data Cloud Architecture", q: "What is a Data Kit in Salesforce Data Cloud?", a: "A pre-packaged set of Data Streams, DMO mappings, and calculated insights optimized for a specific industry or use case", options: ["A set of tools for data migration into Data Cloud", "A pre-packaged set of Data Streams, DMO mappings, and calculated insights optimized for a specific industry or use case", "A package of sample data for testing Data Cloud configurations", "A bundled license for multiple Data Cloud features"] },
      {domain:"Data Cloud Architecture", q: "How does the right-to-be-forgotten (GDPR erasure) work in Data Cloud?", a: "A Data Action Privacy request that removes the individual's data from Data Cloud and suppresses reingestion from connected sources", options: ["Deleting the contact from Salesforce CRM automatically erases their Data Cloud data", "A Data Action Privacy request that removes the individual's data from Data Cloud and suppresses reingestion from connected sources", "Marking the record as 'Suppressed' in the All Subscribers list", "A batch job that runs nightly to identify and delete flagged records"] },
      {domain:"Identity Resolution", q: "What metric does Data Cloud use to measure how well Identity Resolution is working?", a: "Match Rate: the percentage of incoming records successfully matched to existing profiles", options: ["Resolution Rate: the number of records per Unified Individual", "Match Rate: the percentage of incoming records successfully matched to existing profiles", "Identity Score: an AI-generated confidence percentage", "Unification Rate: the ratio of Unified Individuals to total records"] },
      {domain:"Identity Resolution", q: "Which Data Cloud analytics feature connects unified profile data to Tableau for advanced analytics?", a: "Tableau CRM (Einstein Analytics) integration with Data Cloud", options: ["Direct SQL access to Data Cloud storage", "Tableau CRM (Einstein Analytics) integration with Data Cloud", "Data Cloud Report Builder for Tableau", "Data Cloud Analytics API for custom dashboards"] },
      {domain:"Data Cloud Architecture", q: "When implementing Data Cloud, what is the recommended first phase?", a: "Define use cases, connect the highest-priority data sources, and configure identity resolution before building segments", options: ["Build all segments before connecting data sources", "Define use cases, connect the highest-priority data sources, and configure identity resolution before building segments", "Start with activation targets to ensure a delivery path exists", "Configure Einstein AI features to generate insights immediately"] },
      {domain:"Data Cloud Architecture", q: "What is the purpose of the 'Engagement' Data Model Object (DMO) in Data Cloud?", a: "To store records of customer interactions (email opens, web visits, purchases) that inform segmentation and analytics", options: ["To track customer engagement scores manually entered by agents", "To store records of customer interactions (email opens, web visits, purchases) that inform segmentation and analytics", "To log agent activities in Service Cloud for compliance", "To capture user engagement with the Data Cloud admin interface"] }
    ],
    tips:[
      "Understand the Data Cloud data flow: Data Streams → DLOs → DMOs → Unified Individual → Segments → Activation.",
      "Know Identity Resolution thoroughly: deterministic vs. probabilistic matching, rulesets, and reconciliation rules.",
      "Understand the difference between DLOs (raw ingested data) and DMOs (mapped, structured data model objects).",
      "Know all Activation Target types and what each enables (MC, Mobile, Advertising, CRM).",
      "Understand Calculated Insights and how they extend segmentation capability.",
      "Know the consent management model: Contact Point Consent and data action privacy.",
      "Understand the Data Cloud implementation phases: sources → identity resolution → segmentation → activation.",
      "Know how Data Cloud integrates with Marketing Cloud for segment-based email personalization."
    ]
  },

  "Education Cloud Consultant": {
    questions: 60,
    time: 105,
    pass: 65,
    experience: "2+ years implementing Education Cloud solutions",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-education-cld---ED-Con-101",
    prerequisites: ["Platform Administrator"],
    overview: "Validates expertise in implementing Salesforce Education Cloud solutions for higher education and K-12 institutions, including student lifecycle management, advancement, and constituent relationship management.",
    domains: [
      { name: "Education Cloud Fundamentals", pct: 20, color: "#00A1E0", desc: "Understand the Education Cloud platform, its data model, and how it supports higher education and K-12 institutions.", keyTopics: [
      {title:"Education Data Architecture (EDA)",desc:"Understand EDA objects: Account (institution), Contact (student/faculty), Program Enrollment, and Course Offering."},
      {title:"Education Cloud Products",desc:"Differentiate Starter for Education, Education Cloud for Higher Ed, and K-12 Architecture Kit."},
      {title:"Recruitment and Admissions",desc:"Configure prospect and applicant lifecycle management for student recruitment pipelines."}
    ] },
      { name: "Student Success Hub", pct: 22, color: "#2ECC71", desc: "Configure Student Success Hub tools to proactively monitor student health and coordinate intervention workflows.", keyTopics: [
      {title:"Advisor Connect",desc:"Set up advisor appointment scheduling, caseloads, and nudge campaigns for student outreach."},
      {title:"Early Alert",desc:"Configure early alert workflows triggered by academic risk indicators with advisor follow-up."},
      {title:"Success Plans",desc:"Create student success plans with milestones and tasks to guide advisor-student engagements."}
    ] },
      { name: "Advancement Connect", pct: 18, color: "#F39C12", desc: "Configure Advancement Connect to manage alumni engagement, fundraising campaigns, and gift processing.", keyTopics: [
      {title:"Constituent Management",desc:"Manage alumni and donor records with giving history, affiliations, and engagement scores."},
      {title:"Campaign and Appeal Management",desc:"Set up fundraising campaigns, appeals, and gift acknowledgment workflows."},
      {title:"Gift and Pledge Management",desc:"Record one-time gifts, pledges, and recurring donations with acknowledgment receipts."}
    ] },
      { name: "Education Data Architecture", pct: 20, color: "#E74C3C", desc: "Design and configure the Education Data Architecture (EDA) to model complex institutional relationships and processes.", keyTopics: [
      {title:"EDA Object Model",desc:"Understand EDA Accounts-as-institutions model, affiliations, relationships, and program enrollment."},
      {title:"Course and Curriculum",desc:"Model course offerings, sections, course connections, and academic program hierarchy."},
      {title:"Settings and Configuration",desc:"Configure EDA settings hierarchy, trigger switches, and automated household management."}
    ] },
      { name: "Implementation & Configuration", pct: 20, color: "#1ABC9C", desc: "Apply implementation best practices for Education Cloud including discovery, data migration, and rollout planning.", keyTopics: [
      {title:"Discovery and Design",desc:"Conduct Education Cloud discovery to map institutional processes to product capabilities."},
      {title:"Data Migration",desc:"Plan migration of student, course, and advancement data into EDA from legacy SIS systems."},
      {title:"Managed Package Governance",desc:"Manage EDA and Advancement Connect managed package upgrades and release cycles."}
    ] }
    ],
    studyDays:[
      {tag:"edu-cloud-setup",focus:"Education Cloud fundamentals: Education Data Architecture (EDA), relationships, and student lifecycle",topics:[
        {text:"Education Cloud Consultant Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Education-Cloud-Consultant-Exam-Guide"},
        {text:"Education Data Architecture Overview",url:"https://sfdo-community-sprints.github.io/EDA-Documentation/"},
        {text:"Education Cloud Overview",url:"https://help.salesforce.com/s/articleView?id=sf.edu_cloud_overview.htm"},
        {text:"Student Lifecycle Management",url:"https://help.salesforce.com/s/articleView?id=sf.edu_cloud_student_success.htm"},
        {text:"Trailmix: Education Cloud Consultant",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-education-cloud-consultant-credential"},
        {text:"EDA GitHub Documentation",url:"https://sfdo-community-sprints.github.io/EDA-Documentation/"}
      ]},
      {tag:"exam-prep-edu",focus:"Education Cloud Consultant exam prep: EDA, student success, and institution use cases",topics:[
        {text:"Education Cloud Consultant Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Education-Cloud-Consultant-Exam-Guide"},
        {text:"Education Cloud Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-education-cloud-consultant-credential"},
        {text:"Education Cloud Module",url:"https://trailhead.salesforce.com/content/learn/modules/education-cloud-basics"},
        {text:"EDA Documentation",url:"https://sfdo-community-sprints.github.io/EDA-Documentation/"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-education-cloud-consultant---Edu-Con-201"},
        {text:"Salesforce.org Education",url:"https://www.salesforce.org/edu/"}
      ]}
    ],
    quiz:[
      {domain:"Education Cloud Fundamentals", q: "What is the foundational data model used by Education Cloud?", a: "Education Data Architecture (EDA)", options: ["NPSP", "Education Data Architecture (EDA)", "Standard Salesforce CRM model", "Health Cloud model"] },
      {domain:"Student Success Hub", q: "In EDA, which object represents a student's enrollment in a program?", a: "Program Enrollment", options: ["Course Connection", "Program Enrollment", "Academic Affiliation", "Student Plan"] },
      {domain:"Student Success Hub", q: "What does the Advisor Console in Student Success Hub provide?", a: "A 360-degree view of students to support advising and intervention", options: ["Course scheduling tools", "A 360-degree view of students to support advising and intervention", "Financial aid management", "Alumni relationship tracking"] },
      {domain:"Student Success Hub", q: "Which feature allows advisors to proactively flag at-risk students?", a: "Early Alert", options: ["Success Plan", "Early Alert", "Case Escalation", "Retention Trigger"] },
      {domain:"Advancement Connect", q: "What is the primary use of Advancement Connect?", a: "Fundraising and donor relationship management for higher education", options: ["Student enrollment tracking", "Course management", "Fundraising and donor relationship management for higher education", "Advisor scheduling"] },
      {domain:"Implementation & Configuration", q: "Which federal law governs student data privacy in the U.S.?", a: "FERPA", options: ["HIPAA", "FERPA", "GDPR", "COPPA"] },
      {domain:"Education Data Architecture", q: "In EDA, what object tracks a student's relationship to a course section?", a: "Course Connection", options: ["Enrollment Record", "Course Connection", "Program Affiliation", "Academic Link"] },
      {domain:"Student Success Hub", q: "Which Salesforce product provides AI-powered student retention risk scoring?", a: "Einstein Prediction Builder", options: ["Tableau", "Einstein Prediction Builder", "Agentforce", "CRM Analytics"] },
      {domain:"Education Cloud Fundamentals", q: "What model does EDA use for household management?", a: "Household Account model", options: ["Person Account model", "Household Account model", "Contact-only model", "Family Group model"] },
      {domain:"Student Success Hub", q: "Which integration pattern is commonly used to sync EDA with a Student Information System?", a: "Real-time API integration via MuleSoft or middleware", options: ["Batch CSV import nightly", "Real-time API integration via MuleSoft or middleware", "Manual data entry by registrar", "Email-based data sync"] },
      {domain:"Student Success Hub", q: "What is a Success Plan in Student Success Hub?", a: "A structured roadmap of tasks and goals assigned to a student by an advisor", options: ["A financial aid package", "A structured roadmap of tasks and goals assigned to a student by an advisor", "A course registration form", "A graduation audit record"] },
      {domain:"Student Success Hub", q: "In K-12 implementations, what object represents a student's school enrollment?", a: "Affiliation", options: ["Enrollment__c", "Affiliation", "School Record", "Student Account"] },
      {domain:"Student Success Hub", q: "Which report type is best for tracking advisor caseloads?", a: "Cases with Accounts", options: ["Opportunities with Contacts", "Cases with Accounts", "Activities with Contacts", "Leads with Campaigns"] },
      {domain:"Education Cloud Fundamentals", q: "What is the recommended way to model guardians and students in EDA K-12?", a: "Use Relationships and Affiliations between Contact records", options: ["Use Person Accounts for each family member", "Use Relationships and Affiliations between Contact records", "Create custom parent-child Account records", "Use Household Account with custom fields"] },
      {domain:"Education Data Architecture", q: "Which feature supports the management of course schedules, sections, and offerings?", a: "Academic Operations", options: ["Student Success Hub", "Academic Operations", "Advancement Connect", "EDA Relationships"] },
      {domain:"Implementation & Configuration", q: "How should sensitive student data fields be protected in Salesforce?", a: "Field-Level Security and record-level sharing rules", options: ["Password protect the org", "Field-Level Security and record-level sharing rules", "Hide them in page layouts only", "Use encryption for all fields"] },
      {domain:"Education Cloud Fundamentals", q: "What is the purpose of the Education Cloud Trailmix?", a: "Guided learning path for Education Cloud certification preparation", options: ["A product demo environment", "Guided learning path for Education Cloud certification preparation", "A marketplace for education apps", "An exam practice tool"] },
      {domain:"Student Success Hub", q: "Which Salesforce feature can automate sending alerts to advisors when a student misses multiple classes?", a: "Flow with scheduled triggers and Early Alert creation", options: ["Report subscriptions only", "Flow with scheduled triggers and Early Alert creation", "Manual case creation", "Email-to-case"] },
      {domain:"Education Cloud Fundamentals", q: "What is the main challenge when migrating data from a legacy SIS to EDA?", a: "Mapping legacy relationship and enrollment data to EDA's object model", options: ["Choosing a data loader", "Mapping legacy relationship and enrollment data to EDA's object model", "Converting record types", "Migrating user profiles"] },
      {domain:"Education Cloud Fundamentals", q: "Which community is the best resource for Education Cloud implementers?", a: "Salesforce.org Trailblazer Community", options: ["Salesforce AppExchange", "Salesforce.org Trailblazer Community", "Salesforce Developer Forums", "Partner Community only"] }
    ],
    tips:[
      "Know the EDA data model deeply — Program Plan, Program Enrollment, Course Connection, and Affiliation are exam staples.",
      "Understand FERPA's impact on data visibility and sharing configurations.",
      "Distinguish between Student Success Hub, Advancement Connect, and Academic Operations feature sets.",
      "Be prepared for scenario questions about integrating a legacy SIS with Salesforce.",
      "Know how Early Alert and Success Plans work together to support student retention.",
      "Understand the household vs. person account model in EDA and when each applies.",
      "Review Salesforce.org-specific features since the exam targets the education-specific product layer.",
      "Practice identifying when to use automation (Flow) vs. manual processes in education workflows."
    ]
  },

  "Nonprofit Cloud Consultant (NPC)": {
    questions: 60,
    time: 105,
    pass: 65,
    experience: "2+ years implementing Nonprofit Cloud solutions",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-npsp-consultant---NP-Con-101",
    prerequisites: ["Platform Administrator"],
    overview: "Validates expertise in implementing Salesforce Nonprofit Cloud (NPC), Salesforce's modern nonprofit platform built on a purpose-built data model for constituent management, fundraising, and program delivery.",
    domains: [
      { name: "Nonprofit Cloud Fundamentals", pct: 22, color: "#00A1E0", desc: "Understand Nonprofit Cloud product suite, its data model, and core features for nonprofit mission delivery.", keyTopics: [
      {title:"Nonprofit Cloud Products",desc:"Differentiate Nonprofit Success Pack (NPSP), Nonprofit Cloud Case Management, Program Management, and Grants Management."},
      {title:"Nonprofit Data Model",desc:"Understand Household Accounts, Contacts, Affiliations, Relationships, and Opportunities in nonprofit context."},
      {title:"Nonprofit Use Cases",desc:"Map common nonprofit workflows (fundraising, case management, volunteer tracking) to Salesforce products."}
    ] },
      { name: "Constituent Management", pct: 20, color: "#2ECC71", desc: "Configure constituent relationship management for individual donors, organizational funders, and volunteers.", keyTopics: [
      {title:"Household Management",desc:"Configure NPSP household accounts including household naming, membership, and address management."},
      {title:"Relationships and Affiliations",desc:"Set up relationship types and affiliation records to model constituent connections."},
      {title:"Engagement Plans",desc:"Create engagement plan templates for automated outreach sequences to constituent segments."}
    ] },
      { name: "Fundraising", pct: 22, color: "#F39C12", desc: "Configure Salesforce fundraising capabilities including gift entry, pledges, campaigns, and donation acknowledgment.", keyTopics: [
      {title:"Gift Entry",desc:"Use Gift Entry Manager for batch and single gift processing with soft credit and matching gift support."},
      {title:"Recurring Donations",desc:"Configure enhanced recurring donations with flexible schedules and payment processor integration."},
      {title:"Campaign Fundraising",desc:"Set up campaign hierarchies, goal tracking, and ROI measurement for multi-channel fundraising."}
    ] },
      { name: "Programs and Case Management", pct: 18, color: "#E74C3C", desc: "Configure Nonprofit Cloud Program Management and Case Management to track service delivery and client outcomes.", keyTopics: [
      {title:"Program Management",desc:"Create programs, services, and service deliveries to track beneficiary engagement and impact."},
      {title:"Case Management",desc:"Configure case plans, check-ins, and goals to manage client service journeys."},
      {title:"Outcome Tracking",desc:"Measure program outcomes using indicator results and goal completion tracking."}
    ] },
      { name: "Implementation & Solution Design", pct: 18, color: "#1ABC9C", desc: "Apply nonprofit implementation best practices including solution architecture, data migration, and change management.", keyTopics: [
      {title:"Solution Architecture",desc:"Design Salesforce solutions that blend NPSP, Nonprofit Cloud, and AppExchange products for nonprofit needs."},
      {title:"Data Migration",desc:"Plan constituent, gift history, and program data migration from legacy nonprofit systems."},
      {title:"Nonprofit Change Management",desc:"Design adoption programs for mission-driven staff with limited Salesforce experience."}
    ] }
    ],
    studyDays:[
      {tag:"npc-data-model", focus:"NPC data model — Constituent, Account, and Relationship objects", topics:[
        {text:"Nonprofit Cloud Data Model Overview",url:"https://help.salesforce.com/s/articleView?id=sfdo.npc_data_model.htm"},
        {text:"NPC Constituent Object",url:"https://help.salesforce.com/s/articleView?id=sfdo.npc_constituent_object.htm"},
        {text:"NPC Relationship Management",url:"https://help.salesforce.com/s/articleView?id=sfdo.npc_relationships.htm"},
        {text:"NPC Account Model",url:"https://help.salesforce.com/s/articleView?id=sfdo.npc_account_model.htm"},
        {text:"Migrate from NPSP to NPC",url:"https://help.salesforce.com/s/articleView?id=sfdo.npc_migration_overview.htm"},
        {text:"NPC Trailhead Module",url:"https://trailhead.salesforce.com/content/learn/modules/nonprofit-cloud-basics"}
      ]},
      {tag:"fundraising", focus:"Fundraising management — Gifts, Campaigns, and Payment Processing", topics:[
        {text:"NPC Fundraising Overview",url:"https://help.salesforce.com/s/articleView?id=sfdo.npc_fundraising_overview.htm"},
        {text:"Gift Entry and Processing",url:"https://help.salesforce.com/s/articleView?id=sfdo.npc_gift_entry.htm"},
        {text:"Recurring Donations in NPC",url:"https://help.salesforce.com/s/articleView?id=sfdo.npc_recurring_donations.htm"},
        {text:"Campaign Management for Nonprofits",url:"https://help.salesforce.com/s/articleView?id=sfdo.npc_campaigns.htm"},
        {text:"Payment Processing Integration",url:"https://help.salesforce.com/s/articleView?id=sfdo.npc_payment_services.htm"},
        {text:"Fundraising Trail",url:"https://trailhead.salesforce.com/content/learn/modules/nonprofit-fundraising-basics"}
      ]},
    ],
    quiz:[
      {domain:"Nonprofit Cloud Fundamentals", q: "What is the key architectural difference between NPC and NPSP?", a: "NPC uses a purpose-built Party data model; NPSP extends standard CRM objects", options: ["NPC is only for small nonprofits", "NPC uses a purpose-built Party data model; NPSP extends standard CRM objects", "NPSP is newer than NPC", "NPC does not support fundraising"] },
      {domain:"Nonprofit Cloud Fundamentals", q: "In NPC, which object represents a household?", a: "Household Account", options: ["Household__c", "Household Account", "Person Account", "Contact Group"] },
      {domain:"Nonprofit Cloud Fundamentals", q: "What is a Soft Credit in fundraising?", a: "Attribution of a gift's influence to an individual who was not the primary donor", options: ["A partial payment on a pledge", "Attribution of a gift's influence to an individual who was not the primary donor", "A gift that is pending bank confirmation", "A discount applied to a donation"] },
      {domain:"Programs and Case Management", q: "Which NPC feature tracks the delivery of services to program beneficiaries?", a: "Service Delivery", options: ["Case Management", "Service Delivery", "Program Enrollment", "Benefit Tracking"] },
      {domain:"Nonprofit Cloud Fundamentals", q: "What is moves management in major gift fundraising?", a: "A structured process for cultivating donor relationships through planned touchpoints", options: ["Physically moving gift files between offices", "A structured process for cultivating donor relationships through planned touchpoints", "Managing gift payment logistics", "Automating recurring gift schedules"] },
      {domain:"Nonprofit Cloud Fundamentals", q: "Which report type helps identify donors who gave last year but not this year?", a: "LYBUNT (Last Year But Unfortunately Not This year)", options: ["SYBUNT", "LYBUNT (Last Year But Unfortunately Not This year)", "Retention Report", "Lapsed Donor Summary"] },
      {domain:"Fundraising", q: "What is the purpose of a Recurring Gift Schedule?", a: "To define the cadence and amount of ongoing donations from a supporter", options: ["To schedule a one-time matching gift", "To define the cadence and amount of ongoing donations from a supporter", "To track grant payment milestones", "To automate board member giving"] },
      {domain:"Programs and Case Management", q: "Which object in NPC is used to track grant opportunities from foundations?", a: "Opportunity (with Grant record type)", options: ["Grant__c", "Opportunity (with Grant record type)", "Fund Account", "Program Budget"] },
      {domain:"Nonprofit Cloud Fundamentals", q: "How does NPC handle matching gifts?", a: "Through Matching Gift relationships linked to the original Opportunity", options: ["By creating a new Campaign", "Through Matching Gift relationships linked to the original Opportunity", "Via the Volunteer module", "Using soft credits only"] },
      {domain:"Nonprofit Cloud Fundamentals", q: "Which integration is most commonly needed for NPC fundraising?", a: "Payment gateway (e.g., Stripe, PayPal, iATS)", options: ["ERP system only", "Payment gateway (e.g., Stripe, PayPal, iATS)", "HR system integration", "Social media monitoring"] },
      {domain:"Nonprofit Cloud Fundamentals", q: "What is the primary benefit of the NPC Party model?", a: "Flexible constituent modeling without being constrained to Account/Contact hierarchy", options: ["Better email marketing", "Flexible constituent modeling without being constrained to Account/Contact hierarchy", "Fewer required fields", "Native mobile app support"] },
      {domain:"Nonprofit Cloud Fundamentals", q: "Which Salesforce product provides donor wealth screening for nonprofits?", a: "Third-party AppExchange apps (e.g., DonorSearch, iWave)", options: ["Einstein Analytics", "Third-party AppExchange apps (e.g., DonorSearch, iWave)", "Salesforce CPQ", "Marketing Cloud"] },
      {domain:"Implementation & Solution Design", q: "What is the key migration challenge when moving from NPSP to NPC?", a: "Remapping NPSP custom objects to NPC's new Party model structure", options: ["Recreating user licenses", "Remapping NPSP custom objects to NPC's new Party model structure", "Configuring new email templates", "Setting up new Trailhead paths"] },
      {domain:"Nonprofit Cloud Fundamentals", q: "Which feature supports volunteer shift management in Nonprofit Cloud?", a: "Volunteer Management (Shifts and Assignments)", options: ["Service Delivery", "Volunteer Management (Shifts and Assignments)", "Case Management", "Program Enrollment"] },
      {domain:"Nonprofit Cloud Fundamentals", q: "What is a Household Account in NPC?", a: "An account that groups family members for consolidated giving and communication", options: ["A financial account for nonprofit treasury", "An account that groups family members for consolidated giving and communication", "A personal account for individual donors", "A campaign account for events"] },
      {domain:"Programs and Case Management", q: "Which NPC object tracks the outcomes delivered to a client through a program?", a: "Service Delivery", options: ["Outcome Record", "Service Delivery", "Case Resolution", "Benefit Item"] },
      {domain:"Nonprofit Cloud Fundamentals", q: "How should nonprofit data be secured to meet donor privacy requirements?", a: "Field-Level Security, record sharing rules, and data masking for PII", options: ["Password-protect the org only", "Field-Level Security, record sharing rules, and data masking for PII", "Hide all reports from volunteers", "Use only private sharing settings"] },
      {domain:"Nonprofit Cloud Fundamentals", q: "What is the recommended way to acknowledge a donation in NPC?", a: "Generate a PDF or email acknowledgment linked to the Opportunity", options: ["Send a manual thank-you via phone", "Generate a PDF or email acknowledgment linked to the Opportunity", "Update the Contact with a note", "Use a bulk email blast"] },
      {domain:"Constituent Management", q: "Which Salesforce feature can automate outreach to lapsed donors?", a: "Flow with scheduled path triggered by giving status", options: ["Email-to-Case", "Flow with scheduled path triggered by giving status", "Case auto-response rules", "Standard workflow rules"] },
      {domain:"Nonprofit Cloud Fundamentals", q: "What does SYBUNT stand for in nonprofit analytics?", a: "Some Year But Unfortunately Not This year", options: ["Sustaining Year Based Unified Nonprofit Tracker", "Some Year But Unfortunately Not This year", "Single Year Budget Unit Notifier Tool", "Salesforce Year-Based Unified Notification Tool"] }
    ],
    tips:[
      "Know the NPC Party model and how it differs architecturally from NPSP's Account/Contact model.",
      "Understand the full fundraising lifecycle: cultivation, solicitation, gift entry, acknowledgment, and stewardship.",
      "Be clear on LYBUNT vs SYBUNT and how retention reports work.",
      "Know the key use cases for Service Delivery, Case Management, and Volunteer Management.",
      "Understand soft credits and matching gifts — common exam scenarios.",
      "Be prepared for migration questions about moving from NPSP to NPC.",
      "Know the most common AppExchange integrations (payment gateways, wealth screening).",
      "Review data privacy considerations for nonprofit donor and client data."
    ]
  },

  "Nonprofit Success Pack Consultant": {
    questions: 60,
    time: 105,
    pass: 65,
    experience: "2+ years implementing NPSP solutions",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-nonprofit-cld-consultant-npc---NP-Con-102",
    prerequisites: ["Platform Administrator"],
    overview: "Validates expertise in implementing the Nonprofit Success Pack (NPSP), the legacy open-source Salesforce platform for nonprofits covering constituent management, fundraising, and program delivery on top of standard Salesforce CRM objects.",
    domains: [
      { name: "NPSP Data Architecture", pct: 20, color: "#00A1E0", desc: "Understand NPSP's Household Account model, custom objects, and how they differ from standard Salesforce.", keyTopics: [
      {title:"Household Account Model",desc:"Configure the one-to-one and household account models and understand their trade-offs."},
      {title:"NPSP Custom Objects",desc:"Know NPSP-specific objects: Affiliations, Relationships, Engagements, and Recurring Donations."},
      {title:"Settings Hierarchy",desc:"Configure NPSP Settings including contact and account merge settings, automated household naming."}
    ] },
      { name: "Fundraising & Gift Management", pct: 25, color: "#2ECC71", desc: "Configure NPSP gift entry, soft credits, matching gifts, and donation processing workflows.", keyTopics: [
      {title:"Gift Entry Manager",desc:"Set up batch gift entry templates and process donations with custom field mapping."},
      {title:"Soft Credits",desc:"Configure opportunity contact roles and soft credit rollup settings for attribution tracking."},
      {title:"Matching Gifts",desc:"Set up matching gift employer records and the NPSP matching gift workflow."}
    ] },
      { name: "Household Management", pct: 18, color: "#F39C12", desc: "Configure NPSP household features including naming conventions, address management, and merge processes.", keyTopics: [
      {title:"Household Naming",desc:"Configure automatic and manual household naming formats for address labels and salutations."},
      {title:"Address Management",desc:"Use the address object and household address management including seasonal addresses."},
      {title:"Household Merging",desc:"Execute constituent merges using NPSP merge tools to maintain giving history integrity."}
    ] },
      { name: "Relationships & Affiliations", pct: 17, color: "#E74C3C", desc: "Configure NPSP relationship and affiliation features to model constituent connections and organizational ties.", keyTopics: [
      {title:"Relationship Types",desc:"Define custom relationship types and auto-reciprocal relationship pairs for contact-contact links."},
      {title:"Affiliations",desc:"Configure org-to-contact affiliations with role, status, and primary affiliation designation."},
      {title:"Relationship Viewer",desc:"Use the NPSP relationship viewer component to navigate constituent network maps."}
    ] },
      { name: "Customization & Reporting", pct: 20, color: "#1ABC9C", desc: "Customize NPSP with custom fields, rollup configurations, and build nonprofit-specific reports and dashboards.", keyTopics: [
      {title:"Custom Rollup Summaries",desc:"Use NPSP's Customizable Rollups framework to create custom giving summary fields."},
      {title:"NPSP Reports",desc:"Build constituent giving history, LYBUNT/SYBUNT, and major gift prospect reports."},
      {title:"Duplicate Management",desc:"Configure NPSP deduplication rules and the merge process for constituent records."}
    ] }
    ],
    studyDays:[
      {tag:"npsp-setup",focus:"NPSP fundamentals: Households, Affiliations, Relationships, and Donation Management",topics:[
        {text:"NPSP Consultant Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Nonprofit-Success-Pack-Consultant-Exam-Guide"},
        {text:"NPSP Overview",url:"https://powerofus.force.com/s/article/NPSP-Introduction"},
        {text:"NPSP Households",url:"https://powerofus.force.com/s/article/NPSP-Household-Accounts"},
        {text:"NPSP Donations and Payments",url:"https://powerofus.force.com/s/article/NPSP-Managing-Donations"},
        {text:"NPSP Affiliations",url:"https://powerofus.force.com/s/article/NPSP-Affiliations"},
        {text:"NPSP Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-nonprofit-success-pack-consultant-credential"}
      ]},
      {tag:"exam-prep-npsp",focus:"NPSP Consultant exam prep: donations, households, affiliations, and configuration scenarios",topics:[
        {text:"NPSP Consultant Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Nonprofit-Success-Pack-Consultant-Exam-Guide"},
        {text:"NPSP Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-nonprofit-success-pack-consultant-credential"},
        {text:"NPSP Basics Module",url:"https://trailhead.salesforce.com/content/learn/modules/nonprofit_success_pack_basics"},
        {text:"NPSP Documentation",url:"https://powerofus.force.com/s/article/NPSP-Introduction"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-npsp-consultant---NPSP-Con-201"},
        {text:"Salesforce.org Community",url:"https://powerofus.force.com/s/"}
      ]}
    ],
    quiz:[
      {domain:"NPSP Data Architecture", q: "Which NPSP account model creates a separate Account record for every Contact?", a: "1:1 model", options: ["Household Account model", "1:1 model", "Individual model", "Organization model"] },
      {domain:"NPSP Data Architecture", q: "What is the primary benefit of the Household Account model in NPSP?", a: "Groups family members under one Account for consolidated giving and communication", options: ["Simplifies data entry for volunteers", "Groups family members under one Account for consolidated giving and communication", "Removes the need for Opportunity records", "Enables email automation"] },
      {domain:"NPSP Data Architecture", q: "In NPSP, which object manages non-employment relationships between Contacts?", a: "Relationship (npe4__Relationship__c)", options: ["Affiliation", "Relationship (npe4__Relationship__c)", "Connection", "AccountContactRelation"] },
      {domain:"Fundraising & Gift Management", q: "What is a Partial Soft Credit in NPSP?", a: "Crediting a portion of a gift's amount to an influencing Contact", options: ["A gift partially paid by check", "Crediting a portion of a gift's amount to an influencing Contact", "A matching gift tracked separately", "A discount applied to a recurring gift"] },
      {domain:"Fundraising & Gift Management", q: "Which NPSP feature allows bulk entry of multiple gifts at once?", a: "Batch Gift Entry", options: ["Data Importer", "Batch Gift Entry", "Mass Update Wizard", "Flow-based entry"] },
      {domain:"Customization & Reporting", q: "What does LYBUNT stand for?", a: "Last Year But Unfortunately Not This year", options: ["Long Year Benefit United Network Tool", "Last Year But Unfortunately Not This year", "Lapsed Year Benefit Unified Notation Tool", "Latest Year Budget Unit New Track"] },
      {domain:"NPSP Data Architecture", q: "In NPSP, what is an Engagement Plan?", a: "A series of tasks automatically assigned to guide relationship stewardship", options: ["A fundraising forecast", "A series of tasks automatically assigned to guide relationship stewardship", "A volunteer scheduling tool", "A grant reporting checklist"] },
      {domain:"Customization & Reporting", q: "Which NPSP feature lets you set different giving levels and thresholds for donors?", a: "Levels", options: ["Giving Tiers", "Levels", "Segment Groups", "Donor Grades"] },
      {domain:"NPSP Data Architecture", q: "What happens when a duplicate household member is created in NPSP?", a: "NPSP can auto-merge duplicates using Household Merge functionality", options: ["NPSP blocks the record creation", "NPSP can auto-merge duplicates using Household Merge functionality", "The record is flagged for admin review only", "Duplicates are silently ignored"] },
      {domain:"Relationships & Affiliations", q: "What is Salesforce Elevate's role in NPSP?", a: "A native payment processing add-on for NPSP donations", options: ["An Einstein analytics layer", "A native payment processing add-on for NPSP donations", "A volunteer management module", "An email marketing add-on"] },
      {domain:"Fundraising & Gift Management", q: "Which NPSP setting auto-creates an Opportunity when a Contact is first created?", a: "Opportunity Auto-Create settings in NPSP Donations configuration", options: ["Contact trigger rules", "Opportunity Auto-Create settings in NPSP Donations configuration", "Workflow field update", "Flow on Contact insert"] },
      {domain:"NPSP Data Architecture", q: "Which NPSP report type is used to track retention of recurring donors?", a: "SYBUNT (Some Year But Unfortunately Not This year)", options: ["LYBUNT", "SYBUNT (Some Year But Unfortunately Not This year)", "Retention Trend Report", "Annual Giving Summary"] },
      {domain:"Household Management", q: "What is a Seasonal Address in NPSP?", a: "An alternate mailing address active for a specified date range each year", options: ["A temporary address during a move", "An alternate mailing address active for a specified date range each year", "An address imported from a data vendor", "A billing address for gift processing"] },
      {domain:"NPSP Data Architecture", q: "Which NPSP tool helps identify and merge duplicate Contact records?", a: "NPSP Duplicate Management with Matching Rules", options: ["Data Loader", "NPSP Duplicate Management with Matching Rules", "NPSP Data Importer only", "Third-party dedup app only"] },
      {domain:"NPSP Data Architecture", q: "What is the correct way to handle a write-off of an outstanding payment in NPSP?", a: "Mark the payment as Written Off in the Payment record", options: ["Delete the Opportunity", "Mark the payment as Written Off in the Payment record", "Create a credit memo Opportunity", "Update the close date to past"] },
      {domain:"NPSP Data Architecture", q: "Which NPSP configuration drives the naming convention for Household Account names?", a: "Household Naming Settings", options: ["Account Formula Field", "Household Naming Settings", "Household Trigger Config", "Contact Layout template"] },
      {domain:"Fundraising & Gift Management", q: "How does NPSP handle a gift from a couple where both spouses should get credit?", a: "Assign the primary donor as the Opportunity Contact Role and add soft credit to the spouse", options: ["Create two separate Opportunities", "Assign the primary donor as the Opportunity Contact Role and add soft credit to the spouse", "Use a Household Campaign", "Create a joint Contact record"] },
      {domain:"Fundraising & Gift Management", q: "Which rollup type in NPSP aggregates donation totals onto a Contact record?", a: "Customizable Rollup (CRLP)", options: ["Standard Roll-Up Summary Field", "Customizable Rollup (CRLP)", "Flow-based aggregation", "Apex batch class"] },
      {domain:"Relationships & Affiliations", q: "In NPSP, what is the purpose of the Primary Affiliation field on a Contact?", a: "Links the Contact to their primary employer or organization account", options: ["Marks the default email address", "Links the Contact to their primary employer or organization account", "Sets the Contact's household role", "Records the major gift program affiliation"] },
      {domain:"NPSP Data Architecture", q: "Which tool should be used for large-scale initial data loads into NPSP?", a: "NPSP Data Importer or Data Loader with NPSP mapping", options: ["Batch Gift Entry", "NPSP Data Importer or Data Loader with NPSP mapping", "Manual entry via UI", "Apex anonymous execution"] }
    ],
    tips:[
      "Know all three NPSP account models (1:1, Household, Individual) and when each is appropriate.",
      "Master LYBUNT and SYBUNT reporting — these are exam favorites.",
      "Understand Customizable Rollups (CRLP) and how they differ from standard roll-up summary fields.",
      "Know the Engagement Plans feature for stewardship automation.",
      "Be clear on soft credits, partial soft credits, and matching gifts.",
      "Understand Household Naming settings and how to customize household name formats.",
      "Review Batch Gift Entry workflows end-to-end.",
      "Know when to use NPSP Data Importer vs Data Loader for imports."
    ]
  },

  "OmniStudio Consultant": {
    questions: 60,
    time: 105,
    pass: 65,
    experience: "2+ years implementing OmniStudio solutions",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-omnistudio-consultant---Plat-Con-201",
    prerequisites: ["Platform Administrator"],
    overview: "Validates expertise in consulting on OmniStudio implementations, including OmniScripts, FlexCards, DataRaptors, and Integration Procedures to create guided user experiences in Salesforce Industries solutions.",
    domains: [
      { name: "OmniStudio Fundamentals", pct: 18, color: "#00A1E0", desc: "Understand OmniStudio's component suite and how it accelerates guided experience development on Salesforce.", keyTopics: [
      {title:"OmniStudio Components",desc:"Know the OmniStudio component family: OmniScript, FlexCard, DataRaptor, and Integration Procedures."},
      {title:"Use Cases",desc:"Identify where OmniStudio adds value vs. standard Salesforce UI: guided flows, card UIs, and data operations."},
      {title:"Deployment Model",desc:"Understand OmniStudio's metadata deployment, version control, and activation model."}
    ] },
      { name: "OmniScript Design", pct: 25, color: "#2ECC71", desc: "Build guided interaction scripts using OmniScript elements for data capture, branching, and remote actions.", keyTopics: [
      {title:"OmniScript Elements",desc:"Configure Text, Number, Select, Formula, and Group elements to build multi-step guided forms."},
      {title:"Conditional Visibility",desc:"Use conditions on elements and steps to show/hide fields based on user input."},
      {title:"Remote Actions",desc:"Integrate DataRaptors and Integration Procedures as remote actions in OmniScript steps."}
    ] },
      { name: "FlexCards", pct: 20, color: "#F39C12", desc: "Create contextual data display cards using FlexCards for 360-degree views and embedded actions.", keyTopics: [
      {title:"FlexCard Layout",desc:"Build multi-state FlexCards with different layouts for different data conditions."},
      {title:"Datasources",desc:"Connect FlexCards to DataRaptors, Integration Procedures, and SOQL datasources."},
      {title:"Embedded Actions",desc:"Add flyouts, OmniScript launches, and custom LWC actions to FlexCard interfaces."}
    ] },
      { name: "DataRaptors and Integration Procedures", pct: 22, color: "#E74C3C", desc: "Configure DataRaptors for CRUD operations and Integration Procedures for orchestrated multi-step data processes.", keyTopics: [
      {title:"DataRaptor Types",desc:"Use Extract, Load, Transform, and Turbo Extract DataRaptors for appropriate data operation patterns."},
      {title:"Integration Procedures",desc:"Build multi-step Integration Procedures with HTTP callouts, DataRaptors, and conditional logic."},
      {title:"JSON Mapping",desc:"Map input/output JSON paths in DataRaptors and Integration Procedures using path syntax."}
    ] },
      { name: "Solution Design and Deployment", pct: 15, color: "#1ABC9C", desc: "Architect OmniStudio solutions for reusability, performance, and maintainable deployment across environments.", keyTopics: [
      {title:"Design Patterns",desc:"Apply OmniStudio design patterns: separation of concerns between UI, logic, and data layers."},
      {title:"Version Management",desc:"Activate, version, and deploy OmniStudio components using the metadata API and version numbering."},
      {title:"Performance Optimization",desc:"Optimize OmniScript and DataRaptor performance to minimize load times and API consumption."}
    ] }
    ],
    studyDays:[
      {tag:"omnistudio-consultant",focus:"OmniStudio Consultant: architecture, FlexCards, OmniScripts, and DataRaptors for solution design",topics:[
        {text:"OmniStudio Consultant Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-OmniStudio-Consultant-Exam-Guide"},
        {text:"OmniStudio Architecture",url:"https://help.salesforce.com/s/articleView?id=sf.os_omnistudio_overview.htm"},
        {text:"FlexCards for Consultants",url:"https://help.salesforce.com/s/articleView?id=sf.os_flexcards.htm"},
        {text:"OmniScript Design Patterns",url:"https://help.salesforce.com/s/articleView?id=sf.os_omniscript.htm"},
        {text:"DataRaptor Best Practices",url:"https://help.salesforce.com/s/articleView?id=sf.os_dataraptor.htm"},
        {text:"OmniStudio Consultant Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-omnistudio-consultant-credential"}
      ]},
      {tag:"exam-prep-omni-con",focus:"OmniStudio Consultant exam prep: solution design with FlexCards, OmniScripts, and Integration Procedures",topics:[
        {text:"OmniStudio Consultant Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-OmniStudio-Consultant-Exam-Guide"},
        {text:"OmniStudio Consultant Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-omnistudio-consultant-credential"},
        {text:"OmniStudio Help Documentation",url:"https://help.salesforce.com/s/articleView?id=sf.os_omnistudio_overview.htm"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-omnistudio-con---OmniS-Con-201"},
        {text:"OmniStudio Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_omnistudio"},
        {text:"Industries Cloud Trailhead",url:"https://trailhead.salesforce.com/content/learn/modules/omnistudio-architecture"}
      ]}
    ],
    quiz:[
      {domain:"OmniStudio Fundamentals", q: "What is the primary purpose of an OmniScript?", a: "To create guided, multi-step user interactions and transactions", options: ["To display data in cards on record pages", "To create guided, multi-step user interactions and transactions", "To extract and transform Salesforce data", "To call external REST APIs"] },
      {domain:"OmniStudio Fundamentals", q: "Which OmniStudio component is used to display data visually on a record page?", a: "FlexCard", options: ["OmniScript", "FlexCard", "Integration Procedure", "DataRaptor Extract"] },
      {domain:"DataRaptors and Integration Procedures", q: "What does a DataRaptor Extract do?", a: "Reads data from Salesforce objects and maps it to a JSON structure", options: ["Writes data to Salesforce objects", "Reads data from Salesforce objects and maps it to a JSON structure", "Calls an external HTTP endpoint", "Transforms data without any Salesforce DML"] },
      {domain:"OmniStudio Fundamentals", q: "Which DataRaptor type is used to write or update records in Salesforce?", a: "DataRaptor Load", options: ["DataRaptor Extract", "DataRaptor Load", "DataRaptor Transform", "DataRaptor Turbo"] },
      {domain:"DataRaptors and Integration Procedures", q: "What is the main advantage of DataRaptor Turbo Extract over standard Extract?", a: "Faster performance due to direct SOQL queries without JSON transformation overhead", options: ["Supports external API calls", "Faster performance due to direct SOQL queries without JSON transformation overhead", "Allows writing to multiple objects simultaneously", "Provides better error handling"] },
      {domain:"OmniScript Design", q: "In OmniScript, what is the purpose of a Conditional View element?", a: "To show or hide elements based on a condition being true or false", options: ["To loop through a list of records", "To show or hide elements based on a condition being true or false", "To call an Integration Procedure", "To validate input data"] },
      {domain:"OmniStudio Fundamentals", q: "What is an Integration Procedure in OmniStudio?", a: "A server-side process that orchestrates multiple DataRaptors and HTTP calls", options: ["A REST API endpoint exposed by Salesforce", "A server-side process that orchestrates multiple DataRaptors and HTTP calls", "An OmniScript step for external integrations", "A custom Apex class replacement"] },
      {domain:"OmniStudio Fundamentals", q: "Which FlexCard action type opens content in a floating panel?", a: "FlyOut", options: ["Modal", "FlyOut", "Navigate", "Expand"] },
      {domain:"OmniStudio Fundamentals", q: "What is a child FlexCard used for?", a: "To embed one FlexCard inside another for modular display", options: ["To create a full-page FlexCard layout", "To embed one FlexCard inside another for modular display", "To trigger an OmniScript from a record page", "To call an external API on card load"] },
      {domain:"OmniStudio Fundamentals", q: "Which element in OmniScript is used to iterate over a list of items?", a: "Repeat", options: ["Loop", "Repeat", "List Iterator", "Group Repeat"] },
      {domain:"OmniStudio Fundamentals", q: "What is the recommended way to call an Apex class from an OmniScript?", a: "Use a Remote Action element pointing to an @InvocableMethod or OmniScript-enabled Apex class", options: ["Call Apex directly via a Formula element", "Use a Remote Action element pointing to an @InvocableMethod or OmniScript-enabled Apex class", "Embed Apex code directly in the step", "Use a Platform Event listener"] },
      {domain:"DataRaptors and Integration Procedures", q: "In a DataRaptor Transform, what is the source of data?", a: "The input JSON passed to the DataRaptor (not from Salesforce directly)", options: ["A Salesforce SOQL query", "The input JSON passed to the DataRaptor (not from Salesforce directly)", "An external REST endpoint", "A file upload"] },
      {domain:"OmniStudio Fundamentals", q: "Which OmniStudio tool is used to generate Word or PDF documents from templates?", a: "Document Generation (DocGen)", options: ["OmniScript PDF Action", "Document Generation (DocGen)", "FlexCard Export Action", "Integration Procedure Output"] },
      {domain:"OmniStudio Fundamentals", q: "How are OmniStudio components typically migrated between orgs?", a: "Export as a DataPack and import in the target org", options: ["Via Change Sets only", "Export as a DataPack and import in the target org", "Manual recreation in each org", "Using Metadata API XML deployment"] },
      {domain:"OmniStudio Fundamentals", q: "What is the purpose of the OmniScript Step element?", a: "To define a distinct page or section in a multi-step guided process", options: ["To validate a single input field", "To define a distinct page or section in a multi-step guided process", "To call an Integration Procedure", "To display a FlexCard inline"] },
      {domain:"OmniStudio Fundamentals", q: "Which OmniStudio component is best for displaying a summary view of an Account with quick actions?", a: "FlexCard", options: ["OmniScript", "FlexCard", "Integration Procedure", "DataRaptor Extract"] },
      {domain:"DataRaptors and Integration Procedures", q: "What does the 'Response' output in an Integration Procedure HTTP Action contain?", a: "The JSON body returned from the external HTTP endpoint", options: ["The HTTP status code only", "The JSON body returned from the external HTTP endpoint", "The SOQL query results", "A Salesforce record ID"] },
      {domain:"OmniStudio Fundamentals", q: "Which OmniStudio element can validate a user's input against a regular expression?", a: "Input element with a Validation Pattern property", options: ["Validation Step", "Input element with a Validation Pattern property", "Formula element", "DataRaptor Transform"] },
      {domain:"OmniStudio Fundamentals", q: "How does OmniStudio perform better than standard Salesforce Flows for complex guided transactions?", a: "OmniStudio uses a JSON-based stateless model with client-side processing for faster navigation", options: ["OmniStudio uses Apex triggers for all processing", "OmniStudio uses a JSON-based stateless model with client-side processing for faster navigation", "OmniStudio bypasses governor limits entirely", "OmniStudio does not require Salesforce licenses"] },
      {domain:"OmniStudio Fundamentals", q: "What is the role of the Industries Cloud in relation to OmniStudio?", a: "Industries Cloud (Health, FSC, Energy) uses OmniStudio as its primary UI and process layer", options: ["Industries Cloud replaces OmniStudio in new orgs", "Industries Cloud (Health, FSC, Energy) uses OmniStudio as its primary UI and process layer", "OmniStudio is only used in standard Salesforce CRM, not Industries", "Industries Cloud is a subset of OmniStudio features"] }
    ],
    tips:[
      "Know all four DataRaptor types: Extract, Turbo Extract, Load, and Transform — and when to use each.",
      "Understand the difference between OmniScript (process) and FlexCard (display).",
      "Integration Procedures are server-side — know what types of actions they can contain.",
      "Know how to migrate OmniStudio components using DataPacks.",
      "FlexCard actions (FlyOut, Modal, Navigate) are frequently tested — know each one.",
      "Understand how Conditional View elements work in OmniScripts.",
      "Practice DataRaptor field mapping — it is a core exam skill.",
      "Know the key Industries Clouds that use OmniStudio and what problems they solve."
    ]
  },

  "Slack Consultant": {
    questions: 60,
    time: 105,
    pass: 65,
    experience: "2+ years implementing Slack for business",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-slack-consultant---Slack-Con-201",
    prerequisites: ["Slack Administrator"],
    overview: "Validates expertise in consulting on Slack implementations, including workspace design, Salesforce-Slack integrations, workflow automation, and governance strategies for enterprise Slack deployments.",
    domains: [
      { name: "Slack Architecture and Strategy", pct: 20, color: "#00A1E0", desc: "Understand Slack's enterprise architecture and plan workspace and channel strategy for organizational adoption.", keyTopics: [
      {title:"Slack Platform Overview",desc:"Understand Slack's workspace, channel, and user model including Enterprise Grid for large orgs."},
      {title:"Enterprise Grid Design",desc:"Design Slack Enterprise Grid org structure with appropriate workspace-to-team mapping."},
      {title:"Governance Framework",desc:"Define channel creation policies, naming conventions, and archiving guidelines for Slack deployments."}
    ] },
      { name: "Workspace Design and Governance", pct: 22, color: "#2ECC71", desc: "Configure Slack workspace settings, channel structure, and administrative controls for enterprise governance.", keyTopics: [
      {title:"Channel Strategy",desc:"Design public, private, shared, and DM channel taxonomy aligned to business processes."},
      {title:"Workspace Administration",desc:"Configure workspace settings, admin roles, app whitelisting, and user provisioning."},
      {title:"Data Retention and Compliance",desc:"Set message retention policies and eDiscovery integrations for regulated industries."}
    ] },
      { name: "Salesforce-Slack Integration", pct: 25, color: "#F39C12", desc: "Configure Salesforce for Slack app integrations to bring CRM records and notifications into Slack workflows.", keyTopics: [
      {title:"Salesforce for Slack App",desc:"Install and configure the Salesforce for Slack app to surface records and notifications in channels."},
      {title:"Record Alerts",desc:"Set up Salesforce record alerts to post deal, case, or opportunity updates to Slack channels."},
      {title:"Salesforce Flows in Slack",desc:"Build Salesforce Flows with Slack actions to send messages and collect approvals from Slack."}
    ] },
      { name: "Automation and Workflows", pct: 18, color: "#E74C3C", desc: "Build Slack automation using Workflow Builder and Salesforce Flow to streamline business processes.", keyTopics: [
      {title:"Workflow Builder",desc:"Create automated message sequences and form-based workflows using Slack Workflow Builder."},
      {title:"Slash Commands",desc:"Design custom slash commands that trigger Salesforce actions or query CRM data."},
      {title:"Approval Workflows",desc:"Route Salesforce approval requests to Slack for faster decision-making in context."}
    ] },
      { name: "Change Management and Adoption", pct: 15, color: "#1ABC9C", desc: "Drive Slack adoption through change management, training programs, and usage analytics.", keyTopics: [
      {title:"Adoption Strategy",desc:"Design phased Slack rollouts with champion networks and use-case-led activation."},
      {title:"Training Programs",desc:"Develop role-based Slack training covering etiquette, channels, integrations, and productivity."},
      {title:"Analytics and Reporting",desc:"Use Slack Analytics dashboards to track active users, channel health, and message trends."}
    ] }
    ],
    studyDays:[
      {tag:"slack-consultant",focus:"Slack Consultant: workspace design, Enterprise Grid strategy, app governance, and ROI",topics:[
        {text:"Slack Consultant Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Slack-Consultant-Exam-Guide"},
        {text:"Slack Enterprise Grid",url:"https://help.salesforce.com/s/articleView?id=sf.slack_admin_enterprise_grid.htm"},
        {text:"Slack Governance Best Practices",url:"https://help.salesforce.com/s/articleView?id=sf.slack_admin_overview.htm"},
        {text:"Slack App Directory Management",url:"https://help.salesforce.com/s/articleView?id=sf.slack_apps_apps_directory.htm"},
        {text:"Salesforce for Slack",url:"https://help.salesforce.com/s/articleView?id=sf.slack_salesforce_app.htm"},
        {text:"Slack Consultant Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-slack-consultant-credential"}
      ]},
      {tag:"exam-prep-slack-con",focus:"Slack Consultant exam prep: workspace design, change management, and Salesforce integration",topics:[
        {text:"Slack Consultant Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Slack-Consultant-Exam-Guide"},
        {text:"Slack Consultant Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-slack-consultant-credential"},
        {text:"Slack Admin Documentation",url:"https://help.salesforce.com/s/articleView?id=sf.slack_admin_overview.htm"},
        {text:"Slack Admin Trailhead Module",url:"https://trailhead.salesforce.com/content/learn/modules/slack-admin"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-slack-consultant---Slack-Con-201"},
        {text:"Slack Consultant Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_slack_consultant"}
      ]}
    ],
    quiz:[
      {domain:"Slack Architecture and Strategy", q: "What is Slack Enterprise Grid?", a: "A Slack plan that supports multiple workspaces under a single organizational umbrella", options: ["A premium Slack channel type", "A Slack plan that supports multiple workspaces under a single organizational umbrella", "A Slack compliance add-on", "The Slack API tier for developers"] },
      {domain:"Workspace Design and Governance", q: "Which feature allows Slack channels to be shared across different company workspaces?", a: "Slack Connect", options: ["Enterprise Grid Shared Channels", "Slack Connect", "Multi-Workspace Channels", "External Guest Access"] },
      {domain:"Slack Architecture and Strategy", q: "What is SCIM used for in Slack?", a: "Automated user provisioning and deprovisioning from an identity provider", options: ["Single sign-on authentication", "Automated user provisioning and deprovisioning from an identity provider", "Custom app deployment", "Message retention policy configuration"] },
      {domain:"Automation and Workflows", q: "Which Salesforce-Slack feature allows sales reps to update Opportunity fields directly from a Slack message?", a: "Salesforce for Slack app with CRM actions", options: ["Slack Workflow Builder", "Salesforce for Slack app with CRM actions", "Flow triggered from Slack", "Slack bot with custom API"] },
      {domain:"Automation and Workflows", q: "What is the purpose of Slack Workflow Builder?", a: "To automate repetitive tasks in Slack without coding, using triggers and form steps", options: ["To build custom Slack apps with Apex", "To automate repetitive tasks in Slack without coding, using triggers and form steps", "To schedule Slack messages for later delivery", "To manage Slack channel permissions"] },
      {domain:"Slack Architecture and Strategy", q: "Which Slack security feature provides customer-managed encryption keys?", a: "Enterprise Key Management (EKM)", options: ["Data Loss Prevention (DLP)", "Enterprise Key Management (EKM)", "Message Encryption Policy", "SOC 2 Compliance Mode"] },
      {domain:"Slack Architecture and Strategy", q: "How does Service Cloud swarming work with Slack?", a: "A Slack channel is automatically created for a complex case, pulling in cross-functional experts", options: ["Service agents resolve cases via Slack DMs only", "A Slack channel is automatically created for a complex case, pulling in cross-functional experts", "Cases are closed from Slack without Salesforce access", "Service managers assign agents via Slack reactions"] },
      {domain:"Slack Architecture and Strategy", q: "What is the recommended approach for naming Slack channels in an enterprise?", a: "Define a consistent naming convention (e.g., prefix-team-purpose) and enforce it with governance", options: ["Let teams name channels freely for autonomy", "Define a consistent naming convention (e.g., prefix-team-purpose) and enforce it with governance", "Use only numbers in channel names for uniqueness", "Name channels after project codes only"] },
      {domain:"Slack Architecture and Strategy", q: "Which role is responsible for managing Slack governance at an enterprise level?", a: "Slack Workspace Owner or Org Admin", options: ["Slack Developer", "Slack Workspace Owner or Org Admin", "Individual Channel Manager", "IT Security Only"] },
      {domain:"Automation and Workflows", q: "What type of Slack trigger is most appropriate for capturing lead information via a Slack form?", a: "Workflow Builder trigger with a shortcut and form steps", options: ["Channel join trigger", "Workflow Builder trigger with a shortcut and form steps", "Scheduled trigger only", "Emoji reaction trigger"] },
      {domain:"Change Management and Adoption", q: "Which metric is most useful for measuring Slack adoption success?", a: "Daily Active Users (DAU) and weekly message volume trends", options: ["Number of channels created", "Daily Active Users (DAU) and weekly message volume trends", "Total messages sent all-time", "Number of integrations installed"] },
      {domain:"Salesforce-Slack Integration", q: "What is a deal room in Slack?", a: "A dedicated Slack channel created to coordinate an Opportunity with all stakeholders", options: ["A Salesforce CPQ feature", "A dedicated Slack channel created to coordinate an Opportunity with all stakeholders", "A video meeting feature in Slack", "A private message thread for finance approvals"] },
      {domain:"Workspace Design and Governance", q: "Which eDiscovery option does Slack provide for compliance?", a: "Message export and third-party DLP tool integration", options: ["Built-in legal hold only", "Message export and third-party DLP tool integration", "Automatic GDPR erasure", "Message archiving to on-premise servers only"] },
      {domain:"Change Management and Adoption", q: "What is the best change management strategy for migrating a team from email to Slack?", a: "Run a pilot program, identify champions, and show value through quick wins", options: ["Immediately switch all communication to Slack and disable email", "Run a pilot program, identify champions, and show value through quick wins", "Require all employees to attend a full-day training before launch", "Let adoption happen organically without guidance"] },
      {domain:"Automation and Workflows", q: "How can a Salesforce Flow be triggered from a Slack message?", a: "Using Slack button actions connected to Flow via Salesforce for Slack app or API", options: ["Directly via a Slack webhook only", "Using Slack button actions connected to Flow via Salesforce for Slack app or API", "By emailing Salesforce from Slack", "Through a scheduled Flow that reads Slack messages"] },
      {domain:"Slack Architecture and Strategy", q: "What is a multi-workspace channel in Enterprise Grid?", a: "A channel visible and accessible across multiple workspaces within the same Grid org", options: ["A channel with external Slack users from other companies", "A channel visible and accessible across multiple workspaces within the same Grid org", "A read-only broadcast channel", "A shared channel between a Slack user and a bot"] },
      {domain:"Slack Architecture and Strategy", q: "Which Slack feature allows external users from other organizations to collaborate in your workspace?", a: "Slack Connect (formerly Shared Channels)", options: ["Guest Access", "Slack Connect (formerly Shared Channels)", "External App Integration", "Public Channel Invitation"] },
      {domain:"Slack Architecture and Strategy", q: "What analytics tool is natively available in Slack for workspace admins?", a: "Slack Analytics Dashboard in Admin settings", options: ["Tableau for Slack", "Slack Analytics Dashboard in Admin settings", "Salesforce Reports embedded in Slack", "Einstein Analytics Slack connector"] },
      {domain:"Workspace Design and Governance", q: "How should sensitive data shared in Slack be protected?", a: "Combine message retention policies, EKM, DLP integrations, and access controls", options: ["Mark messages as private only", "Combine message retention policies, EKM, DLP integrations, and access controls", "Use channel passwords", "Limit all Slack use to internal channels"] },
      {domain:"Slack Architecture and Strategy", q: "Which Slack plan tier is required for SCIM provisioning and SSO enforcement?", a: "Business+ or Enterprise Grid", options: ["Pro plan", "Business+ or Enterprise Grid", "Free plan with IT add-on", "Standard plan with compliance license"] }
    ],
    tips:[
      "Know Enterprise Grid architecture — how workspaces, orgs, and multi-workspace channels relate.",
      "Salesforce for Slack integration is the highest-weighted domain — know CRM actions and notifications.",
      "Understand Workflow Builder triggers and steps — be able to design a simple automation workflow.",
      "Know the difference between Slack Connect (external) and multi-workspace channels (internal to Grid).",
      "SCIM, SSO, EKM, and DLP are frequently tested governance and security topics.",
      "Be prepared for adoption and change management scenario questions — know the champion network model.",
      "Know when to recommend Slack swarming vs standard case management in Service Cloud.",
      "Understand Slack Analytics and what metrics matter for adoption measurement."
    ]
  },

  "CRM Analytics and Einstein Discovery Consultant": {
    questions: 60,
    time: 105,
    pass: 65,
    experience: "2+ years implementing CRM Analytics solutions",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-crm-analytics---Analytics-Con-201",
    prerequisites: ["Platform Administrator"],
    overview: "Validates expertise in designing and implementing CRM Analytics (formerly Tableau CRM / Einstein Analytics) and Einstein Discovery solutions, including datasets, dashboards, lenses, recipes, and predictive analytics.",
    domains: [
      { name: "CRM Analytics Architecture", pct: 20, color: "#00A1E0", desc: "Understand CRM Analytics platform architecture including datasets, lenses, dashboards, and Einstein Discovery.", keyTopics: [
      {title:"Platform Components",desc:"Know the CRM Analytics component hierarchy: apps, datasets, lenses, dashboards, and stories."},
      {title:"Data Architecture",desc:"Understand direct data connector, dataflow, and recipe approaches for populating datasets."},
      {title:"Security Architecture",desc:"Design CRM Analytics security predicates and app sharing to enforce row-level data security."}
    ] },
      { name: "Data Integration and Preparation", pct: 22, color: "#2ECC71", desc: "Configure data flows, recipes, and connectors to ingest and transform data for CRM Analytics datasets.", keyTopics: [
      {title:"Dataflows",desc:"Build dataflows with register, edgemart, augment, and computeExpression steps."},
      {title:"Analytics Studio Recipes",desc:"Use Analytics Studio Recipes for visual, no-code data transformation and aggregation."},
      {title:"External Data Connectors",desc:"Connect CRM Analytics to Salesforce orgs, Snowflake, AWS S3, and other external sources."}
    ] },
      { name: "Dashboards and Lenses", pct: 25, color: "#F39C12", desc: "Design and build CRM Analytics dashboards and lenses that deliver actionable business insights.", keyTopics: [
      {title:"Dashboard Builder",desc:"Build multi-widget dashboards using charts, tables, filters, and binding expressions."},
      {title:"SAQL Queries",desc:"Write Salesforce Analytics Query Language (SAQL) for advanced calculations and aggregations."},
      {title:"Dynamic Bindings",desc:"Use faceting and dynamic bindings to create interactive, drill-through analytics experiences."}
    ] },
      { name: "Einstein Discovery", pct: 18, color: "#E74C3C", desc: "Build and deploy Einstein Discovery stories to generate AI-powered predictions and prescriptive recommendations.", keyTopics: [
      {title:"Story Creation",desc:"Configure Einstein Discovery stories by selecting outcome variable, data, and model settings."},
      {title:"Model Evaluation",desc:"Interpret model quality metrics (AUC, R-squared) and refine models for business accuracy."},
      {title:"Prediction Deployment",desc:"Deploy Einstein Discovery predictions to Salesforce records and dashboards for inline scoring."}
    ] },
      { name: "Security and Administration", pct: 15, color: "#1ABC9C", desc: "Administer CRM Analytics security, access controls, and platform governance across analytics apps.", keyTopics: [
      {title:"App and Asset Sharing",desc:"Share CRM Analytics apps with users and groups using viewer, editor, and manager access."},
      {title:"Security Predicates",desc:"Write SAQL security predicates to filter dataset rows by user or profile attributes."},
      {title:"Platform Administration",desc:"Manage analytics licenses, quotas, scheduled jobs, and dataflow execution monitoring."}
    ] }
    ],
    studyDays:[
      {tag:"crm-analytics-setup",focus:"CRM Analytics setup: datasets, lenses, dashboards, and SAQL queries",topics:[
        {text:"CRM Analytics Consultant Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-CRM-Analytics-and-Einstein-Discovery-Consultant-Exam-Guide"},
        {text:"CRM Analytics Overview",url:"https://help.salesforce.com/s/articleView?id=sf.bi_overview.htm"},
        {text:"Datasets and Data Recipes",url:"https://help.salesforce.com/s/articleView?id=sf.bi_recipe_overview.htm"},
        {text:"SAQL Reference",url:"https://help.salesforce.com/s/articleView?id=sf.bi_saql.htm"},
        {text:"Dashboard Design",url:"https://help.salesforce.com/s/articleView?id=sf.bi_dashboard_overview.htm"},
        {text:"CRM Analytics Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-crm-analytics-and-einstein-discovery-consultant-credential"}
      ]},
      {tag:"einstein-discovery",focus:"Einstein Discovery: stories, predictive models, prescriptions, and writeback",topics:[
        {text:"Einstein Discovery Overview",url:"https://help.salesforce.com/s/articleView?id=sf.bi_edd_overview.htm"},
        {text:"Creating Einstein Discovery Stories",url:"https://help.salesforce.com/s/articleView?id=sf.bi_edd_story_overview.htm"},
        {text:"Einstein Discovery Prescriptions",url:"https://help.salesforce.com/s/articleView?id=sf.bi_edd_prescriptions.htm"},
        {text:"Model Writeback to CRM",url:"https://help.salesforce.com/s/articleView?id=sf.bi_edd_writeback.htm"},
        {text:"Einstein Prediction Builder",url:"https://help.salesforce.com/s/articleView?id=sf.bi_edd_overview.htm"},
        {text:"CRM Analytics Data Integration",url:"https://help.salesforce.com/s/articleView?id=sf.bi_integrate_connectors_sfdc.htm"}
      ]},
      {tag:"exam-prep-crm-analytics",focus:"CRM Analytics Consultant exam prep: dashboards, SAQL, Einstein Discovery, and data integration",topics:[
        {text:"CRM Analytics Consultant Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-CRM-Analytics-and-Einstein-Discovery-Consultant-Exam-Guide"},
        {text:"CRM Analytics Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-crm-analytics-and-einstein-discovery-consultant-credential"},
        {text:"CRM Analytics Specialist Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_analytics_cloud_specialist"},
        {text:"SAQL Documentation",url:"https://help.salesforce.com/s/articleView?id=sf.bi_saql.htm"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-crm-analytics-consultant---CRM-Ana-Con-201"},
        {text:"CRM Analytics Module",url:"https://trailhead.salesforce.com/content/learn/modules/wave_analytics_basics"}
      ]}
    ],
    quiz:[
      {domain:"CRM Analytics Architecture", q: "What is the primary difference between a Dataflow and a Recipe in CRM Analytics?", a: "Dataflows use JSON-based transformations; Recipes provide a visual, node-based interface for data preparation", options: ["Dataflows are for live data; Recipes are for stored data", "Dataflows use JSON-based transformations; Recipes provide a visual, node-based interface for data preparation", "Recipes are only for Einstein Discovery models", "Dataflows can only read from external data sources"] },
      {domain:"Dashboards and Lenses", q: "What is SAQL in CRM Analytics?", a: "Salesforce Analytics Query Language, used to query datasets in lenses and dashboards", options: ["A structured API query language for Salesforce objects", "Salesforce Analytics Query Language, used to query datasets in lenses and dashboards", "A SQL dialect for Tableau Desktop", "An AI language model for Einstein predictions"] },
      {domain:"CRM Analytics Architecture", q: "Which CRM Analytics feature allows users to explore and visualize data interactively?", a: "Lens (Explorer)", options: ["Dashboard", "Lens (Explorer)", "Recipe", "Dataflow"] },
      {domain:"Dashboards and Lenses", q: "What is a binding in a CRM Analytics dashboard?", a: "A dynamic expression that links widget state (like filters) to query results", options: ["A static chart label", "A dynamic expression that links widget state (like filters) to query results", "A permission assignment to a dataset", "A connection to an external database"] },
      {domain:"CRM Analytics Architecture", q: "How is Row-Level Security implemented in CRM Analytics?", a: "Using a security predicate defined on the dataset", options: ["Using Salesforce sharing rules only", "Using a security predicate defined on the dataset", "By restricting dashboards to specific profiles", "By encrypting individual rows in the dataset"] },
      {domain:"Einstein Discovery", q: "What is the purpose of the Einstein Discovery Story?", a: "To analyze a dataset, identify key drivers, and generate predictions and prescriptions", options: ["To create an animated presentation of dashboard data", "To analyze a dataset, identify key drivers, and generate predictions and prescriptions", "To schedule automated reports for stakeholders", "To define the data model for a CRM Analytics app"] },
      {domain:"Einstein Discovery", q: "Which Einstein Discovery feature suggests actions to improve a predicted outcome?", a: "Prescriptions", options: ["Predictions", "Prescriptions", "Opportunity Scoring", "Improvement Suggestions"] },
      {domain:"Security and Administration", q: "What is a connected dataset in CRM Analytics?", a: "A dataset that pulls data live from a Salesforce object without storing it in CRMA", options: ["A dataset shared between two Analytics apps", "A dataset that pulls data live from a Salesforce object without storing it in CRMA", "A dataset connected to an external database via JDBC", "A dataset that links two CRMA apps"] },
      {domain:"CRM Analytics Architecture", q: "Which pre-built app in CRM Analytics helps sales managers track pipeline and forecast?", a: "Sales Cloud Analytics App", options: ["Pipeline Studio", "Sales Cloud Analytics App", "Revenue Intelligence", "Deal Analyzer"] },
      {domain:"Dashboards and Lenses", q: "What is the role of faceting in CRM Analytics dashboards?", a: "Allows one widget's selection to automatically filter other widgets on the dashboard", options: ["Enables dataset column sorting", "Allows one widget's selection to automatically filter other widgets on the dashboard", "Applies Row-Level Security dynamically", "Splits a dataset into multiple partitions"] },
      {domain:"Dashboards and Lenses", q: "Which type of SAQL clause is used to group query results by a field?", a: "group by", options: ["order by", "group by", "partition by", "segment by"] },
      {domain:"Dashboards and Lenses", q: "When should you use Einstein Discovery instead of standard CRM Analytics dashboards?", a: "When you need predictive scoring, key driver analysis, and actionable prescriptions from data", options: ["When you need interactive charts for business users", "When you need predictive scoring, key driver analysis, and actionable prescriptions from data", "When connecting to external data sources", "When building mobile dashboards"] },
      {domain:"Dashboards and Lenses", q: "What is the recommended way to embed a CRM Analytics dashboard into a Salesforce record page?", a: "Use the CRM Analytics Dashboard Lightning component in the Lightning App Builder", options: ["Use an iFrame in a Visualforce page", "Use the CRM Analytics Dashboard Lightning component in the Lightning App Builder", "Add a URL link to the dashboard", "Use a Flow screen step"] },
      {domain:"CRM Analytics Architecture", q: "What does the Analytics sharing model inherit from?", a: "Salesforce org-level sharing settings and object permissions", options: ["Dataset Row-Level Security only", "Salesforce org-level sharing settings and object permissions", "Analytics App settings only", "Custom permission sets defined in SAQL"] },
      {domain:"CRM Analytics Architecture", q: "Which transformation in a Dataflow computes rolling totals or window aggregations?", a: "Window (compute relative) transformation", options: ["Flatten", "Window (compute relative) transformation", "Sfdcdigest aggregate", "Partition"] },
      {domain:"CRM Analytics Architecture", q: "Which CRM Analytics live connection allows direct querying of Snowflake data?", a: "Salesforce Data Connector for Snowflake via Live Dataset", options: ["Data Loader for Snowflake", "Salesforce Data Connector for Snowflake via Live Dataset", "MuleSoft API Manager", "Heroku Postgres sync"] },
      {domain:"CRM Analytics Architecture", q: "What is an Analytics Notification?", a: "An automated alert that triggers when a dataset metric crosses a defined threshold", options: ["An email report sent to all dashboard users", "An automated alert that triggers when a dataset metric crosses a defined threshold", "A Chatter post from an Einstein bot", "A push notification about a failed dataflow"] },
      {domain:"CRM Analytics Architecture", q: "Which role is required to create and manage CRM Analytics apps and datasets?", a: "Analytics Cloud Integration User or user with Manage Analytics permission", options: ["System Administrator only", "Analytics Cloud Integration User or user with Manage Analytics permission", "Platform Developer", "Data Steward"] },
      {domain:"Dashboards and Lenses", q: "What is the result of adding a 'foreach' clause in SAQL?", a: "Generates a separate query result for each value in a specified dimension", options: ["Loops through all rows in a dataset", "Generates a separate query result for each value in a specified dimension", "Creates multiple dataset partitions", "Iterates through dashboard filters"] },
      {domain:"Data Integration and Preparation", q: "Which technique allows a CRM Analytics prediction score to trigger an automated process in Salesforce?", a: "Use Einstein Discovery prediction in a Salesforce Flow via the Get Predictions action", options: ["Embed a SAQL query in a Salesforce trigger", "Use Einstein Discovery prediction in a Salesforce Flow via the Get Predictions action", "Schedule a nightly report to email scores", "Use Apex to read dataset values"] }
    ],
    tips:[
      "Know SAQL deeply — group by, foreach, filter, and binding expressions are exam staples.",
      "Understand when to use a Dataflow vs a Recipe for data preparation.",
      "Know the difference between connected (live) and local (stored) datasets.",
      "Einstein Discovery prescriptions are commonly tested — know how they trigger automated actions via Flow.",
      "Row-Level Security via security predicates is critical — know how to implement and test it.",
      "Be familiar with pre-built analytics apps (Sales Cloud, Service Cloud) and their use cases.",
      "Understand binding types: selection bindings, result bindings, and static/dynamic filters.",
      "Practice the Analytics sharing model — how org sharing rules affect dataset visibility."
    ]
  },

  "MuleSoft Catalyst Consultant": {
    questions: 60,
    time: 105,
    pass: 65,
    experience: "2+ years in integration architecture and MuleSoft delivery",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-mulesoft-catalyst-consultant---Mule-Con-201",
    prerequisites: ["MuleSoft Developer"],
    overview: "Validates expertise in applying the MuleSoft Catalyst methodology to deliver successful integration and API-led connectivity projects, including discovery, design, delivery, and run phases.",
    domains: [
      { name: "Catalyst Methodology", pct: 25, color: "#00A1E0", desc: "Apply the MuleSoft Catalyst methodology to structure API and integration delivery programs.", keyTopics: [
      {title:"Catalyst Framework",desc:"Understand the four Catalyst phases: Align, Define, Build, and Run for structured API delivery."},
      {title:"Outcome-Based Delivery",desc:"Tie integration project phases to measurable business outcomes using Catalyst success criteria."},
      {title:"Catalyst Templates",desc:"Use Catalyst deliverable templates for API strategy, project charters, and capability assessments."}
    ] },
      { name: "Discovery and Design", pct: 22, color: "#2ECC71", desc: "Lead discovery workshops and design API-led connectivity architectures aligned to business capabilities.", keyTopics: [
      {title:"Capability Assessment",desc:"Map current integration landscape and identify gaps using the Catalyst capability model."},
      {title:"API-Led Design",desc:"Design experience, process, and system API tiers aligned to identified business capabilities."},
      {title:"RAML and API Specifications",desc:"Create API specifications using RAML or OAS to document contracts before implementation."}
    ] },
      { name: "API Strategy and Architecture", pct: 20, color: "#F39C12", desc: "Define enterprise API strategy including reuse programs, API lifecycle governance, and platform selection.", keyTopics: [
      {title:"Reuse Strategy",desc:"Identify reusable process and system APIs to build an organizational integration asset portfolio."},
      {title:"Governance Model",desc:"Establish API review, approval, and versioning governance through a Center for Enablement."},
      {title:"Platform Architecture",desc:"Architect Anypoint Platform deployment topology for the organization's scale and compliance needs."}
    ] },
      { name: "Delivery and Execution", pct: 18, color: "#E74C3C", desc: "Manage MuleSoft integration project delivery including sprint planning, backlog management, and quality assurance.", keyTopics: [
      {title:"Agile Delivery",desc:"Apply Scrum or Kanban to Mule project delivery with API-focused sprint goals and demos."},
      {title:"Quality Assurance",desc:"Implement MUnit test coverage and CI/CD pipelines for automated API quality gates."},
      {title:"Stakeholder Management",desc:"Report integration delivery progress to business and IT stakeholders using Catalyst metrics."}
    ] },
      { name: "Run and Operate", pct: 15, color: "#1ABC9C", desc: "Establish operational practices for running MuleSoft APIs in production including monitoring, incident response, and optimization.", keyTopics: [
      {title:"Anypoint Monitoring",desc:"Configure Anypoint Monitoring alerts and dashboards for API health and SLA compliance."},
      {title:"Incident Response",desc:"Define runbooks and escalation paths for API incidents with defined RTO/RPO targets."},
      {title:"Continuous Improvement",desc:"Review API usage analytics and implement optimization cycles based on performance data."}
    ] }
    ],
    studyDays:[
      {tag:"catalyst-methodology",focus:"MuleSoft Catalyst methodology: Discover, Design, Deliver, and Run phases",topics:[
        {text:"MuleSoft Catalyst Consultant Exam Guide",url:"https://trailhead.salesforce.com/help?article=MuleSoft-Certified-Catalyst-Consultant-Exam-Guide"},
        {text:"Catalyst Methodology Overview",url:"https://docs.mulesoft.com/general/"},
        {text:"Center for Enablement (C4E)",url:"https://www.mulesoft.com/resources/api/what-is-api-led-connectivity"},
        {text:"API-Led Connectivity Strategy",url:"https://www.mulesoft.com/resources/api/what-is-api-led-connectivity"},
        {text:"MuleSoft Catalyst Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/mulesoft-certified-catalyst-consultant"},
        {text:"Anypoint Platform for Consultants",url:"https://docs.mulesoft.com/general/"}
      ]},
      {tag:"exam-prep-catalyst",focus:"Catalyst Consultant exam prep: methodology, C4E, and integration governance scenarios",topics:[
        {text:"MuleSoft Catalyst Consultant Exam Guide",url:"https://trailhead.salesforce.com/help?article=MuleSoft-Certified-Catalyst-Consultant-Exam-Guide"},
        {text:"Catalyst Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/mulesoft-certified-catalyst-consultant"},
        {text:"Anypoint Platform Documentation",url:"https://docs.mulesoft.com/"},
        {text:"C4E and API Strategy",url:"https://www.mulesoft.com/resources/api/what-is-api-led-connectivity"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-mule-catalyst---Mule-Cat-201"},
        {text:"MuleSoft Training",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/mulesoft-integration-and-apis"}
      ]}
    ],
    quiz:[
      {domain:"Catalyst Methodology", q: "What are the four phases of the MuleSoft Catalyst methodology?", a: "Discover, Design, Deliver, Run", options: ["Plan, Build, Test, Deploy", "Discover, Design, Deliver, Run", "Analyze, Architect, Implement, Monitor", "Assess, Strategy, Develop, Operate"] },
      {domain:"Catalyst Methodology", q: "What is the purpose of the Center for Enablement (C4E) in Catalyst?", a: "To enable API reuse and drive inner-sourcing across teams", options: ["To manage infrastructure for MuleSoft deployments", "To enable API reuse and drive inner-sourcing across teams", "To provide training for developers only", "To govern data quality in Anypoint Platform"] },
      {domain:"Discovery and Design", q: "In API-led connectivity, which layer connects the Experience layer to backend systems?", a: "Process layer", options: ["System layer", "Process layer", "Integration layer", "Business layer"] },
      {domain:"Catalyst Methodology", q: "What does the Discovery phase of Catalyst primarily produce?", a: "A current state assessment and gap analysis with a proposed API strategy", options: ["A production deployment of the first API", "A current state assessment and gap analysis with a proposed API strategy", "An Anypoint Platform configuration", "A completed project plan"] },
      {domain:"Catalyst Methodology", q: "What is the main metric for measuring C4E success?", a: "API reuse rate across teams", options: ["Number of APIs deployed", "API reuse rate across teams", "Time to first API delivery", "Number of integrations per sprint"] },
      {domain:"Catalyst Methodology", q: "Which Catalyst phase focuses on building and iterating on APIs in sprints?", a: "Deliver", options: ["Discover", "Design", "Deliver", "Run"] },
      {domain:"Catalyst Methodology", q: "What is the anti-pattern known as 'point-to-point spaghetti'?", a: "Direct integrations between every system without reusable APIs, creating an unmaintainable web", options: ["Overloading the Experience layer with business logic", "Direct integrations between every system without reusable APIs, creating an unmaintainable web", "Building too many Process layer APIs", "Using only SOAP instead of REST"] },
      {domain:"API Strategy and Architecture", q: "Which tool in Anypoint Platform supports API reuse and discovery across teams?", a: "Anypoint Exchange", options: ["Anypoint Studio", "Anypoint Exchange", "Anypoint Monitoring", "API Manager"] },
      {domain:"Catalyst Methodology", q: "What is the recommended API specification format for MuleSoft API design?", a: "RAML (RESTful API Modeling Language)", options: ["OpenAPI only", "RAML (RESTful API Modeling Language)", "WSDL for all APIs", "JSON Schema only"] },
      {domain:"Catalyst Methodology", q: "Which Catalyst principle emphasizes delivering value incrementally to stakeholders?", a: "Agile-based iterative delivery with MVPs", options: ["Big bang deployment", "Agile-based iterative delivery with MVPs", "Waterfall delivery with full documentation", "Parallel team delivery"] },
      {domain:"Catalyst Methodology", q: "What is the purpose of the Run phase in Catalyst?", a: "To monitor, maintain, and continuously improve APIs in production", options: ["To finalize API design before deployment", "To monitor, maintain, and continuously improve APIs in production", "To train new integration developers", "To present the final project to stakeholders"] },
      {domain:"API Strategy and Architecture", q: "In the API-led model, where should orchestration and aggregation logic live?", a: "Process layer", options: ["Experience layer", "Process layer", "System layer", "All layers equally"] },
      {domain:"Discovery and Design", q: "Which integration pattern is best when you need to synchronize data from one system to many?", a: "Broadcast pattern", options: ["Migration pattern", "Broadcast pattern", "Aggregation pattern", "Correlation pattern"] },
      {domain:"Catalyst Methodology", q: "What does inner-sourcing mean in the context of Catalyst?", a: "Treating internal APIs like open-source packages for reuse across business teams", options: ["Restricting API use to the development team that built them", "Treating internal APIs like open-source packages for reuse across business teams", "Open-sourcing all MuleSoft APIs externally", "Allowing external vendors to contribute to internal APIs"] },
      {domain:"Catalyst Methodology", q: "Which KPI is most relevant for tracking integration project value realization?", a: "Reduction in integration delivery time due to API reuse", options: ["Total API calls per day", "Reduction in integration delivery time due to API reuse", "Number of RAML specifications written", "CloudHub vCPU utilization"] },
      {domain:"Catalyst Methodology", q: "What is an MVP in Catalyst delivery?", a: "A minimum viable product — the smallest valuable deliverable to validate a business outcome", options: ["A major version project", "A minimum viable product — the smallest valuable deliverable to validate a business outcome", "A MuleSoft validation process", "A metrics visibility platform"] },
      {domain:"Catalyst Methodology", q: "Which role is responsible for championing API reuse and C4E adoption within a business unit?", a: "API Champion (or Integration Champion)", options: ["MuleSoft Developer", "API Champion (or Integration Champion)", "Anypoint Platform Admin", "Salesforce Architect"] },
      {domain:"API Strategy and Architecture", q: "What is the recommended approach for versioning APIs in Catalyst?", a: "Semantic versioning with backwards-compatible minor versions and breaking changes in major versions", options: ["Date-based versioning only", "Semantic versioning with backwards-compatible minor versions and breaking changes in major versions", "Never version APIs — always update in place", "Increment version on every deployment"] },
      {domain:"Catalyst Methodology", q: "What does organizational readiness in Catalyst change management assess?", a: "Whether the teams and culture are prepared to adopt API-led integration practices", options: ["Whether the infrastructure is ready for CloudHub", "Whether the teams and culture are prepared to adopt API-led integration practices", "Whether RAML specifications are complete", "Whether all existing integrations are documented"] },
      {domain:"API Strategy and Architecture", q: "Which Catalyst activity helps identify which APIs should be built first?", a: "Domain decomposition and API prioritization during Design phase", options: ["Sprint retrospective", "Domain decomposition and API prioritization during Design phase", "Run phase monitoring review", "Discovery phase stakeholder interviews only"] }
    ],
    tips:[
      "Know the four Catalyst phases deeply — Discover, Design, Deliver, Run — and what each produces.",
      "Understand C4E purpose and how it drives API reuse across the organization.",
      "Be clear on API-led connectivity layers: System, Process, Experience — and what belongs in each.",
      "Know the key anti-patterns like point-to-point spaghetti and overloaded Experience layers.",
      "Understand the value metrics and KPIs used to measure Catalyst success.",
      "Know the key integration patterns (Broadcast, Aggregation, Migration, Correlation) and when to use them.",
      "Be prepared for change management and organizational readiness questions.",
      "Understand Anypoint Exchange's role in enabling API reuse and inner-sourcing."
    ]
  },

  "Marketing Cloud Engagement Consultant": {
    questions: 60,
    time: 105,
    pass: 65,
    experience: "2+ years implementing Marketing Cloud Engagement solutions",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-mce-consultant---MCE-Con-201",
    prerequisites: ["Marketing Cloud Email Specialist"],
    overview: "Validates advanced expertise in designing and implementing enterprise Marketing Cloud Engagement solutions including complex data architectures, multi-channel journeys, automation, and integration with Sales/Service Cloud.",
    domains: [
      { name: "Discovery and Architecture", pct: 18, color: "#00A1E0", desc: "Conduct Marketing Cloud discovery to assess business requirements and design a scalable email program architecture.", keyTopics: [
      {title:"Business Requirements",desc:"Elicit marketing objectives, audience segments, and KPIs to scope the Marketing Cloud implementation."},
      {title:"Account Architecture",desc:"Design Marketing Cloud account structure including business units, roles, and subscriber management."},
      {title:"Data Architecture",desc:"Plan Marketing Cloud data extensions, sendable objects, and subscriber data model design."}
    ] },
      { name: "Account Configuration", pct: 20, color: "#2ECC71", desc: "Configure Marketing Cloud account settings including sender authentication, branding, and administrative controls.", keyTopics: [
      {title:"Sender Authentication Package",desc:"Configure SAP with custom domain, private domain, and IP warming for deliverability."},
      {title:"Business Unit Setup",desc:"Create and configure business units with appropriate role assignments and sharing settings."},
      {title:"Brand Builder",desc:"Apply brand builder settings for default colors, fonts, and logo across content blocks."}
    ] },
      { name: "Automation and Journey Builder", pct: 22, color: "#F39C12", desc: "Build Marketing Cloud automations and journeys to trigger personalized communications at scale.", keyTopics: [
      {title:"Journey Builder",desc:"Design multi-step journeys with entry sources, decision splits, and exit criteria."},
      {title:"Automation Studio",desc:"Build scheduled and triggered automations for data imports, sends, and SQL activities."},
      {title:"Einstein Features",desc:"Enable Einstein Send Time Optimization and Einstein Engagement Scoring for journey optimization."}
    ] },
      { name: "Data Management", pct: 22, color: "#E74C3C", desc: "Configure Marketing Cloud data extensions, contact builder, and data synchronization for subscriber management.", keyTopics: [
      {title:"Data Extensions",desc:"Create and relate data extensions to support segmentation, personalization, and transactional sends."},
      {title:"Contact Builder",desc:"Build contact data model with linked data extensions using Contact Builder attribute groups."},
      {title:"AMPscript Personalization",desc:"Write AMPscript to personalize email content using subscriber and relational data."}
    ] },
      { name: "Analytics and Reporting", pct: 18, color: "#1ABC9C", desc: "Build Marketing Cloud reports and dashboards to measure email program performance and optimize campaigns.", keyTopics: [
      {title:"Email Analytics",desc:"Analyze open rate, click rate, bounce rate, and unsubscribe metrics at send, journey, and program levels."},
      {title:"Analytics Builder",desc:"Use Analytics Builder to create subscriber, engagement, and send performance reports."},
      {title:"A/B Testing",desc:"Design subject line, content, and send time A/B tests with statistical significance evaluation."}
    ] }
    ],
    studyDays:[
      {tag:"mc-engagement-solution",focus:"MC Engagement solution design: data model, channel strategy, and multi-cloud integration",topics:[
        {text:"MC Engagement Consultant Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Marketing-Cloud-Consultant-Exam-Guide"},
        {text:"Marketing Cloud Connect",url:"https://help.salesforce.com/s/articleView?id=sf.mc_co_marketing_cloud_connect.htm"},
        {text:"Data Extensions and Segmentation",url:"https://help.salesforce.com/s/articleView?id=sf.mc_es_create_data_extension.htm"},
        {text:"Journey Builder Advanced",url:"https://help.salesforce.com/s/articleView?id=sf.mc_jb_overview.htm"},
        {text:"Contact Builder Advanced",url:"https://help.salesforce.com/s/articleView?id=sf.mc_cab_contact_builder.htm"},
        {text:"MC Consultant Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-marketing-cloud-consultant-credential"}
      ]},
      {tag:"exam-prep-mc-con",focus:"MC Engagement Consultant exam prep: channel strategy, data model, and multi-cloud scenarios",topics:[
        {text:"MC Engagement Consultant Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Marketing-Cloud-Consultant-Exam-Guide"},
        {text:"MC Consultant Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-marketing-cloud-consultant-credential"},
        {text:"Marketing Cloud Documentation",url:"https://help.salesforce.com/s/articleView?id=sf.mc_overview.htm"},
        {text:"Journey Builder Specialist Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_journey_builder_specialist"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-mc-consultant---MC-Con-201"},
        {text:"Marketing Cloud Basics Module",url:"https://trailhead.salesforce.com/content/learn/modules/marketing-cloud-basics"}
      ]}
    ],
    quiz:[
      {domain:"Account Configuration", q: "What is the purpose of a Business Unit in Marketing Cloud Engagement?", a: "To segment the Marketing Cloud org into separate units for different brands, regions, or teams", options: ["To create separate email templates per campaign", "To segment the Marketing Cloud org into separate units for different brands, regions, or teams", "To manage API access keys independently", "To separate mobile and email channels"] },
      {domain:"Discovery and Architecture", q: "What makes a Data Extension 'sendable'?", a: "It has a field mapped to a Subscriber Key or Email Address for sending", options: ["It contains at least 1000 contacts", "It has a field mapped to a Subscriber Key or Email Address for sending", "It is linked to Contact Builder", "It has an indexed Primary Key"] },
      {domain:"Account Configuration", q: "What is the Sender Authentication Package (SAP)?", a: "A setup that includes dedicated IP, custom domain, and reply mail management for deliverability", options: ["A GDPR compliance certification", "A setup that includes dedicated IP, custom domain, and reply mail management for deliverability", "A two-factor authentication module", "A Salesforce-issued spam filter"] },
      {domain:"Automation and Journey Builder", q: "In Journey Builder, what is the purpose of a Goal?", a: "To define the desired outcome of the journey and exit contacts who achieve it", options: ["To set the start date of the journey", "To define the desired outcome of the journey and exit contacts who achieve it", "To schedule email sends in the journey", "To limit the number of contacts entering the journey"] },
      {domain:"Data Management", q: "Which Marketing Cloud feature is used to synchronize Contact and Lead data from Sales Cloud?", a: "Marketing Cloud Connect Synchronized Data Extensions", options: ["Automation Studio import", "Marketing Cloud Connect Synchronized Data Extensions", "FTP feed from Salesforce reports", "Contact Builder direct sync"] },
      {domain:"Automation and Journey Builder", q: "What is the role of SQL Query Activity in Automation Studio?", a: "To create or update Data Extensions by running SQL queries against the data schema", options: ["To connect to external databases via JDBC", "To create or update Data Extensions by running SQL queries against the data schema", "To schedule email sends via cron expression", "To validate email HTML before send"] },
      {domain:"Discovery and Architecture", q: "What is IP warming in Marketing Cloud?", a: "Gradually increasing email send volume on a new IP to build a positive sending reputation", options: ["Encrypting email content during delivery", "Gradually increasing email send volume on a new IP to build a positive sending reputation", "Configuring DKIM records for a domain", "Testing email rendering across clients"] },
      {domain:"Analytics and Reporting", q: "Which Einstein feature in Marketing Cloud optimizes the time an email is sent to each subscriber?", a: "Einstein Send Time Optimization (STO)", options: ["Einstein Content Selection", "Einstein Send Time Optimization (STO)", "Einstein Engagement Scoring", "Einstein Subject Line Recommendations"] },
      {domain:"Discovery and Architecture", q: "What is the purpose of Data Views in Marketing Cloud?", a: "System tables that store send, open, click, and bounce data for reporting via SQL", options: ["Custom data storage for segmentation", "System tables that store send, open, click, and bounce data for reporting via SQL", "Pre-built reports in Analytics Builder", "Data Extension templates"] },
      {domain:"Automation and Journey Builder", q: "How does a Transactional Send Journey differ from a standard Marketing Journey?", a: "It is triggered by API calls for real-time messages like receipts or password resets, bypassing subscription lists", options: ["It sends to all contacts regardless of opt-in status and uses a batch process", "It is triggered by API calls for real-time messages like receipts or password resets, bypassing subscription lists", "It cannot use personalization strings", "It runs only on a fixed schedule"] },
      {domain:"Data Management", q: "In Contact Builder, what is an Attribute Group?", a: "A logical grouping of data extensions linked to Contacts for use in personalization and segmentation", options: ["A set of custom profile attributes", "A logical grouping of data extensions linked to Contacts for use in personalization and segmentation", "An audience segment definition", "A permission set for data access"] },
      {domain:"Account Configuration", q: "What is the recommended approach for multi-brand Marketing Cloud implementations?", a: "Create separate Business Units per brand under a parent account with shared or separate assets as needed", options: ["Create separate Marketing Cloud orgs per brand", "Create separate Business Units per brand under a parent account with shared or separate assets as needed", "Use folder structure within one Business Unit", "Use separate API keys per brand in one Business Unit"] },
      {domain:"Discovery and Architecture", q: "Which Marketing Cloud feature enables SMS communication with subscribers?", a: "MobileConnect", options: ["MobilePush", "MobileConnect", "Journey SMS Step", "Transactional Messaging API"] },
      {domain:"Automation and Journey Builder", q: "What type of journey exit criteria removes a contact who has completed a purchase?", a: "Goal-based exit with a data check on an order completion Data Extension", options: ["Engagement split based on email open", "Goal-based exit with a data check on an order completion Data Extension", "Wait step followed by manual removal", "Suppression list entry"] },
      {domain:"Analytics and Reporting", q: "Which report type in Marketing Cloud shows email engagement over time for a specific send?", a: "Email Send Summary Report in Email Studio", options: ["Journey Analytics Report", "Email Send Summary Report in Email Studio", "Data View Query Report", "Einstein Engagement Dashboard"] },
      {domain:"Discovery and Architecture", q: "What is Lock and Publish in Marketing Cloud?", a: "A feature that allows parent BU to lock template sections that child BUs cannot edit", options: ["A content approval workflow", "A feature that allows parent BU to lock template sections that child BUs cannot edit", "A send throttling mechanism", "A way to schedule content publication"] },
      {domain:"Automation and Journey Builder", q: "How does Advertising Studio integrate with Marketing Cloud?", a: "Syncs Marketing Cloud audiences to Facebook, Google, and LinkedIn for targeted advertising", options: ["Manages social media ad creative in Email Studio", "Syncs Marketing Cloud audiences to Facebook, Google, and LinkedIn for targeted advertising", "Creates lookalike audiences within Marketing Cloud only", "Provides ad performance data in Analytics Builder"] },
      {domain:"Automation and Journey Builder", q: "What is the primary purpose of the Filter Activity in Automation Studio?", a: "To refresh a filtered data extension based on defined criteria", options: ["To exclude unsubscribers from a send", "To refresh a filtered data extension based on defined criteria", "To filter suppression lists", "To apply content filters to email templates"] },
      {domain:"Account Configuration", q: "Which configuration ensures Marketing Cloud emails authenticate correctly with receiving mail servers?", a: "Sender Authentication Package (SAP) with SPF, DKIM, and DMARC records", options: ["Content filtering settings", "Sender Authentication Package (SAP) with SPF, DKIM, and DMARC records", "Reply Mail Management settings only", "IP allowlisting at the receiving server"] },
      {domain:"Discovery and Architecture", q: "What is the best way to discover requirements for a Marketing Cloud Engagement implementation?", a: "Conduct structured discovery workshops with stakeholders to map use cases, data sources, and channel strategy", options: ["Review the prospect's current email templates", "Conduct structured discovery workshops with stakeholders to map use cases, data sources, and channel strategy", "Install Marketing Cloud and explore the interface", "Request access to competitor marketing campaigns for comparison"] }
    ],
    tips:[
      "Know the Contact model and how Attribute Groups link Data Extensions in Contact Builder.",
      "Understand Business Units and Lock & Publish for multi-brand enterprise deployments.",
      "Marketing Cloud Connect sync behavior is heavily tested — know synchronized DEs and bidirectional sync.",
      "Master Journey Builder: goal vs exit criteria, decision splits, and transactional send journeys.",
      "Know deliverability concepts: SAP, IP warming, SPF/DKIM/DMARC.",
      "Data Views are critical for reporting — know which views exist and how to query them via SQL.",
      "Understand Einstein features: STO, Content Selection, and Engagement Scoring.",
      "Be prepared for discovery and architecture scenario questions, not just feature knowledge."
    ]
  },

  "Marketing Cloud Account Engagement Consultant": {
    questions: 60,
    time: 105,
    pass: 65,
    experience: "2+ years implementing Pardot/MCAE solutions",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-engagement-consultant---MCAE-Con-201",
    prerequisites: ["Marketing Cloud Account Engagement Specialist"],
    overview: "Validates advanced expertise in implementing Marketing Cloud Account Engagement (Pardot) for B2B marketing automation, including Salesforce integration, lead management, advanced automation, and multi-org scenarios.",
    domains: [
      { name: "Evaluation", pct: 20, color: "#00A1E0", desc: "Assess client marketing automation requirements and evaluate how MCAE (Pardot) meets their B2B marketing needs.", keyTopics: [
      {title:"Requirements Discovery",desc:"Gather B2B marketing objectives, lead lifecycle definitions, and reporting needs from stakeholders."},
      {title:"MCAE Capabilities Review",desc:"Map client requirements to MCAE features: forms, automation rules, engagement studio, and scoring."},
      {title:"Implementation Scoping",desc:"Define project scope including data migration, CRM integration setup, and phased feature enablement."}
    ] },
      { name: "Account Configuration", pct: 18, color: "#2ECC71", desc: "Configure MCAE account settings including CRM connector, user roles, domain setup, and email authentication.", keyTopics: [
      {title:"Salesforce Connector",desc:"Set up and verify the Salesforce-MCAE connector, including connector user and sync settings."},
      {title:"User Roles and SSO",desc:"Configure MCAE user roles (Admin, Marketing, Sales) and Salesforce SSO for unified login."},
      {title:"Email Authentication",desc:"Configure SPF, DKIM, and custom sending domains for deliverability and brand recognition."}
    ] },
      { name: "Lead Management", pct: 22, color: "#F39C12", desc: "Design and configure MCAE lead scoring, grading, and lifecycle management to qualify and route marketing leads.", keyTopics: [
      {title:"Scoring Models",desc:"Configure profile-based scoring rules that increment or decrement based on prospect behavior."},
      {title:"Grading",desc:"Build prospect profiles and grade criteria to score fit against ideal customer profiles."},
      {title:"Lead Assignment",desc:"Configure automation rules and Salesforce assignment rules for qualified lead routing to sales."}
    ] },
      { name: "Email Marketing", pct: 20, color: "#E74C3C", desc: "Build MCAE email templates, list emails, and Engagement Studio programs for B2B lead nurture.", keyTopics: [
      {title:"Email Templates",desc:"Create branded MCAE email templates using the drag-and-drop builder or HTML editor."},
      {title:"List Emails and Sending",desc:"Build list emails, test with sample lists, and schedule or send to segmented prospect lists."},
      {title:"Engagement Studio",desc:"Design Engagement Studio programs with listen, think, and act steps for automated nurture sequences."}
    ] },
      { name: "Reporting", pct: 20, color: "#1ABC9C", desc: "Use MCAE reporting tools to measure marketing program performance and pipeline contribution.", keyTopics: [
      {title:"Lifecycle Reports",desc:"Analyze the prospect lifecycle funnel from visitor to MQL, SQL, and closed-won opportunities."},
      {title:"Email Performance",desc:"Review open rate, click rate, and bounce metrics at the email, program, and campaign level."},
      {title:"B2B Marketing Analytics",desc:"Use B2B Marketing Analytics (Einstein Analytics for MCAE) for advanced attribution reporting."}
    ] }
    ],
    studyDays:[
      {tag:"pardot-consultant",focus:"Account Engagement (Pardot) Consultant: solution design, scoring, nurture programs, and Salesforce alignment",topics:[
        {text:"Account Engagement Consultant Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Pardot-Consultant-Exam-Guide"},
        {text:"Engagement Studio Advanced",url:"https://help.salesforce.com/s/articleView?id=sf.pardot_engagement_studio.htm"},
        {text:"Advanced Scoring and Grading",url:"https://help.salesforce.com/s/articleView?id=sf.pardot_scoring_grading.htm"},
        {text:"Pardot Business Units",url:"https://help.salesforce.com/s/articleView?id=sf.pardot_business_units.htm"},
        {text:"B2B Marketing Analytics",url:"https://help.salesforce.com/s/articleView?id=sf.b2bma_intro.htm"},
        {text:"Pardot Consultant Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-marketing-cloud-account-engagement-consultant-credential"}
      ]},
      {tag:"exam-prep-pardot-con",focus:"Account Engagement Consultant exam prep: lead nurturing, scoring, and Salesforce integration",topics:[
        {text:"Account Engagement Consultant Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Pardot-Consultant-Exam-Guide"},
        {text:"Pardot Consultant Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-marketing-cloud-account-engagement-consultant-credential"},
        {text:"Account Engagement Documentation",url:"https://help.salesforce.com/s/articleView?id=sf.pardot_overview.htm"},
        {text:"Pardot Specialist Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_pardot_specialist"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-pardot-con---Pardot-Con-201"},
        {text:"B2B Marketing Trailhead",url:"https://trailhead.salesforce.com/content/learn/trails/b2bmarketing"}
      ]}
    ],
    quiz:[
      {domain:"Lead Management", q: "What is the key difference between Pardot Score and Grade?", a: "Score measures engagement level; Grade measures how well a prospect fits your ideal customer profile", options: ["Score measures fit; Grade measures engagement", "Score measures engagement level; Grade measures how well a prospect fits your ideal customer profile", "Both measure the same thing on different scales", "Grade is set manually; Score is automatic only"] },
      {domain:"Evaluation", q: "Which MCAE feature creates personalized nurture paths with conditions and wait times?", a: "Engagement Studio", options: ["Automation Rules", "Engagement Studio", "Drip Programs", "Dynamic Lists"] },
      {domain:"Lead Management", q: "What happens when a Prospect is 'synced' to Salesforce in MCAE?", a: "A Lead or Contact record is created or matched in Salesforce and kept in sync via the connector", options: ["The Prospect record is deleted from Pardot", "A Lead or Contact record is created or matched in Salesforce and kept in sync via the connector", "A Campaign member is created only", "The sync creates an Opportunity automatically"] },
      {domain:"Lead Management", q: "Which list type automatically adds or removes prospects based on criteria?", a: "Dynamic List", options: ["Static List", "Dynamic List", "Suppression List", "CRM List"] },
      {domain:"Evaluation", q: "What is progressive profiling in MCAE?", a: "Forms that show new questions to returning visitors instead of asking fields already collected", options: ["A lead scoring method that increases with each form fill", "Forms that show new questions to returning visitors instead of asking fields already collected", "An AI feature that predicts prospect behavior", "A segmentation method based on firmographic data"] },
      {domain:"Evaluation", q: "What is Connected Campaigns in MCAE?", a: "A feature that aligns Pardot Campaigns with Salesforce Campaigns for unified reporting", options: ["A way to connect multiple Pardot accounts", "A feature that aligns Pardot Campaigns with Salesforce Campaigns for unified reporting", "A cross-BU marketing program", "An API connector for campaign automation"] },
      {domain:"Account Configuration", q: "Which MCAE feature can automatically reassign a prospect from marketing to sales when they reach a threshold?", a: "Automation Rule with an Assign action triggered by score/grade threshold", options: ["Engagement Studio assignment step", "Automation Rule with an Assign action triggered by score/grade threshold", "Drip program final action", "Salesforce assignment rules only"] },
      {domain:"Evaluation", q: "What is the purpose of a Form Handler in MCAE?", a: "To capture submission data from a third-party form and create or update a Pardot Prospect", options: ["To validate Pardot form submissions", "To capture submission data from a third-party form and create or update a Pardot Prospect", "To import CSV lists into Pardot", "To route form leads to different sales reps"] },
      {domain:"Lead Management", q: "How does Einstein Behavior Scoring differ from traditional Pardot Score?", a: "Einstein uses AI to predict a prospect's likelihood to convert based on behavioral patterns, not just activity count", options: ["Einstein scores are manually calibrated by admins", "Einstein uses AI to predict a prospect's likelihood to convert based on behavioral patterns, not just activity count", "Einstein Score replaces Grade entirely", "Einstein Behavior Scoring only applies to Account-Based leads"] },
      {domain:"Account Configuration", q: "What is the MCAE sync behavior when the same field has different values in Pardot and Salesforce?", a: "Salesforce typically wins, but sync behavior can be configured per field", options: ["Pardot always wins", "Salesforce typically wins, but sync behavior can be configured per field", "The most recently updated value wins", "Both values are merged into a combined field"] },
      {domain:"Account Configuration", q: "What is Campaign Influence in Salesforce as it relates to MCAE?", a: "Tracks which MCAE campaigns contributed to an Opportunity's creation or progression", options: ["An MCAE report on email campaign ROI only", "Tracks which MCAE campaigns contributed to an Opportunity's creation or progression", "A Salesforce Campaign record type for Pardot", "A multi-touch scoring model"] },
      {domain:"Lead Management", q: "In MCAE Business Units, what determines which BU a prospect belongs to?", a: "The Business Unit assigned at the time of the prospect's creation or by segmentation rules", options: ["The Salesforce org the prospect syncs to", "The Business Unit assigned at the time of the prospect's creation or by segmentation rules", "The form the prospect filled out", "The email template used for first contact"] },
      {domain:"Lead Management", q: "What is Activity Decay in Pardot Scoring?", a: "Automatically reduces a prospect's engagement score over time if they are inactive", options: ["Removes prospects who have not clicked an email in 90 days", "Automatically reduces a prospect's engagement score over time if they are inactive", "Permanently deletes inactive prospects", "Deactivates automation rules after a period"] },
      {domain:"Reporting", q: "Which MCAE product tier includes Einstein features and B2B Marketing Analytics?", a: "Advanced or Premium", options: ["Growth", "Plus", "Advanced or Premium", "All tiers include Einstein"] },
      {domain:"Evaluation", q: "How should a consultant handle duplicate prospects in MCAE?", a: "Use the CRM connector to match and merge duplicates aligned to Salesforce duplicate rules", options: ["Delete duplicates manually in Pardot", "Use the CRM connector to match and merge duplicates aligned to Salesforce duplicate rules", "Allow duplicates as each has a different email address", "Use a static list to suppress duplicates from sends"] },
      {domain:"Evaluation", q: "Which MCAE feature tracks web activity for known and unknown visitors?", a: "Pardot Tracking Pixel and Prospect Activity tracking via JavaScript tracking code", options: ["Marketing Cloud Web Analytics", "Pardot Tracking Pixel and Prospect Activity tracking via JavaScript tracking code", "Einstein Web Scoring", "Salesforce Activity History sync"] },
      {domain:"Email Marketing", q: "In Engagement Studio, what does a 'Condition' step do?", a: "Evaluates whether a prospect meets a criteria and routes them to different branches", options: ["Waits for a specified time before continuing", "Evaluates whether a prospect meets a criteria and routes them to different branches", "Sends an automated email", "Adds the prospect to a Salesforce Campaign"] },
      {domain:"Evaluation", q: "What is the recommended approach for aligning marketing and sales on lead handoff in MCAE?", a: "Define agreed scoring thresholds and use automation rules to assign and notify sales reps", options: ["Sales manually reviews all Pardot lists daily", "Define agreed scoring thresholds and use automation rules to assign and notify sales reps", "Use Marketing Cloud for lead handoff only", "Assign all prospects to sales after first email open"] },
      {domain:"Evaluation", q: "How is multi-touch attribution different from single-touch attribution in MCAE?", a: "Multi-touch distributes revenue credit across all influencing campaigns; single-touch credits only one", options: ["Multi-touch only tracks email; single-touch tracks all channels", "Multi-touch distributes revenue credit across all influencing campaigns; single-touch credits only one", "Single-touch uses Einstein AI; multi-touch is manual", "They are identical in MCAE"] },
      {domain:"Email Marketing", q: "Which MCAE report shows the ROI and pipeline influenced by marketing programs?", a: "B2B Marketing Analytics Pipeline Report", options: ["Email Performance Report", "B2B Marketing Analytics Pipeline Report", "Engagement Studio Summary", "Prospect Activity Export"] }
    ],
    tips:[
      "Know Score vs Grade — this is the most tested MCAE concept.",
      "Understand Engagement Studio conditions, actions, and wait steps end to end.",
      "Know the connector sync behavior: field-level sync direction and conflict resolution.",
      "Be clear on Connected Campaigns and how they enable unified reporting between Pardot and Salesforce.",
      "Understand Progressive Profiling and Form Handlers for B2B data capture.",
      "Know Einstein Behavior Scoring and how it improves on traditional activity-based scoring.",
      "B2B Marketing Analytics and Campaign Influence are frequently tested for the Consultant exam.",
      "Understand multi-BU architecture and when to use Business Units vs separate Pardot accounts."
    ]
  },

  "Revenue Cloud Consultant": {
    questions: 60,
    time: 105,
    pass: 65,
    experience: "2+ years implementing Salesforce Revenue Cloud (CPQ & Billing)",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-revenue-cloud-consultant---Rev-Con-201",
    prerequisites: ["Platform Administrator"],
    overview: "Validates expertise in implementing Salesforce Revenue Cloud, including CPQ (Configure Price Quote), Billing, subscription management, revenue recognition, and the full quote-to-cash process.",
    domains: [
      { name: "CPQ Configuration", pct: 25, color: "#00A1E0", desc: "Configure Salesforce CPQ product catalog, bundles, configuration rules, and approval workflows.", keyTopics: [
      {title:"Product Catalog",desc:"Set up products, price books, and pricing methods including list, cost, and percent-of-total."},
      {title:"Product Bundles",desc:"Configure bundle components, feature options, and configuration attributes for complex products."},
      {title:"Configuration Rules",desc:"Build product rules (summary, alert, filter, validation) to enforce configuration constraints."}
    ] },
      { name: "Pricing and Discount Management", pct: 20, color: "#2ECC71", desc: "Configure CPQ pricing methods, discount schedules, and approval thresholds for controlled discounting.", keyTopics: [
      {title:"Pricing Waterfall",desc:"Understand CPQ's pricing waterfall: list → customer → partner → additional → net price."},
      {title:"Discount Schedules",desc:"Set up volume and term-based discount schedules applied by tier to quote line items."},
      {title:"Approval Processes",desc:"Configure tiered approval rules that route quotes requiring deep discounts to management."}
    ] },
      { name: "Quote and Order Management", pct: 18, color: "#F39C12", desc: "Configure CPQ quoting, electronic signature, and order generation workflows for the quote-to-order process.", keyTopics: [
      {title:"Quote Configuration",desc:"Build quote templates with conditional sections, field mapping, and document generation."},
      {title:"Contracts and Amendments",desc:"Generate contracts from quotes and configure amendment and renewal quote generation."},
      {title:"Order Generation",desc:"Configure order creation from contracts with product and pricing pass-through logic."}
    ] },
      { name: "Salesforce Billing", pct: 22, color: "#E74C3C", desc: "Configure Salesforce Billing for invoice generation, payment processing, and revenue recognition.", keyTopics: [
      {title:"Billing Rules",desc:"Configure billing rules for billing type (advance, arrears) and billing cycle assignment."},
      {title:"Invoice Generation",desc:"Automate invoice creation from orders with appropriate invoicing run schedules."},
      {title:"Payment Processing",desc:"Set up payment gateways, payment methods, and dunning processes for collections."}
    ] },
      { name: "Implementation and Integration", pct: 15, color: "#1ABC9C", desc: "Apply Revenue Cloud implementation best practices including data migration, ERP integration, and go-live planning.", keyTopics: [
      {title:"Data Migration",desc:"Plan CPQ product catalog and pricing data migration from legacy quoting systems."},
      {title:"ERP Integration",desc:"Design order-to-cash integration between Revenue Cloud and ERP order management systems."},
      {title:"Go-Live Readiness",desc:"Execute pre-launch validation of CPQ rules, billing configuration, and UAT sign-off."}
    ] }
    ],
    studyDays:[
      {tag:"revenue-cloud-setup",focus:"Revenue Cloud solution design: CPQ, Billing, CLM, and Revenue Intelligence",topics:[
        {text:"Revenue Cloud Consultant Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Revenue-Cloud-Consultant-Exam-Guide"},
        {text:"Revenue Cloud Overview",url:"https://help.salesforce.com/s/articleView?id=sf.cpq_rev_cloud.htm"},
        {text:"CPQ Overview",url:"https://help.salesforce.com/s/articleView?id=sf.cpq_overview.htm"},
        {text:"Salesforce Billing",url:"https://help.salesforce.com/s/articleView?id=sf.blng_overview.htm"},
        {text:"Contract Lifecycle Management",url:"https://help.salesforce.com/s/articleView?id=sf.cpq_contracts_overview.htm"},
        {text:"Revenue Cloud Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-revenue-cloud-consultant-credential"}
      ]},
      {tag:"exam-prep-rev-cloud",focus:"Revenue Cloud Consultant exam prep: CPQ, Billing, and end-to-end revenue management",topics:[
        {text:"Revenue Cloud Consultant Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Revenue-Cloud-Consultant-Exam-Guide"},
        {text:"Revenue Cloud Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-revenue-cloud-consultant-credential"},
        {text:"CPQ Specialist Superbadge",url:"https://trailhead.salesforce.com/content/learn/superbadges/superbadge_cpq_specialist"},
        {text:"Salesforce Billing Documentation",url:"https://help.salesforce.com/s/articleView?id=sf.blng_overview.htm"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-revenue-cloud-consultant---Rev-Con-201"},
        {text:"Revenue Cloud Module",url:"https://trailhead.salesforce.com/content/learn/modules/salesforce-cpq-basics"}
      ]}
    ],
    quiz:[
      {domain:"CPQ Configuration", q: "What is the purpose of a Product Bundle in Salesforce CPQ?", a: "To group products together so they can be sold as a package, with options that can be selected or required", options: ["To create a discount group for volume pricing", "To group products together so they can be sold as a package, with options that can be selected or required", "To define subscription terms for a product", "To link products to a specific Price Book"] },
      {domain:"CPQ Configuration", q: "What is a Product Rule in Salesforce CPQ?", a: "A rule that enforces product configuration logic such as validation, selection, or alerting", options: ["A pricing formula applied to a product", "A rule that enforces product configuration logic such as validation, selection, or alerting", "An approval condition for high-discount products", "A field formula on the Quote Line Item"] },
      {domain:"Pricing and Discount Management", q: "What does a Discount Schedule define in CPQ?", a: "Volume-based discount tiers applied when a quote line meets quantity thresholds", options: ["Fixed discount percentages per customer segment", "Volume-based discount tiers applied when a quote line meets quantity thresholds", "Approval rules for discounting authority", "Contracted pricing for named accounts"] },
      {domain:"Pricing and Discount Management", q: "What is the difference between a Slab and Range discount schedule?", a: "Slab applies the tier discount to the entire quantity; Range applies each tier's discount only to the quantity within that range", options: ["Slab discounts apply per unit; Range discounts apply to total order value", "Slab applies the tier discount to the entire quantity; Range applies each tier's discount only to the quantity within that range", "Range discounts require manual approval; Slab do not", "They are functionally identical with different UI layouts"] },
      {domain:"CPQ Configuration", q: "Which CPQ feature allows sales reps to configure complex products with guided selling questions?", a: "Product Selection with Configuration Attributes and Product Rules", options: ["Quote Templates", "Product Selection with Configuration Attributes and Product Rules", "Price Rules with lookup tables", "Opportunity Product configuration page"] },
      {domain:"CPQ Configuration", q: "What is a Price Rule in Salesforce CPQ?", a: "An automated rule that updates field values (like Price) on Quote Lines based on defined conditions", options: ["A manually applied discount form", "An automated rule that updates field values (like Price) on Quote Lines based on defined conditions", "A product bundle configuration rule", "A rule that validates approved pricing tiers"] },
      {domain:"Quote and Order Management", q: "What happens when an Opportunity is converted to an Order in CPQ?", a: "The primary Quote's products become Order Products on a new Order record", options: ["The Opportunity is closed and all products are deleted", "The primary Quote's products become Order Products on a new Order record", "A new Opportunity is auto-created for the renewal", "CPQ sends an invoice automatically"] },
      {domain:"CPQ Configuration", q: "What is a Renewal Quote in Salesforce CPQ?", a: "An automatically generated quote for subscription renewal at contract end, pre-populated with existing products", options: ["A re-sent version of a previous quote", "An automatically generated quote for subscription renewal at contract end, pre-populated with existing products", "A quote created when a customer cancels a product", "A discounted repurchase offer generated by CPQ"] },
      {domain:"Salesforce Billing", q: "Which object in Salesforce Billing triggers the invoicing process?", a: "Billing Schedule", options: ["Order Product", "Billing Schedule", "Invoice Run", "Payment Method"] },
      {domain:"Salesforce Billing", q: "What is the purpose of a Credit Memo in Salesforce Billing?", a: "To reduce the amount owed on an invoice due to returns, adjustments, or errors", options: ["To issue a refund check to a customer", "To reduce the amount owed on an invoice due to returns, adjustments, or errors", "To adjust revenue recognition schedules", "To create a new invoice for partial payment"] },
      {domain:"CPQ Configuration", q: "How does Salesforce CPQ handle mid-term subscription amendments?", a: "By generating an Amendment Quote that modifies the active Contract with prorated pricing", options: ["By canceling the current subscription and creating a new one", "By generating an Amendment Quote that modifies the active Contract with prorated pricing", "By adjusting the original Quote directly", "By creating a Change Order on the Opportunity"] },
      {domain:"CPQ Configuration", q: "What is Block Pricing in Salesforce CPQ?", a: "A pricing method that charges a flat rate for a quantity range regardless of exact quantity", options: ["A per-unit discount based on purchase volume", "A pricing method that charges a flat rate for a quantity range regardless of exact quantity", "A contracted price locked for a specific account", "A cost-plus markup calculation"] },
      {domain:"CPQ Configuration", q: "What is the purpose of the Quote Template in Salesforce CPQ?", a: "To define the layout and content of the generated Quote PDF document", options: ["To set approval rules for discount levels", "To define the layout and content of the generated Quote PDF document", "To configure which products appear in the catalog", "To create a standard pricing sheet"] },
      {domain:"CPQ Configuration", q: "What is Contracted Pricing in Salesforce CPQ?", a: "Custom pricing negotiated for a specific account that overrides standard price book pricing", options: ["A discount schedule shared across all accounts", "Custom pricing negotiated for a specific account that overrides standard price book pricing", "A price locked after a quote is approved", "An automatic price adjustment for long-term contracts"] },
      {domain:"Salesforce Billing", q: "How does Revenue Recognition work in Salesforce Billing?", a: "Revenue Schedules distribute recognized revenue over time based on service delivery periods", options: ["Revenue is recognized immediately when an invoice is sent", "Revenue Schedules distribute recognized revenue over time based on service delivery periods", "Revenue is recognized when cash is received", "The ERP system manages all revenue recognition outside Salesforce"] },
      {domain:"Pricing and Discount Management", q: "Which CPQ approval type requires a manager to explicitly approve before a quote can be sent?", a: "Quote Approval with approval conditions set on discount thresholds or product types", options: ["Auto-approval for standard pricing", "Quote Approval with approval conditions set on discount thresholds or product types", "Product Rule alert only", "Price Rule warning action"] },
      {domain:"Salesforce Billing", q: "What is the role of the Tax Engine integration in Salesforce Billing?", a: "To calculate taxes on invoice line items using a third-party tax provider like Avalara or Vertex", options: ["To apply government discount rates to nonprofit quotes", "To calculate taxes on invoice line items using a third-party tax provider like Avalara or Vertex", "To file tax returns from Salesforce directly", "To validate billing addresses for tax jurisdiction"] },
      {domain:"CPQ Configuration", q: "What is a Configuration Attribute in Salesforce CPQ?", a: "A field on a bundle that drives product selection rules or pricing for the entire bundle", options: ["A custom field added to the Quote Line Item", "A field on a bundle that drives product selection rules or pricing for the entire bundle", "An attribute used to segment customers in CPQ pricing", "A metadata field for product categorization"] },
      {domain:"CPQ Configuration", q: "In CPQ, what triggers the Quote Line pricing calculation?", a: "The CPQ Calculator runs when a Quote is saved or when pricing-relevant fields change", options: ["Every time a user views a Quote", "The CPQ Calculator runs when a Quote is saved or when pricing-relevant fields change", "A nightly batch job refreshes all Quote prices", "Only when the Generate Document button is clicked"] },
      {domain:"CPQ Configuration", q: "What is the best approach for migrating a large product catalog into Salesforce CPQ?", a: "Use Data Loader with the CPQ-specific objects (Products, Price Rules, Option Constraints) in the correct dependency order", options: ["Import all products via the Salesforce UI manually", "Use Data Loader with the CPQ-specific objects (Products, Price Rules, Option Constraints) in the correct dependency order", "Copy products from an XLXS spreadsheet into CPQ templates", "Use Salesforce Migration Tool with all objects at once"] }
    ],
    tips:[
      "Know all four Product Rule types: Validation, Alert, Selection, Filter — and when each fires.",
      "Understand Slab vs Range discount schedules — this is a commonly confused exam topic.",
      "Know the Quote-to-Cash process end to end: Quote → Order → Contract → Invoice → Payment → Revenue Recognition.",
      "Be clear on when Amendment Quotes vs Renewal Quotes are generated.",
      "Understand Block Pricing, Cost Plus, Contracted Pricing, and when each applies.",
      "Know Salesforce Billing flows: Billing Schedules, Invoice Runs, Credit Memos, and Payments.",
      "CPQ Calculator behavior and when it runs is frequently tested.",
      "Understand Revenue Schedules and how they support revenue recognition compliance."
    ]
  },

  "Tableau Consultant": {
    questions: 60,
    time: 105,
    pass: 65,
    experience: "2+ years implementing Tableau for business intelligence",
    trailheadUrl: "https://trailhead.salesforce.com/credentials/tableauconsultant",
    prerequisites: [{name:"Tableau Desktop Specialist",required:true}],
    overview: "Validates expertise in consulting on Tableau deployments, including advanced analytics design, data source architecture, governance, Tableau Server/Cloud administration, and translating business requirements into Tableau solutions.",
    domains: [
      { name: "Data Connections and Preparation", pct: 22, color: "#00A1E0", desc: "Connect Tableau to data sources and prepare clean, analysis-ready datasets for business users.", keyTopics: [
      {title:"Data Source Types",desc:"Connect Tableau to live and extract sources: databases, flat files, cloud sources, and web connectors."},
      {title:"Data Prep with Prep Builder",desc:"Use Tableau Prep Builder to clean, reshape, and combine data before analysis."},
      {title:"Published Data Sources",desc:"Publish certified data sources to Tableau Server for governed, reusable access."}
    ] },
      { name: "Visual Analytics Design", pct: 25, color: "#2ECC71", desc: "Design clear, accurate visualizations that answer business questions and drive decision-making.", keyTopics: [
      {title:"Chart Selection",desc:"Select the right chart type (bar, line, scatter, map, etc.) for the analytical question at hand."},
      {title:"Dashboard Layout",desc:"Apply best practices for dashboard layout: white space, visual hierarchy, and focus areas."},
      {title:"Color and Formatting",desc:"Use color purposefully for encoding data and maintaining accessibility standards."}
    ] },
      { name: "Calculations and Analytics", pct: 20, color: "#F39C12", desc: "Write Tableau calculated fields, LOD expressions, and table calculations for advanced analytics.", keyTopics: [
      {title:"Calculated Fields",desc:"Write row-level calculated fields using Tableau's formula language for custom metrics."},
      {title:"LOD Expressions",desc:"Apply FIXED, INCLUDE, and EXCLUDE LOD expressions for complex aggregation scenarios."},
      {title:"Table Calculations",desc:"Use window_sum, window_avg, and running totals for period-over-period and ranking analysis."}
    ] },
      { name: "Tableau Server and Cloud", pct: 18, color: "#E74C3C", desc: "Publish, manage, and govern Tableau content on Tableau Server or Tableau Cloud for enterprise distribution.", keyTopics: [
      {title:"Publishing Workbooks",desc:"Publish workbooks with embedded or live data source connections to Tableau Server/Cloud."},
      {title:"Permissions and Groups",desc:"Configure project, workbook, and data source permissions using Tableau's permission model."},
      {title:"Subscriptions and Alerts",desc:"Set up scheduled subscriptions and data-driven alerts to deliver insights to stakeholders."}
    ] },
      { name: "Solution Design and Governance", pct: 15, color: "#1ABC9C", desc: "Design Tableau deployment architectures and governance frameworks for enterprise analytics at scale.", keyTopics: [
      {title:"Site Architecture",desc:"Design Tableau sites, projects, and content hierarchies for multi-team enterprise deployments."},
      {title:"Data Governance",desc:"Establish data source certification, naming standards, and stewardship workflows."},
      {title:"Performance and Scalability",desc:"Optimize Tableau Server node sizing, extract scheduling, and workbook performance."}
    ] }
    ],
    studyDays:[
      {tag:"tableau-consultant",focus:"Tableau Consultant: solution design, governance, data source strategy, and user adoption",topics:[
        {text:"Tableau Consultant Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Tableau-Consultant-Exam-Guide"},
        {text:"Tableau Blueprint",url:"https://help.tableau.com/current/blueprint/en-us/bp_overview.htm"},
        {text:"Tableau Server Permissions",url:"https://help.tableau.com/current/server/en-us/permission_section.htm"},
        {text:"Certified Data Sources",url:"https://help.tableau.com/current/server/en-us/datasource_certified.htm"},
        {text:"Tableau Catalog",url:"https://help.tableau.com/current/server/en-us/dm_catalog_overview.htm"},
        {text:"Tableau Consultant Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/tableau-consultant"}
      ]},
      {tag:"exam-prep-tableau-con",focus:"Tableau Consultant exam prep: governance, deployment, and solution design scenarios",topics:[
        {text:"Tableau Consultant Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-Tableau-Consultant-Exam-Guide"},
        {text:"Tableau Consultant Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/tableau-consultant"},
        {text:"Tableau Help Center",url:"https://help.tableau.com"},
        {text:"Tableau Blueprint",url:"https://help.tableau.com/current/blueprint/en-us/bp_overview.htm"},
        {text:"Exam Registration",url:"https://trailhead.salesforce.com/credentials/tableauconsultant"},
        {text:"Tableau Server Admin Documentation",url:"https://help.tableau.com/current/server/en-us/admin.htm"}
      ]}
    ],
    quiz:[
      {domain:"Data Connections and Preparation", q: "What is the difference between a Live connection and an Extract in Tableau?", a: "Live queries the source directly in real time; Extract stores a snapshot of data in a .hyper file", options: ["Live is faster; Extract is always slower", "Live queries the source directly in real time; Extract stores a snapshot of data in a .hyper file", "Extracts support more chart types than Live", "Live connections require Tableau Server"] },
      {domain:"Calculations and Analytics", q: "What is an LOD FIXED expression used for in Tableau?", a: "To compute a value at a specified dimension level independent of the view's level of detail", options: ["To filter out specific rows from a calculation", "To compute a value at a specified dimension level independent of the view's level of detail", "To create running totals across a time axis", "To aggregate values only within the view's context"] },
      {domain:"Data Connections and Preparation", q: "Which Tableau feature connects multiple worksheets so that selecting data in one sheet filters others?", a: "Dashboard Filter Action", options: ["Worksheet Highlight", "Dashboard Filter Action", "Context Filter", "Parameter Action"] },
      {domain:"Calculations and Analytics", q: "What does a Table Calculation do in Tableau?", a: "Computes values based on the data as displayed in the view (after aggregation), not the underlying source", options: ["Joins multiple data tables together", "Computes values based on the data as displayed in the view (after aggregation), not the underlying source", "Applies a filter to multiple sheets simultaneously", "Calculates values from the raw data source before aggregation"] },
      {domain:"Data Connections and Preparation", q: "When should you use Tableau Relationships instead of Joins?", a: "When combining tables that may have different granularities to avoid duplication of measures", options: ["When you need to perform a full outer join", "When combining tables that may have different granularities to avoid duplication of measures", "When connecting to SQL databases only", "When you need to use a calculated field across tables"] },
      {domain:"Data Connections and Preparation", q: "What is a Context Filter in Tableau?", a: "A filter applied first before other filters, improving performance and enabling dependent filter cascades", options: ["A filter that applies only to the current worksheet context", "A filter applied first before other filters, improving performance and enabling dependent filter cascades", "A global filter shared across all dashboards", "A filter that limits access by user role"] },
      {domain:"Data Connections and Preparation", q: "What is Tableau Prep used for?", a: "Data preparation: cleaning, transforming, and shaping data before analysis in Tableau Desktop", options: ["Designing Tableau Server user permissions", "Data preparation: cleaning, transforming, and shaping data before analysis in Tableau Desktop", "Creating calculated fields in published data sources", "Scheduling Tableau extract refreshes"] },
      {domain:"Tableau Server and Cloud", q: "Which Tableau permission model controls who can view or publish to a specific Project?", a: "Project-level permissions set on the Project in Tableau Server/Cloud", options: ["User Filters applied to all workbooks", "Project-level permissions set on the Project in Tableau Server/Cloud", "Tableau Desktop license type", "Row-Level Security in the database"] },
      {domain:"Data Connections and Preparation", q: "What is the purpose of a Published Data Source in Tableau?", a: "A centralized, reusable data connection available to multiple workbooks in Tableau Server/Cloud", options: ["A data source stored only on the local machine", "A centralized, reusable data connection available to multiple workbooks in Tableau Server/Cloud", "A file-based data source in .csv format", "A data source created by Tableau Prep flows only"] },
      {domain:"Calculations and Analytics", q: "What is User Filter (Row-Level Security) in Tableau?", a: "A filter that limits the data visible to each user based on their Tableau Server username", options: ["A filter that a user applies manually in a dashboard", "A filter that limits the data visible to each user based on their Tableau Server username", "A filter built into the database", "A global filter applied by the admin for all users"] },
      {domain:"Data Connections and Preparation", q: "Which Tableau chart type is best for showing the distribution of a single continuous measure?", a: "Histogram", options: ["Box-and-Whisker Plot", "Histogram", "Scatter Plot", "Bullet Chart"] },
      {domain:"Data Connections and Preparation", q: "What does INCLUDE do in an LOD expression?", a: "Adds dimensions to the aggregation that are not in the view", options: ["Excludes specific dimensions from the calculation", "Adds dimensions to the aggregation that are not in the view", "Filters rows before aggregation", "Limits the calculation to the view's context"] },
      {domain:"Data Connections and Preparation", q: "Which Tableau feature allows users to dynamically change a parameter value directly on a dashboard?", a: "Parameter Action", options: ["Dashboard Filter Action", "Parameter Action", "Highlight Action", "URL Action"] },
      {domain:"Data Connections and Preparation", q: "What is Tableau Bridge used for?", a: "To allow Tableau Cloud to connect to on-premises or private network data sources", options: ["To bridge Tableau Desktop and Server product licenses", "To allow Tableau Cloud to connect to on-premises or private network data sources", "To connect two Tableau Server deployments", "To migrate workbooks from Tableau Server to Tableau Cloud"] },
      {domain:"Data Connections and Preparation", q: "Which approach is best for designing a Tableau dashboard for executives?", a: "Focus on high-level KPIs with simple, clean charts and minimal interactivity", options: ["Include all available data dimensions on one dashboard", "Focus on high-level KPIs with simple, clean charts and minimal interactivity", "Use advanced table calculations to show raw data", "Provide drill-down filters for every metric"] },
      {domain:"Calculations and Analytics", q: "What does the EXCLUDE LOD expression do in Tableau?", a: "Removes specified dimensions from the aggregation granularity while keeping view context", options: ["Excludes null values from a calculation", "Removes specified dimensions from the aggregation granularity while keeping view context", "Filters rows that don't match a condition", "Limits the calculation to FIXED dimensions only"] },
      {domain:"Calculations and Analytics", q: "What is the Tableau Analytics Pane used for?", a: "Adding reference lines, trend lines, bands, and forecasting to a chart", options: ["Configuring chart color schemes", "Adding reference lines, trend lines, bands, and forecasting to a chart", "Publishing data sources to Tableau Server", "Selecting which fields appear in the view"] },
      {domain:"Data Connections and Preparation", q: "Which data blending method should be used when a primary and secondary data source have different granularities?", a: "Use Relationships instead of data blending where possible, or use LOD expressions to align granularity", options: ["Use a full outer join", "Use Relationships instead of data blending where possible, or use LOD expressions to align granularity", "Always use data blending for cross-source analysis", "Combine data sources in Tableau Prep before connecting"] },
      {domain:"Data Connections and Preparation", q: "What is a Small Multiples (Trellis) layout in Tableau?", a: "Repeating the same chart for different dimension values, arranged in a grid for easy comparison", options: ["A chart with multiple overlaid trend lines", "Repeating the same chart for different dimension values, arranged in a grid for easy comparison", "A dashboard with synchronized axes across multiple sheets", "A map with multiple geographic layers"] },
      {domain:"Solution Design and Governance", q: "How is performance optimization typically achieved for slow Tableau dashboards?", a: "Use data extracts, reduce marks in the view, use context filters, and minimize LOD calculations", options: ["Add more filters to limit data", "Use data extracts, reduce marks in the view, use context filters, and minimize LOD calculations", "Increase the Tableau Server hardware", "Switch from Live to Direct Query connections"] }
    ],
    tips:[
      "LOD expressions (FIXED, INCLUDE, EXCLUDE) are the most tested advanced topic — practice all three.",
      "Know the difference between Table Calculations and LOD expressions and when each is appropriate.",
      "Understand Relationships vs Joins and when to use each to avoid row duplication.",
      "Dashboard actions (Filter, Highlight, URL, Parameter) are heavily tested — know all four types.",
      "Know Tableau Server/Cloud permission hierarchy: Site > Project > Workbook > View.",
      "Understand Row-Level Security (User Filters) and how they're implemented.",
      "Know when to use a Live connection vs Extract for performance and refresh requirements.",
      "Be prepared for solution design questions: how to gather requirements and present findings."
    ]
  },

  "Tableau Data Analyst": {
    questions: 45,
    time: 60,
    pass: 70,
    experience: "6+ months using Tableau for data analysis",
    trailheadUrl: "https://trailhead.salesforce.com/credentials/tableaudataanalyst",
    prerequisites: [],
    overview: "Validates foundational to intermediate skills in Tableau for data analysts, including connecting to data, building visualizations, creating dashboards, and communicating insights through data storytelling.",
    domains: [
      { name: "Connect and Transform Data", pct: 22, color: "#00A1E0", desc: "Connect Tableau Desktop to data sources and transform raw data into analysis-ready structures.", keyTopics: [
      {title:"Connecting to Data",desc:"Connect to Excel, databases, cloud sources, and published data sources from Tableau Desktop."},
      {title:"Data Interpreter",desc:"Use Tableau's data interpreter to clean messy spreadsheet data for analysis."},
      {title:"Joins and Unions",desc:"Build joins, unions, and cross-database joins to combine related data in Tableau."}
    ] },
      { name: "Explore and Analyze Data", pct: 28, color: "#2ECC71", desc: "Perform exploratory data analysis using Tableau's drag-and-drop interface and analytical features.", keyTopics: [
      {title:"Building Views",desc:"Drag dimensions and measures to rows, columns, and marks to create initial data views."},
      {title:"Filters and Context",desc:"Apply dimension, measure, quick, and context filters to focus analytical views."},
      {title:"Analytics Pane",desc:"Use the Analytics pane to add trend lines, reference lines, forecasts, and cluster analysis."}
    ] },
      { name: "Create Charts and Dashboards", pct: 28, color: "#F39C12", desc: "Build effective charts, stories, and dashboards that communicate insights clearly to stakeholders.", keyTopics: [
      {title:"Chart Types",desc:"Create bar, line, scatter, map, pie, and Gantt charts appropriate to each analytical question."},
      {title:"Dashboard Actions",desc:"Add filter, highlight, and URL actions to create interactive dashboard experiences."},
      {title:"Story Points",desc:"Build Tableau Stories that guide viewers through a data narrative with annotated points."}
    ] },
      { name: "Share and Publish", pct: 22, color: "#E74C3C", desc: "Share Tableau content through publishing, exporting, and embedding for broad organizational reach.", keyTopics: [
      {title:"Publishing to Server/Cloud",desc:"Publish workbooks and data sources with appropriate permissions to Tableau Server or Cloud."},
      {title:"Exporting and Embedding",desc:"Export views as images, PDFs, or data and embed Tableau views in portals or applications."},
      {title:"Subscriptions",desc:"Set up email subscriptions so stakeholders receive regular dashboard snapshots in their inbox."}
    ] }
    ],
    studyDays:[
      {tag:"connect-and-prep", focus:"Connecting to data sources and basic data preparation in Tableau", topics:[
        {text:"Connect to Data Sources",url:"https://help.tableau.com/current/pro/desktop/en-us/data.htm"},
        {text:"Data Prep with Tableau Prep Builder",url:"https://help.tableau.com/current/prep/en-us/prep_get_started.htm"},
        {text:"Joins and Relationships",url:"https://help.tableau.com/current/pro/desktop/en-us/relate_tables.htm"},
        {text:"Data Source Filters",url:"https://help.tableau.com/current/pro/desktop/en-us/filtering.htm"},
        {text:"Live vs Extract Connections",url:"https://help.tableau.com/current/pro/desktop/en-us/extracting_data.htm"},
        {text:"Data Analyst Cert Prep",url:"https://trailhead.salesforce.com/credentials/tableaudataanalyst"}
      ]},
      {tag:"visualizations", focus:"Building charts, maps, and calculated fields in Tableau Desktop", topics:[
        {text:"Build Basic Charts",url:"https://help.tableau.com/current/pro/desktop/en-us/buildmanual_ex1basic.htm"},
        {text:"Maps and Geographic Analysis",url:"https://help.tableau.com/current/pro/desktop/en-us/buildexamples_maps.htm"},
        {text:"Calculated Fields Reference",url:"https://help.tableau.com/current/pro/desktop/en-us/calculations_calculatedfields_create.htm"},
        {text:"Table Calculations",url:"https://help.tableau.com/current/pro/desktop/en-us/calculations_tablecalculations.htm"},
        {text:"Level of Detail Expressions",url:"https://help.tableau.com/current/pro/desktop/en-us/calculations_calculatedfields_lod_overview.htm"},
        {text:"Show Me Chart Types",url:"https://help.tableau.com/current/pro/desktop/en-us/buildauto_showme.htm"}
      ]},
    ],
    quiz:[
      {domain:"Explore and Analyze Data", q: "In Tableau, what is the difference between a Dimension and a Measure?", a: "Dimensions are categorical fields used for grouping; Measures are quantitative fields used for aggregation", options: ["Dimensions are numeric; Measures are text-based", "Dimensions are categorical fields used for grouping; Measures are quantitative fields used for aggregation", "Dimensions are always date fields; Measures are always sums", "There is no functional difference in Tableau"] },
      {domain:"Connect and Transform Data", q: "What does a 'Live' data connection mean in Tableau?", a: "Tableau queries the data source directly each time the view is loaded", options: ["The data is stored locally in Tableau Desktop", "Tableau queries the data source directly each time the view is loaded", "A live connection only works with cloud databases", "The connection refreshes once per day automatically"] },
      {domain:"Create Charts and Dashboards", q: "Which Tableau chart type is best for comparing values across categories?", a: "Bar chart", options: ["Line chart", "Bar chart", "Scatter plot", "Pie chart"] },
      {domain:"Create Charts and Dashboards", q: "What does a Filter Action in a Tableau dashboard do?", a: "Selecting a mark in one sheet filters the data shown in other sheets on the dashboard", options: ["Applies a global filter to the entire workbook", "Selecting a mark in one sheet filters the data shown in other sheets on the dashboard", "Removes rows from the underlying data source", "Resets all filters to their default values"] },
      {domain:"Connect and Transform Data", q: "What is the purpose of the 'Show Me' panel in Tableau Desktop?", a: "To suggest appropriate chart types based on the selected fields", options: ["To show all available data sources", "To suggest appropriate chart types based on the selected fields", "To display calculated field formulas", "To manage Tableau Server connections"] },
      {domain:"Create Charts and Dashboards", q: "Which Tableau feature allows you to display a single dashboard optimized for different screen sizes?", a: "Device Designer (Device Preview)", options: ["Responsive Layout Container", "Device Designer (Device Preview)", "Dashboard Zoom Control", "Screen Size Filter"] },
      {domain:"Connect and Transform Data", q: "What is a calculated field in Tableau?", a: "A new field created from existing data using formulas and functions", options: ["A field from the original data source", "A new field created from existing data using formulas and functions", "A summary field added by Tableau automatically", "A field visible only in the tooltip"] },
      {domain:"Connect and Transform Data", q: "How do you create a Running Total in Tableau?", a: "Using a Table Calculation: Running Total on the Sum measure", options: ["Using DATEDIFF function", "Using a Table Calculation: Running Total on the Sum measure", "By sorting the data in ascending order", "Using a FIXED LOD expression"] },
      {domain:"Connect and Transform Data", q: "Which Tableau feature is used to find insights like outliers and trends automatically?", a: "Explain Data (Ask Data / Data Stories)", options: ["Analytics Pane manual trend lines", "Explain Data (Ask Data / Data Stories)", "Table Calculation outlier detection", "Custom calculated field formulas"] },
      {domain:"Connect and Transform Data", q: "What does 'Discrete' mean for a field in Tableau?", a: "The field represents distinct, finite values and creates headers in the view", options: ["The field is a continuous number range", "The field represents distinct, finite values and creates headers in the view", "The field is always a date", "The field is hidden from the view"] },
      {domain:"Connect and Transform Data", q: "Which Tableau feature lets you ask questions about your data in natural language?", a: "Ask Data (Natural Language Queries)", options: ["Tableau Prep", "Ask Data (Natural Language Queries)", "Table Calculation Assistant", "Einstein Data Discovery"] },
      {domain:"Explore and Analyze Data", q: "What is the purpose of a Reference Line in Tableau?", a: "To add a constant or computed line to a chart for comparison (e.g., average or target)", options: ["To draw a trend forecast line", "To add a constant or computed line to a chart for comparison (e.g., average or target)", "To highlight marks above a threshold", "To add an annotation to a specific data point"] },
      {domain:"Create Charts and Dashboards", q: "How are Story Points used in Tableau?", a: "To guide viewers through a sequence of insights using captioned snapshots of views", options: ["To add footnotes to a published workbook", "To guide viewers through a sequence of insights using captioned snapshots of views", "To create multiple versions of a dashboard", "To store different filter configurations"] },
      {domain:"Connect and Transform Data", q: "Which calculation function returns the number of days between two dates in Tableau?", a: "DATEDIFF('day', [Start Date], [End Date])", options: ["DATEPART([Start Date], [End Date])", "DATEDIFF('day', [Start Date], [End Date])", "DATE([End Date] - [Start Date])", "TIMEDIFF([Start Date], [End Date])"] },
      {domain:"Share and Publish", q: "What is the easiest way to share a Tableau workbook publicly for free?", a: "Publish to Tableau Public", options: ["Email the .twbx file", "Publish to Tableau Public", "Host the workbook on a personal website", "Share via Tableau Desktop only"] },
      {domain:"Create Charts and Dashboards", q: "What is a Highlight Action in Tableau?", a: "Selecting a mark in one sheet highlights related marks in other sheets without filtering them", options: ["Draws a box around selected data points", "Selecting a mark in one sheet highlights related marks in other sheets without filtering them", "Changes the color of all marks on the dashboard", "Filters out unhighlighted data permanently"] },
      {domain:"Connect and Transform Data", q: "How do you create a Group in Tableau?", a: "Select marks or header values, right-click, and choose Group", options: ["Use the Edit Filter dialog", "Select marks or header values, right-click, and choose Group", "Create a calculated field with IF/THEN logic", "Use the Set definition dialog"] },
      {domain:"Connect and Transform Data", q: "What does 'Continuous' mean for a date field in Tableau?", a: "The date field creates an axis with a continuous range of values", options: ["The date field can only be a year value", "The date field creates an axis with a continuous range of values", "The date is always displayed as a month", "Continuous dates cannot be used in filters"] },
      {domain:"Share and Publish", q: "Which permission is required to publish a workbook to Tableau Server?", a: "Publish permission on the Project in Tableau Server", options: ["Creator license on Tableau Desktop", "Publish permission on the Project in Tableau Server", "System Administrator role on the Server", "Viewer permission with Edit access"] },
      {domain:"Connect and Transform Data", q: "What is the primary benefit of using an Extract instead of a Live connection for large datasets?", a: "Faster query performance due to in-memory processing of the .hyper file", options: ["Enables more chart types than Live", "Faster query performance due to in-memory processing of the .hyper file", "Automatically updates data every hour", "Allows collaboration with multiple users simultaneously"] }
    ],
    tips:[
      "Know Dimension vs Measure and Discrete vs Continuous — these are foundational concepts tested early.",
      "Understand all four Dashboard Action types: Filter, Highlight, URL, and Parameter.",
      "Practice Table Calculations: Running Total, Percent of Total, and Rank are common exam questions.",
      "Know DATEDIFF, DATEPART, and DATENAME for date calculation questions.",
      "Understand the purpose of Show Me, the Analytics Pane, and the Marks card.",
      "Know the difference between a Group and a Set in Tableau.",
      "Be familiar with Tableau Public for sharing and how to publish to Tableau Server.",
      "Review Story Points and how they are used for data storytelling presentations."
    ]
  }
});
