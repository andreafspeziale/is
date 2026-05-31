type ProjectItem = {
  title: string
  description: string
  role: string
  technologies: string[]
  href: string
}

export const projectItems: ProjectItem[] = [
  {
    title: "mxm-api",
    description: "http client sdk showcase using undici, zod and pino logger",
    role: "creator and maintainer",
    technologies: ["typescript", "nodejs", "undici", "zod"],
    href: "https://github.com/andreafspeziale/mxm-api",
  },
  {
    title: "beyhub",
    description: "completely vibe-coded beyblade web application",
    role: "creator and maintainer",
    technologies: ["typescript", "react", "vite", "bun"],
    href: "https://github.com/andreafspeziale/beyhub",
  },
  {
    title: "os-cli",
    description: "opinionated and convenient opensearch cli",
    role: "creator and maintainer",
    technologies: ["typescript", "nestjs", "opensearch"],
    href: "https://github.com/andreafspeziale/os-cli",
  },
  {
    title: "nestjs-search",
    description: "opensearch module for nest framework (node.js)",
    role: "creator and maintainer",
    technologies: ["typescript", "nestjs", "opensearch"],
    href: "https://github.com/andreafspeziale/nestjs-search",
  },
  {
    title: "nestjs-log",
    description: "logger module for nest framework (node.js)",
    role: "creator and maintainer",
    technologies: ["typescript", "nestjs", "winston"],
    href: "https://github.com/andreafspeziale/nestjs-log",
  },
  {
    title: "nestjs-memcached",
    description: "memcached module for nest framework (node.js)",
    role: "creator and maintainer",
    technologies: ["typescript", "nestjs", "memcached"],
    href: "https://github.com/andreafspeziale/nestjs-memcached",
  },
]
