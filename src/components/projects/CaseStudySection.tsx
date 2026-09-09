import { cn } from "@/lib/projects";
import type { ReactNode } from "react";

export function CaseStudySection({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 border-b border-line py-12 sm:py-14", className)}
    >
      {eyebrow ? (
        <p className="font-mono text-xs tracking-[0.14em] text-accent uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl text-balance">
        {title}
      </h2>
      <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
        {children}
      </div>
    </section>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
