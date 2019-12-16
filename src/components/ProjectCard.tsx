import React, { PropsWithChildren } from 'react'
import {
  EuiFlexItem,
  EuiCard,
  EuiIcon
} from '@elastic/eui'

import { logos, Project } from '../app/App'

export function ProjectCard({ project }: PropsWithChildren<{ project: Project }>) {
  return (
    <EuiFlexItem>
      <EuiCard
        icon={
          <EuiIcon size="xl" type={logos[project.language]} />
        }
        href={`https://github.com/${project.repo}`}
        layout="horizontal"
        title={project.title}
        description={project.slug}
      />
    </EuiFlexItem>
  )
}
