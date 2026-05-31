"use client"

import { createContext, useContext, useCallback } from "react"

const ThemeContext = createContext<{ toggle: () => void }>({
  toggle: () => {},
})

export function useTheme() {
  return useContext(ThemeContext)
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const toggle = useCallback(() => {
    const current = document.documentElement.getAttribute("data-theme")
    const next = current === "mellow" ? "frappe" : "mellow"
    document.documentElement.setAttribute("data-theme", next)
    localStorage.setItem("theme", next)
  }, [])

  return (
    <ThemeContext.Provider value={{ toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}
