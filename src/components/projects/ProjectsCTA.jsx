import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPhoneAlt, FaHardHat } from "react-icons/fa";

const ProjectsCTA = () => {
  return (
    <section className="bg-white px-5 py-20 lg:px-8 lg:py-28">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-brand px-7 py-16 sm:px-12 lg:px-16 lg:py-20">
        {/* Decorative Shapes */}
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[35px] border-white/5" />
        <div className="absolute -bottom-32 right-1/3 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white">
              <FaHardHat className="text-accent" />
              Let's Build Together
            </div>

            <h2 className="mt-7 font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Have a Project
              <span className="block text-accent">in Mind?</span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-slate-300">
              Share your project requirements with us. Let's discuss your ideas
              and explore the right engineering and construction solutions.
            </p>

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
                className="inline-flex items-center gap-3 rounded-lg border border-white/30 px-7 py-4 font-bold text-white transition-all hover:border-accent hover:bg-white/10"
              >
                <FaPhoneAlt />
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative hidden lg:block"
          >
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000"
              alt="Construction project"
              className="h-[360px] w-full rounded-2xl object-cover shadow-2xl"
            />

            <div className="absolute -bottom-7 -left-7 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
              <p className="text-sm font-semibold text-slate-500">
                Your Vision
              </p>

              <h3 className="mt-1 font-heading text-xl font-extrabold text-brand">
                Our Commitment
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCTA;
