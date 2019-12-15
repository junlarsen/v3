import React, { Fragment, PropsWithChildren } from 'react'
import {
  EuiTitle,
  EuiSpacer,
  EuiText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiCard,
  EuiIcon,
  EuiLink
} from '@elastic/eui'

import { featured, logos, Project } from '../app/App'

function ProjectCard({ project }: PropsWithChildren<{ project: Project }>) {
  return (
    <EuiFlexItem>
      <EuiCard
        icon={
          <EuiIcon size="xl" type={logos[project.language]} />
        }
        href={`https://github.com/${project.repo}`}
        layout="horizontal"
        title={project.title}
        description={project.description}
      />
    </EuiFlexItem>
  )
}

export function AboutView() {
  return (
    <Fragment>
      <EuiTitle>
        <h1>About Me</h1>
      </EuiTitle>
      <EuiSpacer />

      <EuiText>
        <p style={{ fontSize: 20 }}>
          Hi there, I'm supergrecko, I'm a high school student from Norway. My favorite hobbies are programming and
          video games. I began programming two and a half years ago I've done it on a daily basis ever since. I've done
          full stack and a little bit of dev-ops. My favorite languages are Kotlin and TypeScript and my favorite
          framework is React.
        </p>

        <p style={{ fontSize: 20 }}>
          If you want to contact me you'll be able to reach me via the links <EuiLink
          href="/contact">here.</EuiLink> Interested in my resume? <EuiLink href="mailto:me@supergrecko.com">shoot me an
          email!</EuiLink>
        </p>
      </EuiText>
      <EuiSpacer />

      <EuiTitle>
        <h1>Featured Projects</h1>
      </EuiTitle>
      <EuiSpacer />

      <EuiFlexGroup gutterSize="m">
        {featured.map(project => (<ProjectCard project={project} />))}
      </EuiFlexGroup>
    </Fragment>
  )
}