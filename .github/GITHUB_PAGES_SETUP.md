# GitHub Pages Setup Guide

This repository is configured for automatic deployment to GitHub Pages.

## Automatic Deployment

The website is automatically deployed when you push to the `main` branch. The GitHub Actions workflow (`.github/workflows/deploy.yml`) handles:

1. Building the React application
2. Deploying to the `gh-pages` branch
3. Making the site live at: `https://mohammadrezanarimaniucdavis.github.io/ABT182_Advance_GIS_UCDavis/`

## Manual Setup (if needed)

If automatic deployment doesn't work, follow these steps:

1. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Select "GitHub Actions" (not "Deploy from a branch")
   - Save

2. **Verify Base Path:**
   - The base path in `vite.config.ts` should match your repository name
   - Current: `/ABT182_Advance_GIS_UCDavis/`

3. **Check Workflow:**
   - Go to Actions tab
   - Verify the "Deploy to GitHub Pages" workflow runs successfully
   - Check for any errors in the workflow logs

## Troubleshooting

- **404 Errors:** Ensure the base path in `vite.config.ts` matches your repository name
- **Build Failures:** Check the Actions tab for error messages
- **Not Updating:** Clear browser cache or wait a few minutes for CDN propagation

## Development Workflow

- **Main Branch:** Production-ready code, auto-deploys to GitHub Pages
- **Dev Branch:** Development and testing, does not auto-deploy

To deploy:
1. Work on `dev` branch
2. Test locally
3. Merge to `main` branch
4. Push to trigger automatic deployment


