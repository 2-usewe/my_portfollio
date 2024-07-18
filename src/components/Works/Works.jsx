import React from 'react'
import './works.css'
import pr1 from '../../utils/pro1.jpg'
import pr2 from '../../utils/pro2.jpg'
import pr3 from '../../utils/pro3.jpg'
import pr4 from '../../utils/pro7.jpg'
import pr5 from '../../utils/pro5.jpg'
import pr6 from '../../utils/pro6.jpg'

function Works() {
  return (
    <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <p className="worksText">I take pride in paying attention to the smallest details and making my work is pixel perfect. I am excited to bring my skill and experience to helps businesses achieve there goals and create a strong online presence.</p>
        <div className="workImgs">
            <img src={pr1} alt="" className="worksImg" />
            <img src={pr2} alt="" className="worksImg" />
            <img src={pr3} alt="" className="worksImg" />
            <img src={pr4} alt="" className="worksImg" />
            <img src={pr5} alt="" className="worksImg" />
            <img src={pr6} alt="" className="worksImg" />
        </div>
        <button className="workBtn">See More</button>
    </section>
  )
}

export default Works