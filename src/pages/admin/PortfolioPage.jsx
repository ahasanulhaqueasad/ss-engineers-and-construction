import {
  FaPlus,
  FaSearch,
  FaFilter,
  FaEye,
  FaEdit,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaLayerGroup,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import projects from "../../data/projects.json";

const PortfolioPage = () => {
  const publishedProjects = projects.filter(
    (project) => project.published !== false && project.showOnWebsite !== false,
  );

  const draftProjects = projects.filter(
    (project) => project.published === false || project.showOnWebsite === false,
  );

  const stats = [
    {
      title: "Total Projects",
      value: projects.length,
      icon: <FaLayerGroup />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Published Projects",
      value: publishedProjects.length,
      icon: <FaCheckCircle />,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Draft Projects",
      value: draftProjects.length,
      icon: <FaClock />,
      color: "bg-orange-50 text-orange-600",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-extrabold text-brand md:text-3xl">
            Portfolio Management
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Manage your company portfolio and showcase completed projects.
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-100 transition hover:bg-orange-600">
          <FaPlus />
          Add New Project
        </button>
      </div>

      {/* Statistics */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {stat.title}
                </p>

                <h2 className="mt-3 text-3xl font-extrabold text-brand">
                  {stat.value}
                </h2>
              </div>

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl ${stat.color}`}
              >
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Portfolio Content */}
      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        {/* Toolbar */}
        <div className="flex flex-col gap-4 border-b border-gray-100 p-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-lg font-bold text-brand">
              All Portfolio Projects
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              View and manage all company projects.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder="Search projects..."
                className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-accent sm:w-64"
              />
            </div>

            <button className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-50">
              <FaFilter />
              Filters
            </button>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid gap-6 p-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => {
            const isPublished =
              project.published !== false && project.showOnWebsite !== false;

            return (
              <div
                key={project.id}
                className="group overflow-hidden rounded-2xl border border-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Project Image */}
                <div className="relative h-52 overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <span
                    className={`absolute right-3 top-3 rounded-full px-3 py-1.5 text-xs font-bold ${
                      isPublished
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {isPublished ? "Published" : "Draft"}
                  </span>
                </div>

                {/* Project Information */}
                <div className="space-y-4 p-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-accent">
                      {project.category || "General"}
                    </p>

                    <h3 className="mt-2 line-clamp-1 text-lg font-bold text-brand">
                      {project.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 border-t border-gray-100 pt-4 text-xs text-gray-500">
                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-accent" />
                      {project.location || "Location not specified"}
                    </span>

                    <span className="flex items-center gap-2">
                      <FaCalendarAlt className="text-accent" />
                      {project.startDate || "Date not specified"}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                    <Link
                      to={`/admin/projects/${project.id}`}
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
                    >
                      <FaEye />
                      View
                    </Link>

                    <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 px-3 py-2.5 text-sm font-semibold text-gray-600 transition hover:border-accent hover:text-accent">
                      <FaEdit />
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {projects.length === 0 && (
          <div className="p-12 text-center">
            <FaLayerGroup className="mx-auto text-4xl text-gray-300" />
            <h3 className="mt-4 font-bold text-brand">
              No Portfolio Projects Found
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Add your first project to showcase your work.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioPage;
