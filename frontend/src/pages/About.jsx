import { Link } from "react-router-dom";
import { Linkedin, Check } from "lucide-react";
import Seo from "@/components/Seo";
import PageHeader from "@/components/shared/PageHeader";
import { Reveal, Stagger, childVariants } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/shared/SectionLabel";
import CtaBand from "@/components/shared/CtaBand";
import { motion } from "framer-motion";
import { about } from "@/data/content";
import { siteConfig, isSet } from "@/config/site";
import { ASSETS } from "@/lib/assets";

export default function About() {
  const founderImg = isSet(siteConfig.founderImage) ? siteConfig.founderImage : ASSETS.founderPlaceholder;

  return (
    <>
      <Seo
        title="About Framework X Flow | Systems Thinking and Operational Clarity"
        description="Framework X Flow was founded by Salinas Danielle to help small-business owners create the internal clarity required for consistent delivery, confident delegation, and sustainable growth."
        path="/about"
      />

      <PageHeader label="About" title={about.headline} />

      <section className="pb-16 sm:pb-24">
        <div className="fxf-container grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="relative border border-hairline bg-surface p-3 lg:sticky lg:top-28">
              <img
                src={founderImg}
                alt={
                  isSet(siteConfig.founderImage)
                    ? `${siteConfig.founderName}, founder of Framework X Flow`
                    : "Abstract X monogram placeholder, to be replaced with the founder's professional photograph."
                }
                className="aspect-[3/4] w-full object-cover"
                loading="lazy"
              />
              <span className="absolute bottom-6 left-6 bg-ivory/90 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-teal">
                {siteConfig.founderName}
              </span>
            </div>
            {isSet(siteConfig.linkedinUrl) && (
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="about-linkedin"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-terracotta"
              >
                <Linkedin className="h-4 w-4" strokeWidth={1.5} />
                Connect on LinkedIn
              </a>
            )}
          </Reveal>

          <div className="lg:col-span-7">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="mb-5 text-lg leading-relaxed text-ink/75">{p}</p>
              </Reveal>
            ))}

            <Reveal className="mt-6 border-t border-hairline pt-8">
              <h2 className="text-xs uppercase tracking-[0.2em] text-teal">She knows how to</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {about.knowsHow.map((k) => (
                  <li key={k} className="flex items-start gap-2.5 text-base text-ink/80">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-teal" strokeWidth={2} />
                    {k}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-8 border-t border-hairline pt-8">
              {about.closing.map((c, i) => (
                <p key={i} className="mb-4 text-lg leading-relaxed text-ink/75">{c}</p>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ink py-20 text-ivory sm:py-28">
        <div className="fxf-container">
          <Reveal className="max-w-2xl">
            <SectionLabel dark>Values</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              How Framework X Flow works.
            </h2>
          </Reveal>
          <Stagger className="mt-14 grid gap-0 border-t border-l border-ivory/15 sm:grid-cols-2 lg:grid-cols-5">
            {about.values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={childVariants}
                className="border-b border-r border-ivory/15 p-7"
              >
                <span className="font-display text-3xl font-light text-ivory/25">0{i + 1}</span>
                <h3 className="mt-4 font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/60">{v.body}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBand
        headline="Let's make your business easier to run."
        copy="Book a short Systems Fit Call to talk through where your operations feel heaviest."
        secondaryLabel="Explore the Services"
        secondaryTo="/services"
      />
    </>
  );
}
