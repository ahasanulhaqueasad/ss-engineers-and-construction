import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

import projects from "../../data/projects.json";

const RelatedProjects = ({
  title = "Related Projects",
  relatedProjectIds = [],
}) => {
  const displayedProjects = projects
    .filter(
      (project) =>
        relatedProjectIds.includes(project.id) &&
        project.published === true &&
        project.showOnWebsite === true,
    )
    .slice(0, 3);

  return (
    <section className="bg-white px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
        >
          <div>
            <span className="font-bold uppercase tracking-[3px] text-accent">
              Our Portfolio
            </span>

            <h2 className="mt-4 font-heading text-3xl font-extrabold text-brand sm:text-4xl">
              {title}
            </h2>

            <p className="mt-4 max-w-xl leading-8 text-slate-600">
              Explore selected projects that demonstrate our engineering and
              construction approach.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-3 font-bold text-brand transition-colors hover:text-accent"
          >
            View All Projects
            <FaArrowRight />
          </Link>
        </motion.div>

        {/* Project Cards */}
        {displayedProjects.length > 0 ? (
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {displayedProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <span className="absolute left-5 top-5 rounded-full bg-accent px-4 py-2 text-xs font-bold text-white">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-7">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <FaMapMarkerAlt className="text-accent" />
                    {project.location}
                  </div>

                  <h3 className="mt-4 font-heading text-xl font-extrabold text-brand">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {project.description}
                  </p>

                  <Link
                    to={`/projects/${project.id}`}
                    className="mt-6 inline-flex items-center gap-3 font-bold text-brand transition-colors hover:text-accent"
                  >
                    View Project
                    <FaArrowRight />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-surface px-6 py-16 text-center">
            <h3 className="font-heading text-xl font-bold text-brand">
              Projects Coming Soon
            </h3>

            <p className="mt-3 text-sm text-slate-500">
              Related projects will be displayed here when available.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RelatedProjects;
