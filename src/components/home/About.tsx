import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-t scroll-mt-20" style={{ borderColor: "var(--line)" }}>
      <Container className="py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              index="05"
              eyebrow="About"
              title={profile.aboutHeading}
            />
            <dl
              className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-xl border sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3"
              style={{ borderColor: "var(--line)", background: "var(--line)" }}
            >
              {[
                ["Location", "Amravati, Maharashtra, IN"],
                ["Focus", "Applied AI · Security · Systems"],
                ["Degree", "B.Tech IT · 2026"],
              ].map(([term, value]) => (
                <div key={term} className="p-4" style={{ background: "var(--surface)" }}>
                  <dt className="mono-label" style={{ color: "var(--muted)" }}>
                    {term}
                  </dt>
                  <dd className="mt-1.5 text-[0.9rem] font-semibold leading-snug">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="space-y-4 leading-relaxed" style={{ color: "var(--ink-dim)" }}>
            <span id="about-heading" className="sr-only">
              About
            </span>
            {profile.aboutCopy.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <ol
              className="mt-6 space-y-3 rounded-xl border p-6"
              style={{ borderColor: "var(--line)", background: "var(--surface)" }}
            >
              {[
                "Understand constraints before choosing tools.",
                "Design architecture so failure states are explicit.",
                "Implement reliable workflows with reviewable outputs.",
                "Validate assumptions, then iterate in the open.",
              ].map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="font-mono text-sm font-bold" style={{ color: "var(--accent)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
