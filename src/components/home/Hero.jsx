import { Link } from "react-router-dom";
import { motion } from "motion/react";

import { FaArrowRight, FaCheckCircle, FaHardHat } from "react-icons/fa";

const trustPoints = [
  "Quality-Focused Solutions",
  "Professional Project Planning",
  "Client-Centered Approach",
];

const Hero = () => {
  return (
    <section
      aria-labelledby="home-hero-title"
      className="relative flex min-h-[650px] items-center overflow-hidden bg-brand lg:min-h-[720px]"
    >
      {/* Background Image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=85')",
        }}
      />

      {/* Dark Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-brand via-brand/90 to-brand/40"
      />

      {/* Decorative Shape */}
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[50px] border-white/5"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-3xl">
          {/* Small Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
          >
            <FaHardHat aria-hidden="true" className="shrink-0 text-accent" />
            Engineering Excellence, Building Trust
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            id="home-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl"
          >
            Building Your Vision
            <span className="text-accent"> with Excellence</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg"
          >
            From engineering design and technical consultancy to construction
            solutions, we help bring your project ideas to life through
            thoughtful planning and quality-focused execution.
          </motion.p>

          {/* Call To Action */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              to="/request-quote"
              className="group inline-flex items-center justify-center gap-3 rounded-lg bg-accent px-7 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Request a Quote
              <FaArrowRight
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/40 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Explore Projects
            </Link>
          </motion.div>

          {/* Trust Points */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            aria-label="Our commitments"
            className="mt-12 flex list-none flex-wrap gap-x-7 gap-y-4 p-0"
          >
            {trustPoints.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-white/90"
              >
                <FaCheckCircle
                  aria-hidden="true"
                  className="shrink-0 text-accent"
                />

                {item}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* Bottom Accent */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-1.5 w-full bg-accent"
      />
    </section>
  );
};

export default Hero;
