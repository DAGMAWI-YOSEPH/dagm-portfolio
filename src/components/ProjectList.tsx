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
              className="project-item flex items-center justify-between gap-4 py-4 sm:py-5 cursor-pointer group"
              style={{
                borderBottom: "1px solid rgba(0, 240, 255, 0.06)",
                transition: "all 0.3s ease",
                ...(i === 0 ? { borderTop: "1px solid rgba(0, 240, 255, 0.06)" } : {}),
              }}
            >
              {/* Left: number + name */}
              <div className="flex items-center gap-3 min-w-0">
                <span
                  className="font-bold tracking-widest flex-shrink-0"
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "0.7rem",
                    color: "var(--accent)",
                    fontVariantNumeric: "tabular-nums",
                    textShadow: "0 0 8px rgba(0, 240, 255, 0.3)",
                  }}
                >
                  {project.number}
                </span>

                <span
                  className="project-name truncate"
                  data-text={project.name}
                  style={{
                    fontFamily: "var(--font-display), var(--font-grotesk), sans-serif",
                    fontSize: "clamp(1.1rem, 3vw, 2.2rem)",
                    fontWeight: 700,
                    letterSpacing: "0.03em",
                  }}
                >
                  {project.name}
                </span>
              </div>

              {/* Right: status badge OR year */}
              <div className="flex items-center gap-3 flex-shrink-0">
                {project.status ? (
                  <span
                    className="text-[0.55rem] sm:text-[0.6rem] uppercase tracking-[0.12em] px-2 sm:px-3 py-1 font-bold"
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      color: "var(--retro)",
                      border: "1px solid var(--retro)",
                      background: "var(--retro-glow)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {project.status}
                  </span>
                ) : (
                  <span
                    className="text-xs sm:text-sm tracking-wide font-bold"
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      color: "var(--text-dim)",
                      fontVariantNumeric: "tabular-nums",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {project.year}
                  </span>
                )}

                <span
                  className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-lg hidden sm:inline"
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    color: "var(--retro)",
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
