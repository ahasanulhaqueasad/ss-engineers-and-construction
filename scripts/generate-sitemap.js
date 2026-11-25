import "dotenv/config";

import process from "node:process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import services from "../src/data/services.json" with { type: "json" };
import projects from "../src/data/projects.json" with { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = process.env.VITE_SITE_URL?.replace(/\/$/, "");

if (!SITE_URL || !SITE_URL.startsWith("https://")) {
  throw new Error("Please set a valid HTTPS VITE_SITE_URL in your .env file.");
}

const staticRoutes = [
  "/",
  "/about",
  "/services",
  "/projects",
  "/contact",
  "/request-quote",
];

const serviceRoutes = services.map((service) => `/services/${service.id}`);

const projectRoutes = projects
  .filter(
    (project) => project.published === true && project.showOnWebsite === true,
  )
  .map((project) => `/projects/${project.id}`);

const allRoutes = [...staticRoutes, ...serviceRoutes, ...projectRoutes];

const escapeXML = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const urls = allRoutes
  .map(
    (route) => `
  <url>
    <loc>${escapeXML(`${SITE_URL}${route}`)}</loc>
  </url>`,
  )
  .join("");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

const outputPath = path.join(__dirname, "../public/sitemap.xml");

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, sitemap.trim(), "utf8");

console.log(`Sitemap generated successfully: ${allRoutes.length} URLs`);
