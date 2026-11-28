import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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
  FaTimes,
  FaExpandAlt,
  FaCheckCircle,
  FaClipboardList,
  FaBoxOpen,
  FaQuestionCircle,
  FaChevronDown,
} from "react-icons/fa";

import services from "../../data/services.json";

const iconMap = {
  architecture: FaDraftingCompass,
  structure: FaBuilding,
  construction: FaTools,
  interior: FaCouch,
  survey: FaMapMarkedAlt,
  soil: FaFlask,
  management: FaTasks,
  renovation: FaTools,
  electrical: FaBolt,
  plumbing: FaFaucet,
  estimation: FaCalculator,
};

const ServiceList = ({ title, icon: Icon, items }) => {
  if (!items?.length) return null;

  return (
    <div className="mb-9">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-lg text-brand">
          <Icon />
        </span>

        <h4 className="text-xl font-bold text-heading">{title}</h4>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item, index) => (
          <div
            key={`${index}-${item}`}
            className="flex items-start gap-3 rounded-xl border border-base-300 bg-surface p-4"
          >
            <FaCheckCircle className="mt-1 shrink-0 text-brand" />

            <span className="text-sm leading-6 text-muted">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ServiceProcess = ({ items }) => {
  if (!items?.length) return null;

  return (
    <div className="mb-9">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-lg text-brand">
          <FaClipboardList />
        </span>

        <h4 className="text-xl font-bold text-heading">Our Work Process</h4>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item, index) => (
          <div
            key={`${index}-${item}`}
            className="flex gap-4 rounded-xl border border-base-300 p-4"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand text-sm font-bold text-white">
              {String(index + 1).padStart(2, "0")}
            </span>

            <p className="pt-1 text-sm font-medium leading-6 text-heading">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ServiceFAQs = ({ items }) => {
  const [openFaq, setOpenFaq] = useState(0);

  if (!items?.length) return null;

  return (
    <div className="mb-2">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-lg text-brand">
          <FaQuestionCircle />
        </span>

        <h4 className="text-xl font-bold text-heading">
          Frequently Asked Questions
        </h4>
      </div>

      <div className="space-y-3">
        {items.map((faq, index) => {
          const isOpen = openFaq === index;

          return (
            <div
              key={`${index}-${faq.question}`}
              className="overflow-hidden rounded-xl border border-base-300"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 p-4 text-left transition hover:bg-surface"
              >
                <span className="text-sm font-bold leading-6 text-heading">
                  {faq.question}
                </span>

                <FaChevronDown
                  className={`shrink-0 text-sm text-brand transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="border-t border-base-300 px-4 py-4 text-sm leading-7 text-muted">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const AllServices = () => {
  const [selectedServiceId, setSelectedServiceId] = useState(
    services[0]?.id ?? null,
  );

  const [isExpanded, setIsExpanded] = useState(false);

  const selectedService = services.find(
    (service) => service.id === selectedServiceId,
  );

  if (!services.length || !selectedService) return null;

  const SelectedIcon = iconMap[selectedService.icon] || FaDraftingCompass;

  const handleServiceSelect = (serviceId) => {
    setSelectedServiceId(serviceId);
    setIsExpanded(false);
  };

  return (
    <section
      id="all-services"
      className="bg-surface px-5 py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.2em] text-brand">
            What We Offer
          </span>

          <h2 className="mb-5 text-3xl font-extrabold text-heading sm:text-4xl lg:text-5xl">
            Our Professional Services
          </h2>

          <p className="text-base leading-7 text-muted">
            Explore our engineering, construction, design and consultancy
            services. Select any service to learn more.
          </p>
        </motion.div>

        {/* Services Layout */}
        <div className="grid items-start gap-6 lg:grid-cols-[340px_minmax(0,1fr)]">
          {/* Left: Service List */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-base-300 bg-white p-4 shadow-sm lg:sticky lg:top-24"
          >
            <h3 className="mb-4 px-2 text-lg font-bold text-heading">
              All Services
              <span className="ml-2 text-sm font-medium text-muted">
                ({services.length})
              </span>
            </h3>

            <div className="flex flex-col gap-2">
              {services.map((service, index) => {
                const ServiceIcon = iconMap[service.icon] || FaDraftingCompass;

                const isActive = selectedServiceId === service.id;

                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => handleServiceSelect(service.id)}
                    aria-pressed={isActive}
                    className={`group flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-all duration-300 ${
                      isActive
                        ? "border-brand bg-brand text-white shadow-md"
                        : "border-transparent bg-surface text-heading hover:border-brand/30 hover:bg-brand/5"
                    }`}
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-lg transition-colors ${
                        isActive
                          ? "bg-white/15 text-white"
                          : "bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white"
                      }`}
                    >
                      <ServiceIcon />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span
                        className={`mb-1 block text-xs font-semibold ${
                          isActive ? "text-white/75" : "text-muted"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")} ·{" "}
                        {service.category}
                      </span>

                      <span className="block text-sm font-bold">
                        {service.title}
                      </span>
                    </span>

                    <FaArrowRight
                      className={`shrink-0 text-sm transition-transform ${
                        isActive
                          ? "translate-x-1 text-white"
                          : "text-muted group-hover:translate-x-1 group-hover:text-brand"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Selected Service Details */}
          <div className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-2xl border border-base-300 bg-white shadow-sm"
              >
                {/* Service Header */}
                <div className="bg-brand px-6 py-8 text-white sm:px-8 sm:py-10">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider">
                      {selectedService.category}
                    </span>

                    <span className="text-sm font-semibold text-white/70">
                      Service #{selectedService.id}
                    </span>
                  </div>

                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-4xl">
                      <SelectedIcon />
                    </div>

                    <div>
                      <h3 className="text-2xl font-extrabold sm:text-3xl lg:text-4xl">
                        {selectedService.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-white/80">
                        {selectedService.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6 sm:p-8">
                  {/* Overview */}
                  <div className="mb-8">
                    <span className="mb-3 block text-xs font-bold uppercase tracking-[0.18em] text-brand">
                      Service Overview
                    </span>

                    <h4 className="mb-3 text-xl font-bold text-heading">
                      About {selectedService.title}
                    </h4>

                    <p className="text-base leading-8 text-muted">
                      {selectedService.overview || selectedService.description}
                    </p>
                  </div>

                  {/* Full Details */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-base-300 pt-8">
                          <ServiceList
                            title="Key Features"
                            icon={FaCheckCircle}
                            items={selectedService.features}
                          />

                          <ServiceList
                            title="What You Receive"
                            icon={FaBoxOpen}
                            items={selectedService.deliverables}
                          />

                          <ServiceProcess items={selectedService.process} />

                          <ServiceFAQs items={selectedService.faqs} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Action Buttons */}
                  <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-base-300 pt-6">
                    <button
                      type="button"
                      onClick={() => setIsExpanded((prev) => !prev)}
                      aria-expanded={isExpanded}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-bold text-white transition hover:bg-brand/90"
                    >
                      {isExpanded ? (
                        <>
                          <FaTimes />
                          Show Less
                        </>
                      ) : (
                        <>
                          <FaExpandAlt />
                          Explore Full Details
                        </>
                      )}
                    </button>

                    <Link
                      to="/request-quote"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-base-300 px-5 py-3 text-sm font-bold text-heading transition hover:border-brand hover:text-brand"
                    >
                      Request a Quote
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-2xl bg-brand px-6 py-10 text-center text-white sm:px-10"
        >
          <h3 className="mb-3 text-2xl font-extrabold sm:text-3xl">
            Have a Project in Mind?
          </h3>

          <p className="mx-auto mb-6 max-w-2xl text-sm leading-7 text-white/80">
            Let us know about your project and discuss how our engineering and
            construction services can help.
          </p>

          <Link
            to="/request-quote"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-brand transition hover:bg-surface"
          >
            Request a Quote
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AllServices;
