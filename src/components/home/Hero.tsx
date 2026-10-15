import Link from "next/link";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { siteConfig } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";

const tiles = [
  {
    slug: "facesnap",
    label: "FaceSnap",
    sub: "Live verification",
    body: (
      <div aria-hidden="true">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border" style={{ borderColor: "var(--accent)" }}>
            <span className="inline-block h-5 w-5 rounded-full" style={{ background: "var(--accent)", opacity: 0.35 }} />
          </span>
          <div>
            <p className="font-mono text-xs font-bold" style={{ color: "var(--accent)" }}>MATCH 0.94</p>
            <p className="font-mono text-[10px]" style={{ color: "var(--muted)" }}>enroll_042 · camera 02</p>
          </div>
        </div>
        <div className="mt-3 flex gap-2">
          <span className="rounded-full px-3 py-1 font-mono text-[10px] font-bold text-[#111315]" style={{ background: "var(--accent)" }}>CONFIRM</span>
          <span className="rounded-full border px-3 py-1 font-mono text-[10px]" style={{ borderColor: "var(--line-strong)", color: "var(--muted)" }}>REVIEW</span>
        </div>
      </div>
    ),
  },
  {
    slug: "phishing-detection",
    label: "Phishing Detection",
    sub: "Evidence breakdown",
    body: (
      <div aria-hidden="true">
        <p className="inline-block rounded-full px-3 py-1 font-mono text-[10px] font-bold text-[#111315]" style={{ background: "var(--accent)" }}>REVIEW — SUSPICIOUS</p>
        <div className="mt-3 space-y-2">
          {[
            ["model", "87%"],
            ["urls", "52%"],
            ["sender", "44%"],
          ].map(([k, w]) => (
            <div key={k} className="flex items-center gap-2">
              <span className="w-12 font-mono text-[10px]" style={{ color: "var(--muted)" }}>{k}</span>
              <span className="h-1.5 flex-1 overflow-hidden rounded-full" style={{ background: "var(--surface-2)" }}>
                <span className="block h-full rounded-full" style={{ width: w, background: k === "model" ? "var(--accent)" : "var(--titanium)" }} />
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    slug: "aipfl-ids",
    label: "AIPFL-IDS",
    sub: "Simulated federation",
    body: (
      <div aria-hidden="true">
        <p className="font-mono text-xs font-bold" style={{ color: "var(--accent)" }}>ROUND 12 · FEDAVG</p>
        <div className="mt-3 flex items-center gap-1.5">
          {["C1", "C2", "C3", "C4"].map((c) => (
            <span key={c} className="rounded-md border px-2 py-1 font-mono text-[10px]" style={{ borderColor: "var(--line-strong)", color: "var(--muted)" }}>{c}</span>
          ))}
          <span style={{ color: "var(--accent)" }}>→</span>
          <span className="rounded-md px-2 py-1 font-mono text-[10px] font-bold text-[#111315]" style={{ background: "var(--accent)" }}>GLOBAL</span>
        </div>
        <p className="mt-2 font-mono text-[10px]" style={{ color: "var(--muted)" }}>one process · illustrative</p>
      </div>
    ),
  },
  {
    slug: "onebit",
    label: "OneBit",
    sub: "Offline relay",
    body: (
      <div aria-hidden="true" className="space-y-2">
        <p className="w-fit max-w-full rounded-2xl rounded-bl-md px-3 py-1.5 text-xs" style={{ background: "var(--surface-2)", color: "var(--ink-dim)" }}>Are we still on for Saturday?</p>
        <p className="ml-auto w-fit max-w-full rounded-2xl rounded-br-md px-3 py-1.5 text-xs font-medium text-[#111315]" style={{ background: "var(--accent)" }}>Yes — via R1 · R2, no network</p>
        <p className="font-mono text-[10px]" style={{ color: "var(--muted)" }}>queued · stored · forwarded</p>
      </div>
    ),
  },
];

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      <Container className="pb-14 pt-14 sm:pb-20 sm:pt-20">
        <p className="mono-label reveal" style={{ color: "var(--accent)" }}>
          {profile.eyebrow}
        </p>
        <h1
          id="hero-heading"
          className="display reveal reveal-1 mt-5 max-w-[20ch] text-balance text-[clamp(2.6rem,7vw,5.2rem)] font-extrabold leading-[1.0]"
        >
          I build <span className="serif-accent font-normal">intelligent software</span>,
          security tools and resilient systems.
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="reveal reveal-2">
            <p className="max-w-md text-[1.08rem] leading-relaxed" style={{ color: "var(--ink-dim)" }}>
              {profile.lede}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
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

          <div className="reveal reveal-3">
            <div className="grid gap-4 sm:grid-cols-2">
              {tiles.map((t) => (
                <Link
                  key={t.slug}
                  href={`/work/${t.slug}`}
                  aria-label={`${t.label} — ${t.sub}. Open case study.`}
                  className="card-hover group rounded-2xl border p-5"
                  style={{ borderColor: "var(--line)", background: "var(--surface)" }}
                >
                  <p className="text-[0.95rem] font-bold">
                    {t.label}
                    <span aria-hidden="true" className="ml-1.5 inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: "var(--accent)" }}>↗</span>
                  </p>
                  <p className="mb-4 mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: "var(--muted)" }}>
                    {t.sub}
                  </p>
                  {t.body}
                </Link>
              ))}
            </div>
            <p className="mt-3 text-xs" style={{ color: "var(--muted)" }}>
              Illustrative previews with synthetic data — open any tile for the full case study.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
