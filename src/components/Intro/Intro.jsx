import React from 'react'
import './intro.css'
import bg from '../../utils/IMG_20240715_164447.png'
import { Link } from 'react-scroll'
import hireImg from '../../utils/briefcase.png'
import resumefile from '../../utils/Abhijitrusume1.pdf';
function Intro() {

  const handleDownload = () => {
    // You can simply link to the file in the public folder
    const link = document.createElement('a');
    link.href = resumefile;  // Path relative to the public folder
    link.download = 'Abhijitrusume1.pdf';  // Optional: specify a download file name
    link.click();
  };
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Abhijit Swain</span><br/>Node js Developer</span>
            <p className="introPara">Experienced Node.js developer with 3 years of expertise in building efficient, scalable, and secure backend solutions, specializing in API development, database integration, and real-time applications.</p>
            <Link><button className="btn" onClick={handleDownload}><img className='bagImg' src={hireImg} alt="hire me"  />Hire Me</button></Link>
        </div>
        <img src={bg} alt="profile" className="bg" />
    </section>
  )
}

export default Intro