# How to Add Treatment Videos

## Overview
The website now includes a dedicated **Videos** page (`/videos`) where you can showcase treatment videos. There's also a preview section on the homepage.

## Video Page Location
- **Full Videos Page**: `/app/videos/page.tsx`
- **Homepage Preview**: `/app/page.tsx` (Treatment Videos Preview section)

## How to Add Videos

### Step 1: Open the Videos Page
Edit the file: `/app/videos/page.tsx`

### Step 2: Add Your Video to the Array
Find the `treatmentVideos` array (around line 20) and add your video details:

```typescript
{
  id: 4, // Unique ID
  title: 'Your Video Title',
  description: 'Description of the video content',
  thumbnail: '/images/videos/thumbnail.jpg', // Optional thumbnail image
  videoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID', // Your video URL
  videoType: 'youtube', // Options: 'youtube', 'vimeo', or 'self-hosted'
  category: 'Surgery', // Category: Surgery, Obstetrics, Procedure, etc.
  duration: '5:30', // Optional: Video duration
},
```

### Step 3: Video URL Formats

#### YouTube Videos
- **Format**: `https://www.youtube.com/watch?v=VIDEO_ID`
- **Example**: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- **videoType**: `'youtube'`

#### Vimeo Videos
- **Format**: `https://vimeo.com/VIDEO_ID`
- **Example**: `https://vimeo.com/123456789`
- **videoType**: `'vimeo'`

#### Self-Hosted Videos
- **Format**: `/videos/your-video.mp4` (place video in `/public/videos/` folder)
- **Example**: `/videos/treatment-demo.mp4`
- **videoType**: `'self-hosted'`

### Step 4: Update Homepage Preview (Optional)
If you want to update the homepage preview section, edit `/app/page.tsx` and find the "Treatment Videos Preview" section (around line 640). Update the video preview cards to match your new videos.

## Video Categories
Use these categories for consistency:
- **Surgery** - Surgical procedures
- **Obstetrics** - Pregnancy and delivery related
- **Procedure** - Non-surgical procedures
- **Treatment** - General treatments
- **Consultation** - Consultation videos

## Best Practices

1. **Video Quality**: Use high-quality videos (1080p or higher)
2. **Thumbnails**: Add custom thumbnails for better visual appeal
3. **Descriptions**: Write clear, informative descriptions
4. **Privacy**: Ensure you have patient consent before publishing videos
5. **Duration**: Keep videos concise and focused (5-10 minutes ideal)

## Example: Adding a YouTube Video

```typescript
{
  id: 5,
  title: 'Laser Hair Reduction Treatment',
  description: 'Complete laser hair reduction procedure performed by Dr. Aparna Ghosh',
  thumbnail: '/images/videos/laser-treatment.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=abc123xyz',
  videoType: 'youtube',
  category: 'Treatment',
  duration: '6:45',
},
```

## Example: Adding a Self-Hosted Video

1. Place your video file in `/public/videos/` folder
2. Add to the array:

```typescript
{
  id: 6,
  title: 'HIFU Treatment Procedure',
  description: 'HIFU treatment for urinary incontinence',
  thumbnail: '/images/videos/hifu-treatment.jpg',
  videoUrl: '/videos/hifu-procedure.mp4',
  videoType: 'self-hosted',
  category: 'Procedure',
  duration: '4:20',
},
```

## Testing
After adding videos:
1. Save the file
2. The dev server will auto-reload
3. Visit `http://localhost:3000/videos` to see your videos
4. Check the homepage preview section

## Notes
- Videos without URLs will show a placeholder
- YouTube and Vimeo videos are embedded automatically
- Self-hosted videos use HTML5 video player
- Ensure video files are optimized for web (MP4 format recommended)

