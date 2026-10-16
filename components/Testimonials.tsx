"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/lib/content";
import styles from "./Testimonials.module.css";

const count = testimonials.length;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduceMotion || paused) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, 5200);
    return () => window.clearInterval(id);
  }, [paused, reduceMotion]);

  function go(next: number) {
    setIndex((next + count) % count);
  }

  return (
    <section
      className={styles.section}
      aria-roledescription="carousel"
      aria-label="Kind words"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        const next = event.relatedTarget;
        if (!(next instanceof Node) || !event.currentTarget.contains(next)) setPaused(false);
      }}
    >
      <p className={styles.eyebrow}>Kind words</p>
      <div
        className={styles.viewport}
        aria-live="polite"
        onPointerDown={(event) => {
          event.currentTarget.dataset.start = String(event.clientX);
        }}
        onPointerUp={(event) => {
          const start = Number(event.currentTarget.dataset.start);
          delete event.currentTarget.dataset.start;
          if (!Number.isFinite(start)) return;
          const delta = event.clientX - start;
          if (delta > 48) go(index - 1);
          if (delta < -48) go(index + 1);
        }}
      >
        <div
          className={reduceMotion ? styles.track : `${styles.track} ${styles.motion}`}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((item, itemIndex) => (
            <blockquote
              className={styles.slide}
              key={`${item.name}-${itemIndex}`}
              aria-hidden={itemIndex !== index}
            >
              <p>{item.quote}</p>
              <footer>
                <cite>{item.name}</cite>
                <span>{item.detail}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
      <div className={styles.controls}>
        <button type="button" className={styles.control} onClick={() => go(index - 1)}>
          Previous
        </button>
        <div className={styles.dots}>
          {testimonials.map((item, itemIndex) => (
            <button
              key={`${item.name}-${itemIndex}`}
              type="button"
              className={itemIndex === index ? `${styles.dot} ${styles.dotOn}` : styles.dot}
              aria-label={`Show note from ${item.name}`}
              aria-current={itemIndex === index ? "true" : undefined}
              onClick={() => go(itemIndex)}
            />
          ))}
        </div>
        <button type="button" className={styles.control} onClick={() => go(index + 1)}>
          Next
        </button>
      </div>
    </section>
  );
}
