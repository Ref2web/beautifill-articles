# Beautifill Articles

Static SEO article site for Beautifill by Jup, built with Astro and Markdown.

## Why This Setup

- GitHub is the source of truth.
- Cloudflare Pages can deploy the static build for free.
- Articles live in Markdown so they can later be exported for Shopify.
- Public article URLs match the intended Shopify blog shape: `/blogs/news/{slug}`.

## Local Commands

```bash
npm install
npm run dev
npm run check
```

## Cloudflare Pages Settings

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`

## Shopify Migration

Run:

```bash
npm run export:shopify
```

The script writes:

- `public/exports/shopify_articles.csv`
- `public/exports/redirects.csv`
- `public/exports/content_inventory.csv`

Keep article slugs stable. If a Shopify URL changes, set `migration.redirectNeeded: true` and update `migration.targetShopifyPath` in the Markdown frontmatter.

## Editorial Guardrails

Nail content must follow the existing project strategy:

- Use Jup decision logic, not generic beauty writing.
- Use `[Jup POV]` when the real Jup opinion has not been provided.
- Health, chemical, hygiene, irritation, allergy, or nail-damage claims require sources.
- Do not diagnose medical conditions or make certainty claims beyond the source.
- Every article should include short-form repurpose ideas.
