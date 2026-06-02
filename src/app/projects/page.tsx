import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import { projectItems as projects } from "@/lib/project-items"
import { Metadata } from "next"

export default function ProjectsPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-8 text-text">
        <span className="text-accent accent-glow mr-2">/</span>
        <ScrambleText text="projects" />
      </h1>

      <p className="text-overlay2 mb-6 leading-relaxed">
        here are some of the projects i&apos;ve worked on. i&apos;m usually my
        first user and i deeply care about ergonomics and developer experience.
      </p>

      <div className="space-y-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  title: "Projects",
  description: "Some of the projects I've worked on.",
  openGraph: {
    images: [
      {
        url: "https://www.spznrf.dev/og/home?title=projects",
      },
    ],
  },
}
