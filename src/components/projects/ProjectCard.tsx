import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { ProjectMedia } from "./ProjectMedia";

function Actions({ project }: { project: Project }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
      <Link
        href={`/work/${project.slug}`}
        className="link-underline inline-flex min-h-[44px] items-center gap-1.5 text-[0.95rem] font-bold"
        style={{ color: "var(--ink)" }}
      >
        Read case study <ArrowRight size={16} aria-hidden="true" style={{ color: "var(--accent)" }} />
      </Link>
      <Link
        href={project.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="link-underline inline-flex min-h-[44px] items-center gap-1.5 text-[0.95rem] font-semibold"
        style={{ color: "var(--muted)" }}
      >
        <GithubIcon size={15} /> Repository <ArrowUpRight size={14} aria-hidden="true" />
      </Link>
    </div>
  );
}

function TechLine({ project }: { project: Project }) {
  return (
    <p className="mt-5 text-[0.9rem]" style={{ color: "var(--muted)" }}>
      {project.cardStack.join("  ·  ")}
    </p>
  );
}

/**
 * Editorial showcase: one full-width feature, then open split rows divided
 * by hairlines — not four identical boxes. Metadata stays quiet so the
 * title, visual and signal carry the hierarchy.
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
      <article aria-labelledby={`project-${project.slug}`}>
        <ProjectMedia project={project} large />
        <p className="mono-label mt-6" style={{ color: "var(--muted)" }}>
          Featured · {project.index} — {project.category} · {project.status}
        </p>
        <h3
          id={`project-${project.slug}`}
          className="display mt-3 max-w-[20ch] text-balance text-3xl font-extrabold leading-[1.05] sm:text-[2.75rem]"
        >
          {project.title}
        </h3>
        <div className="mt-4 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <p className="text-[1.05rem] leading-relaxed" style={{ color: "var(--ink-dim)" }}>
              {project.summary}
            </p>
            <p className="mt-3 text-[1.05rem] font-medium leading-relaxed">{project.signal}</p>
          </div>
          <div className="lg:justify-self-end">
            <TechLine project={project} />
            <Actions project={project} />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      aria-labelledby={`project-${project.slug}`}
      className="grid gap-8 border-t pt-10 lg:grid-cols-2 lg:gap-12"
      style={{ borderColor: "var(--line)" }}
    >
      <div className={flip ? "lg:order-2" : ""}>
        <p className="mono-label" style={{ color: "var(--muted)" }}>
          {project.index} — {project.category} · {project.status}
        </p>
        <h3 id={`project-${project.slug}`} className="display mt-3 text-3xl font-extrabold leading-[1.05] sm:text-4xl">
          {project.title}
        </h3>
        <p className="mt-4 leading-relaxed" style={{ color: "var(--ink-dim)" }}>
          {project.summary}
        </p>
        <p className="mt-3 font-medium leading-relaxed">{project.signal}</p>
        <TechLine project={project} />
        <Actions project={project} />
      </div>
      <div className={flip ? "lg:order-1" : ""}>
        <ProjectMedia project={project} />
      </div>
    </article>
  );
}
