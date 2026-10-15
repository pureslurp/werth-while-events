import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { contactEmail } from "@/lib/content";
import styles from "./privacy.module.css";

export const metadata: Metadata = {
  title: "Privacy",
  description: "What Werth While Events does with an inquiry sent from this site.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="content" className={styles.main}>
        <h1>Privacy</h1>
        <div className={styles.copy}>
          <p>
            When you send an inquiry on this site, we collect your name, email address,
            event type, a rough date if you share one, where the event is, and what you
            tell us you need.
          </p>
          <p>
            That note is emailed to{" "}
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a> so Danielle and Jacob
            can reply. We do not sell it, and we do not add you to a mailing list.
          </p>
          <p>
            If you email that address directly, the message stays in that inbox.
          </p>
          <p>
            The form is delivered with Web3Forms. How they process a submission is
            described in the{" "}
            <a href="https://web3forms.com/privacy">Web3Forms privacy policy</a>.
          </p>
          <p>
            The site is hosted on Vercel, which keeps standard server logs for security
            and operations. This page does not run an ad tracker.
          </p>
          <p>
            <Link href="/">Back to Werth While Events</Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
