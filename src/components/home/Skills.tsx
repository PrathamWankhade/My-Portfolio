import { skillGroups } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <section aria-labelledby="skills-heading" className="border-t" style={{ borderColor: "var(--line)" }}>
      <Container className="py-14 sm:py-20">
        <SectionHeading
          index="06"
          eyebrow="Skills"
          title="Grouped capabilities, honestly scoped."
          copy="Only source-supported technologies. No percentage bars or invented proficiency scores."
        />
        <span id="skills-heading" className="sr-only">
          Skills
        </span>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <article
              key={g.label}
              className="rounded-xl border p-6"
              style={{ borderColor: "var(--line)", background: "var(--surface)" }}
            >
              <h3 className="mono-label" style={{ color: "var(--accent)" }}>
                {g.label}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-full px-3 py-1.5 text-[0.88rem] font-medium"
                    style={{ background: "var(--surface-2)", color: "var(--ink-dim)" }}
                  >
                    {s}
                  </li>
                ))}
              </ul>
              {g.note ? (
                <p className="mt-3 text-xs" style={{ color: "var(--muted)" }}>
                  {g.note}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
