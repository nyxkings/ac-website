import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function ProjectPipeline({
  steps,
  className,
}: {
  steps: string[];
  className?: string;
}) {
  return (
    <ol
      className={cn(
        "grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        className,
      )}
      aria-label="System pipeline"
    >
      {steps.map((step, index) => (
        <li
          key={step}
          className="relative flex items-start gap-3 rounded-[var(--radius-card)] border border-line bg-surface p-4"
        >
          <span className="font-mono text-xs text-accent tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium leading-snug text-ink">{step}</p>
            {index < steps.length - 1 ? (
              <p className="mt-2 hidden items-center gap-1 font-mono text-[10px] tracking-wide text-muted uppercase sm:flex lg:hidden">
                Next <ArrowRight className="h-3 w-3" aria-hidden />
              </p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
