import { motion } from "motion/react";
import {
  FaDraftingCompass,
  FaClipboardCheck,
  FaHardHat,
  FaShieldAlt,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "Technical Expertise",
    description:
      "Engineering-focused planning and technical knowledge for project requirements.",
    icon: FaDraftingCompass,
  },
  {
    id: 2,
    title: "Detailed Planning",
    description:
      "Organized planning to establish project scope, requirements and execution steps.",
    icon: FaClipboardCheck,
  },
  {
    id: 3,
    title: "Professional Execution",
    description:
      "Coordinated project activities with attention to workmanship and technical details.",
    icon: FaHardHat,
  },
  {
    id: 4,
    title: "Quality & Safety",
    description:
      "Emphasis on responsible work practices, quality considerations and safety awareness.",
    icon: FaShieldAlt,
  },
  {
    id: 5,
    title: "Client Collaboration",
    description:
      "Clear communication and coordination throughout the project journey.",
    icon: FaUsers,
  },
  {
    id: 6,
    title: "Continuous Improvement",
    description:
      "A commitment to improving processes and delivering dependable solutions.",
    icon: FaChartLine,
  },
];

const ServiceFeatures = () => {
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
            Key Service Features
          </span>

          <h2 className="mt-4 font-heading text-3xl font-extrabold text-brand sm:text-4xl lg:text-5xl">
            What Makes Our
            <span className="text-accent"> Services Valuable</span>
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Our service approach focuses on technical planning, responsible
            execution and client collaboration.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-3xl text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                  <Icon />
                </div>

                <h3 className="mt-7 font-heading text-xl font-extrabold text-brand">
                  {feature.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {feature.description}
                </p>

                <div className="mt-7 h-1 w-10 rounded-full bg-accent transition-all duration-300 group-hover:w-20" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
