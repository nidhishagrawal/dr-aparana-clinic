# 🚀 How to Run Dr. Aparana Website Locally

## Quick Start (3 Steps)

### Step 1: Install Dependencies
```bash
cd /Users/nidhish.agrawal/draparana
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Open your browser and go to:
```
http://localhost:3000
```

**That's it!** Your website is now running locally! 🎉

---

## 📋 Detailed Instructions

### Prerequisites
- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)

### Check if Node.js is Installed
```bash
node --version
npm --version
```

If not installed, download from: https://nodejs.org

---

## 🛠️ Step-by-Step Setup

### 1. Navigate to Project Folder
```bash
cd /Users/nidhish.agrawal/draparana
```

### 2. Install Dependencies
```bash
npm install
```

This will install:
- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React (icons)
- And all other dependencies

**Time**: 1-2 minutes

### 3. Start Development Server
```bash
npm run dev
```

You should see:
```
▲ Next.js 16.0.10
- Local:        http://localhost:3000
- Ready in 2.5s
```

### 4. Open Website
Open your browser and visit:
```
http://localhost:3000
```

---

## 🎯 Available Commands

### Development
```bash
npm run dev
```
- Starts development server
- Hot reload enabled (changes appear instantly)
- Runs on http://localhost:3000

### Build for Production
```bash
npm run build
```
- Creates optimized production build
- Checks for errors
- Optimizes images and code

### Start Production Server
```bash
npm run build
npm run start
```
- Runs production build locally
- Faster than dev mode
- Use for testing production build

### Lint Code
```bash
npm run lint
```
- Checks code for errors
- Fixes auto-fixable issues

---

## 🔧 Troubleshooting

### Port 3000 Already in Use
If you see: `Port 3000 is already in use`

**Solution 1**: Use a different port
```bash
npm run dev -- -p 3001
```
Then open: `http://localhost:3001`

**Solution 2**: Stop the process using port 3000
```bash
# Find process using port 3000
lsof -ti:3000

# Kill the process (replace PID with actual process ID)
kill -9 PID
```

### Module Not Found Errors
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
# Check TypeScript version
npx tsc --version

# Rebuild TypeScript
npm run build
```

### Tailwind CSS Not Working
```bash
# Check if tailwind.config.js exists
ls tailwind.config.js

# Rebuild
npm run dev
```

---

## 📱 Testing Checklist

After running locally, test:

- [ ] Homepage loads correctly
- [ ] Navigation menu works
- [ ] All pages accessible:
  - [ ] Home (/)
  - [ ] About (/about)
  - [ ] Services (/services)
  - [ ] Contact (/contact)
  - [ ] Testimonials (/testimonials)
  - [ ] Treatments (/treatments)
  - [ ] Blog (/blog)
- [ ] Mobile menu works (resize browser)
- [ ] Call button works (tel: link)
- [ ] WhatsApp button works
- [ ] Footer links work
- [ ] Images load correctly
- [ ] Responsive design works

---

## 🌐 Accessing from Other Devices

### On Same Network

1. Find your local IP address:
```bash
# Mac/Linux
ifconfig | grep "inet " | grep -v 127.0.0.1

# Windows
ipconfig
```

2. Start Next.js with hostname:
```bash
npm run dev -- -H 0.0.0.0
```

3. Access from other device:
```
http://YOUR_IP_ADDRESS:3000
```

Example: `http://192.168.1.100:3000`

---

## 🎨 Development Tips

### Hot Reload
- Changes to files automatically refresh the browser
- No need to restart server
- Fast development workflow

### File Structure
```
draparana/
├── app/              # All pages and components
│   ├── page.tsx      # Homepage
│   ├── about/        # About page
│   ├── contact/      # Contact page
│   └── components/   # Reusable components
├── public/           # Static files (images, etc.)
└── package.json      # Dependencies
```

### Making Changes
1. Edit any `.tsx` file in `app/` folder
2. Save the file
3. Browser automatically refreshes
4. See changes instantly!

---

## 🚀 Production Build

To test production build locally:

```bash
# Build the project
npm run build

# Start production server
npm run start
```

Then visit: `http://localhost:3000`

**Note**: Production build is optimized and faster, but doesn't have hot reload.

---

## 📦 What Gets Installed

When you run `npm install`, these packages are installed:

- **next** - Next.js framework
- **react** - React library
- **react-dom** - React DOM rendering
- **typescript** - TypeScript compiler
- **tailwindcss** - CSS framework
- **lucide-react** - Icon library
- **autoprefixer** - CSS post-processor
- **postcss** - CSS transformer
- **eslint** - Code linter

---

## ✅ Quick Reference

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Check for errors
npm run lint
```

---

## 🎉 You're Ready!

Your Next.js website is now running locally at:
**http://localhost:3000**

Make changes to any file and see them instantly!

---

## 💡 Next Steps

1. **Customize Content**: Edit pages in `app/` folder
2. **Update Contact Info**: Edit `app/components/Footer.tsx` and `app/components/Navbar.tsx`
3. **Add Images**: Place images in `public/` folder
4. **Test Everything**: Go through the testing checklist
5. **Deploy**: When ready, deploy to Vercel, Netlify, or your hosting

---

## 🆘 Still Having Issues?

1. **Check Node.js version**: Should be 18+
   ```bash
   node --version
   ```

2. **Clear cache and reinstall**:
   ```bash
   rm -rf node_modules .next package-lock.json
   npm install
   npm run dev
   ```

3. **Check for errors**:
   ```bash
   npm run lint
   ```

4. **Read error messages**: Next.js provides helpful error messages in terminal

---

**Happy Coding!** 🚀

