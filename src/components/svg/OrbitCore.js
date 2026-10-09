export default function OrbitCore({ className = "" }) {
  const beams = Array.from({ length: 8 }).map((_, i) => {
    const deg = i * 45;
    const rad = (deg * Math.PI) / 180;
    return {
      x1: 200 + Math.cos(rad) * 55,
      y1: 200 + Math.sin(rad) * 55,
      x2: 200 + Math.cos(rad) * 190,
      y2: 200 + Math.sin(rad) * 190,
      delay: i * 0.15,
      duration: 1.2 + (i % 3) * 0.2,
    };
  });

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label="Futuristic animated AI core with complex orbiting data nodes and radar pings"
    >
      <defs>
        {/* Core Halo */}
        <radialGradient id="oc-halo" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#00F0FF" stopOpacity="0.4" />
          <stop offset="0.3" stopColor="#7B2CBF" stopOpacity="0.25" />
          <stop offset="0.7" stopColor="#2563EB" stopOpacity="0.05" />
          <stop offset="1" stopColor="#03040B" stopOpacity="0" />
        </radialGradient>

        {/* Ring Gradient */}
        <linearGradient id="oc-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00F0FF" />
          <stop offset="50%" stopColor="#7B2CBF" />
          <stop offset="100%" stopColor="#FF007F" />
        </linearGradient>
        
        {/* Soft Ring Gradient */}
        <linearGradient id="oc-ring-soft" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.2" />
        </linearGradient>

        {/* Intense Glow Filter */}
        <filter id="oc-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur1" />
          <feGaussianBlur stdDeviation="8" result="blur2" />
          <feMerge>
            <feMergeNode in="blur2" />
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        
        {/* Subtle Node Glow */}
        <filter id="oc-glow-subtle" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <style>{`
        .oc-center { transform-origin: 200px 200px; }
        .oc-spin-slow { animation: oc-spin 40s linear infinite; }
        .oc-spin-med { animation: oc-spin 25s linear infinite; }
        .oc-spin-fast { animation: oc-spin 12s linear infinite; }
        .oc-spin-rev-slow { animation: oc-spin 35s linear infinite reverse; }
        .oc-spin-rev-fast { animation: oc-spin 15s linear infinite reverse; }
        
        .oc-ping { animation: oc-ping 4s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .oc-ping-delayed { animation: oc-ping 4s cubic-bezier(0, 0, 0.2, 1) 2s infinite; }
        
        .oc-pulse { animation: oc-pulse 2s ease-in-out infinite alternate; }
        
        .oc-data-stream {
          stroke-dasharray: 10 1000;
          stroke-dashoffset: 0;
        }

        @keyframes oc-spin { 100% { transform: rotate(360deg); } }
        @keyframes oc-ping {
          0% { transform: scale(0.2); opacity: 0.8; }
          80%, 100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes oc-pulse {
          0% { opacity: 0.6; filter: brightness(1); }
          100% { opacity: 1; filter: brightness(1.5); }
        }
        @keyframes oc-stream-in {
          0% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: -200; opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .oc-spin-slow, .oc-spin-med, .oc-spin-fast, .oc-spin-rev-slow, .oc-spin-rev-fast, .oc-ping, .oc-ping-delayed, .oc-pulse { animation: none; }
          .oc-data-stream { display: none; }
        }
      `}</style>

      {/* Background Energy Halo */}
      <circle cx="200" cy="200" r="190" fill="url(#oc-halo)" className="oc-pulse" style={{ animationDuration: '4s' }} />

      {/* Radar Pings */}
      <g className="oc-center">
        <circle cx="200" cy="200" r="80" fill="none" stroke="#00F0FF" strokeWidth="1" className="oc-ping" />
        <circle cx="200" cy="200" r="80" fill="none" stroke="#7B2CBF" strokeWidth="1.5" className="oc-ping-delayed" />
      </g>

      {/* Grid Network Lines (Static Background) */}
      <circle cx="200" cy="200" r="190" fill="none" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" />
      <circle cx="200" cy="200" r="150" fill="none" stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1" />
      <circle cx="200" cy="200" r="110" fill="none" stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1" />
      <circle cx="200" cy="200" r="70" fill="none" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="1" />

      {/* Dynamic Radial Beams */}
      {beams.map((b, i) => (
        <g key={`beam-${i}`}>
          <line
            x1={b.x1} y1={b.y1} x2={b.x2} y2={b.y2}
            stroke="url(#oc-ring-soft)"
            strokeWidth="1"
            strokeDasharray="2 6"
            opacity="0.4"
          />
          {/* High-speed data stream shooting towards center */}
          <line
            x1={b.x2} y1={b.y2} x2={b.x1} y2={b.y1}
            stroke={i % 2 === 0 ? "#00F0FF" : "#FF007F"}
            strokeWidth="3"
            strokeLinecap="round"
            className="oc-data-stream"
            style={{ 
              animation: `oc-stream-in ${b.duration}s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
              animationDelay: `${b.delay}s` 
            }}
            filter="url(#oc-glow)"
          />
        </g>
      ))}

      {/* Complex Rotating Rings */}
      {/* Outer Tech Ring */}
      <circle className="oc-center oc-spin-slow" cx="200" cy="200" r="170" fill="none" stroke="url(#oc-ring)" strokeWidth="1.5" strokeDasharray="4 12 4 40 2 10" opacity="0.6" />
      <circle className="oc-center oc-spin-rev-slow" cx="200" cy="200" r="162" fill="none" stroke="#00F0FF" strokeWidth="1" strokeDasharray="1 8" opacity="0.3" />
      
      {/* Mid UI Ring */}
      <circle className="oc-center oc-spin-med" cx="200" cy="200" r="130" fill="none" stroke="url(#oc-ring)" strokeWidth="2" strokeDasharray="20 40 5 10 50 20" strokeLinecap="round" opacity="0.8" />
      <g className="oc-center oc-spin-med">
        {[0, 120, 240].map(deg => (
          <path key={deg} d="M 200 65 A 135 135 0 0 1 235 69" fill="none" stroke="#FF007F" strokeWidth="4" strokeLinecap="round" transform={`rotate(${deg}, 200, 200)`} filter="url(#oc-glow-subtle)" />
        ))}
      </g>

      {/* Inner Fast Ring */}
      <circle className="oc-center oc-spin-rev-fast" cx="200" cy="200" r="95" fill="none" stroke="#7B2CBF" strokeWidth="1.5" strokeDasharray="30 60 10 10" strokeLinecap="round" opacity="0.9" />
      
      {/* Floating Nodes / Planets */}
      <g className="oc-center oc-spin-slow" filter="url(#oc-glow)">
        <circle cx="200" cy="30" r="6" fill="#00F0FF" />
        <circle cx="200" cy="30" r="2" fill="#fff" />
        
        <circle cx="45" cy="265" r="4" fill="#FF007F" />
        <circle cx="355" cy="265" r="5" fill="#7B2CBF" />
      </g>

      <g className="oc-center oc-spin-rev-slow" filter="url(#oc-glow)">
        <circle cx="362" cy="200" r="7" fill="#7B2CBF" />
        <circle cx="362" cy="200" r="2.5" fill="#fff" />
        
        <circle cx="80" cy="118" r="4" fill="#00F0FF" />
      </g>

      <g className="oc-center oc-spin-med" filter="url(#oc-glow)">
        <circle cx="200" cy="70" r="5" fill="#FF007F" />
        <circle cx="200" cy="70" r="2" fill="#fff" />
        
        <circle cx="87" cy="265" r="5" fill="#00F0FF" />
      </g>

      <g className="oc-center oc-spin-rev-fast" filter="url(#oc-glow)">
        <circle cx="295" cy="200" r="4" fill="#00F0FF" />
        <circle cx="132" cy="132" r="3" fill="#FF007F" />
      </g>

      {/* Center Core Architecture */}
      
      {/* Pulsing Hexagon Frame */}
      <g className="oc-center oc-spin-slow oc-pulse">
        <polygon points="200,135 256,167 256,232 200,265 143,232 143,167" fill="none" stroke="url(#oc-ring)" strokeWidth="1.5" opacity="0.6" />
        <polygon points="200,145 247,172 247,227 200,255 152,227 152,172" fill="none" stroke="#00F0FF" strokeWidth="1" opacity="0.3" strokeDasharray="5 5" />
      </g>

      {/* Center Glow Sphere */}
      <circle cx="200" cy="200" r="48" fill="url(#oc-halo)" className="oc-pulse" filter="url(#oc-glow)" />
      
      {/* Core UI Container */}
      <g className="oc-center">
        {/* Rotating corners for the center box */}
        <g className="oc-spin-fast" stroke="url(#oc-ring)" strokeWidth="3" strokeLinecap="round" opacity="0.9" filter="url(#oc-glow-subtle)">
          <path d="M 160 170 L 160 160 L 170 160" fill="none" />
          <path d="M 240 160 L 250 160 L 250 170" fill="none" />
          <path d="M 250 230 L 250 240 L 240 240" fill="none" />
          <path d="M 170 240 L 160 240 L 160 230" fill="none" />
        </g>
        
        <rect x="160" y="160" width="80" height="80" rx="20" fill="#03040B" fillOpacity="0.85" stroke="url(#oc-ring-soft)" strokeWidth="1.5" />
        <rect x="164" y="164" width="72" height="72" rx="16" fill="none" stroke="#00F0FF" strokeWidth="1" opacity="0.3" className="oc-pulse" />
        
        <text
          x="200"
          y="211"
          textAnchor="middle"
          fontSize="30"
          fontWeight="800"
          fill="#ffffff"
          style={{ fontFamily: "var(--font-grotesk), system-ui, sans-serif", letterSpacing: "-0.01em" }}
          filter="url(#oc-glow-subtle)"
          className="oc-pulse"
        >
          AI
        </text>
      </g>
    </svg>
  );
}
