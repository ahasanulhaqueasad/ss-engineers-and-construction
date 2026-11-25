import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import services from "../../data/services.json";
import projects from "../../data/projects.json";

const SITE_NAME = "SS Engineers & Construction";
const SITE_URL = import.meta.env.VITE_SITE_URL || "";

const pageSEO = {
  "/": {
    title: "Home",
    description:
      "SS Engineers & Construction provides engineering, architectural design, construction and project management services.",
  },
  "/about": {
    title: "About Us",
    description:
      "Learn about SS Engineers & Construction, our mission, vision, values and commitment to quality engineering and construction.",
  },
  "/services": {
    title: "Our Services",
    description:
      "Explore architectural design, structural design, civil construction, interior design and other engineering services.",
  },
  "/projects": {
    title: "Our Projects",
    description:
      "Explore engineering, architectural and construction projects by SS Engineers & Construction.",
  },
  "/contact": {
    title: "Contact Us",
    description:
      "Contact SS Engineers & Construction for engineering, architectural design and construction inquiries.",
  },
  "/request-quote": {
    title: "Request a Quote",
    description:
      "Request a project quotation from SS Engineers & Construction. Share your project requirements with our team.",
  },
  "/privacy-policy": {
    title: "Privacy Policy",
    description: "Read the privacy policy of SS Engineers & Construction.",
  },
  "/terms": {
    title: "Terms and Conditions",
    description:
      "Read the terms and conditions of SS Engineers & Construction.",
  },
  "/thank-you": {
    title: "Thank You",
    description: "Thank you for contacting SS Engineers & Construction.",
    noIndex: true,
  },
};

const SEO = () => {
  const { pathname } = useLocation();

  let currentPage = pageSEO[pathname];

  if (pathname.startsWith("/services/")) {
    const serviceId = pathname.split("/").filter(Boolean).pop();
    const service = services.find(
      (item) => String(item.id) === String(serviceId),
    );

    currentPage = service
      ? {
          title: service.title,
          description:
            service.description ||
            `Explore ${service.title} services from SS Engineers & Construction.`,
        }
      : {
          title: "Service Details",
          description: "Explore our engineering and construction services.",
        };
  }

  if (pathname.startsWith("/projects/")) {
    const projectId = pathname.split("/").filter(Boolean).pop();
    const project = projects.find(
      (item) => String(item.id) === String(projectId),
    );

    currentPage = project
      ? {
          title: project.title,
          description:
            project.description ||
            `Explore the ${project.title} project by SS Engineers & Construction.`,
        }
      : {
          title: "Project Details",
          description: "Explore our engineering and construction projects.",
        };
  }

  if (pathname.startsWith("/admin")) {
    currentPage = {
      title: "Admin Dashboard",
      description: "Administration panel.",
      noIndex: true,
    };
  }

  if (!currentPage) {
    currentPage = {
      title: "Page Not Found",
      description: "The requested page could not be found.",
      noIndex: true,
    };
  }

  const fullTitle =
    currentPage.title === "Home"
      ? `${SITE_NAME} | Engineering & Construction`
      : `${currentPage.title} | ${SITE_NAME}`;

  const canonicalURL = SITE_URL
    ? `${SITE_URL.replace(/\/$/, "")}${pathname}`
    : "";

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta name="description" content={currentPage.description} />

      {canonicalURL && <link rel="canonical" href={canonicalURL} />}

      <meta
        name="robots"
        content={currentPage.noIndex ? "noindex, nofollow" : "index, follow"}
      />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={currentPage.description} />

      {canonicalURL && <meta property="og:url" content={canonicalURL} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={currentPage.description} />
    </Helmet>
  );
};

export default SEO;
