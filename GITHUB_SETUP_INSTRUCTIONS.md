# GitHub Setup Instructions

## 🔧 Fix GitHub Actions Deployment

The workflow has been updated. Now you need to configure GitHub Pages settings:

### Step 1: Enable GitHub Pages

1. Go to your repository: https://github.com/MohammadrezaNarimaniUCDavis/ABT182_Advance_GIS_UCDavis
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Build and deployment**:
   - **Source:** Select **"GitHub Actions"** (NOT "Deploy from a branch")
   - Click **Save**

### Step 2: Verify Permissions

1. Still in **Settings** → **Pages**
2. Make sure **"Allow GitHub Actions to create and approve pull requests"** is enabled
3. The workflow should now have proper permissions

### Step 3: Check Deployment

1. Go to **Actions** tab
2. You should see "Deploy to GitHub Pages" workflow running
3. Wait 1-2 minutes for it to complete
4. Once green (✓), your site is live!

## 🌐 Your Website URL

Once deployed, your website will be available at:

**https://mohammadrezanarimaniucdavis.github.io/ABT182_Advance_GIS_UCDavis/**

## 📝 Repository Details

Fill in these details in your repository settings:

### Description
```
Advanced GIS course website for ABT/HYD 182 at UC Davis. Interactive lab materials, Python programming exercises, and GIS applications.
```

### Website
```
https://mohammadrezanarimaniucdavis.github.io/ABT182_Advance_GIS_UCDavis/
```

### Topics (add these)
```
gis geographic-information-systems python ucdavis education teaching course-website react typescript
```

### How to Add Topics:
1. Go to repository main page
2. Click the gear icon (⚙️) next to "About"
3. In "Topics" field, add: `gis geographic-information-systems python ucdavis education teaching course-website react typescript`
4. Click outside to save

## ✅ Verification Checklist

- [ ] GitHub Pages source set to "GitHub Actions"
- [ ] Actions workflow completed successfully (green checkmark)
- [ ] Website URL accessible
- [ ] Repository description added
- [ ] Website URL added to repository
- [ ] Topics added

## 🐛 Troubleshooting

If deployment still fails:

1. **Check Actions Logs:**
   - Go to Actions tab
   - Click on the failed workflow
   - Check error messages

2. **Verify Permissions:**
   - Settings → Actions → General
   - Under "Workflow permissions", select "Read and write permissions"
   - Check "Allow GitHub Actions to create and approve pull requests"

3. **Manual Deployment (if needed):**
   ```bash
   npm run build
   # Then manually push dist/ folder to gh-pages branch
   ```

## 📧 Need Help?

If issues persist, check:
- GitHub Actions logs for specific errors
- Repository settings for permissions
- Make sure the workflow file is in `.github/workflows/deploy.yml`

---

**After completing these steps, your website will be live! 🚀**


