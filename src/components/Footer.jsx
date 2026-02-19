import React from 'react'
import { footerContainer, istelogo, divider, emailLink, emailBlock, Social, Address, Icons, istefoot } from './Footer.module.css'
import { FaInstagramSquare, FaFacebookSquare, FaLinkedin } from 'react-icons/fa';


export default function Footer() {
  return (
    <footer className={footerContainer}>
      <div className={Social}>
        <div className={Address}>
          <p>Government Engineering College - Kozhikode</p>
          <p>Kannur Road, Westhill Calicut-673 005, Kerala, INDIA</p>
        </div>

        <div className={Icons} >
          <a href="#" >
            <FaInstagramSquare />
          </a>
          <a href="#" >
            <FaFacebookSquare />
          </a>
          <a href="#" >
            <FaLinkedin />
          </a>
        </div>
      </div>


      <div className={emailBlock}>
        <a className={emailLink} href="mailto:istegeckozhikode@gmail.com">
          istegeckozhikode@gmail.com
        </a>
        <div className={divider} ></div>
      </div>
      <div className={istefoot}>
        <img src="/pngs/iste.png" alt="image" className={istelogo} />
      </div>
    </footer>
  )
}
