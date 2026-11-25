import {
  FaSearch,
  FaEnvelope,
  FaEnvelopeOpen,
  FaEye,
  FaTrash,
  FaReply,
  FaInbox,
  FaPhone,
  FaCalendarAlt,
} from "react-icons/fa";

import messages from "../../data/messages";

const statusStyles = {
  Unread: "bg-blue-50 text-blue-700",
  Read: "bg-gray-100 text-gray-600",
  Replied: "bg-green-50 text-green-700",
};

const MessagesPage = () => {
  const unreadMessages = messages.filter(
    (message) => message.status === "Unread",
  );

  const repliedMessages = messages.filter(
    (message) => message.status === "Replied",
  );

  const stats = [
    {
      title: "Total Messages",
      value: messages.length,
      icon: <FaInbox />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Unread Messages",
      value: unreadMessages.length,
      icon: <FaEnvelope />,
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "Replied Messages",
      value: repliedMessages.length,
      icon: <FaEnvelopeOpen />,
      color: "bg-green-50 text-green-600",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-brand md:text-3xl">
          Messages Management
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Manage and respond to messages received from your website.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={index}
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
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Messages Content */}
      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        {/* Toolbar */}
        <div className="flex flex-col gap-4 border-b border-gray-100 p-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-lg font-bold text-brand">Inbox Messages</h2>

            <p className="mt-1 text-sm text-gray-500">
              All contact form submissions.
            </p>
          </div>

          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              placeholder="Search messages..."
              className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-accent sm:w-72"
            />
          </div>
        </div>

        {/* Message List */}
        <div className="divide-y divide-gray-100">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`p-5 transition hover:bg-gray-50 ${
                message.status === "Unread" ? "bg-blue-50/30" : ""
              }`}
            >
              <div className="flex flex-col gap-4 xl:flex-row xl:items-start">
                {/* Message Information */}
                <div className="flex min-w-0 flex-1 gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface text-lg font-bold text-brand">
                    {message.name.charAt(0)}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold text-brand">{message.name}</h3>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${
                          statusStyles[message.status] ||
                          "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {message.status}
                      </span>
                    </div>

                    <p className="mt-1 text-xs text-gray-500">
                      {message.email}
                    </p>

                    <h4 className="mt-3 text-sm font-bold text-gray-700">
                      {message.subject}
                    </h4>

                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
                      {message.message}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-2">
                        <FaCalendarAlt />
                        {message.date}
                      </span>

                      <span className="flex items-center gap-2">
                        <FaPhone />
                        {message.phone}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-2 xl:justify-end">
                  <button className="flex items-center gap-2 rounded-xl bg-brand px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-700">
                    <FaEye />
                    View
                  </button>

                  <button className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2.5 text-xs font-semibold text-gray-600 transition hover:border-accent hover:text-accent">
                    <FaReply />
                    Reply
                  </button>

                  <button className="flex items-center gap-2 rounded-xl border border-red-100 px-3 py-2.5 text-xs font-semibold text-red-500 transition hover:bg-red-50">
                    <FaTrash />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {messages.length === 0 && (
          <div className="p-12 text-center">
            <FaInbox className="mx-auto text-4xl text-gray-300" />

            <h3 className="mt-4 font-bold text-brand">Your Inbox Is Empty</h3>

            <p className="mt-2 text-sm text-gray-500">
              New website messages will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagesPage;
