import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"
import { Navbar } from "../components/navbar"
import { ThemeProvider } from "../components/theme-provider"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.andreafspeziale.is"),
  title: {
    default: "Andrea F. Speziale",
    template: "%s | Andrea F. Speziale",
  },
  description: "Staff Engineer at Musixmatch.",
  openGraph: {
    title: "Andrea F. Speziale",
    description: "Staff Engineer at Musixmatch.",
    url: "https://www.andreafspeziale.is",
    siteName: "Andrea F. Speziale",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.andreafspeziale.is/og/home",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  twitter: {
    title: "Andrea F. Speziale",
    card: "summary_large_image",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="mellow" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            var t = localStorage.getItem('theme');
            if (t === 'frappe' || t === 'mellow') {
              document.documentElement.setAttribute('data-theme', t);
            }
          })();
        `}} />
      </head>
      <body
        className={`${jetbrainsMono.variable} antialiased min-h-screen font-mono flex flex-col transition-colors duration-200`}
      >
        <ThemeProvider>
          <div className="max-w-7xl w-full mx-auto px-6 sm:px-10 py-8">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
