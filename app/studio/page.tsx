"use client";

import { ArrowDown } from "lucide-react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const projects = [
  {
    id: 1,
    title: "AI Professional Portrait",
    subtitle: "Professional headshots powered by AI",
    description:
      "Transform casual photos into LinkedIn-ready professional portraits in just 10 seconds. Features 4 professional styles, instant generation, and pricing from $0.29 per portrait.",
    image: "/projects/ai-portrait-hero.png",
    tags: ["Next.js 15", "Gemini 2.5 Flash", "Supabase", "Stripe"],
    url: "https://ai-professional-portrait.vercel.app/",
    year: "2025",
  },
];

export default function StudioPortfolio() {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero Section - Full Height */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">
        <div className="container max-w-4xl mx-auto text-center space-y-10 sm:space-y-16">
          <motion.div
            className="space-y-4 sm:space-y-6 max-w-5xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight"
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Let&apos;s build something
              <br />
              remarkable.
            </motion.h1>
            <motion.p
              className="text-lg sm:text-2xl text-muted-foreground font-light max-w-2xl mx-auto px-4"
              variants={fadeInUp}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1,
              }}
            >
              Crafting digital experiences that make an impact
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button
              size="lg"
              className="min-w-[160px] sm:min-w-[180px] px-6 sm:px-8"
              asChild
            >
              <a
                href="https://www.instagram.com/isaactsui3000"
                target="_blank"
                rel="noopener noreferrer"
              >
                Let&apos;s Connect
              </a>
            </Button>
          </motion.div>

          {/* Brainrot Badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-3 px-2 sm:px-4 max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} transition={{ duration: 0.4 }}>
              <Badge className="bg-red-600 text-white border-transparent">
                Backed by Y Combinator*
              </Badge>
            </motion.div>
            <motion.div variants={fadeIn} transition={{ duration: 0.4 }}>
              <Badge variant="outline">Series Z Funded 🚀</Badge>
            </motion.div>
            <motion.div variants={fadeIn} transition={{ duration: 0.4 }}>
              <Badge variant="secondary">Powered by 🧠 rot</Badge>
            </motion.div>
            <motion.div variants={fadeIn} transition={{ duration: 0.4 }}>
              <Badge variant="default">香港製造 🇭🇰</Badge>
            </motion.div>
            <motion.div variants={fadeIn} transition={{ duration: 0.4 }}>
              <Badge variant="outline">*** in my dreams</Badge>
            </motion.div>
            <motion.div variants={fadeIn} transition={{ duration: 0.4 }}>
              <Badge className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-transparent">
                獨角獸級數 🦄
              </Badge>
            </motion.div>
            <motion.div variants={fadeIn} transition={{ duration: 0.4 }}>
              <Badge variant="outline" className="border-dashed border-2">
                Bootstrapped AF
              </Badge>
            </motion.div>
            <motion.div variants={fadeIn} transition={{ duration: 0.4 }}>
              <Badge variant="secondary">Running on Copium</Badge>
            </motion.div>
            <motion.div variants={fadeIn} transition={{ duration: 0.4 }}>
              <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-transparent">
                Profitable (cap)
              </Badge>
            </motion.div>
            <motion.div variants={fadeIn} transition={{ duration: 0.4 }}>
              <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-transparent">
                Certified HBU dev
              </Badge>
            </motion.div>
            <motion.div variants={fadeIn} transition={{ duration: 0.4 }}>
              <Badge variant="secondary">Powered by ChatGPT 6.9</Badge>
            </motion.div>
            <motion.div variants={fadeIn} transition={{ duration: 0.4 }}>
              <Badge variant="outline">Web5 Ready™</Badge>
            </motion.div>
            <motion.div variants={fadeIn} transition={{ duration: 0.4 }}>
              <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-transparent">
                Built with Stack Overflow
              </Badge>
            </motion.div>
            <motion.div variants={fadeIn} transition={{ duration: 0.4 }}>
              <Badge variant="outline">Trust me bro 🤝</Badge>
            </motion.div>
            <motion.div variants={fadeIn} transition={{ duration: 0.4 }}>
              <Badge variant="secondary">唔識寫code都得 👑</Badge>
            </motion.div>
            <motion.div variants={fadeIn} transition={{ duration: 0.4 }}>
              <Badge variant="secondary">AI寫晒 🧠</Badge>
            </motion.div>
            <motion.div variants={fadeIn} transition={{ duration: 0.4 }}>
              <Badge className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-transparent">
                冇bug先奇怪 🐛
              </Badge>
            </motion.div>
            <motion.div variants={fadeIn} transition={{ duration: 0.4 }}>
              <Badge variant="outline">Copy完唔改都得 📝</Badge>
            </motion.div>
          </motion.div>

          <motion.button
            onClick={scrollToWork}
            className="group inline-flex flex-col items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors pt-8"
            aria-label="Scroll to view work"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span>View Work</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </motion.button>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto space-y-20 sm:space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="space-y-8 sm:space-y-12"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Project Header */}
              <div className="space-y-4 sm:space-y-6 max-w-3xl">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="font-mono">{project.year}</span>
                  <motion.div
                    className="h-px flex-1 bg-border"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                </div>
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                  {project.title}
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground font-light">
                  {project.subtitle}
                </p>
              </div>

              {/* Project Image */}
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-12 sm:mb-20"
              >
                <motion.div
                  className="group relative overflow-hidden rounded-lg border bg-muted cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-[16/9] relative">
                    {project.image ? (
                      <>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl opacity-50">🎨</div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </Link>

              {/* Project Details */}
              <motion.div
                className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-4xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    About
                  </h3>
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button asChild className="mt-6">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Site
                      </a>
                    </Button>
                  </motion.div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Technology
                  </h3>
                  <ul className="space-y-3">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.li
                        key={tag}
                        className="text-base sm:text-lg text-muted-foreground flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: tagIndex * 0.1 }}
                      >
                        <div className="w-1 h-1 rounded-full bg-foreground" />
                        {tag}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Isaac Tsui
            </div>
            <nav className="flex items-center gap-6 text-sm">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/studio"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Studio
              </Link>
            </nav>
          </div>
        </div>
      </footer>

      <SpeedInsights />
    </div>
  );
}
