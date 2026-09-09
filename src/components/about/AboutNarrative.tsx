import { about } from "@/content/about";
import { site } from "@/content/site";

export function AboutNarrative({
  compact = false,
}: {
  compact?: boolean;
}) {
  const paragraphs = compact ? about.paragraphs.slice(0, 2) : about.paragraphs;

  return (
    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
      <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
        <p className="text-ink">{about.lead}</p>
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <aside className="h-fit rounded-[var(--radius-card)] border border-line bg-surface p-6 sm:p-7">
        <p className="font-mono text-xs tracking-[0.12em] text-accent uppercase">
          Focus
        </p>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
          {about.focusAreas.map((item, index) => (
            <li
              key={item}
              className={
                index < about.focusAreas.length - 1
                  ? "border-b border-line pb-3"
                  : undefined
              }
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 font-mono text-xs text-muted">
          {site.university}
        </p>
      </aside>
    </div>
  );
}
