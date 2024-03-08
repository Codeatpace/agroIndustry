import React, { useRef, useEffect } from 'react'
import thakurLogo from '../AgroPictures/thakurLogo.jpeg'
import { Link } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  return (
    <>
      <nav style={{background:"radial-gradient(circle, white, grey)"}} className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div>
          <img src={thakurLogo} alt="Thakur Logo" width="20%" />

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          </div>
          <div className='navigation'>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link style={{ color: "black", textDecoration: "none" }} to={'/'}>Home </Link>
              </li>
              <li className="nav-item">
                <Link style={{ color: "black", textDecoration: "none" }} to={'/about'}>About </Link>
              </li>
              <li className="nav-item">
                <Link style={{ color: "black", textDecoration: "none" }} to={'/product'}>Product </Link>
              </li>
              <li className="nav-item">
                <Link style={{ color: "black", textDecoration: "none" }} to={'/contact'}>Contact </Link>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar