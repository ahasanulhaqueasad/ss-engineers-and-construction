import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  FaBuilding,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
  FaShieldAlt,
  FaHardHat,
} from "react-icons/fa";

const AdminLoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Left Branding Section */}
      <div className="relative hidden overflow-hidden bg-brand lg:flex lg:w-1/2">
        <div className="absolute inset-0 bg-gradient-to-br from-brand via-[#163B5C] to-[#081B2D]" />

        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute -bottom-40 -right-20 h-[500px] w-[500px] rounded-full border border-white/10" />

        <div className="relative z-10 flex w-full flex-col justify-between p-12 xl:p-16">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-2xl text-white shadow-xl">
              <FaBuilding />
            </div>

            <div>
              <h1 className="font-heading text-xl font-extrabold text-white">
                SS Engineers
              </h1>

              <p className="text-sm font-medium tracking-widest text-orange-300">
                & CONSTRUCTION
              </p>
            </div>
          </Link>

          {/* Main Content */}
          <div className="max-w-lg">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-orange-200">
              <FaShieldAlt />
              Secure Administration Portal
            </div>

            <h2 className="font-heading text-4xl font-extrabold leading-tight text-white xl:text-5xl">
              Manage Your
              <span className="block text-accent">
                Business With Confidence.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-slate-300">
              Access your business dashboard to manage inquiries, clients,
              projects and website content from one central platform.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <FaBuilding className="text-2xl text-orange-300" />
                <h3 className="mt-4 font-bold text-white">
                  Project Management
                </h3>
                <p className="mt-2 text-xs leading-6 text-slate-400">
                  Monitor projects and business activities.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <FaHardHat className="text-2xl text-orange-300" />
                <h3 className="mt-4 font-bold text-white">Construction CRM</h3>
                <p className="mt-2 text-xs leading-6 text-slate-400">
                  Organize clients and customer inquiries.
                </p>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} SS Engineers & Construction. All rights
            reserved.
          </p>
        </div>
      </div>

      {/* Right Login Section */}
      <div className="flex w-full items-center justify-center px-5 py-12 sm:px-8 lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          {/* Mobile Brand */}
          <div className="mb-10 flex items-center gap-3 lg:hidden">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-xl text-white">
              <FaBuilding />
            </div>

            <div>
              <h1 className="font-heading text-lg font-extrabold text-brand">
                SS Engineers
              </h1>

              <p className="text-xs font-bold tracking-widest text-accent">
                & CONSTRUCTION
              </p>
            </div>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1.5 text-xs font-bold text-accent">
              <FaShieldAlt />
              ADMIN PORTAL
            </span>

            <h2 className="mt-5 font-heading text-3xl font-extrabold text-brand sm:text-4xl">
              Welcome Back!
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Sign in to access your administration dashboard.
            </p>
          </div>

          {/* Login Form UI */}
          <div className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="admin-email"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Email Address
              </label>

              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  id="admin-email"
                  type="email"
                  placeholder="admin@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-brand outline-none transition placeholder:text-slate-400 focus:border-accent focus:ring-4 focus:ring-orange-100"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <label
                  htmlFor="admin-password"
                  className="block text-sm font-semibold text-slate-700"
                >
                  Password
                </label>

                <button
                  type="button"
                  className="text-xs font-bold text-accent transition hover:text-brand"
                >
                  Forgot Password?
                </button>
              </div>

              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  id="admin-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-12 text-sm text-brand outline-none transition placeholder:text-slate-400 focus:border-accent focus:ring-4 focus:ring-orange-100"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-accent"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm rounded border-slate-300 [--chkbg:#F28C28] [--chkfg:white]"
                />
                Remember me
              </label>

              <span className="text-xs text-slate-400">
                Authorized users only
              </span>
            </div>

            {/* Login Button */}
            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-brand px-5 py-4 text-sm font-bold text-white shadow-lg shadow-brand/15 transition duration-300 hover:-translate-y-0.5 hover:bg-accent hover:shadow-orange-500/20"
            >
              Sign In to Dashboard
              <FaArrowRight />
            </button>
          </div>

          {/* Footer */}
          <div className="mt-8 border-t border-slate-200 pt-6 text-center">
            <p className="text-sm text-slate-500">
              Want to visit the website?{" "}
              <Link
                to="/"
                className="font-bold text-accent transition hover:text-brand"
              >
                Back to Home
              </Link>
            </p>

            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-400">
              <FaShieldAlt className="text-green-500" />
              Secure Admin Access
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
