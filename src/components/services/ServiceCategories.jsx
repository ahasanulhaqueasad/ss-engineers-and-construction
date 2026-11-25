import { motion } from "motion/react";
import {
  FaDraftingCompass,
  FaBuilding,
  FaClipboardCheck,
  FaTasks,
  FaArrowRight,
} from "react-icons/fa";

const categories = [
  {
    id: 1,
    title: "Design & Architecture",
    description:
      "Creative architectural and structural solutions designed around your vision.",
    services: ["Architectural Design", "Structural Design", "Interior Design"],
    icon: FaDraftingCompass,
    number: "01",
  },
  {
    id: 2,
    title: "Construction & Development",
    description:
      "Reliable construction and renovation solutions for residential and commercial spaces.",
    services: [
      "Civil Construction",
      "Renovation",
      "Electrical Work",
      "Plumbing Work",
    ],
    icon: FaBuilding,
    number: "02",
  },
  {
    id: 3,
    title: "Engineering Consultancy",
    description:
      "Professional technical guidance, assessments and cost planning for your projects.",
    services: ["Land Survey", "Soil Test", "Estimation & Costing"],
    icon: FaClipboardCheck,
    number: "03",
  },
  {
    id: 4,
    title: "Project Management",
    description:
      "Organized project coordination, monitoring and delivery management.",
    services: ["Project Management"],
    icon: FaTasks,
    number: "04",
  },
];

const ServiceCategories = () => {
  return (
    <section className="bg-white px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="font-bold uppercase tracking-[3px] text-accent">
            Service Categories
          </span>

          <h2 className="mt-4 font-heading text-3xl font-extrabold text-brand sm:text-4xl lg:text-5xl">
            Comprehensive Solutions
            <span className="text-accent"> Under One Roof</span>
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Explore our engineering and construction service categories to find
            the right solution for your project.
          </p>
        </motion.div>

        {/* Category Cards */}
        <div className="grid gap-7 md:grid-cols-2">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-xl sm:p-10"
              >
                {/* Number */}
                <span className="absolute right-7 top-5 font-heading text-6xl font-extrabold text-slate-100 transition-colors group-hover:text-orange-100">
                  {category.number}
                </span>

                {/* Icon */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-3xl text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                  <Icon />
                </div>

                {/* Content */}
                <h3 className="relative mt-7 font-heading text-2xl font-extrabold text-brand">
                  {category.title}
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500">
                  {category.description}
                </p>

                {/* Service List */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {category.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-600 transition-colors group-hover:border-orange-200 group-hover:bg-orange-50"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* Bottom Decoration */}
                <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
                  <span className="text-sm font-bold text-brand">
                    Explore Category
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white transition-all group-hover:bg-accent">
                    <FaArrowRight />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
