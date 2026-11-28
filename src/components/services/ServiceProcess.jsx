import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  FaComments,
  FaMapMarkedAlt,
  FaDraftingCompass,
  FaFileSignature,
  FaHardHat,
  FaKey,
  FaArrowRight,
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    number: "01",
    title: "Initial Consultation",
    description:
      "Discuss your project vision, requirements, budget and expectations with our team.",
    icon: FaComments,
  },
  {
    id: 2,
    number: "02",
    title: "Site Visit & Assessment",
    description:
      "Understand the project location and evaluate its technical requirements.",
    icon: FaMapMarkedAlt,
  },
  {
    id: 3,
    number: "03",
    title: "Design & Estimation",
    description:
      "Prepare suitable design concepts, technical details and project cost estimates.",
    icon: FaDraftingCompass,
  },
  {
    id: 4,
    number: "04",
    title: "Agreement & Planning",
    description:
      "Finalize the project scope, responsibilities, timeline and agreed terms.",
    icon: FaFileSignature,
  },
  {
    id: 5,
    number: "05",
    title: "Construction & Execution",
    description:
      "Carry out project activities with appropriate coordination and supervision.",
    icon: FaHardHat,
  },
  {
    id: 6,
    number: "06",
    title: "Final Handover",
    description:
      "Complete final checks and hand over the finished project to the client.",
    icon: FaKey,
  },
];

const ServiceProcess = () => {
  return (
    <section className="bg-white px-5 py-20 lg:px-8 lg:py-28">
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
            Our Working Process
          </span>

          <h2 className="mt-4 font-heading text-3xl font-extrabold text-brand sm:text-4xl lg:text-5xl">
            From Your Vision to
            <span className="text-accent"> Reality</span>
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            A structured approach helps us understand your requirements and move
            your project forward through clear stages.
          </p>
        </motion.div>

        {/* Process Grid */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="group relative rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-xl"
              >
                {/* Step Number */}
                <span className="absolute right-7 top-5 font-heading text-5xl font-extrabold text-slate-100 transition-colors group-hover:text-orange-100">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-3xl text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                  <Icon />
                </div>

                {/* Content */}
                <h3 className="mt-7 font-heading text-xl font-extrabold text-brand">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {step.description}
                </p>

                <div className="mt-7 h-1 w-10 rounded-full bg-accent transition-all duration-300 group-hover:w-20" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-2xl bg-surface px-6 py-10 text-center sm:px-10">
          <h3 className="font-heading text-2xl font-extrabold text-brand">
            Ready to Start Your Project?
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600">
            Tell us about your project and let us explore the right engineering
            solution together.
          </p>

          <Link
            to="/request-quote"
            className="mt-7 inline-flex items-center gap-3 rounded-lg bg-brand px-7 py-4 font-bold text-white transition-all hover:bg-accent"
          >
            Start Your Project
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
