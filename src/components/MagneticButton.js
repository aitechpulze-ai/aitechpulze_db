"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  strength = 0.3,
  className = "",
}) {
  const wrapRef = useRef(null);
  const [ripples, setRipples] = useState([]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 220, damping: 16, mass: 0.4 });
  const y = useSpring(my, { stiffness: 220, damping: 16, mass: 0.4 });

  const handleMove = (e) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - (r.left + r.width / 2)) * strength);
    my.set((e.clientY - (r.top + r.height / 2)) * strength);
  };

  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  const addRipple = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setRipples((p) => [...p, { id: Date.now(), x: e.clientX - r.left, y: e.clientY - r.top }]);
  };

  const inner = (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
      />
      {ripples.map((r) => (
        <motion.span
          key={r.id}
          aria-hidden
          className="pointer-events-none absolute h-10 w-10 rounded-full bg-white/40"
          style={{ left: r.x - 20, top: r.y - 20 }}
          initial={{ scale: 0, opacity: 0.6 }}
          animate={{ scale: 9, opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          onAnimationComplete={() => setRipples((p) => p.filter((i) => i.id !== r.id))}
        />
      ))}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  const look =
    variant === "primary"
      ? "bg-linear-to-r from-[#2563EB] via-[#5b3fd6] to-[#7B2CBF] text-white shadow-[0_0_30px_rgba(37,99,235,0.45)] hover:shadow-[0_0_46px_rgba(0,240,255,0.5)]"
      : "bg-white/[0.04] text-white backdrop-blur-xl border border-white/15 hover:border-[#00F0FF]/60 hover:shadow-[0_0_30px_rgba(0,240,255,0.25)]";

  const cls = `group relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3.5 font-[family-name:var(--font-grotesk)] text-[15px] font-medium transition-shadow duration-300 ${look} ${className}`;

  return (
    <motion.div
      ref={wrapRef}
      style={{ x, y }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="inline-block"
      whileTap={{ scale: 0.96 }}
    >
      {href ? (
        <a href={href} className={cls} onMouseDown={addRipple} onClick={onClick}>
          {inner}
        </a>
      ) : (
        <button type="button" className={cls} onMouseDown={addRipple} onClick={onClick}>
          {inner}
        </button>
      )}
    </motion.div>
  );
}
