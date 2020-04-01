import React, { useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { NavBar } from './components/NavBar/NavBar'
import { Container } from './components/shared/Container/Container'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { routes } from './routes'
import { useDispatch } from 'react-redux'
import { dropdownRetieval } from './redux/actions'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchDropdownData = async () => {
      dispatch(dropdownRetieval())
    }
    fetchDropdownData()
  }, [])

  return (
    <BrowserRouter>
      <Container>
        <NavBar />
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
