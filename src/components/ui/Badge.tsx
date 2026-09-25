import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Icon, type IconName } from "@/components/ui/Icon";

type BadgeTone = "mint" | "solid" | "outline" | "sand" | "muted";
type BadgeSize = "sm" | "md";

const tones: Record<BadgeTone, string> = {
  mint: "bg-forest-50 text-forest-800 ring-1 ring-inset ring-forest-100",
  solid: "bg-forest-600 text-white",
  outline: "bg-white text-ink-soft ring-1 ring-inset ring-line-strong",
  sand: "bg-sand text-sand-ink ring-1 ring-inset ring-[#e7d6b3]",
  muted: "bg-ink/[0.04] text-ink-soft",
};

const sizeMap: Record<BadgeSize, string> = {
  sm: "h-6 px-2 text-[0.7rem] gap-1",
  md: "h-7 px-2.5 text-xs gap-1.5",
};

interface BadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
  size?: BadgeSize;
  icon?: IconName;
  className?: string;
}

export function Badge({
  children,
  tone = "mint",
  size = "md",
  icon,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium tracking-tight whitespace-nowrap",
        tones[tone],
        sizeMap[size],
        className,
      )}
    >
      {icon && (
        <Icon
          name={icon}
          className={size === "sm" ? "h-3 w-3" : "h-3.5 w-3.5"}
          strokeWidth={2}
        />
      )}
      {children}
    </span>
  );
}
