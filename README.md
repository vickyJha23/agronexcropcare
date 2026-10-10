# AGRONEX CROP CARE

Responsive React website for AGRONEX CROP CARE. Built with Vite, Tailwind CSS, Lucide icons, and custom responsive CSS.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```bash
npm install
npm run dev
```

Vite prints the local development URL after startup.

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Netlify

Netlify is configured in `netlify.toml` to run `npm run build`, publish `dist`, and serve the app for direct React Router URLs.

## Site pages

- `/` — Homepage
- `/about` — Company and leadership
- `/products` — Full 17-product catalog with category and crop filters; selecting a card opens product details
- `/products/:slug` — Direct product detail pages for products shown in the catalog
- `/crop-solutions` — Crop-focused information
- `/dealer-network` — Dealer enquiries
- `/contact` — Contact details and social links

Product details and pack images use the provided AGRONEX materials. Photography and video are stored locally in `public/assets`, so page visuals do not depend on third-party image links. Contact and dealer enquiry forms open a prepared WhatsApp message for the visitor to review and send. Typefaces load from Google Fonts with system fallbacks.

## Search indexing setup

`RouteMetadata` sets page titles, descriptions, canonicals, Open Graph and Twitter metadata, and JSON-LD in the browser. The static `public/sitemap.xml` lists public routes and `public/robots.txt` points crawlers to it. Update both files when routes are added or removed. The canonical domain is `https://www.agronexcropcare.com`. Submit `/sitemap.xml` in Google Search Console after deployment.

### Google Search Console

1. Add the production site as a Domain property (recommended) and verify ownership through the DNS TXT record Google supplies. A URL-prefix property can instead be verified using its HTML tag or file method.
2. In Search Console, open **Sitemaps**, enter `sitemap.xml`, and submit it.
3. Use **URL Inspection** on the homepage, `/products`, and representative product pages. Request indexing after confirming Google can fetch the page and sees the intended canonical.
4. Review Page indexing, Core Web Vitals, and enhancement reports as data becomes available. Keep the sitemap's domain aligned with the verified canonical production domain.

### Search intent and keyword focus

- **Core topics:** crop protection products, crop-care products, and agricultural products for Indian farming.
- **Category topics:** insecticides, fungicides, herbicides, and crop growth solutions, each with its own category route.
- **Specific searches:** product name plus its listed formulation; product name plus a suitable crop or target; crop-specific product discovery using the catalog filters.
- **Local intent:** AGRONEX crop-care products and dealer enquiries in Sirsa/Haryana, used on the company and contact pages where the location is relevant.

The current catalog does not list a fertilizer product category, so the site does not claim to be a fertilizer manufacturer or target that phrase as a product page. Add that category only when supported by published product information.

In Bing Webmaster Tools, verify the same production domain and submit the same `/sitemap.xml` URL. In Netlify, enable HTTPS and force HTTPS redirects for the production domain so it matches the generated canonical URLs.
