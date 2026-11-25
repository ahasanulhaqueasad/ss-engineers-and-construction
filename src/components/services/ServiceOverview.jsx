import { motion } from "motion/react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceOverview = ({
  title = "Professional Engineering Solutions",
  description = "We provide engineering and construction solutions designed around project requirements, technical considerations and client expectations.",
  details = [
    "Understanding project requirements and objectives",
    "Planning suitable engineering solutions",
    "Considering quality and technical standards",
    "Coordinating project activities responsibly",
  ],
  image = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200",
}) => {
  return (
    <section className="bg-white px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl">
            <img
              src={image}
              alt={title}
              className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[500px]"
            />
          </div>

          <div className="absolute -bottom-6 -right-3 rounded-2xl bg-brand p-6 text-white shadow-xl sm:-right-6">
            <p className="text-sm font-semibold text-slate-300">
              Our Commitment
            </p>
            <h3 className="mt-2 font-heading text-xl font-extrabold">
              Quality & Excellence
            </h3>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-bold uppercase tracking-[3px] text-accent">
            Service Overview
          </span>

          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-brand sm:text-4xl">
            Discover Our
            <span className="text-accent"> {title}</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            {description}
          </p>

          <div className="mt-8">
            <h3 className="font-heading text-lg font-extrabold text-brand">
              What This Service Includes
            </h3>

            <div className="mt-5 space-y-4">
              {details.map((detail, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 shrink-0 text-lg text-accent" />

                  <p className="text-sm leading-7 text-slate-600">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          <Link
            to="/request-quote"
            className="mt-9 inline-flex items-center gap-3 rounded-lg bg-brand px-7 py-4 font-bold text-white transition-all hover:bg-accent"
          >
            Discuss Your Requirements
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceOverview;
