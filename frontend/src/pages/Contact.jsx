import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Loader2, Mail } from "lucide-react";
import { toast } from "sonner";
import Seo from "@/components/Seo";
import PageHeader from "@/components/shared/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Cta from "@/components/Cta";
import { siteConfig, isSet } from "@/config/site";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const TEAM_SIZES = ["Just me", "2–5", "6–10", "11–20", "20+"];
const SERVICES = [
  "Systems Clarity Assessment",
  "Workflow and Operations Build",
  "SOP and Knowledge Hub Build",
  "Not sure yet",
];
const NEXT_STEPS = [
  "Book a Systems Fit Call",
  "Ask a question first",
  "Discuss the Systems Clarity Assessment",
  "Discuss an implementation project",
];

const emptyForm = {
  name: "", email: "", business_name: "", business_website: "",
  team_size: "", service_interest: "", message: "", preferred_next_step: "",
  privacy_ack: false, company: "",
};

function Field({ id, label, children, error, required }) {
  return (
    <div>
      <Label htmlFor={id} className="text-sm font-medium text-ink">
        {label} {required && <span className="text-terracotta">*</span>}
      </Label>
      <div className="mt-2">{children}</div>
      {error && (
        <p className="mt-1.5 text-sm text-destructive" data-testid={`error-${id}`} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

const inputCls =
  "rounded-none border-hairline bg-surface focus-visible:ring-teal focus-visible:ring-offset-0 h-11";

export default function Contact() {
  const navigate = useNavigate();
  const [emailEnabled, setEmailEnabled] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    axios
      .get(`${API}/contact/config`)
      .then((r) => setEmailEnabled(!!r.data.email_enabled))
      .catch(() => setEmailEnabled(false));
  }, []);

  const set = (key) => (e) => {
    const val = e && e.target ? e.target.value : e;
    setForm((f) => ({ ...f, [key]: val }));
    setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email address.";
    if (!form.message.trim()) e.message = "Please describe the operational issue.";
    if (!form.privacy_ack) e.privacy_ack = "Please acknowledge the privacy notice.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) {
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/contact`, form);
      navigate("/thank-you?source=contact");
    } catch (err) {
      const detail = err?.response?.data?.detail || "Something went wrong. Please try again or book a call.";
      toast.error(detail);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Seo
        title="Contact Framework X Flow | Ask a Question Before Booking"
        description="Have a question before booking a Systems Fit Call? Send Framework X Flow a message about the operational issue you're facing."
        path="/contact"
      />

      <PageHeader
        label="Contact"
        title="Have a question before booking?"
        intro="If you're not ready to book a call yet, send a message describing what's happening. Framework X Flow will review it and respond by email."
      />

      <section className="pb-20 sm:pb-28">
        <div className="fxf-container grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <SectionLabel>Get in touch</SectionLabel>
            <p className="mt-5 text-base leading-relaxed text-ink/70">
              The fastest way to find your best next step is a short Systems Fit Call. Prefer to
              write first? Use the form and we'll follow up.
            </p>
            <Cta to="/book" variant="secondary" className="mt-7" testId="contact-book-call">
              Book a Systems Fit Call
            </Cta>
            {isSet(siteConfig.contactEmail) && (
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                data-testid="contact-email-link"
                className="mt-6 flex items-center gap-2 text-sm text-ink/70 transition-colors hover:text-terracotta"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} />
                {siteConfig.contactEmail}
              </a>
            )}
          </Reveal>

          <div className="lg:col-span-8">
            {emailEnabled === null && (
              <div className="flex min-h-[300px] items-center justify-center border border-hairline bg-surface text-ink/50">
                <Loader2 className="h-5 w-5 animate-spin" strokeWidth={1.75} />
              </div>
            )}

            {emailEnabled === false && (
              <div className="border border-hairline bg-surface p-8 sm:p-10" data-testid="contact-form-disabled">
                <h2 className="font-display text-xl font-semibold text-ink">
                  The contact form is not available right now.
                </h2>
                <p className="mt-3 text-base leading-relaxed text-ink/70">
                  {isSet(siteConfig.contactEmail)
                    ? <>Please book a Systems Fit Call or email <a className="text-teal underline" href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.</>
                    : "Please book a Systems Fit Call to get in touch."}
                </p>
                <Cta to="/book" variant="primary" className="mt-6" testId="contact-disabled-book">
                  Book a Systems Fit Call
                </Cta>
              </div>
            )}

            {emailEnabled === true && (
              <form
                onSubmit={onSubmit}
                noValidate
                className="border border-hairline bg-surface p-6 sm:p-9"
                data-testid="contact-form"
              >
                {/* honeypot */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={form.company}
                  onChange={set("company")}
                  className="absolute left-[-9999px] h-0 w-0 opacity-0"
                />

                <div className="grid gap-6 sm:grid-cols-2">
                  <Field id="name" label="Name" required error={errors.name}>
                    <Input id="name" value={form.name} onChange={set("name")} className={inputCls} data-testid="input-name" />
                  </Field>
                  <Field id="email" label="Email" required error={errors.email}>
                    <Input id="email" type="email" value={form.email} onChange={set("email")} className={inputCls} data-testid="input-email" />
                  </Field>
                  <Field id="business_name" label="Business name" error={errors.business_name}>
                    <Input id="business_name" value={form.business_name} onChange={set("business_name")} className={inputCls} data-testid="input-business-name" />
                  </Field>
                  <Field id="business_website" label="Business website" error={errors.business_website}>
                    <Input id="business_website" value={form.business_website} onChange={set("business_website")} className={inputCls} data-testid="input-business-website" placeholder="https://" />
                  </Field>
                  <Field id="team_size" label="Team size" error={errors.team_size}>
                    <select id="team_size" value={form.team_size} onChange={set("team_size")} data-testid="select-team-size" className={`w-full border ${inputCls} px-3`}>
                      <option value="">Select…</option>
                      {TEAM_SIZES.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </Field>
                  <Field id="service_interest" label="Service of interest" error={errors.service_interest}>
                    <select id="service_interest" value={form.service_interest} onChange={set("service_interest")} data-testid="select-service" className={`w-full border ${inputCls} px-3`}>
                      <option value="">Select…</option>
                      {SERVICES.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </Field>
                </div>

                <div className="mt-6">
                  <Field id="message" label="Brief description of the operational issue" required error={errors.message}>
                    <Textarea id="message" rows={5} value={form.message} onChange={set("message")} className="rounded-none border-hairline bg-surface focus-visible:ring-teal focus-visible:ring-offset-0" data-testid="input-message" />
                  </Field>
                </div>

                <div className="mt-6">
                  <Field id="preferred_next_step" label="Preferred next step" error={errors.preferred_next_step}>
                    <select id="preferred_next_step" value={form.preferred_next_step} onChange={set("preferred_next_step")} data-testid="select-next-step" className={`w-full border ${inputCls} px-3`}>
                      <option value="">Select…</option>
                      {NEXT_STEPS.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </Field>
                </div>

                <div className="mt-6 flex items-start gap-3">
                  <Checkbox
                    id="privacy_ack"
                    checked={form.privacy_ack}
                    onCheckedChange={(v) => set("privacy_ack")(!!v)}
                    className="mt-0.5 rounded-none border-hairline data-[state=checked]:bg-teal data-[state=checked]:border-teal"
                    data-testid="checkbox-privacy"
                  />
                  <Label htmlFor="privacy_ack" className="text-sm leading-relaxed text-ink/70">
                    I understand my details will be used to respond to my enquiry, as described in the{" "}
                    <a href="/privacy" className="text-teal underline">Privacy Policy</a>.
                  </Label>
                </div>
                {errors.privacy_ack && (
                  <p className="mt-1.5 text-sm text-destructive" data-testid="error-privacy_ack" role="alert">
                    {errors.privacy_ack}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  data-testid="contact-submit"
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded bg-teal px-8 py-4 text-base font-medium text-ivory transition-colors duration-300 hover:bg-terracotta disabled:opacity-60"
                >
                  {submitting && <Loader2 className="h-4 w-4 animate-spin" strokeWidth={1.75} />}
                  {submitting ? "Sending…" : "Send Your Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
