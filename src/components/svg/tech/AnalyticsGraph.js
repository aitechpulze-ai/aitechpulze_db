"use client";
import { motion } from "framer-motion";

/**
 * AnalyticsGraph - Animated real-time analytics visualization
 * Shows line chart with updating data points
 */
export default function AnalyticsGraph({ className = "", size = 400 }) {
  const dataPoints = [
    { x: 40, y: 140 },
    { x: 90, y: 110 },
    { x: 140, y: 95 },
    { x: 190, y: 120 },
    { x: 240, y: 80 },
    { x: 290, y: 100 },
    { x: 340, y: 70 },
  ];

  // Generate SVG path from points
  const pathData = dataPoints.reduce((acc, point, i) => {
    if (i === 0) return `M ${point.x} ${point.y}`;
    return `${acc} L ${point.x} ${point.y}`;
  }, "");

  // Generate area fill path
  const areaData = `${pathData} L 340 180 L 40 180 Z`;

  return (
    <svg
      width={size}
      height={size * 0.5}
      viewBox="0 0 380 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="analytics-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Grid lines */}
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={`grid-${i}`}
          x1="40"
          y1={60 + i * 30}
          x2="340"
          y2={60 + i * 30}
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1"
        />
      ))}

      {/* X-axis labels */}
      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((label, i) => (
        <text
          key={label}
          x={40 + i * 50}
          y="195"
          textAnchor="middle"
          fill="#8b93b0"
          fontSize="10"
        >
          {label}
        </text>
      ))}

      {/* Area fill */}
      <motion.path
        d={areaData}
        fill="url(#analytics-grad)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Line path */}
      <motion.path
        d={pathData}
        stroke="#00F0FF"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* Data points */}
      {dataPoints.map((point, i) => (
        <motion.g key={i}>
          {/* Point glow */}
          <motion.circle
            cx={point.x}
            cy={point.y}
            r="8"
            fill="#00F0FF"
            fillOpacity="0.2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1.2, 1],
              opacity: [0, 0.5, 0.2],
            }}
            transition={{
              duration: 0.6,
              delay: i * 0.2 + 0.5,
            }}
          />
          {/* Point dot */}
          <motion.circle
            cx={point.x}
            cy={point.y}
            r="4"
            fill="#00F0FF"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.3,
              delay: i * 0.2 + 0.5,
              type: "spring",
              stiffness: 500,
            }}
          />
        </motion.g>
      ))}

      {/* Animated metric counter */}
      <g>
        <rect x="280" y="20" width="80" height="35" rx="6" fill="rgba(0,240,255,0.1)" />
        <text x="320" y="35" textAnchor="middle" fill="#00F0FF" fontSize="11" fontWeight="700">
          Active
        </text>
        <motion.text
          x="320"
          y="48"
          textAnchor="middle"
          fill="#fff"
          fontSize="14"
          fontWeight="700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          2,847
        </motion.text>
      </g>
    </svg>
  );
}
