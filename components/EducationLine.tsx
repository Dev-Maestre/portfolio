import { education } from "../lib/portfolio";
import styles from "./sections.module.css";

export default function EducationLine() {
  return (
    <section className={styles.section} aria-label="Education">
      <h2 className={styles.title}>Education</h2>
      <p className={styles.educationLine}>{education.line}</p>
    </section>
  );
}
