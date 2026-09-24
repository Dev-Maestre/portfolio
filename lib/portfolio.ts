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
    "Backend and full-stack developer who builds, maintains, and evolves production systems, APIs, integrations, and process automation for financial operations.",
  paragraphs: [
    "I build, maintain, and evolve production systems, APIs, integrations, and process automation, with most of the work in financial solutions.",
    "That work covers payroll-deducted loans, contract management, collection, protest, and credit recovery: business rules, data processing, and integrations across systems and services. It also includes bank integrations and platforms used by public agencies, financial institutions, and companies.",
    "On the full-stack side, I connect frontend, backend, and external services: asynchronous flows, state recovery, interfaces for data processing, and links between applications and automations.",
    "B.Sc. in Computer Science at UTFPR, with academic work in artificial intelligence, reinforcement learning, and multi-agent systems through research during the degree.",
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
    period: "Oct 2025–Present",
    summary:
      "I work on two production platforms for financial operations. ConsigFACIL is a multi-tenant system for payroll-deducted loans: each client runs its own agreements, margins, contracts, and payroll integrations. ProFACIL is a credit-recovery product for protest and tax-debt certificates, used by public and private creditors to bring debtors, titles, and notary offices into one operation.",
    details: [
      "On ConsigFACIL, my day-to-day is the loan life cycle inside each tenant: contracts, margins, agreements, discounts, portability, auditing, reports, and links to payroll systems.",
      "I opened manual contract changes that the legacy flow blocked, editing installments and refactoring the paths that generate, consign, and settle a contract, so operations could correct live deals without workarounds.",
      "I worked on portability of reservation and other client-specific rules, where the same codebase behaves differently per tenant configuration.",
      "On ProFACIL, the product tracks credit recovery through protest: debtors, tax-debt certificates (CDAs), titles, notary offices, negotiations, fees, and dashboards.",
      "I built the asynchronous import of CDAs from an external integration, so large batches can start in the background, be polled to completion, previewed, and then saved, without locking the operator on a single upload.",
      "I added state recovery after refresh or route change, so a long import or review can resume instead of starting over.",
      "I aligned the contracts between the Angular interface, the Java API, and n8n automations, including the technical specification used by both sides.",
      "I evolved the ProFACIL backend with another developer: business rules, data modeling, legacy maintenance, and calls to external services.",
    ],
  },
  {
    company: "AquiCob Soluções de Cobrança",
    role: "Software Developer",
    period: "May 2025–Sep 2025",
    summary:
      "I worked on a debt CRM for collection operations: the desk that holds each debtor’s balance, lets the team simulate and close agreements, issues invoices, and settles what was paid, wired to bank APIs for the financial steps. I also coordinated the technology team’s backlog: what to build and in what order, including WhatsApp bots and outbound messaging for collection.",
    details: [
      "I coordinated the tech team around the backlog: gathering what needed to be built, prioritizing it, and keeping implementation aligned with the collection operation, with focus on WhatsApp robots and message dispatch.",
      "I extended the CRM around agreements, interest, penalties, discounts, and the collection steps that operators run every day.",
      "I connected bank integrations so debt lookup, agreement simulation, contracts, invoices, and settlement could talk to external financial services.",
      "I routed and normalized those requests so SOAP and REST payloads from different banks landed as usable records in the CRM.",
      "I hardened error handling, logging, and automations that replaced manual reconciliation work.",
    ],
  },
  {
    company: "Moonrock Soluções Tecnológicas (contract)",
    role: "Software Developer",
    period: "Mar 2025–Sep 2025",
    summary:
      "I built the APIs and screens that connect business systems to each other: backend services for the domain rules, interfaces for the operators, and background jobs for work that should not block the request.",
    details: [
      "I designed and shipped REST APIs that carried business rules and joined separate systems behind one contract.",
      "I modeled and tuned the PostgreSQL side for the queries those integrations needed.",
      "I delivered React/Next.js interfaces that talked to those APIs end to end.",
      "I moved heavy work into PHP queues and jobs, and shipped with Docker and CI/CD.",
    ],
  },
  {
    company: "UTFPR",
    role: "Software Development Intern",
    period: "Mar 2024–Mar 2025",
    summary:
      "I maintained the graduate-studies portal that runs calls for applications, enrollments, and reports for the postgraduate programs.",
    details: [
      "I kept the portal’s academic flows working: editais, inscriptions, and the reports staff rely on.",
      "I integrated academic data between systems so enrollment stayed consistent across tools.",
      "I fixed a password-recovery email failure and cleaned up interface pieces that were blocking users.",
    ],
  },
];

export const projects: ResearchProject[] = [
  {
    title: "Scientific Initiation, Intelligent Agents",
    period: "Mar 2023–Nov 2023",
    summary:
      "I trained a DQN agent to drive in a simulated city. I set up the control problem in CARLA, ran the training loop in Python with TensorFlow and Keras-RL, and validated the agent experimentally as a deep network.",
    details: [
      "I formulated vehicle control as reinforcement learning, with DQN as the learning method.",
      "I built urban scenes in CARLA and trained the agent with Python, TensorFlow, and Keras-RL.",
      "I compared simulators and validated deep-network agents experimentally for traffic control.",
      "I presented the paper Autonomous vehicle driving using reinforcement-learning techniques at SICITE 2023 at UTFPR.",
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
    period: "Mar 2024–Nov 2024",
    summary:
      "I compared CARLA, SUMO, and Traffic3D before later experiments committed to one of them. I based the choice on realism, behavioral fidelity, computational cost, and how directly each simulator connects to a reinforcement-learning stack.",
    details: [
      "I evaluated CARLA, SUMO, and Traffic3D as environments for reinforcement-learning agents.",
      "My criteria were realism, behavioral fidelity, computational performance, and integration with the AI tooling.",
      "That comparison selected the environment I used for the intelligent-agent experiments.",
      "I presented the paper Analysis and comparison of autonomous-vehicle simulators with reinforcement-learning techniques at Pré-SICITE 2024 at UTFPR, Ponta Grossa.",
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
    period: "Mar 2025–May 2026",
    summary:
      "I compared a multi-agent learner with a monolithic one on the same intersection. On the MASPY side, traffic-light agents learn with Q-learning inside a BDI environment model; the baseline is tabular SARSA on an equivalent environment, with shared transitions, reward, and exploration.",
    details: [
      "I modeled the intersection in discrete time with four approaches: queues on each side, the current phase, elapsed green time, and pressure between the north-south and east-west axes.",
      "Actions hold the phase or switch to one approach (N, S, E, W) or a paired phase (NS, EW). Arrivals are Poisson, service is a fixed rate, green has a minimum, and a phase change is penalized.",
      "I used a reward that combines throughput, queue length, and saturation. Both approaches share that reward, the transition, and the exploration and learning schedules, paired on seeds and arrival sequences.",
      "On the MASPY side, I used an Intersection environment and TrafficLight agents (one controller plus observers), learning with Q-learning through an environment model.",
      "I built the baseline as the same intersection in a tabular environment, trained with classical SARSA.",
      "I ran a pipeline that trains and evaluates both on two intersections, then measures convergence, recovery from a sudden demand shock, and an ablation of the discount factor.",
      "I tracked throughput, average queue size, and recovery after the shock, wrote CSV outputs with comparative plots, and used a Pygame view for live training and replay of a recorded run.",
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
  line: "B.Sc. Computer Science, UTFPR, 2021–2026",
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
    period: "Oct 2025–Present",
    stack: ["PHP", "PostgreSQL", "Java", "Spring Boot", "Angular"],
    focus: ["ConsigFACIL", "ProFACIL"],
  },
  {
    company: "AquiCob Soluções de Cobrança",
    role: "Software Developer",
    period: "May 2025–Sep 2025",
    stack: ["PHP", "HTML", "CSS", "JavaScript", "PostgreSQL"],
    focus: ["Debts", "Agreements", "Invoices", "Settlement","SOAP", "REST","Integrations"],
  },
  {
    company: "Moonrock Soluções Tecnológicas",
    role: "Software Developer",
    period: "Mar 2025–Sep 2025",
    contract: true,
    stack: ["Laravel", "React", "Next.js", "PostgreSQL", "Docker"],
  },
  {
    company: "UTFPR",
    role: "Software Development Intern",
    period: "Mar 2024–Mar 2025",
    stack: ["PHP", "MySQL"],
    focus: ["Graduate portal"],
  },
];

export const projectsApi = [
  {
    title: "Scientific Initiation, Intelligent Agents",
    period: "Mar 2023–Nov 2023",
    stack: ["CARLA", "Python", "TensorFlow", "Keras-RL"],
    focus: ["DQN", "Autonomous driving"],
  },
  {
    title: "Scientific Initiation, Traffic Simulation and AI",
    period: "Mar 2024–Nov 2024",
    stack: ["CARLA", "SUMO", "Traffic3D"],
    focus: ["Realism", "Behavioral fidelity", "Computational cost"],
  },
  {
    title: "MASPY / Thesis",
    period: "Mar 2025–May 2026",
    stack: ["Python", "MASPY"],
    focus: ["Q-learning", "SARSA", "Traffic-light control"],
    repository: "https://github.com/Dev-Maestre/Smart-Queue-Agents-W-Maspy",
  },
];
