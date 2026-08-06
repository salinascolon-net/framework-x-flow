import { Reveal } from "@/components/motion/Reveal";
import Cta from "@/components/Cta";

/** Dark closing CTA band. */
export default function CtaBand({
  headline,
  copy,
  primaryLabel = "Book a Systems Fit Call",
  primaryTo = "/book",
  secondaryLabel,
  secondaryTo,
}) {
  return (
    <section className="bg-ink text-ivory">
      <div className="fxf-container py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-8">
            <span className="text-terracotta text-3xl leading-none">&times;</span>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              {headline}
            </h2>
            {copy && <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory/70">{copy}</p>}
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-4 sm:flex-row lg:col-span-4 lg:justify-end">
            <Cta to={primaryTo} variant="onDark" size="lg" testId="ctaband-primary">
              {primaryLabel}
            </Cta>
            {secondaryLabel && secondaryTo && (
              <Cta to={secondaryTo} variant="ghostDark" size="lg" testId="ctaband-secondary">
                {secondaryLabel}
              </Cta>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
