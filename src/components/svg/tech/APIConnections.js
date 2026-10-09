"use client";
import { motion } from "framer-motion";

/**
 * APIConnections - Animated API architecture visualization
 * Shows client -> server -> services connections
 */
export default function APIConnections({ className = "", size = 400 }) {
  const nodes = [
    { id: "client", x: 50, y: 200, label: "Client", color: "#00F0FF" },
    { id: "api", x: 200, y: 200, label: "API Gateway", color: "#7B2CBF" },
    { id: "db", x: 320, y: 120, label: "Database", color: "#2563EB" },
    { id: "ai", x: 320, y: 200, label: "AI Service", color: "#00F0FF" },
    { id: "cache", x: 320, y: 280, label: "Cache", color: "#7B2CBF" },
  ];

  const connections = [
    { from: "client", to: "api" },
    { from: "api", to: "db" },
    { from: "api", to: "ai" },
    { from: "api", to: "cache" },
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="api-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00F0FF" stopOpacity="0" />
          <stop offset="50%" stopColor="#00F0FF" stopOpacity="1" />
          <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Connection lines */}
      {connections.map((conn, i) => {
        const from = nodes.find((n) => n.id === conn.from);
        const to = nodes.find((n) => n.id === conn.to);
        if (!from || !to) return null;

        return (
          <g key={i}>
            {/* Static line */}
            <line
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
            />
            {/* Animated data packet */}
            <motion.circle
              r="4"
              fill="#00F0FF"
              initial={{ x: from.x, y: from.y, opacity: 0 }}
              animate={{
                x: [from.x, to.x, from.x],
                y: [from.y, to.y, from.y],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          </g>
        );
      })}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <g key={node.id}>
          {/* Node glow */}
          <motion.circle
            cx={node.x}
            cy={node.y}
            r="25"
            fill={node.color}
            fillOpacity="0.1"
            animate={{
              scale: [1, 1.2, 1],
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
            cx={node.x}
            cy={node.y}
            r="15"
            fill="rgba(6,7,19,0.9)"
            stroke={node.color}
            strokeWidth="2"
          />
          {/* Node inner dot */}
          <circle cx={node.x} cy={node.y} r="4" fill={node.color} />
          {/* Label */}
          <text
            x={node.x}
            y={node.y + 35}
            textAnchor="middle"
            fill="#8b93b0"
            fontSize="12"
            fontWeight="600"
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
