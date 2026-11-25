import { motion } from "motion/react";
import {
  FaClipboardList,
  FaBuilding,
  FaFileUpload,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  {
    number: "01",
    title: "Your Information",
    description: "Provide your name and contact details.",
    icon: FaClipboardList,
  },
  {
    number: "02",
    title: "Project Details",
    description: "Tell us about your project requirements.",
    icon: FaBuilding,
  },
  {
    number: "03",
    title: "Upload Documents",
    description: "Share drawings, images or project files.",
    icon: FaFileUpload,
  },
  {
    number: "04",
    title: "Submit Inquiry",
    description: "Review your information and submit.",
    icon: FaCheckCircle,
  },
];

const QuoteSteps = () => {
  return (
    <section className="bg-white px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-sm font-bold uppercase tracking-[3px] text-accent">
            Simple Process
          </span>

          <h2 className="mt-4 font-heading text-3xl font-extrabold text-brand sm:text-4xl">
            How to Request a Quote
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-600">
            Follow these four simple steps to share your project details with
            our engineering team.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group relative rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-xl"
              >
                {/* Number */}
                <span className="absolute right-6 top-5 font-heading text-4xl font-extrabold text-slate-100">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-2xl text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                  <Icon />
                </div>

                <h3 className="font-heading text-lg font-bold text-brand">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuoteSteps;
