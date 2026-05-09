"use client";

export function Marquee() {
  const items = Array.from({ length: 10 });

  return (
    <div
      className="overflow-hidden py-5"
      style={{ borderTop: "2px dashed var(--border)", borderBottom: "2px dashed var(--border)" }}
    >
      <div className="marquee-track">
        {items.map((_, i) => (
          <span
            key={i}
            className="flex-shrink-0 pr-12 select-none"
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "transparent",
              WebkitTextStroke: "1px var(--retro-green)",
            }}
          >
            ★ Selected Works ★
          </span>
        ))}
      </div>
    </div>
  );
}
