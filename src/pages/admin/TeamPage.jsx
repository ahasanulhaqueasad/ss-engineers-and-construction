import {
  FaPlus,
  FaSearch,
  FaUsers,
  FaUserCheck,
  FaGlobe,
  FaEye,
  FaEdit,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

import team from "../../data/team.json";

const TeamPage = () => {
  const publishedMembers = team.filter((member) => member.published !== false);

  const activeMembers = team.filter((member) => member.status !== "Inactive");

  const stats = [
    {
      title: "Total Members",
      value: team.length,
      icon: <FaUsers />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Active Members",
      value: activeMembers.length,
      icon: <FaUserCheck />,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Published Members",
      value: publishedMembers.length,
      icon: <FaGlobe />,
      color: "bg-orange-50 text-orange-600",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-extrabold text-brand md:text-3xl">
            Team Management
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Manage your company team members and professional profiles.
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-100 transition hover:bg-orange-600">
          <FaPlus />
          Add Team Member
        </button>
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

      {/* Team Members */}
      <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">
        {/* Toolbar */}
        <div className="flex flex-col gap-4 border-b border-gray-100 p-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-lg font-bold text-brand">All Team Members</h2>

            <p className="mt-1 text-sm text-gray-500">
              Manage your professional team profiles.
            </p>
          </div>

          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              placeholder="Search team members..."
              className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-accent sm:w-72"
            />
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid gap-6 p-5 sm:grid-cols-2 xl:grid-cols-3">
          {team.map((member) => {
            const isPublished = member.published !== false;
            const isActive = member.status !== "Inactive";

            return (
              <div
                key={member.id}
                className="overflow-hidden rounded-2xl border border-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Profile */}
                <div className="relative bg-surface px-5 pb-5 pt-7 text-center">
                  <span
                    className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-bold ${
                      isPublished
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {isPublished ? "Published" : "Draft"}
                  </span>

                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full border-4 border-white bg-gray-200 shadow-md">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-brand">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-accent">
                    {member.position || member.role || "Team Member"}
                  </p>

                  <span
                    className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                      isActive
                        ? "bg-green-50 text-green-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {isActive ? "Active" : "Inactive"}
                  </span>
                </div>

                {/* Contact Information */}
                <div className="space-y-3 p-5">
                  {member.email && (
                    <p className="flex items-center gap-3 text-sm text-gray-500">
                      <FaEnvelope className="shrink-0 text-accent" />
                      <span className="truncate">{member.email}</span>
                    </p>
                  )}

                  {member.phone && (
                    <p className="flex items-center gap-3 text-sm text-gray-500">
                      <FaPhone className="shrink-0 text-accent" />
                      {member.phone}
                    </p>
                  )}

                  {/* Actions */}
                  <div className="flex gap-3 border-t border-gray-100 pt-4">
                    <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700">
                      <FaEye />
                      View
                    </button>

                    <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 px-3 py-2.5 text-sm font-semibold text-gray-600 transition hover:border-accent hover:text-accent">
                      <FaEdit />
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {team.length === 0 && (
          <div className="p-12 text-center">
            <FaUsers className="mx-auto text-4xl text-gray-300" />

            <h3 className="mt-4 font-bold text-brand">No Team Members Found</h3>

            <p className="mt-2 text-sm text-gray-500">
              Add your first team member to get started.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamPage;
