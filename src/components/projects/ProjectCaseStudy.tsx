import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { getProject, projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { notFound } from "next/navigation";

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <section aria-label={title} className="border-t pt-6" style={{ borderColor: "var(--line)" }}>
      <h2 className="mono-label" style={{ color: "var(--accent)" }}>
        {title}
      </h2>
      <ul className="mt-3 space-y-2.5 leading-relaxed" style={{ color: "var(--ink-dim)" }}>
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span aria-hidden="true" style={{ color: "var(--accent)" }}>
              —
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ProjectCaseStudy({ slug }: { slug: string }) {
  const project = getProject(slug);
  if (!project) notFound();
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <Container className="py-12 sm:py-16">
      <nav aria-label="Breadcrumb" className="mb-8">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-sm font-medium"
          style={{ color: "var(--muted)" }}
        >
          <ArrowLeft size={15} aria-hidden="true" /> Selected work
        </Link>
      </nav>

      <p className="mono-label" style={{ color: "var(--muted)" }}>
        <span style={{ color: "var(--accent)" }}>{project.index}</span> — {project.category} · {project.status}
      </p>
      <h1 className="display mt-3 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--ink-dim)" }}>
        {project.summary}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full px-5 text-sm font-semibold text-[#111315]"
          style={{ background: "var(--accent)" }}
        >
          <GithubIcon size={15} /> View repository <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </div>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technology stack">
        {project.stack.map((t) => (
          <li
            key={t}
            className="rounded-full border px-3 py-1 font-mono text-[11px]"
            style={{ borderColor: "var(--line)", color: "var(--muted)" }}
          >
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <div>
          <ProjectVisual project={project} />
          <section aria-label="Overview" className="mt-8">
            <h2 className="mono-label" style={{ color: "var(--accent)" }}>
              Overview & motivation
            </h2>
            <p className="mt-3 leading-relaxed" style={{ color: "var(--ink-dim)" }}>
              {project.motivation}
            </p>
          </section>
          <div className="mt-8 space-y-8">
            <Block title="Goals & constraints" items={project.goals} />
            <Block title="Architecture" items={project.architecture} />
            <Block title="Implementation decisions" items={project.decisions} />
            <Block title="Key workflows" items={project.workflows} />
          </div>
        </div>
        <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
          <section
            aria-label="Validation"
            className="rounded-xl border p-6"
            style={{ borderColor: "var(--line)", background: "var(--surface)" }}
          >
            <h2 className="mono-label" style={{ color: "var(--accent)" }}>
              Validation
            </h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed" style={{ color: "var(--ink-dim)" }}>
              {project.validation}
            </p>
          </section>
          <Block title="Limitations & trade-offs" items={project.limitations} />
          <Block title="Future directions" items={project.future} />
        </aside>
      </div>

      <nav
        aria-label="Next project"
        className="mt-16 flex items-center justify-between rounded-2xl border p-6 sm:p-8"
        style={{ borderColor: "var(--line)", background: "var(--surface)" }}
      >
        <div>
          <p className="mono-label" style={{ color: "var(--muted)" }}>
            Next — {next.index} / {next.category}
          </p>
          <p className="display mt-1 text-2xl font-bold">{next.title}</p>
        </div>
        <Link
          href={`/work/${next.slug}`}
          className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full px-5 text-sm font-semibold text-[#111315]"
          style={{ background: "var(--accent)" }}
        >
          Open <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </nav>
    </Container>
  );
}
