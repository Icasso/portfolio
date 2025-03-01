import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface NFTBadgeProps {
  imageUrl: string;
  title: string;
  description: string;
  nftUrl?: string;
  className?: string;
}

function NFTBadgeBase({
  imageUrl,
  title,
  description,
  nftUrl,
  className,
}: NFTBadgeProps) {
  // Check if the image is an animated GIF
  const isAnimatedGif = imageUrl.toLowerCase().endsWith(".gif");

  const Badge = () => (
    <div
      className={cn(
        "relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20 hover:ring-primary/40 transition-all duration-200 group",
        className
      )}
    >
      <Image
        src={imageUrl}
        alt={title}
        fill
        unoptimized={isAnimatedGif}
        className="object-cover group-hover:scale-110 transition-transform duration-200"
        sizes="48px"
        loading="lazy"
      />
    </div>
  );

  const content = (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {nftUrl ? (
            <Link href={nftUrl} target="_blank" rel="noopener noreferrer">
              <Badge />
            </Link>
          ) : (
            <Badge />
          )}
        </TooltipTrigger>
        <TooltipContent>
          <div className="space-y-1">
            <p className="font-medium">{title}</p>
            <p className="text-sm text-muted-foreground">{description}</p>
            {nftUrl && (
              <p className="text-xs text-muted-foreground">Click to view NFT</p>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

  return content;
}

export const NFTBadge = memo(NFTBadgeBase);
