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
    title: "Engineering Excellence",
    category: "Professional Recognition",
    description:
      "Recognition for commitment to engineering quality and professional standards.",
    icon: FaTrophy,
  },
  {
    id: 2,
    title: "Quality Commitment",
    category: "Quality Achievement",
    description:
      "A commitment to maintaining quality workmanship across construction projects.",
    icon: FaMedal,
  },
  {
    id: 3,
    title: "Client Satisfaction",
    category: "Client Recognition",
    description:
      "Building lasting client relationships through responsible project delivery.",
    icon: FaStar,
  },
  {
    id: 4,
    title: "Professional Development",
    category: "Industry Achievement",
    description:
      "Continuous improvement through technical learning and professional development.",
    icon: FaCertificate,
  },
];

const AwardsSection = () => {
  return (
    <section className="relative overflow-hidden bg-brand px-5 py-20 lg:px-8 lg:py-28">
      {/* Background Decoration */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[50px] border-white/5" />
      <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border-[50px] border-accent/10" />

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
            Recognition & Achievements
          </span>

          <h2 className="mt-4 font-heading text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Excellence Worth
            <span className="text-accent"> Celebrating</span>
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            We value every milestone that reflects our dedication to quality,
            professionalism and continuous improvement.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-accent/50 hover:bg-white/10"
              >
                <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/15 text-3xl text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                  <Icon />
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  {item.category}
                </span>

                <h3 className="mt-4 font-heading text-xl font-extrabold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>

                <div className="mt-7 h-1 w-10 rounded-full bg-accent transition-all duration-300 group-hover:w-20" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <FaAward className="text-4xl text-accent" />

          <h3 className="font-heading text-2xl font-extrabold text-white">
            Every Milestone Inspires Us to Do Better
          </h3>

          <p className="max-w-2xl text-sm leading-7 text-slate-300">
            Our focus remains on delivering dependable engineering and
            construction solutions while continuously raising our standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
