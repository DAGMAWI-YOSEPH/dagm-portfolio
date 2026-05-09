"use client";

import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback, useRef } from "react";
import { createPortal } from "react-dom";

function CharacterSVG({ scale = 1 }: { scale?: number }) {
  const w = 28 * scale;
  const h = 58 * scale;
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 14 29"
      xmlns="http://www.w3.org/2000/svg"
      style={{ imageRendering: "pixelated" }}
    >
      <rect x="4" y="0" width="7" height="0.6" fill="#1A1A1A" />
      <rect x="3" y="0.6" width="8" height="0.6" fill="#1A1A1A" />
      <rect x="3" y="1.2" width="8" height="0.5" fill="#1A1A1A" />
      <rect x="7" y="-0.8" width="3" height="0.8" fill="#1A1A1A" />
      <rect x="8" y="-1.4" width="2" height="0.6" fill="#1A1A1A" />
      <rect x="2.5" y="1.4" width="1" height="0.6" fill="#3A3A3A" />
      <rect x="10.5" y="1.2" width="0.5" height="0.5" fill="#3A3A3A" />
      <rect x="3" y="1.7" width="8" height="3.3" fill="#6B4226" />
      <rect x="4" y="5" width="6" height="0.8" fill="#6B4226" />
      <rect x="3.2" y="2.8" width="3" height="1.5" fill="none" stroke="#222" strokeWidth="0.4" rx="0.2" />
      <rect x="7.8" y="2.8" width="3" height="1.5" fill="none" stroke="#222" strokeWidth="0.4" rx="0.2" />
      <rect x="6.2" y="3.3" width="1.6" height="0.3" fill="#222" />
      <rect x="4" y="3.1" width="1.4" height="0.9" fill="#FFF" />
      <rect x="4.4" y="3.2" width="0.7" height="0.7" fill="#1A1A1A" />
      <rect x="8.6" y="3.1" width="1.4" height="0.9" fill="#FFF" />
      <rect x="9" y="3.2" width="0.7" height="0.7" fill="#1A1A1A" />
      <rect x="5.5" y="4.6" width="3" height="0.4" fill="#4A2A14" />
      <rect x="5.5" y="5.8" width="3" height="0.8" fill="#6B4226" />
      <rect x="0.5" y="6.6" width="13" height="0.8" fill="#1E3A6E" />
      <rect x="0" y="7.4" width="14" height="0.8" fill="#1E3A6E" />
      <rect x="0" y="8.2" width="14" height="0.8" fill="#1E3A6E" />
      <rect x="0.5" y="9" width="13" height="0.8" fill="#1E3A6E" />
      <rect x="1.5" y="9.8" width="11" height="0.8" fill="#1E3A6E" />
      <rect x="2.5" y="10.6" width="9" height="0.8" fill="#1E3A6E" />
      <rect x="3" y="11.4" width="8" height="0.8" fill="#1E3A6E" />
      <rect x="0.5" y="6.8" width="13" height="0.35" fill="var(--retro)" />
      <rect x="3" y="11.6" width="8" height="0.35" fill="var(--retro)" />
      <rect x="5.5" y="8.5" width="3" height="1.2" fill="var(--retro)" rx="0.3" />
      <rect x="6.2" y="8.8" width="1.6" height="0.6" fill="#1E3A6E" />
      <rect x="6.5" y="6.6" width="1" height="5.6" fill="#16305A" />
      <motion.g
        animate={{ rotate: [-12, 12, -12] }}
        transition={{ duration: 0.45, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "1px 7.4px" }}
      >
        <rect x="-1" y="7.4" width="1.5" height="1.2" fill="#3A2518" />
        <rect x="-1.2" y="8.6" width="1.5" height="1.2" fill="#6B4226" />
        <rect x="-1.2" y="9.8" width="1.2" height="0.8" fill="#7B5233" />
      </motion.g>
      <motion.g
        animate={{ rotate: [12, -12, 12] }}
        transition={{ duration: 0.45, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "13px 7.4px" }}
      >
        <rect x="13.5" y="7.4" width="1.5" height="1.2" fill="#3A2518" />
        <rect x="13.7" y="8.6" width="1.5" height="1.2" fill="#6B4226" />
        <rect x="13.8" y="9.8" width="1.2" height="0.8" fill="#7B5233" />
      </motion.g>
      <motion.g
        animate={{ rotate: [10, -10, 10] }}
        transition={{ duration: 0.45, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "5px 12.2px" }}
      >
        <rect x="3.5" y="12.2" width="3" height="1.2" fill="#2A2A3A" />
        <rect x="3.5" y="13.4" width="3" height="1.2" fill="#2A2A3A" />
        <rect x="3.5" y="14.6" width="3" height="1.2" fill="#333340" />
        <rect x="3" y="15.8" width="3.5" height="0.8" fill="#1A1A1A" />
        <rect x="2.5" y="16.6" width="4" height="0.7" fill="#222" />
      </motion.g>
      <motion.g
        animate={{ rotate: [-10, 10, -10] }}
        transition={{ duration: 0.45, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "9px 12.2px" }}
      >
        <rect x="7.5" y="12.2" width="3" height="1.2" fill="#2A2A3A" />
        <rect x="7.5" y="13.4" width="3" height="1.2" fill="#2A2A3A" />
        <rect x="7.5" y="14.6" width="3" height="1.2" fill="#333340" />
        <rect x="7.5" y="15.8" width="3.5" height="0.8" fill="#1A1A1A" />
        <rect x="7.5" y="16.6" width="4" height="0.7" fill="#222" />
      </motion.g>
    </svg>
  );
}

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
      animate={{
        opacity: [0, 1, 1, 1, 0],
        ...slideIn,
      }}
      transition={{ duration: 5, times: [0, 0.12, 0.5, 0.85, 1], ease: "easeInOut" }}
      onAnimationComplete={onDone}
      className="fixed pointer-events-none"
      style={{ ...styles[side], zIndex: 9998 }}
    >
      <svg
        width="44"
        height="40"
        viewBox="0 0 14 13"
        xmlns="http://www.w3.org/2000/svg"
        style={{ imageRendering: "pixelated" }}
      >
        <rect x="3" y="0" width="8" height="0.6" fill="#1A1A1A" />
        <rect x="2.5" y="0.6" width="9" height="0.6" fill="#1A1A1A" />
        <rect x="7" y="-0.6" width="3" height="0.6" fill="#1A1A1A" />
        <rect x="2" y="1" width="0.8" height="0.5" fill="#3A3A3A" />
        <rect x="2.5" y="1.2" width="9" height="4" fill="#6B4226" />
        <rect x="3.5" y="5.2" width="7" height="1" fill="#6B4226" />
        <rect x="2.8" y="2.5" width="3.4" height="1.8" fill="none" stroke="#222" strokeWidth="0.4" rx="0.2" />
        <rect x="7.8" y="2.5" width="3.4" height="1.8" fill="none" stroke="#222" strokeWidth="0.4" rx="0.2" />
        <rect x="6.2" y="3.1" width="1.6" height="0.35" fill="#222" />
        <motion.g animate={{ x: [0, 0.4, -0.4, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <rect x="3.5" y="2.9" width="1.8" height="1.2" fill="#FFF" />
          <rect x="4.1" y="3.1" width="0.9" height="0.9" fill="#1A1A1A" />
          <rect x="8.5" y="2.9" width="1.8" height="1.2" fill="#FFF" />
          <rect x="9.1" y="3.1" width="0.9" height="0.9" fill="#1A1A1A" />
        </motion.g>
        <rect x="5" y="5.5" width="4" height="0.5" fill="#4A2A14" />
        <rect x="2" y="6.2" width="10" height="1.5" fill="#1E3A6E" />
        <rect x="2" y="6.3" width="10" height="0.3" fill="var(--retro)" />
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

function AdventurerCharacter() {
  const [heroEl, setHeroEl] = useState<HTMLElement | null>(null);
  const [heroVisible, setHeroVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();
  const running = useRef(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const el = document.getElementById("hero-name");
    setHeroEl(el);
    if (!el) return;

    const obs = new IntersectionObserver(
      ([e]) => setHeroVisible(e.isIntersecting),
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!heroVisible || !heroEl) return;
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
    return () => {
      running.current = false;
      clearTimeout(t);
      controls.stop();
    };
  }, [heroVisible, heroEl, controls, isMobile]);

  if (!heroVisible || !heroEl) return null;

  return createPortal(
    <motion.div
      animate={controls}
      className="pointer-events-none"
      style={{ position: "absolute", bottom: 2, left: 0, zIndex: 10 }}
    >
      <CharacterSVG scale={isMobile ? 0.7 : 1} />
    </motion.div>,
    heroEl
  );
}

function SpyCharacter() {
  const [heroVisible, setHeroVisible] = useState(true);
  const [peekSide, setPeekSide] = useState<"right" | "left" | "bottom">("right");
  const [showPeek, setShowPeek] = useState(false);

  useEffect(() => {
    const el = document.getElementById("hero-name");
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => setHeroVisible(e.isIntersecting),
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (heroVisible) {
      setShowPeek(false);
      return;
    }
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

export function GlobalCharacter() {
  return (
    <>
      <AdventurerCharacter />
      <SpyCharacter />
    </>
  );
}
