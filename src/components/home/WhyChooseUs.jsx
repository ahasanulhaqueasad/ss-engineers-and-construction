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
    title: "Quality Assurance",
    description:
      "We maintain high standards of quality throughout every stage of engineering and construction.",
    icon: FaAward,
    number: "01",
  },
  {
    id: 2,
    title: "Experienced Engineers",
    description:
      "Our approach focuses on professional expertise, technical knowledge and careful planning.",
    icon: FaUserTie,
    number: "02",
  },
  {
    id: 3,
    title: "On-Time Delivery",
    description:
      "We value your time and focus on efficient project planning and timely execution.",
    icon: FaClock,
    number: "03",
  },
  {
    id: 4,
    title: "Transparent Pricing",
    description:
      "Clear estimates and transparent communication help you understand your project costs.",
    icon: FaFileInvoiceDollar,
    number: "04",
  },
  {
    id: 5,
    title: "Safety First",
    description:
      "We prioritize responsible construction practices and safety at every project stage.",
    icon: FaShieldAlt,
    number: "05",
  },
  {
    id: 6,
    title: "After-Work Support",
    description:
      "Our commitment extends beyond project completion with dependable client support.",
    icon: FaHeadset,
    number: "06",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-brand px-5 py-20 lg:px-8 lg:py-28">
      {/* Decorative Background */}
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full border-[60px] border-white/5" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full border-[60px] border-white/5" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="font-bold uppercase tracking-[3px] text-accent">
            Why Choose Us
          </span>

          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Your Vision, Our Expertise,
            <span className="text-accent"> Our Commitment.</span>
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            We believe successful projects are built on trust, expertise,
            transparency and an uncompromising commitment to quality.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
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
                <span className="absolute right-7 top-6 font-heading text-4xl font-extrabold text-white/10">
                  {feature.number}
                </span>

                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-2xl text-white transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Icon />
                </div>

                <h3 className="font-heading text-xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-300">
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

export default WhyChooseUs;
