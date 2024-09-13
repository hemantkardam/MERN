import React from 'react'
import Logo from './img/logo.svg'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <img src={Logo} alt="404" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active ms-3 fs-5" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active ms-2 fs-5" aria-current="page" href="/">Contact</a>
        </li> 
        <li className="nav-item">
          <a className="nav-link active ms-2 fs-5" aria-current="page" href="/">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active ms-2 fs-5" aria-current="page" href="/">Teams</a>
        </li>
    
        <li className="nav-item">
          <a className="nav-link active ms-2 fs-5" aria-current="page" href="/">About</a>
        </li>
    
        <li className="nav-item">
          <a className="nav-link active ms-2 fs-5" aria-current="page" href="/">Portfolio</a>
        </li>
      </ul>
      <form className="d-flex">
        <button className="btn btn-primary fs-5 rounded-pill" type="submit">Get Started</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
