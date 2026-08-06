import { marqueeItems } from "@/data/content";

/** Slow editorial marquee. Items separated by an X motif. Duplicated for a seamless loop. */
export default function Marquee() {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div
      className="relative overflow-hidden border-y border-hairline bg-ivory py-5 select-none"
      aria-hidden="true"
    >
      <div className="marquee-track items-center">
        {row.map((item, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span className="px-6 text-sm sm:text-base font-display font-light uppercase tracking-[0.28em] text-ink">
              {item}
            </span>
            <span className="text-terracotta text-lg font-light">&times;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
