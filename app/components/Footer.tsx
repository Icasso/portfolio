import { Command } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background py-6">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 text-center">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Press</span>
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <Command className="h-3 w-3" />
            <span>K</span>
          </kbd>
          <span>for suprise!</span>
        </div>
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tsui Hoi Ming, Isaac. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
