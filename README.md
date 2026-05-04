# howplatformswork.com

Author website for *How Platforms Work* by Alina Verbenchuk.

Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

---

## Local development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev
```

---

## Swapping in real images

All placeholder images live in `/public/images/`. Drop your files there, then update the `src` prop in the relevant component.

| Image | File to add | Component to update |
|---|---|---|
| Book cover | `/public/images/book-cover.jpg` | `components/BookCover.tsx` |
| Author headshot | `/public/images/alina-verbenchuk.jpg` | `app/about/page.tsx` |

Instructions are included as comments directly inside each component — search for `SWAP IN` to find them quickly.

---

## Deployment

### Option A — Vercel (recommended)

1. Push this repo to GitHub (see commands below).
2. Go to [vercel.com](https://vercel.com), import your GitHub repo.
3. Vercel auto-detects Next.js — no settings to change. Click **Deploy**.
4. In your Vercel project → **Settings → Domains**, add `howplatformswork.com`.
5. At your domain registrar, add these DNS records:

| Type | Name | Value |
|---|---|---|
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

Vercel handles SSL automatically. Propagation typically takes a few minutes to an hour.

> **Why Vercel?** It supports Next.js server features (ISR, Server Actions, Image Optimisation) out of the box, deploys on every git push, and gives you free SSL and analytics. GitHub Pages requires a full static export, which disables several Next.js features.

---

### Option B — GitHub Pages (static export)

1. In `next.config.js`, uncomment the two lines:
   ```js
   output: 'export',
   images: { unoptimized: true },
   ```
2. Create a `CNAME` file in `/public/` containing just your domain:
   ```
   howplatformswork.com
   ```
3. Build and export:
   ```bash
   npm run build
   # The static site is now in /out
   ```
4. Push to GitHub, then go to **Repo Settings → Pages**, set source to the `main` branch (or use a GitHub Actions workflow to deploy the `/out` folder).
5. At your domain registrar, add:

| Type | Name | Value |
|---|---|---|
| `A` | `@` | `185.199.108.153` |
| `A` | `@` | `185.199.109.153` |
| `A` | `@` | `185.199.110.153` |
| `A` | `@` | `185.199.111.153` |
| `CNAME` | `www` | `<your-github-username>.github.io` |

---

## Push to GitHub (first time)

```bash
# From inside the howplatformswork/ folder:
git init
git add .
git commit -m "Initial commit"

# Create a new repo on github.com, then:
git remote add origin https://github.com/<your-username>/howplatformswork.git
git branch -M main
git push -u origin main
```

---

## Project structure

```
howplatformswork/
├── app/
│   ├── layout.tsx          # Root layout: nav + footer, Google Fonts
│   ├── globals.css
│   ├── page.tsx            # Home page
│   ├── about/
│   │   └── page.tsx        # Author bio
│   └── work-with-me/
│       └── page.tsx        # Speaking + consulting
├── components/
│   ├── Nav.tsx             # Sticky nav with mobile hamburger
│   ├── Footer.tsx
│   └── BookCover.tsx       # Reusable book cover (swap image here)
├── public/
│   └── images/             # Drop book-cover.jpg and headshot here
├── next.config.js          # Static export flag (commented out by default)
├── tailwind.config.ts
└── package.json
```
