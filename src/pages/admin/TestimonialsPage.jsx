import {
  FaPlus,
  FaSearch,
  FaStar,
  FaQuoteLeft,
  FaEye,
  FaEdit,
  FaGlobe,
  FaRegStar,
} from "react-icons/fa";

import testimonials from "../../data/testimonials.json";

const TestimonialsPage = () => {
  const publishedTestimonials = testimonials.filter(
    (item) => item.published !== false,
  );

  const averageRating =
    testimonials.length > 0
      ? (
          testimonials.reduce(
            (total, item) => total + Number(item.rating || 0),
            0,
          ) / testimonials.length
        ).toFixed(1)
      : "0.0";

  const stats = [
    {
      title: "Total Reviews",
      value: testimonials.length,
      icon: <FaQuoteLeft />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Published Reviews",
      value: publishedTestimonials.length,
      icon: <FaGlobe />,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Average Rating",
      value: averageRating,
      icon: <FaStar />,
      color: "bg-orange-50 text-orange-600",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-extrabold text-brand md:text-3xl">
            Testimonials Management
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Manage client reviews, feedback and testimonials.
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-100 transition hover:bg-orange-600">
          <FaPlus />
          Add Testimonial
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
                  {stat.title === "Average Rating" && (
                    <span className="ml-1 text-base text-gray-400">/ 5</span>
                  )}
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

      {/* Testimonials List */}
      <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">
        {/* Toolbar */}
        <div className="flex flex-col gap-4 border-b border-gray-100 p-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-lg font-bold text-brand">All Testimonials</h2>

            <p className="mt-1 text-sm text-gray-500">
              Review and manage client feedback.
            </p>
          </div>

          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              placeholder="Search testimonials..."
              className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-accent sm:w-72"
            />
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid gap-6 p-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => {
            const isPublished = item.published !== false;

            return (
              <div
                key={item.id}
                className="flex flex-col rounded-2xl border border-gray-100 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-xl text-accent">
                    <FaQuoteLeft />
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      isPublished
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {isPublished ? "Published" : "Draft"}
                  </span>
                </div>

                {/* Rating */}
                <div className="mt-5 flex items-center gap-1 text-sm text-orange-400">
                  {Array.from({ length: 5 }).map((_, index) =>
                    index < Number(item.rating || 0) ? (
                      <FaStar key={index} />
                    ) : (
                      <FaRegStar key={index} />
                    ),
                  )}

                  <span className="ml-2 font-semibold text-gray-500">
                    {item.rating || 0}/5
                  </span>
                </div>

                {/* Review */}
                <p className="mt-4 flex-1 text-sm leading-7 text-gray-600">
                  “
                  {item.review ||
                    item.message ||
                    item.feedback ||
                    "No review provided."}
                  ”
                </p>

                {/* Client */}
                <div className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-5">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center font-bold text-brand">
                        {item.name?.charAt(0) || "C"}
                      </div>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-bold text-brand">
                      {item.name || "Anonymous Client"}
                    </h3>

                    <p className="mt-1 truncate text-xs text-gray-500">
                      {item.position ||
                        item.designation ||
                        item.company ||
                        "Client"}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-5 flex gap-3">
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
            );
          })}
        </div>

        {testimonials.length === 0 && (
          <div className="p-12 text-center">
            <FaQuoteLeft className="mx-auto text-4xl text-gray-300" />

            <h3 className="mt-4 font-bold text-brand">No Testimonials Found</h3>

            <p className="mt-2 text-sm text-gray-500">
              Add your first client testimonial.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialsPage;
