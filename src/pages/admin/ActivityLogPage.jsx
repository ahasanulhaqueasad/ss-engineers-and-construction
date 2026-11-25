import { useState } from "react";
import { motion } from "motion/react";

import {
  FaHistory,
  FaSearch,
  FaFilter,
  FaUser,
  FaEnvelope,
  FaUsers,
  FaEdit,
  FaTrash,
  FaPlus,
  FaSignInAlt,
  FaDownload,
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaFileAlt,
  FaGlobe,
} from "react-icons/fa";

import activityLogs from "../../data/activityLogs";

const categoryStyles = {
  Inquiry: "bg-blue-50 text-blue-700",
  Project: "bg-purple-50 text-purple-700",
  Client: "bg-green-50 text-green-700",
  Website: "bg-orange-50 text-orange-700",
  Content: "bg-pink-50 text-pink-700",
  Security: "bg-red-50 text-red-700",
  Message: "bg-cyan-50 text-cyan-700",
};

const activityIcons = {
  Inquiry: FaPlus,
  Project: FaEdit,
  Client: FaUsers,
  Website: FaGlobe,
  Content: FaTrash,
  Security: FaSignInAlt,
  Message: FaEnvelope,
};

const ActivityLogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const categories = [
    "All",
    "Inquiry",
    "Project",
    "Client",
    "Website",
    "Content",
    "Security",
    "Message",
  ];

  const filteredActivities = activityLogs.filter((activity) => {
    const matchesSearch =
      activity.admin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.target.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || activity.category === selectedCategory;

    const matchesStatus =
      selectedStatus === "All" || activity.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const stats = [
    {
      title: "Total Activities",
      value: activityLogs.length,
      icon: FaHistory,
      color: "bg-blue-50 text-blue-600",
      description: "All recorded activities",
    },
    {
      title: "Successful Actions",
      value: activityLogs.filter((item) => item.status === "Success").length,
      icon: FaCheckCircle,
      color: "bg-green-50 text-green-600",
      description: "Successfully completed",
    },
    {
      title: "Failed Actions",
      value: activityLogs.filter((item) => item.status === "Failed").length,
      icon: FaTimesCircle,
      color: "bg-red-50 text-red-600",
      description: "Failed operations",
    },
    {
      title: "Active Admins",
      value: new Set(activityLogs.map((item) => item.admin)).size,
      icon: FaUsers,
      color: "bg-orange-50 text-orange-600",
      description: "Admins in activity records",
    },
  ];

  return (
    <div className="min-h-screen space-y-6 bg-slate-50 p-4 sm:p-6 lg:p-8">
      {/* Page Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-accent">
            <FaHistory />
            SYSTEM MANAGEMENT
          </div>

          <h1 className="font-heading text-2xl font-extrabold text-brand sm:text-3xl">
            Activity Log
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Monitor administrative activities and track system operations.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white shadow-lg shadow-brand/10 transition hover:bg-accent"
        >
          <FaDownload />
          Export Activity
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {stat.title}
                </p>

                <h2 className="mt-2 text-3xl font-extrabold text-brand">
                  {stat.value}
                </h2>
              </div>

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl ${stat.color}`}
              >
                <stat.icon />
              </div>
            </div>

            <p className="mt-3 text-xs text-slate-400">{stat.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Activity Filters */}
      <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
        <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-heading text-lg font-bold text-brand">
              All Activities
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              Review recent administrative actions.
            </p>
          </div>

          <span className="w-fit rounded-lg bg-orange-50 px-3 py-2 text-xs font-bold text-accent">
            {filteredActivities.length} Records Found
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {/* Search */}
          <div className="relative md:col-span-1">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search admin, action or target..."
              className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-accent focus:ring-4 focus:ring-orange-100"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <FaFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

            <select
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-600 outline-none focus:border-accent"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === "All" ? "All Categories" : category}
                </option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(event) => setSelectedStatus(event.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 outline-none focus:border-accent"
          >
            <option value="All">All Statuses</option>
            <option value="Success">Success</option>
            <option value="Failed">Failed</option>
          </select>
        </div>
      </div>

      {/* Activity Timeline */}
      <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
        <div className="border-b border-slate-100 p-5">
          <h2 className="font-heading text-lg font-bold text-brand">
            Recent Activity Timeline
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            A chronological record of system activities.
          </p>
        </div>

        <div className="divide-y divide-slate-100">
          {filteredActivities.length > 0 ? (
            filteredActivities.map((activity, index) => {
              const ActivityIcon =
                activityIcons[activity.category] || FaHistory;

              return (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.05,
                  }}
                  className="flex flex-col gap-4 p-5 transition hover:bg-slate-50 sm:flex-row sm:items-start"
                >
                  {/* Activity Icon */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-accent">
                    <ActivityIcon />
                  </div>

                  {/* Activity Information */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-bold text-brand">
                        {activity.action}
                      </h3>

                      <span
                        className={`rounded-md px-2 py-1 text-[10px] font-bold ${
                          categoryStyles[activity.category] ||
                          "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {activity.category}
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {activity.description}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <FaUser />
                        {activity.admin}
                      </span>

                      <span className="flex items-center gap-1.5">
                        <FaFileAlt />
                        {activity.target}
                      </span>

                      <span className="flex items-center gap-1.5">
                        <FaCalendarAlt />
                        {activity.date}
                      </span>

                      <span className="flex items-center gap-1.5">
                        <FaClock />
                        {activity.time}
                      </span>
                    </div>

                    <p className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
                      <FaEnvelope />
                      {activity.email}
                    </p>
                  </div>

                  {/* Status */}
                  <div className="sm:pt-1">
                    {activity.status === "Success" ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-700">
                        <FaCheckCircle />
                        Success
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1.5 text-xs font-bold text-red-700">
                        <FaTimesCircle />
                        Failed
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })
          ) : (
            <div className="px-5 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-400">
                <FaHistory />
              </div>

              <h3 className="mt-4 font-bold text-brand">No Activities Found</h3>

              <p className="mt-2 text-sm text-slate-400">
                Try changing your search or filter criteria.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex flex-col justify-between gap-3 border-t border-slate-100 px-5 py-4 text-xs text-slate-400 sm:flex-row sm:items-center">
          <p>
            Showing {filteredActivities.length} of {activityLogs.length} records
          </p>

          <p>Activity records are displayed in chronological order.</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityLogPage;
