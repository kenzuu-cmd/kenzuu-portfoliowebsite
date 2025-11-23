# Creations Assets Guide

This document describes the asset structure and naming conventions for the Creations section.

## Directory Structure

```
/public/
  /assets/
    /creations/
      /animations/       # Animation previews (GIFs, SVGs, MP4s)
      /arts/            # Digital art, illustrations, paintings
      /graphic/         # Graphic design work (posters, brochures, branding)
      /other/           # Experimental/placeholder content
```

## Asset Organization by Category

### Animations (`/public/assets/creations/animations/`)
- **Existing assets** (now located in creations folder):
  - `character-morphing.svg` - Morphing character faces animation
  - `music-visualizer.svg` - Particle music visualizer
  - `ui-transitions.svg` - Fluid UI transitions
  - `wave-simulation.svg` - Procedural wave simulation

### Arts (`/public/assets/creations/arts/`)
- **Placeholder assets** (to be added):
  - `portrait-placeholder.jpg` - Generative portrait series thumbnail (400x225px recommended)
  - `abstract-placeholder.jpg` - Abstract geometry thumbnail (400x225px recommended)

### Graphic Design (`/public/assets/creations/graphic/`)
- **Placeholder assets** (to be added):
  - `poster-placeholder.jpg` - Neon dreams poster series thumbnail (400x225px recommended)
  - `brochure-placeholder.jpg` - Modern tech brochure thumbnail (400x225px recommended)

### Other (`/public/assets/creations/other/`)
- **Placeholder assets** (to be added):
  - `placeholder.png` - Generic placeholder for experimental work (400x225px recommended)

## Asset Specifications

### Recommended Dimensions
- **Thumbnails**: 400x225px (16:9 aspect ratio)
- **Full previews**: 1200x675px (16:9 aspect ratio)
- **File formats**: 
  - Static: `.jpg` (photos/realistic), `.png` (transparency needed)
  - Animated: `.gif` (simple), `.mp4` (complex), `.svg` (vector animations)

### Naming Conventions
- Use **kebab-case** for all filenames
- Include descriptive names: `project-name-preview.jpg`
- For variants: `project-name-thumb.jpg`, `project-name-full.jpg`

### File Size Guidelines
- **Thumbnails**: < 100KB (optimize for web)
- **Preview GIFs**: < 2MB (consider using MP4 for larger animations)
- **Vector assets**: Optimize SVGs to remove unnecessary data

## Adding New Creations

When adding new creation items:

1. **Add the asset file** to the appropriate category folder
2. **Update the data file** at `src/data/creations.ts`
3. **Add the item** to the correct array (ANIMATIONS, ARTS, GRAPHIC, or OTHER)
4. **Set the thumbnail path** to match your asset location

Example:
```typescript
{
  id: 'my-new-art',
  title: 'My New Art Piece',
  description: 'Description here...',
  category: 'arts',
  thumbnail: '/assets/creations/arts/my-new-art.jpg',
}
```

## Current Asset Status

### ✅ Ready (Existing)
- All animation assets are already in place at `/public/assets/creations/animations/`
- These are SVG placeholders that can be replaced with actual previews

### ⚠️ Needs Assets (Placeholders)
- Arts category: 2 placeholder images needed
- Graphic Design category: 2 placeholder images needed  
- Other category: 1 placeholder image needed

### Temporary Fallback
Until actual assets are added, the existing paths will attempt to load. You can:
1. Create simple placeholder images using Figma/Photoshop with text overlays
2. Use free stock images from Unsplash/Pexels as temporary previews
3. Generate placeholder images using tools like https://placeholder.com/

## Image Optimization Tips

1. **Compress images** before adding to repo (use tinypng.com or ImageOptim)
2. **Use WebP format** for better compression (with JPG/PNG fallbacks)
3. **Lazy load** images (already implemented in CreationGallery component)
4. **Provide responsive sizes** using Next.js Image `sizes` prop

## Updating Existing Assets

To update an existing creation's thumbnail:
1. Replace the file in the appropriate folder
2. Keep the same filename, or update the `thumbnail` path in `src/data/creations.ts`
3. Clear Next.js cache if needed: `npm run dev` (restart)

---

**Last updated**: Implementation of Creations feature (replacing Animations)
