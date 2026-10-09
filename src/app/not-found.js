import Link from 'next/link';

/**
 * Custom 404 Not Found Page
 * Displayed when a page doesn't exist
 */
export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#03040B] noise flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Visual */}
        <div className="mb-8">
          <div className="relative inline-block">
            <h1 className="text-[150px] md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CBF] to-[#00F0FF] leading-none">
              404
            </h1>
            <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-[#7B2CBF] to-[#00F0FF]" aria-hidden="true" />
          </div>
        </div>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-[#8b93b0] mb-8 max-w-lg mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        {/* Search Suggestions */}
        <div className="mb-12 p-6 rounded-xl bg-white/5 border border-white/10 max-w-md mx-auto">
          <h3 className="text-white font-semibold mb-4">Popular Pages</h3>
          <div className="space-y-2">
            <Link 
              href="/services" 
              className="block text-[#00F0FF] hover:text-white transition-colors"
            >
              → Our Services
            </Link>
            <Link 
              href="/work" 
              className="block text-[#00F0FF] hover:text-white transition-colors"
            >
              → Portfolio & Case Studies
            </Link>
            <Link 
              href="/industries" 
              className="block text-[#00F0FF] hover:text-white transition-colors"
            >
              → Industries We Serve
            </Link>
            <Link 
              href="/pricing" 
              className="block text-[#00F0FF] hover:text-white transition-colors"
            >
              → Pricing Plans
            </Link>
            <Link 
              href="/about" 
              className="block text-[#00F0FF] hover:text-white transition-colors"
            >
              → About Us
            </Link>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 rounded-lg bg-[#7B2CBF] text-white font-semibold hover:bg-[#5b3fd6] transition-all duration-300 hover:scale-105"
          >
            Go to Homepage
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
