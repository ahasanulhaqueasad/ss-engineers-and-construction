import { motion } from "motion/react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

const contactItems = [
  {
    icon: FaMapMarkerAlt,
    title: "Our Office",
    details: "Office Address Coming Soon",
    description: "Our office location will be updated soon.",
    link: "View Location",
    href: null,
  },
  {
    icon: FaPhoneAlt,
    title: "Call Us",
    details: "Phone Number Coming Soon",
    description: "Our team is ready to assist with your inquiries.",
    link: "Contact Us",
    href: "/request-quote",
  },
  {
    icon: FaEnvelope,
    title: "Email Us",
    details: "Email Address Coming Soon",
    description: "Submit your project requirements through our inquiry form.",
    link: "Send Inquiry",
    href: "/request-quote",
  },
  {
    icon: FaClock,
    title: "Working Hours",
    details: "Saturday – Thursday",
    description: "9:00 AM – 6:00 PM",
    link: "Business Hours",
    href: null,
  },
];

const ContactInfo = () => {
  return (
    <section id="contact-information" className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="text-sm font-bold uppercase tracking-[3px] text-accent">
            Contact Information
          </span>

          <h2 className="mt-4 font-heading text-3xl font-extrabold text-brand sm:text-4xl">
            We'd Love to Hear From You
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Whether you have a question, need a consultation, or want to discuss
            a project, our team is here to help.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-2xl text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                  <Icon />
                </div>

                <h3 className="font-heading text-xl font-bold text-brand">
                  {item.title}
                </h3>

                <p className="mt-3 break-words font-semibold text-slate-800">
                  {item.details}
                </p>

                <p className="mt-3 min-h-12 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>

                {item.href && (
                  <a
                    href={item.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-accent"
                  >
                    {item.link}
                    <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                  </a>
                )}

                {!item.href && (
                  <div className="mt-5 flex items-center gap-2 text-sm font-bold text-slate-400">
                    {item.link}
                    <FaArrowRight />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
