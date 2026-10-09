"use client";
import { motion } from "framer-motion";

/**
 * DataFlow - Animated data particles flowing through paths
 * Shows continuous data movement along connected paths
 */
export default function DataFlow({ className = "", size = 300, direction = "horizontal" }) {
  const paths = direction === "horizontal" 
    ? [
        "M 20 50 L 100 50 L 120 70 L 200 70 L 280 70",
        "M 20 100 L 80 100 L 100 120 L 180 120 L 280 120",
        "M 20 150 L 90 150 L 110 130 L 190 130 L 280 130",
      ]
    : [
        "M 50 20 L 50 100 L 70 120 L 70 200 L 70 280",
        "M 100 20 L 100 80 L 120 100 L 120 180 L 120 280",
        "M 150 20 L 150 90 L 130 110 L 130 190 L 130 280",
      ];

  const particleColors = ["#00F0FF", "#7B2CBF", "#2563EB"];

  return (
    <svg
      width={size}
      height={direction === "horizontal" ? 200 : size}
      viewBox={direction === "horizontal" ? "0 0 300 200" : "0 0 200 300"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Static paths */}
      {paths.map((d, i) => (
        <path
          key={`path-${i}`}
          d={d}
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}

      {/* Animated particles */}
      {paths.map((d, pathIndex) => (
        <g key={`particles-${pathIndex}`}>
          {[0, 1, 2].map((particleIndex) => (
            <motion.circle
              key={`p-${pathIndex}-${particleIndex}`}
              r="3"
              fill={particleColors[pathIndex]}
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: particleIndex * 1.3 + pathIndex * 0.3,
                ease: "linear",
              }}
              style={{
                offsetPath: `path('${d}')`,
                offsetRotate: "0deg",
              }}
            />
          ))}
        </g>
      ))}

      {/* Node markers at path joints */}
      {direction === "horizontal" ? (
        <>
          <circle cx="20" cy="50" r="4" fill="#00F0FF" opacity="0.5" />
          <circle cx="120" cy="70" r="4" fill="#7B2CBF" opacity="0.5" />
          <circle cx="280" cy="70" r="4" fill="#00F0FF" opacity="0.5" />
          <circle cx="20" cy="100" r="4" fill="#7B2CBF" opacity="0.5" />
          <circle cx="280" cy="120" r="4" fill="#7B2CBF" opacity="0.5" />
          <circle cx="20" cy="150" r="4" fill="#2563EB" opacity="0.5" />
          <circle cx="280" cy="130" r="4" fill="#2563EB" opacity="0.5" />
        </>
      ) : (
        <>
          <circle cx="50" cy="20" r="4" fill="#00F0FF" opacity="0.5" />
          <circle cx="70" cy="120" r="4" fill="#7B2CBF" opacity="0.5" />
          <circle cx="70" cy="280" r="4" fill="#00F0FF" opacity="0.5" />
          <circle cx="100" cy="20" r="4" fill="#7B2CBF" opacity="0.5" />
          <circle cx="120" cy="280" r="4" fill="#7B2CBF" opacity="0.5" />
          <circle cx="150" cy="20" r="4" fill="#2563EB" opacity="0.5" />
          <circle cx="130" cy="280" r="4" fill="#2563EB" opacity="0.5" />
        </>
      )}
    </svg>
  );
}
