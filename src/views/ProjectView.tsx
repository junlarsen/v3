import React, { Fragment } from 'react'
import {
  EuiHorizontalRule,
  EuiText,
  EuiTitle
} from '@elastic/eui'

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
    </Fragment>
  )
}