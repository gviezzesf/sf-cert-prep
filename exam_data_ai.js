Object.assign(EXAM_DATA, {
  "Agentforce Specialist": {
    questions: 60,
    time: 105,
    pass: "65%",
    experience: "6 months",
    trailheadUrl: "https://trailheadacademy.salesforce.com/certificate/exam-agentforce-specialist---AI-201",
    prerequisites: [],
    overview: "The Agentforce Specialist certification validates your ability to build, configure, and deploy autonomous AI agents on the Salesforce platform using Agentforce. The exam covers Agent Builder, Prompt Builder, Einstein Trust Layer, Data Cloud grounding, agent topics and actions, and the practical deployment of AI agents across Sales, Service, and HR use cases.",
    domains: [
      {name:"Agentforce Foundations",pct:32,color:"#00A1E0",desc:"Understand the Agentforce platform, its components, and how autonomous agents differ from traditional automation.",keyTopics:[
        {title:"What Is Agentforce",desc:"Agentforce enables autonomous AI agents that can reason, plan, and act on behalf of users — unlike flows or bots, agents handle multi-step tasks without explicit scripting."},
        {title:"Agent Types",desc:"Salesforce ships standard agents (Sales Agent, Service Agent, SDR Agent) and supports custom agents built from scratch in Agent Builder."},
        {title:"Agent Lifecycle",desc:"Agents follow a plan-act-observe loop — they interpret a user goal, select actions, execute them, and adjust based on results until the goal is met."},
        {title:"Einstein Platform Overview",desc:"Agentforce is built on the Einstein 1 Platform — it leverages Data Cloud for context, Prompt Builder for instructions, and the Einstein Trust Layer for safety."},
        {title:"Agent vs Copilot vs Bot",desc:"Understand the distinction: Copilot assists users reactively, bots follow scripted flows, agents operate autonomously toward goals using reasoning."}
      ]},
      {name:"Agent Builder & Configuration",pct:25,color:"#2ECC71",desc:"Configure agents using Agent Builder — define topics, actions, and instructions that govern agent behavior.",keyTopics:[
        {title:"Topics and Actions",desc:"Topics define what an agent can help with; actions are the specific tasks (Apex, Flow, prompt template) the agent can invoke to fulfill a topic."},
        {title:"Agent Instructions",desc:"Natural-language instructions guide agent behavior within a topic — they set guardrails, tone, and decision-making rules without code."},
        {title:"Standard vs Custom Actions",desc:"Salesforce provides out-of-the-box actions (query records, send email, create case); custom actions invoke Apex classes or autolaunched Flows."},
        {title:"Testing Agents in Builder",desc:"Agent Builder includes a conversation panel to test agent responses in real time — use it to validate topic routing and action execution before deployment."},
        {title:"Deploying and Activating Agents",desc:"Agents must be activated and assigned to channels (Experience Cloud, Slack, telephony) before users can interact with them."}
      ]},
      {name:"Prompt Builder & Grounding",pct:20,color:"#F39C12",desc:"Create and manage prompt templates that ground agents with relevant business data and context.",keyTopics:[
        {title:"Prompt Templates",desc:"Prompt templates are reusable instruction sets that merge Salesforce data (records, fields) into LLM prompts using merge fields and Apex."},
        {title:"Template Types",desc:"Field Generation, Record Summary, and Sales Email templates each serve specific use cases for enriching records or generating structured content."},
        {title:"Data Grounding",desc:"Ground prompts with relevant records by referencing related objects — this gives the LLM accurate, org-specific context instead of relying on generic training data."},
        {title:"Data Cloud Grounding",desc:"Use Data Cloud unified profiles and segments to ground agents with real-time customer data — enables personalized, context-aware responses at scale."},
        {title:"Prompt Testing and Feedback",desc:"Test prompt outputs directly in Prompt Builder and iterate on instructions — use the feedback mechanism to improve template quality over time."}
      ]},
      {name:"Einstein Trust Layer",pct:13,color:"#E74C3C",desc:"Understand Salesforce's responsible AI framework that governs data privacy, toxicity filtering, and audit logging for AI interactions.",keyTopics:[
        {title:"Zero Data Retention",desc:"Salesforce does not use customer data to train LLM models — prompts sent to external models are masked and data is not retained by the LLM provider."},
        {title:"Data Masking",desc:"The Trust Layer automatically masks sensitive fields (SSN, credit card numbers) before sending data to the LLM, replacing them with tokens."},
        {title:"Toxicity Filtering",desc:"Responses from the LLM are screened for harmful, toxic, or off-topic content before being surfaced to users — the filter can be configured by admins."},
        {title:"Audit Trail",desc:"Every AI interaction is logged in the Einstein Trust Layer Audit Trail — admins can review prompts sent and responses received for compliance purposes."},
        {title:"Model Selection and Governance",desc:"Admins control which LLM models are available to agents and can restrict model usage to approved providers in Setup."}
      ]},
      {name:"Use Cases & Deployment",pct:10,color:"#1ABC9C",desc:"Apply Agentforce to real-world business scenarios and understand deployment considerations across channels.",keyTopics:[
        {title:"Service Agent Use Cases",desc:"Automate case deflection, answer FAQ, update case fields, and escalate to human agents when needed — the most common Agentforce deployment pattern."},
        {title:"Sales Agent Use Cases",desc:"Auto-research accounts, draft follow-up emails, update opportunity fields, and surface next best actions for sales reps."},
        {title:"Channel Deployment",desc:"Agents can be deployed to Experience Cloud sites, Salesforce mobile, Slack, and third-party telephony/chat platforms via the Messaging Channel."},
        {title:"Human Handoff",desc:"Configure escalation conditions so agents seamlessly transfer conversations to live human agents when they reach their capability boundary."},
        {title:"Measuring Agent Performance",desc:"Track agent containment rate, deflection rate, customer satisfaction (CSAT), and topic accuracy to evaluate and improve deployed agents."}
      ]}
    ],
    studyDays:[
      {tag:"agentforce-overview",focus:"Agentforce fundamentals: agents, topics, actions, and the Einstein Trust Layer",topics:[
        {text:"Agentforce Overview",url:"https://help.salesforce.com/s/articleView?id=sf.agentforce_overview.htm"},
        {text:"Agentforce Specialist Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-AI-Associate-Exam-Guide"},
        {text:"Einstein Trust Layer",url:"https://help.salesforce.com/s/articleView?id=sf.einstein_trust_layer.htm"},
        {text:"Agentforce Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/agentforce-specialist"},
        {text:"Agentforce Topics and Actions",url:"https://help.salesforce.com/s/articleView?id=sf.agentforce_topics.htm"},
        {text:"Agentforce for Service Cloud",url:"https://help.salesforce.com/s/articleView?id=sf.agentforce_service_cloud.htm"}
      ]},
      {tag:"agent-building",focus:"Build and configure Agentforce agents: system prompts, topics, actions, and testing",topics:[
        {text:"Build an Agentforce Agent",url:"https://help.salesforce.com/s/articleView?id=sf.agentforce_build_agent.htm"},
        {text:"Agent Topics Configuration",url:"https://help.salesforce.com/s/articleView?id=sf.agentforce_topics.htm"},
        {text:"Agent Actions: Flow, Apex, and APIs",url:"https://help.salesforce.com/s/articleView?id=sf.agentforce_actions.htm"},
        {text:"Agent Testing and Preview",url:"https://help.salesforce.com/s/articleView?id=sf.agentforce_test.htm"},
        {text:"Agentforce Prompt Templates",url:"https://help.salesforce.com/s/articleView?id=sf.prompt_builder_overview.htm"},
        {text:"Agentforce Guardrails",url:"https://help.salesforce.com/s/articleView?id=sf.einstein_trust_layer.htm"}
      ]},
      {tag:"einstein-ai",focus:"Einstein AI features: Einstein Copilot, Prompt Builder, Generative AI in flows",topics:[
        {text:"Einstein Copilot Overview",url:"https://help.salesforce.com/s/articleView?id=sf.einstein_copilot.htm"},
        {text:"Prompt Builder",url:"https://help.salesforce.com/s/articleView?id=sf.prompt_builder_overview.htm"},
        {text:"Einstein Generative AI in Flow",url:"https://help.salesforce.com/s/articleView?id=sf.flow_ref_elements_actions_einstein.htm"},
        {text:"Einstein Trust Layer",url:"https://help.salesforce.com/s/articleView?id=sf.einstein_trust_layer.htm"},
        {text:"Data Grounding for AI",url:"https://help.salesforce.com/s/articleView?id=sf.agentforce_data_grounding.htm"},
        {text:"Einstein AI Ethics and Bias",url:"https://help.salesforce.com/s/articleView?id=sf.einstein_trust_layer.htm"}
      ]},
      {tag:"exam-prep-agentforce",focus:"Agentforce Specialist exam prep: agents, actions, Einstein Trust Layer, and use cases",topics:[
        {text:"Agentforce Specialist Exam Guide",url:"https://trailhead.salesforce.com/help?article=Salesforce-Certified-AI-Associate-Exam-Guide"},
        {text:"Agentforce Trailmix",url:"https://trailhead.salesforce.com/users/strailhead/trailmixes/agentforce-specialist"},
        {text:"Agentforce Documentation",url:"https://help.salesforce.com/s/articleView?id=sf.agentforce_overview.htm"},
        {text:"Prompt Builder Documentation",url:"https://help.salesforce.com/s/articleView?id=sf.prompt_builder_overview.htm"},
        {text:"Exam Registration",url:"https://trailheadacademy.salesforce.com/certificate/exam-agentforce-spec---AI-Spec-201"},
        {text:"Trailhead: Agentforce Trail",url:"https://trailhead.salesforce.com/content/learn/trails/build-agentforce"}
      ]}
    ],
    quiz:[
      {domain:"Agentforce Foundations",q:"What is the key difference between an Agentforce agent and a traditional Salesforce bot?",opts:["Agents are faster","Agents reason and act autonomously toward a goal without explicit scripting","Bots require code and agents do not","Agents only work in Service Cloud"],correct:1,explanation:"Agentforce agents use LLM reasoning to plan and execute multi-step tasks autonomously, while bots follow predefined scripted flows."},
      {domain:"Agentforce Foundations",q:"Which Salesforce platform component provides real-time customer data to ground agent responses?",opts:["Flow Builder","Data Cloud","Apex","Chatter"],correct:1,explanation:"Data Cloud provides unified customer profiles and segments that agents can use to personalize and ground their responses with relevant context."},
      {domain:"Agentforce Foundations",q:"What is the purpose of a 'topic' in Agent Builder?",opts:["A label for organizing prompt templates","A defined area of expertise that determines when an agent can help and what actions it can invoke","A type of Flow used by agents","A record type for tracking agent conversations"],correct:1,explanation:"Topics define what an agent is capable of helping with — they route user requests to the right set of instructions and actions."},
      {domain:"Agent Builder & Configuration",q:"Which of the following can be used as a custom agent action?",opts:["Reports","An autolaunched Flow or an Apex class","A page layout","A permission set"],correct:1,explanation:"Custom agent actions can invoke autolaunched Flows or Apex classes, allowing agents to execute business logic and interact with records."},
      {domain:"Agent Builder & Configuration",q:"Where are agent instructions written in Agent Builder?",opts:["In a custom metadata type","In an Apex class constructor","As natural-language text within a topic definition","In a SOQL query"],correct:2,explanation:"Instructions are natural-language text written inside a topic that guide the agent's behavior, tone, and decision-making for that topic."},
      {domain:"Agent Builder & Configuration",q:"Which step must be completed before users can interact with an Agentforce agent?",opts:["The agent must be published to AppExchange","The agent must be activated and assigned to a channel","A custom LWC must be created","The org must have Einstein Analytics enabled"],correct:1,explanation:"Agents must be activated in Agent Builder and deployed to a specific channel (such as Experience Cloud or Slack) before end users can interact with them."},
      {domain:"Agent Builder & Configuration",q:"What happens when an agent cannot fulfill a user request within its configured topics?",opts:["The agent throws an error","The agent escalates to a human agent or informs the user it cannot help","The agent creates a Salesforce case automatically","The agent sends an email to the admin"],correct:1,explanation:"Agents are configured with escalation paths — when a request falls outside their topics or capability, they can hand off to a human agent or politely decline."},
      {domain:"Prompt Builder & Grounding",q:"Which prompt template type is designed to automatically populate a record field with AI-generated content?",opts:["Sales Email template","Record Summary template","Field Generation template","Flex template"],correct:2,explanation:"Field Generation templates generate content to populate specific record fields — for example, generating a call summary to populate a case description field."},
      {domain:"Prompt Builder & Grounding",q:"What is the purpose of 'grounding' in the context of Prompt Builder?",opts:["Securing the prompt from injection attacks","Including relevant Salesforce record data in the prompt to give the LLM accurate business context","Translating prompts into multiple languages","Caching prompt responses for performance"],correct:1,explanation:"Grounding inserts org-specific data (account details, case history, product info) into prompts so the LLM generates accurate, relevant responses rather than generic ones."},
      {domain:"Prompt Builder & Grounding",q:"In a prompt template, how is Salesforce record data merged into the prompt text?",opts:["Using SOQL inline queries","Using merge fields that reference object fields and related data","Using Apex callouts inside the template","Using a custom component"],correct:1,explanation:"Merge fields (similar to those used in email templates) allow you to reference specific field values from records and insert them into the prompt at runtime."},
      {domain:"Prompt Builder & Grounding",q:"Which Salesforce product must be enabled to use Data Cloud grounding in Agentforce?",opts:["Salesforce Shield","Data Cloud","Marketing Cloud","Einstein Analytics"],correct:1,explanation:"Data Cloud must be provisioned and configured to enable agents to ground their responses with unified customer profiles and real-time data segments."},
      {domain:"Einstein Trust Layer",q:"What does Salesforce's zero data retention policy mean in the context of Agentforce?",opts:["Agent conversation history is deleted after 24 hours","Salesforce does not use customer data to train LLM models, and prompts are not retained by the LLM provider","Agents cannot store data in custom objects","All agent logs are automatically purged weekly"],correct:1,explanation:"Salesforce's zero data retention policy ensures that data sent to external LLMs is not retained or used for model training, protecting customer data privacy."},
      {domain:"Einstein Trust Layer",q:"What does data masking in the Einstein Trust Layer do?",opts:["Encrypts all Salesforce records","Replaces sensitive field values (e.g., SSN, credit card numbers) with tokens before sending data to the LLM","Hides fields from users based on profile","Prevents agents from reading certain objects"],correct:1,explanation:"Data masking automatically detects and replaces sensitive data in prompts with tokens before the prompt is sent to the LLM, preventing exposure of PII."},
      {domain:"Einstein Trust Layer",q:"Where can admins review the prompts sent to LLMs and the responses received for compliance purposes?",opts:["Setup Audit Trail","Einstein Trust Layer Audit Trail","Debug Logs","Event Monitoring"],correct:1,explanation:"The Einstein Trust Layer Audit Trail logs all AI interactions — admins can review exactly what data was sent to the LLM and what response was returned."},
      {domain:"Einstein Trust Layer",q:"Which Trust Layer feature prevents harmful or off-topic content from being surfaced to users?",opts:["Data masking","Zero retention","Toxicity filtering","Field-level security"],correct:2,explanation:"Toxicity filtering screens LLM responses for harmful, inappropriate, or off-topic content and blocks them before they reach the user."},
      {domain:"Use Cases & Deployment",q:"A company wants to reduce support volume by letting customers resolve common issues without a human agent. Which Agentforce deployment is most appropriate?",opts:["Deploy a Sales Agent to the CRM","Deploy a Service Agent to the Experience Cloud customer portal","Create a record-triggered Flow","Build a bot in Salesforce Flow"],correct:1,explanation:"A Service Agent deployed to an Experience Cloud portal can handle common customer queries autonomously, deflecting cases from human agents."},
      {domain:"Use Cases & Deployment",q:"A sales rep wants AI assistance to draft a personalized follow-up email after a meeting. Which Agentforce feature supports this?",opts:["Record Summary template in Prompt Builder","Sales Email prompt template in Prompt Builder","A scheduled Flow","An Einstein Prediction Builder model"],correct:1,explanation:"The Sales Email prompt template in Prompt Builder generates personalized email drafts grounded with opportunity and contact data, surfacing them directly in the record."},
      {domain:"Use Cases & Deployment",q:"Which metric best indicates whether an Agentforce service agent is successfully reducing human workload?",opts:["Average handle time","Agent containment rate (percent of conversations resolved without human handoff)","Number of active topics","Prompt template count"],correct:1,explanation:"Containment rate measures the percentage of conversations the agent resolves without escalating to a human — a high containment rate indicates effective deflection."},
      {domain:"Agentforce Foundations",q:"Which statement best describes the Einstein 1 Platform in relation to Agentforce?",opts:["It is a separate product that must be purchased independently","It is the unified Salesforce platform that combines CRM data, Data Cloud, and AI capabilities that Agentforce is built on","It replaces Salesforce Flow for automation","It is the name for the Salesforce mobile app"],correct:1,explanation:"Einstein 1 Platform is Salesforce's unified platform layer that connects CRM, Data Cloud, and AI (including Agentforce) — agents are built on top of this foundation."},
      {domain:"Agent Builder & Configuration",q:"An agent action needs to update a record and send a notification. What is the recommended approach?",opts:["Write a SOQL query in the topic instructions","Create an autolaunched Flow that performs both operations and expose it as a custom action","Use a Record-Triggered Flow","Configure a Workflow Rule"],correct:1,explanation:"Autolaunched Flows can encapsulate multi-step logic (DML + notifications) and be exposed as custom agent actions, keeping agent configuration declarative and maintainable."}
    ],
    tips:[
      {icon:"🤖",title:"Understand Agent Reasoning",body:"The exam tests conceptual understanding of how agents reason and plan. Be clear on the difference between autonomous agents, scripted bots, and copilot — this distinction appears in scenario questions."},
      {icon:"🧱",title:"Topics and Actions Are Core",body:"Agent Builder topics and actions are the primary configuration mechanism. Know what topics do (define scope and route requests), what instructions do (govern behavior), and the difference between standard and custom actions."},
      {icon:"📝",title:"Know All Three Template Types",body:"Field Generation, Record Summary, and Sales Email templates each have distinct use cases. Scenario questions will describe a business need — map it to the correct template type."},
      {icon:"🔐",title:"Trust Layer Details Matter",body:"The exam tests specifics of the Einstein Trust Layer — data masking, zero retention, toxicity filtering, and audit logging. Understand what each does and when it applies."},
      {icon:"☁️",title:"Data Cloud Enables Grounding",body:"Know that Data Cloud is required for real-time customer context grounding. You don't need deep Data Cloud expertise but must understand its role in providing agent context."},
      {icon:"📊",title:"Know Your Success Metrics",body:"Questions about measuring agent effectiveness appear on the exam. Containment rate, deflection rate, and CSAT are the key metrics — know what each measures."},
      {icon:"🔄",title:"Escalation Is Expected",body:"Agents are not expected to handle everything. Understand how and when agents hand off to human agents — this is a design principle, not a failure mode."},
      {icon:"🏆",title:"Use the Official Trailhead Content",body:"The Agentforce Specialist exam is closely aligned with Trailhead content. Complete the Agentforce Basics module and Build Your First Agent project — they cover the majority of exam topics."}
    ]
  },

});
