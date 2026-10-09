"use client";
import { motion } from "framer-motion";

/**
 * CircuitGrid - Animated circuit board background pattern
 * Lightweight grid with occasional signal pulses
 */
export default function CircuitGrid({ className = "", opacity = 0.4 }) {
  const gridSize = 40;
  const width = 800;
  const height = 600;
  const cols = Math.ceil(width / gridSize);
  const rows = Math.ceil(height / gridSize);

  // Random connection points
  const connections = [
    { x1: 2, y1: 2, x2: 5, y2: 2 },
    { x1: 5, y1: 2, x2: 5, y2: 5 },
    { x1: 8, y1: 3, x2: 12, y2: 3 },
    { x1: 12, y1: 3, x2: 12, y2: 7 },
    { x1: 3, y1: 8, x2: 7, y2: 8 },
    { x1: 7, y1: 8, x2: 7, y2: 11 },
    { x1: 15, y1: 5, x2: 18, y2: 5 },
    { x1: 10, y1: 10, x2: 14, y2: 10 },
  ];

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
    >
      <defs>
        <pattern id="grid" width={gridSize} height={gridSize} patternUnits="userSpaceOnUse">
          <circle cx={gridSize / 2} cy={gridSize / 2} r="1" fill="rgba(0,240,255,0.3)" />
        </pattern>
      </defs>

      {/* Grid dots */}
      <rect width={width} height={height} fill="url(#grid)" />

      {/* Circuit connections */}
      {connections.map((conn, i) => {
        const x1 = conn.x1 * gridSize;
        const y1 = conn.y1 * gridSize;
        const x2 = conn.x2 * gridSize;
        const y2 = conn.y2 * gridSize;

        return (
          <g key={i}>
            {/* Static line */}
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="rgba(123,44,191,0.4)"
              strokeWidth="2"
            />
            {/* Animated pulse */}
            <motion.line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#00F0FF"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
            {/* Node at connection points */}
            <circle cx={x1} cy={y1} r="3" fill="#7B2CBF" opacity="0.6" />
            <circle cx={x2} cy={y2} r="3" fill="#00F0FF" opacity="0.6" />
          </g>
        );
      })}
    </svg>
  );
}
