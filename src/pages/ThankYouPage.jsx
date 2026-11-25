import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  FaCheck,
  FaClipboardCheck,
  FaHome,
  FaTools,
  FaClock,
  FaEnvelope,
} from "react-icons/fa";

const ThankYouPage = () => {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-surface px-5 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl rounded-3xl border border-border bg-white p-7 text-center shadow-sm sm:p-12"
      >
        <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-green-600">
          <FaCheck className="text-4xl" />
        </div>

        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-accent">
          Thank You!
        </p>

        <h1 className="mb-4 text-3xl font-extrabold text-brand sm:text-4xl">
          Your Inquiry Has Been Received
        </h1>

        <p className="mx-auto mb-8 max-w-lg text-sm leading-7 text-muted">
          Thank you for considering SS Engineers & Construction. We appreciate
          your interest and look forward to learning more about your project.
        </p>

        {/* Inquiry Reference */}
        <div className="mb-8 rounded-2xl border border-border bg-surface p-6">
          <div className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold text-muted">
            <FaClipboardCheck className="text-accent" />
            Your Inquiry Reference
          </div>

          <p className="text-2xl font-extrabold tracking-wider text-brand">
            INQ-XXXXXXXX
          </p>

          <p className="mt-3 text-xs leading-6 text-muted">
            Your actual Inquiry ID will be generated after the inquiry
            submission system is connected to the backend.
          </p>
        </div>

        {/* Next Steps */}
        <div className="mb-9 text-left">
          <h2 className="mb-5 text-lg font-bold text-brand">
            What Happens Next?
          </h2>

          <div className="space-y-5">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-sm font-bold text-brand">Inquiry Review</h3>
                <p className="mt-1 text-sm leading-6 text-muted">
                  Our team will review your project requirements and submitted
                  information.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <FaClock />
              </div>
              <div>
                <h3 className="text-sm font-bold text-brand">
                  Contact and Discussion
                </h3>
                <p className="mt-1 text-sm leading-6 text-muted">
                  Our team will contact you to discuss your project requirements
                  and possible next steps.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <FaTools />
              </div>
              <div>
                <h3 className="text-sm font-bold text-brand">
                  Project Consultation
                </h3>
                <p className="mt-1 text-sm leading-6 text-muted">
                  We will discuss the project scope, estimated cost and
                  potential timeline with you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand"
          >
            <FaHome />
            Back to Home
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3.5 text-sm font-bold text-brand transition hover:border-accent hover:text-accent"
          >
            Explore Services
          </Link>
        </div>

        <p className="mt-8 text-xs text-muted">SS Engineers & Construction</p>
      </motion.div>
    </section>
  );
};

export default ThankYouPage;
