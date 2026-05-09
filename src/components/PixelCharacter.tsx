"use client";

import { motion } from "framer-motion";

export function PixelCharacter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -400 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 14,
        delay: 2.2,
      }}
      className="absolute pointer-events-none"
      style={{
        bottom: "0px",
        zIndex: 10,
      }}
    >
      {/* Walk across the name */}
      <motion.div
        animate={{ x: ["0%", "800%", "0%"] }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
          delay: 3.2,
        }}
        style={{ position: "relative", left: "-10%" }}
      >
        {/* Lean tall jock with glasses */}
        <svg
          width="36"
          height="72"
          viewBox="0 0 9 18"
          xmlns="http://www.w3.org/2000/svg"
          style={{ imageRendering: "pixelated" }}
        >
          {/* Hair - short sporty cut */}
          <rect x="2" y="0" width="5" height="0.8" fill="#1A1A1A" />
          <rect x="1.5" y="0.8" width="6" height="0.8" fill="#1A1A1A" />

          {/* Head */}
          <rect x="2" y="1.6" width="5" height="1" fill="#6B4226" />
          <rect x="2" y="2.6" width="5" height="1" fill="#6B4226" />
          <rect x="2" y="3.6" width="5" height="0.8" fill="#6B4226" />
          <rect x="2.5" y="4.4" width="4" height="0.6" fill="#6B4226" />

          {/* Glasses */}
          <rect x="2" y="2.5" width="2" height="1.2" fill="none" stroke="#222" strokeWidth="0.35" />
          <rect x="5" y="2.5" width="2" height="1.2" fill="none" stroke="#222" strokeWidth="0.35" />
          <rect x="4" y="2.9" width="1" height="0.3" fill="#222" />

          {/* Eyes */}
          <rect x="2.5" y="2.8" width="0.8" height="0.6" fill="#FFF" />
          <rect x="2.7" y="2.9" width="0.45" height="0.45" fill="#1A1A1A" />
          <rect x="5.5" y="2.8" width="0.8" height="0.6" fill="#FFF" />
          <rect x="5.7" y="2.9" width="0.45" height="0.45" fill="#1A1A1A" />

          {/* Mouth */}
          <rect x="3.5" y="4" width="2" height="0.3" fill="#4A2A14" />

          {/* Neck */}
          <rect x="3.5" y="5" width="2" height="0.6" fill="#6B4226" />

          {/* Varsity jacket - athletic fit */}
          <rect x="1" y="5.6" width="7" height="0.8" fill="#1E3A6E" />
          <rect x="0.5" y="6.4" width="8" height="0.8" fill="#1E3A6E" />
          <rect x="0.5" y="7.2" width="8" height="0.8" fill="#1E3A6E" />
          <rect x="1" y="8" width="7" height="0.8" fill="#1E3A6E" />
          <rect x="1" y="8.8" width="7" height="0.8" fill="#1E3A6E" />

          {/* Jacket stripe */}
          <rect x="1" y="5.8" width="7" height="0.3" fill="var(--retro)" />
          <rect x="1" y="8.6" width="7" height="0.3" fill="var(--retro)" />

          {/* Jacket number on chest */}
          <rect x="3.5" y="7" width="2" height="0.3" fill="var(--retro)" />

          {/* Zipper */}
          <rect x="4" y="5.6" width="1" height="4" fill="#16305A" />

          {/* Walking legs - animated */}
          <motion.g
            animate={{
              rotate: [8, -8, 8],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3.2,
            }}
            style={{ transformOrigin: "4.5px 9.6px" }}
          >
            {/* Left leg */}
            <rect x="2" y="9.6" width="2.5" height="1" fill="#2A2A3A" />
            <rect x="2" y="10.6" width="2.5" height="1" fill="#2A2A3A" />
            <rect x="2" y="11.6" width="2.5" height="1" fill="#333340" />
            <rect x="2" y="12.6" width="2.5" height="1" fill="#333340" />
            {/* Left shoe */}
            <rect x="1.5" y="13.6" width="3" height="0.8" fill="#1A1A1A" />
            <rect x="1" y="14.4" width="3.5" height="0.6" fill="#222" />
          </motion.g>

          <motion.g
            animate={{
              rotate: [-8, 8, -8],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3.2,
            }}
            style={{ transformOrigin: "4.5px 9.6px" }}
          >
            {/* Right leg */}
            <rect x="4.5" y="9.6" width="2.5" height="1" fill="#2A2A3A" />
            <rect x="4.5" y="10.6" width="2.5" height="1" fill="#2A2A3A" />
            <rect x="4.5" y="11.6" width="2.5" height="1" fill="#333340" />
            <rect x="4.5" y="12.6" width="2.5" height="1" fill="#333340" />
            {/* Right shoe */}
            <rect x="4.5" y="13.6" width="3" height="0.8" fill="#1A1A1A" />
            <rect x="4.5" y="14.4" width="3.5" height="0.6" fill="#222" />
          </motion.g>

          {/* Walking arms */}
          <motion.g
            animate={{ rotate: [-15, 15, -15] }}
            transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut", delay: 3.2 }}
            style={{ transformOrigin: "1px 6.4px" }}
          >
            <rect x="-0.5" y="6.4" width="1" height="1" fill="#3A2518" />
            <rect x="-0.5" y="7.4" width="1" height="1" fill="#6B4226" />
            <rect x="-0.5" y="8.4" width="1" height="0.8" fill="#7B5233" />
          </motion.g>

          <motion.g
            animate={{ rotate: [15, -15, 15] }}
            transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut", delay: 3.2 }}
            style={{ transformOrigin: "8px 6.4px" }}
          >
            <rect x="8" y="6.4" width="1" height="1" fill="#3A2518" />
            <rect x="8" y="7.4" width="1" height="1" fill="#6B4226" />
            <rect x="8" y="8.4" width="1" height="0.8" fill="#7B5233" />
          </motion.g>
        </svg>
      </motion.div>
    </motion.div>
  );
}
