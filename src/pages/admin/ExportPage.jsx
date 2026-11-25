import { useState } from "react";
import { motion } from "motion/react";

import {
  FaFilePdf,
  FaFileExcel,
  FaDownload,
  FaFileExport,
  FaInbox,
  FaUsers,
  FaBuilding,
  FaEnvelope,
  FaHistory,
  FaCalendarAlt,
  FaFilter,
  FaCheckCircle,
  FaChartBar,
  FaTrash,
} from "react-icons/fa";

import inquiries from "../../data/inquiries";
import clients from "../../data/clients";
import projects from "../../data/projects.json";
import messages from "../../data/messages";
import activityLogs from "../../data/activityLogs";

import { exportToPDF, exportToExcel } from "../../utils/exportUtils";

import downloadExportRecord from "../../utils/downloadExportRecord";

import {
  getExportHistory,
  addExportHistory,
  clearExportHistory,
} from "../../utils/exportHistory";

// Generate export metadata when the user requests an export.
const createExportMetadata = () => {
  const timestamp = new Date();

  return {
    id: `EXP-${timestamp.getTime()}`,
    date: timestamp.toLocaleString(),
  };
};

// Export Configurations
const exportConfigurations = {
  inquiries: {
    title: "Inquiry Report",
    fileName: "inquiries_report",
    data: inquiries,
    dateKey: "date",
    columns: [
      { key: "id", label: "Inquiry ID" },
      { key: "name", label: "Name" },
      { key: "email", label: "Email" },
      { key: "phone", label: "Phone" },
      { key: "service", label: "Service" },
      { key: "location", label: "Location" },
      { key: "budget", label: "Budget" },
      { key: "date", label: "Date" },
      { key: "status", label: "Status" },
    ],
  },

  clients: {
    title: "Client Report",
    fileName: "clients_report",
    data: clients,
    dateKey: "joinedDate",
    columns: [
      { key: "id", label: "Client ID" },
      { key: "name", label: "Name" },
      { key: "email", label: "Email" },
      { key: "phone", label: "Phone" },
      { key: "company", label: "Company" },
      { key: "location", label: "Location" },
      { key: "totalInquiries", label: "Total Inquiries" },
      { key: "totalProjects", label: "Total Projects" },
      { key: "status", label: "Status" },
      { key: "joinedDate", label: "Joined Date" },
    ],
  },

  projects: {
    title: "Project Report",
    fileName: "projects_report",
    data: projects,
    dateKey: "startDate",
    columns: [
      { key: "id", label: "Project ID" },
      { key: "title", label: "Project Title" },
      { key: "category", label: "Category" },
      { key: "location", label: "Location" },
      { key: "budget", label: "Budget" },
      { key: "startDate", label: "Start Date" },
      { key: "deadline", label: "Deadline" },
      { key: "manager", label: "Manager" },
      { key: "status", label: "Status" },
      { key: "progress", label: "Progress (%)" },
    ],
  },

  messages: {
    title: "Message Report",
    fileName: "messages_report",
    data: messages,
    dateKey: "date",
    columns: [
      { key: "id", label: "Message ID" },
      { key: "name", label: "Name" },
      { key: "email", label: "Email" },
      { key: "phone", label: "Phone" },
      { key: "subject", label: "Subject" },
      { key: "message", label: "Message" },
      { key: "date", label: "Date" },
      { key: "status", label: "Status" },
    ],
  },

  activity: {
    title: "Activity Log Report",
    fileName: "activity_logs_report",
    data: activityLogs,
    dateKey: "date",
    columns: [
      { key: "id", label: "Activity ID" },
      { key: "admin", label: "Admin" },
      { key: "email", label: "Admin Email" },
      { key: "action", label: "Action" },
      { key: "description", label: "Description" },
      { key: "category", label: "Category" },
      { key: "target", label: "Target" },
      { key: "date", label: "Date" },
      { key: "time", label: "Time" },
      { key: "status", label: "Status" },
    ],
  },
};

// Export Modules
const exportModules = [
  {
    key: "inquiries",
    title: "Inquiries",
    description: "Export inquiry records and customer requests.",
    icon: FaInbox,
    color: "bg-blue-50 text-blue-600",
  },
  {
    key: "clients",
    title: "Clients",
    description: "Export client profiles and contact information.",
    icon: FaUsers,
    color: "bg-purple-50 text-purple-600",
  },
  {
    key: "projects",
    title: "Projects",
    description: "Export project details, budgets and progress.",
    icon: FaBuilding,
    color: "bg-orange-50 text-orange-600",
  },
  {
    key: "messages",
    title: "Messages",
    description: "Export website contact messages and customer inquiries.",
    icon: FaEnvelope,
    color: "bg-green-50 text-green-600",
  },
  {
    key: "activity",
    title: "Activity Logs",
    description: "Export administrative activities and system records.",
    icon: FaHistory,
    color: "bg-pink-50 text-pink-600",
  },
];

const ExportPage = () => {
  const [selectedModule, setSelectedModule] = useState("inquiries");
  const [selectedFormat, setSelectedFormat] = useState("pdf");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [fileName, setFileName] = useState("");

  const [exportHistory, setExportHistory] = useState(() => getExportHistory());

  // Filter Export Data
  const getFilteredData = (moduleKey) => {
    const config = exportConfigurations[moduleKey];

    if (!config) return [];

    return config.data.filter((item) => {
      const itemDate = item[config.dateKey];

      if (startDate && itemDate && itemDate < startDate) {
        return false;
      }

      if (endDate && itemDate && itemDate > endDate) {
        return false;
      }

      if (
        selectedStatus !== "all" &&
        String(item.status || "").toLowerCase() !== selectedStatus
      ) {
        return false;
      }

      return true;
    });
  };

  // Handle PDF and Excel Export
  const handleExport = (moduleKey, format) => {
    const config = exportConfigurations[moduleKey];

    if (!config) return;

    const filteredData = getFilteredData(moduleKey);

    if (filteredData.length === 0) {
      window.alert("No records found for the selected filters.");
      return;
    }

    const finalFileName = (fileName.trim() || config.fileName).replace(
      /[^a-zA-Z0-9_-]/g,
      "_",
    );

    const exportOptions = {
      title: config.title,
      columns: config.columns,
      data: filteredData,
      fileName: finalFileName,
    };

    try {
      if (format === "pdf") {
        exportToPDF(exportOptions);
      } else if (format === "excel") {
        exportToExcel(exportOptions);
      } else {
        window.alert("Unsupported export format.");
        return;
      }

      const metadata = createExportMetadata();

      const newRecord = {
        id: metadata.id,
        name: finalFileName,
        title: config.title,
        module:
          exportModules.find((item) => item.key === moduleKey)?.title ||
          moduleKey,
        moduleKey,
        format: format === "pdf" ? "PDF" : "Excel",
        date: metadata.date,
        size: "Generated",
        status: "Completed",
        recordCount: filteredData.length,

        // Save the report data for future downloads.
        columns: config.columns,
        data: filteredData,
      };

      const updatedHistory = addExportHistory(newRecord);

      setExportHistory(updatedHistory);
    } catch (error) {
      console.error("Export failed:", error);
      window.alert("Export failed. Please try again.");
    }
  };

  // Download Previous Export
  const handleDownload = (record) => {
    downloadExportRecord(record);
  };

  // Clear Export History
  const handleClearHistory = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear all export history?",
    );

    if (!confirmed) return;

    clearExportHistory();
    setExportHistory([]);
  };

  // Summary Data
  const availableRecords =
    inquiries.length +
    clients.length +
    projects.length +
    messages.length +
    activityLogs.length;

  const totalPDF = exportHistory.filter((item) => item.format === "PDF").length;

  const totalExcel = exportHistory.filter(
    (item) => item.format === "Excel",
  ).length;

  const connectedModules = Object.keys(exportConfigurations).length;

  return (
    <div className="min-h-screen space-y-8 bg-surface p-4 md:p-6 xl:p-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[2px] text-accent">
            Data Management
          </p>

          <h1 className="font-heading text-2xl font-extrabold text-brand md:text-3xl">
            Export Center
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Export, organize and download your business reports.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-600">
          <FaCalendarAlt className="text-accent" />
          November 2026
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title: "Available Records",
            value: availableRecords,
            subtitle: "Inquiries, clients, projects, messages and activities",
            icon: FaFileExport,
            color: "bg-blue-50 text-blue-600",
          },
          {
            title: "PDF Reports",
            value: totalPDF,
            subtitle: "Generated export records",
            icon: FaFilePdf,
            color: "bg-red-50 text-red-600",
          },
          {
            title: "Excel Reports",
            value: totalExcel,
            subtitle: "Generated export records",
            icon: FaFileExcel,
            color: "bg-green-50 text-green-600",
          },
          {
            title: "Export Modules",
            value: `${connectedModules} / 5`,
            subtitle: "Currently connected",
            icon: FaChartBar,
            color: "bg-orange-50 text-orange-600",
          },
        ].map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {item.title}
                  </p>

                  <h2 className="mt-2 text-3xl font-extrabold text-brand">
                    {item.value}
                  </h2>
                </div>

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl ${item.color}`}
                >
                  <Icon />
                </div>
              </div>

              <p className="mt-3 text-xs text-slate-400">{item.subtitle}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Export Modules */}
      <section>
        <div className="mb-5">
          <h2 className="font-heading text-xl font-extrabold text-brand">
            Export Data
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Select a module to download its records.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {exportModules.map((module, index) => {
            const Icon = module.icon;
            const config = exportConfigurations[module.key];
            const recordCount = config.data.length;

            return (
              <motion.div
                key={module.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl ${module.color}`}
                  >
                    <Icon />
                  </div>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                    {recordCount} Records
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-lg font-bold text-brand">
                  {module.title}
                </h3>

                <p className="mt-2 min-h-10 text-sm leading-6 text-slate-500">
                  {module.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => handleExport(module.key, "pdf")}
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-red-50 px-3 py-3 text-sm font-bold text-red-600 transition hover:bg-red-100"
                  >
                    <FaFilePdf />
                    PDF
                  </button>

                  <button
                    type="button"
                    onClick={() => handleExport(module.key, "excel")}
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-green-50 px-3 py-3 text-sm font-bold text-green-700 transition hover:bg-green-100"
                  >
                    <FaFileExcel />
                    Excel
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Custom Export */}
      <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm md:p-7">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-lg text-accent">
            <FaFilter />
          </div>

          <div>
            <h2 className="font-heading text-lg font-extrabold text-brand">
              Custom Export
            </h2>

            <p className="text-sm text-slate-500">
              Customize your report with specific filters.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-600">
              Select Module
            </label>

            <select
              value={selectedModule}
              onChange={(event) => setSelectedModule(event.target.value)}
              className="select select-bordered w-full bg-white"
            >
              <option value="inquiries">Inquiries</option>
              <option value="clients">Clients</option>
              <option value="projects">Projects</option>
              <option value="messages">Messages</option>
              <option value="activity">Activity Logs</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-600">
              Export Format
            </label>

            <select
              value={selectedFormat}
              onChange={(event) => setSelectedFormat(event.target.value)}
              className="select select-bordered w-full bg-white"
            >
              <option value="pdf">PDF Document</option>
              <option value="excel">Excel Spreadsheet</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-600">
              Start Date
            </label>

            <input
              type="date"
              value={startDate}
              onChange={(event) => setStartDate(event.target.value)}
              className="input input-bordered w-full bg-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-600">
              End Date
            </label>

            <input
              type="date"
              value={endDate}
              onChange={(event) => setEndDate(event.target.value)}
              min={startDate || undefined}
              className="input input-bordered w-full bg-white"
            />
          </div>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-600">
              Record Status
            </label>

            <select
              value={selectedStatus}
              onChange={(event) => setSelectedStatus(event.target.value)}
              className="select select-bordered w-full bg-white"
            >
              <option value="all">All Statuses</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="discussion">Discussion</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
              <option value="active">Active</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="on hold">On Hold</option>
              <option value="unread">Unread</option>
              <option value="read">Read</option>
              <option value="replied">Replied</option>
              <option value="success">Success</option>
              <option value="failed">Failed</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-600">
              File Name
            </label>

            <input
              type="text"
              value={fileName}
              onChange={(event) => setFileName(event.target.value)}
              placeholder="e.g. November_Activity_Report"
              className="input input-bordered w-full bg-white"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col justify-between gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center">
          <p className="text-xs leading-5 text-slate-400">
            Your selected module, format, date range and status will be applied.
          </p>

          <button
            type="button"
            onClick={() => handleExport(selectedModule, selectedFormat)}
            className="flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand/20 transition hover:bg-brand/90"
          >
            <FaFileExport />
            Generate Report
          </button>
        </div>
      </section>

      {/* Export History */}
      <section className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
        <div className="flex flex-col justify-between gap-3 border-b border-slate-100 p-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-heading text-lg font-extrabold text-brand">
              Export History
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Download your previously generated PDF and Excel reports.
            </p>
          </div>

          {exportHistory.length > 0 && (
            <button
              type="button"
              onClick={handleClearHistory}
              className="flex items-center gap-2 self-start rounded-lg border border-red-100 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
            >
              <FaTrash />
              Clear History
            </button>
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="bg-slate-50 text-xs uppercase text-slate-500">
                <th>Report</th>
                <th>Module</th>
                <th>Format</th>
                <th>Date</th>
                <th>Records</th>
                <th>Status</th>
                <th>Download</th>
              </tr>
            </thead>

            <tbody>
              {exportHistory.length > 0 ? (
                exportHistory.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50">
                    <td>
                      <div>
                        <p className="font-bold text-brand">{item.name}</p>
                        <p className="text-xs text-slate-400">{item.id}</p>
                      </div>
                    </td>

                    <td className="text-sm text-slate-600">{item.module}</td>

                    <td>
                      <span
                        className={`inline-flex items-center gap-2 text-sm font-semibold ${
                          item.format === "PDF"
                            ? "text-red-600"
                            : "text-green-700"
                        }`}
                      >
                        {item.format === "PDF" ? (
                          <FaFilePdf />
                        ) : (
                          <FaFileExcel />
                        )}
                        {item.format}
                      </span>
                    </td>

                    <td className="whitespace-nowrap text-sm text-slate-500">
                      {item.date}
                    </td>

                    <td className="text-sm text-slate-500">
                      {item.recordCount ?? "—"}
                    </td>

                    <td>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
                        <FaCheckCircle />
                        {item.status}
                      </span>
                    </td>

                    <td>
                      <button
                        type="button"
                        onClick={() => handleDownload(item)}
                        className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700 transition hover:bg-blue-100"
                      >
                        <FaDownload />
                        Download
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="py-14 text-center">
                    <FaHistory className="mx-auto text-3xl text-slate-300" />

                    <h3 className="mt-3 font-bold text-brand">
                      No Export History
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                      Your generated reports will appear here.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="border-t border-slate-100 px-5 py-4">
          <p className="text-xs text-slate-400">
            Export records and report data are currently saved in this browser.
          </p>
        </div>
      </section>

      {/* Information */}
      <div className="flex gap-3 rounded-xl border border-blue-100 bg-blue-50 p-4">
        <FaFileExport className="mt-1 shrink-0 text-blue-600" />

        <div>
          <h3 className="text-sm font-bold text-blue-900">
            Export Information
          </h3>

          <p className="mt-1 text-xs leading-6 text-blue-700">
            PDF and Excel exports are connected to all five modules. New reports
            save their data in browser local storage so they can be downloaded
            again from Export History. Database synchronization will be added
            during the backend phase.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExportPage;
