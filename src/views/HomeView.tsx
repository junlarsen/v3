import React, { Fragment, PropsWithChildren, useEffect, useState } from 'react'
import {
  EuiPage,
  EuiPageBody,
  EuiTitle,
  EuiEmptyPrompt,
  EuiSpacer,
  EuiFlexGroup,
  EuiCard,
  EuiFlexItem,
  EuiText,
  EuiImage,
  EuiIcon
} from '@elastic/eui'

import { Navbar } from '../ui/navbar'
import { getFeaturedProjects, languageVectors, Project } from '../app/App'

function ProjectCard({ project }: PropsWithChildren<{ project: Project }>) {
  return (
    <EuiFlexItem>
      <EuiCard
        icon={
          <EuiIcon size="xl" type={languageVectors[project.language]} />
        }
        href={`https://github.com/${project.repo}`}
        layout="horizontal"
        title={project.title}
        description={project.description}
      />
    </EuiFlexItem>
  )
}

export function HomeView() {
  const [projects, setProjects] = useState<Array<Project>>([])

  useEffect(() => {
    getFeaturedProjects().then(res => setProjects(res))
  })

  return (
    <div>
      <Navbar />

      <EuiPage restrictWidth={960}>
        <EuiPageBody>
          <EuiEmptyPrompt
            title={<h2>supergrecko</h2>}
            body={
              <Fragment>
                <p>16, self-taught programming hobbyist</p>
                <EuiImage
                  alt="alt"
                  url="/static/FjrwiP8Cyc.png"
                  style={{ borderRadius: '50%' }}
                />
              </Fragment>
            }
          />

          <EuiTitle>
            <h1>About Me</h1>
          </EuiTitle>
          <EuiSpacer />

          <EuiText>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed felis accumsan, venenatis lorem vitae,
              volutpat odio. Ut pellentesque tincidunt urna, in ullamcorper diam suscipit vel. Integer pharetra vitae
              ligula eget tincidunt. Duis volutpat volutpat ipsum eget ornare. Mauris nisl dui, dictum id eleifend sit
              amet, vestibulum ornare ipsum. Donec bibendum dolor nec turpis tincidunt mollis. Nam semper, tortor eget
              blandit finibus, odio lectus imperdiet nisl, vitae efficitur felis erat non urna. Interdum et malesuada
              fames ac ante ipsum primis in faucibus.</p>
          </EuiText>
          <EuiSpacer />

          <EuiTitle>
            <h1>Featured Projects</h1>
          </EuiTitle>
          <EuiSpacer />

          <EuiFlexGroup gutterSize="m">
            {projects.map(project => <ProjectCard project={project} />)}
          </EuiFlexGroup>
        </EuiPageBody>
      </EuiPage>
    </div>
  )
}