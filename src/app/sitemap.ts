import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.baseUrl;
  return [
    { url: `${base}/`, lastModified: new Date() },
    ...projects.map((p) => ({
      url: `${base}/work/${p.slug}`,
      lastModified: new Date(),
    })),
  ];
}
