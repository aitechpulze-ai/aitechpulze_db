export default function NeuralGrid({ className = "" }) {
  const gridSize = 5;
  const tileW = 32; // half-width of the isometric tile
  const tileH = 16; // half-height of the isometric tile

  // Deterministic heights for a pyramid-like structure
  const heightMatrix = [
    [10, 15, 30, 20, 10],
    [15, 40, 60, 35, 15],
    [25, 70, 110, 65, 20],
    [15, 45, 75, 40, 15],
    [10, 20, 35, 25, 10],
  ];

  const blocks = [];
  for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      const z = heightMatrix[x][y];
      // Isometric projection
      // Center of the base
      const px = 200 + (x - y) * tileW;
      const py = 250 + (x + y) * tileH;
      
      const delay = (x + y) * 0.2;
      // Assign different neon colors based on position
      const isCore = x === 2 && y === 2;
      const colorScheme = isCore ? "core" : (x + y) % 2 === 0 ? "cyan" : "violet";

      blocks.push({
        id: `${x}-${y}`,
        px,
        py,
        z,
        delay,
        colorScheme,
        isCore
      });
    }
  }

  // Sort blocks back-to-front so they overlap correctly
  // In isometric, items with larger (x + y) are closer to the camera (lower down on screen)
  blocks.sort((a, b) => (a.px + a.py) - (b.px + b.py));

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label="Isometric Neural Grid Processor"
    >
      <defs>
        <filter id="ng-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="ng-neon" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <style>{`
        .ng-float { animation: ng-float 4s ease-in-out infinite alternate; }
        .ng-pulse { animation: ng-pulse 2s ease-in-out infinite alternate; }
        .ng-hover-glow { transition: filter 0.3s; }
        .ng-hover-glow:hover { filter: brightness(1.5) contrast(1.2); }
        
        @keyframes ng-float {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-15px); }
        }
        @keyframes ng-pulse {
          0% { opacity: 0.6; }
          100% { opacity: 1; }
        }

        @media (prefers-reduced-motion: reduce) {
          .ng-float, .ng-pulse { animation: none; }
        }
      `}</style>

      {/* Grid Network Lines Base */}
      <g stroke="#ffffff" strokeWidth="1" opacity="0.05">
        {[...Array(10)].map((_, i) => (
          <g key={`grid-${i}`}>
            <line x1={200 - i * tileW} y1={250 + i * tileH} x2={200 + 10 * tileW - i * tileW} y2={250 - 10 * tileH + i * tileH} />
            <line x1={200 + i * tileW} y1={250 + i * tileH} x2={200 - 10 * tileW + i * tileW} y2={250 - 10 * tileH + i * tileH} />
          </g>
        ))}
      </g>

      {/* Isometric Data Blocks */}
      {blocks.map((b) => {
        // Colors
        let topColor, leftColor, rightColor, strokeColor;
        
        if (b.colorScheme === "core") {
          topColor = "#FF007F";
          leftColor = "#D9006C";
          rightColor = "#7B2CBF";
          strokeColor = "#ffffff";
        } else if (b.colorScheme === "cyan") {
          topColor = "#00F0FF";
          leftColor = "#00B3CC";
          rightColor = "#007A99";
          strokeColor = "#2563EB";
        } else {
          topColor = "#7B2CBF";
          leftColor = "#5A1B99";
          rightColor = "#390B73";
          strokeColor = "#00F0FF";
        }

        // Polygon points
        // Base points:
        // Left: px - tileW, py
        // Right: px + tileW, py
        // Bottom: px, py + tileH
        // Top (base): px, py - tileH
        
        // Extruded points (subtract Z from Y):
        const top_P1 = `${b.px},${b.py - tileH - b.z}`; // Top-center
        const top_P2 = `${b.px + tileW},${b.py - b.z}`; // Right
        const top_P3 = `${b.px},${b.py + tileH - b.z}`; // Bottom-center
        const top_P4 = `${b.px - tileW},${b.py - b.z}`; // Left

        const left_P1 = `${b.px - tileW},${b.py - b.z}`;
        const left_P2 = `${b.px},${b.py + tileH - b.z}`;
        const left_P3 = `${b.px},${b.py + tileH}`;
        const left_P4 = `${b.px - tileW},${b.py}`;

        const right_P1 = `${b.px},${b.py + tileH - b.z}`;
        const right_P2 = `${b.px + tileW},${b.py - b.z}`;
        const right_P3 = `${b.px + tileW},${b.py}`;
        const right_P4 = `${b.px},${b.py + tileH}`;

        return (
          <g 
            key={b.id} 
            className="ng-float ng-hover-glow" 
            style={{ animationDelay: `${b.delay}s` }}
          >
            {/* Ambient Base Shadow */}
            <polygon 
              points={`${b.px},${b.py - tileH} ${b.px + tileW},${b.py} ${b.px},${b.py + tileH} ${b.px - tileW},${b.py}`}
              fill="#00F0FF" 
              opacity="0.1"
              filter="url(#ng-glow)"
            />

            {/* Left Face */}
            <polygon 
              points={`${left_P1} ${left_P2} ${left_P3} ${left_P4}`} 
              fill={leftColor} 
              fillOpacity={b.isCore ? 0.9 : 0.6}
              stroke={strokeColor} 
              strokeWidth="0.5" 
            />
            
            {/* Right Face */}
            <polygon 
              points={`${right_P1} ${right_P2} ${right_P3} ${right_P4}`} 
              fill={rightColor} 
              fillOpacity={b.isCore ? 0.9 : 0.4}
              stroke={strokeColor} 
              strokeWidth="0.5" 
            />
            
            {/* Top Face */}
            <polygon 
              points={`${top_P1} ${top_P2} ${top_P3} ${top_P4}`} 
              fill={topColor} 
              fillOpacity={b.isCore ? 1 : 0.8}
              stroke="#ffffff" 
              strokeWidth="1.5" 
              filter={b.isCore ? "url(#ng-neon)" : "none"}
              className={b.isCore ? "ng-pulse" : ""}
            />
            
            {/* Inner Core Glow (Only for the central block) */}
            {b.isCore && (
              <circle cx={b.px} cy={b.py - b.z} r="25" fill="#FF007F" filter="url(#ng-glow)" className="ng-pulse" opacity="0.8" />
            )}
          </g>
        );
      })}
      
      {/* Floating Network Particles */}
      <g className="ng-float" style={{ animationDelay: '1s' }} filter="url(#ng-neon)">
        <line x1="100" y1="100" x2="100" y2="130" stroke="#00F0FF" strokeWidth="2" />
        <circle cx="100" cy="100" r="3" fill="#ffffff" />
        
        <line x1="300" y1="80" x2="300" y2="120" stroke="#7B2CBF" strokeWidth="2" />
        <circle cx="300" cy="80" r="4" fill="#ffffff" />
        
        <line x1="200" y1="20" x2="200" y2="60" stroke="#FF007F" strokeWidth="2" />
        <circle cx="200" cy="20" r="3" fill="#ffffff" />
      </g>
    </svg>
  );
}
