"use client";

import { motion } from "framer-motion";

export function PixelCharacter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -300, rotate: -15 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 12,
        delay: 2.8,
      }}
      className="absolute pointer-events-none"
      style={{
        right: "clamp(2rem, 18vw, 22rem)",
        bottom: "-8px",
        zIndex: 10,
      }}
    >
      <svg
        width="64"
        height="80"
        viewBox="0 0 16 20"
        xmlns="http://www.w3.org/2000/svg"
        style={{ imageRendering: "pixelated" }}
      >
        {/* Hair */}
        <rect x="4" y="0" width="8" height="1" fill="#1A1A1A" />
        <rect x="3" y="1" width="10" height="1" fill="#1A1A1A" />
        <rect x="3" y="2" width="10" height="1" fill="#1A1A1A" />

        {/* Face */}
        <rect x="3" y="3" width="10" height="1" fill="#6B4226" />
        <rect x="3" y="4" width="10" height="1" fill="#6B4226" />
        <rect x="3" y="5" width="10" height="1" fill="#6B4226" />
        <rect x="3" y="6" width="10" height="1" fill="#6B4226" />
        <rect x="4" y="7" width="8" height="1" fill="#6B4226" />

        {/* Glasses frame */}
        <rect x="3" y="4" width="4" height="2" fill="none" stroke="#333" strokeWidth="0.6" />
        <rect x="9" y="4" width="4" height="2" fill="none" stroke="#333" strokeWidth="0.6" />
        <rect x="7" y="4.5" width="2" height="0.5" fill="#333" />

        {/* Eyes (behind glasses) */}
        <rect x="4" y="4.5" width="1" height="1" fill="#FFFFFF" />
        <rect x="4.5" y="4.8" width="0.6" height="0.6" fill="#1A1A1A" />
        <rect x="10" y="4.5" width="1" height="1" fill="#FFFFFF" />
        <rect x="10.5" y="4.8" width="0.6" height="0.6" fill="#1A1A1A" />

        {/* Smile */}
        <rect x="6" y="6.5" width="4" height="0.5" fill="#4A2A14" />

        {/* Shirt */}
        <rect x="3" y="8" width="10" height="1" fill="#6E7BDE" />
        <rect x="2" y="9" width="12" height="1" fill="#6E7BDE" />
        <rect x="2" y="10" width="12" height="1" fill="#6E7BDE" />
        <rect x="3" y="11" width="10" height="1" fill="#6E7BDE" />
        <rect x="3" y="12" width="10" height="1" fill="#5A68C4" />

        {/* Waving arm (right) */}
        <motion.g
          animate={{ rotate: [0, -20, 0, -20, 0] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatDelay: 3,
            delay: 4,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "14px 9px" }}
        >
          <rect x="14" y="9" width="1" height="1" fill="#6B4226" />
          <rect x="15" y="8" width="1" height="1" fill="#6B4226" />
          <rect x="15" y="7" width="1" height="1" fill="#6B4226" />
          {/* Hand */}
          <rect x="15" y="6" width="1" height="1" fill="#7B5233" />
        </motion.g>

        {/* Left arm */}
        <rect x="1" y="9" width="1" height="1" fill="#6B4226" />
        <rect x="0" y="10" width="1" height="1" fill="#6B4226" />

        {/* Pants */}
        <rect x="4" y="13" width="4" height="1" fill="#2A2A3A" />
        <rect x="8" y="13" width="4" height="1" fill="#2A2A3A" />
        <rect x="4" y="14" width="4" height="1" fill="#2A2A3A" />
        <rect x="8" y="14" width="4" height="1" fill="#2A2A3A" />

        {/* Legs */}
        <rect x="4" y="15" width="3" height="1" fill="#2A2A3A" />
        <rect x="9" y="15" width="3" height="1" fill="#2A2A3A" />
        <rect x="4" y="16" width="3" height="1" fill="#2A2A3A" />
        <rect x="9" y="16" width="3" height="1" fill="#2A2A3A" />

        {/* Shoes */}
        <rect x="3" y="17" width="4" height="1" fill="#1A1A1A" />
        <rect x="9" y="17" width="4" height="1" fill="#1A1A1A" />
        <rect x="3" y="18" width="4" height="1" fill="#222" />
        <rect x="9" y="18" width="4" height="1" fill="#222" />
      </svg>
    </motion.div>
  );
}
