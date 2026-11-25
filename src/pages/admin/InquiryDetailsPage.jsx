import {
  FaArrowLeft,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaFilePdf,
  FaDownload,
  FaUser,
  FaBuilding,
  FaDollarSign,
  FaClock,
  FaCheckCircle,
  FaStickyNote,
  FaPaperPlane,
  FaArrowRight,
  FaFileAlt,
} from "react-icons/fa";

import { Link, useParams } from "react-router-dom";
import inquiries from "../../data/inquiries";

const statusStyles = {
  New: "bg-blue-50 text-blue-600",
  Contacted: "bg-orange-50 text-orange-600",
  Discussion: "bg-purple-50 text-purple-600",
  Approved: "bg-green-50 text-green-600",
  Rejected: "bg-red-50 text-red-600",
};

const InquiryDetailsPage = () => {
  const { inquiryId } = useParams();

  // Get selected inquiry from shared data
  const inquiry = inquiries.find((item) => item.id === inquiryId);

  // Format date without timezone shifting
  const formatDate = (date) => {
    if (!date) return "Not available";

    const [year, month, day] = date.split("-");

    return new Date(
      Number(year),
      Number(month) - 1,
      Number(day),
    ).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  if (!inquiry) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-2xl text-red-500">
          <FaFileAlt />
        </div>

        <h1 className="mt-5 font-heading text-2xl font-extrabold text-brand">
          Inquiry Not Found
        </h1>

        <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
          The inquiry you are looking for does not exist or the inquiry ID is
          invalid.
        </p>

        <Link
          to="/admin/inquiries"
          className="mt-6 flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white transition hover:bg-accent"
        >
          <FaArrowLeft /> Back to Inquiries
        </Link>
      </div>
    );
  }

  const phoneNumber = inquiry.phone.replace(/[^0-9+]/g, "");
  const whatsappNumber = inquiry.phone.replace(/\D/g, "");
  const submittedDate = formatDate(inquiry.date);

  return (
    <div className="space-y-7">
      {/* Header */}
      <div>
        <Link
          to="/admin/inquiries"
          className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-accent"
        >
          <FaArrowLeft /> Back to Inquiries
        </Link>

        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="font-heading text-2xl font-extrabold text-brand sm:text-3xl">
                Inquiry Details
              </h1>

              <span
                className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                  statusStyles[inquiry.status] || "bg-slate-100 text-slate-600"
                }`}
              >
                {inquiry.status}
              </span>
            </div>

            <p className="mt-2 text-sm text-slate-500">
              Inquiry ID:{" "}
              <span className="font-bold text-accent">{inquiry.id}</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-brand transition hover:bg-slate-50"
            >
              <FaPhone /> Call
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              <FaWhatsapp /> WhatsApp
            </a>

            <a
              href={`mailto:${inquiry.email}`}
              className="flex items-center gap-2 rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-white transition hover:bg-accent"
            >
              <FaEnvelope /> Email
            </a>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid gap-6 xl:grid-cols-3">
        {/* Left Column */}
        <div className="space-y-6 xl:col-span-2">
          {/* Customer Information */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-lg text-blue-600">
                <FaUser />
              </div>

              <div>
                <h2 className="font-heading text-lg font-extrabold text-brand">
                  Customer Information
                </h2>
                <p className="text-xs text-slate-400">
                  Personal and contact details
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-xs text-slate-400">Full Name</p>
                <p className="mt-2 text-sm font-bold text-brand">
                  {inquiry.name}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Company Name</p>
                <p className="mt-2 text-sm font-bold text-brand">
                  {inquiry.company || "Not provided"}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Email Address</p>
                <p className="mt-2 break-all text-sm font-semibold text-brand">
                  {inquiry.email}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Phone Number</p>
                <p className="mt-2 text-sm font-semibold text-brand">
                  {inquiry.phone}
                </p>
              </div>
            </div>
          </div>

          {/* Project Information */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-lg text-accent">
                <FaBuilding />
              </div>

              <div>
                <h2 className="font-heading text-lg font-extrabold text-brand">
                  Project Information
                </h2>
                <p className="text-xs text-slate-400">
                  Customer's project requirements
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-xs text-slate-400">Service Required</p>
                <p className="mt-2 text-sm font-bold text-brand">
                  {inquiry.service}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Project Type</p>
                <p className="mt-2 text-sm font-bold text-brand">
                  {inquiry.projectType || "Not provided"}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Estimated Budget</p>
                <p className="mt-2 text-sm font-bold text-brand">
                  {inquiry.budget}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Project Location</p>
                <p className="mt-2 flex items-center gap-2 text-sm font-bold text-brand">
                  <FaMapMarkerAlt className="text-accent" />
                  {inquiry.location}
                </p>
              </div>
            </div>

            <div className="mt-7 border-t border-slate-100 pt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Project Description
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {inquiry.description || "No description provided."}
              </p>
            </div>
          </div>

          {/* Documents */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="font-heading text-lg font-extrabold text-brand">
                  Uploaded Documents
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  Files submitted by the customer
                </p>
              </div>

              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
                2 Files
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-100 p-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-50 text-lg text-red-500">
                    <FaFilePdf />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-brand">
                      Building_Floor_Plan.pdf
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      PDF Document · 2.4 MB
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-500 transition hover:bg-brand hover:text-white"
                >
                  <FaDownload />
                </button>
              </div>

              <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-100 p-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-lg text-blue-500">
                    <FaFileAlt />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-brand">
                      Land_Document.pdf
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      PDF Document · 1.8 MB
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-500 transition hover:bg-brand hover:text-white"
                >
                  <FaDownload />
                </button>
              </div>
            </div>
          </div>

          {/* Internal Notes */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-lg text-purple-600">
                <FaStickyNote />
              </div>

              <div>
                <h2 className="font-heading text-lg font-extrabold text-brand">
                  Internal Notes
                </h2>
                <p className="text-xs text-slate-400">
                  Private notes for the admin team
                </p>
              </div>
            </div>

            <textarea
              rows="4"
              placeholder="Write an internal note about this inquiry..."
              className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm outline-none transition focus:border-accent focus:bg-white"
            />

            <div className="mt-3 flex justify-end">
              <button
                type="button"
                className="flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent"
              >
                <FaPaperPlane /> Add Note
              </button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Status Card */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h2 className="font-heading text-lg font-extrabold text-brand">
              Inquiry Status
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Current status of this inquiry
            </p>

            <div className="mt-5 rounded-xl bg-slate-50 p-4">
              <div className="flex items-center gap-3">
                <FaClock className="text-accent" />
                <span
                  className={`text-sm font-bold ${
                    statusStyles[inquiry.status] || "text-slate-600"
                  }`}
                >
                  {inquiry.status} Inquiry
                </span>
              </div>
            </div>

            <label className="mb-2 mt-5 block text-xs font-bold text-slate-500">
              Update Status
            </label>

            <select
              defaultValue={inquiry.status}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 outline-none focus:border-accent"
            >
              <option>New</option>
              <option>Contacted</option>
              <option>Discussion</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>

            <button
              type="button"
              className="mt-3 w-full rounded-xl bg-brand py-3 text-sm font-bold text-white transition hover:bg-accent"
            >
              Update Status
            </button>
          </div>

          {/* Timeline */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h2 className="font-heading text-lg font-extrabold text-brand">
              Inquiry Timeline
            </h2>

            <div className="mt-6 space-y-6">
              {[
                {
                  title: "Inquiry Submitted",
                  description: "Customer submitted a project inquiry.",
                  date: submittedDate,
                  completed: true,
                },
                {
                  title: "Initial Review",
                  description: "Inquiry is waiting for admin review.",
                  date: "Pending",
                  completed: false,
                },
                {
                  title: "Customer Contacted",
                  description: "Initial communication with customer.",
                  date: "Pending",
                  completed: false,
                },
                {
                  title: "Project Discussion",
                  description: "Detailed project discussion.",
                  date: "Pending",
                  completed: false,
                },
              ].map((item, index, items) => (
                <div key={item.title} className="relative flex gap-3">
                  {index !== items.length - 1 && (
                    <div className="absolute left-[11px] top-7 h-full w-px bg-slate-200" />
                  )}

                  <div
                    className={`relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                      item.completed
                        ? "bg-green-100 text-green-600"
                        : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    {item.completed ? (
                      <FaCheckCircle className="text-xs" />
                    ) : (
                      <span className="h-2 w-2 rounded-full bg-current" />
                    )}
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-brand">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {item.description}
                    </p>
                    <p className="mt-2 text-[11px] text-slate-400">
                      {item.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Convert to Project */}
          <div className="rounded-2xl bg-brand p-6 text-white shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-xl text-accent">
              <FaBuilding />
            </div>

            <h2 className="mt-5 font-heading text-lg font-extrabold">
              Convert to Client & Project
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Turn this inquiry into a registered client and create a new
              project.
            </p>

            <button
              type="button"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3 text-sm font-bold text-white transition hover:bg-white hover:text-brand"
            >
              Convert Inquiry <FaArrowRight />
            </button>
          </div>

          {/* Submission Details */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h2 className="font-heading text-base font-extrabold text-brand">
              Submission Details
            </h2>

            <div className="mt-5 space-y-4">
              <div className="flex items-center gap-3">
                <FaCalendarAlt className="text-slate-400" />

                <div>
                  <p className="text-xs text-slate-400">Submitted On</p>
                  <p className="mt-1 text-sm font-semibold text-brand">
                    {submittedDate}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaDollarSign className="text-slate-400" />

                <div>
                  <p className="text-xs text-slate-400">Estimated Budget</p>
                  <p className="mt-1 text-sm font-semibold text-brand">
                    {inquiry.budget}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryDetailsPage;
