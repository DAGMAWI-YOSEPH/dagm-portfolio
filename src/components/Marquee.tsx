"use client";

export function Marquee() {
  const items = Array.from({ length: 10 });

  return (
    <div
      className="overflow-hidden py-4"
      style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
    >
      <div className="marquee-track">
        {items.map((_, i) => (
          <span
            key={i}
            className="flex-shrink-0 pr-12 select-none"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
              color: "transparent",
              WebkitTextStroke: "1px var(--text-dim)",
            }}
          >
            Selected Works
          </span>
        ))}
      </div>
    </div>
  );
}
