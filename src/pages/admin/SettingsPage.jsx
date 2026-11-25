import {
  FaBuilding,
  FaGlobe,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSave,
  FaImage,
  FaCog,
} from "react-icons/fa";

const SettingsPage = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-brand md:text-3xl">
          Website Settings
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Manage your company information and website configuration.
        </p>
      </div>

      {/* Settings Navigation */}
      <div className="flex flex-wrap gap-3">
        {[
          "General",
          "Contact Information",
          "Social Media",
          "Website Branding",
        ].map((item) => (
          <button
            key={item}
            className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-600 transition hover:border-accent hover:text-accent"
          >
            {item}
          </button>
        ))}
      </div>

      {/* General Settings */}
      <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">
        <div className="flex items-center gap-3 border-b border-gray-100 p-5">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-lg text-blue-600">
            <FaBuilding />
          </div>
          <div>
            <h2 className="font-bold text-brand">Company Information</h2>
            <p className="text-xs text-gray-500">
              Basic details about your company.
            </p>
          </div>
        </div>

        <div className="grid gap-5 p-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              placeholder="SS Engineers & Construction"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-accent"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Website URL
            </label>
            <input
              type="url"
              placeholder="https://yourwebsite.com"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-accent"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Company Description
            </label>
            <textarea
              rows="4"
              placeholder="Write a short description about your company..."
              className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-accent"
            />
          </div>
        </div>
      </div>

      {/* Contact Settings */}
      <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">
        <div className="flex items-center gap-3 border-b border-gray-100 p-5">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-lg text-green-600">
            <FaPhone />
          </div>
          <div>
            <h2 className="font-bold text-brand">Contact Information</h2>
            <p className="text-xs text-gray-500">
              Manage your business contact details.
            </p>
          </div>
        </div>

        <div className="grid gap-5 p-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="company@example.com"
                className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none focus:border-accent"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Phone Number
            </label>
            <div className="relative">
              <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="tel"
                placeholder="+8801XXXXXXXXX"
                className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none focus:border-accent"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              WhatsApp Number
            </label>
            <input
              type="tel"
              placeholder="+8801XXXXXXXXX"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-accent"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Business Address
            </label>
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Enter company address"
                className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none focus:border-accent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">
        <div className="flex items-center gap-3 border-b border-gray-100 p-5">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-lg text-purple-600">
            <FaGlobe />
          </div>
          <div>
            <h2 className="font-bold text-brand">Social Media Links</h2>
            <p className="text-xs text-gray-500">
              Add your official social media profiles.
            </p>
          </div>
        </div>

        <div className="grid gap-5 p-5 md:grid-cols-2">
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
              <FaFacebook className="text-blue-600" />
              Facebook
            </label>
            <input
              type="url"
              placeholder="https://facebook.com/yourpage"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-accent"
            />
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
              <FaInstagram className="text-pink-500" />
              Instagram
            </label>
            <input
              type="url"
              placeholder="https://instagram.com/yourprofile"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-accent"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
              <FaLinkedin className="text-blue-700" />
              LinkedIn
            </label>
            <input
              type="url"
              placeholder="https://linkedin.com/company/yourcompany"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-accent"
            />
          </div>
        </div>
      </div>

      {/* Branding */}
      <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">
        <div className="flex items-center gap-3 border-b border-gray-100 p-5">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-lg text-orange-600">
            <FaImage />
          </div>
          <div>
            <h2 className="font-bold text-brand">Website Branding</h2>
            <p className="text-xs text-gray-500">
              Manage your company logo and website identity.
            </p>
          </div>
        </div>

        <div className="grid gap-5 p-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Company Logo
            </label>
            <div className="rounded-xl border-2 border-dashed border-gray-200 p-8 text-center transition hover:border-accent">
              <FaImage className="mx-auto text-3xl text-gray-300" />
              <p className="mt-3 text-sm font-semibold text-gray-600">
                Upload Company Logo
              </p>
              <p className="mt-1 text-xs text-gray-400">PNG, JPG or SVG</p>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Favicon
            </label>
            <div className="rounded-xl border-2 border-dashed border-gray-200 p-8 text-center transition hover:border-accent">
              <FaCog className="mx-auto text-3xl text-gray-300" />
              <p className="mt-3 text-sm font-semibold text-gray-600">
                Upload Website Favicon
              </p>
              <p className="mt-1 text-xs text-gray-400">ICO, PNG or SVG</p>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-bold text-white shadow-lg shadow-orange-100 transition hover:bg-orange-600">
          <FaSave />
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
