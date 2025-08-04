// generate-sitemap.js
const fs = require("fs");
const path = require("path");

const domain = "https://www.conqueric.com";

const staticRoutes = [
  "/",
  "/about",
  "/services",
  "/projects",
  "/blog",
  "/contact",
  "/privacy-policy",
  "/terms-condition",
  "/solutions",
  "/business-solutions",
  "/ecommere-web-solutions-with-conqueric",
];

const getCurrentDate = () => new Date().toISOString().split("T")[0];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes
  .map(
    (route) => `
  <url>
    <loc>${domain}${route}</loc>
    <lastmod>${getCurrentDate()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join("")}
</urlset>`;

fs.writeFileSync(path.join(__dirname, "public", "sitemap.xml"), sitemapContent, "utf8");

console.log("✅ Sitemap generated at /public/sitemap.xml");
