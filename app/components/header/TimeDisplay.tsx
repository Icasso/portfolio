import { Clock } from "lucide-react";
import { useState, useEffect, useCallback, memo } from "react";

export interface TimeDisplayProps {
  timeZone?: string;
  className?: string;
}

function TimeDisplayBase({
  timeZone = "Asia/Hong_Kong",
  className = "",
}: TimeDisplayProps) {
  const [time, setTime] = useState<string>("");

  const updateTime = useCallback(() => {
    const now = new Date();
    setTime(
      now.toLocaleTimeString("en-US", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
    );
  }, [timeZone]);

  useEffect(() => {
    updateTime();
    // Update every minute instead of every second
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, [updateTime]);

  return (
    <div
      className={`flex items-center gap-1 text-sm text-muted-foreground ${className}`}
    >
      <Clock className="w-4 h-4" />
      <span>{time} (GMT+8)</span>
    </div>
  );
}

export const TimeDisplay = memo(TimeDisplayBase);
