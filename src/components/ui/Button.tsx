import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-fg hover:opacity-90 border border-transparent",
  secondary:
    "bg-transparent text-ink border border-line hover:border-accent hover:text-accent",
  tertiary:
    "bg-transparent text-accent border border-transparent hover:underline underline-offset-4 px-0 h-auto min-h-11",
};

const baseClass =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-control)] px-5 text-sm font-medium transition-colors duration-150 touch-manipulation";

function isInternalHref(href: string | undefined) {
  if (!href) return false;
  return href.startsWith("/") && !href.startsWith("//");
}

type ButtonLinkProps = ComponentProps<"a"> & {
  variant?: ButtonVariant;
  href: string;
};

export function ButtonLink({
  variant = "primary",
  className,
  children,
  href,
  ...props
}: ButtonLinkProps) {
  const classes = cn(baseClass, variants[variant], className);

  if (isInternalHref(href)) {
    const { download, ...rest } = props;
    return (
      <Link
        href={href}
        className={classes}
        {...(download ? { download } : {})}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  return (
    <a className={classes} href={href} {...props}>
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
        baseClass,
        "disabled:cursor-not-allowed disabled:opacity-60",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
