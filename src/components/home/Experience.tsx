import { Briefcase } from "lucide-react";
import { experience, leadership } from "@/data/experience";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-heading" className="border-t scroll-mt-20" style={{ borderColor: "var(--line)" }}>
      <Container className="py-14 sm:py-20">
        <SectionHeading
          index="03"
          eyebrow="Experience"
          title="Internships and team leadership."
          copy="Two engineering internships plus academic team leadership."
        />
        <span id="exp-heading" className="sr-only">
          Experience
        </span>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {experience.map((e) => (
            <article
              key={e.employer}
              className="card-hover rounded-xl border p-6 sm:p-7"
              style={{ borderColor: "var(--line)", background: "var(--surface)" }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border"
                  style={{ borderColor: "var(--line-strong)", color: "var(--accent)" }}
                >
                  <Briefcase size={17} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="display text-lg font-bold">{e.employer}</h3>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>
                    {e.role} · {e.dates}
                  </p>
                </div>
              </div>
              <ul className="mt-4 space-y-2.5 text-[0.95rem] leading-relaxed" style={{ color: "var(--ink-dim)" }}>
                {e.points.map((p) => (
                  <li key={p.slice(0, 28)} className="flex gap-3">
                    <span aria-hidden="true" style={{ color: "var(--accent)" }}>
                      —
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${e.employer} tags`}>
                {e.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border px-3 py-1 font-mono text-[11px]"
                    style={{ borderColor: "var(--line)", color: "var(--muted)" }}
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p
          className="mt-6 rounded-xl border p-5 text-[0.95rem] leading-relaxed"
          style={{ borderColor: "var(--line)", background: "var(--surface)", color: "var(--ink-dim)" }}
        >
          <strong style={{ color: "var(--ink)" }}>{leadership.title}.</strong> {leadership.note}
        </p>
      </Container>
    </section>
  );
}
