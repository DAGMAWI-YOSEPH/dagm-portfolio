"use client";

import { motion } from "framer-motion";

const projects = [
  {
    number: "001",
    name: "Heron Dance",
    year: "Ongoing",
    url: "https://www.herondance.org/",
    status: "ongoing",
  },
  {
    number: "002",
    name: "JBDondolo.org",
    year: "Ongoing",
    url: "https://jbdondolo.org/",
    status: "ongoing",
  },
  {
    number: "003",
    name: "Lonestar Peptides",
    year: "2026",
    url: "https://lonestarpeptides.org/",
    status: "",
  },
  {
    number: "004",
    name: "True Light Pools",
    year: "2026",
    url: "https://truelightpools.com/",
    status: "",
  },
  {
    number: "005",
    name: "BPS Pools",
    year: "2026",
    url: "https://bpspools.net/",
    status: "",
  },
  {
    number: "006",
    name: "The Arch International",
    year: "2025",
    url: "https://thearchinternational.com/",
    status: "",
  },
  {
    number: "007",
    name: "Rose Bookshop",
    year: "2024",
    url: "https://rosebookshop.com/",
    status: "",
  },
];

export function ProjectList() {
  return (
    <div className="project-list flex flex-col">
      {projects.map((project, i) => {
        const Tag = project.url ? "a" : "div";
        const linkProps = project.url
          ? { href: project.url, target: "_blank" as const, rel: "noopener noreferrer" }
          : {};

        return (
          <motion.div
            key={project.number}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: i * 0.08,
            }}
          >
            <Tag
              {...linkProps}
              className="project-item grid items-center py-5 cursor-pointer group"
              style={{
                gridTemplateColumns: "3.5rem 1fr auto",
                borderBottom: "2px dashed var(--border)",
                transition: "all 0.3s ease",
                ...(i === 0 ? { borderTop: "2px dashed var(--border)" } : {}),
              }}
            >
              {/* Number — retro pixel style */}
              <span
                className="font-bold tracking-widest"
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "0.7rem",
                  color: "var(--retro)",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {project.number}
              </span>

              {/* Name with marquee track */}
              <div className="overflow-hidden">
                <div className="project-name-track">
                  {[0, 1, 2, 3].map((j) => (
                    <span
                      key={j}
                      className={`flex-shrink-0 ${j > 0 ? "project-name-dup" : ""}`}
                      style={{
                        fontFamily: "var(--font-grotesk), sans-serif",
                        fontSize: "clamp(1.3rem, 3.2vw, 2.2rem)",
                        fontWeight: 700,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {project.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: status + year */}
              <div className="flex items-center gap-4 justify-self-end">
                {project.status && (
                  <span
                    className="text-[0.6rem] uppercase tracking-[0.15em] px-3 py-1 font-bold"
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      color: "var(--retro)",
                      border: "1px solid var(--retro)",
                      background: "var(--retro-glow)",
                    }}
                  >
                    {project.status}
                  </span>
                )}
                <span
                  className="text-sm tracking-wide font-bold"
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    color: "var(--text-dim)",
                    fontVariantNumeric: "tabular-nums",
                    transition: "color 0.3s ease",
                  }}
                >
                  {project.year}
                </span>

                {/* Retro arrow */}
                <span
                  className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-lg"
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    color: "var(--retro)",
                    transform: "translateX(-5px)",
                  }}
                >
                  {">"}
                </span>
              </div>
            </Tag>
          </motion.div>
        );
      })}
    </div>
  );
}
