import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import Seo, { faqJsonLd } from "@/components/Seo";
import PageHeader from "@/components/shared/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/shared/SectionLabel";
import FaqAccordion from "@/components/shared/FaqAccordion";
import CtaBand from "@/components/shared/CtaBand";
import Cta from "@/components/Cta";
import { services, comparison, faqs } from "@/data/content";
import { siteConfig, hasAssessmentBooking } from "@/config/site";

function PricingBlock({ service }) {
  const show = siteConfig.showPricing && service.bookingType === "assessment" && siteConfig.assessmentPrice;
  if (!show) return null;
  return (
    <div className="mt-6 inline-flex items-baseline gap-2 border border-hairline bg-ivory px-4 py-2">
      <span className="text-xs uppercase tracking-[0.18em] text-ink/50">Investment</span>
      <span className="font-display text-lg font-semibold text-ink">{siteConfig.assessmentPrice}</span>
    </div>
  );
}

function ServiceCta({ service }) {
  const label =
    service.bookingType === "assessment"
      ? hasAssessmentBooking()
        ? service.ctaWithBooking
        : service.ctaFallback
      : service.ctaWithBooking;
  const to = service.bookingType === "assessment" && hasAssessmentBooking() ? "/book?type=assessment" : "/book";
  return (
    <Cta to={to} variant="primary" testId={`service-cta-${service.slug}`}>
      {label}
    </Cta>
  );
}

export default function Services() {
  return (
    <>
      <Seo
        title="Business Systems, Workflow Implementation and SOP Services | Framework X Flow"
        description="Start with a Systems Clarity Assessment, move into a Workflow and Operations Build, or organize your knowledge with an SOP and Knowledge Hub Build."
        path="/services"
        jsonLd={[faqJsonLd(faqs)]}
      />

      <PageHeader
        label="Services"
        title="Choose the level of support your business needs."
        intro="Start with clarity, move into implementation, or organize the knowledge your business needs to operate consistently."
      />

      {/* Service detail sections */}
      {services.map((s, idx) => (
        <section
          key={s.slug}
          id={s.slug}
          className={`scroll-mt-24 py-16 sm:py-24 ${idx % 2 === 1 ? "bg-sage/20" : ""}`}
        >
          <div className="fxf-container">
            <div className="grid gap-12 lg:grid-cols-12">
              <Reveal className="lg:col-span-5">
                <SectionLabel index={s.fig.replace("Fig. ", "")}>{s.name}</SectionLabel>
                <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                  {s.headline}
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-ink/70">{s.description}</p>
                <PricingBlock service={s} />
                <div className="mt-8">
                  <ServiceCta service={s} />
                </div>

                <div className="mt-10 border-t border-hairline pt-6">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-teal">Best for</h3>
                  <ul className="mt-4 space-y-2.5">
                    {s.bestFor.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.1} className="lg:col-span-7">
                <div className="border border-hairline bg-surface p-8 sm:p-10">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-teal">What the client receives</h3>
                  {s.receivesNote && <p className="mt-3 text-sm italic text-ink/55">{s.receivesNote}</p>}
                  <ul className="mt-5 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                    {s.receives.map((r) => (
                      <li key={r} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/80">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" strokeWidth={2} />
                        {r}
                      </li>
                    ))}
                  </ul>

                  {s.tools && (
                    <div className="mt-8 border-t border-hairline pt-6">
                      <h4 className="text-xs uppercase tracking-[0.2em] text-ink/45">Works within tools like</h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {s.tools.map((t) => (
                          <span key={t} className="border border-hairline bg-ivory px-3 py-1 text-xs text-ink/70">
                            {t}
                          </span>
                        ))}
                      </div>
                      <p className="mt-3 text-xs italic text-ink/50">
                        Framework X Flow is not affiliated with, or exclusively committed to, any single platform.
                      </p>
                    </div>
                  )}

                  {s.areasReviewed && (
                    <div className="mt-8 border-t border-hairline pt-6">
                      <h4 className="text-xs uppercase tracking-[0.2em] text-ink/45">Potential areas reviewed</h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {s.areasReviewed.map((t) => (
                          <span key={t} className="border border-hairline bg-ivory px-3 py-1 text-xs text-ink/70">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {s.standard && (
                    <div className="mt-8 border-t border-hairline pt-6">
                      <h4 className="text-xs uppercase tracking-[0.2em] text-ink/45">Documentation standard</h4>
                      <ul className="mt-3 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                        {s.standard.map((t) => (
                          <li key={t} className="text-sm text-ink/70">— {t}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-8 grid gap-6 border-t border-hairline pt-6 sm:grid-cols-2">
                    <div>
                      <h4 className="text-xs uppercase tracking-[0.2em] text-ink/45">The outcome</h4>
                      <ul className="mt-3 space-y-2">
                        {s.outcome.map((o) => (
                          <li key={o} className="text-sm leading-relaxed text-ink/75">— {o}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-[0.2em] text-ink/45">How it begins</h4>
                      <p className="mt-3 text-sm leading-relaxed text-ink/75">{s.begins}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* COMPARISON */}
      <section className="py-20 sm:py-28">
        <div className="fxf-container">
          <Reveal className="max-w-2xl">
            <SectionLabel>Which fits</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Not sure where to start? Match your situation.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-0 border-t border-l border-hairline sm:grid-cols-2 lg:grid-cols-4">
            {comparison.map((c) => (
              <Link
                key={c.need}
                to={c.to}
                data-testid={`comparison-${c.best.toLowerCase().replace(/\s+/g, "-")}`}
                className="group flex flex-col justify-between border-b border-r border-hairline bg-surface p-7 transition-colors duration-300 hover:bg-ink"
              >
                <p className="font-display text-lg leading-snug text-ink transition-colors group-hover:text-ivory">
                  &ldquo;{c.need}&rdquo;
                </p>
                <div className="mt-8">
                  <span className="text-xs uppercase tracking-[0.18em] text-terracotta">Best starting point</span>
                  <p className="mt-2 flex items-center gap-2 text-sm font-medium text-teal transition-colors group-hover:text-ivory">
                    {c.best}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.75} />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 bg-sage/25 py-20 sm:py-28">
        <div className="fxf-container grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Frequently asked questions.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/65">
              Still unsure? A short Systems Fit Call is the fastest way to find your best next step.
            </p>
            <Cta to="/book" variant="primary" className="mt-7" testId="faq-book-call">
              Book a Systems Fit Call
            </Cta>
          </Reveal>
          <div className="lg:col-span-8">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CtaBand
        headline="Find the right level of support for where your business is now."
        copy="Book a short Systems Fit Call and we'll point you toward the clearest next step."
        secondaryLabel="Read the Approach"
        secondaryTo="/approach"
      />
    </>
  );
}
