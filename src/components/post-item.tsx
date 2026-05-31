import { type MDXFileData } from "@/lib/blog"
import Link from "next/link"
import { formatDate } from "@/lib/utils"

export function PostItem({ post }: { post: MDXFileData }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      prefetch={true}
      className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 rounded-lg p-3 -mx-3 transition-colors duration-200 hover:bg-mantle/50"
    >
      <span className="text-sm text-overlay1 sm:w-28 shrink-0 tabular-nums">
        {formatDate(post.metadata.date)}
      </span>
      <span className="text-subtext1 group-hover:text-accent transition-colors duration-200">
        {post.metadata.title.toLowerCase()}
      </span>
    </Link>
  )
}
