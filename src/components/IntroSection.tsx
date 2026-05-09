"use client";

import Link from "next/link";
import { DropIn } from "./DropIn";

export function IntroSection() {
  return (
    <DropIn delay={0.55}>
      <section className="max-w-[600px] py-8">
        <p
          className="text-base leading-[1.8] mb-4"
          style={{ color: "var(--text-muted)" }}
        >
          I enjoy working with businesses and creative individuals. My expertise
          relies on WordPress, Elementor, and building high-converting websites.
        </p>
        <p
          className="text-base leading-[1.8] mb-6"
          style={{ color: "var(--text-muted)" }}
        >
          Currently available for freelance work. Specializing in fast,
          mobile-responsive, SEO-friendly websites that drive results.
        </p>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-sm tracking-[0.08em] uppercase group retro-cursor"
          style={{
            color: "var(--retro-green)",
            fontFamily: "var(--font-mono), monospace",
            transition: "color 0.3s ease",
          }}
        >
          about
          <span className="text-base transition-transform duration-300 group-hover:translate-x-1.5">
            {">"}
          </span>
        </Link>
      </section>
    </DropIn>
  );
}
