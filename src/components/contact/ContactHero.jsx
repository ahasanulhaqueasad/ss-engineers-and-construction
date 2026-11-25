import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { FaHome, FaArrowRight, FaEnvelope } from "react-icons/fa";

const ContactHero = () => {
  return (
    <section className="relative flex min-h-[460px] items-center overflow-hidden bg-brand px-5 py-24 lg:min-h-[520px] lg:px-8">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/90 to-brand/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          {/* Breadcrumb */}
          <div className="mb-8 flex flex-wrap items-center gap-3 text-sm font-medium text-slate-300">
            <Link
              to="/"
              className="flex items-center gap-2 transition hover:text-accent"
            >
              <FaHome />
              Home
            </Link>

            <span>/</span>

            <span className="text-accent">Contact</span>
          </div>

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md">
            <FaEnvelope className="text-accent" />
            Get In Touch
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Let's Discuss Your
            <span className="block text-accent">Next Project</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            Have a question or planning a construction project? Contact our team
            and share your requirements. We would be happy to hear from you.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact-information"
              className="inline-flex items-center gap-3 rounded-lg bg-accent px-7 py-4 font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-orange-600"
            >
              Contact Information
              <FaArrowRight />
            </a>

            <Link
              to="/request-quote"
              className="rounded-lg border border-white/40 px-7 py-4 font-bold text-white transition-all hover:border-accent hover:bg-white/10"
            >
              Request a Quote
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Shape */}
      <div className="absolute -bottom-24 right-10 hidden h-64 w-64 rounded-full border-[30px] border-white/5 lg:block" />
    </section>
  );
};

export default ContactHero;
