import React from 'react'
import './Navbar.css'
import Logo from '../../assets/img/logo.png'

function Navbar({onClick}) {
  return (
    <nav id="navbar">
      <img src={Logo} alt="Logo" />
      <div className="burger-menu" onClick={onClick}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>SERVICES</li>
        <li>PROJECT</li>
        <li>BLOG</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  )
}

export default Navbar

