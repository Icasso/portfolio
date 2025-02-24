import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { type AnimatedBadge as AnimatedBadgeType } from "../studio/data";
import { useMemo } from "react";

type AnimatedBadgeProps = {
  badge: AnimatedBadgeType;
  totalBadges: number;
};

export function AnimatedBadge({ badge, totalBadges }: AnimatedBadgeProps) {
  const shuffledIndex = useMemo(() => {
    // Generate a pseudo-random but consistent index for this badge
    const hash = badge.text.split("").reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);
    return Math.abs(hash) % totalBadges;
  }, [badge.text, totalBadges]);

  // Calculate delay to fit all animations within 1 second
  const delayPerBadge = 1 / totalBadges;

  return (
    <motion.div
      key={badge.text}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: shuffledIndex * delayPerBadge,
        duration: delayPerBadge * 0.8,
      }}
    >
      <Badge
        variant={badge.variant}
        className={badge.className}
        style={badge.style}
      >
        {badge.text}
      </Badge>
    </motion.div>
  );
}
