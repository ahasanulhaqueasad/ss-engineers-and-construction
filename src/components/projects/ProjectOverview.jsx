import { motion } from "motion/react";
import {
  FaMapMarkerAlt,
  FaBuilding,
  FaClipboardCheck,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectOverview = ({ project }) => {
  const projectInfo = [
    {
      id: 1,
      label: "Project Category",
      value: project.category,
      icon: FaBuilding,
    },
    {
      id: 2,
      label: "Project Location",
      value: project.location,
      icon: FaMapMarkerAlt,
    },
    {
      id: 3,
      label: "Project Type",
      value: "Engineering & Construction",
      icon: FaClipboardCheck,
    },
  ];

  return (
    <section className="bg-white px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-14 lg:grid-cols-3">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <span className="font-bold uppercase tracking-[3px] text-accent">
            Project Overview
          </span>

          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-brand sm:text-4xl">
            About This Project
          </h2>

          <p className="mt-7 text-base leading-8 text-slate-600">
            {project.description}
          </p>

          <p className="mt-5 text-base leading-8 text-slate-600">
            This project represents an opportunity to apply engineering
            knowledge, thoughtful planning and professional project coordination
            to meet specific project requirements.
          </p>

          {/* Project Image */}
          <div className="mt-10 overflow-hidden rounded-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="h-[350px] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* CTA */}
          <Link
            to="/request-quote"
            className="mt-9 inline-flex items-center gap-3 font-bold text-brand transition-colors hover:text-accent"
          >
            Discuss a Similar Project
            <FaArrowRight />
          </Link>
        </motion.div>

        {/* Project Information */}
        <motion.aside
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-slate-200 bg-surface p-7 sm:p-8"
        >
          <h3 className="font-heading text-xl font-extrabold text-brand">
            Project Information
          </h3>

          <div className="mt-7 space-y-6">
            {projectInfo.map((info) => {
              const Icon = info.icon;

              return (
                <div
                  key={info.id}
                  className="flex gap-4 border-b border-slate-200 pb-6 last:border-0 last:pb-0"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-xl text-accent">
                    <Icon />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-500">
                      {info.label}
                    </p>

                    <p className="mt-2 font-bold text-brand">{info.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.aside>
      </div>
    </section>
  );
};

export default ProjectOverview;
