import { motion } from "motion/react";
import { Link } from "react-router-dom";

import {
  FaShieldAlt,
  FaHardHat,
  FaCheckCircle,
  FaClipboardCheck,
  FaTools,
  FaLeaf,
  FaArrowRight,
} from "react-icons/fa";

const policies = [
  {
    id: 1,
    title: "Quality-Focused Work",
    description:
      "We emphasize careful planning, attention to detail, and quality-focused practices throughout project activities.",
    icon: FaCheckCircle,
  },
  {
    id: 2,
    title: "Workplace Safety",
    description:
      "We recognize the importance of safety awareness and responsible practices at every project site.",
    icon: FaHardHat,
  },
  {
    id: 3,
    title: "Project Inspection",
    description:
      "Regular review and inspection help identify issues and maintain alignment with project requirements.",
    icon: FaClipboardCheck,
  },
  {
    id: 4,
    title: "Material Consideration",
    description:
      "We recognize the importance of selecting suitable materials based on project specifications and requirements.",
    icon: FaTools,
  },
  {
    id: 5,
    title: "Environmental Awareness",
    description:
      "We value responsible resource use and consideration of environmental factors during project planning.",
    icon: FaLeaf,
  },
  {
    id: 6,
    title: "Continuous Improvement",
    description:
      "We believe in learning, reviewing our approach, and improving how engineering solutions are delivered.",
    icon: FaShieldAlt,
  },
];

const commitments = [
  "Quality-focused project planning and execution",
  "Safety awareness and responsible work practices",
  "Technical review and project coordination",
  "Continuous learning and improvement",
];

const QualitySafety = () => {
  return (
    <section
      aria-labelledby="quality-safety-heading"
      className="overflow-hidden bg-surface px-5 py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="font-bold uppercase tracking-[3px] text-accent">
            Our Standards
          </span>

          <h2
            id="quality-safety-heading"
            className="mt-4 font-heading text-3xl font-extrabold text-brand sm:text-4xl lg:text-5xl"
          >
            Quality & <span className="text-accent">Safety Commitment</span>
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            We value quality-focused planning, safety awareness, and responsible
            project practices in engineering and construction.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200"
                alt="Construction professionals working at a project site"
                width="1200"
                height="800"
                loading="lazy"
                decoding="async"
                className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[500px]"
              />
            </div>

            {/* Safety Badge */}
            <div className="absolute -bottom-6 -right-3 flex items-center gap-4 rounded-2xl bg-brand p-6 text-white shadow-xl sm:-right-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-2xl">
                <FaShieldAlt aria-hidden="true" />
              </div>

              <div>
                <h3 className="font-heading text-lg font-extrabold">
                  Safety Awareness
                </h3>

                <p className="mt-1 text-xs text-slate-300">
                  Responsible Work Practices
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-heading text-2xl font-extrabold text-brand sm:text-3xl">
              Building with Care, Planning with Responsibility
            </h3>

            <p className="mt-6 leading-8 text-slate-600">
              Every engineering and construction project requires thoughtful
              planning, technical consideration, and attention to detail. We
              recognize that quality begins with understanding project
              requirements and choosing suitable approaches.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Safety awareness, effective coordination, and responsible
              decision-making are important considerations throughout project
              planning and execution.
            </p>

            {/* Commitments */}
            <ul className="mt-8 space-y-4">
              {commitments.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <FaCheckCircle
                    aria-hidden="true"
                    className="shrink-0 text-lg text-accent"
                  />

                  <span className="text-sm font-semibold text-brand">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Contact CTA */}
            <Link
              to="/contact"
              className="mt-9 inline-flex items-center gap-3 rounded-lg bg-brand px-7 py-4 font-bold text-white transition-all hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
            >
              Discuss Your Project
              <FaArrowRight aria-hidden="true" />
            </Link>
          </motion.div>
        </div>

        {/* Policy Cards */}
        <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {policies.map((policy, index) => {
            const Icon = policy.icon;

            return (
              <motion.article
                key={policy.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-2xl text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                  <Icon aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="mt-6 font-heading text-lg font-extrabold text-brand">
                  {policy.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {policy.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QualitySafety;
