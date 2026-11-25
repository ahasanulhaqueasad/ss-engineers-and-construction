import {
  FaTools,
  FaCheckCircle,
  FaFileAlt,
  FaPlus,
  FaSearch,
  FaEdit,
  FaEye,
  FaDraftingCompass,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import services from "../../data/services.json";

const statusStyles = {
  Published: "bg-green-50 text-green-600",
  Draft: "bg-orange-50 text-orange-600",
};

const AdminServicesPage = () => {
  const totalServices = services.length;

  const publishedServices = services.filter(
    (service) => service.published !== false,
  ).length;

  const draftServices = totalServices - publishedServices;

  const stats = [
    {
      title: "Total Services",
      value: totalServices,
      icon: FaTools,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Published Services",
      value: publishedServices,
      icon: FaCheckCircle,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Draft Services",
      value: draftServices,
      icon: FaFileAlt,
      color: "bg-orange-50 text-orange-600",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Page Heading */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-medium text-slate-500">
            Website Content / Services
          </p>

          <h1 className="mt-1 font-heading text-2xl font-extrabold text-brand sm:text-3xl">
            Services Management
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage your company services and website content.
          </p>
        </div>

        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/10 transition hover:bg-accent"
        >
          <FaPlus />
          Add New Service
        </button>
      </div>

      {/* Statistics */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {stat.title}
                  </p>

                  <h3 className="mt-3 font-heading text-3xl font-extrabold text-brand">
                    {stat.value}
                  </h3>
                </div>

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl ${stat.color}`}
                >
                  <Icon />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Services List */}
      <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
        {/* Toolbar */}
        <div className="flex flex-col justify-between gap-4 border-b border-slate-100 p-5 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-heading text-lg font-extrabold text-brand">
              All Services
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              Manage and organize your company services
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                placeholder="Search services..."
                className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-accent sm:w-64"
              />
            </div>

            <select className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-600 outline-none focus:border-accent">
              <option>All Categories</option>
              <option>Architecture</option>
              <option>Construction</option>
              <option>Interior Design</option>
              <option>Engineering</option>
            </select>

            <select className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-600 outline-none focus:border-accent">
              <option>All Status</option>
              <option>Published</option>
              <option>Draft</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-xs uppercase text-slate-400">
              <tr>
                <th className="px-5 py-4">Service</th>
                <th className="px-5 py-4">Category</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Website URL</th>
                <th className="px-5 py-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {services.map((service) => {
                const isPublished = service.published !== false;

                return (
                  <tr
                    key={service.id}
                    className="border-t border-slate-100 transition hover:bg-slate-50/70"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-lg text-accent">
                          <FaDraftingCompass />
                        </div>

                        <div className="min-w-48">
                          <p className="text-sm font-bold text-brand">
                            {service.title}
                          </p>

                          <p className="mt-1 max-w-xs truncate text-xs text-slate-400">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-500">
                      {service.category || "General"}
                    </td>

                    <td className="whitespace-nowrap px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                          isPublished
                            ? statusStyles.Published
                            : statusStyles.Draft
                        }`}
                      >
                        {isPublished ? "Published" : "Draft"}
                      </span>
                    </td>

                    <td className="whitespace-nowrap px-5 py-4">
                      <Link
                        to={`/services/${service.id}`}
                        className="text-xs font-semibold text-accent transition hover:text-brand"
                      >
                        View Service
                      </Link>
                    </td>

                    <td className="whitespace-nowrap px-5 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          to={`/services/${service.id}`}
                          title="View Service"
                          className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition hover:bg-blue-100"
                        >
                          <FaEye />
                        </Link>

                        <button
                          type="button"
                          title="Edit Service"
                          className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-600 transition hover:bg-orange-100"
                        >
                          <FaEdit />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}

              {services.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
                    className="px-5 py-12 text-center text-sm text-slate-400"
                  >
                    No services available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex flex-col justify-between gap-2 border-t border-slate-100 px-5 py-4 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-400">
            Showing {totalServices} services
          </p>

          <p className="text-xs font-medium text-slate-500">
            Service content is connected to shared website data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminServicesPage;
