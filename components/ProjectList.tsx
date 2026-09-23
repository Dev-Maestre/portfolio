"use client";

import { useState } from "react";
import { projects, type ResearchProject } from "../lib/portfolio";
import ProjectPlate from "./ProjectPlate";
import styles from "./sections.module.css";

function ProjectEntry({ project, index }: { project: ResearchProject; index: number }) {
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
              {open ? "View less" : "View more"}
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
  return (
    <section id="projects" className={styles.section} aria-label="Projects">
      <h2 className={styles.title}>Projects</h2>
      <ol className={styles.list}>
        {projects.map((project, index) => (
          <ProjectEntry key={project.title} project={project} index={index} />
        ))}
      </ol>
    </section>
  );
}
