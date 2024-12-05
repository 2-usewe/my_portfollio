import React, { useRef } from 'react'
import './contact.css';
import walmart from '../../utils/walmart-img.png';
import facebook from '../../utils/facebook-img.webp';
import adobe from '../../utils/adobe-img.png';
import microsoft from '../../utils/microsoft-img.jpg';
import instaicon from '../../utils/instagram-icon.png';
import facebookicon from '../../utils/facebook-icon.png';
import linkedinicon from '../../utils/linkedin-icon.webp';
import youtubeicon from '../../utils/youtube-icon.webp'
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  //send email
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    emailjs
      .sendForm('service_x2j0r9h', 'template_bo784ft', form.current, {
        publicKey: '3cRyf65xG3YGPL0ZB',
      })
      .then(
        () => {
          e.target.reset();
          alert('Email Sent!.')
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contactPage">
      <div id="client">
        <h2 className="clientPageTitle">Professional Experience</h2>
        {/* <p className="clientDesc">I have had the upertunity to work with a diverse group of companies. 
          Some of the notable companies i have worked with includes</p> */}
        <ul className="clientDesc">
          <li>Designed and implemented RESTful APIs using Node.js, Express.js, and Sails.js</li>
          <li>Worked with MySQL and MongoDB to develop and maintain databases and data models</li>
          <li>Implemented authentication and authorization using JWT and Passport.js and file management with AWS S3</li>
          <li>Collaborated with the frontend development team to ensure seamless integration of the backend and frontend systems</li>
          <li>Participated in agile development practices, including daily stand-ups and sprint reviews</li>
        </ul>


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
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder='Your Name' name='from_name' />
          <input type="text" className="email" placeholder='Your Email' name='your_email' />
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