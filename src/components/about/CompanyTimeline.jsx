import { motion } from "motion/react";

import {
  FaFlag,
  FaBuilding,
  FaUsers,
  FaAward,
  FaArrowDown,
} from "react-icons/fa";

const timelineData = [
  {
    id: 1,
    stage: "Our Approach",
    title: "Understanding Your Vision",
    description:
      "We begin by understanding project requirements, client expectations, and the goals that shape each engineering and construction project.",
    icon: FaFlag,
  },
  {
    id: 2,
    stage: "Our Services",
    title: "Planning & Design Solutions",
    description:
      "We focus on engineering design, technical planning, surveying, testing, and other construction-related services based on project needs.",
    icon: FaBuilding,
  },
  {
    id: 3,
    stage: "Our Commitment",
    title: "Coordination & Collaboration",
    description:
      "Clear communication, thoughtful coordination, and attention to project requirements guide our approach to working with clients.",
    icon: FaUsers,
  },
  {
    id: 4,
    stage: "Our Vision",
    title: "Continuous Improvement",
    description:
      "We aim to strengthen our engineering practices and deliver practical, quality-focused solutions for future projects.",
    icon: FaAward,
  },
];

const CompanyTimeline = () => {
  return (
    <section
      aria-labelledby="company-timeline-heading"
      className="overflow-hidden bg-white px-5 py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="font-bold uppercase tracking-[3px] text-accent">
            Our Journey
          </span>

          <h2
            id="company-timeline-heading"
            className="mt-4 font-heading text-3xl font-extrabold text-brand sm:text-4xl lg:text-5xl"
          >
            Driven by Purpose,
            <span className="text-accent"> Focused on Excellence</span>
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Our approach to engineering and construction is guided by
            understanding client needs, careful planning, professional
            coordination, and continuous improvement.
          </p>
        </motion.div>

        {/* Timeline */}
        <ol
          aria-label="Our company approach and journey"
          className="relative space-y-12"
        >
          {/* Center Line */}
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-6 top-8 w-1 rounded-full bg-orange-100 sm:left-1/2 sm:-translate-x-1/2"
          />

          {timelineData.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className={`relative flex items-start gap-6 pl-1 sm:gap-0 sm:pl-0 ${
                  isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Timeline Icon */}
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-accent text-lg text-white shadow-lg sm:left-1/2 sm:-translate-x-1/2"
                >
                  <Icon />
                </div>

                {/* Content Card */}
                <article
                  className={`ml-16 w-full rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl sm:ml-0 sm:w-[calc(50%-45px)] ${
                    isLeft ? "sm:text-right" : "sm:text-left"
                  }`}
                >
                  <span className="inline-block rounded-full bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-accent">
                    {item.stage}
                  </span>

                  <h3 className="mt-5 font-heading text-xl font-extrabold text-brand sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>
                </article>

                {/* Empty Side */}
                <div
                  aria-hidden="true"
                  className="hidden w-[calc(50%-45px)] sm:block"
                />
              </motion.li>
            );
          })}
        </ol>

        {/* Ending */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col items-center text-center"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-lg text-accent">
            <FaArrowDown aria-hidden="true" />
          </div>

          <p className="mt-5 font-heading text-lg font-bold text-brand">
            Building Better Solutions for Tomorrow
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyTimeline;
