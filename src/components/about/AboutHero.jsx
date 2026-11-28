import { motion } from "motion/react";
import { Link } from "react-router-dom";

import { FaHome, FaChevronRight, FaArrowRight } from "react-icons/fa";

const AboutHero = () => {
  return (
    <section
      aria-labelledby="about-hero-heading"
      className="relative flex min-h-[480px] items-center overflow-hidden bg-brand px-5 py-24 lg:min-h-[560px] lg:px-8"
    >
      {/* Background Image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000')",
        }}
      />

      {/* Dark Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#0B1F33]/95 via-[#102A43]/85 to-[#102A43]/50"
      />

      {/* Decorative Shapes */}
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[40px] border-white/5"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-40 right-1/4 h-96 w-96 rounded-full border-[50px] border-accent/10"
      />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <li>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand"
                >
                  <FaHome aria-hidden="true" />
                  Home
                </Link>
              </li>

              <li aria-hidden="true">
                <FaChevronRight className="text-xs text-accent" />
              </li>

              <li>
                <span aria-current="page" className="font-semibold text-accent">
                  About Us
                </span>
              </li>
            </ol>
          </nav>

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-orange-300 backdrop-blur-sm">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-accent"
            />
            Who We Are
          </div>

          {/* Main Heading */}
          <h1
            id="about-hero-heading"
            className="font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl"
          >
            Building Trust Through
            <span className="block text-accent">Engineering Excellence</span>&
            Innovation
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Discover SS Engineers & Construction and our approach to delivering
            thoughtful engineering, design, and construction solutions.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 rounded-lg bg-accent px-7 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand"
            >
              Explore Our Services
              <FaArrowRight aria-hidden="true" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center rounded-lg border border-white/30 px-7 py-4 font-bold text-white transition-all duration-300 hover:bg-white hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
