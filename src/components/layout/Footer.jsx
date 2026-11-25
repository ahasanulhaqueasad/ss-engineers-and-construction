import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B1F33] text-white">
      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Company Info */}
        <div>
          <Link to="/" className="inline-block">
            <h2 className="font-heading text-2xl font-extrabold">
              SS <span className="text-accent">ENGINEERS</span>
            </h2>
            <p className="mt-1 text-xs font-semibold tracking-[3px] text-slate-400">
              & CONSTRUCTION
            </p>
          </Link>

          <p className="mt-6 max-w-xs text-sm leading-7 text-slate-400">
            Building reliable spaces through engineering excellence, quality
            construction and professional project management.
          </p>

          <div className="mt-6 flex gap-3">
            {[
              { icon: FaFacebookF, link: "#" },
              { icon: FaLinkedinIn, link: "#" },
              { icon: FaInstagram, link: "#" },
            ].map((social, index) => {
              const Icon = social.icon;

              return (
                <a
                  key={index}
                  href={social.link}
                  aria-label="Social media"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-accent hover:bg-accent hover:text-white"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-6 font-heading text-lg font-bold">Quick Links</h3>

          <ul className="space-y-4 text-sm text-slate-400">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Our Services", "/services"],
              ["Our Projects", "/projects"],
              ["Contact Us", "/contact"],
            ].map(([label, path]) => (
              <li key={path}>
                <Link
                  to={path}
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <FaArrowRight className="text-[10px] text-accent" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="mb-6 font-heading text-lg font-bold">Our Services</h3>

          <ul className="space-y-4 text-sm text-slate-400">
            {[
              "Architectural Design",
              "Structural Design",
              "Civil Construction",
              "Interior Design",
              "Land Survey",
              "Project Management",
            ].map((service) => (
              <li
                key={service}
                className="flex items-center gap-2 transition-colors hover:text-accent"
              >
                <FaArrowRight className="text-[10px] text-accent" />
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="mb-6 font-heading text-lg font-bold">Get In Touch</h3>

          <ul className="space-y-5 text-sm text-slate-400">
            <li className="flex items-start gap-4">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-lg text-accent" />
              <span>
                Company Address
                <br />
                Bangladesh
              </span>
            </li>

            <li className="flex items-center gap-4">
              <FaPhoneAlt className="shrink-0 text-accent" />
              <span>Company Phone Number</span>
            </li>

            <li className="flex items-center gap-4">
              <FaEnvelope className="shrink-0 text-accent" />
              <span>Company Email Address</span>
            </li>
          </ul>

          <Link
            to="/request-quote"
            className="mt-7 inline-flex items-center gap-3 rounded-lg bg-accent px-5 py-3 text-sm font-bold text-white transition-all hover:bg-orange-500"
          >
            Get a Free Quote
            <FaArrowRight />
          </Link>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-center text-xs text-slate-500 sm:flex-row lg:px-8">
          <p>
            © {new Date().getFullYear()} SS Engineers & Construction. All rights
            reserved.
          </p>

          <div className="flex gap-5">
            <Link
              to="/privacy-policy"
              className="transition-colors hover:text-accent"
            >
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-accent">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
