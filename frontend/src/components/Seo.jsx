import { useEffect } from "react";
import { siteConfig, isSet } from "@/config/site";

const upsertMeta = (attr, key, content) => {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const upsertLink = (rel, href) => {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

/**
 * Manages per-page document title, meta, canonical, Open Graph, and optional
 * JSON-LD structured data blocks.
 */
export default function Seo({ title, description, path = "/", jsonLd = [] }) {
  useEffect(() => {
    document.title = title;
    upsertMeta("name", "description", description);

    const base = isSet(siteConfig.domain) ? siteConfig.domain.replace(/\/$/, "") : "";
    const canonical = base ? `${base}${path}` : null;
    if (canonical) upsertLink("canonical", canonical);

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", siteConfig.businessName);
    if (canonical) upsertMeta("property", "og:url", canonical);
    if (isSet(siteConfig.socialImage)) upsertMeta("property", "og:image", siteConfig.socialImage);
    upsertMeta("name", "twitter:card", isSet(siteConfig.socialImage) ? "summary_large_image" : "summary");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);

    const nodes = [];
    (jsonLd || []).forEach((data, i) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.setAttribute("data-seo-jsonld", String(i));
      s.text = JSON.stringify(data);
      document.head.appendChild(s);
      nodes.push(s);
    });

    return () => nodes.forEach((n) => n.remove());
  }, [title, description, path, jsonLd]);

  return null;
}

export const orgJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.businessName,
  description:
    "Framework X Flow designs practical workflows, documentation, operating systems, and knowledge structures for established owner-led service businesses.",
  slogan: siteConfig.tagline,
  areaServed: siteConfig.serviceArea,
  founder: { "@type": "Person", name: siteConfig.founderName },
  ...(isSet(siteConfig.domain) ? { url: siteConfig.domain } : {}),
  ...(isSet(siteConfig.contactEmail) ? { email: siteConfig.contactEmail } : {}),
});

export const faqJsonLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});
