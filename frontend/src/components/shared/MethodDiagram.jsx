import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { method } from "@/data/content";

const ease = [0.16, 1, 0.3, 1];

/** Map -> Frame -> Build -> Flow. `detailed` shows full descriptions. */
export default function MethodDiagram({ detailed = false }) {
  return (
    <div className="grid grid-cols-1 gap-0 md:grid-cols-4">
      {method.steps.map((step, i) => (
        <motion.div
          key={step.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease, delay: i * 0.1 }}
          className="relative border-l border-hairline bg-surface px-6 py-8 md:py-10"
        >
          {/* connector arrow between steps (desktop) */}
          {i < method.steps.length - 1 && (
            <span className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 md:inline-flex">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ivory text-terracotta">
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </span>
            </span>
          )}
          <div className="flex items-baseline justify-between">
            <span className="font-display text-4xl font-light text-hairline">{step.no}</span>
            <span className="text-terracotta text-xl leading-none">&times;</span>
          </div>
          <h3 className="mt-4 font-display text-2xl font-semibold text-ink">{step.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/60">{step.short}</p>
          {detailed && <p className="mt-4 text-sm leading-relaxed text-ink/75">{step.body}</p>}
        </motion.div>
      ))}
    </div>
  );
}
