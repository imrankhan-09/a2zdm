import { useEffect } from "react";

/**
 * Reusable dynamic SEO hook for React.
 * Manages document.title, meta[name="description"], and link[rel="canonical"].
 * Ensures canonical domain is strictly https://a2zdm.com (never www).
 * Removes any duplicate meta description or canonical link tags.
 *
 * @param {Object} options
 * @param {string} options.title
 * @param {string} [options.description]
 * @param {string} [options.canonical]
 */
export function useSEO({ title, description, canonical }) {
  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = title;
    }

    // 2. Update/create exactly ONE meta[name="description"]
    if (description) {
      const metaTags = document.querySelectorAll('meta[name="description"]');
      if (metaTags.length > 1) {
        for (let i = 1; i < metaTags.length; i++) {
          metaTags[i].remove();
        }
      }
      let meta = metaTags[0];
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }

    // 3. Update/create exactly ONE link[rel="canonical"]
    if (canonical) {
      // Normalize domain: strictly https://a2zdm.com
      const cleanCanonical = canonical.replace(
        /^https?:\/\/(www\.)?a2zdm\.com/,
        "https://a2zdm.com"
      );

      const canonicalTags = document.querySelectorAll('link[rel="canonical"]');
      if (canonicalTags.length > 1) {
        for (let i = 1; i < canonicalTags.length; i++) {
          canonicalTags[i].remove();
        }
      }
      let link = canonicalTags[0];
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", cleanCanonical);
    }
  }, [title, description, canonical]);
}

export default useSEO;
