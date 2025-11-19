# This file contains instructions for replacing assets with your own content

## Projects Directory (/public/projects/)
Add your project screenshots here:
- Format: JPG, PNG, or WebP
- Recommended size: 800x450px (16:9 aspect ratio)
- File naming: use kebab-case matching your project slugs
- Example: ecommerce-platform.jpg, portfolio-website.png

## Animations Directory (/public/animations/)
Add your animation GIFs here:
- Format: GIF (optimized for web)
- Max size: 2MB per file
- Recommended dimensions: 480x270px
- Frame rate: 15fps for smooth playback
- Duration: 2-5 seconds for looping

Tools for creating animation GIFs:
- Screen recording: OBS Studio, QuickTime (Mac), Windows Game Bar
- GIF optimization: ezgif.com, gifcompressor.com
- Video to GIF: ffmpeg, Adobe Media Encoder

## Music Directory (/public/music/)
Add your audio files here:
- Audio format: MP3 (best compatibility) or AAC
- Quality: 128-192 kbps
- Max size: 10MB per track
- Album covers: JPG/PNG, 400x400px minimum

Audio optimization:
- Audacity (free): Export > MP3 > 128-192 kbps
- Online converters: audio.online-convert.com
- Command line: ffmpeg -i input.wav -b:a 128k output.mp3

## Important Notes:
1. Only use content you own or have permission to use
2. Optimize file sizes for web performance
3. Use descriptive filenames (no spaces, use hyphens)
4. Test loading times on slower connections
5. Provide fallback images for better UX