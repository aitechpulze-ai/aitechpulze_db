"use client";
import { useEffect } from 'react';
import Link from 'next/link';

/**
 * Global Error Page (Next.js App Router)
 * Catches errors in the application and displays a user-friendly error page
 */
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log error to console in development
    console.error('Application error:', error);
    
    // In production, send to error tracking service
    if (process.env.NODE_ENV === 'production') {
      // Example: Sentry.captureException(error);
    }
  }, [error]);

  return (
    <div className="min-h-screen bg-[#03040B] noise flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Error Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-red-500/10 border-2 border-red-500/30 flex items-center justify-center animate-pulse">
            <svg 
              className="w-12 h-12 text-red-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
              />
            </svg>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Something went wrong
        </h1>
        <p className="text-lg text-[#8b93b0] mb-8 max-w-lg mx-auto">
          We're sorry for the inconvenience. Our team has been notified and is working to fix the issue.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={() => reset()}
            className="px-8 py-4 rounded-lg bg-[#7B2CBF] text-white font-semibold hover:bg-[#5b3fd6] transition-all duration-300 hover:scale-105"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            Back to Home
          </Link>
        </div>

        {/* Help Links */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-sm text-[#8b93b0] mb-4">
            You can also try:
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link href="/services" className="text-[#00F0FF] hover:underline">
              Our Services
            </Link>
            <span className="text-white/20">•</span>
            <Link href="/work" className="text-[#00F0FF] hover:underline">
              Portfolio
            </Link>
            <span className="text-white/20">•</span>
            <Link href="/contact" className="text-[#00F0FF] hover:underline">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
