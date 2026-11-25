import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

import projects from "../../data/projects.json";

const ProjectsGrid = () => {
  return (
    <section
      id="all-projects"
      className="bg-surface px-5 py-16 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <span className="font-bold uppercase tracking-[3px] text-accent">
            Our Portfolio
          </span>

          <h2 className="mt-4 font-heading text-3xl font-extrabold text-brand sm:text-4xl lg:text-5xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            Discover our selected engineering, architectural and construction
            projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <span className="absolute left-5 top-5 rounded-full bg-accent px-4 py-2 text-xs font-bold text-white">
                  {project.category}
                </span>
              </div>

              {/* Project Information */}
              <div className="p-7">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <FaMapMarkerAlt className="text-accent" />
                  {project.location}
                </div>

                <h3 className="mt-4 font-heading text-xl font-extrabold text-brand transition-colors group-hover:text-accent">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {project.description}
                </p>

                <Link
                  to={`/projects/${project.id}`}
                  className="mt-6 inline-flex items-center gap-3 font-bold text-brand transition-colors hover:text-accent"
                >
                  View Project Details
                  <FaArrowRight />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
