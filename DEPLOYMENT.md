# 🚀 Deployment Guide

This guide covers various deployment options for the Salespirit website.

## 📋 Prerequisites

- Node.js 18+ installed
- Git repository access
- Environment variables configured

## 🌐 Deployment Options

### 1. Vercel (Recommended)

Vercel provides the best performance and developer experience for React applications.

#### Quick Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/zeussmma/salespirit)

#### Manual Deployment

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
   vercel --prod
   ```

4. **Configure Environment Variables**
   - Go to your Vercel dashboard
   - Navigate to Settings > Environment Variables
   - Add your environment variables:
     ```
     VITE_GA_MEASUREMENT_ID=your_ga_id
     VITE_CALENDLY_URL=https://calendly.com/arjan-salespirit/30min
     ```

### 2. Netlify

Netlify offers excellent static site hosting with continuous deployment.

#### Quick Deploy
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/zeussmma/salespirit)

#### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
   - Or use Netlify CLI:
     ```bash
     npm install -g netlify-cli
     netlify deploy --prod --dir=dist
     ```

3. **Configure Environment Variables**
   - Go to Site Settings > Environment Variables
   - Add your variables

### 3. GitHub Pages

Free hosting for static sites directly from your GitHub repository.

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json**
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Build and deploy**
   ```bash
   npm run build
   npm run deploy
   ```

4. **Configure GitHub Pages**
   - Go to repository Settings > Pages
   - Select source: Deploy from a branch
   - Select branch: gh-pages

### 4. AWS S3 + CloudFront

Enterprise-grade hosting with global CDN.

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Create S3 bucket**
   - Enable static website hosting
   - Upload `dist` folder contents

3. **Configure CloudFront**
   - Create distribution pointing to S3 bucket
   - Configure custom domain and SSL

4. **Set up CI/CD with GitHub Actions**
   ```yaml
   # .github/workflows/deploy.yml
   name: Deploy to AWS
   on:
     push:
       branches: [main]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - name: Setup Node.js
           uses: actions/setup-node@v2
           with:
             node-version: '18'
         - name: Install dependencies
           run: npm ci
         - name: Build
           run: npm run build
         - name: Deploy to S3
           run: aws s3 sync dist/ s3://your-bucket-name --delete
   ```

## 🔧 Environment Configuration

### Required Environment Variables

Create a `.env.local` file in your project root:

```env
# Analytics
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Calendly Integration
VITE_CALENDLY_URL=https://calendly.com/arjan-salespirit/30min

# Contact Form (if using external service)
VITE_CONTACT_FORM_ENDPOINT=https://your-form-endpoint.com

# Optional: Custom Domain
VITE_SITE_URL=https://salespirit.com
```

### Production Environment Variables

For production deployments, ensure these variables are set:

- `VITE_GA_MEASUREMENT_ID`: Google Analytics tracking ID
- `VITE_CALENDLY_URL`: Your Calendly booking link
- `NODE_ENV`: Set to `production`

## 🔍 Domain Configuration

### Custom Domain Setup

1. **Purchase domain** from your preferred registrar
2. **Configure DNS records**:
   ```
   Type: CNAME
   Name: www
   Value: your-deployment-url.vercel.app
   
   Type: A
   Name: @
   Value: [Your hosting provider's IP]
   ```

3. **SSL Certificate**
   - Most hosting providers (Vercel, Netlify) provide automatic SSL
   - For custom setups, use Let's Encrypt or CloudFlare

### Subdomain Setup

For staging or development environments:

```
staging.salespirit.com -> staging-deployment-url
dev.salespirit.com -> dev-deployment-url
```

## 📊 Performance Optimization

### Build Optimization

1. **Analyze bundle size**
   ```bash
   npm run build
   npx vite-bundle-analyzer dist
   ```

2. **Optimize images**
   - Use WebP format when possible
   - Implement responsive images
   - Set up image CDN (Cloudinary, ImageKit)

3. **Enable compression**
   - Gzip/Brotli compression
   - Configure in hosting provider settings

### CDN Configuration

1. **Static assets CDN**
   - Upload images, fonts to CDN
   - Update asset URLs in code

2. **Global CDN**
   - CloudFlare for global distribution
   - AWS CloudFront for enterprise

## 🔒 Security Configuration

### Headers Configuration

Add security headers in your hosting provider:

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

### HTTPS Enforcement

Ensure all traffic is redirected to HTTPS:
- Configure in hosting provider settings
- Update all internal links to use HTTPS

## 📈 Monitoring & Analytics

### Performance Monitoring

1. **Google PageSpeed Insights**
   - Monitor Core Web Vitals
   - Set up automated monitoring

2. **Real User Monitoring (RUM)**
   - Implement with Google Analytics
   - Use tools like New Relic or DataDog

### Error Tracking

1. **Sentry Integration**
   ```bash
   npm install @sentry/react
   ```

2. **Configure error boundaries**
   - Already implemented in the project
   - Monitor error rates and types

## 🔄 Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:

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
          cache: 'npm'
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

## 🆘 Troubleshooting

### Common Issues

1. **Build failures**
   - Check Node.js version compatibility
   - Clear node_modules and reinstall
   - Check for TypeScript errors

2. **Environment variables not working**
   - Ensure variables start with `VITE_`
   - Restart development server after changes
   - Check deployment platform configuration

3. **Performance issues**
   - Analyze bundle size
   - Check for memory leaks
   - Optimize images and assets

### Support

For deployment issues:
- Check hosting provider documentation
- Review build logs for errors
- Contact support if needed

---

🎉 **Congratulations!** Your Salespirit website is now deployed and ready to convert visitors into customers!
