"use client";

import styles from "./ThemePaintOverlay.module.css";
import type { Theme } from "../lib/ui";

function BgAgent() {
  return (
    <svg viewBox="0 0 48 40" width="48" height="40" aria-hidden="true">
      <rect x="1" y="10" width="30" height="22" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="11" cy="21" r="3" fill="currentColor" />
      <circle cx="21" cy="21" r="3" fill="currentColor" />
      <line x1="16" y1="2" x2="16" y2="10" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="2" r="2.5" fill="currentColor" />
      <rect x="31" y="14" width="10" height="8" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="8" cy="34" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="34" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function InkAgent() {
  return (
    <svg viewBox="0 0 48 40" width="44" height="36" aria-hidden="true">
      <rect x="4" y="12" width="22" height="18" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="11" cy="21" r="2.5" fill="currentColor" />
      <circle cx="19" cy="21" r="2.5" fill="currentColor" />
      <line x1="15" y1="4" x2="15" y2="12" stroke="currentColor" strokeWidth="2" />
      <circle cx="15" cy="4" r="2" fill="currentColor" />
      <path
        d="M28 10 L42 6 L40 14 L30 16 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <line x1="30" y1="16" x2="26" y2="28" stroke="currentColor" strokeWidth="2" />
      <circle cx="10" cy="34" r="3.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="20" cy="34" r="3.5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export const paintLanes = [
  { top: "0%", bgDelay: "0ms", inkDelay: "90ms" },
  { top: "33%", bgDelay: "120ms", inkDelay: "210ms" },
  { top: "66%", bgDelay: "240ms", inkDelay: "330ms" },
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
            <div className={styles.stroke} style={{ animationDelay: lane.bgDelay }} />
          </div>
        ))}
      </div>
      <div
        className={styles.bgAgents}
        style={{ ["--ink" as string]: next.ink }}
        aria-hidden="true"
      >
        {paintLanes.map((lane) => (
          <div
            key={`bg-${lane.top}`}
            className={styles.agent}
            style={{ top: `calc(${lane.top} + 17%)`, animationDelay: lane.bgDelay }}
          >
            <BgAgent />
          </div>
        ))}
      </div>
      <div
        className={styles.inkAgents}
        style={{ ["--ink" as string]: next.ink }}
        aria-hidden="true"
      >
        {paintLanes.map((lane) => (
          <div
            key={`ink-${lane.top}`}
            className={`${styles.agent} ${styles.inkAgent}`}
            style={{ top: `calc(${lane.top} + 17%)`, animationDelay: lane.inkDelay }}
          >
            <InkAgent />
          </div>
        ))}
      </div>
    </>
  );
}
