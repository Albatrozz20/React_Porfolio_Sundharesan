import React from 'react'
import './nav.css'
import logo from './logo.png'
const Nav = () => {
    
  return (
    <div className='sticky-top'>
    <nav class="navbar">
      <div class="container-fluid inner_nav">
        <img className='logo' src={logo} alt="" />
        <div className="navlinks">
            <a className='nav-link rounded' href="#HOME">Home</a>
            <a className='nav-link rounded' href="#PROJECT">Projects</a>
            <a className='nav-link rounded' href="#ABOUT">About</a>
            <a className='nav-link rounded' href="#CONTACT">Contact</a>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" fdprocessedid="fvj8pl">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Sundharesan I</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link inner_link rounded" href="#HOME">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link inner_link rounded" href="#PROJECT">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link inner_link rounded" href="#ABOUT">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link inner_link rounded" href="#CONTACT">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Nav