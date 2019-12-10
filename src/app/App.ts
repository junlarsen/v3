import Projects from '../data/projects.json'

export interface Project {
  language: 'TypeScript' | 'JavaScript' | 'Kotlin' | 'PHP'
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