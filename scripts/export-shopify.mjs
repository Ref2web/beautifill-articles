import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

const articleDir = path.resolve('src/content/articles');
const exportDir = path.resolve('public/exports');
fs.mkdirSync(exportDir, { recursive: true });

const csvEscape = (value) => {
  const text = value == null ? '' : String(value);
  return `"${text.replaceAll('"', '""')}"`;
};

const rowsToCsv = (headers, rows) => [
  headers.map(csvEscape).join(','),
  ...rows.map((row) => headers.map((header) => csvEscape(row[header])).join(','))
].join('\n');

const articles = fs
  .readdirSync(articleDir)
  .filter((name) => name.endsWith('.md'))
  .map((name) => {
    const parsed = matter.read(path.join(articleDir, name));
    return { file: name, ...parsed };
  })
  .sort((a, b) => Date.parse(a.data.publishedAt) - Date.parse(b.data.publishedAt));

const articleRows = articles.map(({ data, content }) => ({
  Blog: data.migration.targetShopifyBlog,
  Handle: data.shopifyHandle,
  Title: data.title,
  'Body HTML': marked.parse(content),
  Summary: data.description,
  Tags: [data.category, data.topic, data.funnelStage, data.contentType].join(', '),
  'Published At': data.publishedAt,
  'Updated At': data.updatedAt,
  'Image Src': data.heroImage,
  'Image Alt Text': data.imageAlt,
  'SEO Title': data.metaTitle,
  'SEO Description': data.metaDescription
}));

const redirectRows = articles
  .filter(({ data }) => data.migration.redirectNeeded)
  .map(({ data }) => ({
    'Redirect from': `/blogs/news/${data.slug}`,
    'Redirect to': data.migration.targetShopifyPath
  }));

const inventoryRows = articles.map(({ file, data }) => ({
  File: file,
  Title: data.title,
  Slug: data.slug,
  URL: `/blogs/news/${data.slug}`,
  Topic: data.topic,
  Category: data.category,
  Funnel: data.funnelStage,
  'Content Type': data.contentType,
  'Source Required': data.sourceRequired,
  'Sources Count': data.sources.length,
  'Jup POV Status': data.jupPovStatus,
  'Shopify Target': data.migration.targetShopifyPath,
  'Redirect Needed': data.migration.redirectNeeded
}));

fs.writeFileSync(
  path.join(exportDir, 'shopify_articles.csv'),
  rowsToCsv(
    [
      'Blog',
      'Handle',
      'Title',
      'Body HTML',
      'Summary',
      'Tags',
      'Published At',
      'Updated At',
      'Image Src',
      'Image Alt Text',
      'SEO Title',
      'SEO Description'
    ],
    articleRows
  )
);

fs.writeFileSync(
  path.join(exportDir, 'redirects.csv'),
  rowsToCsv(['Redirect from', 'Redirect to'], redirectRows)
);

fs.writeFileSync(
  path.join(exportDir, 'content_inventory.csv'),
  rowsToCsv(
    [
      'File',
      'Title',
      'Slug',
      'URL',
      'Topic',
      'Category',
      'Funnel',
      'Content Type',
      'Source Required',
      'Sources Count',
      'Jup POV Status',
      'Shopify Target',
      'Redirect Needed'
    ],
    inventoryRows
  )
);

console.log(`Exported ${articles.length} articles and ${redirectRows.length} redirects.`);
