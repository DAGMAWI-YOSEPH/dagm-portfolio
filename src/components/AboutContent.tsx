"use client";

import Link from "next/link";
import { DropIn, FadeUp } from "./DropIn";

const skills = [
  "WordPress",
  "Elementor Pro",
  "WooCommerce",
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "Shopify",
  "SEO",
  "UI/UX",
  "Figma",
  "Responsive Design",
];

const experience = [
  { name: "Heron Dance", year: "Ongoing", url: "https://www.herondance.org/" },
  { name: "JBDondolo.org", year: "Ongoing", url: "https://jbdondolo.org/" },
  { name: "Lonestar Peptides", year: "2026", url: "https://lonestarpeptides.com/" },
  { name: "True Light Pools", year: "2026", url: "https://truelightpools.com/" },
  { name: "BPS Pools", year: "2026", url: "https://bpspools.com/" },
  { name: "The Arch International", year: "2025", url: "https://thearchinternational.com/" },
  { name: "Rose Bookshop", year: "2024", url: "https://rosebookshop.com/" },
];

const education = [
  "BA in Management — Addis Ababa University (2023–2027)",
  "WordPress Development — Udemy (2020)",
  "Google Digital Marketing & E-commerce (2021)",
];

export function AboutContent() {
  return (
    <div className="pt-24 pb-16">
      {/* Title */}
      <DropIn delay={0.1}>
        <h1
          className="mb-20"
          style={{
            fontSize: "clamp(3rem, 8vw, 7rem)",
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: "-0.05em",
            textTransform: "uppercase",
          }}
        >
          About
        </h1>
      </DropIn>

      {/* Grid */}
      <div
        className="grid gap-16 mb-20"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))" }}
      >
        {/* Left: Bio */}
        <FadeUp delay={0.15}>
          <div>
            <h3
              className="text-xs uppercase tracking-[0.12em] mb-4"
              style={{ color: "var(--text-dim)" }}
            >
              Bio
            </h3>
            <p
              className="text-base leading-[1.85] mb-6"
              style={{ color: "var(--text-muted)" }}
            >
              Top Rated Freelancer from Ethiopia specializing in WordPress,
              Elementor, and e-commerce. With 3+ years of experience, I build
              websites that load under 3 seconds and deliver conversion rates up
              to 40% higher than industry average.
            </p>
            <p
              className="text-base leading-[1.85] mb-10"
              style={{ color: "var(--text-muted)" }}
            >
              I enjoy working with businesses and creative individuals to build
              fast, mobile-responsive, SEO-friendly websites that drive real
              results. Every project is an opportunity to create something
              meaningful.
            </p>

            {/* Skills */}
            <h3
              className="text-xs uppercase tracking-[0.12em] mb-4"
              style={{ color: "var(--text-dim)" }}
            >
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-4 py-1.5 rounded-full cursor-default"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--text-muted)",
                    transition: "all 0.3s ease",
                    letterSpacing: "0.02em",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--text-muted)";
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Right: Details */}
        <FadeUp delay={0.3}>
          <div className="flex flex-col gap-12">
            {/* Experience */}
            <div>
              <h3
                className="text-xs uppercase tracking-[0.12em] mb-4"
                style={{ color: "var(--text-dim)" }}
              >
                Experience
              </h3>
              <ul className="flex flex-col gap-2">
                {experience.map((item) => (
                  <li key={item.name} className="text-sm leading-7" style={{ color: "var(--text-muted)" }}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                      style={{ color: "var(--accent)", transition: "color 0.3s ease" }}
                    >
                      {item.name}
                    </a>
                    {" — "}
                    {item.year}
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div>
              <h3
                className="text-xs uppercase tracking-[0.12em] mb-4"
                style={{ color: "var(--text-dim)" }}
              >
                Education
              </h3>
              <ul className="flex flex-col gap-2">
                {education.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-7"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3
                className="text-xs uppercase tracking-[0.12em] mb-4"
                style={{ color: "var(--text-dim)" }}
              >
                Contact
              </h3>
              <ul className="flex flex-col gap-2">
                <li className="text-sm" style={{ color: "var(--text-muted)" }}>
                  <a href="mailto:Dagmawi.yoseph@icloud.com" style={{ color: "var(--accent)" }} className="hover:underline">
                    Dagmawi.yoseph@icloud.com
                  </a>
                </li>
                <li className="text-sm" style={{ color: "var(--text-muted)" }}>
                  +251 911 12 9513
                </li>
                <li className="text-sm" style={{ color: "var(--text-muted)" }}>
                  Addis Ababa, Ethiopia
                </li>
              </ul>
            </div>
          </div>
        </FadeUp>
      </div>

      {/* Back link */}
      <FadeUp delay={0.2}>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm tracking-[0.08em] uppercase group"
          style={{ color: "var(--text-dim)", transition: "color 0.3s ease" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
        >
          <span className="text-base transition-transform duration-300 group-hover:-translate-x-1.5">
            ←
          </span>
          Back to home
        </Link>
      </FadeUp>
    </div>
  );
}
