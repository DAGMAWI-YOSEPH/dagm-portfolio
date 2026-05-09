"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SHAPES = [
  "★", "♦", "●", "■", "▲", "♥", "◆", "✦", "☆", "✶",
  "◇", "♠", "✧", "△", "○", "□", "♦", "★", "●", "▲",
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
  "var(--retro)",
];

export function FallingObjects() {
  const [items, setItems] = useState<FallingItem[]>([]);

  useEffect(() => {
    const generated: FallingItem[] = Array.from({ length: 24 }, (_, i) => ({
      id: i,
      char: SHAPES[Math.floor(Math.random() * SHAPES.length)],
      x: 3 + Math.random() * 90,
      delay: 0.1 + Math.random() * 1.5,
      size: 10 + Math.random() * 22,
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
          initial={{
            opacity: 0,
            top: -60,
            left: `${item.x}%`,
            rotate: 0,
            position: "absolute",
          }}
          animate={{
            opacity: [0, 0.4, 0.3, 0.25],
            top: ["−60px", "85%", "82%", "84%"],
            rotate: item.rotation,
          }}
          transition={{
            duration: 1.2,
            delay: item.delay,
            ease: [0.55, 0, 0.68, 1],
            top: {
              duration: 1.2,
              delay: item.delay,
              times: [0, 0.65, 0.82, 1],
              ease: [0.5, 0, 0.7, 1],
            },
          }}
          style={{
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
