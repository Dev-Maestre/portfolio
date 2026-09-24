"use client";

import { usePreferences } from "./PreferencesProvider";
import styles from "./sections.module.css";

export default function PageTitle() {
  const { profile } = usePreferences();
  return <h1 className={styles.name}>{profile.name}</h1>;
}
