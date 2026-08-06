import { motion } from "framer-motion";
import Seo from "@/components/Seo";
import PageHeader from "@/components/shared/PageHeader";
import { Reveal, Stagger, childVariants } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/shared/SectionLabel";
import CtaBand from "@/components/shared/CtaBand";
import Cta from "@/components/Cta";
import { insights } from "@/data/content";
import { siteConfig, isSet } from "@/config/site";

export default function Insights() {
  const hasSubstack = isSet(siteConfig.substackUrl);

  return (
    <>
      <Seo
        title="Framework X Flow Field Notes | Systems, Workflows and Operations"
        description="Practical notes on workflows, operations, documentation, AI-assisted systems, and building a business that does not depend on constant owner intervention."
        path="/insights"
      />

      <PageHeader label="Insights" title={insights.title} intro={insights.supporting}>
        <div className="mt-8">
          {hasSubstack ? (
            <Cta href={siteConfig.substackUrl} external variant="primary" size="lg" testId="insights-substack">
              Read and Subscribe on Substack
            </Cta>
          ) : (
            <div
              className="inline-flex items-center gap-3 border border-hairline bg-surface px-5 py-3"
              data-testid="insights-coming-soon"
            >
              <span className="h-2 w-2 rounded-full bg-terracotta" />
              <span className="text-sm font-medium text-ink/70">Framework X Flow Field Notes is coming soon.</span>
            </div>
          )}
        </div>
      </PageHeader>

      <section className="pb-20 sm:pb-28">
        <div className="fxf-container">
          <Reveal>
            <SectionLabel>What we write about</SectionLabel>
          </Reveal>
          <Stagger className="mt-10 grid gap-0 border-t border-l border-hairline sm:grid-cols-2 lg:grid-cols-3">
            {insights.topics.map((t, i) => (
              <motion.div
                key={t}
                variants={childVariants}
                className="group flex items-center justify-between border-b border-r border-hairline bg-surface p-6 transition-colors duration-300 hover:bg-ivory"
              >
                <span className="text-base text-ink/80">{t}</span>
                <span className="font-display text-sm text-hairline transition-colors group-hover:text-terracotta">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBand
        headline="Prefer to talk it through?"
        copy="Book a short Systems Fit Call to discuss the operational friction you're facing right now."
        secondaryLabel="Explore the Services"
        secondaryTo="/services"
      />
    </>
  );
}
