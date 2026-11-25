import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  FaArrowRight,
  FaDraftingCompass,
  FaBuilding,
  FaHardHat,
  FaCouch,
  FaMapMarkedAlt,
  FaFlask,
  FaTasks,
  FaTools,
  FaBolt,
  FaFaucet,
  FaCalculator,
} from "react-icons/fa";

import services from "../../data/services.json";

const iconMap = {
  architecture: FaDraftingCompass,
  structure: FaBuilding,
  construction: FaHardHat,
  interior: FaCouch,
  survey: FaMapMarkedAlt,
  soil: FaFlask,
  management: FaTasks,
  renovation: FaTools,
  electrical: FaBolt,
  plumbing: FaFaucet,
  estimation: FaCalculator,
};

const ServicesPreview = () => {
  return (
    <section className="bg-white px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="font-bold uppercase tracking-[3px] text-accent">
            Our Expertise
          </span>

          <h2 className="mt-4 font-heading text-3xl font-extrabold text-brand sm:text-4xl lg:text-5xl">
            Engineering & Construction
            <span className="text-accent"> Services</span>
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Comprehensive engineering and construction solutions designed to
            bring your vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: (index % 4) * 0.1,
                }}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-2xl text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                  {Icon && <Icon />}
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  {service.category}
                </span>

                <h3 className="mt-3 font-heading text-xl font-bold text-brand">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {service.description}
                </p>

                <Link
                  to={`/services/${service.id}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand transition-colors group-hover:text-accent"
                >
                  Explore Service
                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 rounded-lg bg-brand px-8 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-accent"
          >
            View All Services
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
