import { skillGroups } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <section aria-labelledby="skills-heading" className="border-t" style={{ borderColor: "var(--line)" }}>
      <Container className="py-14 sm:py-20">
        <div className="max-w-2xl">
          <SectionHeading
            eyebrow="Skills"
            title="A working toolkit."
            copy="Only source-supported technologies — grouped by where they get used, with no proficiency scores."
          />
        </div>
        <span id="skills-heading" className="sr-only">
          Skills
        </span>
        <dl className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {skillGroups.map((g) => (
            <div key={g.label} className="border-t pt-5" style={{ borderColor: "var(--line)" }}>
              <dt className="display text-xl font-bold">{g.label}</dt>
              <dd className="mt-2 leading-loose" style={{ color: "var(--ink-dim)" }}>
                {g.items.join("  ·  ")}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
