import { type VariantProps } from "class-variance-authority";
import { badgeVariants } from "@/components/ui/badge";

export type AnimatedBadge = {
  variant: VariantProps<typeof badgeVariants>["variant"];
  text: string;
  className: string;
  style?: React.CSSProperties;
  animation: Record<string, number[]>;
};

export const FUNNY_LINES_EN = [
  "Disrupting web portfolios since 2025",
  "Building in public (mostly on weekends)",
  "Backed by Stack Overflow copy-paste",
  "Powered by caffeine and FOMO",
  "100x growth potential (trust me bro)",
  "AI-first, questions later",
] as const;

export const FUNNY_LINES_ZH = [
  "用AI改變世界，用CV改變代碼",
  "創業最緊要睇得 (所以搵我整網站)",
  "用最貴嘅MacBook寫最cheap嘅code",
  "幫你打造下一個獨角獸 (可能)",
  "連啲VC睇完都想俾錢 (如果有)",
  "最緊要係個website睇落貴",
] as const;

export const TITLE_EN = [
  "Your Next Unicorn-Grade Website 🦄",
  "Silicon Valley Vibes, Zero VC Lies ✨",
  "Level Up Your Portfolio to SV Standards ⚡️",
] as const;

export const TITLE_ZH = [
  "獨角獸級數嘅網站 🦄",
  "矽谷feel，唔使估 ✨",
  "矽谷級嘅作品集 ⚡️",
] as const;

export const FEATURES_EN = [
  "Fully customizable (as long as you like my taste)",
  "Eye-catching title that makes no sense",
  "Rotating brain rot lines to confuse your visitors",
  "Random numbers that go brrr (100% real)",
  "Silicon Valley fake-ass badges included",
  "Step-by-step guide to set up (trust me bro)",
  "Help you buy domain (or just use .tk like a chad)",
] as const;

export const FEATURES_ZH = [
  "隨意定制 (如果你鍾意我嘅品味)",
  "吸引但冇意思嘅標題",
  "轉來轉去嘅腦殘文字",
  "隨機數字 brrr (100% 真)",
  "矽谷式嘅假徽章",
  "一步一步教你設置 (信我啦)",
  "幫你買域名 (窮嘅話用 .tk)",
] as const;

export const PRICING_INFO_EN =
  "Price based on requirements • 1-day delivery (impossible) • Modern stack" as const;
export const PRICING_INFO_ZH =
  "價錢按需求而定 • 一日交貨（痴撚線）• 現代技術" as const;

export const ANIMATED_BADGES: AnimatedBadge[] = [
  {
    variant: "destructive",
    text: "Backed by Y Combinator*",
    className: "text-xs",
    animation: { y: [0, -3, 0] },
  },
  {
    variant: "outline",
    text: "Series Z Funded 🚀",
    className: "text-sm font-medium",
    animation: { y: [0, -8, 0] },
  },
  {
    variant: "secondary",
    text: "Powered by 🧠 rot",
    className: "text-[10px]",
    animation: { scale: [1, 1.2, 1] },
  },
  {
    variant: "default",
    text: "香港製造 🇭🇰",
    className: "text-xs",
    animation: { x: [-5, 5, -5, 5, 0] },
  },
  {
    variant: "outline",
    text: "*** in my dreams",
    className: "text-[10px] bg-muted/50",
    animation: { opacity: [0, 1, 0, 1] },
  },
  {
    variant: "outline",
    text: "獨角獸級數 🦄",
    className:
      "text-sm bg-gradient-to-r from-purple-400/40 to-pink-500/40 font-medium text-transparent bg-clip-text border-purple-400/50",
    style: { backgroundImage: "linear-gradient(to right, #a855f7, #ec4899)" },
    animation: { scale: [1, 1.15, 1] },
  },
  {
    variant: "outline",
    text: "Bootstrapped AF",
    className: "text-xs border-dashed",
    animation: { scale: [1, 0.8, 1.1, 1] },
  },
  {
    variant: "secondary",
    text: "Running on Copium",
    className: "text-[10px]",
    animation: { y: [0, 5, -5, 0] },
  },
  {
    variant: "default",
    text: "Profitable (cap)",
    className: "text-xs bg-green-500/10 text-green-500",
    animation: { y: [0, -4, 0] },
  },
  {
    variant: "default",
    text: "Certified HBU dev",
    className:
      "text-xs font-mono bg-blue-500/10 text-blue-500 border-blue-500/20",
    animation: { scale: [0, 1.2, 1] },
  },
  {
    variant: "secondary",
    text: "Powered by ChatGPT 6.9",
    className: "text-[10px]",
    animation: { y: [0, -5, 0] },
  },
  {
    variant: "outline",
    text: "Web5 Ready™",
    className: "text-xs font-mono",
    animation: { scale: [1, 1.3, 0.7, 1] },
  },
  {
    variant: "default",
    text: "Built with Stack Overflow",
    className: "text-[10px] bg-orange-500/10 text-orange-500",
    animation: { y: [-5, 5, -5] },
  },
  {
    variant: "outline",
    text: "Trust me bro 🤝",
    className: "text-sm font-medium",
    animation: { y: [0, -3, 0] },
  },
  {
    variant: "secondary",
    text: "唔識寫code都得 🤖",
    className: "text-[10px]",
    animation: { scale: [1, 0.8, 1.2, 1] },
  },
  {
    variant: "outline",
    text: "AI寫晒 🧠",
    className: "text-xs",
    animation: { y: [0, -8, 0], x: [-5, 5, -5] },
  },
  {
    variant: "default",
    text: "冇bug先奇怪 🐛",
    className: "text-[10px] bg-red-500/10 text-red-500",
    animation: { scale: [1, 1.1, 1] },
  },
  {
    variant: "outline",
    text: "Copy完唔改都得 📝",
    className: "text-[10px]",
    animation: { opacity: [1, 0.5, 1], y: [0, 3, 0] },
  },
] as const;
