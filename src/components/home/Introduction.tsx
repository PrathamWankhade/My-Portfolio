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
 * Open editorial row: aligned text and thin dividers, no boxes.
 * Bridges the hero and selected work without competing with them.
 */
export function Introduction() {
  return (
    <section aria-labelledby="intro-heading" className="border-t" style={{ borderColor: "var(--line)" }}>
      <Container className="py-12 sm:py-16">
        <div className="max-w-2xl">
          <SectionHeading eyebrow="Focus" title="Three disciplines, one practice." />
          <span id="intro-heading" className="sr-only">
            Areas of focus
          </span>
        </div>
        <dl className="mt-8 grid gap-8 md:grid-cols-3 md:gap-6">
          {strips.map((s, i) => (
            <div
              key={s.title}
              className={i > 0 ? "md:border-l md:pl-6" : ""}
              style={{ borderColor: "var(--line)" }}
            >
              <dt className="display text-xl font-bold">{s.title}</dt>
              <dd className="mt-2 leading-relaxed" style={{ color: "var(--ink-dim)" }}>
                {s.copy}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
