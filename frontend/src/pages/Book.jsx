import { useLocation } from "react-router-dom";
import { Check, Info } from "lucide-react";
import Seo from "@/components/Seo";
import PageHeader from "@/components/shared/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/shared/SectionLabel";
import TidyCalEmbed from "@/components/booking/TidyCalEmbed";
import { bookPage } from "@/data/content";
import { siteConfig, hasAssessmentBooking } from "@/config/site";

export default function Book() {
  const { search } = useLocation();
  const wantsAssessment = new URLSearchParams(search).get("type") === "assessment";
  const useAssessment = wantsAssessment && hasAssessmentBooking();

  const path = useAssessment ? siteConfig.tidyCal.assessmentPath : siteConfig.tidyCal.fitCallPath;
  const url = useAssessment ? siteConfig.tidyCal.assessmentUrl : siteConfig.tidyCal.fitCallUrl;

  const heading = useAssessment
    ? "Book your Systems Clarity Assessment."
    : bookPage.headline;

  return (
    <>
      <Seo
        title="Book a Systems Fit Call | Framework X Flow"
        description="Book a short Systems Fit Call to discuss what is happening, where work is getting stuck, and which Framework X Flow service may be appropriate."
        path="/book"
      />

      <PageHeader label="Book a Call" title={heading} intro={bookPage.supporting} />

      <section className="pb-16 sm:pb-24">
        <div className="fxf-container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <TidyCalEmbed path={path} url={url} label="Open Booking Page" />
          </div>

          <Reveal delay={0.1} className="lg:col-span-5">
            <SectionLabel>What happens during the call</SectionLabel>
            <ul className="mt-6 border-t border-hairline">
              {bookPage.whatHappens.map((w, i) => (
                <li key={w} className="flex items-start gap-3 border-b border-hairline py-4 text-base text-ink/80">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-teal" strokeWidth={2} />
                  {w}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex gap-3 border border-hairline bg-surface p-6">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-terracotta" strokeWidth={1.75} />
              <p className="text-sm leading-relaxed text-ink/70">{bookPage.boundary}</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
