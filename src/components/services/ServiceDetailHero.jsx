import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { FaHome, FaArrowRight, FaHardHat } from "react-icons/fa";

const ServiceDetailHero = ({
  title = "Professional Engineering Solutions",
  category = "Our Services",
  description = "Discover professional engineering and construction solutions designed around your project requirements.",
  image = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000",
}) => {
  return (
    <section className="relative flex min-h-[480px] items-center overflow-hidden bg-brand px-5 py-24 lg:min-h-[560px] lg:px-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/90 to-brand/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-slate-300">
          <Link to="/" className="flex items-center gap-2 hover:text-accent">
            <FaHome />
            Home
          </Link>

          <span>/</span>

          <Link to="/services" className="hover:text-accent">
            Services
          </Link>

          <span>/</span>

          <span className="font-semibold text-accent">{title}</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-md">
            <FaHardHat className="text-accent" />
            <span className="text-sm font-bold uppercase tracking-widest text-white">
              {category}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {description}
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/request-quote"
              className="inline-flex items-center gap-3 rounded-lg bg-accent px-7 py-4 font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-orange-600"
            >
              Request a Quote
              <FaArrowRight />
            </Link>

            <Link
              to="/contact"
              className="rounded-lg border border-white/40 px-7 py-4 font-bold text-white transition-all hover:border-accent hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetailHero;
