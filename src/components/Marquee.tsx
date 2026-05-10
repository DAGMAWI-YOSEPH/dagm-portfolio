"use client";

import { motion } from "framer-motion";

export function Marquee() {
  return (
    <div
      className="relative overflow-hidden py-6 sm:py-8"
      style={{
        background: "linear-gradient(90deg, rgba(0, 240, 255, 0.03) 0%, rgba(255, 46, 151, 0.03) 50%, rgba(0, 240, 255, 0.03) 100%)",
        borderTop: "1px solid rgba(0, 240, 255, 0.15)",
        borderBottom: "1px solid rgba(0, 240, 255, 0.15)",
        boxShadow: "inset 0 0 60px rgba(0, 240, 255, 0.03), 0 0 30px rgba(0, 240, 255, 0.05)",
      }}
    >
      {/* Accent corner marks — hidden on small screens */}
      <div className="hidden sm:block absolute top-2 left-4 text-[0.55rem] tracking-[0.2em] uppercase" style={{ color: "var(--accent)", fontFamily: "var(--font-mono), monospace", opacity: 0.5 }}>
        ◈ SYS://PORTFOLIO
      </div>
      <div className="hidden sm:block absolute top-2 right-4 text-[0.55rem] tracking-[0.2em] uppercase" style={{ color: "var(--retro)", fontFamily: "var(--font-mono), monospace", opacity: 0.5 }}>
        NODE_ACTIVE ◈
      </div>

      {/* Main glitch title */}
      <div className="flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2
            className="glitch-text text-center select-none"
            data-text="SELECTED WORKS"
            style={{
              fontFamily: "var(--font-display), var(--font-grotesk), sans-serif",
              fontSize: "clamp(1.6rem, 6vw, 5rem)",
              fontWeight: 900,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--text)",
              textShadow: "0 0 20px rgba(0, 240, 255, 0.2)",
              whiteSpace: "nowrap",
            }}
          >
            SELECTED WORKS
          </h2>
        </motion.div>
      </div>

      {/* Bottom scan line */}
      <motion.div
        className="absolute bottom-0 left-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }}
        animate={{ width: ["0%", "100%", "0%"], left: ["0%", "0%", "100%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
