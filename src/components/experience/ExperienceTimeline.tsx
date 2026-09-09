import { Tag } from "@/components/ui/Tag";
import type { ExperienceItem } from "@/types";

export function ExperienceTimeline({
  items,
  compact = false,
}: {
  items: ExperienceItem[];
  compact?: boolean;
}) {
  return (
    <ol className="space-y-0">
      {items.map((item) => (
        <li
          key={item.id}
          className="relative border-l border-line pl-5 pb-8 last:pb-0 sm:pl-6 sm:pb-10"
        >
          <span
            className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg"
            aria-hidden
          />

          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">
              {item.role}
            </h3>
            {item.placeholder ? (
              <span className="font-mono text-[10px] tracking-wide text-signal uppercase">
                Placeholder
              </span>
            ) : null}
          </div>

          <p className="mt-1 text-sm text-muted">
            {item.organization}
            {item.location ? ` · ${item.location}` : null}
          </p>
          <p className="mt-1 font-mono text-xs text-muted">
            {item.start} — {item.end}
          </p>

          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            {item.description}
          </p>

          {!compact && item.highlights?.length ? (
            <ul className="mt-4 space-y-2">
              {item.highlights.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-muted">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {item.technologies?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
