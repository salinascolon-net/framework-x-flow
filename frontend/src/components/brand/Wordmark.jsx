import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";

/** Text wordmark: "Framework X Flow" with the X emphasized in terracotta. */
export function Wordmark({ variant = "light", className = "", withLink = true }) {
  const base = variant === "dark" ? "text-ivory" : "text-ink";
  const content = (
    <span className={`font-display font-semibold tracking-tight ${base} ${className}`}>
      Framework{" "}
      <span className="relative text-terracotta font-bold" aria-hidden="false">
        X
      </span>{" "}
      Flow
    </span>
  );
  if (!withLink) return content;
  return (
    <Link to="/" aria-label={`${siteConfig.businessName} — home`} data-testid="logo-home-link">
      {content}
    </Link>
  );
}

/** Compact FXF monogram tile. */
export function Monogram({ size = 40, className = "" }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded bg-teal ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 64" width={size * 0.62} height={size * 0.62}>
        <path d="M20 20 L44 44 M44 20 L20 44" stroke="#F6F3EC" strokeWidth="5" strokeLinecap="round" />
        <circle cx="32" cy="32" r="4.5" fill="#C96846" />
      </svg>
    </span>
  );
}
