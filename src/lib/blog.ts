import fs from "fs"
import path from "path"
import { z } from "zod"

const metadataSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  draft: z
    .enum(["true", "false"])
    .optional()
    .default("false")
    .transform((val) => val === "true"),
})

export type Metadata = z.infer<typeof metadataSchema>

type FrontmatterParseResult = {
  metadata: Metadata
  content: string
}

export type MDXFileData = {
  metadata: Metadata
  content: string
  slug: string
}

function parseFrontmatter(fileContent: string): FrontmatterParseResult {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  const match = frontmatterRegex.exec(fileContent)

  if (!match?.[1]) {
    throw new Error("No frontmatter found")
  }

  const content = fileContent.replace(frontmatterRegex, "").trim()
  const frontmatterLines = match[1].trim().split("\n")
  const raw: Record<string, string> = {}

  for (const line of frontmatterLines) {
    const [key, ...values] = line.split(": ")
    if (!key) continue
    let value = values.join(": ").trim()
    value = value.replace(/^['"](.*)['"]$/, "$1")
    if (value) {
      raw[key.trim()] = value
    }
  }

  const metadata = metadataSchema.parse(raw)
  return { metadata, content }
}

function readPostsFromDisk(dir: string): MDXFileData[] {
  const files = fs.readdirSync(dir).filter((f) => path.extname(f) === ".mdx")

  return files.map((file) => {
    const rawContent = fs.readFileSync(path.join(dir, file), "utf-8")
    const { metadata, content } = parseFrontmatter(rawContent)
    const slug = path.basename(file, path.extname(file))
    return { metadata, slug, content }
  })
}

export function getPosts(): MDXFileData[] {
  return readPostsFromDisk(path.join(process.cwd(), "posts"))
}

export function getPublishedPosts(limit?: number): MDXFileData[] {
  const posts = getPosts()
    .filter((post) => !post.metadata.draft)
    .sort(
      (a, b) =>
        new Date(b.metadata.date).getTime() -
        new Date(a.metadata.date).getTime(),
    )

  return limit ? posts.slice(0, limit) : posts
}

export function getPostBySlug(slug: string): MDXFileData | null {
  return getPosts().find((post) => post.slug === slug) ?? null
}

export function getAdjacentPosts(slug: string): {
  prev: MDXFileData | null
  next: MDXFileData | null
} {
  const posts = getPublishedPosts()
  const index = posts.findIndex((post) => post.slug === slug)
  return {
    prev: index < posts.length - 1 ? (posts[index + 1] ?? null) : null,
    next: index > 0 ? (posts[index - 1] ?? null) : null,
  }
}

export function getReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).length
  const minutes = Math.max(1, Math.round(words / 225))
  return `${minutes} min read`
}

