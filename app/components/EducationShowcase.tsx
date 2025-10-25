import Image from "next/image";

interface Institution {
  name: string;
  logo: string;
  url: string;
}

const institutions: Institution[] = [
  {
    name: "City University of Hong Kong",
    logo: "/education/cityu.png",
    url: "https://www.cityu.edu.hk/",
  },
  {
    name: "Ying Wa College",
    logo: "/education/yingwa.png",
    url: "https://www.yingwa.edu.hk/",
  },
];

export function EducationShowcase() {
  return (
    <div className="mt-12 pt-8 border-t border-foreground/10">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/60 mb-6 text-center">
        Institutions I&apos;ve Studied At
      </h3>
      <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
        {institutions.map((institution) => (
          <a
            key={institution.name}
            href={institution.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            title={institution.name}
          >
            <Image
              src={institution.logo}
              alt={`${institution.name} logo`}
              width={120}
              height={40}
              className="object-contain h-10 w-auto"
              loading="eager"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
