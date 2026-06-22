# Beautifill Articles

Static SEO article site for Beautifill by Jup, built with Astro and Markdown.

The site direction has expanded from nail-only articles into a three-service beauty education hub:

1. `ทำเล็บ`
2. `สักคิ้ว`
3. `สักปาก`

The site should help customers understand service choices, risks, process, results, and Jup's decision logic before booking.

## Why This Setup

- GitHub is the source of truth.
- Cloudflare Pages can deploy the static build for free.
- Articles live in Markdown so they can later be exported for Shopify.
- Public article URLs match the intended Shopify blog shape: `/blogs/news/{slug}`.

## Content Structure Direction

The website should organize content by service first, then by customer decision need.

Primary service categories:

- `nails` = ทำเล็บ
- `eyebrow-tattoo` = สักคิ้ว
- `lip-tattoo` = สักปาก

Recommended top-level content paths after the redesign:

- `/` - homepage that introduces the three service areas and latest useful articles
- `/nails/` - ทำเล็บ article hub
- `/eyebrow-tattoo/` - สักคิ้ว article hub
- `/lip-tattoo/` - สักปาก article hub
- `/blogs/news/{slug}` - stable Shopify-compatible article URL
- `/topics/{topic}` - topic archive for cross-service education themes

Customer decision themes to support across all three services:

- choosing the right service or result
- price and value
- process and what happens during service
- safety, irritation, allergy, infection, healing, and aftercare
- before/after interpretation
- result fit: lifestyle fit for nails, face fit for brows, original lip condition and color fit for lips
- Jup POV and practical service judgment

## Design Direction Before Code

Do not redesign the Astro pages or CSS directly from text instructions alone.

Before changing page layout, navigation, homepage structure, service hub pages, article cards, visual hierarchy, or global styling, create image-based design concepts first and get user confirmation.

The confirmed design image becomes the visual target for implementation.

Initial redesign goal:

- make the first screen clearly show that Beautifill now covers three services
- avoid presenting the site as a nail-only blog
- keep the site educational and trust-building, not only a beauty gallery
- make service switching clear: ทำเล็บ, สักคิ้ว, สักปาก
- use simple Thai wording for customer-facing text
- keep article discovery easy for customers who are worried, comparing, or close to booking

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

Website articles must follow the existing project strategy for the matching service:

- Use Jup decision logic, not generic beauty writing.
- If the real Jup opinion has not been provided, keep `jupPovStatus: "needs-input"` and write a customer-facing `## วิธีคิดก่อนตัดสินใจ` section instead of showing an internal placeholder.
- Health, chemical, hygiene, irritation, allergy, infection, healing, pigment, or damage claims require sources.
- Do not diagnose medical conditions or make certainty claims beyond the source.
- Every article should include short-form repurpose ideas.

Service-specific source files:

- Nail content: `../strategy/nail/`
- Eyebrow tattoo content: `../strategy/brow/`
- Lip tattoo content: `../strategy/lip/`

When writing or editing an article, use the writing guide for the matching service before drafting customer-facing text.
