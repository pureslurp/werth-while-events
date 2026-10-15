import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Big_Shoulders, DM_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const display = Big_Shoulders({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Werth While Events",
    template: "%s · Werth While Events",
  },
  description:
    "Wedding planning and event coordination in Metro Detroit and Northern Michigan. Danielle and Jacob Werth. Day-of coordination starting at $1,000.",
  openGraph: {
    title: "Werth While Events",
    description:
      "Wedding planning and event coordination in Metro Detroit and Northern Michigan.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#1C2420",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <a className="skip" href="#content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
