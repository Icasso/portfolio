import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef, memo } from "react";
import { awards } from "@/data/awards";

function AwardsBase() {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {awards.map((award) => (
            <CarouselItem
              key={award.title + award.year}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <Card
                className="overflow-hidden cursor-pointer transition-colors hover:bg-muted h-[180px]"
                role="listitem"
                onClick={() => {
                  toast(award.title, {
                    description: (
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                          {award.description}
                        </p>
                        <div className="space-y-1">
                          <h4 className="text-sm font-medium">
                            Key Achievements:
                          </h4>
                          <ul
                            className="text-sm text-muted-foreground list-disc list-inside space-y-1"
                            role="list"
                          >
                            {award.impact.map((item, i) => (
                              <li key={i} role="listitem">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ),
                    duration: 5000,
                  });
                }}
              >
                <CardContent className="p-0 h-full">
                  <div className="relative h-full">
                    <time
                      className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 rounded-bl text-sm font-medium"
                      dateTime={`${award.year}`}
                    >
                      {award.year}
                    </time>
                    <div className="p-6 pt-12 flex flex-col justify-between h-full">
                      <div>
                        <h3 className="font-semibold text-lg mb-2 text-primary line-clamp-2">
                          {award.title}
                        </h3>
                        <p className="text-sm font-medium text-muted-foreground">
                          <span className="sr-only">Organization: </span>
                          {award.organization}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
}

export const Awards = memo(AwardsBase);

// Create a named export object instead of anonymous default export
const AwardsExports = { Awards };
export default AwardsExports;
