"use client";

import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback, useRef } from "react";
import { createPortal } from "react-dom";

/* ─── Holographic Chair SVG ─── */
function HoloChairSVG() {
  return (
    <svg
      width="72"
      height="40"
      viewBox="0 0 36 20"
      xmlns="http://www.w3.org/2000/svg"
      style={{ imageRendering: "pixelated" }}
    >
      {/* Holo glow base */}
      <ellipse cx="18" cy="19" rx="16" ry="1.5" fill="rgba(0, 240, 255, 0.15)" />
      {/* Back rest - translucent hologram */}
      <rect x="4" y="0" width="28" height="4" fill="rgba(0, 240, 255, 0.08)" stroke="rgba(0, 240, 255, 0.4)" strokeWidth="0.3" />
      <rect x="5" y="0.5" width="26" height="3" fill="rgba(0, 240, 255, 0.05)" />
      {/* Holo scan lines on back */}
      <rect x="5" y="1" width="26" height="0.2" fill="rgba(0, 240, 255, 0.3)" />
      <rect x="5" y="2" width="26" height="0.2" fill="rgba(0, 240, 255, 0.2)" />
      <rect x="5" y="3" width="26" height="0.2" fill="rgba(0, 240, 255, 0.15)" />
      {/* Seat */}
      <rect x="2" y="4" width="32" height="6" fill="rgba(0, 240, 255, 0.06)" stroke="rgba(0, 240, 255, 0.35)" strokeWidth="0.3" />
      <rect x="3" y="4.5" width="30" height="5" fill="rgba(0, 240, 255, 0.04)" />
      {/* Seat scan lines */}
      <rect x="3" y="5.5" width="30" height="0.15" fill="rgba(0, 240, 255, 0.2)" />
      <rect x="3" y="7" width="30" height="0.15" fill="rgba(0, 240, 255, 0.15)" />
      <rect x="3" y="8.5" width="30" height="0.15" fill="rgba(0, 240, 255, 0.1)" />
      {/* Armrests */}
      <rect x="0" y="2" width="3" height="8" fill="rgba(0, 240, 255, 0.1)" stroke="rgba(0, 240, 255, 0.3)" strokeWidth="0.3" />
      <rect x="33" y="2" width="3" height="8" fill="rgba(0, 240, 255, 0.1)" stroke="rgba(0, 240, 255, 0.3)" strokeWidth="0.3" />
      {/* Legs - energy beams */}
      <rect x="5" y="10" width="1.5" height="8" fill="rgba(0, 240, 255, 0.3)" />
      <rect x="29.5" y="10" width="1.5" height="8" fill="rgba(0, 240, 255, 0.3)" />
      <rect x="5.2" y="10" width="1" height="8" fill="rgba(0, 240, 255, 0.15)" />
      <rect x="29.7" y="10" width="1" height="8" fill="rgba(0, 240, 255, 0.15)" />
      {/* Pink accent lines */}
      <rect x="4" y="0" width="28" height="0.4" fill="rgba(255, 46, 151, 0.4)" />
      <rect x="2" y="10" width="32" height="0.3" fill="rgba(255, 46, 151, 0.3)" />
    </svg>
  );
}

/* ─── Cyberpunk Walking Character ─── */
function WalkingCharacterSVG({ scale = 1 }: { scale?: number }) {
  const w = 28 * scale;
  const h = 58 * scale;
  return (
    <svg width={w} height={h} viewBox="0 0 14 29" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: "pixelated" }}>
      {/* Cyber mohawk hair */}
      <rect x="5" y="-1.5" width="5" height="1" fill="#00F0FF" opacity="0.9" />
      <rect x="5.5" y="-2.2" width="4" height="0.7" fill="#00F0FF" opacity="0.7" />
      <rect x="6" y="-2.8" width="3" height="0.6" fill="#00F0FF" opacity="0.5" />
      <rect x="4" y="0" width="7" height="0.6" fill="#1A1A1A" />
      <rect x="3" y="0.6" width="8" height="0.6" fill="#1A1A1A" />
      <rect x="3" y="1.2" width="8" height="0.5" fill="#1A1A1A" />
      {/* Side shave marks */}
      <rect x="2.5" y="1.4" width="1" height="0.3" fill="#333" />
      <rect x="2.5" y="1.8" width="0.8" height="0.2" fill="#333" />
      <rect x="10.5" y="1.4" width="1" height="0.3" fill="#333" />
      <rect x="10.7" y="1.8" width="0.8" height="0.2" fill="#333" />
      {/* Head */}
      <rect x="3" y="1.7" width="8" height="3.3" fill="#6B4226" />
      <rect x="4" y="5" width="6" height="0.8" fill="#6B4226" />
      {/* One-eye cyber monocle (right eye) */}
      <rect x="7.5" y="2.5" width="3.8" height="2" fill="rgba(0, 240, 255, 0.12)" stroke="#00F0FF" strokeWidth="0.35" rx="0.3" />
      <rect x="7.5" y="3.4" width="3.8" height="0.15" fill="#00F0FF" opacity="0.5" />
      {/* Monocle arm */}
      <rect x="6.2" y="3.3" width="1.3" height="0.3" fill="#00F0FF" opacity="0.4" />
      <rect x="11.3" y="3" width="0.5" height="1.2" fill="#00F0FF" opacity="0.3" />
      {/* Left eye (bare) */}
      <rect x="4" y="3.1" width="1.4" height="0.9" fill="#FFF" />
      <rect x="4.4" y="3.2" width="0.7" height="0.7" fill="#1A1A1A" />
      {/* Right eye (behind monocle, glowing) */}
      <rect x="8.6" y="3.1" width="1.4" height="0.9" fill="rgba(255,255,255,0.8)" />
      <rect x="9" y="3.2" width="0.7" height="0.7" fill="#FF2E97" />
      {/* Mouth */}
      <rect x="5.5" y="4.6" width="3" height="0.4" fill="#4A2A14" />
      {/* Neck with tech implant */}
      <rect x="5.5" y="5.8" width="3" height="0.8" fill="#6B4226" />
      <rect x="5" y="5.9" width="0.5" height="0.6" fill="#00F0FF" opacity="0.4" />
      {/* Cyber jacket */}
      <rect x="0.5" y="6.6" width="13" height="0.8" fill="#0E1628" />
      <rect x="0" y="7.4" width="14" height="0.8" fill="#0E1628" />
      <rect x="0" y="8.2" width="14" height="0.8" fill="#0E1628" />
      <rect x="0.5" y="9" width="13" height="0.8" fill="#0E1628" />
      <rect x="1.5" y="9.8" width="11" height="0.8" fill="#0E1628" />
      <rect x="2.5" y="10.6" width="9" height="0.8" fill="#0E1628" />
      <rect x="3" y="11.4" width="8" height="0.8" fill="#0E1628" />
      {/* Neon trim lines */}
      <rect x="0.5" y="6.8" width="13" height="0.25" fill="#00F0FF" opacity="0.7" />
      <rect x="3" y="11.6" width="8" height="0.25" fill="#FF2E97" opacity="0.7" />
      {/* Chest circuit */}
      <rect x="5.5" y="8.2" width="3" height="1.5" fill="rgba(0, 240, 255, 0.2)" stroke="#00F0FF" strokeWidth="0.2" rx="0.2" />
      <rect x="6.2" y="8.5" width="0.3" height="0.8" fill="#00F0FF" opacity="0.6" />
      <rect x="6.8" y="8.5" width="0.3" height="0.8" fill="#FF2E97" opacity="0.6" />
      <rect x="7.4" y="8.5" width="0.3" height="0.8" fill="#00F0FF" opacity="0.6" />
      {/* Zipper */}
      <rect x="6.5" y="6.6" width="1" height="5.6" fill="#0A1020" />
      {/* Arms */}
      <motion.g animate={{ rotate: [-12, 12, -12] }} transition={{ duration: 0.45, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "1px 7.4px" }}>
        <rect x="-1" y="7.4" width="1.5" height="1.2" fill="#0E1628" />
        <rect x="-1.2" y="8.6" width="1.5" height="1.2" fill="#6B4226" />
        <rect x="-1.2" y="9.8" width="1.2" height="0.8" fill="#7B5233" />
        <rect x="-1.3" y="9.5" width="0.3" height="0.3" fill="#00F0FF" opacity="0.5" />
      </motion.g>
      <motion.g animate={{ rotate: [12, -12, 12] }} transition={{ duration: 0.45, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "13px 7.4px" }}>
        <rect x="13.5" y="7.4" width="1.5" height="1.2" fill="#0E1628" />
        <rect x="13.7" y="8.6" width="1.5" height="1.2" fill="#6B4226" />
        <rect x="13.8" y="9.8" width="1.2" height="0.8" fill="#7B5233" />
        <rect x="14.8" y="9.5" width="0.3" height="0.3" fill="#FF2E97" opacity="0.5" />
      </motion.g>
      {/* Legs */}
      <motion.g animate={{ rotate: [10, -10, 10] }} transition={{ duration: 0.45, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "5px 12.2px" }}>
        <rect x="3.5" y="12.2" width="3" height="1.2" fill="#1A1A2E" />
        <rect x="3.5" y="13.4" width="3" height="1.2" fill="#1A1A2E" />
        <rect x="3.5" y="14.6" width="3" height="1.2" fill="#1A1A2E" />
        <rect x="3.5" y="14.5" width="0.3" height="1.3" fill="#00F0FF" opacity="0.3" />
        <rect x="3" y="15.8" width="3.5" height="0.8" fill="#0A0A15" />
        <rect x="2.5" y="16.6" width="4" height="0.7" fill="#0E1628" />
        <rect x="2.5" y="16.6" width="4" height="0.15" fill="#00F0FF" opacity="0.3" />
      </motion.g>
      <motion.g animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 0.45, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "9px 12.2px" }}>
        <rect x="7.5" y="12.2" width="3" height="1.2" fill="#1A1A2E" />
        <rect x="7.5" y="13.4" width="3" height="1.2" fill="#1A1A2E" />
        <rect x="7.5" y="14.6" width="3" height="1.2" fill="#1A1A2E" />
        <rect x="10.2" y="14.5" width="0.3" height="1.3" fill="#FF2E97" opacity="0.3" />
        <rect x="7.5" y="15.8" width="3.5" height="0.8" fill="#0A0A15" />
        <rect x="7.5" y="16.6" width="4" height="0.7" fill="#0E1628" />
        <rect x="7.5" y="16.6" width="4" height="0.15" fill="#FF2E97" opacity="0.3" />
      </motion.g>
    </svg>
  );
}

/* ─── Sitting Cyber Character ─── */
function SittingCharacterSVG({ scale = 1, eyeOffsetX = 0, waving = false }: { scale?: number; eyeOffsetX?: number; waving?: boolean }) {
  const w = 28 * scale;
  const h = 40 * scale;
  return (
    <svg width={w} height={h} viewBox="0 0 14 20" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: "pixelated" }}>
      {/* Cyber mohawk */}
      <rect x="5" y="-1.5" width="5" height="1" fill="#00F0FF" opacity="0.9" />
      <rect x="5.5" y="-2.2" width="4" height="0.7" fill="#00F0FF" opacity="0.7" />
      <rect x="6" y="-2.8" width="3" height="0.6" fill="#00F0FF" opacity="0.5" />
      <rect x="4" y="0" width="7" height="0.6" fill="#1A1A1A" />
      <rect x="3" y="0.6" width="8" height="0.6" fill="#1A1A1A" />
      <rect x="3" y="1.2" width="8" height="0.5" fill="#1A1A1A" />
      <rect x="2.5" y="1.4" width="1" height="0.3" fill="#333" />
      <rect x="10.5" y="1.4" width="1" height="0.3" fill="#333" />
      {/* Head */}
      <rect x="3" y="1.7" width="8" height="3.3" fill="#6B4226" />
      <rect x="4" y="5" width="6" height="0.8" fill="#6B4226" />
      {/* One-eye cyber monocle (right eye) */}
      <rect x="7.5" y="2.5" width="3.8" height="2" fill="rgba(0, 240, 255, 0.12)" stroke="#00F0FF" strokeWidth="0.35" rx="0.3" />
      <rect x="7.5" y="3.4" width="3.8" height="0.15" fill="#00F0FF" opacity="0.5" />
      <rect x="6.2" y="3.3" width="1.3" height="0.3" fill="#00F0FF" opacity="0.4" />
      <rect x="11.3" y="3" width="0.5" height="1.2" fill="#00F0FF" opacity="0.3" />
      {/* Left eye (bare, tracking mouse) */}
      <rect x="4" y="3.1" width="1.4" height="0.9" fill="#FFF" />
      <rect x={4.2 + eyeOffsetX * 0.5} y="3.2" width="0.7" height="0.7" fill="#1A1A1A" />
      {/* Right eye (behind monocle, tracking mouse) */}
      <rect x="8.6" y="3.1" width="1.4" height="0.9" fill="rgba(255,255,255,0.8)" />
      <rect x={8.8 + eyeOffsetX * 0.5} y="3.2" width="0.7" height="0.7" fill="#FF2E97" />
      {/* Mouth */}
      <rect x="5.5" y="4.6" width="3" height="0.4" fill="#4A2A14" />
      {/* Neck */}
      <rect x="5.5" y="5.8" width="3" height="0.8" fill="#6B4226" />
      <rect x="5" y="5.9" width="0.5" height="0.6" fill="#00F0FF" opacity="0.4" />
      {/* Cyber jacket */}
      <rect x="0.5" y="6.6" width="13" height="0.8" fill="#0E1628" />
      <rect x="0" y="7.4" width="14" height="0.8" fill="#0E1628" />
      <rect x="0" y="8.2" width="14" height="0.8" fill="#0E1628" />
      <rect x="0.5" y="9" width="13" height="0.8" fill="#0E1628" />
      <rect x="1.5" y="9.8" width="11" height="0.8" fill="#0E1628" />
      <rect x="2.5" y="10.6" width="9" height="0.8" fill="#0E1628" />
      <rect x="3" y="11.4" width="8" height="0.8" fill="#0E1628" />
      <rect x="0.5" y="6.8" width="13" height="0.25" fill="#00F0FF" opacity="0.7" />
      <rect x="3" y="11.6" width="8" height="0.25" fill="#FF2E97" opacity="0.7" />
      <rect x="5.5" y="8.2" width="3" height="1.5" fill="rgba(0, 240, 255, 0.2)" stroke="#00F0FF" strokeWidth="0.2" rx="0.2" />
      <rect x="6.5" y="6.6" width="1" height="5.6" fill="#0A1020" />
      {/* Right arm resting */}
      <rect x="13" y="9" width="2" height="1.5" fill="#0E1628" />
      <rect x="13" y="10.5" width="1.8" height="1" fill="#6B4226" />
      {/* Left arm — waving when waving=true, else resting */}
      {waving ? (
        <motion.g
          animate={{ rotate: [0, -30, 0, -30, 0] }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 1.5 }}
          style={{ transformOrigin: "1px 9px" }}
        >
          <rect x="-1" y="7" width="2" height="1.5" fill="#0E1628" />
          <rect x="-1.5" y="5.5" width="1.8" height="1.5" fill="#6B4226" />
          <rect x="-1.5" y="5" width="1" height="0.5" fill="#7B5233" />
          <rect x="-0.5" y="5.2" width="0.8" height="0.4" fill="#7B5233" />
        </motion.g>
      ) : (
        <>
          <rect x="-1" y="9" width="2" height="1.5" fill="#0E1628" />
          <rect x="-0.8" y="10.5" width="1.8" height="1" fill="#6B4226" />
        </>
      )}
      {/* Bent legs */}
      <rect x="2" y="12.2" width="4.5" height="1.5" fill="#1A1A2E" />
      <rect x="7.5" y="12.2" width="4.5" height="1.5" fill="#1A1A2E" />
      <rect x="0.5" y="13.7" width="5" height="1.5" fill="#1A1A2E" />
      <rect x="8.5" y="13.7" width="5" height="1.5" fill="#1A1A2E" />
      <rect x="0.5" y="14.5" width="0.3" height="0.7" fill="#00F0FF" opacity="0.3" />
      <rect x="13.2" y="14.5" width="0.3" height="0.7" fill="#FF2E97" opacity="0.3" />
      {/* Cyber boots */}
      <rect x="0" y="15.2" width="4" height="1" fill="#0A0A15" />
      <rect x="10" y="15.2" width="4" height="1" fill="#0A0A15" />
      <rect x="0" y="15.2" width="4" height="0.15" fill="#00F0FF" opacity="0.3" />
      <rect x="10" y="15.2" width="4" height="0.15" fill="#FF2E97" opacity="0.3" />
    </svg>
  );
}

/* ─── Peeking Cyber Head ─── */
function PeekingHead({ side, onDone }: { side: "right" | "left" | "bottom"; onDone: () => void }) {
  const styles: Record<string, React.CSSProperties> = {
    right: { right: 0, top: "35%", transformOrigin: "right center" },
    left: { left: 0, top: "45%", transformOrigin: "left center" },
    bottom: { bottom: 0, left: "55%", transformOrigin: "center bottom" },
  };

  const slideIn =
    side === "right"
      ? { x: [30, -10, -10, -10, 30] }
      : side === "left"
        ? { x: [-30, 10, 10, 10, -30] }
        : { y: [30, -10, -10, -10, 30] };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 1, 0], ...slideIn }}
      transition={{ duration: 5, times: [0, 0.12, 0.5, 0.85, 1], ease: "easeInOut" }}
      onAnimationComplete={onDone}
      className="fixed pointer-events-none"
      style={{ ...styles[side], zIndex: 9998 }}
    >
      <svg width="44" height="40" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: "pixelated" }}>
        {/* Cyber mohawk */}
        <rect x="5" y="-1.5" width="5" height="1" fill="#00F0FF" opacity="0.8" />
        <rect x="5.5" y="-2" width="4" height="0.5" fill="#00F0FF" opacity="0.5" />
        <rect x="3" y="0" width="8" height="0.6" fill="#1A1A1A" />
        <rect x="2.5" y="0.6" width="9" height="0.6" fill="#1A1A1A" />
        <rect x="2" y="1" width="0.8" height="0.3" fill="#333" />
        <rect x="2.5" y="1.2" width="9" height="4" fill="#6B4226" />
        <rect x="3.5" y="5.2" width="7" height="1" fill="#6B4226" />
        {/* One-eye monocle (right eye) */}
        <rect x="7.8" y="2.3" width="3.8" height="2.2" fill="rgba(0, 240, 255, 0.12)" stroke="#00F0FF" strokeWidth="0.35" rx="0.3" />
        <rect x="7.8" y="3.3" width="3.8" height="0.15" fill="#00F0FF" opacity="0.4" />
        <rect x="6.5" y="3.2" width="1.3" height="0.3" fill="#00F0FF" opacity="0.4" />
        {/* Eyes */}
        <motion.g animate={{ x: [0, 0.4, -0.4, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <rect x="3.5" y="2.9" width="1.8" height="1.2" fill="#FFF" />
          <rect x="4.1" y="3.1" width="0.9" height="0.9" fill="#1A1A1A" />
          <rect x="8.5" y="2.9" width="1.8" height="1.2" fill="rgba(255,255,255,0.7)" />
          <rect x="9.1" y="3.1" width="0.9" height="0.9" fill="#FF2E97" />
        </motion.g>
        <rect x="5" y="5.5" width="4" height="0.5" fill="#4A2A14" />
        {/* Jacket */}
        <rect x="2" y="6.2" width="10" height="1.5" fill="#0E1628" />
        <rect x="2" y="6.3" width="10" height="0.2" fill="#00F0FF" opacity="0.5" />
        {/* Waving hand */}
        <motion.g
          animate={{ rotate: [0, -25, 0, -25, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 0.8, delay: 0.8 }}
          style={{ transformOrigin: side === "right" ? "2px 9px" : "12px 9px" }}
        >
          <rect x={side === "left" ? 11 : 0} y="8" width="3" height="2.5" fill="#7B5233" />
          <rect x={side === "left" ? 11.5 : -0.5} y="7" width="1" height="1" fill="#7B5233" />
          <rect x={side === "left" ? 12.5 : 0.5} y="7.2" width="1" height="0.8" fill="#7B5233" />
        </motion.g>
      </svg>
    </motion.div>
  );
}

/* ─── Character 1: Adventurer (walks on name, draggable, sits on holo-chair) ─── */
function AdventurerCharacter() {
  const [heroEl, setHeroEl] = useState<HTMLElement | null>(null);
  const [heroVisible, setHeroVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();
  const running = useRef(true);

  const [isDragging, setIsDragging] = useState(false);
  const [isSitting, setIsSitting] = useState(false);
  const [sitPos, setSitPos] = useState({ x: 0, y: 0 });
  const [eyeOffset, setEyeOffset] = useState(0);
  const [mouseNear, setMouseNear] = useState(false);
  const [waving, setWaving] = useState(true);
  const dragRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const el = document.getElementById("hero-name");
    setHeroEl(el);
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setHeroVisible(e.isIntersecting), { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Adventure loop
  useEffect(() => {
    if (!heroVisible || !heroEl || isDragging || isSitting) return;
    running.current = true;
    const m = isMobile ? 0.45 : 1;
    const nameW = heroEl.offsetWidth;
    const travel = (nameW - 40) * m;

    async function loop() {
      while (running.current) {
        await controls.start({ x: travel, y: 0, scaleX: 1, scale: 1, opacity: 1, transition: { duration: 2.8, ease: "linear" } });
        if (!running.current) break;
        await controls.start({ y: -45 * m, transition: { duration: 0.8, ease: "easeOut" } });
        if (!running.current) break;
        await controls.start({ scale: 0.55, opacity: 0.35, transition: { duration: 0.5 } });
        if (!running.current) break;
        await controls.start({ scale: 0.8, opacity: 0.7, x: travel - 30 * m, transition: { duration: 0.4 } });
        if (!running.current) break;
        await controls.start({ scale: 1, opacity: 1, transition: { duration: 0.3 } });
        if (!running.current) break;
        await controls.start({ y: 0, transition: { duration: 0.6, ease: "easeIn" } });
        if (!running.current) break;
        await controls.start({ scaleX: -1, transition: { duration: 0.1 } });
        if (!running.current) break;
        await controls.start({ x: travel * 0.3, transition: { duration: 1.8, ease: "linear" } });
        if (!running.current) break;
        await controls.start({ y: [0, -55 * m, 0], transition: { duration: 0.65, ease: [0.33, 1, 0.68, 1] } });
        if (!running.current) break;
        await controls.start({ x: 0, transition: { duration: 1.4, ease: "linear" } });
        if (!running.current) break;
        await controls.start({ scaleX: 1, transition: { duration: 0.1 } });
        if (!running.current) break;
        await controls.start({ y: [0, -25 * m, 0], transition: { duration: 0.4 } });
        if (!running.current) break;
      }
    }

    const t = setTimeout(loop, 2600);
    return () => { running.current = false; clearTimeout(t); controls.stop(); };
  }, [heroVisible, heroEl, controls, isMobile, isDragging, isSitting]);

  // Mouse tracking + proximity detection when sitting
  useEffect(() => {
    if (!isSitting) return;
    function onMouseMove(e: MouseEvent) {
      const dx = e.clientX - sitPos.x;
      const dy = e.clientY - sitPos.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      setEyeOffset(Math.max(-1, Math.min(1, dx / 300)));
      setMouseNear(dist < 100);
    }
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [isSitting, sitPos.x, sitPos.y]);

  // When mouse gets close, character runs away then resettles
  useEffect(() => {
    if (!mouseNear || !isSitting) return;
    setWaving(false);
    const jumpDist = 150 + Math.random() * 200;
    const dir = Math.random() > 0.5 ? 1 : -1;
    const newX = Math.max(20, Math.min(window.innerWidth - 90, sitPos.x + jumpDist * dir));
    const newY = Math.max(60, Math.min(window.innerHeight - 80, sitPos.y + (Math.random() - 0.5) * 100));
    setSitPos({ x: newX, y: newY });
    const t = setTimeout(() => setWaving(true), 2000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mouseNear]);

  // Drag handlers
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    running.current = false;
    controls.stop();
    setIsDragging(true);
    setIsSitting(false);
    setWaving(true);

    const el = e.currentTarget as HTMLElement;
    el.setPointerCapture(e.pointerId);
    const rect = el.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    function onMove(ev: PointerEvent) {
      el.style.position = "fixed";
      el.style.left = `${ev.clientX - offsetX}px`;
      el.style.top = `${ev.clientY - offsetY}px`;
      el.style.zIndex = "9999";
    }

    function onUp(ev: PointerEvent) {
      el.releasePointerCapture(ev.pointerId);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      setIsDragging(false);
      setSitPos({ x: ev.clientX - offsetX, y: ev.clientY - offsetY + 5 });
      setIsSitting(true);
    }

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
  }, [controls]);

  // Double-click to release
  const onDoubleClick = useCallback(() => {
    setIsSitting(false);
    setIsDragging(false);
    if (dragRef.current) {
      dragRef.current.style.position = "absolute";
      dragRef.current.style.left = "0px";
      dragRef.current.style.top = "";
      dragRef.current.style.zIndex = "10";
    }
  }, []);

  // Sitting on holographic chair
  if (isSitting) {
    return (
      <motion.div
        className="fixed select-none"
        animate={{ x: sitPos.x - 22, y: sitPos.y }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{ zIndex: 9999, left: 0, top: 0 }}
      >
        {/* Holo chair behind */}
        <div style={{ position: "absolute", bottom: -8, left: -10 }}>
          <HoloChairSVG />
        </div>
        {/* Sitting character */}
        <div
          ref={dragRef}
          onPointerDown={onPointerDown}
          onDoubleClick={onDoubleClick}
          style={{ cursor: "grab", position: "relative", zIndex: 1 }}
        >
          <SittingCharacterSVG scale={isMobile ? 0.7 : 1} eyeOffsetX={eyeOffset} waving={waving} />
        </div>
        {/* Holo glow effect under chair */}
        <div
          style={{
            position: "absolute",
            bottom: -12,
            left: -5,
            width: 60,
            height: 6,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(0, 240, 255, 0.2) 0%, transparent 70%)",
            filter: "blur(2px)",
          }}
        />
      </motion.div>
    );
  }

  // Walking on hero name
  if (!heroVisible || !heroEl) return null;

  return createPortal(
    <motion.div
      ref={dragRef}
      animate={controls}
      onPointerDown={onPointerDown}
      style={{ position: "absolute", bottom: 2, left: 0, zIndex: 10, cursor: isDragging ? "grabbing" : "grab" }}
    >
      <WalkingCharacterSVG scale={isMobile ? 0.7 : 1} />
    </motion.div>,
    heroEl
  );
}

/* ─── Character 2: Spy ─── */
function SpyCharacter() {
  const [heroVisible, setHeroVisible] = useState(true);
  const [peekSide, setPeekSide] = useState<"right" | "left" | "bottom">("right");
  const [showPeek, setShowPeek] = useState(false);

  useEffect(() => {
    const el = document.getElementById("hero-name");
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setHeroVisible(e.isIntersecting), { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (heroVisible) { setShowPeek(false); return; }
    const sides: Array<"right" | "left" | "bottom"> = ["right", "left", "bottom"];
    let t: ReturnType<typeof setTimeout>;
    function schedule() {
      t = setTimeout(() => {
        setPeekSide(sides[Math.floor(Math.random() * sides.length)]);
        setShowPeek(true);
      }, 2500 + Math.random() * 4000);
    }
    schedule();
    return () => clearTimeout(t);
  }, [heroVisible, showPeek]);

  const onPeekDone = useCallback(() => setShowPeek(false), []);

  return (
    <AnimatePresence>
      {showPeek && !heroVisible && (
        <PeekingHead key={peekSide + Date.now()} side={peekSide} onDone={onPeekDone} />
      )}
    </AnimatePresence>
  );
}

/* ─── Export ─── */
export function GlobalCharacter() {
  return (
    <>
      <AdventurerCharacter />
      <SpyCharacter />
    </>
  );
}
