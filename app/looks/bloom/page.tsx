import type { Metadata } from "next";
import Link from "next/link";
import { Crimson_Text, Karla } from "next/font/google";
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

const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bloom",
  description: "The blooming look for Werth While Events.",
};

export default function BloomPage() {
  return (
    <div className={`${crimson.variable} ${karla.variable} ${styles.page}`}>
      <div className={styles.accent} aria-hidden="true" />
      
      <header className={styles.header}>
        <Link className={styles.brand} href="/looks/bloom">
          Werth While Events
        </Link>
        <nav className={styles.nav} aria-label="Page">
          <Link href="/looks/bloom#services">Services</Link>
          <Link href="/looks/bloom#about">About</Link>
          <Link href="/looks/bloom#contact">Contact</Link>
        </nav>
      </header>

      <main id="content">
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroLayout}>
            <div className={styles.heroText}>
              <h1 id="hero-title">
                Werth While Events
              </h1>
              <p className={styles.tagline}>always a reason to celebrate.</p>
              <ReasonLine />
              <p className={styles.place}>Metro Detroit and Northern Michigan</p>
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.circleDecor} />
            </div>
          </div>
        </section>

        <section className={styles.mission}>
          <div className={styles.missionContent}>
            <h2>Planning with purpose because the details are it.</h2>
            <div className={styles.missionGrid}>
              <p>
                Werth While Events plans weddings and the events around them. Weekend
                getaways, bachelorette itineraries, and the day you say &ldquo;I do&rdquo; are
                designed around your story, with the to-do list off your plate.
              </p>
              <p>
                Danielle and Jacob handle the details as a husband-and-wife team, so the
                logistics stay covered and the communication stays clear.
              </p>
            </div>
            <PhotoSlot src={photos.event.src} alt={photos.event.alt} aspect="landscape" />
          </div>
        </section>

        <section className={styles.offerings} id="services" aria-labelledby="services-title">
          <div className={styles.offeringsWrap}>
            <p className={styles.label} id="services-title">Services</p>
            
            <div className={styles.offeringMain}>
              <div className={styles.offeringContent}>
                <h2>Wedding coordination</h2>
                <p className={styles.price}>Starting at $1,000</p>
                <p>
                  Whether you just got engaged or your vendors are already booked, we start
                  where you need us. Day-of coordination begins months ahead, so we are
                  aligned before the wedding day.
                </p>
                <div className={styles.inclusions}>
                  {weddingInclusions.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
              
              <aside className={styles.rundown}>
                <h3>Sample Saturday</h3>
                <p>
                  A sample run of show. This is the kind of timeline we build for you.
                </p>
                {sampleRun.map((item) => (
                  <div key={item.time} className={styles.timeSlot}>
                    <span className={styles.time}>{item.time}</span>
                    <span className={styles.detail}>{item.detail}</span>
                  </div>
                ))}
              </aside>
            </div>

            <div className={styles.offeringAside}>
              <h2>Other events</h2>
              <p className={styles.price}>Pricing based on the event</p>
              <div className={styles.eventsList}>
                {otherEvents.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.people} id="about" aria-labelledby="about-title">
          <div className={styles.peopleWrap}>
            <p className={styles.label} id="about-title">About</p>
            <p className={styles.peopleLead}>
              Danielle plans the experience. Jacob runs the operation. On a wedding day, you
              get both of them, all day.
            </p>

            <div className={styles.personCard}>
              <div className={styles.personImage}>
                <PhotoSlot src={photos.danielle.src} alt={photos.danielle.alt} aspect="portrait" />
              </div>
              <div className={styles.personInfo}>
                <h2>Danielle Werth</h2>
                <p className={styles.personRole}>Lead planner</p>
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
            </div>

            <div className={styles.personCard}>
              <div className={styles.personImage}>
                <PhotoSlot src={photos.jacob.src} alt={photos.jacob.alt} aspect="portrait" />
              </div>
              <div className={styles.personInfo}>
                <h2>Jacob Werth</h2>
                <p className={styles.personRole}>Event operations</p>
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
            </div>
          </div>
        </section>

        <section className={styles.reach} id="contact" aria-labelledby="contact-title">
          <div className={styles.reachWrap}>
            <h2 id="contact-title">let&apos;s yap</h2>
            <p>
              Not sure what kind of support you need? Tell us what you&apos;re thinking.
              We&apos;ll put together a package that fits the event and the budget.
            </p>
            <p>
              Or email <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
            </p>
            <InquiryForm />
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div>
            <p className={styles.footerBrand}>Werth While Events</p>
            <p>© 2026</p>
          </div>
          <div className={styles.footerLocations}>
            <p>Metro Detroit</p>
            <p>Northern Michigan: Traverse City or Alpena</p>
          </div>
          <div className={styles.footerContact}>
            <p>
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </p>
            <p>
              <Link href="/">All looks</Link> · <Link href="/privacy">Privacy</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
