import Link from "next/link";
import { ArrowUpRight, Award, FileText, GraduationCap } from "lucide-react";
import { education, recognition, researchNote } from "@/data/education";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section aria-labelledby="edu-heading" className="border-t" style={{ borderColor: "var(--line)" }}>
      <Container className="py-14 sm:py-20">
        <SectionHeading
          index="04"
          eyebrow="Education & recognition"
          title="Degree, training and recognition."
          copy="Engineering degree, applied training programmes and hackathon recognition."
        />
        <span id="edu-heading" className="sr-only">
          Education and recognition
        </span>

        <article
          className="mt-10 rounded-2xl border p-6 sm:p-8"
          style={{ borderColor: "var(--line)", background: "var(--surface)" }}
        >
          <div className="flex items-center gap-3">
            <GraduationCap size={20} aria-hidden="true" style={{ color: "var(--accent)" }} />
            <h3 className="display text-xl font-bold">{education.degree}</h3>
          </div>
          <p className="mt-2 leading-relaxed" style={{ color: "var(--ink-dim)" }}>
            {education.college} · Affiliated with {education.university}
          </p>
          <dl
            className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border lg:grid-cols-4"
            style={{ borderColor: "var(--line)", background: "var(--line)" }}
          >
            {[
              ["Program", "Information Technology"],
              ["Session", education.session],
              ["Classification", education.grade],
              ["Affiliation", "RTM Nagpur University"],
            ].map(([term, value]) => (
              <div key={term} className="p-4" style={{ background: "var(--bg)" }}>
                <dt className="mono-label" style={{ color: "var(--muted)" }}>
                  {term}
                </dt>
                <dd className="mt-1.5 text-[0.9rem] font-semibold leading-snug">{value}</dd>
              </div>
            ))}
          </dl>
        </article>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {recognition.map((r) => (
            <article
              key={r.title}
              className="rounded-xl border p-5"
              style={{ borderColor: "var(--line)", background: "var(--surface)" }}
            >
              <h3 className="flex items-center gap-2 font-semibold leading-snug">
                <Award size={16} aria-hidden="true" className="shrink-0" style={{ color: "var(--accent)" }} />
                {r.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {r.detail}
              </p>
            </article>
          ))}
        </div>

        <article
          className="mt-4 flex flex-col gap-3 rounded-xl border p-5 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: "var(--line)", background: "var(--surface)" }}
        >
          <div className="flex items-start gap-2">
            <FileText size={16} aria-hidden="true" className="mt-1 shrink-0" style={{ color: "var(--accent)" }} />
            <div>
              <h3 className="font-semibold">{researchNote.title}</h3>
              <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {researchNote.detail}
              </p>
            </div>
          </div>
          <Link
            href="https://github.com/PrathamWankhade/FaceSnap"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] shrink-0 items-center gap-1.5 rounded-full border px-5 text-sm font-semibold"
            style={{ borderColor: "var(--line-strong)", color: "var(--ink)" }}
          >
            Repository <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </article>
      </Container>
    </section>
  );
}
