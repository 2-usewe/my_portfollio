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
        <h2 className="worksTitle">My Approach</h2>
        <p className="worksText">I am committed to writing clean, maintainable, and well-documented code. I believe in creating scalable solutions that can grow with the evolving needs of the project. By following best practices and staying up-to-date with the latest technologies, I ensure my projects are both efficient and future-proof.</p>

        <p className="worksText">One of my core strengths is building responsive, user-friendly interfaces that provide an intuitive experience. I focus not only on backend performance but also on ensuring a seamless connection between the backend and frontend, making sure the user interaction is smooth and seamless.</p>
        <div className="workImgs">
            <img src={pr1} alt="" className="worksImg" />
            <img src={pr2} alt="" className="worksImg" />
            <img src={pr3} alt="" className="worksImg" />
            {/* <img src={pr4} alt="" className="worksImg" />
            <img src={pr5} alt="" className="worksImg" />
            <img src={pr6} alt="" className="worksImg" /> */}
        </div>
        <h2 className="worksTitle">Why Choose Me?</h2>
        <div className='desc-content'>
          <p>Experience & Expertise:<span> With over 3 years in the industry, I bring valuable expertise to every project.</span></p>
          <p>Problem-Solving Mindset:<span> I take a strategic approach to solving complex technical challenges.</span></p>
          <p>Continuous Learning:<span> I stay on top of industry trends and emerging technologies to bring the best solutions to the table.</span></p>
          <p>Commitment to Quality:<span> I prioritize high standards in both code quality and the user experience.</span></p>
        </div>
        <button className="workBtn">See More</button>
    </section>
  )
}

export default Works