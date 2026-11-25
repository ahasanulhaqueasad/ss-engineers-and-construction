import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaArrowRight,
  FaBars,
  FaChevronDown,
  FaGlobe,
  FaPhoneAlt,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isBangla = i18n.language.startsWith("bn");

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  const navLinks = [
    { name: t("nav.home"), path: "/", end: true },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.services"), path: "/services" },
    { name: t("nav.projects"), path: "/projects" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  const linkClass = ({ isActive }) =>
    `relative text-sm font-semibold transition-colors duration-300 hover:text-accent ${
      isActive ? "text-accent" : "text-brand"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top Information Bar */}
      <div className="hidden bg-brand text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2">
          <p className="text-xs tracking-wide text-white/80">
            {t("nav.topMessage")}
          </p>

          <div className="flex items-center gap-2 text-xs">
            <FaPhoneAlt className="text-accent" />
            <span>{t("nav.contactUs")}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Brand Logo */}
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand text-2xl font-extrabold text-white">
            SS
          </div>

          <div>
            <h1 className="font-heading text-lg font-extrabold leading-tight tracking-tight text-brand sm:text-xl">
              SS ENGINEERS
            </h1>

            <p className="text-[10px] font-bold tracking-[3px] text-accent sm:text-xs">
              & CONSTRUCTION
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.end}
              className={linkClass}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="dropdown dropdown-end">
            <button
              tabIndex={0}
              className="btn btn-ghost btn-sm gap-2 rounded-lg text-brand hover:bg-slate-100"
              aria-label="Select language"
            >
              <FaGlobe />
              <span>{isBangla ? "বাংলা" : "English"}</span>
              <FaChevronDown size={10} />
            </button>

            <ul
              tabIndex={0}
              className="menu dropdown-content z-50 mt-3 w-36 rounded-xl border border-slate-100 bg-white p-2 shadow-xl"
            >
              <li>
                <button
                  onClick={() => changeLanguage("en")}
                  className={!isBangla ? "active" : ""}
                >
                  English
                </button>
              </li>

              <li>
                <button
                  onClick={() => changeLanguage("bn")}
                  className={isBangla ? "active" : ""}
                >
                  বাংলা
                </button>
              </li>
            </ul>
          </div>

          {/* Quote Button */}
          <Link
            to="/request-quote"
            className="hidden items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand hover:shadow-lg sm:flex"
          >
            {t("nav.quote")}
            <FaArrowRight size={13} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn btn-ghost btn-square text-brand lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FaTimes size={21} /> : <FaBars size={21} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${
          mobileMenuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl space-y-2 px-4 py-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.end}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-orange-50 text-accent"
                    : "text-brand hover:bg-slate-50"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="flex gap-2 border-t border-slate-100 pt-3">
            <button
              onClick={() => changeLanguage("en")}
              className={`btn btn-sm flex-1 ${
                !isBangla ? "btn-primary" : "btn-ghost"
              }`}
            >
              English
            </button>

            <button
              onClick={() => changeLanguage("bn")}
              className={`btn btn-sm flex-1 ${
                isBangla ? "btn-primary" : "btn-ghost"
              }`}
            >
              বাংলা
            </button>
          </div>

          <Link
            to="/request-quote"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 font-bold text-white"
          >
            {t("nav.quote")}
            <FaArrowRight size={13} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
