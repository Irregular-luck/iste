import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import { FaBars } from "react-icons/fa";

const Navbar = () => {

  const [hideNavbar, setHideNavbar] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling DOWN
        setHideNavbar(true)
        setMenuOpen(false) 
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

      <div
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FaBars />
      </div>

      <ul className={menuOpen ? styles.showMenu : ""} >
        <li><NavLink to='/' className={styles.link} onClick={() => setMenuOpen(false)}>Home</NavLink></li>
        <li><NavLink to='/Events' className={styles.link} onClick={() => setMenuOpen(false)}>Events</NavLink></li>
        <li><NavLink to='/Team' className={styles.link} onClick={() => setMenuOpen(false)}>Team</NavLink></li>
        <li><NavLink to='/Gallery' className={styles.link} onClick={() => setMenuOpen(false)}>Gallery</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
