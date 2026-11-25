import { NavLink } from "react-router-dom";
import {
  FaThLarge,
  FaInbox,
  FaUsers,
  FaBuilding,
  FaTools,
  FaBell,
  FaImages,
  FaUserTie,
  FaStar,
  FaQuestionCircle,
  FaEnvelope,
  FaCog,
  FaGlobe,
  FaSignOutAlt,
  FaHistory,
  FaUserShield,
  FaFileExport,
} from "react-icons/fa";

const menuGroups = [
  {
    title: "OVERVIEW",
    items: [
      {
        name: "Dashboard",
        path: "/admin/dashboard",
        icon: FaThLarge,
      },
    ],
  },
  {
    title: "MANAGEMENT",
    items: [
      {
        name: "Inquiries",
        path: "/admin/inquiries",
        icon: FaInbox,
        badge: "12",
      },
      {
        name: "Clients",
        path: "/admin/clients",
        icon: FaUsers,
      },
      {
        name: "Projects",
        path: "/admin/projects",
        icon: FaBuilding,
      },
    ],
  },
  {
    title: "WEBSITE CONTENT",
    items: [
      {
        name: "Services",
        path: "/admin/services",
        icon: FaTools,
      },
      {
        name: "Portfolio",
        path: "/admin/portfolio",
        icon: FaImages,
      },
      {
        name: "Team Members",
        path: "/admin/team",
        icon: FaUserTie,
      },
      {
        name: "Testimonials",
        path: "/admin/testimonials",
        icon: FaStar,
      },
      {
        name: "FAQs",
        path: "/admin/faqs",
        icon: FaQuestionCircle,
      },
    ],
  },
  {
    title: "COMMUNICATION",
    items: [
      {
        name: "Messages",
        path: "/admin/messages",
        icon: FaEnvelope,
        badge: "5",
      },
    ],
  },
  {
    title: "SYSTEM",
    items: [
      {
        name: "Notifications",
        path: "/admin/notifications",
        icon: FaBell,
        badge: "3",
      },
      {
        name: "Activity Log",
        path: "/admin/activity-log",
        icon: FaHistory,
      },
      {
        name: "Roles & Permissions",
        path: "/admin/roles-permissions",
        icon: FaUserShield,
      },
      {
        name: "Export Center",
        path: "/admin/exports",
        icon: FaFileExport,
      },
    ],
  },
];

const AdminSidebar = () => {
  return (
    <aside className="flex h-screen w-72 shrink-0 flex-col border-r border-slate-200 bg-white">
      {/* Brand */}
      <div className="flex h-20 items-center gap-3 border-b border-slate-100 px-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-xl font-extrabold text-white">
          SS
        </div>

        <div>
          <h2 className="font-heading text-base font-extrabold text-brand">
            SS Engineers
          </h2>
          <p className="text-xs font-medium text-slate-400">Admin Dashboard</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-7 overflow-y-auto px-4 py-7">
        {menuGroups.map((group) => (
          <div key={group.title}>
            <p className="mb-3 px-3 text-[10px] font-extrabold tracking-[2px] text-slate-400">
              {group.title}
            </p>

            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold transition-all ${
                        isActive
                          ? "bg-brand text-white shadow-md shadow-brand/20"
                          : "text-slate-600 hover:bg-slate-100 hover:text-brand"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span className="flex items-center gap-3">
                          <Icon className="text-base" />
                          {item.name}
                        </span>

                        {item.badge && (
                          <span
                            className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                              isActive
                                ? "bg-white/20 text-white"
                                : "bg-orange-100 text-accent"
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </>
                    )}
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Bottom Links */}
      <div className="space-y-1 border-t border-slate-100 p-4">
        <NavLink
          to="/admin/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${
              isActive
                ? "bg-brand text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`
          }
        >
          <FaCog />
          Settings
        </NavLink>

        <NavLink
          to="/"
          className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
        >
          <FaGlobe />
          Visit Website
        </NavLink>

        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-50"
        >
          <FaSignOutAlt />
          Sign Out
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
