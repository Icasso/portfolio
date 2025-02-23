"use client";

import { Badge } from "@/components/ui/badge";
import { Command } from "lucide-react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { CommandMenu } from "../components/CommandMenu";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const FUNNY_LINES_EN = [
  "DM me if interested 💨",
  "wen no need work 🫠",
  "I only use Apple products 🍎",
  "I like to listen to KPOP - forever GLLIT ILLIT 🎵",
  "But I use a GTX 1080 Ti, wtf 🎮",
  "My MBTI is I _ _ _  🤪",
] as const;

const FUNNY_LINES_ZH = [
  "我叫Isaac 👋",
  "我搭地鐵返工 🚇",
  "我住喺香港 🇭🇰",
  "我GameStop賺咗錢之後輸晒 📈📉",
  "我睇YouTube睇到腦溶 🧠",
] as const;

const TITLE_EN = [
  "Need a Silicon Valley startup-looking web app or portfolio?",
] as const;
const TITLE_ZH = ["想整個矽谷初創feel嘅網站或者網上履歷？"] as const;

const PRICING_TITLE_EN = ["I can build you a website like this"] as const;
const PRICING_TITLE_ZH = ["我可以幫你整一個咁嘅網站"] as const;

const PRICING_FEATURES_EN = [
  "Fully customizable (as long as you like my taste)",
  "Eye-catching title that makes no sense",
  "Rotating brain rot lines to confuse your visitors",
  "Random numbers that go brrr (100% real)",
  "Silicon Valley fake-ass badges included",
  "Step-by-step guide to set up (trust me bro)",
  "Help you buy domain (or just use .tk like a chad)",
] as const;

const PRICING_FEATURES_ZH = [
  "完全可以自訂 (如果你鍾意我嘅品味)",
  "吸引眼球嘅標題 (完全冇意思)",
  "轉來轉去嘅腦溶文字",
  "亂嚟嘅數字 (100%真)",
  "矽谷式嘅假badges",
  "包教包會 (信我啦)",
  "幫你買域名 (或者用.tk慳錢)",
] as const;

function useRotatingText<T>(
  textsEN: readonly T[],
  textsZH: readonly T[],
  interval: number
): T {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isEnglish, setIsEnglish] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsEnglish((prev) => !prev);
      if (!isEnglish) {
        setCurrentIndex((prev) => (prev + 1) % textsEN.length);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [textsEN.length, interval, isEnglish]);

  return useMemo(
    () => (isEnglish ? textsEN[currentIndex] : textsZH[currentIndex]),
    [textsEN, textsZH, currentIndex, isEnglish]
  );
}

function useCountUp(end: number, duration: number = 2): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number): void => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min(
        (currentTime - startTime) / (duration * 1000),
        1
      );
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return count;
}

export default function StudioPortfolio() {
  const currentLine = useRotatingText(FUNNY_LINES_EN, FUNNY_LINES_ZH, 3500);
  const currentTitle = useRotatingText(TITLE_EN, TITLE_ZH, 10000);
  const visits = 200;

  const daysLived = useMemo(
    () =>
      Math.floor((Date.now() - new Date("2000-03-21").getTime()) / 86400000),
    []
  );
  const animatedCount = useCountUp(daysLived);
  const animatedVisits = useCountUp(visits);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-background to-muted">
      <main className="flex-1 flex items-center justify-center py-8 sm:py-0">
        <div className="container max-w-4xl px-4 my-auto">
          <div className="text-center">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50"
              aria-label="Need a Portfolio?"
            >
              <div className="h-[10rem] sm:h-[12rem] md:h-[14rem] flex items-center justify-center">
                <span className="inline-block leading-[1.15] max-w-[90%] sm:max-w-[85%] px-4">
                  {currentTitle}
                </span>
              </div>
            </h1>
            <div
              className="h-[4rem] flex items-center justify-center px-4"
              role="region"
              aria-label="Rotating text"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentLine}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg sm:text-2xl text-muted-foreground text-center"
                >
                  {currentLine}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="flex justify-center gap-2 sm:gap-8 mt-8">
              <Card className="p-2 sm:p-4 border-none bg-transparent shadow-none">
                <div className="text-center">
                  <div
                    className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
                    aria-label={`${animatedVisits} total visits`}
                  >
                    {animatedVisits}+
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    total visits
                  </div>
                </div>
              </Card>
              <Card className="p-2 sm:p-4 border-none bg-transparent shadow-none">
                <div className="text-center">
                  <div
                    className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
                    aria-label={`${animatedCount} days living on earth`}
                  >
                    {animatedCount}+
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    days living on earth
                  </div>
                </div>
              </Card>
              <Card className="p-2 sm:p-4 border-none bg-transparent shadow-none">
                <div className="text-center">
                  <div
                    className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
                    aria-label="Infinite potential"
                  >
                    ∞
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    potential
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-8 flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap px-2 sm:px-4">
              <Badge variant="destructive" className="text-xs">
                Backed by Y Combinator*
              </Badge>
              <Badge variant="outline" className="text-sm font-medium">
                Series Z Funded 🚀
              </Badge>
              <Badge variant="secondary" className="text-[10px]">
                Powered by 🧠 rot
              </Badge>
              <Badge variant="default" className="text-xs">
                香港製造 🇭🇰
              </Badge>
              <Badge variant="outline" className="text-[10px] bg-muted/50">
                *** in my dreams
              </Badge>
              <Badge
                variant="outline"
                className="text-sm bg-gradient-to-r from-purple-400/40 to-pink-500/40 font-medium text-transparent bg-clip-text border-purple-400/50"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #a855f7, #ec4899)",
                }}
              >
                獨角獸級數 🦄
              </Badge>
              <Badge variant="outline" className="text-xs border-dashed">
                Bootstrapped AF
              </Badge>
              <Badge variant="secondary" className="text-[10px]">
                Running on Copium
              </Badge>
              <Badge
                variant="default"
                className="text-xs bg-green-500/10 text-green-500"
              >
                Profitable (cap)
              </Badge>
              <Badge
                variant="default"
                className="text-xs font-mono bg-blue-500/10 text-blue-500 border-blue-500/20"
              >
                Certified HBU dev
              </Badge>
            </div>

            <div className="mt-8 sm:mt-16 space-y-4 px-4 sm:px-0">
              <Carousel
                className="w-full max-w-lg mx-auto"
                plugins={[
                  Autoplay({
                    delay: 10000,
                  }),
                ]}
              >
                <CarouselContent>
                  <CarouselItem>
                    <div className="rounded-lg border px-4 sm:px-8 py-4">
                      <div className="space-y-4 text-center">
                        <h3 className="text-sm font-medium text-muted-foreground">
                          {PRICING_TITLE_EN[0]}
                        </h3>
                        <div className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                          Personalized ✨
                        </div>
                        <div className="space-y-2 sm:space-y-3 text-left">
                          {PRICING_FEATURES_EN.map((feature, index) => (
                            <p
                              key={index}
                              className="text-xs text-muted-foreground/80 flex items-center gap-2"
                            >
                              <span className="text-green-500">✓</span>
                              <span>{feature}</span>
                            </p>
                          ))}
                        </div>
                        <div className="pt-2">
                          <p className="text-xs text-muted-foreground/80">
                            Price based on requirements • 1-day delivery
                            (impossible) • Modern stack
                          </p>
                          <div className="mt-4">
                            <Button asChild size="sm" className="gap-2">
                              <a
                                href="https://www.instagram.com/isaactsui3000"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Contact me
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>

                  <CarouselItem>
                    <div className="rounded-lg border px-4 sm:px-8 py-4">
                      <div className="space-y-4 text-center">
                        <h3 className="text-sm font-medium text-muted-foreground">
                          {PRICING_TITLE_ZH[0]}
                        </h3>
                        <div className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                          度身訂造 ✨
                        </div>
                        <div className="space-y-2 sm:space-y-3 text-left">
                          {PRICING_FEATURES_ZH.map((feature, index) => (
                            <p
                              key={index}
                              className="text-xs text-muted-foreground/80 flex items-center gap-2"
                            >
                              <span className="text-green-500">✓</span>
                              <span>{feature}</span>
                            </p>
                          ))}
                        </div>
                        <div className="pt-2">
                          <p className="text-xs text-muted-foreground/80">
                            價錢按需求而定 • 一日搞掂 (痴撚線) • 最新技術
                          </p>
                          <div className="mt-4">
                            <Button asChild size="sm" className="gap-2">
                              <a
                                href="https://www.instagram.com/isaactsui3000"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                聯絡我
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t bg-background/50 backdrop-blur-sm py-4 sm:py-6">
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 text-center px-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
            <span>Press</span>
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted/50 px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 hidden sm:inline-flex">
              <Command className="h-3 w-3" aria-hidden="true" />
              <span>K</span>
            </kbd>
            <span className="hidden sm:inline-block">
              for brain rot content
            </span>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tsui Hoi Ming, Isaac. All rights
            reserved.
          </div>
        </div>
      </footer>

      <Button
        size="icon"
        variant="outline"
        className="fixed right-4 bottom-4 sm:hidden h-10 w-10 rounded-full shadow-lg bg-background/95 backdrop-blur-sm"
        onClick={() => {
          const event = new KeyboardEvent("keydown", {
            key: "k",
            metaKey: true,
          });
          document.dispatchEvent(event);
        }}
      >
        <Command className="h-4 w-4" />
      </Button>

      <SpeedInsights />
      <CommandMenu />
    </div>
  );
}
