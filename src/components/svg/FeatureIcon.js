"use client";

import { motion, useReducedMotion } from "framer-motion";

const PATHS = {
  news: [
    "M10 8h22a2 2 0 0 1 2 2v28H12a2 2 0 0 1-2-2V8Z",
    "M34 16h6a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2h-6",
    "M16 16h12",
    "M16 23h12",
    "M16 30h8",
  ],
  tools: [
    "M14 14h20v20H14Z",
    "M20 8v6M28 8v6M20 34v6M28 34v6M8 20h6M8 28h6M34 20h6M34 28h6",
    "M20 24h8M24 20v8",
  ],
  tutorial: [
    "M6 10h36a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2Z",
    "M13 20l6 5-6 5",
    "M24 31h10",
  ],
  video: [
    "M6 10h36a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2Z",
    "M20 17l12 7-12 7Z",
  ],
};

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  show: (i) => ({
    pathLength: 1,
    opacity: 1,
    transition: { delay: i * 0.15, duration: 0.9, ease: "easeInOut" },
  }),
};

export default function FeatureIcon({ type, className = "h-12 w-12" }) {
  const reduce = useReducedMotion();
  const gid = `fi-grad-${type}`;

  return (
    <motion.svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
      className={className}
      initial={reduce ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      style={{ filter: "drop-shadow(0 0 8px rgba(0,240,255,0.45))" }}
    >
      <defs>
        <linearGradient id={gid} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0" stopColor="#00F0FF" />
          <stop offset="1" stopColor="#a974ff" />
        </linearGradient>
      </defs>
      {PATHS[type].map((d, i) => (
        <motion.path
          key={i}
          d={d}
          custom={i}
          variants={draw}
          stroke={`url(#${gid})`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </motion.svg>
  );
}
