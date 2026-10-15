import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-heading" className="border-t scroll-mt-20" style={{ borderColor: "var(--line)" }}>
      <Container className="py-14 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            index="02"
            eyebrow="Selected work"
            title="Four systems, four engineering questions."
            copy="Each build pairs a working prototype with a case study that states what it does, what it doesn't claim, and what comes next."
          />
        </div>
        <span id="work-heading" className="sr-only">
          Selected work
        </span>
        <div className="mt-10 space-y-6">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.slug}
              project={p}
              variant={i === 0 ? "feature" : "split"}
              flip={i % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
