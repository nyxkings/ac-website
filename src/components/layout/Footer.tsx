import { Container } from "@/components/layout/Container";
import { site } from "@/content/site";
import { Mail, Phone } from "lucide-react";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2C6.477 2 2 6.586 2 12.253c0 4.53 2.865 8.367 6.839 9.72.5.094.682-.222.682-.482 0-.237-.009-.866-.013-1.7-2.782.617-3.369-1.37-3.369-1.37-.454-1.18-1.11-1.494-1.11-1.494-.908-.635.069-.622.069-.622 1.003.072 1.53 1.056 1.53 1.056.892 1.566 2.341 1.114 2.91.852.092-.662.35-1.114.636-1.37-2.22-.259-4.555-1.14-4.555-5.077 0-1.121.39-2.038 1.029-2.757-.103-.258-.446-1.297.098-2.703 0 0 .84-.274 2.75 1.053A9.35 9.35 0 0 1 12 6.84a9.35 9.35 0 0 1 2.504.345c1.909-1.327 2.748-1.053 2.748-1.053.546 1.406.203 2.445.1 2.703.64.719 1.028 1.636 1.028 2.757 0 3.948-2.339 4.815-4.566 5.068.359.317.679.943.679 1.901 0 1.371-.012 2.477-.012 2.814 0 .263.18.58.688.481A10.02 10.02 0 0 0 22 12.253C22 6.586 17.523 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.97 1.97 0 1 1 0-3.94 1.97 1.97 0 0 1 0 3.94zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <Container className="flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-10">
        <div className="min-w-0">
          <p className="font-display text-base font-semibold text-ink">
            {site.name}
          </p>
          <p className="mt-1 text-sm text-muted">
            {site.location} · Open to remote opportunities
          </p>
          <a
            href={site.phoneHref}
            className="mt-2 inline-flex min-h-11 items-center font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            {site.phone}
          </a>
          <p className="mt-3 font-mono text-xs text-muted">
            © 2026 {site.shortName}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-control)] border border-line text-muted transition-colors hover:border-accent hover:text-accent touch-manipulation"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" aria-hidden />
          </a>
          <a
            href={site.phoneHref}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-control)] border border-line text-muted transition-colors hover:border-accent hover:text-accent touch-manipulation"
            aria-label={`Call ${site.phone}`}
          >
            <Phone className="h-4 w-4" aria-hidden />
          </a>
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-control)] border border-line text-muted transition-colors hover:border-accent hover:text-accent touch-manipulation"
            aria-label="GitHub"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-control)] border border-line text-muted transition-colors hover:border-accent hover:text-accent touch-manipulation"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
