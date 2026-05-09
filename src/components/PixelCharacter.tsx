"use client";

import { motion } from "framer-motion";

export function PixelCharacter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -350 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 14,
        delay: 2.6,
      }}
      className="absolute pointer-events-none"
      style={{
        left: "50%",
        transform: "translateX(-50%)",
        top: "-72px",
        zIndex: 10,
      }}
    >
      {/* Waving arm wrapper */}
      <svg
        width="56"
        height="70"
        viewBox="0 0 16 20"
        xmlns="http://www.w3.org/2000/svg"
        style={{ imageRendering: "pixelated" }}
      >
        {/* Hair - short flat top */}
        <rect x="4" y="0" width="8" height="1" fill="#1A1A1A" />
        <rect x="3" y="1" width="10" height="1" fill="#1A1A1A" />
        <rect x="3" y="2" width="10" height="1" fill="#1A1A1A" />

        {/* Face */}
        <rect x="3" y="3" width="10" height="5" fill="#6B4226" />
        <rect x="4" y="7" width="8" height="1" fill="#6B4226" />

        {/* Glasses frame */}
        <rect x="3" y="4" width="4" height="2" fill="none" stroke="#222" strokeWidth="0.5" />
        <rect x="9" y="4" width="4" height="2" fill="none" stroke="#222" strokeWidth="0.5" />
        <rect x="7" y="4.6" width="2" height="0.4" fill="#222" />
        {/* Temples */}
        <rect x="2.2" y="4.4" width="0.8" height="0.4" fill="#222" />
        <rect x="13" y="4.4" width="0.8" height="0.4" fill="#222" />

        {/* Eyes behind glasses */}
        <rect x="4.5" y="4.6" width="1.2" height="1" fill="#FFF" />
        <rect x="5" y="4.8" width="0.6" height="0.7" fill="#1A1A1A" />
        <rect x="10.3" y="4.6" width="1.2" height="1" fill="#FFF" />
        <rect x="10.8" y="4.8" width="0.6" height="0.7" fill="#1A1A1A" />

        {/* Smile */}
        <rect x="6" y="6.6" width="4" height="0.5" rx="0.2" fill="#4A2A14" />

        {/* Shirt - uses retro accent color */}
        <rect x="3" y="8" width="10" height="5" fill="var(--retro)" />
        <rect x="2" y="9" width="12" height="3" fill="var(--retro)" />

        {/* Shirt collar detail */}
        <rect x="7" y="8" width="2" height="1" fill="#0B0E14" />

        {/* Left arm (resting) */}
        <rect x="1" y="9" width="1" height="2" fill="#6B4226" />
        <rect x="0" y="11" width="1" height="1" fill="#7B5233" />

        {/* Right arm (waving) */}
        <motion.g
          animate={{ rotate: [0, -25, 0, -25, 0, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 2.5,
            delay: 3.8,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "14px 9px" }}
        >
          <rect x="14" y="9" width="1" height="1" fill="#6B4226" />
          <rect x="15" y="8" width="1" height="1" fill="#6B4226" />
          <rect x="15" y="7" width="1" height="1" fill="#6B4226" />
          {/* Open hand */}
          <rect x="14.5" y="5.5" width="2" height="1.5" fill="#7B5233" />
          <rect x="14.5" y="5" width="0.5" height="0.5" fill="#7B5233" />
          <rect x="15.5" y="5" width="0.5" height="0.5" fill="#7B5233" />
          <rect x="16" y="5.5" width="0.5" height="0.5" fill="#7B5233" />
        </motion.g>

        {/* Pants */}
        <rect x="4" y="13" width="3.5" height="3" fill="#2A2A3A" />
        <rect x="8.5" y="13" width="3.5" height="3" fill="#2A2A3A" />

        {/* Belt */}
        <rect x="4" y="13" width="8" height="0.6" fill="#333" />
        <rect x="7.5" y="12.8" width="1" height="1" fill="var(--retro)" />

        {/* Shoes */}
        <rect x="3" y="16" width="4.5" height="1" fill="#1A1A1A" />
        <rect x="8.5" y="16" width="4.5" height="1" fill="#1A1A1A" />
        <rect x="2.5" y="17" width="5" height="1" fill="#222" />
        <rect x="8.5" y="17" width="5" height="1" fill="#222" />
      </svg>
    </motion.div>
  );
}
