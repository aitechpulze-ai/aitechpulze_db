"use client";

import { useEffect, useRef } from "react";

/* ─── Variant: floating geometric shapes ─── */
function GeometricCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    let raf;

    const shapes = Array.from({ length: 18 }, (_, i) => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 28 + 10,
      rot: Math.random() * Math.PI * 2,
      rotV: (Math.random() - 0.5) * 0.008,
      type: i % 3, // 0=triangle, 1=hexagon, 2=diamond
      color: ["#00F0FF", "#7B2CBF", "#2563EB"][i % 3],
      alpha: Math.random() * 0.12 + 0.04,
    }));

    const drawHex = (ctx, x, y, r, rot) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = rot + (Math.PI / 3) * i;
        i === 0 ? ctx.moveTo(x + r * Math.cos(a), y + r * Math.sin(a))
                : ctx.lineTo(x + r * Math.cos(a), y + r * Math.sin(a));
      }
      ctx.closePath();
    };

    const drawTri = (ctx, x, y, r, rot) => {
      ctx.beginPath();
      for (let i = 0; i < 3; i++) {
        const a = rot + (Math.PI * 2 / 3) * i - Math.PI / 2;
        i === 0 ? ctx.moveTo(x + r * Math.cos(a), y + r * Math.sin(a))
                : ctx.lineTo(x + r * Math.cos(a), y + r * Math.sin(a));
      }
      ctx.closePath();
    };

    const drawDiamond = (ctx, x, y, r, rot) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.beginPath();
      ctx.moveTo(0, -r);
      ctx.lineTo(r * 0.6, 0);
      ctx.lineTo(0, r);
      ctx.lineTo(-r * 0.6, 0);
      ctx.closePath();
      ctx.restore();
    };

    const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      shapes.forEach((s) => {
        ctx.save();
        ctx.globalAlpha = s.alpha;
        ctx.strokeStyle = s.color;
        ctx.lineWidth = 1;
        if (s.type === 0) drawTri(ctx, s.x, s.y, s.size, s.rot);
        else if (s.type === 1) drawHex(ctx, s.x, s.y, s.size, s.rot);
        else drawDiamond(ctx, s.x, s.y, s.size, s.rot);
        ctx.stroke();
        ctx.restore();

        s.x += s.vx; s.y += s.vy; s.rot += s.rotV;
        if (s.x < -50 || s.x > W + 50) s.vx *= -1;
        if (s.y < -50 || s.y > H + 50) s.vy *= -1;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-[-1]" style={{ opacity: 0.7 }} />;
}

/* ─── Variant: orbiting rings ─── */
function OrbitsCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    let raf, t = 0;

    const orbits = [
      { cx: W * 0.15, cy: H * 0.3, rx: 120, ry: 50, speed: 0.004, color: "#00F0FF", dots: 3 },
      { cx: W * 0.85, cy: H * 0.6, rx: 160, ry: 60, speed: -0.003, color: "#7B2CBF", dots: 4 },
      { cx: W * 0.5,  cy: H * 0.8, rx: 200, ry: 70, speed: 0.002, color: "#2563EB", dots: 5 },
      { cx: W * 0.7,  cy: H * 0.2, rx: 90,  ry: 35, speed: -0.006, color: "#00F0FF", dots: 2 },
    ];

    const resize = () => {
      W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight;
      orbits[0].cx = W * 0.15; orbits[0].cy = H * 0.3;
      orbits[1].cx = W * 0.85; orbits[1].cy = H * 0.6;
      orbits[2].cx = W * 0.5;  orbits[2].cy = H * 0.8;
      orbits[3].cx = W * 0.7;  orbits[3].cy = H * 0.2;
    };
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      t += 1;
      orbits.forEach((o) => {
        // Draw ellipse ring
        ctx.beginPath();
        ctx.ellipse(o.cx, o.cy, o.rx, o.ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = o.color;
        ctx.globalAlpha = 0.06;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw orbiting dots
        for (let i = 0; i < o.dots; i++) {
          const angle = t * o.speed + (Math.PI * 2 / o.dots) * i;
          const dx = o.cx + o.rx * Math.cos(angle);
          const dy = o.cy + o.ry * Math.sin(angle);
          ctx.beginPath();
          ctx.arc(dx, dy, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = o.color;
          ctx.globalAlpha = 0.5;
          ctx.fill();

          // Glow
          const grad = ctx.createRadialGradient(dx, dy, 0, dx, dy, 10);
          grad.addColorStop(0, o.color + "44");
          grad.addColorStop(1, "transparent");
          ctx.beginPath();
          ctx.arc(dx, dy, 10, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.globalAlpha = 1;
          ctx.fill();
        }
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-[-1]" style={{ opacity: 0.8 }} />;
}

/* ─── Variant: data grid nodes ─── */
function DataNodesCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    let raf, t = 0;

    const nodes = Array.from({ length: 24 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
      pulse: Math.random() * Math.PI * 2,
      color: ["#00F0FF", "#7B2CBF", "#2563EB"][Math.floor(Math.random() * 3)],
    }));

    const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      t += 0.02;

      // Connections
      nodes.forEach((a, i) => {
        nodes.slice(i + 1).forEach((b) => {
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 180) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(0,240,255,${(1 - d / 180) * 0.08})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Nodes
      nodes.forEach((n) => {
        const pulse = Math.sin(t + n.pulse) * 0.5 + 0.5;
        const r = 3 + pulse * 2;

        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.globalAlpha = 0.4 + pulse * 0.3;
        ctx.fill();

        // Ring
        ctx.beginPath();
        ctx.arc(n.x, n.y, r + 4 + pulse * 3, 0, Math.PI * 2);
        ctx.strokeStyle = n.color;
        ctx.globalAlpha = 0.08 + pulse * 0.06;
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.globalAlpha = 1;
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      });

      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-[-1]" style={{ opacity: 0.7 }} />;
}

/* ─── Variant: flowing wave lines ─── */
function WaveLinesCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    let raf, t = 0;

    const lines = Array.from({ length: 8 }, (_, i) => ({
      y: (H / 9) * (i + 1),
      amp: 20 + Math.random() * 40,
      freq: 0.003 + Math.random() * 0.004,
      speed: 0.008 + Math.random() * 0.01,
      phase: Math.random() * Math.PI * 2,
      color: i % 2 === 0 ? "#00F0FF" : "#7B2CBF",
    }));

    const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; lines.forEach((l, i) => { l.y = (H / 9) * (i + 1); }); };
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      t += 1;
      lines.forEach((l) => {
        ctx.beginPath();
        for (let x = 0; x <= W; x += 4) {
          const y = l.y + Math.sin(x * l.freq + t * l.speed + l.phase) * l.amp;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = l.color;
        ctx.globalAlpha = 0.07;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-[-1]" style={{ opacity: 0.8 }} />;
}

/* ─── Variant: matrix rain (subtle) ─── */
function MatrixCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    let raf;

    const COLS = Math.floor(W / 28);
    const drops = Array.from({ length: COLS }, () => Math.random() * -50);
    const chars = "01アイウエオカキクケコABCDEF∑∆Ω∞";

    const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.fillStyle = "rgba(1,2,6,0.05)";
      ctx.fillRect(0, 0, W, H);
      ctx.font = "12px monospace";
      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * 28;
        ctx.fillStyle = `rgba(0,240,255,${Math.random() * 0.12 + 0.03})`;
        ctx.fillText(char, x, y * 20);
        if (y * 20 > H && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 0.3;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-[-1]" style={{ opacity: 0.6 }} />;
}

/* ─── Export with variant prop ─── */
const variants = {
  geometric: GeometricCanvas,
  orbits: OrbitsCanvas,
  nodes: DataNodesCanvas,
  waves: WaveLinesCanvas,
  matrix: MatrixCanvas,
};

export default function PageBackground({ variant = "nodes" }) {
  const Component = variants[variant] || variants.nodes;
  return <Component />;
}
