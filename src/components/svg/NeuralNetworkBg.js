"use client";

import { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

function rng(seed) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const W = 1200;
const H = 700;
const rand = rng(11);

const NODES = Array.from({ length: 28 }, () => ({
  x: Math.round(rand() * W),
  y: Math.round(rand() * H),
  r: 1.6 + Math.round(rand() * 20) / 10,
}));

const EDGES = [];
for (let i = 0; i < NODES.length; i++) {
  for (let j = i + 1; j < NODES.length; j++) {
    const d = Math.hypot(NODES[i].x - NODES[j].x, NODES[i].y - NODES[j].y);
    if (d < 250) EDGES.push([i, j]);
  }
}
const PULSE_EDGES = EDGES.filter((_, i) => i % 3 === 0).slice(0, 16);

export default function NeuralNetworkBg({ className = "" }) {
  const [mounted, setMounted] = useState(false);
  const reduce = useReducedMotion();
  const fade = "radial-gradient(ellipse 80% 70% at 50% 40%, #000 35%, transparent 80%)";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <svg
      aria-hidden
      suppressHydrationWarning
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={{ maskImage: fade, WebkitMaskImage: fade }}
    >
      <defs>
        <linearGradient id="nn-line" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={W} y2={H}>
          <stop offset="0" stopColor="#00F0FF" stopOpacity="0.55" />
          <stop offset="1" stopColor="#7B2CBF" stopOpacity="0.55" />
        </linearGradient>
        <radialGradient id="nn-node">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.35" stopColor="#00F0FF" />
          <stop offset="1" stopColor="#00F0FF" stopOpacity="0" />
        </radialGradient>
      </defs>

      {EDGES.map(([a, b], i) => (
        <line
          key={i}
          x1={NODES[a].x}
          y1={NODES[a].y}
          x2={NODES[b].x}
          y2={NODES[b].y}
          stroke="url(#nn-line)"
          strokeWidth="1"
          opacity="0.28"
        />
      ))}

      {NODES.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r={n.r * 5} fill="url(#nn-node)" opacity="0.5">
            {mounted && !reduce && (
              <animate
                attributeName="opacity"
                values="0.25;0.8;0.25"
                dur={`${3 + (i % 5)}s`}
                begin={`${(i * 0.37) % 3}s`}
                repeatCount="indefinite"
              />
            )}
          </circle>
          <circle cx={n.x} cy={n.y} r={n.r} fill="#bff8ff" />
        </g>
      ))}

      {mounted && !reduce &&
        PULSE_EDGES.map(([a, b], k) => (
          <g key={`p${k}`}>
            <animateMotion
              dur={`${3.5 + (k % 5)}s`}
              begin={`${(k * 0.8) % 5}s`}
              repeatCount="indefinite"
              path={`M${NODES[a].x} ${NODES[a].y} L${NODES[b].x} ${NODES[b].y}`}
            />
            <circle r="7" fill="#00F0FF" opacity="0.25" />
            <circle r="2.4" fill="#ffffff" />
          </g>
        ))}
    </svg>
  );
}
