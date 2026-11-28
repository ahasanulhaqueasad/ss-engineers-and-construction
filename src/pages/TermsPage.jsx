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
  FaGlobe,
} from "react-icons/fa";

const COMPANY_EMAIL = "ahasanulhaque204@gmail.com";

const sections = [
  {
    icon: FaUserCheck,
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using the SS Engineers & Construction website, you agree to these Terms & Conditions. If you do not agree with these terms, please discontinue using the website.",
  },
  {
    icon: FaGlobe,
    title: "2. Website Information",
    content:
      "The information provided on this website is intended for general informational purposes. Service descriptions, images, project details and other content may be updated or changed without prior notice. Please contact us to confirm current service availability and specific requirements.",
  },
  {
    icon: FaTools,
    title: "3. Services",
    content:
      "Our website may provide information about architectural design, structural design, land surveying, soil testing, construction and related engineering services. The actual scope, specifications and availability of any service will be determined through direct communication and a separate project agreement where applicable.",
  },
  {
    icon: FaFileContract,
    title: "4. Inquiries and Quotations",
    content:
      "Submitting an inquiry or quote request does not create a binding contract or guarantee that a project will be accepted. Any quotation, estimated cost, project timeline or proposed scope is subject to review and written confirmation by the company.",
  },
  {
    icon: FaMoneyBillWave,
    title: "5. Pricing and Payments",
    content:
      "Project prices, payment schedules, taxes, additional charges and accepted payment methods will be discussed separately. The payment terms agreed upon in the relevant written project agreement will apply.",
  },
  {
    icon: FaHardHat,
    title: "6. Project Execution",
    content:
      "Engineering and construction projects may be affected by site conditions, regulatory approvals, material availability, weather and other circumstances. Project responsibilities, specifications, timelines and any changes should be agreed upon and documented separately.",
  },
  {
    icon: FaUserCheck,
    title: "7. User Responsibilities",
    content:
      "You agree to provide accurate information when contacting us or submitting project inquiries. You must not use the website to submit unlawful, harmful or unauthorized content, interfere with its operation, or attempt to gain unauthorized access to its systems.",
  },
  {
    icon: FaCopyright,
    title: "8. Intellectual Property",
    content:
      "Unless otherwise stated, the website's original text, branding, graphics, layout and other content are owned by or used with permission by the relevant rights holders. You may not reproduce, distribute or commercially use protected content without appropriate authorization.",
  },
  {
    icon: FaExclamationTriangle,
    title: "9. Disclaimer and Limitation of Liability",
    content:
      "Website content is provided for general information and should not be treated as a substitute for a site-specific engineering assessment, professional advice or a signed project agreement. We aim to keep information accurate but do not guarantee that all website content will always be complete, current or error-free. Nothing in these terms excludes liability where such exclusion is prohibited by applicable law.",
  },
  {
    icon: FaShieldAlt,
    title: "10. Privacy",
    content:
      "Information you choose to share with us may be handled as described in our Privacy Policy. Please review that policy before submitting personal or project-related information through our website.",
  },
  {
    icon: FaTools,
    title: "11. External Links and Services",
    content:
      "Our website may link to third-party websites or services, including WhatsApp and email applications. These services are operated independently and are subject to their own terms and privacy policies. We are not responsible for the content or practices of third-party websites and services.",
  },
  {
    icon: FaFileContract,
    title: "12. Changes to These Terms",
    content:
      "We may revise these Terms & Conditions when our website, services or business practices change. Updated terms will be published on this page. Continued use of the website after changes are published constitutes acceptance of the revised terms, to the extent permitted by applicable law.",
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
            Please review these terms before accessing our website or submitting
            a project inquiry.
          </p>

          <p className="mt-6 text-xs text-white/50">
            Last updated: November 28, 2026
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
                <strong>Important:</strong> A quote request is an inquiry only.
                Project scope, pricing, timelines and responsibilities become
                binding only when agreed upon through the appropriate project
                agreement.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6 md:p-8">
              <p className="mb-8 text-sm leading-7 text-muted">
                Welcome to SS Engineers & Construction. These Terms & Conditions
                describe the general rules for accessing and using our website,
                its information and its inquiry facilities.
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
                  Learn how information shared with us may be handled.
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
                If you have questions about these terms, contact our team
                directly.
              </p>

              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-brand"
              >
                <FaEnvelope />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
