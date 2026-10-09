"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Smooth Reveal Component
 * Animates children into view on scroll with customizable animations
 */
export default function SmoothReveal({ 
  children, 
  delay = 0,
  direction = "up", // up, down, left, right
  once = true,
  className = ""
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-100px" });

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        x: 0 
      } : {}}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.21, 0.45, 0.27, 0.9]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger Children Component
 * Reveals children one by one with stagger effect
 */
export function StaggerReveal({ 
  children, 
  staggerDelay = 0.1,
  once = true,
  className = ""
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger Item Component
 * Use inside StaggerReveal for individual items
 */
export function StaggerItem({ children, className = "" }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.21, 0.45, 0.27, 0.9]
          }
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Scale on Hover Component
 * Smooth scale animation on hover
 */
export function ScaleOnHover({ children, scale = 1.05, className = "" }) {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Float Animation Component
 * Gentle floating effect for visual interest
 */
export function FloatAnimation({ children, duration = 3, className = "" }) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Pulse Animation Component
 * Attention-grabbing pulse effect
 */
export function PulseAnimation({ children, scale = 1.1, className = "" }) {
  return (
    <motion.div
      animate={{
        scale: [1, scale, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
