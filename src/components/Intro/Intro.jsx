import React from 'react'
import './intro.css'
import bg from '../../utils/IMG_20240715_164447.png'
import { Link } from 'react-scroll'
import hireImg from '../../utils/briefcase.png'
function Intro() {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Abhijit</span><br/>Web Developer</span>
            <p className="introPara">I am a skilled web developer with experience in web application and APIs.</p>
            <Link><button className="btn"><img className='bagImg' src={hireImg} alt="hire me"  />Hire Me</button></Link>
        </div>
        <img src={bg} alt="profile" className="bg" />
    </section>
  )
}

export default Intro