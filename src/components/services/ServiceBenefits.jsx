import { motion } from "motion/react";
import {
  FaUserTie,
  FaAward,
  FaClock,
  FaHandshake,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";

const benefits = [
  {
    id: 1,
    title: "Experienced Professionals",
    description:
      "Our engineering-focused approach emphasizes technical knowledge and professional project execution.",
    icon: FaUserTie,
  },
  {
    id: 2,
    title: "Quality-Focused Work",
    description:
      "We prioritize appropriate materials, careful planning and attention to construction quality.",
    icon: FaAward,
  },
  {
    id: 3,
    title: "Timely Project Delivery",
    description:
      "Structured planning and coordination help keep project activities on schedule.",
    icon: FaClock,
  },
  {
    id: 4,
    title: "Transparent Communication",
    description:
      "Clear discussions about project scope, costs and progress support better client decisions.",
    icon: FaHandshake,
  },
  {
    id: 5,
    title: "Safety Awareness",
    description:
      "Responsible safety practices are an important consideration throughout project execution.",
    icon: FaShieldAlt,
  },
  {
    id: 6,
    title: "Client Support",
    description:
      "We value client communication and aim to provide support throughout the project journey.",
    icon: FaHeadset,
  },
];

const ServiceBenefits = () => {
  return (
    <section className="relative overflow-hidden bg-brand px-5 py-20 lg:px-8 lg:py-28">
      {/* Decorative Background */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full border-[50px] border-white/5" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full border-[45px] border-accent/10" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="font-bold uppercase tracking-[3px] text-accent">
            Why Work With Us
          </span>

          <h2 className="mt-4 font-heading text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            The Difference Is in
            <span className="text-accent"> Every Detail</span>
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            We focus on responsible engineering practices, clear communication
            and solutions designed around your project requirements.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-accent/50 hover:bg-white/10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/15 text-3xl text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                  <Icon />
                </div>

                <h3 className="mt-7 font-heading text-xl font-extrabold text-white">
                  {benefit.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {benefit.description}
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

export default ServiceBenefits;
