import React, { Fragment } from 'react'
import {
  EuiHorizontalRule,
  EuiText,
  EuiTitle,
  EuiFlexGrid,
} from '@elastic/eui'

import { projects } from '../app/App'
import { ProjectCard } from '../components/ProjectCard'

export function ProjectView() {
  return (
    <Fragment>
      <EuiTitle>
        <h1>Projects</h1>
      </EuiTitle>

      <EuiText>
        <p>I have a bunch of projects, here are some I've put a lot of time and effort into!</p>
      </EuiText>

      <EuiHorizontalRule />

      <EuiFlexGrid columns={2}>
        {Object.values(projects).map(project => (<ProjectCard project={project} />))}
      </EuiFlexGrid>
    </Fragment>
  )
}