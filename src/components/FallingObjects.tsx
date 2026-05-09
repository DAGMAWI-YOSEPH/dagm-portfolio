"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SHAPES = [
  "★", "♦", "●", "■", "▲", "♥", "◆", "✦", "○", "□",
  "△", "☆", "✶", "◇", "♠", "✧", "●", "■", "▲", "★",
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
  "var(--retro)",
  "var(--accent)",
  "var(--text-muted)",
  "var(--retro)",
  "var(--accent)",
];

export function FallingObjects() {
  const [items, setItems] = useState<FallingItem[]>([]);

  useEffect(() => {
    const generated: FallingItem[] = Array.from({ length: 22 }, (_, i) => ({
      id: i,
      char: SHAPES[Math.floor(Math.random() * SHAPES.length)],
      x: 5 + Math.random() * 85,
      delay: 0.2 + Math.random() * 2,
      size: 10 + Math.random() * 20,
      rotation: -180 + Math.random() * 360,
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
          initial={{ opacity: 0, y: -100, rotate: 0 }}
          animate={{
            opacity: [0, 0.35, 0.25],
            y: ["-100px", "calc(100% - 2rem)", "calc(100% - 2.5rem)", "calc(100% - 2rem)"],
            rotate: item.rotation,
          }}
          transition={{
            duration: 1.6,
            delay: item.delay,
            ease: [0.45, 0, 0.55, 1],
            y: {
              duration: 1.6,
              delay: item.delay,
              times: [0, 0.7, 0.85, 1],
              ease: [0.6, 0, 0.4, 1],
            },
          }}
          className="absolute"
          style={{
            left: `${item.x}%`,
            top: 0,
            fontSize: `${item.size}px`,
            color: item.color,
            willChange: "transform, opacity",
            lineHeight: 1,
          }}
        >
          {item.char}
        </motion.span>
      ))}
    </div>
  );
}
