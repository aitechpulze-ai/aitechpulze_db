"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function PremiumCursor() {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState("idle");
  const [pressed, setPressed] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const dotX = useSpring(x, { stiffness: 1200, damping: 50, mass: 0.2 });
  const dotY = useSpring(y, { stiffness: 1200, damping: 50, mass: 0.2 });
  const ringX = useSpring(x, { stiffness: 260, damping: 26, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 260, damping: 26, mass: 0.5 });
  const trailX = useSpring(x, { stiffness: 90, damping: 20, mass: 0.8 });
  const trailY = useSpring(y, { stiffness: 90, damping: 20, mass: 0.8 });

  useEffect(() => {
    const move = (e) => {
      if (!enabled) setEnabled(true);
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };

    const over = (e) => {
      const t = e.target;
      if (!t) return;
      const hint = t.closest("[data-cursor]")?.dataset.cursor;
      if (hint === "view" || hint === "text") return setMode(hint);
      if (t.closest("a, button, [role='button'], input, textarea, select, label")) return setMode("link");
      setMode("idle");
    };

    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.documentElement.addEventListener("mouseleave", leave);
    document.documentElement.addEventListener("mouseenter", enter);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.documentElement.removeEventListener("mouseenter", enter);
    };
  }, [x, y, enabled]);

  useEffect(() => {
    if (enabled) {
      document.documentElement.classList.add("has-custom-cursor");
    }
  }, [enabled]);

  if (!enabled) return null;

  const ring = {
    idle: { width: 38, height: 38, borderRadius: 999 },
    link: { width: 64, height: 64, borderRadius: 999 },
    view: { width: 84, height: 84, borderRadius: 999 },
    text: { width: 3, height: 30, borderRadius: 4 },
  }[mode];

  const base = "pointer-events-none fixed left-0 top-0 z-[9999]";

  return (
    <>
      <motion.div
        aria-hidden
        className={`${base} h-24 w-24 rounded-full`}
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(0,240,255,0.22), rgba(123,44,191,0.10) 45%, transparent 70%)",
          filter: "blur(10px)",
        }}
        animate={{ opacity: visible ? 1 : 0, scale: mode === "link" || mode === "view" ? 1.5 : 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        aria-hidden
        className={`${base} flex items-center justify-center border`}
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          ...ring,
          opacity: visible ? 1 : 0,
          scale: pressed ? 0.85 : 1,
          borderColor: mode === "link" || mode === "view" ? "rgba(0,240,255,0.9)" : "rgba(0,240,255,0.45)",
          backgroundColor: mode === "view" ? "rgba(0,240,255,0.12)" : "rgba(0,240,255,0)",
          boxShadow:
            mode === "idle"
              ? "0 0 14px rgba(0,240,255,0.25)"
              : "0 0 28px rgba(0,240,255,0.55), inset 0 0 14px rgba(123,44,191,0.35)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
      >
        {mode === "view" && (
          <span className="font-[family-name:var(--font-grotesk)] text-xs font-semibold text-white">View</span>
        )}
      </motion.div>
      <motion.div
        aria-hidden
        className={`${base} h-[7px] w-[7px] rounded-full bg-[#00F0FF]`}
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: "0 0 12px 2px rgba(0,240,255,0.9)",
        }}
        animate={{ opacity: visible && mode !== "text" ? 1 : 0, scale: mode === "link" ? 0.5 : 1 }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
