import React, { Fragment, PropsWithChildren, useEffect, useState } from 'react'
import {
  EuiTitle,
  EuiSpacer,
  EuiText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiCard,
  EuiIcon
} from "@elastic/eui"

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
        <p style={{ fontSize: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed felis accumsan, venenatis lorem vitae,
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
        {featured.map(project => (<ProjectCard project={project} />))}
      </EuiFlexGroup>
    </Fragment>
  )
}