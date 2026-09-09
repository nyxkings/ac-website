import { cn } from "@/lib/utils";
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
      className={cn("scroll-mt-24 border-b border-line py-10 sm:py-14", className)}
    >
      {eyebrow ? (
        <p className="font-mono text-xs tracking-[0.14em] text-accent uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display mt-2 text-xl font-semibold tracking-tight text-ink sm:text-3xl text-balance">
        {title}
      </h2>
      <div className="mt-5 space-y-4 text-[0.95rem] leading-relaxed text-muted text-pretty sm:mt-6 sm:text-base">
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
