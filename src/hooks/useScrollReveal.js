"use client";
import { useEffect, useRef, useState } from "react";

/**
 * useScrollReveal - Intersection Observer hook for scroll-triggered animations
 * Detects when element enters viewport and triggers reveal
 * 
 * @param {Object} options - IntersectionObserver options
 * @param {boolean} options.once - Trigger animation only once (default: true)
 * @param {string} options.threshold - Visibility threshold 0-1 (default: 0.2)
 * @param {string} options.rootMargin - Margin around viewport (default: "0px")
 * @returns {Array} [ref, isVisible] - Ref to attach to element + visibility state
 * 
 * Usage:
 * const [ref, isVisible] = useScrollReveal({ once: true });
 * <div ref={ref} className={isVisible ? 'animate-in' : 'opacity-0'}>
 */
export default function useScrollReveal(options = {}) {
  const {
    once = true,
    threshold = 0.2,
    rootMargin = "0px",
  } = options;

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && observer) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [once, threshold, rootMargin]);

  return [ref, isVisible];
}

/**
 * useStaggerReveal - Multiple elements revealed with stagger
 * Returns array of [ref, isVisible] for each element
 * 
 * @param {number} count - Number of elements
 * @param {number} staggerDelay - Delay between each element in ms (default: 100)
 * @returns {Array} Array of [ref, isVisible] pairs
 * 
 * Usage:
 * const reveals = useStaggerReveal(3);
 * {items.map((item, i) => (
 *   <div key={i} ref={reveals[i][0]} className={reveals[i][1] ? 'animate-in' : ''}>
 * ))}
 */
export function useStaggerReveal(count, staggerDelay = 100) {
  const [refs] = useState(() => Array.from({ length: count }, () => useRef(null)));
  const [visibleStates, setVisibleStates] = useState(Array(count).fill(false));
  const hasTriggered = useRef(false);

  useEffect(() => {
    const firstElement = refs[0]?.current;
    if (!firstElement || hasTriggered.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true;
          
          // Trigger each element with stagger delay
          refs.forEach((_, index) => {
            setTimeout(() => {
              setVisibleStates((prev) => {
                const newStates = [...prev];
                newStates[index] = true;
                return newStates;
              });
            }, index * staggerDelay);
          });

          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-50px",
      }
    );

    observer.observe(firstElement);

    return () => observer.disconnect();
  }, [refs, staggerDelay]);

  return refs.map((ref, index) => [ref, visibleStates[index]]);
}
