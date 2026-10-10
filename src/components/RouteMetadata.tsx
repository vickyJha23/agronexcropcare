import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { products, categories, categorySlug, productDescription, categoryDescription } from "../data/catalog.ts";

export function RouteMetadata() {
  const location = useLocation();
  const path = decodeURI(location.pathname).replace(/\/$/, "") || "/";
  const slug = path.startsWith("/products/") ? path.split("/").pop() : "";
  const product = products.find((item) => item.slug === slug);
  const category = categories.find(([name]) => path === "/products/" + categorySlug(name))?.[0] || null;
  const titles: Record<string, string> = {
    "/": "AGRONEX Crop Care | Agricultural Crop Protection in Haryana",
    "/about": "About AGRONEX | Crop Care Company in Haryana",
    "/products": "Agricultural Crop Protection Products | AGRONEX",
    "/crop-solutions": "Crop Solutions for Indian Agriculture | AGRONEX",
    "/dealer-network": "Become an AGRONEX Dealer | Dealer Enquiries",
    "/contact": "Contact AGRONEX Crop Care | Haryana",
  };
  const descriptions: Record<string, string> = {
    "/": "Explore AGRONEX crop protection products, crop-care solutions and dealer opportunities from Sirsa, Haryana, India.",
    "/about":
      "Meet AGRONEX Crop Care’s founder and managing director. Learn about our farmer-focused agricultural solutions from Sirsa, Haryana.",
    "/products":
      "Browse AGRONEX insecticides, fungicides, herbicides and crop growth solutions with product formulations, crop fit and pack sizes.",
    "/crop-solutions":
      "Explore AGRONEX crop-care products for cotton, wheat, paddy, soybean, mustard, chilli, tomato and other crops.",
    "/dealer-network":
      "Apply to become an AGRONEX dealer. Share your agricultural business details and service area with our team.",
    "/contact":
      "Contact AGRONEX CROP CARE in Sirsa, Haryana for product information, dealer enquiries and business support.",
  };
  const missing = !titles[path] && !product && !category;

  useEffect(() => {
    const origin = __SITE_URL__ || window.location.origin;
    let title: string;
    let shareImage = `${origin}/assets/agronex-hero.jpg`;
    let description: string;

    switch (true) {
      case product !== undefined:
        title = `${product!.name} | AGRONEX Crop Care`;
        shareImage = `${origin}/assets/products/${product!.image}.${product!.imageExt || "png"}`;
        description = productDescription(product!);
        break;
      case category !== null:
        title = `${category} Products | AGRONEX Crop Care`;
        description = categoryDescription(category!);
        break;
      case missing:
        title = "Page not found | AGRONEX Crop Care";
        description = "The requested AGRONEX page could not be found. Return to the homepage to explore products and company information.";
        break;
      default:
        title = titles[path];
        description = descriptions[path];
    }
    document.title = title;
    const setMeta = (selector, attrs, content) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        Object.entries(attrs).forEach(([key, value]) =>
          el.setAttribute(key, value),
        );
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta('meta[name="description"]', { name: "description" }, description);
    setMeta(
      'meta[name="robots"]',
      { name: "robots" },
      missing ? "noindex, nofollow" : "index, follow",
    );
    setMeta('meta[property="og:title"]', { property: "og:title" }, title);
    setMeta(
      'meta[property="og:description"]',
      { property: "og:description" },
      description,
    );
    setMeta('meta[property="og:type"]', { property: "og:type" }, "website");
    setMeta(
      'meta[property="og:site_name"]',
      { property: "og:site_name" },
      "AGRONEX CROP CARE",
    );
    setMeta('meta[property="og:locale"]', { property: "og:locale" }, "en_IN");
    setMeta(
      'meta[property="og:url"]',
      { property: "og:url" },
      `${origin}${path}`,
    );
    setMeta('meta[property="og:image"]', { property: "og:image" }, shareImage);
    setMeta(
      'meta[property="og:image:alt"]',
      { property: "og:image:alt" },
      product
        ? `${product.name} product pack from AGRONEX CROP CARE`
        : "AGRONEX CROP CARE agricultural solutions",
    );
    setMeta(
      'meta[name="twitter:card"]',
      { name: "twitter:card" },
      "summary_large_image",
    );
    setMeta('meta[name="twitter:title"]', { name: "twitter:title" }, title);
    setMeta(
      'meta[name="twitter:description"]',
      { name: "twitter:description" },
      description,
    );
    setMeta(
      'meta[name="twitter:image"]',
      { name: "twitter:image" },
      shareImage,
    );
    setMeta(
      'meta[name="twitter:image:alt"]',
      { name: "twitter:image:alt" },
      product
        ? `${product.name} product pack from AGRONEX CROP CARE`
        : "AGRONEX CROP CARE agricultural solutions",
    );
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${origin}${path}`;
    let structured = document.getElementById("agronex-structured-data") as HTMLScriptElement | null;
    if (!structured) {
      structured = document.createElement("script");
      structured.id = "agronex-structured-data";
      structured.type = "application/ld+json";
      document.head.appendChild(structured);
    }
    structured.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${origin}/#organization`,
      name: "AGRONEX CROP CARE",
      url: origin,
      logo: `${origin}/assets/agronex-logo.png`,
      telephone: "+91 77340 76003",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Plot No. 2937, Village: DTR, LGD Code: 32753",
        addressLocality: "Sirsa",
        addressRegion: "Haryana",
        postalCode: "125076",
        addressCountry: "IN",
      },
      sameAs: ["https://www.instagram.com/agronex_crop_care/"],
    });
  }, [path, product, category, missing]);

  return null;
}
