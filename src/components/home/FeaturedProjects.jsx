import { Link } from "react-router-dom";
import { motion } from "motion/react";

import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";

import projects from "../../data/projects.json";

const FeaturedProjects = () => {
  const featuredProjects = projects.filter(
    (project) => project.published === true && project.showOnWebsite === true,
  );

  return (
    <section
      aria-labelledby="featured-projects-heading"
      className="bg-surface px-5 py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="font-bold uppercase tracking-[3px] text-accent">
              Our Portfolio
            </span>

            <h2
              id="featured-projects-heading"
              className="mt-4 font-heading text-3xl font-extrabold text-brand sm:text-4xl lg:text-5xl"
            >
              Featured
              <span className="text-accent"> Projects</span>
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Explore some of our featured engineering and construction
              projects, showcasing our approach to quality, planning, and
              project execution.
            </p>
          </div>

          <Link
            to="/projects"
            className="group inline-flex shrink-0 items-center gap-3 font-bold text-brand transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            View All Projects
            <FaArrowRight
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Project Grid */}
        {featuredProjects.length > 0 ? (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: (index % 3) * 0.12,
                }}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} - Engineering and construction project`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-brand/70 via-transparent to-transparent opacity-80"
                  />

                  <span className="absolute bottom-5 left-5 rounded-full bg-accent px-4 py-2 text-xs font-bold text-white">
                    {project.category}
                  </span>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <FaMapMarkerAlt
                      aria-hidden="true"
                      className="shrink-0 text-accent"
                    />

                    <span>{project.location}</span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-brand transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {project.description}
                  </p>

                  <Link
                    to={`/projects/${project.id}`}
                    aria-label={`View details of ${project.title}`}
                    className="mt-6 inline-flex items-center gap-2 border-b-2 border-accent pb-1 text-sm font-bold text-brand transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    View Details
                    <FaArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <p className="py-12 text-center text-slate-500">
            No featured projects are available at the moment.
          </p>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects;
