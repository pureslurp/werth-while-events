import type { Metadata } from "next";
import Link from "next/link";
import { Lora, Quicksand } from "next/font/google";
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

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blush",
  description: "The romantic look for Werth While Events.",
};

export default function BlushPage() {
  return (
    <div className={`${lora.variable} ${quicksand.variable} ${styles.page}`}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link className={styles.brand} href="/looks/blush">
            Werth While Events
          </Link>
          <nav className={styles.nav} aria-label="Page">
            <Link href="/looks/blush#about">About</Link>
            <Link href="/looks/blush#services">Services</Link>
            <Link href="/looks/blush#contact">Contact</Link>
          </nav>
        </div>
      </header>
      <main id="content">
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroBg} aria-hidden="true">
            <div className={styles.blob1} />
            <div className={styles.blob2} />
          </div>
          <div className={styles.heroContent}>
            <p className={styles.place}>Metro Detroit and Northern Michigan</p>
            <h1 id="hero-title">
              <span className={styles.name}>Werth While</span>
              <span className={styles.events}>Events</span>
            </h1>
            <p className={styles.kicker}>always a reason to celebrate.</p>
            <ReasonLine />
            <a className={`button ${styles.heroButton}`} href="#contact">
              I&apos;m ready to chat
            </a>
          </div>
        </section>

        <section className={styles.letter} aria-labelledby="purpose">
          <div className={styles.curve} aria-hidden="true" />
          <h2 id="purpose">Planning with purpose because the details are it.</h2>
          <div className={styles.letterGrid}>
            <div className={styles.copy}>
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
            <PhotoSlot src={photos.event.src} alt={photos.event.alt} aspect="landscape" />
          </div>
        </section>

        <section className={styles.section} id="services" aria-labelledby="services-title">
          <p className={styles.eyebrow} id="services-title">
            Services
          </p>
          <div className={styles.offer}>
            <div>
              <h2>Wedding coordination</h2>
              <p className={styles.price}>Starting at $1,000</p>
              <p className={styles.lead}>
                Whether you just got engaged or your vendors are already booked, we start
                where you need us. Day-of coordination begins months ahead, so we are
                aligned before the wedding day.
              </p>
              <ul className={styles.list}>
                {weddingInclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className={styles.saturday}>
                <div className={styles.saturdayInner}>
                  <h3>Sample Saturday</h3>
                  <p className={styles.note}>
                    A sample run of show. This is the kind of timeline we build for you. It
                    is not one couple&apos;s day.
                  </p>
                  <dl>
                    {sampleRun.map((item) => (
                      <div key={item.time}>
                        <dt>{item.time}</dt>
                        <dd>{item.detail}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
            <div>
              <h2>Other events</h2>
              <p className={styles.price}>Pricing based on the event</p>
              <ul className={styles.list}>
                {otherEvents.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.section} id="about" aria-labelledby="about-title">
          <p className={styles.eyebrow} id="about-title">
            About
          </p>
          <p className={styles.aboutLead}>
            Danielle plans the experience. Jacob runs the operation. On a wedding day, you
            get both of them, all day.
          </p>
          <div className={styles.hosts}>
            <article>
              <PhotoSlot src={photos.danielle.src} alt={photos.danielle.alt} aspect="portrait" />
              <h2>Danielle Werth</h2>
              <p className={styles.role}>Lead planner</p>
              <div className={styles.copy}>
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
            <article>
              <PhotoSlot src={photos.jacob.src} alt={photos.jacob.alt} aspect="portrait" />
              <h2>Jacob Werth</h2>
              <p className={styles.role}>Event operations</p>
              <div className={styles.copy}>
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

        <section className={styles.ask} id="contact" aria-labelledby="contact-title">
          <div className={styles.askShape} aria-hidden="true" />
          <h2 id="contact-title">let&apos;s yap</h2>
          <div className={styles.copy}>
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
        <p className={styles.footerName}>Werth While Events</p>
        <p>Metro Detroit</p>
        <p>Northern Michigan: Traverse City or Alpena</p>
        <p>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </p>
        <p className={styles.legal}>
          <Link href="/">All looks</Link>
          <Link href="/privacy">Privacy</Link>
        </p>
        <p>© 2026 Werth While Events</p>
      </footer>
    </div>
  );
}
