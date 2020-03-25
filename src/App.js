import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Nav from './components/Nav'
import { Container } from './components/shared/Container/Container'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//import { Receiver } from './pages/Receiver/Receiver'
import { routes } from './routes'

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Nav />
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              component={() => <route.component />}
              exact={route.isExact}
            />
          ))}
        </Switch>
        <footer>Powered by CASHtutis BILLinskas</footer>
      </Container>
    </BrowserRouter>
  )
}

export default App
