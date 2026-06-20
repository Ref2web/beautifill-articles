# Beautifill Articles Content And Design Direction

Last updated: 2026-06-20

## Purpose

`beautifill-articles/` is the website article system for Beautifill by Jup.

The direction is no longer nail-only.

The website should cover three service categories:

1. ทำเล็บ
2. สักคิ้ว
3. สักปาก

The site should help customers understand choices, risks, process, results, price, aftercare, and Jup's decision logic before booking.

## Content Architecture

Organize content by service first, then by decision theme.

### Service Hubs

Recommended service hubs:

- `ทำเล็บ`
- `สักคิ้ว`
- `สักปาก`

Each service hub should make clear:

- who the service is for
- what customers usually worry about
- what Jup checks before recommending an option
- which articles help customers decide
- which topics need source-backed explanation

### Decision Themes

Use these themes across all services:

- choosing the right result
- price and value
- process and what happens during service
- before/after interpretation
- risk, safety, irritation, allergy, infection, healing, and aftercare
- customer questions before booking
- Jup POV and practical service judgment

## Service-Specific Content Logic

### ทำเล็บ

Main decision lens:

- lifestyle fit
- work routine
- nail condition
- length, shape, color, and maintenance
- price and service scope
- nail damage and aftercare

Use `../strategy/nail/` as the strategy source.

### สักคิ้ว

Main decision lens:

- face fit
- natural-looking result
- brow shape, thickness, arch, and color
- fear of looking harsh or unnatural
- process, price, and before/after judgment

Use `../strategy/brow/` as the strategy source.

### สักปาก

Main decision lens:

- original lip condition
- color choice
- pain fear
- swelling, healing, aftercare, and expectation setting
- before/after interpretation
- price and consultation fit

Use `../strategy/lip/` as the strategy source.

## Recommended Website Structure

Recommended public structure after redesign:

- `/` - homepage for the full Beautifill education hub
- `/nails/` - ทำเล็บ hub
- `/eyebrow-tattoo/` - สักคิ้ว hub
- `/lip-tattoo/` - สักปาก hub
- `/blogs/news/{slug}` - stable Shopify-compatible article URL
- `/topics/{topic}` - topic archives across services

Existing article URLs should remain stable unless the user approves redirects.

## Homepage Direction

The homepage should make the three service categories visible in the first screen.

The first screen should not look like a nail-only blog.

Recommended first-screen hierarchy:

1. Beautifill by Jup as the brand
2. simple Thai explanation that the site helps customers choose beauty services with clearer information
3. three service entry points: ทำเล็บ, สักคิ้ว, สักปาก
4. latest or recommended articles
5. trust-building note about Jup POV and source-backed safety content

## Visual Direction

The website should feel:

- clean
- useful
- calm
- service-led
- easy to scan
- not overly decorative
- not only a premium beauty gallery

Avoid:

- making every section a card
- hiding the three services below the fold
- using vague English marketing copy in customer-facing text
- making medical, healing, safety, allergy, or infection claims without sources
- presenting AI images, before/after visuals, or generated visuals as real customer proof

## Design Confirmation Rule

Before changing Astro page code, global CSS, navigation, homepage layout, service hub pages, article card layout, or visual styling, create image-based design concepts and get user approval.

The approved design image is the implementation target.

Do not start code implementation from this document alone.

Markdown planning files may be updated before design approval.

## Editorial Source Rules

Use the matching service writing guide before writing customer-facing article text:

- `../strategy/nail/NAIL_CONTENT_WRITING_GUIDE.md`
- `../strategy/brow/BROW_CONTENT_WRITING_GUIDE.md`
- `../strategy/lip/LIP_CONTENT_WRITING_GUIDE.md`

Use sources for claims about:

- health
- hygiene
- irritation
- allergy
- infection
- healing
- pigment
- pain
- swelling
- nail damage
- safety
- aftercare

If a claim cannot be confirmed, do not present it as fact.
