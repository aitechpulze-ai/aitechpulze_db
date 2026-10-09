"use client";
import { motion } from "framer-motion";

/**
 * MLPipeline - Machine Learning workflow visualization
 * Shows: Data -> Preprocessing -> Training -> Model -> Prediction
 */
export default function MLPipeline({ className = "", size = 500 }) {
  const stages = [
    { id: "data", label: "Data", icon: "▦", color: "#00F0FF", x: 50 },
    { id: "prep", label: "Preprocess", icon: "⚙", color: "#7B2CBF", x: 150 },
    { id: "train", label: "Training", icon: "⚡", color: "#2563EB", x: 270 },
    { id: "model", label: "Model", icon: "◆", color: "#00F0FF", x: 390 },
    { id: "pred", label: "Predict", icon: "→", color: "#7B2CBF", x: 490 },
  ];

  return (
    <svg
      width={size + 60}
      height={200}
      viewBox="0 0 560 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Connection lines between stages */}
      {stages.slice(0, -1).map((stage, i) => {
        const next = stages[i + 1];
        return (
          <g key={`conn-${i}`}>
            {/* Static line */}
            <line
              x1={stage.x + 30}
              y1="100"
              x2={next.x - 30}
              y2="100"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
            />
            {/* Animated arrow */}
            <motion.path
              d={`M ${stage.x + 30} 100 L ${next.x - 30} 100`}
              stroke={stage.color}
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          </g>
        );
      })}

      {/* Stage nodes */}
      {stages.map((stage, i) => (
        <g key={stage.id}>
          {/* Glow effect */}
          <motion.circle
            cx={stage.x}
            cy="100"
            r="35"
            fill={stage.color}
            fillOpacity="0.1"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
          {/* Node circle */}
          <circle
            cx={stage.x}
            cy="100"
            r="25"
            fill="rgba(6,7,19,0.9)"
            stroke={stage.color}
            strokeWidth="2"
          />
          {/* Icon */}
          <text
            x={stage.x}
            y="108"
            textAnchor="middle"
            fill={stage.color}
            fontSize="20"
            fontWeight="700"
          >
            {stage.icon}
          </text>
          {/* Label */}
          <text
            x={stage.x}
            y="145"
            textAnchor="middle"
            fill="#8b93b0"
            fontSize="12"
            fontWeight="600"
          >
            {stage.label}
          </text>
        </g>
      ))}

      {/* Activity indicator at training stage */}
      <motion.circle
        cx="270"
        cy="70"
        r="4"
        fill="#2563EB"
        animate={{
          scale: [0, 1.5, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      />
    </svg>
  );
}
