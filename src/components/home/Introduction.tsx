import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const strips = [
  {
    title: "Applied intelligence",
    copy: "NLP, vision and evaluation carried into working features.",
  },
  {
    title: "Security engineering",
    copy: "Phishing and intrusion analysis with visible evidence.",
  },
  {
    title: "Systems & product",
    copy: "Offline-first messaging, APIs and deployable prototypes.",
  },
];

/**
 * Compact expertise strip: three disciplines in one divider row. It shortens
 * the path to selected work instead of delaying it behind large cards.
 */
export function Introduction() {
  return (
    <section aria-labelledby="intro-heading" className="border-t" style={{ borderColor: "var(--line)" }}>
      <Container className="py-10 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <SectionHeading
            index="01"
            eyebrow="Focus"
            title="Three disciplines, one practice."
          />
          <p className="max-w-xl leading-relaxed lg:justify-self-end" style={{ color: "var(--ink-dim)" }}>
            Model-driven intelligence, evidence-first security, and systems that
            work offline — carried from architecture to working prototype.
          </p>
        </div>
        <span id="intro-heading" className="sr-only">
          Areas of focus
        </span>
        <dl
          className="mt-8 grid gap-px overflow-hidden rounded-xl border sm:grid-cols-3"
          style={{ borderColor: "var(--line)", background: "var(--line)" }}
        >
          {strips.map((s, i) => (
            <div key={s.title} className="p-5 sm:p-6" style={{ background: "var(--surface)" }}>
              <dt className="mono-label" style={{ color: "var(--muted)" }}>
                {String(i + 1).padStart(2, "0")}
              </dt>
              <dd className="display mt-2 text-[1.05rem] font-bold">{s.title}</dd>
              <dd className="mt-1.5 text-[0.92rem] leading-relaxed" style={{ color: "var(--ink-dim)" }}>
                {s.copy}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
