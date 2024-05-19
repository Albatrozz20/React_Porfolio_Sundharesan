import React from 'react'
import './project.css'
const Project = () => {
  const bmi = () => {
    window.open('https://albatrozz20.github.io/BMI-Calculator/', '_blank');
  };
  const pg = () => {
    window.open('https://albatrozz20.github.io/portfolio/','_blank');
  }
  const rp = () => {
    window.open('https://albatrozz20.github.io/Responsive-Porfolio-website/','_blank');
  }
  const plp = () => {
    window.open('https://www.linkedin.com/posts/sundharesan-i-78522527a_ui-ux-design-product-landing-page-activity-7178033020623364096-D33d?utm_source=share&utm_medium=member_desktop','_blank');
  }
  const lpd = () => {
    window.open('https://www.linkedin.com/posts/sundharesan-i-78522527a_ui-ux-design-mobile-login-page-activity-7178031355639816192-vkgz?utm_source=share&utm_medium=member_desktop','_blank');
  }
  return (
    <div id='PROJECT'>
      <h1 className='container works'>Works</h1>
      <br />
      <div class="container">
      <div class="row projects">
        <div class="col medlink rounded p-4">
         <h1 className='proj_title'>Med Link 360 - Software Based Solution</h1>
        </div>
        <div class="col iot rounded p-4">
          <h1 className='proj_title'>Enhancing Security at Harbor with an Advanced E-Gate System</h1>
        </div>
        <div class="col solar rounded p-4">
        <h1 className='proj_title'>Real - Time Monitoring of Solar home system using IOT.</h1>
        </div>
      </div>
    </div>
    <br />
    <h1 className='container works'>Mini Projects - Click to view</h1>
    <br />
    <div className="container">
      <div className="row probtns">
        <button className='col rounded p-4' onClick={plp}>UI UX landing page Design</button>
        <button className='col rounded p-4' onClick={lpd}>UI UX Login page Desgin</button>
        <button className='col rounded p-4' onClick={bmi}>BMI Calculator</button>
        <button className='col rounded p-4' onClick={pg}>Sample Portfolio Generator</button>
        <button className='col rounded p-4' onClick={rp}>Responsive portfolio</button>
      </div>
    </div>
    </div>
  )
}

export default Project