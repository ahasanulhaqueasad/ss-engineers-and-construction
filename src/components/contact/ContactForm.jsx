import { useState } from "react";
import { motion } from "motion/react";
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaBuilding,
  FaCommentDots,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

import services from "../../data/services.json";

const initialFormData = {
  fullName: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = (name, value) => {
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setIsSubmitted(false);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (
      !/^(?:\+?8801|01)[3-9]\d{8}$/.test(formData.phone.replace(/[\s-]/g, ""))
    ) {
      newErrors.phone = "Please enter a valid Bangladeshi phone number.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    // Frontend demo confirmation only.
    // Database and email notification will be connected later.
    setIsSubmitted(true);
    setFormData(initialFormData);
    setErrors({});
  };

  const inputClass =
    "w-full rounded-lg border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 outline-none transition focus:border-accent focus:bg-white";

  const renderError = (field) =>
    errors[field] ? (
      <p className="mt-1.5 text-xs font-medium text-red-500">{errors[field]}</p>
    ) : null;

  return (
    <section className="bg-surface px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-bold uppercase tracking-[3px] text-accent">
            Send Us a Message
          </span>

          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-brand sm:text-4xl">
            Let's Build Something
            <span className="block text-accent">Great Together</span>
          </h2>

          <p className="mt-6 max-w-lg leading-8 text-slate-600">
            Tell us about your construction or engineering needs. Share a few
            details and our team can discuss the next steps with you.
          </p>

          <div className="mt-9 space-y-5">
            {[
              "Professional engineering consultation",
              "Clear communication throughout the process",
              "Solutions tailored to your project",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-accent">
                  ✓
                </span>

                <span className="font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-9"
        >
          <div className="mb-8">
            <h3 className="font-heading text-2xl font-bold text-brand">
              Send Your Inquiry
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Fill out the form below to get in touch with us.
            </p>
          </div>

          {isSubmitted && (
            <div
              role="status"
              className="mb-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4"
            >
              <FaCheckCircle className="mt-0.5 shrink-0 text-green-600" />

              <div>
                <p className="text-sm font-bold text-green-800">
                  Message form completed!
                </p>

                <p className="mt-1 text-xs leading-5 text-green-700">
                  This is a frontend demo confirmation. Your message has not
                  been sent or saved yet.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="contact-fullName"
                className="mb-2 block text-sm font-semibold text-brand"
              >
                Full Name <span className="text-accent">*</span>
              </label>

              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  id="contact-fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(event) =>
                    updateField("fullName", event.target.value)
                  }
                  placeholder="Enter your full name"
                  className={inputClass}
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={
                    errors.fullName ? "contact-fullName-error" : undefined
                  }
                />
              </div>

              {renderError("fullName")}
            </div>

            {/* Phone and Email */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-2 block text-sm font-semibold text-brand"
                >
                  Phone Number <span className="text-accent">*</span>
                </label>

                <div className="relative">
                  <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                  <input
                    id="contact-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(event) =>
                      updateField("phone", event.target.value)
                    }
                    placeholder="+880 1XXX-XXXXXX"
                    className={inputClass}
                    aria-invalid={Boolean(errors.phone)}
                  />
                </div>

                {renderError("phone")}
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-semibold text-brand"
                >
                  Email Address <span className="text-accent">*</span>
                </label>

                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(event) =>
                      updateField("email", event.target.value)
                    }
                    placeholder="you@example.com"
                    className={inputClass}
                    aria-invalid={Boolean(errors.email)}
                  />
                </div>

                {renderError("email")}
              </div>
            </div>

            {/* Service */}
            <div>
              <label
                htmlFor="contact-service"
                className="mb-2 block text-sm font-semibold text-brand"
              >
                Interested Service <span className="text-accent">*</span>
              </label>

              <div className="relative">
                <FaBuilding className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <select
                  id="contact-service"
                  value={formData.service}
                  onChange={(event) =>
                    updateField("service", event.target.value)
                  }
                  className={`${inputClass} appearance-none text-slate-600`}
                  aria-invalid={Boolean(errors.service)}
                >
                  <option value="">Select a service</option>

                  {services.map((service) => (
                    <option key={service.id} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>

              {renderError("service")}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-semibold text-brand"
              >
                Your Message <span className="text-accent">*</span>
              </label>

              <div className="relative">
                <FaCommentDots className="absolute left-4 top-4 text-slate-400" />

                <textarea
                  id="contact-message"
                  rows={5}
                  value={formData.message}
                  onChange={(event) =>
                    updateField("message", event.target.value)
                  }
                  placeholder="Tell us about your project..."
                  className={`${inputClass} resize-none`}
                  aria-invalid={Boolean(errors.message)}
                />
              </div>

              {renderError("message")}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-lg bg-accent px-6 py-4 font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-orange-600"
            >
              Send Message
              <FaPaperPlane />
            </button>

            <p className="text-center text-xs leading-5 text-slate-400">
              This is currently a frontend demo. Database storage and email
              notifications will be connected during backend integration.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
