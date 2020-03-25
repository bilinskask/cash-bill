import React from 'react'
import classes from './Nav.module.css'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className={classes.navContainer}>
      <ul>
        <div>
          <Link to='/'>CASH | Bill</Link>
        </div>
        <div>
          <Link to='/receiver'>Send Money</Link>
        </div>
        <div>
          <li>
            <a href='#'>History</a>
          </li>
        </div>
        <div>
          <li>
            <a href='#'>Profile</a>
          </li>
        </div>
      </ul>
    </nav>
  )
}
