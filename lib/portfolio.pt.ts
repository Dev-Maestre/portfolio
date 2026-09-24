import type { ResearchProject, Role } from "./portfolio";

export const profilePt = {
  name: "Gabriel Maestre Costa",
  headline: "Desenvolvedor Backend e Full Stack",
  summary:
    "Desenvolvedor Backend e Full Stack com experiência no desenvolvimento, manutenção e evolução de sistemas, APIs, integrações e automação de processos, com forte atuação em soluções financeiras.",
  paragraphs: [
    "Desenvolvo, mantenho e evoluo sistemas de produção, APIs, integrações e automação de processos, com a maior parte do trabalho em soluções financeiras.",
    "Esse trabalho cobre consignação em folha, gestão de contratos, cobrança, protesto e recuperação de crédito: regras de negócio, processamento de dados e integrações entre sistemas e serviços. Também inclui integrações bancárias e plataformas usadas por órgãos públicos, instituições financeiras e empresas.",
    "No lado full stack, conecto frontend, backend e serviços externos — fluxos assíncronos, recuperação de estado, interfaces para processamento de dados e ligações entre aplicações e automações.",
    "Bacharel em Ciência da Computação pela UTFPR, com atuação acadêmica em inteligência artificial, aprendizagem por reforço e sistemas multiagentes em projetos de pesquisa durante a graduação.",
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
    period: "Out 2025–Atual",
    summary:
      "Trabalho em duas plataformas de produção para operações financeiras. ConsigFACIL é um sistema multi-tenant de consignação em folha: cada cliente roda seus convênios, margens, contratos e integrações com a folha. ProFACIL é o produto de recuperação de crédito por protesto e CDAs, usado por credores públicos e privados para reunir devedores, títulos e cartórios numa só operação.",
    details: [
      "No ConsigFACIL, meu dia a dia é o ciclo do contrato dentro de cada tenant: contratos, margens, convênios, descontos, portabilidade, auditoria, relatórios e ligações com sistemas de folha.",
      "Abri alteração manual de contrato que o legado bloqueava — edição de parcelas e refatoração dos caminhos que geram, consignam e quitam o contrato — para a operação corrigir negócios vivos sem gambiarra.",
      "Trabalhei portabilidade de reserva e outras regras específicas de cliente, em que o mesmo código se comporta diferente conforme a configuração do tenant.",
      "No ProFACIL, o produto acompanha a recuperação de crédito via protesto: devedores, CDAs, títulos, cartórios, negociações, honorários e dashboards.",
      "Implementei a importação assíncrona de CDAs a partir de integração externa, para lotes grandes começarem em segundo plano, serem acompanhados por polling, pré-visualizados e depois salvos — sem travar o operador num upload único.",
      "Incluí recuperação de estado após atualizar a página ou mudar de rota, para retomar uma importação ou revisão longa em vez de recomeçar.",
      "Alinhei os contratos entre a interface Angular, a API Java e as automações n8n, incluindo a especificação técnica usada pelos dois lados.",
      "Evoluí o backend do ProFACIL com outro desenvolvedor: regras de negócio, modelagem de dados, manutenção de legado e chamadas a serviços externos.",
    ],
  },
  {
    company: "AquiCob Soluções de Cobrança",
    role: "Desenvolvedor de Software",
    period: "Mai 2025–Set 2025",
    summary:
      "Trabalhei num CRM de dívidas para operação de cobrança: a mesa que guarda o saldo de cada devedor, permite simular e fechar acordos, emitir boletos e baixar o que foi pago — ligada a APIs bancárias nos passos financeiros. Também coordenei a equipe de tecnologia no backlog — o que implementar e em qual ordem — inclusive robôs de WhatsApp e disparo de mensagens para cobrança.",
    details: [
      "Coordenei a equipe de tecnologia em torno do backlog: reunir o que precisava ser construído, priorizar e manter a implementação alinhada à operação de cobrança, com foco em robôs de WhatsApp e disparo de mensagens.",
      "Ampliei o CRM em torno de acordos, juros, multas, descontos e os passos de cobrança que a equipe usa no dia a dia.",
      "Conectei integrações bancárias para consulta de dívida, simulação de acordo, contratos, boletos e baixas falarem com serviços financeiros externos.",
      "Roteei e normalizei essas requisições para que payloads SOAP e REST de bancos diferentes virassem registros utilizáveis no CRM.",
      "Endureci tratamento de erros, logging e automações que substituíram acertos manuais.",
    ],
  },
  {
    company: "Moonrock Soluções Tecnológicas (contrato)",
    role: "Desenvolvedor de Software",
    period: "Mar 2025–Set 2025",
    summary:
      "Construí as APIs e as telas que ligam sistemas de negócio entre si: serviços de backend com as regras de domínio, interfaces para os operadores e jobs em segundo plano para o trabalho que não deve travar a requisição.",
    details: [
      "Desenhei e entreguei APIs REST que carregavam regras de negócio e uniam sistemas separados atrás de um contrato.",
      "Modelei e ajustei o lado PostgreSQL para as consultas que essas integrações pediam.",
      "Entreguei interfaces em React/Next.js que falavam com essas APIs de ponta a ponta.",
      "Movi trabalho pesado para filas e jobs em PHP, e publiquei com Docker e CI/CD.",
    ],
  },
  {
    company: "UTFPR",
    role: "Desenvolvedor Estagiário",
    period: "Mar 2024–Mar 2025",
    summary:
      "Mantive o portal de pós-graduação que roda editais, inscrições e relatórios dos programas.",
    details: [
      "Mantive os fluxos acadêmicos do portal: editais, inscrições e os relatórios da equipe.",
      "Integrei dados acadêmicos entre sistemas para a inscrição permanecer consistente entre ferramentas.",
      "Corrigi falha na recuperação de senha por e-mail e limpei trechos de interface que travavam o usuário.",
    ],
  },
];

export const projectsPt: ResearchProject[] = [
  {
    title: "Iniciação Científica, Agentes Inteligentes",
    period: "Mar 2023–Nov 2023",
    summary:
      "Treinei um agente DQN para dirigir em uma cidade simulada. Montei o problema de controle no CARLA, rodei o laço de treino em Python com TensorFlow e Keras-RL, e validei o agente experimentalmente como uma rede profunda.",
    details: [
      "Formulei o controle do veículo como aprendizagem por reforço, com DQN como método de aprendizagem.",
      "Construí cenas urbanas no CARLA e treinei o agente com Python, TensorFlow e Keras-RL.",
      "Comparei simuladores e validei experimentalmente agentes baseados em redes profundas para controle de tráfego.",
      "Apresentei o trabalho Condução de veículo autônomo usando técnicas de aprendizagem por reforço no SICITE 2023 na UTFPR.",
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
    period: "Mar 2024–Nov 2024",
    summary:
      "Comparei CARLA, SUMO e Traffic3D antes que os experimentos seguintes se fixassem em um deles. Baseei a escolha em realismo, fidelidade comportamental, custo computacional e na integração com a pilha de aprendizagem por reforço.",
    details: [
      "Avaliei CARLA, SUMO e Traffic3D como ambientes para agentes de aprendizagem por reforço.",
      "Meus critérios foram realismo, fidelidade comportamental, desempenho computacional e integração com as ferramentas de IA.",
      "Essa comparação selecionou o ambiente que usei nos experimentos com agentes inteligentes.",
      "Apresentei o trabalho Análise e comparação de simuladores de veículos autônomos com aplicação de técnicas de aprendizagem por reforço no Pré-SICITE 2024 na UTFPR, Ponta Grossa.",
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
    period: "Mar 2025–Mai 2026",
    summary:
      "Comparei um aprendiz multiagente com um monolítico no mesmo cruzamento. No lado MASPY, agentes de semáforo aprendem com Q-learning dentro de um modelo de ambiente BDI; o baseline é SARSA tabular em um ambiente equivalente, com transição, recompensa e exploração compartilhadas.",
    details: [
      "Modelei o cruzamento em tempo discreto com quatro vias: filas em cada abordagem, a fase atual, o tempo de verde decorrido e a pressão entre os eixos norte-sul e leste-oeste.",
      "As ações mantêm a fase ou alternam para uma abordagem (N, S, L, O) ou uma fase combinada (NS, LO). Chegadas são Poisson, o atendimento tem taxa fixa, o verde tem mínimo e a troca de fase é penalizada.",
      "Usei uma recompensa que combina vazão, tamanho de fila e saturação. As duas abordagens compartilham essa recompensa, a transição e os schedulers de exploração e aprendizagem, pareados em seeds e sequências de chegada.",
      "No lado MASPY, usei um ambiente Intersection e agentes TrafficLight — um controlador e observadores — aprendendo com Q-learning por meio de um modelo de ambiente.",
      "Construí o baseline como o mesmo cruzamento em ambiente tabular, treinado com SARSA clássico.",
      "Rodei um pipeline que treina e avalia ambos em dois cruzamentos, depois mede convergência, recuperação a um choque súbito de demanda e uma ablação do fator de desconto.",
      "Acompanhei vazão, tamanho médio de fila e recuperação após o choque, gravei saídas em CSV com gráficos comparativos e usei visualização em Pygame para treino ao vivo e replay de uma execução gravada.",
    ],
    figure: {
      kind: "diagram",
      alt: "MASPY e um baseline SARSA alimentam run_experiments.py, que grava runs_output junto com plot_results.py.",
    },
    repository: "https://github.com/Dev-Maestre/Smart-Queue-Agents-W-Maspy",
  },
];

export const educationPt = {
  line: "Bacharelado em Ciência da Computação, UTFPR, 2021–2026",
};
