import { Link, useParams } from "react-router-dom";

import {
  FaArrowLeft,
  FaBuilding,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUser,
  FaDollarSign,
  FaClipboardList,
  FaClock,
  FaCheckCircle,
  FaImage,
} from "react-icons/fa";

import projects from "../../data/projects.json";
import clients from "../../data/clients";
import inquiries from "../../data/inquiries";

const statusStyles = {
  Ongoing: "bg-orange-50 text-orange-600",
  Completed: "bg-green-50 text-green-600",
  Pending: "bg-blue-50 text-blue-600",
  "On Hold": "bg-slate-100 text-slate-600",
};

const formatDate = (date) => {
  if (!date) return "Not specified";

  return new Date(`${date}T00:00:00`).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

const ProjectDetailsPage = () => {
  const { projectId } = useParams();

  const project = projects.find((item) => String(item.id) === projectId);

  if (!project) {
    return (
      <div className="rounded-2xl border border-slate-100 bg-white p-10 text-center shadow-sm">
        <FaBuilding className="mx-auto text-4xl text-slate-300" />

        <h2 className="mt-4 font-heading text-xl font-extrabold text-brand">
          Project Not Found
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          The project you are looking for does not exist.
        </p>

        <Link
          to="/admin/projects"
          className="mt-6 inline-flex rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  const client = clients.find((item) => item.id === project.clientId);

  const inquiry = inquiries.find((item) => item.id === project.inquiryId);

  const information = [
    {
      label: "Project Category",
      value: project.category,
      icon: FaBuilding,
    },
    {
      label: "Location",
      value: project.location,
      icon: FaMapMarkerAlt,
    },
    {
      label: "Project Budget",
      value: project.budget || "Not specified",
      icon: FaDollarSign,
    },
    {
      label: "Project Manager",
      value: project.manager || "Unassigned",
      icon: FaUser,
    },
    {
      label: "Start Date",
      value: formatDate(project.startDate),
      icon: FaCalendarAlt,
    },
    {
      label: "Deadline",
      value: formatDate(project.deadline),
      icon: FaClock,
    },
  ];

  return (
    <div className="space-y-7">
      {/* Breadcrumb */}
      <div>
        <Link
          to="/admin/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-accent"
        >
          <FaArrowLeft />
          Back to Projects
        </Link>

        <div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm text-slate-500">
              Management / Projects / Project Details
            </p>

            <h1 className="mt-1 font-heading text-2xl font-extrabold text-brand sm:text-3xl">
              {project.title}
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Project ID: #{project.id}
            </p>
          </div>

          <span
            className={`w-fit rounded-full px-4 py-2 text-sm font-bold ${
              statusStyles[project.status] || "bg-slate-100 text-slate-600"
            }`}
          >
            {project.status}
          </span>
        </div>
      </div>

      {/* Project Image */}
      <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
        <img
          src={project.image}
          alt={project.title}
          className="h-64 w-full object-cover sm:h-80"
        />
      </div>

      {/* Progress */}
      <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="font-heading text-lg font-extrabold text-brand">
              Project Progress
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Current project completion status
            </p>
          </div>

          <span className="font-heading text-2xl font-extrabold text-accent">
            {project.progress}%
          </span>
        </div>

        <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-accent"
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>

      {/* Project Information */}
      <div className="grid gap-6 xl:grid-cols-3">
        <div className="space-y-6 xl:col-span-2">
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h2 className="font-heading text-lg font-extrabold text-brand">
              Project Overview
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              {project.description}
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {information.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-accent">
                      <Icon />
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">{item.label}</p>

                      <p className="mt-1 text-sm font-bold text-brand">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Client Information */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-lg font-extrabold text-brand">
                Client Information
              </h2>

              <FaUser className="text-accent" />
            </div>

            {client ? (
              <div className="mt-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h3 className="font-bold text-brand">{client.name}</h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {client.company}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">{client.email}</p>

                  <p className="mt-1 text-sm text-slate-500">{client.phone}</p>
                </div>

                <Link
                  to={`/admin/clients/${client.id}`}
                  className="rounded-xl bg-blue-50 px-4 py-3 text-center text-sm font-semibold text-blue-600 transition hover:bg-brand hover:text-white"
                >
                  View Client
                </Link>
              </div>
            ) : (
              <p className="mt-4 text-sm text-slate-500">
                No client has been assigned to this project.
              </p>
            )}
          </div>

          {/* Related Inquiry */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-lg font-extrabold text-brand">
                Related Inquiry
              </h2>

              <FaClipboardList className="text-accent" />
            </div>

            {inquiry ? (
              <div className="mt-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <p className="font-bold text-brand">{inquiry.id}</p>

                  <p className="mt-1 text-sm text-slate-500">
                    {inquiry.name} · {inquiry.service}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {inquiry.location}
                  </p>
                </div>

                <Link
                  to={`/admin/inquiries/${inquiry.id}`}
                  className="rounded-xl bg-orange-50 px-4 py-3 text-center text-sm font-semibold text-orange-600 transition hover:bg-accent hover:text-white"
                >
                  View Inquiry
                </Link>
              </div>
            ) : (
              <p className="mt-4 text-sm text-slate-500">
                No related inquiry is linked to this project.
              </p>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h2 className="font-heading text-lg font-extrabold text-brand">
              Project Summary
            </h2>

            <div className="mt-5 space-y-4">
              <div className="flex justify-between gap-3 text-sm">
                <span className="text-slate-500">Project ID</span>
                <span className="font-bold text-brand">#{project.id}</span>
              </div>

              <div className="flex justify-between gap-3 text-sm">
                <span className="text-slate-500">Client</span>
                <span className="font-bold text-brand">
                  {client ? client.name : "Unassigned"}
                </span>
              </div>

              <div className="flex justify-between gap-3 text-sm">
                <span className="text-slate-500">Website Visibility</span>
                <span className="font-bold text-brand">
                  {project.showOnWebsite ? "Visible" : "Hidden"}
                </span>
              </div>

              <div className="flex justify-between gap-3 text-sm">
                <span className="text-slate-500">Publication</span>
                <span className="font-bold text-brand">
                  {project.published ? "Published" : "Draft"}
                </span>
              </div>
            </div>
          </div>

          {/* Project Gallery */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <FaImage className="text-accent" />

              <h2 className="font-heading text-lg font-extrabold text-brand">
                Project Gallery
              </h2>
            </div>

            <img
              src={project.image}
              alt={project.title}
              className="mt-5 h-36 w-full rounded-xl object-cover"
            />

            <p className="mt-3 text-xs text-slate-400">
              Gallery management will be added later.
            </p>
          </div>

          {/* Status */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-accent" />

              <h2 className="font-heading text-lg font-extrabold text-brand">
                Project Status
              </h2>
            </div>

            <p className="mt-4 text-sm text-slate-500">Current status</p>

            <p className="mt-2 font-bold text-brand">{project.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
