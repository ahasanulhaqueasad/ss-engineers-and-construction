import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaHome, FaHardHat } from "react-icons/fa";

const ServicesHero = () => {
  return (
    <section className="relative flex min-h-[480px] items-center overflow-hidden bg-brand px-5 py-24 lg:min-h-[560px] lg:px-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/90 to-brand/50" />

      {/* Decorative Shapes */}
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border-[40px] border-white/5" />
      <div className="absolute -bottom-32 right-1/4 h-72 w-72 rounded-full border-[35px] border-accent/10" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-3 text-sm text-slate-300">
          <Link
            to="/"
            className="flex items-center gap-2 transition-colors hover:text-accent"
          >
            <FaHome />
            Home
          </Link>

          <span>/</span>

          <span className="font-semibold text-accent">Services</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-md">
            <FaHardHat className="text-accent" />
            <span className="text-sm font-bold uppercase tracking-widest text-white">
              Our Professional Services
            </span>
          </div>

          <h1 className="font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Complete Engineering
            <span className="block text-accent">& Construction Solutions</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            From architectural design to complete construction, explore our
            professional engineering solutions designed to bring your vision to
            life.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/request-quote"
              className="inline-flex items-center gap-3 rounded-lg bg-accent px-7 py-4 font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-orange-600"
            >
              Request a Quote
              <FaArrowRight />
            </Link>

            <a
              href="#all-services"
              className="inline-flex items-center gap-3 rounded-lg border border-white/40 px-7 py-4 font-bold text-white transition-all hover:border-accent hover:bg-white/10"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
