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

## Current Site Direction

The deploy target is no longer a nail-only article site.

Before deploying a redesign, confirm that the built site presents Beautifill by Jup as a three-service education hub:

1. ทำเล็บ
2. สักคิ้ว
3. สักปาก

The homepage, navigation, metadata, and article discovery should not imply that the site covers only nail content.

## Redesign Gate

Do not deploy code changes for page structure or visual design until a design image has been created and approved by the user.

This applies to:

- homepage layout
- service hub pages
- navigation labels
- article card design
- global visual styling
- imagery direction
- first-screen hierarchy

Markdown strategy and planning files may be updated before design approval.

## Pre-Deploy Check

Run:

```bash
npm run check
npm audit --omit=dev
```

Expected result:

- content validation passes
- Astro build completes without route, schema, or content errors
- Shopify CSV export creates 3 files in `public/exports/`
- npm audit reports 0 vulnerabilities
