import { Command } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background py-6">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 text-center">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
          <span>Press</span>
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted/50 px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 hidden sm:inline-flex">
            <Command className="h-3 w-3" aria-hidden="true" />
            <span>K</span>
          </kbd>
          <span className="hidden sm:inline-block">for brain rot content</span>
        </div>
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tsui Hoi Ming, Isaac. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
