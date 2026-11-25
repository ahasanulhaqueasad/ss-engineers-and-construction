import { motion } from "motion/react";
import { FaStar, FaQuoteRight, FaArrowRight } from "react-icons/fa";
import testimonials from "../../data/testimonials.json";

const Testimonials = () => {
  return (
    <section className="bg-surface px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="font-bold uppercase tracking-[3px] text-accent">
            Client Testimonials
          </span>

          <h2 className="mt-4 font-heading text-3xl font-extrabold text-brand sm:text-4xl lg:text-5xl">
            What Our Clients
            <span className="text-accent"> Say About Us</span>
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Our clients' satisfaction reflects our commitment to quality, trust
            and excellence.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Quote Icon */}
              <div className="mb-7 flex items-center justify-between">
                <div className="flex gap-1 text-sm text-accent">
                  {Array.from({ length: testimonial.rating }).map(
                    (_, index) => (
                      <FaStar key={index} />
                    ),
                  )}
                </div>

                <FaQuoteRight className="text-3xl text-orange-100 transition-colors group-hover:text-accent" />
              </div>

              {/* Review */}
              <p className="min-h-32 leading-8 text-slate-600">
                "{testimonial.review}"
              </p>

              {/* Divider */}
              <div className="my-7 h-px bg-slate-100" />

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-14 w-14 rounded-full border-2 border-orange-100 object-cover"
                />

                <div>
                  <h3 className="font-heading font-bold text-brand">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-3 font-bold text-brand transition-colors hover:text-accent"
          >
            Discuss Your Project
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
