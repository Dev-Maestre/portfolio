export type Locale = "en" | "pt-BR";
export type Theme = "light" | "dark";

export type UiCopy = {
  portfolio: string;
  experience: string;
  projects: string;
  technologies: string;
  education: string;
  contact: string;
  sectionsNav: string;
  actionsNav: string;
  opensInNewTab: string;
  viewMore: string;
  viewLess: string;
  endpoint: string;
  execute: string;
  response: string;
  responseFailed: string;
  name: string;
  email: string;
  message: string;
  send: string;
  sending: string;
  messageSent: string;
  messageNotSent: string;
  themeToDark: string;
  themeToLight: string;
  languageToPt: string;
  languageToEn: string;
  actionCv: string;
  actionEmail: string;
  actionLinkedin: string;
  actionGithub: string;
  techNoteFile: string;
  techNoteEnd: string;
};

export const ui: Record<Locale, UiCopy> = {
  en: {
    portfolio: "Portfolio",
    experience: "Experience",
    projects: "Projects",
    technologies: "Technologies",
    education: "Education",
    contact: "Contact",
    sectionsNav: "Sections",
    actionsNav: "Direct actions",
    opensInNewTab: " (opens in a new tab)",
    viewMore: "View more",
    viewLess: "View less",
    endpoint: "Endpoint",
    execute: "Execute",
    response: "Response",
    responseFailed: "The response did not arrive.",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",
    sending: "Sending",
    messageSent: "Your message was sent.",
    messageNotSent: "Your message was not sent.",
    themeToDark: "Dark",
    themeToLight: "Light",
    languageToPt: "PT",
    languageToEn: "EN",
    actionCv: "CV",
    actionEmail: "Email",
    actionLinkedin: "LinkedIn",
    actionGithub: "GitHub",
    techNoteFile: "notes/technologies.txt",
    techNoteEnd: "— end of note —",
  },
  "pt-BR": {
    portfolio: "Portfólio",
    experience: "Experiência",
    projects: "Projetos",
    technologies: "Tecnologias",
    education: "Educação",
    contact: "Contato",
    sectionsNav: "Seções",
    actionsNav: "Ações diretas",
    opensInNewTab: " (abre em uma nova aba)",
    viewMore: "Ver mais",
    viewLess: "Ver menos",
    endpoint: "Endpoint",
    execute: "Executar",
    response: "Resposta",
    responseFailed: "A resposta não chegou.",
    name: "Nome",
    email: "E-mail",
    message: "Mensagem",
    send: "Enviar",
    sending: "Enviando",
    messageSent: "Sua mensagem foi enviada.",
    messageNotSent: "Sua mensagem não foi enviada.",
    themeToDark: "Escuro",
    themeToLight: "Claro",
    languageToPt: "PT",
    languageToEn: "EN",
    actionCv: "CV",
    actionEmail: "E-mail",
    actionLinkedin: "LinkedIn",
    actionGithub: "GitHub",
    techNoteFile: "notas/tecnologias.txt",
    techNoteEnd: "— fim da nota —",
  },
};
