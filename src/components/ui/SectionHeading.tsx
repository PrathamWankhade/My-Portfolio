import { cn } from "@/lib/utils";

/**
 * Editorial section heading: sage rule + quiet eyebrow, strong display title.
 * No decorative numbering — numbers appear only where they order content.
 */
export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p
        className={cn(
          "flex items-center gap-3 text-[0.8rem] font-semibold uppercase tracking-[0.18em]",
          align === "center" && "justify-center"
        )}
        style={{ color: "var(--accent)" }}
      >
        <span className="inline-block h-px w-8" style={{ background: "var(--accent)" }} aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="display mt-4 text-3xl font-bold leading-[1.06] sm:text-[2.6rem]">{title}</h2>
      {copy ? (
        <p className="mt-4 max-w-xl text-[1.02rem] leading-relaxed" style={{ color: "var(--ink-dim)" }}>
          {copy}
        </p>
      ) : null}
    </div>
  );
}
