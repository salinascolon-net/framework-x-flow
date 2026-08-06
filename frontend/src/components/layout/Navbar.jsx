import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { nav } from "@/data/content";
import { Wordmark } from "@/components/brand/Wordmark";
import Cta from "@/components/Cta";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-ivory/85 backdrop-blur-xl border-b border-hairline" : "bg-transparent"
      )}
    >
      <nav className="fxf-container flex h-[72px] items-center justify-between" aria-label="Primary">
        <Wordmark className="text-lg" />

        <div className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                data-testid={`nav-${item.label.toLowerCase()}`}
                className={cn(
                  "relative text-sm font-medium tracking-tight text-ink/80 transition-colors hover:text-terracotta",
                  active && "text-ink"
                )}
              >
                {item.label}
                {active && <span className="absolute -bottom-1.5 left-0 h-px w-full bg-terracotta" />}
              </Link>
            );
          })}
          <Cta to="/book" variant="primary" testId="nav-book-call" className="ml-2">
            Book a Call
          </Cta>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-3 lg:hidden">
          <Cta to="/book" variant="primary" size="md" testId="nav-book-call-mobile" className="!px-4 !py-2 text-xs">
            Book
          </Cta>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                data-testid="mobile-menu-trigger"
                className="inline-flex h-11 w-11 items-center justify-center rounded border border-ink/20 text-ink"
              >
                <Menu className="h-5 w-5" strokeWidth={1.75} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[86%] max-w-sm border-l border-hairline bg-ivory p-0 [&>button]:hidden">
              <SheetTitle className="sr-only">Site menu</SheetTitle>
              <div className="flex h-[72px] items-center justify-between border-b border-hairline px-5">
                <Wordmark className="text-base" withLink={false} />
                <SheetClose asChild>
                  <button
                    type="button"
                    aria-label="Close menu"
                    data-testid="mobile-menu-close"
                    className="inline-flex h-11 w-11 items-center justify-center rounded border border-ink/20 text-ink"
                  >
                    <X className="h-5 w-5" strokeWidth={1.75} />
                  </button>
                </SheetClose>
              </div>
              <div className="flex flex-col px-5 py-4">
                {nav.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                    className="border-b border-hairline py-4 font-display text-2xl font-light text-ink transition-colors hover:text-terracotta"
                  >
                    {item.label}
                  </Link>
                ))}
                <Cta to="/book" variant="primary" size="lg" testId="mobile-nav-book" className="mt-6 w-full">
                  Book a Systems Fit Call
                </Cta>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
