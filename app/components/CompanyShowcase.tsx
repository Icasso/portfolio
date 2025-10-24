import Image from "next/image";

interface Company {
  name: string;
  logo: string;
  url: string;
}

const companies: Company[] = [
  {
    name: "OKX",
    logo: "/companies/okx.png",
    url: "https://www.okx.com",
  },
  {
    name: "HK Electric",
    logo: "/companies/hkelectric.png",
    url: "https://www.hkelectric.com",
  },
];

export function CompanyShowcase() {
  return (
    <div className="mt-12 pt-8 border-t border-foreground/10">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/60 mb-6 text-center">
        Companies I&apos;ve Worked With
      </h3>
      <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
        {companies.map((company) => (
          <a
            key={company.name}
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            title={company.name}
          >
            <Image
              src={company.logo}
              alt={`${company.name} logo`}
              width={120}
              height={40}
              className="object-contain h-10 w-auto"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
