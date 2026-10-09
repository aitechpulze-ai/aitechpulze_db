# AiTechPulze Deployment Guide

## Pre-Deployment Checklist

### ✅ Code Quality
- [ ] All compilation errors resolved
- [ ] No console errors in browser
- [ ] All TypeScript/ESLint warnings addressed
- [ ] Code reviewed and approved
- [ ] Git repository up to date

### ✅ Environment Variables
- [ ] All required environment variables set
- [ ] Database credentials configured
- [ ] SMTP settings verified
- [ ] JWT secret generated (secure, random)
- [ ] Site URL configured correctly
- [ ] API keys secured (not in code)

### ✅ Performance
- [ ] Run `npm run build` successfully
- [ ] Lighthouse audit: Performance 90+
- [ ] Core Web Vitals targets met:
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1
- [ ] Images optimized (WebP format)
- [ ] Fonts preloaded correctly

### ✅ SEO
- [ ] Meta descriptions on all pages
- [ ] Open Graph images generating
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots.txt configured at `/robots.txt`
- [ ] Schema.org structured data present
- [ ] Canonical URLs set correctly

### ✅ Accessibility
- [ ] Lighthouse accessibility score 95+
- [ ] Keyboard navigation working
- [ ] Screen reader tested
- [ ] Color contrast WCAG AA compliant
- [ ] ARIA labels present
- [ ] Skip to content link working

### ✅ Security
- [ ] Environment variables not exposed to client
- [ ] JWT secret strong and unique
- [ ] HTTPS enforced
- [ ] Security headers configured
- [ ] Database credentials secure
- [ ] No hardcoded secrets in code

### ✅ Database
- [ ] Production database created
- [ ] Migrations run successfully
- [ ] Backup strategy in place
- [ ] Connection pool configured
- [ ] Admin user created

### ✅ Testing
- [ ] All major pages load correctly
- [ ] Forms submit successfully
- [ ] Authentication flow works
- [ ] Email sending verified
- [ ] Mobile responsive on real devices
- [ ] Cross-browser tested

---

## Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Why Vercel?**
- Built specifically for Next.js
- Zero-config deployments
- Automatic HTTPS
- Global CDN
- Preview deployments for PRs
- Free tier available

**Steps:**

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Set Environment Variables**
   - Go to Vercel Dashboard → Project → Settings → Environment Variables
   - Add all required variables:
     ```
     NEXT_PUBLIC_SITE_URL=https://yoursite.com
     DATABASE_URL=your_production_db_url
     JWT_SECRET=your_secure_jwt_secret
     SMTP_HOST=smtp.gmail.com
     SMTP_PORT=465
     SMTP_USER=your_email@gmail.com
     SMTP_PASS=your_app_password
     ```

5. **Production Deployment**
   ```bash
   vercel --prod
   ```

6. **Custom Domain**
   - Vercel Dashboard → Project → Settings → Domains
   - Add your domain: `aitechpulze.com`
   - Follow DNS configuration instructions

**Automatic Deployments:**
- Connect GitHub repository
- Every push to `main` branch auto-deploys
- PRs get preview URLs automatically

---

### Option 2: Traditional Hosting (Hostinger)

**For Hostinger or similar shared hosting:**

1. **Build the Application**
   ```bash
   npm run build
   ```

2. **Configure for Standalone Output**
   - Already set in `next.config.js`:
     ```javascript
     output: 'standalone'
     ```

3. **Upload Files**
   - Upload `.next`, `public`, `node_modules`, `package.json`
   - Or use Git deployment if available

4. **Set Environment Variables**
   - Add to `.env.production` on server
   - Never commit this file to Git

5. **Start Application**
   ```bash
   npm run start
   ```

6. **Process Manager (PM2)**
   ```bash
   npm install -g pm2
   pm2 start npm --name "aitechpulze" -- start
   pm2 save
   pm2 startup
   ```

7. **Nginx Configuration**
   ```nginx
   server {
       listen 80;
       server_name aitechpulze.com www.aitechpulze.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

8. **SSL Certificate (Let's Encrypt)**
   ```bash
   sudo certbot --nginx -d aitechpulze.com -d www.aitechpulze.com
   ```

---

### Option 3: Docker Deployment

**Dockerfile:**
```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

**docker-compose.yml:**
```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=${DATABASE_URL}
      - JWT_SECRET=${JWT_SECRET}
      - NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL}
    restart: unless-stopped
```

**Deploy:**
```bash
docker-compose up -d
```

---

## Environment Variables Reference

### Required Variables

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://aitechpulze.com

# Database (MySQL via Prisma)
DATABASE_URL="mysql://user:password@host:3306/database"

# Authentication
JWT_SECRET=your_very_long_random_secret_at_least_32_characters

# Email (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=info@aitechpulze.com
SMTP_PASS=your_app_specific_password
```

### Optional Variables

```bash
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Error Tracking (Sentry)
SENTRY_DSN=https://xxxxx@sentry.io/xxxxx

# reCAPTCHA (Form Protection)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
RECAPTCHA_SECRET_KEY=your_secret_key
```

---

## Post-Deployment Steps

### 1. Database Setup

```bash
# Run Prisma migrations
npx prisma migrate deploy

# Generate Prisma client
npx prisma generate

# Create admin user (if needed)
node scripts/create-admin.js
```

### 2. Test Production Site

Visit your production URL and test:
- [ ] Homepage loads
- [ ] Navigation works
- [ ] Forms submit (contact, get-quote)
- [ ] Mobile responsive
- [ ] All pages accessible

### 3. Submit to Search Engines

**Google Search Console:**
1. Verify ownership: https://search.google.com/search-console
2. Submit sitemap: `https://aitechpulze.com/sitemap.xml`
3. Request indexing for key pages

**Bing Webmaster Tools:**
1. Verify ownership: https://www.bing.com/webmasters
2. Submit sitemap

### 4. Set Up Monitoring

**Google Analytics:**
- Add tracking ID to environment variables
- Verify tracking in Real-Time reports

**Core Web Vitals:**
- Monitor in Google Search Console
- Check PageSpeed Insights weekly

**Uptime Monitoring:**
- Set up monitoring: UptimeRobot, Pingdom, or similar
- Alert notifications for downtime

### 5. Performance Monitoring

**Run Lighthouse Audit:**
```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run audit
lighthouse https://aitechpulze.com --view
```

**Target Scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

## Continuous Deployment (CI/CD)

### GitHub Actions Example

**.github/workflows/deploy.yml:**
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

---

## Rollback Plan

### If Deployment Fails:

1. **Immediate Rollback (Vercel)**
   - Vercel Dashboard → Deployments
   - Click on previous stable deployment
   - Click "Promote to Production"

2. **Manual Rollback**
   ```bash
   git revert HEAD
   git push origin main
   ```

3. **Database Rollback**
   ```bash
   # Revert last migration
   npx prisma migrate resolve --rolled-back [migration_name]
   ```

---

## Performance Optimization Tips

1. **Enable Caching**
   - Already configured in `next.config.js`
   - Static assets cached for 1 year

2. **Image Optimization**
   - All images in WebP format ✅
   - Using next/image everywhere ✅

3. **CDN Configuration**
   - Vercel CDN: Automatic
   - Cloudflare: Configure if using custom hosting

4. **Database Connection Pooling**
   - Already configured in Prisma
   - Adjust pool size if needed

---

## Monitoring & Maintenance

### Daily
- Check uptime monitoring alerts
- Review error logs

### Weekly
- Run Lighthouse audit
- Check Core Web Vitals in Search Console
- Review analytics for traffic/errors

### Monthly
- Update dependencies: `npm update`
- Security audit: `npm audit`
- Backup database
- Review and optimize slow queries

### Quarterly
- Full security review
- Performance optimization review
- Update documentation

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Database Connection Fails
- Check DATABASE_URL format
- Verify database is accessible
- Check firewall rules
- Test connection manually

### Environment Variables Not Working
- Verify variables in deployment platform
- Check variable names (case-sensitive)
- Restart application after changes
- `NEXT_PUBLIC_` prefix for client-side vars

### 500 Internal Server Error
- Check server logs
- Verify all environment variables set
- Check database connection
- Review recent code changes

---

## Support & Resources

**Documentation:**
- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs
- Prisma Docs: https://www.prisma.io/docs

**Community:**
- Next.js Discord: https://nextjs.org/discord
- Stack Overflow: Tag `next.js`

**AiTechPulze Team:**
- Technical Support: tech@aitechpulze.com
- Emergency Contact: +91 95857 76088

---

**Last Updated**: Phase 13 - Final Polish
**Status**: Production Ready ✅
**Next Review**: After first deployment
