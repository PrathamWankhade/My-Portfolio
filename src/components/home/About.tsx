import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

const principles = [
  "Understand constraints before choosing tools.",
  "Design architecture so failure states are explicit.",
  "Implement reliable workflows with reviewable outputs.",
  "Validate assumptions, then iterate in the open.",
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-t scroll-mt-20" style={{ borderColor: "var(--line)" }}>
      <Container className="py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="About" title={profile.aboutHeading} />
            <span id="about-heading" className="sr-only">
              About
            </span>
            <div className="mt-6 max-w-xl space-y-4 text-[1.05rem] leading-relaxed" style={{ color: "var(--ink-dim)" }}>
              {profile.aboutCopy.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <p className="mt-6 text-[0.95rem]" style={{ color: "var(--muted)" }}>
              Based in Amravati, Maharashtra · B.Tech IT ’26 · Working across applied AI, security and systems.
            </p>
          </div>
          <div className="lg:pt-24">
            <h3 className="text-sm font-bold uppercase tracking-[0.18em]" style={{ color: "var(--accent)" }}>
              How I work
            </h3>
            <ol className="mt-4 space-y-4">
              {principles.map((step, i) => (
                <li key={step} className="flex gap-4 border-t pt-4" style={{ borderColor: "var(--line)" }}>
                  <span className="serif-accent text-xl" style={{ color: "var(--accent)" }} aria-hidden="true">
                    {i + 1}
                  </span>
                  <span className="text-[1.02rem] leading-relaxed" style={{ color: "var(--ink-dim)" }}>
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
