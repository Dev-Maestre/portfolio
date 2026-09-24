"use client";

import { useState } from "react";
import type { ResearchProject } from "../lib/portfolio";
import ProjectPlate from "./ProjectPlate";
import { usePreferences } from "./PreferencesProvider";
import styles from "./sections.module.css";

function ProjectEntry({
  project,
  index,
  viewMore,
  viewLess,
}: {
  project: ResearchProject;
  index: number;
  viewMore: string;
  viewLess: string;
}) {
  const [open, setOpen] = useState(false);
  const detailsId = `project-${project.title}`.replace(/[^a-zA-Z0-9]+/g, "-");

  return (
    <li className={`${styles.entry} ${styles.project}`}>
      <ProjectPlate project={project} index={index} />
      <div className={styles.entryCopy}>
        <h3 className={styles.entryTitle}>{project.title}</h3>
        <p className={styles.meta}>{project.period}</p>
        <p className={styles.body}>{project.summary}</p>
        {project.repository ? (
          <a className={styles.repo} href={project.repository} target="_blank" rel="noreferrer">
            github.com/Dev-Maestre/Smart-Queue-Agents-W-Maspy
          </a>
        ) : null}
        {project.details.length > 0 ? (
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
                {project.details.map((item) => (
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

export default function ProjectList() {
  const { copy, projects } = usePreferences();

  return (
    <section id="projects" className={styles.section} aria-label={copy.projects}>
      <h2 className={styles.title}>{copy.projects}</h2>
      <ol className={styles.list}>
        {projects.map((project, index) => (
          <ProjectEntry
            key={project.title}
            project={project}
            index={index}
            viewMore={copy.viewMore}
            viewLess={copy.viewLess}
          />
        ))}
      </ol>
    </section>
  );
}
