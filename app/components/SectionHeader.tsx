interface SectionHeaderProps {
  id: string;
  index?: string;
  children: React.ReactNode;
}

export function SectionHeader({ id, index, children }: SectionHeaderProps) {
  return (
    <div className="mb-10">
      {index ? <p className="eyebrow text-accent mb-3">{index}</p> : null}
      <h2
        id={id}
        className="display text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.1] text-balance pb-4 border-b border-foreground"
      >
        {children}
      </h2>
    </div>
  );
}
