"use client";

import { DropIn } from "./DropIn";

export function HeroSection() {
  return (
    <header className="min-h-[60vh] flex items-end pt-24 pb-16">
      <div className="w-full">
        {/* Name */}
        <DropIn delay={0.1}>
          <h1
            style={{
              fontSize: "clamp(5rem, 14vw, 13rem)",
              fontWeight: 900,
              lineHeight: 0.85,
              letterSpacing: "-0.05em",
              textTransform: "uppercase",
            }}
          >
            DAGM. Y
          </h1>
        </DropIn>

        {/* Full name */}
        <DropIn delay={0.25}>
          <p
            className="mt-4"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "1.15rem",
              fontStyle: "italic",
              color: "var(--text-muted)",
              letterSpacing: "0.02em",
            }}
          >
            Dagmawi Yoseph
          </p>
        </DropIn>

        {/* Bottom row: location left, social right */}
        <DropIn delay={0.4} className="mt-12">
          <div className="flex justify-between items-start flex-wrap gap-4">
            <span
              className="text-xs tracking-[0.12em] uppercase"
              style={{ color: "var(--text-dim)" }}
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
                  style={{ color: "var(--text-dim)" }}
                >
                  {link.label}
                  <span
                    className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                    style={{ background: "var(--accent)" }}
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
