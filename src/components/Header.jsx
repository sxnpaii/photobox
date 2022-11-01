import React from 'react'
// logo
import logo from '../img/Logo.svg';

export default function header() {
  return (
    <div>
      <header className='App-header'>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <a className="navbar-brand" href="#!"><img src={logo} alt="" /> PHOTOFOX</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="flexed">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#!">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#!">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#!">Works</a>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  
                  <li className="nav-item">
                    <a href="#!" className="nav-link">contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}