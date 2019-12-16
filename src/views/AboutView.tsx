import React, { Fragment } from 'react'
import {
  EuiTitle,
  EuiSpacer,
  EuiText,
  EuiFlexGroup,
  EuiLink,
  EuiHorizontalRule
} from '@elastic/eui'

import { featured } from '../app/App'
import { ProjectCard } from '../components/ProjectCard'

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
          video games. I began programming two and a half years ago and I've done it on a daily basis ever since. I've done
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

      <EuiText>
        <p>These are the projects I had the most fun working on. They mean a lot to me.</p>
      </EuiText>
      <EuiHorizontalRule />

      <EuiSpacer />

      <EuiFlexGroup gutterSize="m">
        {featured.map(project => (<ProjectCard project={project} />))}
      </EuiFlexGroup>
    </Fragment>
  )
}