export const contactEmail = "werthwhileevents@gmail.com";

export const eventTypes = [
  "Wedding",
  "Weekend trip",
  "Date night in Detroit",
  "Themed party",
  "Baby shower",
  "Corporate event",
  "Welcome party",
  "Bachelorette",
  "Other",
] as const;

export const places = [
  "Metro Detroit",
  "Traverse City",
  "Alpena",
  "Other",
] as const;

export const reasons = [
  "the day you say I do",
  "a weekend away",
  "a bachelorette",
  "a date night in Detroit",
] as const;

export const weddingInclusions = [
  "Custom timeline built for you",
  "Unlimited vendor recommendations",
  "Two or more venue site visits",
  "Venue and vendor management",
  "Vendor communication",
  "Rehearsal and ceremony support",
  "Unlimited communication",
  "Setup, teardown, and cleanup",
  "Item research and sourcing",
  "Day-of wedding errands",
  "Danielle and Jacob on site all day as your coordinators",
];

export const otherEvents = [
  "Weekend trip",
  "Date night in Detroit",
  "Themed party",
  "Baby shower",
  "Corporate event",
  "Welcome party",
  "Bachelorette",
  "Other",
];

export const sampleRun = [
  { time: "12:00 pm", detail: "Vendor check-in and setup" },
  { time: "2:00 pm", detail: "Ceremony details confirmed on site" },
  { time: "3:30 pm", detail: "Family photos, with the timeline in Jacob's hands" },
  { time: "4:00 pm", detail: "Ceremony" },
  { time: "4:45 pm", detail: "Cocktail hour, Danielle with the vendors" },
  { time: "6:00 pm", detail: "Reception entrance" },
  { time: "9:30 pm", detail: "Last dance, teardown, and cleanup" },
];

/**
 * Set `src` after adding a file under public/photos.
 * Example: "/photos/danielle.jpg"
 */
export const photos = {
  event: { src: null as string | null, alt: "A Werth While event" },
  danielle: { src: null as string | null, alt: "Danielle Werth" },
  jacob: { src: null as string | null, alt: "Jacob Werth" },
};
