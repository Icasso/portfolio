import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import { Command } from "lucide-react";

export function CommandMenu() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  // Memoize the event handler to prevent unnecessary re-creation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      setOpen((open) => !open);
    }
  }, []);

  useEffect(() => {
    // Add event listener with passive option where possible
    // We can't use passive: true here because we call preventDefault
    document.addEventListener("keydown", handleKeyDown, { passive: false });
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandList>
        <CommandGroup heading="Navigation">
          <CommandItem
            onSelect={() => {
              setOpen(false);
              router.push("/studio");
            }}
          >
            <HeartFilledIcon className="mr-2 h-4 w-4" />
            <span>Portfolio Studio</span>
          </CommandItem>
          <CommandItem
            onSelect={() => {
              setOpen(false);
              router.push("/");
            }}
          >
            <Command className="mr-2 h-4 w-4" />
            <span>Professional Resume</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
