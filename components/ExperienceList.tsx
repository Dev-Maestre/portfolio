"use client";

import { useState } from "react";
import type { Role } from "../lib/portfolio";
import { usePreferences } from "./PreferencesProvider";
import styles from "./sections.module.css";

const visibleCount = 3;

function RoleEntry({
  role,
  viewMore,
  viewLess,
}: {
  role: Role;
  viewMore: string;
  viewLess: string;
}) {
  const [open, setOpen] = useState(false);
  const detailsId = `details-${role.company}-${role.period}`.replace(/[^a-zA-Z0-9]+/g, "-");

  return (
    <li className={`${styles.entry} ${styles.role}`}>
      <h3 className={styles.entryTitle}>{role.company}</h3>
      <div className={styles.entryCopy}>
        <p className={styles.meta}>
          {role.role}
          <span aria-hidden="true"> / </span>
          {role.period}
        </p>
        <p className={styles.body}>{role.summary}</p>
        {role.details.length > 0 ? (
          <>
            <button
              className={styles.toggle}
              type="button"
              aria-expanded={open}
              aria-controls={detailsId}
              onClick={() => setOpen((current) => !current)}
            >
              {open ? viewLess : viewMore}
            </button>
            {open ? (
              <ul id={detailsId} className={styles.details}>
                {role.details.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </>
        ) : null}
      </div>
    </li>
  );
}

export default function ExperienceList() {
  const { copy, experience } = usePreferences();
  const [open, setOpen] = useState(false);
  const visible = open ? experience : experience.slice(0, visibleCount);
  const hasMore = experience.length > visibleCount;

  return (
    <section id="experience" className={styles.section} aria-label={copy.experience}>
      <h2 className={styles.title}>{copy.experience}</h2>
      <ol className={styles.list}>
        {visible.map((role) => (
          <RoleEntry
            key={`${role.company}-${role.period}`}
            role={role}
            viewMore={copy.viewMore}
            viewLess={copy.viewLess}
          />
        ))}
      </ol>
      {hasMore ? (
        <button
          className={styles.toggle}
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? copy.viewLess : copy.viewMore}
        </button>
      ) : null}
    </section>
  );
}
