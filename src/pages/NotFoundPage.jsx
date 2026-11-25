import { Link } from "react-router-dom";
import {
  FaExclamationTriangle,
  FaHome,
  FaTools,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "motion/react";

const NotFoundPage = () => {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-surface px-5 py-20">
      <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-brand/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-2xl text-center"
      >
        <div className="relative mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-accent/10">
          <FaExclamationTriangle className="text-5xl text-accent" />

          <span className="absolute -right-2 -top-2 flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
            !
          </span>
        </div>

        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-accent">
          Page Not Found
        </p>

        <h1 className="mb-4 text-7xl font-extrabold text-brand md:text-9xl">
          404
        </h1>

        <h2 className="mb-4 text-2xl font-extrabold text-brand md:text-3xl">
          Oops! This Page Doesn't Exist.
        </h2>

        <p className="mx-auto mb-9 max-w-lg text-sm leading-7 text-muted md:text-base">
          The page you are looking for may have been moved, deleted, or the URL
          may be incorrect. Let's get you back on track.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-7 py-4 text-sm font-bold text-white shadow-lg shadow-accent/20 transition hover:-translate-y-1 hover:bg-brand"
          >
            <FaHome />
            Back to Home
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-7 py-4 text-sm font-bold text-brand transition hover:-translate-y-1 hover:border-accent hover:text-accent"
          >
            <FaTools />
            Explore Services
            <FaArrowRight className="text-xs" />
          </Link>
        </div>

        <p className="mt-10 text-xs text-muted">SS Engineers & Construction</p>
      </motion.div>
    </section>
  );
};

export default NotFoundPage;
