import { motion } from "motion/react";
import { FaFilter } from "react-icons/fa";

const categories = [
  "All Projects",
  "Residential",
  "Commercial",
  "Industrial",
  "Interior",
  "Renovation",
];

const ProjectFilter = () => {
  return (
    <section className="bg-surface px-5 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 lg:flex-row lg:items-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <FaFilter className="text-xl text-accent" />

            <h2 className="font-heading text-xl font-extrabold text-brand sm:text-2xl">
              Explore Our Projects
            </h2>
          </div>

          <p className="mt-2 text-sm text-slate-500">
            Browse projects by category.
          </p>
        </motion.div>

        {/* Category Buttons - UI Only */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-3"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              className={`rounded-full px-5 py-3 text-sm font-bold transition-all duration-300 ${
                index === 0
                  ? "bg-brand text-white shadow-lg"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-accent hover:bg-accent hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectFilter;
