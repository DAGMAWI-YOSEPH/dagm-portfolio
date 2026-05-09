"use client";

import { DropIn } from "./DropIn";
import { FallingObjects } from "./FallingObjects";

export function HeroSection() {
  return (
    <header className="min-h-[65vh] flex items-end pt-24 pb-16 relative">
      <FallingObjects />

      <div className="w-full relative" style={{ zIndex: 5 }}>
        <DropIn delay={0.1}>
          <div className="relative inline-block" id="hero-name">
            <h1
              className="whitespace-nowrap"
              style={{
                fontFamily: "var(--font-grotesk), sans-serif",
                fontSize: "clamp(3rem, 16vw, 15rem)",
                fontWeight: 400,
                lineHeight: 0.9,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
              }}
            >
              DAGM. Y
            </h1>
          </div>
        </DropIn>

        <DropIn delay={0.25}>
          <p
            className="mt-5"
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.95rem",
              color: "var(--text-muted)",
              letterSpacing: "0.05em",
            }}
          >
            Dagmawi Yoseph
          </p>
        </DropIn>

        <DropIn delay={0.4} className="mt-12">
          <div className="flex justify-between items-start flex-wrap gap-4">
            <span
              className="text-xs tracking-[0.12em] uppercase"
              style={{
                color: "var(--text-dim)",
                fontFamily: "var(--font-mono), monospace",
              }}
            >
              Addis Ababa, Ethiopia
            </span>
            <nav className="flex gap-8 items-center">
              {[
                { label: "github", href: "https://github.com/DAGMAWI-YOSEPH" },
                { label: "spotify", href: "https://open.spotify.com/user/31qyvs2kvcb3qrlmrekz6ywidtyq" },
                { label: "contact", href: "mailto:Dagmawi.yoseph@icloud.com" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="text-xs tracking-[0.06em] lowercase relative pb-0.5 group"
                  style={{
                    color: "var(--text-dim)",
                    fontFamily: "var(--font-mono), monospace",
                  }}
                >
                  {link.label}
                  <span
                    className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                    style={{ background: "var(--retro)" }}
                  />
                </a>
              ))}
            </nav>
          </div>
        </DropIn>
      </div>
    </header>
  );
}
