import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { education, recognition, researchNote } from "@/data/education";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section aria-labelledby="edu-heading" className="border-t" style={{ borderColor: "var(--line)" }}>
      <Container className="py-14 sm:py-20">
        <div className="max-w-2xl">
          <SectionHeading
            eyebrow="Education & recognition"
            title="Degree, training and recognition."
            copy="Engineering degree, applied training programmes and hackathon recognition."
          />
        </div>
        <span id="edu-heading" className="sr-only">
          Education and recognition
        </span>

        <div className="mt-10 max-w-3xl">
          <h3 className="display text-3xl font-extrabold leading-tight sm:text-4xl">{education.degree}</h3>
          <p className="mt-3 text-[1.05rem] leading-relaxed" style={{ color: "var(--ink-dim)" }}>
            {education.college}
            <br />
            Affiliated with {education.university}
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4">
            {[
              ["Program", "Information Technology"],
              ["Session", education.session],
              ["Classification", education.grade],
              ["Affiliation", "RTM Nagpur University"],
            ].map(([term, value]) => (
              <div key={term} className="border-t pt-3" style={{ borderColor: "var(--line)" }}>
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: "var(--muted)" }}>
                  {term}
                </dt>
                <dd className="mt-1.5 font-semibold leading-snug">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.18em]" style={{ color: "var(--accent)" }}>
              Recognition & training
            </h4>
            <ul className="mt-2 divide-y" style={{ borderColor: "var(--line)" }}>
              {recognition.map((r) => (
                <li key={r.title} className="border-t py-4 first:border-t-0" style={{ borderColor: "var(--line)" }}>
                  <p className="font-semibold leading-snug">{r.title}</p>
                  <p className="mt-1 text-[0.95rem]" style={{ color: "var(--muted)" }}>
                    {r.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.18em]" style={{ color: "var(--accent)" }}>
              Research
            </h4>
            <div className="border-t py-4" style={{ borderColor: "var(--line)" }}>
              <p className="font-semibold leading-snug">{researchNote.title}</p>
              <p className="mt-1 max-w-md text-[0.95rem] leading-relaxed" style={{ color: "var(--muted)" }}>
                {researchNote.detail}
              </p>
              <Link
                href="https://github.com/PrathamWankhade/FaceSnap"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline mt-3 inline-flex min-h-[44px] items-center gap-1.5 text-[0.95rem] font-bold"
                style={{ color: "var(--ink)" }}
              >
                FaceSnap repository <ArrowUpRight size={15} aria-hidden="true" style={{ color: "var(--accent)" }} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
