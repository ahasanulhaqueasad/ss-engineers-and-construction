import {
  FaBuilding,
  FaPlus,
  FaSearch,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaEye,
  FaCheckCircle,
  FaClock,
  FaPauseCircle,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import projects from "../../data/projects.json";

const statusStyles = {
  Ongoing: "bg-orange-50 text-orange-600",
  Completed: "bg-green-50 text-green-600",
  Pending: "bg-blue-50 text-blue-600",
  "On Hold": "bg-slate-100 text-slate-600",
};

const AdminProjectsPage = () => {
  const totalProjects = projects.length;

  const ongoingProjects = projects.filter(
    (project) => project.status === "Ongoing",
  ).length;

  const completedProjects = projects.filter(
    (project) => project.status === "Completed",
  ).length;

  const pendingProjects = projects.filter(
    (project) => project.status === "Pending",
  ).length;

  const stats = [
    {
      title: "Total Projects",
      value: totalProjects,
      icon: FaBuilding,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Ongoing Projects",
      value: ongoingProjects,
      icon: FaClock,
      color: "bg-orange-50 text-orange-500",
    },
    {
      title: "Completed Projects",
      value: completedProjects,
      icon: FaCheckCircle,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Pending Projects",
      value: pendingProjects,
      icon: FaPauseCircle,
      color: "bg-purple-50 text-purple-600",
    },
  ];

  return (
    <div className="space-y-7">
      {/* Page Heading */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-medium text-slate-500">
            Management / Projects
          </p>

          <h1 className="mt-1 font-heading text-2xl font-extrabold text-brand sm:text-3xl">
            Project Management
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage projects, clients, deadlines and progress.
          </p>
        </div>

        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/10 transition hover:bg-accent"
        >
          <FaPlus />
          Add New Project
        </button>
      </div>

      {/* Statistics */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
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

      {/* Project Directory */}
      <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
        <div className="flex flex-col justify-between gap-4 border-b border-slate-100 p-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-heading text-lg font-extrabold text-brand">
              All Projects
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              Complete project directory
            </p>
          </div>

          <div className="relative w-full sm:max-w-xs">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400" />

            <input
              type="text"
              placeholder="Search projects..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-accent"
            />
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid gap-5 p-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <span
                  className={`absolute right-3 top-3 rounded-full px-3 py-1.5 text-xs font-bold ${
                    statusStyles[project.status] ||
                    "bg-slate-100 text-slate-600"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Project Information */}
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-lg bg-orange-50 px-3 py-1.5 text-xs font-semibold text-accent">
                    {project.category}
                  </span>

                  <span className="text-xs text-slate-400">#{project.id}</span>
                </div>

                <h3 className="mt-4 font-heading text-lg font-extrabold text-brand">
                  {project.title}
                </h3>

                <p className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                  <FaMapMarkerAlt className="text-accent" />
                  {project.location}
                </p>

                <div className="mt-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500">
                      Project Progress
                    </span>

                    <span className="text-xs font-bold text-brand">
                      {project.progress}%
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`h-full rounded-full ${
                        project.progress === 100 ? "bg-green-500" : "bg-accent"
                      }`}
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                  <div className="text-xs text-slate-500">
                    <FaCalendarAlt className="mr-1 inline text-slate-400" />
                    {project.deadline || "No deadline"}
                  </div>

                  <Link
                    to={`/admin/projects/${project.id}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-xs font-bold text-blue-600 transition hover:bg-brand hover:text-white"
                  >
                    <FaEye />
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-slate-100 px-5 py-4">
          <p className="text-xs text-slate-400">
            Showing {projects.length} projects
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminProjectsPage;
