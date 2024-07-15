import React from 'react'
import './navbar.css';
import logo from '../../utils/star.png'
import { Link } from 'react-scroll';
import contactImg from '../../utils/contact.png';
function Navbar() {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <div className="desktoMenu">
            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">About</Link>
            <Link className="desktopMenuListItem">Portfollio</Link>
            <Link className="desktopMenuListItem">Client</Link>
        </div>
        <button className="desktopMenuBtn">
            <img src={contactImg} alt="contact" className="desktopMenuImg" />
            Contact Me
        </button>
    </nav>
  )
}

export default Navbar