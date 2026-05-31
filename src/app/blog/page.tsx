import { ScrambleText } from "@/components/scramble-text"
import { PostItem } from "@/components/post-item"
import { getPublishedPosts } from "@/lib/blog"
import { Metadata } from "next"

const posts = getPublishedPosts()

export default async function BlogPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-8 text-text">
        <span className="text-accent accent-glow mr-2">/</span>
        <ScrambleText text="blog" />
      </h1>

      <p className="text-overlay2 mb-6 leading-relaxed">
        i used to tell stories about my technical challenges.
      </p>

      <div className="space-y-4">
        {posts.map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  title: "Blog",
  description: "Writings on programming, computer science, and more.",
  openGraph: {
    images: [
      {
        url: "https://www.andreafspeziale.is/og/home?title=blog",
      },
    ],
  },
}
