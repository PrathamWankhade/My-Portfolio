import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-heading" className="border-t scroll-mt-20" style={{ borderColor: "var(--line)" }}>
      <Container className="py-14 sm:py-20">
        <div className="max-w-2xl">
          <SectionHeading
            eyebrow="Selected work"
            title="Evidence before explanation."
            copy="Four systems, four engineering questions. Open any project for the full case study."
          />
        </div>
        <span id="work-heading" className="sr-only">
          Selected work
        </span>
        <div className="mt-12 space-y-14 sm:space-y-20">
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
