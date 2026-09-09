import type { Project } from "@/types";
import { ImageIcon } from "lucide-react";

export function ProjectGallery({ project }: { project: Project }) {
  if (project.gallery.length === 0) {
    return (
      <div className="grid gap-4 sm:grid-cols-2">
        {[1, 2].map((n) => (
          <div
            key={n}
            className="flex aspect-[16/10] flex-col items-center justify-center gap-3 rounded-[var(--radius-card)] border border-dashed border-line bg-bg px-6 text-center"
          >
            <ImageIcon className="h-6 w-6 text-muted" aria-hidden />
            <p className="font-mono text-xs tracking-wide text-muted uppercase">
              Screenshot placeholder
            </p>
            <p className="max-w-xs text-sm text-muted">
              Add images to <code className="text-ink">gallery</code> in{" "}
              <code className="text-ink">projects.ts</code> (e.g.{" "}
              <code className="text-ink">/images/projects/…</code>).
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {project.gallery.map((src, index) => (
        <li
          key={src}
          className="overflow-hidden rounded-[var(--radius-card)] border border-line bg-bg"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={`${project.title} screenshot ${index + 1}`}
            className="aspect-[16/10] w-full object-cover"
          />
        </li>
      ))}
    </ul>
  );
}
