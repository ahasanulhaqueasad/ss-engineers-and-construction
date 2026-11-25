import { motion } from "motion/react";
import {
  FaFileAlt,
  FaCertificate,
  FaIdCard,
  FaAward,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

const credentials = [
  {
    id: 1,
    title: "Business Registration",
    description:
      "Official company registration and business identification documents.",
    icon: FaFileAlt,
  },
  {
    id: 2,
    title: "Trade License",
    description:
      "Valid trade license and relevant business operating permissions.",
    icon: FaIdCard,
  },
  {
    id: 3,
    title: "Professional Memberships",
    description:
      "Relevant engineering and professional organization memberships.",
    icon: FaAward,
  },
  {
    id: 4,
    title: "Engineering Certifications",
    description:
      "Verified technical certifications and professional qualifications.",
    icon: FaCertificate,
  },
];

const CredentialsSection = () => {
  return (
    <section className="bg-white px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="font-bold uppercase tracking-[3px] text-accent">
            Credentials & Compliance
          </span>

          <h2 className="mt-4 font-heading text-3xl font-extrabold text-brand sm:text-4xl lg:text-5xl">
            Our Licenses &<span className="text-accent"> Certifications</span>
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            We believe in professional standards, regulatory compliance and
            transparent business practices.
          </p>
        </motion.div>

        {/* Credentials Grid */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-xl"
              >
                <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-3xl text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                  <Icon />
                </div>

                <h3 className="font-heading text-lg font-extrabold text-brand">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {item.description}
                </p>

                <div className="mt-7 flex items-center gap-2 border-t border-slate-100 pt-5 text-xs font-semibold text-slate-400">
                  <FaShieldAlt className="text-accent" />
                  <span>Verification Details</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Message */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col items-center gap-5 rounded-2xl bg-brand p-8 text-center sm:flex-row sm:text-left"
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 text-2xl text-accent">
            <FaCheckCircle />
          </div>

          <div>
            <h3 className="font-heading text-xl font-extrabold text-white">
              Professional Standards Matter
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-300">
              Verified company documents and credentials help demonstrate our
              commitment to professional engineering and construction practices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CredentialsSection;
