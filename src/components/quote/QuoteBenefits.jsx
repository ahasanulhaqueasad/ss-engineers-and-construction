import { motion } from "motion/react";
import {
  FaUserTie,
  FaClipboardCheck,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";

const benefits = [
  {
    icon: FaUserTie,
    title: "Expert Consultation",
    description:
      "Discuss your project with experienced engineering professionals.",
  },
  {
    icon: FaClipboardCheck,
    title: "Detailed Assessment",
    description: "We review your requirements to understand the project scope.",
  },
  {
    icon: FaShieldAlt,
    title: "Quality Commitment",
    description:
      "Our approach focuses on quality, safety and professional standards.",
  },
  {
    icon: FaHeadset,
    title: "Dedicated Support",
    description:
      "Get clear communication and guidance throughout the inquiry process.",
  },
];

const QuoteBenefits = () => {
  return (
    <section className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="text-sm font-bold uppercase tracking-[3px] text-accent">
            Why Choose Us
          </span>

          <h2 className="mt-4 font-heading text-3xl font-extrabold text-brand sm:text-4xl">
            More Than Just a Quote
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            We aim to understand your project needs and provide professional
            guidance from the very beginning.
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-2xl text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                  <Icon />
                </div>

                <h3 className="font-heading text-xl font-bold text-brand">
                  {benefit.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuoteBenefits;
