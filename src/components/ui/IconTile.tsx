import { cn } from "@/lib/utils";
import { Icon, type IconName } from "@/components/ui/Icon";

type TileTone = "mint" | "solid" | "outline" | "inverse";
type TileSize = "sm" | "md" | "lg";

const tones: Record<TileTone, string> = {
  mint: "bg-forest-50 text-forest-700 ring-1 ring-inset ring-forest-100",
  solid: "bg-forest-600 text-white",
  outline: "bg-white text-forest-700 ring-1 ring-inset ring-line-strong",
  inverse: "bg-white/10 text-forest-100 ring-1 ring-inset ring-white/15",
};

const sizeMap: Record<TileSize, { box: string; icon: string }> = {
  sm: { box: "h-9 w-9 rounded-lg", icon: "h-[1.05rem] w-[1.05rem]" },
  md: { box: "h-11 w-11 rounded-xl", icon: "h-5 w-5" },
  lg: { box: "h-14 w-14 rounded-2xl", icon: "h-[1.6rem] w-[1.6rem]" },
};

interface IconTileProps {
  name: IconName;
  tone?: TileTone;
  size?: TileSize;
  className?: string;
}

export function IconTile({
  name,
  tone = "mint",
  size = "md",
  className,
}: IconTileProps) {
  const s = sizeMap[size];
  return (
    <span
      className={cn(
        "inline-grid shrink-0 place-items-center",
        s.box,
        tones[tone],
        className,
      )}
    >
      <Icon name={name} className={s.icon} strokeWidth={1.75} />
    </span>
  );
}
