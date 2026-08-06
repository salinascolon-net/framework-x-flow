import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

/**
 * Masked line-by-line reveal. Each line sits in an overflow-hidden wrapper and
 * translates up from 100%. `lines` is an array of strings.
 */
export default function KineticHeadline({ lines, className = "", accentIndexWord, delay = 0.1 }) {
  return (
    <h1 className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.12em]">
          <motion.span
            className="block"
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, ease, delay: delay + i * 0.12 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
