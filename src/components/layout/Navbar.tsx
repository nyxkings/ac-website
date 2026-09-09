"use client";

import { ThemeToggle } from "@/components/layout/ThemeProvider";
import { Container } from "@/components/layout/Container";
import { navLinks, site } from "@/content/site";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const sectionIds = ["about", "projects", "skills", "experience", "contact"] as const;

export function Navbar() {
  const pathname = usePathname();
  const onProjects = pathname.startsWith("/projects");
  const onAbout = pathname.startsWith("/about");
  const onContact = pathname.startsWith("/contact");
  const onResume = pathname.startsWith("/resume");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (onProjects) {
      setActive("/projects");
      return;
    }
    if (onAbout) {
      setActive("/about");
      return;
    }
    if (onContact) {
      setActive("/contact");
      return;
    }
    if (onResume) {
      setActive("");
      return;
    }

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target.id) {
          const id = visible[0].target.id;
          if (id === "projects") {
            setActive("/projects");
            return;
          }
          if (id === "about") {
            setActive("/about");
            return;
          }
          if (id === "contact") {
            setActive("/contact");
            return;
          }
          setActive(`/#${id}`);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [onProjects, onAbout, onContact, onResume, pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-200",
        scrolled
          ? "border-line bg-bg/90 backdrop-blur-md"
          : "border-transparent bg-bg/70 backdrop-blur-sm",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-ink"
        >
          {site.shortName}
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive =
              active === link.href ||
              (link.href === "/projects" && onProjects) ||
              (link.href === "/about" && onAbout) ||
              (link.href === "/contact" && onContact);
            const Comp = link.href.startsWith("/#") ? "a" : Link;
            return (
              <Comp
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-[var(--radius-control)] px-3 py-2 text-sm transition-colors",
                  isActive ? "text-accent" : "text-muted hover:text-ink",
                )}
              >
                {link.label}
              </Comp>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-control)] border border-line text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-bg md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => {
              const isActive =
                active === link.href ||
                (link.href === "/projects" && onProjects) ||
                (link.href === "/about" && onAbout) ||
                (link.href === "/contact" && onContact);
              const Comp = link.href.startsWith("/#") ? "a" : Link;
              return (
                <Comp
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-[var(--radius-control)] px-3 py-3 text-base",
                    isActive ? "text-accent" : "text-ink",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Comp>
              );
            })}
          </Container>
        </div>
      ) : null}
    </header>
  );
}
