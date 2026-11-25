import { motion } from "motion/react";
import {
  FaShieldAlt,
  FaHardHat,
  FaCheckCircle,
  FaClipboardCheck,
  FaTools,
  FaLeaf,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const policies = [
  {
    id: 1,
    title: "Quality Assurance",
    description:
      "Maintaining quality standards through careful planning, material selection and workmanship.",
    icon: FaCheckCircle,
  },
  {
    id: 2,
    title: "Workplace Safety",
    description:
      "Promoting safe working practices and reducing risks throughout project activities.",
    icon: FaHardHat,
  },
  {
    id: 3,
    title: "Technical Inspection",
    description:
      "Supporting project quality through appropriate inspection and technical supervision.",
    icon: FaClipboardCheck,
  },
  {
    id: 4,
    title: "Equipment & Materials",
    description:
      "Emphasizing responsible handling and appropriate use of construction materials and equipment.",
    icon: FaTools,
  },
  {
    id: 5,
    title: "Environmental Responsibility",
    description:
      "Encouraging responsible construction practices and awareness of environmental impact.",
    icon: FaLeaf,
  },
  {
    id: 6,
    title: "Continuous Improvement",
    description:
      "Learning from every project and improving our processes, standards and performance.",
    icon: FaShieldAlt,
  },
];

const QualitySafety = () => {
  return (
    <section className="overflow-hidden bg-surface px-5 py-20 lg:px-8 lg:py-28">
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
            Quality & Safety Commitment
          </span>

          <h2 className="mt-4 font-heading text-3xl font-extrabold text-brand sm:text-4xl lg:text-5xl">
            Building with Quality,
            <span className="text-accent"> Working with Safety</span>
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Quality and safety are important considerations in every stage of
            engineering and construction.
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
                alt="Construction workers following safety practices"
                className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[500px]"
              />
            </div>

            <div className="absolute -bottom-6 -right-3 flex items-center gap-4 rounded-2xl bg-brand p-6 text-white shadow-xl sm:-right-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-2xl">
                <FaShieldAlt />
              </div>

              <div>
                <h3 className="font-heading text-lg font-extrabold">
                  Safety First
                </h3>
                <p className="mt-1 text-xs text-slate-300">
                  A Responsible Approach
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
              Our Commitment to Better Construction
            </h3>

            <p className="mt-6 leading-8 text-slate-600">
              We believe dependable construction requires thoughtful planning,
              responsible execution and attention to quality and safety at every
              stage.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Our approach emphasizes technical supervision, responsible
              material use, workplace awareness and continuous improvement.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Quality-focused project execution",
                "Responsible workplace safety practices",
                "Technical supervision and inspection",
                "Continuous improvement and accountability",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCheckCircle className="shrink-0 text-lg text-accent" />
                  <span className="text-sm font-semibold text-brand">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="mt-9 inline-flex items-center gap-3 rounded-lg bg-brand px-7 py-4 font-bold text-white transition-all hover:bg-accent"
            >
              Discuss Your Project
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>

        {/* Policy Cards */}
        <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {policies.map((policy, index) => {
            const Icon = policy.icon;

            return (
              <motion.div
                key={policy.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-2xl text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                  <Icon />
                </div>

                <h4 className="mt-6 font-heading text-lg font-extrabold text-brand">
                  {policy.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {policy.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QualitySafety;
