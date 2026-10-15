import Link from "next/link";
import { contactEmail } from "@/lib/content";
import styles from "./chrome.module.css";

export function Footer() {
  return (
    <footer className={`${styles.footer} onDark`}>
      <div className={styles.footerInner}>
        <p className={styles.footerName}>Werth While Events</p>
        <div className={styles.places}>
          <p>Metro Detroit</p>
          <p>Northern Michigan: Traverse City or Alpena</p>
          <p>
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </p>
        </div>
        <div className={styles.legal}>
          <p>© 2026 Werth While Events</p>
          <Link href="/">All looks</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
