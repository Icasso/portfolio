import { memo } from "react";

interface SectionHeaderProps {
  id: string;
  children: React.ReactNode;
}

function SectionHeaderBase({ id, children }: SectionHeaderProps) {
  return (
    <h2
      id={id}
      className="text-base font-bold tracking-[0.15em] uppercase mb-8 pb-3 border-b border-foreground text-foreground"
    >
      {children}
    </h2>
  );
}

export const SectionHeader = memo(SectionHeaderBase);
