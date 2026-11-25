import { useState } from "react";
import { motion } from "motion/react";
import {
  FaShieldAlt,
  FaUsers,
  FaUserShield,
  FaLock,
  FaPlus,
  FaEdit,
  FaTrash,
  FaCheck,
  FaTimes,
  FaSearch,
  FaKey,
  FaCog,
  FaEye,
  FaInbox,
  FaBuilding,
  FaGlobe,
  FaChartBar,
  FaUserTie,
} from "react-icons/fa";

const initialRoles = [
  {
    id: 1,
    name: "Super Admin",
    description: "Complete access to all system features and settings.",
    users: 1,
    color: "bg-purple-50 text-purple-700",
    icon: FaShieldAlt,
    permissions: {
      dashboard: true,
      inquiries: true,
      clients: true,
      projects: true,
      content: true,
      messages: true,
      settings: true,
      users: true,
    },
  },
  {
    id: 2,
    name: "Admin",
    description: "Manage daily business operations and website content.",
    users: 2,
    color: "bg-blue-50 text-blue-700",
    icon: FaUserShield,
    permissions: {
      dashboard: true,
      inquiries: true,
      clients: true,
      projects: true,
      content: true,
      messages: true,
      settings: false,
      users: false,
    },
  },
  {
    id: 3,
    name: "Editor",
    description: "Manage website pages, projects and published content.",
    users: 1,
    color: "bg-orange-50 text-orange-700",
    icon: FaEdit,
    permissions: {
      dashboard: true,
      inquiries: false,
      clients: false,
      projects: true,
      content: true,
      messages: false,
      settings: false,
      users: false,
    },
  },
  {
    id: 4,
    name: "Viewer",
    description: "Read-only access to permitted dashboard information.",
    users: 1,
    color: "bg-green-50 text-green-700",
    icon: FaEye,
    permissions: {
      dashboard: true,
      inquiries: false,
      clients: false,
      projects: false,
      content: false,
      messages: false,
      settings: false,
      users: false,
    },
  },
];

const permissionModules = [
  {
    key: "dashboard",
    name: "Dashboard",
    icon: FaChartBar,
    description: "Overview and business analytics",
  },
  {
    key: "inquiries",
    name: "Inquiries",
    icon: FaInbox,
    description: "Customer inquiry management",
  },
  {
    key: "clients",
    name: "Clients",
    icon: FaUsers,
    description: "Client records and profiles",
  },
  {
    key: "projects",
    name: "Projects",
    icon: FaBuilding,
    description: "Project and portfolio management",
  },
  {
    key: "content",
    name: "Website Content",
    icon: FaGlobe,
    description: "Services, team, FAQs and testimonials",
  },
  {
    key: "messages",
    name: "Messages",
    icon: FaInbox,
    description: "Customer communication",
  },
  {
    key: "settings",
    name: "Settings",
    icon: FaCog,
    description: "Website and system settings",
  },
  {
    key: "users",
    name: "User Management",
    icon: FaUserTie,
    description: "Admin users and role permissions",
  },
];

const permissionTypes = [
  { key: "view", label: "View" },
  { key: "create", label: "Create" },
  { key: "edit", label: "Edit" },
  { key: "delete", label: "Delete" },
];

const RolesPermissionsPage = () => {
  const [roles] = useState(initialRoles);
  const [selectedRole, setSelectedRole] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRoles = roles.filter((role) =>
    role.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const activeRole = roles.find((role) => role.id === selectedRole) || roles[0];

  const totalUsers = roles.reduce((total, role) => total + role.users, 0);

  const stats = [
    {
      title: "Total Roles",
      value: roles.length,
      description: "Configured access roles",
      icon: FaShieldAlt,
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Admin Users",
      value: totalUsers,
      description: "Assigned to different roles",
      icon: FaUsers,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Permission Modules",
      value: permissionModules.length,
      description: "Manage access by module",
      icon: FaKey,
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "Protected System",
      value: "Active",
      description: "Role-based access overview",
      icon: FaLock,
      color: "bg-green-50 text-green-600",
    },
  ];

  return (
    <div className="min-h-screen space-y-6 bg-slate-50 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-accent">
            <FaShieldAlt />
            SYSTEM MANAGEMENT
          </div>

          <h1 className="font-heading text-2xl font-extrabold text-brand sm:text-3xl">
            Roles & Permissions
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Manage administrator roles and control access to different sections
            of your business dashboard.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white shadow-lg shadow-brand/10 transition hover:bg-accent"
        >
          <FaPlus />
          Create New Role
        </button>
      </div>

      {/* Stats */}
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

      {/* Main Layout */}
      <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-12">
        {/* Roles List */}
        <div className="space-y-4 xl:col-span-4">
          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="mb-5">
              <h2 className="font-heading text-lg font-bold text-brand">
                Administrator Roles
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Select a role to review its permissions.
              </p>
            </div>

            {/* Search */}
            <div className="relative mb-5">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search roles..."
                className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-accent focus:ring-4 focus:ring-orange-100"
              />
            </div>

            {/* Role Cards */}
            <div className="space-y-3">
              {filteredRoles.map((role, index) => {
                const RoleIcon = role.icon;
                const isSelected = selectedRole === role.id;

                return (
                  <motion.button
                    key={role.id}
                    type="button"
                    onClick={() => setSelectedRole(role.id)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.07 }}
                    className={`w-full rounded-xl border p-4 text-left transition ${
                      isSelected
                        ? "border-accent bg-orange-50/50 shadow-sm"
                        : "border-slate-100 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg ${role.color}`}
                        >
                          <RoleIcon />
                        </div>

                        <div>
                          <h3 className="text-sm font-bold text-brand">
                            {role.name}
                          </h3>

                          <p className="mt-1 text-xs text-slate-400">
                            {role.users} Assigned Users
                          </p>
                        </div>
                      </div>

                      {isSelected && (
                        <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs text-white">
                          <FaCheck />
                        </span>
                      )}
                    </div>

                    <p className="mt-3 text-xs leading-5 text-slate-500">
                      {role.description}
                    </p>
                  </motion.button>
                );
              })}

              {filteredRoles.length === 0 && (
                <p className="py-8 text-center text-sm text-slate-400">
                  No roles found.
                </p>
              )}
            </div>
          </div>

          {/* Security Notice */}
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
            <div className="flex items-start gap-3">
              <FaLock className="mt-1 text-lg text-blue-600" />

              <div>
                <h3 className="text-sm font-bold text-blue-900">
                  Access Control
                </h3>

                <p className="mt-2 text-xs leading-6 text-blue-700">
                  Assign permissions carefully. Users should only receive access
                  required for their responsibilities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Permission Matrix */}
        <div className="space-y-5 xl:col-span-8">
          <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
            {/* Matrix Header */}
            <div className="flex flex-col justify-between gap-4 border-b border-slate-100 p-5 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl ${activeRole.color}`}
                >
                  <activeRole.icon />
                </div>

                <div>
                  <h2 className="font-heading text-lg font-bold text-brand">
                    {activeRole.name}
                  </h2>

                  <p className="mt-1 text-xs text-slate-400">
                    {activeRole.users} assigned users
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600 transition hover:border-accent hover:text-accent"
                >
                  <FaEdit />
                  Edit Role
                </button>

                <button
                  type="button"
                  disabled={activeRole.id === 1}
                  className="inline-flex items-center gap-2 rounded-lg border border-red-100 px-3 py-2 text-xs font-bold text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <FaTrash />
                  Delete
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="border-b border-slate-100 bg-slate-50/70 px-5 py-4">
              <p className="text-sm leading-6 text-slate-500">
                {activeRole.description}
              </p>
            </div>

            {/* Permission Table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] text-left">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Module
                    </th>

                    {permissionTypes.map((type) => (
                      <th
                        key={type.key}
                        className="px-3 py-4 text-center text-xs font-bold uppercase tracking-wider text-slate-500"
                      >
                        {type.label}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {permissionModules.map((module) => {
                    const ModuleIcon = module.icon;
                    const isAllowed =
                      activeRole.permissions[module.key] || false;

                    return (
                      <tr
                        key={module.key}
                        className="transition hover:bg-slate-50"
                      >
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-sm text-slate-600">
                              <ModuleIcon />
                            </div>

                            <div>
                              <p className="text-sm font-bold text-brand">
                                {module.name}
                              </p>

                              <p className="mt-1 text-xs text-slate-400">
                                {module.description}
                              </p>
                            </div>
                          </div>
                        </td>

                        {permissionTypes.map((type, index) => {
                          const allowed =
                            index === 0
                              ? isAllowed
                              : isAllowed && activeRole.id === 1;

                          return (
                            <td
                              key={type.key}
                              className="px-3 py-4 text-center"
                            >
                              {allowed ? (
                                <span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-green-50 text-xs text-green-600">
                                  <FaCheck />
                                </span>
                              ) : (
                                <span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs text-slate-300">
                                  <FaTimes />
                                </span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Matrix Footer */}
            <div className="flex flex-col justify-between gap-3 border-t border-slate-100 bg-slate-50/70 px-5 py-4 sm:flex-row sm:items-center">
              <p className="text-xs text-slate-400">
                Showing {permissionModules.length} permission modules
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs">
                <span className="flex items-center gap-1.5 text-slate-500">
                  <FaCheck className="text-green-600" />
                  Allowed
                </span>

                <span className="flex items-center gap-1.5 text-slate-500">
                  <FaTimes className="text-slate-300" />
                  Restricted
                </span>
              </div>
            </div>
          </div>

          {/* Permission Summary */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <FaCheck />
                </div>

                <div>
                  <p className="text-xs text-slate-400">Accessible Modules</p>

                  <h3 className="mt-1 text-2xl font-extrabold text-brand">
                    {
                      permissionModules.filter(
                        (module) => activeRole.permissions[module.key],
                      ).length
                    }
                    <span className="ml-1 text-sm font-medium text-slate-400">
                      / {permissionModules.length}
                    </span>
                  </h3>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                  <FaUsers />
                </div>

                <div>
                  <p className="text-xs text-slate-400">Assigned Users</p>

                  <h3 className="mt-1 text-2xl font-extrabold text-brand">
                    {activeRole.users}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Information */}
      <div className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:flex-row sm:items-center">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-lg text-accent">
          <FaKey />
        </div>

        <div>
          <h3 className="text-sm font-bold text-brand">
            Role-Based Access Management
          </h3>

          <p className="mt-1 text-xs leading-6 text-slate-500">
            This page provides a visual overview of role permissions. Actual
            access restrictions will be enforced through backend authentication
            and authorization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RolesPermissionsPage;
