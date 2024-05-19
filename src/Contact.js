import React from 'react'
import './contact.css'
import mail from './mail.png'
import ph from './ph.png'
import insta from './insta.png'
import link from './link.png'
import git from './git.png'
const Contact = () => {
  return (
    <div id='CONTACT'>
        <div className="container">
            <h1 className='text-center contact'>Contact Me - Click to view</h1>
            <div className="row contcont">
                <div className="col rounded cont-det d-flex flex-column align-items-center justify-content-center">
                    <a href="#CONTACT"><img className='icon' src={ph} alt="" /></a>
                    <h6 className='cont'>+91 7397104290</h6>
                </div>
                <div className="col rounded cont-det d-flex flex-column align-items-center justify-content-center">
                    <a href="#CONTACT"><img className='icon' src={mail} alt="" /></a>
                    <h6 className='cont'>thatismyhappiness@gmail.com</h6>
                </div>
                <div className="col rounded cont-det d-flex flex-column align-items-center justify-content-center">
                    <a href="https://www.instagram.com/its_me_albatrozz/"><img className='icon' src={insta} alt="" /></a>
                    <h6 className='cont'>its_me_albatrozz</h6>
                </div>
                <div className="col rounded cont-det d-flex flex-column align-items-center justify-content-center">
                    <a href="https://www.linkedin.com/in/sundharesan-i-78522527a/"><img className='icon' src={link} alt="" /></a>
                    <h6 className='cont'>sundharesan-i</h6>
                </div>
                <div className="col rounded cont-det d-flex flex-column align-items-center justify-content-center">
                    <a href="https://github.com/Albatrozz20"><img className='icon' src={git} alt="" /></a>
                    <h6 className='cont'>Albatrozz20</h6>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Contact