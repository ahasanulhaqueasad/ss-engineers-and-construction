import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { FaHome, FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";

const ProjectDetailHero = ({ project }) => {
  return (
    <section className="relative flex min-h-[500px] items-center overflow-hidden bg-brand px-5 py-24 lg:min-h-[600px] lg:px-8">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${project.image}')`,
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

            <Link to="/projects" className="transition hover:text-accent">
              Projects
            </Link>

            <span>/</span>

            <span className="text-accent">Project Details</span>
          </div>

          {/* Category */}
          <span className="inline-flex rounded-full bg-accent px-5 py-2 text-sm font-bold text-white">
            {project.category}
          </span>

          {/* Title */}
          <h1 className="mt-7 font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          {/* Location */}
          <div className="mt-6 flex items-center gap-3 text-slate-200">
            <FaMapMarkerAlt className="text-accent" />
            <span>{project.location}</span>
          </div>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            {project.description}
          </p>

          {/* Button */}
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/request-quote"
              className="inline-flex items-center gap-3 rounded-lg bg-accent px-7 py-4 font-bold text-white transition-all hover:-translate-y-1 hover:bg-orange-600"
            >
              Start a Similar Project
              <FaArrowRight />
            </Link>

            <Link
              to="/contact"
              className="rounded-lg border border-white/40 px-7 py-4 font-bold text-white transition hover:border-accent hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetailHero;
