import React from 'react'
import './about.css'
const About = () => {
  return (
    <div id='ABOUT'>
        <div className="container">
          <div className="row about">
            <div className="col title skills p-4 text-center">
              <h1 className='text-center'>Skills</h1>
              <br />
              <div className='skdetail'>
                <div class="sk1 skcont text-center">
                  <h1>Web Developement</h1>
                  <h6>( HTML CSS JS REACT BOOTSRAP )</h6>
                </div>
                <div class="sk2 skcont">
                  <h1>Graphics Design</h1>
                  <h6>Photoshop / Illustator</h6>
                </div>  
                <div class="sk3 skcont">
                  <h1>After effects</h1>
                  <h6>Animation / Video editing</h6>
                </div>
              </div>
              <br />
              <div className="container">
              <div className="row lk">
                <div className="col lang rounded d-flex align-items-center justify-content-center">
                  <h1>C</h1>
                </div>
                <div className="col lang rounded d-flex align-items-center justify-content-center">
                  <h1>Java</h1>
                </div>
                <div className="col lang rounded d-flex align-items-center justify-content-center">
                  <h1>HTML / CSS / JS</h1>
                </div>
                <div className="col lang rounded d-flex align-items-center justify-content-center">
                  <h1>React / Bootstrap</h1>
                </div>
              </div>
              </div>
            </div>
            <div className="col text-center">
              <div className='line'>

              </div>
            </div>
            <div className="col title skills p-4 text-center">
              <h1 className='text-center'>Internships</h1>
              <br />
              <div className='skdetail'>
                <div class="sk1 skcont text-center">
                  <h1>Full Stack Development</h1>
                  <h6>at Webstack Academy</h6>
                </div>
                <div class="sk2 skcont">
                  <h1>Web Development</h1>
                  <h6>at InternIQ</h6>
                </div>  
                <div class="sk3 skcont">
                  <h1>UI UX</h1>
                  <h6>at InternIQ</h6>
                </div>
              </div>
              <br />
              <div className="container">
              <div className="row lk">
              <div className="col lang qualify rounded d-flex flex-column align-items-center justify-content-center">
                  <h1>Qualification</h1>
                </div>
                <div className="col lang rounded d-flex flex-column align-items-center justify-content-center">
                  <h1>BE CSE</h1>
                  <h6>2025</h6>
                </div>
                <div className="col lang rounded d-flex flex-column align-items-center justify-content-center">
                  <h1>DEEE</h1>
                  <h6>2022</h6>
                </div>
                <div className="col lang rounded d-flex flex-column align-items-center justify-content-center">
                  <h1>HSE CS</h1>
                  <h6>2020</h6>
                </div>
                <div className="col lang rounded d-flex flex-column align-items-center justify-content-center">
                  <h1>SSLC</h1>
                  <h6>2018</h6>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About