import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-teal text-ivory hover:bg-terracotta border border-transparent",
  secondary:
    "bg-transparent text-ink border border-ink/25 hover:border-terracotta hover:text-terracotta",
  onDark:
    "bg-ivory text-ink hover:bg-terracotta hover:text-ivory border border-transparent",
  ghostDark:
    "bg-transparent text-ivory border border-ivory/30 hover:border-terracotta hover:text-terracotta",
};

/**
 * Unified CTA. Provide `to` for internal routes, `href` for external links.
 * Never renders a dead control.
 */
export default function Cta({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  external = false,
  className = "",
  testId,
  size = "md",
}) {
  const sizing = size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm";
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded font-medium tracking-tight",
    "transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2",
    sizing,
    variants[variant],
    className
  );
  const Icon = external ? ArrowUpRight : ArrowRight;
  const inner = (
    <>
      <span>{children}</span>
      <Icon
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        strokeWidth={1.75}
      />
    </>
  );

  if (external && href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} data-testid={testId}>
        {inner}
      </a>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} data-testid={testId} onClick={onClick}>
        {inner}
      </a>
    );
  }
  if (to) {
    return (
      <Link to={to} className={classes} data-testid={testId} onClick={onClick}>
        {inner}
      </Link>
    );
  }
  return (
    <button type="button" className={classes} data-testid={testId} onClick={onClick}>
      {inner}
    </button>
  );
}
