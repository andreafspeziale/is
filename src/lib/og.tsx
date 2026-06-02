import { ImageResponse } from "next/og"

async function loadGoogleFont(font: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text)}`
  const css = await (await fetch(url)).text()
  const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/)

  if (resource) {
    const response = await fetch(resource[1])
    if (response.status == 200) {
      return await response.arrayBuffer()
    }
  }

  throw new Error("failed to load font data")
}

export async function createOgImage(
  text: string,
  { width = 1200, height = 630 } = {},
) {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#161617",
          fontFamily: "JetBrains Mono",
          padding: "40px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            maxWidth: "90%",
          }}
        >
          <span
            style={{
              color: "#aca1cf",
              fontSize: 48,
              flexShrink: 0,
            }}
          >
            /
          </span>
          <h1
            style={{
              fontSize: 48,
              color: "#c9c7cd",
              margin: 0,
              lineHeight: 1.2,
              wordBreak: "break-word",
              overflowWrap: "break-word",
              maxWidth: "100%",
            }}
          >
            {text}
          </h1>
        </div>
      </div>
    ),
    {
      width,
      height,
      fonts: [
        {
          name: "JetBrains Mono",
          data: await loadGoogleFont("JetBrains+Mono", text),
          style: "normal",
        },
      ],
    },
  )
}
