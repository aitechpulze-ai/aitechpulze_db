"use client";
import { Component } from 'react';
import Link from 'next/link';

/**
 * Error Boundary Component
 * Catches JavaScript errors anywhere in the component tree and displays fallback UI
 * Logs errors to console in development, can send to error tracking service in production
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details
    console.error('Error Boundary caught an error:', error, errorInfo);
    
    this.setState({
      error,
      errorInfo,
    });

    // In production, send to error tracking service (e.g., Sentry)
    if (process.env.NODE_ENV === 'production') {
      // Example: Sentry.captureException(error, { extra: errorInfo });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#03040B] noise flex items-center justify-center px-4">
          <div className="max-w-2xl w-full text-center">
            {/* Error Icon */}
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-red-500/10 border-2 border-red-500/30 flex items-center justify-center">
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
              Oops! Something went wrong
            </h1>
            <p className="text-lg text-[#8b93b0] mb-8 max-w-lg mx-auto">
              We encountered an unexpected error. Don't worry, our team has been notified and we're working on it.
            </p>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-8 text-left bg-red-500/5 border border-red-500/20 rounded-xl p-6 max-w-full overflow-auto">
                <summary className="text-red-400 font-semibold cursor-pointer mb-4">
                  Error Details (Development Only)
                </summary>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-red-300 font-semibold mb-2">Error:</h3>
                    <pre className="text-xs text-red-200 whitespace-pre-wrap break-words">
                      {this.state.error.toString()}
                    </pre>
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <h3 className="text-red-300 font-semibold mb-2">Component Stack:</h3>
                      <pre className="text-xs text-red-200 whitespace-pre-wrap break-words">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-8 py-4 rounded-lg bg-[#7B2CBF] text-white font-semibold hover:bg-[#5b3fd6] transition-colors"
              >
                Reload Page
              </button>
              <Link
                href="/"
                className="px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Go to Homepage
              </Link>
            </div>

            {/* Contact Support */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-[#8b93b0]">
                Need help? <Link href="/contact" className="text-[#00F0FF] hover:underline">Contact our support team</Link>
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
