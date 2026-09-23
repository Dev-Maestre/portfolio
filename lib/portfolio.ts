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
    | { kind: "diagram"; alt: string };
  repository?: string;
};

export const profile = {
  name: "Gabriel Maestre Costa",
  headline: "Backend and full-stack developer",
  summary:
    "Backend and full-stack developer with experience building and evolving production systems, APIs, integrations, and process automation, mostly for financial solutions.",
  paragraphs: [
    "Experience building and evolving production systems, APIs, integrations, and process automation, mostly for financial solutions.",
    "The work covers PHP, Laravel, Java, Spring Boot, Node.js, PostgreSQL, MySQL, Angular, and TypeScript, along with REST and SOAP, XML and JSON, legacy systems, multi-tenant architecture, and asynchronous processing. Delivery uses GitLab, CI/CD, Docker, Composer, Maven, and SonarQube.",
    "B.Sc. in Computer Science, with experience in AI, reinforcement learning, and multi-agent systems.",
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

export const experience: Role[] = [
  {
    company: "Fácil Tecnologia",
    role: "Software Developer",
    period: "Oct 2025–Present",
    summary:
      "Builds and evolves production systems for payroll-deducted loans, financial operations, collection, and credit recovery. ConsigFACIL is a multi-tenant payroll-loan platform in PHP and PostgreSQL. ProFACIL is a credit-recovery platform, with a Java/Spring Boot API and an Angular/TypeScript interface.",
    details: [
      "On ConsigFACIL, the work covers contracts, margins, agreements, discounts, portability, auditing, reports, and integrations with payroll systems.",
      "Business rules and financial flows in PHP/PostgreSQL, including migrations, data processing, REST integrations, XML/JSON, and maintenance of a large legacy codebase.",
      "Work across client environments and configurations, each with its own operation inside the multi-tenant architecture.",
      "Delivery through GitLab, merge requests, CI/CD, Docker, Composer, and SonarQube.",
      "On ProFACIL, the platform manages credit recovery through protest: debtors, tax-debt certificates, titles, notary offices, negotiations, fees, dashboards, and external integrations.",
      "Backend API in Java/Spring Boot, with REST, JPA/Hibernate, PostgreSQL, Flyway, QueryDSL, RSQL, authentication, authorization, and auditing.",
      "The backend was evolved with another developer: business rules, data modeling, legacy maintenance, and integrations with external services.",
      "Angular/TypeScript work integrated with the Java backend and n8n automations.",
      "Asynchronous import of tax-debt certificates, with jobs, polling, state control, preview, persistence, and failure handling.",
      "State recovery with sessionStorage and a time-to-live, so a flow can resume after a refresh or a route change.",
      "API contracts aligned across frontend, backend, and n8n, including the technical specification.",
    ],
  },
  {
    company: "AquiCob Soluções de Cobrança",
    role: "Software Developer",
    period: "May 2025–Sep 2025",
    summary:
      "Built collection modules in PHP and MySQL for agreements, interest, penalties, discounts, and collection operations, and bank integrations over SOAP and REST.",
    details: [
      "Modules in PHP/MySQL for agreements, interest, penalties, discounts, and collection operations.",
      "Integrations and request routing over SOAP and REST, XML and JSON, mainly for bank APIs.",
      "Flows for debt lookup, agreement simulation, contracts, invoices, settlement, and financial reconciliation.",
      "Error handling, logging, data normalization, and automation that replaced manual processes.",
      "Complementary work with HTML, CSS, JavaScript, Apache, and Git.",
    ],
  },
  {
    company: "Moonrock Soluções Tecnológicas (contract)",
    role: "Software Developer",
    period: "Mar 2025–Sep 2025",
    summary:
      "Built RESTful APIs in Laravel/PHP and interfaces in React/Next.js, with PostgreSQL, PHP queues, Docker, and CI/CD.",
    details: [
      "RESTful APIs in Laravel/PHP, with business rules and integration between systems.",
      "PostgreSQL modeling and optimization, including complex queries.",
      "React/Next.js interfaces integrated with the backend.",
      "Process automation with PHP queues and jobs, and delivery with Docker and CI/CD.",
    ],
  },
  {
    company: "UTFPR",
    role: "Software Development Intern",
    period: "Mar 2024–Mar 2025",
    summary:
      "Maintained and evolved a graduate-studies portal in PHP/MySQL, including calls for applications, enrollments, and reports.",
    details: [
      "Maintenance of the graduate portal used for calls for applications, enrollments, and reports.",
      "Integration of academic data between systems and upkeep of the enrollment flows.",
      "Investigation and fix of a password-recovery email failure, and refactoring of interface components in jQuery.",
    ],
  },
];

export const projects: ResearchProject[] = [
  {
    title: "Scientific Initiation, Intelligent Agents",
    period: "Mar 2023–Nov 2023",
    summary:
      "Trained a DQN agent to drive in a simulated city. The control problem was set up in CARLA, the training loop ran in Python with TensorFlow and Keras-RL, and the agent was validated experimentally as a deep network.",
    details: [
      "Vehicle control was formulated as reinforcement learning, with DQN as the learning method.",
      "Urban scenes were built in CARLA, and the agent was trained with Python, TensorFlow, and Keras-RL.",
      "Simulators were compared, and deep-network agents were validated experimentally for traffic control.",
      "The paper, Autonomous vehicle driving using reinforcement-learning techniques, was presented at SICITE 2023 at UTFPR.",
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
      "Compared CARLA, SUMO, and Traffic3D before later experiments committed to one of them. The choice rested on realism, behavioral fidelity, computational cost, and how directly each simulator connects to a reinforcement-learning stack.",
    details: [
      "The evaluation covered CARLA, SUMO, and Traffic3D as environments for reinforcement-learning agents.",
      "The decision criteria were realism, behavioral fidelity, computational performance, and integration with the AI tooling.",
      "That comparison selected the environment for the intelligent-agent experiments.",
      "The paper, Analysis and comparison of autonomous-vehicle simulators with reinforcement-learning techniques, was presented at Pré-SICITE 2024 at UTFPR, Ponta Grossa.",
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
      "Compared a multi-agent learner with a monolithic one on the same intersection. MASPY traffic-light agents learn with Q-learning inside a BDI environment model; a tabular SARSA baseline trains on an equivalent environment, with shared transitions, reward, and exploration.",
    details: [
      "The intersection is discrete-time and four-way: queues on each approach, the current phase, elapsed green time, and pressure between the north-south and east-west axes.",
      "Actions hold the phase or switch to one approach (N, S, E, W) or a paired phase (NS, EW). Arrivals are Poisson, service is a fixed rate, green has a minimum, and a phase change is penalized.",
      "The reward combines throughput, queue length, and saturation. Both approaches share that reward, the transition, and the exploration and learning schedules, paired on seeds and arrival sequences.",
      "On the MASPY side, an Intersection environment and TrafficLight agents, one controller plus observers, learn with Q-learning through an environment model.",
      "The baseline is the same intersection as a tabular environment, trained with classical SARSA.",
      "The pipeline trains and evaluates both on two intersections, then measures convergence, recovery from a sudden demand shock, and an ablation of the discount factor.",
      "Readouts are throughput, average queue size, and recovery after the shock, written to CSV with comparative plots. A Pygame view supports live training and replay of a recorded run.",
    ],
    figure: {
      kind: "diagram",
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
