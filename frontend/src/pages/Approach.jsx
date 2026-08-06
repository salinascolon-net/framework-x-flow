import Seo from "@/components/Seo";
import PageHeader from "@/components/shared/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/shared/SectionLabel";
import MethodDiagram from "@/components/shared/MethodDiagram";
import CtaBand from "@/components/shared/CtaBand";
import { Check, X as XIcon } from "lucide-react";
import { method, approach } from "@/data/content";
import { ASSETS } from "@/lib/assets";

export default function Approach() {
  return (
    <>
      <Seo
        title="The Framework X Flow Method | Practical Operations Improvement"
        description="Map, Frame, Build, Flow — a practical process that takes owner-led service businesses from operational friction to a system people can actually follow and maintain."
        path="/approach"
      />

      <PageHeader
        label="Approach"
        title="A practical process from operational friction to sustainable flow."
        intro={method.supporting}
      />

      {/* Method visual */}
      <section className="pb-8">
        <div className="fxf-container">
          <Reveal>
            <div className="overflow-hidden border border-hairline bg-surface">
              <img
                src={ASSETS.methodDiagram}
                alt="Blueprint-style diagram of four connected process stages linked by directional arrows crossing at an X."
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Detailed method */}
      <section className="py-16 sm:py-24">
        <div className="fxf-container">
          <Reveal className="max-w-2xl">
            <SectionLabel>The four steps</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Map &rarr; Frame &rarr; Build &rarr; Flow
            </h2>
          </Reveal>
          <div className="mt-12 border-t border-r border-hairline">
            <MethodDiagram detailed />
          </div>
        </div>
      </section>

      {/* Decisions + Will Not */}
      <section className="bg-sage/25 py-16 sm:py-24">
        <div className="fxf-container grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionLabel>How decisions are made</SectionLabel>
            <h2 className="mt-5 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Recommendations are weighed against real impact.
            </h2>
            <ul className="mt-8 border-t border-hairline">
              {approach.decisions.map((d) => (
                <li key={d} className="flex items-center gap-3 border-b border-hairline py-3.5 text-base text-ink/80">
                  <Check className="h-4 w-4 shrink-0 text-teal" strokeWidth={2} />
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionLabel>What we will not do</SectionLabel>
            <h2 className="mt-5 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Clear boundaries, by design.
            </h2>
            <ul className="mt-8 border-t border-hairline">
              {approach.willNot.map((d) => (
                <li key={d} className="flex items-start gap-3 border-b border-hairline py-3.5 text-base text-ink/80">
                  <XIcon className="mt-1 h-4 w-4 shrink-0 text-terracotta" strokeWidth={2} />
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Client contributes */}
      <section className="py-16 sm:py-24">
        <div className="fxf-container">
          <Reveal className="max-w-2xl">
            <SectionLabel>A working partnership</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              What clients are expected to contribute.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/65">
              The best results come from a genuine working relationship. Here is what makes the
              process effective.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-0 border-t border-l border-hairline sm:grid-cols-2 lg:grid-cols-3">
            {approach.clientContributes.map((c, i) => (
              <div key={c} className="border-b border-r border-hairline bg-surface p-7">
                <span className="font-display text-sm text-terracotta">0{i + 1}</span>
                <p className="mt-3 text-base leading-relaxed text-ink/80">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        headline="See how the method applies to your operation."
        copy="A short Systems Fit Call is the simplest way to find where Map, Frame, Build, and Flow fit your business."
        secondaryLabel="Explore the Services"
        secondaryTo="/services"
      />
    </>
  );
}
