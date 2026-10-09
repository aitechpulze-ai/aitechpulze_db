/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Compression
  compress: true,

  // React strict mode for better error detection
  reactStrictMode: true,

  // Production optimizations
  ...(process.env.NODE_ENV === 'production' && {
    // Generate static pages at build time when possible
    output: 'standalone',
  }),

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      // Cache static assets
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*.{svg,ico,png,webp,avif,jpg,jpeg}",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache fonts
      {
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  
  async redirects() {
    const r = (source, destination) => ({ source, destination, permanent: true });
    return [
      r("/solutions", "/services"),
      r("/technologies", "/services"),
      r("/products", "/work"),
      r("/portfolio", "/work"),
      r("/team", "/about"),
      r("/careers", "/academy/careers"),
      r("/internships", "/academy/internships"),
      r("/academic-hub", "/academy/projects"),
      r("/portal/student", "/portal/student/dashboard"),
      r("/portal/mentor", "/portal/mentor/dashboard"),
      r("/portal/admin", "/portal/admin/dashboard"),
    ];
  },
};

module.exports = nextConfig;
