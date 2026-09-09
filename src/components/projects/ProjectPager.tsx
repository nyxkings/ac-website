import type { Project } from "@/types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ProjectPager({
  prev,
  next,
}: {
  prev?: Project;
  next?: Project;
}) {
  if (!prev && !next) return null;

  return (
    <nav
      className="grid gap-3 border-t border-line pt-8 sm:gap-4 sm:pt-10 sm:grid-cols-2"
      aria-label="Adjacent projects"
    >
      {prev ? (
        <Link
          href={`/projects/${prev.slug}`}
          className="group flex min-h-[5.5rem] flex-col gap-2 rounded-[var(--radius-card)] border border-line bg-surface p-4 transition-colors hover:border-accent sm:p-5"
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs text-muted uppercase tracking-wide">
            <ArrowLeft className="h-3.5 w-3.5 transition-transform motion-safe:group-hover:-translate-x-0.5" />
            Previous
          </span>
          <span className="font-display text-base font-semibold text-ink text-balance group-hover:text-accent sm:text-lg">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div className="hidden sm:block" />
      )}

      {next ? (
        <Link
          href={`/projects/${next.slug}`}
          className="group flex min-h-[5.5rem] flex-col gap-2 rounded-[var(--radius-card)] border border-line bg-surface p-4 text-left transition-colors hover:border-accent sm:items-end sm:p-5 sm:text-right"
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs text-muted uppercase tracking-wide">
            Next
            <ArrowRight className="h-3.5 w-3.5 transition-transform motion-safe:group-hover:translate-x-0.5" />
          </span>
          <span className="font-display text-base font-semibold text-ink text-balance group-hover:text-accent sm:text-lg">
            {next.title}
          </span>
        </Link>
      ) : null}
    </nav>
  );
}
