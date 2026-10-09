export default function QuantumCore({ className = "" }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label="3D Quantum Core Processor"
    >
      <defs>
        {/* Gradients */}
        <radialGradient id="qc-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#7B2CBF" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#03040B" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="qc-core-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="40%" stopColor="#00F0FF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="qc-beam" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00F0FF" stopOpacity="0" />
          <stop offset="50%" stopColor="#FF007F" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#7B2CBF" stopOpacity="0" />
        </linearGradient>

        {/* Filters */}
        <filter id="qc-neon" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur1" />
          <feGaussianBlur stdDeviation="8" result="blur2" />
          <feMerge>
            <feMergeNode in="blur2" />
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="qc-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <style>{`
        .qc-center { transform-origin: 200px 200px; }
        .qc-float { animation: qc-float 6s ease-in-out infinite; }
        .qc-pulse { animation: qc-pulse 3s ease-in-out infinite alternate; }
        .qc-spin { animation: qc-spin 20s linear infinite; }
        .qc-spin-reverse { animation: qc-spin 25s linear infinite reverse; }
        .qc-beam-anim { animation: qc-beam-move 2.5s linear infinite; stroke-dasharray: 40 200; }
        .qc-data-ring { animation: qc-spin-3d 8s linear infinite; transform-origin: 200px 200px; }
        
        @keyframes qc-spin { 100% { transform: rotate(360deg); } }
        @keyframes qc-spin-3d { 
          0% { transform: rotateX(70deg) rotateZ(0deg); } 
          100% { transform: rotateX(70deg) rotateZ(360deg); } 
        }
        @keyframes qc-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes qc-pulse {
          0% { filter: brightness(1) drop-shadow(0 0 10px rgba(0, 240, 255, 0.4)); transform: scale(0.98); }
          100% { filter: brightness(1.3) drop-shadow(0 0 30px rgba(0, 240, 255, 0.8)); transform: scale(1.02); }
        }
        @keyframes qc-beam-move {
          0% { stroke-dashoffset: 240; }
          100% { stroke-dashoffset: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .qc-float, .qc-pulse, .qc-spin, .qc-spin-reverse, .qc-beam-anim, .qc-data-ring { animation: none; }
        }
      `}</style>

      {/* Ambient Glow */}
      <circle cx="200" cy="200" r="180" fill="url(#qc-glow)" className="qc-pulse" />

      {/* Background Tech Rings */}
      <g className="qc-center qc-spin" opacity="0.3" filter="url(#qc-blur)">
        <polygon points="200,10 365,105 365,295 200,390 35,295 35,105" fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="10 20" />
        <circle cx="200" cy="10" r="6" fill="#00F0FF" />
        <circle cx="200" cy="390" r="6" fill="#00F0FF" />
      </g>
      
      <g className="qc-center qc-spin-reverse" opacity="0.5" filter="url(#qc-blur)">
        <polygon points="200,30 347,115 347,285 200,370 53,285 53,115" fill="none" stroke="#7B2CBF" strokeWidth="1" strokeDasharray="50 30" />
        <circle cx="347" cy="115" r="4" fill="#FF007F" />
        <circle cx="53" cy="285" r="4" fill="#FF007F" />
      </g>

      {/* Vertical Data Beams */}
      <g filter="url(#qc-neon)">
        <line x1="200" y1="0" x2="200" y2="400" stroke="url(#qc-beam)" strokeWidth="3" className="qc-beam-anim" />
        <line x1="120" y1="50" x2="120" y2="350" stroke="url(#qc-beam)" strokeWidth="1.5" className="qc-beam-anim" style={{ animationDelay: '0.8s', animationDuration: '2s' }} />
        <line x1="280" y1="50" x2="280" y2="350" stroke="url(#qc-beam)" strokeWidth="1.5" className="qc-beam-anim" style={{ animationDelay: '1.2s', animationDuration: '3s' }} />
      </g>

      {/* Floating Particles */}
      <g className="qc-center qc-spin" filter="url(#qc-neon)">
        <circle cx="100" cy="150" r="3" fill="#00F0FF" />
        <circle cx="300" cy="250" r="2.5" fill="#FF007F" />
        <circle cx="250" cy="80" r="4" fill="#7B2CBF" />
        <circle cx="150" cy="320" r="2" fill="#ffffff" />
      </g>

      {/* Main 3D Prism Structure */}
      <g className="qc-center qc-float qc-pulse">
        {/* Back Faces (Darker, Lower Opacity) */}
        <g stroke="#00F0FF" strokeWidth="1" strokeLinejoin="round" filter="url(#qc-neon)">
          <polygon points="200,80 100,200 200,170" fill="#2563EB" fillOpacity="0.15" />
          <polygon points="200,80 300,200 200,170" fill="#7B2CBF" fillOpacity="0.15" />
          <polygon points="200,320 100,200 200,170" fill="#00F0FF" fillOpacity="0.1" />
          <polygon points="200,320 300,200 200,170" fill="#FF007F" fillOpacity="0.1" />
        </g>
        
        {/* Intense Inner Core */}
        <circle cx="200" cy="200" r="35" fill="url(#qc-core-glow)" filter="url(#qc-neon)" />
        <polygon points="200,150 160,200 200,220 240,200" fill="#ffffff" fillOpacity="0.8" filter="url(#qc-neon)" />

        {/* 3D Orbiting Data Rings around the core */}
        <circle cx="200" cy="200" r="85" fill="none" stroke="#00F0FF" strokeWidth="2" strokeDasharray="20 10 5 10" className="qc-data-ring" filter="url(#qc-neon)" />
        <circle cx="200" cy="200" r="105" fill="none" stroke="#FF007F" strokeWidth="1.5" strokeDasharray="30 40" className="qc-data-ring" style={{ animationDirection: 'reverse', animationDuration: '12s' }} filter="url(#qc-neon)" />

        {/* Front Faces (Glassy, bright borders) */}
        <g stroke="#ffffff" strokeWidth="2" strokeLinejoin="round" filter="url(#qc-neon)">
          <polygon points="200,80 100,200 200,240" fill="#00F0FF" fillOpacity="0.2" />
          <polygon points="200,80 300,200 200,240" fill="#7B2CBF" fillOpacity="0.3" />
          <polygon points="200,320 100,200 200,240" fill="#2563EB" fillOpacity="0.2" />
          <polygon points="200,320 300,200 200,240" fill="#03040B" fillOpacity="0.6" />
        </g>
        
        {/* Core Detail Lines */}
        <g stroke="#00F0FF" strokeWidth="1" opacity="0.6">
          <line x1="200" y1="80" x2="200" y2="240" />
          <line x1="100" y1="200" x2="300" y2="200" />
        </g>

        {/* Futuristic Tech Labels */}
        <text x="210" y="225" fill="#ffffff" fontSize="10" fontFamily="monospace" opacity="0.8" style={{ transform: 'skewY(20deg)', transformOrigin: '210px 225px' }}>
          SYS.CORE
        </text>
        <text x="190" y="215" fill="#00F0FF" fontSize="8" fontFamily="monospace" opacity="0.6" style={{ transform: 'skewY(-20deg)', transformOrigin: '190px 215px' }} textAnchor="end">
          Q-BIT: 1024
        </text>
      </g>
    </svg>
  );
}
