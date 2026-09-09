import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-fg hover:opacity-90 border border-transparent",
  secondary:
    "bg-transparent text-ink border border-line hover:border-accent hover:text-accent",
  tertiary:
    "bg-transparent text-accent border border-transparent hover:underline underline-offset-4 px-0 h-auto",
};

type ButtonProps = ComponentProps<"a"> & {
  variant?: ButtonVariant;
};

export function ButtonLink({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-[var(--radius-control)] px-5 text-sm font-medium transition-colors duration-150",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}

type NativeButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariant;
};

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: NativeButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-[var(--radius-control)] px-5 text-sm font-medium transition-colors duration-150",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
