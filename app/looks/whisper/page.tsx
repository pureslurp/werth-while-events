import type { Metadata } from "next";
import Link from "next/link";
import { Spectral, Work_Sans } from "next/font/google";
import { InquiryForm } from "@/components/InquiryForm";
import { PhotoSlot } from "@/components/PhotoSlot";
import { ReasonLine } from "@/components/ReasonLine";
import {
  contactEmail,
  otherEvents,
  photos,
  sampleRun,
  weddingInclusions,
} from "@/lib/content";
import styles from "./page.module.css";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-display",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Whisper",
  description: "The minimalist look for Werth While Events.",
};

export default function WhisperPage() {
  return (
    <div className={`${spectral.variable} ${workSans.variable} ${styles.page}`}>
      <header className={styles.header}>
        <Link className={styles.logo} href="/looks/whisper">
          <span>Werth While</span>
          <span>Events</span>
        </Link>
        <nav className={styles.headerNav} aria-label="Page">
          <Link href="/looks/whisper#services">Services</Link>
          <Link href="/looks/whisper#about">About</Link>
          <Link href="/looks/whisper#contact">Contact</Link>
        </nav>
      </header>

      <main id="content" className={styles.main}>
        <section className={styles.opening} aria-labelledby="hero-title">
          <h1 id="hero-title">
            always a reason
            <br />
            to celebrate.
          </h1>
          <ReasonLine />
          <p className={styles.location}>Metro Detroit and Northern Michigan</p>
        </section>

        <section className={styles.essence}>
          <blockquote>
            <p>Planning with purpose because the details are it.</p>
          </blockquote>
        </section>

        <section className={styles.foundation}>
          <div className={styles.foundationText}>
            <p>
              Werth While Events plans weddings and the events around them. Weekend
              getaways, bachelorette itineraries, and the day you say &ldquo;I do&rdquo; are
              designed around your story, with the to-do list off your plate.
            </p>
            <p>
              Most of the work happens virtually. We meet in person for site visits and the
              gatherings that need us there. You should get to enjoy the day as the guests
              of honor.
            </p>
            <p>
              Danielle and Jacob handle the details as a husband-and-wife team, so the
              logistics stay covered and the communication stays clear.
            </p>
          </div>
          <div className={styles.foundationImage}>
            <PhotoSlot src={photos.event.src} alt={photos.event.alt} aspect="landscape" />
          </div>
        </section>

        <section className={styles.services} id="services" aria-labelledby="services-heading">
          <h2 id="services-heading">Services</h2>
          
          <article className={styles.service}>
            <header className={styles.serviceTop}>
              <h3>Wedding coordination</h3>
              <p>Starting at $1,000</p>
            </header>
            <p className={styles.serviceIntro}>
              Whether you just got engaged or your vendors are already booked, we start
              where you need us. Day-of coordination begins months ahead, so we are
              aligned before the wedding day.
            </p>
            <details className={styles.serviceDetails}>
              <summary>What&apos;s included</summary>
              <ul>
                {weddingInclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </details>
          </article>

          <article className={styles.service}>
            <header className={styles.serviceTop}>
              <h3>Other events</h3>
              <p>Pricing based on the event</p>
            </header>
            <details className={styles.serviceDetails}>
              <summary>Event types</summary>
              <ul>
                {otherEvents.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </details>
          </article>

          <aside className={styles.example}>
            <h4>Sample Saturday</h4>
            <p className={styles.exampleNote}>
              A sample run of show. This is the kind of timeline we build for you. It
              is not one couple&apos;s day.
            </p>
            <table>
              <tbody>
                {sampleRun.map((item) => (
                  <tr key={item.time}>
                    <td>{item.time}</td>
                    <td>{item.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </aside>
        </section>

        <section className={styles.team} id="about" aria-labelledby="team-heading">
          <h2 id="team-heading">About</h2>
          <p className={styles.teamIntro}>
            Danielle plans the experience. Jacob runs the operation. On a wedding day, you
            get both of them, all day.
          </p>

          <div className={styles.members}>
            <article className={styles.member}>
              <div className={styles.memberPhoto}>
                <PhotoSlot src={photos.danielle.src} alt={photos.danielle.alt} aspect="portrait" />
              </div>
              <h3>Danielle Werth</h3>
              <p className={styles.title}>Lead planner</p>
              <div className={styles.memberBio}>
                <p>
                  Danielle has been planning events for as long as she can remember, starting
                  with her own birthday parties. She has a bachelor&apos;s degree in
                  communications and more than a decade in corporate events: nonprofits,
                  sponsorships, weddings, and intimate dinner parties. She cares about the
                  details that make an event feel personal.
                </p>
                <p>
                  She and Jacob are married, and they are making their new house a home one
                  project at a time. When she is not organizing a bachelorette, writing a
                  trip itinerary, or planning a themed celebration, she is up north, at a
                  concert, in a new restaurant, or lost in a book.
                </p>
              </div>
            </article>

            <article className={styles.member}>
              <div className={styles.memberPhoto}>
                <PhotoSlot src={photos.jacob.src} alt={photos.jacob.alt} aspect="portrait" />
              </div>
              <h3>Jacob Werth</h3>
              <p className={styles.title}>Event operations</p>
              <div className={styles.memberBio}>
                <p>
                  Jacob keeps an event&apos;s logistics on track. He is an engineer with a
                  solution-oriented mind, and he likes the problems that keep a day on track.
                  His first job in events showed him what happens behind the scenes, and he
                  still watches the details.
                </p>
                <p>
                  Working with Danielle is a two-for-one. When he is not managing a load-in,
                  he is running, training for his next marathon, or following sports,
                  especially the Detroit Tigers.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className={styles.connect} id="contact" aria-labelledby="connect-heading">
          <h2 id="connect-heading">let&apos;s yap</h2>
          <div className={styles.connectText}>
            <p>
              Not sure what kind of support you need? Tell us what you&apos;re thinking.
              We&apos;ll put together a package that fits the event and the budget.
            </p>
            <p>
              Or email <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
            </p>
          </div>
          <InquiryForm />
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <p className={styles.footerName}>Werth While Events</p>
          <div className={styles.footerDetails}>
            <p>Metro Detroit</p>
            <p>Northern Michigan: Traverse City or Alpena</p>
            <p>
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© 2026 Werth While Events</p>
          <p>
            <Link href="/">All looks</Link>
            {" · "}
            <Link href="/privacy">Privacy</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
