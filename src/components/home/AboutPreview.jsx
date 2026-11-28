import { Link } from "react-router-dom";
import { motion } from "motion/react";

import { FaArrowRight, FaCheckCircle, FaHardHat } from "react-icons/fa";

const features = [
  "Professional Engineering Solutions",
  "Quality-Focused Project Delivery",
  "Experienced Technical Team",
  "Client-Centered Approach",
];

const AboutPreview = () => {
  return (
    <section
      aria-labelledby="about-preview-heading"
      className="overflow-hidden bg-surface px-5 py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative z-10 overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=85"
              alt="Construction professionals working on a building project"
              width="1000"
              height="1000"
              loading="lazy"
              decoding="async"
              className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-[520px]"
            />
          </div>

          {/* Quality Highlight */}
          <div className="absolute -bottom-6 right-0 z-20 max-w-[calc(100%-12px)] rounded-2xl bg-brand p-5 text-white shadow-xl sm:right-6 sm:p-6">
            <FaHardHat
              aria-hidden="true"
              className="mb-3 text-3xl text-accent"
            />

            <h3 className="text-xl font-extrabold sm:text-2xl">
              Quality First
            </h3>

            <p className="mt-1 text-sm text-white/70">
              Building with Care and Precision
            </p>
          </div>

          {/* Decorative Shape */}
          <div
            aria-hidden="true"
            className="absolute -left-5 -top-5 z-0 h-32 w-32 rounded-2xl border-4 border-accent/30"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-bold uppercase tracking-[3px] text-accent">
            About Our Company
          </span>

          <h2
            id="about-preview-heading"
            className="mt-4 font-heading text-3xl font-extrabold leading-tight text-brand sm:text-4xl lg:text-5xl"
          >
            Building a Better Future
            <span className="text-accent"> Through Engineering</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            SS Engineers & Construction provides engineering and construction
            solutions designed around quality, functionality, and client
            requirements. We focus on thoughtful planning, professional
            execution, and dependable project coordination.
          </p>

          {/* Company Features */}
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <FaCheckCircle
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-accent"
                />

                <span className="text-sm font-semibold text-brand">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {/* About Button */}
          <div className="mt-10">
            <Link
              to="/about"
              aria-label="Learn more about SS Engineers & Construction"
              className="group inline-flex items-center gap-3 rounded-lg bg-brand px-7 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Learn More
              <FaArrowRight
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
