import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Header } from "@/components/header"
import { BlogSection } from "@/components/blog-section"
import { WorkSection } from "@/components/work-section"
import { projectItems } from "@/lib/project-items"

const featuredProjects = projectItems.slice(0, 2)

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="border-t border-surface0">
        <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-surface0 divide-y divide-surface0 md:divide-y-0">
          <div className="md:pr-8 pt-8 pb-8 md:pb-0">
            <BlogSection />
          </div>
          <div className="md:px-8 pt-8 pb-8 md:pb-0">
            <WorkSection />
          </div>
          <div className="md:pl-8 pt-8">
            <section className="animate-fade-in-up">
              <div className="flex items-baseline justify-between mb-6">
                <h2 className="text-2xl font-semibold flex items-center text-text">
                  <span className="text-accent accent-glow mr-2">/</span>{" "}
                  projects
                </h2>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1 text-sm text-accent hover:underline group"
                >
                  all projects{" "}
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
              <div className="space-y-4">
                {featuredProjects.map((project) => (
                  <Link
                    key={project.title}
                    href={project.href}
                    target="_blank"
                    className="group block"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <h3 className="text-base font-semibold text-text group-hover:text-accent transition-colors duration-200">
                          {project.title}
                        </h3>
                        <p className="text-xs text-overlay1 mt-1">
                          {project.role}
                        </p>
                        <p className="text-sm text-subtext0 mt-1.5 text-pretty">
                          {project.description}
                        </p>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 mt-1 text-surface2 group-hover:text-accent transition-colors shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
