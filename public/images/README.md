# Images Folder

## Doctor Photo

Please add Dr. Aparna Ghosh's photo here:

**File name**: `dr-aparana-ghosh.jpg` (or `.png`)

**Location**: `/public/images/dr-aparana-ghosh.jpg`

**Recommended specifications**:
- Format: JPG or PNG
- Size: 800x800px to 1200x1200px (square format works best)
- Quality: High resolution for web (optimized)
- File size: Under 500KB (use image compression if needed)

## How to Add the Photo

1. Save the doctor's photo as `dr-aparana-ghosh.jpg`
2. Place it in this folder: `/public/images/`
3. The website will automatically use it on:
   - Homepage hero section
   - About Doctor page

## Image Optimization Tips

- Use tools like TinyPNG or ImageOptim to compress
- Ensure good lighting and professional appearance
- Square or portrait orientation works best
- Remove background if needed for better integration

## Alternative: Using External Image URL

If you prefer to host the image externally (e.g., Cloudinary), update the Image src in:
- `app/page.tsx` (line ~42)
- `app/about/page.tsx` (line ~24)

Change from: `/images/dr-aparana-ghosh.jpg`
To: `https://your-image-url.com/dr-aparana-ghosh.jpg`

Don't forget to update `next.config.js` to allow the external domain.

