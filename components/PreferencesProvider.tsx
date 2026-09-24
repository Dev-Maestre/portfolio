"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  education,
  experience,
  profile,
  projects,
  technologies,
} from "../lib/portfolio";
import {
  educationPt,
  experiencePt,
  profilePt,
  projectsPt,
  technologiesPt,
} from "../lib/portfolio.pt";
import { ui, type Locale, type Theme, type UiCopy } from "../lib/ui";

type Preferences = {
  locale: Locale;
  theme: Theme;
  copy: UiCopy;
  profile: typeof profile;
  experience: typeof experience;
  projects: typeof projects;
  technologies: typeof technologies;
  education: typeof education;
  setLocale: (locale: Locale) => void;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  toggleLocale: () => void;
};

const PreferencesContext = createContext<Preferences | null>(null);

const localeKey = "portfolio-locale";
const themeKey = "portfolio-theme";

function readLocale(): Locale {
  if (typeof window === "undefined") return "en";
  return window.localStorage.getItem(localeKey) === "pt-BR" ? "pt-BR" : "en";
}

function readTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.localStorage.getItem(themeKey) === "dark" ? "dark" : "light";
}

function applyDocument(locale: Locale, theme: Theme) {
  document.documentElement.lang = locale === "pt-BR" ? "pt-BR" : "en";
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
}

export default function PreferencesProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    const nextLocale = readLocale();
    const nextTheme = readTheme();
    setLocaleState(nextLocale);
    setThemeState(nextTheme);
    applyDocument(nextLocale, nextTheme);
  }, []);

  function setLocale(next: Locale) {
    setLocaleState(next);
    window.localStorage.setItem(localeKey, next);
    applyDocument(next, theme);
  }

  function setTheme(next: Theme) {
    setThemeState(next);
    window.localStorage.setItem(themeKey, next);
    applyDocument(locale, next);
  }

  const value: Preferences = {
    locale,
    theme,
    copy: ui[locale],
    profile: locale === "pt-BR" ? profilePt : profile,
    experience: locale === "pt-BR" ? experiencePt : experience,
    projects: locale === "pt-BR" ? projectsPt : projects,
    technologies: locale === "pt-BR" ? technologiesPt : technologies,
    education: locale === "pt-BR" ? educationPt : education,
    setLocale,
    setTheme,
    toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
    toggleLocale: () => setLocale(locale === "pt-BR" ? "en" : "pt-BR"),
  };

  return (
    <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const value = useContext(PreferencesContext);
  if (!value) {
    throw new Error("usePreferences must be used within PreferencesProvider");
  }
  return value;
}
