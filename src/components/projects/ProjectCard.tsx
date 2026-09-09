import { ButtonLink } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { PROJECT_CATEGORY_LABELS, type Project } from "@/types";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.586 2 12.253c0 4.53 2.865 8.367 6.839 9.72.5.094.682-.222.682-.482 0-.237-.009-.866-.013-1.7-2.782.617-3.369-1.37-3.369-1.37-.454-1.18-1.11-1.494-1.11-1.494-.908-.635.069-.622.069-.622 1.003.072 1.53 1.056 1.53 1.056.892 1.566 2.341 1.114 2.91.852.092-.662.35-1.114.636-1.37-2.22-.259-4.555-1.14-4.555-5.077 0-1.121.39-2.038 1.029-2.757-.103-.258-.446-1.297.098-2.703 0 0 .84-.274 2.75 1.053A9.35 9.35 0 0 1 12 6.84a9.35 9.35 0 0 1 2.504.345c1.909-1.327 2.748-1.053 2.748-1.053.546 1.406.203 2.445.1 2.703.64.719 1.028 1.636 1.028 2.757 0 3.948-2.339 4.815-4.566 5.068.359.317.679.943.679 1.901 0 1.371-.012 2.477-.012 2.814 0 .263.18.58.688.481A10.02 10.02 0 0 0 22 12.253C22 6.586 17.523 2 12 2Z" />
    </svg>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const href = `/projects/${project.slug}`;
  const coverAlt = `${project.title} cover visual`;

  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface transition-colors duration-200 hover:border-accent/60">
      <Link
        href={href}
        className="relative block aspect-[16/10] overflow-hidden border-b border-line bg-bg"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.coverImage}
          alt={coverAlt}
          width={960}
          height={600}
          className="h-full w-full object-cover transition-transform duration-300 motion-safe:hover:scale-[1.02]"
          loading="lazy"
        />
        {project.placeholder ? (
          <span className="absolute top-3 left-3 rounded-[var(--radius-control)] border border-line bg-surface/90 px-2 py-1 font-mono text-[10px] tracking-wide text-signal uppercase backdrop-blur-sm">
            Placeholder
          </span>
        ) : null}
      </Link>

      <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-6">
        <p className="font-mono text-[11px] tracking-[0.12em] text-accent uppercase">
          {PROJECT_CATEGORY_LABELS[project.category]}
          {project.year ? ` · ${project.year}` : null}
        </p>

        <h3 className="font-display mt-2 text-lg font-semibold tracking-tight text-ink text-balance sm:mt-3 sm:text-xl">
          <Link href={href} className="transition-colors hover:text-accent">
            {project.title}
          </Link>
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted text-pretty">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
          {project.technologies.slice(0, 4).map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
          {project.technologies.length > 4 ? (
            <Tag>+{project.technologies.length - 4}</Tag>
          ) : null}
        </div>

        <div className="mt-5 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:flex-wrap">
          <ButtonLink href={href} className="min-h-11 w-full px-4 text-sm sm:w-auto">
            View project
          </ButtonLink>
          {project.githubUrl ? (
            <ButtonLink
              href={project.githubUrl}
              variant="secondary"
              className="min-h-11 w-full px-4 text-sm sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </ButtonLink>
          ) : null}
          {project.liveUrl ? (
            <ButtonLink
              href={project.liveUrl}
              variant="secondary"
              className="min-h-11 w-full px-4 text-sm sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4" aria-hidden />
              Live demo
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </article>
  );
}
