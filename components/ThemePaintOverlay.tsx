"use client";

import styles from "./ThemePaintOverlay.module.css";
import type { Theme } from "../lib/ui";

export const paintLanes = [
  {
    top: "0%",
    surfaceDelay: "0ms",
    typeDelay: "380ms",
    surfaceY: "9%",
    typeY: "23%",
  },
  {
    top: "33%",
    surfaceDelay: "260ms",
    typeDelay: "640ms",
    surfaceY: "42%",
    typeY: "56%",
  },
  {
    top: "66%",
    surfaceDelay: "520ms",
    typeDelay: "900ms",
    surfaceY: "75%",
    typeY: "89%",
  },
];

export const palette = {
  light: { bg: "#f3efe4", ink: "#1a1612" },
  dark: { bg: "#1e1b17", ink: "#ebe4d6" },
};

export default function ThemePaintOverlay({
  from,
  target,
}: {
  from: Theme;
  target: Theme;
}) {
  const origin = palette[from];
  const next = palette[target];

  return (
    <>
      <div
        className={styles.stage}
        style={{
          ["--from" as string]: origin.bg,
          ["--paint" as string]: next.bg,
        }}
        aria-hidden="true"
      >
        {paintLanes.map((lane) => (
          <div key={lane.top} className={styles.band} style={{ top: lane.top }}>
            <div className={styles.stroke} style={{ animationDelay: lane.surfaceDelay }} />
          </div>
        ))}
      </div>

      <div
        className={styles.surfaceAgents}
        style={{ ["--agent" as string]: next.ink }}
        aria-hidden="true"
      >
        {paintLanes.map((lane) => (
          <div
            key={`surface-${lane.top}`}
            className={`${styles.agent} ${styles.surfaceAgent}`}
            style={{ top: lane.surfaceY, animationDelay: lane.surfaceDelay }}
          >
            <span className={styles.icon} />
          </div>
        ))}
      </div>

      <div
        className={styles.typeAgents}
        style={{ ["--agent" as string]: next.ink }}
        aria-hidden="true"
      >
        {paintLanes.map((lane) => (
          <div
            key={`type-${lane.top}`}
            className={`${styles.agent} ${styles.typeAgent}`}
            style={{ top: lane.typeY, animationDelay: lane.typeDelay }}
          >
            <span className={styles.icon} />
          </div>
        ))}
      </div>
    </>
  );
}
