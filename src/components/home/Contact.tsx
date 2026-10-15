import Link from "next/link";
import { ArrowUpRight, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/data/profile";
import { siteConfig } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="border-t scroll-mt-20" style={{ borderColor: "var(--line)" }}>
      <Container className="py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeading index="07" eyebrow="Contact" title={profile.contactHeading} />
            <span id="contact-heading" className="sr-only">
              Contact
            </span>
            <p className="mt-4 max-w-md leading-relaxed" style={{ color: "var(--ink-dim)" }}>
              {profile.contactCopy}
            </p>
            <div className="mt-7">
              <CopyEmailButton />
            </div>
          </div>
          <div
            className="h-fit rounded-2xl border p-6 sm:p-8"
            style={{ borderColor: "var(--line)", background: "var(--surface)" }}
          >
            <p className="mono-label" style={{ color: "var(--muted)" }}>
              Elsewhere
            </p>
            <ul className="mt-4 space-y-1">
              {[
                { href: siteConfig.github, label: "GitHub", sub: "@PrathamWankhade" },
                { href: siteConfig.linkedin, label: "LinkedIn", sub: "pratham-wankhade" },
              ].map((row) => (
                <li key={row.label}>
                  <Link
                    href={row.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl px-4 py-3.5 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <span style={{ color: "var(--accent)" }}>
                        {row.label === "GitHub" ? <GithubIcon size={18} /> : <LinkedinIcon size={18} />}
                      </span>
                      <span>
                        <span className="block font-semibold">{row.label}</span>
                        <span className="block text-sm" style={{ color: "var(--muted)" }}>
                          {row.sub}
                        </span>
                      </span>
                    </span>
                    <ArrowUpRight
                      size={17}
                      aria-hidden="true"
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      style={{ color: "var(--muted)" }}
                    />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={siteConfig.resumePath}
                  download
                  className="group flex items-center justify-between rounded-xl px-4 py-3.5 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span style={{ color: "var(--accent)" }}>
                      <FileDown size={18} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-semibold">Résumé (PDF)</span>
                      <span className="block text-sm" style={{ color: "var(--muted)" }}>
                        View / download
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight
                    size={17}
                    aria-hidden="true"
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    style={{ color: "var(--muted)" }}
                  />
                </Link>
              </li>
            </ul>
            <p className="mt-4 border-t pt-4 text-xs leading-relaxed" style={{ borderColor: "var(--line)", color: "var(--muted)" }}>
              No contact form is included by design — email is the direct channel, so no message goes into
              an unmonitored queue. Based in {siteConfig.location}.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
