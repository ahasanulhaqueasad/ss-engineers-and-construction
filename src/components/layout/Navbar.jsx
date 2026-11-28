import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import companyLogo from "../../assets/images/SS Engineers Logo.png";
import { FaArrowRight, FaBars, FaPhoneAlt, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((previous) => !previous);
  };

  const navLinks = [
    { name: "Home", path: "/", end: true },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const linkClass = ({ isActive }) =>
    `relative text-sm font-semibold transition-colors duration-300 hover:text-accent focus-visible:text-accent focus-visible:outline-none ${
      isActive ? "text-accent" : "text-brand"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top Information Bar */}
      <div className="hidden bg-brand text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2">
          <p className="text-xs tracking-wide text-white/80">
            Engineering Excellence, Building Trust.
          </p>

          <Link
            to="/contact"
            className="flex items-center gap-2 text-xs transition-colors hover:text-accent"
          >
            <FaPhoneAlt aria-hidden="true" className="text-accent" />
            <span>Contact Us</span>
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          aria-label="SS Engineers & Construction Home"
          className="flex shrink-0 items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
        >
          <img
            src={companyLogo}
            alt="SS Engineers & Construction"
            className="h-10 w-20 object-contain"
          />

          <span>
            <span className="block font-heading text-lg font-extrabold leading-tight tracking-tight text-brand sm:text-xl">
              SS ENGINEERS
            </span>

            <span className="block text-[10px] font-bold tracking-[3px] text-accent sm:text-xs">
              & CONSTRUCTION
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 lg:flex"
        >
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
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Desktop Quote Button */}
          <Link
            to="/request-quote"
            className="hidden items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand hover:shadow-lg sm:flex"
          >
            Request a Quote
            <FaArrowRight aria-hidden="true" size={13} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="btn btn-ghost btn-square text-brand lg:hidden"
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? (
              <FaTimes aria-hidden="true" size={21} />
            ) : (
              <FaBars aria-hidden="true" size={21} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen}
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${
          mobileMenuOpen
            ? "max-h-[500px] opacity-100"
            : "pointer-events-none max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl space-y-2 px-4 py-4">
          {/* Mobile Links */}
          <nav aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.end}
                onClick={closeMobileMenu}
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
          </nav>

          {/* Mobile Quote Button */}
          <Link
            to="/request-quote"
            onClick={closeMobileMenu}
            className="flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 font-bold text-white transition-colors hover:bg-brand"
          >
            Request a Quote
            <FaArrowRight aria-hidden="true" size={13} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
