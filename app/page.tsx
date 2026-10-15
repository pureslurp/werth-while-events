import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Choose a look",
  description: "Three ways to present Werth While Events.",
};

const looks = [
  {
    href: "/looks/wordmark",
    name: "Wordmark",
    note: "The modern one. A dark first screen and a large condensed name.",
  },
  {
    href: "/looks/invitation",
    name: "Invitation",
    note: "Set like a paper invitation. The name sits at the center, and the offer reads as a letter.",
  },
  {
    href: "/looks/the-day",
    name: "The day",
    note: "The plan comes first. A sample Saturday is on the opening screen.",
  },
];

export default function ChooseLookPage() {
  return (
    <main id="content" className={styles.main}>
      <p className={styles.business}>Werth While Events</p>
      <h1>Three looks</h1>
      <p className={styles.intro}>
        Same business, three ways to present it. Open one and click through the page.
      </p>
      <ul className={styles.list}>
        {looks.map((look) => (
          <li key={look.href}>
            <h2>{look.name}</h2>
            <p>{look.note}</p>
            <Link href={look.href}>Open this look</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
