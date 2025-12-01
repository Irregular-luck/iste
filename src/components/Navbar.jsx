import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.module.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='brand-container'>
        <img src='./iste-logo.png' width='70px' height='70px' alt="ISTE-logo" />
         <span className="brand">ISTE GECK</span>
      </div>
        <ul>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/Events'><li>Events</li></NavLink>
            <NavLink to='/Team'><li>Team</li></NavLink>
            <NavLink to='Gallery'><li>Gallery</li></NavLink>
        </ul>
    </div>
  )
}

export default Navbar