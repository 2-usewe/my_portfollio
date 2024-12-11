import React from 'react'
import './skill.css';
import node from '../../utils/node.png';
import db from '../../utils/db.png';
import react from '../../utils/logo192.png';
import frameworks from '../../utils/frameworks-icons.png';
import program from '../../utils/programing.png';

function Skill() {
  return (
    <section id="skills">
       <span className="skillTitle">What I do</span> <br />
       <span className="skillDesc">I am a skilled and passionate Node Js developer with 3+ years of experience in building scalable systems. Skilled in backend development
 using Node.js (Express.js, Sails.js) and frontend development with React.js. Proficient in working with databases like
 MongoDB, PostgreSQL, and MySQL. Experienced in creating RESTful APIs, microservices, and integrating secure
 authentication with JWT. Strong focus on clean, maintainable code, and responsive, user-friendly interfaces. Dedicated to
 continuous learning and keeping up with the latest technologies and best practices.</span>
       <div className="skillBars">
         <div className="skillBar">
            <img src={node} alt='Node js' className="skillBarImg"></img>
            <div className="skillBarText">
                <h2>API/Rest API with Node js</h2>
                {/* <p>This is demo text. You can write your text here.</p> */}
            </div>
         </div>
         <div className="skillBar">
            <img src={frameworks} alt='frameworks' className="skillBarImg"></img>
            <div className="skillBarText">
                <h2>Express/Sails Js/Nest Js</h2>
                {/* <p>This is demo text. You can write your text here.</p> */}
            </div>
         </div>
         <div className="skillBar">
            <img src={db} alt='MySQL/MongoDB' className="skillBarImg"></img>
            <div className="skillBarText">
                <h2>MySQL/MongoDB/PostgreSQL</h2>
                {/* <p>This is demo text. You can write your text here.</p> */}
            </div>
         </div>
         <div className="skillBar">
            <img src={react} alt='React js' className="skillBarImg"></img>
            <div className="skillBarText">
                <h2>React js/Redux</h2>
                {/* <p>This is demo text. You can write your text here.</p> */}
            </div>
         </div>
         <div className="skillBar">
            <img src={program} alt='React js' className="skillBarImg"></img>
            <div className="skillBarText">
                <h2>HTML/CSS/Java Sceipt/C/C++/Java/Data Structure</h2>
                {/* <p>This is demo text. You can write your text here.</p> */}
            </div>
         </div>
       </div>
       
       
       {/* <div className="skillBars">
       </div>
       <div className="skillBars">
       </div>
       <div className="skillBars">
       </div> */}
    </section>
  )
}

export default Skill