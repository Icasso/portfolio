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
import { activities } from "@/data/extracurriculars";

function ExtracurricularsBase() {
  const plugin = useRef(Autoplay({ delay: 2500, stopOnInteraction: true }));

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
          {activities.map((activity) => (
            <CarouselItem
              key={activity.title}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 min-h-[200px]"
            >
              <div className="h-full">
                <Card
                  className="overflow-hidden cursor-pointer transition-colors hover:bg-muted h-[180px] border"
                  role="listitem"
                  onClick={() => {
                    toast(activity.title, {
                      description: (
                        <div className="space-y-2">
                          <p className="text-sm text-muted-foreground">
                            {activity.description}
                          </p>
                          <div className="space-y-1">
                            <h4 className="text-sm font-medium">Highlights:</h4>
                            <ul
                              className="text-sm text-muted-foreground list-disc list-inside space-y-1"
                              role="list"
                            >
                              {activity.highlights.map((highlight, i) => (
                                <li key={i} role="listitem">
                                  {highlight}
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
                        dateTime={activity.period}
                      >
                        {activity.period}
                      </time>
                      <div className="p-6 pt-12 flex flex-col justify-between h-full">
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-primary line-clamp-2">
                            {activity.title}
                          </h3>
                          <p className="text-sm font-medium text-muted-foreground line-clamp-2">
                            {activity.role} • {activity.organization}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
}

export const Extracurriculars = memo(ExtracurricularsBase);

// Create a named export object instead of anonymous default export
const ExtracurricularsExports = { Extracurriculars };
export default ExtracurricularsExports;
