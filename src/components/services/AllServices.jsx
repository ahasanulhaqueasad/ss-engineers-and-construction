import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  FaDraftingCompass,
  FaBuilding,
  FaCouch,
  FaMapMarkedAlt,
  FaFlask,
  FaTasks,
  FaTools,
  FaBolt,
  FaFaucet,
  FaCalculator,
  FaArrowRight,
} from "react-icons/fa";

import services from "../../data/services.json";

const iconMap = {
  FaDraftingCompass,
  FaBuilding,
  FaCouch,
  FaMapMarkedAlt,
  FaFlask,
  FaTasks,
  FaTools,
  FaBolt,
  FaFaucet,
  FaCalculator,
};

const AllServices = () => {
  return (
    <section
      id="all-services"
      className="bg-surface px-5 py-20 lg:px-8 lg:py-28"
    >
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
            What We Offer
          </span>

          <h2 className="mt-4 font-heading text-3xl font-extrabold text-brand sm:text-4xl lg:text-5xl">
            Our Professional
            <span className="text-accent"> Services</span>
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Discover our complete range of engineering, design, consultancy and
            construction services.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || FaBuilding;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (index % 4) * 0.08 }}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-3xl text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                  <Icon />
                </div>

                {/* Category */}
                <span className="mt-7 text-xs font-bold uppercase tracking-wider text-accent">
                  {service.category}
                </span>

                {/* Title */}
                <h3 className="mt-3 font-heading text-xl font-extrabold text-brand">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-500">
                  {service.description}
                </p>

                {/* Details Link */}
                <Link
                  to={`/services/${service.id}`}
                  className="mt-7 inline-flex items-center gap-3 border-t border-slate-100 pt-5 text-sm font-bold text-brand transition-colors hover:text-accent"
                >
                  Explore Service
                  <FaArrowRight className="transition-transform group-hover:translate-x-2" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-500">
            Need a customized engineering solution?
          </p>

          <Link
            to="/request-quote"
            className="mt-4 inline-flex items-center gap-3 rounded-lg bg-brand px-7 py-4 font-bold text-white transition-all hover:bg-accent"
          >
            Discuss Your Project
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AllServices;
