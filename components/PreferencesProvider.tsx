"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
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
import ThemePaintOverlay, { paintLanes } from "./ThemePaintOverlay";
import styles from "./PreferencesProvider.module.css";

type Preferences = {
  locale: Locale;
  theme: Theme;
  themeBusy: boolean;
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
const paintMs = 1400;

function readLocale(): Locale {
  if (typeof window === "undefined") return "en";
  return window.localStorage.getItem(localeKey) === "pt-BR" ? "pt-BR" : "en";
}

function readTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.localStorage.getItem(themeKey) === "dark" ? "dark" : "light";
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function applyDocument(locale: Locale, theme: Theme) {
  document.documentElement.lang = locale === "pt-BR" ? "pt-BR" : "en";
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
}

function lockScroll(scrollY: number) {
  const body = document.body;
  body.style.position = "fixed";
  body.style.top = `-${scrollY}px`;
  body.style.left = "0";
  body.style.right = "0";
  body.style.width = "100%";
}

function unlockScroll(scrollY: number) {
  const body = document.body;
  body.style.position = "";
  body.style.top = "";
  body.style.left = "";
  body.style.right = "";
  body.style.width = "";
  window.scrollTo(0, scrollY);
}

export default function PreferencesProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [theme, setThemeState] = useState<Theme>("light");
  const [paintTarget, setPaintTarget] = useState<Theme | null>(null);
  const [paintFrom, setPaintFrom] = useState<Theme>("light");
  const [inkSnapshot, setInkSnapshot] = useState<string | null>(null);
  const [headerSnapshot, setHeaderSnapshot] = useState<string | null>(null);
  const [paintScrollY, setPaintScrollY] = useState(0);
  const shellRef = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);
  const scrollLockY = useRef(0);

  useEffect(() => {
    const nextLocale = readLocale();
    const nextTheme = readTheme();
    setLocaleState(nextLocale);
    setThemeState(nextTheme);
    applyDocument(nextLocale, nextTheme);
  }, []);

  useEffect(() => {
    return () => {
      timers.current.forEach((id) => window.clearTimeout(id));
      if (document.body.style.position === "fixed") {
        unlockScroll(scrollLockY.current);
      }
    };
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

  function toggleTheme() {
    if (paintTarget) return;
    const next: Theme = theme === "dark" ? "light" : "dark";

    if (prefersReducedMotion()) {
      setTheme(next);
      return;
    }

    const shell = shellRef.current;
    const scrollY = window.scrollY;
    const header = shell?.querySelector("header");
    scrollLockY.current = scrollY;

    setPaintFrom(theme);
    setPaintScrollY(scrollY);
    setHeaderSnapshot(header?.outerHTML ?? "");
    setInkSnapshot(shell?.innerHTML ?? "");
    setPaintTarget(next);
    document.documentElement.setAttribute("data-painting", "true");
    lockScroll(scrollY);
    setTheme(next);

    timers.current.push(
      window.setTimeout(() => {
        setPaintTarget(null);
        setInkSnapshot(null);
        setHeaderSnapshot(null);
        document.documentElement.removeAttribute("data-painting");
        unlockScroll(scrollLockY.current);
        timers.current = [];
      }, paintMs),
    );
  }

  const value: Preferences = {
    locale,
    theme,
    themeBusy: paintTarget !== null,
    copy: ui[locale],
    profile: locale === "pt-BR" ? profilePt : profile,
    experience: locale === "pt-BR" ? experiencePt : experience,
    projects: locale === "pt-BR" ? projectsPt : projects,
    technologies: locale === "pt-BR" ? technologiesPt : technologies,
    education: locale === "pt-BR" ? educationPt : education,
    setLocale,
    setTheme,
    toggleTheme,
    toggleLocale: () => setLocale(locale === "pt-BR" ? "en" : "pt-BR"),
  };

  return (
    <PreferencesContext.Provider value={value}>
      <div className={styles.shell} ref={shellRef}>
        {children}
      </div>
      {inkSnapshot ? (
        <div
          className={styles.inkVeil}
          data-from={paintFrom}
          style={{ ["--paint-scroll-y" as string]: `${paintScrollY}px` }}
          aria-hidden="true"
        >
          {paintLanes.map((lane) => (
            <div
              key={lane.top}
              className={styles.inkBand}
              style={{ top: lane.top, animationDelay: lane.inkDelay }}
            >
              {lane.top === "0%" && headerSnapshot ? (
                <div
                  className={styles.inkHeader}
                  dangerouslySetInnerHTML={{ __html: headerSnapshot }}
                />
              ) : null}
              <div
                className={styles.inkBandContent}
                style={{
                  transform: `translateY(calc(-${Number.parseFloat(lane.top)}vh - var(--paint-scroll-y)))`,
                }}
                dangerouslySetInnerHTML={{ __html: inkSnapshot }}
              />
            </div>
          ))}
        </div>
      ) : null}
      {paintTarget ? <ThemePaintOverlay from={paintFrom} target={paintTarget} /> : null}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const value = useContext(PreferencesContext);
  if (!value) {
    throw new Error("usePreferences must be used within PreferencesProvider");
  }
  return value;
}
