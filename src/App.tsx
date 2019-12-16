import React, { PropsWithChildren } from 'react'
import {
  Route,
  Switch,
  BrowserRouter,
  withRouter,
  useLocation,
  RouteComponentProps
} from 'react-router-dom'

import {
  EuiPage,
  EuiPageBody,
  EuiImage,
  EuiTabs,
  EuiTab,
  EuiSpacer,
  EuiFlexGroup,
  EuiFlexItem,
  EuiShowFor, EuiHideFor
} from '@elastic/eui'

import { AboutView } from './views/AboutView'
import { ContactView } from './views/ContactView'
import { ProjectView } from './views/ProjectView'

function NavigationBarComponent({ history }: PropsWithChildren<{}> & RouteComponentProps) {
  const { pathname } = useLocation()

  return (
    <EuiTabs>
      <EuiTab onClick={() => history.push('/')} isSelected={pathname === '/'}>
        About
      </EuiTab>
      <EuiTab onClick={() => history.push('/projects')} isSelected={pathname === '/projects'}>
        Projects
      </EuiTab>
      <EuiTab onClick={() => history.push('/contact')} isSelected={pathname === '/contact'}>
        Contact & Links
      </EuiTab>
    </EuiTabs>
  )
}

const NavigationBar = withRouter(NavigationBarComponent)

export function App() {
  return (
    <BrowserRouter>
      <EuiPage restrictWidth={960}>
        <EuiPageBody>
          <EuiSpacer size="xl" />

          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiFlexGroup>
                <EuiFlexItem style={{ textAlign: 'center' }}>
                  <EuiImage
                    alt="alt"
                    url="/static/FjrwiP8Cyc.png"
                    style={{
                      borderRadius: '50%',
                      width: 260
                    }}
                  />
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>

            <EuiFlexItem>
              <EuiFlexGroup alignItems="center">
                <EuiFlexItem>
                  <EuiShowFor sizes={['s']}>
                    <h1 style={{
                      fontSize: 60,
                    }}>supergrecko</h1>
                  </EuiShowFor>
                  <EuiHideFor sizes={['s']}>
                    <h1 style={{
                      fontSize: 72,
                    }}>supergrecko</h1>
                  </EuiHideFor>
                  <EuiSpacer size="m" />

                  <p style={{
                    fontSize: 24
                  }}>high school student, self-taught programming hobbyist</p>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiSpacer size="xl" />

          <NavigationBar />
          <EuiSpacer />

          <Switch>
            <Route path="/projects">
              <ProjectView />
            </Route>

            <Route path="/contact">
              <ContactView />
            </Route>

            <Route path="/">
              <AboutView />
            </Route>
          </Switch>

        </EuiPageBody>
      </EuiPage>
    </BrowserRouter>
  )
}