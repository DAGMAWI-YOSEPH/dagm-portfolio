"use client";

import { DropIn } from "./DropIn";
import { Marquee } from "./Marquee";
import { ProjectList } from "./ProjectList";

export function WorksSection() {
  return (
    <DropIn delay={0.7}>
      <section className="py-16">
        <Marquee />
        <div
          className="mt-0 neon-border relative"
          style={{
            background: "var(--bg-alt)",
            padding: "2rem 1.5rem",
          }}
        >
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-4 h-4" style={{ borderTop: "2px solid var(--accent)", borderLeft: "2px solid var(--accent)" }} />
          <div className="absolute top-0 right-0 w-4 h-4" style={{ borderTop: "2px solid var(--accent)", borderRight: "2px solid var(--accent)" }} />
          <div className="absolute bottom-0 left-0 w-4 h-4" style={{ borderBottom: "2px solid var(--retro)", borderLeft: "2px solid var(--retro)" }} />
          <div className="absolute bottom-0 right-0 w-4 h-4" style={{ borderBottom: "2px solid var(--retro)", borderRight: "2px solid var(--retro)" }} />

          <ProjectList />
        </div>
      </section>
    </DropIn>
  );
}
