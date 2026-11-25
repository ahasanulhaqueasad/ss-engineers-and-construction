import { motion } from "motion/react";
import { FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";

const ContactMap = () => {
  return (
    <section className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-sm font-bold uppercase tracking-[3px] text-accent">
            Find Our Office
          </span>

          <h2 className="mt-4 font-heading text-3xl font-extrabold text-brand sm:text-4xl">
            Visit Us at Our Office
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            We welcome you to visit our office and discuss your next engineering
            or construction project.
          </p>
        </motion.div>

        {/* Map Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-surface shadow-lg"
        >
          <div className="grid lg:grid-cols-3">
            {/* Map */}
            <div className="relative min-h-[350px] lg:col-span-2 lg:min-h-[450px]">
              <iframe
                title="Office Location Map"
                src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  position: "absolute",
                  inset: 0,
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            {/* Office Information */}
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-2xl text-accent">
                <FaMapMarkerAlt />
              </div>

              <h3 className="font-heading text-2xl font-bold text-brand">
                SS Engineers & Construction
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Your Company Office Address, Dhaka, Bangladesh.
              </p>

              <div className="my-7 h-px bg-slate-200" />

              <p className="text-sm font-semibold text-slate-500">
                Office Location
              </p>

              <p className="mt-2 font-bold text-brand">Dhaka, Bangladesh</p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Dhaka%2CBangladesh"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-3 rounded-lg bg-brand px-6 py-4 font-bold text-white transition-all hover:bg-accent"
              >
                Get Directions
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMap;
