import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import "./index.css";
import "./i18n";

// Public Layout
import SiteLayout from "./components/layout/SiteLayout";
import MainLayout from "./components/layout/MainLayout";

// Public Pages
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ContactPage from "./pages/ContactPage";
import RequestQuotePage from "./pages/RequestQuotePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";
import ThankYouPage from "./pages/ThankYouPage";
import NotFoundPage from "./pages/NotFoundPage";

// Admin Layout
import AdminLayout from "./components/admin/AdminLayout";

// Admin Pages
import DashboardPage from "./pages/admin/DashboardPage";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import InquiriesPage from "./pages/admin/InquiriesPage";
import InquiryDetailsPage from "./pages/admin/InquiryDetailsPage";
import ClientsPage from "./pages/admin/ClientsPage";
import ClientDetailsPage from "./pages/admin/ClientDetailsPage";
import ProjectDetailsPage from "./pages/admin/ProjectDetailsPage";
import AdminServicesPage from "./pages/admin/AdminServicesPage";
import AdminProjectsPage from "./pages/admin/AdminProjectsPage";
import PortfolioPage from "./pages/admin/PortfolioPage";
import TeamPage from "./pages/admin/TeamPage";
import TestimonialsPage from "./pages/admin/TestimonialsPage";
import MessagesPage from "./pages/admin/MessagesPage";
import SettingsPage from "./pages/admin/SettingsPage";
import FAQPage from "./pages/admin/FAQPage";
import NotificationsPage from "./pages/admin/NotificationsPage";
import ActivityLogPage from "./pages/admin/ActivityLogPage";
import RolesPermissionsPage from "./pages/admin/RolesPermissionsPage";
import ExportPage from "./pages/admin/ExportPage";

const router = createBrowserRouter([
  // Public Website
  {
    path: "/",
    element: <SiteLayout />,
    children: [
      { index: true, element: <MainLayout /> },
      { path: "about", element: <AboutPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "services/:serviceId", element: <ServiceDetailPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "projects/:projectId", element: <ProjectDetailPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "request-quote", element: <RequestQuotePage /> },
      { path: "privacy-policy", element: <PrivacyPolicyPage /> },
      { path: "terms", element: <TermsPage /> },
      { path: "thank-you", element: <ThankYouPage /> },
    ],
  },

  // Admin Login
  {
    path: "/admin/login",
    element: <AdminLoginPage />,
  },

  // Admin Dashboard
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/admin/dashboard" replace />,
      },
      { path: "dashboard", element: <DashboardPage /> },
      { path: "inquiries", element: <InquiriesPage /> },
      { path: "inquiries/:inquiryId", element: <InquiryDetailsPage /> },
      { path: "clients", element: <ClientsPage /> },
      { path: "clients/:clientId", element: <ClientDetailsPage /> },
      { path: "projects", element: <AdminProjectsPage /> },
      { path: "projects/:projectId", element: <ProjectDetailsPage /> },
      { path: "services", element: <AdminServicesPage /> },
      { path: "portfolio", element: <PortfolioPage /> },
      { path: "team", element: <TeamPage /> },
      { path: "testimonials", element: <TestimonialsPage /> },
      { path: "messages", element: <MessagesPage /> },
      { path: "settings", element: <SettingsPage /> },
      { path: "faqs", element: <FAQPage /> },
      { path: "notifications", element: <NotificationsPage /> },
      { path: "activity-log", element: <ActivityLogPage /> },
      { path: "roles-permissions", element: <RolesPermissionsPage /> },
      { path: "exports", element: <ExportPage /> },
    ],
  },

  // 404 Not Found
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
