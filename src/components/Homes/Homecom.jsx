import React from 'react';
import './Home.css';
let Homecom = () => {
  return (
    <div className='home-container'>
      <div className='title-content'>
      <h3 className='hello-logo'>Hello!</h3>
        <h1 className='sub-title'>
          <span className='title-desc'>I'am </span> 
          <span className='sub-title title-Name'>Jenny,</span><br />
          <span className='title-desc'>Product Designer</span>
        </h1>
      </div>
      <div className='content'>
        <div className='left sub-content'>
          {/* <h1 className='left-quat'>''</h1> */}
          <i class="fa-solid fa-quote-left"></i>
          <p>Jenny's exceptional product design ensured our website's success. Highly recommended!</p>
          <h5>+450</h5>
          <p>Client Served</p>
        </div>
      </div>
    </div>
  );
};

export default Homecom;