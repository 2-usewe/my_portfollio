import React from 'react'
import './navbar.css';
import logo from '../../utils/Abhijit.png'
import { Link } from 'react-scroll';
import contactImg from '../../utils/contact.png';
function Navbar() {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <div className="desktoMenu">
            <Link  activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Portfollio</Link>
            <Link activeClass='active' to='client' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Client</Link>
        </div>
        <button className="desktopMenuBtn" onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }}>
            <img src={contactImg} alt="contact" className="desktopMenuImg" />
            Contact Me
        </button>
    </nav>
  )
}

export default Navbar