import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const root = path.resolve('src/content/articles');
const required = [
  'title',
  'slug',
  'shopifyHandle',
  'description',
  'metaTitle',
  'metaDescription',
  'category',
  'topic',
  'funnelStage',
  'contentType',
  'jupPovStatus',
  'sourceRequired',
  'sources',
  'publishedAt',
  'updatedAt',
  'heroImage',
  'imageAlt',
  'shortFormRepurpose',
  'migration'
];

const slugs = new Set();
const errors = [];

for (const file of fs.readdirSync(root).filter((name) => name.endsWith('.md'))) {
  const fullPath = path.join(root, file);
  const { data, content } = matter.read(fullPath);

  for (const key of required) {
    if (!(key in data)) errors.push(`${file}: missing ${key}`);
  }

  if (data.slug && slugs.has(data.slug)) errors.push(`${file}: duplicate slug ${data.slug}`);
  if (data.slug) slugs.add(data.slug);

  const expectedPath = `/blogs/news/${data.slug}`;
  if (data.migration?.targetShopifyPath !== expectedPath) {
    errors.push(`${file}: migration.targetShopifyPath must be ${expectedPath}`);
  }

  if (data.shopifyHandle !== data.slug) {
    errors.push(`${file}: shopifyHandle must match slug for low-redirect migration`);
  }

  if (!data.metaTitle || data.metaTitle.length > 70) {
    errors.push(`${file}: metaTitle missing or longer than 70 characters`);
  }

  if (!data.metaDescription || data.metaDescription.length > 170) {
    errors.push(`${file}: metaDescription missing or longer than 170 characters`);
  }

  if (data.sourceRequired && (!Array.isArray(data.sources) || data.sources.length === 0)) {
    errors.push(`${file}: sourceRequired is true but sources is empty`);
  }

  if (!Array.isArray(data.shortFormRepurpose) || data.shortFormRepurpose.length < 3) {
    errors.push(`${file}: shortFormRepurpose must include at least 3 ideas`);
  }

  if (content.includes('[Jup POV]')) {
    errors.push(`${file}: remove [Jup POV] placeholder from customer-facing article body`);
  }

  if (data.jupPovStatus === 'needs-input' && !content.includes('## วิธีคิดก่อนตัดสินใจ')) {
    errors.push(`${file}: needs-input article must include a วิธีคิดก่อนตัดสินใจ section`);
  }
}

if (errors.length > 0) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Validated ${slugs.size} articles.`);
