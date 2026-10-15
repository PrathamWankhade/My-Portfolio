"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { siteConfig } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    // Mount-once client read: keeps the footer prerender-safe under
    // Next.js Cache Components (no Date read during prerender).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="border-t" style={{ borderColor: "var(--line)" }}>
      <Container className="py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="display text-lg font-extrabold">
              Pratham Wankhade<span style={{ color: "var(--accent)" }}>.</span>
            </p>
            <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
              Software Engineer · Applied AI · Cybersecurity
            </p>
          </div>
          <nav aria-label="Social" className="flex items-center gap-2">
            <Link
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border transition-transform hover:-translate-y-0.5"
              style={{ borderColor: "var(--line-strong)", color: "var(--ink)" }}
            >
              <GithubIcon size={18} />
            </Link>
            <Link
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border transition-transform hover:-translate-y-0.5"
              style={{ borderColor: "var(--line-strong)", color: "var(--ink)" }}
            >
              <LinkedinIcon size={18} />
            </Link>
            <Link
              href={`mailto:${siteConfig.email}`}
              aria-label="Send email"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border transition-transform hover:-translate-y-0.5"
              style={{ borderColor: "var(--line-strong)", color: "var(--ink)" }}
            >
              <Mail size={18} aria-hidden="true" />
            </Link>
          </nav>
        </div>
        <div
          className="mt-8 flex flex-col gap-3 border-t pt-6 text-sm sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: "var(--line)", color: "var(--muted)" }}
        >
          <p>© {year ?? "—"} Pratham Wankhade. All rights reserved.</p>
          <a
            href="#top"
            className="inline-flex w-fit items-center gap-1.5 font-medium"
            style={{ color: "var(--ink-dim)" }}
          >
            Back to top <ArrowUp size={15} aria-hidden="true" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
