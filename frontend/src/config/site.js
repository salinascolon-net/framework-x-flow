/**
 * Framework X Flow — Central Configuration
 * ----------------------------------------
 * Edit business details, links, and launch variables here ONLY.
 * Leave a value as an empty string ("") to hide the related element on the site.
 */

export const siteConfig = {
  businessName: "Framework X Flow",
  monogram: "FXF",
  tagline: "Build the framework. Create the flow.",
  category: "Business Systems and Operations Studio",
  founderName: "Salinas Danielle",

  // --- Launch variables (fill these before going live) ---
  domain: "", // e.g. "https://frameworkxflow.com"
  contactEmail: "", // public display email; leave blank to hide the footer/contact email line
  location: "Hudson Valley, New York",
  serviceArea: "Serving clients remotely",

  // TidyCal booking. Provide either an embed path (username/booking-slug) or a full URL.
  tidyCal: {
    fitCallPath: "", // e.g. "frameworkxflow/systems-fit-call"
    fitCallUrl: "", // e.g. "https://tidycal.com/frameworkxflow/systems-fit-call"
    assessmentPath: "", // e.g. "frameworkxflow/systems-clarity-assessment"
    assessmentUrl: "", // e.g. "https://tidycal.com/frameworkxflow/systems-clarity-assessment"
  },

  // Content + social
  substackUrl: "", // e.g. "https://frameworkxflow.substack.com"
  linkedinUrl: "",
  youtubeUrl: "",

  // Pricing (hidden entirely when blank or when showPricing is false)
  showPricing: false,
  assessmentPrice: "",

  // Personalization
  founderImage: "", // real professional photograph URL; blank shows a branded placeholder
  socialImage: "", // Open Graph / social-sharing image URL
  analyticsId: "",
};

export const isSet = (v) => typeof v === "string" && v.trim().length > 0;

// Resolve the best available booking URL for a given booking type.
export const bookingUrl = (type = "fit") => {
  const t = siteConfig.tidyCal;
  if (type === "assessment") {
    if (isSet(t.assessmentUrl)) return t.assessmentUrl;
    if (isSet(t.assessmentPath)) return `https://tidycal.com/${t.assessmentPath}`;
  }
  if (isSet(t.fitCallUrl)) return t.fitCallUrl;
  if (isSet(t.fitCallPath)) return `https://tidycal.com/${t.fitCallPath}`;
  return "";
};

export const hasAssessmentBooking = () =>
  isSet(siteConfig.tidyCal.assessmentUrl) || isSet(siteConfig.tidyCal.assessmentPath);
