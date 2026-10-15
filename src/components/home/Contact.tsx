import Link from "next/link";
import { ArrowUpRight, FileDown } from "lucide-react";
import { profile } from "@/data/profile";
import { siteConfig } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="border-t scroll-mt-20" style={{ borderColor: "var(--line)" }}>
      <Container className="py-16 sm:py-24">
        <p
          className="flex items-center gap-3 text-[0.8rem] font-semibold uppercase tracking-[0.18em]"
          style={{ color: "var(--accent)" }}
        >
          <span className="inline-block h-px w-8" style={{ background: "var(--accent)" }} aria-hidden="true" />
          Contact
        </p>
        <h2
          id="contact-heading"
          className="display mt-4 max-w-[18ch] text-balance text-4xl font-extrabold leading-[1.04] sm:text-6xl"
        >
          {profile.contactHeading}
        </h2>
        <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed" style={{ color: "var(--ink-dim)" }}>
          {profile.contactCopy}
        </p>
        <div className="mt-8">
          <CopyEmailButton />
        </div>
        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t pt-6" style={{ borderColor: "var(--line)" }}>
          {[
            { href: siteConfig.github, label: "GitHub", icon: <GithubIcon size={16} /> },
            { href: siteConfig.linkedin, label: "LinkedIn", icon: <LinkedinIcon size={16} /> },
            { href: siteConfig.resumePath, label: "Résumé (PDF)", icon: <FileDown size={16} aria-hidden="true" />, download: true },
          ].map((row) => (
            <li key={row.label}>
              <Link
                href={row.href}
                {...(row.download ? { download: true } : { target: "_blank", rel: "noopener noreferrer" })}
                className="link-underline inline-flex min-h-[44px] items-center gap-2 text-[0.95rem] font-semibold"
                style={{ color: "var(--ink-dim)" }}
              >
                <span style={{ color: "var(--accent)" }}>{row.icon}</span>
                {row.label}
                {!row.download && <ArrowUpRight size={14} aria-hidden="true" style={{ color: "var(--muted)" }} />}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
