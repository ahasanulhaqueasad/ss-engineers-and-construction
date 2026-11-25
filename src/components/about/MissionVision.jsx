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
      "Maintaining high standards of workmanship and engineering excellence.",
    icon: FaGem,
  },
  {
    id: 2,
    title: "Integrity",
    description:
      "Building trust through honesty, transparency and accountability.",
    icon: FaShieldAlt,
  },
  {
    id: 3,
    title: "Commitment",
    description:
      "Taking responsibility for every project and client requirement.",
    icon: FaHandshake,
  },
  {
    id: 4,
    title: "Innovation",
    description:
      "Embracing better ideas, technology and engineering solutions.",
    icon: FaLightbulb,
  },
  {
    id: 5,
    title: "Teamwork",
    description: "Working together through collaboration and shared expertise.",
    icon: FaUsers,
  },
  {
    id: 6,
    title: "Safety",
    description:
      "Prioritizing safe practices for people, property and projects.",
    icon: FaCheckCircle,
  },
];

const MissionVision = () => {
  return (
    <section className="bg-surface px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="font-bold uppercase tracking-[3px] text-accent">
            What Drives Us
          </span>

          <h2 className="mt-4 font-heading text-3xl font-extrabold text-brand sm:text-4xl lg:text-5xl">
            Our Mission, Vision
            <span className="text-accent"> & Values</span>
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Our principles guide the way we plan, build and create lasting value
            through engineering and construction.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="mb-20 grid gap-7 lg:grid-cols-2">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-brand p-8 text-white shadow-lg sm:p-10"
          >
            <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-3xl">
              <FaBullseye />
            </div>

            <h3 className="font-heading text-2xl font-extrabold">
              Our Mission
            </h3>

            <p className="mt-5 leading-8 text-slate-300">
              To deliver reliable, safe and high-quality engineering and
              construction solutions that meet client needs through professional
              expertise and responsible execution.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg sm:p-10"
          >
            <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-3xl text-accent">
              <FaEye />
            </div>

            <h3 className="font-heading text-2xl font-extrabold text-brand">
              Our Vision
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              To become a trusted engineering and construction company
              recognized for quality, innovation, professionalism and lasting
              client relationships.
            </p>
          </motion.div>
        </div>

        {/* Core Values Heading */}
        <div className="mb-10 text-center">
          <span className="font-bold uppercase tracking-[3px] text-accent">
            Our Principles
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
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-2xl text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                  <Icon />
                </div>

                <h4 className="mt-6 font-heading text-xl font-extrabold text-brand">
                  {value.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
