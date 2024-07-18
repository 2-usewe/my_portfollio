import React from 'react'
import './contact.css';
import walmart from '../../utils/icons8-walmart-48.png';
import facebook from '../../utils/Facebook.png';
import adobe from '../../utils/icons8-adobe-48.png';
import microsoft from '../../utils/icons8-microsoft-48.png';
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
        <h2 className="contactPageTitle">Contact Me</h2>
        <p className="contactDesc"></p>
      </div>
    </section>
  )
}

export default Contact