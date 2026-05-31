"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useTheme } from "./theme-provider"

export function Navbar() {
  const router = useRouter()
  const { toggle } = useTheme()

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA" ||
        event.target instanceof HTMLInputElement
      ) {
        return
      }

      if (event.metaKey || event.ctrlKey || event.altKey) {
        return
      }

      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur()
      }

      const key = event.key.toLowerCase()

      switch (key) {
        case "h":
          router.push("/")
          break
        case "b":
          router.push("/blog")
          break
        case "p":
          router.push("/projects")
          break
        case "w":
          router.push("/work")
          break
        case "t":
          toggle()
          break
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [router, toggle])

  return (
    <nav className="flex items-center justify-between mb-8 text-sm">
      <div className="flex space-x-1 sm:space-x-4">
        <Link
          href="/"
          className="hover:text-accent transition-colors duration-200 py-2 px-1.5 sm:px-0 sm:py-0 outline-none"
        >
          <span className="hidden sm:inline">[h] </span>home
        </Link>
        <Link
          href="/blog"
          prefetch={true}
          className="hover:text-accent transition-colors duration-200 py-2 px-1.5 sm:px-0 sm:py-0 outline-none"
        >
          <span className="hidden sm:inline">[b] </span>blog
        </Link>
        <Link
          href="/work"
          className="hover:text-accent transition-colors duration-200 py-2 px-1.5 sm:px-0 sm:py-0 outline-none"
        >
          <span className="hidden sm:inline">[w] </span>work
        </Link>
        <Link
          href="/projects"
          className="hover:text-accent transition-colors duration-200 py-2 px-1.5 sm:px-0 sm:py-0 outline-none"
        >
          <span className="hidden sm:inline">[p] </span>projects
        </Link>
      </div>
      <button
        onClick={toggle}
        className="cursor-pointer hover:text-accent transition-colors duration-200 py-2 px-1.5 sm:px-0 sm:py-0"
      >
        <span className="hidden sm:inline">[t] </span>theme
      </button>
    </nav>
  )
}
