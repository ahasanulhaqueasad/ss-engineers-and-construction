import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaUser,
  FaFileAlt,
  FaLock,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowLeft,
} from "react-icons/fa";

const sections = [
  {
    icon: FaUser,
    title: "1. Information We May Collect",
    content:
      "When you contact us or submit a project inquiry, we may collect your name, phone number, email address, company name, address, project location, service requirements, estimated budget and other information you choose to provide.",
  },
  {
    icon: FaFileAlt,
    title: "2. Project Documents and Attachments",
    content:
      "You may provide architectural drawings, structural drawings, site photographs and other project-related documents. These materials should only be used for reviewing your requirements, preparing estimates and communicating about your project.",
  },
  {
    icon: FaEnvelope,
    title: "3. How We May Use Your Information",
    content:
      "Information you provide may be used to respond to inquiries, discuss project requirements, prepare quotations, communicate about services and manage client relationships. We do not intend to use your information for unrelated purposes.",
  },
  {
    icon: FaLock,
    title: "4. Data Protection",
    content:
      "We intend to apply appropriate technical and organizational measures to protect personal information and project documents. The actual security measures, storage providers and access controls must be confirmed and implemented before this website is launched.",
  },
  {
    icon: FaShieldAlt,
    title: "5. Sharing of Information",
    content:
      "Personal information should only be shared with authorized personnel or service providers when necessary to operate the website or respond to your request. We do not intend to sell personal information to third parties.",
  },
  {
    icon: FaFileAlt,
    title: "6. Data Retention",
    content:
      "Information may be retained for as long as necessary to respond to inquiries, manage projects, maintain business records or meet applicable legal obligations. A final retention and deletion policy should be confirmed by the company.",
  },
  {
    icon: FaUser,
    title: "7. Your Choices and Requests",
    content:
      "You may contact the company to request access to, correction of or deletion of personal information you have provided, subject to applicable legal and business recordkeeping requirements.",
  },
  {
    icon: FaLock,
    title: "8. Cookies and Website Analytics",
    content:
      "The website may use cookies or analytics technologies to understand website usage and improve the visitor experience. Any analytics or tracking tools must be disclosed and configured according to applicable requirements before launch.",
  },
  {
    icon: FaEnvelope,
    title: "9. Changes to This Policy",
    content:
      "This policy may be updated when website features, company practices or applicable requirements change. The latest version should be published on this page with its updated effective date.",
  },
];

const PrivacyPolicyPage = () => {
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
            <FaShieldAlt />
          </div>

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-accent">
            Legal Information
          </p>

          <h1 className="mb-5 text-4xl font-extrabold md:text-5xl">
            Privacy Policy
          </h1>

          <p className="max-w-2xl text-sm leading-7 text-white/70 md:text-base">
            Your privacy matters to us. This page explains how information
            shared through our website may be collected, used and protected.
          </p>

          <p className="mt-6 text-xs text-white/50">
            Draft policy · Effective date to be confirmed
          </p>
        </div>
      </section>

      {/* Content */}
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
                  href={`#privacy-${index + 1}`}
                  className="block text-sm text-muted transition hover:text-accent"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Policy Articles */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-5">
              <p className="text-sm leading-7 text-brand">
                <strong>Important:</strong> This is a draft website policy
                prepared for the project frontend. The company must review and
                approve the final wording, contact details, data practices and
                applicable legal requirements before publishing it as an
                official policy.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6 md:p-8">
              <p className="mb-8 text-sm leading-7 text-muted">
                SS Engineers & Construction values the privacy of visitors,
                prospective clients and customers. This draft describes the
                intended approach to handling information submitted through the
                website.
              </p>

              <div className="space-y-9">
                {sections.map((section, index) => {
                  const Icon = section.icon;

                  return (
                    <article
                      key={section.title}
                      id={`privacy-${index + 1}`}
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

                      <p className="pl-0 text-sm leading-8 text-muted sm:pl-[52px]">
                        {section.content}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* Contact */}
            <div className="rounded-2xl bg-brand p-6 text-white md:p-8">
              <div className="mb-3 flex items-center gap-3">
                <FaEnvelope className="text-xl text-accent" />
                <h2 className="text-xl font-bold">Privacy Questions?</h2>
              </div>

              <p className="mb-5 text-sm leading-7 text-white/70">
                If you have a question about this policy or the information you
                have shared, please contact the company using its verified
                contact details.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-brand"
              >
                <FaPhoneAlt />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
