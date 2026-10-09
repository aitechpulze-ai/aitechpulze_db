/**
 * Environment Variable Validation
 * Checks required environment variables at build/runtime
 */

// Required environment variables for production
const REQUIRED_ENV_VARS = {
  production: [
    'NEXT_PUBLIC_SITE_URL',
    'DATABASE_URL',
    'JWT_SECRET',
    'SMTP_HOST',
    'SMTP_PORT',
    'SMTP_USER',
    'SMTP_PASS',
  ],
  development: [
    'DATABASE_URL',
  ],
};

// Optional environment variables with warnings
const OPTIONAL_ENV_VARS = [
  'NEXT_PUBLIC_GA_ID', // Google Analytics
  'SENTRY_DSN', // Error tracking
  'NEXT_PUBLIC_RECAPTCHA_SITE_KEY', // Form protection
];

/**
 * Validate environment variables
 */
export function validateEnvironment() {
  const env = process.env.NODE_ENV || 'development';
  const requiredVars = REQUIRED_ENV_VARS[env] || REQUIRED_ENV_VARS.development;
  
  const missing = [];
  const warnings = [];

  // Check required variables
  requiredVars.forEach((varName) => {
    if (!process.env[varName]) {
      missing.push(varName);
    }
  });

  // Check optional variables
  OPTIONAL_ENV_VARS.forEach((varName) => {
    if (!process.env[varName]) {
      warnings.push(varName);
    }
  });

  // Report results
  if (missing.length > 0) {
    console.error('❌ Missing required environment variables:');
    missing.forEach((varName) => {
      console.error(`   - ${varName}`);
    });
    
    if (env === 'production') {
      throw new Error('Missing required environment variables for production');
    }
  }

  if (warnings.length > 0 && env === 'production') {
    console.warn('⚠️  Missing optional environment variables:');
    warnings.forEach((varName) => {
      console.warn(`   - ${varName} (recommended for production)`);
    });
  }

  if (missing.length === 0 && env === 'production') {
    console.log('✅ All required environment variables are set');
  }

  return {
    isValid: missing.length === 0,
    missing,
    warnings,
  };
}

/**
 * Get safe environment info for client-side display
 */
export function getSafeEnvInfo() {
  return {
    nodeEnv: process.env.NODE_ENV,
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'Not set',
    hasDatabase: !!process.env.DATABASE_URL,
    hasSmtp: !!process.env.SMTP_HOST,
    hasAnalytics: !!process.env.NEXT_PUBLIC_GA_ID,
  };
}

/**
 * Check if running in production
 */
export function isProduction() {
  return process.env.NODE_ENV === 'production';
}

/**
 * Check if running in development
 */
export function isDevelopment() {
  return process.env.NODE_ENV === 'development';
}

/**
 * Get site URL with fallback
 */
export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
}
