import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {

  const [hideNavbar, setHideNavbar] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling DOWN
        setHideNavbar(true)
      } else {
        // scrolling UP
        setHideNavbar(false)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`${styles.navbar} ${hideNavbar ? styles.hide : ""}`}>
      <div className={styles.brandcontainer}>
        <img src='./iste-logo.png' width='70px' height='70px' alt="ISTE-logo" />
        <span className={styles.brand}>ISTE GECK</span>
      </div>

      <ul>
        <li><NavLink to='/' className={styles.link}>Home</NavLink></li>
        <li><NavLink to='/Events' className={styles.link}>Events</NavLink></li>
        <li><NavLink to='/Team' className={styles.link}>Team</NavLink></li>
        <li><NavLink to='/Gallery' className={styles.link}>Gallery</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
