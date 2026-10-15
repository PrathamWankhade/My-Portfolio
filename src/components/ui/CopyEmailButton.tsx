"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { siteConfig } from "@/lib/metadata";

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    const email = siteConfig.email;
    let ok = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
        ok = true;
      } else {
        const ta = document.createElement("textarea");
        ta.value = email;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        // execCommand returns false when the copy fails — don't claim success then.
        ok = document.execCommand("copy");
        document.body.removeChild(ta);
      }
    } catch {
      ok = false;
    }
    if (ok) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } else {
      // Copy unavailable: fall back to opening the user's mail client.
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={`mailto:${siteConfig.email}`}
        className="btn-primary inline-flex min-h-[48px] min-w-0 items-center gap-2 rounded-full px-6 text-[0.95rem] font-semibold hover:-translate-y-0.5"
      >
        <Mail size={17} strokeWidth={2.2} aria-hidden="true" className="shrink-0" />
        <span className="email-wrap">{siteConfig.email}</span>
      </a>
      <button
        type="button"
        onClick={copy}
        aria-live="polite"
        aria-label={copied ? "Email copied" : "Copy email address"}
        className="inline-flex min-h-[48px] items-center gap-2 rounded-full border px-5 text-sm font-semibold transition-transform hover:-translate-y-0.5"
        style={{ borderColor: "var(--line-strong)", color: "var(--ink)" }}
      >
        {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
