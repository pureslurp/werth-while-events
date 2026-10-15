import Link from "next/link";
import styles from "./chrome.module.css";

const links = [
  { href: "/looks/wordmark#about", label: "About" },
  { href: "/looks/wordmark#services", label: "Services" },
  { href: "/looks/wordmark#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className={`${styles.header} onDark`}>
      <div className={styles.inner}>
        <Link className={styles.brand} href="/looks/wordmark">
          Werth While Events
        </Link>
        <nav className={styles.nav} aria-label="Page">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
