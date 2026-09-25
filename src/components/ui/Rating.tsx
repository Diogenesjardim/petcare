import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatRating, pluralize } from "@/lib/format";

type RatingSize = "sm" | "md" | "lg";

const starSize: Record<RatingSize, string> = {
  sm: "h-3.5 w-3.5",
  md: "h-4 w-4",
  lg: "h-[1.15rem] w-[1.15rem]",
};

const textSize: Record<RatingSize, string> = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
};

interface RatingProps {
  value: number;
  count?: number;
  size?: RatingSize;
  showValue?: boolean;
  showCount?: boolean;
  className?: string;
}

export function Rating({
  value,
  count,
  size = "md",
  showValue = true,
  showCount = true,
  className,
}: RatingProps) {
  const clamped = Math.max(0, Math.min(5, value));
  const pct = (clamped / 5) * 100;

  return (
    <span className={cn("inline-flex items-center gap-1.5", className)}>
      <span className="relative inline-flex" aria-hidden="true">
        <span className="flex text-forest-200">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={starSize[size]} strokeWidth={1.75} />
          ))}
        </span>
        <span
          className="absolute inset-0 flex overflow-hidden text-forest-500"
          style={{ width: `${pct}%` }}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(starSize[size], "shrink-0")}
              strokeWidth={1.75}
              fill="currentColor"
            />
          ))}
        </span>
      </span>
      {showValue && (
        <span className={cn("font-semibold text-ink", textSize[size])}>
          {formatRating(clamped)}
        </span>
      )}
      {showCount && typeof count === "number" && (
        <span className={cn("text-ink-faint", textSize[size])}>
          ({count.toLocaleString("pt-BR")})
        </span>
      )}
      <span className="sr-only">
        Nota {formatRating(clamped)} de 5
        {typeof count === "number"
          ? `, ${pluralize(count, "avaliação", "avaliações")}`
          : ""}
      </span>
    </span>
  );
}
