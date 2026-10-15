import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
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

export const metadata: Metadata = {
  title: "Wordmark",
  description: "The modern look for Werth While Events.",
};

export default function WordmarkPage() {
  return (
    <>
      <Header />
      <main id="content">
        <section className={`${styles.hero} onDark`} aria-labelledby="hero-title">
          <div className={styles.heroGrid}>
            <h1 className={styles.wordmark} id="hero-title">
              <span className={styles.werth}>Werth</span>
              <span className={styles.while}>While</span>
              <span className={styles.events}>Events</span>
            </h1>
            <div className={styles.heroCopy}>
              <p className={styles.where}>Metro Detroit and Northern Michigan</p>
              <p className={styles.kicker}>always a reason to celebrate.</p>
              <ReasonLine />
              <a className={`button ${styles.heroButton}`} href="#contact">
                I&apos;m ready to chat
              </a>
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="purpose">
          <div className={styles.wrap}>
            <h2 className={styles.statement} id="purpose">
              Planning with purpose because the details are it.
            </h2>
            <div className={styles.thesisGrid}>
              <div className={styles.copy}>
                <p>
                  Werth While Events plans weddings and the events around them. Weekend
                  getaways, bachelorette itineraries, and the day you say &ldquo;I do&rdquo;
                  are designed around your story, with the to-do list off your plate.
                </p>
                <p>
                  Most of the work happens virtually. We meet in person for site visits and
                  the gatherings that need us there. You should get to enjoy the day as the
                  guests of honor.
                </p>
                <p>
                  Danielle and Jacob handle the details as a husband-and-wife team, so the
                  logistics stay covered and the communication stays clear.
                </p>
              </div>
              <PhotoSlot src={photos.event.src} alt={photos.event.alt} aspect="landscape" />
            </div>
          </div>
        </section>

        <section className={styles.section} id="services" aria-labelledby="services-title">
          <div className={styles.wrap}>
            <p className={styles.eyebrow} id="services-title">
              Services
            </p>
            <div className={styles.serviceGrid}>
              <div>
                <h2 className={styles.serviceTitle}>Wedding coordination</h2>
                <p className={styles.price}>Starting at $1,000</p>
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
              </div>
              <div>
                <h2 className={styles.serviceTitle}>Other events</h2>
                <p className={styles.price}>Pricing based on the event</p>
                <ul className={styles.list}>
                  {otherEvents.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.sample}>
              <h3 className={styles.sampleTitle}>Sample Saturday</h3>
              <p className={styles.sampleNote}>
                A sample run of show. This is the kind of timeline we build for you. It is
                not one couple&apos;s day.
              </p>
              <dl className={styles.timeline}>
                {sampleRun.map((item) => (
                  <div className={styles.timelineRow} key={item.time}>
                    <dt>{item.time}</dt>
                    <dd>{item.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className={styles.section} id="about" aria-labelledby="about-title">
          <div className={styles.wrap}>
            <p className={styles.eyebrow} id="about-title">
              About
            </p>
            <p className={styles.aboutLead}>
              Danielle plans the experience. Jacob runs the operation. On a wedding day, you
              get both of them, all day.
            </p>
            <div className={styles.hosts}>
              <article>
                <PhotoSlot
                  src={photos.danielle.src}
                  alt={photos.danielle.alt}
                  aspect="portrait"
                />
                <h2 className={styles.hostName}>Danielle Werth</h2>
                <p className={styles.role}>Lead planner</p>
                <div className={styles.copy}>
                  <p>
                    Danielle has been planning events for as long as she can remember,
                    starting with her own birthday parties. She has a bachelor&apos;s degree
                    in communications and more than a decade in corporate events: nonprofits,
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
                <h2 className={styles.hostName}>Jacob Werth</h2>
                <p className={styles.role}>Event operations</p>
                <div className={styles.copy}>
                  <p>
                    Jacob keeps an event&apos;s logistics on track. He is an engineer with a
                    solution-oriented mind, and he likes the problems that keep a day on
                    track. His first job in events showed him what happens behind the
                    scenes, and he still watches the details.
                  </p>
                  <p>
                    Working with Danielle is a two-for-one. When he is not managing a load-in,
                    he is running, training for his next marathon, or following sports,
                    especially the Detroit Tigers.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.ask} id="contact" aria-labelledby="contact-title">
          <div className={styles.wrap}>
            <h2 className={styles.yap} id="contact-title">
              <span className={styles.seal} aria-hidden="true" />
              let&apos;s yap
            </h2>
            <div className={styles.copy}>
              <p>
                Not sure what kind of support you need? Tell us what you&apos;re thinking.
                We&apos;ll put together a package that fits the event and the budget.
              </p>
              <p>
                Or email{" "}
                <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
              </p>
            </div>
            <InquiryForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
