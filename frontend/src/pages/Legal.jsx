import Seo from "@/components/Seo";
import PageHeader from "@/components/shared/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig, isSet } from "@/config/site";

function Legal({ sections }) {
  return (
    <section className="pb-24">
      <div className="fxf-container max-w-3xl">
        <Reveal className="mb-10 border border-hairline bg-surface p-5">
          <p className="text-sm leading-relaxed text-ink/60">
            This page is an editable website template provided for general information. It should be
            reviewed by a qualified professional before you rely on it. It does not constitute legal advice.
          </p>
        </Reveal>
        {sections.map((s, i) => (
          <Reveal key={i} delay={i * 0.03} className="mb-8">
            <h2 className="font-display text-xl font-semibold text-ink">{s.h}</h2>
            {s.body.map((p, j) => (
              <p key={j} className="mt-3 text-base leading-relaxed text-ink/70">{p}</p>
            ))}
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Privacy() {
  const contact = isSet(siteConfig.contactEmail) ? siteConfig.contactEmail : "the contact details listed on this website";
  const sections = [
    { h: "Overview", body: [`This Privacy Policy explains how ${siteConfig.businessName} handles information collected through this website. ${siteConfig.businessName} operates as a Business Systems and Operations Studio and processes only the information needed to respond to enquiries and provide services.`] },
    { h: "Contact-form submissions", body: ["When you submit the contact form, the details you provide (such as your name, email, business information, and message) are sent by email so we can respond. This information is used only to reply to your enquiry and discuss whether the services are a fit."] },
    { h: "Booking through TidyCal", body: ["Calls are scheduled through TidyCal, a third-party scheduling platform. Information you enter when booking is processed by TidyCal under its own privacy policy and shared with us to prepare for and hold the call."] },
    { h: "Email communications", body: [`When you contact us or book a call, we may reply by email and retain that correspondence to manage the enquiry or engagement. You can request that we stop contacting you at any time via ${contact}.`] },
    { h: "Analytics", body: ["If website analytics are enabled, aggregated, non-identifying usage data may be collected to understand how the site is used. Analytics are only active when configured by the site owner."] },
    { h: "Third-party platforms and links", body: ["This website links to third-party platforms such as Substack, LinkedIn, YouTube, and TidyCal. Those platforms are governed by their own privacy policies, and we are not responsible for their practices."] },
    { h: "Cookies", body: ["This website aims to use minimal cookies. Where analytics or embedded third-party tools are enabled, they may set cookies governed by their respective providers."] },
    { h: "Your choices", body: [`You may request access to, correction of, or deletion of information you have submitted by contacting ${contact}. We will respond to reasonable requests in line with applicable law.`] },
  ];
  return (
    <>
      <Seo title="Privacy Policy | Framework X Flow" description="How Framework X Flow handles information collected through this website." path="/privacy" />
      <PageHeader label="Legal" title="Privacy Policy" intro="How Framework X Flow handles the information you share through this website." />
      <Legal sections={sections} />
    </>
  );
}

export function Terms() {
  const sections = [
    { h: "General use", body: [`This website is provided by ${siteConfig.businessName} for general informational purposes. By using it, you agree to these Terms of Use.`] },
    { h: "No guarantee of outcomes", body: ["The content on this website is general information about systems, workflows, and operations services. It does not guarantee any specific business result, revenue increase, or time savings. Outcomes depend on your business, implementation, and adoption."] },
    { h: "Intellectual property", body: [`Unless otherwise noted, the content, wording, method, and design of this website are the property of ${siteConfig.businessName} and may not be copied or reused without permission.`] },
    { h: "Third-party platforms and links", body: ["This website links to third-party platforms and services. We are not responsible for the content, availability, or practices of those third parties."] },
    { h: "Paid services", body: ["Any paid engagement (such as an assessment, implementation, or documentation project) is governed by a separate written agreement between you and Framework X Flow. Those terms take precedence over this website's general information for the relevant engagement."] },
    { h: "Limitation of reliance", body: ["General information on this website should not be relied upon as specific professional advice for your situation. For advice tailored to your business, engage Framework X Flow through a scoped service."] },
  ];
  return (
    <>
      <Seo title="Terms of Use | Framework X Flow" description="Terms governing use of the Framework X Flow website." path="/terms" />
      <PageHeader label="Legal" title="Terms of Use" intro="The terms that govern general use of this website." />
      <Legal sections={sections} />
    </>
  );
}
