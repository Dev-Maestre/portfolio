"use client";

import { usePreferences } from "./PreferencesProvider";
import styles from "./TechnologyList.module.css";
import sectionStyles from "./sections.module.css";

export default function TechnologyList() {
  const { copy, technologies } = usePreferences();

  return (
    <section
      id="technologies"
      className={sectionStyles.section}
      aria-label={copy.technologies}
    >
      <h2 className={sectionStyles.title}>{copy.technologies}</h2>
      <div className={styles.note}>
        <p className={styles.file}>{copy.techNoteFile}</p>
        <dl className={styles.list}>
          {technologies.map((group) => (
            <div key={group.label} className={styles.group}>
              <dt className={styles.label}>{group.label}</dt>
              <dd className={styles.items}>{group.items.join(" / ")}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
