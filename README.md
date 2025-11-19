# Kenzuu Portfolio

A modern, mobile‑first developer portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.  
This README is written for BEGINNERS – lots of plain‑English explanations so you can understand what each part does.

---

## 🌟 What This Project Gives You

| Feature | What it means |
|---------|--------------------------------------|
| Responsive layout | Looks good on phones, tablets, desktops without extra work |
| Dark / Light theme | User can switch; remembers preference |
| Projects page + filtering | Show your work, optionally filter by tag/tech |
| Dynamic project detail route | Each project can have its own page (`/work/your-project`) |
| Animations gallery (optional) | Showcase motion / UI experiments |
| Music page (optional) | Embed your own tracks with a custom audio player |
| Contact form (validation + spam protection) | Visitors can message you safely |
| SEO (metadata, sitemap, robots) | Search engines understand your site better |
| Accessibility basics | Keyboard navigation + skip link + focus styles |
| Performance optimizations | Lazy images, code splitting for speed |
| Testing setup (Jest + RTL) | You can write confidence‑giving tests |
| Rate limiting | Prevents bots from spamming your contact API |
| Easy deploy (Vercel) | Fast hosting with automatic updates on each push |

---

## 🧰 Tech Stack (What & Why)

| Tool | Why it’s here |
|------|---------------|
| Next.js 14 (App Router) | Modern React framework: routing + SSR/SSG + performance out of the box |
| TypeScript | Catches mistakes early (types = guard rails) |
| Tailwind CSS | Utility classes = fast styling without writing tons of CSS files |
| Framer Motion | Smooth, easy animations for React components |
| next-themes | Dark/light theme control (adds `class="dark"`) |
| Zod | Validates form data (ensures the user sends what you expect) |
| Jest + React Testing Library | Lets you test components / logic |
| Vercel | Super easy hosting for Next.js |

---

## 🚀 Quick Start (Local)

```bash
# 1. Clone (or download ZIP)
git clone https://github.com/kenzuu-codes/kenzuu-portfolio.git
cd kenzuu-portfolio

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
# Open: http://localhost:3000
```

If you see the home page without build errors – you’re good.

---

## 📁 Folder Structure (Simplified View)

```
src/
  app/               # Routes (each folder = URL path)
  components/        # Reusable UI + layout pieces
  hooks/             # Custom React hooks (logic helpers)
  lib/               # Data (projects, animations, tracks) + utilities
  styles/            # Global CSS (Tailwind base + variables)
  config/            # Centralized config (site name, metadata)
public/
  projects/          # Project images
  animations/        # GIFs / previews
  music/             # Audio files (if any)
```

You mostly edit: `lib/` (data), `components/` (UI), and `app/` (pages).

---

## 🧩 Personalize Your Identity (5–10 min)

Edit this file:

```ts
# src/config/site.ts
name        -> Your public name or brand
description -> Short pitch (1–2 sentences)
socials     -> GitHub, LinkedIn, etc.
email       -> Where contact form might send later
keywords    -> Relevant tech terms
```

Also update `src/lib/personal-info.ts` if it exists (the resume-style info file).

---

## 🗂 Add Your Projects (Most Important Part)

Edit `src/lib/projects.ts`:

```ts
{
  slug: "cool-app",             // URL slug -> /work/cool-app
  title: "Cool App",            // Display name
  description: "Short value-focused description (what it does + impact).",
  tags: ["Next.js", "TypeScript", "Tailwind"],
  repoUrl: "https://github.com/you/cool-app",
  liveUrl: "https://cool-app.vercel.app",
  coverImage: "/projects/cool-app.jpg"  // Put file in public/projects/
}
```

Guidelines:
- Add 3–6 strong projects (quality > quantity)
- Use consistent tag capitalization
- Image size suggestion: 800×450 (16:9), optimize with [TinyPNG](https://tinypng.com)

Visit: `http://localhost:3000/work` to see changes.

---

## 🎞 Optional: Animations & Music Content

Animations (`src/lib/animations.ts`):
```ts
{
  id: "loader-spinner",
  title: "CSS Loader Spinner",
  description: "Pure CSS rotating loader with subtle easing.",
  previewGif: "/animations/spinner.gif",
  technology: ["CSS", "Animation"]
}
```

Music (`src/lib/tracks.ts`):
```ts
{
  id: "track-1",
  title: "Ambient Intro",
  artist: "Your Name",
  duration: 180,
  src: "/music/ambient-intro.mp3",
  coverImage: "/music/cover.jpg"
}
```

If you *don’t* have these yet—delete or ignore those pages to simplify.

---

## 🌗 Theme & Styling

Dark mode is default. A theme toggle button switches themes using `next-themes`, which adds/changes a `class="dark"` at the root.  
To change colors: edit `tailwind.config.ts` under `theme.extend.colors.brand`.

---

## ✉ Contact Form (How It Works)

- Form is on `/contact`
- Validated with **Zod** (checks name/email/message lengths & format)
- Honeypot field (hidden) catches dumb bots
- Simple rate limiting in memory (5 requests / 10 minutes per IP)
- Currently logs message on server – you can later connect **SendGrid**, **Resend**, etc.

Troubleshooting:
- Getting 422? → Invalid input (check lengths / email)
- Getting 429? → You hit the rate limit

---

## 🧪 Scripts (You Will Use These)

```bash
npm run dev         # Start dev server
npm run build       # Create production build
npm run start       # Run production build locally
npm run lint        # Check code style / potential issues
npm run test        # Run tests (if configured)
npm run type-check  # Run TypeScript without building
```

---

## ⚙ Environment Variables

Create a file: `.env.local` (this is ignored by Git)

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
CONTACT_EMAIL=you@example.com
# Optional future:
# GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
# SENDGRID_API_KEY=...
```

Restart the dev server after editing.

---

## 🛫 Deploy (Vercel = Easiest)

1. Commit & push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial portfolio setup"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/kenzuu-portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) → “New Project” → Import repo → Deploy.
3. Set `NEXT_PUBLIC_SITE_URL` in Vercel Project Settings → Environment Variables.

Test your live site (mobile + desktop) after deploy.

---

## 🔍 SEO Basics (Don’t Skip)

| Item | What to do |
|------|-------------|
| Title & Description | Edit in `layout.tsx` and/or `siteConfig` |
| Open Graph image | Add `/public/og.png` (1200×630) |
| Sitemap | Provided at `/sitemap.xml` (verify) |
| Robots | Check `/robots.txt` correct |
| Alt text | Real descriptions OR empty if decorative |
| Headings | One `<h1>` per page, logical order |

Good meta description length: 150–160 characters.

---

## ♿ Accessibility Quick Check

- Can you TAB through everything?
- Skip link appears on first TAB? (Should jump to main content)
- All interactive elements have visible focus?
- Color contrast readable (especially in dark mode)?
- Reduced motion (OS setting) → heavy animations calm down?

Use Chrome Lighthouse “Accessibility” or axe extension for automated hints.

---

## ⚡ Performance Tips (Tackle When Ready)

| Task | Benefit |
|------|---------|
| Use `next/image` for all non-icon images | Automatic lazy loading & resizing |
| Dynamic `import()` large optional components | Smaller first load |
| Compress images | Faster loading on mobile |
| Remove unused animation code | Reduces bundle size |
| Keep dependencies minimal | Less JS shipped |

Run:
```bash
npm run build
npm run start
# Then open Lighthouse and test production build
```

---

## 🧪 Testing (Basic Idea)

If included:
- `__tests__/ProjectCard.test.tsx` ensures the card renders a title & tags.
- Add more tests as you learn—start with *one* component.

Run:
```bash
npm run test
```

If you’re new: focus on shipping the site; tests can come later.

---

## 🧹 Maintenance (Do Monthly)

| Task | Why |
|------|-----|
| Add any new project | Keeps portfolio fresh |
| Update outdated images | Shows recency |
| Upgrade dependencies | Security + performance |
| Re‑run Lighthouse | Catch regressions |
| Click every link | Avoid broken navigation |
| Scan for typos | Professional polish |

---

## 🧾 Launch Checklist (Minimum)

| Item | Done? |
|------|-------|
| 3–6 real projects (with images) | ☐ |
| About section written (no placeholder text) | ☐ |
| Contact form works in production | ☐ |
| Mobile nav works | ☐ |
| Theme toggle persists | ☐ |
| Metadata & favicon updated | ☐ |
| Sitemap & robots accessible | ☐ |
| No console errors | ☐ |
| Lighthouse A11y ≥ 90 | ☐ |

Ship when all above are ✅ – polish can come later.

---

## 🛣 Suggested Roadmap (After Launch)

- Dynamic Open Graph image generation (`/api/og`)
- Analytics (Vercel, Plausible, or GA4)
- Add blog or “Notes” section
- PWA (manifest + service worker)
- More motion experiments gallery
- More tests (audio player, filters)
- i18n (multi-language) if needed

---

## 🧠 Writing Great Project Descriptions (Formula)

```
[What it is] + [Tech used] + [Key features] + [Result / impact]
```

Example:  
> “E‑commerce platform built with Next.js & Stripe. Features secure auth, cart persistence, and an admin dashboard. Reduced checkout friction and increased conversion by 40%.”

---

## ❓ Common “Why Isn’t X Working?” Answers

| Problem | Likely Fix |
|---------|------------|
| Image broken | Path must start with `/` and file in `public/` |
| Styles not applying | Dev server cached → restart / save file |
| Dark mode flashes | Ensure ThemeProvider wraps layout & `suppressHydrationWarning` in `<html>` |
| Contact form 422 | Validation failed – check field lengths |
| Rate limit hit | Wait ~10 minutes or restart server (dev) |

---

## 📜 License

MIT © Kenzuu (You can modify or make private if you prefer)

---

## 🙋 Need Help Later?

Open an issue or ask for:
- “Explain component X”
- “Add OG image route”
- “Add security headers middleware”

Happy building – and remember: **Launch first, perfect later.** 🚀