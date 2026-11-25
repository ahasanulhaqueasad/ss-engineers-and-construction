import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { FaArrowRight, FaCheckCircle, FaHardHat } from "react-icons/fa";

const AboutPreview = () => {
  const { t } = useTranslation();

  const features = ["featureOne", "featureTwo", "featureThree", "featureFour"];

  return (
    <section className="overflow-hidden bg-surface px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=85"
              alt="Civil engineering construction work"
              className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-[520px]"
            />
          </div>

          <div className="absolute -bottom-6 -right-3 rounded-2xl bg-brand p-6 text-white shadow-xl sm:right-6">
            <FaHardHat className="mb-3 text-3xl text-accent" />
            <h3 className="text-2xl font-extrabold">
              {t("aboutPreview.qualityTitle")}
            </h3>
            <p className="mt-1 text-sm text-white/70">
              {t("aboutPreview.qualitySubtitle")}
            </p>
          </div>

          <div className="absolute -left-5 -top-5 -z-0 h-32 w-32 rounded-2xl border-4 border-accent/30" />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-bold uppercase tracking-[3px] text-accent">
            {t("aboutPreview.eyebrow")}
          </span>

          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-brand sm:text-4xl lg:text-5xl">
            {t("aboutPreview.title")}
            <span className="text-accent"> {t("aboutPreview.highlight")}</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            {t("aboutPreview.description")}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <FaCheckCircle className="shrink-0 text-accent" />
                <span className="text-sm font-semibold text-brand">
                  {t(`aboutPreview.${feature}`)}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/about"
              className="group inline-flex items-center gap-3 rounded-lg bg-brand px-7 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-accent"
            >
              {t("aboutPreview.button")}
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
