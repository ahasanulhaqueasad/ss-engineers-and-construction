import { FaSearch, FaBell, FaChevronDown, FaBars } from "react-icons/fa";

import { Link } from "react-router-dom";

const AdminHeader = ({ onMenuClick }) => {
  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-5 sm:px-8">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open sidebar"
          className="rounded-lg p-2 text-xl text-slate-600 transition hover:bg-slate-100 lg:hidden"
        >
          <FaBars />
        </button>

        <div>
          <h2 className="font-heading text-lg font-extrabold text-brand sm:text-xl">
            Welcome Back, Admin!
          </h2>

          <p className="hidden text-xs text-slate-500 sm:block">
            Here's what's happening with your business today.
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3 sm:gap-5">
        {/* Search */}
        <div className="relative hidden md:block">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400" />

          <input
            type="text"
            placeholder="Search anything..."
            className="w-56 rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-11 pr-4 text-sm outline-none transition focus:border-accent focus:bg-white lg:w-72"
          />
        </div>

        {/* Notification */}
        <Link
          to="/admin/notifications"
          aria-label="View notifications"
          title="Notifications"
          className="relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-lg text-slate-600 transition hover:border-accent hover:bg-orange-50 hover:text-accent"
        >
          <FaBell />

          <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full border-2 border-white bg-accent" />
        </Link>

        {/* Divider */}
        <div className="hidden h-9 w-px bg-slate-200 sm:block" />

        {/* Admin Profile */}
        <button type="button" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-heading font-bold text-white">
            A
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-sm font-bold text-brand">Administrator</p>

            <p className="text-xs text-slate-400">Super Admin</p>
          </div>

          <FaChevronDown className="hidden text-xs text-slate-400 sm:block" />
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
