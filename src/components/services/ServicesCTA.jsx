import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPhoneAlt, FaComments } from "react-icons/fa";

const ServicesCTA = () => {
  return (
    <section className="relative overflow-hidden bg-surface px-5 py-20 lg:px-8 lg:py-24">
      {/* Decorative Shapes */}
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full border-[40px] border-brand/5" />
      <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full border-[45px] border-accent/10" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-brand px-7 py-14 text-center shadow-2xl sm:px-12 sm:py-20"
        >
          {/* Background Decoration */}
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[35px] border-white/5" />
          <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full border-[35px] border-accent/10" />

          <div className="relative z-10 mx-auto max-w-3xl">
            {/* Icon */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-3xl text-white shadow-lg">
              <FaComments />
            </div>

            {/* Heading */}
            <h2 className="mt-8 font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Let's Build Something
              <span className="block text-accent">Extraordinary Together</span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
              Have a construction or engineering project in mind? Share your
              requirements with us and take the first step toward bringing your
              vision to life.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-3 rounded-lg bg-accent px-7 py-4 font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-orange-600"
              >
                Request a Free Quote
                <FaArrowRight />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-lg border border-white/30 px-7 py-4 font-bold text-white transition-all hover:border-accent hover:bg-white/10"
              >
                <FaPhoneAlt />
                Contact Our Team
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCTA;
