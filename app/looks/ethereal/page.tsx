import type { Metadata } from "next";
import Link from "next/link";
import { Libre_Baskerville, Inter } from "next/font/google";
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

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ethereal",
  description: "The ethereal look for Werth While Events.",
};

export default function EtherealPage() {
  return (
    <div className={`${baskerville.variable} ${inter.variable} ${styles.page}`}>
      <nav className={styles.sideNav} aria-label="Page navigation">
        <Link className={styles.navBrand} href="/looks/ethereal">
          W·W·E
        </Link>
        <div className={styles.navLinks}>
          <Link href="/looks/ethereal#services">Services</Link>
          <Link href="/looks/ethereal#about">About</Link>
          <Link href="/looks/ethereal#contact">Contact</Link>
        </div>
      </nav>

      <main id="content" className={styles.main}>
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroRing} aria-hidden="true" />
          <p className={styles.place}>Metro Detroit · Northern Michigan</p>
          <h1 id="hero-title">
            Werth While
            <span className={styles.eventsSubtle}>Events</span>
          </h1>
          <div className={styles.heroFlow}>
            <p className={styles.kicker}>always a reason to celebrate.</p>
            <ReasonLine />
          </div>
        </section>

        <section className={styles.intro} aria-labelledby="purpose">
          <div className={styles.introSplit}>
            <h2 id="purpose">Planning with purpose because the details are it.</h2>
            <div className={styles.introCopy}>
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
            </div>
          </div>
          <PhotoSlot src={photos.event.src} alt={photos.event.alt} aspect="landscape" />
        </section>

        <section className={styles.services} id="services" aria-labelledby="services-title">
          <h2 className={styles.sectionLabel} id="services-title">
            Services
          </h2>
          
          <article className={styles.serviceCard}>
            <div className={styles.serviceHeader}>
              <h3>Wedding coordination</h3>
              <p className={styles.price}>Starting at $1,000</p>
            </div>
            <p className={styles.serviceLead}>
              Whether you just got engaged or your vendors are already booked, we start
              where you need us. Day-of coordination begins months ahead, so we are
              aligned before the wedding day.
            </p>
            <ul className={styles.list}>
              {weddingInclusions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className={styles.serviceCard}>
            <div className={styles.serviceHeader}>
              <h3>Other events</h3>
              <p className={styles.price}>Pricing based on the event</p>
            </div>
            <ul className={styles.list}>
              {otherEvents.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <aside className={styles.timeline}>
            <h4>Sample Saturday</h4>
            <p className={styles.timelineNote}>
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
          </aside>
        </section>

        <section className={styles.about} id="about" aria-labelledby="about-title">
          <h2 className={styles.sectionLabel} id="about-title">
            About
          </h2>
          <p className={styles.aboutLead}>
            Danielle plans the experience. Jacob runs the operation. On a wedding day, you
            get both of them, all day.
          </p>
          
          <div className={styles.team}>
            <article className={styles.profile}>
              <PhotoSlot src={photos.danielle.src} alt={photos.danielle.alt} aspect="portrait" />
              <div className={styles.profileText}>
                <h3>Danielle Werth</h3>
                <p className={styles.role}>Lead planner</p>
                <div className={styles.bio}>
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
            </article>

            <article className={styles.profile}>
              <PhotoSlot src={photos.jacob.src} alt={photos.jacob.alt} aspect="portrait" />
              <div className={styles.profileText}>
                <h3>Jacob Werth</h3>
                <p className={styles.role}>Event operations</p>
                <div className={styles.bio}>
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
            </article>
          </div>
        </section>

        <section className={styles.contact} id="contact" aria-labelledby="contact-title">
          <div className={styles.contactInner}>
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

        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <p className={styles.footerName}>Werth While Events</p>
            <div className={styles.footerInfo}>
              <p>Metro Detroit</p>
              <p>Northern Michigan: Traverse City or Alpena</p>
              <p>
                <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              </p>
            </div>
            <div className={styles.footerLinks}>
              <Link href="/">All looks</Link>
              <Link href="/privacy">Privacy</Link>
            </div>
            <p className={styles.footerCopy}>© 2026 Werth While Events</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
