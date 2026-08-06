import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/data/content";

const ease = [0.16, 1, 0.3, 1];

export default function ServicePreviewCards() {
  return (
    <div className="grid gap-0 border-t border-hairline md:grid-cols-3">
      {services.map((s, i) => (
        <motion.article
          key={s.slug}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease, delay: i * 0.1 }}
          className="group flex flex-col border-b border-l border-hairline bg-surface p-8 transition-colors duration-300 hover:bg-ivory md:border-b-0"
          data-testid={`service-preview-${s.slug}`}
        >
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-terracotta">{s.fig}</span>
          <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-ink">{s.name}</h3>
          <p className="mt-4 text-sm leading-relaxed text-ink/60">{s.problemLine}</p>
          <p className="mt-3 text-sm font-medium leading-relaxed text-teal">{s.resultLine}</p>

          <ul className="mt-6 space-y-2">
            {s.previewDeliverables.map((d) => (
              <li key={d} className="flex items-start gap-2 text-sm text-ink/75">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage" strokeWidth={2} />
                {d}
              </li>
            ))}
          </ul>

          <Link
            to={`/services#${s.slug}`}
            data-testid={`service-preview-link-${s.slug}`}
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors group-hover:text-terracotta"
          >
            Explore This Service
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.75} />
          </Link>
        </motion.article>
      ))}
    </div>
  );
}
