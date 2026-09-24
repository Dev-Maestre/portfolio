"use client";

import { profile } from "../lib/portfolio";
import { usePreferences } from "./PreferencesProvider";
import styles from "./SiteHeader.module.css";

export default function DirectActions() {
  const { copy } = usePreferences();
  const actions = [
    { href: profile.links.cv, label: copy.actionCv, external: true },
    { href: `mailto:${profile.links.email}`, label: copy.actionEmail, external: false },
    { href: profile.links.linkedin, label: copy.actionLinkedin, external: true },
    { href: profile.links.github, label: copy.actionGithub, external: true },
  ];

  return (
    <ul className={styles.list}>
      {actions.map((item) => (
        <li key={item.label}>
          <a
            className={styles.link}
            href={item.href}
            {...(item.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {item.label}
            {item.external ? (
              <span className={styles.srOnly}>{copy.opensInNewTab}</span>
            ) : null}
          </a>
        </li>
      ))}
    </ul>
  );
}
