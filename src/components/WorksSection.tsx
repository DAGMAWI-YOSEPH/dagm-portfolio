"use client";

import { DropIn } from "./DropIn";
import { Marquee } from "./Marquee";
import { ProjectList } from "./ProjectList";

export function WorksSection() {
  return (
    <DropIn delay={0.7}>
      <section className="py-16">
        <Marquee />
        <div className="mt-16">
          <ProjectList />
        </div>
      </section>
    </DropIn>
  );
}
