#!/usr/bin/env node

/**
 * Production Readiness Check Script
 * Validates environment and configuration before deployment
 */

const fs = require('fs');
const path = require('path');

// Load environment variables from .env.local
function loadEnv() {
  const envPath = path.join(process.cwd(), '.env.local');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach(line => {
      // Skip comments and empty lines
      if (line.trim() && !line.trim().startsWith('#')) {
        const match = line.match(/^([^=]+)=(.*)$/);
        if (match) {
          const key = match[1].trim();
          let value = match[2].trim();
          // Remove quotes if present
          if ((value.startsWith('"') && value.endsWith('"')) || 
              (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1);
          }
          process.env[key] = value;
        }
      }
    });
    console.log('✅ Loaded environment variables from .env.local\n');
  } else {
    console.log('⚠️  No .env.local file found - using system environment variables\n');
  }
}

// Load environment before checks
loadEnv();

console.log('\n🚀 AiTechPulze Production Readiness Check\n');
console.log('='.repeat(50));

let errors = [];
let warnings = [];
let checks = 0;
let passed = 0;

// Helper functions
function check(name, condition, errorMsg, warnMsg) {
  checks++;
  if (condition) {
    passed++;
    console.log(`✅ ${name}`);
    return true;
  } else {
    if (errorMsg) {
      errors.push(`${name}: ${errorMsg}`);
      console.log(`❌ ${name}: ${errorMsg}`);
    } else if (warnMsg) {
      warnings.push(`${name}: ${warnMsg}`);
      console.log(`⚠️  ${name}: ${warnMsg}`);
    }
    return false;
  }
}

// 1. Check Required Files
console.log('\n📁 File Structure');
console.log('-'.repeat(50));

check('package.json exists', fs.existsSync('package.json'), 'Missing package.json');
check('next.config.js exists', fs.existsSync('next.config.js'), 'Missing next.config.js');
check('.env.example exists', fs.existsSync('.env.example'), null, 'Missing .env.example template');
check('README.md exists', fs.existsSync('README.md'), null, 'Missing README.md');
check('prisma/schema.prisma exists', fs.existsSync('prisma/schema.prisma'), 'Missing Prisma schema');

// 2. Check Environment Variables
console.log('\n🔐 Environment Variables');
console.log('-'.repeat(50));

const requiredEnvVars = [
  'DATABASE_URL',
  'JWT_SECRET',
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
];

const optionalEnvVars = [
  'NEXT_PUBLIC_SITE_URL',
  'NEXT_PUBLIC_GA_ID',
  'SENTRY_DSN',
];

requiredEnvVars.forEach(varName => {
  check(
    `${varName} set`,
    process.env[varName],
    `Required environment variable ${varName} is not set`
  );
});

optionalEnvVars.forEach(varName => {
  check(
    `${varName} set`,
    process.env[varName],
    null,
    `Optional variable ${varName} not set (recommended for production)`
  );
});

// 3. Check package.json Configuration
console.log('\n📦 Package Configuration');
console.log('-'.repeat(50));

try {
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  
  check('Build script exists', !!pkg.scripts?.build, 'Missing build script');
  check('Start script exists', !!pkg.scripts?.start, 'Missing start script');
  check('Next.js installed', !!pkg.dependencies?.next, 'Next.js not in dependencies');
  check('React installed', !!pkg.dependencies?.react, 'React not in dependencies');
  check('Prisma installed', !!pkg.dependencies?.['@prisma/client'], null, 'Prisma client not installed');
  
} catch (err) {
  errors.push('Failed to read package.json');
  console.log(`❌ Failed to read package.json: ${err.message}`);
}

// 4. Check next.config.js
console.log('\n⚙️  Next.js Configuration');
console.log('-'.repeat(50));

try {
  const configPath = path.join(process.cwd(), 'next.config.js');
  if (fs.existsSync(configPath)) {
    const configContent = fs.readFileSync(configPath, 'utf8');
    
    check('Images config present', configContent.includes('images'), null, 'Image optimization config not found');
    check('Headers config present', configContent.includes('headers'), null, 'Security headers not configured');
    check('Compression enabled', configContent.includes('compress'), null, 'Compression not enabled');
    
    passed++; checks++;
    console.log('✅ next.config.js readable');
  }
} catch (err) {
  warnings.push(`Could not read next.config.js: ${err.message}`);
  console.log(`⚠️  Could not read next.config.js: ${err.message}`);
}

// 5. Check Documentation
console.log('\n📚 Documentation');
console.log('-'.repeat(50));

check('DEPLOYMENT.md exists', fs.existsSync('DEPLOYMENT.md'), null, 'Missing deployment guide');
check('PERFORMANCE.md exists', fs.existsSync('PERFORMANCE.md'), null, 'Missing performance docs');
check('ACCESSIBILITY.md exists', fs.existsSync('ACCESSIBILITY.md'), null, 'Missing accessibility docs');
check('PRODUCTION_READY.md exists', fs.existsSync('PRODUCTION_READY.md'), null, 'Missing production guide');

// 6. Check Source Files
console.log('\n📝 Source Files');
console.log('-'.repeat(50));

check('src/app directory exists', fs.existsSync('src/app'), 'Missing app directory');
check('src/components exists', fs.existsSync('src/components'), 'Missing components directory');
check('src/lib exists', fs.existsSync('src/lib'), null, 'Missing lib directory');
check('public directory exists', fs.existsSync('public'), 'Missing public directory');

// 7. Check for common issues
console.log('\n🔍 Common Issues Check');
console.log('-'.repeat(50));

check(
  'node_modules exists',
  fs.existsSync('node_modules'),
  'Dependencies not installed. Run: npm install'
);

check(
  '.next build directory',
  !fs.existsSync('.next') || fs.statSync('.next').isDirectory(),
  null,
  'Build directory exists (clean build recommended: rm -rf .next)'
);

check(
  'No .env in repo',
  !fs.existsSync('.env'),
  null,
  '.env file found (should not be committed to Git)'
);

// Print Summary
console.log('\n' + '='.repeat(50));
console.log('📊 Summary');
console.log('='.repeat(50));
console.log(`Total Checks: ${checks}`);
console.log(`✅ Passed: ${passed}`);
console.log(`❌ Errors: ${errors.length}`);
console.log(`⚠️  Warnings: ${warnings.length}`);

if (errors.length > 0) {
  console.log('\n❌ CRITICAL ISSUES:');
  errors.forEach(err => console.log(`   - ${err}`));
}

if (warnings.length > 0) {
  console.log('\n⚠️  WARNINGS:');
  warnings.forEach(warn => console.log(`   - ${warn}`));
}

console.log('\n' + '='.repeat(50));

if (errors.length === 0) {
  console.log('✅ Production Ready!');
  console.log('\nNext steps:');
  console.log('1. Run: npm run build');
  console.log('2. Test the build: npm run start');
  console.log('3. Review DEPLOYMENT.md for deployment options');
  console.log('4. Deploy to your hosting platform');
  process.exit(0);
} else {
  console.log('❌ Not Ready for Production');
  console.log('\nPlease fix the critical issues above before deploying.');
  process.exit(1);
}
