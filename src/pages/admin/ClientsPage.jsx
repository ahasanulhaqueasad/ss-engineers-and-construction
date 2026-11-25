import {
  FaUsers,
  FaUserPlus,
  FaSearch,
  FaPhone,
  FaEnvelope,
  FaBuilding,
  FaEye,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import clients from "../../data/clients";

const ClientsPage = () => {
  return (
    <div className="space-y-7">
      {/* Page Heading */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-medium text-slate-500">
            Management / Clients
          </p>

          <h1 className="mt-1 font-heading text-2xl font-extrabold text-brand sm:text-3xl">
            Client Management
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage your clients and their business relationships.
          </p>
        </div>

        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/10 transition hover:bg-accent"
        >
          <FaUserPlus />
          Add New Client
        </button>
      </div>

      {/* Statistics */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Total Clients
              </p>
              <h3 className="mt-3 font-heading text-3xl font-extrabold text-brand">
                {clients.length}
              </h3>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
              <FaUsers />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Active Clients
              </p>
              <h3 className="mt-3 font-heading text-3xl font-extrabold text-brand">
                {clients.filter((client) => client.status === "Active").length}
              </h3>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-xl text-green-600">
              <FaBuilding />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Total Inquiries
              </p>
              <h3 className="mt-3 font-heading text-3xl font-extrabold text-brand">
                {clients.reduce(
                  (total, client) => total + client.totalInquiries,
                  0,
                )}
              </h3>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-xl text-orange-500">
              <FaEnvelope />
            </div>
          </div>
        </div>
      </div>

      {/* Client Directory */}
      <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
        <div className="flex flex-col justify-between gap-4 border-b border-slate-100 p-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-heading text-lg font-extrabold text-brand">
              All Clients
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              Your registered client directory
            </p>
          </div>

          <div className="relative w-full sm:max-w-xs">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400" />

            <input
              type="text"
              placeholder="Search clients..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-accent"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left">
            <thead className="bg-slate-50 text-xs uppercase text-slate-400">
              <tr>
                <th className="px-5 py-4">Client</th>
                <th className="px-5 py-4">Contact</th>
                <th className="px-5 py-4">Location</th>
                <th className="px-5 py-4">Inquiries</th>
                <th className="px-5 py-4">Projects</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {clients.map((client) => (
                <tr
                  key={client.id}
                  className="border-t border-slate-100 transition hover:bg-slate-50/70"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                        {client.name.charAt(0)}
                      </div>

                      <div>
                        <p className="text-sm font-bold text-brand">
                          {client.name}
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          {client.company}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <a
                      href={`mailto:${client.email}`}
                      className="flex items-center gap-2 text-xs text-slate-500 hover:text-accent"
                    >
                      <FaEnvelope />
                      {client.email}
                    </a>

                    <a
                      href={`tel:${client.phone}`}
                      className="mt-2 flex items-center gap-2 text-xs text-slate-500 hover:text-accent"
                    >
                      <FaPhone />
                      {client.phone}
                    </a>
                  </td>

                  <td className="px-5 py-4 text-xs text-slate-500">
                    {client.location}
                  </td>

                  <td className="px-5 py-4">
                    <span className="font-bold text-brand">
                      {client.totalInquiries}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <span className="font-bold text-brand">
                      {client.totalProjects}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                        client.status === "Active"
                          ? "bg-green-50 text-green-600"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {client.status}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <Link
                      to={`/admin/clients/${client.id}`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition hover:bg-brand hover:text-white"
                      title="View Client"
                    >
                      <FaEye />
                    </Link>
                  </td>
                </tr>
              ))}

              {clients.length === 0 && (
                <tr>
                  <td
                    colSpan="7"
                    className="px-5 py-12 text-center text-sm text-slate-400"
                  >
                    No clients found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-100 px-5 py-4">
          <p className="text-xs text-slate-400">
            Showing {clients.length} clients
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;
