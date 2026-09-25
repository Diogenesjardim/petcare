import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeadingAlign = "left" | "center";
type HeadingTone = "default" | "inverse";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: HeadingAlign;
  tone?: HeadingTone;
  as?: "h2" | "h3";
  className?: string;
  children?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
  as: Tag = "h2",
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        align === "center" ? "max-w-2xl" : "max-w-3xl",
        align === "center" && "mx-auto",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em]",
            tone === "inverse" ? "text-forest-300" : "text-forest-600",
          )}
        >
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              tone === "inverse" ? "bg-forest-300" : "bg-forest-500",
            )}
          />
          {eyebrow}
        </span>
      )}
      <Tag
        className={cn(
          "text-balance text-3xl sm:text-4xl lg:text-[2.75rem]",
          tone === "inverse" ? "text-white" : "text-ink",
        )}
      >
        {title}
      </Tag>
      {description && (
        <p
          className={cn(
            "text-pretty text-base leading-relaxed sm:text-lg",
            tone === "inverse" ? "text-forest-100/85" : "text-ink-soft",
          )}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
