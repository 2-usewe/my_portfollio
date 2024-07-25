import React from 'react'
import './contact.css';
import walmart from '../../utils/walmart-img.png';
import facebook from '../../utils/facebook-img.webp';
import adobe from '../../utils/adobe-img.png';
import microsoft from '../../utils/microsoft-img.jpg';
import instaicon from '../../utils/instagram-icon.png';
import facebookicon from '../../utils/facebook-icon.png';
import linkedinicon from '../../utils/linkedin-icon.webp';
import youtubeicon from '../../utils/youtube-icon.webp'
function Contact() {
  return (
    <section id="contactPage">
      <div id="client">
        <h2 className="clientPageTitle">My Client</h2>
        <p className="clientDesc">I have had the upertunity to work with a diverse group of companies. 
          Some of the notable companies i have worked with includes</p>
        <div className="clientImgs">
          <img src={microsoft} alt="microsoft" className="clientImg" />
          <img src={adobe} alt="adobe" className="clientImg" />
          <img src={walmart} alt="walmart" className="clientImg" />
          <img src={facebook} alt="facebook" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h2 className="clientPageTitle">Contact Me</h2>
        <span className="contactDesc">Please fill out the form below to discuss any work oppertunities.</span>
        <form className="contactForm">
          <input type="text" className="name" placeholder='Your Name' />
          <input type="text" className="email" placeholder='Your Email' />
          <textarea name="message" rows="5" className='msg' placeholder='Your Message'></textarea>
          <button className='submitBtn' type='submit' value='Send'>Submit</button>
          <div className="links">
            <img src={facebookicon} alt="" className="link" />
            <img src={instaicon} alt="" className="link" />
            <img src={linkedinicon} alt="" className="link" />
            <img src={youtubeicon} alt="" className="link" />
          </div>
        </form>
        
      </div>
    </section>
  )
}

export default Contact