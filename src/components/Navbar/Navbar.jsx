import {React} from 'react'
import './Navbar.css';
import { Link } from 'react-scroll';
import contactImg from '../../utils/contact.png';
function Navbar() {
  // const [showMenu,setShowMenu]=useState(false);

  return (
    <nav className="navbar">
        {/* <img src={logo} alt="logo" className="logo" /> */}
        <div className='nav-content'>
        <Link className="name-logo">A B H I J I T</Link>
        <div className="desktoMenu">
            <Link  activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Portfollio</Link>
            <Link activeClass='active' to='profession' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Experience</Link>
        </div>
        </div>
            <button className="desktopMenuBtn" onClick={()=>{
              document.getElementById('contact').scrollIntoView({behavior:'smooth'});
            }}>
                <img src={contactImg} alt="contact" className="desktopMenuImg" />
                Contact Me
            </button>

        {/* <img src={menu} alt="menu" className="mobMenu"  onClick={()=>{ 
          console.log('click:',showMenu);
          setShowMenu(!showMenu);
          console.log('click:',showMenu);
          }}/> */}
        {/* <div className="navMenu" style={{display:showMenu?'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Portfollio</Link>
            <Link activeClass='active' to='client' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Client</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Contact</Link>
        </div> */}
    </nav>
  )
}

export default Navbar