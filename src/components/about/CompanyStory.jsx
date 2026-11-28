import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import {
  FaCheckCircle,
  FaArrowRight,
  FaAward,
  FaBuilding,
} from "react-icons/fa";

const highlights = ["professional", "quality", "team", "management"];

const CompanyStory = () => {
  const { t } = useTranslation();

  return (
    <section
      aria-labelledby="company-story-heading"
      className="overflow-hidden bg-white px-5 py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Image Area */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200"
              alt={t("companyStory.imageAlt")}
              width="1200"
              height="800"
              loading="lazy"
              decoding="async"
              className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[520px]"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-brand/40 to-transparent"
            />
          </div>

          {/* Engineering Identity Card */}
          <div className="absolute -bottom-7 right-4 rounded-2xl bg-accent p-6 text-white shadow-xl sm:-right-5 sm:p-8">
            <FaBuilding aria-hidden="true" className="mb-3 text-3xl" />

            <h3 className="font-heading text-2xl font-extrabold">
              {t("companyStory.cardTitle")}
            </h3>

            <p className="mt-1 text-sm font-medium text-white/90">
              {t("companyStory.cardDescription")}
            </p>
          </div>

          {/* Decorative Shape */}
          <div
            aria-hidden="true"
            className="absolute -left-5 -top-5 -z-10 h-32 w-32 rounded-2xl border-4 border-accent/30"
          />
        </motion.div>

        {/* Content Area */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Section Label */}
          <span className="font-bold uppercase tracking-[3px] text-accent">
            {t("companyStory.eyebrow")}
          </span>

          {/* Main Heading */}
          <h2
            id="company-story-heading"
            className="mt-5 font-heading text-3xl font-extrabold leading-tight text-brand sm:text-4xl lg:text-5xl"
          >
            {t("companyStory.headingStart")}
            <span className="text-accent">
              {" "}
              {t("companyStory.headingHighlight")}
            </span>
          </h2>

          {/* Company Description */}
          <p className="mt-7 leading-8 text-slate-600">
            {t("companyStory.paragraphOne")}
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            {t("companyStory.paragraphTwo")}
          </p>

          {/* Company Highlights */}
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <FaCheckCircle
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-lg text-accent"
                />

                <span className="text-sm font-semibold text-brand">
                  {t(`companyStory.highlights.${item}`)}
                </span>
              </li>
            ))}
          </ul>

          {/* Bottom Info */}
          <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-slate-200 pt-8">
            {/* Quality Commitment */}
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-xl text-accent">
                <FaAward aria-hidden="true" />
              </div>

              <div>
                <h3 className="font-heading font-extrabold text-brand">
                  {t("companyStory.qualityTitle")}
                </h3>

                <p className="text-xs text-slate-500">
                  {t("companyStory.qualitySubtitle")}
                </p>
              </div>
            </div>

            {/* Contact Link */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 font-bold text-brand transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
            >
              {t("companyStory.contactButton")}

              <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyStory;
