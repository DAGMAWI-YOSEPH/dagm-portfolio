import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { GlobalCharacter } from "@/components/GlobalCharacter";
import { ScrollToTop } from "@/components/ScrollToTop";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const orbitron = Orbitron({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dagm.dev"),
  title: {
    default: "Dagm. Y — Freelance WordPress Developer",
    template: "%s | Dagm. Y",
  },
  description:
    "Dagmawi Yoseph — Top Rated Freelance WordPress & Elementor Developer from Ethiopia. Building fast, high-converting websites.",
  keywords: [
    "WordPress developer",
    "Elementor developer",
    "freelance web developer",
    "WooCommerce developer",
    "Squarespace developer",
    "Next.js developer",
    "Dagmawi Yoseph",
    "dagm.dev",
    "Ethiopia web developer",
  ],
  authors: [{ name: "Dagmawi Yoseph", url: "https://dagm.dev" }],
  creator: "Dagmawi Yoseph",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Dagm. Y — Freelance WordPress Developer",
    description:
      "Top Rated Freelance WordPress & Elementor Developer. Fast, high-converting custom builds.",
    url: "https://dagm.dev",
    siteName: "dagm.dev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dagm — Freelance WordPress Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dagm. Y — Freelance WordPress Developer",
    description:
      "Top Rated Freelance WordPress & Elementor Developer. Fast, high-converting custom builds.",
    images: ["/og-image.png"],
    creator: "@dagm",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${spaceMono.variable} ${orbitron.variable}`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen flex flex-col"
        style={{ fontFamily: "var(--font-grotesk), sans-serif" }}
      >
        <ThemeProvider>
          <ThemeToggle />
          <GlobalCharacter />
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
