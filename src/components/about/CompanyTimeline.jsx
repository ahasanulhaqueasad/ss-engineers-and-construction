import { motion } from "motion/react";
import {
  FaFlag,
  FaBuilding,
  FaUsers,
  FaAward,
  FaArrowDown,
} from "react-icons/fa";

const timelineData = [
  {
    id: 1,
    year: "The Beginning",
    title: "Company Established",
    description:
      "The beginning of our journey with a vision to provide professional engineering and construction solutions.",
    icon: FaFlag,
  },
  {
    id: 2,
    year: "Growing Forward",
    title: "Expanding Our Services",
    description:
      "Expanding our capabilities to serve a wider range of engineering, design and construction needs.",
    icon: FaBuilding,
  },
  {
    id: 3,
    year: "Building Trust",
    title: "Growing Our Team",
    description:
      "Strengthening our technical expertise through teamwork and professional collaboration.",
    icon: FaUsers,
  },
  {
    id: 4,
    year: "Looking Ahead",
    title: "A Commitment to Excellence",
    description:
      "Continuing our commitment to quality, innovation, safety and lasting client relationships.",
    icon: FaAward,
  },
];

const CompanyTimeline = () => {
  return (
    <section className="overflow-hidden bg-white px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="font-bold uppercase tracking-[3px] text-accent">
            Our Journey
          </span>

          <h2 className="mt-4 font-heading text-3xl font-extrabold text-brand sm:text-4xl lg:text-5xl">
            The Story Behind
            <span className="text-accent"> Our Growth</span>
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Every milestone represents our continued commitment to engineering
            excellence and building lasting trust.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute bottom-8 left-6 top-8 w-1 rounded-full bg-orange-100 sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-start gap-6 pl-1 sm:gap-0 sm:pl-0 ${
                    isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-0 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-accent text-lg text-white shadow-lg sm:left-1/2 sm:-translate-x-1/2">
                    <Icon />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-16 w-full rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl sm:ml-0 sm:w-[calc(50%-45px)] ${
                      isLeft ? "sm:text-right" : "sm:text-left"
                    }`}
                  >
                    <span className="inline-block rounded-full bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-accent">
                      {item.year}
                    </span>

                    <h3 className="mt-5 font-heading text-xl font-extrabold text-brand sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-500">
                      {item.description}
                    </p>
                  </div>

                  {/* Empty Side */}
                  <div className="hidden w-[calc(50%-45px)] sm:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Ending */}
        <div className="mt-16 flex flex-col items-center text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-lg text-accent">
            <FaArrowDown />
          </div>

          <p className="mt-5 font-heading text-lg font-bold text-brand">
            Our Journey Continues...
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;
