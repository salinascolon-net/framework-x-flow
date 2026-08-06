import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "@/components/Seo";
import Cta from "@/components/Cta";
import { nav } from "@/data/content";

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found | Framework X Flow" description="The page you were looking for could not be found." path="/404" />
      <section className="flex min-h-[85vh] items-center pt-24">
        <div className="fxf-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 font-display text-6xl font-light text-ink sm:text-8xl">
              4<span className="text-terracotta">&times;</span>4
            </div>
            <h1 className="mt-8 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              This path doesn't lead anywhere.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink/70">
              The page you were looking for isn't here. Let's get you back to a working route.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Cta to="/" variant="primary" size="lg" testId="notfound-home">Back to Home</Cta>
              <Cta to="/book" variant="secondary" size="lg" testId="notfound-book">Book a Systems Fit Call</Cta>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2">
              {nav.map((n) => (
                <Link key={n.to} to={n.to} className="text-sm text-ink/60 underline-offset-4 transition-colors hover:text-terracotta hover:underline">
                  {n.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
