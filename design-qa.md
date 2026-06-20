# Design QA

final result: passed

## Target

Selected homepage direction:

- hero from mockup 2: soft pink cover-inspired hero, Thai headline on the left, beauty expert visual on the right
- blog/category from mockup 1: circular service categories and concern chips
- required colors: primary `#D86F78`, eyebrow `#6F7DD9`, lip `#6FD988`, nail `#D9C06F`

Reference image:

- `design-reference-homepage.png`

## Implemented Checks

- Desktop homepage uses `home-hero-desktop.png`.
- Mobile homepage uses `home-hero-mobile.png`.
- Service categories use separate generated images:
  - `category-nails.png`
  - `category-brows.png`
  - `category-lips.png`
- Homepage first viewport shows `ทำเล็บ`, `สักคิ้ว`, and `สักปาก`.
- Concern chips show `ราคา`, `เจ็บไหม`, `ดูแลหลังทำ`, `เลือกทรง`, `เลือกสี`, and `ความเสี่ยง`.
- Desktop viewport `1440x1024` has no horizontal overflow.
- Mobile viewport `390x1200` has no horizontal overflow.
- `npm run check` passes.

## Notes

- The article list uses real existing Markdown articles only. No eyebrow or lip articles were invented.
- Brow and lip category links point to `/about-jup` until real category hubs or articles are added.
