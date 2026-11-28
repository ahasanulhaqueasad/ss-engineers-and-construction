import { motion } from "motion/react";

import {
  FaAward,
  FaUserTie,
  FaClock,
  FaFileInvoiceDollar,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "Quality-Focused Solutions",
    description:
      "We emphasize quality at every stage, from initial planning and design to project execution and final delivery.",
    icon: FaAward,
    number: "01",
  },
  {
    id: 2,
    title: "Professional Expertise",
    description:
      "Our approach combines technical knowledge, careful planning, and practical engineering solutions.",
    icon: FaUserTie,
    number: "02",
  },
  {
    id: 3,
    title: "Timely Project Delivery",
    description:
      "Structured planning and effective coordination help keep project activities organized and on schedule.",
    icon: FaClock,
    number: "03",
  },
  {
    id: 4,
    title: "Transparent Cost Planning",
    description:
      "We focus on clear project scopes, detailed estimates, and cost-conscious planning.",
    icon: FaFileInvoiceDollar,
    number: "04",
  },
  {
    id: 5,
    title: "Safety & Responsibility",
    description:
      "We recognize the importance of responsible work practices and safety throughout project activities.",
    icon: FaShieldAlt,
    number: "05",
  },
  {
    id: 6,
    title: "Client-Focused Support",
    description:
      "We value clear communication and ongoing coordination to understand and address client requirements.",
    icon: FaHeadset,
    number: "06",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      aria-labelledby="why-choose-us-heading"
      className="relative overflow-hidden bg-brand px-5 py-20 lg:px-8 lg:py-28"
    >
      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 h-96 w-96 rounded-full border-[60px] border-white/5"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full border-[60px] border-white/5"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="font-bold uppercase tracking-[3px] text-accent">
            Our Advantages
          </span>

          <h2
            id="why-choose-us-heading"
            className="mt-4 font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            Why Work With
            <span className="text-accent"> Our Team?</span>
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            We focus on thoughtful engineering, practical solutions, responsible
            project coordination, and clear communication throughout every stage
            of a project.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: (index % 3) * 0.12,
                }}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-accent/60 hover:bg-white/10"
              >
                {/* Feature Number */}
                <span
                  aria-hidden="true"
                  className="absolute right-7 top-6 font-heading text-4xl font-extrabold text-white/10"
                >
                  {feature.number}
                </span>

                {/* Feature Icon */}
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-2xl text-white transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Icon aria-hidden="true" />
                </div>

                {/* Feature Title */}
                <h3 className="font-heading text-xl font-bold text-white">
                  {feature.title}
                </h3>

                {/* Feature Description */}
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {feature.description}
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
      </div>
    </section>
  );
};

export default WhyChooseUs;
