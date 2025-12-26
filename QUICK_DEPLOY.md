# ⚡ Quick Deploy Guide (5 Minutes)

## Fastest Way: Vercel

### Step 1: Create GitHub Repository (1 min)
1. Go to: https://github.com/new
2. Repository name: `dr-aparana-clinic`
3. Description: "Dr. Aparana Ghosh Clinic Website"
4. Make it **Public** (required for free hosting)
5. **DO NOT** check "Initialize with README"
6. Click "Create repository"

### Step 2: Push to GitHub (2 min)
```bash
cd /Users/nidhish.agrawal/draparana

# If git not initialized:
git init
git add .
git commit -m "Initial commit"

# Rename branch to main (if needed):
git branch -M main

# Add remote (replace YOUR_USERNAME with your GitHub username):
git remote add origin https://github.com/YOUR_USERNAME/dr-aparana-clinic.git

# Push to GitHub:
git push -u origin main
```

### Step 2: Deploy on Vercel (3 min)
1. Go to: https://vercel.com
2. Sign up with GitHub
3. Click "Add New Project"
4. Select your repository
5. Click "Deploy"
6. **Done!** Your site is live! 🎉

**Your URL**: `dr-aparana-clinic.vercel.app`

---

## Alternative: Netlify

1. Push to GitHub (same as above)
2. Go to: https://www.netlify.com
3. Sign up → Import from GitHub
4. Select repository → Deploy
5. **Done!**

**Your URL**: `dr-aparana-clinic.netlify.app`

---

## That's It!

Your website is now live and accessible worldwide! 🌍

For detailed instructions, see `DEPLOYMENT_GUIDE.md`

