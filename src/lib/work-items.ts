type WorkItem = {
  title: string
  role: string
  period: string
  description: string
}

export const workItems: WorkItem[] = [
  {
    title: "musixmatch",
    role: "staff product engineer",
    period: "2022 - now",
    description:
      "creator of sentinel, a copyright detection system used by music generative ai companies like suno.com. originally hired to lead the core engineering team's node.js adoption, which quickly expanded into a zero-downtime migration from a 10+ year old elasticsearch cluster to opensearch, enabling r&d of new features and cost savings. in 2025 moved to the product growth engineering team, revamping the api-as-a-service offering unlocking new revenue streams, introducing our first internal mcp implementation allowing the team to query opensearch in natural language and actively supporting the development of our music lens ai agent.",
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
