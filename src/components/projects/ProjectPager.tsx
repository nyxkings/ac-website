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
      className="grid gap-4 border-t border-line pt-10 sm:grid-cols-2"
      aria-label="Adjacent projects"
    >
      {prev ? (
        <Link
          href={`/projects/${prev.slug}`}
          className="group flex flex-col gap-2 rounded-[var(--radius-card)] border border-line bg-surface p-5 transition-colors hover:border-accent"
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs text-muted uppercase tracking-wide">
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            Previous
          </span>
          <span className="font-display text-lg font-semibold text-ink group-hover:text-accent">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div className="hidden sm:block" />
      )}

      {next ? (
        <Link
          href={`/projects/${next.slug}`}
          className="group flex flex-col gap-2 rounded-[var(--radius-card)] border border-line bg-surface p-5 text-right transition-colors hover:border-accent sm:items-end"
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs text-muted uppercase tracking-wide">
            Next
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
          <span className="font-display text-lg font-semibold text-ink group-hover:text-accent">
            {next.title}
          </span>
        </Link>
      ) : null}
    </nav>
  );
}
