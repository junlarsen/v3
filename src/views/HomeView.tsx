import React, { Fragment } from 'react'
import {
  EuiPage,
  EuiPageBody,
  EuiTitle,
  EuiHeader,
  EuiHeaderSectionItem,
  EuiHeaderLogo,
  EuiHeaderLink,
  EuiHeaderSection,
  EuiEmptyPrompt,
  EuiSpacer,
  EuiFlexGroup, EuiCard, EuiFlexItem, EuiText
} from '@elastic/eui'

import Logo from '../logo.svg'

export function HomeView() {
  return (
    <div>
      <EuiHeader>
        <EuiHeaderSection>
          <EuiHeaderSectionItem border="none">
            <EuiHeaderLogo iconType={Logo} href="/x">Site Name</EuiHeaderLogo>
          </EuiHeaderSectionItem>
        </EuiHeaderSection>

        <EuiHeaderSection>
          <EuiHeaderSectionItem>
            <EuiHeaderLink href="#">About</EuiHeaderLink>
            <EuiHeaderLink href="#">Projects</EuiHeaderLink>
            <EuiHeaderLink href="#">Contact</EuiHeaderLink>
          </EuiHeaderSectionItem>
        </EuiHeaderSection>

        <EuiHeaderSection side="right">
          <EuiHeaderSectionItem>
            <EuiHeaderLink href="#">GitHub</EuiHeaderLink>
          </EuiHeaderSectionItem>
        </EuiHeaderSection>
      </EuiHeader>

      <EuiPage restrictWidth={1024}>
        <EuiPageBody>
          <EuiEmptyPrompt
            iconType="calendar"
            title={<h2>There's nothing here</h2>}
            body={
              <Fragment>
                <p>This is currently empty, check back later</p>
              </Fragment>
            }
          />

          <EuiTitle>
            <h1>About Me</h1>
          </EuiTitle>

          <EuiSpacer />

          <EuiText>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed felis accumsan, venenatis lorem vitae, volutpat odio. Ut pellentesque tincidunt urna, in ullamcorper diam suscipit vel. Integer pharetra vitae ligula eget tincidunt. Duis volutpat volutpat ipsum eget ornare. Mauris nisl dui, dictum id eleifend sit amet, vestibulum ornare ipsum. Donec bibendum dolor nec turpis tincidunt mollis. Nam semper, tortor eget blandit finibus, odio lectus imperdiet nisl, vitae efficitur felis erat non urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </EuiText>

          <EuiSpacer />

          <EuiTitle>
            <h1>Featured Projects</h1>
          </EuiTitle>

          <EuiSpacer />

          <EuiFlexGroup gutterSize="m">
            <EuiFlexItem>
              <EuiCard
                href="/x"
                layout="horizontal"
                title={'Interesting Project'}
                description={'Some cool project build with Elastic UI, React and TypeScript.'}
              />
            </EuiFlexItem>

            <EuiFlexItem>
              <EuiCard
                href="/x"
                layout="horizontal"
                title={'Interesting Project'}
                description={'Some cool project build with Elastic UI, React and TypeScript.'}
              />
            </EuiFlexItem>

            <EuiFlexItem>
              <EuiCard
                href="/x"
                layout="horizontal"
                title={'Interesting Project'}
                description={'Some cool project build with Elastic UI, React and TypeScript.'}
              />
            </EuiFlexItem>

            <EuiFlexItem>
              <EuiCard
                href="/x"
                layout="horizontal"
                title={'Interesting Project'}
                description={'Some cool project build with Elastic UI, React and TypeScript.'}
              />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPageBody>
      </EuiPage>
    </div>
  )
}