/** Framework X Flow — Site content. All public copy lives here. */

export const nav = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Approach", to: "/approach" },
  { label: "About", to: "/about" },
  { label: "Insights", to: "/insights" },
];

export const hero = {
  eyebrow: "Business Systems and Operations Studio",
  headlineLines: ["Turn scattered", "operations into", "systems that flow."],
  supporting:
    "Framework X Flow helps owner-led service businesses clarify workflows, document what works, and build practical operating systems—so fewer things fall through the cracks and growth does not depend on the owner remembering everything.",
  microcopy: "Practical guidance. Clear deliverables. No bloated technology stack.",
};

export const marqueeItems = [
  "Workflows",
  "Documentation",
  "Client Onboarding",
  "SOPs",
  "Handoffs",
  "Knowledge Hubs",
  "Operational Clarity",
  "No-code Systems",
];

export const problem = {
  headline: "Your business is growing. Your systems have not caught up.",
  intro:
    "The work is getting done, but too much of it still depends on memory, repeated explanations, manual follow-up, and the owner stepping in.",
  cards: [
    {
      title: "Everything Runs Through You",
      body: "Your team or contractors need you to answer questions, make decisions, and keep work moving.",
    },
    {
      title: "The Process Changes Every Time",
      body: "Onboarding, delivery, follow-up, or recurring work is handled differently depending on the day or person.",
    },
    {
      title: "Important Details Live Everywhere",
      body: "Information is spread across inboxes, messages, documents, notebooks, and disconnected platforms.",
    },
    {
      title: "Your Tools Are Not Working Together",
      body: "You have software, but the overall process is still unclear or more complicated than necessary.",
    },
    {
      title: "Repeated Work Is Not Documented",
      body: "The business performs the same tasks repeatedly, but instructions and expectations mostly live in people's heads.",
    },
    {
      title: "Growth Creates More Chaos",
      body: "New clients, team members, or services increase the owner's workload instead of creating leverage.",
    },
  ],
};

export const solution = {
  headline: "You probably do not need more tools. You need a clearer way of working.",
  supporting:
    "Framework X Flow helps you understand what is happening now, identify what needs to change, and build the framework that allows work to flow more consistently.",
  benefits: [
    "Clearer workflows",
    "Better handoffs",
    "Repeatable client experiences",
    "Practical documentation",
    "Organized business knowledge",
    "Less repeated explanation",
    "More confident delegation",
    "Useful automation",
    "Reduced owner dependency",
    "Better operational visibility",
  ],
};

export const method = {
  headline: "From operational friction to a system people can follow.",
  supporting:
    "A system is not successful because it looks organized. It is successful because people can understand it, use it, and maintain it.",
  steps: [
    {
      no: "01",
      name: "Map",
      short: "Understand how the business currently operates.",
      body: "Review the people, tools, information, handoffs, decisions, and repeated tasks involved in the process. Identify where work begins, where it moves, where it slows down, and where responsibility becomes unclear.",
    },
    {
      no: "02",
      name: "Frame",
      short: "Define what the improved process needs to accomplish.",
      body: "Identify priorities, remove unnecessary complexity, establish responsibilities, and design a practical future-state workflow.",
    },
    {
      no: "03",
      name: "Build",
      short: "Create the system that supports the improved process.",
      body: "Create the workflow, workspace, documentation, templates, forms, or automation required to support the improved process.",
    },
    {
      no: "04",
      name: "Flow",
      short: "Test, adjust, prepare people, and maintain it.",
      body: "Test the system, make adjustments, prepare the people who will use it, and establish how it will be maintained over time.",
    },
  ],
};

/** The three primary offers, keyed by slug. */
export const services = [
  {
    slug: "systems-clarity-assessment",
    fig: "Fig. 01",
    name: "Systems Clarity Assessment",
    headline: "Find the friction. Know what to fix first.",
    problemLine: "You know the business is working too hard, but not which problem to fix first.",
    resultLine: "Leave with a prioritized roadmap and the three improvements that matter most.",
    description:
      "The Systems Clarity Assessment is for an owner who knows the business is working harder than it should but is unsure which operational problems should be addressed first. Framework X Flow reviews how work currently moves, identifies the most significant bottlenecks, and creates a prioritized improvement roadmap.",
    bestFor: [
      "Owners dealing with several operational problems at once.",
      "Businesses unsure whether they need better processes, documentation, tools, automation, or clearer responsibilities.",
      "Owners who want an expert outside perspective before investing in implementation.",
      "Businesses preparing to hire, delegate, reorganize, or grow.",
      "Owners who know something is inefficient but cannot identify the root problem.",
    ],
    receives: [
      "Pre-assessment business questionnaire.",
      "Review of the business's current tools, workflows, and primary concerns.",
      "One 75-minute assessment and working session.",
      "Current-state review of one primary operational area.",
      "Identification of bottlenecks, duplicated work, unclear handoffs, missing documentation, and unnecessary complexity.",
      "A prioritized Systems Roadmap.",
      "The three most important improvements to address first.",
      "A practical 30-day action plan.",
      "Tool and automation recommendations only when appropriate.",
      "Session recording when the meeting platform supports it.",
      "Written follow-up summary.",
    ],
    previewDeliverables: ["Prioritized Systems Roadmap", "30-day action plan", "Top three improvements"],
    areasReviewed: [
      "Lead intake", "Lead follow-up", "Client onboarding", "Project setup", "Service delivery",
      "Internal communication", "Recurring administrative work", "Task management", "Project management",
      "File organization", "Information management", "Team handoffs", "Review and approval processes",
      "SOP documentation", "Client offboarding", "Follow-up and retention",
    ],
    outcome: [
      "What is creating the most operational friction.",
      "What should be improved first.",
      "Which changes will have the greatest practical impact.",
      "What can wait.",
      "Whether implementation support is needed.",
    ],
    begins:
      "Begins with a pre-assessment questionnaire, followed by your 75-minute working session and a written follow-up summary.",
    ctaWithBooking: "Book the Systems Clarity Assessment",
    ctaFallback: "Discuss the Assessment",
    bookingType: "assessment",
  },
  {
    slug: "workflow-and-operations-build",
    fig: "Fig. 02",
    name: "Workflow and Operations Build",
    headline: "Turn the plan into a working system.",
    problemLine: "You understand the problem, but you need someone to actually build the solution.",
    resultLine: "Get a working operational system your team can run without constant owner intervention.",
    description:
      "The Workflow and Operations Build is a customized implementation project for businesses that need more than recommendations. Framework X Flow maps the improved process, builds the supporting workflow, organizes the necessary tools and templates, tests the system, and prepares the owner or team to use it consistently.",
    bestFor: [
      "A recurring workflow that changes depending on who handles it.",
      "Client onboarding that is manual, confusing, or inconsistent.",
      "Work that falls through the cracks between people or platforms.",
      "An owner who repeatedly reminds people what happens next.",
      "A project-management system that exists but is not being used effectively.",
      "A business preparing to delegate recurring responsibilities.",
      "Teams using too many disconnected tools.",
      "An owner who understands the problem but needs someone to build the solution.",
    ],
    receives: [
      "Current-state workflow map.",
      "Future-state workflow design.",
      "Defined roles and responsibilities.",
      "Clear handoff points.",
      "Project or client-management workspace.",
      "Task templates.",
      "Reusable checklists.",
      "Client intake process.",
      "Client onboarding workflow.",
      "Internal request process.",
      "Approval workflow.",
      "Naming and organization standards.",
      "Forms and information-capture systems.",
      "Follow-up and reminder systems.",
      "No-code automation.",
      "AI-assisted workflow components when useful.",
      "System testing, revisions, and a team walkthrough.",
      "Recorded training and a system handoff guide.",
      "Defined post-launch support period.",
    ],
    previewDeliverables: ["Future-state workflow design", "Configured workspace & templates", "Team walkthrough & handoff"],
    receivesNote: "The exact scope is customized to your business.",
    tools: ["ClickUp", "Notion", "Google Workspace", "Airtable", "Trello", "Asana", "Zapier", "Make", "Your existing CRM"],
    outcome: [
      "Makes responsibilities clearer.",
      "Reduces repeated manual decisions.",
      "Improves handoffs.",
      "Helps work move more consistently.",
      "Reduces the need for constant owner intervention.",
    ],
    begins: "Begins with a Systems Fit Call to confirm scope, then a mapped current-state and future-state design.",
    ctaWithBooking: "Discuss a Systems Build",
    ctaFallback: "Discuss a Systems Build",
    bookingType: "fit",
  },
  {
    slug: "sop-and-knowledge-hub-build",
    fig: "Fig. 03",
    name: "SOP and Knowledge Hub Build",
    headline: "Get the process out of your head and into the business.",
    problemLine: "Your instructions and knowledge live in people's heads and scattered notes.",
    resultLine: "Get a usable source of truth that makes training, delegation, and delivery consistent.",
    description:
      "The SOP and Knowledge Hub Build captures the processes the owner or team repeatedly performs and turns them into organized, practical business documentation. This is not a folder filled with lengthy documents no one reads. Framework X Flow creates instructions, checklists, templates, and knowledge structures designed around how the team actually works.",
    bestFor: [
      "Owners who repeatedly explain the same tasks.",
      "Teams that depend on one person's memory.",
      "Businesses preparing to hire, delegate, or cross-train.",
      "Organizations with outdated documentation.",
      "Businesses whose SOPs are scattered across documents, messages, videos, and personal notes.",
      "Teams that need one dependable place to find operational information.",
      "Businesses experiencing inconsistent work because instructions are unclear.",
    ],
    receives: [
      "SOP inventory.",
      "Documentation-priority plan.",
      "Process-capture interviews.",
      "Review of existing documentation.",
      "Step-by-step SOPs.",
      "Quick-reference checklists.",
      "Reusable templates.",
      "Decision guides.",
      "Roles and responsibility documentation.",
      "File naming and organization standards.",
      "Central digital knowledge hub.",
      "SOP ownership plan.",
      "Documentation-review schedule.",
      "Version-control structure.",
      "Optional AI-assisted knowledge-search resources.",
      "Optional prompt resources.",
      "Team walkthrough and one revision round.",
      "Documentation handoff guide.",
    ],
    previewDeliverables: ["Step-by-step SOPs & checklists", "Central digital knowledge hub", "Documentation ownership plan"],
    standard: [
      "Easy to locate.",
      "Easy to understand.",
      "Written for the person performing the task.",
      "Detailed enough to support consistency.",
      "Brief enough to be used.",
      "Connected to the actual workflow.",
      "Assigned an owner when appropriate.",
      "Designed to be updated.",
    ],
    outcome: [
      "Training easier.",
      "Delegation more confident.",
      "Service delivery more consistent.",
      "Knowledge less dependent on one person.",
      "Recurring work easier to maintain.",
    ],
    begins: "Begins with a Systems Fit Call, then an SOP inventory and documentation-priority plan.",
    ctaWithBooking: "Discuss Your Documentation Project",
    ctaFallback: "Discuss Your Documentation Project",
    bookingType: "fit",
  },
];

export const comparison = [
  { need: "I do not know what to fix first.", best: "Systems Clarity Assessment", to: "/services#systems-clarity-assessment" },
  { need: "I know the problem, but I need the system built.", best: "Workflow and Operations Build", to: "/services#workflow-and-operations-build" },
  { need: "Our knowledge and instructions are scattered.", best: "SOP and Knowledge Hub Build", to: "/services#sop-and-knowledge-hub-build" },
  { need: "I am still unsure.", best: "Systems Fit Call", to: "/book" },
];

export const idealClient = {
  headline: "Built for the business that is working—but working too hard.",
  copy:
    "Framework X Flow is designed for established owner-led service businesses with real clients, recurring work, and growing operational complexity.",
  indicators: [
    "You have clients and a proven service.",
    "You work with employees, contractors, or recurring collaborators.",
    "You repeat similar work across clients or projects.",
    "The owner is still the central source of information.",
    "You need systems but do not need a full-time operations executive.",
    "You want practical implementation instead of an oversized consulting engagement.",
  ],
};

export const differentiators = {
  headline: "Systems built around the business—not the other way around.",
  principles: [
    { title: "Simplify Before Adding", body: "Remove unnecessary steps before adding tools or automation." },
    { title: "Use What Already Works", body: "Preserve useful processes and existing technology whenever practical." },
    { title: "Design for Real People", body: "Build systems the owner and team can understand, use, and maintain." },
    { title: "Prioritize Meaningful Improvements", body: "Focus on the workflows that most affect delivery, follow-up, capacity, consistency, and growth." },
  ],
};

export const founderPreview = {
  headline: "Systems thinking with a teacher's clarity.",
  copy:
    "Framework X Flow was founded by Salinas Danielle, a systems-minded operator who specializes in turning complex ideas and scattered processes into practical structures people can follow.",
  copy2:
    "Her background includes graduate education in innovation and entrepreneurship, advanced project-management training, business ownership, education, client service, and the design of practical workflows and operating systems.",
  strengths: [
    "The ability to recognize patterns, gaps, and operational friction.",
    "The ability to explain and document a better process clearly.",
  ],
};

export const faqs = [
  {
    q: "What kinds of businesses do you work with?",
    a: "Framework X Flow primarily works with established owner-led service businesses that have paying clients, recurring work, and growing operational complexity. Most clients have a small team or work regularly with contractors, although established solopreneurs may also be a fit.",
  },
  {
    q: "Do I need to change my current software?",
    a: "Not necessarily. Framework X Flow begins with the process, not the platform. Existing tools are retained when they support the business effectively. A change is recommended only when there is a clear operational reason.",
  },
  {
    q: "Can you work inside the tools we already use?",
    a: "Yes. The goal is to improve how work happens, not force every client into the same technology stack.",
  },
  {
    q: "Do you provide AI and automation services?",
    a: "AI and automation may be included when they solve a meaningful problem. Framework X Flow does not automate a process simply because automation is possible. The underlying workflow must first be clear and workable.",
  },
  {
    q: "What is the difference between the Fit Call and the Systems Clarity Assessment?",
    a: "The Fit Call is a brief introductory conversation used to understand the issue and determine the best next step. The Systems Clarity Assessment is a paid working session that includes analysis, prioritization, and a written roadmap.",
  },
  {
    q: "Can I hire you to implement the recommendations?",
    a: "Yes. When appropriate, Framework X Flow can prepare a separate proposal for a Workflow and Operations Build or SOP and Knowledge Hub Build.",
  },
  {
    q: "Can you help a solopreneur?",
    a: "Yes, when the business has established services, recurring clients, contractors, or repeatable processes that need to be organized. Framework X Flow is generally not intended for someone who is still deciding what business to start.",
  },
  {
    q: "Do you provide ongoing operations management?",
    a: "The core services are assessment, implementation, and documentation projects. Limited follow-up or ongoing optimization may be available depending on scope and capacity, but Framework X Flow does not present itself as a full-time outsourced operations department.",
  },
  {
    q: "How are projects priced?",
    a: "The Systems Clarity Assessment may have a fixed price. Implementation and documentation projects are scoped according to the workflow, complexity, number of tools, number of stakeholders, and required deliverables.",
  },
  {
    q: "Do you guarantee specific revenue or time savings?",
    a: "No. Framework X Flow builds systems intended to improve clarity, consistency, and operational efficiency. Results depend on the business, implementation, adoption, and factors outside the consultant's control.",
  },
];

export const approach = {
  decisions: [
    "Business impact.",
    "Frequency of the problem.",
    "Time currently lost.",
    "Risk of mistakes.",
    "Risk of missed follow-up.",
    "Ease of adoption.",
    "Ability to maintain the solution.",
    "Cost relative to expected value.",
    "Whether the recommendation reduces or adds complexity.",
  ],
  willNot: [
    "Add software without a clear reason.",
    "Automate a broken process without first improving it.",
    "Create unnecessarily long SOPs.",
    "Build a system only the consultant understands.",
    "Force a business into one preferred platform.",
    "Promise unrealistic revenue or time-saving results.",
    "Add complexity merely to justify a larger project.",
  ],
  clientContributes: [
    "Honest information about current processes.",
    "Access to relevant tools or examples.",
    "Availability for discovery and review.",
    "Timely feedback.",
    "Participation from the people who use the process.",
    "A willingness to simplify when necessary.",
    "A primary decision-maker for the project.",
  ],
};

export const about = {
  headline: "Helping good businesses become easier to run.",
  paragraphs: [
    "Salinas Danielle founded Framework X Flow to help small-business owners create the internal clarity required for consistent delivery, confident delegation, and sustainable growth.",
    "Her experience spans education, business innovation, project management, transportation operations, client services, no-code systems, and independent business development.",
    "She holds graduate degrees in Early Childhood Education and Innovation and Entrepreneurship, along with advanced project-management training. Her education background is an advantage in systems work.",
  ],
  knowsHow: [
    "Observe what is happening.",
    "Identify gaps.",
    "Break complexity into understandable parts.",
    "Create structured processes.",
    "Document information clearly.",
    "Help people apply a system in real situations.",
  ],
  closing: [
    "Framework X Flow combines instructional clarity with practical operations thinking.",
    "The goal is not to make a business look more sophisticated. The goal is to make it easier to understand, operate, delegate, and improve.",
  ],
  values: [
    { title: "Simplicity", body: "Remove what is unnecessary so the essential becomes obvious." },
    { title: "Clarity", body: "Make responsibilities, steps, and information easy to understand." },
    { title: "Practicality", body: "Build systems that fit how the team actually works." },
    { title: "Transparency", body: "Clear scope, honest boundaries, and no manufactured urgency." },
    { title: "Sustainable Growth", body: "Design for what the business can maintain over time." },
  ],
};

export const insights = {
  title: "Framework X Flow Field Notes",
  supporting:
    "Practical notes on workflows, operations, documentation, AI-assisted systems, and building a business that does not depend on constant owner intervention.",
  topics: [
    "Business systems", "Workflow improvement", "SOPs and documentation", "Client onboarding",
    "Operational clarity", "No-code automation", "Practical AI use", "Delegation",
    "Team knowledge", "Sustainable business growth", "Project-management systems", "Service-delivery operations",
  ],
};

export const bookPage = {
  headline: "Let's find the right next step for your business.",
  supporting:
    "Book a short Systems Fit Call to discuss what is happening, where work is getting stuck, and which Framework X Flow service may be appropriate.",
  whatHappens: [
    "You describe the operational problem.",
    "We identify the business area most affected.",
    "We discuss the type of support that may be appropriate.",
    "We decide whether there is a useful next step.",
  ],
  boundary:
    "The Systems Fit Call is an introductory conversation. It is not a complete operational audit or consulting session. Detailed analysis and recommendations are provided through the Systems Clarity Assessment or a scoped implementation project.",
};
