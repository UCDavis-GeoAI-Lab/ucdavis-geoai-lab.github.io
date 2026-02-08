# UC Davis Custom Domain Setup for Organization Site

## Target Repository
**Organization Repository:** UCDavis-GeoAI-Lab/ucdavis-geoai-lab.github.io  
**Current URL:** https://ucdavis-geoai-lab.github.io/  
**Target Custom Domain:** geoailab.ucdavis.edu

## This Repository (ABT182)
**This repository stays as is:** https://mohammadrezanarimaniucdavis.github.io/ABT182_Advance_GIS_UCDavis/  
**No custom domain needed here.**

---

## Steps to Configure Custom Domain

### YOU Need to Do (In Organization Repository):

#### Step 1: Add CNAME File to Organization Repository
1. Go to: https://github.com/UCDavis-GeoAI-Lab/ucdavis-geoai-lab.github.io
2. Create a file named `CNAME` in the root directory (or `public/` folder if using build system)
3. Content of CNAME file: `geoailab.ucdavis.edu`
4. Commit and push

#### Step 2: Configure Custom Domain in GitHub Settings
1. Go to: https://github.com/UCDavis-GeoAI-Lab/ucdavis-geoai-lab.github.io/settings/pages
2. Under "Custom domain", enter: `geoailab.ucdavis.edu`
3. Click "Save"
4. GitHub will verify the CNAME file ✓

#### Step 3: Send Email to Chris

---

**Subject:** GitHub Pages Custom Domain Configuration for GeoAI Lab

Hi Chris,

We have configured our GitHub Pages organization site for UC Davis custom domain.

**GitHub Pages Site:** https://ucdavis-geoai-lab.github.io/  
**Requested UC Davis Domain:** geoailab.ucdavis.edu

**What We've Done:**
- Created CNAME file in the repository pointing to geoailab.ucdavis.edu
- Configured custom domain in GitHub repository settings

**DNS Configuration Needed from UC Davis IT:**

Please create the following DNS record:

```
Record Type: CNAME
Name: geoailab
Value: ucdavis-geoai-lab.github.io
```

**Repository Information:**
- Organization: UCDavis-GeoAI-Lab
- Repository: ucdavis-geoai-lab.github.io
- Custom Domain: geoailab.ucdavis.edu

**Next Steps:**
1. UC Davis IT creates DNS CNAME record
2. Wait 24 hours for DNS propagation
3. We verify domain resolution
4. We enable HTTPS enforcement in GitHub

**Verification Command (PowerShell):**
```powershell
Resolve-DnsName geoailab.ucdavis.edu
```

Expected output:
```
Name:  geoailab.ucdavis.edu
Type:  CNAME
Value: ucdavis-geoai-lab.github.io
```

Please let us know when DNS configuration is complete.

Thank you!

Best regards,  
Prof. Ali Moghimi  
ABT/HYD 182 - Advanced GIS  
University of California, Davis  
Email: amoghimi@ucdavis.edu

Technical Contact:  
Mohammadreza Narimani  
Email: mnarimani@ucdavis.edu

---

#### Step 4: Wait for DNS Configuration
Chris will configure DNS. Wait up to 24 hours for propagation.

#### Step 5: Verify and Enable HTTPS
After DNS works:
1. Test: `Resolve-DnsName geoailab.ucdavis.edu`
2. Visit the site at https://geoailab.ucdavis.edu
3. Go back to GitHub Settings → Pages
4. Check "Enforce HTTPS"

---

## Result

After completion:
- **Organization Site:** https://geoailab.ucdavis.edu ✨
- **ABT182 Course Site:** https://mohammadrezanarimaniucdavis.github.io/ABT182_Advance_GIS_UCDavis/ (unchanged)

Both sites will remain accessible!

---

## Important Notes

⚠️ **The CNAME file goes in the ORGANIZATION repository**, not this ABT182 repository  
⚠️ **This ABT182 repository needs NO changes** for custom domain  
⚠️ **Only the organization site** will have the UC Davis custom domain  

---

Last updated: February 8, 2026
