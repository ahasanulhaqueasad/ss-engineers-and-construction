import { motion } from "motion/react";

import {
  FaComments,
  FaMapMarkedAlt,
  FaDraftingCompass,
  FaFileSignature,
  FaHardHat,
  FaKey,
  FaArrowRight,
} from "react-icons/fa";

const processSteps = [
  {
    id: 1,
    title: "Initial Consultation",
    description:
      "Discuss your project goals, requirements, budget, and expectations with our team.",
    icon: FaComments,
  },
  {
    id: 2,
    title: "Site Visit & Assessment",
    description:
      "Evaluate the project location and understand its site conditions and technical requirements.",
    icon: FaMapMarkedAlt,
  },
  {
    id: 3,
    title: "Design & Estimation",
    description:
      "Prepare suitable engineering designs, technical plans, and estimated project costs.",
    icon: FaDraftingCompass,
  },
  {
    id: 4,
    title: "Agreement & Planning",
    description:
      "Finalize the project scope, responsibilities, timeline, and agreement before execution.",
    icon: FaFileSignature,
  },
  {
    id: 5,
    title: "Project Execution",
    description:
      "Carry out the project with attention to quality, coordination, and construction standards.",
    icon: FaHardHat,
  },
  {
    id: 6,
    title: "Final Inspection & Handover",
    description:
      "Review the completed work and hand over the project after the final inspection.",
    icon: FaKey,
  },
];

const ProcessSection = () => {
  return (
    <section
      aria-labelledby="process-section-heading"
      className="bg-white px-5 py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="font-bold uppercase tracking-[3px] text-accent">
            How We Work
          </span>

          <h2
            id="process-section-heading"
            className="mt-4 font-heading text-3xl font-extrabold text-brand sm:text-4xl lg:text-5xl"
          >
            Our Project
            <span className="text-accent"> Process</span>
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            From the initial consultation to the final handover, we follow a
            structured process to help ensure smooth coordination and
            quality-focused project delivery.
          </p>
        </div>

        {/* Process Steps */}
        <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.li
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: (index % 3) * 0.12,
                }}
                className="group relative list-none"
              >
                {/* Process Card */}
                <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-xl">
                  {/* Step Number */}
                  <div
                    aria-hidden="true"
                    className="absolute right-7 top-6 font-heading text-5xl font-extrabold text-slate-100 transition-colors group-hover:text-orange-100"
                  >
                    {`0${step.id}`}
                  </div>

                  {/* Icon */}
                  <div className="relative mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-2xl text-white transition-all duration-300 group-hover:rotate-6 group-hover:bg-accent">
                    <Icon aria-hidden="true" />
                  </div>

                  {/* Step Label */}
                  <span className="text-xs font-bold uppercase tracking-widest text-accent">
                    Step {`0${step.id}`}
                  </span>

                  {/* Step Title */}
                  <h3 className="mt-3 font-heading text-xl font-extrabold text-brand">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {step.description}
                  </p>

                  {/* Bottom Accent */}
                  <div
                    aria-hidden="true"
                    className="mt-7 h-1 w-10 rounded-full bg-accent transition-all duration-300 group-hover:w-20"
                  />
                </div>

                {/* Connecting Arrow */}
                {index !== processSteps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute -right-7 top-1/2 z-10 hidden -translate-y-1/2 text-xl text-accent lg:block"
                  >
                    <FaArrowRight />
                  </div>
                )}
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default ProcessSection;
