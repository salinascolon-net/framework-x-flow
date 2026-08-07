import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ASSETS } from "@/lib/assets";

/** Framed abstract hero visual with a subtle parallax drift and animated flow line. */
export default function HeroVisual() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <div ref={ref} className="relative">
      <motion.div
        style={{ y }}
        className="relative overflow-hidden border border-hairline bg-surface"
      >
        <span className="absolute left-4 top-4 z-10 bg-ivory/90 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-teal">
          Fig. 01 — Scattered to aligned
        </span>
        <img
          src={ASSETS.heroWorkflow}
          alt="Abstract diagram of disorganized workflow cards resolving into an aligned grid of connected nodes meeting at an X-shaped intersection."
          className="h-full w-full object-cover"
          width={1264}
          height={848}
          loading="eager"
        />
        {/* animated flow line overlay */}
        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 67" preserveAspectRatio="none" aria-hidden="true">
          <path className="flow-line" d="M6 33 L48 33" stroke="#194D4A" strokeWidth="0.5" fill="none" opacity="0.5" />
          <circle cx="6" cy="33" r="1.1" fill="#C96846" />
        </svg>
      </motion.div>
    </div>
  );
}
