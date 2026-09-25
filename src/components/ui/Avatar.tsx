import { BadgeCheck } from "lucide-react";
import { cn, initials, seededIndex } from "@/lib/utils";

type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

const boxSize: Record<AvatarSize, string> = {
  xs: "h-8 w-8",
  sm: "h-10 w-10",
  md: "h-12 w-12",
  lg: "h-16 w-16",
  xl: "h-[5.5rem] w-[5.5rem]",
};

const textSize: Record<AvatarSize, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-[0.95rem]",
  lg: "text-lg",
  xl: "text-2xl",
};

const badgeSize: Record<AvatarSize, string> = {
  xs: "h-3.5 w-3.5 -right-0.5 -bottom-0.5",
  sm: "h-4 w-4 -right-0.5 -bottom-0.5",
  md: "h-[1.15rem] w-[1.15rem] right-0 bottom-0",
  lg: "h-5 w-5 right-0 bottom-0",
  xl: "h-6 w-6 right-1 bottom-1",
};

const palettes = [
  "bg-forest-100 text-forest-800",
  "bg-forest-600 text-white",
  "bg-sand text-sand-ink",
  "bg-forest-800 text-forest-100",
  "bg-forest-50 text-forest-700 ring-1 ring-inset ring-forest-200",
];

interface AvatarProps {
  name: string;
  size?: AvatarSize;
  verified?: boolean;
  className?: string;
}

export function Avatar({
  name,
  size = "md",
  verified = false,
  className,
}: AvatarProps) {
  const palette = palettes[seededIndex(name, palettes.length)];

  return (
    <span
      className={cn("relative inline-flex shrink-0", boxSize[size], className)}
    >
      <span
        className={cn(
          "flex h-full w-full items-center justify-center rounded-full font-display font-semibold tracking-tight select-none",
          textSize[size],
          palette,
        )}
        aria-hidden="true"
      >
        {initials(name)}
      </span>
      {verified && (
        <span
          className={cn(
            "absolute grid place-items-center rounded-full bg-white",
            badgeSize[size],
          )}
        >
          <BadgeCheck
            className="h-full w-full text-forest-600"
            strokeWidth={2}
            fill="currentColor"
            stroke="white"
          />
        </span>
      )}
    </span>
  );
}
