import TypeScriptSVG from '../icons/typescript.svg'
import ReactSVG from '../icons/react.svg'
import PHPSVG from '../icons/php.svg'

export type Dictionary<V> = {
  [key: string]: V
}

export type Languages = 'TypeScript' | 'JavaScript' | 'Kotlin' | 'React' | 'PHP'

export const logos: Dictionary<string> = {
  TypeScript: TypeScriptSVG,
  React: ReactSVG,
  PHP: PHPSVG
}

export interface Project {
  language: Languages
  title: string
  description: string
  repo: string
}

export const projects: Dictionary<Project> = {
  v3: {
    "language": "React",
    "title": "v3",
    "description": "The third remake of my portfolio (this site). Built using React & Typescript with Elastic UI",
    "repo": "supergrecko/v3"
  },
  riotquest: {
    "language": "PHP",
    "title": "RiotQuest",
    "description": "Modern, open source API library for the Riot Games API, built for Laravel 6+ & PHP 7.1+",
    "repo": "supergrecko/riot-quest"
  },
  leagueconnect: {
    "language": "TypeScript",
    "title": "LeagueConnect",
    "description": "Open source node module for interacting with the League of Legends Client APIs",
    "repo": "supergrecko/league-connect"
  }
}

export const featured = ["v3", "riotquest", "leagueconnect"].map(item => projects[item])
