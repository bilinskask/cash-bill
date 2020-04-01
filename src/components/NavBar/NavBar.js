import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import classes from './NavBar.module.css'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export const NavBar = () => {
  const history = useHistory()
  return (
    // <Navbar bg='dark' variant='dark'>
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand onClick={() => history.push('/')}>CASH | BILL</Navbar.Brand>
      <Nav className='ml-auto'>
        {/* <Link to='/receiver'>
          Send Money
        </Link> */}
        <Nav.Link
          className={classes.navs}
          onClick={() => history.push('/deliverydetails')}
        >
          Send Money
        </Nav.Link>
        <Nav.Link as={Link} to='/' className={classes.belenkas}>
          History
        </Nav.Link>
        <Nav.Link onClick={() => history.push('/profile')}>Profile</Nav.Link>
        <Nav.Link onClick={() => history.push('/')}>Logout</Nav.Link>
      </Nav>
    </Navbar>
  )
}
