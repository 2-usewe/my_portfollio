import React from 'react';
import './Home.css';
import boy from'../../utils/boy.png'
let Homecom = () => {

  const handleDownload = () => {
    // You can simply link to the file in the public folder
    const link = document.createElement('a');
    link.href = 'src/utils/Abhijitrusume1.pdf';  // Path relative to the public folder
    link.download = 'Abhijitrusume1.pdf';  // Optional: specify a download file name
    link.click();
  };


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
          <h5>450+</h5>
          <p>Client Served</p>
        </div>
        
        <div className='middle'>
          {/* <h1 className='left-quat'>''</h1> */}
          <div class="half-circle-container">
            <div class="half-circle"></div>
            <img className='boy-image' src={boy} alt="Logo" />
          </div>
        </div>
        <div className='right sub-content'>
          {/* <h1 className='left-quat'>''</h1> */}
          <i class="fa-solid fa-quote-left"></i>
          <p>Jenny's exceptional product design ensured our website's success. Highly recommended!</p>
          <h5>450+</h5>
          <p>Client Served</p>
        </div>
      </div>
    </div>
  );
};

export default Homecom;