"use client";

import DirectActions from "./DirectActions";
import { usePreferences } from "./PreferencesProvider";
import ThemeSwitch from "./ThemeSwitch";
import styles from "./SiteHeader.module.css";

export default function SiteHeader() {
  const { copy, locale, toggleLocale } = usePreferences();

  const sections = [
    { href: "#experience", label: copy.experience },
    { href: "#technologies", label: copy.technologies },
    { href: "#projects", label: copy.projects },
    { href: "#contact", label: copy.contact },
  ];

  return (
    <header className={styles.masthead}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <p className={styles.kicker}>{copy.portfolio}</p>
          <div className={styles.prefs} role="group" aria-label="Preferences">
            <button
              className={styles.pref}
              type="button"
              onClick={toggleLocale}
              aria-label={locale === "pt-BR" ? "Switch to English" : "Mudar para português"}
            >
              <svg
                className={styles.globe}
                viewBox="0 0 24 24"
                width="18"
                height="18"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <ellipse cx="12" cy="12" rx="4" ry="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M4.5 7.5c2.2 1 4.8 1.5 7.5 1.5s5.3-.5 7.5-1.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M4.5 16.5c2.2-1 4.8-1.5 7.5-1.5s5.3.5 7.5 1.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
              <span className={styles.localePair} aria-hidden="true">
                <span className={locale === "pt-BR" ? styles.localeActive : undefined}>pt-br</span>
                <span className={styles.localeSep}>|</span>
                <span className={locale === "en" ? styles.localeActive : undefined}>en-us</span>
              </span>
            </button>
            <ThemeSwitch />
          </div>
        </div>
        <div className={styles.groups}>
          <nav aria-label={copy.sectionsNav}>
            <ul className={styles.list}>
              {sections.map((item) => (
                <li key={item.href}>
                  <a className={styles.link} href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label={copy.actionsNav}>
            <DirectActions />
          </nav>
        </div>
      </div>
    </header>
  );
}
