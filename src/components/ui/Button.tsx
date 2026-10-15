import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Button({
  children,
  href,
  variant = "primary",
  external = false,
  download = false,
  className,
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "ghost";
  external?: boolean;
  download?: boolean;
  className?: string;
}) {
  const base =
    "inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-6 text-[0.95rem] font-semibold transition-all duration-200";
  const styles =
    variant === "primary"
      ? "btn-primary hover:-translate-y-0.5"
      : "border hover:-translate-y-0.5";
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(download ? { download: true } : {})}
      className={cn(base, className)}
      style={
        variant === "primary"
          ? undefined
          : { borderColor: "var(--line-strong)", color: "var(--ink)" }
      }
    >
      <span className={cn(styles)}>{children}</span>
    </Link>
  );
}
