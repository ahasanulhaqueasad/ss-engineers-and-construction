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
  const visibleServices = services.filter(
    (service) => service.showOnWebsite !== false,
  );

  return (
    <section
      aria-labelledby="services-preview-heading"
      className="bg-white px-5 py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="font-bold uppercase tracking-[3px] text-accent">
            What We Offer
          </span>

          <h2
            id="services-preview-heading"
            className="mt-4 font-heading text-3xl font-extrabold text-brand sm:text-4xl lg:text-5xl"
          >
            Our Professional
            <span className="text-accent"> Services</span>
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Explore our engineering, design, consultancy, and construction
            services, developed to address a wide range of project requirements.
          </p>
        </div>

        {/* Services Grid */}
        {visibleServices.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleServices.map((service, index) => {
              const Icon = iconMap[service.icon] || FaHardHat;

              return (
                <motion.article
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
                  {/* Service Icon */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-2xl text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                    <Icon aria-hidden="true" />
                  </div>

                  {/* Category */}
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">
                    {service.category}
                  </span>

                  {/* Service Title */}
                  <h3 className="mt-3 font-heading text-xl font-bold text-brand">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {service.description}
                  </p>

                  {/* Service Details Link */}
                  <Link
                    to={`/services/${service.id}`}
                    aria-label={`Explore ${service.title} service`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand transition-colors group-hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    Explore Service
                    <FaArrowRight
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        ) : (
          <p className="py-12 text-center text-slate-500">
            No services are currently available.
          </p>
        )}

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 rounded-lg bg-brand px-8 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            View All Services
            <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
