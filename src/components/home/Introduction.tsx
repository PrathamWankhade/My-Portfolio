import { BrainCircuit, Boxes, Lock, Rocket } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const blocks = [
  {
    icon: BrainCircuit,
    title: "Applied intelligence",
    copy: "Model-driven features — NLP, vision and evaluation — wired into software people can actually use.",
  },
  {
    icon: Lock,
    title: "Security engineering",
    copy: "Phishing and intrusion analysis with evidence-first presentation and honest limits.",
  },
  {
    icon: Boxes,
    title: "Systems & communication",
    copy: "Offline-first design: local persistence, BLE discovery, queueing and multi-hop routing.",
  },
  {
    icon: Rocket,
    title: "Product engineering",
    copy: "Full-stack delivery — APIs, interfaces and deployable prototypes with typed, editable content.",
  },
];

export function Introduction() {
  return (
    <section aria-labelledby="intro-heading" className="border-t" style={{ borderColor: "var(--line)" }}>
      <Container className="py-14 sm:py-20">
        <SectionHeading
          index="01"
          eyebrow="Introduction"
          title="Different disciplines. One engineering mindset."
        />
        <p id="intro-heading" className="sr-only">
          Introduction
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed" style={{ color: "var(--ink-dim)" }}>
          I approach problems by combining model-driven intelligence, reliable software architecture and
          a practical understanding of the systems that connect them.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {blocks.map((b) => (
            <article
              key={b.title}
              className="card-hover rounded-xl border p-6"
              style={{ borderColor: "var(--line)", background: "var(--surface)" }}
            >
              <b.icon size={20} aria-hidden="true" style={{ color: "var(--accent)" }} />
              <h3 className="display mt-4 text-[1.05rem] font-bold">{b.title}</h3>
              <p className="mt-2 text-[0.92rem] leading-relaxed" style={{ color: "var(--ink-dim)" }}>
                {b.copy}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
