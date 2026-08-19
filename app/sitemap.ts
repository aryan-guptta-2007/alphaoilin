import { MetadataRoute } from "next";
import { distillationProducts } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hamburg-int.com";

  const staticRoutes = [
    "",
    "/about",
    "/mission-vision",
    "/careers",
    "/contact",
    "/brand",
    "/products",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const productRoutes = distillationProducts.map((product) => ({
    url: `${baseUrl}${product.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...productRoutes];
}
