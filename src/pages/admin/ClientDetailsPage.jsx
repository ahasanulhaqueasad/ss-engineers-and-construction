import {
  FaArrowLeft,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBuilding,
  FaCalendarAlt,
  FaInbox,
  FaFolderOpen,
  FaEye,
} from "react-icons/fa";

import { Link, useParams } from "react-router-dom";

import clients from "../../data/clients";
import inquiries from "../../data/inquiries";
import projects from "../../data/projects.json";

const ClientDetailsPage = () => {
  const { clientId } = useParams();

  const client = clients.find((item) => item.id === clientId);

  if (!client) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-2xl bg-white p-8 text-center shadow-sm">
        <FaUser className="text-5xl text-slate-300" />

        <h2 className="mt-5 font-heading text-2xl font-extrabold text-brand">
          Client Not Found
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          The client you are looking for does not exist.
        </p>

        <Link
          to="/admin/clients"
          className="mt-6 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent"
        >
          Back to Clients
        </Link>
      </div>
    );
  }

  const clientInquiries = inquiries.filter((inquiry) =>
    client.inquiryIds.includes(inquiry.id),
  );

  const clientProjects = projects.filter(
    (project) => project.clientId === client.id,
  );

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";

    const [year, month, day] = dateString.split("-").map(Number);

    return new Date(year, month - 1, day).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const statusStyles = {
    New: "bg-blue-50 text-blue-600",
    Contacted: "bg-orange-50 text-orange-600",
    Discussion: "bg-purple-50 text-purple-600",
    Approved: "bg-green-50 text-green-600",
    Rejected: "bg-red-50 text-red-600",
  };

  const projectStatusStyles = {
    Ongoing: "bg-orange-50 text-orange-600",
    Completed: "bg-green-50 text-green-600",
    Pending: "bg-blue-50 text-blue-600",
    "On Hold": "bg-slate-100 text-slate-600",
  };

  return (
    <div className="space-y-7">
      {/* Back Button */}
      <Link
        to="/admin/clients"
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-accent"
      >
        <FaArrowLeft />
        Back to Clients
      </Link>

      {/* Client Header */}
      <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
        <div className="h-32 bg-gradient-to-r from-brand via-[#1B4965] to-accent" />

        <div className="px-5 pb-6 sm:px-7">
          <div className="-mt-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-white bg-brand font-heading text-3xl font-extrabold text-white shadow-md">
                {client.name.charAt(0)}
              </div>

              <div className="pb-1">
                <h1 className="font-heading text-2xl font-extrabold text-brand">
                  {client.name}
                </h1>

                <p className="mt-1 text-sm text-slate-500">{client.company}</p>
              </div>
            </div>

            <span
              className={`w-fit rounded-full px-4 py-2 text-xs font-bold ${
                client.status === "Active"
                  ? "bg-green-50 text-green-600"
                  : "bg-slate-100 text-slate-500"
              }`}
            >
              {client.status} Client
            </span>
          </div>
        </div>
      </div>

      {/* Client Statistics */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Total Inquiries
              </p>

              <h3 className="mt-3 font-heading text-3xl font-extrabold text-brand">
                {clientInquiries.length}
              </h3>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
              <FaInbox />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Total Projects
              </p>

              <h3 className="mt-3 font-heading text-3xl font-extrabold text-brand">
                {clientProjects.length}
              </h3>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-xl text-orange-500">
              <FaFolderOpen />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Client Since</p>

              <h3 className="mt-3 font-heading text-lg font-extrabold text-brand">
                {formatDate(client.joinedDate)}
              </h3>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-xl text-purple-600">
              <FaCalendarAlt />
            </div>
          </div>
        </div>
      </div>

      {/* Client Information */}
      <div className="grid gap-6 xl:grid-cols-3">
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6 xl:col-span-1">
          <h2 className="font-heading text-lg font-extrabold text-brand">
            Client Information
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Personal and contact details
          </p>

          <div className="mt-6 space-y-5">
            <div className="flex gap-3">
              <FaUser className="mt-1 text-slate-400" />

              <div>
                <p className="text-xs text-slate-400">Client ID</p>
                <p className="mt-1 text-sm font-semibold text-brand">
                  {client.id}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <FaEnvelope className="mt-1 text-slate-400" />

              <div className="min-w-0">
                <p className="text-xs text-slate-400">Email Address</p>

                <a
                  href={`mailto:${client.email}`}
                  className="mt-1 block break-all text-sm font-semibold text-brand transition hover:text-accent"
                >
                  {client.email}
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <FaPhone className="mt-1 text-slate-400" />

              <div>
                <p className="text-xs text-slate-400">Phone Number</p>

                <a
                  href={`tel:${client.phone}`}
                  className="mt-1 block text-sm font-semibold text-brand transition hover:text-accent"
                >
                  {client.phone}
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <FaBuilding className="mt-1 text-slate-400" />

              <div>
                <p className="text-xs text-slate-400">Company</p>
                <p className="mt-1 text-sm font-semibold text-brand">
                  {client.company}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <FaMapMarkerAlt className="mt-1 text-slate-400" />

              <div>
                <p className="text-xs text-slate-400">Location</p>
                <p className="mt-1 text-sm font-semibold text-brand">
                  {client.location}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`tel:${client.phone}`}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-white transition hover:bg-accent"
            >
              <FaPhone />
              Call
            </a>

            <a
              href={`mailto:${client.email}`}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-brand transition hover:border-accent hover:text-accent"
            >
              <FaEnvelope />
              Email
            </a>
          </div>
        </div>

        {/* Related Inquiries */}
        <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm xl:col-span-2">
          <div className="border-b border-slate-100 p-5 sm:p-6">
            <h2 className="font-heading text-lg font-extrabold text-brand">
              Related Inquiries
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              All inquiries submitted by this client
            </p>
          </div>

          {clientInquiries.length > 0 ? (
            <div className="divide-y divide-slate-100">
              {clientInquiries.map((inquiry) => (
                <div
                  key={inquiry.id}
                  className="flex flex-col justify-between gap-4 p-5 transition hover:bg-slate-50 sm:flex-row sm:items-center sm:px-6"
                >
                  <div>
                    <p className="text-sm font-bold text-brand">
                      {inquiry.service}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">{inquiry.id}</p>

                    <p className="mt-2 text-xs text-slate-500">
                      {inquiry.location}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      {formatDate(inquiry.date)}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-3 sm:justify-end">
                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                        statusStyles[inquiry.status] ||
                        "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {inquiry.status}
                    </span>

                    <Link
                      to={`/admin/inquiries/${inquiry.id}`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition hover:bg-brand hover:text-white"
                      title="View Inquiry"
                    >
                      <FaEye />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="px-5 py-12 text-center">
              <FaInbox className="mx-auto text-3xl text-slate-300" />

              <p className="mt-3 text-sm font-semibold text-brand">
                No Related Inquiries
              </p>

              <p className="mt-1 text-xs text-slate-400">
                No inquiries have been linked to this client yet.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Related Projects */}
      <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
        <div className="border-b border-slate-100 p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-lg text-orange-500">
              <FaFolderOpen />
            </div>

            <div>
              <h2 className="font-heading text-lg font-extrabold text-brand">
                Related Projects
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                {clientProjects.length} project(s) associated with this client
              </p>
            </div>
          </div>
        </div>

        {clientProjects.length > 0 ? (
          <div className="grid gap-5 p-5 md:grid-cols-2">
            {clientProjects.map((project) => (
              <div
                key={project.id}
                className="overflow-hidden rounded-xl border border-slate-100 transition hover:shadow-md"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-40 w-full object-cover"
                />

                <div className="p-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-lg bg-orange-50 px-3 py-1 text-xs font-semibold text-accent">
                      {project.category}
                    </span>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        projectStatusStyles[project.status] ||
                        "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <h3 className="mt-3 font-heading font-extrabold text-brand">
                    {project.title}
                  </h3>

                  <p className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                    <FaMapMarkerAlt className="text-accent" />
                    {project.location}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-slate-500">
                      Progress: {project.progress}%
                    </span>

                    <Link
                      to={`/admin/projects/${project.id}`}
                      className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-xs font-bold text-blue-600 transition hover:bg-brand hover:text-white"
                    >
                      <FaEye />
                      View Project
                    </Link>
                  </div>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="px-5 py-12 text-center">
            <FaFolderOpen className="mx-auto text-3xl text-slate-300" />

            <p className="mt-3 text-sm font-semibold text-brand">
              No Projects Linked
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Projects linked to this client will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientDetailsPage;
