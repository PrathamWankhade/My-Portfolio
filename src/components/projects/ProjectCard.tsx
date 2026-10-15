import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { ProjectMedia } from "./ProjectMedia";

function Meta({ project }: { project: Project }) {
  return (
    <div>
      <ul className="flex flex-wrap gap-2" aria-label="Key technologies">
        {project.cardStack.map((t) => (
          <li
            key={t}
            className="rounded-full border px-3 py-1 font-mono text-[11px] tracking-wide"
            style={{ borderColor: "var(--line)", color: "var(--muted)" }}
          >
            {t}
          </li>
        ))}
      </ul>
      <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: "var(--muted)" }}>
        {project.status}
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={`/work/${project.slug}`}
          className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full px-5 text-sm font-semibold text-[#111315]"
          style={{ background: "var(--accent)" }}
        >
          Case study <ArrowRight size={15} aria-hidden="true" />
        </Link>
        <Link
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full border px-5 text-sm font-semibold"
          style={{ borderColor: "var(--line-strong)", color: "var(--ink)" }}
        >
          <GithubIcon size={15} /> Repository <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

function Heading({ project }: { project: Project }) {
  return (
    <div>
      <p className="mono-label" style={{ color: "var(--muted)" }}>
        <span style={{ color: "var(--accent)" }}>{project.index}</span> — {project.category}
      </p>
      <h3 id={`project-${project.slug}`} className="display mt-3 text-2xl font-bold sm:text-[1.7rem]">
        {project.title}
      </h3>
      <p className="mt-3 leading-relaxed" style={{ color: "var(--ink-dim)" }}>
        {project.summary}
      </p>
      <p
        className="mt-4 border-l-2 pl-4 text-[0.95rem] font-medium leading-relaxed"
        style={{ borderColor: "var(--accent)", color: "var(--ink)" }}
      >
        {project.signal}
      </p>
    </div>
  );
}

/**
 * Two rhythms, one system. The lead project gets a full-width feature layout;
 * the rest use alternating splits — variation is intentional, not decorative.
 */
export function ProjectCard({
  project,
  variant = "split",
  flip = false,
}: {
  project: Project;
  variant?: "feature" | "split";
  flip?: boolean;
}) {
  if (variant === "feature") {
    return (
      <article
        className="card-hover overflow-hidden rounded-2xl border"
        style={{ borderColor: "var(--line)", background: "var(--surface)" }}
        aria-labelledby={`project-${project.slug}`}
      >
        <div className="p-6 pb-0 sm:p-8 sm:pb-0">
          <ProjectMedia project={project} />
        </div>
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <Heading project={project} />
          <Meta project={project} />
        </div>
      </article>
    );
  }

  return (
    <article
      className="card-hover grid gap-6 overflow-hidden rounded-2xl border p-6 sm:p-8 lg:grid-cols-2 lg:gap-10"
      style={{ borderColor: "var(--line)", background: "var(--surface)" }}
      aria-labelledby={`project-${project.slug}`}
    >
      <div className={flip ? "lg:order-2" : ""}>
        <Heading project={project} />
        <div className="mt-2">
          <Meta project={project} />
        </div>
      </div>
      <div className={flip ? "lg:order-1" : ""}>
        <ProjectMedia project={project} />
      </div>
    </article>
  );
}
