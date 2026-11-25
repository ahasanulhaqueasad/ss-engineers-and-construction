import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { FaHome, FaArrowRight, FaBuilding } from "react-icons/fa";

const ProjectsHero = () => {
  return (
    <section className="relative flex min-h-[460px] items-center overflow-hidden bg-brand px-5 py-24 lg:min-h-[540px] lg:px-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000')",
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

            <span className="text-accent">Projects</span>
          </div>

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md">
            <FaBuilding className="text-accent" />
            Our Portfolio
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Building Ideas Into
            <span className="block text-accent">Remarkable Projects</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            Explore our project portfolio and discover the engineering, design
            and construction work behind every project.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#all-projects"
              className="inline-flex items-center gap-3 rounded-lg bg-accent px-7 py-4 font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-orange-600"
            >
              Explore Projects
              <FaArrowRight />
            </a>

            <Link
              to="/request-quote"
              className="rounded-lg border border-white/40 px-7 py-4 font-bold text-white transition-all hover:border-accent hover:bg-white/10"
            >
              Start Your Project
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Shape */}
      <div className="absolute -bottom-24 right-10 hidden h-64 w-64 rounded-full border-[30px] border-white/5 lg:block" />
    </section>
  );
};

export default ProjectsHero;
