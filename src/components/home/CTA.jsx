import { motion } from "motion/react";
import { FaArrowRight, FaPhoneAlt, FaHardHat } from "react-icons/fa";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-brand px-5 py-20 lg:px-8 lg:py-24">
      {/* Background Decoration */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[50px] border-white/5" />
      <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border-[50px] border-orange-400/10" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid items-center gap-12 lg:grid-cols-[1fr_auto]"
        >
          {/* Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-orange-300">
              <FaHardHat />
              Let's Build Something Great
            </div>

            <h2 className="max-w-3xl font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Start Your
              <span className="text-accent"> Next Project?</span>
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-slate-300">
              Let's turn your ideas into reality. Talk to our engineering team
              and get a professional solution tailored to your project.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-3 rounded-lg bg-accent px-7 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:shadow-lg"
              >
                Request a Quote
                <FaArrowRight />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-lg border border-white/30 px-7 py-4 font-bold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-brand"
              >
                <FaPhoneAlt />
                Contact Us
              </Link>
            </div>
          </div>

          {/* Highlight Card */}
          <div className="hidden lg:block">
            <div className="flex h-52 w-52 flex-col items-center justify-center rounded-3xl border border-white/20 bg-white/10 text-center backdrop-blur-sm">
              <FaHardHat className="mb-4 text-5xl text-accent" />
              <span className="font-heading text-lg font-extrabold text-white">
                Built on Trust
              </span>
              <span className="mt-2 text-sm text-slate-300">
                Driven by Quality
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
