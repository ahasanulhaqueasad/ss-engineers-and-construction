import {
  FaInbox,
  FaUsers,
  FaBuilding,
  FaCheckCircle,
  FaClock,
  FaArrowUp,
  FaArrowRight,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { motion } from "motion/react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import inquiries from "../../data/inquiries";
import clients from "../../data/clients";
import projects from "../../data/projects.json";
import AnimatedCard from "../../components/admin/AnimatedCard";

// Monthly Inquiry Chart Demo Data
const inquiryData = [
  { month: "Jan", inquiries: 35 },
  { month: "Feb", inquiries: 48 },
  { month: "Mar", inquiries: 42 },
  { month: "Apr", inquiries: 65 },
  { month: "May", inquiries: 58 },
  { month: "Jun", inquiries: 82 },
  { month: "Jul", inquiries: 72 },
  { month: "Aug", inquiries: 95 },
  { month: "Sep", inquiries: 78 },
  { month: "Oct", inquiries: 110 },
  { month: "Nov", inquiries: 98 },
  { month: "Dec", inquiries: 125 },
];

// Project Status Colors
const projectStatusColors = {
  Completed: "#16A34A",
  Ongoing: "#F28C28",
  Pending: "#3B82F6",
  "On Hold": "#94A3B8",
};

// Inquiry Status Styles
const statusStyles = {
  New: "bg-blue-50 text-blue-600",
  Contacted: "bg-orange-50 text-orange-600",
  Discussion: "bg-purple-50 text-purple-600",
  Approved: "bg-green-50 text-green-600",
  Rejected: "bg-red-50 text-red-600",
};

// Date Formatter
const formatDate = (dateString) => {
  if (!dateString) return "N/A";

  const [year, month, day] = dateString.split("-").map(Number);

  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const DashboardPage = () => {
  // Dynamic Inquiry Statistics
  const totalInquiries = inquiries.length;

  const newInquiries = inquiries.filter((item) => item.status === "New").length;

  // Dynamic Client Statistics
  const totalClients = clients.length;

  // Dynamic Project Statistics
  const totalProjects = projects.length;

  const activeProjects = projects.filter(
    (project) => project.status === "Ongoing",
  ).length;

  const completedProjects = projects.filter(
    (project) => project.status === "Completed",
  ).length;

  const pendingProjects = projects.filter(
    (project) => project.status === "Pending" || project.status === "On Hold",
  ).length;

  // Recent Inquiries
  const recentInquiries = [...inquiries]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 4);

  // Recent Projects
  const recentProjects = [...projects]
    .sort((a, b) => {
      return (
        new Date(b.startDate || 0).getTime() -
        new Date(a.startDate || 0).getTime()
      );
    })
    .slice(0, 3);

  // Dynamic Project Status Chart
  const projectData = Object.keys(projectStatusColors)
    .map((status) => ({
      name: status,
      value: projects.filter((project) => project.status === status).length,
      color: projectStatusColors[status],
    }))
    .filter((item) => item.value > 0);

  // Dashboard Statistics
  const stats = [
    {
      title: "Total Inquiries",
      value: totalInquiries,
      change: "+12.5%",
      icon: FaInbox,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "New Inquiries",
      value: newInquiries,
      change: "+8.2%",
      icon: FaClock,
      color: "bg-orange-50 text-orange-500",
    },
    {
      title: "Total Clients",
      value: totalClients,
      change: "+10.4%",
      icon: FaUsers,
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Active Projects",
      value: activeProjects,
      change: "+6.8%",
      icon: FaBuilding,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Completed Projects",
      value: completedProjects,
      change: "+15.3%",
      icon: FaCheckCircle,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "Pending Projects",
      value: pendingProjects,
      change: "-2.4%",
      icon: FaClock,
      color: "bg-rose-50 text-rose-600",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Page Heading */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-medium text-slate-500">
            Overview / Dashboard
          </p>

          <h1 className="mt-1 font-heading text-2xl font-extrabold text-brand sm:text-3xl">
            Dashboard Overview
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Monitor your business performance and activities.
          </p>
        </div>

        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/10 transition hover:bg-accent"
        >
          View Reports <FaArrowRight />
        </button>
      </div>

      {/* Statistics */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <AnimatedCard key={stat.title} index={index} className="h-full">
              <div className="h-full rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition duration-300 hover:shadow-lg">
                <div className="flex items-start justify-between">
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

                <div className="mt-4 flex items-center gap-2 text-xs">
                  <span className="flex items-center gap-1 font-bold text-green-600">
                    <FaArrowUp />
                    {stat.change}
                  </span>

                  <span className="text-slate-400">vs last month</span>
                </div>
              </div>
            </AnimatedCard>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid gap-6 xl:grid-cols-3">
        {/* Inquiry Chart */}
        <AnimatedCard index={6} className="xl:col-span-2">
          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="font-heading text-lg font-extrabold text-brand">
                  Inquiry Analytics
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  Monthly inquiry performance
                </p>
              </div>

              <span className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600">
                This Year
              </span>
            </div>

            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={inquiryData}>
                  <defs>
                    <linearGradient
                      id="inquiryGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#F28C28" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#F28C28" stopOpacity={0} />
                    </linearGradient>
                  </defs>

                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#E2E8F0"
                  />

                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#94A3B8", fontSize: 12 }}
                  />

                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#94A3B8", fontSize: 12 }}
                  />

                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="inquiries"
                    stroke="#F28C28"
                    strokeWidth={3}
                    fill="url(#inquiryGradient)"
                    animationDuration={1500}
                    animationEasing="ease-in-out"
                    activeDot={{
                      r: 6,
                      stroke: "#F28C28",
                      strokeWidth: 2,
                      fill: "#FFFFFF",
                    }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </AnimatedCard>

        {/* Project Status */}
        <AnimatedCard index={7}>
          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="font-heading text-lg font-extrabold text-brand">
              Project Status
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              Current project distribution
            </p>

            <div className="relative mt-4 h-56">
              {totalProjects > 0 ? (
                <>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={projectData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={62}
                        outerRadius={88}
                        paddingAngle={4}
                        stroke="none"
                        animationDuration={1500}
                        animationEasing="ease-out"
                      >
                        {projectData.map((item) => (
                          <Cell key={item.name} fill={item.color} />
                        ))}
                      </Pie>

                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>

                  <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-heading text-3xl font-extrabold text-brand">
                      {totalProjects}
                    </span>

                    <span className="text-xs text-slate-400">Projects</span>
                  </div>
                </>
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-slate-400">
                  No project data available.
                </div>
              )}
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3">
              {Object.keys(projectStatusColors).map((status) => {
                const count = projects.filter(
                  (project) => project.status === status,
                ).length;

                const percentage =
                  totalProjects > 0
                    ? Math.round((count / totalProjects) * 100)
                    : 0;

                return (
                  <div key={status} className="flex items-center gap-2">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{
                        backgroundColor: projectStatusColors[status],
                      }}
                    />

                    <span className="text-xs text-slate-500">{status}</span>

                    <span className="ml-auto text-xs font-bold text-brand">
                      {percentage}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedCard>
      </div>

      {/* Recent Activity */}
      <div className="grid gap-6 xl:grid-cols-2">
        {/* Recent Inquiries */}
        <AnimatedCard index={8}>
          <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 p-5">
              <div>
                <h2 className="font-heading text-lg font-extrabold text-brand">
                  Recent Inquiries
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  Latest customer requests
                </p>
              </div>

              <Link
                to="/admin/inquiries"
                className="text-sm font-bold text-accent transition hover:text-brand"
              >
                View All
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-xs uppercase text-slate-400">
                  <tr>
                    <th className="px-5 py-3">Customer</th>
                    <th className="px-5 py-3">Service</th>
                    <th className="px-5 py-3">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {recentInquiries.map((inquiry) => (
                    <tr key={inquiry.id} className="border-t border-slate-50">
                      <td className="whitespace-nowrap px-5 py-4">
                        <p className="text-sm font-bold text-brand">
                          {inquiry.name}
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          #{inquiry.id}
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          {formatDate(inquiry.date)}
                        </p>
                      </td>

                      <td className="whitespace-nowrap px-5 py-4 text-xs text-slate-500">
                        {inquiry.service}
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
                    </tr>
                  ))}

                  {recentInquiries.length === 0 && (
                    <tr>
                      <td
                        colSpan="3"
                        className="px-5 py-8 text-center text-sm text-slate-400"
                      >
                        No inquiries available.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedCard>

        {/* Recent Projects */}
        <AnimatedCard index={9}>
          <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 p-5">
              <div>
                <h2 className="font-heading text-lg font-extrabold text-brand">
                  Recent Projects
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  Track ongoing project progress
                </p>
              </div>

              <Link
                to="/admin/projects"
                className="text-sm font-bold text-accent transition hover:text-brand"
              >
                View All
              </Link>
            </div>

            <div className="space-y-5 p-5">
              {recentProjects.length > 0 ? (
                recentProjects.map((project, index) => {
                  const client = clients.find(
                    (item) => item.id === project.clientId,
                  );

                  const progress = Math.min(
                    100,
                    Math.max(0, Number(project.progress) || 0),
                  );

                  return (
                    <Link
                      key={project.id}
                      to={`/admin/projects/${project.id}`}
                      className="block rounded-xl transition hover:bg-slate-50"
                    >
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <div>
                          <h3 className="text-sm font-bold text-brand">
                            {project.title}
                          </h3>

                          <p className="mt-1 text-xs text-slate-400">
                            Client: {client?.name || "Unassigned"}
                          </p>
                        </div>

                        <span
                          className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${
                            project.status === "Completed"
                              ? "bg-green-50 text-green-600"
                              : project.status === "Ongoing"
                                ? "bg-orange-50 text-orange-600"
                                : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{
                            duration: 1.5,
                            delay: index * 0.2,
                            ease: "easeOut",
                          }}
                          className={`h-full rounded-full ${
                            progress === 100 ? "bg-green-500" : "bg-accent"
                          }`}
                        />
                      </div>

                      <p className="mt-1 text-right text-xs font-bold text-slate-500">
                        {progress}% Complete
                      </p>
                    </Link>
                  );
                })
              ) : (
                <p className="py-8 text-center text-sm text-slate-400">
                  No projects available.
                </p>
              )}
            </div>
          </div>
        </AnimatedCard>
      </div>
    </div>
  );
};

export default DashboardPage;
