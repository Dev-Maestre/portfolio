"use client";

import { useState } from "react";
import { experience, type Role } from "../lib/portfolio";
import styles from "./sections.module.css";

const visibleCount = 3;

function RoleEntry({ role }: { role: Role }) {
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
              {open ? "View less" : "View more"}
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
  const [open, setOpen] = useState(false);
  const visible = open ? experience : experience.slice(0, visibleCount);
  const hasMore = experience.length > visibleCount;

  return (
    <section id="experience" className={styles.section} aria-label="Experience">
      <h2 className={styles.title}>Experience</h2>
      <ol className={styles.list}>
        {visible.map((role) => (
          <RoleEntry key={`${role.company}-${role.period}`} role={role} />
        ))}
      </ol>
      {hasMore ? (
        <button
          className={styles.toggle}
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? "View less" : "View more"}
        </button>
      ) : null}
    </section>
  );
}
