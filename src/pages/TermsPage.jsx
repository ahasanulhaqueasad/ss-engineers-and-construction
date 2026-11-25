import { Link } from "react-router-dom";
import {
  FaFileContract,
  FaUserCheck,
  FaTools,
  FaMoneyBillWave,
  FaHardHat,
  FaCopyright,
  FaExclamationTriangle,
  FaShieldAlt,
  FaEnvelope,
  FaArrowLeft,
} from "react-icons/fa";

const sections = [
  {
    icon: FaUserCheck,
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using this website, you agree to follow these terms and conditions. If you do not agree with any part of these terms, please discontinue using the website.",
  },
  {
    icon: FaTools,
    title: "2. Services and Website Information",
    content:
      "Information about architectural design, structural design, construction, interior design, surveying and other services is provided for general informational purposes. Actual service availability, scope and specifications will be confirmed through direct communication and a formal agreement.",
  },
  {
    icon: FaFileContract,
    title: "3. Inquiries and Quotations",
    content:
      "Submitting an inquiry or quotation request does not create a binding contract. Any quotation, estimated cost, project timeline or proposed scope is subject to review and written confirmation by the company.",
  },
  {
    icon: FaMoneyBillWave,
    title: "4. Pricing and Payments",
    content:
      "Project costs, payment schedules, taxes, additional charges and payment methods will be communicated separately. The applicable payment terms will be those agreed upon in the final written contract or project agreement.",
  },
  {
    icon: FaHardHat,
    title: "5. Project Execution",
    content:
      "Construction and engineering projects may depend on site conditions, approvals, material availability, weather and other external factors. Project responsibilities, timelines, specifications and changes must be documented in the relevant agreement.",
  },
  {
    icon: FaCopyright,
    title: "6. Intellectual Property",
    content:
      "Website text, branding, graphics, design elements and other original content may be protected by applicable intellectual property laws. You may not reproduce, distribute or commercially use protected materials without appropriate permission.",
  },
  {
    icon: FaUserCheck,
    title: "7. User Responsibilities",
    content:
      "You agree to provide accurate information when submitting inquiries and to avoid uploading unlawful, harmful or unauthorized materials. You must not attempt to disrupt, misuse or gain unauthorized access to the website or its systems.",
  },
  {
    icon: FaExclamationTriangle,
    title: "8. Limitation of Liability",
    content:
      "Website information is provided for general guidance and may change. It should not be treated as a substitute for a project-specific engineering assessment, professional advice or a signed agreement. Any applicable limitation of liability must be reviewed under relevant law.",
  },
  {
    icon: FaShieldAlt,
    title: "9. Privacy",
    content:
      "Information submitted through this website may be handled according to the company's Privacy Policy. Please review that policy before sharing personal or project-related information.",
  },
  {
    icon: FaFileContract,
    title: "10. Changes to These Terms",
    content:
      "The company may update these terms when website features or business practices change. Updated terms should be published on this page with the appropriate effective date.",
  },
];

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-surface">
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand px-5 py-20 text-white lg:px-8">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[45px] border-white/5" />
        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white"
          >
            <FaArrowLeft />
            Back to Home
          </Link>

          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-2xl">
            <FaFileContract />
          </div>

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-accent">
            Legal Information
          </p>

          <h1 className="mb-5 text-4xl font-extrabold md:text-5xl">
            Terms & Conditions
          </h1>

          <p className="max-w-2xl text-sm leading-7 text-white/70 md:text-base">
            Please read these terms carefully before using our website or
            submitting a project inquiry.
          </p>

          <p className="mt-6 text-xs text-white/50">
            Draft terms · Effective date to be confirmed
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[260px_1fr]">
          {/* Sidebar */}
          <aside className="h-fit rounded-2xl border border-border bg-white p-6 lg:sticky lg:top-28">
            <h2 className="mb-4 text-sm font-extrabold text-brand">
              On This Page
            </h2>

            <nav className="space-y-3">
              {sections.map((section, index) => (
                <a
                  key={section.title}
                  href={`#terms-${index + 1}`}
                  className="block text-sm text-muted transition hover:text-accent"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Articles */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-5">
              <p className="text-sm leading-7 text-brand">
                <strong>Important:</strong> This is a draft for the website
                frontend. The company should review these terms and obtain
                appropriate legal advice before publishing them as official
                contractual terms.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6 md:p-8">
              <p className="mb-8 text-sm leading-7 text-muted">
                Welcome to SS Engineers & Construction. These draft terms
                describe the general conditions for accessing and using our
                website and its inquiry facilities.
              </p>

              <div className="space-y-9">
                {sections.map((section, index) => {
                  const Icon = section.icon;

                  return (
                    <article
                      key={section.title}
                      id={`terms-${index + 1}`}
                      className="scroll-mt-28"
                    >
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                          <Icon />
                        </div>

                        <h2 className="text-lg font-bold text-brand">
                          {section.title}
                        </h2>
                      </div>

                      <p className="text-sm leading-8 text-muted sm:pl-[52px]">
                        {section.content}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* Privacy Link */}
            <div className="flex flex-col gap-4 rounded-2xl border border-border bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-bold text-brand">
                  Read Our Privacy Policy
                </h2>
                <p className="mt-1 text-sm text-muted">
                  Learn how information submitted through our website may be
                  handled.
                </p>
              </div>

              <Link
                to="/privacy-policy"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-brand px-5 py-3 text-sm font-bold text-brand transition hover:bg-brand hover:text-white"
              >
                Privacy Policy
              </Link>
            </div>

            {/* Contact */}
            <div className="rounded-2xl bg-brand p-6 text-white md:p-8">
              <div className="mb-3 flex items-center gap-3">
                <FaEnvelope className="text-xl text-accent" />
                <h2 className="text-xl font-bold">Have Questions?</h2>
              </div>

              <p className="mb-5 text-sm leading-7 text-white/70">
                If you have questions about these terms, please contact the
                company through its verified contact details.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-brand"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
