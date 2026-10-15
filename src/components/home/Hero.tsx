import Link from "next/link";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { siteConfig } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      <Container className="pb-14 pt-14 sm:pb-20 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mono-label reveal" style={{ color: "var(--accent)" }}>
              {profile.eyebrow}
            </p>
            <h1
              id="hero-heading"
              className="display reveal reveal-1 mt-5 max-w-[14ch] text-balance text-[clamp(2.4rem,6vw,4.4rem)] font-extrabold leading-[1.02]"
            >
              Engineering ideas into <span className="serif-accent font-normal">intelligent</span> systems.
            </h1>
            <p
              className="reveal reveal-2 mt-6 max-w-xl text-[1.08rem] leading-relaxed"
              style={{ color: "var(--ink-dim)" }}
            >
              {profile.lede}
            </p>
            <div className="reveal reveal-3 mt-8 flex flex-wrap gap-3">
              <Link
                href="/#work"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full px-6 text-[0.95rem] font-semibold text-[#111315] transition-transform hover:-translate-y-0.5"
                style={{ background: "var(--accent)" }}
              >
                Explore selected work <ArrowDown size={16} aria-hidden="true" />
              </Link>
              <Link
                href={siteConfig.resumePath}
                download
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full border px-6 text-[0.95rem] font-semibold transition-transform hover:-translate-y-0.5"
                style={{ borderColor: "var(--line-strong)", color: "var(--ink)" }}
              >
                Download résumé <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <p className="mt-6 inline-flex items-center gap-1.5 text-sm" style={{ color: "var(--muted)" }}>
              <MapPin size={14} aria-hidden="true" /> {profile.location}
            </p>
          </div>

          <div
            className="reveal reveal-2 relative overflow-hidden rounded-2xl border p-6"
            style={{ borderColor: "var(--line)", background: "var(--surface)" }}
          >
            <p className="mono-label" style={{ color: "var(--muted)" }}>
              Systems map · illustrative
            </p>
            <svg viewBox="0 0 360 300" className="mt-4 h-auto w-full" role="img" aria-label="Abstract geometric artwork of connected systems: four capability nodes linked to a central core">
              <g fill="none" strokeWidth={1.4}>
                <circle cx={180} cy={150} r={44} stroke="var(--accent)" />
                <circle cx={180} cy={150} r={10} fill="var(--accent)" stroke="none" />
                {[
                  { cx: 60, cy: 60, label: "AI" },
                  { cx: 300, cy: 60, label: "SEC" },
                  { cx: 60, cy: 240, label: "SYS" },
                  { cx: 300, cy: 240, label: "APP" },
                ].map((n) => (
                  <g key={n.label}>
                    <line x1={180} y1={150} x2={n.cx} y2={n.cy} stroke="var(--line-strong)" strokeDasharray="5 5" />
                    <circle cx={n.cx} cy={n.cy} r={30} stroke="var(--line-strong)" />
                    <circle cx={n.cx} cy={n.cy} r={5} fill="var(--muted)" stroke="none" />
                    <text x={n.cx} y={n.cy + 48} textAnchor="middle" fill="var(--muted)" fontSize={11} fontFamily="monospace" letterSpacing={2}>
                      {n.label}
                    </text>
                  </g>
                ))}
                <rect x={150} y={140} width={60} height={20} rx={10} fill="var(--bg)" stroke="none" />
                <text x={180} y={154} textAnchor="middle" fill="var(--accent)" fontSize={11} fontFamily="monospace" letterSpacing={1.5}>
                  CORE
                </text>
              </g>
            </svg>
            <p className="mt-2 text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
              Original geometric artwork — applied intelligence, security, systems and product engineering
              connected through one practice.
            </p>
          </div>
        </div>

        <dl
          className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border md:grid-cols-4"
          style={{ borderColor: "var(--line)", background: "var(--line)" }}
        >
          {[
            ["04", "Flagship builds"],
            ["02", "Security systems"],
            ["02", "Internships ’24–’25"],
            ["03", "Credentials & finals"],
          ].map(([n, label]) => (
            <div key={label} className="p-5" style={{ background: "var(--surface)" }}>
              <dt className="sr-only">{label}</dt>
              <dd className="display text-2xl font-extrabold" aria-hidden="true">
                {n}
              </dd>
              <dd className="mt-1 text-[0.82rem]" style={{ color: "var(--muted)" }}>
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
