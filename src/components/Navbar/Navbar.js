import React from 'react'
import { Link } from 'react-router-dom';
import logo34 from '../../assests/logo34.png'
import './Navbar.css';

const Navbar = () => {
  return (
    <>
   
    <nav className="navbar navbar-expand-lg bg-info-subtle p-4 fixed-top ">
  <div className="container-fluid">
    <div className='gal'>
  <Link className="nav-link active fs-4" aria-current="page" to="/"><img src={logo34} alt='logo' /><b>Clicksturn</b></Link>
    
  </div>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link fs-5" to="/About">About</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle fs-5" to="/Services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/Marketing">Digital Marketing</Link></li>
            <li><Link className="dropdown-item" to="/Recruit">Recruiting</Link></li>
            <li><Link className="dropdown-item" to="/Career">Career Services</Link></li>
          </ul>
        </li>
        <li className="nav-item">
        <Link className="nav-link fs-5" to="/Contact">Contact</Link>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


</>
  )
}

export default Navbar
