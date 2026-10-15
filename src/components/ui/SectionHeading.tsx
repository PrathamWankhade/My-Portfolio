import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  eyebrow,
  title,
  copy,
  align = "left",
}: {
  index: string;
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className="mono-label" style={{ color: "var(--muted)" }}>
        <span style={{ color: "var(--accent)" }}>{index}</span>
        <span aria-hidden="true"> — </span>
        {eyebrow}
      </p>
      <h2 className="display mt-3 text-3xl font-bold leading-[1.08] sm:text-4xl">{title}</h2>
      {copy ? (
        <p className="mt-4 max-w-xl text-[1.02rem] leading-relaxed" style={{ color: "var(--ink-dim)" }}>
          {copy}
        </p>
      ) : null}
    </div>
  );
}
