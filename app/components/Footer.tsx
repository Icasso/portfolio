import Link from "next/link";

export function Footer() {
  return (
    <footer className="no-print border-t bg-background py-8">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Isaac Tsui
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/studio"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Studio
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
