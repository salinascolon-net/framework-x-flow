import { Link } from "react-router-dom";
import { Linkedin, Youtube, BookOpen, Mail } from "lucide-react";
import { nav } from "@/data/content";
import { services } from "@/data/content";
import { siteConfig, isSet } from "@/config/site";
import { Wordmark } from "@/components/brand/Wordmark";

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    isSet(siteConfig.substackUrl) && { label: "Substack", href: siteConfig.substackUrl, Icon: BookOpen },
    isSet(siteConfig.linkedinUrl) && { label: "LinkedIn", href: siteConfig.linkedinUrl, Icon: Linkedin },
    isSet(siteConfig.youtubeUrl) && { label: "YouTube", href: siteConfig.youtubeUrl, Icon: Youtube },
  ].filter(Boolean);

  return (
    <footer className="bg-ink text-ivory">
      <div className="fxf-container py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Wordmark variant="dark" className="text-2xl" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/70">
              {siteConfig.tagline}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ivory/55">
              A Business Systems and Operations Studio for owner-led service businesses.
            </p>
            {isSet(siteConfig.contactEmail) && (
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                data-testid="footer-email"
                className="mt-6 inline-flex items-center gap-2 text-sm text-ivory/80 transition-colors hover:text-terracotta"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} />
                {siteConfig.contactEmail}
              </a>
            )}
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.22em] text-ivory/50">Navigate</h3>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-ivory/80 transition-colors hover:text-terracotta">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contact" className="text-sm text-ivory/80 transition-colors hover:text-terracotta">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-xs uppercase tracking-[0.22em] text-ivory/50">Services</h3>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services#${s.slug}`}
                    className="text-sm text-ivory/80 transition-colors hover:text-terracotta"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>

            {socials.length > 0 && (
              <div className="mt-8 flex gap-3">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    data-testid={`footer-social-${label.toLowerCase()}`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded border border-ivory/20 text-ivory/80 transition-colors hover:border-terracotta hover:text-terracotta"
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ivory/15 pt-8 text-sm text-ivory/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {siteConfig.location} | {siteConfig.serviceArea}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link to="/privacy" className="transition-colors hover:text-terracotta">Privacy Policy</Link>
            <Link to="/terms" className="transition-colors hover:text-terracotta">Terms of Use</Link>
            <span>&copy; {year} {siteConfig.businessName}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
