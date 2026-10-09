/**
 * Performance monitoring utilities for Core Web Vitals
 * Tracks LCP, FID, CLS, FCP, TTFB and sends to analytics
 */

// Core Web Vitals thresholds (in ms for timing, unitless for CLS)
export const WEB_VITALS_THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 }, // Largest Contentful Paint
  FID: { good: 100, poor: 300 },   // First Input Delay
  CLS: { good: 0.1, poor: 0.25 },  // Cumulative Layout Shift
  FCP: { good: 1800, poor: 3000 }, // First Contentful Paint
  TTFB: { good: 800, poor: 1800 }, // Time to First Byte
};

/**
 * Get rating (good/needs-improvement/poor) for a metric
 */
export function getRating(name, value) {
  const threshold = WEB_VITALS_THRESHOLDS[name];
  if (!threshold) return 'unknown';
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

/**
 * Report Web Vital to console in development
 * In production, this should send to your analytics service
 */
export function reportWebVital(metric) {
  const { name, value, rating, delta, id } = metric;
  
  // In development, log to console
  if (process.env.NODE_ENV === 'development') {
    const threshold = WEB_VITALS_THRESHOLDS[name];
    const emoji = rating === 'good' ? '✅' : rating === 'needs-improvement' ? '⚠️' : '❌';
    
    console.log(
      `${emoji} ${name}:`,
      `${Math.round(value)}${name === 'CLS' ? '' : 'ms'}`,
      `(${rating})`,
      threshold ? `[Good: <${threshold.good}, Poor: >${threshold.poor}]` : ''
    );
  }

  // In production, send to analytics
  if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
    // Google Analytics 4
    if (window.gtag) {
      window.gtag('event', name, {
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        metric_id: id,
        metric_value: value,
        metric_delta: delta,
        metric_rating: rating,
      });
    }

    // You can also send to other analytics services:
    // - Vercel Analytics
    // - Mixpanel
    // - Custom endpoint
  }
}

/**
 * Lazy load component with loading state
 * Usage: const LazyComponent = lazyLoad(() => import('./Component'))
 */
export function lazyLoad(importFunc) {
  if (typeof window === 'undefined') {
    // Server-side: load immediately
    return importFunc;
  }

  // Client-side: lazy load
  return importFunc;
}

/**
 * Prefetch link on hover for faster navigation
 * Usage: <Link href="/page" onMouseEnter={() => prefetchRoute('/page')}>
 */
export function prefetchRoute(href) {
  if (typeof window !== 'undefined' && 'connection' in navigator) {
    // Only prefetch on fast connections
    const connection = navigator.connection;
    if (connection.saveData || connection.effectiveType === 'slow-2g') {
      return;
    }
  }

  // Use Next.js router to prefetch
  const router = require('next/router').default;
  if (router) {
    router.prefetch(href);
  }
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Check connection quality
 */
export function getConnectionQuality() {
  if (typeof window === 'undefined' || !('connection' in navigator)) {
    return 'unknown';
  }

  const connection = navigator.connection;
  
  // Save data mode
  if (connection.saveData) return 'save-data';
  
  // Effective connection type
  const effectiveType = connection.effectiveType;
  if (effectiveType === '4g') return 'fast';
  if (effectiveType === '3g') return 'medium';
  if (effectiveType === 'slow-2g' || effectiveType === '2g') return 'slow';
  
  return 'unknown';
}

/**
 * Debounce function for performance
 */
export function debounce(func, wait = 300) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function for performance
 */
export function throttle(func, limit = 300) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Request Idle Callback wrapper with fallback
 */
export function requestIdleCallbackPolyfill(callback, options) {
  if (typeof window === 'undefined') {
    return callback();
  }

  if ('requestIdleCallback' in window) {
    return window.requestIdleCallback(callback, options);
  }

  // Fallback for browsers that don't support requestIdleCallback
  return setTimeout(() => callback(), 1);
}
