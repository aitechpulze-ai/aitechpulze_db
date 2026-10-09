"use client";

import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 80;
const CONNECTION_DIST = 140;
const COLORS = ["#00F0FF", "#7B2CBF", "#2563EB"];

export default function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    let raf;
    let targetMouse = { x: -1000, y: -1000 };
    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e) => {
      targetMouse.x = e.clientX;
      targetMouse.y = e.clientY;
    };
    
    const handleMouseLeave = () => {
      targetMouse.x = -1000;
      targetMouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const PARTICLE_COUNT = window.innerWidth < 768 ? 60 : 120;
    const CONNECTION_DIST = 160;
    const COLORS = ["#00F0FF", "#7B2CBF", "#2563EB", "#A855F7"];

    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: Math.random() * 2.5 + 0.5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: Math.random() * 0.6 + 0.3,
      parallaxFactor: Math.random() * 0.5 + 0.1,
    }));

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    // Track scroll for parallax
    let scrollY = window.scrollY;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      
      // Smooth mouse interpolation for premium feel
      mouse.x += (targetMouse.x - mouse.x) * 0.1;
      mouse.y += (targetMouse.y - mouse.y) * 0.1;

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const opacity = (1 - dist / CONNECTION_DIST) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            // Create a gradient line between the two particles
            const grad = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
            grad.addColorStop(0, particles[i].color.replace(')', `,${opacity})`).replace('rgb', 'rgba'));
            grad.addColorStop(1, particles[j].color.replace(')', `,${opacity})`).replace('rgb', 'rgba'));
            
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color === "#00F0FF"
            ? `rgba(0,240,255,${p.alpha})`
            : p.color === "#7B2CBF"
            ? `rgba(123,44,191,${p.alpha})`
            : p.color === "#A855F7"
            ? `rgba(168,85,247,${p.alpha})`
            : `rgba(37,99,235,${p.alpha})`;
        ctx.fill();

        // Premium Glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        const glowColor = p.color === "#00F0FF" ? `0,240,255` : p.color === "#7B2CBF" ? `123,44,191` : p.color === "#A855F7" ? `168,85,247` : `37,99,235`;
        grad.addColorStop(0, `rgba(${glowColor},0.15)`);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.fill();

        // Mouse Interaction (magnetic pull and repel)
        const dxMouse = p.x - mouse.x;
        const dyMouse = p.y - mouse.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        
        if (distMouse < 200 && mouse.x !== -1000) {
          const force = (200 - distMouse) / 200;
          // Repel slightly
          p.vx += (dxMouse / distMouse) * force * 0.6;
          p.vy += (dyMouse / distMouse) * force * 0.6;
        }

        // Move
        p.x += p.vx;
        // Add parallax scroll effect
        p.y += p.vy - (scrollY * p.parallaxFactor * 0.001);
        
        // Friction
        p.vx *= 0.98;
        p.vy *= 0.98;

        // Base velocity restoration
        if (Math.abs(p.vx) < 0.25) p.vx += (Math.random() - 0.5) * 0.08;
        if (Math.abs(p.vy) < 0.25) p.vy += (Math.random() - 0.5) * 0.08;

        // Wrapped Bounds for continuous flow
        if (p.x < -10) { p.x = W + 10; }
        if (p.x > W + 10) { p.x = -10; }
        if (p.y < -10) { p.y = H + 10; }
        if (p.y > H + 10) { p.y = -10; }
      });

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[0]"
      style={{ opacity: 0.8 }}
    />
  );
}
