import React from 'react'
import './skill.css';
import node from '../../utils/node.png';
import db from '../../utils/db.png';
import react from '../../utils/logo192.png'

function Skill() {
  return (
    <section id="skills">
       <span className="skillTitle">What I do</span> <br />
       <span className="skillDesc">I am a skilled and passionate web designer with expreience in Node js, Express js,React js.Write othe demo texte here about you skills.</span>
       <div className="skillBars">
         <div className="skillBar">
            <img src={node} alt='Node js' className="skillBarImg"></img>
            <div className="skillBarText">
                <h2>API/Rest API with Node js</h2>
                <p>This is demo text. You can write your text here.</p>
            </div>
         </div>
       </div>
       <div className="skillBars">
         <div className="skillBar">
            <img src={db} alt='MySQL/MongoDB' className="skillBarImg"></img>
            <div className="skillBarText">
                <h2>MySQL/MongoDB</h2>
                <p>This is demo text. You can write your text here.</p>
            </div>
         </div>
       </div>
       <div className="skillBars">
         <div className="skillBar">
            <img src={react} alt='React js' className="skillBarImg"></img>
            <div className="skillBarText">
                <h2>React js</h2>
                <p>This is demo text. You can write your text here.</p>
            </div>
         </div>
       </div>
    </section>
  )
}

export default Skill