import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPhoneAlt, FaHardHat } from "react-icons/fa";

const ProjectDetailCTA = ({ project }) => {
  return (
    <section className="bg-white px-5 py-20 lg:px-8 lg:py-28">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-brand px-7 py-16 text-center sm:px-12 lg:py-20">
        {/* Decorative Elements */}
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[35px] border-white/5" />

        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto max-w-3xl"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-3xl text-accent">
            <FaHardHat />
          </div>

          <span className="mt-7 block font-bold uppercase tracking-[3px] text-accent">
            Start Your Next Project
          </span>

          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Inspired by This Project?
          </h2>

          <p className="mt-6 leading-8 text-slate-300">
            Have a similar idea in mind? Let's discuss how we can help bring
            your vision to life through professional engineering and
            construction solutions.
          </p>

          <p className="mt-4 font-semibold text-white">
            Project: {project.title}
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/request-quote"
              className="inline-flex items-center gap-3 rounded-lg bg-accent px-7 py-4 font-bold text-white transition-all hover:-translate-y-1 hover:bg-orange-600"
            >
              Request a Quote
              <FaArrowRight />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-lg border border-white/30 px-7 py-4 font-bold text-white transition-all hover:border-accent hover:bg-white/10"
            >
              <FaPhoneAlt />
              Contact Our Team
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetailCTA;
