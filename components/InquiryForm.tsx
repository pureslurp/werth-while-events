"use client";

import { FormEvent, useEffect, useRef, useState, type ReactNode } from "react";
import { contactEmail, eventTypes, places } from "@/lib/content";
import type { FieldName } from "@/lib/inquiry";
import styles from "./InquiryForm.module.css";

type FieldErrors = Partial<Record<FieldName, string>>;

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent" }
  | { kind: "error"; message: string };

const sendError = "That didn't send. Try again, or email";
const unconfiguredError = "This form is not ready to send yet. Email";

export function InquiryForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status.kind === "sent") statusRef.current?.focus();
  }, [status]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      eventType: String(data.get("eventType") ?? ""),
      date: String(data.get("date") ?? ""),
      where: String(data.get("where") ?? ""),
      message: String(data.get("message") ?? ""),
      fax_number: String(data.get("fax_number") ?? ""),
    };

    setStatus({ kind: "sending" });
    setErrors({});

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
        fields?: FieldErrors;
      } | null;

      if (response.ok && body?.ok) {
        form.reset();
        setStatus({ kind: "sent" });
        return;
      }

      if (body?.error === "invalid" && body.fields) {
        setErrors(body.fields);
        setStatus({ kind: "idle" });
        const first = (Object.keys(body.fields) as FieldName[]).find((key) => body.fields?.[key]);
        if (first) {
          const field = form.elements.namedItem(first);
          if (field instanceof HTMLElement) field.focus();
        }
        return;
      }

      if (body?.error === "unconfigured") {
        setStatus({ kind: "error", message: unconfiguredError });
        return;
      }

      setStatus({ kind: "error", message: sendError });
    } catch {
      setStatus({ kind: "error", message: sendError });
    }
  }

  if (status.kind === "sent") {
    return (
      <div className={styles.successBlock} role="status" tabIndex={-1} ref={statusRef}>
        <p className={styles.success}>Inquiry sent.</p>
        <p>Danielle and Jacob will write back.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="fax_number">Fax number</label>
        <input id="fax_number" name="fax_number" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <Field
        id="name"
        label="Your name"
        error={errors.name}
      >
        <input id="name" name="name" type="text" autoComplete="name" className={styles.control} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />
      </Field>

      <Field id="email" label="Email" error={errors.email}>
        <input id="email" name="email" type="email" autoComplete="email" className={styles.control} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />
      </Field>

      <Field id="eventType" label="Event type" error={errors.eventType}>
        <select id="eventType" name="eventType" className={styles.control} defaultValue="" aria-invalid={Boolean(errors.eventType)} aria-describedby={errors.eventType ? "eventType-error" : undefined}>
          <option value="" disabled>
            Choose one
          </option>
          {eventTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </Field>

      <Field id="where" label="Where" error={errors.where}>
        <select id="where" name="where" className={styles.control} defaultValue="" aria-invalid={Boolean(errors.where)} aria-describedby={errors.where ? "where-error" : undefined}>
          <option value="" disabled>
            Choose one
          </option>
          {places.map((place) => (
            <option key={place} value={place}>
              {place}
            </option>
          ))}
        </select>
      </Field>

      <Field id="date" label="Rough date" error={errors.date} wide>
        <input id="date" name="date" type="text" className={styles.control} placeholder="June 2027" aria-invalid={Boolean(errors.date)} aria-describedby={errors.date ? "date-error" : undefined} />
      </Field>

      <Field id="message" label="What do you need help with?" error={errors.message} wide>
        <textarea id="message" name="message" className={styles.control} rows={5} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} />
      </Field>

      {status.kind === "error" ? (
        <p className={styles.formError} role="alert">
          {status.message}{" "}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
        </p>
      ) : null}

      <div className={styles.actions}>
        <button className="button" type="submit" disabled={status.kind === "sending"}>
          {status.kind === "sending" ? "Sending the inquiry…" : "Send the inquiry"}
        </button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  wide,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  wide?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={wide ? `${styles.field} ${styles.wide}` : styles.field}>
      <label htmlFor={id}>{label}</label>
      {children}
      {error ? (
        <p className={styles.error} id={`${id}-error`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
