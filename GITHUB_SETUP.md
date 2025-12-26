# 🔧 GitHub Repository Setup

## Quick Fix for Your Current Issue

You need to **create the repository on GitHub first** before pushing.

### Step 1: Create Repository on GitHub

1. **Go to**: https://github.com/new
   - Or click the "+" icon → "New repository"

2. **Fill in details**:
   - **Repository name**: `dr-aparana-clinic`
   - **Description**: "Dr. Aparana Ghosh Clinic Website"
   - **Visibility**: Choose **Public** (required for free hosting)
   - **Important**: **DO NOT** check "Add a README file"
   - **DO NOT** add .gitignore or license

3. **Click "Create repository"**

### Step 2: Push Your Code

Now run these commands:

```bash
cd /Users/nidhish.agrawal/draparana

# Check if you're on master branch:
git branch

# If it says "master", rename to "main":
git branch -M main

# Add remote (if not already added):
git remote add origin https://github.com/nidhishagrawal/dr-aparana-clinic.git

# Or if already added, update it:
git remote set-url origin https://github.com/nidhishagrawal/dr-aparana-clinic.git

# Push your code:
git push -u origin main
```

### If You Get Authentication Error

If GitHub asks for authentication:

**Option 1: Use Personal Access Token**
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Name: "Vercel Deployment"
4. Select scopes: `repo` (full control)
5. Click "Generate token"
6. Copy the token
7. When pushing, use token as password:
   ```bash
   git push -u origin main
   # Username: nidhishagrawal
   # Password: [paste your token]
   ```

**Option 2: Use GitHub CLI**
```bash
# Install GitHub CLI (if not installed):
brew install gh

# Authenticate:
gh auth login

# Then push:
git push -u origin main
```

**Option 3: Use SSH (Recommended)**
```bash
# Generate SSH key (if you don't have one):
ssh-keygen -t ed25519 -C "your_email@example.com"

# Add to GitHub:
# 1. Copy public key:
cat ~/.ssh/id_ed25519.pub

# 2. Go to: https://github.com/settings/keys
# 3. Click "New SSH key"
# 4. Paste the key and save

# Change remote to SSH:
git remote set-url origin git@github.com:nidhishagrawal/dr-aparana-clinic.git

# Push:
git push -u origin main
```

### Verify It Worked

After pushing, you should see:
- ✅ "Enumerating objects..."
- ✅ "Writing objects..."
- ✅ "To https://github.com/..."

Then check: https://github.com/nidhishagrawal/dr-aparana-clinic

You should see all your files there!

---

## Next Step: Deploy on Vercel

Once your code is on GitHub:
1. Go to: https://vercel.com
2. Sign up with GitHub
3. Import your repository
4. Deploy!

See `QUICK_DEPLOY.md` for full deployment steps.

