<div align="center">

# 🚚 Abdusodiqov Abdulaziz — Portfolio

### Professional Delivery Driver · Business Card Website

<img src="public/largo-logo.png" alt="" width="100px" height="100px">

A premium, production-ready personal portfolio website for **Abdusodiqov Abdulaziz**, a professional delivery driver working with **Largo** company. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion — fully in the Uzbek language.

<br />

[![Next.js](https://img.shields.io/badge/Next.js-15.5.19-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18.17.0-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)
[![ESLint](https://img.shields.io/badge/ESLint-passing-4B32C3?style=flat-square&logo=eslint&logoColor=white)](https://eslint.org/)
[![TypeScript Strict](https://img.shields.io/badge/TypeScript-strict-3178C6?style=flat-square)](https://www.typescriptlang.org/)

</div>

---

## 📋 Preview

This is a **personal portfolio and digital business card** for **Abdusodiqov Abdulaziz**, a 26-year-old professional delivery driver operating under the **Largo** company in Uzbekistan.

The website serves as a professional online presence — replacing a traditional printed business card with a modern, animated, mobile-first web experience. Clients can instantly call Abdulaziz with one tap, view his services, read his background, and understand why to choose him — all from any device.

**Who it is for:**
- Clients who need reliable freight and parcel delivery
- Business owners looking for a professional courier partner
- Anyone searching for a trusted driver affiliated with Largo

**What it replaces:** A static paper business card — upgraded to a full-featured, SEO-optimized, always-online web presence.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🌙 **Dark / Light Mode** | Persisted via `localStorage`, respects system `prefers-color-scheme` on first visit |
| 🎬 **Animated Loading Screen** | Bouncing truck icon with a live progress bar (0 → 100%) before reveal |
| 🏠 **Hero Section** | Full-screen entry with floating stat cards, animated background blobs, profile photo, and CTA buttons |
| 👤 **About Section** | Biography, personal info grid, and four animated statistics cards |
| 🚚 **Services Section** | 8 service cards in a responsive 4-column grid with staggered scroll-triggered entrance animations |
| ✅ **Why Choose Me Section** | 6 quality cards with a gradient CTA banner |
| 📞 **Contact Section** | Glassmorphism contact card with click-to-call integration |
| 🏢 **Footer with Largo Logo** | Drop-in logo slot — place `/public/largo-logo.png` and it renders automatically; graceful fallback placeholder if absent |
| 📱 **Floating Phone Button** | Appears after 400 px of scroll; expands to reveal clickable phone number with pulse animation |
| ⬆️ **Scroll To Top** | Appears after 600 px; smooth scroll back to top |
| 🧭 **Sticky Navbar** | Active section detection via `getBoundingClientRect`; animated underline with Framer Motion `layoutId`; mobile hamburger menu with `AnimatePresence` |
| 💎 **Glassmorphism UI** | `.glass` and `.glass-card` utility classes with `backdrop-blur` — fully adapted for both dark and light modes |
| 🎨 **Custom Color Palette** | Brand colors `primary` (#2563EB) and `accent` (#22C55E) integrated into Tailwind's theme extension |
| 🌀 **Framer Motion Animations** | Scroll-triggered `useInView`, staggered children, hover lift effects, floating stat cards |
| 🖼️ **Optimized Images** | `next/image` with AVIF + WebP auto-conversion, responsive `sizes`, `fill` prop, `onError` fallback |
| 🔤 **Google Fonts — Inter** | Loaded via `next/font/google` as a CSS variable; zero layout shift |
| 🔍 **SEO Optimized** | Uzbek `<title>`, `<meta description>`, `keywords`, OpenGraph tags, `robots: index/follow` |
| 📱 **Fully Responsive** | Mobile-first layout tested from 320 px to 1920 px |
| ♿ **Accessibility** | `aria-label` on all icon buttons, semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`), keyboard-accessible navigation |
| 🚀 **Static Generation** | Entire site pre-rendered at build time — zero server cost, instant load |
| ⚡ **Performance** | 61.3 kB page bundle, 164 kB First Load JS, passive scroll listeners, `priority` image preload on Hero |
| 🎯 **Phone Call Integration** | `tel:` links throughout the site; primary CTA, navbar button, floating button, contact card, footer |
| 🎞️ **Custom CSS Animations** | `phone-pulse` keyframe ring effect on call buttons; `float` animation on stat cards; `pulse-slow` |
| 🖌️ **Custom Scrollbar** | Styled webkit scrollbar in both dark and light themes |

---

## 🛠️ Tech Stack

| Technology | Version | Role |
|---|---|---|
| **[Next.js](https://nextjs.org/)** | 15.5.19 | React framework — App Router, static generation, `next/image`, `next/font` |
| **[React](https://react.dev/)** | 18.3.1 | UI library |
| **[TypeScript](https://www.typescriptlang.org/)** | 5.8.3 | Static typing — `strict` mode, `forceConsistentCasingInFileNames` |
| **[Tailwind CSS](https://tailwindcss.com/)** | 3.4.17 | Utility-first styling, JIT, dark mode (`class`), custom color theme |
| **[Framer Motion](https://www.framer.com/motion/)** | 11.18.2 | Animations — `motion`, `AnimatePresence`, `useInView`, `layoutId` |
| **[Lucide React](https://lucide.dev/)** | 0.400.0 | Icon library — 25 icons used across all components |
| **[clsx](https://github.com/lukeed/clsx)** | 2.1.1 | Conditional class name construction |
| **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** | 2.6.0 | Merge Tailwind classes without conflicts (used in `cn()` helper) |
| **[PostCSS](https://postcss.org/)** | 8.5.3 | CSS processing pipeline for Tailwind |
| **[Autoprefixer](https://github.com/postcss/autoprefixer)** | 10.4.21 | Vendor prefixes for cross-browser CSS compatibility |
| **[ESLint](https://eslint.org/)** | 8.57.1 | Linting with `next/core-web-vitals` ruleset |

---

## 📁 Project Structure

```
abdulaziz-portfolio/
│
├── public/                        # Static assets served at root
│   ├── abdulaziz.jpg              # Profile photo (Hero section)
│   └── largo-logo.png             # Largo company logo (Footer section)
│
├── src/
│   ├── app/                       # Next.js App Router root
│   │   ├── globals.css            # Global styles, Tailwind directives, custom utilities
│   │   ├── layout.tsx             # Root layout — Inter font, SEO metadata, <html lang="uz">
│   │   └── page.tsx               # Page root — dark mode state, loading screen, section composition
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navbar.tsx         # Sticky navbar — active section detection, theme toggle, mobile menu
│   │   │
│   │   ├── sections/              # One file per page section
│   │   │   ├── Hero.tsx           # Full-screen hero — photo, badges, CTA, animated background
│   │   │   ├── About.tsx          # Biography, info grid, animated stat cards
│   │   │   ├── Services.tsx       # 8 service cards — 4-column responsive grid, stagger animation
│   │   │   ├── WhyChooseMe.tsx    # 6 quality cards + gradient CTA banner
│   │   │   ├── Contact.tsx        # Glassmorphism contact card with click-to-call
│   │   │   └── Footer.tsx         # 3-column footer, Largo logo slot, copyright
│   │   │
│   │   └── ui/                    # Reusable floating UI components
│   │       ├── LoadingScreen.tsx  # Animated intro screen with progress bar
│   │       ├── FloatingPhone.tsx  # Scroll-triggered floating call button with tooltip
│   │       └── ScrollToTop.tsx    # Scroll-triggered back-to-top button
│   │
│   └── lib/
│       └── utils.ts               # cn() helper + phone number constants
│
├── .eslintrc.json                 # ESLint config — next/core-web-vitals
├── .gitignore                     # Standard Next.js gitignore
├── .nvmrc                         # Pins Node.js 20 for local development
├── .vercelignore                  # Excludes cache/node_modules from Vercel upload
├── next.config.ts                 # Next.js config — reactStrictMode, image formats, lint/TS strict
├── postcss.config.mjs             # PostCSS — Tailwind + Autoprefixer
├── tailwind.config.ts             # Tailwind — darkMode, custom colors, safelist, animations
├── tsconfig.json                  # TypeScript — strict, bundler resolution, path aliases
├── vercel.json                    # Explicit Vercel deployment configuration
└── package.json                   # Dependencies, scripts, Node.js engines constraint
```

**Key directories:**

- **`src/app/`** — Next.js App Router entry points. `layout.tsx` handles font loading and SEO. `page.tsx` orchestrates state and renders all sections in order.
- **`src/components/sections/`** — Each section is a self-contained `'use client'` component with its own animation variants and scroll-triggered `useInView` hook.
- **`src/components/ui/`** — Floating overlay components that mount globally and react to scroll position independently.
- **`src/lib/utils.ts`** — Single source of truth for the phone number (change it once, updates everywhere).

---

## 🚀 Installation

### Prerequisites

- **Node.js** `>=18.17.0` (Node 20 recommended — see `.nvmrc`)
- **npm** `>=9`

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/winter-eng/abdulaziz-portfolio.git

# 2. Navigate into the project
cd abdulaziz-portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Build

```bash
# Create a production build
npm run build

# Start the production server locally
npm start
```

The build output is placed in `.next/`. The entire site is statically pre-rendered at build time.

**Build output (reference):**

```
Route (app)                    Size       First Load JS
┌ ○ /                          61.3 kB    164 kB
└ ○ /_not-found                 995 B     103 kB

○  (Static)  prerendered as static content
```

---

## 💻 Development

```bash
# Start development server with hot reload
npm run dev

# Type-check without emitting (catches all TS errors)
npm run type-check

# Lint all TypeScript/TSX files in src/ — fails on any warning
npm run lint
```

**Workflow:**

1. Edit any file under `src/` — the dev server hot-reloads instantly.
2. Run `npm run type-check` before committing to catch type errors early.
3. Run `npm run lint` to ensure zero ESLint warnings.
4. Run `npm run build` to confirm production parity before pushing.

**Path alias:** `@/` maps to `src/` — use `import Foo from '@/components/...'` throughout.

---

## ☁️ Deployment

### Vercel (Recommended)

This project ships with a `vercel.json` that explicitly configures the deployment.

```bash
# Option A — Vercel CLI
npm i -g vercel
vercel

# Option B — GitHub integration
# Push to GitHub → Import in vercel.com → Deploy automatically
```

No environment variables are required. Vercel detects Next.js via `vercel.json` and builds with `npm run build`.

**`vercel.json` configuration:**

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "installCommand": "npm install",
  "outputDirectory": ".next"
}
```

### Netlify

Deploy via drag-and-drop of the `.next/` folder or connect the GitHub repository. Set:

- **Build command:** `npm run build`
- **Publish directory:** `.next`
- **Node version:** `20`

### Requirements

- Node.js `>=18.17.0` (specified in `package.json` `engines` field)
- The `.nvmrc` file pins Node 20 for `nvm` users

---

## 🎨 Customization

### Replace the Profile Photo

Drop your photo at:

```
public/abdulaziz.jpg
```

The image renders at `288×320 px` on mobile and `384×480 px` on desktop. A gradient fallback with a placeholder message displays automatically if the file is missing.

### Add the Largo Company Logo

Drop the logo file at:

```
public/largo-logo.png
```

The Footer section renders it at `160×48 px` with `object-contain`. A styled "LARGO" text placeholder is shown automatically when the file is absent — no code change required either way.

### Update the Phone Number

Edit a single file — `src/lib/utils.ts`:

```ts
export const PHONE_NUMBER = '+998997228280'      // used in tel: href
export const PHONE_DISPLAY = '+998 99 722 82 80' // displayed to user
export const PHONE_HREF = `tel:${PHONE_NUMBER}`
```

This constant is imported by **Navbar**, **Hero**, **WhyChooseMe**, **Contact**, **Footer**, and **FloatingPhone** — one change updates all.

### Edit Personal Information

| What to change | File | What to look for |
|---|---|---|
| Name, age, company, vehicle | `src/components/sections/About.tsx` | The info grid array |
| Stats (500+, 200+, 3+, 100%) | `src/components/sections/About.tsx` | `const stats` array |
| Hero tagline and subtitle | `src/components/sections/Hero.tsx` | `<motion.p>` elements |
| Service cards | `src/components/sections/Services.tsx` | `const services` array |
| Why Choose Me cards | `src/components/sections/WhyChooseMe.tsx` | `const qualities` array |
| Contact details | `src/components/sections/Contact.tsx` | `const contactDetails` array |
| SEO title and meta description | `src/app/layout.tsx` | `export const metadata` |
| Footer copyright year | `src/components/sections/Footer.tsx` | `© 2026` |

### Change Brand Colors

Edit `tailwind.config.ts`:

```ts
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#2563EB',  // Change primary blue
        600: '#2563EB',
      },
      accent: {
        DEFAULT: '#22C55E',  // Change accent green
      },
    },
  },
},
```

### Swap Icons

All icons come from [Lucide React](https://lucide.dev/icons/). Browse the library, then replace the named import in the relevant component. No extra packages needed.

### Update Navigation Links

Edit the `navLinks` array in both `src/components/layout/Navbar.tsx` and `src/components/sections/Footer.tsx`. Ensure the `href` value matches the `id` of the target `<section>`.

---

## ⚡ Performance

| Technique | Implementation |
|---|---|
| **Static generation** | All routes pre-rendered at build time (`○` in build output) — zero server-side rendering cost |
| **Next.js Image optimization** | `next/image` auto-converts to AVIF then WebP; serves correct size per viewport via `sizes` |
| **Font optimization** | Inter loaded via `next/font/google` — self-hosted, zero layout shift, CSS variable |
| **Passive scroll listeners** | All `scroll` event listeners use `{ passive: true }` — never blocks the main thread |
| **Priority image preload** | Hero photo uses `priority` prop — preloaded in `<head>` for above-the-fold LCP |
| **Lazy section animations** | `useInView` with `once: true` — animations trigger once on entry, never re-run |
| **Tree-shaken icons** | Lucide React exports named icons — only the 25 used icons are bundled |
| **Tailwind JIT** | Only CSS classes present in source are included in the production bundle |
| **Tailwind safelist** | Dynamic class strings in JS object maps are explicitly safelisted — no purge risk in production |

---

## 📱 Responsive Design

| Breakpoint | Screen width | Layout behavior |
|---|---|---|
| **Mobile** | 320 px – 639 px | Single-column layouts; hamburger menu; stacked hero photo above text |
| **Small** | 640 px – 767 px | Wider spacing; horizontal CTA buttons; phone number visible in navbar |
| **Medium** | 768 px – 1023 px | Desktop nav visible; 2-column service grid |
| **Large** | 1024 px – 1279 px | 2-column hero layout (text left, photo right); 4-column service grid |
| **XL+** | 1280 px + | Constrained to `max-w-6xl` container — no content stretching on ultra-wide screens |

All layouts are built mobile-first using Tailwind's `sm:`, `md:`, `lg:` responsive prefixes.

---

## 🔍 SEO

The following SEO features are implemented in `src/app/layout.tsx` via Next.js `Metadata` API:

- **`<title>`** — Full descriptive title in Uzbek including name, role, and company
- **`<meta name="description">`** — Rich service description optimized for Uzbek search queries
- **`<meta name="keywords">`** — 9 targeted Uzbek-language keywords
- **`<meta name="author">`** — `Abdusodiqov Abdulaziz`
- **OpenGraph tags** — `og:title`, `og:description`, `og:type: website`, `og:locale: uz_UZ`
- **`robots`** — `index: true`, `follow: true`
- **`lang="uz"`** — `<html>` tag signals Uzbek language to search engines and assistive tech
- **Semantic HTML** — `<header>`, `<nav>`, `<main>`, `<section id="...">`, `<footer>` improve crawlability
- **Structured alt text** — All images carry descriptive `alt` attributes

---

## ♿ Accessibility

| Practice | Location |
|---|---|
| `aria-label` on all icon-only buttons | Navbar theme toggle, mobile menu button, FloatingPhone button, ScrollToTop button |
| Semantic landmarks | `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>` — readable by screen readers |
| `lang="uz"` on `<html>` | Screen readers use correct Uzbek pronunciation |
| `suppressHydrationWarning` on `<html>` | Prevents hydration mismatch warning when dark mode class is toggled |
| Keyboard-accessible navigation | All interactive elements are `<a>`, `<button>`, or `motion.button` — focusable by default |
| Passive event listeners | Scroll handlers are non-blocking — no jank on assistive input devices |

---

## 📜 Scripts

| Script | Command | Description |
|---|---|---|
| `dev` | `next dev` | Start local development server with hot reload at `localhost:3000` |
| `build` | `next build` | Create optimized production build in `.next/` |
| `start` | `next start` | Serve the production build locally |
| `lint` | `eslint src --ext .ts,.tsx --max-warnings 0` | Lint all TypeScript files; fails on any warning |
| `type-check` | `tsc --noEmit` | Full TypeScript type check without emitting files |

---

## 📦 Dependencies

### Runtime

| Package | Version | Purpose |
|---|---|---|
| `next` | 15.5.19 | React framework — App Router, image optimization, font loading, static generation |
| `react` | ^18.3.1 | UI library |
| `react-dom` | ^18.3.1 | React DOM renderer |
| `framer-motion` | ^11.18.2 | Production-grade animation library — scroll triggers, transitions, layout animations |
| `lucide-react` | ^0.400.0 | Tree-shakeable SVG icon library |
| `clsx` | ^2.1.1 | Tiny utility for building conditional `className` strings |
| `tailwind-merge` | ^2.6.0 | Intelligently merges Tailwind classes, resolving conflicts |

### Development

| Package | Version | Purpose |
|---|---|---|
| `typescript` | ^5.8.3 | TypeScript compiler |
| `@types/node` | ^20.17.0 | Node.js type definitions |
| `@types/react` | ^18.3.20 | React type definitions |
| `@types/react-dom` | ^18.3.5 | React DOM type definitions |
| `tailwindcss` | ^3.4.17 | Tailwind CSS framework |
| `postcss` | ^8.5.3 | CSS transformation pipeline |
| `autoprefixer` | ^10.4.21 | Adds vendor prefixes to CSS automatically |
| `eslint` | ^8.57.1 | JavaScript/TypeScript linter |
| `eslint-config-next` | 15.5.19 | Next.js ESLint rules (Core Web Vitals + accessibility) |

---

## 🌐 Browser Support

| Browser | Support | Notes |
|---|---|---|
| **Chrome** | ✅ 90+ | Full support including `backdrop-filter` for glassmorphism |
| **Firefox** | ✅ 103+ | Full support; `backdrop-filter` enabled by default since Firefox 103 |
| **Safari** | ✅ 14+ | Full support; `-webkit-backdrop-filter` applied via Autoprefixer |
| **Edge** | ✅ 90+ | Chromium-based; same as Chrome |
| **Mobile Safari** | ✅ iOS 14+ | `backdrop-filter` supported |
| **Chrome Android** | ✅ 90+ | Full support |
| **IE 11** | ❌ | Not supported — targets ES2017+ and modern CSS |

---

## 🤝 Contributing

Contributions, suggestions, and bug reports are welcome.

1. **Fork** the repository
2. **Create** a feature branch — `git checkout -b feat/your-feature`
3. **Commit** your changes — `git commit -m "feat: add your feature"`
4. **Push** to your branch — `git push origin feat/your-feature`
5. **Open** a Pull Request

**Before submitting, ensure all checks pass:**

```bash
npm run type-check   # Zero TypeScript errors
npm run lint         # Zero ESLint warnings
npm run build        # Clean production build
```

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2026 winter-eng

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👤 Author

**Developer:** Winter

[![GitHub](https://img.shields.io/badge/GitHub-winter--eng-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/winter-eng)

---

## 🙏 Acknowledgements

This project is built on the shoulders of exceptional open-source technology:

- **[Next.js](https://nextjs.org/)** by Vercel — the most capable React framework for production
- **[Framer Motion](https://www.framer.com/motion/)** — the gold standard for React animations
- **[Tailwind CSS](https://tailwindcss.com/)** — utility-first CSS that scales
- **[Lucide](https://lucide.dev/)** — beautifully consistent open-source icons
- **[Inter](https://rsms.me/inter/)** by Rasmus Andersson — the typeface designed for screens
- **[Vercel](https://vercel.com/)** — zero-configuration deployment for Next.js

---

<div align="center">

---

Built with ❤️ for **Abdusodiqov Abdulaziz** · Professional Delivery Driver · Largo

*Fast. Reliable. On time.*

---

</div>
