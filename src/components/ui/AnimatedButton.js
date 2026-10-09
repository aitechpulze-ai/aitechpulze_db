"use client";
import { motion } from "framer-motion";
import { useState } from "react";

/**
 * Animated Button with Ripple Effect
 * Enhanced button with hover animations and click ripple
 */
export default function AnimatedButton({ 
  children, 
  onClick, 
  variant = "primary", 
  className = "",
  disabled = false,
  type = "button",
  ...props 
}) {
  const [ripples, setRipples] = useState([]);

  const createRipple = (event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple = {
      x,
      y,
      size,
      id: Date.now(),
    };

    setRipples((prev) => [...prev, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);

    if (onClick) onClick(event);
  };

  const variants = {
    primary: "bg-[#7B2CBF] text-white hover:bg-[#5b3fd6] shadow-[0_0_20px_rgba(123,44,191,0.4)]",
    secondary: "bg-white/5 border border-white/10 text-white hover:bg-white/10",
    outline: "border-2 border-[#00F0FF] text-[#00F0FF] hover:bg-[#00F0FF]/10",
    ghost: "text-white hover:bg-white/5",
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      onClick={createRipple}
      disabled={disabled}
      type={type}
      className={`
        relative overflow-hidden px-6 py-3 rounded-lg font-semibold
        transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {/* Ripple Effects */}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      ))}
      
      {/* Button Content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
