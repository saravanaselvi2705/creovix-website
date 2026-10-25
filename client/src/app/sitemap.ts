import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.creovixstack.com";

  const routes = [
    "",
    "/about",
    "/services",
    "/stackpilot",
    "/services/web-development",
    "/services/redesign-modernization",
    "/services/software-testing",
    "/services/seo",
    "/services/website-maintenance",
    "/services/event-websites",
    "/portfolio",
    "/case-studies",
    "/process",
    "/testimonials",
    "/blog",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
