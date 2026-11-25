import { motion } from "motion/react";
import { FaQuestionCircle, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const faqs = [
  {
    id: 1,
    question: "How can I request this service?",
    answer:
      "You can submit your project requirements through our Request a Quote form or contact our team directly.",
  },
  {
    id: 2,
    question: "Do you provide an initial consultation?",
    answer:
      "The consultation process can help us understand your project scope, requirements and expectations.",
  },
  {
    id: 3,
    question: "How is the project cost determined?",
    answer:
      "Project costs depend on factors such as scope, design requirements, materials, location and technical considerations.",
  },
  {
    id: 4,
    question: "How long does a project usually take?",
    answer:
      "The timeline varies depending on project size, complexity, approvals and execution requirements.",
  },
  {
    id: 5,
    question: "Can I customize the service according to my needs?",
    answer:
      "Project requirements can be discussed with our team to explore a suitable service scope and approach.",
  },
  {
    id: 6,
    question: "How can I track my project progress?",
    answer:
      "Project communication and progress updates can be discussed and agreed upon during the project planning stage.",
  },
];

const ServiceFAQ = () => {
  return (
    <section className="bg-surface px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-3xl text-accent">
            <FaQuestionCircle />
          </div>

          <span className="mt-6 block font-bold uppercase tracking-[3px] text-accent">
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 font-heading text-3xl font-extrabold text-brand sm:text-4xl">
            Got Questions?
            <span className="text-accent"> We Have Answers</span>
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Find answers to common questions about our engineering and
            construction services.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-md sm:p-7"
            >
              <h3 className="font-heading text-base font-extrabold text-brand sm:text-lg">
                <span className="mr-3 text-accent">Q{faq.id}.</span>
                {faq.question}
              </h3>

              <p className="mt-4 pl-10 text-sm leading-7 text-slate-600">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-2xl bg-brand p-8 text-center sm:p-10">
          <h3 className="font-heading text-2xl font-extrabold text-white">
            Still Have Questions?
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-300">
            Our team is ready to discuss your project requirements.
          </p>

          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-3 rounded-lg bg-accent px-7 py-4 font-bold text-white transition-all hover:bg-orange-600"
          >
            Contact Our Team
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;
