import { Link } from "react-router-dom";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

// Add official social profile URLs when available.
const socialLinks = [
  // { name: "Facebook", icon: FaFacebookF, url: "https://facebook.com/your-page" },
  // { name: "LinkedIn", icon: FaLinkedinIn, url: "https://linkedin.com/company/your-company" },
  // { name: "Instagram", icon: FaInstagram, url: "https://instagram.com/your-page" },
].filter((social) => social.url);

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact Us", path: "/contact" },
];

const services = [
  "Architectural Design",
  "Structural Design",
  "Digital Land Survey",
  "Soil Testing",
  "3D Interior & Exterior Design",
  "Electrical & Plumbing Design",
  "Project Consultancy",
  "Building Construction",
];

const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-[#0B1F33] text-white">
      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Company Info */}
        <div>
          <Link
            to="/"
            aria-label="SS Engineers & Construction Home"
            className="inline-block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-[#0B1F33]"
          >
            <span className="font-heading text-2xl font-extrabold">
              SS <span className="text-accent">ENGINEERS</span>
            </span>

            <span className="mt-1 block text-xs font-semibold tracking-[3px] text-slate-400">
              & CONSTRUCTION
            </span>
          </Link>

          <p className="mt-6 max-w-xs text-sm leading-7 text-slate-400">
            Professional engineering and construction solutions for residential,
            commercial, and industrial projects.
          </p>

          {/* Social Links */}
          {socialLinks.length > 0 && (
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${social.name} profile`}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-accent hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1F33]"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          )}
        </div>

        {/* Quick Links */}
        <nav aria-label="Quick links">
          <h3 className="mb-6 font-heading text-lg font-bold">Quick Links</h3>

          <ul className="space-y-4 text-sm text-slate-400">
            {quickLinks.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none"
                >
                  <FaArrowRight
                    aria-hidden="true"
                    className="text-[10px] text-accent"
                  />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <div>
          <h3 className="mb-6 font-heading text-lg font-bold">Our Services</h3>

          <ul className="space-y-4 text-sm text-slate-400">
            {services.map((service) => (
              <li key={service}>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none"
                >
                  <FaArrowRight
                    aria-hidden="true"
                    className="text-[10px] text-accent"
                  />
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="mb-6 font-heading text-lg font-bold">Contact Us</h3>

          <p className="text-sm leading-7 text-slate-400">
            Get in touch with our team to discuss your engineering and
            construction requirements.
          </p>

          <ul className="mt-5 space-y-5 text-sm text-slate-400">
            <li className="flex items-start gap-4">
              <FaMapMarkerAlt
                aria-hidden="true"
                className="mt-1 shrink-0 text-lg text-accent"
              />

              <Link
                to="/contact"
                className="transition-colors hover:text-accent"
              >
                Our Location
              </Link>
            </li>

            <li className="flex items-center gap-4">
              <FaPhoneAlt aria-hidden="true" className="shrink-0 text-accent" />

              <Link
                to="/contact"
                className="transition-colors hover:text-accent"
              >
                Contact Information
              </Link>
            </li>

            <li className="flex items-center gap-4">
              <FaEnvelope aria-hidden="true" className="shrink-0 text-accent" />

              <Link
                to="/contact"
                className="transition-colors hover:text-accent"
              >
                Send Us a Message
              </Link>
            </li>
          </ul>

          <Link
            to="/request-quote"
            className="mt-7 inline-flex items-center gap-3 rounded-lg bg-accent px-5 py-3 text-sm font-bold text-white transition-all hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1F33]"
          >
            Request a Quote
            <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-center text-xs text-slate-500 sm:flex-row lg:px-8">
          <p>
            © {CURRENT_YEAR} SS Engineers & Construction. All rights reserved.
          </p>

          <nav
            aria-label="Legal navigation"
            className="flex flex-wrap justify-center gap-5"
          >
            <Link
              to="/privacy-policy"
              className="transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none"
            >
              Terms & Conditions
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
