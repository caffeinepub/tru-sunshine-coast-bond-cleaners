import { useEffect } from "react";

interface MetaTagsOptions {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

export function useMetaTags({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage = "/assets/generated/hero-bond-cleaning-sunshine-coast.dim_1200x600.jpg",
  ogType = "website",
  canonical,
}: MetaTagsOptions) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", ogTitle ?? title, true);
    setMeta("og:description", ogDescription ?? description, true);
    setMeta("og:image", ogImage, true);
    setMeta("og:type", ogType, true);
    setMeta("twitter:title", ogTitle ?? title);
    setMeta("twitter:description", ogDescription ?? description);
    setMeta("twitter:image", ogImage);
    setMeta("twitter:card", "summary_large_image");

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }
  }, [title, description, ogTitle, ogDescription, ogImage, ogType, canonical]);
}
