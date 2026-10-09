"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

const PATH = "M0 30 H430 L458 30 L478 12 H722 L742 30 H770 L790 48 H1200";
const JOINTS = [
  [458, 30],
  [478, 12],
  [722, 12],
  [742, 30],
  [790, 48],
];

export default function CircuitDivider({ className = "" }) {
  const [mounted, setMounted] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <svg
      aria-hidden
      suppressHydrationWarning
      viewBox="0 0 1200 60"
      className={`mx-auto block h-12 w-full max-w-5xl ${className}`}
      fill="none"
    >
      <defs>
        <linearGradient id="cd-grad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1200" y2="0">
          <stop offset="0" stopColor="#00F0FF" stopOpacity="0" />
          <stop offset="0.3" stopColor="#00F0FF" />
          <stop offset="0.7" stopColor="#7B2CBF" />
          <stop offset="1" stopColor="#7B2CBF" stopOpacity="0" />
        </linearGradient>
      </defs>

      <motion.path
        id="cd-path"
        d={PATH}
        stroke="url(#cd-grad)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: mounted && reduce ? 1 : 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />

      {JOINTS.map(([x, y], i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={y}
          r="4"
          fill="#060713"
          stroke="#00F0FF"
          strokeWidth="1.6"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + i * 0.22, type: "spring", stiffness: 260, damping: 16 }}
          style={{ transformOrigin: `${x}px ${y}px` }}
        />
      ))}

      {mounted && !reduce && (
        <g>
          <circle r="8" fill="#00F0FF" opacity="0.25" />
          <circle r="2.8" fill="#ffffff" />
          <animateMotion dur="5s" repeatCount="indefinite" begin="1.8s">
            <mpath href="#cd-path" />
          </animateMotion>
        </g>
      )}
    </svg>
  );
}
