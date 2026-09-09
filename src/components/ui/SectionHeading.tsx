import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl min-w-0", className)}>
      {eyebrow ? (
        <p className="font-mono text-[11px] tracking-[0.14em] text-accent uppercase sm:text-xs">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display mt-3 text-[1.65rem] leading-tight font-semibold tracking-tight text-ink sm:text-4xl text-balance">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-[0.95rem] leading-relaxed text-muted text-pretty sm:mt-4 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
