"use client";

import { FormEvent, useState } from "react";
import DirectActions from "./DirectActions";
import { usePreferences } from "./PreferencesProvider";
import styles from "./sections.module.css";

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function ContactPanel() {
  const { copy } = usePreferences();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [notice, setNotice] = useState("");
  const [noticeTone, setNoticeTone] = useState<"success" | "error" | "">("");
  const [sending, setSending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setErrors({});
    setNotice("");
    setNoticeTone("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = (await response.json().catch(() => ({}))) as {
        errors?: FieldErrors;
        error?: string;
      };

      if (response.ok) {
        setName("");
        setEmail("");
        setMessage("");
        setNotice(copy.messageSent);
        setNoticeTone("success");
        return;
      }

      setErrors(data.errors ?? {});
      if (!data.errors) {
        setNotice(copy.messageNotSent);
        setNoticeTone("error");
      }
    } catch {
      setNotice(copy.messageNotSent);
      setNoticeTone("error");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className={`${styles.section} ${styles.contact}`} aria-label={copy.contact}>
      <h2 className={styles.title}>{copy.contact}</h2>
      <nav className={styles.links} aria-label={copy.actionsNav}>
        <DirectActions />
      </nav>
      <form className={styles.form} method="post" action="#contact" onSubmit={onSubmit} noValidate>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="contact-name">
            {copy.name}
          </label>
          <input
            className={styles.input}
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            onChange={(event) => setName(event.target.value)}
          />
          {errors.name ? (
            <p className={styles.error} id="contact-name-error">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="contact-email">
            {copy.email}
          </label>
          <input
            className={styles.input}
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            onChange={(event) => setEmail(event.target.value)}
          />
          {errors.email ? (
            <p className={styles.error} id="contact-email-error">
              {errors.email}
            </p>
          ) : null}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="contact-message">
            {copy.message}
          </label>
          <textarea
            className={styles.textarea}
            id="contact-message"
            name="message"
            value={message}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={
              errors.message ? "contact-message-error" : undefined
            }
            onChange={(event) => setMessage(event.target.value)}
          />
          {errors.message ? (
            <p className={styles.error} id="contact-message-error">
              {errors.message}
            </p>
          ) : null}
        </div>
        <button className={styles.submit} type="submit" disabled={sending}>
          {sending ? copy.sending : copy.send}
        </button>
        {notice ? (
          <p
            className={`${styles.notice} ${
              noticeTone === "success" ? styles.noticeSuccess : styles.noticeError
            }`}
            role={noticeTone === "error" ? "alert" : "status"}
          >
            {notice}
          </p>
        ) : null}
      </form>
    </section>
  );
}
