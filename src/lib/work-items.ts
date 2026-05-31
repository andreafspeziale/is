type WorkItem = {
  title: string
  role: string
  period: string
  description: string
}

export const workItems: WorkItem[] = [
  {
    title: "musixmatch",
    role: "staff engineer",
    period: "2022 - now",
    description:
      "hired to lead the core engineering team node.js adoption, which quickly expanded into a zero-downtime massive migration. updated systems and async catalog operations from a 10+ years old elasticsearch cluster to opensearch, enabling r&d of new features and cost savings. in 2025 moved to the growth engineering team revamping the api-as-a-service offering unlocking new revenue streams. introduced the first internal mcp implementation allowing the team to query opensearch in natural language. designed and built a copyright detection tool targeting music generative ai companies (sentinel) and actively working on the music ai agent (music lens).",
  },
  {
    title: "finleap",
    role: "senior backend engineer",
    period: "2020 - 2022",
    description:
      "contributed to technical direction and development of top company products, leading high-impact projects for strategic customers including pagopa. worked primarily with typescript, nestjs, postgresql/mongodb, and designed both monoliths and microservices. managed ci/cd pipelines on gitlab and docker. extensively contributed to the finleap cloud kubernetes platform using helm for application packaging.",
  },
  {
    title: "eidoo sagl",
    role: "senior backend and blockchain engineer",
    period: "2018 - 2020",
    description:
      "led a team of up to five engineers and designed core ethereum-based product features. built a hybrid cryptocurrency exchange and sdk, implemented general and domain-specific atomic swap systems, and developed mechanisms to pay blockchain fees in erc-20 tokens. focused on solidity smart contracts and backend development in javascript.",
  },
  {
    title: "top-ix",
    role: "fullstack engineer",
    period: "2014 - 2018",
    description:
      "helped early-stage startups design and build their products end-to-end. worked across ui/ux, software architecture, and implementation using javascript (angularjs), python (django), and mongodb. contributed to fast prototyping and delivery in high-uncertainty environments.",
  },
]
