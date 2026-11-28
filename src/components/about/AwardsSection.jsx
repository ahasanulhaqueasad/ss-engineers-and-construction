import { motion } from "motion/react";

import {
  FaTrophy,
  FaMedal,
  FaStar,
  FaCertificate,
  FaAward,
} from "react-icons/fa";

const achievements = [
  {
    id: 1,
    title: "Commitment to Excellence",
    category: "Professional Values",
    description:
      "We focus on delivering thoughtful engineering solutions through careful planning and professional execution.",
    icon: FaTrophy,
  },
  {
    id: 2,
    title: "Quality Standards",
    category: "Quality Commitment",
    description:
      "We emphasize quality, attention to detail, and responsible practices throughout every project stage.",
    icon: FaMedal,
  },
  {
    id: 3,
    title: "Client Satisfaction",
    category: "Client Focus",
    description:
      "We value client requirements, transparent communication, and dependable project coordination.",
    icon: FaStar,
  },
  {
    id: 4,
    title: "Continuous Improvement",
    category: "Professional Development",
    description:
      "We believe in continuous learning and improving our approach to engineering and construction.",
    icon: FaCertificate,
  },
];

const AwardsSection = () => {
  return (
    <section
      aria-labelledby="awards-section-heading"
      className="relative overflow-hidden bg-brand px-5 py-20 lg:px-8 lg:py-28"
    >
      {/* Background Decoration */}
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[50px] border-white/5"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border-[50px] border-accent/10"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="font-bold uppercase tracking-[3px] text-accent">
            Our Commitment
          </span>

          <h2
            id="awards-section-heading"
            className="mt-4 font-heading text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl"
          >
            The Values Behind
            <span className="text-accent"> Our Work</span>
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            Our work is guided by professional values, quality-focused
            practices, client satisfaction, and a commitment to continuous
            improvement.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-accent/50 hover:bg-white/10"
              >
                {/* Icon */}
                <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/15 text-3xl text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                  <Icon aria-hidden="true" />
                </div>

                {/* Category */}
                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  {item.category}
                </span>

                {/* Title */}
                <h3 className="mt-4 font-heading text-xl font-extrabold text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>

                {/* Bottom Accent */}
                <div
                  aria-hidden="true"
                  className="mt-7 h-1 w-10 rounded-full bg-accent transition-all duration-300 group-hover:w-20"
                />
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col items-center gap-4 text-center"
        >
          <FaAward aria-hidden="true" className="text-4xl text-accent" />

          <h3 className="font-heading text-2xl font-extrabold text-white">
            Building Trust Through Our Work
          </h3>

          <p className="max-w-2xl text-sm leading-7 text-slate-300">
            We aim to build lasting professional relationships through
            responsible engineering, quality-focused execution, and
            client-centered service.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;
