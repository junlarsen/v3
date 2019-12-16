import TSVector from '../icons/typescript.svg'
import JSVector from '../icons/javascript.svg'
import ReactVector from '../icons/react.svg'
import PHPVector from '../icons/php.svg'
import KotlinVector from '../icons/kotlin.svg'
import GoVector from '../icons/golang.svg'

export type Dictionary<V> = {
  [key: string]: V
}

export type Languages = 'TypeScript' | 'Kotlin' | 'React' | 'PHP' | 'Go' | 'JavaScript'

export const logos: Dictionary<string> = {
  TypeScript: TSVector,
  JavaScript: JSVector,
  React: ReactVector,
  PHP: PHPVector,
  Kotlin: KotlinVector,
  Go: GoVector
}

export interface Project {
  language: Languages
  title: string
  slug: string
  repo: string
}

export const projects: Dictionary<Project> = {
  stackvm: {
    language: "Kotlin",
    title: "StackVM",
    slug: "Tiny arithmetic virtual machine built in Kotlin Native.",
    repo: "supergrecko/StackVM"
  },
  images: {
    language: "Go",
    title: "images",
    slug: "My own dockerized image uploading microservice. Powered by golang and go-gin.",
    repo: "supergrecko/images"
  },
  messier: {
    language: "Kotlin",
    title: "Messier",
    slug: "My own tiny programming language. Currently in development.",
    repo: "messier-lang/messier"
  },
  v3: {
    language: "React",
    title: "v3",
    slug: "The third remake of my portfolio (this site). Built using React & Typescript with Elastic UI",
    repo: "supergrecko/v3"
  },
  learnterra: {
    language: "TypeScript",
    title: "LearnTerra",
    slug: "Online Legends of Runeterra replay and collaboration platform. Built for the 2019 Riot API Challenge.",
    repo: "supergrecko/LearnTerra"
  },
  riotquest: {
    language: "PHP",
    title: "RiotQuest",
    slug: "Modern, open source API library for the Riot Games API, built for Laravel 6+ & PHP 7.1+",
    repo: "supergrecko/riot-quest"
  },
  leagueconnect: {
    language: "TypeScript",
    title: "LeagueConnect",
    slug: "Open source node module for interacting with the League of Legends Client APIs",
    repo: "supergrecko/league-connect"
  },
  leaguevoice: {
    language: "JavaScript",
    title: "LeagueVoice",
    slug: "Google action to control the League of Legends client via your voice! Built for the 2018 Riot API Challenge.",
    repo: "supergrecko/LeagueVoice"
  }
}

export const featured = ["v3", "riotquest", "leagueconnect"].map(item => projects[item])
