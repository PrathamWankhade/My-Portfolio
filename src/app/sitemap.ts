import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.baseUrl;
  // No lastModified: no trustworthy per-route modification date is available,
  // and stamping every route with the current time would be misleading.
  return [
    { url: `${base}/` },
    ...projects.map((p) => ({
      url: `${base}/work/${p.slug}`,
    })),
  ];
}
