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
    url: "https://lonestarpeptides.com/",
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
    url: "https://bpspools.com/",
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: i * 0.08,
            }}
          >
            <Tag
              {...linkProps}
              className="project-item grid items-center py-5 cursor-pointer"
              style={{
                gridTemplateColumns: "3.5rem 1fr auto",
                borderBottom: "1px solid var(--border)",
                transition: "all 0.3s ease",
                ...(i === 0 ? { borderTop: "1px solid var(--border)" } : {}),
              }}
            >
              {/* Number */}
              <span
                className="text-xs font-medium tracking-widest"
                style={{ color: "var(--text-dim)", fontVariantNumeric: "tabular-nums" }}
              >
                {project.number}
              </span>

              {/* Name with marquee track */}
              <div className="overflow-hidden">
                <div className="project-name-track">
                  <span
                    className="flex-shrink-0"
                    style={{
                      fontSize: "clamp(1.3rem, 3.2vw, 2.2rem)",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {project.name}
                  </span>
                  <span className="flex-shrink-0 project-name-dup" style={{ fontSize: "clamp(1.3rem, 3.2vw, 2.2rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
                    {project.name}
                  </span>
                  <span className="flex-shrink-0 project-name-dup" style={{ fontSize: "clamp(1.3rem, 3.2vw, 2.2rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
                    {project.name}
                  </span>
                  <span className="flex-shrink-0 project-name-dup" style={{ fontSize: "clamp(1.3rem, 3.2vw, 2.2rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
                    {project.name}
                  </span>
                </div>
              </div>

              {/* Right: status + year */}
              <div className="flex items-center gap-4 justify-self-end">
                {project.status && (
                  <span
                    className="text-[0.65rem] uppercase tracking-[0.12em] px-3 py-1 rounded-full"
                    style={{
                      color: "var(--accent)",
                      background: "var(--selection)",
                    }}
                  >
                    {project.status}
                  </span>
                )}
                <span
                  className="text-sm tracking-wide"
                  style={{
                    color: "var(--text-dim)",
                    fontVariantNumeric: "tabular-nums",
                    transition: "color 0.3s ease",
                  }}
                >
                  {project.year}
                </span>
              </div>
            </Tag>
          </motion.div>
        );
      })}
    </div>
  );
}
