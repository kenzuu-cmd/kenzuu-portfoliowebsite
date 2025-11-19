# 📝 Portfolio Content Editing Guide

**A beginner-friendly guide to updating your portfolio website**

This guide will help you quickly edit text, add projects, update images, and modify UI elements—even if you're not super comfortable with React or Next.js.

---

## 📁 Project Structure Overview

Here's what each main folder does:

### `/src/app/` — Main Website Pages
- **`page.tsx`** — Homepage
- **`work/page.tsx`** — Work/Projects listing page
- **`work/[slug]/page.tsx`** — Individual project detail pages (dynamic)
- **`about/page.tsx`** — About page
- **`contact/page.tsx`** — Contact page
- **`layout.tsx`** — Main layout wrapper (includes header/footer for all pages)

### `/src/components/` — Reusable UI Components
- **`Header.tsx`** — Top navigation bar
- **`Footer.tsx`** — Bottom footer with links
- **`ProjectCard.tsx`** — Individual project cards shown on Work page
- **`ThemeToggle.tsx`** — Dark/light mode switcher
- **`ui/`** — Small reusable pieces like buttons, tags, etc.

### `/src/lib/` — Data and Utilities
- **`projects.ts`** — ⭐ **PROJECT DATA LIVES HERE** ⭐
  - All project information (title, description, images, links) is stored in this file
  - This is where you'll add new projects or edit existing ones

### `/public/` — Static Assets
- **`projects/`** — Project images and screenshots
  - Each project has its own folder (e.g., `The Weeb Den E-commerce/`)
  - Put your project images here
- **Other files** — Icons, favicons, SVGs

---

## 🎨 How to Add or Edit Projects

### Step 1: Add Your Project Images

1. Go to `/public/projects/`
2. Create a new folder with your project name (e.g., `My New Project/`)
3. Add your project images inside:
   - `cover.png` — Main project image
   - `screenshot1.png`, `screenshot2.png`, etc. — Additional images

**Example:**
```
/public/projects/
  └── My New Project/
      ├── cover.png
      ├── screenshot1.png
      └── screenshot2.png
```

### Step 2: Add Project Data

1. Open **`src/lib/projects.ts`**
2. Find the `projects` array (around line 15)
3. Add a new project object at the top of the array:

```typescript
{
  slug: 'my-new-project',  // Used in URL: /work/my-new-project
  title: 'My New Project',  // Displays as card title
  description: 'A brief description that shows on the project card. Keep it 1-2 sentences.',
  fullDescription: 'A longer, detailed description that appears on the project detail page. This can be multiple paragraphs explaining the project goals, features, design decisions, and impact.',
  tags: ['React', 'UI/UX', 'Web Design'],  // Technology tags
  tools: ['Figma', 'React', 'Tailwind CSS'],  // Tools used
  coverImage: '/projects/My New Project/cover.png',  // Main image
  images: [
    '/projects/My New Project/cover.png',
    '/projects/My New Project/screenshot1.png',
    '/projects/My New Project/screenshot2.png',
  ],
  repoUrl: 'https://github.com/yourusername/project-repo',  // Optional
  liveUrl: 'https://yourproject.com',  // Optional
  figmaEmbed: 'https://www.figma.com/embed?...',  // Optional - for Figma prototypes
},
```

**Important Notes:**
- The **slug** must be unique and URL-friendly (lowercase, hyphens only)
- Add new projects at the **top** of the array to show them first
- Image paths must match your folder structure exactly
- `repoUrl`, `liveUrl`, and `figmaEmbed` are optional—leave them out if not needed

### Example: Complete Project Entry

```typescript
{
  slug: 'the-weeb-den-ecommerce',
  title: 'The Weeb Den E-commerce',
  description: 'A modern e-commerce platform designed for anime merchandise and collectibles. Features an intuitive shopping experience with product browsing, cart management, and a clean, responsive interface.',
  fullDescription: 'The Weeb Den is a full-featured e-commerce website designed for anime fans...',
  tags: ['E-commerce', 'React', 'Next.js', 'TypeScript'],
  tools: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  coverImage: '/projects/The Weeb Den E-commerce/weebden1.png',
  images: [
    '/projects/The Weeb Den E-commerce/weebden1.png',
    '/projects/The Weeb Den E-commerce/weebden2.png',
    '/projects/The Weeb Den E-commerce/weebden3.png',
  ],
  repoUrl: 'https://github.com/kenzuu-codes/kenzuu_theweebdenshop',
  liveUrl: 'https://kenzuu-codes.github.io/kenzuu_theweebdenshop/',
},
```

---

## ✏️ How to Edit Existing Projects

### Update Project Text

1. Open **`src/lib/projects.ts`**
2. Find your project by searching for its title
3. Update these fields:
   - `title` — Project name
   - `description` — Short description (shows on cards)
   - `fullDescription` — Long description (shows on detail page)
   - `tags` — Technology/category tags
   - `tools` — Specific tools used

### Update Project Images

1. Replace image files in `/public/projects/Your Project Name/`
2. Keep the same filenames, OR
3. Update the paths in `projects.ts`:
   ```typescript
   coverImage: '/projects/Your Project/new-image.png',
   images: [
     '/projects/Your Project/new-image.png',
     '/projects/Your Project/another-image.png',
   ],
   ```

### Update Project Links

```typescript
repoUrl: 'https://github.com/new-username/new-repo',
liveUrl: 'https://new-live-site.com',
```

---

## 📄 How to Edit Project Detail Pages

Project detail pages are **automatically generated** from the data in `projects.ts`.

The layout is defined in **`src/app/work/[slug]/page.tsx`**.

### What Shows on Detail Pages:
1. **Hero Section** — Title, description, tags, CTA buttons
2. **Cover Image** — Main project image with browser mockup
3. **About Section** — Full project description
4. **Tools & Technologies** — Tools used (badges)
5. **Interactive Prototype** — Figma embed (if provided)
6. **Project Gallery** — Additional screenshots

### To Customize the Layout:

Open `src/app/work/[slug]/page.tsx` and modify the JSX structure. For example:

```tsx
{/* Add a new section */}
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  <h2 className="text-4xl font-bold mb-6">Project Challenges</h2>
  <p>Describe challenges here...</p>
</motion.section>
```

---

## 🎨 How to Change Colors & Theme

### Update Brand Colors

Open **`tailwind.config.js`** and find the `colors` section:

```javascript
colors: {
  brand: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... more shades
    600: '#6366f1',  // Main brand color
    700: '#4f46e5',
    // ...
  },
}
```

Change the hex values to your preferred colors. The numbers (50-900) represent lightness—50 is lightest, 900 is darkest.

### Update Global Styles

Open **`src/app/globals.css`** to modify:
- Font styles
- Background colors
- Animations
- Custom CSS classes

Example:
```css
body {
  background-color: white;
  color: black;
}

.dark body {
  background-color: #0a0a0a;
  color: white;
}
```

---

## 🧭 How to Update Navigation & Footer

### Update Navigation Links

Open **`src/components/Header.tsx`**:

```tsx
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '/work' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' },  // Add new link
]
```

### Update Footer Content

Open **`src/components/Footer.tsx`** and edit:

```tsx
<p className="text-sm">
  © 2024 Your Name. All rights reserved.
</p>

{/* Social Links */}
<a href="https://github.com/yourusername" target="_blank">
  <Github className="w-5 h-5" />
</a>
```

---

## 🖼️ How to Add Images

### For Project Images:
1. Save images in `/public/projects/Project Name/`
2. Use this format in `projects.ts`:
   ```typescript
   coverImage: '/projects/Project Name/image.png',
   ```

### For Other Images (icons, backgrounds):
1. Save in `/public/` (or a subfolder like `/public/images/`)
2. Reference with absolute paths:
   ```tsx
   <Image src="/images/hero-background.jpg" ... />
   ```

### Image Optimization Tips:
- Use `.webp` or `.jpg` for photos (better compression)
- Use `.png` for graphics with transparency
- Keep file sizes under 500KB when possible
- Resize images to the size they'll display (don't upload 4K images if they show at 800px)

---

## 🏠 How to Edit Homepage Content

Open **`src/app/page.tsx`**:

### Edit Hero Section:
```tsx
<h1>
  Hi, I'm Your Name 👋
</h1>
<p>
  Update your intro text here
</p>
```

### Edit Featured Projects Section:
This automatically pulls from the first few projects in `projects.ts`.

---

## 📧 How to Edit Contact Page

Open **`src/app/contact/page.tsx`**:

### Update Contact Info:
```tsx
<p>
  Feel free to reach out at: <a href="mailto:your@email.com">your@email.com</a>
</p>
```

### Update Form Settings:
If you're using a form service (like Formspree or Netlify Forms), update the form `action` attribute:

```tsx
<form action="https://formspree.io/f/your-form-id" method="POST">
```

---

## 🚀 Development Workflow

### Starting the Dev Server:
```bash
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Making Changes:
1. Edit files in VS Code
2. Save the file (Ctrl+S / Cmd+S)
3. Your browser will **auto-refresh** to show changes
4. No need to restart the server!

### Building for Production:
```bash
npm run build
npm start
```

---

## 🐛 Common Issues & Fixes

### Issue: Project Card Doesn't Show
**Solution:** Check these:
- Is the project added in `projects.ts`?
- Is the `slug` unique?
- Are image paths correct? (check spelling and capitalization)

### Issue: Image Not Loading
**Solution:**
- Verify the file exists in `/public/projects/`
- Check the path in `projects.ts` matches exactly
- Restart dev server: Stop it (Ctrl+C) and run `npm run dev` again

### Issue: Changes Not Showing
**Solution:**
- Hard refresh your browser (Ctrl+Shift+R / Cmd+Shift+R)
- Clear browser cache
- Restart the dev server

### Issue: Site Won't Build
**Solution:**
- Check the terminal for error messages
- Look for typos in `projects.ts` (missing commas, quotes, brackets)
- Make sure all image paths are valid

---

## 📚 Quick Reference

### Project Data Fields:
| Field | Required? | Description |
|-------|-----------|-------------|
| `slug` | ✅ Yes | URL-friendly ID (e.g., `my-project`) |
| `title` | ✅ Yes | Project name |
| `description` | ✅ Yes | Short description (1-2 sentences) |
| `fullDescription` | ✅ Yes | Long description (detail page) |
| `tags` | ✅ Yes | Array of tags (e.g., `['React', 'UI/UX']`) |
| `tools` | ✅ Yes | Array of tools used |
| `coverImage` | ✅ Yes | Main image path |
| `images` | ✅ Yes | Array of image paths |
| `repoUrl` | ❌ Optional | GitHub repository link |
| `liveUrl` | ❌ Optional | Live website link |
| `figmaEmbed` | ❌ Optional | Figma prototype embed URL |

### File Locations Cheat Sheet:
- **Add/Edit Projects** → `src/lib/projects.ts`
- **Project Images** → `public/projects/`
- **Homepage** → `src/app/page.tsx`
- **Work Page** → `src/app/work/page.tsx`
- **About Page** → `src/app/about/page.tsx`
- **Contact Page** → `src/app/contact/page.tsx`
- **Navigation** → `src/components/Header.tsx`
- **Footer** → `src/components/Footer.tsx`
- **Colors/Theme** → `tailwind.config.js` + `src/app/globals.css`

---

## 💡 Tips for Success

1. **Always save your work** — VS Code auto-saves, but double-check!
2. **Test on multiple screen sizes** — Use browser dev tools to check mobile view
3. **Keep backups** — Use Git to commit changes regularly
4. **Check the browser console** — Press F12 to see errors
5. **Start small** — Edit one thing at a time and test
6. **Use consistent naming** — Keep image names descriptive (e.g., `portfolio-hero.jpg` not `img1.jpg`)

---

## 🆘 Need Help?

### Where to Look:
- **React Docs**: https://react.dev
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **Framer Motion Docs** (for animations): https://www.framer.com/motion/

### Common Commands:
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Check for code issues
```

---

**Made with ❤️ using Next.js 14 + React + TypeScript + Tailwind CSS**

Happy editing! 🎨✨
