import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaUser,
  FaFileAlt,
  FaLock,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowLeft,
  FaCookieBite,
  FaShareAlt,
} from "react-icons/fa";

const COMPANY_PHONE = "01838041204";
const COMPANY_EMAIL = "ahasanulhaque204@gmail.com";

const sections = [
  {
    icon: FaUser,
    title: "1. Information We May Collect",
    content:
      "When you contact us or prepare a project inquiry, you may provide personal and project-related information such as your name, phone number, email address, company name, address, project location, service requirements and estimated budget. Please provide only information relevant to your inquiry.",
  },
  {
    icon: FaFileAlt,
    title: "2. Project Documents and Attachments",
    content:
      "You may select architectural drawings, structural drawings, site photographs and other project-related documents when completing our quote form. In the current website version, selected files are not automatically uploaded or attached to WhatsApp or email messages. The inquiry message may include their file names, so you should attach the documents yourself when sending your message if required.",
  },
  {
    icon: FaEnvelope,
    title: "3. How We Use Your Information",
    content:
      "Information you choose to share may be used to respond to your inquiry, understand your project requirements, discuss our services, prepare quotations and communicate with you about potential or ongoing projects.",
  },
  {
    icon: FaShareAlt,
    title: "4. How Inquiry Information Is Sent",
    content:
      "Our current quote form allows you to open WhatsApp or your email application with a prepared inquiry message. Your information is sent only when you complete and send that message through the selected service. The website does not currently submit quote inquiries to its own backend database. WhatsApp and email services process information according to their respective privacy policies and terms.",
  },
  {
    icon: FaLock,
    title: "5. Data Protection",
    content:
      "We take privacy seriously and aim to handle information shared with us responsibly. Once information reaches us through WhatsApp or email, its storage, access and protection depend on the systems and practices used to manage those communications. Please avoid sending passwords, financial account credentials or other highly sensitive information through the inquiry form.",
  },
  {
    icon: FaUser,
    title: "6. Sharing and Disclosure",
    content:
      "We do not intend to sell your personal information. Information may be shared with relevant personnel or service providers when reasonably necessary to respond to your inquiry or provide requested services. Information may also be disclosed where required by applicable law.",
  },
  {
    icon: FaFileAlt,
    title: "7. Data Retention",
    content:
      "Information received through WhatsApp or email may be retained for as long as necessary to respond to inquiries, manage business communications, handle projects or meet applicable legal obligations. You may contact us to request the deletion of information, subject to applicable legal and business recordkeeping requirements.",
  },
  {
    icon: FaCookieBite,
    title: "8. Cookies and Third-Party Services",
    content:
      "Your browser and website hosting provider may use technical processes necessary to operate and secure the website. If analytics, embedded content or other third-party services are introduced, their data practices should be reviewed and disclosed as applicable. Third-party services you choose to use, including WhatsApp and email providers, are governed by their own privacy policies.",
  },
  {
    icon: FaShieldAlt,
    title: "9. Your Privacy Requests",
    content:
      "You may contact us to ask about personal information you have shared with the company or to request correction or deletion where applicable. We may need to retain certain information to meet legal obligations or resolve business matters.",
  },
  {
    icon: FaFileAlt,
    title: "10. Changes to This Policy",
    content:
      "We may update this Privacy Policy when our website, services or information-handling practices change. Any revised version will be published on this page with an updated date.",
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
            We respect your privacy and are committed to handling the
            information you share with care and transparency.
          </p>

          <p className="mt-6 text-xs text-white/50">
            Last updated: November 28, 2026
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
                <strong>Important:</strong> When using our quote form, you
                choose whether to continue through WhatsApp or email. Review the
                prepared message before sending it. Please do not include
                information you do not want to share.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6 md:p-8">
              <p className="mb-8 text-sm leading-7 text-muted">
                SS Engineers & Construction values the privacy of website
                visitors, prospective clients and customers. This policy
                explains how information you choose to provide may be handled
                when you contact us or inquire about our services.
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

                      <p className="text-sm leading-8 text-muted sm:pl-[52px]">
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

              <p className="mb-6 text-sm leading-7 text-white/70">
                If you have questions about this Privacy Policy or information
                you have shared with us, contact our team directly.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-brand"
                >
                  <FaEnvelope />
                  Email Us
                </a>

                <a
                  href={`tel:${COMPANY_PHONE}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-brand"
                >
                  <FaPhoneAlt />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
