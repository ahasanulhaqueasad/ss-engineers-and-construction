import { Link } from "react-router-dom";

import {
  FaSearch,
  FaFilter,
  FaDownload,
  FaEye,
  FaPhone,
  FaEnvelope,
  FaPlus,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import inquiries from "../../data/inquiries";

const statusStyles = {
  New: "bg-blue-50 text-blue-600",
  Contacted: "bg-orange-50 text-orange-600",
  Discussion: "bg-purple-50 text-purple-600",
  Approved: "bg-green-50 text-green-600",
  Rejected: "bg-red-50 text-red-600",
};

const inquiryStats = [
  {
    label: "Total Inquiries",
    value: inquiries.length,
    color: "text-brand",
  },
  {
    label: "New Inquiries",
    value: inquiries.filter((item) => item.status === "New").length,
    color: "text-blue-600",
  },
  {
    label: "In Progress",
    value: inquiries.filter((item) =>
      ["Contacted", "Discussion"].includes(item.status),
    ).length,
    color: "text-orange-500",
  },
  {
    label: "Approved",
    value: inquiries.filter((item) => item.status === "Approved").length,
    color: "text-green-600",
  },
];

const InquiriesPage = () => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="space-y-7">
      {/* Heading */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm text-slate-400">Management / Inquiries</p>

          <h1 className="mt-1 font-heading text-2xl font-extrabold text-brand sm:text-3xl">
            Inquiries Management
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage and track all customer inquiries.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-brand transition hover:bg-slate-50"
          >
            <FaDownload /> Export
          </button>

          <button
            type="button"
            className="flex items-center gap-2 rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-white transition hover:bg-accent"
          >
            <FaPlus /> Add Inquiry
          </button>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {inquiryStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
          >
            <p className="text-sm text-slate-500">{stat.label}</p>

            <h2
              className={`mt-3 font-heading text-3xl font-extrabold ${stat.color}`}
            >
              {stat.value}
            </h2>
          </div>
        ))}
      </div>

      {/* Main Table */}
      <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
        {/* Filters */}
        <div className="flex flex-col justify-between gap-4 border-b border-slate-100 p-5 xl:flex-row xl:items-center">
          <div>
            <h2 className="font-heading text-lg font-extrabold text-brand">
              All Inquiries
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              Review and manage customer requests
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-slate-400" />

              <input
                type="text"
                placeholder="Search inquiries..."
                className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-accent sm:w-60"
              />
            </div>

            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              <FaFilter /> Filters
            </button>

            <select className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-600 outline-none focus:border-accent">
              <option>All Status</option>
              <option>New</option>
              <option>Contacted</option>
              <option>Discussion</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1050px] text-left">
            <thead className="bg-slate-50">
              <tr className="text-xs uppercase tracking-wider text-slate-400">
                <th className="px-5 py-4">Inquiry ID</th>
                <th className="px-5 py-4">Customer</th>
                <th className="px-5 py-4">Service</th>
                <th className="px-5 py-4">Location</th>
                <th className="px-5 py-4">Budget</th>
                <th className="px-5 py-4">Date</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {inquiries.map((inquiry) => (
                <tr
                  key={inquiry.id}
                  className="border-t border-slate-100 transition hover:bg-slate-50/70"
                >
                  <td className="whitespace-nowrap px-5 py-4 text-xs font-bold text-accent">
                    {inquiry.id}
                  </td>

                  <td className="whitespace-nowrap px-5 py-4">
                    <p className="text-sm font-bold text-brand">
                      {inquiry.name}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      {inquiry.email}
                    </p>
                  </td>

                  <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">
                    {inquiry.service}
                  </td>

                  <td className="whitespace-nowrap px-5 py-4 text-xs text-slate-500">
                    {inquiry.location}
                  </td>

                  <td className="whitespace-nowrap px-5 py-4 text-sm font-semibold text-brand">
                    {inquiry.budget}
                  </td>

                  <td className="whitespace-nowrap px-5 py-4 text-xs text-slate-500">
                    {formatDate(inquiry.date)}
                  </td>

                  <td className="whitespace-nowrap px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                        statusStyles[inquiry.status] ||
                        "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {inquiry.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <Link
                        to={`/admin/inquiries/${inquiry.id}`}
                        title="View Details"
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition hover:bg-blue-100"
                      >
                        <FaEye />
                      </Link>

                      <a
                        href={`tel:${inquiry.phone}`}
                        title="Call Customer"
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-50 text-green-600 transition hover:bg-green-100"
                      >
                        <FaPhone />
                      </a>

                      <a
                        href={`mailto:${inquiry.email}`}
                        title="Email Customer"
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-orange-600 transition hover:bg-orange-100"
                      >
                        <FaEnvelope />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination UI */}
        <div className="flex flex-col justify-between gap-4 border-t border-slate-100 p-5 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-500">
            Showing{" "}
            <span className="font-bold text-brand">1–{inquiries.length}</span>{" "}
            of <span className="font-bold text-brand">{inquiries.length}</span>{" "}
            inquiries
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:bg-slate-50"
            >
              <FaChevronLeft />
            </button>

            <button
              type="button"
              className="h-9 w-9 rounded-lg bg-brand text-sm font-bold text-white"
            >
              1
            </button>

            <button
              type="button"
              className="h-9 w-9 rounded-lg border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50"
            >
              2
            </button>

            <button
              type="button"
              className="h-9 w-9 rounded-lg border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50"
            >
              3
            </button>

            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:bg-slate-50"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiriesPage;
