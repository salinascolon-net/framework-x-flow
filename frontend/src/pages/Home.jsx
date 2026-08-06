import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Seo, { orgJsonLd, faqJsonLd } from "@/components/Seo";
import KineticHeadline from "@/components/motion/KineticHeadline";
import { Reveal, Stagger, childVariants } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/shared/SectionLabel";
import HeroVisual from "@/components/shared/HeroVisual";
import Marquee from "@/components/brand/Marquee";
import MethodDiagram from "@/components/shared/MethodDiagram";
import ServicePreviewCards from "@/components/shared/ServicePreviewCards";
import FaqAccordion from "@/components/shared/FaqAccordion";
import CtaBand from "@/components/shared/CtaBand";
import Cta from "@/components/Cta";
import { Link } from "react-router-dom";
import {
  hero, problem, solution, method, idealClient, differentiators, founderPreview, faqs,
} from "@/data/content";

export default function Home() {
  const homeFaqs = faqs.slice(0, 4);

  return (
    <>
      <Seo
        title="Framework X Flow | Business Systems and Operations Studio"
        description="Framework X Flow helps owner-led service businesses turn scattered operations into clear, repeatable systems—clarifying workflows, documenting what works, and building practical operating systems."
        path="/"
        jsonLd={[orgJsonLd(), faqJsonLd(homeFaqs)]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden pt-28 sm:pt-32">
        <div className="fxf-container grid gap-12 pb-16 pt-8 lg:grid-cols-12 lg:gap-10 lg:pb-24">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="eyebrow">
                <span className="text-terracotta">&times;</span> {hero.eyebrow}
              </span>
            </motion.div>

            <KineticHeadline
              lines={hero.headlineLines}
              className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[4.4rem]"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-ink/70"
            >
              {hero.supporting}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7 }}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <Cta to="/book" variant="primary" size="lg" testId="hero-book-call">
                Book a Systems Fit Call
              </Cta>
              <Cta to="/services" variant="secondary" size="lg" testId="hero-explore-services">
                Explore the Services
              </Cta>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.7 }}
              className="mt-6 text-sm text-ink/50"
            >
              {hero.microcopy}
            </motion.p>
          </div>

          <div className="lg:col-span-5">
            <HeroVisual />
          </div>
        </div>
      </section>

      <Marquee />

      {/* PROBLEM */}
      <section className="py-20 sm:py-28">
        <div className="fxf-container">
          <Reveal className="max-w-3xl">
            <SectionLabel index="01">The friction</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">
              {problem.headline}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">{problem.intro}</p>
          </Reveal>

          <Stagger className="mt-14 grid gap-0 border-t border-l border-hairline sm:grid-cols-2 lg:grid-cols-3">
            {problem.cards.map((card, i) => (
              <motion.div
                key={card.title}
                variants={childVariants}
                className="group border-b border-r border-hairline bg-surface p-8 transition-colors duration-300 hover:bg-ink"
                data-testid={`problem-card-${i}`}
              >
                <span className="font-display text-sm text-terracotta">0{i + 1}</span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink transition-colors group-hover:text-ivory">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60 transition-colors group-hover:text-ivory/70">
                  {card.body}
                </p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="bg-sage/25 py-20 sm:py-28">
        <div className="fxf-container grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionLabel index="02">The shift</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              {solution.headline}
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">{solution.supporting}</p>
          </Reveal>
          <Stagger className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:col-span-7 lg:pt-12">
            {solution.benefits.map((b) => (
              <motion.div
                key={b}
                variants={childVariants}
                className="flex items-center gap-3 border-b border-hairline pb-4"
              >
                <Check className="h-4 w-4 shrink-0 text-teal" strokeWidth={2} />
                <span className="text-base text-ink/85">{b}</span>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 sm:py-28">
        <div className="fxf-container">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <SectionLabel index="03">The services</SectionLabel>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">
                Three clear ways to work together.
              </h2>
            </div>
            <Cta to="/services" variant="secondary" testId="services-preview-all">
              See All Services
            </Cta>
          </Reveal>
          <div className="mt-14">
            <ServicePreviewCards />
          </div>
        </div>
      </section>

      {/* METHOD PREVIEW */}
      <section className="bg-ink py-20 text-ivory sm:py-28">
        <div className="fxf-container">
          <Reveal className="max-w-3xl">
            <SectionLabel index="04" dark>The method</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              {method.headline}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <div className="flex flex-wrap items-center gap-3 font-display text-lg font-light text-ivory/90 sm:text-2xl">
              {method.steps.map((s, i) => (
                <span key={s.name} className="flex items-center gap-3">
                  <span>{s.name}</span>
                  {i < method.steps.length - 1 && <ArrowRight className="h-5 w-5 text-terracotta" strokeWidth={1.5} />}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15} className="mt-12">
            <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
              {method.steps.map((s) => (
                <div key={s.name} className="border-l border-ivory/15 px-6 py-6">
                  <span className="font-display text-3xl font-light text-ivory/30">{s.no}</span>
                  <h3 className="mt-3 font-display text-xl font-semibold">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ivory/60">{s.short}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2} className="mt-12">
            <Cta to="/approach" variant="onDark" testId="method-preview-approach">
              See the Full Approach
            </Cta>
          </Reveal>
        </div>
      </section>

      {/* IDEAL CLIENT */}
      <section className="py-20 sm:py-28">
        <div className="fxf-container grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionLabel index="05">The fit</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              {idealClient.headline}
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">{idealClient.copy}</p>
            <Cta to="/book" variant="primary" className="mt-8" testId="ideal-client-cta">
              See Whether We Are a Fit
            </Cta>
          </Reveal>
          <Stagger className="lg:col-span-7">
            <div className="border-t border-hairline">
              {idealClient.indicators.map((ind, i) => (
                <motion.div
                  key={ind}
                  variants={childVariants}
                  className="flex items-start gap-4 border-b border-hairline py-5"
                >
                  <span className="font-display text-sm text-terracotta">0{i + 1}</span>
                  <span className="text-base leading-relaxed text-ink/80">{ind}</span>
                </motion.div>
              ))}
            </div>
          </Stagger>
        </div>
      </section>

      {/* DIFFERENTIATOR */}
      <section className="bg-sage/25 py-20 sm:py-28">
        <div className="fxf-container">
          <Reveal className="max-w-3xl">
            <SectionLabel index="06">The difference</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">
              {differentiators.headline}
            </h2>
          </Reveal>
          <Stagger className="mt-14 grid gap-0 border-t border-l border-hairline sm:grid-cols-2">
            {differentiators.principles.map((p, i) => (
              <motion.div
                key={p.title}
                variants={childVariants}
                className="border-b border-r border-hairline bg-surface p-8 sm:p-10"
              >
                <span className="text-terracotta text-xl">&times;</span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">{p.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink/65">{p.body}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FOUNDER PREVIEW */}
      <section className="py-20 sm:py-28">
        <div className="fxf-container grid gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-7">
            <SectionLabel index="07">The founder</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              {founderPreview.headline}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">{founderPreview.copy}</p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/60">{founderPreview.copy2}</p>
            <ul className="mt-6 space-y-3">
              {founderPreview.strengths.map((s) => (
                <li key={s} className="flex items-start gap-3 text-base text-ink/80">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-teal" strokeWidth={2} />
                  {s}
                </li>
              ))}
            </ul>
            <Cta to="/about" variant="secondary" className="mt-8" testId="founder-preview-about">
              Meet the Founder
            </Cta>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="relative border border-hairline bg-surface p-3">
              <img
                src={require("@/lib/assets").ASSETS.founderPlaceholder}
                alt="Abstract X monogram placeholder representing Framework X Flow's founder, to be replaced with a professional photograph."
                className="aspect-[3/4] w-full object-cover"
                loading="lazy"
              />
              <span className="absolute bottom-6 left-6 bg-ivory/90 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-teal">
                Salinas Danielle
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="bg-sage/25 py-20 sm:py-28">
        <div className="fxf-container grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <SectionLabel index="08">Questions</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              A few things owners ask first.
            </h2>
            <Link
              to="/services#faq"
              data-testid="faq-preview-all"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-terracotta"
            >
              Read all questions
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </Link>
          </Reveal>
          <div className="lg:col-span-8">
            <FaqAccordion items={homeFaqs} />
          </div>
        </div>
      </section>

      <CtaBand
        headline="Your business should not depend on you remembering everything."
        copy="Let's identify what is creating friction and determine the clearest next step."
        primaryLabel="Book a Systems Fit Call"
        primaryTo="/book"
        secondaryLabel="Review the Services"
        secondaryTo="/services"
      />
    </>
  );
}
