"use client";

import { usePreferences } from "./PreferencesProvider";
import styles from "./sections.module.css";

export default function EducationLine() {
  const { copy, education } = usePreferences();

  return (
    <section className={styles.section} aria-label={copy.education}>
      <h2 className={styles.title}>{copy.education}</h2>
      <p className={styles.educationLine}>{education.line}</p>
    </section>
  );
}
