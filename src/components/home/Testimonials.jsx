import { Link } from "react-router-dom";
import { motion } from "motion/react";

import { FaStar, FaQuoteRight, FaArrowRight } from "react-icons/fa";

import testimonials from "../../data/testimonials.json";

const Testimonials = () => {
  const visibleTestimonials = testimonials.filter(
    (testimonial) => testimonial.showOnWebsite !== false,
  );

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-surface px-5 py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="font-bold uppercase tracking-[3px] text-accent">
            Client Feedback
          </span>

          <h2
            id="testimonials-heading"
            className="mt-4 font-heading text-3xl font-extrabold text-brand sm:text-4xl lg:text-5xl"
          >
            What Our Clients
            <span className="text-accent"> Say About Us</span>
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Client feedback helps us understand expectations and continually
            improve our engineering and construction services.
          </p>
        </div>

        {/* Testimonial Cards */}
        {visibleTestimonials.length > 0 ? (
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {visibleTestimonials.map((testimonial, index) => {
              const rating = Math.min(
                5,
                Math.max(0, Math.floor(Number(testimonial.rating) || 0)),
              );

              return (
                <motion.article
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: (index % 3) * 0.15,
                  }}
                  className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  {/* Rating and Quote Icon */}
                  <div className="mb-7 flex items-center justify-between">
                    <div
                      className="flex gap-1 text-sm text-accent"
                      role="img"
                      aria-label={`${rating} out of 5 stars`}
                    >
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <FaStar
                          key={starIndex}
                          aria-hidden="true"
                          className={
                            starIndex < rating
                              ? "text-accent"
                              : "text-slate-200"
                          }
                        />
                      ))}
                    </div>

                    <FaQuoteRight
                      aria-hidden="true"
                      className="text-3xl text-orange-100 transition-colors group-hover:text-accent"
                    />
                  </div>

                  {/* Client Review */}
                  <blockquote className="min-h-32 leading-8 text-slate-600">
                    “{testimonial.review}”
                  </blockquote>

                  {/* Divider */}
                  <div aria-hidden="true" className="my-7 h-px bg-slate-100" />

                  {/* Client Information */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.name} - Client`}
                      width="56"
                      height="56"
                      loading="lazy"
                      decoding="async"
                      className="h-14 w-14 rounded-full border-2 border-orange-100 object-cover"
                    />

                    <div className="min-w-0">
                      <h3 className="font-heading font-bold text-brand">
                        {testimonial.name}
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        ) : (
          <p className="py-12 text-center text-slate-500">
            Client testimonials will be available soon.
          </p>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 font-bold text-brand transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Get in Touch
            <FaArrowRight
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
