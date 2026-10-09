"use client";
import { motion } from "framer-motion";

/**
 * DatabaseNetwork - Database cluster visualization
 * Shows primary + replica databases with sync indicators
 */
export default function DatabaseNetwork({ className = "", size = 300 }) {
  const databases = [
    { id: "primary", x: 150, y: 80, label: "Primary", isPrimary: true },
    { id: "replica1", x: 80, y: 180, label: "Replica 1", isPrimary: false },
    { id: "replica2", x: 220, y: 180, label: "Replica 2", isPrimary: false },
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 300 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="db-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00F0FF" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>

      {/* Replication lines */}
      {databases
        .filter((db) => !db.isPrimary)
        .map((replica, i) => {
          const primary = databases.find((db) => db.isPrimary);
          if (!primary) return null;

          return (
            <g key={i}>
              {/* Static line */}
              <line
                x1={primary.x}
                y1={primary.y + 30}
                x2={replica.x}
                y2={replica.y - 20}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              {/* Animated sync indicator */}
              <motion.circle
                r="3"
                fill="#00F0FF"
                initial={{
                  x: primary.x,
                  y: primary.y + 30,
                  opacity: 0,
                }}
                animate={{
                  x: [primary.x, replica.x],
                  y: [primary.y + 30, replica.y - 20],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "easeInOut",
                }}
              />
            </g>
          );
        })}

      {/* Database cylinders */}
      {databases.map((db) => {
        const color = db.isPrimary ? "#00F0FF" : "#7B2CBF";
        
        return (
          <g key={db.id}>
            {/* Glow */}
            <motion.ellipse
              cx={db.x}
              cy={db.y}
              rx="35"
              ry="45"
              fill={color}
              fillOpacity="0.1"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: db.isPrimary ? 0 : 0.5,
              }}
            />
            {/* Top ellipse */}
            <ellipse
              cx={db.x}
              cy={db.y - 15}
              rx="25"
              ry="8"
              fill="rgba(6,7,19,0.9)"
              stroke={color}
              strokeWidth="2"
            />
            <ellipse cx={db.x} cy={db.y - 15} rx="25" ry="8" fill={color} fillOpacity="0.3" />
            {/* Cylinder body */}
            <rect
              x={db.x - 25}
              y={db.y - 15}
              width="50"
              height="30"
              fill="rgba(6,7,19,0.9)"
              stroke={color}
              strokeWidth="2"
            />
            {/* Bottom ellipse */}
            <ellipse
              cx={db.x}
              cy={db.y + 15}
              rx="25"
              ry="8"
              fill="rgba(6,7,19,0.9)"
              stroke={color}
              strokeWidth="2"
            />
            {/* Activity bars inside cylinder */}
            {[0, 1, 2].map((i) => (
              <motion.line
                key={i}
                x1={db.x - 15 + i * 15}
                y1={db.y - 5}
                x2={db.x - 15 + i * 15}
                y2={db.y + 5}
                stroke={color}
                strokeWidth="3"
                strokeLinecap="round"
                animate={{
                  y1: [db.y - 5, db.y + 5, db.y - 5],
                  y2: [db.y + 5, db.y - 5, db.y + 5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
            {/* Label */}
            <text
              x={db.x}
              y={db.y + 45}
              textAnchor="middle"
              fill="#8b93b0"
              fontSize="12"
              fontWeight="600"
            >
              {db.label}
            </text>
            {/* Badge */}
            {db.isPrimary && (
              <rect
                x={db.x + 15}
                y={db.y - 25}
                width="40"
                height="16"
                rx="8"
                fill="#00F0FF"
                fillOpacity="0.2"
              />
            )}
            {db.isPrimary && (
              <text
                x={db.x + 35}
                y={db.y - 14}
                textAnchor="middle"
                fill="#00F0FF"
                fontSize="9"
                fontWeight="700"
              >
                WRITE
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
