import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/metadata";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-[1280px] px-5 py-24 sm:px-8">
      <p className="mono-label" style={{ color: "var(--accent)" }}>
        404 — Not found
      </p>
      <h1 className="display mt-3 text-4xl font-extrabold">This page doesn&apos;t exist.</h1>
      <Link href="/" className="mt-6 inline-block font-semibold underline underline-offset-4">
        Return home
      </Link>
    </div>
  );
}
