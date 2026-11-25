import {
  FaPlus,
  FaSearch,
  FaQuestionCircle,
  FaGlobe,
  FaEye,
  FaEdit,
  FaTrash,
  FaLayerGroup,
} from "react-icons/fa";

const faqs = [
  {
    id: 1,
    question: "How can I request a construction quotation?",
    answer:
      "You can submit a request through our Request a Quote form or contact our team directly.",
    category: "General",
    published: true,
  },
  {
    id: 2,
    question: "What construction services do you provide?",
    answer:
      "We provide architectural design, structural design, civil construction, interior design and other engineering services.",
    category: "Services",
    published: true,
  },
  {
    id: 3,
    question: "Do you provide project cost estimation?",
    answer:
      "Our team can prepare project cost estimates based on your requirements and project specifications.",
    category: "Services",
    published: true,
  },
  {
    id: 4,
    question: "How long does a construction project take?",
    answer:
      "Project duration depends on project size, design complexity, site conditions and other requirements.",
    category: "Projects",
    published: true,
  },
  {
    id: 5,
    question: "Can I track my project progress?",
    answer:
      "Project progress updates can be coordinated with the assigned project management team.",
    category: "Projects",
    published: false,
  },
];

const FAQPage = () => {
  const publishedFAQs = faqs.filter((faq) => faq.published);

  const draftFAQs = faqs.filter((faq) => !faq.published);

  const stats = [
    {
      title: "Total FAQs",
      value: faqs.length,
      icon: <FaQuestionCircle />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Published FAQs",
      value: publishedFAQs.length,
      icon: <FaGlobe />,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Draft FAQs",
      value: draftFAQs.length,
      icon: <FaLayerGroup />,
      color: "bg-orange-50 text-orange-600",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-extrabold text-brand md:text-3xl">
            FAQ Management
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Manage frequently asked questions displayed on your website.
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-100 transition hover:bg-orange-600">
          <FaPlus />
          Add New FAQ
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

      {/* FAQ Table */}
      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        {/* Toolbar */}
        <div className="flex flex-col gap-4 border-b border-gray-100 p-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-lg font-bold text-brand">
              All Frequently Asked Questions
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Organize and manage your website FAQs.
            </p>
          </div>

          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search FAQs..."
              className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-accent sm:w-72"
            />
          </div>
        </div>

        {/* Content */}
        <div className="divide-y divide-gray-100">
          {faqs.map((faq) => (
            <div key={faq.id} className="p-5 transition hover:bg-gray-50">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-sm font-bold text-accent">
                      Q
                    </span>

                    <h3 className="font-bold text-brand">{faq.question}</h3>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        faq.published
                          ? "bg-green-100 text-green-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {faq.published ? "Published" : "Draft"}
                    </span>
                  </div>

                  <p className="mt-3 pl-10 text-sm leading-7 text-gray-500">
                    {faq.answer}
                  </p>

                  <div className="mt-3 flex items-center gap-2 pl-10 text-xs text-gray-400">
                    <FaLayerGroup className="text-accent" />
                    {faq.category}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-2 lg:justify-end">
                  <button className="flex items-center gap-2 rounded-xl bg-brand px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-700">
                    <FaEye />
                    View
                  </button>

                  <button className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2.5 text-xs font-semibold text-gray-600 transition hover:border-accent hover:text-accent">
                    <FaEdit />
                    Edit
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

        {faqs.length === 0 && (
          <div className="p-12 text-center">
            <FaQuestionCircle className="mx-auto text-4xl text-gray-300" />
            <h3 className="mt-4 font-bold text-brand">No FAQs Found</h3>
            <p className="mt-2 text-sm text-gray-500">
              Add your first frequently asked question.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQPage;
