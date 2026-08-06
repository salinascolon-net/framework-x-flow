import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Loader2, CalendarClock } from "lucide-react";
import Cta from "@/components/Cta";
import { isSet } from "@/config/site";

const SCRIPT_SRC = "https://asset-tidycal.b-cdn.net/js/embed.js";

/**
 * Inline TidyCal booking widget with loading, error, and fallback states.
 * `path` = "username/booking-slug"; `url` = full external booking URL.
 */
export default function TidyCalEmbed({ path, url, label = "Open Booking Page" }) {
  const [status, setStatus] = useState(isSet(path) ? "loading" : "unconfigured");
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isSet(path)) return;
    let cancelled = false;

    const ensureWidget = () => {
      if (window.TidyCal && typeof window.TidyCal.init === "function") {
        try {
          window.TidyCal.init();
        } catch (e) {
          /* init is best-effort */
        }
      }
    };

    // Fail gracefully if the embed does not render in time.
    const timeout = setTimeout(() => {
      if (cancelled) return;
      const el = containerRef.current;
      const rendered = el && el.querySelector("iframe");
      setStatus(rendered ? "ready" : "error");
    }, 6000);

    const onLoaded = () => {
      if (cancelled) return;
      ensureWidget();
      const el = containerRef.current;
      if (el && el.querySelector("iframe")) setStatus("ready");
    };

    const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
    if (existing) {
      ensureWidget();
      setTimeout(onLoaded, 800);
    } else {
      const script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      script.onload = () => setTimeout(onLoaded, 500);
      script.onerror = () => !cancelled && setStatus("error");
      document.body.appendChild(script);
    }

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [path]);

  const externalUrl = isSet(url) ? url : isSet(path) ? `https://tidycal.com/${path}` : "";

  if (status === "unconfigured") {
    return (
      <div
        className="flex flex-col items-start gap-5 border border-hairline bg-surface p-8 sm:p-10"
        data-testid="tidycal-unconfigured"
      >
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-ivory text-teal">
          <CalendarClock className="h-5 w-5" strokeWidth={1.5} />
        </span>
        <div>
          <h3 className="font-display text-xl font-semibold text-ink">Online booking is being set up.</h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-ink/65">
            The Systems Fit Call scheduler will appear here shortly. In the meantime, send a
            message and Framework X Flow will help you find the right next step.
          </p>
        </div>
        <Cta to="/contact" variant="primary" testId="booking-contact-fallback">
          Discuss Your Systems
        </Cta>
      </div>
    );
  }

  return (
    <div className="border border-hairline bg-surface p-2 sm:p-3" data-testid="tidycal-embed-wrap">
      {status === "loading" && (
        <div className="flex min-h-[420px] items-center justify-center gap-3 text-ink/60" data-testid="tidycal-loading">
          <Loader2 className="h-5 w-5 animate-spin" strokeWidth={1.75} />
          <span className="text-sm">Loading the booking calendar…</span>
        </div>
      )}

      {status === "error" && (
        <div className="flex min-h-[320px] flex-col items-center justify-center gap-5 p-8 text-center" data-testid="tidycal-error">
          <p className="max-w-md text-sm leading-relaxed text-ink/70">
            The inline calendar could not load in your browser. You can open the booking page
            directly instead.
          </p>
          {externalUrl && (
            <Cta href={externalUrl} external variant="primary" testId="tidycal-error-external">
              {label}
            </Cta>
          )}
        </div>
      )}

      <div
        ref={containerRef}
        className={status === "ready" ? "block" : "hidden"}
        data-testid="tidycal-container"
      >
        <div className="tidycal-embed" data-path={path} />
      </div>

      {status === "ready" && externalUrl && (
        <div className="flex justify-center border-t border-hairline p-4">
          <Cta href={externalUrl} external variant="secondary" testId="tidycal-open-external">
            {label}
          </Cta>
        </div>
      )}
    </div>
  );
}
