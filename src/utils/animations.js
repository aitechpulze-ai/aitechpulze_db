/**
 * Reusable Animation Utilities for AiTechPulze
 * All animations respect prefers-reduced-motion
 */

/**
 * Stagger container for progressive card reveals
 * Usage: <motion.div variants={staggerContainer} initial="hidden" whileInView="show">
 */
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // 100ms between children
      delayChildren: 0.2,
    },
  },
};

/**
 * Stagger item for individual cards
 * Usage: <motion.div variants={staggerItem}>
 */
export const staggerItem = {
  hidden: { opacity: 0, y: 40, scale: 0.95, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/**
 * Fade in + slide up animation
 * Usage: <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
 */
export const fadeInUp = {
  hidden: { opacity: 0, y: 50, filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/**
 * Scale in animation (for modals, cards)
 * Usage: <motion.div variants={scaleIn} initial="hidden" animate="show">
 */
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/**
 * Slide in from direction
 * @param {string} direction - 'left', 'right', 'up', 'down'
 * @param {number} distance - Distance in pixels (default: 60)
 */
export const slideIn = (direction = "left", distance = 60) => {
  const directions = {
    left: { x: -distance, y: 0 },
    right: { x: distance, y: 0 },
    up: { x: 0, y: -distance },
    down: { x: 0, y: distance },
  };

  const offset = directions[direction] || directions.left;

  return {
    hidden: { opacity: 0, ...offset },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
};

/**
 * Progressive text reveal (line by line)
 * Usage: Apply to each line with increasing delays
 */
export const textReveal = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

/**
 * Counter animation for numbers
 * Usage with Framer Motion's useInView + custom hook
 * @param {number} end - Target number
 * @param {number} duration - Animation duration in seconds (default: 2)
 */
export function useCountUp(end, duration = 2) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return count;
}

/**
 * Viewport animation config
 * Standardized settings for whileInView animations
 */
export const viewportConfig = {
  once: true, // Animate only once when entering viewport
  margin: "-100px", // Trigger 100px before element enters viewport
  amount: 0.3, // Trigger when 30% of element is visible
};

/**
 * Reduced motion variants
 * Automatically respects prefers-reduced-motion
 * Falls back to simple fade when motion is reduced
 */
export const reducedMotionSafe = (variants) => {
  if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { duration: 0.3 } },
    };
  }
  return variants;
};

/**
 * Blur fade in animation
 * Creates premium entrance effect
 */
export const blurFadeIn = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/**
 * Card hover animation
 * Standardized hover effect for cards
 */
export const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -6,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/**
 * Button magnetic effect
 * Smooth follow cursor within bounds
 */
export const magneticButton = {
  spring: {
    type: "spring",
    stiffness: 400,
    damping: 30,
  },
};

/**
 * Path draw animation for SVG paths
 * Usage: <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={pathDraw} />
 */
export const pathDraw = {
  duration: 2,
  ease: "easeInOut",
};

/**
 * Pulse animation (for indicators, badges)
 */
export const pulse = {
  scale: [1, 1.1, 1],
  opacity: [1, 0.8, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

/**
 * Ripple effect for buttons
 * Creates expanding circle on click
 */
export const rippleEffect = {
  scale: [0, 2.5],
  opacity: [0.5, 0],
  transition: {
    duration: 0.6,
    ease: "easeOut",
  },
};

/**
 * Page transition variants
 * For route changes
 */
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/**
 * Modal variants
 * For dialogs, overlays
 */
export const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: {
      duration: 0.2,
    },
  },
};

/**
 * Backdrop variants
 * For modal backdrops, overlays
 */
export const backdropVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};
