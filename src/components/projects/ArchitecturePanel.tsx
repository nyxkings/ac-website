import type { Project } from "@/types";
import { ImageIcon } from "lucide-react";

export function ArchitecturePanel({ project }: { project: Project }) {
  if (project.architectureImage) {
    return (
      <figure className="overflow-hidden rounded-[var(--radius-card)] border border-line bg-bg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.architectureImage}
          alt={`${project.title} system architecture`}
          className="w-full object-contain"
        />
        <figcaption className="border-t border-line px-4 py-3 font-mono text-xs text-muted">
          System architecture
        </figcaption>
      </figure>
    );
  }

  return (
    <div className="flex min-h-[220px] flex-col items-center justify-center gap-3 rounded-[var(--radius-card)] border border-dashed border-line bg-bg px-6 py-12 text-center">
      <ImageIcon className="h-6 w-6 text-muted" aria-hidden />
      <p className="font-mono text-xs tracking-wide text-muted uppercase">
        Architecture diagram placeholder
      </p>
      <p className="max-w-md text-sm text-muted">
        Set <code className="text-ink">architectureImage</code> on this project
        when your diagram is ready (recommended path:{" "}
        <code className="text-ink">
          /images/projects/{project.slug}-architecture.svg
        </code>
        ).
      </p>
    </div>
  );
}
