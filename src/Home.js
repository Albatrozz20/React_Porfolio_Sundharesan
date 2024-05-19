import React from 'react'
import './home.css'
import resume from './resume.pdf'
const Home = () => {
  const openResume = () => {
    // This will open the file in a new tab or window
    window.open(resume, '_blank');
  };
  return (
    <div id='HOME'>
        <div className="container details d-flex align-items-center justify-content-center flex-column">
            <div className="l1 d-flex">
                <h1>I'm</h1><h1 className='name'>Sundharesan</h1>
            </div>
            <h1 className='pos'>a Web Developer and a Designer</h1>
            <br />
            <button className='cv rounded' onClick={openResume}>Download CV</button>
        </div>
    </div>
  )
}

export default Home