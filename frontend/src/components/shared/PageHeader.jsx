import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/shared/SectionLabel";

/** Standard inner-page header. */
export default function PageHeader({ label, title, intro, children }) {
  return (
    <section className="pt-32 sm:pt-40">
      <div className="fxf-container pb-14 sm:pb-20">
        <Reveal>
          <SectionLabel>{label}</SectionLabel>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">{intro}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
