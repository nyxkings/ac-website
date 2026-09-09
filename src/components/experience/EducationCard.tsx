import type { EducationItem } from "@/types";
import type { ReactNode } from "react";

export function EducationCard({
  item,
  showExtensions = false,
}: {
  item: EducationItem;
  /** Show coursework / certifications / achievements slots */
  showExtensions?: boolean;
}) {
  const coursework = item.coursework ?? [];
  const certifications = item.certifications ?? [];
  const achievements = item.achievements ?? [];

  return (
    <article className="rounded-[var(--radius-card)] border border-line bg-surface p-4 sm:p-7">
      <p className="font-mono text-[11px] tracking-[0.12em] text-accent uppercase">
        Education
      </p>
      <h3 className="font-display mt-3 text-lg font-semibold tracking-tight text-ink text-balance sm:text-2xl">
        {item.program}
      </h3>
      <p className="mt-2 text-sm text-muted sm:text-base">
        {item.institution}
        {item.location ? ` · ${item.location}` : null}
      </p>
      <p className="mt-1 font-mono text-xs text-muted">
        {item.start} — {item.end}
      </p>

      {item.detail ? (
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          {item.detail}
        </p>
      ) : null}

      {showExtensions ? (
        <div className="mt-8 grid gap-6 border-t border-line pt-6 sm:grid-cols-3">
          <ExtensionSlot
            title="Relevant coursework"
            emptyHint="Add courses when ready in experience.ts → coursework"
          >
            {coursework.length ? (
              <ul className="space-y-2 text-sm text-muted">
                {coursework.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            ) : null}
          </ExtensionSlot>

          <ExtensionSlot
            title="Certifications"
            emptyHint="No certifications listed yet — add only verified ones"
          >
            {certifications.length ? (
              <ul className="space-y-2 text-sm text-muted">
                {certifications.map((c) => (
                  <li key={c.name}>
                    {c.name}
                    {c.placeholder ? (
                      <span className="ml-2 font-mono text-[10px] text-signal uppercase">
                        Placeholder
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            ) : null}
          </ExtensionSlot>

          <ExtensionSlot
            title="Academic achievements"
            emptyHint="No achievements listed yet — do not invent awards"
          >
            {achievements.length ? (
              <ul className="space-y-2 text-sm text-muted">
                {achievements.map((a) => (
                  <li key={a.text}>
                    {a.text}
                    {a.placeholder ? (
                      <span className="ml-2 font-mono text-[10px] text-signal uppercase">
                        Placeholder
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            ) : null}
          </ExtensionSlot>
        </div>
      ) : null}
    </article>
  );
}

function ExtensionSlot({
  title,
  emptyHint,
  children,
}: {
  title: string;
  emptyHint: string;
  children: ReactNode;
}) {
  const hasContent = Boolean(children);

  return (
    <div>
      <h4 className="font-mono text-[11px] tracking-[0.12em] text-muted uppercase">
        {title}
      </h4>
      <div className="mt-3">
        {hasContent ? (
          children
        ) : (
          <p className="rounded-[var(--radius-control)] border border-dashed border-line bg-bg px-3 py-3 text-xs leading-relaxed text-muted">
            {emptyHint}
          </p>
        )}
      </div>
    </div>
  );
}
