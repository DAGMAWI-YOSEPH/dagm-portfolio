import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Dagm. Y — Freelance WordPress Developer",
  description:
    "Dagmawi Yoseph — Top Rated Freelance WordPress & Elementor Developer from Ethiopia. Building fast, high-converting websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${spaceMono.variable}`}
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
