import { createOgImage } from "@/lib/og"

export const runtime = "edge"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get("title")
  const text = title ? `andreafspeziale • ${title}` : "andreafspeziale • home"
  return createOgImage(text)
}
