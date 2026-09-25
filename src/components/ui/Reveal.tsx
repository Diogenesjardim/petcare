"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
  type Ref,
} from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
}

/**
 * Fades content up as it scrolls into view. Motion is CSS driven, so users with
 * `prefers-reduced-motion` see the final state immediately (see globals.css).
 */
export function Reveal({
  as: Tag = "div",
  delay = 0,
  className,
  children,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      const id = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as Ref<HTMLElement>}
      data-shown={shown}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn("u-reveal", className)}
    >
      {children}
    </Tag>
  );
}
