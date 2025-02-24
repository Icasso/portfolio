import { Card } from "@/components/ui/card";

type StatsCardProps = {
  value: string | number;
  label: string;
  gradient?: string;
  ariaLabel?: string;
};

export function StatsCard({
  value,
  label,
  gradient = "from-purple-400 to-pink-500",
  ariaLabel,
}: StatsCardProps) {
  return (
    <Card className="p-2 sm:p-4 border-none bg-transparent shadow-none">
      <div className="text-center">
        <div
          className={`text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${gradient}`}
          aria-label={ariaLabel}
        >
          {value}
        </div>
        <div className="text-xs sm:text-sm text-muted-foreground">{label}</div>
      </div>
    </Card>
  );
}
