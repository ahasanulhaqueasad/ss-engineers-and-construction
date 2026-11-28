import { useEffect, useRef, useState } from "react";

import { motion, useMotionValue, animate, useInView } from "motion/react";

import { FaCalendarAlt, FaBuilding, FaUsers, FaUserTie } from "react-icons/fa";

const Counter = ({ value, suffix = "+" }) => {
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const unsubscribe = count.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });

    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    });

    return () => {
      unsubscribe();
      controls.stop();
    };
  }, [count, value, isInView]);

  return (
    <span ref={counterRef} aria-label={`${value}${suffix}`}>
      {displayValue}
      {suffix}
    </span>
  );
};

const stats = [
  {
    id: 1,
    value: 8,
    label: "Years of Experience",
    icon: FaCalendarAlt,
  },
  {
    id: 2,
    value: 120,
    label: "Projects Completed",
    icon: FaBuilding,
  },
  {
    id: 3,
    value: 95,
    label: "Happy Clients",
    icon: FaUsers,
  },
  {
    id: 4,
    value: 15,
    label: "Team Members",
    icon: FaUserTie,
  },
];

const TrustStrip = () => {
  return (
    <section
      aria-label="Company statistics"
      className="relative z-20 bg-white px-5 py-12 shadow-lg lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className="group flex flex-col items-center text-center"
            >
              {/* Statistic Icon */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-2xl text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                <Icon aria-hidden="true" />
              </div>

              {/* Animated Number */}
              <h3 className="font-heading text-3xl font-extrabold text-brand sm:text-4xl">
                <Counter value={stat.value} />
              </h3>

              {/* Statistic Label */}
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-slate-500 sm:text-sm">
                {stat.label}
              </p>

              {/* Decorative Accent */}
              <div
                aria-hidden="true"
                className="mt-4 h-1 w-10 rounded-full bg-accent transition-all duration-300 group-hover:w-20"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TrustStrip;
