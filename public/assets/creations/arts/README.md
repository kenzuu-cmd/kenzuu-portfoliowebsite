# Arts Assets

This directory contains digital art, illustrations, and paintings for the Creations section.

## Required Assets

### Current Placeholders Needed:
1. **portrait-placeholder.jpg** (400x225px)
   - Generative portrait series
   - Can be temporary stock image or generated placeholder

2. **abstract-placeholder.jpg** (400x225px)
   - Abstract geometry artwork
   - Can be temporary stock image or generated placeholder

## Adding New Art Assets

1. Export your artwork at 400x225px (16:9 aspect ratio) for thumbnails
2. Use descriptive kebab-case filenames: `my-artwork-name.jpg`
3. Update `src/data/creations.ts` with the new entry in the `ARTS` array

## Recommended Formats
- **JPG**: For photographic or realistic art (smaller file size)
- **PNG**: For art with transparency or sharp edges
- **WebP**: For modern browsers (better compression)

## Optimization
- Compress images before adding (use tinypng.com)
- Target < 100KB per thumbnail
- Consider using Next.js Image optimization (automatic)
