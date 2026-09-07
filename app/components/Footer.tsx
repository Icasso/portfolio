import Link from "next/link";

export function Footer() {
  return (
    <footer className="no-print border-t border-foreground mt-auto">
      <div className="editorial-container py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-foreground">
              © {new Date().getFullYear()} Isaac Tsui
            </p>
            <p className="text-sm text-muted-foreground">
              Designed with restraint. Built to last.
            </p>
          </div>
          <nav className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.16em]">
            <Link
              href="/"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/studio"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Studio
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
