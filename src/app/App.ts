import Projects from '../data/projects.json'

import TypeScriptSVG from '../data/svg/typescript.svg'
import ReactSVG from '../data/svg/react.svg'
import PHPSVG from '../data/svg/php.svg'

export type Languages = 'TypeScript' | 'JavaScript' | 'Kotlin' | 'React'

export type SVGDictionary = {
  [key: string]: string
}
export const languageVectors: SVGDictionary = {
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

export async function getFeaturedProjects(): Promise<Array<Project>> {
  const featured: Array<string> = Projects.features

  const projects: Array<Promise<Project>> = featured.map<Promise<Project>>(async (project: string) => {
    const res: Project = await import(`../data/projects/${project.toLowerCase()}.json`)

    return res
  })

  return await Promise.all(projects)
}