import { motion } from "motion/react";
import { FaBuilding, FaCheckCircle, FaHardHat, FaUsers } from "react-icons/fa";

const stats = [
  {
    id: 1,
    label: "Total Projects",
    value: "120+",
    icon: FaBuilding,
  },
  {
    id: 2,
    label: "Completed Projects",
    value: "95+",
    icon: FaCheckCircle,
  },
  {
    id: 3,
    label: "Ongoing Projects",
    value: "15+",
    icon: FaHardHat,
  },
  {
    id: 4,
    label: "Happy Clients",
    value: "85+",
    icon: FaUsers,
  },
];

const ProjectStats = () => {
  return (
    <section className="bg-white px-5 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-xl sm:p-8"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-2xl text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                <Icon />
              </div>

              <h3 className="mt-5 font-heading text-3xl font-extrabold text-brand sm:text-4xl">
                {stat.value}
              </h3>

              <p className="mt-2 text-xs font-semibold text-slate-500 sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectStats;
