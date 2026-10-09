"use client";
import { motion } from "framer-motion";

/**
 * AICore - Animated neural network core visualization
 * Shows pulsing central node with orbiting satellites
 * Lightweight, GPU-friendly, respects reduced motion
 */
export default function AICore({ className = "", size = 200 }) {
  const nodeVariants = {
    pulse: {
      scale: [1, 1.15, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const orbitVariants = {
    orbit: (i) => ({
      rotate: 360,
      transition: {
        duration: 8 + i * 2,
        repeat: Infinity,
        ease: "linear",
      },
    }),
  };

  const satellites = [
    { angle: 0, distance: 0.35, size: 8, color: "#00F0FF" },
    { angle: 120, distance: 0.35, size: 6, color: "#7B2CBF" },
    { angle: 240, distance: 0.35, size: 7, color: "#2563EB" },
    { angle: 60, distance: 0.5, size: 5, color: "#00F0FF" },
    { angle: 180, distance: 0.5, size: 6, color: "#7B2CBF" },
    { angle: 300, distance: 0.5, size: 4, color: "#2563EB" },
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ overflow: "visible" }}
    >
      <defs>
        <radialGradient id="aicore-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
        </radialGradient>
        <filter id="aicore-blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
        </filter>
      </defs>

      {/* Background glow */}
      <motion.circle
        cx="100"
        cy="100"
        r="60"
        fill="url(#aicore-glow)"
        filter="url(#aicore-blur)"
        animate={nodeVariants.pulse}
      />

      {/* Central core */}
      <motion.circle
        cx="100"
        cy="100"
        r="20"
        fill="#00F0FF"
        fillOpacity="0.2"
        stroke="#00F0FF"
        strokeWidth="2"
        animate={nodeVariants.pulse}
      />
      <circle cx="100" cy="100" r="8" fill="#00F0FF" />

      {/* Orbiting satellites */}
      {satellites.map((sat, i) => {
        const x = Number((100 + Math.cos((sat.angle * Math.PI) / 180) * (size * sat.distance)).toFixed(2));
        const y = Number((100 + Math.sin((sat.angle * Math.PI) / 180) * (size * sat.distance)).toFixed(2));
        
        return (
          <g key={i}>
            {/* Connection line */}
            <motion.line
              x1="100"
              y1="100"
              x2={x}
              y2={y}
              stroke={sat.color}
              strokeWidth="1"
              strokeOpacity="0.3"
              animate={orbitVariants.orbit(i)}
              style={{ originX: "100px", originY: "100px" }}
            />
            {/* Satellite node */}
            <motion.circle
              cx={x}
              cy={y}
              r={sat.size}
              fill={sat.color}
              fillOpacity="0.8"
              animate={orbitVariants.orbit(i)}
              style={{ originX: "100px", originY: "100px" }}
            />
          </g>
        );
      })}

      {/* Data particles flowing inward */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={`particle-${i}`}
          cx="100"
          cy="100"
          r="2"
          fill="#00F0FF"
          initial={{ x: 80, y: -80, opacity: 0 }}
          animate={{
            x: [80, 40, 0],
            y: [-80, -40, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 1,
            ease: "easeIn",
          }}
        />
      ))}
    </svg>
  );
}
