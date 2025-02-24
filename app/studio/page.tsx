"use client";

import { Command } from "lucide-react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { CommandMenu } from "../components/CommandMenu";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatsCard } from "../components/StatsCard";
import { AnimatedBadge } from "../components/AnimatedBadge";
import {
  FUNNY_LINES_EN,
  FUNNY_LINES_ZH,
  TITLE_EN,
  TITLE_ZH,
  ANIMATED_BADGES,
  FEATURES_EN,
  FEATURES_ZH,
  PRICING_INFO_EN,
  PRICING_INFO_ZH,
} from "./data";

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

  const scrollToPricing = () => {
    document
      .getElementById("pricing-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVH();
    window.addEventListener("resize", setVH);
    return () => window.removeEventListener("resize", setVH);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-background to-muted">
      <main className="flex-1 flex flex-col">
        {/* Hero Section - Full height */}
        <section className="min-h-screen min-h-[calc(100vh_-_env(safe-area-inset-bottom))] flex items-center justify-center">
          <div className="container max-w-4xl px-4 flex flex-col items-center justify-center">
            <div className="text-center w-full">
              <h1
                className="text-4xl sm:text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50 mb-8"
                aria-label="Need a Portfolio?"
              >
                <div className="max-w-[90%] mx-auto leading-tight">
                  {currentTitle}
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
                <StatsCard
                  value={`${animatedVisits}+`}
                  label="total visits"
                  ariaLabel={`${animatedVisits} total visits`}
                />
                <StatsCard
                  value={`${animatedCount}+`}
                  label="days living on earth"
                  gradient="from-green-400 to-blue-500"
                  ariaLabel={`${animatedCount} days living on earth`}
                />
                <StatsCard
                  value="∞"
                  label="potential"
                  gradient="from-green-400 to-blue-500"
                  ariaLabel="Infinite potential"
                />
              </div>

              <div className="mt-8 flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap px-2 sm:px-4">
                {ANIMATED_BADGES.map((badge) => (
                  <AnimatedBadge
                    key={badge.text}
                    badge={badge}
                    totalBadges={ANIMATED_BADGES.length}
                  />
                ))}
              </div>

              <Button
                variant="secondary"
                size="sm"
                className="mt-12 gap-2"
                onClick={scrollToPricing}
              >
                View pricing / 查看價錢 ↓
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section - Below the fold */}
        <section
          id="pricing-section"
          className="min-h-[calc(100vh_-_env(safe-area-inset-bottom))] flex items-center justify-center py-8 sm:py-16 md:py-24"
        >
          <div className="container max-w-4xl px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
              Personalized / 度身訂造
            </h2>
            <Tabs defaultValue="features" className="w-full max-w-2xl mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="features" className="text-sm sm:text-base">
                  Features
                </TabsTrigger>
                <TabsTrigger value="功能" className="text-sm sm:text-base">
                  功能
                </TabsTrigger>
              </TabsList>
              <TabsContent value="features" className="mt-4 sm:mt-6 space-y-4">
                <div className="rounded-lg border p-4 sm:p-6">
                  <div className="space-y-4 sm:space-y-6">
                    <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                      {FEATURES_EN.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t">
                      <p className="text-sm text-muted-foreground/80 text-center">
                        {PRICING_INFO_EN}
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="功能" className="mt-6 space-y-4">
                <div className="rounded-lg border p-6">
                  <div className="space-y-6">
                    <ul className="space-y-4">
                      {FEATURES_ZH.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t">
                      <p className="text-sm text-muted-foreground/80 text-center">
                        {PRICING_INFO_ZH}
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            <div className="flex items-center justify-center mt-8">
              <Button asChild size="sm">
                <a
                  href="https://www.instagram.com/isaactsui3000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact me / 聯絡我
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-background/50 backdrop-blur-sm py-4 sm:py-6">
        <div className="container mx-auto flex flex-col items-center justify-center gap-2 sm:gap-4 text-center px-4">
          <div className="flex items-center gap-2 text-[10px] sm:text-sm text-muted-foreground">
            <span>Press</span>
            <kbd className="pointer-events-none inline-flex h-4 sm:h-5 select-none items-center gap-1 rounded border bg-muted/50 px-1 sm:px-1.5 font-mono text-[8px] sm:text-[10px] font-medium text-muted-foreground opacity-100 hidden sm:inline-flex">
              <Command
                className="h-2.5 w-2.5 sm:h-3 sm:w-3"
                aria-hidden="true"
              />
              <span>K</span>
            </kbd>
            <span className="hidden sm:inline-block">
              for brain rot content
            </span>
          </div>
          <div className="text-xs sm:text-sm text-muted-foreground">
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
