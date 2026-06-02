import { ScrambleText } from "@/components/scramble-text"
import { workItems } from "@/lib/work-items"
import { Metadata } from "next"

export default function WorkPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-8 text-text">
        <span className="text-accent accent-glow mr-2">/</span>
        <ScrambleText text="work" />
      </h1>

      <p className="text-overlay2 mb-6 leading-relaxed">
        here&apos;s where i&apos;ve worked and what i&apos;ve been up to.
      </p>

      <div className="space-y-8">
        {workItems.map((item) => (
          <div key={item.title} className="rounded-lg p-4 -mx-4">
            <h3 className="text-lg font-semibold text-text mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-overlay1 mb-3">
              {item.role}
              <span className="text-surface2"> · {item.period}</span>
            </p>
            <p className="text-subtext0 text-pretty leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  title: "Work",
  description: "Where I've worked and helped ship.",
  openGraph: {
    images: [
      {
        url: "https://www.spznrf.dev/og/home?title=work",
      },
    ],
  },
}
