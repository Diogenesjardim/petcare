import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "inverse";
type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium leading-none " +
  "transition-[transform,background-color,border-color,box-shadow,color] duration-200 " +
  "ease-[cubic-bezier(0.22,1,0.36,1)] active:translate-y-px " +
  "disabled:pointer-events-none disabled:opacity-55";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-forest-600 text-white shadow-soft hover:bg-forest-700 hover:shadow-lift",
  secondary:
    "bg-white text-ink border border-line-strong hover:border-forest-300 hover:bg-forest-50",
  ghost: "text-ink-soft hover:bg-forest-50 hover:text-forest-800",
  inverse:
    "bg-white text-forest-800 shadow-soft hover:bg-forest-50 hover:shadow-lift",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-[3.25rem] px-6 text-base",
};

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  "aria-label"?: string;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function buttonClasses(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  fullWidth = false,
  className?: string,
) {
  return cn(
    base,
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className,
  );
}

export function Button(props: ButtonProps) {
  if ("href" in props && props.href !== undefined) {
    const {
      variant,
      size,
      fullWidth,
      className,
      children,
      href,
      target,
      rel,
      onClick,
    } = props;
    const external = /^https?:\/\//.test(href);
    return (
      <Link
        href={href}
        target={target}
        rel={rel ?? (external ? "noreferrer" : undefined)}
        onClick={onClick}
        aria-label={props["aria-label"]}
        className={buttonClasses(variant, size, fullWidth, className)}
      >
        {children}
      </Link>
    );
  }

  const {
    variant,
    size,
    fullWidth,
    className,
    children,
    type = "button",
    ...rest
  } = props;

  return (
    <button
      type={type}
      className={buttonClasses(variant, size, fullWidth, className)}
      {...rest}
    >
      {children}
    </button>
  );
}
