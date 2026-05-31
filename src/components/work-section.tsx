import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { workItems } from "@/lib/work-items"

const items = workItems.slice(0, 2)

function truncate(text: string, words: number) {
  const split = text.split(" ")
  if (split.length <= words) return text
  return split.slice(0, words).join(" ") + " [...]"
}

export function WorkSection() {
  return (
    <section className="animate-fade-in-up">
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-2xl font-semibold flex items-center text-text">
          <span className="text-accent accent-glow mr-2">/</span> work
        </h2>
        <Link
          href="/work"
          className="inline-flex items-center gap-1 text-sm text-accent hover:underline group"
        >
          all work{" "}
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.title}>
            <h3 className="text-base font-semibold text-text">
              {item.title}
            </h3>
            <p className="text-xs text-overlay1 mt-1">
              {item.role}
              <span className="text-surface2"> · {item.period}</span>
            </p>
            <p className="text-sm text-subtext0 mt-1.5 text-pretty">
              {truncate(item.description, 9)}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
