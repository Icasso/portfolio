"use client";

import { Badge } from "@/components/ui/badge";
import { Command } from "lucide-react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { CasualCommandMenu } from "../components/CasualCommandMenu";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import { Card } from "@/components/ui/card";

const FUNNY_LINES = [
  "Actually I can build you this website in 1 minute, DM me if interested",
  "My name is Isaac",
  "I go to work by MTR",
  "wen no need work",
  "I live in Hong Kong",
  "I use Apple products",
  "I like to listen to KPOP - forever GLLIT ILLIT",
  "I once was a competitive overwatch gamer",
  "I still use a GTX 1080 Ti, wtf",
  "I made money from the GameStop short squeeze and lost it all",
  "My MBTI is ILLIT",
  "I watch YouTube brainrot videos",
] as const;

type RotatingTextHookReturn = (typeof FUNNY_LINES)[number];

function useRotatingText(
  texts: typeof FUNNY_LINES,
  interval: number
): RotatingTextHookReturn {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return useMemo(() => texts[currentIndex], [texts, currentIndex]);
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

export default function CasualPortfolio() {
  const currentLine = useRotatingText(FUNNY_LINES, 2000);
  const visits = 100;

  const daysLived = useMemo(
    () =>
      Math.floor((Date.now() - new Date("2000-03-21").getTime()) / 86400000),
    []
  );
  const animatedCount = useCountUp(daysLived);
  const animatedVisits = useCountUp(visits);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-background to-muted">
      <main className="flex-1 flex items-center justify-center">
        <div className="container max-w-4xl px-4">
          <div className="text-center">
            <h1
              className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50"
              aria-label="Need a Portfolio?"
            >
              Need a Portfolio?
              <Badge variant="outline" className="ml-2 align-top text-xs">
                SIGMA
              </Badge>
              <div className="text-2xl mt-2 font-normal text-muted-foreground/80">
                I got you fam
              </div>
            </h1>
            <div
              className="h-[4rem] flex items-center justify-center"
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
                  className="text-2xl text-muted-foreground"
                >
                  {currentLine}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="flex justify-center gap-8 mt-8">
              <Card className="p-4 border-none bg-transparent shadow-none">
                <div className="text-center">
                  <div
                    className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
                    aria-label={`${animatedVisits} total visits`}
                  >
                    {animatedVisits}+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    total visits
                  </div>
                </div>
              </Card>
              <Card className="p-4 border-none bg-transparent shadow-none">
                <div className="text-center">
                  <div
                    className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
                    aria-label={`${animatedCount} days living on earth`}
                  >
                    {animatedCount}+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    days living on earth
                  </div>
                </div>
              </Card>
              <Card className="p-4 border-none bg-transparent shadow-none">
                <div className="text-center">
                  <div
                    className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
                    aria-label="Infinite potential"
                  >
                    ∞
                  </div>
                  <div className="text-sm text-muted-foreground">potential</div>
                </div>
              </Card>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 flex-wrap">
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
                Made in Hong Kong 🇭🇰
              </Badge>
              <Badge variant="outline" className="text-[10px] bg-muted/50">
                *** in my dreams
              </Badge>
              <Badge
                variant="default"
                className="text-sm bg-gradient-to-r from-purple-400/20 to-pink-500/20"
              >
                Unicorn Status 🦄
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

            <div className="mt-16 space-y-4">
              <div className="inline-block rounded-lg border px-8 py-4">
                <div className="space-y-4 text-center">
                  <h3 className="text-sm font-medium text-muted-foreground">
                    I can build you a portfolio like this
                  </h3>
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                    HKD FREE
                  </div>
                  <div className="space-y-3 text-left">
                    <p className="text-xs text-muted-foreground/80 flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Fully customizable (as long as you like my taste)
                    </p>
                    <p className="text-xs text-muted-foreground/80 flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Eye-catching title that makes no sense
                    </p>
                    <p className="text-xs text-muted-foreground/80 flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Rotating brain rot lines to confuse your visitors
                    </p>
                    <p className="text-xs text-muted-foreground/80 flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Random numbers that go brrr (100% real)
                    </p>
                    <p className="text-xs text-muted-foreground/80 flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Silicon Valley fake-ass badges included
                    </p>
                    <p className="text-xs text-muted-foreground/80 flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Step-by-step guide to set up (trust me bro)
                    </p>
                    <p className="text-xs text-muted-foreground/80 flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Help you buy domain (or just use .tk like a chad)
                    </p>
                  </div>
                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground/80">
                      Zero payment • 1-day delivery (impossible) • Modern stack
                    </p>
                    <p className="text-xs text-muted-foreground/80 mt-1">
                      Just DM me on Instagram and I&apos;ll build you a page
                      like this
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t bg-background/50 backdrop-blur-sm py-6">
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Press</span>
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted/50 px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <Command className="h-3 w-3" aria-hidden="true" />
              <span>K</span>
            </kbd>
            <span>for brain rot content</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tsui Hoi Ming, Isaac. All rights
            reserved.
          </div>
        </div>
      </footer>

      <SpeedInsights />
      <CasualCommandMenu />
    </div>
  );
}
