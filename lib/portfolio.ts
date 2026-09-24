export type Role = {
  company: string;
  role: string;
  period: string;
  summary: string;
  details: string[];
};

export type ResearchProject = {
  title: string;
  period: string;
  summary: string;
  details: string[];
  figure:
    | { kind: "image"; src: string; alt: string; href: string }
    | { kind: "diagram"; alt: string; href: string };
  repository?: string;
};

export const profile = {
  name: "Gabriel Maestre Costa",
  headline: "Backend and full-stack developer",
  summary:
    "Production systems for financial operations: APIs, integrations, and process automation.",
  paragraphs: [
    "Most of what I do is for financial operations. I build the systems, keep them running, and keep changing them after they are in production.",
    "The work is payroll-deducted loans, contract management, collection, protest, and credit recovery. Day to day that means business rules, data processing, and integrations between systems and services, including banks and platforms used by public agencies, financial institutions, and companies.",
    "I also work across the stack, joining the frontend, the backend, and outside services. That includes async flows, recovering state, screens for processing data, and the links between applications and automations.",
    "B.Sc. in Computer Science at UTFPR. During the degree I researched artificial intelligence, reinforcement learning, and multi-agent systems.",
  ],
  portrait: "/portrait/gabriel-maestre-costa.jpg",
  portraitPending: false,
  location: "Ponta Grossa, Paraná, Brazil",
  links: {
    email: "maestrecosta@hotmail.com",
    linkedin: "https://linkedin.com/in/gabriel-maestre",
    github: "https://github.com/dev-maestre",
    cv: "/cv/gabriel-maestre-costa.pdf",
  },
};

export const technologies: { label: string; items: string[] }[] = [
  {
    label: "Backend",
    items: ["PHP", "Laravel", "Java", "Spring Boot", "Node.js", "REST", "SOAP", "JPA/Hibernate"],
  },
  {
    label: "Frontend",
    items: ["Angular", "React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MySQL", "SQL", "Flyway", "QueryDSL"],
  },
  {
    label: "Delivery",
    items: ["Git", "GitLab", "GitFlow", "Docker", "CI/CD", "Composer", "Maven", "SonarQube"],
  },
  {
    label: "Practices",
    items: [
      "Automated tests",
      "Logging",
      "Error handling",
      "Authentication",
      "Authorization",
      "Auditing",
      "Legacy systems",
    ],
  },
  {
    label: "AI",
    items: [
      "Python",
      "Reinforcement learning",
      "Multi-agent systems",
      "BDI",
      "TensorFlow",
      "Keras-RL",
      "CARLA",
    ],
  },
];

export const experience: Role[] = [
  {
    company: "Fácil Tecnologia",
    role: "Software Developer",
    period: "Oct 2025-Present",
    summary:
      "Two production platforms for financial operations. ConsigFACIL is a multi-tenant system for payroll-deducted loans: each client runs its own agreements, margins, contracts, and payroll integrations. ProFACIL handles credit recovery through protest and tax-debt certificates. Public and private creditors use it to bring debtors, titles, and notary offices into one operation.",
    details: [
      "Day to day on ConsigFACIL is the loan life cycle inside each tenant: contracts, margins, agreements, discounts, portability, auditing, reports, and the links to payroll systems.",
      "The legacy flow blocked manual contract changes. I opened that path, with installment edits and a refactor of how a contract is generated, consigned, and settled, so operations can correct live deals without a workaround.",
      "I worked on reservation portability and other client-specific rules. They sit in the same codebase, and the behavior changes with the tenant configuration.",
      "ProFACIL follows credit recovery through protest: debtors, tax-debt certificates (CDAs), titles, notary offices, negotiations, fees, and dashboards.",
      "CDA import from an outside integration, which I built, runs in the background. A large batch can be polled to completion, previewed, and then saved, and the operator is not held on that one upload.",
      "After a refresh or a route change, a long import or review resumes. I added that recovery.",
      "One contract covers the Angular interface, the Java API, and the n8n automations, including the technical specification used by both sides. I brought them onto it.",
      "With another developer, I extended the ProFACIL backend: business rules, data modeling, legacy maintenance, and calls to external services.",
    ],
  },
  {
    company: "AquiCob Soluções de Cobrança",
    role: "Software Developer",
    period: "May 2025-Sep 2025",
    summary:
      "A debt CRM for collection. The desk holds each debtor's balance, lets the team simulate and close agreements, issues invoices, and settles what was paid, with bank APIs on the financial steps. I also coordinated the technology team's backlog: what to build and in what order, including WhatsApp bots and outbound messaging for collection.",
    details: [
      "With the tech team I gathered what had to be built, ordered it, and kept the work matched to the collection operation. WhatsApp robots and message dispatch were the focus.",
      "The CRM grew around agreements, interest, penalties, discounts, and the collection steps operators run every day.",
      "Bank integrations cover debt lookup, agreement simulation, contracts, invoices, and settlement against outside financial services.",
      "Those requests are routed and normalized, so SOAP and REST payloads from different banks land as records the CRM can use.",
      "Error handling, logging, and automations took over reconciliation that had been done by hand.",
    ],
  },
  {
    company: "Moonrock Soluções Tecnológicas (contract)",
    role: "Software Developer",
    period: "Mar 2025-Sep 2025",
    summary:
      "I built the APIs and screens that connect business systems to each other. Backend services hold the domain rules, operators get the interfaces, and background jobs take the work that should not block the request.",
    details: [
      "The REST APIs I designed and shipped carried the business rules and joined separate systems behind one contract.",
      "I modeled PostgreSQL and tuned it for the queries those integrations needed.",
      "React and Next.js screens talked to those APIs the whole way through.",
      "Heavy work went into PHP queues and jobs. Deploys used Docker and CI/CD.",
    ],
  },
  {
    company: "UTFPR",
    role: "Software Development Intern",
    period: "Mar 2024-Mar 2025",
    summary:
      "I maintained the graduate-studies portal: calls for applications, enrollments, and reports for the postgraduate programs.",
    details: [
      "The academic flows I kept up were editais, inscriptions, and the reports staff rely on.",
      "I integrated academic data between systems so an enrollment stayed consistent from one tool to the next.",
      "Password recovery by email was failing, and some interface pieces were blocking people. I fixed both.",
    ],
  },
];

export const projects: ResearchProject[] = [
  {
    title: "Scientific Initiation, Intelligent Agents",
    period: "Mar 2023-Nov 2023",
    summary:
      "A DQN agent learned to drive in a simulated city. I set the control problem up in CARLA, ran the training loop in Python with TensorFlow and Keras-RL, and checked the agent in experiments as a deep network.",
    details: [
      "Vehicle control was formulated as reinforcement learning, with DQN as the method.",
      "The CARLA scenes were urban, and training used Python, TensorFlow, and Keras-RL.",
      "I compared simulators and checked deep-network agents in experiments for traffic control.",
      "At SICITE 2023, UTFPR, I presented the paper Autonomous vehicle driving using reinforcement-learning techniques.",
    ],
    figure: {
      kind: "image",
      src: "/projects/sicite-2023-certificate.jpg",
      href: "/projects/sicite-2023.pdf",
      alt: "SICITE 2023 certificate for the paper on autonomous-vehicle driving with reinforcement learning.",
    },
  },
  {
    title: "Scientific Initiation, Traffic Simulation and AI",
    period: "Mar 2024-Nov 2024",
    summary:
      "I compared CARLA, SUMO, and Traffic3D before later experiments settled on one of them. The choice used realism, behavioral fidelity, computational cost, and how directly each simulator connects to a reinforcement-learning stack.",
    details: [
      "The three were judged as environments for reinforcement-learning agents.",
      "The criteria were realism, behavioral fidelity, computational performance, and integration with the AI tooling.",
      "That comparison picked the environment for the intelligent-agent experiments.",
      "At Pré-SICITE 2024, UTFPR, Ponta Grossa, I presented the paper Analysis and comparison of autonomous-vehicle simulators with reinforcement-learning techniques.",
    ],
    figure: {
      kind: "image",
      src: "/projects/sicite-2024-certificate.jpg",
      href: "/projects/sicite-2024.pdf",
      alt: "Pré-SICITE 2024 certificate for the paper comparing autonomous-vehicle simulators for reinforcement learning.",
    },
  },
  {
    title: "MASPY / Thesis",
    period: "Mar 2025-May 2026",
    summary:
      "I compared a multi-agent learner with a monolithic one on the same intersection. In MASPY, traffic-light agents learn with Q-learning inside a BDI environment model. The baseline is tabular SARSA on an equivalent environment, and they share the transition, the reward, and the exploration.",
    details: [
      "I modeled the intersection in discrete time with four approaches: queues on each side, the current phase, elapsed green time, and pressure between the north-south and east-west axes.",
      "Actions hold the phase or switch to one approach (N, S, E, W) or a paired phase (NS, EW). Arrivals are Poisson, service is a fixed rate, green has a minimum, and a phase change is penalized.",
      "The reward combines throughput, queue length, and saturation. Both approaches share that reward, the transition, and the exploration and learning schedules, and runs are paired on seeds and arrival sequences.",
      "MASPY uses an Intersection environment and TrafficLight agents (one controller plus observers), learning with Q-learning through an environment model.",
      "The baseline is the same intersection in a tabular environment, trained with classical SARSA.",
      "A pipeline trains and evaluates both on two intersections, then measures convergence, recovery from a sudden demand shock, and an ablation of the discount factor.",
      "I tracked throughput, average queue size, and recovery after the shock. The runs write CSV with comparative plots, and a Pygame view shows live training and can replay a recorded run.",
    ],
    figure: {
      kind: "diagram",
      href: "/projects/maspy-architecture.svg",
      alt: "MASPY and a SARSA baseline both feed run_experiments.py, which writes runs_output together with plot_results.py.",
    },
    repository: "https://github.com/Dev-Maestre/Smart-Queue-Agents-W-Maspy",
  },
];

export const education = {
  line: "B.Sc. Computer Science, UTFPR, 2021-2026",
};

export const directActions = [
  { href: profile.links.cv, label: "CV", external: true },
  { href: `mailto:${profile.links.email}`, label: "Email", external: false },
  { href: profile.links.linkedin, label: "LinkedIn", external: true },
  { href: profile.links.github, label: "GitHub", external: true },
];

export const profileApi = {
  name: profile.name,
  role: profile.headline,
  specialization: [
    "Backend",
    "Artificial intelligence",
    "APIs and integrations",
    "Financial operations",
  ],
  location: profile.location,
  education: {
    degree: "B.Sc. Computer Science",
    institution: "UTFPR",
    startYear: 2021,
    endYear: 2026,
  },
  contact: {
    email: profile.links.email,
    github: profile.links.github,
    linkedin: profile.links.linkedin,
  },
  currentFocus: [
    "Java and Spring Boot",
    "Angular and TypeScript",
    "PHP(Laravel) and PostgreSQL",
    "Asynchronous processing",
  ],
};

export const experienceApi = [
  {
    company: "Fácil Tecnologia",
    role: "Software Developer",
    period: "Oct 2025-Present",
    stack: ["PHP", "PostgreSQL", "Java", "Spring Boot", "Angular"],
    focus: ["ConsigFACIL", "ProFACIL"],
  },
  {
    company: "AquiCob Soluções de Cobrança",
    role: "Software Developer",
    period: "May 2025-Sep 2025",
    stack: ["PHP", "HTML", "CSS", "JavaScript", "PostgreSQL"],
    focus: ["Debts", "Agreements", "Invoices", "Settlement","SOAP", "REST","Integrations"],
  },
  {
    company: "Moonrock Soluções Tecnológicas",
    role: "Software Developer",
    period: "Mar 2025-Sep 2025",
    contract: true,
    stack: ["Laravel", "React", "Next.js", "PostgreSQL", "Docker"],
  },
  {
    company: "UTFPR",
    role: "Software Development Intern",
    period: "Mar 2024-Mar 2025",
    stack: ["PHP", "MySQL"],
    focus: ["Graduate portal"],
  },
];

export const projectsApi = [
  {
    title: "Scientific Initiation, Intelligent Agents",
    period: "Mar 2023-Nov 2023",
    stack: ["CARLA", "Python", "TensorFlow", "Keras-RL"],
    focus: ["DQN", "Autonomous driving"],
  },
  {
    title: "Scientific Initiation, Traffic Simulation and AI",
    period: "Mar 2024-Nov 2024",
    stack: ["CARLA", "SUMO", "Traffic3D"],
    focus: ["Realism", "Behavioral fidelity", "Computational cost"],
  },
  {
    title: "MASPY / Thesis",
    period: "Mar 2025-May 2026",
    stack: ["Python", "MASPY"],
    focus: ["Q-learning", "SARSA", "Traffic-light control"],
    repository: "https://github.com/Dev-Maestre/Smart-Queue-Agents-W-Maspy",
  },
];
