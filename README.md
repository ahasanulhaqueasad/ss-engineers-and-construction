# SS Engineers & Construction

A modern, responsive corporate website for **SS Engineers & Construction**, designed to showcase engineering services, construction projects, company information, and client inquiry options.

## 🚀 Project Overview

This project is a frontend-focused corporate website built to establish a professional online presence for an engineering and construction company.

Visitors can explore services, browse projects, learn about the company, and submit contact or quotation inquiries through the website interface.

## ✨ Features

### Public Website
- Modern and responsive homepage
- About Us page
- Services listing and service details
- Projects portfolio and project details
- Contact page
- Request a Quote page
- Privacy Policy and Terms & Conditions
- Thank You page
- Custom 404 Not Found page
- Responsive navigation and footer
- Dynamic page SEO metadata
- Sitemap generation
- Robots.txt configuration

### Admin Dashboard UI
- Admin dashboard overview
- Inquiry management interface
- Client management
- Project management
- Services management
- Portfolio management
- Team management
- Testimonials management
- Messages management
- FAQ management
- Notifications
- Activity log
- Roles and permissions UI
- Export center
- Admin settings

> **Note:** Admin dashboard and form interfaces are currently frontend implementations. Backend integration, database persistence, and secure authentication are planned for a future phase.

## 🛠️ Technologies Used

- React
- Vite
- React Router DOM
- Tailwind CSS
- DaisyUI
- Motion
- React Icons
- Recharts
- React Helmet Async
- i18next

## 📁 Project Structure

```text
src/
├── assets/
├── components/
│   ├── common/
│   └── layout/
├── data/
├── pages/
├── AdminDashboard/
├── App.jsx
├── main.jsx
└── index.css

public/
├── robots.txt
└── sitemap.xml

scripts/
└── generate-sitemap.js
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project

```bash
cd ss-engineers-client
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the project root:

```env
VITE_SITE_URL=https://your-domain.com
```

Replace the URL with your actual deployed website URL.

### 5. Start Development Server

```bash
npm run dev
```

### 6. Build for Production

```bash
npm run build
```

### 7. Generate Sitemap

```bash
npm run generate:sitemap
```

## 📌 Project Status

**Current Phase:** Frontend Development

- [x] Public website UI
- [x] Admin dashboard UI
- [x] Responsive layouts
- [x] Dynamic SEO metadata
- [x] Sitemap generator
- [x] Robots.txt
- [ ] Structured Data (JSON-LD)
- [ ] Complete website QA
- [ ] Backend API integration
- [ ] Database integration
- [ ] Secure admin authentication
- [ ] Contact and quotation form integration
- [ ] Production deployment

## 🔮 Planned Backend Features

- Secure admin authentication
- MongoDB database integration
- Contact inquiry management
- Quotation request management
- Admin CRUD operations
- Image and document uploads
- Email notifications
- Role-based access control

## 🌐 Deployment

The frontend is intended to be deployed using **Vercel**.

Production deployment will follow after frontend testing and backend integration.

## 📄 License

This project is developed for SS Engineers & Construction. All rights reserved unless otherwise specified.

---

**Developed with React & Vite.**
