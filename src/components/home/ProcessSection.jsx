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
    title: "Consultation",
    description:
      "We discuss your requirements, ideas, budget and project goals.",
    icon: FaComments,
  },
  {
    id: 2,
    title: "Site Visit",
    description:
      "Our team visits the site to understand the location and project conditions.",
    icon: FaMapMarkedAlt,
  },
  {
    id: 3,
    title: "Design & Estimate",
    description:
      "We prepare suitable designs, project plans and detailed cost estimates.",
    icon: FaDraftingCompass,
  },
  {
    id: 4,
    title: "Agreement",
    description:
      "We finalize the project scope, pricing, timeline and working agreement.",
    icon: FaFileSignature,
  },
  {
    id: 5,
    title: "Construction",
    description:
      "Our team carries out the construction work with quality and safety in mind.",
    icon: FaHardHat,
  },
  {
    id: 6,
    title: "Handover",
    description:
      "We complete the project and hand it over to you with the required support.",
    icon: FaKey,
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-white px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="font-bold uppercase tracking-[3px] text-accent">
            Our Working Process
          </span>

          <h2 className="mt-4 font-heading text-3xl font-extrabold text-brand sm:text-4xl lg:text-5xl">
            From Your Vision
            <span className="text-accent"> To Reality</span>
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            A clear and organized process helps us deliver better engineering
            and construction experiences.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: (index % 3) * 0.12,
                }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-xl">
                  {/* Step Number */}
                  <div className="absolute right-7 top-6 font-heading text-5xl font-extrabold text-slate-100 transition-colors group-hover:text-orange-100">
                    0{step.id}
                  </div>

                  {/* Icon */}
                  <div className="relative mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-2xl text-white transition-all duration-300 group-hover:bg-accent group-hover:rotate-6">
                    <Icon />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-widest text-accent">
                    Step 0{step.id}
                  </span>

                  <h3 className="mt-3 font-heading text-xl font-extrabold text-brand">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {step.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className="mt-7 h-1 w-10 rounded-full bg-accent transition-all duration-300 group-hover:w-20" />
                </div>

                {/* Arrow */}
                {index !== processSteps.length - 1 && (
                  <div className="absolute -right-7 top-1/2 z-10 hidden -translate-y-1/2 text-xl text-accent lg:block">
                    <FaArrowRight />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
