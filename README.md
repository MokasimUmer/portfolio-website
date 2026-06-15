# Mohammed Kasim — Portfolio Website

Personal portfolio for [MokasimUmer](https://github.com/MokasimUmer) — full-stack developer and AI automation specialist.

Built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Features

- Responsive design with mobile navigation
- Smooth scroll navigation with active section highlighting
- Real GitHub projects and profile integration
- SEO metadata, sitemap, and robots.txt
- Contact form (opens email client)
- Ready for Vercel or Netlify deployment

## Local Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
pnpm build
pnpm start
```

## Deploy to GitHub

1. Create a new repository on GitHub under [@MokasimUmer](https://github.com/MokasimUmer) (e.g. `portfolio-website`)

2. Initialize and push:

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/MokasimUmer/portfolio-website.git
git push -u origin main
```

## Deploy to Vercel (Recommended)

Vercel is the easiest option for Next.js apps.

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New Project** → import `MokasimUmer/portfolio-website`
3. Vercel auto-detects Next.js — click **Deploy**
4. Your site will be live at `https://portfolio-website-xxx.vercel.app`

Optional: add a custom domain in Vercel project settings, then update `url` in `lib/site-data.ts`.

## Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and sign in with GitHub
2. Click **Add new site** → **Import an existing project**
3. Select the repository
4. Build settings:
   - **Build command:** `pnpm build`
   - **Publish directory:** `.next` (Netlify auto-detects Next.js with the runtime plugin)
5. Click **Deploy**

Netlify will use the Next.js runtime automatically for App Router projects.

## Customize

Edit `lib/site-data.ts` to update:

- Name, email, bio, and social links
- Featured projects
- Skills and experience
- Site URL (after deployment)

## Tech Stack

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Vercel Analytics](https://vercel.com/analytics)

## License

MIT
