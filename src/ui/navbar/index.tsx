import React from 'react'
import {
  EuiHeader,
  EuiHeaderSectionItem,
  EuiHeaderLogo,
  EuiHeaderLink,
  EuiHeaderSection
} from '@elastic/eui'

import Logo from '../../logo.svg'

export function Navbar() {
  return (
    <EuiHeader>
      <EuiHeaderSection>
        <EuiHeaderSectionItem border="none">
          <EuiHeaderLogo iconType={Logo} href="/x">supergrecko.dev</EuiHeaderLogo>
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
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
    </EuiHeader>
  )
}