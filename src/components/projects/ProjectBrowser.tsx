"use client";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { PROJECT_CATEGORIES, type Project, type ProjectCategory } from "@/types";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";

type FilterId = "all" | ProjectCategory;

export function ProjectBrowser({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<FilterId>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter, projects]);

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: projects.length };
    for (const cat of PROJECT_CATEGORIES) {
      map[cat.id] = projects.filter((p) => p.category === cat.id).length;
    }
    return map;
  }, [projects]);

  return (
    <div>
      <div
        className="chip-scroll sm:flex-wrap sm:overflow-visible"
        role="tablist"
        aria-label="Filter projects by category"
      >
        <FilterChip
          label="All"
          count={counts.all}
          active={filter === "all"}
          onClick={() => setFilter("all")}
        />
        {PROJECT_CATEGORIES.map((cat) => (
          <FilterChip
            key={cat.id}
            label={cat.label}
            count={counts[cat.id] ?? 0}
            active={filter === cat.id}
            onClick={() => setFilter(cat.id)}
            disabled={(counts[cat.id] ?? 0) === 0}
          />
        ))}
      </div>

      <p className="mt-6 font-mono text-xs text-muted" aria-live="polite">
        {`Showing ${filtered.length} ${filtered.length === 1 ? "project" : "projects"}`}
        {filter !== "all"
          ? ` · ${PROJECT_CATEGORIES.find((c) => c.id === filter)?.label}`
          : ""}
      </p>

      {filtered.length === 0 ? (
        <p className="mt-10 text-muted">
          No projects in this category yet. Try another filter.
        </p>
      ) : (
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function FilterChip({
  label,
  count,
  active,
  onClick,
  disabled,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "inline-flex h-11 items-center gap-2 rounded-[var(--radius-control)] border px-3.5 text-sm transition-colors touch-manipulation",
        active
          ? "border-accent bg-accent text-accent-fg"
          : "border-line bg-surface text-muted hover:border-accent hover:text-accent",
        disabled && "cursor-not-allowed opacity-40 hover:border-line hover:text-muted",
      )}
    >
      {label}
      <span
        className={cn(
          "font-mono text-[11px]",
          active ? "text-accent-fg/80" : "text-muted",
        )}
      >
        {count}
      </span>
    </button>
  );
}
