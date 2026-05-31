import type { MetadataRoute } from "next"
import { getPublishedPosts } from "@/lib/blog"

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPublishedPosts().map((post) => ({
    url: `https://www.andreafspeziale.is/blog/${post.slug}`,
    lastModified: new Date(post.metadata.date),
  }))

  const pages = ["", "/blog", "/work", "/projects"].map((path) => ({
    url: `https://www.andreafspeziale.is${path}`,
    lastModified: new Date(),
  }))

  return [...pages, ...posts]
}
