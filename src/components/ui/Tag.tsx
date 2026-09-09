import { cn } from "@/lib/utils";

export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[var(--radius-control)] border border-line bg-surface px-2.5 py-1 font-mono text-[11px] tracking-wide text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
