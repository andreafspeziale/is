import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

type ProjectCardProps = {
  title: string
  description: string
  role: string
  technologies: string[]
  href: string
}

export function ProjectCard({
  title,
  description,
  role,
  technologies,
  href,
}: ProjectCardProps) {
  return (
    <Link href={href} target="_blank" className="group block rounded-lg p-4 -mx-4 hover:bg-mantle/50">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-xl font-semibold text-text group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-sm text-overlay1 mt-1">
            {role}
          </p>
          <p className="text-subtext0 mt-2 text-pretty">{description}</p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs text-overlay1 bg-surface0/60 px-2 py-0.5 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <ArrowUpRight className="w-4 h-4 mt-1.5 text-surface2 group-hover:text-accent transition-colors shrink-0" />
      </div>
    </Link>
  )
}
