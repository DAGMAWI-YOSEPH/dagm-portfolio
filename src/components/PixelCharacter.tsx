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
        left: "50%",
        marginLeft: "-40px",
        top: "-105px",
        zIndex: 10,
      }}
    >
      <svg
        width="80"
        height="108"
        viewBox="0 0 20 27"
        xmlns="http://www.w3.org/2000/svg"
        style={{ imageRendering: "pixelated" }}
      >
        {/* Hair */}
        <rect x="6" y="0" width="8" height="1" fill="#1A1A1A" />
        <rect x="5" y="1" width="10" height="1" fill="#1A1A1A" />
        <rect x="5" y="2" width="10" height="1" fill="#1A1A1A" />

        {/* Face */}
        <rect x="5" y="3" width="10" height="1" fill="#6B4226" />
        <rect x="5" y="4" width="10" height="1" fill="#6B4226" />
        <rect x="5" y="5" width="10" height="1" fill="#6B4226" />
        <rect x="5" y="6" width="10" height="1" fill="#6B4226" />
        <rect x="5" y="7" width="10" height="1" fill="#6B4226" />
        <rect x="6" y="8" width="8" height="1" fill="#6B4226" />

        {/* Glasses */}
        <rect x="5" y="4" width="4" height="2.5" fill="none" stroke="#222" strokeWidth="0.5" />
        <rect x="11" y="4" width="4" height="2.5" fill="none" stroke="#222" strokeWidth="0.5" />
        <rect x="9" y="5" width="2" height="0.5" fill="#222" />
        <rect x="4.2" y="5" width="0.8" height="0.4" fill="#222" />
        <rect x="15" y="5" width="0.8" height="0.4" fill="#222" />

        {/* Eyes */}
        <rect x="6" y="4.8" width="1.5" height="1.2" fill="#FFF" />
        <rect x="6.5" y="5" width="0.8" height="0.8" fill="#1A1A1A" />
        <rect x="12.5" y="4.8" width="1.5" height="1.2" fill="#FFF" />
        <rect x="13" y="5" width="0.8" height="0.8" fill="#1A1A1A" />

        {/* Smile */}
        <rect x="8" y="7.2" width="4" height="0.6" fill="#4A2A14" />

        {/* Neck */}
        <rect x="8" y="9" width="4" height="1" fill="#6B4226" />

        {/* Varsity jacket - wide shoulders */}
        <rect x="2" y="10" width="16" height="1" fill="#1E3A6E" />
        <rect x="1" y="11" width="18" height="1" fill="#1E3A6E" />
        <rect x="1" y="12" width="18" height="1" fill="#1E3A6E" />
        <rect x="1" y="13" width="18" height="1" fill="#1E3A6E" />
        <rect x="2" y="14" width="16" height="1" fill="#1E3A6E" />
        <rect x="2" y="15" width="16" height="1" fill="#1E3A6E" />
        <rect x="3" y="16" width="14" height="1" fill="#1E3A6E" />

        {/* Jacket stripe details */}
        <rect x="2" y="10.3" width="16" height="0.4" fill="var(--retro)" />
        <rect x="1" y="13.5" width="18" height="0.4" fill="var(--retro)" />

        {/* Jacket collar / zipper */}
        <rect x="9" y="10" width="2" height="7" fill="#16305A" />

        {/* Jacket sleeves - leather look */}
        <rect x="0" y="11" width="1" height="4" fill="#3A2518" />
        <rect x="19" y="11" width="1" height="4" fill="#3A2518" />

        {/* Left arm */}
        <rect x="0" y="15" width="1" height="1" fill="#6B4226" />
        <rect x="0" y="16" width="1" height="1" fill="#7B5233" />

        {/* Right arm (waving) */}
        <motion.g
          animate={{ rotate: [0, -30, 0, -30, 0, 0] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatDelay: 2,
            delay: 3.5,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "19px 12px" }}
        >
          <rect x="19" y="15" width="1" height="1" fill="#6B4226" />
          <rect x="19.5" y="13.5" width="1" height="1.5" fill="#6B4226" />
          <rect x="19.5" y="12" width="1" height="1.5" fill="#6B4226" />
          {/* Open hand */}
          <rect x="19" y="10.5" width="2" height="1.5" fill="#7B5233" />
          <rect x="19" y="9.8" width="0.6" height="0.7" fill="#7B5233" />
          <rect x="20" y="9.8" width="0.6" height="0.7" fill="#7B5233" />
          <rect x="20.6" y="10.5" width="0.5" height="0.6" fill="#7B5233" />
        </motion.g>

        {/* Pants */}
        <rect x="5" y="17" width="4.5" height="1" fill="#2A2A3A" />
        <rect x="10.5" y="17" width="4.5" height="1" fill="#2A2A3A" />
        <rect x="5" y="18" width="4.5" height="1" fill="#2A2A3A" />
        <rect x="10.5" y="18" width="4.5" height="1" fill="#2A2A3A" />
        <rect x="5" y="19" width="4.5" height="1" fill="#2A2A3A" />
        <rect x="10.5" y="19" width="4.5" height="1" fill="#2A2A3A" />
        <rect x="5" y="20" width="4.5" height="1" fill="#333340" />
        <rect x="10.5" y="20" width="4.5" height="1" fill="#333340" />

        {/* Belt */}
        <rect x="5" y="17" width="10" height="0.6" fill="#333" />
        <rect x="9.3" y="16.8" width="1.4" height="1" fill="var(--retro)" />

        {/* Shoes */}
        <rect x="4" y="21" width="5.5" height="1" fill="#1A1A1A" />
        <rect x="10.5" y="21" width="5.5" height="1" fill="#1A1A1A" />
        <rect x="3.5" y="22" width="6" height="1" fill="#222" />
        <rect x="10.5" y="22" width="6" height="1" fill="#222" />

        {/* Shoe soles */}
        <rect x="3" y="23" width="7" height="0.8" fill="#111" />
        <rect x="10" y="23" width="7" height="0.8" fill="#111" />
      </svg>
    </motion.div>
  );
}
