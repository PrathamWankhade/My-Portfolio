import type { Metadata } from "next";
import { getProject, projects } from "@/data/projects";
import { ProjectCaseStudy } from "@/components/projects/ProjectCaseStudy";
import { siteConfig } from "@/lib/metadata";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Not found" };
  return {
    title: `${project.title} — Pratham Wankhade`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Pratham Wankhade`,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  void siteConfig;
  return <ProjectCaseStudy slug={slug} />;
}
