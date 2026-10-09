"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import BorderBeam from "./svg/BorderBeam";

export default function SpotlightCard({ children, className = "", maxTilt = 7, cursor = "view", onClick, ...props }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 180, damping: 18 });
  const rotateY = useSpring(ry, { stiffness: 180, damping: 18 });

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = e.clientX - r.left;
    const py = e.clientY - r.top;

    el.style.setProperty("--mx", `${px}px`);
    el.style.setProperty("--my", `${py}px`);

    if (reduce) return;
    rx.set(-((py / r.height - 0.5) * 2) * maxTilt);
    ry.set(((px / r.width - 0.5) * 2) * maxTilt);
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      data-cursor={cursor}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`spotlight-card holo-card group relative z-10 ${className}`}
      onClick={onClick}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[inherit]" />
      <BorderBeam />
      <div className="relative z-20 flex h-full flex-col p-7">{children}</div>
    </motion.div>
  );
}
