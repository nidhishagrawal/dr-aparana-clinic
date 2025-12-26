# 📸 How to Add Dr. Aparana Ghosh Photo

## Quick Steps

### Step 1: Get the Photo
- You have the photo of Dr. Aparana Ghosh (the one showing her in white lab coat)
- Make sure it's a good quality image

### Step 2: Save the Photo
1. **Right-click** on the photo (or save from your device)
2. **Save as**: `dr-aparana-ghosh.jpg`
3. **Location**: Save it to your Downloads or Desktop first

### Step 3: Copy to Project Folder
**Option A: Using Finder (Mac)**
1. Open Finder
2. Navigate to: `/Users/nidhish.agrawal/draparana/public/images/`
3. Drag and drop the photo file there
4. Make sure it's named: `dr-aparana-ghosh.jpg`

**Option B: Using Terminal**
```bash
# Copy photo from Downloads to project
cp ~/Downloads/dr-aparana-ghosh.jpg /Users/nidhish.agrawal/draparana/public/images/

# Or if photo is on Desktop
cp ~/Desktop/dr-aparana-ghosh.jpg /Users/nidhish.agrawal/draparana/public/images/
```

**Option C: Using VS Code/Cursor**
1. Open the folder: `draparana/public/images/`
2. Right-click in the folder
3. Select "Upload" or drag the photo file
4. Name it: `dr-aparana-ghosh.jpg`

### Step 4: Verify
The file should be at:
```
/Users/nidhish.agrawal/draparana/public/images/dr-aparana-ghosh.jpg
```

### Step 5: Refresh Browser
- Go to: http://localhost:3000
- Press `Cmd + R` (Mac) or `Ctrl + R` (Windows) to refresh
- The photo should now appear!

---

## Photo Requirements

### Best Specifications:
- **Format**: JPG or PNG
- **Size**: 800x800px to 1200x1200px (square format preferred)
- **File Size**: Under 500KB (compress if larger)
- **Quality**: High resolution, clear and professional
- **Orientation**: Square or portrait works best

### Image Optimization (Optional)
If the file is too large, compress it:
- **Online**: Use TinyPNG.com or ImageOptim
- **Mac**: Use ImageOptim app (free)
- **Windows**: Use FileOptimizer

---

## Alternative: Using Image URL

If you want to host the image externally (e.g., Cloudinary, ImgBB):

1. Upload photo to image hosting service
2. Get the image URL
3. Update the code:

**In `app/page.tsx` and `app/about/page.tsx`:**
Change:
```tsx
src="/images/dr-aparana-ghosh.jpg"
```
To:
```tsx
src="https://your-image-url.com/dr-aparana-ghosh.jpg"
```

4. Update `next.config.js` to allow the domain (if needed)

---

## Current Status

✅ Code is ready - photo will display automatically once added
✅ Fallback message shows if photo is missing
✅ Optimized for web (Next.js Image component)
✅ Responsive on all devices

---

## Troubleshooting

### Photo Not Showing?
1. **Check file name**: Must be exactly `dr-aparana-ghosh.jpg`
2. **Check location**: Must be in `/public/images/` folder
3. **Check file extension**: `.jpg` or `.png` (case-sensitive)
4. **Clear browser cache**: `Cmd + Shift + R` (hard refresh)
5. **Restart dev server**: Stop (`Ctrl + C`) and run `npm run dev` again

### File Path Issues?
Make sure the folder structure is:
```
draparana/
├── public/
│   └── images/
│       └── dr-aparana-ghosh.jpg  ← Photo goes here
```

### Still Not Working?
Check browser console (F12) for errors, or let me know!

---

## ✅ Once Added

The photo will appear on:
- ✅ Homepage hero section (large, prominent)
- ✅ About Doctor page (professional display)

Both pages are already configured and ready!

---

**Need help?** Just let me know if you need assistance with any step!

