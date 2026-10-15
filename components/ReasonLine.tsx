"use client";

import { useEffect, useState } from "react";
import { reasons } from "@/lib/content";
import styles from "./ReasonLine.module.css";

export function ReasonLine() {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % reasons.length);
    }, 3400);
    return () => window.clearInterval(id);
  }, []);

  const reason = reasons[index];

  return (
    <p className={styles.reason}>
      <span key={reason} className={reduceMotion ? undefined : styles.swap}>
        {reason}
      </span>
    </p>
  );
}
