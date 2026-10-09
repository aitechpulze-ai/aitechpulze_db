"use client";
import { motion } from "framer-motion";

/**
 * CloudArchitecture - Cloud infrastructure visualization
 * Shows layers: Frontend -> Load Balancer -> Servers -> Database
 */
export default function CloudArchitecture({ className = "", size = 400 }) {
  return (
    <svg
      width={size}
      height={size * 0.7}
      viewBox="0 0 400 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="cloud-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#7B2CBF" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Layer 1: Frontend (Cloud shape) */}
      <g>
        <motion.path
          d="M 80 50 Q 70 30, 90 30 Q 95 20, 110 25 Q 120 20, 130 30 Q 150 30, 140 50 Z"
          fill="url(#cloud-grad)"
          stroke="#00F0FF"
          strokeWidth="1.5"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <text x="110" y="45" textAnchor="middle" fill="#00F0FF" fontSize="10" fontWeight="700">
          CDN
        </text>
      </g>

      {/* Layer 2: Load Balancer */}
      <g>
        <rect
          x="160"
          y="110"
          width="80"
          height="40"
          rx="6"
          fill="rgba(123,44,191,0.1)"
          stroke="#7B2CBF"
          strokeWidth="2"
        />
        <text x="200" y="135" textAnchor="middle" fill="#7B2CBF" fontSize="11" fontWeight="700">
          Load Balancer
        </text>
        {/* Connection from frontend */}
        <motion.line
          x1="110"
          y1="50"
          x2="200"
          y2="110"
          stroke="#00F0FF"
          strokeWidth="2"
          strokeDasharray="4 4"
          animate={{
            strokeDashoffset: [0, -8],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </g>

      {/* Layer 3: Application Servers */}
      {[0, 1, 2].map((i) => {
        const x = 90 + i * 100;
        return (
          <g key={i}>
            <motion.rect
              x={x}
              y="190"
              width="60"
              height="50"
              rx="6"
              fill="rgba(37,99,235,0.1)"
              stroke="#2563EB"
              strokeWidth="2"
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
            <text
              x={x + 30}
              y="210"
              textAnchor="middle"
              fill="#2563EB"
              fontSize="10"
              fontWeight="600"
            >
              Server
            </text>
            <text
              x={x + 30}
              y="225"
              textAnchor="middle"
              fill="#8b93b0"
              fontSize="9"
            >
              {`Node ${i + 1}`}
            </text>
            {/* Connection from LB */}
            <line
              x1="200"
              y1="150"
              x2={x + 30}
              y2="190"
              stroke="rgba(123,44,191,0.3)"
              strokeWidth="1.5"
            />
          </g>
        );
      })}

      {/* Animated data packets flowing down */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={`packet-${i}`}
          r="3"
          fill="#00F0FF"
          initial={{ x: 200, y: 150, opacity: 0 }}
          animate={{
            x: [200, 90 + i * 100 + 30],
            y: [150, 190],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeOut",
          }}
        />
      ))}
    </svg>
  );
}
