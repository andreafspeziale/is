import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { getPublishedPosts } from "@/lib/blog"
import { formatDate } from "@/lib/utils"

const posts = getPublishedPosts(3)

export function BlogSection() {
  return (
    <section className="animate-fade-in-up">
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-2xl font-semibold flex items-center text-text">
          <span className="text-accent accent-glow mr-2">/</span> blog
        </h2>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-accent hover:underline group"
        >
          all posts{" "}
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
      <div className="space-y-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col gap-1"
          >
            <span className="text-sm text-overlay1 tabular-nums">
              {formatDate(post.metadata.date)}
            </span>
            <span className="text-subtext1 group-hover:text-accent transition-colors duration-200">
              {post.metadata.title.toLowerCase()}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
