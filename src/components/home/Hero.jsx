import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { FaArrowRight, FaCheckCircle, FaHardHat } from "react-icons/fa";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative flex min-h-[650px] items-center overflow-hidden bg-brand lg:min-h-[720px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=85')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/90 to-brand/40" />

      {/* Decorative Shape */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[50px] border-white/5" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-3xl">
          {/* Small Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
          >
            <FaHardHat className="text-accent" />
            {t("hero.badge")}
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl"
          >
            {t("hero.titleStart")}
            <span className="text-accent"> {t("hero.titleHighlight")}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg"
          >
            {t("hero.description")}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              to="/request-quote"
              className="group inline-flex items-center justify-center gap-3 rounded-lg bg-accent px-7 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-brand"
            >
              {t("hero.quoteButton")}
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/40 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-brand"
            >
              {t("hero.projectsButton")}
            </Link>
          </motion.div>

          {/* Trust Points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 flex flex-wrap gap-x-7 gap-y-4"
          >
            {["hero.trustOne", "hero.trustTwo", "hero.trustThree"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-white/90"
                >
                  <FaCheckCircle className="text-accent" />
                  {t(item)}
                </div>
              ),
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 h-1.5 w-full bg-accent" />
    </section>
  );
};

export default Hero;
