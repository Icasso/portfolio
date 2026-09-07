"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Volunteering", href: "#volunteering" },
  { label: "Studio", href: "/studio" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-100px 0px -60% 0px" }
    );

    navItems.forEach((item) => {
      if (item.href.startsWith("#")) {
        const element = document.querySelector(item.href);
        if (element) observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const top =
        element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav className="no-print sticky top-0 z-40 w-full border-b border-foreground bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/90">
      <div className="editorial-container">
        <div className="flex h-14 items-center justify-between gap-4">
          <Link
            href="/"
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground hover:text-accent transition-colors"
          >
            Isaac Tsui
          </Link>

          <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {navItems.map((item) =>
              item.href.startsWith("#") ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
                    activeSection === item.href.slice(1)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground hover:text-accent transition-colors"
                >
                  {item.label} ↗
                </Link>
              )
            )}
          </div>

          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-foreground">
          <div className="editorial-container py-4 space-y-1">
            {navItems.map((item) =>
              item.href.startsWith("#") ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`block py-3 font-mono text-xs uppercase tracking-[0.16em] border-b border-[var(--border-subtle)] ${
                    activeSection === item.href.slice(1)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-3 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground border-b border-[var(--border-subtle)] hover:text-accent"
                >
                  {item.label}
                  <span aria-hidden>↗</span>
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
