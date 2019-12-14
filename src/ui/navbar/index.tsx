import React from 'react'
import {
  EuiHeader,
  EuiHeaderSectionItem,
  EuiHeaderLink,
  EuiHeaderSection
} from '@elastic/eui'

export function Navbar() {
  return (
    <EuiHeader>
      <EuiHeaderSection>
        <EuiHeaderSectionItem border="none">
          <EuiHeaderLink href="/">supergrecko.dev</EuiHeaderLink>
        </EuiHeaderSectionItem>
      </EuiHeaderSection>

      <EuiHeaderSection>
        <EuiHeaderSectionItem>
          <EuiHeaderLink href="/about">About</EuiHeaderLink>
          <EuiHeaderLink href="/projects">Projects</EuiHeaderLink>
          <EuiHeaderLink href="/contact">Contact</EuiHeaderLink>
        </EuiHeaderSectionItem>
      </EuiHeaderSection>

      <EuiHeaderSection side="right">
        <EuiHeaderSectionItem>
          <EuiHeaderLink href="https://github.com/supergrecko">GitHub</EuiHeaderLink>
          <EuiHeaderLink href="https://twitter.com/supergrecko">Twitter</EuiHeaderLink>
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
    </EuiHeader>
  )
}