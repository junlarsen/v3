import React, { Fragment, PropsWithChildren } from 'react'
import {
  Route,
  Switch,
  BrowserRouter,
  Link,
  withRouter,
  useLocation,
  RouteComponentProps
} from 'react-router-dom'
import {
  EuiPage,
  EuiPageBody,
  EuiEmptyPrompt,
  EuiImage,
  EuiTabs,
  EuiTab,
  EuiSpacer,
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
      <EuiPage restrictWidth={960} style={{ paddingTop: 60 }}>
        <EuiPageBody>
          <EuiEmptyPrompt
            title={<h2>supergrecko</h2>}
            body={
              <Fragment>
                <p>16, self-taught programming hobbyist</p>
                <EuiImage
                  alt="alt"
                  url="/static/FjrwiP8Cyc.png"
                  style={{ borderRadius: '50%' }}
                />
              </Fragment>
            }
          />

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