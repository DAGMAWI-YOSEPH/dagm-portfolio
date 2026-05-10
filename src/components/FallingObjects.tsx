"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SHAPES = [
  "⬡", "◈", "⟁", "⌬", "◇", "⬢", "△", "▽", "◻", "⟐",
  "⧫", "⬣", "▣", "◆", "⟠", "⏣",
];

interface FallingItem {
  id: number;
  char: string;
  x: number;
  delay: number;
  size: number;
  rotation: number;
  color: string;
}

const COLORS = [
  "var(--accent)",
  "var(--retro)",
  "var(--accent)",
  "rgba(0, 240, 255, 0.6)",
  "rgba(255, 46, 151, 0.5)",
  "var(--accent)",
];

export function FallingObjects() {
  const [items, setItems] = useState<FallingItem[]>([]);

  useEffect(() => {
    const generated: FallingItem[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      char: SHAPES[Math.floor(Math.random() * SHAPES.length)],
      x: 3 + Math.random() * 90,
      delay: 0.1 + Math.random() * 1.8,
      size: 10 + Math.random() * 18,
      rotation: -200 + Math.random() * 400,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));
    setItems(generated);
  }, []);

  if (!items.length) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 2 }}>
      {items.map((item) => (
        <motion.span
          key={item.id}
          initial={{ opacity: 0, y: -80, rotate: 0 }}
          animate={{
            opacity: [0, 0.5, 0.5, 0],
            y: [-80, 300, 310, 320],
            rotate: item.rotation,
          }}
          transition={{
            duration: 2.5,
            delay: item.delay,
            times: [0, 0.5, 0.7, 1],
            ease: [0.5, 0, 0.7, 1],
          }}
          className="absolute"
          style={{
            left: `${item.x}%`,
            top: 0,
            fontSize: `${item.size}px`,
            color: item.color,
            willChange: "transform, opacity",
            lineHeight: 1,
            filter: `drop-shadow(0 0 4px ${item.color})`,
          }}
        >
          {item.char}
        </motion.span>
      ))}
    </div>
  );
}
