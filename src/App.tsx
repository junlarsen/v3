import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import { HomeView } from './views/HomeView'

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/x">
          <p>Hi</p>
        </Route>

        <Route path="/">
          <HomeView />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}