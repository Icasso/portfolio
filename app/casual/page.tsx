"use client";

import { Badge } from "@/components/ui/badge";
import { Command } from "lucide-react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { CasualCommandMenu } from "../components/CasualCommandMenu";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

const FUNNY_LINES = [
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
  "I make this page in 1 minute with AI lmao",
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
  const daysLived = useMemo(
    () =>
      Math.floor((Date.now() - new Date("2000-03-21").getTime()) / 86400000),
    []
  );
  const animatedCount = useCountUp(daysLived);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-background to-muted">
      <main className="flex-1 flex items-center justify-center">
        <div className="container max-w-4xl px-4">
          <div className="text-center">
            <h1
              className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50"
              aria-label="Oh, You Found Me"
            >
              Oh, You Found Me
              <Badge variant="outline" className="ml-2 align-top text-xs">
                SIGMA
              </Badge>
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
              <div className="text-center">
                <div
                  className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
                  aria-label="Infinite potential"
                >
                  ∞
                </div>
                <div className="text-sm text-muted-foreground">potential</div>
              </div>
            </div>

            <div className="mt-8">
              <Badge variant="secondary" className="text-xs">
                This page costed me 1 million PEPE coins to maintain... jk
              </Badge>
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
            <span>for serious stuff</span>
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
