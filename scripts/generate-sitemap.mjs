import {mkdir, rm, writeFile, readFile} from 'node:fs/promises';
import {createElement} from 'react';
import {renderToString} from 'react-dom/server';
import {createServer} from 'vite';
import {createServer as createHttpServer} from 'node:http';

const output = new URL('../dist/', import.meta.url);
const rawSiteUrl = process.env.URL || process.env.VITE_SITE_URL;

if (!rawSiteUrl) {
  await rm(new URL('sitemap.xml', output), {force: true});
  console.warn('No production URL is configured; skipping canonical route files and sitemap for this local build. Netlify provides URL during deploy builds.');
  process.exit(0);
}

let siteUrl;
try {
  const parsed = new URL(rawSiteUrl);
  if (parsed.protocol !== 'https:' && !['localhost', '127.0.0.1'].includes(parsed.hostname)) {
    throw new Error('Set URL or VITE_SITE_URL to the canonical HTTPS production origin.');
  }
  siteUrl = parsed.origin;
} catch {
  console.error(`Invalid site URL: ${rawSiteUrl}`);
  process.exit(1);
}

const pages = [
  ['/', 'AGRONEX Crop Care | Agricultural Crop Protection in Haryana', 'Explore AGRONEX crop protection products, crop-care solutions and dealer opportunities from Sirsa, Haryana, India.'],
  ['/about', 'About AGRONEX | Crop Care Company in Haryana', 'Learn about AGRONEX CROP CARE, founded by J.S. SHARMA and established in 2023 to serve farmers and agricultural dealers from Sirsa, Haryana.'],
  ['/products', 'Agricultural Crop Protection Products | AGRONEX', 'Browse AGRONEX insecticides, fungicides, herbicides and crop growth solutions with product formulations, crop fit and pack sizes.'],
  ['/crop-solutions', 'Crop Solutions for Indian Agriculture | AGRONEX', 'Explore AGRONEX crop-care products for cotton, wheat, paddy, soybean, mustard, chilli, tomato and other crops.'],
  ['/dealer-network', 'Become an AGRONEX Dealer | Dealer Enquiries', 'Apply to become an AGRONEX dealer. Share your agricultural business details and service area with our team.'],
  ['/contact', 'Contact AGRONEX Crop Care | Haryana', 'Contact AGRONEX CROP CARE in Sirsa, Haryana for product information, dealer enquiries and business support.'],
];

const ssr = await createServer({server:{middlewareMode:true, hmr:{server:createHttpServer()}}, appType:'custom', logLevel:'error'});
let App, productData, categoryData;
try {
  ({App, products:productData, categories:categoryData} = await ssr.ssrLoadModule('/src/main.jsx'));
  const slug = name => name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
  for (const [name, detail] of categoryData) {
    pages.push([`/products/${slug(name)}`, `${name} Products | AGRONEX Crop Care`, `${detail} Explore AGRONEX ${name.toLowerCase()} with product details, suitable crops and pack sizes.`]);
  }
  for (const product of productData) {
    pages.push([`/products/${product.slug}`, `${product.name} | AGRONEX Crop Care`, `${product.name}: ${product.formula}. Suitable crops: ${product.crops}. Explore product details and pack sizes from AGRONEX Crop Care.`]);
  }
} catch (error) {
  await ssr.close();
  throw error;
}

const escapeHtml = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const setMeta = (html, attr, name, content) => {
  const selector = new RegExp(`<meta\\s+${attr}=["']${name}["'][^>]*>`, 'i');
  const tag = `<meta ${attr}="${name}" content="${escapeHtml(content)}"/>`;
  return selector.test(html) ? html.replace(selector, tag) : html.replace('</head>', `  ${tag}\n</head>`);
};

const template = await readFile(new URL('index.html', output), 'utf8');
const today = new Date().toISOString().slice(0, 10);
const orgSchema = {'@context':'https://schema.org','@type':'Organization','name':'AGRONEX CROP CARE','url':siteUrl,'logo':`${siteUrl}/assets/agronex-logo.png`,'telephone':'+91 77340 76003','address':{'@type':'PostalAddress','streetAddress':'Plot No. 2937, Village: DTR, LGD Code: 32753','addressLocality':'Sirsa','addressRegion':'Haryana','postalCode':'125076','addressCountry':'IN'},'sameAs':['https://www.facebook.com/share/1JDCgwbFWn/','https://www.instagram.com/agronex_crop_care/']};
for (const [route, title, description] of pages) {
  const canonical = new URL(route, siteUrl).href;
  const routeProduct = productData.find(item => route === `/products/${item.slug}`);
  const shareImage = routeProduct ? `${siteUrl}/assets/products/${routeProduct.image}.png` : `${siteUrl}/assets/agronex-hero.jpg`;
  let html = template.replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(title)}</title>`);
  html = setMeta(html, 'name', 'description', description);
  html = setMeta(html, 'name', 'robots', 'index, follow');
  html = setMeta(html, 'property', 'og:title', title);
  html = setMeta(html, 'property', 'og:description', description);
  html = setMeta(html, 'property', 'og:locale', 'en_IN');
  html = setMeta(html, 'property', 'og:url', canonical);
  html = setMeta(html, 'property', 'og:image', shareImage);
  html = setMeta(html, 'name', 'twitter:title', title);
  html = setMeta(html, 'name', 'twitter:description', description);
  html = setMeta(html, 'name', 'twitter:image', shareImage);
  html = setMeta(html, 'name', 'twitter:card', 'summary_large_image');
  if (!/<link\s+rel=["']canonical["']/i.test(html)) html = html.replace('</head>', `  <link rel="canonical" href="${escapeHtml(canonical)}"/>\n</head>`);
  else html = html.replace(/<link\s+rel=["']canonical["'][^>]*>/i, `<link rel="canonical" href="${escapeHtml(canonical)}"/>`);
  const pathname = route;
  const markup = renderToString(createElement(App, {pathname, search:''}));
  html = html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
  const schema = [orgSchema, {'@context':'https://schema.org','@type':'WebPage','name':title,'description':description,'url':canonical,'isPartOf':{'@type':'WebSite','name':'AGRONEX CROP CARE','url':siteUrl}}];
  const product = routeProduct;
  if (product) {
    schema.push({'@context':'https://schema.org','@type':'Product','name':product.name,'description':`${product.benefit}. Suitable crops: ${product.crops}. Targets: ${product.target}.`,'category':product.category,'image':`${siteUrl}/assets/products/${product.image}.png`,'brand':{'@type':'Brand','name':'AGRONEX CROP CARE'},'additionalProperty':[
      {'@type':'PropertyValue','name':'Formulation','value':product.formula},
      {'@type':'PropertyValue','name':'Suitable crops','value':product.crops},
      {'@type':'PropertyValue','name':'Targets','value':product.target},
      {'@type':'PropertyValue','name':'Dose per 15L water','value':product.dose},
      {'@type':'PropertyValue','name':'Pack sizes','value':product.pack}
    ]});
    schema.push({'@context':'https://schema.org','@type':'BreadcrumbList','itemListElement':[
      {'@type':'ListItem','position':1,'name':'Home','item':siteUrl},
      {'@type':'ListItem','position':2,'name':'Products','item':`${siteUrl}/products`},
      {'@type':'ListItem','position':3,'name':product.name,'item':canonical}
    ]});
  }
  const category = categoryData.find(([name]) => route === `/products/${name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'')}`);
  if (category) {
    schema.push({'@context':'https://schema.org','@type':'BreadcrumbList','itemListElement':[
      {'@type':'ListItem','position':1,'name':'Home','item':siteUrl},
      {'@type':'ListItem','position':2,'name':'Products','item':`${siteUrl}/products`},
      {'@type':'ListItem','position':3,'name':category[0],'item':canonical}
    ]});
  }
  const jsonLd = schema.map((item,index) => `<script${index===0?' id="agronex-structured-data"':''} type="application/ld+json">${JSON.stringify(item).replaceAll('<','\\u003c')}</script>`).join('');
  html = html.replace('</head>', `${jsonLd}\n</head>`);
  const destination = new URL(route === '/' ? 'index.html' : `${route.slice(1)}/index.html`, output);
  await mkdir(new URL('./', destination), {recursive: true});
  await writeFile(destination, html);
}
await ssr.close();

const xmlEscape = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const entries = pages.map(([route]) => `  <url>\n    <loc>${xmlEscape(new URL(route, siteUrl).href)}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`).join('\n');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
await writeFile(new URL('sitemap.xml', output), sitemap);

const robotsPath = new URL('robots.txt', output);
let robots = await readFile(robotsPath, 'utf8').catch(() => 'User-agent: *\nAllow: /\n');
robots = robots.replace(/^Sitemap:.*\n?/gmi, '').trimEnd();
await writeFile(robotsPath, `${robots}\nSitemap: ${siteUrl}/sitemap.xml\n`);
console.log(`Generated search metadata and sitemap for ${pages.length} routes: ${siteUrl}/sitemap.xml`);
