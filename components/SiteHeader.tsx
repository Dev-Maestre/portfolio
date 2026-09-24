"use client";

import DirectActions from "./DirectActions";
import { usePreferences } from "./PreferencesProvider";
import styles from "./SiteHeader.module.css";

export default function SiteHeader() {
  const { copy, theme, locale, toggleTheme, toggleLocale } = usePreferences();

  const sections = [
    { href: "#experience", label: copy.experience },
    { href: "#projects", label: copy.projects },
    { href: "#contact", label: copy.contact },
    { href: "#technologies", label: copy.technologies },
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
              aria-pressed={locale === "pt-BR"}
            >
              {locale === "pt-BR" ? copy.languageToEn : copy.languageToPt}
            </button>
            <button
              className={styles.pref}
              type="button"
              onClick={toggleTheme}
              aria-pressed={theme === "dark"}
            >
              {theme === "dark" ? copy.themeToLight : copy.themeToDark}
            </button>
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
