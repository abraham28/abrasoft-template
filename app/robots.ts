import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private/", "/admin/"], // Add any other disallowed paths
      },
    ],
    sitemap: "https://abrasoft.com/sitemap.xml",
  };
}
