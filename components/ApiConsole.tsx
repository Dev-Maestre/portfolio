"use client";

import { useState } from "react";
import styles from "./ApiConsole.module.css";

const endpoints = [
  { value: "/api/profile", label: "GET /api/profile", file: "app/api/profile/route.ts" },
  { value: "/api/experience", label: "GET /api/experience", file: "app/api/experience/route.ts" },
  { value: "/api/projects", label: "GET /api/projects", file: "app/api/projects/route.ts" },
];

type Slip = {
  status: number;
  statusText: string;
  ms: number;
  contentType: string;
  poweredBy: string;
  body: unknown;
};

const tokenPattern =
  /"(?:\\.|[^"\\])*"(?=\s*:)|"(?:\\.|[^"\\])*"|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?|\b(?:true|false|null)\b/g;

function tokenKind(token: string, source: string, start: number) {
  if (token.startsWith('"')) {
    return /^\s*:/.test(source.slice(start + token.length)) ? styles.key : styles.string;
  }
  if (token === "true" || token === "false") return styles.bool;
  if (token === "null") return styles.nil;
  return styles.number;
}

function JsonText({ value }: { value: unknown }) {
  const text = JSON.stringify(value, null, 2);
  const nodes = [];
  let last = 0;
  let index = 0;

  for (const match of text.matchAll(tokenPattern)) {
    const start = match.index ?? 0;
    if (start > last) {
      nodes.push(
        <span key={index} className={styles.punct}>
          {text.slice(last, start)}
        </span>,
      );
      index += 1;
    }
    const token = match[0];
    nodes.push(
      <span key={index} className={tokenKind(token, text, start)}>
        {token}
      </span>,
    );
    index += 1;
    last = start + token.length;
  }

  if (last < text.length) {
    nodes.push(
      <span key={index} className={styles.punct}>
        {text.slice(last)}
      </span>,
    );
  }

  return <pre className={styles.json}>{nodes}</pre>;
}

export default function ApiConsole() {
  const [endpoint, setEndpoint] = useState(endpoints[0].value);
  const [slip, setSlip] = useState<Slip | null>(null);
  const [failed, setFailed] = useState(false);
  const [busy, setBusy] = useState(false);
  const file = endpoints.find((item) => item.value === endpoint)?.file;

  async function execute() {
    setBusy(true);
    setFailed(false);
    try {
      const started = performance.now();
      const response = await fetch(endpoint);
      const ms = Math.max(1, Math.round(performance.now() - started));
      if (!response.ok) {
        setSlip(null);
        setFailed(true);
        return;
      }
      const body: unknown = await response.json();
      setSlip({
        status: response.status,
        statusText: response.statusText || "OK",
        ms,
        contentType: response.headers.get("content-type")?.split(";")[0] || "application/json",
        poweredBy: response.headers.get("x-powered-by") || "Next.js",
        body,
      });
    } catch {
      setSlip(null);
      setFailed(true);
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className={styles.console} aria-label="Console">
      <p className={styles.file}>{file}</p>
      <div className={styles.controls}>
        <label className={styles.field}>
          <span className={styles.label}>Endpoint</span>
          <select
            className={styles.endpoint}
            value={endpoint}
            onChange={(event) => setEndpoint(event.target.value)}
          >
            {endpoints.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
        <button className={styles.execute} type="button" onClick={execute} disabled={busy}>
          Execute
        </button>
      </div>
      <div className={styles.response} aria-live="polite" aria-label="Response">
        {failed ? <p className={styles.failure}>The response did not arrive.</p> : null}
        {slip ? (
          <>
            <p className={styles.statusLine}>
              <span className={styles.status}>
                HTTP/1.1 {slip.status} {slip.statusText}
              </span>
              <span className={styles.time}>{slip.ms}ms</span>
            </p>
            <p className={styles.metaLine}>Content-Type: {slip.contentType}</p>
            <p className={styles.metaLine}>X-Powered-By: {slip.poweredBy}</p>
            <JsonText value={slip.body} />
          </>
        ) : null}
      </div>
    </section>
  );
}
