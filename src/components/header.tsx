import Link from "next/link"
import { ScrambleText } from "@/components/scramble-text"

export function Header() {
  return (
    <header className="mb-8 space-y-4">
      <h1 className="text-5xl font-semibold tracking-tight text-text text-balance mb-4 animate-fade-in">
        <span className="inline-block">
          <ScrambleText text="andrea f. speziale" />
        </span>
      </h1>
      <p className="text-overlay1 animate-fade-in">
        staff product engineer at musixmatch | italy
      </p>
      <p className="text-pretty max-w-[52ch] animate-fade-in-up">
        obsessed with measurement, i mostly built backend systems and developer
        tools as products.
      </p>
      <div className="flex gap-4 text-sm animate-fade-in-up">
        <Link
          href="https://github.com/andreafspeziale"
          target="_blank"
          className="text-overlay1 hover:text-accent transition-colors duration-200"
        >
          github
        </Link>
        <Link
          href="https://x.com/andreafspeziale"
          target="_blank"
          className="text-overlay1 hover:text-accent transition-colors duration-200"
        >
          x.com
        </Link>
        <Link
          href="https://vimeo.com/andreafspeziale"
          target="_blank"
          className="text-overlay1 hover:text-accent transition-colors duration-200"
        >
          vimeo
        </Link>
      </div>
    </header>
  )
}
