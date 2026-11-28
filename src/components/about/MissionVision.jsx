import { motion } from "motion/react";

import {
  FaBullseye,
  FaEye,
  FaGem,
  FaShieldAlt,
  FaHandshake,
  FaLightbulb,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

const coreValues = [
  {
    id: 1,
    title: "Quality",
    description:
      "We focus on delivering well-planned engineering solutions with attention to detail and quality.",
    icon: FaGem,
  },
  {
    id: 2,
    title: "Integrity",
    description:
      "We value honesty, transparency, and responsible communication in every professional relationship.",
    icon: FaShieldAlt,
  },
  {
    id: 3,
    title: "Commitment",
    description:
      "We approach every project with dedication, accountability, and a focus on client requirements.",
    icon: FaHandshake,
  },
  {
    id: 4,
    title: "Innovation",
    description:
      "We welcome practical ideas and modern approaches to address engineering and construction challenges.",
    icon: FaLightbulb,
  },
  {
    id: 5,
    title: "Teamwork",
    description:
      "We believe effective collaboration and clear communication contribute to successful project outcomes.",
    icon: FaUsers,
  },
  {
    id: 6,
    title: "Safety",
    description:
      "We recognize the importance of safety-conscious planning and responsible construction practices.",
    icon: FaCheckCircle,
  },
];

const MissionVision = () => {
  return (
    <section
      aria-labelledby="mission-vision-heading"
      className="bg-surface px-5 py-20 lg:px-8 lg:py-28"
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
            Our Purpose
          </span>

          <h2
            id="mission-vision-heading"
            className="mt-4 font-heading text-3xl font-extrabold text-brand sm:text-4xl lg:text-5xl"
          >
            Our Mission & <span className="text-accent">Vision</span>
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Our mission and vision reflect our commitment to thoughtful
            engineering, responsible construction, and meaningful client
            relationships.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="mb-20 grid gap-7 lg:grid-cols-2">
          {/* Mission */}
          <motion.article
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-brand p-8 text-white shadow-lg sm:p-10"
          >
            <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-3xl">
              <FaBullseye aria-hidden="true" />
            </div>

            <h3 className="font-heading text-2xl font-extrabold">
              Our Mission
            </h3>

            <p className="mt-5 leading-8 text-slate-300">
              To provide practical and well-planned engineering and construction
              solutions that address client needs through professional
              expertise, responsible planning, quality-focused execution, and
              effective project coordination.
            </p>
          </motion.article>

          {/* Vision */}
          <motion.article
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg sm:p-10"
          >
            <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-3xl text-accent">
              <FaEye aria-hidden="true" />
            </div>

            <h3 className="font-heading text-2xl font-extrabold text-brand">
              Our Vision
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              To contribute to better-built environments through dependable
              engineering services, thoughtful design, responsible construction
              practices, and lasting professional relationships.
            </p>
          </motion.article>
        </div>

        {/* Core Values Heading */}
        <div className="mb-10 text-center">
          <span className="font-bold uppercase tracking-[3px] text-accent">
            What Guides Us
          </span>

          <h3 className="mt-4 font-heading text-3xl font-extrabold text-brand sm:text-4xl">
            Our Core Values
          </h3>
        </div>

        {/* Core Values Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.article
                key={value.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-xl"
              >
                {/* Value Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-2xl text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                  <Icon aria-hidden="true" />
                </div>

                {/* Value Title */}
                <h4 className="mt-6 font-heading text-xl font-extrabold text-brand">
                  {value.title}
                </h4>

                {/* Value Description */}
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {value.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
