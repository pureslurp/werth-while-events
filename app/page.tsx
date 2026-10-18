import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Choose a look",
  description: "Ways to present Werth While Events.",
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
  {
    href: "/looks/garden",
    name: "Garden",
    note: "Sage, cream, and blush, with soft blobs and a botanical serif.",
  },
  {
    href: "/looks/champagne",
    name: "Champagne",
    note: "Gold, cream, and dusty rose. A quieter, more formal poster.",
  },
  {
    href: "/looks/blush",
    name: "Blush",
    note: "Dusty rose and cream, with rounded shapes and a softer type pairing.",
  },
  {
    href: "/looks/ethereal",
    name: "Ethereal",
    note: "A side wordmark and an editorial layout in taupe and stone.",
  },
  {
    href: "/looks/bloom",
    name: "Bloom",
    note: "An asymmetric page in coral and leaf green, with the plan set beside the offer.",
  },
  {
    href: "/looks/whisper",
    name: "Whisper",
    note: "A spare page. The line comes first, and the services stay tucked until you open them.",
  },
];

export default function ChooseLookPage() {
  return (
    <main id="content" className={styles.main}>
      <p className={styles.business}>Werth While Events</p>
      <h1>Choose a look</h1>
      <p className={styles.intro}>
        Same business, several ways to present it. Open one and click through the page.
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
