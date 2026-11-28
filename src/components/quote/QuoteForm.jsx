import { useMemo, useState } from "react";
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaBuilding,
  FaMapMarkerAlt,
  FaLayerGroup,
  FaWallet,
  FaCalendarAlt,
  FaCloudUploadAlt,
  FaFileAlt,
  FaCommentDots,
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaTrash,
  FaPaperclip,
  FaRulerCombined,
  FaClipboardCheck,
  FaDraftingCompass,
  FaHardHat,
  FaImages,
  FaFolderOpen,
  FaWhatsapp,
} from "react-icons/fa";

import services from "../../data/services.json";

const COMPANY_WHATSAPP = "8801838041204";
const COMPANY_EMAIL = "ahasanulhaque204@gmail.com";

const steps = [
  { number: 1, title: "Personal Information" },
  { number: 2, title: "Project Details" },
  { number: 3, title: "Attachments" },
  { number: 4, title: "Review & Submit" },
];

const attachmentCategories = [
  {
    id: "architectural",
    title: "Architectural Drawing",
    description: "Floor plans, elevations and architectural layouts",
    icon: FaDraftingCompass,
    accept: ".pdf,.jpg,.jpeg,.png,.dwg",
    extensions: ["pdf", "jpg", "jpeg", "png", "dwg"],
  },
  {
    id: "structural",
    title: "Structural Drawing",
    description: "Structural plans, foundation and reinforcement drawings",
    icon: FaHardHat,
    accept: ".pdf,.jpg,.jpeg,.png,.dwg",
    extensions: ["pdf", "jpg", "jpeg", "png", "dwg"],
  },
  {
    id: "siteImages",
    title: "Site Images",
    description: "Photos of your project site or existing building",
    icon: FaImages,
    accept: ".jpg,.jpeg,.png",
    extensions: ["jpg", "jpeg", "png"],
  },
  {
    id: "otherDocs",
    title: "Other Documents",
    description: "Additional project documents and reference files",
    icon: FaFolderOpen,
    accept: ".pdf,.jpg,.jpeg,.png,.dwg,.docx",
    extensions: ["pdf", "jpg", "jpeg", "png", "dwg", "docx"],
  },
];

const initialFormData = {
  fullName: "",
  phone: "",
  email: "",
  companyName: "",
  address: "",
  contactMethod: "Phone",
  projectName: "",
  serviceType: "",
  projectLocation: "",
  projectSize: "",
  projectSizeUnit: "sq ft",
  budget: "",
  expectedStartDate: "",
  description: "",
};

const inputClass =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-brand outline-none transition placeholder:text-muted focus:border-accent focus:ring-4 focus:ring-accent/10";

const labelClass = "mb-2 block text-sm font-semibold text-brand";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const MAX_TOTAL_SIZE = 25 * 1024 * 1024;

const normalizePhone = (phone) => phone.replace(/[\s-]/g, "");

const isValidBangladeshiPhone = (phone) => {
  const normalized = normalizePhone(phone);

  return /^(?:\+8801|8801|01)[3-9]\d{8}$/.test(normalized);
};

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const QuoteForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState({});
  const [fileFeedback, setFileFeedback] = useState("");

  const totalFileSize = useMemo(
    () => files.reduce((total, item) => total + item.file.size, 0),
    [files],
  );

  const updateField = (name, value) => {
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  };

  const validateStep = () => {
    const newErrors = {};

    if (currentStep === 1) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = "Please enter your full name.";
      }

      if (!formData.phone.trim()) {
        newErrors.phone = "Please enter your phone number.";
      } else if (!isValidBangladeshiPhone(formData.phone)) {
        newErrors.phone = "Please enter a valid Bangladeshi phone number.";
      }

      if (!formData.email.trim()) {
        newErrors.email = "Please enter your email address.";
      } else if (!isValidEmail(formData.email)) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    if (currentStep === 2) {
      if (!formData.serviceType) {
        newErrors.serviceType = "Please select a service.";
      }

      if (!formData.projectLocation.trim()) {
        newErrors.projectLocation = "Please enter your project location.";
      }

      if (!formData.description.trim()) {
        newErrors.description = "Please describe your project.";
      } else if (formData.description.trim().length < 10) {
        newErrors.description =
          "Please provide at least 10 characters about your project.";
      }

      if (
        formData.projectSize &&
        (!Number.isFinite(Number(formData.projectSize)) ||
          Number(formData.projectSize) <= 0)
      ) {
        newErrors.projectSize = "Project size must be greater than zero.";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateStep()) return;

    setErrors({});
    setCurrentStep((previous) => Math.min(previous + 1, 4));
  };

  const handleBack = () => {
    setErrors({});
    setFileFeedback("");
    setCurrentStep((previous) => Math.max(previous - 1, 1));
  };

  const handleFiles = (selectedFiles, categoryId) => {
    const categoryConfig = attachmentCategories.find(
      (item) => item.id === categoryId,
    );

    if (!categoryConfig) return;

    const incomingFiles = Array.from(selectedFiles || []);
    const acceptedFiles = [];
    const rejectedMessages = [];

    for (const file of incomingFiles) {
      const extension = file.name.split(".").pop()?.toLowerCase();

      if (!categoryConfig.extensions.includes(extension)) {
        rejectedMessages.push(
          `${file.name}: Unsupported file type for ${categoryConfig.title}.`,
        );
        continue;
      }

      if (file.size === 0) {
        rejectedMessages.push(`${file.name}: Empty files are not allowed.`);
        continue;
      }

      if (file.size > MAX_FILE_SIZE) {
        rejectedMessages.push(`${file.name}: Maximum file size is 10 MB.`);
        continue;
      }

      const alreadyAdded = files.some(
        (item) =>
          item.category === categoryId &&
          item.file.name === file.name &&
          item.file.size === file.size,
      );

      const alreadySelected = acceptedFiles.some(
        (item) =>
          item.category === categoryId &&
          item.file.name === file.name &&
          item.file.size === file.size,
      );

      if (alreadyAdded || alreadySelected) {
        rejectedMessages.push(`${file.name}: File already selected.`);
        continue;
      }

      acceptedFiles.push({
        file,
        category: categoryId,
      });
    }

    let allowedFiles = [];
    let projectedSize = totalFileSize;

    for (const item of acceptedFiles) {
      if (projectedSize + item.file.size > MAX_TOTAL_SIZE) {
        rejectedMessages.push(
          `${item.file.name}: Total attachment size cannot exceed 25 MB.`,
        );
        continue;
      }

      allowedFiles.push(item);
      projectedSize += item.file.size;
    }

    if (allowedFiles.length > 0) {
      setFiles((previous) => [...previous, ...allowedFiles]);
    }

    setFileFeedback(
      rejectedMessages.length > 0
        ? rejectedMessages.join(" ")
        : allowedFiles.length > 0
          ? `${allowedFiles.length} file(s) added successfully.`
          : "",
    );

    setErrors((previous) => ({
      ...previous,
      files: "",
    }));
  };

  const handleFileChange = (event, categoryId) => {
    handleFiles(event.target.files, categoryId);
    event.target.value = "";
  };

  const handleFileDrop = (event, categoryId) => {
    event.preventDefault();
    handleFiles(event.dataTransfer.files, categoryId);
  };

  const removeFile = (indexToRemove) => {
    const removedFile = files[indexToRemove];

    setFiles((previous) =>
      previous.filter((_, index) => index !== indexToRemove),
    );

    setFileFeedback(
      removedFile ? `${removedFile.file.name} removed successfully.` : "",
    );

    setErrors((previous) => ({
      ...previous,
      files: "",
    }));
  };

  const formatFileSize = (size) => {
    if (size < 1024 * 1024) {
      return `${(size / 1024).toFixed(1)} KB`;
    }

    return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  };

  const buildInquiryMessage = () => {
    const attachmentDetails =
      files.length > 0
        ? files
            .map((item, index) => {
              const category = attachmentCategories.find(
                (categoryItem) => categoryItem.id === item.category,
              );

              return `${index + 1}. ${item.file.name} (${category?.title || "Other"})`;
            })
            .join("\n")
        : "No attachments added.";

    return `NEW PROJECT INQUIRY
SS Engineers & Construction

PERSONAL INFORMATION
Full Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email}
Company: ${formData.companyName || "Not provided"}
Address: ${formData.address || "Not provided"}
Preferred Contact: ${formData.contactMethod}

PROJECT INFORMATION
Project Name: ${formData.projectName || "Not provided"}
Service: ${formData.serviceType}
Project Location: ${formData.projectLocation}
Project Size: ${
      formData.projectSize
        ? `${formData.projectSize} ${formData.projectSizeUnit}`
        : "Not provided"
    }
Estimated Budget: ${formData.budget || "Not provided"}
Expected Start Date: ${formData.expectedStartDate || "Not provided"}

PROJECT DESCRIPTION
${formData.description}

ATTACHMENTS
${attachmentDetails}

Note: Attachment files are not included automatically. Please request the files separately from the client.`;
  };

  const handleWhatsAppSubmit = () => {
    const message = buildInquiryMessage();
    const whatsappUrl = `https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleEmailSubmit = () => {
    const subject = `New Project Inquiry - ${formData.fullName}`;
    const body = buildInquiryMessage();

    const mailtoUrl = `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  const renderFieldError = (field) =>
    errors[field] ? (
      <p
        id={`${field}-error`}
        role="alert"
        className="mt-1.5 text-xs font-medium text-red-500"
      >
        {errors[field]}
      </p>
    ) : null;

  const renderInput = ({
    name,
    label,
    icon: Icon,
    placeholder,
    type = "text",
    required = false,
  }) => (
    <div>
      <label className={labelClass} htmlFor={name}>
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </label>

      <div className="relative">
        {Icon && (
          <Icon className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
        )}

        <input
          id={name}
          name={name}
          type={type}
          required={required}
          autoComplete={
            name === "fullName"
              ? "name"
              : name === "phone"
                ? "tel"
                : name === "email"
                  ? "email"
                  : "off"
          }
          value={formData[name]}
          onChange={(event) => updateField(name, event.target.value)}
          placeholder={placeholder}
          aria-invalid={Boolean(errors[name])}
          aria-describedby={errors[name] ? `${name}-error` : undefined}
          className={`${inputClass} ${Icon ? "pl-11" : ""}`}
        />
      </div>

      {renderFieldError(name)}
    </div>
  );

  const renderReviewItem = (label, value) => (
    <div className="flex flex-col gap-1 border-b border-border py-3 last:border-0 sm:flex-row sm:justify-between">
      <span className="text-sm text-muted">{label}</span>

      <span className="break-words text-sm font-semibold text-brand sm:max-w-[60%] sm:text-right">
        {value || "Not provided"}
      </span>
    </div>
  );

  return (
    <section id="quote-form" className="bg-surface px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-accent">
            <FaClipboardCheck />
            Project Inquiry
          </span>

          <h2 className="mb-4 text-3xl font-extrabold text-brand md:text-4xl">
            Tell Us About Your Project
          </h2>

          <p className="text-sm leading-7 text-muted md:text-base">
            Share your project requirements with us. Our team will review your
            information and help you take the next step.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-xl shadow-brand/5">
          {/* Progress */}
          <div className="border-b border-border px-5 py-7 sm:px-8">
            <div className="mb-6 flex items-center justify-between gap-2">
              <p className="text-sm font-bold text-brand">
                Step {currentStep} of 4
              </p>

              <p className="text-sm font-semibold text-accent">
                {Math.round((currentStep / 4) * 100)}% Completed
              </p>
            </div>

            <div className="mb-7 h-2 overflow-hidden rounded-full bg-surface">
              <div
                className="h-full rounded-full bg-accent transition-all duration-500"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              />
            </div>

            <div className="grid grid-cols-4 gap-2">
              {steps.map((step) => {
                const isActive = currentStep === step.number;
                const isComplete = currentStep > step.number;

                return (
                  <div
                    key={step.number}
                    className="flex flex-col items-center gap-2 text-center"
                  >
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold transition ${
                        isActive || isComplete
                          ? "bg-accent text-white"
                          : "bg-surface text-muted"
                      }`}
                    >
                      {isComplete ? <FaCheck /> : step.number}
                    </div>

                    <span
                      className={`hidden text-xs font-semibold sm:block ${
                        isActive ? "text-accent" : "text-muted"
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-5 sm:p-8 lg:p-10">
            {/* Step 1 */}
            {currentStep === 1 && (
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-extrabold text-brand">
                    Personal Information
                  </h3>

                  <p className="mt-2 text-sm text-muted">
                    Let us know how we can contact you.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {renderInput({
                    name: "fullName",
                    label: "Full Name",
                    icon: FaUser,
                    placeholder: "Enter your full name",
                    required: true,
                  })}

                  {renderInput({
                    name: "phone",
                    label: "Phone Number",
                    icon: FaPhoneAlt,
                    placeholder: "+8801XXXXXXXXX",
                    type: "tel",
                    required: true,
                  })}

                  {renderInput({
                    name: "email",
                    label: "Email Address",
                    icon: FaEnvelope,
                    placeholder: "your@email.com",
                    type: "email",
                    required: true,
                  })}

                  {renderInput({
                    name: "companyName",
                    label: "Company Name",
                    icon: FaBuilding,
                    placeholder: "Your company name (optional)",
                  })}

                  {renderInput({
                    name: "address",
                    label: "Your Address",
                    icon: FaMapMarkerAlt,
                    placeholder: "Enter your address",
                  })}

                  <div>
                    <label className={labelClass} htmlFor="contactMethod">
                      Preferred Contact Method
                    </label>

                    <select
                      id="contactMethod"
                      value={formData.contactMethod}
                      onChange={(event) =>
                        updateField("contactMethod", event.target.value)
                      }
                      className={inputClass}
                    >
                      <option value="Phone">Phone Call</option>
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Email">Email</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {currentStep === 2 && (
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-extrabold text-brand">
                    Project Information
                  </h3>

                  <p className="mt-2 text-sm text-muted">
                    Tell us about your project requirements.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {renderInput({
                    name: "projectName",
                    label: "Project Name / Title",
                    icon: FaBuilding,
                    placeholder: "Enter project name",
                  })}

                  <div>
                    <label className={labelClass} htmlFor="serviceType">
                      Service Type
                      <span className="ml-1 text-accent">*</span>
                    </label>

                    <div className="relative">
                      <FaLayerGroup className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />

                      <select
                        id="serviceType"
                        value={formData.serviceType}
                        onChange={(event) =>
                          updateField("serviceType", event.target.value)
                        }
                        className={`${inputClass} pl-11`}
                        aria-invalid={Boolean(errors.serviceType)}
                        aria-describedby={
                          errors.serviceType ? "serviceType-error" : undefined
                        }
                      >
                        <option value="">Select a service</option>

                        {services.map((service) => (
                          <option key={service.id} value={service.title}>
                            {service.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {renderFieldError("serviceType")}
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="projectLocation">
                      Project Location
                      <span className="ml-1 text-accent">*</span>
                    </label>

                    <div className="relative">
                      <FaMapMarkerAlt className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />

                      <input
                        id="projectLocation"
                        value={formData.projectLocation}
                        onChange={(event) =>
                          updateField("projectLocation", event.target.value)
                        }
                        placeholder="District / Area"
                        className={`${inputClass} pl-11`}
                        aria-invalid={Boolean(errors.projectLocation)}
                        aria-describedby={
                          errors.projectLocation
                            ? "projectLocation-error"
                            : undefined
                        }
                      />
                    </div>

                    {renderFieldError("projectLocation")}
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="projectSize">
                      Project Size
                    </label>

                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <FaRulerCombined className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />

                        <input
                          id="projectSize"
                          type="number"
                          min="0"
                          value={formData.projectSize}
                          onChange={(event) =>
                            updateField("projectSize", event.target.value)
                          }
                          placeholder="Enter size"
                          className={`${inputClass} pl-11`}
                          aria-invalid={Boolean(errors.projectSize)}
                          aria-describedby={
                            errors.projectSize ? "projectSize-error" : undefined
                          }
                        />
                      </div>

                      <select
                        aria-label="Project size unit"
                        value={formData.projectSizeUnit}
                        onChange={(event) =>
                          updateField("projectSizeUnit", event.target.value)
                        }
                        className={`${inputClass} w-28`}
                      >
                        <option value="sq ft">sq ft</option>
                        <option value="katha">Katha</option>
                        <option value="storey">Storey</option>
                      </select>
                    </div>

                    {renderFieldError("projectSize")}
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="budget">
                      Estimated Budget
                    </label>

                    <div className="relative">
                      <FaWallet className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />

                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(event) =>
                          updateField("budget", event.target.value)
                        }
                        className={`${inputClass} pl-11`}
                      >
                        <option value="">Select your budget</option>
                        <option value="Below ৳10 Lakh">Below ৳10 Lakh</option>
                        <option value="৳10–50 Lakh">৳10–50 Lakh</option>
                        <option value="৳50 Lakh–1 Crore">
                          ৳50 Lakh–1 Crore
                        </option>
                        <option value="Above ৳1 Crore">Above ৳1 Crore</option>
                        <option value="Not Sure">Not Sure Yet</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="expectedStartDate">
                      Expected Start Date
                    </label>

                    <div className="relative">
                      <FaCalendarAlt className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />

                      <input
                        id="expectedStartDate"
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        value={formData.expectedStartDate}
                        onChange={(event) =>
                          updateField("expectedStartDate", event.target.value)
                        }
                        className={`${inputClass} pl-11`}
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className={labelClass} htmlFor="description">
                      Project Description
                      <span className="ml-1 text-accent">*</span>
                    </label>

                    <div className="relative">
                      <FaCommentDots className="pointer-events-none absolute left-4 top-4 text-muted" />

                      <textarea
                        id="description"
                        rows={5}
                        value={formData.description}
                        onChange={(event) =>
                          updateField("description", event.target.value)
                        }
                        placeholder="Describe your project, requirements, and expectations..."
                        className={`${inputClass} resize-y pl-11`}
                        aria-invalid={Boolean(errors.description)}
                        aria-describedby={
                          errors.description ? "description-error" : undefined
                        }
                      />
                    </div>

                    {renderFieldError("description")}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {currentStep === 3 && (
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-extrabold text-brand">
                    Project Attachments
                  </h3>

                  <p className="mt-2 text-sm text-muted">
                    Upload your project documents under the correct categories.
                  </p>
                </div>

                <div className="mb-6 rounded-xl bg-blue-50 p-4 text-sm leading-6 text-blue-800">
                  <strong>Upload Guidelines:</strong>
                  <ul className="mt-2 list-inside list-disc">
                    <li>Maximum 10 MB per file</li>
                    <li>Maximum 25 MB total upload size</li>
                    <li>Supported formats depend on each category</li>
                  </ul>
                </div>

                <div className="space-y-6">
                  {attachmentCategories.map((category) => {
                    const Icon = category.icon;

                    const categoryFiles = files
                      .map((item, index) => ({ ...item, index }))
                      .filter((item) => item.category === category.id);

                    return (
                      <div
                        key={category.id}
                        className="overflow-hidden rounded-2xl border border-border"
                      >
                        <div className="flex flex-col gap-3 border-b border-border bg-surface/70 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
                          <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-lg text-accent">
                              <Icon />
                            </div>

                            <div>
                              <h4 className="font-bold text-brand">
                                {category.title}
                              </h4>

                              <p className="mt-1 text-xs leading-5 text-muted">
                                {category.description}
                              </p>
                            </div>
                          </div>

                          <span className="w-fit rounded-full bg-white px-3 py-1 text-xs font-semibold text-muted">
                            {categoryFiles.length} file(s)
                          </span>
                        </div>

                        <div className="p-4 sm:p-5">
                          <label
                            htmlFor={`upload-${category.id}`}
                            onDragOver={(event) => event.preventDefault()}
                            onDrop={(event) =>
                              handleFileDrop(event, category.id)
                            }
                            className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-white px-4 py-7 text-center transition hover:border-accent hover:bg-accent/5"
                          >
                            <FaCloudUploadAlt className="mb-3 text-3xl text-accent" />

                            <span className="text-sm font-bold text-brand">
                              Drop files here or click to browse
                            </span>

                            <span className="mt-2 text-xs text-muted">
                              {category.extensions.join(", ").toUpperCase()}
                            </span>

                            <input
                              id={`upload-${category.id}`}
                              type="file"
                              multiple
                              accept={category.accept}
                              onChange={(event) =>
                                handleFileChange(event, category.id)
                              }
                              className="hidden"
                            />
                          </label>

                          {categoryFiles.length > 0 && (
                            <div className="mt-4 space-y-2">
                              {categoryFiles.map((item) => (
                                <div
                                  key={`${category.id}-${item.file.name}-${item.file.size}-${item.index}`}
                                  className="flex items-center justify-between gap-3 rounded-xl border border-border p-3"
                                >
                                  <div className="flex min-w-0 items-center gap-3">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                                      <FaFileAlt />
                                    </div>

                                    <div className="min-w-0">
                                      <p className="truncate text-sm font-semibold text-brand">
                                        {item.file.name}
                                      </p>

                                      <p className="text-xs text-muted">
                                        {formatFileSize(item.file.size)}
                                      </p>
                                    </div>
                                  </div>

                                  <button
                                    type="button"
                                    onClick={() => removeFile(item.index)}
                                    aria-label={`Remove ${item.file.name}`}
                                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-red-500 transition hover:bg-red-50"
                                  >
                                    <FaTrash />
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {fileFeedback && (
                  <p
                    role="status"
                    className={`mt-4 text-sm font-medium ${
                      fileFeedback.includes(":")
                        ? "text-red-500"
                        : "text-green-600"
                    }`}
                  >
                    {fileFeedback}
                  </p>
                )}

                {renderFieldError("files")}

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-surface p-4">
                  <div>
                    <p className="text-sm font-bold text-brand">
                      Total Selected Files: {files.length}
                    </p>

                    <p className="mt-1 text-xs text-muted">
                      {formatFileSize(totalFileSize)} of 25 MB used
                    </p>
                  </div>

                  <div className="h-2 w-full overflow-hidden rounded-full bg-border sm:w-40">
                    <div
                      className="h-full rounded-full bg-accent transition-all"
                      style={{
                        width: `${Math.min(
                          (totalFileSize / MAX_TOTAL_SIZE) * 100,
                          100,
                        )}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4 */}
            {currentStep === 4 && (
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-extrabold text-brand">
                    Review Your Information
                  </h3>

                  <p className="mt-2 text-sm text-muted">
                    Please check your details before proceeding.
                  </p>
                </div>

                <div className="mb-6 rounded-2xl border border-border p-5 sm:p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <FaUser />
                    </div>

                    <h4 className="font-bold text-brand">
                      Personal Information
                    </h4>
                  </div>

                  {renderReviewItem("Full Name", formData.fullName)}
                  {renderReviewItem("Phone", formData.phone)}
                  {renderReviewItem("Email", formData.email)}
                  {renderReviewItem("Company", formData.companyName)}
                  {renderReviewItem("Address", formData.address)}
                  {renderReviewItem(
                    "Preferred Contact",
                    formData.contactMethod,
                  )}
                </div>

                <div className="mb-6 rounded-2xl border border-border p-5 sm:p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <FaBuilding />
                    </div>

                    <h4 className="font-bold text-brand">
                      Project Information
                    </h4>
                  </div>

                  {renderReviewItem("Project Name", formData.projectName)}
                  {renderReviewItem("Service", formData.serviceType)}
                  {renderReviewItem("Location", formData.projectLocation)}

                  {renderReviewItem(
                    "Project Size",
                    formData.projectSize
                      ? `${formData.projectSize} ${formData.projectSizeUnit}`
                      : "",
                  )}

                  {renderReviewItem("Budget", formData.budget)}

                  {renderReviewItem(
                    "Expected Start",
                    formData.expectedStartDate,
                  )}

                  <div className="border-b border-border py-3">
                    <p className="mb-2 text-sm text-muted">
                      Project Description
                    </p>

                    <p className="whitespace-pre-wrap text-sm leading-7 text-brand">
                      {formData.description || "Not provided"}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border p-5 sm:p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <FaPaperclip />
                    </div>

                    <h4 className="font-bold text-brand">
                      Attachments ({files.length})
                    </h4>
                  </div>

                  {files.length === 0 ? (
                    <p className="text-sm text-muted">No attachments added.</p>
                  ) : (
                    <div className="space-y-4">
                      {attachmentCategories.map((category) => {
                        const categoryFiles = files.filter(
                          (item) => item.category === category.id,
                        );

                        if (categoryFiles.length === 0) return null;

                        return (
                          <div key={category.id}>
                            <p className="mb-2 text-sm font-bold text-brand">
                              {category.title}
                            </p>

                            <div className="space-y-2">
                              {categoryFiles.map((item, index) => (
                                <div
                                  key={`${category.id}-${item.file.name}-${index}`}
                                  className="flex items-center justify-between gap-3 text-sm"
                                >
                                  <span className="flex min-w-0 items-center gap-2 truncate text-brand">
                                    <FaFileAlt className="shrink-0 text-accent" />

                                    <span className="truncate">
                                      {item.file.name}
                                    </span>
                                  </span>

                                  <span className="shrink-0 text-xs text-muted">
                                    {formatFileSize(item.file.size)}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div className="mt-6 rounded-xl bg-surface p-4 text-sm leading-6 text-muted">
                  Your inquiry will be prepared in your selected messaging or
                  email application. You will need to press Send there to
                  complete the submission. Uploaded files must be attached
                  separately.
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="mt-10 flex flex-col-reverse justify-between gap-3 border-t border-border pt-7 sm:flex-row">
              <button
                type="button"
                onClick={handleBack}
                disabled={currentStep === 1}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3.5 text-sm font-bold text-brand transition hover:border-brand disabled:cursor-not-allowed disabled:opacity-40"
              >
                <FaArrowLeft />
                Back
              </button>

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-bold text-white transition hover:bg-brand"
                >
                  Continue
                  <FaArrowRight />
                </button>
              ) : (
                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#1DA851]"
                  >
                    <FaWhatsapp className="text-lg" />
                    Send via WhatsApp
                  </button>

                  <button
                    type="button"
                    onClick={handleEmailSubmit}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand"
                  >
                    <FaEnvelope />
                    Send via Email
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs leading-6 text-muted">
          <FaCheck className="mr-1 inline text-green-600" />
          Your inquiry details will be prepared for secure sharing through your
          chosen application.
        </p>
      </div>
    </section>
  );
};

export default QuoteForm;
