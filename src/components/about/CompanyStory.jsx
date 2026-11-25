import { motion } from "motion/react";
import {
  FaCheckCircle,
  FaArrowRight,
  FaAward,
  FaBuilding,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const CompanyStory = () => {
  const highlights = [
    "Professional Engineering Solutions",
    "Quality-Focused Construction",
    "Experienced Technical Team",
    "Client-Centered Project Management",
  ];

  return (
    <section className="overflow-hidden bg-white px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Image Area */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200"
              alt="Modern architectural engineering project"
              className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[520px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-brand/40 to-transparent" />
          </div>

          {/* Experience Card - Demo Content */}
          <div className="absolute -bottom-7 right-4 rounded-2xl bg-accent p-6 text-white shadow-xl sm:-right-5 sm:p-8">
            <FaBuilding className="mb-3 text-3xl" />
            <h3 className="font-heading text-2xl font-extrabold">
              Engineering
            </h3>
            <p className="mt-1 text-sm font-medium text-white/90">
              Excellence & Reliability
            </p>
          </div>

          {/* Decorative Shape */}
          <div className="absolute -left-5 -top-5 -z-10 h-32 w-32 rounded-2xl border-4 border-accent/30" />
        </motion.div>

        {/* Content Area */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-bold uppercase tracking-[3px] text-accent">
            About Our Company
          </span>

          <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight text-brand sm:text-4xl lg:text-5xl">
            Building a Better
            <span className="text-accent"> Future Together</span>
          </h2>

          <p className="mt-7 leading-8 text-slate-600">
            SS Engineers & Construction is dedicated to providing professional
            engineering and construction solutions. Our focus is on thoughtful
            planning, technical expertise and quality workmanship.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            We believe every successful project begins with understanding our
            clients' needs and ends with delivering reliable results. Our
            approach combines responsible project management, safety and
            attention to detail.
          </p>

          {/* Highlights */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <FaCheckCircle className="mt-1 shrink-0 text-lg text-accent" />
                <span className="text-sm font-semibold text-brand">{item}</span>
              </div>
            ))}
          </div>

          {/* Bottom Info */}
          <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-slate-200 pt-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-xl text-accent">
                <FaAward />
              </div>
              <div>
                <h4 className="font-heading font-extrabold text-brand">
                  Quality First
                </h4>
                <p className="text-xs text-slate-500">In Every Project</p>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 font-bold text-brand transition-colors hover:text-accent"
            >
              Talk to Our Team
              <FaArrowRight />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyStory;
