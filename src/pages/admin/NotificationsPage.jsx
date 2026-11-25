import {
  FaBell,
  FaEnvelope,
  FaClipboardList,
  FaBuilding,
  FaCheckCircle,
  FaClock,
  FaTrash,
  FaCheckDouble,
  FaFilter,
  FaArrowRight,
} from "react-icons/fa";

const notifications = [
  {
    id: 1,
    title: "New Inquiry Received",
    message:
      "Rahim Ahmed submitted a new inquiry for Residential Building Construction.",
    category: "Inquiry",
    date: "2026-11-25",
    time: "10:30 AM",
    unread: true,
    icon: FaClipboardList,
    color: "bg-blue-50 text-blue-600",
    link: "/admin/inquiries/INQ-2026-001",
  },
  {
    id: 2,
    title: "New Contact Message",
    message:
      "A new message has been received through the website contact form.",
    category: "Message",
    date: "2026-11-24",
    time: "04:15 PM",
    unread: true,
    icon: FaEnvelope,
    color: "bg-purple-50 text-purple-600",
    link: "/admin/messages",
  },
  {
    id: 3,
    title: "Project Status Updated",
    message:
      "Modern Residential Building project progress has been updated to 85%.",
    category: "Project",
    date: "2026-11-24",
    time: "11:45 AM",
    unread: true,
    icon: FaBuilding,
    color: "bg-green-50 text-green-600",
    link: "/admin/projects/1",
  },
  {
    id: 4,
    title: "New Client Added",
    message:
      "A new client profile has been added to your client management system.",
    category: "Client",
    date: "2026-11-23",
    time: "02:20 PM",
    unread: false,
    icon: FaCheckCircle,
    color: "bg-orange-50 text-orange-600",
    link: "/admin/clients",
  },
  {
    id: 5,
    title: "Inquiry Follow-up Reminder",
    message: "An inquiry is waiting for follow-up. Please contact the client.",
    category: "Reminder",
    date: "2026-11-22",
    time: "09:00 AM",
    unread: false,
    icon: FaClock,
    color: "bg-red-50 text-red-600",
    link: "/admin/inquiries",
  },
];

const NotificationsPage = () => {
  const unreadNotifications = notifications.filter(
    (notification) => notification.unread,
  );

  const readNotifications = notifications.filter(
    (notification) => !notification.unread,
  );

  const stats = [
    {
      title: "Total Notifications",
      value: notifications.length,
      icon: FaBell,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Unread Notifications",
      value: unreadNotifications.length,
      icon: FaEnvelope,
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "Read Notifications",
      value: readNotifications.length,
      icon: FaCheckDouble,
      color: "bg-green-50 text-green-600",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-extrabold text-brand md:text-3xl">
            Notifications
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Stay updated with important activities and system notifications.
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-700">
          <FaCheckDouble />
          Mark All as Read
        </button>
      </div>

      {/* Statistics */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
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
                  <Icon />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Notification Toolbar */}
      <div className="flex flex-col justify-between gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:flex-row sm:items-center">
        <div>
          <h2 className="text-lg font-bold text-brand">All Notifications</h2>
          <p className="mt-1 text-sm text-gray-500">
            Review your recent website and project activities.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-600 transition hover:border-accent hover:text-accent">
            <FaFilter />
            All Notifications
          </button>

          <button className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-600 transition hover:border-accent hover:text-accent">
            <FaEnvelope />
            Unread
          </button>
        </div>
      </div>

      {/* Notification List */}
      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        <div className="border-b border-gray-100 px-5 py-4">
          <h3 className="font-bold text-brand">Recent Activity</h3>
        </div>

        <div className="divide-y divide-gray-100">
          {notifications.map((notification) => {
            const Icon = notification.icon;

            return (
              <div
                key={notification.id}
                className={`flex flex-col gap-4 p-5 transition hover:bg-gray-50 sm:flex-row sm:items-start ${
                  notification.unread ? "bg-blue-50/30" : "bg-white"
                }`}
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg ${notification.color}`}
                >
                  <Icon />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="font-bold text-brand">
                      {notification.title}
                    </h4>

                    {notification.unread && (
                      <span className="h-2 w-2 rounded-full bg-blue-500" />
                    )}

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-500">
                      {notification.category}
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {notification.message}
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
                    <FaClock />
                    {notification.date} at {notification.time}
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <button
                    type="button"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold text-brand transition hover:bg-blue-50"
                  >
                    View
                    <FaArrowRight />
                  </button>

                  <button
                    type="button"
                    title="Delete notification"
                    className="rounded-lg p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
