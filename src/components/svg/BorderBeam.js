export default function BorderBeam({ radius = 20, duration = 4 }) {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[3] h-full w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
    >
      <defs>
        <linearGradient id="bb-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#00F0FF" />
          <stop offset="1" stopColor="#7B2CBF" />
        </linearGradient>
      </defs>
      <rect
        x="1"
        y="1"
        width="100%"
        height="100%"
        rx={radius}
        ry={radius}
        fill="none"
        stroke="url(#bb-grad)"
        strokeWidth="2"
        strokeLinecap="round"
        pathLength={100}
        strokeDasharray="14 86"
        style={{
          width: "calc(100% - 2px)",
          height: "calc(100% - 2px)",
          filter: "drop-shadow(0 0 6px rgba(0,240,255,0.9))",
        }}
      >
        <animate attributeName="stroke-dashoffset" values="0;-100" dur={`${duration}s`} repeatCount="indefinite" />
      </rect>
    </svg>
  );
}
