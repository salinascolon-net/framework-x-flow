import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Seo from "@/components/Seo";
import Cta from "@/components/Cta";
import { Monogram } from "@/components/brand/Wordmark";
import { siteConfig, isSet } from "@/config/site";

export default function ThankYou() {
  const source = new URLSearchParams(useLocation().search).get("source");
  const isContact = source === "contact";

  const content = isContact
    ? {
        headline: "Your message has been received.",
        copy: "Framework X Flow will review the information you provided and respond using the email address entered in the form.",
      }
    : {
        headline: "Your call is booked.",
        copy: "You will receive your confirmation and meeting details through TidyCal. Before the call, consider which recurring process is currently creating the most friction in your business.",
      };

  return (
    <>
      <Seo
        title="Thank You | Framework X Flow"
        description="Thank you for reaching out to Framework X Flow."
        path="/thank-you"
      />
      <section className="flex min-h-[80vh] items-center pt-24">
        <div className="fxf-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-teal text-ivory">
              <Check className="h-6 w-6" strokeWidth={2} />
            </span>
            <h1 className="mt-8 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              {content.headline}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">{content.copy}</p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Cta to="/" variant="primary" size="lg" testId="thankyou-home">
                Back to Home
              </Cta>
              {isSet(siteConfig.substackUrl) && (
                <Cta href={siteConfig.substackUrl} external variant="secondary" size="lg" testId="thankyou-substack">
                  Read Framework X Flow Field Notes
                </Cta>
              )}
              {!isContact && (
                <Cta to="/services" variant="secondary" size="lg" testId="thankyou-services">
                  Explore the Services
                </Cta>
              )}
            </div>

            <div className="mt-16 flex items-center gap-3 text-sm text-ink/45">
              <Monogram size={32} />
              <span>{siteConfig.tagline}</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
