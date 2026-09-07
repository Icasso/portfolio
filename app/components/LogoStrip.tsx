import Image from "next/image";

export interface LogoItem {
  name: string;
  logo: string;
  url: string;
}

export function LogoStrip({
  label,
  items,
}: {
  label: string;
  items: LogoItem[];
}) {
  return (
    <aside className="mt-10 border border-foreground p-5 sm:p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="eyebrow">{label}</p>
        <div className="flex items-center gap-8 flex-wrap">
          {items.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition-opacity"
              title={item.name}
            >
              <Image
                src={item.logo}
                alt={`${item.name} logo`}
                width={120}
                height={40}
                className="object-contain h-8 w-auto grayscale"
                loading="eager"
              />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
