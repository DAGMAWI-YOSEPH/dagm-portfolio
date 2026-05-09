"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SYMBOLS = [
  "◆", "▲", "●", "■", "★", "◇", "△", "○", "□", "☆",
  "{", "}", "<", ">", "/", "\\", "*", "#", "@", "&",
  "A", "B", "D", "G", "M", "W", "Y", "0", "1", "7",
  "λ", "Σ", "π", "Ω", "∞", "≡", "∴", "⌘", "⟐", "⊕",
];

interface FallingItem {
  id: number;
  char: string;
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  opacity: number;
}

export function FallingObjects() {
  const [items, setItems] = useState<FallingItem[]>([]);

  useEffect(() => {
    const generated: FallingItem[] = Array.from({ length: 35 }, (_, i) => ({
      id: i,
      char: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      x: Math.random() * 100,
      delay: Math.random() * 2.5,
      duration: 1.8 + Math.random() * 2.5,
      size: 12 + Math.random() * 28,
      rotation: -180 + Math.random() * 360,
      opacity: 0.08 + Math.random() * 0.18,
    }));
    setItems(generated);
  }, []);

  if (!items.length) return null;

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 1 }}
    >
      {items.map((item) => (
        <motion.span
          key={item.id}
          initial={{
            opacity: 0,
            y: -80,
            x: `${item.x}vw`,
            rotate: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: [0, item.opacity, item.opacity, item.opacity * 0.3],
            y: ["−80px", "75vh", "78vh", "75vh"],
            rotate: item.rotation,
            scale: [0.5, 1, 1, 0.9],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="absolute top-0 select-none"
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: `${item.size}px`,
            fontWeight: 700,
            color: "var(--text)",
            willChange: "transform, opacity",
          }}
        >
          {item.char}
        </motion.span>
      ))}
    </div>
  );
}
