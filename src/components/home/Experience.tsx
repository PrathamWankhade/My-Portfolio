import { experience, leadership } from "@/data/experience";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-heading" className="border-t scroll-mt-20" style={{ borderColor: "var(--line)" }}>
      <Container className="py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <SectionHeading
              eyebrow="Experience"
              title="Internships and team leadership."
              copy="Two engineering internships plus academic team leadership."
            />
            <span id="exp-heading" className="sr-only">
              Experience
            </span>
          </div>
          <ol className="relative space-y-10 border-l pl-8 sm:pl-10" style={{ borderColor: "var(--line-strong)" }}>
            {experience.map((e) => (
              <li key={e.employer} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-1.5 -left-8 block h-2.5 w-2.5 rounded-full sm:-left-10 sm:translate-x-[-3px]"
                  style={{ background: "var(--accent)", marginLeft: "-5px" }}
                />
                <p className="font-mono text-xs tracking-wide" style={{ color: "var(--muted)" }}>
                  {e.dates}
                </p>
                <h3 className="display mt-2 text-2xl font-extrabold">{e.employer}</h3>
                <p className="mt-0.5 font-medium" style={{ color: "var(--ink-dim)" }}>
                  {e.role}
                </p>
                <ul className="mt-3 max-w-xl space-y-2 leading-relaxed" style={{ color: "var(--ink-dim)" }}>
                  {e.points.map((p) => (
                    <li key={p.slice(0, 28)}>{p}</li>
                  ))}
                </ul>
                <p className="mt-3 text-sm" style={{ color: "var(--muted)" }}>
                  {e.tags.join("  ·  ")}
                </p>
              </li>
            ))}
            <li className="relative">
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-8 block h-2.5 w-2.5 rounded-full border-2 sm:-left-10 sm:translate-x-[-3px]"
                style={{ borderColor: "var(--accent)", marginLeft: "-5px" }}
              />
              <h3 className="display text-xl font-bold">{leadership.title}</h3>
              <p className="mt-2 max-w-xl leading-relaxed" style={{ color: "var(--ink-dim)" }}>
                {leadership.note}
              </p>
            </li>
          </ol>
        </div>
      </Container>
    </section>
  );
}
