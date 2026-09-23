import { profile } from "../lib/portfolio";
import styles from "./sections.module.css";

export default function Summary() {
  return (
    <section id="summary" className={styles.summary} aria-label="Summary">
      <div className={styles.identity}>
        <figure className={styles.portrait}>
          <img
            className={styles.portraitImage}
            src={profile.portrait}
            alt="Gabriel Maestre Costa"
            width={400}
            height={500}
          />
          {profile.portraitPending ? (
            <figcaption className={styles.portraitCaption}>Photograph to follow</figcaption>
          ) : null}
        </figure>
        <div className={styles.identityCopy}>
          <p className={styles.headline}>{profile.headline}</p>
          {profile.paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
          <p className={styles.location}>{profile.location}</p>
        </div>
      </div>
    </section>
  );
}
