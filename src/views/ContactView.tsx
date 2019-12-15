import React, { Fragment } from 'react'
import {
  EuiDescriptionList,
  EuiDescriptionListTitle,
  EuiDescriptionListDescription,
  EuiSpacer,
  EuiText,
  EuiTitle,
  EuiFlexGroup,
  EuiFlexItem,
  EuiLink,
} from '@elastic/eui'

export function ContactView() {
  return (
    <Fragment>
      <EuiTitle>
        <h1>Contact Me</h1>
      </EuiTitle>

      <EuiText>
        <p>You can reach me via multiple platforms, here are some ways to contact me.</p>
      </EuiText>
      <EuiSpacer />

      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiDescriptionList>
            <EuiDescriptionListTitle>Business Email</EuiDescriptionListTitle>
            <EuiDescriptionListDescription>
              <EuiLink href="mailto:me@supergrecko.com">me@supergrecko.com</EuiLink>
            </EuiDescriptionListDescription>

            <EuiDescriptionListTitle>Twitter</EuiDescriptionListTitle>
            <EuiDescriptionListDescription>
              <EuiLink href="https://twitter.com/supergrecko">@supergrecko</EuiLink>
            </EuiDescriptionListDescription>
          </EuiDescriptionList>
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiDescriptionList>
            <EuiDescriptionListTitle>GitHub</EuiDescriptionListTitle>
            <EuiDescriptionListDescription>
              <EuiLink href="https://github.com/supergrecko">@supergrecko</EuiLink>
            </EuiDescriptionListDescription>

            <EuiDescriptionListTitle>Discord</EuiDescriptionListTitle>
            <EuiDescriptionListDescription>supergrecko#3434</EuiDescriptionListDescription>
          </EuiDescriptionList>
        </EuiFlexItem>
      </EuiFlexGroup>
    </Fragment>
  )
}