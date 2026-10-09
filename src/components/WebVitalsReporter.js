"use client";
import { useEffect } from 'react';
import { useReportWebVitals } from 'next/web-vitals';
import { reportWebVital } from '@/lib/performance';

/**
 * Web Vitals Reporter Component
 * Automatically tracks and reports Core Web Vitals (LCP, FID, CLS, FCP, TTFB)
 * In development: logs to console
 * In production: sends to analytics
 */
export default function WebVitalsReporter() {
  useReportWebVitals((metric) => {
    reportWebVital(metric);
  });

  return null;
}
