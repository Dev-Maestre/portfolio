"use client";

import { useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { usePreferences } from "./PreferencesProvider";
import styles from "./ThemeSwitch.module.css";

const travel = 28;

export default function ThemeSwitch() {
  const { copy, theme, themeBusy, toggleTheme } = usePreferences();
  const dragging = useRef(false);
  const moved = useRef(false);
  const startX = useRef(0);
  const [dragOffset, setDragOffset] = useState(0);

  const isDark = theme === "dark";

  function finish(nextDark: boolean) {
    setDragOffset(0);
    if (themeBusy || nextDark === isDark) return;
    toggleTheme();
  }

  function onPointerDown(event: ReactPointerEvent<HTMLButtonElement>) {
    if (themeBusy) return;
    dragging.current = true;
    moved.current = false;
    startX.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event: ReactPointerEvent<HTMLButtonElement>) {
    if (!dragging.current || themeBusy) return;
    const delta = event.clientX - startX.current;
    if (Math.abs(delta) > 3) moved.current = true;
    const base = isDark ? travel : 0;
    const clamped = Math.min(travel, Math.max(0, base + delta)) - base;
    setDragOffset(clamped);
  }

  function onPointerUp() {
    if (!dragging.current) return;
    dragging.current = false;
    if (!moved.current) {
      setDragOffset(0);
      return;
    }
    const base = isDark ? travel : 0;
    finish(base + dragOffset >= travel / 2);
  }

  function onClick() {
    if (moved.current || themeBusy) return;
    finish(!isDark);
  }

  return (
    <div className={styles.wrap}>
      <span className={!isDark ? styles.labelOn : styles.labelOff} aria-hidden="true">
        {copy.themeToLight}
      </span>
      <div
        className={styles.track}
        data-theme-state={theme}
        data-busy={themeBusy ? "true" : "false"}
      >
        <button
          type="button"
          className={styles.knob}
          aria-label={isDark ? copy.themeToLight : copy.themeToDark}
          aria-pressed={isDark}
          disabled={themeBusy}
          style={{ transform: `translateX(${dragOffset}px)` }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onClick={onClick}
        />
      </div>
      <span className={isDark ? styles.labelOn : styles.labelOff} aria-hidden="true">
        {copy.themeToDark}
      </span>
    </div>
  );
}
