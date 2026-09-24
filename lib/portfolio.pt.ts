import type { ResearchProject, Role } from "./portfolio";

export const profilePt = {
  name: "Gabriel Maestre Costa",
  headline: "Desenvolvedor Backend e Full Stack",
  summary:
    "Sistemas de produção para operação financeira: APIs, integrações e automação de processos.",
  paragraphs: [
    "A maior parte do que faço é solução financeira. Construo os sistemas, mantenho o que já está no ar e sigo mudando depois que entra em produção.",
    "O trabalho é consignação em folha, gestão de contratos, cobrança, protesto e recuperação de crédito. No dia a dia isso vira regras de negócio, processamento de dados e integrações entre sistemas e serviços, inclusive bancos e plataformas usadas por órgãos públicos, instituições financeiras e empresas.",
    "No full stack, ligo frontend, backend e serviços externos. Entram fluxos assíncronos, recuperação de estado, telas para processar dados e as ligações entre aplicações e automações.",
    "Bacharel em Ciência da Computação pela UTFPR. Na graduação pesquisei inteligência artificial, aprendizagem por reforço e sistemas multiagentes.",
  ],
  portrait: "/portrait/gabriel-maestre-costa.jpg",
  portraitPending: false,
  location: "Ponta Grossa, Paraná, Brasil",
  links: {
    email: "maestrecosta@hotmail.com",
    linkedin: "https://linkedin.com/in/gabriel-maestre",
    github: "https://github.com/dev-maestre",
    cv: "/cv/gabriel-maestre-costa.pdf",
  },
};

export const technologiesPt: { label: string; items: string[] }[] = [
  {
    label: "Backend",
    items: ["PHP", "Laravel", "Java", "Spring Boot", "Node.js", "REST", "SOAP", "JPA/Hibernate"],
  },
  {
    label: "Frontend",
    items: ["Angular", "React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    label: "Dados",
    items: ["PostgreSQL", "MySQL", "SQL", "Flyway", "QueryDSL"],
  },
  {
    label: "Entrega",
    items: ["Git", "GitLab", "GitFlow", "Docker", "CI/CD", "Composer", "Maven", "SonarQube"],
  },
  {
    label: "Práticas",
    items: [
      "Testes automatizados",
      "Logging",
      "Tratamento de erros",
      "Autenticação",
      "Autorização",
      "Auditoria",
      "Sistemas legados",
    ],
  },
  {
    label: "IA",
    items: [
      "Python",
      "Aprendizagem por reforço",
      "Sistemas multiagentes",
      "BDI",
      "TensorFlow",
      "Keras-RL",
      "CARLA",
    ],
  },
];

export const experiencePt: Role[] = [
  {
    company: "Fácil Tecnologia",
    role: "Desenvolvedor de Software",
    period: "Out 2025-Atual",
    summary:
      "Duas plataformas de produção para operações financeiras. O ConsigFACIL é um sistema multi-tenant de consignação em folha: cada cliente roda os próprios convênios, margens, contratos e integrações com a folha. O ProFACIL cuida de recuperação de crédito por protesto e CDAs. Credores públicos e privados usam o produto para reunir devedores, títulos e cartórios numa só operação.",
    details: [
      "No ConsigFACIL, o dia a dia é o ciclo do contrato dentro de cada tenant: contratos, margens, convênios, descontos, portabilidade, auditoria, relatórios e as ligações com sistemas de folha.",
      "O fluxo legado bloqueava alteração manual de contrato. Abri esse caminho, com edição de parcelas e uma refatoração de como o contrato é gerado, consignado e quitado, para a operação corrigir negócios que já estão rodando, sem gambiarra.",
      "Trabalhei na portabilidade de reserva e em outras regras específicas de cliente. Ficam no mesmo código, e o comportamento muda conforme a configuração do tenant.",
      "O ProFACIL acompanha a recuperação de crédito via protesto: devedores, CDAs, títulos, cartórios, negociações, honorários e dashboards.",
      "A importação de CDAs que implementei parte de uma integração externa e roda em segundo plano. Um lote grande pode ser acompanhado por polling até o fim, pré-visualizado e então salvo, e o operador não fica preso naquele upload.",
      "Depois de atualizar a página ou mudar de rota, uma importação ou revisão longa continua de onde parou. Coloquei essa recuperação de estado.",
      "Um contrato só cobre a interface Angular, a API Java e as automações n8n, inclusive a especificação técnica usada pelos dois lados. Juntei os três nele.",
      "Com outro desenvolvedor, estendi o backend do ProFACIL: regras de negócio, modelagem de dados, manutenção de legado e chamadas a serviços externos.",
    ],
  },
  {
    company: "AquiCob Soluções de Cobrança",
    role: "Desenvolvedor de Software",
    period: "Mai 2025-Set 2025",
    summary:
      "Um CRM de dívidas para cobrança. A mesa guarda o saldo de cada devedor, deixa a equipe simular e fechar acordos, emite boletos e baixa o que foi pago, com APIs bancárias nos passos financeiros. Também coordenei o backlog da equipe de tecnologia: o que implementar e em qual ordem, inclusive robôs de WhatsApp e disparo de mensagens para cobrança.",
    details: [
      "Com a equipe de tecnologia, reuni o que precisava ser construído, defini a ordem e mantive o trabalho batendo com a operação de cobrança. O foco era robôs de WhatsApp e disparo de mensagens.",
      "O CRM cresceu em torno de acordos, juros, multas, descontos e os passos de cobrança que a equipe usa no dia a dia.",
      "As integrações bancárias cobrem consulta de dívida, simulação de acordo, contratos, boletos e baixas contra serviços financeiros externos.",
      "Essas requisições são roteadas e normalizadas, e os payloads SOAP e REST de bancos diferentes viram registros utilizáveis no CRM.",
      "Tratamento de erros, logging e automações assumiram os acertos que eram feitos na mão.",
    ],
  },
  {
    company: "Moonrock Soluções Tecnológicas (contrato)",
    role: "Desenvolvedor de Software",
    period: "Mar 2025-Set 2025",
    summary:
      "Construí as APIs e as telas que ligam sistemas de negócio entre si. Os serviços de backend guardam as regras de domínio, os operadores usam as interfaces, e os jobs em segundo plano pegam o trabalho que não deve travar a requisição.",
    details: [
      "As APIs REST que desenhei e entreguei carregavam as regras de negócio e uniam sistemas separados atrás de um contrato.",
      "Modelei o PostgreSQL e ajustei para as consultas que essas integrações pediam.",
      "Telas em React e Next.js falavam com essas APIs o caminho inteiro.",
      "O trabalho pesado foi para filas e jobs em PHP. O deploy usava Docker e CI/CD.",
    ],
  },
  {
    company: "UTFPR",
    role: "Desenvolvedor Estagiário",
    period: "Mar 2024-Mar 2025",
    summary:
      "Mantive o portal de pós-graduação: editais, inscrições e relatórios dos programas.",
    details: [
      "Os fluxos que mantive de pé foram editais, inscrições e os relatórios da equipe.",
      "Integrei dados acadêmicos entre sistemas para a inscrição continuar igual de uma ferramenta para a outra.",
      "A recuperação de senha por e-mail falhava, e trechos de interface travavam o usuário. Corrigi os dois.",
    ],
  },
];

export const projectsPt: ResearchProject[] = [
  {
    title: "Iniciação Científica, Agentes Inteligentes",
    period: "Mar 2023-Nov 2023",
    summary:
      "Um agente DQN aprendeu a dirigir numa cidade simulada. Montei o problema de controle no CARLA, rodei o laço de treino em Python com TensorFlow e Keras-RL, e conferi o agente em experimento como rede profunda.",
    details: [
      "O controle do veículo foi formulado como aprendizagem por reforço, com DQN como método.",
      "As cenas no CARLA eram urbanas, e o treino usou Python, TensorFlow e Keras-RL.",
      "Comparei simuladores e conferi, em experimento, agentes de rede profunda para controle de tráfego.",
      "No SICITE 2023, na UTFPR, apresentei o trabalho Condução de veículo autônomo usando técnicas de aprendizagem por reforço.",
    ],
    figure: {
      kind: "image",
      src: "/projects/sicite-2023-certificate.jpg",
      href: "/projects/sicite-2023.pdf",
      alt: "Certificado do SICITE 2023 do trabalho sobre condução de veículo autônomo com aprendizagem por reforço.",
    },
  },
  {
    title: "Iniciação Científica, Simulação de Tráfego e IA",
    period: "Mar 2024-Nov 2024",
    summary:
      "Comparei CARLA, SUMO e Traffic3D antes de os experimentos seguintes se fixarem em um deles. A escolha usou realismo, fidelidade comportamental, custo computacional e o quanto cada simulador se liga direto à pilha de aprendizagem por reforço.",
    details: [
      "Os três foram tratados como ambientes para agentes de aprendizagem por reforço.",
      "Os critérios foram realismo, fidelidade comportamental, desempenho computacional e integração com as ferramentas de IA.",
      "Essa comparação escolheu o ambiente dos experimentos com agentes inteligentes.",
      "No Pré-SICITE 2024, na UTFPR, em Ponta Grossa, apresentei o trabalho Análise e comparação de simuladores de veículos autônomos com aplicação de técnicas de aprendizagem por reforço.",
    ],
    figure: {
      kind: "image",
      src: "/projects/sicite-2024-certificate.jpg",
      href: "/projects/sicite-2024.pdf",
      alt: "Certificado do Pré-SICITE 2024 do trabalho de comparação de simuladores de veículos autônomos para aprendizagem por reforço.",
    },
  },
  {
    title: "MASPY / TCC",
    period: "Mar 2025-Mai 2026",
    summary:
      "Comparei um aprendiz multiagente com um monolítico no mesmo cruzamento. No MASPY, agentes de semáforo aprendem com Q-learning dentro de um modelo de ambiente BDI. O baseline é SARSA tabular num ambiente equivalente, e os dois compartilham transição, recompensa e exploração.",
    details: [
      "Modelei o cruzamento em tempo discreto com quatro vias: filas em cada abordagem, a fase atual, o tempo de verde decorrido e a pressão entre os eixos norte-sul e leste-oeste.",
      "As ações mantêm a fase ou alternam para uma abordagem (N, S, L, O) ou uma fase combinada (NS, LO). Chegadas são Poisson, o atendimento tem taxa fixa, o verde tem mínimo e a troca de fase é penalizada.",
      "A recompensa combina vazão, tamanho de fila e saturação. As duas abordagens compartilham essa recompensa, a transição e os schedulers de exploração e aprendizagem, e as execuções são pareadas em seeds e sequências de chegada.",
      "O MASPY usa um ambiente Intersection e agentes TrafficLight (um controlador e observadores), aprendendo com Q-learning por meio de um modelo de ambiente.",
      "O baseline é o mesmo cruzamento em ambiente tabular, treinado com SARSA clássico.",
      "Um pipeline treina e avalia os dois em dois cruzamentos, depois mede convergência, recuperação a um choque súbito de demanda e uma ablação do fator de desconto.",
      "Acompanhei vazão, tamanho médio de fila e recuperação após o choque. As execuções gravam CSV com gráficos comparativos, e uma visualização em Pygame mostra o treino ao vivo e consegue repetir uma execução gravada.",
    ],
    figure: {
      kind: "diagram",
      href: "/projects/maspy-architecture.svg",
      alt: "MASPY e um baseline SARSA alimentam run_experiments.py, que grava runs_output junto com plot_results.py.",
    },
    repository: "https://github.com/Dev-Maestre/Smart-Queue-Agents-W-Maspy",
  },
];

export const educationPt = {
  line: "Bacharelado em Ciência da Computação, UTFPR, 2021-2026",
};
