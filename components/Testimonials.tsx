"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/lib/content";
import styles from "./Testimonials.module.css";

export function Testimonials() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  const loop = reduceMotion ? testimonials : [...testimonials, ...testimonials];

  return (
    <section className={styles.bar} aria-labelledby="kind-words-heading">
      <h2 className={styles.heading} id="kind-words-heading">
        Kind words
      </h2>
      <div className={reduceMotion ? styles.static : styles.marquee}>
        <div className={reduceMotion ? styles.staticTrack : styles.track}>
          {loop.map((item, itemIndex) => (
            <figure className={styles.chip} key={`${item.name}-${itemIndex}`}>
              <blockquote>
                <p>{item.quote}</p>
              </blockquote>
              <figcaption>
                <span className={styles.name}>{item.name}</span>
                <span className={styles.detail}>{item.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
