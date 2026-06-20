# Deployment

## GitHub

Create a new GitHub repository named `beautifill-articles`, then push this folder as the repository root.

```bash
cd "/Users/chanin.n/Documents/New project/beautifill-articles"
git init
git add .
git commit -m "Create Beautifill article site"
git branch -M main
git remote add origin git@github.com:<owner>/beautifill-articles.git
git push -u origin main
```

`gh` is not installed in the current environment, so the remote repository was not created automatically.

## Cloudflare Pages

Create a Cloudflare Pages project connected to the GitHub repository.

- Production branch: `main`
- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Environment variables: none required for v1

After deploy, attach the custom domain in Cloudflare Pages and update `site` in `astro.config.mjs` and `src/data/site.ts` if the domain differs from `https://www.beautifillbyjup.com`.

## Pre-Deploy Check

Run:

```bash
npm run check
npm audit --omit=dev
```

Expected result:

- content validation passes
- Astro build generates 11 pages
- Shopify CSV export creates 3 files in `public/exports/`
- npm audit reports 0 vulnerabilities
