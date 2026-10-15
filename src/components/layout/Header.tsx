"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{ background: "color-mix(in srgb, var(--bg) 88%, transparent)", borderColor: "var(--line)" }}
    >
      <Container>
        <div className="flex h-[72px] items-center justify-between gap-4">
          <Link
            href="/"
            className="display text-[1.05rem] font-extrabold tracking-tight"
            aria-label="Pratham Wankhade — home"
          >
            PW<span style={{ color: "var(--accent)" }}>.</span>
            <span className="sr-only"> Pratham Wankhade</span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="link-underline text-[0.92rem] font-medium"
                style={{ color: "var(--ink-dim)" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Link
              href={siteConfig.resumePath}
              download
              className="inline-flex min-h-[42px] items-center gap-1.5 rounded-full px-5 text-sm font-semibold text-[#111315]"
              style={{ background: "var(--accent)" }}
            >
              Résumé
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border"
              style={{ borderColor: "var(--line-strong)", color: "var(--ink)" }}
            >
              {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </Container>

      <div
        id="mobile-menu"
        className={cn("border-t md:hidden", open ? "block" : "hidden")}
        style={{ borderColor: "var(--line)", background: "var(--bg)" }}
      >
        <Container className="py-4">
          <nav aria-label="Mobile" className="flex flex-col">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b py-4 text-lg font-semibold last:border-0"
                style={{ borderColor: "var(--line)" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={siteConfig.resumePath}
              download
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex min-h-[48px] items-center justify-center gap-1.5 rounded-full px-5 text-sm font-semibold text-[#111315]"
              style={{ background: "var(--accent)" }}
            >
              Download résumé
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </nav>
        </Container>
      </div>
    </header>
  );
}
