import type { ResearchProject } from "../lib/portfolio";
import styles from "./sections.module.css";

function ArchitectureDiagram() {
  return (
    <svg className={styles.diagram} viewBox="0 0 228 300" aria-hidden="true">
      <defs>
        <marker
          id="flow-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path className={styles.arrowHead} d="M 0 0 L 10 5 L 0 10 z" />
        </marker>
      </defs>

      <rect className={styles.group} x="4" y="4" width="196" height="112" />
      <rect className={styles.group} x="4" y="122" width="196" height="58" />
      <rect className={styles.group} x="4" y="186" width="196" height="110" />

      <text className={styles.groupLabel} x="12" y="16" fontSize="8">
        MASPY
      </text>
      <text className={styles.groupLabel} x="12" y="134" fontSize="8">
        Baseline
      </text>
      <text className={styles.groupLabel} x="12" y="198" fontSize="8">
        Pipeline
      </text>

      <rect className={styles.node} x="12" y="24" width="86" height="20" />
      <text className={styles.nodeLabel} x="55" y="34" fontSize="7">
        Intersection
      </text>
      <rect className={styles.node} x="112" y="36" width="76" height="28" />
      <text className={styles.nodeLabel} x="150" y="46" fontSize="7">
        TrafficLight
      </text>
      <text className={styles.nodeLabel} x="150" y="56" fontSize="7">
        agents
      </text>
      <rect className={styles.node} x="12" y="72" width="86" height="32" />
      <text className={styles.nodeLabel} x="55" y="84" fontSize="7">
        EnvModel
      </text>
      <text className={styles.nodeLabel} x="55" y="94" fontSize="7">
        + Q-learning
      </text>

      <rect className={styles.node} x="12" y="142" width="84" height="22" />
      <text className={styles.nodeLabel} x="54" y="153" fontSize="7">
        SARSA tabular
      </text>
      <rect className={styles.node} x="112" y="142" width="76" height="22" />
      <text className={styles.nodeLabel} x="150" y="153" fontSize="7">
        TrafficEnv
      </text>

      <rect className={styles.node} x="12" y="208" width="100" height="22" />
      <text className={styles.nodeLabel} x="62" y="219" fontSize="6.5">
        run_experiments.py
      </text>
      <rect className={styles.node} x="12" y="258" width="88" height="22" />
      <text className={styles.nodeLabel} x="56" y="269" fontSize="6.5">
        plot_results.py
      </text>
      <rect className={styles.node} x="124" y="230" width="64" height="22" />
      <text className={styles.nodeLabel} x="156" y="241" fontSize="6.5">
        runs_output/
      </text>

      <path markerEnd="url(#flow-arrow)" d="M 98 34 H 108 V 50 H 112" />
      <path markerEnd="url(#flow-arrow)" d="M 98 88 H 150 V 64" />
      <path markerEnd="url(#flow-arrow)" d="M 96 153 H 112" />
      <path markerEnd="url(#flow-arrow)" d="M 112 219 H 156 V 230" />
      <path markerEnd="url(#flow-arrow)" d="M 100 269 H 156 V 252" />
      <path markerEnd="url(#flow-arrow)" d="M 200 36 H 216 V 219 H 112" />
      <path markerEnd="url(#flow-arrow)" d="M 200 153 H 216" />
    </svg>
  );
}

export default function ProjectPlate({
  project,
  index,
}: {
  project: ResearchProject;
  index: number;
}) {
  const diagram = project.figure.kind === "diagram";

  return (
    <figure
      className={styles.plate}
      aria-label={diagram ? project.figure.alt : undefined}
    >
      {project.figure.kind === "image" ? (
        <a
          className={styles.plateLink}
          href={project.figure.href}
          target="_blank"
          rel="noreferrer"
        >
          <img src={project.figure.src} alt={project.figure.alt} />
        </a>
      ) : (
        <a
          className={styles.plateLink}
          href={project.figure.href}
          target="_blank"
          rel="noreferrer"
          aria-label={project.figure.alt}
        >
          <ArchitectureDiagram />
        </a>
      )}
      <figcaption className={styles.plateCaption}>Fig. {index + 1}</figcaption>
    </figure>
  );
}
