"use client";

export function Marquee() {
  const items = Array.from({ length: 12 });

  return (
    <div
      className="overflow-hidden py-4"
      style={{ borderTop: "2px dashed var(--border)", borderBottom: "2px dashed var(--border)" }}
    >
      <div className="marquee-track" style={{ "--marquee-speed": "10s" } as React.CSSProperties}>
        {items.map((_, i) => (
          <span
            key={i}
            className="flex-shrink-0 pr-10 select-none"
            style={{
              fontFamily: "var(--font-display), var(--font-grotesk), sans-serif",
              fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#FFFFFF",
              textShadow: "2px 2px 0px rgba(0,0,0,0.3)",
              imageRendering: "pixelated" as React.CSSProperties["imageRendering"],
            }}
          >
            ★ SELECTED WORKS ★
          </span>
        ))}
      </div>
    </div>
  );
}
